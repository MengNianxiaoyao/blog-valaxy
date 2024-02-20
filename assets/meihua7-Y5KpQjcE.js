import{_ as o}from"./ValaxyMain.vue_vue_type_style_index_0_lang-R2jF5jDZ.js";import{a as d,p as r,o as c,c as E,w as a,f as g,g as m,r as t,h as s,i}from"./app-slupe_Ya.js";import"./YunFooter.vue_vue_type_style_index_0_lang--d_4wnIy.js";import"./YunCard.vue_vue_type_script_setup_true_lang-DWElhRvy.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-dA1hYYDX.js";import"./index-C7yU5XnD.js";const y=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},[s("i",{class:"icon i-arcticons-pixel-tips"}),s("span",{lang:"en"},"TIP"),s("span",{lang:"zh-CN"},"提示")]),s("p",null,[i("参考了安知鱼的方案进行修改 原教程"),s("a",{href:"https://anzhiy.cn/posts/sdxhu.html#random.js%E9%9A%8F%E6%9C%BA%E8%B7%B3%E8%BD%AC%E4%B8%80%E7%AF%87%E6%96%87%E7%AB%A0",target:"_blank",rel:"noreferrer"},"butterfly 重装日记")])],-1),u=s("h2",{id:"闲聊",tabindex:"-1"},[i("闲聊 "),s("a",{class:"header-anchor",href:"#闲聊","aria-label":'Permalink to "闲聊"'},"​")],-1),b=s("p",null,[i("在"),s("a",{href:"https://blog.eu.org/posts/meihua2",target:"_blank",rel:"noreferrer"},"【个人博客网站】博客美化（二）：制作右键菜单"),i("中，有一个功能一直有问题，那就是"),s("code",null,"随便逛逛")],-1),F=s("p",null,"这个功能实现的是随机文章显示，但因为我忽略了某些东西，导致该功能异常",-1),f=s("h2",{id:"安装",tabindex:"-1"},[i("安装 "),s("a",{class:"header-anchor",href:"#安装","aria-label":'Permalink to "安装"'},"​")],-1),C=s("div",{style:{"max-height":"200px"},class:"language-shell vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install hexo-generator-sitemap --save")])])]),s("button",{class:"collapse"}),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])],-1),v=s("blockquote",null,[s("p",null,"这个插件是生成站点地图，用于随机访问文章")],-1),_=s("h2",{id:"js",tabindex:"-1"},[i("js "),s("a",{class:"header-anchor",href:"#js","aria-label":'Permalink to "js"'},"​")],-1),B=s("p",null,[i("创建"),s("code",null,"themes/butterfly/scripts/helpers/random.js"),i("文件")],-1),A=s("div",{style:{"max-height":"200px"},class:"language-js vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"hexo.extend.generator."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"register"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'random'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ("),s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"locals"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," config"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," hexo.config.random "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"||"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," posts"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," []")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    for"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ("),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," post"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," of"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," locals.posts.data) {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        if"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (post.random "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"!=="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," false"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") posts."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"push"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(post.path)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    return"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        path: config.path "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"||"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'mengnianxiaoyao/random.js'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        data: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`var posts=${"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"JSON"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"stringify"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"("),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"posts"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},")"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},`};function toRandomPost(){window.open('/'+posts[Math.floor(Math.random() * posts.length)],"_self");};\``)]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")])])]),s("button",{class:"collapse"}),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br")])],-1),D=s("p",null,[i("如果你开启了"),s("code",null,"pjax"),i("，就用下面的代码")],-1),x=s("div",{style:{"max-height":"200px"},class:"language-js vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"hexo.extend.generator."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"register"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'random'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ("),s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"locals"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," config"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," hexo.config.random "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"||"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," posts"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," []")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    for"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ("),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," post"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," of"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," locals.posts.data) {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        if"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (post.random "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"!=="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," false"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") posts."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"push"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(post.path)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    return"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        path: config.path "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"||"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'mengnianxiaoyao/random.js'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        data: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`var posts=${"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"JSON"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"stringify"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"("),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"posts"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},")"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"};function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};`")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")])])]),s("button",{class:"collapse"}),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br")])],-1),j=s("h2",{id:"配置",tabindex:"-1"},[i("配置 "),s("a",{class:"header-anchor",href:"#配置","aria-label":'Permalink to "配置"'},"​")],-1),$=s("h3",{id:"插件配置",tabindex:"-1"},[i("插件配置 "),s("a",{class:"header-anchor",href:"#插件配置","aria-label":'Permalink to "插件配置"'},"​")],-1),P=s("blockquote",null,[s("p",null,[i("具体文档地址："),s("a",{href:"https://github.com/hexojs/hexo-generator-sitemap",target:"_blank",rel:"noreferrer"},"https://github.com/hexojs/hexo-generator-sitemap")])],-1),w=s("p",null,"在hexo配置文件或者主题配置文件中，添加以下内容",-1),N=s("div",{style:{"max-height":"200px"},class:"language-yaml vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yaml"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"## 站点地图")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"sitemap"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  path"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"sitemap.xml")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  rel"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  tags"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  categories"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true")])])]),s("button",{class:"collapse"}),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br")])],-1),T=s("h3",{id:"js配置",tabindex:"-1"},[i("js配置 "),s("a",{class:"header-anchor",href:"#js配置","aria-label":'Permalink to "js配置"'},"​")],-1),M=s("p",null,[i("在主题配置文件中"),s("code",null,"inject"),i("的"),s("code",null,"buttom"),i("项导入")],-1),R=s("div",{style:{"max-height":"200px"},class:"language-yaml vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yaml"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"buttom"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    - "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'<script src="/mengnianxiaoyao/random.js"><\/script>')])])]),s("button",{class:"collapse"}),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br")])],-1),O=s("h2",{id:"调用",tabindex:"-1"},[i("调用 "),s("a",{class:"header-anchor",href:"#调用","aria-label":'Permalink to "调用"'},"​")],-1),S=s("p",null,[i("在需要调用的位置执行"),s("code",null,"toRandomPost()"),i("函数即可。")],-1),V=s("p",null,[i("比如任意"),s("code",null,"dom"),i("添加"),s("code",null,'onclick="toRandomPost()"')],-1),L={__name:"meihua7",setup(Z,{expose:k}){const e=JSON.parse('{"title":"【个人博客网站】博客美化（七）：随机文章显示","description":"","frontmatter":{"title":"【个人博客网站】博客美化（七）：随机文章显示","categories":["博客教程","美化教程"],"tags":["博客","文档","美化教程"],"cover":"https://i0.hdslb.com/bfs/article/2add59c61302dc57c5a94020b842cf61381745966.jpg","date":"2022-09-30T19:30:00.000Z","updated":"2022-09-30T19:30:00.000Z"},"headers":[{"level":2,"title":"闲聊","slug":"闲聊","link":"#闲聊","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"js","slug":"js","link":"#js","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"插件配置","slug":"插件配置","link":"#插件配置","children":[]},{"level":3,"title":"js配置","slug":"js配置","link":"#js配置","children":[]}]},{"level":2,"title":"调用","slug":"调用","link":"#调用","children":[]}],"relativePath":"pages/posts/meihua/meihua7.md","path":"/home/runner/work/blog/blog/pages/posts/meihua/meihua7.md","lastUpdated":1708435687000}'),h=d(),n=e.frontmatter||{};return h.meta.frontmatter=Object.assign(h.meta.frontmatter||{},e.frontmatter||{}),r("pageData",e),r("valaxy:frontmatter",n),globalThis.$frontmatter=n,k({frontmatter:{title:"【个人博客网站】博客美化（七）：随机文章显示",categories:["博客教程","美化教程"],tags:["博客","文档","美化教程"],cover:"https://i0.hdslb.com/bfs/article/2add59c61302dc57c5a94020b842cf61381745966.jpg",date:"2022-09-30T19:30:00.000Z",updated:"2022-09-30T19:30:00.000Z"}}),(l,q)=>{const p=o;return c(),E(p,{frontmatter:g(n)},{"main-content-md":a(()=>[y,m(" more "),u,b,F,f,C,v,_,B,A,D,x,j,$,P,w,N,T,M,R,O,S,V]),"main-header":a(()=>[t(l.$slots,"main-header")]),"main-header-after":a(()=>[t(l.$slots,"main-header-after")]),"main-nav":a(()=>[t(l.$slots,"main-nav")]),"main-content":a(()=>[t(l.$slots,"main-content")]),"main-content-after":a(()=>[t(l.$slots,"main-content-after")]),"main-nav-before":a(()=>[t(l.$slots,"main-nav-before")]),"main-nav-after":a(()=>[t(l.$slots,"main-nav-after")]),comment:a(()=>[t(l.$slots,"comment")]),footer:a(()=>[t(l.$slots,"footer")]),aside:a(()=>[t(l.$slots,"aside")]),"aside-custom":a(()=>[t(l.$slots,"aside-custom")]),default:a(()=>[t(l.$slots,"default")]),_:3},8,["frontmatter"])}}};export{L as default};