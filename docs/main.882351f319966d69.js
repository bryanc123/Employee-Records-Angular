"use strict";
(self["webpackChunkangular_users"] = self["webpackChunkangular_users"] || []).push([["main"],{

/***/ 9815:
/*!************************************************!*\
  !*** ./src/app/add-user/add-user.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddUserComponent": () => (/* binding */ AddUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user.service */ 2785);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 3365);










const _c0 = ["stepper"];
function AddUserComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddUserComponent_div_7_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.closeSuccessMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.userAdded, " successfully added to database! ");
} }
function AddUserComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Name");
} }
function AddUserComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddUserComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Address");
} }
function AddUserComponent_mat_error_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Street is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Suite is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "City is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "ZIP code is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "ZIP is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Latitude is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Latitude is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Longitude is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Longitude is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddUserComponent_ng_template_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Contact Information");
} }
function AddUserComponent_mat_error_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Phone number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Phone number is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Website is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddUserComponent_ng_template_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Company");
} }
function AddUserComponent_mat_error_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Company name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Catchphrase is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "BS is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddUserComponent_ng_template_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Press Submit to Finish");
} }
const _c1 = function () { return [0]; };
const _c2 = function () { return [1]; };
const _c3 = function () { return [2]; };
const _c4 = function () { return [3]; };
const _c5 = function () { return [4]; };
class AddUserComponent {
    constructor(formBuilder, userService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
    }
    reset() {
        this.stepper.reset();
    }
    ngOnInit() {
        this.userForm = this.formBuilder.group({
            formArray: this.formBuilder.array([
                this.formBuilder.group({
                    name: ['', [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[a-zA-Z ]+')
                        ]],
                    username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
                    email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email],
                }),
                this.formBuilder.group({
                    street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
                    suite: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
                    city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
                    zipcode: ['', [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')
                        ]],
                    lat: ['', [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^-?[0-9]{2,3}\.[0-9]{4}$')
                        ]],
                    lng: ['', [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^-?[0-9]{2,3}\.[0-9]{4}$')
                        ]]
                }),
                this.formBuilder.group({
                    phone: ['', [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[ ]*(?:[ ]?([0-9]{1,3}))?[-. (]*([0-9]{3})[-. )]*([0-9]{3})[-. ]*([0-9]{4})(?: *x([0-9]+))?[ ]*$')
                        ]],
                    website: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
                }),
                this.formBuilder.group({
                    name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
                    catchPhrase: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
                    bs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
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
    get formArray() {
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
        let formArray = this.userForm.controls.formArray;
        return formArray.controls[0];
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
        let formArray = this.userForm.controls.formArray;
        return formArray.controls[1];
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
        let formArray = this.userForm.controls.formArray;
        return formArray.controls[2];
    }
    get phoneFormControl() {
        return this.contactFormGroup.controls.phone;
    }
    get websiteFormControl() {
        return this.contactFormGroup.controls.website;
    }
    get companyFormGroup() {
        let formArray = this.userForm.controls.formArray;
        return formArray.controls[3];
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
        }).subscribe(user => {
            console.log(user);
            this.success = true;
            this.userAdded = this.username;
            this.userForm.reset();
            window.scrollTo(0, 0);
            this.reset();
        }, error => this.error = error);
    }
    closeSuccessMessage() {
        this.success = false;
    }
}
AddUserComponent.ɵfac = function AddUserComponent_Factory(t) { return new (t || AddUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
AddUserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddUserComponent, selectors: [["app-add-user"]], viewQuery: function AddUserComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
    } }, decls: 124, vars: 37, consts: [["routerLink", "/", 1, "back-button"], [1, "note"], [1, "success-container"], ["class", "success", 4, "ngIf"], [1, "formContainer"], [3, "formGroup", "ngSubmit"], ["orientation", "vertical", "formArrayName", "formArray", 3, "linear"], ["stepper", ""], ["formGroupName", "0", 3, "stepControl"], ["matStepLabel", ""], ["appearance", "fill"], ["matInput", "", "placeholder", "Name", "formControlName", "name", "required", ""], [4, "ngIf"], ["matInput", "", "placeholder", "Username", "formControlName", "username", "required", ""], ["matInput", "", "placeholder", "Email", "formControlName", "email", "required", ""], ["mat-button", "", "matStepperNext", "", "type", "button", 3, "disabled"], ["formGroupName", "1", 3, "stepControl"], ["matInput", "", "placeholder", "Street", "formControlName", "street", "required", ""], ["matInput", "", "placeholder", "Suite", "formControlName", "suite", "required", ""], ["matInput", "", "placeholder", "City", "formControlName", "city", "required", ""], ["matInput", "", "placeholder", "e.g. 90001", "formControlName", "zipcode", "required", ""], ["matInput", "", "placeholder", "e.g. 38.5816", "formControlName", "lat", "required", ""], ["matInput", "", "placeholder", "e.g. 121.4944", "formControlName", "lng", "required", ""], ["mat-button", "", "matStepperPrevious", "", "type", "button"], ["formGroupName", "2", 3, "stepControl"], ["matInput", "", "placeholder", "e.g. 8059341236", "formControlName", "phone", "required", ""], ["matInput", "", "placeholder", "Website", "formControlName", "website", "required", ""], ["formGroupName", "3", 3, "stepControl"], ["matInput", "", "placeholder", "Company Name", "formControlName", "name", "required", ""], ["matInput", "", "placeholder", "Catchphrase", "formControlName", "catchPhrase", "required", ""], ["matInput", "", "placeholder", "BS", "formControlName", "bs", "required", ""], ["formGroupName", "4", 3, "stepControl"], ["mat-button", "", "type", "button", 3, "click"], ["mat-button", "", "type", "submit"], [1, "success"], [1, "fa", "fa-times", 3, "click"]], template: function AddUserComponent_Template(rf, ctx) { if (rf & 1) {
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Back to Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " You cannot proceed through each section until all of the section's inputs are valid\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AddUserComponent_div_7_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Add Employee Record");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddUserComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-stepper", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AddUserComponent_ng_template_15_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AddUserComponent_mat_error_20_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AddUserComponent_mat_error_21_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AddUserComponent_mat_error_26_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, AddUserComponent_mat_error_31_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-step", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, AddUserComponent_ng_template_36_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, AddUserComponent_mat_error_41_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Suite");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, AddUserComponent_mat_error_46_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, AddUserComponent_mat_error_51_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "ZIP Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, AddUserComponent_mat_error_56_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, AddUserComponent_mat_error_57_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Latitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, AddUserComponent_mat_error_62_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, AddUserComponent_mat_error_63_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Longitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, AddUserComponent_mat_error_68_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, AddUserComponent_mat_error_69_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "mat-step", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, AddUserComponent_ng_template_76_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, AddUserComponent_mat_error_81_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, AddUserComponent_mat_error_82_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, AddUserComponent_mat_error_87_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "mat-step", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, AddUserComponent_ng_template_94_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, AddUserComponent_mat_error_99_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Catchphrase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](104, AddUserComponent_mat_error_104_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "BS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](109, AddUserComponent_mat_error_109_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "mat-step", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](116, AddUserComponent_ng_template_116_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddUserComponent_Template_button_click_120_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13); return _r1.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("linear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.formArray.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nameFormControl.errors == null ? null : ctx.nameFormControl.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nameFormControl.errors == null ? null : ctx.nameFormControl.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.usernameFormControl.errors == null ? null : ctx.usernameFormControl.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.emailFormControl.errors == null ? null : ctx.emailFormControl.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.nameFormGroup.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.formArray.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](33, _c2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.streetFormControl.errors == null ? null : ctx.streetFormControl.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.suiteFormControl.errors == null ? null : ctx.suiteFormControl.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cityFormControl.errors == null ? null : ctx.cityFormControl.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.zipcodeFormControl.errors == null ? null : ctx.zipcodeFormControl.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.zipcodeFormControl.errors == null ? null : ctx.zipcodeFormControl.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.latFormControl.errors == null ? null : ctx.latFormControl.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.latFormControl.errors == null ? null : ctx.latFormControl.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lngFormControl.errors == null ? null : ctx.lngFormControl.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lngFormControl.errors == null ? null : ctx.lngFormControl.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.addressFormGroup.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.formArray.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](34, _c3)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.phoneFormControl.errors == null ? null : ctx.phoneFormControl.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.phoneFormControl.errors == null ? null : ctx.phoneFormControl.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.websiteFormControl.errors == null ? null : ctx.websiteFormControl.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.contactFormGroup.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.formArray.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](35, _c4)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.companyNameFormControl.errors == null ? null : ctx.companyNameFormControl.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.catchPhraseFormControl.errors == null ? null : ctx.catchPhraseFormControl.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bsFormControl.errors == null ? null : ctx.bsFormControl.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.companyFormGroup.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.formArray.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](36, _c5)));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__.MatStepper, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__.MatStep, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__.MatStepLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__.MatStepperNext, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__.MatStepperPrevious, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError], styles: ["h2[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n}\n\nh3[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    text-decoration: underline;\n}\n\ninput[type=\"text\"][_ngcontent-%COMP%] {\n    font-size: 1em;\n    margin-bottom: 15px;\n    width: 250px;\n}\n\np[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n}\n\nul[_ngcontent-%COMP%] {\n    list-style-type: none;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n}\n\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: orange;\n    border-radius: 10px;\n    color: black;\n    display: block;\n    font-size: 1rem;\n    margin-bottom: 10px;\n    outline: none;\n    padding: 10px;\n    text-decoration: none;\n    transition-duration: 0.2s;\n}\n\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background-color: #FFD280;\n    cursor: pointer;\n}\n\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n    background-color: gray;\n    color: white;\n    cursor: default;\n}\n\n\n\n.back-button[_ngcontent-%COMP%] {\n    background-color: orange;\n    border-radius: 10px;\n    color: black;\n    display: inline-block;\n    margin: 20px;\n    padding: 10px;\n    text-decoration: none;\n    transition-duration: 0.2s;\n}\n\n.back-button[_ngcontent-%COMP%]:hover {\n    background-color: #FFD280;\n    cursor: pointer;\n}\n\n\n\n.note[_ngcontent-%COMP%] {\n    padding: 0 20px;\n    text-align: center;\n}\n\n\n\n.success-container[_ngcontent-%COMP%] {\n    padding: 0 20px;\n    text-align: center;\n}\n\n.success[_ngcontent-%COMP%] {\n    background-color: #F1F8E9;\n    border-left: 5px solid green;\n    display: flex;\n    justify-content: space-between;\n    margin: 20px auto;\n    max-width: 500px;\n    padding: 20px;\n}\n\n.fa-times[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n\n\n.formContainer[_ngcontent-%COMP%] {\n    background:white;\n    border: 2px solid #D8D8D8;\n    margin: 20px auto;\n    padding: 20px;\n    width: 90%;\n}\n\n.formGroup[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n}\n\n.userForm[_ngcontent-%COMP%] {\n    display:flex;\n    flex-direction: column;\n}\n\n.invalid-input[_ngcontent-%COMP%] {\n    border: 1px solid red;\n}\n\n.alert[_ngcontent-%COMP%] {\n    color: red;\n    margin-bottom: 10px;\n}\n\n.submit-button[_ngcontent-%COMP%] {\n    background-color: orange;\n    border: none;\n    border-radius: 20px;\n    font-size: 24px;\n    font-weight: bold;\n    margin-bottom: 20px;\n    padding: 10px 20px;\n}\n\n.submit-button[_ngcontent-%COMP%]:hover {\n    background-color: #FFD280;\n    cursor: pointer;\n}\n\n.submit-button[_ngcontent-%COMP%]:disabled {\n    background-color: #C8C8C8;\n    cursor: default;\n}\n\n@media only screen and (min-width: 500px) {\n    .formContainer[_ngcontent-%COMP%] {\n        width: 320px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7SUFDYixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUEsZ0JBQWdCOztBQUVoQjtJQUNJLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQSxTQUFTOztBQUVUO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQSxvQkFBb0I7O0FBRXBCO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBLFNBQVM7O0FBRVQ7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoiYWRkLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5oMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgd2lkdGg6IDI1MHB4O1xufVxuXG5wIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxudWwgbGkge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmZvcm0gYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuZm9ybSBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkQyODA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuZm9ybSBidXR0b246ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLyogQmFjayBCdXR0b24gKi9cblxuLmJhY2stYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuLmJhY2stYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEMjgwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogTm90ZSAqL1xuXG4ubm90ZSB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogU3VjY2VzcyBNZXNzYWdlICovXG5cbi5zdWNjZXNzLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUY4RTk7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBncmVlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5mYS10aW1lcyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBGb3JtICovXG5cbi5mb3JtQ29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOndoaXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNEOEQ4RDg7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB3aWR0aDogOTAlO1xufVxuXG4uZm9ybUdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udXNlckZvcm0ge1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaW52YWxpZC1pbnB1dCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4uYWxlcnQge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG4uc3VibWl0LWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDI4MDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc3VibWl0LWJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M4QzhDODtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgICAuZm9ybUNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAzMjBweDtcbiAgICB9XG59Il19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('fadeIn', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)(500, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 1 }))
                ])
            ])
        ] } });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-user/add-user.component */ 9815);
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-list/user-list.component */ 5685);
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-detail/user-detail.component */ 7530);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article-list/article-list.component */ 3730);
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article/article.component */ 4610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









const routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, pathMatch: "full" },
    { path: "add-user", component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_0__.AddUserComponent },
    { path: "users", component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_1__.UserListComponent },
    { path: "users/:id", component: _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_2__.UserDetailComponent },
    { path: "users/:id/articles", component: _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_4__.ArticleListComponent },
    { path: "users/:id/articles/:articleId", component: _article_article_component__WEBPACK_IMPORTED_MODULE_5__.ArticleComponent },
    { path: "**", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 970);




class AppComponent {
    constructor() {
        this.title = 'Employee Records';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-list/user-list.component */ 5685);
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-detail/user-detail.component */ 7530);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-user/add-user.component */ 9815);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./article-list/article-list.component */ 3730);
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./article/article.component */ 4610);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _logging_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logging-interceptor */ 8825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS, useClass: _logging_interceptor__WEBPACK_IMPORTED_MODULE_10__.LoggingInterceptor, multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__.MatStepperModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__.UserListComponent,
        _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_3__.UserDetailComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent,
        _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__.AddUserComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent,
        _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_8__.ArticleListComponent,
        _article_article_component__WEBPACK_IMPORTED_MODULE_9__.ArticleComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__.MatStepperModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule] }); })();


/***/ }),

/***/ 3730:
/*!********************************************************!*\
  !*** ./src/app/article-list/article-list.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleListComponent": () => (/* binding */ ArticleListComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user.service */ 2785);
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article.service */ 8909);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);






