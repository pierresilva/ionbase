(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-groups-setting-groups-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-form/setting-groups-form.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-form/setting-groups-form.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #settingGroupsForm=\"ngForm\"\n      novalidate\n      autocomplete=\"off\">\n    <ion-list>\n\n        <ion-item>\n            <ion-label position=\"floating\">Nombre</ion-label>\n            <ion-input type=\"text\"\n                       [(ngModel)]=\"settingGroupsService.settingGroup.name\"\n                       name=\"name\"\n                       id=\"name-field\"\n                       required></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessages.name\">\n                <div class=\"error-message\" *ngIf=\"settingGroupsForm.form.controls['name']?.hasError(validation.type)\">\n                    {{ validation.message }}\n                </div>\n            </ng-container>\n        </div>\n\n        <app-settings-list></app-settings-list>\n\n    </ion-list>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-list/setting-groups-list.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-list/setting-groups-list.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-searchbar placeholder=\"Buscar grupos de parametros\"\n               animated\n               debounce=\"500\"\n               (keyup.enter)=\"settingGroupsService.getSettingGroups()\"\n               (ionCancel)=\"settingGroupsService.search = ''\"\n               (ionChange)=\"settingGroupsService.getSettingGroups()\"\n               [showCancelButton]=\"'focus'\"\n               [cancelButtonText]=\"'cancelar'\"\n               [(ngModel)]=\"settingGroupsService.search\"></ion-searchbar>\n<ion-list>\n    <ion-list-header>\n        Grupos de parametros\n    </ion-list-header>\n    <ng-container *ngIf=\"settingGroupsService?.settingGroups?.length\">\n\n        <ng-container *ngFor=\"let settingGroup of settingGroupsService?.settingGroups\">\n            <ion-item-sliding>\n                <ion-item (click)=\"settingGroupsService.getSettingGroup(settingGroup.code); openModal('Editar')\">\n                    <ion-label>\n                        {{settingGroup.name}}\n                        <h3>{{settingGroup.code}}</h3>\n                    </ion-label>\n                </ion-item>\n                <ion-item-options side=\"end\">\n                    <ion-item-option color=\"danger\"\n                                     (click)=\"settingGroupsService.deleteSettingGroup(settingGroup)\">\n                        <ion-icon name=\"trash\"\n                                  class=\"icon-s\"></ion-icon>\n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ng-container>\n\n    </ng-container>\n\n    <ng-container *ngIf=\"!settingGroupsService?.settingGroups?.length\">\n        <ion-item>\n            <ion-label>Sin grupos de parametros</ion-label>\n            <ion-button (click)=\"settingGroupsService.settingGroup = {}; openModal()\"\n                        slot=\"end\"\n                        fill=\"outline\"\n                        color=\"success\">\n                Crear grupos de parametros\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-list>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- my-modal.page.html -->\n<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"closeModal()\">\n                <ion-icon slot=\"icon-only\"\n                          [name]=\"'arrow-back-outline'\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"primary\">\n            <ion-button color=\"success\"\n                        (click)=\"settingGroupsService.saveSettingGroup(); closeModal()\"\n                        [disabled]=\"!settingGroupsFormComponent?.settingGroupsForm?.valid\">\n                <ion-icon slot=\"icon-only\"\n                          [name]=\"'save-outline'\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>{{action}} Grupo de parametros</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <app-setting-groups-form #settingGroupsFormComponent></app-setting-groups-form>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting-groups/setting-groups.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-toggle auto-hide=\"false\" menu=\"main-menu\">\n              <ion-button (click)=\"toggleMenu()\">\n                  <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n              </ion-button>\n          </ion-menu-toggle>\n      </ion-buttons>\n      <ion-buttons slot=\"primary\">\n          <ion-button color=\"success\"\n                      (click)=\"settingGroupsService.settingGroup = {}; openModal('Crear')\">\n              <ion-icon slot=\"icon-only\" [name]=\"'add-circle-outline'\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n    <ion-title>Grupos de parametros</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <app-setting-groups-list></app-setting-groups-list>\n\n</ion-content>\n");

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



let SettingGroupsFormComponent = class SettingGroupsFormComponent {
    constructor(settingGroupsService) {
        this.settingGroupsService = settingGroupsService;
        this.validationMessages = {
            'name': [
                { type: 'required', message: 'El campo nombre es obligatorio.' },
            ],
        };
    }
    ngOnInit() { }
};
SettingGroupsFormComponent.ctorParameters = () => [
    { type: _setting_groups_service__WEBPACK_IMPORTED_MODULE_2__["SettingGroupsService"] }
];
SettingGroupsFormComponent.propDecorators = {
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
/* harmony import */ var _setting_groups_modal_setting_groups_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../setting-groups-modal/setting-groups-modal.component */ "./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let SettingGroupsListComponent = class SettingGroupsListComponent {
    constructor(settingGroupsService, modalController) {
        this.settingGroupsService = settingGroupsService;
        this.modalController = modalController;
    }
    ngOnInit() {
        this.settingGroupsService.getSettingGroups();
    }
    openModal(action = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _setting_groups_modal_setting_groups_modal_component__WEBPACK_IMPORTED_MODULE_3__["SettingGroupsModalComponent"],
                componentProps: {
                    action: action !== null && action !== void 0 ? action : ''
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    console.table(dataReturned);
                }
            });
            return yield modal.present();
        });
    }
};
SettingGroupsListComponent.ctorParameters = () => [
    { type: _setting_groups_service__WEBPACK_IMPORTED_MODULE_2__["SettingGroupsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
SettingGroupsListComponent.propDecorators = {
    settingGroupsPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['settingGroupsPage',] }]
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




const routes = [
    {
        path: '',
        component: _setting_groups_page__WEBPACK_IMPORTED_MODULE_3__["SettingGroupsPage"]
    }
];
let SettingGroupsPageRoutingModule = class SettingGroupsPageRoutingModule {
};
SettingGroupsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
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
/* harmony import */ var _setting_groups_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setting-groups-routing.module */ "./src/app/setting-groups/setting-groups-routing.module.ts");
/* harmony import */ var _setting_groups_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting-groups.page */ "./src/app/setting-groups/setting-groups.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _setting_groups_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./setting-groups.service */ "./src/app/setting-groups/setting-groups.service.ts");
/* harmony import */ var _setting_groups_list_setting_groups_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./setting-groups-list/setting-groups-list.component */ "./src/app/setting-groups/setting-groups-list/setting-groups-list.component.ts");
/* harmony import */ var _setting_groups_form_setting_groups_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./setting-groups-form/setting-groups-form.component */ "./src/app/setting-groups/setting-groups-form/setting-groups-form.component.ts");
/* harmony import */ var _setting_groups_modal_setting_groups_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./setting-groups-modal/setting-groups-modal.component */ "./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.ts");
/* harmony import */ var _settings_settings_list_settings_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../settings/settings-list/settings-list.component */ "./src/app/settings/settings-list/settings-list.component.ts");
/* harmony import */ var _settings_settings_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../settings/settings.service */ "./src/app/settings/settings.service.ts");














