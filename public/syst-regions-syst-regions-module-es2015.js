(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["syst-regions-syst-regions-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-regions/syst-regions-create/syst-regions-create.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-regions/syst-regions-create/syst-regions-create.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/syst-regions'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"systRegionsService.storeSystRegion()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!systRegionsService.systRegionsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'DEPARTAMENTOS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-syst-regions-form #systRegionForm [model]=\"systRegionsService.systRegion\"></app-syst-regions-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-regions/syst-regions-duplicate/syst-regions-duplicate.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-regions/syst-regions-duplicate/syst-regions-duplicate.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  SystRegions duplicate works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-regions/syst-regions-edit/syst-regions-edit.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-regions/syst-regions-edit/syst-regions-edit.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/syst-regions'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"systRegionsService.updateSystRegion()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!systRegionsService.systRegionsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'DEPARTAMENTOS' | titlecase}}: {{ systRegionsService.systRegion?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-syst-regions-form #systRegionForm [model]=\"systRegionsService.systRegion\"></app-syst-regions-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-regions/syst-regions-form/syst-regions-form.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-regions/syst-regions-form/syst-regions-form.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #systRegionsForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- user_profile_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'PERFILES DE USUARIOS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"user_profile_ids\"\n                          id=\"user_profile_ids-field\"\n                          [(ngModel)]=\"model.user_profiles\"\n                          [items]=\"systRegionsService.systRegionLists.UserProfile\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('PERFILES DE USUARIOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('PERFILES DE USUARIOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setUserProfileIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.user_profile_ids\">\n            <div class=\"error-message\" *ngIf=\"systRegionsForm.form.controls['user_profile_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end user_profile_ids -->\n\n\n    <!-- syst_city_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'CIUDADES' | titlecase }}</ion-label>\n        <ionic-selectable name=\"syst_city_ids\"\n                          id=\"syst_city_ids-field\"\n                          [(ngModel)]=\"model.syst_cities\"\n                          [items]=\"systRegionsService.systRegionLists.SystCity\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('CIUDADES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('CIUDADES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setSystCityIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.syst_city_ids\">\n            <div class=\"error-message\" *ngIf=\"systRegionsForm.form.controls['syst_city_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end syst_city_ids -->\n\n\n    <!-- syst_country_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'PAISE' | titlecase }}</ion-label>\n        <ionic-selectable name=\"syst_country_id\"\n                          id=\"syst_country_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.syst_country\"\n                          [items]=\"systRegionsService.systRegionLists.SystCountry\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('PAISES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('PAISES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setSystCountryId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.syst_country_id\">\n            <div class=\"error-message\" *ngIf=\"systRegionsForm.form.controls['syst_country_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end syst_country_id -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NAME' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"systRegionsForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- code -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'CÓDIGO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.code\"\n                            type=\"text\"\n                            name=\"code\"\n                            id=\"code-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.code\">\n                    <div class=\"error-message\" *ngIf=\"systRegionsForm.form.controls['code']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end code -->\n\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-regions/syst-regions-list/syst-regions-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-regions/syst-regions-list/syst-regions-list.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'DEPARTAMENTOS' | titlecase}}\"\n                 primaryLink=\"syst-regions/create\"\n                 primaryText=\"Crear {{'DEPARTAMENTOS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('DEPARTAMENTOS' | lowercase )\"\n                       (ionCancel)=\"this.systRegionsService.searchValue = ''; systRegionsService.getSystRegions()\"\n                       (keyup.enter)=\"systRegionsService.getSystRegions()\"\n                       [(ngModel)]=\"systRegionsService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && systRegionsService.systRegions?.length\">\n        <ion-card *ngFor=\"let systRegion of systRegionsService.systRegions; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NAME' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ systRegion?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CÓDIGO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ systRegion?.code }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'PERFILES DE USUARIOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"systRegion?.user_profiles?.length\">\n                                <ng-container *ngFor=\"let userProfile of systRegion?.user_profiles; let last = last\">\n                                    <a routerLink=\"/user-profiles/{{ userProfile?.id }}/edit\">{{ userProfile?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CIUDADES' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"systRegion?.syst_cities?.length\">\n                                <ng-container *ngFor=\"let systCity of systRegion?.syst_cities; let last = last\">\n                                    <a routerLink=\"/syst-cities/{{ systCity?.id }}/edit\">{{ systCity?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'PAISES' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/syst-countries/{{ systRegion?.syst_country?.id }}/edit\">{{ systRegion?.syst_country?.name }}</a></div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/syst-regions/' + systRegion?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"systRegionsService.deleteSystRegion(systRegion?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !systRegionsService.systRegions?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'DEPARTAMENTOS' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/syst-regions/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'DEPARTAMENTOS' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"systRegionsService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"systRegionsService.getSystRegions(systRegionsService.meta.current_page - 1)\"\n                        [disabled]=\"systRegionsService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{systRegionsService.meta.current_page}}\n                /{{systRegionsService.meta.last_page}} {{systRegionsService.meta.from}}-{{systRegionsService.meta.to}}\n                /{{systRegionsService.meta.total}} </ion-button>\n            <ion-button (click)=\"systRegionsService.getSystRegions(systRegionsService.meta.current_page + 1)\"\n                        [disabled]=\"systRegionsService.meta.current_page == systRegionsService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-regions/syst-regions.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-regions/syst-regions.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"DEPARTAMENTOS\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/syst-regions/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'DEPARTAMENTOS'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/syst-regions/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'DEPARTAMENTOS' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/syst-regions/syst-regions-create/syst-regions-create.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/syst-regions/syst-regions-create/syst-regions-create.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcmVnaW9ucy9zeXN0LXJlZ2lvbnMtY3JlYXRlL3N5c3QtcmVnaW9ucy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/syst-regions/syst-regions-create/syst-regions-create.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/syst-regions/syst-regions-create/syst-regions-create.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SystRegionsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystRegionsCreateComponent", function() { return SystRegionsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _syst_regions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../syst-regions.service */ "./src/app/syst-regions/syst-regions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let SystRegionsCreateComponent = class SystRegionsCreateComponent {
    constructor(systRegionsService, route, platform, splitPanel) {
        this.systRegionsService = systRegionsService;
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
        this.systRegionForm.systRegionsForm.valueChanges.subscribe((data) => {
            this.systRegionsService.systRegionsFormValid.next(this.systRegionForm.systRegionsForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.systRegionsService.createSystRegion();
        this.systRegionsService.systRegion = {};
    }
};
SystRegionsCreateComponent.ctorParameters = () => [
    { type: _syst_regions_service__WEBPACK_IMPORTED_MODULE_2__["SystRegionsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
SystRegionsCreateComponent.propDecorators = {
    systRegionForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['systRegionForm',] }]
};
SystRegionsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-regions-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-regions-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-regions/syst-regions-create/syst-regions-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-regions-create.component.scss */ "./src/app/syst-regions/syst-regions-create/syst-regions-create.component.scss")).default]
    })
], SystRegionsCreateComponent);



