import { Test, TestingModule } from '@nestjs/testing';
import { ReplysController } from './replys.controller';
import { ReplysService } from './replys.service';

describe('ReplysController', () => {
  let controller: ReplysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReplysController],
      providers: [ReplysService],
    }).compile();

    controller = module.get<ReplysController>(ReplysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
