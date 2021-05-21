import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  template: `
    <div class="wrapper">
      <div class="menu-item-container">
        <p>
          View employee records which include name, email, phone number, website, and company
        </p>
        <div class="button-container">
          <button routerLink="/users" class="user-records-button">User Records</button>
        </div>
      </div>
      <div class="menu-item-container">
        <p>
          Add an employee record to the database
        </p>
        <div class="button-container">
          <button routerLink="/add-user" class="add-user-button">Add User</button>
        </div>
      </div>
    </div>
  `,
  styles: [
    ".wrapper { display: flex; flex-direction: column; margin: auto; max-width: 800px; padding: 20px }",
    ".menu-item-container { background-color: #D8D8D8; border-left: 10px solid orange; margin-bottom: 40px; padding: 20px }",
    ".menu-item-container p { margin-bottom: 20px }",
    "button { background-color: orange; border: none; border-radius: 20px; font-size: 24px; font-weight: bold; padding: 20px; transition-duration: 0.2s",
    "button:hover { background-color: #FFD280; cursor: pointer }"
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
