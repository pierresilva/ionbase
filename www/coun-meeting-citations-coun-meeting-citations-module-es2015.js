(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coun-meeting-citations-coun-meeting-citations-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meeting-citations/coun-meeting-citation-sign/coun-meeting-citation-sign.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meeting-citations/coun-meeting-citation-sign/coun-meeting-citation-sign.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"signatureSave()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"false\">\n                <ng-container *ngIf=\"!platform.is('mobile')\">Firmar</ng-container>\n                <ion-icon slot=\"end\"\n                          color=\"success\"\n                          name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Crear {{'FIRMAR ACTA' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen\n             id=\"page-signature\">\n    <ion-grid>\n        <ion-row class=\"\">\n            <ion-col size=\"12\"\n                     class=\"ion-text-center\"\n                     id=\"signature-content\">\n\n                <form #signatureForm=\"ngForm\">\n                    <signature-pad name=\"signature\"\n                                   [(ngModel)]=\"signature\"\n                                   [options]=\"signaturePadOptions\"\n                                   (onBeginEvent)=\"drawStart()\"\n                                   (onEndEvent)=\"drawComplete()\"></signature-pad>\n                </form>\n\n                <ion-button fill=\"outline\"\n                            (click)=\"signatureClear()\">\n                    Limpiar\n                </ion-button>\n                <ion-button fill=\"outline\"\n                            color=\"success\"\n                            (click)=\"signatureSave()\">\n                    Guardar Firma\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meeting-citations/coun-meeting-citations-create/coun-meeting-citations-create.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meeting-citations/coun-meeting-citations-create/coun-meeting-citations-create.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/coun-meeting-citations'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"counMeetingCitationsService.storeCounMeetingCitation()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!counMeetingCitationsService.counMeetingCitationsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'JUNTAS CITACIONES' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-coun-meeting-citations-form #counMeetingCitationForm [model]=\"counMeetingCitationsService.counMeetingCitation\"></app-coun-meeting-citations-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meeting-citations/coun-meeting-citations-duplicate/coun-meeting-citations-duplicate.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meeting-citations/coun-meeting-citations-duplicate/coun-meeting-citations-duplicate.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  CounMeetingCitations duplicate works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meeting-citations/coun-meeting-citations-edit/coun-meeting-citations-edit.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meeting-citations/coun-meeting-citations-edit/coun-meeting-citations-edit.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/coun-meeting-citations'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"counMeetingCitationsService.updateCounMeetingCitation()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!counMeetingCitationsService.counMeetingCitationsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'JUNTAS CITACIONES' | titlecase}}: {{ counMeetingCitationsService.counMeetingCitation?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-coun-meeting-citations-form #counMeetingCitationForm [model]=\"counMeetingCitationsService.counMeetingCitation\"></app-coun-meeting-citations-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meeting-citations/coun-meeting-citations-form/coun-meeting-citations-form.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meeting-citations/coun-meeting-citations-form/coun-meeting-citations-form.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #counMeetingCitationsForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- coun_meeting_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'JUNTASDELCONSEJO' | titlecase }}</ion-label>\n        <ionic-selectable name=\"coun_meeting_id\"\n                          id=\"coun_meeting_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.coun_meeting\"\n                          [items]=\"counMeetingCitationsService.counMeetingCitationLists.CounMeeting\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('JUNTAS DEL CONSEJO' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('JUNTAS DEL CONSEJO' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setCounMeetingId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.coun_meeting_id\">\n            <div class=\"error-message\" *ngIf=\"counMeetingCitationsForm.form.controls['coun_meeting_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end coun_meeting_id -->\n\n\n    <!-- user_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'USUARIO' | titlecase }}</ion-label>\n        <ionic-selectable name=\"user_id\"\n                          id=\"user_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.user\"\n                          [items]=\"counMeetingCitationsService.counMeetingCitationLists.User\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('USUARIOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('USUARIOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setUserId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.user_id\">\n            <div class=\"error-message\" *ngIf=\"counMeetingCitationsForm.form.controls['user_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end user_id -->\n\n\n    <!-- coun_member_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'JUNTASMIEMBRO' | titlecase }}</ion-label>\n        <ionic-selectable name=\"coun_member_id\"\n                          id=\"coun_member_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.coun_member\"\n                          [items]=\"counMeetingCitationsService.counMeetingCitationLists.CounMember\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('JUNTAS MIEMBROS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('JUNTAS MIEMBROS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setCounMemberId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.coun_member_id\">\n            <div class=\"error-message\" *ngIf=\"counMeetingCitationsForm.form.controls['coun_member_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end coun_member_id -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"counMeetingCitationsForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- attended -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'ASISTIÓ' | titlecase }}</ion-label>\n                <ion-toggle name=\"attended\"\n                            id=\"attended-field\"\n                            slot=\"end\"\n                            [(ngModel)]=\"model.attended\"></ion-toggle>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.attended\">\n                    <div class=\"error-message\" *ngIf=\"counMeetingCitationsForm.form.controls['attended']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end attended -->\n\n\n            <!-- signed -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'FIRMÓ' | titlecase }}</ion-label>\n                <ion-toggle name=\"signed\"\n                            id=\"signed-field\"\n                            slot=\"end\"\n                            [(ngModel)]=\"model.signed\"></ion-toggle>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.signed\">\n                    <div class=\"error-message\" *ngIf=\"counMeetingCitationsForm.form.controls['signed']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end signed -->\n\n\n            <!-- signature -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'FIRMA' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.signature\"\n                            type=\"text\"\n                            name=\"signature\"\n                            id=\"signature-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.signature\">\n                    <div class=\"error-message\" *ngIf=\"counMeetingCitationsForm.form.controls['signature']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end signature -->\n\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meeting-citations/coun-meeting-citations-list/coun-meeting-citations-list.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meeting-citations/coun-meeting-citations-list/coun-meeting-citations-list.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'JUNTAS CITACIONES' | titlecase}}\"\n                 primaryLink=\"coun-meeting-citations/create\"\n                 primaryText=\"Crear {{'JUNTAS CITACIONES' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('JUNTAS CITACIONES' | lowercase )\"\n                       (ionCancel)=\"this.counMeetingCitationsService.searchValue = ''; counMeetingCitationsService.getCounMeetingCitations()\"\n                       (keyup.enter)=\"counMeetingCitationsService.getCounMeetingCitations()\"\n                       [(ngModel)]=\"counMeetingCitationsService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && counMeetingCitationsService.counMeetingCitations?.length\">\n        <ion-card *ngFor=\"let counMeetingCitation of counMeetingCitationsService.counMeetingCitations; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ counMeetingCitation?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'ASISTIÓ' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ counMeetingCitation?.attended  ? 'Si' : 'No' }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'FIRMÓ' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ counMeetingCitation?.signed  ? 'Si' : 'No' }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'FIRMA' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ counMeetingCitation?.signature }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'JUNTAS DEL CONSEJO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/coun-meetings/{{ counMeetingCitation?.coun_meeting?.id }}/edit\">{{ counMeetingCitation?.coun_meeting?.name }}</a></div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'USUARIOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/users/{{ counMeetingCitation?.user?.id }}/edit\">{{ counMeetingCitation?.user?.name }}</a></div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'JUNTAS MIEMBROS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/coun-members/{{ counMeetingCitation?.coun_member?.id }}/edit\">{{ counMeetingCitation?.coun_member?.name }}</a></div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/coun-meeting-citations/' + counMeetingCitation?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"counMeetingCitationsService.deleteCounMeetingCitation(counMeetingCitation?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !counMeetingCitationsService.counMeetingCitations?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'JUNTAS CITACIONES' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/coun-meeting-citations/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'JUNTAS CITACIONES' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"counMeetingCitationsService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"counMeetingCitationsService.getCounMeetingCitations(counMeetingCitationsService.meta.current_page - 1)\"\n                        [disabled]=\"counMeetingCitationsService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{counMeetingCitationsService.meta.current_page}}\n                /{{counMeetingCitationsService.meta.last_page}} {{counMeetingCitationsService.meta.from}}-{{counMeetingCitationsService.meta.to}}\n                /{{counMeetingCitationsService.meta.total}} </ion-button>\n            <ion-button (click)=\"counMeetingCitationsService.getCounMeetingCitations(counMeetingCitationsService.meta.current_page + 1)\"\n                        [disabled]=\"counMeetingCitationsService.meta.current_page == counMeetingCitationsService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meeting-citations/coun-meeting-citations.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meeting-citations/coun-meeting-citations.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"JUNTAS CITACIONES\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/coun-meeting-citations/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'JUNTAS CITACIONES'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/coun-meeting-citations/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'JUNTAS CITACIONES' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/coun-meeting-citations/coun-meeting-citation-sign/coun-meeting-citation-sign.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/coun-meeting-citations/coun-meeting-citation-sign/coun-meeting-citation-sign.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW4tbWVldGluZy1jaXRhdGlvbnMvY291bi1tZWV0aW5nLWNpdGF0aW9uLXNpZ24vY291bi1tZWV0aW5nLWNpdGF0aW9uLXNpZ24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/coun-meeting-citations/coun-meeting-citation-sign/coun-meeting-citation-sign.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/coun-meeting-citations/coun-meeting-citation-sign/coun-meeting-citation-sign.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: CounMeetingCitationSignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMeetingCitationSignComponent", function() { return CounMeetingCitationSignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-signaturepad */ "./node_modules/angular2-signaturepad/__ivy_ngcc__/index.js");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_signaturepad__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let CounMeetingCitationSignComponent = class CounMeetingCitationSignComponent {
    constructor(platform, api, toast, alert, route, router) {
        this.platform = platform;
        this.api = api;
        this.toast = toast;
        this.alert = alert;
        this.route = route;
        this.router = router;
        this.citationId = null;
        this.signaturePadOptions = {
            minWidth: 1,
            maxWidth: 2,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            penColor: 'rgb(0, 0, 0)',
            canvasWidth: 500,
            canvasHeight: 250,
        };
        this.signature = '';
        this.citation = {};
        this.citationId = this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.getCitation();
    }
    ngAfterViewInit() {
        // this.signaturePad.set('minWidth', 5);
        if (this.platform.is('mobile')) {
            this.signaturePad.set('canvasWidth', (window.innerWidth - 10));
            const spContent = document.getElementById('signature-content');
            spContent.style.width = (window.innerWidth - 10) + 'px !important';
        }
        this.signaturePad.clear();
    }
    getCitation() {
        this.api.get('coun-meeting-citations/' + this.citationId)
            .subscribe((res) => {
            this.citation = res.data;
            if (res.data.signature) {
                this.toast.present('El acta ya esta firmada.', 'toast-info');
                this.router.navigateByUrl('/');
            }
        });
    }
    drawComplete() {
        // will be notified of szimek/signature_pad's onEnd event
        this.signature = this.signaturePad.toDataURL();
        this.citation.signature = this.signature;
    }
    drawStart() {
        // will be notified of szimek/signature_pad's onBegin event
        console.log('begin drawing');
    }
    signatureClear() {
        this.signaturePad.clear();
    }
    signatureSave() {
        this.api.put('coun-meeting-citations/sign', this.citation)
            .subscribe((res) => {
            this.toast.present('Acta firmada con éxito!', 'toast-success');
            this.router.navigateByUrl('/');
        }, (err) => {
            // this.toast.present('Algo salio mal!', 'toast-error')
        });
    }
};
CounMeetingCitationSignComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
CounMeetingCitationSignComponent.propDecorators = {
    signaturePad: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [angular2_signaturepad__WEBPACK_IMPORTED_MODULE_3__["SignaturePad"],] }],
    signatureForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['signatureForm',] }]
};
CounMeetingCitationSignComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coun-meeting-citation-sign',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coun-meeting-citation-sign.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meeting-citations/coun-meeting-citation-sign/coun-meeting-citation-sign.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coun-meeting-citation-sign.component.scss */ "./src/app/coun-meeting-citations/coun-meeting-citation-sign/coun-meeting-citation-sign.component.scss")).default]
    })
], CounMeetingCitationSignComponent);



