import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../data/dummy-users';
import { Header } from './header/header';
import { Tasks } from './tasks/tasks';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('first-angular-app');

  users = DUMMY_USERS;

  selectedUserId = signal<string | null>(null);

  onSelectUser(id: string) {
    console.log('Id of the selected user: ', id);
    this.selectedUserId.set(id);
  }

  selectedUser = computed(() => {
    return this.users.find((user) => user.id === this.selectedUserId());
  });
}
