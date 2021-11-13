import { Module } from '@nestjs/common';
import { MemberController } from './controller/member.controller';
import { MemberService } from './service/member.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import MemberRepository from './repository/member.repository';

@Module({
  controllers: [MemberController],
  imports: [TypeOrmModule.forFeature([MemberRepository])],
  providers: [MemberService],
  exports: [MemberService],
})
export class MemberModule {}
