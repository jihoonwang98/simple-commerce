import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersModule } from './orders/orders.module';
import { ItemModule } from './item/item.module';
import { OrderItemModule } from './orderItem/order-item.module';
import { DeliveryModule } from './delivery/delivery.module';

@Module({
  imports: [TypeOrmModule.forRoot(), MemberModule, OrdersModule, ItemModule, OrderItemModule, DeliveryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
