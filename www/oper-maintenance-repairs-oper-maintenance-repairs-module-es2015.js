(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oper-maintenance-repairs-oper-maintenance-repairs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-create/oper-maintenance-repairs-create.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-create/oper-maintenance-repairs-create.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/oper-maintenance-repairs'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"operMaintenanceRepairsService.storeOperMaintenanceRepair()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!operMaintenanceRepairsService.operMaintenanceRepairsFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'OPERATIVIDAD REPARACIONES' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-oper-maintenance-repairs-form #operMaintenanceRepairForm [model]=\"operMaintenanceRepairsService.operMaintenanceRepair\"></app-oper-maintenance-repairs-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-duplicate/oper-maintenance-repairs-duplicate.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-duplicate/oper-maintenance-repairs-duplicate.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  OperMaintenanceRepairs duplicate works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/oper-maintenance-repairs'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"operMaintenanceRepairsService.updateOperMaintenanceRepair()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!operMaintenanceRepairsService.operMaintenanceRepairsFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'OPERATIVIDAD REPARACIONES' | titlecase}}: {{ operMaintenanceRepairsService.operMaintenanceRepair?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-oper-maintenance-repairs-form #operMaintenanceRepairForm [model]=\"operMaintenanceRepairsService.operMaintenanceRepair\"></app-oper-maintenance-repairs-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-form/oper-maintenance-repairs-form.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-form/oper-maintenance-repairs-form.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #operMaintenanceRepairsForm=\"ngForm\" novalidate autocomplete=\"off\">\r\n\r\n\r\n    <!-- oper_corrective_maintenance_id -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'MANTENIMIENTO' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"oper_corrective_maintenance_id\"\r\n                          id=\"oper_corrective_maintenance_id-field\"\r\n                          [(ngModel)]=\"model.oper_corrective_maintenance\"\r\n                          [items]=\"operMaintenanceRepairsService.operMaintenanceRepairLists.OperCorrectiveMaintenance\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('OPERATIVIDAD MTTO CORRECTIVOS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('OPERATIVIDAD MTTO CORRECTIVOS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setOperCorrectiveMaintenanceId($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.oper_corrective_maintenance_id\">\r\n            <div class=\"error-message\" *ngIf=\"operMaintenanceRepairsForm.form.controls['oper_corrective_maintenance_id']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end oper_corrective_maintenance_id -->\r\n\r\n\r\n            <!-- name -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.name\"\r\n                            type=\"text\"\r\n                            name=\"name\"\r\n                            id=\"name-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n                    <div class=\"error-message\" *ngIf=\"operMaintenanceRepairsForm.form.controls['name']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end name -->\r\n\r\n\r\n            <!-- date -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'FECHA' | titlecase }}</ion-label>\r\n                <ion-datetime name=\"date\"\r\n                              id=\"date-field\"\r\n                              [doneText]=\"'Seleccionar'\"\r\n                              [cancelText]=\"'Cancelar'\"\r\n                              [(ngModel)]=\"model.date\"\r\n                              displayFormat=\"DD/MM/YYYY\"></ion-datetime>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.date\">\r\n                    <div class=\"error-message\" *ngIf=\"operMaintenanceRepairsForm.form.controls['date']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end date -->\r\n\r\n\r\n            <!-- time -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'HORA' | titlecase }}</ion-label>\r\n                <ion-datetime name=\"time\"\r\n                              id=\"time-field\"\r\n                              [doneText]=\"'Seleccionar'\"\r\n                              [cancelText]=\"'Cancelar'\"\r\n                              [(ngModel)]=\"model.time\"\r\n                              displayFormat=\"HH:mm\"></ion-datetime>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.time\">\r\n                    <div class=\"error-message\" *ngIf=\"operMaintenanceRepairsForm.form.controls['time']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end time -->\r\n\r\n\r\n            <!-- completed_by -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'REPORTADO POR' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.completed_by\"\r\n                            type=\"text\"\r\n                            name=\"completed_by\"\r\n                            id=\"completed_by-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.completed_by\">\r\n                    <div class=\"error-message\" *ngIf=\"operMaintenanceRepairsForm.form.controls['completed_by']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end completed_by -->\r\n\r\n\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-list/oper-maintenance-repairs-list.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-list/oper-maintenance-repairs-list.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'OPERATIVIDAD REPARACIONES' | titlecase}}\"\r\n                 primaryLink=\"oper-maintenance-repairs/create\"\r\n                 primaryText=\"Crear {{'OPERATIVIDAD REPARACIONES' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-searchbar showCancelButton=\"focus\"\r\n                       [cancelButtonText]=\"'Cancelar'\"\r\n                       [placeholder]=\"'Buscar ' + ('OPERATIVIDAD REPARACIONES' | lowercase )\"\r\n                       (ionCancel)=\"this.operMaintenanceRepairsService.searchValue = ''; operMaintenanceRepairsService.getOperMaintenanceRepairs()\"\r\n                       (keyup.enter)=\"operMaintenanceRepairsService.getOperMaintenanceRepairs()\"\r\n                       [(ngModel)]=\"operMaintenanceRepairsService.searchValue\"></ion-searchbar>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && operMaintenanceRepairsService.operMaintenanceRepairs?.length\">\r\n        <ion-card *ngFor=\"let operMaintenanceRepair of operMaintenanceRepairsService.operMaintenanceRepairs; let index = index\">\r\n            <ion-list>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operMaintenanceRepair?.name }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'FECHA' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operMaintenanceRepair?.date | dateFormat:'DD/MM/YYYY' }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'HORA' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operMaintenanceRepair?.time | dateFormat:'HH:mm' }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'REPORTADO POR' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operMaintenanceRepair?.completed_by }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'OPERATIVIDAD MTTO CORRECTIVOS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\"><a routerLink=\"/oper-corrective-maintenances/{{ operMaintenanceRepair?.oper_corrective_maintenance?.id }}/edit\">{{ operMaintenanceRepair?.oper_corrective_maintenance?.name }}</a></div>\r\n                    </ion-item>\r\n            </ion-list>\r\n            <ion-footer>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/oper-maintenance-repairs/' + operMaintenanceRepair?.id + '/edit'\">\r\n                            <ion-icon name=\"create-outline\"></ion-icon>\r\n                            <div>Editar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"operMaintenanceRepairsService.deleteOperMaintenanceRepair(operMaintenanceRepair?.id)\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            <div>Eliminar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-footer>\r\n        </ion-card>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && !operMaintenanceRepairsService.operMaintenanceRepairs?.length\">\r\n        <ion-item>\r\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label><h2>No se encontraron {{'OPERATIVIDAD REPARACIONES' | titlecase}}</h2></ion-label>\r\n            <ion-button [routerLink]=\"'/oper-maintenance-repairs/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\r\n                Crear {{'OPERATIVIDAD REPARACIONES' | titlecase}}\r\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"operMaintenanceRepairsService.meta\">\r\n        <ion-col class=\"ion-text-center\" size=\"12\">\r\n            <ion-button (click)=\"operMaintenanceRepairsService.getOperMaintenanceRepairs(operMaintenanceRepairsService.meta.current_page - 1)\"\r\n                        [disabled]=\"operMaintenanceRepairsService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{operMaintenanceRepairsService.meta.current_page}}\r\n                /{{operMaintenanceRepairsService.meta.last_page}} {{operMaintenanceRepairsService.meta.from}}-{{operMaintenanceRepairsService.meta.to}}\r\n                /{{operMaintenanceRepairsService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"operMaintenanceRepairsService.getOperMaintenanceRepairs(operMaintenanceRepairsService.meta.current_page + 1)\"\r\n                        [disabled]=\"operMaintenanceRepairsService.meta.current_page == operMaintenanceRepairsService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"OPERATIVIDAD REPARACIONES\"></app-main-header>\r\n\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/oper-maintenance-repairs/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'OPERATIVIDAD REPARACIONES'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/oper-maintenance-repairs/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'OPERATIVIDAD REPARACIONES' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-create/oper-maintenance-repairs-create.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs-create/oper-maintenance-repairs-create.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbWFpbnRlbmFuY2UtcmVwYWlycy9vcGVyLW1haW50ZW5hbmNlLXJlcGFpcnMtY3JlYXRlL29wZXItbWFpbnRlbmFuY2UtcmVwYWlycy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-create/oper-maintenance-repairs-create.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs-create/oper-maintenance-repairs-create.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: OperMaintenanceRepairsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMaintenanceRepairsCreateComponent", function() { return OperMaintenanceRepairsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_maintenance_repairs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-maintenance-repairs.service */ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let OperMaintenanceRepairsCreateComponent = class OperMaintenanceRepairsCreateComponent {
    constructor(operMaintenanceRepairsService, route, platform, splitPanel) {
        this.operMaintenanceRepairsService = operMaintenanceRepairsService;
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
        this.operMaintenanceRepairsService.operMaintenanceRepair.oper_corrective_maintenance_id = this.route.snapshot.params.mttoId;
        if (this.route.snapshot.params.mttoId) {
            for (let i = 0; i < this.operMaintenanceRepairsService.operMaintenanceRepairLists.OperCorrectiveMaintenance.length; i++) {
                if (this.operMaintenanceRepairsService.operMaintenanceRepairLists.OperCorrectiveMaintenance[i].id == this.route.snapshot.params.mttoId) {
                    console.log(this.operMaintenanceRepairsService.operMaintenanceRepairLists.OperCorrectiveMaintenance[i]);
                    this.operMaintenanceRepairsService.operMaintenanceRepair.oper_corrective_maintenance = this.operMaintenanceRepairsService.operMaintenanceRepairLists.OperCorrectiveMaintenance[i];
                    this.operMaintenanceRepairForm.model.oper_corrective_maintenance = this.operMaintenanceRepairsService.operMaintenanceRepairLists.OperCorrectiveMaintenance[i];
                    this.operMaintenanceRepairForm.model.oper_corrective_maintenance_id = this.operMaintenanceRepairsService.operMaintenanceRepair.oper_corrective_maintenance_id;
                }
            }
        }
        console.log(this.operMaintenanceRepairForm.model);
    }
    ngAfterViewInit() {
        this.operMaintenanceRepairForm.operMaintenanceRepairsForm.valueChanges.subscribe((data) => {
            this.operMaintenanceRepairsService.operMaintenanceRepairsFormValid.next(this.operMaintenanceRepairForm.operMaintenanceRepairsForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.operMaintenanceRepairsService.createOperMaintenanceRepair();
        this.operMaintenanceRepairsService.operMaintenanceRepair = {};
    }
};
OperMaintenanceRepairsCreateComponent.ctorParameters = () => [
    { type: _oper_maintenance_repairs_service__WEBPACK_IMPORTED_MODULE_2__["OperMaintenanceRepairsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
OperMaintenanceRepairsCreateComponent.propDecorators = {
    operMaintenanceRepairForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operMaintenanceRepairForm',] }]
};
OperMaintenanceRepairsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-maintenance-repairs-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-maintenance-repairs-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-create/oper-maintenance-repairs-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-maintenance-repairs-create.component.scss */ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-create/oper-maintenance-repairs-create.component.scss")).default]
    })
], OperMaintenanceRepairsCreateComponent);



/***/ }),

/***/ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-duplicate/oper-maintenance-repairs-duplicate.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs-duplicate/oper-maintenance-repairs-duplicate.component.scss ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbWFpbnRlbmFuY2UtcmVwYWlycy9vcGVyLW1haW50ZW5hbmNlLXJlcGFpcnMtZHVwbGljYXRlL29wZXItbWFpbnRlbmFuY2UtcmVwYWlycy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-duplicate/oper-maintenance-repairs-duplicate.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs-duplicate/oper-maintenance-repairs-duplicate.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: OperMaintenanceRepairsDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMaintenanceRepairsDuplicateComponent", function() { return OperMaintenanceRepairsDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OperMaintenanceRepairsDuplicateComponent = class OperMaintenanceRepairsDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
OperMaintenanceRepairsDuplicateComponent.ctorParameters = () => [];
OperMaintenanceRepairsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-maintenance-repairs-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-maintenance-repairs-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-duplicate/oper-maintenance-repairs-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-maintenance-repairs-duplicate.component.scss */ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-duplicate/oper-maintenance-repairs-duplicate.component.scss")).default]
    })
], OperMaintenanceRepairsDuplicateComponent);



