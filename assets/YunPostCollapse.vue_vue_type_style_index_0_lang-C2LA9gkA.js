import{d as C,A as b,l as v,q as g,k as B,y as N,o as s,e as a,h as o,x as c,f as h,F as _,t as m,aj as D,H as y,g as L,n as V,w as Y,i as E}from"./app-lTG2OWTW.js";const F={class:"post-collapse px-10 lt-sm:px-5",relative:""},I={w:"full",text:"center",class:"yun-text-light",p:"2"},M={class:"post-collapse-action",text:"center"},R={key:0,"i-ri-sort-desc":""},$={key:1,"i-ri-sort-asc":""},j={class:"collection-title","m-0":"",relative:""},q=["id"],A={class:"post-header",flex:"","items-center":"",relative:""},H={class:"post-meta"},P={key:0,class:"post-time",font:"mono",opacity:"80"},S={class:"post-title","inline-flex":"","items-center":"",font:"serif black"},z=C({__name:"YunPostCollapse",props:{posts:{}},setup(f){const p=f,{t:x}=b(),d=v([]),i=v({});g(()=>p.posts,()=>{i.value={},d.value=[],p.posts.forEach(t=>{if(!(t.hide&&t.hide!=="index")&&t.date){const e=Number.parseInt(y(t.date,"yyyy"));i.value[e]?i.value[e].push(t):(d.value.push(e),i.value[e]=[t])}})},{immediate:!0});const r=v(!0),k=B(()=>{const e=d.value.sort((u,n)=>n-u);return r.value?e:[...e].reverse()});return(t,e)=>{const u=N("RouterLink");return s(),a("div",F,[o("div",I,c(h(x)("counter.archives",t.posts.length)),1),o("div",M,[o("button",{class:"yun-icon-btn shadow hover:shadow-md",onClick:e[0]||(e[0]=n=>r.value=!r.value)},[r.value?(s(),a("div",R)):(s(),a("div",$))])]),(s(!0),a(_,null,m(k.value,n=>(s(),a("div",{key:n,m:"b-6"},[o("div",j,[o("h2",{id:`#archive-year-${n}`,class:"archive-year",text:"4xl",p:"y-2"},c(n),9,q)]),(s(!0),a(_,null,m(h(D)(i.value[n],r.value),(l,w)=>(s(),a("article",{key:w,class:"post-item",relative:""},[o("header",A,[o("div",H,[l.date?(s(),a("time",P,c(h(y)(l.date,"MM-dd")),1)):L("v-if",!0)]),o("h2",S,[V(u,{to:l.path||"",class:"post-title-link"},{default:Y(()=>[E(c(l.title),1)]),_:2},1032,["to"])])])]))),128))]))),128))])}}});export{z as _};
