import{_ as b}from"./ValaxyMain.vue_vue_type_style_index_0_lang.DBa71q0W.js";import"./chunks/@vueuse/motion.BOK3hl7e.js";import{g as m,a as g}from"./chunks/vue-router.CRR79aEh.js";import{a0 as c,aa as k,ak as s,x as f,a9 as v,ad as e,ah as a,ac as l}from"./framework.DtKQFpTA.js";import"./app.D4nFu1y9.js";import"./chunks/dayjs.DWFjVSJ6.js";import"./chunks/vue-i18n.DWQlzfKb.js";import"./chunks/nprogress.D_twmIi9.js";import"./chunks/pinia.DBJSHO7I.js";import"./YunComment.vue_vue_type_style_index_0_lang.DIA5GFac.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.D0jeHslh.js";import"./post.BZwyejtd.js";const F=m("/posts/novelai/novelai2",async i=>JSON.parse('{"title":"【Novelai】快速提取tag，生成美图！","description":"","frontmatter":{"title":"【Novelai】快速提取tag，生成美图！","categories":"AI教程","tags":["Novelai","文档","AI教程"],"cover":"https://i0.hdslb.com/bfs/article/8426c033f0707a3bcf67feb214d9097b381745966.jpg","date":"2022-10-18 14:30:00 +8","updated":"2022-10-18 14:30:00 +8"},"headers":[{"level":2,"title":"安装deepbooru模块","slug":"安装deepbooru模块","link":"#安装deepbooru模块","children":[]},{"level":2,"title":"下载deepbooru依赖","slug":"下载deepbooru依赖","link":"#下载deepbooru依赖","children":[]},{"level":2,"title":"下载cudnn依赖","slug":"下载cudnn依赖","link":"#下载cudnn依赖","children":[]},{"level":2,"title":"提取tag","slug":"提取tag","link":"#提取tag","children":[]},{"level":2,"title":"后谈","slug":"后谈","link":"#后谈","children":[]}],"relativePath":"pages/posts/novelai/novelai2.md","lastUpdated":1734642421000}'),{lazy:(i,o)=>i.name===o.name}),x={__name:"novelai2",setup(i,{expose:o}){var d;const{data:r}=F(),p=g(),n=Object.assign(p.meta.frontmatter||{},((d=r.value)==null?void 0:d.frontmatter)||{});return p.meta.frontmatter=n,c("pageData",r.value),c("valaxy:frontmatter",n),globalThis.$frontmatter=n,o({frontmatter:{title:"【Novelai】快速提取tag，生成美图！",categories:"AI教程",tags:["Novelai","文档","AI教程"],cover:"https://i0.hdslb.com/bfs/article/8426c033f0707a3bcf67feb214d9097b381745966.jpg",date:"2022-10-18 14:30:00 +8",updated:"2022-10-18 14:30:00 +8"}}),(t,u)=>{const h=b;return v(),k(h,{frontmatter:f(n)},{"main-content-md":s(()=>u[0]||(u[0]=[e("blockquote",null,[e("p",null,[e("a",{href:"https://pan.baidu.com/s/1X0EILzEg6OEAk3q0qSRPFg?pwd=368y",target:"_blank",rel:"noreferrer"},"stable-diffusion-webui下载")])],-1),e("h2",{id:"安装deepbooru模块",tabindex:"-1"},[a("安装deepbooru模块 "),e("a",{class:"header-anchor",href:"#安装deepbooru模块","aria-label":'Permalink to "安装deepbooru模块"'},"​")],-1),e("p",null,[a("添加deepbooru安装命令进行安装，按照以下格式添加到"),e("code",null,"webui-user.bat"),a("文件中")],-1),e("div",{style:{"max-height":"200px"},class:"language-bash vp-adaptive-theme line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"@echo"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," off")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"set"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," PYTHON=")]),a(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"set"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," GIT=")]),a(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"set"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," VENV_DIR=")]),a(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"set"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," COMMANDLINE_ARGS=--deepbooru")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"call"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," webui.bat")])])]),e("button",{class:"collapse"}),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br")])],-1),e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},[e("i",{class:"icon i-arcticons-pixel-tips"}),e("span",{lang:"en"},"TIP"),e("span",{lang:"zh-CN"},"提示")]),e("p",null,"如果显示报错，请科学上网")],-1),e("h2",{id:"下载deepbooru依赖",tabindex:"-1"},[a("下载deepbooru依赖 "),e("a",{class:"header-anchor",href:"#下载deepbooru依赖","aria-label":'Permalink to "下载deepbooru依赖"'},"​")],-1),e("p",null,[a("安装deepbooru模块完成后，打开webui网页，选择"),e("code",null,"img2img"),a("，并上传一张图")],-1),e("p",null,[a("然后点击"),e("code",null,"Interrogate DeepBooru"),a("按钮，进行下载deepbooru依赖文件和提取tag操作")],-1),e("blockquote",null,[e("p",null,"如果显示报错，请科学上网"),e("p",null,"文件还挺大的，没科学很容易报错，但还是浪费了将近1G的流量"),e("p",null,"不安装CUDA启用该功能，将使用CPU进行提取tag"),e("p",null,[a("需要添加环境变量，详情查看: "),e("a",{href:"https://www.tensorflow.org/install/gpu#windows_setup",target:"_blank",rel:"noreferrer"},"https://www.tensorflow.org/install/gpu#windows_setup")]),e("p",null,[a("提供了deepbooru的依赖文件: "),e("a",{href:"https://pan.baidu.com/s/1vtIuF9Av0M1rk_Ei1ABcEA?pwd=ubqx",target:"_blank",rel:"noreferrer"},"https://pan.baidu.com/s/1vtIuF9Av0M1rk_Ei1ABcEA?pwd=ubqx")]),e("p",null,"该压缩包内的文件放入models文件夹中的deepbooru文件夹内")],-1),e("h2",{id:"下载cudnn依赖",tabindex:"-1"},[a("下载cudnn依赖 "),e("a",{class:"header-anchor",href:"#下载cudnn依赖","aria-label":'Permalink to "下载cudnn依赖"'},"​")],-1),e("p",null,[a("将网盘内的"),e("code",null,"tools.7z"),a("和"),e("code",null,"cuda文件.7z"),a("下载到电脑")],-1),e("p",null,"tools.7z解压后按照文档添加环境变量，cuda文件.7z解压后按照txt文档放到相应位置",-1),e("p",null,"以上文件都更新在NovelAI文件夹中",-1),e("h2",{id:"提取tag",tabindex:"-1"},[a("提取tag "),e("a",{class:"header-anchor",href:"#提取tag","aria-label":'Permalink to "提取tag"'},"​")],-1),e("p",null,"以上操作完成，tag会提取放入prompt填写框内",-1),e("h2",{id:"后谈",tabindex:"-1"},[a("后谈 "),e("a",{class:"header-anchor",href:"#后谈","aria-label":'Permalink to "后谈"'},"​")],-1),e("p",null,"用这个提取的tag生成的图片，多多少少和原图有差异，这个差异视模型和训练集变化",-1),e("p",null,"同时，deepbooru也参与模型训练",-1),e("p",null,"说实话，这个是真的麻烦，也试过另一个tag提取功能，但很不幸的是，直接报错。所以不要浪费空间和流量去下载文件依赖",-1)])),"main-header":s(()=>[l(t.$slots,"main-header")]),"main-header-after":s(()=>[l(t.$slots,"main-header-after")]),"main-nav":s(()=>[l(t.$slots,"main-nav")]),"main-content-before":s(()=>[l(t.$slots,"main-content-before")]),"main-content":s(()=>[l(t.$slots,"main-content")]),"main-content-after":s(()=>[l(t.$slots,"main-content-after")]),"main-nav-before":s(()=>[l(t.$slots,"main-nav-before")]),"main-nav-after":s(()=>[l(t.$slots,"main-nav-after")]),comment:s(()=>[l(t.$slots,"comment")]),footer:s(()=>[l(t.$slots,"footer")]),aside:s(()=>[l(t.$slots,"aside")]),"aside-custom":s(()=>[l(t.$slots,"aside-custom")]),default:s(()=>[l(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{x as default,F as usePageData};
