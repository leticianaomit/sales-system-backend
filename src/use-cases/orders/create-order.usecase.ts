import { Inject, Injectable } from '@nestjs/common';
import { OrderItem } from 'src/domains/models/order-item.model';
import { Order } from 'src/domains/models/order.model';
import { OrderRepository } from 'src/repositories/order.repository';
import { ProductRepository } from 'src/repositories/product.repository';
import { CreateOrderDto } from 'src/domains/dtos/orders/create-order.dto';
import { ValidateItemUseCase } from '../items/validate-item.usecase';

@Injectable()
export class CreateOrderUseCase {
  constructor(
    @Inject('OrderRepository') private readonly repository: OrderRepository,
    @Inject('ProductRepository')
    private readonly productRepository: ProductRepository,
    private validateItemUseCase: ValidateItemUseCase,
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
      await this.validateItemUseCase.execute({ ...item, product });
    }

    return await this.repository.addOrder(order);
  }
}
