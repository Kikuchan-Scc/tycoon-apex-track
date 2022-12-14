import { Controller, Get, Post, Body, Param, Delete, UseGuards, Req, Patch } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CommentsService } from 'src/comments/comments.service';

@Controller('api/posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private readonly commentService: CommentsService
  ) { }

  @Post('/list')
  @UseGuards(JwtAuthGuard)
  async create(@Body() createPostDto: CreatePostDto, @Req() req) {
    return this.postsService.create(req.user, createPostDto);
  }

  @Get('/list')
  async findAll() {
    return this.postsService.findAll()
  }

  @Get('list/:id')
  async findOne(@Param('id') id: string, @Req() req) {
    return await this.postsService.findOne(id);
  }

  @Post('list/:id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  async remove(@Param('id') id) {
    return await this.postsService.remove(id)
  }
}
