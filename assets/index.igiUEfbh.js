const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.DCM2PWBq.js","assets/framework.Wgu5ILjI.js"])))=>i.map(i=>d[i]);
import{_ as B}from"./ValaxyMain.vue_vue_type_style_index_0_lang.DNNCengL.js";import{A as C,I as S,H as $,a1 as w,D as R,ad as k,ac as y,F as i,ab as z,am as t,ae as n,Z as L,a0 as V}from"./framework.Wgu5ILjI.js";import"./chunks/@vueuse/motion.BltUbIEt.js";import{m as D}from"./app.53q-VOU4.js";import"./chunks/dayjs.Byk5cVHE.js";import{i as O}from"./chunks/nprogress.D5EDvs9V.js";import{g as P,a as j,u as A}from"./chunks/vue-router.BWFxP7XC.js";import"./YunComment.vue_vue_type_style_index_0_lang.0BcroXgB.js";import"./index.C5okkQwF.js";import"./chunks/vue-i18n.CibY5xOG.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.BE-4Vecm.js";import"./post.Bt4JjL5H.js";import"./chunks/pinia.3e7st_eH.js";function I(){const o=D();return C(()=>{const e=o.value.addons["valaxy-addon-bangumi"].options;return e?{...e,bilibiliEnabled:e.bilibiliEnabled??!0,bgmEnabled:e.bgmEnabled??!0,pageSize:e.pageSize??15,customEnabled:e.customEnabled??!1,customLabel:e.customLabel??"自定义"}:(console.warn("`valaxy-addon-bangumi` options not found"),{api:""})})}const U=["api","bgm-enabled","bgm-uid","bilibili-enabled","bilibili-uid","custom-enabled","custom-label","page-size"],M=S({__name:"ValaxyBangumi",setup(o){const e=$(),m=$(!1),b=I(),{api:u,bgmEnabled:s,bgmUid:v,bilibiliEnabled:d,bilibiliUid:a,customCss:f,customEnabled:p,customLabel:g,pageSize:E}=b.value;function _(){var l,c,h;if(!f||m.value)return;const r=new CSSStyleSheet;r.replaceSync(f),(c=(l=e.value)==null?void 0:l.shadowRoot)==null||c.adoptedStyleSheets.push(r),(h=e.value)!=null&&h.shadowRoot&&(m.value=!0)}return(async()=>{if(!O)return;const{defineCustomElements:r}=await w(async()=>{const{defineCustomElements:l}=await import("./index.DCM2PWBq.js").then(c=>c.i);return{defineCustomElements:l}},__vite__mapDeps([0,1]));r(),_()})(),R(()=>_()),(r,l)=>(y(),k("bilibili-bangumi",{ref_key:"bangumiRef",ref:e,api:i(u),"bgm-enabled":i(s),"bgm-uid":i(v),"bilibili-enabled":i(d),"bilibili-uid":i(a),"custom-enabled":i(p),"custom-label":i(g),"page-size":i(E)},null,8,U))}}),N=P("/bangumi",async o=>JSON.parse('{"title":"追番列表","description":"Bangumi 追番列表","frontmatter":{"title":"追番列表","icon":"i-ri-bilibili-line","keywords":"Bangumi","description":"Bangumi 追番列表","nav":false,"toc":false,"comment":false,"time_warning":false},"headers":[],"relativePath":"pages/bangumi/index.md","lastUpdated":1744535928000}'),{lazy:(o,e)=>o.name===e.name}),ee={__name:"index",setup(o,{expose:e}){var d;const{data:m}=N(),b=A(),u=j(),s=Object.assign(u.meta.frontmatter||{},((d=m.value)==null?void 0:d.frontmatter)||{});return u.meta.frontmatter=s,b.currentRoute.value.data=m.value,V("valaxy:frontmatter",s),globalThis.$frontmatter=s,e({frontmatter:{title:"追番列表",icon:"i-ri-bilibili-line",keywords:"Bangumi",description:"Bangumi 追番列表",nav:!1,toc:!1,comment:!1,time_warning:!1}}),(a,f)=>{const p=M,g=B;return y(),z(g,{frontmatter:i(s)},{"main-content-md":t(()=>[L(p)]),"main-header":t(()=>[n(a.$slots,"main-header")]),"main-header-after":t(()=>[n(a.$slots,"main-header-after")]),"main-nav":t(()=>[n(a.$slots,"main-nav")]),"main-content-before":t(()=>[n(a.$slots,"main-content-before")]),"main-content":t(()=>[n(a.$slots,"main-content")]),"main-content-after":t(()=>[n(a.$slots,"main-content-after")]),"main-nav-before":t(()=>[n(a.$slots,"main-nav-before")]),"main-nav-after":t(()=>[n(a.$slots,"main-nav-after")]),comment:t(()=>[n(a.$slots,"comment")]),footer:t(()=>[n(a.$slots,"footer")]),aside:t(()=>[n(a.$slots,"aside")]),"aside-custom":t(()=>[n(a.$slots,"aside-custom")]),default:t(()=>[n(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{ee as default,N as usePageData};