/***/ }),

/***/ "./src/app/coun-meeting-citations/coun-meeting-citations-create/coun-meeting-citations-create.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/coun-meeting-citations/coun-meeting-citations-create/coun-meeting-citations-create.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW4tbWVldGluZy1jaXRhdGlvbnMvY291bi1tZWV0aW5nLWNpdGF0aW9ucy1jcmVhdGUvY291bi1tZWV0aW5nLWNpdGF0aW9ucy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/coun-meeting-citations/coun-meeting-citations-create/coun-meeting-citations-create.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/coun-meeting-citations/coun-meeting-citations-create/coun-meeting-citations-create.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: CounMeetingCitationsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMeetingCitationsCreateComponent", function() { return CounMeetingCitationsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _coun_meeting_citations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../coun-meeting-citations.service */ "./src/app/coun-meeting-citations/coun-meeting-citations.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let CounMeetingCitationsCreateComponent = class CounMeetingCitationsCreateComponent {
    constructor(counMeetingCitationsService, route, platform, splitPanel) {
        this.counMeetingCitationsService = counMeetingCitationsService;
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
        this.counMeetingCitationForm.counMeetingCitationsForm.valueChanges.subscribe((data) => {
            this.counMeetingCitationsService.counMeetingCitationsFormValid.next(this.counMeetingCitationForm.counMeetingCitationsForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.counMeetingCitationsService.createCounMeetingCitation();
        this.counMeetingCitationsService.counMeetingCitation = {};
    }
};
CounMeetingCitationsCreateComponent.ctorParameters = () => [
    { type: _coun_meeting_citations_service__WEBPACK_IMPORTED_MODULE_2__["CounMeetingCitationsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
CounMeetingCitationsCreateComponent.propDecorators = {
    counMeetingCitationForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['counMeetingCitationForm',] }]
};
CounMeetingCitationsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coun-meeting-citations-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coun-meeting-citations-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meeting-citations/coun-meeting-citations-create/coun-meeting-citations-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coun-meeting-citations-create.component.scss */ "./src/app/coun-meeting-citations/coun-meeting-citations-create/coun-meeting-citations-create.component.scss")).default]
    })
], CounMeetingCitationsCreateComponent);



