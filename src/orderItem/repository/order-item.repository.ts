import { EntityRepository, Repository } from 'typeorm';
import OrderItemEntity from '../order-item.entity';
import { OrderItemCreateBody } from '../../orders/orders.dto';
import ItemEntity from '../../item/item.entity';
import OrderEntity from '../../orders/orders.entity';

@EntityRepository(OrderItemEntity)
export default class OrderItemRepository extends Repository<OrderItemEntity> {
  async createOrderItem(order: OrderEntity, item: ItemEntity, itemCount: number) {
    const itemPrice = item.price;
    const orderPrice = itemPrice * itemCount;

    return await this.save(
      this.create({
        order,
        item,
        orderPrice,
        count: itemCount,
      }),
    );
  }
}
