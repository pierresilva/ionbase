(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mail-templates-mail-templates-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/mail-templates/mail-templates-create/mail-templates-create.component.html":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mail-templates/mail-templates-create/mail-templates-create.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMailTemplatesMailTemplatesCreateMailTemplatesCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/mail-templates'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"mailTemplatesService.storeMailTemplate()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!mailTemplatesService.mailTemplatesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Crear {{'CORREOS PLANTILLAS' | titlecase}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n        <app-mail-templates-form #mailTemplateForm [model]=\"mailTemplatesService.mailTemplate\"></app-mail-templates-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/mail-templates/mail-templates-duplicate/mail-templates-duplicate.component.html":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mail-templates/mail-templates-duplicate/mail-templates-duplicate.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMailTemplatesMailTemplatesDuplicateMailTemplatesDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\r\n  MailTemplates duplicate works!\r\n</p>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/mail-templates/mail-templates-edit/mail-templates-edit.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mail-templates/mail-templates-edit/mail-templates-edit.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMailTemplatesMailTemplatesEditMailTemplatesEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <ion-button [routerLink]=\"'/mail-templates'\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-back-button\r\n              [text]=\"''\"\r\n              [icon]=\"'arrow-back-outline'\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"mailTemplatesService.updateMailTemplate()\"\r\n                        color=\"success\"\r\n                        fill=\"clear\"\r\n                        [disabled]=\"!mailTemplatesService.mailTemplatesFormValid.value\">\r\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\r\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Editar {{'CORREOS PLANTILLAS' | titlecase}}: {{ mailTemplatesService.mailTemplate?.name }}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <ion-card>\r\n            <app-mail-templates-form #mailTemplateForm [model]=\"mailTemplatesService.mailTemplate\"></app-mail-templates-form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/mail-templates/mail-templates-form/mail-templates-form.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mail-templates/mail-templates-form/mail-templates-form.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMailTemplatesMailTemplatesFormMailTemplatesFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #mailTemplatesForm=\"ngForm\" novalidate autocomplete=\"off\">\r\n\r\n\r\n    <!-- mail_ids -->\r\n    <ion-item class=\"item-transparent\">\r\n        <ion-label>{{ 'CORREOS' | titlecase }}</ion-label>\r\n        <ionic-selectable name=\"mail_ids\"\r\n                          id=\"mail_ids-field\"\r\n                          [(ngModel)]=\"model.mails\"\r\n                          [items]=\"mailTemplatesService.mailTemplateLists.Mail\"\r\n                          itemValueField=\"id\"\r\n                          itemTextField=\"subject\"\r\n                          [isMultiple]=\"true\"\r\n                          [canClear]=\"true\"\r\n                          [hasConfirmButton]=\"true\"\r\n                          [confirmButtonText]=\"'Seleccionar'\"\r\n                          [searchPlaceholder]=\"'Buscar ' + ('CORREOS' | titlecase)\"\r\n                          [searchFailText]=\"'No se encontro ' + ('CORREOS' | titlecase) + ' que coincida!'\"\r\n                          [closeButtonText]=\"'Cancelar'\"\r\n                          [clearButtonText]=\"'Limpiar'\"\r\n                          [canSearch]=\"true\"\r\n                          (onChange)=\"setMailIds($event)\">\r\n        </ionic-selectable>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validationMessages.mail_ids\">\r\n            <div class=\"error-message\" *ngIf=\"mailTemplatesForm.form.controls['mail_ids']?.hasError(validation.type)\">\r\n            {{ validation.message }}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- end mail_ids -->\r\n\r\n\r\n            <!-- subject -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'ASUNTO' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.subject\"\r\n                            type=\"text\"\r\n                            name=\"subject\"\r\n                            id=\"subject-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.subject\">\r\n                    <div class=\"error-message\" *ngIf=\"mailTemplatesForm.form.controls['subject']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end subject -->\r\n\r\n\r\n            <!-- mailable -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'CLASE' | titlecase }}</ion-label>\r\n                <ion-input [(ngModel)]=\"model.mailable\"\r\n                            type=\"text\"\r\n                            name=\"mailable\"\r\n                            id=\"mailable-field\"\r\n                            [required]=\"true\"\r\n                            placeholder=\"\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.mailable\">\r\n                    <div class=\"error-message\" *ngIf=\"mailTemplatesForm.form.controls['mailable']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end mailable -->\r\n\r\n\r\n            <!-- html_template -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label position=\"stacked\" style=\"font-size: 1rem;\">{{ 'HTML' | titlecase }}</ion-label>\r\n                <input [ngxSummernote]\r\n                       name=\"html_template\"\r\n                       id=\"html_template-field\"\r\n                       [(ngModel)]=\"model.html_template\">\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.html_template\">\r\n                    <div class=\"error-message\" *ngIf=\"mailTemplatesForm.form.controls['html_template']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end html_template -->\r\n\r\n\r\n            <!-- text_template -->\r\n            <ion-item class=\"item-transparent\">\r\n                <ion-label>{{ 'TEXTO' | titlecase }}</ion-label>\r\n                <ion-textarea [(ngModel)]=\"model.text_template\"\r\n                              name=\"text_template\"\r\n                              id=\"text_template-field\"\r\n                              rows=\"6\"\r\n                              placeholder=\"\"></ion-textarea>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of validationMessages.text_template\">\r\n                    <div class=\"error-message\" *ngIf=\"mailTemplatesForm.form.controls['text_template']?.hasError(validation.type)\">\r\n                        {{ validation.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <!-- end text_template -->\r\n\r\n\r\n</form>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/mail-templates/mail-templates-list/mail-templates-list.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mail-templates/mail-templates-list/mail-templates-list.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMailTemplatesMailTemplatesListMailTemplatesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'CORREOS PLANTILLAS' | titlecase}}\"\r\n                 primaryLink=\"mail-templates/create\"\r\n                 primaryText=\"Crear {{'CORREOS PLANTILLAS' | lowercase}}\"\r\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\r\n\r\n<ion-content id=\"pages-content\">\r\n\r\n    <ion-searchbar showCancelButton=\"focus\"\r\n                       [cancelButtonText]=\"'Cancelar'\"\r\n                       [placeholder]=\"'Buscar ' + ('CORREOS PLANTILLAS' | lowercase )\"\r\n                       (ionCancel)=\"this.mailTemplatesService.searchValue = ''; mailTemplatesService.getMailTemplates()\"\r\n                       (keyup.enter)=\"mailTemplatesService.getMailTemplates()\"\r\n                       [(ngModel)]=\"mailTemplatesService.searchValue\"></ion-searchbar>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && mailTemplatesService.mailTemplates?.length\">\r\n        <ion-card *ngFor=\"let mailTemplate of mailTemplatesService.mailTemplates; let index = index\">\r\n            <ion-list>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'ASUNTO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ mailTemplate?.subject }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'CLASE' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ mailTemplate?.mailable }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'HTML' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ mailTemplate?.html_template | stripHtml }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'TEXTO' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">{{ mailTemplate?.text_template }}</div>\r\n                    </ion-item>\r\n                    <ion-item class=\"item-transparent\">\r\n                        <ion-label position=\"fixed\"><b>{{ 'CORREOS' | titlecase }}</b></ion-label>\r\n                        <div class=\"wrap-text\">\r\n                            <ng-container *ngIf=\"mailTemplate?.mails?.length\">\r\n                                <ng-container *ngFor=\"let mail of mailTemplate?.mails; let last = last\">\r\n                                    <a routerLink=\"/mails/{{ mail?.id }}/edit\">{{ mail?.subject }}</a><span *ngIf=\"!last\">, </span>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n                    </ion-item>\r\n            </ion-list>\r\n            <ion-footer>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/mail-templates/' + mailTemplate?.id + '/edit'\">\r\n                            <ion-icon name=\"create-outline\"></ion-icon>\r\n                            <div>Editar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"mailTemplatesService.deleteMailTemplate(mailTemplate?.id)\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            <div>Eliminar</div>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-footer>\r\n        </ion-card>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!(loading.loading | async) && !mailTemplatesService.mailTemplates?.length\">\r\n        <ion-item>\r\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label><h2>No se encontraron {{'CORREOS PLANTILLAS' | titlecase}}</h2></ion-label>\r\n            <ion-button [routerLink]=\"'/mail-templates/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\r\n                Crear {{'CORREOS PLANTILLAS' | titlecase}}\r\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </ng-container>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"lists-footer\">\r\n    <ion-row *ngIf=\"mailTemplatesService.meta\">\r\n        <ion-col class=\"ion-text-center\" size=\"12\">\r\n            <ion-button (click)=\"mailTemplatesService.getMailTemplates(mailTemplatesService.meta.current_page - 1)\"\r\n                        [disabled]=\"mailTemplatesService.meta.current_page == 1\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{mailTemplatesService.meta.current_page}}\r\n                /{{mailTemplatesService.meta.last_page}} {{mailTemplatesService.meta.from}}-{{mailTemplatesService.meta.to}}\r\n                /{{mailTemplatesService.meta.total}} </ion-button>\r\n            <ion-button (click)=\"mailTemplatesService.getMailTemplates(mailTemplatesService.meta.current_page + 1)\"\r\n                        [disabled]=\"mailTemplatesService.meta.current_page == mailTemplatesService.meta.last_page\"\r\n                        fill=\"clear\">\r\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/mail-templates/mail-templates.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mail-templates/mail-templates.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMailTemplatesMailTemplatesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"CORREOS PLANTILLAS\"></app-main-header>\r\n\r\n<ion-content>\r\n\r\n        <ion-row>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/mail-templates/list\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Listar {{ 'CORREOS PLANTILLAS'  | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-card routerLink=\"/mail-templates/create\">\r\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\r\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\r\n                    </div>\r\n                    <ion-card-header>\r\n                        <ion-card-subtitle class=\"ion-text-center\">\r\n                            Crear {{ 'CORREOS PLANTILLAS' | titlecase }}\r\n                        </ion-card-subtitle>\r\n                    </ion-card-header>\r\n\r\n                </ion-card>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/mail-templates/mail-templates-create/mail-templates-create.component.scss":
    /*!*******************************************************************************************!*\
      !*** ./src/app/mail-templates/mail-templates-create/mail-templates-create.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMailTemplatesMailTemplatesCreateMailTemplatesCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haWwtdGVtcGxhdGVzL21haWwtdGVtcGxhdGVzLWNyZWF0ZS9tYWlsLXRlbXBsYXRlcy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/mail-templates/mail-templates-create/mail-templates-create.component.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/mail-templates/mail-templates-create/mail-templates-create.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: MailTemplatesCreateComponent */

    /***/
    function srcAppMailTemplatesMailTemplatesCreateMailTemplatesCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailTemplatesCreateComponent", function () {
        return MailTemplatesCreateComponent;
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


      var _mail_templates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../mail-templates.service */
      "./src/app/mail-templates/mail-templates.service.ts");
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

      var MailTemplatesCreateComponent = /*#__PURE__*/function () {
        function MailTemplatesCreateComponent(mailTemplatesService, route, platform, splitPanel) {
          _classCallCheck(this, MailTemplatesCreateComponent);

          this.mailTemplatesService = mailTemplatesService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.formValid = false;
        }

        _createClass(MailTemplatesCreateComponent, [{
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

            this.mailTemplateForm.mailTemplatesForm.valueChanges.subscribe(function (data) {
              _this.mailTemplatesService.mailTemplatesFormValid.next(_this.mailTemplateForm.mailTemplatesForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.mailTemplatesService.createMailTemplate();
            this.mailTemplatesService.mailTemplate = {};
          }
        }]);

        return MailTemplatesCreateComponent;
      }();

      MailTemplatesCreateComponent.ctorParameters = function () {
        return [{
          type: _mail_templates_service__WEBPACK_IMPORTED_MODULE_2__["MailTemplatesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      MailTemplatesCreateComponent.propDecorators = {
        mailTemplateForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['mailTemplateForm']
        }]
      };
      MailTemplatesCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mail-templates-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./mail-templates-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/mail-templates/mail-templates-create/mail-templates-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./mail-templates-create.component.scss */
        "./src/app/mail-templates/mail-templates-create/mail-templates-create.component.scss"))["default"]]
      })], MailTemplatesCreateComponent);
      /***/
    },

    /***/
    "./src/app/mail-templates/mail-templates-duplicate/mail-templates-duplicate.component.scss":
    /*!*************************************************************************************************!*\
      !*** ./src/app/mail-templates/mail-templates-duplicate/mail-templates-duplicate.component.scss ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMailTemplatesMailTemplatesDuplicateMailTemplatesDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haWwtdGVtcGxhdGVzL21haWwtdGVtcGxhdGVzLWR1cGxpY2F0ZS9tYWlsLXRlbXBsYXRlcy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/mail-templates/mail-templates-duplicate/mail-templates-duplicate.component.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/mail-templates/mail-templates-duplicate/mail-templates-duplicate.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: MailTemplatesDuplicateComponent */

    /***/
    function srcAppMailTemplatesMailTemplatesDuplicateMailTemplatesDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailTemplatesDuplicateComponent", function () {
        return MailTemplatesDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MailTemplatesDuplicateComponent = /*#__PURE__*/function () {
        function MailTemplatesDuplicateComponent() {
          _classCallCheck(this, MailTemplatesDuplicateComponent);
        }

        _createClass(MailTemplatesDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MailTemplatesDuplicateComponent;
      }();

      MailTemplatesDuplicateComponent.ctorParameters = function () {
        return [];
      };

      MailTemplatesDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mail-templates-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./mail-templates-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/mail-templates/mail-templates-duplicate/mail-templates-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./mail-templates-duplicate.component.scss */
        "./src/app/mail-templates/mail-templates-duplicate/mail-templates-duplicate.component.scss"))["default"]]
      })], MailTemplatesDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/mail-templates/mail-templates-edit/mail-templates-edit.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/mail-templates/mail-templates-edit/mail-templates-edit.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMailTemplatesMailTemplatesEditMailTemplatesEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haWwtdGVtcGxhdGVzL21haWwtdGVtcGxhdGVzLWVkaXQvbWFpbC10ZW1wbGF0ZXMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/mail-templates/mail-templates-edit/mail-templates-edit.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/mail-templates/mail-templates-edit/mail-templates-edit.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: MailTemplatesEditComponent */

    /***/
    function srcAppMailTemplatesMailTemplatesEditMailTemplatesEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailTemplatesEditComponent", function () {
        return MailTemplatesEditComponent;
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


      var _mail_templates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../mail-templates.service */
      "./src/app/mail-templates/mail-templates.service.ts");
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

      var MailTemplatesEditComponent = /*#__PURE__*/function () {
        function MailTemplatesEditComponent(mailTemplatesService, route, platform, splitPanel) {
          _classCallCheck(this, MailTemplatesEditComponent);

          this.mailTemplatesService = mailTemplatesService;
          this.route = route;
          this.platform = platform;
          this.splitPanel = splitPanel;
          this.id = null;
          this.model = null;
        }

        _createClass(MailTemplatesEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.mailTemplatesService.editMailTemplate(this.id);
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

            this.mailTemplateForm.mailTemplatesForm.valueChanges.subscribe(function (data) {
              _this2.mailTemplatesService.mailTemplatesFormValid.next(_this2.mailTemplateForm.mailTemplatesForm.valid);
            });
          }
        }]);

        return MailTemplatesEditComponent;
      }();

      MailTemplatesEditComponent.ctorParameters = function () {
        return [{
          type: _mail_templates_service__WEBPACK_IMPORTED_MODULE_2__["MailTemplatesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_5__["SplitPanelService"]
        }];
      };

      MailTemplatesEditComponent.propDecorators = {
        mailTemplateForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['mailTemplateForm']
        }]
      };
      MailTemplatesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mail-templates-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./mail-templates-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/mail-templates/mail-templates-edit/mail-templates-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./mail-templates-edit.component.scss */
        "./src/app/mail-templates/mail-templates-edit/mail-templates-edit.component.scss"))["default"]]
      })], MailTemplatesEditComponent);
      /***/
    },

    /***/
    "./src/app/mail-templates/mail-templates-form/mail-templates-form.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/mail-templates/mail-templates-form/mail-templates-form.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMailTemplatesMailTemplatesFormMailTemplatesFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haWwtdGVtcGxhdGVzL21haWwtdGVtcGxhdGVzLWZvcm0vbWFpbC10ZW1wbGF0ZXMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/mail-templates/mail-templates-form/mail-templates-form.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/mail-templates/mail-templates-form/mail-templates-form.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: MailTemplatesFormComponent */

    /***/
    function srcAppMailTemplatesMailTemplatesFormMailTemplatesFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailTemplatesFormComponent", function () {
        return MailTemplatesFormComponent;
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


      var _mail_templates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../mail-templates.service */
      "./src/app/mail-templates/mail-templates.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var MailTemplatesFormComponent = /*#__PURE__*/function () {
        function MailTemplatesFormComponent(mailTemplatesService, toTitlecase) {
          _classCallCheck(this, MailTemplatesFormComponent);

          this.mailTemplatesService = mailTemplatesService;
          this.toTitlecase = toTitlecase;
          this.model = {};
          this.validationMessages = {
            'subject': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('ASUNTO') + ' es obligatorio.'
            }],
            'mailable': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('CLASE') + ' es obligatorio.'
            }],
            'html_template': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('HTML') + ' es obligatorio.'
            }],
            'text_template': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('TEXTO') + ' es obligatorio.'
            }],
            'mail_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('CORREOS') + ' es obligatorio.'
            }]
          };
        }

        _createClass(MailTemplatesFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // set setMailIds

        }, {
          key: "setMailIds",
          value: function setMailIds(event) {
            var mailIds = null;

            if (event.value.length) {
              mailIds = [];

              for (var i = 0; i < event.value.length; i++) {
                mailIds.push(event.value[i].id);
              }
            }

            this.mailTemplatesService.mailTemplate.mail_ids = mailIds;
          }
        }]);

        return MailTemplatesFormComponent;
      }();

      MailTemplatesFormComponent.ctorParameters = function () {
        return [{
          type: _mail_templates_service__WEBPACK_IMPORTED_MODULE_2__["MailTemplatesService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      MailTemplatesFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        mailTemplatesForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['mailTemplatesForm']
        }]
      };
      MailTemplatesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mail-templates-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./mail-templates-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/mail-templates/mail-templates-form/mail-templates-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./mail-templates-form.component.scss */
        "./src/app/mail-templates/mail-templates-form/mail-templates-form.component.scss"))["default"]]
      })], MailTemplatesFormComponent);
      /***/
    },

    /***/
    "./src/app/mail-templates/mail-templates-list/mail-templates-list.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/mail-templates/mail-templates-list/mail-templates-list.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMailTemplatesMailTemplatesListMailTemplatesListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haWwtdGVtcGxhdGVzL21haWwtdGVtcGxhdGVzLWxpc3QvbWFpbC10ZW1wbGF0ZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/mail-templates/mail-templates-list/mail-templates-list.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/mail-templates/mail-templates-list/mail-templates-list.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: MailTemplatesListComponent */

    /***/
    function srcAppMailTemplatesMailTemplatesListMailTemplatesListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailTemplatesListComponent", function () {
        return MailTemplatesListComponent;
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


      var _mail_templates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../mail-templates.service */
      "./src/app/mail-templates/mail-templates.service.ts");
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

      var MailTemplatesListComponent = /*#__PURE__*/function () {
        function MailTemplatesListComponent(mailTemplatesService, api, loading, splitPanel) {
          _classCallCheck(this, MailTemplatesListComponent);

          this.mailTemplatesService = mailTemplatesService;
          this.api = api;
          this.loading = loading;
          this.splitPanel = splitPanel;
        }

        _createClass(MailTemplatesListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.mailTemplatesService.getMailTemplates();
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

        return MailTemplatesListComponent;
      }();

      MailTemplatesListComponent.ctorParameters = function () {
        return [{
          type: _mail_templates_service__WEBPACK_IMPORTED_MODULE_2__["MailTemplatesService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_6__["SplitPanelService"]
        }];
      };

      MailTemplatesListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      MailTemplatesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mail-templates-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./mail-templates-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/mail-templates/mail-templates-list/mail-templates-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./mail-templates-list.component.scss */
        "./src/app/mail-templates/mail-templates-list/mail-templates-list.component.scss"))["default"]]
      })], MailTemplatesListComponent);
      /***/
    },

    /***/
    "./src/app/mail-templates/mail-templates-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/mail-templates/mail-templates-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: MailTemplatesPageRoutingModule */

    /***/
    function srcAppMailTemplatesMailTemplatesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailTemplatesPageRoutingModule", function () {
        return MailTemplatesPageRoutingModule;
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


      var _mail_templates_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mail-templates.page */
      "./src/app/mail-templates/mail-templates.page.ts");
      /* harmony import */


      var _mail_templates_edit_mail_templates_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./mail-templates-edit/mail-templates-edit.component */
      "./src/app/mail-templates/mail-templates-edit/mail-templates-edit.component.ts");
      /* harmony import */


      var _mail_templates_create_mail_templates_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mail-templates-create/mail-templates-create.component */
      "./src/app/mail-templates/mail-templates-create/mail-templates-create.component.ts");
      /* harmony import */


      var _mail_templates_list_mail_templates_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mail-templates-list/mail-templates-list.component */
      "./src/app/mail-templates/mail-templates-list/mail-templates-list.component.ts");

      var routes = [{
        path: '',
        component: _mail_templates_page__WEBPACK_IMPORTED_MODULE_3__["MailTemplatesPage"]
      }, {
        path: 'list',
        component: _mail_templates_list_mail_templates_list_component__WEBPACK_IMPORTED_MODULE_6__["MailTemplatesListComponent"]
      }, {
        path: 'create',
        component: _mail_templates_create_mail_templates_create_component__WEBPACK_IMPORTED_MODULE_5__["MailTemplatesCreateComponent"]
      }, {
        path: ':id/edit',
        component: _mail_templates_edit_mail_templates_edit_component__WEBPACK_IMPORTED_MODULE_4__["MailTemplatesEditComponent"]
      }];

      var MailTemplatesPageRoutingModule = function MailTemplatesPageRoutingModule() {
        _classCallCheck(this, MailTemplatesPageRoutingModule);
      };

      MailTemplatesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MailTemplatesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/mail-templates/mail-templates.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/mail-templates/mail-templates.module.ts ***!
      \*********************************************************/

    /*! exports provided: MailTemplatesPageModule */

    /***/
    function srcAppMailTemplatesMailTemplatesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailTemplatesPageModule", function () {
        return MailTemplatesPageModule;
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


      var _mail_templates_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mail-templates-routing.module */
      "./src/app/mail-templates/mail-templates-routing.module.ts");
      /* harmony import */


      var _mail_templates_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./mail-templates.page */
      "./src/app/mail-templates/mail-templates.page.ts");
      /* harmony import */


      var _mail_templates_list_mail_templates_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./mail-templates-list/mail-templates-list.component */
      "./src/app/mail-templates/mail-templates-list/mail-templates-list.component.ts");
      /* harmony import */


      var _mail_templates_create_mail_templates_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./mail-templates-create/mail-templates-create.component */
      "./src/app/mail-templates/mail-templates-create/mail-templates-create.component.ts");
      /* harmony import */


      var _mail_templates_duplicate_mail_templates_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./mail-templates-duplicate/mail-templates-duplicate.component */
      "./src/app/mail-templates/mail-templates-duplicate/mail-templates-duplicate.component.ts");
      /* harmony import */


      var _mail_templates_edit_mail_templates_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./mail-templates-edit/mail-templates-edit.component */
      "./src/app/mail-templates/mail-templates-edit/mail-templates-edit.component.ts");
      /* harmony import */


      var _mail_templates_form_mail_templates_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./mail-templates-form/mail-templates-form.component */
      "./src/app/mail-templates/mail-templates-form/mail-templates-form.component.ts");

      var MailTemplatesPageModule = function MailTemplatesPageModule() {
        _classCallCheck(this, MailTemplatesPageModule);
      };

      MailTemplatesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _mail_templates_routing_module__WEBPACK_IMPORTED_MODULE_6__["MailTemplatesPageRoutingModule"]],
        declarations: [_mail_templates_page__WEBPACK_IMPORTED_MODULE_7__["MailTemplatesPage"], _mail_templates_list_mail_templates_list_component__WEBPACK_IMPORTED_MODULE_8__["MailTemplatesListComponent"], _mail_templates_create_mail_templates_create_component__WEBPACK_IMPORTED_MODULE_9__["MailTemplatesCreateComponent"], _mail_templates_duplicate_mail_templates_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["MailTemplatesDuplicateComponent"], _mail_templates_edit_mail_templates_edit_component__WEBPACK_IMPORTED_MODULE_11__["MailTemplatesEditComponent"], _mail_templates_form_mail_templates_form_component__WEBPACK_IMPORTED_MODULE_12__["MailTemplatesFormComponent"]]
      })], MailTemplatesPageModule);
      /***/
    },

    /***/
    "./src/app/mail-templates/mail-templates.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/mail-templates/mail-templates.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMailTemplatesMailTemplatesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haWwtdGVtcGxhdGVzL21haWwtdGVtcGxhdGVzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/mail-templates/mail-templates.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/mail-templates/mail-templates.page.ts ***!
      \*******************************************************/

    /*! exports provided: MailTemplatesPage */

    /***/
    function srcAppMailTemplatesMailTemplatesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailTemplatesPage", function () {
        return MailTemplatesPage;
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

      var MailTemplatesPage = /*#__PURE__*/function () {
        function MailTemplatesPage(splitPanel) {
          _classCallCheck(this, MailTemplatesPage);

          this.splitPanel = splitPanel;
        }

        _createClass(MailTemplatesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(true);
          }
        }]);

        return MailTemplatesPage;
      }();

      MailTemplatesPage.ctorParameters = function () {
        return [{
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_2__["SplitPanelService"]
        }];
      };

      MailTemplatesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mail-templates',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./mail-templates.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/mail-templates/mail-templates.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./mail-templates.page.scss */
        "./src/app/mail-templates/mail-templates.page.scss"))["default"]]
      })], MailTemplatesPage);
      /***/
    },

    /***/
    "./src/app/mail-templates/mail-templates.service.ts":
    /*!**********************************************************!*\
      !*** ./src/app/mail-templates/mail-templates.service.ts ***!
      \**********************************************************/

    /*! exports provided: MailTemplatesService */

    /***/
    function srcAppMailTemplatesMailTemplatesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailTemplatesService", function () {
        return MailTemplatesService;
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

      var MailTemplatesService = /*#__PURE__*/function () {
        function MailTemplatesService(api, alert, toast, router, navigation) {
          _classCallCheck(this, MailTemplatesService);

          this.api = api;
          this.alert = alert;
          this.toast = toast;
          this.router = router;
          this.navigation = navigation;
          this.mailTemplatesUrl = 'mail-templates';
          this.mailTemplatesFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
          this.mailTemplates = [];
          this.mailTemplate = {};
          this.mailTemplateLists = {};
          this.searchValue = '';
          this.perPage = 10;
          this.meta = null;
          this.page = 1;
          this.pagesContent = document.getElementById('pages-content');
        }

        _createClass(MailTemplatesService, [{
          key: "getMailTemplates",
          value: function getMailTemplates() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.mailTemplatesUrl + '?page=' + page + '&perPage=' + perPage + '&q[subject:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.mailTemplates = res.data;
              _this3.mailTemplateLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editMailTemplate",
          value: function editMailTemplate(id) {
            var _this4 = this;

            this.api.get(this.mailTemplatesUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.mailTemplate = res.data.model;
              _this4.mailTemplateLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updateMailTemplate",
          value: function updateMailTemplate() {
            var _this5 = this;

            this.api.put(this.mailTemplatesUrl + '/' + this.mailTemplate.id, {
              model: this.mailTemplate,
              pivots: {}
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getMailTemplates(1);
            });
          }
        }, {
          key: "createMailTemplate",
          value: function createMailTemplate() {
            var _this6 = this;

            this.api.get(this.mailTemplatesUrl + '/create').subscribe(function (res) {
              _this6.mailTemplate = {};
              _this6.mailTemplateLists = res.lists;
            });
          }
        }, {
          key: "storeMailTemplate",
          value: function storeMailTemplate() {
            var _this7 = this;

            this.api.post(this.mailTemplatesUrl, {
              model: this.mailTemplate,
              pivots: {}
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getMailTemplates(1);
            });
          }
        }, {
          key: "deleteMailTemplate",
          value: function deleteMailTemplate(id) {
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

                      this.api["delete"](this.mailTemplatesUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getMailTemplates(1);
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

        return MailTemplatesService;
      }();

      MailTemplatesService.ctorParameters = function () {
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

      MailTemplatesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MailTemplatesService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=mail-templates-mail-templates-module-es5.js.map