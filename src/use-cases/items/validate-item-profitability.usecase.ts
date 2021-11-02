import { BadRequestException, Injectable } from '@nestjs/common';
import { OrderItem } from 'src/core/models/order-item.model';
import { Product } from 'src/core/models/product.model';

@Injectable()
export class ValidateItemProfitabilityUseCase {
  constructor() {}

  public async check(
    originalPrice: Product['price'],
    price: OrderItem['price'],
  ) {
    const originalPriceWithPercentage =
      Number(originalPrice) - Number(originalPrice) * 0.1;

    if (Number(price) < originalPriceWithPercentage)
      throw new BadRequestException(
        'Não é possível adicionar item com a Rentabilidade Baixa',
      );
  }
}
