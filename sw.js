if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const u=s=>l(s,n),t={module:{uri:n},exports:a,require:u};e[n]=Promise.all(i.map((s=>t[s]||u(s)))).then((s=>(r(...s),a)))}}define(["./workbox-23dc0c55"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-DM1o9QcR.js",revision:null},{url:"assets/_page_-BwzeNXaj.js",revision:null},{url:"assets/404-8l66MkNM.js",revision:null},{url:"assets/404-BbMlQy9m.js",revision:null},{url:"assets/404-C9gkB6Aj.css",revision:null},{url:"assets/404-DhI3PKlI.js",revision:null},{url:"assets/404-dUJbCH7t.css",revision:null},{url:"assets/albums-BmAPtciV.css",revision:null},{url:"assets/albums-CPWAYfWr.js",revision:null},{url:"assets/animation-in-CQBZZygY.css",revision:null},{url:"assets/app-9K8rPuaF.js",revision:null},{url:"assets/app-iJTLFCmh.css",revision:null},{url:"assets/archives-B1ncZPwE.js",revision:null},{url:"assets/back-D-AVQ-a1.js",revision:null},{url:"assets/baodao-CVfvSHX2.js",revision:null},{url:"assets/bg-img-kXdNMxcF.jpg",revision:null},{url:"assets/bilibili-bangumi.entry-BVOKxaKq.js",revision:null},{url:"assets/boke1-2A0NfxhT.js",revision:null},{url:"assets/boke2-Cww3vBOO.js",revision:null},{url:"assets/boke3-CXEqmaWq.js",revision:null},{url:"assets/boke4-CkZouq-j.js",revision:null},{url:"assets/boke5-B7nsjVZ7.js",revision:null},{url:"assets/byjg1-BUDEVhq_.js",revision:null},{url:"assets/byjg2-CrxF_-gl.js",revision:null},{url:"assets/byjg3-B0EjGpIU.js",revision:null},{url:"assets/categories-BSctN3Pe.css",revision:null},{url:"assets/categories-DNUMLS6h.js",revision:null},{url:"assets/cdn-IDFXVaCq.js",revision:null},{url:"assets/collection-BvnViz1u.js",revision:null},{url:"assets/collections-DTCH4GFw.js",revision:null},{url:"assets/composable-BTX2bP9c.js",revision:null},{url:"assets/config-lhcQwx3c.js",revision:null},{url:"assets/domain-D3hnzpeF.js",revision:null},{url:"assets/email-D5aHkIXN.js",revision:null},{url:"assets/empty-QI3Z7iyg.js",revision:null},{url:"assets/faq-Csj-rg8m.js",revision:null},{url:"assets/gallery-B4c11rmE.js",revision:null},{url:"assets/ghproxy-C7IMs-Gt.js",revision:null},{url:"assets/helper-tXLpYru6.js",revision:null},{url:"assets/home-BL8pr9Fp.js",revision:null},{url:"assets/home-D_nyz5Hp.css",revision:null},{url:"assets/image-M003Hn_W.js",revision:null},{url:"assets/index-0mZJ7R9Z.js",revision:null},{url:"assets/index-7OvlNTHm.js",revision:null},{url:"assets/index-B8zzpm-H.js",revision:null},{url:"assets/index-BkMh8Bww.js",revision:null},{url:"assets/index-Btp_OETp.css",revision:null},{url:"assets/index-C5okkQwF.js",revision:null},{url:"assets/index-C7eryjV0.js",revision:null},{url:"assets/index-CDtsDhRZ.css",revision:null},{url:"assets/index-CPtOi1wP.js",revision:null},{url:"assets/index-CQV09pdg.js",revision:null},{url:"assets/index-DNGlOmJ6.js",revision:null},{url:"assets/index-DoUDNHhL.js",revision:null},{url:"assets/index-DUCpquI5.js",revision:null},{url:"assets/index-KLdbzgh9.js",revision:null},{url:"assets/KaTeX_AMS-Regular-BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular-DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_AMS-Regular-DRggAlZN.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-ATXxdsX0.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-wX97UBjC.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BdnERNNW.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CB_wures.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold-Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold-Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-Bold-waoOVXN0.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DzxPMmG6.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic-3WenGoN9.ttf",revision:null},{url:"assets/KaTeX_Main-Italic-BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic-NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Main-Regular-ypZvNtVU.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-B3XSjfu4.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic-DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic-flOr_0UB.ttf",revision:null},{url:"assets/KaTeX_Math-Italic-t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-CFMepnvq.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic-DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-YYjJ1zSn.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-BNo7hRIc.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-C5JkGWo-.ttf",revision:null},{url:"assets/KaTeX_Script-Regular-D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-Dbsnue_I.ttf",revision:null},{url:"assets/KaTeX_Size1-Regular-mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-B7gKUWhC.ttf",revision:null},{url:"assets/KaTeX_Size2-Regular-Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-DgpXs0kz.ttf",revision:null},{url:"assets/KaTeX_Size4-Regular-BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Size4-Regular-DWFBv043.ttf",revision:null},{url:"assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular-D3Ib7_Hf.ttf",revision:null},{url:"assets/lyq-B9IeQJA1.js",revision:null},{url:"assets/meihua-D6DxWLEH.js",revision:null},{url:"assets/meihua1-DKx3f638.js",revision:null},{url:"assets/meihua10-e1LwF0iA.js",revision:null},{url:"assets/meihua11-BziILvhj.js",revision:null},{url:"assets/meihua2-DyzBiI9i.js",revision:null},{url:"assets/meihua3-D-LfwmMz.js",revision:null},{url:"assets/meihua4-BaEOVLY-.js",revision:null},{url:"assets/meihua5-BBs7SLbt.js",revision:null},{url:"assets/meihua6-DSMGAIUk.js",revision:null},{url:"assets/meihua7-D5LMsu7a.js",revision:null},{url:"assets/meihua8-CkoBat4Q.js",revision:null},{url:"assets/meihua9-DXS1nQ68.js",revision:null},{url:"assets/none-DLM1AMsD.jpg",revision:null},{url:"assets/novelai-BfG77946.js",revision:null},{url:"assets/novelai1-mt9TKXFd.js",revision:null},{url:"assets/novelai2-B9FsvRo-.js",revision:null},{url:"assets/ohook-BRx-cgkp.js",revision:null},{url:"assets/post-BDmud-Qd.js",revision:null},{url:"assets/post-gQpphGKg.css",revision:null},{url:"assets/post-QI3Z7iyg.js",revision:null},{url:"assets/post-rNSFsIQG.js",revision:null},{url:"assets/reader-BOVjoawa.js",revision:null},{url:"assets/route-block-B_A1xBdJ.js",revision:null},{url:"assets/sidebar-bg-img-mp54gEws.webp",revision:null},{url:"assets/site-DQM5Bl42.js",revision:null},{url:"assets/source1-DJiSitET.js",revision:null},{url:"assets/source2-7FQDXbmx.js",revision:null},{url:"assets/tags-4cEK4UVI.js",revision:null},{url:"assets/tools-BthMIGSE.js",revision:null},{url:"assets/typora-Ckt5RaJZ.js",revision:null},{url:"assets/uptime-DrDdNNNB.js",revision:null},{url:"assets/uptimeapi-BupYbSsA.js",revision:null},{url:"assets/ValaxyMain-B1UsnyKm.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang-CTHzgSoL.js",revision:null},{url:"assets/view-transition-nZH5RA25.css",revision:null},{url:"assets/virtual_pwa-register-B2BlvtFE.js",revision:null},{url:"assets/welcome-kvOAEizY.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"assets/YunAlgoliaSearch-CwJJwzhu.js",revision:null},{url:"assets/YunCard.vue_vue_type_script_setup_true_lang-B1jmuK44.js",revision:null},{url:"assets/YunFooter-DjwaLgRs.css",revision:null},{url:"assets/YunFooter.vue_vue_type_style_index_0_lang-BmilBCtj.js",revision:null},{url:"assets/YunGallery-bVdTKYFM.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang-CQ0EQ_C_.js",revision:null},{url:"assets/YunPostCollapse-DzZAROS7.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang-D_2iAjJC.js",revision:null},{url:"assets/YunPostList-CYDTlsp3.css",revision:null},{url:"assets/YunPostList.vue_vue_type_style_index_0_lang-IQi3MOoU.js",revision:null},{url:"assets/YunPostMeta-B4_wBHR1.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang-BvVWUEiS.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"c5313a283b191cda6b96fdae9ee1c371"},{url:"live2d-assets/live2d.min.js",revision:"97a06b32b6e6bee8db7aa128b99b7cc2"},{url:"live2d-assets/waifu-tips.js",revision:"6ff120ccc164e44397a62d9c422569ed"},{url:"live2d-assets/waifu.css",revision:"68aac09b836a1ca1c138b74f46835459"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"20e471102cdb5dd71038ff861dec552d"},{url:"screenshot-pc.jpg",revision:"a04a1b497a3ad69c60224caa37823dbd"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"manifest.webmanifest",revision:"a81d024f8c1ddb17be49fff1cf645e3a"}],{ignoreURLParametersMatching:[/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.(googleapis|gstatic).com\/.*\//,new s.CacheFirst({cacheName:"network-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
