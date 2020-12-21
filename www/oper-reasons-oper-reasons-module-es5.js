(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oper-reasons-oper-reasons-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-create/oper-reasons-create.component.html":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-create/oper-reasons-create.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperReasonsOperReasonsCreateOperReasonsCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/oper-reasons'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"operReasonsService.storeOperReason()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!operReasonsService.operReasonsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-oper-reasons-form #operReasonForm [model]=\"operReasonsService.operReason\"></app-oper-reasons-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-duplicate/oper-reasons-duplicate.component.html":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-duplicate/oper-reasons-duplicate.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperReasonsOperReasonsDuplicateOperReasonsDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  OperReasons duplicate works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-edit/oper-reasons-edit.component.html":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-edit/oper-reasons-edit.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperReasonsOperReasonsEditOperReasonsEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/oper-reasons'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"operReasonsService.updateOperReason()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!operReasonsService.operReasonsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO' | titlecase}}: {{ operReasonsService.operReason?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-oper-reasons-form #operReasonForm [model]=\"operReasonsService.operReason\"></app-oper-reasons-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-form/oper-reasons-form.component.html":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-form/oper-reasons-form.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperReasonsOperReasonsFormOperReasonsFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #operReasonsForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- oper_corrective_maintenance_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'OPERATIVIDAD MTTO CORRECTIVOS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"oper_corrective_maintenance_ids\"\n                          id=\"oper_corrective_maintenance_ids-field\"\n                          [(ngModel)]=\"model.oper_corrective_maintenances\"\n                          [items]=\"operReasonsService.operReasonLists.OperCorrectiveMaintenance\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('OPERATIVIDAD MTTO CORRECTIVOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('OPERATIVIDAD MTTO CORRECTIVOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setOperCorrectiveMaintenanceIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.oper_corrective_maintenance_ids\">\n            <div class=\"error-message\" *ngIf=\"operReasonsForm.form.controls['oper_corrective_maintenance_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end oper_corrective_maintenance_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"operReasonsForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n</form>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-list/oper-reasons-list.component.html":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-list/oper-reasons-list.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperReasonsOperReasonsListOperReasonsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO' | titlecase}}\"\n                 primaryLink=\"oper-reasons/create\"\n                 primaryText=\"Crear {{'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('OPERATIVIDAD MOTIVOS MTTO CORRECTIVO' | lowercase )\"\n                       (ionCancel)=\"this.operReasonsService.searchValue = ''; operReasonsService.getOperReasons()\"\n                       (keyup.enter)=\"operReasonsService.getOperReasons()\"\n                       [(ngModel)]=\"operReasonsService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && operReasonsService.operReasons?.length\">\n        <ion-card *ngFor=\"let operReason of operReasonsService.operReasons; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operReason?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'OPERATIVIDAD MTTO CORRECTIVOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"operReason?.oper_corrective_maintenances?.length\">\n                                <ng-container *ngFor=\"let operCorrectiveMaintenance of operReason?.oper_corrective_maintenances; let last = last\">\n                                    <a routerLink=\"/oper-corrective-maintenances/{{ operCorrectiveMaintenance?.id }}/edit\">{{ operCorrectiveMaintenance?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/oper-reasons/' + operReason?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"operReasonsService.deleteOperReason(operReason?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !operReasonsService.operReasons?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/oper-reasons/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"operReasonsService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"operReasonsService.getOperReasons(operReasonsService.meta.current_page - 1)\"\n                        [disabled]=\"operReasonsService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{operReasonsService.meta.current_page}}\n                /{{operReasonsService.meta.last_page}} {{operReasonsService.meta.from}}-{{operReasonsService.meta.to}}\n                /{{operReasonsService.meta.total}} </ion-button>\n            <ion-button (click)=\"operReasonsService.getOperReasons(operReasonsService.meta.current_page + 1)\"\n                        [disabled]=\"operReasonsService.meta.current_page == operReasonsService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperReasonsOperReasonsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"OPERATIVIDAD MOTIVOS MTTO CORRECTIVO\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/oper-reasons/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/oper-reasons/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/oper-reasons/oper-reasons-create/oper-reasons-create.component.scss":
    /*!*************************************************************************************!*\
      !*** ./src/app/oper-reasons/oper-reasons-create/oper-reasons-create.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperReasonsOperReasonsCreateOperReasonsCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItcmVhc29ucy9vcGVyLXJlYXNvbnMtY3JlYXRlL29wZXItcmVhc29ucy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/oper-reasons/oper-reasons-create/oper-reasons-create.component.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/oper-reasons/oper-reasons-create/oper-reasons-create.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: OperReasonsCreateComponent */

    /***/
    function srcAppOperReasonsOperReasonsCreateOperReasonsCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperReasonsCreateComponent", function () {
        return OperReasonsCreateComponent;
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


      var _oper_reasons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-reasons.service */
      "./src/app/oper-reasons/oper-reasons.service.ts");
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

      var OperReasonsCreateComponent = /*#__PURE__*/function () {
        function OperReasonsCreateComponent(operReasonsService, route, platform, splitPanel) {
          _classCallCheck(this, OperReasonsCreateComponent);

          this.operReasonsService = operReasonsService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.formValid = false;
        }

        _createClass(OperReasonsCreateComponent, [{
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

            this.operReasonForm.operReasonsForm.valueChanges.subscribe(function (data) {
              _this.operReasonsService.operReasonsFormValid.next(_this.operReasonForm.operReasonsForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.operReasonsService.createOperReason();
            this.operReasonsService.operReason = {};
          }
        }]);

        return OperReasonsCreateComponent;
      }();

      OperReasonsCreateComponent.ctorParameters = function () {
        return [{
          type: _oper_reasons_service__WEBPACK_IMPORTED_MODULE_2__["OperReasonsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      OperReasonsCreateComponent.propDecorators = {
        operReasonForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['operReasonForm']
        }]
      };
      OperReasonsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-reasons-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-reasons-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-create/oper-reasons-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-reasons-create.component.scss */
        "./src/app/oper-reasons/oper-reasons-create/oper-reasons-create.component.scss"))["default"]]
      })], OperReasonsCreateComponent);
      /***/
    },

    /***/
    "./src/app/oper-reasons/oper-reasons-duplicate/oper-reasons-duplicate.component.scss":
    /*!*******************************************************************************************!*\
      !*** ./src/app/oper-reasons/oper-reasons-duplicate/oper-reasons-duplicate.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperReasonsOperReasonsDuplicateOperReasonsDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItcmVhc29ucy9vcGVyLXJlYXNvbnMtZHVwbGljYXRlL29wZXItcmVhc29ucy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/oper-reasons/oper-reasons-duplicate/oper-reasons-duplicate.component.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/oper-reasons/oper-reasons-duplicate/oper-reasons-duplicate.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: OperReasonsDuplicateComponent */

    /***/
    function srcAppOperReasonsOperReasonsDuplicateOperReasonsDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperReasonsDuplicateComponent", function () {
        return OperReasonsDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var OperReasonsDuplicateComponent = /*#__PURE__*/function () {
        function OperReasonsDuplicateComponent() {
          _classCallCheck(this, OperReasonsDuplicateComponent);
        }

        _createClass(OperReasonsDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OperReasonsDuplicateComponent;
      }();

      OperReasonsDuplicateComponent.ctorParameters = function () {
        return [];
      };

      OperReasonsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-reasons-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-reasons-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-duplicate/oper-reasons-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-reasons-duplicate.component.scss */
        "./src/app/oper-reasons/oper-reasons-duplicate/oper-reasons-duplicate.component.scss"))["default"]]
      })], OperReasonsDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/oper-reasons/oper-reasons-edit/oper-reasons-edit.component.scss":
    /*!*********************************************************************************!*\
      !*** ./src/app/oper-reasons/oper-reasons-edit/oper-reasons-edit.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperReasonsOperReasonsEditOperReasonsEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItcmVhc29ucy9vcGVyLXJlYXNvbnMtZWRpdC9vcGVyLXJlYXNvbnMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/oper-reasons/oper-reasons-edit/oper-reasons-edit.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/oper-reasons/oper-reasons-edit/oper-reasons-edit.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: OperReasonsEditComponent */

    /***/
    function srcAppOperReasonsOperReasonsEditOperReasonsEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperReasonsEditComponent", function () {
        return OperReasonsEditComponent;
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


      var _oper_reasons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-reasons.service */
      "./src/app/oper-reasons/oper-reasons.service.ts");
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

      var OperReasonsEditComponent = /*#__PURE__*/function () {
        function OperReasonsEditComponent(operReasonsService, route, platform, splitPanel) {
          _classCallCheck(this, OperReasonsEditComponent);

          this.operReasonsService = operReasonsService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.model = null;
        }

        _createClass(OperReasonsEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.operReasonsService.editOperReason(this.id);
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

            this.operReasonForm.operReasonsForm.valueChanges.subscribe(function (data) {
              _this2.operReasonsService.operReasonsFormValid.next(_this2.operReasonForm.operReasonsForm.valid);
            });
          }
        }]);

        return OperReasonsEditComponent;
      }();

      OperReasonsEditComponent.ctorParameters = function () {
        return [{
          type: _oper_reasons_service__WEBPACK_IMPORTED_MODULE_2__["OperReasonsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      OperReasonsEditComponent.propDecorators = {
        operReasonForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['operReasonForm']
        }]
      };
      OperReasonsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-reasons-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-reasons-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-edit/oper-reasons-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-reasons-edit.component.scss */
        "./src/app/oper-reasons/oper-reasons-edit/oper-reasons-edit.component.scss"))["default"]]
      })], OperReasonsEditComponent);
      /***/
    },

    /***/
    "./src/app/oper-reasons/oper-reasons-form/oper-reasons-form.component.scss":
    /*!*********************************************************************************!*\
      !*** ./src/app/oper-reasons/oper-reasons-form/oper-reasons-form.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperReasonsOperReasonsFormOperReasonsFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* generated section */\n/* end generated section */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blci1yZWFzb25zL29wZXItcmVhc29ucy1mb3JtL29wZXItcmVhc29ucy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFBO0FBRUEsMEJBQUEiLCJmaWxlIjoic3JjL2FwcC9vcGVyLXJlYXNvbnMvb3Blci1yZWFzb25zLWZvcm0vb3Blci1yZWFzb25zLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnZW5lcmF0ZWQgc2VjdGlvbiAqL1xuXG4vKiBlbmQgZ2VuZXJhdGVkIHNlY3Rpb24gKi9cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/oper-reasons/oper-reasons-form/oper-reasons-form.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/oper-reasons/oper-reasons-form/oper-reasons-form.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: OperReasonsFormComponent */

    /***/
    function srcAppOperReasonsOperReasonsFormOperReasonsFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperReasonsFormComponent", function () {
        return OperReasonsFormComponent;
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


      var _oper_reasons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-reasons.service */
      "./src/app/oper-reasons/oper-reasons.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var OperReasonsFormComponent = /*#__PURE__*/function () {
        function OperReasonsFormComponent(operReasonsService, toTitlecase) {
          _classCallCheck(this, OperReasonsFormComponent);

          this.operReasonsService = operReasonsService;
          this.toTitlecase = toTitlecase;
          this.model = {};
          this.validationMessages = {
            'name': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'
            }],
            'oper_corrective_maintenance_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('OPERATIVIDAD MTTO CORRECTIVOS') + ' es obligatorio.'
            }]
          };
        }

        _createClass(OperReasonsFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // set setOperCorrectiveMaintenanceIds

        }, {
          key: "setOperCorrectiveMaintenanceIds",
          value: function setOperCorrectiveMaintenanceIds(event) {
            var operCorrectiveMaintenanceIds = null;

            if (event.value.length) {
              operCorrectiveMaintenanceIds = [];

              for (var i = 0; i < event.value.length; i++) {
                operCorrectiveMaintenanceIds.push(event.value[i].id);
              }
            }

            this.operReasonsService.operReason.oper_corrective_maintenance_ids = operCorrectiveMaintenanceIds;
          }
        }]);

        return OperReasonsFormComponent;
      }();

      OperReasonsFormComponent.ctorParameters = function () {
        return [{
          type: _oper_reasons_service__WEBPACK_IMPORTED_MODULE_2__["OperReasonsService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      OperReasonsFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        operReasonsForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['operReasonsForm']
        }]
      };
      OperReasonsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-reasons-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-reasons-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-form/oper-reasons-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-reasons-form.component.scss */
        "./src/app/oper-reasons/oper-reasons-form/oper-reasons-form.component.scss"))["default"]]
      })], OperReasonsFormComponent);
      /***/
    },

    /***/
    "./src/app/oper-reasons/oper-reasons-list/oper-reasons-list.component.scss":
    /*!*********************************************************************************!*\
      !*** ./src/app/oper-reasons/oper-reasons-list/oper-reasons-list.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperReasonsOperReasonsListOperReasonsListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItcmVhc29ucy9vcGVyLXJlYXNvbnMtbGlzdC9vcGVyLXJlYXNvbnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/oper-reasons/oper-reasons-list/oper-reasons-list.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/oper-reasons/oper-reasons-list/oper-reasons-list.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: OperReasonsListComponent */

    /***/
    function srcAppOperReasonsOperReasonsListOperReasonsListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperReasonsListComponent", function () {
        return OperReasonsListComponent;
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


      var _oper_reasons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-reasons.service */
      "./src/app/oper-reasons/oper-reasons.service.ts");
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

      var OperReasonsListComponent = /*#__PURE__*/function () {
        function OperReasonsListComponent(operReasonsService, api, loading, splitPanel) {
          _classCallCheck(this, OperReasonsListComponent);

          this.operReasonsService = operReasonsService;
          this.api = api;
          this.loading = loading;
          this.splitPanel = splitPanel;
        }

        _createClass(OperReasonsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.operReasonsService.getOperReasons();
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

        return OperReasonsListComponent;
      }();

      OperReasonsListComponent.ctorParameters = function () {
        return [{
          type: _oper_reasons_service__WEBPACK_IMPORTED_MODULE_2__["OperReasonsService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"]
        }];
      };

      OperReasonsListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      OperReasonsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-reasons-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-reasons-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons-list/oper-reasons-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-reasons-list.component.scss */
        "./src/app/oper-reasons/oper-reasons-list/oper-reasons-list.component.scss"))["default"]]
      })], OperReasonsListComponent);
      /***/
    },

    /***/
    "./src/app/oper-reasons/oper-reasons-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/oper-reasons/oper-reasons-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: OperReasonsPageRoutingModule */

    /***/
    function srcAppOperReasonsOperReasonsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperReasonsPageRoutingModule", function () {
        return OperReasonsPageRoutingModule;
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


      var _oper_reasons_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./oper-reasons.page */
      "./src/app/oper-reasons/oper-reasons.page.ts");
      /* harmony import */


      var _oper_reasons_edit_oper_reasons_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./oper-reasons-edit/oper-reasons-edit.component */
      "./src/app/oper-reasons/oper-reasons-edit/oper-reasons-edit.component.ts");
      /* harmony import */


      var _oper_reasons_create_oper_reasons_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./oper-reasons-create/oper-reasons-create.component */
      "./src/app/oper-reasons/oper-reasons-create/oper-reasons-create.component.ts");
      /* harmony import */


      var _oper_reasons_list_oper_reasons_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./oper-reasons-list/oper-reasons-list.component */
      "./src/app/oper-reasons/oper-reasons-list/oper-reasons-list.component.ts");

      var routes = [// generated section
      {
        path: '',
        data: {
          title: 'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO',
          roles: ['admin']
        },
        component: _oper_reasons_page__WEBPACK_IMPORTED_MODULE_3__["OperReasonsPage"]
      }, {
        path: 'list',
        data: {
          title: 'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO',
          roles: ['admin']
        },
        component: _oper_reasons_list_oper_reasons_list_component__WEBPACK_IMPORTED_MODULE_6__["OperReasonsListComponent"]
      }, {
        path: 'create',
        data: {
          title: 'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO',
          roles: ['admin']
        },
        component: _oper_reasons_create_oper_reasons_create_component__WEBPACK_IMPORTED_MODULE_5__["OperReasonsCreateComponent"]
      }, {
        path: ':id/edit',
        data: {
          title: 'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO',
          roles: ['admin']
        },
        component: _oper_reasons_edit_oper_reasons_edit_component__WEBPACK_IMPORTED_MODULE_4__["OperReasonsEditComponent"]
      }]; // end generated section

      var OperReasonsPageRoutingModule = function OperReasonsPageRoutingModule() {
        _classCallCheck(this, OperReasonsPageRoutingModule);
      };

      OperReasonsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OperReasonsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/oper-reasons/oper-reasons.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/oper-reasons/oper-reasons.module.ts ***!
      \*****************************************************/

    /*! exports provided: OperReasonsPageModule */

    /***/
    function srcAppOperReasonsOperReasonsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperReasonsPageModule", function () {
        return OperReasonsPageModule;
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


      var _oper_reasons_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./oper-reasons-routing.module */
      "./src/app/oper-reasons/oper-reasons-routing.module.ts");
      /* harmony import */


      var _oper_reasons_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./oper-reasons.page */
      "./src/app/oper-reasons/oper-reasons.page.ts");
      /* harmony import */


      var _oper_reasons_list_oper_reasons_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./oper-reasons-list/oper-reasons-list.component */
      "./src/app/oper-reasons/oper-reasons-list/oper-reasons-list.component.ts");
      /* harmony import */


      var _oper_reasons_create_oper_reasons_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./oper-reasons-create/oper-reasons-create.component */
      "./src/app/oper-reasons/oper-reasons-create/oper-reasons-create.component.ts");
      /* harmony import */


      var _oper_reasons_duplicate_oper_reasons_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./oper-reasons-duplicate/oper-reasons-duplicate.component */
      "./src/app/oper-reasons/oper-reasons-duplicate/oper-reasons-duplicate.component.ts");
      /* harmony import */


      var _oper_reasons_edit_oper_reasons_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./oper-reasons-edit/oper-reasons-edit.component */
      "./src/app/oper-reasons/oper-reasons-edit/oper-reasons-edit.component.ts");
      /* harmony import */


      var _oper_reasons_form_oper_reasons_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./oper-reasons-form/oper-reasons-form.component */
      "./src/app/oper-reasons/oper-reasons-form/oper-reasons-form.component.ts");

      var OperReasonsPageModule = function OperReasonsPageModule() {
        _classCallCheck(this, OperReasonsPageModule);
      };

      OperReasonsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [// imports generated section
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _oper_reasons_routing_module__WEBPACK_IMPORTED_MODULE_6__["OperReasonsPageRoutingModule"] // end imports generated section
        ],
        declarations: [// declarations generated section
        _oper_reasons_page__WEBPACK_IMPORTED_MODULE_7__["OperReasonsPage"], _oper_reasons_list_oper_reasons_list_component__WEBPACK_IMPORTED_MODULE_8__["OperReasonsListComponent"], _oper_reasons_create_oper_reasons_create_component__WEBPACK_IMPORTED_MODULE_9__["OperReasonsCreateComponent"], _oper_reasons_duplicate_oper_reasons_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["OperReasonsDuplicateComponent"], _oper_reasons_edit_oper_reasons_edit_component__WEBPACK_IMPORTED_MODULE_11__["OperReasonsEditComponent"], _oper_reasons_form_oper_reasons_form_component__WEBPACK_IMPORTED_MODULE_12__["OperReasonsFormComponent"]]
      })], OperReasonsPageModule);
      /***/
    },

    /***/
    "./src/app/oper-reasons/oper-reasons.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/oper-reasons/oper-reasons.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperReasonsOperReasonsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItcmVhc29ucy9vcGVyLXJlYXNvbnMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/oper-reasons/oper-reasons.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/oper-reasons/oper-reasons.page.ts ***!
      \***************************************************/

    /*! exports provided: OperReasonsPage */

    /***/
    function srcAppOperReasonsOperReasonsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperReasonsPage", function () {
        return OperReasonsPage;
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

      var OperReasonsPage = /*#__PURE__*/function () {
        function OperReasonsPage(splitPanel) {
          _classCallCheck(this, OperReasonsPage);

          this.splitPanel = splitPanel;
        }

        _createClass(OperReasonsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }]);

        return OperReasonsPage;
      }();

      OperReasonsPage.ctorParameters = function () {
        return [{
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"]
        }];
      };

      OperReasonsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-reasons',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-reasons.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-reasons/oper-reasons.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-reasons.page.scss */
        "./src/app/oper-reasons/oper-reasons.page.scss"))["default"]]
      })], OperReasonsPage);
      /***/
    },

    /***/
    "./src/app/oper-reasons/oper-reasons.service.ts":
    /*!******************************************************!*\
      !*** ./src/app/oper-reasons/oper-reasons.service.ts ***!
      \******************************************************/

    /*! exports provided: OperReasonsService */

    /***/
    function srcAppOperReasonsOperReasonsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperReasonsService", function () {
        return OperReasonsService;
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

      var OperReasonsService = /*#__PURE__*/function () {
        function OperReasonsService(api, alert, toast, router, navigation) {
          _classCallCheck(this, OperReasonsService);

          this.api = api;
          this.alert = alert;
          this.toast = toast;
          this.router = router;
          this.navigation = navigation;
          this.operReasonsUrl = 'oper-reasons';
          this.operReasonsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
          this.operReasons = [];
          this.operReason = {};
          this.operReasonLists = {};
          this.searchValue = '';
          this.perPage = 10;
          this.meta = null;
          this.page = 1;
          this.pagesContent = document.getElementById('pages-content');
        } // generated section


        _createClass(OperReasonsService, [{
          key: "getOperReasons",
          value: function getOperReasons() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.operReasonsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.operReasons = res.data;
              _this3.operReasonLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editOperReason",
          value: function editOperReason(id) {
            var _this4 = this;

            this.api.get(this.operReasonsUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.operReason = res.data.model;
              _this4.operReasonLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateOperReason",
          value: function updateOperReason() {
            var _this5 = this;

            this.api.put(this.operReasonsUrl + '/' + this.operReason.id, {
              model: this.operReason,
              pivots: {}
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getOperReasons(1);
            });
          }
        }, {
          key: "createOperReason",
          value: function createOperReason() {
            var _this6 = this;

            this.api.get(this.operReasonsUrl + '/create').subscribe(function (res) {
              _this6.operReason = {};
              _this6.operReasonLists = res.lists;
            });
          }
        }, {
          key: "storeOperReason",
          value: function storeOperReason() {
            var _this7 = this;

            this.api.post(this.operReasonsUrl, {
              model: this.operReason,
              pivots: {}
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getOperReasons(1);
            });
          }
        }, {
          key: "deleteOperReason",
          value: function deleteOperReason(id) {
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

                      this.api["delete"](this.operReasonsUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getOperReasons(1);
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

        return OperReasonsService;
      }();

      OperReasonsService.ctorParameters = function () {
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

      OperReasonsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], OperReasonsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=oper-reasons-oper-reasons-module-es5.js.map