if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-23dc0c55"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_.CfLl1EJY.js",revision:null},{url:"assets/_page_.DM8-7JcM.js",revision:null},{url:"assets/404.BVla_BTh.css",revision:null},{url:"assets/404.CqxkaCI9.css",revision:null},{url:"assets/404.DCWs5AHQ.js",revision:null},{url:"assets/404.DyeH5e84.js",revision:null},{url:"assets/404.TRYZhFvW.js",revision:null},{url:"assets/albums.B673jvUl.css",revision:null},{url:"assets/albums.D99QHj3h.js",revision:null},{url:"assets/animation-in.BI4ri2UH.css",revision:null},{url:"assets/animation.CoxzA1iL.js",revision:null},{url:"assets/animation.OzTV6V96.js",revision:null},{url:"assets/app.CeNNWjs1.css",revision:null},{url:"assets/app.DRwgyNMq.js",revision:null},{url:"assets/archives.Nu_ojH-J.js",revision:null},{url:"assets/back.CM3WVL1f.js",revision:null},{url:"assets/baodao.DCCwIQQK.js",revision:null},{url:"assets/bg-img.kXdNMxcF.jpg",revision:null},{url:"assets/bilibili-bangumi.entry.CFNzrvVW.js",revision:null},{url:"assets/boke1.BXTk8EsE.js",revision:null},{url:"assets/boke2.CIhtIpVb.js",revision:null},{url:"assets/boke3.2h7OffUI.js",revision:null},{url:"assets/boke4.BrOq47VG.js",revision:null},{url:"assets/boke5.DD_WT7LQ.js",revision:null},{url:"assets/byjg1.CPyjfx4n.js",revision:null},{url:"assets/byjg2.DwYKKtx7.js",revision:null},{url:"assets/byjg3.CBPmobVY.js",revision:null},{url:"assets/categories.BxJnx-8c.js",revision:null},{url:"assets/cdn.DEbPHr58.js",revision:null},{url:"assets/chunks/@vueuse/motion.DbQGOUK4.js",revision:null},{url:"assets/chunks/dayjs.Byk5cVHE.js",revision:null},{url:"assets/chunks/nprogress.DPUY87b7.js",revision:null},{url:"assets/chunks/pinia.DTHDCI7S.js",revision:null},{url:"assets/chunks/vue-i18n.BFV6-31X.js",revision:null},{url:"assets/chunks/vue-router.B9QTgzBd.js",revision:null},{url:"assets/collection.OD9ZZnLl.js",revision:null},{url:"assets/collections.Cr1RYh0D.js",revision:null},{url:"assets/config.DFrpsGPa.js",revision:null},{url:"assets/domain.BPU-NEQs.js",revision:null},{url:"assets/email.DFvBBZmC.js",revision:null},{url:"assets/empty.BRMqD15S.js",revision:null},{url:"assets/faq.ClpZ_WXo.js",revision:null},{url:"assets/framework.C8TEEDY2.js",revision:null},{url:"assets/gallery.bpbTT1Bm.js",revision:null},{url:"assets/ghproxy.B9OzAEc2.js",revision:null},{url:"assets/home.C3LLbi_F.js",revision:null},{url:"assets/home.Dqw3Zrd8.css",revision:null},{url:"assets/image.BNECiRgV.js",revision:null},{url:"assets/index.B9qjxfEa.js",revision:null},{url:"assets/index.Bbm-AZTs.js",revision:null},{url:"assets/index.bqGKrMDu.js",revision:null},{url:"assets/index.C5okkQwF.js",revision:null},{url:"assets/index.CbN3LfzU.js",revision:null},{url:"assets/index.Cch_mg4D.css",revision:null},{url:"assets/index.CqOzOlIQ.js",revision:null},{url:"assets/index.D2gdjCfL.js",revision:null},{url:"assets/index.DfXt1eUW.css",revision:null},{url:"assets/index.Dj-5AgB3.js",revision:null},{url:"assets/index.DRUNR0Ze.js",revision:null},{url:"assets/index.ijm_Z3DG.js",revision:null},{url:"assets/index.j2iHfQ3D.js",revision:null},{url:"assets/index.Umg5l61O.js",revision:null},{url:"assets/index.Ursqo5Pz.js",revision:null},{url:"assets/index.x8TNrC4q.js",revision:null},{url:"assets/KaTeX_AMS-Regular.BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular.DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_AMS-Regular.DRggAlZN.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold.ATXxdsX0.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold.BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold.Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular.CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular.Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular.wX97UBjC.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold.BdnERNNW.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold.BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold.CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular.CB_wures.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Regular.CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular.Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold.Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold.Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-Bold.waoOVXN0.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic.DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic.DzxPMmG6.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic.SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic.3WenGoN9.ttf",revision:null},{url:"assets/KaTeX_Main-Italic.BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic.NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular.B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular.Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Main-Regular.ypZvNtVU.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic.B3XSjfu4.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic.CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic.iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic.DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic.flOr_0UB.ttf",revision:null},{url:"assets/KaTeX_Math-Italic.t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold.CFMepnvq.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Bold.D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold.DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic.C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic.DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic.YYjJ1zSn.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular.BNo7hRIc.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular.CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular.DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular.C5JkGWo-.ttf",revision:null},{url:"assets/KaTeX_Script-Regular.D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular.D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular.C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular.Dbsnue_I.ttf",revision:null},{url:"assets/KaTeX_Size1-Regular.mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular.B7gKUWhC.ttf",revision:null},{url:"assets/KaTeX_Size2-Regular.Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular.oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular.CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size3-Regular.DgpXs0kz.ttf",revision:null},{url:"assets/KaTeX_Size4-Regular.BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular.Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Size4-Regular.DWFBv043.ttf",revision:null},{url:"assets/KaTeX_Typewriter-Regular.C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular.CO6r4hn1.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular.D3Ib7_Hf.ttf",revision:null},{url:"assets/lyq.D-gvqYaR.js",revision:null},{url:"assets/meihua.DHqMU2iE.js",revision:null},{url:"assets/meihua1.D0KLwbNE.js",revision:null},{url:"assets/meihua10.r2H8aj8o.js",revision:null},{url:"assets/meihua11.Ekklaqae.js",revision:null},{url:"assets/meihua2.CqcwmHYi.js",revision:null},{url:"assets/meihua3.Btjcn1AB.js",revision:null},{url:"assets/meihua4.DA9dPS4n.js",revision:null},{url:"assets/meihua5.CsyXK0NN.js",revision:null},{url:"assets/meihua6.C-7jNVy6.js",revision:null},{url:"assets/meihua7.CvyeTAu7.js",revision:null},{url:"assets/meihua8.BE_Xglxq.js",revision:null},{url:"assets/meihua9.CRy85JFB.js",revision:null},{url:"assets/none.DLM1AMsD.jpg",revision:null},{url:"assets/novelai.DKn2TKdV.js",revision:null},{url:"assets/novelai1.CwWEwqUv.js",revision:null},{url:"assets/novelai2.nzeWTLzv.js",revision:null},{url:"assets/ohook.BtiTBR5k.js",revision:null},{url:"assets/post.B_b28_uu.js",revision:null},{url:"assets/post.B6ZVfgdK.js",revision:null},{url:"assets/post.DDxwAI70.css",revision:null},{url:"assets/post.YF7ySgKL.js",revision:null},{url:"assets/posts.nrU7GwaD.js",revision:null},{url:"assets/projects.BNpoXtRQ.js",revision:null},{url:"assets/projects.Dti-qd8N.css",revision:null},{url:"assets/reader.Dbvpgxhm.js",revision:null},{url:"assets/sidebar-bg-img.mp54gEws.webp",revision:null},{url:"assets/site.BFLaMhPA.js",revision:null},{url:"assets/source1.CXl-kXGM.js",revision:null},{url:"assets/source2.HpGsDI1C.js",revision:null},{url:"assets/tags.a2Dm_0mb.js",revision:null},{url:"assets/tools.CUV8BFKx.js",revision:null},{url:"assets/typora.BEAuZ1N0.js",revision:null},{url:"assets/uptime.Br4VQmzK.js",revision:null},{url:"assets/uptimeapi.CNFZrL2x.js",revision:null},{url:"assets/ValaxyMain.BHXg_53O.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang.e9jJalqa.js",revision:null},{url:"assets/view-transition.IkvUpX_n.css",revision:null},{url:"assets/virtual_pwa-register.BKD4Ai6t.js",revision:null},{url:"assets/welcome.CmOFhYj3.js",revision:null},{url:"assets/workbox-window.prod.es5.D5gOYdM7.js",revision:null},{url:"assets/YunAlgoliaSearch.CZxHl_18.js",revision:null},{url:"assets/YunComment.CCT419jz.css",revision:null},{url:"assets/YunComment.vue_vue_type_style_index_0_lang.bIxahVwC.js",revision:null},{url:"assets/YunGallery.CmWQoZ8K.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang.D6ugfNlH.js",revision:null},{url:"assets/YunPostCollapse.CLDXGmA8.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang.DuC0B22s.js",revision:null},{url:"assets/YunPostList.BfWGcc9d.css",revision:null},{url:"assets/YunPostList.vue_vue_type_script_setup_true_lang.CDIJFf7C.js",revision:null},{url:"assets/YunPostMeta.DCrVMfuT.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang.DNWYeghd.js",revision:null},{url:"assets/YunSponsor.BJOC5yvc.css",revision:null},{url:"assets/YunSponsor.vue_vue_type_style_index_0_lang.CWFTZbIg.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"a5b02157915e342c87b8024602242607"},{url:"live2d-assets/live2d.min.js",revision:"97a06b32b6e6bee8db7aa128b99b7cc2"},{url:"live2d-assets/waifu-tips.js",revision:"6ff120ccc164e44397a62d9c422569ed"},{url:"live2d-assets/waifu.css",revision:"68aac09b836a1ca1c138b74f46835459"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"20e471102cdb5dd71038ff861dec552d"},{url:"screenshot-pc.jpg",revision:"a04a1b497a3ad69c60224caa37823dbd"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"manifest.webmanifest",revision:"a81d024f8c1ddb17be49fff1cf645e3a"}],{ignoreURLParametersMatching:[/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.(googleapis|gstatic).com\/.*\//,new s.CacheFirst({cacheName:"network-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
