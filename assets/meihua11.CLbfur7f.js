import{_ as c}from"./ValaxyMain.vue_vue_type_style_index_0_lang.Dv2MygBm.js";import"./chunks/@vueuse/motion.BltUbIEt.js";import{g as y,a as F,u as o}from"./chunks/vue-router.C2zzJYG-.js";import{ab as b,am as a,ae as h,af as s,aj as i,F as m,ac as u,a0 as C}from"./framework.Wgu5ILjI.js";import"./app.BQ7MN7lB.js";import"./chunks/dayjs.Byk5cVHE.js";import"./chunks/vue-i18n.CibY5xOG.js";import"./chunks/nprogress.D5EDvs9V.js";import"./chunks/pinia.BGsVwCM1.js";import"./YunComment.vue_vue_type_style_index_0_lang.Bilcx1Rp.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.BE-4Vecm.js";import"./post.o2sy2NLS.js";const f=y("/posts/meihua/meihua11",async t=>JSON.parse('{"title":"【个人博客网站】博客美化（十一）：修改全局弹窗样式","description":"","frontmatter":{"title":"【个人博客网站】博客美化（十一）：修改全局弹窗样式","categories":["博客教程","美化教程"],"tags":["博客","文档","美化教程"],"cover":"https://i0.hdslb.com/bfs/article/2add59c61302dc57c5a94020b842cf61381745966.jpg","date":"2022-12-06 22:30:00 +8","updated":"2022-12-06 22:30:00 +8"},"headers":[{"level":3,"title":"引入样式文件","slug":"引入样式文件","link":"#引入样式文件","children":[]},{"level":3,"title":"修改文件","slug":"修改文件","link":"#修改文件","children":[]},{"level":3,"title":"utils.js","slug":"utils-js","link":"#utils-js","children":[]},{"level":3,"title":"main.js","slug":"main-js","link":"#main-js","children":[]},{"level":3,"title":"tw_cn.js","slug":"tw-cn-js","link":"#tw-cn-js","children":[]}],"relativePath":"pages/posts/meihua/meihua11.md","lastUpdated":1744188681000}'),{lazy:(t,k)=>t.name===k.name}),x={__name:"meihua11",setup(t,{expose:k}){var E;const{data:e}=f(),d=o(),r=F(),n=Object.assign(r.meta.frontmatter||{},((E=e.value)==null?void 0:E.frontmatter)||{});return r.meta.frontmatter=n,d.currentRoute.value.data=e.value,C("valaxy:frontmatter",n),globalThis.$frontmatter=n,k({frontmatter:{title:"【个人博客网站】博客美化（十一）：修改全局弹窗样式",categories:["博客教程","美化教程"],tags:["博客","文档","美化教程"],cover:"https://i0.hdslb.com/bfs/article/2add59c61302dc57c5a94020b842cf61381745966.jpg",date:"2022-12-06 22:30:00 +8",updated:"2022-12-06 22:30:00 +8"}}),(l,p)=>{const g=c;return u(),b(g,{frontmatter:m(n)},{"main-content-md":a(()=>p[0]||(p[0]=[s("h3",{id:"引入样式文件",tabindex:"-1"},[i("引入样式文件 "),s("a",{class:"header-anchor",href:"#引入样式文件","aria-label":'Permalink to "引入样式文件"'},"​")],-1),s("p",null,"修改主题配置文件",-1),s("div",{style:{"max-height":"200px"},class:"language-yaml vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yaml"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"inject"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  head"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    - "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'<script src="https://unpkg.com/vue@2.7.13/dist/vue.min.js"><\/script>')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    - "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'<script src="https://unpkg.com/element-ui@2.15.10/lib/index.js"><\/script>')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    - "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'<link rel="stylesheet" href="https://unpkg.com/element-ui@2.15.10/packages/theme-chalk/lib/index.css">')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  bottom"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")])])]),s("button",{class:"collapse"}),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br")])],-1),s("h3",{id:"修改文件",tabindex:"-1"},[i("修改文件 "),s("a",{class:"header-anchor",href:"#修改文件","aria-label":'Permalink to "修改文件"'},"​")],-1),s("p",null,[i("这里主要修改三个js文件"),s("code",null,"utils.js"),i("、"),s("code",null,"main.js"),i("和"),s("code",null,"tw_cn.js")],-1),s("h3",{id:"utils-js",tabindex:"-1"},[i("utils.js "),s("a",{class:"header-anchor",href:"#utils-js","aria-label":'Permalink to "utils.js"'},"​")],-1),s("p",null,[i("打开"),s("code",null,"[Blogroot]\\themes\\butterfly\\source\\js\\utils.js"),i("，修改以下内容")],-1),s("div",{style:{"max-height":"200px"},class:"language-js vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki shiki-themes github-light github-dark has-diff vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line diff remove"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"   snackbarShow"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ("),s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"text"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"showAction"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," false"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"duration"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 2000"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ")]),i(`
`),s("span",{class:"line diff remove"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"     const"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"position"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"bgLight"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"bgDark"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," } "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," GLOBAL_CONFIG"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".Snackbar ")]),i(`
`),s("span",{class:"line diff remove"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"     const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," bg"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," document.documentElement."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getAttribute"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'data-theme'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"==="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'light'"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ?"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," bgLight "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," bgDark ")]),i(`
`),s("span",{class:"line diff remove"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"     Snackbar."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"show"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({ ")]),i(`
`),s("span",{class:"line diff remove"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"       text: text, ")]),i(`
`),s("span",{class:"line diff remove"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"       backgroundColor: bg, ")]),i(`
`),s("span",{class:"line diff remove"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"       showAction: showAction, ")]),i(`
`),s("span",{class:"line diff remove"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"       duration: duration, ")]),i(`
`),s("span",{class:"line diff remove"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"       pos: position, ")]),i(`
`),s("span",{class:"line diff remove"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"       customClass: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'snackbar-css'")]),i(`
`),s("span",{class:"line diff remove"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"     }) ")]),i(`
`),s("span",{class:"line diff remove"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   }, ")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"   snackbarShow"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ("),s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"title"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"message"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"type"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"offset"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 50"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"showClose"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," false"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"     const"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"position"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," } "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," GLOBAL_CONFIG"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".Snackbar ")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"     new"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Vue"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({ ")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"       data"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," () { ")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"           this"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"$notify"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({ ")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"               title: title, ")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"               message: message, ")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"               position: position, ")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"               offset: offset, ")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"               showClose: showClose, ")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"               type: type ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"           });")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"           return"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { visible: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," } ")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"       } ")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"     }) ")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   }, ")])])]),s("button",{class:"collapse"}),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br"),s("span",{class:"line-number"},"18"),s("br"),s("span",{class:"line-number"},"19"),s("br"),s("span",{class:"line-number"},"20"),s("br"),s("span",{class:"line-number"},"21"),s("br"),s("span",{class:"line-number"},"22"),s("br"),s("span",{class:"line-number"},"23"),s("br"),s("span",{class:"line-number"},"24"),s("br"),s("span",{class:"line-number"},"25"),s("br"),s("span",{class:"line-number"},"26"),s("br"),s("span",{class:"line-number"},"27"),s("br"),s("span",{class:"line-number"},"28"),s("br")])],-1),s("h3",{id:"main-js",tabindex:"-1"},[i("main.js "),s("a",{class:"header-anchor",href:"#main-js","aria-label":'Permalink to "main.js"'},"​")],-1),s("p",null,[i("打开"),s("code",null,"[Blogroot]\\themes\\butterfly\\source\\js\\main.js")],-1),s("div",{style:{"max-height":"200px"},class:"language-js vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki shiki-themes github-light github-dark has-diff vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        if"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"GLOBAL_CONFIG"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".Snackbar "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"!=="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," undefined"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),i(`
`),s("span",{class:"line diff remove"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"           btf."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"snackbarShow"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"GLOBAL_CONFIG"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".copy.success) ")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"           btf."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"snackbarShow"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"GLOBAL_CONFIG"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".copy.success,"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"如转载请注明出处！"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},","),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"success"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        } "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"else"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"          const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," prevEle"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ctx.previousElementSibling")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          prevEle.innerText "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," GLOBAL_CONFIG"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".copy.success")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          prevEle.style.opacity "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"          setTimeout"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(() "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { prevEle.style.opacity "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 0"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," }, "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"700"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      } "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"else"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        if"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"GLOBAL_CONFIG"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".Snackbar "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"!=="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," undefined"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),i(`
`),s("span",{class:"line diff remove"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"           btf."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"snackbarShow"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"GLOBAL_CONFIG"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".copy.noSupport) ")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"           btf."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"snackbarShow"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"GLOBAL_CONFIG"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".copy.noSupport,"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"请更换浏览器重试！"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},","),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"error"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        } "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"else"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          ctx.previousElementSibling.innerText "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," GLOBAL_CONFIG"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".copy.noSupport")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"······")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"      if"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (nowMode "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"==="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'light'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"        activateDarkMode"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        saveToLocal."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"set"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'theme'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'dark'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"2"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),i(`
`),s("span",{class:"line diff remove"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"         GLOBAL_CONFIG"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".Snackbar "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"!=="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," undefined"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," &&"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," btf."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"snackbarShow"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"GLOBAL_CONFIG"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".Snackbar.day_to_night) ")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"         GLOBAL_CONFIG"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".Snackbar "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"!=="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," undefined"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," &&"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," btf."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"snackbarShow"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"效果已切换"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},","),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"GLOBAL_CONFIG"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".Snackbar.day_to_night,"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"success"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      } "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"else"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"        activateLightMode"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        saveToLocal."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"set"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'theme'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'light'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"2"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),i(`
`),s("span",{class:"line diff remove"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"         GLOBAL_CONFIG"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".Snackbar "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"!=="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," undefined"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," &&"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," btf."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"snackbarShow"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"GLOBAL_CONFIG"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".Snackbar.night_to_day) ")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"         GLOBAL_CONFIG"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".Snackbar "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"!=="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," undefined"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," &&"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," btf."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"snackbarShow"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"效果已切换"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},","),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"GLOBAL_CONFIG"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".Snackbar.night_to_day,"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"success"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      }")])])]),s("button",{class:"collapse"}),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br"),s("span",{class:"line-number"},"18"),s("br"),s("span",{class:"line-number"},"19"),s("br"),s("span",{class:"line-number"},"20"),s("br"),s("span",{class:"line-number"},"21"),s("br"),s("span",{class:"line-number"},"22"),s("br"),s("span",{class:"line-number"},"23"),s("br"),s("span",{class:"line-number"},"24"),s("br"),s("span",{class:"line-number"},"25"),s("br"),s("span",{class:"line-number"},"26"),s("br"),s("span",{class:"line-number"},"27"),s("br")])],-1),s("h3",{id:"tw-cn-js",tabindex:"-1"},[i("tw_cn.js "),s("a",{class:"header-anchor",href:"#tw-cn-js","aria-label":'Permalink to "tw_cn.js"'},"​")],-1),s("p",null,[i("打开"),s("code",null,"[Blogroot]\\themes\\butterfly\\source\\js\\tw_cn.js")],-1),s("div",{style:{"max-height":"200px"},class:"language-js vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki shiki-themes github-light github-dark has-diff vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"      translateBody"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")]),i(`
`),s("span",{class:"line diff remove"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"       if"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (isSnackbar) btf."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"snackbarShow"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(snackbarData.cht_to_chs) ")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"       if"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (isSnackbar) btf."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"snackbarShow"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"语言切换成功"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",snackbarData.cht_to_chs,"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"success"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    } "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"else"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," if"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (targetEncoding "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"==="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 2"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      currentEncoding "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 2")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      targetEncoding "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      translateButtonObject.innerHTML "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," msgToSimplifiedChinese")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      saveToLocal."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"set"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(targetEncodingCookie, targetEncoding, "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"2"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"      translateBody"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")]),i(`
`),s("span",{class:"line diff remove"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"       if"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (isSnackbar) btf."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"snackbarShow"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(snackbarData.chs_to_cht) ")]),i(`
`),s("span",{class:"line diff add"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"       if"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (isSnackbar) btf."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"snackbarShow"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"語言切換成功"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",snackbarData.chs_to_cht,"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"success"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")])])]),s("button",{class:"collapse"}),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br")])],-1)])),"main-header":a(()=>[h(l.$slots,"main-header")]),"main-header-after":a(()=>[h(l.$slots,"main-header-after")]),"main-nav":a(()=>[h(l.$slots,"main-nav")]),"main-content-before":a(()=>[h(l.$slots,"main-content-before")]),"main-content":a(()=>[h(l.$slots,"main-content")]),"main-content-after":a(()=>[h(l.$slots,"main-content-after")]),"main-nav-before":a(()=>[h(l.$slots,"main-nav-before")]),"main-nav-after":a(()=>[h(l.$slots,"main-nav-after")]),comment:a(()=>[h(l.$slots,"comment")]),footer:a(()=>[h(l.$slots,"footer")]),aside:a(()=>[h(l.$slots,"aside")]),"aside-custom":a(()=>[h(l.$slots,"aside-custom")]),default:a(()=>[h(l.$slots,"default")]),_:3},8,["frontmatter"])}}};export{x as default,f as usePageData};
