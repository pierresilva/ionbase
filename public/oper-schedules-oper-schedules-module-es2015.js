(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oper-schedules-oper-schedules-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedule-contractor-io/oper-schedule-contractor-io.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedule-contractor-io/oper-schedule-contractor-io.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"Movimientos Operativos\"></app-main-header>\r\n<ion-content id=\"pages-content\">\r\n    <zxing-scanner *ngIf=\"browserScanner\"\r\n                   [(device)]=\"currentDevice\"\r\n                   [formats]=\"formatsEnabled\"\r\n                   (scanError)=\"onCodeError($event)\"\r\n                   (scanSuccess)=\"onCodeResult($event)\"></zxing-scanner>\r\n\r\n    <div class=\"ion-text-center\">\r\n        <ion-button (click)=\"scan()\"\r\n                    *ngIf=\"!browserScanner\"\r\n                    fill=\"clear\">Escanear QR\r\n            <ion-icon slot=\"end\" name=\"qr-code-outline\"></ion-icon>\r\n        </ion-button>\r\n    </div>\r\n    <pre>\r\n{{barcodeData | json}}\r\n    </pre>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedule-contractor-list/oper-schedule-contractor-list.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedule-contractor-list/oper-schedule-contractor-list.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"Mi Agenda\"></app-main-header>\r\n<ion-content id=\"pages-content\">\r\n    <ion-list *ngIf=\"operSchedulesService?.operSchedules?.length\">\r\n        <ion-item *ngFor=\"let operSchedule of operSchedulesService?.operSchedules\">\r\n            <ion-label>\r\n                <h2>{{operSchedule?.name}}</h2>\r\n                <h3>{{ (operSchedule?.time_start) | dateFormat:'HH:mm'}} - {{(operSchedule?.time_end) | dateFormat:'HH:mm'}}</h3>\r\n                <p>{{operSchedule?.oper_sector?.name}}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/oper-schedules'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"operSchedulesService.storeOperSchedule()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!operSchedulesService.operSchedulesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'OPERATRIVIDAD AGENDAS' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-oper-schedules-form #operScheduleForm [model]=\"operSchedulesService.operSchedule\"></app-oper-schedules-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  OperSchedules duplicate works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/oper-schedules'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"operSchedulesService.updateOperSchedule()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!operSchedulesService.operSchedulesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'OPERATRIVIDAD AGENDAS' | titlecase}}: {{ operSchedulesService.operSchedule?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-oper-schedules-form #operScheduleForm [model]=\"operSchedulesService.operSchedule\"></app-oper-schedules-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #operSchedulesForm=\"ngForm\" novalidate autocomplete=\"off\">\r\n\r\n\r\n    <!-- hous_unit_area_id -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'UNIDADES HABITACIONALES AREA' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"hous_unit_area_id\"\r\n                          id=\"hous_unit_area_id-field\"\r\n                          [required]=\"true\"\r\n                          [(ngModel)]=\"model.hous_unit_area\"\r\n                          [items]=\"operSchedulesService.operScheduleLists.HousUnitArea\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('UNIDADES HABITACIONALES AREAS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('UNIDADES HABITACIONALES AREAS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setHousUnitAreaId($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.hous_unit_area_id\">\r\n            <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['hous_unit_area_id']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end hous_unit_area_id -->\r\n\r\n\r\n    <!-- oper_sector_id -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'SECTOR' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"oper_sector_id\"\r\n                          id=\"oper_sector_id-field\"\r\n                          [required]=\"true\"\r\n                          [(ngModel)]=\"model.oper_sector\"\r\n                          [items]=\"operSchedulesService.operScheduleLists.OperSector\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('SECTORES' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('SECTORES' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setOperSectorId($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.oper_sector_id\">\r\n            <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['oper_sector_id']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end oper_sector_id -->\r\n\r\n\r\n    <!-- oper_contractor_id -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'CONTRATISTA' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"oper_contractor_id\"\r\n                          id=\"oper_contractor_id-field\"\r\n                          [required]=\"true\"\r\n                          [(ngModel)]=\"model.oper_contractor\"\r\n                          [items]=\"operSchedulesService.operScheduleLists.OperContractor\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('CONTRATISTA' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('CONTRATISTA' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setOperContractorId($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.oper_contractor_id\">\r\n            <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['oper_contractor_id']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end oper_contractor_id -->\r\n\r\n\r\n    <!-- oper_movement_ids -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'MOVIMIENTOS' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"oper_movement_ids\"\r\n                          id=\"oper_movement_ids-field\"\r\n                          [(ngModel)]=\"model.oper_movements\"\r\n                          [items]=\"operSchedulesService.operScheduleLists.OperMovement\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('MOVIMIENTOS OPERATIVOS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('MOVIMIENTOS OPERATIVOS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setOperMovementIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.oper_movement_ids\">\r\n            <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['oper_movement_ids']?.hasError(validation.type)\">\r\n            {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end oper_movement_ids -->\r\n\r\n\r\n            <!-- name -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.name\"\r\n                            type=\"text\"\r\n                            name=\"name\"\r\n                            id=\"name-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n                    <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['name']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end name -->\r\n\r\n\r\n            <!-- required_time -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'TIEMPO REQUERIDO' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.required_time\"\r\n                            type=\"number\"\r\n                            name=\"required_time\"\r\n                            id=\"required_time-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.required_time\">\r\n                    <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['required_time']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end required_time -->\r\n\r\n\r\n            <!-- supervisor_email -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'EMAIL DEL SUPERVISOR' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.supervisor_email\"\r\n                            type=\"text\"\r\n                            name=\"supervisor_email\"\r\n                            id=\"supervisor_email-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.supervisor_email\">\r\n                    <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['supervisor_email']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end supervisor_email -->\r\n\r\n\r\n            <!-- area_phone -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'TELÉFONO DEL AREA' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.area_phone\"\r\n                            type=\"text\"\r\n                            name=\"area_phone\"\r\n                            id=\"area_phone-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.area_phone\">\r\n                    <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['area_phone']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end area_phone -->\r\n\r\n\r\n            <!-- time_start -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'HORA INICIAL' | titlecase }}</ion-label>\r\n                <ion-datetime name=\"time_start\"\r\n                              id=\"time_start-field\"\r\n                              [doneText]=\"'Seleccionar'\"\r\n                              [cancelText]=\"'Cancelar'\"\r\n                              [(ngModel)]=\"model.time_start\"\r\n                              displayFormat=\"HH:mm\"></ion-datetime>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.time_start\">\r\n                    <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['time_start']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end time_start -->\r\n\r\n\r\n            <!-- time_end -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'HORA FINAL' | titlecase }}</ion-label>\r\n                <ion-datetime name=\"time_end\"\r\n                              id=\"time_end-field\"\r\n                              [doneText]=\"'Seleccionar'\"\r\n                              [cancelText]=\"'Cancelar'\"\r\n                              [(ngModel)]=\"model.time_end\"\r\n                              displayFormat=\"HH:mm\"></ion-datetime>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.time_end\">\r\n                    <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['time_end']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end time_end -->\r\n\r\n\r\n            <!-- periodicity -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'PERIODICIDAD' | titlecase }}</ion-label>\r\n                <ion-select [(ngModel)]=\"model.periodicity\"\r\n                            [required]=\"true\"\r\n                            name=\"periodicity\"\r\n                            id=\"periodicity-field\"\r\n                            okText=\"Seleccionar\"\r\n                            cancelText=\"Cancelar\">\r\n                    <ion-select-option value=\"\">{{ 'Ninguno' | titlecase }}</ion-select-option>\r\n                    <ion-select-option value=\"daily\">{{ 'Diario' | titlecase }}</ion-select-option>\r\n                    <ion-select-option value=\"weekly\">{{ 'Semanal' | titlecase }}</ion-select-option>\r\n                    <ion-select-option value=\"monthly\">{{ 'Mensual' | titlecase }}</ion-select-option>\r\n                    <ion-select-option value=\"bimonthly\">{{ 'Bimensual' | titlecase }}</ion-select-option>\r\n                    <ion-select-option value=\"quarterly\">{{ 'Trimestral' | titlecase }}</ion-select-option>\r\n                    <ion-select-option value=\"biannual\">{{ 'Semestral' | titlecase }}</ion-select-option>\r\n                    <ion-select-option value=\"annual\">{{ 'Anual' | titlecase }}</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.periodicity\">\r\n                <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['periodicity']?.hasError(validation.type)\">\r\n                    {{ validation.message }}\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n        <!-- end periodicity -->\r\n\r\n\r\n            <!-- repass -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'REQUIERE REPASAR' | titlecase }}</ion-label>\r\n                <ion-toggle name=\"repass\"\r\n                            id=\"repass-field\"\r\n                            slot=\"end\"\r\n                            [(ngModel)]=\"model.repass\"></ion-toggle>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.repass\">\r\n                    <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['repass']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end repass -->\r\n\r\n\r\n            <!-- next -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'SIGUIENTE EN' | titlecase }}</ion-label>\r\n                <ion-datetime name=\"next\"\r\n                              id=\"next-field\"\r\n                              [doneText]=\"'Seleccionar'\"\r\n                              [cancelText]=\"'Cancelar'\"\r\n                              [(ngModel)]=\"model.next\"\r\n                              displayFormat=\"DD/MM/YYYY\"></ion-datetime>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.next\">\r\n                    <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['next']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end next -->\r\n\r\n\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'OPERATRIVIDAD AGENDAS' | titlecase}}\"\r\n                 primaryLink=\"oper-schedules/create\"\r\n                 primaryText=\"Crear {{'OPERATRIVIDAD AGENDAS' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-searchbar showCancelButton=\"focus\"\r\n                       [cancelButtonText]=\"'Cancelar'\"\r\n                       [placeholder]=\"'Buscar ' + ('OPERATRIVIDAD AGENDAS' | lowercase )\"\r\n                       (ionCancel)=\"this.operSchedulesService.searchValue = ''; operSchedulesService.getOperSchedules()\"\r\n                       (keyup.enter)=\"operSchedulesService.getOperSchedules()\"\r\n                       [(ngModel)]=\"operSchedulesService.searchValue\"></ion-searchbar>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && operSchedulesService.operSchedules?.length\">\r\n        <ion-card *ngFor=\"let operSchedule of operSchedulesService.operSchedules; let index = index\">\r\n            <ion-list>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operSchedule?.name }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'TIEMPO REQUERIDO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operSchedule?.required_time }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'EMAIL DEL SUPOERVISOR' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operSchedule?.supervisor_email }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'TELÉFONO DEL AREA' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operSchedule?.area_phone }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'HORA INICIAL' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operSchedule?.time_start | dateFormat:'HH:mm' }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'HORA FINAL' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operSchedule?.time_end | dateFormat:'HH:mm' }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'PERIODICIDAD' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operSchedule?.periodicity | status }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'REQUIERE REPASAR' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operSchedule?.repass  ? 'Si' : 'No' }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'SIGUIENTE EN' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operSchedule?.next | dateFormat:'DD/MM/YYYY' }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'UNIDADES HABITACIONALES AREAS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\"><a routerLink=\"/hous-unit-areas/{{ operSchedule?.hous_unit_area?.id }}/edit\">{{ operSchedule?.hous_unit_area?.name }}</a></div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'OPERATIVIDAD SECTORES' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\"><a routerLink=\"/oper-sectors/{{ operSchedule?.oper_sector?.id }}/edit\">{{ operSchedule?.oper_sector?.name }}</a></div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'CONTRATISTAS OPERATIVOS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\"><a routerLink=\"/oper-contractors/{{ operSchedule?.oper_contractor?.id }}/edit\">{{ operSchedule?.oper_contractor?.name }}</a></div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'MOVIMIENTOS OPERATIVOS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">\r\n                            <ng-container *ngIf=\"operSchedule?.oper_movements?.length\">\r\n                                <ng-container *ngFor=\"let operMovement of operSchedule?.oper_movements; let last = last\">\r\n                                    <a routerLink=\"/oper-movements/{{ operMovement?.id }}/edit\">{{ operMovement?.name }}</a><span *ngIf=\"!last\">, </span>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n                    </ion-item>\r\n            </ion-list>\r\n            <ion-footer>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/oper-schedules/' + operSchedule?.id + '/edit'\">\r\n                            <ion-icon name=\"create-outline\"></ion-icon>\r\n                            <div>Editar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"operSchedulesService.deleteOperSchedule(operSchedule?.id)\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            <div>Eliminar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-footer>\r\n        </ion-card>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && !operSchedulesService.operSchedules?.length\">\r\n        <ion-item>\r\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label><h2>No se encontraron {{'OPERATRIVIDAD EGENDAS' | titlecase}}</h2></ion-label>\r\n            <ion-button [routerLink]=\"'/oper-schedules/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\r\n                Crear {{'OPERATRIVIDAD AGENDAS' | titlecase}}\r\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"operSchedulesService.meta\">\r\n        <ion-col class=\"ion-text-center\" size=\"12\">\r\n            <ion-button (click)=\"operSchedulesService.getOperSchedules(operSchedulesService.meta.current_page - 1)\"\r\n                        [disabled]=\"operSchedulesService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{operSchedulesService.meta.current_page}}\r\n                /{{operSchedulesService.meta.last_page}} {{operSchedulesService.meta.from}}-{{operSchedulesService.meta.to}}\r\n                /{{operSchedulesService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"operSchedulesService.getOperSchedules(operSchedulesService.meta.current_page + 1)\"\r\n                        [disabled]=\"operSchedulesService.meta.current_page == operSchedulesService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'OPERATRIVIDAD AGENDAS' | titlecase}}\"\r\n                 primaryLink=\"oper-schedules/create\"\r\n                 primaryText=\"Crear {{'OPERATRIVIDAD AGENDAS' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/oper-schedules/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'OPERATRIVIDAD AGENDAS'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/oper-schedules/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'OPERATRIVIDAD AGENDAS' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/oper-schedules/oper-schedule-contractor-io/oper-schedule-contractor-io.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedule-contractor-io/oper-schedule-contractor-io.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2NoZWR1bGVzL29wZXItc2NoZWR1bGUtY29udHJhY3Rvci1pby9vcGVyLXNjaGVkdWxlLWNvbnRyYWN0b3ItaW8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-schedules/oper-schedule-contractor-io/oper-schedule-contractor-io.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedule-contractor-io/oper-schedule-contractor-io.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: OperScheduleContractorIoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperScheduleContractorIoComponent", function() { return OperScheduleContractorIoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-schedules.service */ "./src/app/oper-schedules/oper-schedules.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @zxing/library */ "./node_modules/@zxing/library/umd/index.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_8__);









let OperScheduleContractorIoComponent = class OperScheduleContractorIoComponent {
    constructor(operSchedulesService, api, loading, splitPanel, barcodeScanner, platform) {
        this.operSchedulesService = operSchedulesService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
        this.barcodeScanner = barcodeScanner;
        this.platform = platform;
        this.browserScanner = false;
        this.currentDevice = null;
        this.formatsEnabled = [
            _zxing_library__WEBPACK_IMPORTED_MODULE_8__["BarcodeFormat"].CODE_128,
            _zxing_library__WEBPACK_IMPORTED_MODULE_8__["BarcodeFormat"].DATA_MATRIX,
            _zxing_library__WEBPACK_IMPORTED_MODULE_8__["BarcodeFormat"].EAN_13,
            _zxing_library__WEBPACK_IMPORTED_MODULE_8__["BarcodeFormat"].QR_CODE,
            _zxing_library__WEBPACK_IMPORTED_MODULE_8__["BarcodeFormat"].PDF_417,
        ];
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scan() {
        if (this.platform.is('desktop')) {
            this.desktopScan();
        }
        if (this.platform.is('mobile')) {
            this.mobileScan();
        }
    }
    mobileScan() {
        this.barcodeScanner.scan().then(barcodeData => {
            console.log('Barcode data', barcodeData);
            this.barcodeData = barcodeData;
        }).catch(err => {
            console.log('Error', err);
        });
    }
    desktopScan() {
        this.browserScanner = true;
    }
    onCodeResult(resultString) {
        this.barcodeData = {
            canceled: null,
            text: resultString,
            format: null,
        };
        this.browserScanner = false;
        console.log(this.barcodeData);
    }
    onCodeError(err = null) {
        this.barcodeData = {
            canceled: null,
            text: null,
            format: null,
        };
        this.browserScanner = false;
        console.log(err);
    }
};
OperScheduleContractorIoComponent.ctorParameters = () => [
    { type: _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__["OperSchedulesService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__["BarcodeScanner"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] }
];
OperScheduleContractorIoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-schedule-contractor-io',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-schedule-contractor-io.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedule-contractor-io/oper-schedule-contractor-io.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-schedule-contractor-io.component.scss */ "./src/app/oper-schedules/oper-schedule-contractor-io/oper-schedule-contractor-io.component.scss")).default]
    })
], OperScheduleContractorIoComponent);



