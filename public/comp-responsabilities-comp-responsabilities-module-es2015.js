(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comp-responsabilities-comp-responsabilities-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-create/comp-responsabilities-create.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-create/comp-responsabilities-create.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/comp-responsabilities'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"compResponsabilitiesService.storeCompResponsability()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!compResponsabilitiesService.compResponsabilitiesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-comp-responsabilities-form #compResponsabilityForm [model]=\"compResponsabilitiesService.compResponsability\"></app-comp-responsabilities-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-duplicate/comp-responsabilities-duplicate.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-duplicate/comp-responsabilities-duplicate.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  CompResponsabilities duplicate works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-edit/comp-responsabilities-edit.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-edit/comp-responsabilities-edit.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/comp-responsabilities'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"compResponsabilitiesService.updateCompResponsability()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!compResponsabilitiesService.compResponsabilitiesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase}}: {{ compResponsabilitiesService.compResponsability?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-comp-responsabilities-form #compResponsabilityForm [model]=\"compResponsabilitiesService.compResponsability\"></app-comp-responsabilities-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-form/comp-responsabilities-form.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-form/comp-responsabilities-form.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #compResponsabilitiesForm=\"ngForm\" novalidate autocomplete=\"off\">\r\n\r\n\r\n    <!-- company_id -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'EMPRESA' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"company_id\"\r\n                          id=\"company_id-field\"\r\n                          [required]=\"true\"\r\n                          [(ngModel)]=\"model.company\"\r\n                          [items]=\"compResponsabilitiesService.compResponsabilityLists.Company\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('EMPRESAS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('EMPRESAS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setCompanyId($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.company_id\">\r\n            <div class=\"error-message\" *ngIf=\"compResponsabilitiesForm.form.controls['company_id']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end company_id -->\r\n\r\n\r\n    <!-- syst_parameter_id -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'PARAMETRO' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"syst_parameter_id\"\r\n                          id=\"syst_parameter_id-field\"\r\n                          [required]=\"true\"\r\n                          [(ngModel)]=\"model.syst_parameter\"\r\n                          [items]=\"compResponsabilitiesService.compResponsabilityLists.SystParameter\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('PARAMETROS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('PARAMETROS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setSystParameterId($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.syst_parameter_id\">\r\n            <div class=\"error-message\" *ngIf=\"compResponsabilitiesForm.form.controls['syst_parameter_id']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end syst_parameter_id -->\r\n\r\n\r\n            <!-- name -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.name\"\r\n                            type=\"text\"\r\n                            name=\"name\"\r\n                            id=\"name-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n                    <div class=\"error-message\" *ngIf=\"compResponsabilitiesForm.form.controls['name']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end name -->\r\n\r\n\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-list/comp-responsabilities-list.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-list/comp-responsabilities-list.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase}}\"\r\n                 primaryLink=\"comp-responsabilities/create\"\r\n                 primaryText=\"Crear {{'EMPRESAS RESPONSABILIDADES LEGALES' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-searchbar showCancelButton=\"focus\"\r\n                       [cancelButtonText]=\"'Cancelar'\"\r\n                       [placeholder]=\"'Buscar ' + ('EMPRESAS RESPONSABILIDADES LEGALES' | lowercase )\"\r\n                       (ionCancel)=\"this.compResponsabilitiesService.searchValue = ''; compResponsabilitiesService.getCompResponsabilities()\"\r\n                       (keyup.enter)=\"compResponsabilitiesService.getCompResponsabilities()\"\r\n                       [(ngModel)]=\"compResponsabilitiesService.searchValue\"></ion-searchbar>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && compResponsabilitiesService.compResponsabilities?.length\">\r\n        <ion-card *ngFor=\"let compResponsability of compResponsabilitiesService.compResponsabilities; let index = index\">\r\n            <ion-list>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ compResponsability?.name }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'EMPRESAS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\"><a routerLink=\"/companies/{{ compResponsability?.company?.id }}/edit\">{{ compResponsability?.company?.name }}</a></div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'PARAMETROS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\"><a routerLink=\"/syst-parameters/{{ compResponsability?.syst_parameter?.id }}/edit\">{{ compResponsability?.syst_parameter?.name }}</a></div>\r\n                    </ion-item>\r\n            </ion-list>\r\n            <ion-footer>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/comp-responsabilities/' + compResponsability?.id + '/edit'\">\r\n                            <ion-icon name=\"create-outline\"></ion-icon>\r\n                            <div>Editar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"compResponsabilitiesService.deleteCompResponsability(compResponsability?.id)\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            <div>Eliminar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-footer>\r\n        </ion-card>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && !compResponsabilitiesService.compResponsabilities?.length\">\r\n        <ion-item>\r\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label><h2>No se encontraron {{'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase}}</h2></ion-label>\r\n            <ion-button [routerLink]=\"'/comp-responsabilities/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\r\n                Crear {{'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase}}\r\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"compResponsabilitiesService.meta\">\r\n        <ion-col class=\"ion-text-center\" size=\"12\">\r\n            <ion-button (click)=\"compResponsabilitiesService.getCompResponsabilities(compResponsabilitiesService.meta.current_page - 1)\"\r\n                        [disabled]=\"compResponsabilitiesService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{compResponsabilitiesService.meta.current_page}}\r\n                /{{compResponsabilitiesService.meta.last_page}} {{compResponsabilitiesService.meta.from}}-{{compResponsabilitiesService.meta.to}}\r\n                /{{compResponsabilitiesService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"compResponsabilitiesService.getCompResponsabilities(compResponsabilitiesService.meta.current_page + 1)\"\r\n                        [disabled]=\"compResponsabilitiesService.meta.current_page == compResponsabilitiesService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"EMPRESAS RESPONSABILIDADES LEGALES\"></app-main-header>\r\n\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/comp-responsabilities/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'EMPRESAS RESPONSABILIDADES LEGALES'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/comp-responsabilities/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/comp-responsabilities/comp-responsabilities-create/comp-responsabilities-create.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/comp-responsabilities/comp-responsabilities-create/comp-responsabilities-create.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtcmVzcG9uc2FiaWxpdGllcy9jb21wLXJlc3BvbnNhYmlsaXRpZXMtY3JlYXRlL2NvbXAtcmVzcG9uc2FiaWxpdGllcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/comp-responsabilities/comp-responsabilities-create/comp-responsabilities-create.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/comp-responsabilities/comp-responsabilities-create/comp-responsabilities-create.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: CompResponsabilitiesCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompResponsabilitiesCreateComponent", function() { return CompResponsabilitiesCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comp_responsabilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comp-responsabilities.service */ "./src/app/comp-responsabilities/comp-responsabilities.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let CompResponsabilitiesCreateComponent = class CompResponsabilitiesCreateComponent {
    constructor(compResponsabilitiesService, route, platform, splitPanel) {
        this.compResponsabilitiesService = compResponsabilitiesService;
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
        this.compResponsabilityForm.compResponsabilitiesForm.valueChanges.subscribe((data) => {
            this.compResponsabilitiesService.compResponsabilitiesFormValid.next(this.compResponsabilityForm.compResponsabilitiesForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.compResponsabilitiesService.createCompResponsability();
        this.compResponsabilitiesService.compResponsability = {};
    }
};
CompResponsabilitiesCreateComponent.ctorParameters = () => [
    { type: _comp_responsabilities_service__WEBPACK_IMPORTED_MODULE_2__["CompResponsabilitiesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
CompResponsabilitiesCreateComponent.propDecorators = {
    compResponsabilityForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['compResponsabilityForm',] }]
};
CompResponsabilitiesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-responsabilities-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comp-responsabilities-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-create/comp-responsabilities-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comp-responsabilities-create.component.scss */ "./src/app/comp-responsabilities/comp-responsabilities-create/comp-responsabilities-create.component.scss")).default]
    })
], CompResponsabilitiesCreateComponent);