/***/ }),

/***/ "./src/app/coun-meeting-citations/coun-meeting-citations-duplicate/coun-meeting-citations-duplicate.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/coun-meeting-citations/coun-meeting-citations-duplicate/coun-meeting-citations-duplicate.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW4tbWVldGluZy1jaXRhdGlvbnMvY291bi1tZWV0aW5nLWNpdGF0aW9ucy1kdXBsaWNhdGUvY291bi1tZWV0aW5nLWNpdGF0aW9ucy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/coun-meeting-citations/coun-meeting-citations-duplicate/coun-meeting-citations-duplicate.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/coun-meeting-citations/coun-meeting-citations-duplicate/coun-meeting-citations-duplicate.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: CounMeetingCitationsDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMeetingCitationsDuplicateComponent", function() { return CounMeetingCitationsDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CounMeetingCitationsDuplicateComponent = class CounMeetingCitationsDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
CounMeetingCitationsDuplicateComponent.ctorParameters = () => [];
CounMeetingCitationsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coun-meeting-citations-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coun-meeting-citations-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meeting-citations/coun-meeting-citations-duplicate/coun-meeting-citations-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coun-meeting-citations-duplicate.component.scss */ "./src/app/coun-meeting-citations/coun-meeting-citations-duplicate/coun-meeting-citations-duplicate.component.scss")).default]
    })
], CounMeetingCitationsDuplicateComponent);



