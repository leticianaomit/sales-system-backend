import { Module } from '@nestjs/common';
import { OrdersController } from 'src/controllers/orders.controller';
import { OrderItemTypeormRepository } from 'src/typeorm/repositories/order-item-typeorm.repository';
import { OrderTypeormRepository } from 'src/typeorm/repositories/order-typeorm.repository';
import { ProductTypeormRepository } from 'src/typeorm/repositories/product-typeorm.repository';
import { ValiateItemProfitabilityUseCase } from 'src/use-cases/items/validate-item-profitability.usecase';
import { ValiateItemQuantityUseCase } from 'src/use-cases/items/validate-item-quantity.usecase';
import { ValiateItemUseCase } from 'src/use-cases/items/validate-item.usecase';
import { CreateOrderUseCase } from 'src/use-cases/orders/create-order.usecase';
import { FindAllOrderItemsUseCase } from 'src/use-cases/orders/find-all-order-items.usecase';
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
    {
      provide: 'ProductRepository',
      inject: [Connection],
      useFactory: (connection) =>
        connection.getCustomRepository(ProductTypeormRepository),
    },
    CreateOrderUseCase,
    FindAllOrdersUseCase,
    FindAllOrderItemsUseCase,
    ValiateItemUseCase,
    ValiateItemProfitabilityUseCase,
    ValiateItemQuantityUseCase,
  ],
})
export class OrdersModule {}
