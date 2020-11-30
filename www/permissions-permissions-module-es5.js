(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["permissions-permissions-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/permissions/permissions-create/permissions-create.component.html":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/permissions/permissions-create/permissions-create.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPermissionsPermissionsCreatePermissionsCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/permissions'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"permissionsService.storePermission()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!permissionsService.permissionsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'PERMISOS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-permissions-form #permissionForm [model]=\"permissionsService.permission\"></app-permissions-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/permissions/permissions-duplicate/permissions-duplicate.component.html":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/permissions/permissions-duplicate/permissions-duplicate.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPermissionsPermissionsDuplicatePermissionsDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  Permissions duplicate works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/permissions/permissions-edit/permissions-edit.component.html":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/permissions/permissions-edit/permissions-edit.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPermissionsPermissionsEditPermissionsEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/permissions'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"permissionsService.updatePermission()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!permissionsService.permissionsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'PERMISOS' | titlecase}}: {{ permissionsService.permission?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-permissions-form #permissionForm [model]=\"permissionsService.permission\"></app-permissions-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/permissions/permissions-form/permissions-form.component.html":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/permissions/permissions-form/permissions-form.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPermissionsPermissionsFormPermissionsFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #permissionsForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- role_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'ROLES' | titlecase }}</ion-label>\n        <ionic-selectable name=\"role_ids\"\n                          id=\"role_ids-field\"\n                          [(ngModel)]=\"model.roles\"\n                          [items]=\"permissionsService.permissionLists.Role\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('ROLES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('ROLES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setRoleIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.role_ids\">\n            <div class=\"error-message\" *ngIf=\"permissionsForm.form.controls['role_ids']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end role_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"permissionsForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- code -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'CÓDIGO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.code\"\n                            type=\"text\"\n                            name=\"code\"\n                            id=\"code-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.code\">\n                    <div class=\"error-message\" *ngIf=\"permissionsForm.form.controls['code']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end code -->\n\n\n</form>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/permissions/permissions-list/permissions-list.component.html":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/permissions/permissions-list/permissions-list.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPermissionsPermissionsListPermissionsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'PERMISOS' | titlecase}}\"\n                 primaryLink=\"permissions/create\"\n                 primaryText=\"Crear {{'PERMISOS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('PERMISOS' | lowercase )\"\n                       (ionCancel)=\"this.permissionsService.searchValue = ''; permissionsService.getPermissions()\"\n                       (keyup.enter)=\"permissionsService.getPermissions()\"\n                       [(ngModel)]=\"permissionsService.searchValue\"></ion-searchbar>\n\n    <ion-card>\n\n        <ng-container *ngIf=\"!(loading.loading | async) && permissionsService.permissions.length\">\n            <ion-item *ngFor=\"let permission of permissionsService.permissions; let index = index\">\n                <ion-label>\n                    <h3>{{ 'NOMBRE' | titlecase }}: {{ permission.name }}</h3>\n                    <h3>{{ 'CÓDIGO' | titlecase }}: {{ permission.code }}</h3>\n                    <h3>{{ 'ROLES' | titlecase }}:\n                    <ng-container *ngIf=\"permission.roles.length\">\n                        <ng-container *ngFor=\"let role of permission.roles; let last = last\">\n                        <a routerLink=\"/roles/{{ role.id }}/edit\">{{ role.name }}</a><span *ngIf=\"!last\">, </span>\n                        </ng-container>\n                    </ng-container>\n                    </h3>\n                </ion-label>\n\n\n                <ion-button item-right fill=\"clear\" color=\"success\" [routerLink]=\"'/permissions/' + permission.id + '/edit'\">\n                    <ion-icon name=\"create-outline\"></ion-icon>\n                </ion-button>\n                <!--<ion-button item-right fill=\"clear\" color=\"success\" (click)=\"null\">\n                    <ion-icon name=\"eye-outline\"></ion-icon>\n                </ion-button>-->\n                <ion-button item-right fill=\"clear\" color=\"danger\" (click)=\"permissionsService.deletePermission(permission.id)\">\n                    <ion-icon name=\"trash-outline\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </ng-container>\n\n        <ng-container *ngIf=\"!(loading.loading | async) && !permissionsService.permissions.length\">\n            <ion-item>\n                <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n                <ion-label><h2>No se encontraron {{'PERMISOS' | titlecase}}</h2></ion-label>\n                <ion-button [routerLink]=\"'/permissions/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                    Crear {{'PERMISOS' | titlecase}}\n                    <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </ng-container>\n\n    </ion-card>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"permissionsService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"permissionsService.getPermissions(permissionsService.meta.current_page - 1)\"\n                        [disabled]=\"permissionsService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{permissionsService.meta.current_page}}\n                /{{permissionsService.meta.last_page}} {{permissionsService.meta.from}}-{{permissionsService.meta.to}}\n                /{{permissionsService.meta.total}} </ion-button>\n            <ion-button (click)=\"permissionsService.getPermissions(permissionsService.meta.current_page + 1)\"\n                        [disabled]=\"permissionsService.meta.current_page == permissionsService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/permissions/permissions.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/permissions/permissions.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPermissionsPermissionsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"PERMISOS\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/permissions/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'PERMISOS'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/permissions/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'PERMISOS' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/permissions/permissions-create/permissions-create.component.scss":
    /*!**********************************************************************************!*\
      !*** ./src/app/permissions/permissions-create/permissions-create.component.scss ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPermissionsPermissionsCreatePermissionsCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blcm1pc3Npb25zL3Blcm1pc3Npb25zLWNyZWF0ZS9wZXJtaXNzaW9ucy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/permissions/permissions-create/permissions-create.component.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/permissions/permissions-create/permissions-create.component.ts ***!
      \********************************************************************************/

    /*! exports provided: PermissionsCreateComponent */

    /***/
    function srcAppPermissionsPermissionsCreatePermissionsCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionsCreateComponent", function () {
        return PermissionsCreateComponent;
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


      var _permissions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../permissions.service */
      "./src/app/permissions/permissions.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var PermissionsCreateComponent = /*#__PURE__*/function () {
        function PermissionsCreateComponent(permissionsService, route, platform) {
          _classCallCheck(this, PermissionsCreateComponent);

          this.permissionsService = permissionsService;
          this.route = route;
          this.platform = platform;
          this.id = null;
          this.formValid = false;
        }

        _createClass(PermissionsCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.clearPosts();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.permissionForm.permissionsForm.valueChanges.subscribe(function (data) {
              _this.permissionsService.permissionsFormValid.next(_this.permissionForm.permissionsForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.permissionsService.createPermission();
            this.permissionsService.permission = {};
          }
        }]);

        return PermissionsCreateComponent;
      }();

      PermissionsCreateComponent.ctorParameters = function () {
        return [{
          type: _permissions_service__WEBPACK_IMPORTED_MODULE_2__["PermissionsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      PermissionsCreateComponent.propDecorators = {
        permissionForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['permissionForm']
        }]
      };
      PermissionsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-permissions-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./permissions-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/permissions/permissions-create/permissions-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./permissions-create.component.scss */
        "./src/app/permissions/permissions-create/permissions-create.component.scss"))["default"]]
      })], PermissionsCreateComponent);
      /***/
    },

    /***/
    "./src/app/permissions/permissions-duplicate/permissions-duplicate.component.scss":
    /*!****************************************************************************************!*\
      !*** ./src/app/permissions/permissions-duplicate/permissions-duplicate.component.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPermissionsPermissionsDuplicatePermissionsDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blcm1pc3Npb25zL3Blcm1pc3Npb25zLWR1cGxpY2F0ZS9wZXJtaXNzaW9ucy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/permissions/permissions-duplicate/permissions-duplicate.component.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/permissions/permissions-duplicate/permissions-duplicate.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: PermissionsDuplicateComponent */

    /***/
    function srcAppPermissionsPermissionsDuplicatePermissionsDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionsDuplicateComponent", function () {
        return PermissionsDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PermissionsDuplicateComponent = /*#__PURE__*/function () {
        function PermissionsDuplicateComponent() {
          _classCallCheck(this, PermissionsDuplicateComponent);
        }

        _createClass(PermissionsDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PermissionsDuplicateComponent;
      }();

      PermissionsDuplicateComponent.ctorParameters = function () {
        return [];
      };

      PermissionsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-permissions-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./permissions-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/permissions/permissions-duplicate/permissions-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./permissions-duplicate.component.scss */
        "./src/app/permissions/permissions-duplicate/permissions-duplicate.component.scss"))["default"]]
      })], PermissionsDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/permissions/permissions-edit/permissions-edit.component.scss":
    /*!******************************************************************************!*\
      !*** ./src/app/permissions/permissions-edit/permissions-edit.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPermissionsPermissionsEditPermissionsEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blcm1pc3Npb25zL3Blcm1pc3Npb25zLWVkaXQvcGVybWlzc2lvbnMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/permissions/permissions-edit/permissions-edit.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/permissions/permissions-edit/permissions-edit.component.ts ***!
      \****************************************************************************/

    /*! exports provided: PermissionsEditComponent */

    /***/
    function srcAppPermissionsPermissionsEditPermissionsEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionsEditComponent", function () {
        return PermissionsEditComponent;
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


      var _permissions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../permissions.service */
      "./src/app/permissions/permissions.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var PermissionsEditComponent = /*#__PURE__*/function () {
        function PermissionsEditComponent(permissionsService, route, platform) {
          _classCallCheck(this, PermissionsEditComponent);

          this.permissionsService = permissionsService;
          this.route = route;
          this.platform = platform;
          this.id = null;
          this.model = null;
        }

        _createClass(PermissionsEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.permissionsService.editPermission(this.id);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            this.permissionForm.permissionsForm.valueChanges.subscribe(function (data) {
              _this2.permissionsService.permissionsFormValid.next(_this2.permissionForm.permissionsForm.valid);
            });
          }
        }]);

        return PermissionsEditComponent;
      }();

      PermissionsEditComponent.ctorParameters = function () {
        return [{
          type: _permissions_service__WEBPACK_IMPORTED_MODULE_2__["PermissionsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      PermissionsEditComponent.propDecorators = {
        permissionForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['permissionForm']
        }]
      };
      PermissionsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-permissions-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./permissions-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/permissions/permissions-edit/permissions-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./permissions-edit.component.scss */
        "./src/app/permissions/permissions-edit/permissions-edit.component.scss"))["default"]]
      })], PermissionsEditComponent);
      /***/
    },

    /***/
    "./src/app/permissions/permissions-form/permissions-form.component.scss":
    /*!******************************************************************************!*\
      !*** ./src/app/permissions/permissions-form/permissions-form.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPermissionsPermissionsFormPermissionsFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blcm1pc3Npb25zL3Blcm1pc3Npb25zLWZvcm0vcGVybWlzc2lvbnMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/permissions/permissions-form/permissions-form.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/permissions/permissions-form/permissions-form.component.ts ***!
      \****************************************************************************/

    /*! exports provided: PermissionsFormComponent */

    /***/
    function srcAppPermissionsPermissionsFormPermissionsFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionsFormComponent", function () {
        return PermissionsFormComponent;
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


      var _permissions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../permissions.service */
      "./src/app/permissions/permissions.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var PermissionsFormComponent = /*#__PURE__*/function () {
        function PermissionsFormComponent(permissionsService, toTitlecase) {
          _classCallCheck(this, PermissionsFormComponent);

          this.permissionsService = permissionsService;
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
            'role_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('ROLES') + ' es obligatorio.'
            }]
          };
        }

        _createClass(PermissionsFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // set setRoleIds

        }, {
          key: "setRoleIds",
          value: function setRoleIds(event) {
            var roleIds = null;

            if (event.value.length) {
              roleIds = [];

              for (var i = 0; i < event.value.length; i++) {
                roleIds.push(event.value[i].id);
              }
            }

            this.permissionsService.permission.role_ids = roleIds;
          }
        }]);

        return PermissionsFormComponent;
      }();

      PermissionsFormComponent.ctorParameters = function () {
        return [{
          type: _permissions_service__WEBPACK_IMPORTED_MODULE_2__["PermissionsService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      PermissionsFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        permissionsForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['permissionsForm']
        }]
      };
      PermissionsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-permissions-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./permissions-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/permissions/permissions-form/permissions-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./permissions-form.component.scss */
        "./src/app/permissions/permissions-form/permissions-form.component.scss"))["default"]]
      })], PermissionsFormComponent);
      /***/
    },

    /***/
    "./src/app/permissions/permissions-list/permissions-list.component.scss":
    /*!******************************************************************************!*\
      !*** ./src/app/permissions/permissions-list/permissions-list.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPermissionsPermissionsListPermissionsListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blcm1pc3Npb25zL3Blcm1pc3Npb25zLWxpc3QvcGVybWlzc2lvbnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/permissions/permissions-list/permissions-list.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/permissions/permissions-list/permissions-list.component.ts ***!
      \****************************************************************************/

    /*! exports provided: PermissionsListComponent */

    /***/
    function srcAppPermissionsPermissionsListPermissionsListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionsListComponent", function () {
        return PermissionsListComponent;
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


      var _permissions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../permissions.service */
      "./src/app/permissions/permissions.service.ts");
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

      var PermissionsListComponent = /*#__PURE__*/function () {
        function PermissionsListComponent(permissionsService, api, loading) {
          _classCallCheck(this, PermissionsListComponent);

          this.permissionsService = permissionsService;
          this.api = api;
          this.loading = loading;
        }

        _createClass(PermissionsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.permissionsService.getPermissions();
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            this.content.scrollToTop(300);
          }
        }]);

        return PermissionsListComponent;
      }();

      PermissionsListComponent.ctorParameters = function () {
        return [{
          type: _permissions_service__WEBPACK_IMPORTED_MODULE_2__["PermissionsService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }];
      };

      PermissionsListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      PermissionsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-permissions-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./permissions-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/permissions/permissions-list/permissions-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./permissions-list.component.scss */
        "./src/app/permissions/permissions-list/permissions-list.component.scss"))["default"]]
      })], PermissionsListComponent);
      /***/
    },

    /***/
    "./src/app/permissions/permissions-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/permissions/permissions-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: PermissionsPageRoutingModule */

    /***/
    function srcAppPermissionsPermissionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionsPageRoutingModule", function () {
        return PermissionsPageRoutingModule;
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


      var _permissions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./permissions.page */
      "./src/app/permissions/permissions.page.ts");
      /* harmony import */


      var _permissions_edit_permissions_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./permissions-edit/permissions-edit.component */
      "./src/app/permissions/permissions-edit/permissions-edit.component.ts");
      /* harmony import */


      var _permissions_create_permissions_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./permissions-create/permissions-create.component */
      "./src/app/permissions/permissions-create/permissions-create.component.ts");
      /* harmony import */


      var _permissions_list_permissions_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./permissions-list/permissions-list.component */
      "./src/app/permissions/permissions-list/permissions-list.component.ts");

      var routes = [{
        path: '',
        component: _permissions_page__WEBPACK_IMPORTED_MODULE_3__["PermissionsPage"]
      }, {
        path: 'list',
        component: _permissions_list_permissions_list_component__WEBPACK_IMPORTED_MODULE_6__["PermissionsListComponent"]
      }, {
        path: 'create',
        component: _permissions_create_permissions_create_component__WEBPACK_IMPORTED_MODULE_5__["PermissionsCreateComponent"]
      }, {
        path: ':id/edit',
        component: _permissions_edit_permissions_edit_component__WEBPACK_IMPORTED_MODULE_4__["PermissionsEditComponent"]
      }];

      var PermissionsPageRoutingModule = function PermissionsPageRoutingModule() {
        _classCallCheck(this, PermissionsPageRoutingModule);
      };

      PermissionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PermissionsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/permissions/permissions.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/permissions/permissions.module.ts ***!
      \***************************************************/

    /*! exports provided: PermissionsPageModule */

    /***/
    function srcAppPermissionsPermissionsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionsPageModule", function () {
        return PermissionsPageModule;
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


      var _permissions_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./permissions-routing.module */
      "./src/app/permissions/permissions-routing.module.ts");
      /* harmony import */


      var _permissions_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./permissions.page */
      "./src/app/permissions/permissions.page.ts");
      /* harmony import */


      var _permissions_list_permissions_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./permissions-list/permissions-list.component */
      "./src/app/permissions/permissions-list/permissions-list.component.ts");
      /* harmony import */


      var _permissions_create_permissions_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./permissions-create/permissions-create.component */
      "./src/app/permissions/permissions-create/permissions-create.component.ts");
      /* harmony import */


      var _permissions_duplicate_permissions_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./permissions-duplicate/permissions-duplicate.component */
      "./src/app/permissions/permissions-duplicate/permissions-duplicate.component.ts");
      /* harmony import */


      var _permissions_edit_permissions_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./permissions-edit/permissions-edit.component */
      "./src/app/permissions/permissions-edit/permissions-edit.component.ts");
      /* harmony import */


      var _permissions_form_permissions_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./permissions-form/permissions-form.component */
      "./src/app/permissions/permissions-form/permissions-form.component.ts");

      var PermissionsPageModule = function PermissionsPageModule() {
        _classCallCheck(this, PermissionsPageModule);
      };

      PermissionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _permissions_routing_module__WEBPACK_IMPORTED_MODULE_6__["PermissionsPageRoutingModule"]],
        declarations: [_permissions_page__WEBPACK_IMPORTED_MODULE_7__["PermissionsPage"], _permissions_list_permissions_list_component__WEBPACK_IMPORTED_MODULE_8__["PermissionsListComponent"], _permissions_create_permissions_create_component__WEBPACK_IMPORTED_MODULE_9__["PermissionsCreateComponent"], _permissions_duplicate_permissions_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["PermissionsDuplicateComponent"], _permissions_edit_permissions_edit_component__WEBPACK_IMPORTED_MODULE_11__["PermissionsEditComponent"], _permissions_form_permissions_form_component__WEBPACK_IMPORTED_MODULE_12__["PermissionsFormComponent"]]
      })], PermissionsPageModule);
      /***/
    },

    /***/
    "./src/app/permissions/permissions.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/permissions/permissions.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPermissionsPermissionsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blcm1pc3Npb25zL3Blcm1pc3Npb25zLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/permissions/permissions.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/permissions/permissions.page.ts ***!
      \*************************************************/

    /*! exports provided: PermissionsPage */

    /***/
    function srcAppPermissionsPermissionsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionsPage", function () {
        return PermissionsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PermissionsPage = /*#__PURE__*/function () {
        function PermissionsPage() {
          _classCallCheck(this, PermissionsPage);
        }

        _createClass(PermissionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PermissionsPage;
      }();

      PermissionsPage.ctorParameters = function () {
        return [];
      };

      PermissionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-permissions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./permissions.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/permissions/permissions.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./permissions.page.scss */
        "./src/app/permissions/permissions.page.scss"))["default"]]
      })], PermissionsPage);
      /***/
    },

    /***/
    "./src/app/permissions/permissions.service.ts":
    /*!****************************************************!*\
      !*** ./src/app/permissions/permissions.service.ts ***!
      \****************************************************/

    /*! exports provided: PermissionsService */

    /***/
    function srcAppPermissionsPermissionsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionsService", function () {
        return PermissionsService;
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

      var PermissionsService = /*#__PURE__*/function () {
        function PermissionsService(api, alert, toast, router, navigation) {
          _classCallCheck(this, PermissionsService);

          this.api = api;
          this.alert = alert;
          this.toast = toast;
          this.router = router;
          this.navigation = navigation;
          this.permissionsUrl = 'permissions';
          this.permissionsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
          this.permissions = [];
          this.permission = {};
          this.permissionLists = {};
          this.searchValue = '';
          this.perPage = 10;
          this.meta = null;
          this.page = 1;
          this.pagesContent = document.getElementById('pages-content');
        }

        _createClass(PermissionsService, [{
          key: "getPermissions",
          value: function getPermissions() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.permissionsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.permissions = res.data;
              _this3.permissionLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editPermission",
          value: function editPermission(id) {
            var _this4 = this;

            this.api.get(this.permissionsUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.permission = res.data.model;
              _this4.permissionLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updatePermission",
          value: function updatePermission() {
            var _this5 = this;

            this.api.put(this.permissionsUrl + '/' + this.permission.id, {
              model: this.permission,
              pivots: {
                role: this.permission.roles
              }
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getPermissions(1);
            });
          }
        }, {
          key: "createPermission",
          value: function createPermission() {
            var _this6 = this;

            this.api.get(this.permissionsUrl + '/create').subscribe(function (res) {
              _this6.permission = {};
              _this6.permissionLists = res.lists;
            });
          }
        }, {
          key: "storePermission",
          value: function storePermission() {
            var _this7 = this;

            this.api.post(this.permissionsUrl, {
              model: this.permission,
              pivots: {
                role: this.permission.roles
              }
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getPermissions(1);
            });
          }
        }, {
          key: "deletePermission",
          value: function deletePermission(id) {
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

                      this.api["delete"](this.permissionsUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getPermissions(1);
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

        return PermissionsService;
      }();

      PermissionsService.ctorParameters = function () {
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

      PermissionsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PermissionsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=permissions-permissions-module-es5.js.map