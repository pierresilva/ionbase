(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coun-members-coun-members-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-members/coun-members-create/coun-members-create.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-members/coun-members-create/coun-members-create.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/coun-members'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"counMembersService.storeCounMember()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!counMembersService.counMembersFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'JUNTAS MIEMBROS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-coun-members-form #counMemberForm [model]=\"counMembersService.counMember\"></app-coun-members-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-members/coun-members-duplicate/coun-members-duplicate.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-members/coun-members-duplicate/coun-members-duplicate.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  CounMembers duplicate works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-members/coun-members-edit/coun-members-edit.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-members/coun-members-edit/coun-members-edit.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/coun-members'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"counMembersService.updateCounMember()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!counMembersService.counMembersFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'JUNTAS MIEMBROS' | titlecase}}: {{ counMembersService.counMember?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-coun-members-form #counMemberForm [model]=\"counMembersService.counMember\"></app-coun-members-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-members/coun-members-form/coun-members-form.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-members/coun-members-form/coun-members-form.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #counMembersForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- coun_meeting_citation_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'JUNTAS CITACIONES' | titlecase }}</ion-label>\n        <ionic-selectable name=\"coun_meeting_citation_ids\"\n                          id=\"coun_meeting_citation_ids-field\"\n                          [(ngModel)]=\"model.coun_meeting_citations\"\n                          [items]=\"counMembersService.counMemberLists.CounMeetingCitation\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('JUNTAS CITACIONES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('JUNTAS CITACIONES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setCounMeetingCitationIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.coun_meeting_citation_ids\">\n            <div class=\"error-message\" *ngIf=\"counMembersForm.form.controls['coun_meeting_citation_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end coun_meeting_citation_ids -->\n\n\n    <!-- user_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'USUARIO' | titlecase }}</ion-label>\n        <ionic-selectable name=\"user_id\"\n                          id=\"user_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.user\"\n                          [items]=\"counMembersService.counMemberLists.User\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('USUARIOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('USUARIOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setUserId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.user_id\">\n            <div class=\"error-message\" *ngIf=\"counMembersForm.form.controls['user_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end user_id -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"counMembersForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-members/coun-members-list/coun-members-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-members/coun-members-list/coun-members-list.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'JUNTAS MIEMBROS' | titlecase}}\"\n                 primaryLink=\"coun-members/create\"\n                 primaryText=\"Crear {{'JUNTAS MIEMBROS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('JUNTAS MIEMBROS' | lowercase )\"\n                       (ionCancel)=\"this.counMembersService.searchValue = ''; counMembersService.getCounMembers()\"\n                       (keyup.enter)=\"counMembersService.getCounMembers()\"\n                       [(ngModel)]=\"counMembersService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && counMembersService.counMembers?.length\">\n        <ion-card *ngFor=\"let counMember of counMembersService.counMembers; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ counMember?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'JUNTAS CITACIONES' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"counMember?.coun_meeting_citations?.length\">\n                                <ng-container *ngFor=\"let counMeetingCitation of counMember?.coun_meeting_citations; let last = last\">\n                                    <a routerLink=\"/coun-meeting-citations/{{ counMeetingCitation?.id }}/edit\">{{ counMeetingCitation?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'USUARIOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/users/{{ counMember?.user?.id }}/edit\">{{ counMember?.user?.name }}</a></div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/coun-members/' + counMember?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"counMembersService.deleteCounMember(counMember?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !counMembersService.counMembers?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'JUNTAS MIEMBROS' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/coun-members/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'JUNTAS MIEMBROS' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"counMembersService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"counMembersService.getCounMembers(counMembersService.meta.current_page - 1)\"\n                        [disabled]=\"counMembersService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{counMembersService.meta.current_page}}\n                /{{counMembersService.meta.last_page}} {{counMembersService.meta.from}}-{{counMembersService.meta.to}}\n                /{{counMembersService.meta.total}} </ion-button>\n            <ion-button (click)=\"counMembersService.getCounMembers(counMembersService.meta.current_page + 1)\"\n                        [disabled]=\"counMembersService.meta.current_page == counMembersService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-members/coun-members.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coun-members/coun-members.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"JUNTAS MIEMBROS\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/coun-members/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'JUNTAS MIEMBROS'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/coun-members/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'JUNTAS MIEMBROS' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/coun-members/coun-members-create/coun-members-create.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/coun-members/coun-members-create/coun-members-create.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW4tbWVtYmVycy9jb3VuLW1lbWJlcnMtY3JlYXRlL2NvdW4tbWVtYmVycy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/coun-members/coun-members-create/coun-members-create.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/coun-members/coun-members-create/coun-members-create.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CounMembersCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMembersCreateComponent", function() { return CounMembersCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _coun_members_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../coun-members.service */ "./src/app/coun-members/coun-members.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let CounMembersCreateComponent = class CounMembersCreateComponent {
    constructor(counMembersService, route, platform) {
        this.counMembersService = counMembersService;
        this.route = route;
        this.platform = platform;
        this.id = null;
        this.formValid = false;
    }
    ngOnInit() {
        this.clearPosts();
    }
    ngAfterViewInit() {
        this.counMemberForm.counMembersForm.valueChanges.subscribe((data) => {
            this.counMembersService.counMembersFormValid.next(this.counMemberForm.counMembersForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.counMembersService.createCounMember();
        this.counMembersService.counMember = {};
    }
};
CounMembersCreateComponent.ctorParameters = () => [
    { type: _coun_members_service__WEBPACK_IMPORTED_MODULE_2__["CounMembersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
CounMembersCreateComponent.propDecorators = {
    counMemberForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['counMemberForm',] }]
};
CounMembersCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coun-members-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coun-members-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-members/coun-members-create/coun-members-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coun-members-create.component.scss */ "./src/app/coun-members/coun-members-create/coun-members-create.component.scss")).default]
    })
], CounMembersCreateComponent);



