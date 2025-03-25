import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  category_id: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  price: number;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  quantity: number;

  @IsNotEmpty()
  @IsString()
  image: string;
}
