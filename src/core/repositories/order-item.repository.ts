import { OrderItem } from '../entities/order-item.entity';

export interface OrderItemRepository {
  addOrderItem(data: OrderItem): Promise<{ id: OrderItem['id'] }>;
}
