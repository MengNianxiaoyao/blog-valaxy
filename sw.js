if(!self.define){let s,e={};const i=(i,a)=>(i=new URL(i+".js",a).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(a,d)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let r={};const c=s=>i(s,t),b={module:{uri:t},exports:r,require:c};e[t]=Promise.all(a.map((s=>b[s]||c(s)))).then((s=>(d(...s),r)))}}define(["./workbox-33d75f05"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"dist/assets/_...path_-y-UNJdfe.js",revision:"ecceb48704f11ca503204576b142bd77"},{url:"dist/assets/_page_-UtP_NIDx.js",revision:"ace5e279e8e960e1af5930af671c5d1d"},{url:"dist/assets/404-F_tonx9D.js",revision:"ebf84634ea6a58ac31c102faa679e1b2"},{url:"dist/assets/404-j_m-ewBg.js",revision:"b4f90eabce3bb6161aaaa89bf97747ec"},{url:"dist/assets/404-lQJhk5O7.css",revision:"2ac28122e5e46d0b0b5f452ee315a7df"},{url:"dist/assets/404-Rf2xNOu8.js",revision:"0a3a65ef58d23bd2f940bb6df1996097"},{url:"dist/assets/404-vYJAegI2.css",revision:"7354f6b103e0d87975ab90175d6b3f50"},{url:"dist/assets/albums-ESAntl00.js",revision:"8b6dcb416eb15c9eeea0f49b097183bc"},{url:"dist/assets/albums-ZgD7XIlY.css",revision:"b07282aa6c2e78169bad3c2d80ebc400"},{url:"dist/assets/app-bGVSZOQv.js",revision:"f7837ae93c8629f1e3e5ac4232f39c05"},{url:"dist/assets/app-Mk-jwjF8.css",revision:"2e133d3f696e3df4622e6dff7dc840de"},{url:"dist/assets/archives-DrztjPvp.js",revision:"640d2529d540748cdc0e5c00fd1e52fa"},{url:"dist/assets/baiye2-CWnt5YOa.js",revision:"9f4f1d9a54ad1c343dd8507eacaf5bad"},{url:"dist/assets/baiye3-wBppgzwd.js",revision:"e860fae03a26dcdec98ff96be191a55c"},{url:"dist/assets/baodao-FZDzRLQq.js",revision:"a6f0a07b49711606a584f6e003401ec8"},{url:"dist/assets/bg-img-JF3TTMXB.jpg",revision:"71f1378d44d22f1ada01a40944e86013"},{url:"dist/assets/boke2-qJtSy-gu.js",revision:"889e792b92d6a67fe9d33cac9369872d"},{url:"dist/assets/boke3-W159JNbm.js",revision:"ef4a74c64d8d136fb42ef1dfd7432c70"},{url:"dist/assets/boke4-h_AAX0U7.js",revision:"0c7410134b41ff70648dfef5e6fc231f"},{url:"dist/assets/categories-OF06LU7d.js",revision:"bb3b6f8f7a0868f23169384c03e783a3"},{url:"dist/assets/categories-UnLTdz3j.css",revision:"760ac9ac351ed19b596525187c7abe54"},{url:"dist/assets/domain-60NcG8Tv.js",revision:"8079d4a784b50927b1a0f9ebb923ec9c"},{url:"dist/assets/gallery-ewiCP_TG.js",revision:"68ee49dac2565b2bd83b18b86a7ef41b"},{url:"dist/assets/ghproxy-ivobc7F-.js",revision:"a458654f9749dc31ef734182f5199a35"},{url:"dist/assets/home-_58s-R6X.css",revision:"0f56b4e6d4b7a9be26aed0932c905f0f"},{url:"dist/assets/home-AFfyQp3r.js",revision:"69d9b5dff00e4453039e550c76fd3673"},{url:"dist/assets/index-_76RYcUZ.js",revision:"66a50ea25f0d24623bf5702db81b8c75"},{url:"dist/assets/index--o9ZelX1.css",revision:"c604ad037ebc9fc67dd2b7c7c35edff1"},{url:"dist/assets/index-2O2K0vjE.js",revision:"977bf8c5f5d9c94e89ec8d25de309566"},{url:"dist/assets/index-81g5KCw3.js",revision:"43f18496ff7735e127693ebb3bcdf3ce"},{url:"dist/assets/index-a6DgfNiU.js",revision:"38a445403085f9e11595d46ffa744a62"},{url:"dist/assets/index-AWlGROoj.js",revision:"07b5af24297761d877213999e81529cc"},{url:"dist/assets/index-Cv9XekzF.js",revision:"f7878e2b3bfd1e939190cc8c93acad22"},{url:"dist/assets/index-G2PYj1mo.js",revision:"7c535b338e2a94e057d5e3829805d1f1"},{url:"dist/assets/index-Ghq3REQK.js",revision:"72cc7f253af9b90e15ef7d5f0c1f7da7"},{url:"dist/assets/index-lMXZh7Nq.js",revision:"b88d18251dbaf48bda0a55da22f3873c"},{url:"dist/assets/index-LXLbD4_P.js",revision:"3d984a2b5402f6a255f088bb93693e9a"},{url:"dist/assets/index-m8IxjigB.js",revision:"6baf5f0fc8c75f0d58b32b46540bdaa5"},{url:"dist/assets/index-nlSmcLJj.js",revision:"ebb2787578b6644060f24c530c531b74"},{url:"dist/assets/index-PE5KaM_M.js",revision:"64eb300937802e38206969a942892bfa"},{url:"dist/assets/index-PttLZPGO.js",revision:"8ec96f71f67237c5381a9163e05a01c0"},{url:"dist/assets/index-VjRx31gL.js",revision:"2e5bf313a96ae62234ec8b89f2720b36"},{url:"dist/assets/index-Yfftxk1d.js",revision:"e99604cd30027a7ceeb7d014a7fc7aa8"},{url:"dist/assets/lyq-U69ZwruJ.js",revision:"57f1c7cd8019661fb442659fc375005f"},{url:"dist/assets/meihua1-xE2hvNn1.js",revision:"306be2e2c78d1ec4c29c27a9d24a2488"},{url:"dist/assets/meihua10-8282Gyrx.js",revision:"e6c4297fb4234566936767b91d6d5509"},{url:"dist/assets/meihua11-pPXEBoB1.js",revision:"dd00de4ea85e5adb93626e1e0c458b9d"},{url:"dist/assets/meihua2-_dUzYGTA.js",revision:"c9434c13f4c47bac0f91f1500b8ef459"},{url:"dist/assets/meihua3-ph0HgWhC.js",revision:"c9ae5e21bb3fb67ba48b175b84bf6d22"},{url:"dist/assets/meihua4--ITr4EQH.js",revision:"5dde4c8966d5b872e2619d2fe083a286"},{url:"dist/assets/meihua5-PvmrQf0S.js",revision:"b0eef964020b31f06cc0d233b4d4081e"},{url:"dist/assets/meihua6-FtEhJuiL.js",revision:"b5b53b08503b6005641fef4a40934478"},{url:"dist/assets/meihua7-II0AuLUI.js",revision:"1eb4e83feec25e358abc2b1d3f546eb7"},{url:"dist/assets/meihua8-QCxvYuah.js",revision:"884d4cad1f303db24da57d285fc5c4be"},{url:"dist/assets/meihua9-4cl0tu5t.js",revision:"7dbfe13b2e0bcbb3a679b33ffe024021"},{url:"dist/assets/none-yzNQDLA9.jpg",revision:"2035615ec9d3b134ebbb557f674e7fbc"},{url:"dist/assets/novelai1-Ao3BvfoF.js",revision:"a62327604d37a0b951c4455e3a911af0"},{url:"dist/assets/novelai2-eYMN3II3.js",revision:"c4892d44e96b86d9e2b4547a9bb7b880"},{url:"dist/assets/ohook-nrBEU51m.js",revision:"200ce93cdb5a6efe4e50bd80d1e881e5"},{url:"dist/assets/post-IEKaYRio.css",revision:"2daaa761e2d9b044d68f45673bff32c9"},{url:"dist/assets/post-tdvlR5eW.js",revision:"2a0a10e3530d0dcf667367bff026dacd"},{url:"dist/assets/post-wM3dfxIe.js",revision:"d6adc3893a57d86038dd626a405b7aea"},{url:"dist/assets/reader-3KvYVnFC.js",revision:"4a276841f1180d31b99ee1f09dfdccbd"},{url:"dist/assets/route-block-zudrvJp0.js",revision:"703a0c9620dd946cc85f5ccee2828005"},{url:"dist/assets/sidebar-bg-img-JqeeIBML.webp",revision:"13e83f7fb6734461d073f66a56886ad3"},{url:"dist/assets/site-SVF-fInb.js",revision:"9b87d3d37319c5ec534513cc4e27b201"},{url:"dist/assets/source2-jjs24XfO.js",revision:"35b39effd706d58cd279f65ea0f0ebc1"},{url:"dist/assets/tags-4c6lhewR.js",revision:"56d7a83bd1c4dd6c59557d72cebcdc5b"},{url:"dist/assets/typora-UWRBRhyE.js",revision:"bb7ecbbc9969499b4c84a20e6503c540"},{url:"dist/assets/uptime-j8x4IQ-G.js",revision:"702ce95f847f4eb72d119a4ece039333"},{url:"dist/assets/ValaxyMain-0iaxSEQb.css",revision:"940e88a29f37f370c4af9c01ed9814da"},{url:"dist/assets/ValaxyMain.vue_vue_type_style_index_0_lang-pO5qqQYj.js",revision:"6353de240af70b5a4dc1115ce3c9e26b"},{url:"dist/assets/virtual_pwa-register-tsmDDa8i.js",revision:"575f118fe8fd85ee57c71419b70ee324"},{url:"dist/assets/workbox-window.prod.es5-prqDwDSL.js",revision:"ed0c862094c41f455cdef837aa7dafd2"},{url:"dist/assets/YunAlgoliaSearch-7glTIGuL.js",revision:"a06c59c82d9599c30a6ea4b71dc99510"},{url:"dist/assets/YunCard.vue_vue_type_script_setup_true_lang-idcONc-r.js",revision:"0b696798c503fbf9657bc39055401dd5"},{url:"dist/assets/YunFooter-dFYkuLVA.css",revision:"c47d87e9b134ca72d5891e799512d8d9"},{url:"dist/assets/YunFooter.vue_vue_type_style_index_0_lang-phDfVAlY.js",revision:"da148adacdb8662545a8a0a99eebb3ee"},{url:"dist/assets/YunGallery-HG7JrZfk.js",revision:"ef39a72b1529ecb3ea0d78bddce2be0a"},{url:"dist/assets/YunPageHeader.vue_vue_type_script_setup_true_lang-AaHxQZ2c.js",revision:"aa55147580101638dba406376a3cb988"},{url:"dist/assets/YunPostCollapse-82QETku1.css",revision:"3ab792f7552d723b7a40c7126b02cd3c"},{url:"dist/assets/YunPostCollapse.vue_vue_type_style_index_0_lang-XnKiXbST.js",revision:"dc9054c2284998253582831898a7b2b3"},{url:"dist/assets/YunPostList-mA05bKd8.css",revision:"42871260de2af0f743a0c409b11b4d4f"},{url:"dist/assets/YunPostList.vue_vue_type_style_index_0_lang-imcwac6a.js",revision:"c50d783406b9f1ad5754b0dcb24862e1"},{url:"dist/assets/YunPostMeta-eP8AR0dX.css",revision:"2453d6c8b5b70f50250b2b420a677374"},{url:"dist/assets/YunPostMeta.vue_vue_type_script_setup_true_lang--AqaTORZ.js",revision:"fe2eb1badf1490cc5bef17dd4800a8f9"},{url:"dist/favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"dist/index.html",revision:"0e8f2f76caa563d953c47b7e4af004f5"},{url:"dist/pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"dist/pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"dist/safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"index.html",revision:"02565b1e564abf2b519821f58546ca28"},{url:"public/favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"public/pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"public/pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"public/safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"manifest.webmanifest",revision:"22ab653848f5784d7383bf9f38f62fb1"}],{ignoreURLParametersMatching:[/.*/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
