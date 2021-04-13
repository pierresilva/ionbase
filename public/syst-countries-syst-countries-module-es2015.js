(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["syst-countries-syst-countries-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-countries/syst-countries-create/syst-countries-create.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-countries/syst-countries-create/syst-countries-create.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/syst-countries'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"systCountriesService.storeSystCountry()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!systCountriesService.systCountriesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'PAISES' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-syst-countries-form #systCountryForm [model]=\"systCountriesService.systCountry\"></app-syst-countries-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-countries/syst-countries-duplicate/syst-countries-duplicate.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-countries/syst-countries-duplicate/syst-countries-duplicate.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  SystCountries duplicate works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-countries/syst-countries-edit/syst-countries-edit.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-countries/syst-countries-edit/syst-countries-edit.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/syst-countries'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"systCountriesService.updateSystCountry()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!systCountriesService.systCountriesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'PAISES' | titlecase}}: {{ systCountriesService.systCountry?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-syst-countries-form #systCountryForm [model]=\"systCountriesService.systCountry\"></app-syst-countries-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-countries/syst-countries-form/syst-countries-form.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-countries/syst-countries-form/syst-countries-form.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #systCountriesForm=\"ngForm\" novalidate autocomplete=\"off\">\r\n\r\n\r\n    <!-- user_profile_ids -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'PERFILES DE USUARIOS' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"user_profile_ids\"\r\n                          id=\"user_profile_ids-field\"\r\n                          [(ngModel)]=\"model.user_profiles\"\r\n                          [items]=\"systCountriesService.systCountryLists.UserProfile\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('PERFILES DE USUARIOS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('PERFILES DE USUARIOS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setUserProfileIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.user_profile_ids\">\r\n            <div class=\"error-message\" *ngIf=\"systCountriesForm.form.controls['user_profile_ids']?.hasError(validation.type)\">\r\n            {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end user_profile_ids -->\r\n\r\n\r\n    <!-- syst_region_ids -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'DEPARTAMENTOS' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"syst_region_ids\"\r\n                          id=\"syst_region_ids-field\"\r\n                          [(ngModel)]=\"model.syst_regions\"\r\n                          [items]=\"systCountriesService.systCountryLists.SystRegion\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('DEPARTAMENTOS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('DEPARTAMENTOS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setSystRegionIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.syst_region_ids\">\r\n            <div class=\"error-message\" *ngIf=\"systCountriesForm.form.controls['syst_region_ids']?.hasError(validation.type)\">\r\n            {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end syst_region_ids -->\r\n\r\n\r\n            <!-- name -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.name\"\r\n                            type=\"text\"\r\n                            name=\"name\"\r\n                            id=\"name-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n                    <div class=\"error-message\" *ngIf=\"systCountriesForm.form.controls['name']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end name -->\r\n\r\n\r\n            <!-- code -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'CÓDIGO' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.code\"\r\n                            type=\"text\"\r\n                            name=\"code\"\r\n                            id=\"code-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.code\">\r\n                    <div class=\"error-message\" *ngIf=\"systCountriesForm.form.controls['code']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end code -->\r\n\r\n\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-countries/syst-countries-list/syst-countries-list.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-countries/syst-countries-list/syst-countries-list.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'PAISES' | titlecase}}\"\r\n                 primaryLink=\"syst-countries/create\"\r\n                 primaryText=\"Crear {{'PAISES' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-searchbar showCancelButton=\"focus\"\r\n                       [cancelButtonText]=\"'Cancelar'\"\r\n                       [placeholder]=\"'Buscar ' + ('PAISES' | lowercase )\"\r\n                       (ionCancel)=\"this.systCountriesService.searchValue = ''; systCountriesService.getSystCountries()\"\r\n                       (keyup.enter)=\"systCountriesService.getSystCountries()\"\r\n                       [(ngModel)]=\"systCountriesService.searchValue\"></ion-searchbar>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && systCountriesService.systCountries?.length\">\r\n        <ion-card *ngFor=\"let systCountry of systCountriesService.systCountries; let index = index\">\r\n            <ion-list>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ systCountry?.name }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'CÓDIGO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ systCountry?.code }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'PERFILES DE USUARIOS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">\r\n                            <ng-container *ngIf=\"systCountry?.user_profiles?.length\">\r\n                                <ng-container *ngFor=\"let userProfile of systCountry?.user_profiles; let last = last\">\r\n                                    <a routerLink=\"/user-profiles/{{ userProfile?.id }}/edit\">{{ userProfile?.name }}</a><span *ngIf=\"!last\">, </span>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'DEPARTAMENTOS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">\r\n                            <ng-container *ngIf=\"systCountry?.syst_regions?.length\">\r\n                                <ng-container *ngFor=\"let systRegion of systCountry?.syst_regions; let last = last\">\r\n                                    <a routerLink=\"/syst-regions/{{ systRegion?.id }}/edit\">{{ systRegion?.name }}</a><span *ngIf=\"!last\">, </span>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n                    </ion-item>\r\n            </ion-list>\r\n            <ion-footer>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/syst-countries/' + systCountry?.id + '/edit'\">\r\n                            <ion-icon name=\"create-outline\"></ion-icon>\r\n                            <div>Editar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"systCountriesService.deleteSystCountry(systCountry?.id)\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            <div>Eliminar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-footer>\r\n        </ion-card>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && !systCountriesService.systCountries?.length\">\r\n        <ion-item>\r\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label><h2>No se encontraron {{'PAISES' | titlecase}}</h2></ion-label>\r\n            <ion-button [routerLink]=\"'/syst-countries/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\r\n                Crear {{'PAISES' | titlecase}}\r\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"systCountriesService.meta\">\r\n        <ion-col class=\"ion-text-center\" size=\"12\">\r\n            <ion-button (click)=\"systCountriesService.getSystCountries(systCountriesService.meta.current_page - 1)\"\r\n                        [disabled]=\"systCountriesService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{systCountriesService.meta.current_page}}\r\n                /{{systCountriesService.meta.last_page}} {{systCountriesService.meta.from}}-{{systCountriesService.meta.to}}\r\n                /{{systCountriesService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"systCountriesService.getSystCountries(systCountriesService.meta.current_page + 1)\"\r\n                        [disabled]=\"systCountriesService.meta.current_page == systCountriesService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-countries/syst-countries.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-countries/syst-countries.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"PAISES\"></app-main-header>\r\n\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/syst-countries/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'PAISES'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/syst-countries/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'PAISES' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/syst-countries/syst-countries-create/syst-countries-create.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/syst-countries/syst-countries-create/syst-countries-create.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtY291bnRyaWVzL3N5c3QtY291bnRyaWVzLWNyZWF0ZS9zeXN0LWNvdW50cmllcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/syst-countries/syst-countries-create/syst-countries-create.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/syst-countries/syst-countries-create/syst-countries-create.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SystCountriesCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystCountriesCreateComponent", function() { return SystCountriesCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _syst_countries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../syst-countries.service */ "./src/app/syst-countries/syst-countries.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let SystCountriesCreateComponent = class SystCountriesCreateComponent {
    constructor(systCountriesService, route, platform, splitPanel) {
        this.systCountriesService = systCountriesService;
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
        this.systCountryForm.systCountriesForm.valueChanges.subscribe((data) => {
            this.systCountriesService.systCountriesFormValid.next(this.systCountryForm.systCountriesForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.systCountriesService.createSystCountry();
        this.systCountriesService.systCountry = {};
    }
};
SystCountriesCreateComponent.ctorParameters = () => [
    { type: _syst_countries_service__WEBPACK_IMPORTED_MODULE_2__["SystCountriesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
SystCountriesCreateComponent.propDecorators = {
    systCountryForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['systCountryForm',] }]
};
SystCountriesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-countries-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-countries-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-countries/syst-countries-create/syst-countries-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-countries-create.component.scss */ "./src/app/syst-countries/syst-countries-create/syst-countries-create.component.scss")).default]
    })
], SystCountriesCreateComponent);



