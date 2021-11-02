import { Inject, Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/repositories/order.repository';

@Injectable()
export class FindAllOrdersUseCase {
  constructor(
    @Inject('OrderRepository') private readonly repository: OrderRepository,
  ) {}

  public execute() {
    return this.repository.getAllOrders();
  }
}
