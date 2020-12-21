(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oper-replacements-oper-replacements-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-replacements/oper-replacements-create/oper-replacements-create.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-replacements/oper-replacements-create/oper-replacements-create.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/oper-replacements'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"operReplacementsService.storeOperReplacement()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!operReplacementsService.operReplacementsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'OPERATIVIDAD REPUESTOS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-oper-replacements-form #operReplacementForm [model]=\"operReplacementsService.operReplacement\"></app-oper-replacements-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-replacements/oper-replacements-duplicate/oper-replacements-duplicate.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-replacements/oper-replacements-duplicate/oper-replacements-duplicate.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  OperReplacements duplicate works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-replacements/oper-replacements-edit/oper-replacements-edit.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-replacements/oper-replacements-edit/oper-replacements-edit.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/oper-replacements'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"operReplacementsService.updateOperReplacement()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!operReplacementsService.operReplacementsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'OPERATIVIDAD REPUESTOS' | titlecase}}: {{ operReplacementsService.operReplacement?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-oper-replacements-form #operReplacementForm [model]=\"operReplacementsService.operReplacement\"></app-oper-replacements-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-replacements/oper-replacements-form/oper-replacements-form.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-replacements/oper-replacements-form/oper-replacements-form.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #operReplacementsForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- oper_machine_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'MAQUINARIA' | titlecase }}</ion-label>\n        <ionic-selectable name=\"oper_machine_id\"\n                          id=\"oper_machine_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.oper_machine\"\n                          [items]=\"operReplacementsService.operReplacementLists.OperMachine\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('MAQUINARIA' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('MAQUINARIA' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setOperMachineId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.oper_machine_id\">\n            <div class=\"error-message\" *ngIf=\"operReplacementsForm.form.controls['oper_machine_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end oper_machine_id -->\n\n\n    <!-- oper_contractor_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'CONTRATISTA' | titlecase }}</ion-label>\n        <ionic-selectable name=\"oper_contractor_id\"\n                          id=\"oper_contractor_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.oper_contractor\"\n                          [items]=\"operReplacementsService.operReplacementLists.OperContractor\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('CONTRATISTA' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('CONTRATISTA' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setOperContractorId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.oper_contractor_id\">\n            <div class=\"error-message\" *ngIf=\"operReplacementsForm.form.controls['oper_contractor_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end oper_contractor_id -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"operReplacementsForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- date -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'FECHA' | titlecase }}</ion-label>\n                <ion-datetime name=\"date\"\n                              id=\"date-field\"\n                              [doneText]=\"'Seleccionar'\"\n                              [cancelText]=\"'Cancelar'\"\n                              [(ngModel)]=\"model.date\"\n                              displayFormat=\"DD/MM/YYYY\"></ion-datetime>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.date\">\n                    <div class=\"error-message\" *ngIf=\"operReplacementsForm.form.controls['date']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end date -->\n\n\n            <!-- time -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'HORA' | titlecase }}</ion-label>\n                <ion-datetime name=\"time\"\n                              id=\"time-field\"\n                              [doneText]=\"'Seleccionar'\"\n                              [cancelText]=\"'Cancelar'\"\n                              [(ngModel)]=\"model.time\"\n                              displayFormat=\"HH:mm\"></ion-datetime>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.time\">\n                    <div class=\"error-message\" *ngIf=\"operReplacementsForm.form.controls['time']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end time -->\n\n\n            <!-- warranty -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'GARANTIA' | titlecase }}</ion-label>\n                <ion-textarea [(ngModel)]=\"model.warranty\"\n                              name=\"warranty\"\n                              id=\"warranty-field\"\n                              rows=\"6\"\n                              placeholder=\"\"></ion-textarea>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.warranty\">\n                    <div class=\"error-message\" *ngIf=\"operReplacementsForm.form.controls['warranty']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end warranty -->\n\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-replacements/oper-replacements-list/oper-replacements-list.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-replacements/oper-replacements-list/oper-replacements-list.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'OPERATIVIDAD REPUESTOS' | titlecase}}\"\n                 primaryLink=\"oper-replacements/create\"\n                 primaryText=\"Crear {{'OPERATIVIDAD REPUESTOS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('OPERATIVIDAD REPUESTOS' | lowercase )\"\n                       (ionCancel)=\"this.operReplacementsService.searchValue = ''; operReplacementsService.getOperReplacements()\"\n                       (keyup.enter)=\"operReplacementsService.getOperReplacements()\"\n                       [(ngModel)]=\"operReplacementsService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && operReplacementsService.operReplacements?.length\">\n        <ion-card *ngFor=\"let operReplacement of operReplacementsService.operReplacements; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operReplacement?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'FECHA' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operReplacement?.date | dateFormat:'DD/MM/YYYY' }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'HORA' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operReplacement?.time | dateFormat:'HH:mm' }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'GARANTIA' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ operReplacement?.warranty }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'OPERATIVIDAD MAQUINARIA' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/oper-machines/{{ operReplacement?.oper_machine?.id }}/edit\">{{ operReplacement?.oper_machine?.name }}</a></div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CONTRATISTAS OPERATIVOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/oper-contractors/{{ operReplacement?.oper_contractor?.id }}/edit\">{{ operReplacement?.oper_contractor?.name }}</a></div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/oper-replacements/' + operReplacement?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"operReplacementsService.deleteOperReplacement(operReplacement?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !operReplacementsService.operReplacements?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'OPERATIVIDAD REPUESTOS' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/oper-replacements/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'OPERATIVIDAD REPUESTOS' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"operReplacementsService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"operReplacementsService.getOperReplacements(operReplacementsService.meta.current_page - 1)\"\n                        [disabled]=\"operReplacementsService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{operReplacementsService.meta.current_page}}\n                /{{operReplacementsService.meta.last_page}} {{operReplacementsService.meta.from}}-{{operReplacementsService.meta.to}}\n                /{{operReplacementsService.meta.total}} </ion-button>\n            <ion-button (click)=\"operReplacementsService.getOperReplacements(operReplacementsService.meta.current_page + 1)\"\n                        [disabled]=\"operReplacementsService.meta.current_page == operReplacementsService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-replacements/oper-replacements.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oper-replacements/oper-replacements.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"OPERATIVIDAD REPUESTOS\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/oper-replacements/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'OPERATIVIDAD REPUESTOS'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/oper-replacements/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'OPERATIVIDAD REPUESTOS' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/oper-replacements/oper-replacements-create/oper-replacements-create.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/oper-replacements/oper-replacements-create/oper-replacements-create.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItcmVwbGFjZW1lbnRzL29wZXItcmVwbGFjZW1lbnRzLWNyZWF0ZS9vcGVyLXJlcGxhY2VtZW50cy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-replacements/oper-replacements-create/oper-replacements-create.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/oper-replacements/oper-replacements-create/oper-replacements-create.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: OperReplacementsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperReplacementsCreateComponent", function() { return OperReplacementsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_replacements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-replacements.service */ "./src/app/oper-replacements/oper-replacements.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let OperReplacementsCreateComponent = class OperReplacementsCreateComponent {
    constructor(operReplacementsService, route, platform, splitPanel) {
        this.operReplacementsService = operReplacementsService;
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
        this.operReplacementForm.operReplacementsForm.valueChanges.subscribe((data) => {
            this.operReplacementsService.operReplacementsFormValid.next(this.operReplacementForm.operReplacementsForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.operReplacementsService.createOperReplacement();
        this.operReplacementsService.operReplacement = {};
    }
};
OperReplacementsCreateComponent.ctorParameters = () => [
    { type: _oper_replacements_service__WEBPACK_IMPORTED_MODULE_2__["OperReplacementsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
OperReplacementsCreateComponent.propDecorators = {
    operReplacementForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operReplacementForm',] }]
};
OperReplacementsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-replacements-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-replacements-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-replacements/oper-replacements-create/oper-replacements-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-replacements-create.component.scss */ "./src/app/oper-replacements/oper-replacements-create/oper-replacements-create.component.scss")).default]
    })
], OperReplacementsCreateComponent);



