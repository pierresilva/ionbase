(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hous-units-hous-units-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units-create/hous-units-create.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units-create/hous-units-create.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/hous-units'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"housUnitsService.storeHousUnit()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!housUnitsService.housUnitsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'UNIDADES HABITACIONALES' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-hous-units-form #housUnitForm [model]=\"housUnitsService.housUnit\"></app-hous-units-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units-duplicate/hous-units-duplicate.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units-duplicate/hous-units-duplicate.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  HousUnits duplicate works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units-edit/hous-units-edit.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units-edit/hous-units-edit.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/hous-units'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"housUnitsService.updateHousUnit()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!housUnitsService.housUnitsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'UNIDADES HABITACIONALES' | titlecase}}: {{ housUnitsService.housUnit?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-hous-units-form #housUnitForm [model]=\"housUnitsService.housUnit\"></app-hous-units-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units-form/hous-units-form.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units-form/hous-units-form.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #housUnitsForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- hous_unit_area_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'AREAS DE UNIDADES HABITACIONALES' | titlecase }}</ion-label>\n        <ionic-selectable name=\"hous_unit_area_ids\"\n                          id=\"hous_unit_area_ids-field\"\n                          [(ngModel)]=\"model.hous_unit_areas\"\n                          [items]=\"housUnitsService.housUnitLists.HousUnitArea\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('AREAS DE UNIDADES HABITACIONALES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('AREAS DE UNIDADES HABITACIONALES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setHousUnitAreaIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.hous_unit_area_ids\">\n            <div class=\"error-message\" *ngIf=\"housUnitsForm.form.controls['hous_unit_area_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end hous_unit_area_ids -->\n\n\n    <!-- oper_sector_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'SECTORES OPERATIVOS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"oper_sector_ids\"\n                          id=\"oper_sector_ids-field\"\n                          [(ngModel)]=\"model.oper_sectors\"\n                          [items]=\"housUnitsService.housUnitLists.OperSector\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('SECTORES OPERATIVOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('SECTORES OPERATIVOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setOperSectorIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.oper_sector_ids\">\n            <div class=\"error-message\" *ngIf=\"housUnitsForm.form.controls['oper_sector_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end oper_sector_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"housUnitsForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- code -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'CÓDIGO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.code\"\n                            type=\"text\"\n                            name=\"code\"\n                            id=\"code-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.code\">\n                    <div class=\"error-message\" *ngIf=\"housUnitsForm.form.controls['code']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end code -->\n\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units-list/hous-units-list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units-list/hous-units-list.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'UNIDADES HABITACIONALES' | titlecase}}\"\n                 primaryLink=\"hous-units/create\"\n                 primaryText=\"Crear {{'UNIDADES HABITACIONALES' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('UNIDADES HABITACIONALES' | lowercase )\"\n                       (ionCancel)=\"this.housUnitsService.searchValue = ''; housUnitsService.getHousUnits()\"\n                       (keyup.enter)=\"housUnitsService.getHousUnits()\"\n                       [(ngModel)]=\"housUnitsService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && housUnitsService.housUnits.length\">\n        <ion-card *ngFor=\"let housUnit of housUnitsService.housUnits; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ housUnit.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CÓDIGO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ housUnit.code }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'AREAS DE UNIDADES HABITACIONALES' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"housUnit.hous_unit_areas.length\">\n                                <ng-container *ngFor=\"let housUnitArea of housUnit.hous_unit_areas; let last = last\">\n                                    <a routerLink=\"/hous-unit-areas/{{ housUnitArea.id }}/edit\">{{ housUnitArea.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'SECTORES OPERATIVOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"housUnit.oper_sectors.length\">\n                                <ng-container *ngFor=\"let operSector of housUnit.oper_sectors; let last = last\">\n                                    <a routerLink=\"/oper-sectors/{{ operSector.id }}/edit\">{{ operSector.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/hous-units/' + housUnit.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"housUnitsService.deleteHousUnit(housUnit.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !housUnitsService.housUnits.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'UNIDADES HABITACIONALES' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/hous-units/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'UNIDADES HABITACIONALES' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"housUnitsService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"housUnitsService.getHousUnits(housUnitsService.meta.current_page - 1)\"\n                        [disabled]=\"housUnitsService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{housUnitsService.meta.current_page}}\n                /{{housUnitsService.meta.last_page}} {{housUnitsService.meta.from}}-{{housUnitsService.meta.to}}\n                /{{housUnitsService.meta.total}} </ion-button>\n            <ion-button (click)=\"housUnitsService.getHousUnits(housUnitsService.meta.current_page + 1)\"\n                        [disabled]=\"housUnitsService.meta.current_page == housUnitsService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"UNIDADES HABITACIONALES\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/hous-units/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'UNIDADES HABITACIONALES'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/hous-units/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'UNIDADES HABITACIONALES' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/hous-units/hous-units-create/hous-units-create.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/hous-units/hous-units-create/hous-units-create.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdXMtdW5pdHMvaG91cy11bml0cy1jcmVhdGUvaG91cy11bml0cy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/hous-units/hous-units-create/hous-units-create.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/hous-units/hous-units-create/hous-units-create.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HousUnitsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousUnitsCreateComponent", function() { return HousUnitsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hous_units_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hous-units.service */ "./src/app/hous-units/hous-units.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let HousUnitsCreateComponent = class HousUnitsCreateComponent {
    constructor(housUnitsService, route, platform) {
        this.housUnitsService = housUnitsService;
        this.route = route;
        this.platform = platform;
        this.id = null;
        this.formValid = false;
    }
    ngOnInit() {
        this.clearPosts();
    }
    ngAfterViewInit() {
        this.housUnitForm.housUnitsForm.valueChanges.subscribe((data) => {
            this.housUnitsService.housUnitsFormValid.next(this.housUnitForm.housUnitsForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.housUnitsService.createHousUnit();
        this.housUnitsService.housUnit = {};
    }
};
HousUnitsCreateComponent.ctorParameters = () => [
    { type: _hous_units_service__WEBPACK_IMPORTED_MODULE_2__["HousUnitsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
HousUnitsCreateComponent.propDecorators = {
    housUnitForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['housUnitForm',] }]
};
HousUnitsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hous-units-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./hous-units-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units-create/hous-units-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./hous-units-create.component.scss */ "./src/app/hous-units/hous-units-create/hous-units-create.component.scss")).default]
    })
], HousUnitsCreateComponent);



