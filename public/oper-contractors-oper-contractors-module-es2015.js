(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oper-contractors-oper-contractors-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-create/oper-contractors-create.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-create/oper-contractors-create.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/oper-contractors'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"operContractorsService.storeOperContractor()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!operContractorsService.operContractorsFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'CONTRATISTAS OPERATIVOS' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-oper-contractors-form #operContractorForm [model]=\"operContractorsService.operContractor\"></app-oper-contractors-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-duplicate/oper-contractors-duplicate.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-duplicate/oper-contractors-duplicate.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  OperContractors duplicate works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-edit/oper-contractors-edit.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-edit/oper-contractors-edit.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/oper-contractors'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"operContractorsService.updateOperContractor()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!operContractorsService.operContractorsFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'CONTRATISTAS OPERATIVOS' | titlecase}}: {{ operContractorsService.operContractor?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-oper-contractors-form #operContractorForm [model]=\"operContractorsService.operContractor\"></app-oper-contractors-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-form/oper-contractors-form.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-form/oper-contractors-form.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #operContractorsForm=\"ngForm\" novalidate autocomplete=\"off\">\r\n\r\n\r\n    <!-- oper_movement_ids -->\r\n    <!--<ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'MOVIMIENTOS OPERATIVOS' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"oper_movement_ids\"\r\n                          id=\"oper_movement_ids-field\"\r\n                          [(ngModel)]=\"model.oper_movements\"\r\n                          [items]=\"operContractorsService.operContractorLists.OperMovement\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('MOVIMIENTOS OPERATIVOS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('MOVIMIENTOS OPERATIVOS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setOperMovementIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.oper_movement_ids\">\r\n            <div class=\"error-message\" *ngIf=\"operContractorsForm.form.controls['oper_movement_ids']?.hasError(validation.type)\">\r\n            {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>-->\r\n    <!-- end oper_movement_ids -->\r\n\r\n    <!-- user_id -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>Usuario</ion-label>\r\n        <ionic-selectable name=\"user_id\"\r\n                          id=\"user_id-field\"\r\n                          [(ngModel)]=\"model.user\"\r\n                          [items]=\"operContractorsService.operContractorLists.User\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"false\"\r\n                          [canClear]=\"true\"\r\n                          [required]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar usuarios'\"\r\n                          [searchFailText]=\"'No se encontraron usuarios  que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setUserId($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.user_id\">\r\n            <div class=\"error-message\" *ngIf=\"operContractorsForm.form.controls['user_id']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end oper_movement_ids -->\r\n\r\n            <!-- name -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.name\"\r\n                            type=\"text\"\r\n                            name=\"name\"\r\n                            id=\"name-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n                    <div class=\"error-message\" *ngIf=\"operContractorsForm.form.controls['name']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end name -->\r\n\r\n\r\n            <!-- document -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'DOCUMENTO' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.document\"\r\n                            type=\"text\"\r\n                            name=\"document\"\r\n                            id=\"document-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.document\">\r\n                    <div class=\"error-message\" *ngIf=\"operContractorsForm.form.controls['document']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end document -->\r\n\r\n\r\n            <!-- address -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'DIRECCIÓN' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.address\"\r\n                            type=\"text\"\r\n                            name=\"address\"\r\n                            id=\"address-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.address\">\r\n                    <div class=\"error-message\" *ngIf=\"operContractorsForm.form.controls['address']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end address -->\r\n\r\n\r\n            <!-- phone -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'TELÉFONO' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.phone\"\r\n                            type=\"text\"\r\n                            name=\"phone\"\r\n                            id=\"phone-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.phone\">\r\n                    <div class=\"error-message\" *ngIf=\"operContractorsForm.form.controls['phone']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end phone -->\r\n\r\n\r\n            <!-- email -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'CORREO' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.email\"\r\n                            type=\"text\"\r\n                            name=\"email\"\r\n                            id=\"email-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.email\">\r\n                    <div class=\"error-message\" *ngIf=\"operContractorsForm.form.controls['email']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end email -->\r\n\r\n\r\n            <!-- phone_support -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'TELÉFONO DE SOPORTE' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.phone_support\"\r\n                            type=\"text\"\r\n                            name=\"phone_support\"\r\n                            id=\"phone_support-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.phone_support\">\r\n                    <div class=\"error-message\" *ngIf=\"operContractorsForm.form.controls['phone_support']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end phone_support -->\r\n\r\n\r\n            <!-- email_support -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'CORREO DE SOPORTE' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.email_support\"\r\n                            type=\"text\"\r\n                            name=\"email_support\"\r\n                            id=\"email_support-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.email_support\">\r\n                    <div class=\"error-message\" *ngIf=\"operContractorsForm.form.controls['email_support']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end email_support -->\r\n\r\n\r\n            <!-- contact -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'CONTACTO' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.contact\"\r\n                            type=\"text\"\r\n                            name=\"contact\"\r\n                            id=\"contact-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.contact\">\r\n                    <div class=\"error-message\" *ngIf=\"operContractorsForm.form.controls['contact']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end contact -->\r\n\r\n\r\n            <!-- business_hour -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'HORARIO DE ATENCIÓN' | titlecase }}</ion-label>\r\n                <ion-textarea [(ngModel)]=\"model.business_hour\"\r\n                              name=\"business_hour\"\r\n                              id=\"business_hour-field\"\r\n                              rows=\"6\"\r\n                              placeholder=\"\"></ion-textarea>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.business_hour\">\r\n                    <div class=\"error-message\" *ngIf=\"operContractorsForm.form.controls['business_hour']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end business_hour -->\r\n\r\n\r\n            <!-- phone_emergency -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'TELÉFONO DE EMERGENCIA' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.phone_emergency\"\r\n                            type=\"text\"\r\n                            name=\"phone_emergency\"\r\n                            id=\"phone_emergency-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.phone_emergency\">\r\n                    <div class=\"error-message\" *ngIf=\"operContractorsForm.form.controls['phone_emergency']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end phone_emergency -->\r\n\r\n\r\n            <!-- email_emergency -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'CORREO DE EMERGENCIA' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.email_emergency\"\r\n                            type=\"text\"\r\n                            name=\"email_emergency\"\r\n                            id=\"email_emergency-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.email_emergency\">\r\n                    <div class=\"error-message\" *ngIf=\"operContractorsForm.form.controls['email_emergency']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end email_emergency -->\r\n\r\n\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-list/oper-contractors-list.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-list/oper-contractors-list.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'CONTRATISTAS OPERATIVOS' | titlecase}}\"\r\n                 primaryLink=\"oper-contractors/create\"\r\n                 primaryText=\"Crear {{'CONTRATISTAS OPERATIVOS' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-searchbar showCancelButton=\"focus\"\r\n                       [cancelButtonText]=\"'Cancelar'\"\r\n                       [placeholder]=\"'Buscar ' + ('CONTRATISTAS OPERATIVOS' | lowercase )\"\r\n                       (ionCancel)=\"this.operContractorsService.searchValue = ''; operContractorsService.getOperContractors()\"\r\n                       (keyup.enter)=\"operContractorsService.getOperContractors()\"\r\n                       [(ngModel)]=\"operContractorsService.searchValue\"></ion-searchbar>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && operContractorsService.operContractors?.length\">\r\n        <ion-card *ngFor=\"let operContractor of operContractorsService.operContractors; let index = index\">\r\n            <ion-list>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operContractor?.name }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'DOCUMENTO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operContractor?.document }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'DIRECCIÓN' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operContractor?.address }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'TELÉFONO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operContractor?.phone }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'CORREO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operContractor?.email }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'TELÉFONO DE SOPORTE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operContractor?.phone_support }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'CORREO DE SOPORTE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operContractor?.email_support }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'CONTACTO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operContractor?.contact }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'HORARIO DE ATENCIÓN' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operContractor?.business_hour }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'TELÉFONO DE EMERGENCIA' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operContractor?.phone_emergency }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'CORREO DE EMERGENCIA' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operContractor?.email_emergency }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'MOVIMIENTOS OPERATIVOS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">\r\n                            <ng-container *ngIf=\"operContractor?.oper_movements?.length\">\r\n                                <ng-container *ngFor=\"let operMovement of operContractor?.oper_movements; let last = last\">\r\n                                    <a routerLink=\"/oper-movements/{{ operMovement?.id }}/edit\">{{ operMovement?.name }}</a><span *ngIf=\"!last\">, </span>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n                    </ion-item>\r\n            </ion-list>\r\n            <ion-footer>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/oper-contractors/' + operContractor?.id + '/edit'\">\r\n                            <ion-icon name=\"create-outline\"></ion-icon>\r\n                            <div>Editar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"operContractorsService.deleteOperContractor(operContractor?.id)\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            <div>Eliminar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-footer>\r\n        </ion-card>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && !operContractorsService.operContractors?.length\">\r\n        <ion-item>\r\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label><h2>No se encontraron {{'CONTRATISTAS OPERATIVOS' | titlecase}}</h2></ion-label>\r\n            <ion-button [routerLink]=\"'/oper-contractors/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\r\n                Crear {{'CONTRATISTAS OPERATIVOS' | titlecase}}\r\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"operContractorsService.meta\">\r\n        <ion-col class=\"ion-text-center\" size=\"12\">\r\n            <ion-button (click)=\"operContractorsService.getOperContractors(operContractorsService.meta.current_page - 1)\"\r\n                        [disabled]=\"operContractorsService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{operContractorsService.meta.current_page}}\r\n                /{{operContractorsService.meta.last_page}} {{operContractorsService.meta.from}}-{{operContractorsService.meta.to}}\r\n                /{{operContractorsService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"operContractorsService.getOperContractors(operContractorsService.meta.current_page + 1)\"\r\n                        [disabled]=\"operContractorsService.meta.current_page == operContractorsService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"CONTRATISTAS OPERATIVOS\"></app-main-header>\r\n\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/oper-contractors/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'CONTRATISTAS OPERATIVOS'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/oper-contractors/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'CONTRATISTAS OPERATIVOS' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/oper-contractors/oper-contractors-create/oper-contractors-create.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/oper-contractors/oper-contractors-create/oper-contractors-create.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItY29udHJhY3RvcnMvb3Blci1jb250cmFjdG9ycy1jcmVhdGUvb3Blci1jb250cmFjdG9ycy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-contractors/oper-contractors-create/oper-contractors-create.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/oper-contractors/oper-contractors-create/oper-contractors-create.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: OperContractorsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperContractorsCreateComponent", function() { return OperContractorsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_contractors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-contractors.service */ "./src/app/oper-contractors/oper-contractors.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let OperContractorsCreateComponent = class OperContractorsCreateComponent {
    constructor(operContractorsService, route, platform, splitPanel) {
        this.operContractorsService = operContractorsService;
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
        this.operContractorForm.operContractorsForm.valueChanges.subscribe((data) => {
            this.operContractorsService.operContractorsFormValid.next(this.operContractorForm.operContractorsForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.operContractorsService.createOperContractor();
        this.operContractorsService.operContractor = {};
    }
};
OperContractorsCreateComponent.ctorParameters = () => [
    { type: _oper_contractors_service__WEBPACK_IMPORTED_MODULE_2__["OperContractorsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
OperContractorsCreateComponent.propDecorators = {
    operContractorForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operContractorForm',] }]
};
OperContractorsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-contractors-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-contractors-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-create/oper-contractors-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-contractors-create.component.scss */ "./src/app/oper-contractors/oper-contractors-create/oper-contractors-create.component.scss")).default]
    })
], OperContractorsCreateComponent);



