(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oper-corrective-maintenances-oper-corrective-maintenances-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-create/oper-corrective-maintenances-create.component.html":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-create/oper-corrective-maintenances-create.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/oper-corrective-maintenances'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"operCorrectiveMaintenancesService.storeOperCorrectiveMaintenance()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!operCorrectiveMaintenancesService.operCorrectiveMaintenancesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'OPERATIVIDAD MTTO CORRECTIVOS' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-oper-corrective-maintenances-form #operCorrectiveMaintenanceForm [model]=\"operCorrectiveMaintenancesService.operCorrectiveMaintenance\"></app-oper-corrective-maintenances-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-duplicate/oper-corrective-maintenances-duplicate.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-duplicate/oper-corrective-maintenances-duplicate.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  OperCorrectiveMaintenances duplicate works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/oper-corrective-maintenances'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"operCorrectiveMaintenancesService.updateOperCorrectiveMaintenance()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!operCorrectiveMaintenancesService.operCorrectiveMaintenancesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'OPERATIVIDAD MTTO CORRECTIVOS' | titlecase}}: {{ operCorrectiveMaintenancesService.operCorrectiveMaintenance?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-oper-corrective-maintenances-form #operCorrectiveMaintenanceForm [model]=\"operCorrectiveMaintenancesService.operCorrectiveMaintenance\"></app-oper-corrective-maintenances-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-form/oper-corrective-maintenances-form.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-form/oper-corrective-maintenances-form.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #operCorrectiveMaintenancesForm=\"ngForm\" novalidate autocomplete=\"off\">\r\n\r\n\r\n    <!-- oper_reason_id -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'MOTIVO' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"oper_reason_id\"\r\n                          id=\"oper_reason_id-field\"\r\n                          [required]=\"true\"\r\n                          [(ngModel)]=\"model.oper_reason\"\r\n                          [items]=\"operCorrectiveMaintenancesService.operCorrectiveMaintenanceLists.OperReason\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('OPERATIVIDAD MOTIVOS MTTO CORRECTIVO' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('OPERATIVIDAD MOTIVOS MTTO CORRECTIVO' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setOperReasonId($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.oper_reason_id\">\r\n            <div class=\"error-message\" *ngIf=\"operCorrectiveMaintenancesForm.form.controls['oper_reason_id']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end oper_reason_id -->\r\n\r\n\r\n    <!-- hous_unit_area_id -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'AREA' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"hous_unit_area_id\"\r\n                          id=\"hous_unit_area_id-field\"\r\n                          [required]=\"true\"\r\n                          [(ngModel)]=\"model.hous_unit_area\"\r\n                          [items]=\"operCorrectiveMaintenancesService.operCorrectiveMaintenanceLists.HousUnitArea\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('UNIDADES HABITACIONALES AREAS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('UNIDADES HABITACIONALES AREAS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setHousUnitAreaId($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.hous_unit_area_id\">\r\n            <div class=\"error-message\" *ngIf=\"operCorrectiveMaintenancesForm.form.controls['hous_unit_area_id']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end hous_unit_area_id -->\r\n\r\n\r\n    <!-- oper_item_ids -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'ITEMS' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"oper_item_ids\"\r\n                          id=\"oper_item_ids-field\"\r\n                          [(ngModel)]=\"model.oper_items\"\r\n                          [items]=\"operCorrectiveMaintenancesService.operCorrectiveMaintenanceLists.OperItem\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('OPERATIVIDAD ITEMS MTTO CORRECTIVO' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('OPERATIVIDAD ITEMS MTTO CORRECTIVO' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setOperItemIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.oper_item_ids\">\r\n            <div class=\"error-message\" *ngIf=\"operCorrectiveMaintenancesForm.form.controls['oper_item_ids']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end oper_item_ids -->\r\n\r\n\r\n    <!-- oper_maintenance_repair_ids -->\r\n    <!--<ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'OPERATIVIDAD REPARACIONES' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"oper_maintenance_repair_ids\"\r\n                          id=\"oper_maintenance_repair_ids-field\"\r\n                          [(ngModel)]=\"model.oper_maintenance_repairs\"\r\n                          [items]=\"operCorrectiveMaintenancesService.operCorrectiveMaintenanceLists.OperMaintenanceRepair\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('OPERATIVIDAD REPARACIONES' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('OPERATIVIDAD REPARACIONES' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setOperMaintenanceRepairIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.oper_maintenance_repair_ids\">\r\n            <div class=\"error-message\" *ngIf=\"operCorrectiveMaintenancesForm.form.controls['oper_maintenance_repair_ids']?.hasError(validation.type)\">\r\n            {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>-->\r\n    <!-- end oper_maintenance_repair_ids -->\r\n\r\n\r\n            <!-- name -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.name\"\r\n                            type=\"text\"\r\n                            name=\"name\"\r\n                            id=\"name-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n                    <div class=\"error-message\" *ngIf=\"operCorrectiveMaintenancesForm.form.controls['name']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end name -->\r\n\r\n\r\n            <!-- detail -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'DETALLE' | titlecase }}</ion-label>\r\n                <ion-textarea [(ngModel)]=\"model.detail\"\r\n                              name=\"detail\"\r\n                              id=\"detail-field\"\r\n                              rows=\"6\"\r\n                              placeholder=\"\"></ion-textarea>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.detail\">\r\n                    <div class=\"error-message\" *ngIf=\"operCorrectiveMaintenancesForm.form.controls['detail']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end detail -->\r\n\r\n\r\n            <!-- date -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'FECHA' | titlecase }}</ion-label>\r\n                <ion-datetime name=\"date\"\r\n                              id=\"date-field\"\r\n                              [doneText]=\"'Seleccionar'\"\r\n                              [cancelText]=\"'Cancelar'\"\r\n                              [(ngModel)]=\"model.date\"\r\n                              displayFormat=\"DD/MM/YYYY\"></ion-datetime>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.date\">\r\n                    <div class=\"error-message\" *ngIf=\"operCorrectiveMaintenancesForm.form.controls['date']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end date -->\r\n\r\n\r\n            <!-- time -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'HORA' | titlecase }}</ion-label>\r\n                <ion-datetime name=\"time\"\r\n                              id=\"time-field\"\r\n                              [doneText]=\"'Seleccionar'\"\r\n                              [cancelText]=\"'Cancelar'\"\r\n                              [(ngModel)]=\"model.time\"\r\n                              displayFormat=\"HH:mm\"></ion-datetime>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.time\">\r\n                    <div class=\"error-message\" *ngIf=\"operCorrectiveMaintenancesForm.form.controls['time']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end time -->\r\n\r\n\r\n            <!-- reported_by -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'REPORTADO POR' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.reported_by\"\r\n                            type=\"text\"\r\n                            name=\"reported_by\"\r\n                            id=\"reported_by-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.reported_by\">\r\n                    <div class=\"error-message\" *ngIf=\"operCorrectiveMaintenancesForm.form.controls['reported_by']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end reported_by -->\r\n\r\n\r\n            <!-- status -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'ESTADO' | titlecase }}</ion-label>\r\n                <ion-select [(ngModel)]=\"model.status\"\r\n                            name=\"status\"\r\n                            id=\"status-field\"\r\n                            okText=\"Seleccionar\"\r\n                            cancelText=\"Cancelar\">\r\n                    <ion-select-option value=\"\">{{ 'Ninguno' | titlecase }}</ion-select-option>\r\n                    <ion-select-option value=\"pending\">{{ 'Pendiente' | titlecase }}</ion-select-option>\r\n                    <ion-select-option value=\"resolved\">{{ 'Resuelto' | titlecase }}</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.status\">\r\n                <div class=\"error-message\" *ngIf=\"operCorrectiveMaintenancesForm.form.controls['status']?.hasError(validation.type)\">\r\n                    {{ validation.message }}\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n        <!-- end status -->\r\n\r\n\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-list/oper-corrective-maintenances-list.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-list/oper-corrective-maintenances-list.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'OPERATIVIDAD MTTO CORRECTIVOS' | titlecase}}\"\r\n                 primaryLink=\"oper-corrective-maintenances/create\"\r\n                 primaryText=\"Crear {{'OPERATIVIDAD MTTO CORRECTIVOS' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-grid>\r\n        <ion-row class=\"ion-align-items-start\">\r\n            <ion-col size=\"12\">\r\n                <ion-searchbar showCancelButton=\"focus\"\r\n                               [cancelButtonText]=\"'Cancelar'\"\r\n                               [placeholder]=\"'Buscar ' + ('OPERATIVIDAD MTTO CORRECTIVOS' | lowercase )\"\r\n                               (ionCancel)=\"this.operCorrectiveMaintenancesService.searchValue = ''; operCorrectiveMaintenancesService.getOperCorrectiveMaintenances()\"\r\n                               (keyup.enter)=\"operCorrectiveMaintenancesService.getOperCorrectiveMaintenances()\"\r\n                               [(ngModel)]=\"operCorrectiveMaintenancesService.searchValue\"></ion-searchbar>\r\n            </ion-col>\r\n            <ion-col [size]=\"6\"\r\n                     [offset]=\"3\">\r\n                <ion-segment (ionChange)=\"segmentChanged($event)\">\r\n                    <ion-segment-button value=\"pending\">\r\n                        <ion-label>Pendientes</ion-label>\r\n                    </ion-segment-button>\r\n                    <ion-segment-button value=\"resolved\">\r\n                        <ion-label>Resueltos</ion-label>\r\n                    </ion-segment-button>\r\n                </ion-segment>\r\n            </ion-col>\r\n            <ion-col size=\"12\"\r\n                     class=\"ion-text-center\"\r\n                     *ngIf=\"resolved\">\r\n                <ion-button size=\"sm\"\r\n                            (click)=\"openCalendar()\">Filtrar por fecha de solución\r\n                </ion-button>\r\n            </ion-col>\r\n            <ion-col size=\"12\">\r\n                <ng-container *ngIf=\"!(loading.loading | async) && operCorrectiveMaintenancesService.operCorrectiveMaintenances?.length\">\r\n                    <ion-card *ngFor=\"let operCorrectiveMaintenance of operCorrectiveMaintenancesService.operCorrectiveMaintenances; let index = index\">\r\n                        <ion-list>\r\n                            <ion-item class=\"item-transparent\">\r\n                                <ion-label position=\"fixed\">\r\n                                    <b>{{ 'NOMBRE' | titlecase }}</b>\r\n                                </ion-label>\r\n                                <div class=\"wrap-text\">{{ operCorrectiveMaintenance?.name }}</div>\r\n                            </ion-item>\r\n                            <ion-item class=\"item-transparent\">\r\n                                <ion-label position=\"fixed\">\r\n                                    <b>{{ 'DETALLE' | titlecase }}</b>\r\n                                </ion-label>\r\n                                <div class=\"wrap-text\">{{ operCorrectiveMaintenance?.detail }}</div>\r\n                            </ion-item>\r\n                            <ion-item class=\"item-transparent\">\r\n                                <ion-label position=\"fixed\">\r\n                                    <b>{{ 'FECHA' | titlecase }}</b>\r\n                                </ion-label>\r\n                                <div class=\"wrap-text\">{{ operCorrectiveMaintenance?.date | dateFormat:'DD/MM/YYYY' }}</div>\r\n                            </ion-item>\r\n                            <ion-item class=\"item-transparent\">\r\n                                <ion-label position=\"fixed\">\r\n                                    <b>{{ 'HORA' | titlecase }}</b>\r\n                                </ion-label>\r\n                                <div class=\"wrap-text\">{{ operCorrectiveMaintenance?.time | dateFormat:'HH:mm' }}</div>\r\n                            </ion-item>\r\n                            <ion-item class=\"item-transparent\">\r\n                                <ion-label position=\"fixed\">\r\n                                    <b>{{ 'REPORTADO POR' | titlecase }}</b>\r\n                                </ion-label>\r\n                                <div class=\"wrap-text\">{{ operCorrectiveMaintenance?.reported_by }}</div>\r\n                            </ion-item>\r\n                            <ion-item class=\"item-transparent\">\r\n                                <ion-label position=\"fixed\">\r\n                                    <b>{{ 'ESTADO' | titlecase }}</b>\r\n                                </ion-label>\r\n                                <div class=\"wrap-text\">\r\n                                    {{ operCorrectiveMaintenance?.status | status }}\r\n                                    <ng-container *ngIf=\"operCorrectiveMaintenance?.status == 'resolved'\">\r\n                                        {{operCorrectiveMaintenance?.oper_maintenance_repairs[0]?.date | dateFormat:'DD/MM/YYYY'}}\r\n                                    </ng-container>\r\n                                </div>\r\n                            </ion-item>\r\n                            <ion-item class=\"item-transparent\">\r\n                                <ion-label position=\"fixed\">\r\n                                    <b>{{ 'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO' | titlecase }}</b>\r\n                                </ion-label>\r\n                                <div class=\"wrap-text\">\r\n                                    <a routerLink=\"/oper-reasons/{{ operCorrectiveMaintenance?.oper_reason?.id }}/edit\">{{ operCorrectiveMaintenance?.oper_reason?.name }}</a>\r\n                                </div>\r\n                            </ion-item>\r\n                            <ion-item class=\"item-transparent\">\r\n                                <ion-label position=\"fixed\">\r\n                                    <b>{{ 'UNIDADES HABITACIONALES AREAS' | titlecase }}</b>\r\n                                </ion-label>\r\n                                <div class=\"wrap-text\">\r\n                                    <a routerLink=\"/hous-unit-areas/{{ operCorrectiveMaintenance?.hous_unit_area?.id }}/edit\">{{ operCorrectiveMaintenance?.hous_unit_area?.name }}</a>\r\n                                </div>\r\n                            </ion-item>\r\n                            <ion-item class=\"item-transparent\">\r\n                                <ion-label position=\"fixed\">\r\n                                    <b>{{ 'OPERATIVIDAD ITEMS MTTO CORRECTIVO' | titlecase }}</b>\r\n                                </ion-label>\r\n                                <div class=\"wrap-text\">\r\n                                    <ng-container *ngIf=\"operCorrectiveMaintenance?.oper_items?.length\">\r\n                                        <ng-container *ngFor=\"let operItem of operCorrectiveMaintenance?.oper_items; let last = last\">\r\n                                            <a routerLink=\"/oper-items/{{ operItem?.id }}/edit\">{{ operItem?.name }}</a>\r\n                                            <span *ngIf=\"!last\">, </span>\r\n                                        </ng-container>\r\n                                    </ng-container>\r\n                                </div>\r\n                            </ion-item>\r\n                            <ion-item class=\"item-transparent\">\r\n                                <ion-label position=\"fixed\">\r\n                                    <b>{{ 'OPERATIVIDAD REPARACIONES' | titlecase }}</b>\r\n                                </ion-label>\r\n                                <div class=\"wrap-text\">\r\n                                    <ng-container *ngIf=\"operCorrectiveMaintenance?.oper_maintenance_repairs?.length\">\r\n                                        <ng-container *ngFor=\"let operMaintenanceRepair of operCorrectiveMaintenance?.oper_maintenance_repairs; let last = last\">\r\n                                            <a routerLink=\"/oper-maintenance-repairs/{{ operMaintenanceRepair?.id }}/edit\">{{ operMaintenanceRepair?.name }}</a>\r\n                                            <span *ngIf=\"!last\">, </span>\r\n                                        </ng-container>\r\n                                    </ng-container>\r\n                                </div>\r\n                            </ion-item>\r\n                        </ion-list>\r\n                        <ion-footer>\r\n                            <ion-row>\r\n                                <ion-col class=\"ion-text-center\">\r\n                                    <ion-button color=\"success\"\r\n                                                size=\"small\"\r\n                                                fill=\"clear\"\r\n                                                [routerLink]=\"'/oper-corrective-maintenances/' + operCorrectiveMaintenance?.id + '/edit'\">\r\n                                        <ion-icon name=\"create-outline\"></ion-icon>\r\n                                        <div>Editar</div>\r\n                                    </ion-button>\r\n                                </ion-col>\r\n                                <ion-col class=\"ion-text-center\">\r\n                                    <ion-button color=\"danger\"\r\n                                                size=\"small\"\r\n                                                fill=\"clear\"\r\n                                                (click)=\"operCorrectiveMaintenancesService.deleteOperCorrectiveMaintenance(operCorrectiveMaintenance?.id)\">\r\n                                        <ion-icon name=\"trash-outline\"></ion-icon>\r\n                                        <div>Eliminar</div>\r\n                                    </ion-button>\r\n                                </ion-col>\r\n                                <ion-col class=\"ion-text-center\"\r\n                                         *ngIf=\"operCorrectiveMaintenance.status == 'pending'\">\r\n                                    <ion-button size=\"small\"\r\n                                                fill=\"clear\"\r\n                                                [routerLink]=\"'/oper-maintenance-repairs/create/' + operCorrectiveMaintenance.id\">\r\n                                        <ion-icon name=\"checkmark-done-outline\"></ion-icon>\r\n                                        <div>Solucionar</div>\r\n                                    </ion-button>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                        </ion-footer>\r\n                    </ion-card>\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"!(loading.loading | async) && !operCorrectiveMaintenancesService.operCorrectiveMaintenances?.length\">\r\n                    <ion-item>\r\n                        <ion-icon class=\"text-warning\"\r\n                                  name=\"warning-outline\"\r\n                                  slot=\"start\"></ion-icon>\r\n                        <ion-label><h2>No se encontraron {{'OPERATIVIDAD MTTO CORRECTIVOS' | titlecase}}</h2>\r\n                        </ion-label>\r\n                        <ion-button [routerLink]=\"'/oper-corrective-maintenances/create'\"\r\n                                    fill=\"outline\"\r\n                                    color=\"success\"\r\n                                    slot=\"end\">\r\n                            Crear {{'OPERATIVIDAD MTTO CORRECTIVOS' | titlecase}}\r\n                            <ion-icon name=\"add-circle-outline\"\r\n                                      slot=\"end\"></ion-icon>\r\n                        </ion-button>\r\n                    </ion-item>\r\n                </ng-container>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"operCorrectiveMaintenancesService.meta\">\r\n        <ion-col class=\"ion-text-center\"\r\n                 size=\"12\">\r\n            <ion-button (click)=\"operCorrectiveMaintenancesService.getOperCorrectiveMaintenances(operCorrectiveMaintenancesService.meta.current_page - 1)\"\r\n                        [disabled]=\"operCorrectiveMaintenancesService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\"\r\n                          name=\"play-outline\"\r\n                          style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\"\r\n                        [disabled]=\"true\"> Pag: {{operCorrectiveMaintenancesService.meta.current_page}}\r\n                                           /{{operCorrectiveMaintenancesService.meta.last_page}} {{operCorrectiveMaintenancesService.meta.from}}\r\n                                           -{{operCorrectiveMaintenancesService.meta.to}}\r\n                                           /{{operCorrectiveMaintenancesService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"operCorrectiveMaintenancesService.getOperCorrectiveMaintenances(operCorrectiveMaintenancesService.meta.current_page + 1)\"\r\n                        [disabled]=\"operCorrectiveMaintenancesService.meta.current_page == operCorrectiveMaintenancesService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\"\r\n                          name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"OPERATIVIDAD MTTO CORRECTIVOS\"></app-main-header>\r\n\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/oper-corrective-maintenances/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'OPERATIVIDAD MTTO CORRECTIVOS'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/oper-corrective-maintenances/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'OPERATIVIDAD MTTO CORRECTIVOS' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-create/oper-corrective-maintenances-create.component.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances-create/oper-corrective-maintenances-create.component.scss ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItY29ycmVjdGl2ZS1tYWludGVuYW5jZXMvb3Blci1jb3JyZWN0aXZlLW1haW50ZW5hbmNlcy1jcmVhdGUvb3Blci1jb3JyZWN0aXZlLW1haW50ZW5hbmNlcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-create/oper-corrective-maintenances-create.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances-create/oper-corrective-maintenances-create.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: OperCorrectiveMaintenancesCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperCorrectiveMaintenancesCreateComponent", function() { return OperCorrectiveMaintenancesCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_corrective_maintenances_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-corrective-maintenances.service */ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let OperCorrectiveMaintenancesCreateComponent = class OperCorrectiveMaintenancesCreateComponent {
    constructor(operCorrectiveMaintenancesService, route, platform, splitPanel) {
        this.operCorrectiveMaintenancesService = operCorrectiveMaintenancesService;
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
        this.operCorrectiveMaintenancesService.createOperCorrectiveMaintenance();
    }
    ngAfterViewInit() {
        this.operCorrectiveMaintenanceForm.operCorrectiveMaintenancesForm.valueChanges.subscribe((data) => {
            this.operCorrectiveMaintenancesService.operCorrectiveMaintenancesFormValid.next(this.operCorrectiveMaintenanceForm.operCorrectiveMaintenancesForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.operCorrectiveMaintenancesService.createOperCorrectiveMaintenance();
        this.operCorrectiveMaintenancesService.operCorrectiveMaintenance = {};
    }
};
OperCorrectiveMaintenancesCreateComponent.ctorParameters = () => [
    { type: _oper_corrective_maintenances_service__WEBPACK_IMPORTED_MODULE_2__["OperCorrectiveMaintenancesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
OperCorrectiveMaintenancesCreateComponent.propDecorators = {
    operCorrectiveMaintenanceForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operCorrectiveMaintenanceForm',] }]
};
OperCorrectiveMaintenancesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-corrective-maintenances-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-corrective-maintenances-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-create/oper-corrective-maintenances-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-corrective-maintenances-create.component.scss */ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-create/oper-corrective-maintenances-create.component.scss")).default]
    })
], OperCorrectiveMaintenancesCreateComponent);



/***/ }),

