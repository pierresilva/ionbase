(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oper-preventive-maintenances-oper-preventive-maintenances-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-preventive-maintenances/oper-preventive-maintenances-create/oper-preventive-maintenances-create.component.html":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-preventive-maintenances/oper-preventive-maintenances-create/oper-preventive-maintenances-create.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/oper-preventive-maintenances'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"operPreventiveMaintenancesService.storeOperPreventiveMaintenance()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!operPreventiveMaintenancesService.operPreventiveMaintenancesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'OPERATIVIDAD MTTO PREVENTIVOS' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-oper-preventive-maintenances-form #operPreventiveMaintenanceForm [model]=\"operPreventiveMaintenancesService.operPreventiveMaintenance\"></app-oper-preventive-maintenances-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-preventive-maintenances/oper-preventive-maintenances-duplicate/oper-preventive-maintenances-duplicate.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-preventive-maintenances/oper-preventive-maintenances-duplicate/oper-preventive-maintenances-duplicate.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  OperPreventiveMaintenances duplicate works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-preventive-maintenances/oper-preventive-maintenances-edit/oper-preventive-maintenances-edit.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-preventive-maintenances/oper-preventive-maintenances-edit/oper-preventive-maintenances-edit.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/oper-preventive-maintenances'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"operPreventiveMaintenancesService.updateOperPreventiveMaintenance()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!operPreventiveMaintenancesService.operPreventiveMaintenancesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'OPERATIVIDAD MTTO PREVENTIVOS' | titlecase}}: {{ operPreventiveMaintenancesService.operPreventiveMaintenance?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-oper-preventive-maintenances-form #operPreventiveMaintenanceForm [model]=\"operPreventiveMaintenancesService.operPreventiveMaintenance\"></app-oper-preventive-maintenances-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-preventive-maintenances/oper-preventive-maintenances-form/oper-preventive-maintenances-form.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-preventive-maintenances/oper-preventive-maintenances-form/oper-preventive-maintenances-form.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #operPreventiveMaintenancesForm=\"ngForm\" novalidate autocomplete=\"off\">\r\n\r\n\r\n    <!-- oper_machine_id -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'MAQUINARIA' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"oper_machine_id\"\r\n                          id=\"oper_machine_id-field\"\r\n                          [required]=\"true\"\r\n                          [(ngModel)]=\"model.oper_machine\"\r\n                          [items]=\"operPreventiveMaintenancesService.operPreventiveMaintenanceLists.OperMachine\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('MAQUINARIA' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('MAQUINARIA' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setOperMachineId($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.oper_machine_id\">\r\n            <div class=\"error-message\" *ngIf=\"operPreventiveMaintenancesForm.form.controls['oper_machine_id']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end oper_machine_id -->\r\n\r\n\r\n            <!-- name -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.name\"\r\n                            type=\"text\"\r\n                            name=\"name\"\r\n                            id=\"name-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n                    <div class=\"error-message\" *ngIf=\"operPreventiveMaintenancesForm.form.controls['name']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end name -->\r\n\r\n\r\n            <!-- date -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'FECHA' | titlecase }}</ion-label>\r\n                <ion-datetime name=\"date\"\r\n                              id=\"date-field\"\r\n                              [doneText]=\"'Seleccionar'\"\r\n                              [cancelText]=\"'Cancelar'\"\r\n                              [(ngModel)]=\"model.date\"\r\n                              displayFormat=\"DD/MM/YYYY\"></ion-datetime>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.date\">\r\n                    <div class=\"error-message\" *ngIf=\"operPreventiveMaintenancesForm.form.controls['date']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end date -->\r\n\r\n\r\n            <!-- time -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'HORA' | titlecase }}</ion-label>\r\n                <ion-datetime name=\"time\"\r\n                              id=\"time-field\"\r\n                              [doneText]=\"'Seleccionar'\"\r\n                              [cancelText]=\"'Cancelar'\"\r\n                              [(ngModel)]=\"model.time\"\r\n                              displayFormat=\"HH:mm\"></ion-datetime>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.time\">\r\n                    <div class=\"error-message\" *ngIf=\"operPreventiveMaintenancesForm.form.controls['time']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end time -->\r\n\r\n\r\n            <!-- next -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'SIGUIENTE EN' | titlecase }}</ion-label>\r\n                <ion-datetime name=\"next\"\r\n                              id=\"next-field\"\r\n                              [doneText]=\"'Seleccionar'\"\r\n                              [cancelText]=\"'Cancelar'\"\r\n                              [(ngModel)]=\"model.next\"\r\n                              displayFormat=\"DD/MM/YYYY\"></ion-datetime>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.next\">\r\n                    <div class=\"error-message\" *ngIf=\"operPreventiveMaintenancesForm.form.controls['next']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end next -->\r\n\r\n\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-preventive-maintenances/oper-preventive-maintenances-list/oper-preventive-maintenances-list.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-preventive-maintenances/oper-preventive-maintenances-list/oper-preventive-maintenances-list.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'OPERATIVIDAD MTTO PREVENTIVOS' | titlecase}}\"\r\n                 primaryLink=\"oper-preventive-maintenances/create\"\r\n                 primaryText=\"Crear {{'OPERATIVIDAD MTTO PREVENTIVOS' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-searchbar showCancelButton=\"focus\"\r\n                       [cancelButtonText]=\"'Cancelar'\"\r\n                       [placeholder]=\"'Buscar ' + ('OPERATIVIDAD MTTO PREVENTIVOS' | lowercase )\"\r\n                       (ionCancel)=\"this.operPreventiveMaintenancesService.searchValue = ''; operPreventiveMaintenancesService.getOperPreventiveMaintenances()\"\r\n                       (keyup.enter)=\"operPreventiveMaintenancesService.getOperPreventiveMaintenances()\"\r\n                       [(ngModel)]=\"operPreventiveMaintenancesService.searchValue\"></ion-searchbar>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && operPreventiveMaintenancesService.operPreventiveMaintenances?.length\">\r\n        <ion-card *ngFor=\"let operPreventiveMaintenance of operPreventiveMaintenancesService.operPreventiveMaintenances; let index = index\">\r\n            <ion-list>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operPreventiveMaintenance?.name }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'FECHA' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operPreventiveMaintenance?.date | dateFormat:'DD/MM/YYYY' }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'HORA' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operPreventiveMaintenance?.time | timeFormat:'HH:mm' }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'SIGUIENTE EN' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operPreventiveMaintenance?.next | dateFormat:'DD/MM/YYYY' }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'OPERATIVIDAD MAQUINARIA' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\"><a routerLink=\"/oper-machines/{{ operPreventiveMaintenance?.oper_machine?.id }}/edit\">{{ operPreventiveMaintenance?.oper_machine?.name }}</a></div>\r\n                    </ion-item>\r\n            </ion-list>\r\n            <ion-footer>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/oper-preventive-maintenances/' + operPreventiveMaintenance?.id + '/edit'\">\r\n                            <ion-icon name=\"create-outline\"></ion-icon>\r\n                            <div>Editar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"operPreventiveMaintenancesService.deleteOperPreventiveMaintenance(operPreventiveMaintenance?.id)\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            <div>Eliminar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-footer>\r\n        </ion-card>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && !operPreventiveMaintenancesService.operPreventiveMaintenances?.length\">\r\n        <ion-item>\r\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label><h2>No se encontraron {{'OPERATIVIDAD MTTO PREVENTIVOS' | titlecase}}</h2></ion-label>\r\n            <ion-button [routerLink]=\"'/oper-preventive-maintenances/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\r\n                Crear {{'OPERATIVIDAD MTTO PREVENTIVOS' | titlecase}}\r\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"operPreventiveMaintenancesService.meta\">\r\n        <ion-col class=\"ion-text-center\" size=\"12\">\r\n            <ion-button (click)=\"operPreventiveMaintenancesService.getOperPreventiveMaintenances(operPreventiveMaintenancesService.meta.current_page - 1)\"\r\n                        [disabled]=\"operPreventiveMaintenancesService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{operPreventiveMaintenancesService.meta.current_page}}\r\n                /{{operPreventiveMaintenancesService.meta.last_page}} {{operPreventiveMaintenancesService.meta.from}}-{{operPreventiveMaintenancesService.meta.to}}\r\n                /{{operPreventiveMaintenancesService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"operPreventiveMaintenancesService.getOperPreventiveMaintenances(operPreventiveMaintenancesService.meta.current_page + 1)\"\r\n                        [disabled]=\"operPreventiveMaintenancesService.meta.current_page == operPreventiveMaintenancesService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-preventive-maintenances/oper-preventive-maintenances.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-preventive-maintenances/oper-preventive-maintenances.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"OPERATIVIDAD MTTO PREVENTIVOS\"></app-main-header>\r\n\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/oper-preventive-maintenances/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'OPERATIVIDAD MTTO PREVENTIVOS'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/oper-preventive-maintenances/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'OPERATIVIDAD MTTO PREVENTIVOS' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances-create/oper-preventive-maintenances-create.component.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/oper-preventive-maintenances/oper-preventive-maintenances-create/oper-preventive-maintenances-create.component.scss ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItcHJldmVudGl2ZS1tYWludGVuYW5jZXMvb3Blci1wcmV2ZW50aXZlLW1haW50ZW5hbmNlcy1jcmVhdGUvb3Blci1wcmV2ZW50aXZlLW1haW50ZW5hbmNlcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances-create/oper-preventive-maintenances-create.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/oper-preventive-maintenances/oper-preventive-maintenances-create/oper-preventive-maintenances-create.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: OperPreventiveMaintenancesCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperPreventiveMaintenancesCreateComponent", function() { return OperPreventiveMaintenancesCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_preventive_maintenances_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-preventive-maintenances.service */ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let OperPreventiveMaintenancesCreateComponent = class OperPreventiveMaintenancesCreateComponent {
    constructor(operPreventiveMaintenancesService, route, platform, splitPanel) {
        this.operPreventiveMaintenancesService = operPreventiveMaintenancesService;
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
        this.operPreventiveMaintenanceForm.operPreventiveMaintenancesForm.valueChanges.subscribe((data) => {
            this.operPreventiveMaintenancesService.operPreventiveMaintenancesFormValid.next(this.operPreventiveMaintenanceForm.operPreventiveMaintenancesForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.operPreventiveMaintenancesService.createOperPreventiveMaintenance();
        this.operPreventiveMaintenancesService.operPreventiveMaintenance = {};
    }
};
OperPreventiveMaintenancesCreateComponent.ctorParameters = () => [
    { type: _oper_preventive_maintenances_service__WEBPACK_IMPORTED_MODULE_2__["OperPreventiveMaintenancesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
OperPreventiveMaintenancesCreateComponent.propDecorators = {
    operPreventiveMaintenanceForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operPreventiveMaintenanceForm',] }]
};
OperPreventiveMaintenancesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-preventive-maintenances-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-preventive-maintenances-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-preventive-maintenances/oper-preventive-maintenances-create/oper-preventive-maintenances-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-preventive-maintenances-create.component.scss */ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances-create/oper-preventive-maintenances-create.component.scss")).default]
    })
], OperPreventiveMaintenancesCreateComponent);



/***/ }),

