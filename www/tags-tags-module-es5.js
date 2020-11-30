(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tags-tags-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-create/tags-create.component.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-create/tags-create.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTagsTagsCreateTagsCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/tags'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"tagsService.storeTag()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!tagsService.tagsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'ETIQUETAS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-tags-form #tagForm [model]=\"tagsService.tag\"></app-tags-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-duplicate/tags-duplicate.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-duplicate/tags-duplicate.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTagsTagsDuplicateTagsDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  Tags duplicate works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-edit/tags-edit.component.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-edit/tags-edit.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTagsTagsEditTagsEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/tags'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"tagsService.updateTag()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!tagsService.tagsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'ETIQUETAS' | titlecase}}: {{ tagsService.tag?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-tags-form #tagForm [model]=\"tagsService.tag\"></app-tags-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-form/tags-form.component.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-form/tags-form.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTagsTagsFormTagsFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #tagsForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- post_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'ENTRADAS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"post_ids\"\n                          id=\"post_ids-field\"\n                          [(ngModel)]=\"model.posts\"\n                          [items]=\"tagsService.tagLists.Post\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('ENTRADAS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('ENTRADAS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setPostIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.post_ids\">\n            <div class=\"error-message\" *ngIf=\"tagsForm.form.controls['post_ids']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end post_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"tagsForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n</form>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-list/tags-list.component.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-list/tags-list.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTagsTagsListTagsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'ETIQUETAS' | titlecase}}\"\n                 primaryLink=\"tags/create\"\n                 primaryText=\"Crear {{'ETIQUETAS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('ETIQUETAS' | lowercase )\"\n                       (ionCancel)=\"this.tagsService.searchValue = ''; tagsService.getTags()\"\n                       (keyup.enter)=\"tagsService.getTags()\"\n                       [(ngModel)]=\"tagsService.searchValue\"></ion-searchbar>\n\n    <ion-card>\n\n        <ng-container *ngIf=\"!(loading.loading | async) && tagsService.tags.length\">\n            <ion-item *ngFor=\"let tag of tagsService.tags; let index = index\">\n                <ion-label>\n                    <h3>{{ 'NOMBRE' | titlecase }}: {{ tag.name }}</h3>\n                    <h3>{{ 'ENTRADAS' | titlecase }}:\n                    <ng-container *ngIf=\"tag.posts.length\">\n                        <ng-container *ngFor=\"let post of tag.posts; let last = last\">\n                        <a routerLink=\"/posts/{{ post.id }}/edit\">{{ post.name }}</a><span *ngIf=\"!last\">, </span>\n                        </ng-container>\n                    </ng-container>\n                    </h3>\n                </ion-label>\n\n\n                <ion-button item-right fill=\"clear\" color=\"success\" [routerLink]=\"'/tags/' + tag.id + '/edit'\">\n                    <ion-icon name=\"create-outline\"></ion-icon>\n                </ion-button>\n                <!--<ion-button item-right fill=\"clear\" color=\"success\" (click)=\"null\">\n                    <ion-icon name=\"eye-outline\"></ion-icon>\n                </ion-button>-->\n                <ion-button item-right fill=\"clear\" color=\"danger\" (click)=\"tagsService.deleteTag(tag.id)\">\n                    <ion-icon name=\"trash-outline\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </ng-container>\n\n        <ng-container *ngIf=\"!(loading.loading | async) && !tagsService.tags.length\">\n            <ion-item>\n                <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n                <ion-label><h2>No se encontraron {{'ETIQUETAS' | titlecase}}</h2></ion-label>\n                <ion-button [routerLink]=\"'/tags/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                    Crear {{'ETIQUETAS' | titlecase}}\n                    <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </ng-container>\n\n    </ion-card>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"tagsService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"tagsService.getTags(tagsService.meta.current_page - 1)\"\n                        [disabled]=\"tagsService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{tagsService.meta.current_page}}\n                /{{tagsService.meta.last_page}} {{tagsService.meta.from}}-{{tagsService.meta.to}}\n                /{{tagsService.meta.total}} </ion-button>\n            <ion-button (click)=\"tagsService.getTags(tagsService.meta.current_page + 1)\"\n                        [disabled]=\"tagsService.meta.current_page == tagsService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTagsTagsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"ETIQUETAS\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/tags/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'ETIQUETAS'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/tags/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'ETIQUETAS' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/tags/tags-create/tags-create.component.scss":
    /*!*************************************************************!*\
      !*** ./src/app/tags/tags-create/tags-create.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTagsTagsCreateTagsCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhZ3MvdGFncy1jcmVhdGUvdGFncy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/tags/tags-create/tags-create.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/tags/tags-create/tags-create.component.ts ***!
      \***********************************************************/

    /*! exports provided: TagsCreateComponent */

    /***/
    function srcAppTagsTagsCreateTagsCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsCreateComponent", function () {
        return TagsCreateComponent;
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


      var _tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../tags.service */
      "./src/app/tags/tags.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var TagsCreateComponent = /*#__PURE__*/function () {
        function TagsCreateComponent(tagsService, route, platform) {
          _classCallCheck(this, TagsCreateComponent);

          this.tagsService = tagsService;
          this.route = route;
          this.platform = platform;
          this.id = null;
          this.formValid = false;
        }

        _createClass(TagsCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.clearPosts();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.tagForm.tagsForm.valueChanges.subscribe(function (data) {
              _this.tagsService.tagsFormValid.next(_this.tagForm.tagsForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.tagsService.createTag();
            this.tagsService.tag = {};
          }
        }]);

        return TagsCreateComponent;
      }();

      TagsCreateComponent.ctorParameters = function () {
        return [{
          type: _tags_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      TagsCreateComponent.propDecorators = {
        tagForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['tagForm']
        }]
      };
      TagsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tags-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tags-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-create/tags-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tags-create.component.scss */
        "./src/app/tags/tags-create/tags-create.component.scss"))["default"]]
      })], TagsCreateComponent);
      /***/
    },

    /***/
    "./src/app/tags/tags-duplicate/tags-duplicate.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/tags/tags-duplicate/tags-duplicate.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTagsTagsDuplicateTagsDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhZ3MvdGFncy1kdXBsaWNhdGUvdGFncy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/tags/tags-duplicate/tags-duplicate.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/tags/tags-duplicate/tags-duplicate.component.ts ***!
      \*****************************************************************/

    /*! exports provided: TagsDuplicateComponent */

    /***/
    function srcAppTagsTagsDuplicateTagsDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsDuplicateComponent", function () {
        return TagsDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TagsDuplicateComponent = /*#__PURE__*/function () {
        function TagsDuplicateComponent() {
          _classCallCheck(this, TagsDuplicateComponent);
        }

        _createClass(TagsDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TagsDuplicateComponent;
      }();

      TagsDuplicateComponent.ctorParameters = function () {
        return [];
      };

      TagsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tags-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tags-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-duplicate/tags-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tags-duplicate.component.scss */
        "./src/app/tags/tags-duplicate/tags-duplicate.component.scss"))["default"]]
      })], TagsDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/tags/tags-edit/tags-edit.component.scss":
    /*!*********************************************************!*\
      !*** ./src/app/tags/tags-edit/tags-edit.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTagsTagsEditTagsEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhZ3MvdGFncy1lZGl0L3RhZ3MtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/tags/tags-edit/tags-edit.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/tags/tags-edit/tags-edit.component.ts ***!
      \*******************************************************/

    /*! exports provided: TagsEditComponent */

    /***/
    function srcAppTagsTagsEditTagsEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsEditComponent", function () {
        return TagsEditComponent;
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


      var _tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../tags.service */
      "./src/app/tags/tags.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var TagsEditComponent = /*#__PURE__*/function () {
        function TagsEditComponent(tagsService, route, platform) {
          _classCallCheck(this, TagsEditComponent);

          this.tagsService = tagsService;
          this.route = route;
          this.platform = platform;
          this.id = null;
          this.model = null;
        }

        _createClass(TagsEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.tagsService.editTag(this.id);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            this.tagForm.tagsForm.valueChanges.subscribe(function (data) {
              _this2.tagsService.tagsFormValid.next(_this2.tagForm.tagsForm.valid);
            });
          }
        }]);

        return TagsEditComponent;
      }();

      TagsEditComponent.ctorParameters = function () {
        return [{
          type: _tags_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      TagsEditComponent.propDecorators = {
        tagForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['tagForm']
        }]
      };
      TagsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tags-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tags-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-edit/tags-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tags-edit.component.scss */
        "./src/app/tags/tags-edit/tags-edit.component.scss"))["default"]]
      })], TagsEditComponent);
      /***/
    },

    /***/
    "./src/app/tags/tags-form/tags-form.component.scss":
    /*!*********************************************************!*\
      !*** ./src/app/tags/tags-form/tags-form.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTagsTagsFormTagsFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhZ3MvdGFncy1mb3JtL3RhZ3MtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/tags/tags-form/tags-form.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/tags/tags-form/tags-form.component.ts ***!
      \*******************************************************/

    /*! exports provided: TagsFormComponent */

    /***/
    function srcAppTagsTagsFormTagsFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsFormComponent", function () {
        return TagsFormComponent;
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


      var _tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../tags.service */
      "./src/app/tags/tags.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var TagsFormComponent = /*#__PURE__*/function () {
        function TagsFormComponent(tagsService, toTitlecase) {
          _classCallCheck(this, TagsFormComponent);

          this.tagsService = tagsService;
          this.toTitlecase = toTitlecase;
          this.model = {};
          this.validationMessages = {
            'name': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'
            }],
            'post_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('ENTRADAS') + ' es obligatorio.'
            }]
          };
        }

        _createClass(TagsFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // set setPostIds

        }, {
          key: "setPostIds",
          value: function setPostIds(event) {
            var postIds = null;

            if (event.value.length) {
              postIds = [];

              for (var i = 0; i < event.value.length; i++) {
                postIds.push(event.value[i].id);
              }
            }

            this.tagsService.tag.post_ids = postIds;
          }
        }]);

        return TagsFormComponent;
      }();

      TagsFormComponent.ctorParameters = function () {
        return [{
          type: _tags_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      TagsFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        tagsForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['tagsForm']
        }]
      };
      TagsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tags-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tags-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-form/tags-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tags-form.component.scss */
        "./src/app/tags/tags-form/tags-form.component.scss"))["default"]]
      })], TagsFormComponent);
      /***/
    },

    /***/
    "./src/app/tags/tags-list/tags-list.component.scss":
    /*!*********************************************************!*\
      !*** ./src/app/tags/tags-list/tags-list.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTagsTagsListTagsListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhZ3MvdGFncy1saXN0L3RhZ3MtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/tags/tags-list/tags-list.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/tags/tags-list/tags-list.component.ts ***!
      \*******************************************************/

    /*! exports provided: TagsListComponent */

    /***/
    function srcAppTagsTagsListTagsListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsListComponent", function () {
        return TagsListComponent;
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


      var _tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../tags.service */
      "./src/app/tags/tags.service.ts");
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

      var TagsListComponent = /*#__PURE__*/function () {
        function TagsListComponent(tagsService, api, loading) {
          _classCallCheck(this, TagsListComponent);

          this.tagsService = tagsService;
          this.api = api;
          this.loading = loading;
        }

        _createClass(TagsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.tagsService.getTags();
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            this.content.scrollToTop(300);
          }
        }]);

        return TagsListComponent;
      }();

      TagsListComponent.ctorParameters = function () {
        return [{
          type: _tags_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }];
      };

      TagsListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      TagsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tags-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tags-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-list/tags-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tags-list.component.scss */
        "./src/app/tags/tags-list/tags-list.component.scss"))["default"]]
      })], TagsListComponent);
      /***/
    },

    /***/
    "./src/app/tags/tags-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tags/tags-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: TagsPageRoutingModule */

    /***/
    function srcAppTagsTagsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsPageRoutingModule", function () {
        return TagsPageRoutingModule;
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


      var _tags_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tags.page */
      "./src/app/tags/tags.page.ts");
      /* harmony import */


      var _tags_edit_tags_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./tags-edit/tags-edit.component */
      "./src/app/tags/tags-edit/tags-edit.component.ts");
      /* harmony import */


      var _tags_create_tags_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tags-create/tags-create.component */
      "./src/app/tags/tags-create/tags-create.component.ts");
      /* harmony import */


      var _tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tags-list/tags-list.component */
      "./src/app/tags/tags-list/tags-list.component.ts");

      var routes = [{
        path: '',
        component: _tags_page__WEBPACK_IMPORTED_MODULE_3__["TagsPage"]
      }, {
        path: 'list',
        component: _tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_6__["TagsListComponent"]
      }, {
        path: 'create',
        component: _tags_create_tags_create_component__WEBPACK_IMPORTED_MODULE_5__["TagsCreateComponent"]
      }, {
        path: ':id/edit',
        component: _tags_edit_tags_edit_component__WEBPACK_IMPORTED_MODULE_4__["TagsEditComponent"]
      }];

      var TagsPageRoutingModule = function TagsPageRoutingModule() {
        _classCallCheck(this, TagsPageRoutingModule);
      };

      TagsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TagsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tags/tags.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tags/tags.module.ts ***!
      \*************************************/

    /*! exports provided: TagsPageModule */

    /***/
    function srcAppTagsTagsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsPageModule", function () {
        return TagsPageModule;
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


      var _tags_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tags-routing.module */
      "./src/app/tags/tags-routing.module.ts");
      /* harmony import */


      var _tags_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tags.page */
      "./src/app/tags/tags.page.ts");
      /* harmony import */


      var _tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./tags-list/tags-list.component */
      "./src/app/tags/tags-list/tags-list.component.ts");
      /* harmony import */


      var _tags_create_tags_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./tags-create/tags-create.component */
      "./src/app/tags/tags-create/tags-create.component.ts");
      /* harmony import */


      var _tags_duplicate_tags_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./tags-duplicate/tags-duplicate.component */
      "./src/app/tags/tags-duplicate/tags-duplicate.component.ts");
      /* harmony import */


      var _tags_edit_tags_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./tags-edit/tags-edit.component */
      "./src/app/tags/tags-edit/tags-edit.component.ts");
      /* harmony import */


      var _tags_form_tags_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./tags-form/tags-form.component */
      "./src/app/tags/tags-form/tags-form.component.ts");

      var TagsPageModule = function TagsPageModule() {
        _classCallCheck(this, TagsPageModule);
      };

      TagsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _tags_routing_module__WEBPACK_IMPORTED_MODULE_6__["TagsPageRoutingModule"]],
        declarations: [_tags_page__WEBPACK_IMPORTED_MODULE_7__["TagsPage"], _tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_8__["TagsListComponent"], _tags_create_tags_create_component__WEBPACK_IMPORTED_MODULE_9__["TagsCreateComponent"], _tags_duplicate_tags_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["TagsDuplicateComponent"], _tags_edit_tags_edit_component__WEBPACK_IMPORTED_MODULE_11__["TagsEditComponent"], _tags_form_tags_form_component__WEBPACK_IMPORTED_MODULE_12__["TagsFormComponent"]]
      })], TagsPageModule);
      /***/
    },

    /***/
    "./src/app/tags/tags.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tags/tags.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTagsTagsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhZ3MvdGFncy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/tags/tags.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tags/tags.page.ts ***!
      \***********************************/

    /*! exports provided: TagsPage */

    /***/
    function srcAppTagsTagsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsPage", function () {
        return TagsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TagsPage = /*#__PURE__*/function () {
        function TagsPage() {
          _classCallCheck(this, TagsPage);
        }

        _createClass(TagsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TagsPage;
      }();

      TagsPage.ctorParameters = function () {
        return [];
      };

      TagsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tags',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tags.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tags.page.scss */
        "./src/app/tags/tags.page.scss"))["default"]]
      })], TagsPage);
      /***/
    },

    /***/
    "./src/app/tags/tags.service.ts":
    /*!**************************************!*\
      !*** ./src/app/tags/tags.service.ts ***!
      \**************************************/

    /*! exports provided: TagsService */

    /***/
    function srcAppTagsTagsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsService", function () {
        return TagsService;
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

      var TagsService = /*#__PURE__*/function () {
        function TagsService(api, alert, toast, router, navigation) {
          _classCallCheck(this, TagsService);

          this.api = api;
          this.alert = alert;
          this.toast = toast;
          this.router = router;
          this.navigation = navigation;
          this.tagsUrl = 'tags';
          this.tagsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
          this.tags = [];
          this.tag = {};
          this.tagLists = {};
          this.searchValue = '';
          this.perPage = 10;
          this.meta = null;
          this.page = 1;
          this.pagesContent = document.getElementById('pages-content');
        }

        _createClass(TagsService, [{
          key: "getTags",
          value: function getTags() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.tagsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.tags = res.data;
              _this3.tagLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editTag",
          value: function editTag(id) {
            var _this4 = this;

            this.api.get(this.tagsUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.tag = res.data.model;
              _this4.tagLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateTag",
          value: function updateTag() {
            var _this5 = this;

            this.api.put(this.tagsUrl + '/' + this.tag.id, {
              model: this.tag,
              pivots: {
                post: this.tag.posts
              }
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getTags(1);
            });
          }
        }, {
          key: "createTag",
          value: function createTag() {
            var _this6 = this;

            this.api.get(this.tagsUrl + '/create').subscribe(function (res) {
              _this6.tag = {};
              _this6.tagLists = res.lists;
            });
          }
        }, {
          key: "storeTag",
          value: function storeTag() {
            var _this7 = this;

            this.api.post(this.tagsUrl, {
              model: this.tag,
              pivots: {
                post: this.tag.posts
              }
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getTags(1);
            });
          }
        }, {
          key: "deleteTag",
          value: function deleteTag(id) {
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

                      this.api["delete"](this.tagsUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getTags(1);
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

        return TagsService;
      }();

      TagsService.ctorParameters = function () {
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

      TagsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TagsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tags-tags-module-es5.js.map