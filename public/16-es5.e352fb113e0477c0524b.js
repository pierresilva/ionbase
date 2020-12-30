!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"3l5n":function(n,o,r){"use strict";r.r(o),r.d(o,"BarcodeScannerPageModule",(function(){return w}));var i=r("ofXK"),a=r("3Pt+"),c=r("TEn/"),l=r("tyNb"),s=r("KBVK"),u=r("fXoL"),m=r("WdVq"),p=r("1HhC"),d=r("yvdN"),f=r("7Ub2");function h(e,n){if(1&e){var t=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"zxing-scanner",4),u["\u0275\u0275listener"]("deviceChange",(function(e){return u["\u0275\u0275restoreView"](t),u["\u0275\u0275nextContext"]().currentDevice=e}))("scanError",(function(e){return u["\u0275\u0275restoreView"](t),u["\u0275\u0275nextContext"]().onCodeError(e)}))("scanSuccess",(function(e){return u["\u0275\u0275restoreView"](t),u["\u0275\u0275nextContext"]().onCodeResult(e)})),u["\u0275\u0275elementEnd"]()}if(2&e){var o=u["\u0275\u0275nextContext"]();u["\u0275\u0275property"]("device",o.currentDevice)("formats",o.formatsEnabled)}}var v,y,g,b=[{path:"",component:(v=function(){function n(t,o,r,i){e(this,n),this.barcodeScanner=t,this.platform=o,this.modalController=r,this.splitPanel=i,this.browserScanner=!1,this.currentDevice=null,this.formatsEnabled=[s.BarcodeFormat.CODE_128,s.BarcodeFormat.DATA_MATRIX,s.BarcodeFormat.EAN_13,s.BarcodeFormat.QR_CODE,s.BarcodeFormat.PDF_417]}return t(n,[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){this.splitPanel.show.next(!0)}},{key:"scan",value:function(){this.platform.is("desktop")&&this.desktopScan(),this.platform.is("mobile")&&this.mobileScan()}},{key:"mobileScan",value:function(){var e=this;this.barcodeScanner.scan().then((function(n){console.log("Barcode data",n),e.barcodeData=n})).catch((function(e){console.log("Error",e)}))}},{key:"desktopScan",value:function(){this.browserScanner=!0}},{key:"dismiss",value:function(){this.modalController.dismiss({dismissed:!0})}},{key:"onCodeResult",value:function(e){this.barcodeData={canceled:null,text:e,format:null},this.browserScanner=!1,console.log(this.barcodeData)}},{key:"onCodeError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.barcodeData={canceled:null,text:null,format:null},this.browserScanner=!1,console.log(e)}}]),n}(),v.\u0275fac=function(e){return new(e||v)(u["\u0275\u0275directiveInject"](m.a),u["\u0275\u0275directiveInject"](c.nb),u["\u0275\u0275directiveInject"](c.kb),u["\u0275\u0275directiveInject"](p.a))},v.\u0275cmp=u["\u0275\u0275defineComponent"]({type:v,selectors:[["app-barcode-scanner"]],decls:10,vars:4,consts:[["title","BarCode Scanner"],[3,"device","formats","deviceChange","scanError","scanSuccess",4,"ngIf"],["fill","clear",3,"click"],["slot","end","name","qr-code-outline"],[3,"device","formats","deviceChange","scanError","scanSuccess"]],template:function(e,n){1&e&&(u["\u0275\u0275element"](0,"app-main-header",0),u["\u0275\u0275elementStart"](1,"ion-content"),u["\u0275\u0275template"](2,h,1,2,"zxing-scanner",1),u["\u0275\u0275elementStart"](3,"p"),u["\u0275\u0275elementStart"](4,"ion-button",2),u["\u0275\u0275listener"]("click",(function(){return n.scan()})),u["\u0275\u0275text"](5,"Escanear QR "),u["\u0275\u0275element"](6,"ion-icon",3),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"pre"),u["\u0275\u0275text"](8),u["\u0275\u0275pipe"](9,"json"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngIf",n.browserScanner),u["\u0275\u0275advance"](6),u["\u0275\u0275textInterpolate1"]("",u["\u0275\u0275pipeBind1"](9,2,n.barcodeData),"\n"))},directives:[d.a,c.q,i.m,c.g,c.x,f.a],pipes:[i.f],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),v)}],x=((y=function n(){e(this,n)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:y}),y.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||y)},imports:[[l.l.forChild(b)],l.l]}),y),C=r("pk6O"),w=((g=function n(){e(this,n)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:g}),g.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||g)},imports:[[i.c,a.FormsModule,c.hb,x,C.a]]}),g)},yvdN:function(n,o,r){"use strict";r.d(o,"a",(function(){return h}));var i=r("fXoL"),a=r("TEn/"),c=r("1HhC"),l=r("ofXK"),s=r("tyNb");function u(e,n){if(1&e){var t=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"ion-buttons",4),i["\u0275\u0275elementStart"](1,"ion-menu-toggle",5),i["\u0275\u0275elementStart"](2,"ion-button",6),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](t),i["\u0275\u0275nextContext"]().toggleMenu()})),i["\u0275\u0275element"](3,"ion-icon",7),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}}function m(e,n){if(1&e&&(i["\u0275\u0275elementContainerStart"](0),i["\u0275\u0275text"](1),i["\u0275\u0275elementContainerEnd"]()),2&e){var t=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](t.primaryText)}}function p(e,n){if(1&e&&i["\u0275\u0275element"](0,"ion-icon",11),2&e){var t=i["\u0275\u0275nextContext"](2);i["\u0275\u0275property"]("name",t.primaryIcon)}}function d(e,n){if(1&e&&(i["\u0275\u0275elementStart"](0,"ion-buttons",8),i["\u0275\u0275elementStart"](1,"ion-button",9),i["\u0275\u0275template"](2,m,2,1,"ng-container",3),i["\u0275\u0275template"](3,p,1,1,"ion-icon",10),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){var t=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("routerLink","/"+t.primaryLink),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.primaryText&&!t.platform.is("mobile")),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.primaryIcon)}}function f(e,n){if(1&e&&(i["\u0275\u0275elementStart"](0,"ion-title"),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){var t=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](t.title)}}var h=function(){var n=function(){function n(t,o){e(this,n),this.platform=t,this.splitPanel=o,this.title="",this.primaryLink="",this.primaryIcon="",this.primaryText="",this.showSplitPanelButton=!0}return t(n,[{key:"ngOnInit",value:function(){this.splitPanel.show.subscribe((function(e){}))}},{key:"toggleMenu",value:function(){var e=document.querySelector("ion-split-pane"),n="(min-width: 992px)";if(!(window.innerWidth>=992))return e.querySelector("ion-menu").open();e.when=!(e.when===n)&&n}}]),n}();return n.\u0275fac=function(e){return new(e||n)(i["\u0275\u0275directiveInject"](a.nb),i["\u0275\u0275directiveInject"](c.a))},n.\u0275cmp=i["\u0275\u0275defineComponent"]({type:n,selectors:[["app-main-header"]],inputs:{title:"title",primaryLink:"primaryLink",primaryIcon:"primaryIcon",primaryText:"primaryText",showSplitPanelButton:"showSplitPanelButton"},decls:5,vars:4,consts:[[3,"translucent"],["slot","start",4,"ngIf"],["slot","primary",4,"ngIf"],[4,"ngIf"],["slot","start"],["auto-hide","false","menu","main-menu"],[3,"click"],["slot","icon-only","name","menu"],["slot","primary"],["color","success",3,"routerLink"],["slot","end",3,"name",4,"ngIf"],["slot","end",3,"name"]],template:function(e,n){1&e&&(i["\u0275\u0275elementStart"](0,"ion-header",0),i["\u0275\u0275elementStart"](1,"ion-toolbar"),i["\u0275\u0275template"](2,u,4,0,"ion-buttons",1),i["\u0275\u0275template"](3,d,4,3,"ion-buttons",2),i["\u0275\u0275template"](4,f,2,1,"ion-title",3),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275property"]("translucent",!0),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",n.splitPanel.show.value),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",n.primaryLink),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",n.title))},directives:[a.w,a.fb,l.m,a.h,a.M,a.g,a.x,s.i,a.ob,a.db],styles:[""]}),n}()}}])}();