import { Component, input } from '@angular/core';
import { IDummyUser } from '../user/user.model';
import { AddTask } from './add-task/add-task';
import { Task } from './task/task';
import { ITaskCreateDto } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, AddTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  constructor(private readonly tasksService: TasksService) {}

  userToDisplay = input<IDummyUser>();

  isFormOpen: boolean = false;

  // onToggleTaskAddForm() {
  //   this.isFormOpen = !this.isFormOpen;
  //   console.log('this.isFormOpen', this.isFormOpen);
  // }

  openTaskAddForm() {
    this.isFormOpen = true;
  }

  closeTaskAddForm() {
    this.isFormOpen = false;
  }

  // onStartAddTask
  onClickAdd(task: ITaskCreateDto) {
    // console.log('task', task);
    // const newTask: ITask = {
    //   id: `t${String(this.tasks.length + 1)}`,
    //   title: task.title,
    //   summary: task.summary,
    //   dueDate: task.dueDate,
    //   userId: this.userToDisplay()!.id,
    // };
    // this.tasks = [...this.tasks, newTask];
    // console.log('tasks', this.tasks);

    return this.tasksService.addTask(task, this.userToDisplay()!.id);
  }

  get getUserToDisplay(): IDummyUser {
    return this.userToDisplay() ?? ({} as IDummyUser);
  }

  get getUserToDisplayId(): string {
    return this.getUserToDisplay.id;
  }

  get selectedUserTasks() {
    // console.log('this.userToDisplay()!.id :', this.userToDisplay()!.id);
    // return this.tasks.filter((task) => task.userId === this.userToDisplay()!.id);

    return this.tasksService.getUserTasks(this.userToDisplay()!.id);
  }

  // onCompleteTask(id: string) {
  //   // console.log(1);
  //   // this.tasks = this.tasks.filter((task) => task.id !== id);

  //   return this.tasksService.deleteTask(id);
  // }

  // onDeleteTask(id: string) {
  //   // console.log(2);
  //   console.log(`Task with id: ${id}, is deleted.`);
  // }
}
