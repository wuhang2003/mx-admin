import{d,es as m,u as p,s as l,h as e,c2 as i,F as f,C as v,R as g,_ as h}from"./index-60eb200c.js";import{H as _}from"./rounded-button-d3895220.js";import{F as y,d as S}from"./index-457f2b0a.js";import{_ as T}from"./CheckCircleOutlined-34f85ebf.js";import{T as C}from"./two-col-086b5743.js";import"./use-async-monaco-2b714cef.js";import"./index-82ea8036.js";import"./use-save-confirm-942d4a7c.js";import"./vue.runtime.esm-bundler-ccbc3fc4.js";const x=d({setup(){const o=m("debug-serverless",S),u=p(),t=l(),n=l(""),s=async()=>{try{const r=await g.api.debug.function.post({data:{function:o.value},errorHandler:a=>{n.value=`Error: ${a.data.message}`,u.error(a.data.message)}});h(()=>import("./use-async-monaco-2b714cef.js").then(a=>a.e),["js/use-async-monaco-2b714cef.js","js/index-60eb200c.js","assets/index-561668d6.css","js/index-82ea8036.js","js/use-save-confirm-942d4a7c.js","assets/use-async-monaco-33b4d898.css"]).then(a=>{a.editor.colorize(JSON.stringify(r.data,null,2),"typescript",{tabSize:2}).then(c=>{t.value.innerHTML=c}).catch(()=>{t.value.innerHTML=JSON.stringify(r,null,2)})})}catch{}};return()=>e(v,{actionsElement:e(f,null,[e(_,{icon:e(T,null,null),onClick:s},null)])},{default:()=>[e(C,null,{default:()=>[e(i,{span:"18"},{default:()=>[e("div",{class:"h-[80vh]"},[e(y,{value:o,onSave:s},null)])]}),e(i,{span:"18"},{default:()=>[e("pre",{class:"overflow-auto max-h-[calc(100vh-10rem)] !bg-none !bg-transparent",ref:t},[n.value])]})]})]})}});export{x as default};
