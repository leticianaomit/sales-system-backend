import { Order } from 'src/core/entities/order.entity';
import { OrderRepository } from 'src/core/repositories/order.repository';
import { EntityRepository, Repository } from 'typeorm';
import { OrderTypeorm } from '../entities/order-typeorm.entity';
import { OrderTypeormMapper } from '../mappers/order-typeorm.mapper';

@EntityRepository(OrderTypeorm)
export class OrderTypeormRepository extends Repository<OrderTypeorm> implements OrderRepository {
  async addOrder(order: Order) {
    const orderOrm: OrderTypeorm = OrderTypeormMapper.toOrmEntity(order);
    const insertResult: OrderTypeorm = await this.save(orderOrm);
    return { id: insertResult.id };
  }

  async getAllOrders() {
    const orderOrms: OrderTypeorm[] = await this.find();
    const findResult: Order[] = OrderTypeormMapper.toEntities(orderOrms);
    return findResult;
  }

  async updateOrder(id: Order['id'], order: Order) {
    const orderOrm: OrderTypeorm = OrderTypeormMapper.toOrmEntity(order);
    await this.createQueryBuilder()
      .update()
      .set({ ...orderOrm, id })
      .where('id = :id', { id })
      .execute();
  }

  async deleteOrder(id: Order['id']) {
    await this.delete({ id });
  }
}
