(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["files-files-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-create/files-create.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-create/files-create.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/files'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"filesService.storeFile()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!filesService.filesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'JUNTAS ARCHIVOS DE AGENDAS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-files-form #fileForm [model]=\"filesService.file\"></app-files-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-duplicate/files-duplicate.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-duplicate/files-duplicate.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  Files duplicate works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-edit/files-edit.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-edit/files-edit.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/files'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"filesService.updateFile()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!filesService.filesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'JUNTAS ARCHIVOS DE AGENDAS' | titlecase}}: {{ filesService.file?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-files-form #fileForm [model]=\"filesService.file\"></app-files-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-form/files-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-form/files-form.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #filesForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"filesForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- file -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'ARCHIVO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.file\"\n                            type=\"text\"\n                            name=\"file\"\n                            id=\"file-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.file\">\n                    <div class=\"error-message\" *ngIf=\"filesForm.form.controls['file']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end file -->\n\n\n            <!-- extension -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'EXTENSION' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.extension\"\n                            type=\"text\"\n                            name=\"extension\"\n                            id=\"extension-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.extension\">\n                    <div class=\"error-message\" *ngIf=\"filesForm.form.controls['extension']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end extension -->\n\n\n            <!-- mime -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'MIME' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.mime\"\n                            type=\"text\"\n                            name=\"mime\"\n                            id=\"mime-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.mime\">\n                    <div class=\"error-message\" *ngIf=\"filesForm.form.controls['mime']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end mime -->\n\n\n            <!-- url -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'URL' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.url\"\n                            type=\"text\"\n                            name=\"url\"\n                            id=\"url-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.url\">\n                    <div class=\"error-message\" *ngIf=\"filesForm.form.controls['url']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end url -->\n\n\n            <!-- fileable_type -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'ARCHIVABLE TIPO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.fileable_type\"\n                            type=\"text\"\n                            name=\"fileable_type\"\n                            id=\"fileable_type-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.fileable_type\">\n                    <div class=\"error-message\" *ngIf=\"filesForm.form.controls['fileable_type']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end fileable_type -->\n\n    <!-- name -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'ARCHIVABLE ID' | titlecase }}</ion-label>\n        <ion-input [(ngModel)]=\"model.filable_id\"\n                   type=\"number\"\n                   name=\"filable_id\"\n                   id=\"filable_id-field\"\n                   [required]=\"true\"\n                   placeholder=\"\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.name\">\n            <div class=\"error-message\" *ngIf=\"filesForm.form.controls['name']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end name -->\n\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-list/files-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-list/files-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'JUNTAS ARCHIVOS DE AGENDAS' | titlecase}}\"\n                 primaryLink=\"files/create\"\n                 primaryText=\"Crear {{'JUNTAS ARCHIVOS DE AGENDAS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('JUNTAS ARCHIVOS DE AGENDAS' | lowercase )\"\n                       (ionCancel)=\"this.filesService.searchValue = ''; filesService.getFiles()\"\n                       (keyup.enter)=\"filesService.getFiles()\"\n                       [(ngModel)]=\"filesService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && filesService.files?.length\">\n        <ion-card *ngFor=\"let file of filesService.files; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ file?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'ARCHIVO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ file?.file }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'EXTENSION' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ file?.extension }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'MIME' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ file?.mime }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'URL' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ file?.url }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'ARCHIVABLE TIPO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ file?.fileable_type }}</div>\n                    </ion-item>\n                <ion-item class=\"item-transparent\">\n                    <ion-label position=\"fixed\"><b>{{ 'ARCHIVABLE ID' | titlecase }}</b></ion-label>\n                    <div class=\"wrap-text\">{{ file?.filable_id }}</div>\n                </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/files/' + file?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"filesService.deleteFile(file?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !filesService.files?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'JUNTAS ARCHIVOS DE AGENDAS' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/files/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'JUNTAS ARCHIVOS DE AGENDAS' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"filesService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"filesService.getFiles(filesService.meta.current_page - 1)\"\n                        [disabled]=\"filesService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{filesService.meta.current_page}}\n                /{{filesService.meta.last_page}} {{filesService.meta.from}}-{{filesService.meta.to}}\n                /{{filesService.meta.total}} </ion-button>\n            <ion-button (click)=\"filesService.getFiles(filesService.meta.current_page + 1)\"\n                        [disabled]=\"filesService.meta.current_page == filesService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/files/files.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"JUNTAS ARCHIVOS DE AGENDAS\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/files/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'JUNTAS ARCHIVOS DE AGENDAS'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/files/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'JUNTAS ARCHIVOS DE AGENDAS' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/files/files-create/files-create.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/files/files-create/files-create.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzL2ZpbGVzLWNyZWF0ZS9maWxlcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/files/files-create/files-create.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/files/files-create/files-create.component.ts ***!
  \**************************************************************/
/*! exports provided: FilesCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesCreateComponent", function() { return FilesCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../files.service */ "./src/app/files/files.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let FilesCreateComponent = class FilesCreateComponent {
    constructor(filesService, route, platform) {
        this.filesService = filesService;
        this.route = route;
        this.platform = platform;
        this.id = null;
        this.formValid = false;
    }
    ngOnInit() {
        this.clearPosts();
    }
    ngAfterViewInit() {
        this.fileForm.filesForm.valueChanges.subscribe((data) => {
            this.filesService.filesFormValid.next(this.fileForm.filesForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.filesService.createFile();
        this.filesService.file = {};
    }
};
FilesCreateComponent.ctorParameters = () => [
    { type: _files_service__WEBPACK_IMPORTED_MODULE_2__["FilesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
FilesCreateComponent.propDecorators = {
    fileForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['fileForm',] }]
};
FilesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-files-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./files-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-create/files-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./files-create.component.scss */ "./src/app/files/files-create/files-create.component.scss")).default]
    })
], FilesCreateComponent);