/***/ }),

/***/ "./src/app/syst-countries/syst-countries-duplicate/syst-countries-duplicate.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/syst-countries/syst-countries-duplicate/syst-countries-duplicate.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtY291bnRyaWVzL3N5c3QtY291bnRyaWVzLWR1cGxpY2F0ZS9zeXN0LWNvdW50cmllcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/syst-countries/syst-countries-duplicate/syst-countries-duplicate.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/syst-countries/syst-countries-duplicate/syst-countries-duplicate.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SystCountriesDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystCountriesDuplicateComponent", function() { return SystCountriesDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SystCountriesDuplicateComponent = class SystCountriesDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
SystCountriesDuplicateComponent.ctorParameters = () => [];
SystCountriesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-countries-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-countries-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-countries/syst-countries-duplicate/syst-countries-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-countries-duplicate.component.scss */ "./src/app/syst-countries/syst-countries-duplicate/syst-countries-duplicate.component.scss")).default]
    })
], SystCountriesDuplicateComponent);



/***/ }),

/***/ "./src/app/syst-countries/syst-countries-edit/syst-countries-edit.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/syst-countries/syst-countries-edit/syst-countries-edit.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtY291bnRyaWVzL3N5c3QtY291bnRyaWVzLWVkaXQvc3lzdC1jb3VudHJpZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/syst-countries/syst-countries-edit/syst-countries-edit.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/syst-countries/syst-countries-edit/syst-countries-edit.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SystCountriesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystCountriesEditComponent", function() { return SystCountriesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _syst_countries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../syst-countries.service */ "./src/app/syst-countries/syst-countries.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let SystCountriesEditComponent = class SystCountriesEditComponent {
    constructor(systCountriesService, route, platform, splitPanel) {
        this.systCountriesService = systCountriesService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.systCountriesService.editSystCountry(this.id);
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    ngAfterViewInit() {
        this.systCountryForm.systCountriesForm.valueChanges.subscribe((data) => {
            this.systCountriesService.systCountriesFormValid.next(this.systCountryForm.systCountriesForm.valid);
        });
    }
};
SystCountriesEditComponent.ctorParameters = () => [
    { type: _syst_countries_service__WEBPACK_IMPORTED_MODULE_2__["SystCountriesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
SystCountriesEditComponent.propDecorators = {
    systCountryForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['systCountryForm',] }]
};
SystCountriesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-countries-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-countries-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-countries/syst-countries-edit/syst-countries-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-countries-edit.component.scss */ "./src/app/syst-countries/syst-countries-edit/syst-countries-edit.component.scss")).default]
    })
], SystCountriesEditComponent);



