import { Client } from './client.model';
import { OrderItem } from './order-item.model';

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
