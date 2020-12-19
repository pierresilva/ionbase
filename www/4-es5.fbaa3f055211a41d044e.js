!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"7wo0":function(t,i,r){"use strict";r.r(i),r.d(i,"SettingsPageModule",(function(){return ae}));var a,o,l=r("ofXK"),s=r("3Pt+"),c=r("TEn/"),m=r("pk6O"),d=r("tyNb"),p=r("fXoL"),u=r("1HhC"),g=r("yvdN"),v=((a=function(){function t(n){e(this,t),this.splitPanel=n}return n(t,[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){this.splitPanel.show.next(!0)}}]),t}()).\u0275fac=function(e){return new(e||a)(p["\u0275\u0275directiveInject"](u.a))},a.\u0275cmp=p["\u0275\u0275defineComponent"]({type:a,selectors:[["app-settings"]],decls:19,vars:6,consts:[["title","AJUSTES"],["size-md","3","size-sm","6","size-xs","12"],["routerLink","/settings/list"],[2,"height","120px","width","100%","display","flex","align-items","center","justify-content","center"],["name","list-circle-outline","color","primary",1,"icon-m"],[1,"ion-text-center"],["routerLink","/settings/create"],["name","add-circle-outline","color","success",1,"icon-m"]],template:function(e,t){1&e&&(p["\u0275\u0275element"](0,"app-main-header",0),p["\u0275\u0275elementStart"](1,"ion-content"),p["\u0275\u0275elementStart"](2,"ion-row"),p["\u0275\u0275elementStart"](3,"ion-col",1),p["\u0275\u0275elementStart"](4,"ion-card",2),p["\u0275\u0275elementStart"](5,"div",3),p["\u0275\u0275element"](6,"ion-icon",4),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"ion-card-header"),p["\u0275\u0275elementStart"](8,"ion-card-subtitle",5),p["\u0275\u0275text"](9),p["\u0275\u0275pipe"](10,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](11,"ion-col",1),p["\u0275\u0275elementStart"](12,"ion-card",6),p["\u0275\u0275elementStart"](13,"div",3),p["\u0275\u0275element"](14,"ion-icon",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](15,"ion-card-header"),p["\u0275\u0275elementStart"](16,"ion-card-subtitle",5),p["\u0275\u0275text"](17),p["\u0275\u0275pipe"](18,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](9),p["\u0275\u0275textInterpolate1"](" Listar ",p["\u0275\u0275pipeBind1"](10,2,"AJUSTES")," "),p["\u0275\u0275advance"](8),p["\u0275\u0275textInterpolate1"](" Crear ",p["\u0275\u0275pipeBind1"](18,4,"AJUSTES")," "))},directives:[g.a,c.q,c.Q,c.p,c.i,c.ob,d.i,c.x,c.k,c.l],pipes:[l.s],styles:[""]}),a),f=r("mrSG"),S=r("2Vo4"),h=r("TIcx"),x=r("EgAa"),y=r("PWdp"),E=r("Ezvo"),b=((o=function(){function t(n,i,r,a,o){e(this,t),this.api=n,this.alert=i,this.toast=r,this.router=a,this.navigation=o,this.settingsUrl="settings",this.settingsFormValid=new S.a(!1),this.settings=[],this.setting={},this.settingLists={},this.searchValue="",this.perPage=10,this.meta=null,this.page=1,this.pagesContent=document.getElementById("pages-content")}return n(t,[{key:"getSettings",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.page,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.perPage;this.api.get(this.settingsUrl+"?page="+t+"&perPage="+n+"&q[name:cont]="+this.searchValue).subscribe((function(t){document.getElementById("pages-content").scrollToTop(300),e.settings=t.data,e.settingLists=t.lists,e.meta=t.meta}),(function(e){console.error(e)}))}},{key:"editSetting",value:function(e){var t=this;this.api.get(this.settingsUrl+"/"+e+"/edit").subscribe((function(e){t.setting=e.data.model,t.settingLists=e.lists}),(function(e){console.error(e)}))}},{key:"updateSetting",value:function(){var e=this;this.api.put(this.settingsUrl+"/"+this.setting.id,{model:this.setting,pivots:{}}).subscribe((function(t){e.toast.present(t.message,"toast-success","top"),e.navigation.back(),e.getSettings(1)}))}},{key:"createSetting",value:function(){var e=this;this.api.get(this.settingsUrl+"/create").subscribe((function(t){e.setting={},e.settingLists=t.lists}))}},{key:"storeSetting",value:function(){var e=this;this.api.post(this.settingsUrl,{model:this.setting,pivots:{}}).subscribe((function(t){e.toast.present(t.message,"toast-success","top"),e.navigation.back(),e.getSettings(1)}))}},{key:"deleteSetting",value:function(e){return Object(f.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alert.confirmation("Desea eliminar el item?");case 2:if(t.t0=t.sent,!t.t0){t.next=5;break}this.api.delete(this.settingsUrl+"/"+e,{}).subscribe((function(e){n.toast.present(e.message,"toast-success","top"),n.getSettings(1)}));case 5:case"end":return t.stop()}}),t,this)})))}},{key:"saveSetting",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||o)(p["\u0275\u0275inject"](h.a),p["\u0275\u0275inject"](x.a),p["\u0275\u0275inject"](y.a),p["\u0275\u0275inject"](d.h),p["\u0275\u0275inject"](E.a))},o.\u0275prov=p["\u0275\u0275defineInjectable"]({token:o,factory:o.\u0275fac,providedIn:"root"}),o),I=r("JmBq"),C=r("kJkI"),w=["settingsForm"];function k(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",11),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]().$implicit;p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",n.message," ")}}function T(e,t){if(1&e&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275template"](1,k,2,1,"div",10),p["\u0275\u0275elementContainerEnd"]()),2&e){var n=t.$implicit;p["\u0275\u0275nextContext"]();var i=p["\u0275\u0275reference"](1);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",null==i.form.controls.setting_group_id?null:i.form.controls.setting_group_id.hasError(n.type))}}function B(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",11),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]().$implicit;p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",n.message," ")}}function M(e,t){if(1&e&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275template"](1,B,2,1,"div",10),p["\u0275\u0275elementContainerEnd"]()),2&e){var n=t.$implicit;p["\u0275\u0275nextContext"]();var i=p["\u0275\u0275reference"](1);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",null==i.form.controls.name?null:i.form.controls.name.hasError(n.type))}}function F(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",11),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]().$implicit;p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",n.message," ")}}function V(e,t){if(1&e&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275template"](1,F,2,1,"div",10),p["\u0275\u0275elementContainerEnd"]()),2&e){var n=t.$implicit;p["\u0275\u0275nextContext"]();var i=p["\u0275\u0275reference"](1);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",null==i.form.controls.code?null:i.form.controls.code.hasError(n.type))}}function _(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"ion-item",2),p["\u0275\u0275elementStart"](1,"ion-label",12),p["\u0275\u0275text"](2),p["\u0275\u0275pipe"](3,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"input",13),p["\u0275\u0275listener"]("ngModelChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().model.value=e})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()}if(2&e){var i=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](2),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](3,3,"VALOR")),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("required",!0)("ngModel",i.model.value)}}function O(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",11),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]().$implicit;p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",n.message," ")}}function j(e,t){if(1&e&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275template"](1,O,2,1,"div",10),p["\u0275\u0275elementContainerEnd"]()),2&e){var n=t.$implicit;p["\u0275\u0275nextContext"]();var i=p["\u0275\u0275reference"](1);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",null==i.form.controls.value?null:i.form.controls.value.hasError(n.type))}}function q(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"ion-item",2),p["\u0275\u0275elementStart"](1,"ion-label",12),p["\u0275\u0275text"](2),p["\u0275\u0275pipe"](3,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"ion-textarea",14),p["\u0275\u0275listener"]("ngModelChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().model.value=e})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()}if(2&e){var i=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](2),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](3,3,"VALOR")),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngModel",i.model.value)("required",!0)}}function P(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",11),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]().$implicit;p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",n.message," ")}}function L(e,t){if(1&e&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275template"](1,P,2,1,"div",10),p["\u0275\u0275elementContainerEnd"]()),2&e){var n=t.$implicit;p["\u0275\u0275nextContext"]();var i=p["\u0275\u0275reference"](1);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",null==i.form.controls.value?null:i.form.controls.value.hasError(n.type))}}var U,R=((U=function(){function t(n,i){e(this,t),this.settingsService=n,this.toTitlecase=i,this.model={},this.validationMessages={name:[{type:"required",message:"El campo "+this.toTitlecase.transform("NOMBRE")+" es obligatorio."}],code:[{type:"required",message:"El campo "+this.toTitlecase.transform("C\xd3DIGO")+" es obligatorio."}],value:[{type:"required",message:"El campo "+this.toTitlecase.transform("VALOR")+" es obligatorio."}],rich_text:[{type:"required",message:"El campo "+this.toTitlecase.transform("TEXTO ENRIQUECIDO")+" es obligatorio."}],setting_group_id:[{type:"required",message:"El campo "+this.toTitlecase.transform("GRUPO")+" es obligatorio."}]}}return n(t,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){}},{key:"setSettingGroupId",value:function(e){this.settingsService.setting.setting_group_id=e.value?e.value.id:null}}]),t}()).\u0275fac=function(e){return new(e||U)(p["\u0275\u0275directiveInject"](b),p["\u0275\u0275directiveInject"](l.s))},U.\u0275cmp=p["\u0275\u0275defineComponent"]({type:U,selectors:[["app-settings-form"]],viewQuery:function(e,t){var n;1&e&&p["\u0275\u0275viewQuery"](w,!0),2&e&&p["\u0275\u0275queryRefresh"](n=p["\u0275\u0275loadQuery"]())&&(t.settingsForm=n.first)},inputs:{model:"model"},decls:36,vars:39,consts:[["novalidate","","autocomplete","off"],["settingsForm","ngForm"],[1,"item-transparent"],["name","setting_group_id","id","setting_group_id-field","itemValueField","id","itemTextField","name",3,"required","ngModel","items","canClear","hasConfirmButton","confirmButtonText","searchPlaceholder","searchFailText","closeButtonText","clearButtonText","canSearch","ngModelChange","onChange"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["type","text","name","name","id","name-field","placeholder","",3,"ngModel","required","ngModelChange"],["type","text","name","code","id","code-field","placeholder","",3,"ngModel","readonly","ngModelChange"],["name","main","id","main-field","slot","end",3,"ngModel","ngModelChange"],["class","item-transparent",4,"ngIf"],["class","error-message",4,"ngIf"],[1,"error-message"],["position","stacked",2,"font-size","1rem"],["name","value","id","value-field",3,"ngxSummernote","required","ngModel","ngModelChange"],["name","value","id","value-field","rows","6","placeholder","",3,"ngModel","required","ngModelChange"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"form",0,1),p["\u0275\u0275elementStart"](2,"ion-item",2),p["\u0275\u0275elementStart"](3,"ion-label"),p["\u0275\u0275text"](4),p["\u0275\u0275pipe"](5,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"ionic-selectable",3),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.setting_group=e}))("onChange",(function(e){return t.setSettingGroupId(e)})),p["\u0275\u0275pipe"](7,"titlecase"),p["\u0275\u0275pipe"](8,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](9,"div",4),p["\u0275\u0275template"](10,T,2,1,"ng-container",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](11,"ion-item",2),p["\u0275\u0275elementStart"](12,"ion-label"),p["\u0275\u0275text"](13),p["\u0275\u0275pipe"](14,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](15,"ion-input",6),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.name=e})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](16,"div",4),p["\u0275\u0275template"](17,M,2,1,"ng-container",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](18,"ion-item",2),p["\u0275\u0275elementStart"](19,"ion-label"),p["\u0275\u0275text"](20),p["\u0275\u0275pipe"](21,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](22,"ion-input",7),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.code=e})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](23,"div",4),p["\u0275\u0275template"](24,V,2,1,"ng-container",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](25,"ion-item",2),p["\u0275\u0275elementStart"](26,"ion-label"),p["\u0275\u0275text"](27),p["\u0275\u0275pipe"](28,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](29,"ion-toggle",8),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.rich_text=e})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](30,_,5,5,"ion-item",9),p["\u0275\u0275elementStart"](31,"div",4),p["\u0275\u0275template"](32,j,2,1,"ng-container",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](33,q,5,5,"ion-item",9),p["\u0275\u0275elementStart"](34,"div",4),p["\u0275\u0275template"](35,L,2,1,"ng-container",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](4),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](5,27,"GRUPO")),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("required",!0)("ngModel",t.model.setting_group)("items",t.settingsService.settingLists.SettingGroup)("canClear",!0)("hasConfirmButton",!0)("confirmButtonText","Seleccionar")("searchPlaceholder","Buscar "+p["\u0275\u0275pipeBind1"](7,29,"GRUPOS"))("searchFailText","No se encontro "+p["\u0275\u0275pipeBind1"](8,31,"GRUPOS")+" que coincida!")("closeButtonText","Cancelar")("clearButtonText","Limpiar")("canSearch",!0),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("ngForOf",t.validationMessages.setting_group_id),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](14,33,"NOMBRE")),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngModel",t.model.name)("required",!0),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngForOf",t.validationMessages.name),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](21,35,"C\xd3DIGO")),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngModel",t.model.code)("readonly",!0),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngForOf",t.validationMessages.code),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](28,37,"Texto enriquecido")),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngModel",t.model.rich_text),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",t.model.rich_text),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngForOf",t.validationMessages.value),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",!t.model.rich_text),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngForOf",t.validationMessages.value))},directives:[s["\u0275angular_packages_forms_forms_y"],s.NgControlStatusGroup,s.NgForm,c.C,c.I,I.a,s.RequiredValidator,s.NgControlStatus,s.NgModel,l.l,c.B,c.qb,c.eb,c.b,l.m,s.DefaultValueAccessor,C.a,c.bb],pipes:[l.s],styles:[""]}),U),A=["settingForm"];function N(e,t){1&e&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275text"](1,"Guardar"),p["\u0275\u0275elementContainerEnd"]())}var G,J=((G=function(){function t(n,i,r,a){e(this,t),this.settingsService=n,this.route=i,this.platform=r,this.splitPanel=a,this.id=null,this.model=null}return n(t,[{key:"ngOnInit",value:function(){this.id=this.route.snapshot.paramMap.get("id"),this.settingsService.editSetting(this.id)}},{key:"ionViewWillEnter",value:function(){this.splitPanel.show.next(!0)}},{key:"ngAfterViewInit",value:function(){var e=this;this.settingForm.settingsForm.valueChanges.subscribe((function(t){e.settingsService.settingsFormValid.next(e.settingForm.settingsForm.valid)}))}}]),t}()).\u0275fac=function(e){return new(e||G)(p["\u0275\u0275directiveInject"](b),p["\u0275\u0275directiveInject"](d.a),p["\u0275\u0275directiveInject"](c.nb),p["\u0275\u0275directiveInject"](u.a))},G.\u0275cmp=p["\u0275\u0275defineComponent"]({type:G,selectors:[["app-settings-edit"]],viewQuery:function(e,t){var n;1&e&&p["\u0275\u0275viewQuery"](A,!0),2&e&&p["\u0275\u0275queryRefresh"](n=p["\u0275\u0275loadQuery"]())&&(t.settingForm=n.first)},decls:15,vars:9,consts:[["slot","start"],[3,"text","icon"],["slot","primary"],["color","success","fill","clear",3,"disabled","click"],[4,"ngIf"],["slot","end","color","success","name","save-outline"],["fullscreen",""],[3,"model"],["settingForm",""]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"ion-header"),p["\u0275\u0275elementStart"](1,"ion-toolbar"),p["\u0275\u0275elementStart"](2,"ion-buttons",0),p["\u0275\u0275element"](3,"ion-back-button",1),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"ion-buttons",2),p["\u0275\u0275elementStart"](5,"ion-button",3),p["\u0275\u0275listener"]("click",(function(){return t.settingsService.updateSetting()})),p["\u0275\u0275template"](6,N,2,0,"ng-container",4),p["\u0275\u0275element"](7,"ion-icon",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](8,"ion-title"),p["\u0275\u0275text"](9),p["\u0275\u0275pipe"](10,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](11,"ion-content",6),p["\u0275\u0275elementStart"](12,"ion-card"),p["\u0275\u0275element"](13,"app-settings-form",7,8),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("text","")("icon","arrow-back-outline"),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("disabled",!t.settingsService.settingsFormValid.value),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",!t.platform.is("mobile")),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate2"]("Editar ",p["\u0275\u0275pipeBind1"](10,7,"AJUSTES"),": ",null==t.settingsService.setting?null:t.settingsService.setting.name,""),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("model",t.settingsService.setting))},directives:[c.w,c.fb,c.h,c.e,c.f,c.g,l.m,c.x,c.db,c.q,c.i,R],pipes:[l.s],styles:[""]}),G),Q=["settingForm"];function $(e,t){1&e&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275text"](1,"Guardar"),p["\u0275\u0275elementContainerEnd"]())}var z,D=((z=function(){function t(n,i,r,a){e(this,t),this.settingsService=n,this.route=i,this.platform=r,this.splitPanel=a,this.id=null,this.formValid=!1}return n(t,[{key:"ngOnInit",value:function(){this.clearPosts()}},{key:"ionViewWillEnter",value:function(){this.splitPanel.show.next(!0)}},{key:"ngAfterViewInit",value:function(){var e=this;this.settingForm.settingsForm.valueChanges.subscribe((function(t){e.settingsService.settingsFormValid.next(e.settingForm.settingsForm.valid)}))}},{key:"clearPosts",value:function(){console.log("clear"),this.settingsService.createSetting(),this.settingsService.setting={}}}]),t}()).\u0275fac=function(e){return new(e||z)(p["\u0275\u0275directiveInject"](b),p["\u0275\u0275directiveInject"](d.a),p["\u0275\u0275directiveInject"](c.nb),p["\u0275\u0275directiveInject"](u.a))},z.\u0275cmp=p["\u0275\u0275defineComponent"]({type:z,selectors:[["app-settings-create"]],viewQuery:function(e,t){var n;1&e&&p["\u0275\u0275viewQuery"](Q,!0),2&e&&p["\u0275\u0275queryRefresh"](n=p["\u0275\u0275loadQuery"]())&&(t.settingForm=n.first)},decls:15,vars:8,consts:[["slot","start"],[3,"text","icon"],["slot","primary"],["color","success","fill","clear",3,"disabled","click"],[4,"ngIf"],["slot","end","color","success","name","save-outline"],["fullscreen",""],[3,"model"],["settingForm",""]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"ion-header"),p["\u0275\u0275elementStart"](1,"ion-toolbar"),p["\u0275\u0275elementStart"](2,"ion-buttons",0),p["\u0275\u0275element"](3,"ion-back-button",1),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"ion-buttons",2),p["\u0275\u0275elementStart"](5,"ion-button",3),p["\u0275\u0275listener"]("click",(function(){return t.settingsService.storeSetting()})),p["\u0275\u0275template"](6,$,2,0,"ng-container",4),p["\u0275\u0275element"](7,"ion-icon",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](8,"ion-title"),p["\u0275\u0275text"](9),p["\u0275\u0275pipe"](10,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](11,"ion-content",6),p["\u0275\u0275elementStart"](12,"ion-card"),p["\u0275\u0275element"](13,"app-settings-form",7,8),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("text","")("icon","arrow-back-outline"),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("disabled",!t.settingsService.settingsFormValid.value),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",!t.platform.is("mobile")),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate1"]("Crear ",p["\u0275\u0275pipeBind1"](10,6,"AJUSTES"),""),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("model",t.settingsService.setting))},directives:[c.w,c.fb,c.h,c.e,c.f,c.g,l.m,c.x,c.db,c.q,c.i,R],pipes:[l.s],styles:[""]}),z),W=r("fYRX"),X=r("aGrO");function H(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"ion-card"),p["\u0275\u0275elementStart"](1,"ion-list"),p["\u0275\u0275elementStart"](2,"ion-item",6),p["\u0275\u0275elementStart"](3,"ion-label",7),p["\u0275\u0275elementStart"](4,"b"),p["\u0275\u0275text"](5),p["\u0275\u0275pipe"](6,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"div",8),p["\u0275\u0275text"](8),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](9,"ion-item",6),p["\u0275\u0275elementStart"](10,"ion-label",7),p["\u0275\u0275elementStart"](11,"b"),p["\u0275\u0275text"](12),p["\u0275\u0275pipe"](13,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](14,"div",8),p["\u0275\u0275text"](15),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](16,"ion-item",6),p["\u0275\u0275elementStart"](17,"ion-label",7),p["\u0275\u0275elementStart"](18,"b"),p["\u0275\u0275text"](19),p["\u0275\u0275pipe"](20,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](21,"div",8),p["\u0275\u0275text"](22),p["\u0275\u0275pipe"](23,"stripHtml"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](24,"ion-item",6),p["\u0275\u0275elementStart"](25,"ion-label",7),p["\u0275\u0275elementStart"](26,"b"),p["\u0275\u0275text"](27),p["\u0275\u0275pipe"](28,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](29,"div",8),p["\u0275\u0275elementStart"](30,"a",9),p["\u0275\u0275text"](31),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](32,"ion-footer"),p["\u0275\u0275elementStart"](33,"ion-row"),p["\u0275\u0275elementStart"](34,"ion-col",10),p["\u0275\u0275elementStart"](35,"ion-button",11),p["\u0275\u0275element"](36,"ion-icon",12),p["\u0275\u0275elementStart"](37,"div"),p["\u0275\u0275text"](38,"Editar"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](39,"ion-col",10),p["\u0275\u0275elementStart"](40,"ion-button",13),p["\u0275\u0275listener"]("click",(function(){p["\u0275\u0275restoreView"](n);var e=t.$implicit;return p["\u0275\u0275nextContext"](2).settingsService.deleteSetting(null==e?null:e.id)})),p["\u0275\u0275element"](41,"ion-icon",14),p["\u0275\u0275elementStart"](42,"div"),p["\u0275\u0275text"](43,"Eliminar"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()}if(2&e){var i=t.$implicit;p["\u0275\u0275advance"](5),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](6,10,"NOMBRE")),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](null==i?null:i.name),p["\u0275\u0275advance"](4),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](13,12,"C\xd3DIGO")),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](null==i?null:i.code),p["\u0275\u0275advance"](4),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](20,14,"VALOR")),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](23,16,null==i?null:i.value)),p["\u0275\u0275advance"](5),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](28,18,"AJUSTES GRUPOS")),p["\u0275\u0275advance"](3),p["\u0275\u0275propertyInterpolate1"]("routerLink","/setting-groups/",null==i||null==i.setting_group?null:i.setting_group.id,"/edit"),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](null==i||null==i.setting_group?null:i.setting_group.name),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("routerLink","/settings/"+(null==i?null:i.id)+"/edit")}}function K(e,t){if(1&e&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275template"](1,H,44,20,"ion-card",5),p["\u0275\u0275elementContainerEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngForOf",n.settingsService.settings)}}function Y(e,t){1&e&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275elementStart"](1,"ion-item"),p["\u0275\u0275element"](2,"ion-icon",15),p["\u0275\u0275elementStart"](3,"ion-label"),p["\u0275\u0275elementStart"](4,"h2"),p["\u0275\u0275text"](5),p["\u0275\u0275pipe"](6,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"ion-button",16),p["\u0275\u0275text"](8),p["\u0275\u0275pipe"](9,"titlecase"),p["\u0275\u0275element"](10,"ion-icon",17),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementContainerEnd"]()),2&e&&(p["\u0275\u0275advance"](5),p["\u0275\u0275textInterpolate1"]("No se encontraron ",p["\u0275\u0275pipeBind1"](6,3,"AJUSTES"),""),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("routerLink","/settings/create"),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" Crear ",p["\u0275\u0275pipeBind1"](9,5,"AJUSTES")," "))}function Z(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"ion-row"),p["\u0275\u0275elementStart"](1,"ion-col",18),p["\u0275\u0275elementStart"](2,"ion-button",19),p["\u0275\u0275listener"]("click",(function(){p["\u0275\u0275restoreView"](n);var e=p["\u0275\u0275nextContext"]();return e.settingsService.getSettings(e.settingsService.meta.current_page-1)})),p["\u0275\u0275element"](3,"ion-icon",20),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"ion-button",21),p["\u0275\u0275text"](5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"ion-button",19),p["\u0275\u0275listener"]("click",(function(){p["\u0275\u0275restoreView"](n);var e=p["\u0275\u0275nextContext"]();return e.settingsService.getSettings(e.settingsService.meta.current_page+1)})),p["\u0275\u0275element"](7,"ion-icon",22),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()}if(2&e){var i=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("disabled",1==i.settingsService.meta.current_page),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("disabled",!0),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate5"](" Pag: ",i.settingsService.meta.current_page," /",i.settingsService.meta.last_page," ",i.settingsService.meta.from,"-",i.settingsService.meta.to," /",i.settingsService.meta.total," "),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("disabled",i.settingsService.meta.current_page==i.settingsService.meta.last_page)}}var ee,te,ne,ie=[{path:"",component:v},{path:"list",component:(ee=function(){function t(n,i,r,a){e(this,t),this.settingsService=n,this.api=i,this.loading=r,this.splitPanel=a}return n(t,[{key:"ngOnInit",value:function(){this.settingsService.getSettings()}},{key:"ionViewWillEnter",value:function(){this.splitPanel.show.next(!0)}},{key:"scrollToTop",value:function(){this.content.scrollToTop(300)}}]),t}(),ee.\u0275fac=function(e){return new(e||ee)(p["\u0275\u0275directiveInject"](b),p["\u0275\u0275directiveInject"](h.a),p["\u0275\u0275directiveInject"](W.a),p["\u0275\u0275directiveInject"](u.a))},ee.\u0275cmp=p["\u0275\u0275defineComponent"]({type:ee,selectors:[["app-settings-list"]],viewQuery:function(e,t){var n;1&e&&p["\u0275\u0275viewQuery"](c.q,!0),2&e&&p["\u0275\u0275queryRefresh"](n=p["\u0275\u0275loadQuery"]())&&(t.content=n.first)},decls:12,vars:18,consts:[["primaryLink","settings/create","primaryIcon","add-circle-outline",3,"title","primaryText"],["id","pages-content"],["showCancelButton","focus",3,"cancelButtonText","placeholder","ngModel","ionCancel","keyup.enter","ngModelChange"],[4,"ngIf"],[1,"lists-footer"],[4,"ngFor","ngForOf"],[1,"item-transparent"],["position","fixed"],[1,"wrap-text"],[3,"routerLink"],[1,"ion-text-center"],["color","success","size","small","fill","clear",3,"routerLink"],["name","create-outline"],["color","danger","size","small","fill","clear",3,"click"],["name","trash-outline"],["name","warning-outline","slot","start",1,"text-warning"],["fill","outline","color","success","slot","end",3,"routerLink"],["name","add-circle-outline","slot","end"],["size","12",1,"ion-text-center"],["fill","clear",3,"disabled","click"],["slot","end","name","play-outline",2,"transform","rotate(180deg)"],["fill","clear",3,"disabled"],["slot","start","name","play-outline"]],template:function(e,t){1&e&&(p["\u0275\u0275element"](0,"app-main-header",0),p["\u0275\u0275pipe"](1,"titlecase"),p["\u0275\u0275pipe"](2,"lowercase"),p["\u0275\u0275elementStart"](3,"ion-content",1),p["\u0275\u0275elementStart"](4,"ion-searchbar",2),p["\u0275\u0275listener"]("ionCancel",(function(){return t.settingsService.searchValue="",t.settingsService.getSettings()}))("keyup.enter",(function(){return t.settingsService.getSettings()}))("ngModelChange",(function(e){return t.settingsService.searchValue=e})),p["\u0275\u0275pipe"](5,"lowercase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](6,K,2,1,"ng-container",3),p["\u0275\u0275pipe"](7,"async"),p["\u0275\u0275template"](8,Y,11,7,"ng-container",3),p["\u0275\u0275pipe"](9,"async"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](10,"ion-footer",4),p["\u0275\u0275template"](11,Z,8,8,"ion-row",3),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275propertyInterpolate"]("title",p["\u0275\u0275pipeBind1"](1,8,"AJUSTES")),p["\u0275\u0275propertyInterpolate1"]("primaryText","Crear ",p["\u0275\u0275pipeBind1"](2,10,"AJUSTES"),""),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("cancelButtonText","Cancelar")("placeholder","Buscar "+p["\u0275\u0275pipeBind1"](5,12,"AJUSTES"))("ngModel",t.settingsService.searchValue),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",!p["\u0275\u0275pipeBind1"](7,14,t.loading.loading)&&(null==t.settingsService.settings?null:t.settingsService.settings.length)),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",!(p["\u0275\u0275pipeBind1"](9,16,t.loading.loading)||null!=t.settingsService.settings&&t.settingsService.settings.length)),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngIf",t.settingsService.meta))},directives:[g.a,c.q,c.R,c.qb,s.NgControlStatus,s.NgModel,l.m,c.u,l.l,c.i,c.J,c.C,c.I,d.k,c.ob,c.Q,c.p,c.g,d.i,c.x],pipes:[l.s,l.j,l.b,X.a],styles:[""]}),ee)},{path:"create",component:D},{path:":id/edit",component:J}],re=((ne=function t(){e(this,t)}).\u0275mod=p["\u0275\u0275defineNgModule"]({type:ne}),ne.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||ne)},imports:[[d.l.forChild(ie)],d.l]}),ne),ae=((te=function t(){e(this,t)}).\u0275mod=p["\u0275\u0275defineNgModule"]({type:te}),te.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||te)},imports:[[l.c,s.FormsModule,c.hb,m.a,re]]}),te)},yvdN:function(t,i,r){"use strict";r.d(i,"a",(function(){return v}));var a=r("fXoL"),o=r("TEn/"),l=r("1HhC"),s=r("ofXK"),c=r("tyNb");function m(e,t){if(1&e){var n=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"ion-buttons",4),a["\u0275\u0275elementStart"](1,"ion-menu-toggle",5),a["\u0275\u0275elementStart"](2,"ion-button",6),a["\u0275\u0275listener"]("click",(function(){return a["\u0275\u0275restoreView"](n),a["\u0275\u0275nextContext"]().toggleMenu()})),a["\u0275\u0275element"](3,"ion-icon",7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}}function d(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275text"](1),a["\u0275\u0275elementContainerEnd"]()),2&e){var n=a["\u0275\u0275nextContext"](2);a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](n.primaryText)}}function p(e,t){if(1&e&&a["\u0275\u0275element"](0,"ion-icon",11),2&e){var n=a["\u0275\u0275nextContext"](2);a["\u0275\u0275property"]("name",n.primaryIcon)}}function u(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"ion-buttons",8),a["\u0275\u0275elementStart"](1,"ion-button",9),a["\u0275\u0275template"](2,d,2,1,"ng-container",3),a["\u0275\u0275template"](3,p,1,1,"ion-icon",10),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e){var n=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("routerLink","/"+n.primaryLink),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",n.primaryText&&!n.platform.is("mobile")),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",n.primaryIcon)}}function g(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"ion-title"),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){var n=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](n.title)}}var v=function(){var t=function(){function t(n,i){e(this,t),this.platform=n,this.splitPanel=i,this.title="",this.primaryLink="",this.primaryIcon="",this.primaryText="",this.showSplitPanelButton=!0}return n(t,[{key:"ngOnInit",value:function(){this.splitPanel.show.subscribe((function(e){}))}},{key:"toggleMenu",value:function(){var e=document.querySelector("ion-split-pane"),t="(min-width: 992px)";if(!(window.innerWidth>=992))return e.querySelector("ion-menu").open();e.when=!(e.when===t)&&t}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275directiveInject"](o.nb),a["\u0275\u0275directiveInject"](l.a))},t.\u0275cmp=a["\u0275\u0275defineComponent"]({type:t,selectors:[["app-main-header"]],inputs:{title:"title",primaryLink:"primaryLink",primaryIcon:"primaryIcon",primaryText:"primaryText",showSplitPanelButton:"showSplitPanelButton"},decls:5,vars:4,consts:[[3,"translucent"],["slot","start",4,"ngIf"],["slot","primary",4,"ngIf"],[4,"ngIf"],["slot","start"],["auto-hide","false","menu","main-menu"],[3,"click"],["slot","icon-only","name","menu"],["slot","primary"],["color","success",3,"routerLink"],["slot","end",3,"name",4,"ngIf"],["slot","end",3,"name"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"ion-header",0),a["\u0275\u0275elementStart"](1,"ion-toolbar"),a["\u0275\u0275template"](2,m,4,0,"ion-buttons",1),a["\u0275\u0275template"](3,u,4,3,"ion-buttons",2),a["\u0275\u0275template"](4,g,2,1,"ion-title",3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275property"]("translucent",!0),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngIf",t.splitPanel.show.value),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",t.primaryLink),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",t.title))},directives:[o.w,o.fb,s.m,o.h,o.M,o.g,o.x,c.i,o.ob,o.db],styles:[""]}),t}()}}])}();