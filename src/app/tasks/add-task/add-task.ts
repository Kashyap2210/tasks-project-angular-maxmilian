import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'add-task',
  imports: [],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  // since we dont want to send any output
  // we set the type as void
  @Output() cancel = new EventEmitter<void>();

  onClickCancel() {
    // emit is used to emit a default event that will notify template for something
    this.cancel.emit();
  }
}