/***/ }),

/***/ "./src/app/coun-meeting-citations/coun-meeting-citations-edit/coun-meeting-citations-edit.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/coun-meeting-citations/coun-meeting-citations-edit/coun-meeting-citations-edit.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW4tbWVldGluZy1jaXRhdGlvbnMvY291bi1tZWV0aW5nLWNpdGF0aW9ucy1lZGl0L2NvdW4tbWVldGluZy1jaXRhdGlvbnMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/coun-meeting-citations/coun-meeting-citations-edit/coun-meeting-citations-edit.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/coun-meeting-citations/coun-meeting-citations-edit/coun-meeting-citations-edit.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: CounMeetingCitationsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMeetingCitationsEditComponent", function() { return CounMeetingCitationsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _coun_meeting_citations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../coun-meeting-citations.service */ "./src/app/coun-meeting-citations/coun-meeting-citations.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let CounMeetingCitationsEditComponent = class CounMeetingCitationsEditComponent {
    constructor(counMeetingCitationsService, route, platform, splitPanel) {
        this.counMeetingCitationsService = counMeetingCitationsService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.counMeetingCitationsService.editCounMeetingCitation(this.id);
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    ngAfterViewInit() {
        this.counMeetingCitationForm.counMeetingCitationsForm.valueChanges.subscribe((data) => {
            this.counMeetingCitationsService.counMeetingCitationsFormValid.next(this.counMeetingCitationForm.counMeetingCitationsForm.valid);
        });
    }
};
CounMeetingCitationsEditComponent.ctorParameters = () => [
    { type: _coun_meeting_citations_service__WEBPACK_IMPORTED_MODULE_2__["CounMeetingCitationsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
CounMeetingCitationsEditComponent.propDecorators = {
    counMeetingCitationForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['counMeetingCitationForm',] }]
};
CounMeetingCitationsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coun-meeting-citations-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coun-meeting-citations-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meeting-citations/coun-meeting-citations-edit/coun-meeting-citations-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coun-meeting-citations-edit.component.scss */ "./src/app/coun-meeting-citations/coun-meeting-citations-edit/coun-meeting-citations-edit.component.scss")).default]
    })
], CounMeetingCitationsEditComponent);



