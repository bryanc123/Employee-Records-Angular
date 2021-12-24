import { Component, OnInit, Input } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';
import { trigger, transition, query, style, animate, stagger } from '@angular/animations';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  animations: [
    trigger('staggerList', [
      transition('void => *', [
        query('.user-record', [
          style({ opacity: 0 }),
          stagger(200, [
            animate(750, style({ opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
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
