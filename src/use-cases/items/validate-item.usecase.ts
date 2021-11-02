import { Injectable } from '@nestjs/common';
import { OrderItem } from 'src/core/models/order-item.model';
import { ValidateItemProfitabilityUseCase } from './validate-item-profitability.usecase';
import { ValidateItemQuantityUseCase } from './validate-item-quantity.usecase';

@Injectable()
export class ValidateItemUseCase {
  constructor(
    private validateItemProfitabilityUseCase: ValidateItemProfitabilityUseCase,
    private validateItemQuantityUseCase: ValidateItemQuantityUseCase,
  ) {}

  public async execute(item: OrderItem) {
    await this.validateItemProfitabilityUseCase.check(
      item.product.price,
      item.price,
    );
    await this.validateItemQuantityUseCase.check(
      item.product.multiple,
      item.quantity,
    );
  }
}