/***/ }),

/***/ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbWFpbnRlbmFuY2UtcmVwYWlycy9vcGVyLW1haW50ZW5hbmNlLXJlcGFpcnMtZWRpdC9vcGVyLW1haW50ZW5hbmNlLXJlcGFpcnMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: OperMaintenanceRepairsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMaintenanceRepairsEditComponent", function() { return OperMaintenanceRepairsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_maintenance_repairs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-maintenance-repairs.service */ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let OperMaintenanceRepairsEditComponent = class OperMaintenanceRepairsEditComponent {
    constructor(operMaintenanceRepairsService, route, platform, splitPanel) {
        this.operMaintenanceRepairsService = operMaintenanceRepairsService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.operMaintenanceRepairsService.editOperMaintenanceRepair(this.id);
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    ngAfterViewInit() {
        this.operMaintenanceRepairForm.operMaintenanceRepairsForm.valueChanges.subscribe((data) => {
            this.operMaintenanceRepairsService.operMaintenanceRepairsFormValid.next(this.operMaintenanceRepairForm.operMaintenanceRepairsForm.valid);
        });
    }
};
OperMaintenanceRepairsEditComponent.ctorParameters = () => [
    { type: _oper_maintenance_repairs_service__WEBPACK_IMPORTED_MODULE_2__["OperMaintenanceRepairsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
OperMaintenanceRepairsEditComponent.propDecorators = {
    operMaintenanceRepairForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operMaintenanceRepairForm',] }]
};
OperMaintenanceRepairsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-maintenance-repairs-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-maintenance-repairs-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-maintenance-repairs-edit.component.scss */ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component.scss")).default]
    })
], OperMaintenanceRepairsEditComponent);



