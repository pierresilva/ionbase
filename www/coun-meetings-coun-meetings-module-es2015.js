(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coun-meetings-coun-meetings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-create-custom/coun-meetings-create-custom.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-create-custom/coun-meetings-create-custom.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <ion-buttons slot=\"start\"\n                         *ngIf=\"true\">\n                <ion-menu-toggle auto-hide=\"false\"\n                                 menu=\"main-menu\">\n                    <ion-button (click)=\"toggleMenu()\">\n                        <ion-icon slot=\"icon-only\"\n                                  name=\"menu\"></ion-icon>\n                    </ion-button>\n                </ion-menu-toggle>\n            </ion-buttons>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"saveCounMeeting()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!counMeetingsForm.valid\">\n                <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\"\n                          color=\"success\"\n                          name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>{{'CONSEJO DE ADMINISTRACIÓN' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <ion-segment color=\"primary\"\n                             [(ngModel)]=\"type\"\n                             (ionChange)=\"segmentChanged($event)\"\n                             scrollable>\n                    <ion-segment-button value=\"general\">\n                        <ion-label>JUNTA</ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button value=\"agenda\">\n                        <ion-label>AGENDA</ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button value=\"citations\">\n                        <ion-label>CITACIONES</ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button *ngIf=\"counMeetingId\"\n                                        value=\"assistance\">\n                        <ion-label>ASISTENCIA</ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button *ngIf=\"counMeetingId && model.status == 'in_progress'\"\n                                        value=\"act\">\n                        <ion-label>ACTA</ion-label>\n                    </ion-segment-button>\n                </ion-segment>\n                <ng-container>\n                    <form #counMeetingsForm=\"ngForm\"\n                          novalidate\n                          autocomplete=\"off\">\n                        <ion-card [ngStyle]=\"{'display': (type == 'general') ? 'block' : 'none'}\">\n                            <ion-list>\n                                <ion-list-header class=\"item-transparent\">Junta</ion-list-header>\n                                <!-- name -->\n                                <ion-item class=\"item-transparent\">\n                                    <ion-label position=\"floating\">Nombre de la junta</ion-label>\n                                    <ion-input [(ngModel)]=\"model.name\"\n                                               type=\"text\"\n                                               name=\"name\"\n                                               [readonly]=\"!!counMeetingId\"\n                                               id=\"name-field\"\n                                               [required]=\"true\"\n                                               placeholder=\"\"></ion-input>\n                                </ion-item>\n                                <div class=\"validation-errors\">\n                                    <ng-container *ngFor=\"let validation of validationMessages.name\">\n                                        <div class=\"error-message\"\n                                             *ngIf=\"counMeetingsForm.form.controls['name']?.hasError(validation.type)\">\n                                            {{ validation.message }}\n                                        </div>\n                                    </ng-container>\n                                </div>\n                                <!-- end name -->\n                                <!-- type -->\n                                <ion-item class=\"item-transparent\">\n                                    <ion-label>{{ 'TIPO' | titlecase }}</ion-label>\n                                    <ion-select [(ngModel)]=\"model.type\"\n                                                name=\"type\"\n                                                id=\"type-field\"\n                                                okText=\"Seleccionar\"\n                                                cancelText=\"Cancelar\">\n                                        <ion-select-option value=\"\">{{ 'Ninguno' | titlecase }}</ion-select-option>\n                                        <ion-select-option value=\"council\">{{ 'Junta del Consejo' | titlecase }}</ion-select-option>\n                                        <ion-select-option value=\"coexistence\">{{ 'Junta de Convivencia' | titlecase }}</ion-select-option>\n                                    </ion-select>\n                                </ion-item>\n                                <div class=\"validation-errors\">\n                                    <ng-container *ngFor=\"let validation of validationMessages.type\">\n                                        <div class=\"error-message\"\n                                             *ngIf=\"counMeetingsForm.form.controls['type']?.hasError(validation.type)\">\n                                            {{ validation.message }}\n                                        </div>\n                                    </ng-container>\n                                </div>\n                                <!-- end type -->\n                                <!-- description -->\n                                <ion-item class=\"item-transparent\">\n                                    <ion-label position=\"floating\">Descripción</ion-label>\n                                    <ion-textarea [(ngModel)]=\"model.description\"\n                                                  name=\"description\"\n                                                  required\n                                                  [readonly]=\"!!counMeetingId\"\n                                                  id=\"description-field\"\n                                                  rows=\"6\"\n                                                  placeholder=\"\"></ion-textarea>\n                                </ion-item>\n                                <div class=\"validation-errors\">\n                                    <ng-container *ngFor=\"let validation of validationMessages.description\">\n                                        <div class=\"error-message\"\n                                             *ngIf=\"counMeetingsForm.form.controls['description']?.hasError(validation.type)\">\n                                            {{ validation.message }}\n                                        </div>\n                                    </ng-container>\n                                </div>\n                                <!-- end description -->\n                                <!-- date -->\n                                <ion-item class=\"item-transparent\">\n                                    <ion-label position=\"floating\">Fecha</ion-label>\n                                    <ion-datetime name=\"date\"\n                                                  type=\"text\"\n                                                  id=\"date-field\"\n                                                  [required]=\"true\"\n                                                  [readonly]=\"!!counMeetingId\"\n                                                  [doneText]=\"'Seleccionar'\"\n                                                  [yearValues]=\"[2030, 2029, 2028, 2027, 2026, 2025, 2024, 2023, 2022, 2021, 2020]\"\n                                                  [cancelText]=\"'Cancelar'\"\n                                                  [(ngModel)]=\"model.date\"\n                                                  displayFormat=\"DD/MM/YYYY\"></ion-datetime>\n                                </ion-item>\n                                <div class=\"validation-errors\">\n                                    <ng-container *ngFor=\"let validation of validationMessages.date\">\n                                        <div class=\"error-message\"\n                                             *ngIf=\"counMeetingsForm.form.controls['date']?.hasError(validation.type)\">\n                                            {{ validation.message }}\n                                        </div>\n                                    </ng-container>\n                                </div>\n                                <!-- end date -->\n                                <!-- hour -->\n                                <ion-item class=\"item-transparent\">\n                                    <ion-label position=\"floating\">Hora</ion-label>\n                                    <ion-datetime name=\"hour\"\n                                                  id=\"hour-field\"\n                                                  [required]=\"true\"\n                                                  [readonly]=\"!!counMeetingId\"\n                                                  [doneText]=\"'Seleccionar'\"\n                                                  [cancelText]=\"'Cancelar'\"\n                                                  [(ngModel)]=\"model.hour\"\n                                                  displayFormat=\"h:mm A\"\n                                                  minuteValues=\"0,15,30,45\"\n                                                  pickerFormat=\"h:mm A\"></ion-datetime>\n                                </ion-item>\n                                <div class=\"validation-errors\">\n                                    <ng-container *ngFor=\"let validation of validationMessages.hour\">\n                                        <div class=\"error-message\"\n                                             *ngIf=\"counMeetingsForm.form.controls['hour']?.hasError(validation.type)\">\n                                            {{ validation.message }}\n                                        </div>\n                                    </ng-container>\n                                </div>\n                                <!-- end hour -->\n                                <!-- place -->\n                                <ion-item class=\"item-transparent\">\n                                    <ion-label position=\"floating\">Lugar</ion-label>\n                                    <ion-input [(ngModel)]=\"model.place\"\n                                               type=\"text\"\n                                               [required]=\"true\"\n                                               [readonly]=\"!!counMeetingId\"\n                                               name=\"place\"\n                                               id=\"place-field\"\n                                               placeholder=\"\"></ion-input>\n                                </ion-item>\n                                <div class=\"validation-errors\">\n                                    <ng-container *ngFor=\"let validation of validationMessages.place\">\n                                        <div class=\"error-message\"\n                                             *ngIf=\"counMeetingsForm.form.controls['place']?.hasError(validation.type)\">\n                                            {{ validation.message }}\n                                        </div>\n                                    </ng-container>\n                                </div>\n                                <!-- end place -->\n                                <!-- url -->\n                                <ion-item class=\"item-transparent\">\n                                    <ion-label position=\"floating\">URl virtual</ion-label>\n                                    <ion-input [(ngModel)]=\"model.url\"\n                                               type=\"text\"\n                                               [readonly]=\"!!counMeetingId\"\n                                               name=\"url\"\n                                               id=\"url-field\"\n                                               placeholder=\"\"></ion-input>\n                                </ion-item>\n                                <div class=\"validation-errors\">\n                                    <ng-container *ngFor=\"let validation of validationMessages.url\">\n                                        <div class=\"error-message\"\n                                             *ngIf=\"counMeetingsForm.form.controls['url']?.hasError(validation.type)\">\n                                            {{ validation.message }}\n                                        </div>\n                                    </ng-container>\n                                </div>\n                                <!-- end url -->\n\n                            </ion-list>\n\n                        </ion-card>\n\n                        <ion-card [ngStyle]=\"{'display': (type == 'agenda') ? 'block' : 'none'}\">\n                            <ion-list>\n                                <ion-list-header class=\"item-transparent\">Orden del dia</ion-list-header>\n                                <ion-item class=\"item-transparent\">\n                                    <ion-label position=\"floating\">Ingrese orden del día</ion-label>\n                                    <ion-input type=\"text\"\n                                               id=\"order-day-field\"\n                                               value=\"\"\n                                               (keyup.enter)=\"addAgendaItem($event)\"></ion-input>\n                                </ion-item>\n                            </ion-list>\n                            <ng-container *ngIf=\"model?.coun_meeting_agendas?.length\">\n                                <ion-reorder-group disabled=\"false\"\n                                                   (ionItemReorder)=\"onRenderItems($event)\">\n                                    <ion-item class=\"item-transparent\"\n                                              *ngFor=\"let agenda of model.coun_meeting_agendas\">\n                                        <ion-reorder slot=\"end\"></ion-reorder>\n                                        <ion-label>{{agenda.name}}</ion-label>\n                                        <ion-icon name=\"remove-circle-outline\"\n                                                  color=\"danger\"\n                                                  slot=\"end\"\n                                                  (click)=\"removeAgendaItem(agenda)\"></ion-icon>\n                                    </ion-item>\n                                </ion-reorder-group>\n                            </ng-container>\n                            <ng-container *ngIf=\"!model?.coun_meeting_agendas?.length\">\n                                <ion-list>\n                                    <ion-item class=\"item-transparent\">\n                                        Sin orden del día.\n                                    </ion-item>\n                                </ion-list>\n                            </ng-container>\n\n                        </ion-card>\n\n                        <ion-card [ngStyle]=\"{'display': (type == 'citations') ? 'block' : 'none'}\">\n                            <ion-list-header>Citaciones adicionales</ion-list-header>\n                            <ion-list *ngIf=\"!counMeetingId\">\n                                <ion-item class=\"item-transparent\">\n                                    <ion-label>Usuarios</ion-label>\n                                    <ionic-selectable #userSelect\n                                                      name=\"user\"\n                                                      id=\"user-field\"\n                                                      [(ngModel)]=\"user\"\n                                                      [items]=\"usersService.users\"\n                                                      itemValueField=\"id\"\n                                                      itemTextField=\"name\"\n                                                      [isMultiple]=\"false\"\n                                                      [canClear]=\"false\"\n                                                      [hasConfirmButton]=\"false\"\n                                                      [confirmButtonText]=\"'Seleccionar'\"\n                                                      [searchPlaceholder]=\"'Buscar usuarios'\"\n                                                      [searchFailText]=\"'No se encontro usuario que coincida!'\"\n                                                      [closeButtonText]=\"'Cancelar'\"\n                                                      [clearButtonText]=\"'Limpiar'\"\n                                                      [canSearch]=\"true\"\n                                                      (onChange)=\"setCitations($event)\">\n                                    </ionic-selectable>\n                                </ion-item>\n                            </ion-list>\n\n                            <ng-container *ngIf=\"getAdditionalCitations().length\">\n                                <ion-list>\n                                    <ion-item class=\"item-transparent\"\n                                              *ngFor=\"let citation of getAdditionalCitations()\">\n                                        <ion-label>{{citation.name}}</ion-label>\n                                        <ion-icon name=\"remove-circle-outline\"\n                                                  color=\"danger\"\n                                                  slot=\"end\"\n                                                  (click)=\"removeCitations(citation)\"></ion-icon>\n                                    </ion-item>\n                                </ion-list>\n                            </ng-container>\n                            <ng-container *ngIf=\"!getAdditionalCitations().length\">\n                                <ion-list>\n                                    <ion-item class=\"item-transparent\">\n                                        Sin citaciones adicionales.\n                                    </ion-item>\n                                </ion-list>\n                            </ng-container>\n                        </ion-card>\n\n                        <ion-card [ngStyle]=\"{'display': (type == 'assistance') ? 'block' : 'none'}\">\n                            <ion-list-header>Asistencia</ion-list-header>\n\n                            <ng-container *ngIf=\"model.coun_meeting_citations.length\">\n                                <ion-list>\n                                    <ion-item class=\"item-transparent\"\n                                              *ngFor=\"let citation of model.coun_meeting_citations\">\n                                        <ion-label>{{citation.name}}</ion-label>\n                                        <ion-icon [name]=\"citation.attended ? 'checkbox-outline' : 'square-outline'\"\n                                                  [color]=\"citation.attended ? 'success' : 'danger'\"\n                                                  slot=\"end\"\n                                                  (click)=\"markAssistance(citation)\"></ion-icon>\n                                    </ion-item>\n                                </ion-list>\n                            </ng-container>\n                            <ng-container *ngIf=\"!model.coun_meeting_citations.length\">\n                                <ion-list>\n                                    <ion-item class=\"item-transparent\">\n                                        Sin asistentes.\n                                    </ion-item>\n                                </ion-list>\n                            </ng-container>\n                            <div class=\"ion-text-center ion-margin\">\n                                <ion-button *ngIf=\"!model.status\"\n                                            color=\"success\"\n                                            (click)=\"startCouncil()\">\n                                    Iniciar Junta\n                                </ion-button>\n                            </div>\n                        </ion-card>\n\n                        <ion-card [ngStyle]=\"{'display': (type == 'act') ? 'block' : 'none'}\">\n                            <ion-list-header>Acta</ion-list-header>\n\n                            <ion-item class=\"item-transparent\">\n                                <ion-label position=\"stacked\">\n                                    <b>Inicio</b>\n                                </ion-label>\n                                <div style=\"width: 100%;\"\n                                     [ngxSummernote]=\"{width: '100%', dialogsInBody: true}\"\n                                     [name]=\"'start_content'\"\n                                     [id]=\"'start_content-field'\"\n                                     [(ngModel)]=\"model.start_content\"></div>\n                            </ion-item>\n\n                            <ng-container *ngIf=\"model.coun_meeting_agendas.length\">\n                                <ion-item class=\"item-transparent\"\n                                          *ngFor=\"let agenda of model.coun_meeting_agendas; let index = index\">\n                                    <ion-label position=\"stacked\">\n                                        <b>{{agenda.name}}</b>\n                                    </ion-label>\n                                    <div style=\"width: 100%;\"\n                                         [ngxSummernote]=\"{width: '100%', dialogsInBody: true}\"\n                                         [name]=\"'html' + index\"\n                                         [id]=\"'html-field' + index\"\n                                         [(ngModel)]=\"agenda.content\"></div>\n                                </ion-item>\n                            </ng-container>\n\n                            <ion-item class=\"item-transparent\">\n                                <ion-label position=\"stacked\">\n                                    <b>Finalizacion</b>\n                                </ion-label>\n                                <div style=\"width: 100%;\"\n                                     [ngxSummernote]=\"{width: '100%', dialogsInBody: true}\"\n                                     [name]=\"'end_content'\"\n                                     [id]=\"'end_content-field'\"\n                                     [(ngModel)]=\"model.end_content\"></div>\n                            </ion-item>\n\n                            <ion-item class=\"itemtransparent\">\n                                <ion-label>Subir archivos adicionales</ion-label>\n                                <ion-button fill=\"clean\"\n                                            slot=\"end\"\n                                            class=\"file-upload-button\">\n                                    <ion-icon name=\"cloud-upload-outline\"\n                                              slot=\"icon-only\"></ion-icon>\n                                    <input type=\"file\"\n                                           #fileInput\n                                           (change)=\"onFileSelect(fileInput)\">\n                                </ion-button>\n                            </ion-item>\n                            <ion-item *ngIf=\"!model?.files?.length\">\n                                <ion-label>Sin archivos</ion-label>\n                            </ion-item>\n                            <ng-container *ngIf=\"model?.files?.length\">\n                                <ion-item *ngFor=\"let file of model.files\">\n                                    <ion-label>\n                                        <a [href]=\"file.url\"\n                                           target=\"_blank\">{{ file.name }}</a>\n                                    </ion-label>\n                                    <ion-icon name=\"remove-circle-outline\"\n                                              color=\"danger\"\n                                              slot=\"end\"\n                                              (click)=\"removeFile(file)\"></ion-icon>\n                                </ion-item>\n                            </ng-container>\n\n                            <div class=\"ion-text-center ion-margin\">\n                                <ion-button *ngIf=\"model.status == 'in_progress'\"\n                                            color=\"default\"\n                                            (click)=\"saveCounMeeting(null, true)\">\n                                    Enviar vista previa\n                                </ion-button>\n                            </div>\n\n                            <div class=\"ion-text-center ion-margin\">\n                                <ion-button *ngIf=\"model.status == 'in_progress'\"\n                                            color=\"success\"\n                                            (click)=\"finalizeCouncil()\">\n                                    Finalizar Junta\n                                </ion-button>\n                            </div>\n                        </ion-card>\n                    </form>\n                </ng-container>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-create/coun-meetings-create.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-create/coun-meetings-create.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/coun-meetings'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"counMeetingsService.storeCounMeeting()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!counMeetingsService.counMeetingsFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'JUNTAS DEL CONSEJO' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-coun-meetings-form #counMeetingForm [model]=\"counMeetingsService.counMeeting\"></app-coun-meetings-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-duplicate/coun-meetings-duplicate.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-duplicate/coun-meetings-duplicate.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  CounMeetings duplicate works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-edit/coun-meetings-edit.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-edit/coun-meetings-edit.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/coun-meetings'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"counMeetingsService.updateCounMeeting()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!counMeetingsService.counMeetingsFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'JUNTAS DEL CONSEJO' | titlecase}}: {{ counMeetingsService.counMeeting?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-coun-meetings-form #counMeetingForm [model]=\"counMeetingsService.counMeeting\"></app-coun-meetings-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-form/coun-meetings-form.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-form/coun-meetings-form.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #counMeetingsForm=\"ngForm\" novalidate autocomplete=\"off\">\r\n\r\n\r\n    <!-- coun_meeting_agenda_ids -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'JUNTAS AGENDAS' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"coun_meeting_agenda_ids\"\r\n                          id=\"coun_meeting_agenda_ids-field\"\r\n                          [(ngModel)]=\"model.coun_meeting_agendas\"\r\n                          [items]=\"counMeetingsService.counMeetingLists.CounMeetingAgenda\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('JUNTAS AGENDAS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('JUNTAS AGENDAS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setCounMeetingAgendaIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.coun_meeting_agenda_ids\">\r\n            <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['coun_meeting_agenda_ids']?.hasError(validation.type)\">\r\n            {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end coun_meeting_agenda_ids -->\r\n\r\n\r\n    <!-- coun_meeting_citation_ids -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'JUNTAS CITACIONES' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"coun_meeting_citation_ids\"\r\n                          id=\"coun_meeting_citation_ids-field\"\r\n                          [(ngModel)]=\"model.coun_meeting_citations\"\r\n                          [items]=\"counMeetingsService.counMeetingLists.CounMeetingCitation\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('JUNTAS CITACIONES' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('JUNTAS CITACIONES' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setCounMeetingCitationIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.coun_meeting_citation_ids\">\r\n            <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['coun_meeting_citation_ids']?.hasError(validation.type)\">\r\n            {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end coun_meeting_citation_ids -->\r\n\r\n\r\n            <!-- name -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.name\"\r\n                            type=\"text\"\r\n                            name=\"name\"\r\n                            id=\"name-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n                    <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['name']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end name -->\r\n\r\n\r\n            <!-- description -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'DESCRIPCIÓN' | titlecase }}</ion-label>\r\n                <ion-textarea [(ngModel)]=\"model.description\"\r\n                              name=\"description\"\r\n                              id=\"description-field\"\r\n                              rows=\"6\"\r\n                              placeholder=\"\"></ion-textarea>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.description\">\r\n                    <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['description']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end description -->\r\n\r\n\r\n            <!-- date -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'FECHA' | titlecase }}</ion-label>\r\n                <ion-datetime name=\"date\"\r\n                              id=\"date-field\"\r\n                              [required]=\"true\"\r\n                              [doneText]=\"'Seleccionar'\"\r\n                              max=\"2040-12-31\"\r\n                              [cancelText]=\"'Cancelar'\"\r\n                              [(ngModel)]=\"model.date\"\r\n                              displayFormat=\"DD/MM/YYYY\"></ion-datetime>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.date\">\r\n                    <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['date']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end date -->\r\n\r\n\r\n            <!-- hour -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'HORA' | titlecase }}</ion-label>\r\n                <ion-datetime name=\"hour\"\r\n                              id=\"hour-field\"\r\n                              [doneText]=\"'Seleccionar'\"\r\n                              max=\"2040-12-31 23:59:59\"\r\n                              [cancelText]=\"'Cancelar'\"\r\n                              [(ngModel)]=\"model.hour\"\r\n                              displayFormat=\"HH:mm\"></ion-datetime>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.hour\">\r\n                    <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['hour']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end hour -->\r\n\r\n\r\n            <!-- place -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'LUGAR' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.place\"\r\n                            type=\"text\"\r\n                            name=\"place\"\r\n                            id=\"place-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.place\">\r\n                    <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['place']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end place -->\r\n\r\n\r\n            <!-- url -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'DIRECCIÓN REUNIÓN VIRTUAL' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.url\"\r\n                            type=\"text\"\r\n                            name=\"url\"\r\n                            id=\"url-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.url\">\r\n                    <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['url']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end url -->\r\n\r\n\r\n            <!-- act -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label position=\"stacked\" style=\"font-size: 1rem;\">{{ 'ACTA' | titlecase }}</ion-label>\r\n                <input [ngxSummernote]\r\n                       name=\"act\"\r\n                       id=\"act-field\"\r\n                       [(ngModel)]=\"model.act\">\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.act\">\r\n                    <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['act']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end act -->\r\n\r\n\r\n            <!-- status -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'ESTADO' | titlecase }}</ion-label>\r\n                <ion-select [(ngModel)]=\"model.status\"\r\n                            name=\"status\"\r\n                            id=\"status-field\"\r\n                            okText=\"Seleccionar\"\r\n                            cancelText=\"Cancelar\">\r\n                    <ion-select-option value=\"\">{{ 'Ninguno' | titlecase }}</ion-select-option>\r\n                    <ion-select-option value=\"active\">{{ 'Activo' | titlecase }}</ion-select-option>\r\n                    <ion-select-option value=\"inactive\">{{ 'Inactivo' | titlecase }}</ion-select-option>\r\n                    <ion-select-option value=\"in_progress\">{{ 'En progreso' | titlecase }}</ion-select-option>\r\n                    <ion-select-option value=\"finalized\">{{ 'Finalizado' | titlecase }}</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.status\">\r\n                <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['status']?.hasError(validation.type)\">\r\n                    {{ validation.message }}\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n        <!-- end status -->\r\n\r\n\r\n            <!-- start_content -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label position=\"stacked\" style=\"font-size: 1rem;\">{{ 'INICIO' | titlecase }}</ion-label>\r\n                <input [ngxSummernote]\r\n                       name=\"start_content\"\r\n                       id=\"start_content-field\"\r\n                       [(ngModel)]=\"model.start_content\">\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.start_content\">\r\n                    <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['start_content']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end start_content -->\r\n\r\n\r\n            <!-- end_content -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label position=\"stacked\" style=\"font-size: 1rem;\">{{ 'FINAL' | titlecase }}</ion-label>\r\n                <input [ngxSummernote]\r\n                       name=\"end_content\"\r\n                       id=\"end_content-field\"\r\n                       [(ngModel)]=\"model.end_content\">\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.end_content\">\r\n                    <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['end_content']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end end_content -->\r\n\r\n\r\n            <!-- consecutive -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'CONSECUTIVO' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.consecutive\"\r\n                            type=\"text\"\r\n                            name=\"consecutive\"\r\n                            id=\"consecutive-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.consecutive\">\r\n                    <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['consecutive']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end consecutive -->\r\n\r\n\r\n            <!-- type -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'TIPO' | titlecase }}</ion-label>\r\n                <ion-select [(ngModel)]=\"model.type\"\r\n                            name=\"type\"\r\n                            id=\"type-field\"\r\n                            okText=\"Seleccionar\"\r\n                            cancelText=\"Cancelar\">\r\n                    <ion-select-option value=\"\">{{ 'Ninguno' | titlecase }}</ion-select-option>\r\n                    <ion-select-option value=\"council\">{{ 'Junta del Consejo' | titlecase }}</ion-select-option>\r\n                    <ion-select-option value=\"coexistence\">{{ 'Junta de Convivencia' | titlecase }}</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.type\">\r\n                <div class=\"error-message\" *ngIf=\"counMeetingsForm.form.controls['type']?.hasError(validation.type)\">\r\n                    {{ validation.message }}\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n        <!-- end type -->\r\n\r\n\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-list-custom/coun-meetings-list-custom.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-list-custom/coun-meetings-list-custom.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'JUNTAS DEL CONSEJO' | titlecase}}\"\r\n                 primaryLink=\"coun-meetings/create/custom\"\r\n                 primaryText=\"Crear {{'JUNTAS DEL CONSEJO' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n    <ion-list>\r\n        <ion-list-header>\r\n            <ion-label>Juntas del consejo</ion-label>\r\n        </ion-list-header>\r\n\r\n        <ng-container *ngIf=\"counMeetingsService.counMeetings.length\">\r\n            <ion-item-sliding *ngFor=\"let meeting of counMeetingsService.counMeetings\">\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>{{meeting.name}}</h2>\r\n                        <h2>No. {{meeting.id | zeroLeading}}</h2>\r\n                        <h3 *ngIf=\"meeting.files.length\">\r\n                            <ng-container *ngFor=\"let file of meeting.files; let index = index; let last = last\">\r\n                                <a [href]=\"file.url\" target=\"_blank\">{{file.name}}</a><span *ngIf=\"!last\">, </span>\r\n                            </ng-container>\r\n                        </h3>\r\n                    </ion-label>\r\n                    <div>{{meeting.status | status}}</div>\r\n                </ion-item>\r\n                <ion-item-options side=\"end\">\r\n                    <ion-item-option color=\"primary\"\r\n                                     *ngIf=\"meeting.status == 'finalized'\"\r\n                                     target=\"_blank\"\r\n                                     (click)=\"openAct(environment.serverUrl + '/api/coun-meeting-pdf/' + meeting.id)\">\r\n                        Descargar Acta\r\n                        <ion-icon name=\"download-outline\" slot=\"start\"></ion-icon>\r\n                    </ion-item-option>\r\n                    <ion-item-option *ngIf=\"!meeting.status\"\r\n                                     [routerLink]=\"'/coun-meetings/create/custom/' + meeting.id\"\r\n                                     color=\"success\"\r\n                                     style=\"color: #fff;\">\r\n                        Registrar Junta del Concejo\r\n                        <ion-icon name=\"create-outline\" slot=\"start\"></ion-icon>\r\n                    </ion-item-option>\r\n                    <ion-item-option *ngIf=\"meeting.status == 'in_progress'\"\r\n                                     [routerLink]=\"'/coun-meetings/create/custom/' + meeting.id\"\r\n                                     color=\"success\"\r\n                                     style=\"color: #fff;\">\r\n                        Continuar Junta\r\n                        <ion-icon name=\"create-outline\" slot=\"start\"></ion-icon>\r\n                    </ion-item-option>\r\n                </ion-item-options>\r\n            </ion-item-sliding>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!counMeetingsService.counMeetings.length\">\r\n            <ion-item>\r\n                <ion-label>Sin juntas del consejo</ion-label>\r\n            </ion-item>\r\n        </ng-container>\r\n\r\n    </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-list/coun-meetings-list.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-list/coun-meetings-list.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'JUNTAS DEL CONSEJO' | titlecase}}\"\r\n                 primaryLink=\"coun-meetings/create\"\r\n                 primaryText=\"Crear {{'JUNTAS DEL CONSEJO' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-searchbar showCancelButton=\"focus\"\r\n                       [cancelButtonText]=\"'Cancelar'\"\r\n                       [placeholder]=\"'Buscar ' + ('JUNTAS DEL CONSEJO' | lowercase )\"\r\n                       (ionCancel)=\"this.counMeetingsService.searchValue = ''; counMeetingsService.getCounMeetings()\"\r\n                       (keyup.enter)=\"counMeetingsService.getCounMeetings()\"\r\n                       [(ngModel)]=\"counMeetingsService.searchValue\"></ion-searchbar>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && counMeetingsService.counMeetings?.length\">\r\n        <ion-card *ngFor=\"let counMeeting of counMeetingsService.counMeetings; let index = index\">\r\n            <ion-list>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ counMeeting?.name }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'DESCRIPCIÓN' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ counMeeting?.description }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'FECHA' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ counMeeting?.date | dateFormat:'DD/MM/YYYY' }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'HORA' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ counMeeting?.hour | dateFormat:'HH:mm' }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'LUGAR' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ counMeeting?.place }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'DIRECCIÓN REUNIÓN VIRTUAL' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ counMeeting?.url }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'ACTA' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ counMeeting?.act | stripHtml }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'ESTADO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ counMeeting?.status | status }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'INICIO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ counMeeting?.start_content | stripHtml }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'FINAL' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ counMeeting?.end_content | stripHtml }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'CONSECUTIVO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ counMeeting?.consecutive }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'TIPO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ counMeeting?.type | status }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'JUNTAS AGENDAS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">\r\n                            <ng-container *ngIf=\"counMeeting?.coun_meeting_agendas?.length\">\r\n                                <ng-container *ngFor=\"let counMeetingAgenda of counMeeting?.coun_meeting_agendas; let last = last\">\r\n                                    <a routerLink=\"/coun-meeting-agendas/{{ counMeetingAgenda?.id }}/edit\">{{ counMeetingAgenda?.name }}</a><span *ngIf=\"!last\">, </span>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'JUNTAS CITACIONES' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">\r\n                            <ng-container *ngIf=\"counMeeting?.coun_meeting_citations?.length\">\r\n                                <ng-container *ngFor=\"let counMeetingCitation of counMeeting?.coun_meeting_citations; let last = last\">\r\n                                    <a routerLink=\"/coun-meeting-citations/{{ counMeetingCitation?.id }}/edit\">{{ counMeetingCitation?.name }}</a><span *ngIf=\"!last\">, </span>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n                    </ion-item>\r\n            </ion-list>\r\n            <ion-footer>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/coun-meetings/' + counMeeting?.id + '/edit'\">\r\n                            <ion-icon name=\"create-outline\"></ion-icon>\r\n                            <div>Editar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"counMeetingsService.deleteCounMeeting(counMeeting?.id)\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            <div>Eliminar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-footer>\r\n        </ion-card>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && !counMeetingsService.counMeetings?.length\">\r\n        <ion-item>\r\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label><h2>No se encontraron {{'JUNTAS DEL CONSEJO' | titlecase}}</h2></ion-label>\r\n            <ion-button [routerLink]=\"'/coun-meetings/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\r\n                Crear {{'JUNTAS DEL CONSEJO' | titlecase}}\r\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"counMeetingsService.meta\">\r\n        <ion-col class=\"ion-text-center\" size=\"12\">\r\n            <ion-button (click)=\"counMeetingsService.getCounMeetings(counMeetingsService.meta.current_page - 1)\"\r\n                        [disabled]=\"counMeetingsService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{counMeetingsService.meta.current_page}}\r\n                /{{counMeetingsService.meta.last_page}} {{counMeetingsService.meta.from}}-{{counMeetingsService.meta.to}}\r\n                /{{counMeetingsService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"counMeetingsService.getCounMeetings(counMeetingsService.meta.current_page + 1)\"\r\n                        [disabled]=\"counMeetingsService.meta.current_page == counMeetingsService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"JUNTAS DEL CONSEJO\"></app-main-header>\r\n\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/coun-meetings/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'JUNTAS DEL CONSEJO'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/coun-meetings/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'JUNTAS DEL CONSEJO' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n");

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

/***/ "./src/app/coun-meetings/coun-meetings-create-custom/coun-meetings-create-custom.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/coun-meetings/coun-meetings-create-custom/coun-meetings-create-custom.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.note-editor.note-airframe .note-editing-area .note-editable {\n  background: transparent !important;\n  width: 100% !important;\n}\n.file-upload-button {\n  /*    background-color: limegreen;\n      border-radius: 50%;\n      height: 3rem;\n      overflow: hidden;\n      position: relative;\n      width: 3rem;\n\n      &::after {\n          content: '⇪';\n          color: #fff;\n          font-size: 1.5rem;\n          text-align: center;\n      }*/\n}\n.file-upload-button input[type=file] {\n  font-size: 100px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bi1tZWV0aW5ncy9jb3VuLW1lZXRpbmdzLWNyZWF0ZS1jdXN0b20vY291bi1tZWV0aW5ncy1jcmVhdGUtY3VzdG9tLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGtDQUFBO0VBQ0Esc0JBQUE7QUFFSjtBQUNBO0VBQ0E7Ozs7Ozs7Ozs7OztRQUFBO0FBY0E7QUFBSTtFQUNJLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7QUFFUiIsImZpbGUiOiJzcmMvYXBwL2NvdW4tbWVldGluZ3MvY291bi1tZWV0aW5ncy1jcmVhdGUtY3VzdG9tL2NvdW4tbWVldGluZ3MtY3JlYXRlLWN1c3RvbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5ub3RlLWVkaXRvci5ub3RlLWFpcmZyYW1lIC5ub3RlLWVkaXRpbmctYXJlYSAubm90ZS1lZGl0YWJsZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5maWxlLXVwbG9hZC1idXR0b24ge1xuICAvKiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW47XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDNyZW07XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAn4oeqJztcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9Ki9cbn1cbi5maWxlLXVwbG9hZC1idXR0b24gaW5wdXRbdHlwZT1maWxlXSB7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufSJdfQ== */");

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
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shared_pipes_get_parameter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../@shared/pipes/get-parameter.pipe */ "./src/app/@shared/pipes/get-parameter.pipe.ts");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");
/* harmony import */ var _shared_classes_form_validation_errors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../@shared/classes/form-validation-errors */ "./src/app/@shared/classes/form-validation-errors.ts");
















