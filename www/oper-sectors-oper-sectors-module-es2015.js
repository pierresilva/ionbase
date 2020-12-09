(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oper-sectors-oper-sectors-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-sectors/oper-sectors-create/oper-sectors-create.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-sectors/oper-sectors-create/oper-sectors-create.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/oper-sectors'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"operSectorsService.storeOperSector()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!operSectorsService.operSectorsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'SECTORES OPERATIVOS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-oper-sectors-form #operSectorForm [model]=\"operSectorsService.operSector\"></app-oper-sectors-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-sectors/oper-sectors-duplicate/oper-sectors-duplicate.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-sectors/oper-sectors-duplicate/oper-sectors-duplicate.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  OperSectors duplicate works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-sectors/oper-sectors-edit/oper-sectors-edit.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-sectors/oper-sectors-edit/oper-sectors-edit.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/oper-sectors'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"operSectorsService.updateOperSector()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!operSectorsService.operSectorsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'SECTORES OPERATIVOS' | titlecase}}: {{ operSectorsService.operSector?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-oper-sectors-form #operSectorForm [model]=\"operSectorsService.operSector\"></app-oper-sectors-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-sectors/oper-sectors-form/oper-sectors-form.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-sectors/oper-sectors-form/oper-sectors-form.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #operSectorsForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- hous_unit_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'UNIDADESHABITACIONALE' | titlecase }}</ion-label>\n        <ionic-selectable name=\"hous_unit_id\"\n                          id=\"hous_unit_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.hous_unit\"\n                          [items]=\"operSectorsService.operSectorLists.HousUnit\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('UNIDADES HABITACIONALES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('UNIDADES HABITACIONALES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setHousUnitId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.hous_unit_id\">\n            <div class=\"error-message\" *ngIf=\"operSectorsForm.form.controls['hous_unit_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end hous_unit_id -->\n\n\n    <!-- oper_schedule_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'AGENDA DE OPERACIONES' | titlecase }}</ion-label>\n        <ionic-selectable name=\"oper_schedule_ids\"\n                          id=\"oper_schedule_ids-field\"\n                          [(ngModel)]=\"model.oper_schedules\"\n                          [items]=\"operSectorsService.operSectorLists.OperSchedule\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('AGENDA DE OPERACIONES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('AGENDA DE OPERACIONES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setOperScheduleIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.oper_schedule_ids\">\n            <div class=\"error-message\" *ngIf=\"operSectorsForm.form.controls['oper_schedule_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end oper_schedule_ids -->\n\n\n    <!-- oper_movement_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'MOVIMIENTOS OPERATIVOS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"oper_movement_ids\"\n                          id=\"oper_movement_ids-field\"\n                          [(ngModel)]=\"model.oper_movements\"\n                          [items]=\"operSectorsService.operSectorLists.OperMovement\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('MOVIMIENTOS OPERATIVOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('MOVIMIENTOS OPERATIVOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setOperMovementIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.oper_movement_ids\">\n            <div class=\"error-message\" *ngIf=\"operSectorsForm.form.controls['oper_movement_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end oper_movement_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NAME' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"operSectorsForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- code -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'CÓDIGO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.code\"\n                            type=\"text\"\n                            name=\"code\"\n                            id=\"code-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.code\">\n                    <div class=\"error-message\" *ngIf=\"operSectorsForm.form.controls['code']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end code -->\n\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-sectors/oper-sectors-list/oper-sectors-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-sectors/oper-sectors-list/oper-sectors-list.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'SECTORES OPERATIVOS' | titlecase}}\"\n                 primaryLink=\"oper-sectors/create\"\n                 primaryText=\"Crear {{'SECTORES OPERATIVOS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('SECTORES OPERATIVOS' | lowercase )\"\n                       (ionCancel)=\"this.operSectorsService.searchValue = ''; operSectorsService.getOperSectors()\"\n                       (keyup.enter)=\"operSectorsService.getOperSectors()\"\n                       [(ngModel)]=\"operSectorsService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && operSectorsService.operSectors?.length\">\n        <ion-card *ngFor=\"let operSector of operSectorsService.operSectors; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NAME' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operSector?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CÓDIGO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operSector?.code }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'UNIDADES HABITACIONALES' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/hous-units/{{ operSector?.hous_unit?.id }}/edit\">{{ operSector?.hous_unit?.name }}</a></div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'AGENDA DE OPERACIONES' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"operSector?.oper_schedules?.length\">\n                                <ng-container *ngFor=\"let operSchedule of operSector?.oper_schedules; let last = last\">\n                                    <a routerLink=\"/oper-schedules/{{ operSchedule?.id }}/edit\">{{ operSchedule?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'MOVIMIENTOS OPERATIVOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"operSector?.oper_movements?.length\">\n                                <ng-container *ngFor=\"let operMovement of operSector?.oper_movements; let last = last\">\n                                    <a routerLink=\"/oper-movements/{{ operMovement?.id }}/edit\">{{ operMovement?.name }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/oper-sectors/' + operSector?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"operSectorsService.deleteOperSector(operSector?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !operSectorsService.operSectors?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'SECTORES OPERATIVOS' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/oper-sectors/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'SECTORES OPERATIVOS' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"operSectorsService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"operSectorsService.getOperSectors(operSectorsService.meta.current_page - 1)\"\n                        [disabled]=\"operSectorsService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{operSectorsService.meta.current_page}}\n                /{{operSectorsService.meta.last_page}} {{operSectorsService.meta.from}}-{{operSectorsService.meta.to}}\n                /{{operSectorsService.meta.total}} </ion-button>\n            <ion-button (click)=\"operSectorsService.getOperSectors(operSectorsService.meta.current_page + 1)\"\n                        [disabled]=\"operSectorsService.meta.current_page == operSectorsService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-sectors/oper-sectors.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-sectors/oper-sectors.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"SECTORES OPERATIVOS\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/oper-sectors/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'SECTORES OPERATIVOS'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/oper-sectors/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'SECTORES OPERATIVOS' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/oper-sectors/oper-sectors-create/oper-sectors-create.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/oper-sectors/oper-sectors-create/oper-sectors-create.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2VjdG9ycy9vcGVyLXNlY3RvcnMtY3JlYXRlL29wZXItc2VjdG9ycy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-sectors/oper-sectors-create/oper-sectors-create.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/oper-sectors/oper-sectors-create/oper-sectors-create.component.ts ***!
  \***********************************************************************************/
/*! exports provided: OperSectorsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSectorsCreateComponent", function() { return OperSectorsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_sectors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-sectors.service */ "./src/app/oper-sectors/oper-sectors.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let OperSectorsCreateComponent = class OperSectorsCreateComponent {
    constructor(operSectorsService, route, platform) {
        this.operSectorsService = operSectorsService;
        this.route = route;
        this.platform = platform;
        this.id = null;
        this.formValid = false;
    }
    ngOnInit() {
        this.clearPosts();
    }
    ngAfterViewInit() {
        this.operSectorForm.operSectorsForm.valueChanges.subscribe((data) => {
            this.operSectorsService.operSectorsFormValid.next(this.operSectorForm.operSectorsForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.operSectorsService.createOperSector();
        this.operSectorsService.operSector = {};
    }
};
OperSectorsCreateComponent.ctorParameters = () => [
    { type: _oper_sectors_service__WEBPACK_IMPORTED_MODULE_2__["OperSectorsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
OperSectorsCreateComponent.propDecorators = {
    operSectorForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operSectorForm',] }]
};
OperSectorsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-sectors-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-sectors-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-sectors/oper-sectors-create/oper-sectors-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-sectors-create.component.scss */ "./src/app/oper-sectors/oper-sectors-create/oper-sectors-create.component.scss")).default]
    })
], OperSectorsCreateComponent);



