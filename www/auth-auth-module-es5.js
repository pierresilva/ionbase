(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthAuthPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content fullscreen>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col class=\"ion-align-self-center\">\r\n                <ion-button [routerLink]=\"['/registration']\" expand=\"block\" color=\"primary\">Register</ion-button>\r\n\r\n                <span class=\"divider line one-line\">or</span>\r\n\r\n                <span class=\"already\">Already a user?</span>\r\n\r\n                <ion-button [routerLink]=\"['/login']\" expand=\"block\" color=\"danger\">Sign In</ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content no-bounce>\r\n    <div class=\"login-background\"></div>\r\n    <ion-grid class=\"ion-no-padding\">\r\n        <ion-row class=\"ion-justify-content-center ion-no-padding\">\r\n            <ion-col size-sm=\"8\"\r\n                     size-lg=\"6\"\r\n                     size-xl=\"4\"\r\n                     class=\"ion-align-self-center ion-no-padding\">\r\n                <div class=\"login-header ion-text-center\">\r\n                    <h1 [hidden]=\"true\">{{environment.name}}</h1>\r\n\r\n                    <img [routerLink]=\"'/'\" src=\"assets/images/NoahApp/logo-light-square.png\"\r\n                         style=\"max-height: 120px;\">\r\n\r\n                    <h6 style=\"margin-bottom: 0px;\">v-{{ version }}</h6>\r\n                </div>\r\n                <div class=\"login-container\">\r\n                    <form #loginForm=\"ngForm\"\r\n                          (ngSubmit)=\"login()\"\r\n                          novalidate\r\n                          autocomplete=\"off\">\r\n                        <ion-list>\r\n                            <ion-list-header>Ingresar</ion-list-header>\r\n                            <ion-item lines=\"inset\">\r\n                                <ion-label color=\"medium\"\r\n                                           position=\"floating\">\r\n                                    Correo electrónico\r\n                                </ion-label>\r\n                                <ion-input type=\"text\"\r\n                                           name=\"email\"\r\n                                           id=\"email-field\"\r\n                                           email\r\n                                           required\r\n                                           [(ngModel)]=\"model.email\"\r\n                                           autocomplete=\"email\"></ion-input>\r\n                            </ion-item>\r\n                            <ion-text color=\"danger\"\r\n                                      [hidden]=\"(loginForm?.form?.controls?.email?.untouched || loginForm?.form?.controls?.email?.valid)\">\r\n                                <span class=\"ion-padding\">Correo electónico no valido</span>\r\n                            </ion-text>\r\n                            <ion-item lines=\"inset\">\r\n                                <ion-label color=\"medium\"\r\n                                           position=\"floating\">\r\n                                    Contraseña\r\n                                </ion-label>\r\n                                <ion-input type=\"password\"\r\n                                           name=\"password\"\r\n                                           id=\"password-field\"\r\n                                           required\r\n                                           minlength=\"6\"\r\n                                           maxlength=\"16\"\r\n                                           [(ngModel)]=\"model.password\"\r\n                                           autocomplete=\"password\"></ion-input>\r\n                            </ion-item>\r\n                            <ion-text color=\"danger\"\r\n                                      [hidden]=\"(loginForm?.form?.controls?.password?.untouched || loginForm?.form?.controls?.password?.valid)\">\r\n                                <span class=\"ion-padding\">Contraseña no valida</span>\r\n                            </ion-text>\r\n                            <!--<ion-item class=\"ion-padding-top\"\r\n                                      lines=\"none\">\r\n                                <ion-label>Recordarme</ion-label>\r\n                                <ion-checkbox slot=\"start\"\r\n                                              id=\"remember-field\"\r\n                                              name=\"remember\"\r\n                                              [(ngModel)]=\"model.remember\"></ion-checkbox>\r\n                            </ion-item>-->\r\n                            <div style=\"height: 1rem;\"></div>\r\n                        </ion-list>\r\n                        <div class=\"ion-padding-horizontal\">\r\n                            <ion-button\r\n                                    type=\"submit\"\r\n                                    [disabled]=\"loginForm?.form?.invalid || isLoading\"\r\n                                    color=\"primary\"\r\n                                    expand=\"block\">\r\n                                Ingresar\r\n                            </ion-button>\r\n                        </div>\r\n                        <div class=\"ion-padding-vertical ion-text-center\">\r\n                            <ion-button type=\"button\"\r\n                                        routerLink=\"/auth/register\"\r\n                                        color=\"primary\"\r\n                                        fill=\"clean\">\r\n                                Registrarse\r\n                            </ion-button>\r\n                            <ion-button type=\"button\"\r\n                                        color=\"primary\"\r\n                                        routerLink=\"/auth/password-forgot\"\r\n                                        fill=\"clean\">\r\n                                Olvidaste tu contraseña?\r\n                            </ion-button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/logout/logout.component.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/logout/logout.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthLogoutLogoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                Saliendo del sistema...\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/password-forgot/password-forgot.component.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/password-forgot/password-forgot.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthPasswordForgotPasswordForgotComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content no-bounce>\r\n    <div class=\"login-background\"></div>\r\n    <ion-grid class=\"ion-no-padding\">\r\n        <ion-row class=\"ion-justify-content-center ion-no-padding\">\r\n            <ion-col size-sm=\"8\"\r\n                     size-lg=\"6\"\r\n                     size-xl=\"4\"\r\n                     class=\"ion-align-self-center ion-no-padding\">\r\n                <div class=\"login-header ion-text-center\">\r\n                    <h1 [hidden]=\"true\">{{environment.name}}</h1>\r\n                    <a [routerLink]=\"'/landing'\">\r\n                        <img src=\"assets/images/NoahApp/logo-light-square.png\"\r\n                             style=\"max-height: 120px;\">\r\n                    </a>\r\n\r\n                    <h6 style=\"margin-bottom: 0px;\">v-{{ version }}</h6>\r\n                </div>\r\n                <div class=\"login-container\"\r\n                     *ngIf=\"resetOk\">\r\n                    <ion-row class=\"ion-padding-horizontal\">\r\n                        <ion-col class=\"ion-text-center\">\r\n                            <ion-icon name=\"checkmark-circle-outline\"\r\n                                      color=\"success\"\r\n                                      class=\"icon-m ion-padding-vertical\"></ion-icon>\r\n                            <h2>Soliciaste restablecer tu contraseña!</h2>\r\n                            <p class=\"ion-text-justify\">Por favor, confirma en tu correo electrónico el enlace que te\r\n                                                        hemos enviado para restablecer tu contraseña.\r\n                            </p>\r\n                            <p class=\"ion-text-justify\">Si en cinco minútos no has recibido el email haz click en el\r\n                                                        siguiente enlace para volverlo a intentar.\r\n                            </p>\r\n                            <ion-button fill=\"clear\"\r\n                                        (click)=\"resetOk = false\">Volver a intentar\r\n                            </ion-button>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </div>\r\n                <div class=\"login-container\"\r\n                     *ngIf=\"!resetOk\">\r\n                    <form #forgotForm=\"ngForm\"\r\n                          (ngSubmit)=\"passwordRecoverRequest()\"\r\n                          novalidate\r\n                          autocomplete=\"off\">\r\n                        <ion-list>\r\n                            <ion-list-header>Olvidaste tu contraseña?</ion-list-header>\r\n                            <ion-item lines=\"none\">\r\n                                <div class=\"ion-padding-vertical ion-text-justify\">\r\n                                    Si olvidaste tu contraseña ingresa tu correo electrónico para que te enviemos un\r\n                                    enlace para poder restablecerla.\r\n                                </div>\r\n                            </ion-item>\r\n                            <ion-item lines=\"inset\">\r\n                                <ion-label color=\"medium\"\r\n                                           position=\"floating\">\r\n                                    Correo electrónico\r\n                                </ion-label>\r\n                                <ion-input type=\"text\"\r\n                                           name=\"email\"\r\n                                           id=\"email-field\"\r\n                                           email\r\n                                           required\r\n                                           [(ngModel)]=\"model.email\"\r\n                                           autocomplete=\"email\"></ion-input>\r\n                            </ion-item>\r\n                            <ion-text color=\"danger\"\r\n                                      [hidden]=\"(forgotForm?.form?.controls?.email?.untouched || forgotForm?.form?.controls?.email?.valid)\">\r\n                                <span class=\"ion-padding\">Correo electónico no valido</span>\r\n                            </ion-text>\r\n                        </ion-list>\r\n                        <div style=\"height: 1rem;\"></div>\r\n                        <div class=\"ion-padding-horizontal\">\r\n                            <ion-button type=\"submit\"\r\n                                        [disabled]=\"forgotForm?.form?.invalid || isLoading\"\r\n                                        color=\"primary\"\r\n                                        expand=\"block\">\r\n                                Restablecer contraseña\r\n                            </ion-button>\r\n                        </div>\r\n                        <div class=\"ion-padding-vertical ion-text-center\">\r\n                            <ion-button type=\"button\"\r\n                                        routerLink=\"/auth/login\"\r\n                                        color=\"primary\"\r\n                                        fill=\"clean\">\r\n                                Ingresar\r\n                            </ion-button>\r\n                            <ion-button type=\"button\"\r\n                                        color=\"primary\"\r\n                                        routerLink=\"/auth/register\"\r\n                                        fill=\"clean\">\r\n                                Registrarse\r\n                            </ion-button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/password-reset/password-reset.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/password-reset/password-reset.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthPasswordResetPasswordResetComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content no-bounce>\r\n    <div class=\"login-background\"></div>\r\n    <ion-grid class=\"ion-no-padding\">\r\n        <ion-row class=\"ion-justify-content-center ion-no-padding\">\r\n            <ion-col size-sm=\"8\"\r\n                     size-lg=\"6\"\r\n                     size-xl=\"4\"\r\n                     class=\"ion-align-self-center ion-no-padding\">\r\n                <div class=\"login-header ion-text-center\">\r\n                    <h1 [hidden]=\"true\">{{environment.name}}</h1>\r\n                    <a [routerLink]=\"'/landing'\">\r\n                        <img src=\"assets/images/NoahApp/logo-light-square.png\"\r\n                             style=\"max-height: 120px;\">\r\n                    </a>\r\n\r\n                    <h6 style=\"margin-bottom: 0px;\">v-{{ version }}</h6>\r\n                </div>\r\n                <div class=\"login-container\"\r\n                     *ngIf=\"!resetOk\">\r\n                    <ion-row class=\"ion-padding-horizontal\">\r\n                        <ion-col class=\"ion-text-center\">\r\n                            <ion-icon name=\"close-circle-outline\"\r\n                                      color=\"danger\"\r\n                                      class=\"icon-m ion-padding-vertical\"></ion-icon>\r\n                            <h2>No encontramos solicitudes validas para restablecer tu contraseña!</h2>\r\n                            <p class=\"ion-text-justify\">Por favor, confirma en tu correo electrónico el enlace que te\r\n                                                        enviamos para restablecer tu contraseña.\r\n                            </p>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </div>\r\n                <div class=\"login-container\"\r\n                     *ngIf=\"resetOk\">\r\n                    <form #resetPasswordForm=\"ngForm\"\r\n                          (ngSubmit)=\"passwordReset()\"\r\n                          novalidate\r\n                          autocomplete=\"off\">\r\n                        <ion-list>\r\n                            <ion-list-header>Restablece tu contraseña</ion-list-header>\r\n                            <ion-item lines=\"none\">\r\n                                <div class=\"ion-padding-vertical ion-text-justify\">\r\n                                    Por favor ingresa tu nueva contraseña.\r\n                                </div>\r\n                            </ion-item>\r\n                            <ion-item lines=\"inset\">\r\n                                <ion-label color=\"medium\"\r\n                                           position=\"floating\">\r\n                                    Contraseña\r\n                                </ion-label>\r\n                                <ion-input type=\"password\"\r\n                                           name=\"password\"\r\n                                           id=\"password-field\"\r\n                                           required\r\n                                           minlength=\"6\"\r\n                                           maxlength=\"16\"\r\n                                           [(ngModel)]=\"model.password\"\r\n                                           #password=\"ngModel\"\r\n                                           autocomplete=\"password\"></ion-input>\r\n                                <ion-icon slot=\"end\"\r\n                                          name=\"eye-outline\"\r\n                                          id=\"password-field-show\"\r\n                                          (click)=\"showPassword('password-field')\"></ion-icon>\r\n                            </ion-item>\r\n                            <ion-text color=\"danger\"\r\n                                      [hidden]=\"(resetPasswordForm?.form?.controls?.password?.untouched || resetPasswordForm?.form?.controls?.password?.valid)\">\r\n                                <span class=\"ion-padding\">Contraseña no valida</span>\r\n                            </ion-text>\r\n\r\n                            <ion-item lines=\"inset\">\r\n                                <ion-label color=\"medium\"\r\n                                           position=\"floating\">\r\n                                    Confirmar Contraseña\r\n                                </ion-label>\r\n                                <ion-input type=\"password\"\r\n                                           name=\"password_confirmation\"\r\n                                           id=\"password_confirmation-field\"\r\n                                           [equalTo]=\"password\"\r\n                                           required\r\n                                           minlength=\"6\"\r\n                                           maxlength=\"16\"\r\n                                           [(ngModel)]=\"model.password_confirmation\"\r\n                                           #password_confirmation=\"ngModel\"\r\n                                           autocomplete=\"password_confirmation\"></ion-input>\r\n                                <ion-icon slot=\"end\"\r\n                                          name=\"eye-outline\"\r\n                                          id=\"password_confirmation-field-show\"\r\n                                          (click)=\"showPassword('password_confirmation-field')\"></ion-icon>\r\n                            </ion-item>\r\n                            <ion-text color=\"danger\"\r\n                                      [hidden]=\"(resetPasswordForm?.form?.controls?.password_confirmation?.untouched || resetPasswordForm?.form?.controls?.password_confirmation?.valid)\">\r\n                                <span class=\"ion-padding\">Confirmación no valida</span>\r\n                            </ion-text>\r\n                        </ion-list>\r\n                        <div style=\"height: 1rem;\"></div>\r\n                        <div class=\"ion-padding-horizontal\">\r\n                            <ion-button type=\"submit\"\r\n                                        [disabled]=\"resetPasswordForm?.form?.invalid || isLoading\"\r\n                                        color=\"primary\"\r\n                                        expand=\"block\">\r\n                                Restablecer contraseña\r\n                            </ion-button>\r\n                        </div>\r\n                        <div class=\"ion-padding-vertical ion-text-center\">\r\n                            <ion-button type=\"button\"\r\n                                        routerLink=\"/auth/login\"\r\n                                        color=\"primary\"\r\n                                        fill=\"clean\">\r\n                                Ingresar\r\n                            </ion-button>\r\n                            <ion-button type=\"button\"\r\n                                        color=\"primary\"\r\n                                        routerLink=\"/auth/register\"\r\n                                        fill=\"clean\">\r\n                                Registrarse\r\n                            </ion-button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register-confirm/register-confirm.component.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register-confirm/register-confirm.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthRegisterConfirmRegisterConfirmComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\r\n  register-confirm works!\r\n</p>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content no-bounce>\r\n    <div class=\"login-background\"></div>\r\n    <ion-grid class=\"ion-no-padding\">\r\n        <ion-row class=\"ion-justify-content-center ion-no-padding\">\r\n            <ion-col size-sm=\"8\"\r\n                     size-lg=\"6\"\r\n                     size-xl=\"4\"\r\n                     class=\"ion-align-self-center ion-no-padding\">\r\n                <div class=\"login-header ion-text-center\">\r\n                    <h1 [hidden]=\"true\">{{environment.name}}</h1>\r\n\r\n                        <img [routerLink]=\"'/'\" src=\"assets/images/NoahApp/logo-light-square.png\"\r\n                             style=\"max-height: 120px;\">\r\n\r\n                    <h6 style=\"margin-bottom: 0px;\">v-{{ version }}</h6>\r\n                </div>\r\n                <div class=\"login-container\"\r\n                     *ngIf=\"registered\">\r\n                    <ion-row class=\"ion-padding-horizontal\">\r\n                        <ion-col class=\"ion-text-center\">\r\n                            <ion-icon name=\"checkmark-circle-outline\"\r\n                                      color=\"success\"\r\n                                      class=\"icon-m ion-padding-vertical\"></ion-icon>\r\n                            <h2>Te registraste con éxito!</h2>\r\n                            <p class=\"ion-text-justify\">Antes de poder continuar, por favor, confirma tu correo electrónico con el enlace que te hemos enviado.</p>\r\n                            <p class=\"ion-text-justify\">Si en cinco minútos no has recibido el email haz click en el siguiente enlace para que te enviemos otro.</p>\r\n                            <ion-button fill=\"clear\" (click)=\"resendVerificationEmail()\">Enviar email de verificación</ion-button>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </div>\r\n                <div class=\"login-container\"\r\n                     *ngIf=\"!registered\">\r\n                    <form #registerForm=\"ngForm\"\r\n                          (ngSubmit)=\"register()\"\r\n                          novalidate\r\n                          autocomplete=\"off\">\r\n                        <ion-list>\r\n                            <ion-list-header>Registrarse</ion-list-header>\r\n                            <ion-item lines=\"inset\">\r\n                                <ion-label color=\"medium\"\r\n                                           position=\"floating\">\r\n                                    Correo electrónico\r\n                                </ion-label>\r\n                                <ion-input type=\"text\"\r\n                                           name=\"email\"\r\n                                           id=\"email-field\"\r\n                                           email\r\n                                           required\r\n                                           [(ngModel)]=\"model.email\"\r\n                                           autocomplete=\"email\"></ion-input>\r\n                            </ion-item>\r\n                            <ion-text color=\"danger\"\r\n                                      [hidden]=\"(registerForm?.form?.controls?.email?.untouched || registerForm?.form?.controls?.email?.valid)\">\r\n                                <span class=\"ion-padding\">Correo electónico no valido</span>\r\n                            </ion-text>\r\n\r\n                            <ion-item lines=\"inset\">\r\n                                <ion-label color=\"medium\"\r\n                                           position=\"floating\">\r\n                                    Nombre\r\n                                </ion-label>\r\n                                <ion-input type=\"text\"\r\n                                           name=\"first_name\"\r\n                                           id=\"first_name-field\"\r\n                                           minlength=\"5\"\r\n                                           required\r\n                                           [(ngModel)]=\"model.first_name\"\r\n                                           autocomplete=\"email\"></ion-input>\r\n                            </ion-item>\r\n                            <ion-text color=\"danger\"\r\n                                      [hidden]=\"(registerForm?.form?.controls?.first_name?.untouched || registerForm?.form?.controls?.first_name?.valid)\">\r\n                                <span class=\"ion-padding\">Nombre no valido</span>\r\n                            </ion-text>\r\n\r\n                            <ion-item lines=\"inset\">\r\n                                <ion-label color=\"medium\"\r\n                                           position=\"floating\">\r\n                                    Apellido\r\n                                </ion-label>\r\n                                <ion-input type=\"text\"\r\n                                           name=\"last_name\"\r\n                                           id=\"last_name-field\"\r\n                                           minlength=\"5\"\r\n                                           required\r\n                                           [(ngModel)]=\"model.last_name\"\r\n                                           autocomplete=\"email\"></ion-input>\r\n                            </ion-item>\r\n                            <ion-text color=\"danger\"\r\n                                      [hidden]=\"(registerForm?.form?.controls?.last_name?.untouched || registerForm?.form?.controls?.last_name?.valid)\">\r\n                                <span class=\"ion-padding\">Apellido no valido</span>\r\n                            </ion-text>\r\n\r\n                            <ion-item lines=\"inset\">\r\n                                <ion-label color=\"medium\"\r\n                                           position=\"floating\">\r\n                                    Contraseña\r\n                                </ion-label>\r\n                                <ion-input type=\"password\"\r\n                                           name=\"password\"\r\n                                           id=\"password-field\"\r\n                                           required\r\n                                           minlength=\"6\"\r\n                                           maxlength=\"16\"\r\n                                           [(ngModel)]=\"model.password\"\r\n                                           #password=\"ngModel\"\r\n                                           autocomplete=\"password\"></ion-input>\r\n                                <ion-icon slot=\"end\"\r\n                                          name=\"eye-outline\"\r\n                                          id=\"password-field-show\"\r\n                                          (click)=\"showPassword('password-field')\"></ion-icon>\r\n                            </ion-item>\r\n                            <ion-text color=\"danger\"\r\n                                      [hidden]=\"(registerForm?.form?.controls?.password?.untouched || registerForm?.form?.controls?.password?.valid)\">\r\n                                <span class=\"ion-padding\">Contraseña no valida</span>\r\n                            </ion-text>\r\n\r\n                            <ion-item lines=\"inset\">\r\n                                <ion-label color=\"medium\"\r\n                                           position=\"floating\">\r\n                                    Confirmar Contraseña\r\n                                </ion-label>\r\n                                <ion-input type=\"password\"\r\n                                           name=\"password_confirmation\"\r\n                                           id=\"password_confirmation-field\"\r\n                                           [equalTo]=\"password\"\r\n                                           required\r\n                                           minlength=\"6\"\r\n                                           maxlength=\"16\"\r\n                                           [(ngModel)]=\"model.password_confirmation\"\r\n                                           #password_confirmation=\"ngModel\"\r\n                                           autocomplete=\"password_confirmation\"></ion-input>\r\n                                <ion-icon slot=\"end\"\r\n                                          name=\"eye-outline\"\r\n                                          id=\"password_confirmation-field-show\"\r\n                                          (click)=\"showPassword('password_confirmation-field')\"></ion-icon>\r\n                            </ion-item>\r\n                            <ion-text color=\"danger\"\r\n                                      [hidden]=\"(registerForm?.form?.controls?.password_confirmation?.untouched || registerForm?.form?.controls?.password_confirmation?.valid)\">\r\n                                <span class=\"ion-padding\">Confirmación no valida</span>\r\n                            </ion-text>\r\n\r\n                            <ion-item class=\"ion-padding-top\"\r\n                                      lines=\"none\">\r\n                                <ion-label>Acepto los <a (click)=\"null\">terminos y condiciones</a></ion-label>\r\n                                <ion-checkbox slot=\"start\"\r\n                                              id=\"accept_terms_conditions-field\"\r\n                                              name=\"accept_terms_conditions\"\r\n                                              required\r\n                                              [equal]=\"true\"\r\n                                              #accept_terms_conditions=\"ngModel\"\r\n                                              [(ngModel)]=\"model.accept_terms_conditions\"></ion-checkbox>\r\n                            </ion-item>\r\n                            <ion-text color=\"danger\"\r\n                                      [hidden]=\"(registerForm?.form?.controls?.accept_terms_conditions?.untouched || registerForm?.form?.controls?.accept_terms_conditions?.valid)\">\r\n                                <span class=\"ion-padding\">Debe aceptar los terminos y condiciones</span>\r\n                            </ion-text>\r\n\r\n                            <div style=\"height: 1rem;\"></div>\r\n\r\n                        </ion-list>\r\n                        <div class=\"ion-padding-horizontal\">\r\n                            <ion-button type=\"submit\"\r\n                                        color=\"primary\"\r\n                                        expand=\"block\">\r\n                                Registrarse\r\n                            </ion-button>\r\n                        </div>\r\n                        <div class=\"ion-padding-vertical ion-text-center\">\r\n                            <ion-button type=\"button\"\r\n                                        routerLink=\"/auth/login\"\r\n                                        color=\"primary\"\r\n                                        fill=\"clean\">\r\n                                Ingresar\r\n                            </ion-button>\r\n                            <ion-button type=\"button\"\r\n                                        color=\"primary\"\r\n                                        routerLink=\"/auth/password-forgot\"\r\n                                        fill=\"clean\">\r\n                                Olvidaste tu contraseña?\r\n                            </ion-button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/auth/auth-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/auth/auth-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: AuthPageRoutingModule */

    /***/
    function srcAppAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthPageRoutingModule", function () {
        return AuthPageRoutingModule;
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


      var _auth_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth.page */
      "./src/app/auth/auth.page.ts");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/auth/login/login.component.ts");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./register/register.component */
      "./src/app/auth/register/register.component.ts");
      /* harmony import */


      var _register_confirm_register_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register-confirm/register-confirm.component */
      "./src/app/auth/register-confirm/register-confirm.component.ts");
      /* harmony import */


      var _password_forgot_password_forgot_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./password-forgot/password-forgot.component */
      "./src/app/auth/password-forgot/password-forgot.component.ts");
      /* harmony import */


      var _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./password-reset/password-reset.component */
      "./src/app/auth/password-reset/password-reset.component.ts");
      /* harmony import */


      var _logout_logout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./logout/logout.component */
      "./src/app/auth/logout/logout.component.ts");

      var routes = [{
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_3__["AuthPage"]
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
      }, {
        path: 'logout',
        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_9__["LogoutComponent"]
      }, {
        path: 'login/:token',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
      }, {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
      }, {
        path: 'register-confirm/:token',
        component: _register_confirm_register_confirm_component__WEBPACK_IMPORTED_MODULE_6__["RegisterConfirmComponent"]
      }, {
        path: 'password-forgot',
        component: _password_forgot_password_forgot_component__WEBPACK_IMPORTED_MODULE_7__["PasswordForgotComponent"]
      }, {
        path: 'password-reset/:token',
        component: _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_8__["PasswordResetComponent"]
      }];

      var AuthPageRoutingModule = function AuthPageRoutingModule() {
        _classCallCheck(this, AuthPageRoutingModule);
      };

      AuthPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AuthPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/auth/auth.module.ts":
    /*!*************************************!*\
      !*** ./src/app/auth/auth.module.ts ***!
      \*************************************/

    /*! exports provided: AuthPageModule */

    /***/
    function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthPageModule", function () {
        return AuthPageModule;
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


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./auth-routing.module */
      "./src/app/auth/auth-routing.module.ts");
      /* harmony import */


      var _auth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./auth.page */
      "./src/app/auth/auth.page.ts");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/auth/login/login.component.ts");
      /* harmony import */


      var _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./password-reset/password-reset.component */
      "./src/app/auth/password-reset/password-reset.component.ts");
      /* harmony import */


      var _password_forgot_password_forgot_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./password-forgot/password-forgot.component */
      "./src/app/auth/password-forgot/password-forgot.component.ts");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./register/register.component */
      "./src/app/auth/register/register.component.ts");
      /* harmony import */


      var _register_confirm_register_confirm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./register-confirm/register-confirm.component */
      "./src/app/auth/register-confirm/register-confirm.component.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../@shared/shared.module */
      "./src/app/@shared/shared.module.ts");
      /* harmony import */


      var _logout_logout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./logout/logout.component */
      "./src/app/auth/logout/logout.component.ts");

      var AuthPageModule = function AuthPageModule() {
        _classCallCheck(this, AuthPageModule);
      };

      AuthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthPageRoutingModule"]],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_8__["PasswordResetComponent"], _password_forgot_password_forgot_component__WEBPACK_IMPORTED_MODULE_9__["PasswordForgotComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], _register_confirm_register_confirm_component__WEBPACK_IMPORTED_MODULE_11__["RegisterConfirmComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_13__["LogoutComponent"]]
      })], AuthPageModule);
      /***/
    },

    /***/
    "./src/app/auth/auth.page.scss":
    /*!*************************************!*\
      !*** ./src/app/auth/auth.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppAuthAuthPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/auth/auth.page.ts":
    /*!***********************************!*\
      !*** ./src/app/auth/auth.page.ts ***!
      \***********************************/

    /*! exports provided: AuthPage */

    /***/
    function srcAppAuthAuthPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthPage", function () {
        return AuthPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AuthPage = /*#__PURE__*/function () {
        function AuthPage() {
          _classCallCheck(this, AuthPage);
        }

        _createClass(AuthPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthPage;
      }();

      AuthPage.ctorParameters = function () {
        return [];
      };

      AuthPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./auth.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./auth.page.scss */
        "./src/app/auth/auth.page.scss"))["default"]]
      })], AuthPage);
      /***/
    },

    /***/
    "./src/app/auth/login/login.component.scss":
    /*!*************************************************!*\
      !*** ./src/app/auth/login/login.component.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAuthLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/auth/login/login.component.ts":
    /*!***********************************************!*\
      !*** ./src/app/auth/login/login.component.ts ***!
      \***********************************************/

    /*! exports provided: LoginComponent */

    /***/
    function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../@shared/services/api.service */
      "./src/app/@shared/services/api.service.ts");
      /* harmony import */


      var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../@shared/services/toast.service */
      "./src/app/@shared/services/toast.service.ts");
      /* harmony import */


      var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../@shared/services/alert.service */
      "./src/app/@shared/services/alert.service.ts");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../@shared/services/auth.service */
      "./src/app/@shared/services/auth.service.ts");
      /* harmony import */


      var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../@shared/services/split-panel.service */
      "./src/app/@shared/services/split-panel.service.ts");
      /* harmony import */


      var _shared_services_storage_local_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../@shared/services/storage-local.service */
      "./src/app/@shared/services/storage-local.service.ts");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router, route, formBuilder, platform, api, toast, alert, auth, splitPanel, storage) {
          _classCallCheck(this, LoginComponent);

          this.router = router;
          this.route = route;
          this.formBuilder = formBuilder;
          this.platform = platform;
          this.api = api;
          this.toast = toast;
          this.alert = alert;
          this.auth = auth;
          this.splitPanel = splitPanel;
          this.storage = storage;
          this.version = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version;
          this.isLoading = false;
          this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"];
          this.token = null;
          this.model = {
            email: '',
            password: '',
            remember: false
          }; // this.createForm();
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(false);

            if (this.route.snapshot.paramMap.get('token')) {
              this.toast.present('Se verifico tu correo electrónico con éxito!', 'toast-info');
            }
          }
        }, {
          key: "login",
          value: function login() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.api.syncPost(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].serverUrl + '/api/auth/login', this.model).then(function (res) {
                        _this.toast.present(res.message, 'toast-success');

                        _this.storage.set('token', res.data.access_token);

                        _this.api.syncGet(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].serverUrl + '/api/auth/profile?token=' + res.data.access_token).then(function (res) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    this.storage.set('user', res.data.user);
                                    this.storage.set('acl', res.data.acl);

                                    if (!this.auth.checkToken) {
                                      this.auth.startCheckExpirationToken();
                                    }

                                    this.router.navigateByUrl('/');

                                  case 4:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee, this);
                          }));
                        });
                      }, function (err) {});

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "isWeb",
          get: function get() {
            return !this.platform.is('cordova');
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
        }, {
          type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
        }, {
          type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_10__["SplitPanelService"]
        }, {
          type: _shared_services_storage_local_service__WEBPACK_IMPORTED_MODULE_11__["StorageLocalService"]
        }];
      };

      LoginComponent.propDecorators = {
        loginForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['loginForm']
        }]
      };
      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.component.scss */
        "./src/app/auth/login/login.component.scss"))["default"]]
      })], LoginComponent);
      /***/
    },

    /***/
    "./src/app/auth/logout/logout.component.scss":
    /*!***************************************************!*\
      !*** ./src/app/auth/logout/logout.component.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAuthLogoutLogoutComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/auth/logout/logout.component.ts":
    /*!*************************************************!*\
      !*** ./src/app/auth/logout/logout.component.ts ***!
      \*************************************************/

    /*! exports provided: LogoutComponent */

    /***/
    function srcAppAuthLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
        return LogoutComponent;
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


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../@shared/services/auth.service */
      "./src/app/@shared/services/auth.service.ts");

      var LogoutComponent = /*#__PURE__*/function () {
        function LogoutComponent(auth) {
          _classCallCheck(this, LogoutComponent);

          this.auth = auth;
        }

        _createClass(LogoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.auth.logout();
          }
        }]);

        return LogoutComponent;
      }();

      LogoutComponent.ctorParameters = function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      LogoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./logout.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/logout/logout.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./logout.component.scss */
        "./src/app/auth/logout/logout.component.scss"))["default"]]
      })], LogoutComponent);
      /***/
    },

    /***/
    "./src/app/auth/password-forgot/password-forgot.component.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/auth/password-forgot/password-forgot.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAuthPasswordForgotPasswordForgotComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcGFzc3dvcmQtZm9yZ290L3Bhc3N3b3JkLWZvcmdvdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/auth/password-forgot/password-forgot.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/auth/password-forgot/password-forgot.component.ts ***!
      \*******************************************************************/

    /*! exports provided: PasswordForgotComponent */

    /***/
    function srcAppAuthPasswordForgotPasswordForgotComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordForgotComponent", function () {
        return PasswordForgotComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../@shared/services/api.service */
      "./src/app/@shared/services/api.service.ts");
      /* harmony import */


      var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../@shared/services/toast.service */
      "./src/app/@shared/services/toast.service.ts");
      /* harmony import */


      var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../@shared/services/alert.service */
      "./src/app/@shared/services/alert.service.ts");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../@shared/services/auth.service */
      "./src/app/@shared/services/auth.service.ts");
      /* harmony import */


      var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../@shared/services/split-panel.service */
      "./src/app/@shared/services/split-panel.service.ts");

      var PasswordForgotComponent = /*#__PURE__*/function () {
        function PasswordForgotComponent(router, route, formBuilder, platform, api, toast, alert, auth, splitPanel) {
          _classCallCheck(this, PasswordForgotComponent);

          this.router = router;
          this.route = route;
          this.formBuilder = formBuilder;
          this.platform = platform;
          this.api = api;
          this.toast = toast;
          this.alert = alert;
          this.auth = auth;
          this.splitPanel = splitPanel;
          this.version = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version;
          this.isLoading = false;
          this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
          this.model = {
            email: ''
          };
          this.resetOk = false;
        }

        _createClass(PasswordForgotComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.splitPanel.show.next(false);
          }
        }, {
          key: "passwordRecoverRequest",
          value: function passwordRecoverRequest() {
            var _this2 = this;

            this.api.post('auth/reset-password', {
              email: this.model.email
            }).subscribe(function (res) {
              _this2.toast.present(res.message, 'toast-success');

              _this2.resetOk = true;
            }, function (err) {
              _this2.resetOk = false;
            });
          }
        }, {
          key: "isWeb",
          get: function get() {
            return !this.platform.is('cordova');
          }
        }]);

        return PasswordForgotComponent;
      }();

      PasswordForgotComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
        }, {
          type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
        }, {
          type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_10__["SplitPanelService"]
        }];
      };

      PasswordForgotComponent.propDecorators = {
        forgotForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['forgotForm']
        }]
      };
      PasswordForgotComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password-forgot',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./password-forgot.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/password-forgot/password-forgot.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./password-forgot.component.scss */
        "./src/app/auth/password-forgot/password-forgot.component.scss"))["default"]]
      })], PasswordForgotComponent);
      /***/
    },

    /***/
    "./src/app/auth/password-reset/password-reset.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/auth/password-reset/password-reset.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAuthPasswordResetPasswordResetComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcGFzc3dvcmQtcmVzZXQvcGFzc3dvcmQtcmVzZXQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/auth/password-reset/password-reset.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/auth/password-reset/password-reset.component.ts ***!
      \*****************************************************************/

    /*! exports provided: PasswordResetComponent */

    /***/
    function srcAppAuthPasswordResetPasswordResetComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function () {
        return PasswordResetComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../@shared/services/api.service */
      "./src/app/@shared/services/api.service.ts");
      /* harmony import */


      var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../@shared/services/toast.service */
      "./src/app/@shared/services/toast.service.ts");
      /* harmony import */


      var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../@shared/services/alert.service */
      "./src/app/@shared/services/alert.service.ts");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../@shared/services/auth.service */
      "./src/app/@shared/services/auth.service.ts");
      /* harmony import */


      var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../@shared/services/split-panel.service */
      "./src/app/@shared/services/split-panel.service.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");

      var PasswordResetComponent = /*#__PURE__*/function () {
        function PasswordResetComponent(router, route, formBuilder, platform, api, toast, alert, auth, splitPanel) {
          _classCallCheck(this, PasswordResetComponent);

          this.router = router;
          this.route = route;
          this.formBuilder = formBuilder;
          this.platform = platform;
          this.api = api;
          this.toast = toast;
          this.alert = alert;
          this.auth = auth;
          this.splitPanel = splitPanel;
          this.version = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].version;
          this.isLoading = false;
          this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"];
          this.resetOk = false;
          this.token = null;
          this.model = {
            password: '',
            password_confirmation: '',
            token: ''
          };
        }

        _createClass(PasswordResetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.resetOk = false;
            this.splitPanel.show.next(false);
            this.token = this.route.snapshot.paramMap.get('token');
            this.findResetPasswordRequest();
          }
        }, {
          key: "passwordReset",
          value: function passwordReset() {
            var _this3 = this;

            this.model.token = this.token;
            this.api.put('auth/reset-password', this.model).subscribe(function (res) {
              _this3.toast.present(res.message, 'toast-success');

              _this3.router.navigateByUrl('/auth/login');
            }, function (err) {
              _this3.resetOk = false;
            });
          }
        }, {
          key: "showPassword",
          value: function showPassword(input) {
            var passwordField = document.getElementById(input);
            var passwordButton = document.getElementById(input + '-show');
            passwordField.setAttribute('type', passwordField.getAttribute('type') === 'password' ? 'text' : 'password');
            passwordButton.setAttribute('name', passwordButton.getAttribute('name') === 'eye-outline' ? 'eye-off-outline' : 'eye-outline');
          }
        }, {
          key: "findResetPasswordRequest",
          value: function findResetPasswordRequest() {
            var _this4 = this;

            this.api.get('auth/reset-password/' + this.token).subscribe(function (res) {
              _this4.toast.present(res.message, 'toast-info');

              _this4.resetOk = true;
            }, function (err) {
              _this4.resetOk = false;
            });
          }
        }]);

        return PasswordResetComponent;
      }();

      PasswordResetComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
        }, {
          type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_9__["SplitPanelService"]
        }];
      };

      PasswordResetComponent.propDecorators = {
        resetPasswordForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['resetPasswordForm']
        }]
      };
      PasswordResetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password-reset',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./password-reset.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/password-reset/password-reset.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./password-reset.component.scss */
        "./src/app/auth/password-reset/password-reset.component.scss"))["default"]]
      })], PasswordResetComponent);
      /***/
    },

    /***/
    "./src/app/auth/register-confirm/register-confirm.component.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/auth/register-confirm/register-confirm.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAuthRegisterConfirmRegisterConfirmComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXItY29uZmlybS9yZWdpc3Rlci1jb25maXJtLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/auth/register-confirm/register-confirm.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/auth/register-confirm/register-confirm.component.ts ***!
      \*********************************************************************/

    /*! exports provided: RegisterConfirmComponent */

    /***/
    function srcAppAuthRegisterConfirmRegisterConfirmComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterConfirmComponent", function () {
        return RegisterConfirmComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var RegisterConfirmComponent = /*#__PURE__*/function () {
        function RegisterConfirmComponent() {
          _classCallCheck(this, RegisterConfirmComponent);
        }

        _createClass(RegisterConfirmComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RegisterConfirmComponent;
      }();

      RegisterConfirmComponent.ctorParameters = function () {
        return [];
      };

      RegisterConfirmComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-confirm',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./register-confirm.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register-confirm/register-confirm.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./register-confirm.component.scss */
        "./src/app/auth/register-confirm/register-confirm.component.scss"))["default"]]
      })], RegisterConfirmComponent);
      /***/
    },

    /***/
    "./src/app/auth/register/register.component.scss":
    /*!*******************************************************!*\
      !*** ./src/app/auth/register/register.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAuthRegisterRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/auth/register/register.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/auth/register/register.component.ts ***!
      \*****************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function srcAppAuthRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../@shared/services/api.service */
      "./src/app/@shared/services/api.service.ts");
      /* harmony import */


      var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../@shared/services/toast.service */
      "./src/app/@shared/services/toast.service.ts");
      /* harmony import */


      var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../@shared/services/alert.service */
      "./src/app/@shared/services/alert.service.ts");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../@shared/services/auth.service */
      "./src/app/@shared/services/auth.service.ts");
      /* harmony import */


      var _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../@shared/services/split-panel.service */
      "./src/app/@shared/services/split-panel.service.ts");

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(router, route, formBuilder, platform, api, toast, alert, auth, splitPanel) {
          _classCallCheck(this, RegisterComponent);

          this.router = router;
          this.route = route;
          this.formBuilder = formBuilder;
          this.platform = platform;
          this.api = api;
          this.toast = toast;
          this.alert = alert;
          this.auth = auth;
          this.splitPanel = splitPanel;
          this.version = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version;
          this.isLoading = false;
          this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
          this.model = {
            name: '',
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirmation: '',
            accept_terms_conditions: false
          };
          this.registered = false;
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.splitPanel.show.next(false);
          }
        }, {
          key: "register",
          value: function register() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!this.registerForm.invalid) {
                        _context3.next = 3;
                        break;
                      }

                      this.markFormGroupTouched(this.registerForm);
                      return _context3.abrupt("return");

                    case 3:
                      this.model.name = this.model.first_name + ' ' + this.model.last_name;
                      this.api.post('auth/register', this.model).subscribe(function (res) {
                        _this5.toast.present(res.message, 'toast-success');

                        _this5.registered = true;
                      }, function (err) {});

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "showPassword",
          value: function showPassword(input) {
            var passwordField = document.getElementById(input);
            var passwordButton = document.getElementById(input + '-show');
            passwordField.setAttribute('type', passwordField.getAttribute('type') === 'password' ? 'text' : 'password');
            passwordButton.setAttribute('name', passwordButton.getAttribute('name') === 'eye-outline' ? 'eye-off-outline' : 'eye-outline');
          }
          /**
           * Marks all controls in a form group as touched
           * @param formGroup - The form group to touch
           */

        }, {
          key: "markFormGroupTouched",
          value: function markFormGroupTouched(formGroup) {
            var _this6 = this;

            Object.values(formGroup.controls).forEach(function (control) {
              control.markAsTouched();

              if (control.controls) {
                _this6.markFormGroupTouched(control);
              }
            });
          }
        }, {
          key: "resendVerificationEmail",
          value: function resendVerificationEmail() {
            var _this7 = this;

            this.api.post('auth/email/resend', {
              email: this.model.email
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success');
            }, function (err) {});
          }
        }, {
          key: "isWeb",
          get: function get() {
            return !this.platform.is('cordova');
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
        }, {
          type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
        }, {
          type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
        }, {
          type: _shared_services_split_panel_service__WEBPACK_IMPORTED_MODULE_10__["SplitPanelService"]
        }];
      };

      RegisterComponent.propDecorators = {
        registerForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['registerForm']
        }]
      };
      RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./register.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./register.component.scss */
        "./src/app/auth/register/register.component.scss"))["default"]]
      })], RegisterComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=auth-auth-module-es5.js.map