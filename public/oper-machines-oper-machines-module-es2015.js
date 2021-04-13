(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oper-machines-oper-machines-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-create/oper-machines-create.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-create/oper-machines-create.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/oper-machines'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"operMachinesService.storeOperMachine()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!operMachinesService.operMachinesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'OPERATIVIDAD MAQUINARIA' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-oper-machines-form #operMachineForm [model]=\"operMachinesService.operMachine\"></app-oper-machines-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-duplicate/oper-machines-duplicate.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-duplicate/oper-machines-duplicate.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  OperMachines duplicate works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-edit/oper-machines-edit.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-edit/oper-machines-edit.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/oper-machines'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"operMachinesService.updateOperMachine()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!operMachinesService.operMachinesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'OPERATIVIDAD MAQUINARIA' | titlecase}}: {{ operMachinesService.operMachine?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-oper-machines-form #operMachineForm [model]=\"operMachinesService.operMachine\"></app-oper-machines-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-form/oper-machines-form.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-form/oper-machines-form.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #operMachinesForm=\"ngForm\"\r\n      novalidate\r\n      autocomplete=\"off\">\r\n\r\n\r\n    <!-- hous_unit_area_id -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'AREA' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"hous_unit_area_id\"\r\n                          id=\"hous_unit_area_id-field\"\r\n                          [required]=\"true\"\r\n                          [(ngModel)]=\"model.hous_unit_area\"\r\n                          [items]=\"operMachinesService.operMachineLists.HousUnitArea\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('UNIDADES HABITACIONALES AREAS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('UNIDADES HABITACIONALES AREAS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setHousUnitAreaId($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.hous_unit_area_id\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"operMachinesForm.form.controls['hous_unit_area_id']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end hous_unit_area_id -->\r\n\r\n\r\n    <!-- oper_contractor_id -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'CONTRATISTA' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"oper_contractor_id\"\r\n                          id=\"oper_contractor_id-field\"\r\n                          [required]=\"true\"\r\n                          [(ngModel)]=\"model.oper_contractor\"\r\n                          [items]=\"operMachinesService.operMachineLists.OperContractor\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('CONTRATISTAS OPERATIVOS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('CONTRATISTAS OPERATIVOS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setOperContractorId($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.oper_contractor_id\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"operMachinesForm.form.controls['oper_contractor_id']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end oper_contractor_id -->\r\n\r\n\r\n    <!-- oper_preventive_maintenance_ids -->\r\n    <!--<ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'MTTO PREVENTIVOS' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"oper_preventive_maintenance_ids\"\r\n                          id=\"oper_preventive_maintenance_ids-field\"\r\n                          [(ngModel)]=\"model.oper_preventive_maintenances\"\r\n                          [items]=\"operMachinesService.operMachineLists.OperPreventiveMaintenance\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('OPERATIVIDAD MTTO PREVENTIVOS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('OPERATIVIDAD MTTO PREVENTIVOS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setOperPreventiveMaintenanceIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.oper_preventive_maintenance_ids\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"operMachinesForm.form.controls['oper_preventive_maintenance_ids']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>-->\r\n    <!-- end oper_preventive_maintenance_ids -->\r\n\r\n\r\n    <!-- oper_replacement_ids -->\r\n    <!--<ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'OPERATIVIDAD REPUESTOS' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"oper_replacement_ids\"\r\n                          id=\"oper_replacement_ids-field\"\r\n                          [(ngModel)]=\"model.oper_replacements\"\r\n                          [items]=\"operMachinesService.operMachineLists.OperReplacement\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('OPERATIVIDAD REPUESTOS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('OPERATIVIDAD REPUESTOS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setOperReplacementIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.oper_replacement_ids\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"operMachinesForm.form.controls['oper_replacement_ids']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>-->\r\n    <!-- end oper_replacement_ids -->\r\n\r\n\r\n    <!-- name -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\r\n        <ion-input [(ngModel)]=\"model.name\"\r\n                   type=\"text\"\r\n                   name=\"name\"\r\n                   id=\"name-field\"\r\n                   [required]=\"true\"\r\n                   placeholder=\"\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"operMachinesForm.form.controls['name']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end name -->\r\n\r\n\r\n    <!-- contract_expiration_date -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'FECHA VENCIMIENTO CONTRATO' | titlecase }}</ion-label>\r\n        <ion-datetime name=\"contract_expiration_date\"\r\n                      id=\"contract_expiration_date-field\"\r\n                      [doneText]=\"'Seleccionar'\"\r\n                      [cancelText]=\"'Cancelar'\"\r\n                      [(ngModel)]=\"model.contract_expiration_date\"\r\n                      displayFormat=\"DD/MM/YYYY\"></ion-datetime>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.contract_expiration_date\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"operMachinesForm.form.controls['contract_expiration_date']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end contract_expiration_date -->\r\n\r\n\r\n    <!-- contract_monthly_price -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'VALOR MENSUAL' | titlecase }}</ion-label>\r\n        <ion-input [(ngModel)]=\"model.contract_monthly_price\"\r\n                   type=\"number\"\r\n                   name=\"contract_monthly_price\"\r\n                   id=\"contract_monthly_price-field\"\r\n                   placeholder=\"\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.contract_monthly_price\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"operMachinesForm.form.controls['contract_monthly_price']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end contract_monthly_price -->\r\n\r\n\r\n    <!-- monthly_periodicity -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'PERIODICIDAD MENSUAL' | titlecase }}</ion-label>\r\n        <ion-input [(ngModel)]=\"model.monthly_periodicity\"\r\n                   type=\"number\"\r\n                   name=\"monthly_periodicity\"\r\n                   id=\"monthly_periodicity-field\"\r\n                   placeholder=\"\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.monthly_periodicity\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"operMachinesForm.form.controls['monthly_periodicity']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end monthly_periodicity -->\r\n\r\n\r\n    <!-- inventory_code -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'CÓDIGO INVENTARIO' | titlecase }}</ion-label>\r\n        <ion-input [(ngModel)]=\"model.inventory_code\"\r\n                   type=\"text\"\r\n                   name=\"inventory_code\"\r\n                   id=\"inventory_code-field\"\r\n                   placeholder=\"\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.inventory_code\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"operMachinesForm.form.controls['inventory_code']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end monthly_periodicity -->\r\n\r\n\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-list/oper-machines-list.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-list/oper-machines-list.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'OPERATIVIDAD MAQUINARIA' | titlecase}}\"\r\n                 primaryLink=\"oper-machines/create\"\r\n                 primaryText=\"Crear {{'OPERATIVIDAD MAQUINARIA' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-searchbar showCancelButton=\"focus\"\r\n                   [cancelButtonText]=\"'Cancelar'\"\r\n                   [placeholder]=\"'Buscar ' + ('OPERATIVIDAD MAQUINARIA' | lowercase )\"\r\n                   (ionCancel)=\"this.operMachinesService.searchValue = ''; operMachinesService.getOperMachines()\"\r\n                   (keyup.enter)=\"operMachinesService.getOperMachines()\"\r\n                   [(ngModel)]=\"operMachinesService.searchValue\"></ion-searchbar>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && operMachinesService.operMachines?.length\">\r\n        <ion-card *ngFor=\"let operMachine of operMachinesService.operMachines; let index = index\">\r\n            <ion-list>\r\n                <ion-item class=\"item-transparent\">\r\n                    <ion-label position=\"fixed\">\r\n                        <b>{{ 'NOMBRE' | titlecase }}</b>\r\n                    </ion-label>\r\n                    <div class=\"wrap-text\">{{ operMachine?.name }}</div>\r\n                </ion-item>\r\n                <ion-item class=\"item-transparent\">\r\n                    <ion-label position=\"fixed\">\r\n                        <b>{{ 'FECHA VENCIMIENTO CONTRATO' | titlecase }}</b>\r\n                    </ion-label>\r\n                    <div class=\"wrap-text\">{{ operMachine?.contract_expiration_date | dateFormat:'DD/MM/YYYY' }}</div>\r\n                </ion-item>\r\n                <ion-item class=\"item-transparent\">\r\n                    <ion-label position=\"fixed\">\r\n                        <b>{{ 'VALOR MENSUAL' | titlecase }}</b>\r\n                    </ion-label>\r\n                    <div class=\"wrap-text\">{{ operMachine?.contract_monthly_price }}</div>\r\n                </ion-item>\r\n                <ion-item class=\"item-transparent\">\r\n                    <ion-label position=\"fixed\">\r\n                        <b>{{ 'PERIODICIDAD MENSUAL' | titlecase }}</b>\r\n                    </ion-label>\r\n                    <div class=\"wrap-text\">{{ operMachine?.monthly_periodicity }}</div>\r\n                </ion-item>\r\n                <ion-item class=\"item-transparent\">\r\n                    <ion-label position=\"fixed\">\r\n                        <b>Código Inventario</b>\r\n                    </ion-label>\r\n                    <div class=\"wrap-text\">{{ operMachine?.inventory_code }}</div>\r\n                </ion-item>\r\n                <ion-item class=\"item-transparent\">\r\n                    <ion-label position=\"fixed\">\r\n                        <b>{{ 'UNIDADES HABITACIONALES AREAS' | titlecase }}</b>\r\n                    </ion-label>\r\n                    <div class=\"wrap-text\">\r\n                        <a routerLink=\"/hous-unit-areas/{{ operMachine?.hous_unit_area?.id }}/edit\">{{ operMachine?.hous_unit_area?.name }}</a>\r\n                    </div>\r\n                </ion-item>\r\n                <ion-item class=\"item-transparent\">\r\n                    <ion-label position=\"fixed\">\r\n                        <b>{{ 'CONTRATISTAS OPERATIVOS' | titlecase }}</b>\r\n                    </ion-label>\r\n                    <div class=\"wrap-text\">\r\n                        <a routerLink=\"/oper-contractors/{{ operMachine?.oper_contractor?.id }}/edit\">{{ operMachine?.oper_contractor?.name }}</a>\r\n                    </div>\r\n                </ion-item>\r\n                <ion-item class=\"item-transparent\">\r\n                    <ion-label position=\"fixed\">\r\n                        <b>{{ 'OPERATIVIDAD MTTO PREVENTIVOS' | titlecase }}</b>\r\n                    </ion-label>\r\n                    <div class=\"wrap-text\">\r\n                        <ng-container *ngIf=\"operMachine?.oper_preventive_maintenances?.length\">\r\n                            <ng-container *ngFor=\"let operPreventiveMaintenance of operMachine?.oper_preventive_maintenances; let last = last\">\r\n                                <a routerLink=\"/oper-preventive-maintenances/{{ operPreventiveMaintenance?.id }}/edit\">{{ operPreventiveMaintenance?.name }}</a>\r\n                                <span *ngIf=\"!last\">, </span>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                    </div>\r\n                </ion-item>\r\n                <ion-item class=\"item-transparent\">\r\n                    <ion-label position=\"fixed\">\r\n                        <b>{{ 'OPERATIVIDAD REPUESTOS' | titlecase }}</b>\r\n                    </ion-label>\r\n                    <div class=\"wrap-text\">\r\n                        <ng-container *ngIf=\"operMachine?.oper_replacements?.length\">\r\n                            <ng-container *ngFor=\"let operReplacement of operMachine?.oper_replacements; let last = last\">\r\n                                <a routerLink=\"/oper-replacements/{{ operReplacement?.id }}/edit\">{{ operReplacement?.name }}</a>\r\n                                <span *ngIf=\"!last\">, </span>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                    </div>\r\n                </ion-item>\r\n            </ion-list>\r\n            <ion-footer>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"success\"\r\n                                    size=\"small\"\r\n                                    fill=\"clear\"\r\n                                    [routerLink]=\"'/oper-machines/' + operMachine?.id + '/edit'\">\r\n                            <ion-icon name=\"create-outline\"></ion-icon>\r\n                            <div>Editar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"danger\"\r\n                                    size=\"small\"\r\n                                    fill=\"clear\"\r\n                                    (click)=\"operMachinesService.deleteOperMachine(operMachine?.id)\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            <div>Eliminar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-footer>\r\n        </ion-card>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && !operMachinesService.operMachines?.length\">\r\n        <ion-item>\r\n            <ion-icon class=\"text-warning\"\r\n                      name=\"warning-outline\"\r\n                      slot=\"start\"></ion-icon>\r\n            <ion-label><h2>No se encontraron {{'OPERATIVIDAD MAQUINARIA' | titlecase}}</h2></ion-label>\r\n            <ion-button [routerLink]=\"'/oper-machines/create'\"\r\n                        fill=\"outline\"\r\n                        color=\"success\"\r\n                        slot=\"end\">\r\n                Crear {{'OPERATIVIDAD MAQUINARIA' | titlecase}}\r\n                <ion-icon name=\"add-circle-outline\"\r\n                          slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"operMachinesService.meta\">\r\n        <ion-col class=\"ion-text-center\"\r\n                 size=\"12\">\r\n            <ion-button (click)=\"operMachinesService.getOperMachines(operMachinesService.meta.current_page - 1)\"\r\n                        [disabled]=\"operMachinesService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\"\r\n                          name=\"play-outline\"\r\n                          style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\"\r\n                        [disabled]=\"true\"> Pag: {{operMachinesService.meta.current_page}}\r\n                                           /{{operMachinesService.meta.last_page}} {{operMachinesService.meta.from}}\r\n                                           -{{operMachinesService.meta.to}}\r\n                                           /{{operMachinesService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"operMachinesService.getOperMachines(operMachinesService.meta.current_page + 1)\"\r\n                        [disabled]=\"operMachinesService.meta.current_page == operMachinesService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\"\r\n                          name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"OPERATIVIDAD MAQUINARIA\"></app-main-header>\r\n\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/oper-machines/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'OPERATIVIDAD MAQUINARIA'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/oper-machines/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'OPERATIVIDAD MAQUINARIA' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/oper-machines/oper-machines-create/oper-machines-create.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/oper-machines/oper-machines-create/oper-machines-create.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbWFjaGluZXMvb3Blci1tYWNoaW5lcy1jcmVhdGUvb3Blci1tYWNoaW5lcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-machines/oper-machines-create/oper-machines-create.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/oper-machines/oper-machines-create/oper-machines-create.component.ts ***!
  \**************************************************************************************/
