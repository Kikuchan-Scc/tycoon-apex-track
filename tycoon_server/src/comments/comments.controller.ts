import { Controller, Get, Post, Body, Patch, Param, Delete, Req, ValidationPipe, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/user/entities/user.entity';
import { GetUser } from 'src/user/user.decorator';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('api/comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) { }

  @Get('list/:id')
  async findAll(@Param('id') id: string) {
    return await this.commentsService.findAll(id);
  }

  @Post('post/:id')
  @UseGuards(JwtAuthGuard)
  async createComment(
    @Param('id') post: string,
    @Req() req,
    @Body() data: CreateCommentDto
  ) {
    console.log(req.user)
    return this.commentsService.create(post, req.user.id, data)
  }
}
