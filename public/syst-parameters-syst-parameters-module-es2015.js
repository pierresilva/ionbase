(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["syst-parameters-syst-parameters-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-create/syst-parameters-create.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-create/syst-parameters-create.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/syst-parameters'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"systParametersService.storeSystParameter()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!systParametersService.systParametersFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'PARAMETROS' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-syst-parameters-form #systParameterForm [model]=\"systParametersService.systParameter\"></app-syst-parameters-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-duplicate/syst-parameters-duplicate.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-duplicate/syst-parameters-duplicate.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  SystParameters duplicate works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-edit/syst-parameters-edit.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-edit/syst-parameters-edit.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/syst-parameters'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"systParametersService.updateSystParameter()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!systParametersService.systParametersFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'PARAMETROS' | titlecase}}: {{ systParametersService.systParameter?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-syst-parameters-form #systParameterForm [model]=\"systParametersService.systParameter\"></app-syst-parameters-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-form/syst-parameters-form.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-form/syst-parameters-form.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #systParametersForm=\"ngForm\" novalidate autocomplete=\"off\">\r\n\r\n\r\n    <!-- syst_parameter_group_id -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'GRUPOSDEPARAMETRO' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"syst_parameter_group_id\"\r\n                          id=\"syst_parameter_group_id-field\"\r\n                          [required]=\"true\"\r\n                          [(ngModel)]=\"model.syst_parameter_group\"\r\n                          [items]=\"systParametersService.systParameterLists.SystParameterGroup\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('GRUPOS DE PARAMETROS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('GRUPOS DE PARAMETROS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setSystParameterGroupId($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.syst_parameter_group_id\">\r\n            <div class=\"error-message\" *ngIf=\"systParametersForm.form.controls['syst_parameter_group_id']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end syst_parameter_group_id -->\r\n\r\n\r\n    <!-- comp_responsability_ids -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"comp_responsability_ids\"\r\n                          id=\"comp_responsability_ids-field\"\r\n                          [(ngModel)]=\"model.comp_responsabilities\"\r\n                          [items]=\"systParametersService.systParameterLists.CompResponsability\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('EMPRESAS RESPONSABILIDADES LEGALES' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('EMPRESAS RESPONSABILIDADES LEGALES' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setCompResponsabilityIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.comp_responsability_ids\">\r\n            <div class=\"error-message\" *ngIf=\"systParametersForm.form.controls['comp_responsability_ids']?.hasError(validation.type)\">\r\n            {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end comp_responsability_ids -->\r\n\r\n\r\n            <!-- name -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.name\"\r\n                            type=\"text\"\r\n                            name=\"name\"\r\n                            id=\"name-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n                    <div class=\"error-message\" *ngIf=\"systParametersForm.form.controls['name']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end name -->\r\n\r\n\r\n            <!-- code -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'CÓDIGO' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.code\"\r\n                            type=\"text\"\r\n                            name=\"code\"\r\n                            id=\"code-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.code\">\r\n                    <div class=\"error-message\" *ngIf=\"systParametersForm.form.controls['code']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end code -->\r\n\r\n\r\n            <!-- riched_text -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'TEXTO ENRIQUECIDO' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.riched_text\"\r\n                            type=\"text\"\r\n                            name=\"riched_text\"\r\n                            id=\"riched_text-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.riched_text\">\r\n                    <div class=\"error-message\" *ngIf=\"systParametersForm.form.controls['riched_text']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end riched_text -->\r\n\r\n\r\n            <!-- value -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'VALOR' | titlecase }}</ion-label>\r\n                <ion-textarea [(ngModel)]=\"model.value\"\r\n                              name=\"value\"\r\n                              id=\"value-field\"\r\n                              [required]=\"true\"\r\n                              rows=\"6\"\r\n                              placeholder=\"\"></ion-textarea>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.value\">\r\n                    <div class=\"error-message\" *ngIf=\"systParametersForm.form.controls['value']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end value -->\r\n\r\n\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-list/syst-parameters-list.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-list/syst-parameters-list.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'PARAMETROS' | titlecase}}\"\r\n                 primaryLink=\"syst-parameters/create\"\r\n                 primaryText=\"Crear {{'PARAMETROS' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-searchbar showCancelButton=\"focus\"\r\n                       [cancelButtonText]=\"'Cancelar'\"\r\n                       [placeholder]=\"'Buscar ' + ('PARAMETROS' | lowercase )\"\r\n                       (ionCancel)=\"this.systParametersService.searchValue = ''; systParametersService.getSystParameters()\"\r\n                       (keyup.enter)=\"systParametersService.getSystParameters()\"\r\n                       [(ngModel)]=\"systParametersService.searchValue\"></ion-searchbar>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && systParametersService.systParameters?.length\">\r\n        <ion-card *ngFor=\"let systParameter of systParametersService.systParameters; let index = index\">\r\n            <ion-list>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ systParameter?.name }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'CÓDIGO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ systParameter?.code }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'TEXTO ENRIQUECIDO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ systParameter?.riched_text }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'VALOR' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ systParameter?.value }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'GRUPOS DE PARAMETROS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\"><a routerLink=\"/syst-parameter-groups/{{ systParameter?.syst_parameter_group?.id }}/edit\">{{ systParameter?.syst_parameter_group?.name }}</a></div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'EMPRESAS RESPONSABILIDADES LEGALES' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">\r\n                            <ng-container *ngIf=\"systParameter?.comp_responsabilities?.length\">\r\n                                <ng-container *ngFor=\"let compResponsability of systParameter?.comp_responsabilities; let last = last\">\r\n                                    <a routerLink=\"/comp-responsabilities/{{ compResponsability?.id }}/edit\">{{ compResponsability?.name }}</a><span *ngIf=\"!last\">, </span>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n                    </ion-item>\r\n            </ion-list>\r\n            <ion-footer>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/syst-parameters/' + systParameter?.id + '/edit'\">\r\n                            <ion-icon name=\"create-outline\"></ion-icon>\r\n                            <div>Editar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"systParametersService.deleteSystParameter(systParameter?.id)\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            <div>Eliminar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-footer>\r\n        </ion-card>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && !systParametersService.systParameters?.length\">\r\n        <ion-item>\r\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label><h2>No se encontraron {{'PARAMETROS' | titlecase}}</h2></ion-label>\r\n            <ion-button [routerLink]=\"'/syst-parameters/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\r\n                Crear {{'PARAMETROS' | titlecase}}\r\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"systParametersService.meta\">\r\n        <ion-col class=\"ion-text-center\" size=\"12\">\r\n            <ion-button (click)=\"systParametersService.getSystParameters(systParametersService.meta.current_page - 1)\"\r\n                        [disabled]=\"systParametersService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{systParametersService.meta.current_page}}\r\n                /{{systParametersService.meta.last_page}} {{systParametersService.meta.from}}-{{systParametersService.meta.to}}\r\n                /{{systParametersService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"systParametersService.getSystParameters(systParametersService.meta.current_page + 1)\"\r\n                        [disabled]=\"systParametersService.meta.current_page == systParametersService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"PARAMETROS\"></app-main-header>\r\n\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/syst-parameters/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'PARAMETROS'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/syst-parameters/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'PARAMETROS' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/syst-parameters/syst-parameters-create/syst-parameters-create.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/syst-parameters/syst-parameters-create/syst-parameters-create.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcGFyYW1ldGVycy9zeXN0LXBhcmFtZXRlcnMtY3JlYXRlL3N5c3QtcGFyYW1ldGVycy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/syst-parameters/syst-parameters-create/syst-parameters-create.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/syst-parameters/syst-parameters-create/syst-parameters-create.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SystParametersCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystParametersCreateComponent", function() { return SystParametersCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _syst_parameters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../syst-parameters.service */ "./src/app/syst-parameters/syst-parameters.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let SystParametersCreateComponent = class SystParametersCreateComponent {
    constructor(systParametersService, route, platform, splitPanel) {
        this.systParametersService = systParametersService;
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
        this.systParameterForm.systParametersForm.valueChanges.subscribe((data) => {
            this.systParametersService.systParametersFormValid.next(this.systParameterForm.systParametersForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.systParametersService.createSystParameter();
        this.systParametersService.systParameter = {};
    }
};
SystParametersCreateComponent.ctorParameters = () => [
    { type: _syst_parameters_service__WEBPACK_IMPORTED_MODULE_2__["SystParametersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
SystParametersCreateComponent.propDecorators = {
    systParameterForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['systParameterForm',] }]
};
SystParametersCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-parameters-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-parameters-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-create/syst-parameters-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-parameters-create.component.scss */ "./src/app/syst-parameters/syst-parameters-create/syst-parameters-create.component.scss")).default]
    })
], SystParametersCreateComponent);



