import { Client } from 'src/core/entities/client.entity';
import { ClientRepository } from 'src/core/repositories/client.repository';
import { EntityRepository, Repository } from 'typeorm';
import { ClientTypeorm } from '../entities/client-typeorm.entity';
import { ClientTypeormMapper } from '../mappers/client-typeorm.mapper';

@EntityRepository(ClientTypeorm)
export class ClientTypeormRepository
  extends Repository<ClientTypeorm>
  implements ClientRepository
{
  async addClient(client: Client) {
    const clientOrm: ClientTypeorm = ClientTypeormMapper.toOrmEntity(client);

    const insertResult: ClientTypeorm = await this.save(clientOrm);

    return { id: insertResult.id };
  }

  async getAllClients() {
    const clientOrms: ClientTypeorm[] = await this.find();

    const findResult: Client[] = ClientTypeormMapper.toEntities(clientOrms);

    return findResult;
  }

  async updateClient(id: Client['id'], client: Client) {
    const clientOrm: ClientTypeorm = ClientTypeormMapper.toOrmEntity(client);

    await this.createQueryBuilder()
      .update()
      .set({...clientOrm, id})
      .where('id = :id', { id })
      .execute();
  }
}
