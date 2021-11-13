import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('item')
export default class ItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  stockQuantity: number;
}
