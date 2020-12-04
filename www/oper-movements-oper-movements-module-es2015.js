(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oper-movements-oper-movements-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-create/oper-movements-create.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-create/oper-movements-create.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/oper-movements'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"operMovementsService.storeOperMovement()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!operMovementsService.operMovementsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'MOVIMIENTOS OPERATIVOS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-oper-movements-form #operMovementForm [model]=\"operMovementsService.operMovement\"></app-oper-movements-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-duplicate/oper-movements-duplicate.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-duplicate/oper-movements-duplicate.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  OperMovements duplicate works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-edit/oper-movements-edit.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-edit/oper-movements-edit.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/oper-movements'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"operMovementsService.updateOperMovement()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!operMovementsService.operMovementsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'MOVIMIENTOS OPERATIVOS' | titlecase}}: {{ operMovementsService.operMovement?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-oper-movements-form #operMovementForm [model]=\"operMovementsService.operMovement\"></app-oper-movements-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-form/oper-movements-form.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-form/oper-movements-form.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #operMovementsForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- oper_sector_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'SECTORESOPERATIVO' | titlecase }}</ion-label>\n        <ionic-selectable name=\"oper_sector_id\"\n                          id=\"oper_sector_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.oper_sector\"\n                          [items]=\"operMovementsService.operMovementLists.OperSector\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('SECTORES OPERATIVOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('SECTORES OPERATIVOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setOperSectorId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.oper_sector_id\">\n            <div class=\"error-message\" *ngIf=\"operMovementsForm.form.controls['oper_sector_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end oper_sector_id -->\n\n\n    <!-- oper_contractor_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'CONTRATISTASOPERATIVO' | titlecase }}</ion-label>\n        <ionic-selectable name=\"oper_contractor_id\"\n                          id=\"oper_contractor_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.oper_contractor\"\n                          [items]=\"operMovementsService.operMovementLists.OperContractor\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('CONTRATISTAS OPERATIVOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('CONTRATISTAS OPERATIVOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setOperContractorId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.oper_contractor_id\">\n            <div class=\"error-message\" *ngIf=\"operMovementsForm.form.controls['oper_contractor_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end oper_contractor_id -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"operMovementsForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- date_statr -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'FECHA INICIO' | titlecase }}</ion-label>\n                <ion-datetime name=\"date_statr\"\n                              id=\"date_statr-field\"\n                              [required]=\"true\"\n                              [doneText]=\"'Seleccionar'\"\n                              max=\"2040-12-31\"\n                              [cancelText]=\"'Cancelar'\"\n                              [(ngModel)]=\"model.date_statr\"\n                              displayFormat=\"DD/MM/YYYY\"></ion-datetime>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.date_statr\">\n                    <div class=\"error-message\" *ngIf=\"operMovementsForm.form.controls['date_statr']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end date_statr -->\n\n\n            <!-- date_end -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'FECHA FINAL' | titlecase }}</ion-label>\n                <ion-datetime name=\"date_end\"\n                              id=\"date_end-field\"\n                              [doneText]=\"'Seleccionar'\"\n                              max=\"2040-12-31\"\n                              [cancelText]=\"'Cancelar'\"\n                              [(ngModel)]=\"model.date_end\"\n                              displayFormat=\"DD/MM/YYYY\"></ion-datetime>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.date_end\">\n                    <div class=\"error-message\" *ngIf=\"operMovementsForm.form.controls['date_end']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end date_end -->\n\n\n            <!-- time_start -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'HORA INICIAL' | titlecase }}</ion-label>\n                <ion-datetime name=\"time_start\"\n                              id=\"time_start-field\"\n                              [required]=\"true\"\n                              [doneText]=\"'Seleccionar'\"\n                              max=\"2040-12-31 23:59:59\"\n                              [cancelText]=\"'Cancelar'\"\n                              [(ngModel)]=\"model.time_start\"\n                              displayFormat=\"HH:mm\"></ion-datetime>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.time_start\">\n                    <div class=\"error-message\" *ngIf=\"operMovementsForm.form.controls['time_start']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end time_start -->\n\n\n            <!-- time_end -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'HORA FINAL' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.time_end\"\n                            type=\"text\"\n                            name=\"time_end\"\n                            id=\"time_end-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.time_end\">\n                    <div class=\"error-message\" *ngIf=\"operMovementsForm.form.controls['time_end']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end time_end -->\n\n\n            <!-- time_total -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'TIEMPO UTILIZADO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.time_total\"\n                            type=\"text\"\n                            name=\"time_total\"\n                            id=\"time_total-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.time_total\">\n                    <div class=\"error-message\" *ngIf=\"operMovementsForm.form.controls['time_total']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end time_total -->\n\n\n            <!-- photo -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'FOTO DEL AREA INTERVENIDA' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.photo\"\n                            type=\"text\"\n                            name=\"photo\"\n                            id=\"photo-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.photo\">\n                    <div class=\"error-message\" *ngIf=\"operMovementsForm.form.controls['photo']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end photo -->\n\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-list/oper-movements-list.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-list/oper-movements-list.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'MOVIMIENTOS OPERATIVOS' | titlecase}}\"\n                 primaryLink=\"oper-movements/create\"\n                 primaryText=\"Crear {{'MOVIMIENTOS OPERATIVOS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('MOVIMIENTOS OPERATIVOS' | lowercase )\"\n                       (ionCancel)=\"this.operMovementsService.searchValue = ''; operMovementsService.getOperMovements()\"\n                       (keyup.enter)=\"operMovementsService.getOperMovements()\"\n                       [(ngModel)]=\"operMovementsService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && operMovementsService.operMovements.length\">\n        <ion-card *ngFor=\"let operMovement of operMovementsService.operMovements; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operMovement.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'FECHA INICIO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operMovement.date_statr | dateFormat:'DD/MM/YYYY' }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'FECHA FINAL' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operMovement.date_end | dateFormat:'DD/MM/YYYY' }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'HORA INICIAL' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operMovement.time_start | dateFormat:'HH:mm' }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'HORA FINAL' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operMovement.time_end }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'TIEMPO UTILIZADO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operMovement.time_total }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'FOTO DEL AREA INTERVENIDA' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operMovement.photo }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'SECTORES OPERATIVOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/oper-sectors/{{ operMovement.oper_sector.id }}/edit\">{{ operMovement.oper_sector.name }}</a></div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CONTRATISTAS OPERATIVOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/oper-contractors/{{ operMovement.oper_contractor.id }}/edit\">{{ operMovement.oper_contractor.name }}</a></div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/oper-movements/' + operMovement.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"operMovementsService.deleteOperMovement(operMovement.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !operMovementsService.operMovements.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'MOVIMIENTOS OPERATIVOS' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/oper-movements/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'MOVIMIENTOS OPERATIVOS' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"operMovementsService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"operMovementsService.getOperMovements(operMovementsService.meta.current_page - 1)\"\n                        [disabled]=\"operMovementsService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{operMovementsService.meta.current_page}}\n                /{{operMovementsService.meta.last_page}} {{operMovementsService.meta.from}}-{{operMovementsService.meta.to}}\n                /{{operMovementsService.meta.total}} </ion-button>\n            <ion-button (click)=\"operMovementsService.getOperMovements(operMovementsService.meta.current_page + 1)\"\n                        [disabled]=\"operMovementsService.meta.current_page == operMovementsService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"MOVIMIENTOS OPERATIVOS\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/oper-movements/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'MOVIMIENTOS OPERATIVOS'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/oper-movements/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'MOVIMIENTOS OPERATIVOS' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/oper-movements/oper-movements-create/oper-movements-create.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/oper-movements/oper-movements-create/oper-movements-create.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbW92ZW1lbnRzL29wZXItbW92ZW1lbnRzLWNyZWF0ZS9vcGVyLW1vdmVtZW50cy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-movements/oper-movements-create/oper-movements-create.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/oper-movements/oper-movements-create/oper-movements-create.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OperMovementsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMovementsCreateComponent", function() { return OperMovementsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_movements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-movements.service */ "./src/app/oper-movements/oper-movements.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let OperMovementsCreateComponent = class OperMovementsCreateComponent {
    constructor(operMovementsService, route, platform) {
        this.operMovementsService = operMovementsService;
        this.route = route;
        this.platform = platform;
        this.id = null;
        this.formValid = false;
    }
    ngOnInit() {
        this.clearPosts();
    }
    ngAfterViewInit() {
        this.operMovementForm.operMovementsForm.valueChanges.subscribe((data) => {
            this.operMovementsService.operMovementsFormValid.next(this.operMovementForm.operMovementsForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.operMovementsService.createOperMovement();
        this.operMovementsService.operMovement = {};
    }
};
OperMovementsCreateComponent.ctorParameters = () => [
    { type: _oper_movements_service__WEBPACK_IMPORTED_MODULE_2__["OperMovementsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
OperMovementsCreateComponent.propDecorators = {
    operMovementForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operMovementForm',] }]
};
OperMovementsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-movements-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-movements-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-create/oper-movements-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-movements-create.component.scss */ "./src/app/oper-movements/oper-movements-create/oper-movements-create.component.scss")).default]
    })
], OperMovementsCreateComponent);



