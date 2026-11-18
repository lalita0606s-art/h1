import { Task } from '../entities/task.entity';
export interface TaskRepository {
    save(task: Task): Promise<Task>;
    findById(id: string): Promise<Task | null>;
    findAll(): Promise<Task[]>;
}
export declare const TASK_REPOSITORY: unique symbol;
