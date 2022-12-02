import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { Post } from 'src/posts/entities/post.entity';
import { Comment } from './entities/comment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Reply } from 'src/replys/entities/reply.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Comment, User, Reply])],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule { }
