import{d as f,s as n,w as o,u as c,e as d,f as v,h as u,t as m,k as y,F as p}from"./index-8a35f31c.js";import{N as h}from"./Select-981246b1.js";const V=f({props:{initialValue:{type:String,required:!0},onSubmit:{type:Function,required:!0},placeholder:{type:String},type:{type:String,default:"input"},options:{type:Array,default:()=>[]},returnToConfrim:{type:Boolean,default:!0}},setup(e){const a=n(e.initialValue);o(()=>e.initialValue,t=>{a.value=t});const l=n(!1),i=n(),s=c();o(()=>l.value,t=>{e.returnToConfrim&&t&&(s.info("回车以完成修改",{duration:1500}),requestAnimationFrame(()=>{i.value?.focus()}))});const r=()=>{e.onSubmit(a.value),l.value=!1};return d(v),()=>u(p,null,[l.value?u("div",{class:"flex items-center w-full relative flex-nowrap"},[(()=>{switch(e.type){case"input":return u(m,{onKeydown:t=>{t.key=="Enter"&&r()},class:"w-3/4",value:a.value,placeholder:e.placeholder??e.initialValue,size:"tiny",autofocus:!0,ref:i,onBlur:()=>{l.value=!1},onInput:t=>{a.value=t}},null);case"select":return u(h,{class:"w-full",placeholder:e.placeholder??e.initialValue,value:a.value,onUpdateValue:t=>{a.value=t,r()},onBlur:()=>{l.value=!1},options:e.options},null)}})()]):u("button",{class:"w-full text-left",onClick:()=>{l.value=!0}},[e.initialValue,y(" ")])])}});export{V as E};
