if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-23dc0c55"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-YfHWINdt.js",revision:null},{url:"assets/_page_-Tk3WcB_l.js",revision:null},{url:"assets/404--ShIilND.css",revision:null},{url:"assets/404-BVla_BTh.css",revision:null},{url:"assets/404-COgI8AUl.js",revision:null},{url:"assets/404-D-dRi_tQ.js",revision:null},{url:"assets/404-fnsjIMvk.js",revision:null},{url:"assets/albums-B673jvUl.css",revision:null},{url:"assets/albums-Dp_NyBTr.js",revision:null},{url:"assets/animation-BK3Ty5pT.js",revision:null},{url:"assets/animation-DEAPa3x8.js",revision:null},{url:"assets/animation-in-BI4ri2UH.css",revision:null},{url:"assets/app-CS4E0TRr.css",revision:null},{url:"assets/app-DQqYZsVw.js",revision:null},{url:"assets/archives-DY1b9EfE.js",revision:null},{url:"assets/back-BdvKZYWP.js",revision:null},{url:"assets/baodao-RV5RGdY4.js",revision:null},{url:"assets/bg-img-kXdNMxcF.jpg",revision:null},{url:"assets/bilibili-bangumi.entry-FdS5nxoP.js",revision:null},{url:"assets/boke1-D6035t3_.js",revision:null},{url:"assets/boke2-ChDUDd39.js",revision:null},{url:"assets/boke3-CaCkjG7U.js",revision:null},{url:"assets/boke4-CbqTJbUw.js",revision:null},{url:"assets/boke5-CkLopslR.js",revision:null},{url:"assets/byjg1--rEL9Hjl.js",revision:null},{url:"assets/byjg2-l9y0lwja.js",revision:null},{url:"assets/byjg3-llFOkHQV.js",revision:null},{url:"assets/categories-DMiH8fR6.js",revision:null},{url:"assets/cdn-DodZZC20.js",revision:null},{url:"assets/collection-DHcTuODA.js",revision:null},{url:"assets/collections-1jGmv5dr.js",revision:null},{url:"assets/config-D3FlwXW-.js",revision:null},{url:"assets/domain-Dus6jyCj.js",revision:null},{url:"assets/email-CWgi72DG.js",revision:null},{url:"assets/empty-CZWofkZw.js",revision:null},{url:"assets/empty-DvWRdxUL.js",revision:null},{url:"assets/faq-DNh84K3H.js",revision:null},{url:"assets/gallery-DNupZPOK.js",revision:null},{url:"assets/ghproxy-BzeQ3nyj.js",revision:null},{url:"assets/home-BFgEpN9t.css",revision:null},{url:"assets/home-C08dnPgH.js",revision:null},{url:"assets/image--D1BKMZz.js",revision:null},{url:"assets/index-Bd5Pt31y.js",revision:null},{url:"assets/index-BFjl9BM4.js",revision:null},{url:"assets/index-BfPgZBRC.js",revision:null},{url:"assets/index-BRXJGymZ.js",revision:null},{url:"assets/index-BxlDG1VA.js",revision:null},{url:"assets/index-C5okkQwF.js",revision:null},{url:"assets/index-Cch_mg4D.css",revision:null},{url:"assets/index-Cy-ZagN9.js",revision:null},{url:"assets/index-D5bS8Pg6.js",revision:null},{url:"assets/index-DfofLNJI.js",revision:null},{url:"assets/index-DfXt1eUW.css",revision:null},{url:"assets/index-DUDjXiyq.js",revision:null},{url:"assets/index-IXbw4R3G.js",revision:null},{url:"assets/index-JrSQyzmm.js",revision:null},{url:"assets/index-m2pvKZ94.js",revision:null},{url:"assets/index-RtfNWvsC.js",revision:null},{url:"assets/KaTeX_AMS-Regular-BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular-DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_AMS-Regular-DRggAlZN.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-ATXxdsX0.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-wX97UBjC.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BdnERNNW.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CB_wures.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold-Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold-Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-Bold-waoOVXN0.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DzxPMmG6.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic-3WenGoN9.ttf",revision:null},{url:"assets/KaTeX_Main-Italic-BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic-NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Main-Regular-ypZvNtVU.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-B3XSjfu4.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic-DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic-flOr_0UB.ttf",revision:null},{url:"assets/KaTeX_Math-Italic-t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-CFMepnvq.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic-DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-YYjJ1zSn.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-BNo7hRIc.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-C5JkGWo-.ttf",revision:null},{url:"assets/KaTeX_Script-Regular-D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-Dbsnue_I.ttf",revision:null},{url:"assets/KaTeX_Size1-Regular-mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-B7gKUWhC.ttf",revision:null},{url:"assets/KaTeX_Size2-Regular-Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-DgpXs0kz.ttf",revision:null},{url:"assets/KaTeX_Size4-Regular-BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Size4-Regular-DWFBv043.ttf",revision:null},{url:"assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular-D3Ib7_Hf.ttf",revision:null},{url:"assets/lyq-BSCOMRjQ.js",revision:null},{url:"assets/meihua-C3d0hC6L.js",revision:null},{url:"assets/meihua1-C2fi7O1R.js",revision:null},{url:"assets/meihua10-BhCEifgJ.js",revision:null},{url:"assets/meihua11-Dlc3bH5P.js",revision:null},{url:"assets/meihua2-qIwCwFnE.js",revision:null},{url:"assets/meihua3-T9c3thbf.js",revision:null},{url:"assets/meihua4-BrkjJM3q.js",revision:null},{url:"assets/meihua5-DNTeqJR0.js",revision:null},{url:"assets/meihua6-C62Gekm7.js",revision:null},{url:"assets/meihua7-CSLROw_F.js",revision:null},{url:"assets/meihua8-BJRCN132.js",revision:null},{url:"assets/meihua9-D1xU_Urk.js",revision:null},{url:"assets/none-DLM1AMsD.jpg",revision:null},{url:"assets/novelai-DHEdCl97.js",revision:null},{url:"assets/novelai1-Bi4GHnnP.js",revision:null},{url:"assets/novelai2-Dj2RC661.js",revision:null},{url:"assets/ohook-5GG5bdUW.js",revision:null},{url:"assets/post-B5HW-v1i.js",revision:null},{url:"assets/post-CNHfy9_I.js",revision:null},{url:"assets/post-CZWofkZw.js",revision:null},{url:"assets/post-DDxwAI70.css",revision:null},{url:"assets/posts-BGGcBfdd.js",revision:null},{url:"assets/projects-BleGhFCu.js",revision:null},{url:"assets/projects-Dti-qd8N.css",revision:null},{url:"assets/reader-OHHJBUEf.js",revision:null},{url:"assets/route-block-B_A1xBdJ.js",revision:null},{url:"assets/sidebar-bg-img-mp54gEws.webp",revision:null},{url:"assets/site-BRigrutd.js",revision:null},{url:"assets/source1-AheQJ2YZ.js",revision:null},{url:"assets/source2-D_pC3q9V.js",revision:null},{url:"assets/tags-nUt9ZbZV.js",revision:null},{url:"assets/tools-C5RVWR3U.js",revision:null},{url:"assets/typora-BCcqKbhk.js",revision:null},{url:"assets/uptime-CbrRiXjI.js",revision:null},{url:"assets/uptimeapi-zjQBf9Xa.js",revision:null},{url:"assets/ValaxyMain-BHXg_53O.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang-CIgkFmME.js",revision:null},{url:"assets/view-transition-IkvUpX_n.css",revision:null},{url:"assets/virtual_pwa-register-DMH1GJM2.js",revision:null},{url:"assets/welcome-CHuudzoE.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"assets/YunAlgoliaSearch-CshfLt7M.js",revision:null},{url:"assets/YunComment-88NRikQ6.css",revision:null},{url:"assets/YunComment.vue_vue_type_style_index_0_lang-Dr8QOSfc.js",revision:null},{url:"assets/YunGallery-Bazl49nO.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang-zR_I34vT.js",revision:null},{url:"assets/YunPostCollapse-CLDXGmA8.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang-kgxLSALt.js",revision:null},{url:"assets/YunPostList-BfWGcc9d.css",revision:null},{url:"assets/YunPostList.vue_vue_type_script_setup_true_lang-DpeA9lsY.js",revision:null},{url:"assets/YunPostMeta-DCrVMfuT.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang-nOnD6ao5.js",revision:null},{url:"assets/YunSponsor-BJOC5yvc.css",revision:null},{url:"assets/YunSponsor.vue_vue_type_style_index_0_lang-TslAaEaz.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"de5c0d09fd97f3bb358076a7f51c96d6"},{url:"live2d-assets/live2d.min.js",revision:"97a06b32b6e6bee8db7aa128b99b7cc2"},{url:"live2d-assets/waifu-tips.js",revision:"6ff120ccc164e44397a62d9c422569ed"},{url:"live2d-assets/waifu.css",revision:"68aac09b836a1ca1c138b74f46835459"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"20e471102cdb5dd71038ff861dec552d"},{url:"screenshot-pc.jpg",revision:"a04a1b497a3ad69c60224caa37823dbd"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"manifest.webmanifest",revision:"a81d024f8c1ddb17be49fff1cf645e3a"}],{ignoreURLParametersMatching:[/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.(googleapis|gstatic).com\/.*\//,new s.CacheFirst({cacheName:"network-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