/***/ }),

/***/ "./src/app/syst-parameters/syst-parameters-duplicate/syst-parameters-duplicate.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/syst-parameters/syst-parameters-duplicate/syst-parameters-duplicate.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcGFyYW1ldGVycy9zeXN0LXBhcmFtZXRlcnMtZHVwbGljYXRlL3N5c3QtcGFyYW1ldGVycy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/syst-parameters/syst-parameters-duplicate/syst-parameters-duplicate.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/syst-parameters/syst-parameters-duplicate/syst-parameters-duplicate.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: SystParametersDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystParametersDuplicateComponent", function() { return SystParametersDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SystParametersDuplicateComponent = class SystParametersDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
SystParametersDuplicateComponent.ctorParameters = () => [];
SystParametersDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-parameters-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-parameters-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-duplicate/syst-parameters-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-parameters-duplicate.component.scss */ "./src/app/syst-parameters/syst-parameters-duplicate/syst-parameters-duplicate.component.scss")).default]
    })
], SystParametersDuplicateComponent);



/***/ }),

/***/ "./src/app/syst-parameters/syst-parameters-edit/syst-parameters-edit.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/syst-parameters/syst-parameters-edit/syst-parameters-edit.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcGFyYW1ldGVycy9zeXN0LXBhcmFtZXRlcnMtZWRpdC9zeXN0LXBhcmFtZXRlcnMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/syst-parameters/syst-parameters-edit/syst-parameters-edit.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/syst-parameters/syst-parameters-edit/syst-parameters-edit.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SystParametersEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystParametersEditComponent", function() { return SystParametersEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _syst_parameters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../syst-parameters.service */ "./src/app/syst-parameters/syst-parameters.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let SystParametersEditComponent = class SystParametersEditComponent {
    constructor(systParametersService, route, platform, splitPanel) {
        this.systParametersService = systParametersService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.systParametersService.editSystParameter(this.id);
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    ngAfterViewInit() {
        this.systParameterForm.systParametersForm.valueChanges.subscribe((data) => {
            this.systParametersService.systParametersFormValid.next(this.systParameterForm.systParametersForm.valid);
        });
    }
};
SystParametersEditComponent.ctorParameters = () => [
    { type: _syst_parameters_service__WEBPACK_IMPORTED_MODULE_2__["SystParametersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
SystParametersEditComponent.propDecorators = {
    systParameterForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['systParameterForm',] }]
};
SystParametersEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-parameters-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-parameters-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-edit/syst-parameters-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-parameters-edit.component.scss */ "./src/app/syst-parameters/syst-parameters-edit/syst-parameters-edit.component.scss")).default]
    })
], SystParametersEditComponent);



