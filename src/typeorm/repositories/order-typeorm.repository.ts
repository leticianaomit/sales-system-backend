import { Inject } from '@nestjs/common';
import { Order } from 'src/core/entities/order.entity';
import { OrderItemRepository } from 'src/core/repositories/order-item.repository';
import { OrderRepository } from 'src/core/repositories/order.repository';
import { EntityRepository, Repository } from 'typeorm';
import { OrderTypeorm } from '../entities/order-typeorm.entity';
import { OrderTypeormMapper } from '../mappers/order-typeorm.mapper';
import { OrderItemTypeormRepository } from './order-item-typeorm.repository';

@EntityRepository(OrderTypeorm)
export class OrderTypeormRepository
  extends Repository<OrderTypeorm>
  implements OrderRepository
{
  constructor(
    @Inject('OrderItemRepository')
    private readonly orderItemRepository: OrderItemRepository,
  ) {
    super();
  }

  async addOrder(order: Order) {
    const orderOrm: OrderTypeorm = OrderTypeormMapper.toOrmEntity(order);

    for (const item of orderOrm.items) {
      await this.orderItemRepository.addOrderItem(item);
    }

    const insertResult: OrderTypeorm = await this.save(orderOrm);
    return { id: insertResult.id };
  }

  async getAllOrders() {
    const orderOrms: OrderTypeorm[] = await this.find();
    console.log(orderOrms);

    const findResult: Order[] = OrderTypeormMapper.toEntities(orderOrms);
    return findResult;
  }
}