/***/ }),

/***/ "./src/app/oper-sectors/oper-sectors-duplicate/oper-sectors-duplicate.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/oper-sectors/oper-sectors-duplicate/oper-sectors-duplicate.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2VjdG9ycy9vcGVyLXNlY3RvcnMtZHVwbGljYXRlL29wZXItc2VjdG9ycy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-sectors/oper-sectors-duplicate/oper-sectors-duplicate.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/oper-sectors/oper-sectors-duplicate/oper-sectors-duplicate.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OperSectorsDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSectorsDuplicateComponent", function() { return OperSectorsDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OperSectorsDuplicateComponent = class OperSectorsDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
OperSectorsDuplicateComponent.ctorParameters = () => [];
OperSectorsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-sectors-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-sectors-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-sectors/oper-sectors-duplicate/oper-sectors-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-sectors-duplicate.component.scss */ "./src/app/oper-sectors/oper-sectors-duplicate/oper-sectors-duplicate.component.scss")).default]
    })
], OperSectorsDuplicateComponent);



/***/ }),

/***/ "./src/app/oper-sectors/oper-sectors-edit/oper-sectors-edit.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/oper-sectors/oper-sectors-edit/oper-sectors-edit.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2VjdG9ycy9vcGVyLXNlY3RvcnMtZWRpdC9vcGVyLXNlY3RvcnMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-sectors/oper-sectors-edit/oper-sectors-edit.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/oper-sectors/oper-sectors-edit/oper-sectors-edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OperSectorsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSectorsEditComponent", function() { return OperSectorsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_sectors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-sectors.service */ "./src/app/oper-sectors/oper-sectors.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let OperSectorsEditComponent = class OperSectorsEditComponent {
    constructor(operSectorsService, route, platform) {
        this.operSectorsService = operSectorsService;
        this.route = route;
        this.platform = platform;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.operSectorsService.editOperSector(this.id);
    }
    ngAfterViewInit() {
        this.operSectorForm.operSectorsForm.valueChanges.subscribe((data) => {
            this.operSectorsService.operSectorsFormValid.next(this.operSectorForm.operSectorsForm.valid);
        });
    }
};
OperSectorsEditComponent.ctorParameters = () => [
    { type: _oper_sectors_service__WEBPACK_IMPORTED_MODULE_2__["OperSectorsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
OperSectorsEditComponent.propDecorators = {
    operSectorForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operSectorForm',] }]
};
OperSectorsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-sectors-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-sectors-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-sectors/oper-sectors-edit/oper-sectors-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-sectors-edit.component.scss */ "./src/app/oper-sectors/oper-sectors-edit/oper-sectors-edit.component.scss")).default]
    })
], OperSectorsEditComponent);



