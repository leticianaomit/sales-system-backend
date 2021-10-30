export class Product {
  id?: string;
  name: string;
  price: string;
  multiple: number

  constructor(client: Product) {
    this.id = client.id;
    this.name = client.name;
    this.price = client.price;
    this.multiple = client.multiple;
  }
}
