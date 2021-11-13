import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import OrderEntity from '../orders/orders.entity';
import ItemEntity from '../item/item.entity';

@Entity('order_item')
export default class OrderItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => OrderEntity, (order) => order.orderItems)
  order: OrderEntity;

  @ManyToOne(() => ItemEntity)
  item: ItemEntity;

  @Column()
  orderPrice: number;

  @Column()
  count: number;
}
