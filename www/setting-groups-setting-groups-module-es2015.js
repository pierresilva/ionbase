(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-groups-setting-groups-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-create/setting-groups-create.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-create/setting-groups-create.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/setting-groups'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"settingGroupsService.storeSettingGroup()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!settingGroupsService.settingGroupsFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'AJUSTES GRUPOS' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-setting-groups-form #settingGroupForm [model]=\"settingGroupsService.settingGroup\"></app-setting-groups-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-duplicate/setting-groups-duplicate.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-duplicate/setting-groups-duplicate.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  SettingGroups duplicate works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-edit/setting-groups-edit.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-edit/setting-groups-edit.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/setting-groups'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"settingGroupsService.updateSettingGroup()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!settingGroupsService.settingGroupsFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'AJUSTES GRUPOS' | titlecase}}: {{ settingGroupsService.settingGroup?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-setting-groups-form #settingGroupForm [model]=\"settingGroupsService.settingGroup\"></app-setting-groups-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-form/setting-groups-form.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-form/setting-groups-form.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #settingGroupsForm=\"ngForm\" novalidate autocomplete=\"off\">\r\n\r\n\r\n    <!-- setting_ids -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'AJUSTES' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"setting_ids\"\r\n                          id=\"setting_ids-field\"\r\n                          [(ngModel)]=\"model.settings\"\r\n                          [items]=\"settingGroupsService.settingGroupLists.Setting\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('AJUSTES' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('AJUSTES' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setSettingIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.setting_ids\">\r\n            <div class=\"error-message\" *ngIf=\"settingGroupsForm.form.controls['setting_ids']?.hasError(validation.type)\">\r\n            {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end setting_ids -->\r\n\r\n\r\n            <!-- name -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.name\"\r\n                            type=\"text\"\r\n                            name=\"name\"\r\n                            id=\"name-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n                    <div class=\"error-message\" *ngIf=\"settingGroupsForm.form.controls['name']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end name -->\r\n\r\n\r\n            <!-- code -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'CÓDIGO' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.code\"\r\n                            type=\"text\"\r\n                            name=\"code\"\r\n                            id=\"code-field\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.code\">\r\n                    <div class=\"error-message\" *ngIf=\"settingGroupsForm.form.controls['code']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end code -->\r\n\r\n\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-list/setting-groups-list.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-list/setting-groups-list.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'AJUSTES GRUPOS' | titlecase}}\"\r\n                 primaryLink=\"setting-groups/create\"\r\n                 primaryText=\"Crear {{'AJUSTES GRUPOS' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-searchbar showCancelButton=\"focus\"\r\n                       [cancelButtonText]=\"'Cancelar'\"\r\n                       [placeholder]=\"'Buscar ' + ('AJUSTES GRUPOS' | lowercase )\"\r\n                       (ionCancel)=\"this.settingGroupsService.searchValue = ''; settingGroupsService.getSettingGroups()\"\r\n                       (keyup.enter)=\"settingGroupsService.getSettingGroups()\"\r\n                       [(ngModel)]=\"settingGroupsService.searchValue\"></ion-searchbar>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && settingGroupsService.settingGroups?.length\">\r\n        <ion-card *ngFor=\"let settingGroup of settingGroupsService.settingGroups; let index = index\">\r\n            <ion-list>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ settingGroup?.name }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'CÓDIGO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ settingGroup?.code }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'AJUSTES' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">\r\n                            <ng-container *ngIf=\"settingGroup?.settings?.length\">\r\n                                <ng-container *ngFor=\"let setting of settingGroup?.settings; let last = last\">\r\n                                    <a routerLink=\"/settings/{{ setting?.id }}/edit\">{{ setting?.name }}</a><span *ngIf=\"!last\">, </span>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n                    </ion-item>\r\n            </ion-list>\r\n            <ion-footer>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/setting-groups/' + settingGroup?.id + '/edit'\">\r\n                            <ion-icon name=\"create-outline\"></ion-icon>\r\n                            <div>Editar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"settingGroupsService.deleteSettingGroup(settingGroup?.id)\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            <div>Eliminar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-footer>\r\n        </ion-card>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && !settingGroupsService.settingGroups?.length\">\r\n        <ion-item>\r\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label><h2>No se encontraron {{'AJUSTES GRUPOS' | titlecase}}</h2></ion-label>\r\n            <ion-button [routerLink]=\"'/setting-groups/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\r\n                Crear {{'AJUSTES GRUPOS' | titlecase}}\r\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"settingGroupsService.meta\">\r\n        <ion-col class=\"ion-text-center\" size=\"12\">\r\n            <ion-button (click)=\"settingGroupsService.getSettingGroups(settingGroupsService.meta.current_page - 1)\"\r\n                        [disabled]=\"settingGroupsService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{settingGroupsService.meta.current_page}}\r\n                /{{settingGroupsService.meta.last_page}} {{settingGroupsService.meta.from}}-{{settingGroupsService.meta.to}}\r\n                /{{settingGroupsService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"settingGroupsService.getSettingGroups(settingGroupsService.meta.current_page + 1)\"\r\n                        [disabled]=\"settingGroupsService.meta.current_page == settingGroupsService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- my-modal.page.html -->\r\n<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-button (click)=\"closeModal()\">\r\n                <ion-icon slot=\"icon-only\"\r\n                          [name]=\"'arrow-back-outline'\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button color=\"success\"\r\n                        (click)=\"settingGroupsService.saveSettingGroup(); closeModal()\"\r\n                        [disabled]=\"!settingGroupsFormComponent?.settingGroupsForm?.valid\">\r\n                <ion-icon slot=\"icon-only\"\r\n                          [name]=\"'save-outline'\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n        <ion-title>{{action}} Grupo de parametros</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n    <app-setting-groups-form #settingGroupsFormComponent></app-setting-groups-form>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"AJUSTES GRUPOS\"></app-main-header>\r\n\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/setting-groups/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'AJUSTES GRUPOS'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/setting-groups/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'AJUSTES GRUPOS' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/setting-groups/setting-groups-create/setting-groups-create.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/setting-groups/setting-groups-create/setting-groups-create.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmctZ3JvdXBzL3NldHRpbmctZ3JvdXBzLWNyZWF0ZS9zZXR0aW5nLWdyb3Vwcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/setting-groups/setting-groups-create/setting-groups-create.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/setting-groups/setting-groups-create/setting-groups-create.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SettingGroupsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingGroupsCreateComponent", function() { return SettingGroupsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _setting_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../setting-groups.service */ "./src/app/setting-groups/setting-groups.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let SettingGroupsCreateComponent = class SettingGroupsCreateComponent {
    constructor(settingGroupsService, route, platform, splitPanel) {
        this.settingGroupsService = settingGroupsService;
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
        this.settingGroupForm.settingGroupsForm.valueChanges.subscribe((data) => {
            this.settingGroupsService.settingGroupsFormValid.next(this.settingGroupForm.settingGroupsForm.valid);
        });
    }
    clearPosts() {
        console.log('clear');
        this.settingGroupsService.createSettingGroup();
        this.settingGroupsService.settingGroup = {};
    }
};
SettingGroupsCreateComponent.ctorParameters = () => [
    { type: _setting_groups_service__WEBPACK_IMPORTED_MODULE_2__["SettingGroupsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
SettingGroupsCreateComponent.propDecorators = {
    settingGroupForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['settingGroupForm',] }]
};
SettingGroupsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting-groups-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./setting-groups-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-create/setting-groups-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./setting-groups-create.component.scss */ "./src/app/setting-groups/setting-groups-create/setting-groups-create.component.scss")).default]
    })
], SettingGroupsCreateComponent);



