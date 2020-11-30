(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comments-comments-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments-create/comments-create.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments-create/comments-create.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/comments'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"commentsService.storeComment()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!commentsService.commentsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'COMENTARIOS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-comments-form #commentForm [model]=\"commentsService.comment\"></app-comments-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments-duplicate/comments-duplicate.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments-duplicate/comments-duplicate.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  Comments duplicate works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments-edit/comments-edit.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments-edit/comments-edit.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/comments'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"commentsService.updateComment()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!commentsService.commentsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'COMENTARIOS' | titlecase}}: {{ commentsService.comment?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-comments-form #commentForm [model]=\"commentsService.comment\"></app-comments-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments-form/comments-form.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments-form/comments-form.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #commentsForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- post_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'ENTRADA' | titlecase }}</ion-label>\n        <ionic-selectable name=\"post_id\"\n                          id=\"post_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.post\"\n                          [items]=\"commentsService.commentLists.Post\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('ENTRADAS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('ENTRADAS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setPostId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.post_id\">\n            <div class=\"error-message\" *ngIf=\"commentsForm.form.controls['post_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end post_id -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"commentsForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- body -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'CUERPO' | titlecase }}</ion-label>\n                <ion-textarea [(ngModel)]=\"model.body\"\n                              name=\"body\"\n                              id=\"body-field\"\n                              [required]=\"true\"\n                              rows=\"6\"\n                              placeholder=\"\"></ion-textarea>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.body\">\n                    <div class=\"error-message\" *ngIf=\"commentsForm.form.controls['body']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end body -->\n\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments-list/comments-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments-list/comments-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'COMENTARIOS' | titlecase}}\"\n                 primaryLink=\"comments/create\"\n                 primaryText=\"Crear {{'COMENTARIOS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('COMENTARIOS' | lowercase )\"\n                       (ionCancel)=\"this.commentsService.searchValue = ''; commentsService.getComments()\"\n                       (keyup.enter)=\"commentsService.getComments()\"\n                       [(ngModel)]=\"commentsService.searchValue\"></ion-searchbar>\n\n    <ion-card>\n\n        <ng-container *ngIf=\"!(loading.loading | async) && commentsService.comments.length\">\n            <ion-item *ngFor=\"let comment of commentsService.comments; let index = index\">\n                <ion-label>\n                    <h3>{{ 'NOMBRE' | titlecase }}: {{ comment.name }}</h3>\n                    <h3>{{ 'CUERPO' | titlecase }}: {{ comment.body }}</h3>\n                    <h3>{{ 'ENTRADAS' | titlecase }}: <a routerLink=\"/posts/{{ comment.post.id }}/edit\">{{ comment.post.name }}</a></h3>\n                </ion-label>\n\n\n                <ion-button item-right fill=\"clear\" color=\"success\" [routerLink]=\"'/comments/' + comment.id + '/edit'\">\n                    <ion-icon name=\"create-outline\"></ion-icon>\n                </ion-button>\n                <!--<ion-button item-right fill=\"clear\" color=\"success\" (click)=\"null\">\n                    <ion-icon name=\"eye-outline\"></ion-icon>\n                </ion-button>-->\n                <ion-button item-right fill=\"clear\" color=\"danger\" (click)=\"commentsService.deleteComment(comment.id)\">\n                    <ion-icon name=\"trash-outline\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </ng-container>\n\n        <ng-container *ngIf=\"!(loading.loading | async) && !commentsService.comments.length\">\n            <ion-item>\n                <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n                <ion-label><h2>No se encontraron {{'COMENTARIOS' | titlecase}}</h2></ion-label>\n                <ion-button [routerLink]=\"'/comments/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                    Crear {{'COMENTARIOS' | titlecase}}\n                    <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </ng-container>\n\n    </ion-card>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"commentsService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"commentsService.getComments(commentsService.meta.current_page - 1)\"\n                        [disabled]=\"commentsService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{commentsService.meta.current_page}}\n                /{{commentsService.meta.last_page}} {{commentsService.meta.from}}-{{commentsService.meta.to}}\n                /{{commentsService.meta.total}} </ion-button>\n            <ion-button (click)=\"commentsService.getComments(commentsService.meta.current_page + 1)\"\n                        [disabled]=\"commentsService.meta.current_page == commentsService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"COMENTARIOS\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/comments/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'COMENTARIOS'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/comments/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'COMENTARIOS' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/comments/comments-create/comments-create.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/comments/comments-create/comments-create.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnRzLWNyZWF0ZS9jb21tZW50cy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/comments/comments-create/comments-create.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/comments/comments-create/comments-create.component.ts ***!
  \***********************************************************************/
/*! exports provided: CommentsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsCreateComponent", function() { return CommentsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comments.service */ "./src/app/comments/comments.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let CommentsCreateComponent = class CommentsCreateComponent {
    constructor(commentsService, route, platform) {
        this.commentsService = commentsService;
        this.route = route;
        this.platform = platform;
        this.id = null;
        this.formValid = false;
    }
    ngOnInit() {
        this.clearPosts();
    }
    ngAfterViewInit() {
        this.commentForm.commentsForm.valueChanges.subscribe((data) => {
            this.commentsService.commentsFormValid.next(this.commentForm.commentsForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.commentsService.createComment();
        this.commentsService.comment = {};
    }
};
CommentsCreateComponent.ctorParameters = () => [
    { type: _comments_service__WEBPACK_IMPORTED_MODULE_2__["CommentsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
CommentsCreateComponent.propDecorators = {
    commentForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['commentForm',] }]
};
CommentsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comments-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comments-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments-create/comments-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comments-create.component.scss */ "./src/app/comments/comments-create/comments-create.component.scss")).default]
    })
], CommentsCreateComponent);



