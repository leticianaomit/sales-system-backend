import { Order } from 'src/core/entities/order.entity';
import { OrderTypeorm } from '../entities/order-typeorm.entity';

export class OrderTypeormMapper {
  public static toOrmEntity(order: Order): OrderTypeorm {
    const orderOrm: OrderTypeorm = new OrderTypeorm();

    orderOrm.id = order.id;
    orderOrm.client = order.client;
    orderOrm.items = order.items;

    return orderOrm;
  }

  public static toOrmEntities(orders: Order[]): OrderTypeorm[] {
    return orders.map((order) => this.toOrmEntity(order));
  }

  public static toEntity(orderOrm: OrderTypeorm): Order {
    const order: Order = new Order({
      id: orderOrm.id,
      client: orderOrm.client,
      items: orderOrm.items,
    });

    return order;
  }

  public static toEntities(orderOrms: OrderTypeorm[]): Order[] {
    return orderOrms.map((orderOrm) => this.toEntity(orderOrm));
  }
}
