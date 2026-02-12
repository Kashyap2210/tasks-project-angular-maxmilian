import { Component, input } from '@angular/core';
import { DUMMY_TASKS } from '../../data/dummy-tasks';
import { IDummyUser } from '../user/user.model';
import { AddTask } from './add-task/add-task';
import { Task } from './task/task';
import { ITask, ITaskCreateDto } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [Task, AddTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  userToDisplay = input<IDummyUser>();

  isFormOpen: boolean = false;

  onToggleTaskAddForm() {
    this.isFormOpen = !this.isFormOpen;
    console.log('this.isFormOpen', this.isFormOpen);
  }

  // onStartAddTask
  onClickAdd(task: ITaskCreateDto) {
    console.log('task', task);
    const newTask: ITask = {
      id: String(this.tasks.length),
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
      userId: this.userToDisplay()!.id,
    };
    this.tasks = [...this.tasks, newTask];
  }

  tasks: ITask[] = [...DUMMY_TASKS];

  get getUserToDisplay(): IDummyUser {
    return this.userToDisplay() ?? ({} as IDummyUser);
  }

  get selectedUserTasks() {
    // console.log('this.userToDisplay()!.id :', this.userToDisplay()!.id);
    return this.tasks.filter((task) => task.userId === this.userToDisplay()!.id);
  }

  onCompleteTask(id: string) {
    console.log(1);
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onDeleteTask(id: string) {
    console.log(2);
    console.log(`Task with id: ${id}, is deleted.`);
  }
}
