(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hous-unit-areas-hous-unit-areas-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-unit-areas/hous-unit-areas-create/hous-unit-areas-create.component.html":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hous-unit-areas/hous-unit-areas-create/hous-unit-areas-create.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHousUnitAreasHousUnitAreasCreateHousUnitAreasCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/hous-unit-areas'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"housUnitAreasService.storeHousUnitArea()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!housUnitAreasService.housUnitAreasFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'AREAS DE UNIDADES HABITACIONALES' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-hous-unit-areas-form #housUnitAreaForm [model]=\"housUnitAreasService.housUnitArea\"></app-hous-unit-areas-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-unit-areas/hous-unit-areas-duplicate/hous-unit-areas-duplicate.component.html":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hous-unit-areas/hous-unit-areas-duplicate/hous-unit-areas-duplicate.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHousUnitAreasHousUnitAreasDuplicateHousUnitAreasDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  HousUnitAreas duplicate works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-unit-areas/hous-unit-areas-edit/hous-unit-areas-edit.component.html":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hous-unit-areas/hous-unit-areas-edit/hous-unit-areas-edit.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHousUnitAreasHousUnitAreasEditHousUnitAreasEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/hous-unit-areas'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"housUnitAreasService.updateHousUnitArea()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!housUnitAreasService.housUnitAreasFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'AREAS DE UNIDADES HABITACIONALES' | titlecase}}: {{ housUnitAreasService.housUnitArea?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-hous-unit-areas-form #housUnitAreaForm [model]=\"housUnitAreasService.housUnitArea\"></app-hous-unit-areas-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-unit-areas/hous-unit-areas-form/hous-unit-areas-form.component.html":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hous-unit-areas/hous-unit-areas-form/hous-unit-areas-form.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHousUnitAreasHousUnitAreasFormHousUnitAreasFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #housUnitAreasForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- hous_unit_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'UNIDADESHABITACIONALE' | titlecase }}</ion-label>\n        <ionic-selectable name=\"hous_unit_id\"\n                          id=\"hous_unit_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.hous_unit\"\n                          [items]=\"housUnitAreasService.housUnitAreaLists.HousUnit\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('UNIDADES HABITACIONALES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('UNIDADES HABITACIONALES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setHousUnitId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.hous_unit_id\">\n            <div class=\"error-message\" *ngIf=\"housUnitAreasForm.form.controls['hous_unit_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end hous_unit_id -->\n\n\n    <!-- oper_schedule_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'AGENDA DE OPERACIONES' | titlecase }}</ion-label>\n        <ionic-selectable name=\"oper_schedule_ids\"\n                          id=\"oper_schedule_ids-field\"\n                          [(ngModel)]=\"model.oper_schedules\"\n                          [items]=\"housUnitAreasService.housUnitAreaLists.OperSchedule\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('AGENDA DE OPERACIONES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('AGENDA DE OPERACIONES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setOperScheduleIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.oper_schedule_ids\">\n            <div class=\"error-message\" *ngIf=\"housUnitAreasForm.form.controls['oper_schedule_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end oper_schedule_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"housUnitAreasForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- code -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'CÓDIGO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.code\"\n                            type=\"text\"\n                            name=\"code\"\n                            id=\"code-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.code\">\n                    <div class=\"error-message\" *ngIf=\"housUnitAreasForm.form.controls['code']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end code -->\n\n\n</form>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-unit-areas/hous-unit-areas-list/hous-unit-areas-list.component.html":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hous-unit-areas/hous-unit-areas-list/hous-unit-areas-list.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHousUnitAreasHousUnitAreasListHousUnitAreasListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'AREAS DE UNIDADES HABITACIONALES' | titlecase}}\"\n                 primaryLink=\"hous-unit-areas/create\"\n                 primaryText=\"Crear {{'AREAS DE UNIDADES HABITACIONALES' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('AREAS DE UNIDADES HABITACIONALES' | lowercase )\"\n                       (ionCancel)=\"this.housUnitAreasService.searchValue = ''; housUnitAreasService.getHousUnitAreas()\"\n                       (keyup.enter)=\"housUnitAreasService.getHousUnitAreas()\"\n                       [(ngModel)]=\"housUnitAreasService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && housUnitAreasService.housUnitAreas?.length\">\n        <ion-card *ngFor=\"let housUnitArea of housUnitAreasService.housUnitAreas; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ housUnitArea?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CÓDIGO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ housUnitArea?.code }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'UNIDADES HABITACIONALES' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/hous-units/{{ housUnitArea?.hous_unit?.id }}/edit\">{{ housUnitArea?.hous_unit?.name }}</a></div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'AGENDA DE OPERACIONES' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"housUnitArea?.oper_schedules?.length\">\n                                <ng-container *ngFor=\"let operSchedule of housUnitArea?.oper_schedules; let last = last\">\n                                    <a routerLink=\"/oper-schedules/{{ operSchedule?.id }}/edit\">{{ operSchedule?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/hous-unit-areas/' + housUnitArea?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"housUnitAreasService.deleteHousUnitArea(housUnitArea?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !housUnitAreasService.housUnitAreas?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'AREAS DE UNIDADES HABITACIONALES' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/hous-unit-areas/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'AREAS DE UNIDADES HABITACIONALES' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"housUnitAreasService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"housUnitAreasService.getHousUnitAreas(housUnitAreasService.meta.current_page - 1)\"\n                        [disabled]=\"housUnitAreasService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{housUnitAreasService.meta.current_page}}\n                /{{housUnitAreasService.meta.last_page}} {{housUnitAreasService.meta.from}}-{{housUnitAreasService.meta.to}}\n                /{{housUnitAreasService.meta.total}} </ion-button>\n            <ion-button (click)=\"housUnitAreasService.getHousUnitAreas(housUnitAreasService.meta.current_page + 1)\"\n                        [disabled]=\"housUnitAreasService.meta.current_page == housUnitAreasService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-unit-areas/hous-unit-areas.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hous-unit-areas/hous-unit-areas.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHousUnitAreasHousUnitAreasPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"AREAS DE UNIDADES HABITACIONALES\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/hous-unit-areas/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'AREAS DE UNIDADES HABITACIONALES'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/hous-unit-areas/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'AREAS DE UNIDADES HABITACIONALES' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/hous-unit-areas/hous-unit-areas-create/hous-unit-areas-create.component.scss":
    /*!**********************************************************************************************!*\
      !*** ./src/app/hous-unit-areas/hous-unit-areas-create/hous-unit-areas-create.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHousUnitAreasHousUnitAreasCreateHousUnitAreasCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdXMtdW5pdC1hcmVhcy9ob3VzLXVuaXQtYXJlYXMtY3JlYXRlL2hvdXMtdW5pdC1hcmVhcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/hous-unit-areas/hous-unit-areas-create/hous-unit-areas-create.component.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/hous-unit-areas/hous-unit-areas-create/hous-unit-areas-create.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: HousUnitAreasCreateComponent */

    /***/
    function srcAppHousUnitAreasHousUnitAreasCreateHousUnitAreasCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HousUnitAreasCreateComponent", function () {
        return HousUnitAreasCreateComponent;
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


      var _hous_unit_areas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../hous-unit-areas.service */
      "./src/app/hous-unit-areas/hous-unit-areas.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var HousUnitAreasCreateComponent = /*#__PURE__*/function () {
        function HousUnitAreasCreateComponent(housUnitAreasService, route, platform) {
          _classCallCheck(this, HousUnitAreasCreateComponent);

          this.housUnitAreasService = housUnitAreasService;
          this.route = route;
          this.platform = platform;
          this.id = null;
          this.formValid = false;
        }

        _createClass(HousUnitAreasCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.clearPosts();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.housUnitAreaForm.housUnitAreasForm.valueChanges.subscribe(function (data) {
              _this.housUnitAreasService.housUnitAreasFormValid.next(_this.housUnitAreaForm.housUnitAreasForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.housUnitAreasService.createHousUnitArea();
            this.housUnitAreasService.housUnitArea = {};
          }
        }]);

        return HousUnitAreasCreateComponent;
      }();

      HousUnitAreasCreateComponent.ctorParameters = function () {
        return [{
          type: _hous_unit_areas_service__WEBPACK_IMPORTED_MODULE_2__["HousUnitAreasService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      HousUnitAreasCreateComponent.propDecorators = {
        housUnitAreaForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['housUnitAreaForm']
        }]
      };
      HousUnitAreasCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hous-unit-areas-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./hous-unit-areas-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-unit-areas/hous-unit-areas-create/hous-unit-areas-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./hous-unit-areas-create.component.scss */
        "./src/app/hous-unit-areas/hous-unit-areas-create/hous-unit-areas-create.component.scss"))["default"]]
      })], HousUnitAreasCreateComponent);
      /***/
    },

    /***/
    "./src/app/hous-unit-areas/hous-unit-areas-duplicate/hous-unit-areas-duplicate.component.scss":
    /*!****************************************************************************************************!*\
      !*** ./src/app/hous-unit-areas/hous-unit-areas-duplicate/hous-unit-areas-duplicate.component.scss ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHousUnitAreasHousUnitAreasDuplicateHousUnitAreasDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdXMtdW5pdC1hcmVhcy9ob3VzLXVuaXQtYXJlYXMtZHVwbGljYXRlL2hvdXMtdW5pdC1hcmVhcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/hous-unit-areas/hous-unit-areas-duplicate/hous-unit-areas-duplicate.component.ts":
    /*!**************************************************************************************************!*\
      !*** ./src/app/hous-unit-areas/hous-unit-areas-duplicate/hous-unit-areas-duplicate.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: HousUnitAreasDuplicateComponent */

    /***/
    function srcAppHousUnitAreasHousUnitAreasDuplicateHousUnitAreasDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HousUnitAreasDuplicateComponent", function () {
        return HousUnitAreasDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HousUnitAreasDuplicateComponent = /*#__PURE__*/function () {
        function HousUnitAreasDuplicateComponent() {
          _classCallCheck(this, HousUnitAreasDuplicateComponent);
        }

        _createClass(HousUnitAreasDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HousUnitAreasDuplicateComponent;
      }();

      HousUnitAreasDuplicateComponent.ctorParameters = function () {
        return [];
      };

      HousUnitAreasDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hous-unit-areas-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./hous-unit-areas-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-unit-areas/hous-unit-areas-duplicate/hous-unit-areas-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./hous-unit-areas-duplicate.component.scss */
        "./src/app/hous-unit-areas/hous-unit-areas-duplicate/hous-unit-areas-duplicate.component.scss"))["default"]]
      })], HousUnitAreasDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/hous-unit-areas/hous-unit-areas-edit/hous-unit-areas-edit.component.scss":
    /*!******************************************************************************************!*\
      !*** ./src/app/hous-unit-areas/hous-unit-areas-edit/hous-unit-areas-edit.component.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHousUnitAreasHousUnitAreasEditHousUnitAreasEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdXMtdW5pdC1hcmVhcy9ob3VzLXVuaXQtYXJlYXMtZWRpdC9ob3VzLXVuaXQtYXJlYXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/hous-unit-areas/hous-unit-areas-edit/hous-unit-areas-edit.component.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/hous-unit-areas/hous-unit-areas-edit/hous-unit-areas-edit.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: HousUnitAreasEditComponent */

    /***/
    function srcAppHousUnitAreasHousUnitAreasEditHousUnitAreasEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HousUnitAreasEditComponent", function () {
        return HousUnitAreasEditComponent;
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


      var _hous_unit_areas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../hous-unit-areas.service */
      "./src/app/hous-unit-areas/hous-unit-areas.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var HousUnitAreasEditComponent = /*#__PURE__*/function () {
        function HousUnitAreasEditComponent(housUnitAreasService, route, platform) {
          _classCallCheck(this, HousUnitAreasEditComponent);

          this.housUnitAreasService = housUnitAreasService;
          this.route = route;
          this.platform = platform;
          this.id = null;
          this.model = null;
        }

        _createClass(HousUnitAreasEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.housUnitAreasService.editHousUnitArea(this.id);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            this.housUnitAreaForm.housUnitAreasForm.valueChanges.subscribe(function (data) {
              _this2.housUnitAreasService.housUnitAreasFormValid.next(_this2.housUnitAreaForm.housUnitAreasForm.valid);
            });
          }
        }]);

        return HousUnitAreasEditComponent;
      }();

      HousUnitAreasEditComponent.ctorParameters = function () {
        return [{
          type: _hous_unit_areas_service__WEBPACK_IMPORTED_MODULE_2__["HousUnitAreasService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      HousUnitAreasEditComponent.propDecorators = {
        housUnitAreaForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['housUnitAreaForm']
        }]
      };
      HousUnitAreasEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hous-unit-areas-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./hous-unit-areas-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-unit-areas/hous-unit-areas-edit/hous-unit-areas-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./hous-unit-areas-edit.component.scss */
        "./src/app/hous-unit-areas/hous-unit-areas-edit/hous-unit-areas-edit.component.scss"))["default"]]
      })], HousUnitAreasEditComponent);
      /***/
    },

    /***/
    "./src/app/hous-unit-areas/hous-unit-areas-form/hous-unit-areas-form.component.scss":
    /*!******************************************************************************************!*\
      !*** ./src/app/hous-unit-areas/hous-unit-areas-form/hous-unit-areas-form.component.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHousUnitAreasHousUnitAreasFormHousUnitAreasFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdXMtdW5pdC1hcmVhcy9ob3VzLXVuaXQtYXJlYXMtZm9ybS9ob3VzLXVuaXQtYXJlYXMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/hous-unit-areas/hous-unit-areas-form/hous-unit-areas-form.component.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/hous-unit-areas/hous-unit-areas-form/hous-unit-areas-form.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: HousUnitAreasFormComponent */

    /***/
    function srcAppHousUnitAreasHousUnitAreasFormHousUnitAreasFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HousUnitAreasFormComponent", function () {
        return HousUnitAreasFormComponent;
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


      var _hous_unit_areas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../hous-unit-areas.service */
      "./src/app/hous-unit-areas/hous-unit-areas.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var HousUnitAreasFormComponent = /*#__PURE__*/function () {
        function HousUnitAreasFormComponent(housUnitAreasService, toTitlecase) {
          _classCallCheck(this, HousUnitAreasFormComponent);

          this.housUnitAreasService = housUnitAreasService;
          this.toTitlecase = toTitlecase;
          this.model = {};
          this.validationMessages = {
            'hous_unit_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('housUnit - NAME') + ' es obligatorio.'
            }],
            'name': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'
            }],
            'code': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.'
            }],
            'oper_schedule_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('AGENDA DE OPERACIONES') + ' es obligatorio.'
            }]
          };
        }

        _createClass(HousUnitAreasFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // set setHousUnitId

        }, {
          key: "setHousUnitId",
          value: function setHousUnitId(event) {
            this.housUnitAreasService.housUnitArea.hous_unit_id = event.value ? event.value.id : null;
          } // end setHousUnitId
          // set setOperScheduleIds

        }, {
          key: "setOperScheduleIds",
          value: function setOperScheduleIds(event) {
            var operScheduleIds = null;

            if (event.value.length) {
              operScheduleIds = [];

              for (var i = 0; i < event.value.length; i++) {
                operScheduleIds.push(event.value[i].id);
              }
            }

            this.housUnitAreasService.housUnitArea.oper_schedule_ids = operScheduleIds;
          }
        }]);

        return HousUnitAreasFormComponent;
      }();

      HousUnitAreasFormComponent.ctorParameters = function () {
        return [{
          type: _hous_unit_areas_service__WEBPACK_IMPORTED_MODULE_2__["HousUnitAreasService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      HousUnitAreasFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        housUnitAreasForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['housUnitAreasForm']
        }]
      };
      HousUnitAreasFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hous-unit-areas-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./hous-unit-areas-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-unit-areas/hous-unit-areas-form/hous-unit-areas-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./hous-unit-areas-form.component.scss */
        "./src/app/hous-unit-areas/hous-unit-areas-form/hous-unit-areas-form.component.scss"))["default"]]
      })], HousUnitAreasFormComponent);
      /***/
    },

    /***/
    "./src/app/hous-unit-areas/hous-unit-areas-list/hous-unit-areas-list.component.scss":
    /*!******************************************************************************************!*\
      !*** ./src/app/hous-unit-areas/hous-unit-areas-list/hous-unit-areas-list.component.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHousUnitAreasHousUnitAreasListHousUnitAreasListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdXMtdW5pdC1hcmVhcy9ob3VzLXVuaXQtYXJlYXMtbGlzdC9ob3VzLXVuaXQtYXJlYXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/hous-unit-areas/hous-unit-areas-list/hous-unit-areas-list.component.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/hous-unit-areas/hous-unit-areas-list/hous-unit-areas-list.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: HousUnitAreasListComponent */

    /***/
    function srcAppHousUnitAreasHousUnitAreasListHousUnitAreasListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HousUnitAreasListComponent", function () {
        return HousUnitAreasListComponent;
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


      var _hous_unit_areas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../hous-unit-areas.service */
      "./src/app/hous-unit-areas/hous-unit-areas.service.ts");
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

      var HousUnitAreasListComponent = /*#__PURE__*/function () {
        function HousUnitAreasListComponent(housUnitAreasService, api, loading) {
          _classCallCheck(this, HousUnitAreasListComponent);

          this.housUnitAreasService = housUnitAreasService;
          this.api = api;
          this.loading = loading;
        }

        _createClass(HousUnitAreasListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.housUnitAreasService.getHousUnitAreas();
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            this.content.scrollToTop(300);
          }
        }]);

        return HousUnitAreasListComponent;
      }();

      HousUnitAreasListComponent.ctorParameters = function () {
        return [{
          type: _hous_unit_areas_service__WEBPACK_IMPORTED_MODULE_2__["HousUnitAreasService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }];
      };

      HousUnitAreasListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      HousUnitAreasListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hous-unit-areas-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./hous-unit-areas-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-unit-areas/hous-unit-areas-list/hous-unit-areas-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./hous-unit-areas-list.component.scss */
        "./src/app/hous-unit-areas/hous-unit-areas-list/hous-unit-areas-list.component.scss"))["default"]]
      })], HousUnitAreasListComponent);
      /***/
    },

    /***/
    "./src/app/hous-unit-areas/hous-unit-areas-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/hous-unit-areas/hous-unit-areas-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: HousUnitAreasPageRoutingModule */

    /***/
    function srcAppHousUnitAreasHousUnitAreasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HousUnitAreasPageRoutingModule", function () {
        return HousUnitAreasPageRoutingModule;
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


      var _hous_unit_areas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./hous-unit-areas.page */
      "./src/app/hous-unit-areas/hous-unit-areas.page.ts");
      /* harmony import */


      var _hous_unit_areas_edit_hous_unit_areas_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./hous-unit-areas-edit/hous-unit-areas-edit.component */
      "./src/app/hous-unit-areas/hous-unit-areas-edit/hous-unit-areas-edit.component.ts");
      /* harmony import */


      var _hous_unit_areas_create_hous_unit_areas_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./hous-unit-areas-create/hous-unit-areas-create.component */
      "./src/app/hous-unit-areas/hous-unit-areas-create/hous-unit-areas-create.component.ts");
      /* harmony import */


      var _hous_unit_areas_list_hous_unit_areas_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./hous-unit-areas-list/hous-unit-areas-list.component */
      "./src/app/hous-unit-areas/hous-unit-areas-list/hous-unit-areas-list.component.ts");

      var routes = [{
        path: '',
        component: _hous_unit_areas_page__WEBPACK_IMPORTED_MODULE_3__["HousUnitAreasPage"]
      }, {
        path: 'list',
        component: _hous_unit_areas_list_hous_unit_areas_list_component__WEBPACK_IMPORTED_MODULE_6__["HousUnitAreasListComponent"]
      }, {
        path: 'create',
        component: _hous_unit_areas_create_hous_unit_areas_create_component__WEBPACK_IMPORTED_MODULE_5__["HousUnitAreasCreateComponent"]
      }, {
        path: ':id/edit',
        component: _hous_unit_areas_edit_hous_unit_areas_edit_component__WEBPACK_IMPORTED_MODULE_4__["HousUnitAreasEditComponent"]
      }];

      var HousUnitAreasPageRoutingModule = function HousUnitAreasPageRoutingModule() {
        _classCallCheck(this, HousUnitAreasPageRoutingModule);
      };

      HousUnitAreasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HousUnitAreasPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/hous-unit-areas/hous-unit-areas.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/hous-unit-areas/hous-unit-areas.module.ts ***!
      \***********************************************************/

    /*! exports provided: HousUnitAreasPageModule */

    /***/
    function srcAppHousUnitAreasHousUnitAreasModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HousUnitAreasPageModule", function () {
        return HousUnitAreasPageModule;
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


      var _hous_unit_areas_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./hous-unit-areas-routing.module */
      "./src/app/hous-unit-areas/hous-unit-areas-routing.module.ts");
      /* harmony import */


      var _hous_unit_areas_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./hous-unit-areas.page */
      "./src/app/hous-unit-areas/hous-unit-areas.page.ts");
      /* harmony import */


      var _hous_unit_areas_list_hous_unit_areas_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./hous-unit-areas-list/hous-unit-areas-list.component */
      "./src/app/hous-unit-areas/hous-unit-areas-list/hous-unit-areas-list.component.ts");
      /* harmony import */


      var _hous_unit_areas_create_hous_unit_areas_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./hous-unit-areas-create/hous-unit-areas-create.component */
      "./src/app/hous-unit-areas/hous-unit-areas-create/hous-unit-areas-create.component.ts");
      /* harmony import */


      var _hous_unit_areas_duplicate_hous_unit_areas_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./hous-unit-areas-duplicate/hous-unit-areas-duplicate.component */
      "./src/app/hous-unit-areas/hous-unit-areas-duplicate/hous-unit-areas-duplicate.component.ts");
      /* harmony import */


      var _hous_unit_areas_edit_hous_unit_areas_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./hous-unit-areas-edit/hous-unit-areas-edit.component */
      "./src/app/hous-unit-areas/hous-unit-areas-edit/hous-unit-areas-edit.component.ts");
      /* harmony import */


      var _hous_unit_areas_form_hous_unit_areas_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./hous-unit-areas-form/hous-unit-areas-form.component */
      "./src/app/hous-unit-areas/hous-unit-areas-form/hous-unit-areas-form.component.ts");

      var HousUnitAreasPageModule = function HousUnitAreasPageModule() {
        _classCallCheck(this, HousUnitAreasPageModule);
      };

      HousUnitAreasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _hous_unit_areas_routing_module__WEBPACK_IMPORTED_MODULE_6__["HousUnitAreasPageRoutingModule"]],
        declarations: [_hous_unit_areas_page__WEBPACK_IMPORTED_MODULE_7__["HousUnitAreasPage"], _hous_unit_areas_list_hous_unit_areas_list_component__WEBPACK_IMPORTED_MODULE_8__["HousUnitAreasListComponent"], _hous_unit_areas_create_hous_unit_areas_create_component__WEBPACK_IMPORTED_MODULE_9__["HousUnitAreasCreateComponent"], _hous_unit_areas_duplicate_hous_unit_areas_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["HousUnitAreasDuplicateComponent"], _hous_unit_areas_edit_hous_unit_areas_edit_component__WEBPACK_IMPORTED_MODULE_11__["HousUnitAreasEditComponent"], _hous_unit_areas_form_hous_unit_areas_form_component__WEBPACK_IMPORTED_MODULE_12__["HousUnitAreasFormComponent"]]
      })], HousUnitAreasPageModule);
      /***/
    },

    /***/
    "./src/app/hous-unit-areas/hous-unit-areas.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/hous-unit-areas/hous-unit-areas.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHousUnitAreasHousUnitAreasPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdXMtdW5pdC1hcmVhcy9ob3VzLXVuaXQtYXJlYXMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/hous-unit-areas/hous-unit-areas.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/hous-unit-areas/hous-unit-areas.page.ts ***!
      \*********************************************************/

    /*! exports provided: HousUnitAreasPage */

    /***/
    function srcAppHousUnitAreasHousUnitAreasPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HousUnitAreasPage", function () {
        return HousUnitAreasPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HousUnitAreasPage = /*#__PURE__*/function () {
        function HousUnitAreasPage() {
          _classCallCheck(this, HousUnitAreasPage);
        }

        _createClass(HousUnitAreasPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HousUnitAreasPage;
      }();

      HousUnitAreasPage.ctorParameters = function () {
        return [];
      };

      HousUnitAreasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hous-unit-areas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./hous-unit-areas.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-unit-areas/hous-unit-areas.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./hous-unit-areas.page.scss */
        "./src/app/hous-unit-areas/hous-unit-areas.page.scss"))["default"]]
      })], HousUnitAreasPage);
      /***/
    },

    /***/
    "./src/app/hous-unit-areas/hous-unit-areas.service.ts":
    /*!************************************************************!*\
      !*** ./src/app/hous-unit-areas/hous-unit-areas.service.ts ***!
      \************************************************************/

    /*! exports provided: HousUnitAreasService */

    /***/
    function srcAppHousUnitAreasHousUnitAreasServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HousUnitAreasService", function () {
        return HousUnitAreasService;
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

      var HousUnitAreasService = /*#__PURE__*/function () {
        function HousUnitAreasService(api, alert, toast, router, navigation) {
          _classCallCheck(this, HousUnitAreasService);

          this.api = api;
          this.alert = alert;
          this.toast = toast;
          this.router = router;
          this.navigation = navigation;
          this.housUnitAreasUrl = 'hous-unit-areas';
          this.housUnitAreasFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
          this.housUnitAreas = [];
          this.housUnitArea = {};
          this.housUnitAreaLists = {};
          this.searchValue = '';
          this.perPage = 10;
          this.meta = null;
          this.page = 1;
          this.pagesContent = document.getElementById('pages-content');
        }

        _createClass(HousUnitAreasService, [{
          key: "getHousUnitAreas",
          value: function getHousUnitAreas() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.housUnitAreasUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.housUnitAreas = res.data;
              _this3.housUnitAreaLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editHousUnitArea",
          value: function editHousUnitArea(id) {
            var _this4 = this;

            this.api.get(this.housUnitAreasUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.housUnitArea = res.data.model;
              _this4.housUnitAreaLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateHousUnitArea",
          value: function updateHousUnitArea() {
            var _this5 = this;

            this.api.put(this.housUnitAreasUrl + '/' + this.housUnitArea.id, {
              model: this.housUnitArea,
              pivots: {}
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getHousUnitAreas(1);
            });
          }
        }, {
          key: "createHousUnitArea",
          value: function createHousUnitArea() {
            var _this6 = this;

            this.api.get(this.housUnitAreasUrl + '/create').subscribe(function (res) {
              _this6.housUnitArea = {};
              _this6.housUnitAreaLists = res.lists;
            });
          }
        }, {
          key: "storeHousUnitArea",
          value: function storeHousUnitArea() {
            var _this7 = this;

            this.api.post(this.housUnitAreasUrl, {
              model: this.housUnitArea,
              pivots: {}
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getHousUnitAreas(1);
            });
          }
        }, {
          key: "deleteHousUnitArea",
          value: function deleteHousUnitArea(id) {
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

                      this.api["delete"](this.housUnitAreasUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getHousUnitAreas(1);
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

        return HousUnitAreasService;
      }();

      HousUnitAreasService.ctorParameters = function () {
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

      HousUnitAreasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], HousUnitAreasService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=hous-unit-areas-hous-unit-areas-module-es5.js.map