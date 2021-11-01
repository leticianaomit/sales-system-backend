import { Injectable } from '@nestjs/common';
import { OrderItem } from 'src/core/entities/order-item.entity';
import { ValiateItemProfitabilityUseCase } from './validate-item-profitability.usecase';
import { ValiateItemQuantityUseCase } from './validate-item-quantity.usecase';

@Injectable()
export class ValiateItemUseCase {
  constructor(
    private valiateItemProfitabilityUseCase: ValiateItemProfitabilityUseCase,
    private valiateItemQuantityUseCase: ValiateItemQuantityUseCase,
  ) {}

  public async execute(item: OrderItem) {
    this.valiateItemProfitabilityUseCase.check(item.product.price, item.price);
    this.valiateItemQuantityUseCase.check(item.product.multiple, item.quantity);
  }
}
