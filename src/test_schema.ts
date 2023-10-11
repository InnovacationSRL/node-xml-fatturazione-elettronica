import { z } from "zod"
const CodiceDestinatarioType = z.string()
export type CodiceDestinatarioType = z.infer<typeof CodiceDestinatarioType>

const CodiceType = z.string()
export type CodiceType = z.infer<typeof CodiceType>

const FormatoTrasmissioneType = z.string()
export type FormatoTrasmissioneType = z.infer<typeof FormatoTrasmissioneType>

const CausalePagamentoType = z.string()
export type CausalePagamentoType = z.infer<typeof CausalePagamentoType>

const TipoScontoMaggiorazioneType = z.string()
export type TipoScontoMaggiorazioneType = z.infer<typeof TipoScontoMaggiorazioneType>

const Art73Type = z.string()
export type Art73Type = z.infer<typeof Art73Type>

const TipoCassaType = z.string()
export type TipoCassaType = z.infer<typeof TipoCassaType>

const TipoDocumentoType = z.string()
export type TipoDocumentoType = z.infer<typeof TipoDocumentoType>

const TipoRitenutaType = z.string()
export type TipoRitenutaType = z.infer<typeof TipoRitenutaType>

const RiferimentoNumeroLineaType = z.coerce.number()
export type RiferimentoNumeroLineaType = z.infer<typeof RiferimentoNumeroLineaType>

const SoggettoEmittenteType = z.string()
export type SoggettoEmittenteType = z.infer<typeof SoggettoEmittenteType>

const RegimeFiscaleType = z.string()
export type RegimeFiscaleType = z.infer<typeof RegimeFiscaleType>

const CondizioniPagamentoType = z.string()
export type CondizioniPagamentoType = z.infer<typeof CondizioniPagamentoType>

const ModalitaPagamentoType = z.string()
export type ModalitaPagamentoType = z.infer<typeof ModalitaPagamentoType>

const IBANType = z.string()
export type IBANType = z.infer<typeof IBANType>

const BICType = z.string()
export type BICType = z.infer<typeof BICType>

const RitenutaType = z.string()
export type RitenutaType = z.infer<typeof RitenutaType>

const EsigibilitaIVAType = z.string()
export type EsigibilitaIVAType = z.infer<typeof EsigibilitaIVAType>

const NaturaType = z.string()
export type NaturaType = z.infer<typeof NaturaType>

const CodiceFiscaleType = z.string()
export type CodiceFiscaleType = z.infer<typeof CodiceFiscaleType>

const CodiceFiscalePFType = z.string()
export type CodiceFiscalePFType = z.infer<typeof CodiceFiscalePFType>

const CodEORIType = z.string()
export type CodEORIType = z.infer<typeof CodEORIType>

const SocioUnicoType = z.string()
export type SocioUnicoType = z.infer<typeof SocioUnicoType>

const StatoLiquidazioneType = z.string()
export type StatoLiquidazioneType = z.infer<typeof StatoLiquidazioneType>

const TipoCessionePrestazioneType = z.string()
export type TipoCessionePrestazioneType = z.infer<typeof TipoCessionePrestazioneType>

const TitoloType = z.string()
export type TitoloType = z.infer<typeof TitoloType>

const String10Type = z.string()
export type String10Type = z.infer<typeof String10Type>

const String15Type = z.string()
export type String15Type = z.infer<typeof String15Type>

const String20Type = z.string()
export type String20Type = z.infer<typeof String20Type>

const String35Type = z.string()
export type String35Type = z.infer<typeof String35Type>

const String35LatinExtType = z.string()
export type String35LatinExtType = z.infer<typeof String35LatinExtType>

const String60Type = z.string()
export type String60Type = z.infer<typeof String60Type>

const String80Type = z.string()
export type String80Type = z.infer<typeof String80Type>

const String100Type = z.string()
export type String100Type = z.infer<typeof String100Type>

const String60LatinType = z.string()
export type String60LatinType = z.infer<typeof String60LatinType>

const String80LatinType = z.string()
export type String80LatinType = z.infer<typeof String80LatinType>

const String100LatinType = z.string()
export type String100LatinType = z.infer<typeof String100LatinType>

const String200LatinType = z.string()
export type String200LatinType = z.infer<typeof String200LatinType>

const String1000LatinType = z.string()
export type String1000LatinType = z.infer<typeof String1000LatinType>

const ProvinciaType = z.string()
export type ProvinciaType = z.infer<typeof ProvinciaType>

