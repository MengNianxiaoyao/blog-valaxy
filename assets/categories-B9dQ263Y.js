import{_ as E}from"./YunCard.vue_vue_type_script_setup_true_lang-8GHyct-5.js";import{_ as K}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-D4wVh2u4.js";import{d as B,u as N,a as P,k as $,l as q,A as R,m as T,y as S,o as t,e as r,h as _,x as b,f as s,F as f,t as V,ag as U,c as g,w as p,g as A,n as m,C as j,P as x,ah as D,a6 as F,ac as W,ad as H,r as M,ae as O,ab as G}from"./app-BNLpjsIj.js";import{u as J}from"./helper-Co3zsFrm.js";import{_ as Q}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-BTXRYXn2.js";const X={class:"category-list-item inline-flex items-center cursor-pointer"},Z={key:0,"i-ri-folder-add-line":""},I={key:1,style:{color:"var(--va-c-primary)"},"i-ri-folder-reduce-line":""},ee={key:0},te=_("div",{"i-ri-file-text-line":""},null,-1),oe={m:"l-1",font:"serif black"},ne=B({__name:"YunCategory",props:{parentKey:{},category:{},level:{},collapsable:{type:Boolean,default:!0}},setup(Y){const u=Y,y=N(),n=P(),v=$(()=>{const e=n.query.category||"";return Array.isArray(e)?[e]:e.split("/")}),o=q(u.collapsable),{t:i}=R(),{locale:C}=R();function z(e){const c=C.value==="zh-CN"?"zh":C.value;return e[`title_${c}`]?e[`title_${c}`]:e.title}const d=q(),{show:l}=J(d);function h(e){y.push({query:{category:e}}),l()}return T(()=>{const e=document.querySelector(".post-collapse-container");e&&(d.value=e)}),(e,c)=>{const k=S("YunCategory",!0),w=S("RouterLink");return t(),r(f,null,[_("li",X,[_("span",{class:"folder-action inline-flex",onClick:c[0]||(c[0]=a=>o.value=!o.value)},[o.value?(t(),r("div",Z)):(t(),r("div",I))]),_("span",{class:"category-name",m:"l-1",onClick:c[1]||(c[1]=a=>h(e.parentKey))},b(e.category.name==="Uncategorized"?s(i)("category.uncategorized"):e.category.name)+" ["+b(e.category.total)+"] ",1)]),o.value?A("v-if",!0):(t(),r("ul",ee,[(t(!0),r(f,null,V(e.category.children.values(),(a,L)=>(t(),r("li",{key:L,class:"post-list-item",m:"l-4"},[s(U)(a)?(t(),g(k,{key:0,"parent-key":e.parentKey?`${e.parentKey}/${a.name}`:a.name,category:a,collapsable:!v.value.includes(a.name)},null,8,["parent-key","category","collapsable"])):(t(),r(f,{key:1},[a.title?(t(),g(w,{key:0,to:a.path||"",class:"inline-flex items-center"},{default:p(()=>[te,_("span",oe,b(z(a)),1)]),_:2},1032,["to"])):A("v-if",!0)],64))]))),128))]))],64)}}}),ae=B({__name:"YunCategories",props:{categories:{},level:{default:0},collapsable:{type:Boolean,default:!0}},setup(Y){const u=P(),y=$(()=>{const n=u.query.category||"";return Array.isArray(n)?[n]:n.split("/")});return(n,v)=>{const o=ne;return t(!0),r(f,null,V(n.categories.values(),i=>(t(),r("ul",{key:i.name,class:"category-list",m:"l-4"},[m(o,{"parent-key":i.name,category:i,level:n.level+1,collapsable:!y.value.includes(i.name)},null,8,["parent-key","category","level","collapsable"])]))),128)}}}),se={text:"center",class:"yun-text-light",p:"2"},pe=B({__name:"categories",setup(Y){const{t:u}=R(),y=j(),n=x(),v=P(),o=$(()=>v.query.category||""),i=D(),C=$(()=>y.postList.filter(l=>l.categories&&o.value!=="Uncategorized"?typeof l.categories=="string"?l.categories===o.value:l.categories.join("/").startsWith(o.value)&&l.categories[0]===o.value.split("/")[0]:!l.categories&&o.value==="Uncategorized"?l.categories===void 0:!1)),z=F(n);return W([H({"@type":"CollectionPage"})]),(d,l)=>{const h=G,e=Q,c=ae,k=S("RouterView"),w=K,a=E;return t(),r(f,null,[d.$slots["sidebar-child"]?(t(),g(h,{key:0},{default:p(()=>[M(d.$slots,"sidebar-child")]),_:3})):(t(),g(h,{key:1})),m(k,null,{default:p(({Component:L})=>[(t(),g(O(L),null,{"main-header":p(()=>[m(e,{title:s(z)||s(u)("menu.categories"),icon:s(n).icon||"i-ri-folder-2-line",color:s(n).color,"page-title-class":s(n).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":p(()=>[_("div",se,b(s(u)("counter.categories",Array.from(s(i).children).length)),1),m(c,{categories:s(i).children},null,8,["categories"]),m(k)]),"main-nav-before":p(()=>[o.value?(t(),g(a,{key:0,class:"post-collapse-container",m:"t-4",w:"full"},{default:p(()=>[m(e,{title:o.value==="Uncategorized"?s(u)("category.uncategorized"):o.value.split("/").join(" / "),icon:"i-ri-folder-open-line"},null,8,["title"]),m(w,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:C.value},null,8,["posts"])]),_:1})):A("v-if",!0)]),_:2},1024))]),_:1})],64)}}});export{pe as default};
