(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{UEel:function(e,t,n){"use strict";n.r(t),n.d(t,"FilesPageModule",(function(){return z}));var i=n("ofXK"),l=n("3Pt+"),o=n("TEn/"),r=n("pk6O"),a=n("tyNb"),s=n("fXoL"),c=n("1HhC"),m=n("yvdN");let d=(()=>{class e{constructor(e){this.splitPanel=e}ngOnInit(){}ionViewWillEnter(){this.splitPanel.show.next(!0)}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-files"]],decls:19,vars:6,consts:[["title","JUNTAS ARCHIVOS DE AGENDAS"],["size-md","3","size-sm","6","size-xs","12"],["routerLink","/files/list"],[2,"height","120px","width","100%","display","flex","align-items","center","justify-content","center"],["name","list-circle-outline","color","primary",1,"icon-m"],[1,"ion-text-center"],["routerLink","/files/create"],["name","add-circle-outline","color","success",1,"icon-m"]],template:function(e,t){1&e&&(s["\u0275\u0275element"](0,"app-main-header",0),s["\u0275\u0275elementStart"](1,"ion-content"),s["\u0275\u0275elementStart"](2,"ion-row"),s["\u0275\u0275elementStart"](3,"ion-col",1),s["\u0275\u0275elementStart"](4,"ion-card",2),s["\u0275\u0275elementStart"](5,"div",3),s["\u0275\u0275element"](6,"ion-icon",4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"ion-card-header"),s["\u0275\u0275elementStart"](8,"ion-card-subtitle",5),s["\u0275\u0275text"](9),s["\u0275\u0275pipe"](10,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"ion-col",1),s["\u0275\u0275elementStart"](12,"ion-card",6),s["\u0275\u0275elementStart"](13,"div",3),s["\u0275\u0275element"](14,"ion-icon",7),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"ion-card-header"),s["\u0275\u0275elementStart"](16,"ion-card-subtitle",5),s["\u0275\u0275text"](17),s["\u0275\u0275pipe"](18,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](9),s["\u0275\u0275textInterpolate1"](" Listar ",s["\u0275\u0275pipeBind1"](10,2,"JUNTAS ARCHIVOS DE AGENDAS")," "),s["\u0275\u0275advance"](8),s["\u0275\u0275textInterpolate1"](" Crear ",s["\u0275\u0275pipeBind1"](18,4,"JUNTAS ARCHIVOS DE AGENDAS")," "))},directives:[m.a,o.IonContent,o.IonRow,o.IonCol,o.IonCard,o.RouterLinkDelegate,a.i,o.IonIcon,o.IonCardHeader,o.IonCardSubtitle],pipes:[i.TitleCasePipe],styles:[""]}),e})();var p=n("mrSG"),f=n("2Vo4"),u=n("TIcx"),v=n("EgAa"),g=n("PWdp"),S=n("Ezvo");let E=(()=>{class e{constructor(e,t,n,i,l){this.api=e,this.alert=t,this.toast=n,this.router=i,this.navigation=l,this.filesUrl="files",this.filesFormValid=new f.a(!1),this.files=[],this.file={},this.fileLists={},this.searchValue="",this.perPage=10,this.meta=null,this.page=1,this.pagesContent=document.getElementById("pages-content")}getFiles(e=this.page,t=this.perPage){this.api.get(this.filesUrl+"?page="+e+"&perPage="+t+"&q[name:cont]="+this.searchValue).subscribe(e=>{document.getElementById("pages-content").scrollToTop(300),this.files=e.data,this.fileLists=e.lists,this.meta=e.meta},e=>{console.error(e)})}editFile(e){this.api.get(this.filesUrl+"/"+e+"/edit").subscribe(e=>{this.file=e.data.model,this.fileLists=e.lists},e=>{console.error(e)})}updateFile(){this.api.put(this.filesUrl+"/"+this.file.id,{model:this.file,pivots:{}}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.navigation.back(),this.getFiles(1)})}createFile(){this.api.get(this.filesUrl+"/create").subscribe(e=>{this.file={},this.fileLists=e.lists})}storeFile(){this.api.post(this.filesUrl,{model:this.file,pivots:{}}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.navigation.back(),this.getFiles(1)})}deleteFile(e){return Object(p.a)(this,void 0,void 0,(function*(){(yield this.alert.confirmation("Desea eliminar el item?"))&&this.api.delete(this.filesUrl+"/"+e,{}).subscribe(e=>{this.toast.present(e.message,"toast-success","top"),this.getFiles(1)})}))}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](u.a),s["\u0275\u0275inject"](v.a),s["\u0275\u0275inject"](g.a),s["\u0275\u0275inject"](a.h),s["\u0275\u0275inject"](S.a))},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const h=["filesForm"];function I(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",13),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]().$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function x(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,I,2,1,"div",12),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275nextContext"]();const n=s["\u0275\u0275reference"](1);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",null==n.form.controls.name?null:n.form.controls.name.hasError(e.type))}}function y(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",13),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]().$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function C(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,y,2,1,"div",12),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275nextContext"]();const n=s["\u0275\u0275reference"](1);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",null==n.form.controls.file?null:n.form.controls.file.hasError(e.type))}}function b(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",13),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]().$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function A(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,b,2,1,"div",12),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275nextContext"]();const n=s["\u0275\u0275reference"](1);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",null==n.form.controls.extension?null:n.form.controls.extension.hasError(e.type))}}function F(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",13),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]().$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function M(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,F,2,1,"div",12),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275nextContext"]();const n=s["\u0275\u0275reference"](1);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",null==n.form.controls.mime?null:n.form.controls.mime.hasError(e.type))}}function w(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",13),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]().$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function B(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,w,2,1,"div",12),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275nextContext"]();const n=s["\u0275\u0275reference"](1);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",null==n.form.controls.url?null:n.form.controls.url.hasError(e.type))}}function T(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",13),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]().$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function N(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,T,2,1,"div",12),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275nextContext"]();const n=s["\u0275\u0275reference"](1);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",null==n.form.controls.fileable_id?null:n.form.controls.fileable_id.hasError(e.type))}}function V(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",13),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]().$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",e.message," ")}}function O(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,V,2,1,"div",12),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275nextContext"]();const n=s["\u0275\u0275reference"](1);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",null==n.form.controls.fileable_type?null:n.form.controls.fileable_type.hasError(e.type))}}let k=(()=>{class e{constructor(e,t){this.filesService=e,this.toTitlecase=t,this.model={},this.validationMessages={name:[{type:"required",message:"El campo "+this.toTitlecase.transform("NOMBRE")+" es obligatorio."}],file:[{type:"required",message:"El campo "+this.toTitlecase.transform("ARCHIVO")+" es obligatorio."}],extension:[{type:"required",message:"El campo "+this.toTitlecase.transform("EXTENSION")+" es obligatorio."}],mime:[{type:"required",message:"El campo "+this.toTitlecase.transform("MIME")+" es obligatorio."}],url:[{type:"required",message:"El campo "+this.toTitlecase.transform("URL")+" es obligatorio."}],fileable_id:[{type:"required",message:"El campo "+this.toTitlecase.transform("ARCHIVABLE ID")+" es obligatorio."}],fileable_type:[{type:"required",message:"El campo "+this.toTitlecase.transform("ARCHIVABLE TIPO")+" es obligatorio."}]}}ngOnInit(){}ngAfterViewInit(){}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](E),s["\u0275\u0275directiveInject"](i.TitleCasePipe))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-files-form"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275viewQuery"](h,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.filesForm=n.first)},inputs:{model:"model"},decls:51,vars:37,consts:[["novalidate","","autocomplete","off"],["filesForm","ngForm"],[1,"item-transparent"],["type","text","name","name","id","name-field","placeholder","",3,"ngModel","required","ngModelChange"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["type","text","name","file","id","file-field","placeholder","",3,"ngModel","required","ngModelChange"],["type","text","name","extension","id","extension-field","placeholder","",3,"ngModel","ngModelChange"],["type","text","name","mime","id","mime-field","placeholder","",3,"ngModel","ngModelChange"],["type","text","name","url","id","url-field","placeholder","",3,"ngModel","ngModelChange"],["type","number","name","fileable_id","id","fileable_id-field","placeholder","",3,"ngModel","ngModelChange"],["type","text","name","fileable_type","id","fileable_type-field","placeholder","",3,"ngModel","ngModelChange"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"form",0,1),s["\u0275\u0275elementStart"](2,"ion-item",2),s["\u0275\u0275elementStart"](3,"ion-label"),s["\u0275\u0275text"](4),s["\u0275\u0275pipe"](5,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"ion-input",3),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.name=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"div",4),s["\u0275\u0275template"](8,x,2,1,"ng-container",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"ion-item",2),s["\u0275\u0275elementStart"](10,"ion-label"),s["\u0275\u0275text"](11),s["\u0275\u0275pipe"](12,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](13,"ion-input",6),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.file=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](14,"div",4),s["\u0275\u0275template"](15,C,2,1,"ng-container",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](16,"ion-item",2),s["\u0275\u0275elementStart"](17,"ion-label"),s["\u0275\u0275text"](18),s["\u0275\u0275pipe"](19,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](20,"ion-input",7),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.extension=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](21,"div",4),s["\u0275\u0275template"](22,A,2,1,"ng-container",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](23,"ion-item",2),s["\u0275\u0275elementStart"](24,"ion-label"),s["\u0275\u0275text"](25),s["\u0275\u0275pipe"](26,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](27,"ion-input",8),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.mime=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](28,"div",4),s["\u0275\u0275template"](29,M,2,1,"ng-container",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](30,"ion-item",2),s["\u0275\u0275elementStart"](31,"ion-label"),s["\u0275\u0275text"](32),s["\u0275\u0275pipe"](33,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](34,"ion-input",9),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.url=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](35,"div",4),s["\u0275\u0275template"](36,B,2,1,"ng-container",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](37,"ion-item",2),s["\u0275\u0275elementStart"](38,"ion-label"),s["\u0275\u0275text"](39),s["\u0275\u0275pipe"](40,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](41,"ion-input",10),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.fileable_id=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](42,"div",4),s["\u0275\u0275template"](43,N,2,1,"ng-container",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](44,"ion-item",2),s["\u0275\u0275elementStart"](45,"ion-label"),s["\u0275\u0275text"](46),s["\u0275\u0275pipe"](47,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](48,"ion-input",11),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model.fileable_type=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](49,"div",4),s["\u0275\u0275template"](50,O,2,1,"ng-container",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](4),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](5,23,"NOMBRE")),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngModel",t.model.name)("required",!0),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngForOf",t.validationMessages.name),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](12,25,"ARCHIVO")),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngModel",t.model.file)("required",!0),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngForOf",t.validationMessages.file),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](19,27,"EXTENSION")),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngModel",t.model.extension),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngForOf",t.validationMessages.extension),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](26,29,"MIME")),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngModel",t.model.mime),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngForOf",t.validationMessages.mime),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](33,31,"URL")),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngModel",t.model.url),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngForOf",t.validationMessages.url),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](40,33,"ARCHIVABLE ID")),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngModel",t.model.fileable_id),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngForOf",t.validationMessages.fileable_id),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](47,35,"ARCHIVABLE TIPO")),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngModel",t.model.fileable_type),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngForOf",t.validationMessages.fileable_type))},directives:[l["\u0275angular_packages_forms_forms_y"],l.NgControlStatusGroup,l.NgForm,o.IonItem,o.IonLabel,o.IonInput,o.TextValueAccessor,l.NgControlStatus,l.NgModel,l.RequiredValidator,i.NgForOf,o.NumericValueAccessor,i.NgIf],pipes:[i.TitleCasePipe],styles:[""]}),e})();const R=["fileForm"];function P(e,t){1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275text"](1,"Guardar"),s["\u0275\u0275elementContainerEnd"]())}let _=(()=>{class e{constructor(e,t,n,i){this.filesService=e,this.route=t,this.platform=n,this.splitPanel=i,this.id=null,this.model=null}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.filesService.editFile(this.id)}ionViewWillEnter(){this.splitPanel.show.next(!0)}ngAfterViewInit(){this.fileForm.filesForm.valueChanges.subscribe(e=>{this.filesService.filesFormValid.next(this.fileForm.filesForm.valid)})}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](E),s["\u0275\u0275directiveInject"](a.a),s["\u0275\u0275directiveInject"](o.Platform),s["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-files-edit"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275viewQuery"](R,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.fileForm=n.first)},decls:15,vars:9,consts:[["slot","start"],[3,"text","icon"],["slot","primary"],["color","success","fill","clear",3,"disabled","click"],[4,"ngIf"],["slot","end","color","success","name","save-outline"],["fullscreen",""],[3,"model"],["fileForm",""]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"ion-header"),s["\u0275\u0275elementStart"](1,"ion-toolbar"),s["\u0275\u0275elementStart"](2,"ion-buttons",0),s["\u0275\u0275element"](3,"ion-back-button",1),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"ion-buttons",2),s["\u0275\u0275elementStart"](5,"ion-button",3),s["\u0275\u0275listener"]("click",(function(){return t.filesService.updateFile()})),s["\u0275\u0275template"](6,P,2,0,"ng-container",4),s["\u0275\u0275element"](7,"ion-icon",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"ion-title"),s["\u0275\u0275text"](9),s["\u0275\u0275pipe"](10,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"ion-content",6),s["\u0275\u0275elementStart"](12,"ion-card"),s["\u0275\u0275element"](13,"app-files-form",7,8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("text","")("icon","arrow-back-outline"),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("disabled",!t.filesService.filesFormValid.value),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",!t.platform.is("mobile")),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate2"]("Editar ",s["\u0275\u0275pipeBind1"](10,7,"JUNTAS ARCHIVOS DE AGENDAS"),": ",null==t.filesService.file?null:t.filesService.file.name,""),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("model",t.filesService.file))},directives:[o.IonHeader,o.IonToolbar,o.IonButtons,o.IonBackButton,o.IonBackButtonDelegate,o.IonButton,i.NgIf,o.IonIcon,o.IonTitle,o.IonContent,o.IonCard,k],pipes:[i.TitleCasePipe],styles:[""]}),e})();const D=["fileForm"];function L(e,t){1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275text"](1,"Guardar"),s["\u0275\u0275elementContainerEnd"]())}let j=(()=>{class e{constructor(e,t,n,i){this.filesService=e,this.route=t,this.platform=n,this.splitPanel=i,this.id=null,this.formValid=!1}ngOnInit(){this.clearPosts()}ionViewWillEnter(){this.splitPanel.show.next(!0)}ngAfterViewInit(){this.fileForm.filesForm.valueChanges.subscribe(e=>{this.filesService.filesFormValid.next(this.fileForm.filesForm.valid)})}clearPosts(){console.log("clear"),this.filesService.createFile(),this.filesService.file={}}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](E),s["\u0275\u0275directiveInject"](a.a),s["\u0275\u0275directiveInject"](o.Platform),s["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-files-create"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275viewQuery"](D,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.fileForm=n.first)},decls:15,vars:8,consts:[["slot","start"],[3,"text","icon"],["slot","primary"],["color","success","fill","clear",3,"disabled","click"],[4,"ngIf"],["slot","end","color","success","name","save-outline"],["fullscreen",""],[3,"model"],["fileForm",""]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"ion-header"),s["\u0275\u0275elementStart"](1,"ion-toolbar"),s["\u0275\u0275elementStart"](2,"ion-buttons",0),s["\u0275\u0275element"](3,"ion-back-button",1),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"ion-buttons",2),s["\u0275\u0275elementStart"](5,"ion-button",3),s["\u0275\u0275listener"]("click",(function(){return t.filesService.storeFile()})),s["\u0275\u0275template"](6,L,2,0,"ng-container",4),s["\u0275\u0275element"](7,"ion-icon",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"ion-title"),s["\u0275\u0275text"](9),s["\u0275\u0275pipe"](10,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"ion-content",6),s["\u0275\u0275elementStart"](12,"ion-card"),s["\u0275\u0275element"](13,"app-files-form",7,8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("text","")("icon","arrow-back-outline"),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("disabled",!t.filesService.filesFormValid.value),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",!t.platform.is("mobile")),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"]("Crear ",s["\u0275\u0275pipeBind1"](10,6,"JUNTAS ARCHIVOS DE AGENDAS"),""),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("model",t.filesService.file))},directives:[o.IonHeader,o.IonToolbar,o.IonButtons,o.IonBackButton,o.IonBackButtonDelegate,o.IonButton,i.NgIf,o.IonIcon,o.IonTitle,o.IonContent,o.IonCard,k],pipes:[i.TitleCasePipe],styles:[""]}),e})();var H=n("fYRX");function U(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"ion-card"),s["\u0275\u0275elementStart"](1,"ion-list"),s["\u0275\u0275elementStart"](2,"ion-item",6),s["\u0275\u0275elementStart"](3,"ion-label",7),s["\u0275\u0275elementStart"](4,"b"),s["\u0275\u0275text"](5),s["\u0275\u0275pipe"](6,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"div",8),s["\u0275\u0275text"](8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"ion-item",6),s["\u0275\u0275elementStart"](10,"ion-label",7),s["\u0275\u0275elementStart"](11,"b"),s["\u0275\u0275text"](12),s["\u0275\u0275pipe"](13,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](14,"div",8),s["\u0275\u0275text"](15),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](16,"ion-item",6),s["\u0275\u0275elementStart"](17,"ion-label",7),s["\u0275\u0275elementStart"](18,"b"),s["\u0275\u0275text"](19),s["\u0275\u0275pipe"](20,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](21,"div",8),s["\u0275\u0275text"](22),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](23,"ion-item",6),s["\u0275\u0275elementStart"](24,"ion-label",7),s["\u0275\u0275elementStart"](25,"b"),s["\u0275\u0275text"](26),s["\u0275\u0275pipe"](27,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](28,"div",8),s["\u0275\u0275text"](29),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](30,"ion-item",6),s["\u0275\u0275elementStart"](31,"ion-label",7),s["\u0275\u0275elementStart"](32,"b"),s["\u0275\u0275text"](33),s["\u0275\u0275pipe"](34,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](35,"div",8),s["\u0275\u0275text"](36),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](37,"ion-item",6),s["\u0275\u0275elementStart"](38,"ion-label",7),s["\u0275\u0275elementStart"](39,"b"),s["\u0275\u0275text"](40),s["\u0275\u0275pipe"](41,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](42,"div",8),s["\u0275\u0275text"](43),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](44,"ion-item",6),s["\u0275\u0275elementStart"](45,"ion-label",7),s["\u0275\u0275elementStart"](46,"b"),s["\u0275\u0275text"](47),s["\u0275\u0275pipe"](48,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](49,"div",8),s["\u0275\u0275text"](50),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](51,"ion-footer"),s["\u0275\u0275elementStart"](52,"ion-row"),s["\u0275\u0275elementStart"](53,"ion-col",9),s["\u0275\u0275elementStart"](54,"ion-button",10),s["\u0275\u0275element"](55,"ion-icon",11),s["\u0275\u0275elementStart"](56,"div"),s["\u0275\u0275text"](57,"Editar"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](58,"ion-col",9),s["\u0275\u0275elementStart"](59,"ion-button",12),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](e);const n=t.$implicit;return s["\u0275\u0275nextContext"](2).filesService.deleteFile(null==n?null:n.id)})),s["\u0275\u0275element"](60,"ion-icon",13),s["\u0275\u0275elementStart"](61,"div"),s["\u0275\u0275text"](62,"Eliminar"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](6,15,"NOMBRE")),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](null==e?null:e.name),s["\u0275\u0275advance"](4),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](13,17,"ARCHIVO")),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](null==e?null:e.file),s["\u0275\u0275advance"](4),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](20,19,"EXTENSION")),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](null==e?null:e.extension),s["\u0275\u0275advance"](4),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](27,21,"MIME")),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](null==e?null:e.mime),s["\u0275\u0275advance"](4),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](34,23,"URL")),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](null==e?null:e.url),s["\u0275\u0275advance"](4),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](41,25,"ARCHIVABLE ID")),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](null==e?null:e.fileable_id),s["\u0275\u0275advance"](4),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](48,27,"ARCHIVABLE TIPO")),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate"](null==e?null:e.fileable_type),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("routerLink","/files/"+(null==e?null:e.id)+"/edit")}}function q(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,U,63,29,"ion-card",5),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",e.filesService.files)}}function $(e,t){1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275elementStart"](1,"ion-item"),s["\u0275\u0275element"](2,"ion-icon",14),s["\u0275\u0275elementStart"](3,"ion-label"),s["\u0275\u0275elementStart"](4,"h2"),s["\u0275\u0275text"](5),s["\u0275\u0275pipe"](6,"titlecase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"ion-button",15),s["\u0275\u0275text"](8),s["\u0275\u0275pipe"](9,"titlecase"),s["\u0275\u0275element"](10,"ion-icon",16),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementContainerEnd"]()),2&e&&(s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate1"]("No se encontraron ",s["\u0275\u0275pipeBind1"](6,3,"JUNTAS ARCHIVOS DE AGENDAS"),""),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("routerLink","/files/create"),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" Crear ",s["\u0275\u0275pipeBind1"](9,5,"JUNTAS ARCHIVOS DE AGENDAS")," "))}function G(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"ion-row"),s["\u0275\u0275elementStart"](1,"ion-col",17),s["\u0275\u0275elementStart"](2,"ion-button",18),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](e);const t=s["\u0275\u0275nextContext"]();return t.filesService.getFiles(t.filesService.meta.current_page-1)})),s["\u0275\u0275element"](3,"ion-icon",19),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"ion-button",20),s["\u0275\u0275text"](5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"ion-button",18),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](e);const t=s["\u0275\u0275nextContext"]();return t.filesService.getFiles(t.filesService.meta.current_page+1)})),s["\u0275\u0275element"](7,"ion-icon",21),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("disabled",1==e.filesService.meta.current_page),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("disabled",!0),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate5"](" Pag: ",e.filesService.meta.current_page," /",e.filesService.meta.last_page," ",e.filesService.meta.from,"-",e.filesService.meta.to," /",e.filesService.meta.total," "),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("disabled",e.filesService.meta.current_page==e.filesService.meta.last_page)}}const J=[{path:"",component:d},{path:"list",component:(()=>{class e{constructor(e,t,n,i){this.filesService=e,this.api=t,this.loading=n,this.splitPanel=i}ngOnInit(){this.filesService.getFiles()}ionViewWillEnter(){this.splitPanel.show.next(!0)}scrollToTop(){this.content.scrollToTop(300)}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](E),s["\u0275\u0275directiveInject"](u.a),s["\u0275\u0275directiveInject"](H.a),s["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-files-list"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275viewQuery"](o.IonContent,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.content=n.first)},decls:12,vars:18,consts:[["primaryLink","files/create","primaryIcon","add-circle-outline",3,"title","primaryText"],["id","pages-content"],["showCancelButton","focus",3,"cancelButtonText","placeholder","ngModel","ionCancel","keyup.enter","ngModelChange"],[4,"ngIf"],[1,"lists-footer"],[4,"ngFor","ngForOf"],[1,"item-transparent"],["position","fixed"],[1,"wrap-text"],[1,"ion-text-center"],["color","success","size","small","fill","clear",3,"routerLink"],["name","create-outline"],["color","danger","size","small","fill","clear",3,"click"],["name","trash-outline"],["name","warning-outline","slot","start",1,"text-warning"],["fill","outline","color","success","slot","end",3,"routerLink"],["name","add-circle-outline","slot","end"],["size","12",1,"ion-text-center"],["fill","clear",3,"disabled","click"],["slot","end","name","play-outline",2,"transform","rotate(180deg)"],["fill","clear",3,"disabled"],["slot","start","name","play-outline"]],template:function(e,t){1&e&&(s["\u0275\u0275element"](0,"app-main-header",0),s["\u0275\u0275pipe"](1,"titlecase"),s["\u0275\u0275pipe"](2,"lowercase"),s["\u0275\u0275elementStart"](3,"ion-content",1),s["\u0275\u0275elementStart"](4,"ion-searchbar",2),s["\u0275\u0275listener"]("ionCancel",(function(){return t.filesService.searchValue="",t.filesService.getFiles()}))("keyup.enter",(function(){return t.filesService.getFiles()}))("ngModelChange",(function(e){return t.filesService.searchValue=e})),s["\u0275\u0275pipe"](5,"lowercase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](6,q,2,1,"ng-container",3),s["\u0275\u0275pipe"](7,"async"),s["\u0275\u0275template"](8,$,11,7,"ng-container",3),s["\u0275\u0275pipe"](9,"async"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"ion-footer",4),s["\u0275\u0275template"](11,G,8,8,"ion-row",3),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275propertyInterpolate"]("title",s["\u0275\u0275pipeBind1"](1,8,"JUNTAS ARCHIVOS DE AGENDAS")),s["\u0275\u0275propertyInterpolate1"]("primaryText","Crear ",s["\u0275\u0275pipeBind1"](2,10,"JUNTAS ARCHIVOS DE AGENDAS"),""),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("cancelButtonText","Cancelar")("placeholder","Buscar "+s["\u0275\u0275pipeBind1"](5,12,"JUNTAS ARCHIVOS DE AGENDAS"))("ngModel",t.filesService.searchValue),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",!s["\u0275\u0275pipeBind1"](7,14,t.loading.loading)&&(null==t.filesService.files?null:t.filesService.files.length)),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",!(s["\u0275\u0275pipeBind1"](9,16,t.loading.loading)||null!=t.filesService.files&&t.filesService.files.length)),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngIf",t.filesService.meta))},directives:[m.a,o.IonContent,o.IonSearchbar,o.TextValueAccessor,l.NgControlStatus,l.NgModel,i.NgIf,o.IonFooter,i.NgForOf,o.IonCard,o.IonList,o.IonItem,o.IonLabel,o.IonRow,o.IonCol,o.IonButton,o.RouterLinkDelegate,a.i,o.IonIcon],pipes:[i.TitleCasePipe,i.LowerCasePipe,i.AsyncPipe],styles:[""]}),e})()},{path:"create",component:j},{path:":id/edit",component:_}];let Q=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.l.forChild(J)],a.l]}),e})(),z=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.CommonModule,l.FormsModule,o.IonicModule,r.a,Q]]}),e})()}}]);