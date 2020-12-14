(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-groups-setting-groups-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-form/setting-groups-form.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-form/setting-groups-form.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSettingGroupsSettingGroupsFormSettingGroupsFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #settingGroupsForm=\"ngForm\"\n      novalidate\n      autocomplete=\"off\">\n    <ion-list>\n\n        <ion-item>\n            <ion-label position=\"floating\">Nombre</ion-label>\n            <ion-input type=\"text\"\n                       [(ngModel)]=\"settingGroupsService.settingGroup.name\"\n                       name=\"name\"\n                       id=\"name-field\"\n                       required></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessages.name\">\n                <div class=\"error-message\" *ngIf=\"settingGroupsForm.form.controls['name']?.hasError(validation.type)\">\n                    {{ validation.message }}\n                </div>\n            </ng-container>\n        </div>\n\n        <app-settings-list></app-settings-list>\n\n    </ion-list>\n</form>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-list/setting-groups-list.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-list/setting-groups-list.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSettingGroupsSettingGroupsListSettingGroupsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-searchbar placeholder=\"Buscar grupos de parametros\"\n               animated\n               debounce=\"500\"\n               (keyup.enter)=\"settingGroupsService.getSettingGroups()\"\n               (ionCancel)=\"settingGroupsService.search = ''\"\n               (ionChange)=\"settingGroupsService.getSettingGroups()\"\n               [showCancelButton]=\"'focus'\"\n               [cancelButtonText]=\"'cancelar'\"\n               [(ngModel)]=\"settingGroupsService.search\"></ion-searchbar>\n<ion-list>\n    <ion-list-header>\n        Grupos de parametros\n    </ion-list-header>\n    <ng-container *ngIf=\"settingGroupsService?.settingGroups?.length\">\n\n        <ng-container *ngFor=\"let settingGroup of settingGroupsService?.settingGroups\">\n            <ion-item-sliding>\n                <ion-item (click)=\"settingGroupsService.getSettingGroup(settingGroup.code); openModal('Editar')\">\n                    <ion-label>\n                        {{settingGroup.name}}\n                        <h3>{{settingGroup.code}}</h3>\n                    </ion-label>\n                </ion-item>\n                <ion-item-options side=\"end\">\n                    <ion-item-option color=\"danger\"\n                                     (click)=\"settingGroupsService.deleteSettingGroup(settingGroup)\">\n                        <ion-icon name=\"trash\"\n                                  class=\"icon-s\"></ion-icon>\n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ng-container>\n\n    </ng-container>\n\n    <ng-container *ngIf=\"!settingGroupsService?.settingGroups?.length\">\n        <ion-item>\n            <ion-label>Sin grupos de parametros</ion-label>\n            <ion-button (click)=\"settingGroupsService.settingGroup = {}; openModal()\"\n                        slot=\"end\"\n                        fill=\"outline\"\n                        color=\"success\">\n                Crear grupos de parametros\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-list>\n\n\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.html":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSettingGroupsSettingGroupsModalSettingGroupsModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- my-modal.page.html -->\n<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"closeModal()\">\n                <ion-icon slot=\"icon-only\"\n                          [name]=\"'arrow-back-outline'\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"primary\">\n            <ion-button color=\"success\"\n                        (click)=\"settingGroupsService.saveSettingGroup(); closeModal()\"\n                        [disabled]=\"!settingGroupsFormComponent?.settingGroupsForm?.valid\">\n                <ion-icon slot=\"icon-only\"\n                          [name]=\"'save-outline'\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>{{action}} Grupo de parametros</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <app-setting-groups-form #settingGroupsFormComponent></app-setting-groups-form>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSettingGroupsSettingGroupsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header translucent=\"true\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-toggle auto-hide=\"false\" menu=\"main-menu\">\n              <ion-button (click)=\"toggleMenu()\">\n                  <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n              </ion-button>\n          </ion-menu-toggle>\n      </ion-buttons>\n      <ion-buttons slot=\"primary\">\n          <ion-button color=\"success\"\n                      (click)=\"settingGroupsService.settingGroup = {}; openModal('Crear')\">\n              <ion-icon slot=\"icon-only\" [name]=\"'add-circle-outline'\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n    <ion-title>Grupos de parametros</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <app-setting-groups-list></app-setting-groups-list>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/setting-groups/setting-groups-form/setting-groups-form.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/setting-groups/setting-groups-form/setting-groups-form.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSettingGroupsSettingGroupsFormSettingGroupsFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmctZ3JvdXBzL3NldHRpbmctZ3JvdXBzLWZvcm0vc2V0dGluZy1ncm91cHMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/setting-groups/setting-groups-form/setting-groups-form.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/setting-groups/setting-groups-form/setting-groups-form.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: SettingGroupsFormComponent */

    /***/
    function srcAppSettingGroupsSettingGroupsFormSettingGroupsFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingGroupsFormComponent", function () {
        return SettingGroupsFormComponent;
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


      var _setting_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../setting-groups.service */
      "./src/app/setting-groups/setting-groups.service.ts");

      var SettingGroupsFormComponent = /*#__PURE__*/function () {
        function SettingGroupsFormComponent(settingGroupsService) {
          _classCallCheck(this, SettingGroupsFormComponent);

          this.settingGroupsService = settingGroupsService;
          this.validationMessages = {
            'name': [{
              type: 'required',
              message: 'El campo nombre es obligatorio.'
            }]
          };
        }

        _createClass(SettingGroupsFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SettingGroupsFormComponent;
      }();

      SettingGroupsFormComponent.ctorParameters = function () {
        return [{
          type: _setting_groups_service__WEBPACK_IMPORTED_MODULE_2__["SettingGroupsService"]
        }];
      };

      SettingGroupsFormComponent.propDecorators = {
        settingGroupsForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['settingGroupsForm']
        }]
      };
      SettingGroupsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting-groups-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./setting-groups-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-form/setting-groups-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./setting-groups-form.component.scss */
        "./src/app/setting-groups/setting-groups-form/setting-groups-form.component.scss"))["default"]]
      })], SettingGroupsFormComponent);
      /***/
    },

    /***/
    "./src/app/setting-groups/setting-groups-list/setting-groups-list.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/setting-groups/setting-groups-list/setting-groups-list.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSettingGroupsSettingGroupsListSettingGroupsListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmctZ3JvdXBzL3NldHRpbmctZ3JvdXBzLWxpc3Qvc2V0dGluZy1ncm91cHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/setting-groups/setting-groups-list/setting-groups-list.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/setting-groups/setting-groups-list/setting-groups-list.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: SettingGroupsListComponent */

    /***/
    function srcAppSettingGroupsSettingGroupsListSettingGroupsListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingGroupsListComponent", function () {
        return SettingGroupsListComponent;
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


      var _setting_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../setting-groups.service */
      "./src/app/setting-groups/setting-groups.service.ts");
      /* harmony import */


      var _setting_groups_modal_setting_groups_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../setting-groups-modal/setting-groups-modal.component */
      "./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var SettingGroupsListComponent = /*#__PURE__*/function () {
        function SettingGroupsListComponent(settingGroupsService, modalController) {
          _classCallCheck(this, SettingGroupsListComponent);

          this.settingGroupsService = settingGroupsService;
          this.modalController = modalController;
        }

        _createClass(SettingGroupsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.settingGroupsService.getSettingGroups();
          }
        }, {
          key: "openModal",
          value: function openModal() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _setting_groups_modal_setting_groups_modal_component__WEBPACK_IMPORTED_MODULE_3__["SettingGroupsModalComponent"],
                        componentProps: {
                          action: action !== null && action !== void 0 ? action : ''
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned !== null) {
                          _this.dataReturned = dataReturned.data;
                          console.table(dataReturned);
                        }
                      });
                      _context.next = 6;
                      return modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return SettingGroupsListComponent;
      }();

      SettingGroupsListComponent.ctorParameters = function () {
        return [{
          type: _setting_groups_service__WEBPACK_IMPORTED_MODULE_2__["SettingGroupsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      SettingGroupsListComponent.propDecorators = {
        settingGroupsPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['settingGroupsPage']
        }]
      };
      SettingGroupsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting-groups-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./setting-groups-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-list/setting-groups-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./setting-groups-list.component.scss */
        "./src/app/setting-groups/setting-groups-list/setting-groups-list.component.scss"))["default"]]
      })], SettingGroupsListComponent);
      /***/
    },

    /***/
    "./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.scss":
    /*!*****************************************************************************************!*\
      !*** ./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSettingGroupsSettingGroupsModalSettingGroupsModalComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmctZ3JvdXBzL3NldHRpbmctZ3JvdXBzLW1vZGFsL3NldHRpbmctZ3JvdXBzLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.ts":
    /*!***************************************************************************************!*\
      !*** ./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: SettingGroupsModalComponent */

    /***/
    function srcAppSettingGroupsSettingGroupsModalSettingGroupsModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingGroupsModalComponent", function () {
        return SettingGroupsModalComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _setting_groups_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../setting-groups.service */
      "./src/app/setting-groups/setting-groups.service.ts");

      var SettingGroupsModalComponent = /*#__PURE__*/function () {
        function SettingGroupsModalComponent(modalController, navParams, settingGroupsService) {
          _classCallCheck(this, SettingGroupsModalComponent);

          this.modalController = modalController;
          this.navParams = navParams;
          this.settingGroupsService = settingGroupsService;
        }

        _createClass(SettingGroupsModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.table(this.navParams);
            this.action = this.navParams.data.action;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      onClosedData = "Wrapped Up!";
                      _context2.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return SettingGroupsModalComponent;
      }();

      SettingGroupsModalComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
        }, {
          type: _setting_groups_service__WEBPACK_IMPORTED_MODULE_3__["SettingGroupsService"]
        }];
      };

      SettingGroupsModalComponent.propDecorators = {
        settingGroupsFormComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['settingGroupsFormComponent']
        }]
      };
      SettingGroupsModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting-groups-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./setting-groups-modal.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./setting-groups-modal.component.scss */
        "./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.scss"))["default"]]
      })], SettingGroupsModalComponent);
      /***/
    },

    /***/
    "./src/app/setting-groups/setting-groups-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/setting-groups/setting-groups-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: SettingGroupsPageRoutingModule */

    /***/
    function srcAppSettingGroupsSettingGroupsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingGroupsPageRoutingModule", function () {
        return SettingGroupsPageRoutingModule;
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


      var _setting_groups_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./setting-groups.page */
      "./src/app/setting-groups/setting-groups.page.ts");

      var routes = [{
        path: '',
        component: _setting_groups_page__WEBPACK_IMPORTED_MODULE_3__["SettingGroupsPage"]
      }];

      var SettingGroupsPageRoutingModule = function SettingGroupsPageRoutingModule() {
        _classCallCheck(this, SettingGroupsPageRoutingModule);
      };

      SettingGroupsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SettingGroupsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/setting-groups/setting-groups.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/setting-groups/setting-groups.module.ts ***!
      \*********************************************************/

    /*! exports provided: SettingGroupsPageModule */

    /***/
    function srcAppSettingGroupsSettingGroupsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingGroupsPageModule", function () {
        return SettingGroupsPageModule;
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


      var _setting_groups_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./setting-groups-routing.module */
      "./src/app/setting-groups/setting-groups-routing.module.ts");
      /* harmony import */


      var _setting_groups_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./setting-groups.page */
      "./src/app/setting-groups/setting-groups.page.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../@shared/shared.module */
      "./src/app/@shared/shared.module.ts");
      /* harmony import */


      var _setting_groups_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./setting-groups.service */
      "./src/app/setting-groups/setting-groups.service.ts");
      /* harmony import */


      var _setting_groups_list_setting_groups_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./setting-groups-list/setting-groups-list.component */
      "./src/app/setting-groups/setting-groups-list/setting-groups-list.component.ts");
      /* harmony import */


      var _setting_groups_form_setting_groups_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./setting-groups-form/setting-groups-form.component */
      "./src/app/setting-groups/setting-groups-form/setting-groups-form.component.ts");
      /* harmony import */


      var _setting_groups_modal_setting_groups_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./setting-groups-modal/setting-groups-modal.component */
      "./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.ts");
      /* harmony import */


      var _settings_settings_list_settings_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../settings/settings-list/settings-list.component */
      "./src/app/settings/settings-list/settings-list.component.ts");
      /* harmony import */


      var _settings_settings_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../settings/settings.service */
      "./src/app/settings/settings.service.ts");

      var SettingGroupsPageModule = function SettingGroupsPageModule() {
        _classCallCheck(this, SettingGroupsPageModule);
      };

      SettingGroupsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _setting_groups_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingGroupsPageRoutingModule"]],
        providers: [_setting_groups_service__WEBPACK_IMPORTED_MODULE_8__["SettingGroupsService"], _settings_settings_service__WEBPACK_IMPORTED_MODULE_13__["SettingsService"]],
        declarations: [_setting_groups_page__WEBPACK_IMPORTED_MODULE_6__["SettingGroupsPage"], _setting_groups_list_setting_groups_list_component__WEBPACK_IMPORTED_MODULE_9__["SettingGroupsListComponent"], _setting_groups_form_setting_groups_form_component__WEBPACK_IMPORTED_MODULE_10__["SettingGroupsFormComponent"], _setting_groups_modal_setting_groups_modal_component__WEBPACK_IMPORTED_MODULE_11__["SettingGroupsModalComponent"], _settings_settings_list_settings_list_component__WEBPACK_IMPORTED_MODULE_12__["SettingsListComponent"]]
      })], SettingGroupsPageModule);
      /***/
    },

    /***/
    "./src/app/setting-groups/setting-groups.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/setting-groups/setting-groups.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSettingGroupsSettingGroupsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmctZ3JvdXBzL3NldHRpbmctZ3JvdXBzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/setting-groups/setting-groups.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/setting-groups/setting-groups.page.ts ***!
      \*******************************************************/

    /*! exports provided: SettingGroupsPage */

    /***/
    function srcAppSettingGroupsSettingGroupsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingGroupsPage", function () {
        return SettingGroupsPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _setting_groups_modal_setting_groups_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./setting-groups-modal/setting-groups-modal.component */
      "./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.ts");
      /* harmony import */


      var _setting_groups_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./setting-groups.service */
      "./src/app/setting-groups/setting-groups.service.ts"); // import {SettingGroupsService} from "./setting-groups.service";


      var SettingGroupsPage = /*#__PURE__*/function () {
        function SettingGroupsPage(modalController, settingGroupsService) {
          _classCallCheck(this, SettingGroupsPage);

          this.modalController = modalController;
          this.settingGroupsService = settingGroupsService;
        }

        _createClass(SettingGroupsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            var splitPane = document.querySelector('ion-split-pane');
            var windowWidth = window.innerWidth;
            var splitPaneShownAt = 992;
            var when = "(min-width: ".concat(splitPaneShownAt, "px)");

            if (windowWidth >= splitPaneShownAt) {
              // split pane view is visible
              var open = splitPane.when === when;
              splitPane.when = open ? false : when;
            } else {
              // split pane view is not visible
              // toggle menu open
              var menu = splitPane.querySelector('ion-menu');
              return menu.open();
            }
          }
        }, {
          key: "openModal",
          value: function openModal() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: _setting_groups_modal_setting_groups_modal_component__WEBPACK_IMPORTED_MODULE_3__["SettingGroupsModalComponent"],
                        componentProps: {
                          action: action !== null && action !== void 0 ? action : ''
                        }
                      });

                    case 2:
                      modal = _context3.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned !== null) {
                          _this2.dataReturned = dataReturned.data; // console.table(dataReturned);
                        }
                      });
                      _context3.next = 6;
                      return modal.present();

                    case 6:
                      return _context3.abrupt("return", _context3.sent);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return SettingGroupsPage;
      }();

      SettingGroupsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _setting_groups_service__WEBPACK_IMPORTED_MODULE_4__["SettingGroupsService"]
        }];
      };

      SettingGroupsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting-groups',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./setting-groups.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./setting-groups.page.scss */
        "./src/app/setting-groups/setting-groups.page.scss"))["default"]]
      })], SettingGroupsPage);
      /***/
    },

    /***/
    "./src/app/setting-groups/setting-groups.service.ts":
    /*!**********************************************************!*\
      !*** ./src/app/setting-groups/setting-groups.service.ts ***!
      \**********************************************************/

    /*! exports provided: SettingGroupsService */

    /***/
    function srcAppSettingGroupsSettingGroupsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingGroupsService", function () {
        return SettingGroupsService;
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
      /*! ../@shared/services/api.service */
      "./src/app/@shared/services/api.service.ts");
      /* harmony import */


      var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../@shared/services/toast.service */
      "./src/app/@shared/services/toast.service.ts");
      /* harmony import */


      var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../@shared/services/alert.service */
      "./src/app/@shared/services/alert.service.ts");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../@shared/services/auth.service */
      "./src/app/@shared/services/auth.service.ts");

      var SettingGroupsService = /*#__PURE__*/function () {
        function SettingGroupsService(api, toast, alert, auth) {
          _classCallCheck(this, SettingGroupsService);

          this.api = api;
          this.toast = toast;
          this.alert = alert;
          this.auth = auth;
          this.search = '';
          this.searchId = '';
          this.searchName = '';
          this.searchCode = '';
          this.searchSettingsName = '';
          this.searchSettingsCode = ''; //

          this.newSettingGroup();
          this.settingGroups = [];
        }
        /**
         * Get SettingGroups
         * @param page
         */


        _createClass(SettingGroupsService, [{
          key: "getSettingGroups",
          value: function getSettingGroups() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var searchString = this.search ? "&q[name:cont]=".concat(this.search, "&q[code:cont]=").concat(this.search, "&q[settings.name:cont]=").concat(this.search, "&q[settings.code:cont]=").concat(this.search) : '';
            this.api.get("setting-groups?page=".concat(page).concat(searchString)).subscribe(function (res) {
              _this3.settingGroups = res.data;
            });
          }
          /**
           * Get SettingGroups
           * @param code
           */

        }, {
          key: "getSettingGroup",
          value: function getSettingGroup(code) {
            var _this4 = this;

            this.api.get("setting-groups/".concat(code)).subscribe(function (res) {
              _this4.settingGroup = res.data;
            });
          }
          /**
           * Save SettingGroups
           */

        }, {
          key: "saveSettingGroup",
          value: function saveSettingGroup() {
            if (this.settingGroup.id) {
              this.updateSettingGroup();
            }

            if (!this.settingGroup.id) {
              this.storeSettingGroup();
            }
          }
          /**
           * Store SettingGroup
           */

        }, {
          key: "storeSettingGroup",
          value: function storeSettingGroup() {
            var _this5 = this;

            this.api.post('setting-groups', this.settingGroup).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success');

              _this5.getSettingGroups();
            }, function (err) {});
          }
          /**
           * Update SettingGroup
           */

        }, {
          key: "updateSettingGroup",
          value: function updateSettingGroup() {
            var _this6 = this;

            this.api.put("setting-groups/".concat(this.settingGroup.code), this.settingGroup).subscribe(function (res) {
              _this6.toast.present(res.message, 'toast-success');

              _this6.getSettingGroups();
            }, function (err) {});
          }
          /**
           * Delete SettingGroup
           * @param settingGroup
           */

        }, {
          key: "deleteSettingGroup",
          value: function deleteSettingGroup(settingGroup) {
            var _this7 = this;

            this.alert.confirmation("Eliminar ".concat(settingGroup.name, "?")).then(function (res) {
              if (res) {
                _this7.api["delete"]("setting-groups/".concat(settingGroup.code), {}).subscribe(function (res) {
                  _this7.toast.present(res.message, 'toast-success');

                  _this7.getSettingGroups();
                }, function (err) {});
              }
            });
            return;
          }
          /**
           * Create empty SettingGroup
           */

        }, {
          key: "newSettingGroup",
          value: function newSettingGroup() {
            this.settingGroup = {
              id: null,
              name: null,
              code: null,
              created_at: null,
              updated_at: null,
              settings: []
            };
          }
        }]);

        return SettingGroupsService;
      }();

      SettingGroupsService.ctorParameters = function () {
        return [{
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }, {
          type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]
        }, {
          type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }];
      };

      SettingGroupsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SettingGroupsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=setting-groups-setting-groups-module-es5.js.map