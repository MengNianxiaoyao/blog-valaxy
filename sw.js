if(!self.define){let s,e={};const i=(i,a)=>(i=new URL(i+".js",a).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(a,d)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let c={};const r=s=>i(s,t),f={module:{uri:t},exports:c,require:r};e[t]=Promise.all(a.map((s=>f[s]||r(s)))).then((s=>(d(...s),c)))}}define(["./workbox-33d75f05"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"dist/assets/_...path_-NxE_u4Ln.js",revision:"1bee4812587606a581df17dec2fa7412"},{url:"dist/assets/_page_-vSwxt8Cz.js",revision:"76da1ef1ec202d28d3651fc946479c1c"},{url:"dist/assets/404-CZWQLtc2.js",revision:"907abad887ed4d45d7692c687983a0e5"},{url:"dist/assets/404-d3WBR7R-.css",revision:"f0113d3a5444c77ce14553facec45243"},{url:"dist/assets/404-lQJhk5O7.css",revision:"2ac28122e5e46d0b0b5f452ee315a7df"},{url:"dist/assets/404-O5eh4eUH.js",revision:"045c88d052ebdc5e8601ad93a56d7c1e"},{url:"dist/assets/404-VpcBVr7-.js",revision:"1f18178898ce86fb5191315c3a137854"},{url:"dist/assets/404-vYJAegI2.css",revision:"7354f6b103e0d87975ab90175d6b3f50"},{url:"dist/assets/404-wXyC2lCv.js",revision:"f771a6ab85fa2ad7a481f3afca7c40b6"},{url:"dist/assets/albums-bD8hI59o.js",revision:"7f6dfbb84ad56df9db65c408a2af8038"},{url:"dist/assets/albums-ZgD7XIlY.css",revision:"b07282aa6c2e78169bad3c2d80ebc400"},{url:"dist/assets/app-iRVCAWGZ.js",revision:"f50b59d44332fd9e778346db89d74ba6"},{url:"dist/assets/app-ui6DUF_1.css",revision:"00a0266a6288ba44c4dc5be42a0ba614"},{url:"dist/assets/archives-TjXrgVXc.js",revision:"dfc1fffc6e9613cbdb53cd0c9e52c58a"},{url:"dist/assets/baiye2-NmLnxX3q.js",revision:"0f36a7e54feb08710956792e6b4b32f0"},{url:"dist/assets/baiye3-WHrh9nCd.js",revision:"a90745fc7e2de87e2faa37fe8fb2722e"},{url:"dist/assets/baodao-a4RhMCc5.js",revision:"62346c90f34afd6feb739e97632f8be0"},{url:"dist/assets/bg-img-JF3TTMXB.jpg",revision:"71f1378d44d22f1ada01a40944e86013"},{url:"dist/assets/boke2-dKJLMHAO.js",revision:"893e17f8a1414a849c9274244b239187"},{url:"dist/assets/boke3-5RU0Rn6K.js",revision:"3373ac5f4ad7308a94455a11ac1c2100"},{url:"dist/assets/boke4-_fAWuU0X.js",revision:"4035efaccfd32320de037b2b12373d23"},{url:"dist/assets/categories-7EA5-V7v.js",revision:"3f527bc2d3d0490af6ef0bce1e5328da"},{url:"dist/assets/categories-UnLTdz3j.css",revision:"760ac9ac351ed19b596525187c7abe54"},{url:"dist/assets/domain-_xgiHdNq.js",revision:"2196bdbb9a5ea77de8fa99b30d185965"},{url:"dist/assets/gallery-z6Gvu6hs.js",revision:"844c5d7cb17d949ced3b9d6e950c4895"},{url:"dist/assets/ghproxy-WXIS2nFs.js",revision:"677d2ca58787a099e4d4ab33ce1ec06e"},{url:"dist/assets/home-_58s-R6X.css",revision:"0f56b4e6d4b7a9be26aed0932c905f0f"},{url:"dist/assets/home-tqO0NknL.js",revision:"7dd132f1d0b257e25812630fb332a120"},{url:"dist/assets/index--o9ZelX1.css",revision:"c604ad037ebc9fc67dd2b7c7c35edff1"},{url:"dist/assets/index-1VgNbmXR.js",revision:"187344c3b1f24bf8f5c5c95dfe7de535"},{url:"dist/assets/index-6frlaeMx.js",revision:"9f65869d284bcb486cb2f0111dd2efda"},{url:"dist/assets/index-C93DojyR.js",revision:"ff0952cb40d9d6cd0afeb0abb69d9dcb"},{url:"dist/assets/index-CTbO6JqC.js",revision:"fbb1f3c8d818434c61f0254ed8622dad"},{url:"dist/assets/index-FlBy0db4.js",revision:"1ed4fc2dac953bd428f3f8ae935dd7a7"},{url:"dist/assets/index-fSnxMYqu.js",revision:"fe288c87c098e861f50e81032448a035"},{url:"dist/assets/index-fX1EJ2lD.js",revision:"a14f5e1d641b0754d383284511b61751"},{url:"dist/assets/index-FZA6Z2T6.js",revision:"b0cc282a6cde65173af5a3c0ad30cf40"},{url:"dist/assets/index-MzauhqnQ.js",revision:"e709f52c733e651694f0659b28cd641f"},{url:"dist/assets/index-nlSmcLJj.js",revision:"ebb2787578b6644060f24c530c531b74"},{url:"dist/assets/index-PYHqjMAb.js",revision:"babef151661cece79dfdcc234162b995"},{url:"dist/assets/index-QF2ntmgc.js",revision:"2569535a7cb4741b3160af22f7fef33d"},{url:"dist/assets/index-Sar3xCOG.js",revision:"9f8f16165bf5aaf64ec04184889ec5d4"},{url:"dist/assets/index-sgq2Cns4.js",revision:"ce009d5112ca8ac26e4f336cbc046ae4"},{url:"dist/assets/index-zkdiNqOX.js",revision:"298aa7d4fc284142eae4eed08d752f6b"},{url:"dist/assets/index-Zo8Ev_b6.js",revision:"6fc672469e4cbeb3b041b58e55da9abf"},{url:"dist/assets/lyq-uIgMMKG9.js",revision:"f5c28204b3243f328f386ade42682012"},{url:"dist/assets/meihua1-EPFxKajV.js",revision:"38edcf60c3e5e39c805102f5fa080fc9"},{url:"dist/assets/meihua10-Q_Kkoqxh.js",revision:"273c20832f23b497b131f8d377542ee7"},{url:"dist/assets/meihua11-HkIARbef.js",revision:"a44d14386069bc335361461fe5c2d813"},{url:"dist/assets/meihua2-Z0wf5Iqi.js",revision:"03c85002f611e94d82e2cf9614a6e4f9"},{url:"dist/assets/meihua3-kzxqH_8d.js",revision:"1093c068a39716d1e74575ac3b2ae621"},{url:"dist/assets/meihua4-wnDoAlbZ.js",revision:"8dc1f7aada4fcde96737584c83f16f9b"},{url:"dist/assets/meihua5-5SvPh-ag.js",revision:"06a13648ea26bede5a02b262185736e1"},{url:"dist/assets/meihua6-03vY39oU.js",revision:"05eea1b1a0fb449947436b0336f8166c"},{url:"dist/assets/meihua7-pZALuLxc.js",revision:"3207c069e092eabeb57a49384073f10d"},{url:"dist/assets/meihua8-W233o2iD.js",revision:"21855bbf3ae699a805ce33fd901109ff"},{url:"dist/assets/meihua9-s3dMfQ2Z.js",revision:"6b4ba8320afffd03c281f285971310e5"},{url:"dist/assets/none-yzNQDLA9.jpg",revision:"2035615ec9d3b134ebbb557f674e7fbc"},{url:"dist/assets/novelai1-ETtSOJPc.js",revision:"26b1cdbe56e09090e7fb33211eae5c59"},{url:"dist/assets/novelai2-S4_KLtEF.js",revision:"e261c1266538debe55cbfd651e2a161e"},{url:"dist/assets/ohook-eHZ9Wa9-.js",revision:"eafbe0263251f04b8562818403063b64"},{url:"dist/assets/post-_yEgA8_j.js",revision:"6766e9ad37d06e8ba7af2ecb5595ffa2"},{url:"dist/assets/post-IEKaYRio.css",revision:"2daaa761e2d9b044d68f45673bff32c9"},{url:"dist/assets/post-oLo1d8yi.js",revision:"7ea64235b292255d5d3eda876a14e673"},{url:"dist/assets/reader-O8oNqSMX.js",revision:"04b9aa4ed3838d12400ac0e01ea67950"},{url:"dist/assets/route-block-zudrvJp0.js",revision:"703a0c9620dd946cc85f5ccee2828005"},{url:"dist/assets/site-GUH_zn5V.js",revision:"0af76f2ed6e5dc1f6eac7d656c488050"},{url:"dist/assets/source2-qng9hNsB.js",revision:"4fec9f4511c3c221ae9c38027bc1d4e9"},{url:"dist/assets/tags-6kuPcfX0.js",revision:"8b44b89ce074bf42a68153f0d7e33543"},{url:"dist/assets/typora-x1ptXX1_.js",revision:"9ac43e2ca665d21464bc5d77a5fe1feb"},{url:"dist/assets/uptime-_JlxAZZi.js",revision:"916aa8ce7ec3f86bb1892c7a50d3708f"},{url:"dist/assets/ValaxyMain-0iaxSEQb.css",revision:"940e88a29f37f370c4af9c01ed9814da"},{url:"dist/assets/ValaxyMain.vue_vue_type_style_index_0_lang-LL4I9T08.js",revision:"683e8809dac222eff992589304a3d2d5"},{url:"dist/assets/virtual_pwa-register-aoR-Tmjw.js",revision:"f33466a8054ef7f1a15ec92974191692"},{url:"dist/assets/workbox-window.prod.es5-prqDwDSL.js",revision:"ed0c862094c41f455cdef837aa7dafd2"},{url:"dist/assets/YunAlgoliaSearch-un5YF_Rb.js",revision:"597a29648025f2513ab17ca3c02f40f1"},{url:"dist/assets/YunCard.vue_vue_type_script_setup_true_lang-PjAM3Mve.js",revision:"a24acb46616e389ca4daba7a39571805"},{url:"dist/assets/YunFooter-dFYkuLVA.css",revision:"c47d87e9b134ca72d5891e799512d8d9"},{url:"dist/assets/YunFooter.vue_vue_type_style_index_0_lang-Qe4J5zI6.js",revision:"df9bb604a9c8d32015f1b250fb5c0ecf"},{url:"dist/assets/YunGallery-OyZa6uq2.js",revision:"65b44c5b21d75794cda12613699f4d5c"},{url:"dist/assets/YunPageHeader.vue_vue_type_script_setup_true_lang-CxwVtofy.js",revision:"82377a80cb88f6156115dbc3943a1c77"},{url:"dist/assets/YunPostCollapse-82QETku1.css",revision:"3ab792f7552d723b7a40c7126b02cd3c"},{url:"dist/assets/YunPostCollapse.vue_vue_type_style_index_0_lang-my5ps8Zo.js",revision:"2b9ce54cc38d0f4217b98db67c8a18a5"},{url:"dist/assets/YunPostList-mA05bKd8.css",revision:"42871260de2af0f743a0c409b11b4d4f"},{url:"dist/assets/YunPostList.vue_vue_type_style_index_0_lang-vL_IWX6B.js",revision:"a8a11cd7e59e016abbe1be595e09eee5"},{url:"dist/assets/YunPostMeta-eP8AR0dX.css",revision:"2453d6c8b5b70f50250b2b420a677374"},{url:"dist/assets/YunPostMeta.vue_vue_type_script_setup_true_lang-gfThhkqi.js",revision:"511d108cbb439a7dbef89c8a970c669c"},{url:"dist/favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"dist/index.html",revision:"89e2a5dbf4f028fd420f60bdc43db021"},{url:"dist/pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"dist/pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"dist/safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"index.html",revision:"5b6e371fab56c9ed9957e2e085e08d38"},{url:"public/favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"public/pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"public/pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"public/safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"manifest.webmanifest",revision:"22ab653848f5784d7383bf9f38f62fb1"}],{ignoreURLParametersMatching:[/.*/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
