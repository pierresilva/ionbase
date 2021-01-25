(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-roles-user-roles-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-create/user-roles-create.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-create/user-roles-create.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/user-roles'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"userRolesService.storeUserRole()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!userRolesService.userRolesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'USUARIOS ROLES' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-user-roles-form #userRoleForm [model]=\"userRolesService.userRole\"></app-user-roles-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-duplicate/user-roles-duplicate.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-duplicate/user-roles-duplicate.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  UserRoles duplicate works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-edit/user-roles-edit.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-edit/user-roles-edit.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/user-roles'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"userRolesService.updateUserRole()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!userRolesService.userRolesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'USUARIOS ROLES' | titlecase}}: {{ userRolesService.userRole?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-user-roles-form #userRoleForm [model]=\"userRolesService.userRole\"></app-user-roles-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-form/user-roles-form.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-form/user-roles-form.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #userRolesForm=\"ngForm\" novalidate autocomplete=\"off\">\r\n\r\n\r\n    <!-- user_ids -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'USUARIOS' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"user_ids\"\r\n                          id=\"user_ids-field\"\r\n                          [(ngModel)]=\"model.users\"\r\n                          [items]=\"userRolesService.userRoleLists.User\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('USUARIOS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('USUARIOS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setUserIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.user_ids\">\r\n            <div class=\"error-message\" *ngIf=\"userRolesForm.form.controls['user_ids']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end user_ids -->\r\n\r\n\r\n    <!-- user_permission_ids -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'USUARIOS PERMISOS' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"user_permission_ids\"\r\n                          id=\"user_permission_ids-field\"\r\n                          [(ngModel)]=\"model.user_permissions\"\r\n                          [items]=\"userRolesService.userRoleLists.UserPermission\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('USUARIOS PERMISOS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('USUARIOS PERMISOS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setUserPermissionIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.user_permission_ids\">\r\n            <div class=\"error-message\" *ngIf=\"userRolesForm.form.controls['user_permission_ids']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end user_permission_ids -->\r\n\r\n\r\n            <!-- name -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.name\"\r\n                            type=\"text\"\r\n                            name=\"name\"\r\n                            id=\"name-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n                    <div class=\"error-message\" *ngIf=\"userRolesForm.form.controls['name']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end name -->\r\n\r\n\r\n            <!-- code -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'CÓDIGO' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.code\"\r\n                            type=\"text\"\r\n                            name=\"code\"\r\n                            id=\"code-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.code\">\r\n                    <div class=\"error-message\" *ngIf=\"userRolesForm.form.controls['code']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end code -->\r\n\r\n\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-list/user-roles-list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-list/user-roles-list.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'USUARIOS ROLES' | titlecase}}\"\r\n                 primaryLink=\"user-roles/create\"\r\n                 primaryText=\"Crear {{'USUARIOS ROLES' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-searchbar showCancelButton=\"focus\"\r\n                       [cancelButtonText]=\"'Cancelar'\"\r\n                       [placeholder]=\"'Buscar ' + ('USUARIOS ROLES' | lowercase )\"\r\n                       (ionCancel)=\"this.userRolesService.searchValue = ''; userRolesService.getUserRoles()\"\r\n                       (keyup.enter)=\"userRolesService.getUserRoles()\"\r\n                       [(ngModel)]=\"userRolesService.searchValue\"></ion-searchbar>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && userRolesService.userRoles?.length\">\r\n        <ion-card *ngFor=\"let userRole of userRolesService.userRoles; let index = index\">\r\n            <ion-list>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ userRole?.name }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'CÓDIGO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ userRole?.code }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'USUARIOS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">\r\n                            <ng-container *ngIf=\"userRole?.users?.length\">\r\n                                <ng-container *ngFor=\"let user of userRole?.users; let last = last\">\r\n                                    <a routerLink=\"/users/{{ user?.id }}/edit\">{{ user?.name }}</a><span *ngIf=\"!last\">, </span>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'USUARIOS PERMISOS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">\r\n                            <ng-container *ngIf=\"userRole?.user_permissions?.length\">\r\n                                <ng-container *ngFor=\"let userPermission of userRole?.user_permissions; let last = last\">\r\n                                    <a routerLink=\"/user-permissions/{{ userPermission?.id }}/edit\">{{ userPermission?.name }}</a><span *ngIf=\"!last\">, </span>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n                    </ion-item>\r\n            </ion-list>\r\n            <ion-footer>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/user-roles/' + userRole?.id + '/edit'\">\r\n                            <ion-icon name=\"create-outline\"></ion-icon>\r\n                            <div>Editar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"userRolesService.deleteUserRole(userRole?.id)\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            <div>Eliminar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-footer>\r\n        </ion-card>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && !userRolesService.userRoles?.length\">\r\n        <ion-item>\r\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label><h2>No se encontraron {{'USUARIOS ROLES' | titlecase}}</h2></ion-label>\r\n            <ion-button [routerLink]=\"'/user-roles/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\r\n                Crear {{'USUARIOS ROLES' | titlecase}}\r\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"userRolesService.meta\">\r\n        <ion-col class=\"ion-text-center\" size=\"12\">\r\n            <ion-button (click)=\"userRolesService.getUserRoles(userRolesService.meta.current_page - 1)\"\r\n                        [disabled]=\"userRolesService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{userRolesService.meta.current_page}}\r\n                /{{userRolesService.meta.last_page}} {{userRolesService.meta.from}}-{{userRolesService.meta.to}}\r\n                /{{userRolesService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"userRolesService.getUserRoles(userRolesService.meta.current_page + 1)\"\r\n                        [disabled]=\"userRolesService.meta.current_page == userRolesService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"USUARIOS ROLES\"></app-main-header>\r\n\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/user-roles/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'USUARIOS ROLES'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/user-roles/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'USUARIOS ROLES' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/user-roles/user-roles-create/user-roles-create.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/user-roles/user-roles-create/user-roles-create.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcm9sZXMvdXNlci1yb2xlcy1jcmVhdGUvdXNlci1yb2xlcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/user-roles/user-roles-create/user-roles-create.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/user-roles/user-roles-create/user-roles-create.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UserRolesCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRolesCreateComponent", function() { return UserRolesCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-roles.service */ "./src/app/user-roles/user-roles.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let UserRolesCreateComponent = class UserRolesCreateComponent {
    constructor(userRolesService, route, platform, splitPanel) {
        this.userRolesService = userRolesService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.formValid = false;
    }
    ngOnInit() {
        this.clearPosts();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    ngAfterViewInit() {
        this.userRoleForm.userRolesForm.valueChanges.subscribe((data) => {
            this.userRolesService.userRolesFormValid.next(this.userRoleForm.userRolesForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.userRolesService.createUserRole();
        this.userRolesService.userRole = {};
    }
};
UserRolesCreateComponent.ctorParameters = () => [
    { type: _user_roles_service__WEBPACK_IMPORTED_MODULE_2__["UserRolesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
UserRolesCreateComponent.propDecorators = {
    userRoleForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['userRoleForm',] }]
};
UserRolesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-roles-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-roles-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-create/user-roles-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-roles-create.component.scss */ "./src/app/user-roles/user-roles-create/user-roles-create.component.scss")).default]
    })
], UserRolesCreateComponent);



