import { EntityRepository, Repository } from 'typeorm';
import ItemEntity from './item.entity';

@EntityRepository(ItemEntity)
export default class ItemRepository extends Repository<ItemEntity> {}
