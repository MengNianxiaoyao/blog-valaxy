const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/bilibili-bangumi.entry-ASINAf-O.js","assets/app-D4U-4EJa.js","assets/app-iJTLFCmh.css"])))=>i.map(i=>d[i]);
import{n as C}from"./app-D4U-4EJa.js";const ft="bilibili-bangumi-component";let _,U,J=!1,H=!1;const m=(t,e="")=>()=>{},dt=(t,e)=>()=>{},ut="{visibility:hidden}.hydrated{visibility:inherit}",K="slot-fb{display:contents}slot-fb[hidden]{display:none}",R={},pt=t=>t!=null,I=t=>(t=typeof t,t==="object"||t==="function");function Q(t){var e,l,n;return(n=(l=(e=t.head)===null||e===void 0?void 0:e.querySelector('meta[name="csp-nonce"]'))===null||l===void 0?void 0:l.getAttribute("content"))!==null&&n!==void 0?n:void 0}const Z=(t,e,...l)=>{let n=null,s=null,c=!1,i=!1;const $=[],o=f=>{for(let a=0;a<f.length;a++)n=f[a],Array.isArray(n)?o(n):n!=null&&typeof n!="boolean"&&((c=typeof t!="function"&&!I(n))&&(n=String(n)),c&&i?$[$.length-1].$text$+=n:$.push(c?L(null,n):n),i=c)};if(o(l),e){e.key&&(s=e.key);{const f=e.className||e.class;f&&(e.class=typeof f!="object"?f:Object.keys(f).filter(a=>f[a]).join(" "))}}if(typeof t=="function")return t(e===null?{}:e,$,ht);const r=L(t,null);return r.$attrs$=e,$.length>0&&(r.$children$=$),r.$key$=s,r},L=(t,e)=>{const l={$flags$:0,$tag$:t,$text$:e,$elm$:null,$children$:null};return l.$attrs$=null,l.$key$=null,l},gt={},yt=t=>t&&t.$tag$===gt,ht={forEach:(t,e)=>t.map(w).forEach(e),map:(t,e)=>t.map(w).map(e).map(vt)},w=t=>({vattrs:t.$attrs$,vchildren:t.$children$,vkey:t.$key$,vname:t.$name$,vtag:t.$tag$,vtext:t.$text$}),vt=t=>{if(typeof t.vtag=="function"){const l=Object.assign({},t.vattrs);return t.vkey&&(l.key=t.vkey),t.vname&&(l.name=t.vname),Z(t.vtag,l,...t.vchildren||[])}const e=L(t.vtag,t.vtext);return e.$attrs$=t.vattrs,e.$children$=t.vchildren,e.$key$=t.vkey,e.$name$=t.vname,e},mt=(t,e)=>t!=null&&!I(t)?e&4?t==="false"?!1:t===""||!!t:e&2?parseFloat(t):e&1?String(t):t:t,St=(t,e,l)=>{const n=g.ce(e,l);return t.dispatchEvent(n),n},F=new WeakMap,bt=(t,e,l)=>{let n=A.get(t);Xt&&l?(n=n||new CSSStyleSheet,typeof n=="string"?n=e:n.replaceSync(e)):n=e,A.set(t,n)},Et=(t,e,l)=>{var n;const s=N(e),c=A.get(s);if(t=t.nodeType===11?t:v,c)if(typeof c=="string"){t=t.head||t;let i=F.get(t),$;if(i||F.set(t,i=new Set),!i.has(s)){{$=v.createElement("style"),$.innerHTML=c;const o=(n=g.$nonce$)!==null&&n!==void 0?n:Q(v);o!=null&&$.setAttribute("nonce",o),t.insertBefore($,t.querySelector("link"))}e.$flags$&4&&($.innerHTML+=K),i&&i.add(s)}}else t.adoptedStyleSheets.includes(c)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,c]);return s},kt=t=>{const e=t.$cmpMeta$,l=t.$hostElement$,n=e.$flags$,s=m("attachStyles",e.$tagName$),c=Et(l.shadowRoot?l.shadowRoot:l.getRootNode(),e);n&10&&(l["s-sc"]=c,l.classList.add(c+"-h")),s()},N=(t,e)=>"sc-"+t.$tagName$,W=(t,e,l,n,s,c)=>{if(l!==n){let i=X(t,e),$=e.toLowerCase();if(e==="class"){const o=t.classList,r=D(l),f=D(n);o.remove(...r.filter(a=>a&&!f.includes(a))),o.add(...f.filter(a=>a&&!r.includes(a)))}else if(e==="style"){for(const o in l)(!n||n[o]==null)&&(o.includes("-")?t.style.removeProperty(o):t.style[o]="");for(const o in n)(!l||n[o]!==l[o])&&(o.includes("-")?t.style.setProperty(o,n[o]):t.style[o]=n[o])}else if(e!=="key")if(e==="ref")n&&n(t);else if(!i&&e[0]==="o"&&e[1]==="n"){if(e[2]==="-"?e=e.slice(3):X(j,$)?e=$.slice(2):e=$[2]+e.slice(3),l||n){const o=e.endsWith(V);e=e.replace(Pt,""),l&&g.rel(t,e,l,o),n&&g.ael(t,e,n,o)}}else{const o=I(n);if((i||o&&n!==null)&&!s)try{if(t.tagName.includes("-"))t[e]=n;else{const r=n??"";e==="list"?i=!1:(l==null||t[e]!=r)&&(t[e]=r)}}catch{}n==null||n===!1?(n!==!1||t.getAttribute(e)==="")&&t.removeAttribute(e):(!i||c&4||s)&&!o&&(n=n===!0?"":n,t.setAttribute(e,n))}}},Tt=/\s/,D=t=>t?t.split(Tt):[],V="Capture",Pt=new RegExp(V+"$"),tt=(t,e,l,n)=>{const s=e.$elm$.nodeType===11&&e.$elm$.host?e.$elm$.host:e.$elm$,c=t&&t.$attrs$||R,i=e.$attrs$||R;for(n in c)n in i||W(s,n,c[n],void 0,l,e.$flags$);for(n in i)W(s,n,c[n],i[n],l,e.$flags$)},x=(t,e,l,n)=>{const s=e.$children$[l];let c=0,i,$;if(s.$text$!==null)i=s.$elm$=v.createTextNode(s.$text$);else if(i=s.$elm$=v.createElement(s.$tag$),tt(null,s,J),pt(_)&&i["s-si"]!==_&&i.classList.add(i["s-si"]=_),s.$children$)for(c=0;c<s.$children$.length;++c)$=x(t,s,c),$&&i.appendChild($);return i["s-hn"]=U,i},et=(t,e,l,n,s,c)=>{let i=t,$;for(i.shadowRoot&&i.tagName===U&&(i=i.shadowRoot);s<=c;++s)n[s]&&($=x(null,l,s),$&&(n[s].$elm$=$,i.insertBefore($,e)))},nt=(t,e,l)=>{for(let n=e;n<=l;++n){const s=t[n];if(s){const c=s.$elm$;st(s),c&&c.remove()}}},_t=(t,e,l,n,s=!1)=>{let c=0,i=0,$=0,o=0,r=e.length-1,f=e[0],a=e[r],p=n.length-1,d=n[0],u=n[p],y,h;for(;c<=r&&i<=p;)if(f==null)f=e[++c];else if(a==null)a=e[--r];else if(d==null)d=n[++i];else if(u==null)u=n[--p];else if(P(f,d,s))S(f,d,s),f=e[++c],d=n[++i];else if(P(a,u,s))S(a,u,s),a=e[--r],u=n[--p];else if(P(f,u,s))S(f,u,s),t.insertBefore(f.$elm$,a.$elm$.nextSibling),f=e[++c],u=n[--p];else if(P(a,d,s))S(a,d,s),t.insertBefore(a.$elm$,f.$elm$),a=e[--r],d=n[++i];else{for($=-1,o=c;o<=r;++o)if(e[o]&&e[o].$key$!==null&&e[o].$key$===d.$key$){$=o;break}$>=0?(h=e[$],h.$tag$!==d.$tag$?y=x(e&&e[i],l,$):(S(h,d,s),e[$]=void 0,y=h.$elm$),d=n[++i]):(y=x(e&&e[i],l,i),d=n[++i]),y&&f.$elm$.parentNode.insertBefore(y,f.$elm$)}c>r?et(t,n[p+1]==null?null:n[p+1].$elm$,l,n,i,p):i>p&&nt(e,c,r)},P=(t,e,l=!1)=>t.$tag$===e.$tag$?l?!0:t.$key$===e.$key$:!1,S=(t,e,l=!1)=>{const n=e.$elm$=t.$elm$,s=t.$children$,c=e.$children$,i=e.$text$;i===null?(tt(t,e,J),s!==null&&c!==null?_t(n,s,e,c,l):c!==null?(t.$text$!==null&&(n.textContent=""),et(n,null,e,c,0,c.length-1)):s!==null&&nt(s,0,s.length-1)):t.$text$!==i&&(n.data=i)},st=t=>{t.$attrs$&&t.$attrs$.ref&&t.$attrs$.ref(null),t.$children$&&t.$children$.map(st)},Lt=(t,e,l=!1)=>{const n=t.$hostElement$,s=t.$vnode$||L(null,null),c=yt(e)?e:Z(null,null,e);if(U=n.tagName,l&&c.$attrs$)for(const i of Object.keys(c.$attrs$))n.hasAttribute(i)&&!["key","ref","style","class"].includes(i)&&(c.$attrs$[i]=n[i]);c.$tag$=null,c.$flags$|=4,t.$vnode$=c,c.$elm$=s.$elm$=n.shadowRoot||n,_=n["s-sc"],S(s,c,l)},lt=(t,e)=>{e&&!t.$onRenderResolve$&&e["s-p"]&&e["s-p"].push(new Promise(l=>t.$onRenderResolve$=l))},z=(t,e)=>{if(t.$flags$|=16,t.$flags$&4){t.$flags$|=512;return}return lt(t,t.$ancestorComponent$),Gt(()=>xt(t,e))},xt=(t,e)=>{const l=m("scheduleUpdate",t.$cmpMeta$.$tagName$),n=t.$lazyInstance$;let s;return e&&(s=ct(n,"componentWillLoad")),l(),At(s,()=>Ot(t,n,e))},At=(t,e)=>jt(t)?t.then(e):e(),jt=t=>t instanceof Promise||t&&t.then&&typeof t.then=="function",Ot=async(t,e,l)=>{var n;const s=t.$hostElement$,c=m("update",t.$cmpMeta$.$tagName$),i=s["s-rc"];l&&kt(t);const $=m("render",t.$cmpMeta$.$tagName$);Ht(t,e,s,l),i&&(i.map(o=>o()),s["s-rc"]=void 0),$(),c();{const o=(n=s["s-p"])!==null&&n!==void 0?n:[],r=()=>Mt(t);o.length===0?r():(Promise.all(o).then(r),t.$flags$|=4,o.length=0)}},Ht=(t,e,l,n)=>{try{e=e.render(),t.$flags$&=-17,t.$flags$|=2,Lt(t,e,n)}catch(s){b(s,t.$hostElement$)}return null},Mt=t=>{const e=t.$cmpMeta$.$tagName$,l=t.$hostElement$,n=m("postUpdate",e),s=t.$lazyInstance$,c=t.$ancestorComponent$;t.$flags$&64?n():(t.$flags$|=64,ot(l),ct(s,"componentDidLoad"),n(),t.$onReadyResolve$(l),c||it()),t.$onRenderResolve$&&(t.$onRenderResolve$(),t.$onRenderResolve$=void 0),t.$flags$&512&&q(()=>z(t,!1)),t.$flags$&=-517},it=t=>{ot(v.documentElement),q(()=>St(j,"appload",{detail:{namespace:ft}}))},ct=(t,e,l)=>{if(t&&t[e])try{return t[e](l)}catch(n){b(n)}},ot=t=>t.classList.add("hydrated"),Ut=(t,e)=>E(t).$instanceValues$.get(e),It=(t,e,l,n)=>{const s=E(t),c=s.$instanceValues$.get(e),i=s.$flags$,$=s.$lazyInstance$;l=mt(l,n.$members$[e][0]);const o=Number.isNaN(c)&&Number.isNaN(l),r=l!==c&&!o;(!(i&8)||c===void 0)&&r&&(s.$instanceValues$.set(e,l),$&&(i&18)===2&&z(s,!1))},$t=(t,e,l)=>{var n;const s=t.prototype;if(e.$members$){const c=Object.entries(e.$members$);if(c.map(([i,[$]])=>{($&31||l&2&&$&32)&&Object.defineProperty(s,i,{get(){return Ut(this,i)},set(o){It(this,i,o,e)},configurable:!0,enumerable:!0})}),l&1){const i=new Map;s.attributeChangedCallback=function($,o,r){g.jmp(()=>{var f;const a=i.get($);if(this.hasOwnProperty(a))r=this[a],delete this[a];else{if(s.hasOwnProperty(a)&&typeof this[a]=="number"&&this[a]==r)return;if(a==null){const p=E(this),d=p==null?void 0:p.$flags$;if(d&&!(d&8)&&d&128&&r!==o){const u=p.$lazyInstance$,y=(f=e.$watchers$)===null||f===void 0?void 0:f[$];y==null||y.forEach(h=>{u[h]!=null&&u[h].call(u,r,o,$)})}return}}this[a]=r===null&&typeof this[a]=="boolean"?!1:r})},t.observedAttributes=Array.from(new Set([...Object.keys((n=e.$watchers$)!==null&&n!==void 0?n:{}),...c.filter(([$,o])=>o[0]&15).map(([$,o])=>{const r=o[1]||$;return i.set(r,$),r})]))}}return t},zt=async(t,e,l,n)=>{let s;if(!(e.$flags$&32)){e.$flags$|=32;{if(s=Wt(l),s.then){const o=dt();s=await s,o()}s.isProxied||($t(s,l,2),s.isProxied=!0);const $=m("createInstance",l.$tagName$);e.$flags$|=8;try{new s(e)}catch(o){b(o)}e.$flags$&=-9,$()}if(s.style){let $=s.style;const o=N(l);if(!A.has(o)){const r=m("registerStyles",l.$tagName$);bt(o,$,!!(l.$flags$&1)),r()}}}const c=e.$ancestorComponent$,i=()=>z(e,!0);c&&c["s-rc"]?c["s-rc"].push(i):i()},Bt=t=>{},qt=t=>{if(!(g.$flags$&1)){const e=E(t),l=e.$cmpMeta$,n=m("connectedCallback",l.$tagName$);if(e.$flags$&1)e!=null&&e.$lazyInstance$||e!=null&&e.$onReadyPromise$&&e.$onReadyPromise$.then(()=>Bt());else{e.$flags$|=1;{let s=t;for(;s=s.parentNode||s.host;)if(s["s-p"]){lt(e,e.$ancestorComponent$=s);break}}l.$members$&&Object.entries(l.$members$).map(([s,[c]])=>{if(c&31&&t.hasOwnProperty(s)){const i=t[s];delete t[s],t[s]=i}}),zt(t,e,l)}n()}},Ct=t=>{},Rt=async t=>{if(!(g.$flags$&1)){const e=E(t);e!=null&&e.$lazyInstance$||e!=null&&e.$onReadyPromise$&&e.$onReadyPromise$.then(()=>Ct())}},wt=(t,e={})=>{var l;const n=m(),s=[],c=e.exclude||[],i=j.customElements,$=v.head,o=$.querySelector("meta[charset]"),r=v.createElement("style"),f=[];let a,p=!0;Object.assign(g,e),g.$resourcesUrl$=new URL(e.resourcesUrl||"./",v.baseURI).href;let d=!1;if(t.map(u=>{u[1].map(y=>{const h={$flags$:y[0],$tagName$:y[1],$members$:y[2],$listeners$:y[3]};h.$flags$&4&&(d=!0),h.$members$=y[2];const k=h.$tagName$,at=class extends HTMLElement{constructor(T){super(T),T=this,Ft(T,h),h.$flags$&1&&T.attachShadow({mode:"open"})}connectedCallback(){a&&(clearTimeout(a),a=null),p?f.push(this):g.jmp(()=>qt(this))}disconnectedCallback(){g.jmp(()=>Rt(this))}componentOnReady(){return E(this).$onReadyPromise$}};h.$lazyBundleId$=u[0],!c.includes(k)&&!i.get(k)&&(s.push(k),i.define(k,$t(at,h,1)))})}),d&&(r.innerHTML+=K),r.innerHTML+=s+ut,r.innerHTML.length){r.setAttribute("data-styles","");const u=(l=g.$nonce$)!==null&&l!==void 0?l:Q(v);u!=null&&r.setAttribute("nonce",u),$.insertBefore(r,o?o.nextSibling:$.firstChild)}p=!1,f.length?f.map(u=>u.connectedCallback()):g.jmp(()=>a=setTimeout(it,30)),n()},B=new WeakMap,E=t=>B.get(t),Qt=(t,e)=>B.set(e.$lazyInstance$=t,e),Ft=(t,e)=>{const l={$flags$:0,$hostElement$:t,$cmpMeta$:e,$instanceValues$:new Map};return l.$onReadyPromise$=new Promise(n=>l.$onReadyResolve$=n),t["s-p"]=[],t["s-rc"]=[],B.set(t,l)},X=(t,e)=>e in t,b=(t,e)=>(0,console.error)(t,e),O=new Map,Wt=(t,e,l)=>{const n=t.$tagName$.replace(/-/g,"_"),s=t.$lazyBundleId$,c=O.get(s);if(c)return c[n];{const i=$=>(O.set(s,$),$[n]);switch(s){case"bilibili-bangumi":return C(()=>import("./bilibili-bangumi.entry-ASINAf-O.js"),__vite__mapDeps([0,1,2])).then(i,b)}}return C(()=>import(`./${s}.entry.js`),[]).then(i=>(O.set(s,i),i[n]),b)},A=new Map,j=typeof window<"u"?window:{},v=j.document||{head:{}},g={$flags$:0,$resourcesUrl$:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,l,n)=>t.addEventListener(e,l,n),rel:(t,e,l,n)=>t.removeEventListener(e,l,n),ce:(t,e)=>new CustomEvent(t,e)},Dt=t=>Promise.resolve(t),Xt=(()=>{try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch{}return!1})(),Y=[],rt=[],Yt=(t,e)=>l=>{t.push(l),H||(H=!0,g.$flags$&4?q(M):g.raf(M))},G=t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(l){b(l)}t.length=0},M=()=>{G(Y),G(rt),(H=Y.length>0)&&g.raf(M)},q=t=>Dt().then(t),Gt=Yt(rt),Jt=(t,e)=>{if(!(typeof window>"u"))return wt([["bilibili-bangumi",[[1,"bilibili-bangumi",{api:[1],bilibiliUid:[1,"bilibili-uid"],bgmUid:[1,"bgm-uid"],bilibiliEnabled:[4,"bilibili-enabled"],bgmEnabled:[4,"bgm-enabled"],pageSize:[2,"page-size"],customEnabled:[4,"custom-enabled"],customLabel:[1,"custom-label"],loading:[32],error:[32],pageNumber:[32],responseData:[32],activePlatform:[32],activeSubject:[32],collectionLabels:[32],activeCollection:[32],containerRef:[32],containerState:[32]}]]]],e)};(function(){if(typeof window<"u"&&window.Reflect!==void 0&&window.customElements!==void 0){var t=HTMLElement;window.HTMLElement=function(){return Reflect.construct(t,[],this.constructor)},HTMLElement.prototype=t.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,t)}})();const Zt=Object.freeze(Object.defineProperty({__proto__:null,defineCustomElements:Jt},Symbol.toStringTag,{value:"Module"}));export{Z as h,Zt as i,Qt as r};