(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oper-schedules-oper-schedules-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/oper-schedules'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"operSchedulesService.storeOperSchedule()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!operSchedulesService.operSchedulesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'AGENDA DE OPERACIONES' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-oper-schedules-form #operScheduleForm [model]=\"operSchedulesService.operSchedule\"></app-oper-schedules-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  OperSchedules duplicate works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/oper-schedules'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"operSchedulesService.updateOperSchedule()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!operSchedulesService.operSchedulesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'AGENDA DE OPERACIONES' | titlecase}}: {{ operSchedulesService.operSchedule?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-oper-schedules-form #operScheduleForm [model]=\"operSchedulesService.operSchedule\"></app-oper-schedules-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #operSchedulesForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- hous_unit_area_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'AREASDEUNIDADESHABITACIONALE' | titlecase }}</ion-label>\n        <ionic-selectable name=\"hous_unit_area_id\"\n                          id=\"hous_unit_area_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.hous_unit_area\"\n                          [items]=\"operSchedulesService.operScheduleLists.HousUnitArea\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('AREAS DE UNIDADES HABITACIONALES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('AREAS DE UNIDADES HABITACIONALES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setHousUnitAreaId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.hous_unit_area_id\">\n            <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['hous_unit_area_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end hous_unit_area_id -->\n\n\n    <!-- oper_sector_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'SECTORESOPERATIVO' | titlecase }}</ion-label>\n        <ionic-selectable name=\"oper_sector_id\"\n                          id=\"oper_sector_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.oper_sector\"\n                          [items]=\"operSchedulesService.operScheduleLists.OperSector\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('SECTORES OPERATIVOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('SECTORES OPERATIVOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setOperSectorId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.oper_sector_id\">\n            <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['oper_sector_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end oper_sector_id -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"operSchedulesForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'AGENDA DE OPERACIONES' | titlecase}}\"\n                 primaryLink=\"oper-schedules/create\"\n                 primaryText=\"Crear {{'AGENDA DE OPERACIONES' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('AGENDA DE OPERACIONES' | lowercase )\"\n                       (ionCancel)=\"this.operSchedulesService.searchValue = ''; operSchedulesService.getOperSchedules()\"\n                       (keyup.enter)=\"operSchedulesService.getOperSchedules()\"\n                       [(ngModel)]=\"operSchedulesService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && operSchedulesService.operSchedules?.length\">\n        <ion-card *ngFor=\"let operSchedule of operSchedulesService.operSchedules; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operSchedule?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'AREAS DE UNIDADES HABITACIONALES' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/hous-unit-areas/{{ operSchedule?.hous_unit_area?.id }}/edit\">{{ operSchedule?.hous_unit_area?.name }}</a></div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'SECTORES OPERATIVOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/oper-sectors/{{ operSchedule?.oper_sector?.id }}/edit\">{{ operSchedule?.oper_sector?.name }}</a></div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/oper-schedules/' + operSchedule?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"operSchedulesService.deleteOperSchedule(operSchedule?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !operSchedulesService.operSchedules?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'AGENDA DE OPERACIONES' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/oper-schedules/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'AGENDA DE OPERACIONES' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"operSchedulesService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"operSchedulesService.getOperSchedules(operSchedulesService.meta.current_page - 1)\"\n                        [disabled]=\"operSchedulesService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{operSchedulesService.meta.current_page}}\n                /{{operSchedulesService.meta.last_page}} {{operSchedulesService.meta.from}}-{{operSchedulesService.meta.to}}\n                /{{operSchedulesService.meta.total}} </ion-button>\n            <ion-button (click)=\"operSchedulesService.getOperSchedules(operSchedulesService.meta.current_page + 1)\"\n                        [disabled]=\"operSchedulesService.meta.current_page == operSchedulesService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"AGENDA DE OPERACIONES\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/oper-schedules/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'AGENDA DE OPERACIONES'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/oper-schedules/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'AGENDA DE OPERACIONES' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2NoZWR1bGVzL29wZXItc2NoZWR1bGVzLWNyZWF0ZS9vcGVyLXNjaGVkdWxlcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OperSchedulesCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSchedulesCreateComponent", function() { return OperSchedulesCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-schedules.service */ "./src/app/oper-schedules/oper-schedules.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let OperSchedulesCreateComponent = class OperSchedulesCreateComponent {
    constructor(operSchedulesService, route, platform) {
        this.operSchedulesService = operSchedulesService;
        this.route = route;
        this.platform = platform;
        this.id = null;
        this.formValid = false;
    }
    ngOnInit() {
        this.clearPosts();
    }
    ngAfterViewInit() {
        this.operScheduleForm.operSchedulesForm.valueChanges.subscribe((data) => {
            this.operSchedulesService.operSchedulesFormValid.next(this.operScheduleForm.operSchedulesForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.operSchedulesService.createOperSchedule();
        this.operSchedulesService.operSchedule = {};
    }
};
OperSchedulesCreateComponent.ctorParameters = () => [
    { type: _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__["OperSchedulesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
OperSchedulesCreateComponent.propDecorators = {
    operScheduleForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operScheduleForm',] }]
};
OperSchedulesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-schedules-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-schedules-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-schedules-create.component.scss */ "./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.scss")).default]
    })
], OperSchedulesCreateComponent);



