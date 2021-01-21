(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["companies-companies-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-create/companies-create.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-create/companies-create.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/companies'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"companiesService.storeCompany()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!companiesService.companiesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'EMPRESAS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-companies-form #companyForm [model]=\"companiesService.company\"></app-companies-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-duplicate/companies-duplicate.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-duplicate/companies-duplicate.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  Companies duplicate works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-edit/companies-edit.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-edit/companies-edit.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/companies'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"companiesService.updateCompany()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!companiesService.companiesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'EMPRESAS' | titlecase}}: {{ companiesService.company?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-companies-form #companyForm [model]=\"companiesService.company\"></app-companies-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-form/companies-form.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-form/companies-form.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #companiesForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- comp_phone_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'TELÉFONOS DE EMPRESAS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"comp_phone_ids\"\n                          id=\"comp_phone_ids-field\"\n                          [(ngModel)]=\"model.comp_phones\"\n                          [items]=\"companiesService.companyLists.CompPhone\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('TELÉFONOS DE EMPRESAS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('TELÉFONOS DE EMPRESAS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setCompPhoneIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.comp_phone_ids\">\n            <div class=\"error-message\" *ngIf=\"companiesForm.form.controls['comp_phone_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end comp_phone_ids -->\n\n\n    <!-- comp_address_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'EMPRESAS DIRECCIONES' | titlecase }}</ion-label>\n        <ionic-selectable name=\"comp_address_ids\"\n                          id=\"comp_address_ids-field\"\n                          [(ngModel)]=\"model.comp_addresses\"\n                          [items]=\"companiesService.companyLists.CompAddress\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('EMPRESAS DIRECCIONES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('EMPRESAS DIRECCIONES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setCompAddressIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.comp_address_ids\">\n            <div class=\"error-message\" *ngIf=\"companiesForm.form.controls['comp_address_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end comp_address_ids -->\n\n\n    <!-- comp_contact_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'EMPRESAS CONTACTOS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"comp_contact_ids\"\n                          id=\"comp_contact_ids-field\"\n                          [(ngModel)]=\"model.comp_contacts\"\n                          [items]=\"companiesService.companyLists.CompContact\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('EMPRESAS CONTACTOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('EMPRESAS CONTACTOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setCompContactIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.comp_contact_ids\">\n            <div class=\"error-message\" *ngIf=\"companiesForm.form.controls['comp_contact_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end comp_contact_ids -->\n\n\n    <!-- comp_responsability_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase }}</ion-label>\n        <ionic-selectable name=\"comp_responsability_ids\"\n                          id=\"comp_responsability_ids-field\"\n                          [(ngModel)]=\"model.comp_responsabilities\"\n                          [items]=\"companiesService.companyLists.CompResponsability\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('EMPRESAS RESPONSABILIDADES LEGALES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('EMPRESAS RESPONSABILIDADES LEGALES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setCompResponsabilityIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.comp_responsability_ids\">\n            <div class=\"error-message\" *ngIf=\"companiesForm.form.controls['comp_responsability_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end comp_responsability_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"companiesForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- code -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'CÓDIGO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.code\"\n                            type=\"text\"\n                            name=\"code\"\n                            id=\"code-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.code\">\n                    <div class=\"error-message\" *ngIf=\"companiesForm.form.controls['code']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end code -->\n\n\n            <!-- nit -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NIT' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.nit\"\n                            type=\"text\"\n                            name=\"nit\"\n                            id=\"nit-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.nit\">\n                    <div class=\"error-message\" *ngIf=\"companiesForm.form.controls['nit']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end nit -->\n\n\n            <!-- manager_name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE REPRESENTANTE LEGAL' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.manager_name\"\n                            type=\"text\"\n                            name=\"manager_name\"\n                            id=\"manager_name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.manager_name\">\n                    <div class=\"error-message\" *ngIf=\"companiesForm.form.controls['manager_name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end manager_name -->\n\n\n            <!-- manager_document -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'CÉDULA REPRESENTANTE LEGAL' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.manager_document\"\n                            type=\"text\"\n                            name=\"manager_document\"\n                            id=\"manager_document-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.manager_document\">\n                    <div class=\"error-message\" *ngIf=\"companiesForm.form.controls['manager_document']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end manager_document -->\n\n\n            <!-- logo -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'LOGOTIPO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.logo\"\n                            type=\"text\"\n                            name=\"logo\"\n                            id=\"logo-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.logo\">\n                    <div class=\"error-message\" *ngIf=\"companiesForm.form.controls['logo']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end logo -->\n\n\n            <!-- main -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'PRINCIPAL' | titlecase }}</ion-label>\n                <ion-toggle name=\"main\"\n                            id=\"main-field\"\n                            slot=\"end\"\n                            [(ngModel)]=\"model.main\"></ion-toggle>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.main\">\n                    <div class=\"error-message\" *ngIf=\"companiesForm.form.controls['main']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end main -->\n\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-list/companies-list.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-list/companies-list.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'EMPRESAS' | titlecase}}\"\n                 primaryLink=\"companies/create\"\n                 primaryText=\"Crear {{'EMPRESAS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('EMPRESAS' | lowercase )\"\n                       (ionCancel)=\"this.companiesService.searchValue = ''; companiesService.getCompanies()\"\n                       (keyup.enter)=\"companiesService.getCompanies()\"\n                       [(ngModel)]=\"companiesService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && companiesService.companies?.length\">\n        <ion-card *ngFor=\"let company of companiesService.companies; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ company?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CÓDIGO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ company?.code }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NIT' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ company?.nit }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE REPRESENTANTE LEGAL' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ company?.manager_name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CÉDULA REPRESENTANTE LEGAL' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ company?.manager_document }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'LOGOTIPO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ company?.logo }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'PRINCIPAL' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ company?.main  ? 'Si' : 'No' }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'TELÉFONOS DE EMPRESAS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"company?.comp_phones?.length\">\n                                <ng-container *ngFor=\"let compPhone of company?.comp_phones; let last = last\">\n                                    <a routerLink=\"/comp-phones/{{ compPhone?.id }}/edit\">{{ compPhone?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'EMPRESAS DIRECCIONES' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"company?.comp_addresses?.length\">\n                                <ng-container *ngFor=\"let compAddress of company?.comp_addresses; let last = last\">\n                                    <a routerLink=\"/comp-addresses/{{ compAddress?.id }}/edit\">{{ compAddress?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'EMPRESAS CONTACTOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"company?.comp_contacts?.length\">\n                                <ng-container *ngFor=\"let compContact of company?.comp_contacts; let last = last\">\n                                    <a routerLink=\"/comp-contacts/{{ compContact?.id }}/edit\">{{ compContact?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"company?.comp_responsabilities?.length\">\n                                <ng-container *ngFor=\"let compResponsability of company?.comp_responsabilities; let last = last\">\n                                    <a routerLink=\"/comp-responsabilities/{{ compResponsability?.id }}/edit\">{{ compResponsability?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/companies/' + company?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"companiesService.deleteCompany(company?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !companiesService.companies?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'EMPRESAS' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/companies/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'EMPRESAS' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"companiesService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"companiesService.getCompanies(companiesService.meta.current_page - 1)\"\n                        [disabled]=\"companiesService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{companiesService.meta.current_page}}\n                /{{companiesService.meta.last_page}} {{companiesService.meta.from}}-{{companiesService.meta.to}}\n                /{{companiesService.meta.total}} </ion-button>\n            <ion-button (click)=\"companiesService.getCompanies(companiesService.meta.current_page + 1)\"\n                        [disabled]=\"companiesService.meta.current_page == companiesService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"EMPRESAS\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/companies/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'EMPRESAS'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/companies/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'EMPRESAS' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/companies/companies-create/companies-create.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/companies/companies-create/companies-create.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbmllcy9jb21wYW5pZXMtY3JlYXRlL2NvbXBhbmllcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/companies/companies-create/companies-create.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/companies/companies-create/companies-create.component.ts ***!
  \**************************************************************************/
/*! exports provided: CompaniesCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesCreateComponent", function() { return CompaniesCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../companies.service */ "./src/app/companies/companies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let CompaniesCreateComponent = class CompaniesCreateComponent {
    constructor(companiesService, route, platform, splitPanel) {
        this.companiesService = companiesService;
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
        this.companyForm.companiesForm.valueChanges.subscribe((data) => {
            this.companiesService.companiesFormValid.next(this.companyForm.companiesForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.companiesService.createCompany();
        this.companiesService.company = {};
    }
};
CompaniesCreateComponent.ctorParameters = () => [
    { type: _companies_service__WEBPACK_IMPORTED_MODULE_2__["CompaniesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
CompaniesCreateComponent.propDecorators = {
    companyForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['companyForm',] }]
};
CompaniesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companies-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./companies-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-create/companies-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./companies-create.component.scss */ "./src/app/companies/companies-create/companies-create.component.scss")).default]
    })
], CompaniesCreateComponent);