/***/ }),

/***/ "./src/app/comments/comments-duplicate/comments-duplicate.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/comments/comments-duplicate/comments-duplicate.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnRzLWR1cGxpY2F0ZS9jb21tZW50cy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/comments/comments-duplicate/comments-duplicate.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/comments/comments-duplicate/comments-duplicate.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CommentsDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsDuplicateComponent", function() { return CommentsDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CommentsDuplicateComponent = class CommentsDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
CommentsDuplicateComponent.ctorParameters = () => [];
CommentsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comments-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comments-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments-duplicate/comments-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comments-duplicate.component.scss */ "./src/app/comments/comments-duplicate/comments-duplicate.component.scss")).default]
    })
], CommentsDuplicateComponent);



/***/ }),

/***/ "./src/app/comments/comments-edit/comments-edit.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/comments/comments-edit/comments-edit.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnRzLWVkaXQvY29tbWVudHMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/comments/comments-edit/comments-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/comments/comments-edit/comments-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: CommentsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsEditComponent", function() { return CommentsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comments.service */ "./src/app/comments/comments.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let CommentsEditComponent = class CommentsEditComponent {
    constructor(commentsService, route, platform) {
        this.commentsService = commentsService;
        this.route = route;
        this.platform = platform;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.commentsService.editComment(this.id);
    }
    ngAfterViewInit() {
        this.commentForm.commentsForm.valueChanges.subscribe((data) => {
            this.commentsService.commentsFormValid.next(this.commentForm.commentsForm.valid);
        });
    }
};
CommentsEditComponent.ctorParameters = () => [
    { type: _comments_service__WEBPACK_IMPORTED_MODULE_2__["CommentsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
CommentsEditComponent.propDecorators = {
    commentForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['commentForm',] }]
};
CommentsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comments-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comments-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments-edit/comments-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comments-edit.component.scss */ "./src/app/comments/comments-edit/comments-edit.component.scss")).default]
    })
], CommentsEditComponent);



/***/ }),

/***/ "./src/app/comments/comments-form/comments-form.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/comments/comments-form/comments-form.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnRzLWZvcm0vY29tbWVudHMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/comments/comments-form/comments-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/comments/comments-form/comments-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: CommentsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsFormComponent", function() { return CommentsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comments.service */ "./src/app/comments/comments.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let CommentsFormComponent = class CommentsFormComponent {
    constructor(commentsService, toTitlecase) {
        this.commentsService = commentsService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'body': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CUERPO') + ' es obligatorio.' },
            ],
            'post_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('ENTRADA') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setPostId
    setPostId(event) {
        this.commentsService.comment.post_id = event.value ? event.value.id : null;
    }
};
CommentsFormComponent.ctorParameters = () => [
    { type: _comments_service__WEBPACK_IMPORTED_MODULE_2__["CommentsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
CommentsFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    commentsForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['commentsForm',] }]
};
CommentsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comments-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comments-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments-form/comments-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comments-form.component.scss */ "./src/app/comments/comments-form/comments-form.component.scss")).default]
    })
], CommentsFormComponent);



/***/ }),

/***/ "./src/app/comments/comments-list/comments-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/comments/comments-list/comments-list.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnRzLWxpc3QvY29tbWVudHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/comments/comments-list/comments-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/comments/comments-list/comments-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: CommentsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsListComponent", function() { return CommentsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comments.service */ "./src/app/comments/comments.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let CommentsListComponent = class CommentsListComponent {
    constructor(commentsService, api, loading) {
        this.commentsService = commentsService;
        this.api = api;
        this.loading = loading;
    }
    ngOnInit() {
        this.commentsService.getComments();
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
CommentsListComponent.ctorParameters = () => [
    { type: _comments_service__WEBPACK_IMPORTED_MODULE_2__["CommentsService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }
];
CommentsListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
CommentsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comments-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comments-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments-list/comments-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comments-list.component.scss */ "./src/app/comments/comments-list/comments-list.component.scss")).default]
    })
], CommentsListComponent);



/***/ }),