let CounMeetingsCreateCustomComponent = class CounMeetingsCreateCustomComponent {
    constructor(counMeetingsService, usersService, toTitlecase, http, api, platform, toast, alert, route, router, getParameter, splitPanel) {
        this.counMeetingsService = counMeetingsService;
        this.usersService = usersService;
        this.toTitlecase = toTitlecase;
        this.http = http;
        this.api = api;
        this.platform = platform;
        this.toast = toast;
        this.alert = alert;
        this.route = route;
        this.router = router;
        this.getParameter = getParameter;
        this.splitPanel = splitPanel;
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
            'type': [
                {
                    type: 'required',
                    message: 'El campo ' + this.toTitlecase.transform('TIPO') + ' es obligatorio.'
                },
            ],
        };
        this.modelName = '';
        this.users = [];
        this.citations = [];
        this.type = 'general';
        this.user = null;
        this.counMeetingId = null;
        this.councilStarted = false;
        this.fileToUpload = null;
        this.selectYears = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
    }
    ngOnInit() {
        this.usersService.getAll();
        this.model.coun_meeting_citations = [];
        this.model.coun_meeting_agendas = [];
        this.counMeetingId = this.route.snapshot.paramMap.get('id');
        this.getMeeting();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
        this.formSubscription = this.counMeetingsForm.valueChanges.subscribe((data) => {
            console.log(this.counMeetingsForm.value);
            if (this.counMeetingsForm.invalid) {
                console.log(Object(_shared_classes_form_validation_errors__WEBPACK_IMPORTED_MODULE_15__["getFormValidationErrors"])(this.counMeetingsForm.controls));
            }
        });
    }
    ionViewWillLeave() {
        this.formSubscription.unsubscribe();
    }
    toggleMenu() {
        const splitPane = document.querySelector('ion-split-pane');
        const windowWidth = window.innerWidth;
        const splitPaneShownAt = 992;
        const when = `(min-width: ${splitPaneShownAt}px)`;
        if (windowWidth >= splitPaneShownAt) {
            // split pane view is visible
            const open = splitPane.when === when;
            splitPane.when = open ? false : when;
        }
        else {
            // split pane view is not visible
            // toggle menu open
            const menu = splitPane.querySelector('ion-menu');
            return menu.open();
        }
    }
    getMeeting(id = this.counMeetingId) {
        if (this.counMeetingId) {
            this.api.get(this.counMeetingsService.counMeetingsUrl + '/' + id + '/edit')
                .subscribe((res) => {
                this.counMeetingsService.counMeeting = res.data.model;
                this.model = res.data.model;
                if (!this.model.start_content) {
                    this.model.start_content = 'Se da inicio al consejo de administración a las ' + moment__WEBPACK_IMPORTED_MODULE_12__().format('HH:mm') + ' horas del día ' + moment__WEBPACK_IMPORTED_MODULE_12__().format('DD/MM/YYYY');
                    console.log(this.model);
                }
                if (!this.model.end_content) {
                    this.model.end_content = 'Se da fin al consejo de administración a las ' + moment__WEBPACK_IMPORTED_MODULE_12__().format('HH:mm') + ' horas del día ' + moment__WEBPACK_IMPORTED_MODULE_12__().format('DD/MM/YYYY');
                    console.log(this.model);
                }
                this.counMeetingsService.counMeetingLists = res.lists;
            }, (err) => {
                console.error(err);
            });
        }
        return;
    }
    setCitations(user) {
        console.log(user);
        // this.citations.push(user.value);
        if (this.counMeetingId) {
            this.toast.present('No se pueden agregar mas citaciones', 'toast-info');
            this.userSelect.clear();
            return;
        }
        for (let i = 0; i < this.model.coun_meeting_citations.length; i++) {
            if (this.model.coun_meeting_citations[i].user_id == user.value.id) {
                this.toast.present('El usuario ya esta en la lista de citaciones', 'toast-error');
                this.userSelect.clear();
                return;
            }
        }
        this.model.coun_meeting_citations.push({
            user_id: user.value.id,
            name: 'Citación para ' + user.value.name
        });
        this.userSelect.clear();
    }
    removeCitations(user) {
        console.log(user);
        for (let i = 0; i < this.model.coun_meeting_citations.length; i++) {
            if (this.model.coun_meeting_citations[i].id && this.model.coun_meeting_citations[i].user_id == user.user_id) {
                this.api.delete('coun-meeting-citations/' + this.model.coun_meeting_citations[i].id, {})
                    .subscribe((res) => {
                    console.log(res);
                });
            }
            if (this.model.coun_meeting_citations[i].user_id == user.user_id) {
                this.model.coun_meeting_citations.splice(i, 1);
            }
        }
    }
    markAssistance(citation) {
        citation.attended = citation.attended ? false : true;
        this.api.put('coun-meeting-citations/' + citation.id, { model: citation })
            .subscribe((res) => {
            console.log(res);
            this.toast.present('Asistencia actualizada', 'toast-info');
            this.getMeeting(this.counMeetingId);
        });
    }
    startCouncil() {
        this.alert.confirmation('Iniciar junta?', '', 'Si', 'No')
            .then(res => {
            if (res) {
                console.log('Iniciar');
                this.councilStarted = true;
                this.type = 'act';
                this.model.status = 'in_progress';
                this.saveCounMeeting('La Junta esta en progreso!');
                return;
            }
            else {
                console.log('No iniciar');
                return;
            }
        });
    }
    inProgress() {
        this.model.status = 'in_progress';
        this.saveCounMeeting('La Junta esta en progreso!');
    }
    finalizeCouncil() {
        this.alert.confirmation('Finalizar la junta?', 'Finalizar', 'Si', 'No')
            .then(res => {
            if (res) {
                // this.model.status = 'finalized';
                console.log(this.model.status);
                this.api.post('coun-meetings/finalize', { model: this.model })
                    .subscribe((res) => {
                    console.log(res);
                    this.toast.present('Junta finalizada!', 'toast-info');
                    // this.saveCounMeeting();
                    this.counMeetingsService.getCounMeetings();
                    this.router.navigateByUrl('/coun-meetings/list/custom');
                });
            }
            else {
                return;
            }
        });
    }
    removeFocus(event) {
    }
    getQuorum() {
        let quorum = true;
        for (let i = 0; i < this.model.coun_meeting_citations.length; i++) {
            if (!this.model.coun_meeting_citations[i].attended) {
                quorum = false;
            }
        }
        return quorum;
    }
    saveCounMeeting(alert = null, sendPreview = false) {
        if (!this.model.coun_meeting_agendas.length) {
            this.toast.present('Ingrese ordenes del dia en la pestaña agenda', 'toast-error');
            return;
        }
        if (this.counMeetingId) {
            this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].serverUrl + '/api/coun-meeting-custom/' + this.counMeetingId, this.model)
                .subscribe((res) => {
                console.log(res);
                this.getMeeting(res.data.id);
                if (alert) {
                    this.toast.present(alert, 'toast-primary');
                }
                if (sendPreview) {
                    this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].serverUrl + '/api/coun-meetings/' + this.counMeetingId + '/send-preview')
                        .subscribe((res) => {
                        console.log(res.data);
                    });
                }
            });
        }
        else {
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].serverUrl + '/api/coun-meeting-custom', this.model)
                .subscribe((res) => {
                console.log(res);
                this.getMeeting(res.data.id);
                this.counMeetingsService.getCounMeetings();
                this.router.navigateByUrl('/coun-meetings/list/custom');
            });
        }
    }
    segmentChanged(event) {
        console.log('Segment changed', event);
        this.type = event.target.value;
    }
    onRenderItems(event) {
        console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
        let draggedItem = this.model.coun_meeting_agendas.splice(event.detail.from, 1)[0];
        this.model.coun_meeting_agendas.splice(event.detail.to, 0, draggedItem);
        for (let i = 0; i < this.model.coun_meeting_agendas.length; i++) {
            this.model.coun_meeting_agendas[i].order = i;
        }
        event.detail.complete();
        if (this.model.id) {
            this.saveCounMeeting();
        }
    }
    addAgendaItem(event) {
        for (let i = 0; i < this.model.coun_meeting_agendas.length; i++) {
            if (event.target.value == this.model.coun_meeting_agendas[i].name) {
                this.toast.present('Ya existe un orden del día con el mismo nombre!', 'toast-error');
                return;
            }
        }
        this.model.coun_meeting_agendas.push({
            name: event.target.value,
            order: this.model.coun_meeting_agendas.length
        });
        const element = document.getElementById('order-day-field');
        element.setAttribute('value', '');
    }
    removeAgendaItem(agenda) {
        for (let i = 0; i < this.model.coun_meeting_agendas.length; i++) {
            if (this.model.coun_meeting_agendas[i].id && this.model.coun_meeting_agendas[i].name == agenda.name) {
                this.api.delete('coun-meeting-agendas/' + this.model.coun_meeting_agendas[i].id, {})
                    .subscribe((res) => {
                    console.log(res);
                });
            }
            if (agenda.name == this.model.coun_meeting_agendas[i].name) {
                this.model.coun_meeting_agendas.splice(i, 1);
            }
        }
    }
    getAdditionalCitations() {
        const additionalCitations = [];
        for (let i = 0; i < this.model.coun_meeting_citations.length; i++) {
            if (!this.model.coun_meeting_citations[i].coun_member_id) {
                additionalCitations.push(this.model.coun_meeting_citations[i]);
            }
        }
        return additionalCitations;
    }
    onFileSelect(input) {
        function formatBytes(bytes) {
            const UNITS = ['Bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            const factor = 1024;
            let index = 0;
            while (bytes >= factor) {
                bytes /= factor;
                index++;
            }
            return `${parseFloat(bytes.toFixed(2))} ${UNITS[index]}`;
        }
        this.fileToUpload = input.files[0];
        this.uploadFile()
            .then((res) => {
            this.model.files.push(res.data);
            console.log(this.model.files);
        });
    }
    uploadFile() {
        const endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].serverUrl + '/api/drive/upload';
        const formData = new FormData();
        formData.append('file', this.fileToUpload, this.fileToUpload.name);
        formData.append('fileable_id', this.model.id);
        formData.append('fileable_type', 'CounMeeting');
        return this.http.post(endpoint, formData, {}).toPromise();
    }
    removeFile(file) {
        this.alert.confirmation('Eliminar archivo?')
            .then(res => {
            if (res) {
                for (let i = 0; i < this.model.files.length; i++) {
                    if (file.id == this.model.files[i].id) {
                        const endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].serverUrl + '/api/drive/delete';
                        this.http.delete(endpoint + '/' + file.id)
                            .subscribe((res) => {
                            this.toast.present(res.message, null);
                            this.model.files.splice(i, 1);
                        });
                        return;
                    }
                }
            }
            else {
                return;
            }
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
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _shared_pipes_get_parameter_pipe__WEBPACK_IMPORTED_MODULE_13__["GetParameterPipe"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_14__["SplitPanelService"] }
];
CounMeetingsCreateCustomComponent.propDecorators = {
    counMeetingsForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['counMeetingsForm',] }],
    userSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['userSelect',] }]
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
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let CounMeetingsCreateComponent = class CounMeetingsCreateComponent {
    constructor(counMeetingsService, route, platform, splitPanel) {
        this.counMeetingsService = counMeetingsService;
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
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
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let CounMeetingsEditComponent = class CounMeetingsEditComponent {
    constructor(counMeetingsService, route, platform, splitPanel) {
        this.counMeetingsService = counMeetingsService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.counMeetingsService.editCounMeeting(this.id);
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
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
            'status': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('ESTADO') + ' es obligatorio.' },
            ],
            'start_content': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('INICIO') + ' es obligatorio.' },
            ],
            'end_content': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('FINAL') + ' es obligatorio.' },
            ],
            'consecutive': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CONSECUTIVO') + ' es obligatorio.' },
            ],
            'type': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('TIPO') + ' es obligatorio.' },
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