/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2NoZWR1bGVzL29wZXItc2NoZWR1bGVzLWR1cGxpY2F0ZS9vcGVyLXNjaGVkdWxlcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: OperSchedulesDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSchedulesDuplicateComponent", function() { return OperSchedulesDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OperSchedulesDuplicateComponent = class OperSchedulesDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
OperSchedulesDuplicateComponent.ctorParameters = () => [];
OperSchedulesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-schedules-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-schedules-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-schedules-duplicate.component.scss */ "./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.scss")).default]
    })
], OperSchedulesDuplicateComponent);



/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2NoZWR1bGVzL29wZXItc2NoZWR1bGVzLWVkaXQvb3Blci1zY2hlZHVsZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OperSchedulesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSchedulesEditComponent", function() { return OperSchedulesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-schedules.service */ "./src/app/oper-schedules/oper-schedules.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let OperSchedulesEditComponent = class OperSchedulesEditComponent {
    constructor(operSchedulesService, route, platform) {
        this.operSchedulesService = operSchedulesService;
        this.route = route;
        this.platform = platform;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.operSchedulesService.editOperSchedule(this.id);
    }
    ngAfterViewInit() {
        this.operScheduleForm.operSchedulesForm.valueChanges.subscribe((data) => {
            this.operSchedulesService.operSchedulesFormValid.next(this.operScheduleForm.operSchedulesForm.valid);
        });
    }
};
OperSchedulesEditComponent.ctorParameters = () => [
    { type: _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__["OperSchedulesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
OperSchedulesEditComponent.propDecorators = {
    operScheduleForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operScheduleForm',] }]
};
OperSchedulesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-schedules-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-schedules-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-schedules-edit.component.scss */ "./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.scss")).default]
    })
], OperSchedulesEditComponent);



/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2NoZWR1bGVzL29wZXItc2NoZWR1bGVzLWZvcm0vb3Blci1zY2hlZHVsZXMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OperSchedulesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSchedulesFormComponent", function() { return OperSchedulesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-schedules.service */ "./src/app/oper-schedules/oper-schedules.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let OperSchedulesFormComponent = class OperSchedulesFormComponent {
    constructor(operSchedulesService, toTitlecase) {
        this.operSchedulesService = operSchedulesService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'hous_unit_area_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('housUnitArea - NAME') + ' es obligatorio.' },
            ],
            'oper_sector_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('SECTOR') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setHousUnitAreaId
    setHousUnitAreaId(event) {
        this.operSchedulesService.operSchedule.hous_unit_area_id = event.value ? event.value.id : null;
    }
    // end setHousUnitAreaId
    // set setOperSectorId
    setOperSectorId(event) {
        this.operSchedulesService.operSchedule.oper_sector_id = event.value ? event.value.id : null;
    }
};
OperSchedulesFormComponent.ctorParameters = () => [
    { type: _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__["OperSchedulesService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
OperSchedulesFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    operSchedulesForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operSchedulesForm',] }]
};
OperSchedulesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-schedules-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-schedules-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-schedules-form.component.scss */ "./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.scss")).default]
    })
], OperSchedulesFormComponent);



