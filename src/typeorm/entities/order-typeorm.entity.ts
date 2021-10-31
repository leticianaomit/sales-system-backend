import { Client } from 'src/core/entities/client.entity';
import { OrderItem } from 'src/core/entities/order-item.entity';
import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ClientTypeorm } from './client-typeorm.entity';
import { OrderItemTypeorm } from './order-item-typeorm.entity';

@Entity({ name: 'orders' })
export class OrderTypeorm {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => ClientTypeorm, (client) => client.orders)
  client: Client;

  @OneToMany(() => OrderItemTypeorm, (item) => item.order)
  items: OrderItem[];
}
