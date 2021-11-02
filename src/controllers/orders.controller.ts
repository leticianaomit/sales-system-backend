import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateOrderDto } from 'src/domains/dtos/orders/create-order.dto';
import { CreateOrderUseCase } from 'src/use-cases/orders/create-order.usecase';
import { FindAllOrderItemsUseCase } from 'src/use-cases/orders/find-all-order-items.usecase';
import { FindAllOrdersUseCase } from 'src/use-cases/orders/find-all-orders.usecase';

@Controller('orders')
export class OrdersController {
  constructor(
    private createOrderUseCase: CreateOrderUseCase,
    private findAllOrdersUseCase: FindAllOrdersUseCase,
    private findAllOrderItemsUseCase: FindAllOrderItemsUseCase,
  ) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.createOrderUseCase.execute(createOrderDto);
  }

  @Get()
  findAll() {
    return this.findAllOrdersUseCase.execute();
  }

  @Get(':id/items')
  findAllItems(@Param('id') id: string) {
    return this.findAllOrderItemsUseCase.execute(id);
  }
}