function ArticleListComponent_div_8_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 17);
} }
function ArticleListComponent_div_8_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 18);
} }
function ArticleListComponent_div_8_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Laptop and DJ Controller (Photo by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Marko Milivojevic");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ArticleListComponent_div_8_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Charging phone (");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Source");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ArticleListComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ArticleListComponent_div_8_img_2_Template, 1, 0, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ArticleListComponent_div_8_img_3_Template, 1, 0, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ArticleListComponent_div_8_p_4_Template, 5, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ArticleListComponent_div_8_p_5_Template, 5, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Posted by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " on 12/10/2021 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " ...Read More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("routerLink", "/users/", ctx_r0.user.id, "/articles/", article_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r2 % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r2 % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r2 % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r2 % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("routerLink", "/users/", ctx_r0.user.id, "/articles/", article_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 14, article_r1.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/users/", ctx_r0.user.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.user.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", article_r1.body, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("routerLink", "/users/", ctx_r0.user.id, "/articles/", article_r1.id, "");
} }
class ArticleListComponent {
    constructor(userService, articleService, route, router) {
        this.userService = userService;
        this.articleService = articleService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            let id = parseInt(params.get('id'));
            this.userId = id;
            this.getUser(id);
            this.getArticles(id);
        });
    }
    getUser(id) {
        this.userService
            .getUser(id)
            .subscribe(user => (this.user = user), error => (this.error = error));
    }
    getArticles(id) {
        this.articleService
            .getArticles(id)
            .subscribe(articles => (this.articles = articles), error => (this.error = error));
    }
}
ArticleListComponent.ɵfac = function ArticleListComponent_Factory(t) { return new (t || ArticleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_article_service__WEBPACK_IMPORTED_MODULE_1__.ArticleService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
ArticleListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ArticleListComponent, selectors: [["app-article-list"]], decls: 9, vars: 4, consts: [[1, "articles"], ["routerLink", "/users", 1, "back-button"], [1, "articles__heading"], [3, "routerLink"], [1, "articles__container"], ["class", "article", 4, "ngFor", "ngForOf"], [1, "article"], ["src", "assets/images/computer.jpg", "class", "article__image", 4, "ngIf"], ["src", "assets/images/phone.jpg", "class", "article__image", 4, "ngIf"], ["class", "article__image-caption", 4, "ngIf"], [1, "article__title"], [1, "article__author"], [1, "article__profile-image"], [1, "far", "fa-user-circle"], [1, "article__byline", 2, "margin-left", "10px"], [1, "article__profile-link", 3, "routerLink"], [1, "article__read-more-link", 3, "routerLink"], ["src", "assets/images/computer.jpg", 1, "article__image"], ["src", "assets/images/phone.jpg", 1, "article__image"], [1, "article__image-caption"], ["href", "https://pixnio.com/author/milim84"], ["href", "https://pixnio.com/objects/electronics-devices/iphone-pictures/mobile-phone-computer-screen-technology-telephone-wireless-portable-business"]], template: function ArticleListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Back to Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Showing Articles by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ArticleListComponent_div_8_Template, 22, 16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/users/", ctx.user.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@staggerList", ctx.articles.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.articles);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe], styles: [".back-button[_ngcontent-%COMP%] {\n    background-color: orange;\n    border-radius: 10px;\n    color:black;\n    display: inline-block;\n    margin-bottom: 20px;\n    padding: 10px;\n    text-decoration: none;\n    transition-duration: 0.2s;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n    background-color: #FFD280;\n}\n\n.articles[_ngcontent-%COMP%] {\n    background-color: #F0F0F0;\n    padding: 20px;\n}\n.articles__heading[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    margin-bottom: 20px;\n}\n.articles__heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: black;\n    text-decoration: none;\n}\n.articles__heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: rgba(0, 0, 0, 0.6);\n}\n.article[_ngcontent-%COMP%] {\n    background-color: white;\n    margin-bottom: 20px;\n    padding: 10px;\n}\n.article__image[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.article__image-caption[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-bottom: 20px;\n}\n.article__title[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n}\n.article__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: black;\n    text-decoration: none;\n}\n.article__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: rgba(0, 0, 0, 0.6);\n}\n.article__author[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    margin-bottom: 20px;\n}\n.article__profile-image[_ngcontent-%COMP%] {\n    align-items: center;\n    background-color:#ACE1AF;\n    border-radius: 50%;\n    display: flex;\n    font-size: 44px;\n    height: 50px;\n    justify-content: center;\n    width: 50px;\n}\n.article__byline[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    font-style: italic;\n    margin-bottom: 10px;\n}\n.article__profile-link[_ngcontent-%COMP%] {\n    color: black;\n    text-decoration: none;\n}\n.article__profile-link[_ngcontent-%COMP%]:hover {\n    color: rgba(0, 0, 0, 0.6);\n}\n.article__read-more-link[_ngcontent-%COMP%] {\n    color: black;\n    font-weight: bold;\n    text-decoration: none;\n}\n.article__read-more-link[_ngcontent-%COMP%]:hover {\n    color: rgba(0, 0, 0, 0.6);\n}\n@media only screen and (min-width: 500px) {\n    .articles__heading[_ngcontent-%COMP%] {\n        font-size: 1.2rem;\n    }\n}\n@media only screen and (min-width: 600px) {\n    .articles__container[_ngcontent-%COMP%] {\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n    }\n    .article[_ngcontent-%COMP%] {\n        max-width: 45vw;\n    }\n}\n@media only screen and (min-width: 1000px) {\n    .article[_ngcontent-%COMP%] {\n        max-width: 47vw;\n    }\n\n    .article__byline[_ngcontent-%COMP%] {\n        font-size: 16px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUEsYUFBYTtBQUViO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IscUNBQXFDO0lBQ3pDO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJhcnRpY2xlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbn1cbi5iYWNrLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDI4MDtcbn1cblxuLyogQXJ0aWNsZXMgKi9cblxuLmFydGljbGVzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5hcnRpY2xlc19faGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5hcnRpY2xlc19faGVhZGluZyBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmFydGljbGVzX19oZWFkaW5nIGE6aG92ZXIge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi5hcnRpY2xlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5hcnRpY2xlX19pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5hcnRpY2xlX19pbWFnZS1jYXB0aW9uIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmFydGljbGVfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmFydGljbGVfX3RpdGxlIGEge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYXJ0aWNsZV9fdGl0bGUgYTpob3ZlciB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLmFydGljbGVfX2F1dGhvciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5hcnRpY2xlX19wcm9maWxlLWltYWdlIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6I0FDRTFBRjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDQ0cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4uYXJ0aWNsZV9fYnlsaW5lIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmFydGljbGVfX3Byb2ZpbGUtbGluayB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5hcnRpY2xlX19wcm9maWxlLWxpbms6aG92ZXIge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi5hcnRpY2xlX19yZWFkLW1vcmUtbGluayB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5hcnRpY2xlX19yZWFkLW1vcmUtbGluazpob3ZlciB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAgIC5hcnRpY2xlc19faGVhZGluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIC5hcnRpY2xlc19fY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICB9XG4gICAgLmFydGljbGUge1xuICAgICAgICBtYXgtd2lkdGg6IDQ1dnc7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAgIC5hcnRpY2xlIHtcbiAgICAgICAgbWF4LXdpZHRoOiA0N3Z3O1xuICAgIH1cblxuICAgIC5hcnRpY2xlX19ieWxpbmUge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxufSJdfQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('staggerList', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.query)('.article', [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ opacity: 0 }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.stagger)(200, [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)(750, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ opacity: 1 }))
                        ])
                    ])
                ])
            ])
        ] } });


