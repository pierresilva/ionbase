(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["corr-packets-corr-packets-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-delivery-modal/corr-delivery-modal.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-delivery-modal/corr-delivery-modal.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  corr-delivery-modal works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-create/corr-packets-create.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-create/corr-packets-create.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/corr-packets'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"corrPacketsService.storeCorrPacket()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!corrPacketsService.corrPacketsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'CORRESPONDENCIA PAQUETES' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-corr-packets-form #corrPacketForm\n                               type=\"Recibir\"\n                               [model]=\"corrPacketsService.corrPacket\"\n                               [housUnitId]=\"this.route.snapshot.paramMap.get('housUnitId')\"></app-corr-packets-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-duplicate/corr-packets-duplicate.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-duplicate/corr-packets-duplicate.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  CorrPackets duplicate works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-edit/corr-packets-edit.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-edit/corr-packets-edit.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/corr-packets'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"corrPacketsService.updateCorrPacket()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!corrPacketsService.corrPacketsFormValid.value || type == 'view'\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'CORRESPONDENCIA PAQUETES' | titlecase}}: {{ corrPacketsService.corrPacket?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-corr-packets-form #corrPacketForm\n                                   [model]=\"corrPacketsService.corrPacket\"\n                                   [type]=\"type\"\n                                   [housUnitId]=\"corrPacketsService.corrPacket.hous_unit_id\"></app-corr-packets-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-form/corr-packets-form.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-form/corr-packets-form.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #corrPacketsForm=\"ngForm\"\n      novalidate\n      autocomplete=\"off\">\n\n\n    <!-- hous_unit_id -->\n    <ion-item class=\"item-transparent\"\n              [hidden]=\"type\">\n        <ion-label>{{ 'UNIDAD HABITACIONAL' | titlecase }}</ion-label>\n        <ionic-selectable name=\"hous_unit_id\"\n                          id=\"hous_unit_id-field\"\n                          [disabled]=\"type == 'Entregar'\"\n                          [required]=\"false\"\n                          [(ngModel)]=\"model.hous_unit\"\n                          [items]=\"corrPacketsService.corrPacketLists.HousUnit\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('UNIDADES HABITACIONALES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('UNIDADES HABITACIONALES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setHousUnitId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.hous_unit_id\">\n            <div class=\"error-message\"\n                 *ngIf=\"corrPacketsForm.form.controls['hous_unit_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end hous_unit_id -->\n\n\n    <!-- name -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n        <ion-input [(ngModel)]=\"model.name\"\n                   type=\"text\"\n                   name=\"name\"\n                   [required]=\"true\"\n                   [readonly]=\"(type !== 'Recibir')\"\n                   id=\"name-field\"\n                   placeholder=\"\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.name\">\n            <div class=\"error-message\"\n                 *ngIf=\"corrPacketsForm.form.controls['name']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end name -->\n\n\n    <!-- conveyor -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'TRANPORTADOR' | titlecase }}</ion-label>\n        <ion-input [(ngModel)]=\"model.conveyor\"\n                   type=\"text\"\n                   name=\"conveyor\"\n                   [readonly]=\"(type !== 'Recibir')\"\n                   id=\"conveyor-field\"\n                   placeholder=\"\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.conveyor\">\n            <div class=\"error-message\"\n                 *ngIf=\"corrPacketsForm.form.controls['conveyor']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end conveyor -->\n\n\n    <!-- guide_number -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'NÚMERO DE GUIA' | titlecase }}</ion-label>\n        <ion-input [(ngModel)]=\"model.guide_number\"\n                   type=\"text\"\n                   name=\"guide_number\"\n                   [readonly]=\"(type !== 'Recibir')\"\n                   id=\"guide_number-field\"\n                   placeholder=\"\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.guide_number\">\n            <div class=\"error-message\"\n                 *ngIf=\"corrPacketsForm.form.controls['guide_number']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end guide_number -->\n\n\n    <!-- received_at -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'RECIBIDO' | titlecase }}</ion-label>\n        <ion-datetime name=\"received_at\"\n                      id=\"received_at-field\"\n                      [doneText]=\"'Seleccionar'\"\n                      [readonly]=\"true\"\n                      [cancelText]=\"'Cancelar'\"\n                      [(ngModel)]=\"model.received_at\"\n                      displayFormat=\"DD/MM/YYYY HH:mm\"></ion-datetime>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.received_at\">\n            <div class=\"error-message\"\n                 *ngIf=\"corrPacketsForm.form.controls['received_at']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end received_at -->\n\n\n    <!-- received_comment -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'COMENTARIO RECIBIDO' | titlecase }}</ion-label>\n        <ion-textarea [(ngModel)]=\"model.received_comment\"\n                      name=\"received_comment\"\n                      id=\"received_comment-field\"\n                      [readonly]=\"(type !== 'Recibir')\"\n                      rows=\"6\"\n                      placeholder=\"\"></ion-textarea>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.received_comment\">\n            <div class=\"error-message\"\n                 *ngIf=\"corrPacketsForm.form.controls['received_comment']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end received_comment -->\n\n\n    <!-- delivered_at -->\n    <ion-item class=\"item-transparent\"\n              [hidden]=\"type == 'Recibir'\">\n        <ion-label>{{ 'ENTREGADO' | titlecase }}</ion-label>\n        <ion-datetime name=\"delivered_at\"\n                      id=\"delivered_at-field\"\n                      [doneText]=\"'Seleccionar'\"\n                      [readonly]=\"true\"\n                      [cancelText]=\"'Cancelar'\"\n                      [(ngModel)]=\"model.delivered_at\"\n                      displayFormat=\"DD/MM/YYYY HH:mm\"></ion-datetime>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.delivered_at\">\n            <div class=\"error-message\"\n                 *ngIf=\"corrPacketsForm.form.controls['delivered_at']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end delivered_at -->\n\n\n    <!-- delivered_to -->\n    <ion-item class=\"item-transparent\"\n              [hidden]=\"type == 'Recibir'\">\n        <ion-label>{{ 'ENTREGADO A' | titlecase }}</ion-label>\n        <ion-input [(ngModel)]=\"model.delivered_to\"\n                   [readonly]=\"(type !== 'Entregar')\"\n                   type=\"text\"\n                   name=\"delivered_to\"\n                   id=\"delivered_to-field\"\n                   placeholder=\"\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.delivered_to\">\n            <div class=\"error-message\"\n                 *ngIf=\"corrPacketsForm.form.controls['delivered_to']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end delivered_to -->\n\n\n    <!-- delivered_comment -->\n    <ion-item class=\"item-transparent\"\n              [hidden]=\"type == 'Recibir'\">\n        <ion-label>{{ 'COMENTARIO ENTREGADO' | titlecase }}</ion-label>\n        <ion-textarea [(ngModel)]=\"model.delivered_comment\"\n                      [readonly]=\"(type !== 'Entregar')\"\n                      name=\"delivered_comment\"\n                      id=\"delivered_comment-field\"\n                      rows=\"6\"\n                      placeholder=\"\"></ion-textarea>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.delivered_comment\">\n            <div class=\"error-message\"\n                 *ngIf=\"corrPacketsForm.form.controls['delivered_comment']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end delivered_comment -->\n\n\n    <!-- status -->\n    <ion-item class=\"item-transparent\"\n              [hidden]=\"type\">\n        <ion-label>{{ 'ESTADO' | titlecase }}</ion-label>\n        <ion-select [(ngModel)]=\"model.status\"\n                    name=\"status\"\n                    id=\"status-field\"\n                    okText=\"Seleccionar\"\n                    cancelText=\"Cancelar\">\n            <ion-select-option value=\"\">{{ 'Ninguno' | titlecase }}</ion-select-option>\n            <ion-select-option value=\"received\">{{ 'Recibido' | titlecase }}</ion-select-option>\n            <ion-select-option value=\"delivered\">{{ 'Entregado' | titlecase }}</ion-select-option>\n        </ion-select>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.status\">\n            <div class=\"error-message\"\n                 *ngIf=\"corrPacketsForm.form.controls['status']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end status -->\n\n\n</form>\n\n\n<ion-item class=\"item-transparent\">\n    <ion-label>\n        Fotos:\n    </ion-label>\n    <ion-button slot=\"end\"\n                [disabled]=\"(type == 'view')\"\n                (click)=\"uploadPhoto()\"\n                color=\"success\"\n                fill=\"clear\">\n        <ion-icon name=\"camera-outline\"\n                  slot=\"icon-only\"></ion-icon>\n    </ion-button>\n\n</ion-item>\n\n<ng-container *ngIf=\"model?.files && model?.files?.length\">\n    <ion-item *ngFor=\"let file of model.files\"\n              (click)=\"openViewer(file.url)\"\n              class=\"item-transparent\">\n        <ion-thumbnail slot=\"start\">\n            <ion-img [src]=\"file.url\"></ion-img>\n        </ion-thumbnail>\n        <ion-label>\n            <h3>{{ (file.type == 'received' ? 'Foto recepción' : 'Foto entrega') }}</h3>\n            {{file.created_at | dateFormat:'DD/MM/YYYY HH:mm'}}\n        </ion-label>\n    </ion-item>\n</ng-container>\n\n<ng-container *ngIf=\"!model?.files && !model?.files?.length\">\n<ion-item class=\"item-transparent\">\n    <ion-label>Sin fotos</ion-label>\n</ion-item>\n</ng-container>\n\n<!--\n<pre>\n    {{corrPacketsForm.valid | json}}\n    {{corrPacketsForm.value | json}}\n</pre>\n\n<pre>\n    {{model | json}}\n</pre>\n-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-list/corr-packets-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-list/corr-packets-list.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'CORRESPONDENCIA PAQUETES' | titlecase}}\"\n                 primaryLink=\"corr-packets/create\"\n                 primaryText=\"Crear {{'CORRESPONDENCIA PAQUETES' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('CORRESPONDENCIA PAQUETES' | lowercase )\"\n                       (ionCancel)=\"this.corrPacketsService.searchValue = ''; corrPacketsService.getCorrPackets()\"\n                       (keyup.enter)=\"corrPacketsService.getCorrPackets()\"\n                       [(ngModel)]=\"corrPacketsService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && corrPacketsService.corrPackets?.length\">\n        <ion-card *ngFor=\"let corrPacket of corrPacketsService.corrPackets; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ corrPacket?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'TRANPORTADOR' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ corrPacket?.conveyor }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NÚMERO DE GUIA' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ corrPacket?.guide_number }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'RECIBIDO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ corrPacket?.received_at | dateFormat:'DD/MM/YYYY HH:mm' }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'COMENTARIO RECIBIDO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ corrPacket?.received_comment }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'ENTREGADO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ corrPacket?.delivered_at | dateFormat:'DD/MM/YYYY HH:mm' }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'ENTREGADO A' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ corrPacket?.delivered_to }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'COMENTARIO ENTREGADO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ corrPacket?.delivered_comment }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'ESTADO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ corrPacket?.status | status }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'UNIDADES HABITACIONALES' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/hous-units/{{ corrPacket?.hous_unit?.id }}/edit\">{{ corrPacket?.hous_unit?.name }}</a></div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/corr-packets/' + corrPacket?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"corrPacketsService.deleteCorrPacket(corrPacket?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !corrPacketsService.corrPackets?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'CORRESPONDENCIA PAQUETES' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/corr-packets/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'CORRESPONDENCIA PAQUETES' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"corrPacketsService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"corrPacketsService.getCorrPackets(corrPacketsService.meta.current_page - 1)\"\n                        [disabled]=\"corrPacketsService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{corrPacketsService.meta.current_page}}\n                /{{corrPacketsService.meta.last_page}} {{corrPacketsService.meta.from}}-{{corrPacketsService.meta.to}}\n                /{{corrPacketsService.meta.total}} </ion-button>\n            <ion-button (click)=\"corrPacketsService.getCorrPackets(corrPacketsService.meta.current_page + 1)\"\n                        [disabled]=\"corrPacketsService.meta.current_page == corrPacketsService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"CORRESPONDENCIA PAQUETES\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/corr-packets/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'CORRESPONDENCIA PAQUETES'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/corr-packets/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'CORRESPONDENCIA PAQUETES' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-postbox/corr-postbox.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-postbox/corr-postbox.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <ion-back-button\n                    [text]=\"''\"\n                    [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button [routerLink]=\"'/corr-packets/create/' + this.route.snapshot.paramMap.get('id')\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"false\">\n                <ng-container *ngIf=\"true\">Recibir</ng-container>\n                <ion-icon slot=\"end\"\n                          color=\"success\"\n                          name=\"share-outline\"\n                          style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Buzon {{housUnitsService?.housUnit?.name}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n\n    <ion-list>\n        <ion-list-header class=\"ion-padding\">\n\n            <ng-container *ngIf=\"housUnitsService?.housUnit?.parent?.parent?.parent?.parent\">\n                <span>&nbsp;{{housUnitsService?.housUnit?.parent?.parent?.parent?.parent?.name}}&nbsp;:</span>\n            </ng-container>\n\n            <ng-container *ngIf=\"housUnitsService?.housUnit?.parent?.parent?.parent\">\n                <span>&nbsp;{{housUnitsService?.housUnit?.parent?.parent?.parent?.name}}&nbsp;:</span>\n            </ng-container>\n\n            <ng-container *ngIf=\"housUnitsService?.housUnit?.parent?.parent\">\n                <span>&nbsp;{{housUnitsService?.housUnit?.parent?.parent?.name}}&nbsp;:</span>\n            </ng-container>\n\n            <ng-container *ngIf=\"housUnitsService?.housUnit?.parent\">\n                <span>&nbsp;{{housUnitsService?.housUnit?.parent?.name}}&nbsp;:</span>\n            </ng-container>\n\n            &nbsp;{{housUnitsService?.housUnit?.name}}\n\n        </ion-list-header>\n        <ng-container *ngIf=\"housUnitsService?.housUnit?.corr_packets?.length\">\n           <ng-container *ngFor=\"let corrPacket of housUnitsService.housUnit.corr_packets\">\n               <ion-item-sliding *ngIf=\"corrPacket.status == 'received'\">\n                   <ion-item color=\"primary\"\n                             [routerLink]=\"'/corr-packets/'+corrPacket.id+'/edit/view'\">\n                       <ion-label>\n                           {{corrPacket.name}}\n                           <h3>Recibido el {{corrPacket.received_at | dateFormat:'DD/MM/YYYY HH:mm'}}</h3>\n                       </ion-label>\n                       <div>Recibido</div>\n                   </ion-item>\n                   <ion-item-options side=\"end\">\n                       <ion-item-option [routerLink]=\"'/corr-packets/' + corrPacket.id + '/edit/Entregar'\"\n                                        color=\"success\">\n                           Entregar\n                           <ion-icon slot=\"end\"\n                                     class=\"icon-xs\"\n                                     name=\"share-outline\"></ion-icon>\n                       </ion-item-option>\n                   </ion-item-options>\n               </ion-item-sliding>\n\n               <ion-item color=\"success\"\n                         *ngIf=\"corrPacket.status == 'delivered'\"\n                         [routerLink]=\"'/corr-packets/' + corrPacket.id + '/edit/view'\">\n                   <ion-label>\n                       {{corrPacket.name}}\n                       <h3>Entregado el {{corrPacket.delivered_at | dateFormat:'DD/MM/YYYY HH:mm'}}</h3>\n                   </ion-label>\n                   <div>Entregado</div>\n               </ion-item>\n\n           </ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"!housUnitsService?.housUnit?.corr_packets?.length\">\n            <ion-item>\n                <ion-label>Sin correspondencia</ion-label>\n            </ion-item>\n        </ng-container>\n    </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-postboxes-item/corr-postboxes-item.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-postboxes-item/corr-postboxes-item.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ng-container *ngFor=\"let housUnit of housUnits\">\n    <ng-container *ngIf=\"housUnit.children_units.length\">\n        <h4>{{housUnit.name}}</h4>\n        <app-corr-postboxes-item [houseUnits]=\"housUnit.children_units\"></app-corr-postboxes-item>\n    </ng-container>\n    <ng-container *ngIf=\"!housUnit.children_units.length\">\n        <button style=\"height: 20px; margin: 5px;\"\n                [ngStyle]=\"{'background-color': (housUnit.corr_packets?.length ? (hasReceived(housUnit.corr_packets) ? '#283B50' : '#6A6D71') : '#6A6D71')}\"\n                [routerLink]=\"'/corr-packets/postbox/' + housUnit.id\">{{housUnit.name}}</button>\n    </ng-container>\n</ng-container>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-postboxes/corr-postboxes.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-postboxes/corr-postboxes.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"Buzones\"></app-main-header>\n<ion-content>\n\n    <ion-searchbar placeholder=\"Buscar Unidad habitacional\"\n                   class=\"ion-padding\"></ion-searchbar>\n\n    <ng-container *ngIf=\"housUnitsService?.housUnits?.length\">\n        <ng-container *ngFor=\"let housUnit of housUnitsService?.housUnits\">\n            <ng-container *ngIf=\"housUnit.children_units.length && !housUnit.parent\">\n                <h3>{{housUnit.name}}</h3>\n                <app-corr-postboxes-item [houseUnits]=\"housUnit.children_units\"></app-corr-postboxes-item>\n            </ng-container>\n        </ng-container>\n    </ng-container>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-receive-modal/corr-receive-modal.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-receive-modal/corr-receive-modal.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"closeModal()\">\n                <ion-icon slot=\"icon-only\"\n                          [name]=\"'arrow-back-outline'\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"primary\">\n            <ion-button color=\"primary\"\n                        (click)=\"null\"\n                        [disabled]=\"false\">\n                <ion-icon slot=\"icon-only\"\n                          [name]=\"'camera-outline'\"></ion-icon>\n            </ion-button>\n            <ion-button color=\"success\"\n                        (click)=\"closeModal()\"\n                        [disabled]=\"false\">\n                <ion-icon slot=\"icon-only\"\n                          [name]=\"'save-outline'\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>{{action}} correspondencia</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <app-corr-packets-form [type]=\"action\"></app-corr-packets-form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/@shared/classes/form-validation-errors.ts":
/*!***********************************************************!*\
  !*** ./src/app/@shared/classes/form-validation-errors.ts ***!
  \***********************************************************/
/*! exports provided: getFormValidationErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormValidationErrors", function() { return getFormValidationErrors; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

function getFormValidationErrors(controls) {
    let errors = [];
    Object.keys(controls).forEach(key => {
        const control = controls[key];
        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
            errors = errors.concat(getFormValidationErrors(control.controls));
        }
        const controlErrors = controls[key].errors;
        if (controlErrors !== null) {
            Object.keys(controlErrors).forEach(keyError => {
                errors.push({
                    control_name: key,
                    error_name: keyError,
                    error_value: controlErrors[keyError]
                });
            });
        }
    });
    return errors;
}


/***/ }),

