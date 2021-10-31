import { Inject, Injectable } from '@nestjs/common';
import { Order } from 'src/core/entities/order.entity';
import { OrderRepository } from 'src/core/repositories/order.repository';
import { CreateOrderDto } from 'src/typeorm/dtos/orders/create-order.dto';

@Injectable()
export class CreateOrderUseCase {
  constructor(
    @Inject('OrderRepository') private readonly repository: OrderRepository,
  ) {}

  public async execute(createOrderDto: CreateOrderDto) {
    const order = new Order(createOrderDto);
    return await this.repository.addOrder(order);
  }
}