/*! exports provided: OperMachinesCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMachinesCreateComponent", function() { return OperMachinesCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_machines_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-machines.service */ "./src/app/oper-machines/oper-machines.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let OperMachinesCreateComponent = class OperMachinesCreateComponent {
    constructor(operMachinesService, route, platform, splitPanel) {
        this.operMachinesService = operMachinesService;
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
        this.operMachineForm.operMachinesForm.valueChanges.subscribe((data) => {
            this.operMachinesService.operMachinesFormValid.next(this.operMachineForm.operMachinesForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.operMachinesService.createOperMachine();
        this.operMachinesService.operMachine = {};
    }
};
OperMachinesCreateComponent.ctorParameters = () => [
    { type: _oper_machines_service__WEBPACK_IMPORTED_MODULE_2__["OperMachinesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
OperMachinesCreateComponent.propDecorators = {
    operMachineForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operMachineForm',] }]
};
OperMachinesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-machines-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-machines-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-create/oper-machines-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-machines-create.component.scss */ "./src/app/oper-machines/oper-machines-create/oper-machines-create.component.scss")).default]
    })
], OperMachinesCreateComponent);



/***/ }),

/***/ "./src/app/oper-machines/oper-machines-duplicate/oper-machines-duplicate.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/oper-machines/oper-machines-duplicate/oper-machines-duplicate.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbWFjaGluZXMvb3Blci1tYWNoaW5lcy1kdXBsaWNhdGUvb3Blci1tYWNoaW5lcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-machines/oper-machines-duplicate/oper-machines-duplicate.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/oper-machines/oper-machines-duplicate/oper-machines-duplicate.component.ts ***!
  \********************************************************************************************/
