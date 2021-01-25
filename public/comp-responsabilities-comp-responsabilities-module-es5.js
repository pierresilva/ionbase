(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comp-responsabilities-comp-responsabilities-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-create/comp-responsabilities-create.component.html":
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-create/comp-responsabilities-create.component.html ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCompResponsabilitiesCompResponsabilitiesCreateCompResponsabilitiesCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/comp-responsabilities'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"compResponsabilitiesService.storeCompResponsability()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!compResponsabilitiesService.compResponsabilitiesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-comp-responsabilities-form #compResponsabilityForm [model]=\"compResponsabilitiesService.compResponsability\"></app-comp-responsabilities-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-duplicate/comp-responsabilities-duplicate.component.html":
    /*!************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-duplicate/comp-responsabilities-duplicate.component.html ***!
      \************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCompResponsabilitiesCompResponsabilitiesDuplicateCompResponsabilitiesDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\r\n  CompResponsabilities duplicate works!\r\n</p>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-edit/comp-responsabilities-edit.component.html":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-edit/comp-responsabilities-edit.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCompResponsabilitiesCompResponsabilitiesEditCompResponsabilitiesEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/comp-responsabilities'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"compResponsabilitiesService.updateCompResponsability()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!compResponsabilitiesService.compResponsabilitiesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase}}: {{ compResponsabilitiesService.compResponsability?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-comp-responsabilities-form #compResponsabilityForm [model]=\"compResponsabilitiesService.compResponsability\"></app-comp-responsabilities-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-form/comp-responsabilities-form.component.html":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-form/comp-responsabilities-form.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCompResponsabilitiesCompResponsabilitiesFormCompResponsabilitiesFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #compResponsabilitiesForm=\"ngForm\" novalidate autocomplete=\"off\">\r\n\r\n\r\n    <!-- company_id -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'EMPRESA' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"company_id\"\r\n                          id=\"company_id-field\"\r\n                          [required]=\"true\"\r\n                          [(ngModel)]=\"model.company\"\r\n                          [items]=\"compResponsabilitiesService.compResponsabilityLists.Company\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('EMPRESAS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('EMPRESAS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setCompanyId($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.company_id\">\r\n            <div class=\"error-message\" *ngIf=\"compResponsabilitiesForm.form.controls['company_id']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end company_id -->\r\n\r\n\r\n    <!-- syst_parameter_id -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'PARAMETRO' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"syst_parameter_id\"\r\n                          id=\"syst_parameter_id-field\"\r\n                          [required]=\"true\"\r\n                          [(ngModel)]=\"model.syst_parameter\"\r\n                          [items]=\"compResponsabilitiesService.compResponsabilityLists.SystParameter\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('PARAMETROS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('PARAMETROS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setSystParameterId($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.syst_parameter_id\">\r\n            <div class=\"error-message\" *ngIf=\"compResponsabilitiesForm.form.controls['syst_parameter_id']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end syst_parameter_id -->\r\n\r\n\r\n            <!-- name -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.name\"\r\n                            type=\"text\"\r\n                            name=\"name\"\r\n                            id=\"name-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n                    <div class=\"error-message\" *ngIf=\"compResponsabilitiesForm.form.controls['name']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end name -->\r\n\r\n\r\n</form>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-list/comp-responsabilities-list.component.html":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-list/comp-responsabilities-list.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCompResponsabilitiesCompResponsabilitiesListCompResponsabilitiesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase}}\"\r\n                 primaryLink=\"comp-responsabilities/create\"\r\n                 primaryText=\"Crear {{'EMPRESAS RESPONSABILIDADES LEGALES' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-searchbar showCancelButton=\"focus\"\r\n                       [cancelButtonText]=\"'Cancelar'\"\r\n                       [placeholder]=\"'Buscar ' + ('EMPRESAS RESPONSABILIDADES LEGALES' | lowercase )\"\r\n                       (ionCancel)=\"this.compResponsabilitiesService.searchValue = ''; compResponsabilitiesService.getCompResponsabilities()\"\r\n                       (keyup.enter)=\"compResponsabilitiesService.getCompResponsabilities()\"\r\n                       [(ngModel)]=\"compResponsabilitiesService.searchValue\"></ion-searchbar>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && compResponsabilitiesService.compResponsabilities?.length\">\r\n        <ion-card *ngFor=\"let compResponsability of compResponsabilitiesService.compResponsabilities; let index = index\">\r\n            <ion-list>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ compResponsability?.name }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'EMPRESAS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\"><a routerLink=\"/companies/{{ compResponsability?.company?.id }}/edit\">{{ compResponsability?.company?.name }}</a></div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'PARAMETROS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\"><a routerLink=\"/syst-parameters/{{ compResponsability?.syst_parameter?.id }}/edit\">{{ compResponsability?.syst_parameter?.name }}</a></div>\r\n                    </ion-item>\r\n            </ion-list>\r\n            <ion-footer>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/comp-responsabilities/' + compResponsability?.id + '/edit'\">\r\n                            <ion-icon name=\"create-outline\"></ion-icon>\r\n                            <div>Editar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"compResponsabilitiesService.deleteCompResponsability(compResponsability?.id)\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            <div>Eliminar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-footer>\r\n        </ion-card>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && !compResponsabilitiesService.compResponsabilities?.length\">\r\n        <ion-item>\r\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label><h2>No se encontraron {{'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase}}</h2></ion-label>\r\n            <ion-button [routerLink]=\"'/comp-responsabilities/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\r\n                Crear {{'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase}}\r\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"compResponsabilitiesService.meta\">\r\n        <ion-col class=\"ion-text-center\" size=\"12\">\r\n            <ion-button (click)=\"compResponsabilitiesService.getCompResponsabilities(compResponsabilitiesService.meta.current_page - 1)\"\r\n                        [disabled]=\"compResponsabilitiesService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{compResponsabilitiesService.meta.current_page}}\r\n                /{{compResponsabilitiesService.meta.last_page}} {{compResponsabilitiesService.meta.from}}-{{compResponsabilitiesService.meta.to}}\r\n                /{{compResponsabilitiesService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"compResponsabilitiesService.getCompResponsabilities(compResponsabilitiesService.meta.current_page + 1)\"\r\n                        [disabled]=\"compResponsabilitiesService.meta.current_page == compResponsabilitiesService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities.page.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCompResponsabilitiesCompResponsabilitiesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"EMPRESAS RESPONSABILIDADES LEGALES\"></app-main-header>\r\n\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/comp-responsabilities/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'EMPRESAS RESPONSABILIDADES LEGALES'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/comp-responsabilities/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/comp-responsabilities/comp-responsabilities-create/comp-responsabilities-create.component.scss":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/comp-responsabilities/comp-responsabilities-create/comp-responsabilities-create.component.scss ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCompResponsabilitiesCompResponsabilitiesCreateCompResponsabilitiesCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtcmVzcG9uc2FiaWxpdGllcy9jb21wLXJlc3BvbnNhYmlsaXRpZXMtY3JlYXRlL2NvbXAtcmVzcG9uc2FiaWxpdGllcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/comp-responsabilities/comp-responsabilities-create/comp-responsabilities-create.component.ts":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/comp-responsabilities/comp-responsabilities-create/comp-responsabilities-create.component.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: CompResponsabilitiesCreateComponent */

    /***/
    function srcAppCompResponsabilitiesCompResponsabilitiesCreateCompResponsabilitiesCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompResponsabilitiesCreateComponent", function () {
        return CompResponsabilitiesCreateComponent;
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


      var _comp_responsabilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../comp-responsabilities.service */
      "./src/app/comp-responsabilities/comp-responsabilities.service.ts");
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

      var CompResponsabilitiesCreateComponent = /*#__PURE__*/function () {
        function CompResponsabilitiesCreateComponent(compResponsabilitiesService, route, platform, splitPanel) {
          _classCallCheck(this, CompResponsabilitiesCreateComponent);

          this.compResponsabilitiesService = compResponsabilitiesService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.formValid = false;
        }

        _createClass(CompResponsabilitiesCreateComponent, [{
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

            this.compResponsabilityForm.compResponsabilitiesForm.valueChanges.subscribe(function (data) {
              _this.compResponsabilitiesService.compResponsabilitiesFormValid.next(_this.compResponsabilityForm.compResponsabilitiesForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.compResponsabilitiesService.createCompResponsability();
            this.compResponsabilitiesService.compResponsability = {};
          }
        }]);

        return CompResponsabilitiesCreateComponent;
      }();

      CompResponsabilitiesCreateComponent.ctorParameters = function () {
        return [{
          type: _comp_responsabilities_service__WEBPACK_IMPORTED_MODULE_2__["CompResponsabilitiesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      CompResponsabilitiesCreateComponent.propDecorators = {
        compResponsabilityForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['compResponsabilityForm']
        }]
      };
      CompResponsabilitiesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-responsabilities-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./comp-responsabilities-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-create/comp-responsabilities-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./comp-responsabilities-create.component.scss */
        "./src/app/comp-responsabilities/comp-responsabilities-create/comp-responsabilities-create.component.scss"))["default"]]
      })], CompResponsabilitiesCreateComponent);
      /***/
    },

    /***/
    "./src/app/comp-responsabilities/comp-responsabilities-duplicate/comp-responsabilities-duplicate.component.scss":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/comp-responsabilities/comp-responsabilities-duplicate/comp-responsabilities-duplicate.component.scss ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCompResponsabilitiesCompResponsabilitiesDuplicateCompResponsabilitiesDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtcmVzcG9uc2FiaWxpdGllcy9jb21wLXJlc3BvbnNhYmlsaXRpZXMtZHVwbGljYXRlL2NvbXAtcmVzcG9uc2FiaWxpdGllcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/comp-responsabilities/comp-responsabilities-duplicate/comp-responsabilities-duplicate.component.ts":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/comp-responsabilities/comp-responsabilities-duplicate/comp-responsabilities-duplicate.component.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: CompResponsabilitiesDuplicateComponent */

    /***/
    function srcAppCompResponsabilitiesCompResponsabilitiesDuplicateCompResponsabilitiesDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompResponsabilitiesDuplicateComponent", function () {
        return CompResponsabilitiesDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CompResponsabilitiesDuplicateComponent = /*#__PURE__*/function () {
        function CompResponsabilitiesDuplicateComponent() {
          _classCallCheck(this, CompResponsabilitiesDuplicateComponent);
        }

        _createClass(CompResponsabilitiesDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CompResponsabilitiesDuplicateComponent;
      }();

      CompResponsabilitiesDuplicateComponent.ctorParameters = function () {
        return [];
      };

      CompResponsabilitiesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-responsabilities-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./comp-responsabilities-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-duplicate/comp-responsabilities-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./comp-responsabilities-duplicate.component.scss */
        "./src/app/comp-responsabilities/comp-responsabilities-duplicate/comp-responsabilities-duplicate.component.scss"))["default"]]
      })], CompResponsabilitiesDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/comp-responsabilities/comp-responsabilities-edit/comp-responsabilities-edit.component.scss":
    /*!************************************************************************************************************!*\
      !*** ./src/app/comp-responsabilities/comp-responsabilities-edit/comp-responsabilities-edit.component.scss ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCompResponsabilitiesCompResponsabilitiesEditCompResponsabilitiesEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtcmVzcG9uc2FiaWxpdGllcy9jb21wLXJlc3BvbnNhYmlsaXRpZXMtZWRpdC9jb21wLXJlc3BvbnNhYmlsaXRpZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/comp-responsabilities/comp-responsabilities-edit/comp-responsabilities-edit.component.ts":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/comp-responsabilities/comp-responsabilities-edit/comp-responsabilities-edit.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: CompResponsabilitiesEditComponent */

    /***/
    function srcAppCompResponsabilitiesCompResponsabilitiesEditCompResponsabilitiesEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompResponsabilitiesEditComponent", function () {
        return CompResponsabilitiesEditComponent;
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


      var _comp_responsabilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../comp-responsabilities.service */
      "./src/app/comp-responsabilities/comp-responsabilities.service.ts");
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

      var CompResponsabilitiesEditComponent = /*#__PURE__*/function () {
        function CompResponsabilitiesEditComponent(compResponsabilitiesService, route, platform, splitPanel) {
          _classCallCheck(this, CompResponsabilitiesEditComponent);

          this.compResponsabilitiesService = compResponsabilitiesService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.model = null;
        }

        _createClass(CompResponsabilitiesEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.compResponsabilitiesService.editCompResponsability(this.id);
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

            this.compResponsabilityForm.compResponsabilitiesForm.valueChanges.subscribe(function (data) {
              _this2.compResponsabilitiesService.compResponsabilitiesFormValid.next(_this2.compResponsabilityForm.compResponsabilitiesForm.valid);
            });
          }
        }]);

        return CompResponsabilitiesEditComponent;
      }();

      CompResponsabilitiesEditComponent.ctorParameters = function () {
        return [{
          type: _comp_responsabilities_service__WEBPACK_IMPORTED_MODULE_2__["CompResponsabilitiesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      CompResponsabilitiesEditComponent.propDecorators = {
        compResponsabilityForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['compResponsabilityForm']
        }]
      };
      CompResponsabilitiesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-responsabilities-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./comp-responsabilities-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-edit/comp-responsabilities-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./comp-responsabilities-edit.component.scss */
        "./src/app/comp-responsabilities/comp-responsabilities-edit/comp-responsabilities-edit.component.scss"))["default"]]
      })], CompResponsabilitiesEditComponent);
      /***/
    },

    /***/
    "./src/app/comp-responsabilities/comp-responsabilities-form/comp-responsabilities-form.component.scss":
    /*!************************************************************************************************************!*\
      !*** ./src/app/comp-responsabilities/comp-responsabilities-form/comp-responsabilities-form.component.scss ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCompResponsabilitiesCompResponsabilitiesFormCompResponsabilitiesFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtcmVzcG9uc2FiaWxpdGllcy9jb21wLXJlc3BvbnNhYmlsaXRpZXMtZm9ybS9jb21wLXJlc3BvbnNhYmlsaXRpZXMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/comp-responsabilities/comp-responsabilities-form/comp-responsabilities-form.component.ts":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/comp-responsabilities/comp-responsabilities-form/comp-responsabilities-form.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: CompResponsabilitiesFormComponent */

    /***/
    function srcAppCompResponsabilitiesCompResponsabilitiesFormCompResponsabilitiesFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompResponsabilitiesFormComponent", function () {
        return CompResponsabilitiesFormComponent;
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


      var _comp_responsabilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../comp-responsabilities.service */
      "./src/app/comp-responsabilities/comp-responsabilities.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var CompResponsabilitiesFormComponent = /*#__PURE__*/function () {
        function CompResponsabilitiesFormComponent(compResponsabilitiesService, toTitlecase) {
          _classCallCheck(this, CompResponsabilitiesFormComponent);

          this.compResponsabilitiesService = compResponsabilitiesService;
          this.toTitlecase = toTitlecase;
          this.model = {};
          this.validationMessages = {
            'name': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'
            }],
            'company_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('company - NAME') + ' es obligatorio.'
            }],
            'syst_parameter_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('RESPONSABILIDAD LEGAL') + ' es obligatorio.'
            }]
          };
        }

        _createClass(CompResponsabilitiesFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // set setCompanyId

        }, {
          key: "setCompanyId",
          value: function setCompanyId(event) {
            this.compResponsabilitiesService.compResponsability.company_id = event.value ? event.value.id : null;
          } // end setCompanyId
          // set setSystParameterId

        }, {
          key: "setSystParameterId",
          value: function setSystParameterId(event) {
            this.compResponsabilitiesService.compResponsability.syst_parameter_id = event.value ? event.value.id : null;
          }
        }]);

        return CompResponsabilitiesFormComponent;
      }();

      CompResponsabilitiesFormComponent.ctorParameters = function () {
        return [{
          type: _comp_responsabilities_service__WEBPACK_IMPORTED_MODULE_2__["CompResponsabilitiesService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      CompResponsabilitiesFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        compResponsabilitiesForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['compResponsabilitiesForm']
        }]
      };
      CompResponsabilitiesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-responsabilities-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./comp-responsabilities-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-form/comp-responsabilities-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./comp-responsabilities-form.component.scss */
        "./src/app/comp-responsabilities/comp-responsabilities-form/comp-responsabilities-form.component.scss"))["default"]]
      })], CompResponsabilitiesFormComponent);
      /***/
    },

    /***/
    "./src/app/comp-responsabilities/comp-responsabilities-list/comp-responsabilities-list.component.scss":
    /*!************************************************************************************************************!*\
      !*** ./src/app/comp-responsabilities/comp-responsabilities-list/comp-responsabilities-list.component.scss ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCompResponsabilitiesCompResponsabilitiesListCompResponsabilitiesListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtcmVzcG9uc2FiaWxpdGllcy9jb21wLXJlc3BvbnNhYmlsaXRpZXMtbGlzdC9jb21wLXJlc3BvbnNhYmlsaXRpZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/comp-responsabilities/comp-responsabilities-list/comp-responsabilities-list.component.ts":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/comp-responsabilities/comp-responsabilities-list/comp-responsabilities-list.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: CompResponsabilitiesListComponent */

    /***/
    function srcAppCompResponsabilitiesCompResponsabilitiesListCompResponsabilitiesListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompResponsabilitiesListComponent", function () {
        return CompResponsabilitiesListComponent;
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


      var _comp_responsabilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../comp-responsabilities.service */
      "./src/app/comp-responsabilities/comp-responsabilities.service.ts");
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

      var CompResponsabilitiesListComponent = /*#__PURE__*/function () {
        function CompResponsabilitiesListComponent(compResponsabilitiesService, api, loading, splitPanel) {
          _classCallCheck(this, CompResponsabilitiesListComponent);

          this.compResponsabilitiesService = compResponsabilitiesService;
          this.api = api;
          this.loading = loading;
          this.splitPanel = splitPanel;
        }

        _createClass(CompResponsabilitiesListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.compResponsabilitiesService.getCompResponsabilities();
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

        return CompResponsabilitiesListComponent;
      }();

      CompResponsabilitiesListComponent.ctorParameters = function () {
        return [{
          type: _comp_responsabilities_service__WEBPACK_IMPORTED_MODULE_2__["CompResponsabilitiesService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"]
        }];
      };

      CompResponsabilitiesListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      CompResponsabilitiesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-responsabilities-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./comp-responsabilities-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities-list/comp-responsabilities-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./comp-responsabilities-list.component.scss */
        "./src/app/comp-responsabilities/comp-responsabilities-list/comp-responsabilities-list.component.scss"))["default"]]
      })], CompResponsabilitiesListComponent);
      /***/
    },

    /***/
    "./src/app/comp-responsabilities/comp-responsabilities-routing.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/comp-responsabilities/comp-responsabilities-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: CompResponsabilitiesPageRoutingModule */

    /***/
    function srcAppCompResponsabilitiesCompResponsabilitiesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompResponsabilitiesPageRoutingModule", function () {
        return CompResponsabilitiesPageRoutingModule;
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


      var _comp_responsabilities_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./comp-responsabilities.page */
      "./src/app/comp-responsabilities/comp-responsabilities.page.ts");
      /* harmony import */


      var _comp_responsabilities_edit_comp_responsabilities_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./comp-responsabilities-edit/comp-responsabilities-edit.component */
      "./src/app/comp-responsabilities/comp-responsabilities-edit/comp-responsabilities-edit.component.ts");
      /* harmony import */


      var _comp_responsabilities_create_comp_responsabilities_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./comp-responsabilities-create/comp-responsabilities-create.component */
      "./src/app/comp-responsabilities/comp-responsabilities-create/comp-responsabilities-create.component.ts");
      /* harmony import */


      var _comp_responsabilities_list_comp_responsabilities_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./comp-responsabilities-list/comp-responsabilities-list.component */
      "./src/app/comp-responsabilities/comp-responsabilities-list/comp-responsabilities-list.component.ts");

      var routes = [{
        path: '',
        component: _comp_responsabilities_page__WEBPACK_IMPORTED_MODULE_3__["CompResponsabilitiesPage"]
      }, {
        path: 'list',
        component: _comp_responsabilities_list_comp_responsabilities_list_component__WEBPACK_IMPORTED_MODULE_6__["CompResponsabilitiesListComponent"]
      }, {
        path: 'create',
        component: _comp_responsabilities_create_comp_responsabilities_create_component__WEBPACK_IMPORTED_MODULE_5__["CompResponsabilitiesCreateComponent"]
      }, {
        path: ':id/edit',
        component: _comp_responsabilities_edit_comp_responsabilities_edit_component__WEBPACK_IMPORTED_MODULE_4__["CompResponsabilitiesEditComponent"]
      }];

      var CompResponsabilitiesPageRoutingModule = function CompResponsabilitiesPageRoutingModule() {
        _classCallCheck(this, CompResponsabilitiesPageRoutingModule);
      };

      CompResponsabilitiesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CompResponsabilitiesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/comp-responsabilities/comp-responsabilities.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/comp-responsabilities/comp-responsabilities.module.ts ***!
      \***********************************************************************/

    /*! exports provided: CompResponsabilitiesPageModule */

    /***/
    function srcAppCompResponsabilitiesCompResponsabilitiesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompResponsabilitiesPageModule", function () {
        return CompResponsabilitiesPageModule;
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


      var _comp_responsabilities_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./comp-responsabilities-routing.module */
      "./src/app/comp-responsabilities/comp-responsabilities-routing.module.ts");
      /* harmony import */


      var _comp_responsabilities_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./comp-responsabilities.page */
      "./src/app/comp-responsabilities/comp-responsabilities.page.ts");
      /* harmony import */


      var _comp_responsabilities_list_comp_responsabilities_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./comp-responsabilities-list/comp-responsabilities-list.component */
      "./src/app/comp-responsabilities/comp-responsabilities-list/comp-responsabilities-list.component.ts");
      /* harmony import */


      var _comp_responsabilities_create_comp_responsabilities_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./comp-responsabilities-create/comp-responsabilities-create.component */
      "./src/app/comp-responsabilities/comp-responsabilities-create/comp-responsabilities-create.component.ts");
      /* harmony import */


      var _comp_responsabilities_duplicate_comp_responsabilities_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./comp-responsabilities-duplicate/comp-responsabilities-duplicate.component */
      "./src/app/comp-responsabilities/comp-responsabilities-duplicate/comp-responsabilities-duplicate.component.ts");
      /* harmony import */


      var _comp_responsabilities_edit_comp_responsabilities_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./comp-responsabilities-edit/comp-responsabilities-edit.component */
      "./src/app/comp-responsabilities/comp-responsabilities-edit/comp-responsabilities-edit.component.ts");
      /* harmony import */


      var _comp_responsabilities_form_comp_responsabilities_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./comp-responsabilities-form/comp-responsabilities-form.component */
      "./src/app/comp-responsabilities/comp-responsabilities-form/comp-responsabilities-form.component.ts");

      var CompResponsabilitiesPageModule = function CompResponsabilitiesPageModule() {
        _classCallCheck(this, CompResponsabilitiesPageModule);
      };

      CompResponsabilitiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _comp_responsabilities_routing_module__WEBPACK_IMPORTED_MODULE_6__["CompResponsabilitiesPageRoutingModule"]],
        declarations: [_comp_responsabilities_page__WEBPACK_IMPORTED_MODULE_7__["CompResponsabilitiesPage"], _comp_responsabilities_list_comp_responsabilities_list_component__WEBPACK_IMPORTED_MODULE_8__["CompResponsabilitiesListComponent"], _comp_responsabilities_create_comp_responsabilities_create_component__WEBPACK_IMPORTED_MODULE_9__["CompResponsabilitiesCreateComponent"], _comp_responsabilities_duplicate_comp_responsabilities_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["CompResponsabilitiesDuplicateComponent"], _comp_responsabilities_edit_comp_responsabilities_edit_component__WEBPACK_IMPORTED_MODULE_11__["CompResponsabilitiesEditComponent"], _comp_responsabilities_form_comp_responsabilities_form_component__WEBPACK_IMPORTED_MODULE_12__["CompResponsabilitiesFormComponent"]]
      })], CompResponsabilitiesPageModule);
      /***/
    },

    /***/
    "./src/app/comp-responsabilities/comp-responsabilities.page.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/comp-responsabilities/comp-responsabilities.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCompResponsabilitiesCompResponsabilitiesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAtcmVzcG9uc2FiaWxpdGllcy9jb21wLXJlc3BvbnNhYmlsaXRpZXMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/comp-responsabilities/comp-responsabilities.page.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/comp-responsabilities/comp-responsabilities.page.ts ***!
      \*********************************************************************/

    /*! exports provided: CompResponsabilitiesPage */

    /***/
    function srcAppCompResponsabilitiesCompResponsabilitiesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompResponsabilitiesPage", function () {
        return CompResponsabilitiesPage;
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

      var CompResponsabilitiesPage = /*#__PURE__*/function () {
        function CompResponsabilitiesPage(splitPanel) {
          _classCallCheck(this, CompResponsabilitiesPage);

          this.splitPanel = splitPanel;
        }

        _createClass(CompResponsabilitiesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }]);

        return CompResponsabilitiesPage;
      }();

      CompResponsabilitiesPage.ctorParameters = function () {
        return [{
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"]
        }];
      };

      CompResponsabilitiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-responsabilities',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./comp-responsabilities.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/comp-responsabilities/comp-responsabilities.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./comp-responsabilities.page.scss */
        "./src/app/comp-responsabilities/comp-responsabilities.page.scss"))["default"]]
      })], CompResponsabilitiesPage);
      /***/
    },

    /***/
    "./src/app/comp-responsabilities/comp-responsabilities.service.ts":
    /*!************************************************************************!*\
      !*** ./src/app/comp-responsabilities/comp-responsabilities.service.ts ***!
      \************************************************************************/

    /*! exports provided: CompResponsabilitiesService */

    /***/
    function srcAppCompResponsabilitiesCompResponsabilitiesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompResponsabilitiesService", function () {
        return CompResponsabilitiesService;
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

      var CompResponsabilitiesService = /*#__PURE__*/function () {
        function CompResponsabilitiesService(api, alert, toast, router, navigation) {
          _classCallCheck(this, CompResponsabilitiesService);

          this.api = api;
          this.alert = alert;
          this.toast = toast;
          this.router = router;
          this.navigation = navigation;
          this.compResponsabilitiesUrl = 'comp-responsabilities';
          this.compResponsabilitiesFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
          this.compResponsabilities = [];
          this.compResponsability = {};
          this.compResponsabilityLists = {};
          this.searchValue = '';
          this.perPage = 10;
          this.meta = null;
          this.page = 1;
          this.pagesContent = document.getElementById('pages-content');
        }

        _createClass(CompResponsabilitiesService, [{
          key: "getCompResponsabilities",
          value: function getCompResponsabilities() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.compResponsabilitiesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.compResponsabilities = res.data;
              _this3.compResponsabilityLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editCompResponsability",
          value: function editCompResponsability(id) {
            var _this4 = this;

            this.api.get(this.compResponsabilitiesUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.compResponsability = res.data.model;
              _this4.compResponsabilityLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateCompResponsability",
          value: function updateCompResponsability() {
            var _this5 = this;

            this.api.put(this.compResponsabilitiesUrl + '/' + this.compResponsability.id, {
              model: this.compResponsability,
              pivots: {}
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getCompResponsabilities(1);
            });
          }
        }, {
          key: "createCompResponsability",
          value: function createCompResponsability() {
            var _this6 = this;

            this.api.get(this.compResponsabilitiesUrl + '/create').subscribe(function (res) {
              _this6.compResponsability = {};
              _this6.compResponsabilityLists = res.lists;
            });
          }
        }, {
          key: "storeCompResponsability",
          value: function storeCompResponsability() {
            var _this7 = this;

            this.api.post(this.compResponsabilitiesUrl, {
              model: this.compResponsability,
              pivots: {}
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getCompResponsabilities(1);
            });
          }
        }, {
          key: "deleteCompResponsability",
          value: function deleteCompResponsability(id) {
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

                      this.api["delete"](this.compResponsabilitiesUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getCompResponsabilities(1);
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

        return CompResponsabilitiesService;
      }();

      CompResponsabilitiesService.ctorParameters = function () {
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

      CompResponsabilitiesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CompResponsabilitiesService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=comp-responsabilities-comp-responsabilities-module-es5.js.map