(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comp-addresses-comp-addresses-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-addresses/comp-addresses-create/comp-addresses-create.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-addresses/comp-addresses-create/comp-addresses-create.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/comp-addresses'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"compAddressesService.storeCompAddress()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!compAddressesService.compAddressesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'EMPRESAS DIRECCIONES' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-comp-addresses-form #compAddressForm [model]=\"compAddressesService.compAddress\"></app-comp-addresses-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-addresses/comp-addresses-duplicate/comp-addresses-duplicate.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-addresses/comp-addresses-duplicate/comp-addresses-duplicate.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  CompAddresses duplicate works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-addresses/comp-addresses-edit/comp-addresses-edit.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-addresses/comp-addresses-edit/comp-addresses-edit.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/comp-addresses'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"compAddressesService.updateCompAddress()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!compAddressesService.compAddressesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'EMPRESAS DIRECCIONES' | titlecase}}: {{ compAddressesService.compAddress?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-comp-addresses-form #compAddressForm [model]=\"compAddressesService.compAddress\"></app-comp-addresses-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-addresses/comp-addresses-form/comp-addresses-form.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-addresses/comp-addresses-form/comp-addresses-form.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #compAddressesForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- company_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'EMPRESA' | titlecase }}</ion-label>\n        <ionic-selectable name=\"company_id\"\n                          id=\"company_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.company\"\n                          [items]=\"compAddressesService.compAddressLists.Company\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('EMPRESAS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('EMPRESAS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setCompanyId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.company_id\">\n            <div class=\"error-message\" *ngIf=\"compAddressesForm.form.controls['company_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end company_id -->\n\n\n    <!-- syst_city_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'CIUDAD' | titlecase }}</ion-label>\n        <ionic-selectable name=\"syst_city_id\"\n                          id=\"syst_city_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.syst_city\"\n                          [items]=\"compAddressesService.compAddressLists.SystCity\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('CIUDADES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('CIUDADES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setSystCityId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.syst_city_id\">\n            <div class=\"error-message\" *ngIf=\"compAddressesForm.form.controls['syst_city_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end syst_city_id -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"compAddressesForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- address -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'DIRECCIÓN' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.address\"\n                            type=\"text\"\n                            name=\"address\"\n                            id=\"address-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.address\">\n                    <div class=\"error-message\" *ngIf=\"compAddressesForm.form.controls['address']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end address -->\n\n\n            <!-- main -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'PRINCIPAL' | titlecase }}</ion-label>\n                <ion-toggle name=\"main\"\n                            id=\"main-field\"\n                            slot=\"end\"\n                            [(ngModel)]=\"model.main\"></ion-toggle>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.main\">\n                    <div class=\"error-message\" *ngIf=\"compAddressesForm.form.controls['main']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end main -->\n\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-addresses/comp-addresses-list/comp-addresses-list.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-addresses/comp-addresses-list/comp-addresses-list.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'EMPRESAS DIRECCIONES' | titlecase}}\"\r\n                 primaryLink=\"comp-addresses/create\"\r\n                 primaryText=\"Crear {{'EMPRESAS DIRECCIONES' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-searchbar showCancelButton=\"focus\"\r\n                       [cancelButtonText]=\"'Cancelar'\"\r\n                       [placeholder]=\"'Buscar ' + ('EMPRESAS DIRECCIONES' | lowercase )\"\r\n                       (ionCancel)=\"this.compAddressesService.searchValue = ''; compAddressesService.getCompAddresses()\"\r\n                       (keyup.enter)=\"compAddressesService.getCompAddresses()\"\r\n                       [(ngModel)]=\"compAddressesService.searchValue\"></ion-searchbar>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && compAddressesService.compAddresses?.length\">\r\n        <ion-card *ngFor=\"let compAddress of compAddressesService.compAddresses; let index = index\">\r\n            <ion-list>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ compAddress?.name }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'DIRECCIÓN' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ compAddress?.address }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'PRINCIPAL' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ compAddress?.main  ? 'Si' : 'No' }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'EMPRESAS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\"><a routerLink=\"/companies/{{ compAddress?.company?.id }}/edit\">{{ compAddress?.company?.name }}</a></div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'CIUDADES' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\"><a routerLink=\"/syst-cities/{{ compAddress?.syst_city?.id }}/edit\">{{ compAddress?.syst_city?.name }}</a></div>\r\n                    </ion-item>\r\n            </ion-list>\r\n            <ion-footer>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/comp-addresses/' + compAddress?.id + '/edit'\">\r\n                            <ion-icon name=\"create-outline\"></ion-icon>\r\n                            <div>Editar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"compAddressesService.deleteCompAddress(compAddress?.id)\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            <div>Eliminar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-footer>\r\n        </ion-card>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && !compAddressesService.compAddresses?.length\">\r\n        <ion-item>\r\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label><h2>No se encontraron {{'EMPRESAS DIRECCIONES' | titlecase}}</h2></ion-label>\r\n            <ion-button [routerLink]=\"'/comp-addresses/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\r\n                Crear {{'EMPRESAS DIRECCIONES' | titlecase}}\r\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"compAddressesService.meta\">\r\n        <ion-col class=\"ion-text-center\" size=\"12\">\r\n            <ion-button (click)=\"compAddressesService.getCompAddresses(compAddressesService.meta.current_page - 1)\"\r\n                        [disabled]=\"compAddressesService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{compAddressesService.meta.current_page}}\r\n                /{{compAddressesService.meta.last_page}} {{compAddressesService.meta.from}}-{{compAddressesService.meta.to}}\r\n                /{{compAddressesService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"compAddressesService.getCompAddresses(compAddressesService.meta.current_page + 1)\"\r\n                        [disabled]=\"compAddressesService.meta.current_page == compAddressesService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-addresses/comp-addresses.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-addresses/comp-addresses.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"EMPRESAS DIRECCIONES\"></app-main-header>\r\n\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/comp-addresses/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'EMPRESAS DIRECCIONES'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/comp-addresses/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'EMPRESAS DIRECCIONES' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/comp-addresses/comp-addresses-create/comp-addresses-create.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/comp-addresses/comp-addresses-create/comp-addresses-create.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtYWRkcmVzc2VzL2NvbXAtYWRkcmVzc2VzLWNyZWF0ZS9jb21wLWFkZHJlc3Nlcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/comp-addresses/comp-addresses-create/comp-addresses-create.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/comp-addresses/comp-addresses-create/comp-addresses-create.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CompAddressesCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompAddressesCreateComponent", function() { return CompAddressesCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comp_addresses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comp-addresses.service */ "./src/app/comp-addresses/comp-addresses.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let CompAddressesCreateComponent = class CompAddressesCreateComponent {
    constructor(compAddressesService, route, platform, splitPanel) {
        this.compAddressesService = compAddressesService;
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
        this.compAddressForm.compAddressesForm.valueChanges.subscribe((data) => {
            this.compAddressesService.compAddressesFormValid.next(this.compAddressForm.compAddressesForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.compAddressesService.createCompAddress();
        this.compAddressesService.compAddress = {};
    }
};
CompAddressesCreateComponent.ctorParameters = () => [
    { type: _comp_addresses_service__WEBPACK_IMPORTED_MODULE_2__["CompAddressesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
CompAddressesCreateComponent.propDecorators = {
    compAddressForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['compAddressForm',] }]
};
CompAddressesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-addresses-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comp-addresses-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-addresses/comp-addresses-create/comp-addresses-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comp-addresses-create.component.scss */ "./src/app/comp-addresses/comp-addresses-create/comp-addresses-create.component.scss")).default]
    })
], CompAddressesCreateComponent);