/***/ }),

/***/ "./src/app/oper-sectors/oper-sectors-form/oper-sectors-form.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/oper-sectors/oper-sectors-form/oper-sectors-form.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2VjdG9ycy9vcGVyLXNlY3RvcnMtZm9ybS9vcGVyLXNlY3RvcnMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-sectors/oper-sectors-form/oper-sectors-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/oper-sectors/oper-sectors-form/oper-sectors-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OperSectorsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSectorsFormComponent", function() { return OperSectorsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_sectors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-sectors.service */ "./src/app/oper-sectors/oper-sectors.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let OperSectorsFormComponent = class OperSectorsFormComponent {
    constructor(operSectorsService, toTitlecase) {
        this.operSectorsService = operSectorsService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NAME') + ' es obligatorio.' },
            ],
            'code': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.' },
            ],
            'hous_unit_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('housUnit - NAME') + ' es obligatorio.' },
            ],
            'oper_schedule_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('AGENDA DE OPERACIONES') + ' es obligatorio.' },
            ],
            'oper_movement_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('MOVIMIENTOS OPERATIVOS') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setHousUnitId
    setHousUnitId(event) {
        this.operSectorsService.operSector.hous_unit_id = event.value ? event.value.id : null;
    }
    // end setHousUnitId
    // set setOperScheduleIds
    setOperScheduleIds(event) {
        let operScheduleIds = null;
        if (event.value.length) {
            operScheduleIds = [];
            for (let i = 0; i < event.value.length; i++) {
                operScheduleIds.push(event.value[i].id);
            }
        }
        this.operSectorsService.operSector.oper_schedule_ids = operScheduleIds;
    }
    // end setOperScheduleIds
    // set setOperMovementIds
    setOperMovementIds(event) {
        let operMovementIds = null;
        if (event.value.length) {
            operMovementIds = [];
            for (let i = 0; i < event.value.length; i++) {
                operMovementIds.push(event.value[i].id);
            }
        }
        this.operSectorsService.operSector.oper_movement_ids = operMovementIds;
    }
};
OperSectorsFormComponent.ctorParameters = () => [
    { type: _oper_sectors_service__WEBPACK_IMPORTED_MODULE_2__["OperSectorsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
OperSectorsFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    operSectorsForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operSectorsForm',] }]
};
OperSectorsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-sectors-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-sectors-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-sectors/oper-sectors-form/oper-sectors-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-sectors-form.component.scss */ "./src/app/oper-sectors/oper-sectors-form/oper-sectors-form.component.scss")).default]
    })
], OperSectorsFormComponent);