/***/ }),

/***/ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-form/oper-maintenance-repairs-form.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs-form/oper-maintenance-repairs-form.component.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* generated section */\n/* end generated section */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blci1tYWludGVuYW5jZS1yZXBhaXJzL29wZXItbWFpbnRlbmFuY2UtcmVwYWlycy1mb3JtL29wZXItbWFpbnRlbmFuY2UtcmVwYWlycy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFBO0FBRUEsMEJBQUEiLCJmaWxlIjoic3JjL2FwcC9vcGVyLW1haW50ZW5hbmNlLXJlcGFpcnMvb3Blci1tYWludGVuYW5jZS1yZXBhaXJzLWZvcm0vb3Blci1tYWludGVuYW5jZS1yZXBhaXJzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnZW5lcmF0ZWQgc2VjdGlvbiAqL1xyXG5cclxuLyogZW5kIGdlbmVyYXRlZCBzZWN0aW9uICovXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-form/oper-maintenance-repairs-form.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs-form/oper-maintenance-repairs-form.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: OperMaintenanceRepairsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMaintenanceRepairsFormComponent", function() { return OperMaintenanceRepairsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_maintenance_repairs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-maintenance-repairs.service */ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let OperMaintenanceRepairsFormComponent = class OperMaintenanceRepairsFormComponent {
    constructor(operMaintenanceRepairsService, route, toTitlecase) {
        this.operMaintenanceRepairsService = operMaintenanceRepairsService;
        this.route = route;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'oper_corrective_maintenance_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('operCorrectiveMaintenance - NAME') + ' es obligatorio.' },
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
            'completed_by': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('REPORTADO POR') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        console.log(this.route.snapshot.params);
        if (this.route.snapshot.params.mttId) {
            console.log(this.route.snapshot.params.mttId);
            this.operMaintenanceRepairsService.operMaintenanceRepair.oper_corrective_maintenance_id = this.route.snapshot.params.mttId;
        }
    }
    ngAfterViewInit() {
    }
    // set setOperCorrectiveMaintenanceId
    setOperCorrectiveMaintenanceId(event) {
        this.operMaintenanceRepairsService.operMaintenanceRepair.oper_corrective_maintenance_id = event.value ? event.value.id : null;
    }
};
OperMaintenanceRepairsFormComponent.ctorParameters = () => [
    { type: _oper_maintenance_repairs_service__WEBPACK_IMPORTED_MODULE_2__["OperMaintenanceRepairsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
OperMaintenanceRepairsFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    operMaintenanceRepairsForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operMaintenanceRepairsForm',] }]
};
OperMaintenanceRepairsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-maintenance-repairs-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-maintenance-repairs-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-form/oper-maintenance-repairs-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-maintenance-repairs-form.component.scss */ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-form/oper-maintenance-repairs-form.component.scss")).default]
    })
], OperMaintenanceRepairsFormComponent);



