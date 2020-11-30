(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roles-roles-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/roles/roles-create/roles-create.component.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/roles/roles-create/roles-create.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRolesRolesCreateRolesCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/roles'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"rolesService.storeRole()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!rolesService.rolesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'ROLES' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-roles-form #roleForm [model]=\"rolesService.role\"></app-roles-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/roles/roles-duplicate/roles-duplicate.component.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/roles/roles-duplicate/roles-duplicate.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRolesRolesDuplicateRolesDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  Roles duplicate works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/roles/roles-edit/roles-edit.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/roles/roles-edit/roles-edit.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRolesRolesEditRolesEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/roles'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"rolesService.updateRole()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!rolesService.rolesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'ROLES' | titlecase}}: {{ rolesService.role?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-roles-form #roleForm [model]=\"rolesService.role\"></app-roles-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/roles/roles-form/roles-form.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/roles/roles-form/roles-form.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRolesRolesFormRolesFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #rolesForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- user_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'USUARIOS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"user_ids\"\n                          id=\"user_ids-field\"\n                          [(ngModel)]=\"model.users\"\n                          [items]=\"rolesService.roleLists.User\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('USUARIOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('USUARIOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setUserIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.user_ids\">\n            <div class=\"error-message\" *ngIf=\"rolesForm.form.controls['user_ids']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end user_ids -->\n\n\n    <!-- permission_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'PERMISOS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"permission_ids\"\n                          id=\"permission_ids-field\"\n                          [(ngModel)]=\"model.permissions\"\n                          [items]=\"rolesService.roleLists.Permission\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('PERMISOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('PERMISOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setPermissionIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.permission_ids\">\n            <div class=\"error-message\" *ngIf=\"rolesForm.form.controls['permission_ids']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end permission_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"rolesForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- code -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'CÓDIGO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.code\"\n                            type=\"text\"\n                            name=\"code\"\n                            id=\"code-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.code\">\n                    <div class=\"error-message\" *ngIf=\"rolesForm.form.controls['code']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end code -->\n\n\n</form>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/roles/roles-list/roles-list.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/roles/roles-list/roles-list.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRolesRolesListRolesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'ROLES' | titlecase}}\"\n                 primaryLink=\"roles/create\"\n                 primaryText=\"Crear {{'ROLES' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('ROLES' | lowercase )\"\n                       (ionCancel)=\"this.rolesService.searchValue = ''; rolesService.getRoles()\"\n                       (keyup.enter)=\"rolesService.getRoles()\"\n                       [(ngModel)]=\"rolesService.searchValue\"></ion-searchbar>\n\n    <ion-card>\n\n        <ng-container *ngIf=\"!(loading.loading | async) && rolesService.roles.length\">\n            <ion-item *ngFor=\"let role of rolesService.roles; let index = index\">\n                <ion-label>\n                    <h3>{{ 'NOMBRE' | titlecase }}: {{ role.name }}</h3>\n                    <h3>{{ 'CÓDIGO' | titlecase }}: {{ role.code }}</h3>\n                    <h3>{{ 'USUARIOS' | titlecase }}:\n                    <ng-container *ngIf=\"role.users.length\">\n                        <ng-container *ngFor=\"let user of role.users; let last = last\">\n                        <a routerLink=\"/users/{{ user.id }}/edit\">{{ user.name }}</a><span *ngIf=\"!last\">, </span>\n                        </ng-container>\n                    </ng-container>\n                    </h3>\n                    <h3>{{ 'PERMISOS' | titlecase }}:\n                    <ng-container *ngIf=\"role.permissions.length\">\n                        <ng-container *ngFor=\"let permission of role.permissions; let last = last\">\n                        <a routerLink=\"/permissions/{{ permission.id }}/edit\">{{ permission.name }}</a><span *ngIf=\"!last\">, </span>\n                        </ng-container>\n                    </ng-container>\n                    </h3>\n                </ion-label>\n\n\n                <ion-button item-right fill=\"clear\" color=\"success\" [routerLink]=\"'/roles/' + role.id + '/edit'\">\n                    <ion-icon name=\"create-outline\"></ion-icon>\n                </ion-button>\n                <!--<ion-button item-right fill=\"clear\" color=\"success\" (click)=\"null\">\n                    <ion-icon name=\"eye-outline\"></ion-icon>\n                </ion-button>-->\n                <ion-button item-right fill=\"clear\" color=\"danger\" (click)=\"rolesService.deleteRole(role.id)\">\n                    <ion-icon name=\"trash-outline\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </ng-container>\n\n        <ng-container *ngIf=\"!(loading.loading | async) && !rolesService.roles.length\">\n            <ion-item>\n                <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n                <ion-label><h2>No se encontraron {{'ROLES' | titlecase}}</h2></ion-label>\n                <ion-button [routerLink]=\"'/roles/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                    Crear {{'ROLES' | titlecase}}\n                    <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </ng-container>\n\n    </ion-card>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"rolesService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"rolesService.getRoles(rolesService.meta.current_page - 1)\"\n                        [disabled]=\"rolesService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{rolesService.meta.current_page}}\n                /{{rolesService.meta.last_page}} {{rolesService.meta.from}}-{{rolesService.meta.to}}\n                /{{rolesService.meta.total}} </ion-button>\n            <ion-button (click)=\"rolesService.getRoles(rolesService.meta.current_page + 1)\"\n                        [disabled]=\"rolesService.meta.current_page == rolesService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/roles/roles.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/roles/roles.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRolesRolesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"ROLES\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/roles/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'ROLES'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/roles/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'ROLES' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/roles/roles-create/roles-create.component.scss":
    /*!****************************************************************!*\
      !*** ./src/app/roles/roles-create/roles-create.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppRolesRolesCreateRolesCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL3JvbGVzLWNyZWF0ZS9yb2xlcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/roles/roles-create/roles-create.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/roles/roles-create/roles-create.component.ts ***!
      \**************************************************************/

    /*! exports provided: RolesCreateComponent */

    /***/
    function srcAppRolesRolesCreateRolesCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RolesCreateComponent", function () {
        return RolesCreateComponent;
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


      var _roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../roles.service */
      "./src/app/roles/roles.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var RolesCreateComponent = /*#__PURE__*/function () {
        function RolesCreateComponent(rolesService, route, platform) {
          _classCallCheck(this, RolesCreateComponent);

          this.rolesService = rolesService;
          this.route = route;
          this.platform = platform;
          this.id = null;
          this.formValid = false;
        }

        _createClass(RolesCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.clearPosts();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.roleForm.rolesForm.valueChanges.subscribe(function (data) {
              _this.rolesService.rolesFormValid.next(_this.roleForm.rolesForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.rolesService.createRole();
            this.rolesService.role = {};
          }
        }]);

        return RolesCreateComponent;
      }();

      RolesCreateComponent.ctorParameters = function () {
        return [{
          type: _roles_service__WEBPACK_IMPORTED_MODULE_2__["RolesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      RolesCreateComponent.propDecorators = {
        roleForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['roleForm']
        }]
      };
      RolesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-roles-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./roles-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/roles/roles-create/roles-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./roles-create.component.scss */
        "./src/app/roles/roles-create/roles-create.component.scss"))["default"]]
      })], RolesCreateComponent);
      /***/
    },

    /***/
    "./src/app/roles/roles-duplicate/roles-duplicate.component.scss":
    /*!**********************************************************************!*\
      !*** ./src/app/roles/roles-duplicate/roles-duplicate.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppRolesRolesDuplicateRolesDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL3JvbGVzLWR1cGxpY2F0ZS9yb2xlcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/roles/roles-duplicate/roles-duplicate.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/roles/roles-duplicate/roles-duplicate.component.ts ***!
      \********************************************************************/

    /*! exports provided: RolesDuplicateComponent */

    /***/
    function srcAppRolesRolesDuplicateRolesDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RolesDuplicateComponent", function () {
        return RolesDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var RolesDuplicateComponent = /*#__PURE__*/function () {
        function RolesDuplicateComponent() {
          _classCallCheck(this, RolesDuplicateComponent);
        }

        _createClass(RolesDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RolesDuplicateComponent;
      }();

      RolesDuplicateComponent.ctorParameters = function () {
        return [];
      };

      RolesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-roles-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./roles-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/roles/roles-duplicate/roles-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./roles-duplicate.component.scss */
        "./src/app/roles/roles-duplicate/roles-duplicate.component.scss"))["default"]]
      })], RolesDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/roles/roles-edit/roles-edit.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/roles/roles-edit/roles-edit.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppRolesRolesEditRolesEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL3JvbGVzLWVkaXQvcm9sZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/roles/roles-edit/roles-edit.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/roles/roles-edit/roles-edit.component.ts ***!
      \**********************************************************/

    /*! exports provided: RolesEditComponent */

    /***/
    function srcAppRolesRolesEditRolesEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RolesEditComponent", function () {
        return RolesEditComponent;
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


      var _roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../roles.service */
      "./src/app/roles/roles.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var RolesEditComponent = /*#__PURE__*/function () {
        function RolesEditComponent(rolesService, route, platform) {
          _classCallCheck(this, RolesEditComponent);

          this.rolesService = rolesService;
          this.route = route;
          this.platform = platform;
          this.id = null;
          this.model = null;
        }

        _createClass(RolesEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.rolesService.editRole(this.id);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            this.roleForm.rolesForm.valueChanges.subscribe(function (data) {
              _this2.rolesService.rolesFormValid.next(_this2.roleForm.rolesForm.valid);
            });
          }
        }]);

        return RolesEditComponent;
      }();

      RolesEditComponent.ctorParameters = function () {
        return [{
          type: _roles_service__WEBPACK_IMPORTED_MODULE_2__["RolesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      RolesEditComponent.propDecorators = {
        roleForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['roleForm']
        }]
      };
      RolesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-roles-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./roles-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/roles/roles-edit/roles-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./roles-edit.component.scss */
        "./src/app/roles/roles-edit/roles-edit.component.scss"))["default"]]
      })], RolesEditComponent);
      /***/
    },

    /***/
    "./src/app/roles/roles-form/roles-form.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/roles/roles-form/roles-form.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppRolesRolesFormRolesFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL3JvbGVzLWZvcm0vcm9sZXMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/roles/roles-form/roles-form.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/roles/roles-form/roles-form.component.ts ***!
      \**********************************************************/

    /*! exports provided: RolesFormComponent */

    /***/
    function srcAppRolesRolesFormRolesFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RolesFormComponent", function () {
        return RolesFormComponent;
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


      var _roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../roles.service */
      "./src/app/roles/roles.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var RolesFormComponent = /*#__PURE__*/function () {
        function RolesFormComponent(rolesService, toTitlecase) {
          _classCallCheck(this, RolesFormComponent);

          this.rolesService = rolesService;
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
            'user_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('USUARIOS') + ' es obligatorio.'
            }],
            'permission_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('PERMISOS') + ' es obligatorio.'
            }]
          };
        }

        _createClass(RolesFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // set setUserIds

        }, {
          key: "setUserIds",
          value: function setUserIds(event) {
            var userIds = null;

            if (event.value.length) {
              userIds = [];

              for (var i = 0; i < event.value.length; i++) {
                userIds.push(event.value[i].id);
              }
            }

            this.rolesService.role.user_ids = userIds;
          } // end setUserIds
          // set setPermissionIds

        }, {
          key: "setPermissionIds",
          value: function setPermissionIds(event) {
            var permissionIds = null;

            if (event.value.length) {
              permissionIds = [];

              for (var i = 0; i < event.value.length; i++) {
                permissionIds.push(event.value[i].id);
              }
            }

            this.rolesService.role.permission_ids = permissionIds;
          }
        }]);

        return RolesFormComponent;
      }();

      RolesFormComponent.ctorParameters = function () {
        return [{
          type: _roles_service__WEBPACK_IMPORTED_MODULE_2__["RolesService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      RolesFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        rolesForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['rolesForm']
        }]
      };
      RolesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-roles-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./roles-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/roles/roles-form/roles-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./roles-form.component.scss */
        "./src/app/roles/roles-form/roles-form.component.scss"))["default"]]
      })], RolesFormComponent);
      /***/
    },

    /***/
    "./src/app/roles/roles-list/roles-list.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/roles/roles-list/roles-list.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppRolesRolesListRolesListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL3JvbGVzLWxpc3Qvcm9sZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/roles/roles-list/roles-list.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/roles/roles-list/roles-list.component.ts ***!
      \**********************************************************/

    /*! exports provided: RolesListComponent */

    /***/
    function srcAppRolesRolesListRolesListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RolesListComponent", function () {
        return RolesListComponent;
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


      var _roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../roles.service */
      "./src/app/roles/roles.service.ts");
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

      var RolesListComponent = /*#__PURE__*/function () {
        function RolesListComponent(rolesService, api, loading) {
          _classCallCheck(this, RolesListComponent);

          this.rolesService = rolesService;
          this.api = api;
          this.loading = loading;
        }

        _createClass(RolesListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.rolesService.getRoles();
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            this.content.scrollToTop(300);
          }
        }]);

        return RolesListComponent;
      }();

      RolesListComponent.ctorParameters = function () {
        return [{
          type: _roles_service__WEBPACK_IMPORTED_MODULE_2__["RolesService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }];
      };

      RolesListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      RolesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-roles-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./roles-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/roles/roles-list/roles-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./roles-list.component.scss */
        "./src/app/roles/roles-list/roles-list.component.scss"))["default"]]
      })], RolesListComponent);
      /***/
    },

    /***/
    "./src/app/roles/roles-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/roles/roles-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: RolesPageRoutingModule */

    /***/
    function srcAppRolesRolesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RolesPageRoutingModule", function () {
        return RolesPageRoutingModule;
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


      var _roles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./roles.page */
      "./src/app/roles/roles.page.ts");
      /* harmony import */


      var _roles_edit_roles_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./roles-edit/roles-edit.component */
      "./src/app/roles/roles-edit/roles-edit.component.ts");
      /* harmony import */


      var _roles_create_roles_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./roles-create/roles-create.component */
      "./src/app/roles/roles-create/roles-create.component.ts");
      /* harmony import */


      var _roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./roles-list/roles-list.component */
      "./src/app/roles/roles-list/roles-list.component.ts");

      var routes = [{
        path: '',
        component: _roles_page__WEBPACK_IMPORTED_MODULE_3__["RolesPage"]
      }, {
        path: 'list',
        component: _roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_6__["RolesListComponent"]
      }, {
        path: 'create',
        component: _roles_create_roles_create_component__WEBPACK_IMPORTED_MODULE_5__["RolesCreateComponent"]
      }, {
        path: ':id/edit',
        component: _roles_edit_roles_edit_component__WEBPACK_IMPORTED_MODULE_4__["RolesEditComponent"]
      }];

      var RolesPageRoutingModule = function RolesPageRoutingModule() {
        _classCallCheck(this, RolesPageRoutingModule);
      };

      RolesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RolesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/roles/roles.module.ts":
    /*!***************************************!*\
      !*** ./src/app/roles/roles.module.ts ***!
      \***************************************/

    /*! exports provided: RolesPageModule */

    /***/
    function srcAppRolesRolesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RolesPageModule", function () {
        return RolesPageModule;
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


      var _roles_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./roles-routing.module */
      "./src/app/roles/roles-routing.module.ts");
      /* harmony import */


      var _roles_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./roles.page */
      "./src/app/roles/roles.page.ts");
      /* harmony import */


      var _roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./roles-list/roles-list.component */
      "./src/app/roles/roles-list/roles-list.component.ts");
      /* harmony import */


      var _roles_create_roles_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./roles-create/roles-create.component */
      "./src/app/roles/roles-create/roles-create.component.ts");
      /* harmony import */


      var _roles_duplicate_roles_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./roles-duplicate/roles-duplicate.component */
      "./src/app/roles/roles-duplicate/roles-duplicate.component.ts");
      /* harmony import */


      var _roles_edit_roles_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./roles-edit/roles-edit.component */
      "./src/app/roles/roles-edit/roles-edit.component.ts");
      /* harmony import */


      var _roles_form_roles_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./roles-form/roles-form.component */
      "./src/app/roles/roles-form/roles-form.component.ts");

      var RolesPageModule = function RolesPageModule() {
        _classCallCheck(this, RolesPageModule);
      };

      RolesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _roles_routing_module__WEBPACK_IMPORTED_MODULE_6__["RolesPageRoutingModule"]],
        declarations: [_roles_page__WEBPACK_IMPORTED_MODULE_7__["RolesPage"], _roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_8__["RolesListComponent"], _roles_create_roles_create_component__WEBPACK_IMPORTED_MODULE_9__["RolesCreateComponent"], _roles_duplicate_roles_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["RolesDuplicateComponent"], _roles_edit_roles_edit_component__WEBPACK_IMPORTED_MODULE_11__["RolesEditComponent"], _roles_form_roles_form_component__WEBPACK_IMPORTED_MODULE_12__["RolesFormComponent"]]
      })], RolesPageModule);
      /***/
    },

    /***/
    "./src/app/roles/roles.page.scss":
    /*!***************************************!*\
      !*** ./src/app/roles/roles.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppRolesRolesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL3JvbGVzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/roles/roles.page.ts":
    /*!*************************************!*\
      !*** ./src/app/roles/roles.page.ts ***!
      \*************************************/

    /*! exports provided: RolesPage */

    /***/
    function srcAppRolesRolesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RolesPage", function () {
        return RolesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var RolesPage = /*#__PURE__*/function () {
        function RolesPage() {
          _classCallCheck(this, RolesPage);
        }

        _createClass(RolesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RolesPage;
      }();

      RolesPage.ctorParameters = function () {
        return [];
      };

      RolesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-roles',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./roles.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/roles/roles.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./roles.page.scss */
        "./src/app/roles/roles.page.scss"))["default"]]
      })], RolesPage);
      /***/
    },

    /***/
    "./src/app/roles/roles.service.ts":
    /*!****************************************!*\
      !*** ./src/app/roles/roles.service.ts ***!
      \****************************************/

    /*! exports provided: RolesService */

    /***/
    function srcAppRolesRolesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RolesService", function () {
        return RolesService;
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

      var RolesService = /*#__PURE__*/function () {
        function RolesService(api, alert, toast, router, navigation) {
          _classCallCheck(this, RolesService);

          this.api = api;
          this.alert = alert;
          this.toast = toast;
          this.router = router;
          this.navigation = navigation;
          this.rolesUrl = 'roles';
          this.rolesFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
          this.roles = [];
          this.role = {};
          this.roleLists = {};
          this.searchValue = '';
          this.perPage = 10;
          this.meta = null;
          this.page = 1;
          this.pagesContent = document.getElementById('pages-content');
        }

        _createClass(RolesService, [{
          key: "getRoles",
          value: function getRoles() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.rolesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.roles = res.data;
              _this3.roleLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editRole",
          value: function editRole(id) {
            var _this4 = this;

            this.api.get(this.rolesUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.role = res.data.model;
              _this4.roleLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateRole",
          value: function updateRole() {
            var _this5 = this;

            this.api.put(this.rolesUrl + '/' + this.role.id, {
              model: this.role,
              pivots: {
                user: this.role.users,
                permission: this.role.permissions
              }
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getRoles(1);
            });
          }
        }, {
          key: "createRole",
          value: function createRole() {
            var _this6 = this;

            this.api.get(this.rolesUrl + '/create').subscribe(function (res) {
              _this6.role = {};
              _this6.roleLists = res.lists;
            });
          }
        }, {
          key: "storeRole",
          value: function storeRole() {
            var _this7 = this;

            this.api.post(this.rolesUrl, {
              model: this.role,
              pivots: {
                user: this.role.users,
                permission: this.role.permissions
              }
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getRoles(1);
            });
          }
        }, {
          key: "deleteRole",
          value: function deleteRole(id) {
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

                      this.api["delete"](this.rolesUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getRoles(1);
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

        return RolesService;
      }();

      RolesService.ctorParameters = function () {
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

      RolesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], RolesService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=roles-roles-module-es5.js.map