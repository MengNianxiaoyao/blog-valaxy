import{_ as o}from"./ValaxyMain.vue_vue_type_style_index_0_lang-ZrcTWjWJ.js";import{_ as p,a as c,p as k,o as E,c as m,w as a,f as s,i,g as t,s as b,r as n,h as g}from"./app-jp8i1Eso.js";import"./YunFooter.vue_vue_type_style_index_0_lang-Z_AmNoxM.js";import"./YunCard.vue_vue_type_script_setup_true_lang-ISyloiPE.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-vJZSMUQ8.js";import"./index-nlSmcLJj.js";const r=JSON.parse('{"title":"【个人博客网站】博客美化（一）：制作欢迎弹窗","description":"","frontmatter":{"title":"【个人博客网站】博客美化（一）：制作欢迎弹窗","categories":"美化教程","tags":["博客","文档","美化教程"],"cover":"https://i0.hdslb.com/bfs/article/2add59c61302dc57c5a94020b842cf61381745966.jpg","date":"2022-09-12T16:00:00.000Z"},"headers":[{"level":2,"title":"修改正文","slug":"修改正文","link":"#修改正文","children":[{"level":3,"title":"引入SweetAlert的jsCDN","slug":"引入sweetalert的jscdn","link":"#引入sweetalert的jscdn","children":[]},{"level":3,"title":"修改加载文件","slug":"修改加载文件","link":"#修改加载文件","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"pages/posts/meihua1.md","path":"/home/runner/work/blog/blog/pages/posts/meihua1.md","lastUpdated":1706311826000}'),u={name:"pages/posts/meihua1.md",data(){return{data:r,frontmatter:r.frontmatter,$frontmatter:r.frontmatter}},setup(){const e=c();e.meta.frontmatter=Object.assign(e.meta.frontmatter||{},r.frontmatter||{}),k("pageData",r)}},f={class:"tip custom-block"},y=s("p",{class:"custom-block-title"},[s("i",{class:"icon i-arcticons-pixel-tips"}),s("span",{lang:"en"},"TIP"),s("span",{lang:"zh-CN"},"提示")],-1),_={id:"修改正文",tabindex:"-1"},v={id:"引入sweetalert的jscdn",tabindex:"-1"},B=s("p",null,[i("修改"),s("code",null,"[Blogroot]\\_config.butterfly.yml"),i("的inject配置项")],-1),w=s("div",{style:{"max-height":"200px"},class:"language-yaml line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yaml"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"inject"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  head"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    - "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"><\/script>')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  bottom"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")])])]),s("button",{class:"collapse"}),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br")])],-1),C={id:"修改加载文件",tabindex:"-1"},A=s("p",null,[i("修改"),s("code",null,"[Blogroot]\\themes\\butterfly\\layout\\includes\\loading\\loading-js.pug")],-1),$=s("div",{style:{"max-height":"200px"},class:"language-pug line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"pug"),s("pre",{class:"shiki shiki-themes github-light github-dark has-diff vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},".pjax-reload")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  script"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"("),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"async"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},")"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},".")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    var preloader = {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      endLoading: () ="),s("span",{style:{"--shiki-light":"#B31D28","--shiki-dark":"#FDAEB7","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},">"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        document.body.style.overflow = 'auto';")]),i(`
`),s("span",{class:"line diff remove"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},`        document.getElementById('loading-box').classList.add("loaded")`)]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        document.getElementById('loading-box').style.transition = 'opacity 3s';")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        document.getElementById('loading-box').style.opacity = '0';")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        setTimeout(function(){")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},`          document.getElementById('loading-box').classList.add("loaded")`)]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        },3000)")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        //用于判断是否第一次加载")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'        if(sessionStorage.getItem("isReload")){')]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          //若显示已经加载过")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          return true")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }else{")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          //若为第一次加载")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'          sessionStorage.setItem("isReload", true)')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          swal({")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'            title: "//弹窗标题",')]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            text: '//弹窗文本',")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'            icon: "//弹窗图标",')]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},'            button:"//按钮文本",')]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            timer: //弹窗延时 ,")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            showConfirmButton: false")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          })")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      initLoading: () ="),s("span",{style:{"--shiki-light":"#B31D28","--shiki-dark":"#FDAEB7","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},">"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        document.body.style.overflow = '';")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        document.getElementById('loading-box').style.transition = '';")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        document.getElementById('loading-box').style.opacity = '1';")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},`        document.getElementById('loading-box').classList.remove("loaded")`)]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    window.addEventListener('load',()="),s("span",{style:{"--shiki-light":"#B31D28","--shiki-dark":"#FDAEB7","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},">"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {preloader.endLoading()})")])])]),s("button",{class:"collapse"}),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br"),s("span",{class:"line-number"},"18"),s("br"),s("span",{class:"line-number"},"19"),s("br"),s("span",{class:"line-number"},"20"),s("br"),s("span",{class:"line-number"},"21"),s("br"),s("span",{class:"line-number"},"22"),s("br"),s("span",{class:"line-number"},"23"),s("br"),s("span",{class:"line-number"},"24"),s("br"),s("span",{class:"line-number"},"25"),s("br"),s("span",{class:"line-number"},"26"),s("br"),s("span",{class:"line-number"},"27"),s("br"),s("span",{class:"line-number"},"28"),s("br"),s("span",{class:"line-number"},"29"),s("br"),s("span",{class:"line-number"},"30"),s("br"),s("span",{class:"line-number"},"31"),s("br"),s("span",{class:"line-number"},"32"),s("br"),s("span",{class:"line-number"},"33"),s("br"),s("span",{class:"line-number"},"34"),s("br"),s("span",{class:"line-number"},"35"),s("br"),s("span",{class:"line-number"},"36"),s("br"),s("span",{class:"line-number"},"37"),s("br")])],-1),j={id:"总结",tabindex:"-1"},D=s("p",null,"弹窗是很好写的，但奈何本人是个笨蛋，bug一堆，总之还是写出来了",-1);function F(e,I,N,x,d,L){const l=g,h=o;return E(),m(h,{frontmatter:d.frontmatter,data:d.data},{"main-content-md":a(()=>[s("div",f,[y,s("p",null,[i("参考了店长的方案进行修改 原教程"),t(l,{href:"https://akilar.top/posts/d0d69f76/",target:"_blank",rel:"noreferrer"},{default:a(()=>[i("SAO-UI-PLAN-Notify")]),_:1}),i(" 原教程"),t(l,{href:"https://akilar.top/posts/1b4fa1dd/",target:"_blank",rel:"noreferrer"},{default:a(()=>[i("SAO-UI-PLAN-LINK-START")]),_:1})])]),b(" more "),s("h2",_,[i("修改正文 "),t(l,{class:"header-anchor",href:"#修改正文","aria-label":'Permalink to "修改正文"'},{default:a(()=>[i("​")]),_:1})]),s("h3",v,[i("引入"),t(l,{href:"https://sweetalert.js.org/guides/",target:"_blank",rel:"noreferrer"},{default:a(()=>[i("SweetAlert")]),_:1}),i("的jsCDN "),t(l,{class:"header-anchor",href:"#引入sweetalert的jscdn","aria-label":'Permalink to "引入[SweetAlert](https://sweetalert.js.org/guides/)的jsCDN"'},{default:a(()=>[i("​")]),_:1})]),B,w,s("h3",C,[i("修改加载文件 "),t(l,{class:"header-anchor",href:"#修改加载文件","aria-label":'Permalink to "修改加载文件"'},{default:a(()=>[i("​")]),_:1})]),A,$,s("h2",j,[i("总结 "),t(l,{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},{default:a(()=>[i("​")]),_:1})]),D]),"main-header":a(()=>[n(e.$slots,"main-header")]),"main-header-after":a(()=>[n(e.$slots,"main-header-after")]),"main-nav":a(()=>[n(e.$slots,"main-nav")]),"main-content":a(()=>[n(e.$slots,"main-content")]),"main-content-after":a(()=>[n(e.$slots,"main-content-after")]),"main-nav-before":a(()=>[n(e.$slots,"main-nav-before")]),"main-nav-after":a(()=>[n(e.$slots,"main-nav-after")]),comment:a(()=>[n(e.$slots,"comment")]),footer:a(()=>[n(e.$slots,"footer")]),aside:a(()=>[n(e.$slots,"aside")]),"aside-custom":a(()=>[n(e.$slots,"aside-custom")]),default:a(()=>[n(e.$slots,"default")]),_:3},8,["frontmatter","data"])}const U=p(u,[["render",F]]);export{r as data,U as default};