/***/ }),

/***/ "./src/app/oper-replacements/oper-replacements-duplicate/oper-replacements-duplicate.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/oper-replacements/oper-replacements-duplicate/oper-replacements-duplicate.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItcmVwbGFjZW1lbnRzL29wZXItcmVwbGFjZW1lbnRzLWR1cGxpY2F0ZS9vcGVyLXJlcGxhY2VtZW50cy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/oper-replacements/oper-replacements-duplicate/oper-replacements-duplicate.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/oper-replacements/oper-replacements-duplicate/oper-replacements-duplicate.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: OperReplacementsDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperReplacementsDuplicateComponent", function() { return OperReplacementsDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OperReplacementsDuplicateComponent = class OperReplacementsDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
OperReplacementsDuplicateComponent.ctorParameters = () => [];
OperReplacementsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-replacements-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-replacements-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-replacements/oper-replacements-duplicate/oper-replacements-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-replacements-duplicate.component.scss */ "./src/app/oper-replacements/oper-replacements-duplicate/oper-replacements-duplicate.component.scss")).default]
    })
], OperReplacementsDuplicateComponent);



/***/ }),

/***/ "./src/app/oper-replacements/oper-replacements-edit/oper-replacements-edit.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/oper-replacements/oper-replacements-edit/oper-replacements-edit.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItcmVwbGFjZW1lbnRzL29wZXItcmVwbGFjZW1lbnRzLWVkaXQvb3Blci1yZXBsYWNlbWVudHMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-replacements/oper-replacements-edit/oper-replacements-edit.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/oper-replacements/oper-replacements-edit/oper-replacements-edit.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: OperReplacementsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperReplacementsEditComponent", function() { return OperReplacementsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_replacements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-replacements.service */ "./src/app/oper-replacements/oper-replacements.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let OperReplacementsEditComponent = class OperReplacementsEditComponent {
    constructor(operReplacementsService, route, platform, splitPanel) {
        this.operReplacementsService = operReplacementsService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.operReplacementsService.editOperReplacement(this.id);
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    ngAfterViewInit() {
        this.operReplacementForm.operReplacementsForm.valueChanges.subscribe((data) => {
            this.operReplacementsService.operReplacementsFormValid.next(this.operReplacementForm.operReplacementsForm.valid);
        });
    }
};
OperReplacementsEditComponent.ctorParameters = () => [
    { type: _oper_replacements_service__WEBPACK_IMPORTED_MODULE_2__["OperReplacementsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
OperReplacementsEditComponent.propDecorators = {
    operReplacementForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operReplacementForm',] }]
};
OperReplacementsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-replacements-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-replacements-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-replacements/oper-replacements-edit/oper-replacements-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-replacements-edit.component.scss */ "./src/app/oper-replacements/oper-replacements-edit/oper-replacements-edit.component.scss")).default]
    })
], OperReplacementsEditComponent);



