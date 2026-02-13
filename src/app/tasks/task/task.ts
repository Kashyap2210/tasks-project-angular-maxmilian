import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../shared/card/card';
import { ITask } from './task.model';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: ITask;

  @Output() complete = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  onClickComplete() {
    this.complete.emit(this.task.id);
  }

  onClickDelete() {
    this.delete.emit(this.task.id);
  }
}
