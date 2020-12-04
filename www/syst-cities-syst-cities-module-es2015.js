(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["syst-cities-syst-cities-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities-create/syst-cities-create.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities-create/syst-cities-create.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/syst-cities'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"systCitiesService.storeSystCity()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!systCitiesService.systCitiesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'CIUDADES' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-syst-cities-form #systCityForm [model]=\"systCitiesService.systCity\"></app-syst-cities-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities-duplicate/syst-cities-duplicate.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities-duplicate/syst-cities-duplicate.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  SystCities duplicate works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities-edit/syst-cities-edit.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities-edit/syst-cities-edit.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/syst-cities'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"systCitiesService.updateSystCity()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!systCitiesService.systCitiesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'CIUDADES' | titlecase}}: {{ systCitiesService.systCity?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-syst-cities-form #systCityForm [model]=\"systCitiesService.systCity\"></app-syst-cities-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities-form/syst-cities-form.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities-form/syst-cities-form.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #systCitiesForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- user_profile_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'PERFILES DE USUARIOS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"user_profile_ids\"\n                          id=\"user_profile_ids-field\"\n                          [(ngModel)]=\"model.user_profiles\"\n                          [items]=\"systCitiesService.systCityLists.UserProfile\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('PERFILES DE USUARIOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('PERFILES DE USUARIOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setUserProfileIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.user_profile_ids\">\n            <div class=\"error-message\" *ngIf=\"systCitiesForm.form.controls['user_profile_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end user_profile_ids -->\n\n\n    <!-- syst_region_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'DEPARTAMENTO' | titlecase }}</ion-label>\n        <ionic-selectable name=\"syst_region_id\"\n                          id=\"syst_region_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.syst_region\"\n                          [items]=\"systCitiesService.systCityLists.SystRegion\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('DEPARTAMENTOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('DEPARTAMENTOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setSystRegionId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.syst_region_id\">\n            <div class=\"error-message\" *ngIf=\"systCitiesForm.form.controls['syst_region_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end syst_region_id -->\n\n\n    <!-- comp_address_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'EMPRESAS DIRECCIONES' | titlecase }}</ion-label>\n        <ionic-selectable name=\"comp_address_ids\"\n                          id=\"comp_address_ids-field\"\n                          [(ngModel)]=\"model.comp_addresses\"\n                          [items]=\"systCitiesService.systCityLists.CompAddress\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('EMPRESAS DIRECCIONES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('EMPRESAS DIRECCIONES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setCompAddressIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.comp_address_ids\">\n            <div class=\"error-message\" *ngIf=\"systCitiesForm.form.controls['comp_address_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end comp_address_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"systCitiesForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- code -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'CÓDIGO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.code\"\n                            type=\"text\"\n                            name=\"code\"\n                            id=\"code-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.code\">\n                    <div class=\"error-message\" *ngIf=\"systCitiesForm.form.controls['code']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end code -->\n\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities-list/syst-cities-list.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities-list/syst-cities-list.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'CIUDADES' | titlecase}}\"\n                 primaryLink=\"syst-cities/create\"\n                 primaryText=\"Crear {{'CIUDADES' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('CIUDADES' | lowercase )\"\n                       (ionCancel)=\"this.systCitiesService.searchValue = ''; systCitiesService.getSystCities()\"\n                       (keyup.enter)=\"systCitiesService.getSystCities()\"\n                       [(ngModel)]=\"systCitiesService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && systCitiesService.systCities.length\">\n        <ion-card *ngFor=\"let systCity of systCitiesService.systCities; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ systCity.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CÓDIGO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ systCity.code }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'PERFILES DE USUARIOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"systCity.user_profiles.length\">\n                                <ng-container *ngFor=\"let userProfile of systCity.user_profiles; let last = last\">\n                                    <a routerLink=\"/user-profiles/{{ userProfile.id }}/edit\">{{ userProfile.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'DEPARTAMENTOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/syst-regions/{{ systCity.syst_region.id }}/edit\">{{ systCity.syst_region.name }}</a></div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'EMPRESAS DIRECCIONES' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"systCity.comp_addresses.length\">\n                                <ng-container *ngFor=\"let compAddress of systCity.comp_addresses; let last = last\">\n                                    <a routerLink=\"/comp-addresses/{{ compAddress.id }}/edit\">{{ compAddress.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/syst-cities/' + systCity.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"systCitiesService.deleteSystCity(systCity.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !systCitiesService.systCities.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'CIUDADES' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/syst-cities/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'CIUDADES' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"systCitiesService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"systCitiesService.getSystCities(systCitiesService.meta.current_page - 1)\"\n                        [disabled]=\"systCitiesService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{systCitiesService.meta.current_page}}\n                /{{systCitiesService.meta.last_page}} {{systCitiesService.meta.from}}-{{systCitiesService.meta.to}}\n                /{{systCitiesService.meta.total}} </ion-button>\n            <ion-button (click)=\"systCitiesService.getSystCities(systCitiesService.meta.current_page + 1)\"\n                        [disabled]=\"systCitiesService.meta.current_page == systCitiesService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"CIUDADES\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/syst-cities/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'CIUDADES'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/syst-cities/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'CIUDADES' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/syst-cities/syst-cities-create/syst-cities-create.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/syst-cities/syst-cities-create/syst-cities-create.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtY2l0aWVzL3N5c3QtY2l0aWVzLWNyZWF0ZS9zeXN0LWNpdGllcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/syst-cities/syst-cities-create/syst-cities-create.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/syst-cities/syst-cities-create/syst-cities-create.component.ts ***!
  \********************************************************************************/
/*! exports provided: SystCitiesCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystCitiesCreateComponent", function() { return SystCitiesCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _syst_cities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../syst-cities.service */ "./src/app/syst-cities/syst-cities.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let SystCitiesCreateComponent = class SystCitiesCreateComponent {
    constructor(systCitiesService, route, platform) {
        this.systCitiesService = systCitiesService;
        this.route = route;
        this.platform = platform;
        this.id = null;
        this.formValid = false;
    }
    ngOnInit() {
        this.clearPosts();
    }
    ngAfterViewInit() {
        this.systCityForm.systCitiesForm.valueChanges.subscribe((data) => {
            this.systCitiesService.systCitiesFormValid.next(this.systCityForm.systCitiesForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.systCitiesService.createSystCity();
        this.systCitiesService.systCity = {};
    }
};
SystCitiesCreateComponent.ctorParameters = () => [
    { type: _syst_cities_service__WEBPACK_IMPORTED_MODULE_2__["SystCitiesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
SystCitiesCreateComponent.propDecorators = {
    systCityForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['systCityForm',] }]
};
SystCitiesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-cities-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-cities-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities-create/syst-cities-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-cities-create.component.scss */ "./src/app/syst-cities/syst-cities-create/syst-cities-create.component.scss")).default]
    })
], SystCitiesCreateComponent);