/***/ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-duplicate/oper-corrective-maintenances-duplicate.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances-duplicate/oper-corrective-maintenances-duplicate.component.scss ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItY29ycmVjdGl2ZS1tYWludGVuYW5jZXMvb3Blci1jb3JyZWN0aXZlLW1haW50ZW5hbmNlcy1kdXBsaWNhdGUvb3Blci1jb3JyZWN0aXZlLW1haW50ZW5hbmNlcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-duplicate/oper-corrective-maintenances-duplicate.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances-duplicate/oper-corrective-maintenances-duplicate.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: OperCorrectiveMaintenancesDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperCorrectiveMaintenancesDuplicateComponent", function() { return OperCorrectiveMaintenancesDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OperCorrectiveMaintenancesDuplicateComponent = class OperCorrectiveMaintenancesDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
OperCorrectiveMaintenancesDuplicateComponent.ctorParameters = () => [];
OperCorrectiveMaintenancesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-corrective-maintenances-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-corrective-maintenances-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-duplicate/oper-corrective-maintenances-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-corrective-maintenances-duplicate.component.scss */ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-duplicate/oper-corrective-maintenances-duplicate.component.scss")).default]
    })
], OperCorrectiveMaintenancesDuplicateComponent);



/***/ }),

/***/ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component.scss ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItY29ycmVjdGl2ZS1tYWludGVuYW5jZXMvb3Blci1jb3JyZWN0aXZlLW1haW50ZW5hbmNlcy1lZGl0L29wZXItY29ycmVjdGl2ZS1tYWludGVuYW5jZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: OperCorrectiveMaintenancesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperCorrectiveMaintenancesEditComponent", function() { return OperCorrectiveMaintenancesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_corrective_maintenances_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-corrective-maintenances.service */ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let OperCorrectiveMaintenancesEditComponent = class OperCorrectiveMaintenancesEditComponent {
    constructor(operCorrectiveMaintenancesService, route, platform, splitPanel) {
        this.operCorrectiveMaintenancesService = operCorrectiveMaintenancesService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.operCorrectiveMaintenancesService.editOperCorrectiveMaintenance(this.id);
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    ngAfterViewInit() {
        this.operCorrectiveMaintenanceForm.operCorrectiveMaintenancesForm.valueChanges.subscribe((data) => {
            this.operCorrectiveMaintenancesService.operCorrectiveMaintenancesFormValid.next(this.operCorrectiveMaintenanceForm.operCorrectiveMaintenancesForm.valid);
        });
    }
};
OperCorrectiveMaintenancesEditComponent.ctorParameters = () => [
    { type: _oper_corrective_maintenances_service__WEBPACK_IMPORTED_MODULE_2__["OperCorrectiveMaintenancesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
OperCorrectiveMaintenancesEditComponent.propDecorators = {
    operCorrectiveMaintenanceForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operCorrectiveMaintenanceForm',] }]
};
OperCorrectiveMaintenancesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-corrective-maintenances-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-corrective-maintenances-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-corrective-maintenances-edit.component.scss */ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component.scss")).default]
    })
], OperCorrectiveMaintenancesEditComponent);



