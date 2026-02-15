import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../../data/dummy-tasks';
import { ITask, ITaskCreateDto } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: ITask[] = [...DUMMY_TASKS];

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(dto: ITaskCreateDto, userId: string) {
    console.log('task', dto);
    const newTask: ITask = {
      id: `t${String(this.tasks.length + 1)}`,
      title: dto.title,
      summary: dto.summary,
      dueDate: dto.dueDate,
      userId: userId,
    };
    this.tasks = [...this.tasks, newTask];
    console.log('tasks', this.tasks);
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
