(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coun-meetings-coun-meetings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-create-custom/coun-meetings-create-custom.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-create-custom/coun-meetings-create-custom.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/coun-meetings'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n                [text]=\"''\"\n                [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"saveCounMeeting()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!counMeetingsForm.value\">\n                <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>{{'JUNTA DEL CONSEJO' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-card>\n        <form #counMeetingsForm=\"ngForm\" novalidate autocomplete=\"off\">\n            <ion-list>\n                <!-- name -->\n                <ion-item class=\"item-transparent\">\n                    <ion-label position=\"floating\">Nombre de la junta</ion-label>\n                    <ion-input [(ngModel)]=\"model.name\"\n                               type=\"text\"\n                               name=\"name\"\n                               id=\"name-field\"\n                               [required]=\"true\"\n                               placeholder=\"\"></ion-input>\n                </ion-item>\n                <div class=\"validation-errors\">\n                    <ng-container *ngFor=\"let validation of validationMessages.name\">\n                        <div class=\"error-message\"\n                             *ngIf=\"counMeetingsForm.form.controls['name']?.hasError(validation.type)\">\n                            {{ validation.message }}\n                        </div>\n                    </ng-container>\n                </div>\n                <!-- end name -->\n                <!-- description -->\n                <ion-item class=\"item-transparent\">\n                    <ion-label position=\"floating\">Descripción</ion-label>\n                    <ion-textarea [(ngModel)]=\"model.description\"\n                                  name=\"description\"\n                                  required\n                                  id=\"description-field\"\n                                  rows=\"6\"\n                                  placeholder=\"\"></ion-textarea>\n                </ion-item>\n                <div class=\"validation-errors\">\n                    <ng-container *ngFor=\"let validation of validationMessages.description\">\n                        <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['description']?.hasError(validation.type)\">\n                            {{ validation.message }}\n                        </div>\n                    </ng-container>\n                </div>\n                <!-- end description -->\n                <!-- date -->\n                <ion-item class=\"item-transparent\">\n                    <ion-label position=\"floating\">Fecha</ion-label>\n                    <ion-datetime name=\"date\"\n                                  id=\"date-field\"\n                                  [required]=\"true\"\n                                  [doneText]=\"'Seleccionar'\"\n                                  max=\"2040-12-31\"\n                                  [cancelText]=\"'Cancelar'\"\n                                  [(ngModel)]=\"model.date\"\n                                  displayFormat=\"DD/MM/YYYY\"></ion-datetime>\n                </ion-item>\n                <div class=\"validation-errors\">\n                    <ng-container *ngFor=\"let validation of validationMessages.date\">\n                        <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['date']?.hasError(validation.type)\">\n                            {{ validation.message }}\n                        </div>\n                    </ng-container>\n                </div>\n                <!-- end date -->\n                <!-- hour -->\n                <ion-item class=\"item-transparent\">\n                    <ion-label position=\"floating\">Hora</ion-label>\n                    <ion-datetime name=\"hour\"\n                                  id=\"hour-field\"\n                                  [required]=\"true\"\n                                  [doneText]=\"'Seleccionar'\"\n                                  [cancelText]=\"'Cancelar'\"\n                                  [(ngModel)]=\"model.hour\"\n                                  displayFormat=\"h:mm A\"\n                                  minuteValues=\"0,15,30,45\"\n                                  pickerFormat=\"h:mm A\"></ion-datetime>\n                </ion-item>\n                <div class=\"validation-errors\">\n                    <ng-container *ngFor=\"let validation of validationMessages.hour\">\n                        <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['hour']?.hasError(validation.type)\">\n                            {{ validation.message }}\n                        </div>\n                    </ng-container>\n                </div>\n                <!-- end hour -->\n                <!-- place -->\n                <ion-item class=\"item-transparent\">\n                    <ion-label position=\"floating\">Lugar</ion-label>\n                    <ion-input [(ngModel)]=\"model.place\"\n                               type=\"text\"\n                               [required]=\"true\"\n                               name=\"place\"\n                               id=\"place-field\"\n                               placeholder=\"\"></ion-input>\n                </ion-item>\n                <div class=\"validation-errors\">\n                    <ng-container *ngFor=\"let validation of validationMessages.place\">\n                        <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['place']?.hasError(validation.type)\">\n                            {{ validation.message }}\n                        </div>\n                    </ng-container>\n                </div>\n                <!-- end place -->\n                <!-- url -->\n                <ion-item class=\"item-transparent\">\n                    <ion-label position=\"floating\">URl virtual</ion-label>\n                    <ion-input [(ngModel)]=\"model.url\"\n                               type=\"text\"\n                               name=\"url\"\n                               id=\"url-field\"\n                               placeholder=\"\"></ion-input>\n                </ion-item>\n                <div class=\"validation-errors\">\n                    <ng-container *ngFor=\"let validation of validationMessages.url\">\n                        <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['url']?.hasError(validation.type)\">\n                            {{ validation.message }}\n                        </div>\n                    </ng-container>\n                </div>\n                <!-- end url -->\n                <ion-item class=\"item-transparent\">\n                        <ion-searchbar\n                            showCancelButton=\"focus\"\n                            name=\"model-name\"\n                            (keyup.enter)=\"searchUsers($event)\"\n                            [(ngModel)]=\"modelName\"\n                            [cancelButtonText]=\"'Cancelar'\"\n                            [placeholder]=\"'Buscar usuarios para citar'\"\n                            (ionCancel)=\"users = []\"\n                            debounce=\"1000\">\n                        </ion-searchbar>\n\n                </ion-item>\n\n                <ng-container *ngIf=\"users.length\" class=\"item-transparent\">\n\n                        <ion-item *ngFor=\"let user of users\">\n                            <ion-label>{{user.name}}</ion-label>\n                            <ion-button fill=\"clear\" (click)=\"setCitations(user)\">\n                                Agregar citación\n                                <ion-icon slot=\"end\" name=\"add-circle-outline\"></ion-icon>\n                            </ion-button>\n                        </ion-item>\n                </ng-container>\n\n                <ion-item>\n                    <h3>Citaciones</h3>\n                </ion-item>\n                <ion-item *ngIf=\"!citations.length\">\n                    <h4>Sin citaciones adicionales</h4>\n                </ion-item>\n                <ng-container *ngIf=\"citations.length\">\n                    <ion-item *ngFor=\"let citation of citations\">\n                    <ion-label>{{citation.name}}</ion-label>\n                    <ion-button fill=\"clear\" (click)=\"removeCitations(citation)\">\n                        Eliminar citación\n                        <ion-icon slot=\"end\" name=\"add-circle-outline\"></ion-icon>\n                    </ion-button>\n                    </ion-item>\n                </ng-container>\n\n            </ion-list>\n        </form>\n    </ion-card>\n    <pre>\n{{model | json}}\n    </pre>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-create/coun-meetings-create.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-create/coun-meetings-create.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/coun-meetings'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"counMeetingsService.storeCounMeeting()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!counMeetingsService.counMeetingsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'JUNTAS DEL CONSEJO' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-coun-meetings-form #counMeetingForm [model]=\"counMeetingsService.counMeeting\"></app-coun-meetings-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-duplicate/coun-meetings-duplicate.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-duplicate/coun-meetings-duplicate.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  CounMeetings duplicate works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-edit/coun-meetings-edit.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-edit/coun-meetings-edit.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/coun-meetings'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"counMeetingsService.updateCounMeeting()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!counMeetingsService.counMeetingsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'JUNTAS DEL CONSEJO' | titlecase}}: {{ counMeetingsService.counMeeting?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-coun-meetings-form #counMeetingForm [model]=\"counMeetingsService.counMeeting\"></app-coun-meetings-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-form/coun-meetings-form.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-form/coun-meetings-form.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #counMeetingsForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- coun_meeting_agenda_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'JUNTAS AGENDAS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"coun_meeting_agenda_ids\"\n                          id=\"coun_meeting_agenda_ids-field\"\n                          [(ngModel)]=\"model.coun_meeting_agendas\"\n                          [items]=\"counMeetingsService.counMeetingLists.CounMeetingAgenda\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('JUNTAS AGENDAS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('JUNTAS AGENDAS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setCounMeetingAgendaIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.coun_meeting_agenda_ids\">\n            <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['coun_meeting_agenda_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end coun_meeting_agenda_ids -->\n\n\n    <!-- coun_meeting_citation_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'JUNTAS CITACIONES' | titlecase }}</ion-label>\n        <ionic-selectable name=\"coun_meeting_citation_ids\"\n                          id=\"coun_meeting_citation_ids-field\"\n                          [(ngModel)]=\"model.coun_meeting_citations\"\n                          [items]=\"counMeetingsService.counMeetingLists.CounMeetingCitation\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('JUNTAS CITACIONES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('JUNTAS CITACIONES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setCounMeetingCitationIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.coun_meeting_citation_ids\">\n            <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['coun_meeting_citation_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end coun_meeting_citation_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- description -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'DESCRIPCIÓN' | titlecase }}</ion-label>\n                <ion-textarea [(ngModel)]=\"model.description\"\n                              name=\"description\"\n                              id=\"description-field\"\n                              rows=\"6\"\n                              placeholder=\"\"></ion-textarea>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.description\">\n                    <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['description']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end description -->\n\n\n            <!-- date -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'FECHA' | titlecase }}</ion-label>\n                <ion-datetime name=\"date\"\n                              id=\"date-field\"\n                              [required]=\"true\"\n                              [doneText]=\"'Seleccionar'\"\n                              max=\"2040-12-31\"\n                              [cancelText]=\"'Cancelar'\"\n                              [(ngModel)]=\"model.date\"\n                              displayFormat=\"DD/MM/YYYY\"></ion-datetime>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.date\">\n                    <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['date']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end date -->\n\n\n            <!-- hour -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'HORA' | titlecase }}</ion-label>\n                <ion-datetime name=\"hour\"\n                              id=\"hour-field\"\n                              [doneText]=\"'Seleccionar'\"\n                              [cancelText]=\"'Cancelar'\"\n                              [(ngModel)]=\"model.hour\"\n                              displayFormat=\"h:mm A\"\n                              minuteValues=\"0,15,30,45\"\n                              pickerFormat=\"h:mm A\"></ion-datetime>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.hour\">\n                    <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['hour']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end hour -->\n\n\n            <!-- place -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'LUGAR' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.place\"\n                            type=\"text\"\n                            name=\"place\"\n                            id=\"place-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.place\">\n                    <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['place']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end place -->\n\n\n            <!-- url -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'DIRECCIÓN REUNIÓN VIRTUAL' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.url\"\n                            type=\"text\"\n                            name=\"url\"\n                            id=\"url-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.url\">\n                    <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['url']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end url -->\n\n\n            <!-- act -->\n            <ion-item class=\"item-transparent\">\n                <ion-label position=\"stacked\" style=\"font-size: 1rem;\">{{ 'ACTA' | titlecase }}</ion-label>\n                <input [ngxSummernote]\n                       name=\"act\"\n                       id=\"act-field\"\n                       [(ngModel)]=\"model.act\">\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.act\">\n                    <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['act']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end act -->\n\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-list/coun-meetings-list.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-list/coun-meetings-list.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'JUNTAS DEL CONSEJO' | titlecase}}\"\n                 primaryLink=\"coun-meetings/create\"\n                 primaryText=\"Crear {{'JUNTAS DEL CONSEJO' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('JUNTAS DEL CONSEJO' | lowercase )\"\n                       (ionCancel)=\"this.counMeetingsService.searchValue = ''; counMeetingsService.getCounMeetings()\"\n                       (keyup.enter)=\"counMeetingsService.getCounMeetings()\"\n                       [(ngModel)]=\"counMeetingsService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && counMeetingsService.counMeetings.length\">\n        <ion-card *ngFor=\"let counMeeting of counMeetingsService.counMeetings; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ counMeeting.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'DESCRIPCIÓN' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ counMeeting.description }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'FECHA' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ counMeeting.date | dateFormat:'DD/MM/YYYY' }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'HORA' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ counMeeting.hour | dateFormat:'HH:mm' }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'LUGAR' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ counMeeting.place }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'DIRECCIÓN REUNIÓN VIRTUAL' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ counMeeting.url }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'ACTA' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ counMeeting.act | stripHtml }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'JUNTAS AGENDAS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"counMeeting.coun_meeting_agendas.length\">\n                                <ng-container *ngFor=\"let counMeetingAgenda of counMeeting.coun_meeting_agendas; let last = last\">\n                                    <a routerLink=\"/coun-meeting-agendas/{{ counMeetingAgenda.id }}/edit\">{{ counMeetingAgenda.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'JUNTAS CITACIONES' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"counMeeting.coun_meeting_citations.length\">\n                                <ng-container *ngFor=\"let counMeetingCitation of counMeeting.coun_meeting_citations; let last = last\">\n                                    <a routerLink=\"/coun-meeting-citations/{{ counMeetingCitation.id }}/edit\">{{ counMeetingCitation.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/coun-meetings/' + counMeeting.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"counMeetingsService.deleteCounMeeting(counMeeting.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !counMeetingsService.counMeetings.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'JUNTAS DEL CONSEJO' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/coun-meetings/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'JUNTAS DEL CONSEJO' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"counMeetingsService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"counMeetingsService.getCounMeetings(counMeetingsService.meta.current_page - 1)\"\n                        [disabled]=\"counMeetingsService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{counMeetingsService.meta.current_page}}\n                /{{counMeetingsService.meta.last_page}} {{counMeetingsService.meta.from}}-{{counMeetingsService.meta.to}}\n                /{{counMeetingsService.meta.total}} </ion-button>\n            <ion-button (click)=\"counMeetingsService.getCounMeetings(counMeetingsService.meta.current_page + 1)\"\n                        [disabled]=\"counMeetingsService.meta.current_page == counMeetingsService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"JUNTAS DEL CONSEJO\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/coun-meetings/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'JUNTAS DEL CONSEJO'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/coun-meetings/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'JUNTAS DEL CONSEJO' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/coun-meetings/coun-meetings-create-custom/coun-meetings-create-custom.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/coun-meetings/coun-meetings-create-custom/coun-meetings-create-custom.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW4tbWVldGluZ3MvY291bi1tZWV0aW5ncy1jcmVhdGUtY3VzdG9tL2NvdW4tbWVldGluZ3MtY3JlYXRlLWN1c3RvbS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/coun-meetings/coun-meetings-create-custom/coun-meetings-create-custom.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/coun-meetings/coun-meetings-create-custom/coun-meetings-create-custom.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: CounMeetingsCreateCustomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMeetingsCreateCustomComponent", function() { return CounMeetingsCreateCustomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _coun_meetings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../coun-meetings.service */ "./src/app/coun-meetings/coun-meetings.service.ts");
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../users/users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");








let CounMeetingsCreateCustomComponent = class CounMeetingsCreateCustomComponent {
    constructor(counMeetingsService, usersService, toTitlecase, http, platform) {
        this.counMeetingsService = counMeetingsService;
        this.usersService = usersService;
        this.toTitlecase = toTitlecase;
        this.http = http;
        this.platform = platform;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'description': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('DESCRIPCIÓN') + ' es obligatorio.' },
            ],
            'date': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('FECHA') + ' es obligatorio.' },
            ],
            'hour': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('HORA') + ' es obligatorio.' },
            ],
            'place': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('LUGAR') + ' es obligatorio.' },
            ],
            'url': [
                {
                    type: 'required',
                    message: 'El campo ' + this.toTitlecase.transform('DIRECCIÓN REUNIÓN VIRTUAL') + ' es obligatorio.'
                },
            ],
            'act': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('ACTA') + ' es obligatorio.' },
            ],
            'coun_meeting_agenda_ids': [
                {
                    type: 'required',
                    message: 'El campo ' + this.toTitlecase.transform('JUNTAS AGENDAS') + ' es obligatorio.'
                },
            ],
            'coun_meeting_citation_ids': [
                {
                    type: 'required',
                    message: 'El campo ' + this.toTitlecase.transform('JUNTAS CITACIONES') + ' es obligatorio.'
                },
            ],
        };
        this.modelName = '';
        this.users = [];
        this.citations = [];
    }
    ngOnInit() {
        this.usersService.getUsers();
        this.model.coun_meeting_citations = [];
    }
    searchUsers(event) {
        if (event.target.value.length > 5) {
            this.usersService.searchValue = event.target.value;
            this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].serverUrl + '/api/users?perPage=100&q[name:cont]=' + event.target.value)
                .subscribe((res) => {
                this.users = res.data;
            });
        }
    }
    setCitations(user) {
        this.citations.push(user);
        this.model.coun_meeting_citations.push({
            user_id: user.id
        });
    }
    removeCitations(user) {
        for (let i = 0; i < this.citations.length; i++) {
            if (this.citations[i].id == user.id) {
                this.citations.splice(i, 1);
            }
        }
        for (let i = 0; i < this.model.coun_meeting_citations.length; i++) {
            if (this.model.coun_meeting_citations[i].user_id == user.id) {
                this.model.coun_meeting_citations.splice(i, 1);
            }
        }
    }
    removeFocus(event) {
    }
    saveCounMeeting() {
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].serverUrl + '/api/coun-meeting-custom', this.model)
            .subscribe((res) => {
            console.log(res);
        });
    }
    // set setCounMeetingAgendaIds
    setCounMeetingAgendaIds(event) {
        let counMeetingAgendaIds = null;
        if (event.value.length) {
            counMeetingAgendaIds = [];
            for (let i = 0; i < event.value.length; i++) {
                counMeetingAgendaIds.push(event.value[i].id);
            }
        }
        this.counMeetingsService.counMeeting.coun_meeting_agenda_ids = counMeetingAgendaIds;
    }
    // end setCounMeetingAgendaIds
    // set setCounMeetingCitationIds
    setCounMeetingCitationIds(event) {
        let counMeetingCitationIds = null;
        if (event.value.length) {
            counMeetingCitationIds = [];
            for (let i = 0; i < event.value.length; i++) {
                counMeetingCitationIds.push(event.value[i].id);
            }
        }
        this.counMeetingsService.counMeeting.coun_meeting_citation_ids = counMeetingCitationIds;
    }
};
CounMeetingsCreateCustomComponent.ctorParameters = () => [
    { type: _coun_meetings_service__WEBPACK_IMPORTED_MODULE_3__["CounMeetingsService"] },
    { type: _users_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] }
];
CounMeetingsCreateCustomComponent.propDecorators = {
    counMeetingsForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['counMeetingsForm',] }]
};
CounMeetingsCreateCustomComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coun-meetings-create-custom',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coun-meetings-create-custom.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-create-custom/coun-meetings-create-custom.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coun-meetings-create-custom.component.scss */ "./src/app/coun-meetings/coun-meetings-create-custom/coun-meetings-create-custom.component.scss")).default]
    })
], CounMeetingsCreateCustomComponent);



