import{_ as p}from"./preload-helper-f651ca80.js";import{H as c}from"./rounded-button-ae3194ff.js";import{F as d,d as f}from"./index-f0f725c0.js";import{_ as v}from"./CheckCircleOutlined-28a14f15.js";import{q as g,aM as i,K as _,x as h}from"./app-447ba742.js";import{T as y}from"./two-col-738d9fb2.js";import{J as S}from"./use-store-ref-095f705c.js";import{k as T,y as l,U as e,F as E}from"./Button-5ec267f1.js";import"./use-async-monaco-25cb0755.js";import"./index-6a5b60dd.js";import"./Spin-2c3e5ca3.js";import"./index-1b8f17cb.js";import"./editor.main-2236456e.js";import"./editor.api-cae69a5e.js";import"./monaco.contribution-c3c8f3e4.js";import"./use-save-confirm-5396f481.js";import"./vue.runtime.esm-bundler-e0826230.js";import"./Card-73dd4072.js";const q=T({setup(){const o=S("debug-serverless",f),u=g(),a=l(),n=l(""),s=async()=>{try{const r=await h.api.debug.function.post({data:{function:o.value},errorHandler:t=>{n.value=`Error: ${t.data.message}`,u.error(t.data.message)}});p(()=>import("./editor.main-2236456e.js").then(t=>t.e),["js/editor.main-2236456e.js","js/editor.api-cae69a5e.js","assets/editor-7a4e943b.css","js/preload-helper-f651ca80.js","js/monaco.contribution-c3c8f3e4.js","assets/editor-90fabead.css"]).then(t=>{t.editor.colorize(JSON.stringify(r.data,null,2),"typescript",{tabSize:2}).then(m=>{a.value.innerHTML=m}).catch(()=>{a.value.innerHTML=JSON.stringify(r,null,2)})})}catch{}};return()=>e(_,{actionsElement:e(E,null,[e(c,{icon:e(v,null,null),onClick:s},null)])},{default:()=>[e(y,null,{default:()=>[e(i,{span:"18"},{default:()=>[e("div",{class:"h-[80vh]"},[e(d,{value:o,onSave:s},null)])]}),e(i,{span:"18"},{default:()=>[e("pre",{class:"overflow-auto max-h-[calc(100vh-10rem)] !bg-none !bg-transparent",ref:a},[n.value])]})]})]})}});export{q as default};