/***/ }),

/***/ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-form/oper-corrective-maintenances-form.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances-form/oper-corrective-maintenances-form.component.scss ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* generated section */\n/* end generated section */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blci1jb3JyZWN0aXZlLW1haW50ZW5hbmNlcy9vcGVyLWNvcnJlY3RpdmUtbWFpbnRlbmFuY2VzLWZvcm0vb3Blci1jb3JyZWN0aXZlLW1haW50ZW5hbmNlcy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFBO0FBRUEsMEJBQUEiLCJmaWxlIjoic3JjL2FwcC9vcGVyLWNvcnJlY3RpdmUtbWFpbnRlbmFuY2VzL29wZXItY29ycmVjdGl2ZS1tYWludGVuYW5jZXMtZm9ybS9vcGVyLWNvcnJlY3RpdmUtbWFpbnRlbmFuY2VzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnZW5lcmF0ZWQgc2VjdGlvbiAqL1xyXG5cclxuLyogZW5kIGdlbmVyYXRlZCBzZWN0aW9uICovXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-form/oper-corrective-maintenances-form.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances-form/oper-corrective-maintenances-form.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: OperCorrectiveMaintenancesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperCorrectiveMaintenancesFormComponent", function() { return OperCorrectiveMaintenancesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_corrective_maintenances_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-corrective-maintenances.service */ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let OperCorrectiveMaintenancesFormComponent = class OperCorrectiveMaintenancesFormComponent {
    constructor(operCorrectiveMaintenancesService, toTitlecase) {
        this.operCorrectiveMaintenancesService = operCorrectiveMaintenancesService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'oper_reason_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('MOTIVO') + ' es obligatorio.' },
            ],
            'hous_unit_area_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('ÁREA') + ' es obligatorio.' },
            ],
            'detail': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('DETALLE') + ' es obligatorio.' },
            ],
            'date': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('FECHA') + ' es obligatorio.' },
            ],
            'time': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('HORA') + ' es obligatorio.' },
            ],
            'reported_by': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('REPORTADO POR') + ' es obligatorio.' },
            ],
            'status': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('ESTADO') + ' es obligatorio.' },
            ],
            'oper_item_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('OPERATIVIDAD ITEMS MTTO CORRECTIVO') + ' es obligatorio.' },
            ],
            'oper_maintenance_repair_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('OPERATIVIDAD REPARACIONES') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setOperReasonId
    setOperReasonId(event) {
        this.operCorrectiveMaintenancesService.operCorrectiveMaintenance.oper_reason_id = event.value ? event.value.id : null;
    }
    // end setOperReasonId
    // set setHousUnitAreaId
    setHousUnitAreaId(event) {
        this.operCorrectiveMaintenancesService.operCorrectiveMaintenance.hous_unit_area_id = event.value ? event.value.id : null;
    }
    // end setHousUnitAreaId
    // set setOperItemIds
    setOperItemIds(event) {
        let operItemIds = null;
        if (event.value.length) {
            operItemIds = [];
            for (let i = 0; i < event.value.length; i++) {
                operItemIds.push(event.value[i].id);
            }
        }
        this.operCorrectiveMaintenancesService.operCorrectiveMaintenance.oper_item_ids = operItemIds;
    }
    // end setOperItemIds
    // set setOperMaintenanceRepairIds
    setOperMaintenanceRepairIds(event) {
        let operMaintenanceRepairIds = null;
        if (event.value.length) {
            operMaintenanceRepairIds = [];
            for (let i = 0; i < event.value.length; i++) {
                operMaintenanceRepairIds.push(event.value[i].id);
            }
        }
        this.operCorrectiveMaintenancesService.operCorrectiveMaintenance.oper_maintenance_repair_ids = operMaintenanceRepairIds;
    }
};
OperCorrectiveMaintenancesFormComponent.ctorParameters = () => [
    { type: _oper_corrective_maintenances_service__WEBPACK_IMPORTED_MODULE_2__["OperCorrectiveMaintenancesService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
OperCorrectiveMaintenancesFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    operCorrectiveMaintenancesForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operCorrectiveMaintenancesForm',] }]
};
OperCorrectiveMaintenancesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-corrective-maintenances-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-corrective-maintenances-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-form/oper-corrective-maintenances-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-corrective-maintenances-form.component.scss */ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-form/oper-corrective-maintenances-form.component.scss")).default]
    })
], OperCorrectiveMaintenancesFormComponent);