/***/ }),

/***/ "./src/app/oper-sectors/oper-sectors-list/oper-sectors-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/oper-sectors/oper-sectors-list/oper-sectors-list.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2VjdG9ycy9vcGVyLXNlY3RvcnMtbGlzdC9vcGVyLXNlY3RvcnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-sectors/oper-sectors-list/oper-sectors-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/oper-sectors/oper-sectors-list/oper-sectors-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OperSectorsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSectorsListComponent", function() { return OperSectorsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_sectors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-sectors.service */ "./src/app/oper-sectors/oper-sectors.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let OperSectorsListComponent = class OperSectorsListComponent {
    constructor(operSectorsService, api, loading) {
        this.operSectorsService = operSectorsService;
        this.api = api;
        this.loading = loading;
    }
    ngOnInit() {
        this.operSectorsService.getOperSectors();
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
OperSectorsListComponent.ctorParameters = () => [
    { type: _oper_sectors_service__WEBPACK_IMPORTED_MODULE_2__["OperSectorsService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }
];
OperSectorsListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
OperSectorsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-sectors-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-sectors-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-sectors/oper-sectors-list/oper-sectors-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-sectors-list.component.scss */ "./src/app/oper-sectors/oper-sectors-list/oper-sectors-list.component.scss")).default]
    })
], OperSectorsListComponent);



/***/ }),

/***/ "./src/app/oper-sectors/oper-sectors-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/oper-sectors/oper-sectors-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OperSectorsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSectorsPageRoutingModule", function() { return OperSectorsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _oper_sectors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oper-sectors.page */ "./src/app/oper-sectors/oper-sectors.page.ts");
/* harmony import */ var _oper_sectors_edit_oper_sectors_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oper-sectors-edit/oper-sectors-edit.component */ "./src/app/oper-sectors/oper-sectors-edit/oper-sectors-edit.component.ts");
/* harmony import */ var _oper_sectors_create_oper_sectors_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oper-sectors-create/oper-sectors-create.component */ "./src/app/oper-sectors/oper-sectors-create/oper-sectors-create.component.ts");
/* harmony import */ var _oper_sectors_list_oper_sectors_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oper-sectors-list/oper-sectors-list.component */ "./src/app/oper-sectors/oper-sectors-list/oper-sectors-list.component.ts");







const routes = [
    {
        path: '',
        component: _oper_sectors_page__WEBPACK_IMPORTED_MODULE_3__["OperSectorsPage"]
    },
    {
        path: 'list',
        component: _oper_sectors_list_oper_sectors_list_component__WEBPACK_IMPORTED_MODULE_6__["OperSectorsListComponent"]
    },
    {
        path: 'create',
        component: _oper_sectors_create_oper_sectors_create_component__WEBPACK_IMPORTED_MODULE_5__["OperSectorsCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _oper_sectors_edit_oper_sectors_edit_component__WEBPACK_IMPORTED_MODULE_4__["OperSectorsEditComponent"]
    },
];
let OperSectorsPageRoutingModule = class OperSectorsPageRoutingModule {
};
OperSectorsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], OperSectorsPageRoutingModule);



/***/ }),

/***/ "./src/app/oper-sectors/oper-sectors.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/oper-sectors/oper-sectors.module.ts ***!
  \*****************************************************/
