(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comp-phones-comp-phones-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-phones/comp-phones-create/comp-phones-create.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-phones/comp-phones-create/comp-phones-create.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/comp-phones'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"compPhonesService.storeCompPhone()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!compPhonesService.compPhonesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'TELÉFONOS DE EMPRESAS' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-comp-phones-form #compPhoneForm [model]=\"compPhonesService.compPhone\"></app-comp-phones-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-phones/comp-phones-duplicate/comp-phones-duplicate.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-phones/comp-phones-duplicate/comp-phones-duplicate.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  CompPhones duplicate works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-phones/comp-phones-edit/comp-phones-edit.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-phones/comp-phones-edit/comp-phones-edit.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/comp-phones'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"compPhonesService.updateCompPhone()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!compPhonesService.compPhonesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'TELÉFONOS DE EMPRESAS' | titlecase}}: {{ compPhonesService.compPhone?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-comp-phones-form #compPhoneForm [model]=\"compPhonesService.compPhone\"></app-comp-phones-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-phones/comp-phones-form/comp-phones-form.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-phones/comp-phones-form/comp-phones-form.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #compPhonesForm=\"ngForm\" novalidate autocomplete=\"off\">\r\n\r\n\r\n    <!-- company_id -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'EMPRESA' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"company_id\"\r\n                          id=\"company_id-field\"\r\n                          [required]=\"true\"\r\n                          [(ngModel)]=\"model.company\"\r\n                          [items]=\"compPhonesService.compPhoneLists.Company\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('EMPRESAS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('EMPRESAS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setCompanyId($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.company_id\">\r\n            <div class=\"error-message\" *ngIf=\"compPhonesForm.form.controls['company_id']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end company_id -->\r\n\r\n\r\n            <!-- name -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.name\"\r\n                            type=\"text\"\r\n                            name=\"name\"\r\n                            id=\"name-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n                    <div class=\"error-message\" *ngIf=\"compPhonesForm.form.controls['name']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end name -->\r\n\r\n\r\n            <!-- number -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'NÚMERO' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.number\"\r\n                            type=\"text\"\r\n                            name=\"number\"\r\n                            id=\"number-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.number\">\r\n                    <div class=\"error-message\" *ngIf=\"compPhonesForm.form.controls['number']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end number -->\r\n\r\n\r\n            <!-- main -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'PRINCIPAL' | titlecase }}</ion-label>\r\n                <ion-toggle name=\"main\"\r\n                            id=\"main-field\"\r\n                            slot=\"end\"\r\n                            [(ngModel)]=\"model.main\"></ion-toggle>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.main\">\r\n                    <div class=\"error-message\" *ngIf=\"compPhonesForm.form.controls['main']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end main -->\r\n\r\n\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-phones/comp-phones-list/comp-phones-list.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-phones/comp-phones-list/comp-phones-list.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'TELÉFONOS DE EMPRESAS' | titlecase}}\"\r\n                 primaryLink=\"comp-phones/create\"\r\n                 primaryText=\"Crear {{'TELÉFONOS DE EMPRESAS' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-searchbar showCancelButton=\"focus\"\r\n                       [cancelButtonText]=\"'Cancelar'\"\r\n                       [placeholder]=\"'Buscar ' + ('TELÉFONOS DE EMPRESAS' | lowercase )\"\r\n                       (ionCancel)=\"this.compPhonesService.searchValue = ''; compPhonesService.getCompPhones()\"\r\n                       (keyup.enter)=\"compPhonesService.getCompPhones()\"\r\n                       [(ngModel)]=\"compPhonesService.searchValue\"></ion-searchbar>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && compPhonesService.compPhones?.length\">\r\n        <ion-card *ngFor=\"let compPhone of compPhonesService.compPhones; let index = index\">\r\n            <ion-list>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ compPhone?.name }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NÚMERO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ compPhone?.number }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'PRINCIPAL' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ compPhone?.main  ? 'Si' : 'No' }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'EMPRESAS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\"><a routerLink=\"/companies/{{ compPhone?.company?.id }}/edit\">{{ compPhone?.company?.name }}</a></div>\r\n                    </ion-item>\r\n            </ion-list>\r\n            <ion-footer>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/comp-phones/' + compPhone?.id + '/edit'\">\r\n                            <ion-icon name=\"create-outline\"></ion-icon>\r\n                            <div>Editar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"compPhonesService.deleteCompPhone(compPhone?.id)\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            <div>Eliminar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-footer>\r\n        </ion-card>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && !compPhonesService.compPhones?.length\">\r\n        <ion-item>\r\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label><h2>No se encontraron {{'TELÉFONOS DE EMPRESAS' | titlecase}}</h2></ion-label>\r\n            <ion-button [routerLink]=\"'/comp-phones/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\r\n                Crear {{'TELÉFONOS DE EMPRESAS' | titlecase}}\r\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"compPhonesService.meta\">\r\n        <ion-col class=\"ion-text-center\" size=\"12\">\r\n            <ion-button (click)=\"compPhonesService.getCompPhones(compPhonesService.meta.current_page - 1)\"\r\n                        [disabled]=\"compPhonesService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{compPhonesService.meta.current_page}}\r\n                /{{compPhonesService.meta.last_page}} {{compPhonesService.meta.from}}-{{compPhonesService.meta.to}}\r\n                /{{compPhonesService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"compPhonesService.getCompPhones(compPhonesService.meta.current_page + 1)\"\r\n                        [disabled]=\"compPhonesService.meta.current_page == compPhonesService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-phones/comp-phones.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-phones/comp-phones.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"TELÉFONOS DE EMPRESAS\"></app-main-header>\r\n\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/comp-phones/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'TELÉFONOS DE EMPRESAS'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/comp-phones/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'TELÉFONOS DE EMPRESAS' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/comp-phones/comp-phones-create/comp-phones-create.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/comp-phones/comp-phones-create/comp-phones-create.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtcGhvbmVzL2NvbXAtcGhvbmVzLWNyZWF0ZS9jb21wLXBob25lcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/comp-phones/comp-phones-create/comp-phones-create.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/comp-phones/comp-phones-create/comp-phones-create.component.ts ***!
  \********************************************************************************/
/*! exports provided: CompPhonesCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompPhonesCreateComponent", function() { return CompPhonesCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comp_phones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comp-phones.service */ "./src/app/comp-phones/comp-phones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let CompPhonesCreateComponent = class CompPhonesCreateComponent {
    constructor(compPhonesService, route, platform, splitPanel) {
        this.compPhonesService = compPhonesService;
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
        this.compPhoneForm.compPhonesForm.valueChanges.subscribe((data) => {
            this.compPhonesService.compPhonesFormValid.next(this.compPhoneForm.compPhonesForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.compPhonesService.createCompPhone();
        this.compPhonesService.compPhone = {};
    }
};
CompPhonesCreateComponent.ctorParameters = () => [
    { type: _comp_phones_service__WEBPACK_IMPORTED_MODULE_2__["CompPhonesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
CompPhonesCreateComponent.propDecorators = {
    compPhoneForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['compPhoneForm',] }]
};
CompPhonesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-phones-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comp-phones-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-phones/comp-phones-create/comp-phones-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comp-phones-create.component.scss */ "./src/app/comp-phones/comp-phones-create/comp-phones-create.component.scss")).default]
    })
], CompPhonesCreateComponent);



