if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-23dc0c55"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-wgMuBJ0r.js",revision:null},{url:"assets/_page_-CuLHr0Hd.js",revision:null},{url:"assets/404-C9gkB6Aj.css",revision:null},{url:"assets/404-CN3R-gay.js",revision:null},{url:"assets/404-Dbj3Y712.js",revision:null},{url:"assets/404-DZ-DxN1U.js",revision:null},{url:"assets/404-LZskb45K.css",revision:null},{url:"assets/albums-BmAPtciV.css",revision:null},{url:"assets/albums-DuHgdazf.js",revision:null},{url:"assets/animation-in-CQBZZygY.css",revision:null},{url:"assets/app-BL6NV6pr.js",revision:null},{url:"assets/app-Cyln87sy.css",revision:null},{url:"assets/archives-CgK0zyZG.js",revision:null},{url:"assets/back-CDglnjNZ.js",revision:null},{url:"assets/baiye2-B1KhW5qY.js",revision:null},{url:"assets/baiye3-BoF7szzZ.js",revision:null},{url:"assets/baodao-BVC-PmXg.js",revision:null},{url:"assets/bg-img-kXdNMxcF.jpg",revision:null},{url:"assets/boke1-BlW2hi1i.js",revision:null},{url:"assets/boke2-DlIxFjXe.js",revision:null},{url:"assets/boke3-CzedJFJd.js",revision:null},{url:"assets/boke4-DsDjQbD5.js",revision:null},{url:"assets/byjg1-CzvmtO5V.js",revision:null},{url:"assets/categories-BSctN3Pe.css",revision:null},{url:"assets/categories-xeQqytlx.js",revision:null},{url:"assets/config-BFBxpYuP.js",revision:null},{url:"assets/domain-iRMEgjG6.js",revision:null},{url:"assets/empty-Be6ZwEVL.js",revision:null},{url:"assets/gallery-mW19Rsl4.js",revision:null},{url:"assets/ghproxy-CCx87d2r.js",revision:null},{url:"assets/helper-C4lVbac9.js",revision:null},{url:"assets/home-D_nyz5Hp.css",revision:null},{url:"assets/home-QTRXuwLh.js",revision:null},{url:"assets/image-Cr2weUYC.js",revision:null},{url:"assets/index-9o7PmKXB.css",revision:null},{url:"assets/index-BtEhI_JF.js",revision:null},{url:"assets/index-C5okkQwF.js",revision:null},{url:"assets/index-C7yU5XnD.js",revision:null},{url:"assets/index-CDtsDhRZ.css",revision:null},{url:"assets/index-CkE-bKXq.js",revision:null},{url:"assets/index-CPrH-jFt.js",revision:null},{url:"assets/index-CvX1jldR.js",revision:null},{url:"assets/index-D8bqTb0g.js",revision:null},{url:"assets/index-D8xXAnvH.js",revision:null},{url:"assets/index-DBeOcQM2.js",revision:null},{url:"assets/index-nhBn69Fz.js",revision:null},{url:"assets/KaTeX_AMS-Regular-BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular-DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold-Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold-Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic-SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic-BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic-NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic-DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic-t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic-DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2",revision:null},{url:"assets/layout-CszrhGHG.js",revision:null},{url:"assets/lyq-vi6J805a.js",revision:null},{url:"assets/meihua-CGQVvtj2.js",revision:null},{url:"assets/meihua1-0NTvnIn3.js",revision:null},{url:"assets/meihua10-C7xFp3gp.js",revision:null},{url:"assets/meihua11-BjD8oyqz.js",revision:null},{url:"assets/meihua2-P2PqMp4I.js",revision:null},{url:"assets/meihua3-BllZ7vyp.js",revision:null},{url:"assets/meihua4-DBDrJupK.js",revision:null},{url:"assets/meihua5-BJdyXCjV.js",revision:null},{url:"assets/meihua6-Bc3riJt9.js",revision:null},{url:"assets/meihua7-BTitLcgR.js",revision:null},{url:"assets/meihua8-GsLUgvfs.js",revision:null},{url:"assets/meihua9-llJODL6S.js",revision:null},{url:"assets/none-DLM1AMsD.jpg",revision:null},{url:"assets/novelai-CpKhgOG0.js",revision:null},{url:"assets/novelai1-DVWgvzy3.js",revision:null},{url:"assets/novelai2-Dq6IA7jx.js",revision:null},{url:"assets/ohook-bjj7H_YT.js",revision:null},{url:"assets/post-Be6ZwEVL.js",revision:null},{url:"assets/post-DRy_gP-p.js",revision:null},{url:"assets/post-gQpphGKg.css",revision:null},{url:"assets/post-WaeP5mqK.js",revision:null},{url:"assets/reader-risVYk2i.js",revision:null},{url:"assets/route-block-B_A1xBdJ.js",revision:null},{url:"assets/sidebar-bg-img-mp54gEws.webp",revision:null},{url:"assets/site-DXJWb3qm.js",revision:null},{url:"assets/source1-qgbnd8Vp.js",revision:null},{url:"assets/source2-chCu5A7E.js",revision:null},{url:"assets/tags-Q4UQui3s.js",revision:null},{url:"assets/typora-WYRFFxff.js",revision:null},{url:"assets/uptime-DqQMc0X5.js",revision:null},{url:"assets/ValaxyMain-DPTcnVev.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang-B4k16F5j.js",revision:null},{url:"assets/view-transition-nZH5RA25.css",revision:null},{url:"assets/virtual_pwa-register-BbbzhZWX.js",revision:null},{url:"assets/welcome-D6Y_4o0B.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"assets/YunAlgoliaSearch-BBmbLzaC.js",revision:null},{url:"assets/YunCard.vue_vue_type_script_setup_true_lang-CMtG8h0I.js",revision:null},{url:"assets/YunFooter-B0ViS4tU.css",revision:null},{url:"assets/YunFooter.vue_vue_type_style_index_0_lang-COOnR6RV.js",revision:null},{url:"assets/YunGallery-DW1-5Owj.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang-DfW--qfa.js",revision:null},{url:"assets/YunPostCollapse-DzZAROS7.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang-Brc4liow.js",revision:null},{url:"assets/YunPostList-CYDTlsp3.css",revision:null},{url:"assets/YunPostList.vue_vue_type_style_index_0_lang-CuN_hT0H.js",revision:null},{url:"assets/YunPostMeta-B4_wBHR1.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang-4cu3IAKQ.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"3bb87db188d4e65fb073713111793a63"},{url:"live2d-assets/live2d.min.js",revision:"97a06b32b6e6bee8db7aa128b99b7cc2"},{url:"live2d-assets/waifu-tips.js",revision:"6ff120ccc164e44397a62d9c422569ed"},{url:"live2d-assets/waifu.css",revision:"68aac09b836a1ca1c138b74f46835459"},{url:"live2d/live2d.min.js",revision:"c1c28f553095fdddb4d2c13a11bd4cb9"},{url:"live2d/waifu-tips.js",revision:"0985b64676c5f148dfd56e6edcbee3d0"},{url:"live2d/waifu.css",revision:"d3614cd12a228b44c671c8bd7f7717f2"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"20e471102cdb5dd71038ff861dec552d"},{url:"screenshot-pc.jpg",revision:"a04a1b497a3ad69c60224caa37823dbd"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"manifest.webmanifest",revision:"a81d024f8c1ddb17be49fff1cf645e3a"}],{ignoreURLParametersMatching:[/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css|json)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css|json)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.googleapis.com\/.*\//,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.gstatic.com\/.*\//,new s.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
