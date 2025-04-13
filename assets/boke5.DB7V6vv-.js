import{_ as u}from"./ValaxyMain.vue_vue_type_style_index_0_lang.DNNCengL.js";import"./chunks/@vueuse/motion.BltUbIEt.js";import{g as b,a as h,u as g}from"./chunks/vue-router.BWFxP7XC.js";import{ab as k,am as l,ae as n,af as e,aj as a,F as y,ac as v,a0 as D}from"./framework.Wgu5ILjI.js";import"./app.53q-VOU4.js";import"./chunks/dayjs.Byk5cVHE.js";import"./chunks/vue-i18n.CibY5xOG.js";import"./chunks/nprogress.D5EDvs9V.js";import"./chunks/pinia.3e7st_eH.js";import"./YunComment.vue_vue_type_style_index_0_lang.0BcroXgB.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.BE-4Vecm.js";import"./post.Bt4JjL5H.js";const R=b("/posts/boke/boke5",async r=>JSON.parse('{"title":"【个人博客网站】从零开始搭建博客网站（四）：使用Resend配置评论送信","description":"","frontmatter":{"title":"【个人博客网站】从零开始搭建博客网站（四）：使用Resend配置评论送信","categories":["博客教程","搭建教程"],"tags":["文档","博客教程"],"cover":"https://i0.hdslb.com/bfs/article/8b2ef06b4b7a4167788d7adb98dc2b85381745966.jpg","date":"2024-07-09 21:20:00 +8","updated":"2024-07-10 15:06:00 +8"},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"DKIM","slug":"dkim","link":"#dkim","children":[]},{"level":2,"title":"Resend","slug":"resend","link":"#resend","children":[{"level":3,"title":"注册","slug":"注册","link":"#注册","children":[]},{"level":3,"title":"添加域名","slug":"添加域名","link":"#添加域名","children":[]},{"level":3,"title":"添加DNS记录","slug":"添加dns记录","link":"#添加dns记录","children":[]},{"level":3,"title":"配置评论发信","slug":"配置评论发信","link":"#配置评论发信","children":[]}]}],"relativePath":"pages/posts/boke/boke5.md","lastUpdated":1744535928000}'),{lazy:(r,o)=>r.name===o.name}),j={__name:"boke5",setup(r,{expose:o}){var c;const{data:i}=R(),f=g(),d=h(),s=Object.assign(d.meta.frontmatter||{},((c=i.value)==null?void 0:c.frontmatter)||{});return d.meta.frontmatter=s,f.currentRoute.value.data=i.value,D("valaxy:frontmatter",s),globalThis.$frontmatter=s,o({frontmatter:{title:"【个人博客网站】从零开始搭建博客网站（四）：使用Resend配置评论送信",categories:["博客教程","搭建教程"],tags:["文档","博客教程"],cover:"https://i0.hdslb.com/bfs/article/8b2ef06b4b7a4167788d7adb98dc2b85381745966.jpg",date:"2024-07-09 21:20:00 +8",updated:"2024-07-10 15:06:00 +8"}}),(t,m)=>{const p=u;return v(),k(p,{frontmatter:y(s)},{"main-content-md":l(()=>m[0]||(m[0]=[e("h2",{id:"前言",tabindex:"-1"},[a("前言 "),e("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1),e("p",null,[a("在"),e("a",{href:"https://blog.mnxy.eu.org/posts/tech/email",target:"_blank",rel:"noreferrer"},"白嫖永久无限可收发邮箱"),a("中，提到了利用Gmail的smtp可以使用自定义域名作为发信邮箱。因此，可以作为博客的评论提醒的送信邮箱。但，也是有缺点的。比如说")],-1),e("figure",null,[e("img",{src:"https://i0.hdslb.com/bfs/article/267d70c003b24ea88b80fd61513af0dd381745966.png",alt:"Clip_2024-07-09_20-43-35",loading:"lazy",decoding:"async",class:"lazy"})],-1),e("h2",{id:"dkim",tabindex:"-1"},[a("DKIM "),e("a",{class:"header-anchor",href:"#dkim","aria-label":'Permalink to "DKIM"'},"​")],-1),e("p",null,"DKIM（DomainKeys Identified Mail）是一种电子邮件验证方法，用于帮助检测电子邮件中的伪造和篡改行为，以此来提高邮件的安全性和信任度。这种技术允许发件人通过使用数字签名来证明邮件确实是由其声称的发件域名所发送，并且邮件的内容没有在传输过程中被篡改。",-1),e("h2",{id:"resend",tabindex:"-1"},[a("Resend "),e("a",{class:"header-anchor",href:"#resend","aria-label":'Permalink to "Resend"'},"​")],-1),e("p",null,[a("想要使用Gmail的DKIM，必须有 "),e("a",{href:"http://admin.google.com/",target:"_blank",rel:"noreferrer"},"Google 管理员账户"),a("（当然，这是收费的）。为了贯彻白嫖精神，我们选择"),e("a",{href:"https://resend.com/",target:"_blank",rel:"noreferrer"},"Resend"),a("。Resend免费套餐中，可以添加一个域名、每天100发件、每月3000发件的限额，足够博客使用了。")],-1),e("h3",{id:"注册",tabindex:"-1"},[a("注册 "),e("a",{class:"header-anchor",href:"#注册","aria-label":'Permalink to "注册"'},"​")],-1),e("p",null,"来到官网，我们直接使用GitHub账号登录。",-1),e("h3",{id:"添加域名",tabindex:"-1"},[a("添加域名 "),e("a",{class:"header-anchor",href:"#添加域名","aria-label":'Permalink to "添加域名"'},"​")],-1),e("p",null,[a("侧边栏 -> Domains，点击"),e("code",null,"Add Domain")],-1),e("figure",null,[e("img",{src:"https://i0.hdslb.com/bfs/article/a14285f238d3b09f55a5276ed51bd848381745966.png",alt:"Clip_2024-07-09_20-52-49",loading:"lazy",decoding:"async",class:"lazy"})],-1),e("h3",{id:"添加dns记录",tabindex:"-1"},[a("添加DNS记录 "),e("a",{class:"header-anchor",href:"#添加dns记录","aria-label":'Permalink to "添加DNS记录"'},"​")],-1),e("blockquote",null,[e("p",null,"以Cloudflare为例")],-1),e("p",null,[a("我们需要将Resend提供的DNS记录添加进DNS服务中，这里只需要添加"),e("code",null,"DKIM and SPF"),a("部分")],-1),e("figure",null,[e("img",{src:"https://i0.hdslb.com/bfs/article/55b93e950023da5c6474fe88f9e46671381745966.png",alt:"Clip_2024-07-09_20-55-54",loading:"lazy",decoding:"async",class:"lazy"})],-1),e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"},[e("i",{class:"icon i-carbon-warning-alt"}),e("span",{lang:"en"},"WARNING"),e("span",{lang:"zh-CN"},"注意")]),e("p",null,[a("注意，"),e("code",null,"_domainkey"),a("部分需要在"),e("code",null,"DMARC 管理"),a("中添加")]),e("p",null,"电子邮件 -> DMARC 管理"),e("figure",null,[e("img",{src:"https://i0.hdslb.com/bfs/article/c5d5f2e270e9bdbd45d425070af5774c381745966.png",alt:"Clip_2024-07-09_20-59-54",loading:"lazy",decoding:"async",class:"lazy"})]),e("p",null,"因Resend提供的公钥并不完全，缺少加密类型部分，将其补全。如上如图，仅替换p=xxxx即可")],-1),e("p",null,[a("回到Resend，进行DNS记录检查，全部状态为"),e("code",null,"verified")],-1),e("blockquote",null,[e("p",null,[a("可使用"),e("a",{href:"https://mxtoolbox.com/dmarc.aspx",target:"_blank",rel:"noreferrer"},"MX Tools"),a("检查DMARC是否正常")])],-1),e("h3",{id:"配置评论发信",tabindex:"-1"},[a("配置评论发信 "),e("a",{class:"header-anchor",href:"#配置评论发信","aria-label":'Permalink to "配置评论发信"'},"​")],-1),e("p",null,"Resend侧边栏 -> API Keys -> Create API Key，创建一个具有完全访问权限的密钥",-1),e("figure",null,[e("img",{src:"https://i0.hdslb.com/bfs/article/8547a1e36c5908a832754165f62c4c90381745966.png",alt:"Clip_2024-07-09_21-14-08",loading:"lazy",decoding:"async",class:"lazy"})],-1),e("p",null,"Resend侧边栏 -> Settings -> SMTP，获取SMTP需要的配置",-1),e("figure",null,[e("img",{src:"https://i0.hdslb.com/bfs/article/c7aa842cc643d59d93651df88742283f381745966.png",alt:"Clip_2024-07-09_21-16-05",loading:"lazy",decoding:"async",class:"lazy"})],-1),e("blockquote",null,[e("p",null,[a("以"),e("a",{href:"https://twikoo.js.org",target:"_blank",rel:"noreferrer"},"Twikoo"),a("为例")])],-1),e("p",null,"将这些填入Twikoo相应的位置",-1),e("figure",null,[e("img",{src:"https://i0.hdslb.com/bfs/article/be6ce3fb96c570d232342946f2b9629c381745966.png",alt:"Clip_2024-07-09_21-17-09",loading:"lazy",decoding:"async",class:"lazy"})],-1),e("p",null,[a("测试是否能发送，日志中出现"),e("code",null,"accepted"),a("即为成功")],-1)])),"main-header":l(()=>[n(t.$slots,"main-header")]),"main-header-after":l(()=>[n(t.$slots,"main-header-after")]),"main-nav":l(()=>[n(t.$slots,"main-nav")]),"main-content-before":l(()=>[n(t.$slots,"main-content-before")]),"main-content":l(()=>[n(t.$slots,"main-content")]),"main-content-after":l(()=>[n(t.$slots,"main-content-after")]),"main-nav-before":l(()=>[n(t.$slots,"main-nav-before")]),"main-nav-after":l(()=>[n(t.$slots,"main-nav-after")]),comment:l(()=>[n(t.$slots,"comment")]),footer:l(()=>[n(t.$slots,"footer")]),aside:l(()=>[n(t.$slots,"aside")]),"aside-custom":l(()=>[n(t.$slots,"aside-custom")]),default:l(()=>[n(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{j as default,R as usePageData};