/***/ }),

/***/ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-list/oper-corrective-maintenances-list.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances-list/oper-corrective-maintenances-list.component.scss ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItY29ycmVjdGl2ZS1tYWludGVuYW5jZXMvb3Blci1jb3JyZWN0aXZlLW1haW50ZW5hbmNlcy1saXN0L29wZXItY29ycmVjdGl2ZS1tYWludGVuYW5jZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-list/oper-corrective-maintenances-list.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances-list/oper-corrective-maintenances-list.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: OperCorrectiveMaintenancesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperCorrectiveMaintenancesListComponent", function() { return OperCorrectiveMaintenancesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_corrective_maintenances_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-corrective-maintenances.service */ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/__ivy_ngcc__/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_7__);









let OperCorrectiveMaintenancesListComponent = class OperCorrectiveMaintenancesListComponent {
    constructor(operCorrectiveMaintenancesService, api, loading, splitPanel, modal) {
        this.operCorrectiveMaintenancesService = operCorrectiveMaintenancesService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
        this.modal = modal;
        this.resolved = null;
        this.optionsRange = {
            pickMode: 'range'
        };
    }
    ngOnInit() {
        // this.operCorrectiveMaintenancesService.getOperCorrectiveMaintenances();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
        this.operCorrectiveMaintenancesService.getOperCorrectiveMaintenances();
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
    segmentChanged(event) {
        console.log(event.detail.value);
        if (event.detail.value == 'resolved') {
            this.resolved = true;
        }
        else {
            this.resolved = false;
        }
        this.operCorrectiveMaintenancesService.getOperCorrectiveMaintenances(this.operCorrectiveMaintenancesService.page, this.operCorrectiveMaintenancesService.perPage, event.detail.value);
    }
    openCalendar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = {
                title: 'Filtro por fechas',
                pickMode: 'range',
                closeLabel: 'Cancelar',
                doneLabel: 'OK',
                clearLabel: 'Limpiar',
                weekdays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
                monthFormat: 'MM YYYY',
                canBackwardsSelected: true
            };
            let calendar = yield this.modal.create({
                component: ion2_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModal"],
                componentProps: { options },
            });
            calendar.present();
            const event = yield calendar.onDidDismiss();
            const date = event.data;
            const from = date.from;
            const to = date.to;
            this.operCorrectiveMaintenancesService.getOperCorrectiveMaintenances(this.operCorrectiveMaintenancesService.page, this.operCorrectiveMaintenancesService.perPage, this.resolved ? 'resolved' : null, from.string, to.string);
            console.log(date, from.string, to.string);
        });
    }
};
OperCorrectiveMaintenancesListComponent.ctorParameters = () => [
    { type: _oper_corrective_maintenances_service__WEBPACK_IMPORTED_MODULE_2__["OperCorrectiveMaintenancesService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
OperCorrectiveMaintenancesListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
OperCorrectiveMaintenancesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-corrective-maintenances-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-corrective-maintenances-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-list/oper-corrective-maintenances-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-corrective-maintenances-list.component.scss */ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-list/oper-corrective-maintenances-list.component.scss")).default]
    })
], OperCorrectiveMaintenancesListComponent);



