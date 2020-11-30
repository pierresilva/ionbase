(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories-create/categories-create.component.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories-create/categories-create.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCategoriesCategoriesCreateCategoriesCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/categories'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"categoriesService.storeCategory()\"\n                        color=\"success\"\n                        fill=\"outline\"\n                        [disabled]=\"!categoriesService.categoriesFormValid.value\"> Guardar\n                <ion-icon slot=\"icon-only\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'CATEGORÍAS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-categories-form #categoryForm [model]=\"categoriesService.category\"></app-categories-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories-duplicate/categories-duplicate.component.html":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories-duplicate/categories-duplicate.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCategoriesCategoriesDuplicateCategoriesDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  Categories duplicate works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories-edit/categories-edit.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories-edit/categories-edit.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCategoriesCategoriesEditCategoriesEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/categories'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"categoriesService.updateCategory()\"\n                        color=\"success\"\n                        fill=\"outline\"\n                        [disabled]=\"!categoriesService.categoriesFormValid.value\"> Guardar\n                <ion-icon slot=\"icon-only\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'CATEGORÍAS' | titlecase}}: {{ categoriesService.category?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-categories-form #categoryForm [model]=\"categoriesService.category\"></app-categories-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories-form/categories-form.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories-form/categories-form.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCategoriesCategoriesFormCategoriesFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #categoriesForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- post_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'ENTRADAS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"post_ids\"\n                          id=\"post_ids-field\"\n                          [(ngModel)]=\"model.posts\"\n                          [items]=\"categoriesService.categoryLists.Post\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('ENTRADAS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('ENTRADAS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setPostIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.post_ids\">\n            <div class=\"error-message\" *ngIf=\"categoriesForm.form.controls['post_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end post_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"categoriesForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n</form>\n\n<pre>\n{{ model | json }}\n</pre>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories-list/categories-list.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories-list/categories-list.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCategoriesCategoriesListCategoriesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'CATEGORÍAS' | titlecase}}\"\n                 primaryLink=\"categories/create\"\n                 primaryText=\"Crear {{'CATEGORÍAS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('CATEGORÍAS' | lowercase )\"\n                       (ionCancel)=\"this.categoriesService.searchValue = ''; categoriesService.getCategories()\"\n                       (keyup.enter)=\"categoriesService.getCategories()\"\n                       [(ngModel)]=\"categoriesService.searchValue\"></ion-searchbar>\n\n    <ion-card>\n\n        <ng-container *ngIf=\"!(loading.loading | async) && categoriesService.categories.length\">\n            <ion-item *ngFor=\"let category of categoriesService.categories; let index = index\">\n                <ion-label>\n                    <h3>{{ 'NOMBRE' | titlecase }}: {{ category.name }}</h3>\n                    <h3>{{ 'ENTRADAS' | titlecase }}:\n                    <ng-container *ngIf=\"category.posts.length\">\n                        <ng-container *ngFor=\"let post of category.posts; let last = last\">\n                        <a routerLink=\"/posts/{{ post.id }}/edit\">{{ post.name }}</a><span *ngIf=\"!last\">, </span>\n                        </ng-container>\n                    </ng-container>\n                    </h3>\n                </ion-label>\n\n\n                <ion-button item-right fill=\"clear\" color=\"success\" [routerLink]=\"'/categories/' + category.id + '/edit'\">\n                    <ion-icon name=\"create-outline\"></ion-icon>\n                </ion-button>\n                <!--<ion-button item-right fill=\"clear\" color=\"success\" (click)=\"null\">\n                    <ion-icon name=\"eye-outline\"></ion-icon>\n                </ion-button>-->\n                <ion-button item-right fill=\"clear\" color=\"danger\" (click)=\"categoriesService.deleteCategory(category.id)\">\n                    <ion-icon name=\"trash-outline\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </ng-container>\n\n        <ng-container *ngIf=\"!(loading.loading | async) && !categoriesService.categories.length\">\n            <ion-item>\n                <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n                <ion-label><h2>No se encontraron {{'CATEGORÍAS' | titlecase}}</h2></ion-label>\n                <ion-button [routerLink]=\"'/categories/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                    Crear {{'CATEGORÍAS' | titlecase}}\n                    <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </ng-container>\n\n    </ion-card>\n\n</ion-content>\n\n<ion-footer>\n    <ion-row *ngIf=\"categoriesService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"categoriesService.getCategories(categoriesService.meta.current_page - 1)\"\n                        [disabled]=\"categoriesService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{categoriesService.meta.current_page}}\n                /{{categoriesService.meta.last_page}} {{categoriesService.meta.from}}-{{categoriesService.meta.to}}\n                /{{categoriesService.meta.total}} </ion-button>\n            <ion-button (click)=\"categoriesService.getCategories(categoriesService.meta.current_page + 1)\"\n                        [disabled]=\"categoriesService.meta.current_page == categoriesService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCategoriesCategoriesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"CATEGORÍAS\"></app-main-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/categories/categories-create/categories-create.component.scss":
    /*!*******************************************************************************!*\
      !*** ./src/app/categories/categories-create/categories-create.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCategoriesCategoriesCreateCategoriesCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy1jcmVhdGUvY2F0ZWdvcmllcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/categories/categories-create/categories-create.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/categories/categories-create/categories-create.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: CategoriesCreateComponent */

    /***/
    function srcAppCategoriesCategoriesCreateCategoriesCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesCreateComponent", function () {
        return CategoriesCreateComponent;
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


      var _categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../categories.service */
      "./src/app/categories/categories.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var CategoriesCreateComponent = /*#__PURE__*/function () {
        function CategoriesCreateComponent(categoriesService, route) {
          _classCallCheck(this, CategoriesCreateComponent);

          this.categoriesService = categoriesService;
          this.route = route;
          this.id = null;
          this.formValid = false;
        }

        _createClass(CategoriesCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.clearPosts();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.categoryForm.categoriesForm.valueChanges.subscribe(function (data) {
              _this.categoriesService.categoriesFormValid.next(_this.categoryForm.categoriesForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.categoriesService.createCategory();
            this.categoriesService.category = {};
          }
        }]);

        return CategoriesCreateComponent;
      }();

      CategoriesCreateComponent.ctorParameters = function () {
        return [{
          type: _categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      CategoriesCreateComponent.propDecorators = {
        categoryForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['categoryForm']
        }]
      };
      CategoriesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./categories-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories-create/categories-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./categories-create.component.scss */
        "./src/app/categories/categories-create/categories-create.component.scss"))["default"]]
      })], CategoriesCreateComponent);
      /***/
    },

    /***/
    "./src/app/categories/categories-duplicate/categories-duplicate.component.scss":
    /*!*************************************************************************************!*\
      !*** ./src/app/categories/categories-duplicate/categories-duplicate.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCategoriesCategoriesDuplicateCategoriesDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy1kdXBsaWNhdGUvY2F0ZWdvcmllcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/categories/categories-duplicate/categories-duplicate.component.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/categories/categories-duplicate/categories-duplicate.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: CategoriesDuplicateComponent */

    /***/
    function srcAppCategoriesCategoriesDuplicateCategoriesDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesDuplicateComponent", function () {
        return CategoriesDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CategoriesDuplicateComponent = /*#__PURE__*/function () {
        function CategoriesDuplicateComponent() {
          _classCallCheck(this, CategoriesDuplicateComponent);
        }

        _createClass(CategoriesDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CategoriesDuplicateComponent;
      }();

      CategoriesDuplicateComponent.ctorParameters = function () {
        return [];
      };

      CategoriesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./categories-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories-duplicate/categories-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./categories-duplicate.component.scss */
        "./src/app/categories/categories-duplicate/categories-duplicate.component.scss"))["default"]]
      })], CategoriesDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/categories/categories-edit/categories-edit.component.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/categories/categories-edit/categories-edit.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCategoriesCategoriesEditCategoriesEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy1lZGl0L2NhdGVnb3JpZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/categories/categories-edit/categories-edit.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/categories/categories-edit/categories-edit.component.ts ***!
      \*************************************************************************/

    /*! exports provided: CategoriesEditComponent */

    /***/
    function srcAppCategoriesCategoriesEditCategoriesEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesEditComponent", function () {
        return CategoriesEditComponent;
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


      var _categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../categories.service */
      "./src/app/categories/categories.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var CategoriesEditComponent = /*#__PURE__*/function () {
        function CategoriesEditComponent(categoriesService, route) {
          _classCallCheck(this, CategoriesEditComponent);

          this.categoriesService = categoriesService;
          this.route = route;
          this.id = null;
          this.model = null;
        }

        _createClass(CategoriesEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.categoriesService.editCategory(this.id);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            this.categoryForm.categoriesForm.valueChanges.subscribe(function (data) {
              _this2.categoriesService.categoriesFormValid.next(_this2.categoryForm.categoriesForm.valid);
            });
          }
        }]);

        return CategoriesEditComponent;
      }();

      CategoriesEditComponent.ctorParameters = function () {
        return [{
          type: _categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      CategoriesEditComponent.propDecorators = {
        categoryForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['categoryForm']
        }]
      };
      CategoriesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./categories-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories-edit/categories-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./categories-edit.component.scss */
        "./src/app/categories/categories-edit/categories-edit.component.scss"))["default"]]
      })], CategoriesEditComponent);
      /***/
    },

    /***/
    "./src/app/categories/categories-form/categories-form.component.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/categories/categories-form/categories-form.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCategoriesCategoriesFormCategoriesFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy1mb3JtL2NhdGVnb3JpZXMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/categories/categories-form/categories-form.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/categories/categories-form/categories-form.component.ts ***!
      \*************************************************************************/

    /*! exports provided: CategoriesFormComponent */

    /***/
    function srcAppCategoriesCategoriesFormCategoriesFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesFormComponent", function () {
        return CategoriesFormComponent;
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


      var _categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../categories.service */
      "./src/app/categories/categories.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var CategoriesFormComponent = /*#__PURE__*/function () {
        function CategoriesFormComponent(categoriesService, toTitlecase) {
          _classCallCheck(this, CategoriesFormComponent);

          this.categoriesService = categoriesService;
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

        _createClass(CategoriesFormComponent, [{
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

            this.categoriesService.category.post_ids = postIds;
          }
        }]);

        return CategoriesFormComponent;
      }();

      CategoriesFormComponent.ctorParameters = function () {
        return [{
          type: _categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      CategoriesFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        categoriesForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['categoriesForm']
        }]
      };
      CategoriesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./categories-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories-form/categories-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./categories-form.component.scss */
        "./src/app/categories/categories-form/categories-form.component.scss"))["default"]]
      })], CategoriesFormComponent);
      /***/
    },

    /***/
    "./src/app/categories/categories-list/categories-list.component.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/categories/categories-list/categories-list.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCategoriesCategoriesListCategoriesListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy1saXN0L2NhdGVnb3JpZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/categories/categories-list/categories-list.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/categories/categories-list/categories-list.component.ts ***!
      \*************************************************************************/

    /*! exports provided: CategoriesListComponent */

    /***/
    function srcAppCategoriesCategoriesListCategoriesListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesListComponent", function () {
        return CategoriesListComponent;
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


      var _categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../categories.service */
      "./src/app/categories/categories.service.ts");
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

      var CategoriesListComponent = /*#__PURE__*/function () {
        function CategoriesListComponent(categoriesService, api, loading) {
          _classCallCheck(this, CategoriesListComponent);

          this.categoriesService = categoriesService;
          this.api = api;
          this.loading = loading;
        }

        _createClass(CategoriesListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.categoriesService.getCategories();
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            this.content.scrollToTop(300);
          }
        }]);

        return CategoriesListComponent;
      }();

      CategoriesListComponent.ctorParameters = function () {
        return [{
          type: _categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }];
      };

      CategoriesListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      CategoriesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./categories-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories-list/categories-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./categories-list.component.scss */
        "./src/app/categories/categories-list/categories-list.component.scss"))["default"]]
      })], CategoriesListComponent);
      /***/
    },

    /***/
    "./src/app/categories/categories-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/categories/categories-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: CategoriesPageRoutingModule */

    /***/
    function srcAppCategoriesCategoriesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesPageRoutingModule", function () {
        return CategoriesPageRoutingModule;
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


      var _categories_edit_categories_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./categories-edit/categories-edit.component */
      "./src/app/categories/categories-edit/categories-edit.component.ts");
      /* harmony import */


      var _categories_create_categories_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./categories-create/categories-create.component */
      "./src/app/categories/categories-create/categories-create.component.ts");
      /* harmony import */


      var _categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./categories-list/categories-list.component */
      "./src/app/categories/categories-list/categories-list.component.ts");

      var routes = [{
        path: '',
        component: _categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesListComponent"]
      }, {
        path: 'create',
        component: _categories_create_categories_create_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesCreateComponent"]
      }, {
        path: ':id/edit',
        component: _categories_edit_categories_edit_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesEditComponent"]
      }];

      var CategoriesPageRoutingModule = function CategoriesPageRoutingModule() {
        _classCallCheck(this, CategoriesPageRoutingModule);
      };

      CategoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CategoriesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/categories/categories.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/categories/categories.module.ts ***!
      \*************************************************/

    /*! exports provided: CategoriesPageModule */

    /***/
    function srcAppCategoriesCategoriesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function () {
        return CategoriesPageModule;
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


      var _categories_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./categories-routing.module */
      "./src/app/categories/categories-routing.module.ts");
      /* harmony import */


      var _categories_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./categories.page */
      "./src/app/categories/categories.page.ts");
      /* harmony import */


      var _categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./categories-list/categories-list.component */
      "./src/app/categories/categories-list/categories-list.component.ts");
      /* harmony import */


      var _categories_create_categories_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./categories-create/categories-create.component */
      "./src/app/categories/categories-create/categories-create.component.ts");
      /* harmony import */


      var _categories_duplicate_categories_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./categories-duplicate/categories-duplicate.component */
      "./src/app/categories/categories-duplicate/categories-duplicate.component.ts");
      /* harmony import */


      var _categories_edit_categories_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./categories-edit/categories-edit.component */
      "./src/app/categories/categories-edit/categories-edit.component.ts");
      /* harmony import */


      var _categories_form_categories_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./categories-form/categories-form.component */
      "./src/app/categories/categories-form/categories-form.component.ts");

      var CategoriesPageModule = function CategoriesPageModule() {
        _classCallCheck(this, CategoriesPageModule);
      };

      CategoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _categories_routing_module__WEBPACK_IMPORTED_MODULE_6__["CategoriesPageRoutingModule"]],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_7__["CategoriesPage"], _categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_8__["CategoriesListComponent"], _categories_create_categories_create_component__WEBPACK_IMPORTED_MODULE_9__["CategoriesCreateComponent"], _categories_duplicate_categories_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["CategoriesDuplicateComponent"], _categories_edit_categories_edit_component__WEBPACK_IMPORTED_MODULE_11__["CategoriesEditComponent"], _categories_form_categories_form_component__WEBPACK_IMPORTED_MODULE_12__["CategoriesFormComponent"]]
      })], CategoriesPageModule);
      /***/
    },

    /***/
    "./src/app/categories/categories.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/categories/categories.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCategoriesCategoriesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/categories/categories.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/categories/categories.page.ts ***!
      \***********************************************/

    /*! exports provided: CategoriesPage */

    /***/
    function srcAppCategoriesCategoriesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesPage", function () {
        return CategoriesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CategoriesPage = /*#__PURE__*/function () {
        function CategoriesPage() {
          _classCallCheck(this, CategoriesPage);
        }

        _createClass(CategoriesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CategoriesPage;
      }();

      CategoriesPage.ctorParameters = function () {
        return [];
      };

      CategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./categories.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./categories.page.scss */
        "./src/app/categories/categories.page.scss"))["default"]]
      })], CategoriesPage);
      /***/
    },

    /***/
    "./src/app/categories/categories.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/categories/categories.service.ts ***!
      \**************************************************/

    /*! exports provided: CategoriesService */

    /***/
    function srcAppCategoriesCategoriesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesService", function () {
        return CategoriesService;
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

      var CategoriesService = /*#__PURE__*/function () {
        function CategoriesService(api, alert, toast, router, navigation) {
          _classCallCheck(this, CategoriesService);

          this.api = api;
          this.alert = alert;
          this.toast = toast;
          this.router = router;
          this.navigation = navigation;
          this.categoriesUrl = 'categories';
          this.categoriesFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
          this.categories = [];
          this.category = {};
          this.categoryLists = {};
          this.searchValue = '';
          this.perPage = 10;
          this.meta = null;
          this.page = 1;
          this.pagesContent = document.getElementById('pages-content');
        }

        _createClass(CategoriesService, [{
          key: "getCategories",
          value: function getCategories() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.categoriesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.categories = res.data;
              _this3.categoryLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editCategory",
          value: function editCategory(id) {
            var _this4 = this;

            this.api.get(this.categoriesUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.category = res.data.model;
              _this4.categoryLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateCategory",
          value: function updateCategory() {
            var _this5 = this;

            this.api.put(this.categoriesUrl + '/' + this.category.id, {
              model: this.category,
              pivots: {}
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getCategories(1);
            });
          }
        }, {
          key: "createCategory",
          value: function createCategory() {
            var _this6 = this;

            this.api.get(this.categoriesUrl + '/create').subscribe(function (res) {
              _this6.category = {};
              _this6.categoryLists = res.lists;
            });
          }
        }, {
          key: "storeCategory",
          value: function storeCategory() {
            var _this7 = this;

            this.api.post(this.categoriesUrl, {
              model: this.category,
              pivots: {}
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getCategories(1);
            });
          }
        }, {
          key: "deleteCategory",
          value: function deleteCategory(id) {
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

                      this.api["delete"](this.categoriesUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getCategories(1);
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

        return CategoriesService;
      }();

      CategoriesService.ctorParameters = function () {
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

      CategoriesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CategoriesService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=categories-categories-module-es5.js.map