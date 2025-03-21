import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { Role } from 'src/enums/role.enum';

export class LoginAuthDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  password: string;

  @IsOptional()
  @IsEnum(Role)
  role: Role;
}
