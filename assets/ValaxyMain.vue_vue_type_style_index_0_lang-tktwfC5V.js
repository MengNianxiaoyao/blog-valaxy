import{d as g,z as R,x as K,o as l,e as _,F as st,s as Ct,f as i,h as c,v as h,c as y,g as d,y as N,_ as nt,H as me,l as D,I as ve,J as he,K as Et,L as It,n as b,M as Lt,N as St,O as at,P as ge,r as f,Q as be,j as Ot,k as O,D as rt,a as At,R as ye,S as Tt,U as xt,V as ke,W as we,X as $e,Y as Ce,Z as Ee,w as C,$ as Ie,a0 as Le,m as Vt,a1 as Nt,a2 as Se,a3 as W,a4 as Oe,a5 as Ae,a6 as Te,a7 as xe,a8 as Ve,a9 as Ne,aa as G,ab as ze,A as Re,ac as Me,u as Ye,ad as De,t as He}from"./app-BNBJTLMc.js";import{_ as Pe}from"./YunFooter.vue_vue_type_style_index_0_lang-B4Jfhjaq.js";import{_ as zt}from"./YunCard.vue_vue_type_script_setup_true_lang-Dpcv1fRl.js";import{_ as Be}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-JhOCs2xz.js";import{s as gt}from"./index-C7yU5XnD.js";const Fe=["lang"],je=["href"],Ue=g({__name:"YunOutlineItem",props:{headers:{},onClick:{type:Function},root:{type:Boolean}},setup(t){const{locale:e}=R();return(o,s)=>{const n=K("YunOutlineItem",!0);return l(),_("ul",{class:N(o.root?"root":"nested")},[(l(!0),_(st,null,Ct(o.headers,({children:a,link:u,title:m,lang:p})=>(l(),_("li",{key:u,class:"va-toc-item",lang:p||i(e)},[c("a",{class:"outline-link",href:u,onClick:s[0]||(s[0]=(...w)=>o.onClick&&o.onClick(...w))},h(m),9,je),a!=null&&a.length?(l(),y(n,{key:0,headers:a,"on-click":o.onClick},null,8,["headers","on-click"])):d("v-if",!0)],8,Fe))),128))],2)}}}),We=nt(Ue,[["__scopeId","data-v-57a5c8c2"]]),Ge=t=>(Lt("data-v-6464aec3"),t=t(),St(),t),qe={class:"content"},Ke={class:"outline-title"},Je={"aria-labelledby":"doc-outline-aria-label"},Ze=Ge(()=>c("span",{id:"doc-outline-aria-label",class:"visually-hidden"}," Table of Contents for current page ",-1)),Qe=g({__name:"YunOutline",setup(t){const e=me(),o=D(),s=D();ve(o,s);const{headers:n,handleClick:a}=he();return(u,m)=>{const p=We;return Et((l(),_("div",{ref_key:"container",ref:o},[c("div",qe,[c("div",Ke,h(i(e).outlineTitle||"On this page"),1),c("div",{ref_key:"marker",ref:s,class:"outline-marker"},null,512),c("nav",Je,[Ze,b(p,{class:"va-toc relative z-1 css-i18n-toc",headers:i(n),"on-click":i(a),root:""},null,8,["headers","on-click"])])])],512)),[[It,i(n).length]])}}}),Xe=nt(Qe,[["__scopeId","data-v-6464aec3"]]),to=c("div",{"i-ri-file-list-line":""},null,-1),eo=[to],oo={class:"aside-container",flex:"~ col"},so={key:0,m:"t-6 b-2",font:"serif black"},no=c("div",{class:"flex-grow"},null,-1),ao={key:2,class:"custom-container"},ro=g({__name:"YunAside",setup(t){const e=at(),{t:o}=R(),s=ge();return(n,a)=>{const u=be,m=Xe;return l(),_(st,null,[c("button",{class:"xl:hidden toc-btn shadow fixed yun-icon-btn z-350",opacity:"75",right:"2",bottom:"19",onClick:a[0]||(a[0]=p=>i(s).toggleRightSidebar())},eo),b(u,{show:i(s).isRightSidebarOpen,onClick:a[1]||(a[1]=p=>i(s).toggleRightSidebar())},null,8,["show"]),d("  "),c("aside",{class:N(["va-card yun-aside",i(s).isRightSidebarOpen&&"open"]),m:"l-4",text:"center",overflow:"auto"},[c("div",oo,[i(e).toc!==!1?(l(),_("h2",so,h(i(o)("sidebar.toc")),1)):d("v-if",!0),i(e).toc!==!1?(l(),y(m,{key:1})):d("v-if",!0),no,n.$slots.default?(l(),_("div",ao,[f(n.$slots,"default")])):d("v-if",!0)])],2)],64)}}});function Rt(){const t=Ot();return O(()=>t.value.addons["valaxy-addon-twikoo"])}function Mt(t,e="latest"){const o=rt(),s=O(()=>o.value.cdn.prefix),n=At(),{locale:a}=R();function u(m){if(!Tt)return;const p={el:".comment #tcomment",lang:a.value,path:n.path},w=Object.assign(p,m||{});return window.twikoo.init(w)}ye(`${s.value}twikoo@${e}/dist/twikoo.all.min.js`,()=>{t.value&&u(t.value)})}function Yt(t="latest"){const e=Rt(),o=O(()=>e.value.options);Mt(o,t)}const io=Object.freeze(Object.defineProperty({__proto__:null,useAddonTwikoo:Rt,useTwikoo:Mt,useTwikooWithOptions:Yt},Symbol.toStringTag,{value:"Module"})),co=c("div",{id:"tcomment",w:"full"},null,-1),lo=[co],uo=g({__name:"YunTwikoo",setup(t){return xt(io)||Yt(),(e,o)=>(l(),_("div",null,lo))}}),fo=g({__name:"YunWaline",setup(t){if(xt(ke))throw new Error("Please install valaxy-addon-waline");const e=(void 0)();return(o,s)=>{const n=K("WalineClient");return l(),y(n,{w:"full",options:i(e).options||{serverURL:""}},null,8,["options"])}}}),_o=t=>(Lt("data-v-df122963"),t=t(),St(),t),po={class:"relative h-8 w-30 text-[var(--va-c-text-2)] z-100"},mo=_o(()=>c("div",{"inline-flex":"","i-ri-arrow-down-s-line":""},null,-1)),vo={class:"select-options absolute translate-y-1 left-0 top-full w-full bg-[var(--va-c-bg-light)] overflow-hidden rounded-1 border"},ho=["onClick"],go=g({__name:"YunSelect",props:we({options:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const e=$e(t,"modelValue"),o=D(!1);return Ce("click",()=>{o.value=!1}),(s,n)=>(l(),_("div",po,[c("button",{class:N(["flex h-full w-full px-2 items-center justify-between border rounded-2 transition",o.value?"border-[var(--va-c-primary)] shadow-lg":""]),onClick:n[0]||(n[0]=Ee(a=>o.value=!0,["stop"]))},[c("span",null,h(e.value),1),mo],2),b(Ie,{persisted:""},{default:C(()=>[Et(c("ul",vo,[(l(!0),_(st,null,Ct(s.options,a=>(l(),_("li",{key:a,class:"cursor-pointer list-none px-2 hover:bg-[var(--va-c-primary-lighter)] hover:text-white",onClick:u=>e.value=a},h(a),9,ho))),128))],512),[[It,o.value]])]),_:1})]))}}),bo=nt(go,[["__scopeId","data-v-df122963"]]),yo={key:0,class:"flex justify-end w-full mb-2"},ko=g({__name:"YunComment",setup(t){const e=Ot(),o=["valaxy-addon-waline","valaxy-addon-twikoo"],s=O(()=>o.filter(a=>e.value.addons[a]).map(a=>a.split("-")[2])),n=D(s.value[0]);return(a,u)=>{const m=bo,p=fo,w=uo,r=K("ClientOnly"),S=zt;return l(),y(S,{w:"full",p:"4",class:"comment yun-comment sm:p-6 lg:px-12 xl:px-16"},{default:C(()=>[b(r,null,{default:C(()=>[s.value.length>1?(l(),_("div",yo,[b(m,{modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=Y=>n.value=Y),options:s.value},null,8,["modelValue","options"])])):d("v-if",!0),n.value==="waline"?(l(),y(p,{key:1})):d("v-if",!0),n.value==="twikoo"?(l(),y(w,{key:2})):d("v-if",!0),f(a.$slots,"default")]),_:3})]),_:3})}}}),wo={class:"post-nav"},$o={class:"post-nav-item"},Co=c("div",{class:"icon","i-ri-arrow-left-s-line":""},null,-1),Eo={class:"title truncate",text:"sm"},Io={class:"post-nav-item"},Lo={class:"title truncate",text:"sm"},So=c("div",{class:"icon","i-ri-arrow-right-s-line":""},null,-1),Oo=g({__name:"YunPostNav",setup(t){const[e,o]=Le();return(s,n)=>{const a=K("RouterLink");return l(),_("div",wo,[c("div",$o,[i(e)?(l(),y(a,{key:0,class:"post-nav-prev",to:i(e).path||"",title:i(e).title},{default:C(()=>[Co,c("span",Eo,h(i(e).title),1)]),_:1},8,["to","title"])):d("v-if",!0)]),c("div",Io,[i(o)?(l(),y(a,{key:0,to:i(o).path||"",title:i(o).title,class:"post-nav-next"},{default:C(()=>[c("span",Lo,h(i(o).title),1),So]),_:1},8,["to","title"])):d("v-if",!0)])])}}}),I=typeof window<"u",Dt=I&&!("onscroll"in window)||typeof navigator<"u"&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),Ht=I&&"IntersectionObserver"in window,Pt=I&&"classList"in document.createElement("p"),Bt=I&&window.devicePixelRatio>1,Ao={elements_selector:".lazy",container:Dt||I?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},Ft=t=>Object.assign({},Ao,t),bt=function(t,e){let o;const s="LazyLoad::Initialized",n=new t(e);try{o=new CustomEvent(s,{detail:{instance:n}})}catch{o=document.createEvent("CustomEvent"),o.initCustomEvent(s,!1,!1,{instance:n})}window.dispatchEvent(o)},To=(t,e)=>{if(e)if(!e.length)bt(t,e);else for(let o=0,s;s=e[o];o+=1)bt(t,s)},$="src",it="srcset",ct="sizes",jt="poster",P="llOriginalAttrs",Ut="data",lt="loading",Wt="loaded",Gt="applied",xo="entered",ut="error",qt="native",Kt="data-",Jt="ll-status",v=(t,e)=>t.getAttribute(Kt+e),Vo=(t,e,o)=>{const s=Kt+e;if(o===null){t.removeAttribute(s);return}t.setAttribute(s,o)},B=t=>v(t,Jt),T=(t,e)=>Vo(t,Jt,e),J=t=>T(t,null),dt=t=>B(t)===null,No=t=>B(t)===lt,zo=t=>B(t)===ut,ft=t=>B(t)===qt,Ro=[lt,Wt,Gt,ut],Mo=t=>Ro.indexOf(B(t))>=0,L=(t,e,o,s)=>{if(!(!t||typeof t!="function")){if(s!==void 0){t(e,o,s);return}if(o!==void 0){t(e,o);return}t(e)}},M=(t,e)=>{if(e!==""){if(Pt){t.classList.add(e);return}t.className+=(t.className?" ":"")+e}},k=(t,e)=>{if(e!==""){if(Pt){t.classList.remove(e);return}t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")}},Yo=t=>{t.llTempImage=document.createElement("IMG")},Do=t=>{delete t.llTempImage},Zt=t=>t.llTempImage,Z=(t,e)=>{if(!e)return;const o=e._observer;o&&o.unobserve(t)},Ho=t=>{t.disconnect()},Po=(t,e,o)=>{e.unobserve_entered&&Z(t,o)},_t=(t,e)=>{t&&(t.loadingCount+=e)},Bo=t=>{t&&(t.toLoadCount-=1)},Qt=(t,e)=>{t&&(t.toLoadCount=e)},Fo=t=>t.loadingCount>0,jo=t=>t.toLoadCount>0,Xt=t=>{let e=[];for(let o=0,s;s=t.children[o];o+=1)s.tagName==="SOURCE"&&e.push(s);return e},pt=(t,e)=>{const o=t.parentNode;if(!o||o.tagName!=="PICTURE")return;Xt(o).forEach(e)},te=(t,e)=>{Xt(t).forEach(e)},Q=[$],ee=[$,jt],H=[$,it,ct],oe=[Ut],X=t=>!!t[P],se=t=>t[P],ne=t=>delete t[P],z=(t,e)=>{if(X(t))return;const o={};e.forEach(s=>{o[s]=t.getAttribute(s)}),t[P]=o},Uo=t=>{X(t)||(t[P]={backgroundImage:t.style.backgroundImage})},Wo=(t,e,o)=>{if(!o){t.removeAttribute(e);return}t.setAttribute(e,o)},A=(t,e)=>{if(!X(t))return;const o=se(t);e.forEach(s=>{Wo(t,s,o[s])})},Go=t=>{if(!X(t))return;const e=se(t);t.style.backgroundImage=e.backgroundImage},ae=(t,e,o)=>{M(t,e.class_applied),T(t,Gt),o&&(e.unobserve_completed&&Z(t,e),L(e.callback_applied,t,o))},re=(t,e,o)=>{M(t,e.class_loading),T(t,lt),o&&(_t(o,1),L(e.callback_loading,t,o))},E=(t,e,o)=>{o&&t.setAttribute(e,o)},yt=(t,e)=>{E(t,ct,v(t,e.data_sizes)),E(t,it,v(t,e.data_srcset)),E(t,$,v(t,e.data_src))},qo=(t,e)=>{pt(t,o=>{z(o,H),yt(o,e)}),z(t,H),yt(t,e)},Ko=(t,e)=>{z(t,Q),E(t,$,v(t,e.data_src))},Jo=(t,e)=>{te(t,o=>{z(o,Q),E(o,$,v(o,e.data_src))}),z(t,ee),E(t,jt,v(t,e.data_poster)),E(t,$,v(t,e.data_src)),t.load()},Zo=(t,e)=>{z(t,oe),E(t,Ut,v(t,e.data_src))},Qo=(t,e,o)=>{const s=v(t,e.data_bg),n=v(t,e.data_bg_hidpi),a=Bt&&n?n:s;a&&(t.style.backgroundImage=`url("${a}")`,Zt(t).setAttribute($,a),re(t,e,o))},Xo=(t,e,o)=>{const s=v(t,e.data_bg_multi),n=v(t,e.data_bg_multi_hidpi),a=Bt&&n?n:s;a&&(t.style.backgroundImage=a,ae(t,e,o))},ts=(t,e,o)=>{const s=v(t,e.data_bg_set);if(!s)return;const n=s.split("|");let a=n.map(u=>`image-set(${u})`);t.style.backgroundImage=a.join(),t.style.backgroundImage===""&&(a=n.map(u=>`-webkit-image-set(${u})`),t.style.backgroundImage=a.join()),ae(t,e,o)},ie={IMG:qo,IFRAME:Ko,VIDEO:Jo,OBJECT:Zo},es=(t,e)=>{const o=ie[t.tagName];o&&o(t,e)},os=(t,e,o)=>{const s=ie[t.tagName];s&&(s(t,e),re(t,e,o))},ss=["IMG","IFRAME","VIDEO","OBJECT"],ns=t=>ss.indexOf(t.tagName)>-1,ce=(t,e)=>{e&&!Fo(e)&&!jo(e)&&L(t.callback_finish,e)},kt=(t,e,o)=>{t.addEventListener(e,o),t.llEvLisnrs[e]=o},as=(t,e,o)=>{t.removeEventListener(e,o)},mt=t=>!!t.llEvLisnrs,rs=(t,e,o)=>{mt(t)||(t.llEvLisnrs={});const s=t.tagName==="VIDEO"?"loadeddata":"load";kt(t,s,e),kt(t,"error",o)},ot=t=>{if(!mt(t))return;const e=t.llEvLisnrs;for(let o in e){const s=e[o];as(t,o,s)}delete t.llEvLisnrs},le=(t,e,o)=>{Do(t),_t(o,-1),Bo(o),k(t,e.class_loading),e.unobserve_completed&&Z(t,o)},is=(t,e,o,s)=>{const n=ft(e);le(e,o,s),M(e,o.class_loaded),T(e,Wt),L(o.callback_loaded,e,s),n||ce(o,s)},cs=(t,e,o,s)=>{const n=ft(e);le(e,o,s),M(e,o.class_error),T(e,ut),L(o.callback_error,e,s),o.restore_on_error&&A(e,H),n||ce(o,s)},vt=(t,e,o)=>{const s=Zt(t)||t;if(mt(s))return;rs(s,u=>{is(u,t,e,o),ot(s)},u=>{cs(u,t,e,o),ot(s)})},ls=(t,e,o)=>{Yo(t),vt(t,e,o),Uo(t),Qo(t,e,o),Xo(t,e,o),ts(t,e,o)},us=(t,e,o)=>{vt(t,e,o),os(t,e,o)},ht=(t,e,o)=>{ns(t)?us(t,e,o):ls(t,e,o)},ds=(t,e,o)=>{t.setAttribute("loading","lazy"),vt(t,e,o),es(t,e),T(t,qt)},wt=t=>{t.removeAttribute($),t.removeAttribute(it),t.removeAttribute(ct)},fs=t=>{pt(t,e=>{wt(e)}),wt(t)},ue=t=>{pt(t,e=>{A(e,H)}),A(t,H)},_s=t=>{te(t,e=>{A(e,Q)}),A(t,ee),t.load()},ps=t=>{A(t,Q)},ms=t=>{A(t,oe)},vs={IMG:ue,IFRAME:ps,VIDEO:_s,OBJECT:ms},hs=t=>{const e=vs[t.tagName];if(!e){Go(t);return}e(t)},gs=(t,e)=>{dt(t)||ft(t)||(k(t,e.class_entered),k(t,e.class_exited),k(t,e.class_applied),k(t,e.class_loading),k(t,e.class_loaded),k(t,e.class_error))},bs=(t,e)=>{hs(t),gs(t,e),J(t),ne(t)},ys=(t,e,o,s)=>{o.cancel_on_exit&&No(t)&&t.tagName==="IMG"&&(ot(t),fs(t),ue(t),k(t,o.class_loading),_t(s,-1),J(t),L(o.callback_cancel,t,e,s))},ks=(t,e,o,s)=>{const n=Mo(t);T(t,xo),M(t,o.class_entered),k(t,o.class_exited),Po(t,o,s),L(o.callback_enter,t,e,s),!n&&ht(t,o,s)},ws=(t,e,o,s)=>{dt(t)||(M(t,o.class_exited),ys(t,e,o,s),L(o.callback_exit,t,e,s))},$s=["IMG","IFRAME","VIDEO"],de=t=>t.use_native&&"loading"in HTMLImageElement.prototype,Cs=(t,e,o)=>{t.forEach(s=>{$s.indexOf(s.tagName)!==-1&&ds(s,e,o)}),Qt(o,0)},Es=t=>t.isIntersecting||t.intersectionRatio>0,Is=t=>({root:t.container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}),Ls=(t,e,o)=>{t.forEach(s=>Es(s)?ks(s.target,s,e,o):ws(s.target,s,e,o))},Ss=(t,e)=>{e.forEach(o=>{t.observe(o)})},Os=(t,e)=>{Ho(t),Ss(t,e)},As=(t,e)=>{!Ht||de(t)||(e._observer=new IntersectionObserver(o=>{Ls(o,t,e)},Is(t)))},fe=t=>Array.prototype.slice.call(t),q=t=>t.container.querySelectorAll(t.elements_selector),Ts=t=>fe(t).filter(dt),xs=t=>zo(t),Vs=t=>fe(t).filter(xs),$t=(t,e)=>Ts(t||q(e)),Ns=(t,e)=>{Vs(q(t)).forEach(s=>{k(s,t.class_error),J(s)}),e.update()},zs=(t,e)=>{I&&(e._onlineHandler=()=>{Ns(t,e)},window.addEventListener("online",e._onlineHandler))},Rs=t=>{I&&window.removeEventListener("online",t._onlineHandler)},F=function(t,e){const o=Ft(t);this._settings=o,this.loadingCount=0,As(o,this),zs(o,this),this.update(e)};F.prototype={update:function(t){const e=this._settings,o=$t(t,e);if(Qt(this,o.length),Dt||!Ht){this.loadAll(o);return}if(de(e)){Cs(o,e,this);return}Os(this._observer,o)},destroy:function(){this._observer&&this._observer.disconnect(),Rs(this),q(this._settings).forEach(t=>{ne(t)}),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(t){const e=this._settings;$t(t,e).forEach(s=>{Z(s,this),ht(s,e,this)})},restoreAll:function(){const t=this._settings;q(t).forEach(e=>{bs(e,t)})}};F.load=(t,e)=>{const o=Ft(e);ht(t,o)};F.resetStatus=t=>{J(t)};I&&To(F,window.lazyLoadOptions);function Ms(t={}){return document.querySelectorAll(".lazy").forEach(e=>{const o=e.getAttribute("src");e.removeAttribute("src"),e.setAttribute("data-src",o??"")}),new F({elements_selector:".lazy",...t})}function Ys(){const t=rt();t.value.vanillaLazyload.enable&&Vt(()=>{Ms(t.value.vanillaLazyload)})}function Ds(){Tt&&window.addEventListener("click",t=>{var o;const e=t.target;if(e.matches(".vp-code-group input")){const s=(o=e.parentElement)==null?void 0:o.parentElement;if(!s)return;const n=Array.from(s.querySelectorAll("input")).indexOf(e);if(n<0)return;const a=s.querySelector(".blocks");if(!a)return;const u=Array.from(a.children).find(w=>w.classList.contains("active"));if(!u)return;const m=a.children[n];if(!m||u===m)return;u.classList.remove("active"),m.classList.add("active");const p=s==null?void 0:s.querySelector(`label[for="${e.id}"]`);p==null||p.scrollIntoView({block:"nearest"})}})}const Hs={key:0,text:"center"},Ps=["href"],Bs={m:"y-4",class:"end flex justify-center items-center"},Fs=c("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),js={p:"x-4",font:"bold",class:"whitespace-nowrap"},Us=c("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),Ws=g({__name:"ValaxyMd",props:{frontmatter:{},excerpt:{}},setup(t){const e=t,{t:o}=R(),s=D();return Nt(()=>{Se(s.value)}),Vt(()=>{W()}),Oe(()=>{W()}),e.frontmatter.aplayer&&Ae(),e.frontmatter.codepen&&Te(),xe(),Ds(),Ve(),(typeof e.frontmatter.medium_zoom>"u"||e.frontmatter.medium_zoom)&&Ne(),Ys(),(n,a)=>n.$slots.default?(l(),_("article",{key:0,class:N(n.frontmatter.markdown!==!1&&"markdown-body")},[f(n.$slots,"default",{ref_key:"contentRef",ref:s,onVnodeUpdated:a[0]||(a[0]=(...u)=>i(W)&&i(W)(...u))}),n.frontmatter.url?(l(),_("div",Hs,[c("a",{href:n.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},h(i(o)("post.view_link")),9,Ps)])):d("v-if",!0),n.frontmatter.end!==void 0?f(n.$slots,"end",{key:1},()=>[c("div",Bs,[Fs,c("span",js,h(n.frontmatter.end?"Q.E.D.":"To Be Continued."),1),Us])]):d("v-if",!0)],2)):d("v-if",!0)}}),Gs={key:0,class:"yun-time-warning",op:"80"},qs=g({__name:"YunMdTimeWarning",setup(t){const e=at();G.extend(ze);const{t:o}=R(),s=O(()=>{const n=G().valueOf()-G(e.value.updated||e.value.date).valueOf();return typeof e.value.time_warning=="number"?n>e.value.time_warning:e.value.time_warning});return(n,a)=>s.value?(l(),_("blockquote",Gs,h(i(o)("post.time_warning",{ago:i(G)(i(e).updated).fromNow()})),1)):d("v-if",!0)}}),Ks={class:"ai-generated-excerpt rounded-lg bg-$va-c-bg-alt p-4"},Js={font:"black",flex:"","items-center":""},Zs=c("div",{"mr-1":"","i-ri-robot-2-line":""},null,-1),Qs={op:"90","mt-1":""},Xs=g({__name:"YunAiExcerpt",setup(t){const e=at(),{t:o}=R();return(s,n)=>(l(),_("div",Ks,[c("div",Js,[Zs,c("div",null,h(i(o)("excerpt.ai")),1)]),c("div",Qs,h(i(e).excerpt),1)]))}}),tn={class:"yun-main md:pl-$va-sidebar-width lt-md:ml-0",flex:"~"},en={w:"full",flex:"~"},on={p:"x-4 b-8",class:"sm:px-6 lg:px-12 xl:px-16",w:"full"},ln=g({__name:"ValaxyMain",props:{frontmatter:{},data:{}},setup(t){const e=t,o=rt(),{styles:s,icon:n,color:a}=Re(e.frontmatter.type),u=Me(O(()=>e.frontmatter)),m=O(()=>e.frontmatter.aside!==!1),p=At(),w=Ye();return De(()=>{p.hash&&setTimeout(()=>{gt(document.body,p.hash,!0)},0)}),Nt(()=>{window.addEventListener("click",async r=>{const S=r.target.closest("a");if(S){const{protocol:Y,hostname:tt,pathname:j,hash:x,target:et}=S,V=window.location,U=j.match(/\.\w+$/);!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey&&et!=="_blank"&&Y===V.protocol&&tt===V.hostname&&!(U&&U[0]!==".html")&&j===V.pathname&&(r.preventDefault(),x&&x!==V.hash&&(await w.push({hash:decodeURIComponent(x)}),gt(S,x,S.classList.contains("header-anchor"))))}},{capture:!0})}),(r,S)=>{const Y=Be,tt=Xs,j=qs,x=Ws,et=zt,V=Oo,U=ko,_e=Pe,pe=ro;return l(),_("main",tn,[c("div",en,[f(r.$slots,"main",{},()=>[c("div",{class:N(["content",!m.value&&"no-aside"]),flex:"~ col grow",w:"full",p:"l-4 lt-md:0"},[b(et,{cover:r.frontmatter.cover,m:"0",class:"relative",style:He(i(s))},{default:C(()=>[f(r.$slots,"main-header",{},()=>[b(Y,{class:"mb-2",title:i(u),icon:r.frontmatter.icon||i(n),color:r.frontmatter.color||i(a),cover:r.frontmatter.cover},null,8,["title","icon","color","cover"])]),f(r.$slots,"main-header-after"),c("div",on,[f(r.$slots,"main-content",{},()=>[d(" <Transition appear> "),b(x,{frontmatter:r.frontmatter},{default:C(()=>[r.frontmatter.excerpt_type==="ai"&&r.frontmatter.excerpt?(l(),y(tt,{key:0})):d("v-if",!0),b(j),f(r.$slots,"main-content-md"),f(r.$slots,"default")]),_:3},8,["frontmatter"]),d(" </Transition> ")]),f(r.$slots,"main-content-after")])]),_:3},8,["cover","style"]),f(r.$slots,"main-nav-before"),f(r.$slots,"main-nav",{},()=>[r.frontmatter.nav!==!1?(l(),y(V,{key:0})):d("v-if",!0)]),f(r.$slots,"main-nav-after"),i(o).comment.enable&&r.frontmatter.comment!==!1?f(r.$slots,"comment",{key:0},()=>[b(U,{class:N(r.frontmatter.nav===!1?"mt-4":0)},null,8,["class"])]):d("v-if",!0),f(r.$slots,"main-footer-before"),b(_e),f(r.$slots,"main-footer-after")],2)]),f(r.$slots,"aside",{},()=>[m.value?(l(),y(pe,{key:0},{default:C(()=>[f(r.$slots,"aside-custom")]),_:3})):d("v-if",!0)])])])}}});export{ln as _};