/***/ }),

/***/ "./src/app/syst-regions/syst-regions-duplicate/syst-regions-duplicate.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/syst-regions/syst-regions-duplicate/syst-regions-duplicate.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcmVnaW9ucy9zeXN0LXJlZ2lvbnMtZHVwbGljYXRlL3N5c3QtcmVnaW9ucy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/syst-regions/syst-regions-duplicate/syst-regions-duplicate.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/syst-regions/syst-regions-duplicate/syst-regions-duplicate.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SystRegionsDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystRegionsDuplicateComponent", function() { return SystRegionsDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SystRegionsDuplicateComponent = class SystRegionsDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
SystRegionsDuplicateComponent.ctorParameters = () => [];
SystRegionsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-regions-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-regions-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-regions/syst-regions-duplicate/syst-regions-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-regions-duplicate.component.scss */ "./src/app/syst-regions/syst-regions-duplicate/syst-regions-duplicate.component.scss")).default]
    })
], SystRegionsDuplicateComponent);



/***/ }),

/***/ "./src/app/syst-regions/syst-regions-edit/syst-regions-edit.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/syst-regions/syst-regions-edit/syst-regions-edit.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcmVnaW9ucy9zeXN0LXJlZ2lvbnMtZWRpdC9zeXN0LXJlZ2lvbnMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/syst-regions/syst-regions-edit/syst-regions-edit.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/syst-regions/syst-regions-edit/syst-regions-edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SystRegionsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystRegionsEditComponent", function() { return SystRegionsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _syst_regions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../syst-regions.service */ "./src/app/syst-regions/syst-regions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let SystRegionsEditComponent = class SystRegionsEditComponent {
    constructor(systRegionsService, route, platform, splitPanel) {
        this.systRegionsService = systRegionsService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.systRegionsService.editSystRegion(this.id);
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    ngAfterViewInit() {
        this.systRegionForm.systRegionsForm.valueChanges.subscribe((data) => {
            this.systRegionsService.systRegionsFormValid.next(this.systRegionForm.systRegionsForm.valid);
        });
    }
};
SystRegionsEditComponent.ctorParameters = () => [
    { type: _syst_regions_service__WEBPACK_IMPORTED_MODULE_2__["SystRegionsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
SystRegionsEditComponent.propDecorators = {
    systRegionForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['systRegionForm',] }]
};
SystRegionsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-regions-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-regions-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-regions/syst-regions-edit/syst-regions-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-regions-edit.component.scss */ "./src/app/syst-regions/syst-regions-edit/syst-regions-edit.component.scss")).default]
    })
], SystRegionsEditComponent);



