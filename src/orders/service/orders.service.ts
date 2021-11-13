import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import OrderRepository from '../repository/orders.repository';
import OrderItemRepository from '../../orderItem/repository/order-item.repository';
import { OrderCreateBody } from '../orders.dto';
import { MemberService } from '../../member/service/member.service';
import OrderItemService from '../../orderItem/order-item.service';
import DeliveryService from '../../delivery/delivery.service';
import OrderEntity from '../orders.entity';
import { OrderStatus } from '../orders.status.enum';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrderRepository) private readonly orderRepository: OrderRepository,
    private readonly orderItemService: OrderItemService,
    private readonly memberService: MemberService,
    private readonly deliveryService: DeliveryService,
  ) {}

  async createOrder(orderCreateBody: OrderCreateBody) {
    const {
      member: { id: memberId },
      orderItems: orderItemDTOs,
      delivery: deliveryCreateBody,
    } = orderCreateBody;

    const order = new OrderEntity();
    const orderItems = await this.orderItemService.createOrderItems(order, orderItemDTOs);
    const member = await this.memberService.findMemberById(memberId);
    const delivery = await this.deliveryService.createDelivery(deliveryCreateBody);
    const status = OrderStatus.COMPLETED;

    this.orderRepository.merge(order, { orderItems, member, delivery, status });
    return this.orderRepository.save(order);
  }
}
