import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { GENERATE_DOCUMENT } from '@config/services';
import { PayloadDto } from './dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern(GENERATE_DOCUMENT)
  generateDocument(@Payload() paylod: PayloadDto): Promise<string> {
    return this.appService.generateDocument(paylod);
  }
}
