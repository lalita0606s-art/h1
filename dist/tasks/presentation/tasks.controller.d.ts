import { CreateTaskUseCase } from '../application/use-cases/create-task.use-case';
import { GetTasksUseCase } from '../application/use-cases/get-tasks.use-case';
import { CreateTaskInput } from '../application/dto/create-task.input';
export declare class TasksController {
    private readonly createTask;
    private readonly getTasks;
    constructor(createTask: CreateTaskUseCase, getTasks: GetTasksUseCase);
    create(input: CreateTaskInput): Promise<import("../domain/entities/task.entity").Task>;
    findAll(): Promise<import("../domain/entities/task.entity").Task[]>;
}
