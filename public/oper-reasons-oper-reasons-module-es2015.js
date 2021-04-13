(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oper-reasons-oper-reasons-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-create/oper-reasons-create.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-create/oper-reasons-create.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/oper-reasons'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"operReasonsService.storeOperReason()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!operReasonsService.operReasonsFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-oper-reasons-form #operReasonForm [model]=\"operReasonsService.operReason\"></app-oper-reasons-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-duplicate/oper-reasons-duplicate.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-duplicate/oper-reasons-duplicate.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  OperReasons duplicate works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-edit/oper-reasons-edit.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-edit/oper-reasons-edit.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/oper-reasons'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"operReasonsService.updateOperReason()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!operReasonsService.operReasonsFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO' | titlecase}}: {{ operReasonsService.operReason?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-oper-reasons-form #operReasonForm [model]=\"operReasonsService.operReason\"></app-oper-reasons-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-form/oper-reasons-form.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-form/oper-reasons-form.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #operReasonsForm=\"ngForm\" novalidate autocomplete=\"off\">\r\n\r\n\r\n    <!-- oper_corrective_maintenance_ids -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'OPERATIVIDAD MTTO CORRECTIVOS' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"oper_corrective_maintenance_ids\"\r\n                          id=\"oper_corrective_maintenance_ids-field\"\r\n                          [(ngModel)]=\"model.oper_corrective_maintenances\"\r\n                          [items]=\"operReasonsService.operReasonLists.OperCorrectiveMaintenance\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('OPERATIVIDAD MTTO CORRECTIVOS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('OPERATIVIDAD MTTO CORRECTIVOS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setOperCorrectiveMaintenanceIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.oper_corrective_maintenance_ids\">\r\n            <div class=\"error-message\" *ngIf=\"operReasonsForm.form.controls['oper_corrective_maintenance_ids']?.hasError(validation.type)\">\r\n            {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end oper_corrective_maintenance_ids -->\r\n\r\n\r\n            <!-- name -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.name\"\r\n                            type=\"text\"\r\n                            name=\"name\"\r\n                            id=\"name-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n                    <div class=\"error-message\" *ngIf=\"operReasonsForm.form.controls['name']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end name -->\r\n\r\n\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-list/oper-reasons-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-list/oper-reasons-list.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO' | titlecase}}\"\r\n                 primaryLink=\"oper-reasons/create\"\r\n                 primaryText=\"Crear {{'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-searchbar showCancelButton=\"focus\"\r\n                       [cancelButtonText]=\"'Cancelar'\"\r\n                       [placeholder]=\"'Buscar ' + ('OPERATIVIDAD MOTIVOS MTTO CORRECTIVO' | lowercase )\"\r\n                       (ionCancel)=\"this.operReasonsService.searchValue = ''; operReasonsService.getOperReasons()\"\r\n                       (keyup.enter)=\"operReasonsService.getOperReasons()\"\r\n                       [(ngModel)]=\"operReasonsService.searchValue\"></ion-searchbar>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && operReasonsService.operReasons?.length\">\r\n        <ion-card *ngFor=\"let operReason of operReasonsService.operReasons; let index = index\">\r\n            <ion-list>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operReason?.name }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'OPERATIVIDAD MTTO CORRECTIVOS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">\r\n                            <ng-container *ngIf=\"operReason?.oper_corrective_maintenances?.length\">\r\n                                <ng-container *ngFor=\"let operCorrectiveMaintenance of operReason?.oper_corrective_maintenances; let last = last\">\r\n                                    <a routerLink=\"/oper-corrective-maintenances/{{ operCorrectiveMaintenance?.id }}/edit\">{{ operCorrectiveMaintenance?.name }}</a><span *ngIf=\"!last\">, </span>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n                    </ion-item>\r\n            </ion-list>\r\n            <ion-footer>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/oper-reasons/' + operReason?.id + '/edit'\">\r\n                            <ion-icon name=\"create-outline\"></ion-icon>\r\n                            <div>Editar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"operReasonsService.deleteOperReason(operReason?.id)\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            <div>Eliminar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-footer>\r\n        </ion-card>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && !operReasonsService.operReasons?.length\">\r\n        <ion-item>\r\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label><h2>No se encontraron {{'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO' | titlecase}}</h2></ion-label>\r\n            <ion-button [routerLink]=\"'/oper-reasons/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\r\n                Crear {{'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO' | titlecase}}\r\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"operReasonsService.meta\">\r\n        <ion-col class=\"ion-text-center\" size=\"12\">\r\n            <ion-button (click)=\"operReasonsService.getOperReasons(operReasonsService.meta.current_page - 1)\"\r\n                        [disabled]=\"operReasonsService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{operReasonsService.meta.current_page}}\r\n                /{{operReasonsService.meta.last_page}} {{operReasonsService.meta.from}}-{{operReasonsService.meta.to}}\r\n                /{{operReasonsService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"operReasonsService.getOperReasons(operReasonsService.meta.current_page + 1)\"\r\n                        [disabled]=\"operReasonsService.meta.current_page == operReasonsService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"OPERATIVIDAD MOTIVOS MTTO CORRECTIVO\"></app-main-header>\r\n\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/oper-reasons/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/oper-reasons/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/oper-reasons/oper-reasons-create/oper-reasons-create.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/oper-reasons/oper-reasons-create/oper-reasons-create.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItcmVhc29ucy9vcGVyLXJlYXNvbnMtY3JlYXRlL29wZXItcmVhc29ucy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-reasons/oper-reasons-create/oper-reasons-create.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/oper-reasons/oper-reasons-create/oper-reasons-create.component.ts ***!
  \***********************************************************************************/
/*! exports provided: OperReasonsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperReasonsCreateComponent", function() { return OperReasonsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_reasons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-reasons.service */ "./src/app/oper-reasons/oper-reasons.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let OperReasonsCreateComponent = class OperReasonsCreateComponent {
    constructor(operReasonsService, route, platform, splitPanel) {
        this.operReasonsService = operReasonsService;
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
        this.operReasonForm.operReasonsForm.valueChanges.subscribe((data) => {
            this.operReasonsService.operReasonsFormValid.next(this.operReasonForm.operReasonsForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.operReasonsService.createOperReason();
        this.operReasonsService.operReason = {};
    }
};
OperReasonsCreateComponent.ctorParameters = () => [
    { type: _oper_reasons_service__WEBPACK_IMPORTED_MODULE_2__["OperReasonsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
OperReasonsCreateComponent.propDecorators = {
    operReasonForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operReasonForm',] }]
};
OperReasonsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-reasons-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-reasons-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-create/oper-reasons-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-reasons-create.component.scss */ "./src/app/oper-reasons/oper-reasons-create/oper-reasons-create.component.scss")).default]
    })
], OperReasonsCreateComponent);



