import{l as k,u as T,x as U,b as w,y as z,c as A,h as D,e as M,f as N}from"./app.53q-VOU4.js";import"./chunks/@vueuse/motion.BltUbIEt.js";import{I as y,A as h,ad as _,ac as s,af as a,ai as i,ag as u,F as o,ab as m,aa as H,Z as r,am as p,au as I,ae as x,L as j}from"./framework.Wgu5ILjI.js";import{u as E}from"./chunks/vue-i18n.CibY5xOG.js";import{_ as O}from"./YunSponsor.vue_vue_type_style_index_0_lang.C2-KSMbH.js";import{_ as W,a as Z,b as q}from"./YunPostMeta.vue_vue_type_style_index_0_lang.BCvgQXLg.js";import{d as C}from"./chunks/dayjs.Byk5cVHE.js";import"./chunks/vue-router.BWFxP7XC.js";import"./chunks/nprogress.D5EDvs9V.js";import"./chunks/pinia.3e7st_eH.js";import"./index.DdEkb1AR.js";import"./animation.BmKSPrMr.js";const G={class:"post-copyright"},J={class:"post-copyright-author"},K={key:0,class:"post-copyright-link"},Q=["href","title"],X={class:"post-copyright-license"},ee=["innerHTML"],te=y({__name:"ValaxyCopyright",props:{url:{default:""}},setup(v){const{t:e,locale:t}=E(),n=k(),l=n.value.license.type==="zero"?"1.0":"4.0",f=n.value.license.type==="zero"?"publicdomain":"licenses",g=h(()=>{const c=n.value.license.language?n.value.license.language:t.value==="zh-CN"?"zh":"en";return`https://creativecommons.org/${f}/${n.value.license.type}/${l}/deed.${c}`}),d=h(()=>e("post.copyright.license_content",[`<a href="${g.value}" target="_blank" rel="noopener" title="CC ${`${n.value.license.type.toUpperCase()} ${l}`} ">CC ${n.value.license.type.toUpperCase()}</a>`]));return(c,$)=>(s(),_("ul",G,[a("li",J,[a("strong",null,u(o(e)("post.copyright.author")+o(e)("symbol.colon")),1),a("span",null,u(o(n).author.name),1)]),c.url?(s(),_("li",K,[a("strong",null,u(o(e)("post.copyright.link")+o(e)("symbol.colon")),1),a("a",{href:c.url,target:"_blank",title:o(e)("post.copyright.link")},u(decodeURI(c.url)),9,Q)])):i("v-if",!0),a("li",X,[a("strong",null,u(o(e)("post.copyright.license_title")+o(e)("symbol.colon")),1),a("span",{innerHTML:d.value},null,8,ee)])]))}}),oe={class:"inline-flex",text:"sm",py:"1"},ne={key:1,mx:"2"},se=y({__name:"YunPostCategoriesAndTags",props:{frontmatter:{}},setup(v){return(e,t)=>{const n=W,l=Z;return s(),_("div",oe,[e.frontmatter.categories?(s(),m(n,{key:0,categories:e.frontmatter.categories},null,8,["categories"])):i("v-if",!0),e.frontmatter.categories&&e.frontmatter.tags?(s(),_("span",ne)):i("v-if",!0),e.frontmatter.tags?(s(),m(l,{key:2,tags:e.frontmatter.tags},null,8,["tags"])):i("v-if",!0)])}}}),he=y({__name:"post",setup(v){const e=k(),t=T(),n=U(),l=h(()=>typeof t.value.sponsor=="boolean"?t.value.sponsor:e.value.sponsor.enable),f={"@type":"BlogPosting",headline:t.value.title,description:t.value.description,author:[{name:e.value.author.name,url:e.value.author.link}],datePublished:C(t.value.date||"").toDate(),dateModified:C(t.value.updated||"").toDate()},g=t.value.image||t.value.cover;return g&&(f.image=g),w(z(f)),(d,c)=>{const $=A,b=q,Y=se,L=O,P=te,V=H("RouterView"),S=D,B=M,F=N;return s(),_(j,null,[r(B,null,{default:p(()=>[r($),r(V,null,{default:p(({Component:R})=>[(s(),m(I(R),null,{"main-header-after":p(()=>[r(b,{frontmatter:o(t)},null,8,["frontmatter"]),r(Y,{class:"mt-2",frontmatter:o(t)},null,8,["frontmatter"])]),"main-content-after":p(()=>[l.value?(s(),m(L,{key:0,m:"t-6"})):i("v-if",!0),o(t).copyright||o(t).copyright!==!1&&o(e).license.enabled?(s(),m(P,{key:1,url:o(n),m:"y-4"},null,8,["url"])):i("v-if",!0)]),"aside-custom":p(()=>[x(d.$slots,"aside-custom")]),_:2},1024))]),_:3}),r(S)]),_:3}),r(F)],64)}}});export{he as default};