/***/ }),

/***/ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-list/oper-maintenance-repairs-list.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs-list/oper-maintenance-repairs-list.component.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbWFpbnRlbmFuY2UtcmVwYWlycy9vcGVyLW1haW50ZW5hbmNlLXJlcGFpcnMtbGlzdC9vcGVyLW1haW50ZW5hbmNlLXJlcGFpcnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-list/oper-maintenance-repairs-list.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs-list/oper-maintenance-repairs-list.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: OperMaintenanceRepairsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMaintenanceRepairsListComponent", function() { return OperMaintenanceRepairsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_maintenance_repairs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-maintenance-repairs.service */ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");







let OperMaintenanceRepairsListComponent = class OperMaintenanceRepairsListComponent {
    constructor(operMaintenanceRepairsService, api, loading, splitPanel) {
        this.operMaintenanceRepairsService = operMaintenanceRepairsService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
        this.operMaintenanceRepairsService.getOperMaintenanceRepairs();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
OperMaintenanceRepairsListComponent.ctorParameters = () => [
    { type: _oper_maintenance_repairs_service__WEBPACK_IMPORTED_MODULE_2__["OperMaintenanceRepairsService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] }
];
OperMaintenanceRepairsListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
OperMaintenanceRepairsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-maintenance-repairs-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-maintenance-repairs-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-list/oper-maintenance-repairs-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-maintenance-repairs-list.component.scss */ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-list/oper-maintenance-repairs-list.component.scss")).default]
    })
], OperMaintenanceRepairsListComponent);



