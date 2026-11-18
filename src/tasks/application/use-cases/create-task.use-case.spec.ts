import { Task } from '../../domain/entities/task.entity';
import { TaskRepository } from '../../domain/repositories/task.repository';
import { CreateTaskUseCase } from './create-task.use-case';

describe('CreateTaskUseCase - repository interface inversion', () => {
  it('uses an injected repository port without depending on a database adapter', async () => {
    const savedTasks: Task[] = [];

    // This fake adapter satisfies the domain port. No database is required.
    const repository: TaskRepository = {
      save: jest.fn(async (task: Task) => {
        savedTasks.push(task);
        return task;
      }),
      findById: jest.fn(async () => null),
      findAll: jest.fn(async () => savedTasks),
    };

    const useCase = new CreateTaskUseCase(repository);

    const result = await useCase.execute({
      title: 'Scaffold Hexagonal Architecture',
      description: 'Create domain entities and repository ports',
      points: 100,
    });

    expect(repository.save).toHaveBeenCalledTimes(1);
    expect(result.title).toBe('Scaffold Hexagonal Architecture');
    expect(result.points).toBe(100);
    expect(savedTasks).toHaveLength(1);
  });

  it('does not save a task when domain validation fails', async () => {
    const repository: TaskRepository = {
      save: jest.fn(async (task: Task) => task),
      findById: jest.fn(async () => null),
      findAll: jest.fn(async () => []),
    };

    const useCase = new CreateTaskUseCase(repository);

    await expect(
      useCase.execute({ title: '   ', points: 100 }),
    ).rejects.toThrow('Task title is required');

    expect(repository.save).not.toHaveBeenCalled();
  });
});
