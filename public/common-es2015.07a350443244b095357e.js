(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var i=s("A36C"),n=s("iWo5"),r=s("qULd");const o=(t,e)=>{let s,o;const a=(t,i,n)=>{if("undefined"==typeof document)return;const r=document.elementFromPoint(t,i);r&&e(r)?r!==s&&(u(),c(r,n)):u()},c=(t,e)=>{s=t,o||(o=s);const n=s;Object(i.f)(()=>n.classList.add("ion-activated")),e()},u=(t=!1)=>{if(!s)return;const e=s;Object(i.f)(()=>e.classList.remove("ion-activated")),t&&o!==s&&s.click(),s=void 0};return Object(n.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>a(t.currentX,t.currentY,r.a),onMove:t=>a(t.currentX,t.currentY,r.b),onEnd:()=>{u(!0),Object(r.e)(),o=void 0}})}},"1YvR":function(t,e,s){"use strict";s.d(e,"a",(function(){return h}));var i=s("mrSG"),n=s("2Vo4"),r=s("fXoL"),o=s("TIcx"),a=s("EgAa"),c=s("PWdp"),u=s("tyNb"),l=s("Ezvo");let h=(()=>{class t{constructor(t,e,s,i,r){this.api=t,this.alert=e,this.toast=s,this.router=i,this.navigation=r,this.housUnitsUrl="hous-units",this.housUnitsFormValid=new n.a(!1),this.housUnits=[],this.housUnit={},this.housUnitLists={},this.searchValue="",this.perPage=10,this.meta=null,this.page=1,this.pagesContent=document.getElementById("pages-content")}getHousUnits(t=this.page,e=this.perPage){this.api.get(this.housUnitsUrl+"?page="+t+"&perPage="+e+"&q[name:cont]="+this.searchValue).subscribe(t=>{document.getElementById("pages-content").scrollToTop(300),this.housUnits=t.data,this.housUnitLists=t.lists,this.meta=t.meta},t=>{console.error(t)})}getAllHousUnits(t=this.page,e=this.perPage){this.api.get(this.housUnitsUrl+"?page="+t+"&perPage="+e+"&q[name:cont]="+this.searchValue+"&all=tue").subscribe(t=>{this.housUnits=t.data,this.housUnitLists=t.lists},t=>{console.error(t)})}editHousUnit(t){this.api.get(this.housUnitsUrl+"/"+t+"/edit").subscribe(t=>{this.housUnit=t.data.model,this.housUnitLists=t.lists},t=>{console.error(t)})}updateHousUnit(){this.api.put(this.housUnitsUrl+"/"+this.housUnit.id,{model:this.housUnit,pivots:{}}).subscribe(t=>{this.toast.present(t.message,"toast-success","top"),this.navigation.back(),this.getHousUnits(1)})}createHousUnit(){this.api.get(this.housUnitsUrl+"/create").subscribe(t=>{this.housUnit={},this.housUnitLists=t.lists})}storeHousUnit(){this.api.post(this.housUnitsUrl,{model:this.housUnit,pivots:{}}).subscribe(t=>{this.toast.present(t.message,"toast-success","top"),this.navigation.back(),this.getHousUnits(1)})}deleteHousUnit(t){return Object(i.a)(this,void 0,void 0,(function*(){(yield this.alert.confirmation("Desea eliminar el item?"))&&this.api.delete(this.housUnitsUrl+"/"+t,{}).subscribe(t=>{this.toast.present(t.message,"toast-success","top"),this.getHousUnits(1)})}))}getHouseUnit(t){return Object(i.a)(this,void 0,void 0,(function*(){return yield this.api.get(this.housUnitsUrl+"/"+t).toPromise()}))}}return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275inject"](o.a),r["\u0275\u0275inject"](a.a),r["\u0275\u0275inject"](c.a),r["\u0275\u0275inject"](u.h),r["\u0275\u0275inject"](l.a))},t.\u0275prov=r["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"74mu":function(t,e,s){"use strict";s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return r})),s.d(e,"c",(function(){return i})),s.d(e,"d",(function(){return a}));const i=(t,e)=>null!==e.closest(t),n=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},e):e,r=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},o=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,s,i)=>{if(null!=t&&"#"!==t[0]&&!o.test(t)){const n=document.querySelector("ion-router");if(n)return null!=e&&e.preventDefault(),n.push(t,s,i)}return!1}},A8UV:function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));var i=s("fXoL");let n=(()=>{class t{transform(t){if(null===t||""===t)return"";{const e={active:"Activo",inactive:"Inactivo",hold:"En espera",finalized:"Finalizado",in_progress:"En progreso",pending:"Pendiente",resolved:"Resuelto",daily:"Diario",weekly:"Semanal",monthly:"Mensual",bimonthly:"Bimensual",quarterly:"Trimestral",biannual:"Semestral",annual:"Anual",unknown:"Desconocido",opened:"Abierta",closed:"Cerrada",canceled:"Cancelada"};return e[t]?e[t]:t}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=i["\u0275\u0275definePipe"]({name:"status",type:t,pure:!0}),t})()},FnMX:function(t,e,s){"use strict";s.d(e,"a",(function(){return h}));var i=s("mrSG"),n=s("2Vo4"),r=s("fXoL"),o=s("TIcx"),a=s("EgAa"),c=s("PWdp"),u=s("tyNb"),l=s("Ezvo");let h=(()=>{class t{constructor(t,e,s,i,r){this.api=t,this.alert=e,this.toast=s,this.router=i,this.navigation=r,this.usersUrl="users",this.usersFormValid=new n.a(!1),this.users=[],this.user={},this.userLists={},this.searchValue="",this.perPage=10,this.meta=null,this.page=1,this.pagesContent=document.getElementById("pages-content")}getUsers(t=this.page,e=this.perPage){this.api.get(this.usersUrl+"?page="+t+"&perPage="+e+"&q[name:cont]="+this.searchValue).subscribe(t=>{document.getElementById("pages-content").scrollToTop(300),this.users=t.data,this.userLists=t.lists,this.meta=t.meta},t=>{console.error(t)})}editUser(t){this.api.get(this.usersUrl+"/"+t+"/edit").subscribe(t=>{this.user=t.data.model,this.userLists=t.lists},t=>{console.error(t)})}updateUser(){this.api.put(this.usersUrl+"/"+this.user.id,{model:this.user,pivots:{user_role:this.user.user_roles}}).subscribe(t=>{this.toast.present(t.message,"toast-success","top"),this.navigation.back(),this.getUsers(1)})}createUser(){this.api.get(this.usersUrl+"/create").subscribe(t=>{this.user={},this.userLists=t.lists})}storeUser(){this.api.post(this.usersUrl,{model:this.user,pivots:{user_role:this.user.user_roles}}).subscribe(t=>{this.toast.present(t.message,"toast-success","top"),this.navigation.back(),this.getUsers(1)})}deleteUser(t){return Object(i.a)(this,void 0,void 0,(function*(){(yield this.alert.confirmation("Desea eliminar el item?"))&&this.api.delete(this.usersUrl+"/"+t,{}).subscribe(t=>{this.toast.present(t.message,"toast-success","top"),this.getUsers(1)})}))}getAll(){this.api.get(this.usersUrl+"?all=tue").subscribe(t=>{this.users=t.data},t=>{console.error(t)})}}return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275inject"](o.a),r["\u0275\u0275inject"](a.a),r["\u0275\u0275inject"](c.a),r["\u0275\u0275inject"](u.h),r["\u0275\u0275inject"](l.a))},t.\u0275prov=r["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},ZaV5:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return n}));const i=async(t,e,s,i,n)=>{if(t)return t.attachViewToDom(e,s,n,i);if("string"!=typeof s&&!(s instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof s?e.ownerDocument&&e.ownerDocument.createElement(s):s;return i&&i.forEach(t=>r.classList.add(t)),n&&Object.assign(r,n),e.appendChild(r),r.componentOnReady&&await r.componentOnReady(),r},n=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},aGrO:function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));var i=s("fXoL");let n=(()=>{class t{transform(t){return null===t||""===t?"":t.replace(/<(?:.|\n)*?>/gm," ")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=i["\u0275\u0275definePipe"]({name:"stripHtml",type:t,pure:!0}),t})()},h3R7:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));const i={bubbles:{dur:1e3,circles:9,fn:(t,e,s)=>{const i=t*e/s-t+"ms",n=2*Math.PI*e/s;return{r:5,style:{top:9*Math.sin(n)+"px",left:9*Math.cos(n)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,s)=>{const i=e/s,n=t*i-t+"ms",r=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":n}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/s-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/s-t+"ms"}})}}},qULd:function(t,e,s){"use strict";s.d(e,"a",(function(){return r})),s.d(e,"b",(function(){return o})),s.d(e,"c",(function(){return n})),s.d(e,"d",(function(){return c})),s.d(e,"e",(function(){return a}));const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const s=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:s})},notification(t){const e=this.getEngine();if(!e)return;const s=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:s})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},n=()=>{i.selection()},r=()=>{i.selectionStart()},o=()=>{i.selectionChanged()},a=()=>{i.selectionEnd()},c=t=>{i.impact(t)}}}]);