import { Client } from '../models/client.model';

export interface ClientRepository {
  addClient(data: Client): Promise<{ id: Client['id'] }>;
  getAllClients(): Promise<Client[]>;
  updateClient(id: Client['id'], data: Client): Promise<void>;
  deleteClient(id: Client['id']): Promise<void>;
}
