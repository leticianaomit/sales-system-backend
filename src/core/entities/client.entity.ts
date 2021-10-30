import { CreateClientDto } from 'src/typeorm/dtos/clients/create-client.dto';

export class Client {
  id?: string;
  name: string;

  constructor(client: Client) {
    this.id = client.id;
    this.name = client.name;
  }
}
