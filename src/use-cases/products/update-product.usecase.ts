import { Inject, Injectable } from '@nestjs/common';
import { Product } from 'src/core/models/product.model';
import { ProductRepository } from 'src/core/repositories/product.repository';
import { CreateUpdateProductDto } from 'src/typeorm/dtos/products/create-update-product.dto';

@Injectable()
export class UpdateProductUseCase {
  constructor(
    @Inject('ProductRepository') private readonly repository: ProductRepository,
  ) {}

  public async execute(
    id: Product['id'],
    updateProductDto: CreateUpdateProductDto,
  ) {
    const client = new Product({
      id,
      name: updateProductDto.name,
      multiple: updateProductDto.multiple,
      price: updateProductDto.price,
    });
    this.repository.updateProduct(id, client);
  }
}
