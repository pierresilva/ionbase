(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/@ionic/pwa-elements/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*************************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicPwaElementsDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./pwa-action-sheet.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-action-sheet.entry.js", 43],
        "./pwa-camera-modal-instance.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal-instance.entry.js", 44],
        "./pwa-camera-modal.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal.entry.js", 45],
        "./pwa-camera.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera.entry.js", 46],
        "./pwa-toast.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-toast.entry.js", 47]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/pwa-elements/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
      var map = {
        "./af": "./node_modules/moment/locale/af.js",
        "./af.js": "./node_modules/moment/locale/af.js",
        "./ar": "./node_modules/moment/locale/ar.js",
        "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
        "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
        "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
        "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
        "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
        "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
        "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
        "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
        "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
        "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
        "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
        "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
        "./ar.js": "./node_modules/moment/locale/ar.js",
        "./az": "./node_modules/moment/locale/az.js",
        "./az.js": "./node_modules/moment/locale/az.js",
        "./be": "./node_modules/moment/locale/be.js",
        "./be.js": "./node_modules/moment/locale/be.js",
        "./bg": "./node_modules/moment/locale/bg.js",
        "./bg.js": "./node_modules/moment/locale/bg.js",
        "./bm": "./node_modules/moment/locale/bm.js",
        "./bm.js": "./node_modules/moment/locale/bm.js",
        "./bn": "./node_modules/moment/locale/bn.js",
        "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
        "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
        "./bn.js": "./node_modules/moment/locale/bn.js",
        "./bo": "./node_modules/moment/locale/bo.js",
        "./bo.js": "./node_modules/moment/locale/bo.js",
        "./br": "./node_modules/moment/locale/br.js",
        "./br.js": "./node_modules/moment/locale/br.js",
        "./bs": "./node_modules/moment/locale/bs.js",
        "./bs.js": "./node_modules/moment/locale/bs.js",
        "./ca": "./node_modules/moment/locale/ca.js",
        "./ca.js": "./node_modules/moment/locale/ca.js",
        "./cs": "./node_modules/moment/locale/cs.js",
        "./cs.js": "./node_modules/moment/locale/cs.js",
        "./cv": "./node_modules/moment/locale/cv.js",
        "./cv.js": "./node_modules/moment/locale/cv.js",
        "./cy": "./node_modules/moment/locale/cy.js",
        "./cy.js": "./node_modules/moment/locale/cy.js",
        "./da": "./node_modules/moment/locale/da.js",
        "./da.js": "./node_modules/moment/locale/da.js",
        "./de": "./node_modules/moment/locale/de.js",
        "./de-at": "./node_modules/moment/locale/de-at.js",
        "./de-at.js": "./node_modules/moment/locale/de-at.js",
        "./de-ch": "./node_modules/moment/locale/de-ch.js",
        "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
        "./de.js": "./node_modules/moment/locale/de.js",
        "./dv": "./node_modules/moment/locale/dv.js",
        "./dv.js": "./node_modules/moment/locale/dv.js",
        "./el": "./node_modules/moment/locale/el.js",
        "./el.js": "./node_modules/moment/locale/el.js",
        "./en-au": "./node_modules/moment/locale/en-au.js",
        "./en-au.js": "./node_modules/moment/locale/en-au.js",
        "./en-ca": "./node_modules/moment/locale/en-ca.js",
        "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
        "./en-gb": "./node_modules/moment/locale/en-gb.js",
        "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
        "./en-ie": "./node_modules/moment/locale/en-ie.js",
        "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
        "./en-il": "./node_modules/moment/locale/en-il.js",
        "./en-il.js": "./node_modules/moment/locale/en-il.js",
        "./en-in": "./node_modules/moment/locale/en-in.js",
        "./en-in.js": "./node_modules/moment/locale/en-in.js",
        "./en-nz": "./node_modules/moment/locale/en-nz.js",
        "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
        "./en-sg": "./node_modules/moment/locale/en-sg.js",
        "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
        "./eo": "./node_modules/moment/locale/eo.js",
        "./eo.js": "./node_modules/moment/locale/eo.js",
        "./es": "./node_modules/moment/locale/es.js",
        "./es-do": "./node_modules/moment/locale/es-do.js",
        "./es-do.js": "./node_modules/moment/locale/es-do.js",
        "./es-mx": "./node_modules/moment/locale/es-mx.js",
        "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
        "./es-us": "./node_modules/moment/locale/es-us.js",
        "./es-us.js": "./node_modules/moment/locale/es-us.js",
        "./es.js": "./node_modules/moment/locale/es.js",
        "./et": "./node_modules/moment/locale/et.js",
        "./et.js": "./node_modules/moment/locale/et.js",
        "./eu": "./node_modules/moment/locale/eu.js",
        "./eu.js": "./node_modules/moment/locale/eu.js",
        "./fa": "./node_modules/moment/locale/fa.js",
        "./fa.js": "./node_modules/moment/locale/fa.js",
        "./fi": "./node_modules/moment/locale/fi.js",
        "./fi.js": "./node_modules/moment/locale/fi.js",
        "./fil": "./node_modules/moment/locale/fil.js",
        "./fil.js": "./node_modules/moment/locale/fil.js",
        "./fo": "./node_modules/moment/locale/fo.js",
        "./fo.js": "./node_modules/moment/locale/fo.js",
        "./fr": "./node_modules/moment/locale/fr.js",
        "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
        "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
        "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
        "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
        "./fr.js": "./node_modules/moment/locale/fr.js",
        "./fy": "./node_modules/moment/locale/fy.js",
        "./fy.js": "./node_modules/moment/locale/fy.js",
        "./ga": "./node_modules/moment/locale/ga.js",
        "./ga.js": "./node_modules/moment/locale/ga.js",
        "./gd": "./node_modules/moment/locale/gd.js",
        "./gd.js": "./node_modules/moment/locale/gd.js",
        "./gl": "./node_modules/moment/locale/gl.js",
        "./gl.js": "./node_modules/moment/locale/gl.js",
        "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
        "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
        "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
        "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
        "./gu": "./node_modules/moment/locale/gu.js",
        "./gu.js": "./node_modules/moment/locale/gu.js",
        "./he": "./node_modules/moment/locale/he.js",
        "./he.js": "./node_modules/moment/locale/he.js",
        "./hi": "./node_modules/moment/locale/hi.js",
        "./hi.js": "./node_modules/moment/locale/hi.js",
        "./hr": "./node_modules/moment/locale/hr.js",
        "./hr.js": "./node_modules/moment/locale/hr.js",
        "./hu": "./node_modules/moment/locale/hu.js",
        "./hu.js": "./node_modules/moment/locale/hu.js",
        "./hy-am": "./node_modules/moment/locale/hy-am.js",
        "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
        "./id": "./node_modules/moment/locale/id.js",
        "./id.js": "./node_modules/moment/locale/id.js",
        "./is": "./node_modules/moment/locale/is.js",
        "./is.js": "./node_modules/moment/locale/is.js",
        "./it": "./node_modules/moment/locale/it.js",
        "./it-ch": "./node_modules/moment/locale/it-ch.js",
        "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
        "./it.js": "./node_modules/moment/locale/it.js",
        "./ja": "./node_modules/moment/locale/ja.js",
        "./ja.js": "./node_modules/moment/locale/ja.js",
        "./jv": "./node_modules/moment/locale/jv.js",
        "./jv.js": "./node_modules/moment/locale/jv.js",
        "./ka": "./node_modules/moment/locale/ka.js",
        "./ka.js": "./node_modules/moment/locale/ka.js",
        "./kk": "./node_modules/moment/locale/kk.js",
        "./kk.js": "./node_modules/moment/locale/kk.js",
        "./km": "./node_modules/moment/locale/km.js",
        "./km.js": "./node_modules/moment/locale/km.js",
        "./kn": "./node_modules/moment/locale/kn.js",
        "./kn.js": "./node_modules/moment/locale/kn.js",
        "./ko": "./node_modules/moment/locale/ko.js",
        "./ko.js": "./node_modules/moment/locale/ko.js",
        "./ku": "./node_modules/moment/locale/ku.js",
        "./ku.js": "./node_modules/moment/locale/ku.js",
        "./ky": "./node_modules/moment/locale/ky.js",
        "./ky.js": "./node_modules/moment/locale/ky.js",
        "./lb": "./node_modules/moment/locale/lb.js",
        "./lb.js": "./node_modules/moment/locale/lb.js",
        "./lo": "./node_modules/moment/locale/lo.js",
        "./lo.js": "./node_modules/moment/locale/lo.js",
        "./lt": "./node_modules/moment/locale/lt.js",
        "./lt.js": "./node_modules/moment/locale/lt.js",
        "./lv": "./node_modules/moment/locale/lv.js",
        "./lv.js": "./node_modules/moment/locale/lv.js",
        "./me": "./node_modules/moment/locale/me.js",
        "./me.js": "./node_modules/moment/locale/me.js",
        "./mi": "./node_modules/moment/locale/mi.js",
        "./mi.js": "./node_modules/moment/locale/mi.js",
        "./mk": "./node_modules/moment/locale/mk.js",
        "./mk.js": "./node_modules/moment/locale/mk.js",
        "./ml": "./node_modules/moment/locale/ml.js",
        "./ml.js": "./node_modules/moment/locale/ml.js",
        "./mn": "./node_modules/moment/locale/mn.js",
        "./mn.js": "./node_modules/moment/locale/mn.js",
        "./mr": "./node_modules/moment/locale/mr.js",
        "./mr.js": "./node_modules/moment/locale/mr.js",
        "./ms": "./node_modules/moment/locale/ms.js",
        "./ms-my": "./node_modules/moment/locale/ms-my.js",
        "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
        "./ms.js": "./node_modules/moment/locale/ms.js",
        "./mt": "./node_modules/moment/locale/mt.js",
        "./mt.js": "./node_modules/moment/locale/mt.js",
        "./my": "./node_modules/moment/locale/my.js",
        "./my.js": "./node_modules/moment/locale/my.js",
        "./nb": "./node_modules/moment/locale/nb.js",
        "./nb.js": "./node_modules/moment/locale/nb.js",
        "./ne": "./node_modules/moment/locale/ne.js",
        "./ne.js": "./node_modules/moment/locale/ne.js",
        "./nl": "./node_modules/moment/locale/nl.js",
        "./nl-be": "./node_modules/moment/locale/nl-be.js",
        "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
        "./nl.js": "./node_modules/moment/locale/nl.js",
        "./nn": "./node_modules/moment/locale/nn.js",
        "./nn.js": "./node_modules/moment/locale/nn.js",
        "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
        "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
        "./pa-in": "./node_modules/moment/locale/pa-in.js",
        "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
        "./pl": "./node_modules/moment/locale/pl.js",
        "./pl.js": "./node_modules/moment/locale/pl.js",
        "./pt": "./node_modules/moment/locale/pt.js",
        "./pt-br": "./node_modules/moment/locale/pt-br.js",
        "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
        "./pt.js": "./node_modules/moment/locale/pt.js",
        "./ro": "./node_modules/moment/locale/ro.js",
        "./ro.js": "./node_modules/moment/locale/ro.js",
        "./ru": "./node_modules/moment/locale/ru.js",
        "./ru.js": "./node_modules/moment/locale/ru.js",
        "./sd": "./node_modules/moment/locale/sd.js",
        "./sd.js": "./node_modules/moment/locale/sd.js",
        "./se": "./node_modules/moment/locale/se.js",
        "./se.js": "./node_modules/moment/locale/se.js",
        "./si": "./node_modules/moment/locale/si.js",
        "./si.js": "./node_modules/moment/locale/si.js",
        "./sk": "./node_modules/moment/locale/sk.js",
        "./sk.js": "./node_modules/moment/locale/sk.js",
        "./sl": "./node_modules/moment/locale/sl.js",
        "./sl.js": "./node_modules/moment/locale/sl.js",
        "./sq": "./node_modules/moment/locale/sq.js",
        "./sq.js": "./node_modules/moment/locale/sq.js",
        "./sr": "./node_modules/moment/locale/sr.js",
        "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
        "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
        "./sr.js": "./node_modules/moment/locale/sr.js",
        "./ss": "./node_modules/moment/locale/ss.js",
        "./ss.js": "./node_modules/moment/locale/ss.js",
        "./sv": "./node_modules/moment/locale/sv.js",
        "./sv.js": "./node_modules/moment/locale/sv.js",
        "./sw": "./node_modules/moment/locale/sw.js",
        "./sw.js": "./node_modules/moment/locale/sw.js",
        "./ta": "./node_modules/moment/locale/ta.js",
        "./ta.js": "./node_modules/moment/locale/ta.js",
        "./te": "./node_modules/moment/locale/te.js",
        "./te.js": "./node_modules/moment/locale/te.js",
        "./tet": "./node_modules/moment/locale/tet.js",
        "./tet.js": "./node_modules/moment/locale/tet.js",
        "./tg": "./node_modules/moment/locale/tg.js",
        "./tg.js": "./node_modules/moment/locale/tg.js",
        "./th": "./node_modules/moment/locale/th.js",
        "./th.js": "./node_modules/moment/locale/th.js",
        "./tk": "./node_modules/moment/locale/tk.js",
        "./tk.js": "./node_modules/moment/locale/tk.js",
        "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
        "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
        "./tlh": "./node_modules/moment/locale/tlh.js",
        "./tlh.js": "./node_modules/moment/locale/tlh.js",
        "./tr": "./node_modules/moment/locale/tr.js",
        "./tr.js": "./node_modules/moment/locale/tr.js",
        "./tzl": "./node_modules/moment/locale/tzl.js",
        "./tzl.js": "./node_modules/moment/locale/tzl.js",
        "./tzm": "./node_modules/moment/locale/tzm.js",
        "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
        "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
        "./tzm.js": "./node_modules/moment/locale/tzm.js",
        "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
        "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
        "./uk": "./node_modules/moment/locale/uk.js",
        "./uk.js": "./node_modules/moment/locale/uk.js",
        "./ur": "./node_modules/moment/locale/ur.js",
        "./ur.js": "./node_modules/moment/locale/ur.js",
        "./uz": "./node_modules/moment/locale/uz.js",
        "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
        "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
        "./uz.js": "./node_modules/moment/locale/uz.js",
        "./vi": "./node_modules/moment/locale/vi.js",
        "./vi.js": "./node_modules/moment/locale/vi.js",
        "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
        "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
        "./yo": "./node_modules/moment/locale/yo.js",
        "./yo.js": "./node_modules/moment/locale/yo.js",
        "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
        "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
        "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
        "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
        "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
        "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
        "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
        "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/@layouts/components/loading/loading.component.html":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@layouts/components/loading/loading.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutsComponentsLoadingLoadingComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"loading-indicator\">\r\n    <p>//////|\\\\\\\\\\\\</p>\r\n</div>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/@shared/components/main-header/main-header.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@shared/components/main-header/main-header.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsMainHeaderMainHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\" *ngIf=\"splitPanel.show.value\">\r\n            <ion-menu-toggle auto-hide=\"false\" menu=\"main-menu\">\r\n                <ion-button (click)=\"toggleMenu()\">\r\n                    <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\r\n                </ion-button>\r\n            </ion-menu-toggle>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"primary\" *ngIf=\"primaryLink\">\r\n            <ion-button [routerLink]=\"'/' + primaryLink\" color=\"success\">\r\n                <ng-container *ngIf=\"primaryText && !platform.is('mobile')\">{{primaryText}}</ng-container>\r\n                <ion-icon *ngIf=\"primaryIcon\" slot=\"end\" [name]=\"primaryIcon\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n        <ion-title *ngIf=\"title\">{{title}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/@shared/components/popover/popover.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@shared/components/popover/popover.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsPopoverPopoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-list>\r\n    <ion-list-header>Ionic</ion-list-header>\r\n    <ion-item button>Learn Ionic</ion-item>\r\n    <ion-item button>Documentation</ion-item>\r\n    <ion-item button>Showcase</ion-item>\r\n    <ion-item button>GitHub Repo</ion-item>\r\n    <ion-item lines=\"none\" detail=\"false\" button onClick=\"dismissPopover()\">Close</ion-item>\r\n</ion-list>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n    <ion-split-pane contentId=\"main-content\">\n        <ion-menu contentId=\"main-content\"\n                  type=\"overlay\"\n                  [hidden]=\"!splitPanel.show.value\">\n            <ion-content>\n                <div class=\"ion-text-center ion-no-padding\">\n                    <a [routerLink]=\"'/'\">\n                        <img [src]=\"darkEnabled() ? 'assets/images/NoahApp/logo-light-square.png' : 'assets/images/NoahApp/logo-dark-square.png'\"\n                             style=\"max-height: 82px;\">\n                    </a>\n                </div>\n                <ion-list id=\"inbox-list\"\n                          *ngIf=\"auth.userIsLogged()\">\n                    <ion-item lines=\"none\">\n                        <ion-avatar slot=\"start\"\n                                    style=\"background-color: #cccccc;\">\n                            <img [src]=\"auth.getUser().profile?.avatar ? auth.getUser().profile?.avatar : 'assets/images/avatar.svg'\">\n                        </ion-avatar>\n                        <ion-label>\n                            {{auth.getUser().name}}\n                            <h3>{{auth.getUser().email}}</h3>\n                        </ion-label>\n                    </ion-item>\n\n                </ion-list>\n                <ion-list id=\"pages-list\">\n                    <!--                    <ion-list-header>Pages</ion-list-header>-->\n                    <ion-item-divider *ngIf=\"auth.userIs(['super.admin'])\">\n                        Pages\n                    </ion-item-divider>\n                    <ion-menu-toggle auto-hide=\"false\"\n                                     *ngIf=\"auth.userIs(['super.admin'])\">\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLinkActiveOptions]=\"{exact: true}\"\n                                  [routerLink]=\"'/barcode-scanner'\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>Barcode Scanner</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLinkActiveOptions]=\"{exact: true}\"\n                                  [routerLink]=\"'/camera'\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>Camera</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLinkActiveOptions]=\"{exact: true}\"\n                                  [routerLink]=\"'/download'\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>Download</ion-label>\n                        </ion-item>\n\n                    </ion-menu-toggle>\n\n                </ion-list>\n                <ion-list id=\"admin-pages-list\">\n                    <ion-item-divider>\n                        Mantenimiento Preventivo\n                    </ion-item-divider>\n                    <ion-menu-toggle auto-hide=\"false\">\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/oper-machines'\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>Maquinaria</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/oper-replacements'\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>Repuestos</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/oper-preventive-maintenances'\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>Registrar mantenimiento</ion-label>\n                        </ion-item>\n                    </ion-menu-toggle>\n\n\n                    <ion-item-divider>\n                        Mantenimiento Correctivo\n                    </ion-item-divider>\n                    <ion-menu-toggle auto-hide=\"false\">\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/oper-items'\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>Items</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/oper-reasons'\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>Motivos</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/oper-corrective-maintenances'\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>PQR</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/oper-maintenance-repairs'\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>Solucionar PQR</ion-label>\n                        </ion-item>\n                    </ion-menu-toggle>\n\n                    <ion-item-divider>\n                        Operatividad\n                    </ion-item-divider>\n                    <ion-menu-toggle auto-hide=\"false\">\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/oper-schedules'\"\n                                  *ngIf=\"auth.userIs(['admin', 'super.admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>Agenda</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/oper-schedules/own'\"\n                                  *ngIf=\"auth.userIs(['servicios-generales'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>Mi Agenda</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/oper-schedules/movement'\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>Movimiento operativo</ion-label>\n                        </ion-item>\n\n                    </ion-menu-toggle>\n\n                    <ion-item-divider>\n                        Juntas del consejo\n                    </ion-item-divider>\n                    <ion-menu-toggle auto-hide=\"false\">\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/coun-meetings/create/custom'\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>Crear junta</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/coun-meetings/list/custom'\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>Registrar juntas</ion-label>\n                        </ion-item>\n                    </ion-menu-toggle>\n\n                    <ion-item-divider *ngIf=\"auth.userCan(['cartelera.listar', 'cartelera.crear'])\">\n                        Cartelera\n                    </ion-item-divider>\n                    <ion-menu-toggle auto-hide=\"false\">\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/board'\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>Listar Cartelera</ion-label>\n                        </ion-item>\n\n                    </ion-menu-toggle>\n\n                    <ion-item-divider>\n                        Correspondencia\n                    </ion-item-divider>\n                    <ion-menu-toggle auto-hide=\"false\">\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/corr-packets/postboxes'\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>Buzones</ion-label>\n                        </ion-item>\n                    </ion-menu-toggle>\n\n                    <ion-item-divider *ngIf=\"auth.userIs(['super.admin', 'admin'])\">\n                        Admin\n                    </ion-item-divider>\n                    <ion-menu-toggle auto-hide=\"false\"\n                                     *ngIf=\"auth.userIs(['super.admin', 'admin'])\">\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  [routerLink]=\"'/users'\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>USUARIOS</ion-label>\n                        </ion-item>\n                        <!-- generated section -->\n\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/user-profiles'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>PERFILES DE USUARIOS</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/syst-cities'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>CIUDADES</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/syst-regions'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>DEPARTAMENTOS</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/syst-countries'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>PAISES</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/companies'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>EMPRESAS</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/comp-phones'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>TELÉFONOS DE EMPRESAS</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/comp-addresses'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>EMPRESAS DIRECCIONES</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/comp-contacts'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>EMPRESAS CONTACTOS</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/syst-positions'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>CARGOS</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/syst-parameters'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>PARAMETROS</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/syst-parameter-groups'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>GRUPOS DE PARAMETROS</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/comp-responsabilities'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>EMPRESAS RESPONSABILIDADES LEGALES</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/hous-units'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>UNIDADES HABITACIONALES</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/hous-unit-areas'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>UNIDADES HABITACIONALES AREAS</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/oper-sectors'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>OPERATIVIDAD SECTORES</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/coun-meetings'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>JUNTAS DEL CONSEJO</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/coun-meeting-agendas'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>JUNTAS AGENDAS</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/coun-meeting-citations'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>JUNTAS CITACIONES</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/oper-schedules'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>OPERATRIVIDAD AGENDAS</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/oper-contractors'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>CONTRATISTAS OPERATIVOS</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/oper-movements'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>MOVIMIENTOS OPERATIVOS</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/coun-members'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>JUNTAS MIEMBROS</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/mail-templates'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>CORREOS PLANTILLAS</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/mails'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>CORREOS</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/files'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>JUNTAS ARCHIVOS DE AGENDAS</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/corr-packets'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>CORRESPONDENCIA PAQUETES</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/settings'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>AJUSTES</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/setting-groups'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>AJUSTES GRUPOS</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/user-roles'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>USUARIOS ROLES</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/user-permissions'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>USUARIOS PERMISOS</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/oper-machines'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>OPERATIVIDAD MAQUINARIA</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/oper-preventive-maintenances'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>OPERATIVIDAD MTTO PREVENTIVOS</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/oper-replacements'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>OPERATIVIDAD REPUESTOS</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/oper-items'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>OPERATIVIDAD ITEMS MTTO CORRECTIVO</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/oper-reasons'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>OPERATIVIDAD MOTIVOS MTTO CORRECTIVO</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/oper-corrective-maintenances'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>OPERATIVIDAD MTTO CORRECTIVOS</ion-label>\n                        </ion-item>\n                        <ion-item [routerLinkActive]=\"'selected'\"\n                                  [routerLink]=\"'/oper-maintenance-repairs'\"\n                                  *ngIf=\"auth.userIs(['super.admin', 'admin'])\"\n                                  lines=\"none\"\n                                  detail=\"false\">\n                            <ion-icon slot=\"start\"\n                                      ios=\"bookmark-outline\"\n                                      md=\"bookmark-sharp\"></ion-icon>\n                            <ion-label>OPERATIVIDAD REPARACIONES</ion-label>\n                        </ion-item>\n\n\n                        <!-- end section -->\n                    </ion-menu-toggle>\n                </ion-list>\n\n                <ion-list id=\"labels-list\">\n                    <ion-item-divider>\n                        Opciones\n                    </ion-item-divider>\n                    <ion-item lines=\"none\">\n                        <ion-icon slot=\"start\"\n                                  [name]=\"dark ? 'moon-outline' : 'sunny-outline'\"></ion-icon>\n                        <ion-label>\n                            {{ (dark ? 'Tema Oscuro' : 'Trema Claro') }}\n                        </ion-label>\n                        <ion-toggle id=\"themeToggle\"\n                                    slot=\"end\"\n                                    [(ngModel)]=\"dark\"\n                                    (ionChange)=\"updateDarkMode()\"></ion-toggle>\n                    </ion-item>\n\n                    <ion-item *ngIf=\"!auth.userIsLogged()\"\n                              [routerLink]=\"'/auth/login'\"\n                              lines=\"none\">\n                        <ion-label>\n                            Login\n                        </ion-label>\n                    </ion-item>\n\n                    <ion-item *ngIf=\"auth.userIsLogged()\"\n                              [routerLink]=\"'/auth/logout'\"\n                              lines=\"none\">\n                        <ion-label>\n                            Logout\n                        </ion-label>\n                    </ion-item>\n\n                </ion-list>\n            </ion-content>\n        </ion-menu>\n        <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n    </ion-split-pane>\n</ion-app>\n";
      /***/
    },

    /***/
    "./src/app/@layouts/components/loading/loading.component.scss":
    /*!********************************************************************!*\
      !*** ./src/app/@layouts/components/loading/loading.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutsComponentsLoadingLoadingComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".loading-indicator {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background: rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQGxheW91dHMvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvQGxheW91dHMvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZy1pbmRpY2F0b3Ige1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/@layouts/components/loading/loading.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/@layouts/components/loading/loading.component.ts ***!
      \******************************************************************/

    /*! exports provided: LoadingComponent */

    /***/
    function srcAppLayoutsComponentsLoadingLoadingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
        return LoadingComponent;
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


      var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../@shared/services/loading.service */
      "./src/app/@shared/services/loading.service.ts");

      var LoadingComponent = /*#__PURE__*/function () {
        function LoadingComponent(loading) {
          _classCallCheck(this, LoadingComponent);

          this.loading = loading;
        }

        _createClass(LoadingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoadingComponent;
      }();

      LoadingComponent.ctorParameters = function () {
        return [{
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]
        }];
      };

      LoadingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loading',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./loading.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/@layouts/components/loading/loading.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./loading.component.scss */
        "./src/app/@layouts/components/loading/loading.component.scss"))["default"]]
      })], LoadingComponent);
      /***/
    },

    /***/
    "./src/app/@layouts/layouts.module.ts":
    /*!********************************************!*\
      !*** ./src/app/@layouts/layouts.module.ts ***!
      \********************************************/

    /*! exports provided: LayoutsModule */

    /***/
    function srcAppLayoutsLayoutsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutsModule", function () {
        return LayoutsModule;
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


      var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/loading/loading.component */
      "./src/app/@layouts/components/loading/loading.component.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../@shared/shared.module */
      "./src/app/@shared/shared.module.ts");

      var LayoutsModule = function LayoutsModule() {
        _classCallCheck(this, LayoutsModule);
      };

      LayoutsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
        exports: [_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"]]
      })], LayoutsModule);
      /***/
    },

    /***/
    "./src/app/@shared/components/main-header/main-header.component.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/@shared/components/main-header/main-header.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSharedComponentsMainHeaderMainHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvY29tcG9uZW50cy9tYWluLWhlYWRlci9tYWluLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/@shared/components/main-header/main-header.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/@shared/components/main-header/main-header.component.ts ***!
      \*************************************************************************/

    /*! exports provided: MainHeaderComponent */

    /***/
    function srcAppSharedComponentsMainHeaderMainHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainHeaderComponent", function () {
        return MainHeaderComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_split_panel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/split-panel.service */
      "./src/app/@shared/services/split-panel.service.ts");

      var MainHeaderComponent = /*#__PURE__*/function () {
        function MainHeaderComponent(platform, splitPanel) {
          _classCallCheck(this, MainHeaderComponent);

          this.platform = platform;
          this.splitPanel = splitPanel;
          this.title = '';
          this.primaryLink = '';
          this.primaryIcon = '';
          this.primaryText = '';
          this.showSplitPanelButton = true;
        }

        _createClass(MainHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.splitPanel.show.subscribe(function (res) {// console.log('Main Header Split panel show ' + res);
            });
          }
        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            var splitPane = document.querySelector('ion-split-pane');
            var windowWidth = window.innerWidth;
            var splitPaneShownAt = 992;
            var when = "(min-width: ".concat(splitPaneShownAt, "px)");

            if (windowWidth >= splitPaneShownAt) {
              // split pane view is visible
              var open = splitPane.when === when;
              splitPane.when = open ? false : when;
            } else {
              // split pane view is not visible
              // toggle menu open
              var menu = splitPane.querySelector('ion-menu');
              return menu.open();
            }
          }
        }]);

        return MainHeaderComponent;
      }();

      MainHeaderComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _services_split_panel_service__WEBPACK_IMPORTED_MODULE_3__["SplitPanelService"]
        }];
      };

      MainHeaderComponent.propDecorators = {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['title']
        }],
        primaryLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['primaryLink']
        }],
        primaryIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['primaryIcon']
        }],
        primaryText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['primaryText']
        }],
        showSplitPanelButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['showSplitPanelButton']
        }]
      };
      MainHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./main-header.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/@shared/components/main-header/main-header.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./main-header.component.scss */
        "./src/app/@shared/components/main-header/main-header.component.scss"))["default"]]
      })], MainHeaderComponent);
      /***/
    },

    /***/
    "./src/app/@shared/components/popover/popover.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/@shared/components/popover/popover.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSharedComponentsPopoverPopoverComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvY29tcG9uZW50cy9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/@shared/components/popover/popover.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/@shared/components/popover/popover.component.ts ***!
      \*****************************************************************/

    /*! exports provided: PopoverComponent */

    /***/
    function srcAppSharedComponentsPopoverPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverComponent", function () {
        return PopoverComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PopoverComponent = /*#__PURE__*/function () {
        function PopoverComponent() {
          _classCallCheck(this, PopoverComponent);

          this.currentPopover = null;
        }

        _createClass(PopoverComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismissPopover",
          value: function dismissPopover() {
            var _this = this;

            if (this.currentPopover) {
              this.currentPopover.dismiss().then(function () {
                _this.currentPopover = null;
              });
            }
          }
        }]);

        return PopoverComponent;
      }();

      PopoverComponent.ctorParameters = function () {
        return [];
      };

      PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popover',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./popover.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/@shared/components/popover/popover.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./popover.component.scss */
        "./src/app/@shared/components/popover/popover.component.scss"))["default"]]
      })], PopoverComponent);
      /***/
    },

    /***/
    "./src/app/@shared/guards/auth.guard.ts":
    /*!**********************************************!*\
      !*** ./src/app/@shared/guards/auth.guard.ts ***!
      \**********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppSharedGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
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


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/@shared/services/auth.service.ts");
      /* harmony import */


      var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/alert.service */
      "./src/app/@shared/services/alert.service.ts");
      /* harmony import */


      var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/toast.service */
      "./src/app/@shared/services/toast.service.ts");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(auth, router, alert, toast) {
          _classCallCheck(this, AuthGuard);

          this.auth = auth;
          this.router = router;
          this.alert = alert;
          this.toast = toast;
        }
        /**
         *
         * @param next
         * @param state
         */


        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            return this.check(next);
          }
          /**
           *
           * @param next
           * @param state
           */

        }, {
          key: "canActivateChild",
          value: function canActivateChild(next, state) {
            return this.check(next);
          }
          /**
           *
           * @param next
           */

        }, {
          key: "check",
          value: function check(next) {
            if (next.data.logged) {
              if (!(this.auth.userIsLogged() === next.data.logged)) {
                this.notify('No ha ingresado al sistema!');
                return false;
              }
            }

            if (next.data.roles !== undefined) {
              if (!this.auth.userIs(next.data.roles)) {
                this.notify('No tiene el rol necesario!');
                return false;
              }
            }

            if (next.data.permissions !== undefined) {
              if (!this.auth.userCan(next.data.permissions)) {
                this.notify('No tiene el permiso necesario!');
                return false;
              }
            }

            return true;
          }
          /**
           *
           * @param message
           */

        }, {
          key: "notify",
          value: function notify(message) {
            this.toast.present(message, 'toast-warning');
            this.router.navigateByUrl('/');
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthGuard);
      /***/
    },

    /***/
    "./src/app/@shared/interceptors/api-prefix.interceptor.ts":
    /*!****************************************************************!*\
      !*** ./src/app/@shared/interceptors/api-prefix.interceptor.ts ***!
      \****************************************************************/

    /*! exports provided: ApiPrefixInterceptor */

    /***/
    function srcAppSharedInterceptorsApiPrefixInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiPrefixInterceptor", function () {
        return ApiPrefixInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /**
       * Prefixes all requests not starting with `http[s]` with `environment.serverUrl`.
       */


      var ApiPrefixInterceptor = /*#__PURE__*/function () {
        function ApiPrefixInterceptor() {
          _classCallCheck(this, ApiPrefixInterceptor);

          console.log('API Prefix interceptor');
        }

        _createClass(ApiPrefixInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            //if (!/^(http|https):/i.test(request.url)) {
            var newUrl = new URL(request.url);
            var params = new URLSearchParams(newUrl.search.slice(1)); // params.append('XDEBUG_SESSION_START', '13274');

            request = request.clone({
              url: newUrl.toString().split('?')[0] + '?' + params.toString()
            }); //}

            return next.handle(request);
          }
        }]);

        return ApiPrefixInterceptor;
      }();

      ApiPrefixInterceptor.ctorParameters = function () {
        return [];
      };

      ApiPrefixInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ApiPrefixInterceptor);
      /***/
    },

    /***/
    "./src/app/@shared/interceptors/loading.interceptor.ts":
    /*!*************************************************************!*\
      !*** ./src/app/@shared/interceptors/loading.interceptor.ts ***!
      \*************************************************************/

    /*! exports provided: LoadingInterceptor */

    /***/
    function srcAppSharedInterceptorsLoadingInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingInterceptor", function () {
        return LoadingInterceptor;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/loading.service */
      "./src/app/@shared/services/loading.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/toast.service */
      "./src/app/@shared/services/toast.service.ts");

      var LoadingInterceptor = /*#__PURE__*/function () {
        function LoadingInterceptor(loadingService, toast) {
          _classCallCheck(this, LoadingInterceptor);

          this.loadingService = loadingService;
          this.toast = toast;
          this.pendingRequests = 0;
          console.log('Loading Interceptor');
        }

        _createClass(LoadingInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this2 = this;

            var authReq = req.clone();
            this.track(true);
            return next.handle(authReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              _this2.track(false);
            }));
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.error.message) {
              if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production === false) {
                // this.toast.showError(error.error.message, this.translate.instant('Some thing was wrong'));
                this.toast.present(error.error.message, 'toast-error');
              } else {
                // this.toast.showError('', this.translate.instant('Some thing was wrong'));
                this.toast.present('Algo salio mal', 'toast-error');
                console.error(error.error.message);
              }
            }

            if (error.error.errors) {
              for (var key in error.error.errors) {
                if (error.status === 422) {
                  var errorMessage = ''; // this.toast.showError(error.error.errors[key], null);

                  this.toast.present(error.error.errors[key], 'toast-error');
                }

                if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production === false && error.status !== 422) {
                  // this.toast.showError(error.error[key][0], error.error.errors[key]);
                  this.toast.present(error.error[key][0], 'toast-error');
                }
              }
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
          }
        }, {
          key: "track",
          value: function track(_track) {
            // console.log(this.pendingRequests);
            if (_track) {
              this.pendingRequests++;
            } else {
              this.pendingRequests--;
            }

            if (this.pendingRequests > 0) {
              this.loadingService.isLoading.next(true);
            } else {
              this.loadingService.isLoading.next(false);
            }
          }
        }]);

        return LoadingInterceptor;
      }();

      LoadingInterceptor.ctorParameters = function () {
        return [{
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
        }, {
          type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
        }];
      };

      LoadingInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], LoadingInterceptor);
      /***/
    },

    /***/
    "./src/app/@shared/interceptors/subdomain.interceptor.ts":
    /*!***************************************************************!*\
      !*** ./src/app/@shared/interceptors/subdomain.interceptor.ts ***!
      \***************************************************************/

    /*! exports provided: SubdomainInterceptor */

    /***/
    function srcAppSharedInterceptorsSubdomainInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubdomainInterceptor", function () {
        return SubdomainInterceptor;
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


      var _services_storage_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/storage-local.service */
      "./src/app/@shared/services/storage-local.service.ts");

      var SubdomainInterceptor = /*#__PURE__*/function () {
        function SubdomainInterceptor(storage) {
          _classCallCheck(this, SubdomainInterceptor);

          this.storage = storage;
          console.log('SubDomain Interceptor', this.getSubdomain(window.location.hostname), window.location.hostname);
        }

        _createClass(SubdomainInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var subdomain = this.storage.get('subdomain');

            if (subdomain) {
              request = request.clone({
                setHeaders: {
                  Subdomain: "".concat(subdomain)
                }
              });
            }

            return next.handle(request);
          }
        }, {
          key: "getSubdomain",
          value: function getSubdomain(hostname) {
            var regexParse = new RegExp('[a-z\-0-9]{2,63}\.[a-z\.]{2,5}$');
            var urlParts = regexParse.exec(hostname);
            return hostname.replace(urlParts[0], '').slice(0, -1);
          }
        }]);

        return SubdomainInterceptor;
      }();

      SubdomainInterceptor.ctorParameters = function () {
        return [{
          type: _services_storage_local_service__WEBPACK_IMPORTED_MODULE_2__["StorageLocalService"]
        }];
      };

      SubdomainInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SubdomainInterceptor);
      /***/
    },

    /***/
    "./src/app/@shared/interceptors/token.interceptor.ts":
    /*!***********************************************************!*\
      !*** ./src/app/@shared/interceptors/token.interceptor.ts ***!
      \***********************************************************/

    /*! exports provided: TokenInterceptor */

    /***/
    function srcAppSharedInterceptorsTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
        return TokenInterceptor;
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


      var _services_storage_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/storage-local.service */
      "./src/app/@shared/services/storage-local.service.ts");

      var TokenInterceptor = /*#__PURE__*/function () {
        function TokenInterceptor(storage) {
          _classCallCheck(this, TokenInterceptor);

          this.storage = storage;
          console.log('Token Interceptor');
        }

        _createClass(TokenInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var token = this.storage.get('token');

            if (token) {
              request = request.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(token)
                }
              });
            }

            return next.handle(request);
          }
        }]);

        return TokenInterceptor;
      }();

      TokenInterceptor.ctorParameters = function () {
        return [{
          type: _services_storage_local_service__WEBPACK_IMPORTED_MODULE_2__["StorageLocalService"]
        }];
      };

      TokenInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TokenInterceptor);
      /***/
    },

    /***/
    "./src/app/@shared/pipes/date-format.pipe.ts":
    /*!***************************************************!*\
      !*** ./src/app/@shared/pipes/date-format.pipe.ts ***!
      \***************************************************/

    /*! exports provided: DateFormatPipe */

    /***/
    function srcAppSharedPipesDateFormatPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateFormatPipe", function () {
        return DateFormatPipe;
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


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);

      var DateFormatPipe = /*#__PURE__*/function () {
        function DateFormatPipe() {
          _classCallCheck(this, DateFormatPipe);
        }

        _createClass(DateFormatPipe, [{
          key: "transform",
          value: function transform(value, format) {
            if (value && format) {
              if (format == 'HH:mm') {
                return moment__WEBPACK_IMPORTED_MODULE_2__('1990-01-01 ' + value).format(format);
              }

              return moment__WEBPACK_IMPORTED_MODULE_2__(value).format(format);
            }

            return value;
          }
        }]);

        return DateFormatPipe;
      }();

      DateFormatPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'dateFormat'
      })], DateFormatPipe);
      /***/
    },

    /***/
    "./src/app/@shared/pipes/get-parameter.pipe.ts":
    /*!*****************************************************!*\
      !*** ./src/app/@shared/pipes/get-parameter.pipe.ts ***!
      \*****************************************************/

    /*! exports provided: GetParameterPipe */

    /***/
    function srcAppSharedPipesGetParameterPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetParameterPipe", function () {
        return GetParameterPipe;
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


      var _services_storage_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/storage-local.service */
      "./src/app/@shared/services/storage-local.service.ts");

      var GetParameterPipe = /*#__PURE__*/function () {
        function GetParameterPipe(storageLocal) {
          _classCallCheck(this, GetParameterPipe);

          this.storageLocal = storageLocal;
        }

        _createClass(GetParameterPipe, [{
          key: "transform",
          value: function transform(value) {
            if (value && value != '') {
              var parameters = this.storageLocal.get('parameters');

              if (!parameters) {
                return '';
              }

              for (var i = 0; i < parameters.length; i++) {
                if (parameters[i].code === value) {
                  return parameters[i].value;
                }
              }
            }

            return '';
          }
        }]);

        return GetParameterPipe;
      }();

      GetParameterPipe.ctorParameters = function () {
        return [{
          type: _services_storage_local_service__WEBPACK_IMPORTED_MODULE_2__["StorageLocalService"]
        }];
      };

      GetParameterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'getParameter'
      })], GetParameterPipe);
      /***/
    },

    /***/
    "./src/app/@shared/pipes/status.pipe.ts":
    /*!**********************************************!*\
      !*** ./src/app/@shared/pipes/status.pipe.ts ***!
      \**********************************************/

    /*! exports provided: StatusPipe */

    /***/
    function srcAppSharedPipesStatusPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatusPipe", function () {
        return StatusPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var StatusPipe = /*#__PURE__*/function () {
        function StatusPipe() {
          _classCallCheck(this, StatusPipe);
        }

        _createClass(StatusPipe, [{
          key: "transform",
          value: function transform(value) {
            if (value === null || value === '') {
              return '';
            } else {
              var status = {
                active: 'Activo',
                inactive: 'Inactivo',
                hold: 'En espera',
                finalized: 'Finalizado',
                in_progress: 'En progreso',
                pending: 'Pendiente',
                resolved: 'Resuelto',
                daily: 'Diario',
                weekly: 'Semanal',
                monthly: 'Mensual',
                bimonthly: 'Bimensual',
                quarterly: 'Trimestral',
                biannual: 'Semestral',
                annual: 'Anual',
                unknown: 'Desconocido'
              };
              return status[value] ? status[value] : value;
            }
          }
        }]);

        return StatusPipe;
      }();

      StatusPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'status'
      })], StatusPipe);
      /***/
    },

    /***/
    "./src/app/@shared/pipes/strip-html.pipe.ts":
    /*!**************************************************!*\
      !*** ./src/app/@shared/pipes/strip-html.pipe.ts ***!
      \**************************************************/

    /*! exports provided: StripHtmlPipe */

    /***/
    function srcAppSharedPipesStripHtmlPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StripHtmlPipe", function () {
        return StripHtmlPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var StripHtmlPipe = /*#__PURE__*/function () {
        function StripHtmlPipe() {
          _classCallCheck(this, StripHtmlPipe);
        }

        _createClass(StripHtmlPipe, [{
          key: "transform",
          value: function transform(value) {
            if (value === null || value === '') {
              return '';
            } else {
              return value.replace(/<(?:.|\n)*?>/gm, ' ');
            }
          }
        }]);

        return StripHtmlPipe;
      }();

      StripHtmlPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'stripHtml'
      })], StripHtmlPipe);
      /***/
    },

    /***/
    "./src/app/@shared/pipes/time-format.pipe.ts":
    /*!***************************************************!*\
      !*** ./src/app/@shared/pipes/time-format.pipe.ts ***!
      \***************************************************/

    /*! exports provided: TimeFormatPipe */

    /***/
    function srcAppSharedPipesTimeFormatPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeFormatPipe", function () {
        return TimeFormatPipe;
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


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);

      var TimeFormatPipe = /*#__PURE__*/function () {
        function TimeFormatPipe() {
          _classCallCheck(this, TimeFormatPipe);
        }

        _createClass(TimeFormatPipe, [{
          key: "transform",
          value: function transform(value, format) {
            if (value && format) {
              return moment__WEBPACK_IMPORTED_MODULE_2__(value, 'HH:mm:ss').format(format);
            }

            return value;
          }
        }]);

        return TimeFormatPipe;
      }();

      TimeFormatPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'timeFormat'
      })], TimeFormatPipe);
      /***/
    },

    /***/
    "./src/app/@shared/pipes/truencate.pipe.ts":
    /*!*************************************************!*\
      !*** ./src/app/@shared/pipes/truencate.pipe.ts ***!
      \*************************************************/

    /*! exports provided: TruncatePipe */

    /***/
    function srcAppSharedPipesTruencatePipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TruncatePipe", function () {
        return TruncatePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TruncatePipe = /*#__PURE__*/function () {
        function TruncatePipe() {
          _classCallCheck(this, TruncatePipe);
        }

        _createClass(TruncatePipe, [{
          key: "transform",
          value: function transform(value) {
            var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25;
            var completeWords = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var ellipsis = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '...';

            if (completeWords) {
              limit = value.substr(0, limit).lastIndexOf(' ');
            }

            return value.length > limit ? value.substr(0, limit) + ellipsis : value;
          }
        }]);

        return TruncatePipe;
      }();

      TruncatePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'truncate'
      })], TruncatePipe);
      /***/
    },

    /***/
    "./src/app/@shared/pipes/zero-leading.pipe.ts":
    /*!****************************************************!*\
      !*** ./src/app/@shared/pipes/zero-leading.pipe.ts ***!
      \****************************************************/

    /*! exports provided: ZeroLeadingPipe */

    /***/
    function srcAppSharedPipesZeroLeadingPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ZeroLeadingPipe", function () {
        return ZeroLeadingPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ZeroLeadingPipe = /*#__PURE__*/function () {
        function ZeroLeadingPipe() {
          _classCallCheck(this, ZeroLeadingPipe);
        }

        _createClass(ZeroLeadingPipe, [{
          key: "transform",
          value: function transform(value) {
            var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;

            if (value === null || value === '') {
              return '';
            } else {
              value = value.toString();

              while (value.length < size) {
                value = "0" + value;
              }

              return value;
            }
          }
        }]);

        return ZeroLeadingPipe;
      }();

      ZeroLeadingPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'zeroLeading'
      })], ZeroLeadingPipe);
      /***/
    },

    /***/
    "./src/app/@shared/services/alert.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/@shared/services/alert.service.ts ***!
      \***************************************************/

    /*! exports provided: AlertService */

    /***/
    function srcAppSharedServicesAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return AlertService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var AlertService = /*#__PURE__*/function () {
        function AlertService(alertController) {
          _classCallCheck(this, AlertService);

          this.alertController = alertController;
        }

        _createClass(AlertService, [{
          key: "confirmation",
          value: function confirmation(message) {
            var header = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var okButtonText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Si';
            var koButtonText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'No';
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var resolveFunction, promise, alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      promise = new Promise(function (resolve) {
                        resolveFunction = resolve;
                      });
                      _context.next = 3;
                      return this.alertController.create({
                        header: header,
                        message: '<ion-icon name="warning-outline" class="icon-s text-warning"></ion-icon><br>' + '<p class="text-s">' + message + '</p>',
                        backdropDismiss: false,
                        buttons: [{
                          text: koButtonText,
                          handler: function handler() {
                            return resolveFunction(false);
                          }
                        }, {
                          text: okButtonText,
                          cssClass: 'text-warning',
                          handler: function handler() {
                            return resolveFunction(true);
                          }
                        }]
                      });

                    case 3:
                      alert = _context.sent;
                      _context.next = 6;
                      return alert.present();

                    case 6:
                      return _context.abrupt("return", promise);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "alert",
          value: function alert(message) {
            var header = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var okButtonText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'OK';
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var resolveFunction, promise, alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      promise = new Promise(function (resolve) {
                        resolveFunction = resolve;
                      });
                      _context2.next = 3;
                      return this.alertController.create({
                        header: header,
                        message: '<ion-icon name="information-circle-outline" class="icon-s text-primary"></ion-icon><br>' + '<p class="text-s">' + message + '</p>',
                        backdropDismiss: false,
                        buttons: [{
                          text: okButtonText,
                          handler: function handler() {
                            return resolveFunction(true);
                          }
                        }]
                      });

                    case 3:
                      alert = _context2.sent;
                      _context2.next = 6;
                      return alert.present();

                    case 6:
                      return _context2.abrupt("return", promise);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return AlertService;
      }();

      AlertService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AlertService);
      /***/
    },

    /***/
    "./src/app/@shared/services/api.service.ts":
    /*!*************************************************!*\
      !*** ./src/app/@shared/services/api.service.ts ***!
      \*************************************************/

    /*! exports provided: ApiService */

    /***/
    function srcAppSharedServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http, router) {
          _classCallCheck(this, ApiService);

          this.http = http;
          this.router = router;
          this.token = '';
          this.data = null;
        }

        _createClass(ApiService, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * GET Http request to promise
           *
           * @param path
           */

        }, {
          key: "syncGet",
          value: function syncGet(path) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

              var promise;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      promise = new Promise(function (resolve, reject) {
                        _this3.http.get(path).toPromise().then(function (res) {
                          // Success
                          resolve(res);
                        }, function (err) {
                          // Error
                          reject(err);
                        });
                      });
                      _context3.next = 3;
                      return promise;

                    case 3:
                      return _context3.abrupt("return", _context3.sent);

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          }
          /**
           * POST Http request to promise
           *
           * @param path
           * @param body
           */

        }, {
          key: "syncPost",
          value: function syncPost(path, body) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this4 = this;

              var promise;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      promise = new Promise(function (resolve, reject) {
                        _this4.http.post(path, body).toPromise().then(function (res) {
                          // Success
                          resolve(res);
                        }, function (err) {
                          // Error
                          reject(err);
                        });
                      });
                      _context4.next = 3;
                      return promise;

                    case 3:
                      return _context4.abrupt("return", _context4.sent);

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));
          }
          /**
           * PUT Http request to promise
           *
           * @param path
           * @param body
           */

        }, {
          key: "syncPut",
          value: function syncPut(path, body) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this5 = this;

              var promise;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      promise = new Promise(function (resolve, reject) {
                        _this5.http.post(path, body).toPromise().then(function (res) {
                          // Success
                          resolve(res);
                        }, function (err) {
                          // Error
                          reject(err);
                        });
                      });
                      _context5.next = 3;
                      return promise;

                    case 3:
                      return _context5.abrupt("return", _context5.sent);

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));
          }
          /**
           * DELETE Http request to promise
           *
           * @param path
           * @param body
           */

        }, {
          key: "syncDelete",
          value: function syncDelete(path, body) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this6 = this;

              var promise;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      promise = new Promise(function (resolve, reject) {
                        _this6.http.post(path, body).toPromise().then(function (res) {
                          // Success
                          resolve(res);
                        }, function (err) {
                          // Error
                          reject(err);
                        });
                      });
                      _context6.next = 3;
                      return promise;

                    case 3:
                      return _context6.abrupt("return", _context6.sent);

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));
          }
          /**
           * GET Http Request
           *
           * @param {string} path
           * @param {HttpParams} params
           * @returns {Observable<any>}
           */

        }, {
          key: "get",
          value: function get(path) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverUrl, "/api/").concat(path), params);
          }
          /**
           * GET Http Request. External
           *
           * @param {string} path
           * @param {HttpParams} params
           * @returns {Observable<any>}
           */

        }, {
          key: "getFull",
          value: function getFull(path, params) {
            return this.http.get("".concat(path), params);
          }
          /**
           * PUT Http Request
           *
           * @param {string} path
           * @param {Object} body
           * @returns {Observable<any>}
           */

        }, {
          key: "put",
          value: function put(path, body) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverUrl, "/api/").concat(path), body);
          }
          /**
           * POST Http Request
           *
           * @param {string} path
           * @param {object} body
           * @returns {Observable<any>}
           */

        }, {
          key: "post",
          value: function post(path, body) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverUrl, "/api/").concat(path), body);
          }
          /**
           * DELETE Http Request
           *
           * @param {string} path
           * @returns {Observable<any>}
           */

        }, {
          key: "delete",
          value: function _delete(path, body) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverUrl, "/api/").concat(path), body);
          }
        }]);

        return ApiService;
      }();

      ApiService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
      /**
       * Call Backend Http request service
       */
      ], ApiService);
      /***/
    },

    /***/
    "./src/app/@shared/services/auth.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/@shared/services/auth.service.ts ***!
      \**************************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppSharedServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./api.service */
      "./src/app/@shared/services/api.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _storage_local_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./storage-local.service */
      "./src/app/@shared/services/storage-local.service.ts");
      /* harmony import */


      var _toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./toast.service */
      "./src/app/@shared/services/toast.service.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(api, router, // public loading: LoadingService,
        toast, storage) {
          _classCallCheck(this, AuthService);

          this.api = api;
          this.router = router;
          this.toast = toast;
          this.storage = storage;
          /**
           * Save if a user is logged
           */

          this.isLoggedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
          /**
           * Get the isLoggedSubject value
           */

          this.isLogged = this.isLoggedSubject.asObservable();
          this.checkToken = null;
          this.userIsLogged();
        }
        /**
         * Login a user in the system
         * @param credentials
         * @param redirect
         */


        _createClass(AuthService, [{
          key: "login",
          value: function login(credentials) {
            var redirect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this7 = this;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      if (!this.userIsLogged()) {
                        _context9.next = 2;
                        break;
                      }

                      return _context9.abrupt("return");

                    case 2:
                      // this.loading.isLoading.next(true);
                      this.api.syncPost('api/auth/login', credentials).then(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                          var _this8 = this;

                          return regeneratorRuntime.wrap(function _callee8$(_context8) {
                            while (1) {
                              switch (_context8.prev = _context8.next) {
                                case 0:
                                  this.storage.set('token', res.data.access_token);
                                  _context8.next = 3;
                                  return this.api.syncGet('api/auth/profile').then(function (res) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                                      return regeneratorRuntime.wrap(function _callee7$(_context7) {
                                        while (1) {
                                          switch (_context7.prev = _context7.next) {
                                            case 0:
                                              this.storage.set('user', res.data.user);
                                              this.storage.set('acl', res.data.acl);

                                              if (!this.checkToken) {
                                                this.startCheckExpirationToken();
                                              }

                                              if (!redirect) {
                                                _context7.next = 6;
                                                break;
                                              }

                                              _context7.next = 6;
                                              return this.router.navigateByUrl('/');

                                            case 6:
                                            case "end":
                                              return _context7.stop();
                                          }
                                        }
                                      }, _callee7, this);
                                    }));
                                  });

                                case 3:
                                case "end":
                                  return _context8.stop();
                              }
                            }
                          }, _callee8, this);
                        }));
                      }, function (err) {});

                    case 3:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
          /**
           * Register a new user
           * @param credentials
           */

        }, {
          key: "register",
          value: function register(credentials) {
            var _this9 = this;

            return this.api.syncPost('api/auth/register', credentials).then(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        _context10.next = 2;
                        return this.login({
                          email: credentials.email,
                          password: credentials.password,
                          remember_me: null
                        });

                      case 2:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, this);
              }));
            }, function (err) {});
          }
          /**
           * Logout a user
           */

        }, {
          key: "logout",
          value: function logout() {
            var _this10 = this;

            var redirect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this.api.syncPost(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].serverUrl + '/api/auth/logout', {}).then(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        this.toast.present('Salio con éxito!', 'toast-success');
                        this.stopCheckExpirationToken();
                        this.clearAuth(redirect);

                      case 3:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, this);
              }));
            }, function (err) {
              _this10.clearAuth(redirect);
            });
          }
        }, {
          key: "clearAuth",
          value: function clearAuth() {
            var redirect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this.storage.remove('token');
            this.storage.remove('user');
            this.storage.remove('acl');
            this.isLoggedSubject.next(false);

            if (redirect) {
              this.router.navigateByUrl('/auth/login');
            }
          }
          /**
           * Get the user permissions
           * @private
           */

        }, {
          key: "getPermissions",
          value: function getPermissions() {
            var acl = this.storage.get('acl');

            if (acl) {
              return acl.permissions;
            }

            return null;
          }
          /**
           * Get the user roles
           * @private
           */

        }, {
          key: "getRoles",
          value: function getRoles() {
            var acl = this.storage.get('acl');

            if (acl) {
              return acl.roles;
            }

            return null;
          }
          /**
           * Check if a user is logged
           */

        }, {
          key: "userIsLogged",
          value: function userIsLogged() {
            var token = this.storage.get('token');
            var user = this.storage.get('user');
            var acl = this.storage.get('acl');

            if (token && user && acl) {
              this.isLoggedSubject.next(true);
              return true;
            }

            this.isLoggedSubject.next(false);
            return false;
          }
          /**
           * Check if the user has a permission
           * @param permissions
           */

        }, {
          key: "userCan",
          value: function userCan(permissions) {
            var userPermissions = this.getPermissions();

            if (userPermissions) {
              for (var i = 0; i < permissions.length; i++) {
                for (var j = 0; j < userPermissions.length; j++) {
                  if (userPermissions[j] === permissions[i]) {
                    return true;
                  }
                }
              }
            }

            return false;
          }
          /**
           * Check if the user has a role
           * @param roles
           */

        }, {
          key: "userIs",
          value: function userIs(roles) {
            var userRoles = this.getRoles();

            if (userRoles) {
              for (var i = 0; i < roles.length; i++) {
                for (var j = 0; j < userRoles.length; j++) {
                  if (userRoles[j] === roles[i]) {
                    return true;
                  }
                }
              }
            }

            return false;
          }
          /**
           * Decode the JWT
           */

        }, {
          key: "decodeToken",
          value: function decodeToken() {
            var token = this.storage.get('token');

            if (token) {
              var jsonPayload = atob(token.split('.')[1]);
              return JSON.parse(jsonPayload);
            }

            return null;
          }
          /**
           * Get item of JWT
           * @param item
           */

        }, {
          key: "getTokenItem",
          value: function getTokenItem(item) {
            var decodedToken = this.decodeToken();

            if (decodedToken) {
              return decodedToken[item];
            }

            return null;
          }
          /**
           *
           */

        }, {
          key: "getToken",
          value: function getToken() {
            var token = this.storage.get('token');

            if (token) {
              return token;
            }

            return null;
          }
          /**
           *
           */

        }, {
          key: "refreshToken",
          value: function refreshToken() {
            var _this11 = this;

            this.api.get('auth/refresh').subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        this.storage.set('token', res.data.access_token);
                        this.stopCheckExpirationToken();
                        this.startCheckExpirationToken();

                      case 3:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, this);
              }));
            }, function (err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        this.stopCheckExpirationToken();
                        this.storage.remove('token');
                        this.storage.remove('user');
                        this.storage.remove('acl');
                        this.toast.present('Su sesión expiró!', 'toast-error');
                        _context13.next = 7;
                        return this.router.navigateByUrl('/auth/login');

                      case 7:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13, this);
              }));
            });
          }
          /**
           *
           */

        }, {
          key: "startCheckExpirationToken",
          value: function startCheckExpirationToken() {
            var _this12 = this;

            var token = this.storage.get('token');

            if (token) {
              var exp = this.getTokenItem('exp');

              if (exp) {
                this.checkToken = setInterval(function () {
                  if (new Date(exp * 1000 - 30000) < new Date()) {
                    _this12.refreshToken();
                  }
                }, 10000);
              }
            }
          }
          /**
           *
           */

        }, {
          key: "stopCheckExpirationToken",
          value: function stopCheckExpirationToken() {
            if (this.checkToken) {
              clearInterval(this.checkToken);
              this.checkToken = null;
            }
          }
          /**
           *
           */

        }, {
          key: "getUser",
          value: function getUser() {
            var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var user = this.storage.get('user');

            if (!item) {
              return user;
            }

            for (var userKey in user) {
              if (userKey === item) {
                return user[item];
              }
            }

            return null;
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
        }, {
          type: _storage_local_service__WEBPACK_IMPORTED_MODULE_5__["StorageLocalService"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "./src/app/@shared/services/camera.service.ts":
    /*!****************************************************!*\
      !*** ./src/app/@shared/services/camera.service.ts ***!
      \****************************************************/

    /*! exports provided: CameraService */

    /***/
    function srcAppSharedServicesCameraServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraService", function () {
        return CameraService;
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


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./api.service */
      "./src/app/@shared/services/api.service.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");

      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"],
          Camera = _capacitor_core__WEBP.Camera,
          Filesystem = _capacitor_core__WEBP.Filesystem,
          Storage = _capacitor_core__WEBP.Storage;

      var CameraService = /*#__PURE__*/function () {
        function CameraService(api) {
          _classCallCheck(this, CameraService);

          this.api = api;
          this.photos = [];
          this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"];
          /**
           *
           * @param blob
           */

          this.convertBlobToBase64 = function (blob) {
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.onerror = reject;

              reader.onload = function () {
                resolve(reader.result);
              };

              reader.readAsDataURL(blob);
            });
          };
        }
        /**
         *
         * @param fileableId
         * @param fileableType
         * @param type
         */


        _createClass(CameraService, [{
          key: "addNewToGallery",
          value: function addNewToGallery() {
            var fileableId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var fileableType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var capturedPhoto;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      console.log(fileableId);
                      _context14.next = 3;
                      return Camera.getPhoto({
                        resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                        source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera,
                        quality: 100
                      });

                    case 3:
                      capturedPhoto = _context14.sent;
                      _context14.next = 6;
                      return this.savePicture(capturedPhoto, fileableId, fileableType, type);

                    case 6:
                      return _context14.abrupt("return", _context14.sent);

                    case 7:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
          /**
           *
           * @param cameraPhoto
           * @param fileableId
           * @param fileableType
           * @param type
           * @private
           */

        }, {
          key: "savePicture",
          value: function savePicture(cameraPhoto, fileableId, fileableType, type) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var response, blob, fileName;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      console.log(fileableId);
                      _context15.next = 3;
                      return fetch(cameraPhoto.webPath);

                    case 3:
                      response = _context15.sent;
                      _context15.next = 6;
                      return response.blob();

                    case 6:
                      blob = _context15.sent;
                      fileName = new Date().getTime() + '.jpeg';
                      _context15.next = 10;
                      return this.uploadFile(blob, fileName, fileableId, fileableType, type);

                    case 10:
                      return _context15.abrupt("return", _context15.sent);

                    case 11:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
          /**
           *
           * @param cameraPhoto
           * @private
           */

        }, {
          key: "readAsBase64",
          value: function readAsBase64(cameraPhoto) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var response, blob;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return fetch(cameraPhoto.webPath);

                    case 2:
                      response = _context16.sent;
                      _context16.next = 5;
                      return response.blob();

                    case 5:
                      blob = _context16.sent;
                      _context16.next = 8;
                      return this.convertBlobToBase64(blob);

                    case 8:
                      return _context16.abrupt("return", _context16.sent);

                    case 9:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
          /**
           *
           * @param file
           * @param fileName
           * @param fileableId
           * @param fileableType
           * @param type
           * @private
           */

        }, {
          key: "uploadFile",
          value: function uploadFile(file, fileName, fileableId, fileableType, type) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var endpoint, formData;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      console.log(fileableId);
                      endpoint = 'drive/upload';
                      formData = new FormData();
                      formData.append('file', file, fileName);
                      formData.append('fileable_id', fileableId);
                      formData.append('type', type);
                      formData.append('fileable_type', fileableType);
                      _context17.next = 9;
                      return this.api.post(endpoint, formData).toPromise();

                    case 9:
                      return _context17.abrupt("return", _context17.sent);

                    case 10:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }]);

        return CameraService;
      }();

      CameraService.ctorParameters = function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }];
      };

      CameraService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CameraService);
      /***/
    },

    /***/
    "./src/app/@shared/services/file-transfer.service.ts":
    /*!***********************************************************!*\
      !*** ./src/app/@shared/services/file-transfer.service.ts ***!
      \***********************************************************/

    /*! exports provided: FileTransferService */

    /***/
    function srcAppSharedServicesFileTransferServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileTransferService", function () {
        return FileTransferService;
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


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./toast.service */
      "./src/app/@shared/services/toast.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/file-opener/ngx */
      "./node_modules/@ionic-native/file-opener/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./loading.service */
      "./src/app/@shared/services/loading.service.ts");

      var FileTransferService = /*#__PURE__*/function () {
        function FileTransferService(transfer, file, fileOpener, toast, platform, loading) {
          _classCallCheck(this, FileTransferService);

          this.transfer = transfer;
          this.file = file;
          this.fileOpener = fileOpener;
          this.toast = toast;
          this.platform = platform;
          this.loading = loading;
          this.fileTransfer = this.transfer.create();
        }

        _createClass(FileTransferService, [{
          key: "upload",
          value: function upload() {
            var options = {
              fileKey: 'file',
              fileName: 'name.jpg',
              headers: {}
            };
            this.fileTransfer.upload('<file path>', '<api endpoint>', options).then(function (data) {// success
            }, function (err) {// error
            });
          }
        }, {
          key: "download",
          value: function download(url, fileName) {
            var _this13 = this;

            if (url && fileName) {
              if (this.platform.is('mobile')) {
                this.loading.present();
                var ROOT_DIRECTORY = this.platform.is('ios') ? this.file.documentsDirectory : this.file.externalRootDirectory + '/Download/';
                this.fileTransfer.download(url, ROOT_DIRECTORY + fileName).then(function (entry) {
                  _this13.loading.hide();

                  console.log('download complete: ' + entry.toURL());

                  _this13.toast.present('Archivo descargado con éxito!');

                  _this13.fileOpener.open(ROOT_DIRECTORY + '/' + fileName, _this13.getMimeType(fileName)).then(function () {
                    return console.log('File is opened');
                  })["catch"](function (e) {
                    return console.log('Error opening file', e);
                  });
                }, function (error) {
                  _this13.loading.hide(); // Controlamos el error aquí.


                  console.error(JSON.stringify(error));

                  _this13.toast.present(error, 'toast-danger');
                });
              }

              if (this.platform.is('desktop')) {
                console.log(this.getMimeType(url));
                window.open(url, "_blank");
              }
            }
          }
        }, {
          key: "getMimeType",
          value: function getMimeType(file) {
            var extension = file.substr(file.lastIndexOf('.') + 1);
            var types = {
              pdf: 'application/pdf',
              png: 'image/png',
              jpg: 'image/jpeg',
              jpeg: 'image/jpeg',
              json: 'application/json',
              zip: 'application/zip',
              xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
              xls: 'application/vnd.ms-excel',
              webp: 'image/webp',
              webm: 'video/webm',
              txt: 'text/plain',
              mpeg: 'video/mpeg',
              mp3: 'audio/mpeg',
              mp4: 'video/mp4'
            };
            return types[extension] ? types[extension] : 'text/plain';
          }
        }]);

        return FileTransferService;
      }();

      FileTransferService.ctorParameters = function () {
        return [{
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__["FileTransfer"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"]
        }, {
          type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__["FileOpener"]
        }, {
          type: _toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
        }];
      };

      FileTransferService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FileTransferService);
      /***/
    },

    /***/
    "./src/app/@shared/services/file-upload.service.ts":
    /*!*********************************************************!*\
      !*** ./src/app/@shared/services/file-upload.service.ts ***!
      \*********************************************************/

    /*! exports provided: FileUploadService */

    /***/
    function srcAppSharedServicesFileUploadServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploadService", function () {
        return FileUploadService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FileUploadService = function FileUploadService() {
        _classCallCheck(this, FileUploadService);
      };

      FileUploadService.ctorParameters = function () {
        return [];
      };

      FileUploadService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FileUploadService);
      /***/
    },

    /***/
    "./src/app/@shared/services/geo-location.service.ts":
    /*!**********************************************************!*\
      !*** ./src/app/@shared/services/geo-location.service.ts ***!
      \**********************************************************/

    /*! exports provided: GeoLocationService */

    /***/
    function srcAppSharedServicesGeoLocationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeoLocationService", function () {
        return GeoLocationService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var GeoLocationService = /*#__PURE__*/function () {
        function GeoLocationService() {
          _classCallCheck(this, GeoLocationService);
        }

        _createClass(GeoLocationService, [{
          key: "getPosition",
          value: function getPosition() {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
              navigator.geolocation.watchPosition(function (pos) {
                observer.next(pos);
              }), function () {
                console.log('Position is not available');
              }, {
                enableHighAccuracy: true
              };
            });
          }
        }]);

        return GeoLocationService;
      }();

      GeoLocationService.ctorParameters = function () {
        return [];
      };

      GeoLocationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], GeoLocationService);
      /***/
    },

    /***/
    "./src/app/@shared/services/loading.service.ts":
    /*!*****************************************************!*\
      !*** ./src/app/@shared/services/loading.service.ts ***!
      \*****************************************************/

    /*! exports provided: LoadingService */

    /***/
    function srcAppSharedServicesLoadingServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingService", function () {
        return LoadingService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var LoadingService = /*#__PURE__*/function () {
        function LoadingService(loadingController) {
          var _this14 = this;

          _classCallCheck(this, LoadingService);

          this.loadingController = loadingController;
          this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
          this.loading = this.isLoading.asObservable();
          this.loadingInstance = null;
          this.isLoading.subscribe(function (data) {
            if (data) {
              // console.log('isLoading', data);
              _this14.present();
            } else {
              // console.log('isLoading', data);
              _this14.hide();
            }
          });
        }

        _createClass(LoadingService, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "present",
          value: function present() {
            var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Cargando...';
            var cssClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var loading;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.loadingController.create({
                        cssClass: cssClass,
                        message: message,
                        duration: 2000
                      });

                    case 2:
                      loading = _context18.sent;
                      _context18.next = 5;
                      return loading.present();

                    case 5:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "hide",
          value: function hide() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var _this15 = this;

              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.loadingController.getTop().then(function (loadingPresent) {
                        return loadingPresent ? _this15.loadingController.dismiss(true) : null;
                      });

                    case 2:
                      return _context19.abrupt("return", _context19.sent);

                    case 3:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }]);

        return LoadingService;
      }();

      LoadingService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }];
      };

      LoadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LoadingService);
      /***/
    },

    /***/
    "./src/app/@shared/services/media.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/@shared/services/media.service.ts ***!
      \***************************************************/

    /*! exports provided: MediaBreakpoint, MatchOperator, Media, MediaService */

    /***/
    function srcAppSharedServicesMediaServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaBreakpoint", function () {
        return MediaBreakpoint;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatchOperator", function () {
        return MatchOperator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Media", function () {
        return Media;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaService", function () {
        return MediaService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var MediaBreakpoint = function MediaBreakpoint() {
        _classCallCheck(this, MediaBreakpoint);
      };

      var MatchOperator = function MatchOperator() {
        _classCallCheck(this, MatchOperator);
      };

      var Media = function Media() {
        _classCallCheck(this, Media);
      };

      var MediaService = /*#__PURE__*/function () {
        function MediaService(platformId) {
          _classCallCheck(this, MediaService);

          // based on nodes_modules/materialize-css/sass/components/_variable.scss
          this.mediaBreakpoints = [{
            alias: 'xs',
            minWidth: 0,
            maxWidth: 576
          }, {
            alias: 'sm',
            minWidth: 577,
            maxWidth: 768
          }, {
            alias: 'md',
            minWidth: 769,
            maxWidth: 992
          }, {
            alias: 'lg',
            minWidth: 993,
            maxWidth: 1200
          }, {
            alias: 'xl',
            minWidth: 1201,
            maxWidth: Number.MAX_VALUE
          }];
          this.matchOperators = [{
            operator: 'gt',
            match: function match(breakpoint) {
              return window.innerWidth > breakpoint.maxWidth;
            }
          }, {
            operator: 'lt',
            match: function match(breakpoint) {
              return window.innerWidth < breakpoint.minWidth;
            }
          }, {
            operator: null,
            match: function match(breakpoint) {
              return window.innerWidth >= breakpoint.minWidth && window.innerWidth <= breakpoint.maxWidth;
            }
          }];

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
            this.media = this.registerWindowResizeListener();
          } else {
            this.media = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create();
          }
        }

        _createClass(MediaService, [{
          key: "isActive",
          value: function isActive(breakpoint) {
            var _this16 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (subscriber) {
              _this16.media.subscribe(function (media) {
                try {
                  subscriber.next(_this16.isActiveBreakpoint(breakpoint));
                } catch (error) {
                  subscriber.error(error);
                }
              });
            });
          }
        }, {
          key: "registerWindowResizeListener",
          value: function registerWindowResizeListener() {
            var _this17 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
              return _this17.getWindowMedia();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(this.getWindowMedia()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["publishReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["refCount"])());
          }
        }, {
          key: "getWindowMedia",
          value: function getWindowMedia() {
            return {
              alias: this.mediaBreakpoints.find(function (breakpoint) {
                return window.innerWidth <= breakpoint.maxWidth;
              }).alias,
              windowHeight: window.innerHeight,
              windowWidth: window.innerWidth
            };
          }
        }, {
          key: "isActiveBreakpoint",
          value: function isActiveBreakpoint(breakpoint) {
            var matchOperator;
            var mediaBreakpoint;

            if (breakpoint) {
              var fragments = breakpoint.split('-');

              if (fragments.length === 1) {
                matchOperator = this.matchOperators.find(function (x) {
                  return x.operator === null;
                });
                mediaBreakpoint = this.mediaBreakpoints.find(function (x) {
                  return x.alias === fragments[0];
                });
              } else if (fragments.length === 2) {
                matchOperator = this.matchOperators.find(function (x) {
                  return x.operator === fragments[0];
                });
                mediaBreakpoint = this.mediaBreakpoints.find(function (x) {
                  return x.alias === fragments[1];
                });
              }
            }

            if (!mediaBreakpoint || !matchOperator) {
              throw Error("MediaService.isActive parameter is invalid: '".concat(breakpoint, "' is not a recognized breakpoint."));
            }

            return matchOperator.match(mediaBreakpoint);
          }
        }]);

        return MediaService;
      }();

      MediaService.ctorParameters = function () {
        return [{
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
          }]
        }];
      };

      MediaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], MediaService);
      /***/
    },

    /***/
    "./src/app/@shared/services/navigation.service.ts":
    /*!********************************************************!*\
      !*** ./src/app/@shared/services/navigation.service.ts ***!
      \********************************************************/

    /*! exports provided: NavigationService */

    /***/
    function srcAppSharedServicesNavigationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
        return NavigationService;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var NavigationService = /*#__PURE__*/function () {
        function NavigationService(router, location) {
          var _this18 = this;

          _classCallCheck(this, NavigationService);

          this.router = router;
          this.location = location;
          this.history = [];
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
              _this18.history.push(event.urlAfterRedirects);
            }
          });
        }

        _createClass(NavigationService, [{
          key: "back",
          value: function back() {
            this.history.pop();

            if (this.history.length > 0) {
              this.location.back();
            } else {
              this.router.navigateByUrl('/');
            }
          }
        }]);

        return NavigationService;
      }();

      NavigationService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
        }];
      };

      NavigationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], NavigationService);
      /***/
    },

    /***/
    "./src/app/@shared/services/push-notifications.service.ts":
    /*!****************************************************************!*\
      !*** ./src/app/@shared/services/push-notifications.service.ts ***!
      \****************************************************************/

    /*! exports provided: PushNotificationService */

    /***/
    function srcAppSharedServicesPushNotificationsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PushNotificationService", function () {
        return PushNotificationService;
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


      var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth.service */
      "./src/app/@shared/services/auth.service.ts");

      var PushNotificationService = /*#__PURE__*/function () {
        function PushNotificationService(http, auth) {
          _classCallCheck(this, PushNotificationService);

          this.http = http;
          this.auth = auth;
        }

        _createClass(PushNotificationService, [{
          key: "addPushSubscriber",
          value: function addPushSubscriber(sub) {
            var key = sub.getKey('p256dh');
            var token = sub.getKey('auth');
            var contentEncoding = (PushManager.supportedContentEncodings || ['aesgcm'])[0];
            var data = {
              endpoint: sub.endpoint,
              publicKey: key ? btoa(String.fromCharCode.apply(null, new Uint8Array(key))) : null,
              authToken: token ? btoa(String.fromCharCode.apply(null, new Uint8Array(token))) : null,
              contentEncoding: contentEncoding
            };
            return this.http.post('/api/subscriptions', data).toPromise();
          }
        }, {
          key: "send",
          value: function send() {
            this.http.post('/api/notifications', null).subscribe(function (res) {
              console.log(res);
            });
          }
          /**
           * https://github.com/Minishlink/physbook/blob/02a0d5d7ca0d5d2cc6d308a3a9b81244c63b3f14/app/Resources/public/js/app.js#L177
           *
           * @param  {String} base64String
           * @return {Uint8Array}
           */

        }, {
          key: "urlBase64ToUint8Array",
          value: function urlBase64ToUint8Array(base64String) {
            var padding = '='.repeat((4 - base64String.length % 4) % 4);
            var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
            var rawData = window.atob(base64);
            var outputArray = new Uint8Array(rawData.length);

            for (var i = 0; i < rawData.length; ++i) {
              outputArray[i] = rawData.charCodeAt(i);
            }

            return outputArray;
          }
        }]);

        return PushNotificationService;
      }();

      PushNotificationService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      };

      PushNotificationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PushNotificationService);
      /***/
    },

    /***/
    "./src/app/@shared/services/pwa.service.ts":
    /*!*************************************************!*\
      !*** ./src/app/@shared/services/pwa.service.ts ***!
      \*************************************************/

    /*! exports provided: PwaService */

    /***/
    function srcAppSharedServicesPwaServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PwaService", function () {
        return PwaService;
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


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/service-worker */
      "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");

      var PwaService = /*#__PURE__*/function () {
        function PwaService(swUpdate) {
          var _this19 = this;

          _classCallCheck(this, PwaService);

          this.swUpdate = swUpdate;
          this.promptEvent = null;
          swUpdate.available.subscribe(function (event) {
            if (_this19.askUserToUpdate()) {
              window.location.reload();
            } else {
              window.location.reload();
            }
          });
          window.addEventListener('beforeinstallprompt', function (event) {
            _this19.promptEvent = event;
          });
        }

        _createClass(PwaService, [{
          key: "askUserToUpdate",
          value: function askUserToUpdate() {
            return confirm('Se actualizara a una nueva versión.');
          }
        }]);

        return PwaService;
      }();

      PwaService.ctorParameters = function () {
        return [{
          type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"]
        }];
      };

      PwaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PwaService);
      /***/
    },

    /***/
    "./src/app/@shared/services/settings.service.ts":
    /*!******************************************************!*\
      !*** ./src/app/@shared/services/settings.service.ts ***!
      \******************************************************/

    /*! exports provided: SettingsService */

    /***/
    function srcAppSharedServicesSettingsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsService", function () {
        return SettingsService;
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


      var _storage_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./storage-local.service */
      "./src/app/@shared/services/storage-local.service.ts");

      var SettingsService = /*#__PURE__*/function () {
        function SettingsService(storage) {
          _classCallCheck(this, SettingsService);

          this.storage = storage;
        }

        _createClass(SettingsService, [{
          key: "getGroup",
          value: function getGroup(groupCode) {
            var settings = this.storage.get('settings');

            for (var i = 0; i < settings.length; i++) {
              if (settings[i].code == groupCode) {
                return settings[i];
              }
            }

            return null;
          }
        }, {
          key: "getSetting",
          value: function getSetting(settingCode) {
            var settings = this.storage.get('settings');

            for (var i = 0; i < settings.length; i++) {
              for (var j = 0; j < settings[i].settings.length; j++) {
                if (settings[i].settings[j].code == settingCode) {
                  return settings[i].settings[j].value;
                }
              }
            }

            return null;
          }
        }]);

        return SettingsService;
      }();

      SettingsService.ctorParameters = function () {
        return [{
          type: _storage_local_service__WEBPACK_IMPORTED_MODULE_2__["StorageLocalService"]
        }];
      };

      SettingsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SettingsService);
      /***/
    },

    /***/
    "./src/app/@shared/services/split-panel.service.ts":
    /*!*********************************************************!*\
      !*** ./src/app/@shared/services/split-panel.service.ts ***!
      \*********************************************************/

    /*! exports provided: SplitPanelService */

    /***/
    function srcAppSharedServicesSplitPanelServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplitPanelService", function () {
        return SplitPanelService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var SplitPanelService = function SplitPanelService() {
        _classCallCheck(this, SplitPanelService);

        this.show = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.show.subscribe(function (res) {
          console.log('Show split panel ' + res);
        });
      };

      SplitPanelService.ctorParameters = function () {
        return [];
      };

      SplitPanelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SplitPanelService);
      /***/
    },

    /***/
    "./src/app/@shared/services/startup.service.ts":
    /*!*****************************************************!*\
      !*** ./src/app/@shared/services/startup.service.ts ***!
      \*****************************************************/

    /*! exports provided: StartupService */

    /***/
    function srcAppSharedServicesStartupServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StartupService", function () {
        return StartupService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _storage_local_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./storage-local.service */
      "./src/app/@shared/services/storage-local.service.ts");

      var StartupService = /*#__PURE__*/function () {
        function StartupService(httpClient, storageLocal) {
          _classCallCheck(this, StartupService);

          this.httpClient = httpClient;
          this.storageLocal = storageLocal;
        }

        _createClass(StartupService, [{
          key: "load",
          value: function load() {
            var _this20 = this;

            return new Promise(function (resolve) {
              _this20.storageLocal.set('subdomain', '0001');

              var subdomain = _this20.storageLocal.get('subdomain');

              Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["zip"])(_this20.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].serverUrl + '/api/setting-groups?all=true')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (res) {
                console.warn("StartupService.load: Network request failed", res);
                resolve();
                return [];
              })).subscribe(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 1),
                    settings = _ref2[0];

                _this20.storageLocal.set('settings', settings.data);
              }, function () {}, function () {
                resolve();
              });
            });
          }
        }]);

        return StartupService;
      }();

      StartupService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _storage_local_service__WEBPACK_IMPORTED_MODULE_6__["StorageLocalService"]
        }];
      };

      StartupService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], StartupService);
      /***/
    },

    /***/
    "./src/app/@shared/services/storage-local.service.ts":
    /*!***********************************************************!*\
      !*** ./src/app/@shared/services/storage-local.service.ts ***!
      \***********************************************************/

    /*! exports provided: StorageLocalService */

    /***/
    function srcAppSharedServicesStorageLocalServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageLocalService", function () {
        return StorageLocalService;
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


      var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./storage.service */
      "./src/app/@shared/services/storage.service.ts");
      /**
       * Local storage service
       * used for persist application data in observable key value pair
       */


      var StorageLocalService = /*#__PURE__*/function (_storage_service__WEB) {
        _inherits(StorageLocalService, _storage_service__WEB);

        var _super = _createSuper(StorageLocalService);

        /**
         * Constructor with service injection
         * @param window
         */
        function StorageLocalService(window) {
          var _this21;

          _classCallCheck(this, StorageLocalService);

          _this21 = _super.call(this, window.localStorage);
          _this21.window = window;
          return _this21;
        }

        return StorageLocalService;
      }(_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]);

      StorageLocalService.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: ['WINDOW']
          }]
        }];
      };

      StorageLocalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], StorageLocalService);
      /***/
    },

    /***/
    "./src/app/@shared/services/storage-session.service.ts":
    /*!*************************************************************!*\
      !*** ./src/app/@shared/services/storage-session.service.ts ***!
      \*************************************************************/

    /*! exports provided: StorageSessionService */

    /***/
    function srcAppSharedServicesStorageSessionServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageSessionService", function () {
        return StorageSessionService;
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


      var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./storage.service */
      "./src/app/@shared/services/storage.service.ts");
      /**
       * Session storage service
       * used for persist application data in observable key value pair
       */


      var StorageSessionService = /*#__PURE__*/function (_storage_service__WEB2) {
        _inherits(StorageSessionService, _storage_service__WEB2);

        var _super2 = _createSuper(StorageSessionService);

        /**
         * Constructor with service injection
         * @param window
         */
        function StorageSessionService(window) {
          var _this22;

          _classCallCheck(this, StorageSessionService);

          _this22 = _super2.call(this, window.sessionStorage);
          _this22.window = window;
          return _this22;
        }

        return StorageSessionService;
      }(_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]);

      StorageSessionService.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: ['WINDOW']
          }]
        }];
      };

      StorageSessionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], StorageSessionService);
      /***/
    },

    /***/
    "./src/app/@shared/services/storage.service.ts":
    /*!*****************************************************!*\
      !*** ./src/app/@shared/services/storage.service.ts ***!
      \*****************************************************/

    /*! exports provided: StorageService */

    /***/
    function srcAppSharedServicesStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! crypto-js */
      "./node_modules/crypto-js/index.js");
      /* harmony import */


      var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__); // declare var CryptoJS: any;

      /**
       * Storage service
       * used for persist application data in observable key value pair
       */


      var StorageService = /*#__PURE__*/function () {
        /**
         * Constructor with service injection
         * @param storage
         */
        function StorageService(storage) {
          _classCallCheck(this, StorageService);

          this.keySize = 256;
          this.ivSize = 128;
          this.iterations = 100;
          this.storage = storage;
          this.subjects = new Map();
        }

        _createClass(StorageService, [{
          key: "encrypt",
          value: function encrypt(data) {
            return crypto_js__WEBPACK_IMPORTED_MODULE_4__["AES"].encrypt(JSON.stringify(data), _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].secretKey).toString();
          }
        }, {
          key: "decrypt",
          value: function decrypt(data) {
            var bytes = crypto_js__WEBPACK_IMPORTED_MODULE_4__["AES"].decrypt(data, _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].secretKey);

            if (bytes.toString()) {
              return JSON.parse(bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_4__["enc"].Utf8));
            }

            return data;
          }
        }, {
          key: "getStorage",
          value: function getStorage() {
            var s = [];

            for (var i = 0; i < this.storage.length; i++) {
              s.push({
                key: atob(this.storage.key(i)),
                value: JSON.parse(this.decrypt(this.storage.getItem(this.storage.key(i))))
              });
            }

            return s;
          }
          /**
           * watch data of given key
           * @param key
           * @param defaultValue
           */

        }, {
          key: "watch",
          value: function watch(key) {
            key = btoa(key);

            if (!this.subjects.has(key)) {
              this.subjects.set(key, new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null));
            }

            if (!this.storage.getItem(key)) {
              return undefined;
            }

            var value = this.decrypt(this.storage.getItem(key));
            var item = JSON.parse(value);

            if (item === "undefined") {
              item = undefined;
            } else {
              item = item;
            }

            this.subjects.get(key).next(item);
            return this.subjects.get(key).asObservable();
          }
          /**
           * get data of given key
           * @param key
           */

        }, {
          key: "get",
          value: function get(key) {
            key = btoa(key);

            if (!this.storage.getItem(key)) {
              return undefined;
            }

            var value = this.decrypt(this.storage.getItem(key));
            var item = JSON.parse(value);

            if (item === "undefined") {
              item = undefined;
            } else {
              item = item;
            }

            return item;
          }
          /**
           * set value on given key
           * @param key
           * @param value
           */

        }, {
          key: "set",
          value: function set(key, value) {
            key = btoa(key);
            value = JSON.stringify(value);
            this.storage.setItem(key, this.encrypt(value));

            if (!this.subjects.has(key)) {
              this.subjects.set(key, new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](value));
            } else {
              this.subjects.get(key).next(value);
            }
          }
          /**
           * remove given key
           * @param key
           */

        }, {
          key: "remove",
          value: function remove(key) {
            key = btoa(key);

            if (this.subjects.has(key)) {
              this.subjects.get(key).complete();
              this.subjects["delete"](key);
            }

            this.storage.removeItem(key);
          }
          /**
           * clear all available keys
           */

        }, {
          key: "clear",
          value: function clear() {
            this.subjects.clear();
            this.storage.clear();
          }
        }]);

        return StorageService;
      }();

      StorageService.ctorParameters = function () {
        return [{
          type: Storage
        }];
      };

      StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], StorageService);
      /***/
    },

    /***/
    "./src/app/@shared/services/toast.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/@shared/services/toast.service.ts ***!
      \***************************************************/

    /*! exports provided: ToastService */

    /***/
    function srcAppSharedServicesToastServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastService", function () {
        return ToastService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ToastService = /*#__PURE__*/function () {
        function ToastService(toastController) {
          _classCallCheck(this, ToastService);

          this.toastController = toastController;
        }

        _createClass(ToastService, [{
          key: "present",
          value: function present(message) {
            var cssClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'top';
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var toast;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return this.toastController.create({
                        message: message,
                        position: position,
                        cssClass: cssClass,
                        duration: 10000,
                        buttons: [{
                          text: null,
                          icon: 'close-outline',
                          role: 'cancel',
                          side: 'start',
                          handler: function handler() {
                            console.log('Toast dismiss');
                          }
                        }]
                      });

                    case 2:
                      toast = _context20.sent;
                      _context20.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }]);

        return ToastService;
      }();

      ToastService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ToastService);
      /***/
    },

    /***/
    "./src/app/@shared/shared.module.ts":
    /*!******************************************!*\
      !*** ./src/app/@shared/shared.module.ts ***!
      \******************************************/

    /*! exports provided: SharedModule */

    /***/
    function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/main-header/main-header.component */
      "./src/app/@shared/components/main-header/main-header.component.ts");
      /* harmony import */


      var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/barcode-scanner/ngx */
      "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ionic-selectable */
      "./node_modules/ionic-selectable/__ivy_ngcc__/esm2015/ionic-selectable.min.js");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/crop/ngx */
      "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _services_camera_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/camera.service */
      "./src/app/@shared/services/camera.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./services/api.service */
      "./src/app/@shared/services/api.service.ts");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./services/auth.service */
      "./src/app/@shared/services/auth.service.ts");
      /* harmony import */


      var _services_geo_location_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./services/geo-location.service */
      "./src/app/@shared/services/geo-location.service.ts");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./services/loading.service */
      "./src/app/@shared/services/loading.service.ts");
      /* harmony import */


      var _services_media_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./services/media.service */
      "./src/app/@shared/services/media.service.ts");
      /* harmony import */


      var _services_push_notifications_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./services/push-notifications.service */
      "./src/app/@shared/services/push-notifications.service.ts");
      /* harmony import */


      var _services_pwa_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./services/pwa.service */
      "./src/app/@shared/services/pwa.service.ts");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./services/storage.service */
      "./src/app/@shared/services/storage.service.ts");
      /* harmony import */


      var _services_storage_local_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./services/storage-local.service */
      "./src/app/@shared/services/storage-local.service.ts");
      /* harmony import */


      var _services_storage_session_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./services/storage-session.service */
      "./src/app/@shared/services/storage-session.service.ts");
      /* harmony import */


      var _interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./interceptors/loading.interceptor */
      "./src/app/@shared/interceptors/loading.interceptor.ts");
      /* harmony import */


      var _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./components/popover/popover.component */
      "./src/app/@shared/components/popover/popover.component.ts");
      /* harmony import */


      var _services_alert_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./services/alert.service */
      "./src/app/@shared/services/alert.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_toast_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./services/toast.service */
      "./src/app/@shared/services/toast.service.ts");
      /* harmony import */


      var ngx_summernote__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ngx-summernote */
      "./node_modules/ngx-summernote/__ivy_ngcc__/fesm2015/ngx-summernote.js");
      /* harmony import */


      var _pipes_strip_html_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./pipes/strip-html.pipe */
      "./src/app/@shared/pipes/strip-html.pipe.ts");
      /* harmony import */


      var _services_file_transfer_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./services/file-transfer.service */
      "./src/app/@shared/services/file-transfer.service.ts");
      /* harmony import */


      var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @ionic-native/file-opener/ngx */
      "./node_modules/@ionic-native/file-opener/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @zxing/ngx-scanner */
      "./node_modules/@zxing/ngx-scanner/fesm2015/zxing-ngx-scanner.js");
      /* harmony import */


      var _services_file_upload_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./services/file-upload.service */
      "./src/app/@shared/services/file-upload.service.ts");
      /* harmony import */


      var _services_navigation_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./services/navigation.service */
      "./src/app/@shared/services/navigation.service.ts");
      /* harmony import */


      var _pipes_status_pipe__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./pipes/status.pipe */
      "./src/app/@shared/pipes/status.pipe.ts");
      /* harmony import */


      var _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./pipes/date-format.pipe */
      "./src/app/@shared/pipes/date-format.pipe.ts");
      /* harmony import */


      var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! angular2-signaturepad */
      "./node_modules/angular2-signaturepad/__ivy_ngcc__/index.js");
      /* harmony import */


      var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(angular2_signaturepad__WEBPACK_IMPORTED_MODULE_39__);
      /* harmony import */


      var _pipes_zero_leading_pipe__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./pipes/zero-leading.pipe */
      "./src/app/@shared/pipes/zero-leading.pipe.ts");
      /* harmony import */


      var _pipes_get_parameter_pipe__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./pipes/get-parameter.pipe */
      "./src/app/@shared/pipes/get-parameter.pipe.ts");
      /* harmony import */


      var ng2_validation__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ng2-validation */
      "./node_modules/ng2-validation/__ivy_ngcc__/dist/index.js");
      /* harmony import */


      var ng2_validation__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_42__);
      /* harmony import */


      var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ionic4-auto-complete */
      "./node_modules/ionic4-auto-complete/__ivy_ngcc__/fesm2015/ionic4-auto-complete.js");
      /* harmony import */


      var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ngx-ionic-image-viewer */
      "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js");
      /* harmony import */


      var _services_settings_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./services/settings.service */
      "./src/app/@shared/services/settings.service.ts");
      /* harmony import */


      var _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./interceptors/token.interceptor */
      "./src/app/@shared/interceptors/token.interceptor.ts");
      /* harmony import */


      var _interceptors_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ./interceptors/api-prefix.interceptor */
      "./src/app/@shared/interceptors/api-prefix.interceptor.ts");
      /* harmony import */


      var _interceptors_subdomain_interceptor__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ./interceptors/subdomain.interceptor */
      "./src/app/@shared/interceptors/subdomain.interceptor.ts");
      /* harmony import */


      var _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ./pipes/time-format.pipe */
      "./src/app/@shared/pipes/time-format.pipe.ts");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ion2-calendar */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/index.js");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_50__);
      /* harmony import */


      var _pipes_truencate_pipe__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ./pipes/truencate.pipe */
      "./src/app/@shared/pipes/truencate.pipe.ts");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_4__["MainHeaderComponent"], _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_25__["PopoverComponent"], _pipes_strip_html_pipe__WEBPACK_IMPORTED_MODULE_31__["StripHtmlPipe"], _pipes_status_pipe__WEBPACK_IMPORTED_MODULE_37__["StatusPipe"], _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_38__["DateFormatPipe"], _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_49__["TimeFormatPipe"], _pipes_zero_leading_pipe__WEBPACK_IMPORTED_MODULE_40__["ZeroLeadingPipe"], _pipes_get_parameter_pipe__WEBPACK_IMPORTED_MODULE_41__["GetParameterPipe"], _pipes_truencate_pipe__WEBPACK_IMPORTED_MODULE_51__["TruncatePipe"]],
        entryComponents: [_components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_4__["MainHeaderComponent"], _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_25__["PopoverComponent"]],
        exports: [_components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_4__["MainHeaderComponent"], ionic_selectable__WEBPACK_IMPORTED_MODULE_6__["IonicSelectableModule"], ngx_summernote__WEBPACK_IMPORTED_MODULE_30__["NgxSummernoteModule"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_34__["ZXingScannerModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_39__["SignaturePadModule"], ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_43__["AutoCompleteModule"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_44__["NgxIonicImageViewerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"], ng2_validation__WEBPACK_IMPORTED_MODULE_42__["CustomFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ReactiveFormsModule"], _pipes_strip_html_pipe__WEBPACK_IMPORTED_MODULE_31__["StripHtmlPipe"], _pipes_status_pipe__WEBPACK_IMPORTED_MODULE_37__["StatusPipe"], _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_38__["DateFormatPipe"], _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_49__["TimeFormatPipe"], _pipes_zero_leading_pipe__WEBPACK_IMPORTED_MODULE_40__["ZeroLeadingPipe"], _pipes_get_parameter_pipe__WEBPACK_IMPORTED_MODULE_41__["GetParameterPipe"], ion2_calendar__WEBPACK_IMPORTED_MODULE_50__["CalendarModule"], _pipes_truencate_pipe__WEBPACK_IMPORTED_MODULE_51__["TruncatePipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
        providers: [_services_camera_service__WEBPACK_IMPORTED_MODULE_10__["CameraService"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_8__["Crop"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_12__["HTTP"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_13__["FileTransfer"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_33__["FileOpener"], _services_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _services_geo_location_service__WEBPACK_IMPORTED_MODULE_16__["GeoLocationService"], _services_loading_service__WEBPACK_IMPORTED_MODULE_17__["LoadingService"], _services_media_service__WEBPACK_IMPORTED_MODULE_18__["MediaService"], _services_push_notifications_service__WEBPACK_IMPORTED_MODULE_19__["PushNotificationService"], _services_pwa_service__WEBPACK_IMPORTED_MODULE_20__["PwaService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_21__["StorageService"], _services_storage_local_service__WEBPACK_IMPORTED_MODULE_22__["StorageLocalService"], _services_storage_session_service__WEBPACK_IMPORTED_MODULE_23__["StorageSessionService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_26__["AlertService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_29__["ToastService"], _services_file_transfer_service__WEBPACK_IMPORTED_MODULE_32__["FileTransferService"], _services_file_upload_service__WEBPACK_IMPORTED_MODULE_35__["FileUploadService"], _services_navigation_service__WEBPACK_IMPORTED_MODULE_36__["NavigationService"], _services_settings_service__WEBPACK_IMPORTED_MODULE_45__["SettingsService"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_subdomain_interceptor__WEBPACK_IMPORTED_MODULE_48__["SubdomainInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_47__["ApiPrefixInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_46__["TokenInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_24__["LoadingInterceptor"],
          multi: true
        }, _angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"], _pipes_zero_leading_pipe__WEBPACK_IMPORTED_MODULE_40__["ZeroLeadingPipe"], _pipes_get_parameter_pipe__WEBPACK_IMPORTED_MODULE_41__["GetParameterPipe"], _pipes_truencate_pipe__WEBPACK_IMPORTED_MODULE_51__["TruncatePipe"]]
      })], SharedModule);
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./@shared/guards/auth.guard */
      "./src/app/@shared/guards/auth.guard.ts");

      var routes = [{
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
      }, {
        path: 'folder/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | folder-folder-module */
          [__webpack_require__.e("default~board-board-module~folder-folder-module"), __webpack_require__.e("folder-folder-module")]).then(__webpack_require__.bind(null,
          /*! ./folder/folder.module */
          "./src/app/folder/folder.module.ts")).then(function (m) {
            return m.FolderPageModule;
          });
        }
      }, {
        path: 'barcode-scanner',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | barcode-scanner-barcode-scanner-module */
          "barcode-scanner-barcode-scanner-module").then(__webpack_require__.bind(null,
          /*! ./barcode-scanner/barcode-scanner.module */
          "./src/app/barcode-scanner/barcode-scanner.module.ts")).then(function (m) {
            return m.BarcodeScannerPageModule;
          });
        }
      }, {
        path: 'landing',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | landing-landing-module */
          "landing-landing-module").then(__webpack_require__.bind(null,
          /*! ./landing/landing.module */
          "./src/app/landing/landing.module.ts")).then(function (m) {
            return m.LandingPageModule;
          });
        }
      }, {
        path: 'camera',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | camera-camera-module */
          "camera-camera-module").then(__webpack_require__.bind(null,
          /*! ./camera/camera.module */
          "./src/app/camera/camera.module.ts")).then(function (m) {
            return m.CameraPageModule;
          });
        }
      }, {
        path: 'download',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | download-download-module */
          "download-download-module").then(__webpack_require__.bind(null,
          /*! ./download/download.module */
          "./src/app/download/download.module.ts")).then(function (m) {
            return m.DownloadPageModule;
          });
        }
      }, {
        path: 'users',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | users-users-module */
          [__webpack_require__.e("common"), __webpack_require__.e("users-users-module")]).then(__webpack_require__.bind(null,
          /*! ./users/users.module */
          "./src/app/users/users.module.ts")).then(function (m) {
            return m.UsersPageModule;
          });
        },
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          logged: true
        }
      }, {
        path: 'board',
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        data: {
          title: 'CARTELERA'
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | board-board-module */
          "default~board-board-module~folder-folder-module").then(__webpack_require__.bind(null,
          /*! ./board/board.module */
          "./src/app/board/board.module.ts")).then(function (m) {
            return m.BoardModule;
          });
        }
      }, // generated section
      {
        path: 'user-profiles',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'PERFILES DE USUARIOS',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | user-profiles-user-profiles-module */
          "user-profiles-user-profiles-module").then(__webpack_require__.bind(null,
          /*! ./user-profiles/user-profiles.module */
          "./src/app/user-profiles/user-profiles.module.ts")).then(function (m) {
            return m.UserProfilesPageModule;
          });
        }
      }, {
        path: 'syst-cities',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'CIUDADES',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | syst-cities-syst-cities-module */
          "syst-cities-syst-cities-module").then(__webpack_require__.bind(null,
          /*! ./syst-cities/syst-cities.module */
          "./src/app/syst-cities/syst-cities.module.ts")).then(function (m) {
            return m.SystCitiesPageModule;
          });
        }
      }, {
        path: 'syst-regions',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'DEPARTAMENTOS',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | syst-regions-syst-regions-module */
          "syst-regions-syst-regions-module").then(__webpack_require__.bind(null,
          /*! ./syst-regions/syst-regions.module */
          "./src/app/syst-regions/syst-regions.module.ts")).then(function (m) {
            return m.SystRegionsPageModule;
          });
        }
      }, {
        path: 'syst-countries',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'PAISES',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | syst-countries-syst-countries-module */
          "syst-countries-syst-countries-module").then(__webpack_require__.bind(null,
          /*! ./syst-countries/syst-countries.module */
          "./src/app/syst-countries/syst-countries.module.ts")).then(function (m) {
            return m.SystCountriesPageModule;
          });
        }
      }, {
        path: 'companies',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'EMPRESAS',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | companies-companies-module */
          "companies-companies-module").then(__webpack_require__.bind(null,
          /*! ./companies/companies.module */
          "./src/app/companies/companies.module.ts")).then(function (m) {
            return m.CompaniesPageModule;
          });
        }
      }, {
        path: 'comp-phones',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'TELÉFONOS DE EMPRESAS',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | comp-phones-comp-phones-module */
          "comp-phones-comp-phones-module").then(__webpack_require__.bind(null,
          /*! ./comp-phones/comp-phones.module */
          "./src/app/comp-phones/comp-phones.module.ts")).then(function (m) {
            return m.CompPhonesPageModule;
          });
        }
      }, {
        path: 'comp-addresses',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'EMPRESAS DIRECCIONES',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | comp-addresses-comp-addresses-module */
          "comp-addresses-comp-addresses-module").then(__webpack_require__.bind(null,
          /*! ./comp-addresses/comp-addresses.module */
          "./src/app/comp-addresses/comp-addresses.module.ts")).then(function (m) {
            return m.CompAddressesPageModule;
          });
        }
      }, {
        path: 'comp-contacts',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'EMPRESAS CONTACTOS',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | comp-contacts-comp-contacts-module */
          "comp-contacts-comp-contacts-module").then(__webpack_require__.bind(null,
          /*! ./comp-contacts/comp-contacts.module */
          "./src/app/comp-contacts/comp-contacts.module.ts")).then(function (m) {
            return m.CompContactsPageModule;
          });
        }
      }, {
        path: 'syst-positions',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'CARGOS',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | syst-positions-syst-positions-module */
          "syst-positions-syst-positions-module").then(__webpack_require__.bind(null,
          /*! ./syst-positions/syst-positions.module */
          "./src/app/syst-positions/syst-positions.module.ts")).then(function (m) {
            return m.SystPositionsPageModule;
          });
        }
      }, {
        path: 'syst-parameters',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'PARAMETROS',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | syst-parameters-syst-parameters-module */
          "syst-parameters-syst-parameters-module").then(__webpack_require__.bind(null,
          /*! ./syst-parameters/syst-parameters.module */
          "./src/app/syst-parameters/syst-parameters.module.ts")).then(function (m) {
            return m.SystParametersPageModule;
          });
        }
      }, {
        path: 'syst-parameter-groups',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'GRUPOS DE PARAMETROS',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | syst-parameter-groups-syst-parameter-groups-module */
          "syst-parameter-groups-syst-parameter-groups-module").then(__webpack_require__.bind(null,
          /*! ./syst-parameter-groups/syst-parameter-groups.module */
          "./src/app/syst-parameter-groups/syst-parameter-groups.module.ts")).then(function (m) {
            return m.SystParameterGroupsPageModule;
          });
        }
      }, {
        path: 'comp-responsabilities',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'EMPRESAS RESPONSABILIDADES LEGALES',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | comp-responsabilities-comp-responsabilities-module */
          "comp-responsabilities-comp-responsabilities-module").then(__webpack_require__.bind(null,
          /*! ./comp-responsabilities/comp-responsabilities.module */
          "./src/app/comp-responsabilities/comp-responsabilities.module.ts")).then(function (m) {
            return m.CompResponsabilitiesPageModule;
          });
        }
      }, {
        path: 'hous-units',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'UNIDADES HABITACIONALES',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | hous-units-hous-units-module */
          [__webpack_require__.e("common"), __webpack_require__.e("hous-units-hous-units-module")]).then(__webpack_require__.bind(null,
          /*! ./hous-units/hous-units.module */
          "./src/app/hous-units/hous-units.module.ts")).then(function (m) {
            return m.HousUnitsPageModule;
          });
        }
      }, {
        path: 'hous-unit-areas',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'UNIDADES HABITACIONALES AREAS',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | hous-unit-areas-hous-unit-areas-module */
          "hous-unit-areas-hous-unit-areas-module").then(__webpack_require__.bind(null,
          /*! ./hous-unit-areas/hous-unit-areas.module */
          "./src/app/hous-unit-areas/hous-unit-areas.module.ts")).then(function (m) {
            return m.HousUnitAreasPageModule;
          });
        }
      }, {
        path: 'oper-sectors',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'OPERATIVIDAD SECTORES',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | oper-sectors-oper-sectors-module */
          "oper-sectors-oper-sectors-module").then(__webpack_require__.bind(null,
          /*! ./oper-sectors/oper-sectors.module */
          "./src/app/oper-sectors/oper-sectors.module.ts")).then(function (m) {
            return m.OperSectorsPageModule;
          });
        }
      }, {
        path: 'coun-meetings',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'JUNTAS DEL CONSEJO',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | coun-meetings-coun-meetings-module */
          [__webpack_require__.e("common"), __webpack_require__.e("coun-meetings-coun-meetings-module")]).then(__webpack_require__.bind(null,
          /*! ./coun-meetings/coun-meetings.module */
          "./src/app/coun-meetings/coun-meetings.module.ts")).then(function (m) {
            return m.CounMeetingsPageModule;
          });
        }
      }, {
        path: 'coun-meeting-agendas',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'JUNTAS AGENDAS',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | coun-meeting-agendas-coun-meeting-agendas-module */
          "coun-meeting-agendas-coun-meeting-agendas-module").then(__webpack_require__.bind(null,
          /*! ./coun-meeting-agendas/coun-meeting-agendas.module */
          "./src/app/coun-meeting-agendas/coun-meeting-agendas.module.ts")).then(function (m) {
            return m.CounMeetingAgendasPageModule;
          });
        }
      }, {
        path: 'coun-meeting-citations',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'JUNTAS CITACIONES'
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | coun-meeting-citations-coun-meeting-citations-module */
          "coun-meeting-citations-coun-meeting-citations-module").then(__webpack_require__.bind(null,
          /*! ./coun-meeting-citations/coun-meeting-citations.module */
          "./src/app/coun-meeting-citations/coun-meeting-citations.module.ts")).then(function (m) {
            return m.CounMeetingCitationsPageModule;
          });
        }
      }, {
        path: 'oper-schedules',
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        data: {
          title: 'OPERATRIVIDAD AGENDAS'
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | oper-schedules-oper-schedules-module */
          "oper-schedules-oper-schedules-module").then(__webpack_require__.bind(null,
          /*! ./oper-schedules/oper-schedules.module */
          "./src/app/oper-schedules/oper-schedules.module.ts")).then(function (m) {
            return m.OperSchedulesPageModule;
          });
        }
      }, {
        path: 'oper-contractors',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'CONTRATISTAS OPERATIVOS',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | oper-contractors-oper-contractors-module */
          "oper-contractors-oper-contractors-module").then(__webpack_require__.bind(null,
          /*! ./oper-contractors/oper-contractors.module */
          "./src/app/oper-contractors/oper-contractors.module.ts")).then(function (m) {
            return m.OperContractorsPageModule;
          });
        }
      }, {
        path: 'oper-movements',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'MOVIMIENTOS OPERATIVOS',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | oper-movements-oper-movements-module */
          "oper-movements-oper-movements-module").then(__webpack_require__.bind(null,
          /*! ./oper-movements/oper-movements.module */
          "./src/app/oper-movements/oper-movements.module.ts")).then(function (m) {
            return m.OperMovementsPageModule;
          });
        }
      }, {
        path: 'coun-members',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'JUNTAS MIEMBROS',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | coun-members-coun-members-module */
          "coun-members-coun-members-module").then(__webpack_require__.bind(null,
          /*! ./coun-members/coun-members.module */
          "./src/app/coun-members/coun-members.module.ts")).then(function (m) {
            return m.CounMembersPageModule;
          });
        }
      }, {
        path: 'mail-templates',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'CORREOS PLANTILLAS',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | mail-templates-mail-templates-module */
          "mail-templates-mail-templates-module").then(__webpack_require__.bind(null,
          /*! ./mail-templates/mail-templates.module */
          "./src/app/mail-templates/mail-templates.module.ts")).then(function (m) {
            return m.MailTemplatesPageModule;
          });
        }
      }, {
        path: 'mails',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'CORREOS',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | mails-mails-module */
          "mails-mails-module").then(__webpack_require__.bind(null,
          /*! ./mails/mails.module */
          "./src/app/mails/mails.module.ts")).then(function (m) {
            return m.MailsPageModule;
          });
        }
      }, {
        path: 'files',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'JUNTAS ARCHIVOS DE AGENDAS',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | files-files-module */
          "files-files-module").then(__webpack_require__.bind(null,
          /*! ./files/files.module */
          "./src/app/files/files.module.ts")).then(function (m) {
            return m.FilesPageModule;
          });
        }
      }, {
        path: 'corr-packets',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'CORRESPONDENCIA PAQUETES',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | corr-packets-corr-packets-module */
          [__webpack_require__.e("common"), __webpack_require__.e("corr-packets-corr-packets-module")]).then(__webpack_require__.bind(null,
          /*! ./corr-packets/corr-packets.module */
          "./src/app/corr-packets/corr-packets.module.ts")).then(function (m) {
            return m.CorrPacketsPageModule;
          });
        }
      }, {
        path: 'settings',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'AJUSTES',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | settings-settings-module */
          "settings-settings-module").then(__webpack_require__.bind(null,
          /*! ./settings/settings.module */
          "./src/app/settings/settings.module.ts")).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }, {
        path: 'setting-groups',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'AJUSTES GRUPOS',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | setting-groups-setting-groups-module */
          "setting-groups-setting-groups-module").then(__webpack_require__.bind(null,
          /*! ./setting-groups/setting-groups.module */
          "./src/app/setting-groups/setting-groups.module.ts")).then(function (m) {
            return m.SettingGroupsPageModule;
          });
        }
      }, {
        path: 'user-roles',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'USUARIOS ROLES',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | user-roles-user-roles-module */
          "user-roles-user-roles-module").then(__webpack_require__.bind(null,
          /*! ./user-roles/user-roles.module */
          "./src/app/user-roles/user-roles.module.ts")).then(function (m) {
            return m.UserRolesPageModule;
          });
        }
      }, {
        path: 'user-permissions',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'USUARIOS PERMISOS',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | user-permissions-user-permissions-module */
          "user-permissions-user-permissions-module").then(__webpack_require__.bind(null,
          /*! ./user-permissions/user-permissions.module */
          "./src/app/user-permissions/user-permissions.module.ts")).then(function (m) {
            return m.UserPermissionsPageModule;
          });
        }
      }, {
        path: 'oper-machines',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'OPERATIVIDAD MAQUINARIA',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | oper-machines-oper-machines-module */
          "oper-machines-oper-machines-module").then(__webpack_require__.bind(null,
          /*! ./oper-machines/oper-machines.module */
          "./src/app/oper-machines/oper-machines.module.ts")).then(function (m) {
            return m.OperMachinesPageModule;
          });
        }
      }, {
        path: 'oper-preventive-maintenances',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'OPERATIVIDAD MTTO PREVENTIVOS',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | oper-preventive-maintenances-oper-preventive-maintenances-module */
          "oper-preventive-maintenances-oper-preventive-maintenances-module").then(__webpack_require__.bind(null,
          /*! ./oper-preventive-maintenances/oper-preventive-maintenances.module */
          "./src/app/oper-preventive-maintenances/oper-preventive-maintenances.module.ts")).then(function (m) {
            return m.OperPreventiveMaintenancesPageModule;
          });
        }
      }, {
        path: 'oper-replacements',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'OPERATIVIDAD REPUESTOS',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | oper-replacements-oper-replacements-module */
          "oper-replacements-oper-replacements-module").then(__webpack_require__.bind(null,
          /*! ./oper-replacements/oper-replacements.module */
          "./src/app/oper-replacements/oper-replacements.module.ts")).then(function (m) {
            return m.OperReplacementsPageModule;
          });
        }
      }, {
        path: 'oper-items',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'OPERATIVIDAD ITEMS MTTO CORRECTIVO',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | oper-items-oper-items-module */
          "oper-items-oper-items-module").then(__webpack_require__.bind(null,
          /*! ./oper-items/oper-items.module */
          "./src/app/oper-items/oper-items.module.ts")).then(function (m) {
            return m.OperItemsPageModule;
          });
        }
      }, {
        path: 'oper-reasons',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | oper-reasons-oper-reasons-module */
          "oper-reasons-oper-reasons-module").then(__webpack_require__.bind(null,
          /*! ./oper-reasons/oper-reasons.module */
          "./src/app/oper-reasons/oper-reasons.module.ts")).then(function (m) {
            return m.OperReasonsPageModule;
          });
        }
      }, {
        path: 'oper-corrective-maintenances',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'OPERATIVIDAD MTTO CORRECTIVOS',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | oper-corrective-maintenances-oper-corrective-maintenances-module */
          "oper-corrective-maintenances-oper-corrective-maintenances-module").then(__webpack_require__.bind(null,
          /*! ./oper-corrective-maintenances/oper-corrective-maintenances.module */
          "./src/app/oper-corrective-maintenances/oper-corrective-maintenances.module.ts")).then(function (m) {
            return m.OperCorrectiveMaintenancesPageModule;
          });
        }
      }, {
        path: 'oper-maintenance-repairs',
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
          title: 'OPERATIVIDAD REPARACIONES',
          roles: ['admin']
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | oper-maintenance-repairs-oper-maintenance-repairs-module */
          "oper-maintenance-repairs-oper-maintenance-repairs-module").then(__webpack_require__.bind(null,
          /*! ./oper-maintenance-repairs/oper-maintenance-repairs.module */
          "./src/app/oper-maintenance-repairs/oper-maintenance-repairs.module.ts")).then(function (m) {
            return m.OperMaintenanceRepairsPageModule;
          });
        }
      }, // end section
      {
        path: 'auth',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | auth-auth-module */
          "auth-auth-module").then(__webpack_require__.bind(null,
          /*! ./auth/auth.module */
          "./src/app/auth/auth.module.ts")).then(function (m) {
            return m.AuthPageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | settings-settings-module */
          "settings-settings-module").then(__webpack_require__.bind(null,
          /*! ./settings/settings.module */
          "./src/app/settings/settings.module.ts")).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }, {
        path: 'setting-groups',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | setting-groups-setting-groups-module */
          "setting-groups-setting-groups-module").then(__webpack_require__.bind(null,
          /*! ./setting-groups/setting-groups.module */
          "./src/app/setting-groups/setting-groups.module.ts")).then(function (m) {
            return m.SettingGroupsPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBOztFQUVFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyREFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxzREFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUpGOztBQU9BO0VBQ0UsaUNBQUE7QUFKRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAtLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxyXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICBtaW4taGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuXHJcbiAgY29sb3I6ICM3NTc1NzU7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgY29sb3I6ICM2MTZlN2U7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xyXG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICM3Mzg0OWE7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcclxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbmlvbi1ub3RlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbn1cclxuXHJcbmlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./@shared/services/loading.service */
      "./src/app/@shared/services/loading.service.ts");
      /* harmony import */


      var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./@shared/services/split-panel.service */
      "./src/app/@shared/services/split-panel.service.ts");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./@shared/services/auth.service */
      "./src/app/@shared/services/auth.service.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, loading, splitPanel, auth, title, router, route) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.loading = loading;
          this.splitPanel = splitPanel;
          this.auth = auth;
          this.title = title;
          this.router = router;
          this.route = route;
          this.dark = true;
          this.selectedIndex = 0;
          this.isLoading = false;
          this.appTitle = 'Noha App';
          this.initializeApp(); // this.splitPanel.show.next(false);

          this.splitPanel.show.subscribe(function (res) {// console.log('SplitPanel show ' + res);
          });
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this23 = this;

            this.platform.ready().then(function () {
              _this23.statusBar.styleDefault();

              _this23.splashScreen.hide();
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this24 = this;

            this.auth.startCheckExpirationToken();
            var path = window.location.pathname.split('folder/')[1];
            /*if (path !== undefined) {
                this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
            }*/
            // this.title.setTitle(this.appTitle);
            // const appTitle = this.title.getTitle();

            var appTitle = this.appTitle;
            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__["NavigationEnd"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function () {
              var child = _this24.route.firstChild;

              while (child.firstChild) {
                child = child.firstChild;
              }

              if (child.snapshot.data['title']) {
                return appTitle + ' : ' + child.snapshot.data['title'];
              }

              return appTitle;
            })).subscribe(function (ttl) {
              _this24.title.setTitle(ttl);
            });
          }
        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            var splitPane = document.querySelector('ion-split-pane');
            var windowWidth = window.innerWidth;
            var splitPaneShownAt = 992;
            var when = "(min-width: ".concat(splitPaneShownAt, "px)");

            if (windowWidth >= splitPaneShownAt) {
              // split pane view is visible
              var open = splitPane.when === when;
              splitPane.when = open ? false : when;
            } else {
              // split pane view is not visible
              // toggle menu open
              var menu = splitPane.querySelector('ion-menu');
              return menu.open();
            }
          }
        }, {
          key: "updateDarkMode",
          value: function updateDarkMode() {
            document.body.classList.toggle('dark', this.dark);
          }
        }, {
          key: "darkEnabled",
          value: function darkEnabled() {
            if (document.body.classList.contains('dark')) {
              return true;
            }

            return false;
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: StartupServiceFactory, AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StartupServiceFactory", function () {
        return StartupServiceFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/service-worker */
      "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./@layouts/layouts.module */
      "./src/app/@layouts/layouts.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _shared_services_startup_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./@shared/services/startup.service */
      "./src/app/@shared/services/startup.service.ts");
      /* harmony import */


      var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./@shared/services/split-panel.service */
      "./src/app/@shared/services/split-panel.service.ts");

      function StartupServiceFactory(startupService) {
        return function () {
          return startupService.load();
        };
      }

      var APPINIT_PROVIDES = [_shared_services_startup_service__WEBPACK_IMPORTED_MODULE_13__["StartupService"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
        useFactory: StartupServiceFactory,
        deps: [_shared_services_startup_service__WEBPACK_IMPORTED_MODULE_13__["StartupService"]],
        multi: true
      }];

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({
          mode: 'ios'
        }), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_11__["LayoutsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"].register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production
        }), _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_14__["SplitPanelService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, {
          provide: 'WINDOW',
          useValue: window
        }].concat(APPINIT_PROVIDES),
        exports: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });
      /* harmony import */


      var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! zone.js/dist/zone-error */
      "./node_modules/zone.js/dist/zone-error.js");
      /* harmony import */


      var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        version: 'dev',
        name: 'Noah App',
        serverUrl: 'http://192.168.20.39/ionbase/public',
        secretKey: 'Zcpocr3nMl1lyvnkGT6zMSc'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/pwa-elements/loader */
      "./node_modules/@ionic/pwa-elements/loader/index.es2017.mjs");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      }); // Call the element loader after the platform has been bootstrapped

      Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\laragon\www\ionbase\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map