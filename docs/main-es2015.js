(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"back-button-container\">\n    <a routerLink=\"/\" class=\"back-button\">Back to Home</a>\n</div>\n<div class=\"formContainer\">\n    <h2>Add Employee Record</h2>\n    <form id=\"userForm\" [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"formGroup\">\n            <label>\n                <p>Name:</p>\n                <input type=\"text\" formControlName=\"name\" [class.invalid-input]=\"name.invalid && (name.dirty || name.touched)\">\n            </label>\n            <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert\">\n                <div *ngIf=\"name.errors?.required\">\n                    Name is required\n                </div>\n            </div>\n            <label>\n                <p>Username:</p>\n                <input type=\"text\" formControlName=\"username\">\n            </label>\n            <label>\n                <p>Email:</p>\n                <input type=\"text\" formControlName=\"email\" [class.invalid-input]=\"email.invalid && (email.dirty || email.touched)\">\n            </label>\n            <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert\">\n                <div *ngIf=\"email.errors?.email\">\n                    Email is invalid\n                </div>\n            </div>\n        </div>\n        <div class=\"formGroup\" formGroupName=\"address\">\n            <h3>Address</h3>\n            <label>\n                <p>Street:</p>\n                <input type=\"text\" formControlName=\"street\">\n            </label>\n            <label>\n                <p>Suite:</p>\n                <input type=\"text\" formControlName=\"suite\">\n            </label>\n            <label>\n                <p>City:</p>\n                <input type=\"text\" formControlName=\"city\">\n            </label>\n            <label>\n                <p>ZIP Code:</p>\n                <input type=\"text\" formControlName=\"zipcode\">\n            </label>\n            <label>\n                <p>Latitude:</p>\n                <input type=\"text\" formControlName=\"lat\">\n            </label>\n            <label>\n                <p>Longitude:</p>\n                <input type=\"text\" formControlName=\"lng\">\n            </label>\n        </div>\n        <div class=\"formGroup\">\n            <label>\n                Phone Number:\n                <input type=\"text\" formControlName=\"phone\">\n            </label>\n            <label>\n                Website:\n                <input type=\"text\" formControlName=\"website\">\n            </label>\n        </div>\n        <div class=\"formGroup\" formGroupName=\"company\">\n            <h3>Company</h3>\n            <label>\n                Name:\n                <input type=\"text\" formControlName=\"name\">\n            </label>\n            <label>\n                Catchphrase:\n                <input type=\"text\" formControlName=\"catchPhrase\">\n            </label>\n            <label>\n                <p>BS:</p>\n                <input type=\"text\" formControlName=\"bs\">\n            </label>\n        </div>\n        <button type=\"submit\" class=\"submit-button\" [disabled]=\"userForm.invalid\">Submit</button>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n    <div class=\"footer-container\">\n      <div class=\"footer-section\">\n        <h3 class=\"footer-section-heading\">Links</h3>\n        <ul>\n          <li><a href=\"https://github.com/bryanc123/Employee-Records-Angular\">Source Code for this App</a></li>\n          <li><a href=\"https://bryanc123.github.io/Personal-Website/\">Personal Portfolio</a></li>\n          <li><a href=\"https://bryanc123.github.io/Plain-JavaScript-Quiz/\">Quiz App</a></li>\n        </ul>\n      </div>\n      <div class=\"footer-section\">\n        <h3 class=\"footer-section-heading\">More Links</h3>\n        <ul>\n          <li>Link 1</li>\n          <li>Link 2</li>\n          <li>Link 3</li>\n          <li>Link 4</li>\n          <li>Link 5</li>\n        </ul>\n      </div>\n      <div class=\"footer-section\">\n        <h3 class=\"footer-section-heading\">Even More Links</h3>\n        <ul>\n          <li>Link 1</li>\n          <li>Link 2</li>\n          <li>Link 3</li>\n        </ul>\n      </div>\n    </div>\n  </footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <div class=\"header-container\">\n    <h1 class=\"header-container__title\"><a href=\"/\">{{title}}</a></h1>\n    <ul class=\"navigation-menu\">\n      <li><a routerLink=\"/\" class=\"navigation-menu-item\">Home</a></li>\n      <li><a routerLink=\"/users\" class=\"navigation-menu-item\">Records</a></li>\n      <li><a routerLink=\"/add-user\" class=\"navigation-menu-item\">Add User</a></li>\n    </ul>\n    <div class=\"hamburger-menu-icon-container\">\n      <a href=\"javascript:void(0);\" class=\"hamburger-menu-icon\" onClick=\"toggleMenu()\">\n        <i class=\"fa fa-bars fa-2x\"></i>\n        <i class=\"fa fa-times fa-2x\"></i>\n      </a>\n    </div>\n  </div>\n</header>\n<div class=\"hamburger-menu\">\n  <a routerLink=\"/\">Home</a>\n  <a routerLink=\"/users\">Records</a>\n  <a routerLink=\"/add-user\">Add User</a>\n</div>\n<div class=\"introductory-text-container\">\n  This application pulls data from the JSONPlaceholder API at\n  <a href=\"https://jsonplaceholder.typicode.com\">https://jsonplaceholder.typicode.com</a>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-detail/user-detail.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-detail/user-detail.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"back-button-container\">\n    <a routerLink=\"/users\" class=\"back-button\">Back to User Records</a>\n  </div>\n<section class=\"users\">\n    <div class=\"user-container\">\n        <div class=\"user-record\">\n            <h2 class=\"user-record__name\">{{user.name}}</h2>\n            <div class=\"user-record__avatar-container\">\n                <div class=\"user-record__avatar\"><i class=\"far fa-user-circle fa-5x\"></i></div>\n                <span>Position</span>\n            </div>\n            <div class=\"user-record__details\">\n                <p><span class=\"user-record__field\">Email:</span> {{user.email}}</p>\n                <p><span class=\"user-record__field\">Address:</span> {{user.address.street}}, {{user.address.suite}}, {{user.address.city}}</p>\n                <p><span class=\"user-record__field\">Phone Number:</span> {{user.phone}}</p>\n                <p><span class=\"user-record__field\">Website:</span> {{user.website}}</p>\n                <p><span class=\"user-record__field\">Company:</span> {{user.company.name}}</p>\n                <p><span class=\"user-record__catchphrase\">\"{{user.company.catchPhrase}}\"</span></p>\n                <p><span class=\"user-record__field\">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Praesent interdum condimentum mauris id condimentum.\n                Nunc egestas sapien quis velit aliquet hendrerit.\n                Integer vitae felis hendrerit, sollicitudin lacus vel, scelerisque dolor.</p>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"back-button-container\">\n    <a routerLink=\"/\" class=\"back-button\">Back to Home</a>\n</div>\n<section class=\"users\">\n    <div class=\"user-container\">\n        <div class=\"user-record\" *ngFor=\"let user of users\">\n            <div class=\"user-record__avatar-container\">\n                <a routerLink=\"/users/{{user.id}}\">\n                <div class=\"user-record__avatar\">\n                    <i class=\"far fa-user-circle fa-5x\"></i>\n                </div>\n                </a>\n                <span>Position</span>\n            </div>\n            <div class=\"user-record__details\">\n                <h3>\n                    <a routerLink=\"/users/{{user.id}}\">\n                        <span class=\"user-record__name\">{{user.name}}</span>\n                    </a>\n                </h3>\n                <p><span class=\"user-record__field\">Email:</span> {{user.email}}</p>\n                <p><span class=\"user-record__field\">Phone Number:</span> {{user.phone}}</p>\n                <p><span class=\"user-record__field\">Website:</span> {{user.website}}</p>\n                <p><span class=\"user-record__field\">Company:</span> {{user.company.name}}</p>\n                <p><span class=\"user-record__catchphrase\">\"{{user.company.catchPhrase}}\"</span></p>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/add-user/add-user.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-user/add-user.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n    border-bottom:2px solid orange;\n    margin-bottom: 20px;\n}\n\nh3 {\n    margin-bottom: 10px;\n    text-decoration: underline;\n}\n\ninput[type=\"text\"] {\n    font-size: 1em;\n    margin-bottom: 15px;\n    width: 250px;\n}\n\n.back-button-container {\n    margin: 20px 20px\n}\n\n.back-button {\n    background-color: orange;\n    border-radius: 10px;\n    color: black;\n    padding: 10px;\n    text-decoration: none;\n    transition-duration: 0.2s;\n}\n\n.back-button:hover {\n    background-color: #FFD280;\n    cursor: pointer;\n}\n\n.submit-button {\n    background-color: orange;\n    border: none;\n    border-radius: 20px;\n    font-size: 24px;\n    font-weight: bold;\n    margin-bottom: 20px;\n    padding: 10px 20px;\n}\n\n.submit-button:hover {\n    background-color: #FFD280;\n    cursor: pointer;\n}\n\n.submit-button:disabled {\n    background-color: #C8C8C8;\n    cursor: default;\n}\n\n.formContainer {\n    background:white;\n    border: 2px solid #D8D8D8;\n    margin: 20px auto;\n    padding: 20px;\n    width: 320px;\n}\n\n.formGroup {\n    margin-bottom: 20px;\n}\n\n.userForm {\n    display:flex;\n    flex-direction: column;\n}\n\n.invalid-input {\n    border: 1px solid red;\n}\n\n.alert {\n    color: red;\n    margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXVzZXIvYWRkLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgb3JhbmdlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmgzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB3aWR0aDogMjUwcHg7XG59XG5cbi5iYWNrLWJ1dHRvbi1jb250YWluZXIge1xuICAgIG1hcmdpbjogMjBweCAyMHB4XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG59XG5cbi5iYWNrLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDI4MDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG4uc3VibWl0LWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDI4MDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWJtaXQtYnV0dG9uOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhDOEM4O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmZvcm1Db250YWluZXIge1xuICAgIGJhY2tncm91bmQ6d2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0Q4RDhEODtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHdpZHRoOiAzMjBweDtcbn1cblxuLmZvcm1Hcm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnVzZXJGb3JtIHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmludmFsaWQtaW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuLmFsZXJ0IHtcbiAgICBjb2xvcjogcmVkO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/add-user/add-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-user/add-user.component.ts ***!
  \************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");




let AddUserComponent = class AddUserComponent {
    constructor(userService) {
        this.userService = userService;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                street: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                suite: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                zipcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                lat: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                lng: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
            }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            website: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                catchPhrase: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                bs: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
            })
        });
    }
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
};
AddUserComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-user.component.css */ "./src/app/add-user/add-user.component.css")).default]
    })
], AddUserComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "./src/app/user-detail/user-detail.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");







const routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], pathMatch: "full" },
    { path: "add-user", component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_3__["AddUserComponent"] },
    { path: "users", component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"] },
    { path: "users/:id", component: _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_5__["UserDetailComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Employee Records';
    }
    ngOnInit() {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "./src/app/user-detail/user-detail.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__["UserListComponent"],
            _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__["AddUserComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n    background-color: orange;\n    flex-shrink: 0;\n    padding: 20px;\n}\n\n.footer-container {\n    display: grid;\n    grid-template-columns: 3fr 2fr 2fr;\n    max-width: 900px;\n}\n\n.footer-section-heading {\n    margin-bottom: 10px;\n    text-decoration: underline;\n}\n\n.footer-section ul {\n    list-style: none;\n}\n\n.footer-section ul li {\n    margin-bottom: 10px;\n}\n\n.footer-section ul li a {\n    color: black;\n    text-decoration: none;\n}\n\n.footer-section ul li a:hover {\n    color: rgba(0, 0, 0, 0.8);\n}\n\n@media screen and (max-width: 600px) {\n    .footer-container {\n        grid-template-columns: 1fr;\n    }\n    .footer-section {\n        margin-bottom: 20px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZm9vdGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnIgMmZyO1xuICAgIG1heC13aWR0aDogOTAwcHg7XG59XG5cbi5mb290ZXItc2VjdGlvbi1oZWFkaW5nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZm9vdGVyLXNlY3Rpb24gdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5mb290ZXItc2VjdGlvbiB1bCBsaSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZvb3Rlci1zZWN0aW9uIHVsIGxpIGEge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZm9vdGVyLXNlY3Rpb24gdWwgbGkgYTpob3ZlciB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuZm9vdGVyLWNvbnRhaW5lciB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cbiAgICAuZm9vdGVyLXNlY3Rpb24ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-container {\n    background: linear-gradient(orange 10%, 80%, #FFD280 100%);\n    display: grid; \n    grid-template-columns: repeat(2, 1fr);\n    margin: 0;\n    padding: 20px;\n}\n\n.header-container__title a {\n    color: black;\n    text-decoration: none;\n}\n\n.navigation-menu {\n    display: flex;\n    justify-self: end;\n    list-style: none;\n}\n\n.navigation-menu-item {\n    border-right: 1px solid black;\n    color: black;\n    padding: 10px 30px;\n    text-decoration: none;\n    transition-duration: 0.2s;\n}\n\n.navigation-menu-item:hover {\n    background-color: #FFD280;\n    cursor: pointer;\n}\n\n.hamburger-menu-icon {\n    color: black;\n    display: none;\n    flex-grow: 1;\n    text-align: right;\n    text-decoration: none;\n}\n\n.fa-times {\n    display: none;\n}\n\n/* Hamburger Menu */\n\n.hamburger-menu {\n    background-color: orange;\n    display: none;\n    flex-direction: column;\n}\n\n.hamburger-menu a {\n    border-bottom: 1px solid #FFD280;\n    color: black;\n    padding: 10px 20px;\n    text-decoration: none;\n    transition-duration: 0.2s;\n}\n\n.hamburger-menu a:hover {\n    background-color: #FFD280;\n}\n\n.introductory-text-container {\n    background-color: yellow;\n    padding: 20px;\n}\n\n@media screen and (max-width: 450px){\n    .header-container {\n        display: flex;\n    }\n\n    .header-container__title {\n        flex-grow: 1;\n        font-size: 24px;\n    }\n\n    .navigation-menu {\n        display: none;\n    }\n\n    .hamburger-menu-icon {\n        display: block;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMERBQTBEO0lBQzFELGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSxtQkFBbUI7O0FBRW5CO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KG9yYW5nZSAxMCUsIDgwJSwgI0ZGRDI4MCAxMDAlKTtcbiAgICBkaXNwbGF5OiBncmlkOyBcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lcl9fdGl0bGUgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm5hdmlnYXRpb24tbWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ubmF2aWdhdGlvbi1tZW51LWl0ZW0ge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG59XG5cbi5uYXZpZ2F0aW9uLW1lbnUtaXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDI4MDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oYW1idXJnZXItbWVudS1pY29uIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZhLXRpbWVzIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBIYW1idXJnZXIgTWVudSAqL1xuXG4uaGFtYnVyZ2VyLW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaGFtYnVyZ2VyLW1lbnUgYSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGRkQyODA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbn1cbi5oYW1idXJnZXItbWVudSBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEMjgwO1xufVxuXG4uaW50cm9kdWN0b3J5LXRleHQtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpe1xuICAgIC5oZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAuaGVhZGVyLWNvbnRhaW5lcl9fdGl0bGUge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG5cbiAgICAubmF2aWdhdGlvbi1tZW51IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuaGFtYnVyZ2VyLW1lbnUtaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
        this.title = "Employee Records";
    }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
        styles: [".wrapper { display: flex; flex-direction: column; margin: auto; max-width: 800px; padding: 20px }", ".menu-item-container { background-color: #D8D8D8; border-left: 10px solid orange; margin-bottom: 40px; padding: 20px }", ".menu-item-container p { margin-bottom: 20px }", "button { background-color: orange; border: none; border-radius: 20px; font-size: 24px; font-weight: bold; padding: 20px; transition-duration: 0.2s", "button:hover { background-color: #FFD280; cursor: pointer }"]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/user-detail/user-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-container {\n    background-color: #FFEDCC;\n}\n\n.back-button-container {\n    margin: 20px;\n}\n\n.back-button {\n    background-color: orange;\n    border-radius: 10px;\n    color: black;\n    padding: 10px;\n    text-decoration: none;\n    transition-duration: 0.2s;\n}\n\n.back-button:hover {\n    background-color: #FFD280;\n}\n\n/* User Record */\n\n.user-container {\n    background-color: white\n}\n\n.user-record {\n    display: flex;\n    padding: 20px;\n}\n\n.user-record:nth-child(odd) {\n    background-color: #FFEDCC\n}\n\n.user-record__name { \n    margin-bottom: 10px;\n    text-align: center;\n}\n\n.user-record__avatar-container {\n    text-align: center;\n}\n\n.user-record__avatar-container a {\n    color: black;\n    text-decoration: none;\n}\n\n.user-record__avatar {\n    background-color: yellow;\n    padding: 20px;\n}\n\n.user-record__details {\n    line-height: 30px;\n    margin-left: 20px;\n}\n\n.user-record__field {\n    font-weight: bold;\n}\n\n.user-record__catchphrase {\n    font-style: italic;\n}\n\n@media screen and (max-width: 600px) {\n    .user-record {\n        flex-direction: column;\n    }\n\n    .user-record__avatar-container {\n        margin-bottom: 20px;\n    }\n\n    .user-record__avatar {\n        width: 200px;\n        height: 200px;\n        margin: 0 auto;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1kZXRhaWwvdXNlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUNBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGNBQWM7SUFDbEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkVEQ0M7XG59XG5cbi5iYWNrLWJ1dHRvbi1jb250YWluZXIge1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbn1cblxuLmJhY2stYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEMjgwO1xufVxuXG4vKiBVc2VyIFJlY29yZCAqL1xuXG4udXNlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXG59XG5cbi51c2VyLXJlY29yZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuLnVzZXItcmVjb3JkOm50aC1jaGlsZChvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFRENDXG59XG5cbi51c2VyLXJlY29yZF9fbmFtZSB7IFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udXNlci1yZWNvcmRfX2F2YXRhci1jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi51c2VyLXJlY29yZF9fYXZhdGFyLWNvbnRhaW5lciBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udXNlci1yZWNvcmRfX2F2YXRhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi51c2VyLXJlY29yZF9fZGV0YWlscyB7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi51c2VyLXJlY29yZF9fZmllbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udXNlci1yZWNvcmRfX2NhdGNocGhyYXNlIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLnVzZXItcmVjb3JkIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAudXNlci1yZWNvcmRfX2F2YXRhci1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIC51c2VyLXJlY29yZF9fYXZhdGFyIHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/user-detail/user-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.ts ***!
  \******************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");




let UserDetailComponent = class UserDetailComponent {
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
};
UserDetailComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-detail/user-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-detail.component.css */ "./src/app/user-detail/user-detail.component.css")).default]
    })
], UserDetailComponent);