/***/ }),

/***/ "./src/app/coun-meetings/coun-meetings-create/coun-meetings-create.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/coun-meetings/coun-meetings-create/coun-meetings-create.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW4tbWVldGluZ3MvY291bi1tZWV0aW5ncy1jcmVhdGUvY291bi1tZWV0aW5ncy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/coun-meetings/coun-meetings-create/coun-meetings-create.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/coun-meetings/coun-meetings-create/coun-meetings-create.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CounMeetingsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMeetingsCreateComponent", function() { return CounMeetingsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _coun_meetings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../coun-meetings.service */ "./src/app/coun-meetings/coun-meetings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let CounMeetingsCreateComponent = class CounMeetingsCreateComponent {
    constructor(counMeetingsService, route, platform) {
        this.counMeetingsService = counMeetingsService;
        this.route = route;
        this.platform = platform;
        this.id = null;
        this.formValid = false;
    }
    ngOnInit() {
        this.clearPosts();
    }
    ngAfterViewInit() {
        this.counMeetingForm.counMeetingsForm.valueChanges.subscribe((data) => {
            this.counMeetingsService.counMeetingsFormValid.next(this.counMeetingForm.counMeetingsForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.counMeetingsService.createCounMeeting();
        this.counMeetingsService.counMeeting = {};
    }
};
CounMeetingsCreateComponent.ctorParameters = () => [
    { type: _coun_meetings_service__WEBPACK_IMPORTED_MODULE_2__["CounMeetingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
CounMeetingsCreateComponent.propDecorators = {
    counMeetingForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['counMeetingForm',] }]
};
CounMeetingsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coun-meetings-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coun-meetings-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-create/coun-meetings-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coun-meetings-create.component.scss */ "./src/app/coun-meetings/coun-meetings-create/coun-meetings-create.component.scss")).default]
    })
], CounMeetingsCreateComponent);



