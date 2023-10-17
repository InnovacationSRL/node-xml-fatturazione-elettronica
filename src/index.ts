import * as schema from "~/test_schema"
import { SafeParseReturnType, ZodError } from "zod"
import * as xml from "xml-js"
import { P, match } from "ts-pattern"
import validateSchema from "xsd-validator"
import { readFileSync } from "fs"

// export function parse(data: unknown): schema.FatturaElettronicaType {
//   return schema.FatturaElettronicaType.parse(data)
// }

// export function safeParse(data: unknown): SafeParseReturnType<unknown, schema.FatturaElettronicaType> {
//   return schema.FatturaElettronicaType.safeParse(data)
// }
export type ValidationError = {
  origin: "zod"
  error: ZodError<unknown>
}
export interface Ok {
  success: true
  invoice: schema.FatturaElettronicaType
}
export interface Error {
  success: false
  error: ValidationError
}
export type InvoiceResult = Ok | Error
function fromZodError(error: ZodError<unknown>): ValidationError {
  return {
    origin: "zod",
    error,
  }
}
export function parse(data: unknown): InvoiceResult {
  const result = schema.FatturaElettronicaType.safeParse(data)
  if (result.success) {
    return {
      success: true,
      invoice: result.data,
    }
  } else {
    return {
      success: false,
      error: fromZodError(result.error),
    }
  }
}
export function toXML(invoice: schema.FatturaElettronicaType): string {
  const invoiceXml = xml.js2xml(invoice, { compact: true })
  const outputXml = `<?xml version="1.0" encoding="UTF-8"?>
  <ns3:FatturaElettronica versione="FPR12"
    xmlns:ns2="http://www.w3.org/2000/09/xmldsig#"
    xmlns:ns3="http://ivaservizi.agenziaentrate.gov.it/docs/xsd/fatture/v1.2">
  ${invoiceXml}
  </ns3:FatturaElettronica>`
  return outputXml
}
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
export function fromXML(data: string): InvoiceResult {
  const xmlObj: any = xml.xml2js(data, { compact: true })
  const v = xmlObj["ns3:FatturaElettronica"]
  removeText(v)
  if (v["ds:Signature"]) {
    delete v["ds:Signature"]
  }
  if (v._attributes) {
    delete v._attributes
  }
  return parse(v)
}

export function validateXML(xml: string): any {
  const schema = readFileSync("./docs/agenzia-entrate/Schema_VFPR12.xsd", { encoding: "utf8" })
  return validateSchema(xml, schema)
}
