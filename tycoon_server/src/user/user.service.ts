import { HttpException, Injectable, HttpStatus, Get, Param, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/posts/entities/post.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) { }

  //注册逻辑
  async register(createUser: CreateUserDto) {
    const { username } = createUser;

    const user = await this.userRepository.findOne({
      where: { username },
    })
    if (user) {
      throw new HttpException("用户已存在", HttpStatus.BAD_REQUEST)   //如果用户已存在抛出错误
    }

    const newUser = await this.userRepository.create(createUser)  //如果该用户不存在则创建一个新用户
    return await this.userRepository.save(newUser);   //储存这个新用户
  }

  //使用id查找某个人的信息
  async findOne(id: string) {
    return await this.userRepository.findOne({
      where: { id: id },
      relations: ['posts']
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    const existUser = await this.postRepository.findOne({ where: { id: id } });
    if (existUser) {
      throw new HttpException(`${id}已经不存在`, HttpStatus.BAD_REQUEST)
    }
    return await this.postRepository.remove(existUser)
  }
}
