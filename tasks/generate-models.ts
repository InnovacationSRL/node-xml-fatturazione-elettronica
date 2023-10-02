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
function nameOf(x: any): string {
  return x._attributes.name
}
function filterUndefined<T>(array: (T | undefined)[]): T[] {
  return array.filter(x => x) as T[]
}

function extract(x: any): Tree | undefined {
  let inner = x["xs:sequence"]?.["xs:element"]
  let children = (
    () => {
      if(Array.isArray(inner))
        return { children: filterUndefined(inner.map(extract)), kind: "node" } as const
      else if(typeof inner === "object")
        return { type: inner._attributes.type as string, kind: "leaf" } as const
      else return { type: x._attributes.type as string, kind: "leaf" } as const
    }
  )()
  if (!nameOf(x)) return undefined
  return {
    name: nameOf(x),
    ...children,
    // o: x
  } as any
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

type Tree = Node | Leaf
type Forest = Tree[]
function generateChildren(children: Leaf[]) {
  if (!children) {
    return []
  }
  return children.map(({ name, type }) => `${name}: ${xsdToZodType(type)}`)
}
function infer(name: string) {
  return `export type ${name} = z.infer<typeof ${name}>`
}

class SchemaBuilder {
  emitted = new Set<string>()
  buffer: string[] = []
  constructor(private schema: Forest) {

  }
  findMap(name: string, callback: (tree: Tree, nodeSet: SchemaBuilder) => void) {
    const found = this.schema.find(node => node.name === name)
    if(found && this.isNotEmitted(found.name)) {
      callback(found, this)
    }  
  }
  isNotEmitted = (name: string) => {
    return !this.emitted.has(name)
  }
  private toCode(tree: Tree) {
    if (tree.kind === "node") {
      const { name, children } = tree
      if (!children) s(name)
      return `export const ${name} = z.strictObject({${generateChildren(children).join(", ")}})\n${infer(name)}\n`
    } else {
      const { name, type } = tree
      return `export const ${name} = ${xsdToZodType(type)};\n${infer(name)}\n`
    }
  }
  emit(node: Tree) {
    if(this.isNotEmitted(node.name)) {
      this.emitted.add(node.name)
      this.buffer.push(this.toCode(node))
    }
  }
  build() {
    return this.buffer.join('\n')
  }
}
function checkNode(tree: Tree, builder: SchemaBuilder) {
  switch(tree.kind) {
    case "leaf":
      if (builder.isNotEmitted(tree.type)) {
        builder.findMap(tree.type, checkNode)
      }
      builder.emit(tree)
      return;
    case "node": 
      for (const child of tree.children) {
        if(builder.isNotEmitted(child.type)) {
          builder.findMap(child.type, checkNode)
        }
      }
      builder.emit(tree)
      return;
  }
}

function generateComplexTypes(schema: Forest) {
  let builder = new SchemaBuilder(schema)
  for (const x of schema) {
    checkNode(x, builder)
  }
  return builder.build();
}

let simpleTypes = generateSimpleTypes(simple)
let complexTypes = generateComplexTypes(complex)
let types = [
  "import { z } from 'zod'",
  simpleTypes,
  complexTypes,
].join('\n')

writeFileSync('src/test_schema.ts', types)
prettify('src/test_schema.ts')