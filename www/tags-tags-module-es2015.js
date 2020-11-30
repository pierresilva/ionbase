(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tags-tags-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-create/tags-create.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-create/tags-create.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/tags'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"tagsService.storeTag()\"\n                        color=\"success\"\n                        fill=\"outline\"\n                        [disabled]=\"!tagsService.tagsFormValid.value\"> Guardar\n                <ion-icon slot=\"icon-only\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'ETIQUETAS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-tags-form #tagForm [model]=\"tagsService.tag\"></app-tags-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-duplicate/tags-duplicate.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-duplicate/tags-duplicate.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  Tags duplicate works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-edit/tags-edit.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-edit/tags-edit.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/tags'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"tagsService.updateTag()\"\n                        color=\"success\"\n                        fill=\"outline\"\n                        [disabled]=\"!tagsService.tagsFormValid.value\"> Guardar\n                <ion-icon slot=\"icon-only\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'ETIQUETAS' | titlecase}}: {{ tagsService.tag?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-tags-form #tagForm [model]=\"tagsService.tag\"></app-tags-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-form/tags-form.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-form/tags-form.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #tagsForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- post_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'ENTRADAS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"post_ids\"\n                          id=\"post_ids-field\"\n                          [(ngModel)]=\"model.posts\"\n                          [items]=\"tagsService.tagLists.Post\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('ENTRADAS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('ENTRADAS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setPostIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.post_ids\">\n            <div class=\"error-message\" *ngIf=\"tagsForm.form.controls['post_ids']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end post_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"tagsForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n</form>\n\n<pre>\n{{ model | json }}\n</pre>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-list/tags-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-list/tags-list.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'ETIQUETAS' | titlecase}}\"\n                 primaryLink=\"tags/create\"\n                 primaryText=\"Crear {{'ETIQUETAS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('ETIQUETAS' | lowercase )\"\n                       (ionCancel)=\"this.tagsService.searchValue = ''; tagsService.getTags()\"\n                       (keyup.enter)=\"tagsService.getTags()\"\n                       [(ngModel)]=\"tagsService.searchValue\"></ion-searchbar>\n\n    <ion-card>\n\n        <ng-container *ngIf=\"!(loading.loading | async) && tagsService.tags.length\">\n            <ion-item *ngFor=\"let tag of tagsService.tags; let index = index\">\n                <ion-label>\n                    <h3>{{ 'NOMBRE' | titlecase }}: {{ tag.name }}</h3>\n                    <h3>{{ 'ENTRADAS' | titlecase }}:\n                    <ng-container *ngIf=\"tag.posts.length\">\n                        <ng-container *ngFor=\"let post of tag.posts; let last = last\">\n                        <a routerLink=\"/posts/{{ post.id }}/edit\">{{ post.name }}</a><span *ngIf=\"!last\">, </span>\n                        </ng-container>\n                    </ng-container>\n                    </h3>\n                </ion-label>\n\n\n                <ion-button item-right fill=\"clear\" color=\"success\" [routerLink]=\"'/tags/' + tag.id + '/edit'\">\n                    <ion-icon name=\"create-outline\"></ion-icon>\n                </ion-button>\n                <!--<ion-button item-right fill=\"clear\" color=\"success\" (click)=\"null\">\n                    <ion-icon name=\"eye-outline\"></ion-icon>\n                </ion-button>-->\n                <ion-button item-right fill=\"clear\" color=\"danger\" (click)=\"tagsService.deleteTag(tag.id)\">\n                    <ion-icon name=\"trash-outline\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </ng-container>\n\n        <ng-container *ngIf=\"!(loading.loading | async) && !tagsService.tags.length\">\n            <ion-item>\n                <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n                <ion-label><h2>No se encontraron {{'ETIQUETAS' | titlecase}}</h2></ion-label>\n                <ion-button [routerLink]=\"'/tags/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                    Crear {{'ETIQUETAS' | titlecase}}\n                    <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </ng-container>\n\n    </ion-card>\n\n</ion-content>\n\n<ion-footer>\n    <ion-row *ngIf=\"tagsService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"tagsService.getTags(tagsService.meta.current_page - 1)\"\n                        [disabled]=\"tagsService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{tagsService.meta.current_page}}\n                /{{tagsService.meta.last_page}} {{tagsService.meta.from}}-{{tagsService.meta.to}}\n                /{{tagsService.meta.total}} </ion-button>\n            <ion-button (click)=\"tagsService.getTags(tagsService.meta.current_page + 1)\"\n                        [disabled]=\"tagsService.meta.current_page == tagsService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"ETIQUETAS\"></app-main-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tags/tags-create/tags-create.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/tags/tags-create/tags-create.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhZ3MvdGFncy1jcmVhdGUvdGFncy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tags/tags-create/tags-create.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/tags/tags-create/tags-create.component.ts ***!
  \***********************************************************/
/*! exports provided: TagsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsCreateComponent", function() { return TagsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tags.service */ "./src/app/tags/tags.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let TagsCreateComponent = class TagsCreateComponent {
    constructor(tagsService, route) {
        this.tagsService = tagsService;
        this.route = route;
        this.id = null;
        this.formValid = false;
    }
    ngOnInit() {
        this.clearPosts();
    }
    ngAfterViewInit() {
        this.tagForm.tagsForm.valueChanges.subscribe((data) => {
            this.tagsService.tagsFormValid.next(this.tagForm.tagsForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.tagsService.createTag();
        this.tagsService.tag = {};
    }
};
TagsCreateComponent.ctorParameters = () => [
    { type: _tags_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
TagsCreateComponent.propDecorators = {
    tagForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['tagForm',] }]
};
TagsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tags-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tags-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-create/tags-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tags-create.component.scss */ "./src/app/tags/tags-create/tags-create.component.scss")).default]
    })
], TagsCreateComponent);



