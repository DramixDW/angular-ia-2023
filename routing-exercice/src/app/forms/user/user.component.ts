import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  declare user: User
  constructor(private userService: UsersService, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadUserById(Number(id));
  }

  loadUserById(id: number) {
    this.userService.getById(id).subscribe(user => {
      this.user = user;
    }) 
  }

  submit() {
    this.userService.update(this.user, this.user.id!).subscribe(_ => {
      this.loadUserById(this.user.id!);
    })
  }
}
