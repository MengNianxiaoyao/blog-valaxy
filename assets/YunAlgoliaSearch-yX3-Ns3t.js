import{d as l,S as r,am as c,q as d,l as i,o as p,c as m,s as f,U as h}from"./app-NTAVMTHt.js";const g=l({__name:"YunAlgoliaSearch",props:{open:{type:Boolean}},setup(a){const o=a;if(r(h))throw new Error("Algolia addon is not installed");const{loaded:e,load:n,dispatchEvent:s}=(void 0)();return c(()=>o.open,()=>{o.open&&n(),e&&s()}),(u,_)=>{const t=d("AlgoliaSearchBox");return i(e)?(p(),m(t,{key:0,class:"hidden"})):f("v-if",!0)}}});export{g as default};