/***/ }),

/***/ "./src/app/coun-meeting-citations/coun-meeting-citations-form/coun-meeting-citations-form.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/coun-meeting-citations/coun-meeting-citations-form/coun-meeting-citations-form.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW4tbWVldGluZy1jaXRhdGlvbnMvY291bi1tZWV0aW5nLWNpdGF0aW9ucy1mb3JtL2NvdW4tbWVldGluZy1jaXRhdGlvbnMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/coun-meeting-citations/coun-meeting-citations-form/coun-meeting-citations-form.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/coun-meeting-citations/coun-meeting-citations-form/coun-meeting-citations-form.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: CounMeetingCitationsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMeetingCitationsFormComponent", function() { return CounMeetingCitationsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _coun_meeting_citations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../coun-meeting-citations.service */ "./src/app/coun-meeting-citations/coun-meeting-citations.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let CounMeetingCitationsFormComponent = class CounMeetingCitationsFormComponent {
    constructor(counMeetingCitationsService, toTitlecase) {
        this.counMeetingCitationsService = counMeetingCitationsService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'coun_meeting_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('counMeeting - NAME') + ' es obligatorio.' },
            ],
            'user_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('user - NAME') + ' es obligatorio.' },
            ],
            'coun_member_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('counMember - NAME') + ' es obligatorio.' },
            ],
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'attended': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('ASISTIÓ') + ' es obligatorio.' },
            ],
            'signed': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('FIRMÓ') + ' es obligatorio.' },
            ],
            'signature': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('FIRMA') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setCounMeetingId
    setCounMeetingId(event) {
        this.counMeetingCitationsService.counMeetingCitation.coun_meeting_id = event.value ? event.value.id : null;
    }
    // end setCounMeetingId
    // set setUserId
    setUserId(event) {
        this.counMeetingCitationsService.counMeetingCitation.user_id = event.value ? event.value.id : null;
    }
    // end setUserId
    // set setCounMemberId
    setCounMemberId(event) {
        this.counMeetingCitationsService.counMeetingCitation.coun_member_id = event.value ? event.value.id : null;
    }
};
CounMeetingCitationsFormComponent.ctorParameters = () => [
    { type: _coun_meeting_citations_service__WEBPACK_IMPORTED_MODULE_2__["CounMeetingCitationsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
CounMeetingCitationsFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    counMeetingCitationsForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['counMeetingCitationsForm',] }]
};
CounMeetingCitationsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coun-meeting-citations-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coun-meeting-citations-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meeting-citations/coun-meeting-citations-form/coun-meeting-citations-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coun-meeting-citations-form.component.scss */ "./src/app/coun-meeting-citations/coun-meeting-citations-form/coun-meeting-citations-form.component.scss")).default]
    })
], CounMeetingCitationsFormComponent);



