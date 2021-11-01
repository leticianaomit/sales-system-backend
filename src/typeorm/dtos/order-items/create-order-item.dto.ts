import { IsDecimal, IsInt, IsNotEmpty } from 'class-validator';
import { Product } from 'src/core/entities/product.entity';

export class CreateOrderItemDto {
  @IsNotEmpty()
  product: Product;

  @IsNotEmpty()
  @IsDecimal()
  price: number;

  @IsNotEmpty()
  @IsInt()
  quantity: number;
}
