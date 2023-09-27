import { readFileSync, writeFileSync } from "fs"
import xml from "xml-js"
// import { prettify } from './utils';
import _ from "lodash"
import z from "zod"
import { type } from "os"
import { prettify } from "./utils"
import c from 'cli-color'
const file = readFileSync("./docs/agenzia-entrate/Schema_VFPR12.xsd", { encoding: "utf8" })
const sheetData = xml.xml2json(file, { compact: true })
const sheet: any = JSON.parse(sheetData)
const s = console.log.bind(console)
function nameOf(x: any) {
  return x._attributes.name
}
function extract(x: any): any {
  let inner = x["xs:sequence"]?.["xs:element"]
  let children = Array.isArray(inner)
    ? { children: inner.map(extract).filter(x => x), kind: "node" }
    : typeof inner === "object"
    ? { type: inner._attributes.type, kind: "leaf" }
    : { type: x._attributes.type, kind: "leaf" }
  if (!nameOf(x)) return undefined
  return {
    name: nameOf(x),
    ...children,
    // o: x
  }
}
function extractSimple(x: any): Leaf  {
  const xsdType = x[`xs:restriction`]._attributes.base.slice(3)
  return {
    name: nameOf(x),
    type: xsdType,
    kind: 'leaf'
  }
}

function xsdToZodType(type: string) {
  if (type.startsWith("xs:")) type = type.slice(3)
  function inner() {
    switch (type) {
      case "decimal":
      case "integer":
        return "number"
      case "date":
      case "string":
      case "normalizedString":
      case "dateTime":
      case "base64Binary":
      case "token":
        return "string"
      default:
        return null
    }
  }
  let v = inner()
  return v ? `z.${v}()` : type
}
let complex = sheet[`xs:schema`][`xs:complexType`].map(extract)
let simple: Leaf[] = sheet[`xs:schema`][`xs:simpleType`].map(extractSimple) //.map(_.property('type'))
function generateSimpleTypes(types: Leaf[]) {
  const generate: (o: Leaf) => string = ({ name, type }) => `const ${name} = ${xsdToZodType(type)};\n${infer(name)}\n`
  return types.map(generate).join("\n")
}
let buf = "import { z } from 'zod' \n"
interface Leaf {
  kind: "leaf"
  name: string
  type: string
}
interface Node {
  kind: "node"
  name: string
  children: Leaf[]
}

type Tree = (Node | Leaf)[]
function generateChildren(children: Leaf[]) {
  if (!children) {
    return []
  }
  return children.map(({ name, type }) => `${name}: ${xsdToZodType(type)}`)
}
function infer(name: string) {
  return `type ${name} = z.infer<typeof ${name}>`
}
// function generateComplexTypes(tree: Tree) {
//   return tree
//     .map(level => {
//       if (level.kind === "node") {
//         const { name, children } = level
//         if (!children) s(name)
//         return `const ${name} = z.object({${generateChildren(children).join(", ")}})\n${infer(name)}\n`
//       } else {
//         const { name, type } = level
//         return `const ${name} = ${xsdToZodType(type)};\n${infer(name)}\n`
//       }
//     })
//     .reverse()
//     .join("\n")
// }

// s(generateComplexTypes(complex))


function toCode(x: Node | Leaf) {
  if (x.kind === "node") {
    const { name, children } = x
    if (!children) s(name)
    return `const ${name} = z.object({${generateChildren(children).join(", ")}})\n${infer(name)}\n`
  } else {
    const { name, type } = x
    return `const ${name} = ${xsdToZodType(type)};\n${infer(name)}\n`
  }
}
let html = "<html><head><style>tr:nth-child(odd){background-color:#ccc}</style></head><body>";
function generateComplexTypes(schema: Tree) {
  let emitted = new Set<string>()
  let buf = "";
  html += "<table>"
  const SIMPLE_NAMES = simple.map(x => x.name)
  const emit = (x: Node | Leaf) => {
    log(x.name, 'EMITTING --')
    if(isEmitted(x.name)) return;
    if(SIMPLE_NAMES.includes(x.name)) return;
    log(x.name, 'EMITTING SUCCESS: ')
    buf += toCode(x)
    emitted.add(x.name)
  }
  
  function log(name: string, tag: string) {
    let l = (_:string, _2: string) => {}
    let col = ""
    if(isEmitted(name)) {
      l = c.yellow
      col = "red"
    } else {
      l = c.green
      col = "green"
    }
    s(l(tag, name))
    html += `<tr style="color:${col}"><td>${name}</td><td>${tag}</td></tr>`
  }
  const isEmitted = (name: string) => emitted.has(name) || simple.findIndex(v => v.name === name) !== -1
  function recur(name: string) {
    log(name, 'RECUR HAPPENING')
    const found = schema.find(x => x.name === name)
    if(found && !isEmitted(found.name)) {
      log(name, 'RECUR FOUND')
      checkNode(found)
    }
  }
  function checkNode(x: Node | Leaf) {
    log(x.name, 'CHECKING')
    if (x.kind === "leaf") {
      log(x.name, 'CASE LEAF')
      
      if (isEmitted(x.type)) {
        log(x.name, 'EMITTING LEAF')
        emit(x)
      } else {
        log(x.type, 'RECURRING LEAF ON')
        recur(x.type)
        log(x.name, 'EMITTING LEAF')
        emit(x)
      }
    } else {
      log(x.name, 'CASE NODE')
      for (const child of x.children) {
        log(child.name, `CHILD OF ${x.name}`)
        if(isEmitted(child.type)) {
          log(child.name, 'TYPE IS ALREADY EMITTED, SKIPPING')
          continue;
        } else {
          log(child.type, `RECURRING ON, CHILD OF ${child.name}`)
          recur(child.type)
        }
      }
      emit(x)
    }
  }

  for (const x of schema) {
    log(x.name, 'EMITTING TOP LEVEL NODE')
    checkNode(x)
  }
  if(emitted.size !== schema.length) {
    // console.log('WTF')
    // console.log('emitted: ', [...emitted].length)
    // console.log('simple', simple.map(x => x.name))
    // console.log('schema: ', schema.length)
  } else {
    // console.log('emit OK')
  }
  html += "</table>"
  return buf;
}

buf += generateSimpleTypes(simple)
buf += "\n"
html += `<pre style="border: 1px solid red">${buf.replaceAll('<', '&lt;').replaceAll('>', '&gt;')}</pre>`
html += `<pre style="border: 1px solid blue">${JSON.stringify(complex, null, 2)}</pre>`
buf += generateComplexTypes(complex)
buf += "\n"
writeFileSync('log.html', html)

writeFileSync('src/test_schema.ts', buf)
prettify('src/test_schema.ts')