/***/ }),

/***/ "./src/app/coun-meetings/coun-meetings-duplicate/coun-meetings-duplicate.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/coun-meetings/coun-meetings-duplicate/coun-meetings-duplicate.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW4tbWVldGluZ3MvY291bi1tZWV0aW5ncy1kdXBsaWNhdGUvY291bi1tZWV0aW5ncy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/coun-meetings/coun-meetings-duplicate/coun-meetings-duplicate.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/coun-meetings/coun-meetings-duplicate/coun-meetings-duplicate.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CounMeetingsDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMeetingsDuplicateComponent", function() { return CounMeetingsDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CounMeetingsDuplicateComponent = class CounMeetingsDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
CounMeetingsDuplicateComponent.ctorParameters = () => [];
CounMeetingsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coun-meetings-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coun-meetings-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-duplicate/coun-meetings-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coun-meetings-duplicate.component.scss */ "./src/app/coun-meetings/coun-meetings-duplicate/coun-meetings-duplicate.component.scss")).default]
    })
], CounMeetingsDuplicateComponent);



/***/ }),

/***/ "./src/app/coun-meetings/coun-meetings-edit/coun-meetings-edit.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/coun-meetings/coun-meetings-edit/coun-meetings-edit.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW4tbWVldGluZ3MvY291bi1tZWV0aW5ncy1lZGl0L2NvdW4tbWVldGluZ3MtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/coun-meetings/coun-meetings-edit/coun-meetings-edit.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/coun-meetings/coun-meetings-edit/coun-meetings-edit.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CounMeetingsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMeetingsEditComponent", function() { return CounMeetingsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _coun_meetings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../coun-meetings.service */ "./src/app/coun-meetings/coun-meetings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let CounMeetingsEditComponent = class CounMeetingsEditComponent {
    constructor(counMeetingsService, route, platform) {
        this.counMeetingsService = counMeetingsService;
        this.route = route;
        this.platform = platform;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.counMeetingsService.editCounMeeting(this.id);
    }
    ngAfterViewInit() {
        this.counMeetingForm.counMeetingsForm.valueChanges.subscribe((data) => {
            this.counMeetingsService.counMeetingsFormValid.next(this.counMeetingForm.counMeetingsForm.valid);
        });
    }
};
CounMeetingsEditComponent.ctorParameters = () => [
    { type: _coun_meetings_service__WEBPACK_IMPORTED_MODULE_2__["CounMeetingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
CounMeetingsEditComponent.propDecorators = {
    counMeetingForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['counMeetingForm',] }]
};
CounMeetingsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coun-meetings-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coun-meetings-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-edit/coun-meetings-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coun-meetings-edit.component.scss */ "./src/app/coun-meetings/coun-meetings-edit/coun-meetings-edit.component.scss")).default]
    })
], CounMeetingsEditComponent);



