"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    id;
    title;
    description;
    points;
    status;
    constructor(props) {
        this.id = props.id;
        this.title = props.title;
        this.description = props.description ?? '';
        this.points = props.points;
        this.status = 'PENDING';
    }
    static create(props) {
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
exports.Task = Task;
//# sourceMappingURL=task.entity.js.map