const NazioneType = z.string()
export type NazioneType = z.infer<typeof NazioneType>

const DivisaType = z.string()
export type DivisaType = z.infer<typeof DivisaType>

const TipoResaType = z.string()
export type TipoResaType = z.infer<typeof TipoResaType>

const NumeroCivicoType = z.string()
export type NumeroCivicoType = z.infer<typeof NumeroCivicoType>

const BolloVirtualeType = z.string()
export type BolloVirtualeType = z.infer<typeof BolloVirtualeType>

const TelFaxType = z.string()
export type TelFaxType = z.infer<typeof TelFaxType>

const EmailType = z.string()
export type EmailType = z.infer<typeof EmailType>

const EmailContattiType = z.string()
export type EmailContattiType = z.infer<typeof EmailContattiType>

const PesoType = z.coerce.number()
export type PesoType = z.infer<typeof PesoType>

const Amount8DecimalType = z.coerce.number()
export type Amount8DecimalType = z.infer<typeof Amount8DecimalType>

const Amount2DecimalType = z.coerce.number()
export type Amount2DecimalType = z.infer<typeof Amount2DecimalType>

const RateType = z.coerce.number()
export type RateType = z.infer<typeof RateType>

const RiferimentoFaseType = z.coerce.number()
export type RiferimentoFaseType = z.infer<typeof RiferimentoFaseType>

const NumeroColliType = z.coerce.number()
export type NumeroColliType = z.infer<typeof NumeroColliType>

const NumeroLineaType = z.coerce.number()
export type NumeroLineaType = z.infer<typeof NumeroLineaType>

const CAPType = z.string()
export type CAPType = z.infer<typeof CAPType>

const ABIType = z.string()
export type ABIType = z.infer<typeof ABIType>

const CABType = z.string()
export type CABType = z.infer<typeof CABType>

const GiorniTerminePagamentoType = z.coerce.number()
export type GiorniTerminePagamentoType = z.infer<typeof GiorniTerminePagamentoType>

const QuantitaType = z.coerce.number()
export type QuantitaType = z.infer<typeof QuantitaType>

const DataFatturaType = z.string()
export type DataFatturaType = z.infer<typeof DataFatturaType>

export const IdFiscaleType = z.strictObject({ IdPaese: NazioneType, IdCodice: CodiceType })
export type IdFiscaleType = z.infer<typeof IdFiscaleType>

export const ContattiTrasmittenteType = z.strictObject({ Telefono: TelFaxType, Email: EmailContattiType })
export type ContattiTrasmittenteType = z.infer<typeof ContattiTrasmittenteType>

export const DatiTrasmissioneType = z.strictObject({
  IdTrasmittente: IdFiscaleType,
  ProgressivoInvio: String10Type,
  FormatoTrasmissione: FormatoTrasmissioneType,
  CodiceDestinatario: CodiceDestinatarioType,
  ContattiTrasmittente: ContattiTrasmittenteType,
  PECDestinatario: EmailType,
})
export type DatiTrasmissioneType = z.infer<typeof DatiTrasmissioneType>

export const AnagraficaType = z.strictObject({ Titolo: TitoloType, CodEORI: CodEORIType })
export type AnagraficaType = z.infer<typeof AnagraficaType>

export const DatiAnagraficiCedenteType = z.strictObject({
  IdFiscaleIVA: IdFiscaleType,
  CodiceFiscale: CodiceFiscaleType,
  Anagrafica: AnagraficaType,
  AlboProfessionale: String60LatinType,
  ProvinciaAlbo: ProvinciaType,
  NumeroIscrizioneAlbo: String60Type,
  DataIscrizioneAlbo: z.string().optional(),
  RegimeFiscale: RegimeFiscaleType,
})
export type DatiAnagraficiCedenteType = z.infer<typeof DatiAnagraficiCedenteType>

export const IndirizzoType = z.strictObject({
  Indirizzo: String60LatinType,
  NumeroCivico: NumeroCivicoType,
  CAP: CAPType,
  Comune: String60LatinType,
  Provincia: ProvinciaType,
  Nazione: NazioneType,
})
export type IndirizzoType = z.infer<typeof IndirizzoType>

export const IscrizioneREAType = z.strictObject({
  Ufficio: ProvinciaType,
  NumeroREA: String20Type,
  CapitaleSociale: Amount2DecimalType,
  SocioUnico: SocioUnicoType,
  StatoLiquidazione: StatoLiquidazioneType,
})
export type IscrizioneREAType = z.infer<typeof IscrizioneREAType>

