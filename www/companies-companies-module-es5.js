(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["companies-companies-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-create/companies-create.component.html":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-create/companies-create.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCompaniesCompaniesCreateCompaniesCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/companies'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"companiesService.storeCompany()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!companiesService.companiesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'EMPRESAS' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-companies-form #companyForm [model]=\"companiesService.company\"></app-companies-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-duplicate/companies-duplicate.component.html":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-duplicate/companies-duplicate.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCompaniesCompaniesDuplicateCompaniesDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\r\n  Companies duplicate works!\r\n</p>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-edit/companies-edit.component.html":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-edit/companies-edit.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCompaniesCompaniesEditCompaniesEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/companies'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"companiesService.updateCompany()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!companiesService.companiesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'EMPRESAS' | titlecase}}: {{ companiesService.company?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-companies-form #companyForm [model]=\"companiesService.company\"></app-companies-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-form/companies-form.component.html":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-form/companies-form.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCompaniesCompaniesFormCompaniesFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #companiesForm=\"ngForm\" novalidate autocomplete=\"off\">\r\n\r\n\r\n    <!-- comp_phone_ids -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'TELÉFONOS DE EMPRESAS' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"comp_phone_ids\"\r\n                          id=\"comp_phone_ids-field\"\r\n                          [(ngModel)]=\"model.comp_phones\"\r\n                          [items]=\"companiesService.companyLists.CompPhone\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('TELÉFONOS DE EMPRESAS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('TELÉFONOS DE EMPRESAS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setCompPhoneIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.comp_phone_ids\">\r\n            <div class=\"error-message\" *ngIf=\"companiesForm.form.controls['comp_phone_ids']?.hasError(validation.type)\">\r\n            {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end comp_phone_ids -->\r\n\r\n\r\n    <!-- comp_address_ids -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'EMPRESAS DIRECCIONES' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"comp_address_ids\"\r\n                          id=\"comp_address_ids-field\"\r\n                          [(ngModel)]=\"model.comp_addresses\"\r\n                          [items]=\"companiesService.companyLists.CompAddress\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('EMPRESAS DIRECCIONES' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('EMPRESAS DIRECCIONES' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setCompAddressIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.comp_address_ids\">\r\n            <div class=\"error-message\" *ngIf=\"companiesForm.form.controls['comp_address_ids']?.hasError(validation.type)\">\r\n            {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end comp_address_ids -->\r\n\r\n\r\n    <!-- comp_contact_ids -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'EMPRESAS CONTACTOS' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"comp_contact_ids\"\r\n                          id=\"comp_contact_ids-field\"\r\n                          [(ngModel)]=\"model.comp_contacts\"\r\n                          [items]=\"companiesService.companyLists.CompContact\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('EMPRESAS CONTACTOS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('EMPRESAS CONTACTOS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setCompContactIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.comp_contact_ids\">\r\n            <div class=\"error-message\" *ngIf=\"companiesForm.form.controls['comp_contact_ids']?.hasError(validation.type)\">\r\n            {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end comp_contact_ids -->\r\n\r\n\r\n    <!-- comp_responsability_ids -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"comp_responsability_ids\"\r\n                          id=\"comp_responsability_ids-field\"\r\n                          [(ngModel)]=\"model.comp_responsabilities\"\r\n                          [items]=\"companiesService.companyLists.CompResponsability\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('EMPRESAS RESPONSABILIDADES LEGALES' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('EMPRESAS RESPONSABILIDADES LEGALES' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setCompResponsabilityIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.comp_responsability_ids\">\r\n            <div class=\"error-message\" *ngIf=\"companiesForm.form.controls['comp_responsability_ids']?.hasError(validation.type)\">\r\n            {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end comp_responsability_ids -->\r\n\r\n\r\n            <!-- name -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.name\"\r\n                            type=\"text\"\r\n                            name=\"name\"\r\n                            id=\"name-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n                    <div class=\"error-message\" *ngIf=\"companiesForm.form.controls['name']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end name -->\r\n\r\n\r\n            <!-- code -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'CÓDIGO' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.code\"\r\n                            type=\"text\"\r\n                            name=\"code\"\r\n                            id=\"code-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.code\">\r\n                    <div class=\"error-message\" *ngIf=\"companiesForm.form.controls['code']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end code -->\r\n\r\n\r\n            <!-- nit -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'NIT' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.nit\"\r\n                            type=\"text\"\r\n                            name=\"nit\"\r\n                            id=\"nit-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.nit\">\r\n                    <div class=\"error-message\" *ngIf=\"companiesForm.form.controls['nit']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end nit -->\r\n\r\n\r\n            <!-- manager_name -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'NOMBRE REPRESENTANTE LEGAL' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.manager_name\"\r\n                            type=\"text\"\r\n                            name=\"manager_name\"\r\n                            id=\"manager_name-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.manager_name\">\r\n                    <div class=\"error-message\" *ngIf=\"companiesForm.form.controls['manager_name']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end manager_name -->\r\n\r\n\r\n            <!-- manager_document -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'CÉDULA REPRESENTANTE LEGAL' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.manager_document\"\r\n                            type=\"text\"\r\n                            name=\"manager_document\"\r\n                            id=\"manager_document-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.manager_document\">\r\n                    <div class=\"error-message\" *ngIf=\"companiesForm.form.controls['manager_document']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end manager_document -->\r\n\r\n\r\n            <!-- logo -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'LOGOTIPO' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.logo\"\r\n                            type=\"text\"\r\n                            name=\"logo\"\r\n                            id=\"logo-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.logo\">\r\n                    <div class=\"error-message\" *ngIf=\"companiesForm.form.controls['logo']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end logo -->\r\n\r\n\r\n            <!-- main -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'PRINCIPAL' | titlecase }}</ion-label>\r\n                <ion-toggle name=\"main\"\r\n                            id=\"main-field\"\r\n                            slot=\"end\"\r\n                            [(ngModel)]=\"model.main\"></ion-toggle>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.main\">\r\n                    <div class=\"error-message\" *ngIf=\"companiesForm.form.controls['main']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end main -->\r\n\r\n\r\n</form>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-list/companies-list.component.html":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-list/companies-list.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCompaniesCompaniesListCompaniesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'EMPRESAS' | titlecase}}\"\r\n                 primaryLink=\"companies/create\"\r\n                 primaryText=\"Crear {{'EMPRESAS' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-searchbar showCancelButton=\"focus\"\r\n                       [cancelButtonText]=\"'Cancelar'\"\r\n                       [placeholder]=\"'Buscar ' + ('EMPRESAS' | lowercase )\"\r\n                       (ionCancel)=\"this.companiesService.searchValue = ''; companiesService.getCompanies()\"\r\n                       (keyup.enter)=\"companiesService.getCompanies()\"\r\n                       [(ngModel)]=\"companiesService.searchValue\"></ion-searchbar>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && companiesService.companies?.length\">\r\n        <ion-card *ngFor=\"let company of companiesService.companies; let index = index\">\r\n            <ion-list>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ company?.name }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'CÓDIGO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ company?.code }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NIT' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ company?.nit }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE REPRESENTANTE LEGAL' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ company?.manager_name }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'CÉDULA REPRESENTANTE LEGAL' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ company?.manager_document }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'LOGOTIPO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ company?.logo }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'PRINCIPAL' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ company?.main  ? 'Si' : 'No' }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'TELÉFONOS DE EMPRESAS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">\r\n                            <ng-container *ngIf=\"company?.comp_phones?.length\">\r\n                                <ng-container *ngFor=\"let compPhone of company?.comp_phones; let last = last\">\r\n                                    <a routerLink=\"/comp-phones/{{ compPhone?.id }}/edit\">{{ compPhone?.name }}</a><span *ngIf=\"!last\">, </span>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'EMPRESAS DIRECCIONES' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">\r\n                            <ng-container *ngIf=\"company?.comp_addresses?.length\">\r\n                                <ng-container *ngFor=\"let compAddress of company?.comp_addresses; let last = last\">\r\n                                    <a routerLink=\"/comp-addresses/{{ compAddress?.id }}/edit\">{{ compAddress?.name }}</a><span *ngIf=\"!last\">, </span>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'EMPRESAS CONTACTOS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">\r\n                            <ng-container *ngIf=\"company?.comp_contacts?.length\">\r\n                                <ng-container *ngFor=\"let compContact of company?.comp_contacts; let last = last\">\r\n                                    <a routerLink=\"/comp-contacts/{{ compContact?.id }}/edit\">{{ compContact?.name }}</a><span *ngIf=\"!last\">, </span>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">\r\n                            <ng-container *ngIf=\"company?.comp_responsabilities?.length\">\r\n                                <ng-container *ngFor=\"let compResponsability of company?.comp_responsabilities; let last = last\">\r\n                                    <a routerLink=\"/comp-responsabilities/{{ compResponsability?.id }}/edit\">{{ compResponsability?.name }}</a><span *ngIf=\"!last\">, </span>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n                    </ion-item>\r\n            </ion-list>\r\n            <ion-footer>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/companies/' + company?.id + '/edit'\">\r\n                            <ion-icon name=\"create-outline\"></ion-icon>\r\n                            <div>Editar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"companiesService.deleteCompany(company?.id)\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            <div>Eliminar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-footer>\r\n        </ion-card>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && !companiesService.companies?.length\">\r\n        <ion-item>\r\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label><h2>No se encontraron {{'EMPRESAS' | titlecase}}</h2></ion-label>\r\n            <ion-button [routerLink]=\"'/companies/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\r\n                Crear {{'EMPRESAS' | titlecase}}\r\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"companiesService.meta\">\r\n        <ion-col class=\"ion-text-center\" size=\"12\">\r\n            <ion-button (click)=\"companiesService.getCompanies(companiesService.meta.current_page - 1)\"\r\n                        [disabled]=\"companiesService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{companiesService.meta.current_page}}\r\n                /{{companiesService.meta.last_page}} {{companiesService.meta.from}}-{{companiesService.meta.to}}\r\n                /{{companiesService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"companiesService.getCompanies(companiesService.meta.current_page + 1)\"\r\n                        [disabled]=\"companiesService.meta.current_page == companiesService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCompaniesCompaniesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"EMPRESAS\"></app-main-header>\r\n\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/companies/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'EMPRESAS'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/companies/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'EMPRESAS' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/companies/companies-create/companies-create.component.scss":
    /*!****************************************************************************!*\
      !*** ./src/app/companies/companies-create/companies-create.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCompaniesCompaniesCreateCompaniesCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbmllcy9jb21wYW5pZXMtY3JlYXRlL2NvbXBhbmllcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/companies/companies-create/companies-create.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/companies/companies-create/companies-create.component.ts ***!
      \**************************************************************************/

    /*! exports provided: CompaniesCreateComponent */

    /***/
    function srcAppCompaniesCompaniesCreateCompaniesCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompaniesCreateComponent", function () {
        return CompaniesCreateComponent;
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


      var _companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../companies.service */
      "./src/app/companies/companies.service.ts");
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

      var CompaniesCreateComponent = /*#__PURE__*/function () {
        function CompaniesCreateComponent(companiesService, route, platform, splitPanel) {
          _classCallCheck(this, CompaniesCreateComponent);

          this.companiesService = companiesService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.formValid = false;
        }

        _createClass(CompaniesCreateComponent, [{
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

            this.companyForm.companiesForm.valueChanges.subscribe(function (data) {
              _this.companiesService.companiesFormValid.next(_this.companyForm.companiesForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.companiesService.createCompany();
            this.companiesService.company = {};
          }
        }]);

        return CompaniesCreateComponent;
      }();

      CompaniesCreateComponent.ctorParameters = function () {
        return [{
          type: _companies_service__WEBPACK_IMPORTED_MODULE_2__["CompaniesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      CompaniesCreateComponent.propDecorators = {
        companyForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['companyForm']
        }]
      };
      CompaniesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companies-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./companies-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-create/companies-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./companies-create.component.scss */
        "./src/app/companies/companies-create/companies-create.component.scss"))["default"]]
      })], CompaniesCreateComponent);
      /***/
    },

    /***/
    "./src/app/companies/companies-duplicate/companies-duplicate.component.scss":
    /*!**********************************************************************************!*\
      !*** ./src/app/companies/companies-duplicate/companies-duplicate.component.scss ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCompaniesCompaniesDuplicateCompaniesDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbmllcy9jb21wYW5pZXMtZHVwbGljYXRlL2NvbXBhbmllcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/companies/companies-duplicate/companies-duplicate.component.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/companies/companies-duplicate/companies-duplicate.component.ts ***!
      \********************************************************************************/

    /*! exports provided: CompaniesDuplicateComponent */

    /***/
    function srcAppCompaniesCompaniesDuplicateCompaniesDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompaniesDuplicateComponent", function () {
        return CompaniesDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CompaniesDuplicateComponent = /*#__PURE__*/function () {
        function CompaniesDuplicateComponent() {
          _classCallCheck(this, CompaniesDuplicateComponent);
        }

        _createClass(CompaniesDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CompaniesDuplicateComponent;
      }();

      CompaniesDuplicateComponent.ctorParameters = function () {
        return [];
      };

      CompaniesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companies-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./companies-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-duplicate/companies-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./companies-duplicate.component.scss */
        "./src/app/companies/companies-duplicate/companies-duplicate.component.scss"))["default"]]
      })], CompaniesDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/companies/companies-edit/companies-edit.component.scss":
    /*!************************************************************************!*\
      !*** ./src/app/companies/companies-edit/companies-edit.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCompaniesCompaniesEditCompaniesEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbmllcy9jb21wYW5pZXMtZWRpdC9jb21wYW5pZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/companies/companies-edit/companies-edit.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/companies/companies-edit/companies-edit.component.ts ***!
      \**********************************************************************/

    /*! exports provided: CompaniesEditComponent */

    /***/
    function srcAppCompaniesCompaniesEditCompaniesEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompaniesEditComponent", function () {
        return CompaniesEditComponent;
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


      var _companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../companies.service */
      "./src/app/companies/companies.service.ts");
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

      var CompaniesEditComponent = /*#__PURE__*/function () {
        function CompaniesEditComponent(companiesService, route, platform, splitPanel) {
          _classCallCheck(this, CompaniesEditComponent);

          this.companiesService = companiesService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.model = null;
        }

        _createClass(CompaniesEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.companiesService.editCompany(this.id);
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

            this.companyForm.companiesForm.valueChanges.subscribe(function (data) {
              _this2.companiesService.companiesFormValid.next(_this2.companyForm.companiesForm.valid);
            });
          }
        }]);

        return CompaniesEditComponent;
      }();

      CompaniesEditComponent.ctorParameters = function () {
        return [{
          type: _companies_service__WEBPACK_IMPORTED_MODULE_2__["CompaniesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      CompaniesEditComponent.propDecorators = {
        companyForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['companyForm']
        }]
      };
      CompaniesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companies-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./companies-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-edit/companies-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./companies-edit.component.scss */
        "./src/app/companies/companies-edit/companies-edit.component.scss"))["default"]]
      })], CompaniesEditComponent);
      /***/
    },

    /***/
    "./src/app/companies/companies-form/companies-form.component.scss":
    /*!************************************************************************!*\
      !*** ./src/app/companies/companies-form/companies-form.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCompaniesCompaniesFormCompaniesFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbmllcy9jb21wYW5pZXMtZm9ybS9jb21wYW5pZXMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/companies/companies-form/companies-form.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/companies/companies-form/companies-form.component.ts ***!
      \**********************************************************************/

    /*! exports provided: CompaniesFormComponent */

    /***/
    function srcAppCompaniesCompaniesFormCompaniesFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompaniesFormComponent", function () {
        return CompaniesFormComponent;
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


      var _companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../companies.service */
      "./src/app/companies/companies.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var CompaniesFormComponent = /*#__PURE__*/function () {
        function CompaniesFormComponent(companiesService, toTitlecase) {
          _classCallCheck(this, CompaniesFormComponent);

          this.companiesService = companiesService;
          this.toTitlecase = toTitlecase;
          this.model = {};
          this.validationMessages = {
            'name': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'
            }],
            'code': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.'
            }],
            'nit': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('NIT') + ' es obligatorio.'
            }],
            'manager_name': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('NOMBRE REPRESENTANTE LEGAL') + ' es obligatorio.'
            }],
            'manager_document': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('CÉDULA REPRESENTANTE LEGAL') + ' es obligatorio.'
            }],
            'logo': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('LOGOTIPO') + ' es obligatorio.'
            }],
            'main': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('PRINCIPAL') + ' es obligatorio.'
            }],
            'comp_phone_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('TELÉFONOS DE EMPRESAS') + ' es obligatorio.'
            }],
            'comp_address_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('EMPRESAS DIRECCIONES') + ' es obligatorio.'
            }],
            'comp_contact_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('EMPRESAS CONTACTOS') + ' es obligatorio.'
            }],
            'comp_responsability_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('EMPRESAS RESPONSABILIDADES LEGALES') + ' es obligatorio.'
            }]
          };
        }

        _createClass(CompaniesFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // set setCompPhoneIds

        }, {
          key: "setCompPhoneIds",
          value: function setCompPhoneIds(event) {
            var compPhoneIds = null;

            if (event.value.length) {
              compPhoneIds = [];

              for (var i = 0; i < event.value.length; i++) {
                compPhoneIds.push(event.value[i].id);
              }
            }

            this.companiesService.company.comp_phone_ids = compPhoneIds;
          } // end setCompPhoneIds
          // set setCompAddressIds

        }, {
          key: "setCompAddressIds",
          value: function setCompAddressIds(event) {
            var compAddressIds = null;

            if (event.value.length) {
              compAddressIds = [];

              for (var i = 0; i < event.value.length; i++) {
                compAddressIds.push(event.value[i].id);
              }
            }

            this.companiesService.company.comp_address_ids = compAddressIds;
          } // end setCompAddressIds
          // set setCompContactIds

        }, {
          key: "setCompContactIds",
          value: function setCompContactIds(event) {
            var compContactIds = null;

            if (event.value.length) {
              compContactIds = [];

              for (var i = 0; i < event.value.length; i++) {
                compContactIds.push(event.value[i].id);
              }
            }

            this.companiesService.company.comp_contact_ids = compContactIds;
          } // end setCompContactIds
          // set setCompResponsabilityIds

        }, {
          key: "setCompResponsabilityIds",
          value: function setCompResponsabilityIds(event) {
            var compResponsabilityIds = null;

            if (event.value.length) {
              compResponsabilityIds = [];

              for (var i = 0; i < event.value.length; i++) {
                compResponsabilityIds.push(event.value[i].id);
              }
            }

            this.companiesService.company.comp_responsability_ids = compResponsabilityIds;
          }
        }]);

        return CompaniesFormComponent;
      }();

      CompaniesFormComponent.ctorParameters = function () {
        return [{
          type: _companies_service__WEBPACK_IMPORTED_MODULE_2__["CompaniesService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      CompaniesFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        companiesForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['companiesForm']
        }]
      };
      CompaniesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companies-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./companies-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-form/companies-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./companies-form.component.scss */
        "./src/app/companies/companies-form/companies-form.component.scss"))["default"]]
      })], CompaniesFormComponent);
      /***/
    },

    /***/
    "./src/app/companies/companies-list/companies-list.component.scss":
    /*!************************************************************************!*\
      !*** ./src/app/companies/companies-list/companies-list.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCompaniesCompaniesListCompaniesListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbmllcy9jb21wYW5pZXMtbGlzdC9jb21wYW5pZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/companies/companies-list/companies-list.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/companies/companies-list/companies-list.component.ts ***!
      \**********************************************************************/

    /*! exports provided: CompaniesListComponent */

    /***/
    function srcAppCompaniesCompaniesListCompaniesListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompaniesListComponent", function () {
        return CompaniesListComponent;
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


      var _companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../companies.service */
      "./src/app/companies/companies.service.ts");
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

      var CompaniesListComponent = /*#__PURE__*/function () {
        function CompaniesListComponent(companiesService, api, loading, splitPanel) {
          _classCallCheck(this, CompaniesListComponent);

          this.companiesService = companiesService;
          this.api = api;
          this.loading = loading;
          this.splitPanel = splitPanel;
        }

        _createClass(CompaniesListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.companiesService.getCompanies();
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

        return CompaniesListComponent;
      }();

      CompaniesListComponent.ctorParameters = function () {
        return [{
          type: _companies_service__WEBPACK_IMPORTED_MODULE_2__["CompaniesService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"]
        }];
      };

      CompaniesListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      CompaniesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companies-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./companies-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies-list/companies-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./companies-list.component.scss */
        "./src/app/companies/companies-list/companies-list.component.scss"))["default"]]
      })], CompaniesListComponent);
      /***/
    },

    /***/
    "./src/app/companies/companies-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/companies/companies-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: CompaniesPageRoutingModule */

    /***/
    function srcAppCompaniesCompaniesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompaniesPageRoutingModule", function () {
        return CompaniesPageRoutingModule;
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


      var _companies_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./companies.page */
      "./src/app/companies/companies.page.ts");
      /* harmony import */


      var _companies_edit_companies_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./companies-edit/companies-edit.component */
      "./src/app/companies/companies-edit/companies-edit.component.ts");
      /* harmony import */


      var _companies_create_companies_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./companies-create/companies-create.component */
      "./src/app/companies/companies-create/companies-create.component.ts");
      /* harmony import */


      var _companies_list_companies_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./companies-list/companies-list.component */
      "./src/app/companies/companies-list/companies-list.component.ts");

      var routes = [{
        path: '',
        component: _companies_page__WEBPACK_IMPORTED_MODULE_3__["CompaniesPage"]
      }, {
        path: 'list',
        component: _companies_list_companies_list_component__WEBPACK_IMPORTED_MODULE_6__["CompaniesListComponent"]
      }, {
        path: 'create',
        component: _companies_create_companies_create_component__WEBPACK_IMPORTED_MODULE_5__["CompaniesCreateComponent"]
      }, {
        path: ':id/edit',
        component: _companies_edit_companies_edit_component__WEBPACK_IMPORTED_MODULE_4__["CompaniesEditComponent"]
      }];

      var CompaniesPageRoutingModule = function CompaniesPageRoutingModule() {
        _classCallCheck(this, CompaniesPageRoutingModule);
      };

      CompaniesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CompaniesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/companies/companies.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/companies/companies.module.ts ***!
      \***********************************************/

    /*! exports provided: CompaniesPageModule */

    /***/
    function srcAppCompaniesCompaniesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompaniesPageModule", function () {
        return CompaniesPageModule;
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


      var _companies_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./companies-routing.module */
      "./src/app/companies/companies-routing.module.ts");
      /* harmony import */


      var _companies_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./companies.page */
      "./src/app/companies/companies.page.ts");
      /* harmony import */


      var _companies_list_companies_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./companies-list/companies-list.component */
      "./src/app/companies/companies-list/companies-list.component.ts");
      /* harmony import */


      var _companies_create_companies_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./companies-create/companies-create.component */
      "./src/app/companies/companies-create/companies-create.component.ts");
      /* harmony import */


      var _companies_duplicate_companies_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./companies-duplicate/companies-duplicate.component */
      "./src/app/companies/companies-duplicate/companies-duplicate.component.ts");
      /* harmony import */


      var _companies_edit_companies_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./companies-edit/companies-edit.component */
      "./src/app/companies/companies-edit/companies-edit.component.ts");
      /* harmony import */


      var _companies_form_companies_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./companies-form/companies-form.component */
      "./src/app/companies/companies-form/companies-form.component.ts");

      var CompaniesPageModule = function CompaniesPageModule() {
        _classCallCheck(this, CompaniesPageModule);
      };

      CompaniesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _companies_routing_module__WEBPACK_IMPORTED_MODULE_6__["CompaniesPageRoutingModule"]],
        declarations: [_companies_page__WEBPACK_IMPORTED_MODULE_7__["CompaniesPage"], _companies_list_companies_list_component__WEBPACK_IMPORTED_MODULE_8__["CompaniesListComponent"], _companies_create_companies_create_component__WEBPACK_IMPORTED_MODULE_9__["CompaniesCreateComponent"], _companies_duplicate_companies_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["CompaniesDuplicateComponent"], _companies_edit_companies_edit_component__WEBPACK_IMPORTED_MODULE_11__["CompaniesEditComponent"], _companies_form_companies_form_component__WEBPACK_IMPORTED_MODULE_12__["CompaniesFormComponent"]]
      })], CompaniesPageModule);
      /***/
    },

    /***/
    "./src/app/companies/companies.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/companies/companies.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppCompaniesCompaniesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbmllcy9jb21wYW5pZXMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/companies/companies.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/companies/companies.page.ts ***!
      \*********************************************/

    /*! exports provided: CompaniesPage */

    /***/
    function srcAppCompaniesCompaniesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompaniesPage", function () {
        return CompaniesPage;
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

      var CompaniesPage = /*#__PURE__*/function () {
        function CompaniesPage(splitPanel) {
          _classCallCheck(this, CompaniesPage);

          this.splitPanel = splitPanel;
        }

        _createClass(CompaniesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }]);

        return CompaniesPage;
      }();

      CompaniesPage.ctorParameters = function () {
        return [{
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"]
        }];
      };

      CompaniesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companies',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./companies.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./companies.page.scss */
        "./src/app/companies/companies.page.scss"))["default"]]
      })], CompaniesPage);
      /***/
    },

    /***/
    "./src/app/companies/companies.service.ts":
    /*!************************************************!*\
      !*** ./src/app/companies/companies.service.ts ***!
      \************************************************/

    /*! exports provided: CompaniesService */

    /***/
    function srcAppCompaniesCompaniesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompaniesService", function () {
        return CompaniesService;
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

      var CompaniesService = /*#__PURE__*/function () {
        function CompaniesService(api, alert, toast, router, navigation) {
          _classCallCheck(this, CompaniesService);

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

        _createClass(CompaniesService, [{
          key: "getCompanies",
          value: function getCompanies() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.companiesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.companies = res.data;
              _this3.companyLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editCompany",
          value: function editCompany(id) {
            var _this4 = this;

            this.api.get(this.companiesUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.company = res.data.model;
              _this4.companyLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateCompany",
          value: function updateCompany() {
            var _this5 = this;

            this.api.put(this.companiesUrl + '/' + this.company.id, {
              model: this.company,
              pivots: {}
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getCompanies(1);
            });
          }
        }, {
          key: "createCompany",
          value: function createCompany() {
            var _this6 = this;

            this.api.get(this.companiesUrl + '/create').subscribe(function (res) {
              _this6.company = {};
              _this6.companyLists = res.lists;
            });
          }
        }, {
          key: "storeCompany",
          value: function storeCompany() {
            var _this7 = this;

            this.api.post(this.companiesUrl, {
              model: this.company,
              pivots: {}
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getCompanies(1);
            });
          }
        }, {
          key: "deleteCompany",
          value: function deleteCompany(id) {
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

                      this.api["delete"](this.companiesUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getCompanies(1);
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

        return CompaniesService;
      }();

      CompaniesService.ctorParameters = function () {
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

      CompaniesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CompaniesService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=companies-companies-module-es5.js.map