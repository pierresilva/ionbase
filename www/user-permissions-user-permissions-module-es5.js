(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-permissions-user-permissions-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user-permissions/user-permissions-create/user-permissions-create.component.html":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-permissions/user-permissions-create/user-permissions-create.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserPermissionsUserPermissionsCreateUserPermissionsCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/user-permissions'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"userPermissionsService.storeUserPermission()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!userPermissionsService.userPermissionsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'USUARIOS PERMISOS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-user-permissions-form #userPermissionForm [model]=\"userPermissionsService.userPermission\"></app-user-permissions-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user-permissions/user-permissions-duplicate/user-permissions-duplicate.component.html":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-permissions/user-permissions-duplicate/user-permissions-duplicate.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserPermissionsUserPermissionsDuplicateUserPermissionsDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  UserPermissions duplicate works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user-permissions/user-permissions-edit/user-permissions-edit.component.html":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-permissions/user-permissions-edit/user-permissions-edit.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserPermissionsUserPermissionsEditUserPermissionsEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/user-permissions'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"userPermissionsService.updateUserPermission()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!userPermissionsService.userPermissionsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'USUARIOS PERMISOS' | titlecase}}: {{ userPermissionsService.userPermission?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-user-permissions-form #userPermissionForm [model]=\"userPermissionsService.userPermission\"></app-user-permissions-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user-permissions/user-permissions-form/user-permissions-form.component.html":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-permissions/user-permissions-form/user-permissions-form.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserPermissionsUserPermissionsFormUserPermissionsFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #userPermissionsForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- user_role_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'USUARIOS ROLES' | titlecase }}</ion-label>\n        <ionic-selectable name=\"user_role_ids\"\n                          id=\"user_role_ids-field\"\n                          [(ngModel)]=\"model.user_roles\"\n                          [items]=\"userPermissionsService.userPermissionLists.UserRole\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('USUARIOS ROLES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('USUARIOS ROLES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setUserRoleIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.user_role_ids\">\n            <div class=\"error-message\" *ngIf=\"userPermissionsForm.form.controls['user_role_ids']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end user_role_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"userPermissionsForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- code -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'CÓDIGO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.code\"\n                            type=\"text\"\n                            name=\"code\"\n                            id=\"code-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.code\">\n                    <div class=\"error-message\" *ngIf=\"userPermissionsForm.form.controls['code']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end code -->\n\n\n</form>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user-permissions/user-permissions-list/user-permissions-list.component.html":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-permissions/user-permissions-list/user-permissions-list.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserPermissionsUserPermissionsListUserPermissionsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'USUARIOS PERMISOS' | titlecase}}\"\n                 primaryLink=\"user-permissions/create\"\n                 primaryText=\"Crear {{'USUARIOS PERMISOS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('USUARIOS PERMISOS' | lowercase )\"\n                       (ionCancel)=\"this.userPermissionsService.searchValue = ''; userPermissionsService.getUserPermissions()\"\n                       (keyup.enter)=\"userPermissionsService.getUserPermissions()\"\n                       [(ngModel)]=\"userPermissionsService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && userPermissionsService.userPermissions?.length\">\n        <ion-card *ngFor=\"let userPermission of userPermissionsService.userPermissions; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ userPermission?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CÓDIGO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ userPermission?.code }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'USUARIOS ROLES' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"userPermission?.user_roles?.length\">\n                                <ng-container *ngFor=\"let userRole of userPermission?.user_roles; let last = last\">\n                                    <a routerLink=\"/user-roles/{{ userRole?.id }}/edit\">{{ userRole?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/user-permissions/' + userPermission?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"userPermissionsService.deleteUserPermission(userPermission?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !userPermissionsService.userPermissions?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'USUARIOS PERMISOS' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/user-permissions/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'USUARIOS PERMISOS' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"userPermissionsService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"userPermissionsService.getUserPermissions(userPermissionsService.meta.current_page - 1)\"\n                        [disabled]=\"userPermissionsService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{userPermissionsService.meta.current_page}}\n                /{{userPermissionsService.meta.last_page}} {{userPermissionsService.meta.from}}-{{userPermissionsService.meta.to}}\n                /{{userPermissionsService.meta.total}} </ion-button>\n            <ion-button (click)=\"userPermissionsService.getUserPermissions(userPermissionsService.meta.current_page + 1)\"\n                        [disabled]=\"userPermissionsService.meta.current_page == userPermissionsService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user-permissions/user-permissions.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-permissions/user-permissions.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserPermissionsUserPermissionsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"USUARIOS PERMISOS\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/user-permissions/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'USUARIOS PERMISOS'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/user-permissions/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'USUARIOS PERMISOS' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/user-permissions/user-permissions-create/user-permissions-create.component.scss":
    /*!*************************************************************************************************!*\
      !*** ./src/app/user-permissions/user-permissions-create/user-permissions-create.component.scss ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserPermissionsUserPermissionsCreateUserPermissionsCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGVybWlzc2lvbnMvdXNlci1wZXJtaXNzaW9ucy1jcmVhdGUvdXNlci1wZXJtaXNzaW9ucy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/user-permissions/user-permissions-create/user-permissions-create.component.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/user-permissions/user-permissions-create/user-permissions-create.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: UserPermissionsCreateComponent */

    /***/
    function srcAppUserPermissionsUserPermissionsCreateUserPermissionsCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPermissionsCreateComponent", function () {
        return UserPermissionsCreateComponent;
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


      var _user_permissions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../user-permissions.service */
      "./src/app/user-permissions/user-permissions.service.ts");
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

      var UserPermissionsCreateComponent = /*#__PURE__*/function () {
        function UserPermissionsCreateComponent(userPermissionsService, route, platform, splitPanel) {
          _classCallCheck(this, UserPermissionsCreateComponent);

          this.userPermissionsService = userPermissionsService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.formValid = false;
        }

        _createClass(UserPermissionsCreateComponent, [{
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

            this.userPermissionForm.userPermissionsForm.valueChanges.subscribe(function (data) {
              _this.userPermissionsService.userPermissionsFormValid.next(_this.userPermissionForm.userPermissionsForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.userPermissionsService.createUserPermission();
            this.userPermissionsService.userPermission = {};
          }
        }]);

        return UserPermissionsCreateComponent;
      }();

      UserPermissionsCreateComponent.ctorParameters = function () {
        return [{
          type: _user_permissions_service__WEBPACK_IMPORTED_MODULE_2__["UserPermissionsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      UserPermissionsCreateComponent.propDecorators = {
        userPermissionForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['userPermissionForm']
        }]
      };
      UserPermissionsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-permissions-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-permissions-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user-permissions/user-permissions-create/user-permissions-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-permissions-create.component.scss */
        "./src/app/user-permissions/user-permissions-create/user-permissions-create.component.scss"))["default"]]
      })], UserPermissionsCreateComponent);
      /***/
    },

    /***/
    "./src/app/user-permissions/user-permissions-duplicate/user-permissions-duplicate.component.scss":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/user-permissions/user-permissions-duplicate/user-permissions-duplicate.component.scss ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserPermissionsUserPermissionsDuplicateUserPermissionsDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGVybWlzc2lvbnMvdXNlci1wZXJtaXNzaW9ucy1kdXBsaWNhdGUvdXNlci1wZXJtaXNzaW9ucy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/user-permissions/user-permissions-duplicate/user-permissions-duplicate.component.ts":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/user-permissions/user-permissions-duplicate/user-permissions-duplicate.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: UserPermissionsDuplicateComponent */

    /***/
    function srcAppUserPermissionsUserPermissionsDuplicateUserPermissionsDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPermissionsDuplicateComponent", function () {
        return UserPermissionsDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var UserPermissionsDuplicateComponent = /*#__PURE__*/function () {
        function UserPermissionsDuplicateComponent() {
          _classCallCheck(this, UserPermissionsDuplicateComponent);
        }

        _createClass(UserPermissionsDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserPermissionsDuplicateComponent;
      }();

      UserPermissionsDuplicateComponent.ctorParameters = function () {
        return [];
      };

      UserPermissionsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-permissions-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-permissions-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user-permissions/user-permissions-duplicate/user-permissions-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-permissions-duplicate.component.scss */
        "./src/app/user-permissions/user-permissions-duplicate/user-permissions-duplicate.component.scss"))["default"]]
      })], UserPermissionsDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/user-permissions/user-permissions-edit/user-permissions-edit.component.scss":
    /*!*********************************************************************************************!*\
      !*** ./src/app/user-permissions/user-permissions-edit/user-permissions-edit.component.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserPermissionsUserPermissionsEditUserPermissionsEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGVybWlzc2lvbnMvdXNlci1wZXJtaXNzaW9ucy1lZGl0L3VzZXItcGVybWlzc2lvbnMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/user-permissions/user-permissions-edit/user-permissions-edit.component.ts":
    /*!*******************************************************************************************!*\
      !*** ./src/app/user-permissions/user-permissions-edit/user-permissions-edit.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: UserPermissionsEditComponent */

    /***/
    function srcAppUserPermissionsUserPermissionsEditUserPermissionsEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPermissionsEditComponent", function () {
        return UserPermissionsEditComponent;
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


      var _user_permissions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../user-permissions.service */
      "./src/app/user-permissions/user-permissions.service.ts");
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

      var UserPermissionsEditComponent = /*#__PURE__*/function () {
        function UserPermissionsEditComponent(userPermissionsService, route, platform, splitPanel) {
          _classCallCheck(this, UserPermissionsEditComponent);

          this.userPermissionsService = userPermissionsService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.model = null;
        }

        _createClass(UserPermissionsEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.userPermissionsService.editUserPermission(this.id);
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

            this.userPermissionForm.userPermissionsForm.valueChanges.subscribe(function (data) {
              _this2.userPermissionsService.userPermissionsFormValid.next(_this2.userPermissionForm.userPermissionsForm.valid);
            });
          }
        }]);

        return UserPermissionsEditComponent;
      }();

      UserPermissionsEditComponent.ctorParameters = function () {
        return [{
          type: _user_permissions_service__WEBPACK_IMPORTED_MODULE_2__["UserPermissionsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      UserPermissionsEditComponent.propDecorators = {
        userPermissionForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['userPermissionForm']
        }]
      };
      UserPermissionsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-permissions-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-permissions-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user-permissions/user-permissions-edit/user-permissions-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-permissions-edit.component.scss */
        "./src/app/user-permissions/user-permissions-edit/user-permissions-edit.component.scss"))["default"]]
      })], UserPermissionsEditComponent);
      /***/
    },

    /***/
    "./src/app/user-permissions/user-permissions-form/user-permissions-form.component.scss":
    /*!*********************************************************************************************!*\
      !*** ./src/app/user-permissions/user-permissions-form/user-permissions-form.component.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserPermissionsUserPermissionsFormUserPermissionsFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGVybWlzc2lvbnMvdXNlci1wZXJtaXNzaW9ucy1mb3JtL3VzZXItcGVybWlzc2lvbnMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/user-permissions/user-permissions-form/user-permissions-form.component.ts":
    /*!*******************************************************************************************!*\
      !*** ./src/app/user-permissions/user-permissions-form/user-permissions-form.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: UserPermissionsFormComponent */

    /***/
    function srcAppUserPermissionsUserPermissionsFormUserPermissionsFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPermissionsFormComponent", function () {
        return UserPermissionsFormComponent;
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


      var _user_permissions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../user-permissions.service */
      "./src/app/user-permissions/user-permissions.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var UserPermissionsFormComponent = /*#__PURE__*/function () {
        function UserPermissionsFormComponent(userPermissionsService, toTitlecase) {
          _classCallCheck(this, UserPermissionsFormComponent);

          this.userPermissionsService = userPermissionsService;
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
            'user_role_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('USUARIOS ROLES') + ' es obligatorio.'
            }]
          };
        }

        _createClass(UserPermissionsFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // set setUserRoleIds

        }, {
          key: "setUserRoleIds",
          value: function setUserRoleIds(event) {
            var userRoleIds = null;

            if (event.value.length) {
              userRoleIds = [];

              for (var i = 0; i < event.value.length; i++) {
                userRoleIds.push(event.value[i].id);
              }
            }

            this.userPermissionsService.userPermission.user_role_ids = userRoleIds;
          }
        }]);

        return UserPermissionsFormComponent;
      }();

      UserPermissionsFormComponent.ctorParameters = function () {
        return [{
          type: _user_permissions_service__WEBPACK_IMPORTED_MODULE_2__["UserPermissionsService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      UserPermissionsFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        userPermissionsForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['userPermissionsForm']
        }]
      };
      UserPermissionsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-permissions-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-permissions-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user-permissions/user-permissions-form/user-permissions-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-permissions-form.component.scss */
        "./src/app/user-permissions/user-permissions-form/user-permissions-form.component.scss"))["default"]]
      })], UserPermissionsFormComponent);
      /***/
    },

    /***/
    "./src/app/user-permissions/user-permissions-list/user-permissions-list.component.scss":
    /*!*********************************************************************************************!*\
      !*** ./src/app/user-permissions/user-permissions-list/user-permissions-list.component.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserPermissionsUserPermissionsListUserPermissionsListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGVybWlzc2lvbnMvdXNlci1wZXJtaXNzaW9ucy1saXN0L3VzZXItcGVybWlzc2lvbnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/user-permissions/user-permissions-list/user-permissions-list.component.ts":
    /*!*******************************************************************************************!*\
      !*** ./src/app/user-permissions/user-permissions-list/user-permissions-list.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: UserPermissionsListComponent */

    /***/
    function srcAppUserPermissionsUserPermissionsListUserPermissionsListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPermissionsListComponent", function () {
        return UserPermissionsListComponent;
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


      var _user_permissions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../user-permissions.service */
      "./src/app/user-permissions/user-permissions.service.ts");
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

      var UserPermissionsListComponent = /*#__PURE__*/function () {
        function UserPermissionsListComponent(userPermissionsService, api, loading, splitPanel) {
          _classCallCheck(this, UserPermissionsListComponent);

          this.userPermissionsService = userPermissionsService;
          this.api = api;
          this.loading = loading;
          this.splitPanel = splitPanel;
        }

        _createClass(UserPermissionsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userPermissionsService.getUserPermissions();
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

        return UserPermissionsListComponent;
      }();

      UserPermissionsListComponent.ctorParameters = function () {
        return [{
          type: _user_permissions_service__WEBPACK_IMPORTED_MODULE_2__["UserPermissionsService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"]
        }];
      };

      UserPermissionsListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      UserPermissionsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-permissions-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-permissions-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user-permissions/user-permissions-list/user-permissions-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-permissions-list.component.scss */
        "./src/app/user-permissions/user-permissions-list/user-permissions-list.component.scss"))["default"]]
      })], UserPermissionsListComponent);
      /***/
    },

    /***/
    "./src/app/user-permissions/user-permissions-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/user-permissions/user-permissions-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: UserPermissionsPageRoutingModule */

    /***/
    function srcAppUserPermissionsUserPermissionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPermissionsPageRoutingModule", function () {
        return UserPermissionsPageRoutingModule;
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


      var _user_permissions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-permissions.page */
      "./src/app/user-permissions/user-permissions.page.ts");
      /* harmony import */


      var _user_permissions_edit_user_permissions_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user-permissions-edit/user-permissions-edit.component */
      "./src/app/user-permissions/user-permissions-edit/user-permissions-edit.component.ts");
      /* harmony import */


      var _user_permissions_create_user_permissions_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-permissions-create/user-permissions-create.component */
      "./src/app/user-permissions/user-permissions-create/user-permissions-create.component.ts");
      /* harmony import */


      var _user_permissions_list_user_permissions_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-permissions-list/user-permissions-list.component */
      "./src/app/user-permissions/user-permissions-list/user-permissions-list.component.ts");

      var routes = [{
        path: '',
        component: _user_permissions_page__WEBPACK_IMPORTED_MODULE_3__["UserPermissionsPage"]
      }, {
        path: 'list',
        component: _user_permissions_list_user_permissions_list_component__WEBPACK_IMPORTED_MODULE_6__["UserPermissionsListComponent"]
      }, {
        path: 'create',
        component: _user_permissions_create_user_permissions_create_component__WEBPACK_IMPORTED_MODULE_5__["UserPermissionsCreateComponent"]
      }, {
        path: ':id/edit',
        component: _user_permissions_edit_user_permissions_edit_component__WEBPACK_IMPORTED_MODULE_4__["UserPermissionsEditComponent"]
      }];

      var UserPermissionsPageRoutingModule = function UserPermissionsPageRoutingModule() {
        _classCallCheck(this, UserPermissionsPageRoutingModule);
      };

      UserPermissionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserPermissionsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/user-permissions/user-permissions.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/user-permissions/user-permissions.module.ts ***!
      \*************************************************************/

    /*! exports provided: UserPermissionsPageModule */

    /***/
    function srcAppUserPermissionsUserPermissionsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPermissionsPageModule", function () {
        return UserPermissionsPageModule;
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


      var _user_permissions_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-permissions-routing.module */
      "./src/app/user-permissions/user-permissions-routing.module.ts");
      /* harmony import */


      var _user_permissions_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./user-permissions.page */
      "./src/app/user-permissions/user-permissions.page.ts");
      /* harmony import */


      var _user_permissions_list_user_permissions_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./user-permissions-list/user-permissions-list.component */
      "./src/app/user-permissions/user-permissions-list/user-permissions-list.component.ts");
      /* harmony import */


      var _user_permissions_create_user_permissions_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./user-permissions-create/user-permissions-create.component */
      "./src/app/user-permissions/user-permissions-create/user-permissions-create.component.ts");
      /* harmony import */


      var _user_permissions_duplicate_user_permissions_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./user-permissions-duplicate/user-permissions-duplicate.component */
      "./src/app/user-permissions/user-permissions-duplicate/user-permissions-duplicate.component.ts");
      /* harmony import */


      var _user_permissions_edit_user_permissions_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./user-permissions-edit/user-permissions-edit.component */
      "./src/app/user-permissions/user-permissions-edit/user-permissions-edit.component.ts");
      /* harmony import */


      var _user_permissions_form_user_permissions_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./user-permissions-form/user-permissions-form.component */
      "./src/app/user-permissions/user-permissions-form/user-permissions-form.component.ts");

      var UserPermissionsPageModule = function UserPermissionsPageModule() {
        _classCallCheck(this, UserPermissionsPageModule);
      };

      UserPermissionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _user_permissions_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserPermissionsPageRoutingModule"]],
        declarations: [_user_permissions_page__WEBPACK_IMPORTED_MODULE_7__["UserPermissionsPage"], _user_permissions_list_user_permissions_list_component__WEBPACK_IMPORTED_MODULE_8__["UserPermissionsListComponent"], _user_permissions_create_user_permissions_create_component__WEBPACK_IMPORTED_MODULE_9__["UserPermissionsCreateComponent"], _user_permissions_duplicate_user_permissions_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["UserPermissionsDuplicateComponent"], _user_permissions_edit_user_permissions_edit_component__WEBPACK_IMPORTED_MODULE_11__["UserPermissionsEditComponent"], _user_permissions_form_user_permissions_form_component__WEBPACK_IMPORTED_MODULE_12__["UserPermissionsFormComponent"]]
      })], UserPermissionsPageModule);
      /***/
    },

    /***/
    "./src/app/user-permissions/user-permissions.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/user-permissions/user-permissions.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserPermissionsUserPermissionsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGVybWlzc2lvbnMvdXNlci1wZXJtaXNzaW9ucy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/user-permissions/user-permissions.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/user-permissions/user-permissions.page.ts ***!
      \***********************************************************/

    /*! exports provided: UserPermissionsPage */

    /***/
    function srcAppUserPermissionsUserPermissionsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPermissionsPage", function () {
        return UserPermissionsPage;
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

      var UserPermissionsPage = /*#__PURE__*/function () {
        function UserPermissionsPage(splitPanel) {
          _classCallCheck(this, UserPermissionsPage);

          this.splitPanel = splitPanel;
        }

        _createClass(UserPermissionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }]);

        return UserPermissionsPage;
      }();

      UserPermissionsPage.ctorParameters = function () {
        return [{
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"]
        }];
      };

      UserPermissionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-permissions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-permissions.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user-permissions/user-permissions.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-permissions.page.scss */
        "./src/app/user-permissions/user-permissions.page.scss"))["default"]]
      })], UserPermissionsPage);
      /***/
    },

    /***/
    "./src/app/user-permissions/user-permissions.service.ts":
    /*!**************************************************************!*\
      !*** ./src/app/user-permissions/user-permissions.service.ts ***!
      \**************************************************************/

    /*! exports provided: UserPermissionsService */

    /***/
    function srcAppUserPermissionsUserPermissionsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPermissionsService", function () {
        return UserPermissionsService;
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

      var UserPermissionsService = /*#__PURE__*/function () {
        function UserPermissionsService(api, alert, toast, router, navigation) {
          _classCallCheck(this, UserPermissionsService);

          this.api = api;
          this.alert = alert;
          this.toast = toast;
          this.router = router;
          this.navigation = navigation;
          this.userPermissionsUrl = 'user-permissions';
          this.userPermissionsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
          this.userPermissions = [];
          this.userPermission = {};
          this.userPermissionLists = {};
          this.searchValue = '';
          this.perPage = 10;
          this.meta = null;
          this.page = 1;
          this.pagesContent = document.getElementById('pages-content');
        }

        _createClass(UserPermissionsService, [{
          key: "getUserPermissions",
          value: function getUserPermissions() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.userPermissionsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.userPermissions = res.data;
              _this3.userPermissionLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editUserPermission",
          value: function editUserPermission(id) {
            var _this4 = this;

            this.api.get(this.userPermissionsUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.userPermission = res.data.model;
              _this4.userPermissionLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateUserPermission",
          value: function updateUserPermission() {
            var _this5 = this;

            this.api.put(this.userPermissionsUrl + '/' + this.userPermission.id, {
              model: this.userPermission,
              pivots: {
                user_role: this.userPermission.user_roles
              }
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getUserPermissions(1);
            });
          }
        }, {
          key: "createUserPermission",
          value: function createUserPermission() {
            var _this6 = this;

            this.api.get(this.userPermissionsUrl + '/create').subscribe(function (res) {
              _this6.userPermission = {};
              _this6.userPermissionLists = res.lists;
            });
          }
        }, {
          key: "storeUserPermission",
          value: function storeUserPermission() {
            var _this7 = this;

            this.api.post(this.userPermissionsUrl, {
              model: this.userPermission,
              pivots: {
                user_role: this.userPermission.user_roles
              }
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getUserPermissions(1);
            });
          }
        }, {
          key: "deleteUserPermission",
          value: function deleteUserPermission(id) {
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

                      this.api["delete"](this.userPermissionsUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getUserPermissions(1);
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

        return UserPermissionsService;
      }();

      UserPermissionsService.ctorParameters = function () {
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

      UserPermissionsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UserPermissionsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-permissions-user-permissions-module-es5.js.map