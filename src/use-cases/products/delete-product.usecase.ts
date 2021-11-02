import { Inject, Injectable } from '@nestjs/common';
import { Product } from 'src/core/models/product.model';
import { ProductRepository } from 'src/core/repositories/product.repository';

@Injectable()
export class DeleteProductUseCase {
  constructor(
    @Inject('ProductRepository') private readonly repository: ProductRepository,
  ) {}

  public async execute(id: Product['id']) {
    return await this.repository.deleteProduct(id);
  }
}
