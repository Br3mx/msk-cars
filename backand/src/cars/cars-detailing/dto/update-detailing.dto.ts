import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString } from 'class-validator';

export class UpdateDetailingDTO {
  @IsNotEmpty()
  @IsString()
  carMark: string;

  @IsNotEmpty()
  @IsString()
  description: string; // Change to string
}
