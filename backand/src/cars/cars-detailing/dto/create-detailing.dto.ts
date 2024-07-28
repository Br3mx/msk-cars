import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateDetailingDTO {
  @IsNotEmpty()
  @IsString()
  carMark: string;

  @IsNotEmpty()
  @IsString()
  description: string; // Change to string
}
