import { DatePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Card } from '../../shared/card/card';
import { TasksService } from '../tasks.service';
import { ITask } from './task.model';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: ITask;

  private taskService = inject(TasksService);

  // @Output() complete = new EventEmitter<string>();
  // @Output() delete = new EventEmitter<string>();

  onClickComplete() {
    this.taskService.deleteTask(this.task.id);
  }

  // onClickDelete() {
  //   this.delete.emit(this.task.id);
  // }
}
