import { Component, computed, EventEmitter, input, Output } from '@angular/core';
import { IDummyUser } from './user.model';

// const randomIndex = () => Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.html',
//   styleUrl: './user.css',
// })
// export class User {
//   // selectedUser: IDummyUser = DUMMY_USERS[randomIndex()];
//   selectedUser = signal(DUMMY_USERS[randomIndex()]);
//   // signal is like a container that contains the value of selectedUser
//   // so when the value of selectedUser is changed Angular is notified that selectedUser is changed so need to make necessary changes, in places where that value needs to change

//   imagePath = computed(() => this.selectedUser().avatar);

//   // get imagePath() {
//   //   return this.selectedUser().avatar;
//   // }

//   getSelectedUser(): IDummyUser {
//     return this.selectedUser();
//   }

//   onSelectUser() {
//     console.log('Clicked');
//     // // this.selectedUser = DUMMY_USERS[randomIndex()];
//     // this.selectedUser.set(DUMMY_USERS[randomIndex()]);
//   }
// }

// __________________________ Model 2 __________________________
//  Now currently my User component was hardcoded for a random user
// so if i need to reuse this component what would happen
// since randomNumber is calculated only once when the file is parsed
// we will only get 1 user in all the places where we have reused this component
// SO WE NEED TO MAKE OUR COMPONENT CONFIGURABLE
// SO to solve this issue we can define how we can pass input to the component
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // so we can define a decorator that can be added to properties as well
  // @Input({
  //   // here we can add configuration
  //   required: true,
  // })
  // avatar!: string;
  // @Input({
  //   required: true,
  // })
  // name!: string;

  // above approach is the traditional approach of the input
  // now we can also recieve an input from signal
  // below is the approach

  user = input.required<IDummyUser>();
  // this user is only readonly
  // this will only change if the value of the component from
  // where this is sent changes

  // always add type declaration in EventEmitter
  @Output() select = new EventEmitter<string>();

  // this does not generate a signal
  // this does generate an outputEmitter
  // (alias) output<string>(opts?: OutputOptions | undefined): OutputEmitterRef<string>
  // select = output<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();

  imagePath = computed(() => {
    return this.user().avatar;
  });

  // get imagePath() {
  //   return this.user().avatar;
  // }

  onSelectUser() {
    console.log('Clicked');
    // // this.selectedUser = DUMMY_USERS[randomIndex()];
    // this.selectedUser.set(DUMMY_USERS[randomIndex()]);

    this.select.emit(this.user().id);
  }
}
