import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUpdateProductDto } from 'src/typeorm/dtos/products/create-update-product.dto';
import { CreateProductUseCase } from 'src/use-cases/products/create-product.usecase';
import { DeleteProductUseCase } from 'src/use-cases/products/delete-product.usecase';
import { FindAllProductsUseCase } from 'src/use-cases/products/find-all-products.usecase';
import { UpdateProductUseCase } from 'src/use-cases/products/update-product.usecase';

@Controller('products')
export class ProductsController {
  constructor(
    private createProductUseCase: CreateProductUseCase,
    private findAllProductsUseCase: FindAllProductsUseCase,
    private updateProductUseCase: UpdateProductUseCase,
    private deleteProductUseCase: DeleteProductUseCase,
  ) {}

  @Post()
  create(@Body() createProductDto: CreateUpdateProductDto) {
    return this.createProductUseCase.execute(createProductDto);
  }

  @Get()
  findAll() {
    return this.findAllProductsUseCase.execute();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateClientDto: CreateUpdateProductDto,
  ) {
    return this.updateProductUseCase.execute(id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteProductUseCase.execute(id);
  }
}