let SettingGroupsPageModule = class SettingGroupsPageModule {
};
SettingGroupsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _setting_groups_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingGroupsPageRoutingModule"]
        ],
        providers: [
            _setting_groups_service__WEBPACK_IMPORTED_MODULE_8__["SettingGroupsService"],
            _settings_settings_service__WEBPACK_IMPORTED_MODULE_13__["SettingsService"],
        ],
        declarations: [
            _setting_groups_page__WEBPACK_IMPORTED_MODULE_6__["SettingGroupsPage"],
            _setting_groups_list_setting_groups_list_component__WEBPACK_IMPORTED_MODULE_9__["SettingGroupsListComponent"],
            _setting_groups_form_setting_groups_form_component__WEBPACK_IMPORTED_MODULE_10__["SettingGroupsFormComponent"],
            _setting_groups_modal_setting_groups_modal_component__WEBPACK_IMPORTED_MODULE_11__["SettingGroupsModalComponent"],
            _settings_settings_list_settings_list_component__WEBPACK_IMPORTED_MODULE_12__["SettingsListComponent"],
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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _setting_groups_modal_setting_groups_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting-groups-modal/setting-groups-modal.component */ "./src/app/setting-groups/setting-groups-modal/setting-groups-modal.component.ts");
/* harmony import */ var _setting_groups_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setting-groups.service */ "./src/app/setting-groups/setting-groups.service.ts");





