import { Injectable } from '@nestjs/common';
import { join } from 'path';
import PdfPrinter from 'pdfmake';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

// const fonts = {
//   Roboto: {
//     normal: './fonts/Roboto-Regular.ttf',
//     bold: './fonts/Roboto-Bold.ttf',
//     italics: './fonts/Roboto-Italic.ttf',
//     bolditalics: './fonts/Roboto-BoldItalic.ttf',
//   },
// };
const fonts = {
  Roboto: {
    normal: join(
      process.cwd(),
      'dist',
      'modules',
      'pdf-make',
      'fonts/Roboto-Regular.ttf',
    ),
    bold: join(
      process.cwd(),
      'dist',
      'modules',
      'pdf-make',
      'fonts/Roboto-Bold.ttf',
    ),
    italics: join(
      process.cwd(),
      'dist',
      'modules',
      'pdf-make',
      'fonts/Roboto-Italic.ttf',
    ),
    bolditalics: join(
      process.cwd(),
      'dist',
      'modules',
      'pdf-make',
      'fonts/Roboto-BlackItalic.ttf',
    ),
  },
};

@Injectable()
export class PrinterService {
  private printer = new PdfPrinter(fonts);

  createPdf(docDefinition: TDocumentDefinitions): PDFKit.PDFDocument {
    return this.printer.createPdfKitDocument(docDefinition);
  }
}
