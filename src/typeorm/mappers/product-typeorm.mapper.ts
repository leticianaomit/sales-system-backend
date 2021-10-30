import { Product } from 'src/core/entities/product.entity';
import { ProductTypeorm } from '../entities/product-typeorm.entity';

export class ProductTypeormMapper {
  public static toOrmEntity(product: Product): ProductTypeorm {
    const productOrm: ProductTypeorm = new ProductTypeorm();

    productOrm.id = product.id;
    productOrm.name = product.name;
    productOrm.price = product.price;
    productOrm.multiple = product.multiple;

    return productOrm;
  }

  public static toOrmEntities(products: Product[]): ProductTypeorm[] {
    return products.map((product) => this.toOrmEntity(product));
  }

  public static toEntity(productOrm: ProductTypeorm): Product {
    const product: Product = new Product({
      id: productOrm.id,
      name: productOrm.name,
      price: productOrm.price,
      multiple: productOrm.multiple,
    });

    return product;
  }

  public static toEntities(productOrms: ProductTypeorm[]): Product[] {
    return productOrms.map((productOrm) => this.toEntity(productOrm));
  }
}