/***/ }),

/***/ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: OperMaintenanceRepairsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMaintenanceRepairsPageRoutingModule", function() { return OperMaintenanceRepairsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _oper_maintenance_repairs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oper-maintenance-repairs.page */ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs.page.ts");
/* harmony import */ var _oper_maintenance_repairs_edit_oper_maintenance_repairs_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component */ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component.ts");
/* harmony import */ var _oper_maintenance_repairs_create_oper_maintenance_repairs_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oper-maintenance-repairs-create/oper-maintenance-repairs-create.component */ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-create/oper-maintenance-repairs-create.component.ts");
/* harmony import */ var _oper_maintenance_repairs_list_oper_maintenance_repairs_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oper-maintenance-repairs-list/oper-maintenance-repairs-list.component */ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-list/oper-maintenance-repairs-list.component.ts");







const routes = [
    // generated section
    {
        path: '',
        data: {
            title: 'OPERATIVIDAD REPARACIONES',
            roles: ['admin'],
        },
        component: _oper_maintenance_repairs_page__WEBPACK_IMPORTED_MODULE_3__["OperMaintenanceRepairsPage"]
    },
    {
        path: 'list',
        data: {
            title: 'OPERATIVIDAD REPARACIONES',
            roles: ['admin'],
        },
        component: _oper_maintenance_repairs_list_oper_maintenance_repairs_list_component__WEBPACK_IMPORTED_MODULE_6__["OperMaintenanceRepairsListComponent"]
    },
    {
        path: 'create',
        data: {
            title: 'OPERATIVIDAD REPARACIONES',
            roles: ['admin'],
        },
        component: _oper_maintenance_repairs_create_oper_maintenance_repairs_create_component__WEBPACK_IMPORTED_MODULE_5__["OperMaintenanceRepairsCreateComponent"]
    },
    {
        path: 'create/:mttoId',
        data: {
            title: 'OPERATIVIDAD REPARACIONES',
            roles: ['admin'],
        },
        component: _oper_maintenance_repairs_create_oper_maintenance_repairs_create_component__WEBPACK_IMPORTED_MODULE_5__["OperMaintenanceRepairsCreateComponent"]
    },
    {
        path: ':id/edit',
        data: {
            title: 'OPERATIVIDAD REPARACIONES',
            roles: ['admin'],
        },
        component: _oper_maintenance_repairs_edit_oper_maintenance_repairs_edit_component__WEBPACK_IMPORTED_MODULE_4__["OperMaintenanceRepairsEditComponent"]
    },
];
// end generated section
let OperMaintenanceRepairsPageRoutingModule = class OperMaintenanceRepairsPageRoutingModule {
};
OperMaintenanceRepairsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], OperMaintenanceRepairsPageRoutingModule);



