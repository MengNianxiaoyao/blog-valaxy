if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>l(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(i.map((s=>o[s]||u(s)))).then((s=>(n(...s),a)))}}define(["./workbox-7075fcdc"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-C3lMwn1z.js",revision:null},{url:"assets/_page_-BYdhyGs3.js",revision:null},{url:"assets/404-BW8iDMQq.js",revision:null},{url:"assets/404-C9gkB6Aj.css",revision:null},{url:"assets/404-CL5hWHAv.js",revision:null},{url:"assets/404-LZskb45K.css",revision:null},{url:"assets/404-yybqJLBf.js",revision:null},{url:"assets/albums-BmAPtciV.css",revision:null},{url:"assets/albums-Dq39YOZK.js",revision:null},{url:"assets/animation-in-CQBZZygY.css",revision:null},{url:"assets/app-BEbDGwHl.js",revision:null},{url:"assets/app-C1KqvhZo.css",revision:null},{url:"assets/archives-DspqrMEF.js",revision:null},{url:"assets/back-DwefXl47.js",revision:null},{url:"assets/baiye2-ttctlCZP.js",revision:null},{url:"assets/baiye3-CVSRnV6i.js",revision:null},{url:"assets/baodao-CQFLRX0t.js",revision:null},{url:"assets/bg-img-kXdNMxcF.jpg",revision:null},{url:"assets/boke1-BeHqAWD-.js",revision:null},{url:"assets/boke2-CYLp9Fp0.js",revision:null},{url:"assets/boke3-CpTKBaQs.js",revision:null},{url:"assets/boke4-D59LVPeP.js",revision:null},{url:"assets/byjg1-DHJFeDDM.js",revision:null},{url:"assets/categories-BSctN3Pe.css",revision:null},{url:"assets/categories-BzSLe_6_.js",revision:null},{url:"assets/config-BxFFlaSl.js",revision:null},{url:"assets/domain-CEIPNRPA.js",revision:null},{url:"assets/empty-D0gE87rE.js",revision:null},{url:"assets/gallery-CFzjUxH4.js",revision:null},{url:"assets/ghproxy-D4ybE2oU.js",revision:null},{url:"assets/helper-D5QlBVoS.js",revision:null},{url:"assets/home-D_nyz5Hp.css",revision:null},{url:"assets/home-dlmnJxI7.js",revision:null},{url:"assets/image-BUFFnMar.js",revision:null},{url:"assets/index-9o7PmKXB.css",revision:null},{url:"assets/index-BaMoQ1Zb.js",revision:null},{url:"assets/index-C5okkQwF.js",revision:null},{url:"assets/index-C7yU5XnD.js",revision:null},{url:"assets/index-CDtsDhRZ.css",revision:null},{url:"assets/index-CGjLPFQy.js",revision:null},{url:"assets/index-Cm4wgN_I.js",revision:null},{url:"assets/index-CS_o8K4B.js",revision:null},{url:"assets/index-CvDfc-Ps.js",revision:null},{url:"assets/index-DBMCDnfN.js",revision:null},{url:"assets/index-Dxjgxrsz.js",revision:null},{url:"assets/index-unqQGSML.js",revision:null},{url:"assets/KaTeX_AMS-Regular-BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular-DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold-Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold-Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic-SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic-BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic-NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic-DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic-t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic-DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2",revision:null},{url:"assets/layout-BPXhaSHp.js",revision:null},{url:"assets/lyq-Tl-jP0ej.js",revision:null},{url:"assets/meihua-B2T7964G.js",revision:null},{url:"assets/meihua1-Bxp40I57.js",revision:null},{url:"assets/meihua10-C_JlMwxP.js",revision:null},{url:"assets/meihua11-DUs_US7C.js",revision:null},{url:"assets/meihua2-BQotQ94s.js",revision:null},{url:"assets/meihua3-Bp34VCen.js",revision:null},{url:"assets/meihua4-C4te6j-F.js",revision:null},{url:"assets/meihua5-BQQtw6b6.js",revision:null},{url:"assets/meihua6-DHpwZD29.js",revision:null},{url:"assets/meihua7-DZJOTstL.js",revision:null},{url:"assets/meihua8-B-pmpXPY.js",revision:null},{url:"assets/meihua9-B-NsB_1G.js",revision:null},{url:"assets/none-DLM1AMsD.jpg",revision:null},{url:"assets/novelai-CGjEW9qy.js",revision:null},{url:"assets/novelai1-DL_UFHCy.js",revision:null},{url:"assets/novelai2-F2lyFwmZ.js",revision:null},{url:"assets/ohook-2phWMqAX.js",revision:null},{url:"assets/post-BVO66UAp.js",revision:null},{url:"assets/post-CwnKZqBa.js",revision:null},{url:"assets/post-D0gE87rE.js",revision:null},{url:"assets/post-gQpphGKg.css",revision:null},{url:"assets/reader-B3-PxUdn.js",revision:null},{url:"assets/route-block-B_A1xBdJ.js",revision:null},{url:"assets/sidebar-bg-img-mp54gEws.webp",revision:null},{url:"assets/site-DVu6eAmT.js",revision:null},{url:"assets/source1-Cceq7WEw.js",revision:null},{url:"assets/source2-C18ao6az.js",revision:null},{url:"assets/tags-Buqme1Hr.js",revision:null},{url:"assets/typora-D3svkFgr.js",revision:null},{url:"assets/uptime-C5ltCbkK.js",revision:null},{url:"assets/ValaxyMain-DPTcnVev.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang-B9I-Xoqd.js",revision:null},{url:"assets/view-transition-nZH5RA25.css",revision:null},{url:"assets/virtual_pwa-register-CxvqKDiM.js",revision:null},{url:"assets/welcome-DpbcXZM_.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"assets/YunAlgoliaSearch-B4c8bWS0.js",revision:null},{url:"assets/YunCard.vue_vue_type_script_setup_true_lang-Dr9eUjZm.js",revision:null},{url:"assets/YunFooter-B0ViS4tU.css",revision:null},{url:"assets/YunFooter.vue_vue_type_style_index_0_lang-DY5TZuZj.js",revision:null},{url:"assets/YunGallery-_7Z197g_.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang-D60Y2Hp8.js",revision:null},{url:"assets/YunPostCollapse-DzZAROS7.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang-CxC5abHh.js",revision:null},{url:"assets/YunPostList-CYDTlsp3.css",revision:null},{url:"assets/YunPostList.vue_vue_type_style_index_0_lang-BLk0ROQ6.js",revision:null},{url:"assets/YunPostMeta-B4_wBHR1.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang-Z4bNa8MS.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"31bef08cbc5b3f14ebfdc1313cfb2f59"},{url:"live2d-assets/live2d.min.js",revision:"97a06b32b6e6bee8db7aa128b99b7cc2"},{url:"live2d-assets/waifu-tips.js",revision:"6ff120ccc164e44397a62d9c422569ed"},{url:"live2d-assets/waifu.css",revision:"68aac09b836a1ca1c138b74f46835459"},{url:"live2d/live2d.min.js",revision:"c1c28f553095fdddb4d2c13a11bd4cb9"},{url:"live2d/waifu-tips.js",revision:"0985b64676c5f148dfd56e6edcbee3d0"},{url:"live2d/waifu.css",revision:"d3614cd12a228b44c671c8bd7f7717f2"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"20e471102cdb5dd71038ff861dec552d"},{url:"screenshot-pc.jpg",revision:"a04a1b497a3ad69c60224caa37823dbd"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"manifest.webmanifest",revision:"a81d024f8c1ddb17be49fff1cf645e3a"}],{ignoreURLParametersMatching:[/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css|json)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css|json)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.googleapis.com\/.*\//,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.gstatic.com\/.*\//,new s.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
