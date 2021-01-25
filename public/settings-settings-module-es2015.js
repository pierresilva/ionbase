(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings-create/settings-create.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings-create/settings-create.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/settings'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"settingsService.storeSetting()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!settingsService.settingsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'AJUSTES' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-settings-form #settingForm [model]=\"settingsService.setting\"></app-settings-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings-duplicate/settings-duplicate.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings-duplicate/settings-duplicate.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  Settings duplicate works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings-edit/settings-edit.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings-edit/settings-edit.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/settings'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"settingsService.updateSetting()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!settingsService.settingsFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'AJUSTES' | titlecase}}: {{ settingsService.setting?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-settings-form #settingForm [model]=\"settingsService.setting\"></app-settings-form>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings-form/settings-form.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings-form/settings-form.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #settingsForm=\"ngForm\"\n      novalidate\n      autocomplete=\"off\">\n\n\n    <!-- setting_group_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'GRUPO' | titlecase }}</ion-label>\n        <ionic-selectable name=\"setting_group_id\"\n                          id=\"setting_group_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.setting_group\"\n                          [items]=\"settingsService.settingLists.SettingGroup\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('GRUPOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('GRUPOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setSettingGroupId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.setting_group_id\">\n            <div class=\"error-message\"\n                 *ngIf=\"settingsForm.form.controls['setting_group_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end setting_group_id -->\n\n\n    <!-- name -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n        <ion-input [(ngModel)]=\"model.name\"\n                   type=\"text\"\n                   name=\"name\"\n                   id=\"name-field\"\n                   [required]=\"true\"\n                   placeholder=\"\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.name\">\n            <div class=\"error-message\"\n                 *ngIf=\"settingsForm.form.controls['name']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end name -->\n\n\n    <!-- code -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'CÓDIGO' | titlecase }}</ion-label>\n        <ion-input [(ngModel)]=\"model.code\"\n                   type=\"text\"\n                   name=\"code\"\n                   id=\"code-field\"\n                   [readonly]=\"true\"\n                   placeholder=\"\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.code\">\n            <div class=\"error-message\"\n                 *ngIf=\"settingsForm.form.controls['code']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end code -->\n\n    <!-- rich_text -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'Texto enriquecido' | titlecase }}</ion-label>\n        <ion-toggle name=\"main\"\n                    id=\"main-field\"\n                    slot=\"end\"\n                    [(ngModel)]=\"model.rich_text\"></ion-toggle>\n    </ion-item>\n    <!-- end main -->\n\n\n    <!-- value -->\n    <ion-item class=\"item-transparent\" *ngIf=\"model.rich_text\">\n        <ion-label position=\"stacked\"\n                   style=\"font-size: 1rem;\">{{ 'VALOR' | titlecase }}</ion-label>\n        <input [ngxSummernote]\n               [required]=\"true\"\n               name=\"value\"\n               id=\"value-field\"\n               [(ngModel)]=\"model.value\">\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.value\">\n            <div class=\"error-message\"\n                 *ngIf=\"settingsForm.form.controls['value']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end value -->\n\n    <!-- value -->\n    <ion-item class=\"item-transparent\" *ngIf=\"!model.rich_text\">\n        <ion-label position=\"stacked\"\n                   style=\"font-size: 1rem;\">{{ 'VALOR' | titlecase }}</ion-label>\n        <ion-textarea [(ngModel)]=\"model.value\"\n                      name=\"value\"\n                      [required]=\"true\"\n                      id=\"value-field\"\n                      rows=\"6\"\n                      placeholder=\"\"></ion-textarea>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.value\">\n            <div class=\"error-message\"\n                 *ngIf=\"settingsForm.form.controls['value']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end value -->\n\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings-list/settings-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings-list/settings-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'AJUSTES' | titlecase}}\"\n                 primaryLink=\"settings/create\"\n                 primaryText=\"Crear {{'AJUSTES' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('AJUSTES' | lowercase )\"\n                       (ionCancel)=\"this.settingsService.searchValue = ''; settingsService.getSettings()\"\n                       (keyup.enter)=\"settingsService.getSettings()\"\n                       [(ngModel)]=\"settingsService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && settingsService.settings?.length\">\n        <ion-card *ngFor=\"let setting of settingsService.settings; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ setting?.name }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CÓDIGO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ setting?.code }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'VALOR' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ setting?.value | stripHtml }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'AJUSTES GRUPOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\"><a routerLink=\"/setting-groups/{{ setting?.setting_group?.id }}/edit\">{{ setting?.setting_group?.name }}</a></div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/settings/' + setting?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"settingsService.deleteSetting(setting?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !settingsService.settings?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'AJUSTES' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/settings/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'AJUSTES' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"settingsService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"settingsService.getSettings(settingsService.meta.current_page - 1)\"\n                        [disabled]=\"settingsService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{settingsService.meta.current_page}}\n                /{{settingsService.meta.last_page}} {{settingsService.meta.from}}-{{settingsService.meta.to}}\n                /{{settingsService.meta.total}} </ion-button>\n            <ion-button (click)=\"settingsService.getSettings(settingsService.meta.current_page + 1)\"\n                        [disabled]=\"settingsService.meta.current_page == settingsService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings-modal/settings-modal.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings-modal/settings-modal.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"closeModal()\">\n                <ion-icon slot=\"icon-only\"\n                          [name]=\"'arrow-back-outline'\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"primary\">\n            <ion-button color=\"success\"\n                        (click)=\"settingsService.saveSetting(); closeModal()\"\n                        [disabled]=\"!settingsFormComponent?.settingsForm?.valid\">\n                <ion-icon slot=\"icon-only\"\n                          [name]=\"'save-outline'\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>{{action}} Parametro</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <app-settings-form #settingsFormComponent></app-settings-form>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"AJUSTES\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/settings/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'AJUSTES'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/settings/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'AJUSTES' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/settings/settings-create/settings-create.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/settings/settings-create/settings-create.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLWNyZWF0ZS9zZXR0aW5ncy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/settings/settings-create/settings-create.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/settings/settings-create/settings-create.component.ts ***!
  \***********************************************************************/
/*! exports provided: SettingsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsCreateComponent", function() { return SettingsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let SettingsCreateComponent = class SettingsCreateComponent {
    constructor(settingsService, route, platform, splitPanel) {
        this.settingsService = settingsService;
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
        this.settingForm.settingsForm.valueChanges.subscribe((data) => {
            this.settingsService.settingsFormValid.next(this.settingForm.settingsForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.settingsService.createSetting();
        this.settingsService.setting = {};
    }
};
SettingsCreateComponent.ctorParameters = () => [
    { type: _settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
SettingsCreateComponent.propDecorators = {
    settingForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['settingForm',] }]
};
SettingsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings-create/settings-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings-create.component.scss */ "./src/app/settings/settings-create/settings-create.component.scss")).default]
    })
], SettingsCreateComponent);



