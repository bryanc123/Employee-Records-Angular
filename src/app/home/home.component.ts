import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="button-container">
      <button routerLink="/users" class="user-records-button">User Records</button>
    </div>
  `,
  styles: [
    ".button-container { padding: 100px 20px; text-align: center }",
    ".user-records-button { background-color: orange; border: none; border-radius: 20px; font-size: 24px; font-weight: bold; padding: 20px",
    ".user-records-button:hover { background-color: #FFD280; cursor: pointer }"
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
