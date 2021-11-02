import { Order } from 'src/core/models/order.model';
import { Product } from 'src/core/models/product.model';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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
