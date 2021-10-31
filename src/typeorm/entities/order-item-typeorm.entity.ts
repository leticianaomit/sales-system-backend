import { Order } from 'src/core/entities/order.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OrderTypeorm } from './order-typeorm.entity';

@Entity({ name: 'order_items' })
export class OrderItemTypeorm {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => OrderTypeorm, (order) => order.items)
  order: Order;
}
