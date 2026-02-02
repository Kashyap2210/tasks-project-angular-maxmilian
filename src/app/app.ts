import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from '../data/dummy-users';
import { Header } from './header/header';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [Header, User],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('first-angular-app');

  users = DUMMY_USERS;

  onSelectUser(id: string) {
    console.log('Id of the selected user: ', id);
  }
}
