import{as as u}from"./app-I_Oaf3Mw.js";function m(n={}){const{immediate:c=!1,onNeedRefresh:d,onOfflineReady:l,onRegistered:i,onRegisteredSW:r,onRegisterError:t}=n;let a,s;const o=async(e=!0)=>{await s};async function f(){if("serviceWorker"in navigator){if(a=await u(()=>import("./workbox-window.prod.es5-prqDwDSL.js"),__vite__mapDeps([])).then(({Workbox:e})=>new e("/sw.js",{scope:"/",type:"classic"})).catch(e=>{t==null||t(e)}),!a)return;a.register({immediate:c}).then(e=>{r?r("/sw.js",e):i==null||i(e)}).catch(e=>{t==null||t(e)})}}return s=f(),o}export{m as registerSW};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
