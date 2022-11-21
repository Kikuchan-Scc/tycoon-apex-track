import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Post } from 'src/posts/entities/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Post])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule { }
