import{d as m,o as t,c as r,w as l,h as c,f as s,x as f,B as $,e as i,F as g,t as k,A,R as C,aa as Y,ag as B,ah as w,k as L,y as P,r as S,n as u,ai as V,af as F}from"./app-B-h2PGjK.js";import{o as R}from"./index-Bj38XWP1.js";import{_ as D}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-DussdA9d.js";const E=["title"],I=["src","alt","on-error"],N=m({__name:"YunAlbum",props:{album:{}},setup(_){return(e,a)=>{const n=$;return t(),r(n,{class:"yun-album-list-item",to:e.album.url},{default:l(()=>[c("figure",{title:e.album.desc},[c("img",{loading:"lazy",class:"yun-album-list-cover",src:e.album.cover,alt:e.album.caption,"on-error":s(R)},null,40,I),c("figcaption",null," 「"+f(e.album.caption)+"」 ",1)],8,E)]),_:1},8,["to"])}}}),T={class:"yun-album-list"},z=m({__name:"YunAlbumList",props:{albums:{}},setup(_){return(e,a)=>{const n=N;return t(),i("div",T,[(t(!0),i(g,null,k(e.albums,o=>(t(),r(n,{key:o.url,album:o},null,8,["album"]))),128))])}}}),H={text:"center",class:"yun-text-light",p:"2"},x=m({__name:"albums",setup(_){const{t:e}=A(),a=C(),n=Y(a);B([w({"@type":"CollectionPage"})]);const o=L(()=>a.value.albums||[]);return(p,O)=>{const d=F,h=D,y=z,b=P("RouterView");return t(),i(g,null,[p.$slots["sidebar-child"]?(t(),r(d,{key:0},{default:l(()=>[S(p.$slots,"sidebar-child")]),_:3})):(t(),r(d,{key:1})),u(b,null,{default:l(({Component:v})=>[(t(),r(V(v),null,{"main-header":l(()=>[u(h,{title:s(n)||s(e)("title.album"),icon:s(a).icon||"i-ri-gallery-line",color:s(a).color,"page-title-class":s(a).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":l(()=>[c("div",H,f(s(e)("counter.albums",o.value.length)),1),u(y,{albums:o.value},null,8,["albums"]),u(b)]),_:2},1024))]),_:1})],64)}}});export{x as default};