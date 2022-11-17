import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { NewsModule } from './news/news.module';
import { TopicModule } from './topic/topic.module';
import { CommentsModule } from './comments/comments.module';
import { ReplyModule } from './reply/reply.module';

@Module({
  imports: [AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      // host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Kikuchan@wen128',
      database: 'postgres',
      autoLoadEntities: true,     //自动加载实体
      synchronize: true,           //同步
    }),
    UserModule,
    ConfigModule.forRoot({isGlobal: true}),
    NewsModule,
    TopicModule,
    CommentsModule,
    ReplyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
