import { Component, OnInit, Input } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  template: `
    <div class="back-button-container">
      <a routerLink="/" class="back-button">Back to Home</a>
    </div>
    <section class="users">
      <div class="user-container">
        <div class="user-record-container" *ngFor="let user of users">
          <div class="user-avatar-container">
            <a href="/users/{{user.id}}">
              <div class="user-avatar">Picture Placeholder</div>
            </a>
            <span>Position</span>
          </div>
          <div class="user-details-container">
            <h3><a href="/users/{{user.id}}"><span class="user-name">{{user.name}}</span></a></h3>
            <p>Email: {{user.email}}</p>
            <p>Phone Number: {{user.phone}}</p>
            <p>Website: {{user.website}}</p>
            <p>Company: {{user.company.name}}</p>
            <p><span class="catchphrase">"{{user.company.catchPhrase}}"</span></p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    ".back-button-container { margin: 20px 20px }",
    ".back-button { background-color: orange; border-radius: 10px; color: black; padding: 10px; text-decoration: none; transition-duration: 0.2s }",
    ".back-button:hover { background-color: #FFD280 }",
    ".user-container { background-color: white }",
    ".user-record-container:nth-child(odd) { background-color: #FFEDCC }",
    ".user-record-container { display: flex; padding: 20px}",
    ".user-avatar-container { text-align:center }",
    ".user-avatar-container a { color: black; text-decoration: none }",
    ".user-avatar { width: 100px; height: 100px; background-color: yellow }",
    ".user-details-container { line-height: 30px; margin-left: 20px }",
    ".user-name { text-decoration: underline; }",
    ".catchphrase { font-style: italic }"
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
