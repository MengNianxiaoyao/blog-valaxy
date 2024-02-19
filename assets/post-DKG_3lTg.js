import{d as h,x as $,B as x,k as f,o as a,e as i,h as s,t as m,f as o,g as c,G as B,F as M,q as R,s as T,v as k,c as d,a as j,j as L,N,at as U,a5 as b,ae as D,au as F,l as q,w as g,ag as A,m as y,r as H}from"./app-BAUQxpX5.js";import{a as W,b as I,_ as E}from"./YunPostMeta.vue_vue_type_script_setup_true_lang-CNiYYJK3.js";const G={class:"post-copyright"},O={class:"post-copyright-author"},Q={key:0,class:"post-copyright-link"},J=["href","title"],K={class:"post-copyright-license"},X=["innerHTML"],Z=h({__name:"ValaxyCopyright",props:{url:{default:""}},setup(v){const{t:e,locale:t}=$(),n=x(),l=n.value.license.type==="zero"?"1.0":"4.0",u=n.value.license.type==="zero"?"publicdomain":"licenses",p=f(()=>{const _=n.value.license.language?n.value.license.language:t.value==="zh-CN"?"zh":"en";return`https://creativecommons.org/${u}/${n.value.license.type}/${l}/deed.${_}`}),r=f(()=>e("post.copyright.license_content",[`<a href="${p.value}" target="_blank" rel="noopener" title="CC ${`${n.value.license.type.toUpperCase()} ${l}`} ">CC ${n.value.license.type.toUpperCase()}</a>`]));return(_,C)=>(a(),i("ul",G,[s("li",O,[s("strong",null,m(o(e)("post.copyright.author")+o(e)("symbol.colon")),1),s("span",null,m(o(n).author.name),1)]),_.url?(a(),i("li",Q,[s("strong",null,m(o(e)("post.copyright.link")+o(e)("symbol.colon")),1),s("a",{href:_.url,target:"_blank",title:o(e)("post.copyright.link")},m(decodeURI(_.url)),9,J)])):c("v-if",!0),s("li",K,[s("strong",null,m(o(e)("post.copyright.license_title")+o(e)("symbol.colon")),1),s("span",{innerHTML:r.value},null,8,X)])]))}}),ee={class:"yun-sponsor-container flex-center flex-col"},te=["title"],ne=s("div",{"i-ri-heart-line":""},null,-1),oe=[ne],se={key:0,class:"sponsor-description",mb:"4",text:"sm"},ae={class:"flex justify-around"},le=["href"],ie=["src","title"],re=h({__name:"YunSponsor",setup(v){const{t:e}=$(),t=x(),n=B(!1),l=f(()=>{var u;return((u=t.value.sponsor)==null?void 0:u.title)??e("reward.donate")});return(u,p)=>(a(),i("div",ee,[s("button",{class:"sponsor-button yun-icon-btn shadow hover:shadow-md",title:l.value,text:"red-400",onClick:p[0]||(p[0]=r=>n.value=!n.value)},oe,8,te),s("div",{class:k(["qrcode-container qrcode flex-center flex-col",n.value&&"show"]),m:"y-4"},[o(t).sponsor.description?(a(),i("div",se,m(o(t).sponsor.description),1)):c("v-if",!0),s("div",ae,[(a(!0),i(M,null,R(o(t).sponsor.methods,(r,_)=>(a(),i("a",{key:_,class:"flex-center flex-col animate-iteration-1 animate-fade-in",href:r.url,target:"_blank",style:T(`color:${r.color}`)},[s("img",{class:"sponsor-method-img",border:"~ rounded",p:"1",loading:"lazy",src:r.url,title:r.name},null,8,ie),s("div",{text:"xl",m:"2",class:k(r.icon)},null,2)],12,le))),128))])],2)]))}}),ce={class:"inline-flex",text:"sm",py:"1"},ue={key:1,mx:"2"},pe=h({__name:"YunPostCategoriesAndTags",props:{frontmatter:{}},setup(v){return(e,t)=>{const n=W,l=I;return a(),i("div",ce,[e.frontmatter.categories?(a(),d(n,{key:0,categories:e.frontmatter.categories},null,8,["categories"])):c("v-if",!0),e.frontmatter.categories&&e.frontmatter.tags?(a(),i("span",ue)):c("v-if",!0),e.frontmatter.tags?(a(),d(l,{key:2,tags:e.frontmatter.tags},null,8,["tags"])):c("v-if",!0)])}}}),_e={key:0,flex:"~",text:"sm",my:"1",h:"5"},me=["title"],de=s("div",{"inline-flex":"","i-ri-eye-line":""},null,-1),fe=["data-path"],he=["title"],ve=s("div",{"inline-flex":"","i-ri-chat-4-line":""},null,-1),ge=["data-path"],ye=h({__name:"YunWalineMeta",setup(v){const e=j(),t=L(),n=f(()=>t.value.addons["valaxy-addon-waline"]),{t:l}=$();return(u,p)=>n.value&&n.value.options?(a(),i("div",_e,[n.value.options.pageview?(a(),i("div",{key:0,"inline-flex":"",justify:"center",items:"center",mx:"2",title:o(l)("post.pageview_count")},[de,s("span",{"ml-1":"","inline-flex":"",class:"waline-pageview-count","data-path":o(e).path},null,8,fe)],8,me)):c("v-if",!0),n.value.options.comment?(a(),i("div",{key:1,"inline-flex":"",justify:"center",items:"center",mx:"2",title:o(l)("post.comment_count")},[ve,s("span",{"ml-1":"","inline-flex":"",class:"waline-comment-count","data-path":o(e).path},null,8,ge)],8,he)):c("v-if",!0)])):c("v-if",!0)}}),Ce=h({__name:"post",setup(v){const e=x(),t=N(),n=U(),l=f(()=>typeof t.value.sponsor=="boolean"?t.value.sponsor:e.value.sponsor.enable),u={"@type":"BlogPosting",headline:t.value.title,description:t.value.description,author:[{name:e.value.author.name,url:e.value.author.link}],datePublished:b(t.value.date).toDate(),dateModified:b(t.value.updated).toDate()},p=t.value.image||t.value.cover;return p&&(u.image=p),D(F(u)),(r,_)=>{const C=E,w=ye,Y=pe,P=re,S=Z,V=q("RouterView");return a(),d(V,null,{default:g(({Component:z})=>[(a(),d(A(z),null,{"main-header-after":g(()=>[y(C,{frontmatter:o(t)},null,8,["frontmatter"]),y(w),y(Y,{frontmatter:o(t)},null,8,["frontmatter"])]),"main-content-after":g(()=>[l.value?(a(),d(P,{key:0,m:"t-6"})):c("v-if",!0),o(t).copyright||o(e).license.enabled?(a(),d(S,{key:1,url:o(n),m:"y-4"},null,8,["url"])):c("v-if",!0)]),"aside-custom":g(()=>[H(r.$slots,"aside-custom")]),_:2},1024))]),_:3})}}});export{Ce as default};