/***/ }),

/***/ "./src/app/oper-contractors/oper-contractors-duplicate/oper-contractors-duplicate.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/oper-contractors/oper-contractors-duplicate/oper-contractors-duplicate.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItY29udHJhY3RvcnMvb3Blci1jb250cmFjdG9ycy1kdXBsaWNhdGUvb3Blci1jb250cmFjdG9ycy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-contractors/oper-contractors-duplicate/oper-contractors-duplicate.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/oper-contractors/oper-contractors-duplicate/oper-contractors-duplicate.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: OperContractorsDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperContractorsDuplicateComponent", function() { return OperContractorsDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OperContractorsDuplicateComponent = class OperContractorsDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
OperContractorsDuplicateComponent.ctorParameters = () => [];
OperContractorsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-contractors-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-contractors-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-duplicate/oper-contractors-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-contractors-duplicate.component.scss */ "./src/app/oper-contractors/oper-contractors-duplicate/oper-contractors-duplicate.component.scss")).default]
    })
], OperContractorsDuplicateComponent);



/***/ }),

/***/ "./src/app/oper-contractors/oper-contractors-edit/oper-contractors-edit.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/oper-contractors/oper-contractors-edit/oper-contractors-edit.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItY29udHJhY3RvcnMvb3Blci1jb250cmFjdG9ycy1lZGl0L29wZXItY29udHJhY3RvcnMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-contractors/oper-contractors-edit/oper-contractors-edit.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/oper-contractors/oper-contractors-edit/oper-contractors-edit.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: OperContractorsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperContractorsEditComponent", function() { return OperContractorsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_contractors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-contractors.service */ "./src/app/oper-contractors/oper-contractors.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let OperContractorsEditComponent = class OperContractorsEditComponent {
    constructor(operContractorsService, route, platform, splitPanel) {
        this.operContractorsService = operContractorsService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.operContractorsService.editOperContractor(this.id);
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    ngAfterViewInit() {
        this.operContractorForm.operContractorsForm.valueChanges.subscribe((data) => {
            this.operContractorsService.operContractorsFormValid.next(this.operContractorForm.operContractorsForm.valid);
        });
    }
};
OperContractorsEditComponent.ctorParameters = () => [
    { type: _oper_contractors_service__WEBPACK_IMPORTED_MODULE_2__["OperContractorsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
OperContractorsEditComponent.propDecorators = {
    operContractorForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operContractorForm',] }]
};
OperContractorsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-contractors-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-contractors-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-edit/oper-contractors-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-contractors-edit.component.scss */ "./src/app/oper-contractors/oper-contractors-edit/oper-contractors-edit.component.scss")).default]
    })
], OperContractorsEditComponent);



