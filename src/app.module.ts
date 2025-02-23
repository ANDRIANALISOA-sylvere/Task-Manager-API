/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormconfig } from './config/typeorm.config';
import { TaskModule } from './task/task.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeormconfig), TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
