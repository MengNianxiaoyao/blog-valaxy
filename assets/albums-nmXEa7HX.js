import{g as m,o as t,c as r,w as l,l as a,b as c,t as f,f as v,j as i,F as g,k as $,h as Y,B as A,a3 as B,ak as C,al as w,G as L,i as P,r as S,e as u,am as V,aj as F}from"./app-fJwSv-6W.js";import{o as j}from"./index-nlSmcLJj.js";import{_ as D}from"./YunPageHeader.vue_vue_type_script_setup_true_lang--bDBDbxy.js";const E=["title"],I=["src","alt","on-error"],N=m({__name:"YunAlbum",props:{album:{}},setup(_){return(e,n)=>{const s=v;return t(),r(s,{class:"yun-album-list-item",to:e.album.url},{default:l(()=>[c("figure",{title:e.album.desc},[c("img",{loading:"lazy",class:"yun-album-list-cover",src:e.album.cover,alt:e.album.caption,"on-error":a(j)},null,40,I),c("figcaption",null," 「"+f(e.album.caption)+"」 ",1)],8,E)]),_:1},8,["to"])}}}),R={class:"yun-album-list"},z=m({__name:"YunAlbumList",props:{albums:{}},setup(_){return(e,n)=>{const s=N;return t(),i("div",R,[(t(!0),i(g,null,$(e.albums,o=>(t(),r(s,{key:o.url,album:o},null,8,["album"]))),128))])}}}),G={text:"center",class:"yun-text-light",p:"2"},q=m({__name:"albums",setup(_){const{t:e}=Y(),n=A(),s=B(n);C([w({"@type":"CollectionPage"})]);const o=L(()=>n.value.albums||[]);return(p,H)=>{const b=F,h=D,y=z,d=P("RouterView");return t(),i(g,null,[p.$slots["sidebar-child"]?(t(),r(b,{key:0},{default:l(()=>[S(p.$slots,"sidebar-child")]),_:3})):(t(),r(b,{key:1})),u(d,null,{default:l(({Component:k})=>[(t(),r(V(k),null,{"main-header":l(()=>[u(h,{title:a(s)||a(e)("title.album"),icon:a(n).icon||"i-ri-gallery-line",color:a(n).color},null,8,["title","icon","color"])]),"main-content":l(()=>[c("div",G,f(a(e)("counter.albums",o.value.length)),1),u(y,{albums:o.value},null,8,["albums"]),u(d)]),_:2},1024))]),_:1})],64)}}});export{q as default};
