import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang.ndM0bUxH.js";import"./chunks/@vueuse/motion.B6QLFVDT.js";import{g as m,a as p}from"./chunks/vue-router.ijDk1yGV.js";import{a0 as c,aa as v,al as l,ad as i,ae as e,ai as a,w as g,ab as k}from"./framework.Cw2a0mOx.js";import"./app.BtEhFhzD.js";import"./chunks/dayjs.Byk5cVHE.js";import"./chunks/vue-i18n.Ba_ImPm7.js";import"./chunks/nprogress.CtHgZ4sh.js";import"./chunks/pinia.QvNvUEey.js";import"./YunComment.vue_vue_type_style_index_0_lang.BBVo0Hll.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.CuX1zWj-.js";import"./post.CguzNBJ4.js";const w=m("/posts/novelai/novelai",async o=>JSON.parse('{"title":"Novelai双版本部署整合教程","description":"","frontmatter":{"title":"Novelai双版本部署整合教程","categories":"AI教程","tags":["Novelai","文档","AI教程"],"cover":"https://i0.hdslb.com/bfs/article/8426c033f0707a3bcf67feb214d9097b381745966.jpg","date":"2022-10-14 14:30:00 +8","updated":"2022-10-14 14:30:00 +8"},"headers":[{"level":2,"title":"闲聊","slug":"闲聊","link":"#闲聊","children":[]},{"level":2,"title":"本地部署","slug":"本地部署","link":"#本地部署","children":[{"level":3,"title":"stable-diffusion-webui","slug":"stable-diffusion-webui","link":"#stable-diffusion-webui","children":[]},{"level":3,"title":"novel-naifu","slug":"novel-naifu","link":"#novel-naifu","children":[]}]},{"level":2,"title":"云端部署","slug":"云端部署","link":"#云端部署","children":[{"level":3,"title":"stable-diffusion-webui","slug":"stable-diffusion-webui-1","link":"#stable-diffusion-webui-1","children":[]},{"level":3,"title":"novel-naifu","slug":"novel-naifu-1","link":"#novel-naifu-1","children":[]}]}],"relativePath":"pages/posts/novelai/novelai.md","lastUpdated":1739912832000}'),{lazy:(o,r)=>o.name===r.name}),q={__name:"novelai",setup(o,{expose:r}){var f;const{data:s}=w(),d=p(),t=Object.assign(d.meta.frontmatter||{},((f=s.value)==null?void 0:f.frontmatter)||{});return d.meta.frontmatter=t,c("pageData",s.value),c("valaxy:frontmatter",t),globalThis.$frontmatter=t,r({frontmatter:{title:"Novelai双版本部署整合教程",categories:"AI教程",tags:["Novelai","文档","AI教程"],cover:"https://i0.hdslb.com/bfs/article/8426c033f0707a3bcf67feb214d9097b381745966.jpg",date:"2022-10-14 14:30:00 +8",updated:"2022-10-14 14:30:00 +8"}}),(n,u)=>{const b=h;return k(),v(b,{frontmatter:g(t)},{"main-content-md":l(()=>u[0]||(u[0]=[e("div",{class:"info custom-block"},[e("p",{class:"custom-block-title"},[e("i",{class:"icon i-carbon-information"}),e("span",{lang:"en"},"NovalAI"),e("span",{lang:"zh-CN"},"NovalAI")]),e("ul",null,[e("li",null,[e("a",{href:"https://pan.baidu.com/s/1X0EILzEg6OEAk3q0qSRPFg?pwd=368y",target:"_blank",rel:"noreferrer"},"stable-diffusion-webui")]),e("li",null,[e("a",{href:"https://pan.baidu.com/s/128fha-fXuv7yj3kvmPkCTQ?pwd=pbrk",target:"_blank",rel:"noreferrer"},"novel-naifu")])])],-1),e("blockquote",null,[e("p",null,[a("TAG库及其他工具: "),e("a",{href:"https://pan.baidu.com/s/1ywjnIx2_5zzchhSw7VyY3A?pwd=2ed2",target:"_blank",rel:"noreferrer"},"https://pan.baidu.com/s/1ywjnIx2_5zzchhSw7VyY3A?pwd=2ed2")]),e("p",null,[a("模型: "),e("a",{href:"https://pan.xunlei.com/s/VNEJ8E2vTcrGyzojEWIxj22yA1?pwd=quzm#",target:"_blank",rel:"noreferrer"},"https://pan.xunlei.com/s/VNEJ8E2vTcrGyzojEWIxj22yA1?pwd=quzm#")])],-1),e("h2",{id:"闲聊",tabindex:"-1"},[a("闲聊 "),e("a",{class:"header-anchor",href:"#闲聊","aria-label":'Permalink to "闲聊"'},"​")],-1),e("p",null,"最近b站疯传novelai官网的泄露版程序，我也沉迷其中无法自拔，然后。。。就鸽了。",-1),e("h2",{id:"本地部署",tabindex:"-1"},[a("本地部署 "),e("a",{class:"header-anchor",href:"#本地部署","aria-label":'Permalink to "本地部署"'},"​")],-1),e("p",null,"版本共两种，随自己心意下载",-1),e("h3",{id:"stable-diffusion-webui",tabindex:"-1"},[a("stable-diffusion-webui "),e("a",{class:"header-anchor",href:"#stable-diffusion-webui","aria-label":'Permalink to "stable-diffusion-webui"'},"​")],-1),e("h4",{id:"部署",tabindex:"-1"},[a("部署 "),e("a",{class:"header-anchor",href:"#部署","aria-label":'Permalink to "部署"'},"​")],-1),e("p",null,[a("直接下载，下载完成后解压，安装Git、Python和CUDA，修改"),e("code",null,"venv"),a("文件夹中"),e("code",null,"pyvenv.cfg"),a("文件里的Python路径。")],-1),e("p",null,[a("如果不知道怎么修改的，删除"),e("code",null,"venv"),a("文件夹，并安装网盘中的"),e("code",null,"dev-sidecar"),a("程序，然后开启程序的代理。")],-1),e("p",null,[a("之后按照你电脑显卡的配置修改"),e("code",null,"webui-user.bat"),a("里的配置，双击运行等待依赖下载完成即可。")],-1),e("h4",{id:"更新",tabindex:"-1"},[a("更新 "),e("a",{class:"header-anchor",href:"#更新","aria-label":'Permalink to "更新"'},"​")],-1),e("p",null,[a("浏览器打开"),e("a",{href:"https://github.com/AUTOMATIC1111/stable-diffusion-webui",target:"_blank",rel:"noreferrer"},"项目所在的仓库"),a("，点击"),e("code",null,"Code"),a("，下载压缩包")],-1),e("p",null,"然后解压压缩包，将解压出来的文件全部移动到程序文件夹内，如果弹出同名文件是否替换的弹窗，点击全部更换即可",-1),e("h4",{id:"模型更换",tabindex:"-1"},[a("模型更换 "),e("a",{class:"header-anchor",href:"#模型更换","aria-label":'Permalink to "模型更换"'},"​")],-1),e("p",null,[a("下载模型后，将模型放置到"),e("code",null,"models"),a(" -> "),e("code",null,"Stable-diffusion"),a("里")],-1),e("p",null,"pt文件需要和模型同名，config文件也是一样，不同名只会加载模型",-1),e("h3",{id:"novel-naifu",tabindex:"-1"},[a("novel-naifu "),e("a",{class:"header-anchor",href:"#novel-naifu","aria-label":'Permalink to "novel-naifu"'},"​")],-1),e("h4",{id:"部署-1",tabindex:"-1"},[a("部署 "),e("a",{class:"header-anchor",href:"#部署-1","aria-label":'Permalink to "部署"'},"​")],-1),e("p",null,[a("直接下载解压就行，按照显卡配置运行对应的"),e("code",null,"bat")],-1),e("h4",{id:"模型更换-1",tabindex:"-1"},[a("模型更换 "),e("a",{class:"header-anchor",href:"#模型更换-1","aria-label":'Permalink to "模型更换"'},"​")],-1),e("p",null,[a("下载模型后，将模型放置到"),e("code",null,"models"),a("里新建的一个新文件夹里，然后修改bat文件中模型的路径")],-1),e("h2",{id:"云端部署",tabindex:"-1"},[a("云端部署 "),e("a",{class:"header-anchor",href:"#云端部署","aria-label":'Permalink to "云端部署"'},"​")],-1),e("p",null,"云端部署使用谷歌colab部署，请科学上网并注册谷歌账号",-1),e("h3",{id:"stable-diffusion-webui-1",tabindex:"-1"},[a("stable-diffusion-webui "),e("a",{class:"header-anchor",href:"#stable-diffusion-webui-1","aria-label":'Permalink to "stable-diffusion-webui"'},"​")],-1),e("p",null,[e("a",{class:"links-of-author-item yun-icon-btn",rel:"noopener",href:"https://colab.research.google.com/drive/1B34yAn8UyZkwBsv6_JdRif5gVNdqDRxn?usp=sharing",title:"stable-diffusion-webui",target:"_blank",style:{color:"rgb(142, 113, 193)"}},[e("div",{class:"icon i-ri-download-2-fill"})])],-1),e("h3",{id:"novel-naifu-1",tabindex:"-1"},[a("novel-naifu "),e("a",{class:"header-anchor",href:"#novel-naifu-1","aria-label":'Permalink to "novel-naifu"'},"​")],-1),e("p",null,[e("a",{class:"links-of-author-item yun-icon-btn",rel:"noopener",href:"https://colab.research.google.com/drive/1aeJ0IfWhQ17QyaH21oviOyDJg-l3OClA?usp=sharing",title:"novel-naifu",target:"_blank",style:{color:"rgb(142, 113, 193)"}},[e("div",{class:"icon i-ri-download-2-fill"})])],-1)])),"main-header":l(()=>[i(n.$slots,"main-header")]),"main-header-after":l(()=>[i(n.$slots,"main-header-after")]),"main-nav":l(()=>[i(n.$slots,"main-nav")]),"main-content-before":l(()=>[i(n.$slots,"main-content-before")]),"main-content":l(()=>[i(n.$slots,"main-content")]),"main-content-after":l(()=>[i(n.$slots,"main-content-after")]),"main-nav-before":l(()=>[i(n.$slots,"main-nav-before")]),"main-nav-after":l(()=>[i(n.$slots,"main-nav-after")]),comment:l(()=>[i(n.$slots,"comment")]),footer:l(()=>[i(n.$slots,"footer")]),aside:l(()=>[i(n.$slots,"aside")]),"aside-custom":l(()=>[i(n.$slots,"aside-custom")]),default:l(()=>[i(n.$slots,"default")]),_:3},8,["frontmatter"])}}};export{q as default,w as usePageData};
