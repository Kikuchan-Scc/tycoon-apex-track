import { Module } from '@nestjs/common';
import { ReplysService } from './replys.service';
import { ReplysController } from './replys.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reply } from './entities/reply.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { Post } from 'src/posts/entities/post.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reply, Comment, Post, User])],
  controllers: [ReplysController],
  providers: [ReplysService]
})
export class ReplysModule { }
