import { Module } from '@nestjs/common';
import { CraftingService } from './crafting.service';
import { CraftingController } from './crafting.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [CraftingController],
  providers: [CraftingService]
})
export class CraftingModule {}
