(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{G6Xp:function(e,t,n){"use strict";n.r(t),n.d(t,"UserPermissionsPageModule",(function(){return D}));var i=n("ofXK"),r=n("3Pt+"),s=n("TEn/"),o=n("pk6O"),l=n("tyNb"),a=n("fXoL"),c=n("1HhC"),m=n("yvdN");let d=(()=>{class e{constructor(e){this.splitPanel=e}ngOnInit(){}ionViewWillEnter(){this.splitPanel.show.next(!0)}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-user-permissions"]],decls:19,vars:6,consts:[["title","USUARIOS PERMISOS"],["size-md","3","size-sm","6","size-xs","12"],["routerLink","/user-permissions/list"],[2,"height","120px","width","100%","display","flex","align-items","center","justify-content","center"],["name","list-circle-outline","color","primary",1,"icon-m"],[1,"ion-text-center"],["routerLink","/user-permissions/create"],["name","add-circle-outline","color","success",1,"icon-m"]],template:function(e,t){1&e&&(a["\u0275\u0275element"](0,"app-main-header",0),a["\u0275\u0275elementStart"](1,"ion-content"),a["\u0275\u0275elementStart"](2,"ion-row"),a["\u0275\u0275elementStart"](3,"ion-col",1),a["\u0275\u0275elementStart"](4,"ion-card",2),a["\u0275\u0275elementStart"](5,"div",3),a["\u0275\u0275element"](6,"ion-icon",4),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](7,"ion-card-header"),a["\u0275\u0275elementStart"](8,"ion-card-subtitle",5),a["\u0275\u0275text"](9),a["\u0275\u0275pipe"](10,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"ion-col",1),a["\u0275\u0275elementStart"](12,"ion-card",6),a["\u0275\u0275elementStart"](13,"div",3),a["\u0275\u0275element"](14,"ion-icon",7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](15,"ion-card-header"),a["\u0275\u0275elementStart"](16,"ion-card-subtitle",5),a["\u0275\u0275text"](17),a["\u0275\u0275pipe"](18,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](9),a["\u0275\u0275textInterpolate1"](" Listar ",a["\u0275\u0275pipeBind1"](10,2,"USUARIOS PERMISOS")," "),a["\u0275\u0275advance"](8),a["\u0275\u0275textInterpolate1"](" Crear ",a["\u0275\u0275pipeBind1"](18,4,"USUARIOS PERMISOS")," "))},directives:[m.a,s.IonContent,s.IonRow,s.IonCol,s.IonCard,s.RouterLinkDelegate,l.i,s.IonIcon,s.IonCardHeader,s.IonCardSubtitle],pipes:[i.TitleCasePipe],styles:[""]}),e})();var u=n("mrSG"),p=n("2Vo4"),S=n("TIcx"),v=n("EgAa"),f=n("PWdp"),h=n("Ezvo");let g=(()=>{class e{constructor(e,t,n,i,r){this.api=e,this.alert=t,this.toast=n,this.router=i,this.navigation=r,this.userPermissionsUrl="user-permissions",this.userPermissionsFormValid=new p.a(!1),this.userPermissions=[],this.userPermission={},this.userPermissionLists={},this.searchValue="",this.perPage=10,this.meta=null,this.page=1,this.pagesContent=document.getElementById("pages-content")}getUserPermissions(e=this.page,t=this.perPage){this.api.get(this.userPermissionsUrl+"?page="+e+"&perPage="+t+"&q[name:cont]="+this.searchValue).subscribe(e=>{document.getElementById("pages-content").scrollToTop(300),this.userPermissions=e.data,this.userPermissionLists=e.lists,this.meta=e.meta},e=>{console.error(e)})}editUserPermission(e){this.api.get(this.userPermissionsUrl+"/"+e+"/edit").subscribe(e=>{this.userPermission=e.data.model,this.userPermissionLists=e.lists},e=>{console.error(e)})}updateUserPermission(){this.api.put(this.userPermissionsUrl+"/"+this.userPermission.id,{model:this.userPermission,pivots:{user_role:this.userPermission.user_roles}}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.navigation.back(),this.getUserPermissions(1)})}createUserPermission(){this.api.get(this.userPermissionsUrl+"/create").subscribe(e=>{this.userPermission={},this.userPermissionLists=e.lists})}storeUserPermission(){this.api.post(this.userPermissionsUrl,{model:this.userPermission,pivots:{user_role:this.userPermission.user_roles}}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.navigation.back(),this.getUserPermissions(1)})}deleteUserPermission(e){return Object(u.a)(this,void 0,void 0,(function*(){(yield this.alert.confirmation("Desea eliminar el item?"))&&this.api.delete(this.userPermissionsUrl+"/"+e,{}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.getUserPermissions(1)})}))}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275inject"](S.a),a["\u0275\u0275inject"](v.a),a["\u0275\u0275inject"](f.a),a["\u0275\u0275inject"](l.h),a["\u0275\u0275inject"](h.a))},e.\u0275prov=a["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var P=n("JmBq");const I=["userPermissionsForm"];function E(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",9),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]().$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function x(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,E,2,1,"div",8),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275nextContext"]();const n=a["\u0275\u0275reference"](1);a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",null==n.form.controls.user_role_ids?null:n.form.controls.user_role_ids.hasError(e.type))}}function y(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",9),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]().$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function C(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,y,2,1,"div",8),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275nextContext"]();const n=a["\u0275\u0275reference"](1);a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",null==n.form.controls.name?null:n.form.controls.name.hasError(e.type))}}function b(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",9),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]().$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function U(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,b,2,1,"div",8),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275nextContext"]();const n=a["\u0275\u0275reference"](1);a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",null==n.form.controls.code?null:n.form.controls.code.hasError(e.type))}}let w=(()=>{class e{constructor(e,t){this.userPermissionsService=e,this.toTitlecase=t,this.model={},this.validationMessages={name:[{type:"required",message:"El campo "+this.toTitlecase.transform("NOMBRE")+" es obligatorio."}],code:[{type:"required",message:"El campo "+this.toTitlecase.transform("C\xd3DIGO")+" es obligatorio."}],user_role_ids:[{type:"required",message:"El campo "+this.toTitlecase.transform("USUARIOS ROLES")+" es obligatorio."}]}}ngOnInit(){}ngAfterViewInit(){}setUserRoleIds(e){let t=null;if(e.value.length){t=[];for(let n=0;n<e.value.length;n++)t.push(e.value[n].id)}this.userPermissionsService.userPermission.user_role_ids=t}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](g),a["\u0275\u0275directiveInject"](i.TitleCasePipe))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-user-permissions-form"]],viewQuery:function(e,t){var n;1&e&&a["\u0275\u0275viewQuery"](I,!0),2&e&&a["\u0275\u0275queryRefresh"](n=a["\u0275\u0275loadQuery"]())&&(t.userPermissionsForm=n.first)},inputs:{model:"model"},decls:25,vars:31,consts:[["novalidate","","autocomplete","off"],["userPermissionsForm","ngForm"],[1,"item-transparent"],["name","user_role_ids","id","user_role_ids-field","itemValueField","id","itemTextField","name",3,"ngModel","items","isMultiple","canClear","hasConfirmButton","confirmButtonText","searchPlaceholder","searchFailText","closeButtonText","clearButtonText","canSearch","ngModelChange","onChange"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["type","text","name","name","id","name-field","placeholder","",3,"ngModel","required","ngModelChange"],["type","text","name","code","id","code-field","placeholder","",3,"ngModel","required","ngModelChange"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"form",0,1),a["\u0275\u0275elementStart"](2,"ion-item",2),a["\u0275\u0275elementStart"](3,"ion-label"),a["\u0275\u0275text"](4),a["\u0275\u0275pipe"](5,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"ionic-selectable",3),a["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.user_roles=e}))("onChange",(function(e){return t.setUserRoleIds(e)})),a["\u0275\u0275pipe"](7,"titlecase"),a["\u0275\u0275pipe"](8,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](9,"div",4),a["\u0275\u0275template"](10,x,2,1,"ng-container",5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"ion-item",2),a["\u0275\u0275elementStart"](12,"ion-label"),a["\u0275\u0275text"](13),a["\u0275\u0275pipe"](14,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](15,"ion-input",6),a["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.name=e})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](16,"div",4),a["\u0275\u0275template"](17,C,2,1,"ng-container",5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](18,"ion-item",2),a["\u0275\u0275elementStart"](19,"ion-label"),a["\u0275\u0275text"](20),a["\u0275\u0275pipe"](21,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](22,"ion-input",7),a["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.code=e})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](23,"div",4),a["\u0275\u0275template"](24,U,2,1,"ng-container",5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](4),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](5,21,"USUARIOS ROLES")),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngModel",t.model.user_roles)("items",t.userPermissionsService.userPermissionLists.UserRole)("isMultiple",!0)("canClear",!0)("hasConfirmButton",!0)("confirmButtonText","Seleccionar")("searchPlaceholder","Buscar "+a["\u0275\u0275pipeBind1"](7,23,"USUARIOS ROLES"))("searchFailText","No se encontro "+a["\u0275\u0275pipeBind1"](8,25,"USUARIOS ROLES")+" que coincida!")("closeButtonText","Cancelar")("clearButtonText","Limpiar")("canSearch",!0),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("ngForOf",t.validationMessages.user_role_ids),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](14,27,"NOMBRE")),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngModel",t.model.name)("required",!0),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngForOf",t.validationMessages.name),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](21,29,"C\xd3DIGO")),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngModel",t.model.code)("required",!0),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngForOf",t.validationMessages.code))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.NgForm,s.IonItem,s.IonLabel,P.a,r.NgControlStatus,r.NgModel,i.NgForOf,s.IonInput,s.TextValueAccessor,r.RequiredValidator,i.NgIf],pipes:[i.TitleCasePipe],styles:[""]}),e})();const O=["userPermissionForm"];function B(e,t){1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275text"](1,"Guardar"),a["\u0275\u0275elementContainerEnd"]())}let R=(()=>{class e{constructor(e,t,n,i){this.userPermissionsService=e,this.route=t,this.platform=n,this.splitPanel=i,this.id=null,this.model=null}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.userPermissionsService.editUserPermission(this.id)}ionViewWillEnter(){this.splitPanel.show.next(!0)}ngAfterViewInit(){this.userPermissionForm.userPermissionsForm.valueChanges.subscribe(e=>{this.userPermissionsService.userPermissionsFormValid.next(this.userPermissionForm.userPermissionsForm.valid)})}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](g),a["\u0275\u0275directiveInject"](l.a),a["\u0275\u0275directiveInject"](s.Platform),a["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-user-permissions-edit"]],viewQuery:function(e,t){var n;1&e&&a["\u0275\u0275viewQuery"](O,!0),2&e&&a["\u0275\u0275queryRefresh"](n=a["\u0275\u0275loadQuery"]())&&(t.userPermissionForm=n.first)},decls:15,vars:9,consts:[["slot","start"],[3,"text","icon"],["slot","primary"],["color","success","fill","clear",3,"disabled","click"],[4,"ngIf"],["slot","end","color","success","name","save-outline"],["fullscreen",""],[3,"model"],["userPermissionForm",""]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"ion-header"),a["\u0275\u0275elementStart"](1,"ion-toolbar"),a["\u0275\u0275elementStart"](2,"ion-buttons",0),a["\u0275\u0275element"](3,"ion-back-button",1),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"ion-buttons",2),a["\u0275\u0275elementStart"](5,"ion-button",3),a["\u0275\u0275listener"]("click",(function(){return t.userPermissionsService.updateUserPermission()})),a["\u0275\u0275template"](6,B,2,0,"ng-container",4),a["\u0275\u0275element"](7,"ion-icon",5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"ion-title"),a["\u0275\u0275text"](9),a["\u0275\u0275pipe"](10,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"ion-content",6),a["\u0275\u0275elementStart"](12,"ion-card"),a["\u0275\u0275element"](13,"app-user-permissions-form",7,8),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("text","")("icon","arrow-back-outline"),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("disabled",!t.userPermissionsService.userPermissionsFormValid.value),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",!t.platform.is("mobile")),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate2"]("Editar ",a["\u0275\u0275pipeBind1"](10,7,"USUARIOS PERMISOS"),": ",null==t.userPermissionsService.userPermission?null:t.userPermissionsService.userPermission.name,""),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("model",t.userPermissionsService.userPermission))},directives:[s.IonHeader,s.IonToolbar,s.IonButtons,s.IonBackButton,s.IonBackButtonDelegate,s.IonButton,i.NgIf,s.IonIcon,s.IonTitle,s.IonContent,s.IonCard,w],pipes:[i.TitleCasePipe],styles:[""]}),e})();const M=["userPermissionForm"];function F(e,t){1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275text"](1,"Guardar"),a["\u0275\u0275elementContainerEnd"]())}let k=(()=>{class e{constructor(e,t,n,i){this.userPermissionsService=e,this.route=t,this.platform=n,this.splitPanel=i,this.id=null,this.formValid=!1}ngOnInit(){this.clearPosts()}ionViewWillEnter(){this.splitPanel.show.next(!0)}ngAfterViewInit(){this.userPermissionForm.userPermissionsForm.valueChanges.subscribe(e=>{this.userPermissionsService.userPermissionsFormValid.next(this.userPermissionForm.userPermissionsForm.valid)})}clearPosts(){console.log("clear"),this.userPermissionsService.createUserPermission(),this.userPermissionsService.userPermission={}}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](g),a["\u0275\u0275directiveInject"](l.a),a["\u0275\u0275directiveInject"](s.Platform),a["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-user-permissions-create"]],viewQuery:function(e,t){var n;1&e&&a["\u0275\u0275viewQuery"](M,!0),2&e&&a["\u0275\u0275queryRefresh"](n=a["\u0275\u0275loadQuery"]())&&(t.userPermissionForm=n.first)},decls:15,vars:8,consts:[["slot","start"],[3,"text","icon"],["slot","primary"],["color","success","fill","clear",3,"disabled","click"],[4,"ngIf"],["slot","end","color","success","name","save-outline"],["fullscreen",""],[3,"model"],["userPermissionForm",""]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"ion-header"),a["\u0275\u0275elementStart"](1,"ion-toolbar"),a["\u0275\u0275elementStart"](2,"ion-buttons",0),a["\u0275\u0275element"](3,"ion-back-button",1),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"ion-buttons",2),a["\u0275\u0275elementStart"](5,"ion-button",3),a["\u0275\u0275listener"]("click",(function(){return t.userPermissionsService.storeUserPermission()})),a["\u0275\u0275template"](6,F,2,0,"ng-container",4),a["\u0275\u0275element"](7,"ion-icon",5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"ion-title"),a["\u0275\u0275text"](9),a["\u0275\u0275pipe"](10,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"ion-content",6),a["\u0275\u0275elementStart"](12,"ion-card"),a["\u0275\u0275element"](13,"app-user-permissions-form",7,8),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("text","")("icon","arrow-back-outline"),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("disabled",!t.userPermissionsService.userPermissionsFormValid.value),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",!t.platform.is("mobile")),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate1"]("Crear ",a["\u0275\u0275pipeBind1"](10,6,"USUARIOS PERMISOS"),""),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("model",t.userPermissionsService.userPermission))},directives:[s.IonHeader,s.IonToolbar,s.IonButtons,s.IonBackButton,s.IonBackButtonDelegate,s.IonButton,i.NgIf,s.IonIcon,s.IonTitle,s.IonContent,s.IonCard,w],pipes:[i.TitleCasePipe],styles:[""]}),e})();var T=n("fYRX");function _(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"span"),a["\u0275\u0275text"](1,", "),a["\u0275\u0275elementEnd"]())}function L(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275elementStart"](1,"a",14),a["\u0275\u0275text"](2),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](3,_,2,0,"span",3),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit,n=t.last;a["\u0275\u0275advance"](1),a["\u0275\u0275propertyInterpolate1"]("routerLink","/user-roles/",null==e?null:e.id,"/edit"),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](null==e?null:e.name),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",!n)}}function V(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,L,4,3,"ng-container",5),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]().$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",null==e?null:e.user_roles)}}function j(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"ion-card"),a["\u0275\u0275elementStart"](1,"ion-list"),a["\u0275\u0275elementStart"](2,"ion-item",6),a["\u0275\u0275elementStart"](3,"ion-label",7),a["\u0275\u0275elementStart"](4,"b"),a["\u0275\u0275text"](5),a["\u0275\u0275pipe"](6,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](7,"div",8),a["\u0275\u0275text"](8),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](9,"ion-item",6),a["\u0275\u0275elementStart"](10,"ion-label",7),a["\u0275\u0275elementStart"](11,"b"),a["\u0275\u0275text"](12),a["\u0275\u0275pipe"](13,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](14,"div",8),a["\u0275\u0275text"](15),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](16,"ion-item",6),a["\u0275\u0275elementStart"](17,"ion-label",7),a["\u0275\u0275elementStart"](18,"b"),a["\u0275\u0275text"](19),a["\u0275\u0275pipe"](20,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](21,"div",8),a["\u0275\u0275template"](22,V,2,1,"ng-container",3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](23,"ion-footer"),a["\u0275\u0275elementStart"](24,"ion-row"),a["\u0275\u0275elementStart"](25,"ion-col",9),a["\u0275\u0275elementStart"](26,"ion-button",10),a["\u0275\u0275element"](27,"ion-icon",11),a["\u0275\u0275elementStart"](28,"div"),a["\u0275\u0275text"](29,"Editar"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](30,"ion-col",9),a["\u0275\u0275elementStart"](31,"ion-button",12),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](e);const n=t.$implicit;return a["\u0275\u0275nextContext"](2).userPermissionsService.deleteUserPermission(null==n?null:n.id)})),a["\u0275\u0275element"](32,"ion-icon",13),a["\u0275\u0275elementStart"](33,"div"),a["\u0275\u0275text"](34,"Eliminar"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;a["\u0275\u0275advance"](5),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](6,7,"NOMBRE")),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](null==e?null:e.name),a["\u0275\u0275advance"](4),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](13,9,"C\xd3DIGO")),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](null==e?null:e.code),a["\u0275\u0275advance"](4),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](20,11,"USUARIOS ROLES")),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngIf",null==e||null==e.user_roles?null:e.user_roles.length),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("routerLink","/user-permissions/"+(null==e?null:e.id)+"/edit")}}function A(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,j,35,13,"ion-card",5),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",e.userPermissionsService.userPermissions)}}function N(e,t){1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275elementStart"](1,"ion-item"),a["\u0275\u0275element"](2,"ion-icon",15),a["\u0275\u0275elementStart"](3,"ion-label"),a["\u0275\u0275elementStart"](4,"h2"),a["\u0275\u0275text"](5),a["\u0275\u0275pipe"](6,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](7,"ion-button",16),a["\u0275\u0275text"](8),a["\u0275\u0275pipe"](9,"titlecase"),a["\u0275\u0275element"](10,"ion-icon",17),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementContainerEnd"]()),2&e&&(a["\u0275\u0275advance"](5),a["\u0275\u0275textInterpolate1"]("No se encontraron ",a["\u0275\u0275pipeBind1"](6,3,"USUARIOS PERMISOS"),""),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("routerLink","/user-permissions/create"),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" Crear ",a["\u0275\u0275pipeBind1"](9,5,"USUARIOS PERMISOS")," "))}function q(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"ion-row"),a["\u0275\u0275elementStart"](1,"ion-col",18),a["\u0275\u0275elementStart"](2,"ion-button",19),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](e);const t=a["\u0275\u0275nextContext"]();return t.userPermissionsService.getUserPermissions(t.userPermissionsService.meta.current_page-1)})),a["\u0275\u0275element"](3,"ion-icon",20),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"ion-button",21),a["\u0275\u0275text"](5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"ion-button",19),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](e);const t=a["\u0275\u0275nextContext"]();return t.userPermissionsService.getUserPermissions(t.userPermissionsService.meta.current_page+1)})),a["\u0275\u0275element"](7,"ion-icon",22),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("disabled",1==e.userPermissionsService.meta.current_page),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("disabled",!0),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate5"](" Pag: ",e.userPermissionsService.meta.current_page," /",e.userPermissionsService.meta.last_page," ",e.userPermissionsService.meta.from,"-",e.userPermissionsService.meta.to," /",e.userPermissionsService.meta.total," "),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("disabled",e.userPermissionsService.meta.current_page==e.userPermissionsService.meta.last_page)}}const Q=[{path:"",component:d},{path:"list",component:(()=>{class e{constructor(e,t,n,i){this.userPermissionsService=e,this.api=t,this.loading=n,this.splitPanel=i}ngOnInit(){this.userPermissionsService.getUserPermissions()}ionViewWillEnter(){this.splitPanel.show.next(!0)}scrollToTop(){this.content.scrollToTop(300)}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](g),a["\u0275\u0275directiveInject"](S.a),a["\u0275\u0275directiveInject"](T.a),a["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-user-permissions-list"]],viewQuery:function(e,t){var n;1&e&&a["\u0275\u0275viewQuery"](s.IonContent,!0),2&e&&a["\u0275\u0275queryRefresh"](n=a["\u0275\u0275loadQuery"]())&&(t.content=n.first)},decls:12,vars:18,consts:[["primaryLink","user-permissions/create","primaryIcon","add-circle-outline",3,"title","primaryText"],["id","pages-content"],["showCancelButton","focus",3,"cancelButtonText","placeholder","ngModel","ionCancel","keyup.enter","ngModelChange"],[4,"ngIf"],[1,"lists-footer"],[4,"ngFor","ngForOf"],[1,"item-transparent"],["position","fixed"],[1,"wrap-text"],[1,"ion-text-center"],["color","success","size","small","fill","clear",3,"routerLink"],["name","create-outline"],["color","danger","size","small","fill","clear",3,"click"],["name","trash-outline"],[3,"routerLink"],["name","warning-outline","slot","start",1,"text-warning"],["fill","outline","color","success","slot","end",3,"routerLink"],["name","add-circle-outline","slot","end"],["size","12",1,"ion-text-center"],["fill","clear",3,"disabled","click"],["slot","end","name","play-outline",2,"transform","rotate(180deg)"],["fill","clear",3,"disabled"],["slot","start","name","play-outline"]],template:function(e,t){1&e&&(a["\u0275\u0275element"](0,"app-main-header",0),a["\u0275\u0275pipe"](1,"titlecase"),a["\u0275\u0275pipe"](2,"lowercase"),a["\u0275\u0275elementStart"](3,"ion-content",1),a["\u0275\u0275elementStart"](4,"ion-searchbar",2),a["\u0275\u0275listener"]("ionCancel",(function(){return t.userPermissionsService.searchValue="",t.userPermissionsService.getUserPermissions()}))("keyup.enter",(function(){return t.userPermissionsService.getUserPermissions()}))("ngModelChange",(function(e){return t.userPermissionsService.searchValue=e})),a["\u0275\u0275pipe"](5,"lowercase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](6,A,2,1,"ng-container",3),a["\u0275\u0275pipe"](7,"async"),a["\u0275\u0275template"](8,N,11,7,"ng-container",3),a["\u0275\u0275pipe"](9,"async"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](10,"ion-footer",4),a["\u0275\u0275template"](11,q,8,8,"ion-row",3),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275propertyInterpolate"]("title",a["\u0275\u0275pipeBind1"](1,8,"USUARIOS PERMISOS")),a["\u0275\u0275propertyInterpolate1"]("primaryText","Crear ",a["\u0275\u0275pipeBind1"](2,10,"USUARIOS PERMISOS"),""),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("cancelButtonText","Cancelar")("placeholder","Buscar "+a["\u0275\u0275pipeBind1"](5,12,"USUARIOS PERMISOS"))("ngModel",t.userPermissionsService.searchValue),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngIf",!a["\u0275\u0275pipeBind1"](7,14,t.loading.loading)&&(null==t.userPermissionsService.userPermissions?null:t.userPermissionsService.userPermissions.length)),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngIf",!(a["\u0275\u0275pipeBind1"](9,16,t.loading.loading)||null!=t.userPermissionsService.userPermissions&&t.userPermissionsService.userPermissions.length)),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngIf",t.userPermissionsService.meta))},directives:[m.a,s.IonContent,s.IonSearchbar,s.TextValueAccessor,r.NgControlStatus,r.NgModel,i.NgIf,s.IonFooter,i.NgForOf,s.IonCard,s.IonList,s.IonItem,s.IonLabel,s.IonRow,s.IonCol,s.IonButton,s.RouterLinkDelegate,l.i,s.IonIcon,l.k],pipes:[i.TitleCasePipe,i.LowerCasePipe,i.AsyncPipe],styles:[""]}),e})()},{path:"create",component:k},{path:":id/edit",component:R}];let $=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.l.forChild(Q)],l.l]}),e})(),D=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.CommonModule,r.FormsModule,s.IonicModule,o.a,$]]}),e})()}}]);