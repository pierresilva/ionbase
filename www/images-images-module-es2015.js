(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["images-images-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-create/images-create.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-create/images-create.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/images'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"imagesService.storeImage()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!imagesService.imagesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'IMÁGENES' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-images-form #imageForm [model]=\"imagesService.image\"></app-images-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-duplicate/images-duplicate.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-duplicate/images-duplicate.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  Images duplicate works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-edit/images-edit.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-edit/images-edit.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/images'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"imagesService.updateImage()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!imagesService.imagesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'IMÁGENES' | titlecase}}: {{ imagesService.image?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-images-form #imageForm [model]=\"imagesService.image\"></app-images-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-form/images-form.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-form/images-form.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #imagesForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- post_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'ENTRADAS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"post_ids\"\n                          id=\"post_ids-field\"\n                          [(ngModel)]=\"model.posts\"\n                          [items]=\"imagesService.imageLists.Post\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('ENTRADAS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('ENTRADAS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setPostIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.post_ids\">\n            <div class=\"error-message\" *ngIf=\"imagesForm.form.controls['post_ids']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end post_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"imagesForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- url -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'URL' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.url\"\n                            type=\"text\"\n                            name=\"url\"\n                            id=\"url-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.url\">\n                    <div class=\"error-message\" *ngIf=\"imagesForm.form.controls['url']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end url -->\n\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-list/images-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-list/images-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'IMÁGENES' | titlecase}}\"\n                 primaryLink=\"images/create\"\n                 primaryText=\"Crear {{'IMÁGENES' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('IMÁGENES' | lowercase )\"\n                       (ionCancel)=\"this.imagesService.searchValue = ''; imagesService.getImages()\"\n                       (keyup.enter)=\"imagesService.getImages()\"\n                       [(ngModel)]=\"imagesService.searchValue\"></ion-searchbar>\n\n    <ion-card>\n\n        <ng-container *ngIf=\"!(loading.loading | async) && imagesService.images.length\">\n            <ion-item *ngFor=\"let image of imagesService.images; let index = index\">\n                <ion-label>\n                    <h3>{{ 'NOMBRE' | titlecase }}: {{ image.name }}</h3>\n                    <h3>{{ 'URL' | titlecase }}: {{ image.url }}</h3>\n                    <h3>{{ 'ENTRADAS' | titlecase }}:\n                    <ng-container *ngIf=\"image.posts.length\">\n                        <ng-container *ngFor=\"let post of image.posts; let last = last\">\n                        <a routerLink=\"/posts/{{ post.id }}/edit\">{{ post.name }}</a><span *ngIf=\"!last\">, </span>\n                        </ng-container>\n                    </ng-container>\n                    </h3>\n                </ion-label>\n\n\n                <ion-button item-right fill=\"clear\" color=\"success\" [routerLink]=\"'/images/' + image.id + '/edit'\">\n                    <ion-icon name=\"create-outline\"></ion-icon>\n                </ion-button>\n                <!--<ion-button item-right fill=\"clear\" color=\"success\" (click)=\"null\">\n                    <ion-icon name=\"eye-outline\"></ion-icon>\n                </ion-button>-->\n                <ion-button item-right fill=\"clear\" color=\"danger\" (click)=\"imagesService.deleteImage(image.id)\">\n                    <ion-icon name=\"trash-outline\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </ng-container>\n\n        <ng-container *ngIf=\"!(loading.loading | async) && !imagesService.images.length\">\n            <ion-item>\n                <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n                <ion-label><h2>No se encontraron {{'IMÁGENES' | titlecase}}</h2></ion-label>\n                <ion-button [routerLink]=\"'/images/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                    Crear {{'IMÁGENES' | titlecase}}\n                    <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </ng-container>\n\n    </ion-card>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"imagesService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"imagesService.getImages(imagesService.meta.current_page - 1)\"\n                        [disabled]=\"imagesService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{imagesService.meta.current_page}}\n                /{{imagesService.meta.last_page}} {{imagesService.meta.from}}-{{imagesService.meta.to}}\n                /{{imagesService.meta.total}} </ion-button>\n            <ion-button (click)=\"imagesService.getImages(imagesService.meta.current_page + 1)\"\n                        [disabled]=\"imagesService.meta.current_page == imagesService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/images/images.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"IMÁGENES\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/images/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'IMÁGENES'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/images/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'IMÁGENES' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/images/images-create/images-create.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/images/images-create/images-create.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlcy9pbWFnZXMtY3JlYXRlL2ltYWdlcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/images/images-create/images-create.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/images/images-create/images-create.component.ts ***!
  \*****************************************************************/
/*! exports provided: ImagesCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesCreateComponent", function() { return ImagesCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images.service */ "./src/app/images/images.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let ImagesCreateComponent = class ImagesCreateComponent {
    constructor(imagesService, route, platform) {
        this.imagesService = imagesService;
        this.route = route;
        this.platform = platform;
        this.id = null;
        this.formValid = false;
    }
    ngOnInit() {
        this.clearPosts();
    }
    ngAfterViewInit() {
        this.imageForm.imagesForm.valueChanges.subscribe((data) => {
            this.imagesService.imagesFormValid.next(this.imageForm.imagesForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.imagesService.createImage();
        this.imagesService.image = {};
    }
};
ImagesCreateComponent.ctorParameters = () => [
    { type: _images_service__WEBPACK_IMPORTED_MODULE_2__["ImagesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
ImagesCreateComponent.propDecorators = {
    imageForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['imageForm',] }]
};
ImagesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-images-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./images-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-create/images-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./images-create.component.scss */ "./src/app/images/images-create/images-create.component.scss")).default]
    })
], ImagesCreateComponent);



