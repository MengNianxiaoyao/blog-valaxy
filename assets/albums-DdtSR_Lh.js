import{d as m,o as t,c as r,w as l,h as c,f as a,t as f,y as $,e as i,F as g,l as k,v as Y,M as A,a7 as C,ae as w,af as B,m as L,q as P,r as S,j as u,ag as V,ad as F}from"./app-DxBSjxC1.js";import{o as D}from"./index-C7yU5XnD.js";import{_ as E}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-D3HWy0CT.js";const I=["title"],N=["src","alt","on-error"],R=m({__name:"YunAlbum",props:{album:{}},setup(_){return(e,n)=>{const s=$;return t(),r(s,{class:"yun-album-list-item",to:e.album.url},{default:l(()=>[c("figure",{title:e.album.desc},[c("img",{loading:"lazy",class:"yun-album-list-cover",src:e.album.cover,alt:e.album.caption,"on-error":a(D)},null,40,N),c("figcaption",null," 「"+f(e.album.caption)+"」 ",1)],8,I)]),_:1},8,["to"])}}}),j={class:"yun-album-list"},q=m({__name:"YunAlbumList",props:{albums:{}},setup(_){return(e,n)=>{const s=R;return t(),i("div",j,[(t(!0),i(g,null,k(e.albums,o=>(t(),r(s,{key:o.url,album:o},null,8,["album"]))),128))])}}}),z={text:"center",class:"yun-text-light",p:"2"},W=m({__name:"albums",setup(_){const{t:e}=Y(),n=A(),s=C(n);w([B({"@type":"CollectionPage"})]);const o=L(()=>n.value.albums||[]);return(p,H)=>{const d=F,h=E,y=q,b=P("RouterView");return t(),i(g,null,[p.$slots["sidebar-child"]?(t(),r(d,{key:0},{default:l(()=>[S(p.$slots,"sidebar-child")]),_:3})):(t(),r(d,{key:1})),u(b,null,{default:l(({Component:v})=>[(t(),r(V(v),null,{"main-header":l(()=>[u(h,{title:a(s)||a(e)("title.album"),icon:a(n).icon||"i-ri-gallery-line",color:a(n).color},null,8,["title","icon","color"])]),"main-content":l(()=>[c("div",z,f(a(e)("counter.albums",o.value.length)),1),u(y,{albums:o.value},null,8,["albums"]),u(b)]),_:2},1024))]),_:1})],64)}}});export{W as default};