/***/ }),

/***/ "./src/app/companies/companies-duplicate/companies-duplicate.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/companies/companies-duplicate/companies-duplicate.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbmllcy9jb21wYW5pZXMtZHVwbGljYXRlL2NvbXBhbmllcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/companies/companies-duplicate/companies-duplicate.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/companies/companies-duplicate/companies-duplicate.component.ts ***!
  \********************************************************************************/
/*! exports provided: CompaniesDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesDuplicateComponent", function() { return CompaniesDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CompaniesDuplicateComponent = class CompaniesDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
CompaniesDuplicateComponent.ctorParameters = () => [];
CompaniesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companies-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./companies-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-duplicate/companies-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./companies-duplicate.component.scss */ "./src/app/companies/companies-duplicate/companies-duplicate.component.scss")).default]
    })
], CompaniesDuplicateComponent);



/***/ }),

/***/ "./src/app/companies/companies-edit/companies-edit.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/companies/companies-edit/companies-edit.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbmllcy9jb21wYW5pZXMtZWRpdC9jb21wYW5pZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/companies/companies-edit/companies-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/companies/companies-edit/companies-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: CompaniesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesEditComponent", function() { return CompaniesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../companies.service */ "./src/app/companies/companies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let CompaniesEditComponent = class CompaniesEditComponent {
    constructor(companiesService, route, platform, splitPanel) {
        this.companiesService = companiesService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.companiesService.editCompany(this.id);
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    ngAfterViewInit() {
        this.companyForm.companiesForm.valueChanges.subscribe((data) => {
            this.companiesService.companiesFormValid.next(this.companyForm.companiesForm.valid);
        });
    }
};
CompaniesEditComponent.ctorParameters = () => [
    { type: _companies_service__WEBPACK_IMPORTED_MODULE_2__["CompaniesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
CompaniesEditComponent.propDecorators = {
    companyForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['companyForm',] }]
};
CompaniesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companies-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./companies-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-edit/companies-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./companies-edit.component.scss */ "./src/app/companies/companies-edit/companies-edit.component.scss")).default]
    })
], CompaniesEditComponent);