/***/ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances-duplicate/oper-preventive-maintenances-duplicate.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/oper-preventive-maintenances/oper-preventive-maintenances-duplicate/oper-preventive-maintenances-duplicate.component.scss ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItcHJldmVudGl2ZS1tYWludGVuYW5jZXMvb3Blci1wcmV2ZW50aXZlLW1haW50ZW5hbmNlcy1kdXBsaWNhdGUvb3Blci1wcmV2ZW50aXZlLW1haW50ZW5hbmNlcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances-duplicate/oper-preventive-maintenances-duplicate.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/oper-preventive-maintenances/oper-preventive-maintenances-duplicate/oper-preventive-maintenances-duplicate.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: OperPreventiveMaintenancesDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperPreventiveMaintenancesDuplicateComponent", function() { return OperPreventiveMaintenancesDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OperPreventiveMaintenancesDuplicateComponent = class OperPreventiveMaintenancesDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
OperPreventiveMaintenancesDuplicateComponent.ctorParameters = () => [];
OperPreventiveMaintenancesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-preventive-maintenances-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-preventive-maintenances-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-preventive-maintenances/oper-preventive-maintenances-duplicate/oper-preventive-maintenances-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-preventive-maintenances-duplicate.component.scss */ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances-duplicate/oper-preventive-maintenances-duplicate.component.scss")).default]
    })
], OperPreventiveMaintenancesDuplicateComponent);



