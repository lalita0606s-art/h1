import { Inject, Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { Task } from '../../domain/entities/task.entity';
import {
  TASK_REPOSITORY,
  TaskRepository,
} from '../../domain/repositories/task.repository';
import { CreateTaskInput } from '../dto/create-task.input';

@Injectable()
export class CreateTaskUseCase {
  constructor(
    @Inject(TASK_REPOSITORY)
    private readonly taskRepository: TaskRepository,
  ) {}

  async execute(input: CreateTaskInput): Promise<Task> {
    const task = Task.create({
      id: randomUUID(),
      title: input.title,
      description: input.description,
      points: input.points,
    });

    return this.taskRepository.save(task);
  }
}
