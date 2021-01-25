(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oper-schedules-oper-schedules-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedule-contractor-io/oper-schedule-contractor-io.component.html":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedule-contractor-io/oper-schedule-contractor-io.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperSchedulesOperScheduleContractorIoOperScheduleContractorIoComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"Movimientos Operativos\"></app-main-header>\n<ion-content id=\"pages-content\">\n    <zxing-scanner *ngIf=\"browserScanner\"\n                   [(device)]=\"currentDevice\"\n                   [formats]=\"formatsEnabled\"\n                   (scanError)=\"onCodeError($event)\"\n                   (scanSuccess)=\"onCodeResult($event)\"></zxing-scanner>\n\n    <div class=\"ion-text-center\">\n        <ion-button (click)=\"scan()\"\n                    *ngIf=\"!browserScanner\"\n                    fill=\"clear\">Escanear QR\n            <ion-icon slot=\"end\" name=\"qr-code-outline\"></ion-icon>\n        </ion-button>\n    </div>\n    <pre>\n{{barcodeData | json}}\n    </pre>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedule-contractor-list/oper-schedule-contractor-list.component.html":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedule-contractor-list/oper-schedule-contractor-list.component.html ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperSchedulesOperScheduleContractorListOperScheduleContractorListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"Mi Agenda\"></app-main-header>\n<ion-content id=\"pages-content\">\n    <ion-list *ngIf=\"operSchedulesService?.operSchedules?.length\">\n        <ion-item *ngFor=\"let operSchedule of operSchedulesService?.operSchedules\">\n            <ion-label>\n                <h2>{{operSchedule?.name}}</h2>\n                <h3>{{ (operSchedule?.time_start) | dateFormat:'HH:mm'}} - {{(operSchedule?.time_end) | dateFormat:'HH:mm'}}</h3>\n                <p>{{operSchedule?.oper_sector?.name}}</p>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.html":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperSchedulesOperSchedulesCreateOperSchedulesCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/oper-schedules'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"operSchedulesService.storeOperSchedule()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!operSchedulesService.operSchedulesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'OPERATRIVIDAD AGENDAS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-oper-schedules-form #operScheduleForm [model]=\"operSchedulesService.operSchedule\"></app-oper-schedules-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.html":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperSchedulesOperSchedulesDuplicateOperSchedulesDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  OperSchedules duplicate works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperSchedulesOperSchedulesEditOperSchedulesEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/oper-schedules'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"operSchedulesService.updateOperSchedule()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!operSchedulesService.operSchedulesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'OPERATRIVIDAD AGENDAS' | titlecase}}: {{ operSchedulesService.operSchedule?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-oper-schedules-form #operScheduleForm [model]=\"operSchedulesService.operSchedule\"></app-oper-schedules-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperSchedulesOperSchedulesFormOperSchedulesFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #operSchedulesForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- hous_unit_area_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'UNIDADES HABITACIONALES AREA' | titlecase }}</ion-label>\n        <ionic-selectable name=\"hous_unit_area_id\"\n                          id=\"hous_unit_area_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.hous_unit_area\"\n                          [items]=\"operSchedulesService.operScheduleLists.HousUnitArea\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('UNIDADES HABITACIONALES AREAS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('UNIDADES HABITACIONALES AREAS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setHousUnitAreaId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.hous_unit_area_id\">\n            <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['hous_unit_area_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end hous_unit_area_id -->\n\n\n    <!-- oper_sector_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'SECTOR' | titlecase }}</ion-label>\n        <ionic-selectable name=\"oper_sector_id\"\n                          id=\"oper_sector_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.oper_sector\"\n                          [items]=\"operSchedulesService.operScheduleLists.OperSector\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('SECTORES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('SECTORES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setOperSectorId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.oper_sector_id\">\n            <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['oper_sector_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end oper_sector_id -->\n\n\n    <!-- oper_contractor_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'CONTRATISTA' | titlecase }}</ion-label>\n        <ionic-selectable name=\"oper_contractor_id\"\n                          id=\"oper_contractor_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.oper_contractor\"\n                          [items]=\"operSchedulesService.operScheduleLists.OperContractor\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('CONTRATISTA' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('CONTRATISTA' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setOperContractorId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.oper_contractor_id\">\n            <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['oper_contractor_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end oper_contractor_id -->\n\n\n    <!-- oper_movement_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'MOVIMIENTOS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"oper_movement_ids\"\n                          id=\"oper_movement_ids-field\"\n                          [(ngModel)]=\"model.oper_movements\"\n                          [items]=\"operSchedulesService.operScheduleLists.OperMovement\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('MOVIMIENTOS OPERATIVOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('MOVIMIENTOS OPERATIVOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setOperMovementIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.oper_movement_ids\">\n            <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['oper_movement_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end oper_movement_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- required_time -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'TIEMPO REQUERIDO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.required_time\"\n                            type=\"number\"\n                            name=\"required_time\"\n                            id=\"required_time-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.required_time\">\n                    <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['required_time']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end required_time -->\n\n\n            <!-- supervisor_email -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'EMAIL DEL SUPERVISOR' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.supervisor_email\"\n                            type=\"text\"\n                            name=\"supervisor_email\"\n                            id=\"supervisor_email-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.supervisor_email\">\n                    <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['supervisor_email']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end supervisor_email -->\n\n\n            <!-- area_phone -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'TELÉFONO DEL AREA' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.area_phone\"\n                            type=\"text\"\n                            name=\"area_phone\"\n                            id=\"area_phone-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.area_phone\">\n                    <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['area_phone']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end area_phone -->\n\n\n            <!-- time_start -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'HORA INICIAL' | titlecase }}</ion-label>\n                <ion-datetime name=\"time_start\"\n                              id=\"time_start-field\"\n                              [doneText]=\"'Seleccionar'\"\n                              [cancelText]=\"'Cancelar'\"\n                              [(ngModel)]=\"model.time_start\"\n                              displayFormat=\"HH:mm\"></ion-datetime>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.time_start\">\n                    <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['time_start']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end time_start -->\n\n\n            <!-- time_end -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'HORA FINAL' | titlecase }}</ion-label>\n                <ion-datetime name=\"time_end\"\n                              id=\"time_end-field\"\n                              [doneText]=\"'Seleccionar'\"\n                              [cancelText]=\"'Cancelar'\"\n                              [(ngModel)]=\"model.time_end\"\n                              displayFormat=\"HH:mm\"></ion-datetime>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.time_end\">\n                    <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['time_end']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end time_end -->\n\n\n            <!-- periodicity -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'PERIODICIDAD' | titlecase }}</ion-label>\n                <ion-select [(ngModel)]=\"model.periodicity\"\n                            [required]=\"true\"\n                            name=\"periodicity\"\n                            id=\"periodicity-field\"\n                            okText=\"Seleccionar\"\n                            cancelText=\"Cancelar\">\n                    <ion-select-option value=\"\">{{ 'Ninguno' | titlecase }}</ion-select-option>\n                    <ion-select-option value=\"daily\">{{ 'Diario' | titlecase }}</ion-select-option>\n                    <ion-select-option value=\"weekly\">{{ 'Semanal' | titlecase }}</ion-select-option>\n                    <ion-select-option value=\"monthly\">{{ 'Mensual' | titlecase }}</ion-select-option>\n                    <ion-select-option value=\"bimonthly\">{{ 'Bimensual' | titlecase }}</ion-select-option>\n                    <ion-select-option value=\"quarterly\">{{ 'Trimestral' | titlecase }}</ion-select-option>\n                    <ion-select-option value=\"biannual\">{{ 'Semestral' | titlecase }}</ion-select-option>\n                    <ion-select-option value=\"annual\">{{ 'Anual' | titlecase }}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessages.periodicity\">\n                <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['periodicity']?.hasError(validation.type)\">\n                    {{ validation.message }}\n                </div>\n            </ng-container>\n        </div>\n        <!-- end periodicity -->\n\n\n            <!-- repass -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'REQUIERE REPASAR' | titlecase }}</ion-label>\n                <ion-toggle name=\"repass\"\n                            id=\"repass-field\"\n                            slot=\"end\"\n                            [(ngModel)]=\"model.repass\"></ion-toggle>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.repass\">\n                    <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['repass']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end repass -->\n\n\n            <!-- next -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'SIGUIENTE EN' | titlecase }}</ion-label>\n                <ion-datetime name=\"next\"\n                              id=\"next-field\"\n                              [doneText]=\"'Seleccionar'\"\n                              [cancelText]=\"'Cancelar'\"\n                              [(ngModel)]=\"model.next\"\n                              displayFormat=\"DD/MM/YYYY\"></ion-datetime>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.next\">\n                    <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['next']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end next -->\n\n\n</form>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperSchedulesOperSchedulesListOperSchedulesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'OPERATRIVIDAD AGENDAS' | titlecase}}\"\n                 primaryLink=\"oper-schedules/create\"\n                 primaryText=\"Crear {{'OPERATRIVIDAD AGENDAS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('OPERATRIVIDAD AGENDAS' | lowercase )\"\n                       (ionCancel)=\"this.operSchedulesService.searchValue = ''; operSchedulesService.getOperSchedules()\"\n                       (keyup.enter)=\"operSchedulesService.getOperSchedules()\"\n                       [(ngModel)]=\"operSchedulesService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && operSchedulesService.operSchedules?.length\">\n        <ion-card *ngFor=\"let operSchedule of operSchedulesService.operSchedules; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operSchedule?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'TIEMPO REQUERIDO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operSchedule?.required_time }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'EMAIL DEL SUPOERVISOR' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operSchedule?.supervisor_email }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'TELÉFONO DEL AREA' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operSchedule?.area_phone }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'HORA INICIAL' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operSchedule?.time_start | dateFormat:'HH:mm' }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'HORA FINAL' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operSchedule?.time_end | dateFormat:'HH:mm' }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'PERIODICIDAD' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operSchedule?.periodicity | status }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'REQUIERE REPASAR' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operSchedule?.repass  ? 'Si' : 'No' }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'SIGUIENTE EN' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operSchedule?.next | dateFormat:'DD/MM/YYYY' }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'UNIDADES HABITACIONALES AREAS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/hous-unit-areas/{{ operSchedule?.hous_unit_area?.id }}/edit\">{{ operSchedule?.hous_unit_area?.name }}</a></div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'OPERATIVIDAD SECTORES' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/oper-sectors/{{ operSchedule?.oper_sector?.id }}/edit\">{{ operSchedule?.oper_sector?.name }}</a></div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CONTRATISTAS OPERATIVOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/oper-contractors/{{ operSchedule?.oper_contractor?.id }}/edit\">{{ operSchedule?.oper_contractor?.name }}</a></div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'MOVIMIENTOS OPERATIVOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"operSchedule?.oper_movements?.length\">\n                                <ng-container *ngFor=\"let operMovement of operSchedule?.oper_movements; let last = last\">\n                                    <a routerLink=\"/oper-movements/{{ operMovement?.id }}/edit\">{{ operMovement?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/oper-schedules/' + operSchedule?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"operSchedulesService.deleteOperSchedule(operSchedule?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !operSchedulesService.operSchedules?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'OPERATRIVIDAD EGENDAS' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/oper-schedules/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'OPERATRIVIDAD AGENDAS' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"operSchedulesService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"operSchedulesService.getOperSchedules(operSchedulesService.meta.current_page - 1)\"\n                        [disabled]=\"operSchedulesService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{operSchedulesService.meta.current_page}}\n                /{{operSchedulesService.meta.last_page}} {{operSchedulesService.meta.from}}-{{operSchedulesService.meta.to}}\n                /{{operSchedulesService.meta.total}} </ion-button>\n            <ion-button (click)=\"operSchedulesService.getOperSchedules(operSchedulesService.meta.current_page + 1)\"\n                        [disabled]=\"operSchedulesService.meta.current_page == operSchedulesService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperSchedulesOperSchedulesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'OPERATRIVIDAD AGENDAS' | titlecase}}\"\n                 primaryLink=\"oper-schedules/create\"\n                 primaryText=\"Crear {{'OPERATRIVIDAD AGENDAS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/oper-schedules/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'OPERATRIVIDAD AGENDAS'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/oper-schedules/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'OPERATRIVIDAD AGENDAS' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/oper-schedules/oper-schedule-contractor-io/oper-schedule-contractor-io.component.scss":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/oper-schedules/oper-schedule-contractor-io/oper-schedule-contractor-io.component.scss ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperSchedulesOperScheduleContractorIoOperScheduleContractorIoComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2NoZWR1bGVzL29wZXItc2NoZWR1bGUtY29udHJhY3Rvci1pby9vcGVyLXNjaGVkdWxlLWNvbnRyYWN0b3ItaW8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/oper-schedules/oper-schedule-contractor-io/oper-schedule-contractor-io.component.ts":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/oper-schedules/oper-schedule-contractor-io/oper-schedule-contractor-io.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: OperScheduleContractorIoComponent */

    /***/
    function srcAppOperSchedulesOperScheduleContractorIoOperScheduleContractorIoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperScheduleContractorIoComponent", function () {
        return OperScheduleContractorIoComponent;
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


      var _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-schedules.service */
      "./src/app/oper-schedules/oper-schedules.service.ts");
      /* harmony import */


      var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../@shared/services/api.service */
      "./src/app/@shared/services/api.service.ts");
      /* harmony import */


      var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../@shared/services/loading.service */
      "./src/app/@shared/services/loading.service.ts");
      /* harmony import */


      var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../@shared/services/split-panel.service */
      "./src/app/@shared/services/split-panel.service.ts");
      /* harmony import */


      var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/barcode-scanner/ngx */
      "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _zxing_library__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @zxing/library */
      "./node_modules/@zxing/library/umd/index.js");
      /* harmony import */


      var _zxing_library__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_8__);

      var OperScheduleContractorIoComponent = /*#__PURE__*/function () {
        function OperScheduleContractorIoComponent(operSchedulesService, api, loading, splitPanel, barcodeScanner, platform) {
          _classCallCheck(this, OperScheduleContractorIoComponent);

          this.operSchedulesService = operSchedulesService;
          this.api = api;
          this.loading = loading;
          this.splitPanel = splitPanel;
          this.barcodeScanner = barcodeScanner;
          this.platform = platform;
          this.browserScanner = false;
          this.currentDevice = null;
          this.formatsEnabled = [_zxing_library__WEBPACK_IMPORTED_MODULE_8__["BarcodeFormat"].CODE_128, _zxing_library__WEBPACK_IMPORTED_MODULE_8__["BarcodeFormat"].DATA_MATRIX, _zxing_library__WEBPACK_IMPORTED_MODULE_8__["BarcodeFormat"].EAN_13, _zxing_library__WEBPACK_IMPORTED_MODULE_8__["BarcodeFormat"].QR_CODE, _zxing_library__WEBPACK_IMPORTED_MODULE_8__["BarcodeFormat"].PDF_417];
        }

        _createClass(OperScheduleContractorIoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }, {
          key: "scan",
          value: function scan() {
            if (this.platform.is('desktop')) {
              this.desktopScan();
            }

            if (this.platform.is('mobile')) {
              this.mobileScan();
            }
          }
        }, {
          key: "mobileScan",
          value: function mobileScan() {
            var _this = this;

            this.barcodeScanner.scan().then(function (barcodeData) {
              console.log('Barcode data', barcodeData);
              _this.barcodeData = barcodeData;
            })["catch"](function (err) {
              console.log('Error', err);
            });
          }
        }, {
          key: "desktopScan",
          value: function desktopScan() {
            this.browserScanner = true;
          }
        }, {
          key: "onCodeResult",
          value: function onCodeResult(resultString) {
            this.barcodeData = {
              canceled: null,
              text: resultString,
              format: null
            };
            this.browserScanner = false;
            console.log(this.barcodeData);
          }
        }, {
          key: "onCodeError",
          value: function onCodeError() {
            var err = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.barcodeData = {
              canceled: null,
              text: null,
              format: null
            };
            this.browserScanner = false;
            console.log(err);
          }
        }]);

        return OperScheduleContractorIoComponent;
      }();

      OperScheduleContractorIoComponent.ctorParameters = function () {
        return [{
          type: _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__["OperSchedulesService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }, {
          type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__["BarcodeScanner"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }];
      };

      OperScheduleContractorIoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-schedule-contractor-io',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-schedule-contractor-io.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedule-contractor-io/oper-schedule-contractor-io.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-schedule-contractor-io.component.scss */
        "./src/app/oper-schedules/oper-schedule-contractor-io/oper-schedule-contractor-io.component.scss"))["default"]]
      })], OperScheduleContractorIoComponent);
      /***/
    },

    /***/
    "./src/app/oper-schedules/oper-schedule-contractor-list/oper-schedule-contractor-list.component.scss":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/oper-schedules/oper-schedule-contractor-list/oper-schedule-contractor-list.component.scss ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperSchedulesOperScheduleContractorListOperScheduleContractorListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2NoZWR1bGVzL29wZXItc2NoZWR1bGUtY29udHJhY3Rvci1saXN0L29wZXItc2NoZWR1bGUtY29udHJhY3Rvci1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/oper-schedules/oper-schedule-contractor-list/oper-schedule-contractor-list.component.ts":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/oper-schedules/oper-schedule-contractor-list/oper-schedule-contractor-list.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: OperScheduleContractorListComponent */

    /***/
    function srcAppOperSchedulesOperScheduleContractorListOperScheduleContractorListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperScheduleContractorListComponent", function () {
        return OperScheduleContractorListComponent;
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


      var _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-schedules.service */
      "./src/app/oper-schedules/oper-schedules.service.ts");
      /* harmony import */


      var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../@shared/services/api.service */
      "./src/app/@shared/services/api.service.ts");
      /* harmony import */


      var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../@shared/services/loading.service */
      "./src/app/@shared/services/loading.service.ts");
      /* harmony import */


      var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../@shared/services/split-panel.service */
      "./src/app/@shared/services/split-panel.service.ts");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../@shared/services/auth.service */
      "./src/app/@shared/services/auth.service.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);

      var OperScheduleContractorListComponent = /*#__PURE__*/function () {
        function OperScheduleContractorListComponent(operSchedulesService, api, loading, splitPanel, auth) {
          _classCallCheck(this, OperScheduleContractorListComponent);

          this.operSchedulesService = operSchedulesService;
          this.api = api;
          this.loading = loading;
          this.splitPanel = splitPanel;
          this.auth = auth;
          this.userId = null;
          this.date = moment__WEBPACK_IMPORTED_MODULE_7__().format('YYYY-MM-DD');
        }

        _createClass(OperScheduleContractorListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
            this.userId = this.auth.getUser('id');
            console.log(this.userId);
            this.operSchedulesService.getOperSchedules(this.operSchedulesService.page, this.operSchedulesService.perPage, this.userId, this.date, true);
          }
        }]);

        return OperScheduleContractorListComponent;
      }();

      OperScheduleContractorListComponent.ctorParameters = function () {
        return [{
          type: _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__["OperSchedulesService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }];
      };

      OperScheduleContractorListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-schedule-contractor-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-schedule-contractor-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedule-contractor-list/oper-schedule-contractor-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-schedule-contractor-list.component.scss */
        "./src/app/oper-schedules/oper-schedule-contractor-list/oper-schedule-contractor-list.component.scss"))["default"]]
      })], OperScheduleContractorListComponent);
      /***/
    },

    /***/
    "./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.scss":
    /*!*******************************************************************************************!*\
      !*** ./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperSchedulesOperSchedulesCreateOperSchedulesCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2NoZWR1bGVzL29wZXItc2NoZWR1bGVzLWNyZWF0ZS9vcGVyLXNjaGVkdWxlcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: OperSchedulesCreateComponent */

    /***/
    function srcAppOperSchedulesOperSchedulesCreateOperSchedulesCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperSchedulesCreateComponent", function () {
        return OperSchedulesCreateComponent;
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


      var _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-schedules.service */
      "./src/app/oper-schedules/oper-schedules.service.ts");
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

      var OperSchedulesCreateComponent = /*#__PURE__*/function () {
        function OperSchedulesCreateComponent(operSchedulesService, route, platform, splitPanel) {
          _classCallCheck(this, OperSchedulesCreateComponent);

          this.operSchedulesService = operSchedulesService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.formValid = false;
        }

        _createClass(OperSchedulesCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.clearPosts();
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

            this.operScheduleForm.operSchedulesForm.valueChanges.subscribe(function (data) {
              _this2.operSchedulesService.operSchedulesFormValid.next(_this2.operScheduleForm.operSchedulesForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.operSchedulesService.createOperSchedule();
            this.operSchedulesService.operSchedule = {};
          }
        }]);

        return OperSchedulesCreateComponent;
      }();

      OperSchedulesCreateComponent.ctorParameters = function () {
        return [{
          type: _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__["OperSchedulesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      OperSchedulesCreateComponent.propDecorators = {
        operScheduleForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['operScheduleForm']
        }]
      };
      OperSchedulesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-schedules-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-schedules-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-schedules-create.component.scss */
        "./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.scss"))["default"]]
      })], OperSchedulesCreateComponent);
      /***/
    },

    /***/
    "./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.scss":
    /*!*************************************************************************************************!*\
      !*** ./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.scss ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperSchedulesOperSchedulesDuplicateOperSchedulesDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2NoZWR1bGVzL29wZXItc2NoZWR1bGVzLWR1cGxpY2F0ZS9vcGVyLXNjaGVkdWxlcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: OperSchedulesDuplicateComponent */

    /***/
    function srcAppOperSchedulesOperSchedulesDuplicateOperSchedulesDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperSchedulesDuplicateComponent", function () {
        return OperSchedulesDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var OperSchedulesDuplicateComponent = /*#__PURE__*/function () {
        function OperSchedulesDuplicateComponent() {
          _classCallCheck(this, OperSchedulesDuplicateComponent);
        }

        _createClass(OperSchedulesDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OperSchedulesDuplicateComponent;
      }();

      OperSchedulesDuplicateComponent.ctorParameters = function () {
        return [];
      };

      OperSchedulesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-schedules-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-schedules-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-schedules-duplicate.component.scss */
        "./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.scss"))["default"]]
      })], OperSchedulesDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperSchedulesOperSchedulesEditOperSchedulesEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2NoZWR1bGVzL29wZXItc2NoZWR1bGVzLWVkaXQvb3Blci1zY2hlZHVsZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: OperSchedulesEditComponent */

    /***/
    function srcAppOperSchedulesOperSchedulesEditOperSchedulesEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperSchedulesEditComponent", function () {
        return OperSchedulesEditComponent;
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


      var _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-schedules.service */
      "./src/app/oper-schedules/oper-schedules.service.ts");
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

      var OperSchedulesEditComponent = /*#__PURE__*/function () {
        function OperSchedulesEditComponent(operSchedulesService, route, platform, splitPanel) {
          _classCallCheck(this, OperSchedulesEditComponent);

          this.operSchedulesService = operSchedulesService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.model = null;
        }

        _createClass(OperSchedulesEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.operSchedulesService.editOperSchedule(this.id);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this3 = this;

            this.operScheduleForm.operSchedulesForm.valueChanges.subscribe(function (data) {
              _this3.operSchedulesService.operSchedulesFormValid.next(_this3.operScheduleForm.operSchedulesForm.valid);
            });
          }
        }]);

        return OperSchedulesEditComponent;
      }();

      OperSchedulesEditComponent.ctorParameters = function () {
        return [{
          type: _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__["OperSchedulesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      OperSchedulesEditComponent.propDecorators = {
        operScheduleForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['operScheduleForm']
        }]
      };
      OperSchedulesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-schedules-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-schedules-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-schedules-edit.component.scss */
        "./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.scss"))["default"]]
      })], OperSchedulesEditComponent);
      /***/
    },

    /***/
    "./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperSchedulesOperSchedulesFormOperSchedulesFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* generated section */\n/* end generated section */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blci1zY2hlZHVsZXMvb3Blci1zY2hlZHVsZXMtZm9ybS9vcGVyLXNjaGVkdWxlcy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFBO0FBRUEsMEJBQUEiLCJmaWxlIjoic3JjL2FwcC9vcGVyLXNjaGVkdWxlcy9vcGVyLXNjaGVkdWxlcy1mb3JtL29wZXItc2NoZWR1bGVzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnZW5lcmF0ZWQgc2VjdGlvbiAqL1xuXG4vKiBlbmQgZ2VuZXJhdGVkIHNlY3Rpb24gKi9cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: OperSchedulesFormComponent */

    /***/
    function srcAppOperSchedulesOperSchedulesFormOperSchedulesFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperSchedulesFormComponent", function () {
        return OperSchedulesFormComponent;
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


      var _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-schedules.service */
      "./src/app/oper-schedules/oper-schedules.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var OperSchedulesFormComponent = /*#__PURE__*/function () {
        function OperSchedulesFormComponent(operSchedulesService, toTitlecase) {
          _classCallCheck(this, OperSchedulesFormComponent);

          this.operSchedulesService = operSchedulesService;
          this.toTitlecase = toTitlecase;
          this.model = {};
          this.validationMessages = {
            'name': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'
            }],
            'hous_unit_area_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('housUnitArea - NAME') + ' es obligatorio.'
            }],
            'oper_sector_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('SECTOR') + ' es obligatorio.'
            }],
            'oper_contractor_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('operContractor - NAME') + ' es obligatorio.'
            }],
            'required_time': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('TIEMPO REQUERIDO') + ' es obligatorio.'
            }],
            'supervisor_email': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('EMAIL DEL SUPOERVISOR') + ' es obligatorio.'
            }],
            'area_phone': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('TELÉFONO DEL AREA') + ' es obligatorio.'
            }],
            'time_start': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('HORA INICIAL') + ' es obligatorio.'
            }],
            'time_end': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('HORA FINAL') + ' es obligatorio.'
            }],
            'periodicity': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('PERIODICIDAD') + ' es obligatorio.'
            }],
            'repass': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('REQUIERE REPASAR') + ' es obligatorio.'
            }],
            'next': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('SIGUIENTE EN') + ' es obligatorio.'
            }],
            'oper_movement_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('MOVIMIENTOS OPERATIVOS') + ' es obligatorio.'
            }]
          };
        }

        _createClass(OperSchedulesFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // set setHousUnitAreaId

        }, {
          key: "setHousUnitAreaId",
          value: function setHousUnitAreaId(event) {
            this.operSchedulesService.operSchedule.hous_unit_area_id = event.value ? event.value.id : null;
          } // end setHousUnitAreaId
          // set setOperSectorId

        }, {
          key: "setOperSectorId",
          value: function setOperSectorId(event) {
            this.operSchedulesService.operSchedule.oper_sector_id = event.value ? event.value.id : null;
          } // end setOperSectorId
          // set setOperContractorId

        }, {
          key: "setOperContractorId",
          value: function setOperContractorId(event) {
            this.operSchedulesService.operSchedule.oper_contractor_id = event.value ? event.value.id : null;
          } // end setOperContractorId
          // set setOperMovementIds

        }, {
          key: "setOperMovementIds",
          value: function setOperMovementIds(event) {
            var operMovementIds = null;

            if (event.value.length) {
              operMovementIds = [];

              for (var i = 0; i < event.value.length; i++) {
                operMovementIds.push(event.value[i].id);
              }
            }

            this.operSchedulesService.operSchedule.oper_movement_ids = operMovementIds;
          }
        }]);

        return OperSchedulesFormComponent;
      }();

      OperSchedulesFormComponent.ctorParameters = function () {
        return [{
          type: _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__["OperSchedulesService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      OperSchedulesFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        operSchedulesForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['operSchedulesForm']
        }]
      };
      OperSchedulesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-schedules-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-schedules-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-schedules-form.component.scss */
        "./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.scss"))["default"]]
      })], OperSchedulesFormComponent);
      /***/
    },

    /***/
    "./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperSchedulesOperSchedulesListOperSchedulesListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2NoZWR1bGVzL29wZXItc2NoZWR1bGVzLWxpc3Qvb3Blci1zY2hlZHVsZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: OperSchedulesListComponent */

    /***/
    function srcAppOperSchedulesOperSchedulesListOperSchedulesListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperSchedulesListComponent", function () {
        return OperSchedulesListComponent;
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


      var _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-schedules.service */
      "./src/app/oper-schedules/oper-schedules.service.ts");
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

      var OperSchedulesListComponent = /*#__PURE__*/function () {
        function OperSchedulesListComponent(operSchedulesService, api, loading, splitPanel) {
          _classCallCheck(this, OperSchedulesListComponent);

          this.operSchedulesService = operSchedulesService;
          this.api = api;
          this.loading = loading;
          this.splitPanel = splitPanel;
        }

        _createClass(OperSchedulesListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.operSchedulesService.getOperSchedules();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            this.content.scrollToTop(300);
          }
        }]);

        return OperSchedulesListComponent;
      }();

      OperSchedulesListComponent.ctorParameters = function () {
        return [{
          type: _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__["OperSchedulesService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"]
        }];
      };

      OperSchedulesListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      OperSchedulesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-schedules-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-schedules-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-schedules-list.component.scss */
        "./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.scss"))["default"]]
      })], OperSchedulesListComponent);
      /***/
    },

    /***/
    "./src/app/oper-schedules/oper-schedules-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/oper-schedules/oper-schedules-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: OperSchedulesPageRoutingModule */

    /***/
    function srcAppOperSchedulesOperSchedulesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperSchedulesPageRoutingModule", function () {
        return OperSchedulesPageRoutingModule;
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


      var _oper_schedules_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./oper-schedules.page */
      "./src/app/oper-schedules/oper-schedules.page.ts");
      /* harmony import */


      var _oper_schedules_edit_oper_schedules_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./oper-schedules-edit/oper-schedules-edit.component */
      "./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.ts");
      /* harmony import */


      var _oper_schedules_create_oper_schedules_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./oper-schedules-create/oper-schedules-create.component */
      "./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.ts");
      /* harmony import */


      var _oper_schedules_list_oper_schedules_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./oper-schedules-list/oper-schedules-list.component */
      "./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.ts");
      /* harmony import */


      var _oper_schedule_contractor_io_oper_schedule_contractor_io_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./oper-schedule-contractor-io/oper-schedule-contractor-io.component */
      "./src/app/oper-schedules/oper-schedule-contractor-io/oper-schedule-contractor-io.component.ts");
      /* harmony import */


      var _oper_schedule_contractor_list_oper_schedule_contractor_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./oper-schedule-contractor-list/oper-schedule-contractor-list.component */
      "./src/app/oper-schedules/oper-schedule-contractor-list/oper-schedule-contractor-list.component.ts");
      /* harmony import */


      var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../@shared/guards/auth.guard */
      "./src/app/@shared/guards/auth.guard.ts");

      var routes = [// generated section
      {
        path: '',
        data: {
          title: 'OPERATRIVIDAD AGENDAS',
          roles: ['admin']
        },
        component: _oper_schedules_page__WEBPACK_IMPORTED_MODULE_3__["OperSchedulesPage"]
      }, {
        path: 'list',
        data: {
          title: 'OPERATRIVIDAD AGENDAS',
          roles: ['admin']
        },
        component: _oper_schedules_list_oper_schedules_list_component__WEBPACK_IMPORTED_MODULE_6__["OperSchedulesListComponent"]
      }, {
        path: 'create',
        data: {
          title: 'OPERATRIVIDAD AGENDAS',
          roles: ['admin']
        },
        component: _oper_schedules_create_oper_schedules_create_component__WEBPACK_IMPORTED_MODULE_5__["OperSchedulesCreateComponent"]
      }, {
        path: ':id/edit',
        data: {
          title: 'OPERATRIVIDAD AGENDAS',
          roles: ['admin']
        },
        component: _oper_schedules_edit_oper_schedules_edit_component__WEBPACK_IMPORTED_MODULE_4__["OperSchedulesEditComponent"]
      }, {
        path: 'movement',
        data: {
          title: 'Movimientos operativos'
        },
        component: _oper_schedule_contractor_io_oper_schedule_contractor_io_component__WEBPACK_IMPORTED_MODULE_7__["OperScheduleContractorIoComponent"]
      }, {
        path: 'own',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        data: {
          title: 'Mi Agenda',
          roles: ['admin', 'servicios-generales', 'servicios-seguridad']
        },
        component: _oper_schedule_contractor_list_oper_schedule_contractor_list_component__WEBPACK_IMPORTED_MODULE_8__["OperScheduleContractorListComponent"]
      }]; // end generated section

      var OperSchedulesPageRoutingModule = function OperSchedulesPageRoutingModule() {
        _classCallCheck(this, OperSchedulesPageRoutingModule);
      };

      OperSchedulesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OperSchedulesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/oper-schedules/oper-schedules.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/oper-schedules/oper-schedules.module.ts ***!
      \*********************************************************/

    /*! exports provided: OperSchedulesPageModule */

    /***/
    function srcAppOperSchedulesOperSchedulesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperSchedulesPageModule", function () {
        return OperSchedulesPageModule;
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


      var _oper_schedules_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./oper-schedules-routing.module */
      "./src/app/oper-schedules/oper-schedules-routing.module.ts");
      /* harmony import */


      var _oper_schedules_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./oper-schedules.page */
      "./src/app/oper-schedules/oper-schedules.page.ts");
      /* harmony import */


      var _oper_schedules_list_oper_schedules_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./oper-schedules-list/oper-schedules-list.component */
      "./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.ts");
      /* harmony import */


      var _oper_schedules_create_oper_schedules_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./oper-schedules-create/oper-schedules-create.component */
      "./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.ts");
      /* harmony import */


      var _oper_schedules_duplicate_oper_schedules_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./oper-schedules-duplicate/oper-schedules-duplicate.component */
      "./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.ts");
      /* harmony import */


      var _oper_schedules_edit_oper_schedules_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./oper-schedules-edit/oper-schedules-edit.component */
      "./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.ts");
      /* harmony import */


      var _oper_schedules_form_oper_schedules_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./oper-schedules-form/oper-schedules-form.component */
      "./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.ts");
      /* harmony import */


      var _oper_schedule_contractor_io_oper_schedule_contractor_io_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./oper-schedule-contractor-io/oper-schedule-contractor-io.component */
      "./src/app/oper-schedules/oper-schedule-contractor-io/oper-schedule-contractor-io.component.ts");
      /* harmony import */


      var _oper_schedule_contractor_list_oper_schedule_contractor_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./oper-schedule-contractor-list/oper-schedule-contractor-list.component */
      "./src/app/oper-schedules/oper-schedule-contractor-list/oper-schedule-contractor-list.component.ts");

      var OperSchedulesPageModule = function OperSchedulesPageModule() {
        _classCallCheck(this, OperSchedulesPageModule);
      };

      OperSchedulesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [// imports generated section
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _oper_schedules_routing_module__WEBPACK_IMPORTED_MODULE_6__["OperSchedulesPageRoutingModule"] // end imports generated section
        ],
        declarations: [// declarations generated section
        _oper_schedules_page__WEBPACK_IMPORTED_MODULE_7__["OperSchedulesPage"], _oper_schedules_list_oper_schedules_list_component__WEBPACK_IMPORTED_MODULE_8__["OperSchedulesListComponent"], _oper_schedules_create_oper_schedules_create_component__WEBPACK_IMPORTED_MODULE_9__["OperSchedulesCreateComponent"], _oper_schedules_duplicate_oper_schedules_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["OperSchedulesDuplicateComponent"], _oper_schedules_edit_oper_schedules_edit_component__WEBPACK_IMPORTED_MODULE_11__["OperSchedulesEditComponent"], _oper_schedules_form_oper_schedules_form_component__WEBPACK_IMPORTED_MODULE_12__["OperSchedulesFormComponent"], // end declarations generated section
        _oper_schedule_contractor_io_oper_schedule_contractor_io_component__WEBPACK_IMPORTED_MODULE_13__["OperScheduleContractorIoComponent"], _oper_schedule_contractor_list_oper_schedule_contractor_list_component__WEBPACK_IMPORTED_MODULE_14__["OperScheduleContractorListComponent"]]
      })], OperSchedulesPageModule);
      /***/
    },

    /***/
    "./src/app/oper-schedules/oper-schedules.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/oper-schedules/oper-schedules.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperSchedulesOperSchedulesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2NoZWR1bGVzL29wZXItc2NoZWR1bGVzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/oper-schedules/oper-schedules.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/oper-schedules/oper-schedules.page.ts ***!
      \*******************************************************/

    /*! exports provided: OperSchedulesPage */

    /***/
    function srcAppOperSchedulesOperSchedulesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperSchedulesPage", function () {
        return OperSchedulesPage;
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

      var OperSchedulesPage = /*#__PURE__*/function () {
        function OperSchedulesPage(splitPanel) {
          _classCallCheck(this, OperSchedulesPage);

          this.splitPanel = splitPanel;
        }

        _createClass(OperSchedulesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }]);

        return OperSchedulesPage;
      }();

      OperSchedulesPage.ctorParameters = function () {
        return [{
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"]
        }];
      };

      OperSchedulesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-schedules',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-schedules.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-schedules.page.scss */
        "./src/app/oper-schedules/oper-schedules.page.scss"))["default"]]
      })], OperSchedulesPage);
      /***/
    },

    /***/
    "./src/app/oper-schedules/oper-schedules.service.ts":
    /*!**********************************************************!*\
      !*** ./src/app/oper-schedules/oper-schedules.service.ts ***!
      \**********************************************************/

    /*! exports provided: OperSchedulesService */

    /***/
    function srcAppOperSchedulesOperSchedulesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperSchedulesService", function () {
        return OperSchedulesService;
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

      var OperSchedulesService = /*#__PURE__*/function () {
        function OperSchedulesService(api, alert, toast, router, navigation) {
          _classCallCheck(this, OperSchedulesService);

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
        } // generated section


        _createClass(OperSchedulesService, [{
          key: "getOperSchedules",
          value: function getOperSchedules() {
            var _this4 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            var userId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var date = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var own = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            this.api.get(this.operSchedulesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue + (userId ? '&q[operContractor.user_id:id]=' + userId : '') + (date ? '&q[next:cont]=' + date : '') + (own ? '&q[s]=time_start:asc' : '')).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this4.operSchedules = res.data;
              _this4.operScheduleLists = res.lists;
              _this4.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editOperSchedule",
          value: function editOperSchedule(id) {
            var _this5 = this;

            this.api.get(this.operSchedulesUrl + '/' + id + '/edit').subscribe(function (res) {
              _this5.operSchedule = res.data.model;
              _this5.operScheduleLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateOperSchedule",
          value: function updateOperSchedule() {
            var _this6 = this;

            this.api.put(this.operSchedulesUrl + '/' + this.operSchedule.id, {
              model: this.operSchedule,
              pivots: {}
            }).subscribe(function (res) {
              _this6.toast.present(res.message, 'toast-success', 'top');

              _this6.navigation.back();

              _this6.getOperSchedules(1);
            });
          }
        }, {
          key: "createOperSchedule",
          value: function createOperSchedule() {
            var _this7 = this;

            this.api.get(this.operSchedulesUrl + '/create').subscribe(function (res) {
              _this7.operSchedule = {};
              _this7.operScheduleLists = res.lists;
            });
          }
        }, {
          key: "storeOperSchedule",
          value: function storeOperSchedule() {
            var _this8 = this;

            this.api.post(this.operSchedulesUrl, {
              model: this.operSchedule,
              pivots: {}
            }).subscribe(function (res) {
              _this8.toast.present(res.message, 'toast-success', 'top');

              _this8.navigation.back();

              _this8.getOperSchedules(1);
            });
          }
        }, {
          key: "deleteOperSchedule",
          value: function deleteOperSchedule(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this9 = this;

              var confirm;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alert.confirmation('Desea eliminar el item?');

                    case 2:
                      confirm = _context.sent;

                      if (!confirm) {
                        _context.next = 7;
                        break;
                      }

                      this.api["delete"](this.operSchedulesUrl + '/' + id, {}).subscribe(function (res) {
                        _this9.toast.present(res.message, 'toast-success', 'top');

                        _this9.getOperSchedules(1);
                      });
                      _context.next = 8;
                      break;

                    case 7:
                      return _context.abrupt("return");

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return OperSchedulesService;
      }();

      OperSchedulesService.ctorParameters = function () {
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

      OperSchedulesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], OperSchedulesService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=oper-schedules-oper-schedules-module-es5.js.map