/***/ }),

/***/ "./src/app/hous-units/hous-units-duplicate/hous-units-duplicate.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/hous-units/hous-units-duplicate/hous-units-duplicate.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdXMtdW5pdHMvaG91cy11bml0cy1kdXBsaWNhdGUvaG91cy11bml0cy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/hous-units/hous-units-duplicate/hous-units-duplicate.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/hous-units/hous-units-duplicate/hous-units-duplicate.component.ts ***!
  \***********************************************************************************/
/*! exports provided: HousUnitsDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousUnitsDuplicateComponent", function() { return HousUnitsDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HousUnitsDuplicateComponent = class HousUnitsDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
HousUnitsDuplicateComponent.ctorParameters = () => [];
HousUnitsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hous-units-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./hous-units-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units-duplicate/hous-units-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./hous-units-duplicate.component.scss */ "./src/app/hous-units/hous-units-duplicate/hous-units-duplicate.component.scss")).default]
    })
], HousUnitsDuplicateComponent);



/***/ }),

/***/ "./src/app/hous-units/hous-units-edit/hous-units-edit.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/hous-units/hous-units-edit/hous-units-edit.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdXMtdW5pdHMvaG91cy11bml0cy1lZGl0L2hvdXMtdW5pdHMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/hous-units/hous-units-edit/hous-units-edit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/hous-units/hous-units-edit/hous-units-edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: HousUnitsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousUnitsEditComponent", function() { return HousUnitsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hous_units_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hous-units.service */ "./src/app/hous-units/hous-units.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let HousUnitsEditComponent = class HousUnitsEditComponent {
    constructor(housUnitsService, route, platform) {
        this.housUnitsService = housUnitsService;
        this.route = route;
        this.platform = platform;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.housUnitsService.editHousUnit(this.id);
    }
    ngAfterViewInit() {
        this.housUnitForm.housUnitsForm.valueChanges.subscribe((data) => {
            this.housUnitsService.housUnitsFormValid.next(this.housUnitForm.housUnitsForm.valid);
        });
    }
};
HousUnitsEditComponent.ctorParameters = () => [
    { type: _hous_units_service__WEBPACK_IMPORTED_MODULE_2__["HousUnitsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
HousUnitsEditComponent.propDecorators = {
    housUnitForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['housUnitForm',] }]
};
HousUnitsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hous-units-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./hous-units-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units-edit/hous-units-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./hous-units-edit.component.scss */ "./src/app/hous-units/hous-units-edit/hous-units-edit.component.scss")).default]
    })
], HousUnitsEditComponent);



/***/ }),

