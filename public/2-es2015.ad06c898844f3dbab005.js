(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"Z1/u":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("wd/R"),o=n("fXoL");let r=(()=>{class e{transform(e,t){return e&&t?"HH:mm"==t?a("1990-01-01 "+e).format(t):a(e).format(t):e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=o["\u0275\u0275definePipe"]({name:"dateFormat",type:e,pure:!0}),e})()},kQh7:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("mrSG"),o=n("2Vo4"),r=n("fXoL"),s=n("TIcx"),i=n("EgAa"),l=n("PWdp"),c=n("tyNb"),m=n("Ezvo");let d=(()=>{class e{constructor(e,t,n,a,r){this.api=e,this.alert=t,this.toast=n,this.router=a,this.navigation=r,this.boarMessagesUrl="boar-messages",this.boarMessagesFormValid=new o.a(!1),this.boarMessages=[],this.boarMessage={},this.boarMessagesLists={},this.searchValue="",this.perPage=10,this.meta=null,this.page=1,this.pagesContent=document.getElementById("pages-content")}getBoarMessages(e=this.page,t=this.perPage){this.api.get(this.boarMessagesUrl+"?page="+e+"&perPage="+t+"&q[name:cont]="+this.searchValue).subscribe(e=>{this.boarMessages=e.data,this.boarMessagesLists=e.lists,this.meta=e.meta},e=>{console.error(e)})}editBoarMessage(e){this.api.get(this.boarMessagesUrl+"/"+e+"/edit").subscribe(e=>{this.boarMessage=e.data.model,this.boarMessagesLists=e.lists},e=>{console.error(e)})}updateBoarMessage(){this.api.put(this.boarMessagesUrl+"/"+this.boarMessage.id,{model:this.boarMessage,pivots:{}}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.navigation.back(),this.getBoarMessages(1)})}createBoarMessage(){this.api.get(this.boarMessagesUrl+"/create").subscribe(e=>{this.boarMessage={},this.boarMessagesLists=e.lists})}storeBoarMessage(){this.api.post(this.boarMessagesUrl,{model:this.boarMessage,pivots:{}}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.navigation.back(),this.getBoarMessages(1)})}deleteBoardMessage(e){return Object(a.a)(this,void 0,void 0,(function*(){(yield this.alert.confirmation("Desea eliminar el item?"))&&this.api.delete(this.boarMessagesUrl+"/"+e,{}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.getBoarMessages(1)})}))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](s.a),r["\u0275\u0275inject"](i.a),r["\u0275\u0275inject"](l.a),r["\u0275\u0275inject"](c.h),r["\u0275\u0275inject"](m.a))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},pax7:function(e,t,n){"use strict";n.r(t),n.d(t,"BoardModule",(function(){return q}));var a=n("ofXK"),o=n("tyNb"),r=n("fXoL"),s=n("1HhC"),i=n("yvdN"),l=n("TEn/");let c=(()=>{class e{constructor(e){this.splitPanel=e}ngOnInit(){}ionViewWillEnter(){this.splitPanel.show.next(!0)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-board"]],decls:19,vars:6,consts:[["title","CARTELERA"],["size-md","3","size-sm","6","size-xs","12"],["routerLink","/board/list"],[2,"height","120px","width","100%","display","flex","align-items","center","justify-content","center"],["name","list-circle-outline","color","primary",1,"icon-m"],[1,"ion-text-center"],["routerLink","/board/create"],["name","add-circle-outline","color","success",1,"icon-m"]],template:function(e,t){1&e&&(r["\u0275\u0275element"](0,"app-main-header",0),r["\u0275\u0275elementStart"](1,"ion-content"),r["\u0275\u0275elementStart"](2,"ion-row"),r["\u0275\u0275elementStart"](3,"ion-col",1),r["\u0275\u0275elementStart"](4,"ion-card",2),r["\u0275\u0275elementStart"](5,"div",3),r["\u0275\u0275element"](6,"ion-icon",4),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"ion-card-header"),r["\u0275\u0275elementStart"](8,"ion-card-subtitle",5),r["\u0275\u0275text"](9),r["\u0275\u0275pipe"](10,"titlecase"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](11,"ion-col",1),r["\u0275\u0275elementStart"](12,"ion-card",6),r["\u0275\u0275elementStart"](13,"div",3),r["\u0275\u0275element"](14,"ion-icon",7),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](15,"ion-card-header"),r["\u0275\u0275elementStart"](16,"ion-card-subtitle",5),r["\u0275\u0275text"](17),r["\u0275\u0275pipe"](18,"titlecase"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](9),r["\u0275\u0275textInterpolate1"](" Listar ",r["\u0275\u0275pipeBind1"](10,2,"ENTRADAS DE LA CARTELERA")," "),r["\u0275\u0275advance"](8),r["\u0275\u0275textInterpolate1"](" Crear ",r["\u0275\u0275pipeBind1"](18,4,"ENTRADAS DE LA CARTELERA")," "))},directives:[i.a,l.IonContent,l.IonRow,l.IonCol,l.IonCard,l.RouterLinkDelegate,o.i,l.IonIcon,l.IonCardHeader,l.IonCardSubtitle],pipes:[a.TitleCasePipe],styles:[""]}),e})();var m=n("kQh7"),d=n("TIcx"),p=n("fYRX"),u=n("3Pt+");function g(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"ion-card"),r["\u0275\u0275elementStart"](1,"ion-list"),r["\u0275\u0275elementStart"](2,"ion-item",5),r["\u0275\u0275elementStart"](3,"ion-label",6),r["\u0275\u0275elementStart"](4,"b"),r["\u0275\u0275text"](5),r["\u0275\u0275pipe"](6,"titlecase"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"div",7),r["\u0275\u0275text"](8),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](9,"ion-item",5),r["\u0275\u0275elementStart"](10,"ion-label",6),r["\u0275\u0275elementStart"](11,"b"),r["\u0275\u0275text"](12),r["\u0275\u0275pipe"](13,"titlecase"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](14,"div",7),r["\u0275\u0275text"](15),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](16,"ion-footer"),r["\u0275\u0275elementStart"](17,"ion-row"),r["\u0275\u0275elementStart"](18,"ion-col",8),r["\u0275\u0275elementStart"](19,"ion-button",9),r["\u0275\u0275element"](20,"ion-icon",10),r["\u0275\u0275elementStart"](21,"div"),r["\u0275\u0275text"](22,"Editar"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](23,"ion-col",8),r["\u0275\u0275elementStart"](24,"ion-button",11),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](e);const n=t.$implicit;return r["\u0275\u0275nextContext"](2).boarMessagesService.deleteBoardMessage(null==n?null:n.id)})),r["\u0275\u0275element"](25,"ion-icon",12),r["\u0275\u0275elementStart"](26,"div"),r["\u0275\u0275text"](27,"Eliminar"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](6,5,"NOMBRE")),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](null==e?null:e.name),r["\u0275\u0275advance"](4),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](13,7,"C\xd3DIGO")),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](null==e?null:e.code),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("routerLink","/board/"+(null==e?null:e.id)+"/edit")}}function f(e,t){if(1&e&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275template"](1,g,28,9,"ion-card",4),r["\u0275\u0275elementContainerEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngForOf",e.boarMessagesService.boarMessages)}}function v(e,t){1&e&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275elementStart"](1,"ion-item"),r["\u0275\u0275element"](2,"ion-icon",13),r["\u0275\u0275elementStart"](3,"ion-label"),r["\u0275\u0275elementStart"](4,"h2"),r["\u0275\u0275text"](5,"No se encontraron entradas de la cartelera"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"ion-button",14),r["\u0275\u0275text"](7," Crear entradas de la cartelera "),r["\u0275\u0275element"](8,"ion-icon",15),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementContainerEnd"]()),2&e&&(r["\u0275\u0275advance"](6),r["\u0275\u0275property"]("routerLink","/board/create"))}let b=(()=>{class e{constructor(e,t,n,a){this.boarMessagesService=e,this.api=t,this.loading=n,this.splitPanel=a}ngOnInit(){}ionViewWillEnter(){this.splitPanel.show.next(!0),this.boarMessagesService.getBoarMessages()}scrollToTop(){this.content.scrollToTop(300)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](m.a),r["\u0275\u0275directiveInject"](d.a),r["\u0275\u0275directiveInject"](p.a),r["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-board-messages-list"]],viewQuery:function(e,t){var n;1&e&&r["\u0275\u0275viewQuery"](l.IonContent,!0),2&e&&r["\u0275\u0275queryRefresh"](n=r["\u0275\u0275loadQuery"]())&&(t.content=n.first)},decls:7,vars:11,consts:[["primaryLink","board/create","primaryIcon","add-circle-outline",3,"title","primaryText"],["id","pages-content"],["showCancelButton","focus",3,"cancelButtonText","placeholder","ngModel","ionCancel","keyup.enter","ngModelChange"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"item-transparent"],["position","fixed"],[1,"wrap-text"],[1,"ion-text-center"],["color","success","size","small","fill","clear",3,"routerLink"],["name","create-outline"],["color","danger","size","small","fill","clear",3,"click"],["name","trash-outline"],["name","warning-outline","slot","start",1,"text-warning"],["fill","outline","color","success","slot","end",3,"routerLink"],["name","add-circle-outline","slot","end"]],template:function(e,t){1&e&&(r["\u0275\u0275element"](0,"app-main-header",0),r["\u0275\u0275elementStart"](1,"ion-content",1),r["\u0275\u0275elementStart"](2,"ion-searchbar",2),r["\u0275\u0275listener"]("ionCancel",(function(){return t.boarMessagesService.searchValue="",t.boarMessagesService.getBoarMessages()}))("keyup.enter",(function(){return t.boarMessagesService.getBoarMessages()}))("ngModelChange",(function(e){return t.boarMessagesService.searchValue=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](3,f,2,1,"ng-container",3),r["\u0275\u0275pipe"](4,"async"),r["\u0275\u0275template"](5,v,9,1,"ng-container",3),r["\u0275\u0275pipe"](6,"async"),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275propertyInterpolate"]("title","Entradas de la Cartelera"),r["\u0275\u0275propertyInterpolate1"]("primaryText","Crear ","Entradas de la Cartelera",""),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("cancelButtonText","Cancelar")("placeholder","Buscar Entradas de la Cartelera")("ngModel",t.boarMessagesService.searchValue),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",!r["\u0275\u0275pipeBind1"](4,7,t.loading.loading)&&(null==t.boarMessagesService.boarMessages?null:t.boarMessagesService.boarMessages.length)),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",!(r["\u0275\u0275pipeBind1"](6,9,t.loading.loading)||null!=t.boarMessagesService.boarMessages&&t.boarMessagesService.boarMessages.length)))},directives:[i.a,l.IonContent,l.IonSearchbar,l.TextValueAccessor,u.NgControlStatus,u.NgModel,a.NgIf,a.NgForOf,l.IonCard,l.IonList,l.IonItem,l.IonLabel,l.IonFooter,l.IonRow,l.IonCol,l.IonButton,l.RouterLinkDelegate,o.i,l.IonIcon],pipes:[a.AsyncPipe,a.TitleCasePipe],styles:[""]}),e})();var h=n("kJkI");const I=["boarMessagesForm"];function M(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"div",14),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]().$implicit;r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function S(e,t){if(1&e&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275template"](1,M,2,1,"div",13),r["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;r["\u0275\u0275nextContext"]();const n=r["\u0275\u0275reference"](1);r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",null==n.form.controls.name?null:n.form.controls.name.hasError(e.type))}}function E(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"div",14),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]().$implicit;r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function y(e,t){if(1&e&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275template"](1,E,2,1,"div",13),r["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;r["\u0275\u0275nextContext"]();const n=r["\u0275\u0275reference"](1);r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",null==n.form.controls.body?null:n.form.controls.body.hasError(e.type))}}function x(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"div",14),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]().$implicit;r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function C(e,t){if(1&e&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275template"](1,x,2,1,"div",13),r["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;r["\u0275\u0275nextContext"]();const n=r["\u0275\u0275reference"](1);r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",null==n.form.controls.status?null:n.form.controls.status.hasError(e.type))}}function w(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"div",14),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]().$implicit;r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function B(e,t){if(1&e&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275template"](1,w,2,1,"div",13),r["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;r["\u0275\u0275nextContext"]();const n=r["\u0275\u0275reference"](1);r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",null==n.form.controls.repass?null:n.form.controls.repass.hasError(e.type))}}function T(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"div",14),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]().$implicit;r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function k(e,t){if(1&e&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275template"](1,T,2,1,"div",13),r["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;r["\u0275\u0275nextContext"]();const n=r["\u0275\u0275reference"](1);r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",null==n.form.controls.repass?null:n.form.controls.repass.hasError(e.type))}}let F=(()=>{class e{constructor(e,t){this.boarMessagesService=e,this.toTitlecase=t,this.model={},this.validationMessages={name:[{type:"required",message:"El campo "+this.toTitlecase.transform("NOMBRE")+" es obligatorio."}],code:[{type:"required",message:"El campo "+this.toTitlecase.transform("C\xd3DIGO")+" es obligatorio."}],body:[{type:"required",message:"El campo "+this.toTitlecase.transform("CUERPO")+" es obligatorio."}],status:[{type:"required",message:"El campo "+this.toTitlecase.transform("ESTADO")+" es obligatorio."}],notify_to_users:[],notify_to_house_units:[]},this.model={}}ngOnInit(){}ngAfterViewInit(){}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](m.a),r["\u0275\u0275directiveInject"](a.TitleCasePipe))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-boar-messages-form"]],viewQuery:function(e,t){var n;1&e&&r["\u0275\u0275viewQuery"](I,!0),2&e&&r["\u0275\u0275queryRefresh"](n=r["\u0275\u0275loadQuery"]())&&(t.boarMessagesForm=n.first)},inputs:{model:"model"},decls:43,vars:33,consts:[["novalidate","","autocomplete","off"],["boarMessagesForm","ngForm"],[1,"item-transparent"],["type","text","name","name","id","name-field","placeholder","",3,"ngModel","required","ngModelChange"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["position","stacked",2,"font-size","1rem"],["name","act","id","act-field",3,"ngxSummernote","ngModel","ngModelChange"],["name","status","id","status-field","okText","Seleccionar","cancelText","Cancelar",3,"ngModel","required","ngModelChange"],["value","active"],["value","inactive"],["name","notify_to_users","id","notify_to_users-field","slot","end",3,"ngModel","ngModelChange"],["name","notify_to_house_units","id","notify_to_house_units-field","slot","end",3,"ngModel","ngModelChange"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"form",0,1),r["\u0275\u0275elementStart"](2,"ion-item",2),r["\u0275\u0275elementStart"](3,"ion-label"),r["\u0275\u0275text"](4),r["\u0275\u0275pipe"](5,"titlecase"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"ion-input",3),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.name=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"div",4),r["\u0275\u0275template"](8,S,2,1,"ng-container",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](9,"ion-item",2),r["\u0275\u0275elementStart"](10,"ion-label",6),r["\u0275\u0275text"](11),r["\u0275\u0275pipe"](12,"titlecase"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](13,"input",7),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.body=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](14,"div",4),r["\u0275\u0275template"](15,y,2,1,"ng-container",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](16,"ion-item",2),r["\u0275\u0275elementStart"](17,"ion-label"),r["\u0275\u0275text"](18),r["\u0275\u0275pipe"](19,"titlecase"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](20,"ion-select",8),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.status=e})),r["\u0275\u0275elementStart"](21,"ion-select-option",9),r["\u0275\u0275text"](22),r["\u0275\u0275pipe"](23,"titlecase"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](24,"ion-select-option",10),r["\u0275\u0275text"](25),r["\u0275\u0275pipe"](26,"titlecase"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](27,"div",4),r["\u0275\u0275template"](28,C,2,1,"ng-container",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](29,"ion-item",2),r["\u0275\u0275elementStart"](30,"ion-label"),r["\u0275\u0275text"](31),r["\u0275\u0275pipe"](32,"titlecase"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](33,"ion-toggle",11),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.notify_to_users=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](34,"div",4),r["\u0275\u0275template"](35,B,2,1,"ng-container",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](36,"ion-item",2),r["\u0275\u0275elementStart"](37,"ion-label"),r["\u0275\u0275text"](38),r["\u0275\u0275pipe"](39,"titlecase"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](40,"ion-toggle",12),r["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.notify_to_house_units=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](41,"div",4),r["\u0275\u0275template"](42,k,2,1,"ng-container",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](4),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](5,19,"NOMBRE")),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngModel",t.model.name)("required",!0),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngForOf",t.validationMessages.name),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](12,21,"ACTA")),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngModel",t.model.body),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngForOf",t.validationMessages.body),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](19,23,"ESTADO")),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngModel",t.model.status)("required",!0),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](23,25,"Activo")),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](26,27,"Inactivo")),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngForOf",t.validationMessages.status),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](32,29,"notificar a los usuarios")),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngModel",t.model.notify_to_users),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngForOf",t.validationMessages.notify_to_users),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](39,31,"notificar a unidades habitacionales")),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngModel",t.model.notify_to_house_units),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngForOf",t.validationMessages.notify_to_house_units))},directives:[u["\u0275angular_packages_forms_forms_y"],u.NgControlStatusGroup,u.NgForm,l.IonItem,l.IonLabel,l.IonInput,l.TextValueAccessor,u.NgControlStatus,u.NgModel,u.RequiredValidator,a.NgForOf,u.DefaultValueAccessor,h.a,l.IonSelect,l.SelectValueAccessor,l.IonSelectOption,l.IonToggle,l.BooleanValueAccessor,a.NgIf],pipes:[a.TitleCasePipe],styles:[""]}),e})();const P=["boarMessagesForm"];function _(e,t){1&e&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275text"](1,"Guardar"),r["\u0275\u0275elementContainerEnd"]())}let L=(()=>{class e{constructor(e,t,n,a){this.boarMessagesService=e,this.route=t,this.platform=n,this.splitPanel=a,this.id=null,this.formValid=!1}ngOnInit(){this.clearBoarMessage()}ionViewWillEnter(){this.splitPanel.show.next(!0)}ngAfterViewInit(){this.boarMessagesForm.boarMessagesForm.valueChanges.subscribe(e=>{this.boarMessagesService.boarMessagesFormValid.next(this.boarMessagesForm.boarMessagesForm.valid)})}clearBoarMessage(){console.log("clear"),this.boarMessagesService.createBoarMessage(),this.boarMessagesService.boarMessage={}}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](m.a),r["\u0275\u0275directiveInject"](o.a),r["\u0275\u0275directiveInject"](l.Platform),r["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-boar-messages-create"]],viewQuery:function(e,t){var n;1&e&&r["\u0275\u0275viewQuery"](P,!0),2&e&&r["\u0275\u0275queryRefresh"](n=r["\u0275\u0275loadQuery"]())&&(t.boarMessagesForm=n.first)},decls:15,vars:8,consts:[["slot","start"],[3,"text","icon"],["slot","primary"],["color","success","fill","clear",3,"disabled","click"],[4,"ngIf"],["slot","end","color","success","name","save-outline"],["fullscreen",""],[3,"model"],["boarMessagesForm",""]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"ion-header"),r["\u0275\u0275elementStart"](1,"ion-toolbar"),r["\u0275\u0275elementStart"](2,"ion-buttons",0),r["\u0275\u0275element"](3,"ion-back-button",1),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"ion-buttons",2),r["\u0275\u0275elementStart"](5,"ion-button",3),r["\u0275\u0275listener"]("click",(function(){return t.boarMessagesService.storeBoarMessage()})),r["\u0275\u0275template"](6,_,2,0,"ng-container",4),r["\u0275\u0275element"](7,"ion-icon",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](8,"ion-title"),r["\u0275\u0275text"](9),r["\u0275\u0275pipe"](10,"titlecase"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](11,"ion-content",6),r["\u0275\u0275elementStart"](12,"ion-card"),r["\u0275\u0275element"](13,"app-boar-messages-form",7,8),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("text","")("icon","arrow-back-outline"),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("disabled",!t.boarMessagesService.boarMessagesFormValid.value),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",!t.platform.is("mobile")),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate1"]("Crear ",r["\u0275\u0275pipeBind1"](10,6,"Entrada de la cartelera"),""),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("model",t.boarMessagesService.boarMessage))},directives:[l.IonHeader,l.IonToolbar,l.IonButtons,l.IonBackButton,l.IonBackButtonDelegate,l.IonButton,a.NgIf,l.IonIcon,l.IonTitle,l.IonContent,l.IonCard,F],pipes:[a.TitleCasePipe],styles:[""]}),e})();const j=["boarMessagesForm"];function V(e,t){1&e&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275text"](1,"Guardar"),r["\u0275\u0275elementContainerEnd"]())}let O=(()=>{class e{constructor(e,t,n,a){this.boarMessagesService=e,this.route=t,this.platform=n,this.splitPanel=a,this.id=null,this.model=null}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.boarMessagesService.editBoarMessage(this.id)}ionViewWillEnter(){this.splitPanel.show.next(!0)}ngAfterViewInit(){this.boarMessagesForm.boarMessagesForm.valueChanges.subscribe(e=>{this.boarMessagesService.boarMessagesFormValid.next(this.boarMessagesForm.boarMessagesForm.valid)})}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](m.a),r["\u0275\u0275directiveInject"](o.a),r["\u0275\u0275directiveInject"](l.Platform),r["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-boar-messages-edit"]],viewQuery:function(e,t){var n;1&e&&r["\u0275\u0275viewQuery"](j,!0),2&e&&r["\u0275\u0275queryRefresh"](n=r["\u0275\u0275loadQuery"]())&&(t.boarMessagesForm=n.first)},decls:15,vars:9,consts:[["slot","start"],[3,"text","icon"],["slot","primary"],["color","success","fill","clear",3,"disabled","click"],[4,"ngIf"],["slot","end","color","success","name","save-outline"],["fullscreen",""],[3,"model"],["boarMessagesForm",""]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"ion-header"),r["\u0275\u0275elementStart"](1,"ion-toolbar"),r["\u0275\u0275elementStart"](2,"ion-buttons",0),r["\u0275\u0275element"](3,"ion-back-button",1),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"ion-buttons",2),r["\u0275\u0275elementStart"](5,"ion-button",3),r["\u0275\u0275listener"]("click",(function(){return t.boarMessagesService.updateBoarMessage()})),r["\u0275\u0275template"](6,V,2,0,"ng-container",4),r["\u0275\u0275element"](7,"ion-icon",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](8,"ion-title"),r["\u0275\u0275text"](9),r["\u0275\u0275pipe"](10,"titlecase"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](11,"ion-content",6),r["\u0275\u0275elementStart"](12,"ion-card"),r["\u0275\u0275element"](13,"app-boar-messages-form",7,8),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("text","")("icon","arrow-back-outline"),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("disabled",!t.boarMessagesService.boarMessagesFormValid.value),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",!t.platform.is("mobile")),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate2"]("Editar ",r["\u0275\u0275pipeBind1"](10,7,"Entrada de la cartelera"),": ",null==t.boarMessagesService.boarMessage?null:t.boarMessagesService.boarMessage.name,""),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("model",t.boarMessagesService.boarMessage))},directives:[l.IonHeader,l.IonToolbar,l.IonButtons,l.IonBackButton,l.IonBackButtonDelegate,l.IonButton,a.NgIf,l.IonIcon,l.IonTitle,l.IonContent,l.IonCard,F],pipes:[a.TitleCasePipe],styles:[""]}),e})();var A=n("Z1/u");const N=[{path:"",component:c},{path:"list",component:b},{path:"create",component:L},{path:":id/edit",component:O},{path:":id/show",component:(()=>{class e{constructor(e,t,n,a){this.boarMessagesService=e,this.route=t,this.platform=n,this.splitPanel=a,this.id=null,this.model=null}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.boarMessagesService.editBoarMessage(this.id)}ionViewWillEnter(){this.splitPanel.show.next(!0)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](m.a),r["\u0275\u0275directiveInject"](o.a),r["\u0275\u0275directiveInject"](l.Platform),r["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-boar-messages-show"]],decls:15,vars:7,consts:[[3,"title"],["id","pages-content"],["collapse","condense"],["size","large"],[3,"ngxSummernoteView"]],template:function(e,t){1&e&&(r["\u0275\u0275element"](0,"app-main-header",0),r["\u0275\u0275elementStart"](1,"ion-content",1),r["\u0275\u0275elementStart"](2,"ion-header",2),r["\u0275\u0275elementStart"](3,"ion-toolbar"),r["\u0275\u0275elementStart"](4,"ion-title",3),r["\u0275\u0275text"](5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"ion-grid"),r["\u0275\u0275elementStart"](7,"ion-row"),r["\u0275\u0275elementStart"](8,"ion-col"),r["\u0275\u0275elementStart"](9,"span"),r["\u0275\u0275text"](10),r["\u0275\u0275pipe"](11,"dateFormat"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](12,"br"),r["\u0275\u0275element"](13,"br"),r["\u0275\u0275element"](14,"div",4),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275propertyInterpolate"]("title",null==t.boarMessagesService.boarMessage?null:t.boarMessagesService.boarMessage.name),r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate"](null==t.boarMessagesService.boarMessage?null:t.boarMessagesService.boarMessage.name),r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate1"]("Publicado el ",r["\u0275\u0275pipeBind2"](11,4,null==t.boarMessagesService.boarMessage?null:t.boarMessagesService.boarMessage.created_at,"DD/MM/YYYY"),""),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngxSummernoteView",null==t.boarMessagesService.boarMessage?null:t.boarMessagesService.boarMessage.body))},directives:[i.a,l.IonContent,l.IonHeader,l.IonToolbar,l.IonTitle,l.IonGrid,l.IonRow,l.IonCol,h.c],pipes:[A.a],styles:[""]}),e})()}];let R=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.l.forChild(N)],o.l]}),e})();var D=n("pk6O");let q=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.CommonModule,a.CommonModule,u.FormsModule,l.IonicModule,D.a,R]]}),e})()},yvdN:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("fXoL"),o=n("TEn/"),r=n("1HhC"),s=n("ofXK"),i=n("tyNb");function l(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"ion-buttons",4),a["\u0275\u0275elementStart"](1,"ion-menu-toggle",5),a["\u0275\u0275elementStart"](2,"ion-button",6),a["\u0275\u0275listener"]("click",(function(){return a["\u0275\u0275restoreView"](e),a["\u0275\u0275nextContext"]().toggleMenu()})),a["\u0275\u0275element"](3,"ion-icon",7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}}function c(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275text"](1),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=a["\u0275\u0275nextContext"](2);a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](e.primaryText)}}function m(e,t){if(1&e&&a["\u0275\u0275element"](0,"ion-icon",11),2&e){const e=a["\u0275\u0275nextContext"](2);a["\u0275\u0275property"]("name",e.primaryIcon)}}function d(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"ion-buttons",8),a["\u0275\u0275elementStart"](1,"ion-button",9),a["\u0275\u0275template"](2,c,2,1,"ng-container",3),a["\u0275\u0275template"](3,m,1,1,"ion-icon",10),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("routerLink","/"+e.primaryLink),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",e.primaryText&&!e.platform.is("mobile")),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",e.primaryIcon)}}function p(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"ion-title"),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](e.title)}}let u=(()=>{class e{constructor(e,t){this.platform=e,this.splitPanel=t,this.title="",this.primaryLink="",this.primaryIcon="",this.primaryText="",this.showSplitPanelButton=!0}ngOnInit(){this.splitPanel.show.subscribe(e=>{})}toggleMenu(){const e=document.querySelector("ion-split-pane"),t="(min-width: 992px)";if(!(window.innerWidth>=992))return e.querySelector("ion-menu").open();e.when=!(e.when===t)&&t}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](o.Platform),a["\u0275\u0275directiveInject"](r.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-main-header"]],inputs:{title:"title",primaryLink:"primaryLink",primaryIcon:"primaryIcon",primaryText:"primaryText",showSplitPanelButton:"showSplitPanelButton"},decls:5,vars:4,consts:[[3,"translucent"],["slot","start",4,"ngIf"],["slot","primary",4,"ngIf"],[4,"ngIf"],["slot","start"],["auto-hide","false","menu","main-menu"],[3,"click"],["slot","icon-only","name","menu"],["slot","primary"],["color","success",3,"routerLink"],["slot","end",3,"name",4,"ngIf"],["slot","end",3,"name"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"ion-header",0),a["\u0275\u0275elementStart"](1,"ion-toolbar"),a["\u0275\u0275template"](2,l,4,0,"ion-buttons",1),a["\u0275\u0275template"](3,d,4,3,"ion-buttons",2),a["\u0275\u0275template"](4,p,2,1,"ion-title",3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275property"]("translucent",!0),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngIf",t.splitPanel.show.value),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",t.primaryLink),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",t.title))},directives:[o.IonHeader,o.IonToolbar,s.NgIf,o.IonButtons,o.IonMenuToggle,o.IonButton,o.IonIcon,i.i,o.RouterLinkDelegate,o.IonTitle],styles:[""]}),e})()}}]);