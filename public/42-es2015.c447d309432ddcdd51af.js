(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{E3BJ:function(e,t,n){"use strict";n.r(t),n.d(t,"OperPreventiveMaintenancesPageModule",(function(){return G}));var i=n("ofXK"),a=n("3Pt+"),r=n("TEn/"),o=n("pk6O"),l=n("tyNb"),c=n("fXoL"),s=n("1HhC"),p=n("yvdN");let m=(()=>{class e{constructor(e){this.splitPanel=e}ngOnInit(){}ionViewWillEnter(){this.splitPanel.show.next(!0)}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["app-oper-preventive-maintenances"]],decls:19,vars:6,consts:[["title","OPERATIVIDAD MTTO PREVENTIVOS"],["size-md","3","size-sm","6","size-xs","12"],["routerLink","/oper-preventive-maintenances/list"],[2,"height","120px","width","100%","display","flex","align-items","center","justify-content","center"],["name","list-circle-outline","color","primary",1,"icon-m"],[1,"ion-text-center"],["routerLink","/oper-preventive-maintenances/create"],["name","add-circle-outline","color","success",1,"icon-m"]],template:function(e,t){1&e&&(c["\u0275\u0275element"](0,"app-main-header",0),c["\u0275\u0275elementStart"](1,"ion-content"),c["\u0275\u0275elementStart"](2,"ion-row"),c["\u0275\u0275elementStart"](3,"ion-col",1),c["\u0275\u0275elementStart"](4,"ion-card",2),c["\u0275\u0275elementStart"](5,"div",3),c["\u0275\u0275element"](6,"ion-icon",4),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"ion-card-header"),c["\u0275\u0275elementStart"](8,"ion-card-subtitle",5),c["\u0275\u0275text"](9),c["\u0275\u0275pipe"](10,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"ion-col",1),c["\u0275\u0275elementStart"](12,"ion-card",6),c["\u0275\u0275elementStart"](13,"div",3),c["\u0275\u0275element"](14,"ion-icon",7),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](15,"ion-card-header"),c["\u0275\u0275elementStart"](16,"ion-card-subtitle",5),c["\u0275\u0275text"](17),c["\u0275\u0275pipe"](18,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](9),c["\u0275\u0275textInterpolate1"](" Listar ",c["\u0275\u0275pipeBind1"](10,2,"OPERATIVIDAD MTTO PREVENTIVOS")," "),c["\u0275\u0275advance"](8),c["\u0275\u0275textInterpolate1"](" Crear ",c["\u0275\u0275pipeBind1"](18,4,"OPERATIVIDAD MTTO PREVENTIVOS")," "))},directives:[p.a,r.IonContent,r.IonRow,r.IonCol,r.IonCard,r.RouterLinkDelegate,l.i,r.IonIcon,r.IonCardHeader,r.IonCardSubtitle],pipes:[i.TitleCasePipe],styles:[""]}),e})();var d=n("mrSG"),v=n("2Vo4"),u=n("wd/R"),f=n("TIcx"),M=n("EgAa"),I=n("PWdp"),h=n("Ezvo");let E=(()=>{class e{constructor(e,t,n,i,a){this.api=e,this.alert=t,this.toast=n,this.router=i,this.navigation=a,this.operPreventiveMaintenancesUrl="oper-preventive-maintenances",this.operPreventiveMaintenancesFormValid=new v.a(!1),this.operPreventiveMaintenances=[],this.operPreventiveMaintenance={},this.operPreventiveMaintenanceLists={},this.searchValue="",this.perPage=10,this.meta=null,this.page=1,this.pagesContent=document.getElementById("pages-content")}getOperPreventiveMaintenances(e=this.page,t=this.perPage){this.api.get(this.operPreventiveMaintenancesUrl+"?page="+e+"&perPage="+t+"&q[name:cont]="+this.searchValue).subscribe(e=>{document.getElementById("pages-content").scrollToTop(300),this.operPreventiveMaintenances=e.data,this.operPreventiveMaintenanceLists=e.lists,this.meta=e.meta},e=>{console.error(e)})}editOperPreventiveMaintenance(e){this.api.get(this.operPreventiveMaintenancesUrl+"/"+e+"/edit").subscribe(e=>{this.operPreventiveMaintenance=e.data.model,this.operPreventiveMaintenanceLists=e.lists},e=>{console.error(e)})}updateOperPreventiveMaintenance(){this.api.put(this.operPreventiveMaintenancesUrl+"/"+this.operPreventiveMaintenance.id,{model:this.operPreventiveMaintenance,pivots:{}}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.navigation.back(),this.getOperPreventiveMaintenances(1)})}createOperPreventiveMaintenance(){this.api.get(this.operPreventiveMaintenancesUrl+"/create").subscribe(e=>{this.operPreventiveMaintenance={},this.operPreventiveMaintenance.time=u().format("HH:mm"),this.operPreventiveMaintenance.date=u().format("YYYY-MM-DD"),this.operPreventiveMaintenanceLists=e.lists})}storeOperPreventiveMaintenance(){this.api.post(this.operPreventiveMaintenancesUrl,{model:this.operPreventiveMaintenance,pivots:{}}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.navigation.back(),this.getOperPreventiveMaintenances(1)})}deleteOperPreventiveMaintenance(e){return Object(d.a)(this,void 0,void 0,(function*(){(yield this.alert.confirmation("Desea eliminar el item?"))&&this.api.delete(this.operPreventiveMaintenancesUrl+"/"+e,{}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.getOperPreventiveMaintenances(1)})}))}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275inject"](f.a),c["\u0275\u0275inject"](M.a),c["\u0275\u0275inject"](I.a),c["\u0275\u0275inject"](l.h),c["\u0275\u0275inject"](h.a))},e.\u0275prov=c["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var g=n("JmBq");const S=["operPreventiveMaintenancesForm"];function P(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",11),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]().$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function x(e,t){if(1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275template"](1,P,2,1,"div",10),c["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275nextContext"]();const n=c["\u0275\u0275reference"](1);c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",null==n.form.controls.oper_machine_id?null:n.form.controls.oper_machine_id.hasError(e.type))}}function T(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",11),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]().$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function y(e,t){if(1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275template"](1,T,2,1,"div",10),c["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275nextContext"]();const n=c["\u0275\u0275reference"](1);c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",null==n.form.controls.name?null:n.form.controls.name.hasError(e.type))}}function C(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",11),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]().$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function O(e,t){if(1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275template"](1,C,2,1,"div",10),c["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275nextContext"]();const n=c["\u0275\u0275reference"](1);c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",null==n.form.controls.date?null:n.form.controls.date.hasError(e.type))}}function b(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",11),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]().$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function V(e,t){if(1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275template"](1,b,2,1,"div",10),c["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275nextContext"]();const n=c["\u0275\u0275reference"](1);c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",null==n.form.controls.time?null:n.form.controls.time.hasError(e.type))}}function B(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",11),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]().$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function A(e,t){if(1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275template"](1,B,2,1,"div",10),c["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275nextContext"]();const n=c["\u0275\u0275reference"](1);c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",null==n.form.controls.next?null:n.form.controls.next.hasError(e.type))}}let w=(()=>{class e{constructor(e,t){this.operPreventiveMaintenancesService=e,this.toTitlecase=t,this.model={},this.validationMessages={oper_machine_id:[{type:"required",message:"El campo "+this.toTitlecase.transform("MAQUINA")+" es obligatorio."}],name:[{type:"required",message:"El campo "+this.toTitlecase.transform("NOMBRE")+" es obligatorio."}],date:[{type:"required",message:"El campo "+this.toTitlecase.transform("FECHA")+" es obligatorio."}],time:[{type:"required",message:"El campo "+this.toTitlecase.transform("HORA")+" es obligatorio."}],next:[{type:"required",message:"El campo "+this.toTitlecase.transform("SIGUIENTE EN")+" es obligatorio."}]}}ngOnInit(){}ngAfterViewInit(){}setOperMachineId(e){this.operPreventiveMaintenancesService.operPreventiveMaintenance.oper_machine_id=e.value?e.value.id:null}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](E),c["\u0275\u0275directiveInject"](i.TitleCasePipe))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["app-oper-preventive-maintenances-form"]],viewQuery:function(e,t){var n;1&e&&c["\u0275\u0275viewQuery"](S,!0),2&e&&c["\u0275\u0275queryRefresh"](n=c["\u0275\u0275loadQuery"]())&&(t.operPreventiveMaintenancesForm=n.first)},inputs:{model:"model"},decls:39,vars:45,consts:[["novalidate","","autocomplete","off"],["operPreventiveMaintenancesForm","ngForm"],[1,"item-transparent"],["name","oper_machine_id","id","oper_machine_id-field","itemValueField","id","itemTextField","name",3,"required","ngModel","items","canClear","hasConfirmButton","confirmButtonText","searchPlaceholder","searchFailText","closeButtonText","clearButtonText","canSearch","ngModelChange","onChange"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["type","text","name","name","id","name-field","placeholder","",3,"ngModel","ngModelChange"],["name","date","id","date-field","displayFormat","DD/MM/YYYY",3,"doneText","cancelText","ngModel","ngModelChange"],["name","time","id","time-field","displayFormat","HH:mm",3,"doneText","cancelText","ngModel","ngModelChange"],["name","next","id","next-field","displayFormat","DD/MM/YYYY",3,"doneText","cancelText","ngModel","ngModelChange"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"form",0,1),c["\u0275\u0275elementStart"](2,"ion-item",2),c["\u0275\u0275elementStart"](3,"ion-label"),c["\u0275\u0275text"](4),c["\u0275\u0275pipe"](5,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"ionic-selectable",3),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.oper_machine=e}))("onChange",(function(e){return t.setOperMachineId(e)})),c["\u0275\u0275pipe"](7,"titlecase"),c["\u0275\u0275pipe"](8,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"div",4),c["\u0275\u0275template"](10,x,2,1,"ng-container",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"ion-item",2),c["\u0275\u0275elementStart"](12,"ion-label"),c["\u0275\u0275text"](13),c["\u0275\u0275pipe"](14,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](15,"ion-input",6),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.name=e})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](16,"div",4),c["\u0275\u0275template"](17,y,2,1,"ng-container",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](18,"ion-item",2),c["\u0275\u0275elementStart"](19,"ion-label"),c["\u0275\u0275text"](20),c["\u0275\u0275pipe"](21,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](22,"ion-datetime",7),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.date=e})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](23,"div",4),c["\u0275\u0275template"](24,O,2,1,"ng-container",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](25,"ion-item",2),c["\u0275\u0275elementStart"](26,"ion-label"),c["\u0275\u0275text"](27),c["\u0275\u0275pipe"](28,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](29,"ion-datetime",8),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.time=e})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](30,"div",4),c["\u0275\u0275template"](31,V,2,1,"ng-container",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](32,"ion-item",2),c["\u0275\u0275elementStart"](33,"ion-label"),c["\u0275\u0275text"](34),c["\u0275\u0275pipe"](35,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](36,"ion-datetime",9),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.next=e})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](37,"div",4),c["\u0275\u0275template"](38,A,2,1,"ng-container",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](4),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](5,31,"MAQUINARIA")),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("required",!0)("ngModel",t.model.oper_machine)("items",t.operPreventiveMaintenancesService.operPreventiveMaintenanceLists.OperMachine)("canClear",!0)("hasConfirmButton",!0)("confirmButtonText","Seleccionar")("searchPlaceholder","Buscar "+c["\u0275\u0275pipeBind1"](7,33,"MAQUINARIA"))("searchFailText","No se encontro "+c["\u0275\u0275pipeBind1"](8,35,"MAQUINARIA")+" que coincida!")("closeButtonText","Cancelar")("clearButtonText","Limpiar")("canSearch",!0),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("ngForOf",t.validationMessages.oper_machine_id),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](14,37,"NOMBRE")),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngModel",t.model.name),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngForOf",t.validationMessages.name),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](21,39,"FECHA")),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("doneText","Seleccionar")("cancelText","Cancelar")("ngModel",t.model.date),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngForOf",t.validationMessages.date),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](28,41,"HORA")),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("doneText","Seleccionar")("cancelText","Cancelar")("ngModel",t.model.time),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngForOf",t.validationMessages.time),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](35,43,"SIGUIENTE EN")),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("doneText","Seleccionar")("cancelText","Cancelar")("ngModel",t.model.next),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngForOf",t.validationMessages.next))},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.NgForm,r.IonItem,r.IonLabel,g.a,a.RequiredValidator,a.NgControlStatus,a.NgModel,i.NgForOf,r.IonInput,r.TextValueAccessor,r.IonDatetime,r.SelectValueAccessor,i.NgIf],pipes:[i.TitleCasePipe],styles:[""]}),e})();const F=["operPreventiveMaintenanceForm"];function R(e,t){1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275text"](1,"Guardar"),c["\u0275\u0275elementContainerEnd"]())}let D=(()=>{class e{constructor(e,t,n,i){this.operPreventiveMaintenancesService=e,this.route=t,this.platform=n,this.splitPanel=i,this.id=null,this.model=null}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.operPreventiveMaintenancesService.editOperPreventiveMaintenance(this.id)}ionViewWillEnter(){this.splitPanel.show.next(!0)}ngAfterViewInit(){this.operPreventiveMaintenanceForm.operPreventiveMaintenancesForm.valueChanges.subscribe(e=>{this.operPreventiveMaintenancesService.operPreventiveMaintenancesFormValid.next(this.operPreventiveMaintenanceForm.operPreventiveMaintenancesForm.valid)})}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](E),c["\u0275\u0275directiveInject"](l.a),c["\u0275\u0275directiveInject"](r.Platform),c["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["app-oper-preventive-maintenances-edit"]],viewQuery:function(e,t){var n;1&e&&c["\u0275\u0275viewQuery"](F,!0),2&e&&c["\u0275\u0275queryRefresh"](n=c["\u0275\u0275loadQuery"]())&&(t.operPreventiveMaintenanceForm=n.first)},decls:15,vars:9,consts:[["slot","start"],[3,"text","icon"],["slot","primary"],["color","success","fill","clear",3,"disabled","click"],[4,"ngIf"],["slot","end","color","success","name","save-outline"],["fullscreen",""],[3,"model"],["operPreventiveMaintenanceForm",""]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"ion-header"),c["\u0275\u0275elementStart"](1,"ion-toolbar"),c["\u0275\u0275elementStart"](2,"ion-buttons",0),c["\u0275\u0275element"](3,"ion-back-button",1),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"ion-buttons",2),c["\u0275\u0275elementStart"](5,"ion-button",3),c["\u0275\u0275listener"]("click",(function(){return t.operPreventiveMaintenancesService.updateOperPreventiveMaintenance()})),c["\u0275\u0275template"](6,R,2,0,"ng-container",4),c["\u0275\u0275element"](7,"ion-icon",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"ion-title"),c["\u0275\u0275text"](9),c["\u0275\u0275pipe"](10,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"ion-content",6),c["\u0275\u0275elementStart"](12,"ion-card"),c["\u0275\u0275element"](13,"app-oper-preventive-maintenances-form",7,8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("text","")("icon","arrow-back-outline"),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("disabled",!t.operPreventiveMaintenancesService.operPreventiveMaintenancesFormValid.value),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",!t.platform.is("mobile")),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate2"]("Editar ",c["\u0275\u0275pipeBind1"](10,7,"OPERATIVIDAD MTTO PREVENTIVOS"),": ",null==t.operPreventiveMaintenancesService.operPreventiveMaintenance?null:t.operPreventiveMaintenancesService.operPreventiveMaintenance.name,""),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("model",t.operPreventiveMaintenancesService.operPreventiveMaintenance))},directives:[r.IonHeader,r.IonToolbar,r.IonButtons,r.IonBackButton,r.IonBackButtonDelegate,r.IonButton,i.NgIf,r.IonIcon,r.IonTitle,r.IonContent,r.IonCard,w],pipes:[i.TitleCasePipe],styles:[""]}),e})();const N=["operPreventiveMaintenanceForm"];function k(e,t){1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275text"](1,"Guardar"),c["\u0275\u0275elementContainerEnd"]())}let _=(()=>{class e{constructor(e,t,n,i){this.operPreventiveMaintenancesService=e,this.route=t,this.platform=n,this.splitPanel=i,this.id=null,this.formValid=!1}ngOnInit(){this.clearPosts()}ionViewWillEnter(){this.splitPanel.show.next(!0)}ngAfterViewInit(){this.operPreventiveMaintenanceForm.operPreventiveMaintenancesForm.valueChanges.subscribe(e=>{this.operPreventiveMaintenancesService.operPreventiveMaintenancesFormValid.next(this.operPreventiveMaintenanceForm.operPreventiveMaintenancesForm.valid)})}clearPosts(){console.log("clear"),this.operPreventiveMaintenancesService.createOperPreventiveMaintenance(),this.operPreventiveMaintenancesService.operPreventiveMaintenance={}}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](E),c["\u0275\u0275directiveInject"](l.a),c["\u0275\u0275directiveInject"](r.Platform),c["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["app-oper-preventive-maintenances-create"]],viewQuery:function(e,t){var n;1&e&&c["\u0275\u0275viewQuery"](N,!0),2&e&&c["\u0275\u0275queryRefresh"](n=c["\u0275\u0275loadQuery"]())&&(t.operPreventiveMaintenanceForm=n.first)},decls:15,vars:8,consts:[["slot","start"],[3,"text","icon"],["slot","primary"],["color","success","fill","clear",3,"disabled","click"],[4,"ngIf"],["slot","end","color","success","name","save-outline"],["fullscreen",""],[3,"model"],["operPreventiveMaintenanceForm",""]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"ion-header"),c["\u0275\u0275elementStart"](1,"ion-toolbar"),c["\u0275\u0275elementStart"](2,"ion-buttons",0),c["\u0275\u0275element"](3,"ion-back-button",1),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"ion-buttons",2),c["\u0275\u0275elementStart"](5,"ion-button",3),c["\u0275\u0275listener"]("click",(function(){return t.operPreventiveMaintenancesService.storeOperPreventiveMaintenance()})),c["\u0275\u0275template"](6,k,2,0,"ng-container",4),c["\u0275\u0275element"](7,"ion-icon",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"ion-title"),c["\u0275\u0275text"](9),c["\u0275\u0275pipe"](10,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"ion-content",6),c["\u0275\u0275elementStart"](12,"ion-card"),c["\u0275\u0275element"](13,"app-oper-preventive-maintenances-form",7,8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("text","")("icon","arrow-back-outline"),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("disabled",!t.operPreventiveMaintenancesService.operPreventiveMaintenancesFormValid.value),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",!t.platform.is("mobile")),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate1"]("Crear ",c["\u0275\u0275pipeBind1"](10,6,"OPERATIVIDAD MTTO PREVENTIVOS"),""),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("model",t.operPreventiveMaintenancesService.operPreventiveMaintenance))},directives:[r.IonHeader,r.IonToolbar,r.IonButtons,r.IonBackButton,r.IonBackButtonDelegate,r.IonButton,i.NgIf,r.IonIcon,r.IonTitle,r.IonContent,r.IonCard,w],pipes:[i.TitleCasePipe],styles:[""]}),e})();var j=n("fYRX"),L=n("Z1/u");let Y=(()=>{class e{transform(e,t){return e&&t?u(e,"HH:mm:ss").format(t):e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=c["\u0275\u0275definePipe"]({name:"timeFormat",type:e,pure:!0}),e})();function H(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"ion-card"),c["\u0275\u0275elementStart"](1,"ion-list"),c["\u0275\u0275elementStart"](2,"ion-item",6),c["\u0275\u0275elementStart"](3,"ion-label",7),c["\u0275\u0275elementStart"](4,"b"),c["\u0275\u0275text"](5),c["\u0275\u0275pipe"](6,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"div",8),c["\u0275\u0275text"](8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"ion-item",6),c["\u0275\u0275elementStart"](10,"ion-label",7),c["\u0275\u0275elementStart"](11,"b"),c["\u0275\u0275text"](12),c["\u0275\u0275pipe"](13,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](14,"div",8),c["\u0275\u0275text"](15),c["\u0275\u0275pipe"](16,"dateFormat"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](17,"ion-item",6),c["\u0275\u0275elementStart"](18,"ion-label",7),c["\u0275\u0275elementStart"](19,"b"),c["\u0275\u0275text"](20),c["\u0275\u0275pipe"](21,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](22,"div",8),c["\u0275\u0275text"](23),c["\u0275\u0275pipe"](24,"timeFormat"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](25,"ion-item",6),c["\u0275\u0275elementStart"](26,"ion-label",7),c["\u0275\u0275elementStart"](27,"b"),c["\u0275\u0275text"](28),c["\u0275\u0275pipe"](29,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](30,"div",8),c["\u0275\u0275text"](31),c["\u0275\u0275pipe"](32,"dateFormat"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](33,"ion-item",6),c["\u0275\u0275elementStart"](34,"ion-label",7),c["\u0275\u0275elementStart"](35,"b"),c["\u0275\u0275text"](36),c["\u0275\u0275pipe"](37,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](38,"div",8),c["\u0275\u0275elementStart"](39,"a",9),c["\u0275\u0275text"](40),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](41,"ion-footer"),c["\u0275\u0275elementStart"](42,"ion-row"),c["\u0275\u0275elementStart"](43,"ion-col",10),c["\u0275\u0275elementStart"](44,"ion-button",11),c["\u0275\u0275element"](45,"ion-icon",12),c["\u0275\u0275elementStart"](46,"div"),c["\u0275\u0275text"](47,"Editar"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](48,"ion-col",10),c["\u0275\u0275elementStart"](49,"ion-button",13),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](e);const n=t.$implicit;return c["\u0275\u0275nextContext"](2).operPreventiveMaintenancesService.deleteOperPreventiveMaintenance(null==n?null:n.id)})),c["\u0275\u0275element"](50,"ion-icon",14),c["\u0275\u0275elementStart"](51,"div"),c["\u0275\u0275text"](52,"Eliminar"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;c["\u0275\u0275advance"](5),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](6,12,"NOMBRE")),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](null==e?null:e.name),c["\u0275\u0275advance"](4),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](13,14,"FECHA")),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind2"](16,16,null==e?null:e.date,"DD/MM/YYYY")),c["\u0275\u0275advance"](5),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](21,19,"HORA")),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind2"](24,21,null==e?null:e.time,"HH:mm")),c["\u0275\u0275advance"](5),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](29,24,"SIGUIENTE EN")),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind2"](32,26,null==e?null:e.next,"DD/MM/YYYY")),c["\u0275\u0275advance"](5),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](37,29,"OPERATIVIDAD MAQUINARIA")),c["\u0275\u0275advance"](3),c["\u0275\u0275propertyInterpolate1"]("routerLink","/oper-machines/",null==e||null==e.oper_machine?null:e.oper_machine.id,"/edit"),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate"](null==e||null==e.oper_machine?null:e.oper_machine.name),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("routerLink","/oper-preventive-maintenances/"+(null==e?null:e.id)+"/edit")}}function Q(e,t){if(1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275template"](1,H,53,31,"ion-card",5),c["\u0275\u0275elementContainerEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngForOf",e.operPreventiveMaintenancesService.operPreventiveMaintenances)}}function q(e,t){1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275elementStart"](1,"ion-item"),c["\u0275\u0275element"](2,"ion-icon",15),c["\u0275\u0275elementStart"](3,"ion-label"),c["\u0275\u0275elementStart"](4,"h2"),c["\u0275\u0275text"](5),c["\u0275\u0275pipe"](6,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"ion-button",16),c["\u0275\u0275text"](8),c["\u0275\u0275pipe"](9,"titlecase"),c["\u0275\u0275element"](10,"ion-icon",17),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementContainerEnd"]()),2&e&&(c["\u0275\u0275advance"](5),c["\u0275\u0275textInterpolate1"]("No se encontraron ",c["\u0275\u0275pipeBind1"](6,3,"OPERATIVIDAD MTTO PREVENTIVOS"),""),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("routerLink","/oper-preventive-maintenances/create"),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" Crear ",c["\u0275\u0275pipeBind1"](9,5,"OPERATIVIDAD MTTO PREVENTIVOS")," "))}function U(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"ion-row"),c["\u0275\u0275elementStart"](1,"ion-col",18),c["\u0275\u0275elementStart"](2,"ion-button",19),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](e);const t=c["\u0275\u0275nextContext"]();return t.operPreventiveMaintenancesService.getOperPreventiveMaintenances(t.operPreventiveMaintenancesService.meta.current_page-1)})),c["\u0275\u0275element"](3,"ion-icon",20),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"ion-button",21),c["\u0275\u0275text"](5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"ion-button",19),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](e);const t=c["\u0275\u0275nextContext"]();return t.operPreventiveMaintenancesService.getOperPreventiveMaintenances(t.operPreventiveMaintenancesService.meta.current_page+1)})),c["\u0275\u0275element"](7,"ion-icon",22),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("disabled",1==e.operPreventiveMaintenancesService.meta.current_page),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("disabled",!0),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate5"](" Pag: ",e.operPreventiveMaintenancesService.meta.current_page," /",e.operPreventiveMaintenancesService.meta.last_page," ",e.operPreventiveMaintenancesService.meta.from,"-",e.operPreventiveMaintenancesService.meta.to," /",e.operPreventiveMaintenancesService.meta.total," "),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("disabled",e.operPreventiveMaintenancesService.meta.current_page==e.operPreventiveMaintenancesService.meta.last_page)}}const $=[{path:"",data:{title:"OPERATIVIDAD MTTO PREVENTIVOS",roles:["admin"]},component:m},{path:"list",data:{title:"OPERATIVIDAD MTTO PREVENTIVOS",roles:["admin"]},component:(()=>{class e{constructor(e,t,n,i){this.operPreventiveMaintenancesService=e,this.api=t,this.loading=n,this.splitPanel=i}ngOnInit(){this.operPreventiveMaintenancesService.getOperPreventiveMaintenances()}ionViewWillEnter(){this.splitPanel.show.next(!0)}scrollToTop(){this.content.scrollToTop(300)}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](E),c["\u0275\u0275directiveInject"](f.a),c["\u0275\u0275directiveInject"](j.a),c["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["app-oper-preventive-maintenances-list"]],viewQuery:function(e,t){var n;1&e&&c["\u0275\u0275viewQuery"](r.IonContent,!0),2&e&&c["\u0275\u0275queryRefresh"](n=c["\u0275\u0275loadQuery"]())&&(t.content=n.first)},decls:12,vars:18,consts:[["primaryLink","oper-preventive-maintenances/create","primaryIcon","add-circle-outline",3,"title","primaryText"],["id","pages-content"],["showCancelButton","focus",3,"cancelButtonText","placeholder","ngModel","ionCancel","keyup.enter","ngModelChange"],[4,"ngIf"],[1,"lists-footer"],[4,"ngFor","ngForOf"],[1,"item-transparent"],["position","fixed"],[1,"wrap-text"],[3,"routerLink"],[1,"ion-text-center"],["color","success","size","small","fill","clear",3,"routerLink"],["name","create-outline"],["color","danger","size","small","fill","clear",3,"click"],["name","trash-outline"],["name","warning-outline","slot","start",1,"text-warning"],["fill","outline","color","success","slot","end",3,"routerLink"],["name","add-circle-outline","slot","end"],["size","12",1,"ion-text-center"],["fill","clear",3,"disabled","click"],["slot","end","name","play-outline",2,"transform","rotate(180deg)"],["fill","clear",3,"disabled"],["slot","start","name","play-outline"]],template:function(e,t){1&e&&(c["\u0275\u0275element"](0,"app-main-header",0),c["\u0275\u0275pipe"](1,"titlecase"),c["\u0275\u0275pipe"](2,"lowercase"),c["\u0275\u0275elementStart"](3,"ion-content",1),c["\u0275\u0275elementStart"](4,"ion-searchbar",2),c["\u0275\u0275listener"]("ionCancel",(function(){return t.operPreventiveMaintenancesService.searchValue="",t.operPreventiveMaintenancesService.getOperPreventiveMaintenances()}))("keyup.enter",(function(){return t.operPreventiveMaintenancesService.getOperPreventiveMaintenances()}))("ngModelChange",(function(e){return t.operPreventiveMaintenancesService.searchValue=e})),c["\u0275\u0275pipe"](5,"lowercase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](6,Q,2,1,"ng-container",3),c["\u0275\u0275pipe"](7,"async"),c["\u0275\u0275template"](8,q,11,7,"ng-container",3),c["\u0275\u0275pipe"](9,"async"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](10,"ion-footer",4),c["\u0275\u0275template"](11,U,8,8,"ion-row",3),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275propertyInterpolate"]("title",c["\u0275\u0275pipeBind1"](1,8,"OPERATIVIDAD MTTO PREVENTIVOS")),c["\u0275\u0275propertyInterpolate1"]("primaryText","Crear ",c["\u0275\u0275pipeBind1"](2,10,"OPERATIVIDAD MTTO PREVENTIVOS"),""),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("cancelButtonText","Cancelar")("placeholder","Buscar "+c["\u0275\u0275pipeBind1"](5,12,"OPERATIVIDAD MTTO PREVENTIVOS"))("ngModel",t.operPreventiveMaintenancesService.searchValue),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngIf",!c["\u0275\u0275pipeBind1"](7,14,t.loading.loading)&&(null==t.operPreventiveMaintenancesService.operPreventiveMaintenances?null:t.operPreventiveMaintenancesService.operPreventiveMaintenances.length)),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngIf",!(c["\u0275\u0275pipeBind1"](9,16,t.loading.loading)||null!=t.operPreventiveMaintenancesService.operPreventiveMaintenances&&t.operPreventiveMaintenancesService.operPreventiveMaintenances.length)),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("ngIf",t.operPreventiveMaintenancesService.meta))},directives:[p.a,r.IonContent,r.IonSearchbar,r.TextValueAccessor,a.NgControlStatus,a.NgModel,i.NgIf,r.IonFooter,i.NgForOf,r.IonCard,r.IonList,r.IonItem,r.IonLabel,l.k,r.RouterLinkDelegate,r.IonRow,r.IonCol,r.IonButton,l.i,r.IonIcon],pipes:[i.TitleCasePipe,i.LowerCasePipe,i.AsyncPipe,L.a,Y],styles:[""]}),e})()},{path:"create",data:{title:"OPERATIVIDAD MTTO PREVENTIVOS",roles:["admin"]},component:_},{path:":id/edit",data:{title:"OPERATIVIDAD MTTO PREVENTIVOS",roles:["admin"]},component:D}];let z=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.l.forChild($)],l.l]}),e})(),G=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.CommonModule,a.FormsModule,r.IonicModule,o.a,z]]}),e})()}}]);