/***/ }),

/***/ "./src/app/coun-members/coun-members-duplicate/coun-members-duplicate.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/coun-members/coun-members-duplicate/coun-members-duplicate.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW4tbWVtYmVycy9jb3VuLW1lbWJlcnMtZHVwbGljYXRlL2NvdW4tbWVtYmVycy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/coun-members/coun-members-duplicate/coun-members-duplicate.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/coun-members/coun-members-duplicate/coun-members-duplicate.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CounMembersDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMembersDuplicateComponent", function() { return CounMembersDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CounMembersDuplicateComponent = class CounMembersDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
CounMembersDuplicateComponent.ctorParameters = () => [];
CounMembersDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coun-members-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coun-members-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-members/coun-members-duplicate/coun-members-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coun-members-duplicate.component.scss */ "./src/app/coun-members/coun-members-duplicate/coun-members-duplicate.component.scss")).default]
    })
], CounMembersDuplicateComponent);



/***/ }),

/***/ "./src/app/coun-members/coun-members-edit/coun-members-edit.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/coun-members/coun-members-edit/coun-members-edit.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW4tbWVtYmVycy9jb3VuLW1lbWJlcnMtZWRpdC9jb3VuLW1lbWJlcnMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/coun-members/coun-members-edit/coun-members-edit.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/coun-members/coun-members-edit/coun-members-edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CounMembersEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMembersEditComponent", function() { return CounMembersEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _coun_members_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../coun-members.service */ "./src/app/coun-members/coun-members.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let CounMembersEditComponent = class CounMembersEditComponent {
    constructor(counMembersService, route, platform) {
        this.counMembersService = counMembersService;
        this.route = route;
        this.platform = platform;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.counMembersService.editCounMember(this.id);
    }
    ngAfterViewInit() {
        this.counMemberForm.counMembersForm.valueChanges.subscribe((data) => {
            this.counMembersService.counMembersFormValid.next(this.counMemberForm.counMembersForm.valid);
        });
    }
};
CounMembersEditComponent.ctorParameters = () => [
    { type: _coun_members_service__WEBPACK_IMPORTED_MODULE_2__["CounMembersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
CounMembersEditComponent.propDecorators = {
    counMemberForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['counMemberForm',] }]
};
CounMembersEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coun-members-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coun-members-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-members/coun-members-edit/coun-members-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coun-members-edit.component.scss */ "./src/app/coun-members/coun-members-edit/coun-members-edit.component.scss")).default]
    })
], CounMembersEditComponent);



/***/ }),

