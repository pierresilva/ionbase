(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profiles-user-profiles-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-create/user-profiles-create.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-create/user-profiles-create.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/user-profiles'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"userProfilesService.storeUserProfile()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!userProfilesService.userProfilesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'PERFILES DE USUARIOS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-user-profiles-form #userProfileForm [model]=\"userProfilesService.userProfile\"></app-user-profiles-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-duplicate/user-profiles-duplicate.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-duplicate/user-profiles-duplicate.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  UserProfiles duplicate works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-edit/user-profiles-edit.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-edit/user-profiles-edit.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/user-profiles'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"userProfilesService.updateUserProfile()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!userProfilesService.userProfilesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'PERFILES DE USUARIOS' | titlecase}}: {{ userProfilesService.userProfile?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-user-profiles-form #userProfileForm [model]=\"userProfilesService.userProfile\"></app-user-profiles-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-form/user-profiles-form.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-form/user-profiles-form.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #userProfilesForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- user_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'USUARIO' | titlecase }}</ion-label>\n        <ionic-selectable name=\"user_id\"\n                          id=\"user_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.user\"\n                          [items]=\"userProfilesService.userProfileLists.User\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('USUARIOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('USUARIOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setUserId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.user_id\">\n            <div class=\"error-message\" *ngIf=\"userProfilesForm.form.controls['user_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end user_id -->\n\n\n    <!-- syst_city_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'CIUDADE' | titlecase }}</ion-label>\n        <ionic-selectable name=\"syst_city_id\"\n                          id=\"syst_city_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.syst_city\"\n                          [items]=\"userProfilesService.userProfileLists.SystCity\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('CIUDADES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('CIUDADES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setSystCityId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.syst_city_id\">\n            <div class=\"error-message\" *ngIf=\"userProfilesForm.form.controls['syst_city_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end syst_city_id -->\n\n\n    <!-- syst_region_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'DEPARTAMENTO' | titlecase }}</ion-label>\n        <ionic-selectable name=\"syst_region_id\"\n                          id=\"syst_region_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.syst_region\"\n                          [items]=\"userProfilesService.userProfileLists.SystRegion\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('DEPARTAMENTOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('DEPARTAMENTOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setSystRegionId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.syst_region_id\">\n            <div class=\"error-message\" *ngIf=\"userProfilesForm.form.controls['syst_region_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end syst_region_id -->\n\n\n    <!-- syst_country_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'PAISE' | titlecase }}</ion-label>\n        <ionic-selectable name=\"syst_country_id\"\n                          id=\"syst_country_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.syst_country\"\n                          [items]=\"userProfilesService.userProfileLists.SystCountry\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('PAISES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('PAISES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setSystCountryId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.syst_country_id\">\n            <div class=\"error-message\" *ngIf=\"userProfilesForm.form.controls['syst_country_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end syst_country_id -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"userProfilesForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- address -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'DORECCIÓN' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.address\"\n                            type=\"text\"\n                            name=\"address\"\n                            id=\"address-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.address\">\n                    <div class=\"error-message\" *ngIf=\"userProfilesForm.form.controls['address']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end address -->\n\n\n            <!-- phone -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'TELÉFONO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.phone\"\n                            type=\"text\"\n                            name=\"phone\"\n                            id=\"phone-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.phone\">\n                    <div class=\"error-message\" *ngIf=\"userProfilesForm.form.controls['phone']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end phone -->\n\n\n            <!-- avatar -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'AVATAR' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.avatar\"\n                            type=\"text\"\n                            name=\"avatar\"\n                            id=\"avatar-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.avatar\">\n                    <div class=\"error-message\" *ngIf=\"userProfilesForm.form.controls['avatar']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end avatar -->\n\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-list/user-profiles-list.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-list/user-profiles-list.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'PERFILES DE USUARIOS' | titlecase}}\"\n                 primaryLink=\"user-profiles/create\"\n                 primaryText=\"Crear {{'PERFILES DE USUARIOS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('PERFILES DE USUARIOS' | lowercase )\"\n                       (ionCancel)=\"this.userProfilesService.searchValue = ''; userProfilesService.getUserProfiles()\"\n                       (keyup.enter)=\"userProfilesService.getUserProfiles()\"\n                       [(ngModel)]=\"userProfilesService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && userProfilesService.userProfiles.length\">\n        <ion-card *ngFor=\"let userProfile of userProfilesService.userProfiles; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ userProfile.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'DORECCIÓN' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ userProfile.address }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'TELÉFONO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ userProfile.phone }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'AVATAR' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ userProfile.avatar }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'USUARIOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/users/{{ userProfile.user.id }}/edit\">{{ userProfile.user.name }}</a></div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CIUDADES' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/syst-cities/{{ userProfile.syst_city.id }}/edit\">{{ userProfile.syst_city.name }}</a></div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'DEPARTAMENTOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/syst-regions/{{ userProfile.syst_region.id }}/edit\">{{ userProfile.syst_region.name }}</a></div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'PAISES' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/syst-countries/{{ userProfile.syst_country.id }}/edit\">{{ userProfile.syst_country.name }}</a></div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/user-profiles/' + userProfile.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"userProfilesService.deleteUserProfile(userProfile.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !userProfilesService.userProfiles.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'PERFILES DE USUARIOS' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/user-profiles/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'PERFILES DE USUARIOS' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"userProfilesService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"userProfilesService.getUserProfiles(userProfilesService.meta.current_page - 1)\"\n                        [disabled]=\"userProfilesService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{userProfilesService.meta.current_page}}\n                /{{userProfilesService.meta.last_page}} {{userProfilesService.meta.from}}-{{userProfilesService.meta.to}}\n                /{{userProfilesService.meta.total}} </ion-button>\n            <ion-button (click)=\"userProfilesService.getUserProfiles(userProfilesService.meta.current_page + 1)\"\n                        [disabled]=\"userProfilesService.meta.current_page == userProfilesService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"PERFILES DE USUARIOS\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/user-profiles/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'PERFILES DE USUARIOS'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/user-profiles/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'PERFILES DE USUARIOS' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/user-profiles/user-profiles-create/user-profiles-create.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/user-profiles/user-profiles-create/user-profiles-create.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZXMvdXNlci1wcm9maWxlcy1jcmVhdGUvdXNlci1wcm9maWxlcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/user-profiles/user-profiles-create/user-profiles-create.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/user-profiles/user-profiles-create/user-profiles-create.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UserProfilesCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilesCreateComponent", function() { return UserProfilesCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_profiles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-profiles.service */ "./src/app/user-profiles/user-profiles.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let UserProfilesCreateComponent = class UserProfilesCreateComponent {
    constructor(userProfilesService, route, platform) {
        this.userProfilesService = userProfilesService;
        this.route = route;
        this.platform = platform;
        this.id = null;
        this.formValid = false;
    }
    ngOnInit() {
        this.clearPosts();
    }
    ngAfterViewInit() {
        this.userProfileForm.userProfilesForm.valueChanges.subscribe((data) => {
            this.userProfilesService.userProfilesFormValid.next(this.userProfileForm.userProfilesForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.userProfilesService.createUserProfile();
        this.userProfilesService.userProfile = {};
    }
};
UserProfilesCreateComponent.ctorParameters = () => [
    { type: _user_profiles_service__WEBPACK_IMPORTED_MODULE_2__["UserProfilesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
UserProfilesCreateComponent.propDecorators = {
    userProfileForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['userProfileForm',] }]
};
UserProfilesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profiles-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-profiles-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-create/user-profiles-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-profiles-create.component.scss */ "./src/app/user-profiles/user-profiles-create/user-profiles-create.component.scss")).default]
    })
], UserProfilesCreateComponent);



