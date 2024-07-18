import{d as R,A as P,l as v,m as O,o as u,e as m,r as Z,h as t,x as r,f as i,ac as W,D as x,I as D,k as T,ad as k,g as w,i as c,F as z,z as S,ae as H,U as M,c as Y,w as C,n as E}from"./app-iPK9VDY2.js";function Je(e,o){return Math.random()*(o-e)+e}function Se(e,o){let l,a=!1;return()=>{l&&clearTimeout(l),a?l=setTimeout(e,o):(e(),a=!0,setTimeout(()=>{a=!1},o))}}const U={class:"vc-site-live-time"},X={"mx-1":""},L={"mx-1":""},B={"mx-1":""},_={"mx-1":""},K=R({__name:"VCLiveTime",props:{startTime:{}},setup(e){const o=e,{t:l}=P(),a=v(0),n=v(0),s=v(0),f=v(0);function A(){const d=new Date(o.startTime),g=new Date().getTime()-d.getTime(),p=60*1e3,h=60*p,J=24*h;a.value=Math.floor(g/J),n.value=Math.floor(g%J/60/60/1e3),s.value=Math.floor(g%h/60/1e3),f.value=Math.floor(g%p/1e3)}return O(()=>{setInterval(A,1e3)}),(d,y)=>(u(),m("div",U,[Z(d.$slots,"live-time-before"),t("span",X,r(i(l)("time.day",a.value)),1),t("span",L,r(i(l)("time.hour",n.value)),1),t("span",B,r(i(l)("time.minute",s.value)),1),t("span",_,r(i(l)("time.second",f.value)),1),Z(d.$slots,"live-time-after")]))}});var Q="@vercel/analytics",G="1.3.1",F=()=>{window.va||(window.va=function(...o){(window.vaq=window.vaq||[]).push(o)})};function V(){return typeof window<"u"}function j(){try{const e="production"}catch{}return"production"}function q(e="auto"){if(e==="auto"){window.vam=j();return}window.vam=e}function $(){return(V()?window.vam:j())||"production"}function b(){return $()==="development"}var ee="https://va.vercel-scripts.com/v1/script.debug.js",te="/_vercel/insights/script.js";function ae(e={debug:!0}){var o;if(!V())return;q(e.mode),F(),e.beforeSend&&((o=window.va)==null||o.call(window,"beforeSend",e.beforeSend));const l=e.scriptSrc||(b()?ee:te);if(document.head.querySelector(`script[src*="${l}"]`))return;const a=document.createElement("script");a.src=l,a.defer=!0,a.dataset.sdkn=Q+(e.framework?`/${e.framework}`:""),a.dataset.sdkv=G,e.disableAutoTrack&&(a.dataset.disableAutoTrack="1"),e.endpoint&&(a.dataset.endpoint=e.endpoint),e.dsn&&(a.dataset.dsn=e.dsn),a.onerror=()=>{const n=b()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${l}. ${n}`)},b()&&e.debug===!1&&(a.dataset.debug="false"),document.head.appendChild(a)}var ne="@vercel/speed-insights",oe="1.0.12",se=()=>{window.si||(window.si=function(...o){(window.siq=window.siq||[]).push(o)})};function ie(){return typeof window<"u"}function le(){try{const e="production"}catch{}return"production"}function I(){return le()==="development"}var N="https://va.vercel-scripts.com/v1/speed-insights",re=`${N}/script.js`,ce=`${N}/script.debug.js`,de="/_vercel/speed-insights/script.js";function ue(e={}){var o;if(!ie()||e.route===null)return null;se();const a=!!e.dsn?re:de,n=e.scriptSrc||(I()?ce:a);if(document.head.querySelector(`script[src*="${n}"]`))return null;e.beforeSend&&((o=window.si)==null||o.call(window,"beforeSend",e.beforeSend));const s=document.createElement("script");return s.src=n,s.defer=!0,s.dataset.sdkn=ne+(e.framework?`/${e.framework}`:""),s.dataset.sdkv=oe,e.sampleRate&&(s.dataset.sampleRate=e.sampleRate.toString()),e.route&&(s.dataset.route=e.route),e.endpoint&&(s.dataset.endpoint=e.endpoint),e.dsn&&(s.dataset.dsn=e.dsn),I()&&e.debug===!1&&(s.dataset.debug="false"),s.onerror=()=>{console.log(`[Vercel Speed Insights] Failed to load script from ${n}. Please check if any content blockers are enabled and try again.`)},document.head.appendChild(s),{setRoute:f=>{s.dataset.route=f??void 0}}}const fe={class:"va-footer p-4 text-$va-c-text-light",text:"center sm"},me={key:0,class:"beian",m:"y-2"},ge={href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener"},pe={class:"copyright flex justify-center items-center gap-2",p:"1"},he=["href","title"],ve={key:1,class:"powered",m:"2"},ke=["innerHTML"],we=["href","title"],Ae=R({__name:"YunFooter",setup(e){const{t:o}=P(),l=W(),a=x(),n=D(),s=new Date().getFullYear(),f=T(()=>s===n.value.footer.since),A=T(()=>o("footer.powered",[`<a href="${k.repository.url}" target="_blank" rel="noopener">Valaxy</a> v${k.version}`])),d=T(()=>n.value.footer.icon||{url:k.repository.url,name:"i-ri-cloud-line",title:k.name});return(y,g)=>{var p,h;return u(),m("footer",fe,[(p=i(n).footer.beian)!=null&&p.enable&&i(n).footer.beian.icp?(u(),m("div",me,[t("a",ge,r(i(n).footer.beian.icp),1)])):w("v-if",!0),t("div",pe,[t("span",null,[c(" © "),f.value?w("v-if",!0):(u(),m(z,{key:0},[c(r(i(n).footer.since)+" - ",1)],64)),c(" "+r(i(s)),1)]),(h=i(n).footer.icon)!=null&&h.enable?(u(),m("a",{key:0,class:S(["inline-flex",i(n).footer.icon.animated?"animate-pulse":""]),href:d.value.url,target:"_blank",title:d.value.title},[t("div",{class:S(d.value.name)},null,2)],10,he)):w("v-if",!0),t("span",null,r(i(a).author.name),1)]),i(n).footer.powered?(u(),m("div",ve,[t("span",{innerHTML:A.value},null,8,ke),c(" | "),t("span",null,[c(r(i(o)("footer.theme"))+" - ",1),t("a",{href:i(n).pkg.repository.url,title:i(n).pkg.name,target:"_blank"},r(H(i(l).theme)),9,we),c(" v"+r(i(n).pkg.version),1)])])):w("v-if",!0),Z(y.$slots,"default")])}}}),ye=t("div",null,[c("本站总访问量 "),t("span",{id:"busuanzi_value_site_pv"},"Loading"),c(" 次")],-1),Te=t("div",null,[c("本站访客数 "),t("span",{id:"busuanzi_value_site_uv"},"Loading"),c(" 人次")],-1),be=t("span",null,"本站已运行",-1),Ze=t("div",{class:"badge-logo",align:"center"},[t("a",{class:"badge",title:"萌ICP备-20220585号",href:"https://icp.gov.moe/?keyword=20220585/",target:"_blank"},[t("img",{src:"https://img.shields.io/badge/萌ICP备-20220585号-fe1384?style=flat&logo=data:image/png;base64,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","data-lazy-src":"https://img.shields.io/badge/萌ICP备-20220585号-fe1384?style=flat&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAByxJREFUSInl1nlwVeUZx/HPuTckkD0kQFiCEEIUlNUCAqKoSBV1AIt1ikpVLFbLONjWGUXbmWrbweJMy7hUxbbTjsUq6KCiWEvr0kE2WVK2QCKBJCxJgEASsienfxwqMob+3Zm+f93z3vM+32f5vc9z+H9bwVcfOp/YQ+1prhhEZS1VDQzqQ1MjiQmIC5Liwm3lBWpqFimrulb/7A/067vM2IsOBZ2h8MhJQW6KMDNVsKeaizKEyUlsKueqgWJ39AMJF3QpDCNYr1SaEig/lWNX2Z1h6dH5/lVyGdVIZFf7MHo9bEfh9rCg/+8NyHlN77QTsnpQ0i2y08VK+BosfhbW0cHxqmSfFd9qW+l9Pi+5WltFdGTsOBbO5dJcdh3lN5+xff0Y2zuelXjRsyYUrjOu4BVJaavlpbWIJRBLOM+J81O95AAnTtM9vNHGknut3zdT48FutJE3koWTuG4oSXH+VsInX3B9IdcVUNfCuv08t4GjO6NspOa3BNcOXx1eOugVHQnrTMkTuyWrC/BjRZO9uPYTpw7HhTWkXcLd45l9GblpHD7NWzt5ZTMXZ/OdkTy+lvR07rmcmWffq6pn9W5e/oymfcT6kJbXHiydMyVYkL/x66n+ZMcctQfjhgxl6UIGZ3Ooltd2RIZqjqKRS0ew9cFIA1cO5urlLHuPZWsZPJiZw7gqn0VT2HCIR9+jvCQhfHPrLGyE2Hng2roBxHnmJoZnc9drbD3I6QaaWkjpSVoeu4+x5XB05qMDqCenHz37UHmcFRv54ZuMeoYrB/L0DPRgZ0WfrsXVKzPX3nYykrn3dUZl8+Q0Qox/gc/L6ZlKzxQefo+UROpa6Z4VCedkPd8YyJYHI3u5T/HAShZNQxsXZfR3pCtwRW066VEeOuIUVUf77+9jTw2pycTOJml7Je1t9EgiI5X2jkgyze1fCSSdtjhBiJCkpKyuI+5oTdAtkTCgVwrbKsl8ko6QjO40tZ67EpkpdIbRf20dkbPpPTjdwsSX6I5dJYy4hoQAaZQdDy4A1iEMI613T6LtBPXJpPakrjGqc1Y6CTFq62htJp5KRwPJKWSkU3WKiiPEEqO6xgM6oZmctJhDXYH7Z59xuCyKpK6R26ZE+ys3MWYoN1/Mc5uoqmbEQJ6fTc/ulJ3i/lUc+YIfzeKhKzjVHN31A3XRHddKSrf6/6DOV3VTcw1hVKfkxOhaPDAe1UwfwmNTqT1Drxw+nE9xNXetIjHG2vnoxoT+rNrN2Of58Rp6JZ+ldKes5kjX4G7dKuikpoERfaltYnQ/DOSS3hEAFk9lXQkLnmf7Ib65lPJT3HU1+46Tm8rYvgzKYVA2h+vQIMjvewHwdSN20MiOSmZczO4a1hSzYi77T7CiiPF5JMTZexjJ5OagkwNV9M+MnJ09nKU3smgyQ3PYWoEO4fUjii4QceJmevJuMeP6csUAln4atcbSGoqOUpjD30uZNwnpHNtN3lC+NZa1xeT34pGVTJ3PL9+Ohs6GQ8gVtHZs6VLVwZhBReGwoXvt3THM/hP0SWVnCR8f4PMjkffjB/DQS8waxpHFfFgaaeHZDRRtJn0yP5tF31ymFVJ2nN27GD66KBzca2/XEWdkUpD3Fmd4tYj0FMS54Q9UnuaDUv6yE/24ewWP/DU6N/d1fvousYEs28DyLVEvGDOAt/egmSkXv2VYn3NBfpXbua6J8hMFFvy2RHsL+57gmX+w/AN651PfEDWQzLRI+afqIqOxFDJT6Rbn9Bmad3PnTH5wIxOXkJTWGiz57hCDsyqDWVldRNzeyOh+paaPfpFKnvqQX88iZwDVx0lLJqUHbe3EkZ1Odm+yUqK2GHYKmhvIG8fyeTz9IY5x67jnFPapdPDkl6jzwEF9IDjZJlgwfbG+o2u8+g4rd7D/UYI41TXnevV5K4j2q6uESckUP8rvNrH6fUH/sRXB9AlPONMSDZ8uazwoi56JjEyvdftV88jinhf4uIzmJRQOoOYgja0RKAiIBZxpjvZH5tP0c97axcLlyBXOuWZemJTYFFbUCU+1dl3j8PGSyFhnJ7EkYcWh7/njqpep5xfzWTyZZ7dEg73xOJKiGqf3YenNLBjLTz7i539COg/OvSOYO2GFo/VRG0Zwe0YX4Ns3R7NXSCxBeM8IthXfZvGf3xCWc/kkXvg2vVP4YB/rDzC1gGlDo+50/xvs2khKPrNnzAzmTH5HbzR0fkkKro93Ab5vx9kfaGgT3lLA5EyWbRpoTdHbSreOppGJV/PwlRTksK+aZz5l6z+RLBgxaau5k2cJelTKzmRQMq0d51J8UxL+23d1TDTcj7WQllZu4YwxDo+eZc22X9mwd6gN65GIFmQzampxcMOoR1xeuMbpVoqromsXdG3+wmCiekNtfSSmiUNWu2zgap+WjlZW8X11TeNkpWwICvNfCm8u3Cmxg4PN0VdmEJw7/7+0/g32RaqCbhRecAAAAABJRU5ErkJggg==",alt:"萌ICP备-20220585号"})]),t("a",{class:"badge",title:"本站由Vercel托管",href:"https://vercel.com/",target:"_blank"},[t("img",{src:"https://img.shields.io/badge/Source-Vercel-black?style=flat&logo=Vercel","data-lazy-src":"https://img.shields.io/badge/Source-Vercel-black?style=flat&logo=Vercel",alt:"本站由Vercel托管"})]),t("a",{class:"badge",title:"本站CDN由Cloudflare提供",href:"https://cloudflare.com/",target:"_blank"},[t("img",{src:"https://img.shields.io/badge/CDN-cloudflare-fbad41?style=flat&logo=Cloudflare","data-lazy-src":"https://img.shields.io/badge/Source-cloudflare-fbad41?style=flat&logo=cloudflare",alt:"本站CDN由Cloudflare提供"})]),t("a",{class:"badge",title:"本站采用BY-NC-SA4.0国际许可协议进行许可",href:"https://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank"},[t("img",{src:"https://img.shields.io/badge/Copyright-BY--NC--SA%204.0-d42328?style=flat&logo=Claris","data-lazy-src":"https://img.shields.io/badge/Copyright-BY--NC--SA%204.0-d42328?style=flat&logo=Claris"})])],-1),Ce=R({__name:"YunFooter",setup(e){return M("https://cn.vercount.one/js"),ae(),ue(),(o,l)=>{const a=K;return u(),Y(Ae,null,{default:C(()=>[ye,Te,E(a,{"start-time":"2022-08-18 00:00:00",style:{color:"yellow"}},{"live-time-before":C(()=>[be]),_:1}),Ze]),_:1})}}});export{Ce as _,Je as r,Se as t};
