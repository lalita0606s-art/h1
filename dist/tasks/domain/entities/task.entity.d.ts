export type TaskStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
export interface CreateTaskProps {
    id: string;
    title: string;
    description?: string;
    points: number;
}
export declare class Task {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly points: number;
    readonly status: TaskStatus;
    private constructor();
    static create(props: CreateTaskProps): Task;
}
