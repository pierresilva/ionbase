(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-create/users-create.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-create/users-create.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/users'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"usersService.storeUser()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!usersService.usersFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'USUARIOS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-users-form #userForm [model]=\"usersService.user\"></app-users-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-duplicate/users-duplicate.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-duplicate/users-duplicate.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  Users duplicate works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-edit/users-edit.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-edit/users-edit.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/users'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"usersService.updateUser()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!usersService.usersFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'USUARIOS' | titlecase}}: {{ usersService.user?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-users-form #userForm [model]=\"usersService.user\"></app-users-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-form/users-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-form/users-form.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #usersForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- post_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'ENTRADAS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"post_ids\"\n                          id=\"post_ids-field\"\n                          [(ngModel)]=\"model.posts\"\n                          [items]=\"usersService.userLists.Post\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('ENTRADAS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('ENTRADAS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setPostIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.post_ids\">\n            <div class=\"error-message\" *ngIf=\"usersForm.form.controls['post_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end post_ids -->\n\n\n    <!-- role_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'ROLES' | titlecase }}</ion-label>\n        <ionic-selectable name=\"role_ids\"\n                          id=\"role_ids-field\"\n                          [(ngModel)]=\"model.roles\"\n                          [items]=\"usersService.userLists.Role\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('ROLES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('ROLES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setRoleIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.role_ids\">\n            <div class=\"error-message\" *ngIf=\"usersForm.form.controls['role_ids']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end role_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NAME' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"usersForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- email -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'EMAIL' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.email\"\n                            type=\"text\"\n                            name=\"email\"\n                            id=\"email-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.email\">\n                    <div class=\"error-message\" *ngIf=\"usersForm.form.controls['email']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end email -->\n\n\n            <!-- password -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'PASSWORD' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.password\"\n                            type=\"text\"\n                            name=\"password\"\n                            id=\"password-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.password\">\n                    <div class=\"error-message\" *ngIf=\"usersForm.form.controls['password']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end password -->\n\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-list/users-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-list/users-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'USUARIOS' | titlecase}}\"\n                 primaryLink=\"users/create\"\n                 primaryText=\"Crear {{'USUARIOS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('USUARIOS' | lowercase )\"\n                       (ionCancel)=\"this.usersService.searchValue = ''; usersService.getUsers()\"\n                       (keyup.enter)=\"usersService.getUsers()\"\n                       [(ngModel)]=\"usersService.searchValue\"></ion-searchbar>\n\n    <ion-card>\n\n        <ng-container *ngIf=\"!(loading.loading | async) && usersService.users.length\">\n            <ion-item *ngFor=\"let user of usersService.users; let index = index\">\n                <ion-label>\n                    <h3>{{ 'NAME' | titlecase }}: {{ user.name }}</h3>\n                    <h3>{{ 'EMAIL' | titlecase }}: {{ user.email }}</h3>\n                    <h3>{{ 'ENTRADAS' | titlecase }}:\n                    <ng-container *ngIf=\"user.posts.length\">\n                        <ng-container *ngFor=\"let post of user.posts; let last = last\">\n                        <a routerLink=\"/posts/{{ post.id }}/edit\">{{ post.name }}</a><span *ngIf=\"!last\">, </span>\n                        </ng-container>\n                    </ng-container>\n                    </h3>\n                    <h3>{{ 'ROLES' | titlecase }}:\n                    <ng-container *ngIf=\"user.roles.length\">\n                        <ng-container *ngFor=\"let role of user.roles; let last = last\">\n                        <a routerLink=\"/roles/{{ role.id }}/edit\">{{ role.name }}</a><span *ngIf=\"!last\">, </span>\n                        </ng-container>\n                    </ng-container>\n                    </h3>\n                </ion-label>\n\n\n                <ion-button item-right fill=\"clear\" color=\"success\" [routerLink]=\"'/users/' + user.id + '/edit'\">\n                    <ion-icon name=\"create-outline\"></ion-icon>\n                </ion-button>\n                <!--<ion-button item-right fill=\"clear\" color=\"success\" (click)=\"null\">\n                    <ion-icon name=\"eye-outline\"></ion-icon>\n                </ion-button>-->\n                <ion-button item-right fill=\"clear\" color=\"danger\" (click)=\"usersService.deleteUser(user.id)\">\n                    <ion-icon name=\"trash-outline\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </ng-container>\n\n        <ng-container *ngIf=\"!(loading.loading | async) && !usersService.users.length\">\n            <ion-item>\n                <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n                <ion-label><h2>No se encontraron {{'USUARIOS' | titlecase}}</h2></ion-label>\n                <ion-button [routerLink]=\"'/users/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                    Crear {{'USUARIOS' | titlecase}}\n                    <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </ng-container>\n\n    </ion-card>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"usersService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"usersService.getUsers(usersService.meta.current_page - 1)\"\n                        [disabled]=\"usersService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{usersService.meta.current_page}}\n                /{{usersService.meta.last_page}} {{usersService.meta.from}}-{{usersService.meta.to}}\n                /{{usersService.meta.total}} </ion-button>\n            <ion-button (click)=\"usersService.getUsers(usersService.meta.current_page + 1)\"\n                        [disabled]=\"usersService.meta.current_page == usersService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"USUARIOS\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/users/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'USUARIOS'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/users/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'USUARIOS' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/users/users-create/users-create.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/users/users-create/users-create.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLWNyZWF0ZS91c2Vycy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/users/users-create/users-create.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/users/users-create/users-create.component.ts ***!
  \**************************************************************/
/*! exports provided: UsersCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersCreateComponent", function() { return UsersCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let UsersCreateComponent = class UsersCreateComponent {
    constructor(usersService, route, platform) {
        this.usersService = usersService;
        this.route = route;
        this.platform = platform;
        this.id = null;
        this.formValid = false;
    }
    ngOnInit() {
        this.clearPosts();
    }
    ngAfterViewInit() {
        this.userForm.usersForm.valueChanges.subscribe((data) => {
            this.usersService.usersFormValid.next(this.userForm.usersForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.usersService.createUser();
        this.usersService.user = {};
    }
};
UsersCreateComponent.ctorParameters = () => [
    { type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
UsersCreateComponent.propDecorators = {
    userForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['userForm',] }]
};
UsersCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./users-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-create/users-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./users-create.component.scss */ "./src/app/users/users-create/users-create.component.scss")).default]
    })
], UsersCreateComponent);



