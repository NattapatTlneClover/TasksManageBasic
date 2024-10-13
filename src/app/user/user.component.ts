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
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //Input
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  //Output
  @Output() select = new EventEmitter();

  //Get Image
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  //sending selected user.id to app component
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
