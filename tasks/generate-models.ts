import { readFileSync, writeFileSync } from "fs"
import xml from "xml-js"
// import { prettify } from './utils';
import _ from "lodash"
import z from "zod"
import { type } from "os"
import { prettify } from "./utils"
import c from 'cli-color'
import { match, P } from "ts-pattern"
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
function brr(...params: any[]) {
  console.log(params)
}

function extractChoices(choices: any) {
  const elements: any[] = choices["xs:sequence"]
  const cases = elements
    .map(element =>
      match(element["xs:element"])
        .with({ _attributes: { name: P.string.select("name"), type: P.string.select("type") } }, s => [s])
        .with(P.array(
          { _attributes: P.select({ name: P.string, type: P.string }) }
        ), s => s)
        .run()
    )
  return cases
}
function extract(x: any): Tree | undefined {
  let inner = x["xs:sequence"]?.["xs:element"]
  if (x._attributes.name?.includes("Anagrafica")) {
    console.log()
  }
  let extractChildren =
    (inner: any) => {
      if (Array.isArray(inner))
        return { children: filterUndefined(inner.map(extract)), kind: "node" } as const
      else if (typeof inner === "object")
        return { type: inner._attributes.type as string, kind: "leaf" } as const
      else return { type: x._attributes.type as string, kind: "leaf" } as const
    }
  const children = extractChildren(inner)
  let choices = x["xs:sequence"]?.["xs:choice"]
  if (choices) {
    choices = extractChoices(choices)
  }
  if (choices) {
    brr(choices)
  }
  if (!nameOf(x)) return undefined
  console.log(nameOf(x), x._attributes.minOccurs)
  return {
    name: nameOf(x),
    ...children,
    choices,
    optional: x._attributes.minOccurs === "0"
    // o: x
  } as any
}
function extractSimple(x: any): Leaf {
  const xsdType = x[`xs:restriction`]._attributes.base.slice(3)
  return {
    name: nameOf(x),
    type: xsdType,
    optional: false,
    kind: 'leaf'
  }
}

function xsdToZodType(type: string, optional: boolean) {
  if (type.startsWith("xs:")) type = type.slice(3)
  function inner() {
    switch (type) {
      case "decimal":
      case "integer":
        return "coerce.number"
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
  return v ? `z.${v}()${optional ? '.optional()' : ''}` : type
}
let complex = sheet[`xs:schema`][`xs:complexType`].map(extract)
let simple: Leaf[] = sheet[`xs:schema`][`xs:simpleType`].map(extractSimple) //.map(_.property('type'))
function generateSimpleTypes(types: Leaf[]) {
  const generate: (o: Leaf) => string = ({ name, type, optional }) => `const ${name} = ${xsdToZodType(type, optional)};\n${infer(name)}\n`
  return types.map(generate).join("\n")
}
interface Leaf {
  kind: "leaf"
  name: string
  type: string
  optional: boolean
}
interface Node {
  kind: "node"
  name: string
  children: Leaf[]
  choices?: {name: string, type: string}[][]
  optional: boolean
}

type Tree = (Node | Leaf)
type Forest = Tree[]
function generateChildren(children: Leaf[]) {
  if (!children) {
    return []
  }
  let childPortion = children.map(({ name, type, optional }) => `${name}: ${xsdToZodType(type, optional)}`)

  return childPortion;
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
    if (found && this.isNotEmitted(found.name)) {
      callback(found, this)
    }
  }
  isNotEmitted = (name: string) => {
    return !this.emitted.has(name)
  }
  // private getUnionCases(choices: Tree[]) {
  //   return choices.map(choice => 
  //     match(choice)
  //       .with({ kind: 'leaf' }, leaf => leaf.type)
  //       .with({ kind: 'node', children: P.select() }, children => 
  //         ``
  //       )
  //       .exhaustive()
  //   )
  // }
  private getUnionCases(cases: {name: string, type: string}[][]) {
    return cases.map(unionCase => {
      const fields = unionCase.map(({name, type}) => `${name}: ${type}`)
      return `z.strictObject({${fields.join(', ')}})`
    })  
  }
  private toCode(tree: Tree) {
    if (tree.kind === "node") {
      const { name, children, choices } = tree
      if (!children) s(name)
      const childrenSection = `z.strictObject({${generateChildren(children).join(", ")}})`
      let body = "";
      if (choices) {
        const unionCases: any[] = this.getUnionCases(choices)
        const unionSection = `z.union([${unionCases.join(', ')}])`
        body = `z.intersection(${childrenSection}, ${unionSection})`
      } else {
        body = childrenSection
      }
      return `export const ${name} = ${body}\n${infer(name)}\n`
    } else {
      const { name, type, optional } = tree
      return `export const ${name} = ${xsdToZodType(type, optional)};\n${infer(name)}\n`
    }
  }
  emit(node: Tree) {
    if (this.isNotEmitted(node.name)) {
      this.emitted.add(node.name)
      this.buffer.push(this.toCode(node))
    }
  }
  build() {
    return this.buffer.join('\n')
  }
}
function checkNode(tree: Tree, builder: SchemaBuilder) {
  switch (tree.kind) {
    case "leaf":
      if (builder.isNotEmitted(tree.type)) {
        builder.findMap(tree.type, checkNode)
      }
      builder.emit(tree)
      return;
    case "node":
      for (const child of tree.children) {
        if (builder.isNotEmitted(child.type)) {
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