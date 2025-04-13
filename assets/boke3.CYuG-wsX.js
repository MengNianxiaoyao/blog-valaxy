import{_ as u}from"./ValaxyMain.vue_vue_type_style_index_0_lang.DNNCengL.js";import"./chunks/@vueuse/motion.BltUbIEt.js";import{g as b,a as f,u as g}from"./chunks/vue-router.BWFxP7XC.js";import{ab as k,am as s,ae as t,af as e,aj as a,F as v,ac as y,a0 as x}from"./framework.Wgu5ILjI.js";import"./app.53q-VOU4.js";import"./chunks/dayjs.Byk5cVHE.js";import"./chunks/vue-i18n.CibY5xOG.js";import"./chunks/nprogress.D5EDvs9V.js";import"./chunks/pinia.3e7st_eH.js";import"./YunComment.vue_vue_type_style_index_0_lang.0BcroXgB.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.BE-4Vecm.js";import"./post.Bt4JjL5H.js";const F=b("/posts/boke/boke3",async n=>JSON.parse('{"title":"【个人博客网站】从零开始搭建博客网站（三）：安装后台插件","description":"","frontmatter":{"title":"【个人博客网站】从零开始搭建博客网站（三）：安装后台插件","categories":["博客教程","搭建教程"],"tags":["文档","博客教程"],"cover":"https://i0.hdslb.com/bfs/article/8b2ef06b4b7a4167788d7adb98dc2b85381745966.jpg","date":"2022-08-29 16:00:00 +8","updated":"2022-08-29 16:00:00 +8"},"headers":[{"level":2,"title":"说明","slug":"说明","link":"#说明","children":[]},{"level":2,"title":"安装后台插件","slug":"安装后台插件","link":"#安装后台插件","children":[]},{"level":2,"title":"新建","slug":"新建","link":"#新建","children":[{"level":3,"title":"_admin-config.yml","slug":"admin-config-yml","link":"#admin-config-yml","children":[]},{"level":3,"title":"hexo -deploy.sh","slug":"hexo-deploy-sh","link":"#hexo-deploy-sh","children":[]}]},{"level":2,"title":"进入后台","slug":"进入后台","link":"#进入后台","children":[]}],"relativePath":"pages/posts/boke/boke3.md","lastUpdated":1744535928000}'),{lazy:(n,o)=>n.name===o.name}),z={__name:"boke3",setup(n,{expose:o}){var h;const{data:r}=F(),c=g(),d=f(),i=Object.assign(d.meta.frontmatter||{},((h=r.value)==null?void 0:h.frontmatter)||{});return d.meta.frontmatter=i,c.currentRoute.value.data=r.value,x("valaxy:frontmatter",i),globalThis.$frontmatter=i,o({frontmatter:{title:"【个人博客网站】从零开始搭建博客网站（三）：安装后台插件",categories:["博客教程","搭建教程"],tags:["文档","博客教程"],cover:"https://i0.hdslb.com/bfs/article/8b2ef06b4b7a4167788d7adb98dc2b85381745966.jpg",date:"2022-08-29 16:00:00 +8",updated:"2022-08-29 16:00:00 +8"}}),(l,m)=>{const p=u;return y(),k(p,{frontmatter:v(i)},{"main-content-md":s(()=>m[0]||(m[0]=[e("h2",{id:"说明",tabindex:"-1"},[a("说明 "),e("a",{class:"header-anchor",href:"#说明","aria-label":'Permalink to "说明"'},"​")],-1),e("p",null,"本篇是可选操作教程，为安装Hexo的后台，可方便服务器写文操作",-1),e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},[e("i",{class:"icon i-arcticons-pixel-tips"}),e("span",{lang:"en"},"TIP"),e("span",{lang:"zh-CN"},"提示")]),e("p",null,"前提条件：完成前面两篇的全部操作")],-1),e("h2",{id:"安装后台插件",tabindex:"-1"},[a("安装后台插件 "),e("a",{class:"header-anchor",href:"#安装后台插件","aria-label":'Permalink to "安装后台插件"'},"​")],-1),e("p",null,"终端输入",-1),e("div",{style:{"max-height":"200px"},class:"language-shell vp-adaptive-theme line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"shell"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"npm"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," hexo-admin")])])]),e("button",{class:"collapse"}),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br")])],-1),e("h2",{id:"新建",tabindex:"-1"},[a("新建 "),e("a",{class:"header-anchor",href:"#新建","aria-label":'Permalink to "新建"'},"​")],-1),e("h3",{id:"admin-config-yml",tabindex:"-1"},[a("_admin-config.yml "),e("a",{class:"header-anchor",href:"#admin-config-yml","aria-label":'Permalink to "_admin-config.yml"'},"​")],-1),e("p",null,[a("在"),e("code",null,"Hexo"),a("的根目录，创建一个"),e("code",null,"_admin-config.yml"),a("文件")],-1),e("h3",{id:"hexo-deploy-sh",tabindex:"-1"},[a("hexo -deploy.sh "),e("a",{class:"header-anchor",href:"#hexo-deploy-sh","aria-label":'Permalink to "hexo -deploy.sh"'},"​")],-1),e("p",null,[a("在"),e("code",null,"Hexo"),a("的根目录，创建一个"),e("code",null,"hexo -deploy.sh"),a("文件")],-1),e("div",{style:{"max-height":"200px"},class:"language-shell vp-adaptive-theme line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"shell"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"#!/usr/bin/env sh")]),a(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"hexo"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," g")]),a(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"hexo"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," de")])])]),e("button",{class:"collapse"}),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br")])],-1),e("h2",{id:"进入后台",tabindex:"-1"},[a("进入后台 "),e("a",{class:"header-anchor",href:"#进入后台","aria-label":'Permalink to "进入后台"'},"​")],-1),e("p",null,[a("终端运行"),e("code",null,"hexo server"),a("命令后，网址输入"),e("code",null,"博客域名 + /admin"),a("即可访问")],-1)])),"main-header":s(()=>[t(l.$slots,"main-header")]),"main-header-after":s(()=>[t(l.$slots,"main-header-after")]),"main-nav":s(()=>[t(l.$slots,"main-nav")]),"main-content-before":s(()=>[t(l.$slots,"main-content-before")]),"main-content":s(()=>[t(l.$slots,"main-content")]),"main-content-after":s(()=>[t(l.$slots,"main-content-after")]),"main-nav-before":s(()=>[t(l.$slots,"main-nav-before")]),"main-nav-after":s(()=>[t(l.$slots,"main-nav-after")]),comment:s(()=>[t(l.$slots,"comment")]),footer:s(()=>[t(l.$slots,"footer")]),aside:s(()=>[t(l.$slots,"aside")]),"aside-custom":s(()=>[t(l.$slots,"aside-custom")]),default:s(()=>[t(l.$slots,"default")]),_:3},8,["frontmatter"])}}};export{z as default,F as usePageData};
