function Vc(){}function Bc(n){return n()}function ca(){return Object.create(null)}function zn(n){n.forEach(Bc)}function td(n){return typeof n=="function"}function Vw(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function nd(n){return Object.keys(n).length===0}function Bw(n,e){n.appendChild(e)}function qw(n,e,t){n.insertBefore(e,t||null)}function rd(n){n.parentNode.removeChild(n)}function $w(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function jw(n){return document.createElement(n)}function Kw(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function sd(n){return document.createTextNode(n)}function Hw(){return sd(" ")}function Gw(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function zw(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function id(n){return Array.from(n.childNodes)}function Ww(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}let Yi;function Cn(n){Yi=n}const Tn=[],ua=[],kr=[],ha=[],od=Promise.resolve();let Ii=!1;function ad(){Ii||(Ii=!0,od.then(qc))}function Ei(n){kr.push(n)}const Js=new Set;let mr=0;function qc(){const n=Yi;do{for(;mr<Tn.length;){const e=Tn[mr];mr++,Cn(e),cd(e.$$)}for(Cn(null),Tn.length=0,mr=0;ua.length;)ua.pop()();for(let e=0;e<kr.length;e+=1){const t=kr[e];Js.has(t)||(Js.add(t),t())}kr.length=0}while(Tn.length);for(;ha.length;)ha.pop()();Ii=!1,Js.clear(),Cn(n)}function cd(n){if(n.fragment!==null){n.update(),zn(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Ei)}}const xr=new Set;let dt;function Qw(){dt={r:0,c:[],p:dt}}function Xw(){dt.r||zn(dt.c),dt=dt.p}function ud(n,e){n&&n.i&&(xr.delete(n),n.i(e))}function Yw(n,e,t,r){if(n&&n.o){if(xr.has(n))return;xr.add(n),dt.c.push(()=>{xr.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}}function Jw(n){n&&n.c()}function hd(n,e,t,r){const{fragment:s,on_mount:i,on_destroy:o,after_update:a}=n.$$;s&&s.m(e,t),r||Ei(()=>{const c=i.map(Bc).filter(td);o?o.push(...c):zn(c),n.$$.on_mount=[]}),a.forEach(Ei)}function ld(n,e){const t=n.$$;t.fragment!==null&&(zn(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function dd(n,e){n.$$.dirty[0]===-1&&(Tn.push(n),ad(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Zw(n,e,t,r,s,i,o,a=[-1]){const c=Yi;Cn(n);const u=n.$$={fragment:null,ctx:null,props:i,update:Vc,not_equal:s,bound:ca(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ca(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let h=!1;if(u.ctx=t?t(n,e.props||{},(l,f,...g)=>{const y=g.length?g[0]:f;return u.ctx&&s(u.ctx[l],u.ctx[l]=y)&&(!u.skip_bound&&u.bound[l]&&u.bound[l](y),h&&dd(n,l)),f}):[],u.update(),h=!0,zn(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const l=id(e.target);u.fragment&&u.fragment.l(l),l.forEach(rd)}else u.fragment&&u.fragment.c();e.intro&&ud(n.$$.fragment),hd(n,e.target,e.anchor,e.customElement),qc()}Cn(c)}class eI{$destroy(){ld(this,1),this.$destroy=Vc}$on(e,t){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!nd(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var Ti=Array.isArray||function(n){return Object.prototype.toString.call(n)=="[object Array]"},Wn=Hc,fd=Ji,pd=vd,gd=$c,md=Kc,yd=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function Ji(n){for(var e=[],t=0,r=0,s="",i;(i=yd.exec(n))!=null;){var o=i[0],a=i[1],c=i.index;if(s+=n.slice(r,c),r=c+o.length,a){s+=a[1];continue}s&&(e.push(s),s="");var u=i[2],h=i[3],l=i[4],f=i[5],g=i[6],y=i[7],A=g==="+"||g==="*",N=g==="?"||g==="*",U=u||"/",ue=l||f||(y?".*":"[^"+U+"]+?");e.push({name:h||t++,prefix:u||"",delimiter:U,optional:N,repeat:A,pattern:wd(ue)})}return r<n.length&&(s+=n.substr(r)),s&&e.push(s),e}function vd(n){return $c(Ji(n))}function $c(n){for(var e=new Array(n.length),t=0;t<n.length;t++)typeof n[t]=="object"&&(e[t]=new RegExp("^"+n[t].pattern+"$"));return function(r){for(var s="",i=r||{},o=0;o<n.length;o++){var a=n[o];if(typeof a=="string"){s+=a;continue}var c=i[a.name],u;if(c==null){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to be defined')}if(Ti(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received "'+c+'"');if(c.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var h=0;h<c.length;h++){if(u=encodeURIComponent(c[h]),!e[o].test(u))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received "'+u+'"');s+=(h===0?a.prefix:a.delimiter)+u}continue}if(u=encodeURIComponent(c),!e[o].test(u))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+u+'"');s+=a.prefix+u}return s}}function la(n){return n.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function wd(n){return n.replace(/([=!:$\/()])/g,"\\$1")}function Zi(n,e){return n.keys=e,n}function jc(n){return n.sensitive?"":"i"}function Id(n,e){var t=n.source.match(/\((?!\?)/g);if(t)for(var r=0;r<t.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return Zi(n,e)}function Ed(n,e,t){for(var r=[],s=0;s<n.length;s++)r.push(Hc(n[s],e,t).source);var i=new RegExp("(?:"+r.join("|")+")",jc(t));return Zi(i,e)}function Td(n,e,t){for(var r=Ji(n),s=Kc(r,t),i=0;i<r.length;i++)typeof r[i]!="string"&&e.push(r[i]);return Zi(s,e)}function Kc(n,e){e=e||{};for(var t=e.strict,r=e.end!==!1,s="",i=n[n.length-1],o=typeof i=="string"&&/\/$/.test(i),a=0;a<n.length;a++){var c=n[a];if(typeof c=="string")s+=la(c);else{var u=la(c.prefix),h=c.pattern;c.repeat&&(h+="(?:"+u+h+")*"),c.optional?u?h="(?:"+u+"("+h+"))?":h="("+h+")?":h=u+"("+h+")",s+=h}}return t||(s=(o?s.slice(0,-2):s)+"(?:\\/(?=$))?"),r?s+="$":s+=t&&o?"":"(?=\\/|$)",new RegExp("^"+s,jc(e))}function Hc(n,e,t){return e=e||[],Ti(e)?t||(t={}):(t=e,e=[]),n instanceof RegExp?Id(n,e):Ti(n)?Ed(n,e,t):Td(n,e,t)}Wn.parse=fd;Wn.compile=pd;Wn.tokensToFunction=gd;Wn.tokensToRegExp=md;var Wt=typeof document!="undefined",Ie=typeof window!="undefined",ds=typeof history!="undefined",_d=typeof process!="undefined",_i=Wt&&document.ontouchstart?"touchstart":"click",Ve=Ie&&!!(window.history.location||window.location);function K(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}K.prototype.configure=function(n){var e=n||{};this._window=e.window||Ie&&window,this._decodeURLComponents=e.decodeURLComponents!==!1,this._popstate=e.popstate!==!1&&Ie,this._click=e.click!==!1&&Wt,this._hashbang=!!e.hashbang;var t=this._window;this._popstate?t.addEventListener("popstate",this._onpopstate,!1):Ie&&t.removeEventListener("popstate",this._onpopstate,!1),this._click?t.document.addEventListener(_i,this.clickHandler,!1):Wt&&t.document.removeEventListener(_i,this.clickHandler,!1),this._hashbang&&Ie&&!ds?t.addEventListener("hashchange",this._onpopstate,!1):Ie&&t.removeEventListener("hashchange",this._onpopstate,!1)};K.prototype.base=function(n){if(arguments.length===0)return this._base;this._base=n};K.prototype._getBase=function(){var n=this._base;if(n)return n;var e=Ie&&this._window&&this._window.location;return Ie&&this._hashbang&&e&&e.protocol==="file:"&&(n=e.pathname),n};K.prototype.strict=function(n){if(arguments.length===0)return this._strict;this._strict=n};K.prototype.start=function(n){var e=n||{};if(this.configure(e),e.dispatch!==!1){this._running=!0;var t;if(Ve){var r=this._window,s=r.location;this._hashbang&&~s.hash.indexOf("#!")?t=s.hash.substr(2)+s.search:this._hashbang?t=s.search+s.hash:t=s.pathname+s.search+s.hash}this.replace(t,null,!0,e.dispatch)}};K.prototype.stop=function(){if(!!this._running){this.current="",this.len=0,this._running=!1;var n=this._window;this._click&&n.document.removeEventListener(_i,this.clickHandler,!1),Ie&&n.removeEventListener("popstate",this._onpopstate,!1),Ie&&n.removeEventListener("hashchange",this._onpopstate,!1)}};K.prototype.show=function(n,e,t,r){var s=new Qn(n,e,this),i=this.prevContext;return this.prevContext=s,this.current=s.path,t!==!1&&this.dispatch(s,i),s.handled!==!1&&r!==!1&&s.pushState(),s};K.prototype.back=function(n,e){var t=this;if(this.len>0){var r=this._window;ds&&r.history.back(),this.len--}else setTimeout(n?function(){t.show(n,e)}:function(){t.show(t._getBase(),e)})};K.prototype.redirect=function(n,e){var t=this;typeof n=="string"&&typeof e=="string"&&fs.call(this,n,function(r){setTimeout(function(){t.replace(e)},0)}),typeof n=="string"&&typeof e=="undefined"&&setTimeout(function(){t.replace(n)},0)};K.prototype.replace=function(n,e,t,r){var s=new Qn(n,e,this),i=this.prevContext;return this.prevContext=s,this.current=s.path,s.init=t,s.save(),r!==!1&&this.dispatch(s,i),s};K.prototype.dispatch=function(n,e){var t=0,r=0,s=this;function i(){var a=s.exits[r++];if(!a)return o();a(e,i)}function o(){var a=s.callbacks[t++];if(n.path!==s.current){n.handled=!1;return}if(!a)return bd.call(s,n);a(n,o)}e?i():o()};K.prototype.exit=function(n,e){if(typeof n=="function")return this.exit("*",n);for(var t=new Xn(n,null,this),r=1;r<arguments.length;++r)this.exits.push(t.middleware(arguments[r]))};K.prototype.clickHandler=function(n){if(this._which(n)===1&&!(n.metaKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented){var e=n.target,t=n.path||(n.composedPath?n.composedPath():null);if(t){for(var r=0;r<t.length;r++)if(!!t[r].nodeName&&t[r].nodeName.toUpperCase()==="A"&&!!t[r].href){e=t[r];break}}for(;e&&e.nodeName.toUpperCase()!=="A";)e=e.parentNode;if(!(!e||e.nodeName.toUpperCase()!=="A")){var s=typeof e.href=="object"&&e.href.constructor.name==="SVGAnimatedString";if(!(e.hasAttribute("download")||e.getAttribute("rel")==="external")){var i=e.getAttribute("href");if(!(!this._hashbang&&this._samePath(e)&&(e.hash||i==="#"))&&!(i&&i.indexOf("mailto:")>-1)&&!(s?e.target.baseVal:e.target)&&!(!s&&!this.sameOrigin(e.href))){var o=s?e.href.baseVal:e.pathname+e.search+(e.hash||"");o=o[0]!=="/"?"/"+o:o,_d&&o.match(/^\/[a-zA-Z]:\//)&&(o=o.replace(/^\/[a-zA-Z]:\//,"/"));var a=o,c=this._getBase();o.indexOf(c)===0&&(o=o.substr(c.length)),this._hashbang&&(o=o.replace("#!","")),!(c&&a===o&&(!Ve||this._window.location.protocol!=="file:"))&&(n.preventDefault(),this.show(a))}}}}};K.prototype._onpopstate=function(){var n=!1;return Ie?(Wt&&document.readyState==="complete"?n=!0:window.addEventListener("load",function(){setTimeout(function(){n=!0},0)}),function(t){if(!!n){var r=this;if(t.state){var s=t.state.path;r.replace(s,t.state)}else if(Ve){var i=r._window.location;r.show(i.pathname+i.search+i.hash,void 0,void 0,!1)}}}):function(){}}();K.prototype._which=function(n){return n=n||Ie&&this._window.event,n.which==null?n.button:n.which};K.prototype._toURL=function(n){var e=this._window;if(typeof URL=="function"&&Ve)return new URL(n,e.location.toString());if(Wt){var t=e.document.createElement("a");return t.href=n,t}};K.prototype.sameOrigin=function(n){if(!n||!Ve)return!1;var e=this._toURL(n),t=this._window,r=t.location;return r.protocol===e.protocol&&r.hostname===e.hostname&&(r.port===e.port||r.port===""&&(e.port==80||e.port==443))};K.prototype._samePath=function(n){if(!Ve)return!1;var e=this._window,t=e.location;return n.pathname===t.pathname&&n.search===t.search};K.prototype._decodeURLEncodedURIComponent=function(n){return typeof n!="string"?n:this._decodeURLComponents?decodeURIComponent(n.replace(/\+/g," ")):n};function Gc(){var n=new K;function e(){return fs.apply(n,arguments)}return e.callbacks=n.callbacks,e.exits=n.exits,e.base=n.base.bind(n),e.strict=n.strict.bind(n),e.start=n.start.bind(n),e.stop=n.stop.bind(n),e.show=n.show.bind(n),e.back=n.back.bind(n),e.redirect=n.redirect.bind(n),e.replace=n.replace.bind(n),e.dispatch=n.dispatch.bind(n),e.exit=n.exit.bind(n),e.configure=n.configure.bind(n),e.sameOrigin=n.sameOrigin.bind(n),e.clickHandler=n.clickHandler.bind(n),e.create=Gc,Object.defineProperty(e,"len",{get:function(){return n.len},set:function(t){n.len=t}}),Object.defineProperty(e,"current",{get:function(){return n.current},set:function(t){n.current=t}}),e.Context=Qn,e.Route=Xn,e}function fs(n,e){if(typeof n=="function")return fs.call(this,"*",n);if(typeof e=="function")for(var t=new Xn(n,null,this),r=1;r<arguments.length;++r)this.callbacks.push(t.middleware(arguments[r]));else typeof n=="string"?this[typeof e=="string"?"redirect":"show"](n,e):this.start(n)}function bd(n){if(!n.handled){var e,t=this,r=t._window;t._hashbang?e=Ve&&this._getBase()+r.location.hash.replace("#!",""):e=Ve&&r.location.pathname+r.location.search,e!==n.canonicalPath&&(t.stop(),n.handled=!1,Ve&&(r.location.href=n.canonicalPath))}}function Sd(n){return n.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Qn(n,e,t){var r=this.page=t||fs,s=r._window,i=r._hashbang,o=r._getBase();n[0]==="/"&&n.indexOf(o)!==0&&(n=o+(i?"#!":"")+n);var a=n.indexOf("?");this.canonicalPath=n;var c=new RegExp("^"+Sd(o));if(this.path=n.replace(c,"")||"/",i&&(this.path=this.path.replace("#!","")||"/"),this.title=Wt&&s.document.title,this.state=e||{},this.state.path=n,this.querystring=~a?r._decodeURLEncodedURIComponent(n.slice(a+1)):"",this.pathname=r._decodeURLEncodedURIComponent(~a?n.slice(0,a):n),this.params={},this.hash="",!i){if(!~this.path.indexOf("#"))return;var u=this.path.split("#");this.path=this.pathname=u[0],this.hash=r._decodeURLEncodedURIComponent(u[1])||"",this.querystring=this.querystring.split("#")[0]}}Qn.prototype.pushState=function(){var n=this.page,e=n._window,t=n._hashbang;n.len++,ds&&e.history.pushState(this.state,this.title,t&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};Qn.prototype.save=function(){var n=this.page;ds&&n._window.history.replaceState(this.state,this.title,n._hashbang&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};function Xn(n,e,t){var r=this.page=t||eo,s=e||{};s.strict=s.strict||r._strict,this.path=n==="*"?"(.*)":n,this.method="GET",this.regexp=Wn(this.path,this.keys=[],s)}Xn.prototype.middleware=function(n){var e=this;return function(t,r){if(e.match(t.path,t.params))return t.routePath=e.path,n(t,r);r()}};Xn.prototype.match=function(n,e){var t=this.keys,r=n.indexOf("?"),s=~r?n.slice(0,r):n,i=this.regexp.exec(decodeURIComponent(s));if(!i)return!1;delete e[0];for(var o=1,a=i.length;o<a;++o){var c=t[o-1],u=this.page._decodeURLEncodedURIComponent(i[o]);(u!==void 0||!hasOwnProperty.call(e,c.name))&&(e[c.name]=u)}return!0};var eo=Gc(),Cd=eo,Ad=eo;Cd.default=Ad;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},kd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Wc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,h=i>>2,l=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(f=64)),r.push(t[h],t[l],t[f],t[g])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(zc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):kd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const l=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||u==null||l==null)throw Error();const f=i<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),l!==64){const y=u<<6&192|l;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Qc=function(n){const e=zc(n);return Wc.encodeByteArray(e,!0)},xd=function(n){try{return Wc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xc(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(B())}function Nd(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Yc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Jc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rd(){return B().indexOf("Electron/")>=0}function Zc(){const n=B();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Od(){return B().indexOf("MSAppHost/")>=0}function Pd(){return!Nd()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function eu(){return typeof indexedDB=="object"}function Ld(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="FirebaseError";class Dt extends Error{constructor(e,t,r){super(t);this.code=e,this.customData=r,this.name=Md,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yn.prototype.create)}}class Yn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ud(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Dt(s,a,r)}}function Ud(n,e){return n.replace(Fd,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Fd=/\{\$([^}]+)}/g;function Vd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Vr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(da(i)&&da(o)){if(!Vr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function da(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bd(n,e){const t=new qd(n,e);return t.subscribe.bind(t)}class qd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");$d(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Zs),s.error===void 0&&(s.error=Zs),s.complete===void 0&&(s.complete=Zs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $d(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Zs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(n){return n&&n._delegate?n._delegate:n}class wt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Dd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hd(e))try{this.getOrInitializeService({instanceIdentifier:ut})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ut){return this.instances.has(e)}getOptions(e=ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(!!r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Kd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ut){return this.component?this.component.multipleInstances?e:ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kd(n){return n===ut?void 0:n}function Hd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(D||(D={}));const zd={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Wd=D.INFO,Qd={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Xd=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Qd[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class to{constructor(e){this.name=e,this._logLevel=Wd,this._logHandler=Xd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}function Yd(n){return Array.prototype.slice.call(n)}function tu(n){return new Promise(function(e,t){n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function no(n,e,t){var r,s=new Promise(function(i,o){r=n[e].apply(n,t),tu(r).then(i,o)});return s.request=r,s}function Jd(n,e,t){var r=no(n,e,t);return r.then(function(s){if(!!s)return new On(s,r.request)})}function an(n,e,t){t.forEach(function(r){Object.defineProperty(n.prototype,r,{get:function(){return this[e][r]},set:function(s){this[e][r]=s}})})}function ro(n,e,t,r){r.forEach(function(s){s in t.prototype&&(n.prototype[s]=function(){return no(this[e],s,arguments)})})}function ps(n,e,t,r){r.forEach(function(s){s in t.prototype&&(n.prototype[s]=function(){return this[e][s].apply(this[e],arguments)})})}function nu(n,e,t,r){r.forEach(function(s){s in t.prototype&&(n.prototype[s]=function(){return Jd(this[e],s,arguments)})})}function Nt(n){this._index=n}an(Nt,"_index",["name","keyPath","multiEntry","unique"]);ro(Nt,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);nu(Nt,"_index",IDBIndex,["openCursor","openKeyCursor"]);function On(n,e){this._cursor=n,this._request=e}an(On,"_cursor",["direction","key","primaryKey","value"]);ro(On,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(n){n in IDBCursor.prototype&&(On.prototype[n]=function(){var e=this,t=arguments;return Promise.resolve().then(function(){return e._cursor[n].apply(e._cursor,t),tu(e._request).then(function(r){if(!!r)return new On(r,e._request)})})})});function Oe(n){this._store=n}Oe.prototype.createIndex=function(){return new Nt(this._store.createIndex.apply(this._store,arguments))};Oe.prototype.index=function(){return new Nt(this._store.index.apply(this._store,arguments))};an(Oe,"_store",["name","keyPath","indexNames","autoIncrement"]);ro(Oe,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);nu(Oe,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);ps(Oe,"_store",IDBObjectStore,["deleteIndex"]);function Zn(n){this._tx=n,this.complete=new Promise(function(e,t){n.oncomplete=function(){e()},n.onerror=function(){t(n.error)},n.onabort=function(){t(n.error)}})}Zn.prototype.objectStore=function(){return new Oe(this._tx.objectStore.apply(this._tx,arguments))};an(Zn,"_tx",["objectStoreNames","mode"]);ps(Zn,"_tx",IDBTransaction,["abort"]);function gs(n,e,t){this._db=n,this.oldVersion=e,this.transaction=new Zn(t)}gs.prototype.createObjectStore=function(){return new Oe(this._db.createObjectStore.apply(this._db,arguments))};an(gs,"_db",["name","version","objectStoreNames"]);ps(gs,"_db",IDBDatabase,["deleteObjectStore","close"]);function ms(n){this._db=n}ms.prototype.transaction=function(){return new Zn(this._db.transaction.apply(this._db,arguments))};an(ms,"_db",["name","version","objectStoreNames"]);ps(ms,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(n){[Oe,Nt].forEach(function(e){n in e.prototype&&(e.prototype[n.replace("open","iterate")]=function(){var t=Yd(arguments),r=t[t.length-1],s=this._store||this._index,i=s[n].apply(s,t.slice(0,-1));i.onsuccess=function(){r(i.result)}})})});[Nt,Oe].forEach(function(n){n.prototype.getAll||(n.prototype.getAll=function(e,t){var r=this,s=[];return new Promise(function(i){r.iterateCursor(e,function(o){if(!o){i(s);return}if(s.push(o.value),t!==void 0&&s.length==t){i(s);return}o.continue()})})})});function Zd(n,e,t){var r=no(indexedDB,"open",[n,e]),s=r.request;return s&&(s.onupgradeneeded=function(i){t&&t(new gs(s.result,i.oldVersion,s.transaction))}),r.then(function(i){return new ms(i)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(tf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function tf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bi="@firebase/app",fa="0.7.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=new to("@firebase/app"),nf="@firebase/app-compat",rf="@firebase/analytics-compat",sf="@firebase/analytics",of="@firebase/app-check-compat",af="@firebase/app-check",cf="@firebase/auth",uf="@firebase/auth-compat",hf="@firebase/database",lf="@firebase/database-compat",df="@firebase/functions",ff="@firebase/functions-compat",pf="@firebase/installations",gf="@firebase/installations-compat",mf="@firebase/messaging",yf="@firebase/messaging-compat",vf="@firebase/performance",wf="@firebase/performance-compat",If="@firebase/remote-config",Ef="@firebase/remote-config-compat",Tf="@firebase/storage",_f="@firebase/storage-compat",bf="@firebase/firestore",Sf="@firebase/firestore-compat",Cf="firebase",Af="9.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="[DEFAULT]",kf={[bi]:"fire-core",[nf]:"fire-core-compat",[sf]:"fire-analytics",[rf]:"fire-analytics-compat",[af]:"fire-app-check",[of]:"fire-app-check-compat",[cf]:"fire-auth",[uf]:"fire-auth-compat",[hf]:"fire-rtdb",[lf]:"fire-rtdb-compat",[df]:"fire-fn",[ff]:"fire-fn-compat",[pf]:"fire-iid",[gf]:"fire-iid-compat",[mf]:"fire-fcm",[yf]:"fire-fcm-compat",[vf]:"fire-perf",[wf]:"fire-perf-compat",[If]:"fire-rc",[Ef]:"fire-rc-compat",[Tf]:"fire-gcs",[_f]:"fire-gcs-compat",[bf]:"fire-fst",[Sf]:"fire-fst-compat","fire-js":"fire-js",[Cf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new Map,Si=new Map;function xf(n,e){try{n.container.addComponent(e)}catch(t){so.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Qt(n){const e=n.name;if(Si.has(e))return so.debug(`There were multiple attempts to register component ${e}.`),!1;Si.set(e,n);for(const t of Br.values())xf(t,n);return!0}function io(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},rt=new Yn("app","Firebase",Df);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=Af;function tI(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:ru,automaticDataCollectionEnabled:!1},e),r=t.name;if(typeof r!="string"||!r)throw rt.create("bad-app-name",{appName:String(r)});const s=Br.get(r);if(s){if(Vr(n,s.options)&&Vr(t,s.config))return s;throw rt.create("duplicate-app",{appName:r})}const i=new Gd(r);for(const a of Si.values())i.addComponent(a);const o=new Nf(n,t,i);return Br.set(r,o),o}function su(n=ru){const e=Br.get(n);if(!e)throw rt.create("no-app",{appName:n});return e}function Ze(n,e,t){var r;let s=(r=kf[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),so.warn(a.join(" "));return}Qt(new wt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf="firebase-heartbeat-database",Of=1,It="firebase-heartbeat-store";let ei=null;function oo(){return ei||(ei=Zd(Rf,Of,n=>{switch(n.oldVersion){case 0:n.createObjectStore(It)}}).catch(n=>{throw rt.create("storage-open",{originalErrorMessage:n.message})})),ei}async function Pf(n){try{return(await oo()).transaction(It).objectStore(It).get(ao(n))}catch(e){throw rt.create("storage-get",{originalErrorMessage:e.message})}}async function ti(n,e){try{const r=(await oo()).transaction(It,"readwrite");return await r.objectStore(It).put(e,ao(n)),r.complete}catch(t){throw rt.create("storage-set",{originalErrorMessage:t.message})}}async function Lf(n){try{const t=(await oo()).transaction(It,"readwrite");return await t.objectStore(It).delete(ao(n)),t.complete}catch(e){throw rt.create("storage-delete",{originalErrorMessage:e.message})}}function ao(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=1024,Uf=30*24*60*60*1e3;class Ff{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qf(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Vf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some(s=>s.date===r))return this._heartbeatsCache.push({date:r,userAgent:t}),this._heartbeatsCache=this._heartbeatsCache.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Uf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null)return"";const{heartbeatsToSend:e,unsentEntries:t}=Bf(this._heartbeatsCache),r=Qc(JSON.stringify({version:2,heartbeats:e}));return t.length>0?(this._heartbeatsCache=t,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),r}}function Vf(){return new Date().toISOString().substring(0,10)}function Bf(n,e=Mf){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.userAgent===s.userAgent);if(i){if(i.dates.push(s.date),pa(t)>e){i.dates.pop();break}}else if(t.push({userAgent:s.userAgent,dates:[s.date]}),pa(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class qf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eu()?Ld().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Pf(this.app);return(t==null?void 0:t.heartbeats)||[]}else return[]}async overwrite(e){if(await this._canUseIndexedDBPromise)return ti(this.app,{heartbeats:e})}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ti(this.app,{heartbeats:[...r,...e]})}else return}async delete(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ti(this.app,{heartbeats:r.filter(s=>!e.includes(s))})}else return}async deleteAll(){if(await this._canUseIndexedDBPromise)return Lf(this.app)}}function pa(n){return Qc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(n){Qt(new wt("platform-logger",e=>new ef(e),"PRIVATE")),Qt(new wt("heartbeat",e=>new Ff(e),"PRIVATE")),Ze(bi,fa,n),Ze(bi,fa,"esm2017"),Ze("fire-js","")}$f("");var jf="firebase",Kf="9.6.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ze(jf,Kf,"app");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function co(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function iu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hf=iu,ou=new Yn("auth","Firebase",iu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=new to("@firebase/auth");function Dr(n,...e){ga.logLevel<=D.ERROR&&ga.error(`Auth (${er}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(n,...e){throw uo(n,...e)}function xe(n,...e){return uo(n,...e)}function au(n,e,t){const r=Object.assign(Object.assign({},Hf()),{[e]:t});return new Yn("auth","Firebase",r).create(e,{appName:n.name})}function Gf(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Re(n,"argument-error"),au(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function uo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ou.create(n,...e)}function b(n,e,...t){if(!n)throw uo(e,...t)}function Le(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Dr(e),new Error(e)}function qe(n,e){n||Le(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=new Map;function Me(n){qe(n instanceof Function,"Expected a class definition");let e=ma.get(n);return e?(qe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ma.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(n,e){const t=io(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Vr(i,e!=null?e:{}))return s;Re(s,"already-initialized")}return t.initialize({options:e})}function Wf(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Me);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Qf(){return ya()==="http:"||ya()==="https:"}function ya(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qf()||Yc()||"connection"in navigator)?navigator.onLine:!0}function Yf(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t){this.shortDelay=e,this.longDelay=t,qe(t>e,"Short delay should be less than long delay!"),this.isMobile=Xc()||Jc()}get(){return Xf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(n,e){qe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Le("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Le("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Le("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=new tr(3e4,6e4);function ep(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ys(n,e,t,r,s={}){return uu(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Jn(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),cu.fetch()(hu(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function uu(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Jf),e);try{const s=new np(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ni(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ni(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ni(n,"email-already-in-use",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw au(n,h,u);Re(n,h)}}catch(s){if(s instanceof Dt)throw s;Re(n,"network-request-failed")}}async function tp(n,e,t,r,s={}){const i=await ys(n,e,t,r,s);return"mfaPendingCredential"in i&&Re(n,"multi-factor-auth-required",{_serverResponse:i}),i}function hu(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?ho(n.config,s):`${n.config.apiScheme}://${s}`}class np{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(xe(this.auth,"network-request-failed")),Zf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ni(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=xe(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rp(n,e){return ys(n,"POST","/v1/accounts:delete",e)}async function sp(n,e){return ys(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ip(n,e=!1){const t=ot(n),r=await t.getIdToken(e),s=lo(r);b(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:An(ri(s.auth_time)),issuedAtTime:An(ri(s.iat)),expirationTime:An(ri(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ri(n){return Number(n)*1e3}function lo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Dr("JWT malformed, contained fewer than 3 sections"),null;try{const s=xd(t);return s?JSON.parse(s):(Dr("Failed to decode base64 JWT payload"),null)}catch(s){return Dr("Caught error parsing JWT payload as JSON",s),null}}function op(n){const e=lo(n);return b(e,"internal-error"),b(typeof e.exp!="undefined","internal-error"),b(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Dt&&ap(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ap({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=An(this.lastLoginAt),this.creationTime=An(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Pn(n,sp(t,{idToken:r}));b(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?lp(i.providerUserInfo):[],a=hp(n.providerData,o),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new lu(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,l)}async function up(n){const e=ot(n);await qr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hp(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function lp(n){return n.map(e=>{var{providerId:t}=e,r=co(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dp(n,e){const t=await uu(n,{},async()=>{const r=Jn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=hu(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",cu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken!="undefined","internal-error"),b(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):op(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return b(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await dp(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Ln;return r&&(b(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(b(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(b(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ln,this.toJSON())}_performRefresh(){return Le("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(n,e){b(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class mt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=co(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new lu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Pn(this,this.stsTokenManager.getToken(this.auth,e));return b(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ip(this,e)}reload(){return up(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new mt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await qr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Pn(this,rp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,a,c,u,h;const l=(r=t.displayName)!==null&&r!==void 0?r:void 0,f=(s=t.email)!==null&&s!==void 0?s:void 0,g=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=t.photoURL)!==null&&o!==void 0?o:void 0,A=(a=t.tenantId)!==null&&a!==void 0?a:void 0,N=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,U=(u=t.createdAt)!==null&&u!==void 0?u:void 0,ue=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:Pe,emailVerified:Ke,isAnonymous:mn,providerData:yn,stsTokenManager:vn}=t;b(Pe&&vn,e,"internal-error");const Zl=Ln.fromJSON(this.name,vn);b(typeof Pe=="string",e,"internal-error"),He(l,e.name),He(f,e.name),b(typeof Ke=="boolean",e,"internal-error"),b(typeof mn=="boolean",e,"internal-error"),He(g,e.name),He(y,e.name),He(A,e.name),He(N,e.name),He(U,e.name),He(ue,e.name);const Ys=new mt({uid:Pe,auth:e,email:f,emailVerified:Ke,displayName:l,isAnonymous:mn,photoURL:y,phoneNumber:g,tenantId:A,stsTokenManager:Zl,createdAt:U,lastLoginAt:ue});return yn&&Array.isArray(yn)&&(Ys.providerData=yn.map(ed=>Object.assign({},ed))),N&&(Ys._redirectEventId=N),Ys}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ln;s.updateFromServerResponse(t);const i=new mt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await qr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}du.type="NONE";const va=du;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(n,e,t){return`firebase:${n}:${e}:${t}`}class jt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Nr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Nr("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new jt(Me(va),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Me(va);const o=Nr(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const h=await u._get(o);if(h){const l=mt._fromJSON(e,h);u!==i&&(a=l),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new jt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new jt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yu(e))return"Blackberry";if(vu(e))return"Webos";if(fo(e))return"Safari";if((e.includes("chrome/")||pu(e))&&!e.includes("edge/"))return"Chrome";if(mu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function fu(n=B()){return/firefox\//i.test(n)}function fo(n=B()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pu(n=B()){return/crios\//i.test(n)}function gu(n=B()){return/iemobile/i.test(n)}function mu(n=B()){return/android/i.test(n)}function yu(n=B()){return/blackberry/i.test(n)}function vu(n=B()){return/webos/i.test(n)}function vs(n=B()){return/iphone|ipad|ipod/i.test(n)}function fp(n=B()){var e;return vs(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pp(){return Zc()&&document.documentMode===10}function wu(n=B()){return vs(n)||mu(n)||vu(n)||yu(n)||/windows phone/i.test(n)||gu(n)}function gp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(n,e=[]){let t;switch(n){case"Browser":t=wa(B());break;case"Worker":t=`${wa(B())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${er}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ia(this),this.idTokenSubscription=new Ia(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ou,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Me(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await jt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var t;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await qr(e)}catch(t){if(t.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Yf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ot(e):null;return t&&b(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Me(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Me(e)||this._popupRedirectResolver;b(t,this,"argument-error"),this.redirectPersistenceManager=await jt.create(this,[Me(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return b(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof t=="function"?e.addObserver(t,r,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Iu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function po(n){return ot(n)}class Ia{constructor(e){this.auth=e,this.observer=null,this.addObserver=Bd(t=>this.observer=t)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Le("not implemented")}_getIdTokenResponse(e){return Le("not implemented")}_linkToIdToken(e,t){return Le("not implemented")}_getReauthenticationResolver(e){return Le("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(n,e){return tp(n,"POST","/v1/accounts:signInWithIdp",ep(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="http://localhost";class Et extends Eu{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const t=new Et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Re("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=co(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Et(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Kt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Kt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Kt(e,t)}buildRequest(){const e={requestUri:yp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Jn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends go{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends nr{constructor(){super("facebook.com")}static credential(e){return Et._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ze.credentialFromTaggedObject(e)}static credentialFromError(e){return ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ze.credential(e.oauthAccessToken)}catch{return null}}}ze.FACEBOOK_SIGN_IN_METHOD="facebook.com";ze.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends nr{constructor(){super("google.com");this.addScope("profile")}static credential(e,t){return Et._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return We.credential(t,r)}catch{return null}}}We.GOOGLE_SIGN_IN_METHOD="google.com";We.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends nr{constructor(){super("github.com")}static credential(e){return Et._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qe.credential(e.oauthAccessToken)}catch{return null}}}Qe.GITHUB_SIGN_IN_METHOD="github.com";Qe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends nr{constructor(){super("twitter.com")}static credential(e,t){return Et._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Xe.credential(t,r)}catch{return null}}}Xe.TWITTER_SIGN_IN_METHOD="twitter.com";Xe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await mt._fromIdTokenResponse(e,r,s),o=Ea(r);return new Xt({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Ea(r);return new Xt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Ea(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends Dt{constructor(e,t,r,s){var i;super(t.code,t.message);this.operationType=r,this.user=s,Object.setPrototypeOf(this,$r.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new $r(e,t,r,s)}}function Tu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$r._fromErrorAndOperation(n,i,e,r):i})}async function vp(n,e,t=!1){const r=await Pn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Xt._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wp(n,e,t=!1){const{auth:r}=n,s="reauthenticate";try{const i=await Pn(n,Tu(r,s,e,n),t);b(i.idToken,r,"internal-error");const o=lo(i.idToken);b(o,r,"internal-error");const{sub:a}=o;return b(n.uid===a,r,"user-mismatch"),Xt._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Re(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ip(n,e,t=!1){const r="signIn",s=await Tu(n,r,e),i=await Xt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function nI(n,e,t,r){return ot(n).onAuthStateChanged(e,t,r)}function rI(n){return ot(n).signOut()}const jr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(jr,"1"),this.storage.removeItem(jr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(){const n=B();return fo(n)||vs(n)}const Tp=1e3,_p=10;class bu extends _u{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ep()&&gp(),this.fallbackToPolling=wu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);pp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,_p):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Tp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bu.type="LOCAL";const bp=bu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su extends _u{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Su.type="SESSION";const Cu=Su;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ws(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(t.origin,i)),c=await Sp(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ws.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=mo("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(l){const f=l;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return window}function Ap(n){De().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(){return typeof De().WorkerGlobalScope!="undefined"&&typeof De().importScripts=="function"}async function kp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Dp(){return Au()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="firebaseLocalStorageDb",Np=1,Kr="firebaseLocalStorage",xu="fbase_key";class rr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Is(n,e){return n.transaction([Kr],e?"readwrite":"readonly").objectStore(Kr)}function Rp(){const n=indexedDB.deleteDatabase(ku);return new rr(n).toPromise()}function Ai(){const n=indexedDB.open(ku,Np);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Kr,{keyPath:xu})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Kr)?e(r):(r.close(),await Rp(),e(await Ai()))})})}async function Ta(n,e,t){const r=Is(n,!0).put({[xu]:e,value:t});return new rr(r).toPromise()}async function Op(n,e){const t=Is(n,!1).get(e),r=await new rr(t).toPromise();return r===void 0?null:r.value}function _a(n,e){const t=Is(n,!0).delete(e);return new rr(t).toPromise()}const Pp=800,Lp=3;class Du{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ai(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Lp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Au()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ws._getInstance(Dp()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await kp(),!this.activeServiceWorker)return;this.sender=new Cp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((t=r[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ai();return await Ta(e,jr,"1"),await _a(e,jr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ta(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Op(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_a(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Is(s,!1).getAll();return new rr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Du.type="LOCAL";const Mp=Du;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Fp(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=xe("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Up().appendChild(r)})}function Vp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new tr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(n,e){return e?Me(e):(b(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends Eu{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Kt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Kt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Kt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Bp(n){return Ip(n.auth,new yo(n),n.bypassAuthState)}function qp(n){const{auth:e,user:t}=n;return b(t,e,"internal-error"),wp(t,new yo(n),n.bypassAuthState)}async function $p(n){const{auth:e,user:t}=n;return b(t,e,"internal-error"),vp(t,new yo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Bp;case"linkViaPopup":case"linkViaRedirect":return $p;case"reauthViaPopup":case"reauthViaRedirect":return qp;default:Re(this.auth,"internal-error")}}resolve(e){qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=new tr(2e3,1e4);async function sI(n,e,t){const r=po(n);Gf(n,e,go);const s=Nu(r,t);return new ft(r,"signInViaPopup",e,s).executeNotNull()}class ft extends Ru{constructor(e,t,r,s,i){super(e,t,s,i);this.provider=r,this.authWindow=null,this.pollId=null,ft.currentPopupAction&&ft.currentPopupAction.cancel(),ft.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){qe(this.filter.length===1,"Popup operations only handle one event");const e=mo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ft.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,jp.get())};e()}}ft.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp="pendingRedirect",si=new Map;class Hp extends Ru{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r);this.eventId=null}async execute(){let e=si.get(this.auth._key());if(!e){try{const r=await Gp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}si.set(this.auth._key(),e)}return this.bypassAuthState||si.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gp(n,e){const t=Wp(e),r=zp(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function zp(n){return Me(n._redirectPersistence)}function Wp(n){return Nr(Kp,n.config.apiKey,n.name)}async function Qp(n,e,t=!1){const r=po(n),s=Nu(r,e),o=await new Hp(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=10*60*1e3;class Yp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Jp(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ou(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(xe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xp&&this.cachedEventUids.clear(),this.cachedEventUids.has(ba(e))}saveEventToCache(e){this.cachedEventUids.add(ba(e)),this.lastProcessedEventTime=Date.now()}}function ba(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ou({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Jp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ou(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zp(n,e={}){return ys(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tg=/^https?/;async function ng(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Zp(n);for(const t of e)try{if(rg(t))return}catch{}Re(n,"unauthorized-domain")}function rg(n){const e=Ci(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!tg.test(t))return!1;if(eg.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=new tr(3e4,6e4);function Sa(){const n=De().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ig(n){return new Promise((e,t)=>{var r,s,i;function o(){Sa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sa(),t(xe(n,"network-request-failed"))},timeout:sg.get()})}if(!((s=(r=De().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=De().gapi)===null||i===void 0)&&i.load)o();else{const a=Vp("iframefcb");return De()[a]=()=>{gapi.load?o():t(xe(n,"network-request-failed"))},Fp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Rr=null,e})}let Rr=null;function og(n){return Rr=Rr||ig(n),Rr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=new tr(5e3,15e3),cg="__/auth/iframe",ug="emulator/auth/iframe",hg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dg(n){const e=n.config;b(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ho(e,ug):`https://${n.config.authDomain}/${cg}`,r={apiKey:e.apiKey,appName:n.name,v:er},s=lg.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Jn(r).slice(1)}`}async function fg(n){const e=await og(n),t=De().gapi;return b(t,n,"internal-error"),e.open({where:document.body,url:dg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=xe(n,"network-request-failed"),a=De().setTimeout(()=>{i(o)},ag.get());function c(){De().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gg=500,mg=600,yg="_blank",vg="http://localhost";class Ca{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wg(n,e,t,r=gg,s=mg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},pg),{width:r.toString(),height:s.toString(),top:i,left:o}),u=B().toLowerCase();t&&(a=pu(u)?yg:t),fu(u)&&(e=e||vg,c.scrollbars="yes");const h=Object.entries(c).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(fp(u)&&a!=="_self")return Ig(e||"",a),new Ca(null);const l=window.open(e||"",a,h);b(l,n,"popup-blocked");try{l.focus()}catch{}return new Ca(l)}function Ig(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="__/auth/handler",Tg="emulator/auth/handler";function Aa(n,e,t,r,s,i){b(n.config.authDomain,n,"auth-domain-config-required"),b(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:er,eventId:s};if(e instanceof go){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Vd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof nr){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${_g(n)}?${Jn(a).slice(1)}`}function _g({config:n}){return n.emulator?ho(n,Tg):`https://${n.authDomain}/${Eg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii="webStorageSupport";class bg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cu,this._completeRedirectFn=Qp}async _openPopup(e,t,r,s){var i;qe((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Aa(e,t,r,Ci(),s);return wg(e,o,mo())}async _openRedirect(e,t,r,s){return await this._originValidation(e),Ap(Aa(e,t,r,Ci(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(qe(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await fg(e),r=new Yp(e);return t.register("authEvent",s=>(b(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ii,{type:ii},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ii];o!==void 0&&t(!!o),Re(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ng(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return wu()||fo()||vs()}}const Sg=bg;var ka="@firebase/auth",xa="0.19.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function kg(n){Qt(new wt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:i}=r.options;return(o=>{b(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),b(!(i!=null&&i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:i,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Iu(n)},c=new mp(o,a);return Wf(c,t),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Qt(new wt("auth-internal",e=>{const t=po(e.getProvider("auth").getImmediate());return(r=>new Cg(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ze(ka,xa,Ag(n)),Ze(ka,xa,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(n=su()){const e=io(n,"auth");return e.isInitialized()?e.getImmediate():zf(n,{popupRedirectResolver:Sg,persistence:[Mp,bp,Cu]})}kg("Browser");var xg=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},v,vo=vo||{},_=xg||self;function Hr(){}function ki(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function sr(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Dg(n){return Object.prototype.hasOwnProperty.call(n,oi)&&n[oi]||(n[oi]=++Ng)}var oi="closure_uid_"+(1e9*Math.random()>>>0),Ng=0;function Rg(n,e,t){return n.call.apply(n.bind,arguments)}function Og(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function ee(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ee=Rg:ee=Og,ee.apply(null,arguments)}function yr(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function ne(n,e){function t(){}t.prototype=e.prototype,n.Z=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function at(){this.s=this.s,this.o=this.o}var Pg=0,Lg={};at.prototype.s=!1;at.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Pg!=0)){var n=Dg(this);delete Lg[n]}};at.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Pu=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1},Lu=Array.prototype.forEach?function(n,e,t){Array.prototype.forEach.call(n,e,t)}:function(n,e,t){const r=n.length,s=typeof n=="string"?n.split(""):n;for(let i=0;i<r;i++)i in s&&e.call(t,s[i],i,n)};function Mg(n){e:{var e=Am;const t=n.length,r=typeof n=="string"?n.split(""):n;for(let s=0;s<t;s++)if(s in r&&e.call(void 0,r[s],s,n)){e=s;break e}e=-1}return 0>e?null:typeof n=="string"?n.charAt(e):n[e]}function Da(n){return Array.prototype.concat.apply([],arguments)}function wo(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function Gr(n){return/^[\s\xa0]*$/.test(n)}var Na=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function ie(n,e){return n.indexOf(e)!=-1}function ai(n,e){return n<e?-1:n>e?1:0}var oe;e:{var Ra=_.navigator;if(Ra){var Oa=Ra.userAgent;if(Oa){oe=Oa;break e}}oe=""}function Io(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function Mu(n){const e={};for(const t in n)e[t]=n[t];return e}var Pa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Uu(n,e){let t,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(t in r)n[t]=r[t];for(let i=0;i<Pa.length;i++)t=Pa[i],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function Eo(n){return Eo[" "](n),n}Eo[" "]=Hr;function Ug(n){var e=Bg;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var Fg=ie(oe,"Opera"),Yt=ie(oe,"Trident")||ie(oe,"MSIE"),Fu=ie(oe,"Edge"),xi=Fu||Yt,Vu=ie(oe,"Gecko")&&!(ie(oe.toLowerCase(),"webkit")&&!ie(oe,"Edge"))&&!(ie(oe,"Trident")||ie(oe,"MSIE"))&&!ie(oe,"Edge"),Vg=ie(oe.toLowerCase(),"webkit")&&!ie(oe,"Edge");function Bu(){var n=_.document;return n?n.documentMode:void 0}var zr;e:{var ci="",ui=function(){var n=oe;if(Vu)return/rv:([^\);]+)(\)|;)/.exec(n);if(Fu)return/Edge\/([\d\.]+)/.exec(n);if(Yt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Vg)return/WebKit\/(\S+)/.exec(n);if(Fg)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(ui&&(ci=ui?ui[1]:""),Yt){var hi=Bu();if(hi!=null&&hi>parseFloat(ci)){zr=String(hi);break e}}zr=ci}var Bg={};function qg(){return Ug(function(){let n=0;const e=Na(String(zr)).split("."),t=Na("9").split("."),r=Math.max(e.length,t.length);for(let o=0;n==0&&o<r;o++){var s=e[o]||"",i=t[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;n=ai(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||ai(s[2].length==0,i[2].length==0)||ai(s[2],i[2]),s=s[3],i=i[3]}while(n==0)}return 0<=n})}var Di;if(_.document&&Yt){var La=Bu();Di=La||parseInt(zr,10)||void 0}else Di=void 0;var $g=Di,jg=function(){if(!_.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{_.addEventListener("test",Hr,e),_.removeEventListener("test",Hr,e)}catch{}return n}();function se(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};function Mn(n,e){if(se.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Vu){e:{try{Eo(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Kg[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Mn.Z.h.call(this)}}ne(Mn,se);var Kg={2:"touch",3:"pen",4:"mouse"};Mn.prototype.h=function(){Mn.Z.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var ir="closure_listenable_"+(1e6*Math.random()|0),Hg=0;function Gg(n,e,t,r,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.ia=s,this.key=++Hg,this.ca=this.fa=!1}function Es(n){n.ca=!0,n.listener=null,n.proxy=null,n.src=null,n.ia=null}function Ts(n){this.src=n,this.g={},this.h=0}Ts.prototype.add=function(n,e,t,r,s){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=Ri(n,e,r,s);return-1<o?(e=n[o],t||(e.fa=!1)):(e=new Gg(e,this.src,i,!!r,s),e.fa=t,n.push(e)),e};function Ni(n,e){var t=e.type;if(t in n.g){var r=n.g[t],s=Pu(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Es(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Ri(n,e,t,r){for(var s=0;s<n.length;++s){var i=n[s];if(!i.ca&&i.listener==e&&i.capture==!!t&&i.ia==r)return s}return-1}var To="closure_lm_"+(1e6*Math.random()|0),li={};function qu(n,e,t,r,s){if(r&&r.once)return ju(n,e,t,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)qu(n,e[i],t,r,s);return null}return t=So(t),n&&n[ir]?n.N(e,t,sr(r)?!!r.capture:!!r,s):$u(n,e,t,!1,r,s)}function $u(n,e,t,r,s,i){if(!e)throw Error("Invalid event type");var o=sr(s)?!!s.capture:!!s,a=bo(n);if(a||(n[To]=a=new Ts(n)),t=a.add(e,t,r,o,i),t.proxy)return t;if(r=zg(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)jg||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),r,s);else if(n.attachEvent)n.attachEvent(Hu(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function zg(){function n(t){return e.call(n.src,n.listener,t)}var e=Wg;return n}function ju(n,e,t,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)ju(n,e[i],t,r,s);return null}return t=So(t),n&&n[ir]?n.O(e,t,sr(r)?!!r.capture:!!r,s):$u(n,e,t,!0,r,s)}function Ku(n,e,t,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ku(n,e[i],t,r,s);else r=sr(r)?!!r.capture:!!r,t=So(t),n&&n[ir]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=Ri(i,t,r,s),-1<t&&(Es(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=bo(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Ri(e,t,r,s)),(t=-1<n?e[n]:null)&&_o(t))}function _o(n){if(typeof n!="number"&&n&&!n.ca){var e=n.src;if(e&&e[ir])Ni(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(Hu(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=bo(e))?(Ni(t,n),t.h==0&&(t.src=null,e[To]=null)):Es(n)}}}function Hu(n){return n in li?li[n]:li[n]="on"+n}function Wg(n,e){if(n.ca)n=!0;else{e=new Mn(e,this);var t=n.listener,r=n.ia||n.src;n.fa&&_o(n),n=t.call(r,e)}return n}function bo(n){return n=n[To],n instanceof Ts?n:null}var di="__closure_events_fn_"+(1e9*Math.random()>>>0);function So(n){return typeof n=="function"?n:(n[di]||(n[di]=function(e){return n.handleEvent(e)}),n[di])}function W(){at.call(this),this.i=new Ts(this),this.P=this,this.I=null}ne(W,at);W.prototype[ir]=!0;W.prototype.removeEventListener=function(n,e,t,r){Ku(this,n,e,t,r)};function te(n,e){var t,r=n.I;if(r)for(t=[];r;r=r.I)t.push(r);if(n=n.P,r=e.type||e,typeof e=="string")e=new se(e,n);else if(e instanceof se)e.target=e.target||n;else{var s=e;e=new se(r,n),Uu(e,s)}if(s=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];s=vr(o,r,!0,e)&&s}if(o=e.g=n,s=vr(o,r,!0,e)&&s,s=vr(o,r,!1,e)&&s,t)for(i=0;i<t.length;i++)o=e.g=t[i],s=vr(o,r,!1,e)&&s}W.prototype.M=function(){if(W.Z.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)Es(t[r]);delete n.g[e],n.h--}}this.I=null};W.prototype.N=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};W.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function vr(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==t){var a=o.listener,c=o.ia||o.src;o.fa&&Ni(n.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Co=_.JSON.stringify;function Qg(){var n=zu;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Xg{constructor(){this.h=this.g=null}add(e,t){const r=Gu.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var Gu=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new Yg,n=>n.reset());class Yg{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Jg(n){_.setTimeout(()=>{throw n},0)}function Ao(n,e){Oi||Zg(),Pi||(Oi(),Pi=!0),zu.add(n,e)}var Oi;function Zg(){var n=_.Promise.resolve(void 0);Oi=function(){n.then(em)}}var Pi=!1,zu=new Xg;function em(){for(var n;n=Qg();){try{n.h.call(n.g)}catch(t){Jg(t)}var e=Gu;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Pi=!1}function _s(n,e){W.call(this),this.h=n||1,this.g=e||_,this.j=ee(this.kb,this),this.l=Date.now()}ne(_s,W);v=_s.prototype;v.da=!1;v.S=null;v.kb=function(){if(this.da){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-n):(this.S&&(this.g.clearTimeout(this.S),this.S=null),te(this,"tick"),this.da&&(ko(this),this.start()))}};v.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ko(n){n.da=!1,n.S&&(n.g.clearTimeout(n.S),n.S=null)}v.M=function(){_s.Z.M.call(this),ko(this),delete this.g};function xo(n,e,t){if(typeof n=="function")t&&(n=ee(n,t));else if(n&&typeof n.handleEvent=="function")n=ee(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:_.setTimeout(n,e||0)}function Wu(n){n.g=xo(()=>{n.g=null,n.i&&(n.i=!1,Wu(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class tm extends at{constructor(e,t){super();this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Wu(this)}M(){super.M(),this.g&&(_.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Un(n){at.call(this),this.h=n,this.g={}}ne(Un,at);var Ma=[];function Qu(n,e,t,r){Array.isArray(t)||(t&&(Ma[0]=t.toString()),t=Ma);for(var s=0;s<t.length;s++){var i=qu(e,t[s],r||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function Xu(n){Io(n.g,function(e,t){this.g.hasOwnProperty(t)&&_o(e)},n),n.g={}}Un.prototype.M=function(){Un.Z.M.call(this),Xu(this)};Un.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function bs(){this.g=!0}bs.prototype.Aa=function(){this.g=!1};function nm(n,e,t,r,s,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function rm(n,e,t,r,s,i,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+t+`
`+i+" "+o})}function qt(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+im(n,t)+(r?" "+r:"")})}function sm(n,e){n.info(function(){return"TIMEOUT: "+e})}bs.prototype.info=function(){};function im(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Co(t)}catch{return e}}var Rt={},Ua=null;function Ss(){return Ua=Ua||new W}Rt.Ma="serverreachability";function Yu(n){se.call(this,Rt.Ma,n)}ne(Yu,se);function Fn(n){const e=Ss();te(e,new Yu(e,n))}Rt.STAT_EVENT="statevent";function Ju(n,e){se.call(this,Rt.STAT_EVENT,n),this.stat=e}ne(Ju,se);function ce(n){const e=Ss();te(e,new Ju(e,n))}Rt.Na="timingevent";function Zu(n,e){se.call(this,Rt.Na,n),this.size=e}ne(Zu,se);function or(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return _.setTimeout(function(){n()},e)}var Cs={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},eh={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Do(){}Do.prototype.h=null;function Fa(n){return n.h||(n.h=n.i())}function th(){}var ar={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function No(){se.call(this,"d")}ne(No,se);function Ro(){se.call(this,"c")}ne(Ro,se);var Li;function As(){}ne(As,Do);As.prototype.g=function(){return new XMLHttpRequest};As.prototype.i=function(){return{}};Li=new As;function cr(n,e,t,r){this.l=n,this.j=e,this.m=t,this.X=r||1,this.V=new Un(this),this.P=om,n=xi?125:void 0,this.W=new _s(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new nh}function nh(){this.i=null,this.g="",this.h=!1}var om=45e3,Mi={},Wr={};v=cr.prototype;v.setTimeout=function(n){this.P=n};function Ui(n,e,t){n.K=1,n.v=xs($e(e)),n.s=t,n.U=!0,rh(n,null)}function rh(n,e){n.F=Date.now(),ur(n),n.A=$e(n.v);var t=n.A,r=n.X;Array.isArray(r)||(r=[String(r)]),hh(t.h,"t",r),n.C=0,t=n.l.H,n.h=new nh,n.g=Dh(n.l,t?e:null,!n.s),0<n.O&&(n.L=new tm(ee(n.Ia,n,n.g),n.O)),Qu(n.V,n.g,"readystatechange",n.gb),e=n.H?Mu(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.s,e)):(n.u="GET",n.g.ea(n.A,n.u,null,e)),Fn(1),nm(n.j,n.u,n.A,n.m,n.X,n.s)}v.gb=function(n){n=n.target;const e=this.L;e&&Ue(n)==3?e.l():this.Ia(n)};v.Ia=function(n){try{if(n==this.g)e:{const h=Ue(this.g);var e=this.g.Da();const l=this.g.ba();if(!(3>h)&&(h!=3||xi||this.g&&(this.h.h||this.g.ga()||$a(this.g)))){this.I||h!=4||e==7||(e==8||0>=l?Fn(3):Fn(2)),ks(this);var t=this.g.ba();this.N=t;t:if(sh(this)){var r=$a(this.g);n="";var s=r.length,i=Ue(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){pt(this),kn(this);var o="";break t}this.h.i=new _.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=t==200,rm(this.j,this.u,this.A,this.m,this.X,h,t),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Gr(a)){var u=a;break t}}u=null}if(t=u)qt(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Fi(this,t);else{this.i=!1,this.o=3,ce(12),pt(this),kn(this);break e}}this.U?(ih(this,h,o),xi&&this.i&&h==3&&(Qu(this.V,this.W,"tick",this.fb),this.W.start())):(qt(this.j,this.m,o,null),Fi(this,o)),h==4&&pt(this),this.i&&!this.I&&(h==4?Ch(this.l,this):(this.i=!1,ur(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),pt(this),kn(this)}}}catch{}finally{}};function sh(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Ba:!1}function ih(n,e,t){let r=!0,s;for(;!n.I&&n.C<t.length;)if(s=am(n,t),s==Wr){e==4&&(n.o=4,ce(14),r=!1),qt(n.j,n.m,null,"[Incomplete Response]");break}else if(s==Mi){n.o=4,ce(15),qt(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else qt(n.j,n.m,s,null),Fi(n,s);sh(n)&&s!=Wr&&s!=Mi&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,ce(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.aa&&(n.aa=!0,e=n.l,e.g==n&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+t.length),qo(e),e.L=!0,ce(11))):(qt(n.j,n.m,t,"[Invalid Chunked Response]"),pt(n),kn(n))}v.fb=function(){if(this.g){var n=Ue(this.g),e=this.g.ga();this.C<e.length&&(ks(this),ih(this,n,e),this.i&&n!=4&&ur(this))}};function am(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Wr:(t=Number(e.substring(t,r)),isNaN(t)?Mi:(r+=1,r+t>e.length?Wr:(e=e.substr(r,t),n.C=r+t,e)))}v.cancel=function(){this.I=!0,pt(this)};function ur(n){n.Y=Date.now()+n.P,oh(n,n.P)}function oh(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=or(ee(n.eb,n),e)}function ks(n){n.B&&(_.clearTimeout(n.B),n.B=null)}v.eb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(sm(this.j,this.A),this.K!=2&&(Fn(3),ce(17)),pt(this),this.o=2,kn(this)):oh(this,this.Y-n)};function kn(n){n.l.G==0||n.I||Ch(n.l,n)}function pt(n){ks(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,ko(n.W),Xu(n.V),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function Fi(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||Vi(t.i,n))){if(t.I=n.N,!n.J&&Vi(t.i,n)&&t.G==3){try{var r=t.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0)e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Jr(t),Rs(t);else break e;Bo(t),ce(18)}else t.ta=s[1],0<t.ta-t.U&&37500>s[2]&&t.N&&t.A==0&&!t.v&&(t.v=or(ee(t.ab,t),6e3));if(1>=fh(t.i)&&t.ka){try{t.ka()}catch{}t.ka=void 0}}else gt(t,11)}else if((n.J||t.g==n)&&Jr(t),!Gr(e))for(s=t.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(t.U=u[0],u=u[1],t.G==2)if(u[0]=="c"){t.J=u[1],t.la=u[2];const h=u[3];h!=null&&(t.ma=h,t.h.info("VER="+t.ma));const l=u[4];l!=null&&(t.za=l,t.h.info("SVER="+t.za));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,t.K=r,t.h.info("backChannelRequestTimeoutMs_="+r)),r=t;const g=n.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;!i.g&&(ie(y,"spdy")||ie(y,"quic")||ie(y,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Lo(i,i.h),i.h=null))}if(r.D){const A=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(r.sa=A,L(r.F,r.D,A))}}t.G=3,t.j&&t.j.xa(),t.$&&(t.O=Date.now()-n.F,t.h.info("Handshake RTT: "+t.O+"ms")),r=t;var o=n;if(r.oa=xh(r,r.H?r.la:null,r.W),o.J){ph(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(ks(a),ur(a)),r.g=o}else bh(r);0<t.l.length&&Os(t)}else u[0]!="stop"&&u[0]!="close"||gt(t,7);else t.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?gt(t,7):Vo(t):u[0]!="noop"&&t.j&&t.j.wa(u),t.A=0)}}Fn(4)}catch{}}function cm(n){if(n.R&&typeof n.R=="function")return n.R();if(typeof n=="string")return n.split("");if(ki(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function Oo(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(ki(n)||typeof n=="string")Lu(n,e,void 0);else{if(n.T&&typeof n.T=="function")var t=n.T();else if(n.R&&typeof n.R=="function")t=void 0;else if(ki(n)||typeof n=="string"){t=[];for(var r=n.length,s=0;s<r;s++)t.push(s)}else for(s in t=[],r=0,n)t[r++]=s;r=cm(n),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],t&&t[i],n)}}function cn(n,e){this.h={},this.g=[],this.i=0;var t=arguments.length;if(1<t){if(t%2)throw Error("Uneven number of arguments");for(var r=0;r<t;r+=2)this.set(arguments[r],arguments[r+1])}else if(n)if(n instanceof cn)for(t=n.T(),r=0;r<t.length;r++)this.set(t[r],n.get(t[r]));else for(r in n)this.set(r,n[r])}v=cn.prototype;v.R=function(){Po(this);for(var n=[],e=0;e<this.g.length;e++)n.push(this.h[this.g[e]]);return n};v.T=function(){return Po(this),this.g.concat()};function Po(n){if(n.i!=n.g.length){for(var e=0,t=0;e<n.g.length;){var r=n.g[e];Tt(n.h,r)&&(n.g[t++]=r),e++}n.g.length=t}if(n.i!=n.g.length){var s={};for(t=e=0;e<n.g.length;)r=n.g[e],Tt(s,r)||(n.g[t++]=r,s[r]=1),e++;n.g.length=t}}v.get=function(n,e){return Tt(this.h,n)?this.h[n]:e};v.set=function(n,e){Tt(this.h,n)||(this.i++,this.g.push(n)),this.h[n]=e};v.forEach=function(n,e){for(var t=this.T(),r=0;r<t.length;r++){var s=t[r],i=this.get(s);n.call(e,i,s,this)}};function Tt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}var ah=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function um(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),s=null;if(0<=r){var i=n[t].substring(0,r);s=n[t].substring(r+1)}else i=n[t];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function _t(n,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,n instanceof _t){this.g=e!==void 0?e:n.g,Qr(this,n.j),this.s=n.s,Xr(this,n.i),Yr(this,n.m),this.l=n.l,e=n.h;var t=new Vn;t.i=e.i,e.g&&(t.g=new cn(e.g),t.h=e.h),Va(this,t),this.o=n.o}else n&&(t=String(n).match(ah))?(this.g=!!e,Qr(this,t[1]||"",!0),this.s=xn(t[2]||""),Xr(this,t[3]||"",!0),Yr(this,t[4]),this.l=xn(t[5]||"",!0),Va(this,t[6]||"",!0),this.o=xn(t[7]||"")):(this.g=!!e,this.h=new Vn(null,this.g))}_t.prototype.toString=function(){var n=[],e=this.j;e&&n.push(_n(e,Ba,!0),":");var t=this.i;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(_n(e,Ba,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.i&&t.charAt(0)!="/"&&n.push("/"),n.push(_n(t,t.charAt(0)=="/"?pm:fm,!0))),(t=this.h.toString())&&n.push("?",t),(t=this.o)&&n.push("#",_n(t,mm)),n.join("")};function $e(n){return new _t(n)}function Qr(n,e,t){n.j=t?xn(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Xr(n,e,t){n.i=t?xn(e,!0):e}function Yr(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Va(n,e,t){e instanceof Vn?(n.h=e,ym(n.h,n.g)):(t||(e=_n(e,gm)),n.h=new Vn(e,n.g))}function L(n,e,t){n.h.set(e,t)}function xs(n){return L(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function hm(n){return n instanceof _t?$e(n):new _t(n,void 0)}function lm(n,e,t,r){var s=new _t(null,void 0);return n&&Qr(s,n),e&&Xr(s,e),t&&Yr(s,t),r&&(s.l=r),s}function xn(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function _n(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,dm),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function dm(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Ba=/[#\/\?@]/g,fm=/[#\?:]/g,pm=/[#\?]/g,gm=/[#\?@]/g,mm=/#/g;function Vn(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function ct(n){n.g||(n.g=new cn,n.h=0,n.i&&um(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}v=Vn.prototype;v.add=function(n,e){ct(this),this.i=null,n=un(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function ch(n,e){ct(n),e=un(n,e),Tt(n.g.h,e)&&(n.i=null,n.h-=n.g.get(e).length,n=n.g,Tt(n.h,e)&&(delete n.h[e],n.i--,n.g.length>2*n.i&&Po(n)))}function uh(n,e){return ct(n),e=un(n,e),Tt(n.g.h,e)}v.forEach=function(n,e){ct(this),this.g.forEach(function(t,r){Lu(t,function(s){n.call(e,s,r,this)},this)},this)};v.T=function(){ct(this);for(var n=this.g.R(),e=this.g.T(),t=[],r=0;r<e.length;r++)for(var s=n[r],i=0;i<s.length;i++)t.push(e[r]);return t};v.R=function(n){ct(this);var e=[];if(typeof n=="string")uh(this,n)&&(e=Da(e,this.g.get(un(this,n))));else{n=this.g.R();for(var t=0;t<n.length;t++)e=Da(e,n[t])}return e};v.set=function(n,e){return ct(this),this.i=null,n=un(this,n),uh(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};v.get=function(n,e){return n?(n=this.R(n),0<n.length?String(n[0]):e):e};function hh(n,e,t){ch(n,e),0<t.length&&(n.i=null,n.g.set(un(n,e),wo(t)),n.h+=t.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var n=[],e=this.g.T(),t=0;t<e.length;t++){var r=e[t],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),n.push(o)}}return this.i=n.join("&")};function un(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function ym(n,e){e&&!n.j&&(ct(n),n.i=null,n.g.forEach(function(t,r){var s=r.toLowerCase();r!=s&&(ch(this,r),hh(this,s,t))},n)),n.j=e}var vm=class{constructor(n,e){this.h=n,this.g=e}};function lh(n){this.l=n||wm,_.PerformanceNavigationTiming?(n=_.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(_.g&&_.g.Ea&&_.g.Ea()&&_.g.Ea().Zb),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var wm=10;function dh(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function fh(n){return n.h?1:n.g?n.g.size:0}function Vi(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Lo(n,e){n.g?n.g.add(e):n.h=e}function ph(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}lh.prototype.cancel=function(){if(this.i=gh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function gh(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return wo(n.i)}function Mo(){}Mo.prototype.stringify=function(n){return _.JSON.stringify(n,void 0)};Mo.prototype.parse=function(n){return _.JSON.parse(n,void 0)};function Im(){this.g=new Mo}function Em(n,e,t){const r=t||"";try{Oo(n,function(s,i){let o=s;sr(s)&&(o=Co(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Tm(n,e){const t=new bs;if(_.Image){const r=new Image;r.onload=yr(wr,t,r,"TestLoadImage: loaded",!0,e),r.onerror=yr(wr,t,r,"TestLoadImage: error",!1,e),r.onabort=yr(wr,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=yr(wr,t,r,"TestLoadImage: timeout",!1,e),_.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function wr(n,e,t,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function hr(n){this.l=n.$b||null,this.j=n.ib||!1}ne(hr,Do);hr.prototype.g=function(){return new Ds(this.l,this.j)};hr.prototype.i=function(n){return function(){return n}}({});function Ds(n,e){W.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=Uo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ne(Ds,W);var Uo=0;v=Ds.prototype;v.open=function(n,e){if(this.readyState!=Uo)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Bn(this)};v.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||_).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,lr(this)),this.readyState=Uo};v.Va=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Bn(this)),this.g&&(this.readyState=3,Bn(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof _.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mh(this)}else n.text().then(this.Ua.bind(this),this.ha.bind(this))};function mh(n){n.j.read().then(n.Sa.bind(n)).catch(n.ha.bind(n))}v.Sa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?lr(this):Bn(this),this.readyState==3&&mh(this)}};v.Ua=function(n){this.g&&(this.response=this.responseText=n,lr(this))};v.Ta=function(n){this.g&&(this.response=n,lr(this))};v.ha=function(){this.g&&lr(this)};function lr(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Bn(n)}v.setRequestHeader=function(n,e){this.v.append(n,e)};v.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};v.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Bn(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Ds.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var _m=_.JSON.parse;function j(n){W.call(this),this.headers=new cn,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=yh,this.K=this.L=!1}ne(j,W);var yh="",bm=/^https?$/i,Sm=["POST","PUT"];v=j.prototype;v.ea=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Li.g(),this.C=this.u?Fa(this.u):Fa(Li),this.g.onreadystatechange=ee(this.Fa,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(i){qa(this,i);return}n=t||"";const s=new cn(this.headers);r&&Oo(r,function(i,o){s.set(o,i)}),r=Mg(s.T()),t=_.FormData&&n instanceof _.FormData,!(0<=Pu(Sm,e))||r||t||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ih(this),0<this.B&&((this.K=Cm(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ee(this.pa,this)):this.A=xo(this.pa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){qa(this,i)}};function Cm(n){return Yt&&qg()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}function Am(n){return n.toLowerCase()=="content-type"}v.pa=function(){typeof vo!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,te(this,"timeout"),this.abort(8))};function qa(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,vh(n),Ns(n)}function vh(n){n.D||(n.D=!0,te(n,"complete"),te(n,"error"))}v.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,te(this,"complete"),te(this,"abort"),Ns(this))};v.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ns(this,!0)),j.Z.M.call(this)};v.Fa=function(){this.s||(this.F||this.v||this.l?wh(this):this.cb())};v.cb=function(){wh(this)};function wh(n){if(n.h&&typeof vo!="undefined"&&(!n.C[1]||Ue(n)!=4||n.ba()!=2)){if(n.v&&Ue(n)==4)xo(n.Fa,0,n);else if(te(n,"readystatechange"),Ue(n)==4){n.h=!1;try{const a=n.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=a===0){var s=String(n.H).match(ah)[1]||null;if(!s&&_.self&&_.self.location){var i=_.self.location.protocol;s=i.substr(0,i.length-1)}r=!bm.test(s?s.toLowerCase():"")}t=r}if(t)te(n,"complete"),te(n,"success");else{n.m=6;try{var o=2<Ue(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.ba()+"]",vh(n)}}finally{Ns(n)}}}}function Ns(n,e){if(n.g){Ih(n);const t=n.g,r=n.C[0]?Hr:null;n.g=null,n.C=null,e||te(n,"ready");try{t.onreadystatechange=r}catch{}}}function Ih(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(_.clearTimeout(n.A),n.A=null)}function Ue(n){return n.g?n.g.readyState:0}v.ba=function(){try{return 2<Ue(this)?this.g.status:-1}catch{return-1}};v.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};v.Qa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),_m(e)}};function $a(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case yh:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}v.Da=function(){return this.m};v.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function km(n){let e="";return Io(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function Fo(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=km(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):L(n,e,t))}function wn(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Eh(n){this.za=0,this.l=[],this.h=new bs,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=wn("failFast",!1,n),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=wn("baseRetryDelayMs",5e3,n),this.$a=wn("retryDelaySeedMs",1e4,n),this.Ya=wn("forwardChannelMaxRetries",2,n),this.ra=wn("forwardChannelRequestTimeoutMs",2e4,n),this.qa=n&&n.xmlHttpFactory||void 0,this.Ba=n&&n.Yb||!1,this.K=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.J="",this.i=new lh(n&&n.concurrentRequestLimit),this.Ca=new Im,this.ja=n&&n.fastHandshake||!1,this.Ra=n&&n.Wb||!1,n&&n.Aa&&this.h.Aa(),n&&n.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&n&&n.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!n||n.Xb!==!1}v=Eh.prototype;v.ma=8;v.G=1;function Vo(n){if(Th(n),n.G==3){var e=n.V++,t=$e(n.F);L(t,"SID",n.J),L(t,"RID",e),L(t,"TYPE","terminate"),dr(n,t),e=new cr(n,n.h,e,void 0),e.K=2,e.v=xs($e(t)),t=!1,_.navigator&&_.navigator.sendBeacon&&(t=_.navigator.sendBeacon(e.v.toString(),"")),!t&&_.Image&&(new Image().src=e.v,t=!0),t||(e.g=Dh(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ur(e)}kh(n)}v.hb=function(n){try{this.h.info("Origin Trials invoked: "+n)}catch{}};function Rs(n){n.g&&(qo(n),n.g.cancel(),n.g=null)}function Th(n){Rs(n),n.u&&(_.clearTimeout(n.u),n.u=null),Jr(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&_.clearTimeout(n.m),n.m=null)}function fi(n,e){n.l.push(new vm(n.Za++,e)),n.G==3&&Os(n)}function Os(n){dh(n.i)||n.m||(n.m=!0,Ao(n.Ha,n),n.C=0)}function xm(n,e){return fh(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.l=e.D.concat(n.l),!0):n.G==1||n.G==2||n.C>=(n.Xa?0:n.Ya)?!1:(n.m=or(ee(n.Ha,n,e),Ah(n,n.C)),n.C++,!0)}v.Ha=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.V=Math.floor(1e5*Math.random()),n=this.V++;const s=new cr(this,this.h,n,void 0);let i=this.s;if(this.P&&(i?(i=Mu(i),Uu(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,t=0;t<this.l.length;t++){t:{var r=this.l[t];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.l.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=_h(this,s,e),t=$e(this.F),L(t,"RID",n),L(t,"CVER",22),this.D&&L(t,"X-HTTP-Session-Id",this.D),dr(this,t),this.o&&i&&Fo(t,this.o,i),Lo(this.i,s),this.Ra&&L(t,"TYPE","init"),this.ja?(L(t,"$req",e),L(t,"SID","null"),s.$=!0,Ui(s,t,null)):Ui(s,t,e),this.G=2}}else this.G==3&&(n?ja(this,n):this.l.length==0||dh(this.i)||ja(this))};function ja(n,e){var t;e?t=e.m:t=n.V++;const r=$e(n.F);L(r,"SID",n.J),L(r,"RID",t),L(r,"AID",n.U),dr(n,r),n.o&&n.s&&Fo(r,n.o,n.s),t=new cr(n,n.h,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.l=e.D.concat(n.l)),e=_h(n,t,1e3),t.setTimeout(Math.round(.5*n.ra)+Math.round(.5*n.ra*Math.random())),Lo(n.i,t),Ui(t,r,e)}function dr(n,e){n.j&&Oo({},function(t,r){L(e,r,t)})}function _h(n,e,t){t=Math.min(n.l.length,t);var r=n.j?ee(n.j.Oa,n.j,n):null;e:{var s=n.l;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<t;c++){let u=s[c].h;const h=s[c].g;if(u-=i,0>u)i=Math.max(0,s[c].h-100),a=!1;else try{Em(h,o,"req"+u+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break e}}}return n=n.l.splice(0,t),e.D=n,r}function bh(n){n.g||n.u||(n.Y=1,Ao(n.Ga,n),n.A=0)}function Bo(n){return n.g||n.u||3<=n.A?!1:(n.Y++,n.u=or(ee(n.Ga,n),Ah(n,n.A)),n.A++,!0)}v.Ga=function(){if(this.u=null,Sh(this),this.$&&!(this.L||this.g==null||0>=this.O)){var n=2*this.O;this.h.info("BP detection timer enabled: "+n),this.B=or(ee(this.bb,this),n)}};v.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ce(10),Rs(this),Sh(this))};function qo(n){n.B!=null&&(_.clearTimeout(n.B),n.B=null)}function Sh(n){n.g=new cr(n,n.h,"rpc",n.Y),n.o===null&&(n.g.H=n.s),n.g.O=0;var e=$e(n.oa);L(e,"RID","rpc"),L(e,"SID",n.J),L(e,"CI",n.N?"0":"1"),L(e,"AID",n.U),dr(n,e),L(e,"TYPE","xmlhttp"),n.o&&n.s&&Fo(e,n.o,n.s),n.K&&n.g.setTimeout(n.K);var t=n.g;n=n.la,t.K=1,t.v=xs($e(e)),t.s=null,t.U=!0,rh(t,n)}v.ab=function(){this.v!=null&&(this.v=null,Rs(this),Bo(this),ce(19))};function Jr(n){n.v!=null&&(_.clearTimeout(n.v),n.v=null)}function Ch(n,e){var t=null;if(n.g==e){Jr(n),qo(n),n.g=null;var r=2}else if(Vi(n.i,e))t=e.D,ph(n.i,e),r=1;else return;if(n.I=e.N,n.G!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var s=n.C;r=Ss(),te(r,new Zu(r,t,e,s)),Os(n)}else bh(n);else if(s=e.o,s==3||s==0&&0<n.I||!(r==1&&xm(n,e)||r==2&&Bo(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),s){case 1:gt(n,5);break;case 4:gt(n,10);break;case 3:gt(n,6);break;default:gt(n,2)}}}function Ah(n,e){let t=n.Pa+Math.floor(Math.random()*n.$a);return n.j||(t*=2),t*e}function gt(n,e){if(n.h.info("Error code "+e),e==2){var t=null;n.j&&(t=null);var r=ee(n.jb,n);t||(t=new _t("//www.google.com/images/cleardot.gif"),_.location&&_.location.protocol=="http"||Qr(t,"https"),xs(t)),Tm(t.toString(),r)}else ce(2);n.G=0,n.j&&n.j.va(e),kh(n),Th(n)}v.jb=function(n){n?(this.h.info("Successfully pinged google.com"),ce(2)):(this.h.info("Failed to ping google.com"),ce(1))};function kh(n){n.G=0,n.I=-1,n.j&&((gh(n.i).length!=0||n.l.length!=0)&&(n.i.i.length=0,wo(n.l),n.l.length=0),n.j.ua())}function xh(n,e,t){let r=hm(t);if(r.i!="")e&&Xr(r,e+"."+r.i),Yr(r,r.m);else{const s=_.location;r=lm(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,t)}return n.aa&&Io(n.aa,function(s,i){L(r,i,s)}),e=n.D,t=n.sa,e&&t&&L(r,e,t),L(r,"VER",n.ma),dr(n,r),r}function Dh(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ba&&!n.qa?new j(new hr({ib:!0})):new j(n.qa),e.L=n.H,e}function Nh(){}v=Nh.prototype;v.xa=function(){};v.wa=function(){};v.va=function(){};v.ua=function(){};v.Oa=function(){};function Zr(){if(Yt&&!(10<=Number($g)))throw Error("Environmental error: no available transport.")}Zr.prototype.g=function(n,e){return new we(n,e)};function we(n,e){W.call(this),this.g=new Eh(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.P=n,(n=e&&e.httpHeadersOverwriteParam)&&!Gr(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Gr(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new hn(this)}ne(we,W);we.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;n.Wa&&(n.h.info("Origin Trials enabled."),Ao(ee(n.hb,n,e))),ce(0),n.W=e,n.aa=t||{},n.N=n.X,n.F=xh(n,null,n.W),Os(n)};we.prototype.close=function(){Vo(this.g)};we.prototype.u=function(n){if(typeof n=="string"){var e={};e.__data__=n,fi(this.g,e)}else this.v?(e={},e.__data__=Co(n),fi(this.g,e)):fi(this.g,n)};we.prototype.M=function(){this.g.j=null,delete this.j,Vo(this.g),delete this.g,we.Z.M.call(this)};function Rh(n){No.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ne(Rh,No);function Oh(){Ro.call(this),this.status=1}ne(Oh,Ro);function hn(n){this.g=n}ne(hn,Nh);hn.prototype.xa=function(){te(this.g,"a")};hn.prototype.wa=function(n){te(this.g,new Rh(n))};hn.prototype.va=function(n){te(this.g,new Oh(n))};hn.prototype.ua=function(){te(this.g,"b")};Zr.prototype.createWebChannel=Zr.prototype.g;we.prototype.send=we.prototype.u;we.prototype.open=we.prototype.m;we.prototype.close=we.prototype.close;Cs.NO_ERROR=0;Cs.TIMEOUT=8;Cs.HTTP_ERROR=6;eh.COMPLETE="complete";th.EventType=ar;ar.OPEN="a";ar.CLOSE="b";ar.ERROR="c";ar.MESSAGE="d";W.prototype.listen=W.prototype.N;j.prototype.listenOnce=j.prototype.O;j.prototype.getLastError=j.prototype.La;j.prototype.getLastErrorCode=j.prototype.Da;j.prototype.getStatus=j.prototype.ba;j.prototype.getResponseJson=j.prototype.Qa;j.prototype.getResponseText=j.prototype.ga;j.prototype.send=j.prototype.ea;var Dm=function(){return new Zr},Nm=function(){return Ss()},pi=Cs,Rm=eh,Om=Rt,Ka={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Pm=hr,Ir=th,Lm=j;const Ha="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}he.UNAUTHENTICATED=new he(null),he.GOOGLE_CREDENTIALS=new he("google-credentials-uid"),he.FIRST_PARTY=new he("first-party-uid"),he.MOCK_USER=new he("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ln="9.6.7";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new to("@firebase/firestore");function Bi(){return bt.logLevel}function m(n,...e){if(bt.logLevel<=D.DEBUG){const t=e.map($o);bt.debug(`Firestore (${ln}): ${n}`,...t)}}function de(n,...e){if(bt.logLevel<=D.ERROR){const t=e.map($o);bt.error(`Firestore (${ln}): ${n}`,...t)}}function Ga(n,...e){if(bt.logLevel<=D.WARN){const t=e.map($o);bt.warn(`Firestore (${ln}): ${n}`,...t)}}function $o(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(n="Unexpected state"){const e=`FIRESTORE (${ln}) INTERNAL ASSERTION FAILED: `+n;throw de(e),new Error(e)}function C(n,e){n||E()}function S(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends Dt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Um{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(he.UNAUTHENTICATED))}shutdown(){}}class Fm{constructor(e){this.t=e,this.currentUser=he.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new et;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new et,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{m("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(m("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new et)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(m("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(C(typeof r.accessToken=="string"),new Mm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return C(e===null||typeof e=="string"),new he(e)}}class Vm{constructor(e,t,r){this.type="FirstParty",this.user=he.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class Bm{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new Vm(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(he.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $m{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const r=i=>{i.error!=null&&m("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,m("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{m("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):m("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(C(typeof t.token=="string"),this.p=t.token,new qm(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.I(r),this.T=r=>t.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Se.A=-1;class Km{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=jm(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function x(n,e){return n<e?-1:n>e?1:0}function Jt(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function Ph(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new I(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new I(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new I(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new I(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new _e(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?x(this.nanoseconds,e.nanoseconds):x(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.timestamp=e}static fromTimestamp(e){return new T(e)}static min(){return new T(new _e(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ps(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Hm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t,r){t===void 0?t=0:t>e.length&&E(),r===void 0?r=e.length-t:r>e.length-t&&E(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return qn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof qn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class R extends qn{construct(e,t,r){return new R(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new I(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new R(t)}static emptyPath(){return new R([])}}const Gm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ae extends qn{construct(e,t,r){return new ae(e,t,r)}static isValidIdentifier(e){return Gm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ae(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new I(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new I(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new I(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new I(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ae(t)}static emptyPath(){return new ae([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){this.fields=e,e.sort(ae.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Jt(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Q(t)}static fromUint8Array(e){const t=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Q(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return x(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Q.EMPTY_BYTE_STRING=new Q("");const Wm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function st(n){if(C(!!n),typeof n=="string"){let e=0;const t=Wm.exec(n);if(C(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:F(n.seconds),nanos:F(n.nanos)}}function F(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function St(n){return typeof n=="string"?Q.fromBase64String(n):Q.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Mh(n){const e=n.mapValue.fields.__previous_value__;return Lh(e)?Mh(e):e}function $n(n){const e=st(n.mapValue.fields.__local_write_time__.timestampValue);return new _e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,t,r,s,i,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Zt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Zt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Zt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(n){return n==null}function es(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.path=e}static fromPath(e){return new w(R.fromString(e))}static fromName(e){return new w(R.fromString(e).popFirst(5))}static empty(){return new w(R.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&R.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return R.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new w(new R(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm={mapValue:{fields:{__type__:{stringValue:"__max___"}}}};function Ct(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Lh(n)?4:10:E()}function Ce(n,e){if(n===e)return!0;const t=Ct(n);if(t!==Ct(e))return!1;switch(t){case 0:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return $n(n).isEqual($n(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=st(r.timestampValue),o=st(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,s){return St(r.bytesValue).isEqual(St(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,s){return F(r.geoPointValue.latitude)===F(s.geoPointValue.latitude)&&F(r.geoPointValue.longitude)===F(s.geoPointValue.longitude)}(n,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return F(r.integerValue)===F(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=F(r.doubleValue),o=F(s.doubleValue);return i===o?es(i)===es(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return Jt(n.arrayValue.values||[],e.arrayValue.values||[],Ce);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(za(i)!==za(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ce(i[a],o[a])))return!1;return!0}(n,e);default:return E()}}function jn(n,e){return(n.values||[]).find(t=>Ce(t,e))!==void 0}function en(n,e){if(n===e)return 0;const t=Ct(n),r=Ct(e);if(t!==r)return x(t,r);switch(t){case 0:return 0;case 1:return x(n.booleanValue,e.booleanValue);case 2:return function(s,i){const o=F(s.integerValue||s.doubleValue),a=F(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Wa(n.timestampValue,e.timestampValue);case 4:return Wa($n(n),$n(e));case 5:return x(n.stringValue,e.stringValue);case 6:return function(s,i){const o=St(s),a=St(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=x(o[c],a[c]);if(u!==0)return u}return x(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,i){const o=x(F(s.latitude),F(i.latitude));return o!==0?o:x(F(s.longitude),F(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=en(o[c],a[c]);if(u)return u}return x(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,i){const o=s.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const l=x(a[h],u[h]);if(l!==0)return l;const f=en(o[a[h]],c[u[h]]);if(f!==0)return f}return x(a.length,u.length)}(n.mapValue,e.mapValue);default:throw E()}}function Wa(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return x(n,e);const t=st(n),r=st(e),s=x(t.seconds,r.seconds);return s!==0?s:x(t.nanos,r.nanos)}function Ht(n){return qi(n)}function qi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const s=st(r);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?St(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,w.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=qi(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${qi(r.fields[a])}`;return i+"}"}(n.mapValue):E();var e,t}function $i(n){return!!n&&"integerValue"in n}function Ls(n){return!!n&&"arrayValue"in n}function Qa(n){return!!n&&"nullValue"in n}function Xa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function gi(n){return!!n&&"mapValue"in n}function Dn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ps(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Dn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Dn(n.arrayValue.values[t]);return e}return Object.assign({},n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.value=e}static empty(){return new be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!gi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Dn(t)}setAll(e){let t=ae.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=Dn(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());gi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ce(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];gi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ps(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new be(Dn(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e,t,r,s,i,o){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new $(e,0,T.min(),T.min(),be.empty(),0)}static newFoundDocument(e,t,r){return new $(e,1,t,T.min(),r,0)}static newNoDocument(e,t){return new $(e,2,t,T.min(),be.empty(),0)}static newUnknownDocument(e,t){return new $(e,3,t,T.min(),be.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class Uh{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}Uh.UNKNOWN_ID=-1;class Ym{constructor(e,t){this.fieldPath=e,this.kind=t}}class ts{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ts(0,Ms.min())}}class Ms{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ms(T.min(),w.empty(),-1)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function Ya(n,e=null,t=[],r=[],s=null,i=null,o=null){return new Jm(n,e,t,r,s,i,o)}function fr(n){const e=S(n);if(e.P===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+Ht(s.value);var s}).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),dn(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ht(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ht(r)).join(",")),e.P=t}return e.P}function Zm(n){let e=n.path.canonicalString();return n.collectionGroup!==null&&(e+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(e+=`, filters: [${n.filters.map(t=>{return`${(r=t).field.canonicalString()} ${r.op} ${Ht(r.value)}`;var r}).join(", ")}]`),dn(n.limit)||(e+=", limit: "+n.limit),n.orderBy.length>0&&(e+=`, orderBy: [${n.orderBy.map(t=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(t)).join(", ")}]`),n.startAt&&(e+=", startAt: ",e+=n.startAt.inclusive?"b:":"a:",e+=n.startAt.position.map(t=>Ht(t)).join(",")),n.endAt&&(e+=", endAt: ",e+=n.endAt.inclusive?"a:":"b:",e+=n.endAt.position.map(t=>Ht(t)).join(",")),`Target(${e})`}function Us(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<n.orderBy.length;s++)if(!ay(n.orderBy[s],e.orderBy[s]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let s=0;s<n.filters.length;s++)if(t=n.filters[s],r=e.filters[s],t.op!==r.op||!t.field.isEqual(r.field)||!Ce(t.value,r.value))return!1;var t,r;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Za(n.startAt,e.startAt)&&Za(n.endAt,e.endAt)}function ns(n){return w.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}class fe extends class{}{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.v(e,t,r):new ey(e,t,r):t==="array-contains"?new ry(e,r):t==="in"?new sy(e,r):t==="not-in"?new iy(e,r):t==="array-contains-any"?new oy(e,r):new fe(e,t,r)}static v(e,t,r){return t==="in"?new ty(e,r):new ny(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.V(en(t,this.value)):t!==null&&Ct(this.value)===Ct(t)&&this.V(en(t,this.value))}V(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return E()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ey extends fe{constructor(e,t,r){super(e,t,r),this.key=w.fromName(r.referenceValue)}matches(e){const t=w.comparator(e.key,this.key);return this.V(t)}}class ty extends fe{constructor(e,t){super(e,"in",t),this.keys=Fh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ny extends fe{constructor(e,t){super(e,"not-in",t),this.keys=Fh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Fh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>w.fromName(r.referenceValue))}class ry extends fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ls(t)&&jn(t.arrayValue,this.value)}}class sy extends fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&jn(this.value.arrayValue,t)}}class iy extends fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(jn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!jn(this.value.arrayValue,t)}}class oy extends fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ls(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>jn(this.value.arrayValue,r))}}class rs{constructor(e,t){this.position=e,this.inclusive=t}}class Nn{constructor(e,t="asc"){this.field=e,this.dir=t}}function ay(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}function Ja(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=w.comparator(w.fromName(o.referenceValue),t.key):r=en(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Za(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ce(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function cy(n,e,t,r,s,i,o,a){return new Fs(n,e,t,r,s,i,o,a)}function Vs(n){return new Fs(n)}function Or(n){return!dn(n.limit)&&n.limitType==="F"}function ss(n){return!dn(n.limit)&&n.limitType==="L"}function uy(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function hy(n){for(const e of n.filters)if(e.S())return e.field;return null}function ly(n){return n.collectionGroup!==null}function Kn(n){const e=S(n);if(e.D===null){e.D=[];const t=hy(e),r=uy(e);if(t!==null&&r===null)t.isKeyField()||e.D.push(new Nn(t)),e.D.push(new Nn(ae.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Nn(ae.keyField(),i))}}}return e.D}function je(n){const e=S(n);if(!e.C)if(e.limitType==="F")e.C=Ya(e.path,e.collectionGroup,Kn(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Kn(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new Nn(i.field,o))}const r=e.endAt?new rs(e.endAt.position,!e.endAt.inclusive):null,s=e.startAt?new rs(e.startAt.position,!e.startAt.inclusive):null;e.C=Ya(e.path,e.collectionGroup,t,e.filters,e.limit,r,s)}return e.C}function dy(n,e,t){return new Fs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Bs(n,e){return Us(je(n),je(e))&&n.limitType===e.limitType}function Vh(n){return`${fr(je(n))}|lt:${n.limitType}`}function ji(n){return`Query(target=${Zm(je(n))}; limitType=${n.limitType})`}function jo(n,e){return e.isFoundDocument()&&function(t,r){const s=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(s):w.isDocumentKey(t.path)?t.path.isEqual(s):t.path.isImmediateParentOf(s)}(n,e)&&function(t,r){for(const s of t.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const s of t.filters)if(!s.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(s,i,o){const a=Ja(s,i,o);return s.inclusive?a<=0:a<0}(t.startAt,Kn(t),r)||t.endAt&&!function(s,i,o){const a=Ja(s,i,o);return s.inclusive?a>=0:a>0}(t.endAt,Kn(t),r))}(n,e)}function Bh(n){return(e,t)=>{let r=!1;for(const s of Kn(n)){const i=fy(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function fy(n,e,t){const r=n.field.isKeyField()?w.comparator(e.key,t.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?en(a,c):E()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return E()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(n,e){if(n.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:es(e)?"-0":e}}function gy(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(){this._=void 0}}function my(n,e,t){return n instanceof Hn?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(t,e):n instanceof tn?qh(n,e):n instanceof nn?$h(n,e):function(r,s){const i=vy(r,s),o=ec(i)+ec(r.k);return $i(i)&&$i(r.k)?gy(o):py(r.O,o)}(n,e)}function yy(n,e,t){return n instanceof tn?qh(n,e):n instanceof nn?$h(n,e):t}function vy(n,e){return n instanceof Gn?$i(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class Hn extends qs{}class tn extends qs{constructor(e){super(),this.elements=e}}function qh(n,e){const t=jh(e);for(const r of n.elements)t.some(s=>Ce(s,r))||t.push(r);return{arrayValue:{values:t}}}class nn extends qs{constructor(e){super(),this.elements=e}}function $h(n,e){let t=jh(e);for(const r of n.elements)t=t.filter(s=>!Ce(s,r));return{arrayValue:{values:t}}}class Gn extends qs{constructor(e,t){super(),this.O=e,this.k=t}}function ec(n){return F(n.integerValue||n.doubleValue)}function jh(n){return Ls(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,t){this.field=e,this.transform=t}}function Iy(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof tn&&r instanceof tn||t instanceof nn&&r instanceof nn?Jt(t.elements,r.elements,Ce):t instanceof Gn&&r instanceof Gn?Ce(t.k,r.k):t instanceof Hn&&r instanceof Hn}(n.transform,e.transform)}class Ey{constructor(e,t){this.version=e,this.transformResults=t}}class Je{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Je}static exists(e){return new Je(void 0,e)}static updateTime(e){return new Je(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class $s{}function Ty(n,e,t){n instanceof js?function(r,s,i){const o=r.value.clone(),a=rc(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Ks?function(r,s,i){if(!Pr(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=rc(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Kh(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(n,e,t):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,t)}function Ki(n,e,t){n instanceof js?function(r,s,i){if(!Pr(r.precondition,s))return;const o=r.value.clone(),a=sc(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(nc(s),o).setHasLocalMutations()}(n,e,t):n instanceof Ks?function(r,s,i){if(!Pr(r.precondition,s))return;const o=sc(r.fieldTransforms,i,s),a=s.data;a.setAll(Kh(r)),a.setAll(o),s.convertToFoundDocument(nc(s),a).setHasLocalMutations()}(n,e,t):function(r,s){Pr(r.precondition,s)&&s.convertToNoDocument(T.min())}(n,e)}function tc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&Jt(t,r,(s,i)=>Iy(s,i))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}function nc(n){return n.isFoundDocument()?n.version:T.min()}class js extends $s{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}}class Ks extends $s{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function Kh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function rc(n,e,t){const r=new Map;C(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,yy(o,a,t[s]))}return r}function sc(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,my(i,o,e))}return r}class Hh extends $s{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Gh extends $s{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q,k;function by(n){switch(n){default:return E();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function zh(n){if(n===void 0)return de("GRPC error has no .code"),p.UNKNOWN;switch(n){case q.OK:return p.OK;case q.CANCELLED:return p.CANCELLED;case q.UNKNOWN:return p.UNKNOWN;case q.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case q.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case q.INTERNAL:return p.INTERNAL;case q.UNAVAILABLE:return p.UNAVAILABLE;case q.UNAUTHENTICATED:return p.UNAUTHENTICATED;case q.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case q.NOT_FOUND:return p.NOT_FOUND;case q.ALREADY_EXISTS:return p.ALREADY_EXISTS;case q.PERMISSION_DENIED:return p.PERMISSION_DENIED;case q.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case q.ABORTED:return p.ABORTED;case q.OUT_OF_RANGE:return p.OUT_OF_RANGE;case q.UNIMPLEMENTED:return p.UNIMPLEMENTED;case q.DATA_LOSS:return p.DATA_LOSS;default:return E()}}(k=q||(q={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.comparator=e,this.root=t||J.EMPTY}insert(e,t){return new X(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,J.BLACK,null,null))}remove(e){return new X(this.comparator,this.root.remove(e,this.comparator).copy(null,null,J.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Er(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Er(this.root,e,this.comparator,!1)}getReverseIterator(){return new Er(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Er(this.root,e,this.comparator,!0)}}class Er{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class J{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r!=null?r:J.RED,this.left=s!=null?s:J.EMPTY,this.right=i!=null?i:J.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new J(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return J.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return J.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,J.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,J.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw E();const e=this.left.check();if(e!==this.right.check())throw E();return e+(this.isRed()?0:1)}}J.EMPTY=null,J.RED=!0,J.BLACK=!1;J.EMPTY=new class{constructor(){this.size=0}get key(){throw E()}get value(){throw E()}get color(){throw E()}get left(){throw E()}get right(){throw E()}copy(n,e,t,r,s){return this}insert(n,e,t){return new J(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.comparator=e,this.data=new X(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ic(this.data.getIterator())}getIteratorFrom(e){return new ic(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof M)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new M(this.comparator);return t.data=e,t}}class ic{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Mt(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=new X(w.comparator);function Ne(){return Sy}const Cy=new X(w.comparator);function Hi(){return Cy}const Ay=new X(w.comparator),ky=new M(w.comparator);function O(...n){let e=ky;for(const t of n)e=e.add(t);return e}const xy=new M(x);function Wh(){return xy}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const r=new Map;return r.set(e,pr.createSynthesizedTargetChangeForCurrentChange(e,t)),new Hs(T.min(),r,Wh(),Ne(),O())}}class pr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new pr(Q.EMPTY_BYTE_STRING,t,O(),O(),O())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,t,r,s){this.M=e,this.removedTargetIds=t,this.key=r,this.$=s}}class Qh{constructor(e,t){this.targetId=e,this.F=t}}class Xh{constructor(e,t,r=Q.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class oc{constructor(){this.B=0,this.L=cc(),this.U=Q.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=O(),t=O(),r=O();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:E()}}),new pr(this.U,this.q,e,t,r)}J(){this.K=!1,this.L=cc()}Y(e,t){this.K=!0,this.L=this.L.insert(e,t)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class Dy{constructor(e){this.nt=e,this.st=new Map,this.it=Ne(),this.rt=ac(),this.ot=new M(x)}ct(e){for(const t of e.M)e.$&&e.$.isFoundDocument()?this.ut(t,e.$):this.at(t,e.key,e.$);for(const t of e.removedTargetIds)this.at(t,e.key,e.$)}ht(e){this.forEachTarget(e,t=>{const r=this.lt(t);switch(e.state){case 0:this.ft(t)&&r.W(e.resumeToken);break;case 1:r.tt(),r.G||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.G||this.removeTarget(t);break;case 3:this.ft(t)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),r.W(e.resumeToken));break;default:E()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach((r,s)=>{this.ft(s)&&t(s)})}_t(e){const t=e.targetId,r=e.F.count,s=this.wt(t);if(s){const i=s.target;if(ns(i))if(r===0){const o=new w(i.path);this.at(t,o,$.newNoDocument(o,T.min()))}else C(r===1);else this.gt(t)!==r&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&ns(a.target)){const c=new w(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.at(o,c,$.newNoDocument(c,e))}i.j&&(t.set(o,i.H()),i.J())}});let r=O();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.wt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const s=new Hs(e,t,this.ot,this.it,r);return this.it=Ne(),this.rt=ac(),this.ot=new M(x),s}ut(e,t){if(!this.ft(e))return;const r=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,r),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Et(t.key).add(e))}at(e,t,r){if(!this.ft(e))return;const s=this.lt(e);this.It(e,t)?s.Y(t,1):s.X(t),this.rt=this.rt.insert(t,this.Et(t).delete(e)),r&&(this.it=this.it.insert(t,r))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new oc,this.st.set(e,t)),t}Et(e){let t=this.rt.get(e);return t||(t=new M(x),this.rt=this.rt.insert(e,t)),t}ft(e){const t=this.wt(e)!==null;return t||m("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.G?null:this.nt.Tt(e)}dt(e){this.st.set(e,new oc),this.nt.getRemoteKeysForTarget(e).forEach(t=>{this.at(e,t,null)})}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function ac(){return new X(w.comparator)}function cc(){return new X(w.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ry=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Oy{constructor(e,t){this.databaseId=e,this.N=t}}function Ko(n,e){return n.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Py(n,e){return n.N?e.toBase64():e.toUint8Array()}function Ly(n,e){return Ko(n,e.toTimestamp())}function ve(n){return C(!!n),T.fromTimestamp(function(e){const t=st(e);return new _e(t.seconds,t.nanos)}(n))}function Yh(n,e){return function(t){return new R(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Jh(n){const e=R.fromString(n);return C(il(e)),e}function is(n,e){return Yh(n.databaseId,e.path)}function yt(n,e){const t=Jh(e);if(t.get(1)!==n.databaseId.projectId)throw new I(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new I(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new w(el(t))}function Gi(n,e){return Yh(n.databaseId,e)}function Zh(n){const e=Jh(n);return e.length===4?R.emptyPath():el(e)}function zi(n){return new R(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function el(n){return C(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function uc(n,e,t){return{name:is(n,e),fields:t.value.mapValue.fields}}function My(n,e,t){const r=yt(n,e.name),s=ve(e.updateTime),i=new be({mapValue:{fields:e.fields}}),o=$.newFoundDocument(r,s,i);return t&&o.setHasCommittedMutations(),t?o.setHasCommittedMutations():o}function Uy(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:E()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.N?(C(u===void 0||typeof u=="string"),Q.fromBase64String(u||"")):(C(u===void 0||u instanceof Uint8Array),Q.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?p.UNKNOWN:zh(c.code);return new I(u,c.message||"")}(o);t=new Xh(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=yt(n,r.document.name),i=ve(r.document.updateTime),o=new be({mapValue:{fields:r.document.fields}}),a=$.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];t=new Lr(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=yt(n,r.document),i=r.readTime?ve(r.readTime):T.min(),o=$.newNoDocument(s,i),a=r.removedTargetIds||[];t=new Lr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=yt(n,r.document),i=r.removedTargetIds||[];t=new Lr([],i,s,null)}else{if(!("filter"in e))return E();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new _y(s),o=r.targetId;t=new Qh(o,i)}}return t}function os(n,e){let t;if(e instanceof js)t={update:uc(n,e.key,e.value)};else if(e instanceof Hh)t={delete:is(n,e.key)};else if(e instanceof Ks)t={update:uc(n,e.key,e.data),updateMask:Ky(e.fieldMask)};else{if(!(e instanceof Gh))return E();t={verify:is(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Hn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof tn)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof nn)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Gn)return{fieldPath:i.field.canonicalString(),increment:o.k};throw E()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Ly(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:E()}(n,e.precondition)),t}function Wi(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Je.updateTime(ve(s.updateTime)):s.exists!==void 0?Je.exists(s.exists):Je.none()}(e.currentDocument):Je.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(i,o){let a=null;if("setToServerValue"in o)C(o.setToServerValue==="REQUEST_TIME"),a=new Hn;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new tn(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new nn(u)}else"increment"in o?a=new Gn(i,o.increment):E();const c=ae.fromServerFormat(o.fieldPath);return new wy(c,a)}(n,s)):[];if(e.update){e.update.name;const s=yt(n,e.update.name),i=new be({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new zm(c.map(u=>ae.fromServerFormat(u)))}(e.updateMask);return new Ks(s,i,o,t,r)}return new js(s,i,t,r)}if(e.delete){const s=yt(n,e.delete);return new Hh(s,t)}if(e.verify){const s=yt(n,e.verify);return new Gh(s,t)}return E()}function Fy(n,e){return n&&n.length>0?(C(e!==void 0),n.map(t=>function(r,s){let i=r.updateTime?ve(r.updateTime):ve(s);return i.isEqual(T.min())&&(i=ve(s)),new Ey(i,r.transformResults||[])}(t,e))):[]}function tl(n,e){return{documents:[Gi(n,e.path)]}}function nl(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Gi(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Gi(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const u=c.map(h=>function(l){if(l.op==="=="){if(Xa(l.value))return{unaryFilter:{field:Ut(l.field),op:"IS_NAN"}};if(Qa(l.value))return{unaryFilter:{field:Ut(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(Xa(l.value))return{unaryFilter:{field:Ut(l.field),op:"IS_NOT_NAN"}};if(Qa(l.value))return{unaryFilter:{field:Ut(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ut(l.field),op:qy(l.op),value:l.value}}}(h));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);s&&(t.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:Ut(h.field),direction:By(h.dir)}}(u))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(c,u){return c.N||dn(u)?u:{value:u}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function rl(n){let e=Zh(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){C(r===1);const h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=sl(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(h=>function(l){return new Nn($t(l.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;t.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,dn(l)?null:l}(t.limit));let c=null;t.startAt&&(c=function(h){const l=!!h.before,f=h.values||[];return new rs(f,l)}(t.startAt));let u=null;return t.endAt&&(u=function(h){const l=!h.before,f=h.values||[];return new rs(f,l)}(t.endAt)),cy(e,s,o,i,a,"F",c,u)}function Vy(n,e){const t=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return E()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function sl(n){return n?n.unaryFilter!==void 0?[jy(n)]:n.fieldFilter!==void 0?[$y(n)]:n.compositeFilter!==void 0?n.compositeFilter.filters.map(e=>sl(e)).reduce((e,t)=>e.concat(t)):E():[]}function By(n){return Ny[n]}function qy(n){return Ry[n]}function Ut(n){return{fieldPath:n.canonicalString()}}function $t(n){return ae.fromServerFormat(n.fieldPath)}function $y(n){return fe.create($t(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return E()}}(n.fieldFilter.op),n.fieldFilter.value)}function jy(n){switch(n.unaryFilter.op){case"IS_NAN":const e=$t(n.unaryFilter.field);return fe.create(e,"==",{doubleValue:NaN});case"IS_NULL":const t=$t(n.unaryFilter.field);return fe.create(t,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=$t(n.unaryFilter.field);return fe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=$t(n.unaryFilter.field);return fe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return E()}}function Ky(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function il(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=hc(e)),e=Hy(n.get(t),e);return hc(e)}function Hy(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function hc(n){return n+""}function Ae(n){const e=n.length;if(C(e>=2),e===2)return C(n.charAt(0)===""&&n.charAt(1)===""),R.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&E(),n.charAt(o+1)){case"":const a=n.substring(i,o);let c;s.length===0?c=a:(s+=a,c=s,s=""),r.push(c);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:E()}i=o+2}return new R(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,t){this.seconds=e,this.nanoseconds=t}}class ge{constructor(e,t,r){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=r}}ge.store="owner",ge.key="owner";class tt{constructor(e,t,r){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=r}}tt.store="mutationQueues",tt.keyPath="userId";class P{constructor(e,t,r,s,i){this.userId=e,this.batchId=t,this.localWriteTimeMs=r,this.baseMutations=s,this.mutations=i}}P.store="mutations",P.keyPath="batchId",P.userMutationsIndex="userMutationsIndex",P.userMutationsKeyPath=["userId","batchId"];class re{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,z(t)]}static key(e,t,r){return[e,z(t),r]}}re.store="documentMutations",re.PLACEHOLDER=new re;class zy{constructor(e,t){this.path=e,this.readTime=t}}class Wy{constructor(e,t){this.path=e,this.version=t}}class V{constructor(e,t,r,s,i,o){this.unknownDocument=e,this.noDocument=t,this.document=r,this.hasCommittedMutations=s,this.readTime=i,this.parentPath=o}}V.store="remoteDocuments",V.readTimeIndex="readTimeIndex",V.readTimeIndexPath="readTime",V.collectionReadTimeIndex="collectionReadTimeIndex",V.collectionReadTimeIndexPath=["parentPath","readTime"];class ke{constructor(e){this.byteSize=e}}ke.store="remoteDocumentGlobal",ke.key="remoteDocumentGlobalKey";class pe{constructor(e,t,r,s,i,o,a){this.targetId=e,this.canonicalId=t,this.readTime=r,this.resumeToken=s,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=o,this.query=a}}pe.store="targets",pe.keyPath="targetId",pe.queryTargetsIndexName="queryTargetsIndex",pe.queryTargetsKeyPath=["canonicalId","targetId"];class Z{constructor(e,t,r){this.targetId=e,this.path=t,this.sequenceNumber=r}}Z.store="targetDocuments",Z.keyPath=["targetId","path"],Z.documentTargetsIndex="documentTargetsIndex",Z.documentTargetsKeyPath=["path","targetId"];class me{constructor(e,t,r,s){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=r,this.targetCount=s}}me.key="targetGlobalKey",me.store="targetGlobal";class vt{constructor(e,t){this.collectionId=e,this.parent=t}}vt.store="collectionParents",vt.keyPath=["collectionId","parent"];class Be{constructor(e,t,r,s){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=r,this.inForeground=s}}Be.store="clientMetadata",Be.keyPath="clientId";class rn{constructor(e,t,r){this.bundleId=e,this.createTime=t,this.version=r}}rn.store="bundles",rn.keyPath="bundleId";class sn{constructor(e,t,r){this.name=e,this.readTime=t,this.bundledQuery=r}}sn.store="namedQueries",sn.keyPath="name";class ye{constructor(e,t,r){this.indexId=e,this.collectionGroup=t,this.fields=r}}ye.store="indexConfiguration",ye.keyPath="indexId",ye.collectionGroupIndex="collectionGroupIndex",ye.collectionGroupIndexPath="collectionGroup";class Ee{constructor(e,t,r,s,i,o){this.indexId=e,this.uid=t,this.sequenceNumber=r,this.readTime=s,this.documentKey=i,this.largestBatchId=o}}Ee.store="indexState",Ee.keyPath=["indexId","uid"],Ee.sequenceNumberIndex="sequenceNumberIndex",Ee.sequenceNumberIndexPath=["uid","sequenceNumber"];class Te{constructor(e,t,r,s,i){this.indexId=e,this.uid=t,this.arrayValue=r,this.directionalValue=s,this.documentKey=i}}Te.store="indexEntries",Te.keyPath=["indexId","uid","arrayValue","directionalValue","documentKey"],Te.documentKeyIndex="documentKeyIndex",Te.documentKeyIndexPath=["indexId","uid","documentKey"];class G{constructor(e,t,r,s,i,o){this.userId=e,this.collectionPath=t,this.documentId=r,this.collectionGroup=s,this.largestBatchId=i,this.overlayMutation=o}}G.store="documentOverlays",G.keyPath=["userId","collectionPath","documentId"],G.collectionPathOverlayIndex="collectionPathOverlayIndex",G.collectionPathOverlayIndexPath=["userId","collectionPath","largestBatchId"],G.collectionGroupOverlayIndex="collectionGroupOverlayIndex",G.collectionGroupOverlayIndexPath=["userId","collectionGroup","largestBatchId"];const ol=[tt.store,P.store,re.store,V.store,pe.store,ge.store,me.store,Z.store,Be.store,ke.store,vt.store,rn.store,sn.store],al=[...ol,G.store],Qy=[...al,ye.store,Ee.store,Te.store];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ul{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&E(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new d((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof d?t:d.resolve(t)}catch(t){return d.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):d.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):d.reject(t)}static resolve(e){return new d((t,r)=>{t(e)})}static reject(e){return new d((t,r)=>{r(e)})}static waitFor(e){return new d((t,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=d.resolve(!1);for(const r of e)t=t.next(s=>s?d.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.At=new et,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{t.error?this.At.reject(new Rn(e,t.error)):this.At.resolve()},this.transaction.onerror=r=>{const s=Ho(r.target.error);this.At.reject(new Rn(e,s))}}static open(e,t,r,s){try{return new Gs(t,e.transaction(s,r))}catch(i){throw new Rn(t,i)}}get Rt(){return this.At.promise}abort(e){e&&this.At.reject(e),this.aborted||(m("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}Pt(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Yy(t)}}class Fe{constructor(e,t,r){this.name=e,this.version=t,this.bt=r,Fe.vt(B())===12.2&&de("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return m("SimpleDb","Removing database:",e),lt(window.indexedDB.deleteDatabase(e)).toPromise()}static Vt(){if(!eu())return!1;if(Fe.St())return!0;const e=B(),t=Fe.vt(e),r=0<t&&t<10,s=Fe.Dt(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static St(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.Ct)==="YES"}static Nt(e,t){return e.store(t)}static vt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static Dt(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async xt(e){return this.db||(m("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new Rn(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new I(p.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new I(p.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Rn(e,o))},s.onupgradeneeded=i=>{m("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.bt.kt(o,s.transaction,i.oldVersion,this.version).next(()=>{m("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Ot&&(this.db.onversionchange=t=>this.Ot(t)),this.db}Mt(e){this.Ot=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.xt(e);const a=Gs.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(u=>(a.Pt(),u)).catch(u=>(a.abort(u),d.reject(u))).toPromise();return c.catch(()=>{}),await a.Rt,c}catch(a){const c=a.name!=="FirebaseError"&&o<3;if(m("SimpleDb","Transaction failed with error:",a.message,"Retrying:",c),this.close(),!c)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Xy{constructor(e){this.$t=e,this.Ft=!1,this.Bt=null}get isDone(){return this.Ft}get Lt(){return this.Bt}set cursor(e){this.$t=e}done(){this.Ft=!0}Ut(e){this.Bt=e}delete(){return lt(this.$t.delete())}}class Rn extends I{constructor(e,t){super(p.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ot(n){return n.name==="IndexedDbTransactionError"}class Yy{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(m("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(m("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),lt(r)}add(e){return m("SimpleDb","ADD",this.store.name,e,e),lt(this.store.add(e))}get(e){return lt(this.store.get(e)).next(t=>(t===void 0&&(t=null),m("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return m("SimpleDb","DELETE",this.store.name,e),lt(this.store.delete(e))}count(){return m("SimpleDb","COUNT",this.store.name),lt(this.store.count())}qt(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const s=this.cursor(r),i=[];return this.Kt(s,(o,a)=>{i.push(a)}).next(()=>i)}{const s=this.store.getAll(r.range);return new d((i,o)=>{s.onerror=a=>{o(a.target.error)},s.onsuccess=a=>{i(a.target.result)}})}}Gt(e,t){m("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.jt=!1;const s=this.cursor(r);return this.Kt(s,(i,o,a)=>a.delete())}Qt(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.Kt(s,t)}Wt(e){const t=this.cursor({});return new d((r,s)=>{t.onerror=i=>{const o=Ho(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}Kt(e,t){const r=[];return new d((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new Xy(a),u=t(a.primaryKey,a.value,c);if(u instanceof d){const h=u.catch(l=>(c.done(),d.reject(l)));r.push(h)}c.isDone?s():c.Lt===null?a.continue():a.continue(c.Lt)}}).next(()=>d.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.jt?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function lt(n){return new d((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=Ho(r.target.error);t(s)}})}let lc=!1;function Ho(n){const e=Fe.vt(B());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new I("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return lc||(lc=!0,setTimeout(()=>{throw r},0)),r}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc extends ul{constructor(e,t){super(),this.zt=e,this.currentSequenceNumber=t}}function Y(n,e){const t=S(n);return Fe.Nt(t.zt,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Ty(i,e,r[s])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Ki(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Ki(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const r=e.get(t.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(T.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),O())}isEqual(e){return this.batchId===e.batchId&&Jt(this.mutations,e.mutations,(t,r)=>tc(t,r))&&Jt(this.baseMutations,e.baseMutations,(t,r)=>tc(t,r))}}class zo{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){C(e.mutations.length===r.length);let s=Ay;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new zo(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t,r,s,i=T.min(),o=T.min(),a=Q.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new nt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new nt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new nt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e){this.Ht=e}}function Jy(n,e){let t;if(e.document)t=My(n.Ht,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=w.fromSegments(e.noDocument.path),s=kt(e.noDocument.readTime);t=$.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return E();{const r=w.fromSegments(e.unknownDocument.path),s=kt(e.unknownDocument.version);t=$.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(dl(e.readTime)),t}function fc(n,e){const t=ll(e.readTime),r=e.key.path.popLast().toArray();if(e.isFoundDocument()){const s=function(o,a){return{name:is(o,a.key),fields:a.data.value.mapValue.fields,updateTime:Ko(o,a.version.toTimestamp())}}(n.Ht,e),i=e.hasCommittedMutations;return new V(null,null,s,i,t,r)}if(e.isNoDocument()){const s=e.key.path.toArray(),i=At(e.version),o=e.hasCommittedMutations;return new V(null,new zy(s,i),null,o,t,r)}if(e.isUnknownDocument()){const s=e.key.path.toArray(),i=At(e.version);return new V(new Wy(s,i),null,null,!0,t,r)}return E()}function ll(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function dl(n){const e=new _e(n[0],n[1]);return T.fromTimestamp(e)}function At(n){const e=n.toTimestamp();return new Gy(e.seconds,e.nanoseconds)}function kt(n){const e=new _e(n.seconds,n.nanoseconds);return T.fromTimestamp(e)}function Vt(n,e){const t=(e.baseMutations||[]).map(i=>Wi(n.Ht,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Wi(n.Ht,i)),s=_e.fromMillis(e.localWriteTimeMs);return new Go(e.batchId,s,t,r)}function bn(n){const e=kt(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?kt(n.lastLimboFreeSnapshotVersion):T.min();let r;var s;return n.query.documents!==void 0?(C((s=n.query).documents.length===1),r=je(Vs(Zh(s.documents[0])))):r=function(i){return je(rl(i))}(n.query),new nt(r,n.targetId,0,n.lastListenSequenceNumber,e,t,Q.fromBase64String(n.resumeToken))}function fl(n,e){const t=At(e.snapshotVersion),r=At(e.lastLimboFreeSnapshotVersion);let s;s=ns(e.target)?tl(n.Ht,e.target):nl(n.Ht,e.target);const i=e.resumeToken.toBase64();return new pe(e.targetId,fr(e.target),t,i,e.sequenceNumber,r,s)}function pl(n){const e=rl({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?dy(e,e.limit,"L"):e}function mi(n,e){return new Wo(e.largestBatchId,Wi(n.Ht,e.overlayMutation))}function pc(n,e){const t=e.path.lastSegment();return[n,z(e.path.popLast()),t]}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{getBundleMetadata(e,t){return gc(e).get(t).next(r=>{if(r)return{id:(s=r).bundleId,createTime:kt(s.createTime),version:s.version};var s})}saveBundleMetadata(e,t){return gc(e).put({bundleId:(r=t).id,createTime:At(ve(r.createTime)),version:r.version});var r}getNamedQuery(e,t){return mc(e).get(t).next(r=>{if(r)return{name:(s=r).name,query:pl(s.bundledQuery),readTime:kt(s.readTime)};var s})}saveNamedQuery(e,t){return mc(e).put(function(r){return{name:r.name,readTime:At(ve(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function gc(n){return Y(n,rn.store)}function mc(n){return Y(n,sn.store)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,t){this.O=e,this.userId=t}static Jt(e,t){const r=t.uid||"";return new Qo(e,r)}getOverlay(e,t){return In(e).get(pc(this.userId,t)).next(r=>r?mi(this.O,r):null)}saveOverlays(e,t,r){const s=[];return r.forEach(i=>{const o=new Wo(t,i);s.push(this.Yt(e,o))}),d.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(z(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(In(e).Gt(G.collectionPathOverlayIndex,a))}),d.waitFor(i)}getOverlaysForCollection(e,t,r){const s=new Map,i=z(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return In(e).qt(G.collectionPathOverlayIndex,o).next(a=>{for(const c of a){const u=mi(this.O,c);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=new Map;let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return In(e).Qt({index:G.collectionGroupOverlayIndex,range:a},(c,u,h)=>{const l=mi(this.O,u);i.size<s||l.largestBatchId===o?(i.set(l.getKey(),l),o=l.largestBatchId):h.done()}).next(()=>i)}Yt(e,t){return In(e).put(function(r,s,i){const[o,a,c]=pc(s,i.mutation.key);return new G(s,a,c,i.mutation.key.getCollectionGroup(),i.largestBatchId,os(r.Ht,i.mutation))}(this.O,this.userId,t))}}function In(n){return Y(n,G.store)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){}Xt(e,t){this.Zt(e,t),t.te()}Zt(e,t){if("nullValue"in e)this.ee(t,5);else if("booleanValue"in e)this.ee(t,10),t.ne(e.booleanValue?1:0);else if("integerValue"in e)this.ee(t,15),t.ne(F(e.integerValue));else if("doubleValue"in e){const r=F(e.doubleValue);isNaN(r)?this.ee(t,13):(this.ee(t,15),es(r)?t.ne(0):t.ne(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ee(t,20),typeof r=="string"?t.se(r):(t.se(`${r.seconds||""}`),t.ne(r.nanos||0))}else if("stringValue"in e)this.ie(e.stringValue,t),this.re(t);else if("bytesValue"in e)this.ee(t,30),t.oe(St(e.bytesValue)),this.re(t);else if("referenceValue"in e)this.ce(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ee(t,45),t.ne(r.latitude||0),t.ne(r.longitude||0)}else"mapValue"in e?Ce(e,Xm)?this.ee(t,Number.MAX_SAFE_INTEGER):(this.ue(e.mapValue,t),this.re(t)):"arrayValue"in e?(this.ae(e.arrayValue,t),this.re(t)):E()}ie(e,t){this.ee(t,25),this.he(e,t)}he(e,t){t.se(e)}ue(e,t){const r=e.fields||{};this.ee(t,55);for(const s of Object.keys(r))this.ie(s,t),this.Zt(r[s],t)}ae(e,t){const r=e.values||[];this.ee(t,50);for(const s of r)this.Zt(s,t)}ce(e,t){this.ee(t,37),w.fromName(e).path.forEach(r=>{this.ee(t,60),this.he(r,t)})}ee(e,t){e.ne(t)}re(e){e.ne(2)}}as.le=new as;function ev(n){if(n===0)return 8;let e=0;return n>>4==0&&(e+=4,n<<=4),n>>6==0&&(e+=2,n<<=2),n>>7==0&&(e+=1),e}function yc(n){const e=64-function(t){let r=0;for(let s=0;s<8;++s){const i=ev(255&t[s]);if(r+=i,i!==8)break}return r}(n);return Math.ceil(e/8)}class tv{constructor(){this.buffer=new Uint8Array(1024),this.position=0}fe(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.de(r.value),r=t.next();this._e()}we(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.me(r.value),r=t.next();this.ge()}ye(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.de(r);else if(r<2048)this.de(960|r>>>6),this.de(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.de(480|r>>>12),this.de(128|63&r>>>6),this.de(128|63&r);else{const s=t.codePointAt(0);this.de(240|s>>>18),this.de(128|63&s>>>12),this.de(128|63&s>>>6),this.de(128|63&s)}}this._e()}pe(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.me(r);else if(r<2048)this.me(960|r>>>6),this.me(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.me(480|r>>>12),this.me(128|63&r>>>6),this.me(128|63&r);else{const s=t.codePointAt(0);this.me(240|s>>>18),this.me(128|63&s>>>12),this.me(128|63&s>>>6),this.me(128|63&s)}}this.ge()}Ie(e){const t=this.Ee(e),r=yc(t);this.Te(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Ae(e){const t=this.Ee(e),r=yc(t);this.Te(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}Re(){this.Pe(255),this.Pe(255)}be(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(e){this.Te(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ve(){return this.buffer.slice(0,this.position)}Ee(e){const t=function(s){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,s,!1),new Uint8Array(i.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}de(e){const t=255&e;t===0?(this.Pe(0),this.Pe(255)):t===255?(this.Pe(255),this.Pe(0)):this.Pe(t)}me(e){const t=255&e;t===0?(this.ve(0),this.ve(255)):t===255?(this.ve(255),this.ve(0)):this.ve(e)}_e(){this.Pe(0),this.Pe(1)}ge(){this.ve(0),this.ve(1)}Pe(e){this.Te(1),this.buffer[this.position++]=e}ve(e){this.Te(1),this.buffer[this.position++]=~e}Te(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class nv{constructor(e){this.Se=e}oe(e){this.Se.fe(e)}se(e){this.Se.ye(e)}ne(e){this.Se.Ie(e)}te(){this.Se.Re()}}class rv{constructor(e){this.Se=e}oe(e){this.Se.we(e)}se(e){this.Se.pe(e)}ne(e){this.Se.Ae(e)}te(){this.Se.be()}}class vc{constructor(){this.Se=new tv,this.De=new nv(this.Se),this.Ce=new rv(this.Se)}seed(e){this.Se.seed(e)}Ne(e){return e===0?this.De:this.Ce}Ve(){return this.Se.Ve()}reset(){this.Se.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}}function vi(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=w.comparator(n.documentKey,e.documentKey),t!==0?t:(t=wc(n.arrayValue,e.arrayValue),t!==0?t:wc(n.directionalValue,e.directionalValue)))}function wc(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(){this.xe=new Xo}addToCollectionParentIndex(e,t){return this.xe.add(t),d.resolve()}getCollectionParents(e,t){return d.resolve(this.xe.getEntries(t))}addFieldIndex(e,t){return d.resolve()}deleteFieldIndex(e,t){return d.resolve()}getDocumentsMatchingTarget(e,t,r){return d.resolve(O())}getFieldIndex(e,t){return d.resolve(null)}getFieldIndexes(e,t){return d.resolve([])}getNextCollectionGroupToUpdate(e){return d.resolve(null)}updateCollectionGroup(e,t,r){return d.resolve()}updateIndexEntries(e,t){return d.resolve()}}class Xo{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new M(R.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new M(R.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e){this.user=e,this.ke=new Xo,this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.ke.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.ke.add(t)});const i={collectionId:r,parent:z(s)};return Ic(e).put(i)}return d.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[Ph(t),""],!1,!0);return Ic(e).qt(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(Ae(o.parent))}return r})}addFieldIndex(e,t){const r=_r(e),s=function(i){return new ye(i.indexId,i.collectionGroup,i.fields.map(o=>[o.fieldPath.canonicalString(),o.kind]))}(t);return delete s.indexId,r.add(s).next()}deleteFieldIndex(e,t){const r=_r(e),s=br(e),i=Tr(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t,r){return d.resolve(O())}getFieldIndex(e,t){return d.resolve(null)}Oe(e,t){const r=new vc;for(const s of function(i){return i.fields.filter(o=>o.kind!==2)}(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Ne(s.kind);as.le.Xt(i,o)}return r.Ve()}Me(e){const t=new vc;return as.le.Xt(e,t.Ne(0)),t.Ve()}getFieldIndexes(e,t){const r=_r(e),s=br(e);return(t?r.qt(ye.collectionGroupIndex,IDBKeyRange.bound(t,t)):r.qt()).next(i=>{const o=[];return d.forEach(i,a=>s.get([a.indexId,this.uid]).next(c=>{o.push(function(u,h){const l=h?new ts(h.sequenceNumber,new Ms(kt(h.readTime),new w(Ae(h.documentKey)),h.largestBatchId)):ts.empty(),f=u.fields.map(([g,y])=>new Ym(ae.fromServerFormat(g),y));return new Uh(u.indexId,u.collectionGroup,f,l)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>r.indexState.sequenceNumber-s.indexState.sequenceNumber),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=_r(e),i=br(e);return this.$e(e).next(o=>s.qt(ye.collectionGroupIndex,IDBKeyRange.bound(t,t)).next(a=>d.forEach(a,c=>i.put(function(u,h,l,f){return new Ee(u,h.uid||"",l,At(f.readTime),z(f.documentKey.path),f.largestBatchId)}(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return d.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?d.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),d.forEach(a,c=>this.Fe(e,s,c).next(u=>{const h=this.Be(i,c);return u.isEqual(h)?d.resolve():this.Le(e,i,u,h)}))))})}Ue(e,t,r){return Tr(e).put(new Te(r.indexId,this.uid,r.arrayValue,r.directionalValue,z(t.key.path)))}qe(e,t,r){return Tr(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,z(t.key.path)])}Fe(e,t,r){const s=Tr(e);let i=new M(vi);return s.Qt({index:Te.documentKeyIndex,range:IDBKeyRange.only([r.indexId,this.uid,z(t.path)])},(o,a)=>{i=i.add(new yi(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}Be(e,t){let r=new M(vi);const s=this.Oe(t,e);if(s==null)return r;const i=function(o){return o.fields.find(a=>a.kind===2)}(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Ls(o))for(const a of o.arrayValue.values||[])r=r.add(new yi(t.indexId,e.key,this.Me(a),s))}else r=r.add(new yi(t.indexId,e.key,new Uint8Array,s));return r}Le(e,t,r,s){m("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const i=[];return function(o,a,c,u,h){const l=o.getIterator(),f=a.getIterator();let g=Mt(l),y=Mt(f);for(;g||y;){let A=!1,N=!1;if(g&&y){const U=c(g,y);U<0?N=!0:U>0&&(A=!0)}else g!=null?N=!0:A=!0;A?(u(y),y=Mt(f)):N?(h(g),g=Mt(l)):(g=Mt(l),y=Mt(f))}}(r,s,vi,o=>{i.push(this.Ue(e,t,o))},o=>{i.push(this.qe(e,t,o))}),d.waitFor(i)}$e(e){let t=1;return br(e).Qt({index:Ee.sequenceNumberIndex,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}}function Ic(n){return Y(n,vt.store)}function Tr(n){return Y(n,Te.store)}function _r(n){return Y(n,ye.store)}function br(n){return Y(n,Ee.store)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class le{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new le(e,le.DEFAULT_COLLECTION_PERCENTILE,le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(n,e,t){const r=n.store(P.store),s=n.store(re.store),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Qt({range:o},(h,l,f)=>(a++,f.delete()));i.push(c.next(()=>{C(a===1)}));const u=[];for(const h of t.mutations){const l=re.key(e,h.key.path,t.batchId);i.push(s.delete(l)),u.push(h.key)}return d.waitFor(i).next(()=>u)}function cs(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw E();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */le.DEFAULT_COLLECTION_PERCENTILE=10,le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,le.DEFAULT=new le(41943040,le.DEFAULT_COLLECTION_PERCENTILE,le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),le.DISABLED=new le(-1,0,0);class Yo{constructor(e,t,r,s){this.userId=e,this.O=t,this.indexManager=r,this.referenceDelegate=s,this.Ke={}}static Jt(e,t,r,s){C(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Yo(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ge(e).Qt({index:P.userMutationsIndex,range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=Bt(e),o=Ge(e);return o.add({}).next(a=>{C(typeof a=="number");const c=new Go(a,t,r,s),u=function(f,g,y){const A=y.baseMutations.map(U=>os(f.Ht,U)),N=y.mutations.map(U=>os(f.Ht,U));return new P(g,y.batchId,y.localWriteTime.toMillis(),A,N)}(this.O,this.userId,c),h=[];let l=new M((f,g)=>x(f.canonicalString(),g.canonicalString()));for(const f of s){const g=re.key(this.userId,f.key.path,a);l=l.add(f.key.path.popLast()),h.push(o.put(u)),h.push(i.put(g,re.PLACEHOLDER))}return l.forEach(f=>{h.push(this.indexManager.addToCollectionParentIndex(e,f))}),e.addOnCommittedListener(()=>{this.Ke[a]=c.keys()}),d.waitFor(h).next(()=>c)})}lookupMutationBatch(e,t){return Ge(e).get(t).next(r=>r?(C(r.userId===this.userId),Vt(this.O,r)):null)}Ge(e,t){return this.Ke[t]?d.resolve(this.Ke[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.Ke[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Ge(e).Qt({index:P.userMutationsIndex,range:s},(o,a,c)=>{a.userId===this.userId&&(C(a.batchId>=r),i=Vt(this.O,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Ge(e).Qt({index:P.userMutationsIndex,range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ge(e).qt(P.userMutationsIndex,t).next(r=>r.map(s=>Vt(this.O,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=re.prefixForPath(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return Bt(e).Qt({range:s},(o,a,c)=>{const[u,h,l]=o,f=Ae(h);if(u===this.userId&&t.path.isEqual(f))return Ge(e).get(l).next(g=>{if(!g)throw E();C(g.userId===this.userId),i.push(Vt(this.O,g))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new M(x);const s=[];return t.forEach(i=>{const o=re.prefixForPath(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=Bt(e).Qt({range:a},(u,h,l)=>{const[f,g,y]=u,A=Ae(g);f===this.userId&&i.path.isEqual(A)?r=r.add(y):l.done()});s.push(c)}),d.waitFor(s).next(()=>this.je(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=re.prefixForPath(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new M(x);return Bt(e).Qt({range:o},(c,u,h)=>{const[l,f,g]=c,y=Ae(f);l===this.userId&&r.isPrefixOf(y)?y.length===s&&(a=a.add(g)):h.done()}).next(()=>this.je(e,a))}je(e,t){const r=[],s=[];return t.forEach(i=>{s.push(Ge(e).get(i).next(o=>{if(o===null)throw E();C(o.userId===this.userId),r.push(Vt(this.O,o))}))}),d.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return gl(e.zt,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Qe(t.batchId)}),d.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}Qe(e){delete this.Ke[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return d.resolve();const r=IDBKeyRange.lowerBound(re.prefixForUser(this.userId)),s=[];return Bt(e).Qt({range:r},(i,o,a)=>{if(i[0]===this.userId){const c=Ae(i[1]);s.push(c)}else a.done()}).next(()=>{C(s.length===0)})})}containsKey(e,t){return ml(e,this.userId,t)}We(e){return yl(e).get(this.userId).next(t=>t||new tt(this.userId,-1,""))}}function ml(n,e,t){const r=re.prefixForPath(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Bt(n).Qt({range:i,jt:!0},(a,c,u)=>{const[h,l,f]=a;h===e&&l===s&&(o=!0),u.done()}).next(()=>o)}function Ge(n){return Y(n,P.store)}function Bt(n){return Y(n,re.store)}function yl(n){return Y(n,tt.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.ze=e}next(){return this.ze+=2,this.ze}static He(){return new xt(0)}static Je(){return new xt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,t){this.referenceDelegate=e,this.O=t}allocateTargetId(e){return this.Ye(e).next(t=>{const r=new xt(t.highestTargetId);return t.highestTargetId=r.next(),this.Xe(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Ye(e).next(t=>T.fromTimestamp(new _e(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Ye(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Ye(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Xe(e,s)))}addTargetData(e,t){return this.Ze(e,t).next(()=>this.Ye(e).next(r=>(r.targetCount+=1,this.tn(t,r),this.Xe(e,r))))}updateTargetData(e,t){return this.Ze(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Ft(e).delete(t.targetId)).next(()=>this.Ye(e)).next(r=>(C(r.targetCount>0),r.targetCount-=1,this.Xe(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return Ft(e).Qt((o,a)=>{const c=bn(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>d.waitFor(i)).next(()=>s)}forEachTarget(e,t){return Ft(e).Qt((r,s)=>{const i=bn(s);t(i)})}Ye(e){return Tc(e).get(me.key).next(t=>(C(t!==null),t))}Xe(e,t){return Tc(e).put(me.key,t)}Ze(e,t){return Ft(e).put(fl(this.O,t))}tn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Ye(e).next(t=>t.targetCount)}getTargetData(e,t){const r=fr(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Ft(e).Qt({range:s,index:pe.queryTargetsIndexName},(o,a,c)=>{const u=bn(a);Us(t,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=Ye(e);return t.forEach(o=>{const a=z(o.path);s.push(i.put(new Z(r,a))),s.push(this.referenceDelegate.addReference(e,r,o))}),d.waitFor(s)}removeMatchingKeys(e,t,r){const s=Ye(e);return d.forEach(t,i=>{const o=z(i.path);return d.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=Ye(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=Ye(e);let i=O();return s.Qt({range:r,jt:!0},(o,a,c)=>{const u=Ae(o[1]),h=new w(u);i=i.add(h)}).next(()=>i)}containsKey(e,t){const r=z(t.path),s=IDBKeyRange.bound([r],[Ph(r)],!1,!0);let i=0;return Ye(e).Qt({index:Z.documentTargetsIndex,jt:!0,range:s},([o,a],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}Tt(e,t){return Ft(e).get(t).next(r=>r?bn(r):null)}}function Ft(n){return Y(n,pe.store)}function Tc(n){return Y(n,me.store)}function Ye(n){return Y(n,Z.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==cl)throw n;m("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c([n,e],[t,r]){const s=x(n,t);return s===0?x(e,r):s}class av{constructor(e){this.en=e,this.buffer=new M(_c),this.nn=0}sn(){return++this.nn}rn(e){const t=[e,this.sn()];if(this.buffer.size<this.en)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();_c(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class cv{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.on=!1,this.cn=null}start(e){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.un(e)}stop(){this.cn&&(this.cn.cancel(),this.cn=null)}get started(){return this.cn!==null}un(e){const t=this.on?3e5:6e4;m("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.cn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.cn=null,this.on=!0;try{await e.collectGarbage(this.garbageCollector)}catch(r){Ot(r)?m("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",r):await fn(r)}await this.un(e)})}}class uv{constructor(e,t){this.an=e,this.params=t}calculateTargetCount(e,t){return this.an.hn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return d.resolve(Se.A);const r=new av(t);return this.an.forEachTarget(e,s=>r.rn(s.sequenceNumber)).next(()=>this.an.ln(e,s=>r.rn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.an.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.an.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(m("LruGarbageCollector","Garbage collection skipped; disabled"),d.resolve(Ec)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(m("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ec):this.fn(e,t))}getCacheSize(e){return this.an.getCacheSize(e)}fn(e,t){let r,s,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(l=>(l>this.params.maximumSequenceNumbersToCollect?(m("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${l}`),s=this.params.maximumSequenceNumbersToCollect):s=l,o=Date.now(),this.nthSequenceNumber(e,s))).next(l=>(r=l,a=Date.now(),this.removeTargets(e,r,t))).next(l=>(i=l,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(l=>(u=Date.now(),Bi()<=D.DEBUG&&m("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${l} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),d.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:l})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,t){this.db=e,this.garbageCollector=function(r,s){return new uv(r,s)}(this,t)}hn(e){const t=this.dn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}dn(e){let t=0;return this.ln(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}ln(e,t){return this._n(e,(r,s)=>t(s))}addReference(e,t,r){return Sr(e,r)}removeReference(e,t,r){return Sr(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Sr(e,t)}wn(e,t){return function(r,s){let i=!1;return yl(r).Wt(o=>ml(r,o,s).next(a=>(a&&(i=!0),d.resolve(!a)))).next(()=>i)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this._n(e,(o,a)=>{if(a<=t){const c=this.wn(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,T.min()),Ye(e).delete([0,z(o.path)])))});s.push(c)}}).next(()=>d.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Sr(e,t)}_n(e,t){const r=Ye(e);let s,i=Se.A;return r.Qt({index:Z.documentTargetsIndex},([o,a],{path:c,sequenceNumber:u})=>{o===0?(i!==Se.A&&t(new w(Ae(s)),i),i=u,s=c):i=Se.A}).next(()=>{i!==Se.A&&t(new w(Ae(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Sr(n,e){return Ye(n).put(function(t,r){return new Z(0,z(t.path),r)}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s!==void 0){for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t])}else this.inner[r]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),!0;return!1}forEach(e){Ps(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Hm(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(){this.changes=new pn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,$.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?d.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e){this.O=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return ht(e).put(Cr(t),r)}removeEntry(e,t){const r=ht(e),s=Cr(t);return r.delete(s)}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.mn(e,r)))}getEntry(e,t){return ht(e).get(Cr(t)).next(r=>this.gn(t,r))}yn(e,t){return ht(e).get(Cr(t)).next(r=>({document:this.gn(t,r),size:cs(r)}))}getEntries(e,t){let r=Ne();return this.pn(e,t,(s,i)=>{const o=this.gn(s,i);r=r.insert(s,o)}).next(()=>r)}In(e,t){let r=Ne(),s=new X(w.comparator);return this.pn(e,t,(i,o)=>{const a=this.gn(i,o);r=r.insert(i,a),s=s.insert(i,cs(o))}).next(()=>({documents:r,En:s}))}pn(e,t,r){if(t.isEmpty())return d.resolve();const s=IDBKeyRange.bound(t.first().path.toArray(),t.last().path.toArray()),i=t.getIterator();let o=i.getNext();return ht(e).Qt({range:s},(a,c,u)=>{const h=w.fromSegments(a);for(;o&&w.comparator(o,h)<0;)r(o,null),o=i.getNext();o&&o.isEqual(h)&&(r(o,c),o=i.hasNext()?i.getNext():null),o?u.Ut(o.path.toArray()):u.done()}).next(()=>{for(;o;)r(o,null),o=i.hasNext()?i.getNext():null})}getAll(e,t,r){let s=Ne();const i=t.length+1,o={};if(r.isEqual(T.min())){const a=t.toArray();o.range=IDBKeyRange.lowerBound(a)}else{const a=t.toArray(),c=ll(r);o.range=IDBKeyRange.lowerBound([a,c],!0),o.index=V.collectionReadTimeIndex}return ht(e).Qt(o,(a,c,u)=>{if(a.length!==i)return;const h=this.gn(w.fromSegments(a),c);t.isPrefixOf(h.key.path)?s=s.insert(h.key,h):u.done()}).next(()=>s)}newChangeBuffer(e){return new dv(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return bc(e).get(ke.key).next(t=>(C(!!t),t))}mn(e,t){return bc(e).put(ke.key,t)}gn(e,t){if(t){const r=Jy(this.O,t);if(!(r.isNoDocument()&&r.version.isEqual(T.min())))return r}return $.newInvalidDocument(e)}}class dv extends vl{constructor(e,t){super(),this.Tn=e,this.trackRemovals=t,this.An=new pn(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new M((i,o)=>x(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.An.get(i);if(o.isValidDocument()){const c=fc(this.Tn.O,o);s=s.add(i.path.popLast()),r+=cs(c)-a,t.push(this.Tn.addEntry(e,i,c))}else if(r-=a,this.trackRemovals){const c=fc(this.Tn.O,o.convertToNoDocument(T.min()));t.push(this.Tn.addEntry(e,i,c))}else t.push(this.Tn.removeEntry(e,i))}),s.forEach(i=>{t.push(this.Tn.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Tn.updateMetadata(e,r)),d.waitFor(t)}getFromCache(e,t){return this.Tn.yn(e,t).next(r=>(this.An.set(t,r.size),r.document))}getAllFromCache(e,t){return this.Tn.In(e,t).next(({documents:r,En:s})=>(s.forEach((i,o)=>{this.An.set(i,o)}),r))}}function bc(n){return Y(n,ke.store)}function ht(n){return Y(n,V.store)}function Cr(n){return n.path.toArray()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e){this.O=e}kt(e,t,r,s){const i=new Gs("createOrUpgrade",t);r<1&&s>=1&&(function(a){a.createObjectStore(ge.store)}(e),function(a){a.createObjectStore(tt.store,{keyPath:tt.keyPath}),a.createObjectStore(P.store,{keyPath:P.keyPath,autoIncrement:!0}).createIndex(P.userMutationsIndex,P.userMutationsKeyPath,{unique:!0}),a.createObjectStore(re.store)}(e),Sc(e),function(a){a.createObjectStore(V.store)}(e));let o=d.resolve();return r<3&&s>=3&&(r!==0&&(function(a){a.deleteObjectStore(Z.store),a.deleteObjectStore(pe.store),a.deleteObjectStore(me.store)}(e),Sc(e)),o=o.next(()=>function(a){const c=a.store(me.store),u=new me(0,0,T.min().toTimestamp(),0);return c.put(me.key,u)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store(P.store).qt().next(u=>{a.deleteObjectStore(P.store),a.createObjectStore(P.store,{keyPath:P.keyPath,autoIncrement:!0}).createIndex(P.userMutationsIndex,P.userMutationsKeyPath,{unique:!0});const h=c.store(P.store),l=u.map(f=>h.put(f));return d.waitFor(l)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore(Be.store,{keyPath:Be.keyPath})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.Rn(i))),r<6&&s>=6&&(o=o.next(()=>(function(a){a.createObjectStore(ke.store)}(e),this.Pn(i)))),r<7&&s>=7&&(o=o.next(()=>this.bn(i))),r<8&&s>=8&&(o=o.next(()=>this.vn(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e),function(a){const c=a.objectStore(V.store);c.createIndex(V.readTimeIndex,V.readTimeIndexPath,{unique:!1}),c.createIndex(V.collectionReadTimeIndex,V.collectionReadTimeIndexPath,{unique:!1})}(t)})),r<10&&s>=10&&(o=o.next(()=>this.Vn(i))),r<11&&s>=11&&(o=o.next(()=>{(function(a){a.createObjectStore(rn.store,{keyPath:rn.keyPath})})(e),function(a){a.createObjectStore(sn.store,{keyPath:sn.keyPath})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore(G.store,{keyPath:G.keyPath});c.createIndex(G.collectionPathOverlayIndex,G.collectionPathOverlayIndexPath,{unique:!1}),c.createIndex(G.collectionGroupOverlayIndex,G.collectionGroupOverlayIndexPath,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>{(function(a){a.createObjectStore(ye.store,{keyPath:ye.keyPath,autoIncrement:!0}).createIndex(ye.collectionGroupIndex,ye.collectionGroupIndexPath,{unique:!1}),a.createObjectStore(Ee.store,{keyPath:Ee.keyPath}).createIndex(Ee.sequenceNumberIndex,Ee.sequenceNumberIndexPath,{unique:!1}),a.createObjectStore(Te.store,{keyPath:Te.keyPath}).createIndex(Te.documentKeyIndex,Te.documentKeyIndexPath,{unique:!1})})(e)})),o}Pn(e){let t=0;return e.store(V.store).Qt((r,s)=>{t+=cs(s)}).next(()=>{const r=new ke(t);return e.store(ke.store).put(ke.key,r)})}Rn(e){const t=e.store(tt.store),r=e.store(P.store);return t.qt().next(s=>d.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.qt(P.userMutationsIndex,o).next(a=>d.forEach(a,c=>{C(c.userId===i.userId);const u=Vt(this.O,c);return gl(e,i.userId,u).next(()=>{})}))}))}bn(e){const t=e.store(Z.store),r=e.store(V.store);return e.store(me.store).get(me.key).next(s=>{const i=[];return r.Qt((o,a)=>{const c=new R(o),u=function(h){return[0,z(h)]}(c);i.push(t.get(u).next(h=>h?d.resolve():(l=>t.put(new Z(0,z(l),s.highestListenSequenceNumber)))(c)))}).next(()=>d.waitFor(i))})}vn(e,t){e.createObjectStore(vt.store,{keyPath:vt.keyPath});const r=t.store(vt.store),s=new Xo,i=o=>{if(s.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:z(c)})}};return t.store(V.store).Qt({jt:!0},(o,a)=>{const c=new R(o);return i(c.popLast())}).next(()=>t.store(re.store).Qt({jt:!0},([o,a,c],u)=>{const h=Ae(a);return i(h.popLast())}))}Vn(e){const t=e.store(pe.store);return t.Qt((r,s)=>{const i=bn(s),o=fl(this.O,i);return t.put(o)})}}function Sc(n){n.createObjectStore(Z.store,{keyPath:Z.keyPath}).createIndex(Z.documentTargetsIndex,Z.documentTargetsKeyPath,{unique:!0}),n.createObjectStore(pe.store,{keyPath:pe.keyPath}).createIndex(pe.queryTargetsIndexName,pe.queryTargetsKeyPath,{unique:!0}),n.createObjectStore(me.store)}const wi="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Jo{constructor(e,t,r,s,i,o,a,c,u,h,l=12){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Sn=i,this.window=o,this.document=a,this.Dn=u,this.Cn=h,this.schemaVersion=l,this.Nn=null,this.xn=!1,this.isPrimary=!1,this.networkEnabled=!0,this.kn=null,this.inForeground=!1,this.On=null,this.Mn=null,this.$n=Number.NEGATIVE_INFINITY,this.Fn=f=>Promise.resolve(),!Jo.Vt())throw new I(p.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new hv(this,s),this.Bn=t+"main",this.O=new hl(c),this.Ln=new Fe(this.Bn,this.schemaVersion,new fv(this.O)),this.Un=new ov(this.referenceDelegate,this.O),this.qn=function(f){return new lv(f)}(this.O),this.Kn=new Zy,this.window&&this.window.localStorage?this.Gn=this.window.localStorage:(this.Gn=null,h===!1&&de("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.jn().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new I(p.FAILED_PRECONDITION,wi);return this.Qn(),this.Wn(),this.zn(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Un.getHighestSequenceNumber(e))}).then(e=>{this.Nn=new Se(e,this.Dn)}).then(()=>{this.xn=!0}).catch(e=>(this.Ln&&this.Ln.close(),Promise.reject(e)))}Hn(e){return this.Fn=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ln.Mt(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Sn.enqueueAndForget(async()=>{this.started&&await this.jn()}))}jn(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ar(e).put(new Be(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.Jn(e).next(t=>{t||(this.isPrimary=!1,this.Sn.enqueueRetryable(()=>this.Fn(!1)))})}).next(()=>this.Yn(e)).next(t=>this.isPrimary&&!t?this.Xn(e).next(()=>!1):!!t&&this.Zn(e).next(()=>!0))).catch(e=>{if(Ot(e))return m("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return m("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Sn.enqueueRetryable(()=>this.Fn(e)),this.isPrimary=e})}Jn(e){return En(e).get(ge.key).next(t=>d.resolve(this.ts(t)))}es(e){return Ar(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.ss(this.$n,18e5)){this.$n=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Y(t,Be.store);return r.qt().next(s=>{const i=this.rs(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return d.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Gn)for(const t of e)this.Gn.removeItem(this.os(t.clientId))}}zn(){this.Mn=this.Sn.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.jn().then(()=>this.ns()).then(()=>this.zn()))}ts(e){return!!e&&e.ownerId===this.clientId}Yn(e){return this.Cn?d.resolve(!0):En(e).get(ge.key).next(t=>{if(t!==null&&this.ss(t.leaseTimestampMs,5e3)&&!this.cs(t.ownerId)){if(this.ts(t)&&this.networkEnabled)return!0;if(!this.ts(t)){if(!t.allowTabSynchronization)throw new I(p.FAILED_PRECONDITION,wi);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ar(e).qt().next(r=>this.rs(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&m("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.xn=!1,this.us(),this.Mn&&(this.Mn.cancel(),this.Mn=null),this.hs(),this.ls(),await this.Ln.runTransaction("shutdown","readwrite",[ge.store,Be.store],e=>{const t=new dc(e,Se.A);return this.Xn(t).next(()=>this.es(t))}),this.Ln.close(),this.fs()}rs(e,t){return e.filter(r=>this.ss(r.updateTimeMs,t)&&!this.cs(r.clientId))}ds(){return this.runTransaction("getActiveClients","readonly",e=>Ar(e).qt().next(t=>this.rs(t,18e5).map(r=>r.clientId)))}get started(){return this.xn}getMutationQueue(e,t){return Yo.Jt(e,this.O,t,this.referenceDelegate)}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getIndexManager(e){return new iv(e)}getDocumentOverlayCache(e){return Qo.Jt(this.O,e)}getBundleCache(){return this.Kn}runTransaction(e,t,r){m("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=(o=this.schemaVersion)===13?Qy:o===12?al:o===11?ol:void E();var o;let a;return this.Ln.runTransaction(e,s,i,c=>(a=new dc(c,this.Nn?this.Nn.next():Se.A),t==="readwrite-primary"?this.Jn(a).next(u=>!!u||this.Yn(a)).next(u=>{if(!u)throw de(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Sn.enqueueRetryable(()=>this.Fn(!1)),new I(p.FAILED_PRECONDITION,cl);return r(a)}).next(u=>this.Zn(a).next(()=>u)):this._s(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}_s(e){return En(e).get(ge.key).next(t=>{if(t!==null&&this.ss(t.leaseTimestampMs,5e3)&&!this.cs(t.ownerId)&&!this.ts(t)&&!(this.Cn||this.allowTabSynchronization&&t.allowTabSynchronization))throw new I(p.FAILED_PRECONDITION,wi)})}Zn(e){const t=new ge(this.clientId,this.allowTabSynchronization,Date.now());return En(e).put(ge.key,t)}static Vt(){return Fe.Vt()}Xn(e){const t=En(e);return t.get(ge.key).next(r=>this.ts(r)?(m("IndexedDbPersistence","Releasing primary lease."),t.delete(ge.key)):d.resolve())}ss(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(de(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Qn(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.On=()=>{this.Sn.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.jn()))},this.document.addEventListener("visibilitychange",this.On),this.inForeground=this.document.visibilityState==="visible")}hs(){this.On&&(this.document.removeEventListener("visibilitychange",this.On),this.On=null)}Wn(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.kn=()=>{this.us(),Pd()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Sn.enterRestrictedMode(!0),this.Sn.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.kn))}ls(){this.kn&&(this.window.removeEventListener("pagehide",this.kn),this.kn=null)}cs(e){var t;try{const r=((t=this.Gn)===null||t===void 0?void 0:t.getItem(this.os(e)))!==null;return m("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return de("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}us(){if(this.Gn)try{this.Gn.setItem(this.os(this.clientId),String(Date.now()))}catch(e){de("Failed to set zombie client id.",e)}}fs(){if(this.Gn)try{this.Gn.removeItem(this.os(this.clientId))}catch{}}os(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function En(n){return Y(n,ge.store)}function Ar(n){return Y(n,Be.store)}function pv(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,t,r){this.qn=e,this.gs=t,this.indexManager=r}ys(e,t){return this.gs.getAllMutationBatchesAffectingDocumentKey(e,t).next(r=>this.ps(e,t,r))}ps(e,t,r){return this.qn.getEntry(e,t).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}Is(e,t){e.forEach((r,s)=>{for(const i of t)i.applyToLocalView(s)})}Es(e,t){return this.qn.getEntries(e,t).next(r=>this.Ts(e,r).next(()=>r))}Ts(e,t){return this.gs.getAllMutationBatchesAffectingDocumentKeys(e,t).next(r=>this.Is(t,r))}As(e,t,r){return function(s){return w.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.Rs(e,t.path):ly(t)?this.Ps(e,t,r):this.bs(e,t,r)}Rs(e,t){return this.ys(e,new w(t)).next(r=>{let s=Hi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}Ps(e,t,r){const s=t.collectionGroup;let i=Hi();return this.indexManager.getCollectionParents(e,s).next(o=>d.forEach(o,a=>{const c=function(u,h){return new Fs(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(s));return this.bs(e,c,r).next(u=>{u.forEach((h,l)=>{i=i.insert(h,l)})})}).next(()=>i))}bs(e,t,r){let s;return this.qn.getAll(e,t.path,r).next(i=>(s=i,this.gs.getAllMutationBatchesAffectingQuery(e,t))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let u=s.get(c);u==null&&(u=$.newInvalidDocument(c),s=s.insert(c,u)),Ki(a,u,o.localWriteTime),u.isFoundDocument()||(s=s.remove(c))}}).next(()=>(s.forEach((i,o)=>{jo(t,o)||(s=s.remove(i))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.vs=r,this.Vs=s}static Ss(e,t){let r=O(),s=O();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Zo(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{Ds(e){this.Cs=e}As(e,t,r,s){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(t)||r.isEqual(T.min())?this.Ns(e,t):this.Cs.Es(e,s).next(i=>{const o=this.xs(t,i);return(Or(t)||ss(t))&&this.ks(t.limitType,o,s,r)?this.Ns(e,t):(Bi()<=D.DEBUG&&m("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ji(t)),this.Cs.As(e,t,r).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}xs(e,t){let r=new M(Bh(e));return t.forEach((s,i)=>{jo(e,i)&&(r=r.add(i))}),r}ks(e,t,r,s){if(r.size!==t.size)return!0;const i=e==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ns(e,t){return Bi()<=D.DEBUG&&m("QueryEngine","Using full collection scan to execute query:",ji(t)),this.Cs.As(e,t,T.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e,t,r,s){this.persistence=e,this.Os=t,this.O=s,this.Ms=new X(x),this.$s=new pn(i=>fr(i),Us),this.Fs=T.min(),this.Bs=e.getRemoteDocumentCache(),this.Un=e.getTargetCache(),this.Kn=e.getBundleCache(),this.Ls(r)}Ls(e){this.indexManager=this.persistence.getIndexManager(e),this.gs=this.persistence.getMutationQueue(e,this.indexManager),this.Us=new gv(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function Il(n,e,t,r){return new mv(n,e,t,r)}async function El(n,e){const t=S(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.gs.getAllMutationBatches(r).next(i=>(s=i,t.Ls(e),t.gs.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=O();for(const u of s){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return t.Us.Es(r,c).next(u=>({qs:u,removedBatchIds:o,addedBatchIds:a}))})})}function yv(n,e){const t=S(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Bs.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const h=c.batch,l=h.keys();let f=d.resolve();return l.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(y=>{const A=c.docVersions.get(g);C(A!==null),y.version.compareTo(A)<0&&(h.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),f.next(()=>o.gs.removeMutationBatch(a,h))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.gs.performConsistencyCheck(r)).next(()=>t.Us.Es(r,s))})}function Tl(n){const e=S(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Un.getLastRemoteSnapshotVersion(t))}function vv(n,e){const t=S(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Bs.newChangeBuffer({trackRemovals:!0});s=t.Ms;const a=[];e.targetChanges.forEach((u,h)=>{const l=s.get(h);if(!l)return;a.push(t.Un.removeMatchingKeys(i,u.removedDocuments,h).next(()=>t.Un.addMatchingKeys(i,u.addedDocuments,h)));let f=l.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Q.EMPTY_BYTE_STRING,T.min()).withLastLimboFreeSnapshotVersion(T.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(h,f),function(g,y,A){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(l,f,u)&&a.push(t.Un.updateTargetData(i,f))});let c=Ne();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(wv(i,o,e.documentUpdates).next(u=>{c=u})),!r.isEqual(T.min())){const u=t.Un.getLastRemoteSnapshotVersion(i).next(h=>t.Un.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return d.waitFor(a).next(()=>o.apply(i)).next(()=>t.Us.Ts(i,c)).next(()=>c)}).then(i=>(t.Ms=s,i))}function wv(n,e,t){let r=O();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let i=Ne();return t.forEach((o,a)=>{const c=s.get(o);a.isNoDocument()&&a.version.isEqual(T.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):m("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function Iv(n,e){const t=S(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.gs.getNextMutationBatchAfterBatchId(r,e)))}function Ev(n,e){const t=S(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Un.getTargetData(r,e).next(i=>i?(s=i,d.resolve(s)):t.Un.allocateTargetId(r).next(o=>(s=new nt(e,o,0,r.currentSequenceNumber),t.Un.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.$s.set(e,r.targetId)),r})}async function Qi(n,e,t){const r=S(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ot(o))throw o;m("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.$s.delete(s.target)}function Cc(n,e,t){const r=S(n);let s=T.min(),i=O();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const h=S(a),l=h.$s.get(u);return l!==void 0?d.resolve(h.Ms.get(l)):h.Un.getTargetData(c,u)}(r,o,je(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Un.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Os.As(o,e,t?s:T.min(),t?i:O())).next(a=>({documents:a,Ks:i})))}async function Tv(n){const e=S(n);return e.persistence.runTransaction("Synchronize last document change read time","readonly",t=>function(r){const s=ht(r);let i=T.min();return s.Qt({index:V.readTimeIndex,reverse:!0},(o,a,c)=>{a.readTime&&(i=dl(a.readTime)),c.done()}).next(()=>i)}(t)).then(t=>{e.Fs=t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e){this.O=e,this.Ws=new Map,this.zs=new Map}getBundleMetadata(e,t){return d.resolve(this.Ws.get(t))}saveBundleMetadata(e,t){var r;return this.Ws.set(t.id,{id:(r=t).id,version:r.version,createTime:ve(r.createTime)}),d.resolve()}getNamedQuery(e,t){return d.resolve(this.zs.get(t))}saveNamedQuery(e,t){return this.zs.set(t.name,function(r){return{name:r.name,query:pl(r.bundledQuery),readTime:ve(r.readTime)}}(t)),d.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(){this.overlays=new X(w.comparator),this.Hs=new Map}getOverlay(e,t){return d.resolve(this.overlays.get(t))}saveOverlays(e,t,r){return r.forEach(s=>{this.Yt(e,t,s)}),d.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Hs.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Hs.delete(r)),d.resolve()}getOverlaysForCollection(e,t,r){const s=new Map,i=t.length+1,o=new w(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return d.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new X((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=new Map,i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=new Map,c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(h,u)),!(a.size>=s)););return d.resolve(a)}Yt(e,t,r){if(r===null)return;const s=this.overlays.get(r.key);s!==null&&this.Hs.get(s.largestBatchId).delete(r.key),this.overlays=this.overlays.insert(r.key,new Wo(t,r));let i=this.Hs.get(t);i===void 0&&(i=new Set,this.Hs.set(t,i)),i.add(r.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(){this.Js=new M(H.Ys),this.Xs=new M(H.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(e,t){const r=new H(e,t);this.Js=this.Js.add(r),this.Xs=this.Xs.add(r)}ti(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.ei(new H(e,t))}ni(e,t){e.forEach(r=>this.removeReference(r,t))}si(e){const t=new w(new R([])),r=new H(t,e),s=new H(t,e+1),i=[];return this.Xs.forEachInRange([r,s],o=>{this.ei(o),i.push(o.key)}),i}ii(){this.Js.forEach(e=>this.ei(e))}ei(e){this.Js=this.Js.delete(e),this.Xs=this.Xs.delete(e)}ri(e){const t=new w(new R([])),r=new H(t,e),s=new H(t,e+1);let i=O();return this.Xs.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new H(e,0),r=this.Js.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class H{constructor(e,t){this.key=e,this.oi=t}static Ys(e,t){return w.comparator(e.key,t.key)||x(e.oi,t.oi)}static Zs(e,t){return x(e.oi,t.oi)||w.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.gs=[],this.ci=1,this.ui=new M(H.Ys)}checkEmpty(e){return d.resolve(this.gs.length===0)}addMutationBatch(e,t,r,s){const i=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const o=new Go(i,t,r,s);this.gs.push(o);for(const a of s)this.ui=this.ui.add(new H(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(e,t){return d.resolve(this.ai(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.hi(r),i=s<0?0:s;return d.resolve(this.gs.length>i?this.gs[i]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.gs.length===0?-1:this.ci-1)}getAllMutationBatches(e){return d.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new H(t,0),s=new H(t,Number.POSITIVE_INFINITY),i=[];return this.ui.forEachInRange([r,s],o=>{const a=this.ai(o.oi);i.push(a)}),d.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new M(x);return t.forEach(s=>{const i=new H(s,0),o=new H(s,Number.POSITIVE_INFINITY);this.ui.forEachInRange([i,o],a=>{r=r.add(a.oi)})}),d.resolve(this.li(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;w.isDocumentKey(i)||(i=i.child(""));const o=new H(new w(i),0);let a=new M(x);return this.ui.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.oi)),!0)},o),d.resolve(this.li(a))}li(e){const t=[];return e.forEach(r=>{const s=this.ai(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){C(this.fi(t.batchId,"removed")===0),this.gs.shift();let r=this.ui;return d.forEach(t.mutations,s=>{const i=new H(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ui=r})}Qe(e){}containsKey(e,t){const r=new H(t,0),s=this.ui.firstAfterOrEqual(r);return d.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.gs.length,d.resolve()}fi(e,t){return this.hi(e)}hi(e){return this.gs.length===0?0:e-this.gs[0].batchId}ai(e){const t=this.hi(e);return t<0||t>=this.gs.length?null:this.gs[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e){this.di=e,this.docs=new X(w.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.di(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return d.resolve(r?r.document.mutableCopy():$.newInvalidDocument(t))}getEntries(e,t){let r=Ne();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():$.newInvalidDocument(s))}),d.resolve(r)}getAll(e,t,r){let s=Ne();const i=new w(t.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||c.readTime.compareTo(r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return d.resolve(s)}_i(e,t){return d.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Av(this)}getSize(e){return d.resolve(this.size)}}class Av extends vl{constructor(e){super(),this.Tn=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Tn.addEntry(e,s)):this.Tn.removeEntry(r)}),d.waitFor(t)}getFromCache(e,t){return this.Tn.getEntry(e,t)}getAllFromCache(e,t){return this.Tn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e){this.persistence=e,this.wi=new pn(t=>fr(t),Us),this.lastRemoteSnapshotVersion=T.min(),this.highestTargetId=0,this.mi=0,this.gi=new ea,this.targetCount=0,this.yi=xt.He()}forEachTarget(e,t){return this.wi.forEach((r,s)=>t(s)),d.resolve()}getLastRemoteSnapshotVersion(e){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return d.resolve(this.mi)}allocateTargetId(e){return this.highestTargetId=this.yi.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.mi&&(this.mi=t),d.resolve()}Ze(e){this.wi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.yi=new xt(t),this.highestTargetId=t),e.sequenceNumber>this.mi&&(this.mi=e.sequenceNumber)}addTargetData(e,t){return this.Ze(t),this.targetCount+=1,d.resolve()}updateTargetData(e,t){return this.Ze(t),d.resolve()}removeTargetData(e,t){return this.wi.delete(t.target),this.gi.si(t.targetId),this.targetCount-=1,d.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.wi.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.wi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),d.waitFor(i).next(()=>s)}getTargetCount(e){return d.resolve(this.targetCount)}getTargetData(e,t){const r=this.wi.get(t)||null;return d.resolve(r)}addMatchingKeys(e,t,r){return this.gi.ti(t,r),d.resolve()}removeMatchingKeys(e,t,r){this.gi.ni(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),d.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.gi.si(t),d.resolve()}getMatchingKeysForTargetId(e,t){const r=this.gi.ri(t);return d.resolve(r)}containsKey(e,t){return d.resolve(this.gi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e,t){this.pi={},this.overlays={},this.Nn=new Se(0),this.xn=!1,this.xn=!0,this.referenceDelegate=e(this),this.Un=new kv(this),this.indexManager=new sv,this.qn=function(r){return new Cv(r)}(r=>this.referenceDelegate.Ii(r)),this.O=new hl(t),this.Kn=new _v(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new bv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.pi[e.toKey()];return r||(r=new Sv(t,this.referenceDelegate),this.pi[e.toKey()]=r),r}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(e,t,r){m("MemoryPersistence","Starting transaction:",e);const s=new Dv(this.Nn.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.Ti(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return d.or(Object.values(this.pi).map(r=>()=>r.containsKey(e,t)))}}class Dv extends ul{constructor(e){super(),this.currentSequenceNumber=e}}class ta{constructor(e){this.persistence=e,this.Ri=new ea,this.Pi=null}static bi(e){return new ta(e)}get vi(){if(this.Pi)return this.Pi;throw E()}addReference(e,t,r){return this.Ri.addReference(r,t),this.vi.delete(r.toString()),d.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.vi.add(r.toString()),d.resolve()}markPotentiallyOrphaned(e,t){return this.vi.add(t.toString()),d.resolve()}removeTarget(e,t){this.Ri.si(t.targetId).forEach(s=>this.vi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.vi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Pi=new Set}Ti(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.vi,r=>{const s=w.fromPath(r);return this.Vi(e,s).next(i=>{i||t.removeEntry(s,T.min())})}).next(()=>(this.Pi=null,t.apply(e)))}updateLimboDocument(e,t){return this.Vi(e,t).next(r=>{r?this.vi.delete(t.toString()):this.vi.add(t.toString())})}Ii(e){return 0}Vi(e,t){return d.or([()=>d.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Ac{constructor(){this.activeTargetIds=Wh()}Ci(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ni(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Di(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _l{constructor(){this._r=new Ac,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this._r.Ci(e),this.wr[e]||"not-current"}updateQueryState(e,t,r){this.wr[e]=t}removeLocalQueryTarget(e){this._r.Ni(e)}isLocalQueryTarget(e){return this._r.activeTargetIds.has(e)}clearQueryState(e){delete this.wr[e]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(e){return this._r.activeTargetIds.has(e)}start(){return this._r=new Ac,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{mr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(e){this.Er.push(e)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){m("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Er)e(0)}Ir(){m("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Er)e(1)}static Vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e){this.Ar=e.Ar,this.Rr=e.Rr}Pr(e){this.br=e}vr(e){this.Vr=e}onMessage(e){this.Sr=e}close(){this.Rr()}send(e){this.Ar(e)}Dr(){this.br()}Cr(e){this.Vr(e)}Nr(e){this.Sr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.kr=t+"://"+e.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(e,t,r,s,i){const o=this.$r(e,t);m("RestConnection","Sending: ",o,r);const a={};return this.Fr(a,s,i),this.Br(e,o,a,r).then(c=>(m("RestConnection","Received: ",c),c),c=>{throw Ga("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}Lr(e,t,r,s,i){return this.Mr(e,t,r,s,i)}Fr(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ln,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}$r(e,t){const r=Rv[e];return`${this.kr}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Br(e,t,r,s){return new Promise((i,o)=>{const a=new Lm;a.listenOnce(Rm.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case pi.NO_ERROR:const u=a.getResponseJson();m("Connection","XHR received:",JSON.stringify(u)),i(u);break;case pi.TIMEOUT:m("Connection",'RPC "'+e+'" timed out'),o(new I(p.DEADLINE_EXCEEDED,"Request time out"));break;case pi.HTTP_ERROR:const h=a.getStatus();if(m("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const f=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(y)>=0?y:p.UNKNOWN}(l.status);o(new I(f,l.message))}else o(new I(p.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new I(p.UNAVAILABLE,"Connection failed."));break;default:E()}}finally{m("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(t,"POST",c,r,15)})}Ur(e,t,r){const s=[this.kr,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Dm(),o=Nm(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Pm({})),this.Fr(a.initMessageHeaders,t,r),Xc()||Jc()||Rd()||Zc()||Od()||Yc()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");m("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let h=!1,l=!1;const f=new Ov({Ar:y=>{l?m("Connection","Not sending because WebChannel is closed:",y):(h||(m("Connection","Opening WebChannel transport."),u.open(),h=!0),m("Connection","WebChannel sending:",y),u.send(y))},Rr:()=>u.close()}),g=(y,A,N)=>{y.listen(A,U=>{try{N(U)}catch(ue){setTimeout(()=>{throw ue},0)}})};return g(u,Ir.EventType.OPEN,()=>{l||m("Connection","WebChannel transport opened.")}),g(u,Ir.EventType.CLOSE,()=>{l||(l=!0,m("Connection","WebChannel transport closed"),f.Cr())}),g(u,Ir.EventType.ERROR,y=>{l||(l=!0,Ga("Connection","WebChannel transport errored:",y),f.Cr(new I(p.UNAVAILABLE,"The operation could not be completed")))}),g(u,Ir.EventType.MESSAGE,y=>{var A;if(!l){const N=y.data[0];C(!!N);const U=N,ue=U.error||((A=U[0])===null||A===void 0?void 0:A.error);if(ue){m("Connection","WebChannel received error:",ue);const Pe=ue.status;let Ke=function(yn){const vn=q[yn];if(vn!==void 0)return zh(vn)}(Pe),mn=ue.message;Ke===void 0&&(Ke=p.INTERNAL,mn="Unknown error status: "+Pe+" with message "+ue.message),l=!0,f.Cr(new I(Ke,mn)),u.close()}else m("Connection","WebChannel received:",N),f.Nr(N)}}),g(o,Om.STAT_EVENT,y=>{y.stat===Ka.PROXY?m("Connection","Detected buffering proxy"):y.stat===Ka.NOPROXY&&m("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Dr()},0),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(){return typeof window!="undefined"?window:null}function Mr(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(n){return new Oy(n,!0)}class Sl{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Sn=e,this.timerId=t,this.qr=r,this.Kr=s,this.Gr=i,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(e){this.cancel();const t=Math.floor(this.jr+this.Jr()),r=Math.max(0,Date.now()-this.Wr),s=Math.max(0,t-r);s>0&&m("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.jr} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,s,()=>(this.Wr=Date.now(),e())),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){this.Qr!==null&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){this.Qr!==null&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,t,r,s,i,o,a,c){this.Sn=e,this.Xr=r,this.Zr=s,this.eo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new Sl(e,t)}oo(){return this.state===1||this.state===5||this.co()}co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&this.so===null&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,()=>this.lo()))}fo(e){this._o(),this.stream.send(e)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(e,t){this._o(),this.wo(),this.ro.cancel(),this.no++,e!==4?this.ro.reset():t&&t.code===p.RESOURCE_EXHAUSTED?(de(t.toString()),de("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):t&&t.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.mo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.vr(t)}mo(){}auth(){this.state=1;const e=this.yo(this.no),t=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.no===t&&this.po(r,s)},r=>{e(()=>{const s=new I(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Io(s)})})}po(e,t){const r=this.yo(this.no);this.stream=this.Eo(e,t),this.stream.Pr(()=>{r(()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,()=>(this.co()&&(this.state=3),Promise.resolve())),this.listener.Pr()))}),this.stream.vr(s=>{r(()=>this.Io(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}uo(){this.state=5,this.ro.Hr(async()=>{this.state=0,this.start()})}Io(e){return m("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}yo(e){return t=>{this.Sn.enqueueAndForget(()=>this.no===e?t():(m("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Mv extends Cl{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.O=i}Eo(e,t){return this.eo.Ur("Listen",e,t)}onMessage(e){this.ro.reset();const t=Uy(this.O,e),r=function(s){if(!("targetChange"in s))return T.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?T.min():i.readTime?ve(i.readTime):T.min()}(e);return this.listener.To(t,r)}Ao(e){const t={};t.database=zi(this.O),t.addTarget=function(s,i){let o;const a=i.target;return o=ns(a)?{documents:tl(s,a)}:{query:nl(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Py(s,i.resumeToken):i.snapshotVersion.compareTo(T.min())>0&&(o.readTime=Ko(s,i.snapshotVersion.toTimestamp())),o}(this.O,e);const r=Vy(this.O,e);r&&(t.labels=r),this.fo(t)}Ro(e){const t={};t.database=zi(this.O),t.removeTarget=e,this.fo(t)}}class Uv extends Cl{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.O=i,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(e,t){return this.eo.Ur("Write",e,t)}onMessage(e){if(C(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Po){this.ro.reset();const t=Fy(e.writeResults,e.commitTime),r=ve(e.commitTime);return this.listener.Vo(r,t)}return C(!e.writeResults||e.writeResults.length===0),this.Po=!0,this.listener.So()}Do(){const e={};e.database=zi(this.O),this.fo(e)}vo(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>os(this.O,r))};this.fo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.eo=r,this.O=s,this.Co=!1}No(){if(this.Co)throw new I(p.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(e,t,r){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.eo.Mr(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new I(p.UNKNOWN,s.toString())})}Lr(e,t,r){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.eo.Lr(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new I(p.UNKNOWN,s.toString())})}terminate(){this.Co=!0}}class Vv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){this.xo===0&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve())))}Bo(e){this.state==="Online"?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.$o("Offline")))}set(e){this.Lo(),this.xo=0,e==="Online"&&(this.Oo=!1),this.$o(e)}$o(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Fo(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(de(t),this.Oo=!1):m("OnlineStateTracker",t)}Lo(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=i,this.jo.mr(o=>{r.enqueueAndForget(async()=>{Pt(this)&&(m("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=S(a);c.Ko.add(4),await gr(c),c.Qo.set("Unknown"),c.Ko.delete(4),await zs(c)}(this))})}),this.Qo=new Vv(r,s)}}async function zs(n){if(Pt(n))for(const e of n.Go)await e(!0)}async function gr(n){for(const e of n.Go)await e(!1)}function Al(n,e){const t=S(n);t.qo.has(e.targetId)||(t.qo.set(e.targetId,e),sa(t)?ra(t):gn(t).co()&&na(t,e))}function kl(n,e){const t=S(n),r=gn(t);t.qo.delete(e),r.co()&&xl(t,e),t.qo.size===0&&(r.co()?r.ho():Pt(t)&&t.Qo.set("Unknown"))}function na(n,e){n.Wo.Z(e.targetId),gn(n).Ao(e)}function xl(n,e){n.Wo.Z(e),gn(n).Ro(e)}function ra(n){n.Wo=new Dy({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>n.qo.get(e)||null}),gn(n).start(),n.Qo.Mo()}function sa(n){return Pt(n)&&!gn(n).oo()&&n.qo.size>0}function Pt(n){return S(n).Ko.size===0}function Dl(n){n.Wo=void 0}async function qv(n){n.qo.forEach((e,t)=>{na(n,e)})}async function $v(n,e){Dl(n),sa(n)?(n.Qo.Bo(e),ra(n)):n.Qo.set("Unknown")}async function jv(n,e,t){if(n.Qo.set("Online"),e instanceof Xh&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.qo.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.qo.delete(o),r.Wo.removeTarget(o))}(n,e)}catch(r){m("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await us(n,r)}else if(e instanceof Lr?n.Wo.ct(e):e instanceof Qh?n.Wo._t(e):n.Wo.ht(e),!t.isEqual(T.min()))try{const r=await Tl(n.localStore);t.compareTo(r)>=0&&await function(s,i){const o=s.Wo.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.qo.get(c);u&&s.qo.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.qo.get(a);if(!c)return;s.qo.set(a,c.withResumeToken(Q.EMPTY_BYTE_STRING,c.snapshotVersion)),xl(s,a);const u=new nt(c.target,a,1,c.sequenceNumber);na(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){m("RemoteStore","Failed to raise snapshot:",r),await us(n,r)}}async function us(n,e,t){if(!Ot(e))throw e;n.Ko.add(1),await gr(n),n.Qo.set("Offline"),t||(t=()=>Tl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{m("RemoteStore","Retrying IndexedDB access"),await t(),n.Ko.delete(1),await zs(n)})}function Nl(n,e){return e().catch(t=>us(n,t,e))}async function Ws(n){const e=S(n),t=it(e);let r=e.Uo.length>0?e.Uo[e.Uo.length-1].batchId:-1;for(;Kv(e);)try{const s=await Iv(e.localStore,r);if(s===null){e.Uo.length===0&&t.ho();break}r=s.batchId,Hv(e,s)}catch(s){await us(e,s)}Rl(e)&&Ol(e)}function Kv(n){return Pt(n)&&n.Uo.length<10}function Hv(n,e){n.Uo.push(e);const t=it(n);t.co()&&t.bo&&t.vo(e.mutations)}function Rl(n){return Pt(n)&&!it(n).oo()&&n.Uo.length>0}function Ol(n){it(n).start()}async function Gv(n){it(n).Do()}async function zv(n){const e=it(n);for(const t of n.Uo)e.vo(t.mutations)}async function Wv(n,e,t){const r=n.Uo.shift(),s=zo.from(r,e,t);await Nl(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ws(n)}async function Qv(n,e){e&&it(n).bo&&await async function(t,r){if(s=r.code,by(s)&&s!==p.ABORTED){const i=t.Uo.shift();it(t).ao(),await Nl(t,()=>t.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Ws(t)}var s}(n,e),Rl(n)&&Ol(n)}async function xc(n,e){const t=S(n);t.asyncQueue.verifyOperationInProgress(),m("RemoteStore","RemoteStore received new credentials");const r=Pt(t);t.Ko.add(3),await gr(t),r&&t.Qo.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ko.delete(3),await zs(t)}async function Xv(n,e){const t=S(n);e?(t.Ko.delete(2),await zs(t)):e||(t.Ko.add(2),await gr(t),t.Qo.set("Unknown"))}function gn(n){return n.zo||(n.zo=function(e,t,r){const s=S(e);return s.No(),new Mv(t,s.eo,s.authCredentials,s.appCheckCredentials,s.O,r)}(n.datastore,n.asyncQueue,{Pr:qv.bind(null,n),vr:$v.bind(null,n),To:jv.bind(null,n)}),n.Go.push(async e=>{e?(n.zo.ao(),sa(n)?ra(n):n.Qo.set("Unknown")):(await n.zo.stop(),Dl(n))})),n.zo}function it(n){return n.Ho||(n.Ho=function(e,t,r){const s=S(e);return s.No(),new Uv(t,s.eo,s.authCredentials,s.appCheckCredentials,s.O,r)}(n.datastore,n.asyncQueue,{Pr:Gv.bind(null,n),vr:Qv.bind(null,n),So:zv.bind(null,n),Vo:Wv.bind(null,n)}),n.Go.push(async e=>{e?(n.Ho.ao(),await Ws(n)):(await n.Ho.stop(),n.Uo.length>0&&(m("RemoteStore",`Stopping write stream with ${n.Uo.length} pending writes`),n.Uo=[]))})),n.Ho}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new et,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new ia(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new I(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pl(n,e){if(de("AsyncQueue",`${e}: ${n}`),Ot(n))return new I(p.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.comparator=e?(t,r)=>e(t,r)||w.comparator(t.key,r.key):(t,r)=>w.comparator(t.key,r.key),this.keyedMap=Hi(),this.sortedSet=new X(this.comparator)}static emptySet(e){return new Gt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Gt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Gt;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this.Jo=new X(w.comparator)}track(e){const t=e.doc.key,r=this.Jo.get(t);r?e.type!==0&&r.type===3?this.Jo=this.Jo.insert(t,e):e.type===3&&r.type!==1?this.Jo=this.Jo.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Jo=this.Jo.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Jo=this.Jo.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Jo=this.Jo.remove(t):e.type===1&&r.type===2?this.Jo=this.Jo.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Jo=this.Jo.insert(t,{type:2,doc:e.doc}):E():this.Jo=this.Jo.insert(t,e)}Yo(){const e=[];return this.Jo.inorderTraversal((t,r)=>{e.push(r)}),e}}class on{constructor(e,t,r,s,i,o,a,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,t,r,s){const i=[];return t.forEach(o=>{i.push({type:0,doc:o})}),new on(e,t,Gt.emptySet(t),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(){this.Xo=void 0,this.listeners=[]}}class Jv{constructor(){this.queries=new pn(e=>Vh(e),Bs),this.onlineState="Unknown",this.Zo=new Set}}async function Zv(n,e){const t=S(n),r=e.query;let s=!1,i=t.queries.get(r);if(i||(s=!0,i=new Yv),s)try{i.Xo=await t.onListen(r)}catch(o){const a=Pl(o,`Initialization of query '${ji(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.listeners.push(e),e.tc(t.onlineState),i.Xo&&e.ec(i.Xo)&&oa(t)}async function ew(n,e){const t=S(n),r=e.query;let s=!1;const i=t.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return t.queries.delete(r),t.onUnlisten(r)}function tw(n,e){const t=S(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.ec(s)&&(r=!0);o.Xo=s}}r&&oa(t)}function nw(n,e,t){const r=S(n),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(t);r.queries.delete(e)}function oa(n){n.Zo.forEach(e=>{e.next()})}class rw{constructor(e,t,r){this.query=e,this.nc=t,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=r||{}}ec(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new on(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.sc?this.rc(e)&&(this.nc.next(e),t=!0):this.oc(e,this.onlineState)&&(this.cc(e),t=!0),this.ic=e,t}onError(e){this.nc.error(e)}tc(e){this.onlineState=e;let t=!1;return this.ic&&!this.sc&&this.oc(this.ic,e)&&(this.cc(this.ic),t=!0),t}oc(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.uc||!r)&&(!e.docs.isEmpty()||t==="Offline")}rc(e){if(e.docChanges.length>0)return!0;const t=this.ic&&this.ic.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}cc(e){e=on.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.sc=!0,this.nc.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this.key=e}}class Ml{constructor(e){this.key=e}}class sw{constructor(e,t){this.query=e,this.dc=t,this._c=null,this.current=!1,this.wc=O(),this.mutatedKeys=O(),this.mc=Bh(e),this.gc=new Gt(this.mc)}get yc(){return this.dc}Ic(e,t){const r=t?t.Ec:new Dc,s=t?t.gc:this.gc;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=Or(this.query)&&s.size===this.query.limit?s.last():null,u=ss(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,l)=>{const f=s.get(h),g=jo(this.query,l)?l:null,y=!!f&&this.mutatedKeys.has(f.key),A=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let N=!1;f&&g?f.data.isEqual(g.data)?y!==A&&(r.track({type:3,doc:g}),N=!0):this.Tc(f,g)||(r.track({type:2,doc:g}),N=!0,(c&&this.mc(g,c)>0||u&&this.mc(g,u)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),N=!0):f&&!g&&(r.track({type:1,doc:f}),N=!0,(c||u)&&(a=!0)),N&&(g?(o=o.add(g),i=A?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),Or(this.query)||ss(this.query))for(;o.size>this.query.limit;){const h=Or(this.query)?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{gc:o,Ec:r,ks:a,mutatedKeys:i}}Tc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const s=this.gc;this.gc=e.gc,this.mutatedKeys=e.mutatedKeys;const i=e.Ec.Yo();i.sort((u,h)=>function(l,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return E()}};return g(l)-g(f)}(u.type,h.type)||this.mc(u.doc,h.doc)),this.Ac(r);const o=t?this.Rc():[],a=this.wc.size===0&&this.current?1:0,c=a!==this._c;return this._c=a,i.length!==0||c?{snapshot:new on(this.query,e.gc,s,i,e.mutatedKeys,a===0,c,!1),Pc:o}:{Pc:o}}tc(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new Dc,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(e){return!this.dc.has(e)&&!!this.gc.has(e)&&!this.gc.get(e).hasLocalMutations}Ac(e){e&&(e.addedDocuments.forEach(t=>this.dc=this.dc.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.dc=this.dc.delete(t)),this.current=e.current)}Rc(){if(!this.current)return[];const e=this.wc;this.wc=O(),this.gc.forEach(r=>{this.bc(r.key)&&(this.wc=this.wc.add(r.key))});const t=[];return e.forEach(r=>{this.wc.has(r)||t.push(new Ml(r))}),this.wc.forEach(r=>{e.has(r)||t.push(new Ll(r))}),t}vc(e){this.dc=e.Ks,this.wc=O();const t=this.Ic(e.documents);return this.applyChanges(t,!0)}Vc(){return on.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,this._c===0)}}class iw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class ow{constructor(e){this.key=e,this.Sc=!1}}class aw{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Dc={},this.Cc=new pn(a=>Vh(a),Bs),this.Nc=new Map,this.xc=new Set,this.kc=new X(w.comparator),this.Oc=new Map,this.Mc=new ea,this.$c={},this.Fc=new Map,this.Bc=xt.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return this.Lc===!0}}async function cw(n,e){const t=yw(n);let r,s;const i=t.Cc.get(e);if(i)r=i.targetId,t.sharedClientState.addLocalQueryTarget(r),s=i.view.Vc();else{const o=await Ev(t.localStore,je(e));t.isPrimaryClient&&Al(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await uw(t,e,r,a==="current")}return s}async function uw(n,e,t,r){n.Uc=(h,l,f)=>async function(g,y,A,N){let U=y.view.Ic(A);U.ks&&(U=await Cc(g.localStore,y.query,!1).then(({documents:Ke})=>y.view.Ic(Ke,U)));const ue=N&&N.targetChanges.get(y.targetId),Pe=y.view.applyChanges(U,g.isPrimaryClient,ue);return Rc(g,y.targetId,Pe.Pc),Pe.snapshot}(n,h,l,f);const s=await Cc(n.localStore,e,!0),i=new sw(e,s.Ks),o=i.Ic(s.documents),a=pr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline"),c=i.applyChanges(o,n.isPrimaryClient,a);Rc(n,t,c.Pc);const u=new iw(e,t,i);return n.Cc.set(e,u),n.Nc.has(t)?n.Nc.get(t).push(e):n.Nc.set(t,[e]),c.snapshot}async function hw(n,e){const t=S(n),r=t.Cc.get(e),s=t.Nc.get(r.targetId);if(s.length>1)return t.Nc.set(r.targetId,s.filter(i=>!Bs(i,e))),void t.Cc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await Qi(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),kl(t.remoteStore,r.targetId),Xi(t,r.targetId)}).catch(fn)):(Xi(t,r.targetId),await Qi(t.localStore,r.targetId,!0))}async function Ul(n,e){const t=S(n);try{const r=await vv(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Oc.get(i);o&&(C(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Sc=!0:s.modifiedDocuments.size>0?C(o.Sc):s.removedDocuments.size>0&&(C(o.Sc),o.Sc=!1))}),await Qs(t,r,e)}catch(r){await fn(r)}}function Nc(n,e,t){const r=S(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Cc.forEach((i,o)=>{const a=o.view.tc(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=S(i);a.onlineState=o;let c=!1;a.queries.forEach((u,h)=>{for(const l of h.listeners)l.tc(o)&&(c=!0)}),c&&oa(a)}(r.eventManager,e),s.length&&r.Dc.To(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function lw(n,e,t){const r=S(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Oc.get(e),i=s&&s.key;if(i){let o=new X(w.comparator);o=o.insert(i,$.newNoDocument(i,T.min()));const a=O().add(i),c=new Hs(T.min(),new Map,new M(x),o,a);await Ul(r,c),r.kc=r.kc.remove(i),r.Oc.delete(e),aa(r)}else await Qi(r.localStore,e,!1).then(()=>Xi(r,e,t)).catch(fn)}async function dw(n,e){const t=S(n),r=e.batch.batchId;try{const s=await yv(t.localStore,e);Vl(t,r,null),Fl(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Qs(t,s)}catch(s){await fn(s)}}async function fw(n,e,t){const r=S(n);try{const s=await function(i,o){const a=S(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.gs.lookupMutationBatch(c,o).next(h=>(C(h!==null),u=h.keys(),a.gs.removeMutationBatch(c,h))).next(()=>a.gs.performConsistencyCheck(c)).next(()=>a.Us.Es(c,u))})}(r.localStore,e);Vl(r,e,t),Fl(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Qs(r,s)}catch(s){await fn(s)}}function Fl(n,e){(n.Fc.get(e)||[]).forEach(t=>{t.resolve()}),n.Fc.delete(e)}function Vl(n,e,t){const r=S(n);let s=r.$c[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.$c[r.currentUser.toKey()]=s}}function Xi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Nc.get(e))n.Cc.delete(r),t&&n.Dc.qc(r,t);n.Nc.delete(e),n.isPrimaryClient&&n.Mc.si(e).forEach(r=>{n.Mc.containsKey(r)||Bl(n,r)})}function Bl(n,e){n.xc.delete(e.path.canonicalString());const t=n.kc.get(e);t!==null&&(kl(n.remoteStore,t),n.kc=n.kc.remove(e),n.Oc.delete(t),aa(n))}function Rc(n,e,t){for(const r of t)r instanceof Ll?(n.Mc.addReference(r.key,e),pw(n,r)):r instanceof Ml?(m("SyncEngine","Document no longer in limbo: "+r.key),n.Mc.removeReference(r.key,e),n.Mc.containsKey(r.key)||Bl(n,r.key)):E()}function pw(n,e){const t=e.key,r=t.path.canonicalString();n.kc.get(t)||n.xc.has(r)||(m("SyncEngine","New document in limbo: "+t),n.xc.add(r),aa(n))}function aa(n){for(;n.xc.size>0&&n.kc.size<n.maxConcurrentLimboResolutions;){const e=n.xc.values().next().value;n.xc.delete(e);const t=new w(R.fromString(e)),r=n.Bc.next();n.Oc.set(r,new ow(t)),n.kc=n.kc.insert(t,r),Al(n.remoteStore,new nt(je(Vs(t.path)),r,2,Se.A))}}async function Qs(n,e,t){const r=S(n),s=[],i=[],o=[];r.Cc.isEmpty()||(r.Cc.forEach((a,c)=>{o.push(r.Uc(c,e,t).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),s.push(u);const h=Zo.Ss(c.targetId,u);i.push(h)}}))}),await Promise.all(o),r.Dc.To(s),await async function(a,c){const u=S(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>d.forEach(c,l=>d.forEach(l.vs,f=>u.persistence.referenceDelegate.addReference(h,l.targetId,f)).next(()=>d.forEach(l.Vs,f=>u.persistence.referenceDelegate.removeReference(h,l.targetId,f)))))}catch(h){if(!Ot(h))throw h;m("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const l=h.targetId;if(!h.fromCache){const f=u.Ms.get(l),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.Ms=u.Ms.insert(l,y)}}}(r.localStore,i))}async function gw(n,e){const t=S(n);if(!t.currentUser.isEqual(e)){m("SyncEngine","User change. New user:",e.toKey());const r=await El(t.localStore,e);t.currentUser=e,function(s,i){s.Fc.forEach(o=>{o.forEach(a=>{a.reject(new I(p.CANCELLED,i))})}),s.Fc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qs(t,r.qs)}}function mw(n,e){const t=S(n),r=t.Oc.get(e);if(r&&r.Sc)return O().add(r.key);{let s=O();const i=t.Nc.get(e);if(!i)return s;for(const o of i){const a=t.Cc.get(o);s=s.unionWith(a.view.yc)}return s}}function yw(n){const e=S(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ul.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lw.bind(null,e),e.Dc.To=tw.bind(null,e.eventManager),e.Dc.qc=nw.bind(null,e.eventManager),e}function vw(n){const e=S(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fw.bind(null,e),e}class ql{constructor(){this.synchronizeTabs=!1}async initialize(e){this.O=bl(e.databaseInfo.databaseId),this.sharedClientState=this.Gc(e),this.persistence=this.jc(e),await this.persistence.start(),this.gcScheduler=this.Qc(e),this.localStore=this.Wc(e)}Qc(e){return null}Wc(e){return Il(this.persistence,new wl,e.initialUser,this.O)}jc(e){return new xv(ta.bi,this.O)}Gc(e){return new _l}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ww extends ql{constructor(e,t,r){super(),this.zc=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await Tv(this.localStore),await this.zc.initialize(this,e),await vw(this.zc.syncEngine),await Ws(this.zc.remoteStore),await this.persistence.Hn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Wc(e){return Il(this.persistence,new wl,e.initialUser,this.O)}Qc(e){const t=this.persistence.referenceDelegate.garbageCollector;return new cv(t,e.asyncQueue)}jc(e){const t=pv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?le.withCacheSize(this.cacheSizeBytes):le.DEFAULT;return new Jo(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Lv(),Mr(),this.O,this.sharedClientState,!!this.forceOwnership)}Gc(e){return new _l}}class $l{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Nc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gw.bind(null,this.syncEngine),await Xv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Jv}createDatastore(e){const t=bl(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new Pv(s));var s;return function(i,o,a,c){return new Fv(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>Nc(this.syncEngine,a,0),o=kc.Vt()?new kc:new Nv,new Bv(t,r,s,i,o);var t,r,s,i,o}createSyncEngine(e,t){return function(r,s,i,o,a,c,u){const h=new aw(r,s,i,o,a,c);return u&&(h.Lc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=S(e);m("RemoteStore","RemoteStore shutting down."),t.Ko.add(5),await gr(t),t.jo.shutdown(),t.Qo.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Hc(this.observer.next,e)}error(e){this.observer.error?this.Hc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Jc(){this.muted=!0}Hc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,t,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=he.UNAUTHENTICATED,this.clientId=Km.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{m("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(m("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new et;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Pl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jl(n,e){n.asyncQueue.verifyOperationInProgress(),m("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await El(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function Kl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Tw(n);m("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(s=>xc(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>xc(e.remoteStore,i)),n.onlineComponents=e}async function Tw(n){return n.offlineComponents||(m("FirestoreClient","Using default OfflineComponentProvider"),await jl(n,new ql)),n.offlineComponents}async function _w(n){return n.onlineComponents||(m("FirestoreClient","Using default OnlineComponentProvider"),await Kl(n,new $l)),n.onlineComponents}async function Oc(n){const e=await _w(n),t=e.eventManager;return t.onListen=cw.bind(null,e.syncEngine),t.onUnlisten=hw.bind(null,e.syncEngine),t}const Pc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(n,e,t){if(!t)throw new I(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Sw(n,e,t,r){if(e===!0&&r===!0)throw new I(p.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Lc(n){if(w.isDocumentKey(n))throw new I(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Cw(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":E()}function Ur(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new I(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Cw(n);throw new I(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new I(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new I(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Sw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,t,r){this._authCredentials=t,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mc({}),this._settingsFrozen=!1,e instanceof Zt?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new I(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zt(s.options.projectId)}(e))}get app(){if(!this._app)throw new I(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new I(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mc(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new Um;switch(t.type){case"gapi":const r=t.client;return C(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new Bm(r,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new I(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Pc.get(e);t&&(m("ComponentProvider","Removing Datastore"),Pc.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}}class Xs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xs(this.firestore,e,this._query)}}class zt extends Xs{constructor(e,t,r){super(e,t,Vs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new w(e))}withConverter(e){return new zt(this.firestore,e,this._path)}}function oI(n,e,...t){if(n=ot(n),bw("collection","path",e),n instanceof Hl){const r=R.fromString(e,...t);return Lc(r),new zt(n,null,r)}{if(!(n instanceof Lt||n instanceof zt))throw new I(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(R.fromString(e,...t));return Lc(r),new zt(n.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new Sl(this,"async_queue_retry"),this.yu=()=>{const t=Mr();t&&m("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ro.Yr()};const e=Mr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.fu){this.fu=!0,this.mu=e||!1;const t=Mr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.yu)}}enqueue(e){if(this.pu(),this.fu)return new Promise(()=>{});const t=new et;return this.Iu(()=>this.fu&&this.mu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.lu.push(e),this.Eu()))}async Eu(){if(this.lu.length!==0){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(e){if(!Ot(e))throw e;m("AsyncQueue","Operation failed with retryable error: "+e)}this.lu.length>0&&this.ro.Hr(()=>this.Eu())}}Iu(e){const t=this.hu.then(()=>(this.wu=!0,e().catch(r=>{this._u=r,this.wu=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw de("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.wu=!1,r))));return this.hu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.gu.indexOf(e)>-1&&(t=0);const s=ia.createAndSchedule(this,e,t,r,i=>this.Tu(i));return this.du.push(s),s}pu(){this._u&&E()}verifyOperationInProgress(){}async Au(){let e;do e=this.hu,await e;while(e!==this.hu)}Ru(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}Pu(e){return this.Au().then(()=>{this.du.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Au()})}bu(e){this.gu.push(e)}Tu(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function Uc(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of t)if(s in r&&typeof r[s]=="function")return!0;return!1}(n,["next","error","complete"])}class hs extends Hl{constructor(e,t,r){super(e,t,r),this.type="firestore",this._queue=new Aw,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||zl(this),this._firestoreClient.terminate()}}function aI(n=su()){return io(n,"firestore").getImmediate()}function Gl(n){return n._firestoreClient||zl(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function zl(n){var e;const t=n._freezeSettings(),r=function(s,i,o,a){return new Qm(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new Ew(n._authCredentials,n._appCheckCredentials,n._queue,r)}function cI(n,e){xw(n=Ur(n,hs));const t=Gl(n),r=n._freezeSettings(),s=new $l;return kw(t,s,new ww(s,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function kw(n,e,t){const r=new et;return n.asyncQueue.enqueue(async()=>{try{await jl(n,t),await Kl(n,e),r.resolve()}catch(s){if(!function(i){return i.name==="FirebaseError"?i.code===p.FAILED_PRECONDITION||i.code===p.UNIMPLEMENTED:typeof DOMException!="undefined"&&i instanceof DOMException?i.code===22||i.code===20||i.code===11:!0}(s))throw s;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+s),r.reject(s)}}).then(()=>r.promise)}function xw(n){if(n._initialized||n._terminated)throw new I(p.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new I(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ls(Q.fromBase64String(e))}catch(t){throw new I(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ls(Q.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new I(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new I(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return x(this._lat,e._lat)||x(this._long,e._long)}}const Nw=new RegExp("[~\\*/\\[\\]]");function Rw(n,e,t){if(e.search(Nw)>=0)throw Fc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Wl(...e.split("."))._internalPath}catch{throw Fc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Fc(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new I(p.INVALID_ARGUMENT,a+n+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ow(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Xl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ow extends Ql{data(){return super.data()}}function Xl(n,e){return typeof e=="string"?Rw(n,e):e instanceof Wl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yl extends Ql{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Fr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Xl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Fr extends Yl{data(e={}){return super.data(e)}}class Pw{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Sn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Fr(this._firestore,this._userDataWriter,r.key,r,new Sn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new I(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Fr(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Sn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Fr(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Sn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:Lw(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Lw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return E()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(n){if(ss(n)&&n.explicitOrderBy.length===0)throw new I(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{convertValue(e,t="none"){switch(Ct(e)){case 0:return null;case 1:return e.booleanValue;case 2:return F(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(St(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw E()}}convertObject(e,t){const r={};return Ps(e.fields,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new Dw(F(e.latitude),F(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Mh(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp($n(e));default:return null}}convertTimestamp(e){const t=st(e);return new _e(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=R.fromString(e);C(il(r));const s=new Zt(r.get(1),r.get(3)),i=new w(r.popFirst(5));return s.isEqual(t)||de(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}class Jl extends Uw{constructor(e){super(),this.firestore=e}convertBytes(e){return new ls(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,t)}}function uI(n,...e){var t,r,s;n=ot(n);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Uc(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Uc(e[o])){const l=e[o];e[o]=(t=l.next)===null||t===void 0?void 0:t.bind(l),e[o+1]=(r=l.error)===null||r===void 0?void 0:r.bind(l),e[o+2]=(s=l.complete)===null||s===void 0?void 0:s.bind(l)}let c,u,h;if(n instanceof Lt)u=Ur(n.firestore,hs),h=Vs(n._key.path),c={next:l=>{e[o]&&e[o](Fw(u,n,l))},error:e[o+1],complete:e[o+2]};else{const l=Ur(n,Xs);u=Ur(l.firestore,hs),h=l._query;const f=new Jl(u);c={next:g=>{e[o]&&e[o](new Pw(u,f,l,g))},error:e[o+1],complete:e[o+2]},Mw(n._query)}return function(l,f,g,y){const A=new Iw(y),N=new rw(f,A,g);return l.asyncQueue.enqueueAndForget(async()=>Zv(await Oc(l),N)),()=>{A.Jc(),l.asyncQueue.enqueueAndForget(async()=>ew(await Oc(l),N))}}(Gl(u),h,a,c)}function Fw(n,e,t){const r=t.docs.get(e._key),s=new Jl(n);return new Yl(n,s,e._key,r,new Sn(t.hasPendingWrites,t.fromCache),e.converter)}(function(n,e=!0){(function(t){ln=t})(er),Qt(new wt("firestore",(t,{options:r})=>{const s=t.getProvider("app").getImmediate(),i=new hs(s,new Fm(t.getProvider("auth-internal")),new $m(t.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),Ze(Ha,"3.4.5",n),Ze(Ha,"3.4.5","esm2017")})();export{ld as A,Xw as B,Cd as C,Qw as D,We as G,uI as H,eI as S,sI as a,Zw as b,Vw as c,aI as d,Kw as e,zw as f,iI as g,qw as h,tI as i,Bw as j,rd as k,jw as l,cI as m,oI as n,nI as o,Hw as p,Gw as q,Ww as r,rI as s,sd as t,Vc as u,Jw as v,hd as w,ud as x,Yw as y,$w as z};
