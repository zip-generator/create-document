import { DOCUMENT_TYPES } from '@app/config/constants';
import { Type } from 'class-transformer';
import {
  IsString,
  ValidateNested,
  IsNotEmpty,
  IsOptional,
  IsEnum,
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
  doctor?: string;
  @IsOptional()
  deducible?: string;
  @IsOptional()
  copaago?: string;
  @IsOptional()
  coaseguroPercentage?: string;
  @IsOptional()
  atencionId?: string;
  @IsOptional()
  insuranceCompany?: string;
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

export class Tributos {
  @IsString()
  descripcion: string;
  @IsString()
  valor: string;
}
export class Resume {
  @IsString()
  subTotal: string;
  @IsString()
  reteRenta: string;
  @IsString()
  totalDescu: string;
  @IsString()
  totalPagar: string;
  @IsString()
  totalCompra: string;
  @IsString()
  totalLetras: string;
  @IsString()
  totalExcenta: string;
  @IsString()
  totalGravada: string;
  @IsString()
  totalIva: string;
  @IsString()
  montoTotalOperacion: string;
  @IsOptional()
  @IsString()
  condicionOperacion?: string;
  @IsOptional()
  @IsString()
  observaciones: string;

  @IsOptional()
  tributos: Tributos[];
}
export class BodyDto {
  @IsString()
  numItem: string;
  @IsString()
  precioUni: string;
  @IsString()
  montoDescu: string;
  @IsString()
  ventaNoSuj: string;
  @IsString()
  ventaExenta: string;
  @IsString()
  ventaGravada: string;
  @IsString()
  cantidad: string;
  @IsString()
  uniMedida: string;
  @IsString()
  codigo: string;
  @IsString()
  serie: string;
  @IsString()
  descripcion: string;
  @IsOptional()
  @IsString()
  compra?: string;
  @IsOptional()
  @IsString()
  deducible: string;
  @IsOptional()
  @IsString()
  copaago: string;
  @IsOptional()
  @IsString()
  coaseguroPercentage: string;
}
export class ExtensionDto {
  @IsString()
  nombreEntrega: string;
  @IsString()
  noDocumentoEntrega: string;
  @IsString()
  nombreRecibe: string;
  @IsString()
  noDocumentoRecibe: string;
}
export class DocumentDataDTO {
  @IsNotEmpty()
  receptor: ReceptorContentDTO;

  @IsNotEmpty()
  header: HeaderSectionOptionsDTO;

  @IsNotEmpty()
  body: BodyDto[];

  @IsNotEmpty()
  resume: Resume;

  @IsString()
  fechaNextDay: string;

  @IsNotEmpty()
  extension: ExtensionDto;
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

  @IsEnum(DOCUMENT_TYPES)
  invoiceType: DOCUMENT_TYPES;
}