/***/ }),

/***/ "./src/app/images/images-duplicate/images-duplicate.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/images/images-duplicate/images-duplicate.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlcy9pbWFnZXMtZHVwbGljYXRlL2ltYWdlcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/images/images-duplicate/images-duplicate.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/images/images-duplicate/images-duplicate.component.ts ***!
  \***********************************************************************/
/*! exports provided: ImagesDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesDuplicateComponent", function() { return ImagesDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ImagesDuplicateComponent = class ImagesDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
ImagesDuplicateComponent.ctorParameters = () => [];
ImagesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-images-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./images-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-duplicate/images-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./images-duplicate.component.scss */ "./src/app/images/images-duplicate/images-duplicate.component.scss")).default]
    })
], ImagesDuplicateComponent);



/***/ }),

/***/ "./src/app/images/images-edit/images-edit.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/images/images-edit/images-edit.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlcy9pbWFnZXMtZWRpdC9pbWFnZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/images/images-edit/images-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/images/images-edit/images-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: ImagesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesEditComponent", function() { return ImagesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images.service */ "./src/app/images/images.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let ImagesEditComponent = class ImagesEditComponent {
    constructor(imagesService, route, platform) {
        this.imagesService = imagesService;
        this.route = route;
        this.platform = platform;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.imagesService.editImage(this.id);
    }
    ngAfterViewInit() {
        this.imageForm.imagesForm.valueChanges.subscribe((data) => {
            this.imagesService.imagesFormValid.next(this.imageForm.imagesForm.valid);
        });
    }
};
ImagesEditComponent.ctorParameters = () => [
    { type: _images_service__WEBPACK_IMPORTED_MODULE_2__["ImagesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
ImagesEditComponent.propDecorators = {
    imageForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['imageForm',] }]
};
ImagesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-images-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./images-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-edit/images-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./images-edit.component.scss */ "./src/app/images/images-edit/images-edit.component.scss")).default]
    })
], ImagesEditComponent);



/***/ }),

/***/ "./src/app/images/images-form/images-form.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/images/images-form/images-form.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlcy9pbWFnZXMtZm9ybS9pbWFnZXMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/images/images-form/images-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/images/images-form/images-form.component.ts ***!
  \*************************************************************/
/*! exports provided: ImagesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesFormComponent", function() { return ImagesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images.service */ "./src/app/images/images.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let ImagesFormComponent = class ImagesFormComponent {
    constructor(imagesService, toTitlecase) {
        this.imagesService = imagesService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'url': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('URL') + ' es obligatorio.' },
            ],
            'post_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('ENTRADAS') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setPostIds
    setPostIds(event) {
        let postIds = null;
        if (event.value.length) {
            postIds = [];
            for (let i = 0; i < event.value.length; i++) {
                postIds.push(event.value[i].id);
            }
        }
        this.imagesService.image.post_ids = postIds;
    }
};
ImagesFormComponent.ctorParameters = () => [
    { type: _images_service__WEBPACK_IMPORTED_MODULE_2__["ImagesService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
ImagesFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    imagesForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['imagesForm',] }]
};
ImagesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-images-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./images-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-form/images-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./images-form.component.scss */ "./src/app/images/images-form/images-form.component.scss")).default]
    })
], ImagesFormComponent);



/***/ }),

/***/ "./src/app/images/images-list/images-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/images/images-list/images-list.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlcy9pbWFnZXMtbGlzdC9pbWFnZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/images/images-list/images-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/images/images-list/images-list.component.ts ***!
  \*************************************************************/
/*! exports provided: ImagesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesListComponent", function() { return ImagesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images.service */ "./src/app/images/images.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let ImagesListComponent = class ImagesListComponent {
    constructor(imagesService, api, loading) {
        this.imagesService = imagesService;
        this.api = api;
        this.loading = loading;
    }
    ngOnInit() {
        this.imagesService.getImages();
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
ImagesListComponent.ctorParameters = () => [
    { type: _images_service__WEBPACK_IMPORTED_MODULE_2__["ImagesService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }
];
ImagesListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
ImagesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-images-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./images-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images-list/images-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./images-list.component.scss */ "./src/app/images/images-list/images-list.component.scss")).default]
    })
], ImagesListComponent);



/***/ }),

