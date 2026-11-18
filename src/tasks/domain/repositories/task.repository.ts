import { Task } from '../entities/task.entity';

/**
 * Domain port: describes what the application needs from task persistence.
 * It deliberately contains no database, ORM, HTTP, or NestJS implementation.
 */
export interface TaskRepository {
  save(task: Task): Promise<Task>;
  findById(id: string): Promise<Task | null>;
  findAll(): Promise<Task[]>;
}

/** Runtime token because TypeScript interfaces are erased after compilation. */
export const TASK_REPOSITORY = Symbol('TASK_REPOSITORY');
