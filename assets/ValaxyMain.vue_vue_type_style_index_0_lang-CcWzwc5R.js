import{d as g,v as R,q as G,o as d,e as m,F as wt,k as uo,f as r,h as c,t as y,c as h,g as f,s as Y,_ as $t,D as fo,E as ot,G as _o,H as po,I as mo,J as vo,l as k,K as ho,L as go,M as st,N as bo,r as u,O as yo,P as Et,m as x,A as nt,a as Lt,Q as ko,R as Ct,S as It,U as wo,w as I,V as $o,W as St,X as Ot,Y as Eo,Z as U,$ as Lo,a0 as Co,a1 as Io,a2 as So,a3 as Oo,a4 as Ao,a5 as W,a6 as To,x as xo,a7 as No,u as Ro,a8 as Vo,n as zo}from"./app-BFBGYJw6.js";import{_ as Yo}from"./YunFooter.vue_vue_type_style_index_0_lang-D7fpJ3ri.js";import{_ as At}from"./YunCard.vue_vue_type_script_setup_true_lang-CzP4oCz_.js";import{_ as Mo}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-DYQcaJr9.js";import{s as vt}from"./index-C7yU5XnD.js";const Do=["lang"],Ho=["href"],Po=g({__name:"YunOutlineItem",props:{headers:{},onClick:{type:Function},root:{type:Boolean}},setup(t){const{locale:o}=R();return(e,s)=>{const n=G("YunOutlineItem",!0);return d(),m("ul",{class:Y(e.root?"root":"nested")},[(d(!0),m(wt,null,uo(e.headers,({children:a,link:l,title:_,lang:p})=>(d(),m("li",{key:l,class:"va-toc-item",lang:p||r(o)},[c("a",{class:"outline-link",href:l,onClick:s[0]||(s[0]=(...C)=>e.onClick&&e.onClick(...C))},y(_),9,Ho),a!=null&&a.length?(d(),h(n,{key:0,headers:a,"on-click":e.onClick},null,8,["headers","on-click"])):f("v-if",!0)],8,Do))),128))],2)}}}),Bo=$t(Po,[["__scopeId","data-v-91b116b9"]]),Fo=t=>(ho("data-v-f60cc484"),t=t(),go(),t),Uo={class:"content"},Wo={class:"outline-title"},jo={"aria-labelledby":"doc-outline-aria-label"},Go=Fo(()=>c("span",{id:"doc-outline-aria-label",class:"visually-hidden"}," Table of Contents for current page ",-1)),qo=g({__name:"YunOutline",setup(t){const o=fo(),e=ot(),s=ot();_o(e,s);const{headers:n,handleClick:a}=po();return(l,_)=>{const p=Bo;return mo((d(),m("div",{ref_key:"container",ref:e},[c("div",Uo,[c("div",Wo,y(r(o).outlineTitle||"On this page"),1),c("div",{ref_key:"marker",ref:s,class:"outline-marker"},null,512),c("nav",jo,[Go,k(p,{class:"va-toc relative z-1 css-i18n-toc",headers:r(n),"on-click":r(a),root:""},null,8,["headers","on-click"])])])],512)),[[vo,r(n).length]])}}}),Ko=$t(qo,[["__scopeId","data-v-f60cc484"]]),Jo=c("div",{"i-ri-file-list-line":""},null,-1),Zo=[Jo],Qo={class:"aside-container",flex:"~ col"},Xo={key:0,m:"t-6 b-2",font:"serif black"},te=c("div",{class:"flex-grow"},null,-1),oe={key:2,class:"custom-container"},ee=g({__name:"YunAside",setup(t){const o=st(),{t:e}=R(),s=bo();return(n,a)=>{const l=yo,_=Ko;return d(),m(wt,null,[c("button",{class:"xl:hidden toc-btn shadow fixed yun-icon-btn z-350",opacity:"75",right:"2",bottom:"19",onClick:a[0]||(a[0]=p=>r(s).toggleRightSidebar())},Zo),k(l,{show:r(s).isRightSidebarOpen,onClick:a[1]||(a[1]=p=>r(s).toggleRightSidebar())},null,8,["show"]),f("  "),c("aside",{class:Y(["va-card yun-aside",r(s).isRightSidebarOpen&&"open"]),m:"l-4",text:"center",overflow:"auto"},[c("div",Qo,[r(o).toc!==!1?(d(),m("h2",Xo,y(r(e)("sidebar.toc")),1)):f("v-if",!0),r(o).toc!==!1?(d(),h(_,{key:1})):f("v-if",!0),te,n.$slots.default?(d(),m("div",oe,[u(n.$slots,"default")])):f("v-if",!0)])],2)],64)}}});function Tt(){const t=Et();return x(()=>t.value.addons["valaxy-addon-twikoo"])}function xt(t,o="latest"){const e=nt(),s=x(()=>e.value.cdn.prefix),n=Lt(),{locale:a}=R();function l(_){if(!Ct)return;const p={el:".comment #tcomment",lang:a.value,path:n.path},C=Object.assign(p,_||{});return window.twikoo.init(C)}ko(`${s.value}twikoo@${o}/dist/twikoo.all.min.js`,()=>{t.value&&l(t.value)})}function Nt(t="latest"){const o=Tt(),e=x(()=>o.value.options);xt(e,t)}const se=Object.freeze(Object.defineProperty({__proto__:null,useAddonTwikoo:Tt,useTwikoo:xt,useTwikooWithOptions:Nt},Symbol.toStringTag,{value:"Module"})),ne={id:"tcomment",w:"full"},ae=g({__name:"YunTwikoo",setup(t){return It(se)||Nt(),(o,e)=>(d(),m("div",ne))}}),re=g({__name:"YunWaline",setup(t){if(It(wo))throw new Error("Please install valaxy-addon-waline");const o=(void 0)();return(e,s)=>{const n=G("WalineClient");return d(),h(n,{w:"full",options:r(o).options||{serverURL:""}},null,8,["options"])}}}),ie=g({__name:"YunComment",setup(t){const o=Et();return(e,s)=>{const n=re,a=ae,l=G("ClientOnly"),_=At;return d(),h(_,{w:"full",p:"4",class:"comment yun-comment sm:p-6 lg:px-12 xl:px-16"},{default:I(()=>[k(l,null,{default:I(()=>[r(o).addons["valaxy-addon-waline"]?(d(),h(n,{key:0})):f("v-if",!0),r(o).addons["valaxy-addon-twikoo"]?(d(),h(a,{key:1})):f("v-if",!0),u(e.$slots,"default")]),_:3})]),_:3})}}}),ce={class:"post-nav"},le={class:"post-nav-item"},de=c("div",{class:"icon","i-ri-arrow-left-s-line":""},null,-1),ue={class:"title truncate",text:"sm"},fe={class:"post-nav-item"},_e={class:"title truncate",text:"sm"},pe=c("div",{class:"icon","i-ri-arrow-right-s-line":""},null,-1),me=g({__name:"YunPostNav",setup(t){const[o,e]=$o();return(s,n)=>{const a=G("RouterLink");return d(),m("div",ce,[c("div",le,[r(o)?(d(),h(a,{key:0,class:"post-nav-prev",to:r(o).path||"",title:r(o).title},{default:I(()=>[de,c("span",ue,y(r(o).title),1)]),_:1},8,["to","title"])):f("v-if",!0)]),c("div",fe,[r(e)?(d(),h(a,{key:0,to:r(e).path||"",title:r(e).title,class:"post-nav-next"},{default:I(()=>[c("span",_e,y(r(e).title),1),pe]),_:1},8,["to","title"])):f("v-if",!0)])])}}}),E=typeof window<"u",Rt=E&&!("onscroll"in window)||typeof navigator<"u"&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),Vt=E&&"IntersectionObserver"in window,zt=E&&"classList"in document.createElement("p"),Yt=E&&window.devicePixelRatio>1,ve={elements_selector:".lazy",container:Rt||E?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},Mt=t=>Object.assign({},ve,t),ht=function(t,o){let e;const s="LazyLoad::Initialized",n=new t(o);try{e=new CustomEvent(s,{detail:{instance:n}})}catch{e=document.createEvent("CustomEvent"),e.initCustomEvent(s,!1,!1,{instance:n})}window.dispatchEvent(e)},he=(t,o)=>{if(o)if(!o.length)ht(t,o);else for(let e=0,s;s=o[e];e+=1)ht(t,s)},w="src",at="srcset",rt="sizes",Dt="poster",D="llOriginalAttrs",Ht="data",it="loading",Pt="loaded",Bt="applied",ge="entered",ct="error",Ft="native",Ut="data-",Wt="ll-status",v=(t,o)=>t.getAttribute(Ut+o),be=(t,o,e)=>{const s=Ut+o;if(e===null){t.removeAttribute(s);return}t.setAttribute(s,e)},H=t=>v(t,Wt),O=(t,o)=>be(t,Wt,o),q=t=>O(t,null),lt=t=>H(t)===null,ye=t=>H(t)===it,ke=t=>H(t)===ct,dt=t=>H(t)===Ft,we=[it,Pt,Bt,ct],$e=t=>we.indexOf(H(t))>=0,L=(t,o,e,s)=>{if(!(!t||typeof t!="function")){if(s!==void 0){t(o,e,s);return}if(e!==void 0){t(o,e);return}t(o)}},V=(t,o)=>{if(zt){t.classList.add(o);return}t.className+=(t.className?" ":"")+o},b=(t,o)=>{if(zt){t.classList.remove(o);return}t.className=t.className.replace(new RegExp("(^|\\s+)"+o+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},Ee=t=>{t.llTempImage=document.createElement("IMG")},Le=t=>{delete t.llTempImage},jt=t=>t.llTempImage,K=(t,o)=>{if(!o)return;const e=o._observer;e&&e.unobserve(t)},Ce=t=>{t.disconnect()},Ie=(t,o,e)=>{o.unobserve_entered&&K(t,e)},ut=(t,o)=>{t&&(t.loadingCount+=o)},Se=t=>{t&&(t.toLoadCount-=1)},Gt=(t,o)=>{t&&(t.toLoadCount=o)},Oe=t=>t.loadingCount>0,Ae=t=>t.toLoadCount>0,qt=t=>{let o=[];for(let e=0,s;s=t.children[e];e+=1)s.tagName==="SOURCE"&&o.push(s);return o},ft=(t,o)=>{const e=t.parentNode;if(!e||e.tagName!=="PICTURE")return;qt(e).forEach(o)},Kt=(t,o)=>{qt(t).forEach(o)},J=[w],Jt=[w,Dt],M=[w,at,rt],Zt=[Ht],Z=t=>!!t[D],Qt=t=>t[D],Xt=t=>delete t[D],N=(t,o)=>{if(Z(t))return;const e={};o.forEach(s=>{e[s]=t.getAttribute(s)}),t[D]=e},Te=t=>{Z(t)||(t[D]={backgroundImage:t.style.backgroundImage})},xe=(t,o,e)=>{if(!e){t.removeAttribute(o);return}t.setAttribute(o,e)},S=(t,o)=>{if(!Z(t))return;const e=Qt(t);o.forEach(s=>{xe(t,s,e[s])})},Ne=t=>{if(!Z(t))return;const o=Qt(t);t.style.backgroundImage=o.backgroundImage},to=(t,o,e)=>{V(t,o.class_applied),O(t,Bt),e&&(o.unobserve_completed&&K(t,o),L(o.callback_applied,t,e))},oo=(t,o,e)=>{V(t,o.class_loading),O(t,it),e&&(ut(e,1),L(o.callback_loading,t,e))},$=(t,o,e)=>{e&&t.setAttribute(o,e)},gt=(t,o)=>{$(t,rt,v(t,o.data_sizes)),$(t,at,v(t,o.data_srcset)),$(t,w,v(t,o.data_src))},Re=(t,o)=>{ft(t,e=>{N(e,M),gt(e,o)}),N(t,M),gt(t,o)},Ve=(t,o)=>{N(t,J),$(t,w,v(t,o.data_src))},ze=(t,o)=>{Kt(t,e=>{N(e,J),$(e,w,v(e,o.data_src))}),N(t,Jt),$(t,Dt,v(t,o.data_poster)),$(t,w,v(t,o.data_src)),t.load()},Ye=(t,o)=>{N(t,Zt),$(t,Ht,v(t,o.data_src))},Me=(t,o,e)=>{const s=v(t,o.data_bg),n=v(t,o.data_bg_hidpi),a=Yt&&n?n:s;a&&(t.style.backgroundImage=`url("${a}")`,jt(t).setAttribute(w,a),oo(t,o,e))},De=(t,o,e)=>{const s=v(t,o.data_bg_multi),n=v(t,o.data_bg_multi_hidpi),a=Yt&&n?n:s;a&&(t.style.backgroundImage=a,to(t,o,e))},He=(t,o,e)=>{const s=v(t,o.data_bg_set);if(!s)return;const n=s.split("|");let a=n.map(l=>`image-set(${l})`);t.style.backgroundImage=a.join(),t.style.backgroundImage===""&&(a=n.map(l=>`-webkit-image-set(${l})`),t.style.backgroundImage=a.join()),to(t,o,e)},eo={IMG:Re,IFRAME:Ve,VIDEO:ze,OBJECT:Ye},Pe=(t,o)=>{const e=eo[t.tagName];e&&e(t,o)},Be=(t,o,e)=>{const s=eo[t.tagName];s&&(s(t,o),oo(t,o,e))},Fe=["IMG","IFRAME","VIDEO","OBJECT"],Ue=t=>Fe.indexOf(t.tagName)>-1,so=(t,o)=>{o&&!Oe(o)&&!Ae(o)&&L(t.callback_finish,o)},bt=(t,o,e)=>{t.addEventListener(o,e),t.llEvLisnrs[o]=e},We=(t,o,e)=>{t.removeEventListener(o,e)},_t=t=>!!t.llEvLisnrs,je=(t,o,e)=>{_t(t)||(t.llEvLisnrs={});const s=t.tagName==="VIDEO"?"loadeddata":"load";bt(t,s,o),bt(t,"error",e)},et=t=>{if(!_t(t))return;const o=t.llEvLisnrs;for(let e in o){const s=o[e];We(t,e,s)}delete t.llEvLisnrs},no=(t,o,e)=>{Le(t),ut(e,-1),Se(e),b(t,o.class_loading),o.unobserve_completed&&K(t,e)},Ge=(t,o,e,s)=>{const n=dt(o);no(o,e,s),V(o,e.class_loaded),O(o,Pt),L(e.callback_loaded,o,s),n||so(e,s)},qe=(t,o,e,s)=>{const n=dt(o);no(o,e,s),V(o,e.class_error),O(o,ct),L(e.callback_error,o,s),e.restore_on_error&&S(o,M),n||so(e,s)},pt=(t,o,e)=>{const s=jt(t)||t;if(_t(s))return;je(s,l=>{Ge(l,t,o,e),et(s)},l=>{qe(l,t,o,e),et(s)})},Ke=(t,o,e)=>{Ee(t),pt(t,o,e),Te(t),Me(t,o,e),De(t,o,e),He(t,o,e)},Je=(t,o,e)=>{pt(t,o,e),Be(t,o,e)},mt=(t,o,e)=>{Ue(t)?Je(t,o,e):Ke(t,o,e)},Ze=(t,o,e)=>{t.setAttribute("loading","lazy"),pt(t,o,e),Pe(t,o),O(t,Ft)},yt=t=>{t.removeAttribute(w),t.removeAttribute(at),t.removeAttribute(rt)},Qe=t=>{ft(t,o=>{yt(o)}),yt(t)},ao=t=>{ft(t,o=>{S(o,M)}),S(t,M)},Xe=t=>{Kt(t,o=>{S(o,J)}),S(t,Jt),t.load()},ts=t=>{S(t,J)},os=t=>{S(t,Zt)},es={IMG:ao,IFRAME:ts,VIDEO:Xe,OBJECT:os},ss=t=>{const o=es[t.tagName];if(!o){Ne(t);return}o(t)},ns=(t,o)=>{lt(t)||dt(t)||(b(t,o.class_entered),b(t,o.class_exited),b(t,o.class_applied),b(t,o.class_loading),b(t,o.class_loaded),b(t,o.class_error))},as=(t,o)=>{ss(t),ns(t,o),q(t),Xt(t)},rs=(t,o,e,s)=>{e.cancel_on_exit&&ye(t)&&t.tagName==="IMG"&&(et(t),Qe(t),ao(t),b(t,e.class_loading),ut(s,-1),q(t),L(e.callback_cancel,t,o,s))},is=(t,o,e,s)=>{const n=$e(t);O(t,ge),V(t,e.class_entered),b(t,e.class_exited),Ie(t,e,s),L(e.callback_enter,t,o,s),!n&&mt(t,e,s)},cs=(t,o,e,s)=>{lt(t)||(V(t,e.class_exited),rs(t,o,e,s),L(e.callback_exit,t,o,s))},ls=["IMG","IFRAME","VIDEO"],ro=t=>t.use_native&&"loading"in HTMLImageElement.prototype,ds=(t,o,e)=>{t.forEach(s=>{ls.indexOf(s.tagName)!==-1&&Ze(s,o,e)}),Gt(e,0)},us=t=>t.isIntersecting||t.intersectionRatio>0,fs=t=>({root:t.container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}),_s=(t,o,e)=>{t.forEach(s=>us(s)?is(s.target,s,o,e):cs(s.target,s,o,e))},ps=(t,o)=>{o.forEach(e=>{t.observe(e)})},ms=(t,o)=>{Ce(t),ps(t,o)},vs=(t,o)=>{!Vt||ro(t)||(o._observer=new IntersectionObserver(e=>{_s(e,t,o)},fs(t)))},io=t=>Array.prototype.slice.call(t),j=t=>t.container.querySelectorAll(t.elements_selector),hs=t=>io(t).filter(lt),gs=t=>ke(t),bs=t=>io(t).filter(gs),kt=(t,o)=>hs(t||j(o)),ys=(t,o)=>{bs(j(t)).forEach(s=>{b(s,t.class_error),q(s)}),o.update()},ks=(t,o)=>{E&&(o._onlineHandler=()=>{ys(t,o)},window.addEventListener("online",o._onlineHandler))},ws=t=>{E&&window.removeEventListener("online",t._onlineHandler)},P=function(t,o){const e=Mt(t);this._settings=e,this.loadingCount=0,vs(e,this),ks(e,this),this.update(o)};P.prototype={update:function(t){const o=this._settings,e=kt(t,o);if(Gt(this,e.length),Rt||!Vt){this.loadAll(e);return}if(ro(o)){ds(e,o,this);return}ms(this._observer,e)},destroy:function(){this._observer&&this._observer.disconnect(),ws(this),j(this._settings).forEach(t=>{Xt(t)}),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(t){const o=this._settings;kt(t,o).forEach(s=>{K(s,this),mt(s,o,this)})},restoreAll:function(){const t=this._settings;j(t).forEach(o=>{as(o,t)})}};P.load=(t,o)=>{const e=Mt(o);mt(t,e)};P.resetStatus=t=>{q(t)};E&&he(P,window.lazyLoadOptions);function $s(t={}){return document.querySelectorAll(".lazy").forEach(o=>{const e=o.getAttribute("src");o.removeAttribute("src"),o.setAttribute("data-src",e??"")}),new P({elements_selector:".lazy",...t})}function Es(){const t=nt();t.value.vanillaLazyload.enable&&St(()=>{$s(t.value.vanillaLazyload)})}function Ls(){Ct&&window.addEventListener("click",t=>{var e;const o=t.target;if(o.matches(".vp-code-group input")){const s=(e=o.parentElement)==null?void 0:e.parentElement;if(!s)return;const n=Array.from(s.querySelectorAll("input")).indexOf(o);if(n<0)return;const a=s.querySelector(".blocks");if(!a)return;const l=Array.from(a.children).find(C=>C.classList.contains("active"));if(!l)return;const _=a.children[n];if(!_||l===_)return;l.classList.remove("active"),_.classList.add("active");const p=s==null?void 0:s.querySelector(`label[for="${o.id}"]`);p==null||p.scrollIntoView({block:"nearest"})}})}const Cs={key:0,text:"center"},Is=["href"],Ss={m:"y-4",class:"end flex justify-center items-center"},Os=c("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),As={p:"x-4",font:"bold",class:"whitespace-nowrap"},Ts=c("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),xs=g({__name:"ValaxyMd",props:{frontmatter:{},excerpt:{}},setup(t){const o=t,{t:e}=R(),s=ot();return Ot(()=>{Eo(s.value)}),St(()=>{U()}),Lo(()=>{U()}),o.frontmatter.aplayer&&Co(),o.frontmatter.codepen&&Io(),So(),Ls(),Oo(),(typeof o.frontmatter.medium_zoom>"u"||o.frontmatter.medium_zoom)&&Ao(),Es(),(n,a)=>n.$slots.default?(d(),m("article",{key:0,class:Y(n.frontmatter.markdown!==!1&&"markdown-body")},[u(n.$slots,"default",{ref_key:"contentRef",ref:s,onVnodeUpdated:a[0]||(a[0]=(...l)=>r(U)&&r(U)(...l))}),n.frontmatter.url?(d(),m("div",Cs,[c("a",{href:n.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},y(r(e)("post.view_link")),9,Is)])):f("v-if",!0),n.frontmatter.end!==void 0?u(n.$slots,"end",{key:1},()=>[c("div",Ss,[Os,c("span",As,y(n.frontmatter.end?"Q.E.D.":"To Be Continued."),1),Ts])]):f("v-if",!0)],2)):f("v-if",!0)}}),Ns={key:0,class:"yun-time-warning",op:"80"},Rs=g({__name:"YunMdTimeWarning",setup(t){const o=st();W.extend(To);const{t:e}=R(),s=x(()=>{const n=W().valueOf()-W(o.value.updated||o.value.date).valueOf();return typeof o.value.time_warning=="number"?n>o.value.time_warning:o.value.time_warning});return(n,a)=>s.value?(d(),m("blockquote",Ns,y(r(e)("post.time_warning",{ago:r(W)(r(o).updated).fromNow()})),1)):f("v-if",!0)}}),Vs={class:"ai-generated-excerpt rounded-lg bg-$va-c-bg-alt p-4"},zs={font:"black",flex:"","items-center":""},Ys=c("div",{"mr-1":"","i-ri-robot-2-line":""},null,-1),Ms={op:"90","mt-1":""},Ds=g({__name:"YunAiExcerpt",setup(t){const o=st(),{t:e}=R();return(s,n)=>(d(),m("div",Vs,[c("div",zs,[Ys,c("div",null,y(r(e)("excerpt.ai")),1)]),c("div",Ms,y(r(o).excerpt),1)]))}}),Hs={class:"yun-main md:pl-$va-sidebar-width lt-md:ml-0",flex:"~"},Ps={w:"full",flex:"~"},Bs={p:"x-4 b-8",class:"sm:px-6 lg:px-12 xl:px-16",w:"full"},qs=g({__name:"ValaxyMain",props:{frontmatter:{},data:{}},setup(t){const o=t,e=nt(),{styles:s,icon:n,color:a}=xo(o.frontmatter.type),l=No(x(()=>o.frontmatter)),_=x(()=>o.frontmatter.aside!==!1),p=Lt(),C=Ro();return Vo(()=>{p.hash&&setTimeout(()=>{vt(document.body,p.hash,!0)},0)}),Ot(()=>{window.addEventListener("click",async i=>{const z=i.target.closest("a");if(z){const{protocol:Q,hostname:X,pathname:B,hash:A,target:tt}=z,T=window.location,F=B.match(/\.\w+$/);!i.ctrlKey&&!i.shiftKey&&!i.altKey&&!i.metaKey&&tt!=="_blank"&&Q===T.protocol&&X===T.hostname&&!(F&&F[0]!==".html")&&B===T.pathname&&(i.preventDefault(),A&&A!==T.hash&&(await C.push({hash:decodeURIComponent(A)}),vt(z,A,z.classList.contains("header-anchor"))))}},{capture:!0})}),(i,z)=>{const Q=Mo,X=Ds,B=Rs,A=xs,tt=At,T=me,F=ie,co=Yo,lo=ee;return d(),m("main",Hs,[c("div",Ps,[u(i.$slots,"main",{},()=>[c("div",{class:Y(["content",!_.value&&"no-aside"]),flex:"~ col grow",w:"full",p:"l-4 lt-md:0"},[k(tt,{cover:i.frontmatter.cover,m:"0",class:"relative",style:zo(r(s))},{default:I(()=>[u(i.$slots,"main-header",{},()=>[k(Q,{class:"mb-2",title:r(l),icon:i.frontmatter.icon||r(n),color:i.frontmatter.color||r(a),cover:i.frontmatter.cover},null,8,["title","icon","color","cover"])]),u(i.$slots,"main-header-after"),c("div",Bs,[u(i.$slots,"main-content",{},()=>[f(" <Transition appear> "),k(A,{frontmatter:i.frontmatter},{default:I(()=>[i.frontmatter.excerpt_type==="ai"&&i.frontmatter.excerpt?(d(),h(X,{key:0})):f("v-if",!0),k(B),u(i.$slots,"main-content-md"),u(i.$slots,"default")]),_:3},8,["frontmatter"]),f(" </Transition> ")]),u(i.$slots,"main-content-after")])]),_:3},8,["cover","style"]),u(i.$slots,"main-nav-before"),u(i.$slots,"main-nav",{},()=>[i.frontmatter.nav!==!1?(d(),h(T,{key:0})):f("v-if",!0)]),u(i.$slots,"main-nav-after"),r(e).comment.enable&&i.frontmatter.comment!==!1?u(i.$slots,"comment",{key:0},()=>[k(F,{class:Y(i.frontmatter.nav===!1?"mt-4":0)},null,8,["class"])]):f("v-if",!0),u(i.$slots,"main-footer-before"),k(co),u(i.$slots,"main-footer-after")],2)]),u(i.$slots,"aside",{},()=>[_.value?(d(),h(lo,{key:0},{default:I(()=>[u(i.$slots,"aside-custom")]),_:3})):f("v-if",!0)])])])}}});export{qs as _};