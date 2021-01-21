(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-header>\n  <ion-toolbar>\n    <ion-title>landing</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n\n<ion-content>\n\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\n\n        <ion-slide>\n            <ion-row>\n                <ion-col size=\"12\"\n                         size-md=\"8\"\n                         size-lg=\"6\"\n                         style=\"margin: 0 auto;\">\n                    <div class=\"slide\">\n                        <ion-card style=\"\">\n                            <img [src]=\"settings.getSetting('landing.slide.uno.image')\"/>\n                        </ion-card>\n                        <h2>{{settings.getSetting('landing.slide.uno.title')}}</h2>\n                        <div class=\"text-m\" [innerHTML]=\"settings.getSetting('landing.slide.uno.text')\"></div>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-row>\n                <ion-col size=\"12\"\n                         size-md=\"8\"\n                         size-lg=\"6\"\n                         style=\"margin: 0 auto;\">\n\n                    <ion-card style=\"\">\n                        <img [src]=\"settings.getSetting('landing.slide.dos.image')\"/>\n                    </ion-card>\n                    <h2>{{settings.getSetting('landing.slide.dos.title')}}</h2>\n                    <div class=\"text-m\" [innerHTML]=\"settings.getSetting('landing.slide.dos.text')\"></div>\n                </ion-col>\n            </ion-row>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-row>\n                <ion-col size=\"12\"\n                         size-md=\"8\"\n                         size-lg=\"6\"\n                         style=\"margin: 0 auto;\">\n\n                    <ion-card style=\"\">\n                        <img [src]=\"settings.getSetting('landing.slide.tres.image')\"/>\n                    </ion-card>\n                    <h2>{{settings.getSetting('landing.slide.tres.title')}}</h2>\n                    <div class=\"text-m\" [innerHTML]=\"settings.getSetting('landing.slide.tres.text')\"></div>\n                </ion-col>\n            </ion-row>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-row>\n                <ion-col size=\"12\"\n                         size-md=\"8\"\n                         size-lg=\"6\"\n                         style=\"margin: 0 auto;\">\n                    <ion-card style=\"\">\n                        <img [src]=\"settings.getSetting('landing.slide.cuatro.image')\"/>\n                    </ion-card>\n                    <h2>{{settings.getSetting('landing.button.title')}}</h2>\n                    <div class=\"ion-text-center\">\n                        <ion-button [routerLink]=\"'/auth/login'\"\n                                    fill=\"outline\">Ingresar\n                        </ion-button>\n                        <ion-button [routerLink]=\"'/auth/register'\"\n                                    fill=\"outline\">Regístrate\n                        </ion-button>\n                    </div>\n                    <div class=\"ion-text-center\">\n                        <ion-button [routerLink]=\"'/folder/Inbox'\"\n                                    fill=\"clear\">Continuar\n                            <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n                        </ion-button>\n                    </div>\n\n                </ion-col>\n            </ion-row>\n        </ion-slide>\n\n    </ion-slides>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/landing/landing-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/landing/landing-routing.module.ts ***!
  \***************************************************/
/*! exports provided: LandingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageRoutingModule", function() { return LandingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing.page */ "./src/app/landing/landing.page.ts");




const routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_3__["LandingPage"]
    }
];
let LandingPageRoutingModule = class LandingPageRoutingModule {
};
LandingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LandingPageRoutingModule);



/***/ }),

/***/ "./src/app/landing/landing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.module.ts ***!
  \*******************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-routing.module */ "./src/app/landing/landing-routing.module.ts");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing.page */ "./src/app/landing/landing.page.ts");







let LandingPageModule = class LandingPageModule {
};
LandingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _landing_routing_module__WEBPACK_IMPORTED_MODULE_5__["LandingPageRoutingModule"]
        ],
        declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"]]
    })
], LandingPageModule);



/***/ }),

/***/ "./src/app/landing/landing.page.scss":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .swiper-pagination-bullet {\n  width: 44px;\n  height: 44px;\n}\n::ng-deep .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {\n  font-size: 34px;\n}\n/*#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}*/\nion-slides {\n  height: 100%;\n}\n.swiper-slide {\n  display: block;\n}\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 60px 0 40px;\n  pointer-events: none;\n}\nb {\n  font-weight: 500;\n}\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\np b {\n  color: var(--ion-text-color, #000000);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQUo7QUFFRTtFQUNFLGVBQUE7QUFBSjtBQUlBOzs7Ozs7O0VBQUE7QUFTQTtFQUNFLFlBQUE7QUFGRjtBQUtBO0VBQ0UsY0FBQTtBQUZGO0FBS0E7RUFDRSxrQkFBQTtBQUZGO0FBS0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFGRjtBQUtBO0VBQ0UsZ0JBQUE7QUFGRjtBQUtBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FBRkY7QUFLQTtFQUNFLHFDQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgd2lkdGg6IDQ0cHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICB9XG4gIC5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gIH1cbn1cblxuLyojY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufSovXG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnN3aXBlci1zbGlkZSBoMiB7XG4gIG1hcmdpbi10b3A6IDIuOHJlbTtcbn1cblxuLnN3aXBlci1zbGlkZSBpbWcge1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIG1heC13aWR0aDogODAlO1xuICBtYXJnaW46IDYwcHggMCA0MHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuYiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnAge1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgIzYwNjQ2Yik7XG59XG5cbnAgYiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XG59XG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/landing/landing.page.ts":
/*!*****************************************!*\
  !*** ./src/app/landing/landing.page.ts ***!
  \*****************************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");
/* harmony import */ var _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/services/settings.service */ "./src/app/@shared/services/settings.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/auth.service */ "./src/app/@shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let LandingPage = class LandingPage {
    constructor(splitPanel, settings, auth, router) {
        this.splitPanel = splitPanel;
        this.settings = settings;
        this.auth = auth;
        this.router = router;
        this.slides = [];
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: (index, className) => {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            }
        };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.splitPanel.show.next(false);
        if (this.auth.userIsLogged()) {
            this.router.navigateByUrl('/folder/inbox');
        }
    }
};
LandingPage.ctorParameters = () => [
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"] },
    { type: _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] },
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LandingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./landing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./landing.page.scss */ "./src/app/landing/landing.page.scss")).default]
    })
], LandingPage);



/***/ })

}]);
//# sourceMappingURL=landing-landing-module-es2015.js.map