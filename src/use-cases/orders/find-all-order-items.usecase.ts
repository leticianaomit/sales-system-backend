import { Inject, Injectable } from '@nestjs/common';
import { Order } from 'src/domains/models/order.model';
import { OrderItemRepository } from 'src/repositories/order-item.repository';

@Injectable()
export class FindAllOrderItemsUseCase {
  constructor(
    @Inject('OrderItemRepository')
    private readonly repository: OrderItemRepository,
  ) {}

  public execute(id: Order['id']) {
    return this.repository.getAllItems(id);
  }
}