/***/ }),

/***/ "./src/app/coun-meetings/coun-meetings-form/coun-meetings-form.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/coun-meetings/coun-meetings-form/coun-meetings-form.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW4tbWVldGluZ3MvY291bi1tZWV0aW5ncy1mb3JtL2NvdW4tbWVldGluZ3MtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/coun-meetings/coun-meetings-form/coun-meetings-form.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/coun-meetings/coun-meetings-form/coun-meetings-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CounMeetingsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMeetingsFormComponent", function() { return CounMeetingsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _coun_meetings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../coun-meetings.service */ "./src/app/coun-meetings/coun-meetings.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let CounMeetingsFormComponent = class CounMeetingsFormComponent {
    constructor(counMeetingsService, toTitlecase) {
        this.counMeetingsService = counMeetingsService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'description': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('DESCRIPCIÓN') + ' es obligatorio.' },
            ],
            'date': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('FECHA') + ' es obligatorio.' },
            ],
            'hour': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('HORA') + ' es obligatorio.' },
            ],
            'place': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('LUGAR') + ' es obligatorio.' },
            ],
            'url': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('DIRECCIÓN REUNIÓN VIRTUAL') + ' es obligatorio.' },
            ],
            'act': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('ACTA') + ' es obligatorio.' },
            ],
            'coun_meeting_agenda_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('JUNTAS AGENDAS') + ' es obligatorio.' },
            ],
            'coun_meeting_citation_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('JUNTAS CITACIONES') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setCounMeetingAgendaIds
    setCounMeetingAgendaIds(event) {
        let counMeetingAgendaIds = null;
        if (event.value.length) {
            counMeetingAgendaIds = [];
            for (let i = 0; i < event.value.length; i++) {
                counMeetingAgendaIds.push(event.value[i].id);
            }
        }
        this.counMeetingsService.counMeeting.coun_meeting_agenda_ids = counMeetingAgendaIds;
    }
    // end setCounMeetingAgendaIds
    // set setCounMeetingCitationIds
    setCounMeetingCitationIds(event) {
        let counMeetingCitationIds = null;
        if (event.value.length) {
            counMeetingCitationIds = [];
            for (let i = 0; i < event.value.length; i++) {
                counMeetingCitationIds.push(event.value[i].id);
            }
        }
        this.counMeetingsService.counMeeting.coun_meeting_citation_ids = counMeetingCitationIds;
    }
};
CounMeetingsFormComponent.ctorParameters = () => [
    { type: _coun_meetings_service__WEBPACK_IMPORTED_MODULE_2__["CounMeetingsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
CounMeetingsFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    counMeetingsForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['counMeetingsForm',] }]
};
CounMeetingsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coun-meetings-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coun-meetings-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-form/coun-meetings-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coun-meetings-form.component.scss */ "./src/app/coun-meetings/coun-meetings-form/coun-meetings-form.component.scss")).default]
    })
], CounMeetingsFormComponent);



