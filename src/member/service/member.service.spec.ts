import { Test, TestingModule } from '@nestjs/testing';
import { MemberService } from './member.service';
import { MemberCreateBody, MemberUpdateBody } from '../member.dto';
import MemberEntity from '../member.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import MemberRepository from '../repository/member.repository';
import { DeleteResult, UpdateResult } from 'typeorm';

describe('MemberService', () => {
  let memberService: MemberService;
  let memberRepository: MemberRepository;

  const memberCreateBody: MemberCreateBody = {
    name: 'mojo',
    address: {
      city: '강북구 수유3동',
      street: '수유로 17가길',
      zipcode: '142-890',
    },
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([MemberRepository])],
      providers: [MemberService],
    }).compile();

    memberService = module.get<MemberService>(MemberService);
    memberRepository = module.get<MemberRepository>(MemberRepository);
  });

  it('should be defined', () => {
    expect(memberService).toBeDefined();
  });

  describe('#createMember', () => {
    it('는 MemberCreateBody를 인자로 받아서 member를 save해야 한다.', async () => {
      const member: MemberEntity = await memberService.createMember(memberCreateBody);
      expect(member.id).toBeDefined();
      expect(member.name).toEqual(memberCreateBody.name);
      expect(member.address).toEqual(memberCreateBody.address);
    });
  });

  describe('#updateMember', () => {
    const memberUpdateBody: MemberUpdateBody = {
      name: 'mojo-updated',
      address: {
        city: '강북구 수유3동-updated',
        street: '수유로 17가길-updated',
        zipcode: '142-890-updated',
      },
    };

    const partialMemberUpdateBody: MemberUpdateBody = {
      name: 'yes',
      address: {
        street: '한천로 18가길',
      },
    };

    it('는 MemberUpdateBody를 인자로 받아서 member를 update하고, 업뎃된 엔티티를 반환해야 한다', async () => {
      const updateResult: UpdateResult = await memberService.updateMember(1, memberUpdateBody);
      expect(updateResult.affected).toBeTruthy();
    });

    it('partial dto도 update 가능해야 한다', async () => {
      const updateResult: UpdateResult = await memberService.updateMember(1, partialMemberUpdateBody);
      expect(updateResult.affected).toBeTruthy();
    });
  });

  describe('#deleteMember', function () {
    it('삭제', async () => {
      const deleteResult: DeleteResult = await memberService.deleteMember(1);
      expect(deleteResult.affected).toBeTruthy();
    });
  });
});