/***/ }),

/***/ "./src/app/oper-reasons/oper-reasons-duplicate/oper-reasons-duplicate.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/oper-reasons/oper-reasons-duplicate/oper-reasons-duplicate.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItcmVhc29ucy9vcGVyLXJlYXNvbnMtZHVwbGljYXRlL29wZXItcmVhc29ucy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-reasons/oper-reasons-duplicate/oper-reasons-duplicate.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/oper-reasons/oper-reasons-duplicate/oper-reasons-duplicate.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OperReasonsDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperReasonsDuplicateComponent", function() { return OperReasonsDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OperReasonsDuplicateComponent = class OperReasonsDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
OperReasonsDuplicateComponent.ctorParameters = () => [];
OperReasonsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-reasons-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-reasons-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-duplicate/oper-reasons-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-reasons-duplicate.component.scss */ "./src/app/oper-reasons/oper-reasons-duplicate/oper-reasons-duplicate.component.scss")).default]
    })
], OperReasonsDuplicateComponent);



/***/ }),

/***/ "./src/app/oper-reasons/oper-reasons-edit/oper-reasons-edit.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/oper-reasons/oper-reasons-edit/oper-reasons-edit.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItcmVhc29ucy9vcGVyLXJlYXNvbnMtZWRpdC9vcGVyLXJlYXNvbnMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-reasons/oper-reasons-edit/oper-reasons-edit.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/oper-reasons/oper-reasons-edit/oper-reasons-edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OperReasonsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperReasonsEditComponent", function() { return OperReasonsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_reasons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-reasons.service */ "./src/app/oper-reasons/oper-reasons.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let OperReasonsEditComponent = class OperReasonsEditComponent {
    constructor(operReasonsService, route, platform, splitPanel) {
        this.operReasonsService = operReasonsService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.operReasonsService.editOperReason(this.id);
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    ngAfterViewInit() {
        this.operReasonForm.operReasonsForm.valueChanges.subscribe((data) => {
            this.operReasonsService.operReasonsFormValid.next(this.operReasonForm.operReasonsForm.valid);
        });
    }
};
OperReasonsEditComponent.ctorParameters = () => [
    { type: _oper_reasons_service__WEBPACK_IMPORTED_MODULE_2__["OperReasonsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
OperReasonsEditComponent.propDecorators = {
    operReasonForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operReasonForm',] }]
};
OperReasonsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-reasons-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-reasons-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-edit/oper-reasons-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-reasons-edit.component.scss */ "./src/app/oper-reasons/oper-reasons-edit/oper-reasons-edit.component.scss")).default]
    })
], OperReasonsEditComponent);



