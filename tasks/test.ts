import { readFileSync, writeFileSync } from "fs"
import * as _ from "lodash"
import { parse, fromXML, toXML, validateXML } from "~/index"
import * as x from "xml-js"
import { match, P } from "ts-pattern"
import validate from "xsd-validator"

const PATH =
  "docs/agenzia-entrate/Esempi fattura, hash e ricevute/ST Fatturazione elettronica - ITHVQWPH73P42H501Y_00023_ITHVQWPH73P42H501Y_00023.xml"
const PATH_TEST1 = "IT016417907022023c_09RCz.xml"
const PATH_TEST2 = "IT016417907022023r_09GMx.xml"
const xml = readFileSync(PATH_TEST2, { encoding: "utf8" })
const invoice = x.xml2js(xml, { compact: true }) as any

function removeText(object: any) {
  if (typeof object === "object") {
    const keys = Object.keys(object)
    for (const key of keys) {
      match(object[key])
        .with({ _text: P.string.select() }, text => {
          object[key] = text
        })
        .otherwise(() => removeText(object[key]))

      const innerKeys = Object.keys(object[key])
      if (innerKeys.length === 1 && innerKeys[0] === "_text") {
        object[key] = object[key]._text
      } else {
        removeText(object[key])
      }
    }
  }
}
const v = invoice["ns3:FatturaElettronica"]
removeText(v)
if (v["ds:Signature"]) {
  delete v["ds:Signature"]
}
if (v._attributes) {
  delete v._attributes
}
const result = parse(v)
if (result.success) {
  const z = x.js2xml(result.invoice, { compact: true })

  const xml = toXML(result.invoice)
  writeFileSync("./fattura.xml", xml)
  const r = validateXML(xml)
  console.log(r)
} else {
  console.error(result.error)
}