/***/ }),

/***/ "./src/app/setting-groups/setting-groups-duplicate/setting-groups-duplicate.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/setting-groups/setting-groups-duplicate/setting-groups-duplicate.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmctZ3JvdXBzL3NldHRpbmctZ3JvdXBzLWR1cGxpY2F0ZS9zZXR0aW5nLWdyb3Vwcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/setting-groups/setting-groups-duplicate/setting-groups-duplicate.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/setting-groups/setting-groups-duplicate/setting-groups-duplicate.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SettingGroupsDuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingGroupsDuplicateComponent", function() { return SettingGroupsDuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SettingGroupsDuplicateComponent = class SettingGroupsDuplicateComponent {
    constructor() { }
    ngOnInit() { }
};
SettingGroupsDuplicateComponent.ctorParameters = () => [];
SettingGroupsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting-groups-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./setting-groups-duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-duplicate/setting-groups-duplicate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./setting-groups-duplicate.component.scss */ "./src/app/setting-groups/setting-groups-duplicate/setting-groups-duplicate.component.scss")).default]
    })
], SettingGroupsDuplicateComponent);



/***/ }),

/***/ "./src/app/setting-groups/setting-groups-edit/setting-groups-edit.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/setting-groups/setting-groups-edit/setting-groups-edit.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmctZ3JvdXBzL3NldHRpbmctZ3JvdXBzLWVkaXQvc2V0dGluZy1ncm91cHMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/setting-groups/setting-groups-edit/setting-groups-edit.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/setting-groups/setting-groups-edit/setting-groups-edit.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SettingGroupsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingGroupsEditComponent", function() { return SettingGroupsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _setting_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../setting-groups.service */ "./src/app/setting-groups/setting-groups.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let SettingGroupsEditComponent = class SettingGroupsEditComponent {
    constructor(settingGroupsService, route, platform, splitPanel) {
        this.settingGroupsService = settingGroupsService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.settingGroupsService.editSettingGroup(this.id);
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    ngAfterViewInit() {
        this.settingGroupForm.settingGroupsForm.valueChanges.subscribe((data) => {
            this.settingGroupsService.settingGroupsFormValid.next(this.settingGroupForm.settingGroupsForm.valid);
        });
    }
};
SettingGroupsEditComponent.ctorParameters = () => [
    { type: _setting_groups_service__WEBPACK_IMPORTED_MODULE_2__["SettingGroupsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
];
SettingGroupsEditComponent.propDecorators = {
    settingGroupForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['settingGroupForm',] }]
};
SettingGroupsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting-groups-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./setting-groups-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-edit/setting-groups-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./setting-groups-edit.component.scss */ "./src/app/setting-groups/setting-groups-edit/setting-groups-edit.component.scss")).default]
    })
], SettingGroupsEditComponent);



