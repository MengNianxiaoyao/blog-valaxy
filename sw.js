if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const u=s=>l(s,n),t={module:{uri:n},exports:a,require:u};e[n]=Promise.all(i.map((s=>t[s]||u(s)))).then((s=>(r(...s),a)))}}define(["./workbox-23dc0c55"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-gy3oc3t7.js",revision:null},{url:"assets/_page_-BECKBN2G.js",revision:null},{url:"assets/404-C6vU2ea0.js",revision:null},{url:"assets/404-C9gkB6Aj.css",revision:null},{url:"assets/404-CyKmT9_F.js",revision:null},{url:"assets/404-mt-QKoZV.js",revision:null},{url:"assets/404-XWRNuNj1.css",revision:null},{url:"assets/albums-BmAPtciV.css",revision:null},{url:"assets/albums-Pxq1XlQ3.js",revision:null},{url:"assets/animation-in-CQBZZygY.css",revision:null},{url:"assets/app-BRycjtQ8.js",revision:null},{url:"assets/app-Lap-ovnA.css",revision:null},{url:"assets/archives-d4fC0MGA.js",revision:null},{url:"assets/back-jPLP1044.js",revision:null},{url:"assets/baodao-Dp2F2-4i.js",revision:null},{url:"assets/bg-img-kXdNMxcF.jpg",revision:null},{url:"assets/boke1-DZy_SdrC.js",revision:null},{url:"assets/boke2-Drw1dNZD.js",revision:null},{url:"assets/boke3-Dp9rHAHA.js",revision:null},{url:"assets/boke4-CfLtLyea.js",revision:null},{url:"assets/boke5-DYbm0tbN.js",revision:null},{url:"assets/byjg1-Dut9wLBm.js",revision:null},{url:"assets/byjg2-vkWjVVVq.js",revision:null},{url:"assets/byjg3-w-Iay_VH.js",revision:null},{url:"assets/categories-BSctN3Pe.css",revision:null},{url:"assets/categories-CKtcHgI7.js",revision:null},{url:"assets/cdn-BMj7figS.js",revision:null},{url:"assets/config-DeS-jxRe.js",revision:null},{url:"assets/domain-CYRn943a.js",revision:null},{url:"assets/email-Cx0VS4ZM.js",revision:null},{url:"assets/empty-rkMm1n6k.js",revision:null},{url:"assets/faq-DbRxjhXa.js",revision:null},{url:"assets/gallery-C4iB4sle.js",revision:null},{url:"assets/ghproxy-CzpeeYS8.js",revision:null},{url:"assets/helper-Bqch8Gw4.js",revision:null},{url:"assets/home-Cq1cX_qG.js",revision:null},{url:"assets/home-D_nyz5Hp.css",revision:null},{url:"assets/image-DaXCC7Na.js",revision:null},{url:"assets/index-Bj38XWP1.js",revision:null},{url:"assets/index-BM-fMohf.js",revision:null},{url:"assets/index-BMYe6tRC.js",revision:null},{url:"assets/index-BWw2AotL.js",revision:null},{url:"assets/index-C5okkQwF.js",revision:null},{url:"assets/index-CDtsDhRZ.css",revision:null},{url:"assets/index-CjCtndYx.js",revision:null},{url:"assets/index-CKNrODty.js",revision:null},{url:"assets/index-Ckt3E4-4.js",revision:null},{url:"assets/index-D3pOsixE.css",revision:null},{url:"assets/index-J9qUXtE2.js",revision:null},{url:"assets/index-Z_Gs4cXq.js",revision:null},{url:"assets/index-z5Y-Orcm.js",revision:null},{url:"assets/KaTeX_AMS-Regular-BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular-DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_AMS-Regular-DRggAlZN.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-ATXxdsX0.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-wX97UBjC.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BdnERNNW.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CB_wures.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold-Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold-Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-Bold-waoOVXN0.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DzxPMmG6.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic-3WenGoN9.ttf",revision:null},{url:"assets/KaTeX_Main-Italic-BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic-NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Main-Regular-ypZvNtVU.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-B3XSjfu4.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic-DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic-flOr_0UB.ttf",revision:null},{url:"assets/KaTeX_Math-Italic-t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-CFMepnvq.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic-DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-YYjJ1zSn.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-BNo7hRIc.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-C5JkGWo-.ttf",revision:null},{url:"assets/KaTeX_Script-Regular-D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-Dbsnue_I.ttf",revision:null},{url:"assets/KaTeX_Size1-Regular-mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-B7gKUWhC.ttf",revision:null},{url:"assets/KaTeX_Size2-Regular-Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-DgpXs0kz.ttf",revision:null},{url:"assets/KaTeX_Size4-Regular-BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Size4-Regular-DWFBv043.ttf",revision:null},{url:"assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular-D3Ib7_Hf.ttf",revision:null},{url:"assets/lyq-DCr6DRVc.js",revision:null},{url:"assets/meihua-dM_gYfm_.js",revision:null},{url:"assets/meihua1-Cqr2YtrG.js",revision:null},{url:"assets/meihua10-DVf7pzIU.js",revision:null},{url:"assets/meihua11-B1veZXEl.js",revision:null},{url:"assets/meihua2-C94lySL-.js",revision:null},{url:"assets/meihua3-DZN25aZi.js",revision:null},{url:"assets/meihua4-C0asVW6p.js",revision:null},{url:"assets/meihua5-ClUn60yj.js",revision:null},{url:"assets/meihua6-PvJkq2U5.js",revision:null},{url:"assets/meihua7-Bm2Ld6Z6.js",revision:null},{url:"assets/meihua8-BKdMhBmL.js",revision:null},{url:"assets/meihua9-Bp6DZvgw.js",revision:null},{url:"assets/none-DLM1AMsD.jpg",revision:null},{url:"assets/novelai-CMK9vknz.js",revision:null},{url:"assets/novelai1-D7WAeomg.js",revision:null},{url:"assets/novelai2-Bpm_8uF8.js",revision:null},{url:"assets/ohook-DvH4hmfr.js",revision:null},{url:"assets/post-Dx5wbj87.js",revision:null},{url:"assets/post-gQpphGKg.css",revision:null},{url:"assets/post-rkMm1n6k.js",revision:null},{url:"assets/post-Zuo0sVDI.js",revision:null},{url:"assets/reader-BL28wIy_.js",revision:null},{url:"assets/route-block-B_A1xBdJ.js",revision:null},{url:"assets/sidebar-bg-img-mp54gEws.webp",revision:null},{url:"assets/site-DfrxbnPB.js",revision:null},{url:"assets/source1-C5XFz-hN.js",revision:null},{url:"assets/source2-Cm8MDd7M.js",revision:null},{url:"assets/tags-DMTsS4Cu.js",revision:null},{url:"assets/tools-gLX9JJaq.js",revision:null},{url:"assets/typora-CRHf63u5.js",revision:null},{url:"assets/uptime-BuEoT1Xv.js",revision:null},{url:"assets/uptimeapi-BbUEj_pe.js",revision:null},{url:"assets/ValaxyMain--ok-faaZ.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang-DpyPFvK7.js",revision:null},{url:"assets/view-transition-nZH5RA25.css",revision:null},{url:"assets/virtual_pwa-register-BUtXVqlu.js",revision:null},{url:"assets/welcome-Dn_UCMPH.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"assets/YunAlgoliaSearch-BC7GQhiQ.js",revision:null},{url:"assets/YunCard.vue_vue_type_script_setup_true_lang-Btw4Qp0S.js",revision:null},{url:"assets/YunFooter-B0ViS4tU.css",revision:null},{url:"assets/YunFooter.vue_vue_type_style_index_0_lang-CDjjYZIy.js",revision:null},{url:"assets/YunGallery-CPOX4LEA.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang-DlWiM5Gx.js",revision:null},{url:"assets/YunPostCollapse-DzZAROS7.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang-wHKHih5O.js",revision:null},{url:"assets/YunPostList-CYDTlsp3.css",revision:null},{url:"assets/YunPostList.vue_vue_type_style_index_0_lang-Db1nRMm9.js",revision:null},{url:"assets/YunPostMeta-B4_wBHR1.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang-BPlg8VCm.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"d63e6083c7beddde0f4ca04a78a847e3"},{url:"live2d-assets/live2d.min.js",revision:"97a06b32b6e6bee8db7aa128b99b7cc2"},{url:"live2d-assets/waifu-tips.js",revision:"6ff120ccc164e44397a62d9c422569ed"},{url:"live2d-assets/waifu.css",revision:"68aac09b836a1ca1c138b74f46835459"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"20e471102cdb5dd71038ff861dec552d"},{url:"screenshot-pc.jpg",revision:"a04a1b497a3ad69c60224caa37823dbd"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"manifest.webmanifest",revision:"a81d024f8c1ddb17be49fff1cf645e3a"}],{ignoreURLParametersMatching:[/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css|json)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css|json)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.googleapis.com\/.*\//,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.gstatic.com\/.*\//,new s.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
