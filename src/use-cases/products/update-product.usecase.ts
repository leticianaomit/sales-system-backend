import { Inject, Injectable } from '@nestjs/common';
import { Product } from 'src/core/entities/product.entity';
import { ProductRepository } from 'src/core/repositories/product.repository';
import { UpdateProductDto } from 'src/typeorm/dtos/products/update-product.dto';

@Injectable()
export class UpdateProductUseCase {
  constructor(
    @Inject('ProductRepository') private readonly repository: ProductRepository,
  ) {}

  public async execute(id: Product['id'], updateProductDto: UpdateProductDto) {
    const client = new Product(updateProductDto);
    this.repository.updateProduct(id, client);
  }
}