/***/ "./src/app/corr-packets/corr-delivery-modal/corr-delivery-modal.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/corr-packets/corr-delivery-modal/corr-delivery-modal.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcnItcGFja2V0cy9jb3JyLWRlbGl2ZXJ5LW1vZGFsL2NvcnItZGVsaXZlcnktbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/corr-packets/corr-delivery-modal/corr-delivery-modal.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/corr-packets/corr-delivery-modal/corr-delivery-modal.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CorrDeliveryModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorrDeliveryModalComponent", function() { return CorrDeliveryModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CorrDeliveryModalComponent = class CorrDeliveryModalComponent {
    constructor() { }
    ngOnInit() { }
};
CorrDeliveryModalComponent.ctorParameters = () => [];
CorrDeliveryModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corr-delivery-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./corr-delivery-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-delivery-modal/corr-delivery-modal.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./corr-delivery-modal.component.scss */ "./src/app/corr-packets/corr-delivery-modal/corr-delivery-modal.component.scss")).default]
    })
], CorrDeliveryModalComponent);



/***/ }),

/***/ "./src/app/corr-packets/corr-packets-create/corr-packets-create.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/corr-packets/corr-packets-create/corr-packets-create.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcnItcGFja2V0cy9jb3JyLXBhY2tldHMtY3JlYXRlL2NvcnItcGFja2V0cy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/corr-packets/corr-packets-create/corr-packets-create.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/corr-packets/corr-packets-create/corr-packets-create.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CorrPacketsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorrPacketsCreateComponent", function() { return CorrPacketsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _corr_packets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../corr-packets.service */ "./src/app/corr-packets/corr-packets.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_classes_form_validation_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/classes/form-validation-errors */ "./src/app/@shared/classes/form-validation-errors.ts");






let CorrPacketsCreateComponent = class CorrPacketsCreateComponent {
    constructor(corrPacketsService, route, platform) {
        this.corrPacketsService = corrPacketsService;
        this.route = route;
        this.platform = platform;
        this.id = null;
        this.formValid = false;
    }
    ngOnInit() {
        // this.clearPosts();
    }
    ngAfterViewInit() {
        this.corrPacketForm.corrPacketsForm.valueChanges.subscribe((data) => {
            console.log(Object(_shared_classes_form_validation_errors__WEBPACK_IMPORTED_MODULE_5__["getFormValidationErrors"])(this.corrPacketForm.corrPacketsForm.controls));
            this.corrPacketsService.corrPacketsFormValid.next(this.corrPacketForm.corrPacketsForm.valid);
        });
    }
    clearPosts() {
        this.corrPacketsService.createCorrPacket();
        this.corrPacketsService.corrPacket = {};
    }
};
CorrPacketsCreateComponent.ctorParameters = () => [
    { type: _corr_packets_service__WEBPACK_IMPORTED_MODULE_2__["CorrPacketsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
CorrPacketsCreateComponent.propDecorators = {
    corrPacketForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['corrPacketForm',] }]
};
CorrPacketsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corr-packets-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./corr-packets-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-create/corr-packets-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./corr-packets-create.component.scss */ "./src/app/corr-packets/corr-packets-create/corr-packets-create.component.scss")).default]
    })
], CorrPacketsCreateComponent);



