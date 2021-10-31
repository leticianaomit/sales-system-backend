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
  // async getAllClients() {
  //   const clientOrms: ClientTypeorm[] = await this.find();
  //   const findResult: Client[] = ClientTypeormMapper.toEntities(clientOrms);
  //   return findResult;
  // }
  // async updateClient(id: Client['id'], client: Client) {
  //   const clientOrm: ClientTypeorm = ClientTypeormMapper.toOrmEntity(client);
  //   await this.createQueryBuilder()
  //     .update()
  //     .set({ ...clientOrm, id })
  //     .where('id = :id', { id })
  //     .execute();
  // }
  // async deleteClient(id: Client['id']) {
  //   await this.delete({ id });
  // }
}
