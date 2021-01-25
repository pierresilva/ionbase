(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oper-items-oper-items-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-create/oper-items-create.component.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-create/oper-items-create.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperItemsOperItemsCreateOperItemsCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/oper-items'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"operItemsService.storeOperItem()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!operItemsService.operItemsFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'OPERATIVIDAD ITEMS MTTO CORRECTIVO' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-oper-items-form #operItemForm [model]=\"operItemsService.operItem\"></app-oper-items-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-duplicate/oper-items-duplicate.component.html":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-duplicate/oper-items-duplicate.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperItemsOperItemsDuplicateOperItemsDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\r\n  OperItems duplicate works!\r\n</p>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-edit/oper-items-edit.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-edit/oper-items-edit.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperItemsOperItemsEditOperItemsEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/oper-items'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"operItemsService.updateOperItem()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!operItemsService.operItemsFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'OPERATIVIDAD ITEMS MTTO CORRECTIVO' | titlecase}}: {{ operItemsService.operItem?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-oper-items-form #operItemForm [model]=\"operItemsService.operItem\"></app-oper-items-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-form/oper-items-form.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-form/oper-items-form.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperItemsOperItemsFormOperItemsFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #operItemsForm=\"ngForm\" novalidate autocomplete=\"off\">\r\n\r\n\r\n    <!-- oper_corrective_maintenance_ids -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'OPERATIVIDAD MTTO CORRECTIVOS' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"oper_corrective_maintenance_ids\"\r\n                          id=\"oper_corrective_maintenance_ids-field\"\r\n                          [(ngModel)]=\"model.oper_corrective_maintenances\"\r\n                          [items]=\"operItemsService.operItemLists.OperCorrectiveMaintenance\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('OPERATIVIDAD MTTO CORRECTIVOS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('OPERATIVIDAD MTTO CORRECTIVOS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setOperCorrectiveMaintenanceIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.oper_corrective_maintenance_ids\">\r\n            <div class=\"error-message\" *ngIf=\"operItemsForm.form.controls['oper_corrective_maintenance_ids']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end oper_corrective_maintenance_ids -->\r\n\r\n\r\n            <!-- name -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.name\"\r\n                            type=\"text\"\r\n                            name=\"name\"\r\n                            id=\"name-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n                    <div class=\"error-message\" *ngIf=\"operItemsForm.form.controls['name']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end name -->\r\n\r\n\r\n            <!-- inventory_code -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'CÓDIGO INVENTARIO' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.inventory_code\"\r\n                            type=\"text\"\r\n                            name=\"inventory_code\"\r\n                            id=\"inventory_code-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.inventory_code\">\r\n                    <div class=\"error-message\" *ngIf=\"operItemsForm.form.controls['inventory_code']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end inventory_code -->\r\n\r\n\r\n</form>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-list/oper-items-list.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-list/oper-items-list.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperItemsOperItemsListOperItemsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'OPERATIVIDAD ITEMS MTTO CORRECTIVO' | titlecase}}\"\r\n                 primaryLink=\"oper-items/create\"\r\n                 primaryText=\"Crear {{'OPERATIVIDAD ITEMS MTTO CORRECTIVO' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-searchbar showCancelButton=\"focus\"\r\n                       [cancelButtonText]=\"'Cancelar'\"\r\n                       [placeholder]=\"'Buscar ' + ('OPERATIVIDAD ITEMS MTTO CORRECTIVO' | lowercase )\"\r\n                       (ionCancel)=\"this.operItemsService.searchValue = ''; operItemsService.getOperItems()\"\r\n                       (keyup.enter)=\"operItemsService.getOperItems()\"\r\n                       [(ngModel)]=\"operItemsService.searchValue\"></ion-searchbar>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && operItemsService.operItems?.length\">\r\n        <ion-card *ngFor=\"let operItem of operItemsService.operItems; let index = index\">\r\n            <ion-list>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operItem?.name }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'CÓDIGO INVENTARIO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ operItem?.inventory_code }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'OPERATIVIDAD MTTO CORRECTIVOS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">\r\n                            <ng-container *ngIf=\"operItem?.oper_corrective_maintenances?.length\">\r\n                                <ng-container *ngFor=\"let operCorrectiveMaintenance of operItem?.oper_corrective_maintenances; let last = last\">\r\n                                    <a routerLink=\"/oper-corrective-maintenances/{{ operCorrectiveMaintenance?.id }}/edit\">{{ operCorrectiveMaintenance?.name }}</a><span *ngIf=\"!last\">, </span>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n                    </ion-item>\r\n            </ion-list>\r\n            <ion-footer>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/oper-items/' + operItem?.id + '/edit'\">\r\n                            <ion-icon name=\"create-outline\"></ion-icon>\r\n                            <div>Editar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"operItemsService.deleteOperItem(operItem?.id)\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            <div>Eliminar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-footer>\r\n        </ion-card>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && !operItemsService.operItems?.length\">\r\n        <ion-item>\r\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label><h2>No se encontraron {{'OPERATIVIDAD ITEMS MTTO CORRECTIVO' | titlecase}}</h2></ion-label>\r\n            <ion-button [routerLink]=\"'/oper-items/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\r\n                Crear {{'OPERATIVIDAD ITEMS MTTO CORRECTIVO' | titlecase}}\r\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"operItemsService.meta\">\r\n        <ion-col class=\"ion-text-center\" size=\"12\">\r\n            <ion-button (click)=\"operItemsService.getOperItems(operItemsService.meta.current_page - 1)\"\r\n                        [disabled]=\"operItemsService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{operItemsService.meta.current_page}}\r\n                /{{operItemsService.meta.last_page}} {{operItemsService.meta.from}}-{{operItemsService.meta.to}}\r\n                /{{operItemsService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"operItemsService.getOperItems(operItemsService.meta.current_page + 1)\"\r\n                        [disabled]=\"operItemsService.meta.current_page == operItemsService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperItemsOperItemsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"OPERATIVIDAD ITEMS MTTO CORRECTIVO\"></app-main-header>\r\n\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/oper-items/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'OPERATIVIDAD ITEMS MTTO CORRECTIVO'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/oper-items/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'OPERATIVIDAD ITEMS MTTO CORRECTIVO' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/oper-items/oper-items-create/oper-items-create.component.scss":
    /*!*******************************************************************************!*\
      !*** ./src/app/oper-items/oper-items-create/oper-items-create.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperItemsOperItemsCreateOperItemsCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItaXRlbXMvb3Blci1pdGVtcy1jcmVhdGUvb3Blci1pdGVtcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/oper-items/oper-items-create/oper-items-create.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/oper-items/oper-items-create/oper-items-create.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: OperItemsCreateComponent */

    /***/
    function srcAppOperItemsOperItemsCreateOperItemsCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperItemsCreateComponent", function () {
        return OperItemsCreateComponent;
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


      var _oper_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-items.service */
      "./src/app/oper-items/oper-items.service.ts");
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

      var OperItemsCreateComponent = /*#__PURE__*/function () {
        function OperItemsCreateComponent(operItemsService, route, platform, splitPanel) {
          _classCallCheck(this, OperItemsCreateComponent);

          this.operItemsService = operItemsService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.formValid = false;
        }

        _createClass(OperItemsCreateComponent, [{
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

            this.operItemForm.operItemsForm.valueChanges.subscribe(function (data) {
              _this.operItemsService.operItemsFormValid.next(_this.operItemForm.operItemsForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.operItemsService.createOperItem();
            this.operItemsService.operItem = {};
          }
        }]);

        return OperItemsCreateComponent;
      }();

      OperItemsCreateComponent.ctorParameters = function () {
        return [{
          type: _oper_items_service__WEBPACK_IMPORTED_MODULE_2__["OperItemsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      OperItemsCreateComponent.propDecorators = {
        operItemForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['operItemForm']
        }]
      };
      OperItemsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-items-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-items-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-create/oper-items-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-items-create.component.scss */
        "./src/app/oper-items/oper-items-create/oper-items-create.component.scss"))["default"]]
      })], OperItemsCreateComponent);
      /***/
    },

    /***/
    "./src/app/oper-items/oper-items-duplicate/oper-items-duplicate.component.scss":
    /*!*************************************************************************************!*\
      !*** ./src/app/oper-items/oper-items-duplicate/oper-items-duplicate.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperItemsOperItemsDuplicateOperItemsDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItaXRlbXMvb3Blci1pdGVtcy1kdXBsaWNhdGUvb3Blci1pdGVtcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/oper-items/oper-items-duplicate/oper-items-duplicate.component.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/oper-items/oper-items-duplicate/oper-items-duplicate.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: OperItemsDuplicateComponent */

    /***/
    function srcAppOperItemsOperItemsDuplicateOperItemsDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperItemsDuplicateComponent", function () {
        return OperItemsDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var OperItemsDuplicateComponent = /*#__PURE__*/function () {
        function OperItemsDuplicateComponent() {
          _classCallCheck(this, OperItemsDuplicateComponent);
        }

        _createClass(OperItemsDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OperItemsDuplicateComponent;
      }();

      OperItemsDuplicateComponent.ctorParameters = function () {
        return [];
      };

      OperItemsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-items-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-items-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-duplicate/oper-items-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-items-duplicate.component.scss */
        "./src/app/oper-items/oper-items-duplicate/oper-items-duplicate.component.scss"))["default"]]
      })], OperItemsDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/oper-items/oper-items-edit/oper-items-edit.component.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/oper-items/oper-items-edit/oper-items-edit.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperItemsOperItemsEditOperItemsEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItaXRlbXMvb3Blci1pdGVtcy1lZGl0L29wZXItaXRlbXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/oper-items/oper-items-edit/oper-items-edit.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/oper-items/oper-items-edit/oper-items-edit.component.ts ***!
      \*************************************************************************/

    /*! exports provided: OperItemsEditComponent */

    /***/
    function srcAppOperItemsOperItemsEditOperItemsEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperItemsEditComponent", function () {
        return OperItemsEditComponent;
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


      var _oper_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-items.service */
      "./src/app/oper-items/oper-items.service.ts");
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

      var OperItemsEditComponent = /*#__PURE__*/function () {
        function OperItemsEditComponent(operItemsService, route, platform, splitPanel) {
          _classCallCheck(this, OperItemsEditComponent);

          this.operItemsService = operItemsService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.model = null;
        }

        _createClass(OperItemsEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.operItemsService.editOperItem(this.id);
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

            this.operItemForm.operItemsForm.valueChanges.subscribe(function (data) {
              _this2.operItemsService.operItemsFormValid.next(_this2.operItemForm.operItemsForm.valid);
            });
          }
        }]);

        return OperItemsEditComponent;
      }();

      OperItemsEditComponent.ctorParameters = function () {
        return [{
          type: _oper_items_service__WEBPACK_IMPORTED_MODULE_2__["OperItemsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      OperItemsEditComponent.propDecorators = {
        operItemForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['operItemForm']
        }]
      };
      OperItemsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-items-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-items-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-edit/oper-items-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-items-edit.component.scss */
        "./src/app/oper-items/oper-items-edit/oper-items-edit.component.scss"))["default"]]
      })], OperItemsEditComponent);
      /***/
    },

    /***/
    "./src/app/oper-items/oper-items-form/oper-items-form.component.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/oper-items/oper-items-form/oper-items-form.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperItemsOperItemsFormOperItemsFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* generated section */\n/* end generated section */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blci1pdGVtcy9vcGVyLWl0ZW1zLWZvcm0vb3Blci1pdGVtcy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFBO0FBRUEsMEJBQUEiLCJmaWxlIjoic3JjL2FwcC9vcGVyLWl0ZW1zL29wZXItaXRlbXMtZm9ybS9vcGVyLWl0ZW1zLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnZW5lcmF0ZWQgc2VjdGlvbiAqL1xyXG5cclxuLyogZW5kIGdlbmVyYXRlZCBzZWN0aW9uICovXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/oper-items/oper-items-form/oper-items-form.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/oper-items/oper-items-form/oper-items-form.component.ts ***!
      \*************************************************************************/

    /*! exports provided: OperItemsFormComponent */

    /***/
    function srcAppOperItemsOperItemsFormOperItemsFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperItemsFormComponent", function () {
        return OperItemsFormComponent;
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


      var _oper_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-items.service */
      "./src/app/oper-items/oper-items.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var OperItemsFormComponent = /*#__PURE__*/function () {
        function OperItemsFormComponent(operItemsService, toTitlecase) {
          _classCallCheck(this, OperItemsFormComponent);

          this.operItemsService = operItemsService;
          this.toTitlecase = toTitlecase;
          this.model = {};
          this.validationMessages = {
            'name': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'
            }],
            'inventory_code': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('CÓDIGO INVENTARIO') + ' es obligatorio.'
            }],
            'oper_corrective_maintenance_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('OPERATIVIDAD MTTO CORRECTIVOS') + ' es obligatorio.'
            }]
          };
        }

        _createClass(OperItemsFormComponent, [{
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

            this.operItemsService.operItem.oper_corrective_maintenance_ids = operCorrectiveMaintenanceIds;
          }
        }]);

        return OperItemsFormComponent;
      }();

      OperItemsFormComponent.ctorParameters = function () {
        return [{
          type: _oper_items_service__WEBPACK_IMPORTED_MODULE_2__["OperItemsService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      OperItemsFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        operItemsForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['operItemsForm']
        }]
      };
      OperItemsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-items-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-items-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-form/oper-items-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-items-form.component.scss */
        "./src/app/oper-items/oper-items-form/oper-items-form.component.scss"))["default"]]
      })], OperItemsFormComponent);
      /***/
    },

    /***/
    "./src/app/oper-items/oper-items-list/oper-items-list.component.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/oper-items/oper-items-list/oper-items-list.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperItemsOperItemsListOperItemsListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItaXRlbXMvb3Blci1pdGVtcy1saXN0L29wZXItaXRlbXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/oper-items/oper-items-list/oper-items-list.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/oper-items/oper-items-list/oper-items-list.component.ts ***!
      \*************************************************************************/

    /*! exports provided: OperItemsListComponent */

    /***/
    function srcAppOperItemsOperItemsListOperItemsListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperItemsListComponent", function () {
        return OperItemsListComponent;
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


      var _oper_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-items.service */
      "./src/app/oper-items/oper-items.service.ts");
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

      var OperItemsListComponent = /*#__PURE__*/function () {
        function OperItemsListComponent(operItemsService, api, loading, splitPanel) {
          _classCallCheck(this, OperItemsListComponent);

          this.operItemsService = operItemsService;
          this.api = api;
          this.loading = loading;
          this.splitPanel = splitPanel;
        }

        _createClass(OperItemsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.operItemsService.getOperItems();
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

        return OperItemsListComponent;
      }();

      OperItemsListComponent.ctorParameters = function () {
        return [{
          type: _oper_items_service__WEBPACK_IMPORTED_MODULE_2__["OperItemsService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"]
        }];
      };

      OperItemsListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      OperItemsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-items-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-items-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items-list/oper-items-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-items-list.component.scss */
        "./src/app/oper-items/oper-items-list/oper-items-list.component.scss"))["default"]]
      })], OperItemsListComponent);
      /***/
    },

    /***/
    "./src/app/oper-items/oper-items-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/oper-items/oper-items-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: OperItemsPageRoutingModule */

    /***/
    function srcAppOperItemsOperItemsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperItemsPageRoutingModule", function () {
        return OperItemsPageRoutingModule;
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


      var _oper_items_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./oper-items.page */
      "./src/app/oper-items/oper-items.page.ts");
      /* harmony import */


      var _oper_items_edit_oper_items_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./oper-items-edit/oper-items-edit.component */
      "./src/app/oper-items/oper-items-edit/oper-items-edit.component.ts");
      /* harmony import */


      var _oper_items_create_oper_items_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./oper-items-create/oper-items-create.component */
      "./src/app/oper-items/oper-items-create/oper-items-create.component.ts");
      /* harmony import */


      var _oper_items_list_oper_items_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./oper-items-list/oper-items-list.component */
      "./src/app/oper-items/oper-items-list/oper-items-list.component.ts");

      var routes = [// generated section
      {
        path: '',
        data: {
          title: 'OPERATIVIDAD ITEMS MTTO CORRECTIVO',
          roles: ['admin']
        },
        component: _oper_items_page__WEBPACK_IMPORTED_MODULE_3__["OperItemsPage"]
      }, {
        path: 'list',
        data: {
          title: 'OPERATIVIDAD ITEMS MTTO CORRECTIVO',
          roles: ['admin']
        },
        component: _oper_items_list_oper_items_list_component__WEBPACK_IMPORTED_MODULE_6__["OperItemsListComponent"]
      }, {
        path: 'create',
        data: {
          title: 'OPERATIVIDAD ITEMS MTTO CORRECTIVO',
          roles: ['admin']
        },
        component: _oper_items_create_oper_items_create_component__WEBPACK_IMPORTED_MODULE_5__["OperItemsCreateComponent"]
      }, {
        path: ':id/edit',
        data: {
          title: 'OPERATIVIDAD ITEMS MTTO CORRECTIVO',
          roles: ['admin']
        },
        component: _oper_items_edit_oper_items_edit_component__WEBPACK_IMPORTED_MODULE_4__["OperItemsEditComponent"]
      }]; // end generated section

      var OperItemsPageRoutingModule = function OperItemsPageRoutingModule() {
        _classCallCheck(this, OperItemsPageRoutingModule);
      };

      OperItemsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OperItemsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/oper-items/oper-items.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/oper-items/oper-items.module.ts ***!
      \*************************************************/

    /*! exports provided: OperItemsPageModule */

    /***/
    function srcAppOperItemsOperItemsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperItemsPageModule", function () {
        return OperItemsPageModule;
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


      var _oper_items_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./oper-items-routing.module */
      "./src/app/oper-items/oper-items-routing.module.ts");
      /* harmony import */


      var _oper_items_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./oper-items.page */
      "./src/app/oper-items/oper-items.page.ts");
      /* harmony import */


      var _oper_items_list_oper_items_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./oper-items-list/oper-items-list.component */
      "./src/app/oper-items/oper-items-list/oper-items-list.component.ts");
      /* harmony import */


      var _oper_items_create_oper_items_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./oper-items-create/oper-items-create.component */
      "./src/app/oper-items/oper-items-create/oper-items-create.component.ts");
      /* harmony import */


      var _oper_items_duplicate_oper_items_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./oper-items-duplicate/oper-items-duplicate.component */
      "./src/app/oper-items/oper-items-duplicate/oper-items-duplicate.component.ts");
      /* harmony import */


      var _oper_items_edit_oper_items_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./oper-items-edit/oper-items-edit.component */
      "./src/app/oper-items/oper-items-edit/oper-items-edit.component.ts");
      /* harmony import */


      var _oper_items_form_oper_items_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./oper-items-form/oper-items-form.component */
      "./src/app/oper-items/oper-items-form/oper-items-form.component.ts");

      var OperItemsPageModule = function OperItemsPageModule() {
        _classCallCheck(this, OperItemsPageModule);
      };

      OperItemsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [// imports generated section
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _oper_items_routing_module__WEBPACK_IMPORTED_MODULE_6__["OperItemsPageRoutingModule"] // end imports generated section
        ],
        declarations: [// declarations generated section
        _oper_items_page__WEBPACK_IMPORTED_MODULE_7__["OperItemsPage"], _oper_items_list_oper_items_list_component__WEBPACK_IMPORTED_MODULE_8__["OperItemsListComponent"], _oper_items_create_oper_items_create_component__WEBPACK_IMPORTED_MODULE_9__["OperItemsCreateComponent"], _oper_items_duplicate_oper_items_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["OperItemsDuplicateComponent"], _oper_items_edit_oper_items_edit_component__WEBPACK_IMPORTED_MODULE_11__["OperItemsEditComponent"], _oper_items_form_oper_items_form_component__WEBPACK_IMPORTED_MODULE_12__["OperItemsFormComponent"]]
      })], OperItemsPageModule);
      /***/
    },

    /***/
    "./src/app/oper-items/oper-items.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/oper-items/oper-items.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperItemsOperItemsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItaXRlbXMvb3Blci1pdGVtcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/oper-items/oper-items.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/oper-items/oper-items.page.ts ***!
      \***********************************************/

    /*! exports provided: OperItemsPage */

    /***/
    function srcAppOperItemsOperItemsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperItemsPage", function () {
        return OperItemsPage;
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

      var OperItemsPage = /*#__PURE__*/function () {
        function OperItemsPage(splitPanel) {
          _classCallCheck(this, OperItemsPage);

          this.splitPanel = splitPanel;
        }

        _createClass(OperItemsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }]);

        return OperItemsPage;
      }();

      OperItemsPage.ctorParameters = function () {
        return [{
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"]
        }];
      };

      OperItemsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-items',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-items.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-items/oper-items.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-items.page.scss */
        "./src/app/oper-items/oper-items.page.scss"))["default"]]
      })], OperItemsPage);
      /***/
    },

    /***/
    "./src/app/oper-items/oper-items.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/oper-items/oper-items.service.ts ***!
      \**************************************************/

    /*! exports provided: OperItemsService */

    /***/
    function srcAppOperItemsOperItemsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperItemsService", function () {
        return OperItemsService;
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

      var OperItemsService = /*#__PURE__*/function () {
        function OperItemsService(api, alert, toast, router, navigation) {
          _classCallCheck(this, OperItemsService);

          this.api = api;
          this.alert = alert;
          this.toast = toast;
          this.router = router;
          this.navigation = navigation;
          this.operItemsUrl = 'oper-items';
          this.operItemsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
          this.operItems = [];
          this.operItem = {};
          this.operItemLists = {};
          this.searchValue = '';
          this.perPage = 10;
          this.meta = null;
          this.page = 1;
          this.pagesContent = document.getElementById('pages-content');
        } // generated section


        _createClass(OperItemsService, [{
          key: "getOperItems",
          value: function getOperItems() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.operItemsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.operItems = res.data;
              _this3.operItemLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editOperItem",
          value: function editOperItem(id) {
            var _this4 = this;

            this.api.get(this.operItemsUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.operItem = res.data.model;
              _this4.operItemLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateOperItem",
          value: function updateOperItem() {
            var _this5 = this;

            this.api.put(this.operItemsUrl + '/' + this.operItem.id, {
              model: this.operItem,
              pivots: {
                oper_corrective_maintenance: this.operItem.oper_corrective_maintenances
              }
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getOperItems(1);
            });
          }
        }, {
          key: "createOperItem",
          value: function createOperItem() {
            var _this6 = this;

            this.api.get(this.operItemsUrl + '/create').subscribe(function (res) {
              _this6.operItem = {};
              _this6.operItemLists = res.lists;
            });
          }
        }, {
          key: "storeOperItem",
          value: function storeOperItem() {
            var _this7 = this;

            this.api.post(this.operItemsUrl, {
              model: this.operItem,
              pivots: {
                oper_corrective_maintenance: this.operItem.oper_corrective_maintenances
              }
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getOperItems(1);
            });
          }
        }, {
          key: "deleteOperItem",
          value: function deleteOperItem(id) {
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

                      this.api["delete"](this.operItemsUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getOperItems(1);
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

        return OperItemsService;
      }();

      OperItemsService.ctorParameters = function () {
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

      OperItemsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], OperItemsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=oper-items-oper-items-module-es5.js.map