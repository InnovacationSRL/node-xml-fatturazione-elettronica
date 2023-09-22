import { z } from "zod"
export const TipoDocumentoValues = z.object({
  TD01: z.string().describe("fattura"),
  TD02: z.string().describe("acconto/anticipo su fattura"),
  TD03: z.string().describe("acconto/anticipo su parcella"),
  TD04: z.string().describe("nota di credito"),
  TD05: z.string().describe("nota di debito"),
  TD06: z.string().describe("parcella"),
  TD16: z.string().describe("integrazione fattura reverse charge interno"),
  TD17: z.string().describe("integrazione/autofattura per acquisto servizi dall'estero"),
  TD18: z.string().describe("integrazione per acquisto di beni intracomunitari"),
  TD19: z.string().describe("integrazione/autofattura per acquisto di beni ex art.17 c.2 DPR 633/72"),
  TD20: z
    .string()
    .describe("autofattura per regolarizzazione e integrazione delle fatture (ex art.6 c.8 e 9-bis d.lgs. 471/97  o  art.46 c.5 D.L. 331/93)"),
  TD21: z.string().describe("autofattura per splafonamento"),
  TD22: z.string().describe("estrazione beni da Deposito IVA"),
  TD23: z.string().describe("estrazione beni da Deposito IVA con versamento dell'IVA"),
  TD24: z.string().describe("fattura differita di cui all'art. 21, comma 4, terzo periodo lett. a) DPR 633/72"),
  TD25: z.string().describe("fattura differita di cui all'art. 21, comma 4, terzo periodo lett. b) DPR 633/72"),
  TD26: z.string().describe("cessione di beni ammortizzabili e per passaggi interni (ex art.36 DPR 633/72)"),
  TD27: z.string().describe("fattura per autoconsumo o per cessioni gratuite senza rivalsa"),
  TD28: z.string().describe("acquisti da San Marino con IVA (fattura cartacea)"),
})
export const TipoDocumento = TipoDocumentoValues.keyof()
export type TipoDocumento = z.infer<typeof TipoDocumento>
