if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const u=s=>l(s,n),t={module:{uri:n},exports:a,require:u};e[n]=Promise.all(i.map((s=>t[s]||u(s)))).then((s=>(r(...s),a)))}}define(["./workbox-23dc0c55"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-CoPs3e_S.js",revision:null},{url:"assets/_page_-BoRVYl8f.js",revision:null},{url:"assets/404-C9gkB6Aj.css",revision:null},{url:"assets/404-Cg0tAOds.js",revision:null},{url:"assets/404-CtHHHgDp.js",revision:null},{url:"assets/404-dUJbCH7t.css",revision:null},{url:"assets/404-DXwjptZ7.js",revision:null},{url:"assets/albums-BmAPtciV.css",revision:null},{url:"assets/albums-uaUq68XJ.js",revision:null},{url:"assets/animation-in-CQBZZygY.css",revision:null},{url:"assets/app-CVP0USO_.js",revision:null},{url:"assets/app-iJTLFCmh.css",revision:null},{url:"assets/archives-CKWC0neB.js",revision:null},{url:"assets/back-BXvCXU1Z.js",revision:null},{url:"assets/baodao-D3BB0w7x.js",revision:null},{url:"assets/bg-img-kXdNMxcF.jpg",revision:null},{url:"assets/bilibili-bangumi.entry-CWSICHJ8.js",revision:null},{url:"assets/boke1-B8II2TLn.js",revision:null},{url:"assets/boke2-BMXPTLZm.js",revision:null},{url:"assets/boke3-BO3upy-R.js",revision:null},{url:"assets/boke4-BzV8hn4Z.js",revision:null},{url:"assets/boke5-Cb2at1mQ.js",revision:null},{url:"assets/byjg1-DE4_lSpZ.js",revision:null},{url:"assets/byjg2-q9b48vlm.js",revision:null},{url:"assets/byjg3-BLCSfAWI.js",revision:null},{url:"assets/categories-BSctN3Pe.css",revision:null},{url:"assets/categories-DEzNdP9e.js",revision:null},{url:"assets/cdn-CXEZ-vW1.js",revision:null},{url:"assets/collection-BZFE00Gl.js",revision:null},{url:"assets/collections-DgyJe6mK.js",revision:null},{url:"assets/composable-Cw77Vh0t.js",revision:null},{url:"assets/config-DWXHVURN.js",revision:null},{url:"assets/domain-Cw0qfNi6.js",revision:null},{url:"assets/email-CHuCTZc_.js",revision:null},{url:"assets/empty-Di2BNS5T.js",revision:null},{url:"assets/faq-Cq_8Ohhs.js",revision:null},{url:"assets/gallery-CCynE_-8.js",revision:null},{url:"assets/ghproxy-DVHVxlVA.js",revision:null},{url:"assets/helper-Cm1jhgXb.js",revision:null},{url:"assets/home-_jS-TIFr.js",revision:null},{url:"assets/home-D_nyz5Hp.css",revision:null},{url:"assets/image-B1KkIN00.js",revision:null},{url:"assets/index-BPr4WvK2.js",revision:null},{url:"assets/index-Bs7Wv-m7.js",revision:null},{url:"assets/index-Btp_OETp.css",revision:null},{url:"assets/index-BYSu7K75.js",revision:null},{url:"assets/index-C-xnePuG.js",revision:null},{url:"assets/index-C5okkQwF.js",revision:null},{url:"assets/index-C7w_HmS9.js",revision:null},{url:"assets/index-C9taYZ_x.js",revision:null},{url:"assets/index-CC2tRQp9.js",revision:null},{url:"assets/index-CDtsDhRZ.css",revision:null},{url:"assets/index-CZU_2sss.js",revision:null},{url:"assets/index-DLWHpwQ_.js",revision:null},{url:"assets/index-MXmGLClR.js",revision:null},{url:"assets/index-XGOo9AAh.js",revision:null},{url:"assets/KaTeX_AMS-Regular-BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular-DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_AMS-Regular-DRggAlZN.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-ATXxdsX0.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-wX97UBjC.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BdnERNNW.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CB_wures.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold-Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold-Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-Bold-waoOVXN0.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DzxPMmG6.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic-3WenGoN9.ttf",revision:null},{url:"assets/KaTeX_Main-Italic-BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic-NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Main-Regular-ypZvNtVU.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-B3XSjfu4.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic-DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic-flOr_0UB.ttf",revision:null},{url:"assets/KaTeX_Math-Italic-t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-CFMepnvq.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic-DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-YYjJ1zSn.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-BNo7hRIc.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-C5JkGWo-.ttf",revision:null},{url:"assets/KaTeX_Script-Regular-D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-Dbsnue_I.ttf",revision:null},{url:"assets/KaTeX_Size1-Regular-mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-B7gKUWhC.ttf",revision:null},{url:"assets/KaTeX_Size2-Regular-Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-DgpXs0kz.ttf",revision:null},{url:"assets/KaTeX_Size4-Regular-BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Size4-Regular-DWFBv043.ttf",revision:null},{url:"assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular-D3Ib7_Hf.ttf",revision:null},{url:"assets/lyq-CMbwBNbO.js",revision:null},{url:"assets/meihua-Bv_Fr3q6.js",revision:null},{url:"assets/meihua1-DvV3mhDQ.js",revision:null},{url:"assets/meihua10-BJidLkfI.js",revision:null},{url:"assets/meihua11-Borcx_yv.js",revision:null},{url:"assets/meihua2-CBwKvZGP.js",revision:null},{url:"assets/meihua3-P4wQtnMk.js",revision:null},{url:"assets/meihua4-CYjnLJ1x.js",revision:null},{url:"assets/meihua5-BoAN99QM.js",revision:null},{url:"assets/meihua6-DoQQDmss.js",revision:null},{url:"assets/meihua7-D5F6XVeb.js",revision:null},{url:"assets/meihua8-D4YmZart.js",revision:null},{url:"assets/meihua9-DIhZj2bA.js",revision:null},{url:"assets/none-DLM1AMsD.jpg",revision:null},{url:"assets/novelai-BRUd8f7L.js",revision:null},{url:"assets/novelai1-BosMRkPF.js",revision:null},{url:"assets/novelai2-CsYXwfJr.js",revision:null},{url:"assets/ohook-DMywAnb-.js",revision:null},{url:"assets/post-0HGdgEVx.js",revision:null},{url:"assets/post-Di2BNS5T.js",revision:null},{url:"assets/post-DnQeiELu.js",revision:null},{url:"assets/post-gQpphGKg.css",revision:null},{url:"assets/reader-tpGovXHI.js",revision:null},{url:"assets/route-block-B_A1xBdJ.js",revision:null},{url:"assets/sidebar-bg-img-mp54gEws.webp",revision:null},{url:"assets/site-mHVndE4V.js",revision:null},{url:"assets/source1-CLkW7g36.js",revision:null},{url:"assets/source2-jNezPeMS.js",revision:null},{url:"assets/tags-B0IIKww6.js",revision:null},{url:"assets/tools-BDJVSttE.js",revision:null},{url:"assets/typora-C_w9cScz.js",revision:null},{url:"assets/uptime-BUPJ-eyi.js",revision:null},{url:"assets/uptimeapi-CpWvmS-o.js",revision:null},{url:"assets/ValaxyMain-B1UsnyKm.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang-D9pC-LBR.js",revision:null},{url:"assets/view-transition-nZH5RA25.css",revision:null},{url:"assets/virtual_pwa-register-DyS00e7U.js",revision:null},{url:"assets/welcome-wPHrhgAX.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"assets/YunAlgoliaSearch-B0WIfBiv.js",revision:null},{url:"assets/YunCard.vue_vue_type_script_setup_true_lang-INIBZDih.js",revision:null},{url:"assets/YunFooter-DjwaLgRs.css",revision:null},{url:"assets/YunFooter.vue_vue_type_style_index_0_lang-Bu0_2gEl.js",revision:null},{url:"assets/YunGallery-DN0D_OAt.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang-CNaokNQo.js",revision:null},{url:"assets/YunPostCollapse-DzZAROS7.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang-kCyRJuz9.js",revision:null},{url:"assets/YunPostList-CYDTlsp3.css",revision:null},{url:"assets/YunPostList.vue_vue_type_style_index_0_lang-DR3PioEI.js",revision:null},{url:"assets/YunPostMeta-B4_wBHR1.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang-CrUfYcRH.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"b5a5862f98722e961a22cd3eeeef9fa1"},{url:"live2d-assets/live2d.min.js",revision:"97a06b32b6e6bee8db7aa128b99b7cc2"},{url:"live2d-assets/waifu-tips.js",revision:"6ff120ccc164e44397a62d9c422569ed"},{url:"live2d-assets/waifu.css",revision:"68aac09b836a1ca1c138b74f46835459"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"20e471102cdb5dd71038ff861dec552d"},{url:"screenshot-pc.jpg",revision:"a04a1b497a3ad69c60224caa37823dbd"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"manifest.webmanifest",revision:"a81d024f8c1ddb17be49fff1cf645e3a"}],{ignoreURLParametersMatching:[/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.(googleapis|gstatic).com\/.*\//,new s.CacheFirst({cacheName:"network-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
