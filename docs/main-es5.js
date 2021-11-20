function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddUserAddUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"back-button-container\">\n    <a routerLink=\"/\" class=\"back-button\">Back to Home</a>\n</div>\n<div class=\"formContainer\">\n    <h2>Add Employee Record</h2>\n    <form id=\"userForm\" [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"formGroup\">\n            <label>\n                <p>Name:</p>\n                <input type=\"text\" formControlName=\"name\" [class.invalid-input]=\"name.invalid && (name.dirty || name.touched)\">\n            </label>\n            <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert\">\n                <div *ngIf=\"name.errors?.required\">\n                    Name is required\n                </div>\n            </div>\n            <label>\n                <p>Username:</p>\n                <input type=\"text\" formControlName=\"username\">\n            </label>\n            <label>\n                <p>Email:</p>\n                <input type=\"text\" formControlName=\"email\" [class.invalid-input]=\"email.invalid && (email.dirty || email.touched)\">\n            </label>\n            <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert\">\n                <div *ngIf=\"email.errors?.email\">\n                    Email is invalid\n                </div>\n            </div>\n        </div>\n        <div class=\"formGroup\" formGroupName=\"address\">\n            <h3>Address</h3>\n            <label>\n                <p>Street:</p>\n                <input type=\"text\" formControlName=\"street\">\n            </label>\n            <label>\n                <p>Suite:</p>\n                <input type=\"text\" formControlName=\"suite\">\n            </label>\n            <label>\n                <p>City:</p>\n                <input type=\"text\" formControlName=\"city\">\n            </label>\n            <label>\n                <p>ZIP Code:</p>\n                <input type=\"text\" formControlName=\"zipcode\">\n            </label>\n            <label>\n                <p>Latitude:</p>\n                <input type=\"text\" formControlName=\"lat\">\n            </label>\n            <label>\n                <p>Longitude:</p>\n                <input type=\"text\" formControlName=\"lng\">\n            </label>\n        </div>\n        <div class=\"formGroup\">\n            <label>\n                Phone Number:\n                <input type=\"text\" formControlName=\"phone\">\n            </label>\n            <label>\n                Website:\n                <input type=\"text\" formControlName=\"website\">\n            </label>\n        </div>\n        <div class=\"formGroup\" formGroupName=\"company\">\n            <h3>Company</h3>\n            <label>\n                Name:\n                <input type=\"text\" formControlName=\"name\">\n            </label>\n            <label>\n                Catchphrase:\n                <input type=\"text\" formControlName=\"catchPhrase\">\n            </label>\n            <label>\n                <p>BS:</p>\n                <input type=\"text\" formControlName=\"bs\">\n            </label>\n        </div>\n        <button type=\"submit\" class=\"submit-button\" [disabled]=\"userForm.invalid\">Submit</button>\n    </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content hero-image\">\n    <header>\n      <div class=\"header-container\">\n        <h1><a href=\"/\" class=\"site-title\"><i class=\"far fa-id-badge\"></i> {{title}}</a></h1>\n        <ul class=\"navigation-menu\">\n          <li><a routerLink=\"/\" class=\"navigation-menu-item\">Home</a></li>\n          <li><a routerLink=\"/users\" class=\"navigation-menu-item\">Records</a></li>\n          <li><a routerLink=\"/add-user\" class=\"navigation-menu-item\">Add User</a></li>\n        </ul>\n        <a href=\"javascript:void(0);\" class=\"hamburger-menu-icon\" onClick=\"toggleMenu()\">\n          <i class=\"fa fa-bars fa-2x\"></i>\n          <i class=\"fa fa-times fa-2x\"></i>\n        </a>\n      </div>\n    </header>\n    <div class=\"hamburger-menu\">\n      <a routerLink=\"/\">Home</a>\n      <a routerLink=\"/users\">Records</a>\n      <a routerLink=\"/add-user\">Add User</a>\n    </div>\n    <div class=\"introductory-text-container\">\n      This application pulls data from the JSONPlaceholder API at\n      <a href=\"https://jsonplaceholder.typicode.com\">https://jsonplaceholder.typicode.com</a>\n    </div>\n    <router-outlet></router-outlet>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
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
    /***/

  },

  /***/
  "./src/app/add-user/add-user.component.css":
  /*!*************************************************!*\
    !*** ./src/app/add-user/add-user.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddUserAddUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2 {\n    border-bottom:2px solid orange;\n    margin-bottom: 20px;\n}\n\nh3 {\n    margin-bottom: 10px;\n    text-decoration: underline;\n}\n\ninput[type=\"text\"] {\n    font-size: 1em;\n    margin-bottom: 15px;\n    width: 250px;\n}\n\n.back-button-container {\n    margin: 20px 20px\n}\n\n.back-button {\n    background-color: orange;\n    border-radius: 10px;\n    color: black;\n    padding: 10px;\n    text-decoration: none;\n    transition-duration: 0.2s;\n}\n\n.back-button:hover {\n    background-color: #FFD280;\n    cursor: pointer;\n}\n\n.submit-button {\n    background-color: orange;\n    border: none;\n    border-radius: 20px;\n    font-size: 24px;\n    font-weight: bold;\n    margin-bottom: 20px;\n    padding: 10px 20px;\n}\n\n.submit-button:hover {\n    background-color: #FFD280;\n    cursor: pointer;\n}\n\n.submit-button:disabled {\n    background-color: #C8C8C8;\n    cursor: default;\n}\n\n.formContainer {\n    background:white;\n    border: 2px solid #D8D8D8;\n    margin: 20px auto;\n    padding: 20px;\n    width: 320px;\n}\n\n.formGroup {\n    margin-bottom: 20px;\n}\n\n.userForm {\n    display:flex;\n    flex-direction: column;\n}\n\n.invalid-input {\n    border: 1px solid red;\n}\n\n.alert {\n    color: red;\n    margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXVzZXIvYWRkLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgb3JhbmdlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmgzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB3aWR0aDogMjUwcHg7XG59XG5cbi5iYWNrLWJ1dHRvbi1jb250YWluZXIge1xuICAgIG1hcmdpbjogMjBweCAyMHB4XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG59XG5cbi5iYWNrLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDI4MDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG4uc3VibWl0LWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDI4MDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWJtaXQtYnV0dG9uOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhDOEM4O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmZvcm1Db250YWluZXIge1xuICAgIGJhY2tncm91bmQ6d2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0Q4RDhEODtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHdpZHRoOiAzMjBweDtcbn1cblxuLmZvcm1Hcm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnVzZXJGb3JtIHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmludmFsaWQtaW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuLmFsZXJ0IHtcbiAgICBjb2xvcjogcmVkO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/add-user/add-user.component.ts":
  /*!************************************************!*\
    !*** ./src/app/add-user/add-user.component.ts ***!
    \************************************************/

  /*! exports provided: AddUserComponent */

  /***/
  function srcAppAddUserAddUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddUserComponent", function () {
      return AddUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");

    var AddUserComponent = /*#__PURE__*/function () {
      function AddUserComponent(userService) {
        _classCallCheck(this, AddUserComponent);

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

      _createClass(AddUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "name",
        get: function get() {
          return this.userForm.get('name');
        }
      }, {
        key: "email",
        get: function get() {
          return this.userForm.get('email');
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

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
                lng: this.userForm.get('address.lng').value
              }
            },
            phone: this.userForm.get('phone').value,
            website: this.userForm.get('website').value,
            company: this.userForm.get('company').value
          }).subscribe(function (user) {
            console.log(_this.userForm.value); //this.userForm.reset();
          });
        }
      }]);

      return AddUserComponent;
    }();

    AddUserComponent.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-user.component.css */
      "./src/app/add-user/add-user.component.css"))["default"]]
    })], AddUserComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-user/add-user.component */
    "./src/app/add-user/add-user.component.ts");
    /* harmony import */


    var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-list/user-list.component */
    "./src/app/user-list/user-list.component.ts");
    /* harmony import */


    var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-detail/user-detail.component */
    "./src/app/user-detail/user-detail.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: "",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
      pathMatch: "full"
    }, {
      path: "add-user",
      component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_3__["AddUserComponent"]
    }, {
      path: "users",
      component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"]
    }, {
      path: "users/:id",
      component: _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_5__["UserDetailComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-container {\n    background: linear-gradient(orange 10%, 80%, #FFD280 100%);\n    box-shadow: 0px 2px 5px black;\n    display: grid; \n    grid-template-columns: repeat(2, 1fr);\n    margin: 0;\n    padding: 20px;\n}\n\n.site-title {\n    color: black;\n    text-decoration: none;\n}\n\n.navigation-menu {\n    display: flex;\n    justify-self: end;\n    list-style: none;\n}\n\n.navigation-menu-item {\n    border-right: 1px solid black;\n    color: black;\n    padding: 10px 30px;\n    text-decoration: none;\n    transition-duration: 0.2s;\n}\n\n.navigation-menu-item:hover {\n    background-color: #FFD280;\n    cursor: pointer;\n}\n\n.hamburger-menu-icon {\n    color: black;\n    display: none;\n    flex-grow: 1;\n    text-align: right;\n    text-decoration: none;\n}\n\n.fa-times {\n    display: none;\n}\n\n.hamburger-menu {\n    background-color: lightgray;\n    border-top: 1px solid black;\n    display: none;\n    flex-direction: column;\n    padding: 10px 20px;\n}\n\n.hamburger-menu a {\n    color: black;\n    padding: 10px 0;\n    text-decoration: none;\n    transition-duration: 0.2s;\n}\n\n.hamburger-menu a:hover {\n    background-color: #FFD280;\n}\n\n.introductory-text-container {\n    background-color: yellow;\n    padding: 20px;\n}\n\n@media screen and (max-width: 450px){\n    .navigation-menu {\n        display: none;\n    }\n\n    .hamburger-menu-icon {\n        display: block;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwREFBMEQ7SUFDMUQsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChvcmFuZ2UgMTAlLCA4MCUsICNGRkQyODAgMTAwJSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggYmxhY2s7XG4gICAgZGlzcGxheTogZ3JpZDsgXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLnNpdGUtdGl0bGUge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5uYXZpZ2F0aW9uLW1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLm5hdmlnYXRpb24tbWVudS1pdGVtIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuXG4ubmF2aWdhdGlvbi1tZW51LWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkQyODA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGFtYnVyZ2VyLW1lbnUtaWNvbiB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5mYS10aW1lcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5oYW1idXJnZXItbWVudSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuLmhhbWJ1cmdlci1tZW51IGEge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG59XG4uaGFtYnVyZ2VyLW1lbnUgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDI4MDtcbn1cblxuLmludHJvZHVjdG9yeS10ZXh0LWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KXtcbiAgICAubmF2aWdhdGlvbi1tZW51IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuaGFtYnVyZ2VyLW1lbnUtaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Employee Records';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user-list/user-list.component */
    "./src/app/user-list/user-list.component.ts");
    /* harmony import */


    var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user-detail/user-detail.component */
    "./src/app/user-detail/user-detail.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./add-user/add-user.component */
    "./src/app/add-user/add-user.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__["UserListComponent"], _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__["AddUserComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: "\n    <div class=\"wrapper\">\n      <div class=\"menu-item-container\">\n        <p>\n          View employee records which include name, email, phone number, website, and company\n        </p>\n        <div class=\"button-container\">\n          <button routerLink=\"/users\" class=\"user-records-button\">User Records</button>\n        </div>\n      </div>\n      <div class=\"menu-item-container\">\n        <p>\n          Add an employee record to the database\n        </p>\n        <div class=\"button-container\">\n          <button routerLink=\"/add-user\" class=\"add-user-button\">Add User</button>\n        </div>\n      </div>\n    </div>\n  ",
      styles: [".wrapper { display: flex; flex-direction: column; margin: auto; max-width: 800px; padding: 20px }", ".menu-item-container { background-color: #D8D8D8; border-left: 10px solid orange; margin-bottom: 40px; padding: 20px }", ".menu-item-container p { margin-bottom: 20px }", "button { background-color: orange; border: none; border-radius: 20px; font-size: 24px; font-weight: bold; padding: 20px; transition-duration: 0.2s", "button:hover { background-color: #FFD280; cursor: pointer }"]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/user-detail/user-detail.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/user-detail/user-detail.component.ts ***!
    \******************************************************/

  /*! exports provided: UserDetailComponent */

  /***/
  function srcAppUserDetailUserDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function () {
      return UserDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");

    var UserDetailComponent = /*#__PURE__*/function () {
      function UserDetailComponent(userService, route, router) {
        _classCallCheck(this, UserDetailComponent);

        this.userService = userService;
        this.route = route;
        this.router = router;
      }

      _createClass(UserDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.paramMap.subscribe(function (params) {
            var id = parseInt(params.get('id'));
            _this2.userId = id;

            _this2.getUser(id);
          });
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          var _this3 = this;

          this.userService.getUser(id).subscribe(function (user) {
            return _this3.user = user;
          }, function (error) {
            return _this3.error = error;
          });
        }
      }]);

      return UserDetailComponent;
    }();

    UserDetailComponent.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    UserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user',
      template: "\n    <div class=\"back-button-container\">\n      <a routerLink=\"/users\" class=\"back-button\">Back to User Records</a>\n    </div>\n    <section class=\"users\">\n      <div class=\"user-container\">\n        <div class=\"user-record-container\">\n          <div class=\"user-avatar-container\">\n            <div class=\"user-avatar\"><i class=\"far fa-user-circle fa-5x\"></i></div>\n            <span>Position</span>\n          </div>\n          <div class=\"user-details-container\">\n            <h3><span class=\"user-name\">{{user.name}}</span></h3>\n            <p>Email: {{user.email}}</p>\n            <p>Address: {{user.address.street}}, {{user.address.suite}}, {{user.address.city}}</p>\n            <p>Phone Number: {{user.phone}}</p>\n            <p>Website: {{user.website}}</p>\n            <p>Company: {{user.company.name}}</p>\n            <p><span class=\"catchphrase\">\"{{user.company.catchPhrase}}\"</span></p>\n            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n            Praesent interdum condimentum mauris id condimentum.\n            Nunc egestas sapien quis velit aliquet hendrerit.\n            Integer vitae felis hendrerit, sollicitudin lacus vel, scelerisque dolor.</p>\n          </div>\n        </div>\n      </div>\n    </section>\n  ",
      styles: [".user-container { background-color: #FFEDCC }", ".back-button-container { margin: 20px }", ".back-button { background-color: orange; border-radius: 10px; color: black; padding: 10px; text-decoration: none; transition-duration: 0.2s }", ".back-button:hover { background-color: #FFD280 }", ".user-record-container { display: flex; padding: 20px }", ".user-avatar-container { text-align:center }", ".user-avatar { background-color: yellow; padding: 20px }", ".user-details-container { line-height: 30px; margin-left: 20px }", ".user-name { text-decoration: underline; }", ".catchphrase { font-style: italic }"]
    })], UserDetailComponent);
    /***/
  },

  /***/
  "./src/app/user-list/user-list.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/user-list/user-list.component.ts ***!
    \**************************************************/

  /*! exports provided: UserListComponent */

  /***/
  function srcAppUserListUserListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserListComponent", function () {
      return UserListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");

    var UserListComponent = /*#__PURE__*/function () {
      function UserListComponent(userService) {
        _classCallCheck(this, UserListComponent);

        this.userService = userService;
      }

      _createClass(UserListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUsers();
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this4 = this;

          this.userService.getUsers().subscribe(function (users) {
            return _this4.users = users;
          }, function (error) {
            return _this4.error = error;
          });
        }
      }]);

      return UserListComponent;
    }();

    UserListComponent.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-list',
      template: "\n    <div class=\"back-button-container\">\n      <a routerLink=\"/\" class=\"back-button\">Back to Home</a>\n    </div>\n    <section class=\"users\">\n      <div class=\"user-container\">\n        <div class=\"user-record-container\" *ngFor=\"let user of users\">\n          <div class=\"user-avatar-container\">\n            <a href=\"/users/{{user.id}}\">\n              <div class=\"user-avatar\"><i class=\"far fa-user-circle fa-5x\"></i></div>\n            </a>\n            <span>Position</span>\n          </div>\n          <div class=\"user-details-container\">\n            <h3><a href=\"/users/{{user.id}}\"><span class=\"user-name\">{{user.name}}</span></a></h3>\n            <p>Email: {{user.email}}</p>\n            <p>Phone Number: {{user.phone}}</p>\n            <p>Website: {{user.website}}</p>\n            <p>Company: {{user.company.name}}</p>\n            <p><span class=\"catchphrase\">\"{{user.company.catchPhrase}}\"</span></p>\n          </div>\n        </div>\n      </div>\n    </section>\n  ",
      styles: [".back-button-container { margin: 20px }", ".back-button { background-color: orange; border-radius: 10px; color: black; padding: 10px; text-decoration: none; transition-duration: 0.2s }", ".back-button:hover { background-color: #FFD280 }", ".user-container { background-color: white }", ".user-record-container:nth-child(odd) { background-color: #FFEDCC }", ".user-record-container { display: flex; padding: 20px}", ".user-avatar-container { text-align:center }", ".user-avatar-container a { color: black; text-decoration: none }", ".user-avatar { background-color: yellow; padding: 20px }", ".user-details-container { line-height: 30px; margin-left: 20px }", ".user-name { text-decoration: underline; }", ".catchphrase { font-style: italic }"]
    })], UserListComponent);
    /***/
  },

  /***/
  "./src/app/user.service.ts":
  /*!*********************************!*\
    !*** ./src/app/user.service.ts ***!
    \*********************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.usersUrl = 'https://jsonplaceholder.typicode.com/users';
      }

      _createClass(UserService, [{
        key: "getUsers",
        value: function getUsers() {
          return this.http.get(this.usersUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          return this.getUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (users) {
            return users.find(function (user) {
              return user.id === id;
            });
          }));
        }
      }, {
        key: "postUser",
        value: function postUser(user) {
          var headers = new Headers({
            'Content-Type': 'application/json'
          });
          return this.http.post(this.usersUrl, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(res) {
          console.error(res.error || res.body.error);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(res.error || 'Server error');
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/katie/Desktop/Kuya/Angular Practice/angular-users/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map