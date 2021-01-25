(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oper-items-oper-items-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-create/oper-items-create.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-create/oper-items-create.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/oper-items'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"operItemsService.storeOperItem()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!operItemsService.operItemsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'OPERATIVIDAD ITEMS MTTO CORRECTIVO' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-oper-items-form #operItemForm [model]=\"operItemsService.operItem\"></app-oper-items-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-duplicate/oper-items-duplicate.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-duplicate/oper-items-duplicate.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  OperItems duplicate works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-edit/oper-items-edit.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-edit/oper-items-edit.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/oper-items'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"operItemsService.updateOperItem()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!operItemsService.operItemsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'OPERATIVIDAD ITEMS MTTO CORRECTIVO' | titlecase}}: {{ operItemsService.operItem?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-oper-items-form #operItemForm [model]=\"operItemsService.operItem\"></app-oper-items-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-form/oper-items-form.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-form/oper-items-form.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #operItemsForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- oper_corrective_maintenance_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'OPERATIVIDAD MTTO CORRECTIVOS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"oper_corrective_maintenance_ids\"\n                          id=\"oper_corrective_maintenance_ids-field\"\n                          [(ngModel)]=\"model.oper_corrective_maintenances\"\n                          [items]=\"operItemsService.operItemLists.OperCorrectiveMaintenance\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('OPERATIVIDAD MTTO CORRECTIVOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('OPERATIVIDAD MTTO CORRECTIVOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setOperCorrectiveMaintenanceIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.oper_corrective_maintenance_ids\">\n            <div class=\"error-message\" *ngIf=\"operItemsForm.form.controls['oper_corrective_maintenance_ids']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end oper_corrective_maintenance_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"operItemsForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- inventory_code -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'CÓDIGO INVENTARIO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.inventory_code\"\n                            type=\"text\"\n                            name=\"inventory_code\"\n                            id=\"inventory_code-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.inventory_code\">\n                    <div class=\"error-message\" *ngIf=\"operItemsForm.form.controls['inventory_code']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end inventory_code -->\n\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-list/oper-items-list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-list/oper-items-list.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'OPERATIVIDAD ITEMS MTTO CORRECTIVO' | titlecase}}\"\n                 primaryLink=\"oper-items/create\"\n                 primaryText=\"Crear {{'OPERATIVIDAD ITEMS MTTO CORRECTIVO' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('OPERATIVIDAD ITEMS MTTO CORRECTIVO' | lowercase )\"\n                       (ionCancel)=\"this.operItemsService.searchValue = ''; operItemsService.getOperItems()\"\n                       (keyup.enter)=\"operItemsService.getOperItems()\"\n                       [(ngModel)]=\"operItemsService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && operItemsService.operItems?.length\">\n        <ion-card *ngFor=\"let operItem of operItemsService.operItems; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operItem?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CÓDIGO INVENTARIO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operItem?.inventory_code }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'OPERATIVIDAD MTTO CORRECTIVOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"operItem?.oper_corrective_maintenances?.length\">\n                                <ng-container *ngFor=\"let operCorrectiveMaintenance of operItem?.oper_corrective_maintenances; let last = last\">\n                                    <a routerLink=\"/oper-corrective-maintenances/{{ operCorrectiveMaintenance?.id }}/edit\">{{ operCorrectiveMaintenance?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/oper-items/' + operItem?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"operItemsService.deleteOperItem(operItem?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !operItemsService.operItems?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'OPERATIVIDAD ITEMS MTTO CORRECTIVO' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/oper-items/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'OPERATIVIDAD ITEMS MTTO CORRECTIVO' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"operItemsService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"operItemsService.getOperItems(operItemsService.meta.current_page - 1)\"\n                        [disabled]=\"operItemsService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{operItemsService.meta.current_page}}\n                /{{operItemsService.meta.last_page}} {{operItemsService.meta.from}}-{{operItemsService.meta.to}}\n                /{{operItemsService.meta.total}} </ion-button>\n            <ion-button (click)=\"operItemsService.getOperItems(operItemsService.meta.current_page + 1)\"\n                        [disabled]=\"operItemsService.meta.current_page == operItemsService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"OPERATIVIDAD ITEMS MTTO CORRECTIVO\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/oper-items/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'OPERATIVIDAD ITEMS MTTO CORRECTIVO'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/oper-items/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'OPERATIVIDAD ITEMS MTTO CORRECTIVO' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/oper-items/oper-items-create/oper-items-create.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/oper-items/oper-items-create/oper-items-create.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItaXRlbXMvb3Blci1pdGVtcy1jcmVhdGUvb3Blci1pdGVtcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-items/oper-items-create/oper-items-create.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/oper-items/oper-items-create/oper-items-create.component.ts ***!
  \*****************************************************************************/
/*! exports provided: OperItemsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperItemsCreateComponent", function() { return OperItemsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-items.service */ "./src/app/oper-items/oper-items.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let OperItemsCreateComponent = class OperItemsCreateComponent {
    constructor(operItemsService, route, platform, splitPanel) {
        this.operItemsService = operItemsService;
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
        this.operItemForm.operItemsForm.valueChanges.subscribe((data) => {
            this.operItemsService.operItemsFormValid.next(this.operItemForm.operItemsForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.operItemsService.createOperItem();
        this.operItemsService.operItem = {};
    }
};
OperItemsCreateComponent.ctorParameters = () => [
    { type: _oper_items_service__WEBPACK_IMPORTED_MODULE_2__["OperItemsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
OperItemsCreateComponent.propDecorators = {
    operItemForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operItemForm',] }]
};
OperItemsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-items-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-items-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-create/oper-items-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-items-create.component.scss */ "./src/app/oper-items/oper-items-create/oper-items-create.component.scss")).default]
    })
], OperItemsCreateComponent);



