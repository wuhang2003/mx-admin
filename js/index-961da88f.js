import{a as f,u as b}from"./use-async-monaco-5f5a4b46.js";import{d as g,et as s,x as y,w,k as a,c4 as d,s as N,p as S,C as T,R as h}from"./index-b99e499e.js";import{T as x}from"./two-col-82597412.js";import{E as p}from"./types-a9f3cfbf.js";import{N as C}from"./Form-eb67836e.js";import{N as c}from"./FormItem-2477962f.js";import{N as i}from"./Select-11727ae9.js";import"./index-2295583f.js";import"./index-1b8f17cb.js";import"./use-save-confirm-f2ef0770.js";import"./Tag-3f8dfd3a.js";const E=t=>{switch(t){case"objectId":return((l=Math,o=Date,r=16,n=u=>l.floor(u).toString(r))=>n(o.now()/1e3)+" ".repeat(r).replace(/./g,()=>n(l.random()*r)))();case"now":return new Date().toISOString();case"randomtext":return btoa(Math.random().toString()).substring(10,5);case"randomnumber":return Math.floor(Math.random()*1e4);default:return`{{${t}}}`}},P=g({setup(){const t=s("debug-event-name",p.POST_CREATE),l=s("debug-event",{}),o=s("debug-event-type","web"),r=f({value:l.value[t.value]||"export default {}"}),n=y();w(()=>t.value,e=>{u.editor.setValue(l.value[e]||"")});const u=b(n,r,e=>{l.value={...l.value,[t.value]:e}},{language:"typescript",unSaveConfirm:!1}),m=async()=>{const e=l.value[t.value]?.replace(/(\{\{(.*?)\}\})/g,(M,V,v)=>E(v))??"";h.api.debug.events.post({params:{type:o.value,event:t.value},data:new Function(`return ${e.replace(/^export default /,"")}`)()})};return()=>a(T,null,{default:()=>[a(x,null,{default:()=>[a(d,{span:"12"},{default:()=>[a(C,null,{default:()=>[a(c,{label:"Type"},{default:()=>[a(i,{tag:!0,filterable:!0,value:o.value,onUpdateValue:e=>void(o.value=e),options:["web","all","admin"].map(e=>({value:e,label:e}))},null)]}),a(c,{label:"Event"},{default:()=>[a(i,{tag:!0,filterable:!0,value:t.value,onUpdateValue:e=>void(t.value=e),options:Object.keys(p).map(e=>({value:e,label:e}))},null)]})]}),a("div",null,[a(N,{type:"primary",onClick:m},{default:()=>[S("测试")]})])]}),a(d,{span:"24"},{default:()=>[a("div",{class:"h-[calc(100vh-20rem)] relative"},[a("div",{ref:n,class:"h-full"},null)])]})]})]})}});export{P as default};