/***/ }),

/***/ "./src/app/comp-addresses/comp-addresses-duplicate/comp-addresses-duplicate.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/comp-addresses/comp-addresses-duplicate/comp-addresses-duplicate.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtYWRkcmVzc2VzL2NvbXAtYWRkcmVzc2VzLWR1cGxpY2F0ZS9jb21wLWFkZHJlc3Nlcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/comp-addresses/comp-addresses-duplicate/comp-addresses-duplicate.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/comp-addresses/comp-addresses-duplicate/comp-addresses-duplicate.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CompAddressesDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompAddressesDuplicateComponent", function() { return CompAddressesDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CompAddressesDuplicateComponent = class CompAddressesDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
CompAddressesDuplicateComponent.ctorParameters = () => [];
CompAddressesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-addresses-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comp-addresses-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-addresses/comp-addresses-duplicate/comp-addresses-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comp-addresses-duplicate.component.scss */ "./src/app/comp-addresses/comp-addresses-duplicate/comp-addresses-duplicate.component.scss")).default]
    })
], CompAddressesDuplicateComponent);



/***/ }),

/***/ "./src/app/comp-addresses/comp-addresses-edit/comp-addresses-edit.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/comp-addresses/comp-addresses-edit/comp-addresses-edit.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtYWRkcmVzc2VzL2NvbXAtYWRkcmVzc2VzLWVkaXQvY29tcC1hZGRyZXNzZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/comp-addresses/comp-addresses-edit/comp-addresses-edit.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/comp-addresses/comp-addresses-edit/comp-addresses-edit.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CompAddressesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompAddressesEditComponent", function() { return CompAddressesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comp_addresses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comp-addresses.service */ "./src/app/comp-addresses/comp-addresses.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let CompAddressesEditComponent = class CompAddressesEditComponent {
    constructor(compAddressesService, route, platform, splitPanel) {
        this.compAddressesService = compAddressesService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.compAddressesService.editCompAddress(this.id);
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    ngAfterViewInit() {
        this.compAddressForm.compAddressesForm.valueChanges.subscribe((data) => {
            this.compAddressesService.compAddressesFormValid.next(this.compAddressForm.compAddressesForm.valid);
        });
    }
};
CompAddressesEditComponent.ctorParameters = () => [
    { type: _comp_addresses_service__WEBPACK_IMPORTED_MODULE_2__["CompAddressesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
CompAddressesEditComponent.propDecorators = {
    compAddressForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['compAddressForm',] }]
};
CompAddressesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-addresses-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comp-addresses-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-addresses/comp-addresses-edit/comp-addresses-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comp-addresses-edit.component.scss */ "./src/app/comp-addresses/comp-addresses-edit/comp-addresses-edit.component.scss")).default]
    })
], CompAddressesEditComponent);



