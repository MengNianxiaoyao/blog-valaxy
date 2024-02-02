import{as as u}from"./app-naQCw47T.js";function m(c={}){const{immediate:d=!1,onNeedRefresh:p,onOfflineReady:a,onRegistered:r,onRegisteredSW:s,onRegisterError:t}=c;let i,n;const o=async(e=!0)=>{await n};async function l(){if("serviceWorker"in navigator){if(i=await u(()=>import("./workbox-window.prod.es5-prqDwDSL.js"),__vite__mapDeps([]),import.meta.url).then(({Workbox:e})=>new e("./sw.js",{scope:"./",type:"classic"})).catch(e=>{t==null||t(e)}),!i)return;i.addEventListener("activated",e=>{(e.isUpdate||e.isExternal)&&window.location.reload()}),i.addEventListener("installed",e=>{e.isUpdate||a==null||a()}),i.register({immediate:d}).then(e=>{s?s("./sw.js",e):r==null||r(e)}).catch(e=>{t==null||t(e)})}}return n=l(),o}export{m as registerSW};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
