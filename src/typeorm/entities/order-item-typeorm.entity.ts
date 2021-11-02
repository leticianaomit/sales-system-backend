import { Order } from 'src/core/entities/order.entity';
import { Product } from 'src/core/entities/product.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderTypeorm } from './order-typeorm.entity';
import { ProductTypeorm } from './product-typeorm.entity';

@Entity({ name: 'order_items' })
export class OrderItemTypeorm {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  price: string;

  @Column()
  quantity: number;

  @ManyToOne(() => ProductTypeorm, (product) => product)
  product: Product;

  @ManyToOne(() => OrderTypeorm, (order) => order.items)
  order: Order;
}