/***/ }),

/***/ "./src/app/corr-packets/corr-packets-duplicate/corr-packets-duplicate.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/corr-packets/corr-packets-duplicate/corr-packets-duplicate.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcnItcGFja2V0cy9jb3JyLXBhY2tldHMtZHVwbGljYXRlL2NvcnItcGFja2V0cy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/corr-packets/corr-packets-duplicate/corr-packets-duplicate.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/corr-packets/corr-packets-duplicate/corr-packets-duplicate.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CorrPacketsDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorrPacketsDuplicateComponent", function() { return CorrPacketsDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CorrPacketsDuplicateComponent = class CorrPacketsDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
CorrPacketsDuplicateComponent.ctorParameters = () => [];
CorrPacketsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corr-packets-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./corr-packets-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-duplicate/corr-packets-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./corr-packets-duplicate.component.scss */ "./src/app/corr-packets/corr-packets-duplicate/corr-packets-duplicate.component.scss")).default]
    })
], CorrPacketsDuplicateComponent);



/***/ }),

/***/ "./src/app/corr-packets/corr-packets-edit/corr-packets-edit.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/corr-packets/corr-packets-edit/corr-packets-edit.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcnItcGFja2V0cy9jb3JyLXBhY2tldHMtZWRpdC9jb3JyLXBhY2tldHMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/corr-packets/corr-packets-edit/corr-packets-edit.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/corr-packets/corr-packets-edit/corr-packets-edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CorrPacketsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorrPacketsEditComponent", function() { return CorrPacketsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _corr_packets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../corr-packets.service */ "./src/app/corr-packets/corr-packets.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_classes_form_validation_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/classes/form-validation-errors */ "./src/app/@shared/classes/form-validation-errors.ts");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");