/***/ }),

/***/ 8909:
/*!************************************!*\
  !*** ./src/app/article.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleService": () => (/* binding */ ArticleService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);




class ArticleService {
    constructor(http) {
        this.http = http;
        this.articlesUrl = 'https://jsonplaceholder.typicode.com/posts';
    }
    getArticles(userId) {
        return this.http
            .get(this.articlesUrl)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(articles => articles.filter(article => article.userId === userId)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    getArticle(id, articleId) {
        return this.getArticles(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(articles => articles.find(article => article.id === articleId)));
    }
    postArticle(article) {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.articlesUrl, article)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    handleError(res) {
        console.error(res.error || res.body.error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(res.error || 'Server error');
    }
}
ArticleService.ɵfac = function ArticleService_Factory(t) { return new (t || ArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
ArticleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ArticleService, factory: ArticleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4610:
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleComponent": () => (/* binding */ ArticleComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user.service */ 2785);
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article.service */ 8909);
/* harmony import */ var _comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comment.service */ 7224);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);







function ArticleComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 18);
} }
function ArticleComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Photo by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Marko Milivojevic");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ArticleComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 21);
} }
function ArticleComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Link to Image Source");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ArticleComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Posted on 12/10/2021 at 10:30PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", comment_r5.email, " says:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](comment_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](comment_r5.body);
} }
class ArticleComponent {
    constructor(userService, articleService, commentService, route, router) {
        this.userService = userService;
        this.articleService = articleService;
        this.commentService = commentService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            let id = parseInt(params.get('id'));
            let articleId = parseInt(params.get('articleId'));
            this.userId = id;
            this.articleId = articleId;
            this.getUser(id);
            this.getArticle(id, articleId);
            this.getComments(articleId);
        });
    }
    getUser(id) {
        this.userService
            .getUser(id)
            .subscribe(user => (this.user = user), error => (this.error = error));
    }
    getArticle(id, articleId) {
        this.articleService
            .getArticle(id, articleId)
            .subscribe(article => (this.article = article), error => (this.error = error));
    }
    getComments(articleId) {
        this.commentService
            .getComments(articleId)
            .subscribe(comments => (this.comments = comments), error => (this.error = error));
    }
}
ArticleComponent.ɵfac = function ArticleComponent_Factory(t) { return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_article_service__WEBPACK_IMPORTED_MODULE_1__.ArticleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_comment_service__WEBPACK_IMPORTED_MODULE_2__.CommentService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
ArticleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ArticleComponent, selectors: [["app-article"]], decls: 36, vars: 14, consts: [[1, "article"], [1, "back-button", 3, "routerLink"], [1, "article__container"], ["src", "assets/images/computer.jpg", "class", "article__image", 4, "ngIf"], ["class", "article__image-caption", 4, "ngIf"], ["src", "assets/images/phone.jpg", "class", "article__image", 4, "ngIf"], [1, "article__heading"], [1, "article__author"], [1, "article__profile-image"], [1, "far", "fa-user-circle"], [1, "article__byline", 2, "margin-left", "10px"], [1, "article__profile-link", 3, "routerLink"], [1, "article__body"], [1, "comments"], [1, "comments__container"], [1, "comments__heading"], [1, "comments__body"], ["class", "comment", 4, "ngFor", "ngForOf"], ["src", "assets/images/computer.jpg", 1, "article__image"], [1, "article__image-caption"], ["href", "https://pixnio.com/author/milim84"], ["src", "assets/images/phone.jpg", 1, "article__image"], ["href", "https://pixnio.com/objects/electronics-devices/iphone-pictures/mobile-phone-computer-screen-technology-telephone-wireless-portable-business"], [1, "comment"], [1, "comment__heading", 2, "align-items", "center", "display", "flex"], [1, "comment__profile-image"], [1, "comment__email"], [1, "comment__name"], [1, "comment__body"], [1, "comment__datetime"]], template: function ArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Back to Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ArticleComponent_img_4_Template, 1, 0, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ArticleComponent_p_5_Template, 4, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ArticleComponent_img_6_Template, 1, 0, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ArticleComponent_p_7_Template, 3, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Posted by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " on 12/10/2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum blanditiis voluptate nostrum? Corrupti quasi officiis obcaecati at reiciendis voluptatibus, eligendi debitis excepturi tenetur quidem labore. Reiciendis officiis illum possimus explicabo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque unde earum rerum quia vero omnis quos consequuntur necessitatibus! Possimus beatae omnis optio reprehenderit molestiae commodi cum mollitia incidunt non perspiciatis, illo voluptatibus distinctio modi earum praesentium molestias sapiente ducimus deserunt iste recusandae eos itaque illum neque ea? Distinctio, repudiandae. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quidem! Illum voluptate nostrum eveniet officiis consequatur inventore mollitia iste iusto pariatur hic sequi debitis placeat cumque, vitae dolor sit iure corporis accusantium sint velit ipsum eos doloribus! Accusamus possimus iste ipsa id animi enim neque odio aperiam laborum ducimus quisquam iusto quos architecto assumenda optio repudiandae laudantium nisi debitis officia similique reiciendis perspiciatis, repellat a fugiat. Magnam porro dolor animi delectus quia ad perferendis sapiente, mollitia maxime tenetur iure illo? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " Lorem ipsum dolor sit amet consectetur adipisicing elit. At, autem! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, ArticleComponent_div_35_Template, 12, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/users/", ctx.user.id, "/articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.articleId % 2 === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.articleId % 2 === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.articleId % 2 === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.articleId % 2 === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 12, ctx.article.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/users/", ctx.user.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.user.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.article.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@staggerList", ctx.comments.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.comments);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe], styles: [".back-button[_ngcontent-%COMP%] {\n    background-color: orange;\n    border-radius: 10px;\n    color:black;\n    display: inline-block;\n    margin-bottom: 20px;\n    padding: 10px;\n    text-decoration: none;\n    transition-duration: 0.2s;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n    background-color: #FFD280;\n}\n\n.article[_ngcontent-%COMP%] {\n    background-color: #F0F0F0;\n    padding: 20px;\n}\n.article__container[_ngcontent-%COMP%] {\n    background-color: white;\n    padding: 20px;\n}\n.article__image[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.article__image-caption[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n}\n.article__heading[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n}\n.article__author[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    margin-bottom: 20px;\n}\n.article__profile-image[_ngcontent-%COMP%] {\n    align-items: center;\n    background-color:#ACE1AF;\n    border-radius: 50%;\n    display: flex;\n    font-size: 44px;\n    height: 50px;\n    justify-content: center;\n    width: 50px;\n}\n.article__byline[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    font-style: italic;\n    margin-bottom: 10px;\n}\n.article__profile-link[_ngcontent-%COMP%] {\n    color: black;\n    text-decoration: none;\n}\n.article__profile-link[_ngcontent-%COMP%]:hover {\n    color: rgba(0, 0, 0, 0.6);\n}\n.article__body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n}\n\n.comments[_ngcontent-%COMP%] {\n    background-color: #F0F0F0;\n    padding: 20px;\n}\n.comments__container[_ngcontent-%COMP%] {\n    background-color: white;\n    padding: 20px;\n}\n.comment[_ngcontent-%COMP%] {\n    padding: 20px 0;\n}\n.comment[_ngcontent-%COMP%]:not(:last-child) {\n    border-bottom: 1px solid black;\n}\n.comment__heading[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n}\n.comment__profile-image[_ngcontent-%COMP%] {\n    align-items: center;\n    background-color:#ACE1AF;\n    border-radius: 50%;\n    display: flex;\n    font-size: 44px;\n    height: 50px;\n    justify-content: center;\n    width: 50px;\n}\n.comment__email[_ngcontent-%COMP%] {\n    margin-left: 10px;\n}\n.comment__name[_ngcontent-%COMP%] {\n    font-weight: bold;\n    margin-bottom: 10px;\n}\n.comment__datetime[_ngcontent-%COMP%] {\n    font-style: italic;\n    margin-top: 20px;\n}\n@media only screen and (min-width: 800px) {\n    .article__container[_ngcontent-%COMP%] {\n        max-width: 700px;\n    }\n\n    .comments__container[_ngcontent-%COMP%] {\n        max-width: 700px;\n    }\n}\n@media only screen and (min-width: 1000px) {\n    .article__byline[_ngcontent-%COMP%] {\n        font-size: 16px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBLFlBQVk7QUFFWjtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBLGFBQWE7QUFFYjtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoiYXJ0aWNsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2stYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjpibGFjaztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuLmJhY2stYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEMjgwO1xufVxuXG4vKiBBcnRpY2xlICovXG5cbi5hcnRpY2xlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5hcnRpY2xlX19jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5hcnRpY2xlX19pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5hcnRpY2xlX19pbWFnZS1jYXB0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYXJ0aWNsZV9faGVhZGluZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmFydGljbGVfX2F1dGhvciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5hcnRpY2xlX19wcm9maWxlLWltYWdlIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6I0FDRTFBRjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDQ0cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4uYXJ0aWNsZV9fYnlsaW5lIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmFydGljbGVfX3Byb2ZpbGUtbGluayB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5hcnRpY2xlX19wcm9maWxlLWxpbms6aG92ZXIge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi5hcnRpY2xlX19ib2R5IHAge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi8qIENvbW1lbnRzICovXG5cbi5jb21tZW50cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uY29tbWVudHNfX2NvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmNvbW1lbnQge1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbn1cbi5jb21tZW50Om5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmNvbW1lbnRfX2hlYWRpbmcge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jb21tZW50X19wcm9maWxlLWltYWdlIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6I0FDRTFBRjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDQ0cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4uY29tbWVudF9fZW1haWwge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY29tbWVudF9fbmFtZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNvbW1lbnRfX2RhdGV0aW1lIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAgIC5hcnRpY2xlX19jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIH1cblxuICAgIC5jb21tZW50c19fY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gICAgLmFydGljbGVfX2J5bGluZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG59Il19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('fadeIn', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({ opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)(500, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({ opacity: 1 }))
                ])
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('staggerList', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.query)('.comment', [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({ opacity: 0 }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.stagger)(200, [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)(750, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({ opacity: 1 }))
                        ])
                    ])
                ])
            ])
        ] } });