/***/ }),

/***/ "./src/app/oper-reasons/oper-reasons-form/oper-reasons-form.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/oper-reasons/oper-reasons-form/oper-reasons-form.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* generated section */\n/* end generated section */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blci1yZWFzb25zL29wZXItcmVhc29ucy1mb3JtL29wZXItcmVhc29ucy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFBO0FBRUEsMEJBQUEiLCJmaWxlIjoic3JjL2FwcC9vcGVyLXJlYXNvbnMvb3Blci1yZWFzb25zLWZvcm0vb3Blci1yZWFzb25zLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnZW5lcmF0ZWQgc2VjdGlvbiAqL1xyXG5cclxuLyogZW5kIGdlbmVyYXRlZCBzZWN0aW9uICovXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/oper-reasons/oper-reasons-form/oper-reasons-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/oper-reasons/oper-reasons-form/oper-reasons-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OperReasonsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperReasonsFormComponent", function() { return OperReasonsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_reasons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-reasons.service */ "./src/app/oper-reasons/oper-reasons.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let OperReasonsFormComponent = class OperReasonsFormComponent {
    constructor(operReasonsService, toTitlecase) {
        this.operReasonsService = operReasonsService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'oper_corrective_maintenance_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('OPERATIVIDAD MTTO CORRECTIVOS') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setOperCorrectiveMaintenanceIds
    setOperCorrectiveMaintenanceIds(event) {
        let operCorrectiveMaintenanceIds = null;
        if (event.value.length) {
            operCorrectiveMaintenanceIds = [];
            for (let i = 0; i < event.value.length; i++) {
                operCorrectiveMaintenanceIds.push(event.value[i].id);
            }
        }
        this.operReasonsService.operReason.oper_corrective_maintenance_ids = operCorrectiveMaintenanceIds;
    }
};
OperReasonsFormComponent.ctorParameters = () => [
    { type: _oper_reasons_service__WEBPACK_IMPORTED_MODULE_2__["OperReasonsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
OperReasonsFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    operReasonsForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operReasonsForm',] }]
};
OperReasonsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-reasons-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-reasons-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-form/oper-reasons-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-reasons-form.component.scss */ "./src/app/oper-reasons/oper-reasons-form/oper-reasons-form.component.scss")).default]
    })
], OperReasonsFormComponent);



/***/ }),

/***/ "./src/app/oper-reasons/oper-reasons-list/oper-reasons-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/oper-reasons/oper-reasons-list/oper-reasons-list.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItcmVhc29ucy9vcGVyLXJlYXNvbnMtbGlzdC9vcGVyLXJlYXNvbnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-reasons/oper-reasons-list/oper-reasons-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/oper-reasons/oper-reasons-list/oper-reasons-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OperReasonsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperReasonsListComponent", function() { return OperReasonsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_reasons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-reasons.service */ "./src/app/oper-reasons/oper-reasons.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");







