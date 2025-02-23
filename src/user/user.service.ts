import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { CreateUserDto } from './entity/dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async register(user: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 12);
    user.password = hashedPassword;
    return await this.userRepository.save(user);
  }
}