/***/ }),

/***/ "./src/app/settings/settings-duplicate/settings-duplicate.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/settings/settings-duplicate/settings-duplicate.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLWR1cGxpY2F0ZS9zZXR0aW5ncy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/settings/settings-duplicate/settings-duplicate.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/settings/settings-duplicate/settings-duplicate.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SettingsDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsDuplicateComponent", function() { return SettingsDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SettingsDuplicateComponent = class SettingsDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
SettingsDuplicateComponent.ctorParameters = () => [];
SettingsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings-duplicate/settings-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings-duplicate.component.scss */ "./src/app/settings/settings-duplicate/settings-duplicate.component.scss")).default]
    })
], SettingsDuplicateComponent);



/***/ }),

/***/ "./src/app/settings/settings-edit/settings-edit.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/settings/settings-edit/settings-edit.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLWVkaXQvc2V0dGluZ3MtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/settings/settings-edit/settings-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/settings/settings-edit/settings-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: SettingsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsEditComponent", function() { return SettingsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let SettingsEditComponent = class SettingsEditComponent {
    constructor(settingsService, route, platform, splitPanel) {
        this.settingsService = settingsService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.settingsService.editSetting(this.id);
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    ngAfterViewInit() {
        this.settingForm.settingsForm.valueChanges.subscribe((data) => {
            this.settingsService.settingsFormValid.next(this.settingForm.settingsForm.valid);
        });
    }
};
SettingsEditComponent.ctorParameters = () => [
    { type: _settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
SettingsEditComponent.propDecorators = {
    settingForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['settingForm',] }]
};
SettingsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings-edit/settings-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings-edit.component.scss */ "./src/app/settings/settings-edit/settings-edit.component.scss")).default]
    })
], SettingsEditComponent);



