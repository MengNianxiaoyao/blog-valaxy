import{l as Q,u as Ie,g as Yt,K as Qe,I as De,L as et,M as se,p as Bt,a as qt,k as Ut,N as Vt}from"./app.DtzgV6W1.js";import{_ as Dt}from"./YunComment.vue_vue_type_style_index_0_lang.CQMOlpaL.js";import"./chunks/@vueuse/motion.DbQGOUK4.js";import{d as Le,r as Ft}from"./chunks/dayjs.Byk5cVHE.js";import{a as tt,u as Gt}from"./chunks/vue-router.DyE9LA3m.js";import{D as ue,B as S,F as ee,a9 as Zt,aa as x,ac as D,ae as _,x as h,ab as J,al as de,af as P,ah as k,C as Kt,M as Wt,ad as y,aj as Ce,O as Jt,Z as K,ak as Xt}from"./framework.C8TEEDY2.js";import{i as Se}from"./chunks/nprogress.DPUY87b7.js";import{u as Oe}from"./chunks/vue-i18n.BFV6-31X.js";import{_ as Qt}from"./YunPageHeader.vue_vue_type_script_setup_true_lang.D6ugfNlH.js";import{u as en}from"./post.f43NrQch.js";function tn(){const e=Q(),t=Ie();Se&&window.addEventListener("click",n=>{const o=n.target;if(o.matches('[class*="language-"] > button.collapse')){const a=o.parentElement;a==null||a.removeAttribute("style"),a==null||a.classList.remove("folded")}}),ue(()=>{const n=document.querySelectorAll('div[class*="language-"]'),o=e.value.codeHeightLimit,a=t.value.codeHeightLimit;let i;if(typeof a!="number"||a<=0){if(o===void 0||o<=0)return;i=o}else i=a;for(const l of Array.from(n))l.scrollHeight>i&&l.classList.add("folded")})}function nn(){if(Se){const e=new WeakMap;window.addEventListener("click",t=>{var o;const n=t.target;if(n.matches('div[class*="language-"] > button.copy')){const a=n.parentElement,i=(o=n.nextElementSibling)==null?void 0:o.nextElementSibling;if(!a||!i)return;const l=/language-(shellscript|shell|bash|sh|zsh)/.test(a.className);let m="";i.querySelectorAll("span.line:not(.diff.remove)").forEach(g=>m+=`${g.textContent||""}
`),m=m.slice(0,-1),l&&(m=m.replace(/^ *(\$|>) /gm,"").trim()),on(m).then(()=>{n.classList.add("copied"),clearTimeout(e.get(n));const g=setTimeout(()=>{n.classList.remove("copied"),n.blur(),e.delete(n)},2e3);e.set(n,g)})}})}}async function on(e){try{return navigator.clipboard.writeText(e)}catch{const t=document.createElement("textarea"),n=document.activeElement;t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";const o=document.getSelection(),a=o?o.rangeCount>0&&o.getRangeAt(0):null;document.body.appendChild(t),t.select(),t.selectionStart=0,t.selectionEnd=e.length,document.execCommand("copy"),document.body.removeChild(t),a&&(o.removeAllRanges(),o.addRange(a)),n&&n.focus()}}/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},le=function(t){return t.tagName==="IMG"},an=function(t){return NodeList.prototype.isPrototypeOf(t)},ce=function(t){return t&&t.nodeType===1},Fe=function(t){var n=t.currentSrc||t.src;return n.substr(-4).toLowerCase()===".svg"},Ge=function(t){try{return Array.isArray(t)?t.filter(le):an(t)?[].slice.call(t).filter(le):ce(t)?[t].filter(le):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(le):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},rn=function(t){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=t,n},sn=function(t){var n=t.getBoundingClientRect(),o=n.top,a=n.left,i=n.width,l=n.height,m=t.cloneNode(),g=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,w=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return m.removeAttribute("id"),m.style.position="absolute",m.style.top=o+g+"px",m.style.left=a+w+"px",m.style.width=i+"px",m.style.height=l+"px",m.style.transform="",m},V=function(t,n){var o=R({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(t,o);var a=document.createEvent("CustomEvent");return a.initCustomEvent(t,o.bubbles,o.cancelable,o.detail),a},ln=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=window.Promise||function(s){function c(){}s(c,c)},a=function(s){var c=s.target;if(c===re){C();return}E.indexOf(c)!==-1&&ae({target:c})},i=function(){if(!(q||!r.original)){var s=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(Ue-s)>f.scrollOffset&&setTimeout(C,150)}},l=function(s){var c=s.key||s.keyCode;(c==="Escape"||c==="Esc"||c===27)&&C()},m=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=s;if(s.background&&(re.style.background=s.background),s.container&&s.container instanceof Object&&(c.container=R({},f.container,s.container)),s.template){var p=ce(s.template)?s.template:document.querySelector(s.template);c.template=p}return f=R({},f,c),E.forEach(function(v){v.dispatchEvent(V("medium-zoom:update",{detail:{zoom:b}}))}),b},g=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(R({},f,s))},w=function(){for(var s=arguments.length,c=Array(s),p=0;p<s;p++)c[p]=arguments[p];var v=c.reduce(function(d,z){return[].concat(d,Ge(z))},[]);return v.filter(function(d){return E.indexOf(d)===-1}).forEach(function(d){E.push(d),d.classList.add("medium-zoom-image")}),B.forEach(function(d){var z=d.type,A=d.listener,U=d.options;v.forEach(function(T){T.addEventListener(z,A,U)})}),b},he=function(){for(var s=arguments.length,c=Array(s),p=0;p<s;p++)c[p]=arguments[p];r.zoomed&&C();var v=c.length>0?c.reduce(function(d,z){return[].concat(d,Ge(z))},[]):E;return v.forEach(function(d){d.classList.remove("medium-zoom-image"),d.dispatchEvent(V("medium-zoom:detach",{detail:{zoom:b}}))}),E=E.filter(function(d){return v.indexOf(d)===-1}),b},u=function(s,c){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return E.forEach(function(v){v.addEventListener("medium-zoom:"+s,c,p)}),B.push({type:"medium-zoom:"+s,listener:c,options:p}),b},qe=function(s,c){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return E.forEach(function(v){v.removeEventListener("medium-zoom:"+s,c,p)}),B=B.filter(function(v){return!(v.type==="medium-zoom:"+s&&v.listener.toString()===c.toString())}),b},oe=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=s.target,p=function(){var d={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},z=void 0,A=void 0;if(f.container)if(f.container instanceof Object)d=R({},d,f.container),z=d.width-d.left-d.right-f.margin*2,A=d.height-d.top-d.bottom-f.margin*2;else{var U=ce(f.container)?f.container:document.querySelector(f.container),T=U.getBoundingClientRect(),Ee=T.width,xt=T.height,It=T.left,St=T.top;d=R({},d,{width:Ee,height:xt,left:It,top:St})}z=z||d.width-f.margin*2,A=A||d.height-f.margin*2;var Z=r.zoomedHd||r.original,Ot=Fe(Z)?z:Z.naturalWidth||z,Tt=Fe(Z)?A:Z.naturalHeight||A,ie=Z.getBoundingClientRect(),Ht=ie.top,Nt=ie.left,$e=ie.width,ze=ie.height,Mt=Math.min(Math.max($e,Ot),z)/$e,Rt=Math.min(Math.max(ze,Tt),A)/ze,we=Math.min(Mt,Rt),Pt=(-Nt+(z-$e)/2+f.margin+d.left)/we,jt=(-Ht+(A-ze)/2+f.margin+d.top)/we,Ve="scale("+we+") translate3d("+Pt+"px, "+jt+"px, 0)";r.zoomed.style.transform=Ve,r.zoomedHd&&(r.zoomedHd.style.transform=Ve)};return new o(function(v){if(c&&E.indexOf(c)===-1){v(b);return}var d=function Ee(){q=!1,r.zoomed.removeEventListener("transitionend",Ee),r.original.dispatchEvent(V("medium-zoom:opened",{detail:{zoom:b}})),v(b)};if(r.zoomed){v(b);return}if(c)r.original=c;else if(E.length>0){var z=E;r.original=z[0]}else{v(b);return}if(r.original.dispatchEvent(V("medium-zoom:open",{detail:{zoom:b}})),Ue=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,q=!0,r.zoomed=sn(r.original),document.body.appendChild(re),f.template){var A=ce(f.template)?f.template:document.querySelector(f.template);r.template=document.createElement("div"),r.template.appendChild(A.content.cloneNode(!0)),document.body.appendChild(r.template)}if(r.original.parentElement&&r.original.parentElement.tagName==="PICTURE"&&r.original.currentSrc&&(r.zoomed.src=r.original.currentSrc),document.body.appendChild(r.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),r.original.classList.add("medium-zoom-image--hidden"),r.zoomed.classList.add("medium-zoom-image--opened"),r.zoomed.addEventListener("click",C),r.zoomed.addEventListener("transitionend",d),r.original.getAttribute("data-zoom-src")){r.zoomedHd=r.zoomed.cloneNode(),r.zoomedHd.removeAttribute("srcset"),r.zoomedHd.removeAttribute("sizes"),r.zoomedHd.removeAttribute("loading"),r.zoomedHd.src=r.zoomed.getAttribute("data-zoom-src"),r.zoomedHd.onerror=function(){clearInterval(U),console.warn("Unable to reach the zoom image target "+r.zoomedHd.src),r.zoomedHd=null,p()};var U=setInterval(function(){r.zoomedHd.complete&&(clearInterval(U),r.zoomedHd.classList.add("medium-zoom-image--opened"),r.zoomedHd.addEventListener("click",C),document.body.appendChild(r.zoomedHd),p())},10)}else if(r.original.hasAttribute("srcset")){r.zoomedHd=r.zoomed.cloneNode(),r.zoomedHd.removeAttribute("sizes"),r.zoomedHd.removeAttribute("loading");var T=r.zoomedHd.addEventListener("load",function(){r.zoomedHd.removeEventListener("load",T),r.zoomedHd.classList.add("medium-zoom-image--opened"),r.zoomedHd.addEventListener("click",C),document.body.appendChild(r.zoomedHd),p()})}else p()})},C=function(){return new o(function(s){if(q||!r.original){s(b);return}var c=function p(){r.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(r.zoomed),r.zoomedHd&&document.body.removeChild(r.zoomedHd),document.body.removeChild(re),r.zoomed.classList.remove("medium-zoom-image--opened"),r.template&&document.body.removeChild(r.template),q=!1,r.zoomed.removeEventListener("transitionend",p),r.original.dispatchEvent(V("medium-zoom:closed",{detail:{zoom:b}})),r.original=null,r.zoomed=null,r.zoomedHd=null,r.template=null,s(b)};q=!0,document.body.classList.remove("medium-zoom--opened"),r.zoomed.style.transform="",r.zoomedHd&&(r.zoomedHd.style.transform=""),r.template&&(r.template.style.transition="opacity 150ms",r.template.style.opacity=0),r.original.dispatchEvent(V("medium-zoom:close",{detail:{zoom:b}})),r.zoomed.addEventListener("transitionend",c)})},ae=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=s.target;return r.original?C():oe({target:c})},be=function(){return f},_e=function(){return E},ye=function(){return r.original},E=[],B=[],q=!1,Ue=0,f=n,r={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?f=t:(t||typeof t=="string")&&w(t),f=R({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},f);var re=rn(f.background);document.addEventListener("click",a),document.addEventListener("keyup",l),document.addEventListener("scroll",i),window.addEventListener("resize",C);var b={open:oe,close:C,toggle:ae,update:m,clone:g,attach:w,detach:he,on:u,off:qe,getOptions:be,getImages:_e,getZoomedImage:ye};return b};function cn(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var dn=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";cn(dn);function mn(){const t=Q().value.mediumZoom;ue(()=>{t.enable&&ln(t.selector||".markdown-body img",{background:"var(--medium-zoom-c-bg, rgba(0, 0, 0, 0.8))",...t.options})})}function nt(e,t,n={smooth:!0,targetPadding:-64}){let o=null;try{o=e.classList.contains("header-anchor")?e:decodeURIComponent(t)&&document.querySelector(decodeURIComponent(t))||null}catch(a){console.warn(a)}if(o){const a=(n==null?void 0:n.targetPadding)||-64,i=window.scrollY+o.getBoundingClientRect().top+a;!n.smooth||Math.abs(i-window.scrollY)>window.innerHeight?window.scrollTo(0,i):window.scrollTo({top:i,behavior:"smooth"})}}function un(e){window.addEventListener("click",async t=>{const n=t.target.closest("a");if(n){const{protocol:o,hostname:a,pathname:i,hash:l,target:m}=n,g=window.location,w=i.match(/\.\w+$/);!t.ctrlKey&&!t.shiftKey&&!t.altKey&&!t.metaKey&&m!=="_blank"&&o===g.protocol&&a===g.hostname&&!(w&&w[0]!==".html")&&i===g.pathname&&(t.preventDefault(),l&&l!==g.hash&&(await e.push({hash:decodeURIComponent(l)}),nt(n,l,{smooth:n.classList.contains("header-anchor")})))}},{capture:!0})}function fn(e,t){const n=document.createElement("div");n.className=t,e.parentNode.insertBefore(n,e),e.parentNode.removeChild(e),n.appendChild(e)}function pn(e=document){e.querySelectorAll("table").forEach(t=>{var o;if((o=t.parentElement)!=null&&o.classList.contains("table-container"))return;const n=document.createElement("div");n.className="table-container",fn(t,"table-container")})}function gn(e){const t=tt(),n=S(()=>t.path),o=Yt(),a=S(()=>{let m=-1;return o.postList.find((g,w)=>g.path===n.value?(m=w,!0):!1),m}),i=S(()=>a.value-1>=0?o.postList[a.value-1]:null),l=S(()=>a.value+1<o.postList.length?o.postList[a.value+1]:null);return[i,l]}function vn(){const e=Q(),t=S(()=>e.value.cdn.prefix);Qe({link:[{rel:"stylesheet",href:`${t.value}aplayer/dist/APlayer.min.css`}]}),De(`${t.value}aplayer/dist/APlayer.min.js`,()=>{De(`${t.value}meting@2/dist/Meting.min.js`)})}function hn(){Qe({script:[{src:"https://static.codepen.io/assets/embed/ei.js",async:!0}]})}const bn={class:"post-nav"},_n={class:"post-nav-item"},yn={class:"title truncate",text:"sm"},En={class:"post-nav-item"},$n={class:"title truncate",text:"sm"},zn=ee({__name:"YunPostNav",setup(e){const[t,n]=gn();return(o,a)=>{const i=Zt("RouterLink");return x(),D("div",bn,[_("div",_n,[h(t)?(x(),J(i,{key:0,class:"post-nav-prev",to:h(t).path||"",title:h(t).title},{default:de(()=>[a[0]||(a[0]=_("div",{class:"icon","i-ri-arrow-left-s-line":""},null,-1)),_("span",yn,P(h(t).title),1)]),_:1},8,["to","title"])):k("v-if",!0)]),_("div",En,[h(n)?(x(),J(i,{key:0,to:h(n).path||"",title:h(n).title,class:"post-nav-next"},{default:de(()=>[_("span",$n,P(h(n).title),1),a[1]||(a[1]=_("div",{class:"icon","i-ri-arrow-right-s-line":""},null,-1))]),_:1},8,["to","title"])):k("v-if",!0)])])}}});function wn(){Se&&window.addEventListener("click",e=>{var n;const t=e.target;if(t.matches(".vp-code-group input")){const o=(n=t.parentElement)==null?void 0:n.parentElement;if(!o)return;const a=Array.from(o.querySelectorAll("input")).indexOf(t);if(a<0)return;const i=o.querySelector(".blocks");if(!i)return;const l=Array.from(i.children).find(w=>w.classList.contains("active"));if(!l)return;const m=i.children[a];if(!m||l===m)return;l.classList.remove("active"),m.classList.add("active");const g=o==null?void 0:o.querySelector(`label[for="${t.id}"]`);g==null||g.scrollIntoView({block:"nearest"})}})}const N=typeof window<"u",ot=N&&!("onscroll"in window)||typeof navigator<"u"&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),at=N&&window.devicePixelRatio>1,Ln={elements_selector:".lazy",container:ot||N?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},rt=e=>Object.assign({},Ln,e),Ze=function(e,t){let n;const o="LazyLoad::Initialized",a=new e(t);try{n=new CustomEvent(o,{detail:{instance:a}})}catch{n=document.createEvent("CustomEvent"),n.initCustomEvent(o,!1,!1,{instance:a})}window.dispatchEvent(n)},Cn=(e,t)=>{if(t)if(t.length)for(let n,o=0;n=t[o];o+=1)Ze(e,n);else Ze(e,t)},O="src",Te="srcset",He="sizes",it="poster",te="llOriginalAttrs",st="data",Ne="loading",lt="loaded",ct="applied",kn="entered",Me="error",dt="native",mt="data-",ut="ll-status",L=(e,t)=>e.getAttribute(mt+t),An=(e,t,n)=>{const o=mt+t;n!==null?e.setAttribute(o,n):e.removeAttribute(o)},ne=e=>L(e,ut),Y=(e,t)=>An(e,ut,t),fe=e=>Y(e,null),Re=e=>ne(e)===null,xn=e=>ne(e)===Ne,In=e=>ne(e)===Me,Pe=e=>ne(e)===dt,Sn=[Ne,lt,ct,Me],On=e=>Sn.indexOf(ne(e))>=0,M=(e,t,n,o)=>{e&&typeof e=="function"&&(o===void 0?n===void 0?e(t):e(t,n):e(t,n,o))},G=(e,t)=>{N&&t!==""&&e.classList.add(t)},I=(e,t)=>{N&&t!==""&&e.classList.remove(t)},Tn=e=>{e.llTempImage=document.createElement("IMG")},Hn=e=>{delete e.llTempImage},ft=e=>e.llTempImage,pe=(e,t)=>{if(!t)return;const n=t._observer;n&&n.unobserve(e)},Nn=e=>{e.disconnect()},Mn=(e,t,n)=>{t.unobserve_entered&&pe(e,n)},je=(e,t)=>{e&&(e.loadingCount+=t)},Rn=e=>{e&&(e.toLoadCount-=1)},pt=(e,t)=>{e&&(e.toLoadCount=t)},Pn=e=>e.loadingCount>0,jn=e=>e.toLoadCount>0,gt=e=>{let t=[];for(let n,o=0;n=e.children[o];o+=1)n.tagName==="SOURCE"&&t.push(n);return t},Ye=(e,t)=>{const n=e.parentNode;n&&n.tagName==="PICTURE"&&gt(n).forEach(t)},vt=(e,t)=>{gt(e).forEach(t)},ge=[O],ht=[O,it],X=[O,Te,He],bt=[st],ve=e=>!!e[te],_t=e=>e[te],yt=e=>delete e[te],F=(e,t)=>{if(ve(e))return;const n={};t.forEach(o=>{n[o]=e.getAttribute(o)}),e[te]=n},Yn=e=>{ve(e)||(e[te]={backgroundImage:e.style.backgroundImage})},j=(e,t)=>{if(!ve(e))return;const n=_t(e);t.forEach(o=>{((a,i,l)=>{l?a.setAttribute(i,l):a.removeAttribute(i)})(e,o,n[o])})},Bn=e=>{if(!ve(e))return;const t=_t(e);e.style.backgroundImage=t.backgroundImage},Et=(e,t,n)=>{G(e,t.class_applied),Y(e,ct),n&&(t.unobserve_completed&&pe(e,t),M(t.callback_applied,e,n))},$t=(e,t,n)=>{G(e,t.class_loading),Y(e,Ne),n&&(je(n,1),M(t.callback_loading,e,n))},H=(e,t,n)=>{n&&e.setAttribute(t,n)},Ke=(e,t)=>{H(e,He,L(e,t.data_sizes)),H(e,Te,L(e,t.data_srcset)),H(e,O,L(e,t.data_src))},qn=(e,t)=>{Ye(e,n=>{F(n,X),Ke(n,t)}),F(e,X),Ke(e,t)},Un=(e,t)=>{F(e,ge),H(e,O,L(e,t.data_src))},Vn=(e,t)=>{vt(e,n=>{F(n,ge),H(n,O,L(n,t.data_src))}),F(e,ht),H(e,it,L(e,t.data_poster)),H(e,O,L(e,t.data_src)),e.load()},Dn=(e,t)=>{F(e,bt),H(e,st,L(e,t.data_src))},Fn=(e,t,n)=>{const o=L(e,t.data_bg),a=L(e,t.data_bg_hidpi),i=at&&a?a:o;i&&(e.style.backgroundImage=`url("${i}")`,ft(e).setAttribute(O,i),$t(e,t,n))},Gn=(e,t,n)=>{const o=L(e,t.data_bg_multi),a=L(e,t.data_bg_multi_hidpi),i=at&&a?a:o;i&&(e.style.backgroundImage=i,Et(e,t,n))},Zn=(e,t,n)=>{const o=L(e,t.data_bg_set);if(!o)return;let a=o.split("|").map(i=>`image-set(${i})`);e.style.backgroundImage=a.join(),Et(e,t,n)},zt={IMG:qn,IFRAME:Un,VIDEO:Vn,OBJECT:Dn},Kn=(e,t)=>{const n=zt[e.tagName];n&&n(e,t)},Wn=(e,t,n)=>{const o=zt[e.tagName];o&&(o(e,t),$t(e,t,n))},Jn=["IMG","IFRAME","VIDEO","OBJECT"],Xn=e=>Jn.indexOf(e.tagName)>-1,wt=(e,t)=>{!t||Pn(t)||jn(t)||M(e.callback_finish,t)},We=(e,t,n)=>{e.addEventListener(t,n),e.llEvLisnrs[t]=n},Qn=(e,t,n)=>{e.removeEventListener(t,n)},Be=e=>!!e.llEvLisnrs,eo=(e,t,n)=>{Be(e)||(e.llEvLisnrs={});const o=e.tagName==="VIDEO"?"loadeddata":"load";We(e,o,t),We(e,"error",n)},ke=e=>{if(!Be(e))return;const t=e.llEvLisnrs;for(let n in t){const o=t[n];Qn(e,n,o)}delete e.llEvLisnrs},Lt=(e,t,n)=>{Hn(e),je(n,-1),Rn(n),I(e,t.class_loading),t.unobserve_completed&&pe(e,n)},to=(e,t,n,o)=>{const a=Pe(t);Lt(t,n,o),G(t,n.class_loaded),Y(t,lt),M(n.callback_loaded,t,o),a||wt(n,o)},no=(e,t,n,o)=>{const a=Pe(t);Lt(t,n,o),G(t,n.class_error),Y(t,Me),M(n.callback_error,t,o),n.restore_on_error&&j(t,X),a||wt(n,o)},Ae=(e,t,n)=>{const o=ft(e)||e;Be(o)||eo(o,a=>{to(0,e,t,n),ke(o)},a=>{no(0,e,t,n),ke(o)})},xe=(e,t,n)=>{Xn(e)?((o,a,i)=>{Ae(o,a,i),Wn(o,a,i)})(e,t,n):((o,a,i)=>{Tn(o),Ae(o,a,i),Yn(o),Fn(o,a,i),Gn(o,a,i),Zn(o,a,i)})(e,t,n)},oo=(e,t,n)=>{e.setAttribute("loading","lazy"),Ae(e,t,n),Kn(e,t),Y(e,dt)},Je=e=>{e.removeAttribute(O),e.removeAttribute(Te),e.removeAttribute(He)},ao=e=>{Ye(e,t=>{Je(t)}),Je(e)},Ct=e=>{Ye(e,t=>{j(t,X)}),j(e,X)},ro=e=>{vt(e,t=>{j(t,ge)}),j(e,ht),e.load()},io=e=>{j(e,ge)},so=e=>{j(e,bt)},lo={IMG:Ct,IFRAME:io,VIDEO:ro,OBJECT:so},co=(e,t)=>{(n=>{const o=lo[n.tagName];o?o(n):Bn(n)})(e),((n,o)=>{Re(n)||Pe(n)||(I(n,o.class_entered),I(n,o.class_exited),I(n,o.class_applied),I(n,o.class_loading),I(n,o.class_loaded),I(n,o.class_error))})(e,t),fe(e),yt(e)},mo=(e,t,n,o)=>{n.cancel_on_exit&&xn(e)&&e.tagName==="IMG"&&(ke(e),ao(e),Ct(e),I(e,n.class_loading),je(o,-1),fe(e),M(n.callback_cancel,e,t,o))},uo=(e,t,n,o)=>{const a=On(e);Y(e,kn),G(e,n.class_entered),I(e,n.class_exited),Mn(e,n,o),M(n.callback_enter,e,t,o),a||xe(e,n,o)},fo=(e,t,n,o)=>{Re(e)||(G(e,n.class_exited),mo(e,t,n,o),M(n.callback_exit,e,t,o))},po=["IMG","IFRAME","VIDEO"],kt=e=>e.use_native&&"loading"in HTMLImageElement.prototype,go=(e,t,n)=>{e.forEach(o=>{po.indexOf(o.tagName)!==-1&&oo(o,t,n)}),pt(n,0)},vo=e=>e.isIntersecting||e.intersectionRatio>0,ho=(e,t)=>{t.forEach(n=>{e.observe(n)})},bo=(e,t)=>{Nn(e),ho(e,t)},_o=(e,t)=>{kt(e)||(t._observer=new IntersectionObserver(n=>{((o,a,i)=>{o.forEach(l=>vo(l)?uo(l.target,l,a,i):fo(l.target,l,a,i))})(n,e,t)},(n=>({root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}))(e)))},At=e=>Array.prototype.slice.call(e),me=e=>e.container.querySelectorAll(e.elements_selector),yo=e=>At(e).filter(Re),Eo=e=>In(e),$o=e=>At(e).filter(Eo),Xe=(e,t)=>yo(e||me(t)),zo=(e,t)=>{$o(me(e)).forEach(n=>{I(n,e.class_error),fe(n)}),t.update()},wo=(e,t)=>{N&&(t._onlineHandler=()=>{zo(e,t)},window.addEventListener("online",t._onlineHandler))},Lo=e=>{N&&window.removeEventListener("online",e._onlineHandler)},W=function(e,t){const n=rt(e);this._settings=n,this.loadingCount=0,_o(n,this),wo(n,this),this.update(t)};W.prototype={update:function(e){const t=this._settings,n=Xe(e,t);pt(this,n.length),ot?this.loadAll(n):kt(t)?go(n,t,this):bo(this._observer,n)},destroy:function(){this._observer&&this._observer.disconnect(),Lo(this),me(this._settings).forEach(e=>{yt(e)}),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(e){const t=this._settings;Xe(e,t).forEach(n=>{pe(n,this),xe(n,t,this)})},restoreAll:function(){const e=this._settings;me(e).forEach(t=>{co(t,e)})}},W.load=(e,t)=>{const n=rt(t);xe(e,n)},W.resetStatus=e=>{fe(e)},N&&Cn(W,window.lazyLoadOptions);function Co(e={}){return document.querySelectorAll(".lazy").forEach(t=>{const n=t.getAttribute("src");t.removeAttribute("src"),t.setAttribute("data-src",n??"")}),new W({elements_selector:".lazy",...e})}function ko(){const e=Q();e.value.vanillaLazyload.enable&&ue(()=>{Co(e.value.vanillaLazyload)})}const Ao={key:0,text:"center"},xo=["href"],Io={m:"y-4",class:"end flex justify-center items-center"},So={p:"x-4",font:"bold",class:"whitespace-nowrap"},Oo=ee({__name:"ValaxyMd",props:{frontmatter:{},excerpt:{}},setup(e){const t=e,{t:n}=Oe(),o=Kt();return et(()=>{pn(o.value)}),ue(()=>{se()}),Wt(()=>{se()}),t.frontmatter.aplayer&&vn(),t.frontmatter.codepen&&hn(),nn(),wn(),tn(),(typeof t.frontmatter.medium_zoom>"u"||t.frontmatter.medium_zoom)&&mn(),ko(),(a,i)=>a.$slots.default?(x(),D("article",{key:0,class:Ce(a.frontmatter.markdownClass||"markdown-body")},[y(a.$slots,"default",{ref_key:"contentRef",ref:o,onVnodeUpdated:i[0]||(i[0]=(...l)=>h(se)&&h(se)(...l))}),a.frontmatter.url?(x(),D("div",Ao,[_("a",{href:a.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},P(h(n)("post.view_link")),9,xo)])):k("v-if",!0),a.frontmatter.end!==void 0?y(a.$slots,"end",{key:1},()=>[_("div",Io,[i[1]||(i[1]=_("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1)),_("span",So,P(a.frontmatter.end?"Q.E.D.":"To Be Continued."),1),i[2]||(i[2]=_("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1))])]):k("v-if",!0)],2)):k("v-if",!0)}}),To={key:0,class:"yun-time-warning",op:"80"},Ho=ee({__name:"YunMdTimeWarning",setup(e){Le.extend(Ft);const t=Ie(),{t:n}=Oe(),o=S(()=>Le(t.value.updated||t.value.date)),a=S(()=>{const l=o.value.fromNow();return/^\d/.test(l)?` ${l}`:l}),i=S(()=>{const l=Le().valueOf()-o.value.valueOf();return typeof t.value.time_warning=="number"?l>t.value.time_warning:t.value.time_warning});return(l,m)=>i.value?(x(),D("blockquote",To,P(h(n)("post.time_warning",{ago:a.value})),1)):k("v-if",!0)}}),No={class:"ai-generated-excerpt rounded-lg bg-$va-c-bg-alt p-4"},Mo={font:"black",flex:"","items-center":""},Ro={op:"90","mt-1":""},Po=ee({__name:"YunAiExcerpt",setup(e){const t=Ie(),{t:n}=Oe();return(o,a)=>(x(),D("div",No,[_("div",Mo,[a[0]||(a[0]=_("div",{"mr-1":"","i-ri-robot-2-line":""},null,-1)),_("div",null,P(h(n)("excerpt.ai")),1)]),_("div",Ro,P(h(t).excerpt),1)]))}}),jo={class:"yun-main lt-md:w-full",flex:"~ center"},Yo={class:"mt-8 mb-4"},Bo={p:"x-4 b-8",class:"sm:px-6 lg:px-12 xl:px-16",w:"full"},Xo=ee({__name:"ValaxyMain",props:{frontmatter:{},data:{}},setup(e){const t=e,n=Bt(),o=Q(),{styles:a,icon:i,color:l}=en(t.frontmatter.type),m=qt(S(()=>t.frontmatter)),g=S(()=>t.frontmatter.aside!==!1),w=tt(),he=Gt();return Jt(()=>{w.hash&&setTimeout(()=>{nt(document.body,w.hash,{smooth:!0})},0)}),et(()=>{un(he)}),(u,qe)=>{const oe=Qt,C=Po,ae=Ho,be=Oo,_e=Ut,ye=zn,E=Dt,B=Vt;return x(),D("main",jo,[y(u.$slots,"main",{},()=>[_("div",{class:Ce(["content w-full md:w-3xl lg:w-2xl xl:w-2xl 2xl:w-4xl",{"no-aside":!g.value}]),flex:"~ col grow",p:"lt-md:0"},[K(_e,{cover:u.frontmatter.cover,m:"0",class:"relative",style:Xt(h(a))},{default:de(()=>[_("div",Yo,[y(u.$slots,"main-header",{},()=>[K(oe,{title:h(m),icon:u.frontmatter.icon||h(i),color:u.frontmatter.color||h(l),cover:u.frontmatter.cover,"page-title-class":u.frontmatter.pageTitleClass},null,8,["title","icon","color","cover","page-title-class"])])]),y(u.$slots,"main-header-after"),_("div",Bo,[y(u.$slots,"main-content-before"),y(u.$slots,"main-content",{},()=>[k(" <Transition appear> "),K(be,{frontmatter:u.frontmatter},{default:de(()=>[u.frontmatter.excerpt_type==="ai"&&u.frontmatter.excerpt?(x(),J(C,{key:0})):k("v-if",!0),K(ae),y(u.$slots,"default"),y(u.$slots,"main-content-md")]),_:3},8,["frontmatter"]),k(" </Transition> ")]),y(u.$slots,"main-content-after")])]),_:3},8,["cover","style"]),y(u.$slots,"main-nav-before"),y(u.$slots,"main-nav",{},()=>[u.frontmatter.nav!==!1?(x(),J(ye,{key:0})):k("v-if",!0)]),y(u.$slots,"main-nav-after"),h(o).comment.enable&&u.frontmatter.comment!==!1?y(u.$slots,"comment",{key:0},()=>[K(E,{class:Ce(u.frontmatter.nav===!1?"mt-4":0)},null,8,["class"])]):k("v-if",!0),h(n).size.isLg?k("v-if",!0):(x(),J(B,{key:1,class:"mt-4"})),y(u.$slots,"main-footer-before"),y(u.$slots,"main-footer-after")],2)])])}}});export{Xo as _};