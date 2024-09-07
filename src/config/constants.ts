enum STR_TIPOS_DTE {
  consumidorFinal = '01',
  creditoFiscal = '03',
  sujetoExcluido = '14',
  comprobanteRetencion = '07',
  notaCredito = '05',
}
enum DOCUMENT_TYPES {
  CONSUMIDOR_FINAL = '01',
  CREDITO_FISCAL = '03',
  NOTA_CREDITO = '05',
  COMPROBANTE_RETENCION = '07',
  SUJETO_EXCLUIDO = '14',
  TODOS = '00',
}

const DTE_CUSTOM: Record<string, string> = {
  [STR_TIPOS_DTE.consumidorFinal]: '01',
  [STR_TIPOS_DTE.creditoFiscal]: '03',
  [STR_TIPOS_DTE.sujetoExcluido]: '14',
  [STR_TIPOS_DTE.comprobanteRetencion]: '07',
  [STR_TIPOS_DTE.notaCredito]: '05',
};

const IDENTIFICATION_TYPE = {
  [DOCUMENT_TYPES.CONSUMIDOR_FINAL]: 'Reporte Consumidor Final',
  [DOCUMENT_TYPES.CREDITO_FISCAL]: 'Reporte Credito Fiscal',
  [DOCUMENT_TYPES.COMPROBANTE_RETENCION]: 'Comprobante De Retencion',
  [DOCUMENT_TYPES.SUJETO_EXCLUIDO]: 'Comprobante De Sujeto Excluido',
  [DOCUMENT_TYPES.NOTA_CREDITO]: 'Nota De Credito',
};
export { DTE_CUSTOM, DOCUMENT_TYPES, IDENTIFICATION_TYPE, STR_TIPOS_DTE };
