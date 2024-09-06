import { PrinterService } from '@modules/pdf-make/printer.service';
import { Injectable } from '@nestjs/common';
import { TempFileService } from './temp-file.service';
import { PayloadDto } from './dto';
import { headerSection } from '@modules/reports';

@Injectable()
export class AppService {
  constructor(
    private readonly printerService: PrinterService,
    private readonly tempFileService: TempFileService,
  ) {}
  async generateDocument(payload: PayloadDto): Promise<string> {
    const { data, extension, fileName, folder } = payload;

    const document = this.printerService.createPdf({
      pageSize: 'LETTER',
      pageMargins: [10, 300],
      header: headerSection(data),
      content: [{ text: 'Hello World' }],
      styles: {
        header: {
          fontSize: 10,
          bold: true,
        },
        subHeader: {
          fontSize: 9,
          bold: true,
        },
        small: {
          fontSize: 8,
        },
        smallBold: {
          fontSize: 8,
          bold: true,
        },
      },
    });

    return await this.tempFileService.saveBufferToFile({
      document,
      fileName,
      folder,
      extension,
    });
  }
}
