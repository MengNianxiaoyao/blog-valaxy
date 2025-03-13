import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang.DkyUG7xW.js";import"./chunks/@vueuse/motion.B6QLFVDT.js";import{g as f,a as g,u as b}from"./chunks/vue-router.Dq5fbvMW.js";import{aa as k,al as a,ad as o,ae as e,ai as t,w as v,ab as w,a0 as D}from"./framework.Cw2a0mOx.js";import"./app.mZooKO-j.js";import"./chunks/dayjs.Byk5cVHE.js";import"./chunks/vue-i18n.DBBF4QhG.js";import"./chunks/nprogress.CtHgZ4sh.js";import"./chunks/pinia.QvNvUEey.js";import"./YunComment.vue_vue_type_style_index_0_lang.DZg7BBCC.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.CuX1zWj-.js";import"./post.D-LQFWBq.js";const $=f("/posts/meihua/meihua8",async r=>JSON.parse('{"title":"【个人博客网站】博客美化（八）：twikoo评论系统以及双评论","description":"","frontmatter":{"title":"【个人博客网站】博客美化（八）：twikoo评论系统以及双评论","categories":["博客教程","美化教程"],"tags":["博客","文档","美化教程"],"cover":"https://i0.hdslb.com/bfs/article/2add59c61302dc57c5a94020b842cf61381745966.jpg","date":"2022-10-03 14:30:00 +8","updated":"2022-10-03 14:30:00 +8"},"headers":[{"level":2,"title":"数据库搭建(MongoDB)","slug":"数据库搭建-mongodb","link":"#数据库搭建-mongodb","children":[{"level":3,"title":"创建数据库","slug":"创建数据库","link":"#创建数据库","children":[]},{"level":3,"title":"Vercel部署","slug":"vercel部署","link":"#vercel部署","children":[]}]},{"level":2,"title":"使用Twikoo评论系统","slug":"使用twikoo评论系统","link":"#使用twikoo评论系统","children":[]},{"level":2,"title":"开启管理面板","slug":"开启管理面板","link":"#开启管理面板","children":[]},{"level":2,"title":"双评论","slug":"双评论","link":"#双评论","children":[]}],"relativePath":"pages/posts/meihua/meihua8.md","lastUpdated":1741726989000}'),{lazy:(r,s)=>r.name===s.name}),S={__name:"meihua8",setup(r,{expose:s}){var d;const{data:i}=$(),u=b(),c=g(),n=Object.assign(c.meta.frontmatter||{},((d=i.value)==null?void 0:d.frontmatter)||{});return c.meta.frontmatter=n,u.currentRoute.value.data=i.value,D("valaxy:frontmatter",n),globalThis.$frontmatter=n,s({frontmatter:{title:"【个人博客网站】博客美化（八）：twikoo评论系统以及双评论",categories:["博客教程","美化教程"],tags:["博客","文档","美化教程"],cover:"https://i0.hdslb.com/bfs/article/2add59c61302dc57c5a94020b842cf61381745966.jpg",date:"2022-10-03 14:30:00 +8",updated:"2022-10-03 14:30:00 +8"}}),(l,m)=>{const p=h;return w(),k(p,{frontmatter:v(n)},{"main-content-md":a(()=>m[0]||(m[0]=[e("blockquote",null,[e("p",null,[t("具体文档地址："),e("a",{href:"https://twikoo.js.org/quick-start.html#vercel-%E9%83%A8%E7%BD%B2",target:"_blank",rel:"noreferrer"},"https://twikoo.js.org/quick-start.html#vercel-部署")])],-1),e("h2",{id:"数据库搭建-mongodb",tabindex:"-1"},[t("数据库搭建(MongoDB) "),e("a",{class:"header-anchor",href:"#数据库搭建-mongodb","aria-label":'Permalink to "数据库搭建(MongoDB)"'},"​")],-1),e("h3",{id:"创建数据库",tabindex:"-1"},[t("创建数据库 "),e("a",{class:"header-anchor",href:"#创建数据库","aria-label":'Permalink to "创建数据库"'},"​")],-1),e("p",null,[t("打开"),e("a",{href:"https://www.mongodb.com/cloud/atlas/register",target:"_blank",rel:"noreferrer"},"MongoDB"),t("，注册账号")],-1),e("p",null,[t("注册完成，登录"),e("code",null,"MongoDB")],-1),e("p",null,[t("创建好"),e("code",null,"Organizations(组织)"),t("后，点击"),e("code",null,"Projects"),t("、"),e("code",null,"New Project"),t("创建项目")],-1),e("p",null,[t("点击"),e("code",null,"Database"),t("、"),e("code",null,"Build a Database"),t("创建数据库")],-1),e("p",null,[t("选择"),e("code",null,"free"),t("、"),e("code",null,"aws"),t("、"),e("code",null,"Hong Kong")],-1),e("p",null,[t("创建用户，选择"),e("code",null,"My Local Environment"),t("，"),e("code",null,"IP Adddress"),t("填写"),e("code",null,"0.0.0.0/0")],-1),e("p",null,"完成创建",-1),e("h3",{id:"vercel部署",tabindex:"-1"},[t("Vercel部署 "),e("a",{class:"header-anchor",href:"#vercel部署","aria-label":'Permalink to "Vercel部署"'},"​")],-1),e("p",null,[t("MongoDB控制台"),e("code",null,"Database"),t("界面，点击"),e("code",null,"Connect")],-1),e("p",null,[t("选择"),e("code",null,"Connect your application"),t("，"),e("code",null,"DRIVER"),t("选择"),e("code",null,"Node.js"),t("，复制字符串")],-1),e("p",null,[t("点击以下按钮将 Twikoo 一键部署到 Vercel "),e("a",{href:"https://vercel.com/import/project?template=https://github.com/imaegoo/twikoo/tree/main/src/server/vercel-min",target:"_blank",rel:"noreferrer"},[e("img",{src:"https://vercel.com/button",alt:"https://vercel.com/button"})])],-1),e("p",null,[t("twikoo部署完成后，进入项目Settings - Environment Variables，添加环境变量"),e("code",null,"MONGODB_URI"),t("，值为复制的字符串，替换"),e("code",null,"<password>"),t("为数据库用户密码")],-1),e("p",null,"进入 Deployments , 然后在任意一项后面点击更多（三个点） , 然后点击Redeploy , 最后点击下面的Redeploy",-1),e("p",null,[t("点击 Domains 下方的链接，如果环境配置正确，可以看到"),e("code",null,"“Twikoo 云函数运行正常”"),t("的提示")],-1),e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},[e("i",{class:"icon i-arcticons-pixel-tips"}),e("span",{lang:"en"},"TIP"),e("span",{lang:"zh-CN"},"提示")]),e("p",null,"如果无法访问，请绑定自定义域名，并删除默认域名(默认域名有可能会干扰网站连接数据库)")],-1),e("p",null,[t("Vercel Domains（包含"),e("code",null,"https://"),t("前缀，例如"),e("code",null,"https://xxx.vercel.app"),t("）即为您的环境 id")],-1),e("h2",{id:"使用twikoo评论系统",tabindex:"-1"},[t("使用Twikoo评论系统 "),e("a",{class:"header-anchor",href:"#使用twikoo评论系统","aria-label":'Permalink to "使用Twikoo评论系统"'},"​")],-1),e("p",null,"将环境id填写到主题配置文件的相关位置，并开启使用",-1),e("h2",{id:"开启管理面板",tabindex:"-1"},[t("开启管理面板 "),e("a",{class:"header-anchor",href:"#开启管理面板","aria-label":'Permalink to "开启管理面板"'},"​")],-1),e("p",null,[t("点击评论窗口的"),e("code",null,"小齿轮"),t("图标，设置管理员密码")],-1),e("h2",{id:"双评论",tabindex:"-1"},[t("双评论 "),e("a",{class:"header-anchor",href:"#双评论","aria-label":'Permalink to "双评论"'},"​")],-1),e("p",null,[t("在主题配置文件的"),e("code",null,"Comments System"),t("中，"),e("code",null,"use"),t("后填写两个不冲突的评论系统")],-1)])),"main-header":a(()=>[o(l.$slots,"main-header")]),"main-header-after":a(()=>[o(l.$slots,"main-header-after")]),"main-nav":a(()=>[o(l.$slots,"main-nav")]),"main-content-before":a(()=>[o(l.$slots,"main-content-before")]),"main-content":a(()=>[o(l.$slots,"main-content")]),"main-content-after":a(()=>[o(l.$slots,"main-content-after")]),"main-nav-before":a(()=>[o(l.$slots,"main-nav-before")]),"main-nav-after":a(()=>[o(l.$slots,"main-nav-after")]),comment:a(()=>[o(l.$slots,"comment")]),footer:a(()=>[o(l.$slots,"footer")]),aside:a(()=>[o(l.$slots,"aside")]),"aside-custom":a(()=>[o(l.$slots,"aside-custom")]),default:a(()=>[o(l.$slots,"default")]),_:3},8,["frontmatter"])}}};export{S as default,$ as usePageData};
