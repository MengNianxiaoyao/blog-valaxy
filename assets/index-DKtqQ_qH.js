import{_ as bt}from"./ValaxyMain.vue_vue_type_style_index_0_lang-BNrHJMex.js";import{j as ut,k as ft,d as dt,l as pt,o as Ce,c as Te,f as I,a as $t,p as Pe,w,m as ht,r as C}from"./app-BAUQxpX5.js";import"./YunFooter.vue_vue_type_style_index_0_lang-DbzYwWxG.js";import"./YunCard.vue_vue_type_script_setup_true_lang-rii2eoac.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-DEWqV0Ob.js";import"./index-C7yU5XnD.js";var oe={};function gt(o){throw new Error('Could not dynamically require "'+o+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var U={},Q={},_e;function mt(){if(_e)return Q;_e=1,Object.defineProperty(Q,"__esModule",{value:!0});const o=Le();function S($){return Object.entries($).filter(([,u])=>!!u).map(([u,f])=>`${u}=${f}`).join("&")}function P($){const u=$.pathname==="/"?"":$.pathname;return`${$.origin}${u}`}const T={全部:"0",想看:"1",在看:"2",看过:"3"},g={全部:"0",在玩:"1",想玩:"2",玩过:"3"},O={动画:"1",游戏:"2"};async function h($,u){const f=Object.assign(Object.assign({},u),{collectionType:T[u.collectionType]}),k=new URL($);return await(await fetch(`${P(k)}/bilibili?${S(f)}`)).json()}async function H($,u){const{subjectType:f}=u,k=f==="动画"?T:g,_=Object.assign(Object.assign({},u),{collectionType:k[u.collectionType],subjectType:O[u.subjectType]}),te=new URL($);return await(await fetch(`${P(te)}/bgm?${S(_)}`)).json()}function z({activeLabel:$,labels:u,onChange:f}){const k=_=>{$!==_&&f(_)};return o.h("div",{class:"bbc-tabs"},u.map(_=>o.h("div",{class:{"bbc-tab-item":!0,"bbc-tab-item-active":_===$},key:_,onClick:()=>k(_)},_)))}function B(){return o.h("div",{class:"bbc-skeleton-container bbc-bangumi-item"},o.h("div",{class:"bbc-skeleton-avatar"}),o.h("div",{class:"bbc-skeleton-content bbc-bangumi-content"},o.h("div",{class:"bbc-skeleton-row",style:{width:"30%"}}),o.h("div",{class:"bbc-skeleton-row",style:{width:"60%",height:"40px"}}),o.h("div",{class:"bbc-skeleton-row",style:{width:"90%",height:"32px"}})))}const N=({list:$,loading:u})=>o.h("div",{class:"bbc-bangumi"},$.map(f=>o.h("div",null,u?o.h(B,null):o.h("div",{class:"bbc-bangumi-item"},o.h("a",{href:f.url,target:"_blank",rel:"noreferrer"},o.h("img",{src:f.cover,alt:"cover",referrerpolicy:"no-referrer"})),o.h("div",{class:"bbc-bangumi-content"},o.h("h3",{class:"bbc-bangumi-title"},o.h("a",{href:f.url,target:"_blank",rel:"noreferrer"},f.name?f.name:f.nameCN),f.name&&o.h("small",null,f.nameCN)),o.h("div",{class:"bbc-bangumi-labels"},f.labels.map(k=>o.h("div",{class:"bbc-bangumi-label"},o.h("p",{class:"bbc-bangumi-label-title"},k.label),k.value&&o.h("p",null,k.value)))),o.h("p",{class:"bbc-bangumi-summary"},f.summary))))));function Z({pageNumber:$,totalPages:u,onChange:f,onInputChange:k}){return o.h("div",{class:"bbc-pagination"},o.h("a",{class:"bbc-pagination-button",onClick:()=>f("head")},"首页"),o.h("a",{class:"bbc-pagination-button",onClick:()=>f("prev")},"上一页"),o.h("span",{class:"bbc-pagination-pagenum"},`${$} / ${u}`),o.h("a",{class:"bbc-pagination-button",onClick:()=>f("next")},"下一页"),o.h("a",{class:"bbc-pagination-button",onClick:()=>f("tail")},"尾页"),o.h("div",{class:"bbc-pagination-input"},o.h("span",null,"跳至"),o.h("input",{type:"text",maxLength:4,onChange:k}),o.h("span",null,"页")))}function V(){return o.h("div",{class:"bbc-empty"},o.h("img",{src:"https://s1.hdslb.com/bfs/static/webssr/article/empty.png",alt:"empty",referrerpolicy:"no-referrer"}))}function ee({error:$}){return o.h("div",{class:"bbc-error"},o.h("svg",{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false","data-icon":"close-circle",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},o.h("path",{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"})),o.h("p",null,`message: ${$.message}`))}const F=`@layer bilibili-bangumi-component {
  :host {
    display: block;
    /* 基础文本 */
    --bbc-text-base-color: #4c4948;
    /* 内容信息的文本 */
    /* --bbc-text-primary-color: #2fd8d8; */
    /* 下划线之类的 */
    --bbc-primary-color: #425aef;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  .bbc-tabs {
    display: flex;
    gap: 8px;
  }

  .bbc-tab-item {
    padding: 4px 16px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    color: var(--bbc-text-base-color);
    cursor: pointer;
  }

  .bbc-tab-item:hover {
    background-color: var(--bbc-primary-color);
    color: white;
  }

  .bbc-tab-item-active {
    color: white;
    background-color: var(--bbc-primary-color);
  }

  .bbc-header-platform {
    display: flex;
    align-items: center;
    gap: 28px;
    height: 40px;
  }

  .bbc-header-platform .divider {
    width: 3px;
    border-radius: 2px;
    height: 80%;
    background-color: var(--bbc-primary-color);
  }

  .bbc-bangumi:last-child {
    border-bottom: none;
  }

  .bbc-bangumi-item {
    display: flex;
    margin: 12px 0;
    gap: 16px;
    padding: 16px;
    border-bottom: 1px solid #ddd;
  }

  .bbc-bangumi-item img {
    border-radius: 8px;
    cursor: pointer;
    height: 140px;
    object-fit: cover;
    aspect-ratio: 3 / 4;
  }

  .bbc-bangumi-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .bbc-bangumi-title {
    margin: 0;
  }

  .bbc-bangumi-title a {
    color: var(--bbc-text-base-color);
  }

  .bbc-bangumi-title a:hover {
    border-bottom: 2px solid var(--bbc-primary-color);
  }

  .bbc-bangumi-title small {
    margin-left: 8px;
    font-weight: normal;
    font-size: 14px;
    color: var(--bbc-text-base-color);
    height: 24px;
  }

  .bbc-bangumi-labels {
    color: #FF9843;
    display: flex;
  }

  .bbc-bangumi-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 13%;
    height: 36px;
    border-right: 1px solid #FF9843;
  }

  .bbc-bangumi-label:last-child {
    border-right: none;
  }

  .bbc-bangumi-label p {
    font-size: 14px;
    margin: 0;
  }

  .bbc-bangumi-label:not(.bbc-bangumi-label > .bbc-bangumi-label-title) {
    justify-content: center;
  }

  .bbc-bangumi-summary {
    font-size: 12px;
    color: var(--bbc-text-base-color);

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .bbc-pagination {
    height: 40px;
    text-align: center;
    padding-right: 20px;
  }

  .bbc-pagination-button {
    border-radius: 4px;
    font-size: 14px;
    padding: 4px 8px;
    margin: 0 4px;
    color: #bbb;
    cursor: pointer;
  }

  .bbc-pagination-button:hover {
    background-color: var(--bbc-primary-color);
    color: white;
  }

  .bbc-pagination-pagenum {
    color: #bbb;
    font-size: 14px;
  }
  
  .bbc-pagination-input {
    display: inline-block;
    color: #bbb;
    font-size: 12px;
  }

  .bbc-pagination-input input {
    display: inline-block;
    margin: 0 8px;
    font-size: 12px;
    color: #bbb;
    width: 30px;
    height: 24px;
    line-height: 24px;
    border-radius: 4px;
    border: 1px solid #bbb;
    text-align: center;
    outline: none;
    transition: border .2s ease;
  }

  .bbc-skeleton-container {
    animation: skeleton-blink 1.2s ease-in-out infinite;
  }

  @keyframes skeleton-blink {
    50% {
      opacity: 0.6;
    }
  }

  .bbc-skeleton-avatar {
    height: 140px;
    border-radius: 8px;
    background-color: #f2f3f5;
    aspect-ratio: 3 / 4;
  }

  .bbc-skeleton-row {
    height: 24px;
    background-color: #f2f3f5;
  }

  .bbc-empty {
    display: flex;
    padding: 40px 0;
    justify-content: center;
    align-items: center;
  }

  .bbc-empty img {
    height: 140px;
    object-fit: cover;
  }

  .bbc-error {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .bbc-error svg {
    color: #ff4d4f;
    height: 72px;
    width: 72px;
  }

  .bbc-error p {
    color: var(--bbc-text-base-color);
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    .bbc-tab-item {
      padding: 4px 12px;
    }

    .bbc-header-platform {
      gap: 16px;
    }

    .bbc-bangumi-title a {
      font-size: 16px;
    }

    .bbc-bangumi-label {
      width: 30%;
    }    

    .bbc-bangumi-label p {
      font-size: 12px;
    }
    
    .bbc-bangumi-label:nth-child(n + 4) {
      display: none;
    }

    .bbc-bangumi-label:nth-child(3) {
      border-right: none;
    }
  }
}`,A=class{constructor($){o.registerInstance(this,$),this.platformLabels=["Bilibili","Bangumi"],this.subjectLabels=["动画","游戏"],this.fetchData=async()=>{try{this.loading=!0,this.error=null;let u;const f={uid:this.bilibiliUid,collectionType:this.activeCollection,pageSize:this.pageSize,pageNumber:this.pageNumber};this.activePlatform==="Bilibili"?u=await h(this.api,f):u=await H(this.api,Object.assign(Object.assign({},f),{uid:this.bgmUid,subjectType:this.activeSubject})),u.code===200?this.responseData=u.data:(this.error=u,this.responseData=null)}catch(u){this.error=u,this.responseData=null}this.loading=!1},this.handlePlatformChange=u=>{this.activePlatform=u,this.pageNumber=1,this.activeSubject="动画",this.activeCollection="全部",this.fetchData()},this.handleSubjectChange=u=>{this.collectionLabels=u==="动画"?["全部","想看","在看","看过"]:["全部","想玩","在玩","玩过"],this.activeSubject=u,this.pageNumber=1,this.activeCollection="全部",this.fetchData()},this.handleCollectionChange=u=>{this.activeCollection=u,this.pageNumber=1,this.fetchData()},this.scrollToTop=()=>{document.documentElement.scrollTo({top:0,behavior:"smooth"})},this.handlePageChange=u=>{const{totalPages:f}=this.responseData;switch(u){case"head":this.pageNumber=1;break;case"prev":if(this.pageNumber===1)return;this.pageNumber--;break;case"next":if(this.pageNumber===f)return;this.pageNumber++;break;case"tail":this.pageNumber=f;break}this.scrollToTop(),this.fetchData()},this.handleInputChange=u=>{const f=Number.parseInt(u.target.value);if(Object.is(f,Number.NaN))return;const{totalPages:k}=this.responseData;f<1?this.pageNumber=1:f>k?this.pageNumber=k:this.pageNumber=f,this.scrollToTop(),this.fetchData()},this.api=void 0,this.bilibiliUid=void 0,this.bgmUid=void 0,this.bilibiliEnabled=!0,this.bgmEnabled=!0,this.loading=!1,this.error=void 0,this.pageNumber=1,this.pageSize=15,this.responseData=void 0,this.activePlatform="Bilibili",this.activeSubject="动画",this.collectionLabels=["全部","想看","在看","看过"],this.activeCollection="全部"}componentWillLoad(){const $=[this.bilibiliEnabled,this.bgmEnabled];this.platformLabels=this.platformLabels.filter((u,f)=>$[f]),this.activePlatform=this.platformLabels[0],this.fetchData()}render(){return o.h("div",null,o.h("div",{class:"bbc-header-platform"},o.h(z,{activeLabel:this.activePlatform,labels:this.platformLabels,onChange:this.handlePlatformChange}),this.activePlatform==="Bangumi"&&o.h("div",{class:"divider"}),this.activePlatform==="Bangumi"&&o.h(z,{activeLabel:this.activeSubject,labels:this.subjectLabels,onChange:this.handleSubjectChange})),o.h("div",null,o.h(z,{activeLabel:this.activeCollection,labels:this.collectionLabels,onChange:this.handleCollectionChange})),this.loading&&!this.responseData&&o.h(B,null),this.error&&o.h(ee,{error:this.error}),this.responseData&&o.h(N,{loading:this.loading,list:this.responseData.list}),this.responseData&&this.responseData.total===0&&o.h(V,null),this.responseData&&o.h(Z,{pageNumber:this.pageNumber,totalPages:this.responseData.totalPages,onChange:this.handlePageChange,onInputChange:this.handleInputChange}))}};return A.style=F,Q.bilibili_bangumi=A,Q}var we;function Le(){if(we)return U;we=1;function o(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(i){if(i!=="default"){var n=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(t,i,n.get?n:{enumerable:!0,get:function(){return e[i]}})}}),t.default=e,Object.freeze(t)}const S="bilibili-bangumi-component";let P,T,g=!1,O=!1;const h=(e,t="")=>()=>{},H=(e,t)=>()=>{},z="{visibility:hidden}.hydrated{visibility:inherit}",B="slot-fb{display:contents}slot-fb[hidden]{display:none}",N={},Z="http://www.w3.org/2000/svg",V="http://www.w3.org/1999/xhtml",ee=e=>e!=null,R=e=>(e=typeof e,e==="object"||e==="function");function F(e){var t,i,n;return(n=(i=(t=e.head)===null||t===void 0?void 0:t.querySelector('meta[name="csp-nonce"]'))===null||i===void 0?void 0:i.getAttribute("content"))!==null&&n!==void 0?n:void 0}const A=(e,t,...i)=>{let n=null,s=null,l=!1,a=!1;const r=[],c=p=>{for(let d=0;d<p.length;d++)n=p[d],Array.isArray(n)?c(n):n!=null&&typeof n!="boolean"&&((l=typeof e!="function"&&!R(n))&&(n=String(n)),l&&a?r[r.length-1].$text$+=n:r.push(l?$(null,n):n),a=l)};if(c(i),t){t.key&&(s=t.key);{const p=t.className||t.class;p&&(t.class=typeof p!="object"?p:Object.keys(p).filter(d=>p[d]).join(" "))}}if(typeof e=="function")return e(t===null?{}:t,r,k);const b=$(e,null);return b.$attrs$=t,r.length>0&&(b.$children$=r),b.$key$=s,b},$=(e,t)=>{const i={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return i.$attrs$=null,i.$key$=null,i},u={},f=e=>e&&e.$tag$===u,k={forEach:(e,t)=>e.map(_).forEach(t),map:(e,t)=>e.map(_).map(t).map(te)},_=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),te=e=>{if(typeof e.vtag=="function"){const i=Object.assign({},e.vattrs);return e.vkey&&(i.key=e.vkey),e.vname&&(i.name=e.vname),A(e.vtag,i,...e.vchildren||[])}const t=$(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},re=(e,t)=>e!=null&&!R(e)?t&4?e==="false"?!1:e===""||!!e:t&1?String(e):e:e,Oe=(e,t,i)=>{const n=v.ce(t,i);return e.dispatchEvent(n),n},ce=new WeakMap,ze=(e,t,i)=>{let n=J.get(e);lt&&i?(n=n||new CSSStyleSheet,typeof n=="string"?n=t:n.replaceSync(t)):n=t,J.set(e,n)},Ue=(e,t,i)=>{var n;const s=be(t),l=J.get(s);if(e=e.nodeType===11?e:L,l)if(typeof l=="string"){e=e.head||e;let a=ce.get(e),r;if(a||ce.set(e,a=new Set),!a.has(s)){{r=L.createElement("style"),r.innerHTML=l;const c=(n=v.$nonce$)!==null&&n!==void 0?n:F(L);c!=null&&r.setAttribute("nonce",c),e.insertBefore(r,e.querySelector("link"))}t.$flags$&4&&(r.innerHTML+=B),a&&a.add(s)}}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return s},Ae=e=>{const t=e.$cmpMeta$,i=e.$hostElement$,n=t.$flags$,s=h("attachStyles",t.$tagName$),l=Ue(i.shadowRoot?i.shadowRoot:i.getRootNode(),t);n&10&&(i["s-sc"]=l,i.classList.add(l+"-h")),s()},be=(e,t)=>"sc-"+e.$tagName$,ue=(e,t,i,n,s,l)=>{if(i!==n){let a=xe(e,t),r=t.toLowerCase();if(t==="class"){const c=e.classList,b=fe(i),p=fe(n);c.remove(...b.filter(d=>d&&!p.includes(d))),c.add(...p.filter(d=>d&&!b.includes(d)))}else if(t==="style"){for(const c in i)(!n||n[c]==null)&&(c.includes("-")?e.style.removeProperty(c):e.style[c]="");for(const c in n)(!i||n[c]!==i[c])&&(c.includes("-")?e.style.setProperty(c,n[c]):e.style[c]=n[c])}else if(t!=="key")if(!a&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"?t=t.slice(3):xe(X,r)?t=r.slice(2):t=r[2]+t.slice(3),i||n){const c=t.endsWith(de);t=t.replace(Me,""),i&&v.rel(e,t,i,c),n&&v.ael(e,t,n,c)}}else{const c=R(n);if((a||c&&n!==null)&&!s)try{if(e.tagName.includes("-"))e[t]=n;else{const b=n??"";t==="list"?a=!1:(i==null||e[t]!=b)&&(e[t]=b)}}catch{}n==null||n===!1?(n!==!1||e.getAttribute(t)==="")&&e.removeAttribute(t):(!a||l&4||s)&&!c&&(n=n===!0?"":n,e.setAttribute(t,n))}}},De=/\s/,fe=e=>e?e.split(De):[],de="Capture",Me=new RegExp(de+"$"),pe=(e,t,i,n)=>{const s=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$,l=e&&e.$attrs$||N,a=t.$attrs$||N;for(n in l)n in a||ue(s,n,l[n],void 0,i,t.$flags$);for(n in a)ue(s,n,l[n],a[n],i,t.$flags$)},W=(e,t,i,n)=>{const s=t.$children$[i];let l=0,a,r;if(s.$text$!==null)a=s.$elm$=L.createTextNode(s.$text$);else{if(g||(g=s.$tag$==="svg"),a=s.$elm$=L.createElementNS(g?Z:V,s.$tag$),g&&s.$tag$==="foreignObject"&&(g=!1),pe(null,s,g),ee(P)&&a["s-si"]!==P&&a.classList.add(a["s-si"]=P),s.$children$)for(l=0;l<s.$children$.length;++l)r=W(e,s,l),r&&a.appendChild(r);s.$tag$==="svg"?g=!1:a.tagName==="foreignObject"&&(g=!0)}return a["s-hn"]=T,a},$e=(e,t,i,n,s,l)=>{let a=e,r;for(a.shadowRoot&&a.tagName===T&&(a=a.shadowRoot);s<=l;++s)n[s]&&(r=W(null,i,s),r&&(n[s].$elm$=r,a.insertBefore(r,t)))},he=(e,t,i)=>{for(let n=t;n<=i;++n){const s=e[n];if(s){const l=s.$elm$;l&&l.remove()}}},qe=(e,t,i,n,s=!1)=>{let l=0,a=0,r=0,c=0,b=t.length-1,p=t[0],d=t[b],x=n.length-1,m=n[0],y=n[x],j,E;for(;l<=b&&a<=x;)if(p==null)p=t[++l];else if(d==null)d=t[--b];else if(m==null)m=n[++a];else if(y==null)y=n[--x];else if(G(p,m,s))D(p,m,s),p=t[++l],m=n[++a];else if(G(d,y,s))D(d,y,s),d=t[--b],y=n[--x];else if(G(p,y,s))D(p,y,s),e.insertBefore(p.$elm$,d.$elm$.nextSibling),p=t[++l],y=n[--x];else if(G(d,m,s))D(d,m,s),e.insertBefore(d.$elm$,p.$elm$),d=t[--b],m=n[++a];else{for(r=-1,c=l;c<=b;++c)if(t[c]&&t[c].$key$!==null&&t[c].$key$===m.$key$){r=c;break}r>=0?(E=t[r],E.$tag$!==m.$tag$?j=W(t&&t[a],i,r):(D(E,m,s),t[r]=void 0,j=E.$elm$),m=n[++a]):(j=W(t&&t[a],i,a),m=n[++a]),j&&p.$elm$.parentNode.insertBefore(j,p.$elm$)}l>b?$e(e,n[x+1]==null?null:n[x+1].$elm$,i,n,a,x):a>x&&he(t,l,b)},G=(e,t,i=!1)=>e.$tag$===t.$tag$?i?!0:e.$key$===t.$key$:!1,D=(e,t,i=!1)=>{const n=t.$elm$=e.$elm$,s=e.$children$,l=t.$children$,a=t.$tag$,r=t.$text$;r===null?(g=a==="svg"?!0:a==="foreignObject"?!1:g,pe(e,t,g),s!==null&&l!==null?qe(n,s,t,l,i):l!==null?(e.$text$!==null&&(n.textContent=""),$e(n,null,t,l,0,l.length-1)):s!==null&&he(s,0,s.length-1),g&&a==="svg"&&(g=!1)):e.$text$!==r&&(n.data=r)},Ie=(e,t,i=!1)=>{const n=e.$hostElement$,s=e.$vnode$||$(null,null),l=f(t)?t:A(null,null,t);if(T=n.tagName,i&&l.$attrs$)for(const a of Object.keys(l.$attrs$))n.hasAttribute(a)&&!["key","ref","style","class"].includes(a)&&(l.$attrs$[a]=n[a]);l.$tag$=null,l.$flags$|=4,e.$vnode$=l,l.$elm$=s.$elm$=n.shadowRoot||n,P=n["s-sc"],D(s,l,i)},ge=(e,t)=>{t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise(i=>e.$onRenderResolve$=i))},ne=(e,t)=>{if(e.$flags$|=16,e.$flags$&4){e.$flags$|=512;return}return ge(e,e.$ancestorComponent$),rt(()=>He(e,t))},He=(e,t)=>{const i=h("scheduleUpdate",e.$cmpMeta$.$tagName$),n=e.$lazyInstance$;let s;return t&&(s=Je(n,"componentWillLoad")),i(),Ne(s,()=>Fe(e,n,t))},Ne=(e,t)=>Re(e)?e.then(t):t(),Re=e=>e instanceof Promise||e&&e.then&&typeof e.then=="function",Fe=async(e,t,i)=>{var n;const s=e.$hostElement$,l=h("update",e.$cmpMeta$.$tagName$),a=s["s-rc"];i&&Ae(e);const r=h("render",e.$cmpMeta$.$tagName$);We(e,t,s,i),a&&(a.map(c=>c()),s["s-rc"]=void 0),r(),l();{const c=(n=s["s-p"])!==null&&n!==void 0?n:[],b=()=>Ge(e);c.length===0?b():(Promise.all(c).then(b),e.$flags$|=4,c.length=0)}},We=(e,t,i,n)=>{try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,Ie(e,t,n)}catch(s){q(s,e.$hostElement$)}return null},Ge=e=>{const t=e.$cmpMeta$.$tagName$,i=e.$hostElement$,n=h("postUpdate",t),s=e.$ancestorComponent$;e.$flags$&64?n():(e.$flags$|=64,ye(i),n(),e.$onReadyResolve$(i),s||me()),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),e.$flags$&512&&le(()=>ne(e,!1)),e.$flags$&=-517},me=e=>{ye(L.documentElement),le(()=>Oe(X,"appload",{detail:{namespace:S}}))},Je=(e,t,i)=>{if(e&&e[t])try{return e[t](i)}catch(n){q(n)}},ye=e=>e.classList.add("hydrated"),Xe=(e,t)=>M(e).$instanceValues$.get(t),Ye=(e,t,i,n)=>{const s=M(e),l=s.$instanceValues$.get(t),a=s.$flags$,r=s.$lazyInstance$;i=re(i,n.$members$[t][0]);const c=Number.isNaN(l)&&Number.isNaN(i),b=i!==l&&!c;(!(a&8)||l===void 0)&&b&&(s.$instanceValues$.set(t,i),r&&(a&18)===2&&ne(s,!1))},ve=(e,t,i)=>{var n;const s=e.prototype;if(t.$members$){const l=Object.entries(t.$members$);if(l.map(([a,[r]])=>{(r&31||i&2&&r&32)&&Object.defineProperty(s,a,{get(){return Xe(this,a)},set(c){Ye(this,a,c,t)},configurable:!0,enumerable:!0})}),i&1){const a=new Map;s.attributeChangedCallback=function(r,c,b){v.jmp(()=>{var p;const d=a.get(r);if(this.hasOwnProperty(d))b=this[d],delete this[d];else{if(s.hasOwnProperty(d)&&typeof this[d]=="number"&&this[d]==b)return;if(d==null){const x=M(this),m=x==null?void 0:x.$flags$;if(m&&!(m&8)&&m&128&&b!==c){const y=x.$lazyInstance$,j=(p=t.$watchers$)===null||p===void 0?void 0:p[r];j==null||j.forEach(E=>{y[E]!=null&&y[E].call(y,b,c,r)})}return}}this[d]=b===null&&typeof this[d]=="boolean"?!1:b})},e.observedAttributes=Array.from(new Set([...Object.keys((n=t.$watchers$)!==null&&n!==void 0?n:{}),...l.filter(([r,c])=>c[0]&15).map(([r,c])=>{const b=c[1]||r;return a.set(b,r),b})]))}}return e},Ke=async(e,t,i,n)=>{let s;if(!(t.$flags$&32)){t.$flags$|=32;{if(s=at(i),s.then){const c=H();s=await s,c()}s.isProxied||(ve(s,i,2),s.isProxied=!0);const r=h("createInstance",i.$tagName$);t.$flags$|=8;try{new s(t)}catch(c){q(c)}t.$flags$&=-9,r()}if(s.style){let r=s.style;const c=be(i);if(!J.has(c)){const b=h("registerStyles",i.$tagName$);ze(c,r,!!(i.$flags$&1)),b()}}}const l=t.$ancestorComponent$,a=()=>ne(t,!0);l&&l["s-rc"]?l["s-rc"].push(a):a()},Qe=e=>{},Ze=e=>{if(!(v.$flags$&1)){const t=M(e),i=t.$cmpMeta$,n=h("connectedCallback",i.$tagName$);if(t.$flags$&1)t!=null&&t.$lazyInstance$||t!=null&&t.$onReadyPromise$&&t.$onReadyPromise$.then(()=>Qe());else{t.$flags$|=1;{let s=e;for(;s=s.parentNode||s.host;)if(s["s-p"]){ge(t,t.$ancestorComponent$=s);break}}i.$members$&&Object.entries(i.$members$).map(([s,[l]])=>{if(l&31&&e.hasOwnProperty(s)){const a=e[s];delete e[s],e[s]=a}}),Ke(e,t,i)}n()}},Ve=e=>{},et=async e=>{if(!(v.$flags$&1)){const t=M(e);t!=null&&t.$lazyInstance$||t!=null&&t.$onReadyPromise$&&t.$onReadyPromise$.then(()=>Ve())}},tt=(e,t={})=>{var i;const n=h(),s=[],l=t.exclude||[],a=X.customElements,r=L.head,c=r.querySelector("meta[charset]"),b=L.createElement("style"),p=[];let d,x=!0;Object.assign(v,t),v.$resourcesUrl$=new URL(t.resourcesUrl||"./",L.baseURI).href;let m=!1;if(e.map(y=>{y[1].map(j=>{const E={$flags$:j[0],$tagName$:j[1],$members$:j[2],$listeners$:j[3]};E.$flags$&4&&(m=!0),E.$members$=j[2];const Y=E.$tagName$,ct=class extends HTMLElement{constructor(K){super(K),K=this,st(K,E),E.$flags$&1&&K.attachShadow({mode:"open"})}connectedCallback(){d&&(clearTimeout(d),d=null),x?p.push(this):v.jmp(()=>Ze(this))}disconnectedCallback(){v.jmp(()=>et(this))}componentOnReady(){return M(this).$onReadyPromise$}};E.$lazyBundleId$=y[0],!l.includes(Y)&&!a.get(Y)&&(s.push(Y),a.define(Y,ve(ct,E,1)))})}),m&&(b.innerHTML+=B),b.innerHTML+=s+z,b.innerHTML.length){b.setAttribute("data-styles","");const y=(i=v.$nonce$)!==null&&i!==void 0?i:F(L);y!=null&&b.setAttribute("nonce",y),r.insertBefore(b,c?c.nextSibling:r.firstChild)}x=!1,p.length?p.map(y=>y.connectedCallback()):v.jmp(()=>d=setTimeout(me,30)),n()},nt=e=>v.$nonce$=e,ie=new WeakMap,M=e=>ie.get(e),it=(e,t)=>ie.set(t.$lazyInstance$=e,t),st=(e,t)=>{const i={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return i.$onReadyPromise$=new Promise(n=>i.$onReadyResolve$=n),e["s-p"]=[],e["s-rc"]=[],ie.set(e,i)},xe=(e,t)=>t in e,q=(e,t)=>(0,console.error)(e,t),se=new Map,at=(e,t,i)=>{const n=e.$tagName$.replace(/-/g,"_"),s=e.$lazyBundleId$,l=se.get(s);if(l)return l[n];if(!i||!BUILD.hotModuleReplacement){const a=r=>(se.set(s,r),r[n]);switch(s){case"bilibili-bangumi.cjs":return Promise.resolve().then(function(){return o(mt())}).then(a,q)}}return Promise.resolve().then(function(){return o(gt(`./${s}.entry.js`))}).then(a=>(se.set(s,a),a[n]),q)},J=new Map,X=typeof window<"u"?window:{},L=X.document||{head:{}},v={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,i,n)=>e.addEventListener(t,i,n),rel:(e,t,i,n)=>e.removeEventListener(t,i,n),ce:(e,t)=>new CustomEvent(e,t)},ke=e=>Promise.resolve(e),lt=(()=>{try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch{}return!1})(),Se=[],je=[],ot=(e,t)=>i=>{e.push(i),O||(O=!0,t&&v.$flags$&4?le(ae):v.raf(ae))},Ee=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(i){q(i)}e.length=0},ae=()=>{Ee(Se),Ee(je),(O=Se.length>0)&&v.raf(ae)},le=e=>ke().then(e),rt=ot(je,!0);return U.bootstrapLazy=tt,U.h=A,U.promiseResolve=ke,U.registerInstance=it,U.setNonce=nt,U}Object.defineProperty(oe,"__esModule",{value:!0});const Be=Le(),yt=(o,S)=>{if(!(typeof window>"u"))return Be.bootstrapLazy([["bilibili-bangumi.cjs",[[1,"bilibili-bangumi",{api:[1],bilibiliUid:[1,"bilibili-uid"],bgmUid:[1,"bgm-uid"],bilibiliEnabled:[4,"bilibili-enabled"],bgmEnabled:[4,"bgm-enabled"],loading:[32],error:[32],pageNumber:[32],pageSize:[32],responseData:[32],activePlatform:[32],activeSubject:[32],collectionLabels:[32],activeCollection:[32]}]]]],S)};oe.setNonce=Be.setNonce;var vt=oe.defineCustomElements=yt;function xt(){const o=ut();return ft(()=>{const S=o.value.addons["valaxy-addon-bangumi"].options;return S?{...S,bilibiliEnabled:S.bilibiliEnabled??!0,bgmEnabled:S.bgmEnabled??!0}:(console.warn("`valaxy-addon-bangumi` options not found"),{api:""})})}const kt=dt({__name:"ValaxyBangumi",setup(o){vt();const S=xt(),{api:P,bgmEnabled:T,bgmUid:g,bilibiliEnabled:O,bilibiliUid:h}=S.value;return(H,z)=>{const B=pt("bilibili-bangumi");return Ce(),Te(B,{api:I(P),"bgm-enabled":I(T),"bgm-uid":I(g),"bilibili-enabled":I(O),"bilibili-uid":I(h)},null,8,["api","bgm-enabled","bgm-uid","bilibili-enabled","bilibili-uid"])}}}),Ct={__name:"index",setup(o,{expose:S}){const P=JSON.parse('{"title":"追番列表","description":"Bangumi 追番列表","frontmatter":{"title":"追番列表","icon":"i-ri-bilibili-line","keywords":"Bangumi","description":"Bangumi 追番列表","nav":false,"toc":false,"comment":false,"time_warning":false},"headers":[],"relativePath":"pages/bangumi/index.md","path":"/home/runner/work/blog/blog/pages/bangumi/index.md","lastUpdated":1708316589000}'),T=$t(),g=P.frontmatter||{};return T.meta.frontmatter=Object.assign(T.meta.frontmatter||{},P.frontmatter||{}),Pe("pageData",P),Pe("valaxy:frontmatter",g),globalThis.$frontmatter=g,S({frontmatter:{title:"追番列表",icon:"i-ri-bilibili-line",keywords:"Bangumi",description:"Bangumi 追番列表",nav:!1,toc:!1,comment:!1,time_warning:!1}}),(h,H)=>{const z=kt,B=bt;return Ce(),Te(B,{frontmatter:I(g)},{"main-content-md":w(()=>[ht(z)]),"main-header":w(()=>[C(h.$slots,"main-header")]),"main-header-after":w(()=>[C(h.$slots,"main-header-after")]),"main-nav":w(()=>[C(h.$slots,"main-nav")]),"main-content":w(()=>[C(h.$slots,"main-content")]),"main-content-after":w(()=>[C(h.$slots,"main-content-after")]),"main-nav-before":w(()=>[C(h.$slots,"main-nav-before")]),"main-nav-after":w(()=>[C(h.$slots,"main-nav-after")]),comment:w(()=>[C(h.$slots,"comment")]),footer:w(()=>[C(h.$slots,"footer")]),aside:w(()=>[C(h.$slots,"aside")]),"aside-custom":w(()=>[C(h.$slots,"aside-custom")]),default:w(()=>[C(h.$slots,"default")]),_:3},8,["frontmatter"])}}};export{Ct as default};
