enum STR_TIPOS_DTE {
  consumidorFinal = '01',
  creditoFiscal = '03',
  sujetoExcluido = '14',
  comprobanteRetencion = '07',
  notaCredito = '05',
  notaDebito = '06',
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
  [STR_TIPOS_DTE.notaDebito]: '06',
};

const TIPO_IDENTIFICACION = {
  '01': 'Reporte consumidor final',
  '03': 'Reporte credito fiscal',
  '07': 'Comprobante de Retencion',
  '14': 'Comprobante de Sujeto Excluido',
  '05': 'Nota de Credito',
};
export { DTE_CUSTOM, DOCUMENT_TYPES, TIPO_IDENTIFICACION, STR_TIPOS_DTE };
