if(!self.define){let s,e={};const a=(a,i)=>(a=new URL(a+".js",i).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(i,d)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let c={};const r=s=>a(s,t),b={module:{uri:t},exports:c,require:r};e[t]=Promise.all(i.map((s=>b[s]||r(s)))).then((s=>(d(...s),c)))}}define(["./workbox-33d75f05"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"dist/assets/_...path_-xDgO8MGq.js",revision:"fa2f7d41a04f2ba2ae5e72fc249d4fe6"},{url:"dist/assets/_page_-apwcPObY.js",revision:"6d6667ed264dc593734f42f3c3870af9"},{url:"dist/assets/404-d3WBR7R-.css",revision:"f0113d3a5444c77ce14553facec45243"},{url:"dist/assets/404-F4N7HMZR.js",revision:"85113076313b501503909c8732fba00a"},{url:"dist/assets/404-GZV-73CS.js",revision:"ec9ea6bda0160498088e1b8a817a4c1e"},{url:"dist/assets/404-kt8jXwNB.js",revision:"e280004b5e4c6c0da8af4ad6f8dc6260"},{url:"dist/assets/404-MgZlTgfL.js",revision:"d6810d55d827320a3bc656eaaa5a8a35"},{url:"dist/assets/404-RQk1iMvd.css",revision:"128f6a57c1ca72fcabf2736962340b33"},{url:"dist/assets/404-vYJAegI2.css",revision:"7354f6b103e0d87975ab90175d6b3f50"},{url:"dist/assets/albums-KNch9yva.js",revision:"1d9c0f97d4d86b9f3babf0633b63c369"},{url:"dist/assets/albums-ZgD7XIlY.css",revision:"b07282aa6c2e78169bad3c2d80ebc400"},{url:"dist/assets/app-i6Nr2emR.js",revision:"9ec09ae082fe01e43a2a8960618f3932"},{url:"dist/assets/app-mQNgUxdK.css",revision:"f2a534ab3e1d860242f642c427f10801"},{url:"dist/assets/archives-q09_z0Bw.js",revision:"bb0d5001c1aba143391fb398694b453e"},{url:"dist/assets/baiye1-4GunlS5Y.js",revision:"c52a4eaf7631f5f1c70467651fb2f2d4"},{url:"dist/assets/baiye2-tTHoRIYo.js",revision:"354061700098b4efab2c8e54436259b2"},{url:"dist/assets/baiye3-SB1KYESS.js",revision:"745001db2583b967ea1aa57e63e5e7f7"},{url:"dist/assets/baodao-oQdv0sJF.js",revision:"16446ad70dfec0dab628865939bee5cc"},{url:"dist/assets/bg-img-JF3TTMXB.jpg",revision:"71f1378d44d22f1ada01a40944e86013"},{url:"dist/assets/boke1-uZe0G4Ut.js",revision:"34b295bd029014c7801026f3d6ae0f14"},{url:"dist/assets/boke2-eb5EtwpG.js",revision:"d6eaa1bc6d72eb8bf05f85000757ac19"},{url:"dist/assets/boke3-H6wAgNRd.js",revision:"0c444946ce5907d6139a5c11dd2ba6ac"},{url:"dist/assets/boke4-U-_a14W_.js",revision:"0e7afb123fa730d9ffb7515b639e2bc8"},{url:"dist/assets/categories-UnLTdz3j.css",revision:"760ac9ac351ed19b596525187c7abe54"},{url:"dist/assets/categories-xhi0KN72.js",revision:"3a6eeaf55d7f5b60b096068e953d4257"},{url:"dist/assets/domain-t58ugruf.js",revision:"e3ae51dbfed214d43f2a76bb4838b489"},{url:"dist/assets/gallery-t56MhxfU.js",revision:"ebbdf8a6ebe6ac4148f4046c4f7560b2"},{url:"dist/assets/ghproxy-GmGBrGb2.js",revision:"23f912010d3a1443971dd12a16bdcbe3"},{url:"dist/assets/home-_58s-R6X.css",revision:"0f56b4e6d4b7a9be26aed0932c905f0f"},{url:"dist/assets/home-rZ0jN90F.js",revision:"e6dfb1793412dc6a500e208dd0ff9a35"},{url:"dist/assets/image-Gd70YsUL.js",revision:"7702e26510cc3637a9c27315d3a030a7"},{url:"dist/assets/index-2-nqmP3u.js",revision:"3c56fce321463bd169b9e1a8684d1ba8"},{url:"dist/assets/index-7hVmt_UU.css",revision:"2068f07706193d4f4247aca8ac88c134"},{url:"dist/assets/index-8cbzMjz6.js",revision:"b09e6afc1059479ad2f83d6c021aeb08"},{url:"dist/assets/index-aSL-c2ur.js",revision:"e3ceafc85481b85cafebdc813b6a6fd8"},{url:"dist/assets/index-BZVkckT_.js",revision:"a1e03614307eba5ecce9bb24c7206dd5"},{url:"dist/assets/index-FAfNODCy.js",revision:"47f738521c2759a172919fc252f4a98e"},{url:"dist/assets/index-IP6hZNe-.js",revision:"f49960c2a70c22ed7d0b5ea3d102a242"},{url:"dist/assets/index-jDZ4v42a.js",revision:"4429def538242a5b3f6a6663d3106456"},{url:"dist/assets/index-nlSmcLJj.js",revision:"ebb2787578b6644060f24c530c531b74"},{url:"dist/assets/index-zE24vMAd.js",revision:"62e3bc73b6069dedc752e7f33af54ff9"},{url:"dist/assets/lyq-dOHtskan.js",revision:"37f007ffcf11543a08bbc48c1c65b46f"},{url:"dist/assets/meihua-xTXsKO5F.js",revision:"e4c86cb813ce0e51149e1a90c33ef6b3"},{url:"dist/assets/meihua1-MbG0_T0Q.js",revision:"44994ccd2f2a80bc014c21e434416e6e"},{url:"dist/assets/meihua10-D0fC73Aa.js",revision:"2279a9c1844bead3054fe009eadaef8b"},{url:"dist/assets/meihua11-dBvR-9qc.js",revision:"c459ddabe15676cea4d20da4fd73eed9"},{url:"dist/assets/meihua2-qcG0_mz5.js",revision:"beb7fba692421941fd07229192d7d8c5"},{url:"dist/assets/meihua3-m4MQ_cio.js",revision:"662d04959791561941a36993a0b5cfef"},{url:"dist/assets/meihua4-E5eEQNAa.js",revision:"780af68a096834454f32fd615bc6d1b4"},{url:"dist/assets/meihua5-vPAj8s7m.js",revision:"72beff5828189cb8d3e776d3cf2a6853"},{url:"dist/assets/meihua6-y51BHzuZ.js",revision:"970ec221183a6d9565f009a3c81acfb7"},{url:"dist/assets/meihua7-6iUNiyv-.js",revision:"6ef77a4bd66bbcb72287e54768577e58"},{url:"dist/assets/meihua8-I-OIT6Lt.js",revision:"ac5dd1869eeab7c85be55932bf44ff35"},{url:"dist/assets/meihua9-z5bypelp.js",revision:"bc6c66666f603e8c2514c79232b65438"},{url:"dist/assets/none-yzNQDLA9.jpg",revision:"2035615ec9d3b134ebbb557f674e7fbc"},{url:"dist/assets/novelai-iAWa2vjC.js",revision:"294023d7be35a7eb7f9cd2f2f91f5210"},{url:"dist/assets/novelai1-BEhi2cbt.js",revision:"dd60ad0ac6c7bdef9296bf6be2b89174"},{url:"dist/assets/novelai2-f-iY1_mQ.js",revision:"e462cee47bcfbf54ecde9becb0a1c133"},{url:"dist/assets/ohook-nTCXpT_g.js",revision:"81e2915c48f9ce426c1ca7746a08324a"},{url:"dist/assets/post-CpXD-h6w.js",revision:"b62082a13bf9f5985add4e70da27dffa"},{url:"dist/assets/post-IEKaYRio.css",revision:"2daaa761e2d9b044d68f45673bff32c9"},{url:"dist/assets/post-T-bAJZHx.js",revision:"5a5e69be084bc73fd1f2552f41c0810b"},{url:"dist/assets/reader-NgnTtH_d.js",revision:"6cd8acb54249742d0439e057401a3ecd"},{url:"dist/assets/route-block-zudrvJp0.js",revision:"703a0c9620dd946cc85f5ccee2828005"},{url:"dist/assets/site-roYwbLlM.js",revision:"2f1da95c2fc73cd9552abe051d5c7a5a"},{url:"dist/assets/source-CZUMsYAb.js",revision:"95160a6459b563acaf3cbf7cc18cc8ab"},{url:"dist/assets/source2-sylZprBa.js",revision:"87c5101d3837d9cc0e7dfc8bf00a74f6"},{url:"dist/assets/tags-HztC9tLV.js",revision:"4135f0607970b698e37f0efef73ddf57"},{url:"dist/assets/typora-5HhPb7xq.js",revision:"0fa12148421e4be764d957fcbd6b2db1"},{url:"dist/assets/uptime-SjLGG98u.js",revision:"232dfa70b0f23958ad59f69883894626"},{url:"dist/assets/ValaxyMain-4xaw61Ge.css",revision:"315fb874b01b20d157e3cb5442815510"},{url:"dist/assets/ValaxyMain.vue_vue_type_style_index_0_lang-gSJJmbX2.js",revision:"6b54471d52992aa4f7a2ace04c309346"},{url:"dist/assets/virtual_pwa-register-MIVOiqVf.js",revision:"60f6b8bff6507d9306cd0cb059ae2d07"},{url:"dist/assets/welcome-Crfbjxoh.js",revision:"ab14dc95966cd080fb6ceaa0d065793f"},{url:"dist/assets/workbox-window.prod.es5-prqDwDSL.js",revision:"ed0c862094c41f455cdef837aa7dafd2"},{url:"dist/assets/YunAlgoliaSearch-xZyDL2Q_.js",revision:"af9c5b7799bd72e655d2fcd38c797d5d"},{url:"dist/assets/YunCard.vue_vue_type_script_setup_true_lang-LEITJBNs.js",revision:"fffd2e26725d77a82a131651e568a247"},{url:"dist/assets/YunFooter-dFYkuLVA.css",revision:"c47d87e9b134ca72d5891e799512d8d9"},{url:"dist/assets/YunFooter.vue_vue_type_style_index_0_lang-DPiHlsUC.js",revision:"a76d15c9672cd6b25a56b6976b7eda27"},{url:"dist/assets/YunGallery-pZGAaxSq.js",revision:"b49db4ce44f5b0970907b3580b2754dc"},{url:"dist/assets/YunPageHeader.vue_vue_type_script_setup_true_lang-ASOFmcvf.js",revision:"fd322cfd22522a0aaa74a20946d7cdbf"},{url:"dist/assets/YunPostCollapse-82QETku1.css",revision:"3ab792f7552d723b7a40c7126b02cd3c"},{url:"dist/assets/YunPostCollapse.vue_vue_type_style_index_0_lang-DnjNsb_v.js",revision:"761f858bd0a7410d729182b1080217d5"},{url:"dist/assets/YunPostList-mA05bKd8.css",revision:"42871260de2af0f743a0c409b11b4d4f"},{url:"dist/assets/YunPostList.vue_vue_type_style_index_0_lang-bKx70XDN.js",revision:"21b96d8ef5c35e69ac2ef4c5cb0a5829"},{url:"dist/assets/YunPostMeta-eP8AR0dX.css",revision:"2453d6c8b5b70f50250b2b420a677374"},{url:"dist/assets/YunPostMeta.vue_vue_type_script_setup_true_lang-611wgMfy.js",revision:"b38b485b4fde65af93bcf6de4a08f781"},{url:"dist/favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"dist/index.html",revision:"62b76eb55b7cc72a626ffe9609fe8a08"},{url:"dist/pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"dist/pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"dist/safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"index.html",revision:"a461c0fbb164e4c9ebab5c1e2c381afd"},{url:"public/favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"public/pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"public/pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"public/safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"manifest.webmanifest",revision:"22ab653848f5784d7383bf9f38f62fb1"}],{ignoreURLParametersMatching:[/.*/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
