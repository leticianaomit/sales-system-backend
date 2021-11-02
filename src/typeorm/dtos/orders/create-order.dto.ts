import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { Client } from 'src/core/models/client.model';
import { CreateOrderItemDto } from '../order-items/create-order-item.dto';

export class CreateOrderDto {
  @IsNotEmpty()
  client: Client;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  items: CreateOrderItemDto[];
}