/***/ }),

/***/ "./src/app/oper-replacements/oper-replacements-form/oper-replacements-form.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/oper-replacements/oper-replacements-form/oper-replacements-form.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* generated section */\n/* end generated section */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blci1yZXBsYWNlbWVudHMvb3Blci1yZXBsYWNlbWVudHMtZm9ybS9vcGVyLXJlcGxhY2VtZW50cy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFBO0FBRUEsMEJBQUEiLCJmaWxlIjoic3JjL2FwcC9vcGVyLXJlcGxhY2VtZW50cy9vcGVyLXJlcGxhY2VtZW50cy1mb3JtL29wZXItcmVwbGFjZW1lbnRzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnZW5lcmF0ZWQgc2VjdGlvbiAqL1xuXG4vKiBlbmQgZ2VuZXJhdGVkIHNlY3Rpb24gKi9cbiJdfQ== */");

/***/ }),

/***/ "./src/app/oper-replacements/oper-replacements-form/oper-replacements-form.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/oper-replacements/oper-replacements-form/oper-replacements-form.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: OperReplacementsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperReplacementsFormComponent", function() { return OperReplacementsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_replacements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-replacements.service */ "./src/app/oper-replacements/oper-replacements.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let OperReplacementsFormComponent = class OperReplacementsFormComponent {
    constructor(operReplacementsService, toTitlecase) {
        this.operReplacementsService = operReplacementsService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'oper_machine_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('MAQUINA') + ' es obligatorio.' },
            ],
            'oper_contractor_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CONTRATISTA') + ' es obligatorio.' },
            ],
            'date': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('FECHA') + ' es obligatorio.' },
            ],
            'time': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('HORA') + ' es obligatorio.' },
            ],
            'warranty': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('GARANTIA') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setOperMachineId
    setOperMachineId(event) {
        this.operReplacementsService.operReplacement.oper_machine_id = event.value ? event.value.id : null;
    }
    // end setOperMachineId
    // set setOperContractorId
    setOperContractorId(event) {
        this.operReplacementsService.operReplacement.oper_contractor_id = event.value ? event.value.id : null;
    }
};
OperReplacementsFormComponent.ctorParameters = () => [
    { type: _oper_replacements_service__WEBPACK_IMPORTED_MODULE_2__["OperReplacementsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
OperReplacementsFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    operReplacementsForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['operReplacementsForm',] }]
};
OperReplacementsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-replacements-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-replacements-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-replacements/oper-replacements-form/oper-replacements-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-replacements-form.component.scss */ "./src/app/oper-replacements/oper-replacements-form/oper-replacements-form.component.scss")).default]
    })
], OperReplacementsFormComponent);



