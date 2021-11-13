import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DeliveryEntity from './delivery.entity';
import DeliveryService from './delivery.service';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryEntity])],
  providers: [DeliveryService],
  exports: [DeliveryService],
})
export class DeliveryModule {}
