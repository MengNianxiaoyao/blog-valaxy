if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-23dc0c55"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_.XjHNnjE-.js",revision:null},{url:"assets/_page_.CCgzTA80.js",revision:null},{url:"assets/404.BVla_BTh.css",revision:null},{url:"assets/404.CdO6lMgv.js",revision:null},{url:"assets/404.DXo8DmXT.css",revision:null},{url:"assets/404.tg1_J_hY.js",revision:null},{url:"assets/404.whdUfn_1.js",revision:null},{url:"assets/albums.B673jvUl.css",revision:null},{url:"assets/albums.CSFTPlAV.js",revision:null},{url:"assets/animation-in.BI4ri2UH.css",revision:null},{url:"assets/animation.BmKSPrMr.js",revision:null},{url:"assets/animation.CH3E28wh.js",revision:null},{url:"assets/app.BTlyRoZM.css",revision:null},{url:"assets/app.CH62Uav3.js",revision:null},{url:"assets/archives.B3nf5kln.js",revision:null},{url:"assets/back.VsSpQ9tQ.js",revision:null},{url:"assets/baodao.vxAAcbA8.js",revision:null},{url:"assets/bg-img.kXdNMxcF.jpg",revision:null},{url:"assets/bilibili-bangumi.entry.DfmA1dpt.js",revision:null},{url:"assets/boke1.DIHWoExr.js",revision:null},{url:"assets/boke2.C-7J_JyN.js",revision:null},{url:"assets/boke3.6lQbDRA3.js",revision:null},{url:"assets/boke4.DdwKRfug.js",revision:null},{url:"assets/boke5.Q4FjYSak.js",revision:null},{url:"assets/byjg1.DwLOCWD4.js",revision:null},{url:"assets/byjg2.DELWcnhO.js",revision:null},{url:"assets/byjg3.ChLfP_b8.js",revision:null},{url:"assets/categories.Bac4aJOA.js",revision:null},{url:"assets/cdn.BnqjAEU5.js",revision:null},{url:"assets/chunks/@vueuse/motion.BltUbIEt.js",revision:null},{url:"assets/chunks/dayjs.Byk5cVHE.js",revision:null},{url:"assets/chunks/nprogress.Bmgvrz1e.js",revision:null},{url:"assets/chunks/pinia.BGsVwCM1.js",revision:null},{url:"assets/chunks/vue-i18n.CibY5xOG.js",revision:null},{url:"assets/chunks/vue-router.CbhtFUbe.js",revision:null},{url:"assets/collection.BoqocnKz.js",revision:null},{url:"assets/collections.Craz8SuX.js",revision:null},{url:"assets/config.BHMYojFi.js",revision:null},{url:"assets/domain.ERiqZckD.js",revision:null},{url:"assets/email.0_0GlFnS.js",revision:null},{url:"assets/empty.CCi2mFcd.js",revision:null},{url:"assets/faq.DfL78Wai.js",revision:null},{url:"assets/framework.Wgu5ILjI.js",revision:null},{url:"assets/gallery.B9qTXQlZ.js",revision:null},{url:"assets/ghproxy.BFMhzqy5.js",revision:null},{url:"assets/home.B0W6YQCT.js",revision:null},{url:"assets/home.CdbHDXWN.css",revision:null},{url:"assets/image.CnlHKYw5.js",revision:null},{url:"assets/index.BF_8k1ju.js",revision:null},{url:"assets/index.BRXJGymZ.js",revision:null},{url:"assets/index.C4qLGdMX.js",revision:null},{url:"assets/index.C5bGYg_9.js",revision:null},{url:"assets/index.C5okkQwF.js",revision:null},{url:"assets/index.Cch_mg4D.css",revision:null},{url:"assets/index.Cm5ZtGZr.js",revision:null},{url:"assets/index.D1u-thTF.js",revision:null},{url:"assets/index.DCM2PWBq.js",revision:null},{url:"assets/index.DdthgyFy.js",revision:null},{url:"assets/index.DfXt1eUW.css",revision:null},{url:"assets/index.fHeRd0qj.js",revision:null},{url:"assets/index.LU3cc-F3.js",revision:null},{url:"assets/index.Qa8hgElZ.js",revision:null},{url:"assets/index.QBqJUHST.js",revision:null},{url:"assets/index.S85fo_5N.js",revision:null},{url:"assets/KaTeX_AMS-Regular.BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular.DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_AMS-Regular.DRggAlZN.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold.ATXxdsX0.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold.BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold.Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular.CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular.Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular.wX97UBjC.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold.BdnERNNW.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold.BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold.CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular.CB_wures.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Regular.CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular.Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold.Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold.Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-Bold.waoOVXN0.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic.DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic.DzxPMmG6.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic.SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic.3WenGoN9.ttf",revision:null},{url:"assets/KaTeX_Main-Italic.BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic.NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular.B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular.Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Main-Regular.ypZvNtVU.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic.B3XSjfu4.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic.CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic.iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic.DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic.flOr_0UB.ttf",revision:null},{url:"assets/KaTeX_Math-Italic.t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold.CFMepnvq.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Bold.D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold.DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic.C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic.DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic.YYjJ1zSn.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular.BNo7hRIc.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular.CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular.DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular.C5JkGWo-.ttf",revision:null},{url:"assets/KaTeX_Script-Regular.D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular.D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular.C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular.Dbsnue_I.ttf",revision:null},{url:"assets/KaTeX_Size1-Regular.mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular.B7gKUWhC.ttf",revision:null},{url:"assets/KaTeX_Size2-Regular.Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular.oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular.CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size3-Regular.DgpXs0kz.ttf",revision:null},{url:"assets/KaTeX_Size4-Regular.BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular.Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Size4-Regular.DWFBv043.ttf",revision:null},{url:"assets/KaTeX_Typewriter-Regular.C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular.CO6r4hn1.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular.D3Ib7_Hf.ttf",revision:null},{url:"assets/lyq.K9YKV3nd.js",revision:null},{url:"assets/meihua.Ahc6yBWG.js",revision:null},{url:"assets/meihua1.CgFG1dU5.js",revision:null},{url:"assets/meihua10.wNlHg-Ak.js",revision:null},{url:"assets/meihua11.C2qOc4av.js",revision:null},{url:"assets/meihua2.C2UGuKcn.js",revision:null},{url:"assets/meihua3.DCmPZS69.js",revision:null},{url:"assets/meihua4.CKYOFN0W.js",revision:null},{url:"assets/meihua5.CAn1RJAP.js",revision:null},{url:"assets/meihua6.BB4mSv1q.js",revision:null},{url:"assets/meihua7.whanmudW.js",revision:null},{url:"assets/meihua8.CqaIv3P3.js",revision:null},{url:"assets/meihua9.BDpiCCOA.js",revision:null},{url:"assets/none.DLM1AMsD.jpg",revision:null},{url:"assets/novelai.CRIETYHA.js",revision:null},{url:"assets/novelai1.cIXbvfhm.js",revision:null},{url:"assets/novelai2.BNmiTo0i.js",revision:null},{url:"assets/ohook.B9nhUkiD.js",revision:null},{url:"assets/post.BYwFkOJI.js",revision:null},{url:"assets/post.CQ-cUdTq.js",revision:null},{url:"assets/post.CYfMCiPL.js",revision:null},{url:"assets/post.DDxwAI70.css",revision:null},{url:"assets/posts.Bt9pVpSs.js",revision:null},{url:"assets/projects.BQC-PW3W.js",revision:null},{url:"assets/projects.Dti-qd8N.css",revision:null},{url:"assets/reader.Y1BO2F80.js",revision:null},{url:"assets/sidebar-bg-img.mp54gEws.webp",revision:null},{url:"assets/site.anqh7_WX.js",revision:null},{url:"assets/source1.CTLOm1T2.js",revision:null},{url:"assets/source2.Q0jFrGt-.js",revision:null},{url:"assets/tags.nWV7rnx1.js",revision:null},{url:"assets/tools.Q-tdBM8m.js",revision:null},{url:"assets/typora.BtdDXZDw.js",revision:null},{url:"assets/uptime.By-jPnZI.js",revision:null},{url:"assets/uptimeapi.Rr7o5bsv.js",revision:null},{url:"assets/ValaxyMain.BHXg_53O.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang.C6K-Lsi9.js",revision:null},{url:"assets/view-transition.IkvUpX_n.css",revision:null},{url:"assets/virtual_pwa-register.BLKRnSp5.js",revision:null},{url:"assets/welcome.DWWbDlSI.js",revision:null},{url:"assets/workbox-window.prod.es5.D5gOYdM7.js",revision:null},{url:"assets/YunAlgoliaSearch.DaSd6ouV.js",revision:null},{url:"assets/YunComment.Jrg_E_v_.css",revision:null},{url:"assets/YunComment.vue_vue_type_style_index_0_lang.C9us0ddT.js",revision:null},{url:"assets/YunGallery.ChzdjCaI.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang.BE-4Vecm.js",revision:null},{url:"assets/YunPostCollapse.CLDXGmA8.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang.8oW3NvZg.js",revision:null},{url:"assets/YunPostList.BfWGcc9d.css",revision:null},{url:"assets/YunPostList.vue_vue_type_script_setup_true_lang.C-P5wjgm.js",revision:null},{url:"assets/YunPostMeta.DCrVMfuT.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang.DmI1P6rR.js",revision:null},{url:"assets/YunSponsor.BJOC5yvc.css",revision:null},{url:"assets/YunSponsor.vue_vue_type_style_index_0_lang.ChqFHEK8.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"f39d0c457d1a1d9235e1156e22e46a78"},{url:"live2d-assets/live2d.min.js",revision:"97a06b32b6e6bee8db7aa128b99b7cc2"},{url:"live2d-assets/waifu-tips.js",revision:"6ff120ccc164e44397a62d9c422569ed"},{url:"live2d-assets/waifu.css",revision:"68aac09b836a1ca1c138b74f46835459"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"20e471102cdb5dd71038ff861dec552d"},{url:"screenshot-pc.jpg",revision:"a04a1b497a3ad69c60224caa37823dbd"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"manifest.webmanifest",revision:"243bbc24210b55f503dee908e9a2260b"}],{ignoreURLParametersMatching:[/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.(googleapis|gstatic).com\/.*\//,new s.CacheFirst({cacheName:"network-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
