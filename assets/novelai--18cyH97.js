import{_ as u}from"./ValaxyMain.vue_vue_type_style_index_0_lang-7R1RyOUe.js";import{_ as f,c,w as t,a as h,p as b,o as m,f as e,g as n,i as l,s as p,r as o,h as _}from"./app-pFskbDtv.js";import"./YunFooter.vue_vue_type_style_index_0_lang-p0-D6zIz.js";import"./YunCard.vue_vue_type_script_setup_true_lang-_Y7nlDzo.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-HIadcbAr.js";import"./index-nlSmcLJj.js";const ne=JSON.parse('{"title":"Novelai双版本部署整合教程","description":"","frontmatter":{"title":"Novelai双版本部署整合教程","end":true,"excerpt_type":"html","categories":"AI教程","tags":["Novelai","文档","AI教程"],"time_warning":true,"cover":"https://i0.wp.com/wx1.sinaimg.cn/large/0072Vf1pgy1foxlo0cwkej31kw0w0dzj.jpg","date":"2022-10-14T14:30:00.000Z"},"headers":[{"level":2,"title":"闲聊","slug":"闲聊","link":"#闲聊","children":[]},{"level":2,"title":"本地部署","slug":"本地部署","link":"#本地部署","children":[{"level":3,"title":"stable-diffusion-webui","slug":"stable-diffusion-webui","link":"#stable-diffusion-webui","children":[]},{"level":3,"title":"novel-naifu","slug":"novel-naifu","link":"#novel-naifu","children":[]}]},{"level":2,"title":"云端部署","slug":"云端部署","link":"#云端部署","children":[{"level":3,"title":"stable-diffusion-webui","slug":"stable-diffusion-webui-1","link":"#stable-diffusion-webui-1","children":[]},{"level":3,"title":"novel-naifu","slug":"novel-naifu-1","link":"#novel-naifu-1","children":[]}]}],"relativePath":"pages/posts/novelai.md","path":"/home/runner/work/blog/blog/pages/posts/novelai.md","lastUpdated":1705266634000}'),s=JSON.parse('{"title":"Novelai双版本部署整合教程","description":"","frontmatter":{"title":"Novelai双版本部署整合教程","end":true,"excerpt_type":"html","categories":"AI教程","tags":["Novelai","文档","AI教程"],"time_warning":true,"cover":"https://i0.wp.com/wx1.sinaimg.cn/large/0072Vf1pgy1foxlo0cwkej31kw0w0dzj.jpg","date":"2022-10-14T14:30:00.000Z"},"headers":[{"level":2,"title":"闲聊","slug":"闲聊","link":"#闲聊","children":[]},{"level":2,"title":"本地部署","slug":"本地部署","link":"#本地部署","children":[{"level":3,"title":"stable-diffusion-webui","slug":"stable-diffusion-webui","link":"#stable-diffusion-webui","children":[]},{"level":3,"title":"novel-naifu","slug":"novel-naifu","link":"#novel-naifu","children":[]}]},{"level":2,"title":"云端部署","slug":"云端部署","link":"#云端部署","children":[{"level":3,"title":"stable-diffusion-webui","slug":"stable-diffusion-webui-1","link":"#stable-diffusion-webui-1","children":[]},{"level":3,"title":"novel-naifu","slug":"novel-naifu-1","link":"#novel-naifu-1","children":[]}]}],"relativePath":"pages/posts/novelai.md","path":"/home/runner/work/blog/blog/pages/posts/novelai.md","lastUpdated":1705266634000}'),v={name:"pages/posts/novelai.md",data(){return{data:s,frontmatter:s.frontmatter,$frontmatter:s.frontmatter}},setup(){const i=h();i.meta.frontmatter=Object.assign(i.meta.frontmatter,s.frontmatter),b("pageData",s)}},g={class:"info custom-block"},w=e("p",{class:"custom-block-title"},[e("i",{class:"icon i-carbon-information"}),e("span",{lang:"en"},"NovalAI"),e("span",{lang:"zh-CN"},"NovalAI")],-1),k={id:"闲聊",tabindex:"-1"},y=e("p",null,"最近b站疯传novelai官网的泄露版程序，我也沉迷其中无法自拔，然后。。。就鸽了。",-1),x={id:"本地部署",tabindex:"-1"},A=e("p",null,"版本共两种，随自己心意下载",-1),N={id:"stable-diffusion-webui",tabindex:"-1"},P={id:"部署",tabindex:"-1"},$=e("p",null,[l("直接下载，下载完成后解压，安装Git、Python和CUDA，修改"),e("code",null,"venv"),l("文件夹中"),e("code",null,"pyvenv.cfg"),l("文件里的Python路径。")],-1),j=e("p",null,[l("如果不知道怎么修改的，删除"),e("code",null,"venv"),l("文件夹，并安装网盘中的"),e("code",null,"dev-sidecar"),l("程序，然后开启程序的代理。")],-1),I=e("p",null,[l("之后按照你电脑显卡的配置修改"),e("code",null,"webui-user.bat"),l("里的配置，双击运行等待依赖下载完成即可。")],-1),z={id:"更新",tabindex:"-1"},V=e("code",null,"Code",-1),E=e("p",null,"然后解压压缩包，将解压出来的文件全部移动到程序文件夹内，如果弹出同名文件是否替换的弹窗，点击全部更换即可",-1),T={id:"模型更换",tabindex:"-1"},C=e("p",null,[l("下载模型后，将模型放置到"),e("code",null,"models"),l(" -> "),e("code",null,"Stable-diffusion"),l("里")],-1),J=e("p",null,"pt文件需要和模型同名，config文件也是一样，不同名只会加载模型",-1),O={id:"novel-naifu",tabindex:"-1"},S={id:"部署-1",tabindex:"-1"},q=e("p",null,[l("直接下载解压就行，按照显卡配置运行对应的"),e("code",null,"bat")],-1),B={id:"模型更换-1",tabindex:"-1"},D=e("p",null,[l("下载模型后，将模型放置到"),e("code",null,"models"),l("里新建的一个新文件夹里，然后修改bat文件中模型的路径")],-1),U={id:"云端部署",tabindex:"-1"},G=e("p",null,"云端部署使用谷歌colab部署，请科学上网并注册谷歌账号",-1),R={id:"stable-diffusion-webui-1",tabindex:"-1"},Q=e("div",{class:"icon i-ri-download-2-fill"},null,-1),W={id:"novel-naifu-1",tabindex:"-1"},Z=e("div",{class:"icon i-ri-download-2-fill"},null,-1);function L(i,M,X,Y,r,F){const a=_,d=u;return m(),c(d,{frontmatter:r.frontmatter,data:r.data},{"main-content-md":t(()=>[e("div",g,[w,e("ul",null,[e("li",null,[n(a,{href:"https://pan.baidu.com/s/1X0EILzEg6OEAk3q0qSRPFg?pwd=368y",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("stable-diffusion-webui")]),_:1})]),e("li",null,[n(a,{href:"https://pan.baidu.com/s/128fha-fXuv7yj3kvmPkCTQ?pwd=pbrk",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("novel-naifu")]),_:1})])])]),p(" more "),e("blockquote",null,[e("p",null,[l("TAG库及其他工具: "),n(a,{href:"https://pan.baidu.com/s/1ywjnIx2_5zzchhSw7VyY3A?pwd=2ed2",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("https://pan.baidu.com/s/1ywjnIx2_5zzchhSw7VyY3A?pwd=2ed2")]),_:1})]),e("p",null,[l("模型: "),n(a,{href:"https://pan.xunlei.com/s/VNEJ8E2vTcrGyzojEWIxj22yA1?pwd=quzm#",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("https://pan.xunlei.com/s/VNEJ8E2vTcrGyzojEWIxj22yA1?pwd=quzm#")]),_:1})])]),e("h2",k,[l("闲聊 "),n(a,{class:"header-anchor",href:"#闲聊","aria-label":'Permalink to "闲聊"'},{default:t(()=>[l("​")]),_:1})]),y,e("h2",x,[l("本地部署 "),n(a,{class:"header-anchor",href:"#本地部署","aria-label":'Permalink to "本地部署"'},{default:t(()=>[l("​")]),_:1})]),A,e("h3",N,[l("stable-diffusion-webui "),n(a,{class:"header-anchor",href:"#stable-diffusion-webui","aria-label":'Permalink to "stable-diffusion-webui"'},{default:t(()=>[l("​")]),_:1})]),e("h4",P,[l("部署 "),n(a,{class:"header-anchor",href:"#部署","aria-label":'Permalink to "部署"'},{default:t(()=>[l("​")]),_:1})]),$,j,I,e("h4",z,[l("更新 "),n(a,{class:"header-anchor",href:"#更新","aria-label":'Permalink to "更新"'},{default:t(()=>[l("​")]),_:1})]),e("p",null,[l("浏览器打开"),n(a,{href:"https://github.com/AUTOMATIC1111/stable-diffusion-webui",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("项目所在的仓库")]),_:1}),l("，点击"),V,l("，下载压缩包")]),E,e("h4",T,[l("模型更换 "),n(a,{class:"header-anchor",href:"#模型更换","aria-label":'Permalink to "模型更换"'},{default:t(()=>[l("​")]),_:1})]),C,J,e("h3",O,[l("novel-naifu "),n(a,{class:"header-anchor",href:"#novel-naifu","aria-label":'Permalink to "novel-naifu"'},{default:t(()=>[l("​")]),_:1})]),e("h4",S,[l("部署 "),n(a,{class:"header-anchor",href:"#部署-1","aria-label":'Permalink to "部署"'},{default:t(()=>[l("​")]),_:1})]),q,e("h4",B,[l("模型更换 "),n(a,{class:"header-anchor",href:"#模型更换-1","aria-label":'Permalink to "模型更换"'},{default:t(()=>[l("​")]),_:1})]),D,e("h2",U,[l("云端部署 "),n(a,{class:"header-anchor",href:"#云端部署","aria-label":'Permalink to "云端部署"'},{default:t(()=>[l("​")]),_:1})]),G,e("h3",R,[l("stable-diffusion-webui "),n(a,{class:"header-anchor",href:"#stable-diffusion-webui-1","aria-label":'Permalink to "stable-diffusion-webui"'},{default:t(()=>[l("​")]),_:1})]),e("p",null,[n(a,{class:"links-of-author-item yun-icon-btn",rel:"noopener",href:"https://colab.research.google.com/drive/1B34yAn8UyZkwBsv6_JdRif5gVNdqDRxn?usp=sharing",title:"stable-diffusion-webui",target:"_blank",style:{color:"rgb(142, 113, 193)"}},{default:t(()=>[Q]),_:1})]),e("h3",W,[l("novel-naifu "),n(a,{class:"header-anchor",href:"#novel-naifu-1","aria-label":'Permalink to "novel-naifu"'},{default:t(()=>[l("​")]),_:1})]),e("p",null,[n(a,{class:"links-of-author-item yun-icon-btn",rel:"noopener",href:"https://colab.research.google.com/drive/1aeJ0IfWhQ17QyaH21oviOyDJg-l3OClA?usp=sharing",title:"novel-naifu",target:"_blank",style:{color:"rgb(142, 113, 193)"}},{default:t(()=>[Z]),_:1})])]),"main-header":t(()=>[o(i.$slots,"main-header")]),"main-header-after":t(()=>[o(i.$slots,"main-header-after")]),"main-nav":t(()=>[o(i.$slots,"main-nav")]),"main-content":t(()=>[o(i.$slots,"main-content")]),"main-content-after":t(()=>[o(i.$slots,"main-content-after")]),"main-nav-before":t(()=>[o(i.$slots,"main-nav-before")]),"main-nav-after":t(()=>[o(i.$slots,"main-nav-after")]),comment:t(()=>[o(i.$slots,"comment")]),footer:t(()=>[o(i.$slots,"footer")]),aside:t(()=>[o(i.$slots,"aside")]),"aside-custom":t(()=>[o(i.$slots,"aside-custom")]),default:t(()=>[o(i.$slots,"default")]),_:3},8,["frontmatter","data"])}const ie=f(v,[["render",L]]);export{ne as __pageData,ie as default};
