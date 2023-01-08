import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UidService } from './uid.service';
import { CreateUidDto } from './dto/create-uid.dto';
import { UpdateUidDto } from './dto/update-uid.dto';

@Controller('api/uid')
export class UidController {
  constructor(private readonly uidService: UidService) { }

  @Post()
  create(@Body() createUidDto: CreateUidDto) {
    return this.uidService.create(createUidDto);
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Query('plat') plat: string
  ) {
    return await this.uidService.findOne(id, plat)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUidDto: UpdateUidDto) {
    return this.uidService.update(+id, updateUidDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uidService.remove(+id);
  }
}
