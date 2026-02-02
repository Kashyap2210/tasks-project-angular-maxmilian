import { Component, input } from '@angular/core';
import { IDummyUser } from '../../data/dummy-users';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  userToDisplay = input.required<IDummyUser>();
}
