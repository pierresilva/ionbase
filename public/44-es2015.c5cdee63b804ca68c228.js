(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{vAsr:function(e,t,n){"use strict";n.r(t),n.d(t,"OperReplacementsPageModule",(function(){return W}));var r=n("ofXK"),a=n("3Pt+"),o=n("TEn/"),l=n("pk6O"),i=n("tyNb"),c=n("fXoL"),p=n("1HhC"),m=n("yvdN");let s=(()=>{class e{constructor(e){this.splitPanel=e}ngOnInit(){}ionViewWillEnter(){this.splitPanel.show.next(!0)}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](p.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["app-oper-replacements"]],decls:19,vars:6,consts:[["title","OPERATIVIDAD REPUESTOS"],["size-md","3","size-sm","6","size-xs","12"],["routerLink","/oper-replacements/list"],[2,"height","120px","width","100%","display","flex","align-items","center","justify-content","center"],["name","list-circle-outline","color","primary",1,"icon-m"],[1,"ion-text-center"],["routerLink","/oper-replacements/create"],["name","add-circle-outline","color","success",1,"icon-m"]],template:function(e,t){1&e&&(c["\u0275\u0275element"](0,"app-main-header",0),c["\u0275\u0275elementStart"](1,"ion-content"),c["\u0275\u0275elementStart"](2,"ion-row"),c["\u0275\u0275elementStart"](3,"ion-col",1),c["\u0275\u0275elementStart"](4,"ion-card",2),c["\u0275\u0275elementStart"](5,"div",3),c["\u0275\u0275element"](6,"ion-icon",4),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"ion-card-header"),c["\u0275\u0275elementStart"](8,"ion-card-subtitle",5),c["\u0275\u0275text"](9),c["\u0275\u0275pipe"](10,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"ion-col",1),c["\u0275\u0275elementStart"](12,"ion-card",6),c["\u0275\u0275elementStart"](13,"div",3),c["\u0275\u0275element"](14,"ion-icon",7),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](15,"ion-card-header"),c["\u0275\u0275elementStart"](16,"ion-card-subtitle",5),c["\u0275\u0275text"](17),c["\u0275\u0275pipe"](18,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](9),c["\u0275\u0275textInterpolate1"](" Listar ",c["\u0275\u0275pipeBind1"](10,2,"OPERATIVIDAD REPUESTOS")," "),c["\u0275\u0275advance"](8),c["\u0275\u0275textInterpolate1"](" Crear ",c["\u0275\u0275pipeBind1"](18,4,"OPERATIVIDAD REPUESTOS")," "))},directives:[m.a,o.IonContent,o.IonRow,o.IonCol,o.IonCard,o.RouterLinkDelegate,i.i,o.IonIcon,o.IonCardHeader,o.IonCardSubtitle],pipes:[r.TitleCasePipe],styles:[""]}),e})();var d=n("mrSG"),u=n("2Vo4"),v=n("wd/R"),S=n("TIcx"),f=n("EgAa"),h=n("PWdp"),g=n("Ezvo");let E=(()=>{class e{constructor(e,t,n,r,a){this.api=e,this.alert=t,this.toast=n,this.router=r,this.navigation=a,this.operReplacementsUrl="oper-replacements",this.operReplacementsFormValid=new u.a(!1),this.operReplacements=[],this.operReplacement={},this.operReplacementLists={},this.searchValue="",this.perPage=10,this.meta=null,this.page=1,this.pagesContent=document.getElementById("pages-content")}getOperReplacements(e=this.page,t=this.perPage){this.api.get(this.operReplacementsUrl+"?page="+e+"&perPage="+t+"&q[name:cont]="+this.searchValue).subscribe(e=>{document.getElementById("pages-content").scrollToTop(300),this.operReplacements=e.data,this.operReplacementLists=e.lists,this.meta=e.meta},e=>{console.error(e)})}editOperReplacement(e){this.api.get(this.operReplacementsUrl+"/"+e+"/edit").subscribe(e=>{this.operReplacement=e.data.model,this.operReplacementLists=e.lists},e=>{console.error(e)})}updateOperReplacement(){this.api.put(this.operReplacementsUrl+"/"+this.operReplacement.id,{model:this.operReplacement,pivots:{}}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.navigation.back(),this.getOperReplacements(1)})}createOperReplacement(){this.api.get(this.operReplacementsUrl+"/create").subscribe(e=>{this.operReplacement={},this.operReplacement.time=v().format("HH:mm"),this.operReplacement.date=v().format("YYYY-MM-DD"),this.operReplacementLists=e.lists})}storeOperReplacement(){this.api.post(this.operReplacementsUrl,{model:this.operReplacement,pivots:{}}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.navigation.back(),this.getOperReplacements(1)})}deleteOperReplacement(e){return Object(d.a)(this,void 0,void 0,(function*(){(yield this.alert.confirmation("Desea eliminar el item?"))&&this.api.delete(this.operReplacementsUrl+"/"+e,{}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.getOperReplacements(1)})}))}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275inject"](S.a),c["\u0275\u0275inject"](f.a),c["\u0275\u0275inject"](h.a),c["\u0275\u0275inject"](i.h),c["\u0275\u0275inject"](g.a))},e.\u0275prov=c["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var I=n("JmBq");const R=["operReplacementsForm"];function x(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",12),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]().$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function C(e,t){if(1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275template"](1,x,2,1,"div",11),c["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275nextContext"]();const n=c["\u0275\u0275reference"](1);c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",null==n.form.controls.oper_machine_id?null:n.form.controls.oper_machine_id.hasError(e.type))}}function y(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",12),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]().$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function T(e,t){if(1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275template"](1,y,2,1,"div",11),c["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275nextContext"]();const n=c["\u0275\u0275reference"](1);c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",null==n.form.controls.oper_contractor_id?null:n.form.controls.oper_contractor_id.hasError(e.type))}}function b(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",12),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]().$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function O(e,t){if(1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275template"](1,b,2,1,"div",11),c["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275nextContext"]();const n=c["\u0275\u0275reference"](1);c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",null==n.form.controls.name?null:n.form.controls.name.hasError(e.type))}}function A(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",12),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]().$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function B(e,t){if(1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275template"](1,A,2,1,"div",11),c["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275nextContext"]();const n=c["\u0275\u0275reference"](1);c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",null==n.form.controls.date?null:n.form.controls.date.hasError(e.type))}}function w(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",12),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]().$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function M(e,t){if(1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275template"](1,w,2,1,"div",11),c["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275nextContext"]();const n=c["\u0275\u0275reference"](1);c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",null==n.form.controls.time?null:n.form.controls.time.hasError(e.type))}}function P(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",12),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]().$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function F(e,t){if(1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275template"](1,P,2,1,"div",11),c["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275nextContext"]();const n=c["\u0275\u0275reference"](1);c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",null==n.form.controls.warranty?null:n.form.controls.warranty.hasError(e.type))}}let _=(()=>{class e{constructor(e,t){this.operReplacementsService=e,this.toTitlecase=t,this.model={},this.validationMessages={name:[{type:"required",message:"El campo "+this.toTitlecase.transform("NOMBRE")+" es obligatorio."}],oper_machine_id:[{type:"required",message:"El campo "+this.toTitlecase.transform("MAQUINA")+" es obligatorio."}],oper_contractor_id:[{type:"required",message:"El campo "+this.toTitlecase.transform("CONTRATISTA")+" es obligatorio."}],date:[{type:"required",message:"El campo "+this.toTitlecase.transform("FECHA")+" es obligatorio."}],time:[{type:"required",message:"El campo "+this.toTitlecase.transform("HORA")+" es obligatorio."}],warranty:[{type:"required",message:"El campo "+this.toTitlecase.transform("GARANTIA")+" es obligatorio."}]}}ngOnInit(){}ionViewWillEnter(){}ngAfterViewInit(){}setOperMachineId(e){this.operReplacementsService.operReplacement.oper_machine_id=e.value?e.value.id:null}setOperContractorId(e){this.operReplacementsService.operReplacement.oper_contractor_id=e.value?e.value.id:null}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](E),c["\u0275\u0275directiveInject"](r.TitleCasePipe))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["app-oper-replacements-form"]],viewQuery:function(e,t){var n;1&e&&c["\u0275\u0275viewQuery"](R,!0),2&e&&c["\u0275\u0275queryRefresh"](n=c["\u0275\u0275loadQuery"]())&&(t.operReplacementsForm=n.first)},inputs:{model:"model"},decls:48,vars:62,consts:[["novalidate","","autocomplete","off"],["operReplacementsForm","ngForm"],[1,"item-transparent"],["name","oper_machine_id","id","oper_machine_id-field","itemValueField","id","itemTextField","name",3,"required","ngModel","items","canClear","hasConfirmButton","confirmButtonText","searchPlaceholder","searchFailText","closeButtonText","clearButtonText","canSearch","ngModelChange","onChange"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["name","oper_contractor_id","id","oper_contractor_id-field","itemValueField","id","itemTextField","name",3,"required","ngModel","items","canClear","hasConfirmButton","confirmButtonText","searchPlaceholder","searchFailText","closeButtonText","clearButtonText","canSearch","ngModelChange","onChange"],["type","text","name","name","id","name-field","placeholder","",3,"ngModel","ngModelChange"],["name","date","id","date-field","displayFormat","DD/MM/YYYY",3,"doneText","cancelText","ngModel","ngModelChange"],["name","time","id","time-field","displayFormat","HH:mm",3,"doneText","cancelText","ngModel","ngModelChange"],["name","warranty","id","warranty-field","rows","6","placeholder","",3,"ngModel","ngModelChange"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"form",0,1),c["\u0275\u0275elementStart"](2,"ion-item",2),c["\u0275\u0275elementStart"](3,"ion-label"),c["\u0275\u0275text"](4),c["\u0275\u0275pipe"](5,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"ionic-selectable",3),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.oper_machine=e}))("onChange",(function(e){return t.setOperMachineId(e)})),c["\u0275\u0275pipe"](7,"titlecase"),c["\u0275\u0275pipe"](8,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"div",4),c["\u0275\u0275template"](10,C,2,1,"ng-container",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"ion-item",2),c["\u0275\u0275elementStart"](12,"ion-label"),c["\u0275\u0275text"](13),c["\u0275\u0275pipe"](14,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](15,"ionic-selectable",6),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.oper_contractor=e}))("onChange",(function(e){return t.setOperContractorId(e)})),c["\u0275\u0275pipe"](16,"titlecase"),c["\u0275\u0275pipe"](17,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](18,"div",4),c["\u0275\u0275template"](19,T,2,1,"ng-container",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](20,"ion-item",2),c["\u0275\u0275elementStart"](21,"ion-label"),c["\u0275\u0275text"](22),c["\u0275\u0275pipe"](23,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](24,"ion-input",7),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.name=e})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](25,"div",4),c["\u0275\u0275template"](26,O,2,1,"ng-container",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](27,"ion-item",2),c["\u0275\u0275elementStart"](28,"ion-label"),c["\u0275\u0275text"](29),c["\u0275\u0275pipe"](30,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](31,"ion-datetime",8),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.date=e})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](32,"div",4),c["\u0275\u0275template"](33,B,2,1,"ng-container",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](34,"ion-item",2),c["\u0275\u0275elementStart"](35,"ion-label"),c["\u0275\u0275text"](36),c["\u0275\u0275pipe"](37,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](38,"ion-datetime",9),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.time=e})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](39,"div",4),c["\u0275\u0275template"](40,M,2,1,"ng-container",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](41,"ion-item",2),c["\u0275\u0275elementStart"](42,"ion-label"),c["\u0275\u0275text"](43),c["\u0275\u0275pipe"](44,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](45,"ion-textarea",10),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.warranty=e})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](46,"div",4),c["\u0275\u0275template"](47,F,2,1,"ng-container",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](4),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](5,42,"MAQUINARIA")),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("required",!0)("ngModel",t.model.oper_machine)("items",t.operReplacementsService.operReplacementLists.OperMachine)("canClear",!0)("hasConfirmButton",!0)("confirmButtonText","Seleccionar")("searchPlaceholder","Buscar "+c["\u0275\u0275pipeBind1"](7,44,"MAQUINARIA"))("searchFailText","No se encontro "+c["\u0275\u0275pipeBind1"](8,46,"MAQUINARIA")+" que coincida!")("closeButtonText","Cancelar")("clearButtonText","Limpiar")("canSearch",!0),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("ngForOf",t.validationMessages.oper_machine_id),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](14,48,"CONTRATISTA")),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("required",!0)("ngModel",t.model.oper_contractor)("items",t.operReplacementsService.operReplacementLists.OperContractor)("canClear",!0)("hasConfirmButton",!0)("confirmButtonText","Seleccionar")("searchPlaceholder","Buscar "+c["\u0275\u0275pipeBind1"](16,50,"CONTRATISTA"))("searchFailText","No se encontro "+c["\u0275\u0275pipeBind1"](17,52,"CONTRATISTA")+" que coincida!")("closeButtonText","Cancelar")("clearButtonText","Limpiar")("canSearch",!0),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("ngForOf",t.validationMessages.oper_contractor_id),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](23,54,"NOMBRE")),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngModel",t.model.name),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngForOf",t.validationMessages.name),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](30,56,"FECHA")),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("doneText","Seleccionar")("cancelText","Cancelar")("ngModel",t.model.date),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngForOf",t.validationMessages.date),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](37,58,"HORA")),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("doneText","Seleccionar")("cancelText","Cancelar")("ngModel",t.model.time),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngForOf",t.validationMessages.time),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](44,60,"GARANTIA")),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngModel",t.model.warranty),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngForOf",t.validationMessages.warranty))},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.NgForm,o.IonItem,o.IonLabel,I.a,a.RequiredValidator,a.NgControlStatus,a.NgModel,r.NgForOf,o.IonInput,o.TextValueAccessor,o.IonDatetime,o.SelectValueAccessor,o.IonTextarea,r.NgIf],pipes:[r.TitleCasePipe],styles:[""]}),e})();const V=["operReplacementForm"];function D(e,t){1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275text"](1,"Guardar"),c["\u0275\u0275elementContainerEnd"]())}let k=(()=>{class e{constructor(e,t,n,r){this.operReplacementsService=e,this.route=t,this.platform=n,this.splitPanel=r,this.id=null,this.model=null}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.operReplacementsService.editOperReplacement(this.id)}ionViewWillEnter(){this.splitPanel.show.next(!0)}ngAfterViewInit(){this.operReplacementForm.operReplacementsForm.valueChanges.subscribe(e=>{this.operReplacementsService.operReplacementsFormValid.next(this.operReplacementForm.operReplacementsForm.valid)})}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](E),c["\u0275\u0275directiveInject"](i.a),c["\u0275\u0275directiveInject"](o.Platform),c["\u0275\u0275directiveInject"](p.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["app-oper-replacements-edit"]],viewQuery:function(e,t){var n;1&e&&c["\u0275\u0275viewQuery"](V,!0),2&e&&c["\u0275\u0275queryRefresh"](n=c["\u0275\u0275loadQuery"]())&&(t.operReplacementForm=n.first)},decls:15,vars:9,consts:[["slot","start"],[3,"text","icon"],["slot","primary"],["color","success","fill","clear",3,"disabled","click"],[4,"ngIf"],["slot","end","color","success","name","save-outline"],["fullscreen",""],[3,"model"],["operReplacementForm",""]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"ion-header"),c["\u0275\u0275elementStart"](1,"ion-toolbar"),c["\u0275\u0275elementStart"](2,"ion-buttons",0),c["\u0275\u0275element"](3,"ion-back-button",1),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"ion-buttons",2),c["\u0275\u0275elementStart"](5,"ion-button",3),c["\u0275\u0275listener"]("click",(function(){return t.operReplacementsService.updateOperReplacement()})),c["\u0275\u0275template"](6,D,2,0,"ng-container",4),c["\u0275\u0275element"](7,"ion-icon",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"ion-title"),c["\u0275\u0275text"](9),c["\u0275\u0275pipe"](10,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"ion-content",6),c["\u0275\u0275elementStart"](12,"ion-card"),c["\u0275\u0275element"](13,"app-oper-replacements-form",7,8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("text","")("icon","arrow-back-outline"),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("disabled",!t.operReplacementsService.operReplacementsFormValid.value),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",!t.platform.is("mobile")),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate2"]("Editar ",c["\u0275\u0275pipeBind1"](10,7,"OPERATIVIDAD REPUESTOS"),": ",null==t.operReplacementsService.operReplacement?null:t.operReplacementsService.operReplacement.name,""),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("model",t.operReplacementsService.operReplacement))},directives:[o.IonHeader,o.IonToolbar,o.IonButtons,o.IonBackButton,o.IonBackButtonDelegate,o.IonButton,r.NgIf,o.IonIcon,o.IonTitle,o.IonContent,o.IonCard,_],pipes:[r.TitleCasePipe],styles:[""]}),e})();const N=["operReplacementForm"];function j(e,t){1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275text"](1,"Guardar"),c["\u0275\u0275elementContainerEnd"]())}let L=(()=>{class e{constructor(e,t,n,r){this.operReplacementsService=e,this.route=t,this.platform=n,this.splitPanel=r,this.id=null,this.formValid=!1}ngOnInit(){this.clearPosts()}ionViewWillEnter(){this.splitPanel.show.next(!0)}ngAfterViewInit(){this.operReplacementForm.operReplacementsForm.valueChanges.subscribe(e=>{this.operReplacementsService.operReplacementsFormValid.next(this.operReplacementForm.operReplacementsForm.valid)})}clearPosts(){console.log("clear"),this.operReplacementsService.createOperReplacement(),this.operReplacementsService.operReplacement={}}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](E),c["\u0275\u0275directiveInject"](i.a),c["\u0275\u0275directiveInject"](o.Platform),c["\u0275\u0275directiveInject"](p.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["app-oper-replacements-create"]],viewQuery:function(e,t){var n;1&e&&c["\u0275\u0275viewQuery"](N,!0),2&e&&c["\u0275\u0275queryRefresh"](n=c["\u0275\u0275loadQuery"]())&&(t.operReplacementForm=n.first)},decls:15,vars:8,consts:[["slot","start"],[3,"text","icon"],["slot","primary"],["color","success","fill","clear",3,"disabled","click"],[4,"ngIf"],["slot","end","color","success","name","save-outline"],["fullscreen",""],[3,"model"],["operReplacementForm",""]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"ion-header"),c["\u0275\u0275elementStart"](1,"ion-toolbar"),c["\u0275\u0275elementStart"](2,"ion-buttons",0),c["\u0275\u0275element"](3,"ion-back-button",1),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"ion-buttons",2),c["\u0275\u0275elementStart"](5,"ion-button",3),c["\u0275\u0275listener"]("click",(function(){return t.operReplacementsService.storeOperReplacement()})),c["\u0275\u0275template"](6,j,2,0,"ng-container",4),c["\u0275\u0275element"](7,"ion-icon",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"ion-title"),c["\u0275\u0275text"](9),c["\u0275\u0275pipe"](10,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"ion-content",6),c["\u0275\u0275elementStart"](12,"ion-card"),c["\u0275\u0275element"](13,"app-oper-replacements-form",7,8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("text","")("icon","arrow-back-outline"),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("disabled",!t.operReplacementsService.operReplacementsFormValid.value),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",!t.platform.is("mobile")),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate1"]("Crear ",c["\u0275\u0275pipeBind1"](10,6,"OPERATIVIDAD REPUESTOS"),""),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("model",t.operReplacementsService.operReplacement))},directives:[o.IonHeader,o.IonToolbar,o.IonButtons,o.IonBackButton,o.IonBackButtonDelegate,o.IonButton,r.NgIf,o.IonIcon,o.IonTitle,o.IonContent,o.IonCard,_],pipes:[r.TitleCasePipe],styles:[""]}),e})();var U=n("fYRX"),q=n("Z1/u");function Q(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"ion-card"),c["\u0275\u0275elementStart"](1,"ion-list"),c["\u0275\u0275elementStart"](2,"ion-item",6),c["\u0275\u0275elementStart"](3,"ion-label",7),c["\u0275\u0275elementStart"](4,"b"),c["\u0275\u0275text"](5),c["\u0275\u0275pipe"](6,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"div",8),c["\u0275\u0275text"](8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"ion-item",6),c["\u0275\u0275elementStart"](10,"ion-label",7),c["\u0275\u0275elementStart"](11,"b"),c["\u0275\u0275text"](12),c["\u0275\u0275pipe"](13,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](14,"div",8),c["\u0275\u0275text"](15),c["\u0275\u0275pipe"](16,"dateFormat"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](17,"ion-item",6),c["\u0275\u0275elementStart"](18,"ion-label",7),c["\u0275\u0275elementStart"](19,"b"),c["\u0275\u0275text"](20),c["\u0275\u0275pipe"](21,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](22,"div",8),c["\u0275\u0275text"](23),c["\u0275\u0275pipe"](24,"dateFormat"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](25,"ion-item",6),c["\u0275\u0275elementStart"](26,"ion-label",7),c["\u0275\u0275elementStart"](27,"b"),c["\u0275\u0275text"](28),c["\u0275\u0275pipe"](29,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](30,"div",8),c["\u0275\u0275text"](31),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](32,"ion-item",6),c["\u0275\u0275elementStart"](33,"ion-label",7),c["\u0275\u0275elementStart"](34,"b"),c["\u0275\u0275text"](35),c["\u0275\u0275pipe"](36,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](37,"div",8),c["\u0275\u0275elementStart"](38,"a",9),c["\u0275\u0275text"](39),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](40,"ion-item",6),c["\u0275\u0275elementStart"](41,"ion-label",7),c["\u0275\u0275elementStart"](42,"b"),c["\u0275\u0275text"](43),c["\u0275\u0275pipe"](44,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](45,"div",8),c["\u0275\u0275elementStart"](46,"a",9),c["\u0275\u0275text"](47),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](48,"ion-footer"),c["\u0275\u0275elementStart"](49,"ion-row"),c["\u0275\u0275elementStart"](50,"ion-col",10),c["\u0275\u0275elementStart"](51,"ion-button",11),c["\u0275\u0275element"](52,"ion-icon",12),c["\u0275\u0275elementStart"](53,"div"),c["\u0275\u0275text"](54,"Editar"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](55,"ion-col",10),c["\u0275\u0275elementStart"](56,"ion-button",13),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](e);const n=t.$implicit;return c["\u0275\u0275nextContext"](2).operReplacementsService.deleteOperReplacement(null==n?null:n.id)})),c["\u0275\u0275element"](57,"ion-icon",14),c["\u0275\u0275elementStart"](58,"div"),c["\u0275\u0275text"](59,"Eliminar"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;c["\u0275\u0275advance"](5),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](6,15,"NOMBRE")),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](null==e?null:e.name),c["\u0275\u0275advance"](4),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](13,17,"FECHA")),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind2"](16,19,null==e?null:e.date,"DD/MM/YYYY")),c["\u0275\u0275advance"](5),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](21,22,"HORA")),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind2"](24,24,null==e?null:e.time,"HH:mm")),c["\u0275\u0275advance"](5),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](29,27,"GARANTIA")),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](null==e?null:e.warranty),c["\u0275\u0275advance"](4),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](36,29,"OPERATIVIDAD MAQUINARIA")),c["\u0275\u0275advance"](3),c["\u0275\u0275propertyInterpolate1"]("routerLink","/oper-machines/",null==e||null==e.oper_machine?null:e.oper_machine.id,"/edit"),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate"](null==e||null==e.oper_machine?null:e.oper_machine.name),c["\u0275\u0275advance"](4),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](44,31,"CONTRATISTAS OPERATIVOS")),c["\u0275\u0275advance"](3),c["\u0275\u0275propertyInterpolate1"]("routerLink","/oper-contractors/",null==e||null==e.oper_contractor?null:e.oper_contractor.id,"/edit"),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate"](null==e||null==e.oper_contractor?null:e.oper_contractor.name),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("routerLink","/oper-replacements/"+(null==e?null:e.id)+"/edit")}}function H(e,t){if(1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275template"](1,Q,60,33,"ion-card",5),c["\u0275\u0275elementContainerEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngForOf",e.operReplacementsService.operReplacements)}}function $(e,t){1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275elementStart"](1,"ion-item"),c["\u0275\u0275element"](2,"ion-icon",15),c["\u0275\u0275elementStart"](3,"ion-label"),c["\u0275\u0275elementStart"](4,"h2"),c["\u0275\u0275text"](5),c["\u0275\u0275pipe"](6,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"ion-button",16),c["\u0275\u0275text"](8),c["\u0275\u0275pipe"](9,"titlecase"),c["\u0275\u0275element"](10,"ion-icon",17),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementContainerEnd"]()),2&e&&(c["\u0275\u0275advance"](5),c["\u0275\u0275textInterpolate1"]("No se encontraron ",c["\u0275\u0275pipeBind1"](6,3,"OPERATIVIDAD REPUESTOS"),""),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("routerLink","/oper-replacements/create"),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" Crear ",c["\u0275\u0275pipeBind1"](9,5,"OPERATIVIDAD REPUESTOS")," "))}function Y(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"ion-row"),c["\u0275\u0275elementStart"](1,"ion-col",18),c["\u0275\u0275elementStart"](2,"ion-button",19),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](e);const t=c["\u0275\u0275nextContext"]();return t.operReplacementsService.getOperReplacements(t.operReplacementsService.meta.current_page-1)})),c["\u0275\u0275element"](3,"ion-icon",20),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"ion-button",21),c["\u0275\u0275text"](5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"ion-button",19),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](e);const t=c["\u0275\u0275nextContext"]();return t.operReplacementsService.getOperReplacements(t.operReplacementsService.meta.current_page+1)})),c["\u0275\u0275element"](7,"ion-icon",22),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("disabled",1==e.operReplacementsService.meta.current_page),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("disabled",!0),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate5"](" Pag: ",e.operReplacementsService.meta.current_page," /",e.operReplacementsService.meta.last_page," ",e.operReplacementsService.meta.from,"-",e.operReplacementsService.meta.to," /",e.operReplacementsService.meta.total," "),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("disabled",e.operReplacementsService.meta.current_page==e.operReplacementsService.meta.last_page)}}const z=[{path:"",data:{title:"OPERATIVIDAD REPUESTOS",roles:["admin"]},component:s},{path:"list",data:{title:"OPERATIVIDAD REPUESTOS",roles:["admin"]},component:(()=>{class e{constructor(e,t,n,r){this.operReplacementsService=e,this.api=t,this.loading=n,this.splitPanel=r}ngOnInit(){this.operReplacementsService.getOperReplacements()}ionViewWillEnter(){this.splitPanel.show.next(!0)}scrollToTop(){this.content.scrollToTop(300)}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](E),c["\u0275\u0275directiveInject"](S.a),c["\u0275\u0275directiveInject"](U.a),c["\u0275\u0275directiveInject"](p.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["app-oper-replacements-list"]],viewQuery:function(e,t){var n;1&e&&c["\u0275\u0275viewQuery"](o.IonContent,!0),2&e&&c["\u0275\u0275queryRefresh"](n=c["\u0275\u0275loadQuery"]())&&(t.content=n.first)},decls:12,vars:18,consts:[["primaryLink","oper-replacements/create","primaryIcon","add-circle-outline",3,"title","primaryText"],["id","pages-content"],["showCancelButton","focus",3,"cancelButtonText","placeholder","ngModel","ionCancel","keyup.enter","ngModelChange"],[4,"ngIf"],[1,"lists-footer"],[4,"ngFor","ngForOf"],[1,"item-transparent"],["position","fixed"],[1,"wrap-text"],[3,"routerLink"],[1,"ion-text-center"],["color","success","size","small","fill","clear",3,"routerLink"],["name","create-outline"],["color","danger","size","small","fill","clear",3,"click"],["name","trash-outline"],["name","warning-outline","slot","start",1,"text-warning"],["fill","outline","color","success","slot","end",3,"routerLink"],["name","add-circle-outline","slot","end"],["size","12",1,"ion-text-center"],["fill","clear",3,"disabled","click"],["slot","end","name","play-outline",2,"transform","rotate(180deg)"],["fill","clear",3,"disabled"],["slot","start","name","play-outline"]],template:function(e,t){1&e&&(c["\u0275\u0275element"](0,"app-main-header",0),c["\u0275\u0275pipe"](1,"titlecase"),c["\u0275\u0275pipe"](2,"lowercase"),c["\u0275\u0275elementStart"](3,"ion-content",1),c["\u0275\u0275elementStart"](4,"ion-searchbar",2),c["\u0275\u0275listener"]("ionCancel",(function(){return t.operReplacementsService.searchValue="",t.operReplacementsService.getOperReplacements()}))("keyup.enter",(function(){return t.operReplacementsService.getOperReplacements()}))("ngModelChange",(function(e){return t.operReplacementsService.searchValue=e})),c["\u0275\u0275pipe"](5,"lowercase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](6,H,2,1,"ng-container",3),c["\u0275\u0275pipe"](7,"async"),c["\u0275\u0275template"](8,$,11,7,"ng-container",3),c["\u0275\u0275pipe"](9,"async"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](10,"ion-footer",4),c["\u0275\u0275template"](11,Y,8,8,"ion-row",3),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275propertyInterpolate"]("title",c["\u0275\u0275pipeBind1"](1,8,"OPERATIVIDAD REPUESTOS")),c["\u0275\u0275propertyInterpolate1"]("primaryText","Crear ",c["\u0275\u0275pipeBind1"](2,10,"OPERATIVIDAD REPUESTOS"),""),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("cancelButtonText","Cancelar")("placeholder","Buscar "+c["\u0275\u0275pipeBind1"](5,12,"OPERATIVIDAD REPUESTOS"))("ngModel",t.operReplacementsService.searchValue),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngIf",!c["\u0275\u0275pipeBind1"](7,14,t.loading.loading)&&(null==t.operReplacementsService.operReplacements?null:t.operReplacementsService.operReplacements.length)),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngIf",!(c["\u0275\u0275pipeBind1"](9,16,t.loading.loading)||null!=t.operReplacementsService.operReplacements&&t.operReplacementsService.operReplacements.length)),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("ngIf",t.operReplacementsService.meta))},directives:[m.a,o.IonContent,o.IonSearchbar,o.TextValueAccessor,a.NgControlStatus,a.NgModel,r.NgIf,o.IonFooter,r.NgForOf,o.IonCard,o.IonList,o.IonItem,o.IonLabel,i.k,o.RouterLinkDelegate,o.IonRow,o.IonCol,o.IonButton,i.i,o.IonIcon],pipes:[r.TitleCasePipe,r.LowerCasePipe,r.AsyncPipe,q.a],styles:[""]}),e})()},{path:"create",data:{title:"OPERATIVIDAD REPUESTOS",roles:["admin"]},component:L},{path:":id/edit",data:{title:"OPERATIVIDAD REPUESTOS",roles:["admin"]},component:k}];let G=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.l.forChild(z)],i.l]}),e})(),W=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.CommonModule,a.FormsModule,o.IonicModule,l.a,G]]}),e})()}}]);