/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2NoZWR1bGVzL29wZXItc2NoZWR1bGVzLWxpc3Qvb3Blci1zY2hlZHVsZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OperSchedulesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSchedulesListComponent", function() { return OperSchedulesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-schedules.service */ "./src/app/oper-schedules/oper-schedules.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let OperSchedulesListComponent = class OperSchedulesListComponent {
    constructor(operSchedulesService, api, loading) {
        this.operSchedulesService = operSchedulesService;
        this.api = api;
        this.loading = loading;
    }
    ngOnInit() {
        this.operSchedulesService.getOperSchedules();
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
OperSchedulesListComponent.ctorParameters = () => [
    { type: _oper_schedules_service__WEBPACK_IMPORTED_MODULE_2__["OperSchedulesService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }
];
OperSchedulesListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
OperSchedulesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-schedules-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-schedules-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-schedules-list.component.scss */ "./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.scss")).default]
    })
], OperSchedulesListComponent);



/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: OperSchedulesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSchedulesPageRoutingModule", function() { return OperSchedulesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _oper_schedules_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oper-schedules.page */ "./src/app/oper-schedules/oper-schedules.page.ts");
/* harmony import */ var _oper_schedules_edit_oper_schedules_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oper-schedules-edit/oper-schedules-edit.component */ "./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.ts");
/* harmony import */ var _oper_schedules_create_oper_schedules_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oper-schedules-create/oper-schedules-create.component */ "./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.ts");
/* harmony import */ var _oper_schedules_list_oper_schedules_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oper-schedules-list/oper-schedules-list.component */ "./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.ts");







const routes = [
    {
        path: '',
        component: _oper_schedules_page__WEBPACK_IMPORTED_MODULE_3__["OperSchedulesPage"]
    },
    {
        path: 'list',
        component: _oper_schedules_list_oper_schedules_list_component__WEBPACK_IMPORTED_MODULE_6__["OperSchedulesListComponent"]
    },
    {
        path: 'create',
        component: _oper_schedules_create_oper_schedules_create_component__WEBPACK_IMPORTED_MODULE_5__["OperSchedulesCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _oper_schedules_edit_oper_schedules_edit_component__WEBPACK_IMPORTED_MODULE_4__["OperSchedulesEditComponent"]
    },
];
let OperSchedulesPageRoutingModule = class OperSchedulesPageRoutingModule {
};
OperSchedulesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], OperSchedulesPageRoutingModule);



/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules.module.ts ***!
  \*********************************************************/
/*! exports provided: OperSchedulesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSchedulesPageModule", function() { return OperSchedulesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _oper_schedules_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oper-schedules-routing.module */ "./src/app/oper-schedules/oper-schedules-routing.module.ts");
/* harmony import */ var _oper_schedules_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./oper-schedules.page */ "./src/app/oper-schedules/oper-schedules.page.ts");
/* harmony import */ var _oper_schedules_list_oper_schedules_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./oper-schedules-list/oper-schedules-list.component */ "./src/app/oper-schedules/oper-schedules-list/oper-schedules-list.component.ts");
/* harmony import */ var _oper_schedules_create_oper_schedules_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./oper-schedules-create/oper-schedules-create.component */ "./src/app/oper-schedules/oper-schedules-create/oper-schedules-create.component.ts");
/* harmony import */ var _oper_schedules_duplicate_oper_schedules_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./oper-schedules-duplicate/oper-schedules-duplicate.component */ "./src/app/oper-schedules/oper-schedules-duplicate/oper-schedules-duplicate.component.ts");
/* harmony import */ var _oper_schedules_edit_oper_schedules_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./oper-schedules-edit/oper-schedules-edit.component */ "./src/app/oper-schedules/oper-schedules-edit/oper-schedules-edit.component.ts");
/* harmony import */ var _oper_schedules_form_oper_schedules_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./oper-schedules-form/oper-schedules-form.component */ "./src/app/oper-schedules/oper-schedules-form/oper-schedules-form.component.ts");













