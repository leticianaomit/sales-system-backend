import { Inject, Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/repositories/product.repository';

@Injectable()
export class FindAllProductsUseCase {
  constructor(
    @Inject('ProductRepository') private readonly repository: ProductRepository,
  ) {}

  public async execute() {
    return await this.repository.getAllProducts();
  }
}
