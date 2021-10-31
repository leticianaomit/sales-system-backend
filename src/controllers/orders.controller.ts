import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateOrderUseCase } from 'src/use-cases/orders/create-order.usecase';

@Controller('orders')
export class OrdersController {
  constructor(
    private createOrderUseCase: CreateOrderUseCase,
  ) {}

  @Post()
  create(@Body() createOrderDto: any) {
    return this.createOrderUseCase.execute(createOrderDto);
  }

  // @Get()
  // findAll() {
  //   return this.findAllProductsUseCase.execute();
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateClientDto: UpdateProductDto) {
  //   return this.updateProductUseCase.execute(id, updateClientDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.deleteProductUseCase.execute(id);
  // }
}
