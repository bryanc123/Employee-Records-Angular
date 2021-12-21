import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public success: boolean;
  public userAdded: string;
  public error: any;

  userForm: FormGroup;
  nameFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  contactFormGroup: FormGroup;
  companyFormGroup: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {

    this.userForm = this.formBuilder.group({
      formArray: this.formBuilder.array([
        this.formBuilder.group({
          name: ['', [
            Validators.required,
            Validators.pattern('^[a-zA-Z ]+')
          ]],
          username: ['', Validators.required],
          email: ['', Validators.email],
        }),
        this.formBuilder.group({
          street: ['', Validators.required],
          suite: ['', Validators.required],
          city: ['', Validators.required],
          zipcode: ['', [
            Validators.required,
            Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')
          ]],
          lat: ['', [
            Validators.required,
            Validators.pattern('^-?[0-9]{2,3}\.[0-9]{4}$')
          ]],
          lng: ['', [
            Validators.required,
            Validators.pattern('^-?[0-9]{2,3}\.[0-9]{4}$')
          ]]
        }),
        this.formBuilder.group({
          phone: ['', [
            Validators.required,
            Validators.pattern('^[ ]*(?:[ ]?([0-9]{1,3}))?[-. (]*([0-9]{3})[-. )]*([0-9]{3})[-. ]*([0-9]{4})(?: *x([0-9]+))?[ ]*$')
          ]],
          website: ['', Validators.required]
        }),
        this.formBuilder.group({
          name: ['', Validators.required],
          catchPhrase: ['', Validators.required],
          bs: ['', Validators.required]
        }),
        this.formBuilder.group({})
      ])
    });

    this.nameFormGroup = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]+')
      ]],
      username: ['', Validators.required],
      email: ['', Validators.email],
    });

    this.addressFormGroup = this.formBuilder.group({
      street: ['', Validators.required],
      suite: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')
      ]],
      lat: ['', [
        Validators.required,
        Validators.pattern('^-?[0-9]{2,3}\.[0-9]{4}$')
      ]],
      lng: ['', [
        Validators.required,
        Validators.pattern('^-?[0-9]{2,3}\.[0-9]{4}$')
      ]]
    });

    this.contactFormGroup = this.formBuilder.group({
      phone: ['', [
        Validators.required,
        Validators.pattern('^[ ]*(?:[ ]?([0-9]{1,3}))?[-. (]*([0-9]{3})[-. )]*([0-9]{3})[-. ]*([0-9]{4})(?: *x([0-9]+))?[ ]*$')
      ]],
      website: ['', Validators.required]
    });

    this.companyFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      catchPhrase: ['', Validators.required],
      bs: ['', Validators.required]
    });

  }

  get formArray() : AbstractControl | null {
    return this.userForm.get('formArray');
  }

  get name() {
    return this.formArray.get('0').value.name;
  }

  get username() {
    return this.formArray.get('0').value.username;
  }

  get email() {
    return this.formArray.get('0').value.email;
  }

  get street() {
    return this.formArray.get('1').value.street;
  }

  get suite() {
    return this.formArray.get('1').value.suite;
  }

  get city() {
    return this.formArray.get('1').value.city;
  }

  get zipcode() {
    return this.formArray.get('1').value.zipcode;
  }

  get lat() {
    return this.formArray.get('1').value.lat;
  }

  get lng() {
    return this.formArray.get('1').value.lng;
  }

  get phone() {
    return this.formArray.get('2').value.phone;
  }

  get website() {
    return this.formArray.get('2').value.website;
  }

  get companyName() {
    return this.formArray.get('3').value.name;
  }

  get catchPhrase() {
    return this.formArray.get('3').value.catchPhrase;
  }

  get bs() {
    return this.formArray.get('3').value.bs;
  }

  onSubmit() {
    this.userService.postUser({
      id: 11,
      name: this.name,
      username: this.username,
      email: this.email,
      address: {
        street: this.street,
        suite: this.suite,
        city: this.city,
        zipcode: this.zipcode,
        geo: {
          lat: this.lat,
          lng: this.lng
        }
      },
      phone: this.phone,
      website: this.website,
      company: {
        name: this.companyName,
        catchPhrase: this.catchPhrase,
        bs: this.bs
      }
    }).subscribe(
      user => {
        console.log(user);
        this.success = true;
        this.userAdded = this.username;
        this.userForm.reset();
        window.scrollTo(0, 0);
      },
      error => this.error = error
    );
  }

  closeSuccessMessage(): void {
    this.success = false;
  }

}
