import { OrderItem } from 'src/domains/models/order-item.model';
import { OrderItemTypeorm } from '../entities/order-item-typeorm.entity';

export class OrderItemTypeormMapper {
  public static toOrmEntity(orderItem: OrderItem): OrderItemTypeorm {
    const orderItemOrm = new OrderItemTypeorm();

    orderItemOrm.id = orderItem.id;
    orderItemOrm.price = orderItem.price;
    orderItemOrm.quantity = orderItem.quantity;
    orderItemOrm.product = orderItem.product;
    orderItemOrm.order = orderItem.order;

    return orderItemOrm;
  }

  public static toOrmEntities(orderItems: OrderItem[]): OrderItemTypeorm[] {
    return orderItems.map((orderItem) => this.toOrmEntity(orderItem));
  }

  public static toEntity(orderItemOrm: OrderItemTypeorm): OrderItem {
    return new OrderItem({
      id: orderItemOrm.id,
      order: orderItemOrm.order,
      price: orderItemOrm.price,
      quantity: orderItemOrm.quantity,
      product: orderItemOrm.product,
    });
  }

  public static toEntities(orderItemOrms: OrderItemTypeorm[]): OrderItem[] {
    return orderItemOrms.map((orderItemOrm) => this.toEntity(orderItemOrm));
  }
}