/***/ }),

/***/ "./src/app/oper-items/oper-items-duplicate/oper-items-duplicate.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/oper-items/oper-items-duplicate/oper-items-duplicate.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItaXRlbXMvb3Blci1pdGVtcy1kdXBsaWNhdGUvb3Blci1pdGVtcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-items/oper-items-duplicate/oper-items-duplicate.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/oper-items/oper-items-duplicate/oper-items-duplicate.component.ts ***!
  \***********************************************************************************/
/*! exports provided: OperItemsDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperItemsDuplicateComponent", function() { return OperItemsDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OperItemsDuplicateComponent = class OperItemsDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
OperItemsDuplicateComponent.ctorParameters = () => [];
OperItemsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-items-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-items-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-duplicate/oper-items-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-items-duplicate.component.scss */ "./src/app/oper-items/oper-items-duplicate/oper-items-duplicate.component.scss")).default]
    })
], OperItemsDuplicateComponent);



/***/ }),

/***/ "./src/app/oper-items/oper-items-edit/oper-items-edit.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/oper-items/oper-items-edit/oper-items-edit.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItaXRlbXMvb3Blci1pdGVtcy1lZGl0L29wZXItaXRlbXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-items/oper-items-edit/oper-items-edit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/oper-items/oper-items-edit/oper-items-edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: OperItemsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperItemsEditComponent", function() { return OperItemsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-items.service */ "./src/app/oper-items/oper-items.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let OperItemsEditComponent = class OperItemsEditComponent {
    constructor(operItemsService, route, platform, splitPanel) {
        this.operItemsService = operItemsService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.operItemsService.editOperItem(this.id);
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    ngAfterViewInit() {
        this.operItemForm.operItemsForm.valueChanges.subscribe((data) => {
            this.operItemsService.operItemsFormValid.next(this.operItemForm.operItemsForm.valid);
        });
    }
};
OperItemsEditComponent.ctorParameters = () => [
    { type: _oper_items_service__WEBPACK_IMPORTED_MODULE_2__["OperItemsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
OperItemsEditComponent.propDecorators = {
    operItemForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operItemForm',] }]
};
OperItemsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-items-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-items-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-edit/oper-items-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-items-edit.component.scss */ "./src/app/oper-items/oper-items-edit/oper-items-edit.component.scss")).default]
    })
], OperItemsEditComponent);



/***/ }),

/***/ "./src/app/oper-items/oper-items-form/oper-items-form.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/oper-items/oper-items-form/oper-items-form.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* generated section */\n/* end generated section */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blci1pdGVtcy9vcGVyLWl0ZW1zLWZvcm0vb3Blci1pdGVtcy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFBO0FBRUEsMEJBQUEiLCJmaWxlIjoic3JjL2FwcC9vcGVyLWl0ZW1zL29wZXItaXRlbXMtZm9ybS9vcGVyLWl0ZW1zLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnZW5lcmF0ZWQgc2VjdGlvbiAqL1xuXG4vKiBlbmQgZ2VuZXJhdGVkIHNlY3Rpb24gKi9cbiJdfQ== */");

/***/ }),

