(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oper-movements-oper-movements-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-create/oper-movements-create.component.html":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-create/oper-movements-create.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperMovementsOperMovementsCreateOperMovementsCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/oper-movements'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"operMovementsService.storeOperMovement()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!operMovementsService.operMovementsFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'MOVIMIENTOS OPERATIVOS' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-oper-movements-form #operMovementForm [model]=\"operMovementsService.operMovement\"></app-oper-movements-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-duplicate/oper-movements-duplicate.component.html":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-duplicate/oper-movements-duplicate.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperMovementsOperMovementsDuplicateOperMovementsDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\r\n  OperMovements duplicate works!\r\n</p>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-edit/oper-movements-edit.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-edit/oper-movements-edit.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperMovementsOperMovementsEditOperMovementsEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/oper-movements'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"operMovementsService.updateOperMovement()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!operMovementsService.operMovementsFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'MOVIMIENTOS OPERATIVOS' | titlecase}}: {{ operMovementsService.operMovement?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-oper-movements-form #operMovementForm [model]=\"operMovementsService.operMovement\"></app-oper-movements-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-form/oper-movements-form.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-form/oper-movements-form.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperMovementsOperMovementsFormOperMovementsFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #operMovementsForm=\"ngForm\"\r\n      novalidate\r\n      autocomplete=\"off\">\r\n\r\n\r\n    <!-- oper_sector_id -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'SECTORESOPERATIVO' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"oper_sector_id\"\r\n                          id=\"oper_sector_id-field\"\r\n                          [required]=\"true\"\r\n                          [(ngModel)]=\"model.oper_sector\"\r\n                          [items]=\"operMovementsService.operMovementLists.OperSector\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('SECTORES OPERATIVOS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('SECTORES OPERATIVOS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setOperSectorId($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.oper_sector_id\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"operMovementsForm.form.controls['oper_sector_id']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end oper_sector_id -->\r\n\r\n\r\n    <!-- oper_contractor_id -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'CONTRATISTASOPERATIVO' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"oper_contractor_id\"\r\n                          id=\"oper_contractor_id-field\"\r\n                          [required]=\"true\"\r\n                          [(ngModel)]=\"model.oper_contractor\"\r\n                          [items]=\"operMovementsService.operMovementLists.OperContractor\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('CONTRATISTAS OPERATIVOS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('CONTRATISTAS OPERATIVOS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setOperContractorId($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.oper_contractor_id\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"operMovementsForm.form.controls['oper_contractor_id']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end oper_contractor_id -->\r\n\r\n\r\n    <!-- name -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\r\n        <ion-input [(ngModel)]=\"model.name\"\r\n                   type=\"text\"\r\n                   name=\"name\"\r\n                   id=\"name-field\"\r\n                   [required]=\"true\"\r\n                   placeholder=\"\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"operMovementsForm.form.controls['name']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end name -->\r\n\r\n\r\n    <!-- date_statr -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'FECHA INICIO' | titlecase }}</ion-label>\r\n        <ion-datetime name=\"date_statr\"\r\n                      id=\"date_statr-field\"\r\n                      [required]=\"true\"\r\n                      [doneText]=\"'Seleccionar'\"\r\n                      [cancelText]=\"'Cancelar'\"\r\n                      [(ngModel)]=\"model.date_statr\"\r\n                      displayFormat=\"DD/MM/YYYY\"></ion-datetime>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.date_statr\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"operMovementsForm.form.controls['date_statr']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end date_statr -->\r\n\r\n\r\n    <!-- date_end -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'FECHA FINAL' | titlecase }}</ion-label>\r\n        <ion-datetime name=\"date_end\"\r\n                      id=\"date_end-field\"\r\n                      [doneText]=\"'Seleccionar'\"\r\n                      [cancelText]=\"'Cancelar'\"\r\n                      [(ngModel)]=\"model.date_end\"\r\n                      displayFormat=\"DD/MM/YYYY\"></ion-datetime>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.date_end\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"operMovementsForm.form.controls['date_end']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end date_end -->\r\n\r\n\r\n    <!-- time_start -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'HORA INICIAL' | titlecase }}</ion-label>\r\n        <ion-datetime name=\"time_start\"\r\n                      id=\"time_start-field\"\r\n                      [doneText]=\"'Seleccionar'\"\r\n                      [cancelText]=\"'Cancelar'\"\r\n                      [(ngModel)]=\"model.time_start\"\r\n                      displayFormat=\"HH:mm\"></ion-datetime>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.time_start\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"operMovementsForm.form.controls['time_start']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end time_start -->\r\n\r\n\r\n    <!-- time_end -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'HORA FINAL' | titlecase }}</ion-label>\r\n        <ion-datetime [(ngModel)]=\"model.time_end\"\r\n                      name=\"time_end\"\r\n                      id=\"time_end-field\"\r\n                      [doneText]=\"'Seleccionar'\"\r\n                      displayFormat=\"HH:mm\"\r\n                      [cancelText]=\"'Cancelar'\"\r\n                      placeholder=\"\"></ion-datetime>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.time_end\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"operMovementsForm.form.controls['time_end']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end time_end -->\r\n\r\n\r\n    <!-- time_total -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'TIEMPO UTILIZADO' | titlecase }}</ion-label>\r\n        <ion-input [(ngModel)]=\"model.time_total\"\r\n                   type=\"text\"\r\n                   name=\"time_total\"\r\n                   id=\"time_total-field\"\r\n                   placeholder=\"\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.time_total\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"operMovementsForm.form.controls['time_total']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end time_total -->\r\n\r\n\r\n    <!-- photo -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'FOTO DEL AREA INTERVENIDA' | titlecase }}</ion-label>\r\n        <ion-input [(ngModel)]=\"model.photo\"\r\n                   type=\"text\"\r\n                   name=\"photo\"\r\n                   id=\"photo-field\"\r\n                   placeholder=\"\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.photo\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"operMovementsForm.form.controls['photo']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end photo -->\r\n\r\n\r\n</form>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-list/oper-movements-list.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-list/oper-movements-list.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperMovementsOperMovementsListOperMovementsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'MOVIMIENTOS OPERATIVOS' | titlecase}}\"\r\n                 primaryLink=\"oper-movements/create\"\r\n                 primaryText=\"Crear {{'MOVIMIENTOS OPERATIVOS' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-searchbar showCancelButton=\"focus\"\r\n                       [cancelButtonText]=\"'Cancelar'\"\r\n                       [placeholder]=\"'Buscar ' + ('MOVIMIENTOS OPERATIVOS' | lowercase )\"\r\n                       (ionCancel)=\"this.operMovementsService.searchValue = ''; operMovementsService.getOperMovements()\"\r\n                       (keyup.enter)=\"operMovementsService.getOperMovements()\"\r\n                       [(ngModel)]=\"operMovementsService.searchValue\"></ion-searchbar>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && operMovementsService.operMovements?.length\">\r\n        <ion-card *ngFor=\"let operMovement of operMovementsService.operMovements; let index = index\">\r\n            <ion-list>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operMovement?.name }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'FECHA INICIO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operMovement?.date_statr | dateFormat:'DD/MM/YYYY' }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'FECHA FINAL' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operMovement?.date_end | dateFormat:'DD/MM/YYYY' }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'HORA INICIAL' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operMovement?.time_start | dateFormat:'HH:mm' }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'HORA FINAL' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operMovement?.time_end }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'TIEMPO UTILIZADO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operMovement?.time_total }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'FOTO DEL AREA INTERVENIDA' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operMovement?.photo }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'SECTORES OPERATIVOS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\"><a routerLink=\"/oper-sectors/{{ operMovement?.oper_sector?.id }}/edit\">{{ operMovement?.oper_sector?.name }}</a></div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'CONTRATISTAS OPERATIVOS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\"><a routerLink=\"/oper-contractors/{{ operMovement?.oper_contractor?.id }}/edit\">{{ operMovement?.oper_contractor?.name }}</a></div>\r\n                    </ion-item>\r\n            </ion-list>\r\n            <ion-footer>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/oper-movements/' + operMovement?.id + '/edit'\">\r\n                            <ion-icon name=\"create-outline\"></ion-icon>\r\n                            <div>Editar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"operMovementsService.deleteOperMovement(operMovement?.id)\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            <div>Eliminar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-footer>\r\n        </ion-card>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && !operMovementsService.operMovements?.length\">\r\n        <ion-item>\r\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label><h2>No se encontraron {{'MOVIMIENTOS OPERATIVOS' | titlecase}}</h2></ion-label>\r\n            <ion-button [routerLink]=\"'/oper-movements/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\r\n                Crear {{'MOVIMIENTOS OPERATIVOS' | titlecase}}\r\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"operMovementsService.meta\">\r\n        <ion-col class=\"ion-text-center\" size=\"12\">\r\n            <ion-button (click)=\"operMovementsService.getOperMovements(operMovementsService.meta.current_page - 1)\"\r\n                        [disabled]=\"operMovementsService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{operMovementsService.meta.current_page}}\r\n                /{{operMovementsService.meta.last_page}} {{operMovementsService.meta.from}}-{{operMovementsService.meta.to}}\r\n                /{{operMovementsService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"operMovementsService.getOperMovements(operMovementsService.meta.current_page + 1)\"\r\n                        [disabled]=\"operMovementsService.meta.current_page == operMovementsService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperMovementsOperMovementsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"MOVIMIENTOS OPERATIVOS\"></app-main-header>\r\n\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/oper-movements/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'MOVIMIENTOS OPERATIVOS'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/oper-movements/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'MOVIMIENTOS OPERATIVOS' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/oper-movements/oper-movements-create/oper-movements-create.component.scss":
    /*!*******************************************************************************************!*\
      !*** ./src/app/oper-movements/oper-movements-create/oper-movements-create.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperMovementsOperMovementsCreateOperMovementsCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbW92ZW1lbnRzL29wZXItbW92ZW1lbnRzLWNyZWF0ZS9vcGVyLW1vdmVtZW50cy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/oper-movements/oper-movements-create/oper-movements-create.component.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/oper-movements/oper-movements-create/oper-movements-create.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: OperMovementsCreateComponent */

    /***/
    function srcAppOperMovementsOperMovementsCreateOperMovementsCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMovementsCreateComponent", function () {
        return OperMovementsCreateComponent;
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


      var _oper_movements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-movements.service */
      "./src/app/oper-movements/oper-movements.service.ts");
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

      var OperMovementsCreateComponent = /*#__PURE__*/function () {
        function OperMovementsCreateComponent(operMovementsService, route, platform, splitPanel) {
          _classCallCheck(this, OperMovementsCreateComponent);

          this.operMovementsService = operMovementsService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.formValid = false;
        }

        _createClass(OperMovementsCreateComponent, [{
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

            this.operMovementForm.operMovementsForm.valueChanges.subscribe(function (data) {
              _this.operMovementsService.operMovementsFormValid.next(_this.operMovementForm.operMovementsForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.operMovementsService.createOperMovement();
            this.operMovementsService.operMovement = {};
          }
        }]);

        return OperMovementsCreateComponent;
      }();

      OperMovementsCreateComponent.ctorParameters = function () {
        return [{
          type: _oper_movements_service__WEBPACK_IMPORTED_MODULE_2__["OperMovementsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      OperMovementsCreateComponent.propDecorators = {
        operMovementForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['operMovementForm']
        }]
      };
      OperMovementsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-movements-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-movements-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-create/oper-movements-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-movements-create.component.scss */
        "./src/app/oper-movements/oper-movements-create/oper-movements-create.component.scss"))["default"]]
      })], OperMovementsCreateComponent);
      /***/
    },

    /***/
    "./src/app/oper-movements/oper-movements-duplicate/oper-movements-duplicate.component.scss":
    /*!*************************************************************************************************!*\
      !*** ./src/app/oper-movements/oper-movements-duplicate/oper-movements-duplicate.component.scss ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperMovementsOperMovementsDuplicateOperMovementsDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbW92ZW1lbnRzL29wZXItbW92ZW1lbnRzLWR1cGxpY2F0ZS9vcGVyLW1vdmVtZW50cy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/oper-movements/oper-movements-duplicate/oper-movements-duplicate.component.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/oper-movements/oper-movements-duplicate/oper-movements-duplicate.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: OperMovementsDuplicateComponent */

    /***/
    function srcAppOperMovementsOperMovementsDuplicateOperMovementsDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMovementsDuplicateComponent", function () {
        return OperMovementsDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var OperMovementsDuplicateComponent = /*#__PURE__*/function () {
        function OperMovementsDuplicateComponent() {
          _classCallCheck(this, OperMovementsDuplicateComponent);
        }

        _createClass(OperMovementsDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OperMovementsDuplicateComponent;
      }();

      OperMovementsDuplicateComponent.ctorParameters = function () {
        return [];
      };

      OperMovementsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-movements-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-movements-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-duplicate/oper-movements-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-movements-duplicate.component.scss */
        "./src/app/oper-movements/oper-movements-duplicate/oper-movements-duplicate.component.scss"))["default"]]
      })], OperMovementsDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/oper-movements/oper-movements-edit/oper-movements-edit.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/oper-movements/oper-movements-edit/oper-movements-edit.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperMovementsOperMovementsEditOperMovementsEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbW92ZW1lbnRzL29wZXItbW92ZW1lbnRzLWVkaXQvb3Blci1tb3ZlbWVudHMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/oper-movements/oper-movements-edit/oper-movements-edit.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/oper-movements/oper-movements-edit/oper-movements-edit.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: OperMovementsEditComponent */

    /***/
    function srcAppOperMovementsOperMovementsEditOperMovementsEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMovementsEditComponent", function () {
        return OperMovementsEditComponent;
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


      var _oper_movements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-movements.service */
      "./src/app/oper-movements/oper-movements.service.ts");
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

      var OperMovementsEditComponent = /*#__PURE__*/function () {
        function OperMovementsEditComponent(operMovementsService, route, platform, splitPanel) {
          _classCallCheck(this, OperMovementsEditComponent);

          this.operMovementsService = operMovementsService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.model = null;
        }

        _createClass(OperMovementsEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.operMovementsService.editOperMovement(this.id);
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

            this.operMovementForm.operMovementsForm.valueChanges.subscribe(function (data) {
              _this2.operMovementsService.operMovementsFormValid.next(_this2.operMovementForm.operMovementsForm.valid);
            });
          }
        }]);

        return OperMovementsEditComponent;
      }();

      OperMovementsEditComponent.ctorParameters = function () {
        return [{
          type: _oper_movements_service__WEBPACK_IMPORTED_MODULE_2__["OperMovementsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      OperMovementsEditComponent.propDecorators = {
        operMovementForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['operMovementForm']
        }]
      };
      OperMovementsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-movements-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-movements-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-edit/oper-movements-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-movements-edit.component.scss */
        "./src/app/oper-movements/oper-movements-edit/oper-movements-edit.component.scss"))["default"]]
      })], OperMovementsEditComponent);
      /***/
    },

    /***/
    "./src/app/oper-movements/oper-movements-form/oper-movements-form.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/oper-movements/oper-movements-form/oper-movements-form.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperMovementsOperMovementsFormOperMovementsFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbW92ZW1lbnRzL29wZXItbW92ZW1lbnRzLWZvcm0vb3Blci1tb3ZlbWVudHMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/oper-movements/oper-movements-form/oper-movements-form.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/oper-movements/oper-movements-form/oper-movements-form.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: OperMovementsFormComponent */

    /***/
    function srcAppOperMovementsOperMovementsFormOperMovementsFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMovementsFormComponent", function () {
        return OperMovementsFormComponent;
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


      var _oper_movements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-movements.service */
      "./src/app/oper-movements/oper-movements.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var OperMovementsFormComponent = /*#__PURE__*/function () {
        function OperMovementsFormComponent(operMovementsService, toTitlecase) {
          _classCallCheck(this, OperMovementsFormComponent);

          this.operMovementsService = operMovementsService;
          this.toTitlecase = toTitlecase;
          this.model = {};
          this.validationMessages = {
            'name': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'
            }],
            'oper_sector_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('SECTOR') + ' es obligatorio.'
            }],
            'oper_contractor_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('CONTRATISTA') + ' es obligatorio.'
            }],
            'date_statr': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('FECHA INICIO') + ' es obligatorio.'
            }],
            'date_end': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('FECHA FINAL') + ' es obligatorio.'
            }],
            'time_start': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('HORA INICIAL') + ' es obligatorio.'
            }],
            'time_end': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('HORA FINAL') + ' es obligatorio.'
            }],
            'time_total': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('TIEMPO UTILIZADO') + ' es obligatorio.'
            }],
            'photo': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('FOTO DEL AREA INTERVENIDA') + ' es obligatorio.'
            }]
          };
        }

        _createClass(OperMovementsFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // set setOperSectorId

        }, {
          key: "setOperSectorId",
          value: function setOperSectorId(event) {
            this.operMovementsService.operMovement.oper_sector_id = event.value ? event.value.id : null;
          } // end setOperSectorId
          // set setOperContractorId

        }, {
          key: "setOperContractorId",
          value: function setOperContractorId(event) {
            this.operMovementsService.operMovement.oper_contractor_id = event.value ? event.value.id : null;
          }
        }]);

        return OperMovementsFormComponent;
      }();

      OperMovementsFormComponent.ctorParameters = function () {
        return [{
          type: _oper_movements_service__WEBPACK_IMPORTED_MODULE_2__["OperMovementsService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      OperMovementsFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        operMovementsForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['operMovementsForm']
        }]
      };
      OperMovementsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-movements-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-movements-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-form/oper-movements-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-movements-form.component.scss */
        "./src/app/oper-movements/oper-movements-form/oper-movements-form.component.scss"))["default"]]
      })], OperMovementsFormComponent);
      /***/
    },

    /***/
    "./src/app/oper-movements/oper-movements-list/oper-movements-list.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/oper-movements/oper-movements-list/oper-movements-list.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperMovementsOperMovementsListOperMovementsListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbW92ZW1lbnRzL29wZXItbW92ZW1lbnRzLWxpc3Qvb3Blci1tb3ZlbWVudHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/oper-movements/oper-movements-list/oper-movements-list.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/oper-movements/oper-movements-list/oper-movements-list.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: OperMovementsListComponent */

    /***/
    function srcAppOperMovementsOperMovementsListOperMovementsListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMovementsListComponent", function () {
        return OperMovementsListComponent;
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


      var _oper_movements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-movements.service */
      "./src/app/oper-movements/oper-movements.service.ts");
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

      var OperMovementsListComponent = /*#__PURE__*/function () {
        function OperMovementsListComponent(operMovementsService, api, loading, splitPanel) {
          _classCallCheck(this, OperMovementsListComponent);

          this.operMovementsService = operMovementsService;
          this.api = api;
          this.loading = loading;
          this.splitPanel = splitPanel;
        }

        _createClass(OperMovementsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.operMovementsService.getOperMovements();
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

        return OperMovementsListComponent;
      }();

      OperMovementsListComponent.ctorParameters = function () {
        return [{
          type: _oper_movements_service__WEBPACK_IMPORTED_MODULE_2__["OperMovementsService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"]
        }];
      };

      OperMovementsListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      OperMovementsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-movements-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-movements-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-list/oper-movements-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-movements-list.component.scss */
        "./src/app/oper-movements/oper-movements-list/oper-movements-list.component.scss"))["default"]]
      })], OperMovementsListComponent);
      /***/
    },

    /***/
    "./src/app/oper-movements/oper-movements-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/oper-movements/oper-movements-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: OperMovementsPageRoutingModule */

    /***/
    function srcAppOperMovementsOperMovementsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMovementsPageRoutingModule", function () {
        return OperMovementsPageRoutingModule;
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


      var _oper_movements_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./oper-movements.page */
      "./src/app/oper-movements/oper-movements.page.ts");
      /* harmony import */


      var _oper_movements_edit_oper_movements_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./oper-movements-edit/oper-movements-edit.component */
      "./src/app/oper-movements/oper-movements-edit/oper-movements-edit.component.ts");
      /* harmony import */


      var _oper_movements_create_oper_movements_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./oper-movements-create/oper-movements-create.component */
      "./src/app/oper-movements/oper-movements-create/oper-movements-create.component.ts");
      /* harmony import */


      var _oper_movements_list_oper_movements_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./oper-movements-list/oper-movements-list.component */
      "./src/app/oper-movements/oper-movements-list/oper-movements-list.component.ts");

      var routes = [{
        path: '',
        component: _oper_movements_page__WEBPACK_IMPORTED_MODULE_3__["OperMovementsPage"]
      }, {
        path: 'list',
        component: _oper_movements_list_oper_movements_list_component__WEBPACK_IMPORTED_MODULE_6__["OperMovementsListComponent"]
      }, {
        path: 'create',
        component: _oper_movements_create_oper_movements_create_component__WEBPACK_IMPORTED_MODULE_5__["OperMovementsCreateComponent"]
      }, {
        path: ':id/edit',
        component: _oper_movements_edit_oper_movements_edit_component__WEBPACK_IMPORTED_MODULE_4__["OperMovementsEditComponent"]
      }];

      var OperMovementsPageRoutingModule = function OperMovementsPageRoutingModule() {
        _classCallCheck(this, OperMovementsPageRoutingModule);
      };

      OperMovementsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OperMovementsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/oper-movements/oper-movements.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/oper-movements/oper-movements.module.ts ***!
      \*********************************************************/

    /*! exports provided: OperMovementsPageModule */

    /***/
    function srcAppOperMovementsOperMovementsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMovementsPageModule", function () {
        return OperMovementsPageModule;
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


      var _oper_movements_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./oper-movements-routing.module */
      "./src/app/oper-movements/oper-movements-routing.module.ts");
      /* harmony import */


      var _oper_movements_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./oper-movements.page */
      "./src/app/oper-movements/oper-movements.page.ts");
      /* harmony import */


      var _oper_movements_list_oper_movements_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./oper-movements-list/oper-movements-list.component */
      "./src/app/oper-movements/oper-movements-list/oper-movements-list.component.ts");
      /* harmony import */


      var _oper_movements_create_oper_movements_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./oper-movements-create/oper-movements-create.component */
      "./src/app/oper-movements/oper-movements-create/oper-movements-create.component.ts");
      /* harmony import */


      var _oper_movements_duplicate_oper_movements_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./oper-movements-duplicate/oper-movements-duplicate.component */
      "./src/app/oper-movements/oper-movements-duplicate/oper-movements-duplicate.component.ts");
      /* harmony import */


      var _oper_movements_edit_oper_movements_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./oper-movements-edit/oper-movements-edit.component */
      "./src/app/oper-movements/oper-movements-edit/oper-movements-edit.component.ts");
      /* harmony import */


      var _oper_movements_form_oper_movements_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./oper-movements-form/oper-movements-form.component */
      "./src/app/oper-movements/oper-movements-form/oper-movements-form.component.ts");

      var OperMovementsPageModule = function OperMovementsPageModule() {
        _classCallCheck(this, OperMovementsPageModule);
      };

      OperMovementsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _oper_movements_routing_module__WEBPACK_IMPORTED_MODULE_6__["OperMovementsPageRoutingModule"]],
        declarations: [_oper_movements_page__WEBPACK_IMPORTED_MODULE_7__["OperMovementsPage"], _oper_movements_list_oper_movements_list_component__WEBPACK_IMPORTED_MODULE_8__["OperMovementsListComponent"], _oper_movements_create_oper_movements_create_component__WEBPACK_IMPORTED_MODULE_9__["OperMovementsCreateComponent"], _oper_movements_duplicate_oper_movements_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["OperMovementsDuplicateComponent"], _oper_movements_edit_oper_movements_edit_component__WEBPACK_IMPORTED_MODULE_11__["OperMovementsEditComponent"], _oper_movements_form_oper_movements_form_component__WEBPACK_IMPORTED_MODULE_12__["OperMovementsFormComponent"]]
      })], OperMovementsPageModule);
      /***/
    },

    /***/
    "./src/app/oper-movements/oper-movements.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/oper-movements/oper-movements.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperMovementsOperMovementsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbW92ZW1lbnRzL29wZXItbW92ZW1lbnRzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/oper-movements/oper-movements.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/oper-movements/oper-movements.page.ts ***!
      \*******************************************************/

    /*! exports provided: OperMovementsPage */

    /***/
    function srcAppOperMovementsOperMovementsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMovementsPage", function () {
        return OperMovementsPage;
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

      var OperMovementsPage = /*#__PURE__*/function () {
        function OperMovementsPage(splitPanel) {
          _classCallCheck(this, OperMovementsPage);

          this.splitPanel = splitPanel;
        }

        _createClass(OperMovementsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }]);

        return OperMovementsPage;
      }();

      OperMovementsPage.ctorParameters = function () {
        return [{
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"]
        }];
      };

      OperMovementsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-movements',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-movements.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-movements.page.scss */
        "./src/app/oper-movements/oper-movements.page.scss"))["default"]]
      })], OperMovementsPage);
      /***/
    },

    /***/
    "./src/app/oper-movements/oper-movements.service.ts":
    /*!**********************************************************!*\
      !*** ./src/app/oper-movements/oper-movements.service.ts ***!
      \**********************************************************/

    /*! exports provided: OperMovementsService */

    /***/
    function srcAppOperMovementsOperMovementsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMovementsService", function () {
        return OperMovementsService;
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

      var OperMovementsService = /*#__PURE__*/function () {
        function OperMovementsService(api, alert, toast, router, navigation) {
          _classCallCheck(this, OperMovementsService);

          this.api = api;
          this.alert = alert;
          this.toast = toast;
          this.router = router;
          this.navigation = navigation;
          this.operMovementsUrl = 'oper-movements';
          this.operMovementsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
          this.operMovements = [];
          this.operMovement = {};
          this.operMovementLists = {};
          this.searchValue = '';
          this.perPage = 10;
          this.meta = null;
          this.page = 1;
          this.pagesContent = document.getElementById('pages-content');
        }

        _createClass(OperMovementsService, [{
          key: "getOperMovements",
          value: function getOperMovements() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.operMovementsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.operMovements = res.data;
              _this3.operMovementLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editOperMovement",
          value: function editOperMovement(id) {
            var _this4 = this;

            this.api.get(this.operMovementsUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.operMovement = res.data.model;
              _this4.operMovementLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateOperMovement",
          value: function updateOperMovement() {
            var _this5 = this;

            this.api.put(this.operMovementsUrl + '/' + this.operMovement.id, {
              model: this.operMovement,
              pivots: {}
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getOperMovements(1);
            });
          }
        }, {
          key: "createOperMovement",
          value: function createOperMovement() {
            var _this6 = this;

            this.api.get(this.operMovementsUrl + '/create').subscribe(function (res) {
              _this6.operMovement = {};
              _this6.operMovementLists = res.lists;
            });
          }
        }, {
          key: "storeOperMovement",
          value: function storeOperMovement() {
            var _this7 = this;

            this.api.post(this.operMovementsUrl, {
              model: this.operMovement,
              pivots: {}
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getOperMovements(1);
            });
          }
        }, {
          key: "deleteOperMovement",
          value: function deleteOperMovement(id) {
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

                      this.api["delete"](this.operMovementsUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getOperMovements(1);
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

        return OperMovementsService;
      }();

      OperMovementsService.ctorParameters = function () {
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

      OperMovementsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], OperMovementsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=oper-movements-oper-movements-module-es5.js.map