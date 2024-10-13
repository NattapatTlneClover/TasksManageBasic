import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    NgFor,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-angular-app';

  //Declaration variable
  selectedUserId?: string;
  users = DUMMY_USERS;

  // Method selecteduser Use in html (want value in selectedUserId )
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  // Method received user.id from user component
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
