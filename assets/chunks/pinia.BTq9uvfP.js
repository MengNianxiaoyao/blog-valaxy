import"./@vueuse/motion.B2a_ecFc.js";import{B as V,F as tt,T as $,P as m,U as B,K as et,x as st,y as ot,C as nt,O as rt,V as ct,W as D,A as it,L as at,X as ht}from"../framework.Cj0Avats.js";function R(s,t={},e){for(const o in s){const n=s[o],r=e?`${e}:${o}`:o;typeof n=="object"&&n!==null?R(n,t,r):typeof n=="function"&&(t[r]=n)}return t}const ft={run:s=>s()},lt=()=>ft,K=typeof console.createTask<"u"?console.createTask:lt;function ut(s,t){const e=t.shift(),o=K(e);return s.reduce((n,r)=>n.then(()=>o.run(()=>r(...t))),Promise.resolve())}function kt(s,t){const e=t.shift(),o=K(e);return Promise.all(s.map(n=>o.run(()=>n(...t))))}function E(s,t){for(const e of[...s])e(t)}class dt{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,e,o={}){if(!t||typeof e!="function")return()=>{};const n=t;let r;for(;this._deprecatedHooks[t];)r=this._deprecatedHooks[t],t=r.to;if(r&&!o.allowDeprecated){let i=r.message;i||(i=`${n} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}if(!e.name)try{Object.defineProperty(e,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(e),()=>{e&&(this.removeHook(t,e),e=void 0)}}hookOnce(t,e){let o,n=(...r)=>(typeof o=="function"&&o(),o=void 0,n=void 0,e(...r));return o=this.hook(t,n),o}removeHook(t,e){if(this._hooks[t]){const o=this._hooks[t].indexOf(e);o!==-1&&this._hooks[t].splice(o,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,e){this._deprecatedHooks[t]=typeof e=="string"?{to:e}:e;const o=this._hooks[t]||[];delete this._hooks[t];for(const n of o)this.hook(t,n)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const e in t)this.deprecateHook(e,t[e])}addHooks(t){const e=R(t),o=Object.keys(e).map(n=>this.hook(n,e[n]));return()=>{for(const n of o.splice(0,o.length))n()}}removeHooks(t){const e=R(t);for(const o in e)this.removeHook(o,e[o])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...e){return e.unshift(t),this.callHookWith(ut,t,...e)}callHookParallel(t,...e){return e.unshift(t),this.callHookWith(kt,t,...e)}callHookWith(t,e,...o){const n=this._before||this._after?{name:e,args:o,context:{}}:void 0;this._before&&E(this._before,n);const r=t(e in this._hooks?[...this._hooks[e]]:[],o);return r instanceof Promise?r.finally(()=>{this._after&&n&&E(this._after,n)}):(this._after&&n&&E(this._after,n),r)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const e=this._before.indexOf(t);e!==-1&&this._before.splice(e,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const e=this._after.indexOf(t);e!==-1&&this._after.splice(e,1)}}}}function Pt(){return new dt}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let J;const w=s=>J=s,U=Symbol();function I(s){return s&&typeof s=="object"&&Object.prototype.toString.call(s)==="[object Object]"&&typeof s.toJSON!="function"}var x;(function(s){s.direct="direct",s.patchObject="patch object",s.patchFunction="patch function"})(x||(x={}));function _t(){const s=$(!0),t=s.run(()=>V({}));let e=[],o=[];const n=D({install(r){w(n),n._a=r,r.provide(U,n),r.config.globalProperties.$pinia=n,o.forEach(i=>e.push(i)),o=[]},use(r){return this._a?e.push(r):o.push(r),this},_p:e,_a:null,_e:s,_s:new Map,state:t});return n}const X=()=>{};function N(s,t,e,o=X){s.push(t);const n=()=>{const r=s.indexOf(t);r>-1&&(s.splice(r,1),o())};return!e&&st()&&ot(n),n}function H(s,...t){s.slice().forEach(e=>{e(...t)})}const bt=s=>s(),T=Symbol(),W=Symbol();function L(s,t){s instanceof Map&&t instanceof Map?t.forEach((e,o)=>s.set(o,e)):s instanceof Set&&t instanceof Set&&t.forEach(s.add,s);for(const e in t){if(!t.hasOwnProperty(e))continue;const o=t[e],n=s[e];I(n)&&I(o)&&s.hasOwnProperty(e)&&!m(o)&&!B(o)?s[e]=L(n,o):s[e]=o}return s}const pt=Symbol();function vt(s){return!I(s)||!s.hasOwnProperty(pt)}const{assign:u}=Object;function yt(s){return!!(m(s)&&s.effect)}function St(s,t,e,o){const{state:n,actions:r,getters:i}=t,g=e.state.value[s];let d;function k(){g||(e.state.value[s]=n?n():{});const _=ct(e.state.value[s]);return u(_,r,Object.keys(i||{}).reduce((b,p)=>(b[p]=D(it(()=>{w(e);const v=e._s.get(s);return i[p].call(v,v)})),b),{}))}return d=q(s,k,t,e,o,!0),d}function q(s,t,e={},o,n,r){let i;const g=u({actions:{}},e),d={deep:!0};let k,_,b=[],p=[],v;const y=o.state.value[s];!r&&!y&&(o.state.value[s]={}),V({});let M;function F(a){let c;k=_=!1,typeof a=="function"?(a(o.state.value[s]),c={type:x.patchFunction,storeId:s,events:v}):(L(o.state.value[s],a),c={type:x.patchObject,payload:a,storeId:s,events:v});const h=M=Symbol();rt().then(()=>{M===h&&(k=!0)}),_=!0,H(b,c,o.state.value[s])}const z=r?function(){const{state:c}=e,h=c?c():{};this.$patch(S=>{u(S,h)})}:X;function Q(){i.stop(),b=[],p=[],o._s.delete(s)}const A=(a,c="")=>{if(T in a)return a[W]=c,a;const h=function(){w(o);const S=Array.from(arguments),P=[],C=[];function Z(f){P.push(f)}function G(f){C.push(f)}H(p,{args:S,name:h[W],store:l,after:Z,onError:G});let j;try{j=a.apply(this&&this.$id===s?this:l,S)}catch(f){throw H(C,f),f}return j instanceof Promise?j.then(f=>(H(P,f),f)).catch(f=>(H(C,f),Promise.reject(f))):(H(P,j),j)};return h[T]=!0,h[W]=c,h},Y={_p:o,$id:s,$onAction:N.bind(null,p),$patch:F,$reset:z,$subscribe(a,c={}){const h=N(b,a,c.detached,()=>S()),S=i.run(()=>nt(()=>o.state.value[s],P=>{(c.flush==="sync"?_:k)&&a({storeId:s,type:x.direct,events:v},P)},u({},d,c)));return h},$dispose:Q},l=tt(Y);o._s.set(s,l);const O=(o._a&&o._a.runWithContext||bt)(()=>o._e.run(()=>(i=$()).run(()=>t({action:A}))));for(const a in O){const c=O[a];if(m(c)&&!yt(c)||B(c))r||(y&&vt(c)&&(m(c)?c.value=y[a]:L(c,y[a])),o.state.value[s][a]=c);else if(typeof c=="function"){const h=A(c,a);O[a]=h,g.actions[a]=c}}return u(l,O),u(et(l),O),Object.defineProperty(l,"$state",{get:()=>o.state.value[s],set:a=>{F(c=>{u(c,a)})}}),o._p.forEach(a=>{u(l,i.run(()=>a({store:l,app:o._a,pinia:o,options:g})))}),y&&r&&e.hydrate&&e.hydrate(l.$state,y),k=!0,_=!0,l}/*! #__NO_SIDE_EFFECTS__ */function jt(s,t,e){let o;const n=typeof t=="function";o=n?e:t;function r(i,g){const d=ht();return i=i||(d?at(U,null):null),i&&w(i),i=J,i._s.has(s)||(n?q(s,t,o,i):St(s,o,i)),i._s.get(s)}return r.$id=s,r}const xt=({isClient:s,initialState:t,app:e})=>{const o=_t();e.use(o),s?o.state.value=t.pinia||{}:t.pinia=o.state.value};export{Pt as c,jt as d,xt as i};
