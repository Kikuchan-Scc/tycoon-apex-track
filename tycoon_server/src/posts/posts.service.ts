import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) { }
  async create(authorId: string, post: CreatePostDto) {
    const user = await this.userRepository.findOne({
      where: { id: authorId },
    })
    const newPost = await this.postRepository.create({
      ...post,
      author: user
    })
    return this.postRepository.save(newPost)
  }

  async findAll() {
    return await this.postRepository.find({ relations: ['author'] });
  }

  async findOne(id: string) {
    return await this.postRepository.findOne({
      where: { id: id },
    });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  async remove(id: string) {
    const existPost = await this.postRepository.findOne({ where: { id: id } });
    if (!existPost) {
      throw new HttpException(`${id}已经不存在`, HttpStatus.BAD_REQUEST)
    }
    return await this.postRepository.remove(existPost)
  }
}
