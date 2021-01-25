(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["corr-packets-corr-packets-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-delivery-modal/corr-delivery-modal.component.html":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-delivery-modal/corr-delivery-modal.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCorrPacketsCorrDeliveryModalCorrDeliveryModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  corr-delivery-modal works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-create/corr-packets-create.component.html":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-create/corr-packets-create.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCorrPacketsCorrPacketsCreateCorrPacketsCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/corr-packets'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"corrPacketsService.storeCorrPacket()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!corrPacketsService.corrPacketsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'CORRESPONDENCIA PAQUETES' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-corr-packets-form #corrPacketForm\n                               type=\"Recibir\"\n                               [model]=\"corrPacketsService.corrPacket\"\n                               [housUnitId]=\"this.route.snapshot.paramMap.get('housUnitId')\"></app-corr-packets-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-duplicate/corr-packets-duplicate.component.html":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-duplicate/corr-packets-duplicate.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCorrPacketsCorrPacketsDuplicateCorrPacketsDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  CorrPackets duplicate works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-edit/corr-packets-edit.component.html":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-edit/corr-packets-edit.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCorrPacketsCorrPacketsEditCorrPacketsEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/corr-packets'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n                    [text]=\"''\"\n                    [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"corrPacketsService.updateCorrPacket()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!corrPacketsService.corrPacketsFormValid.value\">\n                <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\"\n                          color=\"success\"\n                          name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'CORRESPONDENCIA PAQUETES' | titlecase}}\n                   : {{ corrPacketsService.corrPacket?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-corr-packets-form #corrPacketForm\n                               [model]=\"corrPacketsService.corrPacket\"\n                               [type]=\"type\"\n                               [housUnitId]=\"corrPacketsService.corrPacket.hous_unit_id\"></app-corr-packets-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-form/corr-packets-form.component.html":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-form/corr-packets-form.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCorrPacketsCorrPacketsFormCorrPacketsFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #corrPacketsForm=\"ngForm\"\n      novalidate\n      autocomplete=\"off\">\n\n\n    <!-- hous_unit_id -->\n    <ion-item class=\"item-transparent\"\n              [hidden]=\"type\">\n        <ion-label>{{ 'UNIDAD HABITACIONAL' | titlecase }}</ion-label>\n        <ionic-selectable name=\"hous_unit_id\"\n                          id=\"hous_unit_id-field\"\n                          [disabled]=\"type == 'Entregar'\"\n                          [required]=\"false\"\n                          [(ngModel)]=\"model.hous_unit\"\n                          [items]=\"corrPacketsService.corrPacketLists.HousUnit\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('UNIDADES HABITACIONALES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('UNIDADES HABITACIONALES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setHousUnitId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.hous_unit_id\">\n            <div class=\"error-message\"\n                 *ngIf=\"corrPacketsForm.form.controls['hous_unit_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end hous_unit_id -->\n\n\n    <!-- name -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n        <ion-input [(ngModel)]=\"model.name\"\n                   type=\"text\"\n                   name=\"name\"\n                   [required]=\"true\"\n                   [readonly]=\"(type !== 'Recibir')\"\n                   id=\"name-field\"\n                   placeholder=\"\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.name\">\n            <div class=\"error-message\"\n                 *ngIf=\"corrPacketsForm.form.controls['name']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end name -->\n\n\n    <!-- conveyor -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'TRANSPORTADOR' | titlecase }}</ion-label>\n        <ion-input [(ngModel)]=\"model.conveyor\"\n                   type=\"text\"\n                   name=\"conveyor\"\n                   [readonly]=\"(type !== 'Recibir')\"\n                   id=\"conveyor-field\"\n                   placeholder=\"\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.conveyor\">\n            <div class=\"error-message\"\n                 *ngIf=\"corrPacketsForm.form.controls['conveyor']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end conveyor -->\n\n\n    <!-- guide_number -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'NÚMERO DE GUIA' | titlecase }}</ion-label>\n        <ion-input [(ngModel)]=\"model.guide_number\"\n                   type=\"text\"\n                   name=\"guide_number\"\n                   [readonly]=\"(type !== 'Recibir')\"\n                   id=\"guide_number-field\"\n                   placeholder=\"\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.guide_number\">\n            <div class=\"error-message\"\n                 *ngIf=\"corrPacketsForm.form.controls['guide_number']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end guide_number -->\n\n\n    <!-- received_at -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'RECIBIDO' | titlecase }}</ion-label>\n        <ion-datetime name=\"received_at\"\n                      id=\"received_at-field\"\n                      [doneText]=\"'Seleccionar'\"\n                      [readonly]=\"true\"\n                      [cancelText]=\"'Cancelar'\"\n                      [(ngModel)]=\"model.received_at\"\n                      displayFormat=\"DD/MM/YYYY HH:mm\"></ion-datetime>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.received_at\">\n            <div class=\"error-message\"\n                 *ngIf=\"corrPacketsForm.form.controls['received_at']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end received_at -->\n\n\n    <!-- received_comment -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'COMENTARIO RECIBIDO' | titlecase }}</ion-label>\n        <ion-textarea [(ngModel)]=\"model.received_comment\"\n                      name=\"received_comment\"\n                      id=\"received_comment-field\"\n                      [readonly]=\"(type !== 'Recibir')\"\n                      rows=\"6\"\n                      placeholder=\"\"></ion-textarea>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.received_comment\">\n            <div class=\"error-message\"\n                 *ngIf=\"corrPacketsForm.form.controls['received_comment']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end received_comment -->\n\n\n    <!-- delivered_at -->\n    <ion-item class=\"item-transparent\"\n              [hidden]=\"type == 'Recibir'\">\n        <ion-label>{{ 'ENTREGADO' | titlecase }}</ion-label>\n        <ion-datetime name=\"delivered_at\"\n                      id=\"delivered_at-field\"\n                      [doneText]=\"'Seleccionar'\"\n                      [readonly]=\"true\"\n                      [cancelText]=\"'Cancelar'\"\n                      [(ngModel)]=\"model.delivered_at\"\n                      displayFormat=\"DD/MM/YYYY HH:mm\"></ion-datetime>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.delivered_at\">\n            <div class=\"error-message\"\n                 *ngIf=\"corrPacketsForm.form.controls['delivered_at']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end delivered_at -->\n\n\n    <!-- delivered_to -->\n    <ion-item class=\"item-transparent\"\n              [hidden]=\"type == 'Recibir'\">\n        <ion-label>{{ 'ENTREGADO A' | titlecase }}</ion-label>\n        <ion-input [(ngModel)]=\"model.delivered_to\"\n                   [readonly]=\"(type == 'view')\"\n                   type=\"text\"\n                   name=\"delivered_to\"\n                   id=\"delivered_to-field\"\n                   placeholder=\"\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.delivered_to\">\n            <div class=\"error-message\"\n                 *ngIf=\"corrPacketsForm.form.controls['delivered_to']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end delivered_to -->\n\n\n    <!-- delivered_comment -->\n    <ion-item class=\"item-transparent\"\n              [hidden]=\"type == 'Recibir'\">\n        <ion-label>{{ 'COMENTARIO ENTREGADO' | titlecase }}</ion-label>\n        <ion-textarea [(ngModel)]=\"model.delivered_comment\"\n                      [readonly]=\"(type == 'view')\"\n                      name=\"delivered_comment\"\n                      id=\"delivered_comment-field\"\n                      rows=\"6\"\n                      placeholder=\"\"></ion-textarea>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.delivered_comment\">\n            <div class=\"error-message\"\n                 *ngIf=\"corrPacketsForm.form.controls['delivered_comment']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end delivered_comment -->\n\n\n    <!-- status -->\n    <ion-item class=\"item-transparent\"\n              [hidden]=\"type\">\n        <ion-label>{{ 'ESTADO' | titlecase }}</ion-label>\n        <ion-select [(ngModel)]=\"model.status\"\n                    name=\"status\"\n                    id=\"status-field\"\n                    okText=\"Seleccionar\"\n                    cancelText=\"Cancelar\">\n            <ion-select-option value=\"\">{{ 'Ninguno' | titlecase }}</ion-select-option>\n            <ion-select-option value=\"received\">{{ 'Recibido' | titlecase }}</ion-select-option>\n            <ion-select-option value=\"delivered\">{{ 'Entregado' | titlecase }}</ion-select-option>\n        </ion-select>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.status\">\n            <div class=\"error-message\"\n                 *ngIf=\"corrPacketsForm.form.controls['status']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end status -->\n\n\n</form>\n\n\n<ion-item class=\"item-transparent\">\n    <ion-label>\n        Fotos:\n    </ion-label>\n    <ion-button slot=\"end\"\n                [disabled]=\"(type == 'view')\"\n                (click)=\"uploadPhoto()\"\n                color=\"success\"\n                fill=\"clear\">\n        <ion-icon name=\"camera-outline\"\n                  slot=\"icon-only\"></ion-icon>\n    </ion-button>\n\n</ion-item>\n\n<ng-container *ngIf=\"model?.files && model?.files?.length\">\n    <ion-item *ngFor=\"let file of model.files\"\n              (click)=\"openViewer(file.url)\"\n              class=\"item-transparent\">\n        <ion-thumbnail slot=\"start\">\n            <ion-img [src]=\"file.url\"></ion-img>\n        </ion-thumbnail>\n        <ion-label>\n            <h3>{{ (file.type == 'received' ? 'Foto recepción' : 'Foto entrega') }}</h3>\n            {{file.created_at | dateFormat:'DD/MM/YYYY HH:mm'}}\n        </ion-label>\n    </ion-item>\n</ng-container>\n\n<ng-container *ngIf=\"!model?.files && !model?.files?.length\">\n<ion-item class=\"item-transparent\">\n    <ion-label>Sin fotos</ion-label>\n</ion-item>\n</ng-container>\n\n<!--\n<pre>\n    {{corrPacketsForm.valid | json}}\n    {{corrPacketsForm.value | json}}\n</pre>\n\n<pre>\n    {{model | json}}\n</pre>\n-->\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-list/corr-packets-list.component.html":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-list/corr-packets-list.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCorrPacketsCorrPacketsListCorrPacketsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'CORRESPONDENCIA PAQUETES' | titlecase}}\"\n                 primaryLink=\"corr-packets/create\"\n                 primaryText=\"Crear {{'CORRESPONDENCIA PAQUETES' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('CORRESPONDENCIA PAQUETES' | lowercase )\"\n                       (ionCancel)=\"this.corrPacketsService.searchValue = ''; corrPacketsService.getCorrPackets()\"\n                       (keyup.enter)=\"corrPacketsService.getCorrPackets()\"\n                       [(ngModel)]=\"corrPacketsService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && corrPacketsService.corrPackets?.length\">\n        <ion-card *ngFor=\"let corrPacket of corrPacketsService.corrPackets; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ corrPacket?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'TRANSPORTADOR' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ corrPacket?.conveyor }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NÚMERO DE GUÍA' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ corrPacket?.guide_number }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'RECIBIDO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ corrPacket?.received_at | dateFormat:'DD/MM/YYYY HH:mm' }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'COMENTARIO RECIBIDO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ corrPacket?.received_comment }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'ENTREGADO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ corrPacket?.delivered_at | dateFormat:'DD/MM/YYYY HH:mm' }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'ENTREGADO A' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ corrPacket?.delivered_to }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'COMENTARIO ENTREGADO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ corrPacket?.delivered_comment }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'ESTADO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ corrPacket?.status | status }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'UNIDADES HABITACIONALES' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/hous-units/{{ corrPacket?.hous_unit?.id }}/edit\">{{ corrPacket?.hous_unit?.name }}</a></div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/corr-packets/' + corrPacket?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"corrPacketsService.deleteCorrPacket(corrPacket?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !corrPacketsService.corrPackets?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'CORRESPONDENCIA PAQUETES' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/corr-packets/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'CORRESPONDENCIA PAQUETES' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"corrPacketsService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"corrPacketsService.getCorrPackets(corrPacketsService.meta.current_page - 1)\"\n                        [disabled]=\"corrPacketsService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{corrPacketsService.meta.current_page}}\n                /{{corrPacketsService.meta.last_page}} {{corrPacketsService.meta.from}}-{{corrPacketsService.meta.to}}\n                /{{corrPacketsService.meta.total}} </ion-button>\n            <ion-button (click)=\"corrPacketsService.getCorrPackets(corrPacketsService.meta.current_page + 1)\"\n                        [disabled]=\"corrPacketsService.meta.current_page == corrPacketsService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCorrPacketsCorrPacketsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"CORRESPONDENCIA PAQUETES\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/corr-packets/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'CORRESPONDENCIA PAQUETES'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/corr-packets/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'CORRESPONDENCIA PAQUETES' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-postbox/corr-postbox.component.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-postbox/corr-postbox.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCorrPacketsCorrPostboxCorrPostboxComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <ion-back-button\n                    [text]=\"''\"\n                    [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button [routerLink]=\"'/corr-packets/create/' + this.route.snapshot.paramMap.get('id')\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"false\">\n                <ng-container *ngIf=\"true\">Recibir</ng-container>\n                <ion-icon slot=\"end\"\n                          color=\"success\"\n                          name=\"share-outline\"\n                          style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Buzon {{housUnitsService?.housUnit?.name}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n\n    <ion-list>\n        <ion-list-header class=\"ion-padding\">\n\n            <ng-container *ngIf=\"housUnitsService?.housUnit?.parent?.parent?.parent?.parent\">\n                <span>&nbsp;{{housUnitsService?.housUnit?.parent?.parent?.parent?.parent?.name}}&nbsp;:</span>\n            </ng-container>\n\n            <ng-container *ngIf=\"housUnitsService?.housUnit?.parent?.parent?.parent\">\n                <span>&nbsp;{{housUnitsService?.housUnit?.parent?.parent?.parent?.name}}&nbsp;:</span>\n            </ng-container>\n\n            <ng-container *ngIf=\"housUnitsService?.housUnit?.parent?.parent\">\n                <span>&nbsp;{{housUnitsService?.housUnit?.parent?.parent?.name}}&nbsp;:</span>\n            </ng-container>\n\n            <ng-container *ngIf=\"housUnitsService?.housUnit?.parent\">\n                <span>&nbsp;{{housUnitsService?.housUnit?.parent?.name}}&nbsp;:</span>\n            </ng-container>\n\n            &nbsp;{{housUnitsService?.housUnit?.name}}\n\n        </ion-list-header>\n        <ng-container *ngIf=\"housUnitsService?.housUnit?.corr_packets?.length\">\n           <ng-container *ngFor=\"let corrPacket of housUnitsService.housUnit.corr_packets\">\n               <ion-item-sliding *ngIf=\"corrPacket.status == 'received'\">\n                   <ion-item color=\"primary\"\n                             [routerLink]=\"'/corr-packets/'+corrPacket.id+'/edit/view'\">\n                       <ion-label>\n                           {{corrPacket.name}}\n                           <h3>Recibido el {{corrPacket.received_at | dateFormat:'DD/MM/YYYY HH:mm'}}</h3>\n                       </ion-label>\n                       <div>Recibido</div>\n                   </ion-item>\n                   <ion-item-options side=\"end\">\n                       <ion-item-option [routerLink]=\"'/corr-packets/' + corrPacket.id + '/edit/Entregar'\"\n                                        color=\"success\">\n                           Entregar\n                           <ion-icon slot=\"end\"\n                                     class=\"icon-xs\"\n                                     name=\"share-outline\"></ion-icon>\n                       </ion-item-option>\n                   </ion-item-options>\n               </ion-item-sliding>\n\n               <ion-item color=\"success\"\n                         *ngIf=\"corrPacket.status == 'delivered'\"\n                         [routerLink]=\"'/corr-packets/' + corrPacket.id + '/edit/view'\">\n                   <ion-label>\n                       {{corrPacket.name}}\n                       <h3>Entregado el {{corrPacket.delivered_at | dateFormat:'DD/MM/YYYY HH:mm'}}</h3>\n                   </ion-label>\n                   <div>Entregado</div>\n               </ion-item>\n\n           </ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"!housUnitsService?.housUnit?.corr_packets?.length\">\n            <ion-item>\n                <ion-label>Sin correspondencia</ion-label>\n            </ion-item>\n        </ng-container>\n    </ion-list>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-postboxes-item/corr-postboxes-item.component.html":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-postboxes-item/corr-postboxes-item.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCorrPacketsCorrPostboxesItemCorrPostboxesItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ng-container *ngFor=\"let housUnit of housUnits\">\n    <ng-container *ngIf=\"housUnit.children_units.length\">\n        <h4>{{housUnit.name}}</h4>\n        <app-corr-postboxes-item [houseUnits]=\"housUnit.children_units\"></app-corr-postboxes-item>\n    </ng-container>\n    <ng-container *ngIf=\"!housUnit.children_units.length\">\n        <button style=\"height: 20px; margin: 5px;\"\n                [ngStyle]=\"{'background-color': (housUnit.corr_packets?.length ? (hasReceived(housUnit.corr_packets) ? '#283B50' : '#6A6D71') : '#6A6D71')}\"\n                [routerLink]=\"'/corr-packets/postbox/' + housUnit.id\">{{housUnit.name}}</button>\n    </ng-container>\n</ng-container>\n\n\n\n\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-postboxes/corr-postboxes.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-postboxes/corr-postboxes.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCorrPacketsCorrPostboxesCorrPostboxesComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"Buzones\"></app-main-header>\n<ion-content>\n\n    <ion-searchbar placeholder=\"Buscar Unidad habitacional\"\n                   class=\"ion-padding\"></ion-searchbar>\n\n    <ng-container *ngIf=\"housUnitsService?.housUnits?.length\">\n        <ng-container *ngFor=\"let housUnit of housUnitsService?.housUnits\">\n            <ng-container *ngIf=\"housUnit.children_units.length && !housUnit.parent\">\n                <h3>{{housUnit.name}}</h3>\n                <app-corr-postboxes-item [houseUnits]=\"housUnit.children_units\"></app-corr-postboxes-item>\n            </ng-container>\n        </ng-container>\n    </ng-container>\n\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-receive-modal/corr-receive-modal.component.html":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-receive-modal/corr-receive-modal.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCorrPacketsCorrReceiveModalCorrReceiveModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"closeModal()\">\n                <ion-icon slot=\"icon-only\"\n                          [name]=\"'arrow-back-outline'\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"primary\">\n            <ion-button color=\"primary\"\n                        (click)=\"null\"\n                        [disabled]=\"false\">\n                <ion-icon slot=\"icon-only\"\n                          [name]=\"'camera-outline'\"></ion-icon>\n            </ion-button>\n            <ion-button color=\"success\"\n                        (click)=\"closeModal()\"\n                        [disabled]=\"false\">\n                <ion-icon slot=\"icon-only\"\n                          [name]=\"'save-outline'\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>{{action}} correspondencia</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <app-corr-packets-form [type]=\"action\"></app-corr-packets-form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/corr-packets/corr-delivery-modal/corr-delivery-modal.component.scss":
    /*!*************************************************************************************!*\
      !*** ./src/app/corr-packets/corr-delivery-modal/corr-delivery-modal.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCorrPacketsCorrDeliveryModalCorrDeliveryModalComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcnItcGFja2V0cy9jb3JyLWRlbGl2ZXJ5LW1vZGFsL2NvcnItZGVsaXZlcnktbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/corr-packets/corr-delivery-modal/corr-delivery-modal.component.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/corr-packets/corr-delivery-modal/corr-delivery-modal.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: CorrDeliveryModalComponent */

    /***/
    function srcAppCorrPacketsCorrDeliveryModalCorrDeliveryModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorrDeliveryModalComponent", function () {
        return CorrDeliveryModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CorrDeliveryModalComponent = /*#__PURE__*/function () {
        function CorrDeliveryModalComponent() {
          _classCallCheck(this, CorrDeliveryModalComponent);
        }

        _createClass(CorrDeliveryModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CorrDeliveryModalComponent;
      }();

      CorrDeliveryModalComponent.ctorParameters = function () {
        return [];
      };

      CorrDeliveryModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corr-delivery-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./corr-delivery-modal.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-delivery-modal/corr-delivery-modal.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./corr-delivery-modal.component.scss */
        "./src/app/corr-packets/corr-delivery-modal/corr-delivery-modal.component.scss"))["default"]]
      })], CorrDeliveryModalComponent);
      /***/
    },

    /***/
    "./src/app/corr-packets/corr-packets-create/corr-packets-create.component.scss":
    /*!*************************************************************************************!*\
      !*** ./src/app/corr-packets/corr-packets-create/corr-packets-create.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCorrPacketsCorrPacketsCreateCorrPacketsCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcnItcGFja2V0cy9jb3JyLXBhY2tldHMtY3JlYXRlL2NvcnItcGFja2V0cy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/corr-packets/corr-packets-create/corr-packets-create.component.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/corr-packets/corr-packets-create/corr-packets-create.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: CorrPacketsCreateComponent */

    /***/
    function srcAppCorrPacketsCorrPacketsCreateCorrPacketsCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorrPacketsCreateComponent", function () {
        return CorrPacketsCreateComponent;
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


      var _corr_packets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../corr-packets.service */
      "./src/app/corr-packets/corr-packets.service.ts");
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

      var CorrPacketsCreateComponent = /*#__PURE__*/function () {
        function CorrPacketsCreateComponent(corrPacketsService, route, platform, splitPanel) {
          _classCallCheck(this, CorrPacketsCreateComponent);

          this.corrPacketsService = corrPacketsService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.formValid = false;
        }

        _createClass(CorrPacketsCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.clearPosts();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.splitPanel.show.next(true);
            this.formSubscription = this.corrPacketForm.corrPacketsForm.valueChanges.subscribe(function (data) {
              _this.corrPacketsService.corrPacketsFormValid.next(_this.corrPacketForm.corrPacketsForm.valid);
            });
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.formSubscription.unsubscribe();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.corrPacketsService.createCorrPacket();
            this.corrPacketsService.corrPacket = {};
          }
        }]);

        return CorrPacketsCreateComponent;
      }();

      CorrPacketsCreateComponent.ctorParameters = function () {
        return [{
          type: _corr_packets_service__WEBPACK_IMPORTED_MODULE_2__["CorrPacketsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      CorrPacketsCreateComponent.propDecorators = {
        corrPacketForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['corrPacketForm']
        }]
      };
      CorrPacketsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corr-packets-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./corr-packets-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-create/corr-packets-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./corr-packets-create.component.scss */
        "./src/app/corr-packets/corr-packets-create/corr-packets-create.component.scss"))["default"]]
      })], CorrPacketsCreateComponent);
      /***/
    },

    /***/
    "./src/app/corr-packets/corr-packets-duplicate/corr-packets-duplicate.component.scss":
    /*!*******************************************************************************************!*\
      !*** ./src/app/corr-packets/corr-packets-duplicate/corr-packets-duplicate.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCorrPacketsCorrPacketsDuplicateCorrPacketsDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcnItcGFja2V0cy9jb3JyLXBhY2tldHMtZHVwbGljYXRlL2NvcnItcGFja2V0cy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/corr-packets/corr-packets-duplicate/corr-packets-duplicate.component.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/corr-packets/corr-packets-duplicate/corr-packets-duplicate.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: CorrPacketsDuplicateComponent */

    /***/
    function srcAppCorrPacketsCorrPacketsDuplicateCorrPacketsDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorrPacketsDuplicateComponent", function () {
        return CorrPacketsDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CorrPacketsDuplicateComponent = /*#__PURE__*/function () {
        function CorrPacketsDuplicateComponent() {
          _classCallCheck(this, CorrPacketsDuplicateComponent);
        }

        _createClass(CorrPacketsDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CorrPacketsDuplicateComponent;
      }();

      CorrPacketsDuplicateComponent.ctorParameters = function () {
        return [];
      };

      CorrPacketsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corr-packets-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./corr-packets-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-duplicate/corr-packets-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./corr-packets-duplicate.component.scss */
        "./src/app/corr-packets/corr-packets-duplicate/corr-packets-duplicate.component.scss"))["default"]]
      })], CorrPacketsDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/corr-packets/corr-packets-edit/corr-packets-edit.component.scss":
    /*!*********************************************************************************!*\
      !*** ./src/app/corr-packets/corr-packets-edit/corr-packets-edit.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCorrPacketsCorrPacketsEditCorrPacketsEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcnItcGFja2V0cy9jb3JyLXBhY2tldHMtZWRpdC9jb3JyLXBhY2tldHMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/corr-packets/corr-packets-edit/corr-packets-edit.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/corr-packets/corr-packets-edit/corr-packets-edit.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: CorrPacketsEditComponent */

    /***/
    function srcAppCorrPacketsCorrPacketsEditCorrPacketsEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorrPacketsEditComponent", function () {
        return CorrPacketsEditComponent;
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


      var _corr_packets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../corr-packets.service */
      "./src/app/corr-packets/corr-packets.service.ts");
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

      var CorrPacketsEditComponent = /*#__PURE__*/function () {
        function CorrPacketsEditComponent(corrPacketsService, route, platform, splitPanel) {
          _classCallCheck(this, CorrPacketsEditComponent);

          this.corrPacketsService = corrPacketsService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.model = null;
          this.type = null;
        }

        _createClass(CorrPacketsEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.corrPacketsService.editCorrPacket(this.id);
            this.type = this.route.snapshot.paramMap.get('type');
            this.splitPanel.show.next(true);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            this.corrPacketForm.corrPacketsForm.valueChanges.subscribe(function (data) {
              _this2.corrPacketsService.corrPacketsFormValid.next(_this2.corrPacketForm.corrPacketsForm.valid);
            });
          }
        }]);

        return CorrPacketsEditComponent;
      }();

      CorrPacketsEditComponent.ctorParameters = function () {
        return [{
          type: _corr_packets_service__WEBPACK_IMPORTED_MODULE_2__["CorrPacketsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      CorrPacketsEditComponent.propDecorators = {
        corrPacketForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['corrPacketForm']
        }]
      };
      CorrPacketsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corr-packets-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./corr-packets-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-edit/corr-packets-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./corr-packets-edit.component.scss */
        "./src/app/corr-packets/corr-packets-edit/corr-packets-edit.component.scss"))["default"]]
      })], CorrPacketsEditComponent);
      /***/
    },

    /***/
    "./src/app/corr-packets/corr-packets-form/corr-packets-form.component.scss":
    /*!*********************************************************************************!*\
      !*** ./src/app/corr-packets/corr-packets-form/corr-packets-form.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCorrPacketsCorrPacketsFormCorrPacketsFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcnItcGFja2V0cy9jb3JyLXBhY2tldHMtZm9ybS9jb3JyLXBhY2tldHMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/corr-packets/corr-packets-form/corr-packets-form.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/corr-packets/corr-packets-form/corr-packets-form.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: CorrPacketsFormComponent */

    /***/
    function srcAppCorrPacketsCorrPacketsFormCorrPacketsFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorrPacketsFormComponent", function () {
        return CorrPacketsFormComponent;
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


      var _corr_packets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../corr-packets.service */
      "./src/app/corr-packets/corr-packets.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _hous_units_hous_units_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../hous-units/hous-units.service */
      "./src/app/hous-units/hous-units.service.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _shared_services_camera_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../@shared/services/camera.service */
      "./src/app/@shared/services/camera.service.ts");
      /* harmony import */


      var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-ionic-image-viewer */
      "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var CorrPacketsFormComponent = /*#__PURE__*/function () {
        function CorrPacketsFormComponent(corrPacketsService, toTitlecase, housUnitsService, camera, modalController) {
          _classCallCheck(this, CorrPacketsFormComponent);

          this.corrPacketsService = corrPacketsService;
          this.toTitlecase = toTitlecase;
          this.housUnitsService = housUnitsService;
          this.camera = camera;
          this.modalController = modalController;
          this.model = {};
          this.type = null;
          this.validationMessages = {
            'name': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'
            }],
            'hous_unit_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('housUnit - NAME') + ' es obligatorio.'
            }],
            'conveyor': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('TRANSPORTADOR') + ' es obligatorio.'
            }],
            'guide_number': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('NÚMERO DE GUIA') + ' es obligatorio.'
            }],
            'received_at': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('RECIBIDO') + ' es obligatorio.'
            }],
            'received_comment': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('COMENTARIO RECIBIDO') + ' es obligatorio.'
            }],
            'delivered_at': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('ENTREGADO') + ' es obligatorio.'
            }],
            'delivered_to': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('ENTREGADO A') + ' es obligatorio.'
            }],
            'delivered_signature': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('FIRMA DE ENTREGADO') + ' es obligatorio.'
            }],
            'delivered_comment': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('COMENTARIO ENTREGADO') + ' es obligatorio.'
            }],
            'status': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('ESTADO') + ' es obligatorio.'
            }]
          };
          this.now = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD HH:mm');
        }

        _createClass(CorrPacketsFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {// if (this.type && this.type == 'Entregar') {
            //     this.model.delivered_at = this.now;
            // }
            //
            // if (this.type && this.type == 'Recibir') {
            //     this.model.received_at = this.now;
            // }
          }
        }, {
          key: "openViewer",
          value: function openViewer(url) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__["ViewerModalComponent"],
                        componentProps: {
                          src: url
                        },
                        cssClass: 'ion-img-viewer',
                        keyboardClose: true,
                        showBackdrop: true
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "clear",
          value: function clear() {
            // this.corrPacketsService.createCorrPacket();
            this.corrPacketsService.corrPacket = {};
          } // set setHousUnitId

        }, {
          key: "setHousUnitId",
          value: function setHousUnitId(event) {
            this.corrPacketsService.corrPacket.hous_unit_id = event.value ? event.value.id : null;
          } // end setHousUnitId

        }, {
          key: "uploadPhoto",
          value: function uploadPhoto() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.camera.addNewToGallery(this.model.hous_unit_id, 'CorrPacket', this.type == 'Recibir' ? 'received' : 'delivered').then(function (res) {
                        if (!_this3.model.files) {
                          _this3.model.files = [];
                        }

                        _this3.model.files.push(res.data);
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "housUnitId",
          set: function set(data) {
            var _this4 = this;

            console.log('housunitid ' + data);

            if (data) {
              this.housUnitsService.getHouseUnit(data).then(function (res) {
                if (_this4.type == 'Recibir') {
                  _this4.clear();

                  _this4.corrPacketsService.corrPacket.received_at = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD HH:mm');
                  _this4.corrPacketsService.corrPacket.status = 'received';
                }

                if (_this4.type == 'Entregar') {
                  // this.model.delivered_at = moment().format('YYYY-MM-DD HH:mm');
                  setTimeout(function () {
                    console.log('entregar ' + moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD HH:mm') + ' delivered');
                    _this4.corrPacketsService.corrPacket.delivered_at = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD HH:mm');
                    _this4.corrPacketsService.corrPacket.status = 'delivered';
                  }, 1000);
                }

                _this4.corrPacketsService.corrPacket.hous_unit = res.data;
                _this4.corrPacketsService.corrPacket.hous_unit_id = parseInt(data);
              });
            }
          }
        }]);

        return CorrPacketsFormComponent;
      }();

      CorrPacketsFormComponent.ctorParameters = function () {
        return [{
          type: _corr_packets_service__WEBPACK_IMPORTED_MODULE_2__["CorrPacketsService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }, {
          type: _hous_units_hous_units_service__WEBPACK_IMPORTED_MODULE_4__["HousUnitsService"]
        }, {
          type: _shared_services_camera_service__WEBPACK_IMPORTED_MODULE_6__["CameraService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
        }];
      };

      CorrPacketsFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['type']
        }],
        housUnitId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        corrPacketsForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['corrPacketsForm']
        }]
      };
      CorrPacketsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corr-packets-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./corr-packets-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-form/corr-packets-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./corr-packets-form.component.scss */
        "./src/app/corr-packets/corr-packets-form/corr-packets-form.component.scss"))["default"]]
      })], CorrPacketsFormComponent);
      /***/
    },

    /***/
    "./src/app/corr-packets/corr-packets-list/corr-packets-list.component.scss":
    /*!*********************************************************************************!*\
      !*** ./src/app/corr-packets/corr-packets-list/corr-packets-list.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCorrPacketsCorrPacketsListCorrPacketsListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcnItcGFja2V0cy9jb3JyLXBhY2tldHMtbGlzdC9jb3JyLXBhY2tldHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/corr-packets/corr-packets-list/corr-packets-list.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/corr-packets/corr-packets-list/corr-packets-list.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: CorrPacketsListComponent */

    /***/
    function srcAppCorrPacketsCorrPacketsListCorrPacketsListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorrPacketsListComponent", function () {
        return CorrPacketsListComponent;
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


      var _corr_packets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../corr-packets.service */
      "./src/app/corr-packets/corr-packets.service.ts");
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

      var CorrPacketsListComponent = /*#__PURE__*/function () {
        function CorrPacketsListComponent(corrPacketsService, api, loading, splitPanel) {
          _classCallCheck(this, CorrPacketsListComponent);

          this.corrPacketsService = corrPacketsService;
          this.api = api;
          this.loading = loading;
          this.splitPanel = splitPanel;
        }

        _createClass(CorrPacketsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.corrPacketsService.getCorrPackets();
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

        return CorrPacketsListComponent;
      }();

      CorrPacketsListComponent.ctorParameters = function () {
        return [{
          type: _corr_packets_service__WEBPACK_IMPORTED_MODULE_2__["CorrPacketsService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"]
        }];
      };

      CorrPacketsListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      CorrPacketsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corr-packets-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./corr-packets-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-list/corr-packets-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./corr-packets-list.component.scss */
        "./src/app/corr-packets/corr-packets-list/corr-packets-list.component.scss"))["default"]]
      })], CorrPacketsListComponent);
      /***/
    },

    /***/
    "./src/app/corr-packets/corr-packets-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/corr-packets/corr-packets-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: CorrPacketsPageRoutingModule */

    /***/
    function srcAppCorrPacketsCorrPacketsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorrPacketsPageRoutingModule", function () {
        return CorrPacketsPageRoutingModule;
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


      var _corr_packets_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./corr-packets.page */
      "./src/app/corr-packets/corr-packets.page.ts");
      /* harmony import */


      var _corr_packets_edit_corr_packets_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./corr-packets-edit/corr-packets-edit.component */
      "./src/app/corr-packets/corr-packets-edit/corr-packets-edit.component.ts");
      /* harmony import */


      var _corr_packets_create_corr_packets_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./corr-packets-create/corr-packets-create.component */
      "./src/app/corr-packets/corr-packets-create/corr-packets-create.component.ts");
      /* harmony import */


      var _corr_packets_list_corr_packets_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./corr-packets-list/corr-packets-list.component */
      "./src/app/corr-packets/corr-packets-list/corr-packets-list.component.ts");
      /* harmony import */


      var _corr_postboxes_corr_postboxes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./corr-postboxes/corr-postboxes.component */
      "./src/app/corr-packets/corr-postboxes/corr-postboxes.component.ts");
      /* harmony import */


      var _corr_postbox_corr_postbox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./corr-postbox/corr-postbox.component */
      "./src/app/corr-packets/corr-postbox/corr-postbox.component.ts");

      var routes = [{
        path: '',
        component: _corr_packets_page__WEBPACK_IMPORTED_MODULE_3__["CorrPacketsPage"]
      }, {
        path: 'postboxes',
        component: _corr_postboxes_corr_postboxes_component__WEBPACK_IMPORTED_MODULE_7__["CorrPostboxesComponent"]
      }, {
        path: 'postbox/:id',
        component: _corr_postbox_corr_postbox_component__WEBPACK_IMPORTED_MODULE_8__["CorrPostboxComponent"]
      }, {
        path: 'list',
        component: _corr_packets_list_corr_packets_list_component__WEBPACK_IMPORTED_MODULE_6__["CorrPacketsListComponent"]
      }, {
        path: 'create/:housUnitId',
        component: _corr_packets_create_corr_packets_create_component__WEBPACK_IMPORTED_MODULE_5__["CorrPacketsCreateComponent"]
      }, {
        path: ':id/edit',
        component: _corr_packets_edit_corr_packets_edit_component__WEBPACK_IMPORTED_MODULE_4__["CorrPacketsEditComponent"]
      }, {
        path: ':id/edit/:type',
        component: _corr_packets_edit_corr_packets_edit_component__WEBPACK_IMPORTED_MODULE_4__["CorrPacketsEditComponent"]
      }];

      var CorrPacketsPageRoutingModule = function CorrPacketsPageRoutingModule() {
        _classCallCheck(this, CorrPacketsPageRoutingModule);
      };

      CorrPacketsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CorrPacketsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/corr-packets/corr-packets.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/corr-packets/corr-packets.module.ts ***!
      \*****************************************************/

    /*! exports provided: CorrPacketsPageModule */

    /***/
    function srcAppCorrPacketsCorrPacketsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorrPacketsPageModule", function () {
        return CorrPacketsPageModule;
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


      var _corr_packets_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./corr-packets-routing.module */
      "./src/app/corr-packets/corr-packets-routing.module.ts");
      /* harmony import */


      var _corr_packets_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./corr-packets.page */
      "./src/app/corr-packets/corr-packets.page.ts");
      /* harmony import */


      var _corr_packets_list_corr_packets_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./corr-packets-list/corr-packets-list.component */
      "./src/app/corr-packets/corr-packets-list/corr-packets-list.component.ts");
      /* harmony import */


      var _corr_packets_create_corr_packets_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./corr-packets-create/corr-packets-create.component */
      "./src/app/corr-packets/corr-packets-create/corr-packets-create.component.ts");
      /* harmony import */


      var _corr_packets_duplicate_corr_packets_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./corr-packets-duplicate/corr-packets-duplicate.component */
      "./src/app/corr-packets/corr-packets-duplicate/corr-packets-duplicate.component.ts");
      /* harmony import */


      var _corr_packets_edit_corr_packets_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./corr-packets-edit/corr-packets-edit.component */
      "./src/app/corr-packets/corr-packets-edit/corr-packets-edit.component.ts");
      /* harmony import */


      var _corr_packets_form_corr_packets_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./corr-packets-form/corr-packets-form.component */
      "./src/app/corr-packets/corr-packets-form/corr-packets-form.component.ts");
      /* harmony import */


      var _corr_postbox_corr_postbox_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./corr-postbox/corr-postbox.component */
      "./src/app/corr-packets/corr-postbox/corr-postbox.component.ts");
      /* harmony import */


      var _corr_postboxes_corr_postboxes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./corr-postboxes/corr-postboxes.component */
      "./src/app/corr-packets/corr-postboxes/corr-postboxes.component.ts");
      /* harmony import */


      var _corr_receive_modal_corr_receive_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./corr-receive-modal/corr-receive-modal.component */
      "./src/app/corr-packets/corr-receive-modal/corr-receive-modal.component.ts");
      /* harmony import */


      var _corr_delivery_modal_corr_delivery_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./corr-delivery-modal/corr-delivery-modal.component */
      "./src/app/corr-packets/corr-delivery-modal/corr-delivery-modal.component.ts");
      /* harmony import */


      var _corr_postboxes_item_corr_postboxes_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./corr-postboxes-item/corr-postboxes-item.component */
      "./src/app/corr-packets/corr-postboxes-item/corr-postboxes-item.component.ts");
      /* harmony import */


      var _hous_units_hous_units_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../hous-units/hous-units.service */
      "./src/app/hous-units/hous-units.service.ts");

      var CorrPacketsPageModule = function CorrPacketsPageModule() {
        _classCallCheck(this, CorrPacketsPageModule);
      };

      CorrPacketsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _corr_packets_routing_module__WEBPACK_IMPORTED_MODULE_6__["CorrPacketsPageRoutingModule"]],
        declarations: [_corr_packets_page__WEBPACK_IMPORTED_MODULE_7__["CorrPacketsPage"], _corr_packets_list_corr_packets_list_component__WEBPACK_IMPORTED_MODULE_8__["CorrPacketsListComponent"], _corr_packets_create_corr_packets_create_component__WEBPACK_IMPORTED_MODULE_9__["CorrPacketsCreateComponent"], _corr_packets_duplicate_corr_packets_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["CorrPacketsDuplicateComponent"], _corr_packets_edit_corr_packets_edit_component__WEBPACK_IMPORTED_MODULE_11__["CorrPacketsEditComponent"], _corr_packets_form_corr_packets_form_component__WEBPACK_IMPORTED_MODULE_12__["CorrPacketsFormComponent"], _corr_postbox_corr_postbox_component__WEBPACK_IMPORTED_MODULE_13__["CorrPostboxComponent"], _corr_postboxes_corr_postboxes_component__WEBPACK_IMPORTED_MODULE_14__["CorrPostboxesComponent"], _corr_receive_modal_corr_receive_modal_component__WEBPACK_IMPORTED_MODULE_15__["CorrReceiveModalComponent"], _corr_delivery_modal_corr_delivery_modal_component__WEBPACK_IMPORTED_MODULE_16__["CorrDeliveryModalComponent"], _corr_postboxes_item_corr_postboxes_item_component__WEBPACK_IMPORTED_MODULE_17__["CorrPostboxesItemComponent"]],
        providers: [_hous_units_hous_units_service__WEBPACK_IMPORTED_MODULE_18__["HousUnitsService"]]
      })], CorrPacketsPageModule);
      /***/
    },

    /***/
    "./src/app/corr-packets/corr-packets.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/corr-packets/corr-packets.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCorrPacketsCorrPacketsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcnItcGFja2V0cy9jb3JyLXBhY2tldHMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/corr-packets/corr-packets.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/corr-packets/corr-packets.page.ts ***!
      \***************************************************/

    /*! exports provided: CorrPacketsPage */

    /***/
    function srcAppCorrPacketsCorrPacketsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorrPacketsPage", function () {
        return CorrPacketsPage;
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

      var CorrPacketsPage = /*#__PURE__*/function () {
        function CorrPacketsPage(splitPanel) {
          _classCallCheck(this, CorrPacketsPage);

          this.splitPanel = splitPanel;
        }

        _createClass(CorrPacketsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }]);

        return CorrPacketsPage;
      }();

      CorrPacketsPage.ctorParameters = function () {
        return [{
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"]
        }];
      };

      CorrPacketsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corr-packets',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./corr-packets.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./corr-packets.page.scss */
        "./src/app/corr-packets/corr-packets.page.scss"))["default"]]
      })], CorrPacketsPage);
      /***/
    },

    /***/
    "./src/app/corr-packets/corr-packets.service.ts":
    /*!******************************************************!*\
      !*** ./src/app/corr-packets/corr-packets.service.ts ***!
      \******************************************************/

    /*! exports provided: CorrPacketsService */

    /***/
    function srcAppCorrPacketsCorrPacketsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorrPacketsService", function () {
        return CorrPacketsService;
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

      var CorrPacketsService = /*#__PURE__*/function () {
        function CorrPacketsService(api, alert, toast, router, navigation) {
          _classCallCheck(this, CorrPacketsService);

          this.api = api;
          this.alert = alert;
          this.toast = toast;
          this.router = router;
          this.navigation = navigation;
          this.corrPacketsUrl = 'corr-packets';
          this.corrPacketsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
          this.corrPackets = [];
          this.corrPacket = {};
          this.corrPacketLists = {};
          this.searchValue = '';
          this.perPage = 10;
          this.meta = null;
          this.page = 1;
          this.pagesContent = document.getElementById('pages-content');
          this.corrPacketsFormValid.subscribe(function (data) {
            console.log('formulario', data);
          });
        }

        _createClass(CorrPacketsService, [{
          key: "getCorrPackets",
          value: function getCorrPackets() {
            var _this5 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.corrPacketsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this5.corrPackets = res.data;
              _this5.corrPacketLists = res.lists;
              _this5.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editCorrPacket",
          value: function editCorrPacket(id) {
            var _this6 = this;

            this.api.get(this.corrPacketsUrl + '/' + id + '/edit').subscribe(function (res) {
              _this6.corrPacket = res.data.model;
              _this6.corrPacketLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateCorrPacket",
          value: function updateCorrPacket() {
            var _this7 = this;

            this.api.put(this.corrPacketsUrl + '/' + this.corrPacket.id, {
              model: this.corrPacket,
              pivots: {}
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getCorrPackets(1);
            });
          }
        }, {
          key: "createCorrPacket",
          value: function createCorrPacket() {
            var _this8 = this;

            this.api.get(this.corrPacketsUrl + '/create').subscribe(function (res) {
              _this8.corrPacket = {};
              _this8.corrPacketLists = res.lists;
            });
          }
        }, {
          key: "storeCorrPacket",
          value: function storeCorrPacket() {
            var _this9 = this;

            this.api.post(this.corrPacketsUrl, {
              model: this.corrPacket,
              pivots: {}
            }).subscribe(function (res) {
              _this9.toast.present(res.message, 'toast-success', 'top');

              _this9.navigation.back();

              _this9.getCorrPackets(1);
            });
          }
        }, {
          key: "deleteCorrPacket",
          value: function deleteCorrPacket(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this10 = this;

              var confirm;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alert.confirmation('Desea eliminar el item?');

                    case 2:
                      confirm = _context3.sent;

                      if (!confirm) {
                        _context3.next = 7;
                        break;
                      }

                      this.api["delete"](this.corrPacketsUrl + '/' + id, {}).subscribe(function (res) {
                        _this10.toast.present(res.message, 'toast-success', 'top');

                        _this10.getCorrPackets(1);
                      });
                      _context3.next = 8;
                      break;

                    case 7:
                      return _context3.abrupt("return");

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return CorrPacketsService;
      }();

      CorrPacketsService.ctorParameters = function () {
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

      CorrPacketsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CorrPacketsService);
      /***/
    },

    /***/
    "./src/app/corr-packets/corr-postbox/corr-postbox.component.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/corr-packets/corr-postbox/corr-postbox.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCorrPacketsCorrPostboxCorrPostboxComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcnItcGFja2V0cy9jb3JyLXBvc3Rib3gvY29yci1wb3N0Ym94LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/corr-packets/corr-postbox/corr-postbox.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/corr-packets/corr-postbox/corr-postbox.component.ts ***!
      \*********************************************************************/

    /*! exports provided: CorrPostboxComponent */

    /***/
    function srcAppCorrPacketsCorrPostboxCorrPostboxComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorrPostboxComponent", function () {
        return CorrPostboxComponent;
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
      /*! ../../@shared/services/split-panel.service */
      "./src/app/@shared/services/split-panel.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _corr_receive_modal_corr_receive_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../corr-receive-modal/corr-receive-modal.component */
      "./src/app/corr-packets/corr-receive-modal/corr-receive-modal.component.ts");
      /* harmony import */


      var _corr_packets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../corr-packets.service */
      "./src/app/corr-packets/corr-packets.service.ts");
      /* harmony import */


      var _hous_units_hous_units_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../hous-units/hous-units.service */
      "./src/app/hous-units/hous-units.service.ts");

      var CorrPostboxComponent = /*#__PURE__*/function () {
        function CorrPostboxComponent(splitPanel, router, route, modalController, corrPacketsService, housUnitsService) {
          _classCallCheck(this, CorrPostboxComponent);

          this.splitPanel = splitPanel;
          this.router = router;
          this.route = route;
          this.modalController = modalController;
          this.corrPacketsService = corrPacketsService;
          this.housUnitsService = housUnitsService;
          this.dataReturned = null;
        }

        _createClass(CorrPostboxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
            this.housUnitsService.editHousUnit(this.route.snapshot.paramMap.get('id'));
          }
        }, {
          key: "openReceiveModal",
          value: function openReceiveModal() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this11 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.housUnitsService.getHousUnits();
                      _context4.next = 3;
                      return this.modalController.create({
                        component: _corr_receive_modal_corr_receive_modal_component__WEBPACK_IMPORTED_MODULE_5__["CorrReceiveModalComponent"],
                        componentProps: {
                          action: action !== null && action !== void 0 ? action : '',
                          hous_unit_id: this.route.snapshot.paramMap.get('id')
                        }
                      });

                    case 3:
                      modal = _context4.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned !== null) {
                          _this11.dataReturned = dataReturned.data; // console.table(dataReturned);
                        }
                      });
                      _context4.next = 7;
                      return modal.present();

                    case 7:
                      return _context4.abrupt("return", _context4.sent);

                    case 8:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return CorrPostboxComponent;
      }();

      CorrPostboxComponent.ctorParameters = function () {
        return [{
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _corr_packets_service__WEBPACK_IMPORTED_MODULE_6__["CorrPacketsService"]
        }, {
          type: _hous_units_hous_units_service__WEBPACK_IMPORTED_MODULE_7__["HousUnitsService"]
        }];
      };

      CorrPostboxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corr-postbox',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./corr-postbox.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-postbox/corr-postbox.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./corr-postbox.component.scss */
        "./src/app/corr-packets/corr-postbox/corr-postbox.component.scss"))["default"]]
      })], CorrPostboxComponent);
      /***/
    },

    /***/
    "./src/app/corr-packets/corr-postboxes-item/corr-postboxes-item.component.scss":
    /*!*************************************************************************************!*\
      !*** ./src/app/corr-packets/corr-postboxes-item/corr-postboxes-item.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCorrPacketsCorrPostboxesItemCorrPostboxesItemComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".screen-section {\n  height: 30%;\n  padding: 10% 5%;\n}\n.screen-section h1 {\n  font-size: 4rem;\n  color: #5e6061;\n}\n.screen-section h3 {\n  color: #B9BBBD;\n  font-size: 2rem;\n}\n.screen-section h3, .screen-section h1 {\n  text-align: right;\n  line-height: 100%;\n}\n.button-section {\n  display: grid;\n  grid-template-columns: repeat(20, 1fr);\n}\n@media (max-width: 576px) {\n  .button-section {\n    grid-template-columns: repeat(10, 1fr);\n  }\n}\n.button-section button {\n  background: rgba(128, 128, 128, 0.2) !important;\n  margin: 0.2rem;\n  font-size: 1rem;\n  height: 62px;\n  color: #6A6D71;\n  border-radius: 8px;\n}\n.button-section .operator {\n  background: #283B50 !important;\n}\n.button-section .zero-button {\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n.button-section .equal-sign {\n  border-color: #51C9CA !important;\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yci1wYWNrZXRzL2NvcnItcG9zdGJveGVzLWl0ZW0vY29yci1wb3N0Ym94ZXMtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFLFdBQUE7RUFFQSxlQUFBO0FBRkY7QUFJRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBRko7QUFLRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBSEo7QUFNRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFKSjtBQVVBO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0FBUEY7QUFTRTtFQUpGO0lBS0ksc0NBQUE7RUFORjtBQUNGO0FBUUU7RUFLRSwrQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVZKO0FBYUU7RUFFRSw4QkFBQTtBQVpKO0FBbUJFO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQWpCSjtBQW9CRTtFQUVFLGdDQUFBO0VBQ0Esc0JBQUE7QUFuQkoiLCJmaWxlIjoic3JjL2FwcC9jb3JyLXBhY2tldHMvY29yci1wb3N0Ym94ZXMtaXRlbS9jb3JyLXBvc3Rib3hlcy1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc2NyZWVuLXNlY3Rpb24ge1xuICAvLyBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDMwJTtcbiAgLy8gYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMTAlIDUlO1xuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgY29sb3I6IHJnYig5NCwgOTYsIDk3KTtcbiAgfVxuXG4gIGgzIHtcbiAgICBjb2xvcjogI0I5QkJCRDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cblxuICBoMywgaDEge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5cblxuXG4uYnV0dG9uLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyMCwgMWZyKTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgLy8gYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLy8gYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgIC8vIGJvcmRlcjogc29saWQgMC41cHggICNFQ0VERjQ7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIpICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwLjJyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGhlaWdodDogNjJweDtcbiAgICBjb2xvcjogIzZBNkQ3MTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cblxuICAub3BlcmF0b3Ige1xuICAgIC8vIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6ICMyODNCNTAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zcGVjaWFsLW9wZXJhdG9yIHtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjRjNGOUZGICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuemVyby1idXR0b24ge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMztcbiAgfVxuXG4gIC5lcXVhbC1zaWduIHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiM1MUM5Q0EgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6ICM1MUM5Q0EgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB9XG5cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/corr-packets/corr-postboxes-item/corr-postboxes-item.component.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/corr-packets/corr-postboxes-item/corr-postboxes-item.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: CorrPostboxesItemComponent */

    /***/
    function srcAppCorrPacketsCorrPostboxesItemCorrPostboxesItemComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorrPostboxesItemComponent", function () {
        return CorrPostboxesItemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CorrPostboxesItemComponent = /*#__PURE__*/function () {
        function CorrPostboxesItemComponent() {
          _classCallCheck(this, CorrPostboxesItemComponent);
        }

        _createClass(CorrPostboxesItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "hasReceived",
          value: function hasReceived(corr_packets) {
            var response = false;

            for (var i = 0; i < corr_packets.length; i++) {
              if (corr_packets[i].status == 'received') {
                response = true;
                return response;
              }
            }

            return response;
          }
        }]);

        return CorrPostboxesItemComponent;
      }();

      CorrPostboxesItemComponent.ctorParameters = function () {
        return [];
      };

      CorrPostboxesItemComponent.propDecorators = {
        housUnits: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['houseUnits']
        }],
        parent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['parent']
        }]
      };
      CorrPostboxesItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corr-postboxes-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./corr-postboxes-item.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-postboxes-item/corr-postboxes-item.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./corr-postboxes-item.component.scss */
        "./src/app/corr-packets/corr-postboxes-item/corr-postboxes-item.component.scss"))["default"]]
      })], CorrPostboxesItemComponent);
      /***/
    },

    /***/
    "./src/app/corr-packets/corr-postboxes/corr-postboxes.component.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/corr-packets/corr-postboxes/corr-postboxes.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCorrPacketsCorrPostboxesCorrPostboxesComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "[noscroll] {\n  --overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yci1wYWNrZXRzL2NvcnItcG9zdGJveGVzL2NvcnItcG9zdGJveGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcnItcGFja2V0cy9jb3JyLXBvc3Rib3hlcy9jb3JyLXBvc3Rib3hlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltub3Njcm9sbF0ge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/corr-packets/corr-postboxes/corr-postboxes.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/corr-packets/corr-postboxes/corr-postboxes.component.ts ***!
      \*************************************************************************/

    /*! exports provided: CorrPostboxesComponent */

    /***/
    function srcAppCorrPacketsCorrPostboxesCorrPostboxesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorrPostboxesComponent", function () {
        return CorrPostboxesComponent;
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
      /*! ../../@shared/services/split-panel.service */
      "./src/app/@shared/services/split-panel.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _hous_units_hous_units_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../hous-units/hous-units.service */
      "./src/app/hous-units/hous-units.service.ts");

      var CorrPostboxesComponent = /*#__PURE__*/function () {
        function CorrPostboxesComponent(splitPanel, router, housUnitsService) {
          _classCallCheck(this, CorrPostboxesComponent);

          this.splitPanel = splitPanel;
          this.router = router;
          this.housUnitsService = housUnitsService;
        }

        _createClass(CorrPostboxesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
            this.housUnitsService.getAllHousUnits();
          }
        }, {
          key: "openBox",
          value: function openBox(id) {
            this.router.navigateByUrl('/corr-packets/postbox/' + id);
          }
        }]);

        return CorrPostboxesComponent;
      }();

      CorrPostboxesComponent.ctorParameters = function () {
        return [{
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _hous_units_hous_units_service__WEBPACK_IMPORTED_MODULE_4__["HousUnitsService"]
        }];
      };

      CorrPostboxesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corr-postboxes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./corr-postboxes.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-postboxes/corr-postboxes.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./corr-postboxes.component.scss */
        "./src/app/corr-packets/corr-postboxes/corr-postboxes.component.scss"))["default"]]
      })], CorrPostboxesComponent);
      /***/
    },

    /***/
    "./src/app/corr-packets/corr-receive-modal/corr-receive-modal.component.scss":
    /*!***********************************************************************************!*\
      !*** ./src/app/corr-packets/corr-receive-modal/corr-receive-modal.component.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCorrPacketsCorrReceiveModalCorrReceiveModalComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcnItcGFja2V0cy9jb3JyLXJlY2VpdmUtbW9kYWwvY29yci1yZWNlaXZlLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/corr-packets/corr-receive-modal/corr-receive-modal.component.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/corr-packets/corr-receive-modal/corr-receive-modal.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: CorrReceiveModalComponent */

    /***/
    function srcAppCorrPacketsCorrReceiveModalCorrReceiveModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorrReceiveModalComponent", function () {
        return CorrReceiveModalComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var CorrReceiveModalComponent = /*#__PURE__*/function () {
        function CorrReceiveModalComponent(modalController, navParams) {
          _classCallCheck(this, CorrReceiveModalComponent);

          this.modalController = modalController;
          this.navParams = navParams;
        }

        _createClass(CorrReceiveModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.action = this.navParams.data.action;
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      onClosedData = null;
                      _context5.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return CorrReceiveModalComponent;
      }();

      CorrReceiveModalComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
        }];
      };

      CorrReceiveModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corr-receive-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./corr-receive-modal.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-receive-modal/corr-receive-modal.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./corr-receive-modal.component.scss */
        "./src/app/corr-packets/corr-receive-modal/corr-receive-modal.component.scss"))["default"]]
      })], CorrReceiveModalComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=corr-packets-corr-packets-module-es5.js.map