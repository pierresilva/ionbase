(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["camera-camera-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/camera/camera.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/camera/camera.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCameraCameraPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>camera</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-content>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\"\n                 *ngFor=\"let photo of camera.photos; index as position\">\n          <ion-img [src]=\"photo.webviewPath\"></ion-img>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n      <ion-fab-button (click)=\"takePicture()\">\n        <ion-icon name=\"camera\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/camera/camera-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/camera/camera-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: CameraPageRoutingModule */

    /***/
    function srcAppCameraCameraRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraPageRoutingModule", function () {
        return CameraPageRoutingModule;
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


      var _camera_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./camera.page */
      "./src/app/camera/camera.page.ts");

      var routes = [{
        path: '',
        component: _camera_page__WEBPACK_IMPORTED_MODULE_3__["CameraPage"]
      }];

      var CameraPageRoutingModule = function CameraPageRoutingModule() {
        _classCallCheck(this, CameraPageRoutingModule);
      };

      CameraPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CameraPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/camera/camera.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/camera/camera.module.ts ***!
      \*****************************************/

    /*! exports provided: CameraPageModule */

    /***/
    function srcAppCameraCameraModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraPageModule", function () {
        return CameraPageModule;
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


      var _camera_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./camera-routing.module */
      "./src/app/camera/camera-routing.module.ts");
      /* harmony import */


      var _camera_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./camera.page */
      "./src/app/camera/camera.page.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../@shared/shared.module */
      "./src/app/@shared/shared.module.ts");

      var CameraPageModule = function CameraPageModule() {
        _classCallCheck(this, CameraPageModule);
      };

      CameraPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _camera_routing_module__WEBPACK_IMPORTED_MODULE_5__["CameraPageRoutingModule"]],
        declarations: [_camera_page__WEBPACK_IMPORTED_MODULE_6__["CameraPage"]]
      })], CameraPageModule);
      /***/
    },

    /***/
    "./src/app/camera/camera.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/camera/camera.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppCameraCameraPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbWVyYS9jYW1lcmEucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/camera/camera.page.ts":
    /*!***************************************!*\
      !*** ./src/app/camera/camera.page.ts ***!
      \***************************************/

    /*! exports provided: CameraPage */

    /***/
    function srcAppCameraCameraPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraPage", function () {
        return CameraPage;
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


      var _shared_services_camera_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../@shared/services/camera.service */
      "./src/app/@shared/services/camera.service.ts");

      var CameraPage = /*#__PURE__*/function () {
        function CameraPage(camera) {
          _classCallCheck(this, CameraPage);

          this.camera = camera;
          this.base64Image = null;
        }

        _createClass(CameraPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "takePicture",
          value: function takePicture() {
            this.camera.addNewToGallery();
          }
        }]);

        return CameraPage;
      }();

      CameraPage.ctorParameters = function () {
        return [{
          type: _shared_services_camera_service__WEBPACK_IMPORTED_MODULE_2__["CameraService"]
        }];
      };

      CameraPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-camera',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./camera.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/camera/camera.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./camera.page.scss */
        "./src/app/camera/camera.page.scss"))["default"]]
      })], CameraPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=camera-camera-module-es5.js.map