(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["syst-parameter-groups-syst-parameter-groups-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-create/syst-parameter-groups-create.component.html":
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-create/syst-parameter-groups-create.component.html ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSystParameterGroupsSystParameterGroupsCreateSystParameterGroupsCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/syst-parameter-groups'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"systParameterGroupsService.storeSystParameterGroup()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!systParameterGroupsService.systParameterGroupsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'GRUPOS DE PARAMETROS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-syst-parameter-groups-form #systParameterGroupForm [model]=\"systParameterGroupsService.systParameterGroup\"></app-syst-parameter-groups-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-duplicate/syst-parameter-groups-duplicate.component.html":
    /*!************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-duplicate/syst-parameter-groups-duplicate.component.html ***!
      \************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSystParameterGroupsSystParameterGroupsDuplicateSystParameterGroupsDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  SystParameterGroups duplicate works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-edit/syst-parameter-groups-edit.component.html":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-edit/syst-parameter-groups-edit.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSystParameterGroupsSystParameterGroupsEditSystParameterGroupsEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/syst-parameter-groups'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"systParameterGroupsService.updateSystParameterGroup()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!systParameterGroupsService.systParameterGroupsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'GRUPOS DE PARAMETROS' | titlecase}}: {{ systParameterGroupsService.systParameterGroup?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-syst-parameter-groups-form #systParameterGroupForm [model]=\"systParameterGroupsService.systParameterGroup\"></app-syst-parameter-groups-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-form/syst-parameter-groups-form.component.html":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-form/syst-parameter-groups-form.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSystParameterGroupsSystParameterGroupsFormSystParameterGroupsFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #systParameterGroupsForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- syst_parameter_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'PARAMETROS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"syst_parameter_ids\"\n                          id=\"syst_parameter_ids-field\"\n                          [(ngModel)]=\"model.syst_parameters\"\n                          [items]=\"systParameterGroupsService.systParameterGroupLists.SystParameter\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('PARAMETROS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('PARAMETROS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setSystParameterIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.syst_parameter_ids\">\n            <div class=\"error-message\" *ngIf=\"systParameterGroupsForm.form.controls['syst_parameter_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end syst_parameter_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"systParameterGroupsForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- code -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'CÓDIGO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.code\"\n                            type=\"text\"\n                            name=\"code\"\n                            id=\"code-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.code\">\n                    <div class=\"error-message\" *ngIf=\"systParameterGroupsForm.form.controls['code']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end code -->\n\n\n</form>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-list/syst-parameter-groups-list.component.html":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-list/syst-parameter-groups-list.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSystParameterGroupsSystParameterGroupsListSystParameterGroupsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'GRUPOS DE PARAMETROS' | titlecase}}\"\n                 primaryLink=\"syst-parameter-groups/create\"\n                 primaryText=\"Crear {{'GRUPOS DE PARAMETROS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('GRUPOS DE PARAMETROS' | lowercase )\"\n                       (ionCancel)=\"this.systParameterGroupsService.searchValue = ''; systParameterGroupsService.getSystParameterGroups()\"\n                       (keyup.enter)=\"systParameterGroupsService.getSystParameterGroups()\"\n                       [(ngModel)]=\"systParameterGroupsService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && systParameterGroupsService.systParameterGroups.length\">\n        <ion-card *ngFor=\"let systParameterGroup of systParameterGroupsService.systParameterGroups; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ systParameterGroup.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CÓDIGO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ systParameterGroup.code }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'PARAMETROS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"systParameterGroup.syst_parameters.length\">\n                                <ng-container *ngFor=\"let systParameter of systParameterGroup.syst_parameters; let last = last\">\n                                    <a routerLink=\"/syst-parameters/{{ systParameter.id }}/edit\">{{ systParameter.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/syst-parameter-groups/' + systParameterGroup.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"systParameterGroupsService.deleteSystParameterGroup(systParameterGroup.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !systParameterGroupsService.systParameterGroups.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'GRUPOS DE PARAMETROS' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/syst-parameter-groups/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'GRUPOS DE PARAMETROS' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"systParameterGroupsService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"systParameterGroupsService.getSystParameterGroups(systParameterGroupsService.meta.current_page - 1)\"\n                        [disabled]=\"systParameterGroupsService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{systParameterGroupsService.meta.current_page}}\n                /{{systParameterGroupsService.meta.last_page}} {{systParameterGroupsService.meta.from}}-{{systParameterGroupsService.meta.to}}\n                /{{systParameterGroupsService.meta.total}} </ion-button>\n            <ion-button (click)=\"systParameterGroupsService.getSystParameterGroups(systParameterGroupsService.meta.current_page + 1)\"\n                        [disabled]=\"systParameterGroupsService.meta.current_page == systParameterGroupsService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups.page.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSystParameterGroupsSystParameterGroupsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"GRUPOS DE PARAMETROS\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/syst-parameter-groups/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'GRUPOS DE PARAMETROS'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/syst-parameter-groups/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'GRUPOS DE PARAMETROS' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/syst-parameter-groups/syst-parameter-groups-create/syst-parameter-groups-create.component.scss":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/syst-parameter-groups/syst-parameter-groups-create/syst-parameter-groups-create.component.scss ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSystParameterGroupsSystParameterGroupsCreateSystParameterGroupsCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcGFyYW1ldGVyLWdyb3Vwcy9zeXN0LXBhcmFtZXRlci1ncm91cHMtY3JlYXRlL3N5c3QtcGFyYW1ldGVyLWdyb3Vwcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/syst-parameter-groups/syst-parameter-groups-create/syst-parameter-groups-create.component.ts":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/syst-parameter-groups/syst-parameter-groups-create/syst-parameter-groups-create.component.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: SystParameterGroupsCreateComponent */

    /***/
    function srcAppSystParameterGroupsSystParameterGroupsCreateSystParameterGroupsCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystParameterGroupsCreateComponent", function () {
        return SystParameterGroupsCreateComponent;
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


      var _syst_parameter_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../syst-parameter-groups.service */
      "./src/app/syst-parameter-groups/syst-parameter-groups.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var SystParameterGroupsCreateComponent = /*#__PURE__*/function () {
        function SystParameterGroupsCreateComponent(systParameterGroupsService, route, platform) {
          _classCallCheck(this, SystParameterGroupsCreateComponent);

          this.systParameterGroupsService = systParameterGroupsService;
          this.route = route;
          this.platform = platform;
          this.id = null;
          this.formValid = false;
        }

        _createClass(SystParameterGroupsCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.clearPosts();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.systParameterGroupForm.systParameterGroupsForm.valueChanges.subscribe(function (data) {
              _this.systParameterGroupsService.systParameterGroupsFormValid.next(_this.systParameterGroupForm.systParameterGroupsForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.systParameterGroupsService.createSystParameterGroup();
            this.systParameterGroupsService.systParameterGroup = {};
          }
        }]);

        return SystParameterGroupsCreateComponent;
      }();

      SystParameterGroupsCreateComponent.ctorParameters = function () {
        return [{
          type: _syst_parameter_groups_service__WEBPACK_IMPORTED_MODULE_2__["SystParameterGroupsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      SystParameterGroupsCreateComponent.propDecorators = {
        systParameterGroupForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['systParameterGroupForm']
        }]
      };
      SystParameterGroupsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-parameter-groups-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./syst-parameter-groups-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-create/syst-parameter-groups-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./syst-parameter-groups-create.component.scss */
        "./src/app/syst-parameter-groups/syst-parameter-groups-create/syst-parameter-groups-create.component.scss"))["default"]]
      })], SystParameterGroupsCreateComponent);
      /***/
    },

    /***/
    "./src/app/syst-parameter-groups/syst-parameter-groups-duplicate/syst-parameter-groups-duplicate.component.scss":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/syst-parameter-groups/syst-parameter-groups-duplicate/syst-parameter-groups-duplicate.component.scss ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSystParameterGroupsSystParameterGroupsDuplicateSystParameterGroupsDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcGFyYW1ldGVyLWdyb3Vwcy9zeXN0LXBhcmFtZXRlci1ncm91cHMtZHVwbGljYXRlL3N5c3QtcGFyYW1ldGVyLWdyb3Vwcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/syst-parameter-groups/syst-parameter-groups-duplicate/syst-parameter-groups-duplicate.component.ts":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/syst-parameter-groups/syst-parameter-groups-duplicate/syst-parameter-groups-duplicate.component.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: SystParameterGroupsDuplicateComponent */

    /***/
    function srcAppSystParameterGroupsSystParameterGroupsDuplicateSystParameterGroupsDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystParameterGroupsDuplicateComponent", function () {
        return SystParameterGroupsDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SystParameterGroupsDuplicateComponent = /*#__PURE__*/function () {
        function SystParameterGroupsDuplicateComponent() {
          _classCallCheck(this, SystParameterGroupsDuplicateComponent);
        }

        _createClass(SystParameterGroupsDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SystParameterGroupsDuplicateComponent;
      }();

      SystParameterGroupsDuplicateComponent.ctorParameters = function () {
        return [];
      };

      SystParameterGroupsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-parameter-groups-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./syst-parameter-groups-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-duplicate/syst-parameter-groups-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./syst-parameter-groups-duplicate.component.scss */
        "./src/app/syst-parameter-groups/syst-parameter-groups-duplicate/syst-parameter-groups-duplicate.component.scss"))["default"]]
      })], SystParameterGroupsDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/syst-parameter-groups/syst-parameter-groups-edit/syst-parameter-groups-edit.component.scss":
    /*!************************************************************************************************************!*\
      !*** ./src/app/syst-parameter-groups/syst-parameter-groups-edit/syst-parameter-groups-edit.component.scss ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSystParameterGroupsSystParameterGroupsEditSystParameterGroupsEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcGFyYW1ldGVyLWdyb3Vwcy9zeXN0LXBhcmFtZXRlci1ncm91cHMtZWRpdC9zeXN0LXBhcmFtZXRlci1ncm91cHMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/syst-parameter-groups/syst-parameter-groups-edit/syst-parameter-groups-edit.component.ts":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/syst-parameter-groups/syst-parameter-groups-edit/syst-parameter-groups-edit.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: SystParameterGroupsEditComponent */

    /***/
    function srcAppSystParameterGroupsSystParameterGroupsEditSystParameterGroupsEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystParameterGroupsEditComponent", function () {
        return SystParameterGroupsEditComponent;
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


      var _syst_parameter_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../syst-parameter-groups.service */
      "./src/app/syst-parameter-groups/syst-parameter-groups.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var SystParameterGroupsEditComponent = /*#__PURE__*/function () {
        function SystParameterGroupsEditComponent(systParameterGroupsService, route, platform) {
          _classCallCheck(this, SystParameterGroupsEditComponent);

          this.systParameterGroupsService = systParameterGroupsService;
          this.route = route;
          this.platform = platform;
          this.id = null;
          this.model = null;
        }

        _createClass(SystParameterGroupsEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.systParameterGroupsService.editSystParameterGroup(this.id);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            this.systParameterGroupForm.systParameterGroupsForm.valueChanges.subscribe(function (data) {
              _this2.systParameterGroupsService.systParameterGroupsFormValid.next(_this2.systParameterGroupForm.systParameterGroupsForm.valid);
            });
          }
        }]);

        return SystParameterGroupsEditComponent;
      }();

      SystParameterGroupsEditComponent.ctorParameters = function () {
        return [{
          type: _syst_parameter_groups_service__WEBPACK_IMPORTED_MODULE_2__["SystParameterGroupsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      SystParameterGroupsEditComponent.propDecorators = {
        systParameterGroupForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['systParameterGroupForm']
        }]
      };
      SystParameterGroupsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-parameter-groups-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./syst-parameter-groups-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-edit/syst-parameter-groups-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./syst-parameter-groups-edit.component.scss */
        "./src/app/syst-parameter-groups/syst-parameter-groups-edit/syst-parameter-groups-edit.component.scss"))["default"]]
      })], SystParameterGroupsEditComponent);
      /***/
    },

    /***/
    "./src/app/syst-parameter-groups/syst-parameter-groups-form/syst-parameter-groups-form.component.scss":
    /*!************************************************************************************************************!*\
      !*** ./src/app/syst-parameter-groups/syst-parameter-groups-form/syst-parameter-groups-form.component.scss ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSystParameterGroupsSystParameterGroupsFormSystParameterGroupsFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcGFyYW1ldGVyLWdyb3Vwcy9zeXN0LXBhcmFtZXRlci1ncm91cHMtZm9ybS9zeXN0LXBhcmFtZXRlci1ncm91cHMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/syst-parameter-groups/syst-parameter-groups-form/syst-parameter-groups-form.component.ts":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/syst-parameter-groups/syst-parameter-groups-form/syst-parameter-groups-form.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: SystParameterGroupsFormComponent */

    /***/
    function srcAppSystParameterGroupsSystParameterGroupsFormSystParameterGroupsFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystParameterGroupsFormComponent", function () {
        return SystParameterGroupsFormComponent;
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


      var _syst_parameter_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../syst-parameter-groups.service */
      "./src/app/syst-parameter-groups/syst-parameter-groups.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var SystParameterGroupsFormComponent = /*#__PURE__*/function () {
        function SystParameterGroupsFormComponent(systParameterGroupsService, toTitlecase) {
          _classCallCheck(this, SystParameterGroupsFormComponent);

          this.systParameterGroupsService = systParameterGroupsService;
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
            'syst_parameter_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('PARAMETROS') + ' es obligatorio.'
            }]
          };
        }

        _createClass(SystParameterGroupsFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // set setSystParameterIds

        }, {
          key: "setSystParameterIds",
          value: function setSystParameterIds(event) {
            var systParameterIds = null;

            if (event.value.length) {
              systParameterIds = [];

              for (var i = 0; i < event.value.length; i++) {
                systParameterIds.push(event.value[i].id);
              }
            }

            this.systParameterGroupsService.systParameterGroup.syst_parameter_ids = systParameterIds;
          }
        }]);

        return SystParameterGroupsFormComponent;
      }();

      SystParameterGroupsFormComponent.ctorParameters = function () {
        return [{
          type: _syst_parameter_groups_service__WEBPACK_IMPORTED_MODULE_2__["SystParameterGroupsService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      SystParameterGroupsFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        systParameterGroupsForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['systParameterGroupsForm']
        }]
      };
      SystParameterGroupsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-parameter-groups-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./syst-parameter-groups-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-form/syst-parameter-groups-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./syst-parameter-groups-form.component.scss */
        "./src/app/syst-parameter-groups/syst-parameter-groups-form/syst-parameter-groups-form.component.scss"))["default"]]
      })], SystParameterGroupsFormComponent);
      /***/
    },

    /***/
    "./src/app/syst-parameter-groups/syst-parameter-groups-list/syst-parameter-groups-list.component.scss":
    /*!************************************************************************************************************!*\
      !*** ./src/app/syst-parameter-groups/syst-parameter-groups-list/syst-parameter-groups-list.component.scss ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSystParameterGroupsSystParameterGroupsListSystParameterGroupsListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcGFyYW1ldGVyLWdyb3Vwcy9zeXN0LXBhcmFtZXRlci1ncm91cHMtbGlzdC9zeXN0LXBhcmFtZXRlci1ncm91cHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/syst-parameter-groups/syst-parameter-groups-list/syst-parameter-groups-list.component.ts":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/syst-parameter-groups/syst-parameter-groups-list/syst-parameter-groups-list.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: SystParameterGroupsListComponent */

    /***/
    function srcAppSystParameterGroupsSystParameterGroupsListSystParameterGroupsListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystParameterGroupsListComponent", function () {
        return SystParameterGroupsListComponent;
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


      var _syst_parameter_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../syst-parameter-groups.service */
      "./src/app/syst-parameter-groups/syst-parameter-groups.service.ts");
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

      var SystParameterGroupsListComponent = /*#__PURE__*/function () {
        function SystParameterGroupsListComponent(systParameterGroupsService, api, loading) {
          _classCallCheck(this, SystParameterGroupsListComponent);

          this.systParameterGroupsService = systParameterGroupsService;
          this.api = api;
          this.loading = loading;
        }

        _createClass(SystParameterGroupsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.systParameterGroupsService.getSystParameterGroups();
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            this.content.scrollToTop(300);
          }
        }]);

        return SystParameterGroupsListComponent;
      }();

      SystParameterGroupsListComponent.ctorParameters = function () {
        return [{
          type: _syst_parameter_groups_service__WEBPACK_IMPORTED_MODULE_2__["SystParameterGroupsService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }];
      };

      SystParameterGroupsListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      SystParameterGroupsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-parameter-groups-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./syst-parameter-groups-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-list/syst-parameter-groups-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./syst-parameter-groups-list.component.scss */
        "./src/app/syst-parameter-groups/syst-parameter-groups-list/syst-parameter-groups-list.component.scss"))["default"]]
      })], SystParameterGroupsListComponent);
      /***/
    },

    /***/
    "./src/app/syst-parameter-groups/syst-parameter-groups-routing.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/syst-parameter-groups/syst-parameter-groups-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: SystParameterGroupsPageRoutingModule */

    /***/
    function srcAppSystParameterGroupsSystParameterGroupsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystParameterGroupsPageRoutingModule", function () {
        return SystParameterGroupsPageRoutingModule;
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


      var _syst_parameter_groups_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./syst-parameter-groups.page */
      "./src/app/syst-parameter-groups/syst-parameter-groups.page.ts");
      /* harmony import */


      var _syst_parameter_groups_edit_syst_parameter_groups_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./syst-parameter-groups-edit/syst-parameter-groups-edit.component */
      "./src/app/syst-parameter-groups/syst-parameter-groups-edit/syst-parameter-groups-edit.component.ts");
      /* harmony import */


      var _syst_parameter_groups_create_syst_parameter_groups_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./syst-parameter-groups-create/syst-parameter-groups-create.component */
      "./src/app/syst-parameter-groups/syst-parameter-groups-create/syst-parameter-groups-create.component.ts");
      /* harmony import */


      var _syst_parameter_groups_list_syst_parameter_groups_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./syst-parameter-groups-list/syst-parameter-groups-list.component */
      "./src/app/syst-parameter-groups/syst-parameter-groups-list/syst-parameter-groups-list.component.ts");

      var routes = [{
        path: '',
        component: _syst_parameter_groups_page__WEBPACK_IMPORTED_MODULE_3__["SystParameterGroupsPage"]
      }, {
        path: 'list',
        component: _syst_parameter_groups_list_syst_parameter_groups_list_component__WEBPACK_IMPORTED_MODULE_6__["SystParameterGroupsListComponent"]
      }, {
        path: 'create',
        component: _syst_parameter_groups_create_syst_parameter_groups_create_component__WEBPACK_IMPORTED_MODULE_5__["SystParameterGroupsCreateComponent"]
      }, {
        path: ':id/edit',
        component: _syst_parameter_groups_edit_syst_parameter_groups_edit_component__WEBPACK_IMPORTED_MODULE_4__["SystParameterGroupsEditComponent"]
      }];

      var SystParameterGroupsPageRoutingModule = function SystParameterGroupsPageRoutingModule() {
        _classCallCheck(this, SystParameterGroupsPageRoutingModule);
      };

      SystParameterGroupsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SystParameterGroupsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/syst-parameter-groups/syst-parameter-groups.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/syst-parameter-groups/syst-parameter-groups.module.ts ***!
      \***********************************************************************/

    /*! exports provided: SystParameterGroupsPageModule */

    /***/
    function srcAppSystParameterGroupsSystParameterGroupsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystParameterGroupsPageModule", function () {
        return SystParameterGroupsPageModule;
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


      var _syst_parameter_groups_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./syst-parameter-groups-routing.module */
      "./src/app/syst-parameter-groups/syst-parameter-groups-routing.module.ts");
      /* harmony import */


      var _syst_parameter_groups_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./syst-parameter-groups.page */
      "./src/app/syst-parameter-groups/syst-parameter-groups.page.ts");
      /* harmony import */


      var _syst_parameter_groups_list_syst_parameter_groups_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./syst-parameter-groups-list/syst-parameter-groups-list.component */
      "./src/app/syst-parameter-groups/syst-parameter-groups-list/syst-parameter-groups-list.component.ts");
      /* harmony import */


      var _syst_parameter_groups_create_syst_parameter_groups_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./syst-parameter-groups-create/syst-parameter-groups-create.component */
      "./src/app/syst-parameter-groups/syst-parameter-groups-create/syst-parameter-groups-create.component.ts");
      /* harmony import */


      var _syst_parameter_groups_duplicate_syst_parameter_groups_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./syst-parameter-groups-duplicate/syst-parameter-groups-duplicate.component */
      "./src/app/syst-parameter-groups/syst-parameter-groups-duplicate/syst-parameter-groups-duplicate.component.ts");
      /* harmony import */


      var _syst_parameter_groups_edit_syst_parameter_groups_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./syst-parameter-groups-edit/syst-parameter-groups-edit.component */
      "./src/app/syst-parameter-groups/syst-parameter-groups-edit/syst-parameter-groups-edit.component.ts");
      /* harmony import */


      var _syst_parameter_groups_form_syst_parameter_groups_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./syst-parameter-groups-form/syst-parameter-groups-form.component */
      "./src/app/syst-parameter-groups/syst-parameter-groups-form/syst-parameter-groups-form.component.ts");

      var SystParameterGroupsPageModule = function SystParameterGroupsPageModule() {
        _classCallCheck(this, SystParameterGroupsPageModule);
      };

      SystParameterGroupsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _syst_parameter_groups_routing_module__WEBPACK_IMPORTED_MODULE_6__["SystParameterGroupsPageRoutingModule"]],
        declarations: [_syst_parameter_groups_page__WEBPACK_IMPORTED_MODULE_7__["SystParameterGroupsPage"], _syst_parameter_groups_list_syst_parameter_groups_list_component__WEBPACK_IMPORTED_MODULE_8__["SystParameterGroupsListComponent"], _syst_parameter_groups_create_syst_parameter_groups_create_component__WEBPACK_IMPORTED_MODULE_9__["SystParameterGroupsCreateComponent"], _syst_parameter_groups_duplicate_syst_parameter_groups_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["SystParameterGroupsDuplicateComponent"], _syst_parameter_groups_edit_syst_parameter_groups_edit_component__WEBPACK_IMPORTED_MODULE_11__["SystParameterGroupsEditComponent"], _syst_parameter_groups_form_syst_parameter_groups_form_component__WEBPACK_IMPORTED_MODULE_12__["SystParameterGroupsFormComponent"]]
      })], SystParameterGroupsPageModule);
      /***/
    },

    /***/
    "./src/app/syst-parameter-groups/syst-parameter-groups.page.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/syst-parameter-groups/syst-parameter-groups.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSystParameterGroupsSystParameterGroupsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcGFyYW1ldGVyLWdyb3Vwcy9zeXN0LXBhcmFtZXRlci1ncm91cHMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/syst-parameter-groups/syst-parameter-groups.page.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/syst-parameter-groups/syst-parameter-groups.page.ts ***!
      \*********************************************************************/

    /*! exports provided: SystParameterGroupsPage */

    /***/
    function srcAppSystParameterGroupsSystParameterGroupsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystParameterGroupsPage", function () {
        return SystParameterGroupsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SystParameterGroupsPage = /*#__PURE__*/function () {
        function SystParameterGroupsPage() {
          _classCallCheck(this, SystParameterGroupsPage);
        }

        _createClass(SystParameterGroupsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SystParameterGroupsPage;
      }();

      SystParameterGroupsPage.ctorParameters = function () {
        return [];
      };

      SystParameterGroupsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-parameter-groups',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./syst-parameter-groups.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./syst-parameter-groups.page.scss */
        "./src/app/syst-parameter-groups/syst-parameter-groups.page.scss"))["default"]]
      })], SystParameterGroupsPage);
      /***/
    },

    /***/
    "./src/app/syst-parameter-groups/syst-parameter-groups.service.ts":
    /*!************************************************************************!*\
      !*** ./src/app/syst-parameter-groups/syst-parameter-groups.service.ts ***!
      \************************************************************************/

    /*! exports provided: SystParameterGroupsService */

    /***/
    function srcAppSystParameterGroupsSystParameterGroupsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystParameterGroupsService", function () {
        return SystParameterGroupsService;
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

      var SystParameterGroupsService = /*#__PURE__*/function () {
        function SystParameterGroupsService(api, alert, toast, router, navigation) {
          _classCallCheck(this, SystParameterGroupsService);

          this.api = api;
          this.alert = alert;
          this.toast = toast;
          this.router = router;
          this.navigation = navigation;
          this.systParameterGroupsUrl = 'syst-parameter-groups';
          this.systParameterGroupsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
          this.systParameterGroups = [];
          this.systParameterGroup = {};
          this.systParameterGroupLists = {};
          this.searchValue = '';
          this.perPage = 10;
          this.meta = null;
          this.page = 1;
          this.pagesContent = document.getElementById('pages-content');
        }

        _createClass(SystParameterGroupsService, [{
          key: "getSystParameterGroups",
          value: function getSystParameterGroups() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.systParameterGroupsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.systParameterGroups = res.data;
              _this3.systParameterGroupLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editSystParameterGroup",
          value: function editSystParameterGroup(id) {
            var _this4 = this;

            this.api.get(this.systParameterGroupsUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.systParameterGroup = res.data.model;
              _this4.systParameterGroupLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateSystParameterGroup",
          value: function updateSystParameterGroup() {
            var _this5 = this;

            this.api.put(this.systParameterGroupsUrl + '/' + this.systParameterGroup.id, {
              model: this.systParameterGroup,
              pivots: {}
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getSystParameterGroups(1);
            });
          }
        }, {
          key: "createSystParameterGroup",
          value: function createSystParameterGroup() {
            var _this6 = this;

            this.api.get(this.systParameterGroupsUrl + '/create').subscribe(function (res) {
              _this6.systParameterGroup = {};
              _this6.systParameterGroupLists = res.lists;
            });
          }
        }, {
          key: "storeSystParameterGroup",
          value: function storeSystParameterGroup() {
            var _this7 = this;

            this.api.post(this.systParameterGroupsUrl, {
              model: this.systParameterGroup,
              pivots: {}
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getSystParameterGroups(1);
            });
          }
        }, {
          key: "deleteSystParameterGroup",
          value: function deleteSystParameterGroup(id) {
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

                      this.api["delete"](this.systParameterGroupsUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getSystParameterGroups(1);
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

        return SystParameterGroupsService;
      }();

      SystParameterGroupsService.ctorParameters = function () {
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

      SystParameterGroupsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SystParameterGroupsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=syst-parameter-groups-syst-parameter-groups-module-es5.js.map