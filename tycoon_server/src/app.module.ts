import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