let CorrPacketsEditComponent = class CorrPacketsEditComponent {
    constructor(corrPacketsService, route, platform, splitPanel) {
        this.corrPacketsService = corrPacketsService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.model = null;
        this.type = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.corrPacketsService.editCorrPacket(this.id);
        this.type = this.route.snapshot.paramMap.get('type');
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    ngAfterViewInit() {
        this.corrPacketForm.corrPacketsForm.valueChanges.subscribe((data) => {
            console.log(Object(_shared_classes_form_validation_errors__WEBPACK_IMPORTED_MODULE_5__["getFormValidationErrors"])(this.corrPacketForm.corrPacketsForm.controls));
            this.corrPacketsService.corrPacketsFormValid.next(this.corrPacketForm.corrPacketsForm.valid);
        });
    }
};
CorrPacketsEditComponent.ctorParameters = () => [
    { type: _corr_packets_service__WEBPACK_IMPORTED_MODULE_2__["CorrPacketsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] }
];
CorrPacketsEditComponent.propDecorators = {
    corrPacketForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['corrPacketForm',] }]
};
CorrPacketsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corr-packets-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./corr-packets-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-edit/corr-packets-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./corr-packets-edit.component.scss */ "./src/app/corr-packets/corr-packets-edit/corr-packets-edit.component.scss")).default]
    })
], CorrPacketsEditComponent);



/***/ }),

