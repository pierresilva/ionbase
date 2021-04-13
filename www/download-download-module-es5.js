(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["download-download-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/download/download.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/download/download.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDownloadDownloadPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>download</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-button (click)=\"downloadFileTransfer('http://www.africau.edu/images/default/sample.pdf', 'downloaded.pdf')\"\r\n              fill=\"clear\">Download File\r\n    <ion-icon slot=\"end\" name=\"qr-code-outline\"></ion-icon>\r\n  </ion-button>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/download/download-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/download/download-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: DownloadPageRoutingModule */

    /***/
    function srcAppDownloadDownloadRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DownloadPageRoutingModule", function () {
        return DownloadPageRoutingModule;
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


      var _download_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./download.page */
      "./src/app/download/download.page.ts");

      var routes = [{
        path: '',
        component: _download_page__WEBPACK_IMPORTED_MODULE_3__["DownloadPage"]
      }];

      var DownloadPageRoutingModule = function DownloadPageRoutingModule() {
        _classCallCheck(this, DownloadPageRoutingModule);
      };

      DownloadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DownloadPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/download/download.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/download/download.module.ts ***!
      \*********************************************/

    /*! exports provided: DownloadPageModule */

    /***/
    function srcAppDownloadDownloadModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DownloadPageModule", function () {
        return DownloadPageModule;
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


      var _download_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./download-routing.module */
      "./src/app/download/download-routing.module.ts");
      /* harmony import */


      var _download_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./download.page */
      "./src/app/download/download.page.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../@shared/shared.module */
      "./src/app/@shared/shared.module.ts");

      var DownloadPageModule = function DownloadPageModule() {
        _classCallCheck(this, DownloadPageModule);
      };

      DownloadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _download_routing_module__WEBPACK_IMPORTED_MODULE_5__["DownloadPageRoutingModule"]],
        declarations: [_download_page__WEBPACK_IMPORTED_MODULE_6__["DownloadPage"]]
      })], DownloadPageModule);
      /***/
    },

    /***/
    "./src/app/download/download.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/download/download.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppDownloadDownloadPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rvd25sb2FkL2Rvd25sb2FkLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/download/download.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/download/download.page.ts ***!
      \*******************************************/

    /*! exports provided: DownloadPage */

    /***/
    function srcAppDownloadDownloadPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DownloadPage", function () {
        return DownloadPage;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _shared_services_file_transfer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../@shared/services/file-transfer.service */
      "./src/app/@shared/services/file-transfer.service.ts");

      var Filesystem = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Filesystem;

      var DownloadPage = /*#__PURE__*/function () {
        function DownloadPage(http, toastController, fileTransfer) {
          _classCallCheck(this, DownloadPage);

          this.http = http;
          this.toastController = toastController;
          this.fileTransfer = fileTransfer;
          this.device = null;
        }

        _createClass(DownloadPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "downloadFileTransfer",
          value: function downloadFileTransfer(url, fileName) {
            this.fileTransfer.download(url, fileName);
          }
        }, {
          key: "download",
          value: function download(url) {
            return this.http.get(url, {
              responseType: 'blob'
            });
          }
        }, {
          key: "downloadFile",
          value: function downloadFile(url, fileName) {
            var _this = this;

            this.download(url).subscribe(function (blob) {
              var reader = new FileReader();
              reader.readAsDataURL(blob);

              reader.onloadend = function () {
                var base64data;
                base64data = reader.result;

                _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Filesystem.appendFile({
                  data: base64data,
                  path: 'images/image.png'
                }).then(function (res) {
                  console.log('se escribiooo', res);

                  _this.presentToastWithOptions();
                });
              }; // const a = document.createElement('a');
              // const objectUrl = URL.createObjectURL(blob);
              // console.log(blob, objectUrl);
              // a.href = objectUrl;
              // a.download = fileName;
              // a.click();
              // URL.revokeObjectURL(objectUrl);

            });
          }
        }, {
          key: "presentToastWithOptions",
          value: function presentToastWithOptions() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        header: 'Toast header',
                        message: 'Click to Close',
                        position: 'top',
                        buttons: [{
                          side: 'start',
                          icon: 'star',
                          text: 'Favorite',
                          handler: function handler() {
                            console.log('Favorite clicked');
                          }
                        }, {
                          text: 'Done',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return DownloadPage;
      }();

      DownloadPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _shared_services_file_transfer_service__WEBPACK_IMPORTED_MODULE_5__["FileTransferService"]
        }];
      };

      DownloadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-download',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./download.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/download/download.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./download.page.scss */
        "./src/app/download/download.page.scss"))["default"]]
      })], DownloadPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=download-download-module-es5.js.map