/***/ }),

/***/ "./src/app/user-roles/user-roles-duplicate/user-roles-duplicate.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/user-roles/user-roles-duplicate/user-roles-duplicate.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcm9sZXMvdXNlci1yb2xlcy1kdXBsaWNhdGUvdXNlci1yb2xlcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/user-roles/user-roles-duplicate/user-roles-duplicate.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/user-roles/user-roles-duplicate/user-roles-duplicate.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UserRolesDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRolesDuplicateComponent", function() { return UserRolesDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UserRolesDuplicateComponent = class UserRolesDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
UserRolesDuplicateComponent.ctorParameters = () => [];
UserRolesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-roles-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-roles-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-duplicate/user-roles-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-roles-duplicate.component.scss */ "./src/app/user-roles/user-roles-duplicate/user-roles-duplicate.component.scss")).default]
    })
], UserRolesDuplicateComponent);



/***/ }),

/***/ "./src/app/user-roles/user-roles-edit/user-roles-edit.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/user-roles/user-roles-edit/user-roles-edit.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcm9sZXMvdXNlci1yb2xlcy1lZGl0L3VzZXItcm9sZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user-roles/user-roles-edit/user-roles-edit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/user-roles/user-roles-edit/user-roles-edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserRolesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRolesEditComponent", function() { return UserRolesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-roles.service */ "./src/app/user-roles/user-roles.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let UserRolesEditComponent = class UserRolesEditComponent {
    constructor(userRolesService, route, platform, splitPanel) {
        this.userRolesService = userRolesService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.userRolesService.editUserRole(this.id);
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    ngAfterViewInit() {
        this.userRoleForm.userRolesForm.valueChanges.subscribe((data) => {
            this.userRolesService.userRolesFormValid.next(this.userRoleForm.userRolesForm.valid);
        });
    }
};
UserRolesEditComponent.ctorParameters = () => [
    { type: _user_roles_service__WEBPACK_IMPORTED_MODULE_2__["UserRolesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
UserRolesEditComponent.propDecorators = {
    userRoleForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['userRoleForm',] }]
};
UserRolesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-roles-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-roles-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-edit/user-roles-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-roles-edit.component.scss */ "./src/app/user-roles/user-roles-edit/user-roles-edit.component.scss")).default]
    })
], UserRolesEditComponent);