/***/ }),

/***/ "./src/app/oper-movements/oper-movements-duplicate/oper-movements-duplicate.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/oper-movements/oper-movements-duplicate/oper-movements-duplicate.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbW92ZW1lbnRzL29wZXItbW92ZW1lbnRzLWR1cGxpY2F0ZS9vcGVyLW1vdmVtZW50cy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-movements/oper-movements-duplicate/oper-movements-duplicate.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/oper-movements/oper-movements-duplicate/oper-movements-duplicate.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: OperMovementsDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMovementsDuplicateComponent", function() { return OperMovementsDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OperMovementsDuplicateComponent = class OperMovementsDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
OperMovementsDuplicateComponent.ctorParameters = () => [];
OperMovementsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-movements-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-movements-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-duplicate/oper-movements-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-movements-duplicate.component.scss */ "./src/app/oper-movements/oper-movements-duplicate/oper-movements-duplicate.component.scss")).default]
    })
], OperMovementsDuplicateComponent);



/***/ }),

/***/ "./src/app/oper-movements/oper-movements-edit/oper-movements-edit.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/oper-movements/oper-movements-edit/oper-movements-edit.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbW92ZW1lbnRzL29wZXItbW92ZW1lbnRzLWVkaXQvb3Blci1tb3ZlbWVudHMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-movements/oper-movements-edit/oper-movements-edit.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/oper-movements/oper-movements-edit/oper-movements-edit.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OperMovementsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMovementsEditComponent", function() { return OperMovementsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_movements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-movements.service */ "./src/app/oper-movements/oper-movements.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let OperMovementsEditComponent = class OperMovementsEditComponent {
    constructor(operMovementsService, route, platform) {
        this.operMovementsService = operMovementsService;
        this.route = route;
        this.platform = platform;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.operMovementsService.editOperMovement(this.id);
    }
    ngAfterViewInit() {
        this.operMovementForm.operMovementsForm.valueChanges.subscribe((data) => {
            this.operMovementsService.operMovementsFormValid.next(this.operMovementForm.operMovementsForm.valid);
        });
    }
};
OperMovementsEditComponent.ctorParameters = () => [
    { type: _oper_movements_service__WEBPACK_IMPORTED_MODULE_2__["OperMovementsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
OperMovementsEditComponent.propDecorators = {
    operMovementForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operMovementForm',] }]
};
OperMovementsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-movements-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-movements-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-edit/oper-movements-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-movements-edit.component.scss */ "./src/app/oper-movements/oper-movements-edit/oper-movements-edit.component.scss")).default]
    })
], OperMovementsEditComponent);



