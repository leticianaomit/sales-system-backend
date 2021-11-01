import { Inject, Injectable } from '@nestjs/common';
import { OrderItem } from 'src/core/entities/order-item.entity';
import { Order } from 'src/core/entities/order.entity';
import { OrderRepository } from 'src/core/repositories/order.repository';
import { ProductRepository } from 'src/core/repositories/product.repository';
import { CreateOrderDto } from 'src/typeorm/dtos/orders/create-order.dto';
import { ValiateItemUseCase } from '../items/validate-item.usecase';

@Injectable()
export class CreateOrderUseCase {
  constructor(
    @Inject('OrderRepository') private readonly repository: OrderRepository,
    @Inject('ProductRepository')
    private readonly productRepository: ProductRepository,
    private valiateItemUseCase: ValiateItemUseCase,
  ) {}

  public async execute(createOrderDto: CreateOrderDto) {
    const items = createOrderDto.items.map(
      (item) =>
        new OrderItem({
          product: item.product,
          price: item.price,
          quantity: item.quantity,
        }),
    );

    const order = new Order({
      client: createOrderDto.client,
      items,
    });

    for (const item of order.items) {
      const product = await this.productRepository.getProductById(
        item.product.id,
      );
      this.valiateItemUseCase.execute({ ...item, product });
    }

    const resultOrder = await this.repository.addOrder(order);

    return resultOrder;
  }
}
