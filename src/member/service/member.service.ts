import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MemberCreateBody, MemberUpdateBody } from '../member.dto';
import MemberRepository from '../repository/member.repository';
import { UpdateResult } from 'typeorm';

@Injectable()
export class MemberService {
  constructor(@InjectRepository(MemberRepository) private readonly memberRepository: MemberRepository) {}

  async createMember(memberCreateBody: MemberCreateBody) {
    return this.memberRepository.saveMember(memberCreateBody);
  }

  async updateMember(memberId: number, memberUpdateBody: MemberUpdateBody) {
    return this.memberRepository.updateMember(memberId, memberUpdateBody);
  }

  async deleteMember(memberId: number) {
    return this.memberRepository.deleteMember(memberId);
  }

  async findMemberById(memberId: number) {
    return this.memberRepository.findOneOrFail(memberId);
  }
}
