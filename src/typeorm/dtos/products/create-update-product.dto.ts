import { IsDecimal, IsInt, IsNotEmpty } from 'class-validator';

export class CreateUpdateProductDto {
  @IsNotEmpty()
  name: string;

  @IsDecimal()
  price: number;

  @IsInt()
  multiple: number;
}
