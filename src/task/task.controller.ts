import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './entity/task.entity';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return await this.taskService.getAll();
  }

  @Post()
  async CreateTask(@Body() task: CreateTaskDto): Promise<Task> {
    return await this.taskService.create(task);
  }

  @Delete(':id')
  async DeleteTask(@Param('id') id: number) {
    await this.taskService.delete(id);
    return {
      success: true,
    };
  }
}
