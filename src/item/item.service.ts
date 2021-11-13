import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import ItemRepository from './item.repository';

@Injectable()
export class ItemService {
  constructor(@InjectRepository(ItemRepository) private readonly itemRepository: ItemRepository) {}

  async findItemById(id: number) {
    return this.itemRepository.findOneOrFail(id);
  }
}