/***/ }),

/***/ "./src/app/oper-contractors/oper-contractors-form/oper-contractors-form.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/oper-contractors/oper-contractors-form/oper-contractors-form.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItY29udHJhY3RvcnMvb3Blci1jb250cmFjdG9ycy1mb3JtL29wZXItY29udHJhY3RvcnMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-contractors/oper-contractors-form/oper-contractors-form.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/oper-contractors/oper-contractors-form/oper-contractors-form.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: OperContractorsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperContractorsFormComponent", function() { return OperContractorsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_contractors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-contractors.service */ "./src/app/oper-contractors/oper-contractors.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let OperContractorsFormComponent = class OperContractorsFormComponent {
    constructor(operContractorsService, toTitlecase) {
        this.operContractorsService = operContractorsService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'document': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('DOCUMENTO') + ' es obligatorio.' },
            ],
            'address': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('DIRECCIÓN') + ' es obligatorio.' },
            ],
            'phone': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('TELÉFONO') + ' es obligatorio.' },
            ],
            'email': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CORREO') + ' es obligatorio.' },
            ],
            'phone_support': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('TELÉFONO DE SOPORTE') + ' es obligatorio.' },
            ],
            'email_support': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CORREO DE SOPORTE') + ' es obligatorio.' },
            ],
            'contact': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CONTACTO') + ' es obligatorio.' },
            ],
            'business_hour': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('HORARIO DE ATENCIÓN') + ' es obligatorio.' },
            ],
            'phone_emergency': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('TELÉFONO DE EMERGENCIA') + ' es obligatorio.' },
            ],
            'email_emergency': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CORREO DE EMERGENCIA') + ' es obligatorio.' },
            ],
            'oper_movement_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('MOVIMIENTOS OPERATIVOS') + ' es obligatorio.' },
            ],
            'user_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('usuario') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setOperMovementIds
    setOperMovementIds(event) {
        let operMovementIds = null;
        if (event.value.length) {
            operMovementIds = [];
            for (let i = 0; i < event.value.length; i++) {
                operMovementIds.push(event.value[i].id);
            }
        }
        this.operContractorsService.operContractor.oper_movement_ids = operMovementIds;
    }
    // end setOperMovementIds
    setUserId(event) {
        this.operContractorsService.operContractor.user_id = event.value ? event.value.id : null;
    }
};
OperContractorsFormComponent.ctorParameters = () => [
    { type: _oper_contractors_service__WEBPACK_IMPORTED_MODULE_2__["OperContractorsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
OperContractorsFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    operContractorsForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operContractorsForm',] }]
};
OperContractorsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-contractors-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-contractors-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-form/oper-contractors-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-contractors-form.component.scss */ "./src/app/oper-contractors/oper-contractors-form/oper-contractors-form.component.scss")).default]
    })
], OperContractorsFormComponent);



