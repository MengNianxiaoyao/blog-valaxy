import{d as J,x,E as h,X as I,o as n,e as r,r as v,f as e,t as s,l as t,ae as z,A as W,D as w,m as Z,af as b,s as k,i as o,F as j,v as O,ag as R,Q as S,c as H,w as V,g as P}from"./app-NTAVMTHt.js";const C={class:"vc-site-live-time"},X={"mx-1":""},Y={"mx-1":""},D={"mx-1":""},M={"mx-1":""},E=J({__name:"VCLiveTime",props:{startTime:{}},setup(y){const d=y,{t:i}=x(),c=h(0),a=h(0),g=h(0),p=h(0);function A(){const l=new Date(d.startTime),f=new Date().getTime()-l.getTime(),u=60*1e3,m=60*u,N=24*m;c.value=Math.floor(f/N),a.value=Math.floor(f%N/60/60/1e3),g.value=Math.floor(f%m/60/1e3),p.value=Math.floor(f%u/1e3)}return I(()=>{setInterval(A,1e3)}),(l,T)=>(n(),r("div",C,[v(l.$slots,"live-time-before"),e("span",X,s(t(i)("time.day",c.value)),1),e("span",Y,s(t(i)("time.hour",a.value)),1),e("span",D,s(t(i)("time.minute",g.value)),1),e("span",M,s(t(i)("time.second",p.value)),1),v(l.$slots,"live-time-after")]))}}),U={class:"va-footer p-4 text-$va-c-text-light",text:"center sm"},K={key:0,class:"beian",m:"y-2"},L={href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener"},B={class:"copyright flex justify-center items-center gap-2",p:"1"},G=["href","title"],Q={key:1,class:"powered",m:"2"},_=["innerHTML"],F=["href","title"],q=J({__name:"YunFooter",setup(y){const{t:d}=x(),i=z(),c=W(),a=w(),g=new Date().getFullYear(),p=Z(()=>g===a.value.footer.since),A=Z(()=>d("footer.powered",[`<a href="${b.repository.url}" target="_blank" rel="noopener">Valaxy</a> v${b.version}`])),l=Z(()=>a.value.footer.icon||{url:b.repository.url,name:"i-ri-cloud-line",title:b.name});return(T,f)=>{var u,m;return n(),r("footer",U,[(u=t(a).footer.beian)!=null&&u.enable&&t(a).footer.beian.icp?(n(),r("div",K,[e("a",L,s(t(a).footer.beian.icp),1)])):k("v-if",!0),e("div",B,[e("span",null,[o(" © "),p.value?k("v-if",!0):(n(),r(j,{key:0},[o(s(t(a).footer.since)+" - ",1)],64)),o(" "+s(t(g)),1)]),(m=t(a).footer.icon)!=null&&m.enable?(n(),r("a",{key:0,class:O(["inline-flex",t(a).footer.icon.animated?"animate-pulse":""]),href:l.value.url,target:"_blank",title:l.value.title},[e("div",{class:O(l.value.name)},null,2)],10,G)):k("v-if",!0),e("span",null,s(t(c).author.name),1)]),t(a).footer.powered?(n(),r("div",Q,[e("span",{innerHTML:A.value},null,8,_),o(" | "),e("span",null,[o(s(t(d)("footer.theme"))+" - ",1),e("a",{href:t(a).pkg.repository.url,title:t(a).pkg.name,target:"_blank"},s(R(t(i).theme)),9,F),o(" v"+s(t(a).pkg.version),1)])])):k("v-if",!0),v(T.$slots,"default")])}}}),$=e("div",null,[o("本站总访问量 "),e("span",{id:"busuanzi_value_site_pv"}),o(" 次")],-1),ee=e("div",null,[o("本站访客数 "),e("span",{id:"busuanzi_value_site_uv"}),o(" 人次")],-1),te=e("span",null,"本站已运行",-1),ae=e("div",{class:"badge-logo",align:"center"},[e("a",{class:"badge",href:"https://icp.gov.moe/?keyword=20220585/",target:"_blank"},[e("img",{src:"https://img.shields.io/badge/萌ICP备-20220585号-fe1384?style=flat&logo=data:image/png;base64,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","data-lazy-src":"https://img.shields.io/badge/萌ICP备-20220585号-fe1384?style=flat&logo=data:image/png;base64,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"})]),e("a",{class:"badge",href:"https://github.com/",target:"_blank"},[e("img",{src:"https://img.shields.io/badge/Source-GitHub-5d5d5d?style=flat&logo=GitHub","data-lazy-src":"https://img.shields.io/badge/Source-GitHub-5d5d5d?style=flat&logo=GitHub"})]),e("a",{class:"badge",href:"https://vercel.com/",target:"_blank"},[e("img",{src:"https://img.shields.io/badge/Source-Vercel-black?style=flat&logo=Vercel","data-lazy-src":"https://img.shields.io/badge/Source-Vercel-black?style=flat&logo=Vercel"})]),e("a",{class:"badge",href:"https://netlify.com/",target:"_blank"},[e("img",{src:"https://img.shields.io/badge/Source-Netlify-35b1ba?style=flat&logo=Netlify","data-lazy-src":"https://img.shields.io/badge/Source-Netlify-35b1ba?style=flat&logo=Netlify"})]),e("a",{class:"badge",href:"https://cloudflare.com/",target:"_blank"},[e("img",{src:"https://img.shields.io/badge/Source-cloudflare-fbad41?style=flat&logo=cloudflare","data-lazy-src":"https://img.shields.io/badge/Source-cloudflare-fbad41?style=flat&logo=cloudflare"})]),e("a",{class:"badge",href:"https://cloudflare.com/",target:"_blank"},[e("img",{src:"https://img.shields.io/badge/CDN-cloudflare-fbad41?style=flat&logo=cloudflare","data-lazy-src":"https://img.shields.io/badge/Source-cloudflare-fbad41?style=flat&logo=cloudflare"})]),e("a",{class:"badge",href:"https://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank"},[e("img",{src:"https://img.shields.io/badge/Copyright-BY--NC--SA%204.0-d42328?style=flat&logo=Claris","data-lazy-src":"https://img.shields.io/badge/Copyright-BY--NC--SA%204.0-d42328?style=flat&logo=Claris"})])],-1),oe=J({__name:"YunFooter",setup(y){return S("//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"),(d,i)=>{const c=E;return n(),H(q,null,{default:V(()=>[$,ee,P(c,{"start-time":"2022-08-18",style:{color:"yellow"}},{"live-time-before":V(()=>[te]),_:1}),ae]),_:1})}}});export{oe as _};