/***/ }),

/***/ "./src/app/oper-schedules/oper-schedule-contractor-list/oper-schedule-contractor-list.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedule-contractor-list/oper-schedule-contractor-list.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2NoZWR1bGVzL29wZXItc2NoZWR1bGUtY29udHJhY3Rvci1saXN0L29wZXItc2NoZWR1bGUtY29udHJhY3Rvci1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/oper-schedules/oper-schedule-contractor-list/oper-schedule-contractor-list.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedule-contractor-list/oper-schedule-contractor-list.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: OperScheduleContractorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperScheduleContractorListComponent", function() { return OperScheduleContractorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-schedules.service */ "./src/app/oper-schedules/oper-schedules.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/auth.service */ "./src/app/@shared/services/auth.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








let OperScheduleContractorListComponent = class OperScheduleContractorListComponent {
    constructor(operSchedulesService, api, loading, splitPanel, auth) {
        this.operSchedulesService = operSchedulesService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
        this.auth = auth;
        this.userId = null;
        this.date = moment__WEBPACK_IMPORTED_MODULE_7__().format('YYYY-MM-DD');
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
        this.userId = this.auth.getUser('id');
        console.log(this.userId);
        this.operSchedulesService.getOperSchedules(this.operSchedulesService.page, this.operSchedulesService.perPage, this.userId, this.date, true);
    }
};
OperScheduleContractorListComponent.ctorParameters = () => [
    { type: _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__["OperSchedulesService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] },
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
OperScheduleContractorListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-schedule-contractor-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-schedule-contractor-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedule-contractor-list/oper-schedule-contractor-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-schedule-contractor-list.component.scss */ "./src/app/oper-schedules/oper-schedule-contractor-list/oper-schedule-contractor-list.component.scss")).default]
    })
], OperScheduleContractorListComponent);



