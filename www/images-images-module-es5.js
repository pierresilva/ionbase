(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["images-images-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-create/images-create.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-create/images-create.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppImagesImagesCreateImagesCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/images'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"imagesService.storeImage()\"\n                        color=\"success\"\n                        fill=\"outline\"\n                        [disabled]=\"!imagesService.imagesFormValid.value\"> Guardar\n                <ion-icon slot=\"icon-only\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'IMÁGENES' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-images-form #imageForm [model]=\"imagesService.image\"></app-images-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-duplicate/images-duplicate.component.html":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-duplicate/images-duplicate.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppImagesImagesDuplicateImagesDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  Images duplicate works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-edit/images-edit.component.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-edit/images-edit.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppImagesImagesEditImagesEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/images'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"imagesService.updateImage()\"\n                        color=\"success\"\n                        fill=\"outline\"\n                        [disabled]=\"!imagesService.imagesFormValid.value\"> Guardar\n                <ion-icon slot=\"icon-only\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'IMÁGENES' | titlecase}}: {{ imagesService.image?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-images-form #imageForm [model]=\"imagesService.image\"></app-images-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-form/images-form.component.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-form/images-form.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppImagesImagesFormImagesFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #imagesForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- post_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'ENTRADAS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"post_ids\"\n                          id=\"post_ids-field\"\n                          [(ngModel)]=\"model.posts\"\n                          [items]=\"imagesService.imageLists.Post\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('ENTRADAS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('ENTRADAS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setPostIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.post_ids\">\n            <div class=\"error-message\" *ngIf=\"imagesForm.form.controls['post_ids']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end post_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"imagesForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- url -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'URL' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.url\"\n                            type=\"text\"\n                            name=\"url\"\n                            id=\"url-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.url\">\n                    <div class=\"error-message\" *ngIf=\"imagesForm.form.controls['url']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end url -->\n\n\n</form>\n\n<pre>\n{{ model | json }}\n</pre>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-list/images-list.component.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-list/images-list.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppImagesImagesListImagesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'IMÁGENES' | titlecase}}\"\n                 primaryLink=\"images/create\"\n                 primaryText=\"Crear {{'IMÁGENES' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('IMÁGENES' | lowercase )\"\n                       (ionCancel)=\"this.imagesService.searchValue = ''; imagesService.getImages()\"\n                       (keyup.enter)=\"imagesService.getImages()\"\n                       [(ngModel)]=\"imagesService.searchValue\"></ion-searchbar>\n\n    <ion-card>\n\n        <ng-container *ngIf=\"!(loading.loading | async) && imagesService.images.length\">\n            <ion-item *ngFor=\"let image of imagesService.images; let index = index\">\n                <ion-label>\n                    <h3>{{ 'NOMBRE' | titlecase }}: {{ image.name }}</h3>\n                    <h3>{{ 'URL' | titlecase }}: {{ image.url }}</h3>\n                    <h3>{{ 'ENTRADAS' | titlecase }}:\n                    <ng-container *ngIf=\"image.posts.length\">\n                        <ng-container *ngFor=\"let post of image.posts; let last = last\">\n                        <a routerLink=\"/posts/{{ post.id }}/edit\">{{ post.name }}</a><span *ngIf=\"!last\">, </span>\n                        </ng-container>\n                    </ng-container>\n                    </h3>\n                </ion-label>\n\n\n                <ion-button item-right fill=\"clear\" color=\"success\" [routerLink]=\"'/images/' + image.id + '/edit'\">\n                    <ion-icon name=\"create-outline\"></ion-icon>\n                </ion-button>\n                <!--<ion-button item-right fill=\"clear\" color=\"success\" (click)=\"null\">\n                    <ion-icon name=\"eye-outline\"></ion-icon>\n                </ion-button>-->\n                <ion-button item-right fill=\"clear\" color=\"danger\" (click)=\"imagesService.deleteImage(image.id)\">\n                    <ion-icon name=\"trash-outline\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </ng-container>\n\n        <ng-container *ngIf=\"!(loading.loading | async) && !imagesService.images.length\">\n            <ion-item>\n                <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n                <ion-label><h2>No se encontraron {{'IMÁGENES' | titlecase}}</h2></ion-label>\n                <ion-button [routerLink]=\"'/images/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                    Crear {{'IMÁGENES' | titlecase}}\n                    <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </ng-container>\n\n    </ion-card>\n\n</ion-content>\n\n<ion-footer>\n    <ion-row *ngIf=\"imagesService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"imagesService.getImages(imagesService.meta.current_page - 1)\"\n                        [disabled]=\"imagesService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{imagesService.meta.current_page}}\n                /{{imagesService.meta.last_page}} {{imagesService.meta.from}}-{{imagesService.meta.to}}\n                /{{imagesService.meta.total}} </ion-button>\n            <ion-button (click)=\"imagesService.getImages(imagesService.meta.current_page + 1)\"\n                        [disabled]=\"imagesService.meta.current_page == imagesService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/images/images.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppImagesImagesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"IMÁGENES\"></app-main-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/images/images-create/images-create.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/images/images-create/images-create.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppImagesImagesCreateImagesCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlcy9pbWFnZXMtY3JlYXRlL2ltYWdlcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/images/images-create/images-create.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/images/images-create/images-create.component.ts ***!
      \*****************************************************************/

    /*! exports provided: ImagesCreateComponent */

    /***/
    function srcAppImagesImagesCreateImagesCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagesCreateComponent", function () {
        return ImagesCreateComponent;
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


      var _images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../images.service */
      "./src/app/images/images.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var ImagesCreateComponent = /*#__PURE__*/function () {
        function ImagesCreateComponent(imagesService, route) {
          _classCallCheck(this, ImagesCreateComponent);

          this.imagesService = imagesService;
          this.route = route;
          this.id = null;
          this.formValid = false;
        }

        _createClass(ImagesCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.clearPosts();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.imageForm.imagesForm.valueChanges.subscribe(function (data) {
              _this.imagesService.imagesFormValid.next(_this.imageForm.imagesForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.imagesService.createImage();
            this.imagesService.image = {};
          }
        }]);

        return ImagesCreateComponent;
      }();

      ImagesCreateComponent.ctorParameters = function () {
        return [{
          type: _images_service__WEBPACK_IMPORTED_MODULE_2__["ImagesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      ImagesCreateComponent.propDecorators = {
        imageForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['imageForm']
        }]
      };
      ImagesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-images-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./images-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-create/images-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./images-create.component.scss */
        "./src/app/images/images-create/images-create.component.scss"))["default"]]
      })], ImagesCreateComponent);
      /***/
    },

    /***/
    "./src/app/images/images-duplicate/images-duplicate.component.scss":
    /*!*************************************************************************!*\
      !*** ./src/app/images/images-duplicate/images-duplicate.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppImagesImagesDuplicateImagesDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlcy9pbWFnZXMtZHVwbGljYXRlL2ltYWdlcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/images/images-duplicate/images-duplicate.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/images/images-duplicate/images-duplicate.component.ts ***!
      \***********************************************************************/

    /*! exports provided: ImagesDuplicateComponent */

    /***/
    function srcAppImagesImagesDuplicateImagesDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagesDuplicateComponent", function () {
        return ImagesDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ImagesDuplicateComponent = /*#__PURE__*/function () {
        function ImagesDuplicateComponent() {
          _classCallCheck(this, ImagesDuplicateComponent);
        }

        _createClass(ImagesDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ImagesDuplicateComponent;
      }();

      ImagesDuplicateComponent.ctorParameters = function () {
        return [];
      };

      ImagesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-images-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./images-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-duplicate/images-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./images-duplicate.component.scss */
        "./src/app/images/images-duplicate/images-duplicate.component.scss"))["default"]]
      })], ImagesDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/images/images-edit/images-edit.component.scss":
    /*!***************************************************************!*\
      !*** ./src/app/images/images-edit/images-edit.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppImagesImagesEditImagesEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlcy9pbWFnZXMtZWRpdC9pbWFnZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/images/images-edit/images-edit.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/images/images-edit/images-edit.component.ts ***!
      \*************************************************************/

    /*! exports provided: ImagesEditComponent */

    /***/
    function srcAppImagesImagesEditImagesEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagesEditComponent", function () {
        return ImagesEditComponent;
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


      var _images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../images.service */
      "./src/app/images/images.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var ImagesEditComponent = /*#__PURE__*/function () {
        function ImagesEditComponent(imagesService, route) {
          _classCallCheck(this, ImagesEditComponent);

          this.imagesService = imagesService;
          this.route = route;
          this.id = null;
          this.model = null;
        }

        _createClass(ImagesEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.imagesService.editImage(this.id);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            this.imageForm.imagesForm.valueChanges.subscribe(function (data) {
              _this2.imagesService.imagesFormValid.next(_this2.imageForm.imagesForm.valid);
            });
          }
        }]);

        return ImagesEditComponent;
      }();

      ImagesEditComponent.ctorParameters = function () {
        return [{
          type: _images_service__WEBPACK_IMPORTED_MODULE_2__["ImagesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      ImagesEditComponent.propDecorators = {
        imageForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['imageForm']
        }]
      };
      ImagesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-images-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./images-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-edit/images-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./images-edit.component.scss */
        "./src/app/images/images-edit/images-edit.component.scss"))["default"]]
      })], ImagesEditComponent);
      /***/
    },

    /***/
    "./src/app/images/images-form/images-form.component.scss":
    /*!***************************************************************!*\
      !*** ./src/app/images/images-form/images-form.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppImagesImagesFormImagesFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlcy9pbWFnZXMtZm9ybS9pbWFnZXMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/images/images-form/images-form.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/images/images-form/images-form.component.ts ***!
      \*************************************************************/

    /*! exports provided: ImagesFormComponent */

    /***/
    function srcAppImagesImagesFormImagesFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagesFormComponent", function () {
        return ImagesFormComponent;
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


      var _images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../images.service */
      "./src/app/images/images.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var ImagesFormComponent = /*#__PURE__*/function () {
        function ImagesFormComponent(imagesService, toTitlecase) {
          _classCallCheck(this, ImagesFormComponent);

          this.imagesService = imagesService;
          this.toTitlecase = toTitlecase;
          this.model = {};
          this.validationMessages = {
            'name': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'
            }],
            'url': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('URL') + ' es obligatorio.'
            }],
            'post_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('ENTRADAS') + ' es obligatorio.'
            }]
          };
        }

        _createClass(ImagesFormComponent, [{
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

            this.imagesService.image.post_ids = postIds;
          }
        }]);

        return ImagesFormComponent;
      }();

      ImagesFormComponent.ctorParameters = function () {
        return [{
          type: _images_service__WEBPACK_IMPORTED_MODULE_2__["ImagesService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      ImagesFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        imagesForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['imagesForm']
        }]
      };
      ImagesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-images-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./images-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-form/images-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./images-form.component.scss */
        "./src/app/images/images-form/images-form.component.scss"))["default"]]
      })], ImagesFormComponent);
      /***/
    },

    /***/
    "./src/app/images/images-list/images-list.component.scss":
    /*!***************************************************************!*\
      !*** ./src/app/images/images-list/images-list.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppImagesImagesListImagesListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlcy9pbWFnZXMtbGlzdC9pbWFnZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/images/images-list/images-list.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/images/images-list/images-list.component.ts ***!
      \*************************************************************/

    /*! exports provided: ImagesListComponent */

    /***/
    function srcAppImagesImagesListImagesListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagesListComponent", function () {
        return ImagesListComponent;
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


      var _images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../images.service */
      "./src/app/images/images.service.ts");
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

      var ImagesListComponent = /*#__PURE__*/function () {
        function ImagesListComponent(imagesService, api, loading) {
          _classCallCheck(this, ImagesListComponent);

          this.imagesService = imagesService;
          this.api = api;
          this.loading = loading;
        }

        _createClass(ImagesListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.imagesService.getImages();
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            this.content.scrollToTop(300);
          }
        }]);

        return ImagesListComponent;
      }();

      ImagesListComponent.ctorParameters = function () {
        return [{
          type: _images_service__WEBPACK_IMPORTED_MODULE_2__["ImagesService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }];
      };

      ImagesListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      ImagesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-images-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./images-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-list/images-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./images-list.component.scss */
        "./src/app/images/images-list/images-list.component.scss"))["default"]]
      })], ImagesListComponent);
      /***/
    },

    /***/
    "./src/app/images/images-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/images/images-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: ImagesPageRoutingModule */

    /***/
    function srcAppImagesImagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagesPageRoutingModule", function () {
        return ImagesPageRoutingModule;
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


      var _images_edit_images_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./images-edit/images-edit.component */
      "./src/app/images/images-edit/images-edit.component.ts");
      /* harmony import */


      var _images_create_images_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./images-create/images-create.component */
      "./src/app/images/images-create/images-create.component.ts");
      /* harmony import */


      var _images_list_images_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./images-list/images-list.component */
      "./src/app/images/images-list/images-list.component.ts");

      var routes = [{
        path: '',
        component: _images_list_images_list_component__WEBPACK_IMPORTED_MODULE_5__["ImagesListComponent"]
      }, {
        path: 'create',
        component: _images_create_images_create_component__WEBPACK_IMPORTED_MODULE_4__["ImagesCreateComponent"]
      }, {
        path: ':id/edit',
        component: _images_edit_images_edit_component__WEBPACK_IMPORTED_MODULE_3__["ImagesEditComponent"]
      }];

      var ImagesPageRoutingModule = function ImagesPageRoutingModule() {
        _classCallCheck(this, ImagesPageRoutingModule);
      };

      ImagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ImagesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/images/images.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/images/images.module.ts ***!
      \*****************************************/

    /*! exports provided: ImagesPageModule */

    /***/
    function srcAppImagesImagesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagesPageModule", function () {
        return ImagesPageModule;
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


      var _images_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./images-routing.module */
      "./src/app/images/images-routing.module.ts");
      /* harmony import */


      var _images_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./images.page */
      "./src/app/images/images.page.ts");
      /* harmony import */


      var _images_list_images_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./images-list/images-list.component */
      "./src/app/images/images-list/images-list.component.ts");
      /* harmony import */


      var _images_create_images_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./images-create/images-create.component */
      "./src/app/images/images-create/images-create.component.ts");
      /* harmony import */


      var _images_duplicate_images_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./images-duplicate/images-duplicate.component */
      "./src/app/images/images-duplicate/images-duplicate.component.ts");
      /* harmony import */


      var _images_edit_images_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./images-edit/images-edit.component */
      "./src/app/images/images-edit/images-edit.component.ts");
      /* harmony import */


      var _images_form_images_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./images-form/images-form.component */
      "./src/app/images/images-form/images-form.component.ts");

      var ImagesPageModule = function ImagesPageModule() {
        _classCallCheck(this, ImagesPageModule);
      };

      ImagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _images_routing_module__WEBPACK_IMPORTED_MODULE_6__["ImagesPageRoutingModule"]],
        declarations: [_images_page__WEBPACK_IMPORTED_MODULE_7__["ImagesPage"], _images_list_images_list_component__WEBPACK_IMPORTED_MODULE_8__["ImagesListComponent"], _images_create_images_create_component__WEBPACK_IMPORTED_MODULE_9__["ImagesCreateComponent"], _images_duplicate_images_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["ImagesDuplicateComponent"], _images_edit_images_edit_component__WEBPACK_IMPORTED_MODULE_11__["ImagesEditComponent"], _images_form_images_form_component__WEBPACK_IMPORTED_MODULE_12__["ImagesFormComponent"]]
      })], ImagesPageModule);
      /***/
    },

    /***/
    "./src/app/images/images.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/images/images.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppImagesImagesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlcy9pbWFnZXMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/images/images.page.ts":
    /*!***************************************!*\
      !*** ./src/app/images/images.page.ts ***!
      \***************************************/

    /*! exports provided: ImagesPage */

    /***/
    function srcAppImagesImagesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagesPage", function () {
        return ImagesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ImagesPage = /*#__PURE__*/function () {
        function ImagesPage() {
          _classCallCheck(this, ImagesPage);
        }

        _createClass(ImagesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ImagesPage;
      }();

      ImagesPage.ctorParameters = function () {
        return [];
      };

      ImagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-images',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./images.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./images.page.scss */
        "./src/app/images/images.page.scss"))["default"]]
      })], ImagesPage);
      /***/
    },

    /***/
    "./src/app/images/images.service.ts":
    /*!******************************************!*\
      !*** ./src/app/images/images.service.ts ***!
      \******************************************/

    /*! exports provided: ImagesService */

    /***/
    function srcAppImagesImagesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagesService", function () {
        return ImagesService;
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

      var ImagesService = /*#__PURE__*/function () {
        function ImagesService(api, alert, toast, router, navigation) {
          _classCallCheck(this, ImagesService);

          this.api = api;
          this.alert = alert;
          this.toast = toast;
          this.router = router;
          this.navigation = navigation;
          this.imagesUrl = 'images';
          this.imagesFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
          this.images = [];
          this.image = {};
          this.imageLists = {};
          this.searchValue = '';
          this.perPage = 10;
          this.meta = null;
          this.page = 1;
          this.pagesContent = document.getElementById('pages-content');
        }

        _createClass(ImagesService, [{
          key: "getImages",
          value: function getImages() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.imagesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.images = res.data;
              _this3.imageLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editImage",
          value: function editImage(id) {
            var _this4 = this;

            this.api.get(this.imagesUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.image = res.data.model;
              _this4.imageLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateImage",
          value: function updateImage() {
            var _this5 = this;

            this.api.put(this.imagesUrl + '/' + this.image.id, {
              model: this.image,
              pivots: {
                post: this.image.posts
              }
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getImages(1);
            });
          }
        }, {
          key: "createImage",
          value: function createImage() {
            var _this6 = this;

            this.api.get(this.imagesUrl + '/create').subscribe(function (res) {
              _this6.image = {};
              _this6.imageLists = res.lists;
            });
          }
        }, {
          key: "storeImage",
          value: function storeImage() {
            var _this7 = this;

            this.api.post(this.imagesUrl, {
              model: this.image,
              pivots: {
                post: this.image.posts
              }
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getImages(1);
            });
          }
        }, {
          key: "deleteImage",
          value: function deleteImage(id) {
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

                      this.api["delete"](this.imagesUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getImages(1);
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

        return ImagesService;
      }();

      ImagesService.ctorParameters = function () {
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

      ImagesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ImagesService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=images-images-module-es5.js.map