import { Order } from '../core/models/order.model';

export interface OrderRepository {
  addOrder(data: Order): Promise<Order>;
  getAllOrders(): Promise<Order[]>;
}
