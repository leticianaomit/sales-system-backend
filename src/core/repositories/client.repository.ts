import { Client } from '../entities/client.entity';

export interface ClientRepository {
  addClient(data: Client): Promise<{ id: Client['id'] }>;
  getAllClients(): Promise<Client[]>;
  updateClient(id: Client['id'], data: Client): Promise<void>;
}
