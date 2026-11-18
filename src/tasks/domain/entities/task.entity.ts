export type TaskStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';

export interface CreateTaskProps {
  id: string;
  title: string;
  description?: string;
  points: number;
}

export class Task {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly points: number;
  readonly status: TaskStatus;

  private constructor(props: CreateTaskProps) {
    this.id = props.id;
    this.title = props.title;
    this.description = props.description ?? '';
    this.points = props.points;
    this.status = 'PENDING';
  }

  static create(props: CreateTaskProps): Task {
    if (!props.id || !props.id.trim()) {
      throw new Error('Task id is required');
    }
    if (!props.title || !props.title.trim()) {
      throw new Error('Task title is required');
    }
    if (!Number.isInteger(props.points) || props.points < 0) {
      throw new Error('Task points must be a non-negative integer');
    }

    return new Task({
      ...props,
      id: props.id.trim(),
      title: props.title.trim(),
      description: props.description?.trim() ?? '',
    });
  }
}