/***/ "./src/app/coun-meetings/coun-meetings-list-custom/coun-meetings-list-custom.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/coun-meetings/coun-meetings-list-custom/coun-meetings-list-custom.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW4tbWVldGluZ3MvY291bi1tZWV0aW5ncy1saXN0LWN1c3RvbS9jb3VuLW1lZXRpbmdzLWxpc3QtY3VzdG9tLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/coun-meetings/coun-meetings-list-custom/coun-meetings-list-custom.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/coun-meetings/coun-meetings-list-custom/coun-meetings-list-custom.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CounMeetingsListCustomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMeetingsListCustomComponent", function() { return CounMeetingsListCustomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _coun_meetings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../coun-meetings.service */ "./src/app/coun-meetings/coun-meetings.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");








let CounMeetingsListCustomComponent = class CounMeetingsListCustomComponent {
    constructor(counMeetingsService, api, loading, splitPanel) {
        this.counMeetingsService = counMeetingsService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"];
    }
    ngOnInit() {
        this.counMeetingsService.getCounMeetings();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
    openAct(url) {
        window.open(url, '_blank');
    }
};
CounMeetingsListCustomComponent.ctorParameters = () => [
    { type: _coun_meetings_service__WEBPACK_IMPORTED_MODULE_2__["CounMeetingsService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_7__["SplitPanelService"] }
];
CounMeetingsListCustomComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
CounMeetingsListCustomComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coun-meetings-list-custom',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coun-meetings-list-custom.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-meetings/coun-meetings-list-custom/coun-meetings-list-custom.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coun-meetings-list-custom.component.scss */ "./src/app/coun-meetings/coun-meetings-list-custom/coun-meetings-list-custom.component.scss")).default]
    })
], CounMeetingsListCustomComponent);



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
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");







