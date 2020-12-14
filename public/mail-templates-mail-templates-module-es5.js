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


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/mail-templates'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"mailTemplatesService.storeMailTemplate()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!mailTemplatesService.mailTemplatesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'CORREOS PLANTILLAS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-mail-templates-form #mailTemplateForm [model]=\"mailTemplatesService.mailTemplate\"></app-mail-templates-form>\n    </ion-card>\n\n</ion-content>\n";
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


      __webpack_exports__["default"] = "<p>\n  MailTemplates duplicate works!\n</p>\n";
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


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/mail-templates'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"mailTemplatesService.updateMailTemplate()\"\n                        color=\"success\"\n                        fill=\"clear\"\n                        [disabled]=\"!mailTemplatesService.mailTemplatesFormValid.value\">\n                        <ng-container *ngIf=\"!platform.is('mobile')\">Guardar</ng-container>\n                <ion-icon slot=\"end\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'CORREOS PLANTILLAS' | titlecase}}: {{ mailTemplatesService.mailTemplate?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-mail-templates-form #mailTemplateForm [model]=\"mailTemplatesService.mailTemplate\"></app-mail-templates-form>\n    </ion-card>\n\n</ion-content>\n";
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


      __webpack_exports__["default"] = "<form #mailTemplatesForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- mail_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'CORREOS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"mail_ids\"\n                          id=\"mail_ids-field\"\n                          [(ngModel)]=\"model.mails\"\n                          [items]=\"mailTemplatesService.mailTemplateLists.Mail\"\n                          itemValueField=\"id\"\n                          itemTextField=\"subject\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('CORREOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('CORREOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setMailIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.mail_ids\">\n            <div class=\"error-message\" *ngIf=\"mailTemplatesForm.form.controls['mail_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end mail_ids -->\n\n\n            <!-- subject -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'ASUNTO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.subject\"\n                            type=\"text\"\n                            name=\"subject\"\n                            id=\"subject-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.subject\">\n                    <div class=\"error-message\" *ngIf=\"mailTemplatesForm.form.controls['subject']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end subject -->\n\n\n            <!-- mailable -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'CLASE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.mailable\"\n                            type=\"text\"\n                            name=\"mailable\"\n                            id=\"mailable-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.mailable\">\n                    <div class=\"error-message\" *ngIf=\"mailTemplatesForm.form.controls['mailable']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end mailable -->\n\n\n            <!-- html_template -->\n            <ion-item class=\"item-transparent\">\n                <ion-label position=\"stacked\" style=\"font-size: 1rem;\">{{ 'HTML' | titlecase }}</ion-label>\n                <input [ngxSummernote]\n                       name=\"html_template\"\n                       id=\"html_template-field\"\n                       [(ngModel)]=\"model.html_template\">\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.html_template\">\n                    <div class=\"error-message\" *ngIf=\"mailTemplatesForm.form.controls['html_template']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end html_template -->\n\n\n            <!-- text_template -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'TEXTO' | titlecase }}</ion-label>\n                <ion-textarea [(ngModel)]=\"model.text_template\"\n                              name=\"text_template\"\n                              id=\"text_template-field\"\n                              rows=\"6\"\n                              placeholder=\"\"></ion-textarea>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.text_template\">\n                    <div class=\"error-message\" *ngIf=\"mailTemplatesForm.form.controls['text_template']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end text_template -->\n\n\n</form>\n";
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


      __webpack_exports__["default"] = "<app-main-header title=\"{{'CORREOS PLANTILLAS' | titlecase}}\"\n                 primaryLink=\"mail-templates/create\"\n                 primaryText=\"Crear {{'CORREOS PLANTILLAS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('CORREOS PLANTILLAS' | lowercase )\"\n                       (ionCancel)=\"this.mailTemplatesService.searchValue = ''; mailTemplatesService.getMailTemplates()\"\n                       (keyup.enter)=\"mailTemplatesService.getMailTemplates()\"\n                       [(ngModel)]=\"mailTemplatesService.searchValue\"></ion-searchbar>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && mailTemplatesService.mailTemplates?.length\">\n        <ion-card *ngFor=\"let mailTemplate of mailTemplatesService.mailTemplates; let index = index\">\n            <ion-list>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'ASUNTO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ mailTemplate?.subject }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CLASE' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ mailTemplate?.mailable }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'HTML' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ mailTemplate?.html_template | stripHtml }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'TEXTO' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">{{ mailTemplate?.text_template }}</div>\n                    </ion-item>\n                    <ion-item class=\"item-transparent\">\n                        <ion-label position=\"fixed\"><b>{{ 'CORREOS' | titlecase }}</b></ion-label>\n                        <div class=\"wrap-text\">\n                            <ng-container *ngIf=\"mailTemplate?.mails?.length\">\n                                <ng-container *ngFor=\"let mail of mailTemplate?.mails; let last = last\">\n                                    <a routerLink=\"/mails/{{ mail?.id }}/edit\">{{ mail?.subject }}</a><span *ngIf=\"!last\">, </span>\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </ion-item>\n            </ion-list>\n            <ion-footer>\n                <ion-row>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"success\" size=\"small\" fill=\"clear\" [routerLink]=\"'/mail-templates/' + mailTemplate?.id + '/edit'\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                            <div>Editar</div>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col class=\"ion-text-center\">\n                        <ion-button color=\"danger\" size=\"small\" fill=\"clear\" (click)=\"mailTemplatesService.deleteMailTemplate(mailTemplate?.id)\">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                            <div>Eliminar</div>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-footer>\n        </ion-card>\n    </ng-container>\n\n    <ng-container *ngIf=\"!(loading.loading | async) && !mailTemplatesService.mailTemplates?.length\">\n        <ion-item>\n            <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n            <ion-label><h2>No se encontraron {{'CORREOS PLANTILLAS' | titlecase}}</h2></ion-label>\n            <ion-button [routerLink]=\"'/mail-templates/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                Crear {{'CORREOS PLANTILLAS' | titlecase}}\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ng-container>\n\n</ion-content>\n\n<ion-footer class=\"lists-footer\">\n    <ion-row *ngIf=\"mailTemplatesService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"mailTemplatesService.getMailTemplates(mailTemplatesService.meta.current_page - 1)\"\n                        [disabled]=\"mailTemplatesService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{mailTemplatesService.meta.current_page}}\n                /{{mailTemplatesService.meta.last_page}} {{mailTemplatesService.meta.from}}-{{mailTemplatesService.meta.to}}\n                /{{mailTemplatesService.meta.total}} </ion-button>\n            <ion-button (click)=\"mailTemplatesService.getMailTemplates(mailTemplatesService.meta.current_page + 1)\"\n                        [disabled]=\"mailTemplatesService.meta.current_page == mailTemplatesService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n";
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


      __webpack_exports__["default"] = "<app-main-header title=\"CORREOS PLANTILLAS\"></app-main-header>\n\n<ion-content>\n\n        <ion-row>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/mail-templates/list\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"list-circle-outline\" color=\"primary\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Listar {{ 'CORREOS PLANTILLAS'  | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n            <ion-col size-md=\"3\" size-sm=\"6\" size-xs=\"12\">\n                <ion-card routerLink=\"/mail-templates/create\">\n                    <div style=\"height: 120px; width: 100%; display: flex; align-items: center; justify-content: center;\">\n                        <ion-icon name=\"add-circle-outline\" color=\"success\" class=\"icon-m\"></ion-icon>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-subtitle class=\"ion-text-center\">\n                            Crear {{ 'CORREOS PLANTILLAS' | titlecase }}\n                        </ion-card-subtitle>\n                    </ion-card-header>\n\n                </ion-card>\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>\n";
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

      var MailTemplatesCreateComponent = /*#__PURE__*/function () {
        function MailTemplatesCreateComponent(mailTemplatesService, route, platform) {
          _classCallCheck(this, MailTemplatesCreateComponent);

          this.mailTemplatesService = mailTemplatesService;
          this.route = route;
          this.platform = platform;
          this.id = null;
          this.formValid = false;
        }

        _createClass(MailTemplatesCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.clearPosts();
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

      var MailTemplatesEditComponent = /*#__PURE__*/function () {
        function MailTemplatesEditComponent(mailTemplatesService, route, platform) {
          _classCallCheck(this, MailTemplatesEditComponent);

          this.mailTemplatesService = mailTemplatesService;
          this.route = route;
          this.platform = platform;
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

      var MailTemplatesListComponent = /*#__PURE__*/function () {
        function MailTemplatesListComponent(mailTemplatesService, api, loading) {
          _classCallCheck(this, MailTemplatesListComponent);

          this.mailTemplatesService = mailTemplatesService;
          this.api = api;
          this.loading = loading;
        }

        _createClass(MailTemplatesListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.mailTemplatesService.getMailTemplates();
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

      var MailTemplatesPage = /*#__PURE__*/function () {
        function MailTemplatesPage() {
          _classCallCheck(this, MailTemplatesPage);
        }

        _createClass(MailTemplatesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MailTemplatesPage;
      }();

      MailTemplatesPage.ctorParameters = function () {
        return [];
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