/***/ }),

/***/ "./src/app/syst-countries/syst-countries-form/syst-countries-form.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/syst-countries/syst-countries-form/syst-countries-form.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtY291bnRyaWVzL3N5c3QtY291bnRyaWVzLWZvcm0vc3lzdC1jb3VudHJpZXMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/syst-countries/syst-countries-form/syst-countries-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/syst-countries/syst-countries-form/syst-countries-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SystCountriesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystCountriesFormComponent", function() { return SystCountriesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _syst_countries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../syst-countries.service */ "./src/app/syst-countries/syst-countries.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let SystCountriesFormComponent = class SystCountriesFormComponent {
    constructor(systCountriesService, toTitlecase) {
        this.systCountriesService = systCountriesService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'code': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.' },
            ],
            'user_profile_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('PERFILES DE USUARIOS') + ' es obligatorio.' },
            ],
            'syst_region_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('DEPARTAMENTOS') + ' es obligatorio.' },
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
        this.systCountriesService.systCountry.user_profile_ids = userProfileIds;
    }
    // end setUserProfileIds
    // set setSystRegionIds
    setSystRegionIds(event) {
        let systRegionIds = null;
        if (event.value.length) {
            systRegionIds = [];
            for (let i = 0; i < event.value.length; i++) {
                systRegionIds.push(event.value[i].id);
            }
        }
        this.systCountriesService.systCountry.syst_region_ids = systRegionIds;
    }
};
SystCountriesFormComponent.ctorParameters = () => [
    { type: _syst_countries_service__WEBPACK_IMPORTED_MODULE_2__["SystCountriesService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
SystCountriesFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    systCountriesForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['systCountriesForm',] }]
};
SystCountriesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-countries-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-countries-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-countries/syst-countries-form/syst-countries-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-countries-form.component.scss */ "./src/app/syst-countries/syst-countries-form/syst-countries-form.component.scss")).default]
    })
], SystCountriesFormComponent);



