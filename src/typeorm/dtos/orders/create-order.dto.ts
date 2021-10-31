import { IsNotEmpty } from 'class-validator';
import { Client } from 'src/core/entities/client.entity';
import { OrderItem } from 'src/core/entities/order-item.entity';

export class CreateOrderDto {
  @IsNotEmpty()
  client: Client;

  @IsNotEmpty()
  items: OrderItem[];
}