/***/ }),

/***/ "./src/app/users/users-duplicate/users-duplicate.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/users/users-duplicate/users-duplicate.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLWR1cGxpY2F0ZS91c2Vycy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/users/users-duplicate/users-duplicate.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/users/users-duplicate/users-duplicate.component.ts ***!
  \********************************************************************/
/*! exports provided: UsersDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersDuplicateComponent", function() { return UsersDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UsersDuplicateComponent = class UsersDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
UsersDuplicateComponent.ctorParameters = () => [];
UsersDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./users-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-duplicate/users-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./users-duplicate.component.scss */ "./src/app/users/users-duplicate/users-duplicate.component.scss")).default]
    })
], UsersDuplicateComponent);



/***/ }),

/***/ "./src/app/users/users-edit/users-edit.component.scss":
/*!************************************************************!*\
  !*** ./src/app/users/users-edit/users-edit.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLWVkaXQvdXNlcnMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/users/users-edit/users-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/users/users-edit/users-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: UsersEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEditComponent", function() { return UsersEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let UsersEditComponent = class UsersEditComponent {
    constructor(usersService, route, platform) {
        this.usersService = usersService;
        this.route = route;
        this.platform = platform;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.usersService.editUser(this.id);
    }
    ngAfterViewInit() {
        this.userForm.usersForm.valueChanges.subscribe((data) => {
            this.usersService.usersFormValid.next(this.userForm.usersForm.valid);
        });
    }
};
UsersEditComponent.ctorParameters = () => [
    { type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
UsersEditComponent.propDecorators = {
    userForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['userForm',] }]
};
UsersEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./users-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-edit/users-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./users-edit.component.scss */ "./src/app/users/users-edit/users-edit.component.scss")).default]
    })
], UsersEditComponent);



/***/ }),

/***/ "./src/app/users/users-form/users-form.component.scss":
/*!************************************************************!*\
  !*** ./src/app/users/users-form/users-form.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLWZvcm0vdXNlcnMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/users/users-form/users-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/users/users-form/users-form.component.ts ***!
  \**********************************************************/
/*! exports provided: UsersFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersFormComponent", function() { return UsersFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let UsersFormComponent = class UsersFormComponent {
    constructor(usersService, toTitlecase) {
        this.usersService = usersService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NAME') + ' es obligatorio.' },
            ],
            'email': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('EMAIL') + ' es obligatorio.' },
            ],
            'password': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('PASSWORD') + ' es obligatorio.' },
            ],
            'post_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('ENTRADAS') + ' es obligatorio.' },
            ],
            'role_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('ROLES') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setPostIds
    setPostIds(event) {
        let postIds = null;
        if (event.value.length) {
            postIds = [];
            for (let i = 0; i < event.value.length; i++) {
                postIds.push(event.value[i].id);
            }
        }
        this.usersService.user.post_ids = postIds;
    }
    // end setPostIds
    // set setRoleIds
    setRoleIds(event) {
        let roleIds = null;
        if (event.value.length) {
            roleIds = [];
            for (let i = 0; i < event.value.length; i++) {
                roleIds.push(event.value[i].id);
            }
        }
        this.usersService.user.role_ids = roleIds;
    }
};
UsersFormComponent.ctorParameters = () => [
    { type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
UsersFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    usersForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['usersForm',] }]
};
UsersFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./users-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-form/users-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./users-form.component.scss */ "./src/app/users/users-form/users-form.component.scss")).default]
    })
], UsersFormComponent);



/***/ }),

