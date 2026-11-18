import { Inject, Injectable } from '@nestjs/common';
import {
  TASK_REPOSITORY,
  TaskRepository,
} from '../../domain/repositories/task.repository';
import { Task } from '../../domain/entities/task.entity';

@Injectable()
export class GetTasksUseCase {
  constructor(
    @Inject(TASK_REPOSITORY)
    private readonly taskRepository: TaskRepository,
  ) {}

  execute(): Promise<Task[]> {
    return this.taskRepository.findAll();
  }
}