/***/ }),

/***/ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs.module.ts ***!
  \*****************************************************************************/
/*! exports provided: OperMaintenanceRepairsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMaintenanceRepairsPageModule", function() { return OperMaintenanceRepairsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _oper_maintenance_repairs_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oper-maintenance-repairs-routing.module */ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-routing.module.ts");
/* harmony import */ var _oper_maintenance_repairs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./oper-maintenance-repairs.page */ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs.page.ts");
/* harmony import */ var _oper_maintenance_repairs_list_oper_maintenance_repairs_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./oper-maintenance-repairs-list/oper-maintenance-repairs-list.component */ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-list/oper-maintenance-repairs-list.component.ts");
/* harmony import */ var _oper_maintenance_repairs_create_oper_maintenance_repairs_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./oper-maintenance-repairs-create/oper-maintenance-repairs-create.component */ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-create/oper-maintenance-repairs-create.component.ts");
/* harmony import */ var _oper_maintenance_repairs_duplicate_oper_maintenance_repairs_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./oper-maintenance-repairs-duplicate/oper-maintenance-repairs-duplicate.component */ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-duplicate/oper-maintenance-repairs-duplicate.component.ts");
/* harmony import */ var _oper_maintenance_repairs_edit_oper_maintenance_repairs_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component */ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component.ts");
/* harmony import */ var _oper_maintenance_repairs_form_oper_maintenance_repairs_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./oper-maintenance-repairs-form/oper-maintenance-repairs-form.component */ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-form/oper-maintenance-repairs-form.component.ts");













let OperMaintenanceRepairsPageModule = class OperMaintenanceRepairsPageModule {
};
OperMaintenanceRepairsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            // imports generated section
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _oper_maintenance_repairs_routing_module__WEBPACK_IMPORTED_MODULE_6__["OperMaintenanceRepairsPageRoutingModule"]
            // end imports generated section
        ],
        declarations: [
            // declarations generated section
            _oper_maintenance_repairs_page__WEBPACK_IMPORTED_MODULE_7__["OperMaintenanceRepairsPage"],
            _oper_maintenance_repairs_list_oper_maintenance_repairs_list_component__WEBPACK_IMPORTED_MODULE_8__["OperMaintenanceRepairsListComponent"],
            _oper_maintenance_repairs_create_oper_maintenance_repairs_create_component__WEBPACK_IMPORTED_MODULE_9__["OperMaintenanceRepairsCreateComponent"],
            _oper_maintenance_repairs_duplicate_oper_maintenance_repairs_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["OperMaintenanceRepairsDuplicateComponent"],
            _oper_maintenance_repairs_edit_oper_maintenance_repairs_edit_component__WEBPACK_IMPORTED_MODULE_11__["OperMaintenanceRepairsEditComponent"],
            _oper_maintenance_repairs_form_oper_maintenance_repairs_form_component__WEBPACK_IMPORTED_MODULE_12__["OperMaintenanceRepairsFormComponent"],
        ]
    })
], OperMaintenanceRepairsPageModule);