/***/ }),

/***/ "./src/app/setting-groups/setting-groups-form/setting-groups-form.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/setting-groups/setting-groups-form/setting-groups-form.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmctZ3JvdXBzL3NldHRpbmctZ3JvdXBzLWZvcm0vc2V0dGluZy1ncm91cHMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/setting-groups/setting-groups-form/setting-groups-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/setting-groups/setting-groups-form/setting-groups-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SettingGroupsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingGroupsFormComponent", function() { return SettingGroupsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _setting_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../setting-groups.service */ "./src/app/setting-groups/setting-groups.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let SettingGroupsFormComponent = class SettingGroupsFormComponent {
    constructor(settingGroupsService, toTitlecase) {
        this.settingGroupsService = settingGroupsService;
        this.toTitlecase = toTitlecase;
        this.model = {};
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'code': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.' },
            ],
            'setting_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('AJUSTES') + ' es obligatorio.' },
            ],
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    // set setSettingIds
    setSettingIds(event) {
        let settingIds = null;
        if (event.value.length) {
            settingIds = [];
            for (let i = 0; i < event.value.length; i++) {
                settingIds.push(event.value[i].id);
            }
        }
        this.settingGroupsService.settingGroup.setting_ids = settingIds;
    }
};
SettingGroupsFormComponent.ctorParameters = () => [
    { type: _setting_groups_service__WEBPACK_IMPORTED_MODULE_2__["SettingGroupsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
SettingGroupsFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['model',] }],
    settingGroupsForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['settingGroupsForm',] }]
};
SettingGroupsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting-groups-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./setting-groups-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-form/setting-groups-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./setting-groups-form.component.scss */ "./src/app/setting-groups/setting-groups-form/setting-groups-form.component.scss")).default]
    })
], SettingGroupsFormComponent);



/***/ }),

/***/ "./src/app/setting-groups/setting-groups-list/setting-groups-list.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/setting-groups/setting-groups-list/setting-groups-list.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmctZ3JvdXBzL3NldHRpbmctZ3JvdXBzLWxpc3Qvc2V0dGluZy1ncm91cHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/setting-groups/setting-groups-list/setting-groups-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/setting-groups/setting-groups-list/setting-groups-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SettingGroupsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingGroupsListComponent", function() { return SettingGroupsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _setting_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../setting-groups.service */ "./src/app/setting-groups/setting-groups.service.ts");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/services/loading.service */ "./src/app/@shared/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");







let SettingGroupsListComponent = class SettingGroupsListComponent {
    constructor(settingGroupsService, api, loading, splitPanel) {
        this.settingGroupsService = settingGroupsService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
        this.settingGroupsService.getSettingGroups();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
SettingGroupsListComponent.ctorParameters = () => [
    { type: _setting_groups_service__WEBPACK_IMPORTED_MODULE_2__["SettingGroupsService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] }
];
SettingGroupsListComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], { static: false },] }]
};
SettingGroupsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting-groups-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./setting-groups-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-list/setting-groups-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./setting-groups-list.component.scss */ "./src/app/setting-groups/setting-groups-list/setting-groups-list.component.scss")).default]
    })
], SettingGroupsListComponent);



/***/ }),