/***/ }),

/***/ "./src/app/user-profiles/user-profiles-duplicate/user-profiles-duplicate.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/user-profiles/user-profiles-duplicate/user-profiles-duplicate.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZXMvdXNlci1wcm9maWxlcy1kdXBsaWNhdGUvdXNlci1wcm9maWxlcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/user-profiles/user-profiles-duplicate/user-profiles-duplicate.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/user-profiles/user-profiles-duplicate/user-profiles-duplicate.component.ts ***!
  \********************************************************************************************/
/*! exports provided: UserProfilesDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilesDuplicateComponent", function() { return UserProfilesDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UserProfilesDuplicateComponent = class UserProfilesDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
UserProfilesDuplicateComponent.ctorParameters = () => [];
UserProfilesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profiles-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-profiles-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-duplicate/user-profiles-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-profiles-duplicate.component.scss */ "./src/app/user-profiles/user-profiles-duplicate/user-profiles-duplicate.component.scss")).default]
    })
], UserProfilesDuplicateComponent);



/***/ }),

/***/ "./src/app/user-profiles/user-profiles-edit/user-profiles-edit.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/user-profiles/user-profiles-edit/user-profiles-edit.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZXMvdXNlci1wcm9maWxlcy1lZGl0L3VzZXItcHJvZmlsZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user-profiles/user-profiles-edit/user-profiles-edit.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/user-profiles/user-profiles-edit/user-profiles-edit.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UserProfilesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilesEditComponent", function() { return UserProfilesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_profiles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-profiles.service */ "./src/app/user-profiles/user-profiles.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let UserProfilesEditComponent = class UserProfilesEditComponent {
    constructor(userProfilesService, route, platform) {
        this.userProfilesService = userProfilesService;
        this.route = route;
        this.platform = platform;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.userProfilesService.editUserProfile(this.id);
    }
    ngAfterViewInit() {
        this.userProfileForm.userProfilesForm.valueChanges.subscribe((data) => {
            this.userProfilesService.userProfilesFormValid.next(this.userProfileForm.userProfilesForm.valid);
        });
    }
};
UserProfilesEditComponent.ctorParameters = () => [
    { type: _user_profiles_service__WEBPACK_IMPORTED_MODULE_2__["UserProfilesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
UserProfilesEditComponent.propDecorators = {
    userProfileForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['userProfileForm',] }]
};
UserProfilesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profiles-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-profiles-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-edit/user-profiles-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-profiles-edit.component.scss */ "./src/app/user-profiles/user-profiles-edit/user-profiles-edit.component.scss")).default]
    })
], UserProfilesEditComponent);



