import { Controller, Post, Body, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller('api/auth')
export class AuthController {
  constructor(@Inject('AUTH_SERVICE') private client: ClientProxy) {}

  @Post('login')
  async login(@Body() body: any) {
    return firstValueFrom(this.client.send({ cmd: 'login' }, body));
  }

  @Post('register')
  async register(@Body() body: any) {
    return firstValueFrom(this.client.send({ cmd: 'register' }, body));
  }
}
