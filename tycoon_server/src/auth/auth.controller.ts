import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  
  @UseGuards(AuthGuard('local'))
  @UseInterceptors(ClassSerializerInterceptor)
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