/***/ }),

/***/ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances-edit/oper-preventive-maintenances-edit.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/oper-preventive-maintenances/oper-preventive-maintenances-edit/oper-preventive-maintenances-edit.component.scss ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItcHJldmVudGl2ZS1tYWludGVuYW5jZXMvb3Blci1wcmV2ZW50aXZlLW1haW50ZW5hbmNlcy1lZGl0L29wZXItcHJldmVudGl2ZS1tYWludGVuYW5jZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances-edit/oper-preventive-maintenances-edit.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/oper-preventive-maintenances/oper-preventive-maintenances-edit/oper-preventive-maintenances-edit.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: OperPreventiveMaintenancesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperPreventiveMaintenancesEditComponent", function() { return OperPreventiveMaintenancesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_preventive_maintenances_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-preventive-maintenances.service */ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let OperPreventiveMaintenancesEditComponent = class OperPreventiveMaintenancesEditComponent {
    constructor(operPreventiveMaintenancesService, route, platform, splitPanel) {
        this.operPreventiveMaintenancesService = operPreventiveMaintenancesService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.operPreventiveMaintenancesService.editOperPreventiveMaintenance(this.id);
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    ngAfterViewInit() {
        this.operPreventiveMaintenanceForm.operPreventiveMaintenancesForm.valueChanges.subscribe((data) => {
            this.operPreventiveMaintenancesService.operPreventiveMaintenancesFormValid.next(this.operPreventiveMaintenanceForm.operPreventiveMaintenancesForm.valid);
        });
    }
};
OperPreventiveMaintenancesEditComponent.ctorParameters = () => [
    { type: _oper_preventive_maintenances_service__WEBPACK_IMPORTED_MODULE_2__["OperPreventiveMaintenancesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
OperPreventiveMaintenancesEditComponent.propDecorators = {
    operPreventiveMaintenanceForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operPreventiveMaintenanceForm',] }]
};
OperPreventiveMaintenancesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-preventive-maintenances-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-preventive-maintenances-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-preventive-maintenances/oper-preventive-maintenances-edit/oper-preventive-maintenances-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-preventive-maintenances-edit.component.scss */ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances-edit/oper-preventive-maintenances-edit.component.scss")).default]
    })
], OperPreventiveMaintenancesEditComponent);