let OperReasonsListComponent = class OperReasonsListComponent {
    constructor(operReasonsService, api, loading, splitPanel) {
        this.operReasonsService = operReasonsService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
        this.operReasonsService.getOperReasons();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
OperReasonsListComponent.ctorParameters = () => [
    { type: _oper_reasons_service__WEBPACK_IMPORTED_MODULE_2__["OperReasonsService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] }
];
OperReasonsListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
OperReasonsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-reasons-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-reasons-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-list/oper-reasons-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-reasons-list.component.scss */ "./src/app/oper-reasons/oper-reasons-list/oper-reasons-list.component.scss")).default]
    })
], OperReasonsListComponent);



/***/ }),

/***/ "./src/app/oper-reasons/oper-reasons-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/oper-reasons/oper-reasons-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OperReasonsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperReasonsPageRoutingModule", function() { return OperReasonsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _oper_reasons_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oper-reasons.page */ "./src/app/oper-reasons/oper-reasons.page.ts");
/* harmony import */ var _oper_reasons_edit_oper_reasons_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oper-reasons-edit/oper-reasons-edit.component */ "./src/app/oper-reasons/oper-reasons-edit/oper-reasons-edit.component.ts");
/* harmony import */ var _oper_reasons_create_oper_reasons_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oper-reasons-create/oper-reasons-create.component */ "./src/app/oper-reasons/oper-reasons-create/oper-reasons-create.component.ts");
/* harmony import */ var _oper_reasons_list_oper_reasons_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oper-reasons-list/oper-reasons-list.component */ "./src/app/oper-reasons/oper-reasons-list/oper-reasons-list.component.ts");







const routes = [
    // generated section
    {
        path: '',
        data: {
            title: 'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO',
            roles: ['admin'],
        },
        component: _oper_reasons_page__WEBPACK_IMPORTED_MODULE_3__["OperReasonsPage"]
    },
    {
        path: 'list',
        data: {
            title: 'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO',
            roles: ['admin'],
        },
        component: _oper_reasons_list_oper_reasons_list_component__WEBPACK_IMPORTED_MODULE_6__["OperReasonsListComponent"]
    },
    {
        path: 'create',
        data: {
            title: 'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO',
            roles: ['admin'],
        },
        component: _oper_reasons_create_oper_reasons_create_component__WEBPACK_IMPORTED_MODULE_5__["OperReasonsCreateComponent"]
    },
    {
        path: ':id/edit',
        data: {
            title: 'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO',
            roles: ['admin'],
        },
        component: _oper_reasons_edit_oper_reasons_edit_component__WEBPACK_IMPORTED_MODULE_4__["OperReasonsEditComponent"]
    },
];
// end generated section
let OperReasonsPageRoutingModule = class OperReasonsPageRoutingModule {
};
OperReasonsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], OperReasonsPageRoutingModule);



/***/ }),

/***/ "./src/app/oper-reasons/oper-reasons.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/oper-reasons/oper-reasons.module.ts ***!
  \*****************************************************/
/*! exports provided: OperReasonsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperReasonsPageModule", function() { return OperReasonsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _oper_reasons_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oper-reasons-routing.module */ "./src/app/oper-reasons/oper-reasons-routing.module.ts");
/* harmony import */ var _oper_reasons_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./oper-reasons.page */ "./src/app/oper-reasons/oper-reasons.page.ts");
/* harmony import */ var _oper_reasons_list_oper_reasons_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./oper-reasons-list/oper-reasons-list.component */ "./src/app/oper-reasons/oper-reasons-list/oper-reasons-list.component.ts");
/* harmony import */ var _oper_reasons_create_oper_reasons_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./oper-reasons-create/oper-reasons-create.component */ "./src/app/oper-reasons/oper-reasons-create/oper-reasons-create.component.ts");
/* harmony import */ var _oper_reasons_duplicate_oper_reasons_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./oper-reasons-duplicate/oper-reasons-duplicate.component */ "./src/app/oper-reasons/oper-reasons-duplicate/oper-reasons-duplicate.component.ts");
/* harmony import */ var _oper_reasons_edit_oper_reasons_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./oper-reasons-edit/oper-reasons-edit.component */ "./src/app/oper-reasons/oper-reasons-edit/oper-reasons-edit.component.ts");
/* harmony import */ var _oper_reasons_form_oper_reasons_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./oper-reasons-form/oper-reasons-form.component */ "./src/app/oper-reasons/oper-reasons-form/oper-reasons-form.component.ts");













