import{_ as E}from"./ValaxyMain.vue_vue_type_style_index_0_lang.Dv2MygBm.js";import"./chunks/@vueuse/motion.BltUbIEt.js";import{g as m,a as b,u}from"./chunks/vue-router.C2zzJYG-.js";import{ab as g,am as i,ae as n,af as s,aj as a,F as y,ac as f,a0 as v}from"./framework.Wgu5ILjI.js";import"./app.BQ7MN7lB.js";import"./chunks/dayjs.Byk5cVHE.js";import"./chunks/vue-i18n.CibY5xOG.js";import"./chunks/nprogress.D5EDvs9V.js";import"./chunks/pinia.BGsVwCM1.js";import"./YunComment.vue_vue_type_style_index_0_lang.Bilcx1Rp.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.BE-4Vecm.js";import"./post.o2sy2NLS.js";const B=m("/posts/meihua/meihua1",async t=>JSON.parse('{"title":"【个人博客网站】博客美化（一）：制作欢迎弹窗","description":"","frontmatter":{"title":"【个人博客网站】博客美化（一）：制作欢迎弹窗","categories":["博客教程","美化教程"],"tags":["博客","文档","美化教程"],"cover":"https://i0.hdslb.com/bfs/article/2add59c61302dc57c5a94020b842cf61381745966.jpg","date":"2022-09-12 16:00:00 +8","updated":"2022-09-12 16:00:00 +8"},"headers":[{"level":2,"title":"修改正文","slug":"修改正文","link":"#修改正文","children":[{"level":3,"title":"引入SweetAlert的jsCDN","slug":"引入sweetalert的jscdn","link":"#引入sweetalert的jscdn","children":[]},{"level":3,"title":"修改加载文件","slug":"修改加载文件","link":"#修改加载文件","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"pages/posts/meihua/meihua1.md","lastUpdated":1744188681000}'),{lazy:(t,r)=>t.name===r.name}),T={__name:"meihua1",setup(t,{expose:r}){var d;const{data:h}=B(),c=u(),o=b(),l=Object.assign(o.meta.frontmatter||{},((d=h.value)==null?void 0:d.frontmatter)||{});return o.meta.frontmatter=l,c.currentRoute.value.data=h.value,v("valaxy:frontmatter",l),globalThis.$frontmatter=l,r({frontmatter:{title:"【个人博客网站】博客美化（一）：制作欢迎弹窗",categories:["博客教程","美化教程"],tags:["博客","文档","美化教程"],cover:"https://i0.hdslb.com/bfs/article/2add59c61302dc57c5a94020b842cf61381745966.jpg",date:"2022-09-12 16:00:00 +8",updated:"2022-09-12 16:00:00 +8"}}),(e,p)=>{const k=E;return f(),g(k,{frontmatter:y(l)},{"main-content-md":i(()=>p[0]||(p[0]=[s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},[s("i",{class:"icon i-arcticons-pixel-tips"}),s("span",{lang:"en"},"TIP"),s("span",{lang:"zh-CN"},"提示")]),s("p",null,[a("参考了店长的方案进行修改 原教程"),s("a",{href:"https://akilar.top/posts/d0d69f76/",target:"_blank",rel:"noreferrer"},"SAO-UI-PLAN-Notify"),a(" 原教程"),s("a",{href:"https://akilar.top/posts/1b4fa1dd/",target:"_blank",rel:"noreferrer"},"SAO-UI-PLAN-LINK-START")])],-1),s("h2",{id:"修改正文",tabindex:"-1"},[a("修改正文 "),s("a",{class:"header-anchor",href:"#修改正文","aria-label":'Permalink to "修改正文"'},"​")],-1),s("h3",{id:"引入sweetalert的jscdn",tabindex:"-1"},[a("引入"),s("a",{href:"https://sweetalert.js.org/guides/",target:"_blank",rel:"noreferrer"},"SweetAlert"),a("的jsCDN "),s("a",{class:"header-anchor",href:"#引入sweetalert的jscdn","aria-label":'Permalink to "引入[SweetAlert](https://sweetalert.js.org/guides/)的jsCDN"'},"​")],-1),s("p",null,[a("修改"),s("code",null,"[Blogroot]\\_config.butterfly.yml"),a("的inject配置项")],-1),s("div",{style:{"max-height":"200px"},class:"language-yaml vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yaml"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"inject"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  head"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    - "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"><\/script>')]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  bottom"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")])])]),s("button",{class:"collapse"}),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br")])],-1),s("h3",{id:"修改加载文件",tabindex:"-1"},[a("修改加载文件 "),s("a",{class:"header-anchor",href:"#修改加载文件","aria-label":'Permalink to "修改加载文件"'},"​")],-1),s("p",null,[a("修改"),s("code",null,"[Blogroot]\\themes\\butterfly\\layout\\includes\\loading\\loading-js.pug")],-1),s("div",{style:{"max-height":"200px"},class:"language-pug vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"pug"),s("pre",{class:"shiki shiki-themes github-light github-dark has-diff vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},".pjax-reload")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  script"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"("),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"async"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},")"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},".")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    var preloader = {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      endLoading: () ="),s("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},">"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        document.body.style.overflow = 'auto';")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},`        document.getElementById('loading-box').classList.add("loaded") // [!code --]`)]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        document.getElementById('loading-box').style.transition = 'opacity 3s'; // [!code ++]")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        document.getElementById('loading-box').style.opacity = '0'; // [!code ++]")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        setTimeout(function(){ // [!code ++]")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},`          document.getElementById('loading-box').classList.add("loaded") // [!code ++]`)]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        },3000) // [!code ++]")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        //用于判断是否第一次加载")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        if(sessionStorage.getItem("isReload")){ // [!code ++]')]),a(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          //若显示已经加载过")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          return true // [!code ++]")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }else{ // [!code ++]")]),a(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          //若为第一次加载")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'          sessionStorage.setItem("isReload", true) // [!code ++]')]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          swal({")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'            title: "//弹窗标题", // [!code ++]')]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            text: '//弹窗文本', // [!code ++]")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'            icon: "//弹窗图标", // [!code ++]')]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'            button:"//按钮文本", // [!code ++]')]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            timer: //弹窗延时 , // [!code ++]")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            showConfirmButton: false // [!code ++]")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          }) // [!code ++]")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        } // [!code ++]")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      initLoading: () ="),s("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},">"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        document.body.style.overflow = '';")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        document.getElementById('loading-box').style.transition = ''; // [!code ++]")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        document.getElementById('loading-box').style.opacity = '1'; // [!code ++]")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},`        document.getElementById('loading-box').classList.remove("loaded")`)]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      }")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    window.addEventListener('load',()="),s("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},">"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {preloader.endLoading()})")])])]),s("button",{class:"collapse"}),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br"),s("span",{class:"line-number"},"18"),s("br"),s("span",{class:"line-number"},"19"),s("br"),s("span",{class:"line-number"},"20"),s("br"),s("span",{class:"line-number"},"21"),s("br"),s("span",{class:"line-number"},"22"),s("br"),s("span",{class:"line-number"},"23"),s("br"),s("span",{class:"line-number"},"24"),s("br"),s("span",{class:"line-number"},"25"),s("br"),s("span",{class:"line-number"},"26"),s("br"),s("span",{class:"line-number"},"27"),s("br"),s("span",{class:"line-number"},"28"),s("br"),s("span",{class:"line-number"},"29"),s("br"),s("span",{class:"line-number"},"30"),s("br"),s("span",{class:"line-number"},"31"),s("br"),s("span",{class:"line-number"},"32"),s("br"),s("span",{class:"line-number"},"33"),s("br"),s("span",{class:"line-number"},"34"),s("br"),s("span",{class:"line-number"},"35"),s("br"),s("span",{class:"line-number"},"36"),s("br"),s("span",{class:"line-number"},"37"),s("br")])],-1),s("h2",{id:"总结",tabindex:"-1"},[a("总结 "),s("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),s("p",null,"弹窗是很好写的，但奈何本人是个笨蛋，bug一堆，总之还是写出来了",-1)])),"main-header":i(()=>[n(e.$slots,"main-header")]),"main-header-after":i(()=>[n(e.$slots,"main-header-after")]),"main-nav":i(()=>[n(e.$slots,"main-nav")]),"main-content-before":i(()=>[n(e.$slots,"main-content-before")]),"main-content":i(()=>[n(e.$slots,"main-content")]),"main-content-after":i(()=>[n(e.$slots,"main-content-after")]),"main-nav-before":i(()=>[n(e.$slots,"main-nav-before")]),"main-nav-after":i(()=>[n(e.$slots,"main-nav-after")]),comment:i(()=>[n(e.$slots,"comment")]),footer:i(()=>[n(e.$slots,"footer")]),aside:i(()=>[n(e.$slots,"aside")]),"aside-custom":i(()=>[n(e.$slots,"aside-custom")]),default:i(()=>[n(e.$slots,"default")]),_:3},8,["frontmatter"])}}};export{T as default,B as usePageData};