/***/ "./src/app/corr-packets/corr-packets-form/corr-packets-form.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/corr-packets/corr-packets-form/corr-packets-form.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcnItcGFja2V0cy9jb3JyLXBhY2tldHMtZm9ybS9jb3JyLXBhY2tldHMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/corr-packets/corr-packets-form/corr-packets-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/corr-packets/corr-packets-form/corr-packets-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CorrPacketsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorrPacketsFormComponent", function() { return CorrPacketsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _corr_packets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../corr-packets.service */ "./src/app/corr-packets/corr-packets.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _hous_units_hous_units_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hous-units/hous-units.service */ "./src/app/hous-units/hous-units.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_services_camera_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/camera.service */ "./src/app/@shared/services/camera.service.ts");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");









let CorrPacketsFormComponent = class CorrPacketsFormComponent {
    constructor(corrPacketsService, toTitlecase, housUnitsService, camera, modalController) {
        this.corrPacketsService = corrPacketsService;
        this.toTitlecase = toTitlecase;
        this.housUnitsService = housUnitsService;
        this.camera = camera;
        this.modalController = modalController;
        this.model = {};
        this.type = null;
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'hous_unit_id': [
                {
                    type: 'required',
                    message: 'El campo ' + this.toTitlecase.transform('housUnit - NAME') + ' es obligatorio.'
                },
            ],
            'conveyor': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('TRANPORTADOR') + ' es obligatorio.' },
            ],
            'guide_number': [
                {
                    type: 'required',
                    message: 'El campo ' + this.toTitlecase.transform('NÚMERO DE GUIA') + ' es obligatorio.'
                },
            ],
            'received_at': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('RECIBIDO') + ' es obligatorio.' },
            ],
            'received_comment': [
                {
                    type: 'required',
                    message: 'El campo ' + this.toTitlecase.transform('COMENTARIO RECIBIDO') + ' es obligatorio.'
                },
            ],
            'delivered_at': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('ENTREGADO') + ' es obligatorio.' },
            ],
            'delivered_to': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('ENTREGADO A') + ' es obligatorio.' },
            ],
            'delivered_signature': [
                {
                    type: 'required',
                    message: 'El campo ' + this.toTitlecase.transform('FIRMA DE ENTREGADO') + ' es obligatorio.'
                },
            ],
            'delivered_comment': [
                {
                    type: 'required',
                    message: 'El campo ' + this.toTitlecase.transform('COMENTARIO ENTREGADO') + ' es obligatorio.'
                },
            ],
            'status': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('ESTADO') + ' es obligatorio.' },
            ],
        };
        this.now = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD HH:mm');
    }
    set housUnitId(data) {
        if (data) {
            this.housUnitsService.getHouseUnit(data)
                .then((res) => {
                if (this.type == 'Recibir') {
                    this.clear();
                    this.corrPacketsService.corrPacket.received_at = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD HH:mm');
                    this.corrPacketsService.corrPacket.status = 'received';
                }
                if (this.type == 'Entregar') {
                    this.corrPacketsService.corrPacket.delivered_at = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD HH:mm');
                    this.corrPacketsService.corrPacket.status = 'delivered';
                }
                this.corrPacketsService.corrPacket.hous_unit = res.data;
                this.corrPacketsService.corrPacket.hous_unit_id = parseInt(data);
            });
        }
    }
    ;
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    openViewer(url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__["ViewerModalComponent"],
                componentProps: {
                    src: url
                },
                cssClass: 'ion-img-viewer',
                keyboardClose: true,
                showBackdrop: true
            });
            return yield modal.present();
        });
    }
    clear() {
        // this.corrPacketsService.createCorrPacket();
        this.corrPacketsService.corrPacket = {};
    }
    // set setHousUnitId
    setHousUnitId(event) {
        this.corrPacketsService.corrPacket.hous_unit_id = event.value ? event.value.id : null;
    }
    // end setHousUnitId
    uploadPhoto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.camera.addNewToGallery(this.model.hous_unit_id, 'CorrPacket', (this.type == 'Recibir' ? 'received' : 'delivered'))
                .then(res => {
                if (!this.model.files) {
                    this.model.files = [];
                }
                this.model.files.push(res.data);
            });
        });
    }
};
CorrPacketsFormComponent.ctorParameters = () => [
    { type: _corr_packets_service__WEBPACK_IMPORTED_MODULE_2__["CorrPacketsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] },
    { type: _hous_units_hous_units_service__WEBPACK_IMPORTED_MODULE_4__["HousUnitsService"] },
    { type: _shared_services_camera_service__WEBPACK_IMPORTED_MODULE_6__["CameraService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] }
];
CorrPacketsFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['type',] }],
    housUnitId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    corrPacketsForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['corrPacketsForm',] }]
};
CorrPacketsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corr-packets-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./corr-packets-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-form/corr-packets-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./corr-packets-form.component.scss */ "./src/app/corr-packets/corr-packets-form/corr-packets-form.component.scss")).default]
    })
], CorrPacketsFormComponent);



/***/ }),

/***/ "./src/app/corr-packets/corr-packets-list/corr-packets-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/corr-packets/corr-packets-list/corr-packets-list.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcnItcGFja2V0cy9jb3JyLXBhY2tldHMtbGlzdC9jb3JyLXBhY2tldHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/corr-packets/corr-packets-list/corr-packets-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/corr-packets/corr-packets-list/corr-packets-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CorrPacketsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorrPacketsListComponent", function() { return CorrPacketsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _corr_packets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../corr-packets.service */ "./src/app/corr-packets/corr-packets.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");







let CorrPacketsListComponent = class CorrPacketsListComponent {
    constructor(corrPacketsService, api, loading, splitPanel) {
        this.corrPacketsService = corrPacketsService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
        this.corrPacketsService.getCorrPackets();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
CorrPacketsListComponent.ctorParameters = () => [
    { type: _corr_packets_service__WEBPACK_IMPORTED_MODULE_2__["CorrPacketsService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] }
];
CorrPacketsListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
CorrPacketsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corr-packets-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./corr-packets-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets-list/corr-packets-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./corr-packets-list.component.scss */ "./src/app/corr-packets/corr-packets-list/corr-packets-list.component.scss")).default]
    })
], CorrPacketsListComponent);



/***/ }),

