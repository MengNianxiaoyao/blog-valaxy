import{d as g,x as Y,q as K,o as l,e as _,F as $t,k as ue,l as c,f as i,t as $,c as b,s as p,v as z,_ as Ct,D as fe,E as A,G as _e,H as pe,I as Et,J as me,g as y,K as ve,L as he,M as J,N as ge,r as f,O as be,P as It,m as D,A as nt,a as Lt,Q as ye,R as St,S as At,U as ke,w as E,V as we,W as $e,X as at,Y as Ce,Z as Ee,i as Ie,$ as R,a0 as Le,a1 as Ot,a2 as Se,a3 as Ae,a4 as Oe,a5 as xe,a6 as Te,a7 as Ve,a8 as Ne,a9 as G,aa as Re,y as ze,ab as De,u as Me,ac as Ye,ad as Pe,n as He}from"./app-pFskbDtv.js";import{_ as Be}from"./YunFooter.vue_vue_type_style_index_0_lang-p0-D6zIz.js";import{_ as xt}from"./YunCard.vue_vue_type_script_setup_true_lang-_Y7nlDzo.js";import{_ as Fe}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-HIadcbAr.js";import{s as ht}from"./index-nlSmcLJj.js";const We=["lang"],Ue=["href"],je=g({__name:"YunOutlineItem",props:{headers:{},onClick:{type:Function},root:{type:Boolean}},setup(t){const{locale:e}=Y();return(o,s)=>{const n=K("YunOutlineItem",!0);return l(),_("ul",{class:z(o.root?"root":"nested")},[(l(!0),_($t,null,ue(o.headers,({children:a,link:d,title:u,lang:m})=>(l(),_("li",{key:d,class:"va-toc-item",lang:m||c(e)},[i("a",{class:"outline-link",href:d,onClick:s[0]||(s[0]=(...k)=>o.onClick&&o.onClick(...k))},$(u),9,Ue),a!=null&&a.length?(l(),b(n,{key:0,headers:a,"on-click":o.onClick},null,8,["headers","on-click"])):p("v-if",!0)],8,We))),128))],2)}}}),Ge=Ct(je,[["__scopeId","data-v-d4c30303"]]),qe=t=>(ve("data-v-cb503d8d"),t=t(),he(),t),Ke={class:"content"},Je={class:"outline-title"},Ze={"aria-labelledby":"doc-outline-aria-label"},Qe=qe(()=>i("span",{id:"doc-outline-aria-label",class:"visually-hidden"}," Table of Contents for current page ",-1)),Xe=g({__name:"YunOutline",setup(t){const e=fe(),o=A(),s=A();_e(o,s);const{headers:n,handleClick:a}=pe();return(d,u)=>{const m=Ge;return Et((l(),_("div",{ref_key:"container",ref:o},[i("div",Ke,[i("div",Je,$(c(e).outlineTitle||"On this page"),1),i("div",{ref_key:"marker",ref:s,class:"outline-marker"},null,512),i("nav",Ze,[Qe,y(m,{class:"va-toc relative z-1 css-i18n-toc",headers:c(n),"on-click":c(a),root:""},null,8,["headers","on-click"])])])],512)),[[me,c(n).length]])}}}),to=Ct(Xe,[["__scopeId","data-v-cb503d8d"]]),eo=i("div",{"i-ri-file-list-line":""},null,-1),oo=[eo],so={class:"aside-container",flex:"~ col"},no={key:0,m:"t-6 b-2",font:"serif black"},ao=i("div",{class:"flex-grow"},null,-1),ro={key:2,class:"custom-container"},co=g({__name:"YunAside",setup(t){const e=J(),{t:o}=Y(),s=ge();return(n,a)=>{const d=be,u=to;return l(),_($t,null,[i("button",{class:"xl:hidden toc-btn shadow fixed yun-icon-btn z-350",opacity:"75",right:"2",bottom:"19",onClick:a[0]||(a[0]=m=>c(s).toggleRightSidebar())},oo),y(d,{show:c(s).isRightSidebarOpen,onClick:a[1]||(a[1]=m=>c(s).toggleRightSidebar())},null,8,["show"]),p("  "),i("aside",{class:z(["va-card yun-aside",c(s).isRightSidebarOpen&&"open"]),m:"l-4",text:"center",overflow:"auto"},[i("div",so,[c(e).toc!==!1?(l(),_("h2",no,$(c(o)("sidebar.toc")),1)):p("v-if",!0),c(e).toc!==!1?(l(),b(u,{key:1})):p("v-if",!0),ao,n.$slots.default?(l(),_("div",ro,[f(n.$slots,"default")])):p("v-if",!0)])],2)],64)}}});function Tt(){const t=It();return D(()=>t.value.addons["valaxy-addon-twikoo"])}function Vt(t,e="latest"){const o=nt(),s=D(()=>o.value.cdn.prefix),n=Lt(),{locale:a}=Y();function d(u){if(!St)return;const m={el:".comment #tcomment",lang:a.value,path:n.path},k=Object.assign(m,u||{});return window.twikoo.init(k)}ye(`${s.value}twikoo@${e}/dist/twikoo.all.min.js`,()=>{t.value&&d(t.value)})}function Nt(t="latest"){const e=Tt(),o=D(()=>e.value.options);Vt(o,t)}const io=Object.freeze(Object.defineProperty({__proto__:null,useAddonTwikoo:Tt,useTwikoo:Vt,useTwikooWithOptions:Nt},Symbol.toStringTag,{value:"Module"})),lo={id:"tcomment",w:"full"},uo=g({__name:"YunTwikoo",setup(t){return At(io)||Nt(),(e,o)=>(l(),_("div",lo))}}),fo=g({__name:"YunWaline",setup(t){if(At(ke))throw new Error("Please install valaxy-addon-waline");const e=(void 0)();return(o,s)=>{const n=K("WalineClient");return l(),b(n,{w:"full",options:c(e).options||{serverURL:""}},null,8,["options"])}}}),_o=g({__name:"YunComment",setup(t){const e=It();return(o,s)=>{const n=fo,a=uo,d=K("ClientOnly"),u=xt;return l(),b(u,{w:"full",p:"4",class:"comment yun-comment sm:p-6 lg:px-12 xl:px-16"},{default:E(()=>[y(d,null,{default:E(()=>[c(e).addons["valaxy-addon-waline"]?(l(),b(n,{key:0})):p("v-if",!0),c(e).addons["valaxy-addon-twikoo"]?(l(),b(a,{key:1})):p("v-if",!0),f(o.$slots,"default")]),_:3})]),_:3})}}}),po={class:"post-nav"},mo={class:"post-nav-item"},vo=i("div",{class:"icon","i-ri-arrow-left-s-line":""},null,-1),ho={class:"title truncate",text:"sm"},go={class:"post-nav-item"},bo={class:"title truncate",text:"sm"},yo=i("div",{class:"icon","i-ri-arrow-right-s-line":""},null,-1),ko=g({__name:"YunPostNav",setup(t){const[e,o]=we();return(s,n)=>{const a=K("RouterLink");return l(),_("div",po,[i("div",mo,[c(e)?(l(),b(a,{key:0,class:"post-nav-prev",to:c(e).path||"",title:c(e).title},{default:E(()=>[vo,i("span",ho,$(c(e).title),1)]),_:1},8,["to","title"])):p("v-if",!0)]),i("div",go,[c(o)?(l(),b(a,{key:0,to:c(o).path||"",title:c(o).title,class:"post-nav-next"},{default:E(()=>[i("span",bo,$(c(o).title),1),yo]),_:1},8,["to","title"])):p("v-if",!0)])])}}}),wo={key:0,"w-full":"","pt-14":"","pb-10":""},$o={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},Co={key:0,class:"-bottom-6",absolute:"","text-xs":"",op:"50"},Eo=i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API",target:"_blank"},[i("span",null,"Web Crypto API")],-1),Io={key:1},Lo=g({__name:"ValaxyDecrypt",props:{encryptedContent:{}},setup(t){const e=t,o=A(""),s=A(""),n=A(!1),{decrypt:a}=$e();async function d(){const r=e.encryptedContent;if(r)try{const v=await a(o.value,r);s.value=v||"",setTimeout(()=>{R()},16)}catch{n.value=!0}}function u(){s.value="",o.value="",setTimeout(()=>{R()},16)}const m=g({name:"ValaxyDeprecatedContent",props:{html:String},render(){const r=`<div>${this.html}</div>`;return Le({setup:()=>({frontmatter:J()}),template:r})}}),k=A(!1);return at(()=>{location.protocol!=="https:"&&(k.value=!0)}),(r,v)=>(l(),_("div",null,[s.value?(l(),_("div",Io,[y(c(m),{html:s.value},null,8,["html"]),i("div",{"w-full":"","text-center":"","mt-8":""},[i("button",{"m-auto":"",class:"btn","font-bold":"",onClick:u}," Encrypt Again ")])])):(l(),_("div",wo,[i("div",$o,[Et(i("input",{"onUpdate:modelValue":v[0]||(v[0]=T=>o.value=T),"w-full":"",border:"","pl-5":"","pr-11":"","py-3":"",rounded:"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:z(n.value&&"border-red"),onInput:v[1]||(v[1]=T=>n.value=!1),onKeyup:Ee(d,["enter"])},null,34),[[Ce,o.value]]),i("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:d}),k.value?(l(),_("div",Co,[Eo,Ie(" Only works in HTTPS ")])):p("v-if",!0)])]))]))}}),L=typeof window<"u",Rt=L&&!("onscroll"in window)||typeof navigator<"u"&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),zt=L&&"IntersectionObserver"in window,Dt=L&&"classList"in document.createElement("p"),Mt=L&&window.devicePixelRatio>1,So={elements_selector:".lazy",container:Rt||L?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},Yt=t=>Object.assign({},So,t),gt=function(t,e){let o;const s="LazyLoad::Initialized",n=new t(e);try{o=new CustomEvent(s,{detail:{instance:n}})}catch{o=document.createEvent("CustomEvent"),o.initCustomEvent(s,!1,!1,{instance:n})}window.dispatchEvent(o)},Ao=(t,e)=>{if(e)if(!e.length)gt(t,e);else for(let o=0,s;s=e[o];o+=1)gt(t,s)},C="src",rt="srcset",ct="sizes",Pt="poster",B="llOriginalAttrs",Ht="data",it="loading",Bt="loaded",Ft="applied",Oo="entered",lt="error",Wt="native",Ut="data-",jt="ll-status",h=(t,e)=>t.getAttribute(Ut+e),xo=(t,e,o)=>{const s=Ut+e;if(o===null){t.removeAttribute(s);return}t.setAttribute(s,o)},F=t=>h(t,jt),x=(t,e)=>xo(t,jt,e),Z=t=>x(t,null),dt=t=>F(t)===null,To=t=>F(t)===it,Vo=t=>F(t)===lt,ut=t=>F(t)===Wt,No=[it,Bt,Ft,lt],Ro=t=>No.indexOf(F(t))>=0,S=(t,e,o,s)=>{if(!(!t||typeof t!="function")){if(s!==void 0){t(e,o,s);return}if(o!==void 0){t(e,o);return}t(e)}},P=(t,e)=>{if(Dt){t.classList.add(e);return}t.className+=(t.className?" ":"")+e},w=(t,e)=>{if(Dt){t.classList.remove(e);return}t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},zo=t=>{t.llTempImage=document.createElement("IMG")},Do=t=>{delete t.llTempImage},Gt=t=>t.llTempImage,Q=(t,e)=>{if(!e)return;const o=e._observer;o&&o.unobserve(t)},Mo=t=>{t.disconnect()},Yo=(t,e,o)=>{e.unobserve_entered&&Q(t,o)},ft=(t,e)=>{t&&(t.loadingCount+=e)},Po=t=>{t&&(t.toLoadCount-=1)},qt=(t,e)=>{t&&(t.toLoadCount=e)},Ho=t=>t.loadingCount>0,Bo=t=>t.toLoadCount>0,Kt=t=>{let e=[];for(let o=0,s;s=t.children[o];o+=1)s.tagName==="SOURCE"&&e.push(s);return e},_t=(t,e)=>{const o=t.parentNode;if(!o||o.tagName!=="PICTURE")return;Kt(o).forEach(e)},Jt=(t,e)=>{Kt(t).forEach(e)},X=[C],Zt=[C,Pt],H=[C,rt,ct],Qt=[Ht],tt=t=>!!t[B],Xt=t=>t[B],te=t=>delete t[B],M=(t,e)=>{if(tt(t))return;const o={};e.forEach(s=>{o[s]=t.getAttribute(s)}),t[B]=o},Fo=t=>{tt(t)||(t[B]={backgroundImage:t.style.backgroundImage})},Wo=(t,e,o)=>{if(!o){t.removeAttribute(e);return}t.setAttribute(e,o)},O=(t,e)=>{if(!tt(t))return;const o=Xt(t);e.forEach(s=>{Wo(t,s,o[s])})},Uo=t=>{if(!tt(t))return;const e=Xt(t);t.style.backgroundImage=e.backgroundImage},ee=(t,e,o)=>{P(t,e.class_applied),x(t,Ft),o&&(e.unobserve_completed&&Q(t,e),S(e.callback_applied,t,o))},oe=(t,e,o)=>{P(t,e.class_loading),x(t,it),o&&(ft(o,1),S(e.callback_loading,t,o))},I=(t,e,o)=>{o&&t.setAttribute(e,o)},bt=(t,e)=>{I(t,ct,h(t,e.data_sizes)),I(t,rt,h(t,e.data_srcset)),I(t,C,h(t,e.data_src))},jo=(t,e)=>{_t(t,o=>{M(o,H),bt(o,e)}),M(t,H),bt(t,e)},Go=(t,e)=>{M(t,X),I(t,C,h(t,e.data_src))},qo=(t,e)=>{Jt(t,o=>{M(o,X),I(o,C,h(o,e.data_src))}),M(t,Zt),I(t,Pt,h(t,e.data_poster)),I(t,C,h(t,e.data_src)),t.load()},Ko=(t,e)=>{M(t,Qt),I(t,Ht,h(t,e.data_src))},Jo=(t,e,o)=>{const s=h(t,e.data_bg),n=h(t,e.data_bg_hidpi),a=Mt&&n?n:s;a&&(t.style.backgroundImage=`url("${a}")`,Gt(t).setAttribute(C,a),oe(t,e,o))},Zo=(t,e,o)=>{const s=h(t,e.data_bg_multi),n=h(t,e.data_bg_multi_hidpi),a=Mt&&n?n:s;a&&(t.style.backgroundImage=a,ee(t,e,o))},Qo=(t,e,o)=>{const s=h(t,e.data_bg_set);if(!s)return;const n=s.split("|");let a=n.map(d=>`image-set(${d})`);t.style.backgroundImage=a.join(),t.style.backgroundImage===""&&(a=n.map(d=>`-webkit-image-set(${d})`),t.style.backgroundImage=a.join()),ee(t,e,o)},se={IMG:jo,IFRAME:Go,VIDEO:qo,OBJECT:Ko},Xo=(t,e)=>{const o=se[t.tagName];o&&o(t,e)},ts=(t,e,o)=>{const s=se[t.tagName];s&&(s(t,e),oe(t,e,o))},es=["IMG","IFRAME","VIDEO","OBJECT"],os=t=>es.indexOf(t.tagName)>-1,ne=(t,e)=>{e&&!Ho(e)&&!Bo(e)&&S(t.callback_finish,e)},yt=(t,e,o)=>{t.addEventListener(e,o),t.llEvLisnrs[e]=o},ss=(t,e,o)=>{t.removeEventListener(e,o)},pt=t=>!!t.llEvLisnrs,ns=(t,e,o)=>{pt(t)||(t.llEvLisnrs={});const s=t.tagName==="VIDEO"?"loadeddata":"load";yt(t,s,e),yt(t,"error",o)},st=t=>{if(!pt(t))return;const e=t.llEvLisnrs;for(let o in e){const s=e[o];ss(t,o,s)}delete t.llEvLisnrs},ae=(t,e,o)=>{Do(t),ft(o,-1),Po(o),w(t,e.class_loading),e.unobserve_completed&&Q(t,o)},as=(t,e,o,s)=>{const n=ut(e);ae(e,o,s),P(e,o.class_loaded),x(e,Bt),S(o.callback_loaded,e,s),n||ne(o,s)},rs=(t,e,o,s)=>{const n=ut(e);ae(e,o,s),P(e,o.class_error),x(e,lt),S(o.callback_error,e,s),o.restore_on_error&&O(e,H),n||ne(o,s)},mt=(t,e,o)=>{const s=Gt(t)||t;if(pt(s))return;ns(s,d=>{as(d,t,e,o),st(s)},d=>{rs(d,t,e,o),st(s)})},cs=(t,e,o)=>{zo(t),mt(t,e,o),Fo(t),Jo(t,e,o),Zo(t,e,o),Qo(t,e,o)},is=(t,e,o)=>{mt(t,e,o),ts(t,e,o)},vt=(t,e,o)=>{os(t)?is(t,e,o):cs(t,e,o)},ls=(t,e,o)=>{t.setAttribute("loading","lazy"),mt(t,e,o),Xo(t,e),x(t,Wt)},kt=t=>{t.removeAttribute(C),t.removeAttribute(rt),t.removeAttribute(ct)},ds=t=>{_t(t,e=>{kt(e)}),kt(t)},re=t=>{_t(t,e=>{O(e,H)}),O(t,H)},us=t=>{Jt(t,e=>{O(e,X)}),O(t,Zt),t.load()},fs=t=>{O(t,X)},_s=t=>{O(t,Qt)},ps={IMG:re,IFRAME:fs,VIDEO:us,OBJECT:_s},ms=t=>{const e=ps[t.tagName];if(!e){Uo(t);return}e(t)},vs=(t,e)=>{dt(t)||ut(t)||(w(t,e.class_entered),w(t,e.class_exited),w(t,e.class_applied),w(t,e.class_loading),w(t,e.class_loaded),w(t,e.class_error))},hs=(t,e)=>{ms(t),vs(t,e),Z(t),te(t)},gs=(t,e,o,s)=>{o.cancel_on_exit&&To(t)&&t.tagName==="IMG"&&(st(t),ds(t),re(t),w(t,o.class_loading),ft(s,-1),Z(t),S(o.callback_cancel,t,e,s))},bs=(t,e,o,s)=>{const n=Ro(t);x(t,Oo),P(t,o.class_entered),w(t,o.class_exited),Yo(t,o,s),S(o.callback_enter,t,e,s),!n&&vt(t,o,s)},ys=(t,e,o,s)=>{dt(t)||(P(t,o.class_exited),gs(t,e,o,s),S(o.callback_exit,t,e,s))},ks=["IMG","IFRAME","VIDEO"],ce=t=>t.use_native&&"loading"in HTMLImageElement.prototype,ws=(t,e,o)=>{t.forEach(s=>{ks.indexOf(s.tagName)!==-1&&ls(s,e,o)}),qt(o,0)},$s=t=>t.isIntersecting||t.intersectionRatio>0,Cs=t=>({root:t.container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}),Es=(t,e,o)=>{t.forEach(s=>$s(s)?bs(s.target,s,e,o):ys(s.target,s,e,o))},Is=(t,e)=>{e.forEach(o=>{t.observe(o)})},Ls=(t,e)=>{Mo(t),Is(t,e)},Ss=(t,e)=>{!zt||ce(t)||(e._observer=new IntersectionObserver(o=>{Es(o,t,e)},Cs(t)))},ie=t=>Array.prototype.slice.call(t),q=t=>t.container.querySelectorAll(t.elements_selector),As=t=>ie(t).filter(dt),Os=t=>Vo(t),xs=t=>ie(t).filter(Os),wt=(t,e)=>As(t||q(e)),Ts=(t,e)=>{xs(q(t)).forEach(s=>{w(s,t.class_error),Z(s)}),e.update()},Vs=(t,e)=>{L&&(e._onlineHandler=()=>{Ts(t,e)},window.addEventListener("online",e._onlineHandler))},Ns=t=>{L&&window.removeEventListener("online",t._onlineHandler)},W=function(t,e){const o=Yt(t);this._settings=o,this.loadingCount=0,Ss(o,this),Vs(o,this),this.update(e)};W.prototype={update:function(t){const e=this._settings,o=wt(t,e);if(qt(this,o.length),Rt||!zt){this.loadAll(o);return}if(ce(e)){ws(o,e,this);return}Ls(this._observer,o)},destroy:function(){this._observer&&this._observer.disconnect(),Ns(this),q(this._settings).forEach(t=>{te(t)}),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(t){const e=this._settings;wt(t,e).forEach(s=>{Q(s,this),vt(s,e,this)})},restoreAll:function(){const t=this._settings;q(t).forEach(e=>{hs(e,t)})}};W.load=(t,e)=>{const o=Yt(e);vt(t,o)};W.resetStatus=t=>{Z(t)};L&&Ao(W,window.lazyLoadOptions);function Rs(t={}){return document.querySelectorAll(".lazy").forEach(e=>{const o=e.getAttribute("src");e.removeAttribute("src"),e.setAttribute("data-src",o??"")}),new W({elements_selector:".lazy",...t})}function zs(){const t=nt();t.value.vanillaLazyload.enable&&at(()=>{Rs(t.value.vanillaLazyload)})}function Ds(){St&&window.addEventListener("click",t=>{var o;const e=t.target;if(e.matches(".vp-code-group input")){const s=(o=e.parentElement)==null?void 0:o.parentElement;if(!s)return;const n=Array.from(s.querySelectorAll("input")).indexOf(e);if(n<0)return;const a=s.querySelector(".blocks");if(!a)return;const d=Array.from(a.children).find(k=>k.classList.contains("active"));if(!d)return;const u=a.children[n];if(!u||d===u)return;d.classList.remove("active"),u.classList.add("active");const m=s==null?void 0:s.querySelector(`label[for="${e.id}"]`);m==null||m.scrollIntoView({block:"nearest"})}})}const Ms={key:2,text:"center"},Ys=["href"],Ps={m:"y-4",class:"end flex justify-center items-center"},Hs=i("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),Bs={p:"x-4",font:"bold",class:"whitespace-nowrap"},Fs=i("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),Ws=g({__name:"ValaxyMd",props:{frontmatter:{},excerpt:{}},setup(t){const e=t,{t:o}=Y(),s=A();return Ot(()=>{Se(s.value)}),at(()=>{R()}),Ae(()=>{R()}),e.frontmatter.aplayer&&Oe(),e.frontmatter.codepen&&xe(),Te(),Ds(),Ve(),(typeof e.frontmatter.medium_zoom>"u"||e.frontmatter.medium_zoom)&&Ne(),zs(),(n,a)=>{const d=Lo;return n.$slots.default?(l(),_("article",{key:0,class:z(n.frontmatter.markdown!==!1&&"markdown-body")},[n.frontmatter.encryptedContent?(l(),b(d,{key:0,"encrypted-content":n.frontmatter.encryptedContent},null,8,["encrypted-content"])):f(n.$slots,"default",{key:1,ref_key:"contentRef",ref:s,onVnodeUpdated:a[0]||(a[0]=(...u)=>c(R)&&c(R)(...u))}),n.frontmatter.url?(l(),_("div",Ms,[i("a",{href:n.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},$(c(o)("post.view_link")),9,Ys)])):p("v-if",!0),n.frontmatter.end!==void 0?f(n.$slots,"end",{key:3},()=>[i("div",Ps,[Hs,i("span",Bs,$(n.frontmatter.end?"Q.E.D.":"To Be Continued."),1),Fs])]):p("v-if",!0)],2)):p("v-if",!0)}}}),Us={key:0,class:"yun-time-warning",op:"80"},js=g({__name:"YunMdTimeWarning",setup(t){const e=J();G.extend(Re);const{t:o}=Y(),s=D(()=>{const n=G().valueOf()-G(e.value.updated||e.value.date).valueOf();return typeof e.value.time_warning=="number"?n>e.value.time_warning:e.value.time_warning});return(n,a)=>s.value?(l(),_("blockquote",Us,$(c(o)("post.time_warning",{ago:c(G)(c(e).updated).fromNow()})),1)):p("v-if",!0)}}),Gs={class:"ai-generated-excerpt rounded-lg bg-$va-c-bg-alt p-4"},qs={font:"black",flex:"","items-center":""},Ks=i("div",{"mr-1":"","i-ri-robot-2-line":""},null,-1),Js={op:"90","mt-1":""},Zs=g({__name:"YunAiExcerpt",setup(t){const e=J(),{t:o}=Y();return(s,n)=>(l(),_("div",Gs,[i("div",qs,[Ks,i("div",null,$(c(o)("excerpt.ai")),1)]),i("div",Js,$(c(e).excerpt),1)]))}}),Qs={class:"yun-main md:pl-$va-sidebar-width lt-md:ml-0",flex:"~"},Xs={w:"full",flex:"~"},tn={p:"x-4 b-8",class:"sm:px-6 lg:px-12 xl:px-16",w:"full"},rn=g({__name:"ValaxyMain",props:{frontmatter:{},data:{}},setup(t){const e=t,o=nt(),{styles:s,icon:n,color:a}=ze(e.frontmatter.type),d=De(D(()=>e.frontmatter)),u=D(()=>e.frontmatter.aside!==!1),m=Lt(),k=Me();return Ye(()=>{m.hash&&setTimeout(()=>{ht(document.body,m.hash,!0)},0)}),Ot(()=>{window.addEventListener("click",async r=>{const v=r.target.closest("a");if(v){const{protocol:T,hostname:et,pathname:U,hash:V,target:ot}=v,N=window.location,j=U.match(/\.\w+$/);!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey&&ot!=="_blank"&&T===N.protocol&&et===N.hostname&&!(j&&j[0]!==".html")&&U===N.pathname&&(r.preventDefault(),V&&V!==N.hash&&(await k.push({hash:decodeURIComponent(V)}),ht(v,V,v.classList.contains("header-anchor"))))}},{capture:!0})}),(r,v)=>{const T=Fe,et=Zs,U=js,V=Ws,ot=xt,N=ko,j=_o,le=Be,de=co;return l(),_("main",Qs,[i("div",Xs,[f(r.$slots,"main",{},()=>[i("div",{class:z(["content",!u.value&&"no-aside"]),flex:"~ col grow",w:"full",p:"l-4 lt-md:0"},[y(ot,{cover:r.frontmatter.cover,m:"0",class:"relative",style:He(c(s))},{default:E(()=>[f(r.$slots,"main-header",{},()=>[y(T,{class:"mb-2",title:c(d),icon:r.frontmatter.icon||c(n),color:r.frontmatter.color||c(a),cover:r.frontmatter.cover},null,8,["title","icon","color","cover"])]),f(r.$slots,"main-header-after"),i("div",tn,[f(r.$slots,"main-content",{},()=>[y(Pe,{appear:""},{default:E(()=>[y(V,{frontmatter:r.frontmatter},{default:E(()=>[r.frontmatter.excerpt_type==="ai"&&r.frontmatter.excerpt?(l(),b(et,{key:0})):p("v-if",!0),y(U),f(r.$slots,"main-content-md"),f(r.$slots,"default")]),_:3},8,["frontmatter"])]),_:3})]),f(r.$slots,"main-content-after")])]),_:3},8,["cover","style"]),f(r.$slots,"main-nav-before"),f(r.$slots,"main-nav",{},()=>[r.frontmatter.nav!==!1?(l(),b(N,{key:0})):p("v-if",!0)]),f(r.$slots,"main-nav-after"),c(o).comment.enable&&r.frontmatter.comment!==!1?f(r.$slots,"comment",{key:0},()=>[y(j,{class:z(r.frontmatter.nav===!1?"mt-4":0)},null,8,["class"])]):p("v-if",!0),f(r.$slots,"main-footer-before"),y(le),f(r.$slots,"main-footer-after")],2)]),f(r.$slots,"aside",{},()=>[u.value?(l(),b(de,{key:0},{default:E(()=>[f(r.$slots,"aside-custom")]),_:3})):p("v-if",!0)])])])}}});export{rn as _};
