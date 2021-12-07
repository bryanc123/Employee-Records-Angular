import { Component, OnInit, Input } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  error: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers(): void {
    this.userService
      .getUsers()
      .subscribe(
        users => (this.users = users),
        error => (this.error = error)
      );
  }
}
