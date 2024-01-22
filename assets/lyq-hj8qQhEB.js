import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-4rpn_ink.js";import{_ as d,a as h,p as u,o as m,c as b,w as s,f as e,g as n,i as l,s as _,r as a,h as y}from"./app-joX8rTEl.js";import"./YunFooter.vue_vue_type_style_index_0_lang-X4Qa9iOm.js";import"./YunCard.vue_vue_type_script_setup_true_lang-goFdJB5W.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-Iu7cYHs5.js";import"./index-nlSmcLJj.js";const r=JSON.parse('{"title":"小米路由器4A千兆版刷机openwrt(含刷回官方)","description":"","frontmatter":{"title":"小米路由器4A千兆版刷机openwrt(含刷回官方)","categories":"折腾日记","tags":["杂项","路由器","折腾教程"],"cover":"https://i0.hdslb.com/bfs/article/3f5802268684460a5b71e0731b863983381745966.jpg","date":"2022-11-28T16:00:00.000Z"},"headers":[{"level":2,"title":"准备","slug":"准备","link":"#准备","children":[{"level":3,"title":"工具","slug":"工具","link":"#工具","children":[]},{"level":3,"title":"文件","slug":"文件","link":"#文件","children":[]}]},{"level":2,"title":"刷机","slug":"刷机","link":"#刷机","children":[{"level":3,"title":"获取root权限","slug":"获取root权限","link":"#获取root权限","children":[]},{"level":3,"title":"刷入breed","slug":"刷入breed","link":"#刷入breed","children":[]},{"level":3,"title":"刷入openwrt","slug":"刷入openwrt","link":"#刷入openwrt","children":[]}]},{"level":2,"title":"恢复官方固件","slug":"恢复官方固件","link":"#恢复官方固件","children":[]}],"relativePath":"pages/posts/lyq.md","path":"/home/runner/work/blog/blog/pages/posts/lyq.md","lastUpdated":1705965752000}'),f={name:"pages/posts/lyq.md",data(){return{data:r,frontmatter:r.frontmatter,$frontmatter:r.frontmatter}},setup(){const t=h();t.meta.frontmatter=Object.assign(t.meta.frontmatter||{},r.frontmatter||{}),u("pageData",r)}},g={class:"tip custom-block"},E=e("p",{class:"custom-block-title"},[e("i",{class:"icon i-arcticons-pixel-tips"}),e("span",{lang:"en"},"TIP"),e("span",{lang:"zh-CN"},"提示")],-1),k=e("p",null,"参考文档:",-1),F=e("blockquote",null,[e("p",null,[l("小米路由器使用的两种breed："),e("br"),l(" breed-mt7621-pbr-m1.bin"),e("br"),l(" breed-mt7621-xiaomi-r3g.bin")])],-1),v={id:"准备",tabindex:"-1"},C=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},[e("i",{class:"icon i-arcticons-pixel-tips"}),e("span",{lang:"en"},"TIP"),e("span",{lang:"zh-CN"},"提示")]),e("p",null,"需要Python环境")],-1),w={id:"工具",tabindex:"-1"},B=e("ul",null,[e("li",null,"breed"),e("li",null,"WinSCP"),e("li",null,"PuTTY"),e("li",null,"官方修复工具")],-1),P={id:"文件",tabindex:"-1"},$=e("ul",null,[e("li",null,"官方bootloader"),e("li",null,"breed-mt7621-pbr-m1.bin"),e("li",null,"路由器对应型号的任意openwrt固件"),e("li",null,"官方固件")],-1),x={id:"刷机",tabindex:"-1"},q={id:"获取root权限",tabindex:"-1"},T=e("p",null,"任意位置打开powershell，输入以下命令",-1),N=e("div",{style:{"max-height":"200px"},class:"language-shell line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"shell"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"git"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"clone"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"https://github.com/acecilia/OpenWRTInvasion.git")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"cd"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"OpenWRTInvasion")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"pip3"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"install"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#79B8FF"}},"-r"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"requirements.txt")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6F42C1"}},"git"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"clone"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"https://github.com/acecilia/OpenWRTInvasion.git")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"cd"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"OpenWRTInvasion")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6F42C1"}},"pip3"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"install"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#005CC5"}},"-r"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"requirements.txt")])])]),e("button",{class:"collapse"}),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br")])],-1),I=e("blockquote",null,[e("p",null,"如果没有安装Git，可以到GitHub下载源代码")],-1),X=e("p",null,"下载完成，运行",-1),W=e("div",{style:{"max-height":"200px"},class:"language-python line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"python"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"python remote_command_execution_vulnerability.py")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292E"}},"python remote_command_execution_vulnerability.py")])])]),e("button",{class:"collapse"}),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br")])],-1),A=e("p",null,"输入IP(默认为192.168.31.1)，回车后再输入stok值",-1),O=e("blockquote",null,[e("p",null,[l("stok值为路由器管理后台链接中的"),e("code",null,"stok="),l("后面的部分"),e("code",null,"(stok=XXXXXXXXXX)")])],-1),R=e("p",null,[l("使用PuTTY连接路由器"),e("code",null,"(电脑需要打开telnet功能)")],-1),V=e("blockquote",null,[e("p",null,"IP address: 192.168.31.1 port: 23 type: Other(telnet)")],-1),S=e("p",null,"连接成功后输入root获取权限",-1),z={id:"刷入breed",tabindex:"-1"},G=e("p",null,[l("用WinSCP登入路由，ftp协议，ip地址192.168.31.1，账号root密码空，把"),e("code",null,"breed-mt7621-pbr-m1.bin"),l("文件上传到tmp文件夹内")],-1),j=e("p",null,"之后执行",-1),Y=e("div",{style:{"max-height":"200px"},class:"language-shell line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"shell"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"cd"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"/tmp")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"mtd"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#79B8FF"}},"-r"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"write"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"breed-mt7621-pbr-m1.bin"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"Bootloader")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"cd"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"/tmp")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6F42C1"}},"mtd"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#005CC5"}},"-r"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"write"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"breed-mt7621-pbr-m1.bin"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"Bootloader")])])]),e("button",{class:"collapse"}),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br")])],-1),D={id:"刷入openwrt",tabindex:"-1"},H=e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"},[e("i",{class:"icon i-carbon-warning-alt"}),e("span",{lang:"en"},"WARNING"),e("span",{lang:"zh-CN"},"注意")]),e("p",null,"路由器断开外网")],-1),J=e("p",null,"断开路由器电源，按住reset按钮，通电，三秒后松开，进入恢复后台192.168.1.1，备份eeprom和固件，截图mac地址（变砖后恢复会用到）。",-1),L=e("p",null,"勾选固件，然后将小米4A的固件文件进行上传，然后完成固件更新流程。更新过程请不要切断路由电源！更新完成后, 页面并不会自动刷新, 自己尝试能否进入路由配置页面。",-1),M={id:"恢复官方固件",tabindex:"-1"},U=e("p",null,"进入breed界面，刷入官方bootloader，重启后使用官方修复工具刷入官方固件",-1),Z=e("p",null,"等待重新启动完成即可",-1);function K(t,Q,ee,le,i,se){const o=y,c=p;return m(),b(c,{frontmatter:i.frontmatter,data:i.data},{"main-content-md":s(()=>[e("div",g,[E,k,e("p",null,[n(o,{href:"https://www.right.com.cn/forum/thread-4317222-1-1.html",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("小米路由器4A千兆版刷Padavan(WIN10刷,含刷死救砖)")]),_:1})]),e("p",null,[n(o,{href:"https://www.right.com.cn/forum/thread-4102208-1-1.html",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("论坛收集的几个小米路由器官方bootloader")]),_:1})]),e("p",null,[n(o,{href:"https://blog.csdn.net/qq_43206901/article/details/119106511",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("小米路由器R4A(千兆版)固件刷opewrt、刷官方固件")]),_:1})]),e("p",null,[n(o,{href:"https://blog.w2aa.ga/post/220724breed.html",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("2022-07-24更新的Breed使用说明")]),_:1})]),e("p",null,[l("breed下载: "),n(o,{href:"https://breed.hackpascal.net",target:"_blank",rel:"noreferrer"},{default:s(()=>[l("下载地址")]),_:1})]),F]),_(" more "),e("h2",v,[l("准备 "),n(o,{class:"header-anchor",href:"#准备","aria-label":'Permalink to "准备"'},{default:s(()=>[l("​")]),_:1})]),C,e("h3",w,[l("工具 "),n(o,{class:"header-anchor",href:"#工具","aria-label":'Permalink to "工具"'},{default:s(()=>[l("​")]),_:1})]),B,e("h3",P,[l("文件 "),n(o,{class:"header-anchor",href:"#文件","aria-label":'Permalink to "文件"'},{default:s(()=>[l("​")]),_:1})]),$,e("h2",x,[l("刷机 "),n(o,{class:"header-anchor",href:"#刷机","aria-label":'Permalink to "刷机"'},{default:s(()=>[l("​")]),_:1})]),e("h3",q,[l("获取root权限 "),n(o,{class:"header-anchor",href:"#获取root权限","aria-label":'Permalink to "获取root权限"'},{default:s(()=>[l("​")]),_:1})]),T,N,I,X,W,A,O,R,V,S,e("h3",z,[l("刷入breed "),n(o,{class:"header-anchor",href:"#刷入breed","aria-label":'Permalink to "刷入breed"'},{default:s(()=>[l("​")]),_:1})]),G,j,Y,e("h3",D,[l("刷入openwrt "),n(o,{class:"header-anchor",href:"#刷入openwrt","aria-label":'Permalink to "刷入openwrt"'},{default:s(()=>[l("​")]),_:1})]),H,J,L,e("h2",M,[l("恢复官方固件 "),n(o,{class:"header-anchor",href:"#恢复官方固件","aria-label":'Permalink to "恢复官方固件"'},{default:s(()=>[l("​")]),_:1})]),U,Z]),"main-header":s(()=>[a(t.$slots,"main-header")]),"main-header-after":s(()=>[a(t.$slots,"main-header-after")]),"main-nav":s(()=>[a(t.$slots,"main-nav")]),"main-content":s(()=>[a(t.$slots,"main-content")]),"main-content-after":s(()=>[a(t.$slots,"main-content-after")]),"main-nav-before":s(()=>[a(t.$slots,"main-nav-before")]),"main-nav-after":s(()=>[a(t.$slots,"main-nav-after")]),comment:s(()=>[a(t.$slots,"comment")]),footer:s(()=>[a(t.$slots,"footer")]),aside:s(()=>[a(t.$slots,"aside")]),"aside-custom":s(()=>[a(t.$slots,"aside-custom")]),default:s(()=>[a(t.$slots,"default")]),_:3},8,["frontmatter","data"])}const ce=d(f,[["render",K]]);export{r as data,ce as default};
