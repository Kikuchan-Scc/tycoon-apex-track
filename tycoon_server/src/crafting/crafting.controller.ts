import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CraftingService } from './crafting.service';
import { CreateCraftingDto } from './dto/create-crafting.dto';
import { UpdateCraftingDto } from './dto/update-crafting.dto';

@Controller('api/crafting')
export class CraftingController {
  constructor(private readonly craftingService: CraftingService) {}

  @Post()
  create(@Body() createCraftingDto: CreateCraftingDto) {
    return this.craftingService.create(createCraftingDto);
  }

  @Get()
  findAll() {
    return this.craftingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.craftingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCraftingDto: UpdateCraftingDto) {
    return this.craftingService.update(+id, updateCraftingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.craftingService.remove(+id);
  }
}
