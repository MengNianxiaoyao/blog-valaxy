if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-f3e6b16a"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-5gEPmtlK.js",revision:null},{url:"assets/_page_-dGeKeHkO.js",revision:null},{url:"assets/404-cZJ-_2it.js",revision:null},{url:"assets/404-lQJhk5O7.css",revision:null},{url:"assets/404-T2ANxUcX.js",revision:null},{url:"assets/404-vYJAegI2.css",revision:null},{url:"assets/404-YWNcL2JQ.js",revision:null},{url:"assets/albums-wrjaYXXm.js",revision:null},{url:"assets/albums-ZgD7XIlY.css",revision:null},{url:"assets/app-gpmBT3BZ.js",revision:null},{url:"assets/app-Mk-jwjF8.css",revision:null},{url:"assets/archives-SNLclklh.js",revision:null},{url:"assets/baiye2-4RiUuQSo.js",revision:null},{url:"assets/baiye3-DiWMHYvv.js",revision:null},{url:"assets/baodao-jY-IufjH.js",revision:null},{url:"assets/bg-img-JF3TTMXB.jpg",revision:null},{url:"assets/boke2-ncrUJUYn.js",revision:null},{url:"assets/boke3-7NnPepvb.js",revision:null},{url:"assets/boke4-tVXUXPkB.js",revision:null},{url:"assets/categories-3xhqsGL_.js",revision:null},{url:"assets/categories-UnLTdz3j.css",revision:null},{url:"assets/domain-YmwR7BVq.js",revision:null},{url:"assets/gallery-LQ_8_e0E.js",revision:null},{url:"assets/ghproxy-PWoiOAdg.js",revision:null},{url:"assets/home-_58s-R6X.css",revision:null},{url:"assets/home-F7orhMoF.js",revision:null},{url:"assets/index--o9ZelX1.css",revision:null},{url:"assets/index-0gG4mSmt.js",revision:null},{url:"assets/index-4YUWr1WE.js",revision:null},{url:"assets/index-BBGJCj7q.js",revision:null},{url:"assets/index-BY7tq78x.js",revision:null},{url:"assets/index-iNPkzwzL.js",revision:null},{url:"assets/index-ISj_CWLm.js",revision:null},{url:"assets/index-lOlBxy60.js",revision:null},{url:"assets/index-lRYaEs0b.js",revision:null},{url:"assets/index-m6nxlFvU.js",revision:null},{url:"assets/index-Ndokn3DO.js",revision:null},{url:"assets/index-nlSmcLJj.js",revision:null},{url:"assets/index-nsLh4-EC.js",revision:null},{url:"assets/index-PrrbAR6_.js",revision:null},{url:"assets/index-rSDnzBHX.js",revision:null},{url:"assets/index-sMEcnuix.js",revision:null},{url:"assets/index-VvIyruhG.js",revision:null},{url:"assets/index-XeGpT8ko.js",revision:null},{url:"assets/lyq-gO4UK4m3.js",revision:null},{url:"assets/meihua1-X8x-QJC3.js",revision:null},{url:"assets/meihua10-EH2hZF18.js",revision:null},{url:"assets/meihua11-E7b65QN8.js",revision:null},{url:"assets/meihua2-DkErGJNl.js",revision:null},{url:"assets/meihua3-eJ5kcBec.js",revision:null},{url:"assets/meihua4-5rK-v_BD.js",revision:null},{url:"assets/meihua5-boI7ezxr.js",revision:null},{url:"assets/meihua6-RczfUw88.js",revision:null},{url:"assets/meihua7-xCSaxocb.js",revision:null},{url:"assets/meihua8-G3_Fgr0v.js",revision:null},{url:"assets/meihua9-qBUkaeka.js",revision:null},{url:"assets/none-yzNQDLA9.jpg",revision:null},{url:"assets/novelai1-2l7GG127.js",revision:null},{url:"assets/novelai2-Or8TmGG6.js",revision:null},{url:"assets/ohook-aY_b5JQX.js",revision:null},{url:"assets/post-Fstfa3k_.js",revision:null},{url:"assets/post-IEKaYRio.css",revision:null},{url:"assets/post-QzzGRoQx.js",revision:null},{url:"assets/reader-FptIUhNV.js",revision:null},{url:"assets/route-block-zudrvJp0.js",revision:null},{url:"assets/sidebar-bg-img-JqeeIBML.webp",revision:null},{url:"assets/site-sVZIYcHD.js",revision:null},{url:"assets/source2-oOWL2mY1.js",revision:null},{url:"assets/tags-7S_f9UTO.js",revision:null},{url:"assets/typora-StWSb86M.js",revision:null},{url:"assets/uptime-mq85ccd-.js",revision:null},{url:"assets/ValaxyMain-0iaxSEQb.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang-zZCVodIL.js",revision:null},{url:"assets/virtual_pwa-register-zY3b5bca.js",revision:null},{url:"assets/workbox-window.prod.es5-prqDwDSL.js",revision:null},{url:"assets/YunAlgoliaSearch-JxLS65PI.js",revision:null},{url:"assets/YunCard.vue_vue_type_script_setup_true_lang-1mjt3lNw.js",revision:null},{url:"assets/YunFooter-dFYkuLVA.css",revision:null},{url:"assets/YunFooter.vue_vue_type_style_index_0_lang-T3-faOdY.js",revision:null},{url:"assets/YunGallery-yeLuGNs3.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang-iHWD23fx.js",revision:null},{url:"assets/YunPostCollapse-82QETku1.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang-PArXdEMN.js",revision:null},{url:"assets/YunPostList-mA05bKd8.css",revision:null},{url:"assets/YunPostList.vue_vue_type_style_index_0_lang-zbia8jb3.js",revision:null},{url:"assets/YunPostMeta-eP8AR0dX.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang-vN6e4VbK.js",revision:null},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"381b06667716750bc27a5c50379eb147"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"manifest.webmanifest",revision:"22ab653848f5784d7383bf9f38f62fb1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
