(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hous-units-hous-units-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units-create/hous-units-create.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units-create/hous-units-create.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/hous-units'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"housUnitsService.storeHousUnit()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!housUnitsService.housUnitsFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'UNIDADES HABITACIONALES' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-hous-units-form #housUnitForm [model]=\"housUnitsService.housUnit\"></app-hous-units-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units-duplicate/hous-units-duplicate.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units-duplicate/hous-units-duplicate.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  HousUnits duplicate works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units-edit/hous-units-edit.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units-edit/hous-units-edit.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/hous-units'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"housUnitsService.updateHousUnit()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!housUnitsService.housUnitsFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'UNIDADES HABITACIONALES' | titlecase}}: {{ housUnitsService.housUnit?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-hous-units-form #housUnitForm [model]=\"housUnitsService.housUnit\"></app-hous-units-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units-form/hous-units-form.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units-form/hous-units-form.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #housUnitsForm=\"ngForm\"\r\n      novalidate\r\n      autocomplete=\"off\">\r\n\r\n\r\n    <!-- hous_unit_area_ids -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'AREAS DE UNIDADES HABITACIONALES' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"hous_unit_area_ids\"\r\n                          id=\"hous_unit_area_ids-field\"\r\n                          [(ngModel)]=\"model.hous_unit_areas\"\r\n                          [items]=\"housUnitsService.housUnitLists.HousUnitArea\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('AREAS DE UNIDADES HABITACIONALES' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('AREAS DE UNIDADES HABITACIONALES' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setHousUnitAreaIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.hous_unit_area_ids\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"housUnitsForm.form.controls['hous_unit_area_ids']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end hous_unit_area_ids -->\r\n\r\n\r\n    <!-- oper_sector_ids -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'SECTORES OPERATIVOS' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"oper_sector_ids\"\r\n                          id=\"oper_sector_ids-field\"\r\n                          [(ngModel)]=\"model.oper_sectors\"\r\n                          [items]=\"housUnitsService.housUnitLists.OperSector\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('SECTORES OPERATIVOS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('SECTORES OPERATIVOS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setOperSectorIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.oper_sector_ids\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"housUnitsForm.form.controls['oper_sector_ids']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end oper_sector_ids -->\r\n\r\n\r\n    <!-- corr_packet_ids -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'CORRESPONDENCIA PAQUETES' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"corr_packet_ids\"\r\n                          id=\"corr_packet_ids-field\"\r\n                          [(ngModel)]=\"model.corr_packets\"\r\n                          [items]=\"housUnitsService.housUnitLists.CorrPacket\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('CORRESPONDENCIA PAQUETES' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('CORRESPONDENCIA PAQUETES' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setCorrPacketIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.corr_packet_ids\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"housUnitsForm.form.controls['corr_packet_ids']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end corr_packet_ids -->\r\n\r\n\r\n    <!-- hous_unit_id -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'PADRE' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"hous_unit_id\"\r\n                          id=\"hous_unit_id-field\"\r\n                          [(ngModel)]=\"model.parent\"\r\n                          [items]=\"housUnitsService.housUnitLists.HousUnit\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"name\"\r\n                          [isMultiple]=\"false\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('UNIDAD HABITACIONAL' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('UNIDAD HABITACIONAL' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setHouseUnitId($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.hous_unit_id\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"housUnitsForm.form.controls['hous_unit_id']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end hous_unit_id -->\r\n\r\n\r\n    <!-- name -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\r\n        <ion-input [(ngModel)]=\"model.name\"\r\n                   type=\"text\"\r\n                   name=\"name\"\r\n                   id=\"name-field\"\r\n                   [required]=\"true\"\r\n                   placeholder=\"\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.name\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"housUnitsForm.form.controls['name']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end name -->\r\n\r\n\r\n    <!-- code -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'CÓDIGO' | titlecase }}</ion-label>\r\n        <ion-input [(ngModel)]=\"model.code\"\r\n                   type=\"text\"\r\n                   name=\"code\"\r\n                   id=\"code-field\"\r\n                   [required]=\"true\"\r\n                   placeholder=\"\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.code\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"housUnitsForm.form.controls['code']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end code -->\r\n\r\n\r\n    <!-- contact_first_name -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'NOMBRE DEL CONTACTO' | titlecase }}</ion-label>\r\n        <ion-input [(ngModel)]=\"model.contact_first_name\"\r\n                   type=\"text\"\r\n                   name=\"contact_first_name\"\r\n                   id=\"contact_first_name-field\"\r\n                   placeholder=\"\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.contact_first_name\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"housUnitsForm.form.controls['contact_first_name']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end contact_first_name -->\r\n\r\n\r\n    <!-- contact_last_name -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'APELLIDO DEL CONTACTO' | titlecase }}</ion-label>\r\n        <ion-input [(ngModel)]=\"model.contact_last_name\"\r\n                   type=\"text\"\r\n                   name=\"contact_last_name\"\r\n                   id=\"contact_last_name-field\"\r\n                   placeholder=\"\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.contact_last_name\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"housUnitsForm.form.controls['contact_last_name']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end contact_last_name -->\r\n\r\n\r\n    <!-- contact_phone -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'TELÉFONO DEL CONTACTO' | titlecase }}</ion-label>\r\n        <ion-input [(ngModel)]=\"model.contact_phone\"\r\n                   type=\"text\"\r\n                   name=\"contact_phone\"\r\n                   id=\"contact_phone-field\"\r\n                   placeholder=\"\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.contact_phone\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"housUnitsForm.form.controls['contact_phone']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end contact_phone -->\r\n\r\n\r\n    <!-- contact_email -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'EMAIL DEL CONTACTO' | titlecase }}</ion-label>\r\n        <ion-input [(ngModel)]=\"model.contact_email\"\r\n                   type=\"text\"\r\n                   name=\"contact_email\"\r\n                   id=\"contact_email-field\"\r\n                   placeholder=\"\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.contact_email\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"housUnitsForm.form.controls['contact_email']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end contact_email -->\r\n\r\n\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units-list/hous-units-list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units-list/hous-units-list.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"{{'UNIDADES HABITACIONALES' | titlecase}}\"\r\n                 primaryLink=\"hous-units/create\"\r\n                 primaryText=\"Crear {{'UNIDADES HABITACIONALES' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-searchbar showCancelButton=\"focus\"\r\n                       [cancelButtonText]=\"'Cancelar'\"\r\n                       [placeholder]=\"'Buscar ' + ('UNIDADES HABITACIONALES' | lowercase )\"\r\n                       (ionCancel)=\"this.housUnitsService.searchValue = ''; housUnitsService.getHousUnits()\"\r\n                       (keyup.enter)=\"housUnitsService.getHousUnits()\"\r\n                       [(ngModel)]=\"housUnitsService.searchValue\"></ion-searchbar>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && housUnitsService.housUnits?.length\">\r\n        <ion-card *ngFor=\"let housUnit of housUnitsService.housUnits; let index = index\">\r\n            <ion-list>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'PADRE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ housUnit?.hous_unit_id | status }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ housUnit?.name }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'CÓDIGO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ housUnit?.code }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'NOMBRE DEL CONTACTO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ housUnit?.contact_first_name }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'APELLIDO DEL CONTACTO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ housUnit?.contact_last_name }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'TELÉFONO DEL CONTACTO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ housUnit?.contact_phone }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'EMAIL DEL CONTACTO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ housUnit?.contact_email }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'AREAS DE UNIDADES HABITACIONALES' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">\r\n                            <ng-container *ngIf=\"housUnit?.hous_unit_areas?.length\">\r\n                                <ng-container *ngFor=\"let housUnitArea of housUnit?.hous_unit_areas; let last = last\">\r\n                                    <a routerLink=\"/hous-unit-areas/{{ housUnitArea?.id }}/edit\">{{ housUnitArea?.name }}</a><span *ngIf=\"!last\">, </span>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'SECTORES OPERATIVOS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">\r\n                            <ng-container *ngIf=\"housUnit?.oper_sectors?.length\">\r\n                                <ng-container *ngFor=\"let operSector of housUnit?.oper_sectors; let last = last\">\r\n                                    <a routerLink=\"/oper-sectors/{{ operSector?.id }}/edit\">{{ operSector?.name }}</a><span *ngIf=\"!last\">, </span>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'CORRESPONDENCIA PAQUETES' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">\r\n                            <ng-container *ngIf=\"housUnit?.corr_packets?.length\">\r\n                                <ng-container *ngFor=\"let corrPacket of housUnit?.corr_packets; let last = last\">\r\n                                    <a routerLink=\"/corr-packets/{{ corrPacket?.id }}/edit\">{{ corrPacket?.name }}</a><span *ngIf=\"!last\">, </span>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n                    </ion-item>\r\n            </ion-list>\r\n            <ion-footer>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/hous-units/' + housUnit?.id + '/edit'\">\r\n                            <ion-icon name=\"create-outline\"></ion-icon>\r\n                            <div>Editar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"housUnitsService.deleteHousUnit(housUnit?.id)\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            <div>Eliminar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-footer>\r\n        </ion-card>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && !housUnitsService.housUnits?.length\">\r\n        <ion-item>\r\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label><h2>No se encontraron {{'UNIDADES HABITACIONALES' | titlecase}}</h2></ion-label>\r\n            <ion-button [routerLink]=\"'/hous-units/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\r\n                Crear {{'UNIDADES HABITACIONALES' | titlecase}}\r\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"housUnitsService.meta\">\r\n        <ion-col class=\"ion-text-center\" size=\"12\">\r\n            <ion-button (click)=\"housUnitsService.getHousUnits(housUnitsService.meta.current_page - 1)\"\r\n                        [disabled]=\"housUnitsService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{housUnitsService.meta.current_page}}\r\n                /{{housUnitsService.meta.last_page}} {{housUnitsService.meta.from}}-{{housUnitsService.meta.to}}\r\n                /{{housUnitsService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"housUnitsService.getHousUnits(housUnitsService.meta.current_page + 1)\"\r\n                        [disabled]=\"housUnitsService.meta.current_page == housUnitsService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"UNIDADES HABITACIONALES\"></app-main-header>\r\n\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/hous-units/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'UNIDADES HABITACIONALES'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/hous-units/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'UNIDADES HABITACIONALES' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n");

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
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let HousUnitsCreateComponent = class HousUnitsCreateComponent {
    constructor(housUnitsService, route, platform, splitPanel) {
        this.housUnitsService = housUnitsService;
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
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
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");






let HousUnitsEditComponent = class HousUnitsEditComponent {
    constructor(housUnitsService, route, platform, splitPanel) {
        this.housUnitsService = housUnitsService;
        this.route = route;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.id = null;
        this.model = null;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.housUnitsService.editHousUnit(this.id);
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"] }
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
            'hous_unit_id': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('PADRE') + ' es obligatorio.' },
            ],
            'name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.' },
            ],
            'code': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.' },
            ],
            'contact_first_name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE DEL CONTACTO') + ' es obligatorio.' },
            ],
            'contact_last_name': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('APELLIDO DEL CONTACTO') + ' es obligatorio.' },
            ],
            'contact_phone': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('TELÉFONO DEL CONTACTO') + ' es obligatorio.' },
            ],
            'contact_email': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('EMAIL DEL CONTACTO') + ' es obligatorio.' },
            ],
            'hous_unit_area_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('AREAS DE UNIDADES HABITACIONALES') + ' es obligatorio.' },
            ],
            'oper_sector_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('SECTORES OPERATIVOS') + ' es obligatorio.' },
            ],
            'corr_packet_ids': [
                { type: 'required', message: 'El campo ' + this.toTitlecase.transform('CORRESPONDENCIA PAQUETES') + ' es obligatorio.' },
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
    // end setOperSectorIds
    // set setCorrPacketIds
    setCorrPacketIds(event) {
        let corrPacketIds = null;
        if (event.value.length) {
            corrPacketIds = [];
            for (let i = 0; i < event.value.length; i++) {
                corrPacketIds.push(event.value[i].id);
            }
        }
        this.housUnitsService.housUnit.corr_packet_ids = corrPacketIds;
    }
    // end setCorrPacketIds
    setHouseUnitId(event) {
        this.housUnitsService.housUnit.hous_unit_id = event.value.id;
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
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");







let HousUnitsListComponent = class HousUnitsListComponent {
    constructor(housUnitsService, api, loading, splitPanel) {
        this.housUnitsService = housUnitsService;
        this.api = api;
        this.loading = loading;
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
        this.housUnitsService.getHousUnits();
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
    scrollToTop() {
        this.content.scrollToTop(300);
    }
};
HousUnitsListComponent.ctorParameters = () => [
    { type: _hous_units_service__WEBPACK_IMPORTED_MODULE_2__["HousUnitsService"] },
    { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"] }
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
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");



let HousUnitsPage = class HousUnitsPage {
    constructor(splitPanel) {
        this.splitPanel = splitPanel;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }
};
HousUnitsPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] }
];
HousUnitsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hous-units',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./hous-units.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hous-units/hous-units.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./hous-units.page.scss */ "./src/app/hous-units/hous-units.page.scss")).default]
    })
], HousUnitsPage);



/***/ })

}]);
//# sourceMappingURL=hous-units-hous-units-module-es2015.js.map