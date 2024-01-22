import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang-6zBUynwo.js";import{_ as m,c as u,w as o,a as h,p,o as _,f as e,i as t,g as s,s as f,r as n,h as g}from"./app-olKwTkov.js";import"./YunFooter.vue_vue_type_style_index_0_lang-A_nKh1DI.js";import"./YunCard.vue_vue_type_script_setup_true_lang-HWOwxeSJ.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-4XGgeQL0.js";import"./index-nlSmcLJj.js";const r=JSON.parse('{"title":"【个人博客网站】博客美化（八）：twikoo评论系统以及双评论","description":"","frontmatter":{"title":"【个人博客网站】博客美化（八）：twikoo评论系统以及双评论","categories":"美化教程","tags":["博客","文档","美化教程"],"cover":"https://i0.hdslb.com/bfs/article/2add59c61302dc57c5a94020b842cf61381745966.jpg","date":"2022-10-03T14:30:00.000Z"},"headers":[{"level":2,"title":"数据库搭建(MongoDB)","slug":"数据库搭建-mongodb","link":"#数据库搭建-mongodb","children":[{"level":3,"title":"创建数据库","slug":"创建数据库","link":"#创建数据库","children":[]},{"level":3,"title":"Vercel部署","slug":"vercel部署","link":"#vercel部署","children":[]}]},{"level":2,"title":"使用Twikoo评论系统","slug":"使用twikoo评论系统","link":"#使用twikoo评论系统","children":[]},{"level":2,"title":"开启管理面板","slug":"开启管理面板","link":"#开启管理面板","children":[]},{"level":2,"title":"双评论","slug":"双评论","link":"#双评论","children":[]}],"relativePath":"pages/posts/meihua8.md","path":"/home/runner/work/blog/blog/pages/posts/meihua8.md","lastUpdated":1705902549000}'),k={name:"pages/posts/meihua8.md",data(){return{data:r,frontmatter:r.frontmatter,$frontmatter:r.frontmatter}},setup(){const l=h();l.meta.frontmatter=Object.assign(l.meta.frontmatter||{},r.frontmatter||{}),p("pageData",r)}},b={id:"数据库搭建-mongodb",tabindex:"-1"},v={id:"创建数据库",tabindex:"-1"},w=e("p",null,[t("注册完成，登录"),e("code",null,"MongoDB")],-1),$=e("p",null,[t("创建好"),e("code",null,"Organizations(组织)"),t("后，点击"),e("code",null,"Projects"),t("、"),e("code",null,"New Project"),t("创建项目")],-1),D=e("p",null,[t("点击"),e("code",null,"Database"),t("、"),e("code",null,"Build a Database"),t("创建数据库")],-1),B=e("p",null,[t("选择"),e("code",null,"free"),t("、"),e("code",null,"aws"),t("、"),e("code",null,"Hong Kong")],-1),V=e("p",null,[t("创建用户，选择"),e("code",null,"My Local Environment"),t("，"),e("code",null,"IP Adddress"),t("填写"),e("code",null,"0.0.0.0/0")],-1),P=e("p",null,"完成创建",-1),M={id:"vercel部署",tabindex:"-1"},N=e("p",null,[t("MongoDB控制台"),e("code",null,"Database"),t("界面，点击"),e("code",null,"Connect")],-1),j=e("p",null,[t("选择"),e("code",null,"Connect your application"),t("，"),e("code",null,"DRIVER"),t("选择"),e("code",null,"Node.js"),t("，复制字符串")],-1),T=e("img",{src:"https://vercel.com/button",alt:"https://vercel.com/button"},null,-1),y=e("p",null,[t("twikoo部署完成后，进入项目Settings - Environment Variables，添加环境变量"),e("code",null,"MONGODB_URI"),t("，值为复制的字符串，替换"),e("code",null,"<password>"),t("为数据库用户密码")],-1),C=e("p",null,"进入 Deployments , 然后在任意一项后面点击更多（三个点） , 然后点击Redeploy , 最后点击下面的Redeploy",-1),R=e("p",null,[t("点击 Domains 下方的链接，如果环境配置正确，可以看到"),e("code",null,"“Twikoo 云函数运行正常”"),t("的提示")],-1),E=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},[e("i",{class:"icon i-arcticons-pixel-tips"}),e("span",{lang:"en"},"TIP"),e("span",{lang:"zh-CN"},"提示")]),e("p",null,"如果无法访问，请绑定自定义域名，并删除默认域名(默认域名有可能会干扰网站连接数据库)")],-1),O=e("p",null,[t("Vercel Domains（包含"),e("code",null,"https://"),t("前缀，例如"),e("code",null,"https://xxx.vercel.app"),t("）即为您的环境 id")],-1),x={id:"使用twikoo评论系统",tabindex:"-1"},I=e("p",null,"将环境id填写到主题配置文件的相关位置，并开启使用",-1),S={id:"开启管理面板",tabindex:"-1"},q=e("p",null,[t("点击评论窗口的"),e("code",null,"小齿轮"),t("图标，设置管理员密码")],-1),A={id:"双评论",tabindex:"-1"},z=e("p",null,[t("在主题配置文件的"),e("code",null,"Comments System"),t("中，"),e("code",null,"use"),t("后填写两个不冲突的评论系统")],-1);function L(l,U,G,H,i,J){const a=g,c=d;return _(),u(c,{frontmatter:i.frontmatter,data:i.data},{"main-content-md":o(()=>[e("blockquote",null,[e("p",null,[t("具体文档地址："),s(a,{href:"https://twikoo.js.org/quick-start.html#vercel-%E9%83%A8%E7%BD%B2",target:"_blank",rel:"noreferrer"},{default:o(()=>[t("https://twikoo.js.org/quick-start.html#vercel-部署")]),_:1})])]),f(" more "),e("h2",b,[t("数据库搭建(MongoDB) "),s(a,{class:"header-anchor",href:"#数据库搭建-mongodb","aria-label":'Permalink to "数据库搭建(MongoDB)"'},{default:o(()=>[t("​")]),_:1})]),e("h3",v,[t("创建数据库 "),s(a,{class:"header-anchor",href:"#创建数据库","aria-label":'Permalink to "创建数据库"'},{default:o(()=>[t("​")]),_:1})]),e("p",null,[t("打开"),s(a,{href:"https://www.mongodb.com/cloud/atlas/register",target:"_blank",rel:"noreferrer"},{default:o(()=>[t("MongoDB")]),_:1}),t("，注册账号")]),w,$,D,B,V,P,e("h3",M,[t("Vercel部署 "),s(a,{class:"header-anchor",href:"#vercel部署","aria-label":'Permalink to "Vercel部署"'},{default:o(()=>[t("​")]),_:1})]),N,j,e("p",null,[t("点击以下按钮将 Twikoo 一键部署到 Vercel "),s(a,{href:"https://vercel.com/import/project?template=https://github.com/imaegoo/twikoo/tree/main/src/server/vercel-min",target:"_blank",rel:"noreferrer"},{default:o(()=>[T]),_:1})]),y,C,R,E,O,e("h2",x,[t("使用Twikoo评论系统 "),s(a,{class:"header-anchor",href:"#使用twikoo评论系统","aria-label":'Permalink to "使用Twikoo评论系统"'},{default:o(()=>[t("​")]),_:1})]),I,e("h2",S,[t("开启管理面板 "),s(a,{class:"header-anchor",href:"#开启管理面板","aria-label":'Permalink to "开启管理面板"'},{default:o(()=>[t("​")]),_:1})]),q,e("h2",A,[t("双评论 "),s(a,{class:"header-anchor",href:"#双评论","aria-label":'Permalink to "双评论"'},{default:o(()=>[t("​")]),_:1})]),z]),"main-header":o(()=>[n(l.$slots,"main-header")]),"main-header-after":o(()=>[n(l.$slots,"main-header-after")]),"main-nav":o(()=>[n(l.$slots,"main-nav")]),"main-content":o(()=>[n(l.$slots,"main-content")]),"main-content-after":o(()=>[n(l.$slots,"main-content-after")]),"main-nav-before":o(()=>[n(l.$slots,"main-nav-before")]),"main-nav-after":o(()=>[n(l.$slots,"main-nav-after")]),comment:o(()=>[n(l.$slots,"comment")]),footer:o(()=>[n(l.$slots,"footer")]),aside:o(()=>[n(l.$slots,"aside")]),"aside-custom":o(()=>[n(l.$slots,"aside-custom")]),default:o(()=>[n(l.$slots,"default")]),_:3},8,["frontmatter","data"])}const Y=m(k,[["render",L]]);export{r as data,Y as default};
