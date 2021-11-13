import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import DeliveryEntity from '../delivery/delivery.entity';
import { OrderStatus } from './orders.status.enum';
import MemberEntity from '../member/member.entity';
import OrderItemEntity from '../orderItem/order-item.entity';
import { JoinColumn } from 'typeorm';

@Entity('orders')
export default class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => MemberEntity, (member) => member.orders)
  member: MemberEntity;

  @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.order)
  orderItems: OrderItemEntity[];

  @OneToOne(() => DeliveryEntity)
  @JoinColumn()
  delivery: DeliveryEntity;

  @CreateDateColumn()
  orderDate: Date;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.CANCELED,
  })
  status: OrderStatus;
}
