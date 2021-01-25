(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["syst-parameter-groups-syst-parameter-groups-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-create/syst-parameter-groups-create.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-create/syst-parameter-groups-create.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/syst-parameter-groups'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"systParameterGroupsService.storeSystParameterGroup()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!systParameterGroupsService.systParameterGroupsFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'GRUPOS DE PARAMETROS' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-syst-parameter-groups-form #systParameterGroupForm [model]=\"systParameterGroupsService.systParameterGroup\"></app-syst-parameter-groups-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-duplicate/syst-parameter-groups-duplicate.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-duplicate/syst-parameter-groups-duplicate.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  SystParameterGroups duplicate works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-edit/syst-parameter-groups-edit.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-edit/syst-parameter-groups-edit.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/syst-parameter-groups'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"systParameterGroupsService.updateSystParameterGroup()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!systParameterGroupsService.systParameterGroupsFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'GRUPOS DE PARAMETROS' | titlecase}}: {{ systParameterGroupsService.systParameterGroup?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-syst-parameter-groups-form #systParameterGroupForm [model]=\"systParameterGroupsService.systParameterGroup\"></app-syst-parameter-groups-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-form/syst-parameter-groups-form.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-form/syst-parameter-groups-form.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #systParameterGroupsForm=\"ngForm\" novalidate autocomplete=\"off\">\r\n\r\n\r\n    <!-- syst_parameter_ids -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'PARAMETROS' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"syst_parameter_ids\"\r\n                          id=\"syst_parameter_ids-field\"\r\n                          [(ngModel)]=\"model.syst_parameters\"\r\n                          [items]=\"systParameterGroupsService.systParameterGroupLists.SystParameter\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('PARAMETROS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('PARAMETROS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setSystParameterIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.syst_parameter_ids\">\r\n            <div class=\"error-message\" *ngIf=\"systParameterGroupsForm.form.controls['syst_parameter_ids']?.hasError(validation.type)\">\r\n            {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end syst_parameter_ids -->\r\n\r\n\r\n            <!-- name -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.name\"\r\n                            type=\"text\"\r\n                            name=\"name\"\r\n                            id=\"name-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n                    <div class=\"error-message\" *ngIf=\"systParameterGroupsForm.form.controls['name']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end name -->\r\n\r\n\r\n            <!-- code -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'CÓDIGO' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.code\"\r\n                            type=\"text\"\r\n                            name=\"code\"\r\n                            id=\"code-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.code\">\r\n                    <div class=\"error-message\" *ngIf=\"systParameterGroupsForm.form.controls['code']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end code -->\r\n\r\n\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-list/syst-parameter-groups-list.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-list/syst-parameter-groups-list.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'GRUPOS DE PARAMETROS' | titlecase}}\"\r\n                 primaryLink=\"syst-parameter-groups/create\"\r\n                 primaryText=\"Crear {{'GRUPOS DE PARAMETROS' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-searchbar showCancelButton=\"focus\"\r\n                       [cancelButtonText]=\"'Cancelar'\"\r\n                       [placeholder]=\"'Buscar ' + ('GRUPOS DE PARAMETROS' | lowercase )\"\r\n                       (ionCancel)=\"this.systParameterGroupsService.searchValue = ''; systParameterGroupsService.getSystParameterGroups()\"\r\n                       (keyup.enter)=\"systParameterGroupsService.getSystParameterGroups()\"\r\n                       [(ngModel)]=\"systParameterGroupsService.searchValue\"></ion-searchbar>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && systParameterGroupsService.systParameterGroups?.length\">\r\n        <ion-card *ngFor=\"let systParameterGroup of systParameterGroupsService.systParameterGroups; let index = index\">\r\n            <ion-list>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ systParameterGroup?.name }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'CÓDIGO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ systParameterGroup?.code }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'PARAMETROS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">\r\n                            <ng-container *ngIf=\"systParameterGroup?.syst_parameters?.length\">\r\n                                <ng-container *ngFor=\"let systParameter of systParameterGroup?.syst_parameters; let last = last\">\r\n                                    <a routerLink=\"/syst-parameters/{{ systParameter?.id }}/edit\">{{ systParameter?.name }}</a><span *ngIf=\"!last\">, </span>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n                    </ion-item>\r\n            </ion-list>\r\n            <ion-footer>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/syst-parameter-groups/' + systParameterGroup?.id + '/edit'\">\r\n                            <ion-icon name=\"create-outline\"></ion-icon>\r\n                            <div>Editar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"systParameterGroupsService.deleteSystParameterGroup(systParameterGroup?.id)\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            <div>Eliminar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-footer>\r\n        </ion-card>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && !systParameterGroupsService.systParameterGroups?.length\">\r\n        <ion-item>\r\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label><h2>No se encontraron {{'GRUPOS DE PARAMETROS' | titlecase}}</h2></ion-label>\r\n            <ion-button [routerLink]=\"'/syst-parameter-groups/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\r\n                Crear {{'GRUPOS DE PARAMETROS' | titlecase}}\r\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"systParameterGroupsService.meta\">\r\n        <ion-col class=\"ion-text-center\" size=\"12\">\r\n            <ion-button (click)=\"systParameterGroupsService.getSystParameterGroups(systParameterGroupsService.meta.current_page - 1)\"\r\n                        [disabled]=\"systParameterGroupsService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{systParameterGroupsService.meta.current_page}}\r\n                /{{systParameterGroupsService.meta.last_page}} {{systParameterGroupsService.meta.from}}-{{systParameterGroupsService.meta.to}}\r\n                /{{systParameterGroupsService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"systParameterGroupsService.getSystParameterGroups(systParameterGroupsService.meta.current_page + 1)\"\r\n                        [disabled]=\"systParameterGroupsService.meta.current_page == systParameterGroupsService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"GRUPOS DE PARAMETROS\"></app-main-header>\r\n\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/syst-parameter-groups/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'GRUPOS DE PARAMETROS'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/syst-parameter-groups/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'GRUPOS DE PARAMETROS' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/syst-parameter-groups/syst-parameter-groups-create/syst-parameter-groups-create.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/syst-parameter-groups/syst-parameter-groups-create/syst-parameter-groups-create.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcGFyYW1ldGVyLWdyb3Vwcy9zeXN0LXBhcmFtZXRlci1ncm91cHMtY3JlYXRlL3N5c3QtcGFyYW1ldGVyLWdyb3Vwcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/syst-parameter-groups/syst-parameter-groups-create/syst-parameter-groups-create.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/syst-parameter-groups/syst-parameter-groups-create/syst-parameter-groups-create.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: SystParameterGroupsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystParameterGroupsCreateComponent", function() { return SystParameterGroupsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _syst_parameter_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../syst-parameter-groups.service */ "./src/app/syst-parameter-groups/syst-parameter-groups.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let SystParameterGroupsCreateComponent = class SystParameterGroupsCreateComponent {
    constructor(systParameterGroupsService, route, platform, splitPanel) {
        this.systParameterGroupsService = systParameterGroupsService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.formValid = false;
    }
    ngOnInit() {
        this.clearPosts();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    ngAfterViewInit() {
        this.systParameterGroupForm.systParameterGroupsForm.valueChanges.subscribe((data) => {
            this.systParameterGroupsService.systParameterGroupsFormValid.next(this.systParameterGroupForm.systParameterGroupsForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.systParameterGroupsService.createSystParameterGroup();
        this.systParameterGroupsService.systParameterGroup = {};
    }
};
SystParameterGroupsCreateComponent.ctorParameters = () => [
    { type: _syst_parameter_groups_service__WEBPACK_IMPORTED_MODULE_2__["SystParameterGroupsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
SystParameterGroupsCreateComponent.propDecorators = {
    systParameterGroupForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['systParameterGroupForm',] }]
};
SystParameterGroupsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-parameter-groups-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-parameter-groups-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-create/syst-parameter-groups-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-parameter-groups-create.component.scss */ "./src/app/syst-parameter-groups/syst-parameter-groups-create/syst-parameter-groups-create.component.scss")).default]
    })
], SystParameterGroupsCreateComponent);



