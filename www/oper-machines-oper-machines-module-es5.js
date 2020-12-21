(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oper-machines-oper-machines-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-create/oper-machines-create.component.html":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-create/oper-machines-create.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperMachinesOperMachinesCreateOperMachinesCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/oper-machines'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"operMachinesService.storeOperMachine()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!operMachinesService.operMachinesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'OPERATIVIDAD MAQUINARIA' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-oper-machines-form #operMachineForm [model]=\"operMachinesService.operMachine\"></app-oper-machines-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-duplicate/oper-machines-duplicate.component.html":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-duplicate/oper-machines-duplicate.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperMachinesOperMachinesDuplicateOperMachinesDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  OperMachines duplicate works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-edit/oper-machines-edit.component.html":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-edit/oper-machines-edit.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperMachinesOperMachinesEditOperMachinesEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/oper-machines'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"operMachinesService.updateOperMachine()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!operMachinesService.operMachinesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'OPERATIVIDAD MAQUINARIA' | titlecase}}: {{ operMachinesService.operMachine?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-oper-machines-form #operMachineForm [model]=\"operMachinesService.operMachine\"></app-oper-machines-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-form/oper-machines-form.component.html":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-form/oper-machines-form.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperMachinesOperMachinesFormOperMachinesFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #operMachinesForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- hous_unit_area_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'UNIDADESHABITACIONALESAREA' | titlecase }}</ion-label>\n        <ionic-selectable name=\"hous_unit_area_id\"\n                          id=\"hous_unit_area_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.hous_unit_area\"\n                          [items]=\"operMachinesService.operMachineLists.HousUnitArea\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('UNIDADES HABITACIONALES AREAS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('UNIDADES HABITACIONALES AREAS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setHousUnitAreaId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.hous_unit_area_id\">\n            <div class=\"error-message\" *ngIf=\"operMachinesForm.form.controls['hous_unit_area_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end hous_unit_area_id -->\n\n\n    <!-- oper_contractor_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'CONTRATISTASOPERATIVO' | titlecase }}</ion-label>\n        <ionic-selectable name=\"oper_contractor_id\"\n                          id=\"oper_contractor_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.oper_contractor\"\n                          [items]=\"operMachinesService.operMachineLists.OperContractor\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('CONTRATISTAS OPERATIVOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('CONTRATISTAS OPERATIVOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setOperContractorId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.oper_contractor_id\">\n            <div class=\"error-message\" *ngIf=\"operMachinesForm.form.controls['oper_contractor_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end oper_contractor_id -->\n\n\n    <!-- oper_preventive_maintenance_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'OPERATIVIDAD MTTO PREVENTIVOS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"oper_preventive_maintenance_ids\"\n                          id=\"oper_preventive_maintenance_ids-field\"\n                          [(ngModel)]=\"model.oper_preventive_maintenances\"\n                          [items]=\"operMachinesService.operMachineLists.OperPreventiveMaintenance\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('OPERATIVIDAD MTTO PREVENTIVOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('OPERATIVIDAD MTTO PREVENTIVOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setOperPreventiveMaintenanceIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.oper_preventive_maintenance_ids\">\n            <div class=\"error-message\" *ngIf=\"operMachinesForm.form.controls['oper_preventive_maintenance_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end oper_preventive_maintenance_ids -->\n\n\n    <!-- oper_replacement_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'OPERATIVIDAD REPUESTOS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"oper_replacement_ids\"\n                          id=\"oper_replacement_ids-field\"\n                          [(ngModel)]=\"model.oper_replacements\"\n                          [items]=\"operMachinesService.operMachineLists.OperReplacement\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('OPERATIVIDAD REPUESTOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('OPERATIVIDAD REPUESTOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setOperReplacementIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.oper_replacement_ids\">\n            <div class=\"error-message\" *ngIf=\"operMachinesForm.form.controls['oper_replacement_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end oper_replacement_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"operMachinesForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- contract_expiration_date -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'FECHA VENCIMIENTO CONTRATO' | titlecase }}</ion-label>\n                <ion-datetime name=\"contract_expiration_date\"\n                              id=\"contract_expiration_date-field\"\n                              [doneText]=\"'Seleccionar'\"\n                              [cancelText]=\"'Cancelar'\"\n                              [(ngModel)]=\"model.contract_expiration_date\"\n                              displayFormat=\"DD/MM/YYYY\"></ion-datetime>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.contract_expiration_date\">\n                    <div class=\"error-message\" *ngIf=\"operMachinesForm.form.controls['contract_expiration_date']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end contract_expiration_date -->\n\n\n            <!-- contract_monthly_price -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'VALOR MENSUAL' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.contract_monthly_price\"\n                            type=\"number\"\n                            name=\"contract_monthly_price\"\n                            id=\"contract_monthly_price-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.contract_monthly_price\">\n                    <div class=\"error-message\" *ngIf=\"operMachinesForm.form.controls['contract_monthly_price']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end contract_monthly_price -->\n\n\n            <!-- monthly_periodicity -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'PERIODICIDAD MENSUAL' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.monthly_periodicity\"\n                            type=\"number\"\n                            name=\"monthly_periodicity\"\n                            id=\"monthly_periodicity-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.monthly_periodicity\">\n                    <div class=\"error-message\" *ngIf=\"operMachinesForm.form.controls['monthly_periodicity']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end monthly_periodicity -->\n\n\n</form>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-list/oper-machines-list.component.html":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-list/oper-machines-list.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperMachinesOperMachinesListOperMachinesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'OPERATIVIDAD MAQUINARIA' | titlecase}}\"\n                 primaryLink=\"oper-machines/create\"\n                 primaryText=\"Crear {{'OPERATIVIDAD MAQUINARIA' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('OPERATIVIDAD MAQUINARIA' | lowercase )\"\n                       (ionCancel)=\"this.operMachinesService.searchValue = ''; operMachinesService.getOperMachines()\"\n                       (keyup.enter)=\"operMachinesService.getOperMachines()\"\n                       [(ngModel)]=\"operMachinesService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && operMachinesService.operMachines?.length\">\n        <ion-card *ngFor=\"let operMachine of operMachinesService.operMachines; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operMachine?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'FECHA VENCIMIENTO CONTRATO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operMachine?.contract_expiration_date | dateFormat:'DD/MM/YYYY' }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'VALOR MENSUAL' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operMachine?.contract_monthly_price }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'PERIODICIDAD MENSUAL' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operMachine?.monthly_periodicity }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'UNIDADES HABITACIONALES AREAS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/hous-unit-areas/{{ operMachine?.hous_unit_area?.id }}/edit\">{{ operMachine?.hous_unit_area?.name }}</a></div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CONTRATISTAS OPERATIVOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/oper-contractors/{{ operMachine?.oper_contractor?.id }}/edit\">{{ operMachine?.oper_contractor?.name }}</a></div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'OPERATIVIDAD MTTO PREVENTIVOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"operMachine?.oper_preventive_maintenances?.length\">\n                                <ng-container *ngFor=\"let operPreventiveMaintenance of operMachine?.oper_preventive_maintenances; let last = last\">\n                                    <a routerLink=\"/oper-preventive-maintenances/{{ operPreventiveMaintenance?.id }}/edit\">{{ operPreventiveMaintenance?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'OPERATIVIDAD REPUESTOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"operMachine?.oper_replacements?.length\">\n                                <ng-container *ngFor=\"let operReplacement of operMachine?.oper_replacements; let last = last\">\n                                    <a routerLink=\"/oper-replacements/{{ operReplacement?.id }}/edit\">{{ operReplacement?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/oper-machines/' + operMachine?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"operMachinesService.deleteOperMachine(operMachine?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !operMachinesService.operMachines?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'OPERATIVIDAD MAQUINARIA' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/oper-machines/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'OPERATIVIDAD MAQUINARIA' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"operMachinesService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"operMachinesService.getOperMachines(operMachinesService.meta.current_page - 1)\"\n                        [disabled]=\"operMachinesService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{operMachinesService.meta.current_page}}\n                /{{operMachinesService.meta.last_page}} {{operMachinesService.meta.from}}-{{operMachinesService.meta.to}}\n                /{{operMachinesService.meta.total}} </ion-button>\n            <ion-button (click)=\"operMachinesService.getOperMachines(operMachinesService.meta.current_page + 1)\"\n                        [disabled]=\"operMachinesService.meta.current_page == operMachinesService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperMachinesOperMachinesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"OPERATIVIDAD MAQUINARIA\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/oper-machines/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'OPERATIVIDAD MAQUINARIA'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/oper-machines/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'OPERATIVIDAD MAQUINARIA' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/oper-machines/oper-machines-create/oper-machines-create.component.scss":
    /*!****************************************************************************************!*\
      !*** ./src/app/oper-machines/oper-machines-create/oper-machines-create.component.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperMachinesOperMachinesCreateOperMachinesCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbWFjaGluZXMvb3Blci1tYWNoaW5lcy1jcmVhdGUvb3Blci1tYWNoaW5lcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/oper-machines/oper-machines-create/oper-machines-create.component.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/oper-machines/oper-machines-create/oper-machines-create.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: OperMachinesCreateComponent */

    /***/
    function srcAppOperMachinesOperMachinesCreateOperMachinesCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMachinesCreateComponent", function () {
        return OperMachinesCreateComponent;
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


      var _oper_machines_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-machines.service */
      "./src/app/oper-machines/oper-machines.service.ts");
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

      var OperMachinesCreateComponent = /*#__PURE__*/function () {
        function OperMachinesCreateComponent(operMachinesService, route, platform, splitPanel) {
          _classCallCheck(this, OperMachinesCreateComponent);

          this.operMachinesService = operMachinesService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.formValid = false;
        }

        _createClass(OperMachinesCreateComponent, [{
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
            var _this = this;

            this.operMachineForm.operMachinesForm.valueChanges.subscribe(function (data) {
              _this.operMachinesService.operMachinesFormValid.next(_this.operMachineForm.operMachinesForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.operMachinesService.createOperMachine();
            this.operMachinesService.operMachine = {};
          }
        }]);

        return OperMachinesCreateComponent;
      }();

      OperMachinesCreateComponent.ctorParameters = function () {
        return [{
          type: _oper_machines_service__WEBPACK_IMPORTED_MODULE_2__["OperMachinesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      OperMachinesCreateComponent.propDecorators = {
        operMachineForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['operMachineForm']
        }]
      };
      OperMachinesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-machines-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-machines-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-create/oper-machines-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-machines-create.component.scss */
        "./src/app/oper-machines/oper-machines-create/oper-machines-create.component.scss"))["default"]]
      })], OperMachinesCreateComponent);
      /***/
    },

    /***/
    "./src/app/oper-machines/oper-machines-duplicate/oper-machines-duplicate.component.scss":
    /*!**********************************************************************************************!*\
      !*** ./src/app/oper-machines/oper-machines-duplicate/oper-machines-duplicate.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperMachinesOperMachinesDuplicateOperMachinesDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbWFjaGluZXMvb3Blci1tYWNoaW5lcy1kdXBsaWNhdGUvb3Blci1tYWNoaW5lcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/oper-machines/oper-machines-duplicate/oper-machines-duplicate.component.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/oper-machines/oper-machines-duplicate/oper-machines-duplicate.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: OperMachinesDuplicateComponent */

    /***/
    function srcAppOperMachinesOperMachinesDuplicateOperMachinesDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMachinesDuplicateComponent", function () {
        return OperMachinesDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var OperMachinesDuplicateComponent = /*#__PURE__*/function () {
        function OperMachinesDuplicateComponent() {
          _classCallCheck(this, OperMachinesDuplicateComponent);
        }

        _createClass(OperMachinesDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OperMachinesDuplicateComponent;
      }();

      OperMachinesDuplicateComponent.ctorParameters = function () {
        return [];
      };

      OperMachinesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-machines-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-machines-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-duplicate/oper-machines-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-machines-duplicate.component.scss */
        "./src/app/oper-machines/oper-machines-duplicate/oper-machines-duplicate.component.scss"))["default"]]
      })], OperMachinesDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/oper-machines/oper-machines-edit/oper-machines-edit.component.scss":
    /*!************************************************************************************!*\
      !*** ./src/app/oper-machines/oper-machines-edit/oper-machines-edit.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperMachinesOperMachinesEditOperMachinesEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbWFjaGluZXMvb3Blci1tYWNoaW5lcy1lZGl0L29wZXItbWFjaGluZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/oper-machines/oper-machines-edit/oper-machines-edit.component.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/oper-machines/oper-machines-edit/oper-machines-edit.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: OperMachinesEditComponent */

    /***/
    function srcAppOperMachinesOperMachinesEditOperMachinesEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMachinesEditComponent", function () {
        return OperMachinesEditComponent;
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


      var _oper_machines_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-machines.service */
      "./src/app/oper-machines/oper-machines.service.ts");
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

      var OperMachinesEditComponent = /*#__PURE__*/function () {
        function OperMachinesEditComponent(operMachinesService, route, platform, splitPanel) {
          _classCallCheck(this, OperMachinesEditComponent);

          this.operMachinesService = operMachinesService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.model = null;
        }

        _createClass(OperMachinesEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.operMachinesService.editOperMachine(this.id);
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

            this.operMachineForm.operMachinesForm.valueChanges.subscribe(function (data) {
              _this2.operMachinesService.operMachinesFormValid.next(_this2.operMachineForm.operMachinesForm.valid);
            });
          }
        }]);

        return OperMachinesEditComponent;
      }();

      OperMachinesEditComponent.ctorParameters = function () {
        return [{
          type: _oper_machines_service__WEBPACK_IMPORTED_MODULE_2__["OperMachinesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      OperMachinesEditComponent.propDecorators = {
        operMachineForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['operMachineForm']
        }]
      };
      OperMachinesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-machines-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-machines-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-edit/oper-machines-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-machines-edit.component.scss */
        "./src/app/oper-machines/oper-machines-edit/oper-machines-edit.component.scss"))["default"]]
      })], OperMachinesEditComponent);
      /***/
    },

    /***/
    "./src/app/oper-machines/oper-machines-form/oper-machines-form.component.scss":
    /*!************************************************************************************!*\
      !*** ./src/app/oper-machines/oper-machines-form/oper-machines-form.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperMachinesOperMachinesFormOperMachinesFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* generated section */\n/* end generated section */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blci1tYWNoaW5lcy9vcGVyLW1hY2hpbmVzLWZvcm0vb3Blci1tYWNoaW5lcy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFBO0FBRUEsMEJBQUEiLCJmaWxlIjoic3JjL2FwcC9vcGVyLW1hY2hpbmVzL29wZXItbWFjaGluZXMtZm9ybS9vcGVyLW1hY2hpbmVzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnZW5lcmF0ZWQgc2VjdGlvbiAqL1xuXG4vKiBlbmQgZ2VuZXJhdGVkIHNlY3Rpb24gKi9cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/oper-machines/oper-machines-form/oper-machines-form.component.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/oper-machines/oper-machines-form/oper-machines-form.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: OperMachinesFormComponent */

    /***/
    function srcAppOperMachinesOperMachinesFormOperMachinesFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMachinesFormComponent", function () {
        return OperMachinesFormComponent;
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


      var _oper_machines_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-machines.service */
      "./src/app/oper-machines/oper-machines.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var OperMachinesFormComponent = /*#__PURE__*/function () {
        function OperMachinesFormComponent(operMachinesService, toTitlecase) {
          _classCallCheck(this, OperMachinesFormComponent);

          this.operMachinesService = operMachinesService;
          this.toTitlecase = toTitlecase;
          this.model = {};
          this.validationMessages = {
            'name': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'
            }],
            'hous_unit_area_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('AREA') + ' es obligatorio.'
            }],
            'oper_contractor_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('CONTRATISTA') + ' es obligatorio.'
            }],
            'contract_expiration_date': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('FECHA VENCIMIENTO CONTRATO') + ' es obligatorio.'
            }],
            'contract_monthly_price': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('VALOR MENSUAL') + ' es obligatorio.'
            }],
            'monthly_periodicity': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('PERIODICIDAD MENSUAL') + ' es obligatorio.'
            }],
            'oper_preventive_maintenance_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('OPERATIVIDAD MTTO PREVENTIVOS') + ' es obligatorio.'
            }],
            'oper_replacement_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('OPERATIVIDAD REPUESTOS') + ' es obligatorio.'
            }]
          };
        }

        _createClass(OperMachinesFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // set setHousUnitAreaId

        }, {
          key: "setHousUnitAreaId",
          value: function setHousUnitAreaId(event) {
            this.operMachinesService.operMachine.hous_unit_area_id = event.value ? event.value.id : null;
          } // end setHousUnitAreaId
          // set setOperContractorId

        }, {
          key: "setOperContractorId",
          value: function setOperContractorId(event) {
            this.operMachinesService.operMachine.oper_contractor_id = event.value ? event.value.id : null;
          } // end setOperContractorId
          // set setOperPreventiveMaintenanceIds

        }, {
          key: "setOperPreventiveMaintenanceIds",
          value: function setOperPreventiveMaintenanceIds(event) {
            var operPreventiveMaintenanceIds = null;

            if (event.value.length) {
              operPreventiveMaintenanceIds = [];

              for (var i = 0; i < event.value.length; i++) {
                operPreventiveMaintenanceIds.push(event.value[i].id);
              }
            }

            this.operMachinesService.operMachine.oper_preventive_maintenance_ids = operPreventiveMaintenanceIds;
          } // end setOperPreventiveMaintenanceIds
          // set setOperReplacementIds

        }, {
          key: "setOperReplacementIds",
          value: function setOperReplacementIds(event) {
            var operReplacementIds = null;

            if (event.value.length) {
              operReplacementIds = [];

              for (var i = 0; i < event.value.length; i++) {
                operReplacementIds.push(event.value[i].id);
              }
            }

            this.operMachinesService.operMachine.oper_replacement_ids = operReplacementIds;
          }
        }]);

        return OperMachinesFormComponent;
      }();

      OperMachinesFormComponent.ctorParameters = function () {
        return [{
          type: _oper_machines_service__WEBPACK_IMPORTED_MODULE_2__["OperMachinesService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      OperMachinesFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        operMachinesForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['operMachinesForm']
        }]
      };
      OperMachinesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-machines-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-machines-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-form/oper-machines-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-machines-form.component.scss */
        "./src/app/oper-machines/oper-machines-form/oper-machines-form.component.scss"))["default"]]
      })], OperMachinesFormComponent);
      /***/
    },

    /***/
    "./src/app/oper-machines/oper-machines-list/oper-machines-list.component.scss":
    /*!************************************************************************************!*\
      !*** ./src/app/oper-machines/oper-machines-list/oper-machines-list.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperMachinesOperMachinesListOperMachinesListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbWFjaGluZXMvb3Blci1tYWNoaW5lcy1saXN0L29wZXItbWFjaGluZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/oper-machines/oper-machines-list/oper-machines-list.component.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/oper-machines/oper-machines-list/oper-machines-list.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: OperMachinesListComponent */

    /***/
    function srcAppOperMachinesOperMachinesListOperMachinesListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMachinesListComponent", function () {
        return OperMachinesListComponent;
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


      var _oper_machines_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-machines.service */
      "./src/app/oper-machines/oper-machines.service.ts");
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

      var OperMachinesListComponent = /*#__PURE__*/function () {
        function OperMachinesListComponent(operMachinesService, api, loading, splitPanel) {
          _classCallCheck(this, OperMachinesListComponent);

          this.operMachinesService = operMachinesService;
          this.api = api;
          this.loading = loading;
          this.splitPanel = splitPanel;
        }

        _createClass(OperMachinesListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.operMachinesService.getOperMachines();
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

        return OperMachinesListComponent;
      }();

      OperMachinesListComponent.ctorParameters = function () {
        return [{
          type: _oper_machines_service__WEBPACK_IMPORTED_MODULE_2__["OperMachinesService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"]
        }];
      };

      OperMachinesListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      OperMachinesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-machines-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-machines-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines-list/oper-machines-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-machines-list.component.scss */
        "./src/app/oper-machines/oper-machines-list/oper-machines-list.component.scss"))["default"]]
      })], OperMachinesListComponent);
      /***/
    },

    /***/
    "./src/app/oper-machines/oper-machines-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/oper-machines/oper-machines-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: OperMachinesPageRoutingModule */

    /***/
    function srcAppOperMachinesOperMachinesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMachinesPageRoutingModule", function () {
        return OperMachinesPageRoutingModule;
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


      var _oper_machines_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./oper-machines.page */
      "./src/app/oper-machines/oper-machines.page.ts");
      /* harmony import */


      var _oper_machines_edit_oper_machines_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./oper-machines-edit/oper-machines-edit.component */
      "./src/app/oper-machines/oper-machines-edit/oper-machines-edit.component.ts");
      /* harmony import */


      var _oper_machines_create_oper_machines_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./oper-machines-create/oper-machines-create.component */
      "./src/app/oper-machines/oper-machines-create/oper-machines-create.component.ts");
      /* harmony import */


      var _oper_machines_list_oper_machines_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./oper-machines-list/oper-machines-list.component */
      "./src/app/oper-machines/oper-machines-list/oper-machines-list.component.ts");

      var routes = [// generated section
      {
        path: '',
        data: {
          title: 'OPERATIVIDAD MAQUINARIA',
          roles: ['admin']
        },
        component: _oper_machines_page__WEBPACK_IMPORTED_MODULE_3__["OperMachinesPage"]
      }, {
        path: 'list',
        data: {
          title: 'OPERATIVIDAD MAQUINARIA',
          roles: ['admin']
        },
        component: _oper_machines_list_oper_machines_list_component__WEBPACK_IMPORTED_MODULE_6__["OperMachinesListComponent"]
      }, {
        path: 'create',
        data: {
          title: 'OPERATIVIDAD MAQUINARIA',
          roles: ['admin']
        },
        component: _oper_machines_create_oper_machines_create_component__WEBPACK_IMPORTED_MODULE_5__["OperMachinesCreateComponent"]
      }, {
        path: ':id/edit',
        data: {
          title: 'OPERATIVIDAD MAQUINARIA',
          roles: ['admin']
        },
        component: _oper_machines_edit_oper_machines_edit_component__WEBPACK_IMPORTED_MODULE_4__["OperMachinesEditComponent"]
      }]; // end generated section

      var OperMachinesPageRoutingModule = function OperMachinesPageRoutingModule() {
        _classCallCheck(this, OperMachinesPageRoutingModule);
      };

      OperMachinesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OperMachinesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/oper-machines/oper-machines.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/oper-machines/oper-machines.module.ts ***!
      \*******************************************************/

    /*! exports provided: OperMachinesPageModule */

    /***/
    function srcAppOperMachinesOperMachinesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMachinesPageModule", function () {
        return OperMachinesPageModule;
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


      var _oper_machines_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./oper-machines-routing.module */
      "./src/app/oper-machines/oper-machines-routing.module.ts");
      /* harmony import */


      var _oper_machines_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./oper-machines.page */
      "./src/app/oper-machines/oper-machines.page.ts");
      /* harmony import */


      var _oper_machines_list_oper_machines_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./oper-machines-list/oper-machines-list.component */
      "./src/app/oper-machines/oper-machines-list/oper-machines-list.component.ts");
      /* harmony import */


      var _oper_machines_create_oper_machines_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./oper-machines-create/oper-machines-create.component */
      "./src/app/oper-machines/oper-machines-create/oper-machines-create.component.ts");
      /* harmony import */


      var _oper_machines_duplicate_oper_machines_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./oper-machines-duplicate/oper-machines-duplicate.component */
      "./src/app/oper-machines/oper-machines-duplicate/oper-machines-duplicate.component.ts");
      /* harmony import */


      var _oper_machines_edit_oper_machines_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./oper-machines-edit/oper-machines-edit.component */
      "./src/app/oper-machines/oper-machines-edit/oper-machines-edit.component.ts");
      /* harmony import */


      var _oper_machines_form_oper_machines_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./oper-machines-form/oper-machines-form.component */
      "./src/app/oper-machines/oper-machines-form/oper-machines-form.component.ts");

      var OperMachinesPageModule = function OperMachinesPageModule() {
        _classCallCheck(this, OperMachinesPageModule);
      };

      OperMachinesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [// imports generated section
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _oper_machines_routing_module__WEBPACK_IMPORTED_MODULE_6__["OperMachinesPageRoutingModule"] // end imports generated section
        ],
        declarations: [// declarations generated section
        _oper_machines_page__WEBPACK_IMPORTED_MODULE_7__["OperMachinesPage"], _oper_machines_list_oper_machines_list_component__WEBPACK_IMPORTED_MODULE_8__["OperMachinesListComponent"], _oper_machines_create_oper_machines_create_component__WEBPACK_IMPORTED_MODULE_9__["OperMachinesCreateComponent"], _oper_machines_duplicate_oper_machines_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["OperMachinesDuplicateComponent"], _oper_machines_edit_oper_machines_edit_component__WEBPACK_IMPORTED_MODULE_11__["OperMachinesEditComponent"], _oper_machines_form_oper_machines_form_component__WEBPACK_IMPORTED_MODULE_12__["OperMachinesFormComponent"]]
      })], OperMachinesPageModule);
      /***/
    },

    /***/
    "./src/app/oper-machines/oper-machines.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/oper-machines/oper-machines.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperMachinesOperMachinesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbWFjaGluZXMvb3Blci1tYWNoaW5lcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/oper-machines/oper-machines.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/oper-machines/oper-machines.page.ts ***!
      \*****************************************************/

    /*! exports provided: OperMachinesPage */

    /***/
    function srcAppOperMachinesOperMachinesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMachinesPage", function () {
        return OperMachinesPage;
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

      var OperMachinesPage = /*#__PURE__*/function () {
        function OperMachinesPage(splitPanel) {
          _classCallCheck(this, OperMachinesPage);

          this.splitPanel = splitPanel;
        }

        _createClass(OperMachinesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }]);

        return OperMachinesPage;
      }();

      OperMachinesPage.ctorParameters = function () {
        return [{
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"]
        }];
      };

      OperMachinesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-machines',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-machines.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-machines/oper-machines.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-machines.page.scss */
        "./src/app/oper-machines/oper-machines.page.scss"))["default"]]
      })], OperMachinesPage);
      /***/
    },

    /***/
    "./src/app/oper-machines/oper-machines.service.ts":
    /*!********************************************************!*\
      !*** ./src/app/oper-machines/oper-machines.service.ts ***!
      \********************************************************/

    /*! exports provided: OperMachinesService */

    /***/
    function srcAppOperMachinesOperMachinesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMachinesService", function () {
        return OperMachinesService;
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

      var OperMachinesService = /*#__PURE__*/function () {
        function OperMachinesService(api, alert, toast, router, navigation) {
          _classCallCheck(this, OperMachinesService);

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
        } // generated section


        _createClass(OperMachinesService, [{
          key: "getOperMachines",
          value: function getOperMachines() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.operMachinesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.operMachines = res.data;
              _this3.operMachineLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editOperMachine",
          value: function editOperMachine(id) {
            var _this4 = this;

            this.api.get(this.operMachinesUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.operMachine = res.data.model;
              _this4.operMachineLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateOperMachine",
          value: function updateOperMachine() {
            var _this5 = this;

            this.api.put(this.operMachinesUrl + '/' + this.operMachine.id, {
              model: this.operMachine,
              pivots: {}
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getOperMachines(1);
            });
          }
        }, {
          key: "createOperMachine",
          value: function createOperMachine() {
            var _this6 = this;

            this.api.get(this.operMachinesUrl + '/create').subscribe(function (res) {
              _this6.operMachine = {};
              _this6.operMachineLists = res.lists;
            });
          }
        }, {
          key: "storeOperMachine",
          value: function storeOperMachine() {
            var _this7 = this;

            this.api.post(this.operMachinesUrl, {
              model: this.operMachine,
              pivots: {}
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getOperMachines(1);
            });
          }
        }, {
          key: "deleteOperMachine",
          value: function deleteOperMachine(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this8 = this;

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

                      this.api["delete"](this.operMachinesUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getOperMachines(1);
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

        return OperMachinesService;
      }();

      OperMachinesService.ctorParameters = function () {
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

      OperMachinesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], OperMachinesService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=oper-machines-oper-machines-module-es5.js.map