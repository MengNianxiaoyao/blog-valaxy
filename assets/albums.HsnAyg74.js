import{_ as L,u as Y,a as A,b as C,d as k,c as x,e as B,f as F}from"./app.CrZI7mPs.js";import"./chunks/@vueuse/motion.BltUbIEt.js";import{o as P}from"./index.DOMSow-e.js";import{I as m,ab as i,ac as o,am as r,af as c,F as n,ag as f,ad as u,L as b,an as V,A as w,aa as I,Z as a,au as D}from"./framework.Wgu5ILjI.js";import{_ as E}from"./YunPageHeader.vue_vue_type_script_setup_true_lang.BE-4Vecm.js";import"./chunks/dayjs.Byk5cVHE.js";import{u as N}from"./chunks/vue-i18n.CnBeAbHo.js";import"./chunks/vue-router.Dz0FRYyb.js";import"./chunks/nprogress.Bmgvrz1e.js";import"./chunks/pinia.BGsVwCM1.js";import"./animation.BmKSPrMr.js";const R=["title"],S=["src","alt","on-error"],T={class:"yun-album-caption yun-title-effects text-$va-c-text inline-flex-center"},W=m({__name:"YunAlbum",props:{album:{}},setup(_){return(t,e)=>{const s=L;return o(),i(s,{class:"yun-album-list-item",to:t.album.url},{default:r(()=>[c("figure",{class:"m-10",flex:"~ col",title:t.album.desc},[c("img",{loading:"lazy",class:"yun-album-list-cover",src:t.album.cover,alt:t.album.caption,"on-error":n(P)},null,40,S),c("figcaption",T,f(t.album.caption),1)],8,R)]),_:1},8,["to"])}}}),z={class:"yun-album-list mb-4"},H=m({__name:"YunAlbumList",props:{albums:{}},setup(_){return(t,e)=>{const s=W;return o(),u("div",z,[(o(!0),u(b,null,V(t.albums,l=>(o(),i(s,{key:l.url,album:l},null,8,["album"]))),128))])}}}),O={text:"center",class:"yun-text-light",p:"2"},nt=m({__name:"albums",setup(_){const{t}=N(),e=Y(),s=A(e);C([k({"@type":"CollectionPage"})]);const l=w(()=>e.value.albums||[]);return(Z,j)=>{const d=x,g=E,y=H,p=I("RouterView"),h=B,v=F;return o(),u(b,null,[a(h,null,{default:r(()=>[a(d),a(p,null,{default:r(({Component:$})=>[(o(),i(D($),null,{"main-header":r(()=>[a(g,{title:n(s)||n(t)("title.album"),icon:n(e).icon||"i-ri-gallery-line",color:n(e).color,"page-title-class":n(e).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":r(()=>[c("div",O,f(n(t)("counter.albums",l.value.length)),1),a(y,{albums:l.value},null,8,["albums"]),a(p)]),_:2},1024))]),_:1})]),_:1}),a(v)],64)}}});export{nt as default};