/***/ }),

/***/ "./src/app/syst-parameter-groups/syst-parameter-groups-duplicate/syst-parameter-groups-duplicate.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/syst-parameter-groups/syst-parameter-groups-duplicate/syst-parameter-groups-duplicate.component.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcGFyYW1ldGVyLWdyb3Vwcy9zeXN0LXBhcmFtZXRlci1ncm91cHMtZHVwbGljYXRlL3N5c3QtcGFyYW1ldGVyLWdyb3Vwcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/syst-parameter-groups/syst-parameter-groups-duplicate/syst-parameter-groups-duplicate.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/syst-parameter-groups/syst-parameter-groups-duplicate/syst-parameter-groups-duplicate.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: SystParameterGroupsDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystParameterGroupsDuplicateComponent", function() { return SystParameterGroupsDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SystParameterGroupsDuplicateComponent = class SystParameterGroupsDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
SystParameterGroupsDuplicateComponent.ctorParameters = () => [];
SystParameterGroupsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-parameter-groups-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-parameter-groups-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-duplicate/syst-parameter-groups-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-parameter-groups-duplicate.component.scss */ "./src/app/syst-parameter-groups/syst-parameter-groups-duplicate/syst-parameter-groups-duplicate.component.scss")).default]
    })
], SystParameterGroupsDuplicateComponent);



