const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.DxZWTpuq.js","assets/framework.Cj0Avats.js"])))=>i.map(i=>d[i]);
import{_ as w}from"./ValaxyMain.vue_vue_type_script_setup_true_lang.DQlltbuP.js";import{A as C,G as S,B as h,a1 as R,D as k,ac as z,ab as y,w as i,a0 as $,aa as D,ap as t,ag as n,Z as L}from"./framework.Cj0Avats.js";import"./chunks/@vueuse/motion.B2a_ecFc.js";import{m as V}from"./app.BGoOzt9I.js";import"./chunks/dayjs.Byk5cVHE.js";import{i as O}from"./chunks/nprogress.B3OVtPo_.js";import{g as P,a as j}from"./chunks/vue-router.Df3Pfz3C.js";import"./chunks/vue-i18n.BsioBTMF.js";import"./chunks/pinia.BTq9uvfP.js";function A(){const o=V();return C(()=>{const e=o.value.addons["valaxy-addon-bangumi"].options;return e?{...e,bilibiliEnabled:e.bilibiliEnabled??!0,bgmEnabled:e.bgmEnabled??!0,pageSize:e.pageSize??15,customEnabled:e.customEnabled??!1,customLabel:e.customLabel??"自定义"}:(console.warn("`valaxy-addon-bangumi` options not found"),{api:""})})}const U=["api","bgm-enabled","bgm-uid","bilibili-enabled","bilibili-uid","custom-enabled","custom-label","page-size"],I=S({__name:"ValaxyBangumi",setup(o){const e=h(),m=h(!1),u=A(),{api:s,bgmEnabled:p,bgmUid:d,bilibiliEnabled:a,bilibiliUid:g,customCss:c,customEnabled:f,customLabel:E,pageSize:B}=u.value;function _(){var l,b,v;if(!c||m.value)return;const r=new CSSStyleSheet;r.replaceSync(c),(b=(l=e.value)==null?void 0:l.shadowRoot)==null||b.adoptedStyleSheets.push(r),(v=e.value)!=null&&v.shadowRoot&&(m.value=!0)}return(async()=>{if(!O)return;const{defineCustomElements:r}=await R(async()=>{const{defineCustomElements:l}=await import("./index.DxZWTpuq.js").then(b=>b.i);return{defineCustomElements:l}},__vite__mapDeps([0,1]));r(),_()})(),k(()=>_()),(r,l)=>(y(),z("bilibili-bangumi",{ref_key:"bangumiRef",ref:e,api:i(s),"bgm-enabled":i(p),"bgm-uid":i(d),"bilibili-enabled":i(a),"bilibili-uid":i(g),"custom-enabled":i(f),"custom-label":i(E),"page-size":i(B)},null,8,U))}}),M=P("/bangumi",async o=>JSON.parse('{"title":"追番列表","description":"Bangumi 追番列表","frontmatter":{"title":"追番列表","icon":"i-ri-bilibili-line","keywords":"Bangumi","description":"Bangumi 追番列表","nav":false,"toc":false,"comment":false,"time_warning":false},"headers":[],"relativePath":"pages/bangumi/index.md","lastUpdated":1739739720000}'),{lazy:(o,e)=>o.name===e.name}),K={__name:"index",setup(o,{expose:e}){var d;const{data:m}=M(),u=j(),s=Object.assign(u.meta.frontmatter||{},((d=m.value)==null?void 0:d.frontmatter)||{});return u.meta.frontmatter=s,$("pageData",m.value),$("valaxy:frontmatter",s),globalThis.$frontmatter=s,e({frontmatter:{title:"追番列表",icon:"i-ri-bilibili-line",keywords:"Bangumi",description:"Bangumi 追番列表",nav:!1,toc:!1,comment:!1,time_warning:!1}}),(a,g)=>{const c=I,f=w;return y(),D(f,{frontmatter:i(s)},{"main-content-md":t(()=>[L(c)]),"main-header":t(()=>[n(a.$slots,"main-header")]),"main-header-after":t(()=>[n(a.$slots,"main-header-after")]),"main-nav":t(()=>[n(a.$slots,"main-nav")]),"main-content-before":t(()=>[n(a.$slots,"main-content-before")]),"main-content":t(()=>[n(a.$slots,"main-content")]),"main-content-after":t(()=>[n(a.$slots,"main-content-after")]),"main-nav-before":t(()=>[n(a.$slots,"main-nav-before")]),"main-nav-after":t(()=>[n(a.$slots,"main-nav-after")]),comment:t(()=>[n(a.$slots,"comment")]),footer:t(()=>[n(a.$slots,"footer")]),aside:t(()=>[n(a.$slots,"aside")]),"aside-custom":t(()=>[n(a.$slots,"aside-custom")]),default:t(()=>[n(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{K as default,M as usePageData};