/***/ }),

/***/ "./src/app/user-list/user-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-list/user-list.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back-button-container {\n    margin: 20px\n}\n\n.back-button {\n    background-color: orange;\n    border-radius: 10px;\n    color:black;\n    padding: 10px;\n    text-decoration: none;\n    transition-duration: 0.2s\n}\n\n.back-button:hover {\n    background-color: #FFD280\n}\n\n/* Users Container */\n\n.user-container {\n    background-color: white\n}\n\n.user-record {\n    display: flex;\n    padding: 20px;\n}\n\n.user-record:nth-child(odd) {\n    background-color: #FFEDCC\n}\n\n.user-record__avatar-container {\n    text-align: center;\n}\n\n.user-record__avatar-container a {\n    color: black;\n    text-decoration: none;\n}\n\n.user-record__avatar {\n    background-color: yellow;\n    padding: 20px;\n}\n\n.user-record__details {\n    line-height: 30px;\n    margin-left: 20px;\n}\n\n.user-record__name { \n    text-decoration: underline;\n}\n\n.user-record__field {\n    font-weight: bold;\n}\n\n.user-record__catchphrase {\n    font-style: italic;\n}\n\n@media screen and (max-width: 600px) {\n    .user-record {\n        flex-direction: column;\n    }\n\n    .user-record__avatar-container {\n        margin-bottom: 20px;\n    }\n\n    .user-record__avatar {\n        width: 200px;\n        height: 200px;\n        margin: 0 auto;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYixxQkFBcUI7SUFDckI7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBRUEsb0JBQW9COztBQUVwQjtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFDQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGNBQWM7SUFDbEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrLWJ1dHRvbi1jb250YWluZXIge1xuICAgIG1hcmdpbjogMjBweFxufVxuXG4uYmFjay1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnNcbn1cbi5iYWNrLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDI4MFxufVxuXG4vKiBVc2VycyBDb250YWluZXIgKi9cblxuLnVzZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxufVxuXG4udXNlci1yZWNvcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cbi51c2VyLXJlY29yZDpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRURDQ1xufVxuXG4udXNlci1yZWNvcmRfX2F2YXRhci1jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi51c2VyLXJlY29yZF9fYXZhdGFyLWNvbnRhaW5lciBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udXNlci1yZWNvcmRfX2F2YXRhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi51c2VyLXJlY29yZF9fZGV0YWlscyB7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi51c2VyLXJlY29yZF9fbmFtZSB7IFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4udXNlci1yZWNvcmRfX2ZpZWxkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnVzZXItcmVjb3JkX19jYXRjaHBocmFzZSB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC51c2VyLXJlY29yZCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLnVzZXItcmVjb3JkX19hdmF0YXItY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAudXNlci1yZWNvcmRfX2F2YXRhciB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/user-list/user-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-list/user-list.component.ts ***!
  \**************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



let UserListComponent = class UserListComponent {
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
};
UserListComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-list.component.css */ "./src/app/user-list/user-list.component.css")).default]
    })
], UserListComponent);



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.usersUrl = 'https://jsonplaceholder.typicode.com/users';
    }
    getUsers() {
        return this.http
            .get(this.usersUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getUser(id) {
        return this.getUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(users => users.find(user => user.id === id)));
    }
    postUser(user) {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.usersUrl, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(res) {
        console.error(res.error || res.body.error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(res.error || 'Server error');
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/katie/Desktop/Kuya/Angular Practice/angular-users/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map