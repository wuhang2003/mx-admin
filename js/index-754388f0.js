import{a as f,u as b}from"./use-async-monaco-606537d7.js";import{aM as p,K as g,x as y}from"./app-976c8860.js";import{T as N}from"./two-col-a11898fb.js";import{E as m}from"./types-a9f3cfbf.js";import{J as s}from"./use-store-ref-4b184b85.js";import{k as S,y as T,at as h,U as a,aO as w,br as M}from"./Button-b701b7aa.js";import{N as x}from"./Form-1e2d1f39.js";import{N as i}from"./FormItem-339a3c72.js";import{N as d}from"./Select-a2a95bdb.js";import"./preload-helper-f651ca80.js";import"./index-bc6fd2c6.js";import"./Spin-6ba2d125.js";import"./index-1b8f17cb.js";import"./editor.main-71bd45ae.js";import"./editor.api-d013f7b4.js";import"./monaco.contribution-7aa2b3d9.js";import"./use-save-confirm-fb63ae4f.js";import"./Card-6ffecc90.js";import"./context-079b71da.js";import"./light-b0b9390b.js";import"./light-a088cd9f.js";import"./Tag-0091d0ba.js";import"./_common-991711fd.js";const C=t=>{switch(t){case"objectId":return((o=Math,r=Date,l=16,n=u=>o.floor(u).toString(l))=>n(r.now()/1e3)+" ".repeat(l).replace(/./g,()=>n(o.random()*l)))();case"now":return new Date().toISOString();case"randomtext":return btoa(Math.random().toString()).substring(10,5);case"randomnumber":return Math.floor(Math.random()*1e4);default:return`{{${t}}}`}},Y=S({setup(){const t=s("debug-event-name",m.POST_CREATE),o=s("debug-event",{}),r=s("debug-event-type","web"),l=f({value:o.value[t.value]??"const data = {}"}),n=T();h(()=>t.value,e=>{u.editor.setValue(o.value[e]||"")});const u=b(n,l,e=>{o.value={...o.value,[t.value]:e}},{language:"typescript",unSaveConfirm:!1}),c=async()=>{const e=o.value[t.value]?.replace(/(\{\{(.*?)\}\})/g,(E,V,v)=>C(v))??"";y.api.debug.events.post({params:{type:r.value,event:t.value},data:new Function(`return ${e.replace(/^const data = /,"")}`)()})};return()=>a(g,null,{default:()=>[a(N,null,{default:()=>[a(p,{span:"12"},{default:()=>[a(x,null,{default:()=>[a(i,{label:"Type"},{default:()=>[a(d,{tag:!0,filterable:!0,value:r.value,onUpdateValue:e=>void(r.value=e),options:["web","all","admin"].map(e=>({value:e,label:e}))},null)]}),a(i,{label:"Event"},{default:()=>[a(d,{tag:!0,filterable:!0,value:t.value,onUpdateValue:e=>void(t.value=e),options:Object.keys(m).map(e=>({value:e,label:e}))},null)]})]}),a("div",null,[a(w,{type:"primary",onClick:c},{default:()=>[M("测试")]})])]}),a(p,{span:"24"},{default:()=>[a("div",{class:"h-[calc(100vh-20rem)] relative"},[a("div",{ref:n,class:"h-full"},null)])]})]})]})}});export{Y as default};
