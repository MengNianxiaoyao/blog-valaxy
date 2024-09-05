import{r as g,h as n}from"./index-Cvj7DyCc.js";import"./app-C1cSskVe.js";function l(i){return Object.entries(i).filter(([,e])=>!!e).map(([e,t])=>`${e}=${t}`).join("&")}function b(i){if(!i.startsWith("http"))return i;const e=new URL(i),t=e.pathname==="/"?"":e.pathname;return`${e.origin}${t}`}const c={全部:"0",想看:"1",在看:"2",看过:"3"},d={全部:"0",想玩:"1",在玩:"2",玩过:"3"},m={全部:"0",想读:"1",在读:"2",读过:"3"},p={动画:c,游戏:d,书籍:m},h={动画:"1",游戏:"2",书籍:"3"},r={动画:["全部","想看","在看","看过"],游戏:["全部","想玩","在玩","玩过"],书籍:["全部","想读","在读","读过"]};async function f(i,e){const t=Object.assign(Object.assign({},e),{collectionType:c[e.collectionType]});return await(await fetch(`${b(i)}/bilibili?${l(t)}`)).json()}async function x(i,e){const{subjectType:t}=e,a=Object.assign(Object.assign({},e),{collectionType:p[t][e.collectionType],subjectType:h[e.subjectType]});return await(await fetch(`${b(i)}/bgm?${l(a)}`)).json()}async function v(i,e){const{subjectType:t}=e,a=Object.assign(Object.assign({},e),{collectionType:p[t][e.collectionType],subjectType:h[e.subjectType]});return await(await fetch(`${b(i)}/custom?${l(a)}`)).json()}function o({activeLabel:i,labels:e,onChange:t}){const a=s=>{i!==s&&t(s)};return n("div",{class:"bbc-tabs"},e.map(s=>n("div",{class:{"bbc-tab-item":!0,"bbc-tab-item-active":s===i},key:s,onClick:()=>a(s)},s)))}function u(){return n("div",{class:"bbc-skeleton-container bbc-bangumi-item"},n("div",{class:"bbc-skeleton-avatar"}),n("div",{class:"bbc-skeleton-content bbc-bangumi-content"},n("div",{class:"bbc-skeleton-row",style:{width:"30%"}}),n("div",{class:"bbc-skeleton-row",style:{width:"60%",height:"40px"}}),n("div",{class:"bbc-skeleton-row",style:{width:"90%",height:"32px"}})))}const y=({list:i,loading:e})=>n("div",{class:"bbc-bangumi"},i.map(t=>n("div",null,e?n(u,null):n("div",{class:"bbc-bangumi-item"},n("a",{href:t.url,target:"_blank",rel:"noreferrer"},n("img",{src:t.cover,alt:"cover",loading:"lazy",referrerpolicy:"no-referrer"})),n("div",{class:"bbc-bangumi-content"},n("h3",{class:"bbc-bangumi-title"},n("a",{href:t.url,target:"_blank",rel:"noreferrer",innerHTML:t.name?t.name:t.nameCN}),t.name&&n("small",{innerHTML:t.nameCN})),n("div",{class:"bbc-bangumi-labels"},t.labels.map(a=>n("div",{class:"bbc-bangumi-label"},n("p",{class:"bbc-bangumi-label-title"},a.label),a.value&&n("p",null,a.value)))),n("p",{class:"bbc-bangumi-summary",innerHTML:t.summary}))))));function j({pageNumber:i,totalPages:e,onChange:t,onInputChange:a}){return n("div",{class:"bbc-pagination"},n("a",{class:"bbc-pagination-button",onClick:()=>t("head")},"首页"),n("a",{class:"bbc-pagination-button",onClick:()=>t("prev")},"上一页"),n("span",{class:"bbc-pagination-pagenum"},`${i} / ${e}`),n("a",{class:"bbc-pagination-button",onClick:()=>t("next")},"下一页"),n("a",{class:"bbc-pagination-button",onClick:()=>t("tail")},"尾页"),n("div",{class:"bbc-pagination-input"},n("span",null,"跳至"),n("input",{type:"text",maxLength:4,onChange:a}),n("span",null,"页")))}function k(){return n("div",{class:"bbc-empty"},n("img",{src:"https://s1.hdslb.com/bfs/static/webssr/article/empty.png",alt:"empty",referrerpolicy:"no-referrer"}))}function w({error:i}){return n("div",{class:"bbc-error"},n("img",{src:"https://s1.hdslb.com/bfs/static/jinkela/long/bitmap/error_01.png",alt:"parse failed",referrerpolicy:"no-referrer"}),n("p",null,"Σ(oﾟдﾟoﾉ) 发生了一些错误"),n("p",null,`message: ${i.message}`))}const C=`@layer bilibili-bangumi-component {
  :host {
    display: block;
    /* 基础文本颜色 */
    --bbc-text-base-color: #4c4948;
    /* 标签颜色 */
    --bbc-label-color: #FF9843;
    /* 下划线、背景之类的颜色 */
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
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 16px;
    /* height: 40px; */
  }

  .bbc-header-platform .divider {
    width: 3px;
    border-radius: 2px;
    height: 32px;
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
    color: var(--bbc-label-color);
    display: flex;
  }

  .bbc-bangumi-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 13%;
    height: 36px;
    border-right: 1px solid var(--bbc-label-color);
  }

  .bbc-bangumi-label:last-child {
    border-right: none;
  }

  .bbc-bangumi-label p {
    font-size: 14px;
    margin: 0;
    padding: 0 4px;
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
}`,T=C,L=class{constructor(i){g(this,i),this.platformLabels=["Bilibili","Bangumi"],this.subjectLabels=["动画","游戏","书籍"],this.fetchData=async()=>{try{this.loading=!0,this.error=null;let e;const t={uid:this.bilibiliUid,collectionType:this.activeCollection,pageSize:this.pageSize,pageNumber:this.pageNumber};this.activePlatform==="Bilibili"?e=await f(this.api,t):this.activePlatform==="Bangumi"?e=await x(this.api,Object.assign(Object.assign({},t),{uid:this.bgmUid,subjectType:this.activeSubject})):e=await v(this.api,Object.assign(Object.assign({},t),{subjectType:this.activeSubject})),e.code===200?this.responseData=e.data:(this.error=e,this.responseData=null)}catch(e){this.error=e,this.responseData=null}this.loading=!1},this.handlePlatformChange=e=>{this.collectionLabels=r.动画,this.activePlatform=e,this.pageNumber=1,this.activeSubject="动画",this.activeCollection="全部",this.fetchData()},this.handleSubjectChange=e=>{this.collectionLabels=r[e],this.activeSubject=e,this.pageNumber=1,this.activeCollection="全部",this.fetchData()},this.handleCollectionChange=e=>{this.activeCollection=e,this.pageNumber=1,this.fetchData()},this.scrollToTop=()=>{document.documentElement.scrollTo({top:0,behavior:"smooth"})},this.handlePageChange=e=>{const{totalPages:t}=this.responseData;switch(e){case"head":this.pageNumber=1;break;case"prev":if(this.pageNumber===1)return;this.pageNumber--;break;case"next":if(this.pageNumber===t)return;this.pageNumber++;break;case"tail":this.pageNumber=t;break}this.scrollToTop(),this.fetchData()},this.handleInputChange=e=>{const t=Number.parseInt(e.target.value);if(Object.is(t,Number.NaN))return;const{totalPages:a}=this.responseData;t<1?this.pageNumber=1:t>a?this.pageNumber=a:this.pageNumber=t,this.scrollToTop(),this.fetchData()},this.api=void 0,this.bilibiliUid=void 0,this.bgmUid=void 0,this.bilibiliEnabled=!0,this.bgmEnabled=!0,this.pageSize=15,this.customEnabled=!1,this.customLabel="自定义",this.loading=!1,this.error=void 0,this.pageNumber=1,this.responseData=void 0,this.activePlatform="Bilibili",this.activeSubject="动画",this.collectionLabels=["全部","想看","在看","看过"],this.activeCollection="全部"}componentWillLoad(){const i=[...this.platformLabels];this.customEnabled&&i.push(this.customLabel);const e=[this.bilibiliEnabled,this.bgmEnabled,this.customEnabled];this.platformLabels=i.filter((t,a)=>e[a]),this.activePlatform=this.platformLabels[0],this.fetchData()}render(){return n("div",null,n("div",{class:"bbc-header-platform"},n(o,{activeLabel:this.activePlatform,labels:this.platformLabels,onChange:this.handlePlatformChange}),this.activePlatform!=="Bilibili"&&n("div",{class:"divider"}),this.activePlatform!=="Bilibili"&&n(o,{activeLabel:this.activeSubject,labels:this.subjectLabels,onChange:this.handleSubjectChange})),n("div",null,n(o,{activeLabel:this.activeCollection,labels:this.collectionLabels,onChange:this.handleCollectionChange})),this.loading&&!this.responseData&&n(u,null),this.error&&n(w,{error:this.error}),this.responseData&&n(y,{loading:this.loading,list:this.responseData.list}),this.responseData&&this.responseData.total===0&&n(k,null),this.responseData&&n(j,{pageNumber:this.pageNumber,totalPages:this.responseData.totalPages,onChange:this.handlePageChange,onInputChange:this.handleInputChange}))}};L.style=T;export{L as bilibili_bangumi};