/***/ }),

/***/ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances-form/oper-preventive-maintenances-form.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/oper-preventive-maintenances/oper-preventive-maintenances-form/oper-preventive-maintenances-form.component.scss ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* generated section */\n/* end generated section */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blci1wcmV2ZW50aXZlLW1haW50ZW5hbmNlcy9vcGVyLXByZXZlbnRpdmUtbWFpbnRlbmFuY2VzLWZvcm0vb3Blci1wcmV2ZW50aXZlLW1haW50ZW5hbmNlcy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFBO0FBRUEsMEJBQUEiLCJmaWxlIjoic3JjL2FwcC9vcGVyLXByZXZlbnRpdmUtbWFpbnRlbmFuY2VzL29wZXItcHJldmVudGl2ZS1tYWludGVuYW5jZXMtZm9ybS9vcGVyLXByZXZlbnRpdmUtbWFpbnRlbmFuY2VzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnZW5lcmF0ZWQgc2VjdGlvbiAqL1xyXG5cclxuLyogZW5kIGdlbmVyYXRlZCBzZWN0aW9uICovXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances-form/oper-preventive-maintenances-form.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/oper-preventive-maintenances/oper-preventive-maintenances-form/oper-preventive-maintenances-form.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: OperPreventiveMaintenancesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperPreventiveMaintenancesFormComponent", function() { return OperPreventiveMaintenancesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_preventive_maintenances_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-preventive-maintenances.service */ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let OperPreventiveMaintenancesFormComponent = class OperPreventiveMaintenancesFormComponent {
    constructor(operPreventiveMaintenancesService, toTitlecase) {
        this.operPreventiveMaintenancesService = operPreventiveMaintenancesService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'oper_machine_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('MAQUINA') + ' es obligatorio.' },
            ],
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'date': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('FECHA') + ' es obligatorio.' },
            ],
            'time': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('HORA') + ' es obligatorio.' },
            ],
            'next': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('SIGUIENTE EN') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setOperMachineId
    setOperMachineId(event) {
        this.operPreventiveMaintenancesService.operPreventiveMaintenance.oper_machine_id = event.value ? event.value.id : null;
    }
};
OperPreventiveMaintenancesFormComponent.ctorParameters = () => [
    { type: _oper_preventive_maintenances_service__WEBPACK_IMPORTED_MODULE_2__["OperPreventiveMaintenancesService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
OperPreventiveMaintenancesFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    operPreventiveMaintenancesForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operPreventiveMaintenancesForm',] }]
};
OperPreventiveMaintenancesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-preventive-maintenances-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-preventive-maintenances-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-preventive-maintenances/oper-preventive-maintenances-form/oper-preventive-maintenances-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-preventive-maintenances-form.component.scss */ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances-form/oper-preventive-maintenances-form.component.scss")).default]
    })
], OperPreventiveMaintenancesFormComponent);