/***/ }),

/***/ "./src/app/coun-meeting-citations/coun-meeting-citations-list/coun-meeting-citations-list.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/coun-meeting-citations/coun-meeting-citations-list/coun-meeting-citations-list.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW4tbWVldGluZy1jaXRhdGlvbnMvY291bi1tZWV0aW5nLWNpdGF0aW9ucy1saXN0L2NvdW4tbWVldGluZy1jaXRhdGlvbnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/coun-meeting-citations/coun-meeting-citations-list/coun-meeting-citations-list.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/coun-meeting-citations/coun-meeting-citations-list/coun-meeting-citations-list.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: CounMeetingCitationsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMeetingCitationsListComponent", function() { return CounMeetingCitationsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _coun_meeting_citations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../coun-meeting-citations.service */ "./src/app/coun-meeting-citations/coun-meeting-citations.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");







let CounMeetingCitationsListComponent = class CounMeetingCitationsListComponent {
    constructor(counMeetingCitationsService, api, loading, splitPanel) {
        this.counMeetingCitationsService = counMeetingCitationsService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
        this.counMeetingCitationsService.getCounMeetingCitations();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
CounMeetingCitationsListComponent.ctorParameters = () => [
    { type: _coun_meeting_citations_service__WEBPACK_IMPORTED_MODULE_2__["CounMeetingCitationsService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] }
];
CounMeetingCitationsListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
CounMeetingCitationsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coun-meeting-citations-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coun-meeting-citations-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meeting-citations/coun-meeting-citations-list/coun-meeting-citations-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coun-meeting-citations-list.component.scss */ "./src/app/coun-meeting-citations/coun-meeting-citations-list/coun-meeting-citations-list.component.scss")).default]
    })
], CounMeetingCitationsListComponent);



/***/ }),

/***/ "./src/app/coun-meeting-citations/coun-meeting-citations-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/coun-meeting-citations/coun-meeting-citations-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CounMeetingCitationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMeetingCitationsPageRoutingModule", function() { return CounMeetingCitationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _coun_meeting_citations_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coun-meeting-citations.page */ "./src/app/coun-meeting-citations/coun-meeting-citations.page.ts");
/* harmony import */ var _coun_meeting_citations_edit_coun_meeting_citations_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coun-meeting-citations-edit/coun-meeting-citations-edit.component */ "./src/app/coun-meeting-citations/coun-meeting-citations-edit/coun-meeting-citations-edit.component.ts");
/* harmony import */ var _coun_meeting_citations_create_coun_meeting_citations_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coun-meeting-citations-create/coun-meeting-citations-create.component */ "./src/app/coun-meeting-citations/coun-meeting-citations-create/coun-meeting-citations-create.component.ts");
/* harmony import */ var _coun_meeting_citations_list_coun_meeting_citations_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coun-meeting-citations-list/coun-meeting-citations-list.component */ "./src/app/coun-meeting-citations/coun-meeting-citations-list/coun-meeting-citations-list.component.ts");
/* harmony import */ var _coun_meeting_citation_sign_coun_meeting_citation_sign_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coun-meeting-citation-sign/coun-meeting-citation-sign.component */ "./src/app/coun-meeting-citations/coun-meeting-citation-sign/coun-meeting-citation-sign.component.ts");