/***/ }),

/***/ "./src/app/oper-movements/oper-movements-form/oper-movements-form.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/oper-movements/oper-movements-form/oper-movements-form.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbW92ZW1lbnRzL29wZXItbW92ZW1lbnRzLWZvcm0vb3Blci1tb3ZlbWVudHMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-movements/oper-movements-form/oper-movements-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/oper-movements/oper-movements-form/oper-movements-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OperMovementsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMovementsFormComponent", function() { return OperMovementsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_movements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-movements.service */ "./src/app/oper-movements/oper-movements.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let OperMovementsFormComponent = class OperMovementsFormComponent {
    constructor(operMovementsService, toTitlecase) {
        this.operMovementsService = operMovementsService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'oper_sector_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('SECTOR') + ' es obligatorio.' },
            ],
            'oper_contractor_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CONTRATISTA') + ' es obligatorio.' },
            ],
            'date_statr': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('FECHA INICIO') + ' es obligatorio.' },
            ],
            'date_end': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('FECHA FINAL') + ' es obligatorio.' },
            ],
            'time_start': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('HORA INICIAL') + ' es obligatorio.' },
            ],
            'time_end': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('HORA FINAL') + ' es obligatorio.' },
            ],
            'time_total': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('TIEMPO UTILIZADO') + ' es obligatorio.' },
            ],
            'photo': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('FOTO DEL AREA INTERVENIDA') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setOperSectorId
    setOperSectorId(event) {
        this.operMovementsService.operMovement.oper_sector_id = event.value ? event.value.id : null;
    }
    // end setOperSectorId
    // set setOperContractorId
    setOperContractorId(event) {
        this.operMovementsService.operMovement.oper_contractor_id = event.value ? event.value.id : null;
    }
};
OperMovementsFormComponent.ctorParameters = () => [
    { type: _oper_movements_service__WEBPACK_IMPORTED_MODULE_2__["OperMovementsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
OperMovementsFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    operMovementsForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operMovementsForm',] }]
};
OperMovementsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-movements-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-movements-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-form/oper-movements-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-movements-form.component.scss */ "./src/app/oper-movements/oper-movements-form/oper-movements-form.component.scss")).default]
    })
], OperMovementsFormComponent);