/***/ }),

/***/ "./src/app/syst-parameters/syst-parameters-form/syst-parameters-form.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/syst-parameters/syst-parameters-form/syst-parameters-form.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcGFyYW1ldGVycy9zeXN0LXBhcmFtZXRlcnMtZm9ybS9zeXN0LXBhcmFtZXRlcnMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/syst-parameters/syst-parameters-form/syst-parameters-form.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/syst-parameters/syst-parameters-form/syst-parameters-form.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SystParametersFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystParametersFormComponent", function() { return SystParametersFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _syst_parameters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../syst-parameters.service */ "./src/app/syst-parameters/syst-parameters.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let SystParametersFormComponent = class SystParametersFormComponent {
    constructor(systParametersService, toTitlecase) {
        this.systParametersService = systParametersService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'syst_parameter_group_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('GRUPO') + ' es obligatorio.' },
            ],
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'code': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.' },
            ],
            'riched_text': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('TEXTO ENRIQUECIDO') + ' es obligatorio.' },
            ],
            'value': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('VALOR') + ' es obligatorio.' },
            ],
            'comp_responsability_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('EMPRESAS RESPONSABILIDADES LEGALES') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setSystParameterGroupId
    setSystParameterGroupId(event) {
        this.systParametersService.systParameter.syst_parameter_group_id = event.value ? event.value.id : null;
    }
    // end setSystParameterGroupId
    // set setCompResponsabilityIds
    setCompResponsabilityIds(event) {
        let compResponsabilityIds = null;
        if (event.value.length) {
            compResponsabilityIds = [];
            for (let i = 0; i < event.value.length; i++) {
                compResponsabilityIds.push(event.value[i].id);
            }
        }
        this.systParametersService.systParameter.comp_responsability_ids = compResponsabilityIds;
    }
};
SystParametersFormComponent.ctorParameters = () => [
    { type: _syst_parameters_service__WEBPACK_IMPORTED_MODULE_2__["SystParametersService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
SystParametersFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    systParametersForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['systParametersForm',] }]
};
SystParametersFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-parameters-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-parameters-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-form/syst-parameters-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-parameters-form.component.scss */ "./src/app/syst-parameters/syst-parameters-form/syst-parameters-form.component.scss")).default]
    })
], SystParametersFormComponent);



