(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["barcode-scanner-barcode-scanner-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/barcode-scanner/barcode-scanner.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/barcode-scanner/barcode-scanner.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"BarCode Scanner\"></app-main-header>\n\n<ion-content>\n\n    <zxing-scanner *ngIf=\"browserScanner\"\n                   [(device)]=\"currentDevice\"\n                   [formats]=\"formatsEnabled\"\n                   (scanError)=\"onCodeError($event)\"\n                   (scanSuccess)=\"onCodeResult($event)\"></zxing-scanner>\n\n    <p>\n        <ion-button (click)=\"scan()\"\n                    fill=\"clear\">Scan Barcode\n            <ion-icon slot=\"end\" name=\"qr-code-outline\"></ion-icon>\n        </ion-button>\n    </p>\n    <pre>\n{{barcodeData | json}}\n</pre>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/barcode-scanner/barcode-scanner-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/barcode-scanner/barcode-scanner-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: BarcodeScannerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeScannerPageRoutingModule", function() { return BarcodeScannerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _barcode_scanner_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./barcode-scanner.page */ "./src/app/barcode-scanner/barcode-scanner.page.ts");




const routes = [
    {
        path: '',
        component: _barcode_scanner_page__WEBPACK_IMPORTED_MODULE_3__["BarcodeScannerPage"]
    }
];
let BarcodeScannerPageRoutingModule = class BarcodeScannerPageRoutingModule {
};
BarcodeScannerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BarcodeScannerPageRoutingModule);



/***/ }),

/***/ "./src/app/barcode-scanner/barcode-scanner.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/barcode-scanner/barcode-scanner.module.ts ***!
  \***********************************************************/
/*! exports provided: BarcodeScannerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeScannerPageModule", function() { return BarcodeScannerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _barcode_scanner_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./barcode-scanner-routing.module */ "./src/app/barcode-scanner/barcode-scanner-routing.module.ts");
/* harmony import */ var _barcode_scanner_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./barcode-scanner.page */ "./src/app/barcode-scanner/barcode-scanner.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");








let BarcodeScannerPageModule = class BarcodeScannerPageModule {
};
BarcodeScannerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _barcode_scanner_routing_module__WEBPACK_IMPORTED_MODULE_5__["BarcodeScannerPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_barcode_scanner_page__WEBPACK_IMPORTED_MODULE_6__["BarcodeScannerPage"]]
    })
], BarcodeScannerPageModule);



/***/ }),

/***/ "./src/app/barcode-scanner/barcode-scanner.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/barcode-scanner/barcode-scanner.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFyY29kZS1zY2FubmVyL2JhcmNvZGUtc2Nhbm5lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9iYXJjb2RlLXNjYW5uZXIvYmFyY29kZS1zY2FubmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/barcode-scanner/barcode-scanner.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/barcode-scanner/barcode-scanner.page.ts ***!
  \*********************************************************/
/*! exports provided: BarcodeScannerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeScannerPage", function() { return BarcodeScannerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @zxing/library */ "./node_modules/@zxing/library/umd/index.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_4__);





let BarcodeScannerPage = class BarcodeScannerPage {
    constructor(barcodeScanner, platform, modalController) {
        this.barcodeScanner = barcodeScanner;
        this.platform = platform;
        this.modalController = modalController;
        this.browserScanner = false;
        this.currentDevice = null;
        this.formatsEnabled = [
            _zxing_library__WEBPACK_IMPORTED_MODULE_4__["BarcodeFormat"].CODE_128,
            _zxing_library__WEBPACK_IMPORTED_MODULE_4__["BarcodeFormat"].DATA_MATRIX,
            _zxing_library__WEBPACK_IMPORTED_MODULE_4__["BarcodeFormat"].EAN_13,
            _zxing_library__WEBPACK_IMPORTED_MODULE_4__["BarcodeFormat"].QR_CODE,
            _zxing_library__WEBPACK_IMPORTED_MODULE_4__["BarcodeFormat"].PDF_417,
        ];
    }
    ngOnInit() {
    }
    scan() {
        if (this.platform.is('desktop')) {
            this.desktopScan();
        }
        if (this.platform.is('mobile')) {
            this.mobileScan();
        }
    }
    mobileScan() {
        this.barcodeScanner.scan().then(barcodeData => {
            console.log('Barcode data', barcodeData);
            this.barcodeData = barcodeData;
        }).catch(err => {
            console.log('Error', err);
        });
    }
    desktopScan() {
        this.browserScanner = true;
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    onCodeResult(resultString) {
        this.barcodeData = {
            canceled: null,
            text: resultString,
            format: null,
        };
        this.browserScanner = false;
        console.log(this.barcodeData);
    }
    onCodeError(err = null) {
        this.barcodeData = {
            canceled: null,
            text: null,
            format: null,
        };
        this.browserScanner = false;
        console.log(err);
    }
};
BarcodeScannerPage.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
BarcodeScannerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-barcode-scanner',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./barcode-scanner.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/barcode-scanner/barcode-scanner.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./barcode-scanner.page.scss */ "./src/app/barcode-scanner/barcode-scanner.page.scss")).default]
    })
], BarcodeScannerPage);



/***/ })

}]);
//# sourceMappingURL=barcode-scanner-barcode-scanner-module-es2015.js.map