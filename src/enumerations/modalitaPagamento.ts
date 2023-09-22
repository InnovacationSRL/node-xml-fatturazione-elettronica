import { z } from "zod"
export const ModalitaPagamentoValues = z.object({
  MP01: z.string().describe("contanti"),
  MP02: z.string().describe("assegno"),
  MP03: z.string().describe("assegno circolare"),
  MP04: z.string().describe("contanti presso Tesoreria"),
  MP05: z.string().describe("bonifico"),
  MP06: z.string().describe("vaglia cambiario"),
  MP07: z.string().describe("bollettino bancario"),
  MP08: z.string().describe("carta di pagamento"),
  MP09: z.string().describe("RID"),
  MP10: z.string().describe("RID utenze"),
  MP11: z.string().describe("RID veloce"),
  MP12: z.string().describe("RIBA"),
  MP13: z.string().describe("MAV"),
  MP14: z.string().describe("quietanza erario"),
  MP15: z.string().describe("giroconto su conti di contabilità speciale"),
  MP16: z.string().describe("domiciliazione bancaria"),
  MP17: z.string().describe("domiciliazione postale"),
  MP18: z.string().describe("bollettino di c/c postale"),
  MP19: z.string().describe("SEPA Direct Debit"),
  MP20: z.string().describe("SEPA Direct Debit CORE"),
  MP21: z.string().describe("SEPA Direct Debit B2B"),
  MP22: z.string().describe("Trattenuta su somme già riscosse"),
  MP23: z.string().describe("PagoPA"),
})
export const ModalitaPagamento = ModalitaPagamentoValues.keyof()
export type ModalitaPagamento = z.infer<typeof ModalitaPagamento>

