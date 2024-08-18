import{d as v,A as k,D as C,k as h,o as s,e as i,h as a,x as m,f as o,g as c,l as T,F as Y,t as L,z as x,v as U,c as d,a as j,j as A,Q as D,at as F,I as b,af as N,au as H,y as I,w as f,r as w,n as y,ah as W,ae as q}from"./app-BNtSUkSn.js";import{a as Q,b as E,_ as O}from"./YunPostMeta.vue_vue_type_script_setup_true_lang-Gxd-JM4Y.js";import"./composable-DIllJU0J.js";import"./index-CDwuVsfv.js";const G={class:"post-copyright"},J={class:"post-copyright-author"},K={key:0,class:"post-copyright-link"},X=["href","title"],Z={class:"post-copyright-license"},ee=["innerHTML"],te=v({__name:"ValaxyCopyright",props:{url:{default:""}},setup(g){const{t:e,locale:t}=k(),n=C(),r=n.value.license.type==="zero"?"1.0":"4.0",u=n.value.license.type==="zero"?"publicdomain":"licenses",p=h(()=>{const _=n.value.license.language?n.value.license.language:t.value==="zh-CN"?"zh":"en";return`https://creativecommons.org/${u}/${n.value.license.type}/${r}/deed.${_}`}),l=h(()=>e("post.copyright.license_content",[`<a href="${p.value}" target="_blank" rel="noopener" title="CC ${`${n.value.license.type.toUpperCase()} ${r}`} ">CC ${n.value.license.type.toUpperCase()}</a>`]));return(_,$)=>(s(),i("ul",G,[a("li",J,[a("strong",null,m(o(e)("post.copyright.author")+o(e)("symbol.colon")),1),a("span",null,m(o(n).author.name),1)]),_.url?(s(),i("li",K,[a("strong",null,m(o(e)("post.copyright.link")+o(e)("symbol.colon")),1),a("a",{href:_.url,target:"_blank",title:o(e)("post.copyright.link")},m(decodeURI(_.url)),9,X)])):c("v-if",!0),a("li",Z,[a("strong",null,m(o(e)("post.copyright.license_title")+o(e)("symbol.colon")),1),a("span",{innerHTML:l.value},null,8,ee)])]))}}),ne={class:"yun-sponsor-container flex-center flex-col"},oe=["title"],se=a("div",{"i-ri-heart-line":""},null,-1),ae=[se],le={key:0,class:"sponsor-description",mb:"4",text:"sm"},ie={class:"flex justify-around"},re=["href"],ce=["src","title"],ue=v({__name:"YunSponsor",setup(g){const{t:e}=k(),t=C(),n=T(!1),r=h(()=>{var u;return((u=t.value.sponsor)==null?void 0:u.title)??e("reward.donate")});return(u,p)=>(s(),i("div",ne,[a("button",{class:"sponsor-button yun-icon-btn shadow hover:shadow-md",title:r.value,text:"red-400",onClick:p[0]||(p[0]=l=>n.value=!n.value)},ae,8,oe),a("div",{class:x(["qrcode-container qrcode flex-center flex-col",n.value&&"show"]),m:"y-4"},[o(t).sponsor.description?(s(),i("div",le,m(o(t).sponsor.description),1)):c("v-if",!0),a("div",ie,[(s(!0),i(Y,null,L(o(t).sponsor.methods,(l,_)=>(s(),i("a",{key:_,class:"flex-center flex-col animate-iteration-1 animate-fade-in",href:l.url,target:"_blank",style:U(`color:${l.color}`)},[a("img",{class:"sponsor-method-img",border:"~ rounded",p:"1",loading:"lazy",src:l.url,title:l.name},null,8,ce),a("div",{text:"xl",m:"2",class:x(l.icon)},null,2)],12,re))),128))])],2)]))}}),pe={class:"inline-flex",text:"sm",py:"1"},_e={key:1,mx:"2"},de=v({__name:"YunPostCategoriesAndTags",props:{frontmatter:{}},setup(g){return(e,t)=>{const n=Q,r=E;return s(),i("div",pe,[e.frontmatter.categories?(s(),d(n,{key:0,categories:e.frontmatter.categories},null,8,["categories"])):c("v-if",!0),e.frontmatter.categories&&e.frontmatter.tags?(s(),i("span",_e)):c("v-if",!0),e.frontmatter.tags?(s(),d(r,{key:2,tags:e.frontmatter.tags},null,8,["tags"])):c("v-if",!0)])}}}),me={key:0,flex:"~",text:"sm",my:"1",h:"5"},fe=["title"],he=a("div",{"inline-flex":"","i-ri-eye-line":""},null,-1),ve=["data-path"],ge=["title"],ye=a("div",{"inline-flex":"","i-ri-chat-4-line":""},null,-1),$e=["data-path"],ke=v({__name:"YunWalineMeta",setup(g){const e=j(),t=A(),n=h(()=>t.value.addons["valaxy-addon-waline"]),{t:r}=k();return(u,p)=>n.value&&n.value.options?(s(),i("div",me,[n.value.options.pageview?(s(),i("div",{key:0,"inline-flex":"",justify:"center",items:"center",mx:"2",title:o(r)("post.pageview_count")},[he,a("span",{"ml-1":"","inline-flex":"",class:"waline-pageview-count","data-path":o(e).path},null,8,ve)],8,fe)):c("v-if",!0),n.value.options.comment?(s(),i("div",{key:1,"inline-flex":"",justify:"center",items:"center",mx:"2",title:o(r)("post.comment_count")},[ye,a("span",{"ml-1":"","inline-flex":"",class:"waline-comment-count","data-path":o(e).path},null,8,$e)],8,ge)):c("v-if",!0)])):c("v-if",!0)}}),Ye=v({__name:"post",setup(g){const e=C(),t=D(),n=F(),r=h(()=>typeof t.value.sponsor=="boolean"?t.value.sponsor:e.value.sponsor.enable),u={"@type":"BlogPosting",headline:t.value.title,description:t.value.description,author:[{name:e.value.author.name,url:e.value.author.link}],datePublished:b(t.value.date||""),dateModified:b(t.value.updated||"")},p=t.value.image||t.value.cover;return p&&(u.image=p),N(H(u)),(l,_)=>{const $=q,S=O,z=ke,P=de,V=ue,B=te,M=I("RouterView");return s(),i(Y,null,[l.$slots["sidebar-child"]?(s(),d($,{key:0},{default:f(()=>[w(l.$slots,"sidebar-child")]),_:3})):(s(),d($,{key:1})),y(M,null,{default:f(({Component:R})=>[(s(),d(W(R),null,{"main-header-after":f(()=>[y(S,{frontmatter:o(t)},null,8,["frontmatter"]),y(z),y(P,{frontmatter:o(t)},null,8,["frontmatter"])]),"main-content-after":f(()=>[r.value?(s(),d(V,{key:0,m:"t-6"})):c("v-if",!0),o(t).copyright||o(e).license.enabled?(s(),d(B,{key:1,url:o(n),m:"y-4"},null,8,["url"])):c("v-if",!0)]),"aside-custom":f(()=>[w(l.$slots,"aside-custom")]),_:2},1024))]),_:3})],64)}}});export{Ye as default};
