import { Component } from '@angular/core';
import { DUMMY_USERS, IDummyUser } from '../../data/dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  selectedUser: IDummyUser = DUMMY_USERS[randomIndex];

  get getImagePath() {
    return this.selectedUser.avatar;
  }

  onSelectUser() {
    console.log('Clicked');
  }
}
