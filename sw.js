if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-23dc0c55"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-DluGeA0z.js",revision:null},{url:"assets/_page_-AIvytcbC.js",revision:null},{url:"assets/404-B82H5cWc.js",revision:null},{url:"assets/404-C9gkB6Aj.css",revision:null},{url:"assets/404-CXTf0sqh.js",revision:null},{url:"assets/404-g2wG8d0n.js",revision:null},{url:"assets/404-MjM5D9Tl.css",revision:null},{url:"assets/albums-DqKbxAWq.css",revision:null},{url:"assets/albums-Tp92rVrz.js",revision:null},{url:"assets/animation-3R8Bm-P7.js",revision:null},{url:"assets/animation-BuepqOjE.js",revision:null},{url:"assets/animation-in-CQBZZygY.css",revision:null},{url:"assets/app-CnQPuknL.js",revision:null},{url:"assets/app-M_lZ9nXT.css",revision:null},{url:"assets/archives-CDbYcJ27.js",revision:null},{url:"assets/back-CcIrrn50.js",revision:null},{url:"assets/baodao-rNZuXNud.js",revision:null},{url:"assets/bg-img-kXdNMxcF.jpg",revision:null},{url:"assets/bilibili-bangumi.entry-D2ZRD_Uh.js",revision:null},{url:"assets/boke1-DFUdtDby.js",revision:null},{url:"assets/boke2-W1EH_P5P.js",revision:null},{url:"assets/boke3-CfiVlaJ2.js",revision:null},{url:"assets/boke4-5t2dCaGw.js",revision:null},{url:"assets/boke5-Bh3CuAEM.js",revision:null},{url:"assets/byjg1-CP4SlWPq.js",revision:null},{url:"assets/byjg2-De9d6iy7.js",revision:null},{url:"assets/byjg3-B-ZvQlD0.js",revision:null},{url:"assets/categories--saO6RFz.js",revision:null},{url:"assets/cdn-BBQYUcFh.js",revision:null},{url:"assets/collection-BWAb-78l.js",revision:null},{url:"assets/collections-BVULJG-L.js",revision:null},{url:"assets/config-CIe0dHm7.js",revision:null},{url:"assets/domain-FrFtvelC.js",revision:null},{url:"assets/email-C3poSD6x.js",revision:null},{url:"assets/empty-BlfE-Ph-.js",revision:null},{url:"assets/empty-C8CrfOwl.js",revision:null},{url:"assets/faq-DZzk7m6I.js",revision:null},{url:"assets/gallery-Db5IngwF.js",revision:null},{url:"assets/ghproxy-CoijJAqG.js",revision:null},{url:"assets/home-DWGZukzP.js",revision:null},{url:"assets/home-OBPZ5nt0.css",revision:null},{url:"assets/image-DmT0G9aI.js",revision:null},{url:"assets/index-_e1gHzhY.js",revision:null},{url:"assets/index-0fmk4b3-.js",revision:null},{url:"assets/index-B0nenvdd.js",revision:null},{url:"assets/index-BEXrl8MZ.js",revision:null},{url:"assets/index-BmTSNd_q.js",revision:null},{url:"assets/index-BrPHymwN.js",revision:null},{url:"assets/index-C1AHsoMD.js",revision:null},{url:"assets/index-C5okkQwF.js",revision:null},{url:"assets/index-CDtsDhRZ.css",revision:null},{url:"assets/index-CKj8Bucy.js",revision:null},{url:"assets/index-CLTMbnQF.js",revision:null},{url:"assets/index-CpXp76sq.js",revision:null},{url:"assets/index-CvWdfCPr.css",revision:null},{url:"assets/index-DjH2M9BF.js",revision:null},{url:"assets/index-DmUFgr8p.js",revision:null},{url:"assets/index-x8TNrC4q.js",revision:null},{url:"assets/KaTeX_AMS-Regular-BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular-DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_AMS-Regular-DRggAlZN.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-ATXxdsX0.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-wX97UBjC.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BdnERNNW.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CB_wures.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold-Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold-Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-Bold-waoOVXN0.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DzxPMmG6.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic-3WenGoN9.ttf",revision:null},{url:"assets/KaTeX_Main-Italic-BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic-NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Main-Regular-ypZvNtVU.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-B3XSjfu4.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic-DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic-flOr_0UB.ttf",revision:null},{url:"assets/KaTeX_Math-Italic-t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-CFMepnvq.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic-DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-YYjJ1zSn.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-BNo7hRIc.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-C5JkGWo-.ttf",revision:null},{url:"assets/KaTeX_Script-Regular-D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-Dbsnue_I.ttf",revision:null},{url:"assets/KaTeX_Size1-Regular-mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-B7gKUWhC.ttf",revision:null},{url:"assets/KaTeX_Size2-Regular-Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-DgpXs0kz.ttf",revision:null},{url:"assets/KaTeX_Size4-Regular-BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Size4-Regular-DWFBv043.ttf",revision:null},{url:"assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular-D3Ib7_Hf.ttf",revision:null},{url:"assets/lyq-M9JKuiIA.js",revision:null},{url:"assets/meihua-DDu_Yt_8.js",revision:null},{url:"assets/meihua1-ByCFxvcI.js",revision:null},{url:"assets/meihua10-D6efcRoQ.js",revision:null},{url:"assets/meihua11-f0CVwOoB.js",revision:null},{url:"assets/meihua2-mavGI5P0.js",revision:null},{url:"assets/meihua3-DOz2F3B6.js",revision:null},{url:"assets/meihua4-ClMV99mw.js",revision:null},{url:"assets/meihua5-BIG82lV9.js",revision:null},{url:"assets/meihua6-vOatY-Hd.js",revision:null},{url:"assets/meihua7-Dc2Bq4H5.js",revision:null},{url:"assets/meihua8-CKfr1GQp.js",revision:null},{url:"assets/meihua9-D1urAxDc.js",revision:null},{url:"assets/none-DLM1AMsD.jpg",revision:null},{url:"assets/novelai-dHRHGFn9.js",revision:null},{url:"assets/novelai1-BB9m0_6d.js",revision:null},{url:"assets/novelai2-n0bESWGM.js",revision:null},{url:"assets/ohook-D6p_j9Cw.js",revision:null},{url:"assets/post-0Eeh5sy3.js",revision:null},{url:"assets/post-BlfE-Ph-.js",revision:null},{url:"assets/post-DMkhybD1.css",revision:null},{url:"assets/post-DVfLDN-M.js",revision:null},{url:"assets/posts-CzVYXiU8.js",revision:null},{url:"assets/projects-CZNA1Tko.js",revision:null},{url:"assets/projects-Dz8eabLE.css",revision:null},{url:"assets/reader-Bvg_cshv.js",revision:null},{url:"assets/route-block-B_A1xBdJ.js",revision:null},{url:"assets/sidebar-bg-img-mp54gEws.webp",revision:null},{url:"assets/site-A_l1Z-yC.js",revision:null},{url:"assets/source1-DyL95VGF.js",revision:null},{url:"assets/source2-CxlXuDYH.js",revision:null},{url:"assets/tags-Du4Sk-bo.js",revision:null},{url:"assets/tools-DVUNvUuJ.js",revision:null},{url:"assets/typora-CxL_x10m.js",revision:null},{url:"assets/uptime-CM6xwopM.js",revision:null},{url:"assets/uptimeapi-DItxDeEr.js",revision:null},{url:"assets/ValaxyMain-KpvGeBU_.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang-BZgDaOIC.js",revision:null},{url:"assets/view-transition-nZH5RA25.css",revision:null},{url:"assets/virtual_pwa-register-D2yJEjSb.js",revision:null},{url:"assets/welcome-xswvd3JT.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"assets/YunAlgoliaSearch-Cogy6hfE.js",revision:null},{url:"assets/YunComment-sAuNFLMB.css",revision:null},{url:"assets/YunComment.vue_vue_type_style_index_0_lang-Nky4aeQr.js",revision:null},{url:"assets/YunGallery-Bw5atSJL.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang-CRq0lDPC.js",revision:null},{url:"assets/YunPostCollapse-CLSIBd1m.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang-BjTos288.js",revision:null},{url:"assets/YunPostList-C5xJawFp.css",revision:null},{url:"assets/YunPostList.vue_vue_type_script_setup_true_lang--YD8Egko.js",revision:null},{url:"assets/YunPostMeta-B4_wBHR1.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang-DRBEXRBI.js",revision:null},{url:"assets/YunSidebar-BbHwVKhF.css",revision:null},{url:"assets/YunSidebar.vue_vue_type_style_index_0_lang-BxCg87yD.js",revision:null},{url:"assets/YunSponsor-5KX0GT7T.css",revision:null},{url:"assets/YunSponsor.vue_vue_type_style_index_0_lang-DHwWLRYZ.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"73d2a2a3afd301de6c48ea3d485fda25"},{url:"live2d-assets/live2d.min.js",revision:"97a06b32b6e6bee8db7aa128b99b7cc2"},{url:"live2d-assets/waifu-tips.js",revision:"6ff120ccc164e44397a62d9c422569ed"},{url:"live2d-assets/waifu.css",revision:"68aac09b836a1ca1c138b74f46835459"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"20e471102cdb5dd71038ff861dec552d"},{url:"screenshot-pc.jpg",revision:"a04a1b497a3ad69c60224caa37823dbd"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"manifest.webmanifest",revision:"a81d024f8c1ddb17be49fff1cf645e3a"}],{ignoreURLParametersMatching:[/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.(googleapis|gstatic).com\/.*\//,new s.CacheFirst({cacheName:"network-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
