import { Module } from '@nestjs/common';
import { OrdersController } from './controller/orders.controller';
import { OrdersService } from './service/orders.service';
import { OrderItemModule } from '../orderItem/order-item.module';
import { MemberModule } from '../member/member.module';
import { DeliveryModule } from '../delivery/delivery.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import OrderRepository from './repository/orders.repository';

@Module({
  imports: [TypeOrmModule.forFeature([OrderRepository]), OrderItemModule, MemberModule, DeliveryModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
