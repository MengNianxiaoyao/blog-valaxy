const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/YunGallery-BxLnFwxg.js","assets/app-exgnBluq.js","assets/app-B4qNKqTK.css","assets/YunPageHeader.vue_vue_type_script_setup_true_lang-NlT3UeC1.js"])))=>i.map(i=>d[i]);
import{D as A,d as w,y as C,o as s,c as d,l as g,e as f,h as l,$ as P,ao as D,z as S,ap as $,n as v,u as V,A as B,R as E,aa as K,ag as G,ah as O,k as T,j as R,aq as j,w as h,r as F,ai as Y,f as a,x as M,F as U,af as z,ar as I}from"./app-exgnBluq.js";import{_ as N}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-NlT3UeC1.js";function H(r){const t=new TextEncoder;return window.crypto.subtle.importKey("raw",t.encode(r),"PBKDF2",!1,["deriveBits","deriveKey"])}function q(r,t){return window.crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:1e5,hash:"SHA-256"},r,{name:"AES-CBC",length:256},!0,["encrypt","decrypt"])}function J(){const r=A(),{encrypt:t}=r.value,n=Uint8Array.from(Object.values(t.iv)),e=Uint8Array.from(Object.values(t.salt));return{decrypt:async(c,u)=>{if(!c)return;const y=await H(c),_=await q(y,e),i=Uint8Array.from(u,p=>p.charCodeAt(0)),o=await window.crypto.subtle.decrypt({name:"AES-CBC",iv:n},_,i);return new TextDecoder().decode(o)}}}const L=w({__name:"YunGallery",props:{photos:{}},setup(r){return(t,n)=>{const e=C("VAGallery");return s(),d(e,{photos:t.photos},null,8,["photos"])}}}),W={key:0,"w-full":"","pt-14":"","pb-10":""},Q={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},X={key:1},Z=w({__name:"ValaxyGalleryDecrypt",props:{encryptedPhotos:{}},setup(r){const t=r,n=g(""),e=g(""),c=g(!1),{decrypt:u}=J();async function y(){const i=t.encryptedPhotos;if(i)try{const o=await u(n.value,i);e.value=o||""}catch{c.value=!0}}function _(){e.value="",n.value=""}return(i,o)=>{const p=L;return s(),f("div",null,[e.value?(s(),f("div",X,[v(p,{photos:JSON.parse(e.value)},null,8,["photos"]),l("div",{"w-full":"","text-center":"","mt-8":""},[l("button",{"m-auto":"",class:"btn","font-bold":"",onClick:_}," Encrypt Again ")])])):(s(),f("div",W,[l("div",Q,[P(l("input",{"onUpdate:modelValue":o[0]||(o[0]=m=>n.value=m),"w-full":"",border:"","pl-5":"","pr-11":"","py-3":"",rounded:"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:S(c.value&&"border-red"),onInput:o[1]||(o[1]=m=>c.value=!1),onKeyup:$(y,["enter"])},null,34),[[D,n.value]]),l("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:y})])]))])}}}),ee={text:"center",class:"yun-text-light",p:"2"},te={class:"page-action",text:"center"},oe=["title"],ne=l("div",{"i-ri-arrow-go-back-line":""},null,-1),ae=[ne],se=w({__name:"gallery",setup(r){const t=V(),{t:n}=B(),e=E(),c=K(e);G([O({"@type":"CollectionPage"})]);const u=T(()=>e.value.photos||[]),_=R().value.addons["valaxy-addon-lightgallery"]?j(()=>I(()=>import("./YunGallery-BxLnFwxg.js"),__vite__mapDeps([0,1,2,3]))):()=>null;return(i,o)=>{const p=z,m=N,x=Z,b=C("RouterView");return s(),f(U,null,[i.$slots["sidebar-child"]?(s(),d(p,{key:0},{default:h(()=>[F(i.$slots,"sidebar-child")]),_:3})):(s(),d(p,{key:1})),v(b,null,{default:h(({Component:k})=>[(s(),d(Y(k),null,{"main-header":h(()=>[v(m,{title:a(c)||a(n)("title.gallery"),icon:a(e).icon||"i-ri-gallery-line",color:a(e).color,"page-title-class":a(e).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":h(()=>[l("div",ee,M(a(n)("counter.photos",u.value.length)),1),l("div",te,[l("a",{class:"yun-icon-btn",title:a(n)("accessibility.back"),onClick:o[0]||(o[0]=()=>a(t).back())},ae,8,oe)]),a(e).encryptedPhotos?(s(),d(x,{key:0,"encrypted-photos":a(e).encryptedPhotos},null,8,["encrypted-photos"])):(s(),d(a(_),{key:1,photos:u.value},null,8,["photos"])),v(b)]),_:2},1024))]),_:1})],64)}}}),ce=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"}));export{L as _,ce as g};