/***/ }),

/***/ "./src/app/companies/companies-form/companies-form.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/companies/companies-form/companies-form.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbmllcy9jb21wYW5pZXMtZm9ybS9jb21wYW5pZXMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/companies/companies-form/companies-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/companies/companies-form/companies-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: CompaniesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesFormComponent", function() { return CompaniesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../companies.service */ "./src/app/companies/companies.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let CompaniesFormComponent = class CompaniesFormComponent {
    constructor(companiesService, toTitlecase) {
        this.companiesService = companiesService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'code': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.' },
            ],
            'nit': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NIT') + ' es obligatorio.' },
            ],
            'manager_name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE REPRESENTANTE LEGAL') + ' es obligatorio.' },
            ],
            'manager_document': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÉDULA REPRESENTANTE LEGAL') + ' es obligatorio.' },
            ],
            'logo': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('LOGOTIPO') + ' es obligatorio.' },
            ],
            'main': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('PRINCIPAL') + ' es obligatorio.' },
            ],
            'comp_phone_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('TELÉFONOS DE EMPRESAS') + ' es obligatorio.' },
            ],
            'comp_address_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('EMPRESAS DIRECCIONES') + ' es obligatorio.' },
            ],
            'comp_contact_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('EMPRESAS CONTACTOS') + ' es obligatorio.' },
            ],
            'comp_responsability_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('EMPRESAS RESPONSABILIDADES LEGALES') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setCompPhoneIds
    setCompPhoneIds(event) {
        let compPhoneIds = null;
        if (event.value.length) {
            compPhoneIds = [];
            for (let i = 0; i < event.value.length; i++) {
                compPhoneIds.push(event.value[i].id);
            }
        }
        this.companiesService.company.comp_phone_ids = compPhoneIds;
    }
    // end setCompPhoneIds
    // set setCompAddressIds
    setCompAddressIds(event) {
        let compAddressIds = null;
        if (event.value.length) {
            compAddressIds = [];
            for (let i = 0; i < event.value.length; i++) {
                compAddressIds.push(event.value[i].id);
            }
        }
        this.companiesService.company.comp_address_ids = compAddressIds;
    }
    // end setCompAddressIds
    // set setCompContactIds
    setCompContactIds(event) {
        let compContactIds = null;
        if (event.value.length) {
            compContactIds = [];
            for (let i = 0; i < event.value.length; i++) {
                compContactIds.push(event.value[i].id);
            }
        }
        this.companiesService.company.comp_contact_ids = compContactIds;
    }
    // end setCompContactIds
    // set setCompResponsabilityIds
    setCompResponsabilityIds(event) {
        let compResponsabilityIds = null;
        if (event.value.length) {
            compResponsabilityIds = [];
            for (let i = 0; i < event.value.length; i++) {
                compResponsabilityIds.push(event.value[i].id);
            }
        }
        this.companiesService.company.comp_responsability_ids = compResponsabilityIds;
    }
};
CompaniesFormComponent.ctorParameters = () => [
    { type: _companies_service__WEBPACK_IMPORTED_MODULE_2__["CompaniesService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
CompaniesFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    companiesForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['companiesForm',] }]
};
CompaniesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companies-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./companies-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-form/companies-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./companies-form.component.scss */ "./src/app/companies/companies-form/companies-form.component.scss")).default]
    })
], CompaniesFormComponent);