/***/ }),

/***/ "./src/app/syst-cities/syst-cities-duplicate/syst-cities-duplicate.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/syst-cities/syst-cities-duplicate/syst-cities-duplicate.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtY2l0aWVzL3N5c3QtY2l0aWVzLWR1cGxpY2F0ZS9zeXN0LWNpdGllcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/syst-cities/syst-cities-duplicate/syst-cities-duplicate.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/syst-cities/syst-cities-duplicate/syst-cities-duplicate.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SystCitiesDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystCitiesDuplicateComponent", function() { return SystCitiesDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SystCitiesDuplicateComponent = class SystCitiesDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
SystCitiesDuplicateComponent.ctorParameters = () => [];
SystCitiesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-cities-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-cities-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities-duplicate/syst-cities-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-cities-duplicate.component.scss */ "./src/app/syst-cities/syst-cities-duplicate/syst-cities-duplicate.component.scss")).default]
    })
], SystCitiesDuplicateComponent);



/***/ }),

/***/ "./src/app/syst-cities/syst-cities-edit/syst-cities-edit.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/syst-cities/syst-cities-edit/syst-cities-edit.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtY2l0aWVzL3N5c3QtY2l0aWVzLWVkaXQvc3lzdC1jaXRpZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/syst-cities/syst-cities-edit/syst-cities-edit.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/syst-cities/syst-cities-edit/syst-cities-edit.component.ts ***!
  \****************************************************************************/
