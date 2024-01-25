import{_ as i}from"./ValaxyMain.vue_vue_type_style_index_0_lang-x6HhBMJm.js";import{_ as E,a as y,p as d,o as h,c as m,w as o,f as s,i as l,g as t,s as u,r as a,h as b}from"./app-v7NOZDg7.js";import"./YunFooter.vue_vue_type_style_index_0_lang-hFZx_Yxy.js";import"./YunCard.vue_vue_type_script_setup_true_lang-u0HMrAIT.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-zSpTvggn.js";import"./index-nlSmcLJj.js";const r=JSON.parse('{"title":"【个人博客网站】博客美化（七）：随机文章显示","description":"","frontmatter":{"title":"【个人博客网站】博客美化（七）：随机文章显示","categories":"美化教程","tags":["博客","文档","美化教程"],"cover":"https://i0.hdslb.com/bfs/article/2add59c61302dc57c5a94020b842cf61381745966.jpg","swiper_index":1,"abbrlink":"66de18e7","date":"2022-09-30T19:30:00.000Z"},"headers":[{"level":2,"title":"闲聊","slug":"闲聊","link":"#闲聊","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"js","slug":"js","link":"#js","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"插件配置","slug":"插件配置","link":"#插件配置","children":[]},{"level":3,"title":"js配置","slug":"js配置","link":"#js配置","children":[]}]},{"level":2,"title":"调用","slug":"调用","link":"#调用","children":[]}],"relativePath":"pages/posts/meihua7.md","path":"/home/runner/work/blog/blog/pages/posts/meihua7.md","lastUpdated":1706192206000}'),F={name:"pages/posts/meihua7.md",data(){return{data:r,frontmatter:r.frontmatter,$frontmatter:r.frontmatter}},setup(){const n=y();n.meta.frontmatter=Object.assign(n.meta.frontmatter||{},r.frontmatter||{}),d("pageData",r)}},g={class:"tip custom-block"},f=s("p",{class:"custom-block-title"},[s("i",{class:"icon i-arcticons-pixel-tips"}),s("span",{lang:"en"},"TIP"),s("span",{lang:"zh-CN"},"提示")],-1),_={id:"闲聊",tabindex:"-1"},C=s("code",null,"随便逛逛",-1),B=s("p",null,"这个功能实现的是随机文章显示，但因为我忽略了某些东西，导致该功能异常",-1),k={id:"安装",tabindex:"-1"},x=s("div",{style:{"max-height":"200px"},class:"language-shell line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"npm"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"install"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"hexo-generator-sitemap"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"--save")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"npm"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"install"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"hexo-generator-sitemap"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"--save")])])]),s("button",{class:"collapse"}),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])],-1),v=s("blockquote",null,[s("p",null,"这个插件是生成站点地图，用于随机访问文章")],-1),A={id:"js",tabindex:"-1"},D=s("p",null,[l("创建"),s("code",null,"themes/butterfly/scripts/helpers/random.js"),l("文件")],-1),j=s("div",{style:{"max-height":"200px"},class:"language-js line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"hexo.extend.generator."),s("span",{style:{color:"#B392F0"}},"register"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'random'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"locals"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"config"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," hexo.config.random "),s("span",{style:{color:"#F97583"}},"||"),s("span",{style:{color:"#E1E4E8"}}," {}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"posts"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," []")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"for"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"post"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"of"),s("span",{style:{color:"#E1E4E8"}}," locals.posts.data) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," (post.random "),s("span",{style:{color:"#F97583"}},"!=="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},") posts."),s("span",{style:{color:"#B392F0"}},"push"),s("span",{style:{color:"#E1E4E8"}},"(post.path)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        path: config.path "),s("span",{style:{color:"#F97583"}},"||"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'mengnianxiaoyao/random.js'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        data: "),s("span",{style:{color:"#9ECBFF"}},"`var posts=${"),s("span",{style:{color:"#79B8FF"}},"JSON"),s("span",{style:{color:"#9ECBFF"}},"."),s("span",{style:{color:"#B392F0"}},"stringify"),s("span",{style:{color:"#9ECBFF"}},"("),s("span",{style:{color:"#E1E4E8"}},"posts"),s("span",{style:{color:"#9ECBFF"}},")"),s("span",{style:{color:"#9ECBFF"}},`};function toRandomPost(){window.open('/'+posts[Math.floor(Math.random() * posts.length)],"_self");};\``)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"})")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"hexo.extend.generator."),s("span",{style:{color:"#6F42C1"}},"register"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'random'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"locals"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"config"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," hexo.config.random "),s("span",{style:{color:"#D73A49"}},"||"),s("span",{style:{color:"#24292E"}}," {}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"posts"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," []")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"for"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"post"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"of"),s("span",{style:{color:"#24292E"}}," locals.posts.data) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," (post.random "),s("span",{style:{color:"#D73A49"}},"!=="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},") posts."),s("span",{style:{color:"#6F42C1"}},"push"),s("span",{style:{color:"#24292E"}},"(post.path)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        path: config.path "),s("span",{style:{color:"#D73A49"}},"||"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'mengnianxiaoyao/random.js'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        data: "),s("span",{style:{color:"#032F62"}},"`var posts=${"),s("span",{style:{color:"#005CC5"}},"JSON"),s("span",{style:{color:"#032F62"}},"."),s("span",{style:{color:"#6F42C1"}},"stringify"),s("span",{style:{color:"#032F62"}},"("),s("span",{style:{color:"#24292E"}},"posts"),s("span",{style:{color:"#032F62"}},")"),s("span",{style:{color:"#032F62"}},`};function toRandomPost(){window.open('/'+posts[Math.floor(Math.random() * posts.length)],"_self");};\``)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"})")])])]),s("button",{class:"collapse"}),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br")])],-1),$=s("p",null,[l("如果你开启了"),s("code",null,"pjax"),l("，就用下面的代码")],-1),P=s("div",{style:{"max-height":"200px"},class:"language-js line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"hexo.extend.generator."),s("span",{style:{color:"#B392F0"}},"register"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'random'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"locals"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"config"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," hexo.config.random "),s("span",{style:{color:"#F97583"}},"||"),s("span",{style:{color:"#E1E4E8"}}," {}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"posts"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," []")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"for"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"post"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"of"),s("span",{style:{color:"#E1E4E8"}}," locals.posts.data) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," (post.random "),s("span",{style:{color:"#F97583"}},"!=="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},") posts."),s("span",{style:{color:"#B392F0"}},"push"),s("span",{style:{color:"#E1E4E8"}},"(post.path)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        path: config.path "),s("span",{style:{color:"#F97583"}},"||"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'mengnianxiaoyao/random.js'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        data: "),s("span",{style:{color:"#9ECBFF"}},"`var posts=${"),s("span",{style:{color:"#79B8FF"}},"JSON"),s("span",{style:{color:"#9ECBFF"}},"."),s("span",{style:{color:"#B392F0"}},"stringify"),s("span",{style:{color:"#9ECBFF"}},"("),s("span",{style:{color:"#E1E4E8"}},"posts"),s("span",{style:{color:"#9ECBFF"}},")"),s("span",{style:{color:"#9ECBFF"}},"};function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"})")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"hexo.extend.generator."),s("span",{style:{color:"#6F42C1"}},"register"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'random'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"locals"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"config"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," hexo.config.random "),s("span",{style:{color:"#D73A49"}},"||"),s("span",{style:{color:"#24292E"}}," {}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"posts"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," []")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"for"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"post"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"of"),s("span",{style:{color:"#24292E"}}," locals.posts.data) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," (post.random "),s("span",{style:{color:"#D73A49"}},"!=="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},") posts."),s("span",{style:{color:"#6F42C1"}},"push"),s("span",{style:{color:"#24292E"}},"(post.path)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        path: config.path "),s("span",{style:{color:"#D73A49"}},"||"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'mengnianxiaoyao/random.js'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        data: "),s("span",{style:{color:"#032F62"}},"`var posts=${"),s("span",{style:{color:"#005CC5"}},"JSON"),s("span",{style:{color:"#032F62"}},"."),s("span",{style:{color:"#6F42C1"}},"stringify"),s("span",{style:{color:"#032F62"}},"("),s("span",{style:{color:"#24292E"}},"posts"),s("span",{style:{color:"#032F62"}},")"),s("span",{style:{color:"#032F62"}},"};function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"})")])])]),s("button",{class:"collapse"}),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br")])],-1),w={id:"配置",tabindex:"-1"},N={id:"插件配置",tabindex:"-1"},M=s("p",null,"在hexo配置文件或者主题配置文件中，添加以下内容",-1),R=s("div",{style:{"max-height":"200px"},class:"language-yaml line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yaml"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"## 站点地图")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#85E89D"}},"sitemap"),s("span",{style:{color:"#E1E4E8"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#85E89D"}},"path"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#9ECBFF"}},"sitemap.xml")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#85E89D"}},"rel"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"false")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#85E89D"}},"tags"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#85E89D"}},"categories"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"true")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"## 站点地图")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#22863A"}},"sitemap"),s("span",{style:{color:"#24292E"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#22863A"}},"path"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#032F62"}},"sitemap.xml")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#22863A"}},"rel"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"false")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#22863A"}},"tags"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#22863A"}},"categories"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"true")])])]),s("button",{class:"collapse"}),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br")])],-1),O={id:"js配置",tabindex:"-1"},S=s("p",null,[l("在主题配置文件中"),s("code",null,"inject"),l("的"),s("code",null,"buttom"),l("项导入")],-1),J=s("div",{style:{"max-height":"200px"},class:"language-yaml line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yaml"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#85E89D"}},"buttom"),s("span",{style:{color:"#E1E4E8"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    - "),s("span",{style:{color:"#9ECBFF"}},'<script src="/mengnianxiaoyao/random.js"><\/script>')])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#22863A"}},"buttom"),s("span",{style:{color:"#24292E"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    - "),s("span",{style:{color:"#032F62"}},'<script src="/mengnianxiaoyao/random.js"><\/script>')])])]),s("button",{class:"collapse"}),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br")])],-1),V={id:"调用",tabindex:"-1"},T=s("p",null,[l("在需要调用的位置执行"),s("code",null,"toRandomPost()"),l("函数即可。")],-1),U=s("p",null,[l("比如任意"),s("code",null,"dom"),l("添加"),s("code",null,'onclick="toRandomPost()"')],-1);function q(n,z,I,L,c,Z){const e=b,p=i;return h(),m(p,{frontmatter:c.frontmatter,data:c.data},{"main-content-md":o(()=>[s("div",g,[f,s("p",null,[l("参考了安知鱼的方案进行修改 原教程"),t(e,{href:"https://anzhiy.cn/posts/sdxhu.html#random.js%E9%9A%8F%E6%9C%BA%E8%B7%B3%E8%BD%AC%E4%B8%80%E7%AF%87%E6%96%87%E7%AB%A0",target:"_blank",rel:"noreferrer"},{default:o(()=>[l("butterfly 重装日记")]),_:1})])]),u(" more "),s("h2",_,[l("闲聊 "),t(e,{class:"header-anchor",href:"#闲聊","aria-label":'Permalink to "闲聊"'},{default:o(()=>[l("​")]),_:1})]),s("p",null,[l("在"),t(e,{href:"https://blog.eu.org/posts/meihua2",target:"_blank",rel:"noreferrer"},{default:o(()=>[l("【个人博客网站】博客美化（二）：制作右键菜单")]),_:1}),l("中，有一个功能一直有问题，那就是"),C]),B,s("h2",k,[l("安装 "),t(e,{class:"header-anchor",href:"#安装","aria-label":'Permalink to "安装"'},{default:o(()=>[l("​")]),_:1})]),x,v,s("h2",A,[l("js "),t(e,{class:"header-anchor",href:"#js","aria-label":'Permalink to "js"'},{default:o(()=>[l("​")]),_:1})]),D,j,$,P,s("h2",w,[l("配置 "),t(e,{class:"header-anchor",href:"#配置","aria-label":'Permalink to "配置"'},{default:o(()=>[l("​")]),_:1})]),s("h3",N,[l("插件配置 "),t(e,{class:"header-anchor",href:"#插件配置","aria-label":'Permalink to "插件配置"'},{default:o(()=>[l("​")]),_:1})]),s("blockquote",null,[s("p",null,[l("具体文档地址："),t(e,{href:"https://github.com/hexojs/hexo-generator-sitemap",target:"_blank",rel:"noreferrer"},{default:o(()=>[l("https://github.com/hexojs/hexo-generator-sitemap")]),_:1})])]),M,R,s("h3",O,[l("js配置 "),t(e,{class:"header-anchor",href:"#js配置","aria-label":'Permalink to "js配置"'},{default:o(()=>[l("​")]),_:1})]),S,J,s("h2",V,[l("调用 "),t(e,{class:"header-anchor",href:"#调用","aria-label":'Permalink to "调用"'},{default:o(()=>[l("​")]),_:1})]),T,U]),"main-header":o(()=>[a(n.$slots,"main-header")]),"main-header-after":o(()=>[a(n.$slots,"main-header-after")]),"main-nav":o(()=>[a(n.$slots,"main-nav")]),"main-content":o(()=>[a(n.$slots,"main-content")]),"main-content-after":o(()=>[a(n.$slots,"main-content-after")]),"main-nav-before":o(()=>[a(n.$slots,"main-nav-before")]),"main-nav-after":o(()=>[a(n.$slots,"main-nav-after")]),comment:o(()=>[a(n.$slots,"comment")]),footer:o(()=>[a(n.$slots,"footer")]),aside:o(()=>[a(n.$slots,"aside")]),"aside-custom":o(()=>[a(n.$slots,"aside-custom")]),default:o(()=>[a(n.$slots,"default")]),_:3},8,["frontmatter","data"])}const Y=E(F,[["render",q]]);export{r as data,Y as default};