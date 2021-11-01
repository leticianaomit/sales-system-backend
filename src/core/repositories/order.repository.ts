import { Order } from '../entities/order.entity';

export interface OrderRepository {
  addOrder(data: Order): Promise<{ id: Order['id'] }>;
  getAllOrders(): Promise<Order[]>;
}