/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2NoZWR1bGVzL29wZXItc2NoZWR1bGVzLWNyZWF0ZS9vcGVyLXNjaGVkdWxlcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OperSchedulesCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSchedulesCreateComponent", function() { return OperSchedulesCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-schedules.service */ "./src/app/oper-schedules/oper-schedules.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let OperSchedulesCreateComponent = class OperSchedulesCreateComponent {
    constructor(operSchedulesService, route, platform, splitPanel) {
        this.operSchedulesService = operSchedulesService;
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
        this.operScheduleForm.operSchedulesForm.valueChanges.subscribe((data) => {
            this.operSchedulesService.operSchedulesFormValid.next(this.operScheduleForm.operSchedulesForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.operSchedulesService.createOperSchedule();
        this.operSchedulesService.operSchedule = {};
    }
};
OperSchedulesCreateComponent.ctorParameters = () => [
    { type: _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__["OperSchedulesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
OperSchedulesCreateComponent.propDecorators = {
    operScheduleForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operScheduleForm',] }]
};
OperSchedulesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-schedules-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-schedules-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-schedules-create.component.scss */ "./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.scss")).default]
    })
], OperSchedulesCreateComponent);



/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2NoZWR1bGVzL29wZXItc2NoZWR1bGVzLWR1cGxpY2F0ZS9vcGVyLXNjaGVkdWxlcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: OperSchedulesDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSchedulesDuplicateComponent", function() { return OperSchedulesDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OperSchedulesDuplicateComponent = class OperSchedulesDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
OperSchedulesDuplicateComponent.ctorParameters = () => [];
OperSchedulesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-schedules-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-schedules-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-schedules-duplicate.component.scss */ "./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.scss")).default]
    })
], OperSchedulesDuplicateComponent);



