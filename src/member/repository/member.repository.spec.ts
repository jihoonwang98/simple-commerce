import { Test, TestingModule } from '@nestjs/testing';
import { MemberService } from '../service/member.service';
import MemberRepository from './member.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('memberRepository', () => {
  let memberRepository: MemberRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([MemberRepository])],
    }).compile();

    memberRepository = module.get<MemberRepository>(MemberRepository);
  });

  it('should be defined', function () {
    expect(memberRepository).toBeDefined();
  });
});
