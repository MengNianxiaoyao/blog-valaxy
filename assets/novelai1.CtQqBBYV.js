import{_ as f}from"./ValaxyMain.vue_vue_type_style_index_0_lang.BInEitiC.js";import"./chunks/@vueuse/motion.B6QLFVDT.js";import{g as b,a as u}from"./chunks/vue-router.DxMOU6e3.js";import{a0 as c,aa as k,al as s,ad as i,ae as a,ai as e,w as g,ab as v}from"./framework.Cw2a0mOx.js";import"./app.DcARatR_.js";import"./chunks/dayjs.Byk5cVHE.js";import"./chunks/vue-i18n.DBBF4QhG.js";import"./chunks/nprogress.CtHgZ4sh.js";import"./chunks/pinia.QvNvUEey.js";import"./YunComment.vue_vue_type_style_index_0_lang.B4MxfWbS.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.CuX1zWj-.js";import"./post.DcnzeuI2.js";const F=b("/posts/novelai/novelai1",async l=>JSON.parse('{"title":"【Novelai】新版本支持xformers！降低显卡占用黑科技！","description":"","frontmatter":{"title":"【Novelai】新版本支持xformers！降低显卡占用黑科技！","categories":"AI教程","tags":["Novelai","文档","AI教程"],"cover":"https://i0.hdslb.com/bfs/article/8426c033f0707a3bcf67feb214d9097b381745966.jpg","date":"2022-10-16 14:30:00 +8","updated":"2022-10-16 14:30:00 +8"},"headers":[{"level":2,"title":"更新","slug":"更新","link":"#更新","children":[]},{"level":2,"title":"安装xformers","slug":"安装xformers","link":"#安装xformers","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]}],"relativePath":"pages/posts/novelai/novelai1.md","lastUpdated":1741554066000}'),{lazy:(l,r)=>l.name===r.name}),V={__name:"novelai1",setup(l,{expose:r}){var p;const{data:o}=F(),m=u(),n=Object.assign(m.meta.frontmatter||{},((p=o.value)==null?void 0:p.frontmatter)||{});return m.meta.frontmatter=n,c("pageData",o.value),c("valaxy:frontmatter",n),globalThis.$frontmatter=n,r({frontmatter:{title:"【Novelai】新版本支持xformers！降低显卡占用黑科技！",categories:"AI教程",tags:["Novelai","文档","AI教程"],cover:"https://i0.hdslb.com/bfs/article/8426c033f0707a3bcf67feb214d9097b381745966.jpg",date:"2022-10-16 14:30:00 +8",updated:"2022-10-16 14:30:00 +8"}}),(t,h)=>{const d=f;return v(),k(d,{frontmatter:g(n)},{"main-content-md":s(()=>h[0]||(h[0]=[a("h2",{id:"更新",tabindex:"-1"},[e("更新 "),a("a",{class:"header-anchor",href:"#更新","aria-label":'Permalink to "更新"'},"​")],-1),a("p",null,[e("前往"),a("a",{href:"https://github.com/AUTOMATIC1111/stable-diffusion-webui",target:"_blank",rel:"noreferrer"},"GitHub仓库"),e("，下载最新版代码压缩包；或者使用"),a("code",null,"git pull"),e("命令更新")],-1),a("h2",{id:"安装xformers",tabindex:"-1"},[e("安装xformers "),a("a",{class:"header-anchor",href:"#安装xformers","aria-label":'Permalink to "安装xformers"'},"​")],-1),a("p",null,[e("新版可直接添加xformers安装命令进行安装，按照以下格式添加到"),a("code",null,"webui-user.bat"),e("文件中")],-1),a("div",{style:{"max-height":"200px"},class:"language-bash vp-adaptive-theme line-numbers-mode"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"bash"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[a("code",{"v-pre":""},[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"@echo"),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," off")]),e(`
`),a("span",{class:"line"}),e(`
`),a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"set"),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," PYTHON=")]),e(`
`),a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"set"),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," GIT=")]),e(`
`),a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"set"),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," VENV_DIR=")]),e(`
`),a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"set"),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," COMMANDLINE_ARGS=--xformers")]),e(`
`),a("span",{class:"line"}),e(`
`),a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"call"),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," webui.bat")])])]),a("button",{class:"collapse"}),a("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br")])],-1),a("div",{class:"tip custom-block"},[a("p",{class:"custom-block-title"},[a("i",{class:"icon i-arcticons-pixel-tips"}),a("span",{lang:"en"},"TIP"),a("span",{lang:"zh-CN"},"提示")]),a("p",null,"如果显示报错，请科学上网")],-1),a("h2",{id:"使用",tabindex:"-1"},[e("使用 "),a("a",{class:"header-anchor",href:"#使用","aria-label":'Permalink to "使用"'},"​")],-1),a("p",null,"安装完成后，会自行启用xformers。经过简陋的测试，同条件下，使用xformers比不使用xformers的显卡占用能降低10%左右，画质也没降低多少。",-1)])),"main-header":s(()=>[i(t.$slots,"main-header")]),"main-header-after":s(()=>[i(t.$slots,"main-header-after")]),"main-nav":s(()=>[i(t.$slots,"main-nav")]),"main-content-before":s(()=>[i(t.$slots,"main-content-before")]),"main-content":s(()=>[i(t.$slots,"main-content")]),"main-content-after":s(()=>[i(t.$slots,"main-content-after")]),"main-nav-before":s(()=>[i(t.$slots,"main-nav-before")]),"main-nav-after":s(()=>[i(t.$slots,"main-nav-after")]),comment:s(()=>[i(t.$slots,"comment")]),footer:s(()=>[i(t.$slots,"footer")]),aside:s(()=>[i(t.$slots,"aside")]),"aside-custom":s(()=>[i(t.$slots,"aside-custom")]),default:s(()=>[i(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{V as default,F as usePageData};
