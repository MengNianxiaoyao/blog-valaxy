import{J as L,K as pn,L as hn,M as ot,N as at,O as be,P as vn,Q as pt,a as Ve,k as O,C as gn,s as Ae,D as ae,m as fe,R as pe,S as ht,U as De,V as _n,W as yn,X as bn,Y as st,Z as vt,d as H,A as se,y as he,o as g,e as z,F as je,t as gt,f as v,h,x as D,c as M,g as $,z as G,_ as qe,I as wn,l as ne,$ as _t,a0 as yt,n as R,a1 as bt,a2 as wt,a3 as $n,r as k,a4 as En,j as $t,a5 as kn,a6 as Cn,a7 as zn,w as F,a8 as Ln,a9 as An,q as xn,aa as Sn,u as In,ab as On,v as Tn}from"./app-BkhpbvgH.js";import{t as Mn,_ as Hn}from"./YunFooter.vue_vue_type_style_index_0_lang-D6cwo5MK.js";import{_ as Et}from"./YunCard.vue_vue_type_script_setup_true_lang-DTuPHPXE.js";import{i as Fe,a as kt}from"./index-C5okkQwF.js";import{_ as Nn}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-WiQlrZXI.js";import{u as Dn}from"./post-CN3KxL-n.js";function ke(e,t){const n=L(e),o=L(t),a=n.getTime()-o.getTime();return a<0?-1:a>0?1:a}function Yn(e){return pn(e,Date.now())}function Rn(e,t){const n=L(e),o=L(t),a=n.getFullYear()-o.getFullYear(),s=n.getMonth()-o.getMonth();return a*12+s}function Pn(e){return t=>{const o=(e?Math[e]:Math.trunc)(t);return o===0?0:o}}function Ct(e,t){return+L(e)-+L(t)}function Vn(e){const t=L(e);return t.setHours(23,59,59,999),t}function jn(e){const t=L(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function qn(e){const t=L(e);return+Vn(t)==+jn(t)}function Fn(e,t){const n=L(e),o=L(t),a=ke(n,o),s=Math.abs(Rn(n,o));let l;if(s<1)l=0;else{n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-a*s);let r=ke(n,o)===-a;qn(L(e))&&s===1&&ke(e,o)===1&&(r=!1),l=a*(s-Number(r))}return l===0?0:l}function Un(e,t,n){const o=Ct(e,t)/1e3;return Pn(n==null?void 0:n.roundingMethod)(o)}function Bn(e,t,n){const o=vn(),a=(n==null?void 0:n.locale)??o.locale??hn,s=2520,l=ke(e,t);if(isNaN(l))throw new RangeError("Invalid time value");const r=Object.assign({},n,{addSuffix:n==null?void 0:n.addSuffix,comparison:l});let c,m;l>0?(c=L(t),m=L(e)):(c=L(e),m=L(t));const d=Un(m,c),j=(ot(m)-ot(c))/1e3,w=Math.round((d-j)/60);let A;if(w<2)return n!=null&&n.includeSeconds?d<5?a.formatDistance("lessThanXSeconds",5,r):d<10?a.formatDistance("lessThanXSeconds",10,r):d<20?a.formatDistance("lessThanXSeconds",20,r):d<40?a.formatDistance("halfAMinute",0,r):d<60?a.formatDistance("lessThanXMinutes",1,r):a.formatDistance("xMinutes",1,r):w===0?a.formatDistance("lessThanXMinutes",1,r):a.formatDistance("xMinutes",w,r);if(w<45)return a.formatDistance("xMinutes",w,r);if(w<90)return a.formatDistance("aboutXHours",1,r);if(w<at){const _=Math.round(w/60);return a.formatDistance("aboutXHours",_,r)}else{if(w<s)return a.formatDistance("xDays",1,r);if(w<be){const _=Math.round(w/at);return a.formatDistance("xDays",_,r)}else if(w<be*2)return A=Math.round(w/be),a.formatDistance("aboutXMonths",A,r)}if(A=Fn(m,c),A<12){const _=Math.round(w/be);return a.formatDistance("xMonths",_,r)}else{const _=A%12,N=Math.trunc(A/12);return _<3?a.formatDistance("aboutXYears",N,r):_<9?a.formatDistance("overXYears",N,r):a.formatDistance("almostXYears",N+1,r)}}function Xn(e,t){return Bn(e,Yn(e),t)}function Wn(e,t){const n=document.createElement("div");n.className=t,e.parentNode.insertBefore(n,e),e.parentNode.removeChild(e),n.appendChild(e)}function Gn(e=document){e.querySelectorAll("table").forEach(t=>{const n=document.createElement("div");n.className="table-container",Wn(t,"table-container")})}let Ce=[];function Ue(e){Ce.push(e),pt(()=>{Ce=Ce.filter(t=>t!==e)})}const Zn=()=>Ce.forEach(e=>e()),we=Zn;function zt(e,t,n={smooth:!0,targetPadding:-64}){let o=null;try{o=e.classList.contains("header-anchor")?e:decodeURIComponent(t)&&document.querySelector(decodeURIComponent(t))||null}catch(a){console.warn(a)}if(o){const a=(n==null?void 0:n.targetPadding)||-64,s=window.scrollY+o.getBoundingClientRect().top+a;!n.smooth||Math.abs(s-window.scrollY)>window.innerHeight?window.scrollTo(0,s):window.scrollTo({top:s,behavior:"smooth"})}}function Kn(e){window.addEventListener("click",async t=>{const n=t.target.closest("a");if(n){const{protocol:o,hostname:a,pathname:s,hash:l,target:r}=n,c=window.location,m=s.match(/\.\w+$/);!t.ctrlKey&&!t.shiftKey&&!t.altKey&&!t.metaKey&&r!=="_blank"&&o===c.protocol&&a===c.hostname&&!(m&&m[0]!==".html")&&s===c.pathname&&(t.preventDefault(),l&&l!==c.hash&&(await e.push({hash:decodeURIComponent(l)}),zt(n,l,{smooth:n.classList.contains("header-anchor")})))}},{capture:!0})}function Jn(e){const t=Ve(),n=O(()=>t.path),o=gn(),a=O(()=>{let r=-1;return o.postList.find((c,m)=>c.path===n.value?(r=m,!0):!1),r}),s=O(()=>a.value-1>=0?o.postList[a.value-1]:null),l=O(()=>a.value+1<o.postList.length?o.postList[a.value+1]:null);return[s,l]}function Qn(){if(Ae){const e=new WeakMap;window.addEventListener("click",t=>{var o;const n=t.target;if(n.matches('div[class*="language-"] > button.copy')){const a=n.parentElement,s=(o=n.nextElementSibling)==null?void 0:o.nextElementSibling;if(!a||!s)return;const l=/language-(shellscript|shell|bash|sh|zsh)/.test(a.className);let r="";s.querySelectorAll("span.line:not(.diff.remove)").forEach(c=>r+=`${c.textContent||""}
`),r=r.slice(0,-1),l&&(r=r.replace(/^ *(\$|>) /gm,"").trim()),eo(r).then(()=>{n.classList.add("copied"),clearTimeout(e.get(n));const c=setTimeout(()=>{n.classList.remove("copied"),n.blur(),e.delete(n)},2e3);e.set(n,c)})}})}}async function eo(e){try{return navigator.clipboard.writeText(e)}catch{const t=document.createElement("textarea"),n=document.activeElement;t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";const o=document.getSelection(),a=o?o.rangeCount>0&&o.getRangeAt(0):null;document.body.appendChild(t),t.select(),t.selectionStart=0,t.selectionEnd=e.length,document.execCommand("copy"),document.body.removeChild(t),a&&(o.removeAllRanges(),o.addRange(a)),n&&n.focus()}}/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},$e=function(t){return t.tagName==="IMG"},to=function(t){return NodeList.prototype.isPrototypeOf(t)},ze=function(t){return t&&t.nodeType===1},it=function(t){var n=t.currentSrc||t.src;return n.substr(-4).toLowerCase()===".svg"},rt=function(t){try{return Array.isArray(t)?t.filter($e):to(t)?[].slice.call(t).filter($e):ze(t)?[t].filter($e):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter($e):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},no=function(t){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=t,n},oo=function(t){var n=t.getBoundingClientRect(),o=n.top,a=n.left,s=n.width,l=n.height,r=t.cloneNode(),c=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,m=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return r.removeAttribute("id"),r.style.position="absolute",r.style.top=o+c+"px",r.style.left=a+m+"px",r.style.width=s+"px",r.style.height=l+"px",r.style.transform="",r},te=function(t,n){var o=W({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(t,o);var a=document.createEvent("CustomEvent");return a.initCustomEvent(t,o.bubbles,o.cancelable,o.detail),a},ao=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=window.Promise||function(u){function f(){}u(f,f)},a=function(u){var f=u.target;if(f===_e){_();return}x.indexOf(f)!==-1&&N({target:f})},s=function(){if(!(Q||!i.original)){var u=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(tt-u)>y.scrollOffset&&setTimeout(_,150)}},l=function(u){var f=u.key||u.keyCode;(f==="Escape"||f==="Esc"||f===27)&&_()},r=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=u;if(u.background&&(_e.style.background=u.background),u.container&&u.container instanceof Object&&(f.container=W({},y.container,u.container)),u.template){var b=ze(u.template)?u.template:document.querySelector(u.template);f.template=b}return y=W({},y,f),x.forEach(function(E){E.dispatchEvent(te("medium-zoom:update",{detail:{zoom:C}}))}),C},c=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(W({},y,u))},m=function(){for(var u=arguments.length,f=Array(u),b=0;b<u;b++)f[b]=arguments[b];var E=f.reduce(function(p,I){return[].concat(p,rt(I))},[]);return E.filter(function(p){return x.indexOf(p)===-1}).forEach(function(p){x.push(p),p.classList.add("medium-zoom-image")}),J.forEach(function(p){var I=p.type,Y=p.listener,ee=p.options;E.forEach(function(q){q.addEventListener(I,Y,ee)})}),C},d=function(){for(var u=arguments.length,f=Array(u),b=0;b<u;b++)f[b]=arguments[b];i.zoomed&&_();var E=f.length>0?f.reduce(function(p,I){return[].concat(p,rt(I))},[]):x;return E.forEach(function(p){p.classList.remove("medium-zoom-image"),p.dispatchEvent(te("medium-zoom:detach",{detail:{zoom:C}}))}),x=x.filter(function(p){return E.indexOf(p)===-1}),C},j=function(u,f){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return x.forEach(function(E){E.addEventListener("medium-zoom:"+u,f,b)}),J.push({type:"medium-zoom:"+u,listener:f,options:b}),C},w=function(u,f){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return x.forEach(function(E){E.removeEventListener("medium-zoom:"+u,f,b)}),J=J.filter(function(E){return!(E.type==="medium-zoom:"+u&&E.listener.toString()===f.toString())}),C},A=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=u.target,b=function(){var p={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},I=void 0,Y=void 0;if(y.container)if(y.container instanceof Object)p=W({},p,y.container),I=p.width-p.left-p.right-y.margin*2,Y=p.height-p.top-p.bottom-y.margin*2;else{var ee=ze(y.container)?y.container:document.querySelector(y.container),q=ee.getBoundingClientRect(),Te=q.width,nn=q.height,on=q.left,an=q.top;p=W({},p,{width:Te,height:nn,left:on,top:an})}I=I||p.width-y.margin*2,Y=Y||p.height-y.margin*2;var de=i.zoomedHd||i.original,sn=it(de)?I:de.naturalWidth||I,rn=it(de)?Y:de.naturalHeight||Y,ye=de.getBoundingClientRect(),ln=ye.top,cn=ye.left,Me=ye.width,He=ye.height,dn=Math.min(Math.max(Me,sn),I)/Me,un=Math.min(Math.max(He,rn),Y)/He,Ne=Math.min(dn,un),mn=(-cn+(I-Me)/2+y.margin+p.left)/Ne,fn=(-ln+(Y-He)/2+y.margin+p.top)/Ne,nt="scale("+Ne+") translate3d("+mn+"px, "+fn+"px, 0)";i.zoomed.style.transform=nt,i.zoomedHd&&(i.zoomedHd.style.transform=nt)};return new o(function(E){if(f&&x.indexOf(f)===-1){E(C);return}var p=function Te(){Q=!1,i.zoomed.removeEventListener("transitionend",Te),i.original.dispatchEvent(te("medium-zoom:opened",{detail:{zoom:C}})),E(C)};if(i.zoomed){E(C);return}if(f)i.original=f;else if(x.length>0){var I=x;i.original=I[0]}else{E(C);return}if(i.original.dispatchEvent(te("medium-zoom:open",{detail:{zoom:C}})),tt=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,Q=!0,i.zoomed=oo(i.original),document.body.appendChild(_e),y.template){var Y=ze(y.template)?y.template:document.querySelector(y.template);i.template=document.createElement("div"),i.template.appendChild(Y.content.cloneNode(!0)),document.body.appendChild(i.template)}if(i.original.parentElement&&i.original.parentElement.tagName==="PICTURE"&&i.original.currentSrc&&(i.zoomed.src=i.original.currentSrc),document.body.appendChild(i.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),i.original.classList.add("medium-zoom-image--hidden"),i.zoomed.classList.add("medium-zoom-image--opened"),i.zoomed.addEventListener("click",_),i.zoomed.addEventListener("transitionend",p),i.original.getAttribute("data-zoom-src")){i.zoomedHd=i.zoomed.cloneNode(),i.zoomedHd.removeAttribute("srcset"),i.zoomedHd.removeAttribute("sizes"),i.zoomedHd.removeAttribute("loading"),i.zoomedHd.src=i.zoomed.getAttribute("data-zoom-src"),i.zoomedHd.onerror=function(){clearInterval(ee),console.warn("Unable to reach the zoom image target "+i.zoomedHd.src),i.zoomedHd=null,b()};var ee=setInterval(function(){i.zoomedHd.complete&&(clearInterval(ee),i.zoomedHd.classList.add("medium-zoom-image--opened"),i.zoomedHd.addEventListener("click",_),document.body.appendChild(i.zoomedHd),b())},10)}else if(i.original.hasAttribute("srcset")){i.zoomedHd=i.zoomed.cloneNode(),i.zoomedHd.removeAttribute("sizes"),i.zoomedHd.removeAttribute("loading");var q=i.zoomedHd.addEventListener("load",function(){i.zoomedHd.removeEventListener("load",q),i.zoomedHd.classList.add("medium-zoom-image--opened"),i.zoomedHd.addEventListener("click",_),document.body.appendChild(i.zoomedHd),b()})}else b()})},_=function(){return new o(function(u){if(Q||!i.original){u(C);return}var f=function b(){i.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(i.zoomed),i.zoomedHd&&document.body.removeChild(i.zoomedHd),document.body.removeChild(_e),i.zoomed.classList.remove("medium-zoom-image--opened"),i.template&&document.body.removeChild(i.template),Q=!1,i.zoomed.removeEventListener("transitionend",b),i.original.dispatchEvent(te("medium-zoom:closed",{detail:{zoom:C}})),i.original=null,i.zoomed=null,i.zoomedHd=null,i.template=null,u(C)};Q=!0,document.body.classList.remove("medium-zoom--opened"),i.zoomed.style.transform="",i.zoomedHd&&(i.zoomedHd.style.transform=""),i.template&&(i.template.style.transition="opacity 150ms",i.template.style.opacity=0),i.original.dispatchEvent(te("medium-zoom:close",{detail:{zoom:C}})),i.zoomed.addEventListener("transitionend",f)})},N=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=u.target;return i.original?_():A({target:f})},re=function(){return y},le=function(){return x},ce=function(){return i.original},x=[],J=[],Q=!1,tt=0,y=n,i={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?y=t:(t||typeof t=="string")&&m(t),y=W({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},y);var _e=no(y.background);document.addEventListener("click",a),document.addEventListener("keyup",l),document.addEventListener("scroll",s),window.addEventListener("resize",_);var C={open:A,close:_,toggle:N,update:r,clone:c,attach:m,detach:d,on:j,off:w,getOptions:re,getImages:le,getZoomedImage:ce};return C};function so(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var io=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";so(io);function ro(){const t=ae().value.mediumZoom;fe(()=>{t.enable&&ao(t.selector||".markdown-body img",{background:"var(--medium-zoom-c-bg, rgba(0, 0, 0, 0.8))",...t.options})})}function lo(){const e=ae(),t=pe();Ae&&window.addEventListener("click",n=>{const o=n.target;if(o.matches('[class*="language-"] > button.collapse')){const a=o.parentElement;a==null||a.removeAttribute("style"),a==null||a.classList.remove("folded")}}),fe(()=>{const n=document.querySelectorAll('div[class*="language-"]'),o=e.value.codeHeightLimit,a=t.value.codeHeightLimit;let s;if(typeof a!="number"||a<=0){if(o===void 0||o<=0)return;s=o}else s=a;for(const l of Array.from(n))l.scrollHeight>s&&l.classList.add("folded")})}function co(){const e=ae(),t=O(()=>e.value.cdn.prefix);ht({link:[{rel:"stylesheet",href:`${t.value}aplayer/dist/APlayer.min.css`}]}),De(`${t.value}aplayer/dist/APlayer.min.js`,()=>{De(`${t.value}meting@2/dist/Meting.min.js`)})}function uo(){ht({script:[{src:"https://static.codepen.io/assets/embed/ei.js",async:!0}]})}function mo(e,t){let n=[];return e=e.map(o=>({...o})),e.forEach((o,a)=>{o.level>=t[0]&&o.level<=t[1]&&fo(a,e,t)&&n.push(o)}),n}function fo(e,t,n){if(e===0)return!0;let o=t[e];for(let a=e-1;a>=0;a--){let s=t[a];if(s.level<o.level&&s.level>=n[0]&&s.level<=n[1])return s.children==null&&(s.children=[]),s.children.push(o),!1}return!0}function po(e,t=[2,4]){return mo(e,typeof t=="number"?[t,t]:t==="deep"?[2,6]:t)}function ho(e){let t="";for(let n of Array.from(e.childNodes))if(n.nodeType===1){if(n.classList.contains("VABadge")||n.classList.contains("header-anchor"))continue;t+=n.textContent}else n.nodeType===3&&(t+=n.textContent);return t.trim()}function vo(e={range:[2,4],selector:".markdown-body"}){let t=e.selector||".markdown-body",n=document.querySelectorAll(t),o=n[n.length-1],a=Array.from(o.querySelectorAll(`${t} :where(h1,h2,h3,h4,h5,h6)`)).filter(s=>e.filter?e.filter(s):!0).map(s=>{let l=Number(s.tagName[1]);return{title:ho(s),link:`#${s.id}`,level:l,lang:s.lang}});return po(a,e.range)}function go(){const e=pe(),t=_n(),n=yn([]),o=O(()=>e.value.outline??t.value.outline);return Ue(()=>{o.value!==!1&&(n.value=vo({range:o.value,selector:".markdown-body",filter:s=>!!s.id&&s.hasChildNodes()}))}),{headers:n,handleClick:({target:s})=>{const l=s.href.split("#")[1],r=document.getElementById(decodeURIComponent(l));r==null||r.focus({preventScroll:!0})}}}function _o(){const{hasSidebar:e}=bn(),t=st("(min-width: 960px)"),n=st("(min-width: 1280px)");return{isAsideEnabled:O(()=>!n.value&&!t.value?!1:e.value?n.value:t.value)}}const yo=56,Ee=33;function bo(e,t){const{isAsideEnabled:n}=_o(),o=Mn(s,100);let a=null;fe(()=>{requestAnimationFrame(s),window.addEventListener("scroll",o)}),vt(()=>{r(location.hash)}),pt(()=>{window.removeEventListener("scroll",o)});function s(){if(!n.value)return;const c=[].slice.call(e.value.querySelectorAll(".outline-link")),m=[].slice.call(document.querySelectorAll(".content .header-anchor")).filter(_=>c.some(N=>N.hash===_.hash&&_.offsetParent!==null)),d=window.scrollY,j=window.innerHeight,w=document.body.offsetHeight,A=Math.abs(d+j-w)<1;if(m.length&&A){r(m[m.length-1].hash);return}for(let _=0;_<m.length;_++){const N=m[_],re=m[_+1],[le,ce]=wo(_,N,re);if(le){r(ce);return}}}const l=()=>{const c=a;if(!c)return;const m=c.getBoundingClientRect().top,d=c.getBoundingClientRect().bottom;(m<Ee||d>window.innerHeight-Ee)&&c.scrollIntoView()};function r(c){a&&a.classList.remove("active"),c==null?a=null:a=e.value.querySelector(`a[href="${decodeURIComponent(c)}"]`);const m=a;l(),m?(m.classList.add("active"),t.value.style.top=`${m.offsetTop+Ee}px`,t.value.style.opacity="1"):(t.value.style.top=`${Ee}px`,t.value.style.opacity="0")}}function lt(e){return e.parentElement.offsetTop-yo-15}function wo(e,t,n){const o=window.scrollY;return e===0&&o===0?[!0,null]:o<lt(t)?[!1,null]:!n||o<lt(n)?[!0,t.hash]:[!1,null]}const $o=["lang"],Eo=["href"],ko=H({__name:"YunOutlineItem",props:{headers:{},onClick:{type:Function},root:{type:Boolean}},setup(e){const{locale:t}=se();return(n,o)=>{const a=he("YunOutlineItem",!0);return g(),z("ul",{class:G(n.root?"root":"nested")},[(g(!0),z(je,null,gt(n.headers,({children:s,link:l,title:r,lang:c})=>(g(),z("li",{key:l,class:"va-toc-item",lang:c||v(t)},[h("a",{class:"outline-link",href:l,onClick:o[0]||(o[0]=(...m)=>n.onClick&&n.onClick(...m))},D(r),9,Eo),s!=null&&s.length?(g(),M(a,{key:0,headers:s,"on-click":n.onClick},null,8,["headers","on-click"])):$("v-if",!0)],8,$o))),128))],2)}}}),Co=qe(ko,[["__scopeId","data-v-8d7de7b3"]]),zo=e=>(bt("data-v-d2c8e7ca"),e=e(),wt(),e),Lo={class:"content"},Ao={class:"outline-title"},xo={"aria-labelledby":"doc-outline-aria-label"},So=zo(()=>h("span",{id:"doc-outline-aria-label",class:"visually-hidden"}," Table of Contents for current page ",-1)),Io=H({__name:"YunOutline",setup(e){const t=wn(),n=ne(),o=ne();bo(n,o);const{headers:a,handleClick:s}=go();return(l,r)=>{const c=Co;return _t((g(),z("div",{ref_key:"container",ref:n},[h("div",Lo,[h("div",Ao,D(v(t).outlineTitle||"On this page"),1),h("div",{ref_key:"marker",ref:o,class:"outline-marker"},null,512),h("nav",xo,[So,R(c,{class:"va-toc relative z-1 css-i18n-toc",headers:v(a),"on-click":v(s),root:""},null,8,["headers","on-click"])])])],512)),[[yt,v(a).length]])}}}),Oo=qe(Io,[["__scopeId","data-v-d2c8e7ca"]]),To=h("div",{"i-ri-file-list-line":""},null,-1),Mo=[To],Ho={class:"aside-container",flex:"~ col"},No={key:0,m:"t-6 b-2",font:"serif black"},Do=h("div",{class:"flex-grow"},null,-1),Yo={key:2,class:"custom-container"},Ro=H({__name:"YunAside",setup(e){const t=pe(),{t:n}=se(),o=$n();return(a,s)=>{const l=En,r=Oo;return g(),z(je,null,[h("button",{class:"xl:hidden toc-btn shadow fixed yun-icon-btn z-350",opacity:"75",right:"2",bottom:"19",onClick:s[0]||(s[0]=c=>v(o).toggleRightSidebar())},Mo),R(l,{show:v(o).isRightSidebarOpen,onClick:s[1]||(s[1]=c=>v(o).toggleRightSidebar())},null,8,["show"]),$("  "),h("aside",{class:G(["va-card yun-aside",v(o).isRightSidebarOpen&&"open"]),m:"l-4",text:"center",overflow:"auto"},[h("div",Ho,[v(t).toc!==!1?(g(),z("h2",No,D(v(n)("sidebar.toc")),1)):$("v-if",!0),v(t).toc!==!1?(g(),M(r,{key:1})):$("v-if",!0),Do,a.$slots.default?(g(),z("div",Yo,[k(a.$slots,"default")])):$("v-if",!0)])],2)],64)}}}),Po=H({__name:"YunArtalk",setup(e){return Fe(kt)||(void 0)(),(t,n)=>{const o=he("ArtalkClient");return g(),M(o)}}});function Lt(){const e=$t();return O(()=>e.value.addons["valaxy-addon-twikoo"])}function At(e,t="latest"){const n=ae(),o=O(()=>n.value.cdn.prefix),a=Ve(),{locale:s}=se();function l(r){if(!Ae)return;const c={el:".comment #tcomment",lang:s.value,path:a.path},m=Object.assign(c,r||{});return window.twikoo.init(m)}De(`${o.value}twikoo@${t}/dist/twikoo.all.min.js`,()=>{e.value&&l(e.value)})}function xt(e="latest"){const t=Lt(),n=O(()=>t.value.options);At(n,e)}const Vo=Object.freeze(Object.defineProperty({__proto__:null,useAddonTwikoo:Lt,useTwikoo:At,useTwikooWithOptions:xt},Symbol.toStringTag,{value:"Module"})),jo=h("div",{id:"tcomment",w:"full"},null,-1),qo=[jo],Fo=H({__name:"YunTwikoo",setup(e){return Fe(Vo)||xt(),(t,n)=>(g(),z("div",null,qo))}}),Uo=H({__name:"YunWaline",setup(e){if(Fe(kt))throw new Error("Please install valaxy-addon-waline");const t=(void 0)();return(n,o)=>{const a=he("WalineClient");return g(),M(a,{w:"full",options:v(t).options||{serverURL:""}},null,8,["options"])}}}),Bo=e=>(bt("data-v-a595452e"),e=e(),wt(),e),Xo={"case-capital":"","op-90":""},Wo=Bo(()=>h("div",{"inline-flex":"","i-ri-arrow-down-s-line":""},null,-1)),Go={class:"shadow-lg select-options absolute translate-y-1 left-0 top-full w-full bg-$va-c-bg-light overflow-hidden rounded-1"},Zo=["onClick"],Ko=H({__name:"YunSelect",props:kn({options:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=Cn(e,"modelValue"),n=ne(!1);zn("click",()=>{n.value=!1});function o(a){a.preventDefault(),a.stopImmediatePropagation(),a.stopPropagation(),n.value=!n.value}return(a,s)=>(g(),z("div",{class:"relative h-8 w-30 text-$va-c-text-2 z-10",onMousedown:s[0]||(s[0]=An(()=>{},["stop"]))},[h("button",{class:G(["flex h-full w-full px-2 items-center justify-between border rounded transition",n.value?"border-$va-c-primary":""]),onClick:o},[h("span",Xo,D(t.value),1),Wo],2),R(Ln,{persisted:""},{default:F(()=>[_t(h("ul",Go,[(g(!0),z(je,null,gt(a.options,l=>(g(),z("li",{key:l,class:G(["cursor-pointer list-none px-2 hover:bg-$va-c-primary-light hover:text-white case-capital",{"bg-$va-c-primary text-white":t.value===l}]),onClick:r=>t.value=l},D(l),11,Zo))),128))],512),[[yt,n.value]])]),_:1})],32))}}),Jo=qe(Ko,[["__scopeId","data-v-a595452e"]]),Qo={key:0,class:"flex justify-end w-full mb-2"},ea=H({__name:"YunComment",setup(e){const t=$t(),n=["valaxy-addon-waline","valaxy-addon-twikoo","valaxy-addon-artalk"],o=O(()=>n.filter(s=>t.value.addons[s]).map(s=>s.split("-")[2])),a=ne(o.value[0]);return(s,l)=>{const r=Jo,c=Uo,m=Fo,d=Po,j=he("ClientOnly"),w=Et;return g(),M(w,{w:"full",p:"4",class:"comment yun-comment sm:p-6 lg:px-12 xl:px-16"},{default:F(()=>[R(j,null,{default:F(()=>[o.value.length>1?(g(),z("div",Qo,[R(r,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=A=>a.value=A),options:o.value},null,8,["modelValue","options"])])):$("v-if",!0),a.value==="waline"?(g(),M(c,{key:1})):$("v-if",!0),a.value==="twikoo"?(g(),M(m,{key:2})):$("v-if",!0),a.value==="artalk"?(g(),M(d,{key:3})):$("v-if",!0),k(s.$slots,"default")]),_:3})]),_:3})}}}),ta={class:"post-nav"},na={class:"post-nav-item"},oa=h("div",{class:"icon","i-ri-arrow-left-s-line":""},null,-1),aa={class:"title truncate",text:"sm"},sa={class:"post-nav-item"},ia={class:"title truncate",text:"sm"},ra=h("div",{class:"icon","i-ri-arrow-right-s-line":""},null,-1),la=H({__name:"YunPostNav",setup(e){const[t,n]=Jn();return(o,a)=>{const s=he("RouterLink");return g(),z("div",ta,[h("div",na,[v(t)?(g(),M(s,{key:0,class:"post-nav-prev",to:v(t).path||"",title:v(t).title},{default:F(()=>[oa,h("span",aa,D(v(t).title),1)]),_:1},8,["to","title"])):$("v-if",!0)]),h("div",sa,[v(n)?(g(),M(s,{key:0,to:v(n).path||"",title:v(n).title,class:"post-nav-next"},{default:F(()=>[h("span",ia,D(v(n).title),1),ra]),_:1},8,["to","title"])):$("v-if",!0)])])}}}),B=typeof window<"u",St=B&&!("onscroll"in window)||typeof navigator<"u"&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),It=B&&window.devicePixelRatio>1,ca={elements_selector:".lazy",container:St||B?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},Ot=e=>Object.assign({},ca,e),ct=function(e,t){let n;const o="LazyLoad::Initialized",a=new e(t);try{n=new CustomEvent(o,{detail:{instance:a}})}catch{n=document.createEvent("CustomEvent"),n.initCustomEvent(o,!1,!1,{instance:a})}window.dispatchEvent(n)},da=(e,t)=>{if(t)if(t.length)for(let n,o=0;n=t[o];o+=1)ct(e,n);else ct(e,t)},V="src",Be="srcset",Xe="sizes",Tt="poster",ve="llOriginalAttrs",Mt="data",We="loading",Ht="loaded",Nt="applied",ua="entered",Ge="error",Dt="native",Yt="data-",Rt="ll-status",T=(e,t)=>e.getAttribute(Yt+t),ma=(e,t,n)=>{const o=Yt+t;n!==null?e.setAttribute(o,n):e.removeAttribute(o)},ge=e=>T(e,Rt),K=(e,t)=>ma(e,Rt,t),xe=e=>K(e,null),Ze=e=>ge(e)===null,fa=e=>ge(e)===We,pa=e=>ge(e)===Ge,Ke=e=>ge(e)===Dt,ha=[We,Ht,Nt,Ge],va=e=>ha.indexOf(ge(e))>=0,X=(e,t,n,o)=>{e&&typeof e=="function"&&(o===void 0?n===void 0?e(t):e(t,n):e(t,n,o))},ie=(e,t)=>{B&&t!==""&&e.classList.add(t)},P=(e,t)=>{B&&t!==""&&e.classList.remove(t)},ga=e=>{e.llTempImage=document.createElement("IMG")},_a=e=>{delete e.llTempImage},Pt=e=>e.llTempImage,Se=(e,t)=>{if(!t)return;const n=t._observer;n&&n.unobserve(e)},ya=e=>{e.disconnect()},ba=(e,t,n)=>{t.unobserve_entered&&Se(e,n)},Je=(e,t)=>{e&&(e.loadingCount+=t)},wa=e=>{e&&(e.toLoadCount-=1)},Vt=(e,t)=>{e&&(e.toLoadCount=t)},$a=e=>e.loadingCount>0,Ea=e=>e.toLoadCount>0,jt=e=>{let t=[];for(let n,o=0;n=e.children[o];o+=1)n.tagName==="SOURCE"&&t.push(n);return t},Qe=(e,t)=>{const n=e.parentNode;n&&n.tagName==="PICTURE"&&jt(n).forEach(t)},qt=(e,t)=>{jt(e).forEach(t)},Ie=[V],Ft=[V,Tt],me=[V,Be,Xe],Ut=[Mt],Oe=e=>!!e[ve],Bt=e=>e[ve],Xt=e=>delete e[ve],oe=(e,t)=>{if(Oe(e))return;const n={};t.forEach(o=>{n[o]=e.getAttribute(o)}),e[ve]=n},ka=e=>{Oe(e)||(e[ve]={backgroundImage:e.style.backgroundImage})},Z=(e,t)=>{if(!Oe(e))return;const n=Bt(e);t.forEach(o=>{((a,s,l)=>{l?a.setAttribute(s,l):a.removeAttribute(s)})(e,o,n[o])})},Ca=e=>{if(!Oe(e))return;const t=Bt(e);e.style.backgroundImage=t.backgroundImage},Wt=(e,t,n)=>{ie(e,t.class_applied),K(e,Nt),n&&(t.unobserve_completed&&Se(e,t),X(t.callback_applied,e,n))},Gt=(e,t,n)=>{ie(e,t.class_loading),K(e,We),n&&(Je(n,1),X(t.callback_loading,e,n))},U=(e,t,n)=>{n&&e.setAttribute(t,n)},dt=(e,t)=>{U(e,Xe,T(e,t.data_sizes)),U(e,Be,T(e,t.data_srcset)),U(e,V,T(e,t.data_src))},za=(e,t)=>{Qe(e,n=>{oe(n,me),dt(n,t)}),oe(e,me),dt(e,t)},La=(e,t)=>{oe(e,Ie),U(e,V,T(e,t.data_src))},Aa=(e,t)=>{qt(e,n=>{oe(n,Ie),U(n,V,T(n,t.data_src))}),oe(e,Ft),U(e,Tt,T(e,t.data_poster)),U(e,V,T(e,t.data_src)),e.load()},xa=(e,t)=>{oe(e,Ut),U(e,Mt,T(e,t.data_src))},Sa=(e,t,n)=>{const o=T(e,t.data_bg),a=T(e,t.data_bg_hidpi),s=It&&a?a:o;s&&(e.style.backgroundImage=`url("${s}")`,Pt(e).setAttribute(V,s),Gt(e,t,n))},Ia=(e,t,n)=>{const o=T(e,t.data_bg_multi),a=T(e,t.data_bg_multi_hidpi),s=It&&a?a:o;s&&(e.style.backgroundImage=s,Wt(e,t,n))},Oa=(e,t,n)=>{const o=T(e,t.data_bg_set);if(!o)return;let a=o.split("|").map(s=>`image-set(${s})`);e.style.backgroundImage=a.join(),Wt(e,t,n)},Zt={IMG:za,IFRAME:La,VIDEO:Aa,OBJECT:xa},Ta=(e,t)=>{const n=Zt[e.tagName];n&&n(e,t)},Ma=(e,t,n)=>{const o=Zt[e.tagName];o&&(o(e,t),Gt(e,t,n))},Ha=["IMG","IFRAME","VIDEO","OBJECT"],Na=e=>Ha.indexOf(e.tagName)>-1,Kt=(e,t)=>{!t||$a(t)||Ea(t)||X(e.callback_finish,t)},ut=(e,t,n)=>{e.addEventListener(t,n),e.llEvLisnrs[t]=n},Da=(e,t,n)=>{e.removeEventListener(t,n)},et=e=>!!e.llEvLisnrs,Ya=(e,t,n)=>{et(e)||(e.llEvLisnrs={});const o=e.tagName==="VIDEO"?"loadeddata":"load";ut(e,o,t),ut(e,"error",n)},Ye=e=>{if(!et(e))return;const t=e.llEvLisnrs;for(let n in t){const o=t[n];Da(e,n,o)}delete e.llEvLisnrs},Jt=(e,t,n)=>{_a(e),Je(n,-1),wa(n),P(e,t.class_loading),t.unobserve_completed&&Se(e,n)},Ra=(e,t,n,o)=>{const a=Ke(t);Jt(t,n,o),ie(t,n.class_loaded),K(t,Ht),X(n.callback_loaded,t,o),a||Kt(n,o)},Pa=(e,t,n,o)=>{const a=Ke(t);Jt(t,n,o),ie(t,n.class_error),K(t,Ge),X(n.callback_error,t,o),n.restore_on_error&&Z(t,me),a||Kt(n,o)},Re=(e,t,n)=>{const o=Pt(e)||e;et(o)||Ya(o,a=>{Ra(0,e,t,n),Ye(o)},a=>{Pa(0,e,t,n),Ye(o)})},Pe=(e,t,n)=>{Na(e)?((o,a,s)=>{Re(o,a,s),Ma(o,a,s)})(e,t,n):((o,a,s)=>{ga(o),Re(o,a,s),ka(o),Sa(o,a,s),Ia(o,a,s),Oa(o,a,s)})(e,t,n)},Va=(e,t,n)=>{e.setAttribute("loading","lazy"),Re(e,t,n),Ta(e,t),K(e,Dt)},mt=e=>{e.removeAttribute(V),e.removeAttribute(Be),e.removeAttribute(Xe)},ja=e=>{Qe(e,t=>{mt(t)}),mt(e)},Qt=e=>{Qe(e,t=>{Z(t,me)}),Z(e,me)},qa=e=>{qt(e,t=>{Z(t,Ie)}),Z(e,Ft),e.load()},Fa=e=>{Z(e,Ie)},Ua=e=>{Z(e,Ut)},Ba={IMG:Qt,IFRAME:Fa,VIDEO:qa,OBJECT:Ua},Xa=(e,t)=>{(n=>{const o=Ba[n.tagName];o?o(n):Ca(n)})(e),((n,o)=>{Ze(n)||Ke(n)||(P(n,o.class_entered),P(n,o.class_exited),P(n,o.class_applied),P(n,o.class_loading),P(n,o.class_loaded),P(n,o.class_error))})(e,t),xe(e),Xt(e)},Wa=(e,t,n,o)=>{n.cancel_on_exit&&fa(e)&&e.tagName==="IMG"&&(Ye(e),ja(e),Qt(e),P(e,n.class_loading),Je(o,-1),xe(e),X(n.callback_cancel,e,t,o))},Ga=(e,t,n,o)=>{const a=va(e);K(e,ua),ie(e,n.class_entered),P(e,n.class_exited),ba(e,n,o),X(n.callback_enter,e,t,o),a||Pe(e,n,o)},Za=(e,t,n,o)=>{Ze(e)||(ie(e,n.class_exited),Wa(e,t,n,o),X(n.callback_exit,e,t,o))},Ka=["IMG","IFRAME","VIDEO"],en=e=>e.use_native&&"loading"in HTMLImageElement.prototype,Ja=(e,t,n)=>{e.forEach(o=>{Ka.indexOf(o.tagName)!==-1&&Va(o,t,n)}),Vt(n,0)},Qa=e=>e.isIntersecting||e.intersectionRatio>0,es=(e,t)=>{t.forEach(n=>{e.observe(n)})},ts=(e,t)=>{ya(e),es(e,t)},ns=(e,t)=>{en(e)||(t._observer=new IntersectionObserver(n=>{((o,a,s)=>{o.forEach(l=>Qa(l)?Ga(l.target,l,a,s):Za(l.target,l,a,s))})(n,e,t)},(n=>({root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}))(e)))},tn=e=>Array.prototype.slice.call(e),Le=e=>e.container.querySelectorAll(e.elements_selector),os=e=>tn(e).filter(Ze),as=e=>pa(e),ss=e=>tn(e).filter(as),ft=(e,t)=>os(e||Le(t)),is=(e,t)=>{ss(Le(e)).forEach(n=>{P(n,e.class_error),xe(n)}),t.update()},rs=(e,t)=>{B&&(t._onlineHandler=()=>{is(e,t)},window.addEventListener("online",t._onlineHandler))},ls=e=>{B&&window.removeEventListener("online",e._onlineHandler)},ue=function(e,t){const n=Ot(e);this._settings=n,this.loadingCount=0,ns(n,this),rs(n,this),this.update(t)};ue.prototype={update:function(e){const t=this._settings,n=ft(e,t);Vt(this,n.length),St?this.loadAll(n):en(t)?Ja(n,t,this):ts(this._observer,n)},destroy:function(){this._observer&&this._observer.disconnect(),ls(this),Le(this._settings).forEach(e=>{Xt(e)}),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(e){const t=this._settings;ft(e,t).forEach(n=>{Se(n,this),Pe(n,t,this)})},restoreAll:function(){const e=this._settings;Le(e).forEach(t=>{Xa(t,e)})}},ue.load=(e,t)=>{const n=Ot(t);Pe(e,n)},ue.resetStatus=e=>{xe(e)},B&&da(ue,window.lazyLoadOptions);function cs(e={}){return document.querySelectorAll(".lazy").forEach(t=>{const n=t.getAttribute("src");t.removeAttribute("src"),t.setAttribute("data-src",n??"")}),new ue({elements_selector:".lazy",...e})}function ds(){const e=ae();e.value.vanillaLazyload.enable&&fe(()=>{cs(e.value.vanillaLazyload)})}function us(){Ae&&window.addEventListener("click",e=>{var n;const t=e.target;if(t.matches(".vp-code-group input")){const o=(n=t.parentElement)==null?void 0:n.parentElement;if(!o)return;const a=Array.from(o.querySelectorAll("input")).indexOf(t);if(a<0)return;const s=o.querySelector(".blocks");if(!s)return;const l=Array.from(s.children).find(m=>m.classList.contains("active"));if(!l)return;const r=s.children[a];if(!r||l===r)return;l.classList.remove("active"),r.classList.add("active");const c=o==null?void 0:o.querySelector(`label[for="${t.id}"]`);c==null||c.scrollIntoView({block:"nearest"})}})}const ms={key:0,text:"center"},fs=["href"],ps={m:"y-4",class:"end flex justify-center items-center"},hs=h("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),vs={p:"x-4",font:"bold",class:"whitespace-nowrap"},gs=h("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),_s=H({__name:"ValaxyMd",props:{frontmatter:{},excerpt:{}},setup(e){const t=e,{t:n}=se(),o=ne();return Ue(()=>{Gn(o.value)}),fe(()=>{we()}),vt(()=>{we()}),t.frontmatter.aplayer&&co(),t.frontmatter.codepen&&uo(),Qn(),us(),lo(),(typeof t.frontmatter.medium_zoom>"u"||t.frontmatter.medium_zoom)&&ro(),ds(),(a,s)=>a.$slots.default?(g(),z("article",{key:0,class:G(a.frontmatter.markdownClass||"markdown-body")},[k(a.$slots,"default",{ref_key:"contentRef",ref:o,onVnodeUpdated:s[0]||(s[0]=(...l)=>v(we)&&v(we)(...l))}),a.frontmatter.url?(g(),z("div",ms,[h("a",{href:a.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},D(v(n)("post.view_link")),9,fs)])):$("v-if",!0),a.frontmatter.end!==void 0?k(a.$slots,"end",{key:1},()=>[h("div",ps,[hs,h("span",vs,D(a.frontmatter.end?"Q.E.D.":"To Be Continued."),1),gs])]):$("v-if",!0)],2)):$("v-if",!0)}}),ys={key:0,class:"yun-time-warning",op:"80"},bs=H({__name:"YunMdTimeWarning",setup(e){const t=pe(),{t:n,locale:o}=se(),a=O(()=>t.value.updated||t.value.date||new Date),s=ne("");xn(o,()=>{const r=Xn(a.value,{addSuffix:!0});s.value=/^\d/.test(r)?` ${r}`:r},{immediate:!0});const l=O(()=>{const r=Ct(new Date,a.value);return typeof t.value.time_warning=="number"?r>t.value.time_warning:t.value.time_warning});return(r,c)=>l.value?(g(),z("blockquote",ys,D(v(n)("post.time_warning",{ago:s.value})),1)):$("v-if",!0)}}),ws={class:"ai-generated-excerpt rounded-lg bg-$va-c-bg-alt p-4"},$s={font:"black",flex:"","items-center":""},Es=h("div",{"mr-1":"","i-ri-robot-2-line":""},null,-1),ks={op:"90","mt-1":""},Cs=H({__name:"YunAiExcerpt",setup(e){const t=pe(),{t:n}=se();return(o,a)=>(g(),z("div",ws,[h("div",$s,[Es,h("div",null,D(v(n)("excerpt.ai")),1)]),h("div",ks,D(v(t).excerpt),1)]))}}),zs={class:"yun-main md:pl-$va-sidebar-width lt-md:ml-0",flex:"~"},Ls={w:"full",flex:"~"},As={p:"x-4 b-8",class:"sm:px-6 lg:px-12 xl:px-16",w:"full"},Hs=H({__name:"ValaxyMain",props:{frontmatter:{},data:{}},setup(e){const t=e,n=ae(),{styles:o,icon:a,color:s}=Dn(t.frontmatter.type),l=Sn(O(()=>t.frontmatter)),r=O(()=>t.frontmatter.aside!==!1),c=Ve(),m=In();return On(()=>{c.hash&&setTimeout(()=>{zt(document.body,c.hash,{smooth:!0})},0)}),Ue(()=>{Kn(m)}),(d,j)=>{const w=Nn,A=Cs,_=bs,N=_s,re=Et,le=la,ce=ea,x=Hn,J=Ro;return g(),z("main",zs,[h("div",Ls,[k(d.$slots,"main",{},()=>[h("div",{class:G(["content",!r.value&&"no-aside"]),flex:"~ col grow",w:"full",p:"l-4 lt-md:0"},[R(re,{cover:d.frontmatter.cover,m:"0",class:"relative",style:Tn(v(o))},{default:F(()=>[k(d.$slots,"main-header",{},()=>[R(w,{class:"mb-2",title:v(l),icon:d.frontmatter.icon||v(a),color:d.frontmatter.color||v(s),cover:d.frontmatter.cover,"page-title-class":d.frontmatter.pageTitleClass},null,8,["title","icon","color","cover","page-title-class"])]),k(d.$slots,"main-header-after"),h("div",As,[k(d.$slots,"main-content",{},()=>[$(" <Transition appear> "),R(N,{frontmatter:d.frontmatter},{default:F(()=>[d.frontmatter.excerpt_type==="ai"&&d.frontmatter.excerpt?(g(),M(A,{key:0})):$("v-if",!0),R(_),k(d.$slots,"main-content-md"),k(d.$slots,"default")]),_:3},8,["frontmatter"]),$(" </Transition> ")]),k(d.$slots,"main-content-after")])]),_:3},8,["cover","style"]),k(d.$slots,"main-nav-before"),k(d.$slots,"main-nav",{},()=>[d.frontmatter.nav!==!1?(g(),M(le,{key:0})):$("v-if",!0)]),k(d.$slots,"main-nav-after"),v(n).comment.enable&&d.frontmatter.comment!==!1?k(d.$slots,"comment",{key:0},()=>[R(ce,{class:G(d.frontmatter.nav===!1?"mt-4":0)},null,8,["class"])]):$("v-if",!0),k(d.$slots,"main-footer-before"),R(x),k(d.$slots,"main-footer-after")],2)]),k(d.$slots,"aside",{},()=>[r.value?(g(),M(J,{key:0},{default:F(()=>[k(d.$slots,"aside-custom")]),_:3})):$("v-if",!0)])])])}}});export{Hs as _};