/***/ }),

/***/ "./src/app/settings/settings-form/settings-form.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/settings/settings-form/settings-form.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLWZvcm0vc2V0dGluZ3MtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/settings/settings-form/settings-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/settings/settings-form/settings-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: SettingsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsFormComponent", function() { return SettingsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let SettingsFormComponent = class SettingsFormComponent {
    constructor(settingsService, toTitlecase) {
        this.settingsService = settingsService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'code': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.' },
            ],
            'value': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('VALOR') + ' es obligatorio.' },
            ],
            'rich_text': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('TEXTO ENRIQUECIDO') + ' es obligatorio.' },
            ],
            'setting_group_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('GRUPO') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setSettingGroupId
    setSettingGroupId(event) {
        this.settingsService.setting.setting_group_id = event.value ? event.value.id : null;
    }
};
SettingsFormComponent.ctorParameters = () => [
    { type: _settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
SettingsFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    settingsForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['settingsForm',] }]
};
SettingsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings-form/settings-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings-form.component.scss */ "./src/app/settings/settings-form/settings-form.component.scss")).default]
    })
], SettingsFormComponent);



/***/ }),

/***/ "./src/app/settings/settings-list/settings-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/settings/settings-list/settings-list.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLWxpc3Qvc2V0dGluZ3MtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/settings/settings-list/settings-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/settings/settings-list/settings-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: SettingsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsListComponent", function() { return SettingsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");







let SettingsListComponent = class SettingsListComponent {
    constructor(settingsService, api, loading, splitPanel) {
        this.settingsService = settingsService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
        this.settingsService.getSettings();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
SettingsListComponent.ctorParameters = () => [
    { type: _settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] }
];
SettingsListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
SettingsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings-list/settings-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings-list.component.scss */ "./src/app/settings/settings-list/settings-list.component.scss")).default]
    })
], SettingsListComponent);



/***/ }),

/***/ "./src/app/settings/settings-modal/settings-modal.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/settings/settings-modal/settings-modal.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLW1vZGFsL3NldHRpbmdzLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/settings/settings-modal/settings-modal.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/settings/settings-modal/settings-modal.component.ts ***!
  \*********************************************************************/
/*! exports provided: SettingsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModalComponent", function() { return SettingsModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings.service */ "./src/app/settings/settings.service.ts");




let SettingsModalComponent = class SettingsModalComponent {
    constructor(modalController, navParams, settingsService) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.settingsService = settingsService;
    }
    ngOnInit() {
        this.action = this.navParams.data.action;
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss(onClosedData);
        });
    }
};
SettingsModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] }
];
SettingsModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings-modal/settings-modal.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings-modal.component.scss */ "./src/app/settings/settings-modal/settings-modal.component.scss")).default]
    })
], SettingsModalComponent);



/***/ }),

