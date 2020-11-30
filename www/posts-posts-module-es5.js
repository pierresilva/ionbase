(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posts-posts-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-create/posts-create.component.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-create/posts-create.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPostsPostsCreatePostsCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/posts'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"postsService.storePost()\"\n                        color=\"success\"\n                        fill=\"outline\"\n                        [disabled]=\"!postsService.postsFormValid.value\"> Guardar\n                <ion-icon slot=\"icon-only\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Crear {{'ENTRADAS' | titlecase}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n        <app-posts-form #postForm [model]=\"postsService.post\"></app-posts-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-duplicate/posts-duplicate.component.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-duplicate/posts-duplicate.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPostsPostsDuplicatePostsDuplicateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  Posts duplicate works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-edit/posts-edit.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-edit/posts-edit.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPostsPostsEditPostsEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <!-- <ion-button [routerLink]=\"'/posts'\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-back-button\n              [text]=\"''\"\n              [icon]=\"'arrow-back-outline'\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"postsService.updatePost()\"\n                        color=\"success\"\n                        fill=\"outline\"\n                        [disabled]=\"!postsService.postsFormValid.value\"> Guardar\n                <ion-icon slot=\"icon-only\" color=\"success\" name=\"save-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Editar {{'ENTRADAS' | titlecase}}: {{ postsService.post?.name }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n    <ion-card>\n            <app-posts-form #postForm [model]=\"postsService.post\"></app-posts-form>\n    </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-form/posts-form.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-form/posts-form.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPostsPostsFormPostsFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form #postsForm=\"ngForm\" novalidate autocomplete=\"off\">\n\n\n    <!-- user_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'USUARIO' | titlecase }}</ion-label>\n        <ionic-selectable name=\"user_id\"\n                          id=\"user_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.user\"\n                          [items]=\"postsService.postLists.User\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('USUARIOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('USUARIOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setUserId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.user_id\">\n            <div class=\"error-message\" *ngIf=\"postsForm.form.controls['user_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end user_id -->\n\n\n    <!-- category_id -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'CATEGORÍA' | titlecase }}</ion-label>\n        <ionic-selectable name=\"category_id\"\n                          id=\"category_id-field\"\n                          [required]=\"true\"\n                          [(ngModel)]=\"model.category\"\n                          [items]=\"postsService.postLists.Category\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('CATEGORÍAS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('CATEGORÍAS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setCategoryId($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.category_id\">\n            <div class=\"error-message\" *ngIf=\"postsForm.form.controls['category_id']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end category_id -->\n\n\n    <!-- tag_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'ETIQUETAS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"tag_ids\"\n                          id=\"tag_ids-field\"\n                          [(ngModel)]=\"model.tags\"\n                          [items]=\"postsService.postLists.Tag\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('ETIQUETAS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('ETIQUETAS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setTagIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.tag_ids\">\n            <div class=\"error-message\" *ngIf=\"postsForm.form.controls['tag_ids']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end tag_ids -->\n\n\n    <!-- comment_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'COMENTARIOS' | titlecase }}</ion-label>\n        <ionic-selectable name=\"comment_ids\"\n                          id=\"comment_ids-field\"\n                          [(ngModel)]=\"model.comments\"\n                          [items]=\"postsService.postLists.Comment\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('COMENTARIOS' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('COMENTARIOS' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setCommentIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.comment_ids\">\n            <div class=\"error-message\" *ngIf=\"postsForm.form.controls['comment_ids']?.hasError(validation.type)\">\n            {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end comment_ids -->\n\n\n    <!-- image_ids -->\n    <ion-item class=\"item-transparent\">\n        <ion-label>{{ 'IMÁGENES' | titlecase }}</ion-label>\n        <ionic-selectable name=\"image_ids\"\n                          id=\"image_ids-field\"\n                          [(ngModel)]=\"model.images\"\n                          [items]=\"postsService.postLists.Image\"\n                          itemValueField=\"id\"\n                          itemTextField=\"name\"\n                          [isMultiple]=\"true\"\n                          [canClear]=\"true\"\n                          [hasConfirmButton]=\"true\"\n                          [confirmButtonText]=\"'Seleccionar'\"\n                          [searchPlaceholder]=\"'Buscar ' + ('IMÁGENES' | titlecase)\"\n                          [searchFailText]=\"'No se encontro ' + ('IMÁGENES' | titlecase) + ' que coincida!'\"\n                          [closeButtonText]=\"'Cancelar'\"\n                          [clearButtonText]=\"'Limpiar'\"\n                          [canSearch]=\"true\"\n                          (onChange)=\"setImageIds($event)\">\n        </ionic-selectable>\n    </ion-item>\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.image_ids\">\n            <div class=\"error-message\" *ngIf=\"postsForm.form.controls['image_ids']?.hasError(validation.type)\">\n                {{ validation.message }}\n            </div>\n        </ng-container>\n    </div>\n    <!-- end image_ids -->\n\n\n            <!-- name -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'NOMBRE' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.name\"\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.name\">\n                    <div class=\"error-message\" *ngIf=\"postsForm.form.controls['name']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end name -->\n\n\n            <!-- summary -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'RESUMEN' | titlecase }}</ion-label>\n                <ion-textarea [(ngModel)]=\"model.summary\"\n                              name=\"summary\"\n                              id=\"summary-field\"\n                              [required]=\"true\"\n                              rows=\"6\"\n                              placeholder=\"\"></ion-textarea>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.summary\">\n                    <div class=\"error-message\" *ngIf=\"postsForm.form.controls['summary']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end summary -->\n\n\n            <!-- from_date -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'DESDE' | titlecase }}</ion-label>\n                <ion-datetime name=\"from_date\"\n                              id=\"from_date-field\"\n                              [doneText]=\"'Seleccionar'\"\n                              max=\"2040-12-31\"\n                              [cancelText]=\"'Cancelar'\"\n                              [(ngModel)]=\"model.from_date\"\n                              displayFormat=\"DD/MM/YYYY HH:mm\"></ion-datetime>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.from_date\">\n                    <div class=\"error-message\" *ngIf=\"postsForm.form.controls['from_date']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end from_date -->\n\n\n            <!-- to_date -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'HASTA' | titlecase }}</ion-label>\n                <ion-datetime name=\"to_date\"\n                              id=\"to_date-field\"\n                              [doneText]=\"'Seleccionar'\"\n                              max=\"2040-12-31\"\n                              [cancelText]=\"'Cancelar'\"\n                              [(ngModel)]=\"model.to_date\"\n                              displayFormat=\"DD/MM/YYYY HH:mm\"></ion-datetime>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.to_date\">\n                    <div class=\"error-message\" *ngIf=\"postsForm.form.controls['to_date']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end to_date -->\n\n\n            <!-- accepted -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'ACEPTADO' | titlecase }}</ion-label>\n                <ion-toggle name=\"accepted\"\n                            id=\"accepted-field\"\n                            slot=\"end\"\n                            [(ngModel)]=\"model.accepted\"></ion-toggle>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.accepted\">\n                    <div class=\"error-message\" *ngIf=\"postsForm.form.controls['accepted']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end accepted -->\n\n\n            <!-- promotion_date -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'FECHA DE PROMICIÓN' | titlecase }}</ion-label>\n                <ion-datetime name=\"promotion_date\"\n                              id=\"promotion_date-field\"\n                              [doneText]=\"'Seleccionar'\"\n                              max=\"2040-12-31\"\n                              [cancelText]=\"'Cancelar'\"\n                              [(ngModel)]=\"model.promotion_date\"\n                              displayFormat=\"DD/MM/YYYY\"></ion-datetime>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.promotion_date\">\n                    <div class=\"error-message\" *ngIf=\"postsForm.form.controls['promotion_date']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end promotion_date -->\n\n\n            <!-- content -->\n            <ion-item class=\"item-transparent\">\n                <ion-label position=\"stacked\" style=\"font-size: 1rem;\">{{ 'CONTENIDO' | titlecase }}</ion-label>\n                <input [ngxSummernote]\n                       name=\"content\"\n                       id=\"content-field\"\n                       [(ngModel)]=\"model.content\">\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.content\">\n                    <div class=\"error-message\" *ngIf=\"postsForm.form.controls['content']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end content -->\n\n\n            <!-- code -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'CÓDIGO' | titlecase }}</ion-label>\n                <ion-input [(ngModel)]=\"model.code\"\n                            type=\"text\"\n                            name=\"code\"\n                            id=\"code-field\"\n                            [required]=\"true\"\n                            placeholder=\"\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessages.code\">\n                    <div class=\"error-message\" *ngIf=\"postsForm.form.controls['code']?.hasError(validation.type)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <!-- end code -->\n\n\n            <!-- status -->\n            <ion-item class=\"item-transparent\">\n                <ion-label>{{ 'ESTADO' | titlecase }}</ion-label>\n                <ion-select [(ngModel)]=\"model.status\"\n                            [required]=\"true\"\n                            name=\"status\"\n                            id=\"status-field\"\n                            okText=\"Seleccionar\"\n                            cancelText=\"Cancelar\">\n                    <ion-select-option value=\"active\">{{ 'Activo' | titlecase }}</ion-select-option>\n                    <ion-select-option value=\"inactive\">{{ 'Inactivo' | titlecase }}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessages.status\">\n                <div class=\"error-message\" *ngIf=\"postsForm.form.controls['status']?.hasError(validation.type)\">\n                    {{ validation.message }}\n                </div>\n            </ng-container>\n        </div>\n        <!-- end status -->\n\n\n</form>\n\n<pre>\n{{ model | json }}\n</pre>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-list/posts-list.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-list/posts-list.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPostsPostsListPostsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"{{'ENTRADAS' | titlecase}}\"\n                 primaryLink=\"posts/create\"\n                 primaryText=\"Crear {{'ENTRADAS' | lowercase}}\"\n                 primaryIcon=\"add-circle-outline\"></app-main-header>\n\n<ion-content id=\"pages-content\">\n\n    <ion-searchbar showCancelButton=\"focus\"\n                       [cancelButtonText]=\"'Cancelar'\"\n                       [placeholder]=\"'Buscar ' + ('ENTRADAS' | lowercase )\"\n                       (ionCancel)=\"this.postsService.searchValue = ''; postsService.getPosts()\"\n                       (keyup.enter)=\"postsService.getPosts()\"\n                       [(ngModel)]=\"postsService.searchValue\"></ion-searchbar>\n\n    <ion-card>\n\n        <ng-container *ngIf=\"!(loading.loading | async) && postsService.posts.length\">\n            <ion-item *ngFor=\"let post of postsService.posts; let index = index\">\n                <ion-label>\n                    <h3>{{ 'NOMBRE' | titlecase }}: {{ post.name }}</h3>\n                    <h3>{{ 'RESUMEN' | titlecase }}: {{ post.summary }}</h3>\n                    <h3>{{ 'DESDE' | titlecase }}: {{ post.from_date | date:'dd/MM/yyyy HH:mm' }}</h3>\n                    <h3>{{ 'HASTA' | titlecase }}: {{ post.to_date | date:'dd/MM/yyyy HH:mm' }}</h3>\n                    <h3>{{ 'ACEPTADO' | titlecase }}: {{ post.accepted ? 'Si' : 'No' }}</h3>\n                    <h3>{{ 'FECHA DE PROMICIÓN' | titlecase }}: {{ post.promotion_date | date:'dd/MM/yyyy' }}</h3>\n                    <h3>{{ 'IMÁGEN PROMOCIÓN' | titlecase }}: <a *ngIf=\"post.promotion_image\" [href]=\"post.promotion_image\" target=\"_blank\">Ver archivo</a><span *ngIf=\"!post.promotion_image\">Sin archivo</span></h3>\n                    <h3>{{ 'CONTENIDO' | titlecase }}: {{ post.content | stripHtml }}</h3>\n                    <h3>{{ 'CÓDIGO' | titlecase }}: {{ post.code }}</h3>\n                    <h3>{{ 'ESTADO' | titlecase }}: {{ post.status | status }}</h3>\n                    <h3>{{ 'USUARIOS' | titlecase }}: <a routerLink=\"/users/{{ post.user.id }}/edit\">{{ post.user.name }}</a></h3>\n                    <h3>{{ 'CATEGORÍAS' | titlecase }}: <a routerLink=\"/categories/{{ post.category.id }}/edit\">{{ post.category.name }}</a></h3>\n                    <h3>{{ 'ETIQUETAS' | titlecase }}:\n                    <ng-container *ngIf=\"post.tags.length\">\n                        <ng-container *ngFor=\"let tag of post.tags; let last = last\">\n                        <a routerLink=\"/tags/{{ tag.id }}/edit\">{{ tag.name }}</a><span *ngIf=\"!last\">, </span>\n                        </ng-container>\n                    </ng-container>\n                    </h3>\n                    <h3>{{ 'COMENTARIOS' | titlecase }}:\n                    <ng-container *ngIf=\"post.comments.length\">\n                        <ng-container *ngFor=\"let comment of post.comments; let last = last\">\n                        <a routerLink=\"/comments/{{ comment.id }}/edit\">{{ comment.name }}</a><span *ngIf=\"!last\">, </span>\n                        </ng-container>\n                    </ng-container>\n                    </h3>\n                    <h3>{{ 'IMÁGENES' | titlecase }}:\n                    <ng-container *ngIf=\"post.images.length\">\n                        <ng-container *ngFor=\"let image of post.images; let last = last\">\n                        <a routerLink=\"/images/{{ image.id }}/edit\">{{ image.name }}</a><span *ngIf=\"!last\">, </span>\n                        </ng-container>\n                    </ng-container>\n                    </h3>\n                </ion-label>\n\n\n                <ion-button item-right fill=\"clear\" color=\"success\" [routerLink]=\"'/posts/' + post.id + '/edit'\">\n                    <ion-icon name=\"create-outline\"></ion-icon>\n                </ion-button>\n                <!--<ion-button item-right fill=\"clear\" color=\"success\" (click)=\"null\">\n                    <ion-icon name=\"eye-outline\"></ion-icon>\n                </ion-button>-->\n                <ion-button item-right fill=\"clear\" color=\"danger\" (click)=\"postsService.deletePost(post.id)\">\n                    <ion-icon name=\"trash-outline\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </ng-container>\n\n        <ng-container *ngIf=\"!(loading.loading | async) && !postsService.posts.length\">\n            <ion-item>\n                <ion-icon class=\"text-warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n                <ion-label><h2>No se encontraron {{'ENTRADAS' | titlecase}}</h2></ion-label>\n                <ion-button [routerLink]=\"'/posts/create'\" fill=\"outline\" color=\"success\" slot=\"end\">\n                    Crear {{'ENTRADAS' | titlecase}}\n                    <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </ng-container>\n\n    </ion-card>\n\n</ion-content>\n\n<ion-footer>\n    <ion-row *ngIf=\"postsService.meta\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n            <ion-button (click)=\"postsService.getPosts(postsService.meta.current_page - 1)\"\n                        [disabled]=\"postsService.meta.current_page == 1\"\n                        fill=\"clear\">\n                <ion-icon slot=\"end\" name=\"play-outline\" style=\"transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" [disabled]=\"true\"> Pag: {{postsService.meta.current_page}}\n                /{{postsService.meta.last_page}} {{postsService.meta.from}}-{{postsService.meta.to}}\n                /{{postsService.meta.total}} </ion-button>\n            <ion-button (click)=\"postsService.getPosts(postsService.meta.current_page + 1)\"\n                        [disabled]=\"postsService.meta.current_page == postsService.meta.last_page\"\n                        fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"play-outline\"></ion-icon>\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPostsPostsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-main-header title=\"ENTRADAS\"></app-main-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/posts/posts-create/posts-create.component.scss":
    /*!****************************************************************!*\
      !*** ./src/app/posts/posts-create/posts-create.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPostsPostsCreatePostsCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLWNyZWF0ZS9wb3N0cy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/posts/posts-create/posts-create.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/posts/posts-create/posts-create.component.ts ***!
      \**************************************************************/

    /*! exports provided: PostsCreateComponent */

    /***/
    function srcAppPostsPostsCreatePostsCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostsCreateComponent", function () {
        return PostsCreateComponent;
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


      var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../posts.service */
      "./src/app/posts/posts.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var PostsCreateComponent = /*#__PURE__*/function () {
        function PostsCreateComponent(postsService, route) {
          _classCallCheck(this, PostsCreateComponent);

          this.postsService = postsService;
          this.route = route;
          this.id = null;
          this.formValid = false;
        }

        _createClass(PostsCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.clearPosts();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.postForm.postsForm.valueChanges.subscribe(function (data) {
              _this.postsService.postsFormValid.next(_this.postForm.postsForm.valid);
            });
          }
        }, {
          key: "clearPosts",
          value: function clearPosts() {
            console.log('clear');
            this.postsService.createPost();
            this.postsService.post = {};
          }
        }]);

        return PostsCreateComponent;
      }();

      PostsCreateComponent.ctorParameters = function () {
        return [{
          type: _posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      PostsCreateComponent.propDecorators = {
        postForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['postForm']
        }]
      };
      PostsCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./posts-create.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-create/posts-create.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./posts-create.component.scss */
        "./src/app/posts/posts-create/posts-create.component.scss"))["default"]]
      })], PostsCreateComponent);
      /***/
    },

    /***/
    "./src/app/posts/posts-duplicate/posts-duplicate.component.scss":
    /*!**********************************************************************!*\
      !*** ./src/app/posts/posts-duplicate/posts-duplicate.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPostsPostsDuplicatePostsDuplicateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLWR1cGxpY2F0ZS9wb3N0cy1kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/posts/posts-duplicate/posts-duplicate.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/posts/posts-duplicate/posts-duplicate.component.ts ***!
      \********************************************************************/

    /*! exports provided: PostsDuplicateComponent */

    /***/
    function srcAppPostsPostsDuplicatePostsDuplicateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostsDuplicateComponent", function () {
        return PostsDuplicateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PostsDuplicateComponent = /*#__PURE__*/function () {
        function PostsDuplicateComponent() {
          _classCallCheck(this, PostsDuplicateComponent);
        }

        _createClass(PostsDuplicateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PostsDuplicateComponent;
      }();

      PostsDuplicateComponent.ctorParameters = function () {
        return [];
      };

      PostsDuplicateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts-duplicate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./posts-duplicate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-duplicate/posts-duplicate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./posts-duplicate.component.scss */
        "./src/app/posts/posts-duplicate/posts-duplicate.component.scss"))["default"]]
      })], PostsDuplicateComponent);
      /***/
    },

    /***/
    "./src/app/posts/posts-edit/posts-edit.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/posts/posts-edit/posts-edit.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPostsPostsEditPostsEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLWVkaXQvcG9zdHMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/posts/posts-edit/posts-edit.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/posts/posts-edit/posts-edit.component.ts ***!
      \**********************************************************/

    /*! exports provided: PostsEditComponent */

    /***/
    function srcAppPostsPostsEditPostsEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostsEditComponent", function () {
        return PostsEditComponent;
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


      var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../posts.service */
      "./src/app/posts/posts.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var PostsEditComponent = /*#__PURE__*/function () {
        function PostsEditComponent(postsService, route) {
          _classCallCheck(this, PostsEditComponent);

          this.postsService = postsService;
          this.route = route;
          this.id = null;
          this.model = null;
        }

        _createClass(PostsEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.postsService.editPost(this.id);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            this.postForm.postsForm.valueChanges.subscribe(function (data) {
              _this2.postsService.postsFormValid.next(_this2.postForm.postsForm.valid);
            });
          }
        }]);

        return PostsEditComponent;
      }();

      PostsEditComponent.ctorParameters = function () {
        return [{
          type: _posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      PostsEditComponent.propDecorators = {
        postForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['postForm']
        }]
      };
      PostsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./posts-edit.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-edit/posts-edit.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./posts-edit.component.scss */
        "./src/app/posts/posts-edit/posts-edit.component.scss"))["default"]]
      })], PostsEditComponent);
      /***/
    },

    /***/
    "./src/app/posts/posts-form/posts-form.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/posts/posts-form/posts-form.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPostsPostsFormPostsFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLWZvcm0vcG9zdHMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/posts/posts-form/posts-form.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/posts/posts-form/posts-form.component.ts ***!
      \**********************************************************/

    /*! exports provided: PostsFormComponent */

    /***/
    function srcAppPostsPostsFormPostsFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostsFormComponent", function () {
        return PostsFormComponent;
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


      var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../posts.service */
      "./src/app/posts/posts.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var PostsFormComponent = /*#__PURE__*/function () {
        function PostsFormComponent(postsService, toTitlecase) {
          _classCallCheck(this, PostsFormComponent);

          this.postsService = postsService;
          this.toTitlecase = toTitlecase;
          this.model = {};
          this.validationMessages = {
            'name': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'
            }],
            'summary': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('RESUMEN') + ' es obligatorio.'
            }],
            'user_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('USUARIO') + ' es obligatorio.'
            }],
            'category_id': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('CATEGORÍA') + ' es obligatorio.'
            }],
            'published': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('PUBLICADO') + ' es obligatorio.'
            }],
            'from_date': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('DESDE') + ' es obligatorio.'
            }],
            'to_date': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('HASTA') + ' es obligatorio.'
            }],
            'accepted': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('ACEPTADO') + ' es obligatorio.'
            }],
            'promotion_date': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('FECHA DE PROMICIÓN') + ' es obligatorio.'
            }],
            'promotion_image': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('IMÁGEN PROMOCIÓN') + ' es obligatorio.'
            }],
            'content': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('CONTENIDO') + ' es obligatorio.'
            }],
            'code': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.'
            }],
            'status': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('ESTADO') + ' es obligatorio.'
            }],
            'tag_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('ETIQUETAS') + ' es obligatorio.'
            }],
            'comment_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('COMENTARIOS') + ' es obligatorio.'
            }],
            'image_ids': [{
              type: 'required',
              message: 'El campo ' + this.toTitlecase.transform('IMÁGENES') + ' es obligatorio.'
            }]
          };
        }

        _createClass(PostsFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {} // set setUserId

        }, {
          key: "setUserId",
          value: function setUserId(event) {
            this.postsService.post.user_id = event.value ? event.value.id : null;
          } // end setUserId
          // set setCategoryId

        }, {
          key: "setCategoryId",
          value: function setCategoryId(event) {
            this.postsService.post.category_id = event.value ? event.value.id : null;
          } // end setCategoryId
          // set setTagIds

        }, {
          key: "setTagIds",
          value: function setTagIds(event) {
            var tagIds = null;

            if (event.value.length) {
              tagIds = [];

              for (var i = 0; i < event.value.length; i++) {
                tagIds.push(event.value[i].id);
              }
            }

            this.postsService.post.tag_ids = tagIds;
          } // end setTagIds
          // set setCommentIds

        }, {
          key: "setCommentIds",
          value: function setCommentIds(event) {
            var commentIds = null;

            if (event.value.length) {
              commentIds = [];

              for (var i = 0; i < event.value.length; i++) {
                commentIds.push(event.value[i].id);
              }
            }

            this.postsService.post.comment_ids = commentIds;
          } // end setCommentIds
          // set setImageIds

        }, {
          key: "setImageIds",
          value: function setImageIds(event) {
            var imageIds = null;

            if (event.value.length) {
              imageIds = [];

              for (var i = 0; i < event.value.length; i++) {
                imageIds.push(event.value[i].id);
              }
            }

            this.postsService.post.image_ids = imageIds;
          }
        }]);

        return PostsFormComponent;
      }();

      PostsFormComponent.ctorParameters = function () {
        return [{
          type: _posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]
        }];
      };

      PostsFormComponent.propDecorators = {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['model']
        }],
        postsForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['postsForm']
        }]
      };
      PostsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./posts-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-form/posts-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./posts-form.component.scss */
        "./src/app/posts/posts-form/posts-form.component.scss"))["default"]]
      })], PostsFormComponent);
      /***/
    },

    /***/
    "./src/app/posts/posts-list/posts-list.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/posts/posts-list/posts-list.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPostsPostsListPostsListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLWxpc3QvcG9zdHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/posts/posts-list/posts-list.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/posts/posts-list/posts-list.component.ts ***!
      \**********************************************************/

    /*! exports provided: PostsListComponent */

    /***/
    function srcAppPostsPostsListPostsListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostsListComponent", function () {
        return PostsListComponent;
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


      var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../posts.service */
      "./src/app/posts/posts.service.ts");
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

      var PostsListComponent = /*#__PURE__*/function () {
        function PostsListComponent(postsService, api, loading) {
          _classCallCheck(this, PostsListComponent);

          this.postsService = postsService;
          this.api = api;
          this.loading = loading;
        }

        _createClass(PostsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.postsService.getPosts();
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            this.content.scrollToTop(300);
          }
        }]);

        return PostsListComponent;
      }();

      PostsListComponent.ctorParameters = function () {
        return [{
          type: _posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]
        }, {
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }];
      };

      PostsListComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            "static": false
          }]
        }]
      };
      PostsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./posts-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts-list/posts-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./posts-list.component.scss */
        "./src/app/posts/posts-list/posts-list.component.scss"))["default"]]
      })], PostsListComponent);
      /***/
    },

    /***/
    "./src/app/posts/posts-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/posts/posts-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: PostsPageRoutingModule */

    /***/
    function srcAppPostsPostsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostsPageRoutingModule", function () {
        return PostsPageRoutingModule;
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


      var _posts_edit_posts_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./posts-edit/posts-edit.component */
      "./src/app/posts/posts-edit/posts-edit.component.ts");
      /* harmony import */


      var _posts_create_posts_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./posts-create/posts-create.component */
      "./src/app/posts/posts-create/posts-create.component.ts");
      /* harmony import */


      var _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./posts-list/posts-list.component */
      "./src/app/posts/posts-list/posts-list.component.ts");

      var routes = [{
        path: '',
        component: _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_5__["PostsListComponent"]
      }, {
        path: 'create',
        component: _posts_create_posts_create_component__WEBPACK_IMPORTED_MODULE_4__["PostsCreateComponent"]
      }, {
        path: ':id/edit',
        component: _posts_edit_posts_edit_component__WEBPACK_IMPORTED_MODULE_3__["PostsEditComponent"]
      }];

      var PostsPageRoutingModule = function PostsPageRoutingModule() {
        _classCallCheck(this, PostsPageRoutingModule);
      };

      PostsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PostsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/posts/posts.module.ts":
    /*!***************************************!*\
      !*** ./src/app/posts/posts.module.ts ***!
      \***************************************/

    /*! exports provided: PostsPageModule */

    /***/
    function srcAppPostsPostsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostsPageModule", function () {
        return PostsPageModule;
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


      var _posts_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./posts-routing.module */
      "./src/app/posts/posts-routing.module.ts");
      /* harmony import */


      var _posts_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./posts.page */
      "./src/app/posts/posts.page.ts");
      /* harmony import */


      var _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./posts-list/posts-list.component */
      "./src/app/posts/posts-list/posts-list.component.ts");
      /* harmony import */


      var _posts_create_posts_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./posts-create/posts-create.component */
      "./src/app/posts/posts-create/posts-create.component.ts");
      /* harmony import */


      var _posts_duplicate_posts_duplicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./posts-duplicate/posts-duplicate.component */
      "./src/app/posts/posts-duplicate/posts-duplicate.component.ts");
      /* harmony import */


      var _posts_edit_posts_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./posts-edit/posts-edit.component */
      "./src/app/posts/posts-edit/posts-edit.component.ts");
      /* harmony import */


      var _posts_form_posts_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./posts-form/posts-form.component */
      "./src/app/posts/posts-form/posts-form.component.ts");

      var PostsPageModule = function PostsPageModule() {
        _classCallCheck(this, PostsPageModule);
      };

      PostsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _posts_routing_module__WEBPACK_IMPORTED_MODULE_6__["PostsPageRoutingModule"]],
        declarations: [_posts_page__WEBPACK_IMPORTED_MODULE_7__["PostsPage"], _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_8__["PostsListComponent"], _posts_create_posts_create_component__WEBPACK_IMPORTED_MODULE_9__["PostsCreateComponent"], _posts_duplicate_posts_duplicate_component__WEBPACK_IMPORTED_MODULE_10__["PostsDuplicateComponent"], _posts_edit_posts_edit_component__WEBPACK_IMPORTED_MODULE_11__["PostsEditComponent"], _posts_form_posts_form_component__WEBPACK_IMPORTED_MODULE_12__["PostsFormComponent"]]
      })], PostsPageModule);
      /***/
    },

    /***/
    "./src/app/posts/posts.page.scss":
    /*!***************************************!*\
      !*** ./src/app/posts/posts.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppPostsPostsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/posts/posts.page.ts":
    /*!*************************************!*\
      !*** ./src/app/posts/posts.page.ts ***!
      \*************************************/

    /*! exports provided: PostsPage */

    /***/
    function srcAppPostsPostsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostsPage", function () {
        return PostsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PostsPage = /*#__PURE__*/function () {
        function PostsPage() {
          _classCallCheck(this, PostsPage);
        }

        _createClass(PostsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PostsPage;
      }();

      PostsPage.ctorParameters = function () {
        return [];
      };

      PostsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./posts.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./posts.page.scss */
        "./src/app/posts/posts.page.scss"))["default"]]
      })], PostsPage);
      /***/
    },

    /***/
    "./src/app/posts/posts.service.ts":
    /*!****************************************!*\
      !*** ./src/app/posts/posts.service.ts ***!
      \****************************************/

    /*! exports provided: PostsService */

    /***/
    function srcAppPostsPostsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostsService", function () {
        return PostsService;
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

      var PostsService = /*#__PURE__*/function () {
        function PostsService(api, alert, toast, router, navigation) {
          _classCallCheck(this, PostsService);

          this.api = api;
          this.alert = alert;
          this.toast = toast;
          this.router = router;
          this.navigation = navigation;
          this.postsUrl = 'posts';
          this.postsFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
          this.posts = [];
          this.post = {};
          this.postLists = {};
          this.searchValue = '';
          this.perPage = 10;
          this.meta = null;
          this.page = 1;
          this.pagesContent = document.getElementById('pages-content');
        }

        _createClass(PostsService, [{
          key: "getPosts",
          value: function getPosts() {
            var _this3 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
            var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
            this.api.get(this.postsUrl + '?page=' + page + '&perPage=' + perPage + '&q[name:cont]=' + this.searchValue).subscribe(function (res) {
              // @ts-ignore
              document.getElementById('pages-content').scrollToTop(300);
              _this3.posts = res.data;
              _this3.postLists = res.lists;
              _this3.meta = res.meta;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "editPost",
          value: function editPost(id) {
            var _this4 = this;

            this.api.get(this.postsUrl + '/' + id + '/edit').subscribe(function (res) {
              _this4.post = res.data.model;
              _this4.postLists = res.lists;
            }, function (err) {
              console.error(err);
            });
          }
        }, {
          key: "updatePost",
          value: function updatePost() {
            var _this5 = this;

            this.api.put(this.postsUrl + '/' + this.post.id, {
              model: this.post,
              pivots: {
                tag: this.post.tags,
                image: this.post.images
              }
            }).subscribe(function (res) {
              _this5.toast.present(res.message, 'toast-success', 'top');

              _this5.navigation.back();

              _this5.getPosts(1);
            });
          }
        }, {
          key: "createPost",
          value: function createPost() {
            var _this6 = this;

            this.api.get(this.postsUrl + '/create').subscribe(function (res) {
              _this6.post = {};
              _this6.postLists = res.lists;
            });
          }
        }, {
          key: "storePost",
          value: function storePost() {
            var _this7 = this;

            this.api.post(this.postsUrl, {
              model: this.post,
              pivots: {
                tag: this.post.tags,
                image: this.post.images
              }
            }).subscribe(function (res) {
              _this7.toast.present(res.message, 'toast-success', 'top');

              _this7.navigation.back();

              _this7.getPosts(1);
            });
          }
        }, {
          key: "deletePost",
          value: function deletePost(id) {
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

                      this.api["delete"](this.postsUrl + '/' + id, {}).subscribe(function (res) {
                        _this8.toast.present(res.message, 'toast-success', 'top');

                        _this8.getPosts(1);
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

        return PostsService;
      }();

      PostsService.ctorParameters = function () {
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

      PostsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PostsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=posts-posts-module-es5.js.map