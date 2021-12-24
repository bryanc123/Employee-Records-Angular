import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-user',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class UserDetailComponent implements OnInit {
  public userId;
  public user: User;
  public error: any;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.userId = id;
      this.getUser(id);
    });
  }

  private getUser(id: number): void {
    this.userService
      .getUser(id)
      .subscribe(
        user => (this.user = user),
        error => (this.error = error)
      );
  }
}
