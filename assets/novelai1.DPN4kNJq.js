import{_ as f}from"./ValaxyMain.vue_vue_type_style_index_0_lang.DNNCengL.js";import"./chunks/@vueuse/motion.BltUbIEt.js";import{g as u,a as b,u as k}from"./chunks/vue-router.BWFxP7XC.js";import{ab as g,am as s,ae as i,af as e,aj as a,F as v,ac as F,a0 as C}from"./framework.Wgu5ILjI.js";import"./app.53q-VOU4.js";import"./chunks/dayjs.Byk5cVHE.js";import"./chunks/vue-i18n.CibY5xOG.js";import"./chunks/nprogress.D5EDvs9V.js";import"./chunks/pinia.3e7st_eH.js";import"./YunComment.vue_vue_type_style_index_0_lang.0BcroXgB.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.BE-4Vecm.js";import"./post.Bt4JjL5H.js";const y=u("/posts/novelai/novelai1",async r=>JSON.parse('{"title":"【Novelai】新版本支持xformers！降低显卡占用黑科技！","description":"","frontmatter":{"title":"【Novelai】新版本支持xformers！降低显卡占用黑科技！","categories":"AI教程","tags":["Novelai","文档","AI教程"],"cover":"https://i0.hdslb.com/bfs/article/8426c033f0707a3bcf67feb214d9097b381745966.jpg","date":"2022-10-16 14:30:00 +8","updated":"2022-10-16 14:30:00 +8"},"headers":[{"level":2,"title":"更新","slug":"更新","link":"#更新","children":[]},{"level":2,"title":"安装xformers","slug":"安装xformers","link":"#安装xformers","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]}],"relativePath":"pages/posts/novelai/novelai1.md","lastUpdated":1744535928000}'),{lazy:(r,l)=>r.name===l.name}),D={__name:"novelai1",setup(r,{expose:l}){var p;const{data:o}=y(),h=k(),m=b(),n=Object.assign(m.meta.frontmatter||{},((p=o.value)==null?void 0:p.frontmatter)||{});return m.meta.frontmatter=n,h.currentRoute.value.data=o.value,C("valaxy:frontmatter",n),globalThis.$frontmatter=n,l({frontmatter:{title:"【Novelai】新版本支持xformers！降低显卡占用黑科技！",categories:"AI教程",tags:["Novelai","文档","AI教程"],cover:"https://i0.hdslb.com/bfs/article/8426c033f0707a3bcf67feb214d9097b381745966.jpg",date:"2022-10-16 14:30:00 +8",updated:"2022-10-16 14:30:00 +8"}}),(t,c)=>{const d=f;return F(),g(d,{frontmatter:v(n)},{"main-content-md":s(()=>c[0]||(c[0]=[e("h2",{id:"更新",tabindex:"-1"},[a("更新 "),e("a",{class:"header-anchor",href:"#更新","aria-label":'Permalink to "更新"'},"​")],-1),e("p",null,[a("前往"),e("a",{href:"https://github.com/AUTOMATIC1111/stable-diffusion-webui",target:"_blank",rel:"noreferrer"},"GitHub仓库"),a("，下载最新版代码压缩包；或者使用"),e("code",null,"git pull"),a("命令更新")],-1),e("h2",{id:"安装xformers",tabindex:"-1"},[a("安装xformers "),e("a",{class:"header-anchor",href:"#安装xformers","aria-label":'Permalink to "安装xformers"'},"​")],-1),e("p",null,[a("新版可直接添加xformers安装命令进行安装，按照以下格式添加到"),e("code",null,"webui-user.bat"),a("文件中")],-1),e("div",{style:{"max-height":"200px"},class:"language-bash vp-adaptive-theme line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"@echo"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," off")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"set"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," PYTHON=")]),a(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"set"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," GIT=")]),a(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"set"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," VENV_DIR=")]),a(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"set"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," COMMANDLINE_ARGS=--xformers")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"call"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," webui.bat")])])]),e("button",{class:"collapse"}),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br")])],-1),e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},[e("i",{class:"icon i-arcticons-pixel-tips"}),e("span",{lang:"en"},"TIP"),e("span",{lang:"zh-CN"},"提示")]),e("p",null,"如果显示报错，请科学上网")],-1),e("h2",{id:"使用",tabindex:"-1"},[a("使用 "),e("a",{class:"header-anchor",href:"#使用","aria-label":'Permalink to "使用"'},"​")],-1),e("p",null,"安装完成后，会自行启用xformers。经过简陋的测试，同条件下，使用xformers比不使用xformers的显卡占用能降低10%左右，画质也没降低多少。",-1)])),"main-header":s(()=>[i(t.$slots,"main-header")]),"main-header-after":s(()=>[i(t.$slots,"main-header-after")]),"main-nav":s(()=>[i(t.$slots,"main-nav")]),"main-content-before":s(()=>[i(t.$slots,"main-content-before")]),"main-content":s(()=>[i(t.$slots,"main-content")]),"main-content-after":s(()=>[i(t.$slots,"main-content-after")]),"main-nav-before":s(()=>[i(t.$slots,"main-nav-before")]),"main-nav-after":s(()=>[i(t.$slots,"main-nav-after")]),comment:s(()=>[i(t.$slots,"comment")]),footer:s(()=>[i(t.$slots,"footer")]),aside:s(()=>[i(t.$slots,"aside")]),"aside-custom":s(()=>[i(t.$slots,"aside-custom")]),default:s(()=>[i(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{D as default,y as usePageData};
