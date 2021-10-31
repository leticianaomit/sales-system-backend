import { Inject, Injectable } from '@nestjs/common';
import { Order } from 'src/core/entities/order.entity';
import { OrderRepository } from 'src/core/repositories/order.repository';
import { UpdateOrderDto } from 'src/typeorm/dtos/orders/update-order.dto';

@Injectable()
export class UpdateOrderUseCase {
  constructor(
    @Inject('OrderRepository') private readonly repository: OrderRepository,
  ) {}

  public async execute(
    id: Order['id'],
    updateOrderDto: UpdateOrderDto,
  ) {
    const order = new Order(updateOrderDto);
    this.repository.updateOrder(id, order);
  }
}
