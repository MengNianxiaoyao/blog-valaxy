if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-23dc0c55"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-DOksfZnk.js",revision:null},{url:"assets/_page_-CutuM51q.js",revision:null},{url:"assets/404-C9gkB6Aj.css",revision:null},{url:"assets/404-CRT7TYje.js",revision:null},{url:"assets/404-DiHeEQK3.js",revision:null},{url:"assets/404-ebS3Os5l.js",revision:null},{url:"assets/404-eutdSds2.css",revision:null},{url:"assets/albums-BmAPtciV.css",revision:null},{url:"assets/albums-XpJGOtQk.js",revision:null},{url:"assets/animation-in-CQBZZygY.css",revision:null},{url:"assets/app-3mi1Y6JG.css",revision:null},{url:"assets/app-BeFp2_uE.js",revision:null},{url:"assets/archives-Czcw5jhD.js",revision:null},{url:"assets/back-DAtDRAz1.js",revision:null},{url:"assets/baodao-B5ePX7mb.js",revision:null},{url:"assets/bg-img-kXdNMxcF.jpg",revision:null},{url:"assets/boke1-BQAj4kpY.js",revision:null},{url:"assets/boke2-BnvZfnGW.js",revision:null},{url:"assets/boke3-Bcdu37Yz.js",revision:null},{url:"assets/boke4-mNJnn5mN.js",revision:null},{url:"assets/boke5-ByNBq1Kj.js",revision:null},{url:"assets/byjg1-JHkLLuQ8.js",revision:null},{url:"assets/byjg2-C84J8HUU.js",revision:null},{url:"assets/byjg3-CzYR6iQo.js",revision:null},{url:"assets/categories-BSctN3Pe.css",revision:null},{url:"assets/categories-CVQpVaFG.js",revision:null},{url:"assets/cdn-9fTUKE-j.js",revision:null},{url:"assets/config-D1DBdBIu.js",revision:null},{url:"assets/domain-BZuC7cXb.js",revision:null},{url:"assets/email-DptE4M2U.js",revision:null},{url:"assets/empty-llKiPvuk.js",revision:null},{url:"assets/faq-D9srgT2M.js",revision:null},{url:"assets/gallery-B5OBMT1i.js",revision:null},{url:"assets/ghproxy-DwOOUVg7.js",revision:null},{url:"assets/helper-CN1Pil7B.js",revision:null},{url:"assets/home-D_nyz5Hp.css",revision:null},{url:"assets/home-DaafDX-e.js",revision:null},{url:"assets/image-qBdI_Ne4.js",revision:null},{url:"assets/index-BfXPbW6S.js",revision:null},{url:"assets/index-BHCqC4S_.js",revision:null},{url:"assets/index-Bj38XWP1.js",revision:null},{url:"assets/index-BkboupjA.js",revision:null},{url:"assets/index-C5okkQwF.js",revision:null},{url:"assets/index-CDtsDhRZ.css",revision:null},{url:"assets/index-Ce_JIjCC.js",revision:null},{url:"assets/index-CM_F7D-5.js",revision:null},{url:"assets/index-CPSV6qQK.js",revision:null},{url:"assets/index-CsKOxQKH.js",revision:null},{url:"assets/index-DpJdnPsW.js",revision:null},{url:"assets/index-rPsfFot8.css",revision:null},{url:"assets/KaTeX_AMS-Regular-BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular-DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold-Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold-Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic-SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic-BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic-NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic-DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic-t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic-DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2",revision:null},{url:"assets/lyq-DROp5W-t.js",revision:null},{url:"assets/meihua-zMoiXPsK.js",revision:null},{url:"assets/meihua1-CY-oJyTU.js",revision:null},{url:"assets/meihua10-BkN3oEL0.js",revision:null},{url:"assets/meihua11-CHYimCyC.js",revision:null},{url:"assets/meihua2-DPmq8fCj.js",revision:null},{url:"assets/meihua3-BTTZ8gTg.js",revision:null},{url:"assets/meihua4-CiepityH.js",revision:null},{url:"assets/meihua5-Cz_4bRNH.js",revision:null},{url:"assets/meihua6--41eRWVp.js",revision:null},{url:"assets/meihua7-Cq8RzBVk.js",revision:null},{url:"assets/meihua8-BkGgFbVu.js",revision:null},{url:"assets/meihua9-CqvnEKCB.js",revision:null},{url:"assets/none-DLM1AMsD.jpg",revision:null},{url:"assets/novelai-YKagMsrb.js",revision:null},{url:"assets/novelai1-L9CJiM6s.js",revision:null},{url:"assets/novelai2-C6KwkEf6.js",revision:null},{url:"assets/ohook-Dcwvvct9.js",revision:null},{url:"assets/post-br4OscG6.js",revision:null},{url:"assets/post-Bz-KV1MX.js",revision:null},{url:"assets/post-gQpphGKg.css",revision:null},{url:"assets/post-llKiPvuk.js",revision:null},{url:"assets/reader-Cl6OrpHl.js",revision:null},{url:"assets/route-block-B_A1xBdJ.js",revision:null},{url:"assets/sidebar-bg-img-mp54gEws.webp",revision:null},{url:"assets/site-04uJuEga.js",revision:null},{url:"assets/source1-CRrr9wss.js",revision:null},{url:"assets/source2-BZ8qDEvU.js",revision:null},{url:"assets/tags-BWtIS6KY.js",revision:null},{url:"assets/tools-3oF-2t8k.js",revision:null},{url:"assets/typora-C7jFmbsG.js",revision:null},{url:"assets/uptime-BEQWFudL.js",revision:null},{url:"assets/ValaxyMain-CsFhpFFJ.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang-Dcan7bts.js",revision:null},{url:"assets/view-transition-nZH5RA25.css",revision:null},{url:"assets/virtual_pwa-register-iKNDzZ5D.js",revision:null},{url:"assets/welcome-C1yxqKnE.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"assets/YunAlgoliaSearch-CyA37Ejz.js",revision:null},{url:"assets/YunAlgoliaSearch-DKn186Cd.css",revision:null},{url:"assets/YunCard.vue_vue_type_script_setup_true_lang-v1XYasX8.js",revision:null},{url:"assets/YunFooter-B0ViS4tU.css",revision:null},{url:"assets/YunFooter.vue_vue_type_style_index_0_lang-K5NNZnOH.js",revision:null},{url:"assets/YunGallery-EOlVy-JW.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang-avqJKQPt.js",revision:null},{url:"assets/YunPostCollapse-DzZAROS7.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang-B44heHos.js",revision:null},{url:"assets/YunPostList-CYDTlsp3.css",revision:null},{url:"assets/YunPostList.vue_vue_type_style_index_0_lang-DAoukRYk.js",revision:null},{url:"assets/YunPostMeta-B4_wBHR1.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang-BNEQKXL1.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"9489017c219cf2ae65b0412fd33c9164"},{url:"live2d-assets/live2d.min.js",revision:"97a06b32b6e6bee8db7aa128b99b7cc2"},{url:"live2d-assets/waifu-tips.js",revision:"6ff120ccc164e44397a62d9c422569ed"},{url:"live2d-assets/waifu.css",revision:"68aac09b836a1ca1c138b74f46835459"},{url:"live2d/live2d.min.js",revision:"c1c28f553095fdddb4d2c13a11bd4cb9"},{url:"live2d/waifu-tips.js",revision:"0985b64676c5f148dfd56e6edcbee3d0"},{url:"live2d/waifu.css",revision:"d3614cd12a228b44c671c8bd7f7717f2"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"20e471102cdb5dd71038ff861dec552d"},{url:"screenshot-pc.jpg",revision:"a04a1b497a3ad69c60224caa37823dbd"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"manifest.webmanifest",revision:"a81d024f8c1ddb17be49fff1cf645e3a"}],{ignoreURLParametersMatching:[/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css|json)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css|json)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.googleapis.com\/.*\//,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.gstatic.com\/.*\//,new s.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
