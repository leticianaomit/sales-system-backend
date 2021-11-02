import { OrderItem } from '../entities/order-item.entity';
import { Order } from '../entities/order.entity';

export interface OrderItemRepository {
  addOrderItem(data: OrderItem): Promise<{ id: OrderItem['id'] }>;
  getAllItems(id: Order['id']): Promise<OrderItem[]>;
}
