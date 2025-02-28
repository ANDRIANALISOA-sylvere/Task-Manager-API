import { Body, Controller, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post()
  async CreateTask(@Body() task: CreateTaskDto) {
    return await this.taskService.create(task);
  }
}
