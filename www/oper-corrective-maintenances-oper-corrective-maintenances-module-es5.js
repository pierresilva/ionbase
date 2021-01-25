(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oper-corrective-maintenances-oper-corrective-maintenances-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-create/oper-corrective-maintenances-create.component.html":
    /*!***************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-create/oper-corrective-maintenances-create.component.html ***!
      \***************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperCorrectiveMaintenancesOperCorrectiveMaintenancesCreateOperCorrectiveMaintenancesCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/oper-corrective-maintenances'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"operCorrectiveMaintenancesService.storeOperCorrectiveMaintenance()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!operCorrectiveMaintenancesService.operCorrectiveMaintenancesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'OPERATIVIDAD MTTO CORRECTIVOS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-oper-corrective-maintenances-form #operCorrectiveMaintenanceForm [model]=\"operCorrectiveMaintenancesService.operCorrectiveMaintenance\"></app-oper-corrective-maintenances-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-duplicate/oper-corrective-maintenances-duplicate.component.html":
    /*!*********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-duplicate/oper-corrective-maintenances-duplicate.component.html ***!
      \*********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperCorrectiveMaintenancesOperCorrectiveMaintenancesDuplicateOperCorrectiveMaintenancesDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  OperCorrectiveMaintenances duplicate works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component.html":
    /*!***********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component.html ***!
      \***********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperCorrectiveMaintenancesOperCorrectiveMaintenancesEditOperCorrectiveMaintenancesEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/oper-corrective-maintenances'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"operCorrectiveMaintenancesService.updateOperCorrectiveMaintenance()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!operCorrectiveMaintenancesService.operCorrectiveMaintenancesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'OPERATIVIDAD MTTO CORRECTIVOS' | titlecase}}: {{ operCorrectiveMaintenancesService.operCorrectiveMaintenance?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-oper-corrective-maintenances-form #operCorrectiveMaintenanceForm [model]=\"operCorrectiveMaintenancesService.operCorrectiveMaintenance\"></app-oper-corrective-maintenances-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-form/oper-corrective-maintenances-form.component.html":
    /*!***********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-form/oper-corrective-maintenances-form.component.html ***!
      \***********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperCorrectiveMaintenancesOperCorrectiveMaintenancesFormOperCorrectiveMaintenancesFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #operCorrectiveMaintenancesForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- oper_reason_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'MOTIVO' | titlecase }}</ion-label>\n        <ionic-selectable name=\"oper_reason_id\"\n                          id=\"oper_reason_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.oper_reason\"\n                          [items]=\"operCorrectiveMaintenancesService.operCorrectiveMaintenanceLists.OperReason\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('OPERATIVIDAD MOTIVOS MTTO CORRECTIVO' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('OPERATIVIDAD MOTIVOS MTTO CORRECTIVO' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setOperReasonId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.oper_reason_id\">\n            <div class=\"error-message\" *ngIf=\"operCorrectiveMaintenancesForm.form.controls['oper_reason_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end oper_reason_id -->\n\n\n    <!-- hous_unit_area_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'AREA' | titlecase }}</ion-label>\n        <ionic-selectable name=\"hous_unit_area_id\"\n                          id=\"hous_unit_area_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.hous_unit_area\"\n                          [items]=\"operCorrectiveMaintenancesService.operCorrectiveMaintenanceLists.HousUnitArea\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('UNIDADES HABITACIONALES AREAS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('UNIDADES HABITACIONALES AREAS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setHousUnitAreaId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.hous_unit_area_id\">\n            <div class=\"error-message\" *ngIf=\"operCorrectiveMaintenancesForm.form.controls['hous_unit_area_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end hous_unit_area_id -->\n\n\n    <!-- oper_item_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'ITEMS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"oper_item_ids\"\n                          id=\"oper_item_ids-field\"\n                          [(ngModel)]=\"model.oper_items\"\n                          [items]=\"operCorrectiveMaintenancesService.operCorrectiveMaintenanceLists.OperItem\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('OPERATIVIDAD ITEMS MTTO CORRECTIVO' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('OPERATIVIDAD ITEMS MTTO CORRECTIVO' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setOperItemIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.oper_item_ids\">\n            <div class=\"error-message\" *ngIf=\"operCorrectiveMaintenancesForm.form.controls['oper_item_ids']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end oper_item_ids -->\n\n\n    <!-- oper_maintenance_repair_ids -->\n    <!--<ion-item class=\"item-transparent\">\n        <ion-label>{{ 'OPERATIVIDAD REPARACIONES' | titlecase }}</ion-label>\n        <ionic-selectable name=\"oper_maintenance_repair_ids\"\n                          id=\"oper_maintenance_repair_ids-field\"\n                          [(ngModel)]=\"model.oper_maintenance_repairs\"\n                          [items]=\"operCorrectiveMaintenancesService.operCorrectiveMaintenanceLists.OperMaintenanceRepair\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('OPERATIVIDAD REPARACIONES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('OPERATIVIDAD REPARACIONES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setOperMaintenanceRepairIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.oper_maintenance_repair_ids\">\n            <div class=\"error-message\" *ngIf=\"operCorrectiveMaintenancesForm.form.controls['oper_maintenance_repair_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>-->\n    <!-- end oper_maintenance_repair_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"operCorrectiveMaintenancesForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- detail -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'DETALLE' | titlecase }}</ion-label>\n                <ion-textarea [(ngModel)]=\"model.detail\"\n                              name=\"detail\"\n                              id=\"detail-field\"\n                              rows=\"6\"\n                              placeholder=\"\"></ion-textarea>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.detail\">\n                    <div class=\"error-message\" *ngIf=\"operCorrectiveMaintenancesForm.form.controls['detail']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end detail -->\n\n\n            <!-- date -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'FECHA' | titlecase }}</ion-label>\n                <ion-datetime name=\"date\"\n                              id=\"date-field\"\n                              [doneText]=\"'Seleccionar'\"\n                              [cancelText]=\"'Cancelar'\"\n                              [(ngModel)]=\"model.date\"\n                              displayFormat=\"DD/MM/YYYY\"></ion-datetime>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.date\">\n                    <div class=\"error-message\" *ngIf=\"operCorrectiveMaintenancesForm.form.controls['date']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end date -->\n\n\n            <!-- time -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'HORA' | titlecase }}</ion-label>\n                <ion-datetime name=\"time\"\n                              id=\"time-field\"\n                              [doneText]=\"'Seleccionar'\"\n                              [cancelText]=\"'Cancelar'\"\n                              [(ngModel)]=\"model.time\"\n                              displayFormat=\"HH:mm\"></ion-datetime>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.time\">\n                    <div class=\"error-message\" *ngIf=\"operCorrectiveMaintenancesForm.form.controls['time']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end time -->\n\n\n            <!-- reported_by -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'REPORTADO POR' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.reported_by\"\n                            type=\"text\"\n                            name=\"reported_by\"\n                            id=\"reported_by-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.reported_by\">\n                    <div class=\"error-message\" *ngIf=\"operCorrectiveMaintenancesForm.form.controls['reported_by']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end reported_by -->\n\n\n            <!-- status -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'ESTADO' | titlecase }}</ion-label>\n                <ion-select [(ngModel)]=\"model.status\"\n                            name=\"status\"\n                            id=\"status-field\"\n                            okText=\"Seleccionar\"\n                            cancelText=\"Cancelar\">\n                    <ion-select-option value=\"\">{{ 'Ninguno' | titlecase }}</ion-select-option>\n                    <ion-select-option value=\"pending\">{{ 'Pendiente' | titlecase }}</ion-select-option>\n                    <ion-select-option value=\"resolved\">{{ 'Resuelto' | titlecase }}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessages.status\">\n                <div class=\"error-message\" *ngIf=\"operCorrectiveMaintenancesForm.form.controls['status']?.hasError(validation.type)\">\n                    {{ validation.message }}\n                </div>\n            </ng-container>\n        </div>\n        <!-- end status -->\n\n\n</form>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-list/oper-corrective-maintenances-list.component.html":
    /*!***********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-list/oper-corrective-maintenances-list.component.html ***!
      \***********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperCorrectiveMaintenancesOperCorrectiveMaintenancesListOperCorrectiveMaintenancesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'OPERATIVIDAD MTTO CORRECTIVOS' | titlecase}}\"\n                 primaryLink=\"oper-corrective-maintenances/create\"\n                 primaryText=\"Crear {{'OPERATIVIDAD MTTO CORRECTIVOS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-grid>\n        <ion-row class=\"ion-align-items-start\">\n            <ion-col size=\"12\">\n                <ion-searchbar showCancelButton=\"focus\"\n                               [cancelButtonText]=\"'Cancelar'\"\n                               [placeholder]=\"'Buscar ' + ('OPERATIVIDAD MTTO CORRECTIVOS' | lowercase )\"\n                               (ionCancel)=\"this.operCorrectiveMaintenancesService.searchValue = ''; operCorrectiveMaintenancesService.getOperCorrectiveMaintenances()\"\n                               (keyup.enter)=\"operCorrectiveMaintenancesService.getOperCorrectiveMaintenances()\"\n                               [(ngModel)]=\"operCorrectiveMaintenancesService.searchValue\"></ion-searchbar>\n            </ion-col>\n            <ion-col [size]=\"6\"\n                     [offset]=\"3\">\n                <ion-segment (ionChange)=\"segmentChanged($event)\">\n                    <ion-segment-button value=\"pending\">\n                        <ion-label>Pendientes</ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button value=\"resolved\">\n                        <ion-label>Resueltos</ion-label>\n                    </ion-segment-button>\n                </ion-segment>\n            </ion-col>\n            <ion-col size=\"12\"\n                     class=\"ion-text-center\"\n                     *ngIf=\"resolved\">\n                <ion-button size=\"sm\"\n                            (click)=\"openCalendar()\">Filtrar por fecha de solución\n                </ion-button>\n            </ion-col>\n            <ion-col size=\"12\">\n                <ng-container *ngIf=\"!(loading.loading | async) && operCorrectiveMaintenancesService.operCorrectiveMaintenances?.length\">\n                    <ion-card *ngFor=\"let operCorrectiveMaintenance of operCorrectiveMaintenancesService.operCorrectiveMaintenances; let index = index\">\n                        <ion-list>\n                            <ion-item class=\"item-transparent\">\n                                <ion-label position=\"fixed\">\n                                    <b>{{ 'NOMBRE' | titlecase }}</b>\n                                </ion-label>\n                                <div class=\"wrap-text\">{{ operCorrectiveMaintenance?.name }}</div>\n                            </ion-item>\n                            <ion-item class=\"item-transparent\">\n                                <ion-label position=\"fixed\">\n                                    <b>{{ 'DETALLE' | titlecase }}</b>\n                                </ion-label>\n                                <div class=\"wrap-text\">{{ operCorrectiveMaintenance?.detail }}</div>\n                            </ion-item>\n                            <ion-item class=\"item-transparent\">\n                                <ion-label position=\"fixed\">\n                                    <b>{{ 'FECHA' | titlecase }}</b>\n                                </ion-label>\n                                <div class=\"wrap-text\">{{ operCorrectiveMaintenance?.date | dateFormat:'DD/MM/YYYY' }}</div>\n                            </ion-item>\n                            <ion-item class=\"item-transparent\">\n                                <ion-label position=\"fixed\">\n                                    <b>{{ 'HORA' | titlecase }}</b>\n                                </ion-label>\n                                <div class=\"wrap-text\">{{ operCorrectiveMaintenance?.time | dateFormat:'HH:mm' }}</div>\n                            </ion-item>\n                            <ion-item class=\"item-transparent\">\n                                <ion-label position=\"fixed\">\n                                    <b>{{ 'REPORTADO POR' | titlecase }}</b>\n                                </ion-label>\n                                <div class=\"wrap-text\">{{ operCorrectiveMaintenance?.reported_by }}</div>\n                            </ion-item>\n                            <ion-item class=\"item-transparent\">\n                                <ion-label position=\"fixed\">\n                                    <b>{{ 'ESTADO' | titlecase }}</b>\n                                </ion-label>\n                                <div class=\"wrap-text\">\n                                    {{ operCorrectiveMaintenance?.status | status }}\n                                    <ng-container *ngIf=\"operCorrectiveMaintenance?.status == 'resolved'\">\n                                        {{operCorrectiveMaintenance?.oper_maintenance_repairs[0]?.date | dateFormat:'DD/MM/YYYY'}}\n                                    </ng-container>\n                                </div>\n                            </ion-item>\n                            <ion-item class=\"item-transparent\">\n                                <ion-label position=\"fixed\">\n                                    <b>{{ 'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO' | titlecase }}</b>\n                                </ion-label>\n                                <div class=\"wrap-text\">\n                                    <a routerLink=\"/oper-reasons/{{ operCorrectiveMaintenance?.oper_reason?.id }}/edit\">{{ operCorrectiveMaintenance?.oper_reason?.name }}</a>\n                                </div>\n                            </ion-item>\n                            <ion-item class=\"item-transparent\">\n                                <ion-label position=\"fixed\">\n                                    <b>{{ 'UNIDADES HABITACIONALES AREAS' | titlecase }}</b>\n                                </ion-label>\n                                <div class=\"wrap-text\">\n                                    <a routerLink=\"/hous-unit-areas/{{ operCorrectiveMaintenance?.hous_unit_area?.id }}/edit\">{{ operCorrectiveMaintenance?.hous_unit_area?.name }}</a>\n                                </div>\n                            </ion-item>\n                            <ion-item class=\"item-transparent\">\n                                <ion-label position=\"fixed\">\n                                    <b>{{ 'OPERATIVIDAD ITEMS MTTO CORRECTIVO' | titlecase }}</b>\n                                </ion-label>\n                                <div class=\"wrap-text\">\n                                    <ng-container *ngIf=\"operCorrectiveMaintenance?.oper_items?.length\">\n                                        <ng-container *ngFor=\"let operItem of operCorrectiveMaintenance?.oper_items; let last = last\">\n                                            <a routerLink=\"/oper-items/{{ operItem?.id }}/edit\">{{ operItem?.name }}</a>\n                                            <span *ngIf=\"!last\">, </span>\n                                        </ng-container>\n                                    </ng-container>\n                                </div>\n                            </ion-item>\n                            <ion-item class=\"item-transparent\">\n                                <ion-label position=\"fixed\">\n                                    <b>{{ 'OPERATIVIDAD REPARACIONES' | titlecase }}</b>\n                                </ion-label>\n                                <div class=\"wrap-text\">\n                                    <ng-container *ngIf=\"operCorrectiveMaintenance?.oper_maintenance_repairs?.length\">\n                                        <ng-container *ngFor=\"let operMaintenanceRepair of operCorrectiveMaintenance?.oper_maintenance_repairs; let last = last\">\n                                            <a routerLink=\"/oper-maintenance-repairs/{{ operMaintenanceRepair?.id }}/edit\">{{ operMaintenanceRepair?.name }}</a>\n                                            <span *ngIf=\"!last\">, </span>\n                                        </ng-container>\n                                    </ng-container>\n                                </div>\n                            </ion-item>\n                        </ion-list>\n                        <ion-footer>\n                            <ion-row>\n                                <ion-col class=\"ion-text-center\">\n                                    <ion-button color=\"success\"\n                                                size=\"small\"\n                                                fill=\"clear\"\n                                                [routerLink]=\"'/oper-corrective-maintenances/' + operCorrectiveMaintenance?.id + '/edit'\">\n                                        <ion-icon name=\"create-outline\"></ion-icon>\n                                        <div>Editar</div>\n                                    </ion-button>\n                                </ion-col>\n                                <ion-col class=\"ion-text-center\">\n                                    <ion-button color=\"danger\"\n                                                size=\"small\"\n                                                fill=\"clear\"\n                                                (click)=\"operCorrectiveMaintenancesService.deleteOperCorrectiveMaintenance(operCorrectiveMaintenance?.id)\">\n                                        <ion-icon name=\"trash-outline\"></ion-icon>\n                                        <div>Eliminar</div>\n                                    </ion-button>\n                                </ion-col>\n                                <ion-col class=\"ion-text-center\"\n                                         *ngIf=\"operCorrectiveMaintenance.status == 'pending'\">\n                                    <ion-button size=\"small\"\n                                                fill=\"clear\"\n                                                [routerLink]=\"'/oper-maintenance-repairs/create/' + operCorrectiveMaintenance.id\">\n                                        <ion-icon name=\"checkmark-done-outline\"></ion-icon>\n                                        <div>Solucionar</div>\n                                    </ion-button>\n                                </ion-col>\n                            </ion-row>\n                        </ion-footer>\n                    </ion-card>\n                </ng-container>\n\n                <ng-container *ngIf=\"!(loading.loading | async) && !operCorrectiveMaintenancesService.operCorrectiveMaintenances?.length\">\n                    <ion-item>\n                        <ion-icon class=\"text-warning\"\n                                  name=\"warning-outline\"\n                                  slot=\"start\"></ion-icon>\n                        <ion-label><h2>No se encontraron {{'OPERATIVIDAD MTTO CORRECTIVOS' | titlecase}}</h2>\n                        </ion-label>\n                        <ion-button [routerLink]=\"'/oper-corrective-maintenances/create'\"\n                                    fill=\"outline\"\n                                    color=\"success\"\n                                    slot=\"end\">\n                            Crear {{'OPERATIVIDAD MTTO CORRECTIVOS' | titlecase}}\n                            <ion-icon name=\"add-circle-outline\"\n                                      slot=\"end\"></ion-icon>\n                        </ion-button>\n                    </ion-item>\n                </ng-container>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"operCorrectiveMaintenancesService.meta\">\n        <ion-col class=\"ion-text-center\"\n                 size=\"12\">\n            <ion-button (click)=\"operCorrectiveMaintenancesService.getOperCorrectiveMaintenances(operCorrectiveMaintenancesService.meta.current_page - 1)\"\n                        [disabled]=\"operCorrectiveMaintenancesService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\"\n                          name=\"play-outline\"\n                          style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\"\n                        [disabled]=\"true\"> Pag: {{operCorrectiveMaintenancesService.meta.current_page}}\n                                           /{{operCorrectiveMaintenancesService.meta.last_page}} {{operCorrectiveMaintenancesService.meta.from}}\n                                           -{{operCorrectiveMaintenancesService.meta.to}}\n                                           /{{operCorrectiveMaintenancesService.meta.total}} </ion-button>\n            <ion-button (click)=\"operCorrectiveMaintenancesService.getOperCorrectiveMaintenances(operCorrectiveMaintenancesService.meta.current_page + 1)\"\n                        [disabled]=\"operCorrectiveMaintenancesService.meta.current_page == operCorrectiveMaintenancesService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\"\n                          name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances.page.html":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances.page.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperCorrectiveMaintenancesOperCorrectiveMaintenancesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"OPERATIVIDAD MTTO CORRECTIVOS\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/oper-corrective-maintenances/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'OPERATIVIDAD MTTO CORRECTIVOS'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/oper-corrective-maintenances/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'OPERATIVIDAD MTTO CORRECTIVOS' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-create/oper-corrective-maintenances-create.component.scss":
    /*!*************************************************************************************************************************************!*\
      !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances-create/oper-corrective-maintenances-create.component.scss ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperCorrectiveMaintenancesOperCorrectiveMaintenancesCreateOperCorrectiveMaintenancesCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItY29ycmVjdGl2ZS1tYWludGVuYW5jZXMvb3Blci1jb3JyZWN0aXZlLW1haW50ZW5hbmNlcy1jcmVhdGUvb3Blci1jb3JyZWN0aXZlLW1haW50ZW5hbmNlcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-create/oper-corrective-maintenances-create.component.ts":
    /*!***********************************************************************************************************************************!*\
      !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances-create/oper-corrective-maintenances-create.component.ts ***!
      \***********************************************************************************************************************************/

    /*! exports provided: OperCorrectiveMaintenancesCreateComponent */

    /***/
    function srcAppOperCorrectiveMaintenancesOperCorrectiveMaintenancesCreateOperCorrectiveMaintenancesCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperCorrectiveMaintenancesCreateComponent", function () {
        return OperCorrectiveMaintenancesCreateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _oper_corrective_maintenances_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-corrective-maintenances.service */
      "./src/app/oper-corrective-maintenances/oper-corrective-maintenances.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../@shared/services/split-panel.service */
      "./src/app/@shared/services/split-panel.service.ts");

      var OperCorrectiveMaintenancesCreateComponent = /*#__PURE__*/function () {
        function OperCorrectiveMaintenancesCreateComponent(operCorrectiveMaintenancesService, route, platform, splitPanel) {
          _classCallCheck(this, OperCorrectiveMaintenancesCreateComponent);

          this.operCorrectiveMaintenancesService = operCorrectiveMaintenancesService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.formValid = false;
        }

        _createClass(OperCorrectiveMaintenancesCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.clearPosts();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
            this.operCorrectiveMaintenancesService.createOperCorrectiveMaintenance();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.operCorrectiveMaintenanceForm.operCorrectiveMaintenancesForm.valueChanges.subscribe(function (data) {
              _this.operCorrectiveMaintenancesService.operCorrectiveMaintenancesFormValid.next(_this.operCorrectiveMaintenanceForm.operCorrectiveMaintenancesForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.operCorrectiveMaintenancesService.createOperCorrectiveMaintenance();
            this.operCorrectiveMaintenancesService.operCorrectiveMaintenance = {};
          }
        }]);

        return OperCorrectiveMaintenancesCreateComponent;
      }();

      OperCorrectiveMaintenancesCreateComponent.ctorParameters = function () {
        return [{
          type: _oper_corrective_maintenances_service__WEBPACK_IMPORTED_MODULE_2__["OperCorrectiveMaintenancesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      OperCorrectiveMaintenancesCreateComponent.propDecorators = {
        operCorrectiveMaintenanceForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['operCorrectiveMaintenanceForm']
        }]
      };
      OperCorrectiveMaintenancesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-corrective-maintenances-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-corrective-maintenances-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-create/oper-corrective-maintenances-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-corrective-maintenances-create.component.scss */
        "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-create/oper-corrective-maintenances-create.component.scss"))["default"]]
      })], OperCorrectiveMaintenancesCreateComponent);
      /***/
    },

    /***/
    "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-duplicate/oper-corrective-maintenances-duplicate.component.scss":
    /*!*******************************************************************************************************************************************!*\
      !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances-duplicate/oper-corrective-maintenances-duplicate.component.scss ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperCorrectiveMaintenancesOperCorrectiveMaintenancesDuplicateOperCorrectiveMaintenancesDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItY29ycmVjdGl2ZS1tYWludGVuYW5jZXMvb3Blci1jb3JyZWN0aXZlLW1haW50ZW5hbmNlcy1kdXBsaWNhdGUvb3Blci1jb3JyZWN0aXZlLW1haW50ZW5hbmNlcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-duplicate/oper-corrective-maintenances-duplicate.component.ts":
    /*!*****************************************************************************************************************************************!*\
      !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances-duplicate/oper-corrective-maintenances-duplicate.component.ts ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: OperCorrectiveMaintenancesDuplicateComponent */

    /***/
    function srcAppOperCorrectiveMaintenancesOperCorrectiveMaintenancesDuplicateOperCorrectiveMaintenancesDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperCorrectiveMaintenancesDuplicateComponent", function () {
        return OperCorrectiveMaintenancesDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var OperCorrectiveMaintenancesDuplicateComponent = /*#__PURE__*/function () {
        function OperCorrectiveMaintenancesDuplicateComponent() {
          _classCallCheck(this, OperCorrectiveMaintenancesDuplicateComponent);
        }

        _createClass(OperCorrectiveMaintenancesDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OperCorrectiveMaintenancesDuplicateComponent;
      }();

      OperCorrectiveMaintenancesDuplicateComponent.ctorParameters = function () {
        return [];
      };

      OperCorrectiveMaintenancesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-corrective-maintenances-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-corrective-maintenances-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-duplicate/oper-corrective-maintenances-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-corrective-maintenances-duplicate.component.scss */
        "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-duplicate/oper-corrective-maintenances-duplicate.component.scss"))["default"]]
      })], OperCorrectiveMaintenancesDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component.scss":
    /*!*********************************************************************************************************************************!*\
      !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component.scss ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperCorrectiveMaintenancesOperCorrectiveMaintenancesEditOperCorrectiveMaintenancesEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItY29ycmVjdGl2ZS1tYWludGVuYW5jZXMvb3Blci1jb3JyZWN0aXZlLW1haW50ZW5hbmNlcy1lZGl0L29wZXItY29ycmVjdGl2ZS1tYWludGVuYW5jZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component.ts":
    /*!*******************************************************************************************************************************!*\
      !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: OperCorrectiveMaintenancesEditComponent */

    /***/
    function srcAppOperCorrectiveMaintenancesOperCorrectiveMaintenancesEditOperCorrectiveMaintenancesEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperCorrectiveMaintenancesEditComponent", function () {
        return OperCorrectiveMaintenancesEditComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _oper_corrective_maintenances_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-corrective-maintenances.service */
      "./src/app/oper-corrective-maintenances/oper-corrective-maintenances.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../@shared/services/split-panel.service */
      "./src/app/@shared/services/split-panel.service.ts");

      var OperCorrectiveMaintenancesEditComponent = /*#__PURE__*/function () {
        function OperCorrectiveMaintenancesEditComponent(operCorrectiveMaintenancesService, route, platform, splitPanel) {
          _classCallCheck(this, OperCorrectiveMaintenancesEditComponent);

          this.operCorrectiveMaintenancesService = operCorrectiveMaintenancesService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.model = null;
        }

        _createClass(OperCorrectiveMaintenancesEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.operCorrectiveMaintenancesService.editOperCorrectiveMaintenance(this.id);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            this.operCorrectiveMaintenanceForm.operCorrectiveMaintenancesForm.valueChanges.subscribe(function (data) {
              _this2.operCorrectiveMaintenancesService.operCorrectiveMaintenancesFormValid.next(_this2.operCorrectiveMaintenanceForm.operCorrectiveMaintenancesForm.valid);
            });
          }
        }]);

        return OperCorrectiveMaintenancesEditComponent;
      }();

      OperCorrectiveMaintenancesEditComponent.ctorParameters = function () {
        return [{
          type: _oper_corrective_maintenances_service__WEBPACK_IMPORTED_MODULE_2__["OperCorrectiveMaintenancesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      OperCorrectiveMaintenancesEditComponent.propDecorators = {
        operCorrectiveMaintenanceForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['operCorrectiveMaintenanceForm']
        }]
      };
      OperCorrectiveMaintenancesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-corrective-maintenances-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-corrective-maintenances-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-corrective-maintenances-edit.component.scss */
        "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component.scss"))["default"]]
      })], OperCorrectiveMaintenancesEditComponent);
      /***/
    },

    /***/
    "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-form/oper-corrective-maintenances-form.component.scss":
    /*!*********************************************************************************************************************************!*\
      !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances-form/oper-corrective-maintenances-form.component.scss ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperCorrectiveMaintenancesOperCorrectiveMaintenancesFormOperCorrectiveMaintenancesFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* generated section */\n/* end generated section */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blci1jb3JyZWN0aXZlLW1haW50ZW5hbmNlcy9vcGVyLWNvcnJlY3RpdmUtbWFpbnRlbmFuY2VzLWZvcm0vb3Blci1jb3JyZWN0aXZlLW1haW50ZW5hbmNlcy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFBO0FBRUEsMEJBQUEiLCJmaWxlIjoic3JjL2FwcC9vcGVyLWNvcnJlY3RpdmUtbWFpbnRlbmFuY2VzL29wZXItY29ycmVjdGl2ZS1tYWludGVuYW5jZXMtZm9ybS9vcGVyLWNvcnJlY3RpdmUtbWFpbnRlbmFuY2VzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnZW5lcmF0ZWQgc2VjdGlvbiAqL1xuXG4vKiBlbmQgZ2VuZXJhdGVkIHNlY3Rpb24gKi9cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-form/oper-corrective-maintenances-form.component.ts":
    /*!*******************************************************************************************************************************!*\
      !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances-form/oper-corrective-maintenances-form.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: OperCorrectiveMaintenancesFormComponent */

    /***/
    function srcAppOperCorrectiveMaintenancesOperCorrectiveMaintenancesFormOperCorrectiveMaintenancesFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperCorrectiveMaintenancesFormComponent", function () {
        return OperCorrectiveMaintenancesFormComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _oper_corrective_maintenances_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-corrective-maintenances.service */
      "./src/app/oper-corrective-maintenances/oper-corrective-maintenances.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var OperCorrectiveMaintenancesFormComponent = /*#__PURE__*/function () {
        function OperCorrectiveMaintenancesFormComponent(operCorrectiveMaintenancesService, toTitlecase) {
          _classCallCheck(this, OperCorrectiveMaintenancesFormComponent);

          this.operCorrectiveMaintenancesService = operCorrectiveMaintenancesService;
          this.toTitlecase = toTitlecase;
          this.model = {};
          this.validationMessages = {
            'name': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'
            }],
            'oper_reason_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('MOTIVO') + ' es obligatorio.'
            }],
            'hous_unit_area_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('ÁREA') + ' es obligatorio.'
            }],
            'detail': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('DETALLE') + ' es obligatorio.'
            }],
            'date': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('FECHA') + ' es obligatorio.'
            }],
            'time': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('HORA') + ' es obligatorio.'
            }],
            'reported_by': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('REPORTADO POR') + ' es obligatorio.'
            }],
            'status': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('ESTADO') + ' es obligatorio.'
            }],
            'oper_item_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('OPERATIVIDAD ITEMS MTTO CORRECTIVO') + ' es obligatorio.'
            }],
            'oper_maintenance_repair_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('OPERATIVIDAD REPARACIONES') + ' es obligatorio.'
            }]
          };
        }

        _createClass(OperCorrectiveMaintenancesFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // set setOperReasonId

        }, {
          key: "setOperReasonId",
          value: function setOperReasonId(event) {
            this.operCorrectiveMaintenancesService.operCorrectiveMaintenance.oper_reason_id = event.value ? event.value.id : null;
          } // end setOperReasonId
          // set setHousUnitAreaId

        }, {
          key: "setHousUnitAreaId",
          value: function setHousUnitAreaId(event) {
            this.operCorrectiveMaintenancesService.operCorrectiveMaintenance.hous_unit_area_id = event.value ? event.value.id : null;
          } // end setHousUnitAreaId
          // set setOperItemIds

        }, {
          key: "setOperItemIds",
          value: function setOperItemIds(event) {
            var operItemIds = null;

            if (event.value.length) {
              operItemIds = [];

              for (var i = 0; i < event.value.length; i++) {
                operItemIds.push(event.value[i].id);
              }
            }

            this.operCorrectiveMaintenancesService.operCorrectiveMaintenance.oper_item_ids = operItemIds;
          } // end setOperItemIds
          // set setOperMaintenanceRepairIds

        }, {
          key: "setOperMaintenanceRepairIds",
          value: function setOperMaintenanceRepairIds(event) {
            var operMaintenanceRepairIds = null;

            if (event.value.length) {
              operMaintenanceRepairIds = [];

              for (var i = 0; i < event.value.length; i++) {
                operMaintenanceRepairIds.push(event.value[i].id);
              }
            }

            this.operCorrectiveMaintenancesService.operCorrectiveMaintenance.oper_maintenance_repair_ids = operMaintenanceRepairIds;
          }
        }]);

        return OperCorrectiveMaintenancesFormComponent;
      }();

      OperCorrectiveMaintenancesFormComponent.ctorParameters = function () {
        return [{
          type: _oper_corrective_maintenances_service__WEBPACK_IMPORTED_MODULE_2__["OperCorrectiveMaintenancesService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      OperCorrectiveMaintenancesFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        operCorrectiveMaintenancesForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['operCorrectiveMaintenancesForm']
        }]
      };
      OperCorrectiveMaintenancesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-corrective-maintenances-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-corrective-maintenances-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-form/oper-corrective-maintenances-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-corrective-maintenances-form.component.scss */
        "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-form/oper-corrective-maintenances-form.component.scss"))["default"]]
      })], OperCorrectiveMaintenancesFormComponent);
      /***/
    },

    /***/
    "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-list/oper-corrective-maintenances-list.component.scss":
    /*!*********************************************************************************************************************************!*\
      !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances-list/oper-corrective-maintenances-list.component.scss ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperCorrectiveMaintenancesOperCorrectiveMaintenancesListOperCorrectiveMaintenancesListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItY29ycmVjdGl2ZS1tYWludGVuYW5jZXMvb3Blci1jb3JyZWN0aXZlLW1haW50ZW5hbmNlcy1saXN0L29wZXItY29ycmVjdGl2ZS1tYWludGVuYW5jZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-list/oper-corrective-maintenances-list.component.ts":
    /*!*******************************************************************************************************************************!*\
      !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances-list/oper-corrective-maintenances-list.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: OperCorrectiveMaintenancesListComponent */

    /***/
    function srcAppOperCorrectiveMaintenancesOperCorrectiveMaintenancesListOperCorrectiveMaintenancesListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperCorrectiveMaintenancesListComponent", function () {
        return OperCorrectiveMaintenancesListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _oper_corrective_maintenances_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-corrective-maintenances.service */
      "./src/app/oper-corrective-maintenances/oper-corrective-maintenances.service.ts");
      /* harmony import */


      var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../@shared/services/api.service */
      "./src/app/@shared/services/api.service.ts");
      /* harmony import */


      var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../@shared/services/loading.service */
      "./src/app/@shared/services/loading.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../@shared/services/split-panel.service */
      "./src/app/@shared/services/split-panel.service.ts");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ion2-calendar */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/index.js");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_7__);

      var OperCorrectiveMaintenancesListComponent = /*#__PURE__*/function () {
        function OperCorrectiveMaintenancesListComponent(operCorrectiveMaintenancesService, api, loading, splitPanel, modal) {
          _classCallCheck(this, OperCorrectiveMaintenancesListComponent);

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

        _createClass(OperCorrectiveMaintenancesListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.operCorrectiveMaintenancesService.getOperCorrectiveMaintenances();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
            this.operCorrectiveMaintenancesService.getOperCorrectiveMaintenances();
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            this.content.scrollToTop(300);
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(event) {
            console.log(event.detail.value);

            if (event.detail.value == 'resolved') {
              this.resolved = true;
            } else {
              this.resolved = false;
            }

            this.operCorrectiveMaintenancesService.getOperCorrectiveMaintenances(this.operCorrectiveMaintenancesService.page, this.operCorrectiveMaintenancesService.perPage, event.detail.value);
          }
        }, {
          key: "openCalendar",
          value: function openCalendar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var options, calendar, event, date, from, to;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      options = {
                        title: 'Filtro por fechas',
                        pickMode: 'range',
                        closeLabel: 'Cancelar',
                        doneLabel: 'OK',
                        clearLabel: 'Limpiar',
                        weekdays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
                        monthFormat: 'MM YYYY',
                        canBackwardsSelected: true
                      };
                      _context.next = 3;
                      return this.modal.create({
                        component: ion2_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModal"],
                        componentProps: {
                          options: options
                        }
                      });

                    case 3:
                      calendar = _context.sent;
                      calendar.present();
                      _context.next = 7;
                      return calendar.onDidDismiss();

                    case 7:
                      event = _context.sent;
                      date = event.data;
                      from = date.from;
                      to = date.to;
                      this.operCorrectiveMaintenancesService.getOperCorrectiveMaintenances(this.operCorrectiveMaintenancesService.page, this.operCorrectiveMaintenancesService.perPage, this.resolved ? 'resolved' : null, from.string, to.string);
                      console.log(date, from.string, to.string);

                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return OperCorrectiveMaintenancesListComponent;
      }();

      OperCorrectiveMaintenancesListComponent.ctorParameters = function () {
        return [{
          type: _oper_corrective_maintenances_service__WEBPACK_IMPORTED_MODULE_2__["OperCorrectiveMaintenancesService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }];
      };

      OperCorrectiveMaintenancesListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      OperCorrectiveMaintenancesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-corrective-maintenances-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-corrective-maintenances-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances-list/oper-corrective-maintenances-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-corrective-maintenances-list.component.scss */
        "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-list/oper-corrective-maintenances-list.component.scss"))["default"]]
      })], OperCorrectiveMaintenancesListComponent);
      /***/
    },

    /***/
    "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-routing.module.ts":
    /*!*********************************************************************************************!*\
      !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances-routing.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: OperCorrectiveMaintenancesPageRoutingModule */

    /***/
    function srcAppOperCorrectiveMaintenancesOperCorrectiveMaintenancesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperCorrectiveMaintenancesPageRoutingModule", function () {
        return OperCorrectiveMaintenancesPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _oper_corrective_maintenances_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./oper-corrective-maintenances.page */
      "./src/app/oper-corrective-maintenances/oper-corrective-maintenances.page.ts");
      /* harmony import */


      var _oper_corrective_maintenances_edit_oper_corrective_maintenances_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component */
      "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component.ts");
      /* harmony import */


      var _oper_corrective_maintenances_create_oper_corrective_maintenances_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./oper-corrective-maintenances-create/oper-corrective-maintenances-create.component */
      "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-create/oper-corrective-maintenances-create.component.ts");
      /* harmony import */


      var _oper_corrective_maintenances_list_oper_corrective_maintenances_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./oper-corrective-maintenances-list/oper-corrective-maintenances-list.component */
      "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-list/oper-corrective-maintenances-list.component.ts");

      var routes = [// generated section
      {
        path: '',
        data: {
          title: 'OPERATIVIDAD MTTO CORRECTIVOS',
          roles: ['admin']
        },
        component: _oper_corrective_maintenances_page__WEBPACK_IMPORTED_MODULE_3__["OperCorrectiveMaintenancesPage"]
      }, {
        path: 'list',
        data: {
          title: 'OPERATIVIDAD MTTO CORRECTIVOS',
          roles: ['admin']
        },
        component: _oper_corrective_maintenances_list_oper_corrective_maintenances_list_component__WEBPACK_IMPORTED_MODULE_6__["OperCorrectiveMaintenancesListComponent"]
      }, {
        path: 'create',
        data: {
          title: 'OPERATIVIDAD MTTO CORRECTIVOS',
          roles: ['admin']
        },
        component: _oper_corrective_maintenances_create_oper_corrective_maintenances_create_component__WEBPACK_IMPORTED_MODULE_5__["OperCorrectiveMaintenancesCreateComponent"]
      }, {
        path: ':id/edit',
        data: {
          title: 'OPERATIVIDAD MTTO CORRECTIVOS',
          roles: ['admin']
        },
        component: _oper_corrective_maintenances_edit_oper_corrective_maintenances_edit_component__WEBPACK_IMPORTED_MODULE_4__["OperCorrectiveMaintenancesEditComponent"]
      }]; // end generated section

      var OperCorrectiveMaintenancesPageRoutingModule = function OperCorrectiveMaintenancesPageRoutingModule() {
        _classCallCheck(this, OperCorrectiveMaintenancesPageRoutingModule);
      };

      OperCorrectiveMaintenancesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OperCorrectiveMaintenancesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/oper-corrective-maintenances/oper-corrective-maintenances.module.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: OperCorrectiveMaintenancesPageModule */

    /***/
    function srcAppOperCorrectiveMaintenancesOperCorrectiveMaintenancesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperCorrectiveMaintenancesPageModule", function () {
        return OperCorrectiveMaintenancesPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../@shared/shared.module */
      "./src/app/@shared/shared.module.ts");
      /* harmony import */


      var _oper_corrective_maintenances_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./oper-corrective-maintenances-routing.module */
      "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-routing.module.ts");
      /* harmony import */


      var _oper_corrective_maintenances_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./oper-corrective-maintenances.page */
      "./src/app/oper-corrective-maintenances/oper-corrective-maintenances.page.ts");
      /* harmony import */


      var _oper_corrective_maintenances_list_oper_corrective_maintenances_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./oper-corrective-maintenances-list/oper-corrective-maintenances-list.component */
      "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-list/oper-corrective-maintenances-list.component.ts");
      /* harmony import */


      var _oper_corrective_maintenances_create_oper_corrective_maintenances_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./oper-corrective-maintenances-create/oper-corrective-maintenances-create.component */
      "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-create/oper-corrective-maintenances-create.component.ts");
      /* harmony import */


      var _oper_corrective_maintenances_duplicate_oper_corrective_maintenances_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./oper-corrective-maintenances-duplicate/oper-corrective-maintenances-duplicate.component */
      "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-duplicate/oper-corrective-maintenances-duplicate.component.ts");
      /* harmony import */


      var _oper_corrective_maintenances_edit_oper_corrective_maintenances_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component */
      "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-edit/oper-corrective-maintenances-edit.component.ts");
      /* harmony import */


      var _oper_corrective_maintenances_form_oper_corrective_maintenances_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./oper-corrective-maintenances-form/oper-corrective-maintenances-form.component */
      "./src/app/oper-corrective-maintenances/oper-corrective-maintenances-form/oper-corrective-maintenances-form.component.ts");

      var OperCorrectiveMaintenancesPageModule = function OperCorrectiveMaintenancesPageModule() {
        _classCallCheck(this, OperCorrectiveMaintenancesPageModule);
      };

      OperCorrectiveMaintenancesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [// imports generated section
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _oper_corrective_maintenances_routing_module__WEBPACK_IMPORTED_MODULE_6__["OperCorrectiveMaintenancesPageRoutingModule"] // end imports generated section
        ],
        declarations: [// declarations generated section
        _oper_corrective_maintenances_page__WEBPACK_IMPORTED_MODULE_7__["OperCorrectiveMaintenancesPage"], _oper_corrective_maintenances_list_oper_corrective_maintenances_list_component__WEBPACK_IMPORTED_MODULE_8__["OperCorrectiveMaintenancesListComponent"], _oper_corrective_maintenances_create_oper_corrective_maintenances_create_component__WEBPACK_IMPORTED_MODULE_9__["OperCorrectiveMaintenancesCreateComponent"], _oper_corrective_maintenances_duplicate_oper_corrective_maintenances_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["OperCorrectiveMaintenancesDuplicateComponent"], _oper_corrective_maintenances_edit_oper_corrective_maintenances_edit_component__WEBPACK_IMPORTED_MODULE_11__["OperCorrectiveMaintenancesEditComponent"], _oper_corrective_maintenances_form_oper_corrective_maintenances_form_component__WEBPACK_IMPORTED_MODULE_12__["OperCorrectiveMaintenancesFormComponent"]]
      })], OperCorrectiveMaintenancesPageModule);
      /***/
    },

    /***/
    "./src/app/oper-corrective-maintenances/oper-corrective-maintenances.page.scss":
    /*!*************************************************************************************!*\
      !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances.page.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperCorrectiveMaintenancesOperCorrectiveMaintenancesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItY29ycmVjdGl2ZS1tYWludGVuYW5jZXMvb3Blci1jb3JyZWN0aXZlLW1haW50ZW5hbmNlcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/oper-corrective-maintenances/oper-corrective-maintenances.page.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances.page.ts ***!
      \***********************************************************************************/

    /*! exports provided: OperCorrectiveMaintenancesPage */

    /***/
    function srcAppOperCorrectiveMaintenancesOperCorrectiveMaintenancesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperCorrectiveMaintenancesPage", function () {
        return OperCorrectiveMaintenancesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../@shared/services/split-panel.service */
      "./src/app/@shared/services/split-panel.service.ts");

      var OperCorrectiveMaintenancesPage = /*#__PURE__*/function () {
        function OperCorrectiveMaintenancesPage(splitPanel) {
          _classCallCheck(this, OperCorrectiveMaintenancesPage);

          this.splitPanel = splitPanel;
        }

        _createClass(OperCorrectiveMaintenancesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }]);

        return OperCorrectiveMaintenancesPage;
      }();

      OperCorrectiveMaintenancesPage.ctorParameters = function () {
        return [{
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"]
        }];
      };

      OperCorrectiveMaintenancesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-corrective-maintenances',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-corrective-maintenances.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-corrective-maintenances/oper-corrective-maintenances.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-corrective-maintenances.page.scss */
        "./src/app/oper-corrective-maintenances/oper-corrective-maintenances.page.scss"))["default"]]
      })], OperCorrectiveMaintenancesPage);
      /***/
    },

    /***/
    "./src/app/oper-corrective-maintenances/oper-corrective-maintenances.service.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/oper-corrective-maintenances/oper-corrective-maintenances.service.ts ***!
      \**************************************************************************************/

    /*! exports provided: OperCorrectiveMaintenancesService */

    /***/
    function srcAppOperCorrectiveMaintenancesOperCorrectiveMaintenancesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperCorrectiveMaintenancesService", function () {
        return OperCorrectiveMaintenancesService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../@shared/services/api.service */
      "./src/app/@shared/services/api.service.ts");
      /* harmony import */


      var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../@shared/services/alert.service */
      "./src/app/@shared/services/alert.service.ts");
      /* harmony import */


      var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../@shared/services/toast.service */
      "./src/app/@shared/services/toast.service.ts");
      /* harmony import */


      var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../@shared/services/navigation.service */
      "./src/app/@shared/services/navigation.service.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

      var OperCorrectiveMaintenancesService = /*#__PURE__*/function () {
        function OperCorrectiveMaintenancesService(api, alert, toast, router, navigation) {
          _classCallCheck(this, OperCorrectiveMaintenancesService);

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
        } // generated section


        _createClass(OperCorrectiveMaintenancesService, [{
          key: "getOperCorrectiveMaintenances",
          value: function getOperCorrectiveMaintenances() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var from = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var to = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            this.api.get(this.operCorrectiveMaintenancesUrl + '?page=' + page + '&perPage=' + perPage + (status ? '&q[status:eq]=' + status : '') + (from ? '&q[operMaintenanceRepairs.date:gt]=' + from : '') + (to ? '&q[operMaintenanceRepairs.date:lt]=' + to : '') + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.operCorrectiveMaintenances = res.data;
              _this3.operCorrectiveMaintenanceLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editOperCorrectiveMaintenance",
          value: function editOperCorrectiveMaintenance(id) {
            var _this4 = this;

            this.api.get(this.operCorrectiveMaintenancesUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.operCorrectiveMaintenance = res.data.model;
              _this4.operCorrectiveMaintenanceLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateOperCorrectiveMaintenance",
          value: function updateOperCorrectiveMaintenance() {
            var _this5 = this;

            this.api.put(this.operCorrectiveMaintenancesUrl + '/' + this.operCorrectiveMaintenance.id, {
              model: this.operCorrectiveMaintenance,
              pivots: {
                oper_item: this.operCorrectiveMaintenance.oper_items
              }
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getOperCorrectiveMaintenances(1);
            });
          }
        }, {
          key: "createOperCorrectiveMaintenance",
          value: function createOperCorrectiveMaintenance() {
            var _this6 = this;

            this.api.get(this.operCorrectiveMaintenancesUrl + '/create').subscribe(function (res) {
              _this6.operCorrectiveMaintenance = {};
              _this6.operCorrectiveMaintenance.date = moment__WEBPACK_IMPORTED_MODULE_8__().format('YYYY-MM-DD');
              _this6.operCorrectiveMaintenance.time = moment__WEBPACK_IMPORTED_MODULE_8__().format('HH:mm');
              _this6.operCorrectiveMaintenance.status = 'pending';
              _this6.operCorrectiveMaintenanceLists = res.lists;
            });
          }
        }, {
          key: "storeOperCorrectiveMaintenance",
          value: function storeOperCorrectiveMaintenance() {
            var _this7 = this;

            this.api.post(this.operCorrectiveMaintenancesUrl, {
              model: this.operCorrectiveMaintenance,
              pivots: {
                oper_item: this.operCorrectiveMaintenance.oper_items
              }
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getOperCorrectiveMaintenances(1);
            });
          }
        }, {
          key: "deleteOperCorrectiveMaintenance",
          value: function deleteOperCorrectiveMaintenance(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this8 = this;

              var confirm;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alert.confirmation('Desea eliminar el item?');

                    case 2:
                      confirm = _context2.sent;

                      if (!confirm) {
                        _context2.next = 7;
                        break;
                      }

                      this.api["delete"](this.operCorrectiveMaintenancesUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getOperCorrectiveMaintenances(1);
                      });
                      _context2.next = 8;
                      break;

                    case 7:
                      return _context2.abrupt("return");

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return OperCorrectiveMaintenancesService;
      }();

      OperCorrectiveMaintenancesService.ctorParameters = function () {
        return [{
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"]
        }];
      };

      OperCorrectiveMaintenancesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], OperCorrectiveMaintenancesService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=oper-corrective-maintenances-oper-corrective-maintenances-module-es5.js.map