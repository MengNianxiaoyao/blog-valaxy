import"./@vueuse/motion.DmQGeD3W.js";import{B,F as G,T as H,P as E,U as K,K as $,x as T,y as tt,C as et,O as st,V as nt,W as M,A as ot,L as ct,X as rt}from"../framework.13VfgwF7.js";/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let D;const R=t=>D=t,J=Symbol();function L(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var w;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(w||(w={}));function ut(){const t=H(!0),o=t.run(()=>B({}));let s=[],e=[];const r=M({install(u){R(r),r._a=u,u.provide(J,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return this._a?s.push(u):e.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:o});return r}const U=()=>{};function A(t,o,s,e=U){t.push(o);const r=()=>{const u=t.indexOf(o);u>-1&&(t.splice(u,1),e())};return!s&&T()&&tt(r),r}function P(t,...o){t.slice().forEach(s=>{s(...o)})}const at=t=>t(),V=Symbol(),k=Symbol();function O(t,o){t instanceof Map&&o instanceof Map?o.forEach((s,e)=>t.set(e,s)):t instanceof Set&&o instanceof Set&&o.forEach(t.add,t);for(const s in o){if(!o.hasOwnProperty(s))continue;const e=o[s],r=t[s];L(r)&&L(e)&&t.hasOwnProperty(s)&&!E(e)&&!K(e)?t[s]=O(r,e):t[s]=e}return t}const ft=Symbol();function it(t){return!L(t)||!t.hasOwnProperty(ft)}const{assign:y}=Object;function lt(t){return!!(E(t)&&t.effect)}function ht(t,o,s,e){const{state:r,actions:u,getters:f}=o,a=s.state.value[t];let p;function b(){a||(s.state.value[t]=r?r():{});const v=nt(s.state.value[t]);return y(v,u,Object.keys(f||{}).reduce((S,m)=>(S[m]=M(ot(()=>{R(s);const _=s._s.get(t);return f[m].call(_,_)})),S),{}))}return p=X(t,b,o,s,e,!0),p}function X(t,o,s={},e,r,u){let f;const a=y({actions:{}},s),p={deep:!0};let b,v,S=[],m=[],_;const d=e.state.value[t];!u&&!d&&(e.state.value[t]={}),B({});let W;function F(c){let n;b=v=!1,typeof c=="function"?(c(e.state.value[t]),n={type:w.patchFunction,storeId:t,events:_}):(O(e.state.value[t],c),n={type:w.patchObject,payload:c,storeId:t,events:_});const i=W=Symbol();st().then(()=>{W===i&&(b=!0)}),v=!0,P(S,n,e.state.value[t])}const q=u?function(){const{state:n}=s,i=n?n():{};this.$patch(j=>{y(j,i)})}:U;function z(){f.stop(),S=[],m=[],e._s.delete(t)}const N=(c,n="")=>{if(V in c)return c[k]=n,c;const i=function(){R(e);const j=Array.from(arguments),g=[],I=[];function Y(l){g.push(l)}function Z(l){I.push(l)}P(m,{args:j,name:i[k],store:h,after:Y,onError:Z});let x;try{x=c.apply(this&&this.$id===t?this:h,j)}catch(l){throw P(I,l),l}return x instanceof Promise?x.then(l=>(P(g,l),l)).catch(l=>(P(I,l),Promise.reject(l))):(P(g,x),x)};return i[V]=!0,i[k]=n,i},Q={_p:e,$id:t,$onAction:A.bind(null,m),$patch:F,$reset:q,$subscribe(c,n={}){const i=A(S,c,n.detached,()=>j()),j=f.run(()=>et(()=>e.state.value[t],g=>{(n.flush==="sync"?v:b)&&c({storeId:t,type:w.direct,events:_},g)},y({},p,n)));return i},$dispose:z},h=G(Q);e._s.set(t,h);const C=(e._a&&e._a.runWithContext||at)(()=>e._e.run(()=>(f=H()).run(()=>o({action:N}))));for(const c in C){const n=C[c];if(E(n)&&!lt(n)||K(n))u||(d&&it(n)&&(E(n)?n.value=d[c]:O(n,d[c])),e.state.value[t][c]=n);else if(typeof n=="function"){const i=N(n,c);C[c]=i,a.actions[c]=n}}return y(h,C),y($(h),C),Object.defineProperty(h,"$state",{get:()=>e.state.value[t],set:c=>{F(n=>{y(n,c)})}}),e._p.forEach(c=>{y(h,f.run(()=>c({store:h,app:e._a,pinia:e,options:a})))}),d&&u&&s.hydrate&&s.hydrate(h.$state,d),b=!0,v=!0,h}/*! #__NO_SIDE_EFFECTS__ */function St(t,o,s){let e,r;const u=typeof o=="function";typeof t=="string"?(e=t,r=u?s:o):(r=t,e=t.id);function f(a,p){const b=rt();return a=a||(b?ct(J,null):null),a&&R(a),a=D,a._s.has(e)||(u?X(e,o,r,a):ht(e,r,a)),a._s.get(e)}return f.$id=e,f}const mt=({isClient:t,initialState:o,app:s})=>{const e=ut();s.use(e),t?e.state.value=o.pinia||{}:o.pinia=e.state.value};export{St as d,mt as i};
