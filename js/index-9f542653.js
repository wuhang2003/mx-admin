import{d,eB as m,u as p,s as l,h as e,ca as i,F as f,C as v,R as g,_ as h}from"./index-ecb87ff2.js";import{H as _}from"./rounded-button-6739a26b.js";import{F as y,d as S}from"./index-f9333df7.js";import{_ as T}from"./CheckCircleOutlined-6cca3c06.js";import{T as C}from"./two-col-1fefae2a.js";import"./use-async-monaco-67d8ca04.js";import"./index-a5b9f509.js";import"./use-save-confirm-226768b2.js";import"./vue.runtime.esm-bundler-5a8e770b.js";const x=d({setup(){const o=m("debug-serverless",S),u=p(),t=l(),n=l(""),s=async()=>{try{const r=await g.api.debug.function.post({data:{function:o.value},errorHandler:a=>{n.value=`Error: ${a.data.message}`,u.error(a.data.message)}});h(()=>import("./use-async-monaco-67d8ca04.js").then(a=>a.e),["js/use-async-monaco-67d8ca04.js","js/index-ecb87ff2.js","assets/index-c5bb164a.css","js/index-a5b9f509.js","js/use-save-confirm-226768b2.js","assets/use-async-monaco-ef518337.css"]).then(a=>{a.editor.colorize(JSON.stringify(r.data,null,2),"typescript",{tabSize:2}).then(c=>{t.value.innerHTML=c}).catch(()=>{t.value.innerHTML=JSON.stringify(r,null,2)})})}catch{}};return()=>e(v,{actionsElement:e(f,null,[e(_,{icon:e(T,null,null),onClick:s},null)])},{default:()=>[e(C,null,{default:()=>[e(i,{span:"18"},{default:()=>[e("div",{class:"h-[80vh]"},[e(y,{value:o,onSave:s},null)])]}),e(i,{span:"18"},{default:()=>[e("pre",{class:"overflow-auto max-h-[calc(100vh-10rem)] !bg-none !bg-transparent",ref:t},[n.value])]})]})]})}});export{x as default};
