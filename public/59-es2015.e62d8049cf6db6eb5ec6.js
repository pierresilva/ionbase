(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{WMCE:function(e,t,n){"use strict";n.r(t),n.d(t,"LandingPageModule",(function(){return p}));var i=n("ofXK"),l=n("3Pt+"),o=n("TEn/"),r=n("tyNb"),a=n("fXoL"),s=n("1HhC"),d=n("/tAG"),m=n("8UpO");const g=[{path:"",component:(()=>{class e{constructor(e,t,n,i){this.splitPanel=e,this.settings=t,this.auth=n,this.router=i,this.slides=[],this.slideOpts={initialSlide:0,slidesPerView:1,autoplay:!0,pagination:{el:".swiper-pagination",clickable:!0,renderBullet:(e,t)=>'<span class="'+t+'">'+(e+1)+"</span>"}}}ngOnInit(){console.log(window.location.hostname)}ionViewWillEnter(){this.splitPanel.show.next(!1),this.auth.userIsLogged()&&this.router.navigateByUrl("/folder/inbox")}getSubdomain(e){var t=new RegExp("[a-z-0-9]{2,63}.[a-z.]{2,5}$").exec(e);return e.replace(t[0],"").slice(0,-1)}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](s.a),a["\u0275\u0275directiveInject"](d.a),a["\u0275\u0275directiveInject"](m.a),a["\u0275\u0275directiveInject"](r.h))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-landing"]],decls:43,vars:15,consts:[["pager","true",3,"options"],["size","12","size-md","8","size-lg","6",2,"margin","0 auto"],[1,"slide"],[3,"src"],[1,"text-m",3,"innerHTML"],[1,"ion-text-center"],["fill","outline",3,"routerLink"],["fill","clear",3,"routerLink"],["slot","end","name","arrow-forward"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"ion-content"),a["\u0275\u0275elementStart"](1,"ion-slides",0),a["\u0275\u0275elementStart"](2,"ion-slide"),a["\u0275\u0275elementStart"](3,"ion-row"),a["\u0275\u0275elementStart"](4,"ion-col",1),a["\u0275\u0275elementStart"](5,"div",2),a["\u0275\u0275elementStart"](6,"ion-card"),a["\u0275\u0275element"](7,"img",3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"h2"),a["\u0275\u0275text"](9),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](10,"div",4),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"ion-slide"),a["\u0275\u0275elementStart"](12,"ion-row"),a["\u0275\u0275elementStart"](13,"ion-col",1),a["\u0275\u0275elementStart"](14,"ion-card"),a["\u0275\u0275element"](15,"img",3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](16,"h2"),a["\u0275\u0275text"](17),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](18,"div",4),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](19,"ion-slide"),a["\u0275\u0275elementStart"](20,"ion-row"),a["\u0275\u0275elementStart"](21,"ion-col",1),a["\u0275\u0275elementStart"](22,"ion-card"),a["\u0275\u0275element"](23,"img",3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](24,"h2"),a["\u0275\u0275text"](25),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](26,"div",4),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](27,"ion-slide"),a["\u0275\u0275elementStart"](28,"ion-row"),a["\u0275\u0275elementStart"](29,"ion-col",1),a["\u0275\u0275elementStart"](30,"ion-card"),a["\u0275\u0275element"](31,"img",3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](32,"h2"),a["\u0275\u0275text"](33),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](34,"div",5),a["\u0275\u0275elementStart"](35,"ion-button",6),a["\u0275\u0275text"](36,"Ingresar "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](37,"ion-button",6),a["\u0275\u0275text"](38,"Reg\xedstrate "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](39,"div",5),a["\u0275\u0275elementStart"](40,"ion-button",7),a["\u0275\u0275text"](41,"Continuar "),a["\u0275\u0275element"](42,"ion-icon",8),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("options",t.slideOpts),a["\u0275\u0275advance"](6),a["\u0275\u0275property"]("src",t.settings.getSetting("landing.slide.uno.image"),a["\u0275\u0275sanitizeUrl"]),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](t.settings.getSetting("landing.slide.uno.title")),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("innerHTML",t.settings.getSetting("landing.slide.uno.text"),a["\u0275\u0275sanitizeHtml"]),a["\u0275\u0275advance"](5),a["\u0275\u0275property"]("src",t.settings.getSetting("landing.slide.dos.image"),a["\u0275\u0275sanitizeUrl"]),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](t.settings.getSetting("landing.slide.dos.title")),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("innerHTML",t.settings.getSetting("landing.slide.dos.text"),a["\u0275\u0275sanitizeHtml"]),a["\u0275\u0275advance"](5),a["\u0275\u0275property"]("src",t.settings.getSetting("landing.slide.tres.image"),a["\u0275\u0275sanitizeUrl"]),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](t.settings.getSetting("landing.slide.tres.title")),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("innerHTML",t.settings.getSetting("landing.slide.tres.text"),a["\u0275\u0275sanitizeHtml"]),a["\u0275\u0275advance"](5),a["\u0275\u0275property"]("src",t.settings.getSetting("landing.slide.cuatro.image"),a["\u0275\u0275sanitizeUrl"]),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](t.settings.getSetting("landing.button.title")),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("routerLink","/auth/login"),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("routerLink","/auth/register"),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("routerLink","/folder/Inbox"))},directives:[o.IonContent,o.IonSlides,o.IonSlide,o.IonRow,o.IonCol,o.IonCard,o.IonButton,o.RouterLinkDelegate,r.i,o.IonIcon],styles:[".swiper-pagination-bullet{width:44px;height:44px}  .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{font-size:34px}ion-slides[_ngcontent-%COMP%]{height:100%}.swiper-slide[_ngcontent-%COMP%]{display:block}.swiper-slide[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:2.8rem}.swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:50%;max-width:80%;margin:60px 0 40px;pointer-events:none}b[_ngcontent-%COMP%]{font-weight:500}p[_ngcontent-%COMP%]{padding:0 40px;font-size:14px;line-height:1.5;color:var(--ion-color-step-600,#60646b)}p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:var(--ion-text-color,#000)}"]}),e})()}];let c=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.l.forChild(g)],r.l]}),e})(),p=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.CommonModule,l.FormsModule,o.IonicModule,c]]}),e})()}}]);