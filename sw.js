if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-bb62b90b"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-Wq2v1ZY8.js",revision:null},{url:"assets/_page_-wFtIPWfK.js",revision:null},{url:"assets/404--5fnoW8e.js",revision:null},{url:"assets/404-dSnDAWS8.js",revision:null},{url:"assets/404-jcDWPYg_.css",revision:null},{url:"assets/404-JtKMedjm.js",revision:null},{url:"assets/404-vYJAegI2.css",revision:null},{url:"assets/albums-ut4_UUv6.js",revision:null},{url:"assets/albums-ZgD7XIlY.css",revision:null},{url:"assets/app-CU40XLcC.css",revision:null},{url:"assets/app-xYRVAqav.js",revision:null},{url:"assets/archives-meHzikya.js",revision:null},{url:"assets/baiye2-rIX7uiho.js",revision:null},{url:"assets/baiye3-qWUyddfc.js",revision:null},{url:"assets/baodao-ojz2in2b.js",revision:null},{url:"assets/bg-img-JF3TTMXB.jpg",revision:null},{url:"assets/boke2-l8v1rc1d.js",revision:null},{url:"assets/boke3-mjEORbVy.js",revision:null},{url:"assets/boke4-9yiiiiJH.js",revision:null},{url:"assets/categories-ec2WWsN4.js",revision:null},{url:"assets/categories-UnLTdz3j.css",revision:null},{url:"assets/domain-HG0JzIhg.js",revision:null},{url:"assets/gallery-QNP_KhfT.js",revision:null},{url:"assets/ghproxy-qUWYA0F8.js",revision:null},{url:"assets/home-_58s-R6X.css",revision:null},{url:"assets/home-52BG8AB5.js",revision:null},{url:"assets/index--PyAfx7r.js",revision:null},{url:"assets/index--Rbjp8SD.js",revision:null},{url:"assets/index-0TXReVvd.js",revision:null},{url:"assets/index-1YUCszZ2.js",revision:null},{url:"assets/index-fRni1_BE.js",revision:null},{url:"assets/index-ggxgfsjk.js",revision:null},{url:"assets/index-ifCa4p-_.js",revision:null},{url:"assets/index-JINKSLKb.js",revision:null},{url:"assets/index-l4jdFvko.css",revision:null},{url:"assets/index-nlSmcLJj.js",revision:null},{url:"assets/index-nTEzfBqd.js",revision:null},{url:"assets/index-PipAfmpW.js",revision:null},{url:"assets/index-PMo_OinF.js",revision:null},{url:"assets/index-Qem91WBf.js",revision:null},{url:"assets/index-Tf2rUGoo.js",revision:null},{url:"assets/index-u-GDaYRX.js",revision:null},{url:"assets/index-uB0zrbiD.js",revision:null},{url:"assets/index-zRpVRPzl.js",revision:null},{url:"assets/KaTeX_AMS-Regular-UIXRTGNW.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular-zJvWDgGp.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-6vyEfazt.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-RIlxi71x.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-4uo0fsfh.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-k0QPq0y-.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold-bAz-dThZ.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold-i-oP291Y.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-8XXOHEfX.woff",revision:null},{url:"assets/KaTeX_Fraktur-Regular-k2IhepQP.woff2",revision:null},{url:"assets/KaTeX_Main-Bold-CZtwCMuf.woff",revision:null},{url:"assets/KaTeX_Main-Bold-sffOiHVw.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic-8QydwDku.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic-EqUi0SPe.woff",revision:null},{url:"assets/KaTeX_Main-Italic-DVgO3ulm.woff2",revision:null},{url:"assets/KaTeX_Main-Italic-TCzgZvdR.woff",revision:null},{url:"assets/KaTeX_Main-Regular-6_eCWgYQ.woff",revision:null},{url:"assets/KaTeX_Main-Regular-dtjb4qKe.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic-ImPtsMme.woff",revision:null},{url:"assets/KaTeX_Math-BoldItalic-mZ7zbAmZ.woff2",revision:null},{url:"assets/KaTeX_Math-Italic-LedwBEzP.woff2",revision:null},{url:"assets/KaTeX_Math-Italic-wNP_z16f.woff",revision:null},{url:"assets/KaTeX_SansSerif-Bold-2yISjogg.woff",revision:null},{url:"assets/KaTeX_SansSerif-Bold-9bFEtBg9.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic-Azdo-3Wm.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-tx9FahgZ.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Regular-kun6lKiW.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-wwQp5Se8.woff2",revision:null},{url:"assets/KaTeX_Script-Regular--ckFYqpa.woff",revision:null},{url:"assets/KaTeX_Script-Regular-98CFnxev.woff2",revision:null},{url:"assets/KaTeX_Size1-Regular-Jgg_JgPA.woff2",revision:null},{url:"assets/KaTeX_Size1-Regular-tfebZ-uE.woff",revision:null},{url:"assets/KaTeX_Size2-Regular-8uHcfdJu.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-KA9bXP1N.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-k6uTKqBB.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-5eZcWcVX.woff2",revision:null},{url:"assets/KaTeX_Size4-Regular-RfuIJGSk.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular-juq-IZ9c.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular-tMUvZjwd.woff",revision:null},{url:"assets/lyq-PgdmjR3e.js",revision:null},{url:"assets/meihua1-MBuvo-sI.js",revision:null},{url:"assets/meihua10-EGMK3BJt.js",revision:null},{url:"assets/meihua11-9R9Sq35o.js",revision:null},{url:"assets/meihua2-8poPyWcX.js",revision:null},{url:"assets/meihua3-Zw-AiLbX.js",revision:null},{url:"assets/meihua4-xFNgzo1z.js",revision:null},{url:"assets/meihua5-G0f78HhJ.js",revision:null},{url:"assets/meihua6-K1DzxjZY.js",revision:null},{url:"assets/meihua7-4VCdGT63.js",revision:null},{url:"assets/meihua8-UcMTlFvb.js",revision:null},{url:"assets/meihua9-CRWZz0a2.js",revision:null},{url:"assets/none-yzNQDLA9.jpg",revision:null},{url:"assets/novelai1-Ect4Pogf.js",revision:null},{url:"assets/novelai2-U4VhmMAp.js",revision:null},{url:"assets/ohook-MDVcuUe3.js",revision:null},{url:"assets/post-I20tgEMW.js",revision:null},{url:"assets/post-IEKaYRio.css",revision:null},{url:"assets/post-IXL_XjRC.js",revision:null},{url:"assets/reader-qInOuEh4.js",revision:null},{url:"assets/route-block-zudrvJp0.js",revision:null},{url:"assets/sidebar-bg-img-JqeeIBML.webp",revision:null},{url:"assets/site-aTlV9w1Q.js",revision:null},{url:"assets/source2-1U8n8t32.js",revision:null},{url:"assets/tags-p3gBeJKV.js",revision:null},{url:"assets/typora-m-oBvg5N.js",revision:null},{url:"assets/uptime-7KnoksbW.js",revision:null},{url:"assets/ValaxyMain-fsA9l-Di.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang-_bIJK0fp.js",revision:null},{url:"assets/virtual_pwa-register-nD3GvmsS.js",revision:null},{url:"assets/workbox-window.prod.es5-prqDwDSL.js",revision:null},{url:"assets/YunAlgoliaSearch-FmcScwuw.js",revision:null},{url:"assets/YunCard.vue_vue_type_script_setup_true_lang-t765H__p.js",revision:null},{url:"assets/YunFooter-dFYkuLVA.css",revision:null},{url:"assets/YunFooter.vue_vue_type_style_index_0_lang-gYMp_Mca.js",revision:null},{url:"assets/YunGallery-JbcXJTnT.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang-2xjT6Cov.js",revision:null},{url:"assets/YunPostCollapse-82QETku1.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang-JiarLcd2.js",revision:null},{url:"assets/YunPostList-mA05bKd8.css",revision:null},{url:"assets/YunPostList.vue_vue_type_style_index_0_lang-h_VxwONH.js",revision:null},{url:"assets/YunPostMeta-eP8AR0dX.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang-SJx7a-6z.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"938618274e448677877db9d5a9a74e13"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"9c88c2030cd4121f73fed3dbd01aed4f"},{url:"screenshot-pc.jpg",revision:"9979005563afa2511e6bb742c85fd685"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"manifest.webmanifest",revision:"8ec4719145efbdf3b9368b18a98477f4"}],{ignoreURLParametersMatching:[/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.onmicrosoft.cn\/(.*?)\.(js|css)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.googleapis.com\/.*\//,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.gstatic.com\/.*\//,new s.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
