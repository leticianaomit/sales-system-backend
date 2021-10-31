import { Inject, Injectable } from '@nestjs/common';
import { Order } from 'src/core/entities/order.entity';
import { OrderRepository } from 'src/core/repositories/order.repository';

@Injectable()
export class DeleteOrderUseCase {
  constructor(
    @Inject('OrderRepository') private readonly repository: OrderRepository,
  ) {}

  public async execute(id: Order['id']) {
    return await this.repository.deleteOrder(id);
  }
}
