import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-x6HhBMJm.js";import{_ as d,a as u,p as h,o as m,c as b,w as s,f as e,i as l,g as n,s as g,r as o,h as y}from"./app-v7NOZDg7.js";import"./YunFooter.vue_vue_type_style_index_0_lang-hFZx_Yxy.js";import"./YunCard.vue_vue_type_script_setup_true_lang-u0HMrAIT.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-zSpTvggn.js";import"./index-nlSmcLJj.js";const i=JSON.parse('{"title":"使用Replit平台免费搭建站点监控工具——Uptime-Kuma","description":"","frontmatter":{"title":"使用Replit平台免费搭建站点监控工具——Uptime-Kuma","categories":"白嫖教程","tags":["Replit","文档","白嫖教程"],"cover":"https://i0.hdslb.com/bfs/article/2f4bbf223acfc60d26239d464fc14439381745966.jpg","date":"2023-08-29T14:30:00.000Z"},"headers":[{"level":2,"title":"什么是Uptime-Kuma","slug":"什么是uptime-kuma","link":"#什么是uptime-kuma","children":[]},{"level":2,"title":"部署在Replit","slug":"部署在replit","link":"#部署在replit","children":[{"level":3,"title":"Replit平台","slug":"replit平台","link":"#replit平台","children":[]},{"level":3,"title":"Create a Repl","slug":"create-a-repl","link":"#create-a-repl","children":[]},{"level":3,"title":"Config","slug":"config","link":"#config","children":[]},{"level":3,"title":"Run","slug":"run","link":"#run","children":[]}]},{"level":2,"title":"怎么升级","slug":"怎么升级","link":"#怎么升级","children":[{"level":3,"title":"Update from git","slug":"update-from-git","link":"#update-from-git","children":[]},{"level":3,"title":"Install dependencies and prebuilt","slug":"install-dependencies-and-prebuilt","link":"#install-dependencies-and-prebuilt","children":[]},{"level":3,"title":"Restart","slug":"restart","link":"#restart","children":[]}]}],"relativePath":"pages/posts/uptime.md","path":"/home/runner/work/blog/blog/pages/posts/uptime.md","lastUpdated":1706192206000}'),f={name:"pages/posts/uptime.md",data(){return{data:i,frontmatter:i.frontmatter,$frontmatter:i.frontmatter}},setup(){const a=u();a.meta.frontmatter=Object.assign(a.meta.frontmatter||{},i.frontmatter||{}),h("pageData",i)}},_={id:"什么是uptime-kuma",tabindex:"-1"},k=e("p",null,[l("它是类似于"),e("code",null,"Uptime Robot"),l("的自托管监控工具。在GitHub上开源，可通过Docker与非Docker方式进行部署，界面简洁，支持多种语言")],-1),E={id:"部署在replit",tabindex:"-1"},F={id:"replit平台",tabindex:"-1"},v=e("p",null,"Replit 可以帮助开发者将代码更完整、生成代码、转换代码和解释代码。基于 Replit，用户可以在浏览器中运行代码、创建项目、与他人协作和共享项目。Replit 还提供了一系列工具和功能，例如代码自动完成、调试器、版本控制和部署工具等，以便用户能够更轻松地进行编程工作。另外，Replit 还提供了大量的编程语言和框架支持，包括 Python、Java、Ruby、JavaScript、React 和 Flask 等，还可以一键部署 Github 的开源代码。",-1),C={id:"create-a-repl",tabindex:"-1"},R=e("p",null,[l("在replit主界面点击右上角"),e("code",null,"加号"),l("或者蓝色按钮"),e("code",null,"Create Repl"),l("，在弹出的界面上点击"),e("code",null,"Import from GitHub"),l("，填写项目链接并选择项目语言为"),e("code",null,"bash"),l("，完成后点击"),e("code",null,"Import from Github"),l("进行部署")],-1),B=e("figure",null,[e("img",{src:"https://article.biliimg.com/bfs/article/a3d7f9bba6533c48aa17dc8f9e1d021e8d549e95.png",alt:"image-20230829203236867",loading:"lazy",decoding:"async",class:"lazy"})],-1),w={id:"config",tabindex:"-1"},x=e("p",null,[l("从 GitHub 上 Clone 成功后，配置文件 "),e("code",null,".replit"),l("（首次配置会弹输入框，将命令填写进去），配置运行命令如下")],-1),$=e("div",{style:{"max-height":"200px"},class:"language-bash line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"node"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"server/server.js")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6F42C1"}},"node"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"server/server.js")])])]),e("button",{class:"collapse"}),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br")])],-1),U=e("figure",null,[e("img",{src:"https://article.biliimg.com/bfs/article/9f04b5ea2d3755778dd9a7c6664b59c15afefa6b.png",alt:"image-20230829204421489",loading:"lazy",decoding:"async",class:"lazy"})],-1),P=e("p",null,[l("此时不点击运行，在右侧"),e("code",null,"Console"),l("或者"),e("code",null,"Shell"),l("选项卡里输入"),e("code",null,"node"),l("，并选择第一个选项"),e("code",null,"nodejs-16_x.out"),l("进行安装环境")],-1),z=e("div",{style:{"max-height":"200px"},class:"language-bash line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"node")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6F42C1"}},"node")])])]),e("button",{class:"collapse"}),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br")])],-1),K=e("figure",null,[e("img",{src:"https://article.biliimg.com/bfs/article/1d8392c753b606a90885105c58e6697a6f6a5552.png",alt:"image-20230829204617181",loading:"lazy",decoding:"async",class:"lazy"})],-1),j=e("p",null,[l("安装完成后，输入"),e("code",null,"npm run setup"),l("，等待运行完成")],-1),G=e("div",{style:{"max-height":"200px"},class:"language-bash line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"npm"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"run"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"setup")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6F42C1"}},"npm"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"run"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"setup")])])]),e("button",{class:"collapse"}),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br")])],-1),H=e("figure",null,[e("img",{src:"https://article.biliimg.com/bfs/article/86fb65a82560be11b60d8f72ea1b5c92f355ef7f.png",alt:"image-20230829204819886",loading:"lazy",decoding:"async",class:"lazy"})],-1),I={id:"run",tabindex:"-1"},N=e("p",null,[l("步骤完成后，点击"),e("code",null,"Run"),l("或者按下"),e("code",null,"Ctrl+Enter"),l("快捷键运行Uptime-Kuma，若出现"),e("code",null,"Webview"),l("选项卡以及网址，即运行成功。可在"),e("code",null,"Webview"),l("选项卡或者打开网址进行配置Uptime-Kuma")],-1),S={id:"怎么升级",tabindex:"-1"},V=e("p",null,"由于此教程采取非Docker方式部署，可以使用以下命令进行升级，Replit平台部署无需第三步，直接重启Repl即可",-1),q={id:"update-from-git",tabindex:"-1"},D=e("p",null,"此处选择当前最新版本1.23.1，版本可以切换，视情况而变",-1),J=e("div",{style:{"max-height":"200px"},class:"language-bash line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"git"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"fetch"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#79B8FF"}},"--all")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"git"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"checkout"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#79B8FF"}},"1.23"),e("span",{style:{color:"#9ECBFF"}},".1"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#79B8FF"}},"--force")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6F42C1"}},"git"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"fetch"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#005CC5"}},"--all")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6F42C1"}},"git"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"checkout"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#005CC5"}},"1.23"),e("span",{style:{color:"#032F62"}},".1"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#005CC5"}},"--force")])])]),e("button",{class:"collapse"}),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br")])],-1),W={id:"install-dependencies-and-prebuilt",tabindex:"-1"},M=e("div",{style:{"max-height":"200px"},class:"language-bash line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"npm"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"install"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#79B8FF"}},"--production")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"npm"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"run"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"download-dist")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6F42C1"}},"npm"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"install"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#005CC5"}},"--production")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6F42C1"}},"npm"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"run"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"download-dist")])])]),e("button",{class:"collapse"}),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br")])],-1),O={id:"restart",tabindex:"-1"},T=e("div",{style:{"max-height":"200px"},class:"language-bash line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"pm2"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"restart"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"uptime-kuma")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6F42C1"}},"pm2"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"restart"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"uptime-kuma")])])]),e("button",{class:"collapse"}),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br")])],-1),A=e("blockquote",null,[e("p",null,[l("使用pm2命令重启需要安装"),e("code",null,"PM2"),l("，Replit平台无需安装，"),e("code",null,"Stop"),l("然后"),e("code",null,"Run"),l("就行")])],-1);function L(a,Z,Q,X,r,Y){const t=y,c=p;return m(),b(c,{frontmatter:r.frontmatter,data:r.data},{"main-content-md":s(()=>[e("h2",_,[l("什么是Uptime-Kuma "),n(t,{class:"header-anchor",href:"#什么是uptime-kuma","aria-label":'Permalink to "什么是Uptime-Kuma"'},{default:s(()=>[l("​")]),_:1})]),k,g(" more "),e("h2",E,[l("部署在Replit "),n(t,{class:"header-anchor",href:"#部署在replit","aria-label":'Permalink to "部署在Replit"'},{default:s(()=>[l("​")]),_:1})]),e("h3",F,[l("Replit平台 "),n(t,{class:"header-anchor",href:"#replit平台","aria-label":'Permalink to "Replit平台"'},{default:s(()=>[l("​")]),_:1})]),e("blockquote",null,[e("p",null,[l("官网："),n(t,{href:"https://replit.com",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("https://replit.com")]),_:1})])]),v,e("h3",C,[l("Create a Repl "),n(t,{class:"header-anchor",href:"#create-a-repl","aria-label":'Permalink to "Create a Repl"'},{default:s(()=>[l("​")]),_:1})]),R,B,e("blockquote",null,[e("p",null,[l("项目链接: "),n(t,{href:"https://github.com/louislam/uptime-kuma",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("https://github.com/louislam/uptime-kuma")]),_:1})])]),e("h3",w,[l("Config "),n(t,{class:"header-anchor",href:"#config","aria-label":'Permalink to "Config"'},{default:s(()=>[l("​")]),_:1})]),x,$,U,P,z,K,j,G,H,e("h3",I,[l("Run "),n(t,{class:"header-anchor",href:"#run","aria-label":'Permalink to "Run"'},{default:s(()=>[l("​")]),_:1})]),N,e("h2",S,[l("怎么升级 "),n(t,{class:"header-anchor",href:"#怎么升级","aria-label":'Permalink to "怎么升级"'},{default:s(()=>[l("​")]),_:1})]),V,e("blockquote",null,[e("p",null,[l("Wiki: "),n(t,{href:"https://github.com/louislam/uptime-kuma/wiki/%F0%9F%86%99-How-to-Update#--non-docker",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("https://github.com/louislam/uptime-kuma/wiki/🆙-How-to-Update#--non-docker")]),_:1})])]),e("h3",q,[l("Update from git "),n(t,{class:"header-anchor",href:"#update-from-git","aria-label":'Permalink to "Update from git"'},{default:s(()=>[l("​")]),_:1})]),D,J,e("h3",W,[l("Install dependencies and prebuilt "),n(t,{class:"header-anchor",href:"#install-dependencies-and-prebuilt","aria-label":'Permalink to "Install dependencies and prebuilt"'},{default:s(()=>[l("​")]),_:1})]),M,e("h3",O,[l("Restart "),n(t,{class:"header-anchor",href:"#restart","aria-label":'Permalink to "Restart"'},{default:s(()=>[l("​")]),_:1})]),T,A]),"main-header":s(()=>[o(a.$slots,"main-header")]),"main-header-after":s(()=>[o(a.$slots,"main-header-after")]),"main-nav":s(()=>[o(a.$slots,"main-nav")]),"main-content":s(()=>[o(a.$slots,"main-content")]),"main-content-after":s(()=>[o(a.$slots,"main-content-after")]),"main-nav-before":s(()=>[o(a.$slots,"main-nav-before")]),"main-nav-after":s(()=>[o(a.$slots,"main-nav-after")]),comment:s(()=>[o(a.$slots,"comment")]),footer:s(()=>[o(a.$slots,"footer")]),aside:s(()=>[o(a.$slots,"aside")]),"aside-custom":s(()=>[o(a.$slots,"aside-custom")]),default:s(()=>[o(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const oe=d(f,[["render",L]]);export{i as data,oe as default};