/***/ "./src/app/oper-items/oper-items-form/oper-items-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/oper-items/oper-items-form/oper-items-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: OperItemsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperItemsFormComponent", function() { return OperItemsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-items.service */ "./src/app/oper-items/oper-items.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let OperItemsFormComponent = class OperItemsFormComponent {
    constructor(operItemsService, toTitlecase) {
        this.operItemsService = operItemsService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'inventory_code': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO INVENTARIO') + ' es obligatorio.' },
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
        this.operItemsService.operItem.oper_corrective_maintenance_ids = operCorrectiveMaintenanceIds;
    }
};
OperItemsFormComponent.ctorParameters = () => [
    { type: _oper_items_service__WEBPACK_IMPORTED_MODULE_2__["OperItemsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
OperItemsFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    operItemsForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operItemsForm',] }]
};
OperItemsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-items-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-items-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-form/oper-items-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-items-form.component.scss */ "./src/app/oper-items/oper-items-form/oper-items-form.component.scss")).default]
    })
], OperItemsFormComponent);



/***/ }),

/***/ "./src/app/oper-items/oper-items-list/oper-items-list.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/oper-items/oper-items-list/oper-items-list.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItaXRlbXMvb3Blci1pdGVtcy1saXN0L29wZXItaXRlbXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-items/oper-items-list/oper-items-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/oper-items/oper-items-list/oper-items-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: OperItemsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperItemsListComponent", function() { return OperItemsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-items.service */ "./src/app/oper-items/oper-items.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");







let OperItemsListComponent = class OperItemsListComponent {
    constructor(operItemsService, api, loading, splitPanel) {
        this.operItemsService = operItemsService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
        this.operItemsService.getOperItems();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
OperItemsListComponent.ctorParameters = () => [
    { type: _oper_items_service__WEBPACK_IMPORTED_MODULE_2__["OperItemsService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] }
];
OperItemsListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
OperItemsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-items-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-items-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-list/oper-items-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-items-list.component.scss */ "./src/app/oper-items/oper-items-list/oper-items-list.component.scss")).default]
    })
], OperItemsListComponent);



/***/ }),

/***/ "./src/app/oper-items/oper-items-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/oper-items/oper-items-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: OperItemsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperItemsPageRoutingModule", function() { return OperItemsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _oper_items_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oper-items.page */ "./src/app/oper-items/oper-items.page.ts");
/* harmony import */ var _oper_items_edit_oper_items_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oper-items-edit/oper-items-edit.component */ "./src/app/oper-items/oper-items-edit/oper-items-edit.component.ts");
/* harmony import */ var _oper_items_create_oper_items_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oper-items-create/oper-items-create.component */ "./src/app/oper-items/oper-items-create/oper-items-create.component.ts");
/* harmony import */ var _oper_items_list_oper_items_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oper-items-list/oper-items-list.component */ "./src/app/oper-items/oper-items-list/oper-items-list.component.ts");







const routes = [
    // generated section
    {
        path: '',
        data: {
            title: 'OPERATIVIDAD ITEMS MTTO CORRECTIVO',
            roles: ['admin'],
        },
        component: _oper_items_page__WEBPACK_IMPORTED_MODULE_3__["OperItemsPage"]
    },
    {
        path: 'list',
        data: {
            title: 'OPERATIVIDAD ITEMS MTTO CORRECTIVO',
            roles: ['admin'],
        },
        component: _oper_items_list_oper_items_list_component__WEBPACK_IMPORTED_MODULE_6__["OperItemsListComponent"]
    },
    {
        path: 'create',
        data: {
            title: 'OPERATIVIDAD ITEMS MTTO CORRECTIVO',
            roles: ['admin'],
        },
        component: _oper_items_create_oper_items_create_component__WEBPACK_IMPORTED_MODULE_5__["OperItemsCreateComponent"]
    },
    {
        path: ':id/edit',
        data: {
            title: 'OPERATIVIDAD ITEMS MTTO CORRECTIVO',
            roles: ['admin'],
        },
        component: _oper_items_edit_oper_items_edit_component__WEBPACK_IMPORTED_MODULE_4__["OperItemsEditComponent"]
    },
];
// end generated section
let OperItemsPageRoutingModule = class OperItemsPageRoutingModule {
};
OperItemsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], OperItemsPageRoutingModule);



/***/ }),

/***/ "./src/app/oper-items/oper-items.module.ts":
/*!*************************************************!*\
  !*** ./src/app/oper-items/oper-items.module.ts ***!
  \*************************************************/