/***/ }),

/***/ "./src/app/syst-parameter-groups/syst-parameter-groups-edit/syst-parameter-groups-edit.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/syst-parameter-groups/syst-parameter-groups-edit/syst-parameter-groups-edit.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcGFyYW1ldGVyLWdyb3Vwcy9zeXN0LXBhcmFtZXRlci1ncm91cHMtZWRpdC9zeXN0LXBhcmFtZXRlci1ncm91cHMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/syst-parameter-groups/syst-parameter-groups-edit/syst-parameter-groups-edit.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/syst-parameter-groups/syst-parameter-groups-edit/syst-parameter-groups-edit.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: SystParameterGroupsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystParameterGroupsEditComponent", function() { return SystParameterGroupsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _syst_parameter_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../syst-parameter-groups.service */ "./src/app/syst-parameter-groups/syst-parameter-groups.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let SystParameterGroupsEditComponent = class SystParameterGroupsEditComponent {
    constructor(systParameterGroupsService, route, platform, splitPanel) {
        this.systParameterGroupsService = systParameterGroupsService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.systParameterGroupsService.editSystParameterGroup(this.id);
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    ngAfterViewInit() {
        this.systParameterGroupForm.systParameterGroupsForm.valueChanges.subscribe((data) => {
            this.systParameterGroupsService.systParameterGroupsFormValid.next(this.systParameterGroupForm.systParameterGroupsForm.valid);
        });
    }
};
SystParameterGroupsEditComponent.ctorParameters = () => [
    { type: _syst_parameter_groups_service__WEBPACK_IMPORTED_MODULE_2__["SystParameterGroupsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
SystParameterGroupsEditComponent.propDecorators = {
    systParameterGroupForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['systParameterGroupForm',] }]
};
SystParameterGroupsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-parameter-groups-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-parameter-groups-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-edit/syst-parameter-groups-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-parameter-groups-edit.component.scss */ "./src/app/syst-parameter-groups/syst-parameter-groups-edit/syst-parameter-groups-edit.component.scss")).default]
    })
], SystParameterGroupsEditComponent);



/***/ }),

