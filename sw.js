if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),t={module:{uri:n},exports:u,require:a};e[n]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-23dc0c55"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-iX87L7Zp.js",revision:null},{url:"assets/_page_-C6MTh6L5.js",revision:null},{url:"assets/404-BiSASXWb.css",revision:null},{url:"assets/404-BVla_BTh.css",revision:null},{url:"assets/404-CRJ0bnjE.js",revision:null},{url:"assets/404-DQY14to4.js",revision:null},{url:"assets/404-FDnc7gRH.js",revision:null},{url:"assets/albums-B673jvUl.css",revision:null},{url:"assets/albums-Dnx5TC_i.js",revision:null},{url:"assets/animation-BUh3igqT.js",revision:null},{url:"assets/animation-Cb2fjTKQ.js",revision:null},{url:"assets/animation-in-BI4ri2UH.css",revision:null},{url:"assets/app-BfSgdYsP.css",revision:null},{url:"assets/app-D0zR5I1C.js",revision:null},{url:"assets/archives-DSvdEoxL.js",revision:null},{url:"assets/back-CqLckgtJ.js",revision:null},{url:"assets/baodao-nU0trH8W.js",revision:null},{url:"assets/bg-img-kXdNMxcF.jpg",revision:null},{url:"assets/bilibili-bangumi.entry-1eEpM52S.js",revision:null},{url:"assets/boke1-DOOeLJ_z.js",revision:null},{url:"assets/boke2-7wWec-2U.js",revision:null},{url:"assets/boke3-WgbAQGJR.js",revision:null},{url:"assets/boke4-Byr7IOCl.js",revision:null},{url:"assets/boke5-DL9Nrx5L.js",revision:null},{url:"assets/byjg1-D3uaXI1y.js",revision:null},{url:"assets/byjg2-C5GTcGf1.js",revision:null},{url:"assets/byjg3-Dzix0ram.js",revision:null},{url:"assets/categories-CI5KJzIe.js",revision:null},{url:"assets/cdn-DpECufu7.js",revision:null},{url:"assets/collection-CDoIRwNw.js",revision:null},{url:"assets/collections-DwUF5XFk.js",revision:null},{url:"assets/config-Cr7QrGqu.js",revision:null},{url:"assets/domain-C-tklUc2.js",revision:null},{url:"assets/email-2_mzN5hB.js",revision:null},{url:"assets/empty-CmfduE8N.js",revision:null},{url:"assets/empty-CNHX_72o.js",revision:null},{url:"assets/faq-BtRwPh_O.js",revision:null},{url:"assets/gallery-Vc4eemru.js",revision:null},{url:"assets/ghproxy-DFCZUNu1.js",revision:null},{url:"assets/home-DpzUpCoA.js",revision:null},{url:"assets/home-Dy6mdgAv.css",revision:null},{url:"assets/image-DA5TnbAL.js",revision:null},{url:"assets/index-6p4RP8Ki.js",revision:null},{url:"assets/index-9_E_rLDx.js",revision:null},{url:"assets/index-BMD0Ckm7.js",revision:null},{url:"assets/index-BvgtKvEs.js",revision:null},{url:"assets/index-C-3pMXFs.js",revision:null},{url:"assets/index-C4Y4Io5I.js",revision:null},{url:"assets/index-C5okkQwF.js",revision:null},{url:"assets/index-C6fpFtw_.js",revision:null},{url:"assets/index-Cch_mg4D.css",revision:null},{url:"assets/index-D5TuR9AN.js",revision:null},{url:"assets/index-DfXt1eUW.css",revision:null},{url:"assets/index-DokgFShz.js",revision:null},{url:"assets/index-iAWr_RHn.js",revision:null},{url:"assets/index-pO2dxbSC.js",revision:null},{url:"assets/index-urjFHwXz.js",revision:null},{url:"assets/index-x8TNrC4q.js",revision:null},{url:"assets/KaTeX_AMS-Regular-BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular-DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_AMS-Regular-DRggAlZN.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-ATXxdsX0.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-wX97UBjC.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BdnERNNW.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CB_wures.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold-Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold-Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-Bold-waoOVXN0.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DzxPMmG6.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic-3WenGoN9.ttf",revision:null},{url:"assets/KaTeX_Main-Italic-BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic-NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Main-Regular-ypZvNtVU.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-B3XSjfu4.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic-DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic-flOr_0UB.ttf",revision:null},{url:"assets/KaTeX_Math-Italic-t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-CFMepnvq.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic-DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-YYjJ1zSn.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-BNo7hRIc.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-C5JkGWo-.ttf",revision:null},{url:"assets/KaTeX_Script-Regular-D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-Dbsnue_I.ttf",revision:null},{url:"assets/KaTeX_Size1-Regular-mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-B7gKUWhC.ttf",revision:null},{url:"assets/KaTeX_Size2-Regular-Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-DgpXs0kz.ttf",revision:null},{url:"assets/KaTeX_Size4-Regular-BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Size4-Regular-DWFBv043.ttf",revision:null},{url:"assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular-D3Ib7_Hf.ttf",revision:null},{url:"assets/lyq-BJVFmD1p.js",revision:null},{url:"assets/meihua-BPhQ9zC9.js",revision:null},{url:"assets/meihua1-DHOKJkzi.js",revision:null},{url:"assets/meihua10-D93zFmuY.js",revision:null},{url:"assets/meihua11-CE9yEU--.js",revision:null},{url:"assets/meihua2-C8iBCg9Q.js",revision:null},{url:"assets/meihua3-5CtHCH0Z.js",revision:null},{url:"assets/meihua4-CthRoiU7.js",revision:null},{url:"assets/meihua5-Dm5CitW7.js",revision:null},{url:"assets/meihua6-isO03P-_.js",revision:null},{url:"assets/meihua7-BYtKCnLj.js",revision:null},{url:"assets/meihua8-CMI2Cbxg.js",revision:null},{url:"assets/meihua9-CEBBBL3o.js",revision:null},{url:"assets/none-DLM1AMsD.jpg",revision:null},{url:"assets/novelai-DqC710it.js",revision:null},{url:"assets/novelai1-Dzul6-rF.js",revision:null},{url:"assets/novelai2-DIvCUEE6.js",revision:null},{url:"assets/ohook-B59dZWPO.js",revision:null},{url:"assets/post-Brcn6oFG.js",revision:null},{url:"assets/post-cKaOstcd.js",revision:null},{url:"assets/post-CmfduE8N.js",revision:null},{url:"assets/post-DDxwAI70.css",revision:null},{url:"assets/posts-JrOhbtz0.js",revision:null},{url:"assets/projects-Cpy83cps.js",revision:null},{url:"assets/projects-Dti-qd8N.css",revision:null},{url:"assets/reader-zdET0nde.js",revision:null},{url:"assets/route-block-B_A1xBdJ.js",revision:null},{url:"assets/sidebar-bg-img-mp54gEws.webp",revision:null},{url:"assets/site-BuuOQHEC.js",revision:null},{url:"assets/source1-Lwg8BMRl.js",revision:null},{url:"assets/source2-Ap-z2und.js",revision:null},{url:"assets/tags-BC1vAD5V.js",revision:null},{url:"assets/tools-DkXlytjk.js",revision:null},{url:"assets/typora-CJgdlhVJ.js",revision:null},{url:"assets/uptime-DNOkopit.js",revision:null},{url:"assets/uptimeapi-a58yCb3x.js",revision:null},{url:"assets/ValaxyMain-BHXg_53O.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang-rO2ek-hw.js",revision:null},{url:"assets/view-transition-IkvUpX_n.css",revision:null},{url:"assets/virtual_pwa-register-WnFBvWUH.js",revision:null},{url:"assets/welcome-DWsO5g-R.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"assets/YunAlgoliaSearch-CvcFmv9k.js",revision:null},{url:"assets/YunComment-BEShyGPw.css",revision:null},{url:"assets/YunComment.vue_vue_type_style_index_0_lang-j_3TVr0F.js",revision:null},{url:"assets/YunGallery-CahqRi7m.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang-YENTgUEk.js",revision:null},{url:"assets/YunPostCollapse-CLDXGmA8.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang-Cxi__Q4j.js",revision:null},{url:"assets/YunPostList-BfWGcc9d.css",revision:null},{url:"assets/YunPostList.vue_vue_type_script_setup_true_lang-C37T5jvl.js",revision:null},{url:"assets/YunPostMeta-DCrVMfuT.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang-DxQBQ_VA.js",revision:null},{url:"assets/YunSponsor-BJOC5yvc.css",revision:null},{url:"assets/YunSponsor.vue_vue_type_style_index_0_lang-Bva2WWJk.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"98083487a75c9f9abf439ef9107fea9a"},{url:"live2d-assets/live2d.min.js",revision:"97a06b32b6e6bee8db7aa128b99b7cc2"},{url:"live2d-assets/waifu-tips.js",revision:"6ff120ccc164e44397a62d9c422569ed"},{url:"live2d-assets/waifu.css",revision:"68aac09b836a1ca1c138b74f46835459"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"20e471102cdb5dd71038ff861dec552d"},{url:"screenshot-pc.jpg",revision:"a04a1b497a3ad69c60224caa37823dbd"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"manifest.webmanifest",revision:"a81d024f8c1ddb17be49fff1cf645e3a"}],{ignoreURLParametersMatching:[/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.(googleapis|gstatic).com\/.*\//,new s.CacheFirst({cacheName:"network-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
