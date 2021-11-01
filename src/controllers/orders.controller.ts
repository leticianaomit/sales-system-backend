import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateOrderDto } from 'src/typeorm/dtos/orders/create-order.dto';
import { CreateOrderUseCase } from 'src/use-cases/orders/create-order.usecase';
import { FindAllOrdersUseCase } from 'src/use-cases/orders/find-all-orders.usecase';

@Controller('orders')
export class OrdersController {
  constructor(
    private createOrderUseCase: CreateOrderUseCase,
    private findAllOrdersUseCase: FindAllOrdersUseCase,
  ) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.createOrderUseCase.execute(createOrderDto);
  }

  @Get()
  findAll() {
    return this.findAllOrdersUseCase.execute();
  }
}
