import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import OrderItemRepository from './repository/order-item.repository';
import { OrderItemCreateBody } from '../orders/orders.dto';
import { ItemService } from '../item/item.service';
import OrderItemEntity from './order-item.entity';
import OrderEntity from '../orders/orders.entity';

@Injectable()
export default class OrderItemService {
  constructor(
    @InjectRepository(OrderItemRepository) private readonly orderItemRepository: OrderItemRepository,
    private readonly itemService: ItemService,
  ) {}

  async createOrderItem(order: OrderEntity, orderItemCreate: OrderItemCreateBody) {
    const { itemId, count: itemCount } = orderItemCreate;

    const item = await this.itemService.findItemById(itemId);
    const orderItem = await this.orderItemRepository.createOrderItem(order, item, itemCount);

    return orderItem;
  }

  async createOrderItems(order: OrderEntity, orderItemCreateDTOs: OrderItemCreateBody[]) {
    const orderItems: OrderItemEntity[] = [];

    for (const orderItemCreate of orderItemCreateDTOs) {
      const orderItem = await this.createOrderItem(order, orderItemCreate);
      orderItems.push(orderItem);
    }

    return orderItems;
  }
}
