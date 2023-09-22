import { xml2js } from "xml-js"
import { z } from "zod"
export const NaturaValues = z.object({
  N1: z.string().describe("escluse ex art. 15 del DPR 633/72"),
  "N2.1": z.string().describe("non soggette ad IVA ai sensi degli artt. da 7 a 7-septies del DPR 633/72"),
  "N2.2": z.string().describe("non soggette - altri casi"),
  "N3.1": z.string().describe("non imponibili - esportazioni"),
  "N3.2": z.string().describe("non imponibili - cessioni intracomunitarie"),
  "N3.3": z.string().describe("non imponibili - cessioni verso San Marino"),
  "N3.4": z.string().describe("non imponibili - operazioni assimilate alle cessioni all'esportazione"),
  "N3.5": z.string().describe("non imponibili - a seguito di dichiarazioni d'intento"),
  "N3.6": z.string().describe("non imponibili - altre operazioni che non concorrono alla formazione del plafond"),
  N4: z.string().describe("esenti"),
  N5: z.string().describe("regime del margine / IVA non esposta in fattura"),
  "N6.1": z.string().describe("inversione contabile - cessione di rottami e altri materiali di recupero"),
  "N6.2": z.string().describe("inversione contabile - cessione di oro e argento ai sensi della legge 7/2000 nonché di oreficeria usata ad OPO"),
  "N6.3": z.string().describe("inversione contabile - subappalto nel settore edile"),
  "N6.4": z.string().describe("inversione contabile - cessione di fabbricati"),
  "N6.5": z.string().describe("inversione contabile - cessione di telefoni cellulari"),
  "N6.6": z.string().describe("inversione contabile - cessione di prodotti elettronici"),
  "N6.7": z.string().describe("inversione contabile - prestazioni comparto edile e settori connessi"),
  "N6.8": z.string().describe("inversione contabile - operazioni settore energetico"),
  "N6.9": z.string().describe("inversione contabile - altri casi"),
  N7: z
    .string()
    .describe(
      "IVA assolta in altro stato UE (prestazione di servizi di telecomunicazioni, tele-radiodiffusione ed elettronici ex art. 7-octies, comma 1 lett. a, b, art. 74-sexies DPR 633/72)",
    ),
})
export const Natura = NaturaValues.keyof()
export type Natura = z.infer<typeof Natura>