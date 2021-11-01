import { BadRequestException, Injectable } from '@nestjs/common';
import { OrderItem } from 'src/core/entities/order-item.entity';
import { Product } from 'src/core/entities/product.entity';

@Injectable()
export class ValiateItemQuantityUseCase {
  constructor() {}

  public async check(
    multiple: Product['multiple'],
    quantity: OrderItem['quantity'],
  ) {
    if (quantity % multiple !== 0)
      throw new BadRequestException(
        `A quantidade deve ser múltiplo de ${multiple}`,
      );
  }
}
