if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-23dc0c55"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_.DAudRsGX.js",revision:null},{url:"assets/_page_.C9VbqL55.js",revision:null},{url:"assets/404.BVla_BTh.css",revision:null},{url:"assets/404.CBgWjJM4.js",revision:null},{url:"assets/404.CnYYCH9X.js",revision:null},{url:"assets/404.CvtddbKG.js",revision:null},{url:"assets/404.DmmtRs1_.css",revision:null},{url:"assets/albums.B673jvUl.css",revision:null},{url:"assets/albums.C_v23L6u.js",revision:null},{url:"assets/animation-in.BI4ri2UH.css",revision:null},{url:"assets/animation.BmKSPrMr.js",revision:null},{url:"assets/animation.SIPhxv6W.js",revision:null},{url:"assets/app.BxJ6ZHlU.css",revision:null},{url:"assets/app.CrFOBv7d.js",revision:null},{url:"assets/archives.zgNTVlGm.js",revision:null},{url:"assets/back.D2JuJx7q.js",revision:null},{url:"assets/baodao.BNgkkfxk.js",revision:null},{url:"assets/bg-img.kXdNMxcF.jpg",revision:null},{url:"assets/bilibili-bangumi.entry.B5NM4Sj7.js",revision:null},{url:"assets/boke1.Bk5dORgV.js",revision:null},{url:"assets/boke2.Tv9theF8.js",revision:null},{url:"assets/boke3.BdAPmibs.js",revision:null},{url:"assets/boke4.Dd1cl_9M.js",revision:null},{url:"assets/boke5.D0gjixrC.js",revision:null},{url:"assets/byjg1.E0UKXr3l.js",revision:null},{url:"assets/byjg2.C_hXNVR1.js",revision:null},{url:"assets/byjg3.FnfCrlzZ.js",revision:null},{url:"assets/categories.hS_OnfMy.js",revision:null},{url:"assets/cdn.CJSTMpEL.js",revision:null},{url:"assets/chunks/@vueuse/motion.B6QLFVDT.js",revision:null},{url:"assets/chunks/dayjs.Byk5cVHE.js",revision:null},{url:"assets/chunks/nprogress.CtHgZ4sh.js",revision:null},{url:"assets/chunks/pinia.QvNvUEey.js",revision:null},{url:"assets/chunks/vue-i18n.Ba_ImPm7.js",revision:null},{url:"assets/chunks/vue-router.B1ID2bcz.js",revision:null},{url:"assets/collection.Bd0MGTpD.js",revision:null},{url:"assets/collections.C2A1FcYT.js",revision:null},{url:"assets/config.CanySWxG.js",revision:null},{url:"assets/domain.Bbdx1LKQ.js",revision:null},{url:"assets/email.MhATW1cS.js",revision:null},{url:"assets/empty.CRRfcP1w.js",revision:null},{url:"assets/faq.C13yVtjK.js",revision:null},{url:"assets/framework.Cw2a0mOx.js",revision:null},{url:"assets/gallery.QI_E3xuE.js",revision:null},{url:"assets/ghproxy.CmIfKu89.js",revision:null},{url:"assets/home.BMUsaBIT.css",revision:null},{url:"assets/home.DhTJGG7O.js",revision:null},{url:"assets/image.3VSPdOsL.js",revision:null},{url:"assets/index.4G4OkhMt.js",revision:null},{url:"assets/index.B9_H0MSL.js",revision:null},{url:"assets/index.BE87yPaS.js",revision:null},{url:"assets/index.Bjv_7yqg.js",revision:null},{url:"assets/index.BNtxu-9i.js",revision:null},{url:"assets/index.BodWNori.js",revision:null},{url:"assets/index.BRXJGymZ.js",revision:null},{url:"assets/index.Bw3W1_9a.js",revision:null},{url:"assets/index.C5okkQwF.js",revision:null},{url:"assets/index.Cch_mg4D.css",revision:null},{url:"assets/index.CLWhYDdP.js",revision:null},{url:"assets/index.CwBh-6FM.js",revision:null},{url:"assets/index.DA4gD1dy.js",revision:null},{url:"assets/index.DfXt1eUW.css",revision:null},{url:"assets/index.nxb6oYgW.js",revision:null},{url:"assets/index.SnbFJCFJ.js",revision:null},{url:"assets/KaTeX_AMS-Regular.BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular.DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_AMS-Regular.DRggAlZN.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold.ATXxdsX0.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold.BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold.Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular.CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular.Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular.wX97UBjC.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold.BdnERNNW.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold.BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold.CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular.CB_wures.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Regular.CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular.Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold.Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold.Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-Bold.waoOVXN0.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic.DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic.DzxPMmG6.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic.SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic.3WenGoN9.ttf",revision:null},{url:"assets/KaTeX_Main-Italic.BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic.NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular.B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular.Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Main-Regular.ypZvNtVU.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic.B3XSjfu4.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic.CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic.iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic.DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic.flOr_0UB.ttf",revision:null},{url:"assets/KaTeX_Math-Italic.t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold.CFMepnvq.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Bold.D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold.DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic.C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic.DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic.YYjJ1zSn.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular.BNo7hRIc.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular.CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular.DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular.C5JkGWo-.ttf",revision:null},{url:"assets/KaTeX_Script-Regular.D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular.D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular.C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular.Dbsnue_I.ttf",revision:null},{url:"assets/KaTeX_Size1-Regular.mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular.B7gKUWhC.ttf",revision:null},{url:"assets/KaTeX_Size2-Regular.Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular.oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular.CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size3-Regular.DgpXs0kz.ttf",revision:null},{url:"assets/KaTeX_Size4-Regular.BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular.Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Size4-Regular.DWFBv043.ttf",revision:null},{url:"assets/KaTeX_Typewriter-Regular.C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular.CO6r4hn1.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular.D3Ib7_Hf.ttf",revision:null},{url:"assets/lyq.aplfYRBr.js",revision:null},{url:"assets/meihua.DVpvojOM.js",revision:null},{url:"assets/meihua1.CPvso-81.js",revision:null},{url:"assets/meihua10.vgxumHrn.js",revision:null},{url:"assets/meihua11.tlo3ntxA.js",revision:null},{url:"assets/meihua2.6P-2TOvx.js",revision:null},{url:"assets/meihua3.0ehckMol.js",revision:null},{url:"assets/meihua4.40BIvFxL.js",revision:null},{url:"assets/meihua5.CFjgqJOl.js",revision:null},{url:"assets/meihua6.Gnv5vsaa.js",revision:null},{url:"assets/meihua7.CZ_2RSos.js",revision:null},{url:"assets/meihua8.BxwPpvdQ.js",revision:null},{url:"assets/meihua9.BLwEx_A-.js",revision:null},{url:"assets/none.DLM1AMsD.jpg",revision:null},{url:"assets/novelai.BNgSwovX.js",revision:null},{url:"assets/novelai1.LL3ucLvt.js",revision:null},{url:"assets/novelai2.BaVXF2uq.js",revision:null},{url:"assets/ohook.CmO3Zc7s.js",revision:null},{url:"assets/post.DaVQi4fu.js",revision:null},{url:"assets/post.DDxwAI70.css",revision:null},{url:"assets/post.Dqk4bneQ.js",revision:null},{url:"assets/post.Dz7qEX69.js",revision:null},{url:"assets/posts.Pxm2BDUl.js",revision:null},{url:"assets/projects.6L7uepi4.js",revision:null},{url:"assets/projects.Dti-qd8N.css",revision:null},{url:"assets/reader.DACUkDgv.js",revision:null},{url:"assets/sidebar-bg-img.mp54gEws.webp",revision:null},{url:"assets/site.Cjo1ytKK.js",revision:null},{url:"assets/source1.DkGKpI76.js",revision:null},{url:"assets/source2.BJOHJ50A.js",revision:null},{url:"assets/tags.ejscVzZx.js",revision:null},{url:"assets/tools.D6oetpAm.js",revision:null},{url:"assets/typora.B1LPCyfz.js",revision:null},{url:"assets/uptime.czUkfXsq.js",revision:null},{url:"assets/uptimeapi.zY5CulHQ.js",revision:null},{url:"assets/ValaxyMain.BHXg_53O.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang.Q94eKHQj.js",revision:null},{url:"assets/view-transition.IkvUpX_n.css",revision:null},{url:"assets/virtual_pwa-register.CWzOjQ5p.js",revision:null},{url:"assets/welcome.CEFy0svx.js",revision:null},{url:"assets/workbox-window.prod.es5.D5gOYdM7.js",revision:null},{url:"assets/YunAlgoliaSearch.BcdrP0Qr.js",revision:null},{url:"assets/YunComment.DzjBUQHR.css",revision:null},{url:"assets/YunComment.vue_vue_type_style_index_0_lang.D8rHwoqS.js",revision:null},{url:"assets/YunGallery.B9GSLs1_.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang.CuX1zWj-.js",revision:null},{url:"assets/YunPostCollapse.CLDXGmA8.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang.CnS8OD1z.js",revision:null},{url:"assets/YunPostList.BfWGcc9d.css",revision:null},{url:"assets/YunPostList.vue_vue_type_script_setup_true_lang.BEv3a4jM.js",revision:null},{url:"assets/YunPostMeta.DCrVMfuT.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang.D1jr4ZwK.js",revision:null},{url:"assets/YunSponsor.BJOC5yvc.css",revision:null},{url:"assets/YunSponsor.vue_vue_type_style_index_0_lang.BRRMu3cb.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"070b51e516e12f8ae343e8033abedb84"},{url:"live2d-assets/live2d.min.js",revision:"97a06b32b6e6bee8db7aa128b99b7cc2"},{url:"live2d-assets/waifu-tips.js",revision:"6ff120ccc164e44397a62d9c422569ed"},{url:"live2d-assets/waifu.css",revision:"68aac09b836a1ca1c138b74f46835459"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"20e471102cdb5dd71038ff861dec552d"},{url:"screenshot-pc.jpg",revision:"a04a1b497a3ad69c60224caa37823dbd"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"manifest.webmanifest",revision:"a81d024f8c1ddb17be49fff1cf645e3a"}],{ignoreURLParametersMatching:[/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.(googleapis|gstatic).com\/.*\//,new s.CacheFirst({cacheName:"network-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