/***/ "./src/app/hous-units/hous-units-form/hous-units-form.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/hous-units/hous-units-form/hous-units-form.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdXMtdW5pdHMvaG91cy11bml0cy1mb3JtL2hvdXMtdW5pdHMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/hous-units/hous-units-form/hous-units-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/hous-units/hous-units-form/hous-units-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: HousUnitsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousUnitsFormComponent", function() { return HousUnitsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hous_units_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hous-units.service */ "./src/app/hous-units/hous-units.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let HousUnitsFormComponent = class HousUnitsFormComponent {
    constructor(housUnitsService, toTitlecase) {
        this.housUnitsService = housUnitsService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'code': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.' },
            ],
            'hous_unit_area_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('AREAS DE UNIDADES HABITACIONALES') + ' es obligatorio.' },
            ],
            'oper_sector_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('SECTORES OPERATIVOS') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setHousUnitAreaIds
    setHousUnitAreaIds(event) {
        let housUnitAreaIds = null;
        if (event.value.length) {
            housUnitAreaIds = [];
            for (let i = 0; i < event.value.length; i++) {
                housUnitAreaIds.push(event.value[i].id);
            }
        }
        this.housUnitsService.housUnit.hous_unit_area_ids = housUnitAreaIds;
    }
    // end setHousUnitAreaIds
    // set setOperSectorIds
    setOperSectorIds(event) {
        let operSectorIds = null;
        if (event.value.length) {
            operSectorIds = [];
            for (let i = 0; i < event.value.length; i++) {
                operSectorIds.push(event.value[i].id);
            }
        }
        this.housUnitsService.housUnit.oper_sector_ids = operSectorIds;
    }
};
HousUnitsFormComponent.ctorParameters = () => [
    { type: _hous_units_service__WEBPACK_IMPORTED_MODULE_2__["HousUnitsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
HousUnitsFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    housUnitsForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['housUnitsForm',] }]
};
HousUnitsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hous-units-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./hous-units-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units-form/hous-units-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./hous-units-form.component.scss */ "./src/app/hous-units/hous-units-form/hous-units-form.component.scss")).default]
    })
], HousUnitsFormComponent);



/***/ }),

/***/ "./src/app/hous-units/hous-units-list/hous-units-list.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/hous-units/hous-units-list/hous-units-list.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdXMtdW5pdHMvaG91cy11bml0cy1saXN0L2hvdXMtdW5pdHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/hous-units/hous-units-list/hous-units-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/hous-units/hous-units-list/hous-units-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: HousUnitsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousUnitsListComponent", function() { return HousUnitsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hous_units_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hous-units.service */ "./src/app/hous-units/hous-units.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let HousUnitsListComponent = class HousUnitsListComponent {
    constructor(housUnitsService, api, loading) {
        this.housUnitsService = housUnitsService;
        this.api = api;
        this.loading = loading;
    }
    ngOnInit() {
        this.housUnitsService.getHousUnits();
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
HousUnitsListComponent.ctorParameters = () => [
    { type: _hous_units_service__WEBPACK_IMPORTED_MODULE_2__["HousUnitsService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }
];
HousUnitsListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
HousUnitsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hous-units-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./hous-units-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units-list/hous-units-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./hous-units-list.component.scss */ "./src/app/hous-units/hous-units-list/hous-units-list.component.scss")).default]
    })
], HousUnitsListComponent);



/***/ }),

/***/ "./src/app/hous-units/hous-units-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/hous-units/hous-units-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: HousUnitsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousUnitsPageRoutingModule", function() { return HousUnitsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hous_units_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hous-units.page */ "./src/app/hous-units/hous-units.page.ts");
/* harmony import */ var _hous_units_edit_hous_units_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hous-units-edit/hous-units-edit.component */ "./src/app/hous-units/hous-units-edit/hous-units-edit.component.ts");
/* harmony import */ var _hous_units_create_hous_units_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hous-units-create/hous-units-create.component */ "./src/app/hous-units/hous-units-create/hous-units-create.component.ts");
/* harmony import */ var _hous_units_list_hous_units_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hous-units-list/hous-units-list.component */ "./src/app/hous-units/hous-units-list/hous-units-list.component.ts");







const routes = [
    {
        path: '',
        component: _hous_units_page__WEBPACK_IMPORTED_MODULE_3__["HousUnitsPage"]
    },
    {
        path: 'list',
        component: _hous_units_list_hous_units_list_component__WEBPACK_IMPORTED_MODULE_6__["HousUnitsListComponent"]
    },
    {
        path: 'create',
        component: _hous_units_create_hous_units_create_component__WEBPACK_IMPORTED_MODULE_5__["HousUnitsCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _hous_units_edit_hous_units_edit_component__WEBPACK_IMPORTED_MODULE_4__["HousUnitsEditComponent"]
    },
];
let HousUnitsPageRoutingModule = class HousUnitsPageRoutingModule {
};
HousUnitsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], HousUnitsPageRoutingModule);



/***/ }),

/***/ "./src/app/hous-units/hous-units.module.ts":
/*!*************************************************!*\
  !*** ./src/app/hous-units/hous-units.module.ts ***!
  \*************************************************/
