import { Client } from './client.entity';
import { OrderItem } from './order-item.entity';

export class Order {
  id?: string;
  client: Client;
  items: OrderItem[]

  constructor(order: Order) {
    this.id = order.id;
    this.client = order.client;
    this.items = order.items;
  }
}