/***/ }),

/***/ "./src/app/comp-phones/comp-phones-duplicate/comp-phones-duplicate.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/comp-phones/comp-phones-duplicate/comp-phones-duplicate.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtcGhvbmVzL2NvbXAtcGhvbmVzLWR1cGxpY2F0ZS9jb21wLXBob25lcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/comp-phones/comp-phones-duplicate/comp-phones-duplicate.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/comp-phones/comp-phones-duplicate/comp-phones-duplicate.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CompPhonesDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompPhonesDuplicateComponent", function() { return CompPhonesDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CompPhonesDuplicateComponent = class CompPhonesDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
CompPhonesDuplicateComponent.ctorParameters = () => [];
CompPhonesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-phones-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comp-phones-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-phones/comp-phones-duplicate/comp-phones-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comp-phones-duplicate.component.scss */ "./src/app/comp-phones/comp-phones-duplicate/comp-phones-duplicate.component.scss")).default]
    })
], CompPhonesDuplicateComponent);



/***/ }),

/***/ "./src/app/comp-phones/comp-phones-edit/comp-phones-edit.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/comp-phones/comp-phones-edit/comp-phones-edit.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtcGhvbmVzL2NvbXAtcGhvbmVzLWVkaXQvY29tcC1waG9uZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/comp-phones/comp-phones-edit/comp-phones-edit.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/comp-phones/comp-phones-edit/comp-phones-edit.component.ts ***!
  \****************************************************************************/