/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2NoZWR1bGVzL29wZXItc2NoZWR1bGVzLWVkaXQvb3Blci1zY2hlZHVsZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OperSchedulesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSchedulesEditComponent", function() { return OperSchedulesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-schedules.service */ "./src/app/oper-schedules/oper-schedules.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let OperSchedulesEditComponent = class OperSchedulesEditComponent {
    constructor(operSchedulesService, route, platform, splitPanel) {
        this.operSchedulesService = operSchedulesService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.operSchedulesService.editOperSchedule(this.id);
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    ngAfterViewInit() {
        this.operScheduleForm.operSchedulesForm.valueChanges.subscribe((data) => {
            this.operSchedulesService.operSchedulesFormValid.next(this.operScheduleForm.operSchedulesForm.valid);
        });
    }
};
OperSchedulesEditComponent.ctorParameters = () => [
    { type: _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__["OperSchedulesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
OperSchedulesEditComponent.propDecorators = {
    operScheduleForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operScheduleForm',] }]
};
OperSchedulesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-schedules-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-schedules-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-schedules-edit.component.scss */ "./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.scss")).default]
    })
], OperSchedulesEditComponent);



/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* generated section */\n/* end generated section */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blci1zY2hlZHVsZXMvb3Blci1zY2hlZHVsZXMtZm9ybS9vcGVyLXNjaGVkdWxlcy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFBO0FBRUEsMEJBQUEiLCJmaWxlIjoic3JjL2FwcC9vcGVyLXNjaGVkdWxlcy9vcGVyLXNjaGVkdWxlcy1mb3JtL29wZXItc2NoZWR1bGVzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnZW5lcmF0ZWQgc2VjdGlvbiAqL1xyXG5cclxuLyogZW5kIGdlbmVyYXRlZCBzZWN0aW9uICovXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OperSchedulesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSchedulesFormComponent", function() { return OperSchedulesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-schedules.service */ "./src/app/oper-schedules/oper-schedules.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let OperSchedulesFormComponent = class OperSchedulesFormComponent {
    constructor(operSchedulesService, toTitlecase) {
        this.operSchedulesService = operSchedulesService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'hous_unit_area_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('housUnitArea - NAME') + ' es obligatorio.' },
            ],
            'oper_sector_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('SECTOR') + ' es obligatorio.' },
            ],
            'oper_contractor_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('operContractor - NAME') + ' es obligatorio.' },
            ],
            'required_time': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('TIEMPO REQUERIDO') + ' es obligatorio.' },
            ],
            'supervisor_email': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('EMAIL DEL SUPOERVISOR') + ' es obligatorio.' },
            ],
            'area_phone': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('TELÉFONO DEL AREA') + ' es obligatorio.' },
            ],
            'time_start': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('HORA INICIAL') + ' es obligatorio.' },
            ],
            'time_end': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('HORA FINAL') + ' es obligatorio.' },
            ],
            'periodicity': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('PERIODICIDAD') + ' es obligatorio.' },
            ],
            'repass': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('REQUIERE REPASAR') + ' es obligatorio.' },
            ],
            'next': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('SIGUIENTE EN') + ' es obligatorio.' },
            ],
            'oper_movement_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('MOVIMIENTOS OPERATIVOS') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setHousUnitAreaId
    setHousUnitAreaId(event) {
        this.operSchedulesService.operSchedule.hous_unit_area_id = event.value ? event.value.id : null;
    }
    // end setHousUnitAreaId
    // set setOperSectorId
    setOperSectorId(event) {
        this.operSchedulesService.operSchedule.oper_sector_id = event.value ? event.value.id : null;
    }
    // end setOperSectorId
    // set setOperContractorId
    setOperContractorId(event) {
        this.operSchedulesService.operSchedule.oper_contractor_id = event.value ? event.value.id : null;
    }
    // end setOperContractorId
    // set setOperMovementIds
    setOperMovementIds(event) {
        let operMovementIds = null;
        if (event.value.length) {
            operMovementIds = [];
            for (let i = 0; i < event.value.length; i++) {
                operMovementIds.push(event.value[i].id);
            }
        }
        this.operSchedulesService.operSchedule.oper_movement_ids = operMovementIds;
    }
};
OperSchedulesFormComponent.ctorParameters = () => [
    { type: _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__["OperSchedulesService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
OperSchedulesFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    operSchedulesForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operSchedulesForm',] }]
};
OperSchedulesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-schedules-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-schedules-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-schedules-form.component.scss */ "./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.scss")).default]
    })
], OperSchedulesFormComponent);



