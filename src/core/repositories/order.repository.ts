import { Order } from '../entities/order.entity';

export interface OrderRepository {
  addOrder(data: Order): Promise<{ id: Order['id'] }>;
  getAllOrders(): Promise<Order[]>;
  updateOrder(id: Order['id'], data: Order): Promise<void>;
  deleteOrder(id: Order['id']): Promise<void>;
}