/***/ }),

/***/ "./src/app/oper-movements/oper-movements-list/oper-movements-list.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/oper-movements/oper-movements-list/oper-movements-list.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbW92ZW1lbnRzL29wZXItbW92ZW1lbnRzLWxpc3Qvb3Blci1tb3ZlbWVudHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-movements/oper-movements-list/oper-movements-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/oper-movements/oper-movements-list/oper-movements-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OperMovementsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMovementsListComponent", function() { return OperMovementsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_movements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-movements.service */ "./src/app/oper-movements/oper-movements.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let OperMovementsListComponent = class OperMovementsListComponent {
    constructor(operMovementsService, api, loading) {
        this.operMovementsService = operMovementsService;
        this.api = api;
        this.loading = loading;
    }
    ngOnInit() {
        this.operMovementsService.getOperMovements();
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
OperMovementsListComponent.ctorParameters = () => [
    { type: _oper_movements_service__WEBPACK_IMPORTED_MODULE_2__["OperMovementsService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }
];
OperMovementsListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
OperMovementsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-movements-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-movements-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements-list/oper-movements-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-movements-list.component.scss */ "./src/app/oper-movements/oper-movements-list/oper-movements-list.component.scss")).default]
    })
], OperMovementsListComponent);



/***/ }),

/***/ "./src/app/oper-movements/oper-movements-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/oper-movements/oper-movements-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: OperMovementsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMovementsPageRoutingModule", function() { return OperMovementsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _oper_movements_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oper-movements.page */ "./src/app/oper-movements/oper-movements.page.ts");
/* harmony import */ var _oper_movements_edit_oper_movements_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oper-movements-edit/oper-movements-edit.component */ "./src/app/oper-movements/oper-movements-edit/oper-movements-edit.component.ts");
/* harmony import */ var _oper_movements_create_oper_movements_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oper-movements-create/oper-movements-create.component */ "./src/app/oper-movements/oper-movements-create/oper-movements-create.component.ts");
/* harmony import */ var _oper_movements_list_oper_movements_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oper-movements-list/oper-movements-list.component */ "./src/app/oper-movements/oper-movements-list/oper-movements-list.component.ts");







const routes = [
    {
        path: '',
        component: _oper_movements_page__WEBPACK_IMPORTED_MODULE_3__["OperMovementsPage"]
    },
    {
        path: 'list',
        component: _oper_movements_list_oper_movements_list_component__WEBPACK_IMPORTED_MODULE_6__["OperMovementsListComponent"]
    },
    {
        path: 'create',
        component: _oper_movements_create_oper_movements_create_component__WEBPACK_IMPORTED_MODULE_5__["OperMovementsCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _oper_movements_edit_oper_movements_edit_component__WEBPACK_IMPORTED_MODULE_4__["OperMovementsEditComponent"]
    },
];
let OperMovementsPageRoutingModule = class OperMovementsPageRoutingModule {
};
OperMovementsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], OperMovementsPageRoutingModule);



/***/ }),

/***/ "./src/app/oper-movements/oper-movements.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/oper-movements/oper-movements.module.ts ***!
  \*********************************************************/
