import{i as f,N as c}from"./use-store-ref-4d0ce661.js";import{u as m}from"./category-1a4a38e8.js";import{N as d}from"./Select-410a3ac9.js";import{k as v,y as n,au as o,U as u,br as y,F as p}from"./Button-5ec267f1.js";import{q as S}from"./app-4e878528.js";const C=v({props:{initialValue:{type:String,required:!0},onSubmit:{type:Function,required:!0},placeholder:{type:String},type:{type:String,default:"input"},options:{type:Array,default:()=>[]},returnToConfrim:{type:Boolean,default:!0}},setup(e){const a=n(e.initialValue);o(()=>e.initialValue,t=>{a.value=t});const l=n(!1),i=n(),s=S();o(()=>l.value,t=>{e.returnToConfrim&&t&&(s.info("回车以完成修改",{duration:1500}),requestAnimationFrame(()=>{i.value?.focus()}))});const r=()=>{e.onSubmit(a.value),l.value=!1};return f(m),()=>u(p,null,[l.value?u("div",{class:"flex items-center w-full relative flex-nowrap"},[(()=>{switch(e.type){case"input":return u(c,{onKeydown:t=>{t.key=="Enter"&&r()},class:"w-3/4",value:a.value,placeholder:e.placeholder??e.initialValue,size:"tiny",autofocus:!0,ref:i,onBlur:()=>{l.value=!1},onInput:t=>{a.value=t}},null);case"select":return u(d,{class:"w-full",placeholder:e.placeholder??e.initialValue,value:a.value,onUpdateValue:t=>{a.value=t,r()},onBlur:()=>{l.value=!1},options:e.options},null)}})()]):u("button",{class:"w-full text-left",onClick:()=>{l.value=!0}},[e.initialValue,y(" ")])])}});export{C as E};
