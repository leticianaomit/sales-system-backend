import { OrderItem } from '../models/order-item.model';
import { Order } from '../models/order.model';

export interface OrderItemRepository {
  addOrderItem(data: OrderItem): Promise<{ id: OrderItem['id'] }>;
  getAllItems(id: Order['id']): Promise<OrderItem[]>;
}