/***/ }),

/***/ "./src/app/files/files-duplicate/files-duplicate.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/files/files-duplicate/files-duplicate.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzL2ZpbGVzLWR1cGxpY2F0ZS9maWxlcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/files/files-duplicate/files-duplicate.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/files/files-duplicate/files-duplicate.component.ts ***!
  \********************************************************************/
/*! exports provided: FilesDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesDuplicateComponent", function() { return FilesDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FilesDuplicateComponent = class FilesDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
FilesDuplicateComponent.ctorParameters = () => [];
FilesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-files-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./files-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-duplicate/files-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./files-duplicate.component.scss */ "./src/app/files/files-duplicate/files-duplicate.component.scss")).default]
    })
], FilesDuplicateComponent);



/***/ }),

/***/ "./src/app/files/files-edit/files-edit.component.scss":
/*!************************************************************!*\
  !*** ./src/app/files/files-edit/files-edit.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzL2ZpbGVzLWVkaXQvZmlsZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/files/files-edit/files-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/files/files-edit/files-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: FilesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesEditComponent", function() { return FilesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../files.service */ "./src/app/files/files.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let FilesEditComponent = class FilesEditComponent {
    constructor(filesService, route, platform) {
        this.filesService = filesService;
        this.route = route;
        this.platform = platform;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.filesService.editFile(this.id);
    }
    ngAfterViewInit() {
        this.fileForm.filesForm.valueChanges.subscribe((data) => {
            this.filesService.filesFormValid.next(this.fileForm.filesForm.valid);
        });
    }
};
FilesEditComponent.ctorParameters = () => [
    { type: _files_service__WEBPACK_IMPORTED_MODULE_2__["FilesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
FilesEditComponent.propDecorators = {
    fileForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['fileForm',] }]
};
FilesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-files-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./files-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-edit/files-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./files-edit.component.scss */ "./src/app/files/files-edit/files-edit.component.scss")).default]
    })
], FilesEditComponent);



/***/ }),

/***/ "./src/app/files/files-form/files-form.component.scss":
/*!************************************************************!*\
  !*** ./src/app/files/files-form/files-form.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzL2ZpbGVzLWZvcm0vZmlsZXMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/files/files-form/files-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/files/files-form/files-form.component.ts ***!
  \**********************************************************/
/*! exports provided: FilesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesFormComponent", function() { return FilesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../files.service */ "./src/app/files/files.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let FilesFormComponent = class FilesFormComponent {
    constructor(filesService, toTitlecase) {
        this.filesService = filesService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'file': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('ARCHIVO') + ' es obligatorio.' },
            ],
            'extension': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('EXTENSION') + ' es obligatorio.' },
            ],
            'mime': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('MIME') + ' es obligatorio.' },
            ],
            'url': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('URL') + ' es obligatorio.' },
            ],
            'filableid': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('ARCHIVABLE ID') + ' es obligatorio.' },
            ],
            'fileable_type': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('ARCHIVABLE TIPO') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
};
FilesFormComponent.ctorParameters = () => [
    { type: _files_service__WEBPACK_IMPORTED_MODULE_2__["FilesService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
FilesFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    filesForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['filesForm',] }]
};
FilesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-files-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./files-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-form/files-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./files-form.component.scss */ "./src/app/files/files-form/files-form.component.scss")).default]
    })
], FilesFormComponent);



/***/ }),

/***/ "./src/app/files/files-list/files-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/files/files-list/files-list.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzL2ZpbGVzLWxpc3QvZmlsZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/files/files-list/files-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/files/files-list/files-list.component.ts ***!
  \**********************************************************/
/*! exports provided: FilesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesListComponent", function() { return FilesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../files.service */ "./src/app/files/files.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let FilesListComponent = class FilesListComponent {
    constructor(filesService, api, loading) {
        this.filesService = filesService;
        this.api = api;
        this.loading = loading;
    }
    ngOnInit() {
        this.filesService.getFiles();
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
FilesListComponent.ctorParameters = () => [
    { type: _files_service__WEBPACK_IMPORTED_MODULE_2__["FilesService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }
];
FilesListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
FilesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-files-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./files-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files-list/files-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./files-list.component.scss */ "./src/app/files/files-list/files-list.component.scss")).default]
    })
], FilesListComponent);



/***/ }),

