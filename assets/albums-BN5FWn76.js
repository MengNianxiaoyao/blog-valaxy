import{d as m,o as t,c as r,w as l,h as c,f as a,y as f,C as $,b as i,F as g,v as k,B as C,S as Y,a9 as A,af as B,ag as S,k as w,z as L,r as P,s as u,ah as V,ae as F}from"./app-iLzlzZ_J.js";import{o as z}from"./index-jZuIxNFT.js";import{_ as D}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-BbnlgV8f.js";const E=["title"],I=["src","alt","on-error"],N=m({__name:"YunAlbum",props:{album:{}},setup(_){return(e,s)=>{const n=$;return t(),r(n,{class:"yun-album-list-item",to:e.album.url},{default:l(()=>[c("figure",{title:e.album.desc},[c("img",{loading:"lazy",class:"yun-album-list-cover",src:e.album.cover,alt:e.album.caption,"on-error":a(z)},null,40,I),c("figcaption",null," 「"+f(e.album.caption)+"」 ",1)],8,E)]),_:1},8,["to"])}}}),R={class:"yun-album-list"},T=m({__name:"YunAlbumList",props:{albums:{}},setup(_){return(e,s)=>{const n=N;return t(),i("div",R,[(t(!0),i(g,null,k(e.albums,o=>(t(),r(n,{key:o.url,album:o},null,8,["album"]))),128))])}}}),H={text:"center",class:"yun-text-light",p:"2"},G=m({__name:"albums",setup(_){const{t:e}=C(),s=Y(),n=A(s);B([S({"@type":"CollectionPage"})]);const o=w(()=>s.value.albums||[]);return(p,O)=>{const b=F,h=D,y=T,d=L("RouterView");return t(),i(g,null,[p.$slots["sidebar-child"]?(t(),r(b,{key:0},{default:l(()=>[P(p.$slots,"sidebar-child")]),_:3})):(t(),r(b,{key:1})),u(d,null,{default:l(({Component:v})=>[(t(),r(V(v),null,{"main-header":l(()=>[u(h,{title:a(n)||a(e)("title.album"),icon:a(s).icon||"i-ri-gallery-line",color:a(s).color,"page-title-class":a(s).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":l(()=>[c("div",H,f(a(e)("counter.albums",o.value.length)),1),u(y,{albums:o.value},null,8,["albums"]),u(d)]),_:2},1024))]),_:1})],64)}}});export{G as default};
