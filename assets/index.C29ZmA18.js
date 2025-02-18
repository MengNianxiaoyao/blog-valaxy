import{_ as x}from"./ValaxyMain.vue_vue_type_script_setup_true_lang.DQlltbuP.js";import{u as B}from"./chunks/@vueuse/motion.B2a_ecFc.js";import{o as $}from"./index.CwQYRCK6.js";import{G as E,B as C,ac as u,ab as m,ak as w,af as s,ah as y,J as D,al as _,aa as b,w as v,a0 as f,ap as l,ag as t,Z as g,ai as a}from"./framework.Cj0Avats.js";import{G as j}from"./app.BGoOzt9I.js";import"./chunks/dayjs.Byk5cVHE.js";import{g as A,a as P}from"./chunks/vue-router.Df3Pfz3C.js";import"./chunks/nprogress.B3OVtPo_.js";import"./chunks/vue-i18n.BsioBTMF.js";import"./animation.BmKSPrMr.js";import"./chunks/pinia.BTq9uvfP.js";const I=["href","title"],L={class:"yun-link-left"},N={class:"yun-link-avatar size-16 overflow-hidden flex-center"},V=["src","alt"],z={class:"yun-link-info",m:"l-2"},Y={class:"yun-link-blog",font:"serif black"},M={class:"yun-link-desc"},G=E({__name:"YunLinkItem",props:{i:{},errorImg:{},link:{}},setup(k){const o=k;function d(e){$(e,o.errorImg)}const h=C();return B(h,{initial:{opacity:0,translateY:40},enter:{opacity:1,translateY:0,transition:{type:"spring",duration:400,damping:8,delay:o.i*50}}}),(e,r)=>(m(),u("li",{ref_key:"itemRef",ref:h,class:"yun-link-item inline-flex",style:w({"--primary-color":e.link.color})},[s("a",{class:"yun-link-url",p:"x-4 y-2",href:e.link.url,title:e.link.name,alt:"portrait",rel:"friend",target:"_blank"},[s("div",L,[s("div",N,[s("img",{class:"size-full object-center object-cover m-0! max-w-unset!",loading:"lazy",src:e.link.avatar,alt:e.link.name,onError:d},null,40,V)])]),s("div",z,[s("div",Y,y(e.link.blog),1),s("div",M,y(e.link.desc),1)])],8,I)],4))}}),O={class:"yun-links"},R={class:"yun-link-items",flex:"center wrap"},S=E({__name:"YunLinks",props:{links:{},random:{type:Boolean},errorImg:{}},setup(k){const o=k,{data:d}=j(o.links,o.random);return(h,e)=>{const r=G;return m(),u("div",O,[s("ul",R,[(m(!0),u(D,null,_(v(d),(p,n)=>(m(),b(r,{key:n,i:n,link:p,"error-img":h.errorImg},null,8,["i","link","error-img"]))),128))])])}}}),T=A("/links",async k=>JSON.parse('{"title":"友链","description":"友人帐、链接","frontmatter":{"title":"友链","keywords":"链接","icon":"i-ri-link","description":"友人帐、链接","links":"https://friends.mnxy.eu.org/links.json","sites":"https://friends.mnxy.eu.org/sites.json","away":"https://friends.mnxy.eu.org/away.json","random":true,"nav":false,"comment":false,"time_warning":false},"headers":[{"level":2,"title":"友人帐","slug":"友人帐","link":"#友人帐","children":[]},{"level":2,"title":"技术支持(旧站点)","slug":"技术支持-旧站点","link":"#技术支持-旧站点","children":[]},{"level":2,"title":"失联友链","slug":"失联友链","link":"#失联友链","children":[]},{"level":2,"title":"我的友链","slug":"我的友链","link":"#我的友链","children":[{"level":3,"title":"通用格式","slug":"通用格式","link":"#通用格式","children":[]},{"level":3,"title":"Valaxy格式","slug":"valaxy格式","link":"#valaxy格式","children":[]}]}],"relativePath":"pages/links/index.md","lastUpdated":1739739720000}'),{lazy:(k,o)=>k.name===o.name}),as={__name:"index",setup(k,{expose:o}){var p;const{data:d}=T(),h=P(),e=Object.assign(h.meta.frontmatter||{},((p=d.value)==null?void 0:p.frontmatter)||{});h.meta.frontmatter=e,f("pageData",d.value),f("valaxy:frontmatter",e),globalThis.$frontmatter=e;const r={title:"友链",keywords:"链接",icon:"i-ri-link",description:"友人帐、链接",links:"https://friends.mnxy.eu.org/links.json",sites:"https://friends.mnxy.eu.org/sites.json",away:"https://friends.mnxy.eu.org/away.json",random:!0,nav:!1,comment:!1,time_warning:!1};return o({frontmatter:r}),(n,i)=>{const c=S,F=x;return m(),b(F,{frontmatter:v(e)},{"main-content-md":l(()=>[i[0]||(i[0]=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},[s("i",{class:"icon i-arcticons-pixel-tips"}),s("span",{lang:"en"},"TIP"),s("span",{lang:"zh-CN"},"提示")]),s("p",null,"站点随机展示")],-1)),i[1]||(i[1]=s("h2",{id:"友人帐",tabindex:"-1"},[a("友人帐 "),s("a",{class:"header-anchor",href:"#友人帐","aria-label":'Permalink to "友人帐"'},"​")],-1)),g(c,{links:r.links,random:r.random},null,8,["links","random"]),i[2]||(i[2]=s("h2",{id:"技术支持-旧站点",tabindex:"-1"},[a("技术支持(旧站点) "),s("a",{class:"header-anchor",href:"#技术支持-旧站点","aria-label":'Permalink to "技术支持(旧站点)"'},"​")],-1)),g(c,{links:r.sites,random:r.random},null,8,["links","random"]),i[3]||(i[3]=s("h2",{id:"失联友链",tabindex:"-1"},[a("失联友链 "),s("a",{class:"header-anchor",href:"#失联友链","aria-label":'Permalink to "失联友链"'},"​")],-1)),g(c,{links:r.away,random:r.random},null,8,["links","random"]),i[4]||(i[4]=s("h2",{id:"我的友链",tabindex:"-1"},[a("我的友链 "),s("a",{class:"header-anchor",href:"#我的友链","aria-label":'Permalink to "我的友链"'},"​")],-1)),i[5]||(i[5]=s("h3",{id:"通用格式",tabindex:"-1"},[a("通用格式 "),s("a",{class:"header-anchor",href:"#通用格式","aria-label":'Permalink to "通用格式"'},"​")],-1)),i[6]||(i[6]=s("div",{style:{"max-height":"200px"},class:"language-yaml vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yaml"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"- "),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"name"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"梦念逍遥のBLOG")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  link"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"https://blog.mnxy.eu.org/")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  avatar"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"https://fastly.jsdelivr.net/gh/MengNianxiaoyao/blogimages@main/siteicon/icon.svg")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  descr"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"无梦之境")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  siteshot"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"https://fastly.jsdelivr.net/gh/MengNianxiaoyao/blogimages@main/siteicon/site.png")])])]),s("button",{class:"collapse"}),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br")])],-1)),i[7]||(i[7]=s("h3",{id:"valaxy格式",tabindex:"-1"},[a("Valaxy格式 "),s("a",{class:"header-anchor",href:"#valaxy格式","aria-label":'Permalink to "Valaxy格式"'},"​")],-1)),i[8]||(i[8]=s("div",{style:{"max-height":"200px"},class:"language-yaml vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yaml"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"- "),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"blog"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"梦念逍遥のBLOG")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  name"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"梦念逍遥")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  url"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"https://blog.mnxy.eu.org/")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  avatar"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"https://fastly.jsdelivr.net/gh/MengNianxiaoyao/blogimages@main/siteicon/icon.svg")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  desc"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"无梦之境")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  color"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'#0078e7'")])])]),s("button",{class:"collapse"}),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br")])],-1)),i[9]||(i[9]=s("blockquote",null,[s("p",null,[a("交换友链请按"),s("code",null,"markdown"),a("格式发送，目前本站友链申请仅支持"),s("code",null,"Valaxy格式"),a("。头像以及站点截图请不要使用防盗链图床，否则访问失败将使用默认图片")]),s("p",null,[a("本页面停止友链申请，请访问"),s("a",{href:"https://friends.mnxy.eu.org",target:"_blank",rel:"noreferrer"},"梦念逍遥のFriends"),a("进行自助申请")])],-1))]),"main-header":l(()=>[t(n.$slots,"main-header")]),"main-header-after":l(()=>[t(n.$slots,"main-header-after")]),"main-nav":l(()=>[t(n.$slots,"main-nav")]),"main-content-before":l(()=>[t(n.$slots,"main-content-before")]),"main-content":l(()=>[t(n.$slots,"main-content")]),"main-content-after":l(()=>[t(n.$slots,"main-content-after")]),"main-nav-before":l(()=>[t(n.$slots,"main-nav-before")]),"main-nav-after":l(()=>[t(n.$slots,"main-nav-after")]),comment:l(()=>[t(n.$slots,"comment")]),footer:l(()=>[t(n.$slots,"footer")]),aside:l(()=>[t(n.$slots,"aside")]),"aside-custom":l(()=>[t(n.$slots,"aside-custom")]),default:l(()=>[t(n.$slots,"default")]),_:3},8,["frontmatter"])}}};export{as as default,T as usePageData};