// import {SettingGroupsService} from "./setting-groups.service";
let SettingGroupsPage = class SettingGroupsPage {
    constructor(modalController, settingGroupsService) {
        this.modalController = modalController;
        this.settingGroupsService = settingGroupsService;
    }
    ngOnInit() {
    }
    toggleMenu() {
        const splitPane = document.querySelector('ion-split-pane');
        const windowWidth = window.innerWidth;
        const splitPaneShownAt = 992;
        const when = `(min-width: ${splitPaneShownAt}px)`;
        if (windowWidth >= splitPaneShownAt) {
            // split pane view is visible
            const open = splitPane.when === when;
            splitPane.when = open ? false : when;
        }
        else {
            // split pane view is not visible
            // toggle menu open
            const menu = splitPane.querySelector('ion-menu');
            return menu.open();
        }
    }
    openModal(action = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _setting_groups_modal_setting_groups_modal_component__WEBPACK_IMPORTED_MODULE_3__["SettingGroupsModalComponent"],
                componentProps: {
                    action: action !== null && action !== void 0 ? action : ''
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    // console.table(dataReturned);
                }
            });
            return yield modal.present();
        });
    }
};
SettingGroupsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _setting_groups_service__WEBPACK_IMPORTED_MODULE_4__["SettingGroupsService"] }
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
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/api.service */ "./src/app/@shared/services/api.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/toast.service */ "./src/app/@shared/services/toast.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/alert.service */ "./src/app/@shared/services/alert.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/services/auth.service */ "./src/app/@shared/services/auth.service.ts");






let SettingGroupsService = class SettingGroupsService {
    constructor(api, toast, alert, auth) {
        this.api = api;
        this.toast = toast;
        this.alert = alert;
        this.auth = auth;
        this.search = '';
        this.searchId = '';
        this.searchName = '';
        this.searchCode = '';
        this.searchSettingsName = '';
        this.searchSettingsCode = '';
        //
        this.newSettingGroup();
        this.settingGroups = [];
    }
    /**
     * Get SettingGroups
     * @param page
     */
    getSettingGroups(page = 1) {
        const searchString = this.search ? `&q[name:cont]=${this.search}&q[code:cont]=${this.search}&q[settings.name:cont]=${this.search}&q[settings.code:cont]=${this.search}` : '';
        this.api.get(`setting-groups?page=${page}${searchString}`)
            .subscribe((res) => {
            this.settingGroups = res.data;
        });
    }
    /**
     * Get SettingGroups
     * @param code
     */
    getSettingGroup(code) {
        this.api.get(`setting-groups/${code}`)
            .subscribe((res) => {
            this.settingGroup = res.data;
        });
    }
    /**
     * Save SettingGroups
     */
    saveSettingGroup() {
        if (this.settingGroup.id) {
            this.updateSettingGroup();
        }
        if (!this.settingGroup.id) {
            this.storeSettingGroup();
        }
    }
    /**
     * Store SettingGroup
     */
    storeSettingGroup() {
        this.api.post('setting-groups', this.settingGroup)
            .subscribe((res) => {
            this.toast.present(res.message, 'toast-success');
            this.getSettingGroups();
        }, (err) => {
        });
    }
    /**
     * Update SettingGroup
     */
    updateSettingGroup() {
        this.api.put(`setting-groups/${this.settingGroup.code}`, this.settingGroup)
            .subscribe((res) => {
            this.toast.present(res.message, 'toast-success');
            this.getSettingGroups();
        }, (err) => {
        });
    }
    /**
     * Delete SettingGroup
     * @param settingGroup
     */
    deleteSettingGroup(settingGroup) {
        this.alert.confirmation(`Eliminar ${settingGroup.name}?`)
            .then(res => {
            if (res) {
                this.api.delete(`setting-groups/${settingGroup.code}`, {})
                    .subscribe((res) => {
                    this.toast.present(res.message, 'toast-success');
                    this.getSettingGroups();
                }, (err) => {
                });
            }
        });
        return;
    }
    /**
     * Create empty SettingGroup
     */
    newSettingGroup() {
        this.settingGroup = {
            id: null,
            name: null,
            code: null,
            created_at: null,
            updated_at: null,
            settings: [],
        };
    }
};
SettingGroupsService.ctorParameters = () => [
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
SettingGroupsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SettingGroupsService);



/***/ })

}]);
//# sourceMappingURL=setting-groups-setting-groups-module-es2015.js.map