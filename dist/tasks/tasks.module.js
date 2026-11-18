"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksModule = void 0;
const common_1 = require("@nestjs/common");
const create_task_use_case_1 = require("./application/use-cases/create-task.use-case");
const get_tasks_use_case_1 = require("./application/use-cases/get-tasks.use-case");
const task_repository_1 = require("./domain/repositories/task.repository");
const in_memory_task_repository_1 = require("./infrastructure/persistence/in-memory-task.repository");
const tasks_controller_1 = require("./presentation/tasks.controller");
let TasksModule = class TasksModule {
};
exports.TasksModule = TasksModule;
exports.TasksModule = TasksModule = __decorate([
    (0, common_1.Module)({
        controllers: [tasks_controller_1.TasksController],
        providers: [
            create_task_use_case_1.CreateTaskUseCase,
            get_tasks_use_case_1.GetTasksUseCase,
            in_memory_task_repository_1.InMemoryTaskRepository,
            {
                provide: task_repository_1.TASK_REPOSITORY,
                useExisting: in_memory_task_repository_1.InMemoryTaskRepository,
            },
        ],
        exports: [task_repository_1.TASK_REPOSITORY],
    })
], TasksModule);
//# sourceMappingURL=tasks.module.js.map