/***/ "./src/app/coun-members/coun-members-form/coun-members-form.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/coun-members/coun-members-form/coun-members-form.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW4tbWVtYmVycy9jb3VuLW1lbWJlcnMtZm9ybS9jb3VuLW1lbWJlcnMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/coun-members/coun-members-form/coun-members-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/coun-members/coun-members-form/coun-members-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CounMembersFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMembersFormComponent", function() { return CounMembersFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _coun_members_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../coun-members.service */ "./src/app/coun-members/coun-members.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let CounMembersFormComponent = class CounMembersFormComponent {
    constructor(counMembersService, toTitlecase) {
        this.counMembersService = counMembersService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'user_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('user - NAME') + ' es obligatorio.' },
            ],
            'coun_meeting_citation_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('JUNTAS CITACIONES') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setCounMeetingCitationIds
    setCounMeetingCitationIds(event) {
        let counMeetingCitationIds = null;
        if (event.value.length) {
            counMeetingCitationIds = [];
            for (let i = 0; i < event.value.length; i++) {
                counMeetingCitationIds.push(event.value[i].id);
            }
        }
        this.counMembersService.counMember.coun_meeting_citation_ids = counMeetingCitationIds;
    }
    // end setCounMeetingCitationIds
    // set setUserId
    setUserId(event) {
        this.counMembersService.counMember.user_id = event.value ? event.value.id : null;
    }
};
CounMembersFormComponent.ctorParameters = () => [
    { type: _coun_members_service__WEBPACK_IMPORTED_MODULE_2__["CounMembersService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
CounMembersFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    counMembersForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['counMembersForm',] }]
};
CounMembersFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coun-members-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coun-members-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-members/coun-members-form/coun-members-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coun-members-form.component.scss */ "./src/app/coun-members/coun-members-form/coun-members-form.component.scss")).default]
    })
], CounMembersFormComponent);



/***/ }),

/***/ "./src/app/coun-members/coun-members-list/coun-members-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/coun-members/coun-members-list/coun-members-list.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW4tbWVtYmVycy9jb3VuLW1lbWJlcnMtbGlzdC9jb3VuLW1lbWJlcnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/coun-members/coun-members-list/coun-members-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/coun-members/coun-members-list/coun-members-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CounMembersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMembersListComponent", function() { return CounMembersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _coun_members_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../coun-members.service */ "./src/app/coun-members/coun-members.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let CounMembersListComponent = class CounMembersListComponent {
    constructor(counMembersService, api, loading) {
        this.counMembersService = counMembersService;
        this.api = api;
        this.loading = loading;
    }
    ngOnInit() {
        this.counMembersService.getCounMembers();
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
CounMembersListComponent.ctorParameters = () => [
    { type: _coun_members_service__WEBPACK_IMPORTED_MODULE_2__["CounMembersService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }
];
CounMembersListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
CounMembersListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coun-members-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coun-members-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-members/coun-members-list/coun-members-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coun-members-list.component.scss */ "./src/app/coun-members/coun-members-list/coun-members-list.component.scss")).default]
    })
], CounMembersListComponent);



/***/ }),

/***/ "./src/app/coun-members/coun-members-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/coun-members/coun-members-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CounMembersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMembersPageRoutingModule", function() { return CounMembersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _coun_members_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coun-members.page */ "./src/app/coun-members/coun-members.page.ts");
/* harmony import */ var _coun_members_edit_coun_members_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coun-members-edit/coun-members-edit.component */ "./src/app/coun-members/coun-members-edit/coun-members-edit.component.ts");
/* harmony import */ var _coun_members_create_coun_members_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coun-members-create/coun-members-create.component */ "./src/app/coun-members/coun-members-create/coun-members-create.component.ts");
/* harmony import */ var _coun_members_list_coun_members_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coun-members-list/coun-members-list.component */ "./src/app/coun-members/coun-members-list/coun-members-list.component.ts");







const routes = [
    {
        path: '',
        component: _coun_members_page__WEBPACK_IMPORTED_MODULE_3__["CounMembersPage"]
    },
    {
        path: 'list',
        component: _coun_members_list_coun_members_list_component__WEBPACK_IMPORTED_MODULE_6__["CounMembersListComponent"]
    },
    {
        path: 'create',
        component: _coun_members_create_coun_members_create_component__WEBPACK_IMPORTED_MODULE_5__["CounMembersCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _coun_members_edit_coun_members_edit_component__WEBPACK_IMPORTED_MODULE_4__["CounMembersEditComponent"]
    },
];
let CounMembersPageRoutingModule = class CounMembersPageRoutingModule {
};
CounMembersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], CounMembersPageRoutingModule);



/***/ }),

/***/ "./src/app/coun-members/coun-members.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/coun-members/coun-members.module.ts ***!
  \*****************************************************/
