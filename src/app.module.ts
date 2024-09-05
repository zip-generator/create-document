import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfMakeModule } from '@modules/pdf-make/pdf-make.module';
import { TempFileService } from './temp-file.service';

@Module({
  imports: [PdfMakeModule],
  controllers: [AppController],
  providers: [AppService, TempFileService],
})
export class AppModule {}
