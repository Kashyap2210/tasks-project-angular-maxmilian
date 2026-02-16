import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../data/dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: false,
})
export class AppComponent {
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