/***/ }),

/***/ "./src/app/companies/companies-list/companies-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/companies/companies-list/companies-list.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbmllcy9jb21wYW5pZXMtbGlzdC9jb21wYW5pZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/companies/companies-list/companies-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/companies/companies-list/companies-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: CompaniesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesListComponent", function() { return CompaniesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../companies.service */ "./src/app/companies/companies.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");







let CompaniesListComponent = class CompaniesListComponent {
    constructor(companiesService, api, loading, splitPanel) {
        this.companiesService = companiesService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
        this.companiesService.getCompanies();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
CompaniesListComponent.ctorParameters = () => [
    { type: _companies_service__WEBPACK_IMPORTED_MODULE_2__["CompaniesService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] }
];
CompaniesListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
CompaniesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companies-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./companies-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-list/companies-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./companies-list.component.scss */ "./src/app/companies/companies-list/companies-list.component.scss")).default]
    })
], CompaniesListComponent);



/***/ }),

/***/ "./src/app/companies/companies-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/companies/companies-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CompaniesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesPageRoutingModule", function() { return CompaniesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _companies_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./companies.page */ "./src/app/companies/companies.page.ts");
/* harmony import */ var _companies_edit_companies_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./companies-edit/companies-edit.component */ "./src/app/companies/companies-edit/companies-edit.component.ts");
/* harmony import */ var _companies_create_companies_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./companies-create/companies-create.component */ "./src/app/companies/companies-create/companies-create.component.ts");
/* harmony import */ var _companies_list_companies_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./companies-list/companies-list.component */ "./src/app/companies/companies-list/companies-list.component.ts");







const routes = [
    {
        path: '',
        component: _companies_page__WEBPACK_IMPORTED_MODULE_3__["CompaniesPage"]
    },
    {
        path: 'list',
        component: _companies_list_companies_list_component__WEBPACK_IMPORTED_MODULE_6__["CompaniesListComponent"]
    },
    {
        path: 'create',
        component: _companies_create_companies_create_component__WEBPACK_IMPORTED_MODULE_5__["CompaniesCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _companies_edit_companies_edit_component__WEBPACK_IMPORTED_MODULE_4__["CompaniesEditComponent"]
    },
];
let CompaniesPageRoutingModule = class CompaniesPageRoutingModule {
};
CompaniesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], CompaniesPageRoutingModule);