/***/ }),

/***/ "./src/app/coun-meetings/coun-meetings-list/coun-meetings-list.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/coun-meetings/coun-meetings-list/coun-meetings-list.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW4tbWVldGluZ3MvY291bi1tZWV0aW5ncy1saXN0L2NvdW4tbWVldGluZ3MtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/coun-meetings/coun-meetings-list/coun-meetings-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/coun-meetings/coun-meetings-list/coun-meetings-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CounMeetingsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMeetingsListComponent", function() { return CounMeetingsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _coun_meetings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../coun-meetings.service */ "./src/app/coun-meetings/coun-meetings.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let CounMeetingsListComponent = class CounMeetingsListComponent {
    constructor(counMeetingsService, api, loading) {
        this.counMeetingsService = counMeetingsService;
        this.api = api;
        this.loading = loading;
    }
    ngOnInit() {
        this.counMeetingsService.getCounMeetings();
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
CounMeetingsListComponent.ctorParameters = () => [
    { type: _coun_meetings_service__WEBPACK_IMPORTED_MODULE_2__["CounMeetingsService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }
];
CounMeetingsListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
CounMeetingsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coun-meetings-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coun-meetings-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-list/coun-meetings-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coun-meetings-list.component.scss */ "./src/app/coun-meetings/coun-meetings-list/coun-meetings-list.component.scss")).default]
    })
], CounMeetingsListComponent);