let CounMeetingsListComponent = class CounMeetingsListComponent {
    constructor(counMeetingsService, api, loading, splitPanel) {
        this.counMeetingsService = counMeetingsService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
        this.counMeetingsService.getCounMeetings();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
CounMeetingsListComponent.ctorParameters = () => [
    { type: _coun_meetings_service__WEBPACK_IMPORTED_MODULE_2__["CounMeetingsService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] }
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
/* harmony import */ var _coun_meetings_list_custom_coun_meetings_list_custom_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coun-meetings-list-custom/coun-meetings-list-custom.component */ "./src/app/coun-meetings/coun-meetings-list-custom/coun-meetings-list-custom.component.ts");









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
        path: 'list/custom',
        component: _coun_meetings_list_custom_coun_meetings_list_custom_component__WEBPACK_IMPORTED_MODULE_8__["CounMeetingsListCustomComponent"]
    },
    {
        path: 'create',
        component: _coun_meetings_create_coun_meetings_create_component__WEBPACK_IMPORTED_MODULE_5__["CounMeetingsCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _coun_meetings_edit_coun_meetings_edit_component__WEBPACK_IMPORTED_MODULE_4__["CounMeetingsEditComponent"]
    },
    {
        path: 'create/custom',
        component: _coun_meetings_create_custom_coun_meetings_create_custom_component__WEBPACK_IMPORTED_MODULE_7__["CounMeetingsCreateCustomComponent"]
    },
    {
        path: 'create/custom/:id',
        component: _coun_meetings_create_custom_coun_meetings_create_custom_component__WEBPACK_IMPORTED_MODULE_7__["CounMeetingsCreateCustomComponent"]
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
/* harmony import */ var _coun_meetings_list_custom_coun_meetings_list_custom_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./coun-meetings-list-custom/coun-meetings-list-custom.component */ "./src/app/coun-meetings/coun-meetings-list-custom/coun-meetings-list-custom.component.ts");















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
            _coun_meetings_list_custom_coun_meetings_list_custom_component__WEBPACK_IMPORTED_MODULE_14__["CounMeetingsListCustomComponent"],
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
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");



let CounMeetingsPage = class CounMeetingsPage {
    constructor(splitPanel) {
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
};
CounMeetingsPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] }
];
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