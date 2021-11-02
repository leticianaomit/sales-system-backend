import { Product } from 'src/core/models/product.model';
import { ProductRepository } from 'src/repositories/product.repository';
import { EntityRepository, Repository } from 'typeorm';
import { ProductTypeorm } from '../entities/product-typeorm.entity';
import { ProductTypeormMapper } from '../mappers/product-typeorm.mapper';

@EntityRepository(ProductTypeorm)
export class ProductTypeormRepository
  extends Repository<ProductTypeorm>
  implements ProductRepository
{
  async addProduct(product: Product) {
    const productOrm: ProductTypeorm =
      ProductTypeormMapper.toOrmEntity(product);

    const insertResult: ProductTypeorm = await this.save(productOrm);

    return { id: insertResult.id };
  }

  async getAllProducts() {
    const productOrms: ProductTypeorm[] = await this.find();

    const findResult: Product[] = ProductTypeormMapper.toEntities(productOrms);

    return findResult;
  }

  async updateProduct(id: Product['id'], product: Product) {
    const productOrm: ProductTypeorm =
      ProductTypeormMapper.toOrmEntity(product);

    await this.createQueryBuilder()
      .update()
      .set({ ...productOrm, id })
      .where('id = :id', { id })
      .execute();
  }

  async deleteProduct(id: Product['id']) {
    await this.delete({ id });
  }

  async getProductById(id: Product['id']) {
    const productOrm = await this.findOne(id);
    return ProductTypeormMapper.toEntity(productOrm);
  }
}