/***/ "./src/app/syst-parameter-groups/syst-parameter-groups-form/syst-parameter-groups-form.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/syst-parameter-groups/syst-parameter-groups-form/syst-parameter-groups-form.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcGFyYW1ldGVyLWdyb3Vwcy9zeXN0LXBhcmFtZXRlci1ncm91cHMtZm9ybS9zeXN0LXBhcmFtZXRlci1ncm91cHMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/syst-parameter-groups/syst-parameter-groups-form/syst-parameter-groups-form.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/syst-parameter-groups/syst-parameter-groups-form/syst-parameter-groups-form.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: SystParameterGroupsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystParameterGroupsFormComponent", function() { return SystParameterGroupsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _syst_parameter_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../syst-parameter-groups.service */ "./src/app/syst-parameter-groups/syst-parameter-groups.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let SystParameterGroupsFormComponent = class SystParameterGroupsFormComponent {
    constructor(systParameterGroupsService, toTitlecase) {
        this.systParameterGroupsService = systParameterGroupsService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'code': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.' },
            ],
            'syst_parameter_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('PARAMETROS') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setSystParameterIds
    setSystParameterIds(event) {
        let systParameterIds = null;
        if (event.value.length) {
            systParameterIds = [];
            for (let i = 0; i < event.value.length; i++) {
                systParameterIds.push(event.value[i].id);
            }
        }
        this.systParameterGroupsService.systParameterGroup.syst_parameter_ids = systParameterIds;
    }
};
SystParameterGroupsFormComponent.ctorParameters = () => [
    { type: _syst_parameter_groups_service__WEBPACK_IMPORTED_MODULE_2__["SystParameterGroupsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
SystParameterGroupsFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    systParameterGroupsForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['systParameterGroupsForm',] }]
};
SystParameterGroupsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-parameter-groups-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-parameter-groups-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-form/syst-parameter-groups-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-parameter-groups-form.component.scss */ "./src/app/syst-parameter-groups/syst-parameter-groups-form/syst-parameter-groups-form.component.scss")).default]
    })
], SystParameterGroupsFormComponent);



/***/ }),

/***/ "./src/app/syst-parameter-groups/syst-parameter-groups-list/syst-parameter-groups-list.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/syst-parameter-groups/syst-parameter-groups-list/syst-parameter-groups-list.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcGFyYW1ldGVyLWdyb3Vwcy9zeXN0LXBhcmFtZXRlci1ncm91cHMtbGlzdC9zeXN0LXBhcmFtZXRlci1ncm91cHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/syst-parameter-groups/syst-parameter-groups-list/syst-parameter-groups-list.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/syst-parameter-groups/syst-parameter-groups-list/syst-parameter-groups-list.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: SystParameterGroupsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystParameterGroupsListComponent", function() { return SystParameterGroupsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _syst_parameter_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../syst-parameter-groups.service */ "./src/app/syst-parameter-groups/syst-parameter-groups.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");







let SystParameterGroupsListComponent = class SystParameterGroupsListComponent {
    constructor(systParameterGroupsService, api, loading, splitPanel) {
        this.systParameterGroupsService = systParameterGroupsService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
        this.systParameterGroupsService.getSystParameterGroups();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
SystParameterGroupsListComponent.ctorParameters = () => [
    { type: _syst_parameter_groups_service__WEBPACK_IMPORTED_MODULE_2__["SystParameterGroupsService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] }
];
SystParameterGroupsListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
SystParameterGroupsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-parameter-groups-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-parameter-groups-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups-list/syst-parameter-groups-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-parameter-groups-list.component.scss */ "./src/app/syst-parameter-groups/syst-parameter-groups-list/syst-parameter-groups-list.component.scss")).default]
    })
], SystParameterGroupsListComponent);



/***/ }),

