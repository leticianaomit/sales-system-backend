import { OrderItem } from 'src/core/models/order-item.model';
import { Order } from 'src/core/models/order.model';
import { EntityRepository, Repository } from 'typeorm';
import { OrderItemTypeorm } from '../entities/order-item-typeorm.entity';
import { OrderItemTypeormMapper } from '../mappers/order-item-typeorm.mapper';

@EntityRepository(OrderItemTypeorm)
export class OrderItemTypeormRepository extends Repository<OrderItemTypeorm> {
  async addOrderItem(orderItem: OrderItem) {
    const orderItemOrm: OrderItemTypeorm =
      OrderItemTypeormMapper.toOrmEntity(orderItem);
    const insertResult: OrderItemTypeorm = await this.save(orderItemOrm);

    return { id: insertResult.id };
  }

  async getAllItems(id: Order['id']) {
    const orderItemsOrms: OrderItemTypeorm[] = await this.createQueryBuilder(
      'order_items',
    )
      .where({
        order: {
          id,
        },
      })
      .select([
        'order_items.id',
        'order_items.price',
        'order_items.quantity',
        'products.name',
      ])
      .leftJoin('order_items.product', 'products')
      .getMany();

    const orderItems: OrderItem[] =
      OrderItemTypeormMapper.toEntities(orderItemsOrms);

    return orderItems;
  }
}