/***/ }),

/***/ "./src/app/comp-responsabilities/comp-responsabilities-duplicate/comp-responsabilities-duplicate.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/comp-responsabilities/comp-responsabilities-duplicate/comp-responsabilities-duplicate.component.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtcmVzcG9uc2FiaWxpdGllcy9jb21wLXJlc3BvbnNhYmlsaXRpZXMtZHVwbGljYXRlL2NvbXAtcmVzcG9uc2FiaWxpdGllcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/comp-responsabilities/comp-responsabilities-duplicate/comp-responsabilities-duplicate.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/comp-responsabilities/comp-responsabilities-duplicate/comp-responsabilities-duplicate.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: CompResponsabilitiesDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompResponsabilitiesDuplicateComponent", function() { return CompResponsabilitiesDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CompResponsabilitiesDuplicateComponent = class CompResponsabilitiesDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
CompResponsabilitiesDuplicateComponent.ctorParameters = () => [];
CompResponsabilitiesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-responsabilities-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comp-responsabilities-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-duplicate/comp-responsabilities-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comp-responsabilities-duplicate.component.scss */ "./src/app/comp-responsabilities/comp-responsabilities-duplicate/comp-responsabilities-duplicate.component.scss")).default]
    })
], CompResponsabilitiesDuplicateComponent);



