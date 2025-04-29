// src/person/dto/create-person.dto.ts
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
  Min,
} from 'class-validator';

export class CreatePersonDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsEmail()
  email: string;

  @IsNumber()
  @Min(1)
  age: number;

  @IsString()
  @IsNotEmpty()
  gender: string;
}
