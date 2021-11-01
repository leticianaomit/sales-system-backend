import { Order } from './order.entity';

export class OrderItem {
  id: string;
  order: Order;

  constructor(orderItem: OrderItem) {
    this.id = orderItem.id;
    this.order = orderItem.order;
  }
}
