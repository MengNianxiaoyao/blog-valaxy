if(!self.define){let s,e={};const a=(a,i)=>(a=new URL(a+".js",i).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(i,d)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let r={};const c=s=>a(s,t),f={module:{uri:t},exports:r,require:c};e[t]=Promise.all(i.map((s=>f[s]||c(s)))).then((s=>(d(...s),r)))}}define(["./workbox-33d75f05"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"dist/assets/_...path_--S5dCzXs.js",revision:"58dd7bff65a8e4865a202e530ea80a8c"},{url:"dist/assets/_page_-BVh3f50S.js",revision:"92c0732c743d211e4d0292fe2e48996b"},{url:"dist/assets/404-d3WBR7R-.css",revision:"f0113d3a5444c77ce14553facec45243"},{url:"dist/assets/404-dLWvTRbF.js",revision:"ecc0028d472fe46943a94f0bdb456cc5"},{url:"dist/assets/404-l-3EjDG1.js",revision:"198fa90356e50e14fb91e78af5074bdf"},{url:"dist/assets/404-lQJhk5O7.css",revision:"2ac28122e5e46d0b0b5f452ee315a7df"},{url:"dist/assets/404-oATBmlO-.js",revision:"9b1c8a734df6c624a33fa76e888e7870"},{url:"dist/assets/404-Q0eOQphs.js",revision:"ba96399040a8d84dabb4188f9ec6a557"},{url:"dist/assets/404-vYJAegI2.css",revision:"7354f6b103e0d87975ab90175d6b3f50"},{url:"dist/assets/albums-k6p46yVY.js",revision:"9633486340619a6c54235774e1c09791"},{url:"dist/assets/albums-ZgD7XIlY.css",revision:"b07282aa6c2e78169bad3c2d80ebc400"},{url:"dist/assets/app-tVxWbv5H.js",revision:"286e09396c5fbae6c38007a9ea062670"},{url:"dist/assets/app-ui6DUF_1.css",revision:"00a0266a6288ba44c4dc5be42a0ba614"},{url:"dist/assets/archives-VjlhwFIP.js",revision:"964275a8f093fb30fb4c687510ee5d1d"},{url:"dist/assets/baiye2-0H2tOs8n.js",revision:"6e757ecb9d3470e5fad867d5add0ecab"},{url:"dist/assets/baiye3-vnGXJDsR.js",revision:"cc0b6da596e5d31fecfea6102e4369d6"},{url:"dist/assets/baodao-VZZDR6fU.js",revision:"3e220c207dc374a55cd5da7b4a7d2463"},{url:"dist/assets/bg-img-JF3TTMXB.jpg",revision:"71f1378d44d22f1ada01a40944e86013"},{url:"dist/assets/boke2-rhQRE-JR.js",revision:"025735dbe7685c2d17c1e26151afd42a"},{url:"dist/assets/boke3-KIe79kMI.js",revision:"4b12728b3b07b9426e6918e61168c1ac"},{url:"dist/assets/boke4-RoPEOceK.js",revision:"0c88cf56cc12a59be969ac0f00046d88"},{url:"dist/assets/categories-nxrHX4U6.js",revision:"6c41f4bc79e3b57e33a4145ea0850d11"},{url:"dist/assets/categories-UnLTdz3j.css",revision:"760ac9ac351ed19b596525187c7abe54"},{url:"dist/assets/domain-enXLBsJg.js",revision:"aa0b5570be946150ed8bee5a1b3affb6"},{url:"dist/assets/gallery--zPwDAsd.js",revision:"6539694b39e338ab2bfaf82a611d51e7"},{url:"dist/assets/ghproxy-WdTr1P6n.js",revision:"186f4e54ffda1704b15eefd1d9e5040e"},{url:"dist/assets/home-_58s-R6X.css",revision:"0f56b4e6d4b7a9be26aed0932c905f0f"},{url:"dist/assets/home-4yfnutC0.js",revision:"938e27f4f3a340c3aed6cc22fb6fe099"},{url:"dist/assets/index--o9ZelX1.css",revision:"c604ad037ebc9fc67dd2b7c7c35edff1"},{url:"dist/assets/index-1xfUpaI5.js",revision:"4cc066912060ba80e7de953fbe241a5c"},{url:"dist/assets/index-Ag1Vs8VZ.js",revision:"a9e19cf61dcf4c423032b5ead3bbed46"},{url:"dist/assets/index-BqJzQzxk.js",revision:"c456c287f2c1e43daefeb6d7bfbc50f0"},{url:"dist/assets/index-cJMua_nC.js",revision:"4aed86948ebefddf5c43b647b2ce0fc1"},{url:"dist/assets/index-CJXaRs-E.js",revision:"4f859cf541bd288020830d397174e35c"},{url:"dist/assets/index-DCR3cdPh.js",revision:"ce0dd6267ee796db8167cf8ae589656f"},{url:"dist/assets/index-GBTUD6qY.js",revision:"bc2cbff7dc37bfd662ab277539d8e6c3"},{url:"dist/assets/index-gRNjCvzR.js",revision:"d606518209e56b6bff11cd8fa27ce488"},{url:"dist/assets/index-H12IV-g0.js",revision:"ac5f2d97f898c9e6481d9a8b6e58efdc"},{url:"dist/assets/index-LgUj_acA.js",revision:"e0262b5056c912998a657ebf46d1a26a"},{url:"dist/assets/index-nlSmcLJj.js",revision:"ebb2787578b6644060f24c530c531b74"},{url:"dist/assets/index-O3A53xZK.js",revision:"5039e13986b480641bccbb4e58bed9f1"},{url:"dist/assets/index-tAkiiwKG.js",revision:"e41ab7ac9000ee3bdc04c74fd796ac9c"},{url:"dist/assets/index-Vc4DKK9R.js",revision:"f85d47817ac772bef69b685ef3a1e7a1"},{url:"dist/assets/index-WwBbtel5.js",revision:"97e42381b189164e38294d94f2091116"},{url:"dist/assets/index-zX3PC2Un.js",revision:"6a3a7f17f4b30e6cb7887f2750404c86"},{url:"dist/assets/lyq-bVqZFJKU.js",revision:"e40ffe290ab3beacf2dedcb30ac0abc7"},{url:"dist/assets/meihua1-MpjxQVos.js",revision:"b6fd9b406e6f0292a73aa55b4e3f8f36"},{url:"dist/assets/meihua10-CYPtUVTX.js",revision:"faff66419d440b4d629f54da08433c38"},{url:"dist/assets/meihua11-mT8GsbAE.js",revision:"23ba6ad13520fc82d4a5bf31299a5784"},{url:"dist/assets/meihua2-dyA6xgDV.js",revision:"aa9e4fbb9fb4fe81cf854e838e204dfb"},{url:"dist/assets/meihua3-PEDfVTIZ.js",revision:"e8ebb29877e668cd0d6e9415e12950d4"},{url:"dist/assets/meihua4-GD59oMTx.js",revision:"1af2122ab3a9fea2a9dd720e8a773841"},{url:"dist/assets/meihua5-ZXhm1awx.js",revision:"4534bee9058ddb1a35ae1b6f7e3c0ae7"},{url:"dist/assets/meihua6-fcxPjVG5.js",revision:"7098ae108ab346f3a9fc9461989ae15b"},{url:"dist/assets/meihua7-l7LTA6LJ.js",revision:"5142098d453105e5cff124442b114d1e"},{url:"dist/assets/meihua8-OheG9mwu.js",revision:"687afd83d0f1eafea3c56760d322f405"},{url:"dist/assets/meihua9-KVmwDNtN.js",revision:"c93e4a504049b37092a0f51c18a1aa8a"},{url:"dist/assets/none-yzNQDLA9.jpg",revision:"2035615ec9d3b134ebbb557f674e7fbc"},{url:"dist/assets/novelai1-MNBcEfuM.js",revision:"b65c1da60752f7b280204b2fb9cc257a"},{url:"dist/assets/novelai2-mRhB1zTM.js",revision:"fc400bebca0f9b67d65875eb3be607a3"},{url:"dist/assets/ohook-K_WLIkDs.js",revision:"785b166e7a3e1ac7a5cf4d5b582abffa"},{url:"dist/assets/post-2sSCKTSE.js",revision:"a354ddf09aa6299c48d7d91b366a1a7a"},{url:"dist/assets/post-acEw1MnW.js",revision:"1edbccdf745405874e0e4d61b0a38895"},{url:"dist/assets/post-IEKaYRio.css",revision:"2daaa761e2d9b044d68f45673bff32c9"},{url:"dist/assets/reader-h-A-mgpo.js",revision:"4ff260a1d3622ae4613a0083a2a2011f"},{url:"dist/assets/route-block-zudrvJp0.js",revision:"703a0c9620dd946cc85f5ccee2828005"},{url:"dist/assets/site-u0J-72c-.js",revision:"af919d69e9be65209d473173934ade7a"},{url:"dist/assets/source2--QjcByq9.js",revision:"a9a27229148315cd525be3e847a52d3c"},{url:"dist/assets/tags-uB4uo4xE.js",revision:"6b8155912aeed448afadcfc03b639404"},{url:"dist/assets/typora-oSxYJ-IV.js",revision:"9ebfdfcd5fb764c797cd0e753185b4ee"},{url:"dist/assets/uptime-ixrKDgaH.js",revision:"e7ca073832f7a87496abc9428efdef07"},{url:"dist/assets/ValaxyMain-0iaxSEQb.css",revision:"940e88a29f37f370c4af9c01ed9814da"},{url:"dist/assets/ValaxyMain.vue_vue_type_style_index_0_lang-V1m1dCEI.js",revision:"2625411b6e2d26e35fa263c574d4cf32"},{url:"dist/assets/virtual_pwa-register-kTt4TlcQ.js",revision:"de864de8f9c707a58ee50359321a2390"},{url:"dist/assets/workbox-window.prod.es5-prqDwDSL.js",revision:"ed0c862094c41f455cdef837aa7dafd2"},{url:"dist/assets/YunAlgoliaSearch-avalMZeR.js",revision:"047adf68560338ffb703ed58a06d33f9"},{url:"dist/assets/YunCard.vue_vue_type_script_setup_true_lang-pRRq3Arh.js",revision:"1cd251b75de7251dbabbb33d8d7a6990"},{url:"dist/assets/YunFooter-dFYkuLVA.css",revision:"c47d87e9b134ca72d5891e799512d8d9"},{url:"dist/assets/YunFooter.vue_vue_type_style_index_0_lang-bk9I8BJ5.js",revision:"75575725761c0f2f3bdf65ef49aef352"},{url:"dist/assets/YunGallery-OgNayXsS.js",revision:"ee29a89c1eee2ab7ff8cd20074fbde7f"},{url:"dist/assets/YunPageHeader.vue_vue_type_script_setup_true_lang-L1yDEw3u.js",revision:"abc27f689f00bc2a8ddc23bd8b0541bb"},{url:"dist/assets/YunPostCollapse-82QETku1.css",revision:"3ab792f7552d723b7a40c7126b02cd3c"},{url:"dist/assets/YunPostCollapse.vue_vue_type_style_index_0_lang-avsaFj7E.js",revision:"d1a886242bc6194292a40000f829867f"},{url:"dist/assets/YunPostList-mA05bKd8.css",revision:"42871260de2af0f743a0c409b11b4d4f"},{url:"dist/assets/YunPostList.vue_vue_type_style_index_0_lang-C8Wk1qVu.js",revision:"f4dd71eed5f528b70d6d6a0fb1b1de02"},{url:"dist/assets/YunPostMeta-eP8AR0dX.css",revision:"2453d6c8b5b70f50250b2b420a677374"},{url:"dist/assets/YunPostMeta.vue_vue_type_script_setup_true_lang-3qIZnVjm.js",revision:"913596e119d3bb35fc6b416ea5e591c6"},{url:"dist/favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"dist/index.html",revision:"6c6cc8829ce13dc39793e6f803cde79b"},{url:"dist/pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"dist/pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"dist/safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"index.html",revision:"5b6e371fab56c9ed9957e2e085e08d38"},{url:"public/favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"public/pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"public/pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"public/safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"manifest.webmanifest",revision:"22ab653848f5784d7383bf9f38f62fb1"}],{ignoreURLParametersMatching:[/.*/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
