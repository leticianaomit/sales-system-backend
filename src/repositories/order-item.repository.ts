import { OrderItem } from '../core/models/order-item.model';
import { Order } from '../core/models/order.model';

export interface OrderItemRepository {
  addOrderItem(data: OrderItem): Promise<{ id: OrderItem['id'] }>;
  getAllItems(id: Order['id']): Promise<OrderItem[]>;
}
