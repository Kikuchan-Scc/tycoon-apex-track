import { Test, TestingModule } from '@nestjs/testing';
import { CraftingController } from './crafting.controller';
import { CraftingService } from './crafting.service';

describe('CraftingController', () => {
  let controller: CraftingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CraftingController],
      providers: [CraftingService],
    }).compile();

    controller = module.get<CraftingController>(CraftingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
