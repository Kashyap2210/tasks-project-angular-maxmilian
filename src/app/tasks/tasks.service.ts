import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../../data/dummy-tasks';
import { ITask, ITaskCreateDto } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: ITask[];
  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    } else {
      this.tasks = [...DUMMY_TASKS];
    }
  }

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
    this.saveTasksToLocalStorage();
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasksToLocalStorage();
  }

  private saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