/*! exports provided: OperSectorsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSectorsPageModule", function() { return OperSectorsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _oper_sectors_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oper-sectors-routing.module */ "./src/app/oper-sectors/oper-sectors-routing.module.ts");
/* harmony import */ var _oper_sectors_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./oper-sectors.page */ "./src/app/oper-sectors/oper-sectors.page.ts");
/* harmony import */ var _oper_sectors_list_oper_sectors_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./oper-sectors-list/oper-sectors-list.component */ "./src/app/oper-sectors/oper-sectors-list/oper-sectors-list.component.ts");
/* harmony import */ var _oper_sectors_create_oper_sectors_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./oper-sectors-create/oper-sectors-create.component */ "./src/app/oper-sectors/oper-sectors-create/oper-sectors-create.component.ts");
/* harmony import */ var _oper_sectors_duplicate_oper_sectors_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./oper-sectors-duplicate/oper-sectors-duplicate.component */ "./src/app/oper-sectors/oper-sectors-duplicate/oper-sectors-duplicate.component.ts");
/* harmony import */ var _oper_sectors_edit_oper_sectors_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./oper-sectors-edit/oper-sectors-edit.component */ "./src/app/oper-sectors/oper-sectors-edit/oper-sectors-edit.component.ts");
/* harmony import */ var _oper_sectors_form_oper_sectors_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./oper-sectors-form/oper-sectors-form.component */ "./src/app/oper-sectors/oper-sectors-form/oper-sectors-form.component.ts");













let OperSectorsPageModule = class OperSectorsPageModule {
};
OperSectorsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _oper_sectors_routing_module__WEBPACK_IMPORTED_MODULE_6__["OperSectorsPageRoutingModule"]
        ],
        declarations: [
            _oper_sectors_page__WEBPACK_IMPORTED_MODULE_7__["OperSectorsPage"],
            _oper_sectors_list_oper_sectors_list_component__WEBPACK_IMPORTED_MODULE_8__["OperSectorsListComponent"],
            _oper_sectors_create_oper_sectors_create_component__WEBPACK_IMPORTED_MODULE_9__["OperSectorsCreateComponent"],
            _oper_sectors_duplicate_oper_sectors_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["OperSectorsDuplicateComponent"],
            _oper_sectors_edit_oper_sectors_edit_component__WEBPACK_IMPORTED_MODULE_11__["OperSectorsEditComponent"],
            _oper_sectors_form_oper_sectors_form_component__WEBPACK_IMPORTED_MODULE_12__["OperSectorsFormComponent"],
        ]
    })
], OperSectorsPageModule);



/***/ }),

/***/ "./src/app/oper-sectors/oper-sectors.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/oper-sectors/oper-sectors.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItc2VjdG9ycy9vcGVyLXNlY3RvcnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/oper-sectors/oper-sectors.page.ts":
/*!***************************************************!*\
  !*** ./src/app/oper-sectors/oper-sectors.page.ts ***!
  \***************************************************/
/*! exports provided: OperSectorsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSectorsPage", function() { return OperSectorsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OperSectorsPage = class OperSectorsPage {
    constructor() { }
    ngOnInit() {
    }
};
OperSectorsPage.ctorParameters = () => [];
OperSectorsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-sectors',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-sectors.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-sectors/oper-sectors.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-sectors.page.scss */ "./src/app/oper-sectors/oper-sectors.page.scss")).default]
    })
], OperSectorsPage);



/***/ }),

/***/ "./src/app/oper-sectors/oper-sectors.service.ts":
/*!******************************************************!*\
  !*** ./src/app/oper-sectors/oper-sectors.service.ts ***!
  \******************************************************/
/*! exports provided: OperSectorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperSectorsService", function() { return OperSectorsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let OperSectorsService = class OperSectorsService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.operSectorsUrl = 'oper-sectors';
        this.operSectorsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.operSectors = [];
        this.operSector = {};
        this.operSectorLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    getOperSectors(page = this.page, perPage = this.perPage) {
        this.api.get(this.operSectorsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.operSectors = res.data;
            this.operSectorLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editOperSector(id) {
        this.api.get(this.operSectorsUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.operSector = res.data.model;
            this.operSectorLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateOperSector() {
        this.api.put(this.operSectorsUrl + '/' + this.operSector.id, {
            model: this.operSector,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getOperSectors(1);
        });
    }
    createOperSector() {
        this.api.get(this.operSectorsUrl + '/create')
            .subscribe((res) => {
            this.operSector = {};
            this.operSectorLists = res.lists;
        });
    }
    storeOperSector() {
        this.api.post(this.operSectorsUrl, {
            model: this.operSector,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getOperSectors(1);
        });
    }
    deleteOperSector(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.operSectorsUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getOperSectors(1);
                });
            }
            else {
                return;
            }
        });
    }
};
OperSectorsService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
OperSectorsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OperSectorsService);



/***/ })

}]);
//# sourceMappingURL=oper-sectors-oper-sectors-module-es2015.js.map