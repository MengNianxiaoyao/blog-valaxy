if(!self.define){let s,e={};const a=(a,i)=>(a=new URL(a+".js",i).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(i,d)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const c=s=>a(s,r),b={module:{uri:r},exports:t,require:c};e[r]=Promise.all(i.map((s=>b[s]||c(s)))).then((s=>(d(...s),t)))}}define(["./workbox-33d75f05"],(function(s){"use strict";s.setCacheNameDetails({prefix:"blog-cache"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"dist/assets/_...path_-k-xnE7sk.js",revision:"e337127fac0a0fc78bef97cd7d6785dd"},{url:"dist/assets/_page_-BprZ07Pg.js",revision:"0b26ee38e1b7863c4f3914fc3a3fe0f0"},{url:"dist/assets/404-2bULHByY.js",revision:"23db5aeeebcc607b32b0c4d91a804a74"},{url:"dist/assets/404-d3WBR7R-.css",revision:"f0113d3a5444c77ce14553facec45243"},{url:"dist/assets/404-lQJhk5O7.css",revision:"2ac28122e5e46d0b0b5f452ee315a7df"},{url:"dist/assets/404-tEApNVrO.js",revision:"43b4715fb5204493566a29b6010cd33e"},{url:"dist/assets/404-vYJAegI2.css",revision:"7354f6b103e0d87975ab90175d6b3f50"},{url:"dist/assets/404-XT5X81wK.js",revision:"08058b20a29fd6ec89b11e4946336f6f"},{url:"dist/assets/404-y6Prv9j5.js",revision:"479bb2bc47ff06dd8df99d6447cb0e2a"},{url:"dist/assets/albums-zc3lYbUo.js",revision:"af88a25021b435ddc69c44c90341d8b1"},{url:"dist/assets/albums-ZgD7XIlY.css",revision:"b07282aa6c2e78169bad3c2d80ebc400"},{url:"dist/assets/app-ui6DUF_1.css",revision:"00a0266a6288ba44c4dc5be42a0ba614"},{url:"dist/assets/app-y5Ifec1F.js",revision:"848e29283b64f28c01bba857bdfab025"},{url:"dist/assets/archives-7WnPpXfq.js",revision:"d836c6643c8befe4967faaaba74f8059"},{url:"dist/assets/baiye1-qK9q480v.js",revision:"5ff1cf6297f197d7f6a94aa65240c041"},{url:"dist/assets/baiye2-TyhbQx53.js",revision:"3033641894de0e4ce43cb10f1272fe05"},{url:"dist/assets/baiye3-g-xapTCP.js",revision:"ac128c1607951d5875869ae5eefab841"},{url:"dist/assets/baodao-wl4-7xde.js",revision:"a06e79a782eacc9afbd232a19955a55c"},{url:"dist/assets/bg-img-JF3TTMXB.jpg",revision:"71f1378d44d22f1ada01a40944e86013"},{url:"dist/assets/boke1-RO23bCJK.js",revision:"4e3b26a5bd25b6edecf153ae165591c2"},{url:"dist/assets/boke2-Fj7UiPqb.js",revision:"59dda4f74adf75bfc45f7db31a968cf7"},{url:"dist/assets/boke3-vZOsNEMm.js",revision:"be32529a68c89c6e0f74cfb665d586b3"},{url:"dist/assets/boke4-HLgzzJAn.js",revision:"fb6555dfc2683c2bc8e8176ef3b5893a"},{url:"dist/assets/categories-g99hP2qs.js",revision:"f2317f99765aadbac5aa3a86747fbf0d"},{url:"dist/assets/categories-UnLTdz3j.css",revision:"760ac9ac351ed19b596525187c7abe54"},{url:"dist/assets/domain-jBeyeVAG.js",revision:"f9fc25af2517de02ce845464bbeaae86"},{url:"dist/assets/gallery-vA4w8GP0.js",revision:"fc00943b1c8b43f2b08d85caadee5998"},{url:"dist/assets/ghproxy-xpQcLi_9.js",revision:"0aae162497d3e5b6ab6838087cf7673e"},{url:"dist/assets/home-_58s-R6X.css",revision:"0f56b4e6d4b7a9be26aed0932c905f0f"},{url:"dist/assets/home-xEYsS0Pn.js",revision:"2ae1cfe5f879640553eb95d9d76caf29"},{url:"dist/assets/image-3DEieAfm.js",revision:"7054d87c338e07975ea5f48c6eb85986"},{url:"dist/assets/index--o9ZelX1.css",revision:"c604ad037ebc9fc67dd2b7c7c35edff1"},{url:"dist/assets/index-CHhBE498.js",revision:"f3e6224ec10f7cc01849f8d567e2a81f"},{url:"dist/assets/index-eidmhvp4.js",revision:"69008b802a8ef3bb78a9a0ba59277d85"},{url:"dist/assets/index-Fug9rWAh.js",revision:"c32a1e1335fb85ca7a5ab8328899825b"},{url:"dist/assets/index-l9fVBjwy.js",revision:"4aab798a84b5ab362e8170d5754b7b3e"},{url:"dist/assets/index-LX82Negw.js",revision:"97cf09061dfe72de98e09e0d0f28fe40"},{url:"dist/assets/index-nlSmcLJj.js",revision:"ebb2787578b6644060f24c530c531b74"},{url:"dist/assets/index-sEuExglj.js",revision:"a979d45d5de1b394f815880a10abb46c"},{url:"dist/assets/index-uyYykyjK.js",revision:"a9765e4365ed120ca1a245ab6ca47b48"},{url:"dist/assets/index-wF8b5npW.js",revision:"3f463be48dedbf2e9e3f8d7d19d713c9"},{url:"dist/assets/lyq-1ciguQn1.js",revision:"8ac1114420e1ceb7f43a6c7d532b755b"},{url:"dist/assets/meihua--nacIKv6.js",revision:"ca1b1a570e726be6958da10a07ad2f19"},{url:"dist/assets/meihua1-H48b8RSI.js",revision:"fda491931699884e7479600c9c958074"},{url:"dist/assets/meihua10-fpBSw6b1.js",revision:"1aefc1495f2a94d9e282ed67a440dfd9"},{url:"dist/assets/meihua11-T2weCcMt.js",revision:"c9f72cc33d56f2369e14e7bf26059385"},{url:"dist/assets/meihua2-3DUD_-op.js",revision:"db1b49a2d1ef7d91e07d1b315332879a"},{url:"dist/assets/meihua3-Ntmw3gbD.js",revision:"4e529cae927cd3b2f5034a8842d324c3"},{url:"dist/assets/meihua4-mDsuxxhg.js",revision:"9e7f925c7228bc13d2d9d10ff2e73d40"},{url:"dist/assets/meihua5-8xEh7URa.js",revision:"a24136871b2f9f98751fc7d004d7ae97"},{url:"dist/assets/meihua6-4cIfpJwt.js",revision:"2d597738e665f2952b88407a2c36d50f"},{url:"dist/assets/meihua7-NHcuwBf8.js",revision:"d0d41e9a663a9d2f20312d55af01a6d4"},{url:"dist/assets/meihua8-nyOMp3us.js",revision:"6dba5363e883c651c4e7072c155f43bc"},{url:"dist/assets/meihua9--aJksFUr.js",revision:"e98743387039573fd31d7adfa4fbc08e"},{url:"dist/assets/none-yzNQDLA9.jpg",revision:"2035615ec9d3b134ebbb557f674e7fbc"},{url:"dist/assets/novelai-mgheaUYj.js",revision:"7ee46a9be57f96694a920d85cfe6ad65"},{url:"dist/assets/novelai1-VJBJ6ZNu.js",revision:"5f461b5d1318ca50314665dddbd12049"},{url:"dist/assets/novelai2-Kt2KjawW.js",revision:"b5823090568c9f0232c58f8759f8ad9d"},{url:"dist/assets/ohook-ShsVc81u.js",revision:"183718ba68dd374639b05265f1186f18"},{url:"dist/assets/post-IEKaYRio.css",revision:"2daaa761e2d9b044d68f45673bff32c9"},{url:"dist/assets/post-OtITbi0k.js",revision:"52aaafdcb823b174e71e05910115f17a"},{url:"dist/assets/post-qm9yrHjK.js",revision:"8b5ade4463e791a777911bdd454d3029"},{url:"dist/assets/reader-SdzuLus_.js",revision:"eaf0c658e0c015852ecf169860d1a502"},{url:"dist/assets/route-block-zudrvJp0.js",revision:"703a0c9620dd946cc85f5ccee2828005"},{url:"dist/assets/site-k3Hj9G4F.js",revision:"4a5ad5a75efb403163fafa0c4b860724"},{url:"dist/assets/source-IEyyByd2.js",revision:"0f6f0a86bb6aae8b72276a8128e23fe3"},{url:"dist/assets/source2-xOwqMm4r.js",revision:"92deb67547abb89cbcf4a4c5bef66425"},{url:"dist/assets/tags-gdcyZ_lM.js",revision:"abe12e40389c4c2d7de2d8c2e0c6d11b"},{url:"dist/assets/typora-oTwmivIF.js",revision:"8a83241d0e19a0aa0b0c7406e24dcf06"},{url:"dist/assets/uptime-QkDMxSRp.js",revision:"e00f737a7aefc84cf03ca260756beba3"},{url:"dist/assets/ValaxyMain-0iaxSEQb.css",revision:"940e88a29f37f370c4af9c01ed9814da"},{url:"dist/assets/ValaxyMain.vue_vue_type_style_index_0_lang-Fxpk32vK.js",revision:"c107980c17d135955b45d2c3dca700d5"},{url:"dist/assets/virtual_pwa-register-35ph6Jx3.js",revision:"2b7027738b85d1f5398a5391baf40cb8"},{url:"dist/assets/welcome-NQOrV8z5.js",revision:"510aa0500ef9995fd8af3a33319ba9a3"},{url:"dist/assets/workbox-window.prod.es5-prqDwDSL.js",revision:"ed0c862094c41f455cdef837aa7dafd2"},{url:"dist/assets/YunAlgoliaSearch-yMatfn5L.js",revision:"cbac687d873aa9636a85e03a20de0788"},{url:"dist/assets/YunCard.vue_vue_type_script_setup_true_lang-uZSKpm_p.js",revision:"ec8d1e716aee42f5babda8481f82244b"},{url:"dist/assets/YunFooter-dFYkuLVA.css",revision:"c47d87e9b134ca72d5891e799512d8d9"},{url:"dist/assets/YunFooter.vue_vue_type_style_index_0_lang-FS7VPfIi.js",revision:"1fe669083037b547fff8db5914898a47"},{url:"dist/assets/YunGallery-JRnvcoYX.js",revision:"35bab7c9bd8653eabdbded36410d79d5"},{url:"dist/assets/YunPageHeader.vue_vue_type_script_setup_true_lang-C2tXSQz9.js",revision:"154049aa1b62c1338db905fddd73d0a4"},{url:"dist/assets/YunPostCollapse-82QETku1.css",revision:"3ab792f7552d723b7a40c7126b02cd3c"},{url:"dist/assets/YunPostCollapse.vue_vue_type_style_index_0_lang-A0hBlyWn.js",revision:"2f912d2f8af9a0bd44e6ad83af48b705"},{url:"dist/assets/YunPostList-mA05bKd8.css",revision:"42871260de2af0f743a0c409b11b4d4f"},{url:"dist/assets/YunPostList.vue_vue_type_style_index_0_lang-bOJVUBQj.js",revision:"1a1d09b5d1f45e05d855519dbc3ac291"},{url:"dist/assets/YunPostMeta-eP8AR0dX.css",revision:"2453d6c8b5b70f50250b2b420a677374"},{url:"dist/assets/YunPostMeta.vue_vue_type_script_setup_true_lang-30r2e8qq.js",revision:"88bb1b5c1b73856caf7bbd9b9456e544"},{url:"dist/favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"dist/index.html",revision:"c723dc5302554aaf89e4d951ef73278c"},{url:"dist/pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"dist/pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"dist/safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"index.html",revision:"5b6e371fab56c9ed9957e2e085e08d38"},{url:"public/favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"public/pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"public/pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"public/safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"favicon.svg",revision:"ffa05c7ab9c3a0173214d319034efaba"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-144x144.png",revision:"ea7efeb18208de07c074444b7cb5f079"},{url:"pwa-512x512.png",revision:"e403c4de91c4395d9a20422fcc7c7478"},{url:"manifest.webmanifest",revision:"22ab653848f5784d7383bf9f38f62fb1"}],{ignoreURLParametersMatching:[/.*/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
