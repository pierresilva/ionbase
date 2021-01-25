(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-roles-user-roles-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-create/user-roles-create.component.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-create/user-roles-create.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserRolesUserRolesCreateUserRolesCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/user-roles'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"userRolesService.storeUserRole()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!userRolesService.userRolesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'USUARIOS ROLES' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-user-roles-form #userRoleForm [model]=\"userRolesService.userRole\"></app-user-roles-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-duplicate/user-roles-duplicate.component.html":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-duplicate/user-roles-duplicate.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserRolesUserRolesDuplicateUserRolesDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  UserRoles duplicate works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-edit/user-roles-edit.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-edit/user-roles-edit.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserRolesUserRolesEditUserRolesEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/user-roles'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"userRolesService.updateUserRole()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!userRolesService.userRolesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'USUARIOS ROLES' | titlecase}}: {{ userRolesService.userRole?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-user-roles-form #userRoleForm [model]=\"userRolesService.userRole\"></app-user-roles-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-form/user-roles-form.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-form/user-roles-form.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserRolesUserRolesFormUserRolesFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #userRolesForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- user_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'USUARIOS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"user_ids\"\n                          id=\"user_ids-field\"\n                          [(ngModel)]=\"model.users\"\n                          [items]=\"userRolesService.userRoleLists.User\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('USUARIOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('USUARIOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setUserIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.user_ids\">\n            <div class=\"error-message\" *ngIf=\"userRolesForm.form.controls['user_ids']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end user_ids -->\n\n\n    <!-- user_permission_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'USUARIOS PERMISOS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"user_permission_ids\"\n                          id=\"user_permission_ids-field\"\n                          [(ngModel)]=\"model.user_permissions\"\n                          [items]=\"userRolesService.userRoleLists.UserPermission\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('USUARIOS PERMISOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('USUARIOS PERMISOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setUserPermissionIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.user_permission_ids\">\n            <div class=\"error-message\" *ngIf=\"userRolesForm.form.controls['user_permission_ids']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end user_permission_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"userRolesForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- code -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'CÓDIGO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.code\"\n                            type=\"text\"\n                            name=\"code\"\n                            id=\"code-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.code\">\n                    <div class=\"error-message\" *ngIf=\"userRolesForm.form.controls['code']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end code -->\n\n\n</form>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-list/user-roles-list.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-list/user-roles-list.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserRolesUserRolesListUserRolesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'USUARIOS ROLES' | titlecase}}\"\n                 primaryLink=\"user-roles/create\"\n                 primaryText=\"Crear {{'USUARIOS ROLES' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('USUARIOS ROLES' | lowercase )\"\n                       (ionCancel)=\"this.userRolesService.searchValue = ''; userRolesService.getUserRoles()\"\n                       (keyup.enter)=\"userRolesService.getUserRoles()\"\n                       [(ngModel)]=\"userRolesService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && userRolesService.userRoles?.length\">\n        <ion-card *ngFor=\"let userRole of userRolesService.userRoles; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ userRole?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CÓDIGO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ userRole?.code }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'USUARIOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"userRole?.users?.length\">\n                                <ng-container *ngFor=\"let user of userRole?.users; let last = last\">\n                                    <a routerLink=\"/users/{{ user?.id }}/edit\">{{ user?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'USUARIOS PERMISOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"userRole?.user_permissions?.length\">\n                                <ng-container *ngFor=\"let userPermission of userRole?.user_permissions; let last = last\">\n                                    <a routerLink=\"/user-permissions/{{ userPermission?.id }}/edit\">{{ userPermission?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/user-roles/' + userRole?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"userRolesService.deleteUserRole(userRole?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !userRolesService.userRoles?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'USUARIOS ROLES' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/user-roles/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'USUARIOS ROLES' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"userRolesService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"userRolesService.getUserRoles(userRolesService.meta.current_page - 1)\"\n                        [disabled]=\"userRolesService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{userRolesService.meta.current_page}}\n                /{{userRolesService.meta.last_page}} {{userRolesService.meta.from}}-{{userRolesService.meta.to}}\n                /{{userRolesService.meta.total}} </ion-button>\n            <ion-button (click)=\"userRolesService.getUserRoles(userRolesService.meta.current_page + 1)\"\n                        [disabled]=\"userRolesService.meta.current_page == userRolesService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserRolesUserRolesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"USUARIOS ROLES\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/user-roles/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'USUARIOS ROLES'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/user-roles/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'USUARIOS ROLES' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/user-roles/user-roles-create/user-roles-create.component.scss":
    /*!*******************************************************************************!*\
      !*** ./src/app/user-roles/user-roles-create/user-roles-create.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserRolesUserRolesCreateUserRolesCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcm9sZXMvdXNlci1yb2xlcy1jcmVhdGUvdXNlci1yb2xlcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/user-roles/user-roles-create/user-roles-create.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/user-roles/user-roles-create/user-roles-create.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: UserRolesCreateComponent */

    /***/
    function srcAppUserRolesUserRolesCreateUserRolesCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRolesCreateComponent", function () {
        return UserRolesCreateComponent;
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


      var _user_roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../user-roles.service */
      "./src/app/user-roles/user-roles.service.ts");
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

      var UserRolesCreateComponent = /*#__PURE__*/function () {
        function UserRolesCreateComponent(userRolesService, route, platform, splitPanel) {
          _classCallCheck(this, UserRolesCreateComponent);

          this.userRolesService = userRolesService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.formValid = false;
        }

        _createClass(UserRolesCreateComponent, [{
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

            this.userRoleForm.userRolesForm.valueChanges.subscribe(function (data) {
              _this.userRolesService.userRolesFormValid.next(_this.userRoleForm.userRolesForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.userRolesService.createUserRole();
            this.userRolesService.userRole = {};
          }
        }]);

        return UserRolesCreateComponent;
      }();

      UserRolesCreateComponent.ctorParameters = function () {
        return [{
          type: _user_roles_service__WEBPACK_IMPORTED_MODULE_2__["UserRolesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      UserRolesCreateComponent.propDecorators = {
        userRoleForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['userRoleForm']
        }]
      };
      UserRolesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-roles-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-roles-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-create/user-roles-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-roles-create.component.scss */
        "./src/app/user-roles/user-roles-create/user-roles-create.component.scss"))["default"]]
      })], UserRolesCreateComponent);
      /***/
    },

    /***/
    "./src/app/user-roles/user-roles-duplicate/user-roles-duplicate.component.scss":
    /*!*************************************************************************************!*\
      !*** ./src/app/user-roles/user-roles-duplicate/user-roles-duplicate.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserRolesUserRolesDuplicateUserRolesDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcm9sZXMvdXNlci1yb2xlcy1kdXBsaWNhdGUvdXNlci1yb2xlcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/user-roles/user-roles-duplicate/user-roles-duplicate.component.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/user-roles/user-roles-duplicate/user-roles-duplicate.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: UserRolesDuplicateComponent */

    /***/
    function srcAppUserRolesUserRolesDuplicateUserRolesDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRolesDuplicateComponent", function () {
        return UserRolesDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var UserRolesDuplicateComponent = /*#__PURE__*/function () {
        function UserRolesDuplicateComponent() {
          _classCallCheck(this, UserRolesDuplicateComponent);
        }

        _createClass(UserRolesDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserRolesDuplicateComponent;
      }();

      UserRolesDuplicateComponent.ctorParameters = function () {
        return [];
      };

      UserRolesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-roles-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-roles-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-duplicate/user-roles-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-roles-duplicate.component.scss */
        "./src/app/user-roles/user-roles-duplicate/user-roles-duplicate.component.scss"))["default"]]
      })], UserRolesDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/user-roles/user-roles-edit/user-roles-edit.component.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/user-roles/user-roles-edit/user-roles-edit.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserRolesUserRolesEditUserRolesEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcm9sZXMvdXNlci1yb2xlcy1lZGl0L3VzZXItcm9sZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/user-roles/user-roles-edit/user-roles-edit.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/user-roles/user-roles-edit/user-roles-edit.component.ts ***!
      \*************************************************************************/

    /*! exports provided: UserRolesEditComponent */

    /***/
    function srcAppUserRolesUserRolesEditUserRolesEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRolesEditComponent", function () {
        return UserRolesEditComponent;
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


      var _user_roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../user-roles.service */
      "./src/app/user-roles/user-roles.service.ts");
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

      var UserRolesEditComponent = /*#__PURE__*/function () {
        function UserRolesEditComponent(userRolesService, route, platform, splitPanel) {
          _classCallCheck(this, UserRolesEditComponent);

          this.userRolesService = userRolesService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.model = null;
        }

        _createClass(UserRolesEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.userRolesService.editUserRole(this.id);
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

            this.userRoleForm.userRolesForm.valueChanges.subscribe(function (data) {
              _this2.userRolesService.userRolesFormValid.next(_this2.userRoleForm.userRolesForm.valid);
            });
          }
        }]);

        return UserRolesEditComponent;
      }();

      UserRolesEditComponent.ctorParameters = function () {
        return [{
          type: _user_roles_service__WEBPACK_IMPORTED_MODULE_2__["UserRolesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      UserRolesEditComponent.propDecorators = {
        userRoleForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['userRoleForm']
        }]
      };
      UserRolesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-roles-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-roles-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-edit/user-roles-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-roles-edit.component.scss */
        "./src/app/user-roles/user-roles-edit/user-roles-edit.component.scss"))["default"]]
      })], UserRolesEditComponent);
      /***/
    },

    /***/
    "./src/app/user-roles/user-roles-form/user-roles-form.component.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/user-roles/user-roles-form/user-roles-form.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserRolesUserRolesFormUserRolesFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcm9sZXMvdXNlci1yb2xlcy1mb3JtL3VzZXItcm9sZXMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/user-roles/user-roles-form/user-roles-form.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/user-roles/user-roles-form/user-roles-form.component.ts ***!
      \*************************************************************************/

    /*! exports provided: UserRolesFormComponent */

    /***/
    function srcAppUserRolesUserRolesFormUserRolesFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRolesFormComponent", function () {
        return UserRolesFormComponent;
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


      var _user_roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../user-roles.service */
      "./src/app/user-roles/user-roles.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var UserRolesFormComponent = /*#__PURE__*/function () {
        function UserRolesFormComponent(userRolesService, toTitlecase) {
          _classCallCheck(this, UserRolesFormComponent);

          this.userRolesService = userRolesService;
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
            'user_permission_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('USUARIOS PERMISOS') + ' es obligatorio.'
            }]
          };
        }

        _createClass(UserRolesFormComponent, [{
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

            this.userRolesService.userRole.user_ids = userIds;
          } // end setUserIds
          // set setUserPermissionIds

        }, {
          key: "setUserPermissionIds",
          value: function setUserPermissionIds(event) {
            var userPermissionIds = null;

            if (event.value.length) {
              userPermissionIds = [];

              for (var i = 0; i < event.value.length; i++) {
                userPermissionIds.push(event.value[i].id);
              }
            }

            this.userRolesService.userRole.user_permission_ids = userPermissionIds;
          }
        }]);

        return UserRolesFormComponent;
      }();

      UserRolesFormComponent.ctorParameters = function () {
        return [{
          type: _user_roles_service__WEBPACK_IMPORTED_MODULE_2__["UserRolesService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      UserRolesFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        userRolesForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['userRolesForm']
        }]
      };
      UserRolesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-roles-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-roles-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-form/user-roles-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-roles-form.component.scss */
        "./src/app/user-roles/user-roles-form/user-roles-form.component.scss"))["default"]]
      })], UserRolesFormComponent);
      /***/
    },

    /***/
    "./src/app/user-roles/user-roles-list/user-roles-list.component.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/user-roles/user-roles-list/user-roles-list.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserRolesUserRolesListUserRolesListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcm9sZXMvdXNlci1yb2xlcy1saXN0L3VzZXItcm9sZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/user-roles/user-roles-list/user-roles-list.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/user-roles/user-roles-list/user-roles-list.component.ts ***!
      \*************************************************************************/

    /*! exports provided: UserRolesListComponent */

    /***/
    function srcAppUserRolesUserRolesListUserRolesListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRolesListComponent", function () {
        return UserRolesListComponent;
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


      var _user_roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../user-roles.service */
      "./src/app/user-roles/user-roles.service.ts");
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

      var UserRolesListComponent = /*#__PURE__*/function () {
        function UserRolesListComponent(userRolesService, api, loading, splitPanel) {
          _classCallCheck(this, UserRolesListComponent);

          this.userRolesService = userRolesService;
          this.api = api;
          this.loading = loading;
          this.splitPanel = splitPanel;
        }

        _createClass(UserRolesListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userRolesService.getUserRoles();
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

        return UserRolesListComponent;
      }();

      UserRolesListComponent.ctorParameters = function () {
        return [{
          type: _user_roles_service__WEBPACK_IMPORTED_MODULE_2__["UserRolesService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"]
        }];
      };

      UserRolesListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      UserRolesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-roles-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-roles-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles-list/user-roles-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-roles-list.component.scss */
        "./src/app/user-roles/user-roles-list/user-roles-list.component.scss"))["default"]]
      })], UserRolesListComponent);
      /***/
    },

    /***/
    "./src/app/user-roles/user-roles-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/user-roles/user-roles-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: UserRolesPageRoutingModule */

    /***/
    function srcAppUserRolesUserRolesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRolesPageRoutingModule", function () {
        return UserRolesPageRoutingModule;
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


      var _user_roles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-roles.page */
      "./src/app/user-roles/user-roles.page.ts");
      /* harmony import */


      var _user_roles_edit_user_roles_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user-roles-edit/user-roles-edit.component */
      "./src/app/user-roles/user-roles-edit/user-roles-edit.component.ts");
      /* harmony import */


      var _user_roles_create_user_roles_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-roles-create/user-roles-create.component */
      "./src/app/user-roles/user-roles-create/user-roles-create.component.ts");
      /* harmony import */


      var _user_roles_list_user_roles_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-roles-list/user-roles-list.component */
      "./src/app/user-roles/user-roles-list/user-roles-list.component.ts");

      var routes = [{
        path: '',
        component: _user_roles_page__WEBPACK_IMPORTED_MODULE_3__["UserRolesPage"]
      }, {
        path: 'list',
        component: _user_roles_list_user_roles_list_component__WEBPACK_IMPORTED_MODULE_6__["UserRolesListComponent"]
      }, {
        path: 'create',
        component: _user_roles_create_user_roles_create_component__WEBPACK_IMPORTED_MODULE_5__["UserRolesCreateComponent"]
      }, {
        path: ':id/edit',
        component: _user_roles_edit_user_roles_edit_component__WEBPACK_IMPORTED_MODULE_4__["UserRolesEditComponent"]
      }];

      var UserRolesPageRoutingModule = function UserRolesPageRoutingModule() {
        _classCallCheck(this, UserRolesPageRoutingModule);
      };

      UserRolesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserRolesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/user-roles/user-roles.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/user-roles/user-roles.module.ts ***!
      \*************************************************/

    /*! exports provided: UserRolesPageModule */

    /***/
    function srcAppUserRolesUserRolesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRolesPageModule", function () {
        return UserRolesPageModule;
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


      var _user_roles_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-roles-routing.module */
      "./src/app/user-roles/user-roles-routing.module.ts");
      /* harmony import */


      var _user_roles_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./user-roles.page */
      "./src/app/user-roles/user-roles.page.ts");
      /* harmony import */


      var _user_roles_list_user_roles_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./user-roles-list/user-roles-list.component */
      "./src/app/user-roles/user-roles-list/user-roles-list.component.ts");
      /* harmony import */


      var _user_roles_create_user_roles_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./user-roles-create/user-roles-create.component */
      "./src/app/user-roles/user-roles-create/user-roles-create.component.ts");
      /* harmony import */


      var _user_roles_duplicate_user_roles_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./user-roles-duplicate/user-roles-duplicate.component */
      "./src/app/user-roles/user-roles-duplicate/user-roles-duplicate.component.ts");
      /* harmony import */


      var _user_roles_edit_user_roles_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./user-roles-edit/user-roles-edit.component */
      "./src/app/user-roles/user-roles-edit/user-roles-edit.component.ts");
      /* harmony import */


      var _user_roles_form_user_roles_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./user-roles-form/user-roles-form.component */
      "./src/app/user-roles/user-roles-form/user-roles-form.component.ts");

      var UserRolesPageModule = function UserRolesPageModule() {
        _classCallCheck(this, UserRolesPageModule);
      };

      UserRolesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _user_roles_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserRolesPageRoutingModule"]],
        declarations: [_user_roles_page__WEBPACK_IMPORTED_MODULE_7__["UserRolesPage"], _user_roles_list_user_roles_list_component__WEBPACK_IMPORTED_MODULE_8__["UserRolesListComponent"], _user_roles_create_user_roles_create_component__WEBPACK_IMPORTED_MODULE_9__["UserRolesCreateComponent"], _user_roles_duplicate_user_roles_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["UserRolesDuplicateComponent"], _user_roles_edit_user_roles_edit_component__WEBPACK_IMPORTED_MODULE_11__["UserRolesEditComponent"], _user_roles_form_user_roles_form_component__WEBPACK_IMPORTED_MODULE_12__["UserRolesFormComponent"]]
      })], UserRolesPageModule);
      /***/
    },

    /***/
    "./src/app/user-roles/user-roles.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/user-roles/user-roles.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserRolesUserRolesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcm9sZXMvdXNlci1yb2xlcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/user-roles/user-roles.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/user-roles/user-roles.page.ts ***!
      \***********************************************/

    /*! exports provided: UserRolesPage */

    /***/
    function srcAppUserRolesUserRolesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRolesPage", function () {
        return UserRolesPage;
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

      var UserRolesPage = /*#__PURE__*/function () {
        function UserRolesPage(splitPanel) {
          _classCallCheck(this, UserRolesPage);

          this.splitPanel = splitPanel;
        }

        _createClass(UserRolesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }]);

        return UserRolesPage;
      }();

      UserRolesPage.ctorParameters = function () {
        return [{
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"]
        }];
      };

      UserRolesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-roles',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-roles.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user-roles/user-roles.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-roles.page.scss */
        "./src/app/user-roles/user-roles.page.scss"))["default"]]
      })], UserRolesPage);
      /***/
    },

    /***/
    "./src/app/user-roles/user-roles.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/user-roles/user-roles.service.ts ***!
      \**************************************************/

    /*! exports provided: UserRolesService */

    /***/
    function srcAppUserRolesUserRolesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRolesService", function () {
        return UserRolesService;
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

      var UserRolesService = /*#__PURE__*/function () {
        function UserRolesService(api, alert, toast, router, navigation) {
          _classCallCheck(this, UserRolesService);

          this.api = api;
          this.alert = alert;
          this.toast = toast;
          this.router = router;
          this.navigation = navigation;
          this.userRolesUrl = 'user-roles';
          this.userRolesFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
          this.userRoles = [];
          this.userRole = {};
          this.userRoleLists = {};
          this.searchValue = '';
          this.perPage = 10;
          this.meta = null;
          this.page = 1;
          this.pagesContent = document.getElementById('pages-content');
        }

        _createClass(UserRolesService, [{
          key: "getUserRoles",
          value: function getUserRoles() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.userRolesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.userRoles = res.data;
              _this3.userRoleLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editUserRole",
          value: function editUserRole(id) {
            var _this4 = this;

            this.api.get(this.userRolesUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.userRole = res.data.model;
              _this4.userRoleLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateUserRole",
          value: function updateUserRole() {
            var _this5 = this;

            this.api.put(this.userRolesUrl + '/' + this.userRole.id, {
              model: this.userRole,
              pivots: {
                user: this.userRole.users,
                user_permission: this.userRole.user_permissions
              }
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getUserRoles(1);
            });
          }
        }, {
          key: "createUserRole",
          value: function createUserRole() {
            var _this6 = this;

            this.api.get(this.userRolesUrl + '/create').subscribe(function (res) {
              _this6.userRole = {};
              _this6.userRoleLists = res.lists;
            });
          }
        }, {
          key: "storeUserRole",
          value: function storeUserRole() {
            var _this7 = this;

            this.api.post(this.userRolesUrl, {
              model: this.userRole,
              pivots: {
                user: this.userRole.users,
                user_permission: this.userRole.user_permissions
              }
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getUserRoles(1);
            });
          }
        }, {
          key: "deleteUserRole",
          value: function deleteUserRole(id) {
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

                      this.api["delete"](this.userRolesUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getUserRoles(1);
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

        return UserRolesService;
      }();

      UserRolesService.ctorParameters = function () {
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

      UserRolesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UserRolesService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-roles-user-roles-module-es5.js.map