/***/ }),

/***/ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances-list/oper-preventive-maintenances-list.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/oper-preventive-maintenances/oper-preventive-maintenances-list/oper-preventive-maintenances-list.component.scss ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItcHJldmVudGl2ZS1tYWludGVuYW5jZXMvb3Blci1wcmV2ZW50aXZlLW1haW50ZW5hbmNlcy1saXN0L29wZXItcHJldmVudGl2ZS1tYWludGVuYW5jZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances-list/oper-preventive-maintenances-list.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/oper-preventive-maintenances/oper-preventive-maintenances-list/oper-preventive-maintenances-list.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: OperPreventiveMaintenancesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperPreventiveMaintenancesListComponent", function() { return OperPreventiveMaintenancesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_preventive_maintenances_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-preventive-maintenances.service */ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");







let OperPreventiveMaintenancesListComponent = class OperPreventiveMaintenancesListComponent {
    constructor(operPreventiveMaintenancesService, api, loading, splitPanel) {
        this.operPreventiveMaintenancesService = operPreventiveMaintenancesService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
        this.operPreventiveMaintenancesService.getOperPreventiveMaintenances();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
OperPreventiveMaintenancesListComponent.ctorParameters = () => [
    { type: _oper_preventive_maintenances_service__WEBPACK_IMPORTED_MODULE_2__["OperPreventiveMaintenancesService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] }
];
OperPreventiveMaintenancesListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
OperPreventiveMaintenancesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-preventive-maintenances-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-preventive-maintenances-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-preventive-maintenances/oper-preventive-maintenances-list/oper-preventive-maintenances-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-preventive-maintenances-list.component.scss */ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances-list/oper-preventive-maintenances-list.component.scss")).default]
    })
], OperPreventiveMaintenancesListComponent);



/***/ }),

/***/ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/oper-preventive-maintenances/oper-preventive-maintenances-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: OperPreventiveMaintenancesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperPreventiveMaintenancesPageRoutingModule", function() { return OperPreventiveMaintenancesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _oper_preventive_maintenances_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oper-preventive-maintenances.page */ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances.page.ts");
/* harmony import */ var _oper_preventive_maintenances_edit_oper_preventive_maintenances_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oper-preventive-maintenances-edit/oper-preventive-maintenances-edit.component */ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances-edit/oper-preventive-maintenances-edit.component.ts");
/* harmony import */ var _oper_preventive_maintenances_create_oper_preventive_maintenances_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oper-preventive-maintenances-create/oper-preventive-maintenances-create.component */ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances-create/oper-preventive-maintenances-create.component.ts");
/* harmony import */ var _oper_preventive_maintenances_list_oper_preventive_maintenances_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oper-preventive-maintenances-list/oper-preventive-maintenances-list.component */ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances-list/oper-preventive-maintenances-list.component.ts");







