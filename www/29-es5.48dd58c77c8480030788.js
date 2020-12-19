!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{xZQP:function(t,i,a){"use strict";a.r(i),a.d(i,"MailsPageModule",(function(){return ie}));var l,r,o=a("ofXK"),m=a("3Pt+"),s=a("TEn/"),c=a("pk6O"),d=a("tyNb"),p=a("fXoL"),u=a("1HhC"),v=a("yvdN"),f=((l=function(){function t(n){e(this,t),this.splitPanel=n}return n(t,[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){this.splitPanel.show.next(!0)}}]),t}()).\u0275fac=function(e){return new(e||l)(p["\u0275\u0275directiveInject"](u.a))},l.\u0275cmp=p["\u0275\u0275defineComponent"]({type:l,selectors:[["app-mails"]],decls:19,vars:6,consts:[["title","CORREOS"],["size-md","3","size-sm","6","size-xs","12"],["routerLink","/mails/list"],[2,"height","120px","width","100%","display","flex","align-items","center","justify-content","center"],["name","list-circle-outline","color","primary",1,"icon-m"],[1,"ion-text-center"],["routerLink","/mails/create"],["name","add-circle-outline","color","success",1,"icon-m"]],template:function(e,t){1&e&&(p["\u0275\u0275element"](0,"app-main-header",0),p["\u0275\u0275elementStart"](1,"ion-content"),p["\u0275\u0275elementStart"](2,"ion-row"),p["\u0275\u0275elementStart"](3,"ion-col",1),p["\u0275\u0275elementStart"](4,"ion-card",2),p["\u0275\u0275elementStart"](5,"div",3),p["\u0275\u0275element"](6,"ion-icon",4),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"ion-card-header"),p["\u0275\u0275elementStart"](8,"ion-card-subtitle",5),p["\u0275\u0275text"](9),p["\u0275\u0275pipe"](10,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](11,"ion-col",1),p["\u0275\u0275elementStart"](12,"ion-card",6),p["\u0275\u0275elementStart"](13,"div",3),p["\u0275\u0275element"](14,"ion-icon",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](15,"ion-card-header"),p["\u0275\u0275elementStart"](16,"ion-card-subtitle",5),p["\u0275\u0275text"](17),p["\u0275\u0275pipe"](18,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](9),p["\u0275\u0275textInterpolate1"](" Listar ",p["\u0275\u0275pipeBind1"](10,2,"CORREOS")," "),p["\u0275\u0275advance"](8),p["\u0275\u0275textInterpolate1"](" Crear ",p["\u0275\u0275pipeBind1"](18,4,"CORREOS")," "))},directives:[v.a,s.q,s.Q,s.p,s.i,s.ob,d.i,s.x,s.k,s.l],pipes:[o.s],styles:[""]}),l),h=a("mrSG"),g=a("2Vo4"),S=a("TIcx"),x=a("EgAa"),y=a("PWdp"),E=a("Ezvo"),b=((r=function(){function t(n,i,a,l,r){e(this,t),this.api=n,this.alert=i,this.toast=a,this.router=l,this.navigation=r,this.mailsUrl="mails",this.mailsFormValid=new g.a(!1),this.mails=[],this.mail={},this.mailLists={},this.searchValue="",this.perPage=10,this.meta=null,this.page=1,this.pagesContent=document.getElementById("pages-content")}return n(t,[{key:"getMails",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.page,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.perPage;this.api.get(this.mailsUrl+"?page="+t+"&perPage="+n+"&q[subject:cont]="+this.searchValue).subscribe((function(t){document.getElementById("pages-content").scrollToTop(300),e.mails=t.data,e.mailLists=t.lists,e.meta=t.meta}),(function(e){console.error(e)}))}},{key:"editMail",value:function(e){var t=this;this.api.get(this.mailsUrl+"/"+e+"/edit").subscribe((function(e){t.mail=e.data.model,t.mailLists=e.lists}),(function(e){console.error(e)}))}},{key:"updateMail",value:function(){var e=this;this.api.put(this.mailsUrl+"/"+this.mail.id,{model:this.mail,pivots:{}}).subscribe((function(t){e.toast.present(t.message,"toast-success","top"),e.navigation.back(),e.getMails(1)}))}},{key:"createMail",value:function(){var e=this;this.api.get(this.mailsUrl+"/create").subscribe((function(t){e.mail={},e.mailLists=t.lists}))}},{key:"storeMail",value:function(){var e=this;this.api.post(this.mailsUrl,{model:this.mail,pivots:{}}).subscribe((function(t){e.toast.present(t.message,"toast-success","top"),e.navigation.back(),e.getMails(1)}))}},{key:"deleteMail",value:function(e){return Object(h.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alert.confirmation("Desea eliminar el item?");case 2:if(t.t0=t.sent,!t.t0){t.next=5;break}this.api.delete(this.mailsUrl+"/"+e,{}).subscribe((function(e){n.toast.present(e.message,"toast-success","top"),n.getMails(1)}));case 5:case"end":return t.stop()}}),t,this)})))}}]),t}()).\u0275fac=function(e){return new(e||r)(p["\u0275\u0275inject"](S.a),p["\u0275\u0275inject"](x.a),p["\u0275\u0275inject"](y.a),p["\u0275\u0275inject"](d.h),p["\u0275\u0275inject"](E.a))},r.\u0275prov=p["\u0275\u0275defineInjectable"]({token:r,factory:r.\u0275fac,providedIn:"root"}),r),I=a("JmBq"),C=a("kJkI"),w=["mailsForm"];function k(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",12),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]().$implicit;p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",n.message," ")}}function M(e,t){if(1&e&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275template"](1,k,2,1,"div",11),p["\u0275\u0275elementContainerEnd"]()),2&e){var n=t.$implicit;p["\u0275\u0275nextContext"]();var i=p["\u0275\u0275reference"](1);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",null==i.form.controls.mail_template_id?null:i.form.controls.mail_template_id.hasError(n.type))}}function T(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",12),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]().$implicit;p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",n.message," ")}}function O(e,t){if(1&e&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275template"](1,T,2,1,"div",11),p["\u0275\u0275elementContainerEnd"]()),2&e){var n=t.$implicit;p["\u0275\u0275nextContext"]();var i=p["\u0275\u0275reference"](1);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",null==i.form.controls.subject?null:i.form.controls.subject.hasError(n.type))}}function B(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",12),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]().$implicit;p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",n.message," ")}}function j(e,t){if(1&e&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275template"](1,B,2,1,"div",11),p["\u0275\u0275elementContainerEnd"]()),2&e){var n=t.$implicit;p["\u0275\u0275nextContext"]();var i=p["\u0275\u0275reference"](1);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",null==i.form.controls.receiver?null:i.form.controls.receiver.hasError(n.type))}}function L(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",12),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]().$implicit;p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",n.message," ")}}function R(e,t){if(1&e&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275template"](1,L,2,1,"div",11),p["\u0275\u0275elementContainerEnd"]()),2&e){var n=t.$implicit;p["\u0275\u0275nextContext"]();var i=p["\u0275\u0275reference"](1);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",null==i.form.controls.html?null:i.form.controls.html.hasError(n.type))}}function F(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",12),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]().$implicit;p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",n.message," ")}}function P(e,t){if(1&e&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275template"](1,F,2,1,"div",11),p["\u0275\u0275elementContainerEnd"]()),2&e){var n=t.$implicit;p["\u0275\u0275nextContext"]();var i=p["\u0275\u0275reference"](1);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",null==i.form.controls.text?null:i.form.controls.text.hasError(n.type))}}var _,V=((_=function(){function t(n,i){e(this,t),this.mailsService=n,this.toTitlecase=i,this.model={},this.validationMessages={mail_template_id:[{type:"required",message:"El campo "+this.toTitlecase.transform("mailTemplate - NAME")+" es obligatorio."}],subject:[{type:"required",message:"El campo "+this.toTitlecase.transform("ASUNTO")+" es obligatorio."}],receiver:[{type:"required",message:"El campo "+this.toTitlecase.transform("PARA")+" es obligatorio."}],html:[{type:"required",message:"El campo "+this.toTitlecase.transform("HTML")+" es obligatorio."}],text:[{type:"required",message:"El campo "+this.toTitlecase.transform("TEXTO")+" es obligatorio."}]}}return n(t,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){}},{key:"setMailTemplateId",value:function(e){this.mailsService.mail.mail_template_id=e.value?e.value.id:null}}]),t}()).\u0275fac=function(e){return new(e||_)(p["\u0275\u0275directiveInject"](b),p["\u0275\u0275directiveInject"](o.s))},_.\u0275cmp=p["\u0275\u0275defineComponent"]({type:_,selectors:[["app-mails-form"]],viewQuery:function(e,t){var n;1&e&&p["\u0275\u0275viewQuery"](w,!0),2&e&&p["\u0275\u0275queryRefresh"](n=p["\u0275\u0275loadQuery"]())&&(t.mailsForm=n.first)},inputs:{model:"model"},decls:39,vars:41,consts:[["novalidate","","autocomplete","off"],["mailsForm","ngForm"],[1,"item-transparent"],["name","mail_template_id","id","mail_template_id-field","itemValueField","id","itemTextField","subject",3,"required","ngModel","items","canClear","hasConfirmButton","confirmButtonText","searchPlaceholder","searchFailText","closeButtonText","clearButtonText","canSearch","ngModelChange","onChange"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["type","text","name","subject","id","subject-field","placeholder","",3,"ngModel","required","ngModelChange"],["type","text","name","receiver","id","receiver-field","placeholder","",3,"ngModel","required","ngModelChange"],["position","stacked",2,"font-size","1rem"],["name","html","id","html-field",3,"ngxSummernote","ngModel","ngModelChange"],["name","text","id","text-field","rows","6","placeholder","",3,"ngModel","ngModelChange"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"form",0,1),p["\u0275\u0275elementStart"](2,"ion-item",2),p["\u0275\u0275elementStart"](3,"ion-label"),p["\u0275\u0275text"](4),p["\u0275\u0275pipe"](5,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"ionic-selectable",3),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.mail_template=e}))("onChange",(function(e){return t.setMailTemplateId(e)})),p["\u0275\u0275pipe"](7,"titlecase"),p["\u0275\u0275pipe"](8,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](9,"div",4),p["\u0275\u0275template"](10,M,2,1,"ng-container",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](11,"ion-item",2),p["\u0275\u0275elementStart"](12,"ion-label"),p["\u0275\u0275text"](13),p["\u0275\u0275pipe"](14,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](15,"ion-input",6),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.subject=e})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](16,"div",4),p["\u0275\u0275template"](17,O,2,1,"ng-container",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](18,"ion-item",2),p["\u0275\u0275elementStart"](19,"ion-label"),p["\u0275\u0275text"](20),p["\u0275\u0275pipe"](21,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](22,"ion-input",7),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.receiver=e})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](23,"div",4),p["\u0275\u0275template"](24,j,2,1,"ng-container",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](25,"ion-item",2),p["\u0275\u0275elementStart"](26,"ion-label",8),p["\u0275\u0275text"](27),p["\u0275\u0275pipe"](28,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](29,"input",9),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.html=e})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](30,"div",4),p["\u0275\u0275template"](31,R,2,1,"ng-container",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](32,"ion-item",2),p["\u0275\u0275elementStart"](33,"ion-label"),p["\u0275\u0275text"](34),p["\u0275\u0275pipe"](35,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](36,"ion-textarea",10),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.text=e})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](37,"div",4),p["\u0275\u0275template"](38,P,2,1,"ng-container",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](4),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](5,27,"CORREOSPLANTILLA")),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("required",!0)("ngModel",t.model.mail_template)("items",t.mailsService.mailLists.MailTemplate)("canClear",!0)("hasConfirmButton",!0)("confirmButtonText","Seleccionar")("searchPlaceholder","Buscar "+p["\u0275\u0275pipeBind1"](7,29,"CORREOS PLANTILLAS"))("searchFailText","No se encontro "+p["\u0275\u0275pipeBind1"](8,31,"CORREOS PLANTILLAS")+" que coincida!")("closeButtonText","Cancelar")("clearButtonText","Limpiar")("canSearch",!0),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("ngForOf",t.validationMessages.mail_template_id),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](14,33,"ASUNTO")),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngModel",t.model.subject)("required",!0),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngForOf",t.validationMessages.subject),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](21,35,"PARA")),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngModel",t.model.receiver)("required",!0),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngForOf",t.validationMessages.receiver),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](28,37,"HTML")),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngModel",t.model.html),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngForOf",t.validationMessages.html),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](35,39,"TEXTO")),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngModel",t.model.text),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngForOf",t.validationMessages.text))},directives:[m["\u0275angular_packages_forms_forms_y"],m.NgControlStatusGroup,m.NgForm,s.C,s.I,I.a,m.RequiredValidator,m.NgControlStatus,m.NgModel,o.l,s.B,s.qb,m.DefaultValueAccessor,C.a,s.bb,o.m],pipes:[o.s],styles:[""]}),_),q=["mailForm"];function A(e,t){1&e&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275text"](1,"Guardar"),p["\u0275\u0275elementContainerEnd"]())}var N,Q=((N=function(){function t(n,i,a,l){e(this,t),this.mailsService=n,this.route=i,this.platform=a,this.splitPanel=l,this.id=null,this.model=null}return n(t,[{key:"ngOnInit",value:function(){this.id=this.route.snapshot.paramMap.get("id"),this.mailsService.editMail(this.id)}},{key:"ionViewWillEnter",value:function(){this.splitPanel.show.next(!0)}},{key:"ngAfterViewInit",value:function(){var e=this;this.mailForm.mailsForm.valueChanges.subscribe((function(t){e.mailsService.mailsFormValid.next(e.mailForm.mailsForm.valid)}))}}]),t}()).\u0275fac=function(e){return new(e||N)(p["\u0275\u0275directiveInject"](b),p["\u0275\u0275directiveInject"](d.a),p["\u0275\u0275directiveInject"](s.nb),p["\u0275\u0275directiveInject"](u.a))},N.\u0275cmp=p["\u0275\u0275defineComponent"]({type:N,selectors:[["app-mails-edit"]],viewQuery:function(e,t){var n;1&e&&p["\u0275\u0275viewQuery"](q,!0),2&e&&p["\u0275\u0275queryRefresh"](n=p["\u0275\u0275loadQuery"]())&&(t.mailForm=n.first)},decls:15,vars:9,consts:[["slot","start"],[3,"text","icon"],["slot","primary"],["color","success","fill","clear",3,"disabled","click"],[4,"ngIf"],["slot","end","color","success","name","save-outline"],["fullscreen",""],[3,"model"],["mailForm",""]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"ion-header"),p["\u0275\u0275elementStart"](1,"ion-toolbar"),p["\u0275\u0275elementStart"](2,"ion-buttons",0),p["\u0275\u0275element"](3,"ion-back-button",1),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"ion-buttons",2),p["\u0275\u0275elementStart"](5,"ion-button",3),p["\u0275\u0275listener"]("click",(function(){return t.mailsService.updateMail()})),p["\u0275\u0275template"](6,A,2,0,"ng-container",4),p["\u0275\u0275element"](7,"ion-icon",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](8,"ion-title"),p["\u0275\u0275text"](9),p["\u0275\u0275pipe"](10,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](11,"ion-content",6),p["\u0275\u0275elementStart"](12,"ion-card"),p["\u0275\u0275element"](13,"app-mails-form",7,8),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("text","")("icon","arrow-back-outline"),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("disabled",!t.mailsService.mailsFormValid.value),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",!t.platform.is("mobile")),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate2"]("Editar ",p["\u0275\u0275pipeBind1"](10,7,"CORREOS"),": ",null==t.mailsService.mail?null:t.mailsService.mail.name,""),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("model",t.mailsService.mail))},directives:[s.w,s.fb,s.h,s.e,s.f,s.g,o.m,s.x,s.db,s.q,s.i,V],pipes:[o.s],styles:[""]}),N),$=["mailForm"];function U(e,t){1&e&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275text"](1,"Guardar"),p["\u0275\u0275elementContainerEnd"]())}var z,X=((z=function(){function t(n,i,a,l){e(this,t),this.mailsService=n,this.route=i,this.platform=a,this.splitPanel=l,this.id=null,this.formValid=!1}return n(t,[{key:"ngOnInit",value:function(){this.clearPosts()}},{key:"ionViewWillEnter",value:function(){this.splitPanel.show.next(!0)}},{key:"ngAfterViewInit",value:function(){var e=this;this.mailForm.mailsForm.valueChanges.subscribe((function(t){e.mailsService.mailsFormValid.next(e.mailForm.mailsForm.valid)}))}},{key:"clearPosts",value:function(){console.log("clear"),this.mailsService.createMail(),this.mailsService.mail={}}}]),t}()).\u0275fac=function(e){return new(e||z)(p["\u0275\u0275directiveInject"](b),p["\u0275\u0275directiveInject"](d.a),p["\u0275\u0275directiveInject"](s.nb),p["\u0275\u0275directiveInject"](u.a))},z.\u0275cmp=p["\u0275\u0275defineComponent"]({type:z,selectors:[["app-mails-create"]],viewQuery:function(e,t){var n;1&e&&p["\u0275\u0275viewQuery"]($,!0),2&e&&p["\u0275\u0275queryRefresh"](n=p["\u0275\u0275loadQuery"]())&&(t.mailForm=n.first)},decls:15,vars:8,consts:[["slot","start"],[3,"text","icon"],["slot","primary"],["color","success","fill","clear",3,"disabled","click"],[4,"ngIf"],["slot","end","color","success","name","save-outline"],["fullscreen",""],[3,"model"],["mailForm",""]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"ion-header"),p["\u0275\u0275elementStart"](1,"ion-toolbar"),p["\u0275\u0275elementStart"](2,"ion-buttons",0),p["\u0275\u0275element"](3,"ion-back-button",1),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"ion-buttons",2),p["\u0275\u0275elementStart"](5,"ion-button",3),p["\u0275\u0275listener"]("click",(function(){return t.mailsService.storeMail()})),p["\u0275\u0275template"](6,U,2,0,"ng-container",4),p["\u0275\u0275element"](7,"ion-icon",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](8,"ion-title"),p["\u0275\u0275text"](9),p["\u0275\u0275pipe"](10,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](11,"ion-content",6),p["\u0275\u0275elementStart"](12,"ion-card"),p["\u0275\u0275element"](13,"app-mails-form",7,8),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("text","")("icon","arrow-back-outline"),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("disabled",!t.mailsService.mailsFormValid.value),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",!t.platform.is("mobile")),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate1"]("Crear ",p["\u0275\u0275pipeBind1"](10,6,"CORREOS"),""),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("model",t.mailsService.mail))},directives:[s.w,s.fb,s.h,s.e,s.f,s.g,o.m,s.x,s.db,s.q,s.i,V],pipes:[o.s],styles:[""]}),z),H=a("fYRX"),W=a("aGrO");function G(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"ion-card"),p["\u0275\u0275elementStart"](1,"ion-list"),p["\u0275\u0275elementStart"](2,"ion-item",6),p["\u0275\u0275elementStart"](3,"ion-label",7),p["\u0275\u0275elementStart"](4,"b"),p["\u0275\u0275text"](5),p["\u0275\u0275pipe"](6,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"div",8),p["\u0275\u0275text"](8),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](9,"ion-item",6),p["\u0275\u0275elementStart"](10,"ion-label",7),p["\u0275\u0275elementStart"](11,"b"),p["\u0275\u0275text"](12),p["\u0275\u0275pipe"](13,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](14,"div",8),p["\u0275\u0275text"](15),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](16,"ion-item",6),p["\u0275\u0275elementStart"](17,"ion-label",7),p["\u0275\u0275elementStart"](18,"b"),p["\u0275\u0275text"](19),p["\u0275\u0275pipe"](20,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](21,"div",8),p["\u0275\u0275text"](22),p["\u0275\u0275pipe"](23,"stripHtml"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](24,"ion-item",6),p["\u0275\u0275elementStart"](25,"ion-label",7),p["\u0275\u0275elementStart"](26,"b"),p["\u0275\u0275text"](27),p["\u0275\u0275pipe"](28,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](29,"div",8),p["\u0275\u0275text"](30),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](31,"ion-item",6),p["\u0275\u0275elementStart"](32,"ion-label",7),p["\u0275\u0275elementStart"](33,"b"),p["\u0275\u0275text"](34),p["\u0275\u0275pipe"](35,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](36,"div",8),p["\u0275\u0275elementStart"](37,"a",9),p["\u0275\u0275text"](38),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](39,"ion-footer"),p["\u0275\u0275elementStart"](40,"ion-row"),p["\u0275\u0275elementStart"](41,"ion-col",10),p["\u0275\u0275elementStart"](42,"ion-button",11),p["\u0275\u0275element"](43,"ion-icon",12),p["\u0275\u0275elementStart"](44,"div"),p["\u0275\u0275text"](45,"Editar"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](46,"ion-col",10),p["\u0275\u0275elementStart"](47,"ion-button",13),p["\u0275\u0275listener"]("click",(function(){p["\u0275\u0275restoreView"](n);var e=t.$implicit;return p["\u0275\u0275nextContext"](2).mailsService.deleteMail(null==e?null:e.id)})),p["\u0275\u0275element"](48,"ion-icon",14),p["\u0275\u0275elementStart"](49,"div"),p["\u0275\u0275text"](50,"Eliminar"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()}if(2&e){var i=t.$implicit;p["\u0275\u0275advance"](5),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](6,12,"ASUNTO")),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](null==i?null:i.subject),p["\u0275\u0275advance"](4),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](13,14,"PARA")),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](null==i?null:i.receiver),p["\u0275\u0275advance"](4),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](20,16,"HTML")),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](23,18,null==i?null:i.html)),p["\u0275\u0275advance"](5),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](28,20,"TEXTO")),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](null==i?null:i.text),p["\u0275\u0275advance"](4),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](35,22,"CORREOS PLANTILLAS")),p["\u0275\u0275advance"](3),p["\u0275\u0275propertyInterpolate1"]("routerLink","/mail-templates/",null==i||null==i.mail_template?null:i.mail_template.id,"/edit"),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](null==i||null==i.mail_template?null:i.mail_template.subject),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("routerLink","/mails/"+(null==i?null:i.id)+"/edit")}}function J(e,t){if(1&e&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275template"](1,G,51,24,"ion-card",5),p["\u0275\u0275elementContainerEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngForOf",n.mailsService.mails)}}function D(e,t){1&e&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275elementStart"](1,"ion-item"),p["\u0275\u0275element"](2,"ion-icon",15),p["\u0275\u0275elementStart"](3,"ion-label"),p["\u0275\u0275elementStart"](4,"h2"),p["\u0275\u0275text"](5),p["\u0275\u0275pipe"](6,"titlecase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"ion-button",16),p["\u0275\u0275text"](8),p["\u0275\u0275pipe"](9,"titlecase"),p["\u0275\u0275element"](10,"ion-icon",17),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementContainerEnd"]()),2&e&&(p["\u0275\u0275advance"](5),p["\u0275\u0275textInterpolate1"]("No se encontraron ",p["\u0275\u0275pipeBind1"](6,3,"CORREOS"),""),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("routerLink","/mails/create"),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" Crear ",p["\u0275\u0275pipeBind1"](9,5,"CORREOS")," "))}function K(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"ion-row"),p["\u0275\u0275elementStart"](1,"ion-col",18),p["\u0275\u0275elementStart"](2,"ion-button",19),p["\u0275\u0275listener"]("click",(function(){p["\u0275\u0275restoreView"](n);var e=p["\u0275\u0275nextContext"]();return e.mailsService.getMails(e.mailsService.meta.current_page-1)})),p["\u0275\u0275element"](3,"ion-icon",20),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"ion-button",21),p["\u0275\u0275text"](5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"ion-button",19),p["\u0275\u0275listener"]("click",(function(){p["\u0275\u0275restoreView"](n);var e=p["\u0275\u0275nextContext"]();return e.mailsService.getMails(e.mailsService.meta.current_page+1)})),p["\u0275\u0275element"](7,"ion-icon",22),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()}if(2&e){var i=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("disabled",1==i.mailsService.meta.current_page),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("disabled",!0),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate5"](" Pag: ",i.mailsService.meta.current_page," /",i.mailsService.meta.last_page," ",i.mailsService.meta.from,"-",i.mailsService.meta.to," /",i.mailsService.meta.total," "),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("disabled",i.mailsService.meta.current_page==i.mailsService.meta.last_page)}}var Y,Z,ee,te=[{path:"",component:f},{path:"list",component:(Y=function(){function t(n,i,a,l){e(this,t),this.mailsService=n,this.api=i,this.loading=a,this.splitPanel=l}return n(t,[{key:"ngOnInit",value:function(){this.mailsService.getMails()}},{key:"ionViewWillEnter",value:function(){this.splitPanel.show.next(!0)}},{key:"scrollToTop",value:function(){this.content.scrollToTop(300)}}]),t}(),Y.\u0275fac=function(e){return new(e||Y)(p["\u0275\u0275directiveInject"](b),p["\u0275\u0275directiveInject"](S.a),p["\u0275\u0275directiveInject"](H.a),p["\u0275\u0275directiveInject"](u.a))},Y.\u0275cmp=p["\u0275\u0275defineComponent"]({type:Y,selectors:[["app-mails-list"]],viewQuery:function(e,t){var n;1&e&&p["\u0275\u0275viewQuery"](s.q,!0),2&e&&p["\u0275\u0275queryRefresh"](n=p["\u0275\u0275loadQuery"]())&&(t.content=n.first)},decls:12,vars:18,consts:[["primaryLink","mails/create","primaryIcon","add-circle-outline",3,"title","primaryText"],["id","pages-content"],["showCancelButton","focus",3,"cancelButtonText","placeholder","ngModel","ionCancel","keyup.enter","ngModelChange"],[4,"ngIf"],[1,"lists-footer"],[4,"ngFor","ngForOf"],[1,"item-transparent"],["position","fixed"],[1,"wrap-text"],[3,"routerLink"],[1,"ion-text-center"],["color","success","size","small","fill","clear",3,"routerLink"],["name","create-outline"],["color","danger","size","small","fill","clear",3,"click"],["name","trash-outline"],["name","warning-outline","slot","start",1,"text-warning"],["fill","outline","color","success","slot","end",3,"routerLink"],["name","add-circle-outline","slot","end"],["size","12",1,"ion-text-center"],["fill","clear",3,"disabled","click"],["slot","end","name","play-outline",2,"transform","rotate(180deg)"],["fill","clear",3,"disabled"],["slot","start","name","play-outline"]],template:function(e,t){1&e&&(p["\u0275\u0275element"](0,"app-main-header",0),p["\u0275\u0275pipe"](1,"titlecase"),p["\u0275\u0275pipe"](2,"lowercase"),p["\u0275\u0275elementStart"](3,"ion-content",1),p["\u0275\u0275elementStart"](4,"ion-searchbar",2),p["\u0275\u0275listener"]("ionCancel",(function(){return t.mailsService.searchValue="",t.mailsService.getMails()}))("keyup.enter",(function(){return t.mailsService.getMails()}))("ngModelChange",(function(e){return t.mailsService.searchValue=e})),p["\u0275\u0275pipe"](5,"lowercase"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](6,J,2,1,"ng-container",3),p["\u0275\u0275pipe"](7,"async"),p["\u0275\u0275template"](8,D,11,7,"ng-container",3),p["\u0275\u0275pipe"](9,"async"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](10,"ion-footer",4),p["\u0275\u0275template"](11,K,8,8,"ion-row",3),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275propertyInterpolate"]("title",p["\u0275\u0275pipeBind1"](1,8,"CORREOS")),p["\u0275\u0275propertyInterpolate1"]("primaryText","Crear ",p["\u0275\u0275pipeBind1"](2,10,"CORREOS"),""),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("cancelButtonText","Cancelar")("placeholder","Buscar "+p["\u0275\u0275pipeBind1"](5,12,"CORREOS"))("ngModel",t.mailsService.searchValue),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",!p["\u0275\u0275pipeBind1"](7,14,t.loading.loading)&&(null==t.mailsService.mails?null:t.mailsService.mails.length)),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",!(p["\u0275\u0275pipeBind1"](9,16,t.loading.loading)||null!=t.mailsService.mails&&t.mailsService.mails.length)),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngIf",t.mailsService.meta))},directives:[v.a,s.q,s.R,s.qb,m.NgControlStatus,m.NgModel,o.m,s.u,o.l,s.i,s.J,s.C,s.I,d.k,s.ob,s.Q,s.p,s.g,d.i,s.x],pipes:[o.s,o.j,o.b,W.a],styles:[""]}),Y)},{path:"create",component:X},{path:":id/edit",component:Q}],ne=((ee=function t(){e(this,t)}).\u0275mod=p["\u0275\u0275defineNgModule"]({type:ee}),ee.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||ee)},imports:[[d.l.forChild(te)],d.l]}),ee),ie=((Z=function t(){e(this,t)}).\u0275mod=p["\u0275\u0275defineNgModule"]({type:Z}),Z.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||Z)},imports:[[o.c,m.FormsModule,s.hb,c.a,ne]]}),Z)},yvdN:function(t,i,a){"use strict";a.d(i,"a",(function(){return f}));var l=a("fXoL"),r=a("TEn/"),o=a("1HhC"),m=a("ofXK"),s=a("tyNb");function c(e,t){if(1&e){var n=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"ion-buttons",4),l["\u0275\u0275elementStart"](1,"ion-menu-toggle",5),l["\u0275\u0275elementStart"](2,"ion-button",6),l["\u0275\u0275listener"]("click",(function(){return l["\u0275\u0275restoreView"](n),l["\u0275\u0275nextContext"]().toggleMenu()})),l["\u0275\u0275element"](3,"ion-icon",7),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}}function d(e,t){if(1&e&&(l["\u0275\u0275elementContainerStart"](0),l["\u0275\u0275text"](1),l["\u0275\u0275elementContainerEnd"]()),2&e){var n=l["\u0275\u0275nextContext"](2);l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](n.primaryText)}}function p(e,t){if(1&e&&l["\u0275\u0275element"](0,"ion-icon",11),2&e){var n=l["\u0275\u0275nextContext"](2);l["\u0275\u0275property"]("name",n.primaryIcon)}}function u(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"ion-buttons",8),l["\u0275\u0275elementStart"](1,"ion-button",9),l["\u0275\u0275template"](2,d,2,1,"ng-container",3),l["\u0275\u0275template"](3,p,1,1,"ion-icon",10),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("routerLink","/"+n.primaryLink),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",n.primaryText&&!n.platform.is("mobile")),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",n.primaryIcon)}}function v(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"ion-title"),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](n.title)}}var f=function(){var t=function(){function t(n,i){e(this,t),this.platform=n,this.splitPanel=i,this.title="",this.primaryLink="",this.primaryIcon="",this.primaryText="",this.showSplitPanelButton=!0}return n(t,[{key:"ngOnInit",value:function(){this.splitPanel.show.subscribe((function(e){}))}},{key:"toggleMenu",value:function(){var e=document.querySelector("ion-split-pane"),t="(min-width: 992px)";if(!(window.innerWidth>=992))return e.querySelector("ion-menu").open();e.when=!(e.when===t)&&t}}]),t}();return t.\u0275fac=function(e){return new(e||t)(l["\u0275\u0275directiveInject"](r.nb),l["\u0275\u0275directiveInject"](o.a))},t.\u0275cmp=l["\u0275\u0275defineComponent"]({type:t,selectors:[["app-main-header"]],inputs:{title:"title",primaryLink:"primaryLink",primaryIcon:"primaryIcon",primaryText:"primaryText",showSplitPanelButton:"showSplitPanelButton"},decls:5,vars:4,consts:[[3,"translucent"],["slot","start",4,"ngIf"],["slot","primary",4,"ngIf"],[4,"ngIf"],["slot","start"],["auto-hide","false","menu","main-menu"],[3,"click"],["slot","icon-only","name","menu"],["slot","primary"],["color","success",3,"routerLink"],["slot","end",3,"name",4,"ngIf"],["slot","end",3,"name"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"ion-header",0),l["\u0275\u0275elementStart"](1,"ion-toolbar"),l["\u0275\u0275template"](2,c,4,0,"ion-buttons",1),l["\u0275\u0275template"](3,u,4,3,"ion-buttons",2),l["\u0275\u0275template"](4,v,2,1,"ion-title",3),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275property"]("translucent",!0),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngIf",t.splitPanel.show.value),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",t.primaryLink),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",t.title))},directives:[r.w,r.fb,m.m,r.h,r.M,r.g,r.x,s.i,r.ob,r.db],styles:[""]}),t}()}}])}();