/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2NoZWR1bGVzL29wZXItc2NoZWR1bGVzLWxpc3Qvb3Blci1zY2hlZHVsZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OperSchedulesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSchedulesListComponent", function() { return OperSchedulesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-schedules.service */ "./src/app/oper-schedules/oper-schedules.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");







let OperSchedulesListComponent = class OperSchedulesListComponent {
    constructor(operSchedulesService, api, loading, splitPanel) {
        this.operSchedulesService = operSchedulesService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
        this.operSchedulesService.getOperSchedules();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
OperSchedulesListComponent.ctorParameters = () => [
    { type: _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__["OperSchedulesService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] }
];
OperSchedulesListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
OperSchedulesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-schedules-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-schedules-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-schedules-list.component.scss */ "./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.scss")).default]
    })
], OperSchedulesListComponent);



/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: OperSchedulesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSchedulesPageRoutingModule", function() { return OperSchedulesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _oper_schedules_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oper-schedules.page */ "./src/app/oper-schedules/oper-schedules.page.ts");
/* harmony import */ var _oper_schedules_edit_oper_schedules_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oper-schedules-edit/oper-schedules-edit.component */ "./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.ts");
/* harmony import */ var _oper_schedules_create_oper_schedules_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oper-schedules-create/oper-schedules-create.component */ "./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.ts");
/* harmony import */ var _oper_schedules_list_oper_schedules_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oper-schedules-list/oper-schedules-list.component */ "./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.ts");
/* harmony import */ var _oper_schedule_contractor_io_oper_schedule_contractor_io_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./oper-schedule-contractor-io/oper-schedule-contractor-io.component */ "./src/app/oper-schedules/oper-schedule-contractor-io/oper-schedule-contractor-io.component.ts");
/* harmony import */ var _oper_schedule_contractor_list_oper_schedule_contractor_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./oper-schedule-contractor-list/oper-schedule-contractor-list.component */ "./src/app/oper-schedules/oper-schedule-contractor-list/oper-schedule-contractor-list.component.ts");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@shared/guards/auth.guard */ "./src/app/@shared/guards/auth.guard.ts");










