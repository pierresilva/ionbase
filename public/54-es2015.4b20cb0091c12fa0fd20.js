(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"1LGv":function(e,t,n){"use strict";n.r(t),n.d(t,"UserRolesPageModule",(function(){return J}));var r=n("ofXK"),o=n("3Pt+"),i=n("TEn/"),l=n("pk6O"),s=n("tyNb"),a=n("fXoL"),c=n("1HhC"),m=n("yvdN");let d=(()=>{class e{constructor(e){this.splitPanel=e}ngOnInit(){}ionViewWillEnter(){this.splitPanel.show.next(!0)}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-user-roles"]],decls:19,vars:6,consts:[["title","USUARIOS ROLES"],["size-md","3","size-sm","6","size-xs","12"],["routerLink","/user-roles/list"],[2,"height","120px","width","100%","display","flex","align-items","center","justify-content","center"],["name","list-circle-outline","color","primary",1,"icon-m"],[1,"ion-text-center"],["routerLink","/user-roles/create"],["name","add-circle-outline","color","success",1,"icon-m"]],template:function(e,t){1&e&&(a["\u0275\u0275element"](0,"app-main-header",0),a["\u0275\u0275elementStart"](1,"ion-content"),a["\u0275\u0275elementStart"](2,"ion-row"),a["\u0275\u0275elementStart"](3,"ion-col",1),a["\u0275\u0275elementStart"](4,"ion-card",2),a["\u0275\u0275elementStart"](5,"div",3),a["\u0275\u0275element"](6,"ion-icon",4),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](7,"ion-card-header"),a["\u0275\u0275elementStart"](8,"ion-card-subtitle",5),a["\u0275\u0275text"](9),a["\u0275\u0275pipe"](10,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"ion-col",1),a["\u0275\u0275elementStart"](12,"ion-card",6),a["\u0275\u0275elementStart"](13,"div",3),a["\u0275\u0275element"](14,"ion-icon",7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](15,"ion-card-header"),a["\u0275\u0275elementStart"](16,"ion-card-subtitle",5),a["\u0275\u0275text"](17),a["\u0275\u0275pipe"](18,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](9),a["\u0275\u0275textInterpolate1"](" Listar ",a["\u0275\u0275pipeBind1"](10,2,"USUARIOS ROLES")," "),a["\u0275\u0275advance"](8),a["\u0275\u0275textInterpolate1"](" Crear ",a["\u0275\u0275pipeBind1"](18,4,"USUARIOS ROLES")," "))},directives:[m.a,i.IonContent,i.IonRow,i.IonCol,i.IonCard,i.RouterLinkDelegate,s.i,i.IonIcon,i.IonCardHeader,i.IonCardSubtitle],pipes:[r.TitleCasePipe],styles:[""]}),e})();var u=n("mrSG"),p=n("2Vo4"),S=n("TIcx"),f=n("EgAa"),v=n("PWdp"),h=n("Ezvo");let g=(()=>{class e{constructor(e,t,n,r,o){this.api=e,this.alert=t,this.toast=n,this.router=r,this.navigation=o,this.userRolesUrl="user-roles",this.userRolesFormValid=new p.a(!1),this.userRoles=[],this.userRole={},this.userRoleLists={},this.searchValue="",this.perPage=10,this.meta=null,this.page=1,this.pagesContent=document.getElementById("pages-content")}getUserRoles(e=this.page,t=this.perPage){this.api.get(this.userRolesUrl+"?page="+e+"&perPage="+t+"&q[name:cont]="+this.searchValue).subscribe(e=>{document.getElementById("pages-content").scrollToTop(300),this.userRoles=e.data,this.userRoleLists=e.lists,this.meta=e.meta},e=>{console.error(e)})}editUserRole(e){this.api.get(this.userRolesUrl+"/"+e+"/edit").subscribe(e=>{this.userRole=e.data.model,this.userRoleLists=e.lists},e=>{console.error(e)})}updateUserRole(){this.api.put(this.userRolesUrl+"/"+this.userRole.id,{model:this.userRole,pivots:{user:this.userRole.users,user_permission:this.userRole.user_permissions}}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.navigation.back(),this.getUserRoles(1)})}createUserRole(){this.api.get(this.userRolesUrl+"/create").subscribe(e=>{this.userRole={},this.userRoleLists=e.lists})}storeUserRole(){this.api.post(this.userRolesUrl,{model:this.userRole,pivots:{user:this.userRole.users,user_permission:this.userRole.user_permissions}}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.navigation.back(),this.getUserRoles(1)})}deleteUserRole(e){return Object(u.a)(this,void 0,void 0,(function*(){(yield this.alert.confirmation("Desea eliminar el item?"))&&this.api.delete(this.userRolesUrl+"/"+e,{}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.getUserRoles(1)})}))}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275inject"](S.a),a["\u0275\u0275inject"](f.a),a["\u0275\u0275inject"](v.a),a["\u0275\u0275inject"](s.h),a["\u0275\u0275inject"](h.a))},e.\u0275prov=a["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var R=n("JmBq");const I=["userRolesForm"];function E(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",10),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]().$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function x(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,E,2,1,"div",9),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275nextContext"]();const n=a["\u0275\u0275reference"](1);a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",null==n.form.controls.user_ids?null:n.form.controls.user_ids.hasError(e.type))}}function C(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",10),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]().$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function y(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,C,2,1,"div",9),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275nextContext"]();const n=a["\u0275\u0275reference"](1);a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",null==n.form.controls.user_permission_ids?null:n.form.controls.user_permission_ids.hasError(e.type))}}function b(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",10),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]().$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function U(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,b,2,1,"div",9),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275nextContext"]();const n=a["\u0275\u0275reference"](1);a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",null==n.form.controls.name?null:n.form.controls.name.hasError(e.type))}}function B(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",10),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]().$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function O(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,B,2,1,"div",9),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275nextContext"]();const n=a["\u0275\u0275reference"](1);a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",null==n.form.controls.code?null:n.form.controls.code.hasError(e.type))}}let w=(()=>{class e{constructor(e,t){this.userRolesService=e,this.toTitlecase=t,this.model={},this.validationMessages={name:[{type:"required",message:"El campo "+this.toTitlecase.transform("NOMBRE")+" es obligatorio."}],code:[{type:"required",message:"El campo "+this.toTitlecase.transform("C\xd3DIGO")+" es obligatorio."}],user_ids:[{type:"required",message:"El campo "+this.toTitlecase.transform("USUARIOS")+" es obligatorio."}],user_permission_ids:[{type:"required",message:"El campo "+this.toTitlecase.transform("USUARIOS PERMISOS")+" es obligatorio."}]}}ngOnInit(){}ngAfterViewInit(){}setUserIds(e){let t=null;if(e.value.length){t=[];for(let n=0;n<e.value.length;n++)t.push(e.value[n].id)}this.userRolesService.userRole.user_ids=t}setUserPermissionIds(e){let t=null;if(e.value.length){t=[];for(let n=0;n<e.value.length;n++)t.push(e.value[n].id)}this.userRolesService.userRole.user_permission_ids=t}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](g),a["\u0275\u0275directiveInject"](r.TitleCasePipe))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-user-roles-form"]],viewQuery:function(e,t){var n;1&e&&a["\u0275\u0275viewQuery"](I,!0),2&e&&a["\u0275\u0275queryRefresh"](n=a["\u0275\u0275loadQuery"]())&&(t.userRolesForm=n.first)},inputs:{model:"model"},decls:34,vars:50,consts:[["novalidate","","autocomplete","off"],["userRolesForm","ngForm"],[1,"item-transparent"],["name","user_ids","id","user_ids-field","itemValueField","id","itemTextField","name",3,"ngModel","items","isMultiple","canClear","hasConfirmButton","confirmButtonText","searchPlaceholder","searchFailText","closeButtonText","clearButtonText","canSearch","ngModelChange","onChange"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["name","user_permission_ids","id","user_permission_ids-field","itemValueField","id","itemTextField","name",3,"ngModel","items","isMultiple","canClear","hasConfirmButton","confirmButtonText","searchPlaceholder","searchFailText","closeButtonText","clearButtonText","canSearch","ngModelChange","onChange"],["type","text","name","name","id","name-field","placeholder","",3,"ngModel","required","ngModelChange"],["type","text","name","code","id","code-field","placeholder","",3,"ngModel","required","ngModelChange"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"form",0,1),a["\u0275\u0275elementStart"](2,"ion-item",2),a["\u0275\u0275elementStart"](3,"ion-label"),a["\u0275\u0275text"](4),a["\u0275\u0275pipe"](5,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"ionic-selectable",3),a["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.users=e}))("onChange",(function(e){return t.setUserIds(e)})),a["\u0275\u0275pipe"](7,"titlecase"),a["\u0275\u0275pipe"](8,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](9,"div",4),a["\u0275\u0275template"](10,x,2,1,"ng-container",5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"ion-item",2),a["\u0275\u0275elementStart"](12,"ion-label"),a["\u0275\u0275text"](13),a["\u0275\u0275pipe"](14,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](15,"ionic-selectable",6),a["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.user_permissions=e}))("onChange",(function(e){return t.setUserPermissionIds(e)})),a["\u0275\u0275pipe"](16,"titlecase"),a["\u0275\u0275pipe"](17,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](18,"div",4),a["\u0275\u0275template"](19,y,2,1,"ng-container",5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](20,"ion-item",2),a["\u0275\u0275elementStart"](21,"ion-label"),a["\u0275\u0275text"](22),a["\u0275\u0275pipe"](23,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](24,"ion-input",7),a["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.name=e})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](25,"div",4),a["\u0275\u0275template"](26,U,2,1,"ng-container",5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](27,"ion-item",2),a["\u0275\u0275elementStart"](28,"ion-label"),a["\u0275\u0275text"](29),a["\u0275\u0275pipe"](30,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](31,"ion-input",8),a["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.code=e})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](32,"div",4),a["\u0275\u0275template"](33,O,2,1,"ng-container",5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](4),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](5,34,"USUARIOS")),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngModel",t.model.users)("items",t.userRolesService.userRoleLists.User)("isMultiple",!0)("canClear",!0)("hasConfirmButton",!0)("confirmButtonText","Seleccionar")("searchPlaceholder","Buscar "+a["\u0275\u0275pipeBind1"](7,36,"USUARIOS"))("searchFailText","No se encontro "+a["\u0275\u0275pipeBind1"](8,38,"USUARIOS")+" que coincida!")("closeButtonText","Cancelar")("clearButtonText","Limpiar")("canSearch",!0),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("ngForOf",t.validationMessages.user_ids),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](14,40,"USUARIOS PERMISOS")),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngModel",t.model.user_permissions)("items",t.userRolesService.userRoleLists.UserPermission)("isMultiple",!0)("canClear",!0)("hasConfirmButton",!0)("confirmButtonText","Seleccionar")("searchPlaceholder","Buscar "+a["\u0275\u0275pipeBind1"](16,42,"USUARIOS PERMISOS"))("searchFailText","No se encontro "+a["\u0275\u0275pipeBind1"](17,44,"USUARIOS PERMISOS")+" que coincida!")("closeButtonText","Cancelar")("clearButtonText","Limpiar")("canSearch",!0),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("ngForOf",t.validationMessages.user_permission_ids),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](23,46,"NOMBRE")),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngModel",t.model.name)("required",!0),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngForOf",t.validationMessages.name),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](30,48,"C\xd3DIGO")),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngModel",t.model.code)("required",!0),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngForOf",t.validationMessages.code))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.NgForm,i.IonItem,i.IonLabel,R.a,o.NgControlStatus,o.NgModel,r.NgForOf,i.IonInput,i.TextValueAccessor,o.RequiredValidator,r.NgIf],pipes:[r.TitleCasePipe],styles:[""]}),e})();const F=["userRoleForm"];function T(e,t){1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275text"](1,"Guardar"),a["\u0275\u0275elementContainerEnd"]())}let M=(()=>{class e{constructor(e,t,n,r){this.userRolesService=e,this.route=t,this.platform=n,this.splitPanel=r,this.id=null,this.model=null}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.userRolesService.editUserRole(this.id)}ionViewWillEnter(){this.splitPanel.show.next(!0)}ngAfterViewInit(){this.userRoleForm.userRolesForm.valueChanges.subscribe(e=>{this.userRolesService.userRolesFormValid.next(this.userRoleForm.userRolesForm.valid)})}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](g),a["\u0275\u0275directiveInject"](s.a),a["\u0275\u0275directiveInject"](i.Platform),a["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-user-roles-edit"]],viewQuery:function(e,t){var n;1&e&&a["\u0275\u0275viewQuery"](F,!0),2&e&&a["\u0275\u0275queryRefresh"](n=a["\u0275\u0275loadQuery"]())&&(t.userRoleForm=n.first)},decls:15,vars:9,consts:[["slot","start"],[3,"text","icon"],["slot","primary"],["color","success","fill","clear",3,"disabled","click"],[4,"ngIf"],["slot","end","color","success","name","save-outline"],["fullscreen",""],[3,"model"],["userRoleForm",""]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"ion-header"),a["\u0275\u0275elementStart"](1,"ion-toolbar"),a["\u0275\u0275elementStart"](2,"ion-buttons",0),a["\u0275\u0275element"](3,"ion-back-button",1),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"ion-buttons",2),a["\u0275\u0275elementStart"](5,"ion-button",3),a["\u0275\u0275listener"]("click",(function(){return t.userRolesService.updateUserRole()})),a["\u0275\u0275template"](6,T,2,0,"ng-container",4),a["\u0275\u0275element"](7,"ion-icon",5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"ion-title"),a["\u0275\u0275text"](9),a["\u0275\u0275pipe"](10,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"ion-content",6),a["\u0275\u0275elementStart"](12,"ion-card"),a["\u0275\u0275element"](13,"app-user-roles-form",7,8),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("text","")("icon","arrow-back-outline"),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("disabled",!t.userRolesService.userRolesFormValid.value),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",!t.platform.is("mobile")),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate2"]("Editar ",a["\u0275\u0275pipeBind1"](10,7,"USUARIOS ROLES"),": ",null==t.userRolesService.userRole?null:t.userRolesService.userRole.name,""),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("model",t.userRolesService.userRole))},directives:[i.IonHeader,i.IonToolbar,i.IonButtons,i.IonBackButton,i.IonBackButtonDelegate,i.IonButton,r.NgIf,i.IonIcon,i.IonTitle,i.IonContent,i.IonCard,w],pipes:[r.TitleCasePipe],styles:[""]}),e})();const _=["userRoleForm"];function k(e,t){1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275text"](1,"Guardar"),a["\u0275\u0275elementContainerEnd"]())}let P=(()=>{class e{constructor(e,t,n,r){this.userRolesService=e,this.route=t,this.platform=n,this.splitPanel=r,this.id=null,this.formValid=!1}ngOnInit(){this.clearPosts()}ionViewWillEnter(){this.splitPanel.show.next(!0)}ngAfterViewInit(){this.userRoleForm.userRolesForm.valueChanges.subscribe(e=>{this.userRolesService.userRolesFormValid.next(this.userRoleForm.userRolesForm.valid)})}clearPosts(){console.log("clear"),this.userRolesService.createUserRole(),this.userRolesService.userRole={}}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](g),a["\u0275\u0275directiveInject"](s.a),a["\u0275\u0275directiveInject"](i.Platform),a["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-user-roles-create"]],viewQuery:function(e,t){var n;1&e&&a["\u0275\u0275viewQuery"](_,!0),2&e&&a["\u0275\u0275queryRefresh"](n=a["\u0275\u0275loadQuery"]())&&(t.userRoleForm=n.first)},decls:15,vars:8,consts:[["slot","start"],[3,"text","icon"],["slot","primary"],["color","success","fill","clear",3,"disabled","click"],[4,"ngIf"],["slot","end","color","success","name","save-outline"],["fullscreen",""],[3,"model"],["userRoleForm",""]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"ion-header"),a["\u0275\u0275elementStart"](1,"ion-toolbar"),a["\u0275\u0275elementStart"](2,"ion-buttons",0),a["\u0275\u0275element"](3,"ion-back-button",1),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"ion-buttons",2),a["\u0275\u0275elementStart"](5,"ion-button",3),a["\u0275\u0275listener"]("click",(function(){return t.userRolesService.storeUserRole()})),a["\u0275\u0275template"](6,k,2,0,"ng-container",4),a["\u0275\u0275element"](7,"ion-icon",5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"ion-title"),a["\u0275\u0275text"](9),a["\u0275\u0275pipe"](10,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"ion-content",6),a["\u0275\u0275elementStart"](12,"ion-card"),a["\u0275\u0275element"](13,"app-user-roles-form",7,8),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("text","")("icon","arrow-back-outline"),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("disabled",!t.userRolesService.userRolesFormValid.value),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",!t.platform.is("mobile")),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate1"]("Crear ",a["\u0275\u0275pipeBind1"](10,6,"USUARIOS ROLES"),""),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("model",t.userRolesService.userRole))},directives:[i.IonHeader,i.IonToolbar,i.IonButtons,i.IonBackButton,i.IonBackButtonDelegate,i.IonButton,r.NgIf,i.IonIcon,i.IonTitle,i.IonContent,i.IonCard,w],pipes:[r.TitleCasePipe],styles:[""]}),e})();var L=n("fYRX");function V(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"span"),a["\u0275\u0275text"](1,", "),a["\u0275\u0275elementEnd"]())}function j(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275elementStart"](1,"a",14),a["\u0275\u0275text"](2),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](3,V,2,0,"span",3),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit,n=t.last;a["\u0275\u0275advance"](1),a["\u0275\u0275propertyInterpolate1"]("routerLink","/users/",null==e?null:e.id,"/edit"),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](null==e?null:e.name),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",!n)}}function A(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,j,4,3,"ng-container",5),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]().$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",null==e?null:e.users)}}function N(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"span"),a["\u0275\u0275text"](1,", "),a["\u0275\u0275elementEnd"]())}function q(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275elementStart"](1,"a",14),a["\u0275\u0275text"](2),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](3,N,2,0,"span",3),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit,n=t.last;a["\u0275\u0275advance"](1),a["\u0275\u0275propertyInterpolate1"]("routerLink","/user-permissions/",null==e?null:e.id,"/edit"),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](null==e?null:e.name),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",!n)}}function $(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,q,4,3,"ng-container",5),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]().$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",null==e?null:e.user_permissions)}}function Q(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"ion-card"),a["\u0275\u0275elementStart"](1,"ion-list"),a["\u0275\u0275elementStart"](2,"ion-item",6),a["\u0275\u0275elementStart"](3,"ion-label",7),a["\u0275\u0275elementStart"](4,"b"),a["\u0275\u0275text"](5),a["\u0275\u0275pipe"](6,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](7,"div",8),a["\u0275\u0275text"](8),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](9,"ion-item",6),a["\u0275\u0275elementStart"](10,"ion-label",7),a["\u0275\u0275elementStart"](11,"b"),a["\u0275\u0275text"](12),a["\u0275\u0275pipe"](13,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](14,"div",8),a["\u0275\u0275text"](15),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](16,"ion-item",6),a["\u0275\u0275elementStart"](17,"ion-label",7),a["\u0275\u0275elementStart"](18,"b"),a["\u0275\u0275text"](19),a["\u0275\u0275pipe"](20,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](21,"div",8),a["\u0275\u0275template"](22,A,2,1,"ng-container",3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](23,"ion-item",6),a["\u0275\u0275elementStart"](24,"ion-label",7),a["\u0275\u0275elementStart"](25,"b"),a["\u0275\u0275text"](26),a["\u0275\u0275pipe"](27,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](28,"div",8),a["\u0275\u0275template"](29,$,2,1,"ng-container",3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](30,"ion-footer"),a["\u0275\u0275elementStart"](31,"ion-row"),a["\u0275\u0275elementStart"](32,"ion-col",9),a["\u0275\u0275elementStart"](33,"ion-button",10),a["\u0275\u0275element"](34,"ion-icon",11),a["\u0275\u0275elementStart"](35,"div"),a["\u0275\u0275text"](36,"Editar"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](37,"ion-col",9),a["\u0275\u0275elementStart"](38,"ion-button",12),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](e);const n=t.$implicit;return a["\u0275\u0275nextContext"](2).userRolesService.deleteUserRole(null==n?null:n.id)})),a["\u0275\u0275element"](39,"ion-icon",13),a["\u0275\u0275elementStart"](40,"div"),a["\u0275\u0275text"](41,"Eliminar"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;a["\u0275\u0275advance"](5),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](6,9,"NOMBRE")),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](null==e?null:e.name),a["\u0275\u0275advance"](4),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](13,11,"C\xd3DIGO")),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](null==e?null:e.code),a["\u0275\u0275advance"](4),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](20,13,"USUARIOS")),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngIf",null==e||null==e.users?null:e.users.length),a["\u0275\u0275advance"](4),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](27,15,"USUARIOS PERMISOS")),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngIf",null==e||null==e.user_permissions?null:e.user_permissions.length),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("routerLink","/user-roles/"+(null==e?null:e.id)+"/edit")}}function D(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,Q,42,17,"ion-card",5),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",e.userRolesService.userRoles)}}function G(e,t){1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275elementStart"](1,"ion-item"),a["\u0275\u0275element"](2,"ion-icon",15),a["\u0275\u0275elementStart"](3,"ion-label"),a["\u0275\u0275elementStart"](4,"h2"),a["\u0275\u0275text"](5),a["\u0275\u0275pipe"](6,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](7,"ion-button",16),a["\u0275\u0275text"](8),a["\u0275\u0275pipe"](9,"titlecase"),a["\u0275\u0275element"](10,"ion-icon",17),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementContainerEnd"]()),2&e&&(a["\u0275\u0275advance"](5),a["\u0275\u0275textInterpolate1"]("No se encontraron ",a["\u0275\u0275pipeBind1"](6,3,"USUARIOS ROLES"),""),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("routerLink","/user-roles/create"),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" Crear ",a["\u0275\u0275pipeBind1"](9,5,"USUARIOS ROLES")," "))}function z(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"ion-row"),a["\u0275\u0275elementStart"](1,"ion-col",18),a["\u0275\u0275elementStart"](2,"ion-button",19),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](e);const t=a["\u0275\u0275nextContext"]();return t.userRolesService.getUserRoles(t.userRolesService.meta.current_page-1)})),a["\u0275\u0275element"](3,"ion-icon",20),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"ion-button",21),a["\u0275\u0275text"](5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"ion-button",19),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](e);const t=a["\u0275\u0275nextContext"]();return t.userRolesService.getUserRoles(t.userRolesService.meta.current_page+1)})),a["\u0275\u0275element"](7,"ion-icon",22),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("disabled",1==e.userRolesService.meta.current_page),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("disabled",!0),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate5"](" Pag: ",e.userRolesService.meta.current_page," /",e.userRolesService.meta.last_page," ",e.userRolesService.meta.from,"-",e.userRolesService.meta.to," /",e.userRolesService.meta.total," "),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("disabled",e.userRolesService.meta.current_page==e.userRolesService.meta.last_page)}}const W=[{path:"",component:d},{path:"list",component:(()=>{class e{constructor(e,t,n,r){this.userRolesService=e,this.api=t,this.loading=n,this.splitPanel=r}ngOnInit(){this.userRolesService.getUserRoles()}ionViewWillEnter(){this.splitPanel.show.next(!0)}scrollToTop(){this.content.scrollToTop(300)}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](g),a["\u0275\u0275directiveInject"](S.a),a["\u0275\u0275directiveInject"](L.a),a["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-user-roles-list"]],viewQuery:function(e,t){var n;1&e&&a["\u0275\u0275viewQuery"](i.IonContent,!0),2&e&&a["\u0275\u0275queryRefresh"](n=a["\u0275\u0275loadQuery"]())&&(t.content=n.first)},decls:12,vars:18,consts:[["primaryLink","user-roles/create","primaryIcon","add-circle-outline",3,"title","primaryText"],["id","pages-content"],["showCancelButton","focus",3,"cancelButtonText","placeholder","ngModel","ionCancel","keyup.enter","ngModelChange"],[4,"ngIf"],[1,"lists-footer"],[4,"ngFor","ngForOf"],[1,"item-transparent"],["position","fixed"],[1,"wrap-text"],[1,"ion-text-center"],["color","success","size","small","fill","clear",3,"routerLink"],["name","create-outline"],["color","danger","size","small","fill","clear",3,"click"],["name","trash-outline"],[3,"routerLink"],["name","warning-outline","slot","start",1,"text-warning"],["fill","outline","color","success","slot","end",3,"routerLink"],["name","add-circle-outline","slot","end"],["size","12",1,"ion-text-center"],["fill","clear",3,"disabled","click"],["slot","end","name","play-outline",2,"transform","rotate(180deg)"],["fill","clear",3,"disabled"],["slot","start","name","play-outline"]],template:function(e,t){1&e&&(a["\u0275\u0275element"](0,"app-main-header",0),a["\u0275\u0275pipe"](1,"titlecase"),a["\u0275\u0275pipe"](2,"lowercase"),a["\u0275\u0275elementStart"](3,"ion-content",1),a["\u0275\u0275elementStart"](4,"ion-searchbar",2),a["\u0275\u0275listener"]("ionCancel",(function(){return t.userRolesService.searchValue="",t.userRolesService.getUserRoles()}))("keyup.enter",(function(){return t.userRolesService.getUserRoles()}))("ngModelChange",(function(e){return t.userRolesService.searchValue=e})),a["\u0275\u0275pipe"](5,"lowercase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](6,D,2,1,"ng-container",3),a["\u0275\u0275pipe"](7,"async"),a["\u0275\u0275template"](8,G,11,7,"ng-container",3),a["\u0275\u0275pipe"](9,"async"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](10,"ion-footer",4),a["\u0275\u0275template"](11,z,8,8,"ion-row",3),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275propertyInterpolate"]("title",a["\u0275\u0275pipeBind1"](1,8,"USUARIOS ROLES")),a["\u0275\u0275propertyInterpolate1"]("primaryText","Crear ",a["\u0275\u0275pipeBind1"](2,10,"USUARIOS ROLES"),""),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("cancelButtonText","Cancelar")("placeholder","Buscar "+a["\u0275\u0275pipeBind1"](5,12,"USUARIOS ROLES"))("ngModel",t.userRolesService.searchValue),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngIf",!a["\u0275\u0275pipeBind1"](7,14,t.loading.loading)&&(null==t.userRolesService.userRoles?null:t.userRolesService.userRoles.length)),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngIf",!(a["\u0275\u0275pipeBind1"](9,16,t.loading.loading)||null!=t.userRolesService.userRoles&&t.userRolesService.userRoles.length)),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngIf",t.userRolesService.meta))},directives:[m.a,i.IonContent,i.IonSearchbar,i.TextValueAccessor,o.NgControlStatus,o.NgModel,r.NgIf,i.IonFooter,r.NgForOf,i.IonCard,i.IonList,i.IonItem,i.IonLabel,i.IonRow,i.IonCol,i.IonButton,i.RouterLinkDelegate,s.i,i.IonIcon,s.k],pipes:[r.TitleCasePipe,r.LowerCasePipe,r.AsyncPipe],styles:[""]}),e})()},{path:"create",component:P},{path:":id/edit",component:M}];let H=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.l.forChild(W)],s.l]}),e})(),J=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.CommonModule,o.FormsModule,i.IonicModule,l.a,H]]}),e})()}}]);