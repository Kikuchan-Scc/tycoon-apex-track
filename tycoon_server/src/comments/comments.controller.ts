import { Controller, Get, Post, Body, Patch, Param, Delete, Req, ValidationPipe, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('api/comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) { }

  @Get('post/:id')
  async findAll(@Param('id') id: string) {
    return await this.commentsService.findCommentById(id);
  }

  @Get('list/:id')
  async findPostById(@Param('id') id: string) {
    console.log(id)
    return await this.commentsService.findPostById(id);
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