/*! exports provided: OperMovementsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMovementsPageModule", function() { return OperMovementsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _oper_movements_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oper-movements-routing.module */ "./src/app/oper-movements/oper-movements-routing.module.ts");
/* harmony import */ var _oper_movements_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./oper-movements.page */ "./src/app/oper-movements/oper-movements.page.ts");
/* harmony import */ var _oper_movements_list_oper_movements_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./oper-movements-list/oper-movements-list.component */ "./src/app/oper-movements/oper-movements-list/oper-movements-list.component.ts");
/* harmony import */ var _oper_movements_create_oper_movements_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./oper-movements-create/oper-movements-create.component */ "./src/app/oper-movements/oper-movements-create/oper-movements-create.component.ts");
/* harmony import */ var _oper_movements_duplicate_oper_movements_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./oper-movements-duplicate/oper-movements-duplicate.component */ "./src/app/oper-movements/oper-movements-duplicate/oper-movements-duplicate.component.ts");
/* harmony import */ var _oper_movements_edit_oper_movements_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./oper-movements-edit/oper-movements-edit.component */ "./src/app/oper-movements/oper-movements-edit/oper-movements-edit.component.ts");
/* harmony import */ var _oper_movements_form_oper_movements_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./oper-movements-form/oper-movements-form.component */ "./src/app/oper-movements/oper-movements-form/oper-movements-form.component.ts");













let OperMovementsPageModule = class OperMovementsPageModule {
};
OperMovementsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _oper_movements_routing_module__WEBPACK_IMPORTED_MODULE_6__["OperMovementsPageRoutingModule"]
        ],
        declarations: [
            _oper_movements_page__WEBPACK_IMPORTED_MODULE_7__["OperMovementsPage"],
            _oper_movements_list_oper_movements_list_component__WEBPACK_IMPORTED_MODULE_8__["OperMovementsListComponent"],
            _oper_movements_create_oper_movements_create_component__WEBPACK_IMPORTED_MODULE_9__["OperMovementsCreateComponent"],
            _oper_movements_duplicate_oper_movements_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["OperMovementsDuplicateComponent"],
            _oper_movements_edit_oper_movements_edit_component__WEBPACK_IMPORTED_MODULE_11__["OperMovementsEditComponent"],
            _oper_movements_form_oper_movements_form_component__WEBPACK_IMPORTED_MODULE_12__["OperMovementsFormComponent"],
        ]
    })
], OperMovementsPageModule);



/***/ }),

/***/ "./src/app/oper-movements/oper-movements.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/oper-movements/oper-movements.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItbW92ZW1lbnRzL29wZXItbW92ZW1lbnRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-movements/oper-movements.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/oper-movements/oper-movements.page.ts ***!
  \*******************************************************/
/*! exports provided: OperMovementsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMovementsPage", function() { return OperMovementsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OperMovementsPage = class OperMovementsPage {
    constructor() { }
    ngOnInit() {
    }
};
OperMovementsPage.ctorParameters = () => [];
OperMovementsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-movements',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-movements.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-movements/oper-movements.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-movements.page.scss */ "./src/app/oper-movements/oper-movements.page.scss")).default]
    })
], OperMovementsPage);



/***/ }),

/***/ "./src/app/oper-movements/oper-movements.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/oper-movements/oper-movements.service.ts ***!
  \**********************************************************/
/*! exports provided: OperMovementsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperMovementsService", function() { return OperMovementsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let OperMovementsService = class OperMovementsService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.operMovementsUrl = 'oper-movements';
        this.operMovementsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.operMovements = [];
        this.operMovement = {};
        this.operMovementLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    getOperMovements(page = this.page, perPage = this.perPage) {
        this.api.get(this.operMovementsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.operMovements = res.data;
            this.operMovementLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editOperMovement(id) {
        this.api.get(this.operMovementsUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.operMovement = res.data.model;
            this.operMovementLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateOperMovement() {
        this.api.put(this.operMovementsUrl + '/' + this.operMovement.id, {
            model: this.operMovement,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getOperMovements(1);
        });
    }
    createOperMovement() {
        this.api.get(this.operMovementsUrl + '/create')
            .subscribe((res) => {
            this.operMovement = {};
            this.operMovementLists = res.lists;
        });
    }
    storeOperMovement() {
        this.api.post(this.operMovementsUrl, {
            model: this.operMovement,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getOperMovements(1);
        });
    }
    deleteOperMovement(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.operMovementsUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getOperMovements(1);
                });
            }
            else {
                return;
            }
        });
    }
};
OperMovementsService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
OperMovementsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OperMovementsService);



/***/ })

}]);
//# sourceMappingURL=oper-movements-oper-movements-module-es2015.js.map