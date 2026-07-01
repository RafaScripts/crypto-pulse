import { Controller } from '@nestjs/common';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ cmd: 'login' })
  async login(@Payload() data: any) {
    const user = await this.authService.validateUser(data.email, data.password);
    if (!user) {
      throw new RpcException('Invalid credentials');
    }
    return this.authService.login(user);
  }

  @MessagePattern({ cmd: 'register' })
  async register(@Payload() data: any) {
    return this.authService.register(data);
  }
}
