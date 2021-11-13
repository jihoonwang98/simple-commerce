import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import DeliveryEntity from './delivery.entity';
import { Repository } from 'typeorm';
import { DeliveryCreateBody } from './delivery.dto';

@Injectable()
export default class DeliveryService {
  constructor(@InjectRepository(DeliveryEntity) private readonly deliveryRepository: Repository<DeliveryEntity>) {}

  async createDelivery(deliveryCreateBody: DeliveryCreateBody) {
    const delivery = this.deliveryRepository.create(deliveryCreateBody);
    return this.deliveryRepository.save(delivery);
  }
}
