(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comp-responsabilities-comp-responsabilities-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-create/comp-responsabilities-create.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-create/comp-responsabilities-create.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/comp-responsabilities'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"compResponsabilitiesService.storeCompResponsability()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!compResponsabilitiesService.compResponsabilitiesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-comp-responsabilities-form #compResponsabilityForm [model]=\"compResponsabilitiesService.compResponsability\"></app-comp-responsabilities-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-duplicate/comp-responsabilities-duplicate.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-duplicate/comp-responsabilities-duplicate.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  CompResponsabilities duplicate works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-edit/comp-responsabilities-edit.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-edit/comp-responsabilities-edit.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/comp-responsabilities'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"compResponsabilitiesService.updateCompResponsability()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!compResponsabilitiesService.compResponsabilitiesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase}}: {{ compResponsabilitiesService.compResponsability?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-comp-responsabilities-form #compResponsabilityForm [model]=\"compResponsabilitiesService.compResponsability\"></app-comp-responsabilities-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-form/comp-responsabilities-form.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-form/comp-responsabilities-form.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #compResponsabilitiesForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- company_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'EMPRESA' | titlecase }}</ion-label>\n        <ionic-selectable name=\"company_id\"\n                          id=\"company_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.company\"\n                          [items]=\"compResponsabilitiesService.compResponsabilityLists.Company\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('EMPRESAS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('EMPRESAS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setCompanyId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.company_id\">\n            <div class=\"error-message\" *ngIf=\"compResponsabilitiesForm.form.controls['company_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end company_id -->\n\n\n    <!-- syst_parameter_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'PARAMETRO' | titlecase }}</ion-label>\n        <ionic-selectable name=\"syst_parameter_id\"\n                          id=\"syst_parameter_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.syst_parameter\"\n                          [items]=\"compResponsabilitiesService.compResponsabilityLists.SystParameter\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('PARAMETROS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('PARAMETROS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setSystParameterId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.syst_parameter_id\">\n            <div class=\"error-message\" *ngIf=\"compResponsabilitiesForm.form.controls['syst_parameter_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end syst_parameter_id -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"compResponsabilitiesForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-list/comp-responsabilities-list.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-list/comp-responsabilities-list.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase}}\"\n                 primaryLink=\"comp-responsabilities/create\"\n                 primaryText=\"Crear {{'EMPRESAS RESPONSABILIDADES LEGALES' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('EMPRESAS RESPONSABILIDADES LEGALES' | lowercase )\"\n                       (ionCancel)=\"this.compResponsabilitiesService.searchValue = ''; compResponsabilitiesService.getCompResponsabilities()\"\n                       (keyup.enter)=\"compResponsabilitiesService.getCompResponsabilities()\"\n                       [(ngModel)]=\"compResponsabilitiesService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && compResponsabilitiesService.compResponsabilities?.length\">\n        <ion-card *ngFor=\"let compResponsability of compResponsabilitiesService.compResponsabilities; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ compResponsability?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'EMPRESAS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/companies/{{ compResponsability?.company?.id }}/edit\">{{ compResponsability?.company?.name }}</a></div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'PARAMETROS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/syst-parameters/{{ compResponsability?.syst_parameter?.id }}/edit\">{{ compResponsability?.syst_parameter?.name }}</a></div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/comp-responsabilities/' + compResponsability?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"compResponsabilitiesService.deleteCompResponsability(compResponsability?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !compResponsabilitiesService.compResponsabilities?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/comp-responsabilities/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"compResponsabilitiesService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"compResponsabilitiesService.getCompResponsabilities(compResponsabilitiesService.meta.current_page - 1)\"\n                        [disabled]=\"compResponsabilitiesService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{compResponsabilitiesService.meta.current_page}}\n                /{{compResponsabilitiesService.meta.last_page}} {{compResponsabilitiesService.meta.from}}-{{compResponsabilitiesService.meta.to}}\n                /{{compResponsabilitiesService.meta.total}} </ion-button>\n            <ion-button (click)=\"compResponsabilitiesService.getCompResponsabilities(compResponsabilitiesService.meta.current_page + 1)\"\n                        [disabled]=\"compResponsabilitiesService.meta.current_page == compResponsabilitiesService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"EMPRESAS RESPONSABILIDADES LEGALES\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/comp-responsabilities/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'EMPRESAS RESPONSABILIDADES LEGALES'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/comp-responsabilities/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n");

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