/***/ }),

/***/ "./src/app/user-roles/user-roles-form/user-roles-form.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/user-roles/user-roles-form/user-roles-form.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcm9sZXMvdXNlci1yb2xlcy1mb3JtL3VzZXItcm9sZXMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user-roles/user-roles-form/user-roles-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/user-roles/user-roles-form/user-roles-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserRolesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRolesFormComponent", function() { return UserRolesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-roles.service */ "./src/app/user-roles/user-roles.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let UserRolesFormComponent = class UserRolesFormComponent {
    constructor(userRolesService, toTitlecase) {
        this.userRolesService = userRolesService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'code': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.' },
            ],
            'user_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('USUARIOS') + ' es obligatorio.' },
            ],
            'user_permission_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('USUARIOS PERMISOS') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setUserIds
    setUserIds(event) {
        let userIds = null;
        if (event.value.length) {
            userIds = [];
            for (let i = 0; i < event.value.length; i++) {
                userIds.push(event.value[i].id);
            }
        }
        this.userRolesService.userRole.user_ids = userIds;
    }
    // end setUserIds
    // set setUserPermissionIds
    setUserPermissionIds(event) {
        let userPermissionIds = null;
        if (event.value.length) {
            userPermissionIds = [];
            for (let i = 0; i < event.value.length; i++) {
                userPermissionIds.push(event.value[i].id);
            }
        }
        this.userRolesService.userRole.user_permission_ids = userPermissionIds;
    }
};
UserRolesFormComponent.ctorParameters = () => [
    { type: _user_roles_service__WEBPACK_IMPORTED_MODULE_2__["UserRolesService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
UserRolesFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    userRolesForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['userRolesForm',] }]
};
UserRolesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-roles-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-roles-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-form/user-roles-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-roles-form.component.scss */ "./src/app/user-roles/user-roles-form/user-roles-form.component.scss")).default]
    })
], UserRolesFormComponent);



/***/ }),

/***/ "./src/app/user-roles/user-roles-list/user-roles-list.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/user-roles/user-roles-list/user-roles-list.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcm9sZXMvdXNlci1yb2xlcy1saXN0L3VzZXItcm9sZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user-roles/user-roles-list/user-roles-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/user-roles/user-roles-list/user-roles-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserRolesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRolesListComponent", function() { return UserRolesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-roles.service */ "./src/app/user-roles/user-roles.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");







let UserRolesListComponent = class UserRolesListComponent {
    constructor(userRolesService, api, loading, splitPanel) {
        this.userRolesService = userRolesService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
        this.userRolesService.getUserRoles();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
UserRolesListComponent.ctorParameters = () => [
    { type: _user_roles_service__WEBPACK_IMPORTED_MODULE_2__["UserRolesService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] }
];
UserRolesListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
UserRolesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-roles-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-roles-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-list/user-roles-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-roles-list.component.scss */ "./src/app/user-roles/user-roles-list/user-roles-list.component.scss")).default]
    })
], UserRolesListComponent);



/***/ }),

/***/ "./src/app/user-roles/user-roles-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/user-roles/user-roles-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: UserRolesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRolesPageRoutingModule", function() { return UserRolesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_roles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-roles.page */ "./src/app/user-roles/user-roles.page.ts");
/* harmony import */ var _user_roles_edit_user_roles_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-roles-edit/user-roles-edit.component */ "./src/app/user-roles/user-roles-edit/user-roles-edit.component.ts");
/* harmony import */ var _user_roles_create_user_roles_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-roles-create/user-roles-create.component */ "./src/app/user-roles/user-roles-create/user-roles-create.component.ts");
/* harmony import */ var _user_roles_list_user_roles_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-roles-list/user-roles-list.component */ "./src/app/user-roles/user-roles-list/user-roles-list.component.ts");







const routes = [
    {
        path: '',
        component: _user_roles_page__WEBPACK_IMPORTED_MODULE_3__["UserRolesPage"]
    },
    {
        path: 'list',
        component: _user_roles_list_user_roles_list_component__WEBPACK_IMPORTED_MODULE_6__["UserRolesListComponent"]
    },
    {
        path: 'create',
        component: _user_roles_create_user_roles_create_component__WEBPACK_IMPORTED_MODULE_5__["UserRolesCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _user_roles_edit_user_roles_edit_component__WEBPACK_IMPORTED_MODULE_4__["UserRolesEditComponent"]
    },
];
let UserRolesPageRoutingModule = class UserRolesPageRoutingModule {
};
UserRolesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], UserRolesPageRoutingModule);



/***/ }),