/*! exports provided: CounMembersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMembersPageModule", function() { return CounMembersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _coun_members_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coun-members-routing.module */ "./src/app/coun-members/coun-members-routing.module.ts");
/* harmony import */ var _coun_members_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coun-members.page */ "./src/app/coun-members/coun-members.page.ts");
/* harmony import */ var _coun_members_list_coun_members_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coun-members-list/coun-members-list.component */ "./src/app/coun-members/coun-members-list/coun-members-list.component.ts");
/* harmony import */ var _coun_members_create_coun_members_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./coun-members-create/coun-members-create.component */ "./src/app/coun-members/coun-members-create/coun-members-create.component.ts");
/* harmony import */ var _coun_members_duplicate_coun_members_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./coun-members-duplicate/coun-members-duplicate.component */ "./src/app/coun-members/coun-members-duplicate/coun-members-duplicate.component.ts");
/* harmony import */ var _coun_members_edit_coun_members_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./coun-members-edit/coun-members-edit.component */ "./src/app/coun-members/coun-members-edit/coun-members-edit.component.ts");
/* harmony import */ var _coun_members_form_coun_members_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./coun-members-form/coun-members-form.component */ "./src/app/coun-members/coun-members-form/coun-members-form.component.ts");













let CounMembersPageModule = class CounMembersPageModule {
};
CounMembersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _coun_members_routing_module__WEBPACK_IMPORTED_MODULE_6__["CounMembersPageRoutingModule"]
        ],
        declarations: [
            _coun_members_page__WEBPACK_IMPORTED_MODULE_7__["CounMembersPage"],
            _coun_members_list_coun_members_list_component__WEBPACK_IMPORTED_MODULE_8__["CounMembersListComponent"],
            _coun_members_create_coun_members_create_component__WEBPACK_IMPORTED_MODULE_9__["CounMembersCreateComponent"],
            _coun_members_duplicate_coun_members_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["CounMembersDuplicateComponent"],
            _coun_members_edit_coun_members_edit_component__WEBPACK_IMPORTED_MODULE_11__["CounMembersEditComponent"],
            _coun_members_form_coun_members_form_component__WEBPACK_IMPORTED_MODULE_12__["CounMembersFormComponent"],
        ]
    })
], CounMembersPageModule);



/***/ }),

/***/ "./src/app/coun-members/coun-members.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/coun-members/coun-members.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW4tbWVtYmVycy9jb3VuLW1lbWJlcnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/coun-members/coun-members.page.ts":
/*!***************************************************!*\
  !*** ./src/app/coun-members/coun-members.page.ts ***!
  \***************************************************/
/*! exports provided: CounMembersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMembersPage", function() { return CounMembersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CounMembersPage = class CounMembersPage {
    constructor() { }
    ngOnInit() {
    }
};
CounMembersPage.ctorParameters = () => [];
CounMembersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coun-members',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coun-members.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coun-members/coun-members.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coun-members.page.scss */ "./src/app/coun-members/coun-members.page.scss")).default]
    })
], CounMembersPage);



/***/ }),

/***/ "./src/app/coun-members/coun-members.service.ts":
/*!******************************************************!*\
  !*** ./src/app/coun-members/coun-members.service.ts ***!
  \******************************************************/
/*! exports provided: CounMembersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounMembersService", function() { return CounMembersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let CounMembersService = class CounMembersService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.counMembersUrl = 'coun-members';
        this.counMembersFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.counMembers = [];
        this.counMember = {};
        this.counMemberLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    getCounMembers(page = this.page, perPage = this.perPage) {
        this.api.get(this.counMembersUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.counMembers = res.data;
            this.counMemberLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editCounMember(id) {
        this.api.get(this.counMembersUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.counMember = res.data.model;
            this.counMemberLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateCounMember() {
        this.api.put(this.counMembersUrl + '/' + this.counMember.id, {
            model: this.counMember,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getCounMembers(1);
        });
    }
    createCounMember() {
        this.api.get(this.counMembersUrl + '/create')
            .subscribe((res) => {
            this.counMember = {};
            this.counMemberLists = res.lists;
        });
    }
    storeCounMember() {
        this.api.post(this.counMembersUrl, {
            model: this.counMember,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getCounMembers(1);
        });
    }
    deleteCounMember(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.counMembersUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getCounMembers(1);
                });
            }
            else {
                return;
            }
        });
    }
};
CounMembersService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
CounMembersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CounMembersService);



/***/ })

}]);
//# sourceMappingURL=coun-members-coun-members-module-es2015.js.map