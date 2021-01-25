(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profiles-user-profiles-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-create/user-profiles-create.component.html":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-create/user-profiles-create.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserProfilesUserProfilesCreateUserProfilesCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/user-profiles'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"userProfilesService.storeUserProfile()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!userProfilesService.userProfilesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'PERFILES DE USUARIOS' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-user-profiles-form #userProfileForm [model]=\"userProfilesService.userProfile\"></app-user-profiles-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-duplicate/user-profiles-duplicate.component.html":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-duplicate/user-profiles-duplicate.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserProfilesUserProfilesDuplicateUserProfilesDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\r\n  UserProfiles duplicate works!\r\n</p>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-edit/user-profiles-edit.component.html":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-edit/user-profiles-edit.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserProfilesUserProfilesEditUserProfilesEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/user-profiles'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"userProfilesService.updateUserProfile()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!userProfilesService.userProfilesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'PERFILES DE USUARIOS' | titlecase}}: {{ userProfilesService.userProfile?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-user-profiles-form #userProfileForm [model]=\"userProfilesService.userProfile\"></app-user-profiles-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-form/user-profiles-form.component.html":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-form/user-profiles-form.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserProfilesUserProfilesFormUserProfilesFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #userProfilesForm=\"ngForm\" novalidate autocomplete=\"off\">\r\n\r\n\r\n    <!-- user_id -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'USUARIO' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"user_id\"\r\n                          id=\"user_id-field\"\r\n                          [required]=\"true\"\r\n                          [(ngModel)]=\"model.user\"\r\n                          [items]=\"userProfilesService.userProfileLists.User\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('USUARIOS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('USUARIOS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setUserId($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.user_id\">\r\n            <div class=\"error-message\" *ngIf=\"userProfilesForm.form.controls['user_id']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end user_id -->\r\n\r\n\r\n    <!-- syst_city_id -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'CIUDADE' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"syst_city_id\"\r\n                          id=\"syst_city_id-field\"\r\n                          [required]=\"true\"\r\n                          [(ngModel)]=\"model.syst_city\"\r\n                          [items]=\"userProfilesService.userProfileLists.SystCity\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('CIUDADES' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('CIUDADES' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setSystCityId($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.syst_city_id\">\r\n            <div class=\"error-message\" *ngIf=\"userProfilesForm.form.controls['syst_city_id']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end syst_city_id -->\r\n\r\n\r\n    <!-- syst_region_id -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'DEPARTAMENTO' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"syst_region_id\"\r\n                          id=\"syst_region_id-field\"\r\n                          [required]=\"true\"\r\n                          [(ngModel)]=\"model.syst_region\"\r\n                          [items]=\"userProfilesService.userProfileLists.SystRegion\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('DEPARTAMENTOS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('DEPARTAMENTOS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setSystRegionId($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.syst_region_id\">\r\n            <div class=\"error-message\" *ngIf=\"userProfilesForm.form.controls['syst_region_id']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end syst_region_id -->\r\n\r\n\r\n    <!-- syst_country_id -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'PAISE' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"syst_country_id\"\r\n                          id=\"syst_country_id-field\"\r\n                          [required]=\"true\"\r\n                          [(ngModel)]=\"model.syst_country\"\r\n                          [items]=\"userProfilesService.userProfileLists.SystCountry\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('PAISES' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('PAISES' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setSystCountryId($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.syst_country_id\">\r\n            <div class=\"error-message\" *ngIf=\"userProfilesForm.form.controls['syst_country_id']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end syst_country_id -->\r\n\r\n\r\n            <!-- name -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.name\"\r\n                            type=\"text\"\r\n                            name=\"name\"\r\n                            id=\"name-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n                    <div class=\"error-message\" *ngIf=\"userProfilesForm.form.controls['name']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end name -->\r\n\r\n\r\n            <!-- address -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'DORECCIÓN' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.address\"\r\n                            type=\"text\"\r\n                            name=\"address\"\r\n                            id=\"address-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.address\">\r\n                    <div class=\"error-message\" *ngIf=\"userProfilesForm.form.controls['address']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end address -->\r\n\r\n\r\n            <!-- phone -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'TELÉFONO' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.phone\"\r\n                            type=\"text\"\r\n                            name=\"phone\"\r\n                            id=\"phone-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.phone\">\r\n                    <div class=\"error-message\" *ngIf=\"userProfilesForm.form.controls['phone']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end phone -->\r\n\r\n\r\n            <!-- avatar -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'AVATAR' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.avatar\"\r\n                            type=\"text\"\r\n                            name=\"avatar\"\r\n                            id=\"avatar-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.avatar\">\r\n                    <div class=\"error-message\" *ngIf=\"userProfilesForm.form.controls['avatar']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end avatar -->\r\n\r\n\r\n</form>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-list/user-profiles-list.component.html":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-list/user-profiles-list.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserProfilesUserProfilesListUserProfilesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'PERFILES DE USUARIOS' | titlecase}}\"\r\n                 primaryLink=\"user-profiles/create\"\r\n                 primaryText=\"Crear {{'PERFILES DE USUARIOS' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-searchbar showCancelButton=\"focus\"\r\n                       [cancelButtonText]=\"'Cancelar'\"\r\n                       [placeholder]=\"'Buscar ' + ('PERFILES DE USUARIOS' | lowercase )\"\r\n                       (ionCancel)=\"this.userProfilesService.searchValue = ''; userProfilesService.getUserProfiles()\"\r\n                       (keyup.enter)=\"userProfilesService.getUserProfiles()\"\r\n                       [(ngModel)]=\"userProfilesService.searchValue\"></ion-searchbar>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && userProfilesService.userProfiles?.length\">\r\n        <ion-card *ngFor=\"let userProfile of userProfilesService.userProfiles; let index = index\">\r\n            <ion-list>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ userProfile?.name }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'DORECCIÓN' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ userProfile?.address }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'TELÉFONO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ userProfile?.phone }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'AVATAR' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ userProfile?.avatar }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'USUARIOS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\"><a routerLink=\"/users/{{ userProfile?.user?.id }}/edit\">{{ userProfile?.user?.name }}</a></div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'CIUDADES' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\"><a routerLink=\"/syst-cities/{{ userProfile?.syst_city?.id }}/edit\">{{ userProfile?.syst_city?.name }}</a></div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'DEPARTAMENTOS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\"><a routerLink=\"/syst-regions/{{ userProfile?.syst_region?.id }}/edit\">{{ userProfile?.syst_region?.name }}</a></div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'PAISES' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\"><a routerLink=\"/syst-countries/{{ userProfile?.syst_country?.id }}/edit\">{{ userProfile?.syst_country?.name }}</a></div>\r\n                    </ion-item>\r\n            </ion-list>\r\n            <ion-footer>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/user-profiles/' + userProfile?.id + '/edit'\">\r\n                            <ion-icon name=\"create-outline\"></ion-icon>\r\n                            <div>Editar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"userProfilesService.deleteUserProfile(userProfile?.id)\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            <div>Eliminar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-footer>\r\n        </ion-card>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && !userProfilesService.userProfiles?.length\">\r\n        <ion-item>\r\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label><h2>No se encontraron {{'PERFILES DE USUARIOS' | titlecase}}</h2></ion-label>\r\n            <ion-button [routerLink]=\"'/user-profiles/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\r\n                Crear {{'PERFILES DE USUARIOS' | titlecase}}\r\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"userProfilesService.meta\">\r\n        <ion-col class=\"ion-text-center\" size=\"12\">\r\n            <ion-button (click)=\"userProfilesService.getUserProfiles(userProfilesService.meta.current_page - 1)\"\r\n                        [disabled]=\"userProfilesService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{userProfilesService.meta.current_page}}\r\n                /{{userProfilesService.meta.last_page}} {{userProfilesService.meta.from}}-{{userProfilesService.meta.to}}\r\n                /{{userProfilesService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"userProfilesService.getUserProfiles(userProfilesService.meta.current_page + 1)\"\r\n                        [disabled]=\"userProfilesService.meta.current_page == userProfilesService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserProfilesUserProfilesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"PERFILES DE USUARIOS\"></app-main-header>\r\n\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/user-profiles/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'PERFILES DE USUARIOS'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/user-profiles/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'PERFILES DE USUARIOS' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/user-profiles/user-profiles-create/user-profiles-create.component.scss":
    /*!****************************************************************************************!*\
      !*** ./src/app/user-profiles/user-profiles-create/user-profiles-create.component.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserProfilesUserProfilesCreateUserProfilesCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZXMvdXNlci1wcm9maWxlcy1jcmVhdGUvdXNlci1wcm9maWxlcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/user-profiles/user-profiles-create/user-profiles-create.component.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/user-profiles/user-profiles-create/user-profiles-create.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: UserProfilesCreateComponent */

    /***/
    function srcAppUserProfilesUserProfilesCreateUserProfilesCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfilesCreateComponent", function () {
        return UserProfilesCreateComponent;
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


      var _user_profiles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../user-profiles.service */
      "./src/app/user-profiles/user-profiles.service.ts");
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

      var UserProfilesCreateComponent = /*#__PURE__*/function () {
        function UserProfilesCreateComponent(userProfilesService, route, platform, splitPanel) {
          _classCallCheck(this, UserProfilesCreateComponent);

          this.userProfilesService = userProfilesService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.formValid = false;
        }

        _createClass(UserProfilesCreateComponent, [{
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

            this.userProfileForm.userProfilesForm.valueChanges.subscribe(function (data) {
              _this.userProfilesService.userProfilesFormValid.next(_this.userProfileForm.userProfilesForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.userProfilesService.createUserProfile();
            this.userProfilesService.userProfile = {};
          }
        }]);

        return UserProfilesCreateComponent;
      }();

      UserProfilesCreateComponent.ctorParameters = function () {
        return [{
          type: _user_profiles_service__WEBPACK_IMPORTED_MODULE_2__["UserProfilesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      UserProfilesCreateComponent.propDecorators = {
        userProfileForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['userProfileForm']
        }]
      };
      UserProfilesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profiles-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-profiles-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-create/user-profiles-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-profiles-create.component.scss */
        "./src/app/user-profiles/user-profiles-create/user-profiles-create.component.scss"))["default"]]
      })], UserProfilesCreateComponent);
      /***/
    },

    /***/
    "./src/app/user-profiles/user-profiles-duplicate/user-profiles-duplicate.component.scss":
    /*!**********************************************************************************************!*\
      !*** ./src/app/user-profiles/user-profiles-duplicate/user-profiles-duplicate.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserProfilesUserProfilesDuplicateUserProfilesDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZXMvdXNlci1wcm9maWxlcy1kdXBsaWNhdGUvdXNlci1wcm9maWxlcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/user-profiles/user-profiles-duplicate/user-profiles-duplicate.component.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/user-profiles/user-profiles-duplicate/user-profiles-duplicate.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: UserProfilesDuplicateComponent */

    /***/
    function srcAppUserProfilesUserProfilesDuplicateUserProfilesDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfilesDuplicateComponent", function () {
        return UserProfilesDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var UserProfilesDuplicateComponent = /*#__PURE__*/function () {
        function UserProfilesDuplicateComponent() {
          _classCallCheck(this, UserProfilesDuplicateComponent);
        }

        _createClass(UserProfilesDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserProfilesDuplicateComponent;
      }();

      UserProfilesDuplicateComponent.ctorParameters = function () {
        return [];
      };

      UserProfilesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profiles-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-profiles-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-duplicate/user-profiles-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-profiles-duplicate.component.scss */
        "./src/app/user-profiles/user-profiles-duplicate/user-profiles-duplicate.component.scss"))["default"]]
      })], UserProfilesDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/user-profiles/user-profiles-edit/user-profiles-edit.component.scss":
    /*!************************************************************************************!*\
      !*** ./src/app/user-profiles/user-profiles-edit/user-profiles-edit.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserProfilesUserProfilesEditUserProfilesEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZXMvdXNlci1wcm9maWxlcy1lZGl0L3VzZXItcHJvZmlsZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/user-profiles/user-profiles-edit/user-profiles-edit.component.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/user-profiles/user-profiles-edit/user-profiles-edit.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: UserProfilesEditComponent */

    /***/
    function srcAppUserProfilesUserProfilesEditUserProfilesEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfilesEditComponent", function () {
        return UserProfilesEditComponent;
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


      var _user_profiles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../user-profiles.service */
      "./src/app/user-profiles/user-profiles.service.ts");
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

      var UserProfilesEditComponent = /*#__PURE__*/function () {
        function UserProfilesEditComponent(userProfilesService, route, platform, splitPanel) {
          _classCallCheck(this, UserProfilesEditComponent);

          this.userProfilesService = userProfilesService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.model = null;
        }

        _createClass(UserProfilesEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.userProfilesService.editUserProfile(this.id);
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

            this.userProfileForm.userProfilesForm.valueChanges.subscribe(function (data) {
              _this2.userProfilesService.userProfilesFormValid.next(_this2.userProfileForm.userProfilesForm.valid);
            });
          }
        }]);

        return UserProfilesEditComponent;
      }();

      UserProfilesEditComponent.ctorParameters = function () {
        return [{
          type: _user_profiles_service__WEBPACK_IMPORTED_MODULE_2__["UserProfilesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      UserProfilesEditComponent.propDecorators = {
        userProfileForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['userProfileForm']
        }]
      };
      UserProfilesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profiles-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-profiles-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-edit/user-profiles-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-profiles-edit.component.scss */
        "./src/app/user-profiles/user-profiles-edit/user-profiles-edit.component.scss"))["default"]]
      })], UserProfilesEditComponent);
      /***/
    },

    /***/
    "./src/app/user-profiles/user-profiles-form/user-profiles-form.component.scss":
    /*!************************************************************************************!*\
      !*** ./src/app/user-profiles/user-profiles-form/user-profiles-form.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserProfilesUserProfilesFormUserProfilesFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZXMvdXNlci1wcm9maWxlcy1mb3JtL3VzZXItcHJvZmlsZXMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/user-profiles/user-profiles-form/user-profiles-form.component.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/user-profiles/user-profiles-form/user-profiles-form.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: UserProfilesFormComponent */

    /***/
    function srcAppUserProfilesUserProfilesFormUserProfilesFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfilesFormComponent", function () {
        return UserProfilesFormComponent;
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


      var _user_profiles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../user-profiles.service */
      "./src/app/user-profiles/user-profiles.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var UserProfilesFormComponent = /*#__PURE__*/function () {
        function UserProfilesFormComponent(userProfilesService, toTitlecase) {
          _classCallCheck(this, UserProfilesFormComponent);

          this.userProfilesService = userProfilesService;
          this.toTitlecase = toTitlecase;
          this.model = {};
          this.validationMessages = {
            'name': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'
            }],
            'user_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('USUARIO') + ' es obligatorio.'
            }],
            'syst_city_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('CIUDAD') + ' es obligatorio.'
            }],
            'syst_region_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('DEPARTAMENTO') + ' es obligatorio.'
            }],
            'syst_country_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('PAÍS') + ' es obligatorio.'
            }],
            'address': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('DORECCIÓN') + ' es obligatorio.'
            }],
            'phone': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('TELÉFONO') + ' es obligatorio.'
            }],
            'avatar': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('AVATAR') + ' es obligatorio.'
            }]
          };
        }

        _createClass(UserProfilesFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // set setUserId

        }, {
          key: "setUserId",
          value: function setUserId(event) {
            this.userProfilesService.userProfile.user_id = event.value ? event.value.id : null;
          } // end setUserId
          // set setSystCityId

        }, {
          key: "setSystCityId",
          value: function setSystCityId(event) {
            this.userProfilesService.userProfile.syst_city_id = event.value ? event.value.id : null;
          } // end setSystCityId
          // set setSystRegionId

        }, {
          key: "setSystRegionId",
          value: function setSystRegionId(event) {
            this.userProfilesService.userProfile.syst_region_id = event.value ? event.value.id : null;
          } // end setSystRegionId
          // set setSystCountryId

        }, {
          key: "setSystCountryId",
          value: function setSystCountryId(event) {
            this.userProfilesService.userProfile.syst_country_id = event.value ? event.value.id : null;
          }
        }]);

        return UserProfilesFormComponent;
      }();

      UserProfilesFormComponent.ctorParameters = function () {
        return [{
          type: _user_profiles_service__WEBPACK_IMPORTED_MODULE_2__["UserProfilesService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      UserProfilesFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        userProfilesForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['userProfilesForm']
        }]
      };
      UserProfilesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profiles-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-profiles-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-form/user-profiles-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-profiles-form.component.scss */
        "./src/app/user-profiles/user-profiles-form/user-profiles-form.component.scss"))["default"]]
      })], UserProfilesFormComponent);
      /***/
    },

    /***/
    "./src/app/user-profiles/user-profiles-list/user-profiles-list.component.scss":
    /*!************************************************************************************!*\
      !*** ./src/app/user-profiles/user-profiles-list/user-profiles-list.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserProfilesUserProfilesListUserProfilesListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZXMvdXNlci1wcm9maWxlcy1saXN0L3VzZXItcHJvZmlsZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/user-profiles/user-profiles-list/user-profiles-list.component.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/user-profiles/user-profiles-list/user-profiles-list.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: UserProfilesListComponent */

    /***/
    function srcAppUserProfilesUserProfilesListUserProfilesListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfilesListComponent", function () {
        return UserProfilesListComponent;
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


      var _user_profiles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../user-profiles.service */
      "./src/app/user-profiles/user-profiles.service.ts");
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

      var UserProfilesListComponent = /*#__PURE__*/function () {
        function UserProfilesListComponent(userProfilesService, api, loading, splitPanel) {
          _classCallCheck(this, UserProfilesListComponent);

          this.userProfilesService = userProfilesService;
          this.api = api;
          this.loading = loading;
          this.splitPanel = splitPanel;
        }

        _createClass(UserProfilesListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userProfilesService.getUserProfiles();
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

        return UserProfilesListComponent;
      }();

      UserProfilesListComponent.ctorParameters = function () {
        return [{
          type: _user_profiles_service__WEBPACK_IMPORTED_MODULE_2__["UserProfilesService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"]
        }];
      };

      UserProfilesListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      UserProfilesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profiles-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-profiles-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles-list/user-profiles-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-profiles-list.component.scss */
        "./src/app/user-profiles/user-profiles-list/user-profiles-list.component.scss"))["default"]]
      })], UserProfilesListComponent);
      /***/
    },

    /***/
    "./src/app/user-profiles/user-profiles-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/user-profiles/user-profiles-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: UserProfilesPageRoutingModule */

    /***/
    function srcAppUserProfilesUserProfilesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfilesPageRoutingModule", function () {
        return UserProfilesPageRoutingModule;
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


      var _user_profiles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-profiles.page */
      "./src/app/user-profiles/user-profiles.page.ts");
      /* harmony import */


      var _user_profiles_edit_user_profiles_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user-profiles-edit/user-profiles-edit.component */
      "./src/app/user-profiles/user-profiles-edit/user-profiles-edit.component.ts");
      /* harmony import */


      var _user_profiles_create_user_profiles_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-profiles-create/user-profiles-create.component */
      "./src/app/user-profiles/user-profiles-create/user-profiles-create.component.ts");
      /* harmony import */


      var _user_profiles_list_user_profiles_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-profiles-list/user-profiles-list.component */
      "./src/app/user-profiles/user-profiles-list/user-profiles-list.component.ts");

      var routes = [{
        path: '',
        component: _user_profiles_page__WEBPACK_IMPORTED_MODULE_3__["UserProfilesPage"]
      }, {
        path: 'list',
        component: _user_profiles_list_user_profiles_list_component__WEBPACK_IMPORTED_MODULE_6__["UserProfilesListComponent"]
      }, {
        path: 'create',
        component: _user_profiles_create_user_profiles_create_component__WEBPACK_IMPORTED_MODULE_5__["UserProfilesCreateComponent"]
      }, {
        path: ':id/edit',
        component: _user_profiles_edit_user_profiles_edit_component__WEBPACK_IMPORTED_MODULE_4__["UserProfilesEditComponent"]
      }];

      var UserProfilesPageRoutingModule = function UserProfilesPageRoutingModule() {
        _classCallCheck(this, UserProfilesPageRoutingModule);
      };

      UserProfilesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserProfilesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/user-profiles/user-profiles.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/user-profiles/user-profiles.module.ts ***!
      \*******************************************************/

    /*! exports provided: UserProfilesPageModule */

    /***/
    function srcAppUserProfilesUserProfilesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfilesPageModule", function () {
        return UserProfilesPageModule;
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


      var _user_profiles_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-profiles-routing.module */
      "./src/app/user-profiles/user-profiles-routing.module.ts");
      /* harmony import */


      var _user_profiles_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./user-profiles.page */
      "./src/app/user-profiles/user-profiles.page.ts");
      /* harmony import */


      var _user_profiles_list_user_profiles_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./user-profiles-list/user-profiles-list.component */
      "./src/app/user-profiles/user-profiles-list/user-profiles-list.component.ts");
      /* harmony import */


      var _user_profiles_create_user_profiles_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./user-profiles-create/user-profiles-create.component */
      "./src/app/user-profiles/user-profiles-create/user-profiles-create.component.ts");
      /* harmony import */


      var _user_profiles_duplicate_user_profiles_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./user-profiles-duplicate/user-profiles-duplicate.component */
      "./src/app/user-profiles/user-profiles-duplicate/user-profiles-duplicate.component.ts");
      /* harmony import */


      var _user_profiles_edit_user_profiles_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./user-profiles-edit/user-profiles-edit.component */
      "./src/app/user-profiles/user-profiles-edit/user-profiles-edit.component.ts");
      /* harmony import */


      var _user_profiles_form_user_profiles_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./user-profiles-form/user-profiles-form.component */
      "./src/app/user-profiles/user-profiles-form/user-profiles-form.component.ts");

      var UserProfilesPageModule = function UserProfilesPageModule() {
        _classCallCheck(this, UserProfilesPageModule);
      };

      UserProfilesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _user_profiles_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserProfilesPageRoutingModule"]],
        declarations: [_user_profiles_page__WEBPACK_IMPORTED_MODULE_7__["UserProfilesPage"], _user_profiles_list_user_profiles_list_component__WEBPACK_IMPORTED_MODULE_8__["UserProfilesListComponent"], _user_profiles_create_user_profiles_create_component__WEBPACK_IMPORTED_MODULE_9__["UserProfilesCreateComponent"], _user_profiles_duplicate_user_profiles_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["UserProfilesDuplicateComponent"], _user_profiles_edit_user_profiles_edit_component__WEBPACK_IMPORTED_MODULE_11__["UserProfilesEditComponent"], _user_profiles_form_user_profiles_form_component__WEBPACK_IMPORTED_MODULE_12__["UserProfilesFormComponent"]]
      })], UserProfilesPageModule);
      /***/
    },

    /***/
    "./src/app/user-profiles/user-profiles.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/user-profiles/user-profiles.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserProfilesUserProfilesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZXMvdXNlci1wcm9maWxlcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/user-profiles/user-profiles.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/user-profiles/user-profiles.page.ts ***!
      \*****************************************************/

    /*! exports provided: UserProfilesPage */

    /***/
    function srcAppUserProfilesUserProfilesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfilesPage", function () {
        return UserProfilesPage;
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

      var UserProfilesPage = /*#__PURE__*/function () {
        function UserProfilesPage(splitPanel) {
          _classCallCheck(this, UserProfilesPage);

          this.splitPanel = splitPanel;
        }

        _createClass(UserProfilesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }]);

        return UserProfilesPage;
      }();

      UserProfilesPage.ctorParameters = function () {
        return [{
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"]
        }];
      };

      UserProfilesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profiles',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-profiles.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profiles/user-profiles.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-profiles.page.scss */
        "./src/app/user-profiles/user-profiles.page.scss"))["default"]]
      })], UserProfilesPage);
      /***/
    },

    /***/
    "./src/app/user-profiles/user-profiles.service.ts":
    /*!********************************************************!*\
      !*** ./src/app/user-profiles/user-profiles.service.ts ***!
      \********************************************************/

    /*! exports provided: UserProfilesService */

    /***/
    function srcAppUserProfilesUserProfilesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfilesService", function () {
        return UserProfilesService;
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

      var UserProfilesService = /*#__PURE__*/function () {
        function UserProfilesService(api, alert, toast, router, navigation) {
          _classCallCheck(this, UserProfilesService);

          this.api = api;
          this.alert = alert;
          this.toast = toast;
          this.router = router;
          this.navigation = navigation;
          this.userProfilesUrl = 'user-profiles';
          this.userProfilesFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
          this.userProfiles = [];
          this.userProfile = {};
          this.userProfileLists = {};
          this.searchValue = '';
          this.perPage = 10;
          this.meta = null;
          this.page = 1;
          this.pagesContent = document.getElementById('pages-content');
        }

        _createClass(UserProfilesService, [{
          key: "getUserProfiles",
          value: function getUserProfiles() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.userProfilesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.userProfiles = res.data;
              _this3.userProfileLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editUserProfile",
          value: function editUserProfile(id) {
            var _this4 = this;

            this.api.get(this.userProfilesUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.userProfile = res.data.model;
              _this4.userProfileLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateUserProfile",
          value: function updateUserProfile() {
            var _this5 = this;

            this.api.put(this.userProfilesUrl + '/' + this.userProfile.id, {
              model: this.userProfile,
              pivots: {}
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getUserProfiles(1);
            });
          }
        }, {
          key: "createUserProfile",
          value: function createUserProfile() {
            var _this6 = this;

            this.api.get(this.userProfilesUrl + '/create').subscribe(function (res) {
              _this6.userProfile = {};
              _this6.userProfileLists = res.lists;
            });
          }
        }, {
          key: "storeUserProfile",
          value: function storeUserProfile() {
            var _this7 = this;

            this.api.post(this.userProfilesUrl, {
              model: this.userProfile,
              pivots: {}
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getUserProfiles(1);
            });
          }
        }, {
          key: "deleteUserProfile",
          value: function deleteUserProfile(id) {
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

                      this.api["delete"](this.userProfilesUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getUserProfiles(1);
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

        return UserProfilesService;
      }();

      UserProfilesService.ctorParameters = function () {
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

      UserProfilesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UserProfilesService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-profiles-user-profiles-module-es5.js.map