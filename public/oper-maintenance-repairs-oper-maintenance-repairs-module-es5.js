(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oper-maintenance-repairs-oper-maintenance-repairs-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-create/oper-maintenance-repairs-create.component.html":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-create/oper-maintenance-repairs-create.component.html ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperMaintenanceRepairsOperMaintenanceRepairsCreateOperMaintenanceRepairsCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/oper-maintenance-repairs'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"operMaintenanceRepairsService.storeOperMaintenanceRepair()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!operMaintenanceRepairsService.operMaintenanceRepairsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'OPERATIVIDAD REPARACIONES' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-oper-maintenance-repairs-form #operMaintenanceRepairForm [model]=\"operMaintenanceRepairsService.operMaintenanceRepair\"></app-oper-maintenance-repairs-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-duplicate/oper-maintenance-repairs-duplicate.component.html":
    /*!*********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-duplicate/oper-maintenance-repairs-duplicate.component.html ***!
      \*********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperMaintenanceRepairsOperMaintenanceRepairsDuplicateOperMaintenanceRepairsDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  OperMaintenanceRepairs duplicate works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component.html":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component.html ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperMaintenanceRepairsOperMaintenanceRepairsEditOperMaintenanceRepairsEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/oper-maintenance-repairs'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"operMaintenanceRepairsService.updateOperMaintenanceRepair()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!operMaintenanceRepairsService.operMaintenanceRepairsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'OPERATIVIDAD REPARACIONES' | titlecase}}: {{ operMaintenanceRepairsService.operMaintenanceRepair?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-oper-maintenance-repairs-form #operMaintenanceRepairForm [model]=\"operMaintenanceRepairsService.operMaintenanceRepair\"></app-oper-maintenance-repairs-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-form/oper-maintenance-repairs-form.component.html":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-form/oper-maintenance-repairs-form.component.html ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperMaintenanceRepairsOperMaintenanceRepairsFormOperMaintenanceRepairsFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #operMaintenanceRepairsForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- oper_corrective_maintenance_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'MANTENIMIENTO' | titlecase }}</ion-label>\n        <ionic-selectable name=\"oper_corrective_maintenance_id\"\n                          id=\"oper_corrective_maintenance_id-field\"\n                          [(ngModel)]=\"model.oper_corrective_maintenance\"\n                          [items]=\"operMaintenanceRepairsService.operMaintenanceRepairLists.OperCorrectiveMaintenance\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('OPERATIVIDAD MTTO CORRECTIVOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('OPERATIVIDAD MTTO CORRECTIVOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setOperCorrectiveMaintenanceId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.oper_corrective_maintenance_id\">\n            <div class=\"error-message\" *ngIf=\"operMaintenanceRepairsForm.form.controls['oper_corrective_maintenance_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end oper_corrective_maintenance_id -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"operMaintenanceRepairsForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- date -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'FECHA' | titlecase }}</ion-label>\n                <ion-datetime name=\"date\"\n                              id=\"date-field\"\n                              [doneText]=\"'Seleccionar'\"\n                              [cancelText]=\"'Cancelar'\"\n                              [(ngModel)]=\"model.date\"\n                              displayFormat=\"DD/MM/YYYY\"></ion-datetime>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.date\">\n                    <div class=\"error-message\" *ngIf=\"operMaintenanceRepairsForm.form.controls['date']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end date -->\n\n\n            <!-- time -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'HORA' | titlecase }}</ion-label>\n                <ion-datetime name=\"time\"\n                              id=\"time-field\"\n                              [doneText]=\"'Seleccionar'\"\n                              [cancelText]=\"'Cancelar'\"\n                              [(ngModel)]=\"model.time\"\n                              displayFormat=\"HH:mm\"></ion-datetime>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.time\">\n                    <div class=\"error-message\" *ngIf=\"operMaintenanceRepairsForm.form.controls['time']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end time -->\n\n\n            <!-- completed_by -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'REPORTADO POR' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.completed_by\"\n                            type=\"text\"\n                            name=\"completed_by\"\n                            id=\"completed_by-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.completed_by\">\n                    <div class=\"error-message\" *ngIf=\"operMaintenanceRepairsForm.form.controls['completed_by']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end completed_by -->\n\n\n</form>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-list/oper-maintenance-repairs-list.component.html":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-list/oper-maintenance-repairs-list.component.html ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperMaintenanceRepairsOperMaintenanceRepairsListOperMaintenanceRepairsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'OPERATIVIDAD REPARACIONES' | titlecase}}\"\n                 primaryLink=\"oper-maintenance-repairs/create\"\n                 primaryText=\"Crear {{'OPERATIVIDAD REPARACIONES' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('OPERATIVIDAD REPARACIONES' | lowercase )\"\n                       (ionCancel)=\"this.operMaintenanceRepairsService.searchValue = ''; operMaintenanceRepairsService.getOperMaintenanceRepairs()\"\n                       (keyup.enter)=\"operMaintenanceRepairsService.getOperMaintenanceRepairs()\"\n                       [(ngModel)]=\"operMaintenanceRepairsService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && operMaintenanceRepairsService.operMaintenanceRepairs?.length\">\n        <ion-card *ngFor=\"let operMaintenanceRepair of operMaintenanceRepairsService.operMaintenanceRepairs; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operMaintenanceRepair?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'FECHA' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operMaintenanceRepair?.date | dateFormat:'DD/MM/YYYY' }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'HORA' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operMaintenanceRepair?.time | dateFormat:'HH:mm' }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'REPORTADO POR' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operMaintenanceRepair?.completed_by }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'OPERATIVIDAD MTTO CORRECTIVOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/oper-corrective-maintenances/{{ operMaintenanceRepair?.oper_corrective_maintenance?.id }}/edit\">{{ operMaintenanceRepair?.oper_corrective_maintenance?.name }}</a></div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/oper-maintenance-repairs/' + operMaintenanceRepair?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"operMaintenanceRepairsService.deleteOperMaintenanceRepair(operMaintenanceRepair?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !operMaintenanceRepairsService.operMaintenanceRepairs?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'OPERATIVIDAD REPARACIONES' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/oper-maintenance-repairs/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'OPERATIVIDAD REPARACIONES' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"operMaintenanceRepairsService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"operMaintenanceRepairsService.getOperMaintenanceRepairs(operMaintenanceRepairsService.meta.current_page - 1)\"\n                        [disabled]=\"operMaintenanceRepairsService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{operMaintenanceRepairsService.meta.current_page}}\n                /{{operMaintenanceRepairsService.meta.last_page}} {{operMaintenanceRepairsService.meta.from}}-{{operMaintenanceRepairsService.meta.to}}\n                /{{operMaintenanceRepairsService.meta.total}} </ion-button>\n            <ion-button (click)=\"operMaintenanceRepairsService.getOperMaintenanceRepairs(operMaintenanceRepairsService.meta.current_page + 1)\"\n                        [disabled]=\"operMaintenanceRepairsService.meta.current_page == operMaintenanceRepairsService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs.page.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs.page.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOperMaintenanceRepairsOperMaintenanceRepairsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"OPERATIVIDAD REPARACIONES\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/oper-maintenance-repairs/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'OPERATIVIDAD REPARACIONES'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/oper-maintenance-repairs/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'OPERATIVIDAD REPARACIONES' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-create/oper-maintenance-repairs-create.component.scss":
    /*!*************************************************************************************************************************!*\
      !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs-create/oper-maintenance-repairs-create.component.scss ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperMaintenanceRepairsOperMaintenanceRepairsCreateOperMaintenanceRepairsCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbWFpbnRlbmFuY2UtcmVwYWlycy9vcGVyLW1haW50ZW5hbmNlLXJlcGFpcnMtY3JlYXRlL29wZXItbWFpbnRlbmFuY2UtcmVwYWlycy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-create/oper-maintenance-repairs-create.component.ts":
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs-create/oper-maintenance-repairs-create.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: OperMaintenanceRepairsCreateComponent */

    /***/
    function srcAppOperMaintenanceRepairsOperMaintenanceRepairsCreateOperMaintenanceRepairsCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMaintenanceRepairsCreateComponent", function () {
        return OperMaintenanceRepairsCreateComponent;
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


      var _oper_maintenance_repairs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-maintenance-repairs.service */
      "./src/app/oper-maintenance-repairs/oper-maintenance-repairs.service.ts");
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

      var OperMaintenanceRepairsCreateComponent = /*#__PURE__*/function () {
        function OperMaintenanceRepairsCreateComponent(operMaintenanceRepairsService, route, platform, splitPanel) {
          _classCallCheck(this, OperMaintenanceRepairsCreateComponent);

          this.operMaintenanceRepairsService = operMaintenanceRepairsService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.formValid = false;
        }

        _createClass(OperMaintenanceRepairsCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.clearPosts();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
            this.operMaintenanceRepairsService.operMaintenanceRepair.oper_corrective_maintenance_id = this.route.snapshot.params.mttoId;

            if (this.route.snapshot.params.mttoId) {
              for (var i = 0; i < this.operMaintenanceRepairsService.operMaintenanceRepairLists.OperCorrectiveMaintenance.length; i++) {
                if (this.operMaintenanceRepairsService.operMaintenanceRepairLists.OperCorrectiveMaintenance[i].id == this.route.snapshot.params.mttoId) {
                  console.log(this.operMaintenanceRepairsService.operMaintenanceRepairLists.OperCorrectiveMaintenance[i]);
                  this.operMaintenanceRepairsService.operMaintenanceRepair.oper_corrective_maintenance = this.operMaintenanceRepairsService.operMaintenanceRepairLists.OperCorrectiveMaintenance[i];
                  this.operMaintenanceRepairForm.model.oper_corrective_maintenance = this.operMaintenanceRepairsService.operMaintenanceRepairLists.OperCorrectiveMaintenance[i];
                  this.operMaintenanceRepairForm.model.oper_corrective_maintenance_id = this.operMaintenanceRepairsService.operMaintenanceRepair.oper_corrective_maintenance_id;
                }
              }
            }

            console.log(this.operMaintenanceRepairForm.model);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.operMaintenanceRepairForm.operMaintenanceRepairsForm.valueChanges.subscribe(function (data) {
              _this.operMaintenanceRepairsService.operMaintenanceRepairsFormValid.next(_this.operMaintenanceRepairForm.operMaintenanceRepairsForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.operMaintenanceRepairsService.createOperMaintenanceRepair();
            this.operMaintenanceRepairsService.operMaintenanceRepair = {};
          }
        }]);

        return OperMaintenanceRepairsCreateComponent;
      }();

      OperMaintenanceRepairsCreateComponent.ctorParameters = function () {
        return [{
          type: _oper_maintenance_repairs_service__WEBPACK_IMPORTED_MODULE_2__["OperMaintenanceRepairsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      OperMaintenanceRepairsCreateComponent.propDecorators = {
        operMaintenanceRepairForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['operMaintenanceRepairForm']
        }]
      };
      OperMaintenanceRepairsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-maintenance-repairs-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-maintenance-repairs-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-create/oper-maintenance-repairs-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-maintenance-repairs-create.component.scss */
        "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-create/oper-maintenance-repairs-create.component.scss"))["default"]]
      })], OperMaintenanceRepairsCreateComponent);
      /***/
    },

    /***/
    "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-duplicate/oper-maintenance-repairs-duplicate.component.scss":
    /*!*******************************************************************************************************************************!*\
      !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs-duplicate/oper-maintenance-repairs-duplicate.component.scss ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperMaintenanceRepairsOperMaintenanceRepairsDuplicateOperMaintenanceRepairsDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbWFpbnRlbmFuY2UtcmVwYWlycy9vcGVyLW1haW50ZW5hbmNlLXJlcGFpcnMtZHVwbGljYXRlL29wZXItbWFpbnRlbmFuY2UtcmVwYWlycy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-duplicate/oper-maintenance-repairs-duplicate.component.ts":
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs-duplicate/oper-maintenance-repairs-duplicate.component.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: OperMaintenanceRepairsDuplicateComponent */

    /***/
    function srcAppOperMaintenanceRepairsOperMaintenanceRepairsDuplicateOperMaintenanceRepairsDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMaintenanceRepairsDuplicateComponent", function () {
        return OperMaintenanceRepairsDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var OperMaintenanceRepairsDuplicateComponent = /*#__PURE__*/function () {
        function OperMaintenanceRepairsDuplicateComponent() {
          _classCallCheck(this, OperMaintenanceRepairsDuplicateComponent);
        }

        _createClass(OperMaintenanceRepairsDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OperMaintenanceRepairsDuplicateComponent;
      }();

      OperMaintenanceRepairsDuplicateComponent.ctorParameters = function () {
        return [];
      };

      OperMaintenanceRepairsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-maintenance-repairs-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-maintenance-repairs-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-duplicate/oper-maintenance-repairs-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-maintenance-repairs-duplicate.component.scss */
        "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-duplicate/oper-maintenance-repairs-duplicate.component.scss"))["default"]]
      })], OperMaintenanceRepairsDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component.scss":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component.scss ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperMaintenanceRepairsOperMaintenanceRepairsEditOperMaintenanceRepairsEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbWFpbnRlbmFuY2UtcmVwYWlycy9vcGVyLW1haW50ZW5hbmNlLXJlcGFpcnMtZWRpdC9vcGVyLW1haW50ZW5hbmNlLXJlcGFpcnMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component.ts":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: OperMaintenanceRepairsEditComponent */

    /***/
    function srcAppOperMaintenanceRepairsOperMaintenanceRepairsEditOperMaintenanceRepairsEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMaintenanceRepairsEditComponent", function () {
        return OperMaintenanceRepairsEditComponent;
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


      var _oper_maintenance_repairs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-maintenance-repairs.service */
      "./src/app/oper-maintenance-repairs/oper-maintenance-repairs.service.ts");
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

      var OperMaintenanceRepairsEditComponent = /*#__PURE__*/function () {
        function OperMaintenanceRepairsEditComponent(operMaintenanceRepairsService, route, platform, splitPanel) {
          _classCallCheck(this, OperMaintenanceRepairsEditComponent);

          this.operMaintenanceRepairsService = operMaintenanceRepairsService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.model = null;
        }

        _createClass(OperMaintenanceRepairsEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.operMaintenanceRepairsService.editOperMaintenanceRepair(this.id);
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

            this.operMaintenanceRepairForm.operMaintenanceRepairsForm.valueChanges.subscribe(function (data) {
              _this2.operMaintenanceRepairsService.operMaintenanceRepairsFormValid.next(_this2.operMaintenanceRepairForm.operMaintenanceRepairsForm.valid);
            });
          }
        }]);

        return OperMaintenanceRepairsEditComponent;
      }();

      OperMaintenanceRepairsEditComponent.ctorParameters = function () {
        return [{
          type: _oper_maintenance_repairs_service__WEBPACK_IMPORTED_MODULE_2__["OperMaintenanceRepairsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      OperMaintenanceRepairsEditComponent.propDecorators = {
        operMaintenanceRepairForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['operMaintenanceRepairForm']
        }]
      };
      OperMaintenanceRepairsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-maintenance-repairs-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-maintenance-repairs-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-maintenance-repairs-edit.component.scss */
        "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component.scss"))["default"]]
      })], OperMaintenanceRepairsEditComponent);
      /***/
    },

    /***/
    "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-form/oper-maintenance-repairs-form.component.scss":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs-form/oper-maintenance-repairs-form.component.scss ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperMaintenanceRepairsOperMaintenanceRepairsFormOperMaintenanceRepairsFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* generated section */\n/* end generated section */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blci1tYWludGVuYW5jZS1yZXBhaXJzL29wZXItbWFpbnRlbmFuY2UtcmVwYWlycy1mb3JtL29wZXItbWFpbnRlbmFuY2UtcmVwYWlycy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFBO0FBRUEsMEJBQUEiLCJmaWxlIjoic3JjL2FwcC9vcGVyLW1haW50ZW5hbmNlLXJlcGFpcnMvb3Blci1tYWludGVuYW5jZS1yZXBhaXJzLWZvcm0vb3Blci1tYWludGVuYW5jZS1yZXBhaXJzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnZW5lcmF0ZWQgc2VjdGlvbiAqL1xuXG4vKiBlbmQgZ2VuZXJhdGVkIHNlY3Rpb24gKi9cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-form/oper-maintenance-repairs-form.component.ts":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs-form/oper-maintenance-repairs-form.component.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: OperMaintenanceRepairsFormComponent */

    /***/
    function srcAppOperMaintenanceRepairsOperMaintenanceRepairsFormOperMaintenanceRepairsFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMaintenanceRepairsFormComponent", function () {
        return OperMaintenanceRepairsFormComponent;
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


      var _oper_maintenance_repairs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-maintenance-repairs.service */
      "./src/app/oper-maintenance-repairs/oper-maintenance-repairs.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var OperMaintenanceRepairsFormComponent = /*#__PURE__*/function () {
        function OperMaintenanceRepairsFormComponent(operMaintenanceRepairsService, route, toTitlecase) {
          _classCallCheck(this, OperMaintenanceRepairsFormComponent);

          this.operMaintenanceRepairsService = operMaintenanceRepairsService;
          this.route = route;
          this.toTitlecase = toTitlecase;
          this.model = {};
          this.validationMessages = {
            'oper_corrective_maintenance_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('operCorrectiveMaintenance - NAME') + ' es obligatorio.'
            }],
            'name': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'
            }],
            'date': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('FECHA') + ' es obligatorio.'
            }],
            'time': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('HORA') + ' es obligatorio.'
            }],
            'completed_by': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('REPORTADO POR') + ' es obligatorio.'
            }]
          };
        }

        _createClass(OperMaintenanceRepairsFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            console.log(this.route.snapshot.params);

            if (this.route.snapshot.params.mttId) {
              console.log(this.route.snapshot.params.mttId);
              this.operMaintenanceRepairsService.operMaintenanceRepair.oper_corrective_maintenance_id = this.route.snapshot.params.mttId;
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // set setOperCorrectiveMaintenanceId

        }, {
          key: "setOperCorrectiveMaintenanceId",
          value: function setOperCorrectiveMaintenanceId(event) {
            this.operMaintenanceRepairsService.operMaintenanceRepair.oper_corrective_maintenance_id = event.value ? event.value.id : null;
          }
        }]);

        return OperMaintenanceRepairsFormComponent;
      }();

      OperMaintenanceRepairsFormComponent.ctorParameters = function () {
        return [{
          type: _oper_maintenance_repairs_service__WEBPACK_IMPORTED_MODULE_2__["OperMaintenanceRepairsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      OperMaintenanceRepairsFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        operMaintenanceRepairsForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['operMaintenanceRepairsForm']
        }]
      };
      OperMaintenanceRepairsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-maintenance-repairs-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-maintenance-repairs-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-form/oper-maintenance-repairs-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-maintenance-repairs-form.component.scss */
        "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-form/oper-maintenance-repairs-form.component.scss"))["default"]]
      })], OperMaintenanceRepairsFormComponent);
      /***/
    },

    /***/
    "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-list/oper-maintenance-repairs-list.component.scss":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs-list/oper-maintenance-repairs-list.component.scss ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperMaintenanceRepairsOperMaintenanceRepairsListOperMaintenanceRepairsListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbWFpbnRlbmFuY2UtcmVwYWlycy9vcGVyLW1haW50ZW5hbmNlLXJlcGFpcnMtbGlzdC9vcGVyLW1haW50ZW5hbmNlLXJlcGFpcnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-list/oper-maintenance-repairs-list.component.ts":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs-list/oper-maintenance-repairs-list.component.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: OperMaintenanceRepairsListComponent */

    /***/
    function srcAppOperMaintenanceRepairsOperMaintenanceRepairsListOperMaintenanceRepairsListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMaintenanceRepairsListComponent", function () {
        return OperMaintenanceRepairsListComponent;
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


      var _oper_maintenance_repairs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../oper-maintenance-repairs.service */
      "./src/app/oper-maintenance-repairs/oper-maintenance-repairs.service.ts");
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

      var OperMaintenanceRepairsListComponent = /*#__PURE__*/function () {
        function OperMaintenanceRepairsListComponent(operMaintenanceRepairsService, api, loading, splitPanel) {
          _classCallCheck(this, OperMaintenanceRepairsListComponent);

          this.operMaintenanceRepairsService = operMaintenanceRepairsService;
          this.api = api;
          this.loading = loading;
          this.splitPanel = splitPanel;
        }

        _createClass(OperMaintenanceRepairsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.operMaintenanceRepairsService.getOperMaintenanceRepairs();
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

        return OperMaintenanceRepairsListComponent;
      }();

      OperMaintenanceRepairsListComponent.ctorParameters = function () {
        return [{
          type: _oper_maintenance_repairs_service__WEBPACK_IMPORTED_MODULE_2__["OperMaintenanceRepairsService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"]
        }];
      };

      OperMaintenanceRepairsListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      OperMaintenanceRepairsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-maintenance-repairs-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-maintenance-repairs-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs-list/oper-maintenance-repairs-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-maintenance-repairs-list.component.scss */
        "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-list/oper-maintenance-repairs-list.component.scss"))["default"]]
      })], OperMaintenanceRepairsListComponent);
      /***/
    },

    /***/
    "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-routing.module.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: OperMaintenanceRepairsPageRoutingModule */

    /***/
    function srcAppOperMaintenanceRepairsOperMaintenanceRepairsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMaintenanceRepairsPageRoutingModule", function () {
        return OperMaintenanceRepairsPageRoutingModule;
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


      var _oper_maintenance_repairs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./oper-maintenance-repairs.page */
      "./src/app/oper-maintenance-repairs/oper-maintenance-repairs.page.ts");
      /* harmony import */


      var _oper_maintenance_repairs_edit_oper_maintenance_repairs_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component */
      "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component.ts");
      /* harmony import */


      var _oper_maintenance_repairs_create_oper_maintenance_repairs_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./oper-maintenance-repairs-create/oper-maintenance-repairs-create.component */
      "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-create/oper-maintenance-repairs-create.component.ts");
      /* harmony import */


      var _oper_maintenance_repairs_list_oper_maintenance_repairs_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./oper-maintenance-repairs-list/oper-maintenance-repairs-list.component */
      "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-list/oper-maintenance-repairs-list.component.ts");

      var routes = [// generated section
      {
        path: '',
        data: {
          title: 'OPERATIVIDAD REPARACIONES',
          roles: ['admin']
        },
        component: _oper_maintenance_repairs_page__WEBPACK_IMPORTED_MODULE_3__["OperMaintenanceRepairsPage"]
      }, {
        path: 'list',
        data: {
          title: 'OPERATIVIDAD REPARACIONES',
          roles: ['admin']
        },
        component: _oper_maintenance_repairs_list_oper_maintenance_repairs_list_component__WEBPACK_IMPORTED_MODULE_6__["OperMaintenanceRepairsListComponent"]
      }, {
        path: 'create',
        data: {
          title: 'OPERATIVIDAD REPARACIONES',
          roles: ['admin']
        },
        component: _oper_maintenance_repairs_create_oper_maintenance_repairs_create_component__WEBPACK_IMPORTED_MODULE_5__["OperMaintenanceRepairsCreateComponent"]
      }, {
        path: 'create/:mttoId',
        data: {
          title: 'OPERATIVIDAD REPARACIONES',
          roles: ['admin']
        },
        component: _oper_maintenance_repairs_create_oper_maintenance_repairs_create_component__WEBPACK_IMPORTED_MODULE_5__["OperMaintenanceRepairsCreateComponent"]
      }, {
        path: ':id/edit',
        data: {
          title: 'OPERATIVIDAD REPARACIONES',
          roles: ['admin']
        },
        component: _oper_maintenance_repairs_edit_oper_maintenance_repairs_edit_component__WEBPACK_IMPORTED_MODULE_4__["OperMaintenanceRepairsEditComponent"]
      }]; // end generated section

      var OperMaintenanceRepairsPageRoutingModule = function OperMaintenanceRepairsPageRoutingModule() {
        _classCallCheck(this, OperMaintenanceRepairsPageRoutingModule);
      };

      OperMaintenanceRepairsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OperMaintenanceRepairsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/oper-maintenance-repairs/oper-maintenance-repairs.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: OperMaintenanceRepairsPageModule */

    /***/
    function srcAppOperMaintenanceRepairsOperMaintenanceRepairsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMaintenanceRepairsPageModule", function () {
        return OperMaintenanceRepairsPageModule;
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


      var _oper_maintenance_repairs_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./oper-maintenance-repairs-routing.module */
      "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-routing.module.ts");
      /* harmony import */


      var _oper_maintenance_repairs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./oper-maintenance-repairs.page */
      "./src/app/oper-maintenance-repairs/oper-maintenance-repairs.page.ts");
      /* harmony import */


      var _oper_maintenance_repairs_list_oper_maintenance_repairs_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./oper-maintenance-repairs-list/oper-maintenance-repairs-list.component */
      "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-list/oper-maintenance-repairs-list.component.ts");
      /* harmony import */


      var _oper_maintenance_repairs_create_oper_maintenance_repairs_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./oper-maintenance-repairs-create/oper-maintenance-repairs-create.component */
      "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-create/oper-maintenance-repairs-create.component.ts");
      /* harmony import */


      var _oper_maintenance_repairs_duplicate_oper_maintenance_repairs_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./oper-maintenance-repairs-duplicate/oper-maintenance-repairs-duplicate.component */
      "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-duplicate/oper-maintenance-repairs-duplicate.component.ts");
      /* harmony import */


      var _oper_maintenance_repairs_edit_oper_maintenance_repairs_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component */
      "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-edit/oper-maintenance-repairs-edit.component.ts");
      /* harmony import */


      var _oper_maintenance_repairs_form_oper_maintenance_repairs_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./oper-maintenance-repairs-form/oper-maintenance-repairs-form.component */
      "./src/app/oper-maintenance-repairs/oper-maintenance-repairs-form/oper-maintenance-repairs-form.component.ts");

      var OperMaintenanceRepairsPageModule = function OperMaintenanceRepairsPageModule() {
        _classCallCheck(this, OperMaintenanceRepairsPageModule);
      };

      OperMaintenanceRepairsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [// imports generated section
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _oper_maintenance_repairs_routing_module__WEBPACK_IMPORTED_MODULE_6__["OperMaintenanceRepairsPageRoutingModule"] // end imports generated section
        ],
        declarations: [// declarations generated section
        _oper_maintenance_repairs_page__WEBPACK_IMPORTED_MODULE_7__["OperMaintenanceRepairsPage"], _oper_maintenance_repairs_list_oper_maintenance_repairs_list_component__WEBPACK_IMPORTED_MODULE_8__["OperMaintenanceRepairsListComponent"], _oper_maintenance_repairs_create_oper_maintenance_repairs_create_component__WEBPACK_IMPORTED_MODULE_9__["OperMaintenanceRepairsCreateComponent"], _oper_maintenance_repairs_duplicate_oper_maintenance_repairs_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["OperMaintenanceRepairsDuplicateComponent"], _oper_maintenance_repairs_edit_oper_maintenance_repairs_edit_component__WEBPACK_IMPORTED_MODULE_11__["OperMaintenanceRepairsEditComponent"], _oper_maintenance_repairs_form_oper_maintenance_repairs_form_component__WEBPACK_IMPORTED_MODULE_12__["OperMaintenanceRepairsFormComponent"]]
      })], OperMaintenanceRepairsPageModule);
      /***/
    },

    /***/
    "./src/app/oper-maintenance-repairs/oper-maintenance-repairs.page.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs.page.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOperMaintenanceRepairsOperMaintenanceRepairsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbWFpbnRlbmFuY2UtcmVwYWlycy9vcGVyLW1haW50ZW5hbmNlLXJlcGFpcnMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/oper-maintenance-repairs/oper-maintenance-repairs.page.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs.page.ts ***!
      \***************************************************************************/

    /*! exports provided: OperMaintenanceRepairsPage */

    /***/
    function srcAppOperMaintenanceRepairsOperMaintenanceRepairsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMaintenanceRepairsPage", function () {
        return OperMaintenanceRepairsPage;
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

      var OperMaintenanceRepairsPage = /*#__PURE__*/function () {
        function OperMaintenanceRepairsPage(splitPanel) {
          _classCallCheck(this, OperMaintenanceRepairsPage);

          this.splitPanel = splitPanel;
        }

        _createClass(OperMaintenanceRepairsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }]);

        return OperMaintenanceRepairsPage;
      }();

      OperMaintenanceRepairsPage.ctorParameters = function () {
        return [{
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"]
        }];
      };

      OperMaintenanceRepairsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-maintenance-repairs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./oper-maintenance-repairs.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-maintenance-repairs/oper-maintenance-repairs.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./oper-maintenance-repairs.page.scss */
        "./src/app/oper-maintenance-repairs/oper-maintenance-repairs.page.scss"))["default"]]
      })], OperMaintenanceRepairsPage);
      /***/
    },

    /***/
    "./src/app/oper-maintenance-repairs/oper-maintenance-repairs.service.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/oper-maintenance-repairs/oper-maintenance-repairs.service.ts ***!
      \******************************************************************************/

    /*! exports provided: OperMaintenanceRepairsService */

    /***/
    function srcAppOperMaintenanceRepairsOperMaintenanceRepairsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperMaintenanceRepairsService", function () {
        return OperMaintenanceRepairsService;
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
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

      var OperMaintenanceRepairsService = /*#__PURE__*/function () {
        function OperMaintenanceRepairsService(api, alert, toast, router, navigation) {
          _classCallCheck(this, OperMaintenanceRepairsService);

          this.api = api;
          this.alert = alert;
          this.toast = toast;
          this.router = router;
          this.navigation = navigation;
          this.operMaintenanceRepairsUrl = 'oper-maintenance-repairs';
          this.operMaintenanceRepairsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
          this.operMaintenanceRepairs = [];
          this.operMaintenanceRepair = {};
          this.operMaintenanceRepairLists = {};
          this.searchValue = '';
          this.perPage = 10;
          this.meta = null;
          this.page = 1;
          this.pagesContent = document.getElementById('pages-content');
        } // generated section


        _createClass(OperMaintenanceRepairsService, [{
          key: "getOperMaintenanceRepairs",
          value: function getOperMaintenanceRepairs() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.operMaintenanceRepairsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.operMaintenanceRepairs = res.data;
              _this3.operMaintenanceRepairLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editOperMaintenanceRepair",
          value: function editOperMaintenanceRepair(id) {
            var _this4 = this;

            this.api.get(this.operMaintenanceRepairsUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.operMaintenanceRepair = res.data.model;
              _this4.operMaintenanceRepairLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateOperMaintenanceRepair",
          value: function updateOperMaintenanceRepair() {
            var _this5 = this;

            this.api.put(this.operMaintenanceRepairsUrl + '/' + this.operMaintenanceRepair.id, {
              model: this.operMaintenanceRepair,
              pivots: {}
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getOperMaintenanceRepairs(1);
            });
          }
        }, {
          key: "createOperMaintenanceRepair",
          value: function createOperMaintenanceRepair() {
            var _this6 = this;

            this.api.get(this.operMaintenanceRepairsUrl + '/create').subscribe(function (res) {
              _this6.operMaintenanceRepair = {};
              _this6.operMaintenanceRepair.time = moment__WEBPACK_IMPORTED_MODULE_8__().format('YYYY-MM-DD HH:mm');
              _this6.operMaintenanceRepair.date = moment__WEBPACK_IMPORTED_MODULE_8__().format('YYYY-MM-DD HH:mm');
              _this6.operMaintenanceRepairLists = res.lists;
            });
          }
        }, {
          key: "storeOperMaintenanceRepair",
          value: function storeOperMaintenanceRepair() {
            var _this7 = this;

            this.api.post(this.operMaintenanceRepairsUrl, {
              model: this.operMaintenanceRepair,
              pivots: {}
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getOperMaintenanceRepairs(1);
            });
          }
        }, {
          key: "deleteOperMaintenanceRepair",
          value: function deleteOperMaintenanceRepair(id) {
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

                      this.api["delete"](this.operMaintenanceRepairsUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getOperMaintenanceRepairs(1);
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

        return OperMaintenanceRepairsService;
      }();

      OperMaintenanceRepairsService.ctorParameters = function () {
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

      OperMaintenanceRepairsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], OperMaintenanceRepairsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=oper-maintenance-repairs-oper-maintenance-repairs-module-es5.js.map