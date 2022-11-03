import { HttpException, Injectable, HttpStatus, Get, Param, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  //注册逻辑
  async register(createUser: CreateUserDto) {
    const { user_name } = createUser;

    const user = await this.userRepository.findOne({
      where: { user_name },
    })
    if (user) {
      throw new HttpException("用户已存在", HttpStatus.BAD_REQUEST)   //如果用户已存在抛出错误
    }

    const newUser = await this.userRepository.create(createUser)  //如果该用户不存在则创建一个新用户
    return await this.userRepository.save(newUser);   //储存这个新用户
  }

  @Get()
  async getUserInfo(@Req() req) {
    return req.user
  }

  //使用id查找某个人的信息
  async findOne(id: string) {
    return await this.userRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}