/***/ }),

/***/ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: OperCorrectiveMaintenancesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperCorrectiveMaintenancesPageRoutingModule", function() { return OperCorrectiveMaintenancesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _oper_corrective_maintenances_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oper-corrective-maintenances.page */ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances.page.ts");
/* harmony import */ var _oper_corrective_maintenances_edit_oper_corrective_maintenances_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component */ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component.ts");
/* harmony import */ var _oper_corrective_maintenances_create_oper_corrective_maintenances_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oper-corrective-maintenances-create/oper-corrective-maintenances-create.component */ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-create/oper-corrective-maintenances-create.component.ts");
/* harmony import */ var _oper_corrective_maintenances_list_oper_corrective_maintenances_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oper-corrective-maintenances-list/oper-corrective-maintenances-list.component */ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-list/oper-corrective-maintenances-list.component.ts");







const routes = [
    // generated section
    {
        path: '',
        data: {
            title: 'OPERATIVIDAD MTTO CORRECTIVOS',
            roles: ['admin'],
        },
        component: _oper_corrective_maintenances_page__WEBPACK_IMPORTED_MODULE_3__["OperCorrectiveMaintenancesPage"]
    },
    {
        path: 'list',
        data: {
            title: 'OPERATIVIDAD MTTO CORRECTIVOS',
            roles: ['admin'],
        },
        component: _oper_corrective_maintenances_list_oper_corrective_maintenances_list_component__WEBPACK_IMPORTED_MODULE_6__["OperCorrectiveMaintenancesListComponent"]
    },
    {
        path: 'create',
        data: {
            title: 'OPERATIVIDAD MTTO CORRECTIVOS',
            roles: ['admin'],
        },
        component: _oper_corrective_maintenances_create_oper_corrective_maintenances_create_component__WEBPACK_IMPORTED_MODULE_5__["OperCorrectiveMaintenancesCreateComponent"]
    },
    {
        path: ':id/edit',
        data: {
            title: 'OPERATIVIDAD MTTO CORRECTIVOS',
            roles: ['admin'],
        },
        component: _oper_corrective_maintenances_edit_oper_corrective_maintenances_edit_component__WEBPACK_IMPORTED_MODULE_4__["OperCorrectiveMaintenancesEditComponent"]
    },
];
// end generated section
let OperCorrectiveMaintenancesPageRoutingModule = class OperCorrectiveMaintenancesPageRoutingModule {
};
OperCorrectiveMaintenancesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], OperCorrectiveMaintenancesPageRoutingModule);



