if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-bb62b90b"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-CxEW0gui.js",revision:null},{url:"assets/_page_-CsZZ26WN.js",revision:null},{url:"assets/404-BbffBMCQ.js",revision:null},{url:"assets/404-BvDqQgv4.css",revision:null},{url:"assets/404-C9gkB6Aj.css",revision:null},{url:"assets/404-DrsoSVhF.js",revision:null},{url:"assets/404-DS-9W5gr.js",revision:null},{url:"assets/albums-BmAPtciV.css",revision:null},{url:"assets/albums-BzOtHN2b.js",revision:null},{url:"assets/animation-in-CQBZZygY.css",revision:null},{url:"assets/app-D0YfbVHk.js",revision:null},{url:"assets/app-WUyZoMTs.css",revision:null},{url:"assets/archives-kC4Q5glG.js",revision:null},{url:"assets/baiye2-BcLMv8P8.js",revision:null},{url:"assets/baiye3-DCWMpDw_.js",revision:null},{url:"assets/baodao-Dpzw49VC.js",revision:null},{url:"assets/bg-img-kXdNMxcF.jpg",revision:null},{url:"assets/boke1-CmZG3zQ1.js",revision:null},{url:"assets/boke2-w729H5yv.js",revision:null},{url:"assets/boke3-hNLKdeMm.js",revision:null},{url:"assets/boke4-C81mpmI5.js",revision:null},{url:"assets/byjg1-BPD1mQ4c.js",revision:null},{url:"assets/categories-BSctN3Pe.css",revision:null},{url:"assets/categories-l9cq1c6m.js",revision:null},{url:"assets/config-CJnrVOkf.js",revision:null},{url:"assets/domain-DdxvCdlF.js",revision:null},{url:"assets/empty-BGRmNhDZ.js",revision:null},{url:"assets/gallery-B8w_iD4Y.js",revision:null},{url:"assets/ghproxy-BhmT-Dh7.js",revision:null},{url:"assets/home-BkVN7OGI.js",revision:null},{url:"assets/home-D_nyz5Hp.css",revision:null},{url:"assets/image-D1mZOM3n.js",revision:null},{url:"assets/index-2jA2aRER.css",revision:null},{url:"assets/index-BbW2VCvn.js",revision:null},{url:"assets/index-BeutsdgY.js",revision:null},{url:"assets/index-BPXD4FnT.js",revision:null},{url:"assets/index-BU1WQHbW.js",revision:null},{url:"assets/index-C7yU5XnD.js",revision:null},{url:"assets/index-CDtsDhRZ.css",revision:null},{url:"assets/index-CMD8O8p0.js",revision:null},{url:"assets/index-DLfPT_za.js",revision:null},{url:"assets/index-RFnJsW4G.js",revision:null},{url:"assets/index-VBAbL8gj.js",revision:null},{url:"assets/KaTeX_AMS-Regular-BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular-DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold-Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold-Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic-SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic-BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic-NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic-DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic-t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic-DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2",revision:null},{url:"assets/lyq-ZhtFuq57.js",revision:null},{url:"assets/meihua-7YwqFfCu.js",revision:null},{url:"assets/meihua1-DTZwUwH9.js",revision:null},{url:"assets/meihua10-DpGBnPzv.js",revision:null},{url:"assets/meihua11-Qj2la1mr.js",revision:null},{url:"assets/meihua2-DjE62Jqj.js",revision:null},{url:"assets/meihua3-Db-grOMY.js",revision:null},{url:"assets/meihua4-CJrzJ2Wt.js",revision:null},{url:"assets/meihua5-DWh7va3m.js",revision:null},{url:"assets/meihua6-D2IRRimX.js",revision:null},{url:"assets/meihua7-CPA5nqVg.js",revision:null},{url:"assets/meihua8-BYK7oSfx.js",revision:null},{url:"assets/meihua9-DEyFXasA.js",revision:null},{url:"assets/none-DLM1AMsD.jpg",revision:null},{url:"assets/novelai-Nm6pmzN-.js",revision:null},{url:"assets/novelai1-DUXtT6jg.js",revision:null},{url:"assets/novelai2-DYny5HPb.js",revision:null},{url:"assets/ohook-BL3Xncj4.js",revision:null},{url:"assets/post-BGRmNhDZ.js",revision:null},{url:"assets/post-DvxWqgA4.js",revision:null},{url:"assets/post-gQpphGKg.css",revision:null},{url:"assets/reader-Df57DGOr.js",revision:null},{url:"assets/route-block-B_A1xBdJ.js",revision:null},{url:"assets/sidebar-bg-img-mp54gEws.webp",revision:null},{url:"assets/site-CvTngZk0.js",revision:null},{url:"assets/source1-DqSsDEcp.js",revision:null},{url:"assets/source2-Dv6FHwUg.js",revision:null},{url:"assets/tags-BlBq7NKO.js",revision:null},{url:"assets/typora-BpM9B6Ac.js",revision:null},{url:"assets/uptime-BL1tVp_I.js",revision:null},{url:"assets/ValaxyMain-DYxkaEMi.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang-g3y8nrso.js",revision:null},{url:"assets/view-transition-nZH5RA25.css",revision:null},{url:"assets/virtual_pwa-register-BISNZOGn.js",revision:null},{url:"assets/welcome-CVGXFoHD.js",revision:null},{url:"assets/workbox-window.prod.es5-DFjpnwFp.js",revision:null},{url:"assets/YunAlgoliaSearch-DSdu6baj.js",revision:null},{url:"assets/YunCard.vue_vue_type_script_setup_true_lang-BGbN_gG5.js",revision:null},{url:"assets/YunFooter-B0ViS4tU.css",revision:null},{url:"assets/YunFooter.vue_vue_type_style_index_0_lang-D0wWZcl8.js",revision:null},{url:"assets/YunGallery-CBXl38Vv.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang-BWKbc7bx.js",revision:null},{url:"assets/YunPostCollapse-DzZAROS7.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang-UpsKpu2t.js",revision:null},{url:"assets/YunPostList-CYDTlsp3.css",revision:null},{url:"assets/YunPostList.vue_vue_type_style_index_0_lang-B_JKrUDt.js",revision:null},{url:"assets/YunPostMeta-B4_wBHR1.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang-BlnRaqfw.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"5d4573703eb21eec476ee2a0272b26ec"},{url:"live2d/autoload.js",revision:"cefd417137bb57ddf40b0164139db465"},{url:"live2d/live2d.min.js",revision:"97a06b32b6e6bee8db7aa128b99b7cc2"},{url:"live2d/waifu-tips.js",revision:"6ff120ccc164e44397a62d9c422569ed"},{url:"live2d/waifu.css",revision:"60901cd14c87e20ced25f49f6ae1b0ee"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"20e471102cdb5dd71038ff861dec552d"},{url:"screenshot-pc.jpg",revision:"a04a1b497a3ad69c60224caa37823dbd"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"manifest.webmanifest",revision:"a81d024f8c1ddb17be49fff1cf645e3a"}],{ignoreURLParametersMatching:[/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css|json)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css|json)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.googleapis.com\/.*\//,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.gstatic.com\/.*\//,new s.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