/***/ "./src/app/corr-packets/corr-packets-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/corr-packets/corr-packets-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CorrPacketsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorrPacketsPageRoutingModule", function() { return CorrPacketsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _corr_packets_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./corr-packets.page */ "./src/app/corr-packets/corr-packets.page.ts");
/* harmony import */ var _corr_packets_edit_corr_packets_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./corr-packets-edit/corr-packets-edit.component */ "./src/app/corr-packets/corr-packets-edit/corr-packets-edit.component.ts");
/* harmony import */ var _corr_packets_create_corr_packets_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./corr-packets-create/corr-packets-create.component */ "./src/app/corr-packets/corr-packets-create/corr-packets-create.component.ts");
/* harmony import */ var _corr_packets_list_corr_packets_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./corr-packets-list/corr-packets-list.component */ "./src/app/corr-packets/corr-packets-list/corr-packets-list.component.ts");
/* harmony import */ var _corr_postboxes_corr_postboxes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./corr-postboxes/corr-postboxes.component */ "./src/app/corr-packets/corr-postboxes/corr-postboxes.component.ts");
/* harmony import */ var _corr_postbox_corr_postbox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./corr-postbox/corr-postbox.component */ "./src/app/corr-packets/corr-postbox/corr-postbox.component.ts");









const routes = [
    {
        path: '',
        component: _corr_packets_page__WEBPACK_IMPORTED_MODULE_3__["CorrPacketsPage"]
    },
    {
        path: 'postboxes',
        component: _corr_postboxes_corr_postboxes_component__WEBPACK_IMPORTED_MODULE_7__["CorrPostboxesComponent"]
    },
    {
        path: 'postbox/:id',
        component: _corr_postbox_corr_postbox_component__WEBPACK_IMPORTED_MODULE_8__["CorrPostboxComponent"]
    },
    {
        path: 'list',
        component: _corr_packets_list_corr_packets_list_component__WEBPACK_IMPORTED_MODULE_6__["CorrPacketsListComponent"]
    },
    {
        path: 'create/:housUnitId',
        component: _corr_packets_create_corr_packets_create_component__WEBPACK_IMPORTED_MODULE_5__["CorrPacketsCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _corr_packets_edit_corr_packets_edit_component__WEBPACK_IMPORTED_MODULE_4__["CorrPacketsEditComponent"]
    },
    {
        path: ':id/edit/:type',
        component: _corr_packets_edit_corr_packets_edit_component__WEBPACK_IMPORTED_MODULE_4__["CorrPacketsEditComponent"]
    },
];
let CorrPacketsPageRoutingModule = class CorrPacketsPageRoutingModule {
};
CorrPacketsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], CorrPacketsPageRoutingModule);



/***/ }),

/***/ "./src/app/corr-packets/corr-packets.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/corr-packets/corr-packets.module.ts ***!
  \*****************************************************/
/*! exports provided: CorrPacketsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorrPacketsPageModule", function() { return CorrPacketsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _corr_packets_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./corr-packets-routing.module */ "./src/app/corr-packets/corr-packets-routing.module.ts");
/* harmony import */ var _corr_packets_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./corr-packets.page */ "./src/app/corr-packets/corr-packets.page.ts");
/* harmony import */ var _corr_packets_list_corr_packets_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./corr-packets-list/corr-packets-list.component */ "./src/app/corr-packets/corr-packets-list/corr-packets-list.component.ts");
/* harmony import */ var _corr_packets_create_corr_packets_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./corr-packets-create/corr-packets-create.component */ "./src/app/corr-packets/corr-packets-create/corr-packets-create.component.ts");
/* harmony import */ var _corr_packets_duplicate_corr_packets_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./corr-packets-duplicate/corr-packets-duplicate.component */ "./src/app/corr-packets/corr-packets-duplicate/corr-packets-duplicate.component.ts");
/* harmony import */ var _corr_packets_edit_corr_packets_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./corr-packets-edit/corr-packets-edit.component */ "./src/app/corr-packets/corr-packets-edit/corr-packets-edit.component.ts");
/* harmony import */ var _corr_packets_form_corr_packets_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./corr-packets-form/corr-packets-form.component */ "./src/app/corr-packets/corr-packets-form/corr-packets-form.component.ts");
/* harmony import */ var _corr_postbox_corr_postbox_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./corr-postbox/corr-postbox.component */ "./src/app/corr-packets/corr-postbox/corr-postbox.component.ts");
/* harmony import */ var _corr_postboxes_corr_postboxes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./corr-postboxes/corr-postboxes.component */ "./src/app/corr-packets/corr-postboxes/corr-postboxes.component.ts");
/* harmony import */ var _corr_receive_modal_corr_receive_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./corr-receive-modal/corr-receive-modal.component */ "./src/app/corr-packets/corr-receive-modal/corr-receive-modal.component.ts");
/* harmony import */ var _corr_delivery_modal_corr_delivery_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./corr-delivery-modal/corr-delivery-modal.component */ "./src/app/corr-packets/corr-delivery-modal/corr-delivery-modal.component.ts");
/* harmony import */ var _corr_postboxes_item_corr_postboxes_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./corr-postboxes-item/corr-postboxes-item.component */ "./src/app/corr-packets/corr-postboxes-item/corr-postboxes-item.component.ts");
/* harmony import */ var _hous_units_hous_units_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../hous-units/hous-units.service */ "./src/app/hous-units/hous-units.service.ts");



















let CorrPacketsPageModule = class CorrPacketsPageModule {
};
CorrPacketsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _corr_packets_routing_module__WEBPACK_IMPORTED_MODULE_6__["CorrPacketsPageRoutingModule"]
        ],
        declarations: [
            _corr_packets_page__WEBPACK_IMPORTED_MODULE_7__["CorrPacketsPage"],
            _corr_packets_list_corr_packets_list_component__WEBPACK_IMPORTED_MODULE_8__["CorrPacketsListComponent"],
            _corr_packets_create_corr_packets_create_component__WEBPACK_IMPORTED_MODULE_9__["CorrPacketsCreateComponent"],
            _corr_packets_duplicate_corr_packets_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["CorrPacketsDuplicateComponent"],
            _corr_packets_edit_corr_packets_edit_component__WEBPACK_IMPORTED_MODULE_11__["CorrPacketsEditComponent"],
            _corr_packets_form_corr_packets_form_component__WEBPACK_IMPORTED_MODULE_12__["CorrPacketsFormComponent"],
            _corr_postbox_corr_postbox_component__WEBPACK_IMPORTED_MODULE_13__["CorrPostboxComponent"],
            _corr_postboxes_corr_postboxes_component__WEBPACK_IMPORTED_MODULE_14__["CorrPostboxesComponent"],
            _corr_receive_modal_corr_receive_modal_component__WEBPACK_IMPORTED_MODULE_15__["CorrReceiveModalComponent"],
            _corr_delivery_modal_corr_delivery_modal_component__WEBPACK_IMPORTED_MODULE_16__["CorrDeliveryModalComponent"],
            _corr_postboxes_item_corr_postboxes_item_component__WEBPACK_IMPORTED_MODULE_17__["CorrPostboxesItemComponent"],
        ],
        providers: [
            _hous_units_hous_units_service__WEBPACK_IMPORTED_MODULE_18__["HousUnitsService"],
        ]
    })
], CorrPacketsPageModule);



