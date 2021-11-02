import { Order } from '../models/order.model';

export interface OrderRepository {
  addOrder(data: Order): Promise<Order>;
  getAllOrders(): Promise<Order[]>;
}