/***/ }),

/***/ "./src/app/comp-responsabilities/comp-responsabilities-edit/comp-responsabilities-edit.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/comp-responsabilities/comp-responsabilities-edit/comp-responsabilities-edit.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtcmVzcG9uc2FiaWxpdGllcy9jb21wLXJlc3BvbnNhYmlsaXRpZXMtZWRpdC9jb21wLXJlc3BvbnNhYmlsaXRpZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/comp-responsabilities/comp-responsabilities-edit/comp-responsabilities-edit.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/comp-responsabilities/comp-responsabilities-edit/comp-responsabilities-edit.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CompResponsabilitiesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompResponsabilitiesEditComponent", function() { return CompResponsabilitiesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comp_responsabilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comp-responsabilities.service */ "./src/app/comp-responsabilities/comp-responsabilities.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let CompResponsabilitiesEditComponent = class CompResponsabilitiesEditComponent {
    constructor(compResponsabilitiesService, route, platform, splitPanel) {
        this.compResponsabilitiesService = compResponsabilitiesService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.compResponsabilitiesService.editCompResponsability(this.id);
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    ngAfterViewInit() {
        this.compResponsabilityForm.compResponsabilitiesForm.valueChanges.subscribe((data) => {
            this.compResponsabilitiesService.compResponsabilitiesFormValid.next(this.compResponsabilityForm.compResponsabilitiesForm.valid);
        });
    }
};
CompResponsabilitiesEditComponent.ctorParameters = () => [
    { type: _comp_responsabilities_service__WEBPACK_IMPORTED_MODULE_2__["CompResponsabilitiesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
CompResponsabilitiesEditComponent.propDecorators = {
    compResponsabilityForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['compResponsabilityForm',] }]
};
CompResponsabilitiesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-responsabilities-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comp-responsabilities-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-edit/comp-responsabilities-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comp-responsabilities-edit.component.scss */ "./src/app/comp-responsabilities/comp-responsabilities-edit/comp-responsabilities-edit.component.scss")).default]
    })
], CompResponsabilitiesEditComponent);



/***/ }),

/***/ "./src/app/comp-responsabilities/comp-responsabilities-form/comp-responsabilities-form.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/comp-responsabilities/comp-responsabilities-form/comp-responsabilities-form.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtcmVzcG9uc2FiaWxpdGllcy9jb21wLXJlc3BvbnNhYmlsaXRpZXMtZm9ybS9jb21wLXJlc3BvbnNhYmlsaXRpZXMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/comp-responsabilities/comp-responsabilities-form/comp-responsabilities-form.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/comp-responsabilities/comp-responsabilities-form/comp-responsabilities-form.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CompResponsabilitiesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompResponsabilitiesFormComponent", function() { return CompResponsabilitiesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comp_responsabilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comp-responsabilities.service */ "./src/app/comp-responsabilities/comp-responsabilities.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let CompResponsabilitiesFormComponent = class CompResponsabilitiesFormComponent {
    constructor(compResponsabilitiesService, toTitlecase) {
        this.compResponsabilitiesService = compResponsabilitiesService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'company_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('company - NAME') + ' es obligatorio.' },
            ],
            'syst_parameter_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('RESPONSABILIDAD LEGAL') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setCompanyId
    setCompanyId(event) {
        this.compResponsabilitiesService.compResponsability.company_id = event.value ? event.value.id : null;
    }
    // end setCompanyId
    // set setSystParameterId
    setSystParameterId(event) {
        this.compResponsabilitiesService.compResponsability.syst_parameter_id = event.value ? event.value.id : null;
    }
};
CompResponsabilitiesFormComponent.ctorParameters = () => [
    { type: _comp_responsabilities_service__WEBPACK_IMPORTED_MODULE_2__["CompResponsabilitiesService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
CompResponsabilitiesFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    compResponsabilitiesForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['compResponsabilitiesForm',] }]
};
CompResponsabilitiesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-responsabilities-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comp-responsabilities-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-form/comp-responsabilities-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comp-responsabilities-form.component.scss */ "./src/app/comp-responsabilities/comp-responsabilities-form/comp-responsabilities-form.component.scss")).default]
    })
], CompResponsabilitiesFormComponent);



/***/ }),

