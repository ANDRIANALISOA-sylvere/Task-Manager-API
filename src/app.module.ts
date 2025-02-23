import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormconfig } from './config/typeorm.config';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeormconfig), TaskModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
