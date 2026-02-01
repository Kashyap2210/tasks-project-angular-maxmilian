import { Component, signal } from '@angular/core';
import { DUMMY_USERS, IDummyUser } from '../../data/dummy-users';

const randomIndex = () => Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // selectedUser: IDummyUser = DUMMY_USERS[randomIndex()];
  selectedUser = signal(DUMMY_USERS[randomIndex()]);
  // signal is like a container that contains the value of selectedUser
  // so when the value of selectedUser is changed Angular is notified that selectedUser is changed so need to make necessary changes, in places where that value needs to change

  get imagePath() {
    return this.selectedUser().avatar;
  }

  getSelectedUser(): IDummyUser {
    return this.selectedUser();
  }

  onSelectUser() {
    console.log('Clicked');
    // this.selectedUser = DUMMY_USERS[randomIndex()];
    this.selectedUser.set(DUMMY_USERS[randomIndex()]);
  }
}
