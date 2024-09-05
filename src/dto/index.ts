import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';

class DataDto {
  @IsString()
  controlNumber: string;
  @IsString()
  emitionDate: string;
  @IsString()
  emitionTime: string;
  @IsString()
  generationCode: string;
  @IsString()
  receptionStamp: string;
}
export class PayloadDto {
  @ValidateNested()
  @Type(() => DataDto)
  data: DataDto;

  @IsString()
  fileName: string;
  @IsString()
  folder: string;
  @IsString()
  extension: string;
}
