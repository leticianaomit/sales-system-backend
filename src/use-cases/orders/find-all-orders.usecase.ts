import { Inject, Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/repositories/order.repository';

@Injectable()
export class FindAllOrdersUseCase {
  constructor(
    @Inject('OrderRepository') private readonly repository: OrderRepository,
  ) {}

  public async execute() {
    return await this.repository.getAllOrders();
  }
}
