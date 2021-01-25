(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["files-files-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-create/files-create.component.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-create/files-create.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFilesFilesCreateFilesCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/files'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"filesService.storeFile()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!filesService.filesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'JUNTAS ARCHIVOS DE AGENDAS' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-files-form #fileForm [model]=\"filesService.file\"></app-files-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-duplicate/files-duplicate.component.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-duplicate/files-duplicate.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFilesFilesDuplicateFilesDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\r\n  Files duplicate works!\r\n</p>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-edit/files-edit.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-edit/files-edit.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFilesFilesEditFilesEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/files'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"filesService.updateFile()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!filesService.filesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'JUNTAS ARCHIVOS DE AGENDAS' | titlecase}}: {{ filesService.file?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-files-form #fileForm [model]=\"filesService.file\"></app-files-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-form/files-form.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-form/files-form.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFilesFilesFormFilesFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #filesForm=\"ngForm\" novalidate autocomplete=\"off\">\r\n\r\n\r\n            <!-- name -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.name\"\r\n                            type=\"text\"\r\n                            name=\"name\"\r\n                            id=\"name-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n                    <div class=\"error-message\" *ngIf=\"filesForm.form.controls['name']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end name -->\r\n\r\n\r\n            <!-- file -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'ARCHIVO' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.file\"\r\n                            type=\"text\"\r\n                            name=\"file\"\r\n                            id=\"file-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.file\">\r\n                    <div class=\"error-message\" *ngIf=\"filesForm.form.controls['file']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end file -->\r\n\r\n\r\n            <!-- extension -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'EXTENSION' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.extension\"\r\n                            type=\"text\"\r\n                            name=\"extension\"\r\n                            id=\"extension-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.extension\">\r\n                    <div class=\"error-message\" *ngIf=\"filesForm.form.controls['extension']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end extension -->\r\n\r\n\r\n            <!-- mime -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'MIME' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.mime\"\r\n                            type=\"text\"\r\n                            name=\"mime\"\r\n                            id=\"mime-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.mime\">\r\n                    <div class=\"error-message\" *ngIf=\"filesForm.form.controls['mime']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end mime -->\r\n\r\n\r\n            <!-- url -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'URL' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.url\"\r\n                            type=\"text\"\r\n                            name=\"url\"\r\n                            id=\"url-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.url\">\r\n                    <div class=\"error-message\" *ngIf=\"filesForm.form.controls['url']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end url -->\r\n\r\n\r\n            <!-- fileable_id -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'ARCHIVABLE ID' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.fileable_id\"\r\n                            type=\"number\"\r\n                            name=\"fileable_id\"\r\n                            id=\"fileable_id-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.fileable_id\">\r\n                    <div class=\"error-message\" *ngIf=\"filesForm.form.controls['fileable_id']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end fileable_id -->\r\n\r\n\r\n            <!-- fileable_type -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'ARCHIVABLE TIPO' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.fileable_type\"\r\n                            type=\"text\"\r\n                            name=\"fileable_type\"\r\n                            id=\"fileable_type-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.fileable_type\">\r\n                    <div class=\"error-message\" *ngIf=\"filesForm.form.controls['fileable_type']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end fileable_type -->\r\n\r\n\r\n</form>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-list/files-list.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-list/files-list.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFilesFilesListFilesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'JUNTAS ARCHIVOS DE AGENDAS' | titlecase}}\"\r\n                 primaryLink=\"files/create\"\r\n                 primaryText=\"Crear {{'JUNTAS ARCHIVOS DE AGENDAS' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-searchbar showCancelButton=\"focus\"\r\n                       [cancelButtonText]=\"'Cancelar'\"\r\n                       [placeholder]=\"'Buscar ' + ('JUNTAS ARCHIVOS DE AGENDAS' | lowercase )\"\r\n                       (ionCancel)=\"this.filesService.searchValue = ''; filesService.getFiles()\"\r\n                       (keyup.enter)=\"filesService.getFiles()\"\r\n                       [(ngModel)]=\"filesService.searchValue\"></ion-searchbar>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && filesService.files?.length\">\r\n        <ion-card *ngFor=\"let file of filesService.files; let index = index\">\r\n            <ion-list>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ file?.name }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'ARCHIVO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ file?.file }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'EXTENSION' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ file?.extension }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'MIME' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ file?.mime }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'URL' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ file?.url }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'ARCHIVABLE ID' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ file?.fileable_id }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'ARCHIVABLE TIPO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ file?.fileable_type }}</div>\r\n                    </ion-item>\r\n            </ion-list>\r\n            <ion-footer>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/files/' + file?.id + '/edit'\">\r\n                            <ion-icon name=\"create-outline\"></ion-icon>\r\n                            <div>Editar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"filesService.deleteFile(file?.id)\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            <div>Eliminar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-footer>\r\n        </ion-card>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && !filesService.files?.length\">\r\n        <ion-item>\r\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label><h2>No se encontraron {{'JUNTAS ARCHIVOS DE AGENDAS' | titlecase}}</h2></ion-label>\r\n            <ion-button [routerLink]=\"'/files/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\r\n                Crear {{'JUNTAS ARCHIVOS DE AGENDAS' | titlecase}}\r\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"filesService.meta\">\r\n        <ion-col class=\"ion-text-center\" size=\"12\">\r\n            <ion-button (click)=\"filesService.getFiles(filesService.meta.current_page - 1)\"\r\n                        [disabled]=\"filesService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{filesService.meta.current_page}}\r\n                /{{filesService.meta.last_page}} {{filesService.meta.from}}-{{filesService.meta.to}}\r\n                /{{filesService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"filesService.getFiles(filesService.meta.current_page + 1)\"\r\n                        [disabled]=\"filesService.meta.current_page == filesService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/files/files.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFilesFilesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"JUNTAS ARCHIVOS DE AGENDAS\"></app-main-header>\r\n\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/files/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'JUNTAS ARCHIVOS DE AGENDAS'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/files/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'JUNTAS ARCHIVOS DE AGENDAS' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/files/files-create/files-create.component.scss":
    /*!****************************************************************!*\
      !*** ./src/app/files/files-create/files-create.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFilesFilesCreateFilesCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzL2ZpbGVzLWNyZWF0ZS9maWxlcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/files/files-create/files-create.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/files/files-create/files-create.component.ts ***!
      \**************************************************************/

    /*! exports provided: FilesCreateComponent */

    /***/
    function srcAppFilesFilesCreateFilesCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilesCreateComponent", function () {
        return FilesCreateComponent;
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


      var _files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../files.service */
      "./src/app/files/files.service.ts");
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

      var FilesCreateComponent = /*#__PURE__*/function () {
        function FilesCreateComponent(filesService, route, platform, splitPanel) {
          _classCallCheck(this, FilesCreateComponent);

          this.filesService = filesService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.formValid = false;
        }

        _createClass(FilesCreateComponent, [{
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

            this.fileForm.filesForm.valueChanges.subscribe(function (data) {
              _this.filesService.filesFormValid.next(_this.fileForm.filesForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.filesService.createFile();
            this.filesService.file = {};
          }
        }]);

        return FilesCreateComponent;
      }();

      FilesCreateComponent.ctorParameters = function () {
        return [{
          type: _files_service__WEBPACK_IMPORTED_MODULE_2__["FilesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      FilesCreateComponent.propDecorators = {
        fileForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['fileForm']
        }]
      };
      FilesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-files-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./files-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-create/files-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./files-create.component.scss */
        "./src/app/files/files-create/files-create.component.scss"))["default"]]
      })], FilesCreateComponent);
      /***/
    },

    /***/
    "./src/app/files/files-duplicate/files-duplicate.component.scss":
    /*!**********************************************************************!*\
      !*** ./src/app/files/files-duplicate/files-duplicate.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFilesFilesDuplicateFilesDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzL2ZpbGVzLWR1cGxpY2F0ZS9maWxlcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/files/files-duplicate/files-duplicate.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/files/files-duplicate/files-duplicate.component.ts ***!
      \********************************************************************/

    /*! exports provided: FilesDuplicateComponent */

    /***/
    function srcAppFilesFilesDuplicateFilesDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilesDuplicateComponent", function () {
        return FilesDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FilesDuplicateComponent = /*#__PURE__*/function () {
        function FilesDuplicateComponent() {
          _classCallCheck(this, FilesDuplicateComponent);
        }

        _createClass(FilesDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FilesDuplicateComponent;
      }();

      FilesDuplicateComponent.ctorParameters = function () {
        return [];
      };

      FilesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-files-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./files-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-duplicate/files-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./files-duplicate.component.scss */
        "./src/app/files/files-duplicate/files-duplicate.component.scss"))["default"]]
      })], FilesDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/files/files-edit/files-edit.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/files/files-edit/files-edit.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFilesFilesEditFilesEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzL2ZpbGVzLWVkaXQvZmlsZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/files/files-edit/files-edit.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/files/files-edit/files-edit.component.ts ***!
      \**********************************************************/

    /*! exports provided: FilesEditComponent */

    /***/
    function srcAppFilesFilesEditFilesEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilesEditComponent", function () {
        return FilesEditComponent;
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


      var _files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../files.service */
      "./src/app/files/files.service.ts");
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

      var FilesEditComponent = /*#__PURE__*/function () {
        function FilesEditComponent(filesService, route, platform, splitPanel) {
          _classCallCheck(this, FilesEditComponent);

          this.filesService = filesService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.model = null;
        }

        _createClass(FilesEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.filesService.editFile(this.id);
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

            this.fileForm.filesForm.valueChanges.subscribe(function (data) {
              _this2.filesService.filesFormValid.next(_this2.fileForm.filesForm.valid);
            });
          }
        }]);

        return FilesEditComponent;
      }();

      FilesEditComponent.ctorParameters = function () {
        return [{
          type: _files_service__WEBPACK_IMPORTED_MODULE_2__["FilesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      FilesEditComponent.propDecorators = {
        fileForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['fileForm']
        }]
      };
      FilesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-files-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./files-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-edit/files-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./files-edit.component.scss */
        "./src/app/files/files-edit/files-edit.component.scss"))["default"]]
      })], FilesEditComponent);
      /***/
    },

    /***/
    "./src/app/files/files-form/files-form.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/files/files-form/files-form.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFilesFilesFormFilesFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzL2ZpbGVzLWZvcm0vZmlsZXMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/files/files-form/files-form.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/files/files-form/files-form.component.ts ***!
      \**********************************************************/

    /*! exports provided: FilesFormComponent */

    /***/
    function srcAppFilesFilesFormFilesFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilesFormComponent", function () {
        return FilesFormComponent;
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


      var _files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../files.service */
      "./src/app/files/files.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var FilesFormComponent = /*#__PURE__*/function () {
        function FilesFormComponent(filesService, toTitlecase) {
          _classCallCheck(this, FilesFormComponent);

          this.filesService = filesService;
          this.toTitlecase = toTitlecase;
          this.model = {};
          this.validationMessages = {
            'name': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'
            }],
            'file': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('ARCHIVO') + ' es obligatorio.'
            }],
            'extension': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('EXTENSION') + ' es obligatorio.'
            }],
            'mime': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('MIME') + ' es obligatorio.'
            }],
            'url': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('URL') + ' es obligatorio.'
            }],
            'fileable_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('ARCHIVABLE ID') + ' es obligatorio.'
            }],
            'fileable_type': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('ARCHIVABLE TIPO') + ' es obligatorio.'
            }]
          };
        }

        _createClass(FilesFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }]);

        return FilesFormComponent;
      }();

      FilesFormComponent.ctorParameters = function () {
        return [{
          type: _files_service__WEBPACK_IMPORTED_MODULE_2__["FilesService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      FilesFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        filesForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['filesForm']
        }]
      };
      FilesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-files-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./files-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-form/files-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./files-form.component.scss */
        "./src/app/files/files-form/files-form.component.scss"))["default"]]
      })], FilesFormComponent);
      /***/
    },

    /***/
    "./src/app/files/files-list/files-list.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/files/files-list/files-list.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFilesFilesListFilesListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzL2ZpbGVzLWxpc3QvZmlsZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/files/files-list/files-list.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/files/files-list/files-list.component.ts ***!
      \**********************************************************/

    /*! exports provided: FilesListComponent */

    /***/
    function srcAppFilesFilesListFilesListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilesListComponent", function () {
        return FilesListComponent;
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


      var _files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../files.service */
      "./src/app/files/files.service.ts");
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

      var FilesListComponent = /*#__PURE__*/function () {
        function FilesListComponent(filesService, api, loading, splitPanel) {
          _classCallCheck(this, FilesListComponent);

          this.filesService = filesService;
          this.api = api;
          this.loading = loading;
          this.splitPanel = splitPanel;
        }

        _createClass(FilesListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.filesService.getFiles();
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

        return FilesListComponent;
      }();

      FilesListComponent.ctorParameters = function () {
        return [{
          type: _files_service__WEBPACK_IMPORTED_MODULE_2__["FilesService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"]
        }];
      };

      FilesListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      FilesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-files-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./files-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-list/files-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./files-list.component.scss */
        "./src/app/files/files-list/files-list.component.scss"))["default"]]
      })], FilesListComponent);
      /***/
    },

    /***/
    "./src/app/files/files-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/files/files-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: FilesPageRoutingModule */

    /***/
    function srcAppFilesFilesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilesPageRoutingModule", function () {
        return FilesPageRoutingModule;
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


      var _files_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./files.page */
      "./src/app/files/files.page.ts");
      /* harmony import */


      var _files_edit_files_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./files-edit/files-edit.component */
      "./src/app/files/files-edit/files-edit.component.ts");
      /* harmony import */


      var _files_create_files_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./files-create/files-create.component */
      "./src/app/files/files-create/files-create.component.ts");
      /* harmony import */


      var _files_list_files_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./files-list/files-list.component */
      "./src/app/files/files-list/files-list.component.ts");

      var routes = [{
        path: '',
        component: _files_page__WEBPACK_IMPORTED_MODULE_3__["FilesPage"]
      }, {
        path: 'list',
        component: _files_list_files_list_component__WEBPACK_IMPORTED_MODULE_6__["FilesListComponent"]
      }, {
        path: 'create',
        component: _files_create_files_create_component__WEBPACK_IMPORTED_MODULE_5__["FilesCreateComponent"]
      }, {
        path: ':id/edit',
        component: _files_edit_files_edit_component__WEBPACK_IMPORTED_MODULE_4__["FilesEditComponent"]
      }];

      var FilesPageRoutingModule = function FilesPageRoutingModule() {
        _classCallCheck(this, FilesPageRoutingModule);
      };

      FilesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FilesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/files/files.module.ts":
    /*!***************************************!*\
      !*** ./src/app/files/files.module.ts ***!
      \***************************************/

    /*! exports provided: FilesPageModule */

    /***/
    function srcAppFilesFilesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilesPageModule", function () {
        return FilesPageModule;
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


      var _files_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./files-routing.module */
      "./src/app/files/files-routing.module.ts");
      /* harmony import */


      var _files_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./files.page */
      "./src/app/files/files.page.ts");
      /* harmony import */


      var _files_list_files_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./files-list/files-list.component */
      "./src/app/files/files-list/files-list.component.ts");
      /* harmony import */


      var _files_create_files_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./files-create/files-create.component */
      "./src/app/files/files-create/files-create.component.ts");
      /* harmony import */


      var _files_duplicate_files_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./files-duplicate/files-duplicate.component */
      "./src/app/files/files-duplicate/files-duplicate.component.ts");
      /* harmony import */


      var _files_edit_files_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./files-edit/files-edit.component */
      "./src/app/files/files-edit/files-edit.component.ts");
      /* harmony import */


      var _files_form_files_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./files-form/files-form.component */
      "./src/app/files/files-form/files-form.component.ts");

      var FilesPageModule = function FilesPageModule() {
        _classCallCheck(this, FilesPageModule);
      };

      FilesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _files_routing_module__WEBPACK_IMPORTED_MODULE_6__["FilesPageRoutingModule"]],
        declarations: [_files_page__WEBPACK_IMPORTED_MODULE_7__["FilesPage"], _files_list_files_list_component__WEBPACK_IMPORTED_MODULE_8__["FilesListComponent"], _files_create_files_create_component__WEBPACK_IMPORTED_MODULE_9__["FilesCreateComponent"], _files_duplicate_files_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["FilesDuplicateComponent"], _files_edit_files_edit_component__WEBPACK_IMPORTED_MODULE_11__["FilesEditComponent"], _files_form_files_form_component__WEBPACK_IMPORTED_MODULE_12__["FilesFormComponent"]]
      })], FilesPageModule);
      /***/
    },

    /***/
    "./src/app/files/files.page.scss":
    /*!***************************************!*\
      !*** ./src/app/files/files.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppFilesFilesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzL2ZpbGVzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/files/files.page.ts":
    /*!*************************************!*\
      !*** ./src/app/files/files.page.ts ***!
      \*************************************/

    /*! exports provided: FilesPage */

    /***/
    function srcAppFilesFilesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilesPage", function () {
        return FilesPage;
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

      var FilesPage = /*#__PURE__*/function () {
        function FilesPage(splitPanel) {
          _classCallCheck(this, FilesPage);

          this.splitPanel = splitPanel;
        }

        _createClass(FilesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }]);

        return FilesPage;
      }();

      FilesPage.ctorParameters = function () {
        return [{
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"]
        }];
      };

      FilesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-files',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./files.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./files.page.scss */
        "./src/app/files/files.page.scss"))["default"]]
      })], FilesPage);
      /***/
    },

    /***/
    "./src/app/files/files.service.ts":
    /*!****************************************!*\
      !*** ./src/app/files/files.service.ts ***!
      \****************************************/

    /*! exports provided: FilesService */

    /***/
    function srcAppFilesFilesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilesService", function () {
        return FilesService;
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

      var FilesService = /*#__PURE__*/function () {
        function FilesService(api, alert, toast, router, navigation) {
          _classCallCheck(this, FilesService);

          this.api = api;
          this.alert = alert;
          this.toast = toast;
          this.router = router;
          this.navigation = navigation;
          this.filesUrl = 'files';
          this.filesFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
          this.files = [];
          this.file = {};
          this.fileLists = {};
          this.searchValue = '';
          this.perPage = 10;
          this.meta = null;
          this.page = 1;
          this.pagesContent = document.getElementById('pages-content');
        }

        _createClass(FilesService, [{
          key: "getFiles",
          value: function getFiles() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.filesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.files = res.data;
              _this3.fileLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editFile",
          value: function editFile(id) {
            var _this4 = this;

            this.api.get(this.filesUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.file = res.data.model;
              _this4.fileLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateFile",
          value: function updateFile() {
            var _this5 = this;

            this.api.put(this.filesUrl + '/' + this.file.id, {
              model: this.file,
              pivots: {}
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getFiles(1);
            });
          }
        }, {
          key: "createFile",
          value: function createFile() {
            var _this6 = this;

            this.api.get(this.filesUrl + '/create').subscribe(function (res) {
              _this6.file = {};
              _this6.fileLists = res.lists;
            });
          }
        }, {
          key: "storeFile",
          value: function storeFile() {
            var _this7 = this;

            this.api.post(this.filesUrl, {
              model: this.file,
              pivots: {}
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getFiles(1);
            });
          }
        }, {
          key: "deleteFile",
          value: function deleteFile(id) {
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

                      this.api["delete"](this.filesUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getFiles(1);
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

        return FilesService;
      }();

      FilesService.ctorParameters = function () {
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

      FilesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FilesService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=files-files-module-es5.js.map