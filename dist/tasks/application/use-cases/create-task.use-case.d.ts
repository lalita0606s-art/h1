import { Task } from '../../domain/entities/task.entity';
import { TaskRepository } from '../../domain/repositories/task.repository';
import { CreateTaskInput } from '../dto/create-task.input';
export declare class CreateTaskUseCase {
    private readonly taskRepository;
    constructor(taskRepository: TaskRepository);
    execute(input: CreateTaskInput): Promise<Task>;
}
