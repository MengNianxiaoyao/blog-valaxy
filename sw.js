if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-bb62b90b"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-BItRpJ2q.js",revision:null},{url:"assets/_page_-BlbZMUBH.js",revision:null},{url:"assets/404-4plQewzu.js",revision:null},{url:"assets/404-BvDqQgv4.css",revision:null},{url:"assets/404-C9gkB6Aj.css",revision:null},{url:"assets/404-CiAknNGG.js",revision:null},{url:"assets/404-DBsBlBg6.js",revision:null},{url:"assets/albums-BmAPtciV.css",revision:null},{url:"assets/albums-CApK80Zv.js",revision:null},{url:"assets/animation-in-CQBZZygY.css",revision:null},{url:"assets/app-C-y13Dv4.js",revision:null},{url:"assets/app-U_hwP62e.css",revision:null},{url:"assets/archives-B-zn_b94.js",revision:null},{url:"assets/baiye2-B2BlPrif.js",revision:null},{url:"assets/baiye3-DIWzYpHT.js",revision:null},{url:"assets/baodao-D7WsNiRp.js",revision:null},{url:"assets/bg-img-kXdNMxcF.jpg",revision:null},{url:"assets/boke1-B_W1aTM7.js",revision:null},{url:"assets/boke2-BFB991Xu.js",revision:null},{url:"assets/boke3-R43sUnxg.js",revision:null},{url:"assets/boke4-DSETKLKp.js",revision:null},{url:"assets/byjg1-nls97nl-.js",revision:null},{url:"assets/categories-BSctN3Pe.css",revision:null},{url:"assets/categories-Dt0PUtDJ.js",revision:null},{url:"assets/config-Dv8oSTIj.js",revision:null},{url:"assets/domain-DuugGNuo.js",revision:null},{url:"assets/empty-DTW0p6Ar.js",revision:null},{url:"assets/gallery-uvtTyfaW.js",revision:null},{url:"assets/ghproxy-CBTs8a2j.js",revision:null},{url:"assets/home-B7MHW2lS.js",revision:null},{url:"assets/home-D_nyz5Hp.css",revision:null},{url:"assets/image-QpcP8f3C.js",revision:null},{url:"assets/index-2jA2aRER.css",revision:null},{url:"assets/index-BC_-Y1Hm.js",revision:null},{url:"assets/index-BdkMra-Y.js",revision:null},{url:"assets/index-BjsTSJRF.js",revision:null},{url:"assets/index-BupVKTtA.js",revision:null},{url:"assets/index-C7yU5XnD.js",revision:null},{url:"assets/index-CDtsDhRZ.css",revision:null},{url:"assets/index-CEjSvxV_.js",revision:null},{url:"assets/index-D5nQAuoB.js",revision:null},{url:"assets/index-DJ6_aPhc.js",revision:null},{url:"assets/index-r3kdSGrj.js",revision:null},{url:"assets/KaTeX_AMS-Regular-BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular-DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold-Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold-Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic-SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic-BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic-NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic-DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic-t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic-DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2",revision:null},{url:"assets/lyq-C2kIfQvR.js",revision:null},{url:"assets/meihua-cBFRvq_6.js",revision:null},{url:"assets/meihua1-BGWQk1JW.js",revision:null},{url:"assets/meihua10-BTKT72Qr.js",revision:null},{url:"assets/meihua11-Bp4z_7zc.js",revision:null},{url:"assets/meihua2-BWsm3npi.js",revision:null},{url:"assets/meihua3-YRNZ_ls6.js",revision:null},{url:"assets/meihua4-BdK2cxrr.js",revision:null},{url:"assets/meihua5-C10BmCpB.js",revision:null},{url:"assets/meihua6-BPVWsUEF.js",revision:null},{url:"assets/meihua7-Di7eFgj5.js",revision:null},{url:"assets/meihua8-le08yR0s.js",revision:null},{url:"assets/meihua9-BS1TXxEQ.js",revision:null},{url:"assets/none-DLM1AMsD.jpg",revision:null},{url:"assets/novelai-D8mNttCF.js",revision:null},{url:"assets/novelai1-BwXtbeq9.js",revision:null},{url:"assets/novelai2-v4ZJDii_.js",revision:null},{url:"assets/ohook-DCLSkMlA.js",revision:null},{url:"assets/post-DTW0p6Ar.js",revision:null},{url:"assets/post-gQpphGKg.css",revision:null},{url:"assets/post-HphI2ezH.js",revision:null},{url:"assets/reader-BRnKdbDX.js",revision:null},{url:"assets/route-block-B_A1xBdJ.js",revision:null},{url:"assets/sidebar-bg-img-mp54gEws.webp",revision:null},{url:"assets/site-jjJESUB6.js",revision:null},{url:"assets/source1-0TWXgUj6.js",revision:null},{url:"assets/source2-BUCxkMw5.js",revision:null},{url:"assets/tags-Dec-aNxf.js",revision:null},{url:"assets/typora-C18iY4FN.js",revision:null},{url:"assets/uptime-Bgxak0rP.js",revision:null},{url:"assets/ValaxyMain-DYxkaEMi.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang-x7-9Oyvz.js",revision:null},{url:"assets/view-transition-nZH5RA25.css",revision:null},{url:"assets/virtual_pwa-register-C_qdG9Cq.js",revision:null},{url:"assets/welcome-BiU_dvl1.js",revision:null},{url:"assets/workbox-window.prod.es5-DFjpnwFp.js",revision:null},{url:"assets/YunAlgoliaSearch-7vXLytq3.js",revision:null},{url:"assets/YunCard.vue_vue_type_script_setup_true_lang-CpEGKBLR.js",revision:null},{url:"assets/YunFooter-B0ViS4tU.css",revision:null},{url:"assets/YunFooter.vue_vue_type_style_index_0_lang-DcI_3rEs.js",revision:null},{url:"assets/YunGallery-9Vj2mG9P.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang-AS9CGHT3.js",revision:null},{url:"assets/YunPostCollapse-DzZAROS7.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang-Btg3yQa6.js",revision:null},{url:"assets/YunPostList-CYDTlsp3.css",revision:null},{url:"assets/YunPostList.vue_vue_type_style_index_0_lang-DIcBYJrD.js",revision:null},{url:"assets/YunPostMeta-B4_wBHR1.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang-DX5M4ja6.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"7c9058ba61f8a19ab2d0d73fd60624e5"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"9c88c2030cd4121f73fed3dbd01aed4f"},{url:"screenshot-pc.jpg",revision:"9979005563afa2511e6bb742c85fd685"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"manifest.webmanifest",revision:"a81d024f8c1ddb17be49fff1cf645e3a"}],{ignoreURLParametersMatching:[/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.googleapis.com\/.*\//,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.gstatic.com\/.*\//,new s.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