/***/ "./src/app/syst-parameter-groups/syst-parameter-groups-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/syst-parameter-groups/syst-parameter-groups-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SystParameterGroupsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystParameterGroupsPageRoutingModule", function() { return SystParameterGroupsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _syst_parameter_groups_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./syst-parameter-groups.page */ "./src/app/syst-parameter-groups/syst-parameter-groups.page.ts");
/* harmony import */ var _syst_parameter_groups_edit_syst_parameter_groups_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./syst-parameter-groups-edit/syst-parameter-groups-edit.component */ "./src/app/syst-parameter-groups/syst-parameter-groups-edit/syst-parameter-groups-edit.component.ts");
/* harmony import */ var _syst_parameter_groups_create_syst_parameter_groups_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./syst-parameter-groups-create/syst-parameter-groups-create.component */ "./src/app/syst-parameter-groups/syst-parameter-groups-create/syst-parameter-groups-create.component.ts");
/* harmony import */ var _syst_parameter_groups_list_syst_parameter_groups_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./syst-parameter-groups-list/syst-parameter-groups-list.component */ "./src/app/syst-parameter-groups/syst-parameter-groups-list/syst-parameter-groups-list.component.ts");







const routes = [
    {
        path: '',
        component: _syst_parameter_groups_page__WEBPACK_IMPORTED_MODULE_3__["SystParameterGroupsPage"]
    },
    {
        path: 'list',
        component: _syst_parameter_groups_list_syst_parameter_groups_list_component__WEBPACK_IMPORTED_MODULE_6__["SystParameterGroupsListComponent"]
    },
    {
        path: 'create',
        component: _syst_parameter_groups_create_syst_parameter_groups_create_component__WEBPACK_IMPORTED_MODULE_5__["SystParameterGroupsCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _syst_parameter_groups_edit_syst_parameter_groups_edit_component__WEBPACK_IMPORTED_MODULE_4__["SystParameterGroupsEditComponent"]
    },
];
let SystParameterGroupsPageRoutingModule = class SystParameterGroupsPageRoutingModule {
};
SystParameterGroupsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], SystParameterGroupsPageRoutingModule);



/***/ }),

/***/ "./src/app/syst-parameter-groups/syst-parameter-groups.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/syst-parameter-groups/syst-parameter-groups.module.ts ***!
  \***********************************************************************/
/*! exports provided: SystParameterGroupsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystParameterGroupsPageModule", function() { return SystParameterGroupsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _syst_parameter_groups_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./syst-parameter-groups-routing.module */ "./src/app/syst-parameter-groups/syst-parameter-groups-routing.module.ts");
/* harmony import */ var _syst_parameter_groups_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./syst-parameter-groups.page */ "./src/app/syst-parameter-groups/syst-parameter-groups.page.ts");
/* harmony import */ var _syst_parameter_groups_list_syst_parameter_groups_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./syst-parameter-groups-list/syst-parameter-groups-list.component */ "./src/app/syst-parameter-groups/syst-parameter-groups-list/syst-parameter-groups-list.component.ts");
/* harmony import */ var _syst_parameter_groups_create_syst_parameter_groups_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./syst-parameter-groups-create/syst-parameter-groups-create.component */ "./src/app/syst-parameter-groups/syst-parameter-groups-create/syst-parameter-groups-create.component.ts");
/* harmony import */ var _syst_parameter_groups_duplicate_syst_parameter_groups_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./syst-parameter-groups-duplicate/syst-parameter-groups-duplicate.component */ "./src/app/syst-parameter-groups/syst-parameter-groups-duplicate/syst-parameter-groups-duplicate.component.ts");
/* harmony import */ var _syst_parameter_groups_edit_syst_parameter_groups_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./syst-parameter-groups-edit/syst-parameter-groups-edit.component */ "./src/app/syst-parameter-groups/syst-parameter-groups-edit/syst-parameter-groups-edit.component.ts");
/* harmony import */ var _syst_parameter_groups_form_syst_parameter_groups_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./syst-parameter-groups-form/syst-parameter-groups-form.component */ "./src/app/syst-parameter-groups/syst-parameter-groups-form/syst-parameter-groups-form.component.ts");













