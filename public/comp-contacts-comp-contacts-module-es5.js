(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comp-contacts-comp-contacts-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-contacts/comp-contacts-create/comp-contacts-create.component.html":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-contacts/comp-contacts-create/comp-contacts-create.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCompContactsCompContactsCreateCompContactsCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/comp-contacts'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"compContactsService.storeCompContact()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!compContactsService.compContactsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'EMPRESAS CONTACTOS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-comp-contacts-form #compContactForm [model]=\"compContactsService.compContact\"></app-comp-contacts-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-contacts/comp-contacts-duplicate/comp-contacts-duplicate.component.html":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-contacts/comp-contacts-duplicate/comp-contacts-duplicate.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCompContactsCompContactsDuplicateCompContactsDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  CompContacts duplicate works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-contacts/comp-contacts-edit/comp-contacts-edit.component.html":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-contacts/comp-contacts-edit/comp-contacts-edit.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCompContactsCompContactsEditCompContactsEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/comp-contacts'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"compContactsService.updateCompContact()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!compContactsService.compContactsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'EMPRESAS CONTACTOS' | titlecase}}: {{ compContactsService.compContact?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-comp-contacts-form #compContactForm [model]=\"compContactsService.compContact\"></app-comp-contacts-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-contacts/comp-contacts-form/comp-contacts-form.component.html":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-contacts/comp-contacts-form/comp-contacts-form.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCompContactsCompContactsFormCompContactsFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #compContactsForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- company_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'EMPRESA' | titlecase }}</ion-label>\n        <ionic-selectable name=\"company_id\"\n                          id=\"company_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.company\"\n                          [items]=\"compContactsService.compContactLists.Company\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('EMPRESAS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('EMPRESAS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setCompanyId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.company_id\">\n            <div class=\"error-message\" *ngIf=\"compContactsForm.form.controls['company_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end company_id -->\n\n\n    <!-- syst_position_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'CARGO' | titlecase }}</ion-label>\n        <ionic-selectable name=\"syst_position_id\"\n                          id=\"syst_position_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.syst_position\"\n                          [items]=\"compContactsService.compContactLists.SystPosition\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('CARGOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('CARGOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setSystPositionId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.syst_position_id\">\n            <div class=\"error-message\" *ngIf=\"compContactsForm.form.controls['syst_position_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end syst_position_id -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"compContactsForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- phone -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'TELÉFONO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.phone\"\n                            type=\"text\"\n                            name=\"phone\"\n                            id=\"phone-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.phone\">\n                    <div class=\"error-message\" *ngIf=\"compContactsForm.form.controls['phone']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end phone -->\n\n\n            <!-- email -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'CORREO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.email\"\n                            type=\"text\"\n                            name=\"email\"\n                            id=\"email-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.email\">\n                    <div class=\"error-message\" *ngIf=\"compContactsForm.form.controls['email']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end email -->\n\n\n            <!-- main -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'PRINCIPAL' | titlecase }}</ion-label>\n                <ion-toggle name=\"main\"\n                            id=\"main-field\"\n                            slot=\"end\"\n                            [(ngModel)]=\"model.main\"></ion-toggle>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.main\">\n                    <div class=\"error-message\" *ngIf=\"compContactsForm.form.controls['main']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end main -->\n\n\n</form>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-contacts/comp-contacts-list/comp-contacts-list.component.html":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-contacts/comp-contacts-list/comp-contacts-list.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCompContactsCompContactsListCompContactsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'EMPRESAS CONTACTOS' | titlecase}}\"\n                 primaryLink=\"comp-contacts/create\"\n                 primaryText=\"Crear {{'EMPRESAS CONTACTOS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('EMPRESAS CONTACTOS' | lowercase )\"\n                       (ionCancel)=\"this.compContactsService.searchValue = ''; compContactsService.getCompContacts()\"\n                       (keyup.enter)=\"compContactsService.getCompContacts()\"\n                       [(ngModel)]=\"compContactsService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && compContactsService.compContacts?.length\">\n        <ion-card *ngFor=\"let compContact of compContactsService.compContacts; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ compContact?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'TELÉFONO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ compContact?.phone }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CORREO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ compContact?.email }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'PRINCIPAL' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ compContact?.main  ? 'Si' : 'No' }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'EMPRESAS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/companies/{{ compContact?.company?.id }}/edit\">{{ compContact?.company?.name }}</a></div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CARGOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/syst-positions/{{ compContact?.syst_position?.id }}/edit\">{{ compContact?.syst_position?.name }}</a></div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/comp-contacts/' + compContact?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"compContactsService.deleteCompContact(compContact?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !compContactsService.compContacts?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'EMPRESAS CONTACTOS' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/comp-contacts/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'EMPRESAS CONTACTOS' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"compContactsService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"compContactsService.getCompContacts(compContactsService.meta.current_page - 1)\"\n                        [disabled]=\"compContactsService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{compContactsService.meta.current_page}}\n                /{{compContactsService.meta.last_page}} {{compContactsService.meta.from}}-{{compContactsService.meta.to}}\n                /{{compContactsService.meta.total}} </ion-button>\n            <ion-button (click)=\"compContactsService.getCompContacts(compContactsService.meta.current_page + 1)\"\n                        [disabled]=\"compContactsService.meta.current_page == compContactsService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-contacts/comp-contacts.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-contacts/comp-contacts.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCompContactsCompContactsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"EMPRESAS CONTACTOS\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/comp-contacts/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'EMPRESAS CONTACTOS'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/comp-contacts/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'EMPRESAS CONTACTOS' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/comp-contacts/comp-contacts-create/comp-contacts-create.component.scss":
    /*!****************************************************************************************!*\
      !*** ./src/app/comp-contacts/comp-contacts-create/comp-contacts-create.component.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCompContactsCompContactsCreateCompContactsCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtY29udGFjdHMvY29tcC1jb250YWN0cy1jcmVhdGUvY29tcC1jb250YWN0cy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/comp-contacts/comp-contacts-create/comp-contacts-create.component.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/comp-contacts/comp-contacts-create/comp-contacts-create.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: CompContactsCreateComponent */

    /***/
    function srcAppCompContactsCompContactsCreateCompContactsCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompContactsCreateComponent", function () {
        return CompContactsCreateComponent;
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


      var _comp_contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../comp-contacts.service */
      "./src/app/comp-contacts/comp-contacts.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var CompContactsCreateComponent = /*#__PURE__*/function () {
        function CompContactsCreateComponent(compContactsService, route, platform) {
          _classCallCheck(this, CompContactsCreateComponent);

          this.compContactsService = compContactsService;
          this.route = route;
          this.platform = platform;
          this.id = null;
          this.formValid = false;
        }

        _createClass(CompContactsCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.clearPosts();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.compContactForm.compContactsForm.valueChanges.subscribe(function (data) {
              _this.compContactsService.compContactsFormValid.next(_this.compContactForm.compContactsForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.compContactsService.createCompContact();
            this.compContactsService.compContact = {};
          }
        }]);

        return CompContactsCreateComponent;
      }();

      CompContactsCreateComponent.ctorParameters = function () {
        return [{
          type: _comp_contacts_service__WEBPACK_IMPORTED_MODULE_2__["CompContactsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      CompContactsCreateComponent.propDecorators = {
        compContactForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['compContactForm']
        }]
      };
      CompContactsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-contacts-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./comp-contacts-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-contacts/comp-contacts-create/comp-contacts-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./comp-contacts-create.component.scss */
        "./src/app/comp-contacts/comp-contacts-create/comp-contacts-create.component.scss"))["default"]]
      })], CompContactsCreateComponent);
      /***/
    },

    /***/
    "./src/app/comp-contacts/comp-contacts-duplicate/comp-contacts-duplicate.component.scss":
    /*!**********************************************************************************************!*\
      !*** ./src/app/comp-contacts/comp-contacts-duplicate/comp-contacts-duplicate.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCompContactsCompContactsDuplicateCompContactsDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtY29udGFjdHMvY29tcC1jb250YWN0cy1kdXBsaWNhdGUvY29tcC1jb250YWN0cy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/comp-contacts/comp-contacts-duplicate/comp-contacts-duplicate.component.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/comp-contacts/comp-contacts-duplicate/comp-contacts-duplicate.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: CompContactsDuplicateComponent */

    /***/
    function srcAppCompContactsCompContactsDuplicateCompContactsDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompContactsDuplicateComponent", function () {
        return CompContactsDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CompContactsDuplicateComponent = /*#__PURE__*/function () {
        function CompContactsDuplicateComponent() {
          _classCallCheck(this, CompContactsDuplicateComponent);
        }

        _createClass(CompContactsDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CompContactsDuplicateComponent;
      }();

      CompContactsDuplicateComponent.ctorParameters = function () {
        return [];
      };

      CompContactsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-contacts-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./comp-contacts-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-contacts/comp-contacts-duplicate/comp-contacts-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./comp-contacts-duplicate.component.scss */
        "./src/app/comp-contacts/comp-contacts-duplicate/comp-contacts-duplicate.component.scss"))["default"]]
      })], CompContactsDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/comp-contacts/comp-contacts-edit/comp-contacts-edit.component.scss":
    /*!************************************************************************************!*\
      !*** ./src/app/comp-contacts/comp-contacts-edit/comp-contacts-edit.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCompContactsCompContactsEditCompContactsEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtY29udGFjdHMvY29tcC1jb250YWN0cy1lZGl0L2NvbXAtY29udGFjdHMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/comp-contacts/comp-contacts-edit/comp-contacts-edit.component.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/comp-contacts/comp-contacts-edit/comp-contacts-edit.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: CompContactsEditComponent */

    /***/
    function srcAppCompContactsCompContactsEditCompContactsEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompContactsEditComponent", function () {
        return CompContactsEditComponent;
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


      var _comp_contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../comp-contacts.service */
      "./src/app/comp-contacts/comp-contacts.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var CompContactsEditComponent = /*#__PURE__*/function () {
        function CompContactsEditComponent(compContactsService, route, platform) {
          _classCallCheck(this, CompContactsEditComponent);

          this.compContactsService = compContactsService;
          this.route = route;
          this.platform = platform;
          this.id = null;
          this.model = null;
        }

        _createClass(CompContactsEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.compContactsService.editCompContact(this.id);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            this.compContactForm.compContactsForm.valueChanges.subscribe(function (data) {
              _this2.compContactsService.compContactsFormValid.next(_this2.compContactForm.compContactsForm.valid);
            });
          }
        }]);

        return CompContactsEditComponent;
      }();

      CompContactsEditComponent.ctorParameters = function () {
        return [{
          type: _comp_contacts_service__WEBPACK_IMPORTED_MODULE_2__["CompContactsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      CompContactsEditComponent.propDecorators = {
        compContactForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['compContactForm']
        }]
      };
      CompContactsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-contacts-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./comp-contacts-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-contacts/comp-contacts-edit/comp-contacts-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./comp-contacts-edit.component.scss */
        "./src/app/comp-contacts/comp-contacts-edit/comp-contacts-edit.component.scss"))["default"]]
      })], CompContactsEditComponent);
      /***/
    },

    /***/
    "./src/app/comp-contacts/comp-contacts-form/comp-contacts-form.component.scss":
    /*!************************************************************************************!*\
      !*** ./src/app/comp-contacts/comp-contacts-form/comp-contacts-form.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCompContactsCompContactsFormCompContactsFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtY29udGFjdHMvY29tcC1jb250YWN0cy1mb3JtL2NvbXAtY29udGFjdHMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/comp-contacts/comp-contacts-form/comp-contacts-form.component.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/comp-contacts/comp-contacts-form/comp-contacts-form.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: CompContactsFormComponent */

    /***/
    function srcAppCompContactsCompContactsFormCompContactsFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompContactsFormComponent", function () {
        return CompContactsFormComponent;
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


      var _comp_contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../comp-contacts.service */
      "./src/app/comp-contacts/comp-contacts.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var CompContactsFormComponent = /*#__PURE__*/function () {
        function CompContactsFormComponent(compContactsService, toTitlecase) {
          _classCallCheck(this, CompContactsFormComponent);

          this.compContactsService = compContactsService;
          this.toTitlecase = toTitlecase;
          this.model = {};
          this.validationMessages = {
            'company_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('EMPRESA') + ' es obligatorio.'
            }],
            'syst_position_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('CARGO') + ' es obligatorio.'
            }],
            'name': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'
            }],
            'phone': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('TELÉFONO') + ' es obligatorio.'
            }],
            'email': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('CORREO') + ' es obligatorio.'
            }],
            'main': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('PRINCIPAL') + ' es obligatorio.'
            }]
          };
        }

        _createClass(CompContactsFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // set setCompanyId

        }, {
          key: "setCompanyId",
          value: function setCompanyId(event) {
            this.compContactsService.compContact.company_id = event.value ? event.value.id : null;
          } // end setCompanyId
          // set setSystPositionId

        }, {
          key: "setSystPositionId",
          value: function setSystPositionId(event) {
            this.compContactsService.compContact.syst_position_id = event.value ? event.value.id : null;
          }
        }]);

        return CompContactsFormComponent;
      }();

      CompContactsFormComponent.ctorParameters = function () {
        return [{
          type: _comp_contacts_service__WEBPACK_IMPORTED_MODULE_2__["CompContactsService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      CompContactsFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        compContactsForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['compContactsForm']
        }]
      };
      CompContactsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-contacts-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./comp-contacts-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-contacts/comp-contacts-form/comp-contacts-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./comp-contacts-form.component.scss */
        "./src/app/comp-contacts/comp-contacts-form/comp-contacts-form.component.scss"))["default"]]
      })], CompContactsFormComponent);
      /***/
    },

    /***/
    "./src/app/comp-contacts/comp-contacts-list/comp-contacts-list.component.scss":
    /*!************************************************************************************!*\
      !*** ./src/app/comp-contacts/comp-contacts-list/comp-contacts-list.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCompContactsCompContactsListCompContactsListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtY29udGFjdHMvY29tcC1jb250YWN0cy1saXN0L2NvbXAtY29udGFjdHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/comp-contacts/comp-contacts-list/comp-contacts-list.component.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/comp-contacts/comp-contacts-list/comp-contacts-list.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: CompContactsListComponent */

    /***/
    function srcAppCompContactsCompContactsListCompContactsListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompContactsListComponent", function () {
        return CompContactsListComponent;
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


      var _comp_contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../comp-contacts.service */
      "./src/app/comp-contacts/comp-contacts.service.ts");
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

      var CompContactsListComponent = /*#__PURE__*/function () {
        function CompContactsListComponent(compContactsService, api, loading) {
          _classCallCheck(this, CompContactsListComponent);

          this.compContactsService = compContactsService;
          this.api = api;
          this.loading = loading;
        }

        _createClass(CompContactsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.compContactsService.getCompContacts();
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            this.content.scrollToTop(300);
          }
        }]);

        return CompContactsListComponent;
      }();

      CompContactsListComponent.ctorParameters = function () {
        return [{
          type: _comp_contacts_service__WEBPACK_IMPORTED_MODULE_2__["CompContactsService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }];
      };

      CompContactsListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      CompContactsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-contacts-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./comp-contacts-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-contacts/comp-contacts-list/comp-contacts-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./comp-contacts-list.component.scss */
        "./src/app/comp-contacts/comp-contacts-list/comp-contacts-list.component.scss"))["default"]]
      })], CompContactsListComponent);
      /***/
    },

    /***/
    "./src/app/comp-contacts/comp-contacts-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/comp-contacts/comp-contacts-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: CompContactsPageRoutingModule */

    /***/
    function srcAppCompContactsCompContactsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompContactsPageRoutingModule", function () {
        return CompContactsPageRoutingModule;
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


      var _comp_contacts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./comp-contacts.page */
      "./src/app/comp-contacts/comp-contacts.page.ts");
      /* harmony import */


      var _comp_contacts_edit_comp_contacts_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./comp-contacts-edit/comp-contacts-edit.component */
      "./src/app/comp-contacts/comp-contacts-edit/comp-contacts-edit.component.ts");
      /* harmony import */


      var _comp_contacts_create_comp_contacts_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./comp-contacts-create/comp-contacts-create.component */
      "./src/app/comp-contacts/comp-contacts-create/comp-contacts-create.component.ts");
      /* harmony import */


      var _comp_contacts_list_comp_contacts_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./comp-contacts-list/comp-contacts-list.component */
      "./src/app/comp-contacts/comp-contacts-list/comp-contacts-list.component.ts");

      var routes = [{
        path: '',
        component: _comp_contacts_page__WEBPACK_IMPORTED_MODULE_3__["CompContactsPage"]
      }, {
        path: 'list',
        component: _comp_contacts_list_comp_contacts_list_component__WEBPACK_IMPORTED_MODULE_6__["CompContactsListComponent"]
      }, {
        path: 'create',
        component: _comp_contacts_create_comp_contacts_create_component__WEBPACK_IMPORTED_MODULE_5__["CompContactsCreateComponent"]
      }, {
        path: ':id/edit',
        component: _comp_contacts_edit_comp_contacts_edit_component__WEBPACK_IMPORTED_MODULE_4__["CompContactsEditComponent"]
      }];

      var CompContactsPageRoutingModule = function CompContactsPageRoutingModule() {
        _classCallCheck(this, CompContactsPageRoutingModule);
      };

      CompContactsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CompContactsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/comp-contacts/comp-contacts.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/comp-contacts/comp-contacts.module.ts ***!
      \*******************************************************/

    /*! exports provided: CompContactsPageModule */

    /***/
    function srcAppCompContactsCompContactsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompContactsPageModule", function () {
        return CompContactsPageModule;
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


      var _comp_contacts_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./comp-contacts-routing.module */
      "./src/app/comp-contacts/comp-contacts-routing.module.ts");
      /* harmony import */


      var _comp_contacts_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./comp-contacts.page */
      "./src/app/comp-contacts/comp-contacts.page.ts");
      /* harmony import */


      var _comp_contacts_list_comp_contacts_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./comp-contacts-list/comp-contacts-list.component */
      "./src/app/comp-contacts/comp-contacts-list/comp-contacts-list.component.ts");
      /* harmony import */


      var _comp_contacts_create_comp_contacts_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./comp-contacts-create/comp-contacts-create.component */
      "./src/app/comp-contacts/comp-contacts-create/comp-contacts-create.component.ts");
      /* harmony import */


      var _comp_contacts_duplicate_comp_contacts_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./comp-contacts-duplicate/comp-contacts-duplicate.component */
      "./src/app/comp-contacts/comp-contacts-duplicate/comp-contacts-duplicate.component.ts");
      /* harmony import */


      var _comp_contacts_edit_comp_contacts_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./comp-contacts-edit/comp-contacts-edit.component */
      "./src/app/comp-contacts/comp-contacts-edit/comp-contacts-edit.component.ts");
      /* harmony import */


      var _comp_contacts_form_comp_contacts_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./comp-contacts-form/comp-contacts-form.component */
      "./src/app/comp-contacts/comp-contacts-form/comp-contacts-form.component.ts");

      var CompContactsPageModule = function CompContactsPageModule() {
        _classCallCheck(this, CompContactsPageModule);
      };

      CompContactsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _comp_contacts_routing_module__WEBPACK_IMPORTED_MODULE_6__["CompContactsPageRoutingModule"]],
        declarations: [_comp_contacts_page__WEBPACK_IMPORTED_MODULE_7__["CompContactsPage"], _comp_contacts_list_comp_contacts_list_component__WEBPACK_IMPORTED_MODULE_8__["CompContactsListComponent"], _comp_contacts_create_comp_contacts_create_component__WEBPACK_IMPORTED_MODULE_9__["CompContactsCreateComponent"], _comp_contacts_duplicate_comp_contacts_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["CompContactsDuplicateComponent"], _comp_contacts_edit_comp_contacts_edit_component__WEBPACK_IMPORTED_MODULE_11__["CompContactsEditComponent"], _comp_contacts_form_comp_contacts_form_component__WEBPACK_IMPORTED_MODULE_12__["CompContactsFormComponent"]]
      })], CompContactsPageModule);
      /***/
    },

    /***/
    "./src/app/comp-contacts/comp-contacts.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/comp-contacts/comp-contacts.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCompContactsCompContactsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtY29udGFjdHMvY29tcC1jb250YWN0cy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/comp-contacts/comp-contacts.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/comp-contacts/comp-contacts.page.ts ***!
      \*****************************************************/

    /*! exports provided: CompContactsPage */

    /***/
    function srcAppCompContactsCompContactsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompContactsPage", function () {
        return CompContactsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CompContactsPage = /*#__PURE__*/function () {
        function CompContactsPage() {
          _classCallCheck(this, CompContactsPage);
        }

        _createClass(CompContactsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CompContactsPage;
      }();

      CompContactsPage.ctorParameters = function () {
        return [];
      };

      CompContactsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-contacts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./comp-contacts.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-contacts/comp-contacts.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./comp-contacts.page.scss */
        "./src/app/comp-contacts/comp-contacts.page.scss"))["default"]]
      })], CompContactsPage);
      /***/
    },

    /***/
    "./src/app/comp-contacts/comp-contacts.service.ts":
    /*!********************************************************!*\
      !*** ./src/app/comp-contacts/comp-contacts.service.ts ***!
      \********************************************************/

    /*! exports provided: CompContactsService */

    /***/
    function srcAppCompContactsCompContactsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompContactsService", function () {
        return CompContactsService;
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

      var CompContactsService = /*#__PURE__*/function () {
        function CompContactsService(api, alert, toast, router, navigation) {
          _classCallCheck(this, CompContactsService);

          this.api = api;
          this.alert = alert;
          this.toast = toast;
          this.router = router;
          this.navigation = navigation;
          this.compContactsUrl = 'comp-contacts';
          this.compContactsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
          this.compContacts = [];
          this.compContact = {};
          this.compContactLists = {};
          this.searchValue = '';
          this.perPage = 10;
          this.meta = null;
          this.page = 1;
          this.pagesContent = document.getElementById('pages-content');
        }

        _createClass(CompContactsService, [{
          key: "getCompContacts",
          value: function getCompContacts() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.compContactsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.compContacts = res.data;
              _this3.compContactLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editCompContact",
          value: function editCompContact(id) {
            var _this4 = this;

            this.api.get(this.compContactsUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.compContact = res.data.model;
              _this4.compContactLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateCompContact",
          value: function updateCompContact() {
            var _this5 = this;

            this.api.put(this.compContactsUrl + '/' + this.compContact.id, {
              model: this.compContact,
              pivots: {}
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getCompContacts(1);
            });
          }
        }, {
          key: "createCompContact",
          value: function createCompContact() {
            var _this6 = this;

            this.api.get(this.compContactsUrl + '/create').subscribe(function (res) {
              _this6.compContact = {};
              _this6.compContactLists = res.lists;
            });
          }
        }, {
          key: "storeCompContact",
          value: function storeCompContact() {
            var _this7 = this;

            this.api.post(this.compContactsUrl, {
              model: this.compContact,
              pivots: {}
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getCompContacts(1);
            });
          }
        }, {
          key: "deleteCompContact",
          value: function deleteCompContact(id) {
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

                      this.api["delete"](this.compContactsUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getCompContacts(1);
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

        return CompContactsService;
      }();

      CompContactsService.ctorParameters = function () {
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

      CompContactsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CompContactsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=comp-contacts-comp-contacts-module-es5.js.map