/***/ }),

/***/ "./src/app/oper-contractors/oper-contractors-list/oper-contractors-list.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/oper-contractors/oper-contractors-list/oper-contractors-list.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItY29udHJhY3RvcnMvb3Blci1jb250cmFjdG9ycy1saXN0L29wZXItY29udHJhY3RvcnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-contractors/oper-contractors-list/oper-contractors-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/oper-contractors/oper-contractors-list/oper-contractors-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: OperContractorsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperContractorsListComponent", function() { return OperContractorsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_contractors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-contractors.service */ "./src/app/oper-contractors/oper-contractors.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");







let OperContractorsListComponent = class OperContractorsListComponent {
    constructor(operContractorsService, api, loading, splitPanel) {
        this.operContractorsService = operContractorsService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
        this.operContractorsService.getOperContractors();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
OperContractorsListComponent.ctorParameters = () => [
    { type: _oper_contractors_service__WEBPACK_IMPORTED_MODULE_2__["OperContractorsService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] }
];
OperContractorsListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
OperContractorsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-contractors-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-contractors-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-list/oper-contractors-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-contractors-list.component.scss */ "./src/app/oper-contractors/oper-contractors-list/oper-contractors-list.component.scss")).default]
    })
], OperContractorsListComponent);



/***/ }),

