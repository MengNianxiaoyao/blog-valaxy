if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>l(s,r),t={module:{uri:r},exports:a,require:u};e[r]=Promise.all(i.map((s=>t[s]||u(s)))).then((s=>(n(...s),a)))}}define(["./workbox-23dc0c55"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-j9VVWNet.js",revision:null},{url:"assets/_page_-Dsnq1EHR.js",revision:null},{url:"assets/404-2OScUsDk.css",revision:null},{url:"assets/404-C9gkB6Aj.css",revision:null},{url:"assets/404-DionfUB1.js",revision:null},{url:"assets/404-DizwD-0L.js",revision:null},{url:"assets/404-DPn5cUbl.js",revision:null},{url:"assets/albums-BKVtRDbj.js",revision:null},{url:"assets/albums-BmAPtciV.css",revision:null},{url:"assets/animation-in-CQBZZygY.css",revision:null},{url:"assets/app-C9_g3E5Q.js",revision:null},{url:"assets/app-CxZ3ISmt.css",revision:null},{url:"assets/archives-44VJt_d_.js",revision:null},{url:"assets/back-CijIKW-r.js",revision:null},{url:"assets/baodao-BHnxE2N1.js",revision:null},{url:"assets/bg-img-kXdNMxcF.jpg",revision:null},{url:"assets/bilibili-bangumi.entry-C2JNGqkN.js",revision:null},{url:"assets/boke1-CLdT5Vq8.js",revision:null},{url:"assets/boke2-B37F-1iu.js",revision:null},{url:"assets/boke3-CYa_x6rI.js",revision:null},{url:"assets/boke4-m4K9VNKR.js",revision:null},{url:"assets/boke5-BtN3j4nQ.js",revision:null},{url:"assets/byjg1-CNekomm7.js",revision:null},{url:"assets/byjg2-85jXfCfa.js",revision:null},{url:"assets/byjg3-CVbaTp3z.js",revision:null},{url:"assets/categories-BSctN3Pe.css",revision:null},{url:"assets/categories-CPJ8dxAt.js",revision:null},{url:"assets/cdn-B9V9hVqi.js",revision:null},{url:"assets/collection-D3M2aM28.js",revision:null},{url:"assets/collections-nOIMcjJY.js",revision:null},{url:"assets/composable-P-9ZgtF2.js",revision:null},{url:"assets/config-CK76GhHi.js",revision:null},{url:"assets/domain-CyV41mzj.js",revision:null},{url:"assets/email-BzlALonP.js",revision:null},{url:"assets/empty-Do-lGT-I.js",revision:null},{url:"assets/faq-D5IAt-59.js",revision:null},{url:"assets/gallery-B5khgCFw.js",revision:null},{url:"assets/ghproxy-Ddi3ryrr.js",revision:null},{url:"assets/helper-griPInbn.js",revision:null},{url:"assets/home-Co60AjE0.js",revision:null},{url:"assets/home-D_nyz5Hp.css",revision:null},{url:"assets/image-Cnthu4WH.js",revision:null},{url:"assets/index-5devqXQM.css",revision:null},{url:"assets/index-852Cm4Nn.js",revision:null},{url:"assets/index-Bk-un7C5.js",revision:null},{url:"assets/index-Bo-dgzlN.js",revision:null},{url:"assets/index-C5okkQwF.js",revision:null},{url:"assets/index-C6OMowJd.js",revision:null},{url:"assets/index-CDtsDhRZ.css",revision:null},{url:"assets/index-CnpXSd5M.js",revision:null},{url:"assets/index-CqjoZqsJ.js",revision:null},{url:"assets/index-Ddmmq8uY.js",revision:null},{url:"assets/index-DgWI1fWt.js",revision:null},{url:"assets/index-DHlpCai_.js",revision:null},{url:"assets/index-frLnK6Cw.js",revision:null},{url:"assets/index-oTqQPs--.js",revision:null},{url:"assets/KaTeX_AMS-Regular-BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular-DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_AMS-Regular-DRggAlZN.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-ATXxdsX0.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-wX97UBjC.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BdnERNNW.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CB_wures.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold-Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold-Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-Bold-waoOVXN0.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DzxPMmG6.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic-3WenGoN9.ttf",revision:null},{url:"assets/KaTeX_Main-Italic-BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic-NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Main-Regular-ypZvNtVU.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-B3XSjfu4.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic-DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic-flOr_0UB.ttf",revision:null},{url:"assets/KaTeX_Math-Italic-t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-CFMepnvq.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic-DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-YYjJ1zSn.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-BNo7hRIc.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-C5JkGWo-.ttf",revision:null},{url:"assets/KaTeX_Script-Regular-D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-Dbsnue_I.ttf",revision:null},{url:"assets/KaTeX_Size1-Regular-mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-B7gKUWhC.ttf",revision:null},{url:"assets/KaTeX_Size2-Regular-Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-DgpXs0kz.ttf",revision:null},{url:"assets/KaTeX_Size4-Regular-BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Size4-Regular-DWFBv043.ttf",revision:null},{url:"assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular-D3Ib7_Hf.ttf",revision:null},{url:"assets/lyq-DdySjuZ3.js",revision:null},{url:"assets/meihua-DOLnstGk.js",revision:null},{url:"assets/meihua1-kcOfyEHW.js",revision:null},{url:"assets/meihua10-DIlMJO9K.js",revision:null},{url:"assets/meihua11-CzYzCkoC.js",revision:null},{url:"assets/meihua2-DSHDl6tP.js",revision:null},{url:"assets/meihua3-D_7T5YDV.js",revision:null},{url:"assets/meihua4-B_rw9gqd.js",revision:null},{url:"assets/meihua5-BU6kG_g5.js",revision:null},{url:"assets/meihua6-BX225DF-.js",revision:null},{url:"assets/meihua7-D55ZxfM9.js",revision:null},{url:"assets/meihua8-jQnlnbEv.js",revision:null},{url:"assets/meihua9-DY42xiez.js",revision:null},{url:"assets/none-DLM1AMsD.jpg",revision:null},{url:"assets/novelai-BbtXehNA.js",revision:null},{url:"assets/novelai1-B2xrdb3V.js",revision:null},{url:"assets/novelai2-Dc1D7DTK.js",revision:null},{url:"assets/ohook-Dngi0MIQ.js",revision:null},{url:"assets/post-B_RYVAID.js",revision:null},{url:"assets/post-BXLKBN0y.js",revision:null},{url:"assets/post-Do-lGT-I.js",revision:null},{url:"assets/post-gQpphGKg.css",revision:null},{url:"assets/reader-BLhGpWwv.js",revision:null},{url:"assets/route-block-B_A1xBdJ.js",revision:null},{url:"assets/sidebar-bg-img-mp54gEws.webp",revision:null},{url:"assets/site-CBXClqbR.js",revision:null},{url:"assets/source1-DbgNeePr.js",revision:null},{url:"assets/source2-FSlJfcQH.js",revision:null},{url:"assets/tags-xHq5Wohe.js",revision:null},{url:"assets/tools-DJGKXc61.js",revision:null},{url:"assets/typora-BqyUrywf.js",revision:null},{url:"assets/uptime-CdwQrnjE.js",revision:null},{url:"assets/uptimeapi-D34jFeCh.js",revision:null},{url:"assets/ValaxyMain-CYNeAOiX.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang-D6M3VcS7.js",revision:null},{url:"assets/view-transition-nZH5RA25.css",revision:null},{url:"assets/virtual_pwa-register-DMZR0dU2.js",revision:null},{url:"assets/welcome-tVuDjBCS.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"assets/YunAlgoliaSearch-wOt0ERFP.js",revision:null},{url:"assets/YunCard.vue_vue_type_script_setup_true_lang-CaIGv6AO.js",revision:null},{url:"assets/YunFooter-DjwaLgRs.css",revision:null},{url:"assets/YunFooter.vue_vue_type_style_index_0_lang-uMCAob6s.js",revision:null},{url:"assets/YunGallery-np4LaeIX.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang-DDvdKmy_.js",revision:null},{url:"assets/YunPostCollapse-DzZAROS7.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang-DWz7zPvr.js",revision:null},{url:"assets/YunPostList-CYDTlsp3.css",revision:null},{url:"assets/YunPostList.vue_vue_type_style_index_0_lang-CrZKXw2P.js",revision:null},{url:"assets/YunPostMeta-B4_wBHR1.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang-BiiP_EpA.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"9b9c14838df68c8afd42ce03e762edbf"},{url:"live2d-assets/live2d.min.js",revision:"97a06b32b6e6bee8db7aa128b99b7cc2"},{url:"live2d-assets/waifu-tips.js",revision:"6ff120ccc164e44397a62d9c422569ed"},{url:"live2d-assets/waifu.css",revision:"68aac09b836a1ca1c138b74f46835459"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"20e471102cdb5dd71038ff861dec552d"},{url:"screenshot-pc.jpg",revision:"a04a1b497a3ad69c60224caa37823dbd"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"manifest.webmanifest",revision:"a81d024f8c1ddb17be49fff1cf645e3a"}],{ignoreURLParametersMatching:[/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.(googleapis|gstatic).com\/.*\//,new s.CacheFirst({cacheName:"network-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
