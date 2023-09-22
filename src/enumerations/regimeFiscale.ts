import { z } from "zod"
export const RegimeFiscaleValues = z.object({
  RF01: z.string().describe("Ordinario"),
  RF02: z.string().describe("Contribuenti minimi (art.1, c.96-117, L. 244/07) "),
  RF04: z.string().describe("Agricoltura e attività connesse e pesca (artt.34 e 34-bis, DPR 633/72) "),
  RF05: z.string().describe("Vendita sali e tabacchi (art.74, c.1, DPR. 633/72) "),
  RF06: z.string().describe("Commercio fiammiferi (art.74, c.1, DPR  633/72) "),
  RF07: z.string().describe("Editoria (art.74, c.1, DPR  633/72)"),
  RF08: z.string().describe("Gestione servizi telefonia (art.74, c.1, DPR 633/72) "),
  RF09: z.string().describe("Rivendita documenti di trasporto pubblico e di sosta (art.74, c.1, DPR  633/72) "),
  RF10: z.string().describe("Intrattenimenti, giochi e altre attività di cui alla tariffa allegata al DPR 640/72 (art.74, c.6, DPR 633/72) "),
  RF11: z.string().describe("Agenzie viaggi e turismo (art.74-ter, DPR 633/72) "),
  RF12: z.string().describe("Agriturismo (art.5, c.2, L. 413/91) "),
  RF13: z.string().describe("Vendite a domicilio (art.25-bis, c.6, DPR  600/73) "),
  RF14: z.string().describe("Rivendita beni usati, oggetti d’arte, d’antiquariato o da collezione (art.36, DL 41/95) "),
  RF15: z.string().describe("Agenzie di vendite all’asta di oggetti d’arte, antiquariato o da collezione (art.40-bis, DL 41/95) "),
  RF16: z.string().describe("IVA per cassa P.A. (art.6, c.5, DPR 633/72) "),
  RF17: z.string().describe("IVA per cassa (art. 32-bis, DL 83/2012) "),
  RF18: z.string().describe("Altro"),
  RF19: z.string().describe("Regime forfettario (art.1, c.54-89, L. 190/2014)"),
})
export const RegimeFiscale = RegimeFiscaleValues.keyof()
export type RegimeFiscale = z.infer<typeof RegimeFiscale>
