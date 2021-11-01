import { BadRequestException, Injectable } from '@nestjs/common';
import { OrderItem } from 'src/core/entities/order-item.entity';
import { Product } from 'src/core/entities/product.entity';

@Injectable()
export class ValiateItemProfitabilityUseCase {
  constructor() {}

  public async check(
    originalPrice: Product['price'],
    price: OrderItem['price'],
  ) {
    const originalPriceWithPercentage = originalPrice - originalPrice * 0.1;

    if (price < originalPriceWithPercentage)
      throw new BadRequestException(
        'Não é possível adicionar item com a Rentabilidade Baixa',
      );
  }
}