/***/ "./src/app/settings/settings-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");
/* harmony import */ var _settings_edit_settings_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings-edit/settings-edit.component */ "./src/app/settings/settings-edit/settings-edit.component.ts");
/* harmony import */ var _settings_create_settings_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-create/settings-create.component */ "./src/app/settings/settings-create/settings-create.component.ts");
/* harmony import */ var _settings_list_settings_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings-list/settings-list.component */ "./src/app/settings/settings-list/settings-list.component.ts");







const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    },
    {
        path: 'list',
        component: _settings_list_settings_list_component__WEBPACK_IMPORTED_MODULE_6__["SettingsListComponent"]
    },
    {
        path: 'create',
        component: _settings_create_settings_create_component__WEBPACK_IMPORTED_MODULE_5__["SettingsCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _settings_edit_settings_edit_component__WEBPACK_IMPORTED_MODULE_4__["SettingsEditComponent"]
    },
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/settings/settings-routing.module.ts");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");
/* harmony import */ var _settings_list_settings_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings-list/settings-list.component */ "./src/app/settings/settings-list/settings-list.component.ts");
/* harmony import */ var _settings_create_settings_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings-create/settings-create.component */ "./src/app/settings/settings-create/settings-create.component.ts");
/* harmony import */ var _settings_duplicate_settings_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings-duplicate/settings-duplicate.component */ "./src/app/settings/settings-duplicate/settings-duplicate.component.ts");
/* harmony import */ var _settings_edit_settings_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings-edit/settings-edit.component */ "./src/app/settings/settings-edit/settings-edit.component.ts");
/* harmony import */ var _settings_form_settings_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settings-form/settings-form.component */ "./src/app/settings/settings-form/settings-form.component.ts");
/* harmony import */ var _settings_modal_settings_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./settings-modal/settings-modal.component */ "./src/app/settings/settings-modal/settings-modal.component.ts");














let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_6__["SettingsPageRoutingModule"]
        ],
        declarations: [
            _settings_page__WEBPACK_IMPORTED_MODULE_7__["SettingsPage"],
            _settings_list_settings_list_component__WEBPACK_IMPORTED_MODULE_8__["SettingsListComponent"],
            _settings_create_settings_create_component__WEBPACK_IMPORTED_MODULE_9__["SettingsCreateComponent"],
            _settings_duplicate_settings_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["SettingsDuplicateComponent"],
            _settings_edit_settings_edit_component__WEBPACK_IMPORTED_MODULE_11__["SettingsEditComponent"],
            _settings_form_settings_form_component__WEBPACK_IMPORTED_MODULE_12__["SettingsFormComponent"],
            _settings_modal_settings_modal_component__WEBPACK_IMPORTED_MODULE_13__["SettingsModalComponent"],
        ]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");



let SettingsPage = class SettingsPage {
    constructor(splitPanel) {
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
};
SettingsPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] }
];
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")).default]
    })
], SettingsPage);



/***/ }),

/***/ "./src/app/settings/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/settings/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let SettingsService = class SettingsService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.settingsUrl = 'settings';
        this.settingsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.settings = [];
        this.setting = {};
        this.settingLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    getSettings(page = this.page, perPage = this.perPage) {
        this.api.get(this.settingsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.settings = res.data;
            this.settingLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editSetting(id) {
        this.api.get(this.settingsUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.setting = res.data.model;
            this.settingLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateSetting() {
        this.api.put(this.settingsUrl + '/' + this.setting.id, {
            model: this.setting,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getSettings(1);
        });
    }
    createSetting() {
        this.api.get(this.settingsUrl + '/create')
            .subscribe((res) => {
            this.setting = {};
            this.settingLists = res.lists;
        });
    }
    storeSetting() {
        this.api.post(this.settingsUrl, {
            model: this.setting,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getSettings(1);
        });
    }
    deleteSetting(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.settingsUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getSettings(1);
                });
            }
            else {
                return;
            }
        });
    }
    saveSetting() { }
};
SettingsService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
SettingsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SettingsService);



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map