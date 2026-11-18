import { TaskRepository } from '../../domain/repositories/task.repository';
import { Task } from '../../domain/entities/task.entity';
export declare class GetTasksUseCase {
    private readonly taskRepository;
    constructor(taskRepository: TaskRepository);
    execute(): Promise<Task[]>;
}
