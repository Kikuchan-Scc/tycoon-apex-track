import { Module } from '@nestjs/common';
import { ServerStatusService } from './server-status.service';
import { ServerStatusController } from './server-status.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ServerStatusController],
  providers: [ServerStatusService]
})
export class ServerStatusModule {}
