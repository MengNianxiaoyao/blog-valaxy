if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-23dc0c55"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-DYQ7G0zF.js",revision:null},{url:"assets/_page_-C24nB81u.js",revision:null},{url:"assets/404-B5hjR785.js",revision:null},{url:"assets/404-C9gkB6Aj.css",revision:null},{url:"assets/404-D-ntHnDm.css",revision:null},{url:"assets/404-DS0dtXP0.js",revision:null},{url:"assets/404-vzo2_4Ug.js",revision:null},{url:"assets/albums-2c5SGqDF.js",revision:null},{url:"assets/albums-BmAPtciV.css",revision:null},{url:"assets/animation-in-CQBZZygY.css",revision:null},{url:"assets/app-B-h2PGjK.js",revision:null},{url:"assets/app-CFKFIiz4.css",revision:null},{url:"assets/archives-CBHx3fHb.js",revision:null},{url:"assets/back-Bv0_v4wT.js",revision:null},{url:"assets/baodao-D2Oka8qa.js",revision:null},{url:"assets/bg-img-kXdNMxcF.jpg",revision:null},{url:"assets/boke1-QkLeThR6.js",revision:null},{url:"assets/boke2-BqHeI0fB.js",revision:null},{url:"assets/boke3-DSlFDG-U.js",revision:null},{url:"assets/boke4-DjFbbLHX.js",revision:null},{url:"assets/byjg1-T9F1o2cj.js",revision:null},{url:"assets/byjg2-DAr0iC5b.js",revision:null},{url:"assets/byjg3-D-TOR4rl.js",revision:null},{url:"assets/categories-B9OUpKTB.js",revision:null},{url:"assets/categories-BSctN3Pe.css",revision:null},{url:"assets/cdn-CIJLcL4T.js",revision:null},{url:"assets/config-BilD-U0C.js",revision:null},{url:"assets/domain-CmR2UGaE.js",revision:null},{url:"assets/email-B-ELrhpy.js",revision:null},{url:"assets/empty-DmLHoMvj.js",revision:null},{url:"assets/faq-DOrK2JAU.js",revision:null},{url:"assets/gallery-DSzt247C.js",revision:null},{url:"assets/ghproxy-CiiHqiqI.js",revision:null},{url:"assets/helper-BbSva-o3.js",revision:null},{url:"assets/home-D_nyz5Hp.css",revision:null},{url:"assets/home-K0aZU-Sx.js",revision:null},{url:"assets/image-BejxTuR3.js",revision:null},{url:"assets/index-0L1DEGd1.js",revision:null},{url:"assets/index-9WgkALin.js",revision:null},{url:"assets/index-Bj38XWP1.js",revision:null},{url:"assets/index-Bl7xDt1W.js",revision:null},{url:"assets/index-C5okkQwF.js",revision:null},{url:"assets/index-CcZoJCoe.js",revision:null},{url:"assets/index-CDtsDhRZ.css",revision:null},{url:"assets/index-CUDSVLPp.js",revision:null},{url:"assets/index-CxPHa8Wr.js",revision:null},{url:"assets/index-D4ZUKiRE.js",revision:null},{url:"assets/index-QXirTYrr.js",revision:null},{url:"assets/index-x4izIy-1.css",revision:null},{url:"assets/KaTeX_AMS-Regular-BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular-DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold-Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold-Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic-SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic-BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic-NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic-DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic-t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic-DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2",revision:null},{url:"assets/lyq-bTTq8mRb.js",revision:null},{url:"assets/meihua-D1uqw5nJ.js",revision:null},{url:"assets/meihua1-CXOZSdmt.js",revision:null},{url:"assets/meihua10-C9zvdXD3.js",revision:null},{url:"assets/meihua11-CQAWoMcD.js",revision:null},{url:"assets/meihua2-CNyiyKyG.js",revision:null},{url:"assets/meihua3-ZleL__l2.js",revision:null},{url:"assets/meihua4-C1zQCrrt.js",revision:null},{url:"assets/meihua5-Dc517X1x.js",revision:null},{url:"assets/meihua6-85_C_aNj.js",revision:null},{url:"assets/meihua7-C_CgjX5v.js",revision:null},{url:"assets/meihua8-7pu1S3cb.js",revision:null},{url:"assets/meihua9-Dsm0PZla.js",revision:null},{url:"assets/none-DLM1AMsD.jpg",revision:null},{url:"assets/novelai-Dqzt5gT0.js",revision:null},{url:"assets/novelai1-Bbhm2cBz.js",revision:null},{url:"assets/novelai2-xXmYXne6.js",revision:null},{url:"assets/ohook-Cdtfq36C.js",revision:null},{url:"assets/post-Bo-UtoXX.js",revision:null},{url:"assets/post-CYabKuLx.js",revision:null},{url:"assets/post-DmLHoMvj.js",revision:null},{url:"assets/post-gQpphGKg.css",revision:null},{url:"assets/reader-C6mmVJZO.js",revision:null},{url:"assets/route-block-B_A1xBdJ.js",revision:null},{url:"assets/sidebar-bg-img-mp54gEws.webp",revision:null},{url:"assets/site-B7zGvKUa.js",revision:null},{url:"assets/source1-D0W3-S5z.js",revision:null},{url:"assets/source2-Bkkegpac.js",revision:null},{url:"assets/tags-BbV5gunH.js",revision:null},{url:"assets/tools-C4uKxt9L.js",revision:null},{url:"assets/typora-BPmLOYsE.js",revision:null},{url:"assets/uptime-DdaGhhcY.js",revision:null},{url:"assets/ValaxyMain-BhZu4vIT.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang-CIZXHcau.js",revision:null},{url:"assets/view-transition-nZH5RA25.css",revision:null},{url:"assets/virtual_pwa-register-BcMED5PL.js",revision:null},{url:"assets/welcome-BgbBGtOu.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"assets/YunAlgoliaSearch-BE8rQ22o.js",revision:null},{url:"assets/YunAlgoliaSearch-DKn186Cd.css",revision:null},{url:"assets/YunCard.vue_vue_type_script_setup_true_lang-8ZzRJAS3.js",revision:null},{url:"assets/YunFooter-B0ViS4tU.css",revision:null},{url:"assets/YunFooter.vue_vue_type_style_index_0_lang-CY8NJEE2.js",revision:null},{url:"assets/YunGallery-BWlhvWGh.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang-DussdA9d.js",revision:null},{url:"assets/YunPostCollapse-DzZAROS7.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang-DduMI4zu.js",revision:null},{url:"assets/YunPostList-CYDTlsp3.css",revision:null},{url:"assets/YunPostList.vue_vue_type_style_index_0_lang-CdF11Mgx.js",revision:null},{url:"assets/YunPostMeta-B4_wBHR1.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang-kjzlqSQL.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"6c3bb52a8a8d933a70d134130e585e2a"},{url:"live2d-assets/live2d.min.js",revision:"97a06b32b6e6bee8db7aa128b99b7cc2"},{url:"live2d-assets/waifu-tips.js",revision:"6ff120ccc164e44397a62d9c422569ed"},{url:"live2d-assets/waifu.css",revision:"68aac09b836a1ca1c138b74f46835459"},{url:"live2d/live2d.min.js",revision:"c1c28f553095fdddb4d2c13a11bd4cb9"},{url:"live2d/waifu-tips.js",revision:"0985b64676c5f148dfd56e6edcbee3d0"},{url:"live2d/waifu.css",revision:"d3614cd12a228b44c671c8bd7f7717f2"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"20e471102cdb5dd71038ff861dec552d"},{url:"screenshot-pc.jpg",revision:"a04a1b497a3ad69c60224caa37823dbd"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"manifest.webmanifest",revision:"a81d024f8c1ddb17be49fff1cf645e3a"}],{ignoreURLParametersMatching:[/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css|json)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css|json)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.googleapis.com\/.*\//,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.gstatic.com\/.*\//,new s.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