const routes = [
    {
        path: '',
        component: _coun_meeting_citations_page__WEBPACK_IMPORTED_MODULE_3__["CounMeetingCitationsPage"]
    },
    {
        path: 'list',
        component: _coun_meeting_citations_list_coun_meeting_citations_list_component__WEBPACK_IMPORTED_MODULE_6__["CounMeetingCitationsListComponent"]
    },
    {
        path: 'create',
        component: _coun_meeting_citations_create_coun_meeting_citations_create_component__WEBPACK_IMPORTED_MODULE_5__["CounMeetingCitationsCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _coun_meeting_citations_edit_coun_meeting_citations_edit_component__WEBPACK_IMPORTED_MODULE_4__["CounMeetingCitationsEditComponent"]
    },
    {
        path: ':id/sign',
        component: _coun_meeting_citation_sign_coun_meeting_citation_sign_component__WEBPACK_IMPORTED_MODULE_7__["CounMeetingCitationSignComponent"]
    },
];
let CounMeetingCitationsPageRoutingModule = class CounMeetingCitationsPageRoutingModule {
};
CounMeetingCitationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], CounMeetingCitationsPageRoutingModule);



/***/ }),

/***/ "./src/app/coun-meeting-citations/coun-meeting-citations.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/coun-meeting-citations/coun-meeting-citations.module.ts ***!
  \*************************************************************************/
/*! exports provided: CounMeetingCitationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMeetingCitationsPageModule", function() { return CounMeetingCitationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _coun_meeting_citations_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coun-meeting-citations-routing.module */ "./src/app/coun-meeting-citations/coun-meeting-citations-routing.module.ts");
/* harmony import */ var _coun_meeting_citations_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coun-meeting-citations.page */ "./src/app/coun-meeting-citations/coun-meeting-citations.page.ts");
/* harmony import */ var _coun_meeting_citations_list_coun_meeting_citations_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coun-meeting-citations-list/coun-meeting-citations-list.component */ "./src/app/coun-meeting-citations/coun-meeting-citations-list/coun-meeting-citations-list.component.ts");
/* harmony import */ var _coun_meeting_citations_create_coun_meeting_citations_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./coun-meeting-citations-create/coun-meeting-citations-create.component */ "./src/app/coun-meeting-citations/coun-meeting-citations-create/coun-meeting-citations-create.component.ts");
/* harmony import */ var _coun_meeting_citations_duplicate_coun_meeting_citations_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./coun-meeting-citations-duplicate/coun-meeting-citations-duplicate.component */ "./src/app/coun-meeting-citations/coun-meeting-citations-duplicate/coun-meeting-citations-duplicate.component.ts");
/* harmony import */ var _coun_meeting_citations_edit_coun_meeting_citations_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./coun-meeting-citations-edit/coun-meeting-citations-edit.component */ "./src/app/coun-meeting-citations/coun-meeting-citations-edit/coun-meeting-citations-edit.component.ts");
/* harmony import */ var _coun_meeting_citations_form_coun_meeting_citations_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./coun-meeting-citations-form/coun-meeting-citations-form.component */ "./src/app/coun-meeting-citations/coun-meeting-citations-form/coun-meeting-citations-form.component.ts");
/* harmony import */ var _coun_meeting_citation_sign_coun_meeting_citation_sign_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./coun-meeting-citation-sign/coun-meeting-citation-sign.component */ "./src/app/coun-meeting-citations/coun-meeting-citation-sign/coun-meeting-citation-sign.component.ts");














