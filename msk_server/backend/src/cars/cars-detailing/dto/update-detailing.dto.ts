import { Transform } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateDetailingDTO {
  @IsNotEmpty()
  @IsString()
  carMark: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @Transform(({ value }) => JSON.parse(value))
  @IsOptional()
  @IsArray()
  restImgToDelete?: string[];
}
