if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const u=s=>l(s,n),t={module:{uri:n},exports:a,require:u};e[n]=Promise.all(i.map((s=>t[s]||u(s)))).then((s=>(r(...s),a)))}}define(["./workbox-23dc0c55"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...path_-VlfPBGr-.js",revision:null},{url:"assets/_page_-BzE47CTd.js",revision:null},{url:"assets/404-BeunW-PT.js",revision:null},{url:"assets/404-BMg5lmUL.css",revision:null},{url:"assets/404-C9gkB6Aj.css",revision:null},{url:"assets/404-CvS1kNN8.js",revision:null},{url:"assets/404-DSBSkgB0.js",revision:null},{url:"assets/albums-B9QMTeY0.js",revision:null},{url:"assets/albums-BmAPtciV.css",revision:null},{url:"assets/animation-in-CQBZZygY.css",revision:null},{url:"assets/app-BALI8yX7.js",revision:null},{url:"assets/app-DtlWsUYY.css",revision:null},{url:"assets/archives-ysFJ8Vvt.js",revision:null},{url:"assets/back-CBLxc7Pa.js",revision:null},{url:"assets/baodao-CTlvwP-T.js",revision:null},{url:"assets/bg-img-kXdNMxcF.jpg",revision:null},{url:"assets/boke1-CHbkb-w7.js",revision:null},{url:"assets/boke2-B9OqZHaz.js",revision:null},{url:"assets/boke3-cCqlgJDT.js",revision:null},{url:"assets/boke4-Gw0H3Hf2.js",revision:null},{url:"assets/boke5-DkJAKw_8.js",revision:null},{url:"assets/byjg1-CG7tzUWo.js",revision:null},{url:"assets/byjg2-CkPyPUSn.js",revision:null},{url:"assets/byjg3-BeQyvXRz.js",revision:null},{url:"assets/categories-BSctN3Pe.css",revision:null},{url:"assets/categories-DD10kqj9.js",revision:null},{url:"assets/cdn-DAv6rgd5.js",revision:null},{url:"assets/composable-yeg93l61.js",revision:null},{url:"assets/config-C0stVqEb.js",revision:null},{url:"assets/domain-DNZFup3h.js",revision:null},{url:"assets/email-CCsY8Px4.js",revision:null},{url:"assets/empty-D4Plxoot.js",revision:null},{url:"assets/faq-BxRjX8jC.js",revision:null},{url:"assets/gallery-BjQkVuVE.js",revision:null},{url:"assets/ghproxy-CI8n361_.js",revision:null},{url:"assets/helper-Bvm1RlFc.js",revision:null},{url:"assets/home-D_nyz5Hp.css",revision:null},{url:"assets/home-EEbFHQuc.js",revision:null},{url:"assets/image-BWuMIXpd.js",revision:null},{url:"assets/index-B6PRnd4u.js",revision:null},{url:"assets/index-BiYT-J-7.js",revision:null},{url:"assets/index-BWNJhQhn.js",revision:null},{url:"assets/index-C0cR-Kvv.js",revision:null},{url:"assets/index-C5okkQwF.js",revision:null},{url:"assets/index-Cauq97OZ.js",revision:null},{url:"assets/index-CDtsDhRZ.css",revision:null},{url:"assets/index-CrTZhYMr.js",revision:null},{url:"assets/index-D1ImyBiK.js",revision:null},{url:"assets/index-DFJufBHi.js",revision:null},{url:"assets/index-DlZKRWVm.js",revision:null},{url:"assets/index-DMGgB8tt.css",revision:null},{url:"assets/index-mnGPb5We.js",revision:null},{url:"assets/KaTeX_AMS-Regular-BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular-DMm9YOAa.woff",revision:null},{url:"assets/KaTeX_AMS-Regular-DRggAlZN.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-ATXxdsX0.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular-wX97UBjC.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BdnERNNW.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold-BsDP51OF.woff",revision:null},{url:"assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CB_wures.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff",revision:null},{url:"assets/KaTeX_Main-Bold-Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold-Jm3AIy58.woff",revision:null},{url:"assets/KaTeX_Main-Bold-waoOVXN0.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic-DzxPMmG6.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic-SpSLRI95.woff",revision:null},{url:"assets/KaTeX_Main-Italic-3WenGoN9.ttf",revision:null},{url:"assets/KaTeX_Main-Italic-BMLOBm91.woff",revision:null},{url:"assets/KaTeX_Main-Italic-NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular-Dr94JaBh.woff",revision:null},{url:"assets/KaTeX_Main-Regular-ypZvNtVU.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-B3XSjfu4.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff",revision:null},{url:"assets/KaTeX_Math-Italic-DA0__PXp.woff",revision:null},{url:"assets/KaTeX_Math-Italic-flOr_0UB.ttf",revision:null},{url:"assets/KaTeX_Math-Italic-t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-CFMepnvq.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic-DN2j7dab.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic-YYjJ1zSn.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-BNo7hRIc.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-C5JkGWo-.ttf",revision:null},{url:"assets/KaTeX_Script-Regular-D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Script-Regular-D5yQViql.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-C195tn64.woff",revision:null},{url:"assets/KaTeX_Size1-Regular-Dbsnue_I.ttf",revision:null},{url:"assets/KaTeX_Size1-Regular-mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-B7gKUWhC.ttf",revision:null},{url:"assets/KaTeX_Size2-Regular-Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular-oD1tc_U0.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-CTq5MqoE.woff",revision:null},{url:"assets/KaTeX_Size3-Regular-DgpXs0kz.ttf",revision:null},{url:"assets/KaTeX_Size4-Regular-BF-4gkZK.woff",revision:null},{url:"assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Size4-Regular-DWFBv043.ttf",revision:null},{url:"assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff",revision:null},{url:"assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular-D3Ib7_Hf.ttf",revision:null},{url:"assets/lyq-DWIlK5ah.js",revision:null},{url:"assets/meihua-DEBXeBLE.js",revision:null},{url:"assets/meihua1-BeohA-5h.js",revision:null},{url:"assets/meihua10-BsP3Ae1V.js",revision:null},{url:"assets/meihua11-C5OKEeh0.js",revision:null},{url:"assets/meihua2-BZHdSkN8.js",revision:null},{url:"assets/meihua3-Dl5NdlP0.js",revision:null},{url:"assets/meihua4-BcfCVZvA.js",revision:null},{url:"assets/meihua5-C6eqydtH.js",revision:null},{url:"assets/meihua6-D6-pCIcW.js",revision:null},{url:"assets/meihua7-dpUKpS5f.js",revision:null},{url:"assets/meihua8-D3Ge6orV.js",revision:null},{url:"assets/meihua9-0PJDUds4.js",revision:null},{url:"assets/none-DLM1AMsD.jpg",revision:null},{url:"assets/novelai-C3lZ9_xi.js",revision:null},{url:"assets/novelai1-DYdCQaK3.js",revision:null},{url:"assets/novelai2-zUBkJcah.js",revision:null},{url:"assets/ohook-CSZWfKqe.js",revision:null},{url:"assets/post-BdZZ03BK.js",revision:null},{url:"assets/post-D4Plxoot.js",revision:null},{url:"assets/post-D8GSx3kg.js",revision:null},{url:"assets/post-gQpphGKg.css",revision:null},{url:"assets/reader-ByDotFTX.js",revision:null},{url:"assets/route-block-B_A1xBdJ.js",revision:null},{url:"assets/sidebar-bg-img-mp54gEws.webp",revision:null},{url:"assets/site-owYlrHz0.js",revision:null},{url:"assets/source1-CTFYFM1n.js",revision:null},{url:"assets/source2-BcIgJXE7.js",revision:null},{url:"assets/tags-BAtZ70xW.js",revision:null},{url:"assets/tools-l8Y4Iv3D.js",revision:null},{url:"assets/typora-BfI6IFIe.js",revision:null},{url:"assets/uptime-B36xl0Mw.js",revision:null},{url:"assets/uptimeapi-CyFYcz0N.js",revision:null},{url:"assets/ValaxyMain-CxY0pdzc.css",revision:null},{url:"assets/ValaxyMain.vue_vue_type_style_index_0_lang-DRlEIQuZ.js",revision:null},{url:"assets/view-transition-nZH5RA25.css",revision:null},{url:"assets/virtual_pwa-register-Bp6K4BJx.js",revision:null},{url:"assets/welcome-D5-EILOt.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"assets/YunAlgoliaSearch-ClnrO-kj.js",revision:null},{url:"assets/YunCard.vue_vue_type_script_setup_true_lang-CiY8cYAo.js",revision:null},{url:"assets/YunFooter-DjwaLgRs.css",revision:null},{url:"assets/YunFooter.vue_vue_type_style_index_0_lang-Br6d15qY.js",revision:null},{url:"assets/YunGallery-pn2iaOAY.js",revision:null},{url:"assets/YunPageHeader.vue_vue_type_script_setup_true_lang-70YMoYcb.js",revision:null},{url:"assets/YunPostCollapse-DzZAROS7.css",revision:null},{url:"assets/YunPostCollapse.vue_vue_type_style_index_0_lang-bAzKZMzj.js",revision:null},{url:"assets/YunPostList-CYDTlsp3.css",revision:null},{url:"assets/YunPostList.vue_vue_type_style_index_0_lang-BvxMztAM.js",revision:null},{url:"assets/YunPostMeta-B4_wBHR1.css",revision:null},{url:"assets/YunPostMeta.vue_vue_type_script_setup_true_lang-C0hGXp9R.js",revision:null},{url:"cursor/link.cur",revision:"1d0a56b480fe48c6c4ed5154c45e3cec"},{url:"cursor/pointer.cur",revision:"c4d488bd8f4e787199402d1452b85961"},{url:"cursor/text.cur",revision:"db5486339a68df1e19cace70624afb16"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"index.html",revision:"96fc085ddfc3f0882998b107c3e3b397"},{url:"live2d-assets/live2d.min.js",revision:"97a06b32b6e6bee8db7aa128b99b7cc2"},{url:"live2d-assets/waifu-tips.js",revision:"6ff120ccc164e44397a62d9c422569ed"},{url:"live2d-assets/waifu.css",revision:"68aac09b836a1ca1c138b74f46835459"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"screenshot-mobile.jpg",revision:"20e471102cdb5dd71038ff861dec552d"},{url:"screenshot-pc.jpg",revision:"a04a1b497a3ad69c60224caa37823dbd"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"82def9f348dffe8bcbceeec739712bb7"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"manifest.webmanifest",revision:"a81d024f8c1ddb17be49fff1cf645e3a"}],{ignoreURLParametersMatching:[/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/.*.(cbd.int|onmicrosoft.cn)\/(.*?)\.(js|css|json)/,new s.NetworkOnly,"GET"),s.registerRoute(/(.*?)\.(jpg|png|webp|svg|cur)/,new s.CacheFirst({cacheName:"blog-image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/(.*?)\.(woff|woff2|ttf)/,new s.CacheFirst({cacheName:"blog-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/fonts.(googleapis|gstatic).com\/.*\//,new s.CacheFirst({cacheName:"network-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
