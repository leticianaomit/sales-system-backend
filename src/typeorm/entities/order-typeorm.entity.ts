import { Client } from 'src/core/entities/client.entity';
import { OrderItem } from 'src/core/entities/order-item.entity';
import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'orders' })
export class OrderTypeorm {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Client, (client) => client.orders)
  client: Client;

  @OneToMany(() => OrderItem, (items) => items.order)
  items: OrderItem[];
}