/***/ }),

/***/ "./src/app/syst-countries/syst-countries-list/syst-countries-list.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/syst-countries/syst-countries-list/syst-countries-list.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtY291bnRyaWVzL3N5c3QtY291bnRyaWVzLWxpc3Qvc3lzdC1jb3VudHJpZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/syst-countries/syst-countries-list/syst-countries-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/syst-countries/syst-countries-list/syst-countries-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SystCountriesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystCountriesListComponent", function() { return SystCountriesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _syst_countries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../syst-countries.service */ "./src/app/syst-countries/syst-countries.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");







let SystCountriesListComponent = class SystCountriesListComponent {
    constructor(systCountriesService, api, loading, splitPanel) {
        this.systCountriesService = systCountriesService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
        this.systCountriesService.getSystCountries();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
SystCountriesListComponent.ctorParameters = () => [
    { type: _syst_countries_service__WEBPACK_IMPORTED_MODULE_2__["SystCountriesService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] }
];
SystCountriesListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
SystCountriesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-countries-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-countries-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-countries/syst-countries-list/syst-countries-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-countries-list.component.scss */ "./src/app/syst-countries/syst-countries-list/syst-countries-list.component.scss")).default]
    })
], SystCountriesListComponent);



/***/ }),

/***/ "./src/app/syst-countries/syst-countries-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/syst-countries/syst-countries-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SystCountriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystCountriesPageRoutingModule", function() { return SystCountriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _syst_countries_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./syst-countries.page */ "./src/app/syst-countries/syst-countries.page.ts");
/* harmony import */ var _syst_countries_edit_syst_countries_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./syst-countries-edit/syst-countries-edit.component */ "./src/app/syst-countries/syst-countries-edit/syst-countries-edit.component.ts");
/* harmony import */ var _syst_countries_create_syst_countries_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./syst-countries-create/syst-countries-create.component */ "./src/app/syst-countries/syst-countries-create/syst-countries-create.component.ts");
/* harmony import */ var _syst_countries_list_syst_countries_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./syst-countries-list/syst-countries-list.component */ "./src/app/syst-countries/syst-countries-list/syst-countries-list.component.ts");







const routes = [
    {
        path: '',
        component: _syst_countries_page__WEBPACK_IMPORTED_MODULE_3__["SystCountriesPage"]
    },
    {
        path: 'list',
        component: _syst_countries_list_syst_countries_list_component__WEBPACK_IMPORTED_MODULE_6__["SystCountriesListComponent"]
    },
    {
        path: 'create',
        component: _syst_countries_create_syst_countries_create_component__WEBPACK_IMPORTED_MODULE_5__["SystCountriesCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _syst_countries_edit_syst_countries_edit_component__WEBPACK_IMPORTED_MODULE_4__["SystCountriesEditComponent"]
    },
];
let SystCountriesPageRoutingModule = class SystCountriesPageRoutingModule {
};
SystCountriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], SystCountriesPageRoutingModule);



/***/ }),

/***/ "./src/app/syst-countries/syst-countries.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/syst-countries/syst-countries.module.ts ***!
  \*********************************************************/
