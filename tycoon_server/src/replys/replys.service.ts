import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/comments/entities/comment.entity';
import { Post } from 'src/posts/entities/post.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateReplyDto } from './dto/create-reply.dto';
import { UpdateReplyDto } from './dto/update-reply.dto';
import { Reply } from './entities/reply.entity';

@Injectable()
export class ReplysService {
  constructor(
    @InjectRepository(Comment) private commentRepository: Repository<Comment>,
    @InjectRepository(Reply) private replyRepository: Repository<Reply>,
    @InjectRepository(Post) private postRepository: Repository<Post>,
    @InjectRepository(User) private userRepository: Repository<User>
  ) { }

  async create(commentsId: string, userId: string, data: CreateReplyDto) {
    const comments = await this.commentRepository.findOne({ where: { id: commentsId } });
    const user = await this.userRepository.findOne({ where: { id: userId } });
    const reply = await this.replyRepository.create({
      ...data,
      comments,
      author: user,
    });
    console.log(comments)
    return await this.replyRepository.save(reply);
  }

  async findAll(commentsId: string) {
    return await this.replyRepository.find({
      where: { id: commentsId },
      relations: ['author', 'comments']
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} reply`;
  }

  update(id: number, updateReplyDto: UpdateReplyDto) {
    return `This action updates a #${id} reply`;
  }

  remove(id: number) {
    return `This action removes a #${id} reply`;
  }
}