/*! exports provided: CompPhonesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompPhonesEditComponent", function() { return CompPhonesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comp_phones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comp-phones.service */ "./src/app/comp-phones/comp-phones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let CompPhonesEditComponent = class CompPhonesEditComponent {
    constructor(compPhonesService, route, platform, splitPanel) {
        this.compPhonesService = compPhonesService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.compPhonesService.editCompPhone(this.id);
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    ngAfterViewInit() {
        this.compPhoneForm.compPhonesForm.valueChanges.subscribe((data) => {
            this.compPhonesService.compPhonesFormValid.next(this.compPhoneForm.compPhonesForm.valid);
        });
    }
};
CompPhonesEditComponent.ctorParameters = () => [
    { type: _comp_phones_service__WEBPACK_IMPORTED_MODULE_2__["CompPhonesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
CompPhonesEditComponent.propDecorators = {
    compPhoneForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['compPhoneForm',] }]
};
CompPhonesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-phones-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comp-phones-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-phones/comp-phones-edit/comp-phones-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comp-phones-edit.component.scss */ "./src/app/comp-phones/comp-phones-edit/comp-phones-edit.component.scss")).default]
    })
], CompPhonesEditComponent);



/***/ }),

/***/ "./src/app/comp-phones/comp-phones-form/comp-phones-form.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/comp-phones/comp-phones-form/comp-phones-form.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtcGhvbmVzL2NvbXAtcGhvbmVzLWZvcm0vY29tcC1waG9uZXMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/comp-phones/comp-phones-form/comp-phones-form.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/comp-phones/comp-phones-form/comp-phones-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: CompPhonesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompPhonesFormComponent", function() { return CompPhonesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comp_phones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comp-phones.service */ "./src/app/comp-phones/comp-phones.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let CompPhonesFormComponent = class CompPhonesFormComponent {
    constructor(compPhonesService, toTitlecase) {
        this.compPhonesService = compPhonesService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'company_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('EMPRESA') + ' es obligatorio.' },
            ],
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'number': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NÚMERO') + ' es obligatorio.' },
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
        this.compPhonesService.compPhone.company_id = event.value ? event.value.id : null;
    }
};
CompPhonesFormComponent.ctorParameters = () => [
    { type: _comp_phones_service__WEBPACK_IMPORTED_MODULE_2__["CompPhonesService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
CompPhonesFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    compPhonesForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['compPhonesForm',] }]
};
CompPhonesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-phones-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comp-phones-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-phones/comp-phones-form/comp-phones-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comp-phones-form.component.scss */ "./src/app/comp-phones/comp-phones-form/comp-phones-form.component.scss")).default]
    })
], CompPhonesFormComponent);



/***/ }),

