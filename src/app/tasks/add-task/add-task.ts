import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  // now we will inject the TasksService directly in it
  private taskService = inject(TasksService);
  @Input({ required: true }) userId!: string;

  // since we dont want to send any output
  // we set the type as void
  @Output() close = new EventEmitter<void>();
  // @Output() addTask = new EventEmitter<ITaskCreateDto>();
  // enteredTitle = ''; //<-- legacy
  // enteredSummary = ''; //<-- legacy
  // enteredDate = ''; //<-- legacy

  /**
   * In the legacy code marked above Angular used to track the changes in the values
   * in traditional way.
   *
   * When implementing signals ngModel will automatically internally adjust its
   * behaviour to match with the signals
   *
   * So whenever the user types into this input fields angular will internally change
   * this signals as and when the input changes
   */
  enteredTitle = signal('');
  enteredDate = signal('');
  enteredSummary = signal('');

  // An "element enhancement" that helps with extracting (or changing) user input values
  // Directives are like components as
  // they allow us to add extra functionalities to elements
  // Directives, unlike components, dont have templates!
  // Components are directives! Directives with templates
  // ngModel is a built-in directive provided by Angular that can be used with input or textArea
  onClickChangeTitle(input: string) {
    // this.enteredTitle() = input;
  }

  onClickCancel() {
    // emit is used to emit a default event that will notify template for something
    this.close.emit();
  }

  onClickSubmit() {
    // this.addTask.emit({
    //   title: this.enteredTitle(),
    //   summary: this.enteredSummary(),
    //   dueDate: this.enteredDate(),
    // });

    // now that we have learnt about dependency Injection
    // we can now use that service and inject it directly in this component
    // so that we no longer have to emit the data

    this.taskService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        dueDate: this.enteredDate(),
      },
      this.userId,
    );
    this.onClickCancel();
  }
}
