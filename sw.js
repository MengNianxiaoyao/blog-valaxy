if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const u=s=>l(s,n),t={module:{uri:n},exports:a,require:u};e[n]=Promise.all(i.map((s=>t[s]||u(s)))).then((s=>(r(...s),a)))}}define(["./workbox-23dc0c55"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-02-NbTO3.js",revision:null},{url:"assets/_page_-BvQa2sgY.js",revision:null},{url:"assets/404-BMg5lmUL.css",revision:null},{url:"assets/404-Bstvwesc.js",revision:null},{url:"assets/404-C9gkB6Aj.css",revision:null},{url:"assets/404-D0k9sC7Y.js",revision:null},{url:"assets/404-xRH-XhnB.js",revision:null},{url:"assets/albums-BmAPtciV.css",revision:null},{url:"assets/albums-CL2jtOK_.js",revision:null},{url:"assets/animation-in-CQBZZygY.css",revision:null},{url:"assets/app-DtlWsUYY.css",revision:null},{url:"assets/app-mFPbncDG.js",revision:null},{url:"assets/archives-CGiHkW6w.js",revision:null},{url:"assets/back-CFZVr23k.js",revision:null},{url:"assets/baodao-BQStGL5W.js",revision:null},{url:"assets/bg-img-kXdNMxcF.jpg",revision:null},{url:"assets/boke1-USPlZ7RW.js",revision:null},{url:"assets/boke2-BS0yzekh.js",revision:null},{url:"assets/boke3-DcrJNwW9.js",revision:null},{url:"assets/boke4-DxugVsn-.js",revision:null},{url:"assets/boke5-CK5Sg3xP.js",revision:null},{url:"assets/byjg1-CbRFxsJ2.js",revision:null},{url:"assets/byjg2-UpWQEO53.js",revision:null},{url:"assets/byjg3-Cg3ZPn0s.js",revision:null},{url:"assets/categories-BSctN3Pe.css",revision:null},{url:"assets/categories-C_8Y2Y8d.js",revision:null},{url:"assets/cdn-e-plsHRf.js",revision:null},{url:"assets/composable-B4VAWhze.js",revision:null},{url:"assets/config-eR7JidDR.js",revision:null},{url:"assets/domain-DikXmFny.js",revision:null},{url:"assets/email-AxIuTY_y.js",revision:null},{url:"assets/empty-Dm7Q5V9-.js",revision:null},{url:"assets/faq-_4oB50AI.js",revision:null},{url:"assets/gallery-CUMdAqgN.js",revision:null},{url:"assets/ghproxy-BIRMNNGI.js",revision:null},{url:"assets/helper-DiqCHptS.js",revision:null},{url:"assets/home-_FtF3CnL.js",revision:null},{url:"assets/home-D_nyz5Hp.css",revision:null},{url:"assets/image-kw60ErwD.js",revision:null},{url:"assets/index-6niCds5P.js",revision:null},{url:"assets/index-B5GJJ_cy.js",revision:null},{url:"assets/index-B6qZGl5j.js",revision:null},{url:"assets/index-BK1gjEdu.js",revision:null},{url:"assets/index-C_zv-mVX.js",revision:null},{url:"assets/index-C3DENz_e.js",revision:null},{url:"assets/index-C5okkQwF.js",revision:null},{url:"assets/index-CDtsDhRZ.css",revision:null},{url:"assets/index-DMGgB8tt.css",revision:null},{url:"assets/index-DsYu2p5w.js",revision:null},{url:"assets/index-lBxEQxz2.js",revision:null},{url:"assets/index-YbID88Vg.js",revision:null},{url:"assets/index-Zo164U2c.js",revision:null},{url:"assets/KaTeX_AMS-Regular-BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular-DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_AMS-Regular-DRggAlZN.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-ATXxdsX0.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-wX97UBjC.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BdnERNNW.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CB_wures.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold-Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold-Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-Bold-waoOVXN0.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DzxPMmG6.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic-3WenGoN9.ttf",revision:null},{url:"assets/KaTeX_Main-Italic-BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic-NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Main-Regular-ypZvNtVU.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-B3XSjfu4.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic-DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic-flOr_0UB.ttf",revision:null},{url:"assets/KaTeX_Math-Italic-t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-CFMepnvq.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic-DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-YYjJ1zSn.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-BNo7hRIc.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-C5JkGWo-.ttf",revision:null},{url:"assets/KaTeX_Script-Regular-D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-Dbsnue_I.ttf",revision:null},{url:"assets/KaTeX_Size1-Regular-mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-B7gKUWhC.ttf",revision:null},{url:"assets/KaTeX_Size2-Regular-Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-DgpXs0kz.ttf",revision:null},{url:"assets/KaTeX_Size4-Regular-BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Size4-Regular-DWFBv043.ttf",revision:null},{url:"assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular-D3Ib7_Hf.ttf",revision:null},{url:"assets/lyq-BuFMp_i_.js",revision:null},{url:"assets/meihua-CHLNQNIm.js",revision:null},{url:"assets/meihua1-CWJ7DK9U.js",revision:null},{url:"assets/meihua10-D5xLhoBF.js",revision:null},{url:"assets/meihua11-B37fkIZD.js",revision:null},{url:"assets/meihua2-7RWDEhCg.js",revision:null},{url:"assets/meihua3-to2DKMt7.js",revision:null},{url:"assets/meihua4-Q_sI77cp.js",revision:null},{url:"assets/meihua5-BAspKF9I.js",revision:null},{url:"assets/meihua6-BNMnEEv9.js",revision:null},{url:"assets/meihua7-qhQ_ZArk.js",revision:null},{url:"assets/meihua8-TMNdaHGc.js",revision:null},{url:"assets/meihua9-CeAKA25h.js",revision:null},{url:"assets/none-DLM1AMsD.jpg",revision:null},{url:"assets/novelai-qIUvCiso.js",revision:null},{url:"assets/novelai1-CmJnXTif.js",revision:null},{url:"assets/novelai2-DfvSRb78.js",revision:null},{url:"assets/ohook-BqSHcdgq.js",revision:null},{url:"assets/post-CafFt6rp.js",revision:null},{url:"assets/post-Dm7Q5V9-.js",revision:null},{url:"assets/post-DsNE-EB7.js",revision:null},{url:"assets/post-gQpphGKg.css",revision:null},{url:"assets/reader-DR8_WL9Q.js",revision:null},{url:"assets/route-block-B_A1xBdJ.js",revision:null},{url:"assets/sidebar-bg-img-mp54gEws.webp",revision:null},{url:"assets/site-Cc9fYj9Y.js",revision:null},{url:"assets/source1-Bv8stfLu.js",revision:null},{url:"assets/source2-CCQYADH5.js",revision:null},{url:"assets/tags-M3D2DL6_.js",revision:null},{url:"assets/tools-NS3npItE.js",revision:null},{url:"assets/typora-CUSS0arR.js",revision:null},{url:"assets/uptime-Bnk3oi1z.js",revision:null},{url:"assets/uptimeapi-B-dQO6ug.js",revision:null},{url:"assets/ValaxyMain-CxY0pdzc.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang-CQy357bp.js",revision:null},{url:"assets/view-transition-nZH5RA25.css",revision:null},{url:"assets/virtual_pwa-register-CPNIlrsp.js",revision:null},{url:"assets/welcome-BtETmMwQ.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"assets/YunAlgoliaSearch-ZXpyv1Lz.js",revision:null},{url:"assets/YunCard.vue_vue_type_script_setup_true_lang-H7ETwNMi.js",revision:null},{url:"assets/YunFooter-DjwaLgRs.css",revision:null},{url:"assets/YunFooter.vue_vue_type_style_index_0_lang-CINpgNwE.js",revision:null},{url:"assets/YunGallery-DegmOLMw.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang-CEhAjz3-.js",revision:null},{url:"assets/YunPostCollapse-DzZAROS7.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang-D3KUkeJy.js",revision:null},{url:"assets/YunPostList-CYDTlsp3.css",revision:null},{url:"assets/YunPostList.vue_vue_type_style_index_0_lang-BJ89yBuK.js",revision:null},{url:"assets/YunPostMeta-B4_wBHR1.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang-D3vUkZ8w.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"dda07ed6bebe69c0a55db1036ed9d0fc"},{url:"live2d-assets/live2d.min.js",revision:"97a06b32b6e6bee8db7aa128b99b7cc2"},{url:"live2d-assets/waifu-tips.js",revision:"6ff120ccc164e44397a62d9c422569ed"},{url:"live2d-assets/waifu.css",revision:"68aac09b836a1ca1c138b74f46835459"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"20e471102cdb5dd71038ff861dec552d"},{url:"screenshot-pc.jpg",revision:"a04a1b497a3ad69c60224caa37823dbd"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"manifest.webmanifest",revision:"a81d024f8c1ddb17be49fff1cf645e3a"}],{ignoreURLParametersMatching:[/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.(googleapis|gstatic).com\/.*\//,new s.CacheFirst({cacheName:"network-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
