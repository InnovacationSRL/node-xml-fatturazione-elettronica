import * as schema from "~/test_schema"
import { SafeParseReturnType } from "zod"

// export function parse(data: unknown): schema.FatturaElettronicaType {
//   return schema.FatturaElettronicaType.parse(data)
// }

// export function safeParse(data: unknown): SafeParseReturnType<unknown, schema.FatturaElettronicaType> {
//   return schema.FatturaElettronicaType.safeParse(data) 
// }

export declare function parse(data: unknown): schema.FatturaElettronicaType
export declare function safeParse(data: unknown): SafeParseReturnType<unknown, schema.FatturaElettronicaType>

export declare function toXML(invoice: schema.FatturaElettronicaType): string
export declare function fromXML(data: string): schema.FatturaElettronicaType
export declare function safeFromXML(data: string): SafeParseReturnType<unknown, schema.FatturaElettronicaType>

export declare type ValidationError = never //TBD
export declare function validateXML(xml: string): ValidationError
export declare function validateInvoice(invoice: schema.FatturaElettronicaType): ValidationError

