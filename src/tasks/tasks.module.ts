import { Module } from '@nestjs/common';
import { CreateTaskUseCase } from './application/use-cases/create-task.use-case';
import { GetTasksUseCase } from './application/use-cases/get-tasks.use-case';
import { TASK_REPOSITORY } from './domain/repositories/task.repository';
import { InMemoryTaskRepository } from './infrastructure/persistence/in-memory-task.repository';
import { TasksController } from './presentation/tasks.controller';

@Module({
  controllers: [TasksController],
  providers: [
    CreateTaskUseCase,
    GetTasksUseCase,
    InMemoryTaskRepository,
    {
      provide: TASK_REPOSITORY,
      useExisting: InMemoryTaskRepository,
    },
  ],
  exports: [TASK_REPOSITORY],
})
export class TasksModule {}
