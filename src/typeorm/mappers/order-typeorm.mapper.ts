import { Order } from 'src/domains/models/order.model';
import { OrderTypeorm } from '../entities/order-typeorm.entity';

export class OrderTypeormMapper {
  public static toOrmEntity(order: Order): OrderTypeorm {
    const orderOrm = new OrderTypeorm();

    orderOrm.id = order.id;
    orderOrm.client = order.client;
    orderOrm.items = order.items;

    return orderOrm;
  }

  public static toOrmEntities(orders: Order[]): OrderTypeorm[] {
    return orders.map((order) => this.toOrmEntity(order));
  }

  public static toEntity(orderOrm: OrderTypeorm): Order {
    return new Order({
      id: orderOrm.id,
      client: orderOrm.client,
      items: orderOrm.items,
    });
  }

  public static toEntities(orderOrms: OrderTypeorm[]): Order[] {
    return orderOrms.map((orderOrm) => this.toEntity(orderOrm));
  }
}