/***/ "./src/app/oper-contractors/oper-contractors-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/oper-contractors/oper-contractors-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: OperContractorsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperContractorsPageRoutingModule", function() { return OperContractorsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _oper_contractors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oper-contractors.page */ "./src/app/oper-contractors/oper-contractors.page.ts");
/* harmony import */ var _oper_contractors_edit_oper_contractors_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oper-contractors-edit/oper-contractors-edit.component */ "./src/app/oper-contractors/oper-contractors-edit/oper-contractors-edit.component.ts");
/* harmony import */ var _oper_contractors_create_oper_contractors_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oper-contractors-create/oper-contractors-create.component */ "./src/app/oper-contractors/oper-contractors-create/oper-contractors-create.component.ts");
/* harmony import */ var _oper_contractors_list_oper_contractors_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oper-contractors-list/oper-contractors-list.component */ "./src/app/oper-contractors/oper-contractors-list/oper-contractors-list.component.ts");







const routes = [
    {
        path: '',
        component: _oper_contractors_page__WEBPACK_IMPORTED_MODULE_3__["OperContractorsPage"]
    },
    {
        path: 'list',
        component: _oper_contractors_list_oper_contractors_list_component__WEBPACK_IMPORTED_MODULE_6__["OperContractorsListComponent"]
    },
    {
        path: 'create',
        component: _oper_contractors_create_oper_contractors_create_component__WEBPACK_IMPORTED_MODULE_5__["OperContractorsCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _oper_contractors_edit_oper_contractors_edit_component__WEBPACK_IMPORTED_MODULE_4__["OperContractorsEditComponent"]
    },
];
let OperContractorsPageRoutingModule = class OperContractorsPageRoutingModule {
};
OperContractorsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], OperContractorsPageRoutingModule);



/***/ }),

/***/ "./src/app/oper-contractors/oper-contractors.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/oper-contractors/oper-contractors.module.ts ***!
  \*************************************************************/
