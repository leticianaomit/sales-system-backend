import { Inject, Injectable } from '@nestjs/common';
import { Product } from 'src/core/entities/product.entity';
import { ProductRepository } from 'src/core/repositories/product.repository';
import { CreateProductDto } from 'src/typeorm/dtos/products/create-product.dto';

@Injectable()
export class CreateProductUseCase {
  constructor(
    @Inject('ProductRepository') private readonly repository: ProductRepository,
  ) {}

  public async execute(createProductDto: CreateProductDto) {
    const product = new Product(createProductDto);
    return await this.repository.addProduct(product);
  }
}
