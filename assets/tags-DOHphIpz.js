import{_ as j}from"./YunCard.vue_vue_type_script_setup_true_lang-tNtLkrfe.js";import{_ as q}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-WZpqKJl3.js";import{d as S,o as t,e as _,h as c,v as p,aj as z,ak as D,a as E,u as H,H as I,z as O,O as W,aA as G,k as $,C as J,l as K,ao as M,ac as Q,x as U,c as a,w as s,r as X,n as r,al as Z,f as e,F as k,s as ee,t as te,g as se,ai as ne}from"./app-CxCpvqil.js";import{_ as oe}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-DNG5vX7L.js";const ae={"inline-flex":"",my:"2",p:"1",class:"post-tag cursor-pointer items-baseline leading-4"},re={"inline-flex":""},le={"inline-flex":"",text:"xs"},ie=S({__name:"YunLayoutPostTag",props:{title:{},count:{}},setup(b){return(l,f)=>(t(),_("span",ae,[c("span",re,"#"+p(l.title),1),c("span",le,"["+p(l.count)+"]",1)]))}}),ce={class:"yun-text-light",text:"center",p:"2"},ue={class:"justify-center items-end",flex:"~ wrap",gap:"1"},de=S({__name:"tags",setup(b){z([D({"@type":"CollectionPage"})]);const l=E(),f=H(),w=I(),{t:g}=O(),u=W(),{tags:d,getTagStyle:T}=G({primary:w.value.colors.primary}),i=$(()=>l.query.tag||""),P=J(),Y=$(()=>P.postList.filter(o=>o.tags?typeof o.tags=="string"?o.tags===i.value:o.tags.includes(i.value):!1)),y=K(),{show:V}=M(y);function B(n){f.push({query:{tag:n}}),V()}const L=Q(u);return(n,o)=>{const h=ne,v=oe,R=ie,C=U("RouterView"),A=q,F=j;return t(),_(k,null,[n.$slots["sidebar-child"]?(t(),a(h,{key:0},{default:s(()=>[X(n.$slots,"sidebar-child")]),_:3})):(t(),a(h,{key:1})),r(C,null,{default:s(({Component:N})=>[(t(),a(Z(N),null,{"main-header":s(()=>[r(v,{title:e(L)||e(g)("menu.tags"),icon:e(u).icon||"i-ri-tag-line",color:e(u).color},null,8,["title","icon","color"])]),"main-content":s(()=>[c("div",ce,p(e(g)("counter.tags",Array.from(e(d)).length)),1),c("div",ue,[(t(!0),_(k,null,ee(Array.from(e(d)).sort(),([m,x])=>(t(),a(R,{key:m,title:m,count:x.count,style:te(e(T)(x.count)),onClick:me=>B(m.toString())},null,8,["title","count","style","onClick"]))),128))]),r(C)]),"main-nav-before":s(()=>[i.value?(t(),a(F,{key:0,ref_key:"collapse",ref:y,m:"t-4",w:"full"},{default:s(()=>[r(v,{title:i.value,icon:"i-ri-hashtag"},null,8,["title"]),r(A,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:Y.value},null,8,["posts"])]),_:1},512)):se("v-if",!0)]),_:2},1024))]),_:1})],64)}}});export{de as default};