let CounMeetingCitationsPageModule = class CounMeetingCitationsPageModule {
};
CounMeetingCitationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _coun_meeting_citations_routing_module__WEBPACK_IMPORTED_MODULE_6__["CounMeetingCitationsPageRoutingModule"]
        ],
        declarations: [
            _coun_meeting_citations_page__WEBPACK_IMPORTED_MODULE_7__["CounMeetingCitationsPage"],
            _coun_meeting_citations_list_coun_meeting_citations_list_component__WEBPACK_IMPORTED_MODULE_8__["CounMeetingCitationsListComponent"],
            _coun_meeting_citations_create_coun_meeting_citations_create_component__WEBPACK_IMPORTED_MODULE_9__["CounMeetingCitationsCreateComponent"],
            _coun_meeting_citations_duplicate_coun_meeting_citations_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["CounMeetingCitationsDuplicateComponent"],
            _coun_meeting_citations_edit_coun_meeting_citations_edit_component__WEBPACK_IMPORTED_MODULE_11__["CounMeetingCitationsEditComponent"],
            _coun_meeting_citations_form_coun_meeting_citations_form_component__WEBPACK_IMPORTED_MODULE_12__["CounMeetingCitationsFormComponent"],
            _coun_meeting_citation_sign_coun_meeting_citation_sign_component__WEBPACK_IMPORTED_MODULE_13__["CounMeetingCitationSignComponent"],
        ]
    })
], CounMeetingCitationsPageModule);



/***/ }),

/***/ "./src/app/coun-meeting-citations/coun-meeting-citations.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/coun-meeting-citations/coun-meeting-citations.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW4tbWVldGluZy1jaXRhdGlvbnMvY291bi1tZWV0aW5nLWNpdGF0aW9ucy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/coun-meeting-citations/coun-meeting-citations.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/coun-meeting-citations/coun-meeting-citations.page.ts ***!
  \***********************************************************************/
/*! exports provided: CounMeetingCitationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMeetingCitationsPage", function() { return CounMeetingCitationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");



let CounMeetingCitationsPage = class CounMeetingCitationsPage {
    constructor(splitPanel) {
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
};
CounMeetingCitationsPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] }
];
CounMeetingCitationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coun-meeting-citations',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coun-meeting-citations.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meeting-citations/coun-meeting-citations.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coun-meeting-citations.page.scss */ "./src/app/coun-meeting-citations/coun-meeting-citations.page.scss")).default]
    })
], CounMeetingCitationsPage);



/***/ }),

/***/ "./src/app/coun-meeting-citations/coun-meeting-citations.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/coun-meeting-citations/coun-meeting-citations.service.ts ***!
  \**************************************************************************/
/*! exports provided: CounMeetingCitationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMeetingCitationsService", function() { return CounMeetingCitationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let CounMeetingCitationsService = class CounMeetingCitationsService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.counMeetingCitationsUrl = 'coun-meeting-citations';
        this.counMeetingCitationsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.counMeetingCitations = [];
        this.counMeetingCitation = {};
        this.counMeetingCitationLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    getCounMeetingCitations(page = this.page, perPage = this.perPage) {
        this.api.get(this.counMeetingCitationsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.counMeetingCitations = res.data;
            this.counMeetingCitationLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editCounMeetingCitation(id) {
        this.api.get(this.counMeetingCitationsUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.counMeetingCitation = res.data.model;
            this.counMeetingCitationLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateCounMeetingCitation() {
        this.api.put(this.counMeetingCitationsUrl + '/' + this.counMeetingCitation.id, {
            model: this.counMeetingCitation,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getCounMeetingCitations(1);
        });
    }
    createCounMeetingCitation() {
        this.api.get(this.counMeetingCitationsUrl + '/create')
            .subscribe((res) => {
            this.counMeetingCitation = {};
            this.counMeetingCitationLists = res.lists;
        });
    }
    storeCounMeetingCitation() {
        this.api.post(this.counMeetingCitationsUrl, {
            model: this.counMeetingCitation,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getCounMeetingCitations(1);
        });
    }
    deleteCounMeetingCitation(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.counMeetingCitationsUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getCounMeetingCitations(1);
                });
            }
            else {
                return;
            }
        });
    }
};
CounMeetingCitationsService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
CounMeetingCitationsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CounMeetingCitationsService);



/***/ })

}]);
//# sourceMappingURL=coun-meeting-citations-coun-meeting-citations-module-es2015.js.map