export const ContattiType = z.strictObject({ Telefono: TelFaxType, Fax: TelFaxType, Email: EmailContattiType })
export type ContattiType = z.infer<typeof ContattiType>

export const CedentePrestatoreType = z.strictObject({
  DatiAnagrafici: DatiAnagraficiCedenteType,
  Sede: IndirizzoType,
  StabileOrganizzazione: IndirizzoType,
  IscrizioneREA: IscrizioneREAType,
  Contatti: ContattiType,
  RiferimentoAmministrazione: String20Type,
})
export type CedentePrestatoreType = z.infer<typeof CedentePrestatoreType>

export const DatiAnagraficiRappresentanteType = z.strictObject({
  IdFiscaleIVA: IdFiscaleType,
  CodiceFiscale: CodiceFiscaleType,
  Anagrafica: AnagraficaType,
})
export type DatiAnagraficiRappresentanteType = z.infer<typeof DatiAnagraficiRappresentanteType>

export const RappresentanteFiscaleType = DatiAnagraficiRappresentanteType
export type RappresentanteFiscaleType = z.infer<typeof RappresentanteFiscaleType>

export const DatiAnagraficiCessionarioType = z.strictObject({
  IdFiscaleIVA: IdFiscaleType,
  CodiceFiscale: CodiceFiscaleType,
  Anagrafica: AnagraficaType,
})
export type DatiAnagraficiCessionarioType = z.infer<typeof DatiAnagraficiCessionarioType>

export const RappresentanteFiscaleCessionarioType = IdFiscaleType
export type RappresentanteFiscaleCessionarioType = z.infer<typeof RappresentanteFiscaleCessionarioType>

export const CessionarioCommittenteType = z.strictObject({
  DatiAnagrafici: DatiAnagraficiCessionarioType,
  Sede: IndirizzoType,
  StabileOrganizzazione: IndirizzoType,
  RappresentanteFiscale: RappresentanteFiscaleCessionarioType,
})
export type CessionarioCommittenteType = z.infer<typeof CessionarioCommittenteType>

export const DatiAnagraficiTerzoIntermediarioType = z.strictObject({
  IdFiscaleIVA: IdFiscaleType,
  CodiceFiscale: CodiceFiscaleType,
  Anagrafica: AnagraficaType,
})
export type DatiAnagraficiTerzoIntermediarioType = z.infer<typeof DatiAnagraficiTerzoIntermediarioType>

export const TerzoIntermediarioSoggettoEmittenteType = DatiAnagraficiTerzoIntermediarioType
export type TerzoIntermediarioSoggettoEmittenteType = z.infer<typeof TerzoIntermediarioSoggettoEmittenteType>

export const FatturaElettronicaHeaderType = z.strictObject({
  DatiTrasmissione: DatiTrasmissioneType,
  CedentePrestatore: CedentePrestatoreType,
  RappresentanteFiscale: RappresentanteFiscaleType,
  CessionarioCommittente: CessionarioCommittenteType,
  TerzoIntermediarioOSoggettoEmittente: TerzoIntermediarioSoggettoEmittenteType,
  SoggettoEmittente: SoggettoEmittenteType,
})
export type FatturaElettronicaHeaderType = z.infer<typeof FatturaElettronicaHeaderType>

export const DatiRitenutaType = z.strictObject({
  TipoRitenuta: TipoRitenutaType,
  ImportoRitenuta: Amount2DecimalType,
  AliquotaRitenuta: RateType,
  CausalePagamento: CausalePagamentoType,
})
export type DatiRitenutaType = z.infer<typeof DatiRitenutaType>

export const DatiBolloType = z.strictObject({ BolloVirtuale: BolloVirtualeType, ImportoBollo: Amount2DecimalType })
export type DatiBolloType = z.infer<typeof DatiBolloType>

export const DatiCassaPrevidenzialeType = z.strictObject({
  TipoCassa: TipoCassaType,
  AlCassa: RateType,
  ImportoContributoCassa: Amount2DecimalType,
  ImponibileCassa: Amount2DecimalType,
  AliquotaIVA: RateType,
  Ritenuta: RitenutaType,
  Natura: NaturaType,
  RiferimentoAmministrazione: String20Type,
})
export type DatiCassaPrevidenzialeType = z.infer<typeof DatiCassaPrevidenzialeType>