/***/ "./src/app/comp-phones/comp-phones-list/comp-phones-list.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/comp-phones/comp-phones-list/comp-phones-list.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtcGhvbmVzL2NvbXAtcGhvbmVzLWxpc3QvY29tcC1waG9uZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/comp-phones/comp-phones-list/comp-phones-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/comp-phones/comp-phones-list/comp-phones-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: CompPhonesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompPhonesListComponent", function() { return CompPhonesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comp_phones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comp-phones.service */ "./src/app/comp-phones/comp-phones.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");







let CompPhonesListComponent = class CompPhonesListComponent {
    constructor(compPhonesService, api, loading, splitPanel) {
        this.compPhonesService = compPhonesService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
        this.compPhonesService.getCompPhones();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
CompPhonesListComponent.ctorParameters = () => [
    { type: _comp_phones_service__WEBPACK_IMPORTED_MODULE_2__["CompPhonesService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] }
];
CompPhonesListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
CompPhonesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-phones-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comp-phones-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-phones/comp-phones-list/comp-phones-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comp-phones-list.component.scss */ "./src/app/comp-phones/comp-phones-list/comp-phones-list.component.scss")).default]
    })
], CompPhonesListComponent);



/***/ }),

/***/ "./src/app/comp-phones/comp-phones-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/comp-phones/comp-phones-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CompPhonesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompPhonesPageRoutingModule", function() { return CompPhonesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _comp_phones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comp-phones.page */ "./src/app/comp-phones/comp-phones.page.ts");
/* harmony import */ var _comp_phones_edit_comp_phones_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comp-phones-edit/comp-phones-edit.component */ "./src/app/comp-phones/comp-phones-edit/comp-phones-edit.component.ts");
/* harmony import */ var _comp_phones_create_comp_phones_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comp-phones-create/comp-phones-create.component */ "./src/app/comp-phones/comp-phones-create/comp-phones-create.component.ts");
/* harmony import */ var _comp_phones_list_comp_phones_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comp-phones-list/comp-phones-list.component */ "./src/app/comp-phones/comp-phones-list/comp-phones-list.component.ts");







const routes = [
    {
        path: '',
        component: _comp_phones_page__WEBPACK_IMPORTED_MODULE_3__["CompPhonesPage"]
    },
    {
        path: 'list',
        component: _comp_phones_list_comp_phones_list_component__WEBPACK_IMPORTED_MODULE_6__["CompPhonesListComponent"]
    },
    {
        path: 'create',
        component: _comp_phones_create_comp_phones_create_component__WEBPACK_IMPORTED_MODULE_5__["CompPhonesCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _comp_phones_edit_comp_phones_edit_component__WEBPACK_IMPORTED_MODULE_4__["CompPhonesEditComponent"]
    },
];
let CompPhonesPageRoutingModule = class CompPhonesPageRoutingModule {
};
CompPhonesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], CompPhonesPageRoutingModule);



/***/ }),

/***/ "./src/app/comp-phones/comp-phones.module.ts":
/*!***************************************************!*\
  !*** ./src/app/comp-phones/comp-phones.module.ts ***!
  \***************************************************/
/*! exports provided: CompPhonesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompPhonesPageModule", function() { return CompPhonesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _comp_phones_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comp-phones-routing.module */ "./src/app/comp-phones/comp-phones-routing.module.ts");
/* harmony import */ var _comp_phones_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comp-phones.page */ "./src/app/comp-phones/comp-phones.page.ts");
/* harmony import */ var _comp_phones_list_comp_phones_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comp-phones-list/comp-phones-list.component */ "./src/app/comp-phones/comp-phones-list/comp-phones-list.component.ts");
/* harmony import */ var _comp_phones_create_comp_phones_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comp-phones-create/comp-phones-create.component */ "./src/app/comp-phones/comp-phones-create/comp-phones-create.component.ts");
/* harmony import */ var _comp_phones_duplicate_comp_phones_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comp-phones-duplicate/comp-phones-duplicate.component */ "./src/app/comp-phones/comp-phones-duplicate/comp-phones-duplicate.component.ts");
/* harmony import */ var _comp_phones_edit_comp_phones_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comp-phones-edit/comp-phones-edit.component */ "./src/app/comp-phones/comp-phones-edit/comp-phones-edit.component.ts");
/* harmony import */ var _comp_phones_form_comp_phones_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comp-phones-form/comp-phones-form.component */ "./src/app/comp-phones/comp-phones-form/comp-phones-form.component.ts");













