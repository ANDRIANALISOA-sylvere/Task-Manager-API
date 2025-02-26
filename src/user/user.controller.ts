import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('register')
  async register(@Body() user: CreateUserDto) {
    return this.userService.register(user);
  }
}
