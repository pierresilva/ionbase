!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{yIOV:function(t,i,o){"use strict";o.r(i),o.d(i,"FolderPageModule",(function(){return E}));var r=o("ofXK"),a=o("pk6O"),l=o("3Pt+"),c=o("TEn/"),d=o("tyNb"),s=o("mrSG"),m=o("fXoL"),u=o("1HhC"),p=o("yvdN"),f=["slideWithNav"];function h(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ion-slide"),m["\u0275\u0275elementStart"](1,"ion-card"),m["\u0275\u0275element"](2,"img",20),m["\u0275\u0275elementStart"](3,"ion-card-title"),m["\u0275\u0275text"](4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;m["\u0275\u0275advance"](4),m["\u0275\u0275textInterpolate1"](" ",n.id," ")}}var v,g,y,S=[{path:"",component:(v=function(){function t(n,i,o){e(this,t),this.activatedRoute=n,this.platform=i,this.splitPanel=o,this.slideOpts={initialSlide:0,slidesPerView:4,loop:!0,centeredSlides:!0,spaceBetween:0},this.platform.width()<1200&&(this.slideOpts.slidesPerView=2),this.slider={isBeginningSlide:!0,isEndSlide:!1,slidesItems:[{id:324},{id:321},{id:435},{id:524},{id:235},{id:236},{id:237},{id:238}]}}return n(t,[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){var e=this;this.folder=this.activatedRoute.snapshot.paramMap.get("id"),this.platform.resize.subscribe((function(){return Object(s.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(this.platform.width());case 1:case"end":return e.stop()}}),e,this)})))})),this.splitPanel.show.next(!0)}},{key:"slideNext",value:function(e,t){var n=this;t.slideNext(500).then((function(){n.checkIfNavDisabled(e,t)}))}},{key:"slidePrev",value:function(e,t){var n=this;t.slidePrev(500).then((function(){n.checkIfNavDisabled(e,t)}))}},{key:"SlideDidChange",value:function(e,t){this.checkIfNavDisabled(e,t)}},{key:"checkIfNavDisabled",value:function(e,t){this.checkisBeginning(e,t),this.checkisEnd(e,t)}},{key:"checkisBeginning",value:function(e,t){t.isBeginning().then((function(t){e.isBeginningSlide=t}))}},{key:"checkisEnd",value:function(e,t){t.isEnd().then((function(t){e.isEndSlide=t}))}},{key:"ionViewDidLeave",value:function(){this.ngOnDestroy()}},{key:"ngOnDestroy",value:function(){console.log("Sestroy folder page")}}]),t}(),v.\u0275fac=function(e){return new(e||v)(m["\u0275\u0275directiveInject"](d.a),m["\u0275\u0275directiveInject"](c.nb),m["\u0275\u0275directiveInject"](u.a))},v.\u0275cmp=m["\u0275\u0275defineComponent"]({type:v,selectors:[["app-folder"]],viewQuery:function(e,t){var n;1&e&&m["\u0275\u0275viewQuery"](f,!0),2&e&&m["\u0275\u0275queryRefresh"](n=m["\u0275\u0275loadQuery"]())&&(t.slideWithNav=n.first)},decls:56,vars:6,consts:[["title","Folder",3,"showSplitPanelButton"],[3,"fullscreen"],["collapse","condense"],["size","large"],["id","container"],["pager","false",3,"options","ionSlideDidChange"],["slideWithNav",""],[4,"ngFor","ngForOf"],[1,"cssreset"],[1,"item-transparent"],["name","pin","slot","start"],["fill","outline","slot","end"],["href","#",1,"ion-activated"],["name","wifi","slot","start"],["href","#"],["name","wine","slot","start"],[1,"ion-activated"],["name","warning","slot","start"],["name","walk","slot","start"],["src","https://ionicframework.com/docs/demos/api/card/madison.jpg",2,"width","100%"],["src","https://ionicframework.com/docs/demos/api/card/madison.jpg"]],template:function(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275element"](0,"app-main-header",0),m["\u0275\u0275elementStart"](1,"ion-content",1),m["\u0275\u0275elementStart"](2,"ion-header",2),m["\u0275\u0275elementStart"](3,"ion-toolbar"),m["\u0275\u0275elementStart"](4,"ion-title",3),m["\u0275\u0275text"](5),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"div",4),m["\u0275\u0275elementStart"](7,"ion-grid"),m["\u0275\u0275elementStart"](8,"ion-slides",5,6),m["\u0275\u0275listener"]("ionSlideDidChange",(function(){m["\u0275\u0275restoreView"](n);var e=m["\u0275\u0275reference"](9);return t.SlideDidChange(t.slider,e)})),m["\u0275\u0275template"](10,h,5,1,"ion-slide",7),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"ion-card"),m["\u0275\u0275elementStart"](12,"div",8),m["\u0275\u0275elementStart"](13,"ion-card-header"),m["\u0275\u0275elementStart"](14,"ion-card-subtitle"),m["\u0275\u0275text"](15,"Card Subtitle One"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](16,"ion-card-title"),m["\u0275\u0275text"](17),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](18,"ion-card-content"),m["\u0275\u0275text"](19," Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean. "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](20,"ion-card"),m["\u0275\u0275elementStart"](21,"ion-card-header"),m["\u0275\u0275elementStart"](22,"ion-card-subtitle"),m["\u0275\u0275text"](23,"Card Subtitle"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](24,"ion-card-title"),m["\u0275\u0275text"](25,"Card Title"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](26,"ion-card-content"),m["\u0275\u0275text"](27," Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean. "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](28,"ion-card"),m["\u0275\u0275elementStart"](29,"ion-item",9),m["\u0275\u0275element"](30,"ion-icon",10),m["\u0275\u0275elementStart"](31,"ion-label"),m["\u0275\u0275text"](32,"ion-item in a card, icon left, button right"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](33,"ion-button",11),m["\u0275\u0275text"](34,"View"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](35,"ion-card-content"),m["\u0275\u0275text"](36," This is content, without any paragraph or header tags, within an ion-card-content element. "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](37,"ion-card"),m["\u0275\u0275elementStart"](38,"ion-item",12),m["\u0275\u0275element"](39,"ion-icon",13),m["\u0275\u0275elementStart"](40,"ion-label"),m["\u0275\u0275text"](41,"Card Link Item 1 activated"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](42,"ion-item",14),m["\u0275\u0275element"](43,"ion-icon",15),m["\u0275\u0275elementStart"](44,"ion-label"),m["\u0275\u0275text"](45,"Card Link Item 2"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](46,"ion-item",16),m["\u0275\u0275element"](47,"ion-icon",17),m["\u0275\u0275elementStart"](48,"ion-label"),m["\u0275\u0275text"](49,"Card Button Item 1 activated"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](50,"ion-item"),m["\u0275\u0275element"](51,"ion-icon",18),m["\u0275\u0275elementStart"](52,"ion-label"),m["\u0275\u0275text"](53,"Card Button Item 2"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](54,"ion-card"),m["\u0275\u0275element"](55,"img",19),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}2&e&&(m["\u0275\u0275property"]("showSplitPanelButton",t.splitPanel.show.value),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("fullscreen",!0),m["\u0275\u0275advance"](4),m["\u0275\u0275textInterpolate"](t.folder),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("options",t.slideOpts),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("ngForOf",t.slider.slidesItems),m["\u0275\u0275advance"](7),m["\u0275\u0275textInterpolate"](t.folder))},directives:[p.a,c.q,c.w,c.fb,c.db,c.v,c.X,r.l,c.i,c.k,c.l,c.m,c.j,c.C,c.x,c.I,c.g,c.W],styles:["ion-menu-button[_ngcontent-%COMP%]{color:var(--ion-color-primary)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),v)}],w=((y=function t(){e(this,t)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:y}),y.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||y)},imports:[[d.l.forChild(S)],d.l]}),y),E=((g=function t(){e(this,t)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:g}),g.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||g)},imports:[[r.c,a.a,l.FormsModule,c.hb,w]]}),g)},yvdN:function(t,i,o){"use strict";o.d(i,"a",(function(){return h}));var r=o("fXoL"),a=o("TEn/"),l=o("1HhC"),c=o("ofXK"),d=o("tyNb");function s(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"ion-buttons",4),r["\u0275\u0275elementStart"](1,"ion-menu-toggle",5),r["\u0275\u0275elementStart"](2,"ion-button",6),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().toggleMenu()})),r["\u0275\u0275element"](3,"ion-icon",7),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}}function m(e,t){if(1&e&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275text"](1),r["\u0275\u0275elementContainerEnd"]()),2&e){var n=r["\u0275\u0275nextContext"](2);r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate"](n.primaryText)}}function u(e,t){if(1&e&&r["\u0275\u0275element"](0,"ion-icon",11),2&e){var n=r["\u0275\u0275nextContext"](2);r["\u0275\u0275property"]("name",n.primaryIcon)}}function p(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"ion-buttons",8),r["\u0275\u0275elementStart"](1,"ion-button",9),r["\u0275\u0275template"](2,m,2,1,"ng-container",3),r["\u0275\u0275template"](3,u,1,1,"ion-icon",10),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){var n=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("routerLink","/"+n.primaryLink),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",n.primaryText&&!n.platform.is("mobile")),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",n.primaryIcon)}}function f(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"ion-title"),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){var n=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate"](n.title)}}var h=function(){var t=function(){function t(n,i){e(this,t),this.platform=n,this.splitPanel=i,this.title="",this.primaryLink="",this.primaryIcon="",this.primaryText="",this.showSplitPanelButton=!0}return n(t,[{key:"ngOnInit",value:function(){this.splitPanel.show.subscribe((function(e){}))}},{key:"toggleMenu",value:function(){var e=document.querySelector("ion-split-pane"),t="(min-width: 992px)";if(!(window.innerWidth>=992))return e.querySelector("ion-menu").open();e.when=!(e.when===t)&&t}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275directiveInject"](a.nb),r["\u0275\u0275directiveInject"](l.a))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["app-main-header"]],inputs:{title:"title",primaryLink:"primaryLink",primaryIcon:"primaryIcon",primaryText:"primaryText",showSplitPanelButton:"showSplitPanelButton"},decls:5,vars:4,consts:[[3,"translucent"],["slot","start",4,"ngIf"],["slot","primary",4,"ngIf"],[4,"ngIf"],["slot","start"],["auto-hide","false","menu","main-menu"],[3,"click"],["slot","icon-only","name","menu"],["slot","primary"],["color","success",3,"routerLink"],["slot","end",3,"name",4,"ngIf"],["slot","end",3,"name"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"ion-header",0),r["\u0275\u0275elementStart"](1,"ion-toolbar"),r["\u0275\u0275template"](2,s,4,0,"ion-buttons",1),r["\u0275\u0275template"](3,p,4,3,"ion-buttons",2),r["\u0275\u0275template"](4,f,2,1,"ion-title",3),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275property"]("translucent",!0),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",t.splitPanel.show.value),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.primaryLink),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.title))},directives:[a.w,a.fb,c.m,a.h,a.M,a.g,a.x,d.i,a.ob,a.db],styles:[""]}),t}()}}])}();