export const ScontoMaggiorazioneType = z.strictObject({ Tipo: TipoScontoMaggiorazioneType, Percentuale: RateType, Importo: Amount8DecimalType })
export type ScontoMaggiorazioneType = z.infer<typeof ScontoMaggiorazioneType>

export const DatiGeneraliDocumentoType = z.strictObject({
  TipoDocumento: TipoDocumentoType,
  Divisa: DivisaType,
  Data: DataFatturaType,
  Numero: String20Type,
  DatiRitenuta: DatiRitenutaType,
  DatiBollo: DatiBolloType,
  DatiCassaPrevidenziale: DatiCassaPrevidenzialeType,
  ScontoMaggiorazione: ScontoMaggiorazioneType,
  ImportoTotaleDocumento: Amount2DecimalType,
  Arrotondamento: Amount2DecimalType,
  Causale: String200LatinType,
  Art73: Art73Type,
})
export type DatiGeneraliDocumentoType = z.infer<typeof DatiGeneraliDocumentoType>

export const DatiDocumentiCorrelatiType = z.strictObject({
  RiferimentoNumeroLinea: RiferimentoNumeroLineaType,
  IdDocumento: String20Type,
  Data: z.string().optional(),
  NumItem: String20Type,
  CodiceCommessaConvenzione: String100LatinType,
  CodiceCUP: String15Type,
  CodiceCIG: String15Type,
})
export type DatiDocumentiCorrelatiType = z.infer<typeof DatiDocumentiCorrelatiType>

export const DatiSALType = RiferimentoFaseType
export type DatiSALType = z.infer<typeof DatiSALType>

export const DatiDDTType = z.strictObject({ NumeroDDT: String20Type, DataDDT: z.string(), RiferimentoNumeroLinea: RiferimentoNumeroLineaType })
export type DatiDDTType = z.infer<typeof DatiDDTType>

export const DatiAnagraficiVettoreType = z.strictObject({
  IdFiscaleIVA: IdFiscaleType,
  CodiceFiscale: CodiceFiscaleType,
  Anagrafica: AnagraficaType,
  NumeroLicenzaGuida: String20Type,
})
export type DatiAnagraficiVettoreType = z.infer<typeof DatiAnagraficiVettoreType>

export const DatiTrasportoType = z.strictObject({
  DatiAnagraficiVettore: DatiAnagraficiVettoreType,
  MezzoTrasporto: String80LatinType,
  CausaleTrasporto: String100LatinType,
  NumeroColli: NumeroColliType,
  Descrizione: String100LatinType,
  UnitaMisuraPeso: String10Type,
  PesoLordo: PesoType,
  PesoNetto: PesoType,
  DataOraRitiro: z.string().optional(),
  DataInizioTrasporto: z.string().optional(),
  TipoResa: TipoResaType,
  IndirizzoResa: IndirizzoType,
  DataOraConsegna: z.string().optional(),
})
export type DatiTrasportoType = z.infer<typeof DatiTrasportoType>

export const FatturaPrincipaleType = z.strictObject({ NumeroFatturaPrincipale: String20Type, DataFatturaPrincipale: z.string() })
export type FatturaPrincipaleType = z.infer<typeof FatturaPrincipaleType>

export const DatiGeneraliType = z.strictObject({
  DatiGeneraliDocumento: DatiGeneraliDocumentoType,
  DatiOrdineAcquisto: DatiDocumentiCorrelatiType,
  DatiContratto: DatiDocumentiCorrelatiType,
  DatiConvenzione: DatiDocumentiCorrelatiType,
  DatiRicezione: DatiDocumentiCorrelatiType,
  DatiFattureCollegate: DatiDocumentiCorrelatiType,
  DatiSAL: DatiSALType,
  DatiDDT: DatiDDTType,
  DatiTrasporto: DatiTrasportoType,
  FatturaPrincipale: FatturaPrincipaleType,
})
export type DatiGeneraliType = z.infer<typeof DatiGeneraliType>

export const CodiceArticoloType = z.strictObject({ CodiceTipo: String35Type, CodiceValore: String35LatinExtType })
export type CodiceArticoloType = z.infer<typeof CodiceArticoloType>

export const AltriDatiGestionaliType = z.strictObject({
  TipoDato: String10Type,
  RiferimentoTesto: String60LatinType,
  RiferimentoNumero: Amount8DecimalType,
  RiferimentoData: z.string().optional(),
})
export type AltriDatiGestionaliType = z.infer<typeof AltriDatiGestionaliType>

