function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/YunGallery-C6n8bvxH.js","assets/app-DQq9jqc2.js","assets/app-Bnv_c1qF.css","assets/YunPageHeader.vue_vue_type_script_setup_true_lang-BG_Q1SEn.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as b,x as k,o as n,c as r,l as g,ar as P,e as y,h as a,K as V,as as $,y as D,at as G,n as h,u as S,z as A,O as E,ac as O,aj as R,ak as Y,k as j,j as B,au as T,w as _,r as z,al as F,f as o,v as I,F as K,ai as N,av as M}from"./app-DQq9jqc2.js";import{_ as H}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-BG_Q1SEn.js";const J=b({__name:"YunGallery",props:{photos:{}},setup(m){return(c,s)=>{const e=k("VAGallery");return n(),r(e,{photos:c.photos},null,8,["photos"])}}}),L={key:0,"w-full":"","pt-14":"","pb-10":""},U={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},W={key:1},q=b({__name:"ValaxyGalleryDecrypt",props:{encryptedPhotos:{}},setup(m){const c=m,s=g(""),e=g(""),i=g(!1),{decrypt:u}=P();async function v(){const l=c.encryptedPhotos;if(l)try{const t=await u(s.value,l);e.value=t||""}catch{i.value=!0}}function f(){e.value="",s.value=""}return(l,t)=>{const p=J;return n(),y("div",null,[e.value?(n(),y("div",W,[h(p,{photos:JSON.parse(e.value)},null,8,["photos"]),a("div",{"w-full":"","text-center":"","mt-8":""},[a("button",{"m-auto":"",class:"btn","font-bold":"",onClick:f}," Encrypt Again ")])])):(n(),y("div",L,[a("div",U,[V(a("input",{"onUpdate:modelValue":t[0]||(t[0]=d=>s.value=d),"w-full":"",border:"","pl-5":"","pr-11":"","py-3":"",rounded:"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:D(i.value&&"border-red"),onInput:t[1]||(t[1]=d=>i.value=!1),onKeyup:G(v,["enter"])},null,34),[[$,s.value]]),a("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:v})])]))])}}}),Q={text:"center",class:"yun-text-light",p:"2"},X={class:"page-action",text:"center"},Z=["title"],ee=a("div",{"i-ri-arrow-go-back-line":""},null,-1),te=[ee],oe=b({__name:"gallery",setup(m){const c=S(),{t:s}=A(),e=E(),i=O(e);R([Y({"@type":"CollectionPage"})]);const u=j(()=>e.value.photos||[]),f=B().value.addons["valaxy-addon-lightgallery"]?T(()=>M(()=>import("./YunGallery-C6n8bvxH.js"),__vite__mapDeps([0,1,2,3]))):()=>null;return(l,t)=>{const p=N,d=H,x=q,w=k("RouterView");return n(),y(K,null,[l.$slots["sidebar-child"]?(n(),r(p,{key:0},{default:_(()=>[z(l.$slots,"sidebar-child")]),_:3})):(n(),r(p,{key:1})),h(w,null,{default:_(({Component:C})=>[(n(),r(F(C),null,{"main-header":_(()=>[h(d,{title:o(i)||o(s)("title.gallery"),icon:o(e).icon||"i-ri-gallery-line",color:o(e).color},null,8,["title","icon","color"])]),"main-content":_(()=>[a("div",Q,I(o(s)("counter.photos",u.value.length)),1),a("div",X,[a("a",{class:"yun-icon-btn",title:o(s)("accessibility.back"),onClick:t[0]||(t[0]=()=>o(c).back())},te,8,Z)]),o(e).encryptedPhotos?(n(),r(x,{key:0,"encrypted-photos":o(e).encryptedPhotos},null,8,["encrypted-photos"])):(n(),r(o(f),{key:1,photos:u.value},null,8,["photos"])),h(w)]),_:2},1024))]),_:1})],64)}}}),ae=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));export{J as _,ae as g};