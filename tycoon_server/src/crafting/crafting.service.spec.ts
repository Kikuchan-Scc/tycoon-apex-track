import { Test, TestingModule } from '@nestjs/testing';
import { CraftingService } from './crafting.service';

describe('CraftingService', () => {
  let service: CraftingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CraftingService],
    }).compile();

    service = module.get<CraftingService>(CraftingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