/***/ }),

/***/ "./src/app/coun-meetings/coun-meetings-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/coun-meetings/coun-meetings-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CounMeetingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMeetingsPageRoutingModule", function() { return CounMeetingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _coun_meetings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coun-meetings.page */ "./src/app/coun-meetings/coun-meetings.page.ts");
/* harmony import */ var _coun_meetings_edit_coun_meetings_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coun-meetings-edit/coun-meetings-edit.component */ "./src/app/coun-meetings/coun-meetings-edit/coun-meetings-edit.component.ts");
/* harmony import */ var _coun_meetings_create_coun_meetings_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coun-meetings-create/coun-meetings-create.component */ "./src/app/coun-meetings/coun-meetings-create/coun-meetings-create.component.ts");
/* harmony import */ var _coun_meetings_list_coun_meetings_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coun-meetings-list/coun-meetings-list.component */ "./src/app/coun-meetings/coun-meetings-list/coun-meetings-list.component.ts");
/* harmony import */ var _coun_meetings_create_custom_coun_meetings_create_custom_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coun-meetings-create-custom/coun-meetings-create-custom.component */ "./src/app/coun-meetings/coun-meetings-create-custom/coun-meetings-create-custom.component.ts");








const routes = [
    {
        path: '',
        component: _coun_meetings_page__WEBPACK_IMPORTED_MODULE_3__["CounMeetingsPage"]
    },
    {
        path: 'list',
        component: _coun_meetings_list_coun_meetings_list_component__WEBPACK_IMPORTED_MODULE_6__["CounMeetingsListComponent"]
    },
    {
        path: 'create',
        component: _coun_meetings_create_coun_meetings_create_component__WEBPACK_IMPORTED_MODULE_5__["CounMeetingsCreateComponent"]
    },
    {
        path: 'create/custom',
        component: _coun_meetings_create_custom_coun_meetings_create_custom_component__WEBPACK_IMPORTED_MODULE_7__["CounMeetingsCreateCustomComponent"]
    },
    {
        path: 'create/custom/:id',
        component: _coun_meetings_create_custom_coun_meetings_create_custom_component__WEBPACK_IMPORTED_MODULE_7__["CounMeetingsCreateCustomComponent"]
    },
    {
        path: ':id/edit',
        component: _coun_meetings_edit_coun_meetings_edit_component__WEBPACK_IMPORTED_MODULE_4__["CounMeetingsEditComponent"]
    },
];
let CounMeetingsPageRoutingModule = class CounMeetingsPageRoutingModule {
};
CounMeetingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], CounMeetingsPageRoutingModule);



