import { OrderItem } from 'src/core/entities/order-item.entity';
import { EntityRepository, Repository } from 'typeorm';
import { OrderItemTypeorm } from '../entities/order-item-typeorm.entity';
import { OrderItemTypeormMapper } from '../mappers/order-item-typeorm.mapper';

@EntityRepository(OrderItemTypeorm)
export class OrderItemTypeormRepository extends Repository<OrderItemTypeorm> {
  async addOrderItem(orderItem: OrderItem) {
    const orderItemOrm: OrderItemTypeorm =
      OrderItemTypeormMapper.toOrmEntity(orderItem);
    const insertResult: OrderItemTypeorm = await this.save(orderItemOrm);
    console.log(insertResult);
    
    return { id: insertResult.id };
  }
}
