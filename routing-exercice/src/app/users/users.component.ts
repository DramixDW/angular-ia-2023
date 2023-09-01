import { Component } from '@angular/core';
import { User, UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  declare users: User[];

  constructor(private userService: UsersService) {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    })  
  }
}
