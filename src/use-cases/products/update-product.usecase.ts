import { Inject, Injectable } from '@nestjs/common';
import { Product } from 'src/domains/models/product.model';
import { ProductRepository } from 'src/repositories/product.repository';
import { CreateUpdateProductDto } from 'src/domains/dtos/products/create-update-product.dto';

@Injectable()
export class UpdateProductUseCase {
  constructor(
    @Inject('ProductRepository') private readonly repository: ProductRepository,
  ) {}

  public execute(id: Product['id'], updateProductDto: CreateUpdateProductDto) {
    const product = new Product({
      id,
      name: updateProductDto.name,
      multiple: updateProductDto.multiple,
      price: updateProductDto.price,
    });
    return this.repository.updateProduct(id, product);
  }
}
