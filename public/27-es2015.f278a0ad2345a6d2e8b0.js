(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{TTtV:function(e,t,n){"use strict";n.r(t),n.d(t,"HousUnitAreasPageModule",(function(){return $}));var i=n("ofXK"),r=n("3Pt+"),o=n("TEn/"),a=n("pk6O"),l=n("tyNb"),s=n("fXoL"),c=n("1HhC"),u=n("yvdN");let m=(()=>{class e{constructor(e){this.splitPanel=e}ngOnInit(){}ionViewWillEnter(){this.splitPanel.show.next(!0)}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-hous-unit-areas"]],decls:19,vars:6,consts:[["title","AREAS DE UNIDADES HABITACIONALES"],["size-md","3","size-sm","6","size-xs","12"],["routerLink","/hous-unit-areas/list"],[2,"height","120px","width","100%","display","flex","align-items","center","justify-content","center"],["name","list-circle-outline","color","primary",1,"icon-m"],[1,"ion-text-center"],["routerLink","/hous-unit-areas/create"],["name","add-circle-outline","color","success",1,"icon-m"]],template:function(e,t){1&e&&(s["\u0275\u0275element"](0,"app-main-header",0),s["\u0275\u0275elementStart"](1,"ion-content"),s["\u0275\u0275elementStart"](2,"ion-row"),s["\u0275\u0275elementStart"](3,"ion-col",1),s["\u0275\u0275elementStart"](4,"ion-card",2),s["\u0275\u0275elementStart"](5,"div",3),s["\u0275\u0275element"](6,"ion-icon",4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"ion-card-header"),s["\u0275\u0275elementStart"](8,"ion-card-subtitle",5),s["\u0275\u0275text"](9),s["\u0275\u0275pipe"](10,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"ion-col",1),s["\u0275\u0275elementStart"](12,"ion-card",6),s["\u0275\u0275elementStart"](13,"div",3),s["\u0275\u0275element"](14,"ion-icon",7),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"ion-card-header"),s["\u0275\u0275elementStart"](16,"ion-card-subtitle",5),s["\u0275\u0275text"](17),s["\u0275\u0275pipe"](18,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](9),s["\u0275\u0275textInterpolate1"](" Listar ",s["\u0275\u0275pipeBind1"](10,2,"AREAS DE UNIDADES HABITACIONALES")," "),s["\u0275\u0275advance"](8),s["\u0275\u0275textInterpolate1"](" Crear ",s["\u0275\u0275pipeBind1"](18,4,"AREAS DE UNIDADES HABITACIONALES")," "))},directives:[u.a,o.q,o.Q,o.p,o.i,o.ob,l.i,o.x,o.k,o.l],pipes:[i.s],styles:[""]}),e})();var d=n("mrSG"),p=n("2Vo4"),h=n("TIcx"),f=n("EgAa"),A=n("PWdp"),S=n("Ezvo");let v=(()=>{class e{constructor(e,t,n,i,r){this.api=e,this.alert=t,this.toast=n,this.router=i,this.navigation=r,this.housUnitAreasUrl="hous-unit-areas",this.housUnitAreasFormValid=new p.a(!1),this.housUnitAreas=[],this.housUnitArea={},this.housUnitAreaLists={},this.searchValue="",this.perPage=10,this.meta=null,this.page=1,this.pagesContent=document.getElementById("pages-content")}getHousUnitAreas(e=this.page,t=this.perPage){this.api.get(this.housUnitAreasUrl+"?page="+e+"&perPage="+t+"&q[name:cont]="+this.searchValue).subscribe(e=>{document.getElementById("pages-content").scrollToTop(300),this.housUnitAreas=e.data,this.housUnitAreaLists=e.lists,this.meta=e.meta},e=>{console.error(e)})}editHousUnitArea(e){this.api.get(this.housUnitAreasUrl+"/"+e+"/edit").subscribe(e=>{this.housUnitArea=e.data.model,this.housUnitAreaLists=e.lists},e=>{console.error(e)})}updateHousUnitArea(){this.api.put(this.housUnitAreasUrl+"/"+this.housUnitArea.id,{model:this.housUnitArea,pivots:{}}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.navigation.back(),this.getHousUnitAreas(1)})}createHousUnitArea(){this.api.get(this.housUnitAreasUrl+"/create").subscribe(e=>{this.housUnitArea={},this.housUnitAreaLists=e.lists})}storeHousUnitArea(){this.api.post(this.housUnitAreasUrl,{model:this.housUnitArea,pivots:{}}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.navigation.back(),this.getHousUnitAreas(1)})}deleteHousUnitArea(e){return Object(d.a)(this,void 0,void 0,(function*(){(yield this.alert.confirmation("Desea eliminar el item?"))&&this.api.delete(this.housUnitAreasUrl+"/"+e,{}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.getHousUnitAreas(1)})}))}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](h.a),s["\u0275\u0275inject"](f.a),s["\u0275\u0275inject"](A.a),s["\u0275\u0275inject"](l.h),s["\u0275\u0275inject"](S.a))},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var E=n("JmBq");const g=["housUnitAreasForm"];function x(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",10),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]().$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function I(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,x,2,1,"div",9),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275nextContext"]();const n=s["\u0275\u0275reference"](1);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",null==n.form.controls.hous_unit_id?null:n.form.controls.hous_unit_id.hasError(e.type))}}function U(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",10),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]().$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function y(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,U,2,1,"div",9),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275nextContext"]();const n=s["\u0275\u0275reference"](1);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",null==n.form.controls.oper_schedule_ids?null:n.form.controls.oper_schedule_ids.hasError(e.type))}}function C(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",10),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]().$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function b(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,C,2,1,"div",9),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275nextContext"]();const n=s["\u0275\u0275reference"](1);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",null==n.form.controls.name?null:n.form.controls.name.hasError(e.type))}}function B(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",10),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]().$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function w(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,B,2,1,"div",9),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275nextContext"]();const n=s["\u0275\u0275reference"](1);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",null==n.form.controls.code?null:n.form.controls.code.hasError(e.type))}}let N=(()=>{class e{constructor(e,t){this.housUnitAreasService=e,this.toTitlecase=t,this.model={},this.validationMessages={hous_unit_id:[{type:"required",message:"El campo "+this.toTitlecase.transform("housUnit - NAME")+" es obligatorio."}],name:[{type:"required",message:"El campo "+this.toTitlecase.transform("NOMBRE")+" es obligatorio."}],code:[{type:"required",message:"El campo "+this.toTitlecase.transform("C\xd3DIGO")+" es obligatorio."}],oper_schedule_ids:[{type:"required",message:"El campo "+this.toTitlecase.transform("AGENDA DE OPERACIONES")+" es obligatorio."}]}}ngOnInit(){}ngAfterViewInit(){}setHousUnitId(e){this.housUnitAreasService.housUnitArea.hous_unit_id=e.value?e.value.id:null}setOperScheduleIds(e){let t=null;if(e.value.length){t=[];for(let n=0;n<e.value.length;n++)t.push(e.value[n].id)}this.housUnitAreasService.housUnitArea.oper_schedule_ids=t}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](v),s["\u0275\u0275directiveInject"](i.s))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-hous-unit-areas-form"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275viewQuery"](g,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.housUnitAreasForm=n.first)},inputs:{model:"model"},decls:34,vars:50,consts:[["novalidate","","autocomplete","off"],["housUnitAreasForm","ngForm"],[1,"item-transparent"],["name","hous_unit_id","id","hous_unit_id-field","itemValueField","id","itemTextField","name",3,"required","ngModel","items","canClear","hasConfirmButton","confirmButtonText","searchPlaceholder","searchFailText","closeButtonText","clearButtonText","canSearch","ngModelChange","onChange"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["name","oper_schedule_ids","id","oper_schedule_ids-field","itemValueField","id","itemTextField","name",3,"ngModel","items","isMultiple","canClear","hasConfirmButton","confirmButtonText","searchPlaceholder","searchFailText","closeButtonText","clearButtonText","canSearch","ngModelChange","onChange"],["type","text","name","name","id","name-field","placeholder","",3,"ngModel","required","ngModelChange"],["type","text","name","code","id","code-field","placeholder","",3,"ngModel","required","ngModelChange"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"form",0,1),s["\u0275\u0275elementStart"](2,"ion-item",2),s["\u0275\u0275elementStart"](3,"ion-label"),s["\u0275\u0275text"](4),s["\u0275\u0275pipe"](5,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"ionic-selectable",3),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.hous_unit=e}))("onChange",(function(e){return t.setHousUnitId(e)})),s["\u0275\u0275pipe"](7,"titlecase"),s["\u0275\u0275pipe"](8,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"div",4),s["\u0275\u0275template"](10,I,2,1,"ng-container",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"ion-item",2),s["\u0275\u0275elementStart"](12,"ion-label"),s["\u0275\u0275text"](13),s["\u0275\u0275pipe"](14,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"ionic-selectable",6),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.oper_schedules=e}))("onChange",(function(e){return t.setOperScheduleIds(e)})),s["\u0275\u0275pipe"](16,"titlecase"),s["\u0275\u0275pipe"](17,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](18,"div",4),s["\u0275\u0275template"](19,y,2,1,"ng-container",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](20,"ion-item",2),s["\u0275\u0275elementStart"](21,"ion-label"),s["\u0275\u0275text"](22),s["\u0275\u0275pipe"](23,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](24,"ion-input",7),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.name=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](25,"div",4),s["\u0275\u0275template"](26,b,2,1,"ng-container",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](27,"ion-item",2),s["\u0275\u0275elementStart"](28,"ion-label"),s["\u0275\u0275text"](29),s["\u0275\u0275pipe"](30,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](31,"ion-input",8),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.code=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](32,"div",4),s["\u0275\u0275template"](33,w,2,1,"ng-container",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](4),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](5,34,"UNIDADESHABITACIONALE")),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("required",!0)("ngModel",t.model.hous_unit)("items",t.housUnitAreasService.housUnitAreaLists.HousUnit)("canClear",!0)("hasConfirmButton",!0)("confirmButtonText","Seleccionar")("searchPlaceholder","Buscar "+s["\u0275\u0275pipeBind1"](7,36,"UNIDADES HABITACIONALES"))("searchFailText","No se encontro "+s["\u0275\u0275pipeBind1"](8,38,"UNIDADES HABITACIONALES")+" que coincida!")("closeButtonText","Cancelar")("clearButtonText","Limpiar")("canSearch",!0),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("ngForOf",t.validationMessages.hous_unit_id),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](14,40,"AGENDA DE OPERACIONES")),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngModel",t.model.oper_schedules)("items",t.housUnitAreasService.housUnitAreaLists.OperSchedule)("isMultiple",!0)("canClear",!0)("hasConfirmButton",!0)("confirmButtonText","Seleccionar")("searchPlaceholder","Buscar "+s["\u0275\u0275pipeBind1"](16,42,"AGENDA DE OPERACIONES"))("searchFailText","No se encontro "+s["\u0275\u0275pipeBind1"](17,44,"AGENDA DE OPERACIONES")+" que coincida!")("closeButtonText","Cancelar")("clearButtonText","Limpiar")("canSearch",!0),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("ngForOf",t.validationMessages.oper_schedule_ids),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](23,46,"NOMBRE")),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngModel",t.model.name)("required",!0),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngForOf",t.validationMessages.name),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](30,48,"C\xd3DIGO")),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngModel",t.model.code)("required",!0),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngForOf",t.validationMessages.code))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.NgForm,o.C,o.I,E.a,r.RequiredValidator,r.NgControlStatus,r.NgModel,i.l,o.B,o.qb,i.m],pipes:[i.s],styles:[""]}),e})();const T=["housUnitAreaForm"];function D(e,t){1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275text"](1,"Guardar"),s["\u0275\u0275elementContainerEnd"]())}let _=(()=>{class e{constructor(e,t,n,i){this.housUnitAreasService=e,this.route=t,this.platform=n,this.splitPanel=i,this.id=null,this.model=null}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.housUnitAreasService.editHousUnitArea(this.id)}ionViewWillEnter(){this.splitPanel.show.next(!0)}ngAfterViewInit(){this.housUnitAreaForm.housUnitAreasForm.valueChanges.subscribe(e=>{this.housUnitAreasService.housUnitAreasFormValid.next(this.housUnitAreaForm.housUnitAreasForm.valid)})}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](v),s["\u0275\u0275directiveInject"](l.a),s["\u0275\u0275directiveInject"](o.nb),s["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-hous-unit-areas-edit"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275viewQuery"](T,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.housUnitAreaForm=n.first)},decls:15,vars:9,consts:[["slot","start"],[3,"text","icon"],["slot","primary"],["color","success","fill","clear",3,"disabled","click"],[4,"ngIf"],["slot","end","color","success","name","save-outline"],["fullscreen",""],[3,"model"],["housUnitAreaForm",""]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"ion-header"),s["\u0275\u0275elementStart"](1,"ion-toolbar"),s["\u0275\u0275elementStart"](2,"ion-buttons",0),s["\u0275\u0275element"](3,"ion-back-button",1),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"ion-buttons",2),s["\u0275\u0275elementStart"](5,"ion-button",3),s["\u0275\u0275listener"]("click",(function(){return t.housUnitAreasService.updateHousUnitArea()})),s["\u0275\u0275template"](6,D,2,0,"ng-container",4),s["\u0275\u0275element"](7,"ion-icon",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"ion-title"),s["\u0275\u0275text"](9),s["\u0275\u0275pipe"](10,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"ion-content",6),s["\u0275\u0275elementStart"](12,"ion-card"),s["\u0275\u0275element"](13,"app-hous-unit-areas-form",7,8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("text","")("icon","arrow-back-outline"),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("disabled",!t.housUnitAreasService.housUnitAreasFormValid.value),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",!t.platform.is("mobile")),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate2"]("Editar ",s["\u0275\u0275pipeBind1"](10,7,"AREAS DE UNIDADES HABITACIONALES"),": ",null==t.housUnitAreasService.housUnitArea?null:t.housUnitAreasService.housUnitArea.name,""),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("model",t.housUnitAreasService.housUnitArea))},directives:[o.w,o.fb,o.h,o.e,o.f,o.g,i.m,o.x,o.db,o.q,o.i,N],pipes:[i.s],styles:[""]}),e})();const O=["housUnitAreaForm"];function k(e,t){1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275text"](1,"Guardar"),s["\u0275\u0275elementContainerEnd"]())}let F=(()=>{class e{constructor(e,t,n,i){this.housUnitAreasService=e,this.route=t,this.platform=n,this.splitPanel=i,this.id=null,this.formValid=!1}ngOnInit(){this.clearPosts()}ionViewWillEnter(){this.splitPanel.show.next(!0)}ngAfterViewInit(){this.housUnitAreaForm.housUnitAreasForm.valueChanges.subscribe(e=>{this.housUnitAreasService.housUnitAreasFormValid.next(this.housUnitAreaForm.housUnitAreasForm.valid)})}clearPosts(){console.log("clear"),this.housUnitAreasService.createHousUnitArea(),this.housUnitAreasService.housUnitArea={}}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](v),s["\u0275\u0275directiveInject"](l.a),s["\u0275\u0275directiveInject"](o.nb),s["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-hous-unit-areas-create"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275viewQuery"](O,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.housUnitAreaForm=n.first)},decls:15,vars:8,consts:[["slot","start"],[3,"text","icon"],["slot","primary"],["color","success","fill","clear",3,"disabled","click"],[4,"ngIf"],["slot","end","color","success","name","save-outline"],["fullscreen",""],[3,"model"],["housUnitAreaForm",""]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"ion-header"),s["\u0275\u0275elementStart"](1,"ion-toolbar"),s["\u0275\u0275elementStart"](2,"ion-buttons",0),s["\u0275\u0275element"](3,"ion-back-button",1),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"ion-buttons",2),s["\u0275\u0275elementStart"](5,"ion-button",3),s["\u0275\u0275listener"]("click",(function(){return t.housUnitAreasService.storeHousUnitArea()})),s["\u0275\u0275template"](6,k,2,0,"ng-container",4),s["\u0275\u0275element"](7,"ion-icon",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"ion-title"),s["\u0275\u0275text"](9),s["\u0275\u0275pipe"](10,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"ion-content",6),s["\u0275\u0275elementStart"](12,"ion-card"),s["\u0275\u0275element"](13,"app-hous-unit-areas-form",7,8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("text","")("icon","arrow-back-outline"),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("disabled",!t.housUnitAreasService.housUnitAreasFormValid.value),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",!t.platform.is("mobile")),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"]("Crear ",s["\u0275\u0275pipeBind1"](10,6,"AREAS DE UNIDADES HABITACIONALES"),""),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("model",t.housUnitAreasService.housUnitArea))},directives:[o.w,o.fb,o.h,o.e,o.f,o.g,i.m,o.x,o.db,o.q,o.i,N],pipes:[i.s],styles:[""]}),e})();var L=n("fYRX");function M(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"span"),s["\u0275\u0275text"](1,", "),s["\u0275\u0275elementEnd"]())}function H(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275elementStart"](1,"a",9),s["\u0275\u0275text"](2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](3,M,2,0,"span",3),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit,n=t.last;s["\u0275\u0275advance"](1),s["\u0275\u0275propertyInterpolate1"]("routerLink","/oper-schedules/",null==e?null:e.id,"/edit"),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](null==e?null:e.name),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",!n)}}function P(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,H,4,3,"ng-container",5),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]().$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",null==e?null:e.oper_schedules)}}function j(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"ion-card"),s["\u0275\u0275elementStart"](1,"ion-list"),s["\u0275\u0275elementStart"](2,"ion-item",6),s["\u0275\u0275elementStart"](3,"ion-label",7),s["\u0275\u0275elementStart"](4,"b"),s["\u0275\u0275text"](5),s["\u0275\u0275pipe"](6,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"div",8),s["\u0275\u0275text"](8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"ion-item",6),s["\u0275\u0275elementStart"](10,"ion-label",7),s["\u0275\u0275elementStart"](11,"b"),s["\u0275\u0275text"](12),s["\u0275\u0275pipe"](13,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](14,"div",8),s["\u0275\u0275text"](15),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](16,"ion-item",6),s["\u0275\u0275elementStart"](17,"ion-label",7),s["\u0275\u0275elementStart"](18,"b"),s["\u0275\u0275text"](19),s["\u0275\u0275pipe"](20,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](21,"div",8),s["\u0275\u0275elementStart"](22,"a",9),s["\u0275\u0275text"](23),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](24,"ion-item",6),s["\u0275\u0275elementStart"](25,"ion-label",7),s["\u0275\u0275elementStart"](26,"b"),s["\u0275\u0275text"](27),s["\u0275\u0275pipe"](28,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](29,"div",8),s["\u0275\u0275template"](30,P,2,1,"ng-container",3),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](31,"ion-footer"),s["\u0275\u0275elementStart"](32,"ion-row"),s["\u0275\u0275elementStart"](33,"ion-col",10),s["\u0275\u0275elementStart"](34,"ion-button",11),s["\u0275\u0275element"](35,"ion-icon",12),s["\u0275\u0275elementStart"](36,"div"),s["\u0275\u0275text"](37,"Editar"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](38,"ion-col",10),s["\u0275\u0275elementStart"](39,"ion-button",13),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](e);const n=t.$implicit;return s["\u0275\u0275nextContext"](2).housUnitAreasService.deleteHousUnitArea(null==n?null:n.id)})),s["\u0275\u0275element"](40,"ion-icon",14),s["\u0275\u0275elementStart"](41,"div"),s["\u0275\u0275text"](42,"Eliminar"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](6,10,"NOMBRE")),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](null==e?null:e.name),s["\u0275\u0275advance"](4),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](13,12,"C\xd3DIGO")),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](null==e?null:e.code),s["\u0275\u0275advance"](4),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](20,14,"UNIDADES HABITACIONALES")),s["\u0275\u0275advance"](3),s["\u0275\u0275propertyInterpolate1"]("routerLink","/hous-units/",null==e||null==e.hous_unit?null:e.hous_unit.id,"/edit"),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](null==e||null==e.hous_unit?null:e.hous_unit.name),s["\u0275\u0275advance"](4),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](28,16,"AGENDA DE OPERACIONES")),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngIf",null==e||null==e.oper_schedules?null:e.oper_schedules.length),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("routerLink","/hous-unit-areas/"+(null==e?null:e.id)+"/edit")}}function V(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,j,43,18,"ion-card",5),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",e.housUnitAreasService.housUnitAreas)}}function q(e,t){1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275elementStart"](1,"ion-item"),s["\u0275\u0275element"](2,"ion-icon",15),s["\u0275\u0275elementStart"](3,"ion-label"),s["\u0275\u0275elementStart"](4,"h2"),s["\u0275\u0275text"](5),s["\u0275\u0275pipe"](6,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"ion-button",16),s["\u0275\u0275text"](8),s["\u0275\u0275pipe"](9,"titlecase"),s["\u0275\u0275element"](10,"ion-icon",17),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementContainerEnd"]()),2&e&&(s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate1"]("No se encontraron ",s["\u0275\u0275pipeBind1"](6,3,"AREAS DE UNIDADES HABITACIONALES"),""),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("routerLink","/hous-unit-areas/create"),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" Crear ",s["\u0275\u0275pipeBind1"](9,5,"AREAS DE UNIDADES HABITACIONALES")," "))}function R(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"ion-row"),s["\u0275\u0275elementStart"](1,"ion-col",18),s["\u0275\u0275elementStart"](2,"ion-button",19),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](e);const t=s["\u0275\u0275nextContext"]();return t.housUnitAreasService.getHousUnitAreas(t.housUnitAreasService.meta.current_page-1)})),s["\u0275\u0275element"](3,"ion-icon",20),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"ion-button",21),s["\u0275\u0275text"](5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"ion-button",19),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](e);const t=s["\u0275\u0275nextContext"]();return t.housUnitAreasService.getHousUnitAreas(t.housUnitAreasService.meta.current_page+1)})),s["\u0275\u0275element"](7,"ion-icon",22),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("disabled",1==e.housUnitAreasService.meta.current_page),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("disabled",!0),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate5"](" Pag: ",e.housUnitAreasService.meta.current_page," /",e.housUnitAreasService.meta.last_page," ",e.housUnitAreasService.meta.from,"-",e.housUnitAreasService.meta.to," /",e.housUnitAreasService.meta.total," "),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("disabled",e.housUnitAreasService.meta.current_page==e.housUnitAreasService.meta.last_page)}}const Q=[{path:"",component:m},{path:"list",component:(()=>{class e{constructor(e,t,n,i){this.housUnitAreasService=e,this.api=t,this.loading=n,this.splitPanel=i}ngOnInit(){this.housUnitAreasService.getHousUnitAreas()}ionViewWillEnter(){this.splitPanel.show.next(!0)}scrollToTop(){this.content.scrollToTop(300)}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](v),s["\u0275\u0275directiveInject"](h.a),s["\u0275\u0275directiveInject"](L.a),s["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-hous-unit-areas-list"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275viewQuery"](o.q,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.content=n.first)},decls:12,vars:18,consts:[["primaryLink","hous-unit-areas/create","primaryIcon","add-circle-outline",3,"title","primaryText"],["id","pages-content"],["showCancelButton","focus",3,"cancelButtonText","placeholder","ngModel","ionCancel","keyup.enter","ngModelChange"],[4,"ngIf"],[1,"lists-footer"],[4,"ngFor","ngForOf"],[1,"item-transparent"],["position","fixed"],[1,"wrap-text"],[3,"routerLink"],[1,"ion-text-center"],["color","success","size","small","fill","clear",3,"routerLink"],["name","create-outline"],["color","danger","size","small","fill","clear",3,"click"],["name","trash-outline"],["name","warning-outline","slot","start",1,"text-warning"],["fill","outline","color","success","slot","end",3,"routerLink"],["name","add-circle-outline","slot","end"],["size","12",1,"ion-text-center"],["fill","clear",3,"disabled","click"],["slot","end","name","play-outline",2,"transform","rotate(180deg)"],["fill","clear",3,"disabled"],["slot","start","name","play-outline"]],template:function(e,t){1&e&&(s["\u0275\u0275element"](0,"app-main-header",0),s["\u0275\u0275pipe"](1,"titlecase"),s["\u0275\u0275pipe"](2,"lowercase"),s["\u0275\u0275elementStart"](3,"ion-content",1),s["\u0275\u0275elementStart"](4,"ion-searchbar",2),s["\u0275\u0275listener"]("ionCancel",(function(){return t.housUnitAreasService.searchValue="",t.housUnitAreasService.getHousUnitAreas()}))("keyup.enter",(function(){return t.housUnitAreasService.getHousUnitAreas()}))("ngModelChange",(function(e){return t.housUnitAreasService.searchValue=e})),s["\u0275\u0275pipe"](5,"lowercase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](6,V,2,1,"ng-container",3),s["\u0275\u0275pipe"](7,"async"),s["\u0275\u0275template"](8,q,11,7,"ng-container",3),s["\u0275\u0275pipe"](9,"async"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"ion-footer",4),s["\u0275\u0275template"](11,R,8,8,"ion-row",3),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275propertyInterpolate"]("title",s["\u0275\u0275pipeBind1"](1,8,"AREAS DE UNIDADES HABITACIONALES")),s["\u0275\u0275propertyInterpolate1"]("primaryText","Crear ",s["\u0275\u0275pipeBind1"](2,10,"AREAS DE UNIDADES HABITACIONALES"),""),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("cancelButtonText","Cancelar")("placeholder","Buscar "+s["\u0275\u0275pipeBind1"](5,12,"AREAS DE UNIDADES HABITACIONALES"))("ngModel",t.housUnitAreasService.searchValue),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",!s["\u0275\u0275pipeBind1"](7,14,t.loading.loading)&&(null==t.housUnitAreasService.housUnitAreas?null:t.housUnitAreasService.housUnitAreas.length)),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",!(s["\u0275\u0275pipeBind1"](9,16,t.loading.loading)||null!=t.housUnitAreasService.housUnitAreas&&t.housUnitAreasService.housUnitAreas.length)),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngIf",t.housUnitAreasService.meta))},directives:[u.a,o.q,o.R,o.qb,r.NgControlStatus,r.NgModel,i.m,o.u,i.l,o.i,o.J,o.C,o.I,l.k,o.ob,o.Q,o.p,o.g,l.i,o.x],pipes:[i.s,i.j,i.b],styles:[""]}),e})()},{path:"create",component:F},{path:":id/edit",component:_}];let G=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.l.forChild(Q)],l.l]}),e})(),$=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,r.FormsModule,o.hb,a.a,G]]}),e})()},yvdN:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var i=n("fXoL"),r=n("TEn/"),o=n("1HhC"),a=n("ofXK"),l=n("tyNb");function s(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"ion-buttons",4),i["\u0275\u0275elementStart"](1,"ion-menu-toggle",5),i["\u0275\u0275elementStart"](2,"ion-button",6),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().toggleMenu()})),i["\u0275\u0275element"](3,"ion-icon",7),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}}function c(e,t){if(1&e&&(i["\u0275\u0275elementContainerStart"](0),i["\u0275\u0275text"](1),i["\u0275\u0275elementContainerEnd"]()),2&e){const e=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](e.primaryText)}}function u(e,t){if(1&e&&i["\u0275\u0275element"](0,"ion-icon",11),2&e){const e=i["\u0275\u0275nextContext"](2);i["\u0275\u0275property"]("name",e.primaryIcon)}}function m(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"ion-buttons",8),i["\u0275\u0275elementStart"](1,"ion-button",9),i["\u0275\u0275template"](2,c,2,1,"ng-container",3),i["\u0275\u0275template"](3,u,1,1,"ion-icon",10),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("routerLink","/"+e.primaryLink),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",e.primaryText&&!e.platform.is("mobile")),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",e.primaryIcon)}}function d(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"ion-title"),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](e.title)}}let p=(()=>{class e{constructor(e,t){this.platform=e,this.splitPanel=t,this.title="",this.primaryLink="",this.primaryIcon="",this.primaryText="",this.showSplitPanelButton=!0}ngOnInit(){this.splitPanel.show.subscribe(e=>{})}toggleMenu(){const e=document.querySelector("ion-split-pane"),t="(min-width: 992px)";if(!(window.innerWidth>=992))return e.querySelector("ion-menu").open();e.when=!(e.when===t)&&t}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](r.nb),i["\u0275\u0275directiveInject"](o.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-main-header"]],inputs:{title:"title",primaryLink:"primaryLink",primaryIcon:"primaryIcon",primaryText:"primaryText",showSplitPanelButton:"showSplitPanelButton"},decls:5,vars:4,consts:[[3,"translucent"],["slot","start",4,"ngIf"],["slot","primary",4,"ngIf"],[4,"ngIf"],["slot","start"],["auto-hide","false","menu","main-menu"],[3,"click"],["slot","icon-only","name","menu"],["slot","primary"],["color","success",3,"routerLink"],["slot","end",3,"name",4,"ngIf"],["slot","end",3,"name"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"ion-header",0),i["\u0275\u0275elementStart"](1,"ion-toolbar"),i["\u0275\u0275template"](2,s,4,0,"ion-buttons",1),i["\u0275\u0275template"](3,m,4,3,"ion-buttons",2),i["\u0275\u0275template"](4,d,2,1,"ion-title",3),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275property"]("translucent",!0),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",t.splitPanel.show.value),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.primaryLink),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.title))},directives:[r.w,r.fb,a.m,r.h,r.M,r.g,r.x,l.i,r.ob,r.db],styles:[""]}),e})()}}]);