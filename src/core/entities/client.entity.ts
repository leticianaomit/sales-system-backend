import { CreateClientDto } from 'src/typeorm/dtos/clients/create-client.dto';
import { Order } from './order.entity';

export class Client {
  id?: string;
  name: string;
  orders: Order[]

  constructor(client: Client) {
    this.id = client.id;
    this.name = client.name;
    this.orders = client.orders;
  }
}
