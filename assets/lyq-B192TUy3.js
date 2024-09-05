import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang-jomvdWyF.js";import{a as m,p,o as u,c as b,w as a,f as k,h as e,i as l,r as s}from"./app-C1cSskVe.js";import"./YunFooter.vue_vue_type_style_index_0_lang-BMVfsG9H.js";import"./composable-B3D5Od7s.js";import"./YunCard.vue_vue_type_script_setup_true_lang-DkhpMY8I.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-BhEq90QB.js";import"./post-Bz5cB3dO.js";const $={__name:"lyq",setup(g,{expose:h}){const i=JSON.parse('{"title":"小米路由器4A千兆版刷机openwrt(含刷回官方)","description":"","frontmatter":{"title":"小米路由器4A千兆版刷机openwrt(含刷回官方)","categories":"折腾日记","tags":["杂项","路由器","折腾教程"],"cover":"https://i0.hdslb.com/bfs/article/3f5802268684460a5b71e0731b863983381745966.jpg","date":"2022-11-28 16:00:00 +8","updated":"2024-02-15 15:00:00 +8"},"headers":[{"level":2,"title":"准备","slug":"准备","link":"#准备","children":[{"level":3,"title":"工具","slug":"工具","link":"#工具","children":[]},{"level":3,"title":"文件","slug":"文件","link":"#文件","children":[]}]},{"level":2,"title":"刷机","slug":"刷机","link":"#刷机","children":[{"level":3,"title":"获取root权限","slug":"获取root权限","link":"#获取root权限","children":[]},{"level":3,"title":"刷入breed","slug":"刷入breed","link":"#刷入breed","children":[]},{"level":3,"title":"刷入openwrt","slug":"刷入openwrt","link":"#刷入openwrt","children":[]}]},{"level":2,"title":"恢复官方固件","slug":"恢复官方固件","link":"#恢复官方固件","children":[]}],"relativePath":"pages/posts/tech/lyq.md","path":"/home/runner/work/blog/blog/pages/posts/tech/lyq.md","lastUpdated":1725397365000}'),r=m(),n=i.frontmatter||{};return r.meta.frontmatter=Object.assign(r.meta.frontmatter||{},i.frontmatter||{}),p("pageData",i),p("valaxy:frontmatter",n),globalThis.$frontmatter=n,h({frontmatter:{title:"小米路由器4A千兆版刷机openwrt(含刷回官方)",categories:"折腾日记",tags:["杂项","路由器","折腾教程"],cover:"https://i0.hdslb.com/bfs/article/3f5802268684460a5b71e0731b863983381745966.jpg",date:"2022-11-28 16:00:00 +8",updated:"2024-02-15 15:00:00 +8"}}),(t,o)=>{const c=d;return u(),b(c,{frontmatter:k(n)},{"main-content-md":a(()=>o[0]||(o[0]=[e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},[e("i",{class:"icon i-arcticons-pixel-tips"}),e("span",{lang:"en"},"TIP"),e("span",{lang:"zh-CN"},"提示")]),e("p",null,"参考文档:"),e("p",null,[e("a",{href:"https://www.right.com.cn/forum/thread-4317222-1-1.html",target:"_blank",rel:"noreferrer"},"小米路由器4A千兆版刷Padavan(WIN10刷,含刷死救砖)")]),e("p",null,[e("a",{href:"https://www.right.com.cn/forum/thread-4102208-1-1.html",target:"_blank",rel:"noreferrer"},"论坛收集的几个小米路由器官方bootloader")]),e("p",null,[e("a",{href:"https://blog.csdn.net/qq_43206901/article/details/119106511",target:"_blank",rel:"noreferrer"},"小米路由器R4A(千兆版)固件刷opewrt、刷官方固件")]),e("p",null,[e("a",{href:"https://blog.w2aa.ga/post/220724breed.html",target:"_blank",rel:"noreferrer"},"2022-07-24更新的Breed使用说明")]),e("p",null,[l("breed下载: "),e("a",{href:"https://breed.hackpascal.net",target:"_blank",rel:"noreferrer"},"下载地址")]),e("blockquote",null,[e("p",null,"小米路由器使用的两种breed："),e("p",null,"breed-mt7621-pbr-m1.bin"),e("p",null,"breed-mt7621-xiaomi-r3g.bin")])],-1),e("h2",{id:"准备",tabindex:"-1"},[l("准备 "),e("a",{class:"header-anchor",href:"#准备","aria-label":'Permalink to "准备"'},"​")],-1),e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},[e("i",{class:"icon i-arcticons-pixel-tips"}),e("span",{lang:"en"},"TIP"),e("span",{lang:"zh-CN"},"提示")]),e("p",null,"需要Python环境")],-1),e("h3",{id:"工具",tabindex:"-1"},[l("工具 "),e("a",{class:"header-anchor",href:"#工具","aria-label":'Permalink to "工具"'},"​")],-1),e("ul",null,[e("li",null,"breed"),e("li",null,"WinSCP"),e("li",null,"PuTTY"),e("li",null,"官方修复工具")],-1),e("h3",{id:"文件",tabindex:"-1"},[l("文件 "),e("a",{class:"header-anchor",href:"#文件","aria-label":'Permalink to "文件"'},"​")],-1),e("ul",null,[e("li",null,"官方bootloader"),e("li",null,"breed-mt7621-pbr-m1.bin"),e("li",null,"路由器对应型号的任意openwrt固件"),e("li",null,"官方固件")],-1),e("h2",{id:"刷机",tabindex:"-1"},[l("刷机 "),e("a",{class:"header-anchor",href:"#刷机","aria-label":'Permalink to "刷机"'},"​")],-1),e("h3",{id:"获取root权限",tabindex:"-1"},[l("获取root权限 "),e("a",{class:"header-anchor",href:"#获取root权限","aria-label":'Permalink to "获取root权限"'},"​")],-1),e("p",null,"任意位置打开powershell，输入以下命令",-1),e("div",{style:{"max-height":"200px"},class:"language-shell vp-adaptive-theme line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"shell"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"git"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," clone"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," https://github.com/acecilia/OpenWRTInvasion.git")]),l(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"cd"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," OpenWRTInvasion")]),l(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"pip3"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -r"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," requirements.txt")])])]),e("button",{class:"collapse"}),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br")])],-1),e("blockquote",null,[e("p",null,"如果没有安装Git，可以到GitHub下载源代码")],-1),e("p",null,"下载完成，运行",-1),e("div",{style:{"max-height":"200px"},class:"language-python vp-adaptive-theme line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"python"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"python remote_command_execution_vulnerability.py")])])]),e("button",{class:"collapse"}),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br")])],-1),e("p",null,"输入IP(默认为192.168.31.1)，回车后再输入stok值",-1),e("blockquote",null,[e("p",null,[l("stok值为路由器管理后台链接中的"),e("code",null,"stok="),l("后面的部分"),e("code",null,"(stok=XXXXXXXXXX)")])],-1),e("p",null,[l("使用PuTTY连接路由器"),e("code",null,"(电脑需要打开telnet功能)")],-1),e("blockquote",null,[e("p",null,"IP address: 192.168.31.1"),e("p",null,"port: 23"),e("p",null,"type: Other(telnet)")],-1),e("p",null,"连接成功后输入root获取权限",-1),e("h3",{id:"刷入breed",tabindex:"-1"},[l("刷入breed "),e("a",{class:"header-anchor",href:"#刷入breed","aria-label":'Permalink to "刷入breed"'},"​")],-1),e("p",null,[l("用WinSCP登入路由，ftp协议，ip地址192.168.31.1，账号root密码空，把"),e("code",null,"breed-mt7621-pbr-m1.bin"),l("文件上传到tmp文件夹内")],-1),e("p",null,"之后执行",-1),e("div",{style:{"max-height":"200px"},class:"language-shell vp-adaptive-theme line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"shell"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"cd"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /tmp")]),l(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"mtd"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -r"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," write"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," breed-mt7621-pbr-m1.bin"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," Bootloader")])])]),e("button",{class:"collapse"}),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br")])],-1),e("h3",{id:"刷入openwrt",tabindex:"-1"},[l("刷入openwrt "),e("a",{class:"header-anchor",href:"#刷入openwrt","aria-label":'Permalink to "刷入openwrt"'},"​")],-1),e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"},[e("i",{class:"icon i-carbon-warning-alt"}),e("span",{lang:"en"},"WARNING"),e("span",{lang:"zh-CN"},"注意")]),e("p",null,"路由器断开外网")],-1),e("p",null,"断开路由器电源，按住reset按钮，通电，三秒后松开，进入恢复后台192.168.1.1，备份eeprom和固件，截图mac地址（变砖后恢复会用到）。",-1),e("p",null,"勾选固件，然后将小米4A的固件文件进行上传，然后完成固件更新流程。更新过程请不要切断路由电源！更新完成后, 页面并不会自动刷新, 自己尝试能否进入路由配置页面。",-1),e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},[e("i",{class:"icon i-arcticons-pixel-tips"}),e("span",{lang:"en"},"TIP"),e("span",{lang:"zh-CN"},"提示")]),e("p",null,"建议百度查找一下openwrt应该刷入到哪个分区，否则容易卡开机")],-1),e("h2",{id:"恢复官方固件",tabindex:"-1"},[l("恢复官方固件 "),e("a",{class:"header-anchor",href:"#恢复官方固件","aria-label":'Permalink to "恢复官方固件"'},"​")],-1),e("p",null,"进入breed界面，刷入官方bootloader，重启后使用官方修复工具刷入官方固件",-1),e("p",null,"等待重新启动完成即可",-1)])),"main-header":a(()=>[s(t.$slots,"main-header")]),"main-header-after":a(()=>[s(t.$slots,"main-header-after")]),"main-nav":a(()=>[s(t.$slots,"main-nav")]),"main-content":a(()=>[s(t.$slots,"main-content")]),"main-content-after":a(()=>[s(t.$slots,"main-content-after")]),"main-nav-before":a(()=>[s(t.$slots,"main-nav-before")]),"main-nav-after":a(()=>[s(t.$slots,"main-nav-after")]),comment:a(()=>[s(t.$slots,"comment")]),footer:a(()=>[s(t.$slots,"footer")]),aside:a(()=>[s(t.$slots,"aside")]),"aside-custom":a(()=>[s(t.$slots,"aside-custom")]),default:a(()=>[s(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{$ as default};