/***/ }),

/***/ 7224:
/*!************************************!*\
  !*** ./src/app/comment.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentService": () => (/* binding */ CommentService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);




class CommentService {
    constructor(http) {
        this.http = http;
        this.commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
    }
    getComments(articleId) {
        return this.http
            .get(this.commentsUrl)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(comments => comments.filter(comment => comment.postId === articleId)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    handleError(res) {
        console.error(res.error || res.body.error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(res.error || 'Server error');
    }
}
CommentService.ɵfac = function CommentService_Factory(t) { return new (t || CommentService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
CommentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CommentService, factory: CommentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 34, vars: 0, consts: [[1, "footer"], [1, "footer-container"], [1, "footer-section"], [1, "footer-section-heading"], ["href", "https://github.com/bryanc123/Employee-Records-Angular"], ["href", "https://bryanc123.github.io/Personal-Website/"], ["href", "https://bryanc123.github.io/Mobile-First-Design/"], ["href", "https://bryanc123.github.io/Plain-JavaScript-Quiz/"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Source Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Personal Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Other Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mobile First Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Quiz App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, ": 1-805-608-0066");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, ": cayanan.bryanau@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n    background-color: orange;\n    flex-shrink: 0;\n    padding: 20px;\n}\n\n.footer-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    max-width: 900px;\n}\n\n.footer-section[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n}\n\n.footer-section-heading[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n}\n\n.footer-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style: none;\n}\n\n.footer-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n}\n\n.footer-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: black;\n    text-decoration: none;\n}\n\n.footer-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: rgba(0, 0, 0, 0.8);\n}\n\n@media screen and (min-width: 600px) {\n    .footer-container[_ngcontent-%COMP%] {\n        flex-direction: row;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmZvb3Rlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWF4LXdpZHRoOiA5MDBweDtcbn1cblxuLmZvb3Rlci1zZWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZm9vdGVyLXNlY3Rpb24taGVhZGluZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZvb3Rlci1zZWN0aW9uIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmZvb3Rlci1zZWN0aW9uIHVsIGxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmZvb3Rlci1zZWN0aW9uIHVsIGxpIGEge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZm9vdGVyLXNlY3Rpb24gdWwgbGkgYTpob3ZlciB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAuZm9vdGVyLWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class HeaderComponent {
    constructor() {
        this.title = "Employee Database";
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 30, vars: 1, consts: [[1, "header"], [1, "header__title"], ["routerLink", "/"], [1, "fas", "fa-database"], [1, "navigation-menu"], ["routerLink", "/users"], ["routerLink", "/add-user"], ["href", "javascript:void(0);", "onClick", "toggleMenu()", 1, "hamburger-menu-icon"], [1, "fa", "fa-bars", "fa-2x"], [1, "fa", "fa-times", "fa-2x"], [1, "hamburger-menu"], [1, "introductory-text-container"], ["href", "https://jsonplaceholder.typicode.com"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Add User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " This application pulls data from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "JSONPlaceholder API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');\n\n.header[_ngcontent-%COMP%] {\n    align-items: center;\n    background: linear-gradient(orange 10%, 80%, #FFD280 100%);\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    padding: 20px;\n}\n\n.fa-database[_ngcontent-%COMP%] {\n    margin-right: 10px;\n}\n\n.header__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: black;\n    font-family: Ubuntu;\n    font-size: 1.8rem;\n    text-decoration: none;\n}\n\n.navigation-menu[_ngcontent-%COMP%] {\n    display: flex;\n    justify-self: end;\n    list-style: none;\n}\n\n.navigation-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: black;\n    padding: 10px 30px;\n    text-decoration: none;\n    transition-duration: 0.2s;\n}\n\n.navigation-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child)   a[_ngcontent-%COMP%] {\n    border-right: 1px solid black;\n}\n\n.navigation-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: #FFD280;\n    cursor: pointer;\n}\n\n.hamburger-menu-icon[_ngcontent-%COMP%] {\n    color: black;\n    display: none;\n    flex-grow: 1;\n    text-align: right;\n    text-decoration: none;\n}\n\n.fa-times[_ngcontent-%COMP%] {\n    display: none;\n}\n\n\n\n.hamburger-menu[_ngcontent-%COMP%] {\n    background-color: orange;\n    display: none;\n    flex-direction: column;\n}\n\n.hamburger-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #FFD280;\n    color: black;\n    padding: 10px 20px;\n    text-decoration: none;\n    transition-duration: 0.2s;\n}\n\n.hamburger-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: #FFD280;\n}\n\n.introductory-text-container[_ngcontent-%COMP%] {\n    background-color: yellow;\n    padding: 20px;\n}\n\n@media screen and (max-width: 600px){\n\n    .header__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 1.2rem;\n    }\n}\n\n@media screen and (max-width: 800px){\n\n    .navigation-menu[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n    .hamburger-menu-icon[_ngcontent-%COMP%] {\n        display: block;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9GQUFvRjs7QUFFcEY7SUFDSSxtQkFBbUI7SUFDbkIsMERBQTBEO0lBQzFELGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEsbUJBQW1COztBQUVuQjtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0FBQ2pCOztBQUVBOztJQUVJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjtBQUNKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VWJ1bnR1OndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xuXG4uaGVhZGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChvcmFuZ2UgMTAlLCA4MCUsICNGRkQyODAgMTAwJSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5mYS1kYXRhYmFzZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uaGVhZGVyX190aXRsZSBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6IFVidW50dTtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5uYXZpZ2F0aW9uLW1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5uYXZpZ2F0aW9uLW1lbnUgbGkgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbn1cbi5uYXZpZ2F0aW9uLW1lbnUgbGk6bm90KDpsYXN0LWNoaWxkKSBhIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbn1cbi5uYXZpZ2F0aW9uLW1lbnUgbGkgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDI4MDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oYW1idXJnZXItbWVudS1pY29uIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZhLXRpbWVzIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBIYW1idXJnZXIgTWVudSAqL1xuXG4uaGFtYnVyZ2VyLW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaGFtYnVyZ2VyLW1lbnUgYSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGRkQyODA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbn1cbi5oYW1idXJnZXItbWVudSBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEMjgwO1xufVxuXG4uaW50cm9kdWN0b3J5LXRleHQtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xuXG4gICAgLmhlYWRlcl9fdGl0bGUgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xuXG4gICAgLm5hdmlnYXRpb24tbWVudSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmhhbWJ1cmdlci1tZW51LWljb24ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 33, vars: 2, consts: [[1, "wrapper"], [1, "menu-item-container"], [1, "button-container"], ["routerLink", "/users", 1, "user-records-button"], ["routerLink", "/add-user", 1, "add-user-button"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " View employee records ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Details include: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "User Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Create an employee record ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " JSONPlaceholder is only a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "test API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, ", so POST requests do not actually modify data on the server ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Add User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink], styles: ["ul[_ngcontent-%COMP%] {\n    list-style-type: none;\n    margin: 0 0 40px 20px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    margin: auto;\n    max-width: 800px;\n    padding: 20px;\n}\n\n.menu-item-container[_ngcontent-%COMP%] {\n    background-color: #D8D8D8;\n    border-left: 5px solid orange;\n    margin-bottom: 40px;\n    padding: 20px;\n}\n\n.menu-item-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    margin-bottom: 20px;\n}\n\n.menu-item-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n}\n\nbutton[_ngcontent-%COMP%] {\n    background-color: orange;\n    border: none;\n    border-radius: 20px;\n    font-size: 24px;\n    font-weight: bold;\n    padding: 20px;\n    transition-duration: 0.2s;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n    background-color: #FFD280;\n    cursor: pointer;\n}\n\n@media screen and (min-height: 1000px) {\n    .wrapper[_ngcontent-%COMP%] {\n        min-height: 800px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwIDAgNDBweCAyMHB4O1xufVxuXG51bCBsaSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ud3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5tZW51LWl0ZW0tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDhEOEQ4O1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgb3JhbmdlO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLm1lbnUtaXRlbS1jb250YWluZXIgaDIge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5tZW51LWl0ZW0tY29udGFpbmVyIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDI4MDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAxMDAwcHgpIHtcbiAgICAud3JhcHBlciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xuICAgIH1cbn0iXX0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('fadeIn', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(500, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ opacity: 1 }))
                ])
            ])
        ] } });


/***/ }),

