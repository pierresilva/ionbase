(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-groups-setting-groups-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-create/setting-groups-create.component.html":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-create/setting-groups-create.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSettingGroupsSettingGroupsCreateSettingGroupsCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/setting-groups'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"settingGroupsService.storeSettingGroup()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!settingGroupsService.settingGroupsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'AJUSTES GRUPOS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-setting-groups-form #settingGroupForm [model]=\"settingGroupsService.settingGroup\"></app-setting-groups-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-duplicate/setting-groups-duplicate.component.html":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-duplicate/setting-groups-duplicate.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSettingGroupsSettingGroupsDuplicateSettingGroupsDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  SettingGroups duplicate works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-edit/setting-groups-edit.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-edit/setting-groups-edit.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSettingGroupsSettingGroupsEditSettingGroupsEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/setting-groups'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"settingGroupsService.updateSettingGroup()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!settingGroupsService.settingGroupsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'AJUSTES GRUPOS' | titlecase}}: {{ settingGroupsService.settingGroup?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-setting-groups-form #settingGroupForm [model]=\"settingGroupsService.settingGroup\"></app-setting-groups-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

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


      __webpack_exports__["default"] = "<form #settingGroupsForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- setting_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'AJUSTES' | titlecase }}</ion-label>\n        <ionic-selectable name=\"setting_ids\"\n                          id=\"setting_ids-field\"\n                          [(ngModel)]=\"model.settings\"\n                          [items]=\"settingGroupsService.settingGroupLists.Setting\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('AJUSTES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('AJUSTES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setSettingIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.setting_ids\">\n            <div class=\"error-message\" *ngIf=\"settingGroupsForm.form.controls['setting_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end setting_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"settingGroupsForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- code -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'CÓDIGO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.code\"\n                            type=\"text\"\n                            name=\"code\"\n                            id=\"code-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.code\">\n                    <div class=\"error-message\" *ngIf=\"settingGroupsForm.form.controls['code']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end code -->\n\n\n</form>\n";
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


      __webpack_exports__["default"] = "<app-main-header title=\"{{'AJUSTES GRUPOS' | titlecase}}\"\n                 primaryLink=\"setting-groups/create\"\n                 primaryText=\"Crear {{'AJUSTES GRUPOS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('AJUSTES GRUPOS' | lowercase )\"\n                       (ionCancel)=\"this.settingGroupsService.searchValue = ''; settingGroupsService.getSettingGroups()\"\n                       (keyup.enter)=\"settingGroupsService.getSettingGroups()\"\n                       [(ngModel)]=\"settingGroupsService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && settingGroupsService.settingGroups?.length\">\n        <ion-card *ngFor=\"let settingGroup of settingGroupsService.settingGroups; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ settingGroup?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CÓDIGO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ settingGroup?.code }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'AJUSTES' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"settingGroup?.settings?.length\">\n                                <ng-container *ngFor=\"let setting of settingGroup?.settings; let last = last\">\n                                    <a routerLink=\"/settings/{{ setting?.id }}/edit\">{{ setting?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/setting-groups/' + settingGroup?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"settingGroupsService.deleteSettingGroup(settingGroup?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !settingGroupsService.settingGroups?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'AJUSTES GRUPOS' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/setting-groups/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'AJUSTES GRUPOS' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"settingGroupsService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"settingGroupsService.getSettingGroups(settingGroupsService.meta.current_page - 1)\"\n                        [disabled]=\"settingGroupsService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{settingGroupsService.meta.current_page}}\n                /{{settingGroupsService.meta.last_page}} {{settingGroupsService.meta.from}}-{{settingGroupsService.meta.to}}\n                /{{settingGroupsService.meta.total}} </ion-button>\n            <ion-button (click)=\"settingGroupsService.getSettingGroups(settingGroupsService.meta.current_page + 1)\"\n                        [disabled]=\"settingGroupsService.meta.current_page == settingGroupsService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n";
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


      __webpack_exports__["default"] = "<app-main-header title=\"AJUSTES GRUPOS\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/setting-groups/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'AJUSTES GRUPOS'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/setting-groups/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'AJUSTES GRUPOS' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/setting-groups/setting-groups-create/setting-groups-create.component.scss":
    /*!*******************************************************************************************!*\
      !*** ./src/app/setting-groups/setting-groups-create/setting-groups-create.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSettingGroupsSettingGroupsCreateSettingGroupsCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmctZ3JvdXBzL3NldHRpbmctZ3JvdXBzLWNyZWF0ZS9zZXR0aW5nLWdyb3Vwcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/setting-groups/setting-groups-create/setting-groups-create.component.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/setting-groups/setting-groups-create/setting-groups-create.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: SettingGroupsCreateComponent */

    /***/
    function srcAppSettingGroupsSettingGroupsCreateSettingGroupsCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingGroupsCreateComponent", function () {
        return SettingGroupsCreateComponent;
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

      var SettingGroupsCreateComponent = /*#__PURE__*/function () {
        function SettingGroupsCreateComponent(settingGroupsService, route, platform, splitPanel) {
          _classCallCheck(this, SettingGroupsCreateComponent);

          this.settingGroupsService = settingGroupsService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.formValid = false;
        }

        _createClass(SettingGroupsCreateComponent, [{
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

            this.settingGroupForm.settingGroupsForm.valueChanges.subscribe(function (data) {
              _this.settingGroupsService.settingGroupsFormValid.next(_this.settingGroupForm.settingGroupsForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.settingGroupsService.createSettingGroup();
            this.settingGroupsService.settingGroup = {};
          }
        }]);

        return SettingGroupsCreateComponent;
      }();

      SettingGroupsCreateComponent.ctorParameters = function () {
        return [{
          type: _setting_groups_service__WEBPACK_IMPORTED_MODULE_2__["SettingGroupsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      SettingGroupsCreateComponent.propDecorators = {
        settingGroupForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['settingGroupForm']
        }]
      };
      SettingGroupsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting-groups-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./setting-groups-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-create/setting-groups-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./setting-groups-create.component.scss */
        "./src/app/setting-groups/setting-groups-create/setting-groups-create.component.scss"))["default"]]
      })], SettingGroupsCreateComponent);
      /***/
    },

    /***/
    "./src/app/setting-groups/setting-groups-duplicate/setting-groups-duplicate.component.scss":
    /*!*************************************************************************************************!*\
      !*** ./src/app/setting-groups/setting-groups-duplicate/setting-groups-duplicate.component.scss ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSettingGroupsSettingGroupsDuplicateSettingGroupsDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmctZ3JvdXBzL3NldHRpbmctZ3JvdXBzLWR1cGxpY2F0ZS9zZXR0aW5nLWdyb3Vwcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/setting-groups/setting-groups-duplicate/setting-groups-duplicate.component.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/setting-groups/setting-groups-duplicate/setting-groups-duplicate.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: SettingGroupsDuplicateComponent */

    /***/
    function srcAppSettingGroupsSettingGroupsDuplicateSettingGroupsDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingGroupsDuplicateComponent", function () {
        return SettingGroupsDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SettingGroupsDuplicateComponent = /*#__PURE__*/function () {
        function SettingGroupsDuplicateComponent() {
          _classCallCheck(this, SettingGroupsDuplicateComponent);
        }

        _createClass(SettingGroupsDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SettingGroupsDuplicateComponent;
      }();

      SettingGroupsDuplicateComponent.ctorParameters = function () {
        return [];
      };

      SettingGroupsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting-groups-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./setting-groups-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-duplicate/setting-groups-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./setting-groups-duplicate.component.scss */
        "./src/app/setting-groups/setting-groups-duplicate/setting-groups-duplicate.component.scss"))["default"]]
      })], SettingGroupsDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/setting-groups/setting-groups-edit/setting-groups-edit.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/setting-groups/setting-groups-edit/setting-groups-edit.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSettingGroupsSettingGroupsEditSettingGroupsEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmctZ3JvdXBzL3NldHRpbmctZ3JvdXBzLWVkaXQvc2V0dGluZy1ncm91cHMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/setting-groups/setting-groups-edit/setting-groups-edit.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/setting-groups/setting-groups-edit/setting-groups-edit.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: SettingGroupsEditComponent */

    /***/
    function srcAppSettingGroupsSettingGroupsEditSettingGroupsEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingGroupsEditComponent", function () {
        return SettingGroupsEditComponent;
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

      var SettingGroupsEditComponent = /*#__PURE__*/function () {
        function SettingGroupsEditComponent(settingGroupsService, route, platform, splitPanel) {
          _classCallCheck(this, SettingGroupsEditComponent);

          this.settingGroupsService = settingGroupsService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.model = null;
        }

        _createClass(SettingGroupsEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.settingGroupsService.editSettingGroup(this.id);
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

            this.settingGroupForm.settingGroupsForm.valueChanges.subscribe(function (data) {
              _this2.settingGroupsService.settingGroupsFormValid.next(_this2.settingGroupForm.settingGroupsForm.valid);
            });
          }
        }]);

        return SettingGroupsEditComponent;
      }();

      SettingGroupsEditComponent.ctorParameters = function () {
        return [{
          type: _setting_groups_service__WEBPACK_IMPORTED_MODULE_2__["SettingGroupsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      SettingGroupsEditComponent.propDecorators = {
        settingGroupForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['settingGroupForm']
        }]
      };
      SettingGroupsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting-groups-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./setting-groups-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-edit/setting-groups-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./setting-groups-edit.component.scss */
        "./src/app/setting-groups/setting-groups-edit/setting-groups-edit.component.scss"))["default"]]
      })], SettingGroupsEditComponent);
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
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var SettingGroupsFormComponent = /*#__PURE__*/function () {
        function SettingGroupsFormComponent(settingGroupsService, toTitlecase) {
          _classCallCheck(this, SettingGroupsFormComponent);

          this.settingGroupsService = settingGroupsService;
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
            'setting_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('AJUSTES') + ' es obligatorio.'
            }]
          };
        }

        _createClass(SettingGroupsFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // set setSettingIds

        }, {
          key: "setSettingIds",
          value: function setSettingIds(event) {
            var settingIds = null;

            if (event.value.length) {
              settingIds = [];

              for (var i = 0; i < event.value.length; i++) {
                settingIds.push(event.value[i].id);
              }
            }

            this.settingGroupsService.settingGroup.setting_ids = settingIds;
          }
        }]);

        return SettingGroupsFormComponent;
      }();

      SettingGroupsFormComponent.ctorParameters = function () {
        return [{
          type: _setting_groups_service__WEBPACK_IMPORTED_MODULE_2__["SettingGroupsService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      SettingGroupsFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
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

      var SettingGroupsListComponent = /*#__PURE__*/function () {
        function SettingGroupsListComponent(settingGroupsService, api, loading, splitPanel) {
          _classCallCheck(this, SettingGroupsListComponent);

          this.settingGroupsService = settingGroupsService;
          this.api = api;
          this.loading = loading;
          this.splitPanel = splitPanel;
        }

        _createClass(SettingGroupsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.settingGroupsService.getSettingGroups();
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

        return SettingGroupsListComponent;
      }();

      SettingGroupsListComponent.ctorParameters = function () {
        return [{
          type: _setting_groups_service__WEBPACK_IMPORTED_MODULE_2__["SettingGroupsService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"]
        }];
      };

      SettingGroupsListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      onClosedData = "Wrapped Up!";
                      _context.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
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
      /* harmony import */


      var _setting_groups_edit_setting_groups_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./setting-groups-edit/setting-groups-edit.component */
      "./src/app/setting-groups/setting-groups-edit/setting-groups-edit.component.ts");
      /* harmony import */


      var _setting_groups_create_setting_groups_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./setting-groups-create/setting-groups-create.component */
      "./src/app/setting-groups/setting-groups-create/setting-groups-create.component.ts");
      /* harmony import */


      var _setting_groups_list_setting_groups_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./setting-groups-list/setting-groups-list.component */
      "./src/app/setting-groups/setting-groups-list/setting-groups-list.component.ts");

      var routes = [{
        path: '',
        component: _setting_groups_page__WEBPACK_IMPORTED_MODULE_3__["SettingGroupsPage"]
      }, {
        path: 'list',
        component: _setting_groups_list_setting_groups_list_component__WEBPACK_IMPORTED_MODULE_6__["SettingGroupsListComponent"]
      }, {
        path: 'create',
        component: _setting_groups_create_setting_groups_create_component__WEBPACK_IMPORTED_MODULE_5__["SettingGroupsCreateComponent"]
      }, {
        path: ':id/edit',
        component: _setting_groups_edit_setting_groups_edit_component__WEBPACK_IMPORTED_MODULE_4__["SettingGroupsEditComponent"]
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


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../@shared/shared.module */
      "./src/app/@shared/shared.module.ts");
      /* harmony import */


      var _setting_groups_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./setting-groups-routing.module */
      "./src/app/setting-groups/setting-groups-routing.module.ts");
      /* harmony import */


      var _setting_groups_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./setting-groups.page */
      "./src/app/setting-groups/setting-groups.page.ts");
      /* harmony import */


      var _setting_groups_list_setting_groups_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./setting-groups-list/setting-groups-list.component */
      "./src/app/setting-groups/setting-groups-list/setting-groups-list.component.ts");
      /* harmony import */


      var _setting_groups_create_setting_groups_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./setting-groups-create/setting-groups-create.component */
      "./src/app/setting-groups/setting-groups-create/setting-groups-create.component.ts");
      /* harmony import */


      var _setting_groups_duplicate_setting_groups_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./setting-groups-duplicate/setting-groups-duplicate.component */
      "./src/app/setting-groups/setting-groups-duplicate/setting-groups-duplicate.component.ts");
      /* harmony import */


      var _setting_groups_edit_setting_groups_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./setting-groups-edit/setting-groups-edit.component */
      "./src/app/setting-groups/setting-groups-edit/setting-groups-edit.component.ts");
      /* harmony import */


      var _setting_groups_form_setting_groups_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./setting-groups-form/setting-groups-form.component */
      "./src/app/setting-groups/setting-groups-form/setting-groups-form.component.ts");
      /* harmony import */


      var _setting_groups_modal_setting_groups_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./setting-groups-modal/setting-groups-modal.component */
      "./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.ts");

      var SettingGroupsPageModule = function SettingGroupsPageModule() {
        _classCallCheck(this, SettingGroupsPageModule);
      };

      SettingGroupsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _setting_groups_routing_module__WEBPACK_IMPORTED_MODULE_6__["SettingGroupsPageRoutingModule"]],
        declarations: [_setting_groups_page__WEBPACK_IMPORTED_MODULE_7__["SettingGroupsPage"], _setting_groups_list_setting_groups_list_component__WEBPACK_IMPORTED_MODULE_8__["SettingGroupsListComponent"], _setting_groups_create_setting_groups_create_component__WEBPACK_IMPORTED_MODULE_9__["SettingGroupsCreateComponent"], _setting_groups_duplicate_setting_groups_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["SettingGroupsDuplicateComponent"], _setting_groups_edit_setting_groups_edit_component__WEBPACK_IMPORTED_MODULE_11__["SettingGroupsEditComponent"], _setting_groups_form_setting_groups_form_component__WEBPACK_IMPORTED_MODULE_12__["SettingGroupsFormComponent"], _setting_groups_modal_setting_groups_modal_component__WEBPACK_IMPORTED_MODULE_13__["SettingGroupsModalComponent"]]
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


      var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../@shared/services/split-panel.service */
      "./src/app/@shared/services/split-panel.service.ts");

      var SettingGroupsPage = /*#__PURE__*/function () {
        function SettingGroupsPage(splitPanel) {
          _classCallCheck(this, SettingGroupsPage);

          this.splitPanel = splitPanel;
        }

        _createClass(SettingGroupsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }]);

        return SettingGroupsPage;
      }();

      SettingGroupsPage.ctorParameters = function () {
        return [{
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"]
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

      var SettingGroupsService = /*#__PURE__*/function () {
        function SettingGroupsService(api, alert, toast, router, navigation) {
          _classCallCheck(this, SettingGroupsService);

          this.api = api;
          this.alert = alert;
          this.toast = toast;
          this.router = router;
          this.navigation = navigation;
          this.settingGroupsUrl = 'setting-groups';
          this.settingGroupsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
          this.settingGroups = [];
          this.settingGroup = {};
          this.settingGroupLists = {};
          this.searchValue = '';
          this.perPage = 10;
          this.meta = null;
          this.page = 1;
          this.pagesContent = document.getElementById('pages-content');
        }

        _createClass(SettingGroupsService, [{
          key: "getSettingGroups",
          value: function getSettingGroups() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.settingGroupsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.settingGroups = res.data;
              _this3.settingGroupLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editSettingGroup",
          value: function editSettingGroup(id) {
            var _this4 = this;

            this.api.get(this.settingGroupsUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.settingGroup = res.data.model;
              _this4.settingGroupLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateSettingGroup",
          value: function updateSettingGroup() {
            var _this5 = this;

            this.api.put(this.settingGroupsUrl + '/' + this.settingGroup.id, {
              model: this.settingGroup,
              pivots: {}
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getSettingGroups(1);
            });
          }
        }, {
          key: "createSettingGroup",
          value: function createSettingGroup() {
            var _this6 = this;

            this.api.get(this.settingGroupsUrl + '/create').subscribe(function (res) {
              _this6.settingGroup = {};
              _this6.settingGroupLists = res.lists;
            });
          }
        }, {
          key: "storeSettingGroup",
          value: function storeSettingGroup() {
            var _this7 = this;

            this.api.post(this.settingGroupsUrl, {
              model: this.settingGroup,
              pivots: {}
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getSettingGroups(1);
            });
          }
        }, {
          key: "deleteSettingGroup",
          value: function deleteSettingGroup(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this8 = this;

              var confirm;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alert.confirmation('Desea eliminar el item?');

                    case 2:
                      confirm = _context2.sent;

                      if (!confirm) {
                        _context2.next = 7;
                        break;
                      }

                      this.api["delete"](this.settingGroupsUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getSettingGroups(1);
                      });
                      _context2.next = 8;
                      break;

                    case 7:
                      return _context2.abrupt("return");

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "saveSettingGroup",
          value: function saveSettingGroup() {}
        }]);

        return SettingGroupsService;
      }();

      SettingGroupsService.ctorParameters = function () {
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

      SettingGroupsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SettingGroupsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=setting-groups-setting-groups-module-es5.js.map