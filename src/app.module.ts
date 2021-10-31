import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'typeorm.config';
import { ClientsModule } from './modules/clients.module';
import { OrdersModule } from './modules/orders.module';
import { ProductsModule } from './modules/products.module';
import { ClientTypeormRepository } from './typeorm/repositories/client-typeorm.repository';
import { OrderItemTypeormRepository } from './typeorm/repositories/order-item-typeorm.repository';
import { OrderTypeormRepository } from './typeorm/repositories/order-typeorm.repository';
import { ProductTypeormRepository } from './typeorm/repositories/product-typeorm.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([
      ProductTypeormRepository,
      ClientTypeormRepository,
      OrderTypeormRepository,
      OrderItemTypeormRepository,
    ]),
    ClientsModule,
    ProductsModule,
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