/***/ }),

/***/ "./src/app/oper-replacements/oper-replacements-list/oper-replacements-list.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/oper-replacements/oper-replacements-list/oper-replacements-list.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItcmVwbGFjZW1lbnRzL29wZXItcmVwbGFjZW1lbnRzLWxpc3Qvb3Blci1yZXBsYWNlbWVudHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-replacements/oper-replacements-list/oper-replacements-list.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/oper-replacements/oper-replacements-list/oper-replacements-list.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: OperReplacementsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperReplacementsListComponent", function() { return OperReplacementsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oper_replacements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oper-replacements.service */ "./src/app/oper-replacements/oper-replacements.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");







let OperReplacementsListComponent = class OperReplacementsListComponent {
    constructor(operReplacementsService, api, loading, splitPanel) {
        this.operReplacementsService = operReplacementsService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
        this.operReplacementsService.getOperReplacements();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
OperReplacementsListComponent.ctorParameters = () => [
    { type: _oper_replacements_service__WEBPACK_IMPORTED_MODULE_2__["OperReplacementsService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] }
];
OperReplacementsListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
OperReplacementsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-replacements-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-replacements-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-replacements/oper-replacements-list/oper-replacements-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-replacements-list.component.scss */ "./src/app/oper-replacements/oper-replacements-list/oper-replacements-list.component.scss")).default]
    })
], OperReplacementsListComponent);



/***/ }),

/***/ "./src/app/oper-replacements/oper-replacements-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/oper-replacements/oper-replacements-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: OperReplacementsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperReplacementsPageRoutingModule", function() { return OperReplacementsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _oper_replacements_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oper-replacements.page */ "./src/app/oper-replacements/oper-replacements.page.ts");
/* harmony import */ var _oper_replacements_edit_oper_replacements_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oper-replacements-edit/oper-replacements-edit.component */ "./src/app/oper-replacements/oper-replacements-edit/oper-replacements-edit.component.ts");
/* harmony import */ var _oper_replacements_create_oper_replacements_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oper-replacements-create/oper-replacements-create.component */ "./src/app/oper-replacements/oper-replacements-create/oper-replacements-create.component.ts");
/* harmony import */ var _oper_replacements_list_oper_replacements_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oper-replacements-list/oper-replacements-list.component */ "./src/app/oper-replacements/oper-replacements-list/oper-replacements-list.component.ts");







const routes = [
    // generated section
    {
        path: '',
        data: {
            title: 'OPERATIVIDAD REPUESTOS',
            roles: ['admin'],
        },
        component: _oper_replacements_page__WEBPACK_IMPORTED_MODULE_3__["OperReplacementsPage"]
    },
    {
        path: 'list',
        data: {
            title: 'OPERATIVIDAD REPUESTOS',
            roles: ['admin'],
        },
        component: _oper_replacements_list_oper_replacements_list_component__WEBPACK_IMPORTED_MODULE_6__["OperReplacementsListComponent"]
    },
    {
        path: 'create',
        data: {
            title: 'OPERATIVIDAD REPUESTOS',
            roles: ['admin'],
        },
        component: _oper_replacements_create_oper_replacements_create_component__WEBPACK_IMPORTED_MODULE_5__["OperReplacementsCreateComponent"]
    },
    {
        path: ':id/edit',
        data: {
            title: 'OPERATIVIDAD REPUESTOS',
            roles: ['admin'],
        },
        component: _oper_replacements_edit_oper_replacements_edit_component__WEBPACK_IMPORTED_MODULE_4__["OperReplacementsEditComponent"]
    },
];
// end generated section
let OperReplacementsPageRoutingModule = class OperReplacementsPageRoutingModule {
};
OperReplacementsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], OperReplacementsPageRoutingModule);



/***/ }),

/***/ "./src/app/oper-replacements/oper-replacements.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/oper-replacements/oper-replacements.module.ts ***!
  \***************************************************************/
