!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{KcLm:function(t,o,i){"use strict";i.r(o),i.d(o,"DownloadPageModule",(function(){return y}));var r,a,l,c=i("ofXK"),s=i("3Pt+"),d=i("TEn/"),u=i("tyNb"),f=i("mrSG"),p=i("gcOT"),m=i("fXoL"),h=i("tk/3"),w=i("S8A7"),v=[{path:"",component:(r=function(){function t(n,o,i){e(this,t),this.http=n,this.toastController=o,this.fileTransfer=i,this.device=null}var o,i,r;return o=t,(i=[{key:"ngOnInit",value:function(){}},{key:"downloadFileTransfer",value:function(e,n){this.fileTransfer.download(e,n)}},{key:"download",value:function(e){return this.http.get(e,{responseType:"blob"})}},{key:"downloadFile",value:function(e,n){var t=this;this.download(e).subscribe((function(e){var n=new FileReader;n.readAsDataURL(e),n.onloadend=function(){var e;e=n.result,p.c.Filesystem.appendFile({data:e,path:"images/image.png"}).then((function(e){console.log("se escribiooo",e),t.presentToastWithOptions()}))}}))}},{key:"presentToastWithOptions",value:function(){return Object(f.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toastController.create({header:"Toast header",message:"Click to Close",position:"top",buttons:[{side:"start",icon:"star",text:"Favorite",handler:function(){console.log("Favorite clicked")}},{text:"Done",role:"cancel",handler:function(){console.log("Cancel clicked")}}]});case 2:e.sent.present();case 3:case"end":return e.stop()}}),e,this)})))}}])&&n(o.prototype,i),r&&n(o,r),t}(),r.\u0275fac=function(e){return new(e||r)(m["\u0275\u0275directiveInject"](h.b),m["\u0275\u0275directiveInject"](d.ToastController),m["\u0275\u0275directiveInject"](w.a))},r.\u0275cmp=m["\u0275\u0275defineComponent"]({type:r,selectors:[["app-download"]],decls:8,vars:0,consts:[["fill","clear",3,"click"],["slot","end","name","qr-code-outline"]],template:function(e,n){1&e&&(m["\u0275\u0275elementStart"](0,"ion-header"),m["\u0275\u0275elementStart"](1,"ion-toolbar"),m["\u0275\u0275elementStart"](2,"ion-title"),m["\u0275\u0275text"](3,"download"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"ion-content"),m["\u0275\u0275elementStart"](5,"ion-button",0),m["\u0275\u0275listener"]("click",(function(){return n.downloadFileTransfer("http://www.africau.edu/images/default/sample.pdf","downloaded.pdf")})),m["\u0275\u0275text"](6,"Download File "),m["\u0275\u0275element"](7,"ion-icon",1),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]())},directives:[d.IonHeader,d.IonToolbar,d.IonTitle,d.IonContent,d.IonButton,d.IonIcon],styles:[""]}),r)}],b=((a=function n(){e(this,n)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:a}),a.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||a)},imports:[[u.l.forChild(v)],u.l]}),a),g=i("pk6O"),y=((l=function n(){e(this,n)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:l}),l.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||l)},imports:[[c.CommonModule,s.FormsModule,d.IonicModule,g.a,b]]}),l)}}])}();