/***/ "./src/app/user-roles/user-roles.module.ts":
/*!*************************************************!*\
  !*** ./src/app/user-roles/user-roles.module.ts ***!
  \*************************************************/
/*! exports provided: UserRolesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRolesPageModule", function() { return UserRolesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _user_roles_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-roles-routing.module */ "./src/app/user-roles/user-roles-routing.module.ts");
/* harmony import */ var _user_roles_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-roles.page */ "./src/app/user-roles/user-roles.page.ts");
/* harmony import */ var _user_roles_list_user_roles_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-roles-list/user-roles-list.component */ "./src/app/user-roles/user-roles-list/user-roles-list.component.ts");
/* harmony import */ var _user_roles_create_user_roles_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-roles-create/user-roles-create.component */ "./src/app/user-roles/user-roles-create/user-roles-create.component.ts");
/* harmony import */ var _user_roles_duplicate_user_roles_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-roles-duplicate/user-roles-duplicate.component */ "./src/app/user-roles/user-roles-duplicate/user-roles-duplicate.component.ts");
/* harmony import */ var _user_roles_edit_user_roles_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-roles-edit/user-roles-edit.component */ "./src/app/user-roles/user-roles-edit/user-roles-edit.component.ts");
/* harmony import */ var _user_roles_form_user_roles_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-roles-form/user-roles-form.component */ "./src/app/user-roles/user-roles-form/user-roles-form.component.ts");













let UserRolesPageModule = class UserRolesPageModule {
};
UserRolesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _user_roles_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserRolesPageRoutingModule"]
        ],
        declarations: [
            _user_roles_page__WEBPACK_IMPORTED_MODULE_7__["UserRolesPage"],
            _user_roles_list_user_roles_list_component__WEBPACK_IMPORTED_MODULE_8__["UserRolesListComponent"],
            _user_roles_create_user_roles_create_component__WEBPACK_IMPORTED_MODULE_9__["UserRolesCreateComponent"],
            _user_roles_duplicate_user_roles_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["UserRolesDuplicateComponent"],
            _user_roles_edit_user_roles_edit_component__WEBPACK_IMPORTED_MODULE_11__["UserRolesEditComponent"],
            _user_roles_form_user_roles_form_component__WEBPACK_IMPORTED_MODULE_12__["UserRolesFormComponent"],
        ]
    })
], UserRolesPageModule);



/***/ }),

/***/ "./src/app/user-roles/user-roles.page.scss":
/*!*************************************************!*\
  !*** ./src/app/user-roles/user-roles.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcm9sZXMvdXNlci1yb2xlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/user-roles/user-roles.page.ts":
/*!***********************************************!*\
  !*** ./src/app/user-roles/user-roles.page.ts ***!
  \***********************************************/
/*! exports provided: UserRolesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRolesPage", function() { return UserRolesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");



let UserRolesPage = class UserRolesPage {
    constructor(splitPanel) {
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
};
UserRolesPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] }
];
UserRolesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-roles',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-roles.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-roles.page.scss */ "./src/app/user-roles/user-roles.page.scss")).default]
    })
], UserRolesPage);



/***/ }),

/***/ "./src/app/user-roles/user-roles.service.ts":
/*!**************************************************!*\
  !*** ./src/app/user-roles/user-roles.service.ts ***!
  \**************************************************/
/*! exports provided: UserRolesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRolesService", function() { return UserRolesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let UserRolesService = class UserRolesService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.userRolesUrl = 'user-roles';
        this.userRolesFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.userRoles = [];
        this.userRole = {};
        this.userRoleLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    getUserRoles(page = this.page, perPage = this.perPage) {
        this.api.get(this.userRolesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.userRoles = res.data;
            this.userRoleLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editUserRole(id) {
        this.api.get(this.userRolesUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.userRole = res.data.model;
            this.userRoleLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateUserRole() {
        this.api.put(this.userRolesUrl + '/' + this.userRole.id, {
            model: this.userRole,
            pivots: {
                user: this.userRole.users,
                user_permission: this.userRole.user_permissions,
            }
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getUserRoles(1);
        });
    }
    createUserRole() {
        this.api.get(this.userRolesUrl + '/create')
            .subscribe((res) => {
            this.userRole = {};
            this.userRoleLists = res.lists;
        });
    }
    storeUserRole() {
        this.api.post(this.userRolesUrl, {
            model: this.userRole,
            pivots: {
                user: this.userRole.users,
                user_permission: this.userRole.user_permissions,
            }
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getUserRoles(1);
        });
    }
    deleteUserRole(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.userRolesUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getUserRoles(1);
                });
            }
            else {
                return;
            }
        });
    }
};
UserRolesService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
UserRolesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserRolesService);



/***/ })

}]);
//# sourceMappingURL=user-roles-user-roles-module-es2015.js.map