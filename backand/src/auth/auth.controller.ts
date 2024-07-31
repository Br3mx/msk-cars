import {
  Body,
  Controller,
  Delete,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/register-user.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async register(@Body() registerData: RegisterDTO) {
    this.authService.register(registerData);
  }
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Response() res) {
    const user = req.user;
    //console.log(user);
    const tokens = await this.authService.createSession(user);
    const isProduction = process.env.NODE_ENV === 'production';

    // Zwróć token oraz rolę w odpowiedzi
    res.cookie('auth', tokens.access_token, {
      httpOnly: true,
      sameSite: 'None',
      secure: isProduction,
    });

    res.json({
      message: 'success',
      role: user.role,
    });
  }

  @UseGuards(LocalAuthGuard)
  @Delete('logout')
  async logout(@Response() res) {
    res.clearCookie('auth', { httpOnly: true });
    res.send({
      message: 'success',
    });
  }
}
