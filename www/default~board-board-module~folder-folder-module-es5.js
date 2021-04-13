(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~board-board-module~folder-folder-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/board/boar-messages-create/boar-messages-create.component.html":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board/boar-messages-create/boar-messages-create.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppBoardBoarMessagesCreateBoarMessagesCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/comp-addresses'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n                [text]=\"''\"\n                [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"boarMessagesService.storeBoarMessage()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!boarMessagesService.boarMessagesFormValid.value\">\n                <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'Entrada de la cartelera' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-boar-messages-form #boarMessagesForm [model]=\"boarMessagesService.boarMessage\"></app-boar-messages-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/board/boar-messages-edit/boar-messages-edit.component.html":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board/boar-messages-edit/boar-messages-edit.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppBoardBoarMessagesEditBoarMessagesEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/comp-addresses'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n                [text]=\"''\"\n                [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"boarMessagesService.updateBoarMessage()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!boarMessagesService.boarMessagesFormValid.value\">\n                <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'Entrada de la cartelera' | titlecase}}: {{ boarMessagesService.boarMessage?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-boar-messages-form #boarMessagesForm [model]=\"boarMessagesService.boarMessage\"></app-boar-messages-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/board/boar-messages-form/boar-messages-form.component.html":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board/boar-messages-form/boar-messages-form.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppBoardBoarMessagesFormBoarMessagesFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #boarMessagesForm=\"ngForm\"\n      novalidate\n      autocomplete=\"off\">\n    <!-- name -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n        <ion-input [(ngModel)]=\"model.name\"\n                   type=\"text\"\n                   name=\"name\"\n                   id=\"name-field\"\n                   [required]=\"true\"\n                   placeholder=\"\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.name\">\n            <div class=\"error-message\"\n                 *ngIf=\"boarMessagesForm.form.controls['name']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end name -->\n    <!-- body -->\n    <!--<ion-item class=\"item-transparent\">\n        <ion-label>{{ 'cuerpo' | titlecase }}</ion-label>\n        <ion-textarea [(ngModel)]=\"model.body\"\n                      type=\"text\"\n                      name=\"body\"\n                      id=\"body-field\"\n                      [rows]=\"10\"\n                      [required]=\"true\"\n                      placeholder=\"\"></ion-textarea>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.body\">\n            <div class=\"error-message\"\n                 *ngIf=\"boarMessagesForm.form.controls['body']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>-->\n    <ion-item class=\"item-transparent\">\n        <ion-label position=\"stacked\" style=\"font-size: 1rem;\">{{ 'ACTA' | titlecase }}</ion-label>\n        <input [ngxSummernote]\n               name=\"act\"\n               id=\"act-field\"\n               [(ngModel)]=\"model.body\">\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.body\">\n            <div class=\"error-message\" *ngIf=\"boarMessagesForm.form.controls['body']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end body -->\n    <!-- status -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'ESTADO' | titlecase }}</ion-label>\n        <ion-select [(ngModel)]=\"model.status\"\n                    [required]=\"true\"\n                    name=\"status\"\n                    id=\"status-field\"\n                    okText=\"Seleccionar\"\n                    cancelText=\"Cancelar\">\n            <ion-select-option value=\"active\">{{ 'Activo' | titlecase }}</ion-select-option>\n            <ion-select-option value=\"inactive\">{{ 'Inactivo' | titlecase }}</ion-select-option>\n        </ion-select>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.status\">\n            <div class=\"error-message\"\n                 *ngIf=\"boarMessagesForm.form.controls['status']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end status -->\n    <!-- notify_to_users -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'notificar a los usuarios' | titlecase }}</ion-label>\n        <ion-toggle name=\"notify_to_users\"\n                    id=\"notify_to_users-field\"\n                    slot=\"end\"\n                    [(ngModel)]=\"model.notify_to_users\"></ion-toggle>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.notify_to_users\">\n            <div class=\"error-message\"\n                 *ngIf=\"boarMessagesForm.form.controls['repass']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end notify_to_users -->\n    <!-- notify_to_house_units -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'notificar a unidades habitacionales' | titlecase }}</ion-label>\n        <ion-toggle name=\"notify_to_house_units\"\n                    id=\"notify_to_house_units-field\"\n                    slot=\"end\"\n                    [(ngModel)]=\"model.notify_to_house_units\"></ion-toggle>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.notify_to_house_units\">\n            <div class=\"error-message\"\n                 *ngIf=\"boarMessagesForm.form.controls['repass']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end notify_to_house_units -->\n</form>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/board/boar-messages-list-view/boar-messages-list-view.component.html":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board/boar-messages-list-view/boar-messages-list-view.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppBoardBoarMessagesListViewBoarMessagesListViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngFor=\"let boarMessage of boarMessagesService.boarMessages\">\n\n    <ion-card>\n        <div class=\"cssreset\">\n            <ion-card-header>\n                <ion-card-subtitle>Publicado el {{boarMessage.created_at | dateFormat:'DD/MM/YYYY'}}</ion-card-subtitle>\n                <a [routerLink]=\"'/board/' + boarMessage.id + '/show'\">\n                    <ion-card-title>{{boarMessage.name}}</ion-card-title>\n                </a>\n            </ion-card-header>\n\n            <ion-card-content>\n                {{boarMessage.body | stripHtml | truncate:150}}\n            </ion-card-content>\n        </div>\n\n    </ion-card>\n\n</ng-container>\n\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/board/boar-messages-show/boar-messages-show.component.html":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board/boar-messages-show/boar-messages-show.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppBoardBoarMessagesShowBoarMessagesShowComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{boarMessagesService.boarMessage?.name}}\"></app-main-header>\n<ion-content id=\"pages-content\">\n    <ion-header collapse=\"condense\">\n        <ion-toolbar>\n            <ion-title size=\"large\">{{boarMessagesService.boarMessage?.name}}</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <span>Publicado el {{boarMessagesService.boarMessage?.created_at | dateFormat:'DD/MM/YYYY'}}</span>\n                <br><br>\n                <div [innerHTML]=\"boarMessagesService.boarMessage?.body\"></div>\n            </ion-col>\n        </ion-row>\n\n    </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/board/board-messages-list/board-messages-list.component.html":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board/board-messages-list/board-messages-list.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppBoardBoardMessagesListBoardMessagesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'Entradas de la Cartelera'}}\"\n                 primaryLink=\"board/create\"\n                 primaryText=\"Crear {{'Entradas de la Cartelera'}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n<ion-content id=\"pages-content\">\n    <ion-searchbar showCancelButton=\"focus\"\n                   [cancelButtonText]=\"'Cancelar'\"\n                   [placeholder]=\"'Buscar Entradas de la Cartelera'\"\n                   (ionCancel)=\"this.boarMessagesService.searchValue = ''; boarMessagesService.getBoarMessages()\"\n                   (keyup.enter)=\"boarMessagesService.getBoarMessages()\"\n                   [(ngModel)]=\"boarMessagesService.searchValue\"></ion-searchbar>\n    <ng-container *ngIf=\"!(loading.loading | async) && boarMessagesService.boarMessages?.length\">\n        <ion-card *ngFor=\"let boarMessage of boarMessagesService.boarMessages; let index = index\">\n            <ion-list>\n                <ion-item class=\"item-transparent\">\n                    <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                    <div class=\"wrap-text\">{{ boarMessage?.name }}</div>\n                </ion-item>\n                <ion-item class=\"item-transparent\">\n                    <ion-label position=\"fixed\"><b>{{ 'CÓDIGO' | titlecase }}</b></ion-label>\n                    <div class=\"wrap-text\">{{ boarMessage?.code }}</div>\n                </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/board/' + boarMessage?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"boarMessagesService.deleteBoardMessage(boarMessage?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !boarMessagesService.boarMessages?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron entradas de la cartelera</h2></ion-label>\n            <ion-button [routerLink]=\"'/board/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear entradas de la cartelera\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/board/board.component.html":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board/board.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppBoardBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"CARTELERA\"></app-main-header>\n<ion-content>\n    <ion-row>\n\n        <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n            <ion-card routerLink=\"/board/list\">\n                <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                    <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                </div>\n                <ion-card-header>\n                    <ion-card-subtitle class=\"ion-text-center\">\n                        Listar {{ 'ENTRADAS DE LA CARTELERA'  | titlecase }}\n                    </ion-card-subtitle>\n                </ion-card-header>\n\n            </ion-card>\n        </ion-col>\n\n        <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n            <ion-card routerLink=\"/board/create\">\n                <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                    <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                </div>\n                <ion-card-header>\n                    <ion-card-subtitle class=\"ion-text-center\">\n                        Crear {{ 'ENTRADAS DE LA CARTELERA' | titlecase }}\n                    </ion-card-subtitle>\n                </ion-card-header>\n\n            </ion-card>\n        </ion-col>\n\n    </ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/board/boar-messages-create/boar-messages-create.component.scss":
    /*!********************************************************************************!*\
      !*** ./src/app/board/boar-messages-create/boar-messages-create.component.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppBoardBoarMessagesCreateBoarMessagesCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkL2JvYXItbWVzc2FnZXMtY3JlYXRlL2JvYXItbWVzc2FnZXMtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/board/boar-messages-create/boar-messages-create.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/board/boar-messages-create/boar-messages-create.component.ts ***!
      \******************************************************************************/

    /*! exports provided: BoarMessagesCreateComponent */

    /***/
    function srcAppBoardBoarMessagesCreateBoarMessagesCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoarMessagesCreateComponent", function () {
        return BoarMessagesCreateComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../@shared/services/split-panel.service */
      "./src/app/@shared/services/split-panel.service.ts");
      /* harmony import */


      var _boar_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../boar-messages.service */
      "./src/app/board/boar-messages.service.ts");

      var BoarMessagesCreateComponent = /*#__PURE__*/function () {
        function BoarMessagesCreateComponent(boarMessagesService, route, platform, splitPanel) {
          _classCallCheck(this, BoarMessagesCreateComponent);

          this.boarMessagesService = boarMessagesService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.formValid = false;
        }

        _createClass(BoarMessagesCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.clearBoarMessage();
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

            this.boarMessagesForm.boarMessagesForm.valueChanges.subscribe(function (data) {
              _this.boarMessagesService.boarMessagesFormValid.next(_this.boarMessagesForm.boarMessagesForm.valid);
            });
          }
        }, {
          key: "clearBoarMessage",
          value: function clearBoarMessage() {
            console.log('clear');
            this.boarMessagesService.createBoarMessage();
            this.boarMessagesService.boarMessage = {};
          }
        }]);

        return BoarMessagesCreateComponent;
      }();

      BoarMessagesCreateComponent.ctorParameters = function () {
        return [{
          type: _boar_messages_service__WEBPACK_IMPORTED_MODULE_5__["BoarMessagesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_4__["SplitPanelService"]
        }];
      };

      BoarMessagesCreateComponent.propDecorators = {
        boarMessagesForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['boarMessagesForm']
        }]
      };
      BoarMessagesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-boar-messages-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./boar-messages-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/board/boar-messages-create/boar-messages-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./boar-messages-create.component.scss */
        "./src/app/board/boar-messages-create/boar-messages-create.component.scss"))["default"]]
      })], BoarMessagesCreateComponent);
      /***/
    },

    /***/
    "./src/app/board/boar-messages-edit/boar-messages-edit.component.scss":
    /*!****************************************************************************!*\
      !*** ./src/app/board/boar-messages-edit/boar-messages-edit.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppBoardBoarMessagesEditBoarMessagesEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkL2JvYXItbWVzc2FnZXMtZWRpdC9ib2FyLW1lc3NhZ2VzLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/board/boar-messages-edit/boar-messages-edit.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/board/boar-messages-edit/boar-messages-edit.component.ts ***!
      \**************************************************************************/

    /*! exports provided: BoarMessagesEditComponent */

    /***/
    function srcAppBoardBoarMessagesEditBoarMessagesEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoarMessagesEditComponent", function () {
        return BoarMessagesEditComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../@shared/services/split-panel.service */
      "./src/app/@shared/services/split-panel.service.ts");
      /* harmony import */


      var _boar_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../boar-messages.service */
      "./src/app/board/boar-messages.service.ts");

      var BoarMessagesEditComponent = /*#__PURE__*/function () {
        function BoarMessagesEditComponent(boarMessagesService, route, platform, splitPanel) {
          _classCallCheck(this, BoarMessagesEditComponent);

          this.boarMessagesService = boarMessagesService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.model = null;
        }

        _createClass(BoarMessagesEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.boarMessagesService.editBoarMessage(this.id);
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

            this.boarMessagesForm.boarMessagesForm.valueChanges.subscribe(function (data) {
              _this2.boarMessagesService.boarMessagesFormValid.next(_this2.boarMessagesForm.boarMessagesForm.valid);
            });
          }
        }]);

        return BoarMessagesEditComponent;
      }();

      BoarMessagesEditComponent.ctorParameters = function () {
        return [{
          type: _boar_messages_service__WEBPACK_IMPORTED_MODULE_5__["BoarMessagesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_4__["SplitPanelService"]
        }];
      };

      BoarMessagesEditComponent.propDecorators = {
        boarMessagesForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['boarMessagesForm']
        }]
      };
      BoarMessagesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-boar-messages-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./boar-messages-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/board/boar-messages-edit/boar-messages-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./boar-messages-edit.component.scss */
        "./src/app/board/boar-messages-edit/boar-messages-edit.component.scss"))["default"]]
      })], BoarMessagesEditComponent);
      /***/
    },

    /***/
    "./src/app/board/boar-messages-form/boar-messages-form.component.scss":
    /*!****************************************************************************!*\
      !*** ./src/app/board/boar-messages-form/boar-messages-form.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppBoardBoarMessagesFormBoarMessagesFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkL2JvYXItbWVzc2FnZXMtZm9ybS9ib2FyLW1lc3NhZ2VzLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/board/boar-messages-form/boar-messages-form.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/board/boar-messages-form/boar-messages-form.component.ts ***!
      \**************************************************************************/

    /*! exports provided: BoarMessagesFormComponent */

    /***/
    function srcAppBoardBoarMessagesFormBoarMessagesFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoarMessagesFormComponent", function () {
        return BoarMessagesFormComponent;
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


      var _boar_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../boar-messages.service */
      "./src/app/board/boar-messages.service.ts");

      var BoarMessagesFormComponent = /*#__PURE__*/function () {
        function BoarMessagesFormComponent(boarMessagesService, toTitlecase) {
          _classCallCheck(this, BoarMessagesFormComponent);

          this.boarMessagesService = boarMessagesService;
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
            'body': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('CUERPO') + ' es obligatorio.'
            }],
            'status': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('ESTADO') + ' es obligatorio.'
            }],
            'notify_to_users': [],
            'notify_to_house_units': []
          };
          this.model = {};
        }

        _createClass(BoarMessagesFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }]);

        return BoarMessagesFormComponent;
      }();

      BoarMessagesFormComponent.ctorParameters = function () {
        return [{
          type: _boar_messages_service__WEBPACK_IMPORTED_MODULE_3__["BoarMessagesService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"]
        }];
      };

      BoarMessagesFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        boarMessagesForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['boarMessagesForm']
        }]
      };
      BoarMessagesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-boar-messages-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./boar-messages-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/board/boar-messages-form/boar-messages-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./boar-messages-form.component.scss */
        "./src/app/board/boar-messages-form/boar-messages-form.component.scss"))["default"]]
      })], BoarMessagesFormComponent);
      /***/
    },

    /***/
    "./src/app/board/boar-messages-list-view/boar-messages-list-view.component.scss":
    /*!**************************************************************************************!*\
      !*** ./src/app/board/boar-messages-list-view/boar-messages-list-view.component.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppBoardBoarMessagesListViewBoarMessagesListViewComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkL2JvYXItbWVzc2FnZXMtbGlzdC12aWV3L2JvYXItbWVzc2FnZXMtbGlzdC12aWV3LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/board/boar-messages-list-view/boar-messages-list-view.component.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/board/boar-messages-list-view/boar-messages-list-view.component.ts ***!
      \************************************************************************************/

    /*! exports provided: BoarMessagesListViewComponent */

    /***/
    function srcAppBoardBoarMessagesListViewBoarMessagesListViewComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoarMessagesListViewComponent", function () {
        return BoarMessagesListViewComponent;
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


      var _boar_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../boar-messages.service */
      "./src/app/board/boar-messages.service.ts");
      /* harmony import */


      var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../@shared/services/split-panel.service */
      "./src/app/@shared/services/split-panel.service.ts");

      var BoarMessagesListViewComponent = /*#__PURE__*/function () {
        function BoarMessagesListViewComponent(boarMessagesService, splitPanel) {
          _classCallCheck(this, BoarMessagesListViewComponent);

          this.boarMessagesService = boarMessagesService;
          this.splitPanel = splitPanel;
        }

        _createClass(BoarMessagesListViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.boarMessagesService.getBoarMessages();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }]);

        return BoarMessagesListViewComponent;
      }();

      BoarMessagesListViewComponent.ctorParameters = function () {
        return [{
          type: _boar_messages_service__WEBPACK_IMPORTED_MODULE_2__["BoarMessagesService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_3__["SplitPanelService"]
        }];
      };

      BoarMessagesListViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-boar-messages-list-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./boar-messages-list-view.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/board/boar-messages-list-view/boar-messages-list-view.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./boar-messages-list-view.component.scss */
        "./src/app/board/boar-messages-list-view/boar-messages-list-view.component.scss"))["default"]]
      })], BoarMessagesListViewComponent);
      /***/
    },

    /***/
    "./src/app/board/boar-messages-show/boar-messages-show.component.scss":
    /*!****************************************************************************!*\
      !*** ./src/app/board/boar-messages-show/boar-messages-show.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppBoardBoarMessagesShowBoarMessagesShowComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkL2JvYXItbWVzc2FnZXMtc2hvdy9ib2FyLW1lc3NhZ2VzLXNob3cuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/board/boar-messages-show/boar-messages-show.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/board/boar-messages-show/boar-messages-show.component.ts ***!
      \**************************************************************************/

    /*! exports provided: BoarMessagesShowComponent */

    /***/
    function srcAppBoardBoarMessagesShowBoarMessagesShowComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoarMessagesShowComponent", function () {
        return BoarMessagesShowComponent;
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


      var _boar_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../boar-messages.service */
      "./src/app/board/boar-messages.service.ts");
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

      var BoarMessagesShowComponent = /*#__PURE__*/function () {
        function BoarMessagesShowComponent(boarMessagesService, route, platform, splitPanel) {
          _classCallCheck(this, BoarMessagesShowComponent);

          this.boarMessagesService = boarMessagesService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.model = null;
        }

        _createClass(BoarMessagesShowComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.boarMessagesService.editBoarMessage(this.id);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }]);

        return BoarMessagesShowComponent;
      }();

      BoarMessagesShowComponent.ctorParameters = function () {
        return [{
          type: _boar_messages_service__WEBPACK_IMPORTED_MODULE_2__["BoarMessagesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      BoarMessagesShowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-boar-messages-show',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./boar-messages-show.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/board/boar-messages-show/boar-messages-show.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./boar-messages-show.component.scss */
        "./src/app/board/boar-messages-show/boar-messages-show.component.scss"))["default"]]
      })], BoarMessagesShowComponent);
      /***/
    },

    /***/
    "./src/app/board/boar-messages.service.ts":
    /*!************************************************!*\
      !*** ./src/app/board/boar-messages.service.ts ***!
      \************************************************/

    /*! exports provided: BoarMessagesService */

    /***/
    function srcAppBoardBoarMessagesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoarMessagesService", function () {
        return BoarMessagesService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../@shared/services/navigation.service */
      "./src/app/@shared/services/navigation.service.ts");

      var BoarMessagesService = /*#__PURE__*/function () {
        function BoarMessagesService(api, alert, toast, router, navigation) {
          _classCallCheck(this, BoarMessagesService);

          this.api = api;
          this.alert = alert;
          this.toast = toast;
          this.router = router;
          this.navigation = navigation;
          this.boarMessagesUrl = 'boar-messages';
          this.boarMessagesFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
          this.boarMessages = [];
          this.boarMessage = {};
          this.boarMessagesLists = {};
          this.searchValue = '';
          this.perPage = 10;
          this.meta = null;
          this.page = 1;
          this.pagesContent = document.getElementById('pages-content');
        }

        _createClass(BoarMessagesService, [{
          key: "getBoarMessages",
          value: function getBoarMessages() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.boarMessagesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              _this3.boarMessages = res.data;
              _this3.boarMessagesLists = res.lists;
              _this3.meta = res.meta; // document.getElementById('pages-content').scrollToTop(300);
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editBoarMessage",
          value: function editBoarMessage(id) {
            var _this4 = this;

            this.api.get(this.boarMessagesUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.boarMessage = res.data.model;
              _this4.boarMessagesLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateBoarMessage",
          value: function updateBoarMessage() {
            var _this5 = this;

            this.api.put(this.boarMessagesUrl + '/' + this.boarMessage.id, {
              model: this.boarMessage,
              pivots: {}
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getBoarMessages(1);
            });
          }
        }, {
          key: "createBoarMessage",
          value: function createBoarMessage() {
            var _this6 = this;

            this.api.get(this.boarMessagesUrl + '/create').subscribe(function (res) {
              _this6.boarMessage = {};
              _this6.boarMessagesLists = res.lists;
            });
          }
        }, {
          key: "storeBoarMessage",
          value: function storeBoarMessage() {
            var _this7 = this;

            this.api.post(this.boarMessagesUrl, {
              model: this.boarMessage,
              pivots: {}
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getBoarMessages(1);
            });
          }
        }, {
          key: "deleteBoardMessage",
          value: function deleteBoardMessage(id) {
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

                      this.api["delete"](this.boarMessagesUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getBoarMessages(1);
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

        return BoarMessagesService;
      }();

      BoarMessagesService.ctorParameters = function () {
        return [{
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"]
        }];
      };

      BoarMessagesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], BoarMessagesService);
      /***/
    },

    /***/
    "./src/app/board/board-messages-list/board-messages-list.component.scss":
    /*!******************************************************************************!*\
      !*** ./src/app/board/board-messages-list/board-messages-list.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppBoardBoardMessagesListBoardMessagesListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkL2JvYXJkLW1lc3NhZ2VzLWxpc3QvYm9hcmQtbWVzc2FnZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/board/board-messages-list/board-messages-list.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/board/board-messages-list/board-messages-list.component.ts ***!
      \****************************************************************************/

    /*! exports provided: BoardMessagesListComponent */

    /***/
    function srcAppBoardBoardMessagesListBoardMessagesListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoardMessagesListComponent", function () {
        return BoardMessagesListComponent;
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


      var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../@shared/services/api.service */
      "./src/app/@shared/services/api.service.ts");
      /* harmony import */


      var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../@shared/services/loading.service */
      "./src/app/@shared/services/loading.service.ts");
      /* harmony import */


      var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../@shared/services/split-panel.service */
      "./src/app/@shared/services/split-panel.service.ts");
      /* harmony import */


      var _boar_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../boar-messages.service */
      "./src/app/board/boar-messages.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var BoardMessagesListComponent = /*#__PURE__*/function () {
        function BoardMessagesListComponent(boarMessagesService, api, loading, splitPanel) {
          _classCallCheck(this, BoardMessagesListComponent);

          this.boarMessagesService = boarMessagesService;
          this.api = api;
          this.loading = loading;
          this.splitPanel = splitPanel;
        }

        _createClass(BoardMessagesListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.boarMessagesService.getBoarMessages();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
            this.boarMessagesService.getBoarMessages();
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            this.content.scrollToTop(300);
          }
        }]);

        return BoardMessagesListComponent;
      }();

      BoardMessagesListComponent.ctorParameters = function () {
        return [{
          type: _boar_messages_service__WEBPACK_IMPORTED_MODULE_5__["BoarMessagesService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_4__["SplitPanelService"]
        }];
      };

      BoardMessagesListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], {
            "static": false
          }]
        }]
      };
      BoardMessagesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-board-messages-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./board-messages-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/board/board-messages-list/board-messages-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./board-messages-list.component.scss */
        "./src/app/board/board-messages-list/board-messages-list.component.scss"))["default"]]
      })], BoardMessagesListComponent);
      /***/
    },

    /***/
    "./src/app/board/board-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/board/board-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: BoardRoutingModule */

    /***/
    function srcAppBoardBoardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoardRoutingModule", function () {
        return BoardRoutingModule;
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


      var _board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./board.component */
      "./src/app/board/board.component.ts");
      /* harmony import */


      var _board_messages_list_board_messages_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./board-messages-list/board-messages-list.component */
      "./src/app/board/board-messages-list/board-messages-list.component.ts");
      /* harmony import */


      var _boar_messages_create_boar_messages_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./boar-messages-create/boar-messages-create.component */
      "./src/app/board/boar-messages-create/boar-messages-create.component.ts");
      /* harmony import */


      var _boar_messages_edit_boar_messages_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./boar-messages-edit/boar-messages-edit.component */
      "./src/app/board/boar-messages-edit/boar-messages-edit.component.ts");
      /* harmony import */


      var _boar_messages_show_boar_messages_show_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./boar-messages-show/boar-messages-show.component */
      "./src/app/board/boar-messages-show/boar-messages-show.component.ts");

      var routes = [{
        path: '',
        component: _board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"]
      }, {
        path: 'list',
        component: _board_messages_list_board_messages_list_component__WEBPACK_IMPORTED_MODULE_4__["BoardMessagesListComponent"]
      }, {
        path: 'create',
        component: _boar_messages_create_boar_messages_create_component__WEBPACK_IMPORTED_MODULE_5__["BoarMessagesCreateComponent"]
      }, {
        path: ':id/edit',
        component: _boar_messages_edit_boar_messages_edit_component__WEBPACK_IMPORTED_MODULE_6__["BoarMessagesEditComponent"]
      }, {
        path: ':id/show',
        component: _boar_messages_show_boar_messages_show_component__WEBPACK_IMPORTED_MODULE_7__["BoarMessagesShowComponent"]
      }];

      var BoardRoutingModule = function BoardRoutingModule() {
        _classCallCheck(this, BoardRoutingModule);
      };

      BoardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BoardRoutingModule);
      /***/
    },

    /***/
    "./src/app/board/board.component.scss":
    /*!********************************************!*\
      !*** ./src/app/board/board.component.scss ***!
      \********************************************/

    /*! exports provided: default */

    /***/
    function srcAppBoardBoardComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/board/board.component.ts":
    /*!******************************************!*\
      !*** ./src/app/board/board.component.ts ***!
      \******************************************/

    /*! exports provided: BoardComponent */

    /***/
    function srcAppBoardBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoardComponent", function () {
        return BoardComponent;
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

      var BoardComponent = /*#__PURE__*/function () {
        function BoardComponent(splitPanel) {
          _classCallCheck(this, BoardComponent);

          this.splitPanel = splitPanel;
        }

        _createClass(BoardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }]);

        return BoardComponent;
      }();

      BoardComponent.ctorParameters = function () {
        return [{
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"]
        }];
      };

      BoardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-board',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./board.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/board/board.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./board.component.scss */
        "./src/app/board/board.component.scss"))["default"]]
      })], BoardComponent);
      /***/
    },

    /***/
    "./src/app/board/board.module.ts":
    /*!***************************************!*\
      !*** ./src/app/board/board.module.ts ***!
      \***************************************/

    /*! exports provided: BoardModule */

    /***/
    function srcAppBoardBoardModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoardModule", function () {
        return BoardModule;
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


      var _board_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./board-routing.module */
      "./src/app/board/board-routing.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../@shared/shared.module */
      "./src/app/@shared/shared.module.ts");
      /* harmony import */


      var _board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./board.component */
      "./src/app/board/board.component.ts");
      /* harmony import */


      var _board_messages_list_board_messages_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./board-messages-list/board-messages-list.component */
      "./src/app/board/board-messages-list/board-messages-list.component.ts");
      /* harmony import */


      var _boar_messages_form_boar_messages_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./boar-messages-form/boar-messages-form.component */
      "./src/app/board/boar-messages-form/boar-messages-form.component.ts");
      /* harmony import */


      var _boar_messages_create_boar_messages_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./boar-messages-create/boar-messages-create.component */
      "./src/app/board/boar-messages-create/boar-messages-create.component.ts");
      /* harmony import */


      var _boar_messages_edit_boar_messages_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./boar-messages-edit/boar-messages-edit.component */
      "./src/app/board/boar-messages-edit/boar-messages-edit.component.ts");
      /* harmony import */


      var _boar_messages_list_view_boar_messages_list_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./boar-messages-list-view/boar-messages-list-view.component */
      "./src/app/board/boar-messages-list-view/boar-messages-list-view.component.ts");
      /* harmony import */


      var _boar_messages_show_boar_messages_show_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./boar-messages-show/boar-messages-show.component */
      "./src/app/board/boar-messages-show/boar-messages-show.component.ts");

      var BoardModule = function BoardModule() {
        _classCallCheck(this, BoardModule);
      };

      BoardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_board_component__WEBPACK_IMPORTED_MODULE_7__["BoardComponent"], _board_messages_list_board_messages_list_component__WEBPACK_IMPORTED_MODULE_8__["BoardMessagesListComponent"], _boar_messages_form_boar_messages_form_component__WEBPACK_IMPORTED_MODULE_9__["BoarMessagesFormComponent"], _boar_messages_create_boar_messages_create_component__WEBPACK_IMPORTED_MODULE_10__["BoarMessagesCreateComponent"], _boar_messages_edit_boar_messages_edit_component__WEBPACK_IMPORTED_MODULE_11__["BoarMessagesEditComponent"], _boar_messages_list_view_boar_messages_list_view_component__WEBPACK_IMPORTED_MODULE_12__["BoarMessagesListViewComponent"], _boar_messages_show_boar_messages_show_component__WEBPACK_IMPORTED_MODULE_13__["BoarMessagesShowComponent"]],
        exports: [_boar_messages_list_view_boar_messages_list_view_component__WEBPACK_IMPORTED_MODULE_12__["BoarMessagesListViewComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _board_routing_module__WEBPACK_IMPORTED_MODULE_3__["BoardRoutingModule"]]
      })], BoardModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~board-board-module~folder-folder-module-es5.js.map