const routes = [
    // generated section
    {
        path: '',
        data: {
            title: 'OPERATRIVIDAD AGENDAS',
            roles: ['admin'],
        },
        component: _oper_schedules_page__WEBPACK_IMPORTED_MODULE_3__["OperSchedulesPage"]
    },
    {
        path: 'list',
        data: {
            title: 'OPERATRIVIDAD AGENDAS',
            roles: ['admin'],
        },
        component: _oper_schedules_list_oper_schedules_list_component__WEBPACK_IMPORTED_MODULE_6__["OperSchedulesListComponent"]
    },
    {
        path: 'create',
        data: {
            title: 'OPERATRIVIDAD AGENDAS',
            roles: ['admin'],
        },
        component: _oper_schedules_create_oper_schedules_create_component__WEBPACK_IMPORTED_MODULE_5__["OperSchedulesCreateComponent"]
    },
    {
        path: ':id/edit',
        data: {
            title: 'OPERATRIVIDAD AGENDAS',
            roles: ['admin'],
        },
        component: _oper_schedules_edit_oper_schedules_edit_component__WEBPACK_IMPORTED_MODULE_4__["OperSchedulesEditComponent"]
    },
    {
        path: 'movement',
        data: {
            title: 'Movimientos operativos'
        },
        component: _oper_schedule_contractor_io_oper_schedule_contractor_io_component__WEBPACK_IMPORTED_MODULE_7__["OperScheduleContractorIoComponent"],
    },
    {
        path: 'own',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        data: {
            title: 'Mi Agenda',
            roles: ['admin', 'servicios-generales', 'servicios-seguridad'],
        },
        component: _oper_schedule_contractor_list_oper_schedule_contractor_list_component__WEBPACK_IMPORTED_MODULE_8__["OperScheduleContractorListComponent"],
    }
];
// end generated section
let OperSchedulesPageRoutingModule = class OperSchedulesPageRoutingModule {
};
OperSchedulesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], OperSchedulesPageRoutingModule);



