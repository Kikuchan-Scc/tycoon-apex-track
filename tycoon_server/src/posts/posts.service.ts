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

  async create(user, post: CreatePostDto): Promise<number> {
    const { title } = post
    if (!title) {
      throw new HttpException('缺少文章标题', HttpStatus.BAD_REQUEST);
    }

    const doc = await this.postRepository.findOne({
      where: { title },
    });
    if (doc) {
      throw new HttpException('文章已存在', HttpStatus.BAD_REQUEST);
    }

    let { coverUrl } = post;

    const postParam: Partial<Post> = {
      ...post,
      author: user,
    };

    const newPost: Post = await this.postRepository.create({
      ...postParam,
    });
    const created = await this.postRepository.save(newPost);
    return Number(created.id);
  }

  async findAll() {
    return await this.postRepository.find({ relations: ['author'] });
  }

  async findOne(id: string) {
    return await this.postRepository.findOne({
      where: { id: id },
      relations: ['author']
    });
  }

  async remove(id: string) {
    const existPost = await this.postRepository.findOne({ where: { id: id } });
    if (!existPost) {
      throw new HttpException(`${id}已经不存在`, HttpStatus.BAD_REQUEST)
    }
    return await this.postRepository.remove(existPost)
  }
}
