import{_ as c}from"./ValaxyMain.vue_vue_type_style_index_0_lang-DBl6O07x.js";import{a as p,p as o,o as k,c as g,w as i,f as m,g as u,r as s,h as e,i as t}from"./app-BR7J8ZSK.js";import"./YunFooter.vue_vue_type_style_index_0_lang-CEjSZLEB.js";import"./YunCard.vue_vue_type_script_setup_true_lang-C0eyNRr3.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CKtuwG61.js";import"./index-C7yU5XnD.js";const f=e("h2",{id:"阅读",tabindex:"-1"},[t("阅读 "),e("a",{class:"header-anchor",href:"#阅读","aria-label":'Permalink to "阅读"'},"​")],-1),b=e("blockquote",null,[e("p",null,[t("阅读Web版GitHub链接："),e("a",{href:"https://github.com/hectorqin/reader",target:"_blank",rel:"noreferrer"},"https://github.com/hectorqin/reader")])],-1),y=e("p",null,[t("老书虫应该都听过用过"),e("code",null,"阅读"),t("这个APP吧？但很可惜的是，它并没有ios端。今天，我来出个部署Web版阅读的教程，让ios用户也能使用到阅读")],-1),F=e("h2",{id:"部署",tabindex:"-1"},[t("部署 "),e("a",{class:"header-anchor",href:"#部署","aria-label":'Permalink to "部署"'},"​")],-1),_=e("h3",{id:"创建repl",tabindex:"-1"},[t("创建Repl "),e("a",{class:"header-anchor",href:"#创建repl","aria-label":'Permalink to "创建Repl"'},"​")],-1),C=e("p",null,[t("老规矩，打开"),e("code",null,"Replit"),t("，新建"),e("code",null,"Repl"),t("，导入"),e("a",{href:"https://github.com/MengNianxiaoyao/reader-replit",target:"_blank",rel:"noreferrer"},"GitHub仓库"),t("或者直接建项目，项目语言选择"),e("code",null,"Blank Repl"),t("，项目名称随意。")],-1),v=e("figure",null,[e("img",{src:"https://article.biliimg.com/bfs/article/5f4ead2565c341b589430da0807c4414e438169f.png",alt:"image-20230906191554021",loading:"lazy",decoding:"async",class:"lazy"})],-1),B=e("p",null,[t("如果是直接建项目，创建完成需要在"),e("code",null,"Shell"),t("选项卡执行以下命令")],-1),E=e("div",{style:{"max-height":"200px"},class:"language-shell vp-adaptive-theme line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"shell"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"git"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," clone"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," https://github.com/MengNianxiaoyao/reader-replit"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," && "),e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"mv"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -b"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," reader-replit/"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"*"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ./"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," && "),e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"mv"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -b"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," reader-replit/.[^.]"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"*"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ./"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," && "),e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"rm"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -rf"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," *"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"~"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," && "),e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"rm"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -rf"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," reader-replit")])])]),e("button",{class:"collapse"}),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br")])],-1),$=e("figure",null,[e("img",{src:"https://article.biliimg.com/bfs/article/017854297abc64363840f64d794ffc56177ff3c7.png",alt:"image-20230906191640704",loading:"lazy",decoding:"async",class:"lazy"})],-1),x=e("h3",{id:"配置",tabindex:"-1"},[t("配置 "),e("a",{class:"header-anchor",href:"#配置","aria-label":'Permalink to "配置"'},"​")],-1),R=e("p",null,[t("创建完成并导入后，可选是否配置变量。变量配置在"),e("code",null,"Secrets"),t("选项卡内，如没有可点击红框内加号搜索打开")],-1),P=e("figure",null,[e("img",{src:"https://article.biliimg.com/bfs/article/f0983077ea41b1f099dbee4d6382be7e56ce51b4.png",alt:"image-20230906191745202",loading:"lazy",decoding:"async",class:"lazy"})],-1),z=e("blockquote",null,[e("p",null,"如不需要多用户，可跳过此步")],-1),N=e("table",null,[e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"变量名"),e("th",{style:{"text-align":"center"}},"内容"),e("th",{style:{"text-align":"center"}},"释义")])]),e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"center"}},"secureKey"),e("td",{style:{"text-align":"center"}},"随意"),e("td",{style:{"text-align":"center"}},"管理密码")]),e("tr",null,[e("td",{style:{"text-align":"center"}},"inviteCode"),e("td",{style:{"text-align":"center"}},"随意"),e("td",{style:{"text-align":"center"}},"注册邀请码")])])],-1),T=e("h3",{id:"运行",tabindex:"-1"},[t("运行 "),e("a",{class:"header-anchor",href:"#运行","aria-label":'Permalink to "运行"'},"​")],-1),W=e("p",null,[t("一切ok后，点击"),e("code",null,"Run"),t("运行，如"),e("code",null,"Console"),t("选项卡弹出选项，直接回车继续运行即可，"),e("code",null,"Webview"),t("选项卡也会出现阅读的界面")],-1),O={__name:"reader",setup(w,{expose:h}){const l=JSON.parse('{"title":"使用Replit平台免费搭建Web版阅读","description":"","frontmatter":{"title":"使用Replit平台免费搭建Web版阅读","categories":"白嫖教程","tags":["阅读","Replit","文档","白嫖教程"],"cover":"https://i0.hdslb.com/bfs/article/2f4bbf223acfc60d26239d464fc14439381745966.jpg","date":"2023-09-06T14:30:00.000Z","updated":"2023-09-06T14:30:00.000Z"},"headers":[{"level":2,"title":"阅读","slug":"阅读","link":"#阅读","children":[]},{"level":2,"title":"部署","slug":"部署","link":"#部署","children":[{"level":3,"title":"创建Repl","slug":"创建repl","link":"#创建repl","children":[]},{"level":3,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":3,"title":"运行","slug":"运行","link":"#运行","children":[]}]}],"relativePath":"pages/posts/tech/reader.md","path":"/home/runner/work/blog/blog/pages/posts/tech/reader.md","lastUpdated":1712978867000}'),r=p(),n=l.frontmatter||{};return r.meta.frontmatter=Object.assign(r.meta.frontmatter||{},l.frontmatter||{}),o("pageData",l),o("valaxy:frontmatter",n),globalThis.$frontmatter=n,h({frontmatter:{title:"使用Replit平台免费搭建Web版阅读",categories:"白嫖教程",tags:["阅读","Replit","文档","白嫖教程"],cover:"https://i0.hdslb.com/bfs/article/2f4bbf223acfc60d26239d464fc14439381745966.jpg",date:"2023-09-06T14:30:00.000Z",updated:"2023-09-06T14:30:00.000Z"}}),(a,S)=>{const d=c;return k(),g(d,{frontmatter:m(n)},{"main-content-md":i(()=>[f,u(" more "),b,y,F,_,C,v,B,E,$,x,R,P,z,N,T,W]),"main-header":i(()=>[s(a.$slots,"main-header")]),"main-header-after":i(()=>[s(a.$slots,"main-header-after")]),"main-nav":i(()=>[s(a.$slots,"main-nav")]),"main-content":i(()=>[s(a.$slots,"main-content")]),"main-content-after":i(()=>[s(a.$slots,"main-content-after")]),"main-nav-before":i(()=>[s(a.$slots,"main-nav-before")]),"main-nav-after":i(()=>[s(a.$slots,"main-nav-after")]),comment:i(()=>[s(a.$slots,"comment")]),footer:i(()=>[s(a.$slots,"footer")]),aside:i(()=>[s(a.$slots,"aside")]),"aside-custom":i(()=>[s(a.$slots,"aside-custom")]),default:i(()=>[s(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{O as default};