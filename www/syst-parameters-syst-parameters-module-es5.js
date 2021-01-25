(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["syst-parameters-syst-parameters-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-create/syst-parameters-create.component.html":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-create/syst-parameters-create.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSystParametersSystParametersCreateSystParametersCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/syst-parameters'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"systParametersService.storeSystParameter()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!systParametersService.systParametersFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'PARAMETROS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-syst-parameters-form #systParameterForm [model]=\"systParametersService.systParameter\"></app-syst-parameters-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-duplicate/syst-parameters-duplicate.component.html":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-duplicate/syst-parameters-duplicate.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSystParametersSystParametersDuplicateSystParametersDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  SystParameters duplicate works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-edit/syst-parameters-edit.component.html":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-edit/syst-parameters-edit.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSystParametersSystParametersEditSystParametersEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/syst-parameters'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"systParametersService.updateSystParameter()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!systParametersService.systParametersFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'PARAMETROS' | titlecase}}: {{ systParametersService.systParameter?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-syst-parameters-form #systParameterForm [model]=\"systParametersService.systParameter\"></app-syst-parameters-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-form/syst-parameters-form.component.html":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-form/syst-parameters-form.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSystParametersSystParametersFormSystParametersFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #systParametersForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- syst_parameter_group_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'GRUPOSDEPARAMETRO' | titlecase }}</ion-label>\n        <ionic-selectable name=\"syst_parameter_group_id\"\n                          id=\"syst_parameter_group_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.syst_parameter_group\"\n                          [items]=\"systParametersService.systParameterLists.SystParameterGroup\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('GRUPOS DE PARAMETROS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('GRUPOS DE PARAMETROS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setSystParameterGroupId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.syst_parameter_group_id\">\n            <div class=\"error-message\" *ngIf=\"systParametersForm.form.controls['syst_parameter_group_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end syst_parameter_group_id -->\n\n\n    <!-- comp_responsability_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase }}</ion-label>\n        <ionic-selectable name=\"comp_responsability_ids\"\n                          id=\"comp_responsability_ids-field\"\n                          [(ngModel)]=\"model.comp_responsabilities\"\n                          [items]=\"systParametersService.systParameterLists.CompResponsability\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('EMPRESAS RESPONSABILIDADES LEGALES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('EMPRESAS RESPONSABILIDADES LEGALES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setCompResponsabilityIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.comp_responsability_ids\">\n            <div class=\"error-message\" *ngIf=\"systParametersForm.form.controls['comp_responsability_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end comp_responsability_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"systParametersForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- code -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'CÓDIGO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.code\"\n                            type=\"text\"\n                            name=\"code\"\n                            id=\"code-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.code\">\n                    <div class=\"error-message\" *ngIf=\"systParametersForm.form.controls['code']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end code -->\n\n\n            <!-- riched_text -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'TEXTO ENRIQUECIDO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.riched_text\"\n                            type=\"text\"\n                            name=\"riched_text\"\n                            id=\"riched_text-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.riched_text\">\n                    <div class=\"error-message\" *ngIf=\"systParametersForm.form.controls['riched_text']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end riched_text -->\n\n\n            <!-- value -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'VALOR' | titlecase }}</ion-label>\n                <ion-textarea [(ngModel)]=\"model.value\"\n                              name=\"value\"\n                              id=\"value-field\"\n                              [required]=\"true\"\n                              rows=\"6\"\n                              placeholder=\"\"></ion-textarea>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.value\">\n                    <div class=\"error-message\" *ngIf=\"systParametersForm.form.controls['value']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end value -->\n\n\n</form>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-list/syst-parameters-list.component.html":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-list/syst-parameters-list.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSystParametersSystParametersListSystParametersListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'PARAMETROS' | titlecase}}\"\n                 primaryLink=\"syst-parameters/create\"\n                 primaryText=\"Crear {{'PARAMETROS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('PARAMETROS' | lowercase )\"\n                       (ionCancel)=\"this.systParametersService.searchValue = ''; systParametersService.getSystParameters()\"\n                       (keyup.enter)=\"systParametersService.getSystParameters()\"\n                       [(ngModel)]=\"systParametersService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && systParametersService.systParameters?.length\">\n        <ion-card *ngFor=\"let systParameter of systParametersService.systParameters; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ systParameter?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CÓDIGO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ systParameter?.code }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'TEXTO ENRIQUECIDO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ systParameter?.riched_text }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'VALOR' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ systParameter?.value }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'GRUPOS DE PARAMETROS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/syst-parameter-groups/{{ systParameter?.syst_parameter_group?.id }}/edit\">{{ systParameter?.syst_parameter_group?.name }}</a></div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"systParameter?.comp_responsabilities?.length\">\n                                <ng-container *ngFor=\"let compResponsability of systParameter?.comp_responsabilities; let last = last\">\n                                    <a routerLink=\"/comp-responsabilities/{{ compResponsability?.id }}/edit\">{{ compResponsability?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/syst-parameters/' + systParameter?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"systParametersService.deleteSystParameter(systParameter?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !systParametersService.systParameters?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'PARAMETROS' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/syst-parameters/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'PARAMETROS' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"systParametersService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"systParametersService.getSystParameters(systParametersService.meta.current_page - 1)\"\n                        [disabled]=\"systParametersService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{systParametersService.meta.current_page}}\n                /{{systParametersService.meta.last_page}} {{systParametersService.meta.from}}-{{systParametersService.meta.to}}\n                /{{systParametersService.meta.total}} </ion-button>\n            <ion-button (click)=\"systParametersService.getSystParameters(systParametersService.meta.current_page + 1)\"\n                        [disabled]=\"systParametersService.meta.current_page == systParametersService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSystParametersSystParametersPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"PARAMETROS\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/syst-parameters/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'PARAMETROS'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/syst-parameters/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'PARAMETROS' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/syst-parameters/syst-parameters-create/syst-parameters-create.component.scss":
    /*!**********************************************************************************************!*\
      !*** ./src/app/syst-parameters/syst-parameters-create/syst-parameters-create.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSystParametersSystParametersCreateSystParametersCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcGFyYW1ldGVycy9zeXN0LXBhcmFtZXRlcnMtY3JlYXRlL3N5c3QtcGFyYW1ldGVycy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/syst-parameters/syst-parameters-create/syst-parameters-create.component.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/syst-parameters/syst-parameters-create/syst-parameters-create.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: SystParametersCreateComponent */

    /***/
    function srcAppSystParametersSystParametersCreateSystParametersCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystParametersCreateComponent", function () {
        return SystParametersCreateComponent;
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


      var _syst_parameters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../syst-parameters.service */
      "./src/app/syst-parameters/syst-parameters.service.ts");
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

      var SystParametersCreateComponent = /*#__PURE__*/function () {
        function SystParametersCreateComponent(systParametersService, route, platform, splitPanel) {
          _classCallCheck(this, SystParametersCreateComponent);

          this.systParametersService = systParametersService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.formValid = false;
        }

        _createClass(SystParametersCreateComponent, [{
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

            this.systParameterForm.systParametersForm.valueChanges.subscribe(function (data) {
              _this.systParametersService.systParametersFormValid.next(_this.systParameterForm.systParametersForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.systParametersService.createSystParameter();
            this.systParametersService.systParameter = {};
          }
        }]);

        return SystParametersCreateComponent;
      }();

      SystParametersCreateComponent.ctorParameters = function () {
        return [{
          type: _syst_parameters_service__WEBPACK_IMPORTED_MODULE_2__["SystParametersService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      SystParametersCreateComponent.propDecorators = {
        systParameterForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['systParameterForm']
        }]
      };
      SystParametersCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-parameters-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./syst-parameters-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-create/syst-parameters-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./syst-parameters-create.component.scss */
        "./src/app/syst-parameters/syst-parameters-create/syst-parameters-create.component.scss"))["default"]]
      })], SystParametersCreateComponent);
      /***/
    },

    /***/
    "./src/app/syst-parameters/syst-parameters-duplicate/syst-parameters-duplicate.component.scss":
    /*!****************************************************************************************************!*\
      !*** ./src/app/syst-parameters/syst-parameters-duplicate/syst-parameters-duplicate.component.scss ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSystParametersSystParametersDuplicateSystParametersDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcGFyYW1ldGVycy9zeXN0LXBhcmFtZXRlcnMtZHVwbGljYXRlL3N5c3QtcGFyYW1ldGVycy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/syst-parameters/syst-parameters-duplicate/syst-parameters-duplicate.component.ts":
    /*!**************************************************************************************************!*\
      !*** ./src/app/syst-parameters/syst-parameters-duplicate/syst-parameters-duplicate.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: SystParametersDuplicateComponent */

    /***/
    function srcAppSystParametersSystParametersDuplicateSystParametersDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystParametersDuplicateComponent", function () {
        return SystParametersDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SystParametersDuplicateComponent = /*#__PURE__*/function () {
        function SystParametersDuplicateComponent() {
          _classCallCheck(this, SystParametersDuplicateComponent);
        }

        _createClass(SystParametersDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SystParametersDuplicateComponent;
      }();

      SystParametersDuplicateComponent.ctorParameters = function () {
        return [];
      };

      SystParametersDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-parameters-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./syst-parameters-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-duplicate/syst-parameters-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./syst-parameters-duplicate.component.scss */
        "./src/app/syst-parameters/syst-parameters-duplicate/syst-parameters-duplicate.component.scss"))["default"]]
      })], SystParametersDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/syst-parameters/syst-parameters-edit/syst-parameters-edit.component.scss":
    /*!******************************************************************************************!*\
      !*** ./src/app/syst-parameters/syst-parameters-edit/syst-parameters-edit.component.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSystParametersSystParametersEditSystParametersEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcGFyYW1ldGVycy9zeXN0LXBhcmFtZXRlcnMtZWRpdC9zeXN0LXBhcmFtZXRlcnMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/syst-parameters/syst-parameters-edit/syst-parameters-edit.component.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/syst-parameters/syst-parameters-edit/syst-parameters-edit.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: SystParametersEditComponent */

    /***/
    function srcAppSystParametersSystParametersEditSystParametersEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystParametersEditComponent", function () {
        return SystParametersEditComponent;
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


      var _syst_parameters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../syst-parameters.service */
      "./src/app/syst-parameters/syst-parameters.service.ts");
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

      var SystParametersEditComponent = /*#__PURE__*/function () {
        function SystParametersEditComponent(systParametersService, route, platform, splitPanel) {
          _classCallCheck(this, SystParametersEditComponent);

          this.systParametersService = systParametersService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.model = null;
        }

        _createClass(SystParametersEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.systParametersService.editSystParameter(this.id);
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

            this.systParameterForm.systParametersForm.valueChanges.subscribe(function (data) {
              _this2.systParametersService.systParametersFormValid.next(_this2.systParameterForm.systParametersForm.valid);
            });
          }
        }]);

        return SystParametersEditComponent;
      }();

      SystParametersEditComponent.ctorParameters = function () {
        return [{
          type: _syst_parameters_service__WEBPACK_IMPORTED_MODULE_2__["SystParametersService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      SystParametersEditComponent.propDecorators = {
        systParameterForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['systParameterForm']
        }]
      };
      SystParametersEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-parameters-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./syst-parameters-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-edit/syst-parameters-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./syst-parameters-edit.component.scss */
        "./src/app/syst-parameters/syst-parameters-edit/syst-parameters-edit.component.scss"))["default"]]
      })], SystParametersEditComponent);
      /***/
    },

    /***/
    "./src/app/syst-parameters/syst-parameters-form/syst-parameters-form.component.scss":
    /*!******************************************************************************************!*\
      !*** ./src/app/syst-parameters/syst-parameters-form/syst-parameters-form.component.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSystParametersSystParametersFormSystParametersFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcGFyYW1ldGVycy9zeXN0LXBhcmFtZXRlcnMtZm9ybS9zeXN0LXBhcmFtZXRlcnMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/syst-parameters/syst-parameters-form/syst-parameters-form.component.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/syst-parameters/syst-parameters-form/syst-parameters-form.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: SystParametersFormComponent */

    /***/
    function srcAppSystParametersSystParametersFormSystParametersFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystParametersFormComponent", function () {
        return SystParametersFormComponent;
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


      var _syst_parameters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../syst-parameters.service */
      "./src/app/syst-parameters/syst-parameters.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var SystParametersFormComponent = /*#__PURE__*/function () {
        function SystParametersFormComponent(systParametersService, toTitlecase) {
          _classCallCheck(this, SystParametersFormComponent);

          this.systParametersService = systParametersService;
          this.toTitlecase = toTitlecase;
          this.model = {};
          this.validationMessages = {
            'syst_parameter_group_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('GRUPO') + ' es obligatorio.'
            }],
            'name': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'
            }],
            'code': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.'
            }],
            'riched_text': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('TEXTO ENRIQUECIDO') + ' es obligatorio.'
            }],
            'value': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('VALOR') + ' es obligatorio.'
            }],
            'comp_responsability_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('EMPRESAS RESPONSABILIDADES LEGALES') + ' es obligatorio.'
            }]
          };
        }

        _createClass(SystParametersFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // set setSystParameterGroupId

        }, {
          key: "setSystParameterGroupId",
          value: function setSystParameterGroupId(event) {
            this.systParametersService.systParameter.syst_parameter_group_id = event.value ? event.value.id : null;
          } // end setSystParameterGroupId
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

            this.systParametersService.systParameter.comp_responsability_ids = compResponsabilityIds;
          }
        }]);

        return SystParametersFormComponent;
      }();

      SystParametersFormComponent.ctorParameters = function () {
        return [{
          type: _syst_parameters_service__WEBPACK_IMPORTED_MODULE_2__["SystParametersService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      SystParametersFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        systParametersForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['systParametersForm']
        }]
      };
      SystParametersFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-parameters-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./syst-parameters-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-form/syst-parameters-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./syst-parameters-form.component.scss */
        "./src/app/syst-parameters/syst-parameters-form/syst-parameters-form.component.scss"))["default"]]
      })], SystParametersFormComponent);
      /***/
    },

    /***/
    "./src/app/syst-parameters/syst-parameters-list/syst-parameters-list.component.scss":
    /*!******************************************************************************************!*\
      !*** ./src/app/syst-parameters/syst-parameters-list/syst-parameters-list.component.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSystParametersSystParametersListSystParametersListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcGFyYW1ldGVycy9zeXN0LXBhcmFtZXRlcnMtbGlzdC9zeXN0LXBhcmFtZXRlcnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/syst-parameters/syst-parameters-list/syst-parameters-list.component.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/syst-parameters/syst-parameters-list/syst-parameters-list.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: SystParametersListComponent */

    /***/
    function srcAppSystParametersSystParametersListSystParametersListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystParametersListComponent", function () {
        return SystParametersListComponent;
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


      var _syst_parameters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../syst-parameters.service */
      "./src/app/syst-parameters/syst-parameters.service.ts");
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

      var SystParametersListComponent = /*#__PURE__*/function () {
        function SystParametersListComponent(systParametersService, api, loading, splitPanel) {
          _classCallCheck(this, SystParametersListComponent);

          this.systParametersService = systParametersService;
          this.api = api;
          this.loading = loading;
          this.splitPanel = splitPanel;
        }

        _createClass(SystParametersListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.systParametersService.getSystParameters();
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

        return SystParametersListComponent;
      }();

      SystParametersListComponent.ctorParameters = function () {
        return [{
          type: _syst_parameters_service__WEBPACK_IMPORTED_MODULE_2__["SystParametersService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"]
        }];
      };

      SystParametersListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      SystParametersListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-parameters-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./syst-parameters-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-list/syst-parameters-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./syst-parameters-list.component.scss */
        "./src/app/syst-parameters/syst-parameters-list/syst-parameters-list.component.scss"))["default"]]
      })], SystParametersListComponent);
      /***/
    },

    /***/
    "./src/app/syst-parameters/syst-parameters-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/syst-parameters/syst-parameters-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: SystParametersPageRoutingModule */

    /***/
    function srcAppSystParametersSystParametersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystParametersPageRoutingModule", function () {
        return SystParametersPageRoutingModule;
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


      var _syst_parameters_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./syst-parameters.page */
      "./src/app/syst-parameters/syst-parameters.page.ts");
      /* harmony import */


      var _syst_parameters_edit_syst_parameters_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./syst-parameters-edit/syst-parameters-edit.component */
      "./src/app/syst-parameters/syst-parameters-edit/syst-parameters-edit.component.ts");
      /* harmony import */


      var _syst_parameters_create_syst_parameters_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./syst-parameters-create/syst-parameters-create.component */
      "./src/app/syst-parameters/syst-parameters-create/syst-parameters-create.component.ts");
      /* harmony import */


      var _syst_parameters_list_syst_parameters_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./syst-parameters-list/syst-parameters-list.component */
      "./src/app/syst-parameters/syst-parameters-list/syst-parameters-list.component.ts");

      var routes = [{
        path: '',
        component: _syst_parameters_page__WEBPACK_IMPORTED_MODULE_3__["SystParametersPage"]
      }, {
        path: 'list',
        component: _syst_parameters_list_syst_parameters_list_component__WEBPACK_IMPORTED_MODULE_6__["SystParametersListComponent"]
      }, {
        path: 'create',
        component: _syst_parameters_create_syst_parameters_create_component__WEBPACK_IMPORTED_MODULE_5__["SystParametersCreateComponent"]
      }, {
        path: ':id/edit',
        component: _syst_parameters_edit_syst_parameters_edit_component__WEBPACK_IMPORTED_MODULE_4__["SystParametersEditComponent"]
      }];

      var SystParametersPageRoutingModule = function SystParametersPageRoutingModule() {
        _classCallCheck(this, SystParametersPageRoutingModule);
      };

      SystParametersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SystParametersPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/syst-parameters/syst-parameters.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/syst-parameters/syst-parameters.module.ts ***!
      \***********************************************************/

    /*! exports provided: SystParametersPageModule */

    /***/
    function srcAppSystParametersSystParametersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystParametersPageModule", function () {
        return SystParametersPageModule;
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


      var _syst_parameters_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./syst-parameters-routing.module */
      "./src/app/syst-parameters/syst-parameters-routing.module.ts");
      /* harmony import */


      var _syst_parameters_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./syst-parameters.page */
      "./src/app/syst-parameters/syst-parameters.page.ts");
      /* harmony import */


      var _syst_parameters_list_syst_parameters_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./syst-parameters-list/syst-parameters-list.component */
      "./src/app/syst-parameters/syst-parameters-list/syst-parameters-list.component.ts");
      /* harmony import */


      var _syst_parameters_create_syst_parameters_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./syst-parameters-create/syst-parameters-create.component */
      "./src/app/syst-parameters/syst-parameters-create/syst-parameters-create.component.ts");
      /* harmony import */


      var _syst_parameters_duplicate_syst_parameters_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./syst-parameters-duplicate/syst-parameters-duplicate.component */
      "./src/app/syst-parameters/syst-parameters-duplicate/syst-parameters-duplicate.component.ts");
      /* harmony import */


      var _syst_parameters_edit_syst_parameters_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./syst-parameters-edit/syst-parameters-edit.component */
      "./src/app/syst-parameters/syst-parameters-edit/syst-parameters-edit.component.ts");
      /* harmony import */


      var _syst_parameters_form_syst_parameters_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./syst-parameters-form/syst-parameters-form.component */
      "./src/app/syst-parameters/syst-parameters-form/syst-parameters-form.component.ts");

      var SystParametersPageModule = function SystParametersPageModule() {
        _classCallCheck(this, SystParametersPageModule);
      };

      SystParametersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _syst_parameters_routing_module__WEBPACK_IMPORTED_MODULE_6__["SystParametersPageRoutingModule"]],
        declarations: [_syst_parameters_page__WEBPACK_IMPORTED_MODULE_7__["SystParametersPage"], _syst_parameters_list_syst_parameters_list_component__WEBPACK_IMPORTED_MODULE_8__["SystParametersListComponent"], _syst_parameters_create_syst_parameters_create_component__WEBPACK_IMPORTED_MODULE_9__["SystParametersCreateComponent"], _syst_parameters_duplicate_syst_parameters_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["SystParametersDuplicateComponent"], _syst_parameters_edit_syst_parameters_edit_component__WEBPACK_IMPORTED_MODULE_11__["SystParametersEditComponent"], _syst_parameters_form_syst_parameters_form_component__WEBPACK_IMPORTED_MODULE_12__["SystParametersFormComponent"]]
      })], SystParametersPageModule);
      /***/
    },

    /***/
    "./src/app/syst-parameters/syst-parameters.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/syst-parameters/syst-parameters.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSystParametersSystParametersPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcGFyYW1ldGVycy9zeXN0LXBhcmFtZXRlcnMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/syst-parameters/syst-parameters.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/syst-parameters/syst-parameters.page.ts ***!
      \*********************************************************/

    /*! exports provided: SystParametersPage */

    /***/
    function srcAppSystParametersSystParametersPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystParametersPage", function () {
        return SystParametersPage;
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

      var SystParametersPage = /*#__PURE__*/function () {
        function SystParametersPage(splitPanel) {
          _classCallCheck(this, SystParametersPage);

          this.splitPanel = splitPanel;
        }

        _createClass(SystParametersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }]);

        return SystParametersPage;
      }();

      SystParametersPage.ctorParameters = function () {
        return [{
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"]
        }];
      };

      SystParametersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-parameters',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./syst-parameters.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./syst-parameters.page.scss */
        "./src/app/syst-parameters/syst-parameters.page.scss"))["default"]]
      })], SystParametersPage);
      /***/
    },

    /***/
    "./src/app/syst-parameters/syst-parameters.service.ts":
    /*!************************************************************!*\
      !*** ./src/app/syst-parameters/syst-parameters.service.ts ***!
      \************************************************************/

    /*! exports provided: SystParametersService */

    /***/
    function srcAppSystParametersSystParametersServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystParametersService", function () {
        return SystParametersService;
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

      var SystParametersService = /*#__PURE__*/function () {
        function SystParametersService(api, alert, toast, router, navigation) {
          _classCallCheck(this, SystParametersService);

          this.api = api;
          this.alert = alert;
          this.toast = toast;
          this.router = router;
          this.navigation = navigation;
          this.systParametersUrl = 'syst-parameters';
          this.systParametersFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
          this.systParameters = [];
          this.systParameter = {};
          this.systParameterLists = {};
          this.searchValue = '';
          this.perPage = 10;
          this.meta = null;
          this.page = 1;
          this.pagesContent = document.getElementById('pages-content');
        }

        _createClass(SystParametersService, [{
          key: "getSystParameters",
          value: function getSystParameters() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.systParametersUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.systParameters = res.data;
              _this3.systParameterLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editSystParameter",
          value: function editSystParameter(id) {
            var _this4 = this;

            this.api.get(this.systParametersUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.systParameter = res.data.model;
              _this4.systParameterLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateSystParameter",
          value: function updateSystParameter() {
            var _this5 = this;

            this.api.put(this.systParametersUrl + '/' + this.systParameter.id, {
              model: this.systParameter,
              pivots: {}
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getSystParameters(1);
            });
          }
        }, {
          key: "createSystParameter",
          value: function createSystParameter() {
            var _this6 = this;

            this.api.get(this.systParametersUrl + '/create').subscribe(function (res) {
              _this6.systParameter = {};
              _this6.systParameterLists = res.lists;
            });
          }
        }, {
          key: "storeSystParameter",
          value: function storeSystParameter() {
            var _this7 = this;

            this.api.post(this.systParametersUrl, {
              model: this.systParameter,
              pivots: {}
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getSystParameters(1);
            });
          }
        }, {
          key: "deleteSystParameter",
          value: function deleteSystParameter(id) {
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

                      this.api["delete"](this.systParametersUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getSystParameters(1);
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

        return SystParametersService;
      }();

      SystParametersService.ctorParameters = function () {
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

      SystParametersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SystParametersService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=syst-parameters-syst-parameters-module-es5.js.map