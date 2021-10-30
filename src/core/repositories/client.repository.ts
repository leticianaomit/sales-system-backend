import { Client } from '../entities/client.entity';

export interface ClientRepository {
  addClient(data: Client): Promise<{ id: Client['id'] }>;
}