const routes = [
    // generated section
    {
        path: '',
        data: {
            title: 'OPERATIVIDAD MTTO PREVENTIVOS',
            roles: ['admin'],
        },
        component: _oper_preventive_maintenances_page__WEBPACK_IMPORTED_MODULE_3__["OperPreventiveMaintenancesPage"]
    },
    {
        path: 'list',
        data: {
            title: 'OPERATIVIDAD MTTO PREVENTIVOS',
            roles: ['admin'],
        },
        component: _oper_preventive_maintenances_list_oper_preventive_maintenances_list_component__WEBPACK_IMPORTED_MODULE_6__["OperPreventiveMaintenancesListComponent"]
    },
    {
        path: 'create',
        data: {
            title: 'OPERATIVIDAD MTTO PREVENTIVOS',
            roles: ['admin'],
        },
        component: _oper_preventive_maintenances_create_oper_preventive_maintenances_create_component__WEBPACK_IMPORTED_MODULE_5__["OperPreventiveMaintenancesCreateComponent"]
    },
    {
        path: ':id/edit',
        data: {
            title: 'OPERATIVIDAD MTTO PREVENTIVOS',
            roles: ['admin'],
        },
        component: _oper_preventive_maintenances_edit_oper_preventive_maintenances_edit_component__WEBPACK_IMPORTED_MODULE_4__["OperPreventiveMaintenancesEditComponent"]
    },
];
// end generated section
let OperPreventiveMaintenancesPageRoutingModule = class OperPreventiveMaintenancesPageRoutingModule {
};
OperPreventiveMaintenancesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], OperPreventiveMaintenancesPageRoutingModule);



/***/ }),

/***/ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/oper-preventive-maintenances/oper-preventive-maintenances.module.ts ***!
  \*************************************************************************************/
/*! exports provided: OperPreventiveMaintenancesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperPreventiveMaintenancesPageModule", function() { return OperPreventiveMaintenancesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _oper_preventive_maintenances_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oper-preventive-maintenances-routing.module */ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances-routing.module.ts");
/* harmony import */ var _oper_preventive_maintenances_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./oper-preventive-maintenances.page */ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances.page.ts");
/* harmony import */ var _oper_preventive_maintenances_list_oper_preventive_maintenances_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./oper-preventive-maintenances-list/oper-preventive-maintenances-list.component */ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances-list/oper-preventive-maintenances-list.component.ts");
/* harmony import */ var _oper_preventive_maintenances_create_oper_preventive_maintenances_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./oper-preventive-maintenances-create/oper-preventive-maintenances-create.component */ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances-create/oper-preventive-maintenances-create.component.ts");
/* harmony import */ var _oper_preventive_maintenances_duplicate_oper_preventive_maintenances_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./oper-preventive-maintenances-duplicate/oper-preventive-maintenances-duplicate.component */ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances-duplicate/oper-preventive-maintenances-duplicate.component.ts");
/* harmony import */ var _oper_preventive_maintenances_edit_oper_preventive_maintenances_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./oper-preventive-maintenances-edit/oper-preventive-maintenances-edit.component */ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances-edit/oper-preventive-maintenances-edit.component.ts");
/* harmony import */ var _oper_preventive_maintenances_form_oper_preventive_maintenances_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./oper-preventive-maintenances-form/oper-preventive-maintenances-form.component */ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances-form/oper-preventive-maintenances-form.component.ts");













let OperPreventiveMaintenancesPageModule = class OperPreventiveMaintenancesPageModule {
};
OperPreventiveMaintenancesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            // imports generated section
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _oper_preventive_maintenances_routing_module__WEBPACK_IMPORTED_MODULE_6__["OperPreventiveMaintenancesPageRoutingModule"]
            // end imports generated section
        ],
        declarations: [
            // declarations generated section
            _oper_preventive_maintenances_page__WEBPACK_IMPORTED_MODULE_7__["OperPreventiveMaintenancesPage"],
            _oper_preventive_maintenances_list_oper_preventive_maintenances_list_component__WEBPACK_IMPORTED_MODULE_8__["OperPreventiveMaintenancesListComponent"],
            _oper_preventive_maintenances_create_oper_preventive_maintenances_create_component__WEBPACK_IMPORTED_MODULE_9__["OperPreventiveMaintenancesCreateComponent"],
            _oper_preventive_maintenances_duplicate_oper_preventive_maintenances_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["OperPreventiveMaintenancesDuplicateComponent"],
            _oper_preventive_maintenances_edit_oper_preventive_maintenances_edit_component__WEBPACK_IMPORTED_MODULE_11__["OperPreventiveMaintenancesEditComponent"],
            _oper_preventive_maintenances_form_oper_preventive_maintenances_form_component__WEBPACK_IMPORTED_MODULE_12__["OperPreventiveMaintenancesFormComponent"],
        ]
    })
], OperPreventiveMaintenancesPageModule);



