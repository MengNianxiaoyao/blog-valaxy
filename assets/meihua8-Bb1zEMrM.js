import{_ as m}from"./ValaxyMain.vue_vue_type_style_index_0_lang-BZpWgD50.js";import{a as h,p as i,o as u,c as p,w as t,f as _,g,r as n,h as e,i as o}from"./app-DxBSjxC1.js";import"./YunFooter.vue_vue_type_style_index_0_lang-CqGZatrr.js";import"./YunCard.vue_vue_type_script_setup_true_lang-C6FKQDw_.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-D3HWy0CT.js";import"./index-C7yU5XnD.js";const f=e("blockquote",null,[e("p",null,[o("具体文档地址："),e("a",{href:"https://twikoo.js.org/quick-start.html#vercel-%E9%83%A8%E7%BD%B2",target:"_blank",rel:"noreferrer"},"https://twikoo.js.org/quick-start.html#vercel-部署")])],-1),b=e("h2",{id:"数据库搭建-mongodb",tabindex:"-1"},[o("数据库搭建(MongoDB) "),e("a",{class:"header-anchor",href:"#数据库搭建-mongodb","aria-label":'Permalink to "数据库搭建(MongoDB)"'},"​")],-1),k=e("h3",{id:"创建数据库",tabindex:"-1"},[o("创建数据库 "),e("a",{class:"header-anchor",href:"#创建数据库","aria-label":'Permalink to "创建数据库"'},"​")],-1),v=e("p",null,[o("打开"),e("a",{href:"https://www.mongodb.com/cloud/atlas/register",target:"_blank",rel:"noreferrer"},"MongoDB"),o("，注册账号")],-1),w=e("p",null,[o("注册完成，登录"),e("code",null,"MongoDB")],-1),D=e("p",null,[o("创建好"),e("code",null,"Organizations(组织)"),o("后，点击"),e("code",null,"Projects"),o("、"),e("code",null,"New Project"),o("创建项目")],-1),$=e("p",null,[o("点击"),e("code",null,"Database"),o("、"),e("code",null,"Build a Database"),o("创建数据库")],-1),B=e("p",null,[o("选择"),e("code",null,"free"),o("、"),e("code",null,"aws"),o("、"),e("code",null,"Hong Kong")],-1),P=e("p",null,[o("创建用户，选择"),e("code",null,"My Local Environment"),o("，"),e("code",null,"IP Adddress"),o("填写"),e("code",null,"0.0.0.0/0")],-1),T=e("p",null,"完成创建",-1),V=e("h3",{id:"vercel部署",tabindex:"-1"},[o("Vercel部署 "),e("a",{class:"header-anchor",href:"#vercel部署","aria-label":'Permalink to "Vercel部署"'},"​")],-1),j=e("p",null,[o("MongoDB控制台"),e("code",null,"Database"),o("界面，点击"),e("code",null,"Connect")],-1),M=e("p",null,[o("选择"),e("code",null,"Connect your application"),o("，"),e("code",null,"DRIVER"),o("选择"),e("code",null,"Node.js"),o("，复制字符串")],-1),y=e("p",null,[o("点击以下按钮将 Twikoo 一键部署到 Vercel "),e("a",{href:"https://vercel.com/import/project?template=https://github.com/imaegoo/twikoo/tree/main/src/server/vercel-min",target:"_blank",rel:"noreferrer"},[e("img",{src:"https://vercel.com/button",alt:"https://vercel.com/button"})])],-1),N=e("p",null,[o("twikoo部署完成后，进入项目Settings - Environment Variables，添加环境变量"),e("code",null,"MONGODB_URI"),o("，值为复制的字符串，替换"),e("code",null,"<password>"),o("为数据库用户密码")],-1),C=e("p",null,"进入 Deployments , 然后在任意一项后面点击更多（三个点） , 然后点击Redeploy , 最后点击下面的Redeploy",-1),R=e("p",null,[o("点击 Domains 下方的链接，如果环境配置正确，可以看到"),e("code",null,"“Twikoo 云函数运行正常”"),o("的提示")],-1),x=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},[e("i",{class:"icon i-arcticons-pixel-tips"}),e("span",{lang:"en"},"TIP"),e("span",{lang:"zh-CN"},"提示")]),e("p",null,"如果无法访问，请绑定自定义域名，并删除默认域名(默认域名有可能会干扰网站连接数据库)")],-1),E=e("p",null,[o("Vercel Domains（包含"),e("code",null,"https://"),o("前缀，例如"),e("code",null,"https://xxx.vercel.app"),o("）即为您的环境 id")],-1),O=e("h2",{id:"使用twikoo评论系统",tabindex:"-1"},[o("使用Twikoo评论系统 "),e("a",{class:"header-anchor",href:"#使用twikoo评论系统","aria-label":'Permalink to "使用Twikoo评论系统"'},"​")],-1),I=e("p",null,"将环境id填写到主题配置文件的相关位置，并开启使用",-1),S=e("h2",{id:"开启管理面板",tabindex:"-1"},[o("开启管理面板 "),e("a",{class:"header-anchor",href:"#开启管理面板","aria-label":'Permalink to "开启管理面板"'},"​")],-1),Z=e("p",null,[o("点击评论窗口的"),e("code",null,"小齿轮"),o("图标，设置管理员密码")],-1),q=e("h2",{id:"双评论",tabindex:"-1"},[o("双评论 "),e("a",{class:"header-anchor",href:"#双评论","aria-label":'Permalink to "双评论"'},"​")],-1),z=e("p",null,[o("在主题配置文件的"),e("code",null,"Comments System"),o("中，"),e("code",null,"use"),o("后填写两个不冲突的评论系统")],-1),W={__name:"meihua8",setup(A,{expose:c}){const a=JSON.parse('{"title":"【个人博客网站】博客美化（八）：twikoo评论系统以及双评论","description":"","frontmatter":{"title":"【个人博客网站】博客美化（八）：twikoo评论系统以及双评论","categories":["博客教程","美化教程"],"tags":["博客","文档","美化教程"],"cover":"https://i0.hdslb.com/bfs/article/2add59c61302dc57c5a94020b842cf61381745966.jpg","date":"2022-10-03T14:30:00.000Z","updated":"2022-10-03T14:30:00.000Z"},"headers":[{"level":2,"title":"数据库搭建(MongoDB)","slug":"数据库搭建-mongodb","link":"#数据库搭建-mongodb","children":[{"level":3,"title":"创建数据库","slug":"创建数据库","link":"#创建数据库","children":[]},{"level":3,"title":"Vercel部署","slug":"vercel部署","link":"#vercel部署","children":[]}]},{"level":2,"title":"使用Twikoo评论系统","slug":"使用twikoo评论系统","link":"#使用twikoo评论系统","children":[]},{"level":2,"title":"开启管理面板","slug":"开启管理面板","link":"#开启管理面板","children":[]},{"level":2,"title":"双评论","slug":"双评论","link":"#双评论","children":[]}],"relativePath":"/home/runner/work/blog/blog/pages/posts/meihua/meihua8.md","path":"/home/runner/work/blog/blog/home/runner/work/blog/blog/pages/posts/meihua/meihua8.md","lastUpdated":1707599662000}'),s=h(),r=a.frontmatter||{};return s.meta.frontmatter=Object.assign(s.meta.frontmatter||{},a.frontmatter||{}),i("pageData",a),i("valaxy:frontmatter",r),c({frontmatter:{title:"【个人博客网站】博客美化（八）：twikoo评论系统以及双评论",categories:["博客教程","美化教程"],tags:["博客","文档","美化教程"],cover:"https://i0.hdslb.com/bfs/article/2add59c61302dc57c5a94020b842cf61381745966.jpg",date:"2022-10-03T14:30:00.000Z",updated:"2022-10-03T14:30:00.000Z"}}),(l,G)=>{const d=m;return u(),p(d,{frontmatter:_(r)},{"main-content-md":t(()=>[f,g(" more "),b,k,v,w,D,$,B,P,T,V,j,M,y,N,C,R,x,E,O,I,S,Z,q,z]),"main-header":t(()=>[n(l.$slots,"main-header")]),"main-header-after":t(()=>[n(l.$slots,"main-header-after")]),"main-nav":t(()=>[n(l.$slots,"main-nav")]),"main-content":t(()=>[n(l.$slots,"main-content")]),"main-content-after":t(()=>[n(l.$slots,"main-content-after")]),"main-nav-before":t(()=>[n(l.$slots,"main-nav-before")]),"main-nav-after":t(()=>[n(l.$slots,"main-nav-after")]),comment:t(()=>[n(l.$slots,"comment")]),footer:t(()=>[n(l.$slots,"footer")]),aside:t(()=>[n(l.$slots,"aside")]),"aside-custom":t(()=>[n(l.$slots,"aside-custom")]),default:t(()=>[n(l.$slots,"default")]),_:3},8,["frontmatter"])}}};export{W as default};
