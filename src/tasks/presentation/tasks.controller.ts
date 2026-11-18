import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskUseCase } from '../application/use-cases/create-task.use-case';
import { GetTasksUseCase } from '../application/use-cases/get-tasks.use-case';
import { CreateTaskInput } from '../application/dto/create-task.input';

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly createTask: CreateTaskUseCase,
    private readonly getTasks: GetTasksUseCase,
  ) {}

  @Post()
  create(@Body() input: CreateTaskInput) {
    return this.createTask.execute(input);
  }

  @Get()
  findAll() {
    return this.getTasks.execute();
  }
}
