import{_ as Vt}from"./YunComment.vue_vue_type_style_index_0_lang-Be2PC3bA.js";import{I as te,k as Oe,ae as Te,D as he,a2 as Q,aq as Xt,ar as De,as as Gt,at as Wt,au as Ge,av as We,aw as ce,ax as Zt,A as at,p as O,y as Kt,ay as rt,ak as Ze,d as ne,r as Jt,o as S,c as X,a as E,e as _,f as ge,w as pe,t as j,g as I,u as He,C as st,az as it,aA as de,aB as Qt,Q as L,L as Ae,aa as en,aC as tn,l as nn,h as on,aD as an,b as K,U as rn,G as sn}from"./app-2n5ExLgf.js";import{_ as ln}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-BkwE4Aze.js";import{u as cn}from"./post-DgAYABCt.js";function dn(){const e=te(),t=Oe();Te&&window.addEventListener("click",n=>{const o=n.target;if(o.matches('[class*="language-"] > button.collapse')){const a=o.parentElement;a==null||a.removeAttribute("style"),a==null||a.classList.remove("folded")}}),he(()=>{const n=document.querySelectorAll('div[class*="language-"]'),o=e.value.codeHeightLimit,a=t.value.codeHeightLimit;let s;if(typeof a!="number"||a<=0){if(o===void 0||o<=0)return;s=o}else s=a;for(const l of Array.from(n))l.scrollHeight>s&&l.classList.add("folded")})}function un(){if(Te){const e=new WeakMap;window.addEventListener("click",t=>{var o;const n=t.target;if(n.matches('div[class*="language-"] > button.copy')){const a=n.parentElement,s=(o=n.nextElementSibling)==null?void 0:o.nextElementSibling;if(!a||!s)return;const l=/language-(shellscript|shell|bash|sh|zsh)/.test(a.className);let i="";s.querySelectorAll("span.line:not(.diff.remove)").forEach(f=>i+=`${f.textContent||""}
`),i=i.slice(0,-1),l&&(i=i.replace(/^ *(\$|>) /gm,"").trim()),mn(i).then(()=>{n.classList.add("copied"),clearTimeout(e.get(n));const f=setTimeout(()=>{n.classList.remove("copied"),n.blur(),e.delete(n)},2e3);e.set(n,f)})}})}}async function mn(e){try{return navigator.clipboard.writeText(e)}catch{const t=document.createElement("textarea"),n=document.activeElement;t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";const o=document.getSelection(),a=o?o.rangeCount>0&&o.getRangeAt(0):null;document.body.appendChild(t),t.select(),t.selectionStart=0,t.selectionEnd=e.length,document.execCommand("copy"),document.body.removeChild(t),a&&(o.removeAllRanges(),o.addRange(a)),n&&n.focus()}}/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ue=function(t){return t.tagName==="IMG"},fn=function(t){return NodeList.prototype.isPrototypeOf(t)},me=function(t){return t&&t.nodeType===1},Ke=function(t){var n=t.currentSrc||t.src;return n.substr(-4).toLowerCase()===".svg"},Je=function(t){try{return Array.isArray(t)?t.filter(ue):fn(t)?[].slice.call(t).filter(ue):me(t)?[t].filter(ue):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(ue):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},gn=function(t){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=t,n},pn=function(t){var n=t.getBoundingClientRect(),o=n.top,a=n.left,s=n.width,l=n.height,i=t.cloneNode(),f=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,h=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return i.removeAttribute("id"),i.style.position="absolute",i.style.top=o+f+"px",i.style.left=a+h+"px",i.style.width=s+"px",i.style.height=l+"px",i.style.transform="",i},V=function(t,n){var o=P({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(t,o);var a=document.createEvent("CustomEvent");return a.initCustomEvent(t,o.bubbles,o.cancelable,o.detail),a},vn=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=window.Promise||function(c){function d(){}c(d,d)},a=function(c){var d=c.target;if(d===ie){v();return}k.indexOf(d)!==-1&&D({target:d})},s=function(){if(!(U||!r.original)){var c=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(Ve-c)>g.scrollOffset&&setTimeout(v,150)}},l=function(c){var d=c.key||c.keyCode;(d==="Escape"||d==="Esc"||d===27)&&v()},i=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=c;if(c.background&&(ie.style.background=c.background),c.container&&c.container instanceof Object&&(d.container=P({},g.container,c.container)),c.template){var p=me(c.template)?c.template:document.querySelector(c.template);d.template=p}return g=P({},g,d),k.forEach(function(b){b.dispatchEvent(V("medium-zoom:update",{detail:{zoom:w}}))}),w},f=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(P({},g,c))},h=function(){for(var c=arguments.length,d=Array(c),p=0;p<c;p++)d[p]=arguments[p];var b=d.reduce(function(u,z){return[].concat(u,Je(z))},[]);return b.filter(function(u){return k.indexOf(u)===-1}).forEach(function(u){k.push(u),u.classList.add("medium-zoom-image")}),se.forEach(function(u){var z=u.type,A=u.listener,F=u.options;b.forEach(function(H){H.addEventListener(z,A,F)})}),w},m=function(){for(var c=arguments.length,d=Array(c),p=0;p<c;p++)d[p]=arguments[p];r.zoomed&&v();var b=d.length>0?d.reduce(function(u,z){return[].concat(u,Je(z))},[]):k;return b.forEach(function(u){u.classList.remove("medium-zoom-image"),u.dispatchEvent(V("medium-zoom:detach",{detail:{zoom:w}}))}),k=k.filter(function(u){return b.indexOf(u)===-1}),w},re=function(c,d){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return k.forEach(function(b){b.addEventListener("medium-zoom:"+c,d,p)}),se.push({type:"medium-zoom:"+c,listener:d,options:p}),w},y=function(c,d){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return k.forEach(function(b){b.removeEventListener("medium-zoom:"+c,d,p)}),se=se.filter(function(b){return!(b.type==="medium-zoom:"+c&&b.listener.toString()===d.toString())}),w},x=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=c.target,p=function(){var u={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},z=void 0,A=void 0;if(g.container)if(g.container instanceof Object)u=P({},u,g.container),z=u.width-u.left-u.right-g.margin*2,A=u.height-u.top-u.bottom-g.margin*2;else{var F=me(g.container)?g.container:document.querySelector(g.container),H=F.getBoundingClientRect(),Le=H.width,Dt=H.height,Ht=H.left,Nt=H.top;u=P({},u,{width:Le,height:Dt,left:Ht,top:Nt})}z=z||u.width-g.margin*2,A=A||u.height-g.margin*2;var Z=r.zoomedHd||r.original,Rt=Ke(Z)?z:Z.naturalWidth||z,Yt=Ke(Z)?A:Z.naturalHeight||A,le=Z.getBoundingClientRect(),Pt=le.top,jt=le.left,Ce=le.width,ke=le.height,qt=Math.min(Math.max(Ce,Rt),z)/Ce,Bt=Math.min(Math.max(ke,Yt),A)/ke,xe=Math.min(qt,Bt),Ut=(-jt+(z-Ce)/2+g.margin+u.left)/xe,Ft=(-Pt+(A-ke)/2+g.margin+u.top)/xe,Xe="scale("+xe+") translate3d("+Ut+"px, "+Ft+"px, 0)";r.zoomed.style.transform=Xe,r.zoomedHd&&(r.zoomedHd.style.transform=Xe)};return new o(function(b){if(d&&k.indexOf(d)===-1){b(w);return}var u=function Le(){U=!1,r.zoomed.removeEventListener("transitionend",Le),r.original.dispatchEvent(V("medium-zoom:opened",{detail:{zoom:w}})),b(w)};if(r.zoomed){b(w);return}if(d)r.original=d;else if(k.length>0){var z=k;r.original=z[0]}else{b(w);return}if(r.original.dispatchEvent(V("medium-zoom:open",{detail:{zoom:w}})),Ve=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,U=!0,r.zoomed=pn(r.original),document.body.appendChild(ie),g.template){var A=me(g.template)?g.template:document.querySelector(g.template);r.template=document.createElement("div"),r.template.appendChild(A.content.cloneNode(!0)),document.body.appendChild(r.template)}if(r.original.parentElement&&r.original.parentElement.tagName==="PICTURE"&&r.original.currentSrc&&(r.zoomed.src=r.original.currentSrc),document.body.appendChild(r.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),r.original.classList.add("medium-zoom-image--hidden"),r.zoomed.classList.add("medium-zoom-image--opened"),r.zoomed.addEventListener("click",v),r.zoomed.addEventListener("transitionend",u),r.original.getAttribute("data-zoom-src")){r.zoomedHd=r.zoomed.cloneNode(),r.zoomedHd.removeAttribute("srcset"),r.zoomedHd.removeAttribute("sizes"),r.zoomedHd.removeAttribute("loading"),r.zoomedHd.src=r.zoomed.getAttribute("data-zoom-src"),r.zoomedHd.onerror=function(){clearInterval(F),console.warn("Unable to reach the zoom image target "+r.zoomedHd.src),r.zoomedHd=null,p()};var F=setInterval(function(){r.zoomedHd.complete&&(clearInterval(F),r.zoomedHd.classList.add("medium-zoom-image--opened"),r.zoomedHd.addEventListener("click",v),document.body.appendChild(r.zoomedHd),p())},10)}else if(r.original.hasAttribute("srcset")){r.zoomedHd=r.zoomed.cloneNode(),r.zoomedHd.removeAttribute("sizes"),r.zoomedHd.removeAttribute("loading");var H=r.zoomedHd.addEventListener("load",function(){r.zoomedHd.removeEventListener("load",H),r.zoomedHd.classList.add("medium-zoom-image--opened"),r.zoomedHd.addEventListener("click",v),document.body.appendChild(r.zoomedHd),p()})}else p()})},v=function(){return new o(function(c){if(U||!r.original){c(w);return}var d=function p(){r.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(r.zoomed),r.zoomedHd&&document.body.removeChild(r.zoomedHd),document.body.removeChild(ie),r.zoomed.classList.remove("medium-zoom-image--opened"),r.template&&document.body.removeChild(r.template),U=!1,r.zoomed.removeEventListener("transitionend",p),r.original.dispatchEvent(V("medium-zoom:closed",{detail:{zoom:w}})),r.original=null,r.zoomed=null,r.zoomedHd=null,r.template=null,c(w)};U=!0,document.body.classList.remove("medium-zoom--opened"),r.zoomed.style.transform="",r.zoomedHd&&(r.zoomedHd.style.transform=""),r.template&&(r.template.style.transition="opacity 150ms",r.template.style.opacity=0),r.original.dispatchEvent(V("medium-zoom:close",{detail:{zoom:w}})),r.zoomed.addEventListener("transitionend",d)})},D=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=c.target;return r.original?v():x({target:d})},Ee=function(){return g},$e=function(){return k},ze=function(){return r.original},k=[],se=[],U=!1,Ve=0,g=n,r={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?g=t:(t||typeof t=="string")&&h(t),g=P({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},g);var ie=gn(g.background);document.addEventListener("click",a),document.addEventListener("keyup",l),document.addEventListener("scroll",s),window.addEventListener("resize",v);var w={open:x,close:v,toggle:D,update:i,clone:f,attach:h,detach:m,on:re,off:y,getOptions:Ee,getImages:$e,getZoomedImage:ze};return w};function hn(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var bn=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";hn(bn);function _n(){const t=te().value.mediumZoom;he(()=>{t.enable&&vn(t.selector||".markdown-body img",{background:"var(--medium-zoom-c-bg, rgba(0, 0, 0, 0.8))",...t.options})})}function fe(e,t){const n=+Q(e)-+Q(t);return n<0?-1:n>0?1:n}function yn(e){return Xt(e,Date.now())}function wn(e,t,n){const[o,a]=De(n==null?void 0:n.in,e,t),s=o.getFullYear()-a.getFullYear(),l=o.getMonth()-a.getMonth();return s*12+l}function En(e,t){const n=Q(e,t==null?void 0:t.in);return n.setHours(23,59,59,999),n}function $n(e,t){const n=Q(e,t==null?void 0:t.in),o=n.getMonth();return n.setFullYear(n.getFullYear(),o+1,0),n.setHours(23,59,59,999),n}function zn(e,t){const n=Q(e,t==null?void 0:t.in);return+En(n,t)==+$n(n,t)}function Ln(e,t,n){const[o,a,s]=De(n==null?void 0:n.in,e,e,t),l=fe(a,s),i=Math.abs(wn(a,s));if(i<1)return 0;a.getMonth()===1&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-l*i);let f=fe(a,s)===-l;zn(o)&&i===1&&fe(o,s)===1&&(f=!1);const h=l*(i-+f);return h===0?0:h}function Cn(e,t,n){const o=Zt(),a=(n==null?void 0:n.locale)??o.locale??Gt,s=2520,l=fe(e,t);if(isNaN(l))throw new RangeError("Invalid time value");const i=Object.assign({},n,{addSuffix:n==null?void 0:n.addSuffix,comparison:l}),[f,h]=De(n==null?void 0:n.in,...l>0?[t,e]:[e,t]),m=Wt(h,f),re=(Ge(h)-Ge(f))/1e3,y=Math.round((m-re)/60);let x;if(y<2)return n!=null&&n.includeSeconds?m<5?a.formatDistance("lessThanXSeconds",5,i):m<10?a.formatDistance("lessThanXSeconds",10,i):m<20?a.formatDistance("lessThanXSeconds",20,i):m<40?a.formatDistance("halfAMinute",0,i):m<60?a.formatDistance("lessThanXMinutes",1,i):a.formatDistance("xMinutes",1,i):y===0?a.formatDistance("lessThanXMinutes",1,i):a.formatDistance("xMinutes",y,i);if(y<45)return a.formatDistance("xMinutes",y,i);if(y<90)return a.formatDistance("aboutXHours",1,i);if(y<We){const v=Math.round(y/60);return a.formatDistance("aboutXHours",v,i)}else{if(y<s)return a.formatDistance("xDays",1,i);if(y<ce){const v=Math.round(y/We);return a.formatDistance("xDays",v,i)}else if(y<ce*2)return x=Math.round(y/ce),a.formatDistance("aboutXMonths",x,i)}if(x=Ln(h,f),x<12){const v=Math.round(y/ce);return a.formatDistance("xMonths",v,i)}else{const v=x%12,D=Math.trunc(x/12);return v<3?a.formatDistance("aboutXYears",D,i):v<9?a.formatDistance("overXYears",D,i):a.formatDistance("almostXYears",D+1,i)}}function kn(e,t){return Cn(e,yn(e),t)}function lt(e,t,n={smooth:!0,targetPadding:-64}){let o=null;try{o=e.classList.contains("header-anchor")?e:decodeURIComponent(t)&&document.querySelector(decodeURIComponent(t))||null}catch(a){console.warn(a)}if(o){const a=(n==null?void 0:n.targetPadding)||-64,s=window.scrollY+o.getBoundingClientRect().top+a;!n.smooth||Math.abs(s-window.scrollY)>window.innerHeight?window.scrollTo(0,s):window.scrollTo({top:s,behavior:"smooth"})}}function xn(e){window.addEventListener("click",async t=>{const n=t.target.closest("a");if(n){const{protocol:o,hostname:a,pathname:s,hash:l,target:i}=n,f=window.location,h=s.match(/\.\w+$/);!t.ctrlKey&&!t.shiftKey&&!t.altKey&&!t.metaKey&&i!=="_blank"&&o===f.protocol&&a===f.hostname&&!(h&&h[0]!==".html")&&s===f.pathname&&(t.preventDefault(),l&&l!==f.hash&&(await e.push({hash:decodeURIComponent(l)}),lt(n,l,{smooth:n.classList.contains("header-anchor")})))}},{capture:!0})}function An(e,t){const n=document.createElement("div");n.className=t,e.parentNode.insertBefore(n,e),e.parentNode.removeChild(e),n.appendChild(e)}function In(e=document){e.querySelectorAll("table").forEach(t=>{var o;if((o=t.parentElement)!=null&&o.classList.contains("table-container"))return;const n=document.createElement("div");n.className="table-container",An(t,"table-container")})}function Mn(e){const t=at(),n=O(()=>t.path),o=Kt(),a=O(()=>{let i=-1;return o.postList.find((f,h)=>f.path===n.value?(i=h,!0):!1),i}),s=O(()=>a.value-1>=0?o.postList[a.value-1]:null),l=O(()=>a.value+1<o.postList.length?o.postList[a.value+1]:null);return[s,l]}function Sn(){const e=te(),t=O(()=>e.value.cdn.prefix);rt({link:[{rel:"stylesheet",href:`${t.value}aplayer/dist/APlayer.min.css`}]}),Ze(`${t.value}aplayer/dist/APlayer.min.js`,()=>{Ze(`${t.value}meting@2/dist/Meting.min.js`)})}function On(){rt({script:[{src:"https://static.codepen.io/assets/embed/ei.js",async:!0}]})}const Tn={class:"post-nav"},Dn={class:"post-nav-item"},Hn={class:"title truncate",text:"sm"},Nn={class:"post-nav-item"},Rn={class:"title truncate",text:"sm"},Yn=ne({__name:"YunPostNav",setup(e){const[t,n]=Mn();return(o,a)=>{const s=Jt("RouterLink");return S(),X("div",Tn,[E("div",Dn,[_(t)?(S(),ge(s,{key:0,class:"post-nav-prev",to:_(t).path||"",title:_(t).title},{default:pe(()=>[a[0]||(a[0]=E("div",{class:"icon","i-ri-arrow-left-s-line":""},null,-1)),E("span",Hn,j(_(t).title),1)]),_:1},8,["to","title"])):I("v-if",!0)]),E("div",Nn,[_(n)?(S(),ge(s,{key:0,to:_(n).path||"",title:_(n).title,class:"post-nav-next"},{default:pe(()=>[E("span",Rn,j(_(n).title),1),a[1]||(a[1]=E("div",{class:"icon","i-ri-arrow-right-s-line":""},null,-1))]),_:1},8,["to","title"])):I("v-if",!0)])])}}});function Pn(){Te&&window.addEventListener("click",e=>{var n;const t=e.target;if(t.matches(".vp-code-group input")){const o=(n=t.parentElement)==null?void 0:n.parentElement;if(!o)return;const a=Array.from(o.querySelectorAll("input")).indexOf(t);if(a<0)return;const s=o.querySelector(".blocks");if(!s)return;const l=Array.from(s.children).find(h=>h.classList.contains("active"));if(!l)return;const i=s.children[a];if(!i||l===i)return;l.classList.remove("active"),i.classList.add("active");const f=o==null?void 0:o.querySelector(`label[for="${t.id}"]`);f==null||f.scrollIntoView({block:"nearest"})}})}const R=typeof window<"u",ct=R&&!("onscroll"in window)||typeof navigator<"u"&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),dt=R&&window.devicePixelRatio>1,jn={elements_selector:".lazy",container:ct||R?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},ut=e=>Object.assign({},jn,e),Qe=function(e,t){let n;const o="LazyLoad::Initialized",a=new e(t);try{n=new CustomEvent(o,{detail:{instance:a}})}catch{n=document.createEvent("CustomEvent"),n.initCustomEvent(o,!1,!1,{instance:a})}window.dispatchEvent(n)},qn=(e,t)=>{if(t)if(t.length)for(let n,o=0;n=t[o];o+=1)Qe(e,n);else Qe(e,t)},T="src",Ne="srcset",Re="sizes",mt="poster",oe="llOriginalAttrs",ft="data",Ye="loading",gt="loaded",pt="applied",Bn="entered",Pe="error",vt="native",ht="data-",bt="ll-status",C=(e,t)=>e.getAttribute(ht+t),Un=(e,t,n)=>{const o=ht+t;n!==null?e.setAttribute(o,n):e.removeAttribute(o)},ae=e=>C(e,bt),B=(e,t)=>Un(e,bt,t),be=e=>B(e,null),je=e=>ae(e)===null,Fn=e=>ae(e)===Ye,Vn=e=>ae(e)===Pe,qe=e=>ae(e)===vt,Xn=[Ye,gt,pt,Pe],Gn=e=>Xn.indexOf(ae(e))>=0,Y=(e,t,n,o)=>{e&&typeof e=="function"&&(o===void 0?n===void 0?e(t):e(t,n):e(t,n,o))},W=(e,t)=>{R&&t!==""&&e.classList.add(t)},M=(e,t)=>{R&&t!==""&&e.classList.remove(t)},Wn=e=>{e.llTempImage=document.createElement("IMG")},Zn=e=>{delete e.llTempImage},_t=e=>e.llTempImage,_e=(e,t)=>{if(!t)return;const n=t._observer;n&&n.unobserve(e)},Kn=e=>{e.disconnect()},Jn=(e,t,n)=>{t.unobserve_entered&&_e(e,n)},Be=(e,t)=>{e&&(e.loadingCount+=t)},Qn=e=>{e&&(e.toLoadCount-=1)},yt=(e,t)=>{e&&(e.toLoadCount=t)},eo=e=>e.loadingCount>0,to=e=>e.toLoadCount>0,wt=e=>{let t=[];for(let n,o=0;n=e.children[o];o+=1)n.tagName==="SOURCE"&&t.push(n);return t},Ue=(e,t)=>{const n=e.parentNode;n&&n.tagName==="PICTURE"&&wt(n).forEach(t)},Et=(e,t)=>{wt(e).forEach(t)},ye=[T],$t=[T,mt],ee=[T,Ne,Re],zt=[ft],we=e=>!!e[oe],Lt=e=>e[oe],Ct=e=>delete e[oe],G=(e,t)=>{if(we(e))return;const n={};t.forEach(o=>{n[o]=e.getAttribute(o)}),e[oe]=n},no=e=>{we(e)||(e[oe]={backgroundImage:e.style.backgroundImage})},q=(e,t)=>{if(!we(e))return;const n=Lt(e);t.forEach(o=>{((a,s,l)=>{l?a.setAttribute(s,l):a.removeAttribute(s)})(e,o,n[o])})},oo=e=>{if(!we(e))return;const t=Lt(e);e.style.backgroundImage=t.backgroundImage},kt=(e,t,n)=>{W(e,t.class_applied),B(e,pt),n&&(t.unobserve_completed&&_e(e,t),Y(t.callback_applied,e,n))},xt=(e,t,n)=>{W(e,t.class_loading),B(e,Ye),n&&(Be(n,1),Y(t.callback_loading,e,n))},N=(e,t,n)=>{n&&e.setAttribute(t,n)},et=(e,t)=>{N(e,Re,C(e,t.data_sizes)),N(e,Ne,C(e,t.data_srcset)),N(e,T,C(e,t.data_src))},ao=(e,t)=>{Ue(e,n=>{G(n,ee),et(n,t)}),G(e,ee),et(e,t)},ro=(e,t)=>{G(e,ye),N(e,T,C(e,t.data_src))},so=(e,t)=>{Et(e,n=>{G(n,ye),N(n,T,C(n,t.data_src))}),G(e,$t),N(e,mt,C(e,t.data_poster)),N(e,T,C(e,t.data_src)),e.load()},io=(e,t)=>{G(e,zt),N(e,ft,C(e,t.data_src))},lo=(e,t,n)=>{const o=C(e,t.data_bg),a=C(e,t.data_bg_hidpi),s=dt&&a?a:o;s&&(e.style.backgroundImage=`url("${s}")`,_t(e).setAttribute(T,s),xt(e,t,n))},co=(e,t,n)=>{const o=C(e,t.data_bg_multi),a=C(e,t.data_bg_multi_hidpi),s=dt&&a?a:o;s&&(e.style.backgroundImage=s,kt(e,t,n))},uo=(e,t,n)=>{const o=C(e,t.data_bg_set);if(!o)return;let a=o.split("|").map(s=>`image-set(${s})`);e.style.backgroundImage=a.join(),kt(e,t,n)},At={IMG:ao,IFRAME:ro,VIDEO:so,OBJECT:io},mo=(e,t)=>{const n=At[e.tagName];n&&n(e,t)},fo=(e,t,n)=>{const o=At[e.tagName];o&&(o(e,t),xt(e,t,n))},go=["IMG","IFRAME","VIDEO","OBJECT"],po=e=>go.indexOf(e.tagName)>-1,It=(e,t)=>{!t||eo(t)||to(t)||Y(e.callback_finish,t)},tt=(e,t,n)=>{e.addEventListener(t,n),e.llEvLisnrs[t]=n},vo=(e,t,n)=>{e.removeEventListener(t,n)},Fe=e=>!!e.llEvLisnrs,ho=(e,t,n)=>{Fe(e)||(e.llEvLisnrs={});const o=e.tagName==="VIDEO"?"loadeddata":"load";tt(e,o,t),tt(e,"error",n)},Ie=e=>{if(!Fe(e))return;const t=e.llEvLisnrs;for(let n in t){const o=t[n];vo(e,n,o)}delete e.llEvLisnrs},Mt=(e,t,n)=>{Zn(e),Be(n,-1),Qn(n),M(e,t.class_loading),t.unobserve_completed&&_e(e,n)},bo=(e,t,n,o)=>{const a=qe(t);Mt(t,n,o),W(t,n.class_loaded),B(t,gt),Y(n.callback_loaded,t,o),a||It(n,o)},_o=(e,t,n,o)=>{const a=qe(t);Mt(t,n,o),W(t,n.class_error),B(t,Pe),Y(n.callback_error,t,o),n.restore_on_error&&q(t,ee),a||It(n,o)},Me=(e,t,n)=>{const o=_t(e)||e;Fe(o)||ho(o,a=>{bo(0,e,t,n),Ie(o)},a=>{_o(0,e,t,n),Ie(o)})},Se=(e,t,n)=>{po(e)?((o,a,s)=>{Me(o,a,s),fo(o,a,s)})(e,t,n):((o,a,s)=>{Wn(o),Me(o,a,s),no(o),lo(o,a,s),co(o,a,s),uo(o,a,s)})(e,t,n)},yo=(e,t,n)=>{e.setAttribute("loading","lazy"),Me(e,t,n),mo(e,t),B(e,vt)},nt=e=>{e.removeAttribute(T),e.removeAttribute(Ne),e.removeAttribute(Re)},wo=e=>{Ue(e,t=>{nt(t)}),nt(e)},St=e=>{Ue(e,t=>{q(t,ee)}),q(e,ee)},Eo=e=>{Et(e,t=>{q(t,ye)}),q(e,$t),e.load()},$o=e=>{q(e,ye)},zo=e=>{q(e,zt)},Lo={IMG:St,IFRAME:$o,VIDEO:Eo,OBJECT:zo},Co=(e,t)=>{(n=>{const o=Lo[n.tagName];o?o(n):oo(n)})(e),((n,o)=>{je(n)||qe(n)||(M(n,o.class_entered),M(n,o.class_exited),M(n,o.class_applied),M(n,o.class_loading),M(n,o.class_loaded),M(n,o.class_error))})(e,t),be(e),Ct(e)},ko=(e,t,n,o)=>{n.cancel_on_exit&&Fn(e)&&e.tagName==="IMG"&&(Ie(e),wo(e),St(e),M(e,n.class_loading),Be(o,-1),be(e),Y(n.callback_cancel,e,t,o))},xo=(e,t,n,o)=>{const a=Gn(e);B(e,Bn),W(e,n.class_entered),M(e,n.class_exited),Jn(e,n,o),Y(n.callback_enter,e,t,o),a||Se(e,n,o)},Ao=(e,t,n,o)=>{je(e)||(W(e,n.class_exited),ko(e,t,n,o),Y(n.callback_exit,e,t,o))},Io=["IMG","IFRAME","VIDEO"],Ot=e=>e.use_native&&"loading"in HTMLImageElement.prototype,Mo=(e,t,n)=>{e.forEach(o=>{Io.indexOf(o.tagName)!==-1&&yo(o,t,n)}),yt(n,0)},So=e=>e.isIntersecting||e.intersectionRatio>0,Oo=(e,t)=>{t.forEach(n=>{e.observe(n)})},To=(e,t)=>{Kn(e),Oo(e,t)},Do=(e,t)=>{Ot(e)||(t._observer=new IntersectionObserver(n=>{((o,a,s)=>{o.forEach(l=>So(l)?xo(l.target,l,a,s):Ao(l.target,l,a,s))})(n,e,t)},(n=>({root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}))(e)))},Tt=e=>Array.prototype.slice.call(e),ve=e=>e.container.querySelectorAll(e.elements_selector),Ho=e=>Tt(e).filter(je),No=e=>Vn(e),Ro=e=>Tt(e).filter(No),ot=(e,t)=>Ho(e||ve(t)),Yo=(e,t)=>{Ro(ve(e)).forEach(n=>{M(n,e.class_error),be(n)}),t.update()},Po=(e,t)=>{R&&(t._onlineHandler=()=>{Yo(e,t)},window.addEventListener("online",t._onlineHandler))},jo=e=>{R&&window.removeEventListener("online",e._onlineHandler)},J=function(e,t){const n=ut(e);this._settings=n,this.loadingCount=0,Do(n,this),Po(n,this),this.update(t)};J.prototype={update:function(e){const t=this._settings,n=ot(e,t);yt(this,n.length),ct?this.loadAll(n):Ot(t)?Mo(n,t,this):To(this._observer,n)},destroy:function(){this._observer&&this._observer.disconnect(),jo(this),ve(this._settings).forEach(e=>{Ct(e)}),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(e){const t=this._settings;ot(e,t).forEach(n=>{_e(n,this),Se(n,t,this)})},restoreAll:function(){const e=this._settings;ve(e).forEach(t=>{Co(t,e)})}},J.load=(e,t)=>{const n=ut(t);Se(e,n)},J.resetStatus=e=>{be(e)},R&&qn(J,window.lazyLoadOptions);function qo(e={}){return document.querySelectorAll(".lazy").forEach(t=>{const n=t.getAttribute("src");t.removeAttribute("src"),t.setAttribute("data-src",n??"")}),new J({elements_selector:".lazy",...e})}function Bo(){const e=te();e.value.vanillaLazyload.enable&&he(()=>{qo(e.value.vanillaLazyload)})}const Uo={key:0,text:"center"},Fo=["href"],Vo={m:"y-4",class:"end flex justify-center items-center"},Xo={p:"x-4",font:"bold",class:"whitespace-nowrap"},Go=ne({__name:"ValaxyMd",props:{frontmatter:{},excerpt:{}},setup(e){const t=e,{t:n}=He(),o=st();return it(()=>{In(o.value)}),he(()=>{de()}),Qt(()=>{de()}),t.frontmatter.aplayer&&Sn(),t.frontmatter.codepen&&On(),un(),Pn(),dn(),(typeof t.frontmatter.medium_zoom>"u"||t.frontmatter.medium_zoom)&&_n(),Bo(),(a,s)=>a.$slots.default?(S(),X("article",{key:0,class:Ae(a.frontmatter.markdownClass||"markdown-body")},[L(a.$slots,"default",{ref_key:"contentRef",ref:o,onVnodeUpdated:s[0]||(s[0]=(...l)=>_(de)&&_(de)(...l))}),a.frontmatter.url?(S(),X("div",Uo,[E("a",{href:a.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},j(_(n)("post.view_link")),9,Fo)])):I("v-if",!0),a.frontmatter.end!==void 0?L(a.$slots,"end",{key:1},()=>[E("div",Vo,[s[1]||(s[1]=E("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1)),E("span",Xo,j(a.frontmatter.end?"Q.E.D.":"To Be Continued."),1),s[2]||(s[2]=E("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1))])]):I("v-if",!0)],2)):I("v-if",!0)}}),Wo={key:0,class:"yun-time-warning",op:"80"},Zo=ne({__name:"YunMdTimeWarning",setup(e){const t=Oe(),{t:n,locale:o}=He(),a=O(()=>t.value.updated||t.value.date||new Date),s=st("");en(o,()=>{const i=kn(a.value,{addSuffix:!0});s.value=/^\d/.test(i)?` ${i}`:i},{immediate:!0});const l=O(()=>{const i=tn(new Date,a.value);return typeof t.value.time_warning=="number"?i>t.value.time_warning:t.value.time_warning});return(i,f)=>l.value?(S(),X("blockquote",Wo,j(_(n)("post.time_warning",{ago:s.value})),1)):I("v-if",!0)}}),Ko={class:"ai-generated-excerpt rounded-lg bg-$va-c-bg-alt p-4"},Jo={font:"black",flex:"","items-center":""},Qo={op:"90","mt-1":""},ea=ne({__name:"YunAiExcerpt",setup(e){const t=Oe(),{t:n}=He();return(o,a)=>(S(),X("div",Ko,[E("div",Jo,[a[0]||(a[0]=E("div",{"mr-1":"","i-ri-robot-2-line":""},null,-1)),E("div",null,j(_(n)("excerpt.ai")),1)]),E("div",Qo,j(_(t).excerpt),1)]))}}),ta={class:"yun-main lt-md:w-full",flex:"~ center"},na={class:"mt-8 mb-4"},oa={p:"x-4 b-8",class:"sm:px-6 lg:px-12 xl:px-16",w:"full"},la=ne({__name:"ValaxyMain",props:{frontmatter:{},data:{}},setup(e){const t=e,n=te(),{styles:o,icon:a,color:s}=cn(t.frontmatter.type),l=nn(O(()=>t.frontmatter)),i=O(()=>t.frontmatter.aside!==!1),f=at(),h=on();return an(()=>{f.hash&&setTimeout(()=>{lt(document.body,f.hash,{smooth:!0})},0)}),it(()=>{xn(h)}),(m,re)=>{const y=ln,x=ea,v=Zo,D=Go,Ee=sn,$e=Yn,ze=Vt;return S(),X("main",ta,[L(m.$slots,"main",{},()=>[E("div",{class:Ae(["content w-full md:w-3xl lg:w-2xl xl:w-2xl 2xl:w-4xl",{"no-aside":!i.value}]),flex:"~ col grow",p:"lt-md:0"},[K(Ee,{cover:m.frontmatter.cover,m:"0",class:"relative",style:rn(_(o))},{default:pe(()=>[E("div",na,[L(m.$slots,"main-header",{},()=>[K(y,{title:_(l),icon:m.frontmatter.icon||_(a),color:m.frontmatter.color||_(s),cover:m.frontmatter.cover,"page-title-class":m.frontmatter.pageTitleClass},null,8,["title","icon","color","cover","page-title-class"])])]),L(m.$slots,"main-header-after"),E("div",oa,[L(m.$slots,"main-content",{},()=>[I(" <Transition appear> "),K(D,{frontmatter:m.frontmatter},{default:pe(()=>[m.frontmatter.excerpt_type==="ai"&&m.frontmatter.excerpt?(S(),ge(x,{key:0})):I("v-if",!0),K(v),L(m.$slots,"main-content-md"),L(m.$slots,"default")]),_:3},8,["frontmatter"]),I(" </Transition> ")]),L(m.$slots,"main-content-after")])]),_:3},8,["cover","style"]),L(m.$slots,"main-nav-before"),L(m.$slots,"main-nav",{},()=>[m.frontmatter.nav!==!1?(S(),ge($e,{key:0})):I("v-if",!0)]),L(m.$slots,"main-nav-after"),_(n).comment.enable&&m.frontmatter.comment!==!1?L(m.$slots,"comment",{key:0},()=>[K(ze,{class:Ae(m.frontmatter.nav===!1?"mt-4":0)},null,8,["class"])]):I("v-if",!0),L(m.$slots,"main-footer-before"),L(m.$slots,"main-footer-after")],2)])])}}});export{la as _};
