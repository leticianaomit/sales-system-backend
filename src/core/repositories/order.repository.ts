import { Order } from '../entities/order.entity';

export interface OrderRepository {
  addOrder(data: Order): Promise<Order>;
  getAllOrders(): Promise<Order[]>;
}
