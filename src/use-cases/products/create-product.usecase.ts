import { Inject, Injectable } from '@nestjs/common';
import { Product } from 'src/domains/models/product.model';
import { ProductRepository } from 'src/repositories/product.repository';
import { CreateUpdateProductDto } from 'src/domains/dtos/products/create-update-product.dto';

@Injectable()
export class CreateProductUseCase {
  constructor(
    @Inject('ProductRepository') private readonly repository: ProductRepository,
  ) {}

  public execute(createProductDto: CreateUpdateProductDto) {
    const product = new Product(createProductDto);
    return this.repository.addProduct(product);
  }
}