export const DettaglioLineeType = z.strictObject({
  NumeroLinea: NumeroLineaType,
  TipoCessionePrestazione: TipoCessionePrestazioneType,
  CodiceArticolo: CodiceArticoloType,
  Descrizione: String1000LatinType,
  Quantita: QuantitaType,
  UnitaMisura: String10Type,
  DataInizioPeriodo: z.string().optional(),
  DataFinePeriodo: z.string().optional(),
  PrezzoUnitario: Amount8DecimalType,
  ScontoMaggiorazione: ScontoMaggiorazioneType,
  PrezzoTotale: Amount8DecimalType,
  AliquotaIVA: RateType,
  Ritenuta: RitenutaType,
  Natura: NaturaType,
  RiferimentoAmministrazione: String20Type,
  AltriDatiGestionali: AltriDatiGestionaliType,
})
export type DettaglioLineeType = z.infer<typeof DettaglioLineeType>

export const DatiRiepilogoType = z.strictObject({
  AliquotaIVA: RateType,
  Natura: NaturaType,
  SpeseAccessorie: Amount2DecimalType,
  Arrotondamento: Amount8DecimalType,
  ImponibileImporto: Amount2DecimalType,
  Imposta: Amount2DecimalType,
  EsigibilitaIVA: EsigibilitaIVAType,
  RiferimentoNormativo: String100LatinType,
})
export type DatiRiepilogoType = z.infer<typeof DatiRiepilogoType>

export const DatiBeniServiziType = z.strictObject({ DettaglioLinee: DettaglioLineeType, DatiRiepilogo: DatiRiepilogoType })
export type DatiBeniServiziType = z.infer<typeof DatiBeniServiziType>

export const DatiVeicoliType = z.strictObject({ Data: z.string(), TotalePercorso: String15Type })
export type DatiVeicoliType = z.infer<typeof DatiVeicoliType>

export const DettaglioPagamentoType = z.strictObject({
  Beneficiario: String200LatinType,
  ModalitaPagamento: ModalitaPagamentoType,
  DataRiferimentoTerminiPagamento: z.string().optional(),
  GiorniTerminiPagamento: GiorniTerminePagamentoType,
  DataScadenzaPagamento: z.string().optional(),
  ImportoPagamento: Amount2DecimalType,
  CodUfficioPostale: String20Type,
  CognomeQuietanzante: String60LatinType,
  NomeQuietanzante: String60LatinType,
  CFQuietanzante: CodiceFiscalePFType,
  TitoloQuietanzante: TitoloType,
  IstitutoFinanziario: String80LatinType,
  IBAN: IBANType,
  ABI: ABIType,
  CAB: CABType,
  BIC: BICType,
  ScontoPagamentoAnticipato: Amount2DecimalType,
  DataLimitePagamentoAnticipato: z.string().optional(),
  PenalitaPagamentiRitardati: Amount2DecimalType,
  DataDecorrenzaPenale: z.string().optional(),
  CodicePagamento: String60Type,
})
export type DettaglioPagamentoType = z.infer<typeof DettaglioPagamentoType>

export const DatiPagamentoType = z.strictObject({ CondizioniPagamento: CondizioniPagamentoType, DettaglioPagamento: DettaglioPagamentoType })
export type DatiPagamentoType = z.infer<typeof DatiPagamentoType>

export const AllegatiType = z.strictObject({
  NomeAttachment: String60LatinType,
  AlgoritmoCompressione: String10Type,
  FormatoAttachment: String10Type,
  DescrizioneAttachment: String100LatinType,
  Attachment: z.string(),
})
export type AllegatiType = z.infer<typeof AllegatiType>

export const FatturaElettronicaBodyType = z.strictObject({
  DatiGenerali: DatiGeneraliType,
  DatiBeniServizi: DatiBeniServiziType,
  DatiVeicoli: DatiVeicoliType,
  DatiPagamento: DatiPagamentoType,
  Allegati: AllegatiType,
})
export type FatturaElettronicaBodyType = z.infer<typeof FatturaElettronicaBodyType>

export const FatturaElettronicaType = z.strictObject({
  FatturaElettronicaHeader: FatturaElettronicaHeaderType,
  FatturaElettronicaBody: FatturaElettronicaBodyType,
})
export type FatturaElettronicaType = z.infer<typeof FatturaElettronicaType>
