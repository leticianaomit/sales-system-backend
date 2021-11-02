import { Client } from 'src/core/models/client.model';
import { OrderItem } from 'src/core/models/order-item.model';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ClientTypeorm } from './client-typeorm.entity';
import { OrderItemTypeorm } from './order-item-typeorm.entity';

@Entity({ name: 'orders' })
export class OrderTypeorm {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => ClientTypeorm, (client) => client.orders)
  client: Client;

  @OneToMany(() => OrderItemTypeorm, (item) => item.order)
  items: OrderItem[];
}
