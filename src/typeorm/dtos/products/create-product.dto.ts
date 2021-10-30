import { IsDecimal, IsInt, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsDecimal()
  price: string;

  @IsInt()
  multiple: number;
}