/***/ }),

/***/ "./src/app/syst-regions/syst-regions-form/syst-regions-form.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/syst-regions/syst-regions-form/syst-regions-form.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcmVnaW9ucy9zeXN0LXJlZ2lvbnMtZm9ybS9zeXN0LXJlZ2lvbnMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/syst-regions/syst-regions-form/syst-regions-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/syst-regions/syst-regions-form/syst-regions-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SystRegionsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystRegionsFormComponent", function() { return SystRegionsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _syst_regions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../syst-regions.service */ "./src/app/syst-regions/syst-regions.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let SystRegionsFormComponent = class SystRegionsFormComponent {
    constructor(systRegionsService, toTitlecase) {
        this.systRegionsService = systRegionsService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NAME') + ' es obligatorio.' },
            ],
            'code': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.' },
            ],
            'syst_country_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('PAÍS') + ' es obligatorio.' },
            ],
            'user_profile_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('PERFILES DE USUARIOS') + ' es obligatorio.' },
            ],
            'syst_city_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CIUDADES') + ' es obligatorio.' },
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
        this.systRegionsService.systRegion.user_profile_ids = userProfileIds;
    }
    // end setUserProfileIds
    // set setSystCityIds
    setSystCityIds(event) {
        let systCityIds = null;
        if (event.value.length) {
            systCityIds = [];
            for (let i = 0; i < event.value.length; i++) {
                systCityIds.push(event.value[i].id);
            }
        }
        this.systRegionsService.systRegion.syst_city_ids = systCityIds;
    }
    // end setSystCityIds
    // set setSystCountryId
    setSystCountryId(event) {
        this.systRegionsService.systRegion.syst_country_id = event.value ? event.value.id : null;
    }
};
SystRegionsFormComponent.ctorParameters = () => [
    { type: _syst_regions_service__WEBPACK_IMPORTED_MODULE_2__["SystRegionsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
SystRegionsFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    systRegionsForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['systRegionsForm',] }]
};
SystRegionsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-regions-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-regions-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-regions/syst-regions-form/syst-regions-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-regions-form.component.scss */ "./src/app/syst-regions/syst-regions-form/syst-regions-form.component.scss")).default]
    })
], SystRegionsFormComponent);



