if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-23dc0c55"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-BvYxa8bH.js",revision:null},{url:"assets/_page_-FfbfY4D8.js",revision:null},{url:"assets/404-B8Y-8Yj8.css",revision:null},{url:"assets/404-BCufwyhR.js",revision:null},{url:"assets/404-BVla_BTh.css",revision:null},{url:"assets/404-ClSiZR99.js",revision:null},{url:"assets/404-DS6Xxp8N.js",revision:null},{url:"assets/albums-B673jvUl.css",revision:null},{url:"assets/albums-ngj4N4Z1.js",revision:null},{url:"assets/animation-B38xETN3.js",revision:null},{url:"assets/animation-CoRyNYsX.js",revision:null},{url:"assets/animation-in-BI4ri2UH.css",revision:null},{url:"assets/app-0C-455m5.css",revision:null},{url:"assets/app-BFp5F8kb.js",revision:null},{url:"assets/archives-DOC4QDVA.js",revision:null},{url:"assets/back-Yk8a0nDT.js",revision:null},{url:"assets/baodao-BqlJgc7T.js",revision:null},{url:"assets/bg-img-kXdNMxcF.jpg",revision:null},{url:"assets/bilibili-bangumi.entry-DdCmpHiS.js",revision:null},{url:"assets/boke1-_PtYIR2n.js",revision:null},{url:"assets/boke2-CIYvJuWq.js",revision:null},{url:"assets/boke3-6DkcH9zr.js",revision:null},{url:"assets/boke4-DBr6xdoQ.js",revision:null},{url:"assets/boke5-DraZdPDw.js",revision:null},{url:"assets/byjg1-CyZ_Hep5.js",revision:null},{url:"assets/byjg2-C9O3zwi4.js",revision:null},{url:"assets/byjg3-Fq3i3WD5.js",revision:null},{url:"assets/categories-DW-Ng5vB.js",revision:null},{url:"assets/cdn-Bk3lTk9E.js",revision:null},{url:"assets/collection-7Z1sWg1o.js",revision:null},{url:"assets/collections-BO91z2zo.js",revision:null},{url:"assets/config-RC0h8uBK.js",revision:null},{url:"assets/domain-D8np04Qg.js",revision:null},{url:"assets/email-DtHn8MNI.js",revision:null},{url:"assets/empty-BJT_k1wI.js",revision:null},{url:"assets/empty-D-wzZxIm.js",revision:null},{url:"assets/faq-QonYzFfr.js",revision:null},{url:"assets/gallery-BrGPdM0f.js",revision:null},{url:"assets/ghproxy-C9NlJRHc.js",revision:null},{url:"assets/home-D6BQNTP3.js",revision:null},{url:"assets/home-mX3XADL0.css",revision:null},{url:"assets/image-dqPoN3dJ.js",revision:null},{url:"assets/index-5ey-7W1F.js",revision:null},{url:"assets/index-B2kCJOjY.js",revision:null},{url:"assets/index-bvUZgdoi.js",revision:null},{url:"assets/index-Bz5aDf-_.js",revision:null},{url:"assets/index-C5okkQwF.js",revision:null},{url:"assets/index-Cch_mg4D.css",revision:null},{url:"assets/index-CnGCTlYZ.js",revision:null},{url:"assets/index-CsZHmlP9.js",revision:null},{url:"assets/index-DfXt1eUW.css",revision:null},{url:"assets/index-DL2nFolt.js",revision:null},{url:"assets/index-Dly3o23f.js",revision:null},{url:"assets/index-DM6VBD24.js",revision:null},{url:"assets/index-DRcjeP5u.js",revision:null},{url:"assets/index-DRec4Xnu.js",revision:null},{url:"assets/index-DxRvFO3F.js",revision:null},{url:"assets/index-x8TNrC4q.js",revision:null},{url:"assets/KaTeX_AMS-Regular-BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular-DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_AMS-Regular-DRggAlZN.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-ATXxdsX0.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-wX97UBjC.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BdnERNNW.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CB_wures.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold-Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold-Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-Bold-waoOVXN0.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DzxPMmG6.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic-3WenGoN9.ttf",revision:null},{url:"assets/KaTeX_Main-Italic-BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic-NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Main-Regular-ypZvNtVU.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-B3XSjfu4.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic-DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic-flOr_0UB.ttf",revision:null},{url:"assets/KaTeX_Math-Italic-t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-CFMepnvq.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic-DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-YYjJ1zSn.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-BNo7hRIc.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-C5JkGWo-.ttf",revision:null},{url:"assets/KaTeX_Script-Regular-D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-Dbsnue_I.ttf",revision:null},{url:"assets/KaTeX_Size1-Regular-mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-B7gKUWhC.ttf",revision:null},{url:"assets/KaTeX_Size2-Regular-Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-DgpXs0kz.ttf",revision:null},{url:"assets/KaTeX_Size4-Regular-BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Size4-Regular-DWFBv043.ttf",revision:null},{url:"assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular-D3Ib7_Hf.ttf",revision:null},{url:"assets/lyq-COb-UAc0.js",revision:null},{url:"assets/meihua-nIuEY60y.js",revision:null},{url:"assets/meihua1-72lk46aD.js",revision:null},{url:"assets/meihua10-DtyWGm9X.js",revision:null},{url:"assets/meihua11-f4JhbDdF.js",revision:null},{url:"assets/meihua2-XkJL_QJ7.js",revision:null},{url:"assets/meihua3-RWnN23IS.js",revision:null},{url:"assets/meihua4-BC1MB7Cq.js",revision:null},{url:"assets/meihua5-D1oU43FS.js",revision:null},{url:"assets/meihua6-CGbUzuNk.js",revision:null},{url:"assets/meihua7-ByuZ4pvp.js",revision:null},{url:"assets/meihua8-DAWzjjLD.js",revision:null},{url:"assets/meihua9-DeTG81AQ.js",revision:null},{url:"assets/none-DLM1AMsD.jpg",revision:null},{url:"assets/novelai-QbHmPoJd.js",revision:null},{url:"assets/novelai1-DfeFMBAQ.js",revision:null},{url:"assets/novelai2-CAg5o1n0.js",revision:null},{url:"assets/ohook-DQdEGfLw.js",revision:null},{url:"assets/post-BJT_k1wI.js",revision:null},{url:"assets/post-cQ4faOyF.js",revision:null},{url:"assets/post-DDxwAI70.css",revision:null},{url:"assets/post-DVaNpcE6.js",revision:null},{url:"assets/posts--OJYtmp6.js",revision:null},{url:"assets/projects-B2cDxj8E.js",revision:null},{url:"assets/projects-Dti-qd8N.css",revision:null},{url:"assets/reader-fsqVLK7a.js",revision:null},{url:"assets/route-block-B_A1xBdJ.js",revision:null},{url:"assets/sidebar-bg-img-mp54gEws.webp",revision:null},{url:"assets/site-Db_q4UGd.js",revision:null},{url:"assets/source1-D3TXRsMW.js",revision:null},{url:"assets/source2-Bp6f7FZv.js",revision:null},{url:"assets/tags-cJiDqc2I.js",revision:null},{url:"assets/tools-DKDR_Hft.js",revision:null},{url:"assets/typora-BJV-_ycD.js",revision:null},{url:"assets/uptime-CgzaNgqu.js",revision:null},{url:"assets/uptimeapi-K5aoVqTy.js",revision:null},{url:"assets/ValaxyMain-BHXg_53O.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang-D6JIN6wM.js",revision:null},{url:"assets/view-transition-IkvUpX_n.css",revision:null},{url:"assets/virtual_pwa-register-DQ-_QXl2.js",revision:null},{url:"assets/welcome-DCR7VW70.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"assets/YunAlgoliaSearch-DAx8UvBk.js",revision:null},{url:"assets/YunComment-BuHtzWKA.css",revision:null},{url:"assets/YunComment.vue_vue_type_style_index_0_lang-B4hCwn8k.js",revision:null},{url:"assets/YunGallery-DXTJRNCI.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang-CaNJRvJg.js",revision:null},{url:"assets/YunPostCollapse-CLDXGmA8.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang-lK6vmqtr.js",revision:null},{url:"assets/YunPostList-BfWGcc9d.css",revision:null},{url:"assets/YunPostList.vue_vue_type_script_setup_true_lang-DWjd68jE.js",revision:null},{url:"assets/YunPostMeta-DCrVMfuT.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang-B7XEHmb6.js",revision:null},{url:"assets/YunSponsor-BJOC5yvc.css",revision:null},{url:"assets/YunSponsor.vue_vue_type_style_index_0_lang-O8AgfzSi.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"94206d55ab61d6a2a974372ee9fe4d43"},{url:"live2d-assets/live2d.min.js",revision:"97a06b32b6e6bee8db7aa128b99b7cc2"},{url:"live2d-assets/waifu-tips.js",revision:"6ff120ccc164e44397a62d9c422569ed"},{url:"live2d-assets/waifu.css",revision:"68aac09b836a1ca1c138b74f46835459"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"20e471102cdb5dd71038ff861dec552d"},{url:"screenshot-pc.jpg",revision:"a04a1b497a3ad69c60224caa37823dbd"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"manifest.webmanifest",revision:"a81d024f8c1ddb17be49fff1cf645e3a"}],{ignoreURLParametersMatching:[/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.(googleapis|gstatic).com\/.*\//,new s.CacheFirst({cacheName:"network-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
