import { Column } from 'typeorm';

// Embedded Entity
export default class Address {
  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  zipcode: string;
}
