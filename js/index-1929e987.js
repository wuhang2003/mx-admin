import{a as f,u as b}from"./use-async-monaco-dcdb80f3.js";import{d as g,et as s,s as y,w as h,h as a,c3 as d,l as w,k as N,C as S,R as T}from"./index-a5dd80c2.js";import{T as x}from"./two-col-2cf03726.js";import{E as p}from"./types-a9f3cfbf.js";import{N as C}from"./Form-ab7268b7.js";import{N as c}from"./FormItem-24e41756.js";import{N as i}from"./Select-00aee6c5.js";import"./index-cd66362b.js";import"./use-save-confirm-de11005b.js";import"./Tag-f04586d2.js";const E=t=>{switch(t){case"objectId":return((l=Math,o=Date,r=16,n=u=>l.floor(u).toString(r))=>n(o.now()/1e3)+" ".repeat(r).replace(/./g,()=>n(l.random()*r)))();case"now":return new Date().toISOString();case"randomtext":return btoa(Math.random().toString()).substring(10,5);case"randomnumber":return Math.floor(Math.random()*1e4);default:return`{{${t}}}`}},G=g({setup(){const t=s("debug-event-name",p.POST_CREATE),l=s("debug-event",{}),o=s("debug-event-type","web"),r=f({value:l.value[t.value]||"export default {}"}),n=y();h(()=>t.value,e=>{u.editor.setValue(l.value[e]||"")});const u=b(n,r,e=>{l.value={...l.value,[t.value]:e}},{language:"typescript",unSaveConfirm:!1}),v=async()=>{const e=l.value[t.value]?.replace(/(\{\{(.*?)\}\})/g,(M,V,m)=>E(m))??"";T.api.debug.events.post({params:{type:o.value,event:t.value},data:new Function(`return ${e.replace(/^export default /,"")}`)()})};return()=>a(S,null,{default:()=>[a(x,null,{default:()=>[a(d,{span:"12"},{default:()=>[a(C,null,{default:()=>[a(c,{label:"Type"},{default:()=>[a(i,{tag:!0,filterable:!0,value:o.value,onUpdateValue:e=>void(o.value=e),options:["web","all","admin"].map(e=>({value:e,label:e}))},null)]}),a(c,{label:"Event"},{default:()=>[a(i,{tag:!0,filterable:!0,value:t.value,onUpdateValue:e=>void(t.value=e),options:Object.keys(p).map(e=>({value:e,label:e}))},null)]})]}),a("div",null,[a(w,{type:"primary",onClick:v},{default:()=>[N("测试")]})])]}),a(d,{span:"24"},{default:()=>[a("div",{class:"h-[calc(100vh-20rem)] relative"},[a("div",{ref:n,class:"h-full"},null)])]})]})]})}});export{G as default};
