if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-23dc0c55"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_.DSrcBobV.js",revision:null},{url:"assets/_page_.DLrPWG82.js",revision:null},{url:"assets/404.B9UC0BSv.js",revision:null},{url:"assets/404.Bf84wU2t.js",revision:null},{url:"assets/404.Bg0QHNpw.js",revision:null},{url:"assets/404.BVla_BTh.css",revision:null},{url:"assets/404.DXo8DmXT.css",revision:null},{url:"assets/albums.B673jvUl.css",revision:null},{url:"assets/albums.DyuteoL3.js",revision:null},{url:"assets/animation-in.BI4ri2UH.css",revision:null},{url:"assets/animation.BmKSPrMr.js",revision:null},{url:"assets/animation.COOosqli.js",revision:null},{url:"assets/app.DYvuMBqD.js",revision:null},{url:"assets/app.wN8HJLU3.css",revision:null},{url:"assets/archives.BD3Z5AX8.js",revision:null},{url:"assets/back.DVHaND3o.js",revision:null},{url:"assets/baodao.DafYbr5V.js",revision:null},{url:"assets/bg-img.kXdNMxcF.jpg",revision:null},{url:"assets/bilibili-bangumi.entry.DfmA1dpt.js",revision:null},{url:"assets/boke1.DR9KIwMj.js",revision:null},{url:"assets/boke2.Ht-biHcr.js",revision:null},{url:"assets/boke3.BIZMV7qI.js",revision:null},{url:"assets/boke4.DeBvGidZ.js",revision:null},{url:"assets/boke5.CHZebfZu.js",revision:null},{url:"assets/byjg1.BNt2jc7j.js",revision:null},{url:"assets/byjg2.CGY8Ix-2.js",revision:null},{url:"assets/byjg3.CMijV4gn.js",revision:null},{url:"assets/categories.D9pp6H46.js",revision:null},{url:"assets/cdn.ChjeNZ7r.js",revision:null},{url:"assets/chunks/@vueuse/motion.BltUbIEt.js",revision:null},{url:"assets/chunks/dayjs.Byk5cVHE.js",revision:null},{url:"assets/chunks/nprogress.Bmgvrz1e.js",revision:null},{url:"assets/chunks/pinia.BGsVwCM1.js",revision:null},{url:"assets/chunks/vue-i18n.CibY5xOG.js",revision:null},{url:"assets/chunks/vue-router.DBz11gj1.js",revision:null},{url:"assets/collection.B4j8lBYF.js",revision:null},{url:"assets/collections.qQpMQz3F.js",revision:null},{url:"assets/config.BVbTsNF3.js",revision:null},{url:"assets/domain.HgZTVGuS.js",revision:null},{url:"assets/email.BfHI6oIc.js",revision:null},{url:"assets/empty.CCi2mFcd.js",revision:null},{url:"assets/faq.BTRc7mXj.js",revision:null},{url:"assets/framework.Wgu5ILjI.js",revision:null},{url:"assets/gallery.BMZGccjq.js",revision:null},{url:"assets/ghproxy.0UV3AZWJ.js",revision:null},{url:"assets/home.CdbHDXWN.css",revision:null},{url:"assets/home.ith0Xe05.js",revision:null},{url:"assets/image.CWPhPNeU.js",revision:null},{url:"assets/index.BEPvjkqb.js",revision:null},{url:"assets/index.BMJgqLe_.js",revision:null},{url:"assets/index.Bq3f2mmH.js",revision:null},{url:"assets/index.BRXJGymZ.js",revision:null},{url:"assets/index.C5okkQwF.js",revision:null},{url:"assets/index.Cch_mg4D.css",revision:null},{url:"assets/index.CMLEKwzI.js",revision:null},{url:"assets/index.CtUUpJJB.js",revision:null},{url:"assets/index.CvjwLfmb.js",revision:null},{url:"assets/index.CWI0EsKP.js",revision:null},{url:"assets/index.DCM2PWBq.js",revision:null},{url:"assets/index.Desm1nno.js",revision:null},{url:"assets/index.DfXt1eUW.css",revision:null},{url:"assets/index.DX_Eb7QI.js",revision:null},{url:"assets/index.DYSFyKb3.js",revision:null},{url:"assets/index.zWlpTlsT.js",revision:null},{url:"assets/KaTeX_AMS-Regular.BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular.DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_AMS-Regular.DRggAlZN.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold.ATXxdsX0.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold.BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold.Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular.CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular.Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular.wX97UBjC.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold.BdnERNNW.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold.BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold.CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular.CB_wures.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Regular.CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular.Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold.Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold.Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-Bold.waoOVXN0.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic.DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic.DzxPMmG6.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic.SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic.3WenGoN9.ttf",revision:null},{url:"assets/KaTeX_Main-Italic.BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic.NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular.B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular.Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Main-Regular.ypZvNtVU.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic.B3XSjfu4.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic.CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic.iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic.DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic.flOr_0UB.ttf",revision:null},{url:"assets/KaTeX_Math-Italic.t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold.CFMepnvq.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Bold.D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold.DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic.C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic.DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic.YYjJ1zSn.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular.BNo7hRIc.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular.CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular.DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular.C5JkGWo-.ttf",revision:null},{url:"assets/KaTeX_Script-Regular.D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular.D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular.C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular.Dbsnue_I.ttf",revision:null},{url:"assets/KaTeX_Size1-Regular.mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular.B7gKUWhC.ttf",revision:null},{url:"assets/KaTeX_Size2-Regular.Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular.oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular.CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size3-Regular.DgpXs0kz.ttf",revision:null},{url:"assets/KaTeX_Size4-Regular.BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular.Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Size4-Regular.DWFBv043.ttf",revision:null},{url:"assets/KaTeX_Typewriter-Regular.C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular.CO6r4hn1.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular.D3Ib7_Hf.ttf",revision:null},{url:"assets/lyq.DL2_JTPI.js",revision:null},{url:"assets/meihua.Bgfgwg2a.js",revision:null},{url:"assets/meihua1.C71xlHD3.js",revision:null},{url:"assets/meihua10.CblddZC7.js",revision:null},{url:"assets/meihua11.DXDQMBBW.js",revision:null},{url:"assets/meihua2.eftgw6lX.js",revision:null},{url:"assets/meihua3.B7PYpEe7.js",revision:null},{url:"assets/meihua4.yQGJifm4.js",revision:null},{url:"assets/meihua5.COcWNYV0.js",revision:null},{url:"assets/meihua6.dmeohsmh.js",revision:null},{url:"assets/meihua7.C2vZfnPy.js",revision:null},{url:"assets/meihua8.RnyJAIyg.js",revision:null},{url:"assets/meihua9.DkpR3vM0.js",revision:null},{url:"assets/none.DLM1AMsD.jpg",revision:null},{url:"assets/novelai.Cn5minlq.js",revision:null},{url:"assets/novelai1.DShJGLau.js",revision:null},{url:"assets/novelai2.CDhfgK1i.js",revision:null},{url:"assets/ohook.rm3Ja5Ho.js",revision:null},{url:"assets/post.BlTTCfel.js",revision:null},{url:"assets/post.BtpcAmHM.js",revision:null},{url:"assets/post.CQ-cUdTq.js",revision:null},{url:"assets/post.DDxwAI70.css",revision:null},{url:"assets/posts.B46JHvyz.js",revision:null},{url:"assets/projects.DJixv3qo.js",revision:null},{url:"assets/projects.Dti-qd8N.css",revision:null},{url:"assets/reader.BulxuaUj.js",revision:null},{url:"assets/sidebar-bg-img.mp54gEws.webp",revision:null},{url:"assets/site.CAIFmBlN.js",revision:null},{url:"assets/source1.DkZVC3s_.js",revision:null},{url:"assets/source2.ByLunY7i.js",revision:null},{url:"assets/tags.DbRhRNLU.js",revision:null},{url:"assets/tools.dCq67lQt.js",revision:null},{url:"assets/typora.BUG4GuKZ.js",revision:null},{url:"assets/uptime.Cn-S_Bpb.js",revision:null},{url:"assets/uptimeapi.DBoOoVxk.js",revision:null},{url:"assets/ValaxyMain.BHXg_53O.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang.DfEnvDm4.js",revision:null},{url:"assets/view-transition.IkvUpX_n.css",revision:null},{url:"assets/virtual_pwa-register.BLKRnSp5.js",revision:null},{url:"assets/welcome.CEV9C0IN.js",revision:null},{url:"assets/workbox-window.prod.es5.D5gOYdM7.js",revision:null},{url:"assets/YunAlgoliaSearch.3o3M-maC.js",revision:null},{url:"assets/YunComment.Jrg_E_v_.css",revision:null},{url:"assets/YunComment.vue_vue_type_style_index_0_lang.Bva8DVnN.js",revision:null},{url:"assets/YunGallery.145vx3LM.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang.BE-4Vecm.js",revision:null},{url:"assets/YunPostCollapse.CLDXGmA8.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang.DmEuA6eY.js",revision:null},{url:"assets/YunPostList.BfWGcc9d.css",revision:null},{url:"assets/YunPostList.vue_vue_type_script_setup_true_lang.DxXf71G5.js",revision:null},{url:"assets/YunPostMeta.DCrVMfuT.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang.CnAWrbps.js",revision:null},{url:"assets/YunSponsor.BJOC5yvc.css",revision:null},{url:"assets/YunSponsor.vue_vue_type_style_index_0_lang.DVCvyEpr.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"91f0aeeb7f9abb8ce95fd9f286d7767c"},{url:"live2d-assets/live2d.min.js",revision:"97a06b32b6e6bee8db7aa128b99b7cc2"},{url:"live2d-assets/waifu-tips.js",revision:"6ff120ccc164e44397a62d9c422569ed"},{url:"live2d-assets/waifu.css",revision:"68aac09b836a1ca1c138b74f46835459"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"20e471102cdb5dd71038ff861dec552d"},{url:"screenshot-pc.jpg",revision:"a04a1b497a3ad69c60224caa37823dbd"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"manifest.webmanifest",revision:"243bbc24210b55f503dee908e9a2260b"}],{ignoreURLParametersMatching:[/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.(googleapis|gstatic).com\/.*\//,new s.CacheFirst({cacheName:"network-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
