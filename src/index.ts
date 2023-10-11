import * as schema from "~/test_schema"
import { SafeParseReturnType, ZodError } from "zod"
import * as xml from "xml-js"

// export function parse(data: unknown): schema.FatturaElettronicaType {
//   return schema.FatturaElettronicaType.parse(data)
// }

// export function safeParse(data: unknown): SafeParseReturnType<unknown, schema.FatturaElettronicaType> {
//   return schema.FatturaElettronicaType.safeParse(data) 
// }
export type ValidationError = {
  origin: 'zod',
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
type InvoiceResult = Ok | Error
function fromZodError(error: ZodError<unknown>): ValidationError {
  return {
    origin: 'zod',
    error
  }
}
export function parse(data: unknown): InvoiceResult {
  const result = schema.FatturaElettronicaType.safeParse(data)
  if(result.success) {
    return {
      success: true,
      invoice: result.data
    }
  } else { 
    return {
      success: false, 
      error: fromZodError(result.error)
    }
  }
}
export function toXML(invoice: schema.FatturaElettronicaType): string {
  return xml.js2xml(invoice)
}
export function fromXML(data: string): InvoiceResult {
  const xmlObj: any = xml.xml2js(data, {compact: true})
  const invoice = parse(xmlObj["ns2:FatturaElettronica"])
  return invoice
}

export function validateXML(xml: string): ValidationError | null {
  return null
}

export default {
  parse, toXML, fromXML, validateXML
}
