import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AddTaskComponent } from './add-task/add-task';
import { TaskComponent } from './task/task';
import { TasksComponent } from './tasks';
import { TasksService } from './tasks.service';

@NgModule({
  declarations: [TaskComponent, TasksComponent, AddTaskComponent],
  exports: [TasksComponent],
  imports: [SharedModule, CommonModule, FormsModule],
  providers: [TasksService],
})
export class TasksModule {}
