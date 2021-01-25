(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-folder-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header title=\"Folder\" [showSplitPanelButton]=\"splitPanel.show.value\"></app-main-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n    <ion-header collapse=\"condense\">\r\n        <ion-toolbar>\r\n            <ion-title size=\"large\">{{ folder }}</ion-title>\r\n        </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <div id=\"container\">\r\n\r\n        <ion-grid>\r\n            <ion-slides pager=\"false\"\r\n                        [options]=\"slideOpts\"\r\n                        #slideWithNav\r\n                        (ionSlideDidChange)=\"SlideDidChange(slider,slideWithNav)\">\r\n                <ion-slide *ngFor=\"let s of slider.slidesItems\">\r\n                    <ion-card>\r\n                        <img src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\">\r\n                        <ion-card-title>\r\n                            {{s.id}}\r\n                        </ion-card-title>\r\n                    </ion-card>\r\n\r\n                </ion-slide>\r\n            </ion-slides>\r\n        </ion-grid>\r\n\r\n        <ion-card>\r\n            <div class=\"cssreset\">\r\n                <ion-card-header>\r\n                    <ion-card-subtitle>Card Subtitle One</ion-card-subtitle>\r\n                    <ion-card-title>{{folder}}</ion-card-title>\r\n                </ion-card-header>\r\n\r\n                <ion-card-content>\r\n                    Keep close to Nature's heart... and break clear away, once in awhile,\r\n                    and climb a mountain or spend a week in the woods. Wash your spirit clean.\r\n                </ion-card-content>\r\n            </div>\r\n\r\n        </ion-card>\r\n\r\n        <ion-card>\r\n            <ion-card-header>\r\n                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\r\n                <ion-card-title>Card Title</ion-card-title>\r\n            </ion-card-header>\r\n\r\n            <ion-card-content>\r\n                Keep close to Nature's heart... and break clear away, once in awhile,\r\n                and climb a mountain or spend a week in the woods. Wash your spirit clean.\r\n            </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card>\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\r\n                <ion-label>ion-item in a card, icon left, button right</ion-label>\r\n                <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\r\n            </ion-item>\r\n\r\n            <ion-card-content>\r\n                This is content, without any paragraph or header tags,\r\n                within an ion-card-content element.\r\n            </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card>\r\n            <ion-item href=\"#\" class=\"ion-activated\">\r\n                <ion-icon name=\"wifi\" slot=\"start\"></ion-icon>\r\n                <ion-label>Card Link Item 1 activated</ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item href=\"#\">\r\n                <ion-icon name=\"wine\" slot=\"start\"></ion-icon>\r\n                <ion-label>Card Link Item 2</ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item class=\"ion-activated\">\r\n                <ion-icon name=\"warning\" slot=\"start\"></ion-icon>\r\n                <ion-label>Card Button Item 1 activated</ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n                <ion-icon name=\"walk\" slot=\"start\"></ion-icon>\r\n                <ion-label>Card Button Item 2</ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n\r\n        <ion-card>\r\n            <img src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\" style=\"width: 100%;\"/>\r\n        </ion-card>\r\n\r\n    </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/folder/folder-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/folder/folder-routing.module.ts ***!
  \*************************************************/
/*! exports provided: FolderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPageRoutingModule", function() { return FolderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./folder.page */ "./src/app/folder/folder.page.ts");




const routes = [
    {
        path: '',
        component: _folder_page__WEBPACK_IMPORTED_MODULE_3__["FolderPage"]
    }
];
let FolderPageRoutingModule = class FolderPageRoutingModule {
};
FolderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FolderPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/folder.module.ts":
/*!*****************************************!*\
  !*** ./src/app/folder/folder.module.ts ***!
  \*****************************************/
/*! exports provided: FolderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPageModule", function() { return FolderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _folder_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./folder-routing.module */ "./src/app/folder/folder-routing.module.ts");
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./folder.page */ "./src/app/folder/folder.page.ts");








let FolderPageModule = class FolderPageModule {
};
FolderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _folder_routing_module__WEBPACK_IMPORTED_MODULE_6__["FolderPageRoutingModule"]
        ],
        declarations: [_folder_page__WEBPACK_IMPORTED_MODULE_7__["FolderPage"]]
    })
], FolderPageModule);



/***/ }),

/***/ "./src/app/folder/folder.page.scss":
/*!*****************************************!*\
  !*** ./src/app/folder/folder.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n/*#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}*/\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2ZvbGRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBOzs7Ozs7O0VBQUE7O0FBU0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL2ZvbGRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbi8qI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufSovXHJcblxyXG4jY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBjb2xvcjogIzhjOGM4YztcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNjb250YWluZXIgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/folder/folder.page.ts":
/*!***************************************!*\
  !*** ./src/app/folder/folder.page.ts ***!
  \***************************************/
/*! exports provided: FolderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPage", function() { return FolderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/services/split-panel.service */ "./src/app/@shared/services/split-panel.service.ts");





let FolderPage = class FolderPage {
    constructor(activatedRoute, platform, splitPanel) {
        this.activatedRoute = activatedRoute;
        this.platform = platform;
        this.splitPanel = splitPanel;
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 4,
            loop: true,
            centeredSlides: true,
            spaceBetween: 0
        };
        if (this.platform.width() < 1200) {
            this.slideOpts.slidesPerView = 2;
        }
        this.slider =
            {
                isBeginningSlide: true,
                isEndSlide: false,
                slidesItems: [
                    {
                        id: 324
                    },
                    {
                        id: 321
                    },
                    {
                        id: 435
                    },
                    {
                        id: 524
                    },
                    {
                        id: 235
                    },
                    {
                        id: 236
                    },
                    {
                        id: 237
                    },
                    {
                        id: 238
                    }
                ]
            };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
        this.platform.resize.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.platform.width());
        }));
        this.splitPanel.show.next(true);
    }
    // Move to Next slide
    slideNext(object, slideView) {
        slideView.slideNext(500).then(() => {
            this.checkIfNavDisabled(object, slideView);
        });
    }
    // Move to previous slide
    slidePrev(object, slideView) {
        slideView.slidePrev(500).then(() => {
            this.checkIfNavDisabled(object, slideView);
        });
    }
    // Method called when slide is changed by drag or navigation
    SlideDidChange(object, slideView) {
        this.checkIfNavDisabled(object, slideView);
    }
    // Call methods to check if slide is first or last to enable disbale navigation
    checkIfNavDisabled(object, slideView) {
        this.checkisBeginning(object, slideView);
        this.checkisEnd(object, slideView);
    }
    checkisBeginning(object, slideView) {
        slideView.isBeginning().then((istrue) => {
            object.isBeginningSlide = istrue;
        });
    }
    checkisEnd(object, slideView) {
        slideView.isEnd().then((istrue) => {
            object.isEndSlide = istrue;
        });
    }
    ionViewDidLeave() {
        // Do actions here
        this.ngOnDestroy();
    }
    ngOnDestroy() {
        console.log('Sestroy folder page');
    }
};
FolderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_4__["SplitPanelService"] }
];
FolderPage.propDecorators = {
    slideWithNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['slideWithNav', { static: false },] }]
};
FolderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-folder',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./folder.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./folder.page.scss */ "./src/app/folder/folder.page.scss")).default]
    })
], FolderPage);



/***/ })

}]);
//# sourceMappingURL=folder-folder-module-es2015.js.map