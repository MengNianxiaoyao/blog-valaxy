if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const u=s=>l(s,n),t={module:{uri:n},exports:a,require:u};e[n]=Promise.all(i.map((s=>t[s]||u(s)))).then((s=>(r(...s),a)))}}define(["./workbox-23dc0c55"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-DsODSlLz.js",revision:null},{url:"assets/_page_-Cgi6qRza.js",revision:null},{url:"assets/404-B-BXbLpJ.js",revision:null},{url:"assets/404-Bw3VmTgs.js",revision:null},{url:"assets/404-C9gkB6Aj.css",revision:null},{url:"assets/404-DEe_w_z9.js",revision:null},{url:"assets/404-XWRNuNj1.css",revision:null},{url:"assets/albums-BmAPtciV.css",revision:null},{url:"assets/albums-HJElRrYc.js",revision:null},{url:"assets/animation-in-CQBZZygY.css",revision:null},{url:"assets/app-Lap-ovnA.css",revision:null},{url:"assets/app-Y4zQuyXa.js",revision:null},{url:"assets/archives-BC5L9IUI.js",revision:null},{url:"assets/back-CpzRmFuE.js",revision:null},{url:"assets/baodao-m1udwS-6.js",revision:null},{url:"assets/bg-img-kXdNMxcF.jpg",revision:null},{url:"assets/boke1-DzV9cbZo.js",revision:null},{url:"assets/boke2-C7-L0muC.js",revision:null},{url:"assets/boke3-DBKRTKEI.js",revision:null},{url:"assets/boke4-BvPthQL3.js",revision:null},{url:"assets/boke5-CNf_5ZA9.js",revision:null},{url:"assets/byjg1-DPCqpS38.js",revision:null},{url:"assets/byjg2-Cs_NPJIO.js",revision:null},{url:"assets/byjg3-Dix1-3b5.js",revision:null},{url:"assets/categories-BSctN3Pe.css",revision:null},{url:"assets/categories-k1pcjS7K.js",revision:null},{url:"assets/cdn-DwMqe7Es.js",revision:null},{url:"assets/config-D2m0dt05.js",revision:null},{url:"assets/domain-BtRZPvt9.js",revision:null},{url:"assets/email-B-mdjsVV.js",revision:null},{url:"assets/empty-B7GOCF2Z.js",revision:null},{url:"assets/faq-DoMj65oG.js",revision:null},{url:"assets/gallery-C5CkV15I.js",revision:null},{url:"assets/ghproxy-BOqwFznz.js",revision:null},{url:"assets/helper-C66iD7WX.js",revision:null},{url:"assets/home-Cv-onvlR.js",revision:null},{url:"assets/home-D_nyz5Hp.css",revision:null},{url:"assets/image-rTxo_EA0.js",revision:null},{url:"assets/index-B7wbFsIn.js",revision:null},{url:"assets/index-Bj38XWP1.js",revision:null},{url:"assets/index-Bsf-HbRs.js",revision:null},{url:"assets/index-C5okkQwF.js",revision:null},{url:"assets/index-C9mnFmrn.js",revision:null},{url:"assets/index-C9W88e3O.js",revision:null},{url:"assets/index-CDtsDhRZ.css",revision:null},{url:"assets/index-CPJUaiQT.js",revision:null},{url:"assets/index-D3pOsixE.css",revision:null},{url:"assets/index-D7_k6Qg8.js",revision:null},{url:"assets/index-DBBhsydL.js",revision:null},{url:"assets/index-dhJ6dqEC.js",revision:null},{url:"assets/index-qGkBhPTr.js",revision:null},{url:"assets/KaTeX_AMS-Regular-BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular-DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_AMS-Regular-DRggAlZN.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-ATXxdsX0.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-wX97UBjC.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BdnERNNW.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CB_wures.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold-Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold-Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-Bold-waoOVXN0.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DzxPMmG6.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic-3WenGoN9.ttf",revision:null},{url:"assets/KaTeX_Main-Italic-BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic-NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Main-Regular-ypZvNtVU.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-B3XSjfu4.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic-DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic-flOr_0UB.ttf",revision:null},{url:"assets/KaTeX_Math-Italic-t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-CFMepnvq.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic-DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-YYjJ1zSn.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-BNo7hRIc.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-C5JkGWo-.ttf",revision:null},{url:"assets/KaTeX_Script-Regular-D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-Dbsnue_I.ttf",revision:null},{url:"assets/KaTeX_Size1-Regular-mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-B7gKUWhC.ttf",revision:null},{url:"assets/KaTeX_Size2-Regular-Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-DgpXs0kz.ttf",revision:null},{url:"assets/KaTeX_Size4-Regular-BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Size4-Regular-DWFBv043.ttf",revision:null},{url:"assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular-D3Ib7_Hf.ttf",revision:null},{url:"assets/lyq-Bvtfm94c.js",revision:null},{url:"assets/meihua-xR7wsPlQ.js",revision:null},{url:"assets/meihua1-CFHlSpyC.js",revision:null},{url:"assets/meihua10-BAfec9Uk.js",revision:null},{url:"assets/meihua11-D5nOY1K5.js",revision:null},{url:"assets/meihua2-hR9cQI1O.js",revision:null},{url:"assets/meihua3-B6u55KKq.js",revision:null},{url:"assets/meihua4-D7iPENyd.js",revision:null},{url:"assets/meihua5-Dzag8Cpv.js",revision:null},{url:"assets/meihua6-JFaef5zY.js",revision:null},{url:"assets/meihua7-CZtMMPWk.js",revision:null},{url:"assets/meihua8-Dw3rv_jO.js",revision:null},{url:"assets/meihua9-DCEm24C9.js",revision:null},{url:"assets/none-DLM1AMsD.jpg",revision:null},{url:"assets/novelai-E2_abH2L.js",revision:null},{url:"assets/novelai1-DKyP9ooX.js",revision:null},{url:"assets/novelai2-B4hqPEfs.js",revision:null},{url:"assets/ohook-B6VtT572.js",revision:null},{url:"assets/post-B7GOCF2Z.js",revision:null},{url:"assets/post-BxEjluyc.js",revision:null},{url:"assets/post-FpLbNBiB.js",revision:null},{url:"assets/post-gQpphGKg.css",revision:null},{url:"assets/reader-BoA135UX.js",revision:null},{url:"assets/route-block-B_A1xBdJ.js",revision:null},{url:"assets/sidebar-bg-img-mp54gEws.webp",revision:null},{url:"assets/site-DS1eraff.js",revision:null},{url:"assets/source1-CE0lp1y3.js",revision:null},{url:"assets/source2-Dtm0RvH1.js",revision:null},{url:"assets/tags-PIngTzbO.js",revision:null},{url:"assets/tools-CToPyEmz.js",revision:null},{url:"assets/typora-BenCJolQ.js",revision:null},{url:"assets/uptime-C7Ek530C.js",revision:null},{url:"assets/uptimeapi-CWDgAOLC.js",revision:null},{url:"assets/ValaxyMain--ok-faaZ.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang-ChaQrRtm.js",revision:null},{url:"assets/view-transition-nZH5RA25.css",revision:null},{url:"assets/virtual_pwa-register-Cl-Uk7xg.js",revision:null},{url:"assets/welcome-BFYXzuFc.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"assets/YunAlgoliaSearch-BPgkiWKf.js",revision:null},{url:"assets/YunCard.vue_vue_type_script_setup_true_lang-D-ucwLQG.js",revision:null},{url:"assets/YunFooter-B0ViS4tU.css",revision:null},{url:"assets/YunFooter.vue_vue_type_style_index_0_lang-DSL6Dq8v.js",revision:null},{url:"assets/YunGallery-BugxW6lF.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang-2ye67Nyd.js",revision:null},{url:"assets/YunPostCollapse-DzZAROS7.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang-9fErzw1T.js",revision:null},{url:"assets/YunPostList-CYDTlsp3.css",revision:null},{url:"assets/YunPostList.vue_vue_type_style_index_0_lang-DJ9w0Wez.js",revision:null},{url:"assets/YunPostMeta-B4_wBHR1.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang-DNqzVR1W.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"76edb2e515b6a7fd990c9f81d277f3b5"},{url:"live2d-assets/live2d.min.js",revision:"97a06b32b6e6bee8db7aa128b99b7cc2"},{url:"live2d-assets/waifu-tips.js",revision:"6ff120ccc164e44397a62d9c422569ed"},{url:"live2d-assets/waifu.css",revision:"68aac09b836a1ca1c138b74f46835459"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"20e471102cdb5dd71038ff861dec552d"},{url:"screenshot-pc.jpg",revision:"a04a1b497a3ad69c60224caa37823dbd"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"manifest.webmanifest",revision:"a81d024f8c1ddb17be49fff1cf645e3a"}],{ignoreURLParametersMatching:[/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css|json)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css|json)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.googleapis.com\/.*\//,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.gstatic.com\/.*\//,new s.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
