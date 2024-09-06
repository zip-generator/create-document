import { Type } from 'class-transformer';
import {
  IsString,
  ValidateNested,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class DirectioDto {
  @IsString()
  city: string;
  @IsString()
  complement: string;
  @IsString()
  department: string;
}
export class ReceptorContentDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  document: string;

  @IsString()
  @IsNotEmpty()
  econimicActivity: string;

  @ValidateNested()
  @Type(() => DirectioDto)
  direction: DirectioDto;

  @IsString()
  @IsNotEmpty()
  nrc: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsOptional()
  doctor: string;
  // @IsOptional()
  // deducible: string;
  // @IsOptional()
  // copaago: string;
  // @IsOptional()
  // coaseguroPersentage: string;
  @IsOptional()
  atencionId: string;
  @IsOptional()
  insuranceCompany: string;
}

export class HeaderSectionOptionsDTO {
  @IsString()
  @IsNotEmpty()
  generationCode: string;

  @IsString()
  @IsNotEmpty()
  receptionStamp: string;

  @IsString()
  @IsNotEmpty()
  controlNumber: string;

  @IsString()
  @IsNotEmpty()
  emitionDate: string;

  @IsString()
  @IsNotEmpty()
  emitionTime: string;

  @IsString()
  url: string;
}

export class DocumentDataDTO {
  @IsNotEmpty()
  receptor: ReceptorContentDTO;

  @IsNotEmpty()
  header: HeaderSectionOptionsDTO;
}

export class PayloadDto {
  @ValidateNested()
  @Type(() => DocumentDataDTO)
  data: DocumentDataDTO;

  @IsString()
  fileName: string;
  @IsString()
  folder: string;
  @IsString()
  extension: string;
}
