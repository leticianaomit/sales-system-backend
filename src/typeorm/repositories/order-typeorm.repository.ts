import { Order } from 'src/domains/models/order.model';
import { OrderItemRepository } from 'src/repositories/order-item.repository';
import { OrderRepository } from 'src/repositories/order.repository';
import { Connection, EntityRepository, Repository } from 'typeorm';
import { OrderTypeorm } from '../entities/order-typeorm.entity';
import { OrderTypeormMapper } from '../mappers/order-typeorm.mapper';
import { OrderItemTypeormRepository } from './order-item-typeorm.repository';

@EntityRepository(OrderTypeorm)
export class OrderTypeormRepository
  extends Repository<OrderTypeorm>
  implements OrderRepository
{
  private orderItemRepository: OrderItemRepository;

  constructor(private connection: Connection) {
    super();
    this.orderItemRepository = this.connection.getCustomRepository(
      OrderItemTypeormRepository,
    );
  }

  async addOrder(order: Order) {
    const orderOrm: OrderTypeorm = OrderTypeormMapper.toOrmEntity(order);

    const insertOrderResult: OrderTypeorm = await this.save(orderOrm);

    for (const item of orderOrm.items) {
      await this.orderItemRepository.addOrderItem({
        ...item,
        order: insertOrderResult,
      });
    }
    return insertOrderResult;
  }

  async getAllOrders() {
    const orderOrms: OrderTypeorm[] = await this.find({
      relations: ['client'],
    });

    const findResult: Order[] = OrderTypeormMapper.toEntities(orderOrms);
    return findResult;
  }
}
