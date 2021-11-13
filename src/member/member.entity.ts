import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Address from '../common/address.embedded-entity';
import OrderEntity from '../orders/orders.entity';

@Entity('member')
export default class MemberEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column(() => Address)
  address: Address;

  @OneToMany(() => OrderEntity, (order) => order.member)
  orders: OrderEntity[];
}