/*! exports provided: OperContractorsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperContractorsPageModule", function() { return OperContractorsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _oper_contractors_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oper-contractors-routing.module */ "./src/app/oper-contractors/oper-contractors-routing.module.ts");
/* harmony import */ var _oper_contractors_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./oper-contractors.page */ "./src/app/oper-contractors/oper-contractors.page.ts");
/* harmony import */ var _oper_contractors_list_oper_contractors_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./oper-contractors-list/oper-contractors-list.component */ "./src/app/oper-contractors/oper-contractors-list/oper-contractors-list.component.ts");
/* harmony import */ var _oper_contractors_create_oper_contractors_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./oper-contractors-create/oper-contractors-create.component */ "./src/app/oper-contractors/oper-contractors-create/oper-contractors-create.component.ts");
/* harmony import */ var _oper_contractors_duplicate_oper_contractors_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./oper-contractors-duplicate/oper-contractors-duplicate.component */ "./src/app/oper-contractors/oper-contractors-duplicate/oper-contractors-duplicate.component.ts");
/* harmony import */ var _oper_contractors_edit_oper_contractors_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./oper-contractors-edit/oper-contractors-edit.component */ "./src/app/oper-contractors/oper-contractors-edit/oper-contractors-edit.component.ts");
/* harmony import */ var _oper_contractors_form_oper_contractors_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./oper-contractors-form/oper-contractors-form.component */ "./src/app/oper-contractors/oper-contractors-form/oper-contractors-form.component.ts");













let OperContractorsPageModule = class OperContractorsPageModule {
};
OperContractorsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _oper_contractors_routing_module__WEBPACK_IMPORTED_MODULE_6__["OperContractorsPageRoutingModule"]
        ],
        declarations: [
            _oper_contractors_page__WEBPACK_IMPORTED_MODULE_7__["OperContractorsPage"],
            _oper_contractors_list_oper_contractors_list_component__WEBPACK_IMPORTED_MODULE_8__["OperContractorsListComponent"],
            _oper_contractors_create_oper_contractors_create_component__WEBPACK_IMPORTED_MODULE_9__["OperContractorsCreateComponent"],
            _oper_contractors_duplicate_oper_contractors_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["OperContractorsDuplicateComponent"],
            _oper_contractors_edit_oper_contractors_edit_component__WEBPACK_IMPORTED_MODULE_11__["OperContractorsEditComponent"],
            _oper_contractors_form_oper_contractors_form_component__WEBPACK_IMPORTED_MODULE_12__["OperContractorsFormComponent"],
        ]
    })
], OperContractorsPageModule);



/***/ }),

/***/ "./src/app/oper-contractors/oper-contractors.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/oper-contractors/oper-contractors.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItY29udHJhY3RvcnMvb3Blci1jb250cmFjdG9ycy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-contractors/oper-contractors.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/oper-contractors/oper-contractors.page.ts ***!
  \***********************************************************/
/*! exports provided: OperContractorsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperContractorsPage", function() { return OperContractorsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");



let OperContractorsPage = class OperContractorsPage {
    constructor(splitPanel) {
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
};
OperContractorsPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] }
];
OperContractorsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-contractors',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-contractors.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-contractors.page.scss */ "./src/app/oper-contractors/oper-contractors.page.scss")).default]
    })
], OperContractorsPage);



/***/ }),

/***/ "./src/app/oper-contractors/oper-contractors.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/oper-contractors/oper-contractors.service.ts ***!
  \**************************************************************/
/*! exports provided: OperContractorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperContractorsService", function() { return OperContractorsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let OperContractorsService = class OperContractorsService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.operContractorsUrl = 'oper-contractors';
        this.operContractorsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.operContractors = [];
        this.operContractor = {};
        this.operContractorLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    getOperContractors(page = this.page, perPage = this.perPage) {
        this.api.get(this.operContractorsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.operContractors = res.data;
            this.operContractorLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editOperContractor(id) {
        this.api.get(this.operContractorsUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.operContractor = res.data.model;
            this.operContractorLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateOperContractor() {
        this.api.put(this.operContractorsUrl + '/' + this.operContractor.id, {
            model: this.operContractor,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getOperContractors(1);
        });
    }
    createOperContractor() {
        this.api.get(this.operContractorsUrl + '/create')
            .subscribe((res) => {
            this.operContractor = {};
            this.operContractorLists = res.lists;
        });
    }
    storeOperContractor() {
        this.api.post(this.operContractorsUrl, {
            model: this.operContractor,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getOperContractors(1);
        });
    }
    deleteOperContractor(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.operContractorsUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getOperContractors(1);
                });
            }
            else {
                return;
            }
        });
    }
};
OperContractorsService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
OperContractorsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OperContractorsService);



/***/ })

}]);
//# sourceMappingURL=oper-contractors-oper-contractors-module-es2015.js.map