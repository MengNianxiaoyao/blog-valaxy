import{d as b,A as I,l as k,m as O,o as u,e as d,r as J,h as e,x as s,f as t,ac as x,D as W,J as w,k as y,ad as A,g as T,i as n,F as P,z as V,ae as j,U as z,c as R,w as C,n as H}from"./app-B-h2PGjK.js";function se(r,l){return Math.random()*(l-r)+r}function le(r,l){let o,i=!1;return()=>{o&&clearTimeout(o),i?o=setTimeout(r,l):(r(),i=!0,setTimeout(()=>{i=!1},l))}}const S={class:"vc-site-live-time"},D={"mx-1":""},Y={"mx-1":""},M={"mx-1":""},X={"mx-1":""},E=b({__name:"VCLiveTime",props:{startTime:{}},setup(r){const l=r,{t:o}=I(),i=k(0),a=k(0),f=k(0),h=k(0);function Z(){const c=new Date(l.startTime),m=new Date().getTime()-c.getTime(),p=60*1e3,g=60*p,N=24*g;i.value=Math.floor(m/N),a.value=Math.floor(m%N/60/60/1e3),f.value=Math.floor(m%g/60/1e3),h.value=Math.floor(m%p/1e3)}return O(()=>{setInterval(Z,1e3)}),(c,v)=>(u(),d("div",S,[J(c.$slots,"live-time-before"),e("span",D,s(t(o)("time.day",i.value)),1),e("span",Y,s(t(o)("time.hour",a.value)),1),e("span",M,s(t(o)("time.minute",f.value)),1),e("span",X,s(t(o)("time.second",h.value)),1),J(c.$slots,"live-time-after")]))}}),U={class:"va-footer p-4 text-$va-c-text-light",text:"center sm"},K={key:0,class:"beian",m:"y-2"},B={href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener"},L={class:"copyright flex justify-center items-center gap-2",p:"1"},Q=["href","title"],G={key:1,class:"powered",m:"2"},_=["innerHTML"],F=["href","title"],q=b({__name:"YunFooter",setup(r){const{t:l}=I(),o=x(),i=W(),a=w(),f=new Date().getFullYear(),h=y(()=>f===a.value.footer.since),Z=y(()=>l("footer.powered",[`<a href="${A.repository.url}" target="_blank" rel="noopener">Valaxy</a> v${A.version}`])),c=y(()=>a.value.footer.icon||{url:A.repository.url,name:"i-ri-cloud-line",title:A.name});return(v,m)=>{var p,g;return u(),d("footer",U,[(p=t(a).footer.beian)!=null&&p.enable&&t(a).footer.beian.icp?(u(),d("div",K,[e("a",B,s(t(a).footer.beian.icp),1)])):T("v-if",!0),e("div",L,[e("span",null,[n(" © "),h.value?T("v-if",!0):(u(),d(P,{key:0},[n(s(t(a).footer.since)+" - ",1)],64)),n(" "+s(t(f)),1)]),(g=t(a).footer.icon)!=null&&g.enable?(u(),d("a",{key:0,class:V(["inline-flex",t(a).footer.icon.animated?"animate-pulse":""]),href:c.value.url,target:"_blank",title:c.value.title},[e("div",{class:V(c.value.name)},null,2)],10,Q)):T("v-if",!0),e("span",null,s(t(i).author.name),1)]),t(a).footer.powered?(u(),d("div",G,[e("span",{innerHTML:Z.value},null,8,_),n(" | "),e("span",null,[n(s(t(l)("footer.theme"))+" - ",1),e("a",{href:t(a).pkg.repository.url,title:t(a).pkg.name,target:"_blank"},s(j(t(o).theme)),9,F),n(" v"+s(t(a).pkg.version),1)])])):T("v-if",!0),J(v.$slots,"default")])}}}),$=e("div",null,[n("本站总访问量 "),e("span",{id:"busuanzi_value_site_pv"}),n(" 次")],-1),ee=e("div",null,[n("本站访客数 "),e("span",{id:"busuanzi_value_site_uv"}),n(" 人次")],-1),te=e("span",null,"本站已运行",-1),ae=e("div",{class:"badge-logo",align:"center"},[e("a",{class:"badge",title:"萌ICP备-20220585号",href:"https://icp.gov.moe/?keyword=20220585/",target:"_blank"},[e("img",{src:"https://img.shields.io/badge/萌ICP备-20220585号-fe1384?style=flat&logo=data:image/png;base64,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","data-lazy-src":"https://img.shields.io/badge/萌ICP备-20220585号-fe1384?style=flat&logo=data:image/png;base64,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",alt:"萌ICP备-20220585号"})]),e("a",{class:"badge",title:"本站由Vercel托管",href:"https://vercel.com/",target:"_blank"},[e("img",{src:"https://img.shields.io/badge/Source-Vercel-black?style=flat&logo=Vercel","data-lazy-src":"https://img.shields.io/badge/Source-Vercel-black?style=flat&logo=Vercel",alt:"本站由Vercel托管"})]),e("a",{class:"badge",title:"本站CDN由Cloudflare提供",href:"https://cloudflare.com/",target:"_blank"},[e("img",{src:"https://img.shields.io/badge/CDN-cloudflare-fbad41?style=flat&logo=cloudflare","data-lazy-src":"https://img.shields.io/badge/Source-cloudflare-fbad41?style=flat&logo=cloudflare",alt:"本站CDN由Cloudflare提供"})]),e("a",{class:"badge",title:"本站采用BY-NC-SA4.0国际许可协议进行许可",href:"https://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank"},[e("img",{src:"https://img.shields.io/badge/Copyright-BY--NC--SA%204.0-d42328?style=flat&logo=Claris","data-lazy-src":"https://img.shields.io/badge/Copyright-BY--NC--SA%204.0-d42328?style=flat&logo=Claris"})])],-1),ie=b({__name:"YunFooter",setup(r){return z("//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"),(l,o)=>{const i=E;return u(),R(q,null,{default:C(()=>[$,ee,H(i,{"start-time":"2022-08-18 00:00:00",style:{color:"yellow"}},{"live-time-before":C(()=>[te]),_:1}),ae]),_:1})}}});export{ie as _,se as r,le as t};