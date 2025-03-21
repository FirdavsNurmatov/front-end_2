import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class RegisterAuthDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  username: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  password: string;
}
