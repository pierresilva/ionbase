(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mails-mails-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/mails/mails-create/mails-create.component.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mails/mails-create/mails-create.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMailsMailsCreateMailsCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/mails'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"mailsService.storeMail()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!mailsService.mailsFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'CORREOS' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-mails-form #mailForm [model]=\"mailsService.mail\"></app-mails-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/mails/mails-duplicate/mails-duplicate.component.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mails/mails-duplicate/mails-duplicate.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMailsMailsDuplicateMailsDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\r\n  Mails duplicate works!\r\n</p>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/mails/mails-edit/mails-edit.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mails/mails-edit/mails-edit.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMailsMailsEditMailsEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/mails'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"mailsService.updateMail()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!mailsService.mailsFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'CORREOS' | titlecase}}: {{ mailsService.mail?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-mails-form #mailForm [model]=\"mailsService.mail\"></app-mails-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/mails/mails-form/mails-form.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mails/mails-form/mails-form.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMailsMailsFormMailsFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #mailsForm=\"ngForm\" novalidate autocomplete=\"off\">\r\n\r\n\r\n    <!-- mail_template_id -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'CORREOSPLANTILLA' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"mail_template_id\"\r\n                          id=\"mail_template_id-field\"\r\n                          [required]=\"true\"\r\n                          [(ngModel)]=\"model.mail_template\"\r\n                          [items]=\"mailsService.mailLists.MailTemplate\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"subject\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('CORREOS PLANTILLAS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('CORREOS PLANTILLAS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setMailTemplateId($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.mail_template_id\">\r\n            <div class=\"error-message\" *ngIf=\"mailsForm.form.controls['mail_template_id']?.hasError(validation.type)\">\r\n                {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end mail_template_id -->\r\n\r\n\r\n            <!-- subject -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'ASUNTO' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.subject\"\r\n                            type=\"text\"\r\n                            name=\"subject\"\r\n                            id=\"subject-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.subject\">\r\n                    <div class=\"error-message\" *ngIf=\"mailsForm.form.controls['subject']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end subject -->\r\n\r\n\r\n            <!-- receiver -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'PARA' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.receiver\"\r\n                            type=\"text\"\r\n                            name=\"receiver\"\r\n                            id=\"receiver-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.receiver\">\r\n                    <div class=\"error-message\" *ngIf=\"mailsForm.form.controls['receiver']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end receiver -->\r\n\r\n\r\n            <!-- html -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label position=\"stacked\" style=\"font-size: 1rem;\">{{ 'HTML' | titlecase }}</ion-label>\r\n                <input [ngxSummernote]\r\n                       name=\"html\"\r\n                       id=\"html-field\"\r\n                       [(ngModel)]=\"model.html\">\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.html\">\r\n                    <div class=\"error-message\" *ngIf=\"mailsForm.form.controls['html']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end html -->\r\n\r\n\r\n            <!-- text -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'TEXTO' | titlecase }}</ion-label>\r\n                <ion-textarea [(ngModel)]=\"model.text\"\r\n                              name=\"text\"\r\n                              id=\"text-field\"\r\n                              rows=\"6\"\r\n                              placeholder=\"\"></ion-textarea>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.text\">\r\n                    <div class=\"error-message\" *ngIf=\"mailsForm.form.controls['text']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end text -->\r\n\r\n\r\n</form>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/mails/mails-list/mails-list.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mails/mails-list/mails-list.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMailsMailsListMailsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'CORREOS' | titlecase}}\"\r\n                 primaryLink=\"mails/create\"\r\n                 primaryText=\"Crear {{'CORREOS' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-searchbar showCancelButton=\"focus\"\r\n                       [cancelButtonText]=\"'Cancelar'\"\r\n                       [placeholder]=\"'Buscar ' + ('CORREOS' | lowercase )\"\r\n                       (ionCancel)=\"this.mailsService.searchValue = ''; mailsService.getMails()\"\r\n                       (keyup.enter)=\"mailsService.getMails()\"\r\n                       [(ngModel)]=\"mailsService.searchValue\"></ion-searchbar>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && mailsService.mails?.length\">\r\n        <ion-card *ngFor=\"let mail of mailsService.mails; let index = index\">\r\n            <ion-list>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'ASUNTO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ mail?.subject }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'PARA' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ mail?.receiver }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'HTML' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ mail?.html | stripHtml }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'TEXTO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ mail?.text }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'CORREOS PLANTILLAS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\"><a routerLink=\"/mail-templates/{{ mail?.mail_template?.id }}/edit\">{{ mail?.mail_template?.subject }}</a></div>\r\n                    </ion-item>\r\n            </ion-list>\r\n            <ion-footer>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/mails/' + mail?.id + '/edit'\">\r\n                            <ion-icon name=\"create-outline\"></ion-icon>\r\n                            <div>Editar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"mailsService.deleteMail(mail?.id)\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            <div>Eliminar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-footer>\r\n        </ion-card>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && !mailsService.mails?.length\">\r\n        <ion-item>\r\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label><h2>No se encontraron {{'CORREOS' | titlecase}}</h2></ion-label>\r\n            <ion-button [routerLink]=\"'/mails/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\r\n                Crear {{'CORREOS' | titlecase}}\r\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"mailsService.meta\">\r\n        <ion-col class=\"ion-text-center\" size=\"12\">\r\n            <ion-button (click)=\"mailsService.getMails(mailsService.meta.current_page - 1)\"\r\n                        [disabled]=\"mailsService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{mailsService.meta.current_page}}\r\n                /{{mailsService.meta.last_page}} {{mailsService.meta.from}}-{{mailsService.meta.to}}\r\n                /{{mailsService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"mailsService.getMails(mailsService.meta.current_page + 1)\"\r\n                        [disabled]=\"mailsService.meta.current_page == mailsService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/mails/mails.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mails/mails.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMailsMailsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"CORREOS\"></app-main-header>\r\n\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/mails/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'CORREOS'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/mails/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'CORREOS' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/mails/mails-create/mails-create.component.scss":
    /*!****************************************************************!*\
      !*** ./src/app/mails/mails-create/mails-create.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMailsMailsCreateMailsCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haWxzL21haWxzLWNyZWF0ZS9tYWlscy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/mails/mails-create/mails-create.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/mails/mails-create/mails-create.component.ts ***!
      \**************************************************************/

    /*! exports provided: MailsCreateComponent */

    /***/
    function srcAppMailsMailsCreateMailsCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailsCreateComponent", function () {
        return MailsCreateComponent;
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


      var _mails_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../mails.service */
      "./src/app/mails/mails.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../@shared/services/split-panel.service */
      "./src/app/@shared/services/split-panel.service.ts");

      var MailsCreateComponent = /*#__PURE__*/function () {
        function MailsCreateComponent(mailsService, route, platform, splitPanel) {
          _classCallCheck(this, MailsCreateComponent);

          this.mailsService = mailsService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.formValid = false;
        }

        _createClass(MailsCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.clearPosts();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.mailForm.mailsForm.valueChanges.subscribe(function (data) {
              _this.mailsService.mailsFormValid.next(_this.mailForm.mailsForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.mailsService.createMail();
            this.mailsService.mail = {};
          }
        }]);

        return MailsCreateComponent;
      }();

      MailsCreateComponent.ctorParameters = function () {
        return [{
          type: _mails_service__WEBPACK_IMPORTED_MODULE_2__["MailsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      MailsCreateComponent.propDecorators = {
        mailForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['mailForm']
        }]
      };
      MailsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mails-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./mails-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/mails/mails-create/mails-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./mails-create.component.scss */
        "./src/app/mails/mails-create/mails-create.component.scss"))["default"]]
      })], MailsCreateComponent);
      /***/
    },

    /***/
    "./src/app/mails/mails-duplicate/mails-duplicate.component.scss":
    /*!**********************************************************************!*\
      !*** ./src/app/mails/mails-duplicate/mails-duplicate.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMailsMailsDuplicateMailsDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haWxzL21haWxzLWR1cGxpY2F0ZS9tYWlscy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/mails/mails-duplicate/mails-duplicate.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/mails/mails-duplicate/mails-duplicate.component.ts ***!
      \********************************************************************/

    /*! exports provided: MailsDuplicateComponent */

    /***/
    function srcAppMailsMailsDuplicateMailsDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailsDuplicateComponent", function () {
        return MailsDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MailsDuplicateComponent = /*#__PURE__*/function () {
        function MailsDuplicateComponent() {
          _classCallCheck(this, MailsDuplicateComponent);
        }

        _createClass(MailsDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MailsDuplicateComponent;
      }();

      MailsDuplicateComponent.ctorParameters = function () {
        return [];
      };

      MailsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mails-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./mails-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/mails/mails-duplicate/mails-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./mails-duplicate.component.scss */
        "./src/app/mails/mails-duplicate/mails-duplicate.component.scss"))["default"]]
      })], MailsDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/mails/mails-edit/mails-edit.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/mails/mails-edit/mails-edit.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMailsMailsEditMailsEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haWxzL21haWxzLWVkaXQvbWFpbHMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/mails/mails-edit/mails-edit.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/mails/mails-edit/mails-edit.component.ts ***!
      \**********************************************************/

    /*! exports provided: MailsEditComponent */

    /***/
    function srcAppMailsMailsEditMailsEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailsEditComponent", function () {
        return MailsEditComponent;
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


      var _mails_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../mails.service */
      "./src/app/mails/mails.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../@shared/services/split-panel.service */
      "./src/app/@shared/services/split-panel.service.ts");

      var MailsEditComponent = /*#__PURE__*/function () {
        function MailsEditComponent(mailsService, route, platform, splitPanel) {
          _classCallCheck(this, MailsEditComponent);

          this.mailsService = mailsService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.model = null;
        }

        _createClass(MailsEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.mailsService.editMail(this.id);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            this.mailForm.mailsForm.valueChanges.subscribe(function (data) {
              _this2.mailsService.mailsFormValid.next(_this2.mailForm.mailsForm.valid);
            });
          }
        }]);

        return MailsEditComponent;
      }();

      MailsEditComponent.ctorParameters = function () {
        return [{
          type: _mails_service__WEBPACK_IMPORTED_MODULE_2__["MailsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      MailsEditComponent.propDecorators = {
        mailForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['mailForm']
        }]
      };
      MailsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mails-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./mails-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/mails/mails-edit/mails-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./mails-edit.component.scss */
        "./src/app/mails/mails-edit/mails-edit.component.scss"))["default"]]
      })], MailsEditComponent);
      /***/
    },

    /***/
    "./src/app/mails/mails-form/mails-form.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/mails/mails-form/mails-form.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMailsMailsFormMailsFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haWxzL21haWxzLWZvcm0vbWFpbHMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/mails/mails-form/mails-form.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/mails/mails-form/mails-form.component.ts ***!
      \**********************************************************/

    /*! exports provided: MailsFormComponent */

    /***/
    function srcAppMailsMailsFormMailsFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailsFormComponent", function () {
        return MailsFormComponent;
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


      var _mails_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../mails.service */
      "./src/app/mails/mails.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var MailsFormComponent = /*#__PURE__*/function () {
        function MailsFormComponent(mailsService, toTitlecase) {
          _classCallCheck(this, MailsFormComponent);

          this.mailsService = mailsService;
          this.toTitlecase = toTitlecase;
          this.model = {};
          this.validationMessages = {
            'mail_template_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('mailTemplate - NAME') + ' es obligatorio.'
            }],
            'subject': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('ASUNTO') + ' es obligatorio.'
            }],
            'receiver': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('PARA') + ' es obligatorio.'
            }],
            'html': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('HTML') + ' es obligatorio.'
            }],
            'text': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('TEXTO') + ' es obligatorio.'
            }]
          };
        }

        _createClass(MailsFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // set setMailTemplateId

        }, {
          key: "setMailTemplateId",
          value: function setMailTemplateId(event) {
            this.mailsService.mail.mail_template_id = event.value ? event.value.id : null;
          }
        }]);

        return MailsFormComponent;
      }();

      MailsFormComponent.ctorParameters = function () {
        return [{
          type: _mails_service__WEBPACK_IMPORTED_MODULE_2__["MailsService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      MailsFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        mailsForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['mailsForm']
        }]
      };
      MailsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mails-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./mails-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/mails/mails-form/mails-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./mails-form.component.scss */
        "./src/app/mails/mails-form/mails-form.component.scss"))["default"]]
      })], MailsFormComponent);
      /***/
    },

    /***/
    "./src/app/mails/mails-list/mails-list.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/mails/mails-list/mails-list.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMailsMailsListMailsListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haWxzL21haWxzLWxpc3QvbWFpbHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/mails/mails-list/mails-list.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/mails/mails-list/mails-list.component.ts ***!
      \**********************************************************/

    /*! exports provided: MailsListComponent */

    /***/
    function srcAppMailsMailsListMailsListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailsListComponent", function () {
        return MailsListComponent;
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


      var _mails_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../mails.service */
      "./src/app/mails/mails.service.ts");
      /* harmony import */


      var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../@shared/services/api.service */
      "./src/app/@shared/services/api.service.ts");
      /* harmony import */


      var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../@shared/services/loading.service */
      "./src/app/@shared/services/loading.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../@shared/services/split-panel.service */
      "./src/app/@shared/services/split-panel.service.ts");

      var MailsListComponent = /*#__PURE__*/function () {
        function MailsListComponent(mailsService, api, loading, splitPanel) {
          _classCallCheck(this, MailsListComponent);

          this.mailsService = mailsService;
          this.api = api;
          this.loading = loading;
          this.splitPanel = splitPanel;
        }

        _createClass(MailsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.mailsService.getMails();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            this.content.scrollToTop(300);
          }
        }]);

        return MailsListComponent;
      }();

      MailsListComponent.ctorParameters = function () {
        return [{
          type: _mails_service__WEBPACK_IMPORTED_MODULE_2__["MailsService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"]
        }];
      };

      MailsListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      MailsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mails-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./mails-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/mails/mails-list/mails-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./mails-list.component.scss */
        "./src/app/mails/mails-list/mails-list.component.scss"))["default"]]
      })], MailsListComponent);
      /***/
    },

    /***/
    "./src/app/mails/mails-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/mails/mails-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: MailsPageRoutingModule */

    /***/
    function srcAppMailsMailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailsPageRoutingModule", function () {
        return MailsPageRoutingModule;
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


      var _mails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mails.page */
      "./src/app/mails/mails.page.ts");
      /* harmony import */


      var _mails_edit_mails_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./mails-edit/mails-edit.component */
      "./src/app/mails/mails-edit/mails-edit.component.ts");
      /* harmony import */


      var _mails_create_mails_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mails-create/mails-create.component */
      "./src/app/mails/mails-create/mails-create.component.ts");
      /* harmony import */


      var _mails_list_mails_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mails-list/mails-list.component */
      "./src/app/mails/mails-list/mails-list.component.ts");

      var routes = [{
        path: '',
        component: _mails_page__WEBPACK_IMPORTED_MODULE_3__["MailsPage"]
      }, {
        path: 'list',
        component: _mails_list_mails_list_component__WEBPACK_IMPORTED_MODULE_6__["MailsListComponent"]
      }, {
        path: 'create',
        component: _mails_create_mails_create_component__WEBPACK_IMPORTED_MODULE_5__["MailsCreateComponent"]
      }, {
        path: ':id/edit',
        component: _mails_edit_mails_edit_component__WEBPACK_IMPORTED_MODULE_4__["MailsEditComponent"]
      }];

      var MailsPageRoutingModule = function MailsPageRoutingModule() {
        _classCallCheck(this, MailsPageRoutingModule);
      };

      MailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MailsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/mails/mails.module.ts":
    /*!***************************************!*\
      !*** ./src/app/mails/mails.module.ts ***!
      \***************************************/

    /*! exports provided: MailsPageModule */

    /***/
    function srcAppMailsMailsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailsPageModule", function () {
        return MailsPageModule;
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


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../@shared/shared.module */
      "./src/app/@shared/shared.module.ts");
      /* harmony import */


      var _mails_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mails-routing.module */
      "./src/app/mails/mails-routing.module.ts");
      /* harmony import */


      var _mails_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./mails.page */
      "./src/app/mails/mails.page.ts");
      /* harmony import */


      var _mails_list_mails_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./mails-list/mails-list.component */
      "./src/app/mails/mails-list/mails-list.component.ts");
      /* harmony import */


      var _mails_create_mails_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./mails-create/mails-create.component */
      "./src/app/mails/mails-create/mails-create.component.ts");
      /* harmony import */


      var _mails_duplicate_mails_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./mails-duplicate/mails-duplicate.component */
      "./src/app/mails/mails-duplicate/mails-duplicate.component.ts");
      /* harmony import */


      var _mails_edit_mails_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./mails-edit/mails-edit.component */
      "./src/app/mails/mails-edit/mails-edit.component.ts");
      /* harmony import */


      var _mails_form_mails_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./mails-form/mails-form.component */
      "./src/app/mails/mails-form/mails-form.component.ts");

      var MailsPageModule = function MailsPageModule() {
        _classCallCheck(this, MailsPageModule);
      };

      MailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _mails_routing_module__WEBPACK_IMPORTED_MODULE_6__["MailsPageRoutingModule"]],
        declarations: [_mails_page__WEBPACK_IMPORTED_MODULE_7__["MailsPage"], _mails_list_mails_list_component__WEBPACK_IMPORTED_MODULE_8__["MailsListComponent"], _mails_create_mails_create_component__WEBPACK_IMPORTED_MODULE_9__["MailsCreateComponent"], _mails_duplicate_mails_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["MailsDuplicateComponent"], _mails_edit_mails_edit_component__WEBPACK_IMPORTED_MODULE_11__["MailsEditComponent"], _mails_form_mails_form_component__WEBPACK_IMPORTED_MODULE_12__["MailsFormComponent"]]
      })], MailsPageModule);
      /***/
    },

    /***/
    "./src/app/mails/mails.page.scss":
    /*!***************************************!*\
      !*** ./src/app/mails/mails.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppMailsMailsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haWxzL21haWxzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/mails/mails.page.ts":
    /*!*************************************!*\
      !*** ./src/app/mails/mails.page.ts ***!
      \*************************************/

    /*! exports provided: MailsPage */

    /***/
    function srcAppMailsMailsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailsPage", function () {
        return MailsPage;
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

      var MailsPage = /*#__PURE__*/function () {
        function MailsPage(splitPanel) {
          _classCallCheck(this, MailsPage);

          this.splitPanel = splitPanel;
        }

        _createClass(MailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }]);

        return MailsPage;
      }();

      MailsPage.ctorParameters = function () {
        return [{
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"]
        }];
      };

      MailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mails',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./mails.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/mails/mails.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./mails.page.scss */
        "./src/app/mails/mails.page.scss"))["default"]]
      })], MailsPage);
      /***/
    },

    /***/
    "./src/app/mails/mails.service.ts":
    /*!****************************************!*\
      !*** ./src/app/mails/mails.service.ts ***!
      \****************************************/

    /*! exports provided: MailsService */

    /***/
    function srcAppMailsMailsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailsService", function () {
        return MailsService;
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


      var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../@shared/services/api.service */
      "./src/app/@shared/services/api.service.ts");
      /* harmony import */


      var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../@shared/services/alert.service */
      "./src/app/@shared/services/alert.service.ts");
      /* harmony import */


      var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../@shared/services/toast.service */
      "./src/app/@shared/services/toast.service.ts");
      /* harmony import */


      var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../@shared/services/navigation.service */
      "./src/app/@shared/services/navigation.service.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var MailsService = /*#__PURE__*/function () {
        function MailsService(api, alert, toast, router, navigation) {
          _classCallCheck(this, MailsService);

          this.api = api;
          this.alert = alert;
          this.toast = toast;
          this.router = router;
          this.navigation = navigation;
          this.mailsUrl = 'mails';
          this.mailsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
          this.mails = [];
          this.mail = {};
          this.mailLists = {};
          this.searchValue = '';
          this.perPage = 10;
          this.meta = null;
          this.page = 1;
          this.pagesContent = document.getElementById('pages-content');
        }

        _createClass(MailsService, [{
          key: "getMails",
          value: function getMails() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.mailsUrl + '?page=' + page + '&perPage=' + perPage + '&q[subject:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.mails = res.data;
              _this3.mailLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editMail",
          value: function editMail(id) {
            var _this4 = this;

            this.api.get(this.mailsUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.mail = res.data.model;
              _this4.mailLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateMail",
          value: function updateMail() {
            var _this5 = this;

            this.api.put(this.mailsUrl + '/' + this.mail.id, {
              model: this.mail,
              pivots: {}
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getMails(1);
            });
          }
        }, {
          key: "createMail",
          value: function createMail() {
            var _this6 = this;

            this.api.get(this.mailsUrl + '/create').subscribe(function (res) {
              _this6.mail = {};
              _this6.mailLists = res.lists;
            });
          }
        }, {
          key: "storeMail",
          value: function storeMail() {
            var _this7 = this;

            this.api.post(this.mailsUrl, {
              model: this.mail,
              pivots: {}
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getMails(1);
            });
          }
        }, {
          key: "deleteMail",
          value: function deleteMail(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this8 = this;

              var confirm;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alert.confirmation('Desea eliminar el item?');

                    case 2:
                      confirm = _context.sent;

                      if (!confirm) {
                        _context.next = 7;
                        break;
                      }

                      this.api["delete"](this.mailsUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getMails(1);
                      });
                      _context.next = 8;
                      break;

                    case 7:
                      return _context.abrupt("return");

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return MailsService;
      }();

      MailsService.ctorParameters = function () {
        return [{
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"]
        }];
      };

      MailsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MailsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=mails-mails-module-es5.js.map