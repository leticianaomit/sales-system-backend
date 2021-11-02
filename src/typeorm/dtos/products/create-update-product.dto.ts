import { IsDecimal, IsInt, IsNotEmpty } from 'class-validator';

export class CreateUpdateProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  price: string;

  @IsNotEmpty()
  @IsInt()
  multiple: number;
}
