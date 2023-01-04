import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServerStatusService } from './server-status.service';
import { CreateServerStatusDto } from './dto/create-server-status.dto';
import { UpdateServerStatusDto } from './dto/update-server-status.dto';

@Controller('api/server-status')
export class ServerStatusController {
  constructor(private readonly serverStatusService: ServerStatusService) {}

  @Post()
  create(@Body() createServerStatusDto: CreateServerStatusDto) {
    return this.serverStatusService.create(createServerStatusDto);
  }

  @Get()
  findAll() {
    return this.serverStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serverStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServerStatusDto: UpdateServerStatusDto) {
    return this.serverStatusService.update(+id, updateServerStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serverStatusService.remove(+id);
  }
}
