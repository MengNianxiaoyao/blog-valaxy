if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const u=s=>l(s,n),t={module:{uri:n},exports:a,require:u};e[n]=Promise.all(i.map((s=>t[s]||u(s)))).then((s=>(r(...s),a)))}}define(["./workbox-23dc0c55"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-CMY9dyvv.js",revision:null},{url:"assets/_page_-CD8ePxH_.js",revision:null},{url:"assets/404-BiXHLFff.js",revision:null},{url:"assets/404-BMg5lmUL.css",revision:null},{url:"assets/404-Bo6xW9E3.js",revision:null},{url:"assets/404-C9gkB6Aj.css",revision:null},{url:"assets/404-NutQsysC.js",revision:null},{url:"assets/albums-BmAPtciV.css",revision:null},{url:"assets/albums-C98_u7iN.js",revision:null},{url:"assets/animation-in-CQBZZygY.css",revision:null},{url:"assets/app-DtlWsUYY.css",revision:null},{url:"assets/app-viiMjLN2.js",revision:null},{url:"assets/archives-CYiQFz63.js",revision:null},{url:"assets/back-TLNvlEDN.js",revision:null},{url:"assets/baodao-DxGrOGSm.js",revision:null},{url:"assets/bg-img-kXdNMxcF.jpg",revision:null},{url:"assets/boke1-DfDod1fr.js",revision:null},{url:"assets/boke2-R9Cx0ggg.js",revision:null},{url:"assets/boke3-CTDFMaT0.js",revision:null},{url:"assets/boke4-ClkFcx4S.js",revision:null},{url:"assets/boke5-CG9JgbA0.js",revision:null},{url:"assets/byjg1-DFPaJfkj.js",revision:null},{url:"assets/byjg2-slwJljJu.js",revision:null},{url:"assets/byjg3-DOF7MRaJ.js",revision:null},{url:"assets/categories-BSctN3Pe.css",revision:null},{url:"assets/categories-F5Mb0G9-.js",revision:null},{url:"assets/cdn-CQ6J2Adu.js",revision:null},{url:"assets/composable-BT3KfivW.js",revision:null},{url:"assets/config-D2o-picK.js",revision:null},{url:"assets/domain-DUYsZuj1.js",revision:null},{url:"assets/email-BrD4gUfh.js",revision:null},{url:"assets/empty-C7IGkn60.js",revision:null},{url:"assets/faq-K7ybd0P8.js",revision:null},{url:"assets/gallery-DnG3fi0G.js",revision:null},{url:"assets/ghproxy-DSnspUk8.js",revision:null},{url:"assets/helper-DF_PmihC.js",revision:null},{url:"assets/home-Cik-Yf6U.js",revision:null},{url:"assets/home-D_nyz5Hp.css",revision:null},{url:"assets/image-2cA9Qq-q.js",revision:null},{url:"assets/index-6BCgDaKC.js",revision:null},{url:"assets/index-B_4TV-hZ.js",revision:null},{url:"assets/index-B9NJ0Isz.js",revision:null},{url:"assets/index-BfyNOVaF.js",revision:null},{url:"assets/index-C5okkQwF.js",revision:null},{url:"assets/index-cdguzdXS.js",revision:null},{url:"assets/index-CDtsDhRZ.css",revision:null},{url:"assets/index-CE4-9-yb.js",revision:null},{url:"assets/index-D9DCITGv.js",revision:null},{url:"assets/index-DhvCa6D7.js",revision:null},{url:"assets/index-DMGgB8tt.css",revision:null},{url:"assets/index-DzpJgY6C.js",revision:null},{url:"assets/index-OIvLAHBy.js",revision:null},{url:"assets/KaTeX_AMS-Regular-BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular-DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_AMS-Regular-DRggAlZN.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-ATXxdsX0.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-wX97UBjC.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BdnERNNW.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CB_wures.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold-Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold-Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-Bold-waoOVXN0.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DzxPMmG6.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic-3WenGoN9.ttf",revision:null},{url:"assets/KaTeX_Main-Italic-BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic-NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Main-Regular-ypZvNtVU.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-B3XSjfu4.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic-DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic-flOr_0UB.ttf",revision:null},{url:"assets/KaTeX_Math-Italic-t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-CFMepnvq.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic-DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-YYjJ1zSn.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-BNo7hRIc.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-C5JkGWo-.ttf",revision:null},{url:"assets/KaTeX_Script-Regular-D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-Dbsnue_I.ttf",revision:null},{url:"assets/KaTeX_Size1-Regular-mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-B7gKUWhC.ttf",revision:null},{url:"assets/KaTeX_Size2-Regular-Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-DgpXs0kz.ttf",revision:null},{url:"assets/KaTeX_Size4-Regular-BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Size4-Regular-DWFBv043.ttf",revision:null},{url:"assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular-D3Ib7_Hf.ttf",revision:null},{url:"assets/lyq-CxwnERaI.js",revision:null},{url:"assets/meihua-D6A8_LQt.js",revision:null},{url:"assets/meihua1-BTzVfNhR.js",revision:null},{url:"assets/meihua10-B1-h54aJ.js",revision:null},{url:"assets/meihua11-BOK6t56m.js",revision:null},{url:"assets/meihua2-2ADOHssC.js",revision:null},{url:"assets/meihua3-gYpgK3aw.js",revision:null},{url:"assets/meihua4-iifN8Iwn.js",revision:null},{url:"assets/meihua5-DFqggp_c.js",revision:null},{url:"assets/meihua6-Ccaivc81.js",revision:null},{url:"assets/meihua7-ApwViDZW.js",revision:null},{url:"assets/meihua8-DqK4vtOk.js",revision:null},{url:"assets/meihua9-B-Gxsjh1.js",revision:null},{url:"assets/none-DLM1AMsD.jpg",revision:null},{url:"assets/novelai-D9g0Cmnx.js",revision:null},{url:"assets/novelai1-CL3rwSZO.js",revision:null},{url:"assets/novelai2-BPFCD7bl.js",revision:null},{url:"assets/ohook-08BcDU1-.js",revision:null},{url:"assets/post-C7IGkn60.js",revision:null},{url:"assets/post-Ciy6gvTn.js",revision:null},{url:"assets/post-gQpphGKg.css",revision:null},{url:"assets/post-sqYbpNiV.js",revision:null},{url:"assets/reader-DZcuwSBV.js",revision:null},{url:"assets/route-block-B_A1xBdJ.js",revision:null},{url:"assets/sidebar-bg-img-mp54gEws.webp",revision:null},{url:"assets/site-CGrUWIrL.js",revision:null},{url:"assets/source1-0CEl7ZOH.js",revision:null},{url:"assets/source2-NZx7CELU.js",revision:null},{url:"assets/tags-BVjaUfZi.js",revision:null},{url:"assets/tools-BEL-jWSu.js",revision:null},{url:"assets/typora-Br3_RY5N.js",revision:null},{url:"assets/uptime-DGFZcU3f.js",revision:null},{url:"assets/uptimeapi-IJgWIbm4.js",revision:null},{url:"assets/ValaxyMain-CxY0pdzc.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang-D9XYecu5.js",revision:null},{url:"assets/view-transition-nZH5RA25.css",revision:null},{url:"assets/virtual_pwa-register-BoLr9yVq.js",revision:null},{url:"assets/welcome-B2dVqjfJ.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"assets/YunAlgoliaSearch-FLvFB6dT.js",revision:null},{url:"assets/YunCard.vue_vue_type_script_setup_true_lang-C_6jYnCd.js",revision:null},{url:"assets/YunFooter-DjwaLgRs.css",revision:null},{url:"assets/YunFooter.vue_vue_type_style_index_0_lang-DmVMlT_t.js",revision:null},{url:"assets/YunGallery-BiCz3XNJ.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang-C78XgKOx.js",revision:null},{url:"assets/YunPostCollapse-DzZAROS7.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang-FsmryiE3.js",revision:null},{url:"assets/YunPostList-CYDTlsp3.css",revision:null},{url:"assets/YunPostList.vue_vue_type_style_index_0_lang-BjYmXNql.js",revision:null},{url:"assets/YunPostMeta-B4_wBHR1.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang-BBQwFu-2.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"a84b6e2f2f7f09e7044f3a846e7dd514"},{url:"live2d-assets/live2d.min.js",revision:"97a06b32b6e6bee8db7aa128b99b7cc2"},{url:"live2d-assets/waifu-tips.js",revision:"6ff120ccc164e44397a62d9c422569ed"},{url:"live2d-assets/waifu.css",revision:"68aac09b836a1ca1c138b74f46835459"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"20e471102cdb5dd71038ff861dec552d"},{url:"screenshot-pc.jpg",revision:"a04a1b497a3ad69c60224caa37823dbd"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"manifest.webmanifest",revision:"a81d024f8c1ddb17be49fff1cf645e3a"}],{ignoreURLParametersMatching:[/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.(googleapis|gstatic).com\/.*\//,new s.CacheFirst({cacheName:"network-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