/***/ }),

/***/ "./src/app/user-profiles/user-profiles-form/user-profiles-form.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/user-profiles/user-profiles-form/user-profiles-form.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZXMvdXNlci1wcm9maWxlcy1mb3JtL3VzZXItcHJvZmlsZXMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user-profiles/user-profiles-form/user-profiles-form.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/user-profiles/user-profiles-form/user-profiles-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UserProfilesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilesFormComponent", function() { return UserProfilesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_profiles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-profiles.service */ "./src/app/user-profiles/user-profiles.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let UserProfilesFormComponent = class UserProfilesFormComponent {
    constructor(userProfilesService, toTitlecase) {
        this.userProfilesService = userProfilesService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'user_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('USUARIO') + ' es obligatorio.' },
            ],
            'syst_city_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CIUDAD') + ' es obligatorio.' },
            ],
            'syst_region_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('DEPARTAMENTO') + ' es obligatorio.' },
            ],
            'syst_country_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('PAÍS') + ' es obligatorio.' },
            ],
            'address': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('DORECCIÓN') + ' es obligatorio.' },
            ],
            'phone': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('TELÉFONO') + ' es obligatorio.' },
            ],
            'avatar': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('AVATAR') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setUserId
    setUserId(event) {
        this.userProfilesService.userProfile.user_id = event.value ? event.value.id : null;
    }
    // end setUserId
    // set setSystCityId
    setSystCityId(event) {
        this.userProfilesService.userProfile.syst_city_id = event.value ? event.value.id : null;
    }
    // end setSystCityId
    // set setSystRegionId
    setSystRegionId(event) {
        this.userProfilesService.userProfile.syst_region_id = event.value ? event.value.id : null;
    }
    // end setSystRegionId
    // set setSystCountryId
    setSystCountryId(event) {
        this.userProfilesService.userProfile.syst_country_id = event.value ? event.value.id : null;
    }
};
UserProfilesFormComponent.ctorParameters = () => [
    { type: _user_profiles_service__WEBPACK_IMPORTED_MODULE_2__["UserProfilesService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
UserProfilesFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    userProfilesForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['userProfilesForm',] }]
};
UserProfilesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profiles-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-profiles-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-form/user-profiles-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-profiles-form.component.scss */ "./src/app/user-profiles/user-profiles-form/user-profiles-form.component.scss")).default]
    })
], UserProfilesFormComponent);



