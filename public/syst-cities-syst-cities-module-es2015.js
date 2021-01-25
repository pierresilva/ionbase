(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["syst-cities-syst-cities-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities-create/syst-cities-create.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities-create/syst-cities-create.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/syst-cities'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"systCitiesService.storeSystCity()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!systCitiesService.systCitiesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'CIUDADES' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-syst-cities-form #systCityForm [model]=\"systCitiesService.systCity\"></app-syst-cities-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities-duplicate/syst-cities-duplicate.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities-duplicate/syst-cities-duplicate.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  SystCities duplicate works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities-edit/syst-cities-edit.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities-edit/syst-cities-edit.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/syst-cities'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"systCitiesService.updateSystCity()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!systCitiesService.systCitiesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'CIUDADES' | titlecase}}: {{ systCitiesService.systCity?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-syst-cities-form #systCityForm [model]=\"systCitiesService.systCity\"></app-syst-cities-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities-form/syst-cities-form.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities-form/syst-cities-form.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #systCitiesForm=\"ngForm\" novalidate autocomplete=\"off\">\r\n\r\n\r\n    <!-- user_profile_ids -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'PERFILES DE USUARIOS' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"user_profile_ids\"\r\n                          id=\"user_profile_ids-field\"\r\n                          [(ngModel)]=\"model.user_profiles\"\r\n                          [items]=\"systCitiesService.systCityLists.UserProfile\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('PERFILES DE USUARIOS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('PERFILES DE USUARIOS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setUserProfileIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.user_profile_ids\">\r\n            <div class=\"error-message\" *ngIf=\"systCitiesForm.form.controls['user_profile_ids']?.hasError(validation.type)\">\r\n            {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end user_profile_ids -->\r\n\r\n\r\n    <!-- syst_region_id -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'DEPARTAMENTO' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"syst_region_id\"\r\n                          id=\"syst_region_id-field\"\r\n                          [required]=\"true\"\r\n                          [(ngModel)]=\"model.syst_region\"\r\n                          [items]=\"systCitiesService.systCityLists.SystRegion\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('DEPARTAMENTOS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('DEPARTAMENTOS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setSystRegionId($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.syst_region_id\">\r\n            <div class=\"error-message\" *ngIf=\"systCitiesForm.form.controls['syst_region_id']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end syst_region_id -->\r\n\r\n\r\n    <!-- comp_address_ids -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'EMPRESAS DIRECCIONES' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"comp_address_ids\"\r\n                          id=\"comp_address_ids-field\"\r\n                          [(ngModel)]=\"model.comp_addresses\"\r\n                          [items]=\"systCitiesService.systCityLists.CompAddress\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('EMPRESAS DIRECCIONES' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('EMPRESAS DIRECCIONES' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setCompAddressIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.comp_address_ids\">\r\n            <div class=\"error-message\" *ngIf=\"systCitiesForm.form.controls['comp_address_ids']?.hasError(validation.type)\">\r\n            {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end comp_address_ids -->\r\n\r\n\r\n            <!-- name -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.name\"\r\n                            type=\"text\"\r\n                            name=\"name\"\r\n                            id=\"name-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n                    <div class=\"error-message\" *ngIf=\"systCitiesForm.form.controls['name']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end name -->\r\n\r\n\r\n            <!-- code -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'CÓDIGO' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.code\"\r\n                            type=\"text\"\r\n                            name=\"code\"\r\n                            id=\"code-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.code\">\r\n                    <div class=\"error-message\" *ngIf=\"systCitiesForm.form.controls['code']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end code -->\r\n\r\n\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities-list/syst-cities-list.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities-list/syst-cities-list.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'CIUDADES' | titlecase}}\"\r\n                 primaryLink=\"syst-cities/create\"\r\n                 primaryText=\"Crear {{'CIUDADES' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-searchbar showCancelButton=\"focus\"\r\n                       [cancelButtonText]=\"'Cancelar'\"\r\n                       [placeholder]=\"'Buscar ' + ('CIUDADES' | lowercase )\"\r\n                       (ionCancel)=\"this.systCitiesService.searchValue = ''; systCitiesService.getSystCities()\"\r\n                       (keyup.enter)=\"systCitiesService.getSystCities()\"\r\n                       [(ngModel)]=\"systCitiesService.searchValue\"></ion-searchbar>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && systCitiesService.systCities?.length\">\r\n        <ion-card *ngFor=\"let systCity of systCitiesService.systCities; let index = index\">\r\n            <ion-list>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ systCity?.name }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'CÓDIGO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ systCity?.code }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'PERFILES DE USUARIOS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">\r\n                            <ng-container *ngIf=\"systCity?.user_profiles?.length\">\r\n                                <ng-container *ngFor=\"let userProfile of systCity?.user_profiles; let last = last\">\r\n                                    <a routerLink=\"/user-profiles/{{ userProfile?.id }}/edit\">{{ userProfile?.name }}</a><span *ngIf=\"!last\">, </span>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'DEPARTAMENTOS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\"><a routerLink=\"/syst-regions/{{ systCity?.syst_region?.id }}/edit\">{{ systCity?.syst_region?.name }}</a></div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'EMPRESAS DIRECCIONES' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">\r\n                            <ng-container *ngIf=\"systCity?.comp_addresses?.length\">\r\n                                <ng-container *ngFor=\"let compAddress of systCity?.comp_addresses; let last = last\">\r\n                                    <a routerLink=\"/comp-addresses/{{ compAddress?.id }}/edit\">{{ compAddress?.name }}</a><span *ngIf=\"!last\">, </span>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n                    </ion-item>\r\n            </ion-list>\r\n            <ion-footer>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/syst-cities/' + systCity?.id + '/edit'\">\r\n                            <ion-icon name=\"create-outline\"></ion-icon>\r\n                            <div>Editar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"systCitiesService.deleteSystCity(systCity?.id)\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            <div>Eliminar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-footer>\r\n        </ion-card>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && !systCitiesService.systCities?.length\">\r\n        <ion-item>\r\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label><h2>No se encontraron {{'CIUDADES' | titlecase}}</h2></ion-label>\r\n            <ion-button [routerLink]=\"'/syst-cities/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\r\n                Crear {{'CIUDADES' | titlecase}}\r\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"systCitiesService.meta\">\r\n        <ion-col class=\"ion-text-center\" size=\"12\">\r\n            <ion-button (click)=\"systCitiesService.getSystCities(systCitiesService.meta.current_page - 1)\"\r\n                        [disabled]=\"systCitiesService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{systCitiesService.meta.current_page}}\r\n                /{{systCitiesService.meta.last_page}} {{systCitiesService.meta.from}}-{{systCitiesService.meta.to}}\r\n                /{{systCitiesService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"systCitiesService.getSystCities(systCitiesService.meta.current_page + 1)\"\r\n                        [disabled]=\"systCitiesService.meta.current_page == systCitiesService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-cities/syst-cities.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"CIUDADES\"></app-main-header>\r\n\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/syst-cities/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'CIUDADES'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/syst-cities/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'CIUDADES' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n");

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
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let SystCitiesCreateComponent = class SystCitiesCreateComponent {
    constructor(systCitiesService, route, platform, splitPanel) {
        this.systCitiesService = systCitiesService;
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
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
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let SystCitiesEditComponent = class SystCitiesEditComponent {
    constructor(systCitiesService, route, platform, splitPanel) {
        this.systCitiesService = systCitiesService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.systCitiesService.editSystCity(this.id);
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
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
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");







let SystCitiesListComponent = class SystCitiesListComponent {
    constructor(systCitiesService, api, loading, splitPanel) {
        this.systCitiesService = systCitiesService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
        this.systCitiesService.getSystCities();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
SystCitiesListComponent.ctorParameters = () => [
    { type: _syst_cities_service__WEBPACK_IMPORTED_MODULE_2__["SystCitiesService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] }
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
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");



let SystCitiesPage = class SystCitiesPage {
    constructor(splitPanel) {
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
};
SystCitiesPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] }
];
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