/*! exports provided: OperMachinesDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMachinesDuplicateComponent", function() { return OperMachinesDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OperMachinesDuplicateComponent = class OperMachinesDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
OperMachinesDuplicateComponent.ctorParameters = () => [];
OperMachinesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-machines-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-machines-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-duplicate/oper-machines-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-machines-duplicate.component.scss */ "./src/app/oper-machines/oper-machines-duplicate/oper-machines-duplicate.component.scss")).default]
    })
], OperMachinesDuplicateComponent);



/***/ }),

/***/ "./src/app/oper-machines/oper-machines-edit/oper-machines-edit.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/oper-machines/oper-machines-edit/oper-machines-edit.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbWFjaGluZXMvb3Blci1tYWNoaW5lcy1lZGl0L29wZXItbWFjaGluZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-machines/oper-machines-edit/oper-machines-edit.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/oper-machines/oper-machines-edit/oper-machines-edit.component.ts ***!
  \**********************************************************************************/
/*! exports provided: OperMachinesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMachinesEditComponent", function() { return OperMachinesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_machines_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-machines.service */ "./src/app/oper-machines/oper-machines.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let OperMachinesEditComponent = class OperMachinesEditComponent {
    constructor(operMachinesService, route, platform, splitPanel) {
        this.operMachinesService = operMachinesService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.operMachinesService.editOperMachine(this.id);
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    ngAfterViewInit() {
        this.operMachineForm.operMachinesForm.valueChanges.subscribe((data) => {
            this.operMachinesService.operMachinesFormValid.next(this.operMachineForm.operMachinesForm.valid);
        });
    }
};
OperMachinesEditComponent.ctorParameters = () => [
    { type: _oper_machines_service__WEBPACK_IMPORTED_MODULE_2__["OperMachinesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
OperMachinesEditComponent.propDecorators = {
    operMachineForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operMachineForm',] }]
};
OperMachinesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-machines-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-machines-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-edit/oper-machines-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-machines-edit.component.scss */ "./src/app/oper-machines/oper-machines-edit/oper-machines-edit.component.scss")).default]
    })
], OperMachinesEditComponent);



