import{T as P,u as C,l as B,e as S,f as T}from"./app.53q-VOU4.js";import{_ as I}from"./YunComment.vue_vue_type_style_index_0_lang.0BcroXgB.js";import{_ as V}from"./YunSponsor.vue_vue_type_style_index_0_lang.C2-KSMbH.js";import{u as F}from"./chunks/@vueuse/motion.BltUbIEt.js";import{I as h,ad as n,ac as t,al as Y,af as s,ak as w,H as L,A as g,ai as _,ag as j,L as p,an as k,ab as b,ae as H,G as N,F as $,Z as v,am as x,aj as R}from"./framework.Wgu5ILjI.js";import{c as z}from"./index.BRXJGymZ.js";import"./chunks/dayjs.Byk5cVHE.js";import{u as M}from"./chunks/vue-i18n.CibY5xOG.js";import"./chunks/vue-router.BWFxP7XC.js";import"./chunks/nprogress.D5EDvs9V.js";import"./chunks/pinia.3e7st_eH.js";import"./index.C5okkQwF.js";const D=["href"],U=h({__name:"YunProjectLinkItem",props:{item:{}},setup(f){return(e,l)=>(t(),n("a",{class:"yun-project-link-item inline-flex items-center justify-center flex-1 p-2 h-full text-white",href:e.item.url,target:"_blank",style:Y({"--c-brand":e.item.color})},[s("div",{class:w(e.item.icon)},null,2)],12,D))}}),A={key:0,class:"mt-4"},E=["href"],G={text:"lg",font:"bold",m:"2"},J=["innerHTML"],W={flex:"~ center",class:"absolute left-0 right-0 bottom-0 h-10"},Z=h({__name:"YunProjectCard",props:{i:{},project:{}},setup(f){const e=f,l=L();F(l,{initial:{opacity:0,y:50},enter:{opacity:1,y:0,transition:{delay:e.i*50,type:"spring",ease:z.easeIn,damping:8,duration:400}}});const u=g(()=>{const o={color:e.project.textColor};if(e.project.color&&(typeof e.project.gradient>"u"||e.project.gradient)){const c=new P(e.project.color);o["--un-gradient-stops"]=`${c.spin(55).toHexString()}, ${e.project.color}`,o.color||(o.color=c.isDark()?"white":"black")}else o.backgroundColor=e.project.color||"rgba(255,255,255,0.9)",o.color||(o.color="black");return o}),r=g(()=>e.project.github?`https://github.com/${e.project.github}`:`https://github.com/YunYouJun/${e.project.name}`),m=g(()=>e.project.npm?`https://www.npmjs.com/package/${e.project.npm}`:""),a=g(()=>e.project.url||r.value),d=g(()=>[{url:a.value,icon:"i-ri-global-line",color:"#6eb7f9"},{url:e.project.docs,icon:"i-ri-book-line",color:"#443ed1"},{url:r.value,icon:"i-ri-github-line",color:"black"},{url:m.value,icon:"i-ri-npmjs-line",color:"red"}]);return(o,c)=>{const i=U;return t(),n("div",{ref_key:"cardRef",ref:l,flex:"~ col center",class:"m-2 w-90 transform rounded shadow-md grayscale-30",bg:"opacity-80 gradient-to-br",p:"x-2 b-12",hover:"shadow-lg grayscale-0",style:Y(u.value)},[o.project.emoji?(t(),n("div",A,j(o.project.emoji),1)):_("v-if",!0),s("a",{href:a.value,target:"_blank",class:"text-unset"},[s("h2",G,j(o.project.name||"忘记叫啥了"),1)],8,E),s("small",{class:"block",p:"2",text:"center",innerHTML:o.project.desc||"说点什么好呢"},null,8,J),s("div",W,[(t(!0),n(p,null,k(d.value,y=>(t(),n(p,{key:y.icon},[y.url?(t(),b(i,{key:0,item:y},null,8,["item"])):_("v-if",!0)],64))),128))])],4)}}}),q={class:"w-full flex justify-center",text:"xl",font:"black",m:"b-2 t-4"},K=h({__name:"YunProjectCollection",props:{title:{},projects:{}},setup(f){return(e,l)=>{const u=Z;return t(),n(p,null,[s("div",q,j(e.title),1),(t(!0),n(p,null,k(e.projects,(r,m)=>(t(),b(u,{key:m,project:r,i:m},null,8,["project","i"]))),128))],64)}}}),O=h({__name:"YunProjectToggleButton",props:{active:{type:Boolean}},setup(f){return(e,l)=>(t(),n("button",{class:w(["bg-white-90 m-2 inline-flex items-center justify-center rounded px-2 gap-2 h-8",{"bg-blue-500 text-white":e.active,"hover:bg-$va-c-bg-soft":!e.active}])},[H(e.$slots,"default")],2))}}),Q={flex:"~ col center"},X={class:"mb-3 text-2xl"},ee={flex:"~ wrap",justify:"center"},te={class:"inline-flex"},oe={class:"inline-flex"},ne={flex:"~ wrap",justify:"center"},re=h({__name:"YunProjects",setup(f){const e=C(),{t:l}=M(),u=N(e.value.projects),r=L("all");return(m,a)=>{const d=O,o=K;return t(),n("div",Q,[s("h2",X,j($(e).title||$(l)("title.projects")),1),s("div",ee,[v(d,{active:r.value==="all",onClick:a[0]||(a[0]=c=>r.value="all")},{default:x(()=>a[1]||(a[1]=[R(" 全部 ")])),_:1},8,["active"]),(t(!0),n(p,null,k(u,(c,i)=>(t(),b(d,{key:i,active:i===r.value,onClick:y=>r.value=i},{default:x(()=>[s("span",te,j(c.emoji),1),s("span",oe,j(c.title),1)]),_:2},1032,["active","onClick"]))),128))]),s("div",ne,[(t(!0),n(p,null,k(u,(c,i)=>(t(),n(p,{key:i},[r.value==="all"||r.value===i?(t(),b(o,{key:0,title:c.title,projects:u[i].collection},null,8,["title","projects"])):_("v-if",!0)],64))),128))])])}}}),se={flex:"~ col"},ge=h({__name:"projects",setup(f){const e=B(),l=C();return(u,r)=>{const m=re,a=V,d=I,o=S,c=T;return t(),n(p,null,[v(o,null,{default:x(()=>[s("div",se,[v(m),_(" <YunLayoutLeft /> "),_(" <RouterView /> "),_(" <YunLayoutRight /> "),v(a,{class:"mt-4"}),$(e).comment.enable&&$(l).comment!==!1?(t(),b(d,{key:0,class:"max-w-4xl m-auto"})):_("v-if",!0)])]),_:1}),v(c)],64)}}});export{ge as default};
