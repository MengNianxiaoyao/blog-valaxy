if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>l(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(i.map((s=>o[s]||u(s)))).then((s=>(n(...s),a)))}}define(["./workbox-23dc0c55"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-DNmINABb.js",revision:null},{url:"assets/_page_-BPf3kdLQ.js",revision:null},{url:"assets/404-aJmLJr2s.css",revision:null},{url:"assets/404-C_MjcRu9.js",revision:null},{url:"assets/404-C9gkB6Aj.css",revision:null},{url:"assets/404-DfjIPQq1.js",revision:null},{url:"assets/404-DTetIut1.js",revision:null},{url:"assets/albums-BmAPtciV.css",revision:null},{url:"assets/albums-OwvvBcRT.js",revision:null},{url:"assets/animation-in-CQBZZygY.css",revision:null},{url:"assets/app-DaxW27z_.js",revision:null},{url:"assets/app-Dhe_CZP1.css",revision:null},{url:"assets/archives-F1TiqU7C.js",revision:null},{url:"assets/back-Dl0iDvKX.js",revision:null},{url:"assets/baiye2-DgFZ5FpJ.js",revision:null},{url:"assets/baiye3-BF1FytD3.js",revision:null},{url:"assets/baodao-BAwH3Vya.js",revision:null},{url:"assets/bg-img-kXdNMxcF.jpg",revision:null},{url:"assets/boke1-C5d4OGDl.js",revision:null},{url:"assets/boke2-CRoy1Shb.js",revision:null},{url:"assets/boke3-DbDa_ejk.js",revision:null},{url:"assets/boke4-B8cGjZ4r.js",revision:null},{url:"assets/byjg1-BCIc6cYw.js",revision:null},{url:"assets/categories--50_ZXTm.js",revision:null},{url:"assets/categories-BSctN3Pe.css",revision:null},{url:"assets/config-Ba8gI5Z-.js",revision:null},{url:"assets/domain-tF4EdYMf.js",revision:null},{url:"assets/empty-BQ63a9kh.js",revision:null},{url:"assets/gallery-rRfIZRzj.js",revision:null},{url:"assets/ghproxy-T8GtYe4I.js",revision:null},{url:"assets/helper-CtQ8QZAQ.js",revision:null},{url:"assets/home-BfmxbUKv.js",revision:null},{url:"assets/home-D_nyz5Hp.css",revision:null},{url:"assets/image-C07Qswzd.js",revision:null},{url:"assets/index-1yS5IMS-.js",revision:null},{url:"assets/index-BQSdaYCz.js",revision:null},{url:"assets/index-C5okkQwF.js",revision:null},{url:"assets/index-C7yU5XnD.js",revision:null},{url:"assets/index-CCNt6PKp.js",revision:null},{url:"assets/index-CDtsDhRZ.css",revision:null},{url:"assets/index-ChYe0AgZ.js",revision:null},{url:"assets/index-CwHov8nk.css",revision:null},{url:"assets/index-DlDQuVe3.js",revision:null},{url:"assets/index-DrdUX5YG.js",revision:null},{url:"assets/index-GF-9miea.js",revision:null},{url:"assets/index-ywXvVUS7.js",revision:null},{url:"assets/KaTeX_AMS-Regular-BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular-DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold-Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold-Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic-SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic-BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic-NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic-DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic-t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic-DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2",revision:null},{url:"assets/layout-BEiuJHCl.js",revision:null},{url:"assets/lyq-2IS_l-G0.js",revision:null},{url:"assets/meihua-gHoW0FAq.js",revision:null},{url:"assets/meihua1-KJEi_BaT.js",revision:null},{url:"assets/meihua10-DmJ0qGdg.js",revision:null},{url:"assets/meihua11-Cn7LXJEI.js",revision:null},{url:"assets/meihua2-DzmU7H0n.js",revision:null},{url:"assets/meihua3-Pyt2vSVp.js",revision:null},{url:"assets/meihua4-BPQ99TKN.js",revision:null},{url:"assets/meihua5-D-_G_Lrg.js",revision:null},{url:"assets/meihua6-Ce-fbj2H.js",revision:null},{url:"assets/meihua7-qury5rAa.js",revision:null},{url:"assets/meihua8-4gGOROiH.js",revision:null},{url:"assets/meihua9-B58rD3FK.js",revision:null},{url:"assets/none-DLM1AMsD.jpg",revision:null},{url:"assets/novelai-BncF53hb.js",revision:null},{url:"assets/novelai1-qGs3c2YO.js",revision:null},{url:"assets/novelai2-CUym5VMJ.js",revision:null},{url:"assets/ohook-DnPmfhQC.js",revision:null},{url:"assets/post-B-zXBnLN.js",revision:null},{url:"assets/post-BQ63a9kh.js",revision:null},{url:"assets/post-Df7ktRgv.js",revision:null},{url:"assets/post-gQpphGKg.css",revision:null},{url:"assets/reader-BsrF-Sob.js",revision:null},{url:"assets/route-block-B_A1xBdJ.js",revision:null},{url:"assets/sidebar-bg-img-mp54gEws.webp",revision:null},{url:"assets/site-BeORLHEA.js",revision:null},{url:"assets/source1-HJ5YSqQ6.js",revision:null},{url:"assets/source2-CDLHeAOB.js",revision:null},{url:"assets/tags-KJpZxP7A.js",revision:null},{url:"assets/typora-BDoSAgJD.js",revision:null},{url:"assets/uptime-DJauDPoM.js",revision:null},{url:"assets/ValaxyMain-BUIBtPNR.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang-DXUFiyLi.js",revision:null},{url:"assets/view-transition-nZH5RA25.css",revision:null},{url:"assets/virtual_pwa-register-DMZf83pU.js",revision:null},{url:"assets/welcome-B_znlcbh.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"assets/YunAlgoliaSearch-BhSWaRwL.js",revision:null},{url:"assets/YunCard.vue_vue_type_script_setup_true_lang-DgzjLH0J.js",revision:null},{url:"assets/YunFooter-B0ViS4tU.css",revision:null},{url:"assets/YunFooter.vue_vue_type_style_index_0_lang-D6C-f-WG.js",revision:null},{url:"assets/YunGallery-D9fKP1Xi.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang-CAukgrOe.js",revision:null},{url:"assets/YunPostCollapse-DzZAROS7.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang-BdLYHBT7.js",revision:null},{url:"assets/YunPostList-CYDTlsp3.css",revision:null},{url:"assets/YunPostList.vue_vue_type_style_index_0_lang-BUzeS6fq.js",revision:null},{url:"assets/YunPostMeta-B4_wBHR1.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang-CtFnab0c.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"3c199fc4b8d03507e3a606a0ade8e759"},{url:"live2d-assets/live2d.min.js",revision:"97a06b32b6e6bee8db7aa128b99b7cc2"},{url:"live2d-assets/waifu-tips.js",revision:"6ff120ccc164e44397a62d9c422569ed"},{url:"live2d-assets/waifu.css",revision:"68aac09b836a1ca1c138b74f46835459"},{url:"live2d/live2d.min.js",revision:"c1c28f553095fdddb4d2c13a11bd4cb9"},{url:"live2d/waifu-tips.js",revision:"0985b64676c5f148dfd56e6edcbee3d0"},{url:"live2d/waifu.css",revision:"d3614cd12a228b44c671c8bd7f7717f2"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"20e471102cdb5dd71038ff861dec552d"},{url:"screenshot-pc.jpg",revision:"a04a1b497a3ad69c60224caa37823dbd"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"manifest.webmanifest",revision:"a81d024f8c1ddb17be49fff1cf645e3a"}],{ignoreURLParametersMatching:[/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css|json)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css|json)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.googleapis.com\/.*\//,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.gstatic.com\/.*\//,new s.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
