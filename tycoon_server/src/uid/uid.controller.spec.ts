import { Test, TestingModule } from '@nestjs/testing';
import { UidController } from './uid.controller';
import { UidService } from './uid.service';

describe('UidController', () => {
  let controller: UidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UidController],
      providers: [UidService],
    }).compile();

    controller = module.get<UidController>(UidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
