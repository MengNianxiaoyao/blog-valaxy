import{d,B as g,o as s,c as u,j as h,k as _,I as M,e as z,D as B,a0 as P,m as W,b as c,h as r,f as D,a8 as E,a9 as I,l as b,aa as L,v as x,C,s as w,w as k,ab as N,F as R,z as F,ac as U,ad as G,ae as q,_ as H,g as m,r as J,G as K}from"./app-BFp5F8kb.js";import{i as y,a as $}from"./index-C5okkQwF.js";const Q=d({__name:"YunArtalk",setup(o){return y($)||(void 0)(),(n,e)=>{const l=g("ArtalkClient");return s(),u(l)}}});function T(){const o=h();return _(()=>o.value.addons["valaxy-addon-twikoo"])}function V(o,n="latest"){const e=M(),l=_(()=>e.value.cdn.prefix),t=z(),{locale:a}=B();function i(p){if(!W)return;const f={el:".comment #tcomment",lang:a.value,path:t.path},v=Object.assign(f,p||{});return window.twikoo.init(v)}P(`${l.value}twikoo@${n}/dist/twikoo.all.min.js`,()=>{o.value&&i(o.value)})}function S(o="latest"){const n=T(),e=_(()=>n.value.options);V(e,o)}const X=Object.freeze(Object.defineProperty({__proto__:null,useAddonTwikoo:T,useTwikoo:V,useTwikooWithOptions:S},Symbol.toStringTag,{value:"Module"})),Z=d({__name:"YunTwikoo",setup(o){return y(X)||S(),(n,e)=>(s(),c("div",null,e[0]||(e[0]=[r("div",{id:"tcomment",w:"full"},null,-1)])))}}),ee=d({__name:"YunWaline",setup(o){if(y($))throw new Error("Please install valaxy-addon-waline");const n=(void 0)();return(e,l)=>{const t=g("WalineClient");return s(),u(t,{w:"full",options:D(n).options||{serverURL:""}},null,8,["options"])}}}),te={"case-capital":"","op-90":""},ne={class:"shadow-lg select-options absolute translate-y-1 left-0 top-full w-full bg-$va-c-bg-light overflow-hidden rounded-1"},oe=["onClick"],ae=d({__name:"YunSelect",props:E({options:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(o){const n=I(o,"modelValue"),e=b(!1);L("click",()=>{e.value=!1});function l(t){t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),e.value=!e.value}return(t,a)=>(s(),c("div",{class:"relative h-8 w-30 text-$va-c-text-2 z-$yun-z-select",onMousedown:a[0]||(a[0]=q(()=>{},["stop"]))},[r("button",{class:C(["flex h-full w-full px-2 items-center justify-between rounded transition",e.value?"border-$va-c-primary":""]),border:"~ gray op-30",onClick:l},[r("span",te,x(n.value),1),a[1]||(a[1]=r("div",{"inline-flex":"","i-ri-arrow-down-s-line":""},null,-1))],2),w(G,{persisted:""},{default:k(()=>[N(r("ul",ne,[(s(!0),c(R,null,F(t.options,i=>(s(),c("li",{key:i,class:C(["cursor-pointer list-none px-2 hover:bg-$va-c-primary-light hover:text-white case-capital",{"bg-$va-c-primary text-white":n.value===i}]),onClick:p=>n.value=i},x(i),11,oe))),128))],512),[[U,e.value]])]),_:1})],32))}}),se=H(ae,[["__scopeId","data-v-c04a26a7"]]),le={key:0,class:"flex justify-end w-full mb-2"},re=d({__name:"YunComment",setup(o){const n=h(),e=["valaxy-addon-waline","valaxy-addon-twikoo","valaxy-addon-artalk"],l=_(()=>e.filter(a=>n.value.addons[a]).map(a=>a.split("-")[2])),t=b(l.value[0]);return(a,i)=>{const p=se,f=ee,v=Z,Y=Q,O=g("ClientOnly"),A=K;return s(),u(A,{w:"full",p:"4",class:"comment yun-comment sm:p-6 lg:px-12 xl:px-16"},{default:k(()=>[w(O,null,{default:k(()=>[l.value.length>1?(s(),c("div",le,[w(p,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=j=>t.value=j),options:l.value},null,8,["modelValue","options"])])):m("v-if",!0),t.value==="waline"?(s(),u(f,{key:1})):m("v-if",!0),t.value==="twikoo"?(s(),u(v,{key:2})):m("v-if",!0),t.value==="artalk"?(s(),u(Y,{key:3})):m("v-if",!0),J(a.$slots,"default")]),_:3})]),_:3})}}});export{re as _};