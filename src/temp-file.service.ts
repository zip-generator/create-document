import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';
interface ISaveBufferToFile {
  document: PDFKit.PDFDocument;
  fileName: string;
  folder: string;
  extension: string;
}
@Injectable()
export class TempFileService {
  #logger = new Logger(TempFileService.name);
  constructor() {}

  async saveBufferToFile({
    document,
    fileName,
    folder,
    extension,
  }: ISaveBufferToFile): Promise<string> {
    const dirPath = join(process.cwd(), 'temp-data', folder);

    await this.createDirectoryIfNotExists(dirPath);

    try {
      document.pipe(
        fs.createWriteStream(join(dirPath, `${fileName}.${extension}`)),
      );
      document.end();
      return join(dirPath, `${fileName}.${extension}`);
    } catch (err) {
      this.#logger.error('Failed to write file', {
        dirPath,
        error: err.message,
      });
      throw err;
    }
  }
  private async createDirectoryIfNotExists(dirPath: string) {
    try {
      await fs.promises.mkdir(dirPath, {
        recursive: true,
      });
    } catch (err) {
      console.error(`Failed to create directory: ${dirPath}`, err);
      throw err;
    }
  }
}