/***/ "./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmctZ3JvdXBzL3NldHRpbmctZ3JvdXBzLW1vZGFsL3NldHRpbmctZ3JvdXBzLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SettingGroupsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingGroupsModalComponent", function() { return SettingGroupsModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _setting_groups_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../setting-groups.service */ "./src/app/setting-groups/setting-groups.service.ts");




let SettingGroupsModalComponent = class SettingGroupsModalComponent {
    constructor(modalController, navParams, settingGroupsService) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.settingGroupsService = settingGroupsService;
    }
    ngOnInit() {
        console.table(this.navParams);
        this.action = this.navParams.data.action;
    }
    ngAfterViewInit() {
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss(onClosedData);
        });
    }
};
SettingGroupsModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _setting_groups_service__WEBPACK_IMPORTED_MODULE_3__["SettingGroupsService"] }
];
SettingGroupsModalComponent.propDecorators = {
    settingGroupsFormComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['settingGroupsFormComponent',] }]
};
SettingGroupsModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting-groups-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./setting-groups-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./setting-groups-modal.component.scss */ "./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.scss")).default]
    })
], SettingGroupsModalComponent);



/***/ }),

/***/ "./src/app/setting-groups/setting-groups-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/setting-groups/setting-groups-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SettingGroupsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingGroupsPageRoutingModule", function() { return SettingGroupsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _setting_groups_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting-groups.page */ "./src/app/setting-groups/setting-groups.page.ts");
/* harmony import */ var _setting_groups_edit_setting_groups_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setting-groups-edit/setting-groups-edit.component */ "./src/app/setting-groups/setting-groups-edit/setting-groups-edit.component.ts");
/* harmony import */ var _setting_groups_create_setting_groups_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setting-groups-create/setting-groups-create.component */ "./src/app/setting-groups/setting-groups-create/setting-groups-create.component.ts");
/* harmony import */ var _setting_groups_list_setting_groups_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting-groups-list/setting-groups-list.component */ "./src/app/setting-groups/setting-groups-list/setting-groups-list.component.ts");







const routes = [
    {
        path: '',
        component: _setting_groups_page__WEBPACK_IMPORTED_MODULE_3__["SettingGroupsPage"]
    },
    {
        path: 'list',
        component: _setting_groups_list_setting_groups_list_component__WEBPACK_IMPORTED_MODULE_6__["SettingGroupsListComponent"]
    },
    {
        path: 'create',
        component: _setting_groups_create_setting_groups_create_component__WEBPACK_IMPORTED_MODULE_5__["SettingGroupsCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _setting_groups_edit_setting_groups_edit_component__WEBPACK_IMPORTED_MODULE_4__["SettingGroupsEditComponent"]
    },
];
let SettingGroupsPageRoutingModule = class SettingGroupsPageRoutingModule {
};
SettingGroupsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], SettingGroupsPageRoutingModule);



/***/ }),

/***/ "./src/app/setting-groups/setting-groups.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/setting-groups/setting-groups.module.ts ***!
  \*********************************************************/
/*! exports provided: SettingGroupsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingGroupsPageModule", function() { return SettingGroupsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _setting_groups_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting-groups-routing.module */ "./src/app/setting-groups/setting-groups-routing.module.ts");
/* harmony import */ var _setting_groups_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./setting-groups.page */ "./src/app/setting-groups/setting-groups.page.ts");
/* harmony import */ var _setting_groups_list_setting_groups_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./setting-groups-list/setting-groups-list.component */ "./src/app/setting-groups/setting-groups-list/setting-groups-list.component.ts");
/* harmony import */ var _setting_groups_create_setting_groups_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./setting-groups-create/setting-groups-create.component */ "./src/app/setting-groups/setting-groups-create/setting-groups-create.component.ts");
/* harmony import */ var _setting_groups_duplicate_setting_groups_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./setting-groups-duplicate/setting-groups-duplicate.component */ "./src/app/setting-groups/setting-groups-duplicate/setting-groups-duplicate.component.ts");
/* harmony import */ var _setting_groups_edit_setting_groups_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./setting-groups-edit/setting-groups-edit.component */ "./src/app/setting-groups/setting-groups-edit/setting-groups-edit.component.ts");
/* harmony import */ var _setting_groups_form_setting_groups_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./setting-groups-form/setting-groups-form.component */ "./src/app/setting-groups/setting-groups-form/setting-groups-form.component.ts");
/* harmony import */ var _setting_groups_modal_setting_groups_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./setting-groups-modal/setting-groups-modal.component */ "./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.ts");














