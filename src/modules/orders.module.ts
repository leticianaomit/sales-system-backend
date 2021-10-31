import { Module } from '@nestjs/common';
import { OrdersController } from 'src/controllers/orders.controller';
import { OrderTypeormRepository } from 'src/typeorm/repositories/order-typeorm.repository';
import { CreateOrderUseCase } from 'src/use-cases/orders/create-order.usecase';
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
    CreateOrderUseCase,
  ],
})
export class OrdersModule {}
