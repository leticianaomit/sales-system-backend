import { Inject, Injectable } from '@nestjs/common';
import { Order } from 'src/core/entities/order.entity';
import { OrderRepository } from 'src/core/repositories/order.repository';

@Injectable()
export class CreateOrderUseCase {
  constructor(
    @Inject('OrderRepository') private readonly repository: OrderRepository,
  ) {}

  public async execute(createOrderDto: any) {
    const order = new Order(createOrderDto);
    return await this.repository.addOrder(order);
  }
}