/***/ }),

/***/ "./src/app/syst-regions/syst-regions-list/syst-regions-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/syst-regions/syst-regions-list/syst-regions-list.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcmVnaW9ucy9zeXN0LXJlZ2lvbnMtbGlzdC9zeXN0LXJlZ2lvbnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/syst-regions/syst-regions-list/syst-regions-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/syst-regions/syst-regions-list/syst-regions-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SystRegionsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystRegionsListComponent", function() { return SystRegionsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _syst_regions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../syst-regions.service */ "./src/app/syst-regions/syst-regions.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");







let SystRegionsListComponent = class SystRegionsListComponent {
    constructor(systRegionsService, api, loading, splitPanel) {
        this.systRegionsService = systRegionsService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
        this.systRegionsService.getSystRegions();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
SystRegionsListComponent.ctorParameters = () => [
    { type: _syst_regions_service__WEBPACK_IMPORTED_MODULE_2__["SystRegionsService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] }
];
SystRegionsListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
SystRegionsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-regions-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-regions-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-regions/syst-regions-list/syst-regions-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-regions-list.component.scss */ "./src/app/syst-regions/syst-regions-list/syst-regions-list.component.scss")).default]
    })
], SystRegionsListComponent);



/***/ }),

/***/ "./src/app/syst-regions/syst-regions-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/syst-regions/syst-regions-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SystRegionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystRegionsPageRoutingModule", function() { return SystRegionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _syst_regions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./syst-regions.page */ "./src/app/syst-regions/syst-regions.page.ts");
/* harmony import */ var _syst_regions_edit_syst_regions_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./syst-regions-edit/syst-regions-edit.component */ "./src/app/syst-regions/syst-regions-edit/syst-regions-edit.component.ts");
/* harmony import */ var _syst_regions_create_syst_regions_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./syst-regions-create/syst-regions-create.component */ "./src/app/syst-regions/syst-regions-create/syst-regions-create.component.ts");
/* harmony import */ var _syst_regions_list_syst_regions_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./syst-regions-list/syst-regions-list.component */ "./src/app/syst-regions/syst-regions-list/syst-regions-list.component.ts");







const routes = [
    {
        path: '',
        component: _syst_regions_page__WEBPACK_IMPORTED_MODULE_3__["SystRegionsPage"]
    },
    {
        path: 'list',
        component: _syst_regions_list_syst_regions_list_component__WEBPACK_IMPORTED_MODULE_6__["SystRegionsListComponent"]
    },
    {
        path: 'create',
        component: _syst_regions_create_syst_regions_create_component__WEBPACK_IMPORTED_MODULE_5__["SystRegionsCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _syst_regions_edit_syst_regions_edit_component__WEBPACK_IMPORTED_MODULE_4__["SystRegionsEditComponent"]
    },
];
let SystRegionsPageRoutingModule = class SystRegionsPageRoutingModule {
};
SystRegionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], SystRegionsPageRoutingModule);



/***/ }),

/***/ "./src/app/syst-regions/syst-regions.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/syst-regions/syst-regions.module.ts ***!
  \*****************************************************/
/*! exports provided: SystRegionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystRegionsPageModule", function() { return SystRegionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _syst_regions_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./syst-regions-routing.module */ "./src/app/syst-regions/syst-regions-routing.module.ts");
/* harmony import */ var _syst_regions_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./syst-regions.page */ "./src/app/syst-regions/syst-regions.page.ts");
/* harmony import */ var _syst_regions_list_syst_regions_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./syst-regions-list/syst-regions-list.component */ "./src/app/syst-regions/syst-regions-list/syst-regions-list.component.ts");
/* harmony import */ var _syst_regions_create_syst_regions_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./syst-regions-create/syst-regions-create.component */ "./src/app/syst-regions/syst-regions-create/syst-regions-create.component.ts");
/* harmony import */ var _syst_regions_duplicate_syst_regions_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./syst-regions-duplicate/syst-regions-duplicate.component */ "./src/app/syst-regions/syst-regions-duplicate/syst-regions-duplicate.component.ts");
/* harmony import */ var _syst_regions_edit_syst_regions_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./syst-regions-edit/syst-regions-edit.component */ "./src/app/syst-regions/syst-regions-edit/syst-regions-edit.component.ts");
/* harmony import */ var _syst_regions_form_syst_regions_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./syst-regions-form/syst-regions-form.component */ "./src/app/syst-regions/syst-regions-form/syst-regions-form.component.ts");













