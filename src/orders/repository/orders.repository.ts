import { EntityRepository, Repository } from 'typeorm';
import OrderEntity from '../orders.entity';

@EntityRepository(OrderEntity)
export default class OrderRepository extends Repository<OrderEntity> {}
