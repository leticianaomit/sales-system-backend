import { CreateClientDto } from 'src/shared/dtos/clients/create-client.dto';

export class Client {
  id?: string;
  name: string;

  constructor(payload: CreateClientDto) {
    this.name = payload.name;
  }
}