/***/ }),

/***/ "./src/app/oper-machines/oper-machines-form/oper-machines-form.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/oper-machines/oper-machines-form/oper-machines-form.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* generated section */\n/* end generated section */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blci1tYWNoaW5lcy9vcGVyLW1hY2hpbmVzLWZvcm0vb3Blci1tYWNoaW5lcy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFBO0FBRUEsMEJBQUEiLCJmaWxlIjoic3JjL2FwcC9vcGVyLW1hY2hpbmVzL29wZXItbWFjaGluZXMtZm9ybS9vcGVyLW1hY2hpbmVzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnZW5lcmF0ZWQgc2VjdGlvbiAqL1xyXG5cclxuLyogZW5kIGdlbmVyYXRlZCBzZWN0aW9uICovXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/oper-machines/oper-machines-form/oper-machines-form.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/oper-machines/oper-machines-form/oper-machines-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: OperMachinesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMachinesFormComponent", function() { return OperMachinesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_machines_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-machines.service */ "./src/app/oper-machines/oper-machines.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let OperMachinesFormComponent = class OperMachinesFormComponent {
    constructor(operMachinesService, toTitlecase) {
        this.operMachinesService = operMachinesService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'hous_unit_area_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('AREA') + ' es obligatorio.' },
            ],
            'oper_contractor_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CONTRATISTA') + ' es obligatorio.' },
            ],
            'contract_expiration_date': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('FECHA VENCIMIENTO CONTRATO') + ' es obligatorio.' },
            ],
            'contract_monthly_price': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('VALOR MENSUAL') + ' es obligatorio.' },
            ],
            'monthly_periodicity': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('PERIODICIDAD MENSUAL') + ' es obligatorio.' },
            ],
            'oper_preventive_maintenance_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('OPERATIVIDAD MTTO PREVENTIVOS') + ' es obligatorio.' },
            ],
            'oper_replacement_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('OPERATIVIDAD REPUESTOS') + ' es obligatorio.' },
            ],
            'inventory_code': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO INVENTARIO') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setHousUnitAreaId
    setHousUnitAreaId(event) {
        this.operMachinesService.operMachine.hous_unit_area_id = event.value ? event.value.id : null;
    }
    // end setHousUnitAreaId
    // set setOperContractorId
    setOperContractorId(event) {
        this.operMachinesService.operMachine.oper_contractor_id = event.value ? event.value.id : null;
    }
    // end setOperContractorId
    // set setOperPreventiveMaintenanceIds
    setOperPreventiveMaintenanceIds(event) {
        let operPreventiveMaintenanceIds = null;
        if (event.value.length) {
            operPreventiveMaintenanceIds = [];
            for (let i = 0; i < event.value.length; i++) {
                operPreventiveMaintenanceIds.push(event.value[i].id);
            }
        }
        this.operMachinesService.operMachine.oper_preventive_maintenance_ids = operPreventiveMaintenanceIds;
    }
    // end setOperPreventiveMaintenanceIds
    // set setOperReplacementIds
    setOperReplacementIds(event) {
        let operReplacementIds = null;
        if (event.value.length) {
            operReplacementIds = [];
            for (let i = 0; i < event.value.length; i++) {
                operReplacementIds.push(event.value[i].id);
            }
        }
        this.operMachinesService.operMachine.oper_replacement_ids = operReplacementIds;
    }
};
OperMachinesFormComponent.ctorParameters = () => [
    { type: _oper_machines_service__WEBPACK_IMPORTED_MODULE_2__["OperMachinesService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
OperMachinesFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    operMachinesForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operMachinesForm',] }]
};
OperMachinesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-machines-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-machines-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-form/oper-machines-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-machines-form.component.scss */ "./src/app/oper-machines/oper-machines-form/oper-machines-form.component.scss")).default]
    })
], OperMachinesFormComponent);



