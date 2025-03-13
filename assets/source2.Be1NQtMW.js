import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang.DkyUG7xW.js";import"./chunks/@vueuse/motion.B6QLFVDT.js";import{g as p,a as b,u as g}from"./chunks/vue-router.Dq5fbvMW.js";import{aa as y,al as a,ad as r,ae as e,ai as l,w as v,ab as $,a0 as k}from"./framework.Cw2a0mOx.js";import"./app.mZooKO-j.js";import"./chunks/dayjs.Byk5cVHE.js";import"./chunks/vue-i18n.DBBF4QhG.js";import"./chunks/nprogress.CtHgZ4sh.js";import"./chunks/pinia.QvNvUEey.js";import"./YunComment.vue_vue_type_style_index_0_lang.DZg7BBCC.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.CuX1zWj-.js";import"./post.D-LQFWBq.js";const C=p("/posts/source/source2",async o=>JSON.parse('{"title":"Vercel被GFW、Netlify打不开？一招解决！","description":"","frontmatter":{"title":"Vercel被GFW、Netlify打不开？一招解决！","categories":["博客教程","托管平台"],"tags":["Cloudflare","文档","白嫖教程","博客教程"],"cover":"https://i0.hdslb.com/bfs/article/2f4bbf223acfc60d26239d464fc14439381745966.jpg","date":"2024-01-04 14:30:00 +8","updated":"2024-07-04 22:54:00 +8"},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"准备","slug":"准备","link":"#准备","children":[]},{"level":2,"title":"步骤","slug":"步骤","link":"#步骤","children":[{"level":3,"title":"Cloudflare设置","slug":"cloudflare设置","link":"#cloudflare设置","children":[]},{"level":3,"title":"Vercel","slug":"vercel","link":"#vercel","children":[]},{"level":3,"title":"Netlify","slug":"netlify","link":"#netlify","children":[]}]}],"relativePath":"pages/posts/source/source2.md","lastUpdated":1741726989000}'),{lazy:(o,i)=>o.name===i.name}),w={__name:"source2",setup(o,{expose:i}){var d;const{data:s}=C(),u=g(),c=b(),n=Object.assign(c.meta.frontmatter||{},((d=s.value)==null?void 0:d.frontmatter)||{});return c.meta.frontmatter=n,u.currentRoute.value.data=s.value,k("valaxy:frontmatter",n),globalThis.$frontmatter=n,i({frontmatter:{title:"Vercel被GFW、Netlify打不开？一招解决！",categories:["博客教程","托管平台"],tags:["Cloudflare","文档","白嫖教程","博客教程"],cover:"https://i0.hdslb.com/bfs/article/2f4bbf223acfc60d26239d464fc14439381745966.jpg",date:"2024-01-04 14:30:00 +8",updated:"2024-07-04 22:54:00 +8"}}),(t,f)=>{const m=h;return $(),y(m,{frontmatter:v(n)},{"main-content-md":a(()=>f[0]||(f[0]=[e("h2",{id:"前言",tabindex:"-1"},[l("前言 "),e("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1),e("p",null,[l("在10月份的时候，博客突然无法访问了，后续得知是"),e("code",null,"Vercel"),l("被"),e("code",null,"GFW"),l("了，我就换成了"),e("code",null,"Netlify"),l("进行托管。好景不长，在12月份的时候就出现部分运营商网络打不开的情况。")],-1),e("h2",{id:"准备",tabindex:"-1"},[l("准备 "),e("a",{class:"header-anchor",href:"#准备","aria-label":'Permalink to "准备"'},"​")],-1),e("ul",null,[e("li",null,[l("一个"),e("code",null,"Cloudfare"),l("账号")]),e("li",null,[l("一个已经在"),e("code",null,"Cloudflare"),l("账号下的域名")])],-1),e("h2",{id:"步骤",tabindex:"-1"},[l("步骤 "),e("a",{class:"header-anchor",href:"#步骤","aria-label":'Permalink to "步骤"'},"​")],-1),e("h3",{id:"cloudflare设置",tabindex:"-1"},[l("Cloudflare设置 "),e("a",{class:"header-anchor",href:"#cloudflare设置","aria-label":'Permalink to "Cloudflare设置"'},"​")],-1),e("p",null,[l("打开"),e("code",null,"Cloudflare"),l("仪表盘，在主页点击你的域名")],-1),e("figure",null,[e("img",{src:"https://i0.hdslb.com/bfs/article/6398abe1cbbcca9745653d7cf72f1a7e381745966.png",alt:"image-20240104191606971",loading:"lazy",decoding:"async",class:"lazy"})],-1),e("p",null,[l("侧边栏依次点击"),e("code",null,"SSL/TLS"),l(" -> "),e("code",null,"概述")],-1),e("figure",null,[e("img",{src:"https://i0.hdslb.com/bfs/article/0d3c6eecdf972717154e134bb76c9be1381745966.png",alt:"image-20240104191832886",loading:"lazy",decoding:"async",class:"lazy"})],-1),e("p",null,[l("将加密模式由"),e("code",null,"灵活"),l("改成"),e("code",null,"完全"),l("（这关系到能否访问"),e("code",null,"Vercel"),l("部署的站点）")],-1),e("figure",null,[e("img",{src:"https://i0.hdslb.com/bfs/article/9d8514c80f776a8bcfbbbcad6c35e584381745966.png",alt:"image-20240104191919745",loading:"lazy",decoding:"async",class:"lazy"})],-1),e("h3",{id:"vercel",tabindex:"-1"},[l("Vercel "),e("a",{class:"header-anchor",href:"#vercel","aria-label":'Permalink to "Vercel"'},"​")],-1),e("p",null,[l("将需要添加域名的项目添加好域名，然后在"),e("code",null,"Cloudflare"),l("的"),e("code",null,"DNS"),l("设置中添加"),e("code",null,"CNAME"),l("记录，一定要勾选"),e("code",null,"Cloudflare"),l("代理")],-1),e("figure",null,[e("img",{src:"https://i0.hdslb.com/bfs/article/4a70e2b05d088378de8e9572d48de6d3381745966.png",alt:"image-20240104192424309",loading:"lazy",decoding:"async",class:"lazy"})],-1),e("h3",{id:"netlify",tabindex:"-1"},[l("Netlify "),e("a",{class:"header-anchor",href:"#netlify","aria-label":'Permalink to "Netlify"'},"​")],-1),e("p",null,[l("和"),e("code",null,"Vercel"),l("同样操作")],-1)])),"main-header":a(()=>[r(t.$slots,"main-header")]),"main-header-after":a(()=>[r(t.$slots,"main-header-after")]),"main-nav":a(()=>[r(t.$slots,"main-nav")]),"main-content-before":a(()=>[r(t.$slots,"main-content-before")]),"main-content":a(()=>[r(t.$slots,"main-content")]),"main-content-after":a(()=>[r(t.$slots,"main-content-after")]),"main-nav-before":a(()=>[r(t.$slots,"main-nav-before")]),"main-nav-after":a(()=>[r(t.$slots,"main-nav-after")]),comment:a(()=>[r(t.$slots,"comment")]),footer:a(()=>[r(t.$slots,"footer")]),aside:a(()=>[r(t.$slots,"aside")]),"aside-custom":a(()=>[r(t.$slots,"aside-custom")]),default:a(()=>[r(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{w as default,C as usePageData};