/***/ }),

/***/ "./src/app/syst-parameters/syst-parameters-list/syst-parameters-list.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/syst-parameters/syst-parameters-list/syst-parameters-list.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcGFyYW1ldGVycy9zeXN0LXBhcmFtZXRlcnMtbGlzdC9zeXN0LXBhcmFtZXRlcnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/syst-parameters/syst-parameters-list/syst-parameters-list.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/syst-parameters/syst-parameters-list/syst-parameters-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SystParametersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystParametersListComponent", function() { return SystParametersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _syst_parameters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../syst-parameters.service */ "./src/app/syst-parameters/syst-parameters.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");







let SystParametersListComponent = class SystParametersListComponent {
    constructor(systParametersService, api, loading, splitPanel) {
        this.systParametersService = systParametersService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
        this.systParametersService.getSystParameters();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
SystParametersListComponent.ctorParameters = () => [
    { type: _syst_parameters_service__WEBPACK_IMPORTED_MODULE_2__["SystParametersService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] }
];
SystParametersListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
SystParametersListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-parameters-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-parameters-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters-list/syst-parameters-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-parameters-list.component.scss */ "./src/app/syst-parameters/syst-parameters-list/syst-parameters-list.component.scss")).default]
    })
], SystParametersListComponent);



/***/ }),

/***/ "./src/app/syst-parameters/syst-parameters-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/syst-parameters/syst-parameters-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SystParametersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystParametersPageRoutingModule", function() { return SystParametersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _syst_parameters_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./syst-parameters.page */ "./src/app/syst-parameters/syst-parameters.page.ts");
/* harmony import */ var _syst_parameters_edit_syst_parameters_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./syst-parameters-edit/syst-parameters-edit.component */ "./src/app/syst-parameters/syst-parameters-edit/syst-parameters-edit.component.ts");
/* harmony import */ var _syst_parameters_create_syst_parameters_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./syst-parameters-create/syst-parameters-create.component */ "./src/app/syst-parameters/syst-parameters-create/syst-parameters-create.component.ts");
/* harmony import */ var _syst_parameters_list_syst_parameters_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./syst-parameters-list/syst-parameters-list.component */ "./src/app/syst-parameters/syst-parameters-list/syst-parameters-list.component.ts");







const routes = [
    {
        path: '',
        component: _syst_parameters_page__WEBPACK_IMPORTED_MODULE_3__["SystParametersPage"]
    },
    {
        path: 'list',
        component: _syst_parameters_list_syst_parameters_list_component__WEBPACK_IMPORTED_MODULE_6__["SystParametersListComponent"]
    },
    {
        path: 'create',
        component: _syst_parameters_create_syst_parameters_create_component__WEBPACK_IMPORTED_MODULE_5__["SystParametersCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _syst_parameters_edit_syst_parameters_edit_component__WEBPACK_IMPORTED_MODULE_4__["SystParametersEditComponent"]
    },
];
let SystParametersPageRoutingModule = class SystParametersPageRoutingModule {
};
SystParametersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], SystParametersPageRoutingModule);



/***/ }),

/***/ "./src/app/syst-parameters/syst-parameters.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/syst-parameters/syst-parameters.module.ts ***!
  \***********************************************************/
