import { OrderItem } from 'src/core/entities/order-item.entity';
import { Order } from 'src/core/entities/order.entity';
import { OrderItemTypeorm } from '../entities/order-item-typeorm.entity';

export class OrderItemTypeormMapper {
  public static toOrmEntity(orderItem: OrderItem): OrderItemTypeorm {
    const orderItemOrm: OrderItemTypeorm = new OrderItemTypeorm();

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
    const orderItem: OrderItem = new OrderItem({
      id: orderItemOrm.id,
      order: orderItemOrm.order,
      price: orderItemOrm.price,
      quantity: orderItemOrm.quantity,
      product: orderItemOrm.product,
    });

    return orderItem;
  }

  public static toEntities(orderItemOrms: OrderItemTypeorm[]): OrderItem[] {
    return orderItemOrms.map((orderItemOrm) => this.toEntity(orderItemOrm));
  }
}