/***/ }),

/***/ "./src/app/companies/companies.module.ts":
/*!***********************************************!*\
  !*** ./src/app/companies/companies.module.ts ***!
  \***********************************************/
/*! exports provided: CompaniesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesPageModule", function() { return CompaniesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _companies_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./companies-routing.module */ "./src/app/companies/companies-routing.module.ts");
/* harmony import */ var _companies_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./companies.page */ "./src/app/companies/companies.page.ts");
/* harmony import */ var _companies_list_companies_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./companies-list/companies-list.component */ "./src/app/companies/companies-list/companies-list.component.ts");
/* harmony import */ var _companies_create_companies_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./companies-create/companies-create.component */ "./src/app/companies/companies-create/companies-create.component.ts");
/* harmony import */ var _companies_duplicate_companies_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./companies-duplicate/companies-duplicate.component */ "./src/app/companies/companies-duplicate/companies-duplicate.component.ts");
/* harmony import */ var _companies_edit_companies_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./companies-edit/companies-edit.component */ "./src/app/companies/companies-edit/companies-edit.component.ts");
/* harmony import */ var _companies_form_companies_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./companies-form/companies-form.component */ "./src/app/companies/companies-form/companies-form.component.ts");













let CompaniesPageModule = class CompaniesPageModule {
};
CompaniesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _companies_routing_module__WEBPACK_IMPORTED_MODULE_6__["CompaniesPageRoutingModule"]
        ],
        declarations: [
            _companies_page__WEBPACK_IMPORTED_MODULE_7__["CompaniesPage"],
            _companies_list_companies_list_component__WEBPACK_IMPORTED_MODULE_8__["CompaniesListComponent"],
            _companies_create_companies_create_component__WEBPACK_IMPORTED_MODULE_9__["CompaniesCreateComponent"],
            _companies_duplicate_companies_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["CompaniesDuplicateComponent"],
            _companies_edit_companies_edit_component__WEBPACK_IMPORTED_MODULE_11__["CompaniesEditComponent"],
            _companies_form_companies_form_component__WEBPACK_IMPORTED_MODULE_12__["CompaniesFormComponent"],
        ]
    })
], CompaniesPageModule);



/***/ }),

/***/ "./src/app/companies/companies.page.scss":
/*!***********************************************!*\
  !*** ./src/app/companies/companies.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbmllcy9jb21wYW5pZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/companies/companies.page.ts":
/*!*********************************************!*\
  !*** ./src/app/companies/companies.page.ts ***!
  \*********************************************/
/*! exports provided: CompaniesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesPage", function() { return CompaniesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");



let CompaniesPage = class CompaniesPage {
    constructor(splitPanel) {
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
};
CompaniesPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] }
];
CompaniesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companies',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./companies.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./companies.page.scss */ "./src/app/companies/companies.page.scss")).default]
    })
], CompaniesPage);



/***/ }),

/***/ "./src/app/companies/companies.service.ts":
/*!************************************************!*\
  !*** ./src/app/companies/companies.service.ts ***!
  \************************************************/
/*! exports provided: CompaniesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesService", function() { return CompaniesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let CompaniesService = class CompaniesService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.companiesUrl = 'companies';
        this.companiesFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.companies = [];
        this.company = {};
        this.companyLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    getCompanies(page = this.page, perPage = this.perPage) {
        this.api.get(this.companiesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.companies = res.data;
            this.companyLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editCompany(id) {
        this.api.get(this.companiesUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.company = res.data.model;
            this.companyLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateCompany() {
        this.api.put(this.companiesUrl + '/' + this.company.id, {
            model: this.company,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getCompanies(1);
        });
    }
    createCompany() {
        this.api.get(this.companiesUrl + '/create')
            .subscribe((res) => {
            this.company = {};
            this.companyLists = res.lists;
        });
    }
    storeCompany() {
        this.api.post(this.companiesUrl, {
            model: this.company,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getCompanies(1);
        });
    }
    deleteCompany(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.companiesUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getCompanies(1);
                });
            }
            else {
                return;
            }
        });
    }
};
CompaniesService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
CompaniesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CompaniesService);



/***/ })

}]);
//# sourceMappingURL=companies-companies-module-es2015.js.map