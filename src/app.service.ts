import { PrinterService } from '@modules/pdf-make/printer.service';
import { Injectable } from '@nestjs/common';
import { TempFileService } from './temp-file.service';
import { DocumentDataDTO, PayloadDto } from './dto';
import { ccfReport } from './modules/reports';
import {
  DOCUMENT_TYPES,
  DTE_CUSTOM,
  IDENTIFICATION_TYPE,
  STR_TIPOS_DTE,
} from './config/constants';
import { excludeSubjectInit } from './modules/reports/sujeto-excluido.report';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { creditNoteReport } from './modules/reports/credit-note.report';

@Injectable()
export class AppService {
  #dteFunctions = {
    [DTE_CUSTOM[STR_TIPOS_DTE.sujetoExcluido]]: excludeSubjectInit,
    [DTE_CUSTOM[STR_TIPOS_DTE.consumidorFinal]]: ccfReport,
    [DTE_CUSTOM[STR_TIPOS_DTE.creditoFiscal]]: ccfReport,
    [DTE_CUSTOM[STR_TIPOS_DTE.notaCredito]]: ccfReport,
    [DTE_CUSTOM[STR_TIPOS_DTE.comprobanteRetencion]]: ccfReport,
    [DTE_CUSTOM[STR_TIPOS_DTE.notaCredito]]: creditNoteReport,
  };
  constructor(
    private readonly printerService: PrinterService,
    private readonly tempFileService: TempFileService,
  ) {}
  async generateDocument(payload: PayloadDto): Promise<string> {
    const { data, extension, fileName, folder, invoiceType } = payload;

    const documentDefinition = this.mapObjectToFunction(invoiceType)(
      data,
      IDENTIFICATION_TYPE[invoiceType],
    );
    const document = this.printerService.createPdf(documentDefinition);

    return await this.tempFileService.saveBufferToFile({
      document,
      fileName,
      folder,
      extension,
    });
  }
  mapObjectToFunction(
    invoiceType: DOCUMENT_TYPES,
  ): (data: DocumentDataDTO, invoiceName: string) => TDocumentDefinitions {
    const makeFuntion = this.#dteFunctions[invoiceType];
    if (!makeFuntion) {
      throw new Error('Invoice type not found');
    }
    return makeFuntion;
  }
}
