import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  template: `
    <div class="back-button-container">
      <a routerLink="/users" class="back-button">Back</a>
    </div>
    <section class="users">
      <div class="user-container">
        <div class="user-record-container">
          <div class="user-avatar-container">
            <div class="user-avatar">Picture Placeholder</div>
            <span>Position</span>
          </div>
          <div class="user-details-container">
            <h3><span class="user-name">{{user.name}}</span></h3>
            <p>Email: {{user.email}}</p>
            <p>Address: {{user.address.street}}, {{user.address.suite}}, {{user.address.city}}</p>
            <p>Phone Number: {{user.phone}}</p>
            <p>Website: {{user.website}}</p>
            <p>Company: {{user.company.name}}</p>
            <p><span class="catchphrase">"{{user.company.catchPhrase}}"</span></p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent interdum condimentum mauris id condimentum.
            Nunc egestas sapien quis velit aliquet hendrerit.
            Integer vitae felis hendrerit, sollicitudin lacus vel, scelerisque dolor.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    ".users { margin-bottom: 300px }",
    ".user-container { background-color: white }",
    ".back-button-container { margin: 20px 20px }",
    ".back-button { background-color: orange; border-radius: 10px; color: black; padding: 10px; text-decoration: none }",
    ".back-button:hover { background-color: #FFD280 }",
    ".user-record-container { display: flex; padding: 20px }",
    ".user-avatar-container { text-align:center }",
    ".user-avatar { width: 100px; height: 100px; background-color: yellow }",
    ".user-details-container { line-height: 30px; margin-left: 20px }",
    ".user-name { text-decoration: underline; }",
    ".catchphrase { font-style: italic }"
  ]
})
export class UserDetailComponent implements OnInit {
  public userId;
  private user: User;
  private error: any;

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
