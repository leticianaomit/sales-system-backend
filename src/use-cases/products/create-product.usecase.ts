import { Inject, Injectable } from '@nestjs/common';
import { Product } from 'src/core/models/product.model';
import { ProductRepository } from 'src/core/repositories/product.repository';
import { CreateUpdateProductDto } from 'src/typeorm/dtos/products/create-update-product.dto';

@Injectable()
export class CreateProductUseCase {
  constructor(
    @Inject('ProductRepository') private readonly repository: ProductRepository,
  ) {}

  public async execute(createProductDto: CreateUpdateProductDto) {
    const product = new Product(createProductDto);
    return await this.repository.addProduct(product);
  }
}
