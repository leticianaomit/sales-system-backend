import { Inject, Injectable } from '@nestjs/common';
import { Product } from 'src/domains/models/product.model';
import { ProductRepository } from 'src/repositories/product.repository';

@Injectable()
export class DeleteProductUseCase {
  constructor(
    @Inject('ProductRepository') private readonly repository: ProductRepository,
  ) {}

  public execute(id: Product['id']) {
    return this.repository.deleteProduct(id);
  }
}
