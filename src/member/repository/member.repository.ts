import { EntityRepository, Repository } from 'typeorm';
import MemberEntity from '../member.entity';
import { MemberCreateBody, MemberUpdateBody } from '../member.dto';

@EntityRepository(MemberEntity)
export default class MemberRepository extends Repository<MemberEntity> {
  async saveMember(memberCreateBody: MemberCreateBody) {
    return this.save(this.create(memberCreateBody));
  }

  async updateMember(memberId: number, memberUpdateBody: MemberUpdateBody) {
    return this.update(memberId, memberUpdateBody);
  }

  async deleteMember(memberId: number) {
    return this.delete(memberId);
  }
}