/***/ }),

/***/ "./src/app/coun-meetings/coun-meetings.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/coun-meetings/coun-meetings.module.ts ***!
  \*******************************************************/
/*! exports provided: CounMeetingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMeetingsPageModule", function() { return CounMeetingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _coun_meetings_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coun-meetings-routing.module */ "./src/app/coun-meetings/coun-meetings-routing.module.ts");
/* harmony import */ var _coun_meetings_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coun-meetings.page */ "./src/app/coun-meetings/coun-meetings.page.ts");
/* harmony import */ var _coun_meetings_list_coun_meetings_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coun-meetings-list/coun-meetings-list.component */ "./src/app/coun-meetings/coun-meetings-list/coun-meetings-list.component.ts");
/* harmony import */ var _coun_meetings_create_coun_meetings_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./coun-meetings-create/coun-meetings-create.component */ "./src/app/coun-meetings/coun-meetings-create/coun-meetings-create.component.ts");
/* harmony import */ var _coun_meetings_duplicate_coun_meetings_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./coun-meetings-duplicate/coun-meetings-duplicate.component */ "./src/app/coun-meetings/coun-meetings-duplicate/coun-meetings-duplicate.component.ts");
/* harmony import */ var _coun_meetings_edit_coun_meetings_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./coun-meetings-edit/coun-meetings-edit.component */ "./src/app/coun-meetings/coun-meetings-edit/coun-meetings-edit.component.ts");
/* harmony import */ var _coun_meetings_form_coun_meetings_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./coun-meetings-form/coun-meetings-form.component */ "./src/app/coun-meetings/coun-meetings-form/coun-meetings-form.component.ts");
/* harmony import */ var _coun_meetings_create_custom_coun_meetings_create_custom_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./coun-meetings-create-custom/coun-meetings-create-custom.component */ "./src/app/coun-meetings/coun-meetings-create-custom/coun-meetings-create-custom.component.ts");