/*! exports provided: SystCitiesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystCitiesEditComponent", function() { return SystCitiesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _syst_cities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../syst-cities.service */ "./src/app/syst-cities/syst-cities.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let SystCitiesEditComponent = class SystCitiesEditComponent {
    constructor(systCitiesService, route, platform) {
        this.systCitiesService = systCitiesService;
        this.route = route;
        this.platform = platform;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.systCitiesService.editSystCity(this.id);
    }
    ngAfterViewInit() {
        this.systCityForm.systCitiesForm.valueChanges.subscribe((data) => {
            this.systCitiesService.systCitiesFormValid.next(this.systCityForm.systCitiesForm.valid);
        });
    }
};
SystCitiesEditComponent.ctorParameters = () => [
    { type: _syst_cities_service__WEBPACK_IMPORTED_MODULE_2__["SystCitiesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
SystCitiesEditComponent.propDecorators = {
    systCityForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['systCityForm',] }]
};
SystCitiesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-cities-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-cities-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities-edit/syst-cities-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-cities-edit.component.scss */ "./src/app/syst-cities/syst-cities-edit/syst-cities-edit.component.scss")).default]
    })
], SystCitiesEditComponent);



/***/ }),

/***/ "./src/app/syst-cities/syst-cities-form/syst-cities-form.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/syst-cities/syst-cities-form/syst-cities-form.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtY2l0aWVzL3N5c3QtY2l0aWVzLWZvcm0vc3lzdC1jaXRpZXMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/syst-cities/syst-cities-form/syst-cities-form.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/syst-cities/syst-cities-form/syst-cities-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: SystCitiesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystCitiesFormComponent", function() { return SystCitiesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _syst_cities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../syst-cities.service */ "./src/app/syst-cities/syst-cities.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let SystCitiesFormComponent = class SystCitiesFormComponent {
    constructor(systCitiesService, toTitlecase) {
        this.systCitiesService = systCitiesService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'code': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.' },
            ],
            'syst_region_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('DEPARTAMENTO') + ' es obligatorio.' },
            ],
            'user_profile_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('PERFILES DE USUARIOS') + ' es obligatorio.' },
            ],
            'comp_address_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('EMPRESAS DIRECCIONES') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setUserProfileIds
    setUserProfileIds(event) {
        let userProfileIds = null;
        if (event.value.length) {
            userProfileIds = [];
            for (let i = 0; i < event.value.length; i++) {
                userProfileIds.push(event.value[i].id);
            }
        }
        this.systCitiesService.systCity.user_profile_ids = userProfileIds;
    }
    // end setUserProfileIds
    // set setSystRegionId
    setSystRegionId(event) {
        this.systCitiesService.systCity.syst_region_id = event.value ? event.value.id : null;
    }
    // end setSystRegionId
    // set setCompAddressIds
    setCompAddressIds(event) {
        let compAddressIds = null;
        if (event.value.length) {
            compAddressIds = [];
            for (let i = 0; i < event.value.length; i++) {
                compAddressIds.push(event.value[i].id);
            }
        }
        this.systCitiesService.systCity.comp_address_ids = compAddressIds;
    }
};
SystCitiesFormComponent.ctorParameters = () => [
    { type: _syst_cities_service__WEBPACK_IMPORTED_MODULE_2__["SystCitiesService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
SystCitiesFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    systCitiesForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['systCitiesForm',] }]
};
SystCitiesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-cities-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-cities-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities-form/syst-cities-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-cities-form.component.scss */ "./src/app/syst-cities/syst-cities-form/syst-cities-form.component.scss")).default]
    })
], SystCitiesFormComponent);



