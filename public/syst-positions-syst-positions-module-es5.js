(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["syst-positions-syst-positions-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-positions/syst-positions-create/syst-positions-create.component.html":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-positions/syst-positions-create/syst-positions-create.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSystPositionsSystPositionsCreateSystPositionsCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/syst-positions'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"systPositionsService.storeSystPosition()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!systPositionsService.systPositionsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'CARGOS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-syst-positions-form #systPositionForm [model]=\"systPositionsService.systPosition\"></app-syst-positions-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-positions/syst-positions-duplicate/syst-positions-duplicate.component.html":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-positions/syst-positions-duplicate/syst-positions-duplicate.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSystPositionsSystPositionsDuplicateSystPositionsDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  SystPositions duplicate works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-positions/syst-positions-edit/syst-positions-edit.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-positions/syst-positions-edit/syst-positions-edit.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSystPositionsSystPositionsEditSystPositionsEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/syst-positions'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"systPositionsService.updateSystPosition()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!systPositionsService.systPositionsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'CARGOS' | titlecase}}: {{ systPositionsService.systPosition?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-syst-positions-form #systPositionForm [model]=\"systPositionsService.systPosition\"></app-syst-positions-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-positions/syst-positions-form/syst-positions-form.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-positions/syst-positions-form/syst-positions-form.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSystPositionsSystPositionsFormSystPositionsFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #systPositionsForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- user_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'USUARIOS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"user_ids\"\n                          id=\"user_ids-field\"\n                          [(ngModel)]=\"model.users\"\n                          [items]=\"systPositionsService.systPositionLists.User\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('USUARIOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('USUARIOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setUserIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.user_ids\">\n            <div class=\"error-message\" *ngIf=\"systPositionsForm.form.controls['user_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end user_ids -->\n\n\n    <!-- comp_contact_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'EMPRESAS CONTACTOS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"comp_contact_ids\"\n                          id=\"comp_contact_ids-field\"\n                          [(ngModel)]=\"model.comp_contacts\"\n                          [items]=\"systPositionsService.systPositionLists.CompContact\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('EMPRESAS CONTACTOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('EMPRESAS CONTACTOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setCompContactIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.comp_contact_ids\">\n            <div class=\"error-message\" *ngIf=\"systPositionsForm.form.controls['comp_contact_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end comp_contact_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"systPositionsForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- code -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'CÓDIGO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.code\"\n                            type=\"text\"\n                            name=\"code\"\n                            id=\"code-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.code\">\n                    <div class=\"error-message\" *ngIf=\"systPositionsForm.form.controls['code']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end code -->\n\n\n</form>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-positions/syst-positions-list/syst-positions-list.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-positions/syst-positions-list/syst-positions-list.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSystPositionsSystPositionsListSystPositionsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'CARGOS' | titlecase}}\"\n                 primaryLink=\"syst-positions/create\"\n                 primaryText=\"Crear {{'CARGOS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('CARGOS' | lowercase )\"\n                       (ionCancel)=\"this.systPositionsService.searchValue = ''; systPositionsService.getSystPositions()\"\n                       (keyup.enter)=\"systPositionsService.getSystPositions()\"\n                       [(ngModel)]=\"systPositionsService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && systPositionsService.systPositions?.length\">\n        <ion-card *ngFor=\"let systPosition of systPositionsService.systPositions; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ systPosition?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CÓDIGO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ systPosition?.code }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'USUARIOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"systPosition?.users?.length\">\n                                <ng-container *ngFor=\"let user of systPosition?.users; let last = last\">\n                                    <a routerLink=\"/users/{{ user?.id }}/edit\">{{ user?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'EMPRESAS CONTACTOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"systPosition?.comp_contacts?.length\">\n                                <ng-container *ngFor=\"let compContact of systPosition?.comp_contacts; let last = last\">\n                                    <a routerLink=\"/comp-contacts/{{ compContact?.id }}/edit\">{{ compContact?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/syst-positions/' + systPosition?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"systPositionsService.deleteSystPosition(systPosition?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !systPositionsService.systPositions?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'CARGOS' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/syst-positions/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'CARGOS' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"systPositionsService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"systPositionsService.getSystPositions(systPositionsService.meta.current_page - 1)\"\n                        [disabled]=\"systPositionsService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{systPositionsService.meta.current_page}}\n                /{{systPositionsService.meta.last_page}} {{systPositionsService.meta.from}}-{{systPositionsService.meta.to}}\n                /{{systPositionsService.meta.total}} </ion-button>\n            <ion-button (click)=\"systPositionsService.getSystPositions(systPositionsService.meta.current_page + 1)\"\n                        [disabled]=\"systPositionsService.meta.current_page == systPositionsService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-positions/syst-positions.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-positions/syst-positions.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSystPositionsSystPositionsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"CARGOS\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/syst-positions/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'CARGOS'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/syst-positions/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'CARGOS' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/syst-positions/syst-positions-create/syst-positions-create.component.scss":
    /*!*******************************************************************************************!*\
      !*** ./src/app/syst-positions/syst-positions-create/syst-positions-create.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSystPositionsSystPositionsCreateSystPositionsCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcG9zaXRpb25zL3N5c3QtcG9zaXRpb25zLWNyZWF0ZS9zeXN0LXBvc2l0aW9ucy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/syst-positions/syst-positions-create/syst-positions-create.component.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/syst-positions/syst-positions-create/syst-positions-create.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: SystPositionsCreateComponent */

    /***/
    function srcAppSystPositionsSystPositionsCreateSystPositionsCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystPositionsCreateComponent", function () {
        return SystPositionsCreateComponent;
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


      var _syst_positions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../syst-positions.service */
      "./src/app/syst-positions/syst-positions.service.ts");
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

      var SystPositionsCreateComponent = /*#__PURE__*/function () {
        function SystPositionsCreateComponent(systPositionsService, route, platform, splitPanel) {
          _classCallCheck(this, SystPositionsCreateComponent);

          this.systPositionsService = systPositionsService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.formValid = false;
        }

        _createClass(SystPositionsCreateComponent, [{
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

            this.systPositionForm.systPositionsForm.valueChanges.subscribe(function (data) {
              _this.systPositionsService.systPositionsFormValid.next(_this.systPositionForm.systPositionsForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.systPositionsService.createSystPosition();
            this.systPositionsService.systPosition = {};
          }
        }]);

        return SystPositionsCreateComponent;
      }();

      SystPositionsCreateComponent.ctorParameters = function () {
        return [{
          type: _syst_positions_service__WEBPACK_IMPORTED_MODULE_2__["SystPositionsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      SystPositionsCreateComponent.propDecorators = {
        systPositionForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['systPositionForm']
        }]
      };
      SystPositionsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-positions-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./syst-positions-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-positions/syst-positions-create/syst-positions-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./syst-positions-create.component.scss */
        "./src/app/syst-positions/syst-positions-create/syst-positions-create.component.scss"))["default"]]
      })], SystPositionsCreateComponent);
      /***/
    },

    /***/
    "./src/app/syst-positions/syst-positions-duplicate/syst-positions-duplicate.component.scss":
    /*!*************************************************************************************************!*\
      !*** ./src/app/syst-positions/syst-positions-duplicate/syst-positions-duplicate.component.scss ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSystPositionsSystPositionsDuplicateSystPositionsDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcG9zaXRpb25zL3N5c3QtcG9zaXRpb25zLWR1cGxpY2F0ZS9zeXN0LXBvc2l0aW9ucy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/syst-positions/syst-positions-duplicate/syst-positions-duplicate.component.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/syst-positions/syst-positions-duplicate/syst-positions-duplicate.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: SystPositionsDuplicateComponent */

    /***/
    function srcAppSystPositionsSystPositionsDuplicateSystPositionsDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystPositionsDuplicateComponent", function () {
        return SystPositionsDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SystPositionsDuplicateComponent = /*#__PURE__*/function () {
        function SystPositionsDuplicateComponent() {
          _classCallCheck(this, SystPositionsDuplicateComponent);
        }

        _createClass(SystPositionsDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SystPositionsDuplicateComponent;
      }();

      SystPositionsDuplicateComponent.ctorParameters = function () {
        return [];
      };

      SystPositionsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-positions-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./syst-positions-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-positions/syst-positions-duplicate/syst-positions-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./syst-positions-duplicate.component.scss */
        "./src/app/syst-positions/syst-positions-duplicate/syst-positions-duplicate.component.scss"))["default"]]
      })], SystPositionsDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/syst-positions/syst-positions-edit/syst-positions-edit.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/syst-positions/syst-positions-edit/syst-positions-edit.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSystPositionsSystPositionsEditSystPositionsEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcG9zaXRpb25zL3N5c3QtcG9zaXRpb25zLWVkaXQvc3lzdC1wb3NpdGlvbnMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/syst-positions/syst-positions-edit/syst-positions-edit.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/syst-positions/syst-positions-edit/syst-positions-edit.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: SystPositionsEditComponent */

    /***/
    function srcAppSystPositionsSystPositionsEditSystPositionsEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystPositionsEditComponent", function () {
        return SystPositionsEditComponent;
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


      var _syst_positions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../syst-positions.service */
      "./src/app/syst-positions/syst-positions.service.ts");
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

      var SystPositionsEditComponent = /*#__PURE__*/function () {
        function SystPositionsEditComponent(systPositionsService, route, platform, splitPanel) {
          _classCallCheck(this, SystPositionsEditComponent);

          this.systPositionsService = systPositionsService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.model = null;
        }

        _createClass(SystPositionsEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.systPositionsService.editSystPosition(this.id);
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

            this.systPositionForm.systPositionsForm.valueChanges.subscribe(function (data) {
              _this2.systPositionsService.systPositionsFormValid.next(_this2.systPositionForm.systPositionsForm.valid);
            });
          }
        }]);

        return SystPositionsEditComponent;
      }();

      SystPositionsEditComponent.ctorParameters = function () {
        return [{
          type: _syst_positions_service__WEBPACK_IMPORTED_MODULE_2__["SystPositionsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      SystPositionsEditComponent.propDecorators = {
        systPositionForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['systPositionForm']
        }]
      };
      SystPositionsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-positions-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./syst-positions-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-positions/syst-positions-edit/syst-positions-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./syst-positions-edit.component.scss */
        "./src/app/syst-positions/syst-positions-edit/syst-positions-edit.component.scss"))["default"]]
      })], SystPositionsEditComponent);
      /***/
    },

    /***/
    "./src/app/syst-positions/syst-positions-form/syst-positions-form.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/syst-positions/syst-positions-form/syst-positions-form.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSystPositionsSystPositionsFormSystPositionsFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcG9zaXRpb25zL3N5c3QtcG9zaXRpb25zLWZvcm0vc3lzdC1wb3NpdGlvbnMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/syst-positions/syst-positions-form/syst-positions-form.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/syst-positions/syst-positions-form/syst-positions-form.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: SystPositionsFormComponent */

    /***/
    function srcAppSystPositionsSystPositionsFormSystPositionsFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystPositionsFormComponent", function () {
        return SystPositionsFormComponent;
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


      var _syst_positions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../syst-positions.service */
      "./src/app/syst-positions/syst-positions.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var SystPositionsFormComponent = /*#__PURE__*/function () {
        function SystPositionsFormComponent(systPositionsService, toTitlecase) {
          _classCallCheck(this, SystPositionsFormComponent);

          this.systPositionsService = systPositionsService;
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
            'comp_contact_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('EMPRESAS CONTACTOS') + ' es obligatorio.'
            }]
          };
        }

        _createClass(SystPositionsFormComponent, [{
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

            this.systPositionsService.systPosition.user_ids = userIds;
          } // end setUserIds
          // set setCompContactIds

        }, {
          key: "setCompContactIds",
          value: function setCompContactIds(event) {
            var compContactIds = null;

            if (event.value.length) {
              compContactIds = [];

              for (var i = 0; i < event.value.length; i++) {
                compContactIds.push(event.value[i].id);
              }
            }

            this.systPositionsService.systPosition.comp_contact_ids = compContactIds;
          }
        }]);

        return SystPositionsFormComponent;
      }();

      SystPositionsFormComponent.ctorParameters = function () {
        return [{
          type: _syst_positions_service__WEBPACK_IMPORTED_MODULE_2__["SystPositionsService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      SystPositionsFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        systPositionsForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['systPositionsForm']
        }]
      };
      SystPositionsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-positions-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./syst-positions-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-positions/syst-positions-form/syst-positions-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./syst-positions-form.component.scss */
        "./src/app/syst-positions/syst-positions-form/syst-positions-form.component.scss"))["default"]]
      })], SystPositionsFormComponent);
      /***/
    },

    /***/
    "./src/app/syst-positions/syst-positions-list/syst-positions-list.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/syst-positions/syst-positions-list/syst-positions-list.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSystPositionsSystPositionsListSystPositionsListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcG9zaXRpb25zL3N5c3QtcG9zaXRpb25zLWxpc3Qvc3lzdC1wb3NpdGlvbnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/syst-positions/syst-positions-list/syst-positions-list.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/syst-positions/syst-positions-list/syst-positions-list.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: SystPositionsListComponent */

    /***/
    function srcAppSystPositionsSystPositionsListSystPositionsListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystPositionsListComponent", function () {
        return SystPositionsListComponent;
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


      var _syst_positions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../syst-positions.service */
      "./src/app/syst-positions/syst-positions.service.ts");
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

      var SystPositionsListComponent = /*#__PURE__*/function () {
        function SystPositionsListComponent(systPositionsService, api, loading, splitPanel) {
          _classCallCheck(this, SystPositionsListComponent);

          this.systPositionsService = systPositionsService;
          this.api = api;
          this.loading = loading;
          this.splitPanel = splitPanel;
        }

        _createClass(SystPositionsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.systPositionsService.getSystPositions();
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

        return SystPositionsListComponent;
      }();

      SystPositionsListComponent.ctorParameters = function () {
        return [{
          type: _syst_positions_service__WEBPACK_IMPORTED_MODULE_2__["SystPositionsService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"]
        }];
      };

      SystPositionsListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      SystPositionsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-positions-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./syst-positions-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-positions/syst-positions-list/syst-positions-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./syst-positions-list.component.scss */
        "./src/app/syst-positions/syst-positions-list/syst-positions-list.component.scss"))["default"]]
      })], SystPositionsListComponent);
      /***/
    },

    /***/
    "./src/app/syst-positions/syst-positions-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/syst-positions/syst-positions-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: SystPositionsPageRoutingModule */

    /***/
    function srcAppSystPositionsSystPositionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystPositionsPageRoutingModule", function () {
        return SystPositionsPageRoutingModule;
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


      var _syst_positions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./syst-positions.page */
      "./src/app/syst-positions/syst-positions.page.ts");
      /* harmony import */


      var _syst_positions_edit_syst_positions_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./syst-positions-edit/syst-positions-edit.component */
      "./src/app/syst-positions/syst-positions-edit/syst-positions-edit.component.ts");
      /* harmony import */


      var _syst_positions_create_syst_positions_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./syst-positions-create/syst-positions-create.component */
      "./src/app/syst-positions/syst-positions-create/syst-positions-create.component.ts");
      /* harmony import */


      var _syst_positions_list_syst_positions_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./syst-positions-list/syst-positions-list.component */
      "./src/app/syst-positions/syst-positions-list/syst-positions-list.component.ts");

      var routes = [{
        path: '',
        component: _syst_positions_page__WEBPACK_IMPORTED_MODULE_3__["SystPositionsPage"]
      }, {
        path: 'list',
        component: _syst_positions_list_syst_positions_list_component__WEBPACK_IMPORTED_MODULE_6__["SystPositionsListComponent"]
      }, {
        path: 'create',
        component: _syst_positions_create_syst_positions_create_component__WEBPACK_IMPORTED_MODULE_5__["SystPositionsCreateComponent"]
      }, {
        path: ':id/edit',
        component: _syst_positions_edit_syst_positions_edit_component__WEBPACK_IMPORTED_MODULE_4__["SystPositionsEditComponent"]
      }];

      var SystPositionsPageRoutingModule = function SystPositionsPageRoutingModule() {
        _classCallCheck(this, SystPositionsPageRoutingModule);
      };

      SystPositionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SystPositionsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/syst-positions/syst-positions.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/syst-positions/syst-positions.module.ts ***!
      \*********************************************************/

    /*! exports provided: SystPositionsPageModule */

    /***/
    function srcAppSystPositionsSystPositionsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystPositionsPageModule", function () {
        return SystPositionsPageModule;
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


      var _syst_positions_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./syst-positions-routing.module */
      "./src/app/syst-positions/syst-positions-routing.module.ts");
      /* harmony import */


      var _syst_positions_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./syst-positions.page */
      "./src/app/syst-positions/syst-positions.page.ts");
      /* harmony import */


      var _syst_positions_list_syst_positions_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./syst-positions-list/syst-positions-list.component */
      "./src/app/syst-positions/syst-positions-list/syst-positions-list.component.ts");
      /* harmony import */


      var _syst_positions_create_syst_positions_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./syst-positions-create/syst-positions-create.component */
      "./src/app/syst-positions/syst-positions-create/syst-positions-create.component.ts");
      /* harmony import */


      var _syst_positions_duplicate_syst_positions_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./syst-positions-duplicate/syst-positions-duplicate.component */
      "./src/app/syst-positions/syst-positions-duplicate/syst-positions-duplicate.component.ts");
      /* harmony import */


      var _syst_positions_edit_syst_positions_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./syst-positions-edit/syst-positions-edit.component */
      "./src/app/syst-positions/syst-positions-edit/syst-positions-edit.component.ts");
      /* harmony import */


      var _syst_positions_form_syst_positions_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./syst-positions-form/syst-positions-form.component */
      "./src/app/syst-positions/syst-positions-form/syst-positions-form.component.ts");

      var SystPositionsPageModule = function SystPositionsPageModule() {
        _classCallCheck(this, SystPositionsPageModule);
      };

      SystPositionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _syst_positions_routing_module__WEBPACK_IMPORTED_MODULE_6__["SystPositionsPageRoutingModule"]],
        declarations: [_syst_positions_page__WEBPACK_IMPORTED_MODULE_7__["SystPositionsPage"], _syst_positions_list_syst_positions_list_component__WEBPACK_IMPORTED_MODULE_8__["SystPositionsListComponent"], _syst_positions_create_syst_positions_create_component__WEBPACK_IMPORTED_MODULE_9__["SystPositionsCreateComponent"], _syst_positions_duplicate_syst_positions_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["SystPositionsDuplicateComponent"], _syst_positions_edit_syst_positions_edit_component__WEBPACK_IMPORTED_MODULE_11__["SystPositionsEditComponent"], _syst_positions_form_syst_positions_form_component__WEBPACK_IMPORTED_MODULE_12__["SystPositionsFormComponent"]]
      })], SystPositionsPageModule);
      /***/
    },

    /***/
    "./src/app/syst-positions/syst-positions.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/syst-positions/syst-positions.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSystPositionsSystPositionsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcG9zaXRpb25zL3N5c3QtcG9zaXRpb25zLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/syst-positions/syst-positions.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/syst-positions/syst-positions.page.ts ***!
      \*******************************************************/

    /*! exports provided: SystPositionsPage */

    /***/
    function srcAppSystPositionsSystPositionsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystPositionsPage", function () {
        return SystPositionsPage;
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

      var SystPositionsPage = /*#__PURE__*/function () {
        function SystPositionsPage(splitPanel) {
          _classCallCheck(this, SystPositionsPage);

          this.splitPanel = splitPanel;
        }

        _createClass(SystPositionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }]);

        return SystPositionsPage;
      }();

      SystPositionsPage.ctorParameters = function () {
        return [{
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"]
        }];
      };

      SystPositionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-positions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./syst-positions.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-positions/syst-positions.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./syst-positions.page.scss */
        "./src/app/syst-positions/syst-positions.page.scss"))["default"]]
      })], SystPositionsPage);
      /***/
    },

    /***/
    "./src/app/syst-positions/syst-positions.service.ts":
    /*!**********************************************************!*\
      !*** ./src/app/syst-positions/syst-positions.service.ts ***!
      \**********************************************************/

    /*! exports provided: SystPositionsService */

    /***/
    function srcAppSystPositionsSystPositionsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystPositionsService", function () {
        return SystPositionsService;
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

      var SystPositionsService = /*#__PURE__*/function () {
        function SystPositionsService(api, alert, toast, router, navigation) {
          _classCallCheck(this, SystPositionsService);

          this.api = api;
          this.alert = alert;
          this.toast = toast;
          this.router = router;
          this.navigation = navigation;
          this.systPositionsUrl = 'syst-positions';
          this.systPositionsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
          this.systPositions = [];
          this.systPosition = {};
          this.systPositionLists = {};
          this.searchValue = '';
          this.perPage = 10;
          this.meta = null;
          this.page = 1;
          this.pagesContent = document.getElementById('pages-content');
        }

        _createClass(SystPositionsService, [{
          key: "getSystPositions",
          value: function getSystPositions() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.systPositionsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.systPositions = res.data;
              _this3.systPositionLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editSystPosition",
          value: function editSystPosition(id) {
            var _this4 = this;

            this.api.get(this.systPositionsUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.systPosition = res.data.model;
              _this4.systPositionLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateSystPosition",
          value: function updateSystPosition() {
            var _this5 = this;

            this.api.put(this.systPositionsUrl + '/' + this.systPosition.id, {
              model: this.systPosition,
              pivots: {}
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getSystPositions(1);
            });
          }
        }, {
          key: "createSystPosition",
          value: function createSystPosition() {
            var _this6 = this;

            this.api.get(this.systPositionsUrl + '/create').subscribe(function (res) {
              _this6.systPosition = {};
              _this6.systPositionLists = res.lists;
            });
          }
        }, {
          key: "storeSystPosition",
          value: function storeSystPosition() {
            var _this7 = this;

            this.api.post(this.systPositionsUrl, {
              model: this.systPosition,
              pivots: {}
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getSystPositions(1);
            });
          }
        }, {
          key: "deleteSystPosition",
          value: function deleteSystPosition(id) {
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

                      this.api["delete"](this.systPositionsUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getSystPositions(1);
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

        return SystPositionsService;
      }();

      SystPositionsService.ctorParameters = function () {
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

      SystPositionsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SystPositionsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=syst-positions-syst-positions-module-es5.js.map