/***/ }),

/***/ "./src/app/comp-addresses/comp-addresses-form/comp-addresses-form.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/comp-addresses/comp-addresses-form/comp-addresses-form.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtYWRkcmVzc2VzL2NvbXAtYWRkcmVzc2VzLWZvcm0vY29tcC1hZGRyZXNzZXMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/comp-addresses/comp-addresses-form/comp-addresses-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/comp-addresses/comp-addresses-form/comp-addresses-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CompAddressesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompAddressesFormComponent", function() { return CompAddressesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comp_addresses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comp-addresses.service */ "./src/app/comp-addresses/comp-addresses.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let CompAddressesFormComponent = class CompAddressesFormComponent {
    constructor(compAddressesService, toTitlecase) {
        this.compAddressesService = compAddressesService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'company_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('EMPRESA') + ' es obligatorio.' },
            ],
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'syst_city_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CIUDAD') + ' es obligatorio.' },
            ],
            'address': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('DIRECCIÓN') + ' es obligatorio.' },
            ],
            'main': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('PRINCIPAL') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setCompanyId
    setCompanyId(event) {
        this.compAddressesService.compAddress.company_id = event.value ? event.value.id : null;
    }
    // end setCompanyId
    // set setSystCityId
    setSystCityId(event) {
        this.compAddressesService.compAddress.syst_city_id = event.value ? event.value.id : null;
    }
};
CompAddressesFormComponent.ctorParameters = () => [
    { type: _comp_addresses_service__WEBPACK_IMPORTED_MODULE_2__["CompAddressesService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
CompAddressesFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    compAddressesForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['compAddressesForm',] }]
};
CompAddressesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-addresses-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comp-addresses-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-addresses/comp-addresses-form/comp-addresses-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comp-addresses-form.component.scss */ "./src/app/comp-addresses/comp-addresses-form/comp-addresses-form.component.scss")).default]
    })
], CompAddressesFormComponent);