/***/ }),

/***/ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/oper-preventive-maintenances/oper-preventive-maintenances.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItcHJldmVudGl2ZS1tYWludGVuYW5jZXMvb3Blci1wcmV2ZW50aXZlLW1haW50ZW5hbmNlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/oper-preventive-maintenances/oper-preventive-maintenances.page.ts ***!
  \***********************************************************************************/
/*! exports provided: OperPreventiveMaintenancesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperPreventiveMaintenancesPage", function() { return OperPreventiveMaintenancesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");



let OperPreventiveMaintenancesPage = class OperPreventiveMaintenancesPage {
    constructor(splitPanel) {
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
};
OperPreventiveMaintenancesPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] }
];
OperPreventiveMaintenancesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-preventive-maintenances',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-preventive-maintenances.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-preventive-maintenances/oper-preventive-maintenances.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-preventive-maintenances.page.scss */ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances.page.scss")).default]
    })
], OperPreventiveMaintenancesPage);



/***/ }),

/***/ "./src/app/oper-preventive-maintenances/oper-preventive-maintenances.service.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/oper-preventive-maintenances/oper-preventive-maintenances.service.ts ***!
  \**************************************************************************************/
/*! exports provided: OperPreventiveMaintenancesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperPreventiveMaintenancesService", function() { return OperPreventiveMaintenancesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









let OperPreventiveMaintenancesService = class OperPreventiveMaintenancesService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.operPreventiveMaintenancesUrl = 'oper-preventive-maintenances';
        this.operPreventiveMaintenancesFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.operPreventiveMaintenances = [];
        this.operPreventiveMaintenance = {};
        this.operPreventiveMaintenanceLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    // generated section
    getOperPreventiveMaintenances(page = this.page, perPage = this.perPage) {
        this.api.get(this.operPreventiveMaintenancesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.operPreventiveMaintenances = res.data;
            this.operPreventiveMaintenanceLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editOperPreventiveMaintenance(id) {
        this.api.get(this.operPreventiveMaintenancesUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.operPreventiveMaintenance = res.data.model;
            this.operPreventiveMaintenanceLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateOperPreventiveMaintenance() {
        this.api.put(this.operPreventiveMaintenancesUrl + '/' + this.operPreventiveMaintenance.id, {
            model: this.operPreventiveMaintenance,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getOperPreventiveMaintenances(1);
        });
    }
    createOperPreventiveMaintenance() {
        this.api.get(this.operPreventiveMaintenancesUrl + '/create')
            .subscribe((res) => {
            this.operPreventiveMaintenance = {};
            this.operPreventiveMaintenance.time = moment__WEBPACK_IMPORTED_MODULE_8__().format('HH:mm');
            this.operPreventiveMaintenance.date = moment__WEBPACK_IMPORTED_MODULE_8__().format('YYYY-MM-DD');
            this.operPreventiveMaintenanceLists = res.lists;
        });
    }
    storeOperPreventiveMaintenance() {
        this.api.post(this.operPreventiveMaintenancesUrl, {
            model: this.operPreventiveMaintenance,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getOperPreventiveMaintenances(1);
        });
    }
    deleteOperPreventiveMaintenance(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.operPreventiveMaintenancesUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getOperPreventiveMaintenances(1);
                });
            }
            else {
                return;
            }
        });
    }
};
OperPreventiveMaintenancesService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
OperPreventiveMaintenancesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OperPreventiveMaintenancesService);



/***/ })

}]);
//# sourceMappingURL=oper-preventive-maintenances-oper-preventive-maintenances-module-es2015.js.map