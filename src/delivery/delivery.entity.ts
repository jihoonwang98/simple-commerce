import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import OrderEntity from '../orders/orders.entity';
import Address from '../common/address.embedded-entity';
import { DeliveryStatus } from './delivery-status.enum';

@Entity()
export default class DeliveryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => OrderEntity)
  order: OrderEntity;

  @Column(() => Address)
  address: Address;

  @Column({
    type: 'enum',
    enum: DeliveryStatus,
    default: DeliveryStatus.DISABLED,
  })
  status: DeliveryStatus;
}
