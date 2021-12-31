import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import { UserService } from '../user.service';
import { User } from '../user';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AddUserComponent implements OnInit {

  @ViewChild('stepper') stepper;
  public success: boolean;
  public userAdded: string;
  public error: any;

  userForm: FormGroup;

  stepperOrientation: Observable<StepperOrientation>;
  
  constructor(
    private formBuilder: FormBuilder,
    private breakpointObserver: BreakpointObserver,
    private userService: UserService
  ) { 
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 1000px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  reset() {
    this.stepper.reset();
  }

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

    // this.nameFormGroup = this.formBuilder.group({
    //   name: ['', [
    //     Validators.required,
    //     Validators.pattern('^[a-zA-Z ]+')
    //   ]],
    //   username: ['', Validators.required],
    //   email: ['', Validators.email],
    // });

    // this.addressFormGroup = this.formBuilder.group({
    //   street: ['', Validators.required],
    //   suite: ['', Validators.required],
    //   city: ['', Validators.required],
    //   zipcode: ['', [
    //     Validators.required,
    //     Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')
    //   ]],
    //   lat: ['', [
    //     Validators.required,
    //     Validators.pattern('^-?[0-9]{2,3}\.[0-9]{4}$')
    //   ]],
    //   lng: ['', [
    //     Validators.required,
    //     Validators.pattern('^-?[0-9]{2,3}\.[0-9]{4}$')
    //   ]]
    // });

    // this.contactFormGroup = this.formBuilder.group({
    //   phone: ['', [
    //     Validators.required,
    //     Validators.pattern('^[ ]*(?:[ ]?([0-9]{1,3}))?[-. (]*([0-9]{3})[-. )]*([0-9]{3})[-. ]*([0-9]{4})(?: *x([0-9]+))?[ ]*$')
    //   ]],
    //   website: ['', Validators.required]
    // });

    // this.companyFormGroup = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   catchPhrase: ['', Validators.required],
    //   bs: ['', Validators.required]
    // });

  }

  get formArray() : AbstractControl | null {
    return this.userForm.get('formArray');
  }

  get nameControl() {
    return this.formArray.get('0').value;
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

  get nameFormGroup() {
    let formArray = this.userForm.controls.formArray as FormArray;
    return formArray.controls[0] as FormGroup;
  }

  get nameFormControl() {
    return this.nameFormGroup.controls.name;
  }

  get usernameFormControl() {
    return this.nameFormGroup.controls.username;
  }

  get emailFormControl() {
    return this.nameFormGroup.controls.email;
  }

  get addressFormGroup() {
    let formArray = this.userForm.controls.formArray as FormArray;
    return formArray.controls[1] as FormGroup;
  }

  get streetFormControl() {
    return this.addressFormGroup.controls.street;
  }

  get suiteFormControl() {
    return this.addressFormGroup.controls.suite;
  }

  get cityFormControl() {
    return this.addressFormGroup.controls.city;
  }

  get zipcodeFormControl() {
    return this.addressFormGroup.controls.zipcode;
  }

  get latFormControl() {
    return this.addressFormGroup.controls.lat;
  }

  get lngFormControl() {
    return this.addressFormGroup.controls.lng;
  }

  get contactFormGroup() {
    let formArray = this.userForm.controls.formArray as FormArray;
    return formArray.controls[2] as FormGroup;
  }

  get phoneFormControl() {
    return this.contactFormGroup.controls.phone;
  }

  get websiteFormControl() {
    return this.contactFormGroup.controls.website;
  }

  get companyFormGroup() {
    let formArray = this.userForm.controls.formArray as FormArray;
    return formArray.controls[3] as FormGroup;
  }

  get companyNameFormControl() {
    return this.companyFormGroup.controls.name;
  }

  get catchPhraseFormControl() {
    return this.companyFormGroup.controls.catchPhrase;
  }

  get bsFormControl() {
    return this.companyFormGroup.controls.bs;
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
        this.reset();
      },
      error => this.error = error
    );
  }

  closeSuccessMessage(): void {
    this.success = false;
  }

}
