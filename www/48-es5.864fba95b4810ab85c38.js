!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{WMCE:function(n,i,l){"use strict";l.r(i),l.d(i,"LandingPageModule",(function(){return v}));var r,o,a,s=l("ofXK"),d=l("3Pt+"),c=l("TEn/"),g=l("tyNb"),m=l("fXoL"),p=l("1HhC"),u=l("/tAG"),h=l("8UpO"),f=[{path:"",component:(r=function(){function n(t,i,l,r){e(this,n),this.splitPanel=t,this.settings=i,this.auth=l,this.router=r,this.slides=[],this.slideOpts={initialSlide:0,slidesPerView:1,autoplay:!0,pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">'+(e+1)+"</span>"}}}}var i,l,r;return i=n,(l=[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){this.splitPanel.show.next(!1),this.auth.userIsLogged()&&this.router.navigateByUrl("/folder/inbox")}}])&&t(i.prototype,l),r&&t(i,r),n}(),r.\u0275fac=function(e){return new(e||r)(m["\u0275\u0275directiveInject"](p.a),m["\u0275\u0275directiveInject"](u.a),m["\u0275\u0275directiveInject"](h.a),m["\u0275\u0275directiveInject"](g.h))},r.\u0275cmp=m["\u0275\u0275defineComponent"]({type:r,selectors:[["app-landing"]],decls:43,vars:15,consts:[["pager","true",3,"options"],["size","12","size-md","8","size-lg","6",2,"margin","0 auto"],[1,"slide"],[3,"src"],[1,"text-m",3,"innerHTML"],[1,"ion-text-center"],["fill","outline",3,"routerLink"],["fill","clear",3,"routerLink"],["slot","end","name","arrow-forward"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"ion-content"),m["\u0275\u0275elementStart"](1,"ion-slides",0),m["\u0275\u0275elementStart"](2,"ion-slide"),m["\u0275\u0275elementStart"](3,"ion-row"),m["\u0275\u0275elementStart"](4,"ion-col",1),m["\u0275\u0275elementStart"](5,"div",2),m["\u0275\u0275elementStart"](6,"ion-card"),m["\u0275\u0275element"](7,"img",3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"h2"),m["\u0275\u0275text"](9),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](10,"div",4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"ion-slide"),m["\u0275\u0275elementStart"](12,"ion-row"),m["\u0275\u0275elementStart"](13,"ion-col",1),m["\u0275\u0275elementStart"](14,"ion-card"),m["\u0275\u0275element"](15,"img",3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](16,"h2"),m["\u0275\u0275text"](17),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](18,"div",4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](19,"ion-slide"),m["\u0275\u0275elementStart"](20,"ion-row"),m["\u0275\u0275elementStart"](21,"ion-col",1),m["\u0275\u0275elementStart"](22,"ion-card"),m["\u0275\u0275element"](23,"img",3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](24,"h2"),m["\u0275\u0275text"](25),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](26,"div",4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](27,"ion-slide"),m["\u0275\u0275elementStart"](28,"ion-row"),m["\u0275\u0275elementStart"](29,"ion-col",1),m["\u0275\u0275elementStart"](30,"ion-card"),m["\u0275\u0275element"](31,"img",3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](32,"h2"),m["\u0275\u0275text"](33),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](34,"div",5),m["\u0275\u0275elementStart"](35,"ion-button",6),m["\u0275\u0275text"](36,"Ingresar "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](37,"ion-button",6),m["\u0275\u0275text"](38,"Reg\xedstrate "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](39,"div",5),m["\u0275\u0275elementStart"](40,"ion-button",7),m["\u0275\u0275text"](41,"Continuar "),m["\u0275\u0275element"](42,"ion-icon",8),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("options",t.slideOpts),m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("src",t.settings.getSetting("landing.slide.uno.image"),m["\u0275\u0275sanitizeUrl"]),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate"](t.settings.getSetting("landing.slide.uno.title")),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("innerHTML",t.settings.getSetting("landing.slide.uno.text"),m["\u0275\u0275sanitizeHtml"]),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("src",t.settings.getSetting("landing.slide.dos.image"),m["\u0275\u0275sanitizeUrl"]),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate"](t.settings.getSetting("landing.slide.dos.title")),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("innerHTML",t.settings.getSetting("landing.slide.dos.text"),m["\u0275\u0275sanitizeHtml"]),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("src",t.settings.getSetting("landing.slide.tres.image"),m["\u0275\u0275sanitizeUrl"]),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate"](t.settings.getSetting("landing.slide.tres.title")),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("innerHTML",t.settings.getSetting("landing.slide.tres.text"),m["\u0275\u0275sanitizeHtml"]),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("src",t.settings.getSetting("landing.slide.cuatro.image"),m["\u0275\u0275sanitizeUrl"]),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate"](t.settings.getSetting("landing.button.title")),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("routerLink","/auth/login"),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("routerLink","/auth/register"),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("routerLink","/folder/Inbox"))},directives:[c.q,c.X,c.W,c.Q,c.p,c.i,c.g,c.ob,g.i,c.x],styles:[".swiper-pagination-bullet{width:44px;height:44px}  .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{font-size:34px}ion-slides[_ngcontent-%COMP%]{height:100%}.swiper-slide[_ngcontent-%COMP%]{display:block}.swiper-slide[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:2.8rem}.swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:50%;max-width:80%;margin:60px 0 40px;pointer-events:none}b[_ngcontent-%COMP%]{font-weight:500}p[_ngcontent-%COMP%]{padding:0 40px;font-size:14px;line-height:1.5;color:var(--ion-color-step-600,#60646b)}p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:var(--ion-text-color,#000)}"]}),r)}],S=((a=function t(){e(this,t)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:a}),a.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||a)},imports:[[g.l.forChild(f)],g.l]}),a),v=((o=function t(){e(this,t)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:o}),o.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||o)},imports:[[s.c,d.FormsModule,c.hb,S]]}),o)}}])}();