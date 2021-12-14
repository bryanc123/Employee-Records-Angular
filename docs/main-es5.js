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


    __webpack_exports__["default"] = "<a routerLink=\"/\" class=\"back-button\">Back to Home</a>\n<div class=\"note\">\n    <strong>Note:</strong> You cannot submit a new user until all inputs in the form are valid\n</div>\n<div class=\"success-container\">\n    <div *ngIf=\"success\" class=\"success\">\n        User successfully added to database!\n        <i class=\"fa fa-times\" (click)=\"closeSuccessMessage()\"></i>\n    </div>\n</div>\n<div class=\"formContainer\">\n    <h2>Add Employee Record</h2>\n    <form id=\"userForm\" [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"formGroup\">\n            <label>\n                <p>Name:</p>\n                <input type=\"text\" formControlName=\"name\" [class.invalid-input]=\"name.invalid && (name.dirty || name.touched)\">\n            </label>\n            <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert\">\n                <div *ngIf=\"name.errors?.required\">\n                    Name is required\n                </div>\n                <div *ngIf=\"name.errors?.pattern\">\n                    Name must contain letters or spaces only\n                </div>\n            </div>\n            <label>\n                <p>Username:</p>\n                <input type=\"text\" formControlName=\"username\">\n            </label>\n            <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"alert\">\n                <div *ngIf=\"username.errors?.required\">\n                    Username is required\n                </div>\n            </div>\n            <label>\n                <p>Email:</p>\n                <input type=\"text\" formControlName=\"email\" [class.invalid-input]=\"email.invalid && (email.dirty || email.touched)\">\n            </label>\n            <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert\">\n                <div *ngIf=\"email.errors?.email\">\n                    Email is invalid\n                </div>\n            </div>\n        </div>\n        <div class=\"formGroup\" formGroupName=\"address\">\n            <h3>Address</h3>\n            <label>\n                <p>Street:</p>\n                <input type=\"text\" formControlName=\"street\">\n            </label>\n            <div *ngIf=\"street.invalid && (street.dirty || street.touched)\" class=\"alert\">\n                <div *ngIf=\"street.errors?.required\">\n                    Street is required\n                </div>\n            </div>\n            <label>\n                <p>Suite:</p>\n                <input type=\"text\" formControlName=\"suite\">\n            </label>\n            <div *ngIf=\"suite.invalid && (suite.dirty || suite.touched)\" class=\"alert\">\n                <div *ngIf=\"suite.errors?.required\">\n                    Suite is required\n                </div>\n            </div>\n            <label>\n                <p>City:</p>\n                <input type=\"text\" formControlName=\"city\">\n            </label>\n            <div *ngIf=\"city.invalid && (city.dirty || city.touched)\" class=\"alert\">\n                <div *ngIf=\"city.errors?.required\">\n                    City is required\n                </div>\n            </div>\n            <label>\n                <p>ZIP Code:</p>\n                <input type=\"text\" formControlName=\"zipcode\">\n            </label>\n            <div *ngIf=\"zipcode.invalid && (zipcode.dirty || zipcode.touched)\" class=\"alert\">\n                <div *ngIf=\"zipcode.errors?.required\">\n                    ZIP Code is required\n                </div>\n                <div *ngIf=\"zipcode.errors?.pattern\">\n                    ZIP Code format must be XXXXX or XXXXX-XXXX (each X is an integer)\n                </div>\n            </div>\n            <label>\n                <p>Latitude:</p>\n                <input type=\"text\" formControlName=\"lat\">\n            </label>\n            <div *ngIf=\"lat.invalid && (lat.dirty || lat.touched)\" class=\"alert\">\n                <div *ngIf=\"lat.errors?.required\">\n                    Latitude is required\n                </div>\n                <div *ngIf=\"lat.errors?.pattern\">\n                    Latitude format must be XX.XXXX or XXX.XXXX (e.g. -37.3159)\n                </div>\n            </div>\n            <label>\n                <p>Longitude:</p>\n                <input type=\"text\" formControlName=\"lng\">\n            </label>\n            <div *ngIf=\"lng.invalid && (lng.dirty || lng.touched)\" class=\"alert\">\n                <div *ngIf=\"lng.errors?.required\">\n                    Longitude is required\n                </div>\n                <div *ngIf=\"lng.errors?.pattern\">\n                    Longitude format must be XX.XXXX or XXX.XXXX (e.g. 81.1496)\n                </div>\n            </div>\n        </div>\n        <div class=\"formGroup\">\n            <label>\n                Phone Number:\n                <input type=\"text\" formControlName=\"phone\">\n            </label>\n            <div *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\" class=\"alert\">\n                <div *ngIf=\"phone.errors?.required\">\n                    Phone number is required\n                </div>\n                <div *ngIf=\"phone.errors?.pattern\">\n                    <p>Phone number invalid</p>\n                    <p>Examples of valid phone numbers:</p>\n                    <ul>\n                        <li>18051231234</li>\n                        <li>1-805-123-1234</li>\n                        <li>1-805-123-1234 x1234</li>\n                    </ul>\n                </div>\n            </div>\n            <label>\n                Website:\n                <input type=\"text\" formControlName=\"website\">\n            </label>\n            <div *ngIf=\"website.invalid && (website.dirty || website.touched)\" class=\"alert\">\n                <div *ngIf=\"website.errors?.required\">\n                    Website is required\n                </div>\n            </div>\n        </div>\n        <div class=\"formGroup\" formGroupName=\"company\">\n            <h3>Company</h3>\n            <label>\n                Name:\n                <input type=\"text\" formControlName=\"name\">\n            </label>\n            <div *ngIf=\"companyName.invalid && (companyName.dirty || companyName.touched)\" class=\"alert\">\n                <div *ngIf=\"companyName.errors?.required\">\n                    Company name is required\n                </div>\n            </div>\n            <label>\n                Catchphrase:\n                <input type=\"text\" formControlName=\"catchPhrase\">\n            </label>\n            <div *ngIf=\"catchPhrase.invalid && (catchPhrase.dirty || catchPhrase.touched)\" class=\"alert\">\n                <div *ngIf=\"catchPhrase.errors?.required\">\n                    Catchphrase is required\n                </div>\n            </div>\n            <label>\n                <p>BS:</p>\n                <input type=\"text\" formControlName=\"bs\">\n            </label>\n            <div *ngIf=\"bs.invalid && (bs.dirty || bs.touched)\" class=\"alert\">\n                <div *ngIf=\"bs.errors?.required\">\n                    BS is required\n                </div>\n            </div>\n        </div>\n        <button type=\"submit\" class=\"submit-button\" [disabled]=\"userForm.invalid\">Submit</button>\n    </form>\n</div>";
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


    __webpack_exports__["default"] = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/article-list/article-list.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/article-list/article-list.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppArticleListArticleListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"articles\">\n    <a routerLink=\"/users\" class=\"back-button\">Back to Users</a>\n    <h2 class=\"articles__heading\">Showing Articles by <a routerLink=\"/users/{{user.id}}\">{{user.name}}</a></h2>\n    <div class=\"articles__container\">\n        <div class=\"article\" *ngFor=\"let article of articles; let i = index\">\n            <a routerLink=\"/users/{{user.id}}/articles/{{article.id}}\">\n                <img src=\"assets/images/computer.jpg\" class=\"article__image\" *ngIf=\"i % 2 === 0\">\n                <img src=\"assets/images/phone.jpg\" class=\"article__image\" *ngIf=\"i % 2 === 1\">\n            </a>\n            <p class=\"article__image-caption\" *ngIf=\"i % 2 === 0\">\n                Laptop and DJ Controller (Photo by <a href=\"https://pixnio.com/author/milim84\">Marko Milivojevic</a>)\n            </p>\n            <p class=\"article__image-caption\" *ngIf=\"i % 2 === 1\">\n                Charging phone (<a href=\"https://pixnio.com/objects/electronics-devices/iphone-pictures/mobile-phone-computer-screen-technology-telephone-wireless-portable-business\">Source</a>)\n            </p>\n            <h2 class=\"article__title\">\n                <a routerLink=\"/users/{{user.id}}/articles/{{article.id}}\">\n                    {{article.title | titlecase}}\n                </a>\n            </h2>\n            <div class=\"article__author\">\n                <div class=\"article__profile-image\">\n                    <i class=\"far fa-user-circle\"></i>\n                </div>\n                <p class=\"article__byline\" style=\"margin-left: 10px\">\n                    Posted by \n                    <a routerLink=\"/users/{{user.id}}\" class=\"article__profile-link\">\n                        {{user.name}}\n                    </a>\n                    on 12/10/2021\n                </p>\n            </div>\n            <p>\n                {{article.body}}\n                <a routerLink=\"/users/{{user.id}}/articles/{{article.id}}\" class=\"article__read-more-link\">\n                    ...Read More\n                </a>\n            </p>\n        </div>\n    </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/article/article.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/article/article.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppArticleArticleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"article\">\n    <a routerLink=\"/users/{{user.id}}/articles\" class=\"back-button\">Back to Articles</a>\n    <div class=\"article__container\">\n        <img src=\"assets/images/computer.jpg\" class=\"article__image\" *ngIf=\"articleId % 2 === 1\">\n        <p class=\"article__image-caption\" *ngIf=\"articleId % 2 === 1\">Photo by <a href=\"https://pixnio.com/author/milim84\">Marko Milivojevic</a></p>\n        <img src=\"assets/images/phone.jpg\" class=\"article__image\" *ngIf=\"articleId % 2 === 0\">\n        <p class=\"article__image-caption\" *ngIf=\"articleId % 2 === 0\"><a href=\"https://pixnio.com/objects/electronics-devices/iphone-pictures/mobile-phone-computer-screen-technology-telephone-wireless-portable-business\">Link to Image Source</a></p>\n        <h2 class=\"article__heading\">{{article.title | titlecase }}</h2>\n        <div class=\"article__author\">\n            <div class=\"article__profile-image\">\n                <i class=\"far fa-user-circle\"></i>\n            </div>\n            <p class=\"article__byline\" style=\"margin-left: 10px\">\n                Posted by \n                <a routerLink=\"/users/{{user.id}}\" class=\"article__profile-link\">\n                    {{user.name}}\n                </a>\n                on 12/10/2021\n            </p>\n        </div>\n        <div class=\"article__body\">\n            <p>{{article.body}}</p>\n            <p>\n                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum blanditiis voluptate nostrum?\n                Corrupti quasi officiis obcaecati at reiciendis voluptatibus, eligendi debitis excepturi\n                tenetur quidem labore. Reiciendis officiis illum possimus explicabo.\n            </p>\n            <p>\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque unde earum rerum quia\n                vero omnis quos consequuntur necessitatibus! Possimus beatae omnis optio reprehenderit\n                molestiae commodi cum mollitia incidunt non perspiciatis, illo voluptatibus distinctio\n                modi earum praesentium molestias sapiente ducimus deserunt iste recusandae eos itaque\n                illum neque ea? Distinctio, repudiandae.\n            </p>\n            <p>\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quidem! Illum voluptate\n                nostrum eveniet officiis consequatur inventore mollitia iste iusto pariatur hic sequi\n                debitis placeat cumque, vitae dolor sit iure corporis accusantium sint velit ipsum eos\n                doloribus! Accusamus possimus iste ipsa id animi enim neque odio aperiam laborum ducimus\n                quisquam iusto quos architecto assumenda optio repudiandae laudantium nisi debitis officia\n                similique reiciendis perspiciatis, repellat a fugiat. Magnam porro dolor animi delectus quia\n                ad perferendis sapiente, mollitia maxime tenetur iure illo?\n            </p>\n            <p>\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. At, autem!\n            </p>\n        </div>\n    </div>\n</section>\n<section class=\"comments\">\n    <div class=\"comments__container\">\n        <h2 class=\"comments__heading\">Comments</h2>\n        <div class=\"comments__body\">\n            <div class=\"comment\" *ngFor=\"let comment of comments\">\n                <div class=\"comment__heading\" style=\"align-items: center; display: flex\">\n                    <div class=\"comment__profile-image\">\n                        <i class=\"far fa-user-circle\"></i>\n                    </div>\n                    <p class=\"comment__email\">{{comment.email}} says:</p>\n                </div>\n                <p class=\"comment__name\">{{comment.name}}</p>\n                <p class=\"comment__body\">{{comment.body}}</p>\n                <p class=\"comment__datetime\">Posted on 12/10/2021 at 10:30PM</p>\n            </div>\n        </div>\n    </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer\">\n  <div class=\"footer-container\">\n    <div class=\"footer-section\">\n      <h3 class=\"footer-section-heading\">Links</h3>\n      <ul>\n        <li><a href=\"https://github.com/bryanc123/Employee-Records-Angular\">Source Code</a></li>\n        <li><a href=\"https://bryanc123.github.io/Personal-Website/\">Personal Portfolio</a></li>\n      </ul>\n    </div>\n    <div class=\"footer-section\">\n      <h3 class=\"footer-section-heading\">Other Projects</h3>\n      <ul>\n        <li><a href=\"https://bryanc123.github.io/Mobile-First-Design/\">Mobile First Website</a></li>\n        <li><a href=\"https://bryanc123.github.io/Plain-JavaScript-Quiz/\">Quiz App</a></li>\n        <li><a href=\"https://bryanc123.github.io/Users-and-Posts/\">Users and Posts</a></li>\n      </ul>\n    </div>\n    <div class=\"footer-section\">\n      <h3 class=\"footer-section-heading\">Contact</h3>\n      <ul>\n        <li>Phone Number: 1-805-608-0066</li>\n        <li>Email: cayanan.bryanau@gmail.com</li>\n      </ul>\n    </div>\n  </div>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\n  <div class=\"header\">\n    <h1 class=\"header__title\">\n      <i class=\"fas fa-database\"></i><a href=\"/\">{{title}}</a>\n    </h1>\n    <ul class=\"navigation-menu\">\n      <li><a routerLink=\"/\">Home</a></li>\n      <li><a routerLink=\"/users\">Records</a></li>\n      <li><a routerLink=\"/add-user\">Add User</a></li>\n    </ul>\n    <a href=\"javascript:void(0);\" class=\"hamburger-menu-icon\" onClick=\"toggleMenu()\">\n      <i class=\"fa fa-bars fa-2x\"></i>\n      <i class=\"fa fa-times fa-2x\"></i>\n    </a>\n  </div>\n</header>\n<div class=\"hamburger-menu\">\n  <a routerLink=\"/\">Home</a>\n  <a routerLink=\"/users\">Records</a>\n  <a routerLink=\"/add-user\">Add User</a>\n</div>\n<div class=\"introductory-text-container\">\n  This application pulls data from the \n  <a href=\"https://jsonplaceholder.typicode.com\">JSONPlaceholder API</a>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n    <div class=\"menu-item-container\">\n        <h2>\n            View employee records\n        </h2>\n        <p>\n            Details include:\n        </p>\n        <ul>\n            <li>Name</li>\n            <li>Email</li>\n            <li>Phone Number</li>\n            <li>Website</li>\n            <li>Company Name</li>\n        </ul>\n        <div class=\"button-container\">\n        <button routerLink=\"/users\" class=\"user-records-button\">User Records</button>\n        </div>\n    </div>\n    <div class=\"menu-item-container\">\n        <h2>\n            Create an employee record\n        </h2>\n        <p>\n            <strong>Note:</strong> JSONPlaceholder is only a <strong>test API</strong>, so POST requests do not actually modify data on the server\n        </p>\n        <div class=\"button-container\">\n        <button routerLink=\"/add-user\" class=\"add-user-button\">Add User</button>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-detail/user-detail.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-detail/user-detail.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserDetailUserDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"users\">\n    <a routerLink=\"/users\" class=\"back-button\">Back to User Records</a>\n    <h2 class=\"user-heading\">{{user.name}} Profile</h2>\n    <div class=\"user-container\">\n        <div class=\"user-record\">\n            <div class=\"user-record__avatar-container\">\n                <div class=\"user-record__avatar\">\n                    <i class=\"far fa-user-circle fa-5x\"></i>\n                </div>\n            </div>\n            <div class=\"user-record__details\">\n                <p><span class=\"user-record__field\">Email:</span> {{user.email}}</p>\n                <p><span class=\"user-record__field\">Address:</span> {{user.address.street}}, {{user.address.suite}}, {{user.address.city}}</p>\n                <p><span class=\"user-record__field\">Phone Number:</span> {{user.phone}}</p>\n                <p><span class=\"user-record__field\">Website:</span> {{user.website}}</p>\n                <p><span class=\"user-record__field\">Company:</span> {{user.company.name}}</p>\n                <p><span class=\"user-record__catchphrase\">\"{{user.company.catchPhrase}}\"</span></p>\n                <p>\n                    <span class=\"user-record__field\">Description:</span>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                    Praesent interdum condimentum mauris id condimentum.\n                    Nunc egestas sapien quis velit aliquet hendrerit.\n                    Integer vitae felis hendrerit, sollicitudin lacus vel, scelerisque dolor.\n                </p>\n                <a routerLink=\"/users/{{user.id}}/articles\" class=\"user-record__articles-button\">\n                    &gt; Read Articles by this User\n                </a>\n            </div>\n        </div>\n    </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserListUserListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"users\">\n    <a routerLink=\"/\" class=\"back-button\">Back to Home</a>\n    <div class=\"user-container\">\n        <div class=\"user-record\" *ngFor=\"let user of users\">\n            <div class=\"user-record__avatar-container\">\n                <div class=\"user-record__avatar\">\n                    <a routerLink=\"/users/{{user.id}}\">\n                        <i class=\"far fa-user-circle fa-5x\"></i>\n                    </a>\n                </div>\n            </div>\n            <div class=\"user-record__details\">\n                <h3>\n                    <a routerLink=\"/users/{{user.id}}\">\n                        <span class=\"user-record__name\">{{user.name}}</span>\n                    </a>\n                </h3>\n                <p><span class=\"user-record__field\">Email:</span> {{user.email}}</p>\n                <p><span class=\"user-record__field\">Phone Number:</span> {{user.phone}}</p>\n                <p><span class=\"user-record__field\">Website:</span> {{user.website}}</p>\n                <p><span class=\"user-record__field\">Company:</span> {{user.company.name}}</p>\n                <p><span class=\"user-record__catchphrase\">\"{{user.company.catchPhrase}}\"</span></p>\n                <a routerLink=\"/users/{{user.id}}/articles\" class=\"user-record__articles-button\">\n                    &gt; Read Articles by this User\n                </a>\n            </div>\n        </div>\n    </div>\n</section>";
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


    __webpack_exports__["default"] = "h2 {\n    border-bottom:2px solid orange;\n    margin-bottom: 20px;\n}\n\nh3 {\n    margin-bottom: 10px;\n    text-decoration: underline;\n}\n\ninput[type=\"text\"] {\n    font-size: 1em;\n    margin-bottom: 15px;\n    width: 250px;\n}\n\np {\n    margin-bottom: 10px;\n}\n\nul {\n    list-style-type: none;\n}\n\nul li {\n    margin-bottom: 10px;\n}\n\n/* Back Button */\n\n.back-button {\n    background-color: orange;\n    border-radius: 10px;\n    color: black;\n    display: inline-block;\n    margin: 20px;\n    padding: 10px;\n    text-decoration: none;\n    transition-duration: 0.2s;\n}\n\n.back-button:hover {\n    background-color: #FFD280;\n    cursor: pointer;\n}\n\n/* Note */\n\n.note {\n    padding: 0 20px;\n    text-align: center;\n}\n\n/* Success Message */\n\n.success-container {\n    padding: 0 20px;\n    text-align: center;\n}\n\n.success {\n    background-color: #F1F8E9;\n    border-left: 5px solid green;\n    display: flex;\n    justify-content: space-between;\n    margin: 20px auto;\n    max-width: 500px;\n    padding: 20px;\n}\n\n.fa-times {\n    cursor: pointer;\n}\n\n/* Form */\n\n.formContainer {\n    background:white;\n    border: 2px solid #D8D8D8;\n    margin: 20px auto;\n    padding: 20px;\n    width: 90%;\n}\n\n.formGroup {\n    margin-bottom: 20px;\n}\n\n.userForm {\n    display:flex;\n    flex-direction: column;\n}\n\n.invalid-input {\n    border: 1px solid red;\n}\n\n.alert {\n    color: red;\n    margin-bottom: 10px;\n}\n\n.submit-button {\n    background-color: orange;\n    border: none;\n    border-radius: 20px;\n    font-size: 24px;\n    font-weight: bold;\n    margin-bottom: 20px;\n    padding: 10px 20px;\n}\n\n.submit-button:hover {\n    background-color: #FFD280;\n    cursor: pointer;\n}\n\n.submit-button:disabled {\n    background-color: #C8C8C8;\n    cursor: default;\n}\n\n@media only screen and (min-width: 500px) {\n    .formContainer {\n        width: 320px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXVzZXIvYWRkLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBLGdCQUFnQjs7QUFFaEI7SUFDSSx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUEsU0FBUzs7QUFFVDtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUEsb0JBQW9COztBQUVwQjtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSxTQUFTOztBQUVUO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYWRkLXVzZXIvYWRkLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCBvcmFuZ2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaDMge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHdpZHRoOiAyNTBweDtcbn1cblxucCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbnVsIGxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4vKiBCYWNrIEJ1dHRvbiAqL1xuXG4uYmFjay1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG59XG4uYmFjay1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkQyODA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBOb3RlICovXG5cbi5ub3RlIHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBTdWNjZXNzIE1lc3NhZ2UgKi9cblxuLnN1Y2Nlc3MtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjhFOTtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGdyZWVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmZhLXRpbWVzIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIEZvcm0gKi9cblxuLmZvcm1Db250YWluZXIge1xuICAgIGJhY2tncm91bmQ6d2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0Q4RDhEODtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbi5mb3JtR3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi51c2VyRm9ybSB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5pbnZhbGlkLWlucHV0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbi5hbGVydCB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbi5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEMjgwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zdWJtaXQtYnV0dG9uOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhDOEM4O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAgIC5mb3JtQ29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xuICAgIH1cbn0iXX0= */";
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
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z ]+')]),
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email),
          address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            suite: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            zipcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{5}(?:-[0-9]{4})?$')]),
            lat: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^-?[0-9]{2,3}\.[0-9]{4}$')]),
            lng: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^-?[0-9]{2,3}\.[0-9]{4}$')])
          }),
          phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[ ]*(?:[ ]?([0-9]{1,3}))?[-. (]*([0-9]{3})[-. )]*([0-9]{3})[-. ]*([0-9]{4})(?: *x([0-9]+))?[ ]*$')]),
          website: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          company: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            catchPhrase: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            bs: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
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
        key: "username",
        get: function get() {
          return this.userForm.get('username');
        }
      }, {
        key: "email",
        get: function get() {
          return this.userForm.get('email');
        }
      }, {
        key: "street",
        get: function get() {
          return this.userForm.get('address.street');
        }
      }, {
        key: "suite",
        get: function get() {
          return this.userForm.get('address.suite');
        }
      }, {
        key: "city",
        get: function get() {
          return this.userForm.get('address.city');
        }
      }, {
        key: "zipcode",
        get: function get() {
          return this.userForm.get('address.zipcode');
        }
      }, {
        key: "lat",
        get: function get() {
          return this.userForm.get('address.lat');
        }
      }, {
        key: "lng",
        get: function get() {
          return this.userForm.get('address.lng');
        }
      }, {
        key: "phone",
        get: function get() {
          return this.userForm.get('phone');
        }
      }, {
        key: "website",
        get: function get() {
          return this.userForm.get('website');
        }
      }, {
        key: "companyName",
        get: function get() {
          return this.userForm.get('company.name');
        }
      }, {
        key: "catchPhrase",
        get: function get() {
          return this.userForm.get('company.catchPhrase');
        }
      }, {
        key: "bs",
        get: function get() {
          return this.userForm.get('company.bs');
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
            console.log(_this.userForm.value);

            _this.userService.postUser(_this.userForm.value).subscribe(function (user) {
              console.log(user);
              _this.success = true;
              window.scrollTo(0, 0);
            }, function (error) {
              return _this.error = error;
            });

            _this.userForm.reset();
          });
        }
      }, {
        key: "closeSuccessMessage",
        value: function closeSuccessMessage() {
          this.success = false;
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
    /* harmony import */


    var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./article-list/article-list.component */
    "./src/app/article-list/article-list.component.ts");
    /* harmony import */


    var _article_article_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./article/article.component */
    "./src/app/article/article.component.ts");

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
    }, {
      path: "users/:id/articles",
      component: _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_7__["ArticleListComponent"]
    }, {
      path: "users/:id/articles/:articleId",
      component: _article_article_component__WEBPACK_IMPORTED_MODULE_8__["ArticleComponent"]
    }, {
      path: "**",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
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
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./article-list/article-list.component */
    "./src/app/article-list/article-list.component.ts");
    /* harmony import */


    var _article_article_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./article/article.component */
    "./src/app/article/article.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__["UserListComponent"], _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__["AddUserComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_13__["ArticleListComponent"], _article_article_component__WEBPACK_IMPORTED_MODULE_14__["ArticleComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/article-list/article-list.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/article-list/article-list.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppArticleListArticleListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".back-button {\n    background-color: orange;\n    border-radius: 10px;\n    color:black;\n    display: inline-block;\n    margin-bottom: 20px;\n    padding: 10px;\n    text-decoration: none;\n    transition-duration: 0.2s;\n}\n.back-button:hover {\n    background-color: #FFD280;\n}\n/* Articles */\n.articles {\n    background-color: #F0F0F0;\n    padding: 20px;\n}\n.articles__heading {\n    font-size: 0.8rem;\n    margin-bottom: 20px;\n}\n.articles__heading a {\n    color: black;\n    text-decoration: none;\n}\n.articles__heading a:hover {\n    color: rgba(0, 0, 0, 0.6);\n}\n.article {\n    background-color: white;\n    margin-bottom: 20px;\n    padding: 10px;\n}\n.article__image {\n    width: 100%;\n}\n.article__image-caption {\n    font-size: 14px;\n    margin-bottom: 20px;\n}\n.article__title {\n    margin-bottom: 10px;\n}\n.article__title a {\n    color: black;\n    text-decoration: none;\n}\n.article__title a:hover {\n    color: rgba(0, 0, 0, 0.6);\n}\n.article__author {\n    align-items: center;\n    display: flex;\n    margin-bottom: 20px;\n}\n.article__profile-image {\n    align-items: center;\n    background-color:#ACE1AF;\n    border-radius: 50%;\n    display: flex;\n    font-size: 44px;\n    height: 50px;\n    justify-content: center;\n    width: 50px;\n}\n.article__byline {\n    font-size: 0.8rem;\n    font-style: italic;\n    margin-bottom: 10px;\n}\n.article__profile-link {\n    color: black;\n    text-decoration: none;\n}\n.article__profile-link:hover {\n    color: rgba(0, 0, 0, 0.6);\n}\n.article__read-more-link {\n    color: black;\n    font-weight: bold;\n    text-decoration: none;\n}\n.article__read-more-link:hover {\n    color: rgba(0, 0, 0, 0.6);\n}\n@media only screen and (min-width: 500px) {\n    .articles__heading {\n        font-size: 1.2rem;\n    }\n}\n@media only screen and (min-width: 600px) {\n    .articles__container {\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n    }\n    .article {\n        max-width: 45vw;\n    }\n}\n@media only screen and (min-width: 1000px) {\n    .article {\n        max-width: 47vw;\n    }\n\n    .article__byline {\n        font-size: 16px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS1saXN0L2FydGljbGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUEsYUFBYTtBQUViO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IscUNBQXFDO0lBQ3pDO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUtbGlzdC9hcnRpY2xlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbn1cbi5iYWNrLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDI4MDtcbn1cblxuLyogQXJ0aWNsZXMgKi9cblxuLmFydGljbGVzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5hcnRpY2xlc19faGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5hcnRpY2xlc19faGVhZGluZyBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmFydGljbGVzX19oZWFkaW5nIGE6aG92ZXIge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi5hcnRpY2xlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5hcnRpY2xlX19pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5hcnRpY2xlX19pbWFnZS1jYXB0aW9uIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmFydGljbGVfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmFydGljbGVfX3RpdGxlIGEge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYXJ0aWNsZV9fdGl0bGUgYTpob3ZlciB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLmFydGljbGVfX2F1dGhvciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5hcnRpY2xlX19wcm9maWxlLWltYWdlIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6I0FDRTFBRjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDQ0cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4uYXJ0aWNsZV9fYnlsaW5lIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmFydGljbGVfX3Byb2ZpbGUtbGluayB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5hcnRpY2xlX19wcm9maWxlLWxpbms6aG92ZXIge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi5hcnRpY2xlX19yZWFkLW1vcmUtbGluayB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5hcnRpY2xlX19yZWFkLW1vcmUtbGluazpob3ZlciB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAgIC5hcnRpY2xlc19faGVhZGluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIC5hcnRpY2xlc19fY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICB9XG4gICAgLmFydGljbGUge1xuICAgICAgICBtYXgtd2lkdGg6IDQ1dnc7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAgIC5hcnRpY2xlIHtcbiAgICAgICAgbWF4LXdpZHRoOiA0N3Z3O1xuICAgIH1cblxuICAgIC5hcnRpY2xlX19ieWxpbmUge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/article-list/article-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/article-list/article-list.component.ts ***!
    \********************************************************/

  /*! exports provided: ArticleListComponent */

  /***/
  function srcAppArticleListArticleListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function () {
      return ArticleListComponent;
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
    /* harmony import */


    var _article_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../article.service */
    "./src/app/article.service.ts");

    var ArticleListComponent = /*#__PURE__*/function () {
      function ArticleListComponent(userService, articleService, route, router) {
        _classCallCheck(this, ArticleListComponent);

        this.userService = userService;
        this.articleService = articleService;
        this.route = route;
        this.router = router;
      }

      _createClass(ArticleListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.paramMap.subscribe(function (params) {
            var id = parseInt(params.get('id'));
            _this2.userId = id;

            _this2.getUser(id);

            _this2.getArticles(id);
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
      }, {
        key: "getArticles",
        value: function getArticles(id) {
          var _this4 = this;

          this.articleService.getArticles(id).subscribe(function (articles) {
            return _this4.articles = articles;
          }, function (error) {
            return _this4.error = error;
          });
        }
      }]);

      return ArticleListComponent;
    }();

    ArticleListComponent.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ArticleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-article-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./article-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/article-list/article-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./article-list.component.css */
      "./src/app/article-list/article-list.component.css"))["default"]]
    })], ArticleListComponent);
    /***/
  },

  /***/
  "./src/app/article.service.ts":
  /*!************************************!*\
    !*** ./src/app/article.service.ts ***!
    \************************************/

  /*! exports provided: ArticleService */

  /***/
  function srcAppArticleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleService", function () {
      return ArticleService;
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

    var ArticleService = /*#__PURE__*/function () {
      function ArticleService(http) {
        _classCallCheck(this, ArticleService);

        this.http = http;
        this.articlesUrl = 'https://jsonplaceholder.typicode.com/posts';
      }

      _createClass(ArticleService, [{
        key: "getArticles",
        value: function getArticles(userId) {
          return this.http.get(this.articlesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (articles) {
            return articles.filter(function (article) {
              return article.userId === userId;
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "getArticle",
        value: function getArticle(id, articleId) {
          return this.getArticles(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (articles) {
            return articles.find(function (article) {
              return article.id === articleId;
            });
          }));
        }
      }, {
        key: "postArticle",
        value: function postArticle(article) {
          var headers = new Headers({
            'Content-Type': 'application/json'
          });
          return this.http.post(this.articlesUrl, article).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(res) {
          console.error(res.error || res.body.error);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(res.error || 'Server error');
        }
      }]);

      return ArticleService;
    }();

    ArticleService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    ArticleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], ArticleService);
    /***/
  },

  /***/
  "./src/app/article/article.component.css":
  /*!***********************************************!*\
    !*** ./src/app/article/article.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppArticleArticleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".back-button {\n    background-color: orange;\n    border-radius: 10px;\n    color:black;\n    display: inline-block;\n    margin-bottom: 20px;\n    padding: 10px;\n    text-decoration: none;\n    transition-duration: 0.2s;\n}\n.back-button:hover {\n    background-color: #FFD280;\n}\n/* Article */\n.article {\n    background-color: #F0F0F0;\n    padding: 20px;\n}\n.article__container {\n    background-color: white;\n    padding: 20px;\n}\n.article__image {\n    width: 100%;\n}\n.article__image-caption {\n    margin-bottom: 20px;\n}\n.article__heading {\n    margin-bottom: 10px;\n}\n.article__author {\n    align-items: center;\n    display: flex;\n    margin-bottom: 20px;\n}\n.article__profile-image {\n    align-items: center;\n    background-color:#ACE1AF;\n    border-radius: 50%;\n    display: flex;\n    font-size: 44px;\n    height: 50px;\n    justify-content: center;\n    width: 50px;\n}\n.article__byline {\n    font-size: 0.8rem;\n    font-style: italic;\n    margin-bottom: 10px;\n}\n.article__profile-link {\n    color: black;\n    text-decoration: none;\n}\n.article__profile-link:hover {\n    color: rgba(0, 0, 0, 0.6);\n}\n.article__body p {\n    margin-bottom: 20px;\n}\n/* Comments */\n.comments {\n    background-color: #F0F0F0;\n    padding: 20px;\n}\n.comments__container {\n    background-color: white;\n    padding: 20px;\n}\n.comment {\n    padding: 20px 0;\n}\n.comment:not(:last-child) {\n    border-bottom: 1px solid black;\n}\n.comment__heading {\n    margin-bottom: 20px;\n}\n.comment__profile-image {\n    align-items: center;\n    background-color:#ACE1AF;\n    border-radius: 50%;\n    display: flex;\n    font-size: 44px;\n    height: 50px;\n    justify-content: center;\n    width: 50px;\n}\n.comment__email {\n    margin-left: 10px;\n}\n.comment__name {\n    font-weight: bold;\n    margin-bottom: 10px;\n}\n.comment__datetime {\n    font-style: italic;\n    margin-top: 20px;\n}\n@media only screen and (min-width: 800px) {\n    .article__container {\n        max-width: 700px;\n    }\n\n    .comments__container {\n        max-width: 700px;\n    }\n}\n@media only screen and (min-width: 1000px) {\n    .article__byline {\n        font-size: 16px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQSxZQUFZO0FBRVo7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztBQUNmO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQSxhQUFhO0FBRWI7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztBQUNmO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG59XG4uYmFjay1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkQyODA7XG59XG5cbi8qIEFydGljbGUgKi9cblxuLmFydGljbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmFydGljbGVfX2NvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmFydGljbGVfX2ltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmFydGljbGVfX2ltYWdlLWNhcHRpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5hcnRpY2xlX19oZWFkaW5nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYXJ0aWNsZV9fYXV0aG9yIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmFydGljbGVfX3Byb2ZpbGUtaW1hZ2Uge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojQUNFMUFGO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogNDRweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwcHg7XG59XG5cbi5hcnRpY2xlX19ieWxpbmUge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYXJ0aWNsZV9fcHJvZmlsZS1saW5rIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmFydGljbGVfX3Byb2ZpbGUtbGluazpob3ZlciB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLmFydGljbGVfX2JvZHkgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLyogQ29tbWVudHMgKi9cblxuLmNvbW1lbnRzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5jb21tZW50c19fY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uY29tbWVudCB7XG4gICAgcGFkZGluZzogMjBweCAwO1xufVxuLmNvbW1lbnQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uY29tbWVudF9faGVhZGluZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNvbW1lbnRfX3Byb2ZpbGUtaW1hZ2Uge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojQUNFMUFGO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogNDRweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwcHg7XG59XG5cbi5jb21tZW50X19lbWFpbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5jb21tZW50X19uYW1lIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY29tbWVudF9fZGF0ZXRpbWUge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gICAgLmFydGljbGVfX2NvbnRhaW5lciB7XG4gICAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgfVxuXG4gICAgLmNvbW1lbnRzX19jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuYXJ0aWNsZV9fYnlsaW5lIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/article/article.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/article/article.component.ts ***!
    \**********************************************/

  /*! exports provided: ArticleComponent */

  /***/
  function srcAppArticleArticleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleComponent", function () {
      return ArticleComponent;
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
    /* harmony import */


    var _article_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../article.service */
    "./src/app/article.service.ts");
    /* harmony import */


    var _comment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../comment.service */
    "./src/app/comment.service.ts");

    var ArticleComponent = /*#__PURE__*/function () {
      function ArticleComponent(userService, articleService, commentService, route, router) {
        _classCallCheck(this, ArticleComponent);

        this.userService = userService;
        this.articleService = articleService;
        this.commentService = commentService;
        this.route = route;
        this.router = router;
      }

      _createClass(ArticleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.route.paramMap.subscribe(function (params) {
            var id = parseInt(params.get('id'));
            var articleId = parseInt(params.get('articleId'));
            _this5.userId = id;
            _this5.articleId = articleId;

            _this5.getUser(id);

            _this5.getArticle(id, articleId);

            _this5.getComments(articleId);
          });
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          var _this6 = this;

          this.userService.getUser(id).subscribe(function (user) {
            return _this6.user = user;
          }, function (error) {
            return _this6.error = error;
          });
        }
      }, {
        key: "getArticle",
        value: function getArticle(id, articleId) {
          var _this7 = this;

          this.articleService.getArticle(id, articleId).subscribe(function (article) {
            return _this7.article = article;
          }, function (error) {
            return _this7.error = error;
          });
        }
      }, {
        key: "getComments",
        value: function getComments(articleId) {
          var _this8 = this;

          this.commentService.getComments(articleId).subscribe(function (comments) {
            return _this8.comments = comments;
          }, function (error) {
            return _this8.error = error;
          });
        }
      }]);

      return ArticleComponent;
    }();

    ArticleComponent.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"]
      }, {
        type: _comment_service__WEBPACK_IMPORTED_MODULE_5__["CommentService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-article',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./article.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/article/article.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./article.component.css */
      "./src/app/article/article.component.css"))["default"]]
    })], ArticleComponent);
    /***/
  },

  /***/
  "./src/app/comment.service.ts":
  /*!************************************!*\
    !*** ./src/app/comment.service.ts ***!
    \************************************/

  /*! exports provided: CommentService */

  /***/
  function srcAppCommentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentService", function () {
      return CommentService;
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

    var CommentService = /*#__PURE__*/function () {
      function CommentService(http) {
        _classCallCheck(this, CommentService);

        this.http = http;
        this.commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
      }

      _createClass(CommentService, [{
        key: "getComments",
        value: function getComments(articleId) {
          return this.http.get(this.commentsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (comments) {
            return comments.filter(function (comment) {
              return comment.postId === articleId;
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(res) {
          console.error(res.error || res.body.error);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(res.error || 'Server error');
        }
      }]);

      return CommentService;
    }();

    CommentService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    CommentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], CommentService);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer {\n    background-color: orange;\n    flex-shrink: 0;\n    padding: 20px;\n}\n\n.footer-container {\n    display: grid;\n    grid-template-columns: 3fr 2fr 2fr;\n    max-width: 900px;\n}\n\n.footer-section-heading {\n    margin-bottom: 10px;\n    text-decoration: underline;\n}\n\n.footer-section ul {\n    list-style: none;\n}\n\n.footer-section ul li {\n    margin-bottom: 10px;\n}\n\n.footer-section ul li a {\n    color: black;\n    text-decoration: none;\n}\n\n.footer-section ul li a:hover {\n    color: rgba(0, 0, 0, 0.8);\n}\n\n@media screen and (max-width: 600px) {\n    .footer-container {\n        grid-template-columns: 1fr;\n    }\n    .footer-section {\n        margin-bottom: 20px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZm9vdGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnIgMmZyO1xuICAgIG1heC13aWR0aDogOTAwcHg7XG59XG5cbi5mb290ZXItc2VjdGlvbi1oZWFkaW5nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZm9vdGVyLXNlY3Rpb24gdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uZm9vdGVyLXNlY3Rpb24gdWwgbGkge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZm9vdGVyLXNlY3Rpb24gdWwgbGkgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5mb290ZXItc2VjdGlvbiB1bCBsaSBhOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5mb290ZXItY29udGFpbmVyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuICAgIC5mb290ZXItc2VjdGlvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');\n\n.header {\n    align-items: center;\n    background: linear-gradient(orange 10%, 80%, #FFD280 100%);\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    padding: 20px;\n}\n\n.header__title a {\n    color: black;\n    font-family: Ubuntu;\n    font-size: 1.8rem;\n    margin-left: 10px;\n    text-decoration: none;\n}\n\n.navigation-menu {\n    display: flex;\n    justify-self: end;\n    list-style: none;\n}\n\n.navigation-menu li a {\n    color: black;\n    padding: 10px 30px;\n    text-decoration: none;\n    transition-duration: 0.2s;\n}\n\n.navigation-menu li:not(:last-child) a {\n    border-right: 1px solid black;\n}\n\n.navigation-menu li a:hover {\n    background-color: #FFD280;\n    cursor: pointer;\n}\n\n.hamburger-menu-icon {\n    color: black;\n    display: none;\n    flex-grow: 1;\n    text-align: right;\n    text-decoration: none;\n}\n\n.fa-times {\n    display: none;\n}\n\n/* Hamburger Menu */\n\n.hamburger-menu {\n    background-color: orange;\n    display: none;\n    flex-direction: column;\n}\n\n.hamburger-menu a {\n    border-bottom: 1px solid #FFD280;\n    color: black;\n    padding: 10px 20px;\n    text-decoration: none;\n    transition-duration: 0.2s;\n}\n\n.hamburger-menu a:hover {\n    background-color: #FFD280;\n}\n\n.introductory-text-container {\n    background-color: yellow;\n    padding: 20px;\n}\n\n@media screen and (max-width: 600px){\n\n    .header__title a {\n        font-size: 1.2rem;\n    }\n}\n\n@media screen and (max-width: 800px){\n\n    .navigation-menu {\n        display: none;\n    }\n\n    .hamburger-menu-icon {\n        display: block;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9GQUFvRjs7QUFFcEY7SUFDSSxtQkFBbUI7SUFDbkIsMERBQTBEO0lBQzFELGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLG1CQUFtQjs7QUFFbkI7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVVidW50dTp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcblxuLmhlYWRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQob3JhbmdlIDEwJSwgODAlLCAjRkZEMjgwIDEwMCUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uaGVhZGVyX190aXRsZSBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6IFVidW50dTtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5uYXZpZ2F0aW9uLW1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5uYXZpZ2F0aW9uLW1lbnUgbGkgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbn1cbi5uYXZpZ2F0aW9uLW1lbnUgbGk6bm90KDpsYXN0LWNoaWxkKSBhIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbn1cbi5uYXZpZ2F0aW9uLW1lbnUgbGkgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDI4MDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oYW1idXJnZXItbWVudS1pY29uIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZhLXRpbWVzIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBIYW1idXJnZXIgTWVudSAqL1xuXG4uaGFtYnVyZ2VyLW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaGFtYnVyZ2VyLW1lbnUgYSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGRkQyODA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbn1cbi5oYW1idXJnZXItbWVudSBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEMjgwO1xufVxuXG4uaW50cm9kdWN0b3J5LXRleHQtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xuXG4gICAgLmhlYWRlcl9fdGl0bGUgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xuXG4gICAgLm5hdmlnYXRpb24tbWVudSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmhhbWJ1cmdlci1tZW51LWljb24ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.title = "Employee Database";
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ul {\n    list-style-type: none;\n    margin: 0 0 40px 20px;\n}\n\nul li {\n    margin-bottom: 5px;\n}\n\n.wrapper {\n    display: flex;\n    flex-direction: column;\n    margin: auto;\n    max-width: 800px;\n    padding: 20px;\n}\n\n.menu-item-container {\n    background-color: #D8D8D8;\n    border-left: 5px solid orange;\n    margin-bottom: 40px;\n    padding: 20px;\n}\n\n.menu-item-container h2 {\n    font-size: 1.5rem;\n    margin-bottom: 20px;\n}\n\n.menu-item-container p {\n    margin-bottom: 20px;\n}\n\nbutton {\n    background-color: orange;\n    border: none;\n    border-radius: 20px;\n    font-size: 24px;\n    font-weight: bold;\n    padding: 20px;\n    transition-duration: 0.2s;\n}\n\nbutton:hover {\n    background-color: #FFD280;\n    cursor: pointer;\n}\n\n@media screen and (min-height: 1000px) {\n    .wrapper {\n        min-height: 800px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDAgMCA0MHB4IDIwcHg7XG59XG5cbnVsIGxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLm1lbnUtaXRlbS1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEOEQ4RDg7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBvcmFuZ2U7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ubWVudS1pdGVtLWNvbnRhaW5lciBoMiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm1lbnUtaXRlbS1jb250YWluZXIgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEMjgwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDEwMDBweCkge1xuICAgIC53cmFwcGVyIHtcbiAgICAgICAgbWluLWhlaWdodDogODAwcHg7XG4gICAgfVxufSJdfQ== */";
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
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/user-detail/user-detail.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/user-detail/user-detail.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserDetailUserDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".back-button {\n    background-color: orange;\n    border-radius: 10px;\n    color:black;\n    display: inline-block;\n    margin: 20px;\n    padding: 10px;\n    text-decoration: none;\n    transition-duration: 0.2s;\n}\n.back-button:hover {\n    background-color: #FFD280;\n}\n/* User Record */\n.user-container {\n    background-color: #FFEDCC;\n}\n.user-heading {\n    margin: 0px 0px 10px 20px;\n}\n.user-record {\n    background-color: #FFEDCC;\n    display: flex;\n    padding: 20px;\n}\n.user-record__name { \n    margin-bottom: 10px;\n    text-align: center;\n}\n.user-record__avatar-container {\n    padding: 0 10px 20px 10px;\n    text-align: center;\n}\n.user-record__avatar {\n    align-items: center;\n    background-color:#ACE1AF;\n    border-radius: 50%;\n    display: flex;\n    font-size: 16px;\n    height: 100px;\n    justify-content: center;\n    margin: 0 auto;\n    width: 100px;\n}\n.user-record__details {\n    line-height: 30px;\n    margin-left: 20px;\n}\n.user-record__field {\n    font-weight: bold;\n}\n.user-record__catchphrase {\n    font-style: italic;\n}\n.user-record__articles-button {\n    display: inline-block;\n    font-size: 1.2rem;\n    font-weight: bold;\n    margin-top: 20px;\n    text-decoration: none;\n}\n.user-record__articles-button:hover {\n    text-decoration: underline;\n}\n@media screen and (max-width: 600px) {\n    .user-heading {\n        text-align: center;\n    }\n\n    .user-record {\n        flex-direction: column;\n    }\n}\n@media screen and (min-width: 750px) {\n    .user-container {\n        min-height: 450px;\n    }\n}\n@media screen and (min-width: 1300px) {\n    .user-container {\n        min-height: 500px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1kZXRhaWwvdXNlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBLGdCQUFnQjtBQUVoQjtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGFBQWE7QUFDakI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbn1cbi5iYWNrLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDI4MDtcbn1cblxuLyogVXNlciBSZWNvcmQgKi9cblxuLnVzZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFRENDO1xufVxuXG4udXNlci1oZWFkaW5nIHtcbiAgICBtYXJnaW46IDBweCAwcHggMTBweCAyMHB4O1xufVxuXG4udXNlci1yZWNvcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkVEQ0M7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udXNlci1yZWNvcmRfX25hbWUgeyBcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVzZXItcmVjb3JkX19hdmF0YXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDEwcHggMjBweCAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVzZXItcmVjb3JkX19hdmF0YXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojQUNFMUFGO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLnVzZXItcmVjb3JkX19kZXRhaWxzIHtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnVzZXItcmVjb3JkX19maWVsZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi51c2VyLXJlY29yZF9fY2F0Y2hwaHJhc2Uge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnVzZXItcmVjb3JkX19hcnRpY2xlcy1idXR0b24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi51c2VyLXJlY29yZF9fYXJ0aWNsZXMtYnV0dG9uOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAudXNlci1oZWFkaW5nIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC51c2VyLXJlY29yZCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkge1xuICAgIC51c2VyLWNvbnRhaW5lciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTMwMHB4KSB7XG4gICAgLnVzZXItY29udGFpbmVyIHtcbiAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgfVxufSJdfQ== */";
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
          var _this9 = this;

          this.route.paramMap.subscribe(function (params) {
            var id = parseInt(params.get('id'));
            _this9.userId = id;

            _this9.getUser(id);
          });
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          var _this10 = this;

          this.userService.getUser(id).subscribe(function (user) {
            return _this10.user = user;
          }, function (error) {
            return _this10.error = error;
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
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-detail/user-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-detail.component.css */
      "./src/app/user-detail/user-detail.component.css"))["default"]]
    })], UserDetailComponent);
    /***/
  },

  /***/
  "./src/app/user-list/user-list.component.css":
  /*!***************************************************!*\
    !*** ./src/app/user-list/user-list.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserListUserListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".back-button {\n    background-color: orange;\n    border-radius: 10px;\n    color:black;\n    display: inline-block;\n    margin: 20px;\n    padding: 10px;\n    text-decoration: none;\n    transition-duration: 0.2s;\n}\n.back-button:hover {\n    background-color: #FFD280;\n}\n/* Users Container */\n.user-container {\n    background-color: white;\n}\n.user-record {\n    display: flex;\n    padding: 20px;\n}\n.user-record:nth-child(odd) {\n    background-color: #FFEDCC\n}\n.user-record__avatar-container {\n    padding: 0 10px 20px 10px;\n    text-align: center;\n}\n.user-record__avatar-container a {\n    color: black;\n    text-decoration: none;\n}\n.user-record__avatar {\n    align-items: center;\n    background-color:#ACE1AF;\n    border-radius: 50%;\n    display: flex;\n    font-size: 16px;\n    height: 100px;\n    justify-content: center;\n    margin: 0 auto;\n    width: 100px;\n}\n.user-record__details {\n    line-height: 30px;\n    margin-left: 20px;\n}\n.user-record__name { \n    text-decoration: underline;\n}\n.user-record__field {\n    font-weight: bold;\n}\n.user-record__catchphrase {\n    font-style: italic;\n}\n.user-record__articles-button {\n    display: inline-block;\n    font-size: 1.2rem;\n    font-weight: bold;\n    margin-top: 20px;\n    text-decoration: none;\n}\n.user-record__articles-button:hover {\n    text-decoration: underline;\n}\n@media screen and (max-width: 600px) {\n    .user-record {\n        flex-direction: column;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUEsb0JBQW9CO0FBRXBCO0lBQ0ksdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtBQUNqQjtBQUNBO0lBQ0k7QUFDSjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbn1cbi5iYWNrLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDI4MDtcbn1cblxuLyogVXNlcnMgQ29udGFpbmVyICovXG5cbi51c2VyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi51c2VyLXJlY29yZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuLnVzZXItcmVjb3JkOm50aC1jaGlsZChvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFRENDXG59XG5cbi51c2VyLXJlY29yZF9fYXZhdGFyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAxMHB4IDIwcHggMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udXNlci1yZWNvcmRfX2F2YXRhci1jb250YWluZXIgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnVzZXItcmVjb3JkX19hdmF0YXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojQUNFMUFGO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLnVzZXItcmVjb3JkX19kZXRhaWxzIHtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnVzZXItcmVjb3JkX19uYW1lIHsgXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi51c2VyLXJlY29yZF9fZmllbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udXNlci1yZWNvcmRfX2NhdGNocGhyYXNlIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi51c2VyLXJlY29yZF9fYXJ0aWNsZXMtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4udXNlci1yZWNvcmRfX2FydGljbGVzLWJ1dHRvbjpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLnVzZXItcmVjb3JkIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG59Il19 */";
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
          var _this11 = this;

          this.userService.getUsers().subscribe(function (users) {
            return _this11.users = users;
          }, function (error) {
            return _this11.error = error;
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
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-list.component.css */
      "./src/app/user-list/user-list.component.css"))["default"]]
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