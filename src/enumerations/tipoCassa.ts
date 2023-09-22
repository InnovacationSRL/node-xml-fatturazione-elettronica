import { z } from "zod"
export const TipoCassaValues = z.object({
  TC01: z.string().describe("Cassa nazionale previdenza e assistenza avvocati e procuratori legali "),
  TC02: z.string().describe("Cassa previdenza dottori commercialisti"),
  TC03: z.string().describe("Cassa previdenza e assistenza geometri"),
  TC04: z.string().describe("Cassa nazionale previdenza e assistenza ingegneri e architetti liberi professionisti"),
  TC05: z.string().describe("Cassa nazionale del notariato"),
  TC06: z.string().describe("Cassa nazionale previdenza e assistenza ragionieri e periti commerciali"),
  TC07: z.string().describe("Ente nazionale assistenza agenti e rappresentanti di commercio (ENASARCO)"),
  TC08: z.string().describe("Ente nazionale previdenza e assistenza consulenti del lavoro (ENPACL)"),
  TC09: z.string().describe("Ente nazionale previdenza e assistenza medici (ENPAM)"),
  TC10: z.string().describe("Ente nazionale previdenza e assistenza farmacisti (ENPAF)"),
  TC11: z.string().describe("Ente nazionale previdenza e assistenza veterinari (ENPAV)"),
  TC12: z.string().describe("Ente nazionale previdenza e assistenza impiegati dell'agricoltura (ENPAIA)"),
  TC13: z.string().describe("Fondo previdenza impiegati imprese di spedizione e agenzie marittime"),
  TC14: z.string().describe("Istituto nazionale previdenza giornalisti italiani (INPGI)"),
  TC15: z.string().describe("Opera nazionale assistenza orfani sanitari italiani (ONAOSI)"),
  TC16: z.string().describe("Cassa autonoma assistenza integrativa giornalisti italiani (CASAGIT)"),
  TC17: z.string().describe("Ente previdenza periti industriali e periti industriali laureati (EPPI)"),
  TC18: z.string().describe("Ente previdenza e assistenza pluricategoriale (EPAP)"),
  TC19: z.string().describe("Ente nazionale previdenza e assistenza biologi (ENPAB)"),
  TC20: z.string().describe("Ente nazionale previdenza e assistenza professione infermieristica (ENPAPI)"),
  TC21: z.string().describe("Ente nazionale previdenza e assistenza psicologi (ENPAP)"),
  TC22: z.string().describe("INPS"),
})
export const TipoCassa = TipoCassaValues.keyof()
export type TipoCassa = z.infer<typeof TipoCassa>