let OperSchedulesPageModule = class OperSchedulesPageModule {
};
OperSchedulesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _oper_schedules_routing_module__WEBPACK_IMPORTED_MODULE_6__["OperSchedulesPageRoutingModule"]
        ],
        declarations: [
            _oper_schedules_page__WEBPACK_IMPORTED_MODULE_7__["OperSchedulesPage"],
            _oper_schedules_list_oper_schedules_list_component__WEBPACK_IMPORTED_MODULE_8__["OperSchedulesListComponent"],
            _oper_schedules_create_oper_schedules_create_component__WEBPACK_IMPORTED_MODULE_9__["OperSchedulesCreateComponent"],
            _oper_schedules_duplicate_oper_schedules_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["OperSchedulesDuplicateComponent"],
            _oper_schedules_edit_oper_schedules_edit_component__WEBPACK_IMPORTED_MODULE_11__["OperSchedulesEditComponent"],
            _oper_schedules_form_oper_schedules_form_component__WEBPACK_IMPORTED_MODULE_12__["OperSchedulesFormComponent"],
        ]
    })
], OperSchedulesPageModule);



/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2NoZWR1bGVzL29wZXItc2NoZWR1bGVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules.page.ts ***!
  \*******************************************************/
/*! exports provided: OperSchedulesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSchedulesPage", function() { return OperSchedulesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OperSchedulesPage = class OperSchedulesPage {
    constructor() { }
    ngOnInit() {
    }
};
OperSchedulesPage.ctorParameters = () => [];
OperSchedulesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-schedules',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-schedules.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-schedules/oper-schedules.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-schedules.page.scss */ "./src/app/oper-schedules/oper-schedules.page.scss")).default]
    })
], OperSchedulesPage);



/***/ }),

/***/ "./src/app/oper-schedules/oper-schedules.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/oper-schedules/oper-schedules.service.ts ***!
  \**********************************************************/
/*! exports provided: OperSchedulesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSchedulesService", function() { return OperSchedulesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let OperSchedulesService = class OperSchedulesService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.operSchedulesUrl = 'oper-schedules';
        this.operSchedulesFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.operSchedules = [];
        this.operSchedule = {};
        this.operScheduleLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    getOperSchedules(page = this.page, perPage = this.perPage) {
        this.api.get(this.operSchedulesUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.operSchedules = res.data;
            this.operScheduleLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editOperSchedule(id) {
        this.api.get(this.operSchedulesUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.operSchedule = res.data.model;
            this.operScheduleLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateOperSchedule() {
        this.api.put(this.operSchedulesUrl + '/' + this.operSchedule.id, {
            model: this.operSchedule,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getOperSchedules(1);
        });
    }
    createOperSchedule() {
        this.api.get(this.operSchedulesUrl + '/create')
            .subscribe((res) => {
            this.operSchedule = {};
            this.operScheduleLists = res.lists;
        });
    }
    storeOperSchedule() {
        this.api.post(this.operSchedulesUrl, {
            model: this.operSchedule,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getOperSchedules(1);
        });
    }
    deleteOperSchedule(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.operSchedulesUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getOperSchedules(1);
                });
            }
            else {
                return;
            }
        });
    }
};
OperSchedulesService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
OperSchedulesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OperSchedulesService);



/***/ })

}]);
//# sourceMappingURL=oper-schedules-oper-schedules-module-es2015.js.map