/***/ }),

/***/ "./src/app/oper-machines/oper-machines-list/oper-machines-list.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/oper-machines/oper-machines-list/oper-machines-list.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbWFjaGluZXMvb3Blci1tYWNoaW5lcy1saXN0L29wZXItbWFjaGluZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-machines/oper-machines-list/oper-machines-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/oper-machines/oper-machines-list/oper-machines-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: OperMachinesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMachinesListComponent", function() { return OperMachinesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_machines_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-machines.service */ "./src/app/oper-machines/oper-machines.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");







let OperMachinesListComponent = class OperMachinesListComponent {
    constructor(operMachinesService, api, loading, splitPanel) {
        this.operMachinesService = operMachinesService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
        this.operMachinesService.getOperMachines();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
OperMachinesListComponent.ctorParameters = () => [
    { type: _oper_machines_service__WEBPACK_IMPORTED_MODULE_2__["OperMachinesService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] }
];
OperMachinesListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
OperMachinesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-machines-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-machines-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-list/oper-machines-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-machines-list.component.scss */ "./src/app/oper-machines/oper-machines-list/oper-machines-list.component.scss")).default]
    })
], OperMachinesListComponent);



/***/ }),

/***/ "./src/app/oper-machines/oper-machines-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/oper-machines/oper-machines-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: OperMachinesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMachinesPageRoutingModule", function() { return OperMachinesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _oper_machines_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oper-machines.page */ "./src/app/oper-machines/oper-machines.page.ts");
/* harmony import */ var _oper_machines_edit_oper_machines_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oper-machines-edit/oper-machines-edit.component */ "./src/app/oper-machines/oper-machines-edit/oper-machines-edit.component.ts");
/* harmony import */ var _oper_machines_create_oper_machines_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oper-machines-create/oper-machines-create.component */ "./src/app/oper-machines/oper-machines-create/oper-machines-create.component.ts");
/* harmony import */ var _oper_machines_list_oper_machines_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oper-machines-list/oper-machines-list.component */ "./src/app/oper-machines/oper-machines-list/oper-machines-list.component.ts");