/*! exports provided: HousUnitsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousUnitsPageModule", function() { return HousUnitsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _hous_units_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hous-units-routing.module */ "./src/app/hous-units/hous-units-routing.module.ts");
/* harmony import */ var _hous_units_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hous-units.page */ "./src/app/hous-units/hous-units.page.ts");
/* harmony import */ var _hous_units_list_hous_units_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hous-units-list/hous-units-list.component */ "./src/app/hous-units/hous-units-list/hous-units-list.component.ts");
/* harmony import */ var _hous_units_create_hous_units_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hous-units-create/hous-units-create.component */ "./src/app/hous-units/hous-units-create/hous-units-create.component.ts");
/* harmony import */ var _hous_units_duplicate_hous_units_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hous-units-duplicate/hous-units-duplicate.component */ "./src/app/hous-units/hous-units-duplicate/hous-units-duplicate.component.ts");
/* harmony import */ var _hous_units_edit_hous_units_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hous-units-edit/hous-units-edit.component */ "./src/app/hous-units/hous-units-edit/hous-units-edit.component.ts");
/* harmony import */ var _hous_units_form_hous_units_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hous-units-form/hous-units-form.component */ "./src/app/hous-units/hous-units-form/hous-units-form.component.ts");













let HousUnitsPageModule = class HousUnitsPageModule {
};
HousUnitsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _hous_units_routing_module__WEBPACK_IMPORTED_MODULE_6__["HousUnitsPageRoutingModule"]
        ],
        declarations: [
            _hous_units_page__WEBPACK_IMPORTED_MODULE_7__["HousUnitsPage"],
            _hous_units_list_hous_units_list_component__WEBPACK_IMPORTED_MODULE_8__["HousUnitsListComponent"],
            _hous_units_create_hous_units_create_component__WEBPACK_IMPORTED_MODULE_9__["HousUnitsCreateComponent"],
            _hous_units_duplicate_hous_units_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["HousUnitsDuplicateComponent"],
            _hous_units_edit_hous_units_edit_component__WEBPACK_IMPORTED_MODULE_11__["HousUnitsEditComponent"],
            _hous_units_form_hous_units_form_component__WEBPACK_IMPORTED_MODULE_12__["HousUnitsFormComponent"],
        ]
    })
], HousUnitsPageModule);



/***/ }),

/***/ "./src/app/hous-units/hous-units.page.scss":
/*!*************************************************!*\
  !*** ./src/app/hous-units/hous-units.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdXMtdW5pdHMvaG91cy11bml0cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/hous-units/hous-units.page.ts":
/*!***********************************************!*\
  !*** ./src/app/hous-units/hous-units.page.ts ***!
  \***********************************************/
/*! exports provided: HousUnitsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousUnitsPage", function() { return HousUnitsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HousUnitsPage = class HousUnitsPage {
    constructor() { }
    ngOnInit() {
    }
};
HousUnitsPage.ctorParameters = () => [];
HousUnitsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hous-units',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./hous-units.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./hous-units.page.scss */ "./src/app/hous-units/hous-units.page.scss")).default]
    })
], HousUnitsPage);



/***/ }),

/***/ "./src/app/hous-units/hous-units.service.ts":
/*!**************************************************!*\
  !*** ./src/app/hous-units/hous-units.service.ts ***!
  \**************************************************/
/*! exports provided: HousUnitsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousUnitsService", function() { return HousUnitsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let HousUnitsService = class HousUnitsService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.housUnitsUrl = 'hous-units';
        this.housUnitsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.housUnits = [];
        this.housUnit = {};
        this.housUnitLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    getHousUnits(page = this.page, perPage = this.perPage) {
        this.api.get(this.housUnitsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.housUnits = res.data;
            this.housUnitLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editHousUnit(id) {
        this.api.get(this.housUnitsUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.housUnit = res.data.model;
            this.housUnitLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateHousUnit() {
        this.api.put(this.housUnitsUrl + '/' + this.housUnit.id, {
            model: this.housUnit,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getHousUnits(1);
        });
    }
    createHousUnit() {
        this.api.get(this.housUnitsUrl + '/create')
            .subscribe((res) => {
            this.housUnit = {};
            this.housUnitLists = res.lists;
        });
    }
    storeHousUnit() {
        this.api.post(this.housUnitsUrl, {
            model: this.housUnit,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getHousUnits(1);
        });
    }
    deleteHousUnit(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.housUnitsUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getHousUnits(1);
                });
            }
            else {
                return;
            }
        });
    }
};
HousUnitsService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
HousUnitsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HousUnitsService);



/***/ })

}]);
//# sourceMappingURL=hous-units-hous-units-module-es2015.js.map