/***/ }),

/***/ "./src/app/tags/tags-duplicate/tags-duplicate.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/tags/tags-duplicate/tags-duplicate.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhZ3MvdGFncy1kdXBsaWNhdGUvdGFncy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tags/tags-duplicate/tags-duplicate.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tags/tags-duplicate/tags-duplicate.component.ts ***!
  \*****************************************************************/
/*! exports provided: TagsDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsDuplicateComponent", function() { return TagsDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TagsDuplicateComponent = class TagsDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
TagsDuplicateComponent.ctorParameters = () => [];
TagsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tags-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tags-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-duplicate/tags-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tags-duplicate.component.scss */ "./src/app/tags/tags-duplicate/tags-duplicate.component.scss")).default]
    })
], TagsDuplicateComponent);



/***/ }),

/***/ "./src/app/tags/tags-edit/tags-edit.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/tags/tags-edit/tags-edit.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhZ3MvdGFncy1lZGl0L3RhZ3MtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tags/tags-edit/tags-edit.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/tags/tags-edit/tags-edit.component.ts ***!
  \*******************************************************/
/*! exports provided: TagsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsEditComponent", function() { return TagsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tags.service */ "./src/app/tags/tags.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let TagsEditComponent = class TagsEditComponent {
    constructor(tagsService, route) {
        this.tagsService = tagsService;
        this.route = route;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.tagsService.editTag(this.id);
    }
    ngAfterViewInit() {
        this.tagForm.tagsForm.valueChanges.subscribe((data) => {
            this.tagsService.tagsFormValid.next(this.tagForm.tagsForm.valid);
        });
    }
};
TagsEditComponent.ctorParameters = () => [
    { type: _tags_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
TagsEditComponent.propDecorators = {
    tagForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['tagForm',] }]
};
TagsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tags-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tags-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-edit/tags-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tags-edit.component.scss */ "./src/app/tags/tags-edit/tags-edit.component.scss")).default]
    })
], TagsEditComponent);



/***/ }),

/***/ "./src/app/tags/tags-form/tags-form.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/tags/tags-form/tags-form.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhZ3MvdGFncy1mb3JtL3RhZ3MtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tags/tags-form/tags-form.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/tags/tags-form/tags-form.component.ts ***!
  \*******************************************************/
/*! exports provided: TagsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsFormComponent", function() { return TagsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tags.service */ "./src/app/tags/tags.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let TagsFormComponent = class TagsFormComponent {
    constructor(tagsService, toTitlecase) {
        this.tagsService = tagsService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
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
        this.tagsService.tag.post_ids = postIds;
    }
};
TagsFormComponent.ctorParameters = () => [
    { type: _tags_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
TagsFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    tagsForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['tagsForm',] }]
};
TagsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tags-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tags-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-form/tags-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tags-form.component.scss */ "./src/app/tags/tags-form/tags-form.component.scss")).default]
    })
], TagsFormComponent);



/***/ }),

/***/ "./src/app/tags/tags-list/tags-list.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/tags/tags-list/tags-list.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhZ3MvdGFncy1saXN0L3RhZ3MtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tags/tags-list/tags-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/tags/tags-list/tags-list.component.ts ***!
  \*******************************************************/
/*! exports provided: TagsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsListComponent", function() { return TagsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tags.service */ "./src/app/tags/tags.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let TagsListComponent = class TagsListComponent {
    constructor(tagsService, api, loading) {
        this.tagsService = tagsService;
        this.api = api;
        this.loading = loading;
    }
    ngOnInit() {
        this.tagsService.getTags();
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
TagsListComponent.ctorParameters = () => [
    { type: _tags_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }
];
TagsListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
TagsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tags-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tags-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags-list/tags-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tags-list.component.scss */ "./src/app/tags/tags-list/tags-list.component.scss")).default]
    })
], TagsListComponent);



/***/ }),

