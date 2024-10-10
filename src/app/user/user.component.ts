import {
  Component,
  Input,
  input,
  computed,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

// interface User {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //Input
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  // @Input({required : true}) id!: string;
  // @Input({required : true}) avatar!:string;
  // @Input({required : true}) name!:string;

  //Output
  @Output() select = new EventEmitter();

  //output
  //select = output<string>();

  // //input signal
  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    //this.avatar.set(DUMMY_USERS[randomIndex]);
    this.select.emit(this.user.id);
  }
}
