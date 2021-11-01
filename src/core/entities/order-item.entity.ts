import { Order } from './order.entity';
import { Product } from './product.entity';

export class OrderItem {
  id?: string;
  product: Product;
  price: number;
  quantity: number;
  order?: Order;

  constructor(orderItem: OrderItem) {
    this.id = orderItem.id;
    this.product = orderItem.product;
    this.price = orderItem.price;
    this.quantity = orderItem.quantity;
    this.order = orderItem.order;
  }
}