/***/ "./src/app/users/users-list/users-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/users/users-list/users-list.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLWxpc3QvdXNlcnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/users/users-list/users-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/users/users-list/users-list.component.ts ***!
  \**********************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let UsersListComponent = class UsersListComponent {
    constructor(usersService, api, loading) {
        this.usersService = usersService;
        this.api = api;
        this.loading = loading;
    }
    ngOnInit() {
        this.usersService.getUsers();
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
UsersListComponent.ctorParameters = () => [
    { type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }
];
UsersListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
UsersListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./users-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-list/users-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./users-list.component.scss */ "./src/app/users/users-list/users-list.component.scss")).default]
    })
], UsersListComponent);



/***/ }),

/***/ "./src/app/users/users-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/users/users-routing.module.ts ***!
  \***********************************************/
/*! exports provided: UsersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageRoutingModule", function() { return UsersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.page */ "./src/app/users/users.page.ts");
/* harmony import */ var _users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users-edit/users-edit.component */ "./src/app/users/users-edit/users-edit.component.ts");
/* harmony import */ var _users_create_users_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users-create/users-create.component */ "./src/app/users/users-create/users-create.component.ts");
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users-list/users-list.component */ "./src/app/users/users-list/users-list.component.ts");







const routes = [
    {
        path: '',
        component: _users_page__WEBPACK_IMPORTED_MODULE_3__["UsersPage"]
    },
    {
        path: 'list',
        component: _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_6__["UsersListComponent"]
    },
    {
        path: 'create',
        component: _users_create_users_create_component__WEBPACK_IMPORTED_MODULE_5__["UsersCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_4__["UsersEditComponent"]
    },
];
let UsersPageRoutingModule = class UsersPageRoutingModule {
};
UsersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], UsersPageRoutingModule);



/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function() { return UsersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/users/users-routing.module.ts");
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users.page */ "./src/app/users/users.page.ts");
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users-list/users-list.component */ "./src/app/users/users-list/users-list.component.ts");
/* harmony import */ var _users_create_users_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users-create/users-create.component */ "./src/app/users/users-create/users-create.component.ts");
/* harmony import */ var _users_duplicate_users_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users-duplicate/users-duplicate.component */ "./src/app/users/users-duplicate/users-duplicate.component.ts");
/* harmony import */ var _users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users-edit/users-edit.component */ "./src/app/users/users-edit/users-edit.component.ts");
/* harmony import */ var _users_form_users_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./users-form/users-form.component */ "./src/app/users/users-form/users-form.component.ts");













let UsersPageModule = class UsersPageModule {
};
UsersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _users_routing_module__WEBPACK_IMPORTED_MODULE_6__["UsersPageRoutingModule"]
        ],
        declarations: [
            _users_page__WEBPACK_IMPORTED_MODULE_7__["UsersPage"],
            _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_8__["UsersListComponent"],
            _users_create_users_create_component__WEBPACK_IMPORTED_MODULE_9__["UsersCreateComponent"],
            _users_duplicate_users_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["UsersDuplicateComponent"],
            _users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_11__["UsersEditComponent"],
            _users_form_users_form_component__WEBPACK_IMPORTED_MODULE_12__["UsersFormComponent"],
        ]
    })
], UsersPageModule);



/***/ }),

/***/ "./src/app/users/users.page.scss":
/*!***************************************!*\
  !*** ./src/app/users/users.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/users/users.page.ts":
/*!*************************************!*\
  !*** ./src/app/users/users.page.ts ***!
  \*************************************/
/*! exports provided: UsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPage", function() { return UsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UsersPage = class UsersPage {
    constructor() { }
    ngOnInit() {
    }
};
UsersPage.ctorParameters = () => [];
UsersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./users.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./users.page.scss */ "./src/app/users/users.page.scss")).default]
    })
], UsersPage);



/***/ }),

/***/ "./src/app/users/users.service.ts":
/*!****************************************!*\
  !*** ./src/app/users/users.service.ts ***!
  \****************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let UsersService = class UsersService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.usersUrl = 'users';
        this.usersFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.users = [];
        this.user = {};
        this.userLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    getUsers(page = this.page, perPage = this.perPage) {
        this.api.get(this.usersUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.users = res.data;
            this.userLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editUser(id) {
        this.api.get(this.usersUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.user = res.data.model;
            this.userLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateUser() {
        this.api.put(this.usersUrl + '/' + this.user.id, {
            model: this.user,
            pivots: {
                role: this.user.roles,
            }
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getUsers(1);
        });
    }
    createUser() {
        this.api.get(this.usersUrl + '/create')
            .subscribe((res) => {
            this.user = {};
            this.userLists = res.lists;
        });
    }
    storeUser() {
        this.api.post(this.usersUrl, {
            model: this.user,
            pivots: {
                role: this.user.roles,
            }
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getUsers(1);
        });
    }
    deleteUser(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.usersUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getUsers(1);
                });
            }
            else {
                return;
            }
        });
    }
};
UsersService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
UsersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsersService);



/***/ })

}]);
//# sourceMappingURL=users-users-module-es2015.js.map