/***/ "./src/app/comp-responsabilities/comp-responsabilities-list/comp-responsabilities-list.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/comp-responsabilities/comp-responsabilities-list/comp-responsabilities-list.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtcmVzcG9uc2FiaWxpdGllcy9jb21wLXJlc3BvbnNhYmlsaXRpZXMtbGlzdC9jb21wLXJlc3BvbnNhYmlsaXRpZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/comp-responsabilities/comp-responsabilities-list/comp-responsabilities-list.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/comp-responsabilities/comp-responsabilities-list/comp-responsabilities-list.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CompResponsabilitiesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompResponsabilitiesListComponent", function() { return CompResponsabilitiesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comp_responsabilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comp-responsabilities.service */ "./src/app/comp-responsabilities/comp-responsabilities.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");







let CompResponsabilitiesListComponent = class CompResponsabilitiesListComponent {
    constructor(compResponsabilitiesService, api, loading, splitPanel) {
        this.compResponsabilitiesService = compResponsabilitiesService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
        this.compResponsabilitiesService.getCompResponsabilities();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
CompResponsabilitiesListComponent.ctorParameters = () => [
    { type: _comp_responsabilities_service__WEBPACK_IMPORTED_MODULE_2__["CompResponsabilitiesService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] }
];
CompResponsabilitiesListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
CompResponsabilitiesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-responsabilities-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comp-responsabilities-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-list/comp-responsabilities-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comp-responsabilities-list.component.scss */ "./src/app/comp-responsabilities/comp-responsabilities-list/comp-responsabilities-list.component.scss")).default]
    })
], CompResponsabilitiesListComponent);



/***/ }),

/***/ "./src/app/comp-responsabilities/comp-responsabilities-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/comp-responsabilities/comp-responsabilities-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CompResponsabilitiesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompResponsabilitiesPageRoutingModule", function() { return CompResponsabilitiesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _comp_responsabilities_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comp-responsabilities.page */ "./src/app/comp-responsabilities/comp-responsabilities.page.ts");
/* harmony import */ var _comp_responsabilities_edit_comp_responsabilities_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comp-responsabilities-edit/comp-responsabilities-edit.component */ "./src/app/comp-responsabilities/comp-responsabilities-edit/comp-responsabilities-edit.component.ts");
/* harmony import */ var _comp_responsabilities_create_comp_responsabilities_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comp-responsabilities-create/comp-responsabilities-create.component */ "./src/app/comp-responsabilities/comp-responsabilities-create/comp-responsabilities-create.component.ts");
/* harmony import */ var _comp_responsabilities_list_comp_responsabilities_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comp-responsabilities-list/comp-responsabilities-list.component */ "./src/app/comp-responsabilities/comp-responsabilities-list/comp-responsabilities-list.component.ts");







const routes = [
    {
        path: '',
        component: _comp_responsabilities_page__WEBPACK_IMPORTED_MODULE_3__["CompResponsabilitiesPage"]
    },
    {
        path: 'list',
        component: _comp_responsabilities_list_comp_responsabilities_list_component__WEBPACK_IMPORTED_MODULE_6__["CompResponsabilitiesListComponent"]
    },
    {
        path: 'create',
        component: _comp_responsabilities_create_comp_responsabilities_create_component__WEBPACK_IMPORTED_MODULE_5__["CompResponsabilitiesCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _comp_responsabilities_edit_comp_responsabilities_edit_component__WEBPACK_IMPORTED_MODULE_4__["CompResponsabilitiesEditComponent"]
    },
];
let CompResponsabilitiesPageRoutingModule = class CompResponsabilitiesPageRoutingModule {
};
CompResponsabilitiesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], CompResponsabilitiesPageRoutingModule);



/***/ }),

/***/ "./src/app/comp-responsabilities/comp-responsabilities.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/comp-responsabilities/comp-responsabilities.module.ts ***!
  \***********************************************************************/
/*! exports provided: CompResponsabilitiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompResponsabilitiesPageModule", function() { return CompResponsabilitiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _comp_responsabilities_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comp-responsabilities-routing.module */ "./src/app/comp-responsabilities/comp-responsabilities-routing.module.ts");
/* harmony import */ var _comp_responsabilities_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comp-responsabilities.page */ "./src/app/comp-responsabilities/comp-responsabilities.page.ts");
/* harmony import */ var _comp_responsabilities_list_comp_responsabilities_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comp-responsabilities-list/comp-responsabilities-list.component */ "./src/app/comp-responsabilities/comp-responsabilities-list/comp-responsabilities-list.component.ts");
/* harmony import */ var _comp_responsabilities_create_comp_responsabilities_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comp-responsabilities-create/comp-responsabilities-create.component */ "./src/app/comp-responsabilities/comp-responsabilities-create/comp-responsabilities-create.component.ts");
/* harmony import */ var _comp_responsabilities_duplicate_comp_responsabilities_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comp-responsabilities-duplicate/comp-responsabilities-duplicate.component */ "./src/app/comp-responsabilities/comp-responsabilities-duplicate/comp-responsabilities-duplicate.component.ts");
/* harmony import */ var _comp_responsabilities_edit_comp_responsabilities_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comp-responsabilities-edit/comp-responsabilities-edit.component */ "./src/app/comp-responsabilities/comp-responsabilities-edit/comp-responsabilities-edit.component.ts");
/* harmony import */ var _comp_responsabilities_form_comp_responsabilities_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comp-responsabilities-form/comp-responsabilities-form.component */ "./src/app/comp-responsabilities/comp-responsabilities-form/comp-responsabilities-form.component.ts");













