import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-jcWyOlCR.js";import{_ as d,u as m,p as h,c as y,w as t,o as u,b as e,d as l,e as r,a as g,r as o,f}from"./app-QwG-BRyz.js";import"./YunFooter.vue_vue_type_style_index_0_lang-DPytKUf3.js";import"./YunCard.vue_vue_type_script_setup_true_lang-alb_G5lA.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-7VLiKTfH.js";import"./index-nlSmcLJj.js";const K=JSON.parse('{"title":"使用Replit平台免费搭建Web版阅读","description":"","frontmatter":{"title":"使用Replit平台免费搭建Web版阅读","end":true,"excerpt_type":"html","categories":"白嫖教程","tags":["阅读","Replit","文档","白嫖教程"],"time_warning":true,"cover":"https://i0.wp.com/tva4.sinaimg.cn/large/0072Vf1pgy1foxkcf9mfnj31hc0u0h7p.jpg","date":"2023-09-06T14:30:00.000Z"},"headers":[{"level":2,"title":"阅读","slug":"阅读","link":"#阅读","children":[]},{"level":2,"title":"部署","slug":"部署","link":"#部署","children":[{"level":3,"title":"创建Repl","slug":"创建repl","link":"#创建repl","children":[]},{"level":3,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":3,"title":"运行","slug":"运行","link":"#运行","children":[]}]}],"relativePath":"pages/posts/reader.md","path":"/home/runner/work/blog/blog/pages/posts/reader.md","lastUpdated":1703499656000}'),n=JSON.parse('{"title":"使用Replit平台免费搭建Web版阅读","description":"","frontmatter":{"title":"使用Replit平台免费搭建Web版阅读","end":true,"excerpt_type":"html","categories":"白嫖教程","tags":["阅读","Replit","文档","白嫖教程"],"time_warning":true,"cover":"https://i0.wp.com/tva4.sinaimg.cn/large/0072Vf1pgy1foxkcf9mfnj31hc0u0h7p.jpg","date":"2023-09-06T14:30:00.000Z"},"headers":[{"level":2,"title":"阅读","slug":"阅读","link":"#阅读","children":[]},{"level":2,"title":"部署","slug":"部署","link":"#部署","children":[{"level":3,"title":"创建Repl","slug":"创建repl","link":"#创建repl","children":[]},{"level":3,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":3,"title":"运行","slug":"运行","link":"#运行","children":[]}]}],"relativePath":"pages/posts/reader.md","path":"/home/runner/work/blog/blog/pages/posts/reader.md","lastUpdated":1703499656000}'),E={name:"pages/posts/reader.md",data(){return{data:n,frontmatter:n.frontmatter,$frontmatter:n.frontmatter}},setup(){const s=m();s.meta.frontmatter=Object.assign(s.meta.frontmatter,n.frontmatter),h("pageData",n)}},b={id:"阅读",tabindex:"-1"},_=e("p",null,[l("老书虫应该都听过用过"),e("code",null,"阅读"),l("这个APP吧？但很可惜的是，它并没有ios端。今天，我来出个部署Web版阅读的教程，让ios用户也能使用到阅读")],-1),F={id:"部署",tabindex:"-1"},v={id:"创建repl",tabindex:"-1"},C=e("code",null,"Replit",-1),k=e("code",null,"Repl",-1),B=e("code",null,"Blank Repl",-1),x=e("figure",null,[e("img",{src:"https://article.biliimg.com/bfs/article/5f4ead2565c341b589430da0807c4414e438169f.png",alt:"image-20230906191554021",loading:"lazy",decoding:"async",class:"lazy"})],-1),$=e("p",null,[l("如果是直接建项目，创建完成需要在"),e("code",null,"Shell"),l("选项卡执行以下命令")],-1),R=e("div",{style:{"max-height":"200px"},class:"language-shell line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"shell"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"git"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"clone"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"https://github.com/MengNianxiaoyao/reader-replit"),e("span",{style:{color:"#E1E4E8"}}," && "),e("span",{style:{color:"#B392F0"}},"mv"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#79B8FF"}},"-b"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"reader-replit/"),e("span",{style:{color:"#79B8FF"}},"*"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"./"),e("span",{style:{color:"#E1E4E8"}}," && "),e("span",{style:{color:"#B392F0"}},"mv"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#79B8FF"}},"-b"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"reader-replit/.[^.]"),e("span",{style:{color:"#79B8FF"}},"*"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"./"),e("span",{style:{color:"#E1E4E8"}}," && "),e("span",{style:{color:"#B392F0"}},"rm"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#79B8FF"}},"-rf"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#79B8FF"}},"*"),e("span",{style:{color:"#9ECBFF"}},"~"),e("span",{style:{color:"#E1E4E8"}}," && "),e("span",{style:{color:"#B392F0"}},"rm"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#79B8FF"}},"-rf"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"reader-replit")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6F42C1"}},"git"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"clone"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"https://github.com/MengNianxiaoyao/reader-replit"),e("span",{style:{color:"#24292E"}}," && "),e("span",{style:{color:"#6F42C1"}},"mv"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#005CC5"}},"-b"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"reader-replit/"),e("span",{style:{color:"#005CC5"}},"*"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"./"),e("span",{style:{color:"#24292E"}}," && "),e("span",{style:{color:"#6F42C1"}},"mv"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#005CC5"}},"-b"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"reader-replit/.[^.]"),e("span",{style:{color:"#005CC5"}},"*"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"./"),e("span",{style:{color:"#24292E"}}," && "),e("span",{style:{color:"#6F42C1"}},"rm"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#005CC5"}},"-rf"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#005CC5"}},"*"),e("span",{style:{color:"#032F62"}},"~"),e("span",{style:{color:"#24292E"}}," && "),e("span",{style:{color:"#6F42C1"}},"rm"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#005CC5"}},"-rf"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"reader-replit")])])]),e("button",{class:"collapse"}),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br")])],-1),w=e("figure",null,[e("img",{src:"https://article.biliimg.com/bfs/article/017854297abc64363840f64d794ffc56177ff3c7.png",alt:"image-20230906191640704",loading:"lazy",decoding:"async",class:"lazy"})],-1),N={id:"配置",tabindex:"-1"},P=e("p",null,[l("创建完成并导入后，可选是否配置变量。变量配置在"),e("code",null,"Secrets"),l("选项卡内，如没有可点击红框内加号搜索打开")],-1),V=e("figure",null,[e("img",{src:"https://article.biliimg.com/bfs/article/f0983077ea41b1f099dbee4d6382be7e56ce51b4.png",alt:"image-20230906191745202",loading:"lazy",decoding:"async",class:"lazy"})],-1),W=e("blockquote",null,[e("p",null,"如不需要多用户，可跳过此步")],-1),z=e("table",null,[e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"变量名"),e("th",{style:{"text-align":"center"}},"内容"),e("th",{style:{"text-align":"center"}},"释义")])]),e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"center"}},"secureKey"),e("td",{style:{"text-align":"center"}},"随意"),e("td",{style:{"text-align":"center"}},"管理密码")]),e("tr",null,[e("td",{style:{"text-align":"center"}},"inviteCode"),e("td",{style:{"text-align":"center"}},"随意"),e("td",{style:{"text-align":"center"}},"注册邀请码")])])],-1),j={id:"运行",tabindex:"-1"},S=e("p",null,[l("一切ok后，点击"),e("code",null,"Run"),l("运行，如"),e("code",null,"Console"),l("选项卡弹出选项，直接回车继续运行即可，"),e("code",null,"Webview"),l("选项卡也会出现阅读的界面")],-1);function q(s,M,O,T,c,A){const a=f,i=p;return u(),y(i,{frontmatter:c.frontmatter,data:c.data},{"main-content-md":t(()=>[e("h2",b,[l("阅读 "),r(a,{class:"header-anchor",href:"#阅读","aria-label":'Permalink to "阅读"'},{default:t(()=>[l("​")]),_:1})]),g(" more "),e("blockquote",null,[e("p",null,[l("阅读Web版GitHub链接："),r(a,{href:"https://github.com/hectorqin/reader",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("https://github.com/hectorqin/reader")]),_:1})])]),_,e("h2",F,[l("部署 "),r(a,{class:"header-anchor",href:"#部署","aria-label":'Permalink to "部署"'},{default:t(()=>[l("​")]),_:1})]),e("h3",v,[l("创建Repl "),r(a,{class:"header-anchor",href:"#创建repl","aria-label":'Permalink to "创建Repl"'},{default:t(()=>[l("​")]),_:1})]),e("p",null,[l("老规矩，打开"),C,l("，新建"),k,l("，导入"),r(a,{href:"https://github.com/MengNianxiaoyao/reader-replit",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("GitHub仓库")]),_:1}),l("或者直接建项目，项目语言选择"),B,l("，项目名称随意。")]),x,$,R,w,e("h3",N,[l("配置 "),r(a,{class:"header-anchor",href:"#配置","aria-label":'Permalink to "配置"'},{default:t(()=>[l("​")]),_:1})]),P,V,W,z,e("h3",j,[l("运行 "),r(a,{class:"header-anchor",href:"#运行","aria-label":'Permalink to "运行"'},{default:t(()=>[l("​")]),_:1})]),S]),"main-header":t(()=>[o(s.$slots,"main-header")]),"main-header-after":t(()=>[o(s.$slots,"main-header-after")]),"main-nav":t(()=>[o(s.$slots,"main-nav")]),"main-content":t(()=>[o(s.$slots,"main-content")]),"main-content-after":t(()=>[o(s.$slots,"main-content-after")]),"main-nav-before":t(()=>[o(s.$slots,"main-nav-before")]),"main-nav-after":t(()=>[o(s.$slots,"main-nav-after")]),comment:t(()=>[o(s.$slots,"comment")]),footer:t(()=>[o(s.$slots,"footer")]),aside:t(()=>[o(s.$slots,"aside")]),"aside-custom":t(()=>[o(s.$slots,"aside-custom")]),default:t(()=>[o(s.$slots,"default")]),_:3},8,["frontmatter","data"])}const L=d(E,[["render",q]]);export{K as __pageData,L as default};