/***/ }),

/***/ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbWFpbnRlbmFuY2UtcmVwYWlycy9vcGVyLW1haW50ZW5hbmNlLXJlcGFpcnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs.page.ts ***!
  \***************************************************************************/
/*! exports provided: OperMaintenanceRepairsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMaintenanceRepairsPage", function() { return OperMaintenanceRepairsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");



let OperMaintenanceRepairsPage = class OperMaintenanceRepairsPage {
    constructor(splitPanel) {
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
};
OperMaintenanceRepairsPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] }
];
OperMaintenanceRepairsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-maintenance-repairs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-maintenance-repairs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-maintenance-repairs.page.scss */ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs.page.scss")).default]
    })
], OperMaintenanceRepairsPage);



/***/ }),

/***/ "./src/app/oper-maintenance-repairs/oper-maintenance-repairs.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs.service.ts ***!
  \******************************************************************************/
/*! exports provided: OperMaintenanceRepairsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMaintenanceRepairsService", function() { return OperMaintenanceRepairsService; });
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









let OperMaintenanceRepairsService = class OperMaintenanceRepairsService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.operMaintenanceRepairsUrl = 'oper-maintenance-repairs';
        this.operMaintenanceRepairsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.operMaintenanceRepairs = [];
        this.operMaintenanceRepair = {};
        this.operMaintenanceRepairLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    // generated section
    getOperMaintenanceRepairs(page = this.page, perPage = this.perPage) {
        this.api.get(this.operMaintenanceRepairsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.operMaintenanceRepairs = res.data;
            this.operMaintenanceRepairLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editOperMaintenanceRepair(id) {
        this.api.get(this.operMaintenanceRepairsUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.operMaintenanceRepair = res.data.model;
            this.operMaintenanceRepairLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateOperMaintenanceRepair() {
        this.api.put(this.operMaintenanceRepairsUrl + '/' + this.operMaintenanceRepair.id, {
            model: this.operMaintenanceRepair,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getOperMaintenanceRepairs(1);
        });
    }
    createOperMaintenanceRepair() {
        this.api.get(this.operMaintenanceRepairsUrl + '/create')
            .subscribe((res) => {
            this.operMaintenanceRepair = {};
            this.operMaintenanceRepair.time = moment__WEBPACK_IMPORTED_MODULE_8__().format('YYYY-MM-DD HH:mm');
            this.operMaintenanceRepair.date = moment__WEBPACK_IMPORTED_MODULE_8__().format('YYYY-MM-DD HH:mm');
            this.operMaintenanceRepairLists = res.lists;
        });
    }
    storeOperMaintenanceRepair() {
        this.api.post(this.operMaintenanceRepairsUrl, {
            model: this.operMaintenanceRepair,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getOperMaintenanceRepairs(1);
        });
    }
    deleteOperMaintenanceRepair(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.operMaintenanceRepairsUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getOperMaintenanceRepairs(1);
                });
            }
            else {
                return;
            }
        });
    }
};
OperMaintenanceRepairsService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
OperMaintenanceRepairsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OperMaintenanceRepairsService);



/***/ })

}]);
//# sourceMappingURL=oper-maintenance-repairs-oper-maintenance-repairs-module-es2015.js.map