const routes = [
    // generated section
    {
        path: '',
        data: {
            title: 'OPERATIVIDAD MAQUINARIA',
            roles: ['admin'],
        },
        component: _oper_machines_page__WEBPACK_IMPORTED_MODULE_3__["OperMachinesPage"]
    },
    {
        path: 'list',
        data: {
            title: 'OPERATIVIDAD MAQUINARIA',
            roles: ['admin'],
        },
        component: _oper_machines_list_oper_machines_list_component__WEBPACK_IMPORTED_MODULE_6__["OperMachinesListComponent"]
    },
    {
        path: 'create',
        data: {
            title: 'OPERATIVIDAD MAQUINARIA',
            roles: ['admin'],
        },
        component: _oper_machines_create_oper_machines_create_component__WEBPACK_IMPORTED_MODULE_5__["OperMachinesCreateComponent"]
    },
    {
        path: ':id/edit',
        data: {
            title: 'OPERATIVIDAD MAQUINARIA',
            roles: ['admin'],
        },
        component: _oper_machines_edit_oper_machines_edit_component__WEBPACK_IMPORTED_MODULE_4__["OperMachinesEditComponent"]
    },
];
// end generated section
let OperMachinesPageRoutingModule = class OperMachinesPageRoutingModule {
};
OperMachinesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], OperMachinesPageRoutingModule);



/***/ }),

/***/ "./src/app/oper-machines/oper-machines.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/oper-machines/oper-machines.module.ts ***!
  \*******************************************************/
