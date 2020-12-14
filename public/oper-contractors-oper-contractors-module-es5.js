(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oper-contractors-oper-contractors-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-create/oper-contractors-create.component.html":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-create/oper-contractors-create.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperContractorsOperContractorsCreateOperContractorsCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/oper-contractors'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"operContractorsService.storeOperContractor()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!operContractorsService.operContractorsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'CONTRATISTAS OPERATIVOS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-oper-contractors-form #operContractorForm [model]=\"operContractorsService.operContractor\"></app-oper-contractors-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-duplicate/oper-contractors-duplicate.component.html":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-duplicate/oper-contractors-duplicate.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperContractorsOperContractorsDuplicateOperContractorsDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  OperContractors duplicate works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-edit/oper-contractors-edit.component.html":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-edit/oper-contractors-edit.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperContractorsOperContractorsEditOperContractorsEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/oper-contractors'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"operContractorsService.updateOperContractor()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!operContractorsService.operContractorsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'CONTRATISTAS OPERATIVOS' | titlecase}}: {{ operContractorsService.operContractor?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-oper-contractors-form #operContractorForm [model]=\"operContractorsService.operContractor\"></app-oper-contractors-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-form/oper-contractors-form.component.html":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-form/oper-contractors-form.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperContractorsOperContractorsFormOperContractorsFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #operContractorsForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- oper_movement_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'MOVIMIENTOS OPERATIVOS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"oper_movement_ids\"\n                          id=\"oper_movement_ids-field\"\n                          [(ngModel)]=\"model.oper_movements\"\n                          [items]=\"operContractorsService.operContractorLists.OperMovement\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('MOVIMIENTOS OPERATIVOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('MOVIMIENTOS OPERATIVOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setOperMovementIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.oper_movement_ids\">\n            <div class=\"error-message\" *ngIf=\"operContractorsForm.form.controls['oper_movement_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end oper_movement_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"operContractorsForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- document -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'DOCUMENTO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.document\"\n                            type=\"text\"\n                            name=\"document\"\n                            id=\"document-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.document\">\n                    <div class=\"error-message\" *ngIf=\"operContractorsForm.form.controls['document']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end document -->\n\n\n            <!-- address -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'DIRECCIÓN' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.address\"\n                            type=\"text\"\n                            name=\"address\"\n                            id=\"address-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.address\">\n                    <div class=\"error-message\" *ngIf=\"operContractorsForm.form.controls['address']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end address -->\n\n\n            <!-- phone -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'TELÉFONO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.phone\"\n                            type=\"text\"\n                            name=\"phone\"\n                            id=\"phone-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.phone\">\n                    <div class=\"error-message\" *ngIf=\"operContractorsForm.form.controls['phone']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end phone -->\n\n\n            <!-- email -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'CORREO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.email\"\n                            type=\"text\"\n                            name=\"email\"\n                            id=\"email-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.email\">\n                    <div class=\"error-message\" *ngIf=\"operContractorsForm.form.controls['email']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end email -->\n\n\n            <!-- phone_support -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'TELÉFONO DE SOPORTE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.phone_support\"\n                            type=\"text\"\n                            name=\"phone_support\"\n                            id=\"phone_support-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.phone_support\">\n                    <div class=\"error-message\" *ngIf=\"operContractorsForm.form.controls['phone_support']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end phone_support -->\n\n\n            <!-- email_support -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'CORREO DE SOPORTE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.email_support\"\n                            type=\"text\"\n                            name=\"email_support\"\n                            id=\"email_support-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.email_support\">\n                    <div class=\"error-message\" *ngIf=\"operContractorsForm.form.controls['email_support']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end email_support -->\n\n\n            <!-- contact -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'CONTACTO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.contact\"\n                            type=\"text\"\n                            name=\"contact\"\n                            id=\"contact-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.contact\">\n                    <div class=\"error-message\" *ngIf=\"operContractorsForm.form.controls['contact']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end contact -->\n\n\n            <!-- business_hour -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'HORARIO DE ATENCIÓN' | titlecase }}</ion-label>\n                <ion-textarea [(ngModel)]=\"model.business_hour\"\n                              name=\"business_hour\"\n                              id=\"business_hour-field\"\n                              rows=\"6\"\n                              placeholder=\"\"></ion-textarea>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.business_hour\">\n                    <div class=\"error-message\" *ngIf=\"operContractorsForm.form.controls['business_hour']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end business_hour -->\n\n\n            <!-- phone_emergency -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'TELÉFONO DE EMERGENCIA' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.phone_emergency\"\n                            type=\"text\"\n                            name=\"phone_emergency\"\n                            id=\"phone_emergency-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.phone_emergency\">\n                    <div class=\"error-message\" *ngIf=\"operContractorsForm.form.controls['phone_emergency']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end phone_emergency -->\n\n\n            <!-- email_emergency -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'CORREO DE EMERGENCIA' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.email_emergency\"\n                            type=\"text\"\n                            name=\"email_emergency\"\n                            id=\"email_emergency-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.email_emergency\">\n                    <div class=\"error-message\" *ngIf=\"operContractorsForm.form.controls['email_emergency']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end email_emergency -->\n\n\n</form>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-list/oper-contractors-list.component.html":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-list/oper-contractors-list.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperContractorsOperContractorsListOperContractorsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'CONTRATISTAS OPERATIVOS' | titlecase}}\"\n                 primaryLink=\"oper-contractors/create\"\n                 primaryText=\"Crear {{'CONTRATISTAS OPERATIVOS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('CONTRATISTAS OPERATIVOS' | lowercase )\"\n                       (ionCancel)=\"this.operContractorsService.searchValue = ''; operContractorsService.getOperContractors()\"\n                       (keyup.enter)=\"operContractorsService.getOperContractors()\"\n                       [(ngModel)]=\"operContractorsService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && operContractorsService.operContractors?.length\">\n        <ion-card *ngFor=\"let operContractor of operContractorsService.operContractors; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operContractor?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'DOCUMENTO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operContractor?.document }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'DIRECCIÓN' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operContractor?.address }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'TELÉFONO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operContractor?.phone }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CORREO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operContractor?.email }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'TELÉFONO DE SOPORTE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operContractor?.phone_support }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CORREO DE SOPORTE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operContractor?.email_support }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CONTACTO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operContractor?.contact }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'HORARIO DE ATENCIÓN' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operContractor?.business_hour }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'TELÉFONO DE EMERGENCIA' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operContractor?.phone_emergency }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CORREO DE EMERGENCIA' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operContractor?.email_emergency }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'MOVIMIENTOS OPERATIVOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"operContractor?.oper_movements?.length\">\n                                <ng-container *ngFor=\"let operMovement of operContractor?.oper_movements; let last = last\">\n                                    <a routerLink=\"/oper-movements/{{ operMovement?.id }}/edit\">{{ operMovement?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/oper-contractors/' + operContractor?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"operContractorsService.deleteOperContractor(operContractor?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !operContractorsService.operContractors?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'CONTRATISTAS OPERATIVOS' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/oper-contractors/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'CONTRATISTAS OPERATIVOS' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"operContractorsService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"operContractorsService.getOperContractors(operContractorsService.meta.current_page - 1)\"\n                        [disabled]=\"operContractorsService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{operContractorsService.meta.current_page}}\n                /{{operContractorsService.meta.last_page}} {{operContractorsService.meta.from}}-{{operContractorsService.meta.to}}\n                /{{operContractorsService.meta.total}} </ion-button>\n            <ion-button (click)=\"operContractorsService.getOperContractors(operContractorsService.meta.current_page + 1)\"\n                        [disabled]=\"operContractorsService.meta.current_page == operContractorsService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperContractorsOperContractorsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"CONTRATISTAS OPERATIVOS\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/oper-contractors/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'CONTRATISTAS OPERATIVOS'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/oper-contractors/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'CONTRATISTAS OPERATIVOS' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/oper-contractors/oper-contractors-create/oper-contractors-create.component.scss":
    /*!*************************************************************************************************!*\
      !*** ./src/app/oper-contractors/oper-contractors-create/oper-contractors-create.component.scss ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperContractorsOperContractorsCreateOperContractorsCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItY29udHJhY3RvcnMvb3Blci1jb250cmFjdG9ycy1jcmVhdGUvb3Blci1jb250cmFjdG9ycy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/oper-contractors/oper-contractors-create/oper-contractors-create.component.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/oper-contractors/oper-contractors-create/oper-contractors-create.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: OperContractorsCreateComponent */

    /***/
    function srcAppOperContractorsOperContractorsCreateOperContractorsCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperContractorsCreateComponent", function () {
        return OperContractorsCreateComponent;
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


      var _oper_contractors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-contractors.service */
      "./src/app/oper-contractors/oper-contractors.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var OperContractorsCreateComponent = /*#__PURE__*/function () {
        function OperContractorsCreateComponent(operContractorsService, route, platform) {
          _classCallCheck(this, OperContractorsCreateComponent);

          this.operContractorsService = operContractorsService;
          this.route = route;
          this.platform = platform;
          this.id = null;
          this.formValid = false;
        }

        _createClass(OperContractorsCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.clearPosts();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.operContractorForm.operContractorsForm.valueChanges.subscribe(function (data) {
              _this.operContractorsService.operContractorsFormValid.next(_this.operContractorForm.operContractorsForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.operContractorsService.createOperContractor();
            this.operContractorsService.operContractor = {};
          }
        }]);

        return OperContractorsCreateComponent;
      }();

      OperContractorsCreateComponent.ctorParameters = function () {
        return [{
          type: _oper_contractors_service__WEBPACK_IMPORTED_MODULE_2__["OperContractorsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      OperContractorsCreateComponent.propDecorators = {
        operContractorForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['operContractorForm']
        }]
      };
      OperContractorsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-contractors-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-contractors-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-create/oper-contractors-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-contractors-create.component.scss */
        "./src/app/oper-contractors/oper-contractors-create/oper-contractors-create.component.scss"))["default"]]
      })], OperContractorsCreateComponent);
      /***/
    },

    /***/
    "./src/app/oper-contractors/oper-contractors-duplicate/oper-contractors-duplicate.component.scss":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/oper-contractors/oper-contractors-duplicate/oper-contractors-duplicate.component.scss ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperContractorsOperContractorsDuplicateOperContractorsDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItY29udHJhY3RvcnMvb3Blci1jb250cmFjdG9ycy1kdXBsaWNhdGUvb3Blci1jb250cmFjdG9ycy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/oper-contractors/oper-contractors-duplicate/oper-contractors-duplicate.component.ts":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/oper-contractors/oper-contractors-duplicate/oper-contractors-duplicate.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: OperContractorsDuplicateComponent */

    /***/
    function srcAppOperContractorsOperContractorsDuplicateOperContractorsDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperContractorsDuplicateComponent", function () {
        return OperContractorsDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var OperContractorsDuplicateComponent = /*#__PURE__*/function () {
        function OperContractorsDuplicateComponent() {
          _classCallCheck(this, OperContractorsDuplicateComponent);
        }

        _createClass(OperContractorsDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OperContractorsDuplicateComponent;
      }();

      OperContractorsDuplicateComponent.ctorParameters = function () {
        return [];
      };

      OperContractorsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-contractors-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-contractors-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-duplicate/oper-contractors-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-contractors-duplicate.component.scss */
        "./src/app/oper-contractors/oper-contractors-duplicate/oper-contractors-duplicate.component.scss"))["default"]]
      })], OperContractorsDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/oper-contractors/oper-contractors-edit/oper-contractors-edit.component.scss":
    /*!*********************************************************************************************!*\
      !*** ./src/app/oper-contractors/oper-contractors-edit/oper-contractors-edit.component.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperContractorsOperContractorsEditOperContractorsEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItY29udHJhY3RvcnMvb3Blci1jb250cmFjdG9ycy1lZGl0L29wZXItY29udHJhY3RvcnMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/oper-contractors/oper-contractors-edit/oper-contractors-edit.component.ts":
    /*!*******************************************************************************************!*\
      !*** ./src/app/oper-contractors/oper-contractors-edit/oper-contractors-edit.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: OperContractorsEditComponent */

    /***/
    function srcAppOperContractorsOperContractorsEditOperContractorsEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperContractorsEditComponent", function () {
        return OperContractorsEditComponent;
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


      var _oper_contractors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-contractors.service */
      "./src/app/oper-contractors/oper-contractors.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var OperContractorsEditComponent = /*#__PURE__*/function () {
        function OperContractorsEditComponent(operContractorsService, route, platform) {
          _classCallCheck(this, OperContractorsEditComponent);

          this.operContractorsService = operContractorsService;
          this.route = route;
          this.platform = platform;
          this.id = null;
          this.model = null;
        }

        _createClass(OperContractorsEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.operContractorsService.editOperContractor(this.id);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            this.operContractorForm.operContractorsForm.valueChanges.subscribe(function (data) {
              _this2.operContractorsService.operContractorsFormValid.next(_this2.operContractorForm.operContractorsForm.valid);
            });
          }
        }]);

        return OperContractorsEditComponent;
      }();

      OperContractorsEditComponent.ctorParameters = function () {
        return [{
          type: _oper_contractors_service__WEBPACK_IMPORTED_MODULE_2__["OperContractorsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      OperContractorsEditComponent.propDecorators = {
        operContractorForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['operContractorForm']
        }]
      };
      OperContractorsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-contractors-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-contractors-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-edit/oper-contractors-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-contractors-edit.component.scss */
        "./src/app/oper-contractors/oper-contractors-edit/oper-contractors-edit.component.scss"))["default"]]
      })], OperContractorsEditComponent);
      /***/
    },

    /***/
    "./src/app/oper-contractors/oper-contractors-form/oper-contractors-form.component.scss":
    /*!*********************************************************************************************!*\
      !*** ./src/app/oper-contractors/oper-contractors-form/oper-contractors-form.component.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperContractorsOperContractorsFormOperContractorsFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItY29udHJhY3RvcnMvb3Blci1jb250cmFjdG9ycy1mb3JtL29wZXItY29udHJhY3RvcnMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/oper-contractors/oper-contractors-form/oper-contractors-form.component.ts":
    /*!*******************************************************************************************!*\
      !*** ./src/app/oper-contractors/oper-contractors-form/oper-contractors-form.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: OperContractorsFormComponent */

    /***/
    function srcAppOperContractorsOperContractorsFormOperContractorsFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperContractorsFormComponent", function () {
        return OperContractorsFormComponent;
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


      var _oper_contractors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-contractors.service */
      "./src/app/oper-contractors/oper-contractors.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var OperContractorsFormComponent = /*#__PURE__*/function () {
        function OperContractorsFormComponent(operContractorsService, toTitlecase) {
          _classCallCheck(this, OperContractorsFormComponent);

          this.operContractorsService = operContractorsService;
          this.toTitlecase = toTitlecase;
          this.model = {};
          this.validationMessages = {
            'name': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'
            }],
            'document': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('DOCUMENTO') + ' es obligatorio.'
            }],
            'address': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('DIRECCIÓN') + ' es obligatorio.'
            }],
            'phone': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('TELÉFONO') + ' es obligatorio.'
            }],
            'email': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('CORREO') + ' es obligatorio.'
            }],
            'phone_support': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('TELÉFONO DE SOPORTE') + ' es obligatorio.'
            }],
            'email_support': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('CORREO DE SOPORTE') + ' es obligatorio.'
            }],
            'contact': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('CONTACTO') + ' es obligatorio.'
            }],
            'business_hour': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('HORARIO DE ATENCIÓN') + ' es obligatorio.'
            }],
            'phone_emergency': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('TELÉFONO DE EMERGENCIA') + ' es obligatorio.'
            }],
            'email_emergency': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('CORREO DE EMERGENCIA') + ' es obligatorio.'
            }],
            'oper_movement_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('MOVIMIENTOS OPERATIVOS') + ' es obligatorio.'
            }]
          };
        }

        _createClass(OperContractorsFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // set setOperMovementIds

        }, {
          key: "setOperMovementIds",
          value: function setOperMovementIds(event) {
            var operMovementIds = null;

            if (event.value.length) {
              operMovementIds = [];

              for (var i = 0; i < event.value.length; i++) {
                operMovementIds.push(event.value[i].id);
              }
            }

            this.operContractorsService.operContractor.oper_movement_ids = operMovementIds;
          }
        }]);

        return OperContractorsFormComponent;
      }();

      OperContractorsFormComponent.ctorParameters = function () {
        return [{
          type: _oper_contractors_service__WEBPACK_IMPORTED_MODULE_2__["OperContractorsService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      OperContractorsFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        operContractorsForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['operContractorsForm']
        }]
      };
      OperContractorsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-contractors-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-contractors-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-form/oper-contractors-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-contractors-form.component.scss */
        "./src/app/oper-contractors/oper-contractors-form/oper-contractors-form.component.scss"))["default"]]
      })], OperContractorsFormComponent);
      /***/
    },

    /***/
    "./src/app/oper-contractors/oper-contractors-list/oper-contractors-list.component.scss":
    /*!*********************************************************************************************!*\
      !*** ./src/app/oper-contractors/oper-contractors-list/oper-contractors-list.component.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperContractorsOperContractorsListOperContractorsListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItY29udHJhY3RvcnMvb3Blci1jb250cmFjdG9ycy1saXN0L29wZXItY29udHJhY3RvcnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/oper-contractors/oper-contractors-list/oper-contractors-list.component.ts":
    /*!*******************************************************************************************!*\
      !*** ./src/app/oper-contractors/oper-contractors-list/oper-contractors-list.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: OperContractorsListComponent */

    /***/
    function srcAppOperContractorsOperContractorsListOperContractorsListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperContractorsListComponent", function () {
        return OperContractorsListComponent;
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


      var _oper_contractors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-contractors.service */
      "./src/app/oper-contractors/oper-contractors.service.ts");
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

      var OperContractorsListComponent = /*#__PURE__*/function () {
        function OperContractorsListComponent(operContractorsService, api, loading) {
          _classCallCheck(this, OperContractorsListComponent);

          this.operContractorsService = operContractorsService;
          this.api = api;
          this.loading = loading;
        }

        _createClass(OperContractorsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.operContractorsService.getOperContractors();
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            this.content.scrollToTop(300);
          }
        }]);

        return OperContractorsListComponent;
      }();

      OperContractorsListComponent.ctorParameters = function () {
        return [{
          type: _oper_contractors_service__WEBPACK_IMPORTED_MODULE_2__["OperContractorsService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }];
      };

      OperContractorsListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      OperContractorsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-contractors-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-contractors-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors-list/oper-contractors-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-contractors-list.component.scss */
        "./src/app/oper-contractors/oper-contractors-list/oper-contractors-list.component.scss"))["default"]]
      })], OperContractorsListComponent);
      /***/
    },

    /***/
    "./src/app/oper-contractors/oper-contractors-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/oper-contractors/oper-contractors-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: OperContractorsPageRoutingModule */

    /***/
    function srcAppOperContractorsOperContractorsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperContractorsPageRoutingModule", function () {
        return OperContractorsPageRoutingModule;
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


      var _oper_contractors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./oper-contractors.page */
      "./src/app/oper-contractors/oper-contractors.page.ts");
      /* harmony import */


      var _oper_contractors_edit_oper_contractors_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./oper-contractors-edit/oper-contractors-edit.component */
      "./src/app/oper-contractors/oper-contractors-edit/oper-contractors-edit.component.ts");
      /* harmony import */


      var _oper_contractors_create_oper_contractors_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./oper-contractors-create/oper-contractors-create.component */
      "./src/app/oper-contractors/oper-contractors-create/oper-contractors-create.component.ts");
      /* harmony import */


      var _oper_contractors_list_oper_contractors_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./oper-contractors-list/oper-contractors-list.component */
      "./src/app/oper-contractors/oper-contractors-list/oper-contractors-list.component.ts");

      var routes = [{
        path: '',
        component: _oper_contractors_page__WEBPACK_IMPORTED_MODULE_3__["OperContractorsPage"]
      }, {
        path: 'list',
        component: _oper_contractors_list_oper_contractors_list_component__WEBPACK_IMPORTED_MODULE_6__["OperContractorsListComponent"]
      }, {
        path: 'create',
        component: _oper_contractors_create_oper_contractors_create_component__WEBPACK_IMPORTED_MODULE_5__["OperContractorsCreateComponent"]
      }, {
        path: ':id/edit',
        component: _oper_contractors_edit_oper_contractors_edit_component__WEBPACK_IMPORTED_MODULE_4__["OperContractorsEditComponent"]
      }];

      var OperContractorsPageRoutingModule = function OperContractorsPageRoutingModule() {
        _classCallCheck(this, OperContractorsPageRoutingModule);
      };

      OperContractorsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OperContractorsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/oper-contractors/oper-contractors.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/oper-contractors/oper-contractors.module.ts ***!
      \*************************************************************/

    /*! exports provided: OperContractorsPageModule */

    /***/
    function srcAppOperContractorsOperContractorsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperContractorsPageModule", function () {
        return OperContractorsPageModule;
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


      var _oper_contractors_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./oper-contractors-routing.module */
      "./src/app/oper-contractors/oper-contractors-routing.module.ts");
      /* harmony import */


      var _oper_contractors_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./oper-contractors.page */
      "./src/app/oper-contractors/oper-contractors.page.ts");
      /* harmony import */


      var _oper_contractors_list_oper_contractors_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./oper-contractors-list/oper-contractors-list.component */
      "./src/app/oper-contractors/oper-contractors-list/oper-contractors-list.component.ts");
      /* harmony import */


      var _oper_contractors_create_oper_contractors_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./oper-contractors-create/oper-contractors-create.component */
      "./src/app/oper-contractors/oper-contractors-create/oper-contractors-create.component.ts");
      /* harmony import */


      var _oper_contractors_duplicate_oper_contractors_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./oper-contractors-duplicate/oper-contractors-duplicate.component */
      "./src/app/oper-contractors/oper-contractors-duplicate/oper-contractors-duplicate.component.ts");
      /* harmony import */


      var _oper_contractors_edit_oper_contractors_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./oper-contractors-edit/oper-contractors-edit.component */
      "./src/app/oper-contractors/oper-contractors-edit/oper-contractors-edit.component.ts");
      /* harmony import */


      var _oper_contractors_form_oper_contractors_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./oper-contractors-form/oper-contractors-form.component */
      "./src/app/oper-contractors/oper-contractors-form/oper-contractors-form.component.ts");

      var OperContractorsPageModule = function OperContractorsPageModule() {
        _classCallCheck(this, OperContractorsPageModule);
      };

      OperContractorsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _oper_contractors_routing_module__WEBPACK_IMPORTED_MODULE_6__["OperContractorsPageRoutingModule"]],
        declarations: [_oper_contractors_page__WEBPACK_IMPORTED_MODULE_7__["OperContractorsPage"], _oper_contractors_list_oper_contractors_list_component__WEBPACK_IMPORTED_MODULE_8__["OperContractorsListComponent"], _oper_contractors_create_oper_contractors_create_component__WEBPACK_IMPORTED_MODULE_9__["OperContractorsCreateComponent"], _oper_contractors_duplicate_oper_contractors_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["OperContractorsDuplicateComponent"], _oper_contractors_edit_oper_contractors_edit_component__WEBPACK_IMPORTED_MODULE_11__["OperContractorsEditComponent"], _oper_contractors_form_oper_contractors_form_component__WEBPACK_IMPORTED_MODULE_12__["OperContractorsFormComponent"]]
      })], OperContractorsPageModule);
      /***/
    },

    /***/
    "./src/app/oper-contractors/oper-contractors.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/oper-contractors/oper-contractors.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperContractorsOperContractorsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItY29udHJhY3RvcnMvb3Blci1jb250cmFjdG9ycy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/oper-contractors/oper-contractors.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/oper-contractors/oper-contractors.page.ts ***!
      \***********************************************************/

    /*! exports provided: OperContractorsPage */

    /***/
    function srcAppOperContractorsOperContractorsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperContractorsPage", function () {
        return OperContractorsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var OperContractorsPage = /*#__PURE__*/function () {
        function OperContractorsPage() {
          _classCallCheck(this, OperContractorsPage);
        }

        _createClass(OperContractorsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OperContractorsPage;
      }();

      OperContractorsPage.ctorParameters = function () {
        return [];
      };

      OperContractorsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-contractors',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-contractors.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-contractors/oper-contractors.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-contractors.page.scss */
        "./src/app/oper-contractors/oper-contractors.page.scss"))["default"]]
      })], OperContractorsPage);
      /***/
    },

    /***/
    "./src/app/oper-contractors/oper-contractors.service.ts":
    /*!**************************************************************!*\
      !*** ./src/app/oper-contractors/oper-contractors.service.ts ***!
      \**************************************************************/

    /*! exports provided: OperContractorsService */

    /***/
    function srcAppOperContractorsOperContractorsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperContractorsService", function () {
        return OperContractorsService;
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

      var OperContractorsService = /*#__PURE__*/function () {
        function OperContractorsService(api, alert, toast, router, navigation) {
          _classCallCheck(this, OperContractorsService);

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

        _createClass(OperContractorsService, [{
          key: "getOperContractors",
          value: function getOperContractors() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.operContractorsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.operContractors = res.data;
              _this3.operContractorLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editOperContractor",
          value: function editOperContractor(id) {
            var _this4 = this;

            this.api.get(this.operContractorsUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.operContractor = res.data.model;
              _this4.operContractorLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateOperContractor",
          value: function updateOperContractor() {
            var _this5 = this;

            this.api.put(this.operContractorsUrl + '/' + this.operContractor.id, {
              model: this.operContractor,
              pivots: {}
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getOperContractors(1);
            });
          }
        }, {
          key: "createOperContractor",
          value: function createOperContractor() {
            var _this6 = this;

            this.api.get(this.operContractorsUrl + '/create').subscribe(function (res) {
              _this6.operContractor = {};
              _this6.operContractorLists = res.lists;
            });
          }
        }, {
          key: "storeOperContractor",
          value: function storeOperContractor() {
            var _this7 = this;

            this.api.post(this.operContractorsUrl, {
              model: this.operContractor,
              pivots: {}
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getOperContractors(1);
            });
          }
        }, {
          key: "deleteOperContractor",
          value: function deleteOperContractor(id) {
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

                      this.api["delete"](this.operContractorsUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getOperContractors(1);
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

        return OperContractorsService;
      }();

      OperContractorsService.ctorParameters = function () {
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

      OperContractorsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], OperContractorsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=oper-contractors-oper-contractors-module-es5.js.map