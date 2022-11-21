import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { NewsModule } from './news/news.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      // host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Kikuchan@wen128',
      database: 'postgres',
      autoLoadEntities: true,     //自动加载实体
      synchronize: true,           //同步
      entities: [__dirname + '/../**/*.entity.{ts}']
    },
    ),
    UserModule,
    NewsModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
