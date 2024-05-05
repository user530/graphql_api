import { Test, TestingModule } from '@nestjs/testing';
import { MonstersResolver } from './monsters.resolver';

describe('MonstersResolver', () => {
  let resolver: MonstersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonstersResolver],
    }).compile();

    resolver = module.get<MonstersResolver>(MonstersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