/***/ }),

/***/ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances.module.ts ***!
  \*************************************************************************************/
/*! exports provided: OperCorrectiveMaintenancesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperCorrectiveMaintenancesPageModule", function() { return OperCorrectiveMaintenancesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _oper_corrective_maintenances_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oper-corrective-maintenances-routing.module */ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-routing.module.ts");
/* harmony import */ var _oper_corrective_maintenances_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./oper-corrective-maintenances.page */ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances.page.ts");
/* harmony import */ var _oper_corrective_maintenances_list_oper_corrective_maintenances_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./oper-corrective-maintenances-list/oper-corrective-maintenances-list.component */ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-list/oper-corrective-maintenances-list.component.ts");
/* harmony import */ var _oper_corrective_maintenances_create_oper_corrective_maintenances_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./oper-corrective-maintenances-create/oper-corrective-maintenances-create.component */ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-create/oper-corrective-maintenances-create.component.ts");
/* harmony import */ var _oper_corrective_maintenances_duplicate_oper_corrective_maintenances_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./oper-corrective-maintenances-duplicate/oper-corrective-maintenances-duplicate.component */ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-duplicate/oper-corrective-maintenances-duplicate.component.ts");
/* harmony import */ var _oper_corrective_maintenances_edit_oper_corrective_maintenances_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component */ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component.ts");
/* harmony import */ var _oper_corrective_maintenances_form_oper_corrective_maintenances_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./oper-corrective-maintenances-form/oper-corrective-maintenances-form.component */ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-form/oper-corrective-maintenances-form.component.ts");