/*! exports provided: OperMachinesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMachinesPageModule", function() { return OperMachinesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _oper_machines_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oper-machines-routing.module */ "./src/app/oper-machines/oper-machines-routing.module.ts");
/* harmony import */ var _oper_machines_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./oper-machines.page */ "./src/app/oper-machines/oper-machines.page.ts");
/* harmony import */ var _oper_machines_list_oper_machines_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./oper-machines-list/oper-machines-list.component */ "./src/app/oper-machines/oper-machines-list/oper-machines-list.component.ts");
/* harmony import */ var _oper_machines_create_oper_machines_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./oper-machines-create/oper-machines-create.component */ "./src/app/oper-machines/oper-machines-create/oper-machines-create.component.ts");
/* harmony import */ var _oper_machines_duplicate_oper_machines_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./oper-machines-duplicate/oper-machines-duplicate.component */ "./src/app/oper-machines/oper-machines-duplicate/oper-machines-duplicate.component.ts");
/* harmony import */ var _oper_machines_edit_oper_machines_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./oper-machines-edit/oper-machines-edit.component */ "./src/app/oper-machines/oper-machines-edit/oper-machines-edit.component.ts");
/* harmony import */ var _oper_machines_form_oper_machines_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./oper-machines-form/oper-machines-form.component */ "./src/app/oper-machines/oper-machines-form/oper-machines-form.component.ts");













let OperMachinesPageModule = class OperMachinesPageModule {
};
OperMachinesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            // imports generated section
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _oper_machines_routing_module__WEBPACK_IMPORTED_MODULE_6__["OperMachinesPageRoutingModule"]
            // end imports generated section
        ],
        declarations: [
            // declarations generated section
            _oper_machines_page__WEBPACK_IMPORTED_MODULE_7__["OperMachinesPage"],
            _oper_machines_list_oper_machines_list_component__WEBPACK_IMPORTED_MODULE_8__["OperMachinesListComponent"],
            _oper_machines_create_oper_machines_create_component__WEBPACK_IMPORTED_MODULE_9__["OperMachinesCreateComponent"],
            _oper_machines_duplicate_oper_machines_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["OperMachinesDuplicateComponent"],
            _oper_machines_edit_oper_machines_edit_component__WEBPACK_IMPORTED_MODULE_11__["OperMachinesEditComponent"],
            _oper_machines_form_oper_machines_form_component__WEBPACK_IMPORTED_MODULE_12__["OperMachinesFormComponent"],
        ]
    })
], OperMachinesPageModule);



/***/ }),

/***/ "./src/app/oper-machines/oper-machines.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/oper-machines/oper-machines.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbWFjaGluZXMvb3Blci1tYWNoaW5lcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-machines/oper-machines.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/oper-machines/oper-machines.page.ts ***!
  \*****************************************************/
/*! exports provided: OperMachinesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMachinesPage", function() { return OperMachinesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");



let OperMachinesPage = class OperMachinesPage {
    constructor(splitPanel) {
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
};
OperMachinesPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] }
];
OperMachinesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-machines',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-machines.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-machines.page.scss */ "./src/app/oper-machines/oper-machines.page.scss")).default]
    })
], OperMachinesPage);



/***/ }),

/***/ "./src/app/oper-machines/oper-machines.service.ts":
/*!********************************************************!*\
  !*** ./src/app/oper-machines/oper-machines.service.ts ***!
  \********************************************************/
/*! exports provided: OperMachinesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMachinesService", function() { return OperMachinesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let OperMachinesService = class OperMachinesService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.operMachinesUrl = 'oper-machines';
        this.operMachinesFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.operMachines = [];
        this.operMachine = {};
        this.operMachineLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    // generated section
    getOperMachines(page = this.page, perPage = this.perPage) {
        this.api.get(this.operMachinesUrl +
            '?page=' + page +
            '&perPage=' + perPage +
            '&q[name:cont]=' + this.searchValue +
            '&q[inventory_code:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.operMachines = res.data;
            this.operMachineLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editOperMachine(id) {
        this.api.get(this.operMachinesUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.operMachine = res.data.model;
            this.operMachineLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateOperMachine() {
        this.api.put(this.operMachinesUrl + '/' + this.operMachine.id, {
            model: this.operMachine,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getOperMachines(1);
        });
    }
    createOperMachine() {
        this.api.get(this.operMachinesUrl + '/create')
            .subscribe((res) => {
            this.operMachine = {};
            this.operMachineLists = res.lists;
        });
    }
    storeOperMachine() {
        this.api.post(this.operMachinesUrl, {
            model: this.operMachine,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getOperMachines(1);
        });
    }
    deleteOperMachine(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.operMachinesUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getOperMachines(1);
                });
            }
            else {
                return;
            }
        });
    }
};
OperMachinesService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
OperMachinesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OperMachinesService);



/***/ })

}]);
//# sourceMappingURL=oper-machines-oper-machines-module-es2015.js.map