import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService
  ) { }

  createToken(user: Partial<User>) {
    return this.jwtService.sign(user)
  }

  async signinLocal(user: Partial<User>) {
    const token = this.createToken({
      id: user.id,
      email: user.email,
      user_name: user.user_name,
      password: user.password,
      phone: user.phone
    })
    return { token }
  }

  signupLocal() { }

  logout() { }

  refreshTokens() { }
}