/***/ }),

/***/ "./src/app/user-profiles/user-profiles-list/user-profiles-list.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/user-profiles/user-profiles-list/user-profiles-list.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZXMvdXNlci1wcm9maWxlcy1saXN0L3VzZXItcHJvZmlsZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user-profiles/user-profiles-list/user-profiles-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/user-profiles/user-profiles-list/user-profiles-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UserProfilesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilesListComponent", function() { return UserProfilesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_profiles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-profiles.service */ "./src/app/user-profiles/user-profiles.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let UserProfilesListComponent = class UserProfilesListComponent {
    constructor(userProfilesService, api, loading) {
        this.userProfilesService = userProfilesService;
        this.api = api;
        this.loading = loading;
    }
    ngOnInit() {
        this.userProfilesService.getUserProfiles();
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
UserProfilesListComponent.ctorParameters = () => [
    { type: _user_profiles_service__WEBPACK_IMPORTED_MODULE_2__["UserProfilesService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }
];
UserProfilesListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
UserProfilesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profiles-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-profiles-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-list/user-profiles-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-profiles-list.component.scss */ "./src/app/user-profiles/user-profiles-list/user-profiles-list.component.scss")).default]
    })
], UserProfilesListComponent);



/***/ }),

/***/ "./src/app/user-profiles/user-profiles-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/user-profiles/user-profiles-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: UserProfilesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilesPageRoutingModule", function() { return UserProfilesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_profiles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profiles.page */ "./src/app/user-profiles/user-profiles.page.ts");
/* harmony import */ var _user_profiles_edit_user_profiles_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-profiles-edit/user-profiles-edit.component */ "./src/app/user-profiles/user-profiles-edit/user-profiles-edit.component.ts");
/* harmony import */ var _user_profiles_create_user_profiles_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profiles-create/user-profiles-create.component */ "./src/app/user-profiles/user-profiles-create/user-profiles-create.component.ts");
/* harmony import */ var _user_profiles_list_user_profiles_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profiles-list/user-profiles-list.component */ "./src/app/user-profiles/user-profiles-list/user-profiles-list.component.ts");







const routes = [
    {
        path: '',
        component: _user_profiles_page__WEBPACK_IMPORTED_MODULE_3__["UserProfilesPage"]
    },
    {
        path: 'list',
        component: _user_profiles_list_user_profiles_list_component__WEBPACK_IMPORTED_MODULE_6__["UserProfilesListComponent"]
    },
    {
        path: 'create',
        component: _user_profiles_create_user_profiles_create_component__WEBPACK_IMPORTED_MODULE_5__["UserProfilesCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _user_profiles_edit_user_profiles_edit_component__WEBPACK_IMPORTED_MODULE_4__["UserProfilesEditComponent"]
    },
];
let UserProfilesPageRoutingModule = class UserProfilesPageRoutingModule {
};
UserProfilesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], UserProfilesPageRoutingModule);



/***/ }),

/***/ "./src/app/user-profiles/user-profiles.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/user-profiles/user-profiles.module.ts ***!
  \*******************************************************/