let CounMeetingsPageModule = class CounMeetingsPageModule {
};
CounMeetingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _coun_meetings_routing_module__WEBPACK_IMPORTED_MODULE_6__["CounMeetingsPageRoutingModule"]
        ],
        declarations: [
            _coun_meetings_page__WEBPACK_IMPORTED_MODULE_7__["CounMeetingsPage"],
            _coun_meetings_list_coun_meetings_list_component__WEBPACK_IMPORTED_MODULE_8__["CounMeetingsListComponent"],
            _coun_meetings_create_coun_meetings_create_component__WEBPACK_IMPORTED_MODULE_9__["CounMeetingsCreateComponent"],
            _coun_meetings_duplicate_coun_meetings_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["CounMeetingsDuplicateComponent"],
            _coun_meetings_edit_coun_meetings_edit_component__WEBPACK_IMPORTED_MODULE_11__["CounMeetingsEditComponent"],
            _coun_meetings_form_coun_meetings_form_component__WEBPACK_IMPORTED_MODULE_12__["CounMeetingsFormComponent"],
            _coun_meetings_create_custom_coun_meetings_create_custom_component__WEBPACK_IMPORTED_MODULE_13__["CounMeetingsCreateCustomComponent"],
        ]
    })
], CounMeetingsPageModule);



/***/ }),

/***/ "./src/app/coun-meetings/coun-meetings.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/coun-meetings/coun-meetings.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW4tbWVldGluZ3MvY291bi1tZWV0aW5ncy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/coun-meetings/coun-meetings.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/coun-meetings/coun-meetings.page.ts ***!
  \*****************************************************/
/*! exports provided: CounMeetingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMeetingsPage", function() { return CounMeetingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CounMeetingsPage = class CounMeetingsPage {
    constructor() { }
    ngOnInit() {
    }
};
CounMeetingsPage.ctorParameters = () => [];
CounMeetingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coun-meetings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coun-meetings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coun-meetings.page.scss */ "./src/app/coun-meetings/coun-meetings.page.scss")).default]
    })
], CounMeetingsPage);



/***/ }),

/***/ "./src/app/coun-meetings/coun-meetings.service.ts":
/*!********************************************************!*\
  !*** ./src/app/coun-meetings/coun-meetings.service.ts ***!
  \********************************************************/
/*! exports provided: CounMeetingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMeetingsService", function() { return CounMeetingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let CounMeetingsService = class CounMeetingsService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.counMeetingsUrl = 'coun-meetings';
        this.counMeetingsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.counMeetings = [];
        this.counMeeting = {};
        this.counMeetingLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    getCounMeetings(page = this.page, perPage = this.perPage) {
        this.api.get(this.counMeetingsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.counMeetings = res.data;
            this.counMeetingLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editCounMeeting(id) {
        this.api.get(this.counMeetingsUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.counMeeting = res.data.model;
            this.counMeetingLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateCounMeeting() {
        this.api.put(this.counMeetingsUrl + '/' + this.counMeeting.id, {
            model: this.counMeeting,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getCounMeetings(1);
        });
    }
    createCounMeeting() {
        this.api.get(this.counMeetingsUrl + '/create')
            .subscribe((res) => {
            this.counMeeting = {};
            this.counMeetingLists = res.lists;
        });
    }
    storeCounMeeting() {
        this.api.post(this.counMeetingsUrl, {
            model: this.counMeeting,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getCounMeetings(1);
        });
    }
    deleteCounMeeting(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.counMeetingsUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getCounMeetings(1);
                });
            }
            else {
                return;
            }
        });
    }
};
CounMeetingsService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
CounMeetingsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CounMeetingsService);



/***/ })

}]);
//# sourceMappingURL=coun-meetings-coun-meetings-module-es2015.js.map