/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules.module.ts ***!
  \*********************************************************/
/*! exports provided: OperSchedulesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSchedulesPageModule", function() { return OperSchedulesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _oper_schedules_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oper-schedules-routing.module */ "./src/app/oper-schedules/oper-schedules-routing.module.ts");
/* harmony import */ var _oper_schedules_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./oper-schedules.page */ "./src/app/oper-schedules/oper-schedules.page.ts");
/* harmony import */ var _oper_schedules_list_oper_schedules_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./oper-schedules-list/oper-schedules-list.component */ "./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.ts");
/* harmony import */ var _oper_schedules_create_oper_schedules_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./oper-schedules-create/oper-schedules-create.component */ "./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.ts");
/* harmony import */ var _oper_schedules_duplicate_oper_schedules_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./oper-schedules-duplicate/oper-schedules-duplicate.component */ "./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.ts");
/* harmony import */ var _oper_schedules_edit_oper_schedules_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./oper-schedules-edit/oper-schedules-edit.component */ "./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.ts");
/* harmony import */ var _oper_schedules_form_oper_schedules_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./oper-schedules-form/oper-schedules-form.component */ "./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.ts");
/* harmony import */ var _oper_schedule_contractor_io_oper_schedule_contractor_io_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./oper-schedule-contractor-io/oper-schedule-contractor-io.component */ "./src/app/oper-schedules/oper-schedule-contractor-io/oper-schedule-contractor-io.component.ts");
/* harmony import */ var _oper_schedule_contractor_list_oper_schedule_contractor_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./oper-schedule-contractor-list/oper-schedule-contractor-list.component */ "./src/app/oper-schedules/oper-schedule-contractor-list/oper-schedule-contractor-list.component.ts");















