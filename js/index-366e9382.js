import{d,eB as m,u as p,s as l,h as e,ca as i,F as f,C as v,R as g,_ as h}from"./index-0c9d0a31.js";import{H as _}from"./rounded-button-612229a1.js";import{F as y,d as S}from"./index-59b698a0.js";import{_ as T}from"./CheckCircleOutlined-3f44e9be.js";import{T as C}from"./two-col-42e2fcd0.js";import"./use-async-monaco-49f7faed.js";import"./index-556bc651.js";import"./use-save-confirm-e9a15810.js";import"./vue.runtime.esm-bundler-43151dfb.js";const x=d({setup(){const o=m("debug-serverless",S),u=p(),t=l(),n=l(""),s=async()=>{try{const r=await g.api.debug.function.post({data:{function:o.value},errorHandler:a=>{n.value=`Error: ${a.data.message}`,u.error(a.data.message)}});h(()=>import("./use-async-monaco-49f7faed.js").then(a=>a.e),["js/use-async-monaco-49f7faed.js","js/index-0c9d0a31.js","assets/index-0d4cc1b5.css","js/index-556bc651.js","js/use-save-confirm-e9a15810.js","assets/use-async-monaco-2043b142.css"]).then(a=>{a.editor.colorize(JSON.stringify(r.data,null,2),"typescript",{tabSize:2}).then(c=>{t.value.innerHTML=c}).catch(()=>{t.value.innerHTML=JSON.stringify(r,null,2)})})}catch{}};return()=>e(v,{actionsElement:e(f,null,[e(_,{icon:e(T,null,null),onClick:s},null)])},{default:()=>[e(C,null,{default:()=>[e(i,{span:"18"},{default:()=>[e("div",{class:"h-[80vh]"},[e(y,{value:o,onSave:s},null)])]}),e(i,{span:"18"},{default:()=>[e("pre",{class:"overflow-auto max-h-[calc(100vh-10rem)] !bg-none !bg-transparent",ref:t},[n.value])]})]})]})}});export{x as default};
