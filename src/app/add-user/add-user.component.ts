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
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]+')
    ]),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      suite: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      zipcode: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')
      ]),
      lat: new FormControl('', [
        Validators.required,
        Validators.pattern('^-?[0-9]{2,3}\.[0-9]{4}$')
      ]),
      lng: new FormControl('', [
        Validators.required,
        Validators.pattern('^-?[0-9]{2,3}\.[0-9]{4}$')
      ])
    }),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[ ]*(?:[ ]?([0-9]{1,3}))?[-. (]*([0-9]{3})[-. )]*([0-9]{3})[-. ]*([0-9]{4})(?: *x([0-9]+))?[ ]*$')
    ]),
    website: new FormControl('', Validators.required),
    company: new FormGroup({
      name: new FormControl('', Validators.required),
      catchPhrase: new FormControl('', Validators.required),
      bs: new FormControl('', Validators.required)
    })
  });
  
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  get name() {
    return this.userForm.get('name');
  }

  get username() {
    return this.userForm.get('username');
  }

  get email() {
    return this.userForm.get('email');
  }

  get street() {
    return this.userForm.get('address.street');
  }

  get suite() {
    return this.userForm.get('address.suite');
  }

  get city() {
    return this.userForm.get('address.city');
  }

  get zipcode() {
    return this.userForm.get('address.zipcode');
  }

  get lat() {
    return this.userForm.get('address.lat');
  }

  get lng() {
    return this.userForm.get('address.lng');
  }

  get phone() {
    return this.userForm.get('phone');
  }

  get website() {
    return this.userForm.get('website');
  }

  get companyName() {
    return this.userForm.get('company.name');
  }

  get catchPhrase() {
    return this.userForm.get('company.catchPhrase');
  }

  get bs() {
    return this.userForm.get('company.bs');
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
