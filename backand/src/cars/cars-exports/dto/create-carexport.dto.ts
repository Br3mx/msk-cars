import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateExportDTO {
  @IsNotEmpty()
  @IsString()
  carMark: string;

  @IsNotEmpty()
  @IsString()
  description: string; // Change to string
}
