import{d as f,D as m,I as _,l as v,k as x,o as n,e as r,h as s,f as i,v as h,g as y,F as g,z as k,x as C,C as c}from"./app-DQqYZsVw.js";const b={class:"yun-sponsor-container flex-center flex-col"},w=["title"],z={key:0,class:"sponsor-description",mb:"4",text:"sm"},B={class:"flex justify-around"},S=["href"],q=["src","title"],I=f({__name:"YunSponsor",setup(D){const{t:d}=m(),o=_(),l=v(!1),u=x(()=>{var a;return((a=o.value.sponsor)==null?void 0:a.title)??d("reward.donate")});return(a,t)=>(n(),r("div",b,[s("button",{class:"sponsor-button yun-icon-btn shadow hover:shadow-md",title:u.value,text:"red-400",onClick:t[0]||(t[0]=e=>l.value=!l.value)},t[1]||(t[1]=[s("div",{class:"mt-2px","i-ri-heart-fill":""},null,-1)]),8,w),s("div",{class:c(["qrcode-container qrcode flex-center flex-col",l.value&&"show"]),m:"y-4"},[i(o).sponsor.description?(n(),r("div",z,h(i(o).sponsor.description),1)):y("v-if",!0),s("div",B,[(n(!0),r(g,null,k(i(o).sponsor.methods,(e,p)=>(n(),r("a",{key:p,class:"flex-center flex-col animate-iteration-1 animate-fade-in",href:e.url,target:"_blank",style:C(`color:${e.color}`)},[s("img",{class:"sponsor-method-img",border:"~ rounded",p:"1",loading:"lazy",src:e.url,title:e.name},null,8,q),s("div",{text:"xl",m:"2",class:c(e.icon)},null,2)],12,S))),128))])],2)]))}});export{I as _};
