(function(e){function t(t){for(var o,a,c=t[0],l=t[1],s=t[2],u=0,p=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},a={app:0},r={app:0},i=[];function c(e){return l.p+"js/"+({favorite_page:"favorite_page",login_page:"login_page",recent_page:"recent_page"}[e]||e)+"."+{favorite_page:"40f65bd9",login_page:"0c7c2033",recent_page:"17d0f525"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={favorite_page:1,login_page:1,recent_page:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({favorite_page:"favorite_page",login_page:"login_page",recent_page:"recent_page"}[e]||e)+"."+{favorite_page:"e66e9574",login_page:"e66e9574",recent_page:"e66e9574"}[e]+".css",r=l.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===o||u===r))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){s=p[c],u=s.getAttribute("data-href");if(u===o||u===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=r;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var p=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",p.name="ChunkLoadError",p.type=o,p.request=a,n[1](p)}r[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/demo-webapp-vuetify-i18n/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0262":function(e){e.exports=JSON.parse('{"app-title":"Vue i18n Demo PWA","login-welcome":"Welcome to Login"}')},"2fc1":function(e,t,n){"use strict";var o=n("d155"),a=n.n(o);t["default"]=a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:""}},[n("router-view")],1)],1)},r=[],i={name:"App",data:function(){return{}}},c=i,l=n("2877"),s=Object(l["a"])(c,a,r,!1,null,null,null),u=s.exports,p=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-navigation-drawer",{attrs:{app:""},model:{value:e.sidebar,callback:function(t){e.sidebar=t},expression:"sidebar"}},[n("v-list",{attrs:{dense:"",nav:""}},[n("v-list-item",{attrs:{link:"",to:"/login"}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-login")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(e.$t("side-nav.login")))])],1)],1)],1)],1),n("v-app-bar",{attrs:{dense:"",app:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){e.sidebar=!0}}}),n("v-toolbar-title",[e._v(" "+e._s(e.$t("app-title"))+" ")]),n("v-spacer"),n("v-btn",{attrs:{text:"",icon:""},on:{click:e.changeLocale}},[e._v(" "+e._s(e.currentLocale)+" ")])],1),n("keep-alive",[n("router-view")],1),n("v-bottom-navigation",{attrs:{grow:"",app:""},model:{value:e.bottomNav,callback:function(t){e.bottomNav=t},expression:"bottomNav"}},[n("v-btn",{attrs:{value:"recent",to:"/recent"}},[n("span",[e._v(e._s(e.$t("main-nav.recent")))]),n("v-icon",[e._v("mdi-history")])],1),n("v-btn",{attrs:{value:"favorites",to:"/favorite"}},[n("span",[e._v(e._s(e.$t("main-nav.favorite")))]),n("v-icon",[e._v("mdi-heart")])],1)],1)],1)},v=[],d=n("5b96"),g={mixins:[d["a"]],data:function(){return{sidebar:!1,bottomNav:"recent"}},computed:{currentLocale:function(){return this.$i18n.locale.toUpperCase()}},methods:{changeLocale:function(){"EN"===this.currentLocale?this.$store.commit("SET_APP_LOCALE","vn"):this.$store.commit("SET_APP_LOCALE","en")}}},m=g,h=n("2fc1"),_=n("6544"),b=n.n(_),w=n("7496"),y=n("40dc"),L=n("5bc1"),k=n("b81c"),O=n("8336"),A=n("132d"),E=n("8860"),j=n("da13"),N=n("5d23"),S=n("34c3"),x=n("f774"),P=n("2fa4"),V=n("2a7f"),T=Object(l["a"])(m,f,v,!1,null,null,null);"function"===typeof h["default"]&&Object(h["default"])(T);var C=T.exports;b()(T,{VApp:w["a"],VAppBar:y["a"],VAppBarNavIcon:L["a"],VBottomNavigation:k["a"],VBtn:O["a"],VIcon:A["a"],VList:E["a"],VListItem:j["a"],VListItemContent:N["a"],VListItemIcon:S["a"],VListItemTitle:N["b"],VNavigationDrawer:x["a"],VSpacer:P["a"],VToolbarTitle:V["a"]}),o["a"].use(p["a"]);var $=[{path:"/",component:C,children:[{path:"recent",alias:"/",component:function(){return n.e("recent_page").then(n.bind(null,"6b49"))}},{path:"favorite",component:function(){return n.e("favorite_page").then(n.bind(null,"24a2"))}}]},{path:"/login",component:function(){return n.e("login_page").then(n.bind(null,"48ca"))}}],B=new p["a"]({routes:$}),I=B,F=n("2f62"),D=n("e7ca"),J=n.n(D);o["a"].use(F["a"]);var M=new J.a({key:"app-store",storage:window.localStorage,reducer:function(e){return{app_locale:e.app_locale}}}),q=new F["a"].Store({plugins:[M.plugin],state:{app_locale:"en"},mutations:{SET_APP_LOCALE:function(e,t){e.app_locale=t}},actions:{},modules:{}}),W=n("9483");Object(W["a"])("".concat("/demo-webapp-vuetify-i18n/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var U=n("f309");o["a"].use(U["a"]);var G=new U["a"]({}),H=n("f51c");o["a"].config.productionTip=!1,new o["a"]({i18n:H["a"],router:I,store:q,vuetify:G,render:function(e){return e(u)}}).$mount("#app")},"5b96":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("5530"),a=n("f51c"),r=n("2f62"),i={computed:Object(o["a"])({},Object(r["b"])(["app_locale"])),watch:{app_locale:function(e){this.$i18n.locale=e,a["a"].locale=e}},created:function(){this.$i18n.locale=this.app_locale,a["a"].locale=this.app_locale}}},d155:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"side-nav":{"login":"Login"},"main-nav":{"recent":"Recent","favorite":"Favorites"}},"vn":{"side-nav":{"login":"Đăng nhập"},"main-nav":{"recent":"Gần đây","favorite":"Yêu thích"}}}'),delete e.options._Ctor}},e640:function(e){e.exports=JSON.parse('{"app-title":"Ứng dụng Vue i18n","login-welcome":"Trang đăng nhập"}')},f51c:function(e,t,n){"use strict";var o=n("2b0e"),a=n("a925"),r=n("e640"),i=n("0262");o["a"].use(a["a"]);var c={vn:r,en:i},l=new a["a"]({locale:"en",messages:c,fallbackLocale:"vn",silentFallbackWarn:!0});t["a"]=l}});
//# sourceMappingURL=app.2c94f381.js.map