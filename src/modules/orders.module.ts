import { Module } from '@nestjs/common';
import { OrdersController } from 'src/controllers/orders.controller';
import { OrderItemTypeormRepository } from 'src/typeorm/repositories/order-item-typeorm.repository';
import { OrderTypeormRepository } from 'src/typeorm/repositories/order-typeorm.repository';
import { CreateOrderUseCase } from 'src/use-cases/orders/create-order.usecase';
import { FindAllOrdersUseCase } from 'src/use-cases/orders/find-all-orders.usecase';
import { Connection } from 'typeorm';

@Module({
  controllers: [OrdersController],
  providers: [
    {
      provide: 'OrderRepository',
      inject: [Connection],
      useFactory: (connection) =>
        connection.getCustomRepository(OrderTypeormRepository),
    },
    {
      provide: 'OrderItemRepository',
      inject: [Connection],
      useFactory: (connection) =>
        connection.getCustomRepository(OrderItemTypeormRepository),
    },
    CreateOrderUseCase,
    FindAllOrdersUseCase,
  ],
})
export class OrdersModule {}
