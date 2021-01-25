(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLandingLandingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>landing</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>-->\r\n\r\n<ion-content>\r\n\r\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n\r\n        <ion-slide>\r\n            <ion-row>\r\n                <ion-col size=\"12\"\r\n                         size-md=\"8\"\r\n                         size-lg=\"6\"\r\n                         style=\"margin: 0 auto;\">\r\n                    <div class=\"slide\">\r\n                        <ion-card style=\"\">\r\n                            <img [src]=\"settings.getSetting('landing.slide.uno.image')\"/>\r\n                        </ion-card>\r\n                        <h2>{{settings.getSetting('landing.slide.uno.title')}}</h2>\r\n                        <div class=\"text-m\" [innerHTML]=\"settings.getSetting('landing.slide.uno.text')\"></div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-slide>\r\n\r\n        <ion-slide>\r\n            <ion-row>\r\n                <ion-col size=\"12\"\r\n                         size-md=\"8\"\r\n                         size-lg=\"6\"\r\n                         style=\"margin: 0 auto;\">\r\n\r\n                    <ion-card style=\"\">\r\n                        <img [src]=\"settings.getSetting('landing.slide.dos.image')\"/>\r\n                    </ion-card>\r\n                    <h2>{{settings.getSetting('landing.slide.dos.title')}}</h2>\r\n                    <div class=\"text-m\" [innerHTML]=\"settings.getSetting('landing.slide.dos.text')\"></div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-slide>\r\n\r\n        <ion-slide>\r\n            <ion-row>\r\n                <ion-col size=\"12\"\r\n                         size-md=\"8\"\r\n                         size-lg=\"6\"\r\n                         style=\"margin: 0 auto;\">\r\n\r\n                    <ion-card style=\"\">\r\n                        <img [src]=\"settings.getSetting('landing.slide.tres.image')\"/>\r\n                    </ion-card>\r\n                    <h2>{{settings.getSetting('landing.slide.tres.title')}}</h2>\r\n                    <div class=\"text-m\" [innerHTML]=\"settings.getSetting('landing.slide.tres.text')\"></div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-slide>\r\n\r\n        <ion-slide>\r\n            <ion-row>\r\n                <ion-col size=\"12\"\r\n                         size-md=\"8\"\r\n                         size-lg=\"6\"\r\n                         style=\"margin: 0 auto;\">\r\n                    <ion-card style=\"\">\r\n                        <img [src]=\"settings.getSetting('landing.slide.cuatro.image')\"/>\r\n                    </ion-card>\r\n                    <h2>{{settings.getSetting('landing.button.title')}}</h2>\r\n                    <div class=\"ion-text-center\">\r\n                        <ion-button [routerLink]=\"'/auth/login'\"\r\n                                    fill=\"outline\">Ingresar\r\n                        </ion-button>\r\n                        <ion-button [routerLink]=\"'/auth/register'\"\r\n                                    fill=\"outline\">Regístrate\r\n                        </ion-button>\r\n                    </div>\r\n                    <div class=\"ion-text-center\">\r\n                        <ion-button [routerLink]=\"'/folder/Inbox'\"\r\n                                    fill=\"clear\">Continuar\r\n                            <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\r\n                        </ion-button>\r\n                    </div>\r\n\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-slide>\r\n\r\n    </ion-slides>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/landing/landing-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/landing/landing-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: LandingPageRoutingModule */

    /***/
    function srcAppLandingLandingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPageRoutingModule", function () {
        return LandingPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _landing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./landing.page */
      "./src/app/landing/landing.page.ts");

      var routes = [{
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_3__["LandingPage"]
      }];

      var LandingPageRoutingModule = function LandingPageRoutingModule() {
        _classCallCheck(this, LandingPageRoutingModule);
      };

      LandingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LandingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/landing/landing.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/landing/landing.module.ts ***!
      \*******************************************/

    /*! exports provided: LandingPageModule */

    /***/
    function srcAppLandingLandingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPageModule", function () {
        return LandingPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _landing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./landing-routing.module */
      "./src/app/landing/landing-routing.module.ts");
      /* harmony import */


      var _landing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./landing.page */
      "./src/app/landing/landing.page.ts");

      var LandingPageModule = function LandingPageModule() {
        _classCallCheck(this, LandingPageModule);
      };

      LandingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _landing_routing_module__WEBPACK_IMPORTED_MODULE_5__["LandingPageRoutingModule"]],
        declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"]]
      })], LandingPageModule);
      /***/
    },

    /***/
    "./src/app/landing/landing.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/landing/landing.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppLandingLandingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep .swiper-pagination-bullet {\n  width: 44px;\n  height: 44px;\n}\n::ng-deep .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {\n  font-size: 34px;\n}\n/*#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}*/\nion-slides {\n  height: 100%;\n}\n.swiper-slide {\n  display: block;\n}\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 60px 0 40px;\n  pointer-events: none;\n}\nb {\n  font-weight: 500;\n}\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\np b {\n  color: var(--ion-text-color, #000000);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQUo7QUFFRTtFQUNFLGVBQUE7QUFBSjtBQUlBOzs7Ozs7O0VBQUE7QUFTQTtFQUNFLFlBQUE7QUFGRjtBQUtBO0VBQ0UsY0FBQTtBQUZGO0FBS0E7RUFDRSxrQkFBQTtBQUZGO0FBS0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFGRjtBQUtBO0VBQ0UsZ0JBQUE7QUFGRjtBQUtBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FBRkY7QUFLQTtFQUNFLHFDQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcclxuICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gIH1cclxuICAuc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiNjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn0qL1xyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc3dpcGVyLXNsaWRlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSBoMiB7XHJcbiAgbWFyZ2luLXRvcDogMi44cmVtO1xyXG59XHJcblxyXG4uc3dpcGVyLXNsaWRlIGltZyB7XHJcbiAgbWF4LWhlaWdodDogNTAlO1xyXG4gIG1heC13aWR0aDogODAlO1xyXG4gIG1hcmdpbjogNjBweCAwIDQwcHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbmIge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbnAge1xyXG4gIHBhZGRpbmc6IDAgNDBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcclxufVxyXG5cclxucCBiIHtcclxuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDAwMDApO1xyXG59XHJcblxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/landing/landing.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/landing/landing.page.ts ***!
      \*****************************************/

    /*! exports provided: LandingPage */

    /***/
    function srcAppLandingLandingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPage", function () {
        return LandingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../@shared/services/split-panel.service */
      "./src/app/@shared/services/split-panel.service.ts");
      /* harmony import */


      var _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../@shared/services/settings.service */
      "./src/app/@shared/services/settings.service.ts");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../@shared/services/auth.service */
      "./src/app/@shared/services/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var LandingPage = /*#__PURE__*/function () {
        function LandingPage(splitPanel, settings, auth, router) {
          _classCallCheck(this, LandingPage);

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
              renderBullet: function renderBullet(index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
              }
            }
          };
        }

        _createClass(LandingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(false);

            if (this.auth.userIsLogged()) {
              this.router.navigateByUrl('/folder/inbox');
            }
          }
        }]);

        return LandingPage;
      }();

      LandingPage.ctorParameters = function () {
        return [{
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"]
        }, {
          type: _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      LandingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./landing.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./landing.page.scss */
        "./src/app/landing/landing.page.scss"))["default"]]
      })], LandingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=landing-landing-module-es5.js.map