(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-create/users-create.component.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-create/users-create.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUsersUsersCreateUsersCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/users'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"usersService.storeUser()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!usersService.usersFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'USUARIOS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-users-form #userForm [model]=\"usersService.user\"></app-users-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-duplicate/users-duplicate.component.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-duplicate/users-duplicate.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUsersUsersDuplicateUsersDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  Users duplicate works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-edit/users-edit.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-edit/users-edit.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUsersUsersEditUsersEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/users'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"usersService.updateUser()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!usersService.usersFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'USUARIOS' | titlecase}}: {{ usersService.user?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-users-form #userForm [model]=\"usersService.user\"></app-users-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-form/users-form.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-form/users-form.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUsersUsersFormUsersFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #usersForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- syst_position_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'CARGO' | titlecase }}</ion-label>\n        <ionic-selectable name=\"syst_position_id\"\n                          id=\"syst_position_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.syst_position\"\n                          [items]=\"usersService.userLists.SystPosition\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('CARGOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('CARGOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setSystPositionId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.syst_position_id\">\n            <div class=\"error-message\" *ngIf=\"usersForm.form.controls['syst_position_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end syst_position_id -->\n\n\n    <!-- user_profile_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'PERFILES DE USUARIOS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"user_profile_ids\"\n                          id=\"user_profile_ids-field\"\n                          [(ngModel)]=\"model.user_profiles\"\n                          [items]=\"usersService.userLists.UserProfile\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('PERFILES DE USUARIOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('PERFILES DE USUARIOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setUserProfileIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.user_profile_ids\">\n            <div class=\"error-message\" *ngIf=\"usersForm.form.controls['user_profile_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end user_profile_ids -->\n\n\n    <!-- coun_meeting_citation_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'JUNTAS CITACIONES' | titlecase }}</ion-label>\n        <ionic-selectable name=\"coun_meeting_citation_ids\"\n                          id=\"coun_meeting_citation_ids-field\"\n                          [(ngModel)]=\"model.coun_meeting_citations\"\n                          [items]=\"usersService.userLists.CounMeetingCitation\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('JUNTAS CITACIONES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('JUNTAS CITACIONES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setCounMeetingCitationIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.coun_meeting_citation_ids\">\n            <div class=\"error-message\" *ngIf=\"usersForm.form.controls['coun_meeting_citation_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end coun_meeting_citation_ids -->\n\n\n    <!-- coun_member_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'JUNTAS MIEMBROS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"coun_member_ids\"\n                          id=\"coun_member_ids-field\"\n                          [(ngModel)]=\"model.coun_members\"\n                          [items]=\"usersService.userLists.CounMember\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('JUNTAS MIEMBROS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('JUNTAS MIEMBROS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setCounMemberIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.coun_member_ids\">\n            <div class=\"error-message\" *ngIf=\"usersForm.form.controls['coun_member_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end coun_member_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"usersForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- email -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'EMAIL' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.email\"\n                            type=\"text\"\n                            name=\"email\"\n                            id=\"email-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.email\">\n                    <div class=\"error-message\" *ngIf=\"usersForm.form.controls['email']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end email -->\n\n\n            <!-- password -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'CONTRASEÑA' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.password\"\n                            type=\"text\"\n                            name=\"password\"\n                            id=\"password-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.password\">\n                    <div class=\"error-message\" *ngIf=\"usersForm.form.controls['password']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end password -->\n\n\n            <!-- first_name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.first_name\"\n                            type=\"text\"\n                            name=\"first_name\"\n                            id=\"first_name-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.first_name\">\n                    <div class=\"error-message\" *ngIf=\"usersForm.form.controls['first_name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end first_name -->\n\n\n            <!-- last_name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'APELLIDOS' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.last_name\"\n                            type=\"text\"\n                            name=\"last_name\"\n                            id=\"last_name-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.last_name\">\n                    <div class=\"error-message\" *ngIf=\"usersForm.form.controls['last_name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end last_name -->\n\n\n</form>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-list/users-list.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-list/users-list.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUsersUsersListUsersListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'USUARIOS' | titlecase}}\"\n                 primaryLink=\"users/create\"\n                 primaryText=\"Crear {{'USUARIOS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('USUARIOS' | lowercase )\"\n                       (ionCancel)=\"this.usersService.searchValue = ''; usersService.getUsers()\"\n                       (keyup.enter)=\"usersService.getUsers()\"\n                       [(ngModel)]=\"usersService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && usersService.users?.length\">\n        <ion-card *ngFor=\"let user of usersService.users; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ user?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'EMAIL' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ user?.email }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ user?.first_name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'APELLIDOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ user?.last_name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CARGOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/syst-positions/{{ user?.syst_position?.id }}/edit\">{{ user?.syst_position?.name }}</a></div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'PERFILES DE USUARIOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"user?.user_profiles?.length\">\n                                <ng-container *ngFor=\"let userProfile of user?.user_profiles; let last = last\">\n                                    <a routerLink=\"/user-profiles/{{ userProfile?.id }}/edit\">{{ userProfile?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'JUNTAS CITACIONES' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"user?.coun_meeting_citations?.length\">\n                                <ng-container *ngFor=\"let counMeetingCitation of user?.coun_meeting_citations; let last = last\">\n                                    <a routerLink=\"/coun-meeting-citations/{{ counMeetingCitation?.id }}/edit\">{{ counMeetingCitation?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'JUNTAS MIEMBROS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"user?.coun_members?.length\">\n                                <ng-container *ngFor=\"let counMember of user?.coun_members; let last = last\">\n                                    <a routerLink=\"/coun-members/{{ counMember?.id }}/edit\">{{ counMember?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/users/' + user?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"usersService.deleteUser(user?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !usersService.users?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'USUARIOS' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/users/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'USUARIOS' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"usersService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"usersService.getUsers(usersService.meta.current_page - 1)\"\n                        [disabled]=\"usersService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{usersService.meta.current_page}}\n                /{{usersService.meta.last_page}} {{usersService.meta.from}}-{{usersService.meta.to}}\n                /{{usersService.meta.total}} </ion-button>\n            <ion-button (click)=\"usersService.getUsers(usersService.meta.current_page + 1)\"\n                        [disabled]=\"usersService.meta.current_page == usersService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUsersUsersPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"USUARIOS\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/users/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'USUARIOS'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/users/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'USUARIOS' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/users/users-create/users-create.component.scss":
    /*!****************************************************************!*\
      !*** ./src/app/users/users-create/users-create.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUsersUsersCreateUsersCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLWNyZWF0ZS91c2Vycy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/users/users-create/users-create.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/users/users-create/users-create.component.ts ***!
      \**************************************************************/

    /*! exports provided: UsersCreateComponent */

    /***/
    function srcAppUsersUsersCreateUsersCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersCreateComponent", function () {
        return UsersCreateComponent;
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


      var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../users.service */
      "./src/app/users/users.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var UsersCreateComponent = /*#__PURE__*/function () {
        function UsersCreateComponent(usersService, route, platform) {
          _classCallCheck(this, UsersCreateComponent);

          this.usersService = usersService;
          this.route = route;
          this.platform = platform;
          this.id = null;
          this.formValid = false;
        }

        _createClass(UsersCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.clearPosts();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.userForm.usersForm.valueChanges.subscribe(function (data) {
              _this.usersService.usersFormValid.next(_this.userForm.usersForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.usersService.createUser();
            this.usersService.user = {};
          }
        }]);

        return UsersCreateComponent;
      }();

      UsersCreateComponent.ctorParameters = function () {
        return [{
          type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      UsersCreateComponent.propDecorators = {
        userForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['userForm']
        }]
      };
      UsersCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./users-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-create/users-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./users-create.component.scss */
        "./src/app/users/users-create/users-create.component.scss"))["default"]]
      })], UsersCreateComponent);
      /***/
    },

    /***/
    "./src/app/users/users-duplicate/users-duplicate.component.scss":
    /*!**********************************************************************!*\
      !*** ./src/app/users/users-duplicate/users-duplicate.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUsersUsersDuplicateUsersDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLWR1cGxpY2F0ZS91c2Vycy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/users/users-duplicate/users-duplicate.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/users/users-duplicate/users-duplicate.component.ts ***!
      \********************************************************************/

    /*! exports provided: UsersDuplicateComponent */

    /***/
    function srcAppUsersUsersDuplicateUsersDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersDuplicateComponent", function () {
        return UsersDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var UsersDuplicateComponent = /*#__PURE__*/function () {
        function UsersDuplicateComponent() {
          _classCallCheck(this, UsersDuplicateComponent);
        }

        _createClass(UsersDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UsersDuplicateComponent;
      }();

      UsersDuplicateComponent.ctorParameters = function () {
        return [];
      };

      UsersDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./users-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-duplicate/users-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./users-duplicate.component.scss */
        "./src/app/users/users-duplicate/users-duplicate.component.scss"))["default"]]
      })], UsersDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/users/users-edit/users-edit.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/users/users-edit/users-edit.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUsersUsersEditUsersEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLWVkaXQvdXNlcnMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/users/users-edit/users-edit.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/users/users-edit/users-edit.component.ts ***!
      \**********************************************************/

    /*! exports provided: UsersEditComponent */

    /***/
    function srcAppUsersUsersEditUsersEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersEditComponent", function () {
        return UsersEditComponent;
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


      var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../users.service */
      "./src/app/users/users.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var UsersEditComponent = /*#__PURE__*/function () {
        function UsersEditComponent(usersService, route, platform) {
          _classCallCheck(this, UsersEditComponent);

          this.usersService = usersService;
          this.route = route;
          this.platform = platform;
          this.id = null;
          this.model = null;
        }

        _createClass(UsersEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.usersService.editUser(this.id);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            this.userForm.usersForm.valueChanges.subscribe(function (data) {
              _this2.usersService.usersFormValid.next(_this2.userForm.usersForm.valid);
            });
          }
        }]);

        return UsersEditComponent;
      }();

      UsersEditComponent.ctorParameters = function () {
        return [{
          type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      UsersEditComponent.propDecorators = {
        userForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['userForm']
        }]
      };
      UsersEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./users-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-edit/users-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./users-edit.component.scss */
        "./src/app/users/users-edit/users-edit.component.scss"))["default"]]
      })], UsersEditComponent);
      /***/
    },

    /***/
    "./src/app/users/users-form/users-form.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/users/users-form/users-form.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUsersUsersFormUsersFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLWZvcm0vdXNlcnMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/users/users-form/users-form.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/users/users-form/users-form.component.ts ***!
      \**********************************************************/

    /*! exports provided: UsersFormComponent */

    /***/
    function srcAppUsersUsersFormUsersFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersFormComponent", function () {
        return UsersFormComponent;
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


      var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../users.service */
      "./src/app/users/users.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var UsersFormComponent = /*#__PURE__*/function () {
        function UsersFormComponent(usersService, toTitlecase) {
          _classCallCheck(this, UsersFormComponent);

          this.usersService = usersService;
          this.toTitlecase = toTitlecase;
          this.model = {};
          this.validationMessages = {
            'syst_position_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('CARGO') + ' es obligatorio.'
            }],
            'name': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'
            }],
            'email': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('EMAIL') + ' es obligatorio.'
            }],
            'password': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('CONTRASEÑA') + ' es obligatorio.'
            }],
            'first_name': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'
            }],
            'last_name': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('APELLIDOS') + ' es obligatorio.'
            }],
            'accept_terms_condition': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('') + ' es obligatorio.'
            }],
            'user_profile_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('PERFILES DE USUARIOS') + ' es obligatorio.'
            }],
            'coun_meeting_citation_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('JUNTAS CITACIONES') + ' es obligatorio.'
            }],
            'coun_member_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('JUNTAS MIEMBROS') + ' es obligatorio.'
            }]
          };
        }

        _createClass(UsersFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // set setSystPositionId

        }, {
          key: "setSystPositionId",
          value: function setSystPositionId(event) {
            this.usersService.user.syst_position_id = event.value ? event.value.id : null;
          } // end setSystPositionId
          // set setUserProfileIds

        }, {
          key: "setUserProfileIds",
          value: function setUserProfileIds(event) {
            var userProfileIds = null;

            if (event.value.length) {
              userProfileIds = [];

              for (var i = 0; i < event.value.length; i++) {
                userProfileIds.push(event.value[i].id);
              }
            }

            this.usersService.user.user_profile_ids = userProfileIds;
          } // end setUserProfileIds
          // set setCounMeetingCitationIds

        }, {
          key: "setCounMeetingCitationIds",
          value: function setCounMeetingCitationIds(event) {
            var counMeetingCitationIds = null;

            if (event.value.length) {
              counMeetingCitationIds = [];

              for (var i = 0; i < event.value.length; i++) {
                counMeetingCitationIds.push(event.value[i].id);
              }
            }

            this.usersService.user.coun_meeting_citation_ids = counMeetingCitationIds;
          } // end setCounMeetingCitationIds
          // set setCounMemberIds

        }, {
          key: "setCounMemberIds",
          value: function setCounMemberIds(event) {
            var counMemberIds = null;

            if (event.value.length) {
              counMemberIds = [];

              for (var i = 0; i < event.value.length; i++) {
                counMemberIds.push(event.value[i].id);
              }
            }

            this.usersService.user.coun_member_ids = counMemberIds;
          }
        }]);

        return UsersFormComponent;
      }();

      UsersFormComponent.ctorParameters = function () {
        return [{
          type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      UsersFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        usersForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['usersForm']
        }]
      };
      UsersFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./users-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-form/users-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./users-form.component.scss */
        "./src/app/users/users-form/users-form.component.scss"))["default"]]
      })], UsersFormComponent);
      /***/
    },

    /***/
    "./src/app/users/users-list/users-list.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/users/users-list/users-list.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUsersUsersListUsersListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLWxpc3QvdXNlcnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/users/users-list/users-list.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/users/users-list/users-list.component.ts ***!
      \**********************************************************/

    /*! exports provided: UsersListComponent */

    /***/
    function srcAppUsersUsersListUsersListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersListComponent", function () {
        return UsersListComponent;
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


      var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../users.service */
      "./src/app/users/users.service.ts");
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

      var UsersListComponent = /*#__PURE__*/function () {
        function UsersListComponent(usersService, api, loading) {
          _classCallCheck(this, UsersListComponent);

          this.usersService = usersService;
          this.api = api;
          this.loading = loading;
        }

        _createClass(UsersListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.usersService.getUsers();
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            this.content.scrollToTop(300);
          }
        }]);

        return UsersListComponent;
      }();

      UsersListComponent.ctorParameters = function () {
        return [{
          type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }];
      };

      UsersListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      UsersListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./users-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-list/users-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./users-list.component.scss */
        "./src/app/users/users-list/users-list.component.scss"))["default"]]
      })], UsersListComponent);
      /***/
    },

    /***/
    "./src/app/users/users-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/users/users-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: UsersPageRoutingModule */

    /***/
    function srcAppUsersUsersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersPageRoutingModule", function () {
        return UsersPageRoutingModule;
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


      var _users_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./users.page */
      "./src/app/users/users.page.ts");
      /* harmony import */


      var _users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./users-edit/users-edit.component */
      "./src/app/users/users-edit/users-edit.component.ts");
      /* harmony import */


      var _users_create_users_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./users-create/users-create.component */
      "./src/app/users/users-create/users-create.component.ts");
      /* harmony import */


      var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./users-list/users-list.component */
      "./src/app/users/users-list/users-list.component.ts");

      var routes = [{
        path: '',
        component: _users_page__WEBPACK_IMPORTED_MODULE_3__["UsersPage"]
      }, {
        path: 'list',
        component: _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_6__["UsersListComponent"]
      }, {
        path: 'create',
        component: _users_create_users_create_component__WEBPACK_IMPORTED_MODULE_5__["UsersCreateComponent"]
      }, {
        path: ':id/edit',
        component: _users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_4__["UsersEditComponent"]
      }];

      var UsersPageRoutingModule = function UsersPageRoutingModule() {
        _classCallCheck(this, UsersPageRoutingModule);
      };

      UsersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UsersPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/users/users.module.ts":
    /*!***************************************!*\
      !*** ./src/app/users/users.module.ts ***!
      \***************************************/

    /*! exports provided: UsersPageModule */

    /***/
    function srcAppUsersUsersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersPageModule", function () {
        return UsersPageModule;
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


      var _users_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./users-routing.module */
      "./src/app/users/users-routing.module.ts");
      /* harmony import */


      var _users_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./users.page */
      "./src/app/users/users.page.ts");
      /* harmony import */


      var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./users-list/users-list.component */
      "./src/app/users/users-list/users-list.component.ts");
      /* harmony import */


      var _users_create_users_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./users-create/users-create.component */
      "./src/app/users/users-create/users-create.component.ts");
      /* harmony import */


      var _users_duplicate_users_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./users-duplicate/users-duplicate.component */
      "./src/app/users/users-duplicate/users-duplicate.component.ts");
      /* harmony import */


      var _users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./users-edit/users-edit.component */
      "./src/app/users/users-edit/users-edit.component.ts");
      /* harmony import */


      var _users_form_users_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./users-form/users-form.component */
      "./src/app/users/users-form/users-form.component.ts");

      var UsersPageModule = function UsersPageModule() {
        _classCallCheck(this, UsersPageModule);
      };

      UsersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_6__["UsersPageRoutingModule"]],
        declarations: [_users_page__WEBPACK_IMPORTED_MODULE_7__["UsersPage"], _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_8__["UsersListComponent"], _users_create_users_create_component__WEBPACK_IMPORTED_MODULE_9__["UsersCreateComponent"], _users_duplicate_users_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["UsersDuplicateComponent"], _users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_11__["UsersEditComponent"], _users_form_users_form_component__WEBPACK_IMPORTED_MODULE_12__["UsersFormComponent"]]
      })], UsersPageModule);
      /***/
    },

    /***/
    "./src/app/users/users.page.scss":
    /*!***************************************!*\
      !*** ./src/app/users/users.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppUsersUsersPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/users/users.page.ts":
    /*!*************************************!*\
      !*** ./src/app/users/users.page.ts ***!
      \*************************************/

    /*! exports provided: UsersPage */

    /***/
    function srcAppUsersUsersPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersPage", function () {
        return UsersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var UsersPage = /*#__PURE__*/function () {
        function UsersPage() {
          _classCallCheck(this, UsersPage);
        }

        _createClass(UsersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UsersPage;
      }();

      UsersPage.ctorParameters = function () {
        return [];
      };

      UsersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./users.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./users.page.scss */
        "./src/app/users/users.page.scss"))["default"]]
      })], UsersPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=users-users-module-es5.js.map