/*! exports provided: UserProfilesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilesPageModule", function() { return UserProfilesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _user_profiles_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profiles-routing.module */ "./src/app/user-profiles/user-profiles-routing.module.ts");
/* harmony import */ var _user_profiles_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-profiles.page */ "./src/app/user-profiles/user-profiles.page.ts");
/* harmony import */ var _user_profiles_list_user_profiles_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-profiles-list/user-profiles-list.component */ "./src/app/user-profiles/user-profiles-list/user-profiles-list.component.ts");
/* harmony import */ var _user_profiles_create_user_profiles_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-profiles-create/user-profiles-create.component */ "./src/app/user-profiles/user-profiles-create/user-profiles-create.component.ts");
/* harmony import */ var _user_profiles_duplicate_user_profiles_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-profiles-duplicate/user-profiles-duplicate.component */ "./src/app/user-profiles/user-profiles-duplicate/user-profiles-duplicate.component.ts");
/* harmony import */ var _user_profiles_edit_user_profiles_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-profiles-edit/user-profiles-edit.component */ "./src/app/user-profiles/user-profiles-edit/user-profiles-edit.component.ts");
/* harmony import */ var _user_profiles_form_user_profiles_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-profiles-form/user-profiles-form.component */ "./src/app/user-profiles/user-profiles-form/user-profiles-form.component.ts");













let UserProfilesPageModule = class UserProfilesPageModule {
};
UserProfilesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _user_profiles_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserProfilesPageRoutingModule"]
        ],
        declarations: [
            _user_profiles_page__WEBPACK_IMPORTED_MODULE_7__["UserProfilesPage"],
            _user_profiles_list_user_profiles_list_component__WEBPACK_IMPORTED_MODULE_8__["UserProfilesListComponent"],
            _user_profiles_create_user_profiles_create_component__WEBPACK_IMPORTED_MODULE_9__["UserProfilesCreateComponent"],
            _user_profiles_duplicate_user_profiles_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["UserProfilesDuplicateComponent"],
            _user_profiles_edit_user_profiles_edit_component__WEBPACK_IMPORTED_MODULE_11__["UserProfilesEditComponent"],
            _user_profiles_form_user_profiles_form_component__WEBPACK_IMPORTED_MODULE_12__["UserProfilesFormComponent"],
        ]
    })
], UserProfilesPageModule);



/***/ }),

/***/ "./src/app/user-profiles/user-profiles.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/user-profiles/user-profiles.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZXMvdXNlci1wcm9maWxlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/user-profiles/user-profiles.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/user-profiles/user-profiles.page.ts ***!
  \*****************************************************/
/*! exports provided: UserProfilesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilesPage", function() { return UserProfilesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UserProfilesPage = class UserProfilesPage {
    constructor() { }
    ngOnInit() {
    }
};
UserProfilesPage.ctorParameters = () => [];
UserProfilesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profiles',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-profiles.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-profiles.page.scss */ "./src/app/user-profiles/user-profiles.page.scss")).default]
    })
], UserProfilesPage);



/***/ }),

/***/ "./src/app/user-profiles/user-profiles.service.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profiles/user-profiles.service.ts ***!
  \********************************************************/
/*! exports provided: UserProfilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilesService", function() { return UserProfilesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let UserProfilesService = class UserProfilesService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.userProfilesUrl = 'user-profiles';
        this.userProfilesFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.userProfiles = [];
        this.userProfile = {};
        this.userProfileLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    getUserProfiles(page = this.page, perPage = this.perPage) {
        this.api.get(this.userProfilesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.userProfiles = res.data;
            this.userProfileLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editUserProfile(id) {
        this.api.get(this.userProfilesUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.userProfile = res.data.model;
            this.userProfileLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateUserProfile() {
        this.api.put(this.userProfilesUrl + '/' + this.userProfile.id, {
            model: this.userProfile,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getUserProfiles(1);
        });
    }
    createUserProfile() {
        this.api.get(this.userProfilesUrl + '/create')
            .subscribe((res) => {
            this.userProfile = {};
            this.userProfileLists = res.lists;
        });
    }
    storeUserProfile() {
        this.api.post(this.userProfilesUrl, {
            model: this.userProfile,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getUserProfiles(1);
        });
    }
    deleteUserProfile(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.userProfilesUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getUserProfiles(1);
                });
            }
            else {
                return;
            }
        });
    }
};
UserProfilesService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
UserProfilesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserProfilesService);



/***/ })

}]);
//# sourceMappingURL=user-profiles-user-profiles-module-es2015.js.map