let OperCorrectiveMaintenancesPageModule = class OperCorrectiveMaintenancesPageModule {
};
OperCorrectiveMaintenancesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            // imports generated section
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _oper_corrective_maintenances_routing_module__WEBPACK_IMPORTED_MODULE_6__["OperCorrectiveMaintenancesPageRoutingModule"]
            // end imports generated section
        ],
        declarations: [
            // declarations generated section
            _oper_corrective_maintenances_page__WEBPACK_IMPORTED_MODULE_7__["OperCorrectiveMaintenancesPage"],
            _oper_corrective_maintenances_list_oper_corrective_maintenances_list_component__WEBPACK_IMPORTED_MODULE_8__["OperCorrectiveMaintenancesListComponent"],
            _oper_corrective_maintenances_create_oper_corrective_maintenances_create_component__WEBPACK_IMPORTED_MODULE_9__["OperCorrectiveMaintenancesCreateComponent"],
            _oper_corrective_maintenances_duplicate_oper_corrective_maintenances_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["OperCorrectiveMaintenancesDuplicateComponent"],
            _oper_corrective_maintenances_edit_oper_corrective_maintenances_edit_component__WEBPACK_IMPORTED_MODULE_11__["OperCorrectiveMaintenancesEditComponent"],
            _oper_corrective_maintenances_form_oper_corrective_maintenances_form_component__WEBPACK_IMPORTED_MODULE_12__["OperCorrectiveMaintenancesFormComponent"],
        ]
    })
], OperCorrectiveMaintenancesPageModule);



