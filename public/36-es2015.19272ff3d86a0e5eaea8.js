(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{qnNh:function(e,t,n){"use strict";n.r(t),n.d(t,"SystParameterGroupsPageModule",(function(){return Q}));var r=n("ofXK"),a=n("3Pt+"),s=n("TEn/"),i=n("pk6O"),o=n("tyNb"),l=n("fXoL"),m=n("1HhC"),c=n("yvdN");let p=(()=>{class e{constructor(e){this.splitPanel=e}ngOnInit(){}ionViewWillEnter(){this.splitPanel.show.next(!0)}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](m.a))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-syst-parameter-groups"]],decls:19,vars:6,consts:[["title","GRUPOS DE PARAMETROS"],["size-md","3","size-sm","6","size-xs","12"],["routerLink","/syst-parameter-groups/list"],[2,"height","120px","width","100%","display","flex","align-items","center","justify-content","center"],["name","list-circle-outline","color","primary",1,"icon-m"],[1,"ion-text-center"],["routerLink","/syst-parameter-groups/create"],["name","add-circle-outline","color","success",1,"icon-m"]],template:function(e,t){1&e&&(l["\u0275\u0275element"](0,"app-main-header",0),l["\u0275\u0275elementStart"](1,"ion-content"),l["\u0275\u0275elementStart"](2,"ion-row"),l["\u0275\u0275elementStart"](3,"ion-col",1),l["\u0275\u0275elementStart"](4,"ion-card",2),l["\u0275\u0275elementStart"](5,"div",3),l["\u0275\u0275element"](6,"ion-icon",4),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"ion-card-header"),l["\u0275\u0275elementStart"](8,"ion-card-subtitle",5),l["\u0275\u0275text"](9),l["\u0275\u0275pipe"](10,"titlecase"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"ion-col",1),l["\u0275\u0275elementStart"](12,"ion-card",6),l["\u0275\u0275elementStart"](13,"div",3),l["\u0275\u0275element"](14,"ion-icon",7),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](15,"ion-card-header"),l["\u0275\u0275elementStart"](16,"ion-card-subtitle",5),l["\u0275\u0275text"](17),l["\u0275\u0275pipe"](18,"titlecase"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](9),l["\u0275\u0275textInterpolate1"](" Listar ",l["\u0275\u0275pipeBind1"](10,2,"GRUPOS DE PARAMETROS")," "),l["\u0275\u0275advance"](8),l["\u0275\u0275textInterpolate1"](" Crear ",l["\u0275\u0275pipeBind1"](18,4,"GRUPOS DE PARAMETROS")," "))},directives:[c.a,s.q,s.Q,s.p,s.i,s.ob,o.i,s.x,s.k,s.l],pipes:[r.s],styles:[""]}),e})();var d=n("mrSG"),u=n("2Vo4"),y=n("TIcx"),f=n("EgAa"),S=n("PWdp"),v=n("Ezvo");let h=(()=>{class e{constructor(e,t,n,r,a){this.api=e,this.alert=t,this.toast=n,this.router=r,this.navigation=a,this.systParameterGroupsUrl="syst-parameter-groups",this.systParameterGroupsFormValid=new u.a(!1),this.systParameterGroups=[],this.systParameterGroup={},this.systParameterGroupLists={},this.searchValue="",this.perPage=10,this.meta=null,this.page=1,this.pagesContent=document.getElementById("pages-content")}getSystParameterGroups(e=this.page,t=this.perPage){this.api.get(this.systParameterGroupsUrl+"?page="+e+"&perPage="+t+"&q[name:cont]="+this.searchValue).subscribe(e=>{document.getElementById("pages-content").scrollToTop(300),this.systParameterGroups=e.data,this.systParameterGroupLists=e.lists,this.meta=e.meta},e=>{console.error(e)})}editSystParameterGroup(e){this.api.get(this.systParameterGroupsUrl+"/"+e+"/edit").subscribe(e=>{this.systParameterGroup=e.data.model,this.systParameterGroupLists=e.lists},e=>{console.error(e)})}updateSystParameterGroup(){this.api.put(this.systParameterGroupsUrl+"/"+this.systParameterGroup.id,{model:this.systParameterGroup,pivots:{}}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.navigation.back(),this.getSystParameterGroups(1)})}createSystParameterGroup(){this.api.get(this.systParameterGroupsUrl+"/create").subscribe(e=>{this.systParameterGroup={},this.systParameterGroupLists=e.lists})}storeSystParameterGroup(){this.api.post(this.systParameterGroupsUrl,{model:this.systParameterGroup,pivots:{}}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.navigation.back(),this.getSystParameterGroups(1)})}deleteSystParameterGroup(e){return Object(d.a)(this,void 0,void 0,(function*(){(yield this.alert.confirmation("Desea eliminar el item?"))&&this.api.delete(this.systParameterGroupsUrl+"/"+e,{}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.getSystParameterGroups(1)})}))}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275inject"](y.a),l["\u0275\u0275inject"](f.a),l["\u0275\u0275inject"](S.a),l["\u0275\u0275inject"](o.h),l["\u0275\u0275inject"](v.a))},e.\u0275prov=l["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var g=n("JmBq");const P=["systParameterGroupsForm"];function E(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",9),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]().$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function G(e,t){if(1&e&&(l["\u0275\u0275elementContainerStart"](0),l["\u0275\u0275template"](1,E,2,1,"div",8),l["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;l["\u0275\u0275nextContext"]();const n=l["\u0275\u0275reference"](1);l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",null==n.form.controls.syst_parameter_ids?null:n.form.controls.syst_parameter_ids.hasError(e.type))}}function x(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",9),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]().$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function b(e,t){if(1&e&&(l["\u0275\u0275elementContainerStart"](0),l["\u0275\u0275template"](1,x,2,1,"div",8),l["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;l["\u0275\u0275nextContext"]();const n=l["\u0275\u0275reference"](1);l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",null==n.form.controls.name?null:n.form.controls.name.hasError(e.type))}}function I(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",9),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]().$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function C(e,t){if(1&e&&(l["\u0275\u0275elementContainerStart"](0),l["\u0275\u0275template"](1,I,2,1,"div",8),l["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;l["\u0275\u0275nextContext"]();const n=l["\u0275\u0275reference"](1);l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",null==n.form.controls.code?null:n.form.controls.code.hasError(e.type))}}let w=(()=>{class e{constructor(e,t){this.systParameterGroupsService=e,this.toTitlecase=t,this.model={},this.validationMessages={name:[{type:"required",message:"El campo "+this.toTitlecase.transform("NOMBRE")+" es obligatorio."}],code:[{type:"required",message:"El campo "+this.toTitlecase.transform("C\xd3DIGO")+" es obligatorio."}],syst_parameter_ids:[{type:"required",message:"El campo "+this.toTitlecase.transform("PARAMETROS")+" es obligatorio."}]}}ngOnInit(){}ngAfterViewInit(){}setSystParameterIds(e){let t=null;if(e.value.length){t=[];for(let n=0;n<e.value.length;n++)t.push(e.value[n].id)}this.systParameterGroupsService.systParameterGroup.syst_parameter_ids=t}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](h),l["\u0275\u0275directiveInject"](r.s))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-syst-parameter-groups-form"]],viewQuery:function(e,t){var n;1&e&&l["\u0275\u0275viewQuery"](P,!0),2&e&&l["\u0275\u0275queryRefresh"](n=l["\u0275\u0275loadQuery"]())&&(t.systParameterGroupsForm=n.first)},inputs:{model:"model"},decls:25,vars:31,consts:[["novalidate","","autocomplete","off"],["systParameterGroupsForm","ngForm"],[1,"item-transparent"],["name","syst_parameter_ids","id","syst_parameter_ids-field","itemValueField","id","itemTextField","name",3,"ngModel","items","isMultiple","canClear","hasConfirmButton","confirmButtonText","searchPlaceholder","searchFailText","closeButtonText","clearButtonText","canSearch","ngModelChange","onChange"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["type","text","name","name","id","name-field","placeholder","",3,"ngModel","required","ngModelChange"],["type","text","name","code","id","code-field","placeholder","",3,"ngModel","required","ngModelChange"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"form",0,1),l["\u0275\u0275elementStart"](2,"ion-item",2),l["\u0275\u0275elementStart"](3,"ion-label"),l["\u0275\u0275text"](4),l["\u0275\u0275pipe"](5,"titlecase"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"ionic-selectable",3),l["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.syst_parameters=e}))("onChange",(function(e){return t.setSystParameterIds(e)})),l["\u0275\u0275pipe"](7,"titlecase"),l["\u0275\u0275pipe"](8,"titlecase"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"div",4),l["\u0275\u0275template"](10,G,2,1,"ng-container",5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"ion-item",2),l["\u0275\u0275elementStart"](12,"ion-label"),l["\u0275\u0275text"](13),l["\u0275\u0275pipe"](14,"titlecase"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](15,"ion-input",6),l["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.name=e})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](16,"div",4),l["\u0275\u0275template"](17,b,2,1,"ng-container",5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](18,"ion-item",2),l["\u0275\u0275elementStart"](19,"ion-label"),l["\u0275\u0275text"](20),l["\u0275\u0275pipe"](21,"titlecase"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](22,"ion-input",7),l["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.code=e})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](23,"div",4),l["\u0275\u0275template"](24,C,2,1,"ng-container",5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](4),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](5,21,"PARAMETROS")),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngModel",t.model.syst_parameters)("items",t.systParameterGroupsService.systParameterGroupLists.SystParameter)("isMultiple",!0)("canClear",!0)("hasConfirmButton",!0)("confirmButtonText","Seleccionar")("searchPlaceholder","Buscar "+l["\u0275\u0275pipeBind1"](7,23,"PARAMETROS"))("searchFailText","No se encontro "+l["\u0275\u0275pipeBind1"](8,25,"PARAMETROS")+" que coincida!")("closeButtonText","Cancelar")("clearButtonText","Limpiar")("canSearch",!0),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("ngForOf",t.validationMessages.syst_parameter_ids),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](14,27,"NOMBRE")),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngModel",t.model.name)("required",!0),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",t.validationMessages.name),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](21,29,"C\xd3DIGO")),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngModel",t.model.code)("required",!0),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",t.validationMessages.code))},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.NgForm,s.C,s.I,g.a,a.NgControlStatus,a.NgModel,r.l,s.B,s.qb,a.RequiredValidator,r.m],pipes:[r.s],styles:[""]}),e})();const M=["systParameterGroupForm"];function R(e,t){1&e&&(l["\u0275\u0275elementContainerStart"](0),l["\u0275\u0275text"](1,"Guardar"),l["\u0275\u0275elementContainerEnd"]())}let O=(()=>{class e{constructor(e,t,n,r){this.systParameterGroupsService=e,this.route=t,this.platform=n,this.splitPanel=r,this.id=null,this.model=null}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.systParameterGroupsService.editSystParameterGroup(this.id)}ionViewWillEnter(){this.splitPanel.show.next(!0)}ngAfterViewInit(){this.systParameterGroupForm.systParameterGroupsForm.valueChanges.subscribe(e=>{this.systParameterGroupsService.systParameterGroupsFormValid.next(this.systParameterGroupForm.systParameterGroupsForm.valid)})}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](h),l["\u0275\u0275directiveInject"](o.a),l["\u0275\u0275directiveInject"](s.nb),l["\u0275\u0275directiveInject"](m.a))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-syst-parameter-groups-edit"]],viewQuery:function(e,t){var n;1&e&&l["\u0275\u0275viewQuery"](M,!0),2&e&&l["\u0275\u0275queryRefresh"](n=l["\u0275\u0275loadQuery"]())&&(t.systParameterGroupForm=n.first)},decls:15,vars:9,consts:[["slot","start"],[3,"text","icon"],["slot","primary"],["color","success","fill","clear",3,"disabled","click"],[4,"ngIf"],["slot","end","color","success","name","save-outline"],["fullscreen",""],[3,"model"],["systParameterGroupForm",""]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"ion-header"),l["\u0275\u0275elementStart"](1,"ion-toolbar"),l["\u0275\u0275elementStart"](2,"ion-buttons",0),l["\u0275\u0275element"](3,"ion-back-button",1),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"ion-buttons",2),l["\u0275\u0275elementStart"](5,"ion-button",3),l["\u0275\u0275listener"]("click",(function(){return t.systParameterGroupsService.updateSystParameterGroup()})),l["\u0275\u0275template"](6,R,2,0,"ng-container",4),l["\u0275\u0275element"](7,"ion-icon",5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](8,"ion-title"),l["\u0275\u0275text"](9),l["\u0275\u0275pipe"](10,"titlecase"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"ion-content",6),l["\u0275\u0275elementStart"](12,"ion-card"),l["\u0275\u0275element"](13,"app-syst-parameter-groups-form",7,8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("text","")("icon","arrow-back-outline"),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("disabled",!t.systParameterGroupsService.systParameterGroupsFormValid.value),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",!t.platform.is("mobile")),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate2"]("Editar ",l["\u0275\u0275pipeBind1"](10,7,"GRUPOS DE PARAMETROS"),": ",null==t.systParameterGroupsService.systParameterGroup?null:t.systParameterGroupsService.systParameterGroup.name,""),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("model",t.systParameterGroupsService.systParameterGroup))},directives:[s.w,s.fb,s.h,s.e,s.f,s.g,r.m,s.x,s.db,s.q,s.i,w],pipes:[r.s],styles:[""]}),e})();const T=["systParameterGroupForm"];function k(e,t){1&e&&(l["\u0275\u0275elementContainerStart"](0),l["\u0275\u0275text"](1,"Guardar"),l["\u0275\u0275elementContainerEnd"]())}let B=(()=>{class e{constructor(e,t,n,r){this.systParameterGroupsService=e,this.route=t,this.platform=n,this.splitPanel=r,this.id=null,this.formValid=!1}ngOnInit(){this.clearPosts()}ionViewWillEnter(){this.splitPanel.show.next(!0)}ngAfterViewInit(){this.systParameterGroupForm.systParameterGroupsForm.valueChanges.subscribe(e=>{this.systParameterGroupsService.systParameterGroupsFormValid.next(this.systParameterGroupForm.systParameterGroupsForm.valid)})}clearPosts(){console.log("clear"),this.systParameterGroupsService.createSystParameterGroup(),this.systParameterGroupsService.systParameterGroup={}}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](h),l["\u0275\u0275directiveInject"](o.a),l["\u0275\u0275directiveInject"](s.nb),l["\u0275\u0275directiveInject"](m.a))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-syst-parameter-groups-create"]],viewQuery:function(e,t){var n;1&e&&l["\u0275\u0275viewQuery"](T,!0),2&e&&l["\u0275\u0275queryRefresh"](n=l["\u0275\u0275loadQuery"]())&&(t.systParameterGroupForm=n.first)},decls:15,vars:8,consts:[["slot","start"],[3,"text","icon"],["slot","primary"],["color","success","fill","clear",3,"disabled","click"],[4,"ngIf"],["slot","end","color","success","name","save-outline"],["fullscreen",""],[3,"model"],["systParameterGroupForm",""]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"ion-header"),l["\u0275\u0275elementStart"](1,"ion-toolbar"),l["\u0275\u0275elementStart"](2,"ion-buttons",0),l["\u0275\u0275element"](3,"ion-back-button",1),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"ion-buttons",2),l["\u0275\u0275elementStart"](5,"ion-button",3),l["\u0275\u0275listener"]("click",(function(){return t.systParameterGroupsService.storeSystParameterGroup()})),l["\u0275\u0275template"](6,k,2,0,"ng-container",4),l["\u0275\u0275element"](7,"ion-icon",5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](8,"ion-title"),l["\u0275\u0275text"](9),l["\u0275\u0275pipe"](10,"titlecase"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"ion-content",6),l["\u0275\u0275elementStart"](12,"ion-card"),l["\u0275\u0275element"](13,"app-syst-parameter-groups-form",7,8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("text","")("icon","arrow-back-outline"),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("disabled",!t.systParameterGroupsService.systParameterGroupsFormValid.value),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",!t.platform.is("mobile")),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate1"]("Crear ",l["\u0275\u0275pipeBind1"](10,6,"GRUPOS DE PARAMETROS"),""),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("model",t.systParameterGroupsService.systParameterGroup))},directives:[s.w,s.fb,s.h,s.e,s.f,s.g,r.m,s.x,s.db,s.q,s.i,w],pipes:[r.s],styles:[""]}),e})();var F=n("fYRX");function A(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"span"),l["\u0275\u0275text"](1,", "),l["\u0275\u0275elementEnd"]())}function j(e,t){if(1&e&&(l["\u0275\u0275elementContainerStart"](0),l["\u0275\u0275elementStart"](1,"a",14),l["\u0275\u0275text"](2),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](3,A,2,0,"span",3),l["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit,n=t.last;l["\u0275\u0275advance"](1),l["\u0275\u0275propertyInterpolate1"]("routerLink","/syst-parameters/",null==e?null:e.id,"/edit"),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](null==e?null:e.name),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",!n)}}function _(e,t){if(1&e&&(l["\u0275\u0275elementContainerStart"](0),l["\u0275\u0275template"](1,j,4,3,"ng-container",5),l["\u0275\u0275elementContainerEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]().$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngForOf",null==e?null:e.syst_parameters)}}function V(e,t){if(1&e){const e=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"ion-card"),l["\u0275\u0275elementStart"](1,"ion-list"),l["\u0275\u0275elementStart"](2,"ion-item",6),l["\u0275\u0275elementStart"](3,"ion-label",7),l["\u0275\u0275elementStart"](4,"b"),l["\u0275\u0275text"](5),l["\u0275\u0275pipe"](6,"titlecase"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"div",8),l["\u0275\u0275text"](8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"ion-item",6),l["\u0275\u0275elementStart"](10,"ion-label",7),l["\u0275\u0275elementStart"](11,"b"),l["\u0275\u0275text"](12),l["\u0275\u0275pipe"](13,"titlecase"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"div",8),l["\u0275\u0275text"](15),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](16,"ion-item",6),l["\u0275\u0275elementStart"](17,"ion-label",7),l["\u0275\u0275elementStart"](18,"b"),l["\u0275\u0275text"](19),l["\u0275\u0275pipe"](20,"titlecase"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](21,"div",8),l["\u0275\u0275template"](22,_,2,1,"ng-container",3),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](23,"ion-footer"),l["\u0275\u0275elementStart"](24,"ion-row"),l["\u0275\u0275elementStart"](25,"ion-col",9),l["\u0275\u0275elementStart"](26,"ion-button",10),l["\u0275\u0275element"](27,"ion-icon",11),l["\u0275\u0275elementStart"](28,"div"),l["\u0275\u0275text"](29,"Editar"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](30,"ion-col",9),l["\u0275\u0275elementStart"](31,"ion-button",12),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](e);const n=t.$implicit;return l["\u0275\u0275nextContext"](2).systParameterGroupsService.deleteSystParameterGroup(null==n?null:n.id)})),l["\u0275\u0275element"](32,"ion-icon",13),l["\u0275\u0275elementStart"](33,"div"),l["\u0275\u0275text"](34,"Eliminar"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;l["\u0275\u0275advance"](5),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](6,7,"NOMBRE")),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](null==e?null:e.name),l["\u0275\u0275advance"](4),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](13,9,"C\xd3DIGO")),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](null==e?null:e.code),l["\u0275\u0275advance"](4),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](20,11,"PARAMETROS")),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngIf",null==e||null==e.syst_parameters?null:e.syst_parameters.length),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("routerLink","/syst-parameter-groups/"+(null==e?null:e.id)+"/edit")}}function q(e,t){if(1&e&&(l["\u0275\u0275elementContainerStart"](0),l["\u0275\u0275template"](1,V,35,13,"ion-card",5),l["\u0275\u0275elementContainerEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngForOf",e.systParameterGroupsService.systParameterGroups)}}function L(e,t){1&e&&(l["\u0275\u0275elementContainerStart"](0),l["\u0275\u0275elementStart"](1,"ion-item"),l["\u0275\u0275element"](2,"ion-icon",15),l["\u0275\u0275elementStart"](3,"ion-label"),l["\u0275\u0275elementStart"](4,"h2"),l["\u0275\u0275text"](5),l["\u0275\u0275pipe"](6,"titlecase"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"ion-button",16),l["\u0275\u0275text"](8),l["\u0275\u0275pipe"](9,"titlecase"),l["\u0275\u0275element"](10,"ion-icon",17),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementContainerEnd"]()),2&e&&(l["\u0275\u0275advance"](5),l["\u0275\u0275textInterpolate1"]("No se encontraron ",l["\u0275\u0275pipeBind1"](6,3,"GRUPOS DE PARAMETROS"),""),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("routerLink","/syst-parameter-groups/create"),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" Crear ",l["\u0275\u0275pipeBind1"](9,5,"GRUPOS DE PARAMETROS")," "))}function N(e,t){if(1&e){const e=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"ion-row"),l["\u0275\u0275elementStart"](1,"ion-col",18),l["\u0275\u0275elementStart"](2,"ion-button",19),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](e);const t=l["\u0275\u0275nextContext"]();return t.systParameterGroupsService.getSystParameterGroups(t.systParameterGroupsService.meta.current_page-1)})),l["\u0275\u0275element"](3,"ion-icon",20),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"ion-button",21),l["\u0275\u0275text"](5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"ion-button",19),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](e);const t=l["\u0275\u0275nextContext"]();return t.systParameterGroupsService.getSystParameterGroups(t.systParameterGroupsService.meta.current_page+1)})),l["\u0275\u0275element"](7,"ion-icon",22),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}if(2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("disabled",1==e.systParameterGroupsService.meta.current_page),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("disabled",!0),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate5"](" Pag: ",e.systParameterGroupsService.meta.current_page," /",e.systParameterGroupsService.meta.last_page," ",e.systParameterGroupsService.meta.from,"-",e.systParameterGroupsService.meta.to," /",e.systParameterGroupsService.meta.total," "),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("disabled",e.systParameterGroupsService.meta.current_page==e.systParameterGroupsService.meta.last_page)}}const U=[{path:"",component:p},{path:"list",component:(()=>{class e{constructor(e,t,n,r){this.systParameterGroupsService=e,this.api=t,this.loading=n,this.splitPanel=r}ngOnInit(){this.systParameterGroupsService.getSystParameterGroups()}ionViewWillEnter(){this.splitPanel.show.next(!0)}scrollToTop(){this.content.scrollToTop(300)}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](h),l["\u0275\u0275directiveInject"](y.a),l["\u0275\u0275directiveInject"](F.a),l["\u0275\u0275directiveInject"](m.a))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-syst-parameter-groups-list"]],viewQuery:function(e,t){var n;1&e&&l["\u0275\u0275viewQuery"](s.q,!0),2&e&&l["\u0275\u0275queryRefresh"](n=l["\u0275\u0275loadQuery"]())&&(t.content=n.first)},decls:12,vars:18,consts:[["primaryLink","syst-parameter-groups/create","primaryIcon","add-circle-outline",3,"title","primaryText"],["id","pages-content"],["showCancelButton","focus",3,"cancelButtonText","placeholder","ngModel","ionCancel","keyup.enter","ngModelChange"],[4,"ngIf"],[1,"lists-footer"],[4,"ngFor","ngForOf"],[1,"item-transparent"],["position","fixed"],[1,"wrap-text"],[1,"ion-text-center"],["color","success","size","small","fill","clear",3,"routerLink"],["name","create-outline"],["color","danger","size","small","fill","clear",3,"click"],["name","trash-outline"],[3,"routerLink"],["name","warning-outline","slot","start",1,"text-warning"],["fill","outline","color","success","slot","end",3,"routerLink"],["name","add-circle-outline","slot","end"],["size","12",1,"ion-text-center"],["fill","clear",3,"disabled","click"],["slot","end","name","play-outline",2,"transform","rotate(180deg)"],["fill","clear",3,"disabled"],["slot","start","name","play-outline"]],template:function(e,t){1&e&&(l["\u0275\u0275element"](0,"app-main-header",0),l["\u0275\u0275pipe"](1,"titlecase"),l["\u0275\u0275pipe"](2,"lowercase"),l["\u0275\u0275elementStart"](3,"ion-content",1),l["\u0275\u0275elementStart"](4,"ion-searchbar",2),l["\u0275\u0275listener"]("ionCancel",(function(){return t.systParameterGroupsService.searchValue="",t.systParameterGroupsService.getSystParameterGroups()}))("keyup.enter",(function(){return t.systParameterGroupsService.getSystParameterGroups()}))("ngModelChange",(function(e){return t.systParameterGroupsService.searchValue=e})),l["\u0275\u0275pipe"](5,"lowercase"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](6,q,2,1,"ng-container",3),l["\u0275\u0275pipe"](7,"async"),l["\u0275\u0275template"](8,L,11,7,"ng-container",3),l["\u0275\u0275pipe"](9,"async"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](10,"ion-footer",4),l["\u0275\u0275template"](11,N,8,8,"ion-row",3),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275propertyInterpolate"]("title",l["\u0275\u0275pipeBind1"](1,8,"GRUPOS DE PARAMETROS")),l["\u0275\u0275propertyInterpolate1"]("primaryText","Crear ",l["\u0275\u0275pipeBind1"](2,10,"GRUPOS DE PARAMETROS"),""),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("cancelButtonText","Cancelar")("placeholder","Buscar "+l["\u0275\u0275pipeBind1"](5,12,"GRUPOS DE PARAMETROS"))("ngModel",t.systParameterGroupsService.searchValue),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngIf",!l["\u0275\u0275pipeBind1"](7,14,t.loading.loading)&&(null==t.systParameterGroupsService.systParameterGroups?null:t.systParameterGroupsService.systParameterGroups.length)),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngIf",!(l["\u0275\u0275pipeBind1"](9,16,t.loading.loading)||null!=t.systParameterGroupsService.systParameterGroups&&t.systParameterGroupsService.systParameterGroups.length)),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngIf",t.systParameterGroupsService.meta))},directives:[c.a,s.q,s.R,s.qb,a.NgControlStatus,a.NgModel,r.m,s.u,r.l,s.i,s.J,s.C,s.I,s.Q,s.p,s.g,s.ob,o.i,s.x,o.k],pipes:[r.s,r.j,r.b],styles:[""]}),e})()},{path:"create",component:B},{path:":id/edit",component:O}];let D=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.l.forChild(U)],o.l]}),e})(),Q=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,a.FormsModule,s.hb,i.a,D]]}),e})()},yvdN:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("fXoL"),a=n("TEn/"),s=n("1HhC"),i=n("ofXK"),o=n("tyNb");function l(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"ion-buttons",4),r["\u0275\u0275elementStart"](1,"ion-menu-toggle",5),r["\u0275\u0275elementStart"](2,"ion-button",6),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().toggleMenu()})),r["\u0275\u0275element"](3,"ion-icon",7),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}}function m(e,t){if(1&e&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275text"](1),r["\u0275\u0275elementContainerEnd"]()),2&e){const e=r["\u0275\u0275nextContext"](2);r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate"](e.primaryText)}}function c(e,t){if(1&e&&r["\u0275\u0275element"](0,"ion-icon",11),2&e){const e=r["\u0275\u0275nextContext"](2);r["\u0275\u0275property"]("name",e.primaryIcon)}}function p(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"ion-buttons",8),r["\u0275\u0275elementStart"](1,"ion-button",9),r["\u0275\u0275template"](2,m,2,1,"ng-container",3),r["\u0275\u0275template"](3,c,1,1,"ion-icon",10),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("routerLink","/"+e.primaryLink),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",e.primaryText&&!e.platform.is("mobile")),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",e.primaryIcon)}}function d(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"ion-title"),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate"](e.title)}}let u=(()=>{class e{constructor(e,t){this.platform=e,this.splitPanel=t,this.title="",this.primaryLink="",this.primaryIcon="",this.primaryText="",this.showSplitPanelButton=!0}ngOnInit(){this.splitPanel.show.subscribe(e=>{})}toggleMenu(){const e=document.querySelector("ion-split-pane"),t="(min-width: 992px)";if(!(window.innerWidth>=992))return e.querySelector("ion-menu").open();e.when=!(e.when===t)&&t}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](a.nb),r["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-main-header"]],inputs:{title:"title",primaryLink:"primaryLink",primaryIcon:"primaryIcon",primaryText:"primaryText",showSplitPanelButton:"showSplitPanelButton"},decls:5,vars:4,consts:[[3,"translucent"],["slot","start",4,"ngIf"],["slot","primary",4,"ngIf"],[4,"ngIf"],["slot","start"],["auto-hide","false","menu","main-menu"],[3,"click"],["slot","icon-only","name","menu"],["slot","primary"],["color","success",3,"routerLink"],["slot","end",3,"name",4,"ngIf"],["slot","end",3,"name"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"ion-header",0),r["\u0275\u0275elementStart"](1,"ion-toolbar"),r["\u0275\u0275template"](2,l,4,0,"ion-buttons",1),r["\u0275\u0275template"](3,p,4,3,"ion-buttons",2),r["\u0275\u0275template"](4,d,2,1,"ion-title",3),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275property"]("translucent",!0),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",t.splitPanel.show.value),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.primaryLink),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.title))},directives:[a.w,a.fb,i.m,a.h,a.M,a.g,a.x,o.i,a.ob,a.db],styles:[""]}),e})()}}]);