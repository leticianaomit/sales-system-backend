import { IsInt, IsNotEmpty } from 'class-validator';
import { Product } from 'src/domains/models/product.model';

export class CreateOrderItemDto {
  @IsNotEmpty()
  product: Product;

  @IsNotEmpty()
  price: string;

  @IsNotEmpty()
  @IsInt()
  quantity: number;
}