/*! exports provided: SystParametersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystParametersPageModule", function() { return SystParametersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _syst_parameters_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./syst-parameters-routing.module */ "./src/app/syst-parameters/syst-parameters-routing.module.ts");
/* harmony import */ var _syst_parameters_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./syst-parameters.page */ "./src/app/syst-parameters/syst-parameters.page.ts");
/* harmony import */ var _syst_parameters_list_syst_parameters_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./syst-parameters-list/syst-parameters-list.component */ "./src/app/syst-parameters/syst-parameters-list/syst-parameters-list.component.ts");
/* harmony import */ var _syst_parameters_create_syst_parameters_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./syst-parameters-create/syst-parameters-create.component */ "./src/app/syst-parameters/syst-parameters-create/syst-parameters-create.component.ts");
/* harmony import */ var _syst_parameters_duplicate_syst_parameters_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./syst-parameters-duplicate/syst-parameters-duplicate.component */ "./src/app/syst-parameters/syst-parameters-duplicate/syst-parameters-duplicate.component.ts");
/* harmony import */ var _syst_parameters_edit_syst_parameters_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./syst-parameters-edit/syst-parameters-edit.component */ "./src/app/syst-parameters/syst-parameters-edit/syst-parameters-edit.component.ts");
/* harmony import */ var _syst_parameters_form_syst_parameters_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./syst-parameters-form/syst-parameters-form.component */ "./src/app/syst-parameters/syst-parameters-form/syst-parameters-form.component.ts");













let SystParametersPageModule = class SystParametersPageModule {
};
SystParametersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _syst_parameters_routing_module__WEBPACK_IMPORTED_MODULE_6__["SystParametersPageRoutingModule"]
        ],
        declarations: [
            _syst_parameters_page__WEBPACK_IMPORTED_MODULE_7__["SystParametersPage"],
            _syst_parameters_list_syst_parameters_list_component__WEBPACK_IMPORTED_MODULE_8__["SystParametersListComponent"],
            _syst_parameters_create_syst_parameters_create_component__WEBPACK_IMPORTED_MODULE_9__["SystParametersCreateComponent"],
            _syst_parameters_duplicate_syst_parameters_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["SystParametersDuplicateComponent"],
            _syst_parameters_edit_syst_parameters_edit_component__WEBPACK_IMPORTED_MODULE_11__["SystParametersEditComponent"],
            _syst_parameters_form_syst_parameters_form_component__WEBPACK_IMPORTED_MODULE_12__["SystParametersFormComponent"],
        ]
    })
], SystParametersPageModule);



/***/ }),

/***/ "./src/app/syst-parameters/syst-parameters.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/syst-parameters/syst-parameters.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3QtcGFyYW1ldGVycy9zeXN0LXBhcmFtZXRlcnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/syst-parameters/syst-parameters.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/syst-parameters/syst-parameters.page.ts ***!
  \*********************************************************/
/*! exports provided: SystParametersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystParametersPage", function() { return SystParametersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");



let SystParametersPage = class SystParametersPage {
    constructor(splitPanel) {
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
};
SystParametersPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] }
];
SystParametersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-syst-parameters',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./syst-parameters.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/syst-parameters/syst-parameters.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./syst-parameters.page.scss */ "./src/app/syst-parameters/syst-parameters.page.scss")).default]
    })
], SystParametersPage);



/***/ }),

/***/ "./src/app/syst-parameters/syst-parameters.service.ts":
/*!************************************************************!*\
  !*** ./src/app/syst-parameters/syst-parameters.service.ts ***!
  \************************************************************/
/*! exports provided: SystParametersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystParametersService", function() { return SystParametersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let SystParametersService = class SystParametersService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.systParametersUrl = 'syst-parameters';
        this.systParametersFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.systParameters = [];
        this.systParameter = {};
        this.systParameterLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    getSystParameters(page = this.page, perPage = this.perPage) {
        this.api.get(this.systParametersUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.systParameters = res.data;
            this.systParameterLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editSystParameter(id) {
        this.api.get(this.systParametersUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.systParameter = res.data.model;
            this.systParameterLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateSystParameter() {
        this.api.put(this.systParametersUrl + '/' + this.systParameter.id, {
            model: this.systParameter,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getSystParameters(1);
        });
    }
    createSystParameter() {
        this.api.get(this.systParametersUrl + '/create')
            .subscribe((res) => {
            this.systParameter = {};
            this.systParameterLists = res.lists;
        });
    }
    storeSystParameter() {
        this.api.post(this.systParametersUrl, {
            model: this.systParameter,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getSystParameters(1);
        });
    }
    deleteSystParameter(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.systParametersUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getSystParameters(1);
                });
            }
            else {
                return;
            }
        });
    }
};
SystParametersService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
SystParametersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SystParametersService);



/***/ })

}]);
//# sourceMappingURL=syst-parameters-syst-parameters-module-es2015.js.map