/***/ }),

/***/ "./src/app/comp-addresses/comp-addresses-list/comp-addresses-list.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/comp-addresses/comp-addresses-list/comp-addresses-list.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtYWRkcmVzc2VzL2NvbXAtYWRkcmVzc2VzLWxpc3QvY29tcC1hZGRyZXNzZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/comp-addresses/comp-addresses-list/comp-addresses-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/comp-addresses/comp-addresses-list/comp-addresses-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CompAddressesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompAddressesListComponent", function() { return CompAddressesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comp_addresses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comp-addresses.service */ "./src/app/comp-addresses/comp-addresses.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");







let CompAddressesListComponent = class CompAddressesListComponent {
    constructor(compAddressesService, api, loading, splitPanel) {
        this.compAddressesService = compAddressesService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
        this.compAddressesService.getCompAddresses();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
CompAddressesListComponent.ctorParameters = () => [
    { type: _comp_addresses_service__WEBPACK_IMPORTED_MODULE_2__["CompAddressesService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] }
];
CompAddressesListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
CompAddressesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-addresses-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comp-addresses-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-addresses/comp-addresses-list/comp-addresses-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comp-addresses-list.component.scss */ "./src/app/comp-addresses/comp-addresses-list/comp-addresses-list.component.scss")).default]
    })
], CompAddressesListComponent);



/***/ }),

/***/ "./src/app/comp-addresses/comp-addresses-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/comp-addresses/comp-addresses-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CompAddressesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompAddressesPageRoutingModule", function() { return CompAddressesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _comp_addresses_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comp-addresses.page */ "./src/app/comp-addresses/comp-addresses.page.ts");
/* harmony import */ var _comp_addresses_edit_comp_addresses_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comp-addresses-edit/comp-addresses-edit.component */ "./src/app/comp-addresses/comp-addresses-edit/comp-addresses-edit.component.ts");
/* harmony import */ var _comp_addresses_create_comp_addresses_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comp-addresses-create/comp-addresses-create.component */ "./src/app/comp-addresses/comp-addresses-create/comp-addresses-create.component.ts");
/* harmony import */ var _comp_addresses_list_comp_addresses_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comp-addresses-list/comp-addresses-list.component */ "./src/app/comp-addresses/comp-addresses-list/comp-addresses-list.component.ts");







const routes = [
    {
        path: '',
        component: _comp_addresses_page__WEBPACK_IMPORTED_MODULE_3__["CompAddressesPage"]
    },
    {
        path: 'list',
        component: _comp_addresses_list_comp_addresses_list_component__WEBPACK_IMPORTED_MODULE_6__["CompAddressesListComponent"]
    },
    {
        path: 'create',
        component: _comp_addresses_create_comp_addresses_create_component__WEBPACK_IMPORTED_MODULE_5__["CompAddressesCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _comp_addresses_edit_comp_addresses_edit_component__WEBPACK_IMPORTED_MODULE_4__["CompAddressesEditComponent"]
    },
];
let CompAddressesPageRoutingModule = class CompAddressesPageRoutingModule {
};
CompAddressesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], CompAddressesPageRoutingModule);



/***/ }),

/***/ "./src/app/comp-addresses/comp-addresses.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/comp-addresses/comp-addresses.module.ts ***!
  \*********************************************************/
/*! exports provided: CompAddressesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompAddressesPageModule", function() { return CompAddressesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _comp_addresses_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comp-addresses-routing.module */ "./src/app/comp-addresses/comp-addresses-routing.module.ts");
/* harmony import */ var _comp_addresses_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comp-addresses.page */ "./src/app/comp-addresses/comp-addresses.page.ts");
/* harmony import */ var _comp_addresses_list_comp_addresses_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comp-addresses-list/comp-addresses-list.component */ "./src/app/comp-addresses/comp-addresses-list/comp-addresses-list.component.ts");
/* harmony import */ var _comp_addresses_create_comp_addresses_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comp-addresses-create/comp-addresses-create.component */ "./src/app/comp-addresses/comp-addresses-create/comp-addresses-create.component.ts");
/* harmony import */ var _comp_addresses_duplicate_comp_addresses_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comp-addresses-duplicate/comp-addresses-duplicate.component */ "./src/app/comp-addresses/comp-addresses-duplicate/comp-addresses-duplicate.component.ts");
/* harmony import */ var _comp_addresses_edit_comp_addresses_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comp-addresses-edit/comp-addresses-edit.component */ "./src/app/comp-addresses/comp-addresses-edit/comp-addresses-edit.component.ts");
/* harmony import */ var _comp_addresses_form_comp_addresses_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comp-addresses-form/comp-addresses-form.component */ "./src/app/comp-addresses/comp-addresses-form/comp-addresses-form.component.ts");