/***/ }),

/***/ "./src/app/syst-cities/syst-cities-list/syst-cities-list.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/syst-cities/syst-cities-list/syst-cities-list.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtY2l0aWVzL3N5c3QtY2l0aWVzLWxpc3Qvc3lzdC1jaXRpZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/syst-cities/syst-cities-list/syst-cities-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/syst-cities/syst-cities-list/syst-cities-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: SystCitiesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystCitiesListComponent", function() { return SystCitiesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _syst_cities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../syst-cities.service */ "./src/app/syst-cities/syst-cities.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let SystCitiesListComponent = class SystCitiesListComponent {
    constructor(systCitiesService, api, loading) {
        this.systCitiesService = systCitiesService;
        this.api = api;
        this.loading = loading;
    }
    ngOnInit() {
        this.systCitiesService.getSystCities();
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
SystCitiesListComponent.ctorParameters = () => [
    { type: _syst_cities_service__WEBPACK_IMPORTED_MODULE_2__["SystCitiesService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }
];
SystCitiesListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
SystCitiesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-cities-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-cities-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities-list/syst-cities-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-cities-list.component.scss */ "./src/app/syst-cities/syst-cities-list/syst-cities-list.component.scss")).default]
    })
], SystCitiesListComponent);



/***/ }),

/***/ "./src/app/syst-cities/syst-cities-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/syst-cities/syst-cities-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SystCitiesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystCitiesPageRoutingModule", function() { return SystCitiesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _syst_cities_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./syst-cities.page */ "./src/app/syst-cities/syst-cities.page.ts");
/* harmony import */ var _syst_cities_edit_syst_cities_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./syst-cities-edit/syst-cities-edit.component */ "./src/app/syst-cities/syst-cities-edit/syst-cities-edit.component.ts");
/* harmony import */ var _syst_cities_create_syst_cities_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./syst-cities-create/syst-cities-create.component */ "./src/app/syst-cities/syst-cities-create/syst-cities-create.component.ts");
/* harmony import */ var _syst_cities_list_syst_cities_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./syst-cities-list/syst-cities-list.component */ "./src/app/syst-cities/syst-cities-list/syst-cities-list.component.ts");







const routes = [
    {
        path: '',
        component: _syst_cities_page__WEBPACK_IMPORTED_MODULE_3__["SystCitiesPage"]
    },
    {
        path: 'list',
        component: _syst_cities_list_syst_cities_list_component__WEBPACK_IMPORTED_MODULE_6__["SystCitiesListComponent"]
    },
    {
        path: 'create',
        component: _syst_cities_create_syst_cities_create_component__WEBPACK_IMPORTED_MODULE_5__["SystCitiesCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _syst_cities_edit_syst_cities_edit_component__WEBPACK_IMPORTED_MODULE_4__["SystCitiesEditComponent"]
    },
];
let SystCitiesPageRoutingModule = class SystCitiesPageRoutingModule {
};
SystCitiesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], SystCitiesPageRoutingModule);



/***/ }),

/***/ "./src/app/syst-cities/syst-cities.module.ts":
/*!***************************************************!*\
  !*** ./src/app/syst-cities/syst-cities.module.ts ***!
  \***************************************************/
/*! exports provided: SystCitiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystCitiesPageModule", function() { return SystCitiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _syst_cities_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./syst-cities-routing.module */ "./src/app/syst-cities/syst-cities-routing.module.ts");
/* harmony import */ var _syst_cities_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./syst-cities.page */ "./src/app/syst-cities/syst-cities.page.ts");
/* harmony import */ var _syst_cities_list_syst_cities_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./syst-cities-list/syst-cities-list.component */ "./src/app/syst-cities/syst-cities-list/syst-cities-list.component.ts");
/* harmony import */ var _syst_cities_create_syst_cities_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./syst-cities-create/syst-cities-create.component */ "./src/app/syst-cities/syst-cities-create/syst-cities-create.component.ts");
/* harmony import */ var _syst_cities_duplicate_syst_cities_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./syst-cities-duplicate/syst-cities-duplicate.component */ "./src/app/syst-cities/syst-cities-duplicate/syst-cities-duplicate.component.ts");
/* harmony import */ var _syst_cities_edit_syst_cities_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./syst-cities-edit/syst-cities-edit.component */ "./src/app/syst-cities/syst-cities-edit/syst-cities-edit.component.ts");
/* harmony import */ var _syst_cities_form_syst_cities_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./syst-cities-form/syst-cities-form.component */ "./src/app/syst-cities/syst-cities-form/syst-cities-form.component.ts");













