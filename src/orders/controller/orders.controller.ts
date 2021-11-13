import { Controller, Post } from '@nestjs/common';
import { OrdersService } from '../service/orders.service';
import { OrderCreateBody } from '../orders.dto';

@Controller('/orders')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}

  @Post('')
  async createOrder(orderCreateBody: OrderCreateBody) {
    return await this.orderService.createOrder(orderCreateBody);
  }
}
