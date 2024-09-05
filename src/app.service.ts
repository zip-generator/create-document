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

    const document = await this.printerService.createPdf({
      content: [headerSection(data)],
    });

    return await this.tempFileService.saveBufferToFile({
      document,
      fileName,
      folder,
      extension,
    });
  }
}
