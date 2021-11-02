import { Order } from './order.model';
import { Product } from './product.model';

export class OrderItem {
  id?: string;
  product: Product;
  price: string;
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