let SystRegionsPageModule = class SystRegionsPageModule {
};
SystRegionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _syst_regions_routing_module__WEBPACK_IMPORTED_MODULE_6__["SystRegionsPageRoutingModule"]
        ],
        declarations: [
            _syst_regions_page__WEBPACK_IMPORTED_MODULE_7__["SystRegionsPage"],
            _syst_regions_list_syst_regions_list_component__WEBPACK_IMPORTED_MODULE_8__["SystRegionsListComponent"],
            _syst_regions_create_syst_regions_create_component__WEBPACK_IMPORTED_MODULE_9__["SystRegionsCreateComponent"],
            _syst_regions_duplicate_syst_regions_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["SystRegionsDuplicateComponent"],
            _syst_regions_edit_syst_regions_edit_component__WEBPACK_IMPORTED_MODULE_11__["SystRegionsEditComponent"],
            _syst_regions_form_syst_regions_form_component__WEBPACK_IMPORTED_MODULE_12__["SystRegionsFormComponent"],
        ]
    })
], SystRegionsPageModule);



/***/ }),

/***/ "./src/app/syst-regions/syst-regions.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/syst-regions/syst-regions.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcmVnaW9ucy9zeXN0LXJlZ2lvbnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/syst-regions/syst-regions.page.ts":
/*!***************************************************!*\
  !*** ./src/app/syst-regions/syst-regions.page.ts ***!
  \***************************************************/
/*! exports provided: SystRegionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystRegionsPage", function() { return SystRegionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");



let SystRegionsPage = class SystRegionsPage {
    constructor(splitPanel) {
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
};
SystRegionsPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] }
];
SystRegionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-regions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-regions.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-regions/syst-regions.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-regions.page.scss */ "./src/app/syst-regions/syst-regions.page.scss")).default]
    })
], SystRegionsPage);



/***/ }),

/***/ "./src/app/syst-regions/syst-regions.service.ts":
/*!******************************************************!*\
  !*** ./src/app/syst-regions/syst-regions.service.ts ***!
  \******************************************************/
/*! exports provided: SystRegionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystRegionsService", function() { return SystRegionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let SystRegionsService = class SystRegionsService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.systRegionsUrl = 'syst-regions';
        this.systRegionsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.systRegions = [];
        this.systRegion = {};
        this.systRegionLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    getSystRegions(page = this.page, perPage = this.perPage) {
        this.api.get(this.systRegionsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.systRegions = res.data;
            this.systRegionLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editSystRegion(id) {
        this.api.get(this.systRegionsUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.systRegion = res.data.model;
            this.systRegionLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateSystRegion() {
        this.api.put(this.systRegionsUrl + '/' + this.systRegion.id, {
            model: this.systRegion,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getSystRegions(1);
        });
    }
    createSystRegion() {
        this.api.get(this.systRegionsUrl + '/create')
            .subscribe((res) => {
            this.systRegion = {};
            this.systRegionLists = res.lists;
        });
    }
    storeSystRegion() {
        this.api.post(this.systRegionsUrl, {
            model: this.systRegion,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getSystRegions(1);
        });
    }
    deleteSystRegion(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.systRegionsUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getSystRegions(1);
                });
            }
            else {
                return;
            }
        });
    }
};
SystRegionsService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
SystRegionsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SystRegionsService);



/***/ })

}]);
//# sourceMappingURL=syst-regions-syst-regions-module-es2015.js.map