/*! exports provided: OperItemsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperItemsPageModule", function() { return OperItemsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _oper_items_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oper-items-routing.module */ "./src/app/oper-items/oper-items-routing.module.ts");
/* harmony import */ var _oper_items_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./oper-items.page */ "./src/app/oper-items/oper-items.page.ts");
/* harmony import */ var _oper_items_list_oper_items_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./oper-items-list/oper-items-list.component */ "./src/app/oper-items/oper-items-list/oper-items-list.component.ts");
/* harmony import */ var _oper_items_create_oper_items_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./oper-items-create/oper-items-create.component */ "./src/app/oper-items/oper-items-create/oper-items-create.component.ts");
/* harmony import */ var _oper_items_duplicate_oper_items_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./oper-items-duplicate/oper-items-duplicate.component */ "./src/app/oper-items/oper-items-duplicate/oper-items-duplicate.component.ts");
/* harmony import */ var _oper_items_edit_oper_items_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./oper-items-edit/oper-items-edit.component */ "./src/app/oper-items/oper-items-edit/oper-items-edit.component.ts");
/* harmony import */ var _oper_items_form_oper_items_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./oper-items-form/oper-items-form.component */ "./src/app/oper-items/oper-items-form/oper-items-form.component.ts");













let OperItemsPageModule = class OperItemsPageModule {
};
OperItemsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            // imports generated section
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _oper_items_routing_module__WEBPACK_IMPORTED_MODULE_6__["OperItemsPageRoutingModule"]
            // end imports generated section
        ],
        declarations: [
            // declarations generated section
            _oper_items_page__WEBPACK_IMPORTED_MODULE_7__["OperItemsPage"],
            _oper_items_list_oper_items_list_component__WEBPACK_IMPORTED_MODULE_8__["OperItemsListComponent"],
            _oper_items_create_oper_items_create_component__WEBPACK_IMPORTED_MODULE_9__["OperItemsCreateComponent"],
            _oper_items_duplicate_oper_items_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["OperItemsDuplicateComponent"],
            _oper_items_edit_oper_items_edit_component__WEBPACK_IMPORTED_MODULE_11__["OperItemsEditComponent"],
            _oper_items_form_oper_items_form_component__WEBPACK_IMPORTED_MODULE_12__["OperItemsFormComponent"],
        ]
    })
], OperItemsPageModule);



/***/ }),

/***/ "./src/app/oper-items/oper-items.page.scss":
/*!*************************************************!*\
  !*** ./src/app/oper-items/oper-items.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItaXRlbXMvb3Blci1pdGVtcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-items/oper-items.page.ts":
/*!***********************************************!*\
  !*** ./src/app/oper-items/oper-items.page.ts ***!
  \***********************************************/
/*! exports provided: OperItemsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperItemsPage", function() { return OperItemsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");



let OperItemsPage = class OperItemsPage {
    constructor(splitPanel) {
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
};
OperItemsPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] }
];
OperItemsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-items',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-items.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-items.page.scss */ "./src/app/oper-items/oper-items.page.scss")).default]
    })
], OperItemsPage);



/***/ }),

/***/ "./src/app/oper-items/oper-items.service.ts":
/*!**************************************************!*\
  !*** ./src/app/oper-items/oper-items.service.ts ***!
  \**************************************************/
/*! exports provided: OperItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperItemsService", function() { return OperItemsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let OperItemsService = class OperItemsService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.operItemsUrl = 'oper-items';
        this.operItemsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.operItems = [];
        this.operItem = {};
        this.operItemLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    // generated section
    getOperItems(page = this.page, perPage = this.perPage) {
        this.api.get(this.operItemsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.operItems = res.data;
            this.operItemLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editOperItem(id) {
        this.api.get(this.operItemsUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.operItem = res.data.model;
            this.operItemLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateOperItem() {
        this.api.put(this.operItemsUrl + '/' + this.operItem.id, {
            model: this.operItem,
            pivots: {
                oper_corrective_maintenance: this.operItem.oper_corrective_maintenances,
            }
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getOperItems(1);
        });
    }
    createOperItem() {
        this.api.get(this.operItemsUrl + '/create')
            .subscribe((res) => {
            this.operItem = {};
            this.operItemLists = res.lists;
        });
    }
    storeOperItem() {
        this.api.post(this.operItemsUrl, {
            model: this.operItem,
            pivots: {
                oper_corrective_maintenance: this.operItem.oper_corrective_maintenances,
            }
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getOperItems(1);
        });
    }
    deleteOperItem(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.operItemsUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getOperItems(1);
                });
            }
            else {
                return;
            }
        });
    }
};
OperItemsService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
OperItemsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OperItemsService);



/***/ })

}]);
//# sourceMappingURL=oper-items-oper-items-module-es2015.js.map