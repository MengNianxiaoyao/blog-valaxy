if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-bb62b90b"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-Dh7TBrC3.js",revision:null},{url:"assets/_page_-BDREh8yi.js",revision:null},{url:"assets/404-BVBAOn0m.js",revision:null},{url:"assets/404-BvDqQgv4.css",revision:null},{url:"assets/404-C9gkB6Aj.css",revision:null},{url:"assets/404-D6pdH42G.js",revision:null},{url:"assets/404-Dp_TMRWe.js",revision:null},{url:"assets/albums-BmAPtciV.css",revision:null},{url:"assets/albums-CBwdxciH.js",revision:null},{url:"assets/app-U_hwP62e.css",revision:null},{url:"assets/app-znCK1cUP.js",revision:null},{url:"assets/archives-p6UfMpAl.js",revision:null},{url:"assets/baiye2-D7lrGafq.js",revision:null},{url:"assets/baiye3-BQv4A5vO.js",revision:null},{url:"assets/baodao-oT9aPkzo.js",revision:null},{url:"assets/bg-img-kXdNMxcF.jpg",revision:null},{url:"assets/boke1-Ct9icpor.js",revision:null},{url:"assets/boke2-DNlEWRxg.js",revision:null},{url:"assets/boke3-P7rWNtoS.js",revision:null},{url:"assets/boke4-CkpP36FW.js",revision:null},{url:"assets/byjg1-CDp45vFs.js",revision:null},{url:"assets/categories-BSctN3Pe.css",revision:null},{url:"assets/categories-DFgNJy3N.js",revision:null},{url:"assets/config-B_flag4-.js",revision:null},{url:"assets/domain-nA_qxD-R.js",revision:null},{url:"assets/empty-BjBMbMJU.js",revision:null},{url:"assets/gallery-es2tg1BT.js",revision:null},{url:"assets/ghproxy-Cn1rt1P1.js",revision:null},{url:"assets/home-Bp-s918h.js",revision:null},{url:"assets/home-D_nyz5Hp.css",revision:null},{url:"assets/image-De8R26RC.js",revision:null},{url:"assets/index-0SvI4EiX.js",revision:null},{url:"assets/index-2jA2aRER.css",revision:null},{url:"assets/index-2JifdWS3.js",revision:null},{url:"assets/index-B-cC5O4X.js",revision:null},{url:"assets/index-Bpw-dgzJ.js",revision:null},{url:"assets/index-BqOZj7sK.js",revision:null},{url:"assets/index-BrVv0HQY.js",revision:null},{url:"assets/index-C7yU5XnD.js",revision:null},{url:"assets/index-CDtsDhRZ.css",revision:null},{url:"assets/index-Ds8_Ipih.js",revision:null},{url:"assets/index-fkbgcLri.js",revision:null},{url:"assets/KaTeX_AMS-Regular-BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular-DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold-Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold-Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic-SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic-BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic-NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic-DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic-t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic-DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2",revision:null},{url:"assets/lyq-Ck1JBrm9.js",revision:null},{url:"assets/meihua-DXkAWxye.js",revision:null},{url:"assets/meihua1-DIh92M_t.js",revision:null},{url:"assets/meihua10-DpaSY5Ui.js",revision:null},{url:"assets/meihua11-3Vtt3DXb.js",revision:null},{url:"assets/meihua2-Dsx-MgiJ.js",revision:null},{url:"assets/meihua3-BCFnNEPU.js",revision:null},{url:"assets/meihua4-Bf2eeu5W.js",revision:null},{url:"assets/meihua5-B4KWWiFP.js",revision:null},{url:"assets/meihua6-CUWw6xic.js",revision:null},{url:"assets/meihua7-Bl7CbJze.js",revision:null},{url:"assets/meihua8-BlFJ4JLB.js",revision:null},{url:"assets/meihua9-CdJiSo3p.js",revision:null},{url:"assets/none-DLM1AMsD.jpg",revision:null},{url:"assets/novelai-BNlJNCwi.js",revision:null},{url:"assets/novelai1-LPbQmNr6.js",revision:null},{url:"assets/novelai2-CQ7hk_ed.js",revision:null},{url:"assets/ohook-BjRdV7YQ.js",revision:null},{url:"assets/post-BjBMbMJU.js",revision:null},{url:"assets/post-CnJa4Oqj.js",revision:null},{url:"assets/post-gQpphGKg.css",revision:null},{url:"assets/reader-JrUJmIA2.js",revision:null},{url:"assets/route-block-B_A1xBdJ.js",revision:null},{url:"assets/sidebar-bg-img-mp54gEws.webp",revision:null},{url:"assets/site-B5Evg94w.js",revision:null},{url:"assets/source1-t3DYlI6c.js",revision:null},{url:"assets/source2-DgE0vHO_.js",revision:null},{url:"assets/tags-Bu4fZCcP.js",revision:null},{url:"assets/typora-B5HtCotc.js",revision:null},{url:"assets/uptime-D7KQnE_q.js",revision:null},{url:"assets/ValaxyMain-DYxkaEMi.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang-cIFZ-5Ee.js",revision:null},{url:"assets/view-transition-nZH5RA25.css",revision:null},{url:"assets/virtual_pwa-register-BkLn2M6n.js",revision:null},{url:"assets/welcome-1YKXJuNj.js",revision:null},{url:"assets/workbox-window.prod.es5-DFjpnwFp.js",revision:null},{url:"assets/YunAlgoliaSearch-QZO6-3uN.js",revision:null},{url:"assets/YunCard.vue_vue_type_script_setup_true_lang-DsiEhpwv.js",revision:null},{url:"assets/YunFooter-B0ViS4tU.css",revision:null},{url:"assets/YunFooter.vue_vue_type_style_index_0_lang-BKs5ICT7.js",revision:null},{url:"assets/YunGallery-D1NXocbc.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang-wRtBineI.js",revision:null},{url:"assets/YunPostCollapse-DzZAROS7.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang-CdQ9da5r.js",revision:null},{url:"assets/YunPostList-CYDTlsp3.css",revision:null},{url:"assets/YunPostList.vue_vue_type_style_index_0_lang-A6LONoaj.js",revision:null},{url:"assets/YunPostMeta-B4_wBHR1.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang-X_kpQQ7w.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"d3b857c32e0e580892514392ec9ebf30"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"9c88c2030cd4121f73fed3dbd01aed4f"},{url:"screenshot-pc.jpg",revision:"9979005563afa2511e6bb742c85fd685"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"manifest.webmanifest",revision:"a81d024f8c1ddb17be49fff1cf645e3a"}],{ignoreURLParametersMatching:[/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.googleapis.com\/.*\//,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.gstatic.com\/.*\//,new s.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