let OperSchedulesPageModule = class OperSchedulesPageModule {
};
OperSchedulesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            // imports generated section
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _oper_schedules_routing_module__WEBPACK_IMPORTED_MODULE_6__["OperSchedulesPageRoutingModule"]
            // end imports generated section
        ],
        declarations: [
            // declarations generated section
            _oper_schedules_page__WEBPACK_IMPORTED_MODULE_7__["OperSchedulesPage"],
            _oper_schedules_list_oper_schedules_list_component__WEBPACK_IMPORTED_MODULE_8__["OperSchedulesListComponent"],
            _oper_schedules_create_oper_schedules_create_component__WEBPACK_IMPORTED_MODULE_9__["OperSchedulesCreateComponent"],
            _oper_schedules_duplicate_oper_schedules_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["OperSchedulesDuplicateComponent"],
            _oper_schedules_edit_oper_schedules_edit_component__WEBPACK_IMPORTED_MODULE_11__["OperSchedulesEditComponent"],
            _oper_schedules_form_oper_schedules_form_component__WEBPACK_IMPORTED_MODULE_12__["OperSchedulesFormComponent"],
            // end declarations generated section
            _oper_schedule_contractor_io_oper_schedule_contractor_io_component__WEBPACK_IMPORTED_MODULE_13__["OperScheduleContractorIoComponent"],
            _oper_schedule_contractor_list_oper_schedule_contractor_list_component__WEBPACK_IMPORTED_MODULE_14__["OperScheduleContractorListComponent"],
        ]
    })
], OperSchedulesPageModule);



/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2NoZWR1bGVzL29wZXItc2NoZWR1bGVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules.page.ts ***!
  \*******************************************************/
/*! exports provided: OperSchedulesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSchedulesPage", function() { return OperSchedulesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");



let OperSchedulesPage = class OperSchedulesPage {
    constructor(splitPanel) {
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
};
OperSchedulesPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] }
];
OperSchedulesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-schedules',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-schedules.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-schedules.page.scss */ "./src/app/oper-schedules/oper-schedules.page.scss")).default]
    })
], OperSchedulesPage);



/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules.service.ts ***!
  \**********************************************************/
/*! exports provided: OperSchedulesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSchedulesService", function() { return OperSchedulesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let OperSchedulesService = class OperSchedulesService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.operSchedulesUrl = 'oper-schedules';
        this.operSchedulesFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.operSchedules = [];
        this.operSchedule = {};
        this.operScheduleLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    // generated section
    getOperSchedules(page = this.page, perPage = this.perPage, userId = null, date = null, own = null) {
        this.api.get(this.operSchedulesUrl + '?page=' +
            page + '&perPage=' + perPage +
            '&q[name:cont]=' + this.searchValue +
            (userId ? '&q[operContractor.user_id:id]=' + userId : '') +
            (date ? '&q[next:cont]=' + date : '') +
            (own ? '&q[s]=time_start:asc' : ''))
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.operSchedules = res.data;
            this.operScheduleLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editOperSchedule(id) {
        this.api.get(this.operSchedulesUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.operSchedule = res.data.model;
            this.operScheduleLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateOperSchedule() {
        this.api.put(this.operSchedulesUrl + '/' + this.operSchedule.id, {
            model: this.operSchedule,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getOperSchedules(1);
        });
    }
    createOperSchedule() {
        this.api.get(this.operSchedulesUrl + '/create')
            .subscribe((res) => {
            this.operSchedule = {};
            this.operScheduleLists = res.lists;
        });
    }
    storeOperSchedule() {
        this.api.post(this.operSchedulesUrl, {
            model: this.operSchedule,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getOperSchedules(1);
        });
    }
    deleteOperSchedule(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.operSchedulesUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getOperSchedules(1);
                });
            }
            else {
                return;
            }
        });
    }
};
OperSchedulesService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
OperSchedulesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OperSchedulesService);



/***/ })

}]);
//# sourceMappingURL=oper-schedules-oper-schedules-module-es2015.js.map