let CompPhonesPageModule = class CompPhonesPageModule {
};
CompPhonesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _comp_phones_routing_module__WEBPACK_IMPORTED_MODULE_6__["CompPhonesPageRoutingModule"]
        ],
        declarations: [
            _comp_phones_page__WEBPACK_IMPORTED_MODULE_7__["CompPhonesPage"],
            _comp_phones_list_comp_phones_list_component__WEBPACK_IMPORTED_MODULE_8__["CompPhonesListComponent"],
            _comp_phones_create_comp_phones_create_component__WEBPACK_IMPORTED_MODULE_9__["CompPhonesCreateComponent"],
            _comp_phones_duplicate_comp_phones_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["CompPhonesDuplicateComponent"],
            _comp_phones_edit_comp_phones_edit_component__WEBPACK_IMPORTED_MODULE_11__["CompPhonesEditComponent"],
            _comp_phones_form_comp_phones_form_component__WEBPACK_IMPORTED_MODULE_12__["CompPhonesFormComponent"],
        ]
    })
], CompPhonesPageModule);



/***/ }),

/***/ "./src/app/comp-phones/comp-phones.page.scss":
/*!***************************************************!*\
  !*** ./src/app/comp-phones/comp-phones.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtcGhvbmVzL2NvbXAtcGhvbmVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/comp-phones/comp-phones.page.ts":
/*!*************************************************!*\
  !*** ./src/app/comp-phones/comp-phones.page.ts ***!
  \*************************************************/
/*! exports provided: CompPhonesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompPhonesPage", function() { return CompPhonesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");



let CompPhonesPage = class CompPhonesPage {
    constructor(splitPanel) {
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
};
CompPhonesPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] }
];
CompPhonesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-phones',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comp-phones.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-phones/comp-phones.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comp-phones.page.scss */ "./src/app/comp-phones/comp-phones.page.scss")).default]
    })
], CompPhonesPage);



/***/ }),

/***/ "./src/app/comp-phones/comp-phones.service.ts":
/*!****************************************************!*\
  !*** ./src/app/comp-phones/comp-phones.service.ts ***!
  \****************************************************/
/*! exports provided: CompPhonesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompPhonesService", function() { return CompPhonesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let CompPhonesService = class CompPhonesService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.compPhonesUrl = 'comp-phones';
        this.compPhonesFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.compPhones = [];
        this.compPhone = {};
        this.compPhoneLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    getCompPhones(page = this.page, perPage = this.perPage) {
        this.api.get(this.compPhonesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.compPhones = res.data;
            this.compPhoneLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editCompPhone(id) {
        this.api.get(this.compPhonesUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.compPhone = res.data.model;
            this.compPhoneLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateCompPhone() {
        this.api.put(this.compPhonesUrl + '/' + this.compPhone.id, {
            model: this.compPhone,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getCompPhones(1);
        });
    }
    createCompPhone() {
        this.api.get(this.compPhonesUrl + '/create')
            .subscribe((res) => {
            this.compPhone = {};
            this.compPhoneLists = res.lists;
        });
    }
    storeCompPhone() {
        this.api.post(this.compPhonesUrl, {
            model: this.compPhone,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getCompPhones(1);
        });
    }
    deleteCompPhone(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.compPhonesUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getCompPhones(1);
                });
            }
            else {
                return;
            }
        });
    }
};
CompPhonesService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
CompPhonesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CompPhonesService);



/***/ })

}]);
//# sourceMappingURL=comp-phones-comp-phones-module-es2015.js.map