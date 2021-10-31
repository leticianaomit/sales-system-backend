import { EntityRepository, Repository } from 'typeorm';
import { OrderItemTypeorm } from '../entities/order-item-typeorm.entity';

@EntityRepository(OrderItemTypeorm)
export class OrderItemTypeormRepository extends Repository<OrderItemTypeorm> {
  // async addClient(client: Client) {
  //   const clientOrm: ClientTypeorm = ClientTypeormMapper.toOrmEntity(client);
  //   const insertResult: ClientTypeorm = await this.save(clientOrm);
  //   return { id: insertResult.id };
  // }
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