/***/ "./src/app/images/images-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/images/images-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ImagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesPageRoutingModule", function() { return ImagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _images_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images.page */ "./src/app/images/images.page.ts");
/* harmony import */ var _images_edit_images_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images-edit/images-edit.component */ "./src/app/images/images-edit/images-edit.component.ts");
/* harmony import */ var _images_create_images_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images-create/images-create.component */ "./src/app/images/images-create/images-create.component.ts");
/* harmony import */ var _images_list_images_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images-list/images-list.component */ "./src/app/images/images-list/images-list.component.ts");







const routes = [
    {
        path: '',
        component: _images_page__WEBPACK_IMPORTED_MODULE_3__["ImagesPage"]
    },
    {
        path: 'list',
        component: _images_list_images_list_component__WEBPACK_IMPORTED_MODULE_6__["ImagesListComponent"]
    },
    {
        path: 'create',
        component: _images_create_images_create_component__WEBPACK_IMPORTED_MODULE_5__["ImagesCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _images_edit_images_edit_component__WEBPACK_IMPORTED_MODULE_4__["ImagesEditComponent"]
    },
];
let ImagesPageRoutingModule = class ImagesPageRoutingModule {
};
ImagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], ImagesPageRoutingModule);



/***/ }),

/***/ "./src/app/images/images.module.ts":
/*!*****************************************!*\
  !*** ./src/app/images/images.module.ts ***!
  \*****************************************/
/*! exports provided: ImagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesPageModule", function() { return ImagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _images_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images-routing.module */ "./src/app/images/images-routing.module.ts");
/* harmony import */ var _images_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images.page */ "./src/app/images/images.page.ts");
/* harmony import */ var _images_list_images_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images-list/images-list.component */ "./src/app/images/images-list/images-list.component.ts");
/* harmony import */ var _images_create_images_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images-create/images-create.component */ "./src/app/images/images-create/images-create.component.ts");
/* harmony import */ var _images_duplicate_images_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images-duplicate/images-duplicate.component */ "./src/app/images/images-duplicate/images-duplicate.component.ts");
/* harmony import */ var _images_edit_images_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images-edit/images-edit.component */ "./src/app/images/images-edit/images-edit.component.ts");
/* harmony import */ var _images_form_images_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images-form/images-form.component */ "./src/app/images/images-form/images-form.component.ts");













let ImagesPageModule = class ImagesPageModule {
};
ImagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _images_routing_module__WEBPACK_IMPORTED_MODULE_6__["ImagesPageRoutingModule"]
        ],
        declarations: [
            _images_page__WEBPACK_IMPORTED_MODULE_7__["ImagesPage"],
            _images_list_images_list_component__WEBPACK_IMPORTED_MODULE_8__["ImagesListComponent"],
            _images_create_images_create_component__WEBPACK_IMPORTED_MODULE_9__["ImagesCreateComponent"],
            _images_duplicate_images_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["ImagesDuplicateComponent"],
            _images_edit_images_edit_component__WEBPACK_IMPORTED_MODULE_11__["ImagesEditComponent"],
            _images_form_images_form_component__WEBPACK_IMPORTED_MODULE_12__["ImagesFormComponent"],
        ]
    })
], ImagesPageModule);



/***/ }),

/***/ "./src/app/images/images.page.scss":
/*!*****************************************!*\
  !*** ./src/app/images/images.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlcy9pbWFnZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/images/images.page.ts":
/*!***************************************!*\
  !*** ./src/app/images/images.page.ts ***!
  \***************************************/
/*! exports provided: ImagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesPage", function() { return ImagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ImagesPage = class ImagesPage {
    constructor() { }
    ngOnInit() {
    }
};
ImagesPage.ctorParameters = () => [];
ImagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-images',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./images.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/images/images.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./images.page.scss */ "./src/app/images/images.page.scss")).default]
    })
], ImagesPage);



/***/ }),

/***/ "./src/app/images/images.service.ts":
/*!******************************************!*\
  !*** ./src/app/images/images.service.ts ***!
  \******************************************/
/*! exports provided: ImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesService", function() { return ImagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let ImagesService = class ImagesService {
    constructor(api, alert, toast, router, navigation) {
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
    getImages(page = this.page, perPage = this.perPage) {
        this.api.get(this.imagesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.images = res.data;
            this.imageLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editImage(id) {
        this.api.get(this.imagesUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.image = res.data.model;
            this.imageLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateImage() {
        this.api.put(this.imagesUrl + '/' + this.image.id, {
            model: this.image,
            pivots: {
                post: this.image.posts,
            }
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getImages(1);
        });
    }
    createImage() {
        this.api.get(this.imagesUrl + '/create')
            .subscribe((res) => {
            this.image = {};
            this.imageLists = res.lists;
        });
    }
    storeImage() {
        this.api.post(this.imagesUrl, {
            model: this.image,
            pivots: {
                post: this.image.posts,
            }
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getImages(1);
        });
    }
    deleteImage(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.imagesUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getImages(1);
                });
            }
            else {
                return;
            }
        });
    }
};
ImagesService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
ImagesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ImagesService);



/***/ })

}]);
//# sourceMappingURL=images-images-module-es2015.js.map