/*! exports provided: OperReplacementsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperReplacementsPageModule", function() { return OperReplacementsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _oper_replacements_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oper-replacements-routing.module */ "./src/app/oper-replacements/oper-replacements-routing.module.ts");
/* harmony import */ var _oper_replacements_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./oper-replacements.page */ "./src/app/oper-replacements/oper-replacements.page.ts");
/* harmony import */ var _oper_replacements_list_oper_replacements_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./oper-replacements-list/oper-replacements-list.component */ "./src/app/oper-replacements/oper-replacements-list/oper-replacements-list.component.ts");
/* harmony import */ var _oper_replacements_create_oper_replacements_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./oper-replacements-create/oper-replacements-create.component */ "./src/app/oper-replacements/oper-replacements-create/oper-replacements-create.component.ts");
/* harmony import */ var _oper_replacements_duplicate_oper_replacements_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./oper-replacements-duplicate/oper-replacements-duplicate.component */ "./src/app/oper-replacements/oper-replacements-duplicate/oper-replacements-duplicate.component.ts");
/* harmony import */ var _oper_replacements_edit_oper_replacements_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./oper-replacements-edit/oper-replacements-edit.component */ "./src/app/oper-replacements/oper-replacements-edit/oper-replacements-edit.component.ts");
/* harmony import */ var _oper_replacements_form_oper_replacements_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./oper-replacements-form/oper-replacements-form.component */ "./src/app/oper-replacements/oper-replacements-form/oper-replacements-form.component.ts");













let OperReplacementsPageModule = class OperReplacementsPageModule {
};
OperReplacementsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            // imports generated section
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _oper_replacements_routing_module__WEBPACK_IMPORTED_MODULE_6__["OperReplacementsPageRoutingModule"]
            // end imports generated section
        ],
        declarations: [
            // declarations generated section
            _oper_replacements_page__WEBPACK_IMPORTED_MODULE_7__["OperReplacementsPage"],
            _oper_replacements_list_oper_replacements_list_component__WEBPACK_IMPORTED_MODULE_8__["OperReplacementsListComponent"],
            _oper_replacements_create_oper_replacements_create_component__WEBPACK_IMPORTED_MODULE_9__["OperReplacementsCreateComponent"],
            _oper_replacements_duplicate_oper_replacements_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["OperReplacementsDuplicateComponent"],
            _oper_replacements_edit_oper_replacements_edit_component__WEBPACK_IMPORTED_MODULE_11__["OperReplacementsEditComponent"],
            _oper_replacements_form_oper_replacements_form_component__WEBPACK_IMPORTED_MODULE_12__["OperReplacementsFormComponent"],
        ]
    })
], OperReplacementsPageModule);



/***/ }),

/***/ "./src/app/oper-replacements/oper-replacements.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/oper-replacements/oper-replacements.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXItcmVwbGFjZW1lbnRzL29wZXItcmVwbGFjZW1lbnRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/oper-replacements/oper-replacements.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/oper-replacements/oper-replacements.page.ts ***!
  \*************************************************************/
/*! exports provided: OperReplacementsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperReplacementsPage", function() { return OperReplacementsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");



let OperReplacementsPage = class OperReplacementsPage {
    constructor(splitPanel) {
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
};
OperReplacementsPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] }
];
OperReplacementsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oper-replacements',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oper-replacements.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oper-replacements/oper-replacements.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oper-replacements.page.scss */ "./src/app/oper-replacements/oper-replacements.page.scss")).default]
    })
], OperReplacementsPage);



/***/ }),

/***/ "./src/app/oper-replacements/oper-replacements.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/oper-replacements/oper-replacements.service.ts ***!
  \****************************************************************/
/*! exports provided: OperReplacementsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperReplacementsService", function() { return OperReplacementsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let OperReplacementsService = class OperReplacementsService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.operReplacementsUrl = 'oper-replacements';
        this.operReplacementsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.operReplacements = [];
        this.operReplacement = {};
        this.operReplacementLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    // generated section
    getOperReplacements(page = this.page, perPage = this.perPage) {
        this.api.get(this.operReplacementsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.operReplacements = res.data;
            this.operReplacementLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editOperReplacement(id) {
        this.api.get(this.operReplacementsUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.operReplacement = res.data.model;
            this.operReplacementLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateOperReplacement() {
        this.api.put(this.operReplacementsUrl + '/' + this.operReplacement.id, {
            model: this.operReplacement,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getOperReplacements(1);
        });
    }
    createOperReplacement() {
        this.api.get(this.operReplacementsUrl + '/create')
            .subscribe((res) => {
            this.operReplacement = {};
            this.operReplacementLists = res.lists;
        });
    }
    storeOperReplacement() {
        this.api.post(this.operReplacementsUrl, {
            model: this.operReplacement,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getOperReplacements(1);
        });
    }
    deleteOperReplacement(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.operReplacementsUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getOperReplacements(1);
                });
            }
            else {
                return;
            }
        });
    }
};
OperReplacementsService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
OperReplacementsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OperReplacementsService);



/***/ })

}]);
//# sourceMappingURL=oper-replacements-oper-replacements-module-es2015.js.map