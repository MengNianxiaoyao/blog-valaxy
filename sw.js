if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-bb62b90b"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-DYUKFYYe.js",revision:null},{url:"assets/_page_-QFOM4Phm.js",revision:null},{url:"assets/404-Brb60iBs.js",revision:null},{url:"assets/404-C9gkB6Aj.css",revision:null},{url:"assets/404-DbUcANyL.js",revision:null},{url:"assets/404-DZp5BDbO.css",revision:null},{url:"assets/404-oCVFD8qL.js",revision:null},{url:"assets/albums-BmAPtciV.css",revision:null},{url:"assets/albums-C2QgC61I.js",revision:null},{url:"assets/app-a708yvdB.css",revision:null},{url:"assets/app-V0P4suEe.js",revision:null},{url:"assets/archives-BmIzPwI1.js",revision:null},{url:"assets/baiye2-DCw1msNi.js",revision:null},{url:"assets/baiye3-CbmhBw0X.js",revision:null},{url:"assets/baodao-DLO9_HWb.js",revision:null},{url:"assets/bg-img-kXdNMxcF.jpg",revision:null},{url:"assets/boke2-DbhegO5s.js",revision:null},{url:"assets/boke3-DMWGZ0ZO.js",revision:null},{url:"assets/boke4-x0atwOZ_.js",revision:null},{url:"assets/categories-BSctN3Pe.css",revision:null},{url:"assets/categories-goqNWz4u.js",revision:null},{url:"assets/domain-DT3fN1OD.js",revision:null},{url:"assets/gallery-D0ufMm21.js",revision:null},{url:"assets/ghproxy-66swt9Tn.js",revision:null},{url:"assets/home-BqvJJ5GG.js",revision:null},{url:"assets/home-D_nyz5Hp.css",revision:null},{url:"assets/index-B2fGEC4J.js",revision:null},{url:"assets/index-BDdxqG6H.js",revision:null},{url:"assets/index-Be6CB1jK.js",revision:null},{url:"assets/index-BMd5EPNr.js",revision:null},{url:"assets/index-BmIicuMs.js",revision:null},{url:"assets/index-BNFcWLp8.js",revision:null},{url:"assets/index-BOgd0HKZ.js",revision:null},{url:"assets/index-Bq9N5EpQ.js",revision:null},{url:"assets/index-C7yU5XnD.js",revision:null},{url:"assets/index-CTJTIMYh.js",revision:null},{url:"assets/index-CUmmiR5w.js",revision:null},{url:"assets/index-DR2SeErd.js",revision:null},{url:"assets/index-EkiyfBor.js",revision:null},{url:"assets/index-fDEpwC24.js",revision:null},{url:"assets/index-FJJ5vuZw.js",revision:null},{url:"assets/index-ijlttB8y.css",revision:null},{url:"assets/index-UxiP_-Ne.js",revision:null},{url:"assets/KaTeX_AMS-Regular-BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular-DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold-Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold-Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic-SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic-BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic-NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic-DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic-t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic-DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2",revision:null},{url:"assets/lyq-BmsgbqYV.js",revision:null},{url:"assets/meihua1-DkOdVYU7.js",revision:null},{url:"assets/meihua10-BvsyVRkn.js",revision:null},{url:"assets/meihua11-DU6824ED.js",revision:null},{url:"assets/meihua2-WXmhQe0L.js",revision:null},{url:"assets/meihua3-BB_pVtvk.js",revision:null},{url:"assets/meihua4-DuLLeOnP.js",revision:null},{url:"assets/meihua5-C_fn-zBI.js",revision:null},{url:"assets/meihua6-BLN37q_n.js",revision:null},{url:"assets/meihua7-M95jlZ9C.js",revision:null},{url:"assets/meihua8-BZ_Uxh_z.js",revision:null},{url:"assets/meihua9-zNMeK4lt.js",revision:null},{url:"assets/none-DLM1AMsD.jpg",revision:null},{url:"assets/novelai1-C0S3rbsN.js",revision:null},{url:"assets/novelai2-DNAt4h5E.js",revision:null},{url:"assets/ohook-B5o_Ke6Y.js",revision:null},{url:"assets/post-53pBAdfe.js",revision:null},{url:"assets/post-BiDquvU6.js",revision:null},{url:"assets/post-gQpphGKg.css",revision:null},{url:"assets/reader-DIbCCaQD.js",revision:null},{url:"assets/route-block-B_A1xBdJ.js",revision:null},{url:"assets/sidebar-bg-img-mp54gEws.webp",revision:null},{url:"assets/site-Buj9QQs8.js",revision:null},{url:"assets/source2-ZBlqDShm.js",revision:null},{url:"assets/tags-BIfewHgi.js",revision:null},{url:"assets/typora-CCDOBrif.js",revision:null},{url:"assets/uptime-ORFiSqoJ.js",revision:null},{url:"assets/ValaxyMain-D934L8Hq.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang-GFJbvA8A.js",revision:null},{url:"assets/view-transition-nZH5RA25.css",revision:null},{url:"assets/virtual_pwa-register-BLiZ_Iwa.js",revision:null},{url:"assets/workbox-window.prod.es5-DFjpnwFp.js",revision:null},{url:"assets/YunAlgoliaSearch-DNW_Cl2r.js",revision:null},{url:"assets/YunCard.vue_vue_type_script_setup_true_lang-rS8MSCMu.js",revision:null},{url:"assets/YunFooter-B0ViS4tU.css",revision:null},{url:"assets/YunFooter.vue_vue_type_style_index_0_lang-CqWpdpNO.js",revision:null},{url:"assets/YunGallery-c0EZgAZw.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang-CChv9N0B.js",revision:null},{url:"assets/YunPostCollapse-DzZAROS7.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang-C5mlevoF.js",revision:null},{url:"assets/YunPostList-CYDTlsp3.css",revision:null},{url:"assets/YunPostList.vue_vue_type_style_index_0_lang-NbsGID_N.js",revision:null},{url:"assets/YunPostMeta-B4_wBHR1.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang-B2WOKHri.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"4837aae4d7e5e47a0a76ea375cb73974"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"9c88c2030cd4121f73fed3dbd01aed4f"},{url:"screenshot-pc.jpg",revision:"9979005563afa2511e6bb742c85fd685"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"manifest.webmanifest",revision:"a81d024f8c1ddb17be49fff1cf645e3a"}],{ignoreURLParametersMatching:[/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.googleapis.com\/.*\//,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.gstatic.com\/.*\//,new s.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
