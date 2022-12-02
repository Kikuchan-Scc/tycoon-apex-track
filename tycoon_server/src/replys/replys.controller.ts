import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { ReplysService } from './replys.service';
import { CreateReplyDto } from './dto/create-reply.dto';
import { UpdateReplyDto } from './dto/update-reply.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/replys')
export class ReplysController {
  constructor(private readonly replysService: ReplysService) { }

  @Post('list/:id')
  @UseGuards(JwtAuthGuard)
  create(
    @Param('id') comment: string,
    @Req() req,
    @Body() data: CreateReplyDto
  ) {
    console.log(req)
    return this.replysService.create(comment, req.user.id, data);
  }


  @Get('list/:id')
  async findAll(@Param('id') id: string) {
    return await this.replysService.findAll(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReplyDto: UpdateReplyDto) {
    return this.replysService.update(+id, updateReplyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.replysService.remove(+id);
  }
}
