if(!self.define){let s,e={};const i=(i,a)=>(i=new URL(i+".js",a).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(a,d)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let c={};const t=s=>i(s,r),b={module:{uri:r},exports:c,require:t};e[r]=Promise.all(a.map((s=>b[s]||t(s)))).then((s=>(d(...s),c)))}}define(["./workbox-33d75f05"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"dist/assets/_...path_-23XbAvVQ.js",revision:"d6f22d1e2ffb95db09592648108e62ff"},{url:"dist/assets/_page_-1QOnPIhd.js",revision:"f3934f5d15b26659e36730fbd0fd83ab"},{url:"dist/assets/404-d3WBR7R-.css",revision:"f0113d3a5444c77ce14553facec45243"},{url:"dist/assets/404-he38r5P2.js",revision:"fce5cc068c7a3941cecea3aa10b47572"},{url:"dist/assets/404-LGHbDvWo.js",revision:"2f48f848bf3997a55dce03fd99ceb532"},{url:"dist/assets/404-lQJhk5O7.css",revision:"2ac28122e5e46d0b0b5f452ee315a7df"},{url:"dist/assets/404-v3kStniI.js",revision:"836abd710a126111a8b3cf20a154ed19"},{url:"dist/assets/404-vYJAegI2.css",revision:"7354f6b103e0d87975ab90175d6b3f50"},{url:"dist/assets/404-YcSRR95R.js",revision:"9e9f06bbd07c17e76f23b99778ab41c6"},{url:"dist/assets/albums-bRSpucz2.js",revision:"fea5093c9d5d2734d93aaaaf4e7a1be3"},{url:"dist/assets/albums-ZgD7XIlY.css",revision:"b07282aa6c2e78169bad3c2d80ebc400"},{url:"dist/assets/app-NvXvlQp0.js",revision:"a6d1404e035f50c5b259153ae295d6c0"},{url:"dist/assets/app-ui6DUF_1.css",revision:"00a0266a6288ba44c4dc5be42a0ba614"},{url:"dist/assets/archives-18v4on5O.js",revision:"23c730e9ba06f4f18fa9212d514bd100"},{url:"dist/assets/baiye1-7BISpQ04.js",revision:"a1d547a5f66a91f9b58b7e422b876b23"},{url:"dist/assets/baiye2-Gl-N1Lql.js",revision:"45ee29e95e8207d31dcb73dfd8ecb40e"},{url:"dist/assets/baiye3-kHXDduKp.js",revision:"f1df9a0db7a9e89d654637a144fe81b2"},{url:"dist/assets/baodao-BvSisLLk.js",revision:"c6ef3df8458a717392be62d2b01186d7"},{url:"dist/assets/bg-img-JF3TTMXB.jpg",revision:"71f1378d44d22f1ada01a40944e86013"},{url:"dist/assets/boke1-o1cmkiBK.js",revision:"640c686eba22c2a986b6c6125a774035"},{url:"dist/assets/boke2-Qlx8ji3Z.js",revision:"6b33ae63be4456cd18778b5c953472e2"},{url:"dist/assets/boke3-YiDMLRd6.js",revision:"f0962787b3b0a1ac1adef6040625c011"},{url:"dist/assets/boke4-8thxDBSW.js",revision:"67c5f3f7285e0ee3179c065569f22a3c"},{url:"dist/assets/categories-qKR3nQE0.js",revision:"95facfea8db8641b9c7fefe79d27d16a"},{url:"dist/assets/categories-UnLTdz3j.css",revision:"760ac9ac351ed19b596525187c7abe54"},{url:"dist/assets/domain-fVkYLlJs.js",revision:"c51df8033e779d9ce117f4b41190568c"},{url:"dist/assets/gallery-AZ_CyD73.js",revision:"d23efacd5f182ce789f759c84b624bf4"},{url:"dist/assets/ghproxy-sQ8VYv_o.js",revision:"0987f740430ffeb42ca6dc049393c721"},{url:"dist/assets/home-_58s-R6X.css",revision:"0f56b4e6d4b7a9be26aed0932c905f0f"},{url:"dist/assets/home-3pT3wv7O.js",revision:"68ac7825d87f7d7a11bf4987a6cfa97b"},{url:"dist/assets/image-9hWQCb3Q.js",revision:"ade03b8103b8757df6a848157bbf2302"},{url:"dist/assets/index--o9ZelX1.css",revision:"c604ad037ebc9fc67dd2b7c7c35edff1"},{url:"dist/assets/index-52z-6DtP.js",revision:"d721ad7692d226e05bf77d710adcc3bf"},{url:"dist/assets/index-f3jJ8aA9.js",revision:"401df83439da790562298ed4a94a22cb"},{url:"dist/assets/index-FKSCb16E.js",revision:"a5d81cd4c5a5269ab9ca8e7f34c029ff"},{url:"dist/assets/index-gBU81ZO9.js",revision:"8783ecff6cbc7b6ef948e7e5c679d4fa"},{url:"dist/assets/index-nlSmcLJj.js",revision:"ebb2787578b6644060f24c530c531b74"},{url:"dist/assets/index-pnc11oqa.js",revision:"4ae3eff854c29280dd0860283299a130"},{url:"dist/assets/index-pnGb9jB5.js",revision:"083c2bcc207b7b07a0f1157f4a8b5758"},{url:"dist/assets/index-sAB2svq9.js",revision:"76c6dab0b632700d2497e5dc9630ed72"},{url:"dist/assets/index-y8K_hQY0.js",revision:"f764a4b31c95c92d95ec556e53d752b0"},{url:"dist/assets/lyq-vnpai88d.js",revision:"bee9fbefe1be7c4dfd4c544dde36b95e"},{url:"dist/assets/meihua-1OJUEuEb.js",revision:"ca5da4df775fff5d7e3b10499da9c212"},{url:"dist/assets/meihua1-INVIQ1wt.js",revision:"bb1429617b9235a843c39480420e4ab1"},{url:"dist/assets/meihua10-1ylr63fC.js",revision:"63a7239c3d9ced2af3e58f0bf337ba92"},{url:"dist/assets/meihua11-ukHawxcA.js",revision:"e57d14b28499e92d2f9cd53ff2c7fac2"},{url:"dist/assets/meihua2-VKmjldZh.js",revision:"dc98440d36731b64fd183b15837cf687"},{url:"dist/assets/meihua3-EFDrDSlK.js",revision:"5329b527e43eed99bab73a5fcd2ba50f"},{url:"dist/assets/meihua4-PDabHssX.js",revision:"fbdf9e5e012629169223eef1e917e9cf"},{url:"dist/assets/meihua5-UA4tW3HO.js",revision:"acf6d1647f885cce95e0a2028881fb25"},{url:"dist/assets/meihua6-SEAxo-Yb.js",revision:"dc4e051128240d83207e067990408ee9"},{url:"dist/assets/meihua7-oblrvF3l.js",revision:"95c90748f5c564cf445c6de87db496b0"},{url:"dist/assets/meihua8-5EXvcTDF.js",revision:"10507f78c4ccd3714a60aca49ebe5e30"},{url:"dist/assets/meihua9-MZPBhkjW.js",revision:"25e1e771a9db5526c3764cdf9b251fee"},{url:"dist/assets/none-yzNQDLA9.jpg",revision:"2035615ec9d3b134ebbb557f674e7fbc"},{url:"dist/assets/novelai-5CRFGS4P.js",revision:"728a7218f87b9c505fa047d9af136334"},{url:"dist/assets/novelai1-Payafi_B.js",revision:"65de9c778a46b6b78c4745cc52a81db7"},{url:"dist/assets/novelai2-5ONuelZA.js",revision:"6c89f8a4c9861ed2f8a426d487e42196"},{url:"dist/assets/ohook-F0y-rPvk.js",revision:"4435944016fef52fbcb01c126cedaba4"},{url:"dist/assets/post-i_m2sw7I.js",revision:"6b330f34a4abb0b1f8ed23c13c939bba"},{url:"dist/assets/post-IEKaYRio.css",revision:"2daaa761e2d9b044d68f45673bff32c9"},{url:"dist/assets/post-rJXghc6-.js",revision:"9bf24b39e00b061b86f961dab2bb1ce7"},{url:"dist/assets/reader-MrCgcWgB.js",revision:"44ce0a00c3bc597bab4ac02a9489bc13"},{url:"dist/assets/route-block-zudrvJp0.js",revision:"703a0c9620dd946cc85f5ccee2828005"},{url:"dist/assets/site-0Zpdw05k.js",revision:"157530a5347f1d842c17e55c80c88745"},{url:"dist/assets/source-ykpQMJ9g.js",revision:"e2ae175b82c7ff8c9fc17059663e2282"},{url:"dist/assets/source2-W9GScNVl.js",revision:"dd384f6edbbd1638c02b3d531b83e991"},{url:"dist/assets/tags-SVbfmA1F.js",revision:"373249abc7bb68f9db7393d993388b26"},{url:"dist/assets/typora-rILPQ_E1.js",revision:"3f1ff5e6ed4314e9209cad972d4d39b7"},{url:"dist/assets/uptime-HiqGVtkp.js",revision:"31f6315b233601f68cddd4cf176c8a78"},{url:"dist/assets/ValaxyMain-0iaxSEQb.css",revision:"940e88a29f37f370c4af9c01ed9814da"},{url:"dist/assets/ValaxyMain.vue_vue_type_style_index_0_lang-xZ452xu6.js",revision:"1eab660a7a982f20fb7bd6296afdcdab"},{url:"dist/assets/virtual_pwa-register-ZaJLc3PD.js",revision:"fe1a5ebe63dc32b8cb3727a943665a62"},{url:"dist/assets/welcome-H1aziOU4.js",revision:"37128a6e37d67a6739ccae0b539fd548"},{url:"dist/assets/workbox-window.prod.es5-prqDwDSL.js",revision:"ed0c862094c41f455cdef837aa7dafd2"},{url:"dist/assets/YunAlgoliaSearch-CdsQxjsp.js",revision:"e2c7aa131082dad55656b997c41d77fa"},{url:"dist/assets/YunCard.vue_vue_type_script_setup_true_lang-gnucyrSG.js",revision:"8ff8bd9631feac7c36a6a47c90babd44"},{url:"dist/assets/YunFooter-dFYkuLVA.css",revision:"c47d87e9b134ca72d5891e799512d8d9"},{url:"dist/assets/YunFooter.vue_vue_type_style_index_0_lang-FeG5Mo45.js",revision:"965f851d7e44e623e7717b23518e9185"},{url:"dist/assets/YunGallery-IgRjUjGO.js",revision:"d69273af15b73e064a8cf86e2bd8e005"},{url:"dist/assets/YunPageHeader.vue_vue_type_script_setup_true_lang-a1B_3ArG.js",revision:"55a329a93c59dedf791d4e42fe6bff98"},{url:"dist/assets/YunPostCollapse-82QETku1.css",revision:"3ab792f7552d723b7a40c7126b02cd3c"},{url:"dist/assets/YunPostCollapse.vue_vue_type_style_index_0_lang-PskvIB5T.js",revision:"37d17bfbc82589e02062f4cdac39e11b"},{url:"dist/assets/YunPostList-mA05bKd8.css",revision:"42871260de2af0f743a0c409b11b4d4f"},{url:"dist/assets/YunPostList.vue_vue_type_style_index_0_lang-WQFYRPJY.js",revision:"1239e7ac98f67fe8a9fb3a7bf16fcb40"},{url:"dist/assets/YunPostMeta-eP8AR0dX.css",revision:"2453d6c8b5b70f50250b2b420a677374"},{url:"dist/assets/YunPostMeta.vue_vue_type_script_setup_true_lang-8sbY-i8z.js",revision:"1aaaf09f48f204e0764e9db714538f57"},{url:"dist/favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"dist/index.html",revision:"b26dceb841f090cbd9604d5360e1a04a"},{url:"dist/pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"dist/pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"dist/safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"index.html",revision:"5b6e371fab56c9ed9957e2e085e08d38"},{url:"public/favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"public/pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"public/pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"public/safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"manifest.webmanifest",revision:"22ab653848f5784d7383bf9f38f62fb1"}],{ignoreURLParametersMatching:[/.*/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