/*! exports provided: SystCountriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystCountriesPageModule", function() { return SystCountriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _syst_countries_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./syst-countries-routing.module */ "./src/app/syst-countries/syst-countries-routing.module.ts");
/* harmony import */ var _syst_countries_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./syst-countries.page */ "./src/app/syst-countries/syst-countries.page.ts");
/* harmony import */ var _syst_countries_list_syst_countries_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./syst-countries-list/syst-countries-list.component */ "./src/app/syst-countries/syst-countries-list/syst-countries-list.component.ts");
/* harmony import */ var _syst_countries_create_syst_countries_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./syst-countries-create/syst-countries-create.component */ "./src/app/syst-countries/syst-countries-create/syst-countries-create.component.ts");
/* harmony import */ var _syst_countries_duplicate_syst_countries_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./syst-countries-duplicate/syst-countries-duplicate.component */ "./src/app/syst-countries/syst-countries-duplicate/syst-countries-duplicate.component.ts");
/* harmony import */ var _syst_countries_edit_syst_countries_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./syst-countries-edit/syst-countries-edit.component */ "./src/app/syst-countries/syst-countries-edit/syst-countries-edit.component.ts");
/* harmony import */ var _syst_countries_form_syst_countries_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./syst-countries-form/syst-countries-form.component */ "./src/app/syst-countries/syst-countries-form/syst-countries-form.component.ts");













let SystCountriesPageModule = class SystCountriesPageModule {
};
SystCountriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _syst_countries_routing_module__WEBPACK_IMPORTED_MODULE_6__["SystCountriesPageRoutingModule"]
        ],
        declarations: [
            _syst_countries_page__WEBPACK_IMPORTED_MODULE_7__["SystCountriesPage"],
            _syst_countries_list_syst_countries_list_component__WEBPACK_IMPORTED_MODULE_8__["SystCountriesListComponent"],
            _syst_countries_create_syst_countries_create_component__WEBPACK_IMPORTED_MODULE_9__["SystCountriesCreateComponent"],
            _syst_countries_duplicate_syst_countries_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["SystCountriesDuplicateComponent"],
            _syst_countries_edit_syst_countries_edit_component__WEBPACK_IMPORTED_MODULE_11__["SystCountriesEditComponent"],
            _syst_countries_form_syst_countries_form_component__WEBPACK_IMPORTED_MODULE_12__["SystCountriesFormComponent"],
        ]
    })
], SystCountriesPageModule);



/***/ }),

/***/ "./src/app/syst-countries/syst-countries.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/syst-countries/syst-countries.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtY291bnRyaWVzL3N5c3QtY291bnRyaWVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/syst-countries/syst-countries.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/syst-countries/syst-countries.page.ts ***!
  \*******************************************************/
/*! exports provided: SystCountriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystCountriesPage", function() { return SystCountriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");



let SystCountriesPage = class SystCountriesPage {
    constructor(splitPanel) {
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
};
SystCountriesPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] }
];
SystCountriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-countries',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-countries.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-countries/syst-countries.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-countries.page.scss */ "./src/app/syst-countries/syst-countries.page.scss")).default]
    })
], SystCountriesPage);



/***/ }),

/***/ "./src/app/syst-countries/syst-countries.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/syst-countries/syst-countries.service.ts ***!
  \**********************************************************/
/*! exports provided: SystCountriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystCountriesService", function() { return SystCountriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let SystCountriesService = class SystCountriesService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.systCountriesUrl = 'syst-countries';
        this.systCountriesFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.systCountries = [];
        this.systCountry = {};
        this.systCountryLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    getSystCountries(page = this.page, perPage = this.perPage) {
        this.api.get(this.systCountriesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.systCountries = res.data;
            this.systCountryLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editSystCountry(id) {
        this.api.get(this.systCountriesUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.systCountry = res.data.model;
            this.systCountryLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateSystCountry() {
        this.api.put(this.systCountriesUrl + '/' + this.systCountry.id, {
            model: this.systCountry,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getSystCountries(1);
        });
    }
    createSystCountry() {
        this.api.get(this.systCountriesUrl + '/create')
            .subscribe((res) => {
            this.systCountry = {};
            this.systCountryLists = res.lists;
        });
    }
    storeSystCountry() {
        this.api.post(this.systCountriesUrl, {
            model: this.systCountry,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getSystCountries(1);
        });
    }
    deleteSystCountry(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.systCountriesUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getSystCountries(1);
                });
            }
            else {
                return;
            }
        });
    }
};
SystCountriesService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
SystCountriesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SystCountriesService);



/***/ })

}]);
//# sourceMappingURL=syst-countries-syst-countries-module-es2015.js.map