import { Task } from './task.entity';

describe('Task domain entity', () => {
  it('creates a valid task and applies the default status', () => {
    const task = Task.create({
      id: 'task-1',
      title: '  Learn NestJS  ',
      description: '  Build a module  ',
      points: 100,
    });

    expect(task.id).toBe('task-1');
    expect(task.title).toBe('Learn NestJS');
    expect(task.description).toBe('Build a module');
    expect(task.points).toBe(100);
    expect(task.status).toBe('PENDING');
  });

  it('rejects an empty id', () => {
    expect(() =>
      Task.create({ id: ' ', title: 'Valid title', points: 10 }),
    ).toThrow('Task id is required');
  });

  it('rejects an empty title', () => {
    expect(() =>
      Task.create({ id: 'task-1', title: '  ', points: 10 }),
    ).toThrow('Task title is required');
  });

  it.each([-1, 1.5, NaN])('rejects invalid points: %s', (points) => {
    expect(() =>
      Task.create({ id: 'task-1', title: 'Valid title', points }),
    ).toThrow('Task points must be a non-negative integer');
  });

  it('accepts zero points', () => {
    const task = Task.create({
      id: 'task-2',
      title: 'No score task',
      points: 0,
    });

    expect(task.points).toBe(0);
  });
});