/***/ "./src/app/files/files-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/files/files-routing.module.ts ***!
  \***********************************************/
/*! exports provided: FilesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesPageRoutingModule", function() { return FilesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _files_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./files.page */ "./src/app/files/files.page.ts");
/* harmony import */ var _files_edit_files_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./files-edit/files-edit.component */ "./src/app/files/files-edit/files-edit.component.ts");
/* harmony import */ var _files_create_files_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./files-create/files-create.component */ "./src/app/files/files-create/files-create.component.ts");
/* harmony import */ var _files_list_files_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./files-list/files-list.component */ "./src/app/files/files-list/files-list.component.ts");







const routes = [
    {
        path: '',
        component: _files_page__WEBPACK_IMPORTED_MODULE_3__["FilesPage"]
    },
    {
        path: 'list',
        component: _files_list_files_list_component__WEBPACK_IMPORTED_MODULE_6__["FilesListComponent"]
    },
    {
        path: 'create',
        component: _files_create_files_create_component__WEBPACK_IMPORTED_MODULE_5__["FilesCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _files_edit_files_edit_component__WEBPACK_IMPORTED_MODULE_4__["FilesEditComponent"]
    },
];
let FilesPageRoutingModule = class FilesPageRoutingModule {
};
FilesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], FilesPageRoutingModule);



/***/ }),

/***/ "./src/app/files/files.module.ts":
/*!***************************************!*\
  !*** ./src/app/files/files.module.ts ***!
  \***************************************/
/*! exports provided: FilesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesPageModule", function() { return FilesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _files_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./files-routing.module */ "./src/app/files/files-routing.module.ts");
/* harmony import */ var _files_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./files.page */ "./src/app/files/files.page.ts");
/* harmony import */ var _files_list_files_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./files-list/files-list.component */ "./src/app/files/files-list/files-list.component.ts");
/* harmony import */ var _files_create_files_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./files-create/files-create.component */ "./src/app/files/files-create/files-create.component.ts");
/* harmony import */ var _files_duplicate_files_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./files-duplicate/files-duplicate.component */ "./src/app/files/files-duplicate/files-duplicate.component.ts");
/* harmony import */ var _files_edit_files_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./files-edit/files-edit.component */ "./src/app/files/files-edit/files-edit.component.ts");
/* harmony import */ var _files_form_files_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./files-form/files-form.component */ "./src/app/files/files-form/files-form.component.ts");













let FilesPageModule = class FilesPageModule {
};
FilesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _files_routing_module__WEBPACK_IMPORTED_MODULE_6__["FilesPageRoutingModule"]
        ],
        declarations: [
            _files_page__WEBPACK_IMPORTED_MODULE_7__["FilesPage"],
            _files_list_files_list_component__WEBPACK_IMPORTED_MODULE_8__["FilesListComponent"],
            _files_create_files_create_component__WEBPACK_IMPORTED_MODULE_9__["FilesCreateComponent"],
            _files_duplicate_files_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["FilesDuplicateComponent"],
            _files_edit_files_edit_component__WEBPACK_IMPORTED_MODULE_11__["FilesEditComponent"],
            _files_form_files_form_component__WEBPACK_IMPORTED_MODULE_12__["FilesFormComponent"],
        ]
    })
], FilesPageModule);



/***/ }),

/***/ "./src/app/files/files.page.scss":
/*!***************************************!*\
  !*** ./src/app/files/files.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzL2ZpbGVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/files/files.page.ts":
/*!*************************************!*\
  !*** ./src/app/files/files.page.ts ***!
  \*************************************/
/*! exports provided: FilesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesPage", function() { return FilesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FilesPage = class FilesPage {
    constructor() { }
    ngOnInit() {
    }
};
FilesPage.ctorParameters = () => [];
FilesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-files',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./files.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/files/files.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./files.page.scss */ "./src/app/files/files.page.scss")).default]
    })
], FilesPage);



/***/ }),

/***/ "./src/app/files/files.service.ts":
/*!****************************************!*\
  !*** ./src/app/files/files.service.ts ***!
  \****************************************/
/*! exports provided: FilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesService", function() { return FilesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let FilesService = class FilesService {
    constructor(api, alert, toast, router, navigation) {
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
    getFiles(page = this.page, perPage = this.perPage) {
        this.api.get(this.filesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.files = res.data;
            this.fileLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editFile(id) {
        this.api.get(this.filesUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.file = res.data.model;
            this.fileLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateFile() {
        this.api.put(this.filesUrl + '/' + this.file.id, {
            model: this.file,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getFiles(1);
        });
    }
    createFile() {
        this.api.get(this.filesUrl + '/create')
            .subscribe((res) => {
            this.file = {};
            this.fileLists = res.lists;
        });
    }
    storeFile() {
        this.api.post(this.filesUrl, {
            model: this.file,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getFiles(1);
        });
    }
    deleteFile(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.filesUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getFiles(1);
                });
            }
            else {
                return;
            }
        });
    }
};
FilesService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
FilesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FilesService);



/***/ })

}]);
//# sourceMappingURL=files-files-module-es2015.js.map