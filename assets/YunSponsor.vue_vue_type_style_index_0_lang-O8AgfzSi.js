import{d as f,D as m,I as _,l as v,k as x,o as n,b as r,h as e,f as i,v as h,g as y,F as g,z as b,C as c,x as k}from"./app-BFp5F8kb.js";const C={class:"yun-sponsor-container flex-center flex-col"},w=["title"],z={key:0,class:"sponsor-description",mb:"4",text:"sm"},B={class:"flex justify-around"},S=["href"],q=["src","title"],I=f({__name:"YunSponsor",setup(D){const{t:d}=m(),o=_(),l=v(!1),u=x(()=>{var a;return((a=o.value.sponsor)==null?void 0:a.title)??d("reward.donate")});return(a,t)=>(n(),r("div",C,[e("button",{class:"sponsor-button yun-icon-btn shadow hover:shadow-md",title:u.value,text:"red-400",onClick:t[0]||(t[0]=s=>l.value=!l.value)},t[1]||(t[1]=[e("div",{class:"mt-2px","i-ri-heart-fill":""},null,-1)]),8,w),e("div",{class:c(["qrcode-container qrcode flex-center flex-col",l.value&&"show"]),m:"y-4"},[i(o).sponsor.description?(n(),r("div",z,h(i(o).sponsor.description),1)):y("v-if",!0),e("div",B,[(n(!0),r(g,null,b(i(o).sponsor.methods,(s,p)=>(n(),r("a",{key:p,class:"flex-center flex-col animate-iteration-1 animate-fade-in",href:s.url,target:"_blank",style:k(`color:${s.color}`)},[e("img",{class:"sponsor-method-img",border:"~ rounded",p:"1",loading:"lazy",src:s.url,title:s.name},null,8,q),e("div",{text:"xl",m:"2",class:c(s.icon)},null,2)],12,S))),128))])],2)]))}});export{I as _};