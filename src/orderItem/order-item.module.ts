import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import OrderItemRepository from './repository/order-item.repository';
import { ItemModule } from '../item/item.module';
import OrderItemService from './order-item.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderItemRepository]), ItemModule],
  providers: [OrderItemService],
  exports: [TypeOrmModule.forFeature([OrderItemRepository]), OrderItemService],
})
export class OrderItemModule {}
