(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{shoZ:function(e,t,n){"use strict";n.r(t),n.d(t,"SystRegionsPageModule",(function(){return K}));var i=n("ofXK"),o=n("3Pt+"),s=n("TEn/"),r=n("pk6O"),l=n("tyNb"),a=n("fXoL"),c=n("1HhC"),d=n("yvdN");let m=(()=>{class e{constructor(e){this.splitPanel=e}ngOnInit(){}ionViewWillEnter(){this.splitPanel.show.next(!0)}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-syst-regions"]],decls:19,vars:6,consts:[["title","DEPARTAMENTOS"],["size-md","3","size-sm","6","size-xs","12"],["routerLink","/syst-regions/list"],[2,"height","120px","width","100%","display","flex","align-items","center","justify-content","center"],["name","list-circle-outline","color","primary",1,"icon-m"],[1,"ion-text-center"],["routerLink","/syst-regions/create"],["name","add-circle-outline","color","success",1,"icon-m"]],template:function(e,t){1&e&&(a["\u0275\u0275element"](0,"app-main-header",0),a["\u0275\u0275elementStart"](1,"ion-content"),a["\u0275\u0275elementStart"](2,"ion-row"),a["\u0275\u0275elementStart"](3,"ion-col",1),a["\u0275\u0275elementStart"](4,"ion-card",2),a["\u0275\u0275elementStart"](5,"div",3),a["\u0275\u0275element"](6,"ion-icon",4),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](7,"ion-card-header"),a["\u0275\u0275elementStart"](8,"ion-card-subtitle",5),a["\u0275\u0275text"](9),a["\u0275\u0275pipe"](10,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"ion-col",1),a["\u0275\u0275elementStart"](12,"ion-card",6),a["\u0275\u0275elementStart"](13,"div",3),a["\u0275\u0275element"](14,"ion-icon",7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](15,"ion-card-header"),a["\u0275\u0275elementStart"](16,"ion-card-subtitle",5),a["\u0275\u0275text"](17),a["\u0275\u0275pipe"](18,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](9),a["\u0275\u0275textInterpolate1"](" Listar ",a["\u0275\u0275pipeBind1"](10,2,"DEPARTAMENTOS")," "),a["\u0275\u0275advance"](8),a["\u0275\u0275textInterpolate1"](" Crear ",a["\u0275\u0275pipeBind1"](18,4,"DEPARTAMENTOS")," "))},directives:[d.a,s.IonContent,s.IonRow,s.IonCol,s.IonCard,s.RouterLinkDelegate,l.i,s.IonIcon,s.IonCardHeader,s.IonCardSubtitle],pipes:[i.TitleCasePipe],styles:[""]}),e})();var p=n("mrSG"),u=n("2Vo4"),g=n("TIcx"),y=n("EgAa"),S=n("PWdp"),f=n("Ezvo");let v=(()=>{class e{constructor(e,t,n,i,o){this.api=e,this.alert=t,this.toast=n,this.router=i,this.navigation=o,this.systRegionsUrl="syst-regions",this.systRegionsFormValid=new u.a(!1),this.systRegions=[],this.systRegion={},this.systRegionLists={},this.searchValue="",this.perPage=10,this.meta=null,this.page=1,this.pagesContent=document.getElementById("pages-content")}getSystRegions(e=this.page,t=this.perPage){this.api.get(this.systRegionsUrl+"?page="+e+"&perPage="+t+"&q[name:cont]="+this.searchValue).subscribe(e=>{document.getElementById("pages-content").scrollToTop(300),this.systRegions=e.data,this.systRegionLists=e.lists,this.meta=e.meta},e=>{console.error(e)})}editSystRegion(e){this.api.get(this.systRegionsUrl+"/"+e+"/edit").subscribe(e=>{this.systRegion=e.data.model,this.systRegionLists=e.lists},e=>{console.error(e)})}updateSystRegion(){this.api.put(this.systRegionsUrl+"/"+this.systRegion.id,{model:this.systRegion,pivots:{}}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.navigation.back(),this.getSystRegions(1)})}createSystRegion(){this.api.get(this.systRegionsUrl+"/create").subscribe(e=>{this.systRegion={},this.systRegionLists=e.lists})}storeSystRegion(){this.api.post(this.systRegionsUrl,{model:this.systRegion,pivots:{}}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.navigation.back(),this.getSystRegions(1)})}deleteSystRegion(e){return Object(p.a)(this,void 0,void 0,(function*(){(yield this.alert.confirmation("Desea eliminar el item?"))&&this.api.delete(this.systRegionsUrl+"/"+e,{}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.getSystRegions(1)})}))}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275inject"](g.a),a["\u0275\u0275inject"](y.a),a["\u0275\u0275inject"](S.a),a["\u0275\u0275inject"](l.h),a["\u0275\u0275inject"](f.a))},e.\u0275prov=a["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var h=n("JmBq");const E=["systRegionsForm"];function I(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",11),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]().$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function R(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,I,2,1,"div",10),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275nextContext"]();const n=a["\u0275\u0275reference"](1);a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",null==n.form.controls.user_profile_ids?null:n.form.controls.user_profile_ids.hasError(e.type))}}function x(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",11),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]().$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function C(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,x,2,1,"div",10),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275nextContext"]();const n=a["\u0275\u0275reference"](1);a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",null==n.form.controls.syst_city_ids?null:n.form.controls.syst_city_ids.hasError(e.type))}}function b(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",11),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]().$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function T(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,b,2,1,"div",10),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275nextContext"]();const n=a["\u0275\u0275reference"](1);a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",null==n.form.controls.syst_country_id?null:n.form.controls.syst_country_id.hasError(e.type))}}function B(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",11),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]().$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function _(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,B,2,1,"div",10),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275nextContext"]();const n=a["\u0275\u0275reference"](1);a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",null==n.form.controls.name?null:n.form.controls.name.hasError(e.type))}}function F(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",11),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]().$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function M(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,F,2,1,"div",10),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275nextContext"]();const n=a["\u0275\u0275reference"](1);a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",null==n.form.controls.code?null:n.form.controls.code.hasError(e.type))}}let P=(()=>{class e{constructor(e,t){this.systRegionsService=e,this.toTitlecase=t,this.model={},this.validationMessages={name:[{type:"required",message:"El campo "+this.toTitlecase.transform("NAME")+" es obligatorio."}],code:[{type:"required",message:"El campo "+this.toTitlecase.transform("C\xd3DIGO")+" es obligatorio."}],syst_country_id:[{type:"required",message:"El campo "+this.toTitlecase.transform("PA\xcdS")+" es obligatorio."}],user_profile_ids:[{type:"required",message:"El campo "+this.toTitlecase.transform("PERFILES DE USUARIOS")+" es obligatorio."}],syst_city_ids:[{type:"required",message:"El campo "+this.toTitlecase.transform("CIUDADES")+" es obligatorio."}]}}ngOnInit(){}ngAfterViewInit(){}setUserProfileIds(e){let t=null;if(e.value.length){t=[];for(let n=0;n<e.value.length;n++)t.push(e.value[n].id)}this.systRegionsService.systRegion.user_profile_ids=t}setSystCityIds(e){let t=null;if(e.value.length){t=[];for(let n=0;n<e.value.length;n++)t.push(e.value[n].id)}this.systRegionsService.systRegion.syst_city_ids=t}setSystCountryId(e){this.systRegionsService.systRegion.syst_country_id=e.value?e.value.id:null}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](v),a["\u0275\u0275directiveInject"](i.TitleCasePipe))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-syst-regions-form"]],viewQuery:function(e,t){var n;1&e&&a["\u0275\u0275viewQuery"](E,!0),2&e&&a["\u0275\u0275queryRefresh"](n=a["\u0275\u0275loadQuery"]())&&(t.systRegionsForm=n.first)},inputs:{model:"model"},decls:43,vars:69,consts:[["novalidate","","autocomplete","off"],["systRegionsForm","ngForm"],[1,"item-transparent"],["name","user_profile_ids","id","user_profile_ids-field","itemValueField","id","itemTextField","name",3,"ngModel","items","isMultiple","canClear","hasConfirmButton","confirmButtonText","searchPlaceholder","searchFailText","closeButtonText","clearButtonText","canSearch","ngModelChange","onChange"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["name","syst_city_ids","id","syst_city_ids-field","itemValueField","id","itemTextField","name",3,"ngModel","items","isMultiple","canClear","hasConfirmButton","confirmButtonText","searchPlaceholder","searchFailText","closeButtonText","clearButtonText","canSearch","ngModelChange","onChange"],["name","syst_country_id","id","syst_country_id-field","itemValueField","id","itemTextField","name",3,"required","ngModel","items","canClear","hasConfirmButton","confirmButtonText","searchPlaceholder","searchFailText","closeButtonText","clearButtonText","canSearch","ngModelChange","onChange"],["type","text","name","name","id","name-field","placeholder","",3,"ngModel","required","ngModelChange"],["type","text","name","code","id","code-field","placeholder","",3,"ngModel","required","ngModelChange"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"form",0,1),a["\u0275\u0275elementStart"](2,"ion-item",2),a["\u0275\u0275elementStart"](3,"ion-label"),a["\u0275\u0275text"](4),a["\u0275\u0275pipe"](5,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"ionic-selectable",3),a["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.user_profiles=e}))("onChange",(function(e){return t.setUserProfileIds(e)})),a["\u0275\u0275pipe"](7,"titlecase"),a["\u0275\u0275pipe"](8,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](9,"div",4),a["\u0275\u0275template"](10,R,2,1,"ng-container",5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"ion-item",2),a["\u0275\u0275elementStart"](12,"ion-label"),a["\u0275\u0275text"](13),a["\u0275\u0275pipe"](14,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](15,"ionic-selectable",6),a["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.syst_cities=e}))("onChange",(function(e){return t.setSystCityIds(e)})),a["\u0275\u0275pipe"](16,"titlecase"),a["\u0275\u0275pipe"](17,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](18,"div",4),a["\u0275\u0275template"](19,C,2,1,"ng-container",5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](20,"ion-item",2),a["\u0275\u0275elementStart"](21,"ion-label"),a["\u0275\u0275text"](22),a["\u0275\u0275pipe"](23,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](24,"ionic-selectable",7),a["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.syst_country=e}))("onChange",(function(e){return t.setSystCountryId(e)})),a["\u0275\u0275pipe"](25,"titlecase"),a["\u0275\u0275pipe"](26,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](27,"div",4),a["\u0275\u0275template"](28,T,2,1,"ng-container",5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](29,"ion-item",2),a["\u0275\u0275elementStart"](30,"ion-label"),a["\u0275\u0275text"](31),a["\u0275\u0275pipe"](32,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](33,"ion-input",8),a["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.name=e})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](34,"div",4),a["\u0275\u0275template"](35,_,2,1,"ng-container",5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](36,"ion-item",2),a["\u0275\u0275elementStart"](37,"ion-label"),a["\u0275\u0275text"](38),a["\u0275\u0275pipe"](39,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](40,"ion-input",9),a["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.code=e})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](41,"div",4),a["\u0275\u0275template"](42,M,2,1,"ng-container",5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](4),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](5,47,"PERFILES DE USUARIOS")),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngModel",t.model.user_profiles)("items",t.systRegionsService.systRegionLists.UserProfile)("isMultiple",!0)("canClear",!0)("hasConfirmButton",!0)("confirmButtonText","Seleccionar")("searchPlaceholder","Buscar "+a["\u0275\u0275pipeBind1"](7,49,"PERFILES DE USUARIOS"))("searchFailText","No se encontro "+a["\u0275\u0275pipeBind1"](8,51,"PERFILES DE USUARIOS")+" que coincida!")("closeButtonText","Cancelar")("clearButtonText","Limpiar")("canSearch",!0),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("ngForOf",t.validationMessages.user_profile_ids),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](14,53,"CIUDADES")),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngModel",t.model.syst_cities)("items",t.systRegionsService.systRegionLists.SystCity)("isMultiple",!0)("canClear",!0)("hasConfirmButton",!0)("confirmButtonText","Seleccionar")("searchPlaceholder","Buscar "+a["\u0275\u0275pipeBind1"](16,55,"CIUDADES"))("searchFailText","No se encontro "+a["\u0275\u0275pipeBind1"](17,57,"CIUDADES")+" que coincida!")("closeButtonText","Cancelar")("clearButtonText","Limpiar")("canSearch",!0),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("ngForOf",t.validationMessages.syst_city_ids),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](23,59,"PAISE")),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("required",!0)("ngModel",t.model.syst_country)("items",t.systRegionsService.systRegionLists.SystCountry)("canClear",!0)("hasConfirmButton",!0)("confirmButtonText","Seleccionar")("searchPlaceholder","Buscar "+a["\u0275\u0275pipeBind1"](25,61,"PAISES"))("searchFailText","No se encontro "+a["\u0275\u0275pipeBind1"](26,63,"PAISES")+" que coincida!")("closeButtonText","Cancelar")("clearButtonText","Limpiar")("canSearch",!0),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("ngForOf",t.validationMessages.syst_country_id),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](32,65,"NAME")),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngModel",t.model.name)("required",!0),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngForOf",t.validationMessages.name),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](39,67,"C\xd3DIGO")),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngModel",t.model.code)("required",!0),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngForOf",t.validationMessages.code))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.NgForm,s.IonItem,s.IonLabel,h.a,o.NgControlStatus,o.NgModel,i.NgForOf,o.RequiredValidator,s.IonInput,s.TextValueAccessor,i.NgIf],pipes:[i.TitleCasePipe],styles:[""]}),e})();const w=["systRegionForm"];function A(e,t){1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275text"](1,"Guardar"),a["\u0275\u0275elementContainerEnd"]())}let k=(()=>{class e{constructor(e,t,n,i){this.systRegionsService=e,this.route=t,this.platform=n,this.splitPanel=i,this.id=null,this.model=null}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.systRegionsService.editSystRegion(this.id)}ionViewWillEnter(){this.splitPanel.show.next(!0)}ngAfterViewInit(){this.systRegionForm.systRegionsForm.valueChanges.subscribe(e=>{this.systRegionsService.systRegionsFormValid.next(this.systRegionForm.systRegionsForm.valid)})}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](v),a["\u0275\u0275directiveInject"](l.a),a["\u0275\u0275directiveInject"](s.Platform),a["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-syst-regions-edit"]],viewQuery:function(e,t){var n;1&e&&a["\u0275\u0275viewQuery"](w,!0),2&e&&a["\u0275\u0275queryRefresh"](n=a["\u0275\u0275loadQuery"]())&&(t.systRegionForm=n.first)},decls:15,vars:9,consts:[["slot","start"],[3,"text","icon"],["slot","primary"],["color","success","fill","clear",3,"disabled","click"],[4,"ngIf"],["slot","end","color","success","name","save-outline"],["fullscreen",""],[3,"model"],["systRegionForm",""]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"ion-header"),a["\u0275\u0275elementStart"](1,"ion-toolbar"),a["\u0275\u0275elementStart"](2,"ion-buttons",0),a["\u0275\u0275element"](3,"ion-back-button",1),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"ion-buttons",2),a["\u0275\u0275elementStart"](5,"ion-button",3),a["\u0275\u0275listener"]("click",(function(){return t.systRegionsService.updateSystRegion()})),a["\u0275\u0275template"](6,A,2,0,"ng-container",4),a["\u0275\u0275element"](7,"ion-icon",5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"ion-title"),a["\u0275\u0275text"](9),a["\u0275\u0275pipe"](10,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"ion-content",6),a["\u0275\u0275elementStart"](12,"ion-card"),a["\u0275\u0275element"](13,"app-syst-regions-form",7,8),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("text","")("icon","arrow-back-outline"),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("disabled",!t.systRegionsService.systRegionsFormValid.value),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",!t.platform.is("mobile")),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate2"]("Editar ",a["\u0275\u0275pipeBind1"](10,7,"DEPARTAMENTOS"),": ",null==t.systRegionsService.systRegion?null:t.systRegionsService.systRegion.name,""),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("model",t.systRegionsService.systRegion))},directives:[s.IonHeader,s.IonToolbar,s.IonButtons,s.IonBackButton,s.IonBackButtonDelegate,s.IonButton,i.NgIf,s.IonIcon,s.IonTitle,s.IonContent,s.IonCard,P],pipes:[i.TitleCasePipe],styles:[""]}),e})();const O=["systRegionForm"];function L(e,t){1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275text"](1,"Guardar"),a["\u0275\u0275elementContainerEnd"]())}let D=(()=>{class e{constructor(e,t,n,i){this.systRegionsService=e,this.route=t,this.platform=n,this.splitPanel=i,this.id=null,this.formValid=!1}ngOnInit(){this.clearPosts()}ionViewWillEnter(){this.splitPanel.show.next(!0)}ngAfterViewInit(){this.systRegionForm.systRegionsForm.valueChanges.subscribe(e=>{this.systRegionsService.systRegionsFormValid.next(this.systRegionForm.systRegionsForm.valid)})}clearPosts(){console.log("clear"),this.systRegionsService.createSystRegion(),this.systRegionsService.systRegion={}}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](v),a["\u0275\u0275directiveInject"](l.a),a["\u0275\u0275directiveInject"](s.Platform),a["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-syst-regions-create"]],viewQuery:function(e,t){var n;1&e&&a["\u0275\u0275viewQuery"](O,!0),2&e&&a["\u0275\u0275queryRefresh"](n=a["\u0275\u0275loadQuery"]())&&(t.systRegionForm=n.first)},decls:15,vars:8,consts:[["slot","start"],[3,"text","icon"],["slot","primary"],["color","success","fill","clear",3,"disabled","click"],[4,"ngIf"],["slot","end","color","success","name","save-outline"],["fullscreen",""],[3,"model"],["systRegionForm",""]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"ion-header"),a["\u0275\u0275elementStart"](1,"ion-toolbar"),a["\u0275\u0275elementStart"](2,"ion-buttons",0),a["\u0275\u0275element"](3,"ion-back-button",1),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"ion-buttons",2),a["\u0275\u0275elementStart"](5,"ion-button",3),a["\u0275\u0275listener"]("click",(function(){return t.systRegionsService.storeSystRegion()})),a["\u0275\u0275template"](6,L,2,0,"ng-container",4),a["\u0275\u0275element"](7,"ion-icon",5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"ion-title"),a["\u0275\u0275text"](9),a["\u0275\u0275pipe"](10,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"ion-content",6),a["\u0275\u0275elementStart"](12,"ion-card"),a["\u0275\u0275element"](13,"app-syst-regions-form",7,8),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("text","")("icon","arrow-back-outline"),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("disabled",!t.systRegionsService.systRegionsFormValid.value),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",!t.platform.is("mobile")),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate1"]("Crear ",a["\u0275\u0275pipeBind1"](10,6,"DEPARTAMENTOS"),""),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("model",t.systRegionsService.systRegion))},directives:[s.IonHeader,s.IonToolbar,s.IonButtons,s.IonBackButton,s.IonBackButtonDelegate,s.IonButton,i.NgIf,s.IonIcon,s.IonTitle,s.IonContent,s.IonCard,P],pipes:[i.TitleCasePipe],styles:[""]}),e})();var N=n("fYRX");function V(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"span"),a["\u0275\u0275text"](1,", "),a["\u0275\u0275elementEnd"]())}function j(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275elementStart"](1,"a",9),a["\u0275\u0275text"](2),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](3,V,2,0,"span",3),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit,n=t.last;a["\u0275\u0275advance"](1),a["\u0275\u0275propertyInterpolate1"]("routerLink","/user-profiles/",null==e?null:e.id,"/edit"),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](null==e?null:e.name),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",!n)}}function U(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,j,4,3,"ng-container",5),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]().$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",null==e?null:e.user_profiles)}}function q(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"span"),a["\u0275\u0275text"](1,", "),a["\u0275\u0275elementEnd"]())}function $(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275elementStart"](1,"a",9),a["\u0275\u0275text"](2),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](3,q,2,0,"span",3),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit,n=t.last;a["\u0275\u0275advance"](1),a["\u0275\u0275propertyInterpolate1"]("routerLink","/syst-cities/",null==e?null:e.id,"/edit"),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](null==e?null:e.name),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",!n)}}function Q(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,$,4,3,"ng-container",5),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]().$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",null==e?null:e.syst_cities)}}function z(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"ion-card"),a["\u0275\u0275elementStart"](1,"ion-list"),a["\u0275\u0275elementStart"](2,"ion-item",6),a["\u0275\u0275elementStart"](3,"ion-label",7),a["\u0275\u0275elementStart"](4,"b"),a["\u0275\u0275text"](5),a["\u0275\u0275pipe"](6,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](7,"div",8),a["\u0275\u0275text"](8),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](9,"ion-item",6),a["\u0275\u0275elementStart"](10,"ion-label",7),a["\u0275\u0275elementStart"](11,"b"),a["\u0275\u0275text"](12),a["\u0275\u0275pipe"](13,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](14,"div",8),a["\u0275\u0275text"](15),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](16,"ion-item",6),a["\u0275\u0275elementStart"](17,"ion-label",7),a["\u0275\u0275elementStart"](18,"b"),a["\u0275\u0275text"](19),a["\u0275\u0275pipe"](20,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](21,"div",8),a["\u0275\u0275template"](22,U,2,1,"ng-container",3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](23,"ion-item",6),a["\u0275\u0275elementStart"](24,"ion-label",7),a["\u0275\u0275elementStart"](25,"b"),a["\u0275\u0275text"](26),a["\u0275\u0275pipe"](27,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](28,"div",8),a["\u0275\u0275template"](29,Q,2,1,"ng-container",3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](30,"ion-item",6),a["\u0275\u0275elementStart"](31,"ion-label",7),a["\u0275\u0275elementStart"](32,"b"),a["\u0275\u0275text"](33),a["\u0275\u0275pipe"](34,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](35,"div",8),a["\u0275\u0275elementStart"](36,"a",9),a["\u0275\u0275text"](37),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](38,"ion-footer"),a["\u0275\u0275elementStart"](39,"ion-row"),a["\u0275\u0275elementStart"](40,"ion-col",10),a["\u0275\u0275elementStart"](41,"ion-button",11),a["\u0275\u0275element"](42,"ion-icon",12),a["\u0275\u0275elementStart"](43,"div"),a["\u0275\u0275text"](44,"Editar"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](45,"ion-col",10),a["\u0275\u0275elementStart"](46,"ion-button",13),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](e);const n=t.$implicit;return a["\u0275\u0275nextContext"](2).systRegionsService.deleteSystRegion(null==n?null:n.id)})),a["\u0275\u0275element"](47,"ion-icon",14),a["\u0275\u0275elementStart"](48,"div"),a["\u0275\u0275text"](49,"Eliminar"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;a["\u0275\u0275advance"](5),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](6,12,"NAME")),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](null==e?null:e.name),a["\u0275\u0275advance"](4),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](13,14,"C\xd3DIGO")),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](null==e?null:e.code),a["\u0275\u0275advance"](4),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](20,16,"PERFILES DE USUARIOS")),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngIf",null==e||null==e.user_profiles?null:e.user_profiles.length),a["\u0275\u0275advance"](4),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](27,18,"CIUDADES")),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngIf",null==e||null==e.syst_cities?null:e.syst_cities.length),a["\u0275\u0275advance"](4),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](34,20,"PAISES")),a["\u0275\u0275advance"](3),a["\u0275\u0275propertyInterpolate1"]("routerLink","/syst-countries/",null==e||null==e.syst_country?null:e.syst_country.id,"/edit"),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](null==e||null==e.syst_country?null:e.syst_country.name),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("routerLink","/syst-regions/"+(null==e?null:e.id)+"/edit")}}function G(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,z,50,22,"ion-card",5),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",e.systRegionsService.systRegions)}}function W(e,t){1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275elementStart"](1,"ion-item"),a["\u0275\u0275element"](2,"ion-icon",15),a["\u0275\u0275elementStart"](3,"ion-label"),a["\u0275\u0275elementStart"](4,"h2"),a["\u0275\u0275text"](5),a["\u0275\u0275pipe"](6,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](7,"ion-button",16),a["\u0275\u0275text"](8),a["\u0275\u0275pipe"](9,"titlecase"),a["\u0275\u0275element"](10,"ion-icon",17),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementContainerEnd"]()),2&e&&(a["\u0275\u0275advance"](5),a["\u0275\u0275textInterpolate1"]("No se encontraron ",a["\u0275\u0275pipeBind1"](6,3,"DEPARTAMENTOS"),""),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("routerLink","/syst-regions/create"),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" Crear ",a["\u0275\u0275pipeBind1"](9,5,"DEPARTAMENTOS")," "))}function H(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"ion-row"),a["\u0275\u0275elementStart"](1,"ion-col",18),a["\u0275\u0275elementStart"](2,"ion-button",19),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](e);const t=a["\u0275\u0275nextContext"]();return t.systRegionsService.getSystRegions(t.systRegionsService.meta.current_page-1)})),a["\u0275\u0275element"](3,"ion-icon",20),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"ion-button",21),a["\u0275\u0275text"](5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"ion-button",19),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](e);const t=a["\u0275\u0275nextContext"]();return t.systRegionsService.getSystRegions(t.systRegionsService.meta.current_page+1)})),a["\u0275\u0275element"](7,"ion-icon",22),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("disabled",1==e.systRegionsService.meta.current_page),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("disabled",!0),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate5"](" Pag: ",e.systRegionsService.meta.current_page," /",e.systRegionsService.meta.last_page," ",e.systRegionsService.meta.from,"-",e.systRegionsService.meta.to," /",e.systRegionsService.meta.total," "),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("disabled",e.systRegionsService.meta.current_page==e.systRegionsService.meta.last_page)}}const J=[{path:"",component:m},{path:"list",component:(()=>{class e{constructor(e,t,n,i){this.systRegionsService=e,this.api=t,this.loading=n,this.splitPanel=i}ngOnInit(){this.systRegionsService.getSystRegions()}ionViewWillEnter(){this.splitPanel.show.next(!0)}scrollToTop(){this.content.scrollToTop(300)}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](v),a["\u0275\u0275directiveInject"](g.a),a["\u0275\u0275directiveInject"](N.a),a["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-syst-regions-list"]],viewQuery:function(e,t){var n;1&e&&a["\u0275\u0275viewQuery"](s.IonContent,!0),2&e&&a["\u0275\u0275queryRefresh"](n=a["\u0275\u0275loadQuery"]())&&(t.content=n.first)},decls:12,vars:18,consts:[["primaryLink","syst-regions/create","primaryIcon","add-circle-outline",3,"title","primaryText"],["id","pages-content"],["showCancelButton","focus",3,"cancelButtonText","placeholder","ngModel","ionCancel","keyup.enter","ngModelChange"],[4,"ngIf"],[1,"lists-footer"],[4,"ngFor","ngForOf"],[1,"item-transparent"],["position","fixed"],[1,"wrap-text"],[3,"routerLink"],[1,"ion-text-center"],["color","success","size","small","fill","clear",3,"routerLink"],["name","create-outline"],["color","danger","size","small","fill","clear",3,"click"],["name","trash-outline"],["name","warning-outline","slot","start",1,"text-warning"],["fill","outline","color","success","slot","end",3,"routerLink"],["name","add-circle-outline","slot","end"],["size","12",1,"ion-text-center"],["fill","clear",3,"disabled","click"],["slot","end","name","play-outline",2,"transform","rotate(180deg)"],["fill","clear",3,"disabled"],["slot","start","name","play-outline"]],template:function(e,t){1&e&&(a["\u0275\u0275element"](0,"app-main-header",0),a["\u0275\u0275pipe"](1,"titlecase"),a["\u0275\u0275pipe"](2,"lowercase"),a["\u0275\u0275elementStart"](3,"ion-content",1),a["\u0275\u0275elementStart"](4,"ion-searchbar",2),a["\u0275\u0275listener"]("ionCancel",(function(){return t.systRegionsService.searchValue="",t.systRegionsService.getSystRegions()}))("keyup.enter",(function(){return t.systRegionsService.getSystRegions()}))("ngModelChange",(function(e){return t.systRegionsService.searchValue=e})),a["\u0275\u0275pipe"](5,"lowercase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](6,G,2,1,"ng-container",3),a["\u0275\u0275pipe"](7,"async"),a["\u0275\u0275template"](8,W,11,7,"ng-container",3),a["\u0275\u0275pipe"](9,"async"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](10,"ion-footer",4),a["\u0275\u0275template"](11,H,8,8,"ion-row",3),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275propertyInterpolate"]("title",a["\u0275\u0275pipeBind1"](1,8,"DEPARTAMENTOS")),a["\u0275\u0275propertyInterpolate1"]("primaryText","Crear ",a["\u0275\u0275pipeBind1"](2,10,"DEPARTAMENTOS"),""),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("cancelButtonText","Cancelar")("placeholder","Buscar "+a["\u0275\u0275pipeBind1"](5,12,"DEPARTAMENTOS"))("ngModel",t.systRegionsService.searchValue),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngIf",!a["\u0275\u0275pipeBind1"](7,14,t.loading.loading)&&(null==t.systRegionsService.systRegions?null:t.systRegionsService.systRegions.length)),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngIf",!(a["\u0275\u0275pipeBind1"](9,16,t.loading.loading)||null!=t.systRegionsService.systRegions&&t.systRegionsService.systRegions.length)),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngIf",t.systRegionsService.meta))},directives:[d.a,s.IonContent,s.IonSearchbar,s.TextValueAccessor,o.NgControlStatus,o.NgModel,i.NgIf,s.IonFooter,i.NgForOf,s.IonCard,s.IonList,s.IonItem,s.IonLabel,l.k,s.RouterLinkDelegate,s.IonRow,s.IonCol,s.IonButton,l.i,s.IonIcon],pipes:[i.TitleCasePipe,i.LowerCasePipe,i.AsyncPipe],styles:[""]}),e})()},{path:"create",component:D},{path:":id/edit",component:k}];let X=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.l.forChild(J)],l.l]}),e})(),K=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.CommonModule,o.FormsModule,s.IonicModule,r.a,X]]}),e})()}}]);