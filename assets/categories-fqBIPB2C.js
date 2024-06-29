import{_ as E}from"./YunCard.vue_vue_type_script_setup_true_lang-C_woAVh4.js";import{_ as K}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-DfY3Qq31.js";import{d as B,u as N,a as P,k as $,l as q,A as R,m as U,y as S,o as t,e as r,h as _,x as b,f as l,F as g,t as V,ag as j,c as y,w as p,g as A,n as m,C as x,P as D,ah as F,a6 as T,ac as W,ad as H,r as M,ae as O,ab as G}from"./app-Ch5NUF4F.js";import{u as J}from"./helper-BvxT1qMc.js";import{_ as Q}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-O7pbrH35.js";const X={class:"category-list-item inline-flex items-center cursor-pointer"},Z={key:0,"i-ri-folder-add-line":""},I={key:1,style:{color:"var(--va-c-primary)"},"i-ri-folder-reduce-line":""},ee={key:0},te=_("div",{"i-ri-file-text-line":""},null,-1),oe={m:"l-1",font:"serif black"},ne=B({__name:"YunCategory",props:{parentKey:{},category:{},level:{},collapsable:{type:Boolean,default:!0}},setup(Y){const u=Y,f=N(),n=P(),v=$(()=>{const e=n.query.category||"";return Array.isArray(e)?[e]:e.split("/")}),o=q(u.collapsable),{t:i}=R(),{locale:h}=R();function z(e){const c=h.value==="zh-CN"?"zh":h.value;return e[`title_${c}`]?e[`title_${c}`]:e.title}const d=q(),{show:s}=J(d);function k(e){f.push({query:{category:e}}),s()}return U(()=>{const e=document.querySelector(".post-collapse-container");e&&(d.value=e)}),(e,c)=>{const C=S("YunCategory",!0),w=S("RouterLink");return t(),r(g,null,[_("li",X,[_("span",{class:"folder-action inline-flex",onClick:c[0]||(c[0]=a=>o.value=!o.value)},[o.value?(t(),r("div",Z)):(t(),r("div",I))]),_("span",{class:"category-name",m:"l-1",onClick:c[1]||(c[1]=a=>k(e.parentKey))},b(e.category.name==="Uncategorized"?l(i)("category.uncategorized"):e.category.name)+" ["+b(e.category.total)+"] ",1)]),o.value?A("v-if",!0):(t(),r("ul",ee,[(t(!0),r(g,null,V(e.category.children.values(),(a,L)=>(t(),r("li",{key:L,class:"post-list-item",m:"l-4"},[l(j)(a)?(t(),y(C,{key:0,"parent-key":e.parentKey?`${e.parentKey}/${a.name}`:a.name,category:a,collapsable:!v.value.includes(a.name)},null,8,["parent-key","category","collapsable"])):(t(),r(g,{key:1},[a.title?(t(),y(w,{key:0,to:a.path||"",class:"inline-flex items-center"},{default:p(()=>[te,_("span",oe,b(z(a)),1)]),_:2},1032,["to"])):A("v-if",!0)],64))]))),128))]))],64)}}}),ae=B({__name:"YunCategories",props:{categories:{},level:{default:0},collapsable:{type:Boolean,default:!0}},setup(Y){const u=P(),f=$(()=>{const n=u.query.category||"";return Array.isArray(n)?[n]:n.split("/")});return(n,v)=>{const o=ne;return t(!0),r(g,null,V(n.categories.values(),i=>(t(),r("ul",{key:i.name,class:"category-list",m:"l-4"},[m(o,{"parent-key":i.name,category:i,level:n.level+1,collapsable:!f.value.includes(i.name)},null,8,["parent-key","category","level","collapsable"])]))),128)}}}),se={text:"center",class:"yun-text-light",p:"2"},pe=B({__name:"categories",setup(Y){const{t:u}=R(),f=x(),n=D(),v=P(),o=$(()=>v.query.category||""),i=F(),h=$(()=>f.postList.filter(s=>s.categories&&o.value!=="Uncategorized"?typeof s.categories=="string"?s.categories===o.value:s.categories.join("/").startsWith(o.value)&&s.categories[0]===o.value.split("/")[0]:!s.categories&&o.value==="Uncategorized"?s.categories===void 0:!1)),z=T(n);return W([H({"@type":"CollectionPage"})]),(d,s)=>{const k=G,e=Q,c=ae,C=S("RouterView"),w=K,a=E;return t(),r(g,null,[d.$slots["sidebar-child"]?(t(),y(k,{key:0},{default:p(()=>[M(d.$slots,"sidebar-child")]),_:3})):(t(),y(k,{key:1})),m(C,null,{default:p(({Component:L})=>[(t(),y(O(L),null,{"main-header":p(()=>[m(e,{title:l(z)||l(u)("menu.categories"),icon:l(n).icon||"i-ri-folder-2-line",color:l(n).color},null,8,["title","icon","color"])]),"main-content":p(()=>[_("div",se,b(l(u)("counter.categories",Array.from(l(i).children).length)),1),m(c,{categories:l(i).children},null,8,["categories"]),m(C)]),"main-nav-before":p(()=>[o.value?(t(),y(a,{key:0,class:"post-collapse-container",m:"t-4",w:"full"},{default:p(()=>[m(e,{title:o.value==="Uncategorized"?l(u)("category.uncategorized"):o.value.split("/").join(" / "),icon:"i-ri-folder-open-line"},null,8,["title"]),m(w,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:h.value},null,8,["posts"])]),_:1})):A("v-if",!0)]),_:2},1024))]),_:1})],64)}}});export{pe as default};