/***/ 8825:
/*!****************************************!*\
  !*** ./src/app/logging-interceptor.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggingInterceptor": () => (/* binding */ LoggingInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);




class LoggingInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(req, next) {
        let message;
        const d = new Date(Date.now());
        const date = d.toString();
        return next.handle(req)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.tap)(event => message = event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse ? `Request to ${this.router.url} succeeded` : "Request to ${this.router.url} failed", error => message = "Request to ${this.router.url} failed"), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
            message += ` on ${date}`;
            console.log(message);
        }));
    }
}
LoggingInterceptor.ɵfac = function LoggingInterceptor_Factory(t) { return new (t || LoggingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
LoggingInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LoggingInterceptor, factory: LoggingInterceptor.ɵfac });


/***/ }),

/***/ 7530:
/*!******************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailComponent": () => (/* binding */ UserDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user.service */ 2785);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);




class UserDetailComponent {
    constructor(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            let id = parseInt(params.get('id'));
            this.userId = id;
            this.getUser(id);
        });
    }
    getUser(id) {
        this.userService
            .getUser(id)
            .subscribe(user => (this.user = user), error => (this.error = error));
    }
}
UserDetailComponent.ɵfac = function UserDetailComponent_Factory(t) { return new (t || UserDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
UserDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserDetailComponent, selectors: [["app-user"]], decls: 42, vars: 11, consts: [[1, "user"], ["routerLink", "/users", 1, "back-button"], [1, "user__heading"], [1, "user__description"], [1, "user-container"], [1, "user-record"], [1, "user-record__avatar-container"], [1, "user-record__avatar"], [1, "far", "fa-user-circle", "fa-5x"], [1, "user-record__details"], [1, "user-record__field"], [1, "user-record__catchphrase"], [1, "user-record__articles-button", 3, "routerLink"]], template: function UserDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Back to User Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "A link to the articles written by this user is included");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Phone Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Website:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Company:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum condimentum mauris id condimentum. Nunc egestas sapien quis velit aliquet hendrerit. Integer vitae felis hendrerit, sollicitudin lacus vel, scelerisque dolor. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " > Read Articles by this User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.user.name, " Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.user.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", ctx.user.address.street, ", ", ctx.user.address.suite, ", ", ctx.user.address.city, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.user.phone, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.user.website, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.user.company.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\"", ctx.user.company.catchPhrase, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/users/", ctx.user.id, "/articles");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: [".back-button[_ngcontent-%COMP%] {\n    background-color: orange;\n    border-radius: 10px;\n    color:black;\n    display: inline-block;\n    margin: 20px;\n    padding: 10px;\n    text-decoration: none;\n    transition-duration: 0.2s;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n    background-color: #FFD280;\n}\n\n.user-container[_ngcontent-%COMP%] {\n    background-color: #FFEDCC;\n}\n.user__heading[_ngcontent-%COMP%] {\n    margin: 0 0 10px 20px;\n}\n.user__description[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    margin: 0 0 20px 20px;\n}\n.user-record[_ngcontent-%COMP%] {\n    background-color: #FFEDCC;\n    display: flex;\n    padding: 20px;\n}\n.user-record__name[_ngcontent-%COMP%] { \n    margin-bottom: 10px;\n    text-align: center;\n}\n.user-record__avatar-container[_ngcontent-%COMP%] {\n    padding: 0 10px 20px 10px;\n    text-align: center;\n}\n.user-record__avatar[_ngcontent-%COMP%] {\n    align-items: center;\n    background-color:#ACE1AF;\n    border-radius: 50%;\n    display: flex;\n    font-size: 16px;\n    height: 100px;\n    justify-content: center;\n    margin: 0 auto;\n    width: 100px;\n}\n.user-record__details[_ngcontent-%COMP%] {\n    line-height: 30px;\n    margin-left: 20px;\n}\n.user-record__field[_ngcontent-%COMP%] {\n    font-weight: bold;\n}\n.user-record__catchphrase[_ngcontent-%COMP%] {\n    font-style: italic;\n}\n.user-record__articles-button[_ngcontent-%COMP%] {\n    display: inline-block;\n    font-size: 1.2rem;\n    font-weight: bold;\n    margin-top: 20px;\n    text-decoration: none;\n}\n.user-record__articles-button[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n}\n@media screen and (max-width: 600px) {\n    .user-heading[_ngcontent-%COMP%] {\n        text-align: center;\n    }\n\n    .user-record[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n}\n@media screen and (min-width: 750px) {\n    .user-container[_ngcontent-%COMP%] {\n        min-height: 450px;\n    }\n}\n@media screen and (min-width: 1300px) {\n    .user-container[_ngcontent-%COMP%] {\n        min-height: 500px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQSxnQkFBZ0I7QUFFaEI7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0oiLCJmaWxlIjoidXNlci1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuLmJhY2stYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEMjgwO1xufVxuXG4vKiBVc2VyIFJlY29yZCAqL1xuXG4udXNlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkVEQ0M7XG59XG5cbi51c2VyX19oZWFkaW5nIHtcbiAgICBtYXJnaW46IDAgMCAxMHB4IDIwcHg7XG59XG5cbi51c2VyX19kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbWFyZ2luOiAwIDAgMjBweCAyMHB4O1xufVxuXG4udXNlci1yZWNvcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkVEQ0M7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udXNlci1yZWNvcmRfX25hbWUgeyBcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVzZXItcmVjb3JkX19hdmF0YXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDEwcHggMjBweCAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVzZXItcmVjb3JkX19hdmF0YXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojQUNFMUFGO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLnVzZXItcmVjb3JkX19kZXRhaWxzIHtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnVzZXItcmVjb3JkX19maWVsZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi51c2VyLXJlY29yZF9fY2F0Y2hwaHJhc2Uge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnVzZXItcmVjb3JkX19hcnRpY2xlcy1idXR0b24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi51c2VyLXJlY29yZF9fYXJ0aWNsZXMtYnV0dG9uOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAudXNlci1oZWFkaW5nIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC51c2VyLXJlY29yZCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkge1xuICAgIC51c2VyLWNvbnRhaW5lciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTMwMHB4KSB7XG4gICAgLnVzZXItY29udGFpbmVyIHtcbiAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgfVxufSJdfQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('fadeIn', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)(500, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ opacity: 1 }))
                ])
            ])
        ] } });


