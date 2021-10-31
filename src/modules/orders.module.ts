import { Module } from '@nestjs/common';

@Module({
  // controllers: [ProductsController],
  // providers: [
  //   {
  //     provide: 'ProductRepository',
  //     inject: [Connection],
  //     useFactory: (connection) =>
  //       connection.getCustomRepository(ProductTypeormRepository),
  //   },
  //   CreateProductUseCase,
  //   FindAllProductsUseCase,
  //   UpdateProductUseCase,
  //   DeleteProductUseCase,
  // ],
})
export class OrdersModule {}