let CompResponsabilitiesPageModule = class CompResponsabilitiesPageModule {
};
CompResponsabilitiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _comp_responsabilities_routing_module__WEBPACK_IMPORTED_MODULE_6__["CompResponsabilitiesPageRoutingModule"]
        ],
        declarations: [
            _comp_responsabilities_page__WEBPACK_IMPORTED_MODULE_7__["CompResponsabilitiesPage"],
            _comp_responsabilities_list_comp_responsabilities_list_component__WEBPACK_IMPORTED_MODULE_8__["CompResponsabilitiesListComponent"],
            _comp_responsabilities_create_comp_responsabilities_create_component__WEBPACK_IMPORTED_MODULE_9__["CompResponsabilitiesCreateComponent"],
            _comp_responsabilities_duplicate_comp_responsabilities_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["CompResponsabilitiesDuplicateComponent"],
            _comp_responsabilities_edit_comp_responsabilities_edit_component__WEBPACK_IMPORTED_MODULE_11__["CompResponsabilitiesEditComponent"],
            _comp_responsabilities_form_comp_responsabilities_form_component__WEBPACK_IMPORTED_MODULE_12__["CompResponsabilitiesFormComponent"],
        ]
    })
], CompResponsabilitiesPageModule);



/***/ }),

/***/ "./src/app/comp-responsabilities/comp-responsabilities.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/comp-responsabilities/comp-responsabilities.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtcmVzcG9uc2FiaWxpdGllcy9jb21wLXJlc3BvbnNhYmlsaXRpZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/comp-responsabilities/comp-responsabilities.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/comp-responsabilities/comp-responsabilities.page.ts ***!
  \*********************************************************************/
/*! exports provided: CompResponsabilitiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompResponsabilitiesPage", function() { return CompResponsabilitiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");



let CompResponsabilitiesPage = class CompResponsabilitiesPage {
    constructor(splitPanel) {
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
};
CompResponsabilitiesPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] }
];
CompResponsabilitiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-responsabilities',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comp-responsabilities.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comp-responsabilities.page.scss */ "./src/app/comp-responsabilities/comp-responsabilities.page.scss")).default]
    })
], CompResponsabilitiesPage);



/***/ }),

/***/ "./src/app/comp-responsabilities/comp-responsabilities.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/comp-responsabilities/comp-responsabilities.service.ts ***!
  \************************************************************************/
/*! exports provided: CompResponsabilitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompResponsabilitiesService", function() { return CompResponsabilitiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let CompResponsabilitiesService = class CompResponsabilitiesService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.compResponsabilitiesUrl = 'comp-responsabilities';
        this.compResponsabilitiesFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.compResponsabilities = [];
        this.compResponsability = {};
        this.compResponsabilityLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    getCompResponsabilities(page = this.page, perPage = this.perPage) {
        this.api.get(this.compResponsabilitiesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.compResponsabilities = res.data;
            this.compResponsabilityLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editCompResponsability(id) {
        this.api.get(this.compResponsabilitiesUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.compResponsability = res.data.model;
            this.compResponsabilityLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateCompResponsability() {
        this.api.put(this.compResponsabilitiesUrl + '/' + this.compResponsability.id, {
            model: this.compResponsability,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getCompResponsabilities(1);
        });
    }
    createCompResponsability() {
        this.api.get(this.compResponsabilitiesUrl + '/create')
            .subscribe((res) => {
            this.compResponsability = {};
            this.compResponsabilityLists = res.lists;
        });
    }
    storeCompResponsability() {
        this.api.post(this.compResponsabilitiesUrl, {
            model: this.compResponsability,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getCompResponsabilities(1);
        });
    }
    deleteCompResponsability(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.compResponsabilitiesUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getCompResponsabilities(1);
                });
            }
            else {
                return;
            }
        });
    }
};
CompResponsabilitiesService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
CompResponsabilitiesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CompResponsabilitiesService);



/***/ })

}]);
//# sourceMappingURL=comp-responsabilities-comp-responsabilities-module-es2015.js.map