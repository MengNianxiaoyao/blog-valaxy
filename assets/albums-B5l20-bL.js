import{d as m,o as t,c as r,w as l,h as c,f as a,x as f,B as $,e as i,F as g,t as k,z as Y,O as A,a7 as B,ae as C,af as w,k as L,n as P,r as S,q as u,ag as V,ad as F}from"./app-BsRu6Q0w.js";import{o as z}from"./index-C7yU5XnD.js";import{_ as D}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-guFejU5t.js";const E=["title"],I=["src","alt","on-error"],N=m({__name:"YunAlbum",props:{album:{}},setup(_){return(e,n)=>{const s=$;return t(),r(s,{class:"yun-album-list-item",to:e.album.url},{default:l(()=>[c("figure",{title:e.album.desc},[c("img",{loading:"lazy",class:"yun-album-list-cover",src:e.album.cover,alt:e.album.caption,"on-error":a(z)},null,40,I),c("figcaption",null," 「"+f(e.album.caption)+"」 ",1)],8,E)]),_:1},8,["to"])}}}),O={class:"yun-album-list"},R=m({__name:"YunAlbumList",props:{albums:{}},setup(_){return(e,n)=>{const s=N;return t(),i("div",O,[(t(!0),i(g,null,k(e.albums,o=>(t(),r(s,{key:o.url,album:o},null,8,["album"]))),128))])}}}),q={text:"center",class:"yun-text-light",p:"2"},x=m({__name:"albums",setup(_){const{t:e}=Y(),n=A(),s=B(n);C([w({"@type":"CollectionPage"})]);const o=L(()=>n.value.albums||[]);return(p,H)=>{const d=F,h=D,y=R,b=P("RouterView");return t(),i(g,null,[p.$slots["sidebar-child"]?(t(),r(d,{key:0},{default:l(()=>[S(p.$slots,"sidebar-child")]),_:3})):(t(),r(d,{key:1})),u(b,null,{default:l(({Component:v})=>[(t(),r(V(v),null,{"main-header":l(()=>[u(h,{title:a(s)||a(e)("title.album"),icon:a(n).icon||"i-ri-gallery-line",color:a(n).color},null,8,["title","icon","color"])]),"main-content":l(()=>[c("div",q,f(a(e)("counter.albums",o.value.length)),1),u(y,{albums:o.value},null,8,["albums"]),u(b)]),_:2},1024))]),_:1})],64)}}});export{x as default};