import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from 'src/controllers/products.controller';
import { ProductTypeormRepository } from 'src/typeorm/repositories/product-typeorm.repository';
import { CreateProductUseCase } from 'src/use-cases/products/create-product.usecase';
import { DeleteProductUseCase } from 'src/use-cases/products/delete-product.usecase';
import { FindAllProductsUseCase } from 'src/use-cases/products/find-all-products.usecase';
import { UpdateProductUseCase } from 'src/use-cases/products/update-product.usecase';
import { Connection } from 'typeorm';

@Module({
  controllers: [ProductsController],
  providers: [
    {
      provide: 'ProductRepository',
      inject: [Connection],
      useFactory: (connection) =>
        connection.getCustomRepository(ProductTypeormRepository),
    },
    CreateProductUseCase,
    FindAllProductsUseCase,
    UpdateProductUseCase,
    DeleteProductUseCase,
  ],
})
export class ProductsModule {}