let SettingGroupsPageModule = class SettingGroupsPageModule {
};
SettingGroupsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _setting_groups_routing_module__WEBPACK_IMPORTED_MODULE_6__["SettingGroupsPageRoutingModule"]
        ],
        declarations: [
            _setting_groups_page__WEBPACK_IMPORTED_MODULE_7__["SettingGroupsPage"],
            _setting_groups_list_setting_groups_list_component__WEBPACK_IMPORTED_MODULE_8__["SettingGroupsListComponent"],
            _setting_groups_create_setting_groups_create_component__WEBPACK_IMPORTED_MODULE_9__["SettingGroupsCreateComponent"],
            _setting_groups_duplicate_setting_groups_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["SettingGroupsDuplicateComponent"],
            _setting_groups_edit_setting_groups_edit_component__WEBPACK_IMPORTED_MODULE_11__["SettingGroupsEditComponent"],
            _setting_groups_form_setting_groups_form_component__WEBPACK_IMPORTED_MODULE_12__["SettingGroupsFormComponent"],
            _setting_groups_modal_setting_groups_modal_component__WEBPACK_IMPORTED_MODULE_13__["SettingGroupsModalComponent"],
        ]
    })
], SettingGroupsPageModule);



/***/ }),

/***/ "./src/app/setting-groups/setting-groups.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/setting-groups/setting-groups.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmctZ3JvdXBzL3NldHRpbmctZ3JvdXBzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/setting-groups/setting-groups.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/setting-groups/setting-groups.page.ts ***!
  \*******************************************************/
/*! exports provided: SettingGroupsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingGroupsPage", function() { return SettingGroupsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");



let SettingGroupsPage = class SettingGroupsPage {
    constructor(splitPanel) {
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
};
SettingGroupsPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] }
];
SettingGroupsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting-groups',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./setting-groups.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./setting-groups.page.scss */ "./src/app/setting-groups/setting-groups.page.scss")).default]
    })
], SettingGroupsPage);



/***/ }),

/***/ "./src/app/setting-groups/setting-groups.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/setting-groups/setting-groups.service.ts ***!
  \**********************************************************/
/*! exports provided: SettingGroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingGroupsService", function() { return SettingGroupsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/services/navigation.service */ "./src/app/@shared/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let SettingGroupsService = class SettingGroupsService {
    constructor(api, alert, toast, router, navigation) {
        this.api = api;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.navigation = navigation;
        this.settingGroupsUrl = 'setting-groups';
        this.settingGroupsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.settingGroups = [];
        this.settingGroup = {};
        this.settingGroupLists = {};
        this.searchValue = '';
        this.perPage = 10;
        this.meta = null;
        this.page = 1;
        this.pagesContent = document.getElementById('pages-content');
    }
    getSettingGroups(page = this.page, perPage = this.perPage) {
        this.api.get(this.settingGroupsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue)
            .subscribe((res) => {
            // @ts-ignore
            document.getElementById('pages-content').scrollToTop(300);
            this.settingGroups = res.data;
            this.settingGroupLists = res.lists;
            this.meta = res.meta;
        }, (err) => {
            console.error(err);
        });
    }
    editSettingGroup(id) {
        this.api.get(this.settingGroupsUrl + '/' + id + '/edit')
            .subscribe((res) => {
            this.settingGroup = res.data.model;
            this.settingGroupLists = res.lists;
        }, (err) => {
            console.error(err);
        });
    }
    updateSettingGroup() {
        this.api.put(this.settingGroupsUrl + '/' + this.settingGroup.id, {
            model: this.settingGroup,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getSettingGroups(1);
        });
    }
    createSettingGroup() {
        this.api.get(this.settingGroupsUrl + '/create')
            .subscribe((res) => {
            this.settingGroup = {};
            this.settingGroupLists = res.lists;
        });
    }
    storeSettingGroup() {
        this.api.post(this.settingGroupsUrl, {
            model: this.settingGroup,
            pivots: {}
        }).subscribe((res) => {
            this.toast.present(res.message, 'toast-success', 'top');
            this.navigation.back();
            this.getSettingGroups(1);
        });
    }
    deleteSettingGroup(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alert.confirmation('Desea eliminar el item?');
            if (confirm) {
                this.api.delete(this.settingGroupsUrl + '/' + id, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success', 'top');
                    this.getSettingGroups(1);
                });
            }
            else {
                return;
            }
        });
    }
    saveSettingGroup() {
    }
};
SettingGroupsService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
SettingGroupsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SettingGroupsService);



/***/ })

}]);
//# sourceMappingURL=setting-groups-setting-groups-module-es2015.js.map