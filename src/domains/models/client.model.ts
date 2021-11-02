import { Order } from './order.model';

export class Client {
  id?: string;
  name: string;
  orders?: Order[];

  constructor(client: Client) {
    this.id = client.id;
    this.name = client.name;
    this.orders = client.orders;
  }
}