let OperReasonsPageModule = class OperReasonsPageModule {
};
OperReasonsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            // imports generated section
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _oper_reasons_routing_module__WEBPACK_IMPORTED_MODULE_6__["OperReasonsPageRoutingModule"]
            // end imports generated section
        ],
        declarations: [
            // declarations generated section
            _oper_reasons_page__WEBPACK_IMPORTED_MODULE_7__["OperReasonsPage"],
            _oper_reasons_list_oper_reasons_list_component__WEBPACK_IMPORTED_MODULE_8__["OperReasonsListComponent"],
            _oper_reasons_create_oper_reasons_create_component__WEBPACK_IMPORTED_MODULE_9__["OperReasonsCreateComponent"],
            _oper_reasons_duplicate_oper_reasons_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["OperReasonsDuplicateComponent"],
            _oper_reasons_edit_oper_reasons_edit_component__WEBPACK_IMPORTED_MODULE_11__["OperReasonsEditComponent"],
            _oper_reasons_form_oper_reasons_form_component__WEBPACK_IMPORTED_MODULE_12__["OperReasonsFormComponent"],
        ]
    })
], OperReasonsPageModule);



/***/ }),

/***/ "./src/app/oper-reasons/oper-reasons.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/oper-reasons/oper-reasons.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItcmVhc29ucy9vcGVyLXJlYXNvbnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/oper-reasons/oper-reasons.page.ts":
/*!***************************************************!*\
  !*** ./src/app/oper-reasons/oper-reasons.page.ts ***!
  \***************************************************/
/*! exports provided: OperReasonsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperReasonsPage", function() { return OperReasonsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");



let OperReasonsPage = class OperReasonsPage {
    constructor(splitPanel) {
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
};
OperReasonsPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] }
];
OperReasonsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-reasons',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-reasons.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-reasons.page.scss */ "./src/app/oper-reasons/oper-reasons.page.scss")).default]
    })
], OperReasonsPage);



/***/ }),

/***/ "./src/app/oper-reasons/oper-reasons.service.ts":
/*!******************************************************!*\
  !*** ./src/app/oper-reasons/oper-reasons.service.ts ***!
  \******************************************************/
/*! exports provided: OperReasonsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperReasonsService", function() { return OperReasonsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let OperReasonsService = class OperReasonsService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.operReasonsUrl = 'oper-reasons';
        this.operReasonsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.operReasons = [];
        this.operReason = {};
        this.operReasonLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    // generated section
    getOperReasons(page = this.page, perPage = this.perPage) {
        this.api.get(this.operReasonsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.operReasons = res.data;
            this.operReasonLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editOperReason(id) {
        this.api.get(this.operReasonsUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.operReason = res.data.model;
            this.operReasonLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateOperReason() {
        this.api.put(this.operReasonsUrl + '/' + this.operReason.id, {
            model: this.operReason,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getOperReasons(1);
        });
    }
    createOperReason() {
        this.api.get(this.operReasonsUrl + '/create')
            .subscribe((res) => {
            this.operReason = {};
            this.operReasonLists = res.lists;
        });
    }
    storeOperReason() {
        this.api.post(this.operReasonsUrl, {
            model: this.operReason,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getOperReasons(1);
        });
    }
    deleteOperReason(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.operReasonsUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getOperReasons(1);
                });
            }
            else {
                return;
            }
        });
    }
};
OperReasonsService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
OperReasonsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OperReasonsService);



/***/ })

}]);
//# sourceMappingURL=oper-reasons-oper-reasons-module-es2015.js.map