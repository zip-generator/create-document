import { Controller, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { GENERATE_DOCUMENT } from '@config/services';
import { PayloadDto } from './dto';

@Controller()
export class AppController {
  #logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @MessagePattern(GENERATE_DOCUMENT)
  generateDocument(@Payload() payload: PayloadDto): Promise<string> {
    // this.#logger.log(`Received payload: ${JSON.stringify(payload)}`);
    return this.appService.generateDocument(payload);
  }
}