/***/ }),

/***/ "./src/app/corr-packets/corr-packets.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/corr-packets/corr-packets.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcnItcGFja2V0cy9jb3JyLXBhY2tldHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/corr-packets/corr-packets.page.ts":
/*!***************************************************!*\
  !*** ./src/app/corr-packets/corr-packets.page.ts ***!
  \***************************************************/
/*! exports provided: CorrPacketsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorrPacketsPage", function() { return CorrPacketsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");



let CorrPacketsPage = class CorrPacketsPage {
    constructor(splitPanel) {
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
};
CorrPacketsPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] }
];
CorrPacketsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corr-packets',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./corr-packets.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-packets.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./corr-packets.page.scss */ "./src/app/corr-packets/corr-packets.page.scss")).default]
    })
], CorrPacketsPage);



/***/ }),

/***/ "./src/app/corr-packets/corr-packets.service.ts":
/*!******************************************************!*\
  !*** ./src/app/corr-packets/corr-packets.service.ts ***!
  \******************************************************/
/*! exports provided: CorrPacketsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorrPacketsService", function() { return CorrPacketsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let CorrPacketsService = class CorrPacketsService {
    constructor(api, alert, toast, router, navigation) {
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
        this.corrPacketsFormValid.subscribe(data => {
            console.log('formulario', data);
        });
    }
    getCorrPackets(page = this.page, perPage = this.perPage) {
        this.api.get(this.corrPacketsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.corrPackets = res.data;
            this.corrPacketLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editCorrPacket(id) {
        this.api.get(this.corrPacketsUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.corrPacket = res.data.model;
            this.corrPacketLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateCorrPacket() {
        this.api.put(this.corrPacketsUrl + '/' + this.corrPacket.id, {
            model: this.corrPacket,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getCorrPackets(1);
        });
    }
    createCorrPacket() {
        this.api.get(this.corrPacketsUrl + '/create')
            .subscribe((res) => {
            this.corrPacket = {};
            this.corrPacketLists = res.lists;
        });
    }
    storeCorrPacket() {
        this.api.post(this.corrPacketsUrl, {
            model: this.corrPacket,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getCorrPackets(1);
        });
    }
    deleteCorrPacket(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.corrPacketsUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getCorrPackets(1);
                });
            }
            else {
                return;
            }
        });
    }
};
CorrPacketsService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
CorrPacketsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CorrPacketsService);



/***/ }),

/***/ "./src/app/corr-packets/corr-postbox/corr-postbox.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/corr-packets/corr-postbox/corr-postbox.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcnItcGFja2V0cy9jb3JyLXBvc3Rib3gvY29yci1wb3N0Ym94LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/corr-packets/corr-postbox/corr-postbox.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/corr-packets/corr-postbox/corr-postbox.component.ts ***!
  \*********************************************************************/
/*! exports provided: CorrPostboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorrPostboxComponent", function() { return CorrPostboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _corr_receive_modal_corr_receive_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../corr-receive-modal/corr-receive-modal.component */ "./src/app/corr-packets/corr-receive-modal/corr-receive-modal.component.ts");
/* harmony import */ var _corr_packets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../corr-packets.service */ "./src/app/corr-packets/corr-packets.service.ts");
/* harmony import */ var _hous_units_hous_units_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hous-units/hous-units.service */ "./src/app/hous-units/hous-units.service.ts");








let CorrPostboxComponent = class CorrPostboxComponent {
    constructor(splitPanel, router, route, modalController, corrPacketsService, housUnitsService) {
        this.splitPanel = splitPanel;
        this.router = router;
        this.route = route;
        this.modalController = modalController;
        this.corrPacketsService = corrPacketsService;
        this.housUnitsService = housUnitsService;
        this.dataReturned = null;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
        this.housUnitsService.editHousUnit(this.route.snapshot.paramMap.get('id'));
    }
    openReceiveModal(action = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.housUnitsService.getHousUnits();
            const modal = yield this.modalController.create({
                component: _corr_receive_modal_corr_receive_modal_component__WEBPACK_IMPORTED_MODULE_5__["CorrReceiveModalComponent"],
                componentProps: {
                    action: action !== null && action !== void 0 ? action : '',
                    hous_unit_id: this.route.snapshot.paramMap.get('id')
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    // console.table(dataReturned);
                }
            });
            return yield modal.present();
        });
    }
};
CorrPostboxComponent.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _corr_packets_service__WEBPACK_IMPORTED_MODULE_6__["CorrPacketsService"] },
    { type: _hous_units_hous_units_service__WEBPACK_IMPORTED_MODULE_7__["HousUnitsService"] }
];
CorrPostboxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corr-postbox',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./corr-postbox.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-postbox/corr-postbox.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./corr-postbox.component.scss */ "./src/app/corr-packets/corr-postbox/corr-postbox.component.scss")).default]
    })
], CorrPostboxComponent);



/***/ }),