/***/ }),

/***/ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItY29ycmVjdGl2ZS1tYWludGVuYW5jZXMvb3Blci1jb3JyZWN0aXZlLW1haW50ZW5hbmNlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances.page.ts ***!
  \***********************************************************************************/
/*! exports provided: OperCorrectiveMaintenancesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperCorrectiveMaintenancesPage", function() { return OperCorrectiveMaintenancesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");



let OperCorrectiveMaintenancesPage = class OperCorrectiveMaintenancesPage {
    constructor(splitPanel) {
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
};
OperCorrectiveMaintenancesPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] }
];
OperCorrectiveMaintenancesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-corrective-maintenances',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-corrective-maintenances.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-corrective-maintenances.page.scss */ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances.page.scss")).default]
    })
], OperCorrectiveMaintenancesPage);



/***/ }),

/***/ "./src/app/oper-corrective-maintenances/oper-corrective-maintenances.service.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances.service.ts ***!
  \**************************************************************************************/
/*! exports provided: OperCorrectiveMaintenancesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperCorrectiveMaintenancesService", function() { return OperCorrectiveMaintenancesService; });
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









let OperCorrectiveMaintenancesService = class OperCorrectiveMaintenancesService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.operCorrectiveMaintenancesUrl = 'oper-corrective-maintenances';
        this.operCorrectiveMaintenancesFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.operCorrectiveMaintenances = [];
        this.operCorrectiveMaintenance = {};
        this.operCorrectiveMaintenanceLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    // generated section
    getOperCorrectiveMaintenances(page = this.page, perPage = this.perPage, status = null, from = null, to = null) {
        this.api.get(this.operCorrectiveMaintenancesUrl + '?page=' + page +
            '&perPage=' + perPage +
            (status ? '&q[status:eq]=' + status : '') +
            (from ? '&q[operMaintenanceRepairs.date:gt]=' + from : '') +
            (to ? '&q[operMaintenanceRepairs.date:lt]=' + to : '') +
            '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.operCorrectiveMaintenances = res.data;
            this.operCorrectiveMaintenanceLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editOperCorrectiveMaintenance(id) {
        this.api.get(this.operCorrectiveMaintenancesUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.operCorrectiveMaintenance = res.data.model;
            this.operCorrectiveMaintenanceLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateOperCorrectiveMaintenance() {
        this.api.put(this.operCorrectiveMaintenancesUrl + '/' + this.operCorrectiveMaintenance.id, {
            model: this.operCorrectiveMaintenance,
            pivots: {
                oper_item: this.operCorrectiveMaintenance.oper_items,
            }
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getOperCorrectiveMaintenances(1);
        });
    }
    createOperCorrectiveMaintenance() {
        this.api.get(this.operCorrectiveMaintenancesUrl + '/create')
            .subscribe((res) => {
            this.operCorrectiveMaintenance = {};
            this.operCorrectiveMaintenance.date = moment__WEBPACK_IMPORTED_MODULE_8__().format('YYYY-MM-DD');
            this.operCorrectiveMaintenance.time = moment__WEBPACK_IMPORTED_MODULE_8__().format('HH:mm');
            this.operCorrectiveMaintenance.status = 'pending';
            this.operCorrectiveMaintenanceLists = res.lists;
        });
    }
    storeOperCorrectiveMaintenance() {
        this.api.post(this.operCorrectiveMaintenancesUrl, {
            model: this.operCorrectiveMaintenance,
            pivots: {
                oper_item: this.operCorrectiveMaintenance.oper_items,
            }
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getOperCorrectiveMaintenances(1);
        });
    }
    deleteOperCorrectiveMaintenance(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.operCorrectiveMaintenancesUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getOperCorrectiveMaintenances(1);
                });
            }
            else {
                return;
            }
        });
    }
};
OperCorrectiveMaintenancesService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
OperCorrectiveMaintenancesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OperCorrectiveMaintenancesService);



/***/ })

}]);
//# sourceMappingURL=oper-corrective-maintenances-oper-corrective-maintenances-module-es2015.js.map