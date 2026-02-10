import { Component, input } from '@angular/core';
import { DUMMY_TASKS } from '../../data/dummy-tasks';
import { IDummyUser } from '../user/user.model';
import { AddTask } from './add-task/add-task';
import { Task } from './task/task';
import { ITask } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [Task, AddTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  userToDisplay = input<IDummyUser>();

  isFormOpen: boolean = false;

  onClickAddTask() {
    this.isFormOpen = !this.isFormOpen;
    console.log('this.isFormOpen', this.isFormOpen);
  }

  onClickClose() {
    this.isFormOpen = false;
    console.log('this.isFormOpen', this.isFormOpen);
  }

  onClickAdd(task: ITask) {
    this.tasks.push(task);
  }

  tasks: ITask[] = DUMMY_TASKS;

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