let SystParameterGroupsPageModule = class SystParameterGroupsPageModule {
};
SystParameterGroupsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _syst_parameter_groups_routing_module__WEBPACK_IMPORTED_MODULE_6__["SystParameterGroupsPageRoutingModule"]
        ],
        declarations: [
            _syst_parameter_groups_page__WEBPACK_IMPORTED_MODULE_7__["SystParameterGroupsPage"],
            _syst_parameter_groups_list_syst_parameter_groups_list_component__WEBPACK_IMPORTED_MODULE_8__["SystParameterGroupsListComponent"],
            _syst_parameter_groups_create_syst_parameter_groups_create_component__WEBPACK_IMPORTED_MODULE_9__["SystParameterGroupsCreateComponent"],
            _syst_parameter_groups_duplicate_syst_parameter_groups_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["SystParameterGroupsDuplicateComponent"],
            _syst_parameter_groups_edit_syst_parameter_groups_edit_component__WEBPACK_IMPORTED_MODULE_11__["SystParameterGroupsEditComponent"],
            _syst_parameter_groups_form_syst_parameter_groups_form_component__WEBPACK_IMPORTED_MODULE_12__["SystParameterGroupsFormComponent"],
        ]
    })
], SystParameterGroupsPageModule);



/***/ }),

/***/ "./src/app/syst-parameter-groups/syst-parameter-groups.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/syst-parameter-groups/syst-parameter-groups.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcGFyYW1ldGVyLWdyb3Vwcy9zeXN0LXBhcmFtZXRlci1ncm91cHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/syst-parameter-groups/syst-parameter-groups.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/syst-parameter-groups/syst-parameter-groups.page.ts ***!
  \*********************************************************************/
/*! exports provided: SystParameterGroupsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystParameterGroupsPage", function() { return SystParameterGroupsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");



let SystParameterGroupsPage = class SystParameterGroupsPage {
    constructor(splitPanel) {
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
};
SystParameterGroupsPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] }
];
SystParameterGroupsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-parameter-groups',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-parameter-groups.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameter-groups/syst-parameter-groups.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-parameter-groups.page.scss */ "./src/app/syst-parameter-groups/syst-parameter-groups.page.scss")).default]
    })
], SystParameterGroupsPage);



/***/ }),

/***/ "./src/app/syst-parameter-groups/syst-parameter-groups.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/syst-parameter-groups/syst-parameter-groups.service.ts ***!
  \************************************************************************/
/*! exports provided: SystParameterGroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystParameterGroupsService", function() { return SystParameterGroupsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let SystParameterGroupsService = class SystParameterGroupsService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.systParameterGroupsUrl = 'syst-parameter-groups';
        this.systParameterGroupsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.systParameterGroups = [];
        this.systParameterGroup = {};
        this.systParameterGroupLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    getSystParameterGroups(page = this.page, perPage = this.perPage) {
        this.api.get(this.systParameterGroupsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.systParameterGroups = res.data;
            this.systParameterGroupLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editSystParameterGroup(id) {
        this.api.get(this.systParameterGroupsUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.systParameterGroup = res.data.model;
            this.systParameterGroupLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateSystParameterGroup() {
        this.api.put(this.systParameterGroupsUrl + '/' + this.systParameterGroup.id, {
            model: this.systParameterGroup,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getSystParameterGroups(1);
        });
    }
    createSystParameterGroup() {
        this.api.get(this.systParameterGroupsUrl + '/create')
            .subscribe((res) => {
            this.systParameterGroup = {};
            this.systParameterGroupLists = res.lists;
        });
    }
    storeSystParameterGroup() {
        this.api.post(this.systParameterGroupsUrl, {
            model: this.systParameterGroup,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getSystParameterGroups(1);
        });
    }
    deleteSystParameterGroup(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.systParameterGroupsUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getSystParameterGroups(1);
                });
            }
            else {
                return;
            }
        });
    }
};
SystParameterGroupsService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
SystParameterGroupsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SystParameterGroupsService);



/***/ })

}]);
//# sourceMappingURL=syst-parameter-groups-syst-parameter-groups-module-es2015.js.map