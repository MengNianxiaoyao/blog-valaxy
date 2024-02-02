import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-JSK-1msz.js";import{_ as c,a as u,p as h,o as b,c as m,w as t,g as e,h as o,j as s,f as _,r as n,i as g}from"./app--7iyA23E.js";import"./YunFooter.vue_vue_type_style_index_0_lang-ICDJrmBy.js";import"./YunCard.vue_vue_type_script_setup_true_lang-elX2T6Jy.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-vaFiSXGr.js";import"./index-nlSmcLJj.js";const i=JSON.parse('{"title":"【Novelai】快速提取tag，生成美图！","description":"","frontmatter":{"title":"【Novelai】快速提取tag，生成美图！","categories":"AI教程","tags":["Novelai","文档","AI教程"],"cover":"https://i0.hdslb.com/bfs/article/8426c033f0707a3bcf67feb214d9097b381745966.jpg","date":"2022-10-18T14:30:00.000Z"},"headers":[{"level":2,"title":"安装deepbooru模块","slug":"安装deepbooru模块","link":"#安装deepbooru模块","children":[]},{"level":2,"title":"下载deepbooru依赖","slug":"下载deepbooru依赖","link":"#下载deepbooru依赖","children":[]},{"level":2,"title":"下载cudnn依赖","slug":"下载cudnn依赖","link":"#下载cudnn依赖","children":[]},{"level":2,"title":"提取tag","slug":"提取tag","link":"#提取tag","children":[]},{"level":2,"title":"后谈","slug":"后谈","link":"#后谈","children":[]}],"relativePath":"pages/posts/novelai/novelai2.md","path":"/home/runner/work/blog/blog/pages/posts/novelai/novelai2.md","lastUpdated":1706883159000}'),k={name:"pages/posts/novelai/novelai2.md",data(){return{data:i,frontmatter:i.frontmatter,$frontmatter:i.frontmatter}},setup(){const a=u();a.meta.frontmatter=Object.assign(a.meta.frontmatter||{},i.frontmatter||{}),h("pageData",i)}},f={id:"安装deepbooru模块",tabindex:"-1"},v=e("p",null,[s("添加deepbooru安装命令进行安装，按照以下格式添加到"),e("code",null,"webui-user.bat"),s("文件中")],-1),F=e("div",{style:{"max-height":"200px"},class:"language-bash line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"@echo"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," off")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"set"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," PYTHON=")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"set"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," GIT=")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"set"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," VENV_DIR=")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"set"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," COMMANDLINE_ARGS=--deepbooru")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"call"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," webui.bat")])])]),e("button",{class:"collapse"}),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br")])],-1),C=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},[e("i",{class:"icon i-arcticons-pixel-tips"}),e("span",{lang:"en"},"TIP"),e("span",{lang:"zh-CN"},"提示")]),e("p",null,"如果显示报错，请科学上网")],-1),w={id:"下载deepbooru依赖",tabindex:"-1"},B=e("p",null,[s("安装deepbooru模块完成后，打开webui网页，选择"),e("code",null,"img2img"),s("，并上传一张图")],-1),y=e("p",null,[s("然后点击"),e("code",null,"Interrogate DeepBooru"),s("按钮，进行下载deepbooru依赖文件和提取tag操作")],-1),$=e("p",null,"如果显示报错，请科学上网",-1),E=e("p",null,"文件还挺大的，没科学很容易报错，但还是浪费了将近1G的流量",-1),A=e("p",null,"不安装CUDA启用该功能，将使用CPU进行提取tag",-1),N=e("p",null,"该压缩包内的文件放入models文件夹中的deepbooru文件夹内",-1),I={id:"下载cudnn依赖",tabindex:"-1"},P=e("p",null,[s("将网盘内的"),e("code",null,"tools.7z"),s("和"),e("code",null,"cuda文件.7z"),s("下载到电脑")],-1),V=e("p",null,"tools.7z解压后按照文档添加环境变量，cuda文件.7z解压后按照txt文档放到相应位置",-1),q=e("p",null,"以上文件都更新在NovelAI文件夹中",-1),z={id:"提取tag",tabindex:"-1"},x=e("p",null,"以上操作完成，tag会提取放入prompt填写框内",-1),D={id:"后谈",tabindex:"-1"},M=e("p",null,"用这个提取的tag生成的图片，多多少少和原图有差异，这个差异视模型和训练集变化",-1),O=e("p",null,"同时，deepbooru也参与模型训练",-1),T=e("p",null,"说实话，这个是真的麻烦，也试过另一个tag提取功能，但很不幸的是，直接报错。所以不要浪费空间和流量去下载文件依赖",-1);function R(a,S,j,G,r,L){const l=g,d=p;return b(),m(d,{frontmatter:r.frontmatter,data:r.data},{"main-content-md":t(()=>[e("blockquote",null,[e("p",null,[o(l,{href:"https://pan.baidu.com/s/1X0EILzEg6OEAk3q0qSRPFg?pwd=368y",target:"_blank",rel:"noreferrer"},{default:t(()=>[s("stable-diffusion-webui下载")]),_:1})])]),_(" more "),e("h2",f,[s("安装deepbooru模块 "),o(l,{class:"header-anchor",href:"#安装deepbooru模块","aria-label":'Permalink to "安装deepbooru模块"'},{default:t(()=>[s("​")]),_:1})]),v,F,C,e("h2",w,[s("下载deepbooru依赖 "),o(l,{class:"header-anchor",href:"#下载deepbooru依赖","aria-label":'Permalink to "下载deepbooru依赖"'},{default:t(()=>[s("​")]),_:1})]),B,y,e("blockquote",null,[$,E,A,e("p",null,[s("需要添加环境变量，详情查看: "),o(l,{href:"https://www.tensorflow.org/install/gpu#windows_setup",target:"_blank",rel:"noreferrer"},{default:t(()=>[s("https://www.tensorflow.org/install/gpu#windows_setup")]),_:1})]),e("p",null,[s("提供了deepbooru的依赖文件: "),o(l,{href:"https://pan.baidu.com/s/1vtIuF9Av0M1rk_Ei1ABcEA?pwd=ubqx",target:"_blank",rel:"noreferrer"},{default:t(()=>[s("https://pan.baidu.com/s/1vtIuF9Av0M1rk_Ei1ABcEA?pwd=ubqx")]),_:1})]),N]),e("h2",I,[s("下载cudnn依赖 "),o(l,{class:"header-anchor",href:"#下载cudnn依赖","aria-label":'Permalink to "下载cudnn依赖"'},{default:t(()=>[s("​")]),_:1})]),P,V,q,e("h2",z,[s("提取tag "),o(l,{class:"header-anchor",href:"#提取tag","aria-label":'Permalink to "提取tag"'},{default:t(()=>[s("​")]),_:1})]),x,e("h2",D,[s("后谈 "),o(l,{class:"header-anchor",href:"#后谈","aria-label":'Permalink to "后谈"'},{default:t(()=>[s("​")]),_:1})]),M,O,T]),"main-header":t(()=>[n(a.$slots,"main-header")]),"main-header-after":t(()=>[n(a.$slots,"main-header-after")]),"main-nav":t(()=>[n(a.$slots,"main-nav")]),"main-content":t(()=>[n(a.$slots,"main-content")]),"main-content-after":t(()=>[n(a.$slots,"main-content-after")]),"main-nav-before":t(()=>[n(a.$slots,"main-nav-before")]),"main-nav-after":t(()=>[n(a.$slots,"main-nav-after")]),comment:t(()=>[n(a.$slots,"comment")]),footer:t(()=>[n(a.$slots,"footer")]),aside:t(()=>[n(a.$slots,"aside")]),"aside-custom":t(()=>[n(a.$slots,"aside-custom")]),default:t(()=>[n(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const K=c(k,[["render",R]]);export{i as data,K as default};