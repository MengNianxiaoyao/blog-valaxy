if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>l(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(i.map((s=>o[s]||u(s)))).then((s=>(n(...s),a)))}}define(["./workbox-bb62b90b"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-d_4pGcqP.js",revision:null},{url:"assets/_page_-D6VekLHz.js",revision:null},{url:"assets/404-C9gkB6Aj.css",revision:null},{url:"assets/404-DM5kI5s6.js",revision:null},{url:"assets/404-DnpeQnZ3.js",revision:null},{url:"assets/404-fugAAvre.css",revision:null},{url:"assets/404-pzbZ2n-v.js",revision:null},{url:"assets/albums-Bd8v_di5.js",revision:null},{url:"assets/albums-BmAPtciV.css",revision:null},{url:"assets/animation-in-CQBZZygY.css",revision:null},{url:"assets/app-D7oEHP5c.css",revision:null},{url:"assets/app-DnRgRrAs.js",revision:null},{url:"assets/archives-CFK2_HyX.js",revision:null},{url:"assets/baiye2-BeF9-wPR.js",revision:null},{url:"assets/baiye3-BjFgr9lf.js",revision:null},{url:"assets/baodao-D-YfcADL.js",revision:null},{url:"assets/bg-img-kXdNMxcF.jpg",revision:null},{url:"assets/boke1-Ct9GMIKe.js",revision:null},{url:"assets/boke2--9eQjZQT.js",revision:null},{url:"assets/boke3-CHieo1Dr.js",revision:null},{url:"assets/boke4-DiPN_iEc.js",revision:null},{url:"assets/byjg1-BdcPo-Bb.js",revision:null},{url:"assets/categories-BSctN3Pe.css",revision:null},{url:"assets/categories-k7QK4J_f.js",revision:null},{url:"assets/config-BFuGoWgp.js",revision:null},{url:"assets/domain-B8Gi45tL.js",revision:null},{url:"assets/empty-a2UaJfgX.js",revision:null},{url:"assets/gallery-CJZXbT9a.js",revision:null},{url:"assets/ghproxy-15DBden4.js",revision:null},{url:"assets/home-CTZq-fyt.js",revision:null},{url:"assets/home-D_nyz5Hp.css",revision:null},{url:"assets/image-BjVIuZgx.js",revision:null},{url:"assets/index-6Ie7rrek.js",revision:null},{url:"assets/index-BA2ow4v1.js",revision:null},{url:"assets/index-BACb5ULw.js",revision:null},{url:"assets/index-BAmRKA61.js",revision:null},{url:"assets/index-C2G7dax0.js",revision:null},{url:"assets/index-C7yU5XnD.js",revision:null},{url:"assets/index-CDtsDhRZ.css",revision:null},{url:"assets/index-CmtZolJL.js",revision:null},{url:"assets/index-dc82ONZ5.css",revision:null},{url:"assets/index-j1m7BQ5D.js",revision:null},{url:"assets/index-suN1h9Ox.js",revision:null},{url:"assets/KaTeX_AMS-Regular-BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular-DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold-Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold-Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic-SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic-BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic-NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic-DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic-t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic-DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2",revision:null},{url:"assets/lyq-FGEvmExt.js",revision:null},{url:"assets/meihua-BwXG7uC6.js",revision:null},{url:"assets/meihua1-CV5LRp3U.js",revision:null},{url:"assets/meihua10-C3m5kSXy.js",revision:null},{url:"assets/meihua11-CijBXW8H.js",revision:null},{url:"assets/meihua2-0LC4sZpS.js",revision:null},{url:"assets/meihua3-BDNj_iRy.js",revision:null},{url:"assets/meihua4-CyuCJlGj.js",revision:null},{url:"assets/meihua5-ChR9tlW5.js",revision:null},{url:"assets/meihua6-CMeaLVKi.js",revision:null},{url:"assets/meihua7-wlLqSMDa.js",revision:null},{url:"assets/meihua8-f4OylZdC.js",revision:null},{url:"assets/meihua9-CSr9M_C3.js",revision:null},{url:"assets/none-DLM1AMsD.jpg",revision:null},{url:"assets/novelai-BNoKbMcB.js",revision:null},{url:"assets/novelai1-7iSPemlc.js",revision:null},{url:"assets/novelai2-Beng21gK.js",revision:null},{url:"assets/ohook-DKgNtLI-.js",revision:null},{url:"assets/post-a2UaJfgX.js",revision:null},{url:"assets/post-BHuW4gFd.js",revision:null},{url:"assets/post-gQpphGKg.css",revision:null},{url:"assets/reader-cHi-V38j.js",revision:null},{url:"assets/route-block-B_A1xBdJ.js",revision:null},{url:"assets/sidebar-bg-img-mp54gEws.webp",revision:null},{url:"assets/site-DiTKxIzC.js",revision:null},{url:"assets/source1-CmLWllPr.js",revision:null},{url:"assets/source2-D6xlI9y6.js",revision:null},{url:"assets/tags-CZoWgU5T.js",revision:null},{url:"assets/typora-CiCli2bk.js",revision:null},{url:"assets/uptime-Df__RPwI.js",revision:null},{url:"assets/ValaxyMain-Dcz_or82.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang-BWzz5rFU.js",revision:null},{url:"assets/view-transition-nZH5RA25.css",revision:null},{url:"assets/virtual_pwa-register-BOPxD-D9.js",revision:null},{url:"assets/welcome-CG3ZjlC5.js",revision:null},{url:"assets/workbox-window.prod.es5-DFjpnwFp.js",revision:null},{url:"assets/YunAlgoliaSearch-Bodf7Txi.js",revision:null},{url:"assets/YunCard.vue_vue_type_script_setup_true_lang-JPncNCip.js",revision:null},{url:"assets/YunFooter-B0ViS4tU.css",revision:null},{url:"assets/YunFooter.vue_vue_type_style_index_0_lang-mdY4nL8q.js",revision:null},{url:"assets/YunGallery-bJe_VKFt.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang-IfoUBpb2.js",revision:null},{url:"assets/YunPostCollapse-DzZAROS7.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang-DybT-_oi.js",revision:null},{url:"assets/YunPostList-CYDTlsp3.css",revision:null},{url:"assets/YunPostList.vue_vue_type_style_index_0_lang-BBIwLzuU.js",revision:null},{url:"assets/YunPostMeta-B4_wBHR1.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang-cJaQwgzE.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"6884956ecdb1adf6bfc289005af12f14"},{url:"live2d-assets/live2d.min.js",revision:"97a06b32b6e6bee8db7aa128b99b7cc2"},{url:"live2d-assets/waifu-tips.js",revision:"6ff120ccc164e44397a62d9c422569ed"},{url:"live2d-assets/waifu.css",revision:"68aac09b836a1ca1c138b74f46835459"},{url:"live2d/live2d.min.js",revision:"c1c28f553095fdddb4d2c13a11bd4cb9"},{url:"live2d/waifu-tips.js",revision:"0985b64676c5f148dfd56e6edcbee3d0"},{url:"live2d/waifu.css",revision:"d3614cd12a228b44c671c8bd7f7717f2"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"20e471102cdb5dd71038ff861dec552d"},{url:"screenshot-pc.jpg",revision:"a04a1b497a3ad69c60224caa37823dbd"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"manifest.webmanifest",revision:"a81d024f8c1ddb17be49fff1cf645e3a"}],{ignoreURLParametersMatching:[/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css|json)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css|json)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.googleapis.com\/.*\//,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.gstatic.com\/.*\//,new s.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
