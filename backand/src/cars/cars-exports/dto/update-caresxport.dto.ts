import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export class UodateExportDTO {
  @IsNotEmpty()
  @IsString()
  carMark: string;

  @IsNotEmpty()
  @IsString()
  description: string; // Change to string
}
