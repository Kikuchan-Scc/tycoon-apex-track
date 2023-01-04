import { Test, TestingModule } from '@nestjs/testing';
import { ServerStatusController } from './server-status.controller';
import { ServerStatusService } from './server-status.service';

describe('ServerStatusController', () => {
  let controller: ServerStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServerStatusController],
      providers: [ServerStatusService],
    }).compile();

    controller = module.get<ServerStatusController>(ServerStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
