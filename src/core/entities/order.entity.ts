import { Client } from './client.entity';
import { OrderItem } from './order-item.entity';

export class Order {
  id?: string;
  client: Client;
  items: OrderItem[]

  constructor(client: Client) {
    this.id = client.id;
  }
}