/***/ "./src/app/comments/comments-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/comments/comments-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CommentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsPageRoutingModule", function() { return CommentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _comments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments.page */ "./src/app/comments/comments.page.ts");
/* harmony import */ var _comments_edit_comments_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comments-edit/comments-edit.component */ "./src/app/comments/comments-edit/comments-edit.component.ts");
/* harmony import */ var _comments_create_comments_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comments-create/comments-create.component */ "./src/app/comments/comments-create/comments-create.component.ts");
/* harmony import */ var _comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comments-list/comments-list.component */ "./src/app/comments/comments-list/comments-list.component.ts");







const routes = [
    {
        path: '',
        component: _comments_page__WEBPACK_IMPORTED_MODULE_3__["CommentsPage"]
    },
    {
        path: 'list',
        component: _comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_6__["CommentsListComponent"]
    },
    {
        path: 'create',
        component: _comments_create_comments_create_component__WEBPACK_IMPORTED_MODULE_5__["CommentsCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _comments_edit_comments_edit_component__WEBPACK_IMPORTED_MODULE_4__["CommentsEditComponent"]
    },
];
let CommentsPageRoutingModule = class CommentsPageRoutingModule {
};
CommentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], CommentsPageRoutingModule);



/***/ }),

/***/ "./src/app/comments/comments.module.ts":
/*!*********************************************!*\
  !*** ./src/app/comments/comments.module.ts ***!
  \*********************************************/
/*! exports provided: CommentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsPageModule", function() { return CommentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _comments_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comments-routing.module */ "./src/app/comments/comments-routing.module.ts");
/* harmony import */ var _comments_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comments.page */ "./src/app/comments/comments.page.ts");
/* harmony import */ var _comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comments-list/comments-list.component */ "./src/app/comments/comments-list/comments-list.component.ts");
/* harmony import */ var _comments_create_comments_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comments-create/comments-create.component */ "./src/app/comments/comments-create/comments-create.component.ts");
/* harmony import */ var _comments_duplicate_comments_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comments-duplicate/comments-duplicate.component */ "./src/app/comments/comments-duplicate/comments-duplicate.component.ts");
/* harmony import */ var _comments_edit_comments_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comments-edit/comments-edit.component */ "./src/app/comments/comments-edit/comments-edit.component.ts");
/* harmony import */ var _comments_form_comments_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comments-form/comments-form.component */ "./src/app/comments/comments-form/comments-form.component.ts");













let CommentsPageModule = class CommentsPageModule {
};
CommentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _comments_routing_module__WEBPACK_IMPORTED_MODULE_6__["CommentsPageRoutingModule"]
        ],
        declarations: [
            _comments_page__WEBPACK_IMPORTED_MODULE_7__["CommentsPage"],
            _comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_8__["CommentsListComponent"],
            _comments_create_comments_create_component__WEBPACK_IMPORTED_MODULE_9__["CommentsCreateComponent"],
            _comments_duplicate_comments_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["CommentsDuplicateComponent"],
            _comments_edit_comments_edit_component__WEBPACK_IMPORTED_MODULE_11__["CommentsEditComponent"],
            _comments_form_comments_form_component__WEBPACK_IMPORTED_MODULE_12__["CommentsFormComponent"],
        ]
    })
], CommentsPageModule);



/***/ }),

/***/ "./src/app/comments/comments.page.scss":
/*!*********************************************!*\
  !*** ./src/app/comments/comments.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/comments/comments.page.ts":
/*!*******************************************!*\
  !*** ./src/app/comments/comments.page.ts ***!
  \*******************************************/
/*! exports provided: CommentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsPage", function() { return CommentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CommentsPage = class CommentsPage {
    constructor() { }
    ngOnInit() {
    }
};
CommentsPage.ctorParameters = () => [];
CommentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comments',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comments.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comments.page.scss */ "./src/app/comments/comments.page.scss")).default]
    })
], CommentsPage);



/***/ }),

/***/ "./src/app/comments/comments.service.ts":
/*!**********************************************!*\
  !*** ./src/app/comments/comments.service.ts ***!
  \**********************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let CommentsService = class CommentsService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.commentsUrl = 'comments';
        this.commentsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.comments = [];
        this.comment = {};
        this.commentLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    getComments(page = this.page, perPage = this.perPage) {
        this.api.get(this.commentsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.comments = res.data;
            this.commentLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editComment(id) {
        this.api.get(this.commentsUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.comment = res.data.model;
            this.commentLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateComment() {
        this.api.put(this.commentsUrl + '/' + this.comment.id, {
            model: this.comment,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getComments(1);
        });
    }
    createComment() {
        this.api.get(this.commentsUrl + '/create')
            .subscribe((res) => {
            this.comment = {};
            this.commentLists = res.lists;
        });
    }
    storeComment() {
        this.api.post(this.commentsUrl, {
            model: this.comment,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getComments(1);
        });
    }
    deleteComment(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.commentsUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getComments(1);
                });
            }
            else {
                return;
            }
        });
    }
};
CommentsService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
CommentsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommentsService);



/***/ })

}]);
//# sourceMappingURL=comments-comments-module-es2015.js.map