/***/ "./src/app/tags/tags-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tags/tags-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TagsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsPageRoutingModule", function() { return TagsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tags_edit_tags_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tags-edit/tags-edit.component */ "./src/app/tags/tags-edit/tags-edit.component.ts");
/* harmony import */ var _tags_create_tags_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tags-create/tags-create.component */ "./src/app/tags/tags-create/tags-create.component.ts");
/* harmony import */ var _tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tags-list/tags-list.component */ "./src/app/tags/tags-list/tags-list.component.ts");






const routes = [
    {
        path: '',
        component: _tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_5__["TagsListComponent"]
    },
    {
        path: 'create',
        component: _tags_create_tags_create_component__WEBPACK_IMPORTED_MODULE_4__["TagsCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _tags_edit_tags_edit_component__WEBPACK_IMPORTED_MODULE_3__["TagsEditComponent"]
    },
];
let TagsPageRoutingModule = class TagsPageRoutingModule {
};
TagsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], TagsPageRoutingModule);



/***/ }),

/***/ "./src/app/tags/tags.module.ts":
/*!*************************************!*\
  !*** ./src/app/tags/tags.module.ts ***!
  \*************************************/
/*! exports provided: TagsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsPageModule", function() { return TagsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _tags_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tags-routing.module */ "./src/app/tags/tags-routing.module.ts");
/* harmony import */ var _tags_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tags.page */ "./src/app/tags/tags.page.ts");
/* harmony import */ var _tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tags-list/tags-list.component */ "./src/app/tags/tags-list/tags-list.component.ts");
/* harmony import */ var _tags_create_tags_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tags-create/tags-create.component */ "./src/app/tags/tags-create/tags-create.component.ts");
/* harmony import */ var _tags_duplicate_tags_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tags-duplicate/tags-duplicate.component */ "./src/app/tags/tags-duplicate/tags-duplicate.component.ts");
/* harmony import */ var _tags_edit_tags_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tags-edit/tags-edit.component */ "./src/app/tags/tags-edit/tags-edit.component.ts");
/* harmony import */ var _tags_form_tags_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tags-form/tags-form.component */ "./src/app/tags/tags-form/tags-form.component.ts");













let TagsPageModule = class TagsPageModule {
};
TagsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _tags_routing_module__WEBPACK_IMPORTED_MODULE_6__["TagsPageRoutingModule"]
        ],
        declarations: [
            _tags_page__WEBPACK_IMPORTED_MODULE_7__["TagsPage"],
            _tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_8__["TagsListComponent"],
            _tags_create_tags_create_component__WEBPACK_IMPORTED_MODULE_9__["TagsCreateComponent"],
            _tags_duplicate_tags_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["TagsDuplicateComponent"],
            _tags_edit_tags_edit_component__WEBPACK_IMPORTED_MODULE_11__["TagsEditComponent"],
            _tags_form_tags_form_component__WEBPACK_IMPORTED_MODULE_12__["TagsFormComponent"],
        ]
    })
], TagsPageModule);



/***/ }),

/***/ "./src/app/tags/tags.page.scss":
/*!*************************************!*\
  !*** ./src/app/tags/tags.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhZ3MvdGFncy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tags/tags.page.ts":
/*!***********************************!*\
  !*** ./src/app/tags/tags.page.ts ***!
  \***********************************/
/*! exports provided: TagsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsPage", function() { return TagsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TagsPage = class TagsPage {
    constructor() { }
    ngOnInit() {
    }
};
TagsPage.ctorParameters = () => [];
TagsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tags',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tags.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tags.page.scss */ "./src/app/tags/tags.page.scss")).default]
    })
], TagsPage);



/***/ }),

/***/ "./src/app/tags/tags.service.ts":
/*!**************************************!*\
  !*** ./src/app/tags/tags.service.ts ***!
  \**************************************/
/*! exports provided: TagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return TagsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let TagsService = class TagsService {
    constructor(api, alert, toast, router, navigation) {
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
    getTags(page = this.page, perPage = this.perPage) {
        this.api.get(this.tagsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.tags = res.data;
            this.tagLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editTag(id) {
        this.api.get(this.tagsUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.tag = res.data.model;
            this.tagLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateTag() {
        this.api.put(this.tagsUrl + '/' + this.tag.id, {
            model: this.tag,
            pivots: {
                post: this.tag.posts,
            }
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getTags(1);
        });
    }
    createTag() {
        this.api.get(this.tagsUrl + '/create')
            .subscribe((res) => {
            this.tag = {};
            this.tagLists = res.lists;
        });
    }
    storeTag() {
        this.api.post(this.tagsUrl, {
            model: this.tag,
            pivots: {
                post: this.tag.posts,
            }
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getTags(1);
        });
    }
    deleteTag(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.tagsUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getTags(1);
                });
            }
            else {
                return;
            }
        });
    }
};
TagsService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
TagsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TagsService);



/***/ })

}]);
//# sourceMappingURL=tags-tags-module-es2015.js.map