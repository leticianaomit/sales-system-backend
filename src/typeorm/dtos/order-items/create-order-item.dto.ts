import { IsDecimal, IsInt, IsNotEmpty } from 'class-validator';
import { Product } from 'src/core/entities/product.entity';

export class CreateOrderItemDto {
  @IsNotEmpty()
  product: Product;

  @IsNotEmpty()
  price: string;

  @IsNotEmpty()
  @IsInt()
  quantity: number;
}
