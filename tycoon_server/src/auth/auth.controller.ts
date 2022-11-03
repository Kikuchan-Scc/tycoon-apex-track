import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/local/signup')
  signupLocal() {
    
  }

  @Post('/local/signin')
  async signinLocal(@Body() user: LoginDto, @Req() req) {
    return await this.authService.signinLocal(req.user)
  }

  @Post('/logout')
  logout() {
    this.authService.logout()
  }

  @Post('/refresh')
  refreshTokens() {
    this.authService.refreshTokens()
  }

}
