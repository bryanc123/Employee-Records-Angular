import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl(''),
    email: new FormControl('', Validators.email),
    address: new FormGroup({
      street: new FormControl(''),
      suite: new FormControl(''),
      city: new FormControl(''),
      zipcode: new FormControl(''),
      lat: new FormControl(''),
      lng: new FormControl('')
    }),
    phone: new FormControl(''),
    website: new FormControl(''),
    company: new FormGroup({
      name: new FormControl(''),
      catchPhrase: new FormControl(''),
      bs: new FormControl('')
    })
  });
  
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  get name() {
    return this.userForm.get('name');
  }

  get email() {
    return this.userForm.get('email');
  }

  onSubmit() {
    this.userService.postUser({
      id: 20,
      name: this.userForm.get('name').value,
      username: this.userForm.get('username').value,
      email: this.userForm.get('email').value,
      address: {
        street: this.userForm.get('address.street').value,
        suite: this.userForm.get('address.suite').value,
        city: this.userForm.get('address.city').value,
        zipcode: this.userForm.get('address.zipcode').value,
        geo: {
          lat: this.userForm.get('address.lat').value,
          lng: this.userForm.get('address.lng').value,
        }
      },
      phone: this.userForm.get('phone').value,
      website: this.userForm.get('website').value,
      company: this.userForm.get('company').value
    }).subscribe(user => {
      console.log(this.userForm.value);
      //this.userForm.reset();
    });
  }

}
