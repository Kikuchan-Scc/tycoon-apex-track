import { Controller, Get, Post, Body, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
  ) { }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createPostDto: CreatePostDto, @Req() req) {
    return this.postsService.create(req.user, createPostDto);
  }

  @Get('/list')
  async findAll() {
    return this.postsService.findAll()
  }

  @Get('list/:id')
  async findOne(@Param('id') id: string) {
    return await this.postsService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id) {
    return await this.postsService.remove(id)
  }
}