/***/ "./src/app/corr-packets/corr-postboxes-item/corr-postboxes-item.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/corr-packets/corr-postboxes-item/corr-postboxes-item.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".screen-section {\n  height: 30%;\n  padding: 10% 5%;\n}\n.screen-section h1 {\n  font-size: 4rem;\n  color: #5e6061;\n}\n.screen-section h3 {\n  color: #B9BBBD;\n  font-size: 2rem;\n}\n.screen-section h3, .screen-section h1 {\n  text-align: right;\n  line-height: 100%;\n}\n.button-section {\n  display: grid;\n  grid-template-columns: repeat(20, 1fr);\n}\n@media (max-width: 576px) {\n  .button-section {\n    grid-template-columns: repeat(10, 1fr);\n  }\n}\n.button-section button {\n  background: rgba(128, 128, 128, 0.2) !important;\n  margin: 0.2rem;\n  font-size: 1rem;\n  height: 62px;\n  color: #6A6D71;\n  border-radius: 8px;\n}\n.button-section .operator {\n  background: #283B50 !important;\n}\n.button-section .zero-button {\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n.button-section .equal-sign {\n  border-color: #51C9CA !important;\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yci1wYWNrZXRzL2NvcnItcG9zdGJveGVzLWl0ZW0vY29yci1wb3N0Ym94ZXMtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFLFdBQUE7RUFFQSxlQUFBO0FBRkY7QUFJRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBRko7QUFLRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBSEo7QUFNRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFKSjtBQVVBO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0FBUEY7QUFTRTtFQUpGO0lBS0ksc0NBQUE7RUFORjtBQUNGO0FBUUU7RUFLRSwrQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVZKO0FBYUU7RUFFRSw4QkFBQTtBQVpKO0FBbUJFO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQWpCSjtBQW9CRTtFQUVFLGdDQUFBO0VBQ0Esc0JBQUE7QUFuQkoiLCJmaWxlIjoic3JjL2FwcC9jb3JyLXBhY2tldHMvY29yci1wb3N0Ym94ZXMtaXRlbS9jb3JyLXBvc3Rib3hlcy1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc2NyZWVuLXNlY3Rpb24ge1xuICAvLyBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDMwJTtcbiAgLy8gYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMTAlIDUlO1xuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgY29sb3I6IHJnYig5NCwgOTYsIDk3KTtcbiAgfVxuXG4gIGgzIHtcbiAgICBjb2xvcjogI0I5QkJCRDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cblxuICBoMywgaDEge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5cblxuXG4uYnV0dG9uLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyMCwgMWZyKTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgLy8gYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLy8gYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgIC8vIGJvcmRlcjogc29saWQgMC41cHggICNFQ0VERjQ7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIpICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwLjJyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGhlaWdodDogNjJweDtcbiAgICBjb2xvcjogIzZBNkQ3MTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cblxuICAub3BlcmF0b3Ige1xuICAgIC8vIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6ICMyODNCNTAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zcGVjaWFsLW9wZXJhdG9yIHtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjRjNGOUZGICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuemVyby1idXR0b24ge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMztcbiAgfVxuXG4gIC5lcXVhbC1zaWduIHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiM1MUM5Q0EgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6ICM1MUM5Q0EgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB9XG5cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/corr-packets/corr-postboxes-item/corr-postboxes-item.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/corr-packets/corr-postboxes-item/corr-postboxes-item.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CorrPostboxesItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorrPostboxesItemComponent", function() { return CorrPostboxesItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CorrPostboxesItemComponent = class CorrPostboxesItemComponent {
    constructor() {
    }
    ngOnInit() { }
    hasReceived(corr_packets) {
        let response = false;
        for (let i = 0; i < corr_packets.length; i++) {
            if (corr_packets[i].status == 'received') {
                response = true;
                return response;
            }
        }
        return response;
    }
};
CorrPostboxesItemComponent.ctorParameters = () => [];
CorrPostboxesItemComponent.propDecorators = {
    housUnits: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['houseUnits',] }],
    parent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['parent',] }]
};
CorrPostboxesItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corr-postboxes-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./corr-postboxes-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-postboxes-item/corr-postboxes-item.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./corr-postboxes-item.component.scss */ "./src/app/corr-packets/corr-postboxes-item/corr-postboxes-item.component.scss")).default]
    })
], CorrPostboxesItemComponent);



/***/ }),

/***/ "./src/app/corr-packets/corr-postboxes/corr-postboxes.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/corr-packets/corr-postboxes/corr-postboxes.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[noscroll] {\n  --overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yci1wYWNrZXRzL2NvcnItcG9zdGJveGVzL2NvcnItcG9zdGJveGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcnItcGFja2V0cy9jb3JyLXBvc3Rib3hlcy9jb3JyLXBvc3Rib3hlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltub3Njcm9sbF0ge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/corr-packets/corr-postboxes/corr-postboxes.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/corr-packets/corr-postboxes/corr-postboxes.component.ts ***!
  \*************************************************************************/
/*! exports provided: CorrPostboxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorrPostboxesComponent", function() { return CorrPostboxesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hous_units_hous_units_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hous-units/hous-units.service */ "./src/app/hous-units/hous-units.service.ts");





let CorrPostboxesComponent = class CorrPostboxesComponent {
    constructor(splitPanel, router, housUnitsService) {
        this.splitPanel = splitPanel;
        this.router = router;
        this.housUnitsService = housUnitsService;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
        this.housUnitsService.getAllHousUnits();
    }
    openBox(id) {
        this.router.navigateByUrl('/corr-packets/postbox/' + id);
    }
};
CorrPostboxesComponent.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _hous_units_hous_units_service__WEBPACK_IMPORTED_MODULE_4__["HousUnitsService"] }
];
CorrPostboxesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corr-postboxes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./corr-postboxes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-postboxes/corr-postboxes.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./corr-postboxes.component.scss */ "./src/app/corr-packets/corr-postboxes/corr-postboxes.component.scss")).default]
    })
], CorrPostboxesComponent);



/***/ }),

/***/ "./src/app/corr-packets/corr-receive-modal/corr-receive-modal.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/corr-packets/corr-receive-modal/corr-receive-modal.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcnItcGFja2V0cy9jb3JyLXJlY2VpdmUtbW9kYWwvY29yci1yZWNlaXZlLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/corr-packets/corr-receive-modal/corr-receive-modal.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/corr-packets/corr-receive-modal/corr-receive-modal.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CorrReceiveModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorrReceiveModalComponent", function() { return CorrReceiveModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let CorrReceiveModalComponent = class CorrReceiveModalComponent {
    constructor(modalController, navParams) {
        this.modalController = modalController;
        this.navParams = navParams;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.action = this.navParams.data.action;
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = null;
            yield this.modalController.dismiss(onClosedData);
        });
    }
};
CorrReceiveModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
CorrReceiveModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corr-receive-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./corr-receive-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/corr-packets/corr-receive-modal/corr-receive-modal.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./corr-receive-modal.component.scss */ "./src/app/corr-packets/corr-receive-modal/corr-receive-modal.component.scss")).default]
    })
], CorrReceiveModalComponent);



/***/ })

}]);
//# sourceMappingURL=corr-packets-corr-packets-module-es2015.js.map