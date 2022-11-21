import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) { }

  createToken(user: Partial<User>) {
    return this.jwtService.sign(user)
  }

  async signinLocal(user: Partial<User>) {
    const token = this.createToken({
      id: user.id,
      email: user.email,
      username: user.username,
      posts: user.posts
    })
    return { token }
  }

  logout() { }

  refreshTokens() { }

  async getUser(user: Partial<User>) {
    return await this.userService.findOne(user.id)
  }
}
