import { Component, input } from '@angular/core';
import { IDummyUser } from '../user/user.model';
import { Task } from './task/task';
import { ITask } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  userToDisplay = input<IDummyUser>();

  tasks: ITask[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic & advanced features of Angular & how to apply them.',
      dueDate: '2026-02-28',
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Build Angular Projects',
      summary: 'Create 2–3 real-world Angular projects to strengthen practical knowledge.',
      dueDate: '2026-03-15',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Learn TypeScript Deeply',
      summary:
        'Understand advanced TypeScript concepts like generics, decorators, and utility types.',
      dueDate: '2026-03-05',
    },
    {
      id: 't4',
      userId: 'u3',
      title: 'Prepare for Frontend Interviews',
      summary: 'Practice Angular, JavaScript, and system design interview questions.',
      dueDate: '2026-03-25',
    },
    {
      id: 't5',
      userId: 'u4',
      title: 'Optimize Angular Performance',
      summary:
        'Learn change detection strategies, lazy loading, and performance optimization techniques.',
      dueDate: '2026-04-05',
    },
  ];

  get getUserToDisplay() {
    return this.userToDisplay() ?? ({} as IDummyUser);
  }

  get selectedUserTasks() {
    console.log('this.userToDisplay()!.id', this.userToDisplay()!.id);
    return this.tasks.filter((task) => task.userId === this.userToDisplay()!.id);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
