if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-23dc0c55"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_.Dpu7xHc8.js",revision:null},{url:"assets/_page_.BKwPsUTt.js",revision:null},{url:"assets/404.Bano3O4q.js",revision:null},{url:"assets/404.BVla_BTh.css",revision:null},{url:"assets/404.cax6rURD.js",revision:null},{url:"assets/404.CCb-E2CJ.js",revision:null},{url:"assets/404.DFYvMOND.css",revision:null},{url:"assets/albums.B673jvUl.css",revision:null},{url:"assets/albums.BE7qObWK.js",revision:null},{url:"assets/animation-in.BI4ri2UH.css",revision:null},{url:"assets/animation.BmKSPrMr.js",revision:null},{url:"assets/animation.CY0ZpF97.js",revision:null},{url:"assets/app.B501e8nb.css",revision:null},{url:"assets/app.CsYAvFvY.js",revision:null},{url:"assets/archives.B2Rqhiz2.js",revision:null},{url:"assets/back.DP4OcMMV.js",revision:null},{url:"assets/baodao.7KUEaqdA.js",revision:null},{url:"assets/bg-img.kXdNMxcF.jpg",revision:null},{url:"assets/bilibili-bangumi.entry.DfmA1dpt.js",revision:null},{url:"assets/boke1.CQrK3tO7.js",revision:null},{url:"assets/boke2.yyZJPVN3.js",revision:null},{url:"assets/boke3.CB3p6BHk.js",revision:null},{url:"assets/boke4.5LKx5d3m.js",revision:null},{url:"assets/boke5.DM4qEkcf.js",revision:null},{url:"assets/byjg1.Doc1afQF.js",revision:null},{url:"assets/byjg2.A3DH6M9o.js",revision:null},{url:"assets/byjg3.WQwcmGm7.js",revision:null},{url:"assets/categories.BysKuQQd.js",revision:null},{url:"assets/cdn.D3VbDwTa.js",revision:null},{url:"assets/chunks/@vueuse/motion.BltUbIEt.js",revision:null},{url:"assets/chunks/dayjs.Byk5cVHE.js",revision:null},{url:"assets/chunks/nprogress.Bmgvrz1e.js",revision:null},{url:"assets/chunks/pinia.BGsVwCM1.js",revision:null},{url:"assets/chunks/vue-i18n.CnBeAbHo.js",revision:null},{url:"assets/chunks/vue-router.BMqkYW5q.js",revision:null},{url:"assets/collection.CVmM1nBB.js",revision:null},{url:"assets/collections.7dluqLIU.js",revision:null},{url:"assets/config.Dcw5sGMb.js",revision:null},{url:"assets/domain.C7pCfTGv.js",revision:null},{url:"assets/email.B8KgjCey.js",revision:null},{url:"assets/empty.CCi2mFcd.js",revision:null},{url:"assets/faq.C_qWeyaw.js",revision:null},{url:"assets/framework.Wgu5ILjI.js",revision:null},{url:"assets/gallery.C4Ojhtli.js",revision:null},{url:"assets/ghproxy.DilNrfwe.js",revision:null},{url:"assets/home.Cs-xemqc.js",revision:null},{url:"assets/home.DHm-dKCP.css",revision:null},{url:"assets/image.oTtRn76u.js",revision:null},{url:"assets/index.B9BXas1m.js",revision:null},{url:"assets/index.bPL_skA5.js",revision:null},{url:"assets/index.BRXJGymZ.js",revision:null},{url:"assets/index.BTTgcVXy.js",revision:null},{url:"assets/index.ByBZjaDB.js",revision:null},{url:"assets/index.C-8myGkE.js",revision:null},{url:"assets/index.C5okkQwF.js",revision:null},{url:"assets/index.Cch_mg4D.css",revision:null},{url:"assets/index.DbY3b6qE.js",revision:null},{url:"assets/index.DCM2PWBq.js",revision:null},{url:"assets/index.Ddj0WzZY.js",revision:null},{url:"assets/index.DfXt1eUW.css",revision:null},{url:"assets/index.DGUZhyNh.js",revision:null},{url:"assets/index.DLRz5YUh.js",revision:null},{url:"assets/index.DwINr2Um.js",revision:null},{url:"assets/index.tdksJYn-.js",revision:null},{url:"assets/KaTeX_AMS-Regular.BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular.DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_AMS-Regular.DRggAlZN.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold.ATXxdsX0.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold.BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold.Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular.CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular.Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular.wX97UBjC.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold.BdnERNNW.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold.BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold.CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular.CB_wures.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Regular.CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular.Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold.Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold.Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-Bold.waoOVXN0.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic.DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic.DzxPMmG6.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic.SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic.3WenGoN9.ttf",revision:null},{url:"assets/KaTeX_Main-Italic.BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic.NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular.B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular.Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Main-Regular.ypZvNtVU.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic.B3XSjfu4.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic.CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic.iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic.DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic.flOr_0UB.ttf",revision:null},{url:"assets/KaTeX_Math-Italic.t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold.CFMepnvq.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Bold.D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold.DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic.C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic.DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic.YYjJ1zSn.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular.BNo7hRIc.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular.CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular.DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular.C5JkGWo-.ttf",revision:null},{url:"assets/KaTeX_Script-Regular.D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular.D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular.C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular.Dbsnue_I.ttf",revision:null},{url:"assets/KaTeX_Size1-Regular.mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular.B7gKUWhC.ttf",revision:null},{url:"assets/KaTeX_Size2-Regular.Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular.oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular.CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size3-Regular.DgpXs0kz.ttf",revision:null},{url:"assets/KaTeX_Size4-Regular.BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular.Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Size4-Regular.DWFBv043.ttf",revision:null},{url:"assets/KaTeX_Typewriter-Regular.C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular.CO6r4hn1.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular.D3Ib7_Hf.ttf",revision:null},{url:"assets/lyq.DS_fHEr4.js",revision:null},{url:"assets/meihua.Ba6Yd0-I.js",revision:null},{url:"assets/meihua1.BXdYdQUQ.js",revision:null},{url:"assets/meihua10.DULq5K1S.js",revision:null},{url:"assets/meihua11.C6r6Whia.js",revision:null},{url:"assets/meihua2.BpCWkSLb.js",revision:null},{url:"assets/meihua3.BZ2Islj5.js",revision:null},{url:"assets/meihua4.BYrctZ7U.js",revision:null},{url:"assets/meihua5.B3bH5N0R.js",revision:null},{url:"assets/meihua6.CJVLbUGC.js",revision:null},{url:"assets/meihua7.3Ge5_N8n.js",revision:null},{url:"assets/meihua8.DqPPKxGF.js",revision:null},{url:"assets/meihua9.CbzZ0Bud.js",revision:null},{url:"assets/none.DLM1AMsD.jpg",revision:null},{url:"assets/novelai.C36sQRIZ.js",revision:null},{url:"assets/novelai1.Drd1SNBa.js",revision:null},{url:"assets/novelai2.DFgPHYCn.js",revision:null},{url:"assets/ohook.D7ekId0b.js",revision:null},{url:"assets/post.CQ-cUdTq.js",revision:null},{url:"assets/post.Cy43B2yr.js",revision:null},{url:"assets/post.DDxwAI70.css",revision:null},{url:"assets/post.slfDwiKD.js",revision:null},{url:"assets/posts.wzzTjTIS.js",revision:null},{url:"assets/projects.BGLbrrRe.js",revision:null},{url:"assets/projects.Dti-qd8N.css",revision:null},{url:"assets/reader.DzyqNtQZ.js",revision:null},{url:"assets/sidebar-bg-img.mp54gEws.webp",revision:null},{url:"assets/site.CYo8QbMe.js",revision:null},{url:"assets/source1.DVizhcwb.js",revision:null},{url:"assets/source2.CwokoXmO.js",revision:null},{url:"assets/tags.DdOlQUjk.js",revision:null},{url:"assets/tools.CJg9uaEl.js",revision:null},{url:"assets/typora.B_rYABuq.js",revision:null},{url:"assets/uptime.BiopLph1.js",revision:null},{url:"assets/uptimeapi.DghFDl9y.js",revision:null},{url:"assets/ValaxyMain.BHXg_53O.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang.BQi-Xpv5.js",revision:null},{url:"assets/view-transition.IkvUpX_n.css",revision:null},{url:"assets/virtual_pwa-register.BLKRnSp5.js",revision:null},{url:"assets/welcome.BEwoPOM_.js",revision:null},{url:"assets/workbox-window.prod.es5.D5gOYdM7.js",revision:null},{url:"assets/YunAlgoliaSearch.5uwgLYQh.js",revision:null},{url:"assets/YunComment.Ca7aLmNc.css",revision:null},{url:"assets/YunComment.vue_vue_type_style_index_0_lang.BW9mSUYY.js",revision:null},{url:"assets/YunGallery.BAUTm2FR.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang.BE-4Vecm.js",revision:null},{url:"assets/YunPostCollapse.CLDXGmA8.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang.BDLGg8s8.js",revision:null},{url:"assets/YunPostList.BfWGcc9d.css",revision:null},{url:"assets/YunPostList.vue_vue_type_script_setup_true_lang.3GKx3WHS.js",revision:null},{url:"assets/YunPostMeta.DCrVMfuT.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang.CBJHaBFw.js",revision:null},{url:"assets/YunSponsor.BJOC5yvc.css",revision:null},{url:"assets/YunSponsor.vue_vue_type_style_index_0_lang.g8Da5jDK.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"c55a621091164c84373ccafb806864de"},{url:"live2d-assets/live2d.min.js",revision:"97a06b32b6e6bee8db7aa128b99b7cc2"},{url:"live2d-assets/waifu-tips.js",revision:"6ff120ccc164e44397a62d9c422569ed"},{url:"live2d-assets/waifu.css",revision:"68aac09b836a1ca1c138b74f46835459"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"20e471102cdb5dd71038ff861dec552d"},{url:"screenshot-pc.jpg",revision:"a04a1b497a3ad69c60224caa37823dbd"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"manifest.webmanifest",revision:"243bbc24210b55f503dee908e9a2260b"}],{ignoreURLParametersMatching:[/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.(googleapis|gstatic).com\/.*\//,new s.CacheFirst({cacheName:"network-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
