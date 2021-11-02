import { Client } from 'src/core/models/client.model';
import { ClientTypeorm } from '../entities/client-typeorm.entity';

export class ClientTypeormMapper {
  public static toOrmEntity(client: Client): ClientTypeorm {
    const clientOrm: ClientTypeorm = new ClientTypeorm();

    clientOrm.id = client.id;
    clientOrm.name = client.name;

    return clientOrm;
  }

  public static toOrmEntities(clients: Client[]): ClientTypeorm[] {
    return clients.map((client) => this.toOrmEntity(client));
  }

  public static toEntity(clientOrm: ClientTypeorm): Client {
    const client: Client = new Client({
      id: clientOrm.id,
      name: clientOrm.name,
    });

    return client;
  }

  public static toEntities(clientOrms: ClientTypeorm[]): Client[] {
    return clientOrms.map((clientOrm) => this.toEntity(clientOrm));
  }
}
