(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{GYcW:function(e,t,n){"use strict";n.r(t),n.d(t,"SettingGroupsPageModule",(function(){return Q}));var i=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),a=n("pk6O"),l=n("tyNb"),s=n("fXoL"),c=n("1HhC"),p=n("yvdN");let m=(()=>{class e{constructor(e){this.splitPanel=e}ngOnInit(){}ionViewWillEnter(){this.splitPanel.show.next(!0)}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-setting-groups"]],decls:19,vars:6,consts:[["title","AJUSTES GRUPOS"],["size-md","3","size-sm","6","size-xs","12"],["routerLink","/setting-groups/list"],[2,"height","120px","width","100%","display","flex","align-items","center","justify-content","center"],["name","list-circle-outline","color","primary",1,"icon-m"],[1,"ion-text-center"],["routerLink","/setting-groups/create"],["name","add-circle-outline","color","success",1,"icon-m"]],template:function(e,t){1&e&&(s["\u0275\u0275element"](0,"app-main-header",0),s["\u0275\u0275elementStart"](1,"ion-content"),s["\u0275\u0275elementStart"](2,"ion-row"),s["\u0275\u0275elementStart"](3,"ion-col",1),s["\u0275\u0275elementStart"](4,"ion-card",2),s["\u0275\u0275elementStart"](5,"div",3),s["\u0275\u0275element"](6,"ion-icon",4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"ion-card-header"),s["\u0275\u0275elementStart"](8,"ion-card-subtitle",5),s["\u0275\u0275text"](9),s["\u0275\u0275pipe"](10,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"ion-col",1),s["\u0275\u0275elementStart"](12,"ion-card",6),s["\u0275\u0275elementStart"](13,"div",3),s["\u0275\u0275element"](14,"ion-icon",7),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"ion-card-header"),s["\u0275\u0275elementStart"](16,"ion-card-subtitle",5),s["\u0275\u0275text"](17),s["\u0275\u0275pipe"](18,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](9),s["\u0275\u0275textInterpolate1"](" Listar ",s["\u0275\u0275pipeBind1"](10,2,"AJUSTES GRUPOS")," "),s["\u0275\u0275advance"](8),s["\u0275\u0275textInterpolate1"](" Crear ",s["\u0275\u0275pipeBind1"](18,4,"AJUSTES GRUPOS")," "))},directives:[p.a,r.IonContent,r.IonRow,r.IonCol,r.IonCard,r.RouterLinkDelegate,l.i,r.IonIcon,r.IonCardHeader,r.IonCardSubtitle],pipes:[i.TitleCasePipe],styles:[""]}),e})();var u=n("mrSG"),d=n("2Vo4"),g=n("TIcx"),S=n("EgAa"),f=n("PWdp"),v=n("Ezvo");let h=(()=>{class e{constructor(e,t,n,i,o){this.api=e,this.alert=t,this.toast=n,this.router=i,this.navigation=o,this.settingGroupsUrl="setting-groups",this.settingGroupsFormValid=new d.a(!1),this.settingGroups=[],this.settingGroup={},this.settingGroupLists={},this.searchValue="",this.perPage=10,this.meta=null,this.page=1,this.pagesContent=document.getElementById("pages-content")}getSettingGroups(e=this.page,t=this.perPage){this.api.get(this.settingGroupsUrl+"?page="+e+"&perPage="+t+"&q[name:cont]="+this.searchValue).subscribe(e=>{document.getElementById("pages-content").scrollToTop(300),this.settingGroups=e.data,this.settingGroupLists=e.lists,this.meta=e.meta},e=>{console.error(e)})}editSettingGroup(e){this.api.get(this.settingGroupsUrl+"/"+e+"/edit").subscribe(e=>{this.settingGroup=e.data.model,this.settingGroupLists=e.lists},e=>{console.error(e)})}updateSettingGroup(){this.api.put(this.settingGroupsUrl+"/"+this.settingGroup.id,{model:this.settingGroup,pivots:{}}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.navigation.back(),this.getSettingGroups(1)})}createSettingGroup(){this.api.get(this.settingGroupsUrl+"/create").subscribe(e=>{this.settingGroup={},this.settingGroupLists=e.lists})}storeSettingGroup(){this.api.post(this.settingGroupsUrl,{model:this.settingGroup,pivots:{}}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.navigation.back(),this.getSettingGroups(1)})}deleteSettingGroup(e){return Object(u.a)(this,void 0,void 0,(function*(){(yield this.alert.confirmation("Desea eliminar el item?"))&&this.api.delete(this.settingGroupsUrl+"/"+e,{}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.getSettingGroups(1)})}))}saveSettingGroup(){}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](g.a),s["\u0275\u0275inject"](S.a),s["\u0275\u0275inject"](f.a),s["\u0275\u0275inject"](l.h),s["\u0275\u0275inject"](v.a))},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var I=n("JmBq");const G=["settingGroupsForm"];function E(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",9),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]().$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function y(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,E,2,1,"div",8),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275nextContext"]();const n=s["\u0275\u0275reference"](1);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",null==n.form.controls.setting_ids?null:n.form.controls.setting_ids.hasError(e.type))}}function x(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",9),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]().$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function C(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,x,2,1,"div",8),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275nextContext"]();const n=s["\u0275\u0275reference"](1);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",null==n.form.controls.name?null:n.form.controls.name.hasError(e.type))}}function b(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",9),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]().$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function w(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,b,2,1,"div",8),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275nextContext"]();const n=s["\u0275\u0275reference"](1);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",null==n.form.controls.code?null:n.form.controls.code.hasError(e.type))}}let T=(()=>{class e{constructor(e,t){this.settingGroupsService=e,this.toTitlecase=t,this.model={},this.validationMessages={name:[{type:"required",message:"El campo "+this.toTitlecase.transform("NOMBRE")+" es obligatorio."}],code:[{type:"required",message:"El campo "+this.toTitlecase.transform("C\xd3DIGO")+" es obligatorio."}],setting_ids:[{type:"required",message:"El campo "+this.toTitlecase.transform("AJUSTES")+" es obligatorio."}]}}ngOnInit(){}ngAfterViewInit(){}setSettingIds(e){let t=null;if(e.value.length){t=[];for(let n=0;n<e.value.length;n++)t.push(e.value[n].id)}this.settingGroupsService.settingGroup.setting_ids=t}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](h),s["\u0275\u0275directiveInject"](i.TitleCasePipe))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-setting-groups-form"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275viewQuery"](G,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.settingGroupsForm=n.first)},inputs:{model:"model"},decls:25,vars:30,consts:[["novalidate","","autocomplete","off"],["settingGroupsForm","ngForm"],[1,"item-transparent"],["name","setting_ids","id","setting_ids-field","itemValueField","id","itemTextField","name",3,"ngModel","items","isMultiple","canClear","hasConfirmButton","confirmButtonText","searchPlaceholder","searchFailText","closeButtonText","clearButtonText","canSearch","ngModelChange","onChange"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["type","text","name","name","id","name-field","placeholder","",3,"ngModel","required","ngModelChange"],["type","text","name","code","id","code-field","placeholder","",3,"ngModel","ngModelChange"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"form",0,1),s["\u0275\u0275elementStart"](2,"ion-item",2),s["\u0275\u0275elementStart"](3,"ion-label"),s["\u0275\u0275text"](4),s["\u0275\u0275pipe"](5,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"ionic-selectable",3),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.settings=e}))("onChange",(function(e){return t.setSettingIds(e)})),s["\u0275\u0275pipe"](7,"titlecase"),s["\u0275\u0275pipe"](8,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"div",4),s["\u0275\u0275template"](10,y,2,1,"ng-container",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"ion-item",2),s["\u0275\u0275elementStart"](12,"ion-label"),s["\u0275\u0275text"](13),s["\u0275\u0275pipe"](14,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"ion-input",6),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.name=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](16,"div",4),s["\u0275\u0275template"](17,C,2,1,"ng-container",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](18,"ion-item",2),s["\u0275\u0275elementStart"](19,"ion-label"),s["\u0275\u0275text"](20),s["\u0275\u0275pipe"](21,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](22,"ion-input",7),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.code=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](23,"div",4),s["\u0275\u0275template"](24,w,2,1,"ng-container",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](4),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](5,20,"AJUSTES")),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngModel",t.model.settings)("items",t.settingGroupsService.settingGroupLists.Setting)("isMultiple",!0)("canClear",!0)("hasConfirmButton",!0)("confirmButtonText","Seleccionar")("searchPlaceholder","Buscar "+s["\u0275\u0275pipeBind1"](7,22,"AJUSTES"))("searchFailText","No se encontro "+s["\u0275\u0275pipeBind1"](8,24,"AJUSTES")+" que coincida!")("closeButtonText","Cancelar")("clearButtonText","Limpiar")("canSearch",!0),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("ngForOf",t.validationMessages.setting_ids),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](14,26,"NOMBRE")),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngModel",t.model.name)("required",!0),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngForOf",t.validationMessages.name),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](21,28,"C\xd3DIGO")),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngModel",t.model.code),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngForOf",t.validationMessages.code))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.NgForm,r.IonItem,r.IonLabel,I.a,o.NgControlStatus,o.NgModel,i.NgForOf,r.IonInput,r.TextValueAccessor,o.RequiredValidator,i.NgIf],pipes:[i.TitleCasePipe],styles:[""]}),e})();const B=["settingGroupForm"];function k(e,t){1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275text"](1,"Guardar"),s["\u0275\u0275elementContainerEnd"]())}let P=(()=>{class e{constructor(e,t,n,i){this.settingGroupsService=e,this.route=t,this.platform=n,this.splitPanel=i,this.id=null,this.model=null}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.settingGroupsService.editSettingGroup(this.id)}ionViewWillEnter(){this.splitPanel.show.next(!0)}ngAfterViewInit(){this.settingGroupForm.settingGroupsForm.valueChanges.subscribe(e=>{this.settingGroupsService.settingGroupsFormValid.next(this.settingGroupForm.settingGroupsForm.valid)})}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](h),s["\u0275\u0275directiveInject"](l.a),s["\u0275\u0275directiveInject"](r.Platform),s["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-setting-groups-edit"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275viewQuery"](B,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.settingGroupForm=n.first)},decls:15,vars:9,consts:[["slot","start"],[3,"text","icon"],["slot","primary"],["color","success","fill","clear",3,"disabled","click"],[4,"ngIf"],["slot","end","color","success","name","save-outline"],["fullscreen",""],[3,"model"],["settingGroupForm",""]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"ion-header"),s["\u0275\u0275elementStart"](1,"ion-toolbar"),s["\u0275\u0275elementStart"](2,"ion-buttons",0),s["\u0275\u0275element"](3,"ion-back-button",1),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"ion-buttons",2),s["\u0275\u0275elementStart"](5,"ion-button",3),s["\u0275\u0275listener"]("click",(function(){return t.settingGroupsService.updateSettingGroup()})),s["\u0275\u0275template"](6,k,2,0,"ng-container",4),s["\u0275\u0275element"](7,"ion-icon",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"ion-title"),s["\u0275\u0275text"](9),s["\u0275\u0275pipe"](10,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"ion-content",6),s["\u0275\u0275elementStart"](12,"ion-card"),s["\u0275\u0275element"](13,"app-setting-groups-form",7,8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("text","")("icon","arrow-back-outline"),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("disabled",!t.settingGroupsService.settingGroupsFormValid.value),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",!t.platform.is("mobile")),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate2"]("Editar ",s["\u0275\u0275pipeBind1"](10,7,"AJUSTES GRUPOS"),": ",null==t.settingGroupsService.settingGroup?null:t.settingGroupsService.settingGroup.name,""),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("model",t.settingGroupsService.settingGroup))},directives:[r.IonHeader,r.IonToolbar,r.IonButtons,r.IonBackButton,r.IonBackButtonDelegate,r.IonButton,i.NgIf,r.IonIcon,r.IonTitle,r.IonContent,r.IonCard,T],pipes:[i.TitleCasePipe],styles:[""]}),e})();const F=["settingGroupForm"];function M(e,t){1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275text"](1,"Guardar"),s["\u0275\u0275elementContainerEnd"]())}let O=(()=>{class e{constructor(e,t,n,i){this.settingGroupsService=e,this.route=t,this.platform=n,this.splitPanel=i,this.id=null,this.formValid=!1}ngOnInit(){this.clearPosts()}ionViewWillEnter(){this.splitPanel.show.next(!0)}ngAfterViewInit(){this.settingGroupForm.settingGroupsForm.valueChanges.subscribe(e=>{this.settingGroupsService.settingGroupsFormValid.next(this.settingGroupForm.settingGroupsForm.valid)})}clearPosts(){console.log("clear"),this.settingGroupsService.createSettingGroup(),this.settingGroupsService.settingGroup={}}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](h),s["\u0275\u0275directiveInject"](l.a),s["\u0275\u0275directiveInject"](r.Platform),s["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-setting-groups-create"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275viewQuery"](F,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.settingGroupForm=n.first)},decls:15,vars:8,consts:[["slot","start"],[3,"text","icon"],["slot","primary"],["color","success","fill","clear",3,"disabled","click"],[4,"ngIf"],["slot","end","color","success","name","save-outline"],["fullscreen",""],[3,"model"],["settingGroupForm",""]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"ion-header"),s["\u0275\u0275elementStart"](1,"ion-toolbar"),s["\u0275\u0275elementStart"](2,"ion-buttons",0),s["\u0275\u0275element"](3,"ion-back-button",1),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"ion-buttons",2),s["\u0275\u0275elementStart"](5,"ion-button",3),s["\u0275\u0275listener"]("click",(function(){return t.settingGroupsService.storeSettingGroup()})),s["\u0275\u0275template"](6,M,2,0,"ng-container",4),s["\u0275\u0275element"](7,"ion-icon",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"ion-title"),s["\u0275\u0275text"](9),s["\u0275\u0275pipe"](10,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"ion-content",6),s["\u0275\u0275elementStart"](12,"ion-card"),s["\u0275\u0275element"](13,"app-setting-groups-form",7,8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("text","")("icon","arrow-back-outline"),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("disabled",!t.settingGroupsService.settingGroupsFormValid.value),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",!t.platform.is("mobile")),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"]("Crear ",s["\u0275\u0275pipeBind1"](10,6,"AJUSTES GRUPOS"),""),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("model",t.settingGroupsService.settingGroup))},directives:[r.IonHeader,r.IonToolbar,r.IonButtons,r.IonBackButton,r.IonBackButtonDelegate,r.IonButton,i.NgIf,r.IonIcon,r.IonTitle,r.IonContent,r.IonCard,T],pipes:[i.TitleCasePipe],styles:[""]}),e})();var L=n("fYRX");function U(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"span"),s["\u0275\u0275text"](1,", "),s["\u0275\u0275elementEnd"]())}function V(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275elementStart"](1,"a",14),s["\u0275\u0275text"](2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](3,U,2,0,"span",3),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit,n=t.last;s["\u0275\u0275advance"](1),s["\u0275\u0275propertyInterpolate1"]("routerLink","/settings/",null==e?null:e.id,"/edit"),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](null==e?null:e.name),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",!n)}}function j(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,V,4,3,"ng-container",5),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]().$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",null==e?null:e.settings)}}function N(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"ion-card"),s["\u0275\u0275elementStart"](1,"ion-list"),s["\u0275\u0275elementStart"](2,"ion-item",6),s["\u0275\u0275elementStart"](3,"ion-label",7),s["\u0275\u0275elementStart"](4,"b"),s["\u0275\u0275text"](5),s["\u0275\u0275pipe"](6,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"div",8),s["\u0275\u0275text"](8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"ion-item",6),s["\u0275\u0275elementStart"](10,"ion-label",7),s["\u0275\u0275elementStart"](11,"b"),s["\u0275\u0275text"](12),s["\u0275\u0275pipe"](13,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](14,"div",8),s["\u0275\u0275text"](15),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](16,"ion-item",6),s["\u0275\u0275elementStart"](17,"ion-label",7),s["\u0275\u0275elementStart"](18,"b"),s["\u0275\u0275text"](19),s["\u0275\u0275pipe"](20,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](21,"div",8),s["\u0275\u0275template"](22,j,2,1,"ng-container",3),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](23,"ion-footer"),s["\u0275\u0275elementStart"](24,"ion-row"),s["\u0275\u0275elementStart"](25,"ion-col",9),s["\u0275\u0275elementStart"](26,"ion-button",10),s["\u0275\u0275element"](27,"ion-icon",11),s["\u0275\u0275elementStart"](28,"div"),s["\u0275\u0275text"](29,"Editar"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](30,"ion-col",9),s["\u0275\u0275elementStart"](31,"ion-button",12),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](e);const n=t.$implicit;return s["\u0275\u0275nextContext"](2).settingGroupsService.deleteSettingGroup(null==n?null:n.id)})),s["\u0275\u0275element"](32,"ion-icon",13),s["\u0275\u0275elementStart"](33,"div"),s["\u0275\u0275text"](34,"Eliminar"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](6,7,"NOMBRE")),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](null==e?null:e.name),s["\u0275\u0275advance"](4),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](13,9,"C\xd3DIGO")),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](null==e?null:e.code),s["\u0275\u0275advance"](4),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](20,11,"AJUSTES")),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngIf",null==e||null==e.settings?null:e.settings.length),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("routerLink","/setting-groups/"+(null==e?null:e.id)+"/edit")}}function R(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,N,35,13,"ion-card",5),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",e.settingGroupsService.settingGroups)}}function A(e,t){1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275elementStart"](1,"ion-item"),s["\u0275\u0275element"](2,"ion-icon",15),s["\u0275\u0275elementStart"](3,"ion-label"),s["\u0275\u0275elementStart"](4,"h2"),s["\u0275\u0275text"](5),s["\u0275\u0275pipe"](6,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"ion-button",16),s["\u0275\u0275text"](8),s["\u0275\u0275pipe"](9,"titlecase"),s["\u0275\u0275element"](10,"ion-icon",17),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementContainerEnd"]()),2&e&&(s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate1"]("No se encontraron ",s["\u0275\u0275pipeBind1"](6,3,"AJUSTES GRUPOS"),""),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("routerLink","/setting-groups/create"),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" Crear ",s["\u0275\u0275pipeBind1"](9,5,"AJUSTES GRUPOS")," "))}function J(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"ion-row"),s["\u0275\u0275elementStart"](1,"ion-col",18),s["\u0275\u0275elementStart"](2,"ion-button",19),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](e);const t=s["\u0275\u0275nextContext"]();return t.settingGroupsService.getSettingGroups(t.settingGroupsService.meta.current_page-1)})),s["\u0275\u0275element"](3,"ion-icon",20),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"ion-button",21),s["\u0275\u0275text"](5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"ion-button",19),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](e);const t=s["\u0275\u0275nextContext"]();return t.settingGroupsService.getSettingGroups(t.settingGroupsService.meta.current_page+1)})),s["\u0275\u0275element"](7,"ion-icon",22),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("disabled",1==e.settingGroupsService.meta.current_page),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("disabled",!0),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate5"](" Pag: ",e.settingGroupsService.meta.current_page," /",e.settingGroupsService.meta.last_page," ",e.settingGroupsService.meta.from,"-",e.settingGroupsService.meta.to," /",e.settingGroupsService.meta.total," "),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("disabled",e.settingGroupsService.meta.current_page==e.settingGroupsService.meta.last_page)}}const _=[{path:"",component:m},{path:"list",component:(()=>{class e{constructor(e,t,n,i){this.settingGroupsService=e,this.api=t,this.loading=n,this.splitPanel=i}ngOnInit(){this.settingGroupsService.getSettingGroups()}ionViewWillEnter(){this.splitPanel.show.next(!0)}scrollToTop(){this.content.scrollToTop(300)}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](h),s["\u0275\u0275directiveInject"](g.a),s["\u0275\u0275directiveInject"](L.a),s["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-setting-groups-list"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275viewQuery"](r.IonContent,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.content=n.first)},decls:12,vars:18,consts:[["primaryLink","setting-groups/create","primaryIcon","add-circle-outline",3,"title","primaryText"],["id","pages-content"],["showCancelButton","focus",3,"cancelButtonText","placeholder","ngModel","ionCancel","keyup.enter","ngModelChange"],[4,"ngIf"],[1,"lists-footer"],[4,"ngFor","ngForOf"],[1,"item-transparent"],["position","fixed"],[1,"wrap-text"],[1,"ion-text-center"],["color","success","size","small","fill","clear",3,"routerLink"],["name","create-outline"],["color","danger","size","small","fill","clear",3,"click"],["name","trash-outline"],[3,"routerLink"],["name","warning-outline","slot","start",1,"text-warning"],["fill","outline","color","success","slot","end",3,"routerLink"],["name","add-circle-outline","slot","end"],["size","12",1,"ion-text-center"],["fill","clear",3,"disabled","click"],["slot","end","name","play-outline",2,"transform","rotate(180deg)"],["fill","clear",3,"disabled"],["slot","start","name","play-outline"]],template:function(e,t){1&e&&(s["\u0275\u0275element"](0,"app-main-header",0),s["\u0275\u0275pipe"](1,"titlecase"),s["\u0275\u0275pipe"](2,"lowercase"),s["\u0275\u0275elementStart"](3,"ion-content",1),s["\u0275\u0275elementStart"](4,"ion-searchbar",2),s["\u0275\u0275listener"]("ionCancel",(function(){return t.settingGroupsService.searchValue="",t.settingGroupsService.getSettingGroups()}))("keyup.enter",(function(){return t.settingGroupsService.getSettingGroups()}))("ngModelChange",(function(e){return t.settingGroupsService.searchValue=e})),s["\u0275\u0275pipe"](5,"lowercase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](6,R,2,1,"ng-container",3),s["\u0275\u0275pipe"](7,"async"),s["\u0275\u0275template"](8,A,11,7,"ng-container",3),s["\u0275\u0275pipe"](9,"async"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"ion-footer",4),s["\u0275\u0275template"](11,J,8,8,"ion-row",3),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275propertyInterpolate"]("title",s["\u0275\u0275pipeBind1"](1,8,"AJUSTES GRUPOS")),s["\u0275\u0275propertyInterpolate1"]("primaryText","Crear ",s["\u0275\u0275pipeBind1"](2,10,"AJUSTES GRUPOS"),""),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("cancelButtonText","Cancelar")("placeholder","Buscar "+s["\u0275\u0275pipeBind1"](5,12,"AJUSTES GRUPOS"))("ngModel",t.settingGroupsService.searchValue),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",!s["\u0275\u0275pipeBind1"](7,14,t.loading.loading)&&(null==t.settingGroupsService.settingGroups?null:t.settingGroupsService.settingGroups.length)),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",!(s["\u0275\u0275pipeBind1"](9,16,t.loading.loading)||null!=t.settingGroupsService.settingGroups&&t.settingGroupsService.settingGroups.length)),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngIf",t.settingGroupsService.meta))},directives:[p.a,r.IonContent,r.IonSearchbar,r.TextValueAccessor,o.NgControlStatus,o.NgModel,i.NgIf,r.IonFooter,i.NgForOf,r.IonCard,r.IonList,r.IonItem,r.IonLabel,r.IonRow,r.IonCol,r.IonButton,r.RouterLinkDelegate,l.i,r.IonIcon,l.k],pipes:[i.TitleCasePipe,i.LowerCasePipe,i.AsyncPipe],styles:[""]}),e})()},{path:"create",component:O},{path:":id/edit",component:P}];let q=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.l.forChild(_)],l.l]}),e})(),Q=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.CommonModule,o.FormsModule,r.IonicModule,a.a,q]]}),e})()},yvdN:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n("fXoL"),o=n("TEn/"),r=n("1HhC"),a=n("ofXK"),l=n("tyNb");function s(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"ion-buttons",4),i["\u0275\u0275elementStart"](1,"ion-menu-toggle",5),i["\u0275\u0275elementStart"](2,"ion-button",6),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().toggleMenu()})),i["\u0275\u0275element"](3,"ion-icon",7),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}}function c(e,t){if(1&e&&(i["\u0275\u0275elementContainerStart"](0),i["\u0275\u0275text"](1),i["\u0275\u0275elementContainerEnd"]()),2&e){const e=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](e.primaryText)}}function p(e,t){if(1&e&&i["\u0275\u0275element"](0,"ion-icon",11),2&e){const e=i["\u0275\u0275nextContext"](2);i["\u0275\u0275property"]("name",e.primaryIcon)}}function m(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"ion-buttons",8),i["\u0275\u0275elementStart"](1,"ion-button",9),i["\u0275\u0275template"](2,c,2,1,"ng-container",3),i["\u0275\u0275template"](3,p,1,1,"ion-icon",10),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("routerLink","/"+e.primaryLink),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",e.primaryText&&!e.platform.is("mobile")),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",e.primaryIcon)}}function u(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"ion-title"),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](e.title)}}let d=(()=>{class e{constructor(e,t){this.platform=e,this.splitPanel=t,this.title="",this.primaryLink="",this.primaryIcon="",this.primaryText="",this.showSplitPanelButton=!0}ngOnInit(){this.splitPanel.show.subscribe(e=>{})}toggleMenu(){const e=document.querySelector("ion-split-pane"),t="(min-width: 992px)";if(!(window.innerWidth>=992))return e.querySelector("ion-menu").open();e.when=!(e.when===t)&&t}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](o.Platform),i["\u0275\u0275directiveInject"](r.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-main-header"]],inputs:{title:"title",primaryLink:"primaryLink",primaryIcon:"primaryIcon",primaryText:"primaryText",showSplitPanelButton:"showSplitPanelButton"},decls:5,vars:4,consts:[[3,"translucent"],["slot","start",4,"ngIf"],["slot","primary",4,"ngIf"],[4,"ngIf"],["slot","start"],["auto-hide","false","menu","main-menu"],[3,"click"],["slot","icon-only","name","menu"],["slot","primary"],["color","success",3,"routerLink"],["slot","end",3,"name",4,"ngIf"],["slot","end",3,"name"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"ion-header",0),i["\u0275\u0275elementStart"](1,"ion-toolbar"),i["\u0275\u0275template"](2,s,4,0,"ion-buttons",1),i["\u0275\u0275template"](3,m,4,3,"ion-buttons",2),i["\u0275\u0275template"](4,u,2,1,"ion-title",3),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275property"]("translucent",!0),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",t.splitPanel.show.value),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.primaryLink),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.title))},directives:[o.IonHeader,o.IonToolbar,a.NgIf,o.IonButtons,o.IonMenuToggle,o.IonButton,o.IonIcon,l.i,o.RouterLinkDelegate,o.IonTitle],styles:[""]}),e})()}}]);