import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entity/task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { User } from 'src/user/entity/user.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,

    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description, status, userId } = createTaskDto;

    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!user) {
      throw new NotFoundException('Utilisateur non trouvé');
    }

    const task = this.taskRepository.create({
      title,
      description,
      status,
      user,
    });
    return this.taskRepository.save(task);
  }

  async delete(id: number) {
    const task = await this.taskRepository.findOne({ where: { id } });
    if (!task) {
      throw new NotFoundException('Task non trouvé');
    }
    return await this.taskRepository.delete(id);
  }
}
