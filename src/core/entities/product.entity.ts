export class Product {
  id?: string;
  name: string;
  price: string;
  multiple: number;

  constructor(product: Product) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.multiple = product.multiple;
  }
}
