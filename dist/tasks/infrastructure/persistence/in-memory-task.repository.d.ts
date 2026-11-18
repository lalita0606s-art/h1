import { Task } from '../../domain/entities/task.entity';
import { TaskRepository } from '../../domain/repositories/task.repository';
export declare class InMemoryTaskRepository implements TaskRepository {
    private readonly tasks;
    save(task: Task): Promise<Task>;
    findById(id: string): Promise<Task | null>;
    findAll(): Promise<Task[]>;
}
