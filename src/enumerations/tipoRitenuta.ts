import { z } from "zod"
export const TipoRitenutaValues = z.object({
  RT01: z.string().describe("ritenuta persone fisiche"),
  RT02: z.string().describe("ritenuta persone giuridiche"),
  RT03: z.string().describe("contributo INPS"),
  RT04: z.string().describe("contributo ENASARCO"),
  RT05: z.string().describe("contributo ENPAM"),
  RT06: z.string().describe("altro contributo previdenziale"),
})
export const TipoRitenuta = TipoRitenutaValues.keyof()
export type TipoRitenuta = z.infer<typeof TipoRitenuta>
