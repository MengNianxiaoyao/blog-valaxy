if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>l(s,r),t={module:{uri:r},exports:a,require:u};e[r]=Promise.all(i.map((s=>t[s]||u(s)))).then((s=>(n(...s),a)))}}define(["./workbox-23dc0c55"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-DCzRIa0g.js",revision:null},{url:"assets/_page_-B7heMf2U.js",revision:null},{url:"assets/404-7CCampWv.css",revision:null},{url:"assets/404-Bf97Cnwa.js",revision:null},{url:"assets/404-C7flpTBo.js",revision:null},{url:"assets/404-C9gkB6Aj.css",revision:null},{url:"assets/404-DYz90Hg-.js",revision:null},{url:"assets/albums-Bfd1qAzJ.js",revision:null},{url:"assets/albums-DqKbxAWq.css",revision:null},{url:"assets/animation-CLm46_xa.js",revision:null},{url:"assets/animation-DfCZWmnk.js",revision:null},{url:"assets/animation-in-CQBZZygY.css",revision:null},{url:"assets/app-D3SpYRn9.js",revision:null},{url:"assets/app-Ds4oh6vk.css",revision:null},{url:"assets/archives-CSE-4xgX.js",revision:null},{url:"assets/back-dYjaEjgP.js",revision:null},{url:"assets/baodao-9yJwiRiK.js",revision:null},{url:"assets/bg-img-kXdNMxcF.jpg",revision:null},{url:"assets/bilibili-bangumi.entry-BothNLuH.js",revision:null},{url:"assets/boke1-BBoeLwGS.js",revision:null},{url:"assets/boke2-IFx611oV.js",revision:null},{url:"assets/boke3-wUE4w0Hv.js",revision:null},{url:"assets/boke4-Qn-K6leu.js",revision:null},{url:"assets/boke5-ih-yaXhI.js",revision:null},{url:"assets/byjg1-fxJPtNQ4.js",revision:null},{url:"assets/byjg2-BhuwarZn.js",revision:null},{url:"assets/byjg3-DdUcRPLV.js",revision:null},{url:"assets/categories-Di9C2GnV.js",revision:null},{url:"assets/cdn-CpbfAWJ4.js",revision:null},{url:"assets/collection-CNJOvoOD.js",revision:null},{url:"assets/collections-CAyrciwl.js",revision:null},{url:"assets/config-DJCebIGy.js",revision:null},{url:"assets/domain-m5AYN6Yt.js",revision:null},{url:"assets/email-O0Fkr-_L.js",revision:null},{url:"assets/empty-B94VK5K7.js",revision:null},{url:"assets/empty-DPlXspoG.js",revision:null},{url:"assets/faq-DPG7ftT9.js",revision:null},{url:"assets/gallery-CsXuSsZE.js",revision:null},{url:"assets/ghproxy-cr14KKGg.js",revision:null},{url:"assets/home-OBPZ5nt0.css",revision:null},{url:"assets/home-Zkr-4SZv.js",revision:null},{url:"assets/image-DHLlg1-3.js",revision:null},{url:"assets/index-1DoY0TAu.js",revision:null},{url:"assets/index-BN25jYDK.js",revision:null},{url:"assets/index-BtCzjG_q.js",revision:null},{url:"assets/index-C5okkQwF.js",revision:null},{url:"assets/index-CDtsDhRZ.css",revision:null},{url:"assets/index-CDVr7QPL.js",revision:null},{url:"assets/index-CfSYTvq3.js",revision:null},{url:"assets/index-CvWdfCPr.css",revision:null},{url:"assets/index-DbNJOBVQ.js",revision:null},{url:"assets/index-De4vGl6h.js",revision:null},{url:"assets/index-Dic9z-2-.js",revision:null},{url:"assets/index-DkZQVoiD.js",revision:null},{url:"assets/index-Dm0oTYWi.js",revision:null},{url:"assets/index-DmpnUhGW.js",revision:null},{url:"assets/index-e7HQRLVM.js",revision:null},{url:"assets/index-x8TNrC4q.js",revision:null},{url:"assets/KaTeX_AMS-Regular-BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular-DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_AMS-Regular-DRggAlZN.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-ATXxdsX0.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-wX97UBjC.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BdnERNNW.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CB_wures.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold-Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold-Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-Bold-waoOVXN0.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DzxPMmG6.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic-3WenGoN9.ttf",revision:null},{url:"assets/KaTeX_Main-Italic-BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic-NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Main-Regular-ypZvNtVU.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-B3XSjfu4.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic-DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic-flOr_0UB.ttf",revision:null},{url:"assets/KaTeX_Math-Italic-t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-CFMepnvq.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic-DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-YYjJ1zSn.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-BNo7hRIc.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-C5JkGWo-.ttf",revision:null},{url:"assets/KaTeX_Script-Regular-D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-Dbsnue_I.ttf",revision:null},{url:"assets/KaTeX_Size1-Regular-mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-B7gKUWhC.ttf",revision:null},{url:"assets/KaTeX_Size2-Regular-Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-DgpXs0kz.ttf",revision:null},{url:"assets/KaTeX_Size4-Regular-BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Size4-Regular-DWFBv043.ttf",revision:null},{url:"assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular-D3Ib7_Hf.ttf",revision:null},{url:"assets/lyq-2kNQhEQ4.js",revision:null},{url:"assets/meihua-_E0H1Syl.js",revision:null},{url:"assets/meihua1-jdNOYkJf.js",revision:null},{url:"assets/meihua10-CZAttJHd.js",revision:null},{url:"assets/meihua11-C2v4S3Na.js",revision:null},{url:"assets/meihua2-fHObCMZx.js",revision:null},{url:"assets/meihua3-DK_GNQLR.js",revision:null},{url:"assets/meihua4-DLob3x1J.js",revision:null},{url:"assets/meihua5-CZ1hdB62.js",revision:null},{url:"assets/meihua6-COzQlF3Z.js",revision:null},{url:"assets/meihua7-aFCsU_yY.js",revision:null},{url:"assets/meihua8-C8UhUbPG.js",revision:null},{url:"assets/meihua9-C8DscRW7.js",revision:null},{url:"assets/none-DLM1AMsD.jpg",revision:null},{url:"assets/novelai-mYjaODws.js",revision:null},{url:"assets/novelai1-C1MZbNhm.js",revision:null},{url:"assets/novelai2-CeL-lv7m.js",revision:null},{url:"assets/ohook-IL_2Mkiz.js",revision:null},{url:"assets/post-B94VK5K7.js",revision:null},{url:"assets/post-BV7By7ZW.js",revision:null},{url:"assets/post-CIS0w_ZN.js",revision:null},{url:"assets/post-DMkhybD1.css",revision:null},{url:"assets/posts-DCd7Fn8d.js",revision:null},{url:"assets/projects-Dz8eabLE.css",revision:null},{url:"assets/projects-gqYtiEDw.js",revision:null},{url:"assets/reader-BBS89bDy.js",revision:null},{url:"assets/route-block-B_A1xBdJ.js",revision:null},{url:"assets/sidebar-bg-img-mp54gEws.webp",revision:null},{url:"assets/site-VV1s1V9O.js",revision:null},{url:"assets/source1-D9P-CvT4.js",revision:null},{url:"assets/source2-CGzFWTbK.js",revision:null},{url:"assets/tags-CAtC2yVS.js",revision:null},{url:"assets/tools-n8n9D_5m.js",revision:null},{url:"assets/typora-DincQ-C9.js",revision:null},{url:"assets/uptime-DD4ejqgB.js",revision:null},{url:"assets/uptimeapi-NWMYN2zV.js",revision:null},{url:"assets/ValaxyMain-KpvGeBU_.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang-BhvTQXcN.js",revision:null},{url:"assets/view-transition-nZH5RA25.css",revision:null},{url:"assets/virtual_pwa-register-CtnDMGwT.js",revision:null},{url:"assets/welcome-Cina8zZM.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"assets/YunAlgoliaSearch-DFasZWgz.js",revision:null},{url:"assets/YunComment-BxRx4YU6.css",revision:null},{url:"assets/YunComment.vue_vue_type_style_index_0_lang-2p7fyezW.js",revision:null},{url:"assets/YunGallery-BOOEYFhv.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang-CQsY6k1v.js",revision:null},{url:"assets/YunPostCollapse-CLSIBd1m.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang-D8fAMRji.js",revision:null},{url:"assets/YunPostList-C5xJawFp.css",revision:null},{url:"assets/YunPostList.vue_vue_type_script_setup_true_lang-DxQqnoM8.js",revision:null},{url:"assets/YunPostMeta-B4_wBHR1.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang--aoOnwAi.js",revision:null},{url:"assets/YunSidebar-BbHwVKhF.css",revision:null},{url:"assets/YunSidebar.vue_vue_type_style_index_0_lang-D1VGFECW.js",revision:null},{url:"assets/YunSponsor-5KX0GT7T.css",revision:null},{url:"assets/YunSponsor.vue_vue_type_style_index_0_lang-BKoXeSZz.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"dda8cce4b317b2409b1507be71a33831"},{url:"live2d-assets/live2d.min.js",revision:"97a06b32b6e6bee8db7aa128b99b7cc2"},{url:"live2d-assets/waifu-tips.js",revision:"6ff120ccc164e44397a62d9c422569ed"},{url:"live2d-assets/waifu.css",revision:"68aac09b836a1ca1c138b74f46835459"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"20e471102cdb5dd71038ff861dec552d"},{url:"screenshot-pc.jpg",revision:"a04a1b497a3ad69c60224caa37823dbd"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"manifest.webmanifest",revision:"a81d024f8c1ddb17be49fff1cf645e3a"}],{ignoreURLParametersMatching:[/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.(googleapis|gstatic).com\/.*\//,new s.CacheFirst({cacheName:"network-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