let SystCitiesPageModule = class SystCitiesPageModule {
};
SystCitiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _syst_cities_routing_module__WEBPACK_IMPORTED_MODULE_6__["SystCitiesPageRoutingModule"]
        ],
        declarations: [
            _syst_cities_page__WEBPACK_IMPORTED_MODULE_7__["SystCitiesPage"],
            _syst_cities_list_syst_cities_list_component__WEBPACK_IMPORTED_MODULE_8__["SystCitiesListComponent"],
            _syst_cities_create_syst_cities_create_component__WEBPACK_IMPORTED_MODULE_9__["SystCitiesCreateComponent"],
            _syst_cities_duplicate_syst_cities_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["SystCitiesDuplicateComponent"],
            _syst_cities_edit_syst_cities_edit_component__WEBPACK_IMPORTED_MODULE_11__["SystCitiesEditComponent"],
            _syst_cities_form_syst_cities_form_component__WEBPACK_IMPORTED_MODULE_12__["SystCitiesFormComponent"],
        ]
    })
], SystCitiesPageModule);



/***/ }),

/***/ "./src/app/syst-cities/syst-cities.page.scss":
/*!***************************************************!*\
  !*** ./src/app/syst-cities/syst-cities.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtY2l0aWVzL3N5c3QtY2l0aWVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/syst-cities/syst-cities.page.ts":
/*!*************************************************!*\
  !*** ./src/app/syst-cities/syst-cities.page.ts ***!
  \*************************************************/
/*! exports provided: SystCitiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystCitiesPage", function() { return SystCitiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SystCitiesPage = class SystCitiesPage {
    constructor() { }
    ngOnInit() {
    }
};
SystCitiesPage.ctorParameters = () => [];
SystCitiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-cities',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-cities.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-cities.page.scss */ "./src/app/syst-cities/syst-cities.page.scss")).default]
    })
], SystCitiesPage);



/***/ }),

/***/ "./src/app/syst-cities/syst-cities.service.ts":
/*!****************************************************!*\
  !*** ./src/app/syst-cities/syst-cities.service.ts ***!
  \****************************************************/
/*! exports provided: SystCitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystCitiesService", function() { return SystCitiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let SystCitiesService = class SystCitiesService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.systCitiesUrl = 'syst-cities';
        this.systCitiesFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.systCities = [];
        this.systCity = {};
        this.systCityLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    getSystCities(page = this.page, perPage = this.perPage) {
        this.api.get(this.systCitiesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.systCities = res.data;
            this.systCityLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editSystCity(id) {
        this.api.get(this.systCitiesUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.systCity = res.data.model;
            this.systCityLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateSystCity() {
        this.api.put(this.systCitiesUrl + '/' + this.systCity.id, {
            model: this.systCity,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getSystCities(1);
        });
    }
    createSystCity() {
        this.api.get(this.systCitiesUrl + '/create')
            .subscribe((res) => {
            this.systCity = {};
            this.systCityLists = res.lists;
        });
    }
    storeSystCity() {
        this.api.post(this.systCitiesUrl, {
            model: this.systCity,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getSystCities(1);
        });
    }
    deleteSystCity(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.systCitiesUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getSystCities(1);
                });
            }
            else {
                return;
            }
        });
    }
};
SystCitiesService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
SystCitiesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SystCitiesService);



/***/ })

}]);
//# sourceMappingURL=syst-cities-syst-cities-module-es2015.js.map