import{_ as rt}from"./ValaxyMain.vue_vue_type_style_index_0_lang-C9xYV-X_.js";import{j as ct,k as bt,d as ut,l as dt,o as Ce,c as Te,f as F,a as ft,p as je,w as P,m as pt,r as _}from"./app-Boin7vsj.js";import"./YunFooter.vue_vue_type_style_index_0_lang-LK4bejJ0.js";import"./YunCard.vue_vue_type_script_setup_true_lang-2YkXZhNk.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-BoxwbwWy.js";import"./index-C7yU5XnD.js";var le={};function $t(o){throw new Error('Could not dynamically require "'+o+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var A={},V={},Pe;function ht(){if(Pe)return V;Pe=1,Object.defineProperty(V,"__esModule",{value:!0});const o=we();function x(h){return Object.entries(h).filter(([,u])=>!!u).map(([u,d])=>`${u}=${d}`).join("&")}function j(h){if(!h.startsWith("http"))return h;const u=new URL(h),d=u.pathname==="/"?"":u.pathname;return`${u.origin}${d}`}const C={全部:"0",想看:"1",在看:"2",看过:"3"},w={全部:"0",在玩:"1",想玩:"2",玩过:"3"},O={动画:"1",游戏:"2"};async function $(h,u){const d=Object.assign(Object.assign({},u),{collectionType:C[u.collectionType]});return await(await fetch(`${j(h)}/bilibili?${x(d)}`)).json()}async function I(h,u){const{subjectType:d}=u,k=d==="动画"?C:w,T=Object.assign(Object.assign({},u),{collectionType:k[u.collectionType],subjectType:O[u.subjectType]});return await(await fetch(`${j(h)}/bgm?${x(T)}`)).json()}function z({activeLabel:h,labels:u,onChange:d}){const k=T=>{h!==T&&d(T)};return o.h("div",{class:"bbc-tabs"},u.map(T=>o.h("div",{class:{"bbc-tab-item":!0,"bbc-tab-item-active":T===h},key:T,onClick:()=>k(T)},T)))}function L(){return o.h("div",{class:"bbc-skeleton-container bbc-bangumi-item"},o.h("div",{class:"bbc-skeleton-avatar"}),o.h("div",{class:"bbc-skeleton-content bbc-bangumi-content"},o.h("div",{class:"bbc-skeleton-row",style:{width:"30%"}}),o.h("div",{class:"bbc-skeleton-row",style:{width:"60%",height:"40px"}}),o.h("div",{class:"bbc-skeleton-row",style:{width:"90%",height:"32px"}})))}const R=({list:h,loading:u})=>o.h("div",{class:"bbc-bangumi"},h.map(d=>o.h("div",null,u?o.h(L,null):o.h("div",{class:"bbc-bangumi-item"},o.h("a",{href:d.url,target:"_blank",rel:"noreferrer"},o.h("img",{src:d.cover,alt:"cover",referrerpolicy:"no-referrer"})),o.h("div",{class:"bbc-bangumi-content"},o.h("h3",{class:"bbc-bangumi-title"},o.h("a",{href:d.url,target:"_blank",rel:"noreferrer"},d.name?d.name:d.nameCN),d.name&&o.h("small",null,d.nameCN)),o.h("div",{class:"bbc-bangumi-labels"},d.labels.map(k=>o.h("div",{class:"bbc-bangumi-label"},o.h("p",{class:"bbc-bangumi-label-title"},k.label),k.value&&o.h("p",null,k.value)))),o.h("p",{class:"bbc-bangumi-summary"},d.summary))))));function ee({pageNumber:h,totalPages:u,onChange:d,onInputChange:k}){return o.h("div",{class:"bbc-pagination"},o.h("a",{class:"bbc-pagination-button",onClick:()=>d("head")},"首页"),o.h("a",{class:"bbc-pagination-button",onClick:()=>d("prev")},"上一页"),o.h("span",{class:"bbc-pagination-pagenum"},`${h} / ${u}`),o.h("a",{class:"bbc-pagination-button",onClick:()=>d("next")},"下一页"),o.h("a",{class:"bbc-pagination-button",onClick:()=>d("tail")},"尾页"),o.h("div",{class:"bbc-pagination-input"},o.h("span",null,"跳至"),o.h("input",{type:"text",maxLength:4,onChange:k}),o.h("span",null,"页")))}function H(){return o.h("div",{class:"bbc-empty"},o.h("img",{src:"https://s1.hdslb.com/bfs/static/webssr/article/empty.png",alt:"empty",referrerpolicy:"no-referrer"}))}function N({error:h}){return o.h("div",{class:"bbc-error"},o.h("img",{src:"https://s1.hdslb.com/bfs/static/jinkela/long/bitmap/error_01.png",alt:"parse failed",referrerpolicy:"no-referrer"}),o.h("p",null,"Σ(oﾟдﾟoﾉ) 发生了一些错误"),o.h("p",null,`message: ${h.message}`))}const D=`@layer bilibili-bangumi-component {
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
    border-radius: 12px;
    background-color: #f2f3f5;
    aspect-ratio: 3 / 4;
  }

  .bbc-skeleton-row {
    height: 24px;
    border-radius: 8px;
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
    gap: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .bbc-error img {
    display: block;
    width: 260px;
  }

  .bbc-error p {
    margin: 0;
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
}`,J=class{constructor(h){o.registerInstance(this,h),this.platformLabels=["Bilibili","Bangumi"],this.subjectLabels=["动画","游戏"],this.fetchData=async()=>{try{this.loading=!0,this.error=null;let u;const d={uid:this.bilibiliUid,collectionType:this.activeCollection,pageSize:this.pageSize,pageNumber:this.pageNumber};this.activePlatform==="Bilibili"?u=await $(this.api,d):u=await I(this.api,Object.assign(Object.assign({},d),{uid:this.bgmUid,subjectType:this.activeSubject})),u.code===200?this.responseData=u.data:(this.error=u,this.responseData=null)}catch(u){this.error=u,this.responseData=null}this.loading=!1},this.handlePlatformChange=u=>{this.activePlatform=u,this.pageNumber=1,this.activeSubject="动画",this.activeCollection="全部",this.fetchData()},this.handleSubjectChange=u=>{this.collectionLabels=u==="动画"?["全部","想看","在看","看过"]:["全部","想玩","在玩","玩过"],this.activeSubject=u,this.pageNumber=1,this.activeCollection="全部",this.fetchData()},this.handleCollectionChange=u=>{this.activeCollection=u,this.pageNumber=1,this.fetchData()},this.scrollToTop=()=>{document.documentElement.scrollTo({top:0,behavior:"smooth"})},this.handlePageChange=u=>{const{totalPages:d}=this.responseData;switch(u){case"head":this.pageNumber=1;break;case"prev":if(this.pageNumber===1)return;this.pageNumber--;break;case"next":if(this.pageNumber===d)return;this.pageNumber++;break;case"tail":this.pageNumber=d;break}this.scrollToTop(),this.fetchData()},this.handleInputChange=u=>{const d=Number.parseInt(u.target.value);if(Object.is(d,Number.NaN))return;const{totalPages:k}=this.responseData;d<1?this.pageNumber=1:d>k?this.pageNumber=k:this.pageNumber=d,this.scrollToTop(),this.fetchData()},this.api=void 0,this.bilibiliUid=void 0,this.bgmUid=void 0,this.bilibiliEnabled=!0,this.bgmEnabled=!0,this.loading=!1,this.error=void 0,this.pageNumber=1,this.pageSize=15,this.responseData=void 0,this.activePlatform="Bilibili",this.activeSubject="动画",this.collectionLabels=["全部","想看","在看","看过"],this.activeCollection="全部"}componentWillLoad(){const h=[this.bilibiliEnabled,this.bgmEnabled];this.platformLabels=this.platformLabels.filter((u,d)=>h[d]),this.activePlatform=this.platformLabels[0],this.fetchData()}render(){return o.h("div",null,o.h("div",{class:"bbc-header-platform"},o.h(z,{activeLabel:this.activePlatform,labels:this.platformLabels,onChange:this.handlePlatformChange}),this.activePlatform==="Bangumi"&&o.h("div",{class:"divider"}),this.activePlatform==="Bangumi"&&o.h(z,{activeLabel:this.activeSubject,labels:this.subjectLabels,onChange:this.handleSubjectChange})),o.h("div",null,o.h(z,{activeLabel:this.activeCollection,labels:this.collectionLabels,onChange:this.handleCollectionChange})),this.loading&&!this.responseData&&o.h(L,null),this.error&&o.h(N,{error:this.error}),this.responseData&&o.h(R,{loading:this.loading,list:this.responseData.list}),this.responseData&&this.responseData.total===0&&o.h(H,null),this.responseData&&o.h(ee,{pageNumber:this.pageNumber,totalPages:this.responseData.totalPages,onChange:this.handlePageChange,onInputChange:this.handleInputChange}))}};return J.style=D,V.bilibili_bangumi=J,V}var _e;function we(){if(_e)return A;_e=1;function o(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(i){if(i!=="default"){var n=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(t,i,n.get?n:{enumerable:!0,get:function(){return e[i]}})}}),t.default=e,Object.freeze(t)}const x="bilibili-bangumi-component";let j,C,w=!1,O=!1;const $=(e,t="")=>()=>{},I=(e,t)=>()=>{},z="{visibility:hidden}.hydrated{visibility:inherit}",L="slot-fb{display:contents}slot-fb[hidden]{display:none}",R={},ee=e=>e!=null,H=e=>(e=typeof e,e==="object"||e==="function");function N(e){var t,i,n;return(n=(i=(t=e.head)===null||t===void 0?void 0:t.querySelector('meta[name="csp-nonce"]'))===null||i===void 0?void 0:i.getAttribute("content"))!==null&&n!==void 0?n:void 0}const W=(e,t,...i)=>{let n=null,s=null,l=!1,a=!1;const c=[],r=p=>{for(let f=0;f<p.length;f++)n=p[f],Array.isArray(n)?r(n):n!=null&&typeof n!="boolean"&&((l=typeof e!="function"&&!H(n))&&(n=String(n)),l&&a?c[c.length-1].$text$+=n:c.push(l?D(null,n):n),a=l)};if(r(i),t){t.key&&(s=t.key);{const p=t.className||t.class;p&&(t.class=typeof p!="object"?p:Object.keys(p).filter(f=>p[f]).join(" "))}}if(typeof e=="function")return e(t===null?{}:t,c,u);const b=D(e,null);return b.$attrs$=t,c.length>0&&(b.$children$=c),b.$key$=s,b},D=(e,t)=>{const i={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return i.$attrs$=null,i.$key$=null,i},J={},h=e=>e&&e.$tag$===J,u={forEach:(e,t)=>e.map(d).forEach(t),map:(e,t)=>e.map(d).map(t).map(k)},d=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),k=e=>{if(typeof e.vtag=="function"){const i=Object.assign({},e.vattrs);return e.vkey&&(i.key=e.vkey),e.vname&&(i.name=e.vname),W(e.vtag,i,...e.vchildren||[])}const t=D(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},T=(e,t)=>e!=null&&!H(e)?t&4?e==="false"?!1:e===""||!!e:t&1?String(e):e:e,oe=(e,t,i)=>{const n=y.ce(t,i);return e.dispatchEvent(n),n},re=new WeakMap,Le=(e,t,i)=>{let n=G.get(e);st&&i?(n=n||new CSSStyleSheet,typeof n=="string"?n=t:n.replaceSync(t)):n=t,G.set(e,n)},Oe=(e,t,i)=>{var n;const s=ce(t),l=G.get(s);if(e=e.nodeType===11?e:B,l)if(typeof l=="string"){e=e.head||e;let a=re.get(e),c;if(a||re.set(e,a=new Set),!a.has(s)){{c=B.createElement("style"),c.innerHTML=l;const r=(n=y.$nonce$)!==null&&n!==void 0?n:N(B);r!=null&&c.setAttribute("nonce",r),e.insertBefore(c,e.querySelector("link"))}t.$flags$&4&&(c.innerHTML+=L),a&&a.add(s)}}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return s},ze=e=>{const t=e.$cmpMeta$,i=e.$hostElement$,n=t.$flags$,s=$("attachStyles",t.$tagName$),l=Oe(i.shadowRoot?i.shadowRoot:i.getRootNode(),t);n&10&&(i["s-sc"]=l,i.classList.add(l+"-h")),s()},ce=(e,t)=>"sc-"+e.$tagName$,be=(e,t,i,n,s,l)=>{if(i!==n){let a=ve(e,t),c=t.toLowerCase();if(t==="class"){const r=e.classList,b=ue(i),p=ue(n);r.remove(...b.filter(f=>f&&!p.includes(f))),r.add(...p.filter(f=>f&&!b.includes(f)))}else if(t==="style"){for(const r in i)(!n||n[r]==null)&&(r.includes("-")?e.style.removeProperty(r):e.style[r]="");for(const r in n)(!i||n[r]!==i[r])&&(r.includes("-")?e.style.setProperty(r,n[r]):e.style[r]=n[r])}else if(t!=="key")if(!a&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"?t=t.slice(3):ve(K,c)?t=c.slice(2):t=c[2]+t.slice(3),i||n){const r=t.endsWith(de);t=t.replace(De,""),i&&y.rel(e,t,i,r),n&&y.ael(e,t,n,r)}}else{const r=H(n);if((a||r&&n!==null)&&!s)try{if(e.tagName.includes("-"))e[t]=n;else{const b=n??"";t==="list"?a=!1:(i==null||e[t]!=b)&&(e[t]=b)}}catch{}n==null||n===!1?(n!==!1||e.getAttribute(t)==="")&&e.removeAttribute(t):(!a||l&4||s)&&!r&&(n=n===!0?"":n,e.setAttribute(t,n))}}},Ae=/\s/,ue=e=>e?e.split(Ae):[],de="Capture",De=new RegExp(de+"$"),fe=(e,t,i,n)=>{const s=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$,l=e&&e.$attrs$||R,a=t.$attrs$||R;for(n in l)n in a||be(s,n,l[n],void 0,i,t.$flags$);for(n in a)be(s,n,l[n],a[n],i,t.$flags$)},X=(e,t,i,n)=>{const s=t.$children$[i];let l=0,a,c;if(s.$text$!==null)a=s.$elm$=B.createTextNode(s.$text$);else if(a=s.$elm$=B.createElement(s.$tag$),fe(null,s,w),ee(j)&&a["s-si"]!==j&&a.classList.add(a["s-si"]=j),s.$children$)for(l=0;l<s.$children$.length;++l)c=X(e,s,l),c&&a.appendChild(c);return a["s-hn"]=C,a},pe=(e,t,i,n,s,l)=>{let a=e,c;for(a.shadowRoot&&a.tagName===C&&(a=a.shadowRoot);s<=l;++s)n[s]&&(c=X(null,i,s),c&&(n[s].$elm$=c,a.insertBefore(c,t)))},$e=(e,t,i)=>{for(let n=t;n<=i;++n){const s=e[n];if(s){const l=s.$elm$;l&&l.remove()}}},Ue=(e,t,i,n,s=!1)=>{let l=0,a=0,c=0,r=0,b=t.length-1,p=t[0],f=t[b],v=n.length-1,g=n[0],m=n[v],S,E;for(;l<=b&&a<=v;)if(p==null)p=t[++l];else if(f==null)f=t[--b];else if(g==null)g=n[++a];else if(m==null)m=n[--v];else if(Y(p,g,s))U(p,g,s),p=t[++l],g=n[++a];else if(Y(f,m,s))U(f,m,s),f=t[--b],m=n[--v];else if(Y(p,m,s))U(p,m,s),e.insertBefore(p.$elm$,f.$elm$.nextSibling),p=t[++l],m=n[--v];else if(Y(f,g,s))U(f,g,s),e.insertBefore(f.$elm$,p.$elm$),f=t[--b],g=n[++a];else{for(c=-1,r=l;r<=b;++r)if(t[r]&&t[r].$key$!==null&&t[r].$key$===g.$key$){c=r;break}c>=0?(E=t[c],E.$tag$!==g.$tag$?S=X(t&&t[a],i,c):(U(E,g,s),t[c]=void 0,S=E.$elm$),g=n[++a]):(S=X(t&&t[a],i,a),g=n[++a]),S&&p.$elm$.parentNode.insertBefore(S,p.$elm$)}l>b?pe(e,n[v+1]==null?null:n[v+1].$elm$,i,n,a,v):a>v&&$e(t,l,b)},Y=(e,t,i=!1)=>e.$tag$===t.$tag$?i?!0:e.$key$===t.$key$:!1,U=(e,t,i=!1)=>{const n=t.$elm$=e.$elm$,s=e.$children$,l=t.$children$,a=t.$text$;a===null?(fe(e,t,w),s!==null&&l!==null?Ue(n,s,t,l,i):l!==null?(e.$text$!==null&&(n.textContent=""),pe(n,null,t,l,0,l.length-1)):s!==null&&$e(s,0,s.length-1)):e.$text$!==a&&(n.data=a)},Me=(e,t,i=!1)=>{const n=e.$hostElement$,s=e.$vnode$||D(null,null),l=h(t)?t:W(null,null,t);if(C=n.tagName,i&&l.$attrs$)for(const a of Object.keys(l.$attrs$))n.hasAttribute(a)&&!["key","ref","style","class"].includes(a)&&(l.$attrs$[a]=n[a]);l.$tag$=null,l.$flags$|=4,e.$vnode$=l,l.$elm$=s.$elm$=n.shadowRoot||n,j=n["s-sc"],U(s,l,i)},he=(e,t)=>{t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise(i=>e.$onRenderResolve$=i))},te=(e,t)=>{if(e.$flags$|=16,e.$flags$&4){e.$flags$|=512;return}return he(e,e.$ancestorComponent$),lt(()=>qe(e,t))},qe=(e,t)=>{const i=$("scheduleUpdate",e.$cmpMeta$.$tagName$),n=e.$lazyInstance$;let s;return t&&(s=We(n,"componentWillLoad")),i(),Fe(s,()=>He(e,n,t))},Fe=(e,t)=>Ie(e)?e.then(t):t(),Ie=e=>e instanceof Promise||e&&e.then&&typeof e.then=="function",He=async(e,t,i)=>{var n;const s=e.$hostElement$,l=$("update",e.$cmpMeta$.$tagName$),a=s["s-rc"];i&&ze(e);const c=$("render",e.$cmpMeta$.$tagName$);Re(e,t,s,i),a&&(a.map(r=>r()),s["s-rc"]=void 0),c(),l();{const r=(n=s["s-p"])!==null&&n!==void 0?n:[],b=()=>Ne(e);r.length===0?b():(Promise.all(r).then(b),e.$flags$|=4,r.length=0)}},Re=(e,t,i,n)=>{try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,Me(e,t,n)}catch(s){q(s,e.$hostElement$)}return null},Ne=e=>{const t=e.$cmpMeta$.$tagName$,i=e.$hostElement$,n=$("postUpdate",t),s=e.$ancestorComponent$;e.$flags$&64?n():(e.$flags$|=64,me(i),n(),e.$onReadyResolve$(i),s||ge()),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),e.$flags$&512&&ae(()=>te(e,!1)),e.$flags$&=-517},ge=e=>{me(B.documentElement),ae(()=>oe(K,"appload",{detail:{namespace:x}}))},We=(e,t,i)=>{if(e&&e[t])try{return e[t](i)}catch(n){q(n)}},me=e=>e.classList.add("hydrated"),Je=(e,t)=>M(e).$instanceValues$.get(t),Xe=(e,t,i,n)=>{const s=M(e),l=s.$instanceValues$.get(t),a=s.$flags$,c=s.$lazyInstance$;i=T(i,n.$members$[t][0]);const r=Number.isNaN(l)&&Number.isNaN(i),b=i!==l&&!r;(!(a&8)||l===void 0)&&b&&(s.$instanceValues$.set(t,i),c&&(a&18)===2&&te(s,!1))},ye=(e,t,i)=>{var n;const s=e.prototype;if(t.$members$){const l=Object.entries(t.$members$);if(l.map(([a,[c]])=>{(c&31||i&2&&c&32)&&Object.defineProperty(s,a,{get(){return Je(this,a)},set(r){Xe(this,a,r,t)},configurable:!0,enumerable:!0})}),i&1){const a=new Map;s.attributeChangedCallback=function(c,r,b){y.jmp(()=>{var p;const f=a.get(c);if(this.hasOwnProperty(f))b=this[f],delete this[f];else{if(s.hasOwnProperty(f)&&typeof this[f]=="number"&&this[f]==b)return;if(f==null){const v=M(this),g=v==null?void 0:v.$flags$;if(g&&!(g&8)&&g&128&&b!==r){const m=v.$lazyInstance$,S=(p=t.$watchers$)===null||p===void 0?void 0:p[c];S==null||S.forEach(E=>{m[E]!=null&&m[E].call(m,b,r,c)})}return}}this[f]=b===null&&typeof this[f]=="boolean"?!1:b})},e.observedAttributes=Array.from(new Set([...Object.keys((n=t.$watchers$)!==null&&n!==void 0?n:{}),...l.filter(([c,r])=>r[0]&15).map(([c,r])=>{const b=r[1]||c;return a.set(b,c),b})]))}}return e},Ye=async(e,t,i,n)=>{let s;if(!(t.$flags$&32)){t.$flags$|=32;{if(s=it(i),s.then){const r=I();s=await s,r()}s.isProxied||(ye(s,i,2),s.isProxied=!0);const c=$("createInstance",i.$tagName$);t.$flags$|=8;try{new s(t)}catch(r){q(r)}t.$flags$&=-9,c()}if(s.style){let c=s.style;const r=ce(i);if(!G.has(r)){const b=$("registerStyles",i.$tagName$);Le(r,c,!!(i.$flags$&1)),b()}}}const l=t.$ancestorComponent$,a=()=>te(t,!0);l&&l["s-rc"]?l["s-rc"].push(a):a()},Ge=e=>{},Ke=e=>{if(!(y.$flags$&1)){const t=M(e),i=t.$cmpMeta$,n=$("connectedCallback",i.$tagName$);if(t.$flags$&1)t!=null&&t.$lazyInstance$||t!=null&&t.$onReadyPromise$&&t.$onReadyPromise$.then(()=>Ge());else{t.$flags$|=1;{let s=e;for(;s=s.parentNode||s.host;)if(s["s-p"]){he(t,t.$ancestorComponent$=s);break}}i.$members$&&Object.entries(i.$members$).map(([s,[l]])=>{if(l&31&&e.hasOwnProperty(s)){const a=e[s];delete e[s],e[s]=a}}),Ye(e,t,i)}n()}},Qe=e=>{},Ze=async e=>{if(!(y.$flags$&1)){const t=M(e);t!=null&&t.$lazyInstance$||t!=null&&t.$onReadyPromise$&&t.$onReadyPromise$.then(()=>Qe())}},Ve=(e,t={})=>{var i;const n=$(),s=[],l=t.exclude||[],a=K.customElements,c=B.head,r=c.querySelector("meta[charset]"),b=B.createElement("style"),p=[];let f,v=!0;Object.assign(y,t),y.$resourcesUrl$=new URL(t.resourcesUrl||"./",B.baseURI).href;let g=!1;if(e.map(m=>{m[1].map(S=>{const E={$flags$:S[0],$tagName$:S[1],$members$:S[2],$listeners$:S[3]};E.$flags$&4&&(g=!0),E.$members$=S[2];const Q=E.$tagName$,ot=class extends HTMLElement{constructor(Z){super(Z),Z=this,nt(Z,E),E.$flags$&1&&Z.attachShadow({mode:"open"})}connectedCallback(){f&&(clearTimeout(f),f=null),v?p.push(this):y.jmp(()=>Ke(this))}disconnectedCallback(){y.jmp(()=>Ze(this))}componentOnReady(){return M(this).$onReadyPromise$}};E.$lazyBundleId$=m[0],!l.includes(Q)&&!a.get(Q)&&(s.push(Q),a.define(Q,ye(ot,E,1)))})}),g&&(b.innerHTML+=L),b.innerHTML+=s+z,b.innerHTML.length){b.setAttribute("data-styles","");const m=(i=y.$nonce$)!==null&&i!==void 0?i:N(B);m!=null&&b.setAttribute("nonce",m),c.insertBefore(b,r?r.nextSibling:c.firstChild)}v=!1,p.length?p.map(m=>m.connectedCallback()):y.jmp(()=>f=setTimeout(ge,30)),n()},et=e=>y.$nonce$=e,ne=new WeakMap,M=e=>ne.get(e),tt=(e,t)=>ne.set(t.$lazyInstance$=e,t),nt=(e,t)=>{const i={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return i.$onReadyPromise$=new Promise(n=>i.$onReadyResolve$=n),e["s-p"]=[],e["s-rc"]=[],ne.set(e,i)},ve=(e,t)=>t in e,q=(e,t)=>(0,console.error)(e,t),ie=new Map,it=(e,t,i)=>{const n=e.$tagName$.replace(/-/g,"_"),s=e.$lazyBundleId$,l=ie.get(s);if(l)return l[n];if(!i||!BUILD.hotModuleReplacement){const a=c=>(ie.set(s,c),c[n]);switch(s){case"bilibili-bangumi.cjs":return Promise.resolve().then(function(){return o(ht())}).then(a,q)}}return Promise.resolve().then(function(){return o($t(`./${s}.entry.js`))}).then(a=>(ie.set(s,a),a[n]),q)},G=new Map,K=typeof window<"u"?window:{},B=K.document||{head:{}},y={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,i,n)=>e.addEventListener(t,i,n),rel:(e,t,i,n)=>e.removeEventListener(t,i,n),ce:(e,t)=>new CustomEvent(e,t)},xe=e=>Promise.resolve(e),st=(()=>{try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch{}return!1})(),ke=[],Se=[],at=(e,t)=>i=>{e.push(i),O||(O=!0,t&&y.$flags$&4?ae(se):y.raf(se))},Ee=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(i){q(i)}e.length=0},se=()=>{Ee(ke),Ee(Se),(O=ke.length>0)&&y.raf(se)},ae=e=>xe().then(e),lt=at(Se,!0);return A.bootstrapLazy=Ve,A.h=W,A.promiseResolve=xe,A.registerInstance=tt,A.setNonce=et,A}Object.defineProperty(le,"__esModule",{value:!0});const Be=we(),gt=(o,x)=>{if(!(typeof window>"u"))return Be.bootstrapLazy([["bilibili-bangumi.cjs",[[1,"bilibili-bangumi",{api:[1],bilibiliUid:[1,"bilibili-uid"],bgmUid:[1,"bgm-uid"],bilibiliEnabled:[4,"bilibili-enabled"],bgmEnabled:[4,"bgm-enabled"],loading:[32],error:[32],pageNumber:[32],pageSize:[32],responseData:[32],activePlatform:[32],activeSubject:[32],collectionLabels:[32],activeCollection:[32]}]]]],x)};le.setNonce=Be.setNonce;var mt=le.defineCustomElements=gt;function yt(){const o=ct();return bt(()=>{const x=o.value.addons["valaxy-addon-bangumi"].options;return x?{...x,bilibiliEnabled:x.bilibiliEnabled??!0,bgmEnabled:x.bgmEnabled??!0}:(console.warn("`valaxy-addon-bangumi` options not found"),{api:""})})}const vt=ut({__name:"ValaxyBangumi",setup(o){mt();const x=yt(),{api:j,bgmEnabled:C,bgmUid:w,bilibiliEnabled:O,bilibiliUid:$}=x.value;return(I,z)=>{const L=dt("bilibili-bangumi");return Ce(),Te(L,{api:F(j),"bgm-enabled":F(C),"bgm-uid":F(w),"bilibili-enabled":F(O),"bilibili-uid":F($)},null,8,["api","bgm-enabled","bgm-uid","bilibili-enabled","bilibili-uid"])}}}),_t={__name:"index",setup(o,{expose:x}){const j=JSON.parse('{"title":"追番列表","description":"Bangumi 追番列表","frontmatter":{"title":"追番列表","icon":"i-ri-bilibili-line","keywords":"Bangumi","description":"Bangumi 追番列表","nav":false,"toc":false,"comment":false,"time_warning":false},"headers":[],"relativePath":"pages/bangumi/index.md","path":"/home/runner/work/blog/blog/pages/bangumi/index.md","lastUpdated":1708405008000}'),C=ft(),w=j.frontmatter||{};return C.meta.frontmatter=Object.assign(C.meta.frontmatter||{},j.frontmatter||{}),je("pageData",j),je("valaxy:frontmatter",w),globalThis.$frontmatter=w,x({frontmatter:{title:"追番列表",icon:"i-ri-bilibili-line",keywords:"Bangumi",description:"Bangumi 追番列表",nav:!1,toc:!1,comment:!1,time_warning:!1}}),($,I)=>{const z=vt,L=rt;return Ce(),Te(L,{frontmatter:F(w)},{"main-content-md":P(()=>[pt(z)]),"main-header":P(()=>[_($.$slots,"main-header")]),"main-header-after":P(()=>[_($.$slots,"main-header-after")]),"main-nav":P(()=>[_($.$slots,"main-nav")]),"main-content":P(()=>[_($.$slots,"main-content")]),"main-content-after":P(()=>[_($.$slots,"main-content-after")]),"main-nav-before":P(()=>[_($.$slots,"main-nav-before")]),"main-nav-after":P(()=>[_($.$slots,"main-nav-after")]),comment:P(()=>[_($.$slots,"comment")]),footer:P(()=>[_($.$slots,"footer")]),aside:P(()=>[_($.$slots,"aside")]),"aside-custom":P(()=>[_($.$slots,"aside-custom")]),default:P(()=>[_($.$slots,"default")]),_:3},8,["frontmatter"])}}};export{_t as default};