/***/ }),

/***/ 5685:
/*!**************************************************!*\
  !*** ./src/app/user-list/user-list.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListComponent": () => (/* binding */ UserListComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user.service */ 2785);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);





function UserListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Phone Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Website:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Company:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " > Read Articles by this User ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/users/", user_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/users/", user_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r1.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r1.phone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r1.website, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r1.company.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\"", user_r1.company.catchPhrase, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/users/", user_r1.id, "/articles");
} }
class UserListComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.getUsers();
    }
    getUsers() {
        this.userService
            .getUsers()
            .subscribe(users => (this.users = users), error => (this.error = error));
    }
}
UserListComponent.ɵfac = function UserListComponent_Factory(t) { return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
UserListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserListComponent, selectors: [["app-user-list"]], decls: 7, vars: 2, consts: [[1, "users"], ["routerLink", "/", 1, "back-button"], [1, "users__description"], [1, "user-container"], ["class", "user-record", 4, "ngFor", "ngForOf"], [1, "user-record"], [1, "user-record__avatar-container"], [1, "user-record__avatar"], [3, "routerLink"], [1, "far", "fa-user-circle", "fa-5x"], [1, "user-record__details"], [1, "user-record__name"], [1, "user-record__field"], [1, "user-record__catchphrase"], [1, "user-record__articles-button", 3, "routerLink"]], template: function UserListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Back to Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Each profile has a link to articles written by the user ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UserListComponent_div_6_Template, 31, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@staggerList", ctx.users.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: [".back-button[_ngcontent-%COMP%] {\n    background-color: orange;\n    border-radius: 10px;\n    color:black;\n    display: inline-block;\n    margin: 20px;\n    padding: 10px;\n    text-decoration: none;\n    transition-duration: 0.2s;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n    background-color: #FFD280;\n}\n\n.users__description[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    margin: 0 0 20px 20px;\n}\n.user-container[_ngcontent-%COMP%] {\n    background-color: white;\n}\n.user-record[_ngcontent-%COMP%] {\n    display: flex;\n    padding: 20px;\n}\n.user-record[_ngcontent-%COMP%]:nth-child(odd) {\n    background-color: #FFEDCC\n}\n.user-record__avatar-container[_ngcontent-%COMP%] {\n    padding: 0 10px 20px 10px;\n    text-align: center;\n}\n.user-record__avatar-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: black;\n    text-decoration: none;\n}\n.user-record__avatar[_ngcontent-%COMP%] {\n    align-items: center;\n    background-color:#ACE1AF;\n    border-radius: 50%;\n    display: flex;\n    font-size: 16px;\n    height: 100px;\n    justify-content: center;\n    margin: 0 auto;\n    width: 100px;\n}\n.user-record__details[_ngcontent-%COMP%] {\n    line-height: 30px;\n    margin-left: 20px;\n}\n.user-record__name[_ngcontent-%COMP%] { \n    text-decoration: underline;\n}\n.user-record__field[_ngcontent-%COMP%] {\n    font-weight: bold;\n}\n.user-record__catchphrase[_ngcontent-%COMP%] {\n    font-style: italic;\n}\n.user-record__articles-button[_ngcontent-%COMP%] {\n    display: inline-block;\n    font-size: 1.2rem;\n    font-weight: bold;\n    margin-top: 20px;\n    text-decoration: none;\n}\n.user-record__articles-button[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n}\n@media screen and (max-width: 600px) {\n    .user-record[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUEsVUFBVTtBQUVWO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtBQUNqQjtBQUNBO0lBQ0k7QUFDSjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0oiLCJmaWxlIjoidXNlci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbn1cbi5iYWNrLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDI4MDtcbn1cblxuLyogVXNlcnMgKi9cblxuLnVzZXJzX19kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbWFyZ2luOiAwIDAgMjBweCAyMHB4O1xufVxuXG4udXNlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udXNlci1yZWNvcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cbi51c2VyLXJlY29yZDpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRURDQ1xufVxuXG4udXNlci1yZWNvcmRfX2F2YXRhci1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgMTBweCAyMHB4IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnVzZXItcmVjb3JkX19hdmF0YXItY29udGFpbmVyIGEge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi51c2VyLXJlY29yZF9fYXZhdGFyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6I0FDRTFBRjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbi51c2VyLXJlY29yZF9fZGV0YWlscyB7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi51c2VyLXJlY29yZF9fbmFtZSB7IFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4udXNlci1yZWNvcmRfX2ZpZWxkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnVzZXItcmVjb3JkX19jYXRjaHBocmFzZSB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4udXNlci1yZWNvcmRfX2FydGljbGVzLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnVzZXItcmVjb3JkX19hcnRpY2xlcy1idXR0b246aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC51c2VyLXJlY29yZCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxufSJdfQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('staggerList', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.query)('.user-record', [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({ opacity: 0 }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.stagger)(200, [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(750, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({ opacity: 1 }))
                        ])
                    ])
                ])
            ])
        ] } });


/***/ }),

/***/ 2785:
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);




class UserService {
    constructor(http) {
        this.http = http;
        this.usersUrl = 'https://jsonplaceholder.typicode.com/users';
    }
    getUsers() {
        return this.http
            .get(this.usersUrl)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(data => data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    getUser(id) {
        return this.getUsers().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(users => users.find(user => user.id === id)));
    }
    postUser(user) {
        const headers = new Headers({
            'Content-Type': 'application/json; charset=UTF-8'
        });
        return this.http.post(this.usersUrl, user)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    handleError(res) {
        console.error(res.error || res.body.error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(res.error || 'Server error');
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.882351f319966d69.js.map