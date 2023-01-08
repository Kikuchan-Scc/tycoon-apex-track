import { Module } from '@nestjs/common';
import { UidService } from './uid.service';
import { UidController } from './uid.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [UidController],
  providers: [UidService]
})
export class UidModule {}