let CompAddressesPageModule = class CompAddressesPageModule {
};
CompAddressesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _comp_addresses_routing_module__WEBPACK_IMPORTED_MODULE_6__["CompAddressesPageRoutingModule"]
        ],
        declarations: [
            _comp_addresses_page__WEBPACK_IMPORTED_MODULE_7__["CompAddressesPage"],
            _comp_addresses_list_comp_addresses_list_component__WEBPACK_IMPORTED_MODULE_8__["CompAddressesListComponent"],
            _comp_addresses_create_comp_addresses_create_component__WEBPACK_IMPORTED_MODULE_9__["CompAddressesCreateComponent"],
            _comp_addresses_duplicate_comp_addresses_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["CompAddressesDuplicateComponent"],
            _comp_addresses_edit_comp_addresses_edit_component__WEBPACK_IMPORTED_MODULE_11__["CompAddressesEditComponent"],
            _comp_addresses_form_comp_addresses_form_component__WEBPACK_IMPORTED_MODULE_12__["CompAddressesFormComponent"],
        ]
    })
], CompAddressesPageModule);



/***/ }),

/***/ "./src/app/comp-addresses/comp-addresses.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/comp-addresses/comp-addresses.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtYWRkcmVzc2VzL2NvbXAtYWRkcmVzc2VzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/comp-addresses/comp-addresses.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/comp-addresses/comp-addresses.page.ts ***!
  \*******************************************************/
/*! exports provided: CompAddressesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompAddressesPage", function() { return CompAddressesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");



let CompAddressesPage = class CompAddressesPage {
    constructor(splitPanel) {
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
};
CompAddressesPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] }
];
CompAddressesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-addresses',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comp-addresses.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-addresses/comp-addresses.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comp-addresses.page.scss */ "./src/app/comp-addresses/comp-addresses.page.scss")).default]
    })
], CompAddressesPage);



/***/ }),

/***/ "./src/app/comp-addresses/comp-addresses.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/comp-addresses/comp-addresses.service.ts ***!
  \**********************************************************/
/*! exports provided: CompAddressesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompAddressesService", function() { return CompAddressesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let CompAddressesService = class CompAddressesService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.compAddressesUrl = 'comp-addresses';
        this.compAddressesFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.compAddresses = [];
        this.compAddress = {};
        this.compAddressLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    getCompAddresses(page = this.page, perPage = this.perPage) {
        this.api.get(this.compAddressesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.compAddresses = res.data;
            this.compAddressLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editCompAddress(id) {
        this.api.get(this.compAddressesUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.compAddress = res.data.model;
            this.compAddressLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateCompAddress() {
        this.api.put(this.compAddressesUrl + '/' + this.compAddress.id, {
            model: this.compAddress,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getCompAddresses(1);
        });
    }
    createCompAddress() {
        this.api.get(this.compAddressesUrl + '/create')
            .subscribe((res) => {
            this.compAddress = {};
            this.compAddressLists = res.lists;
        });
    }
    storeCompAddress() {
        this.api.post(this.compAddressesUrl, {
            model: this.compAddress,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getCompAddresses(1);
        });
    }
    deleteCompAddress(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.compAddressesUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getCompAddresses(1);
                });
            }
            else {
                return;
            }
        });
    }
};
CompAddressesService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
CompAddressesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CompAddressesService);



/***/ })

}]);
//# sourceMappingURL=comp-addresses-comp-addresses-module-es2015.js.map