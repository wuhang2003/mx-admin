import{x as o}from"./app-b7431b11.js";import{h as s}from"./use-store-ref-095f705c.js";import{y as n,n as p}from"./Button-5ec267f1.js";const g=s("category",()=>{const a=n(),t=p(()=>new Map(a.value?.map(e=>[e.id,e]))||new Map);return{data:a,map:t,get(e){return t.value.get(e)},async fetch(e){if(!a.value||e){const r=await o.api.categories.get({params:{type:"Category"}});a.value=r.data}else return a.value}}});export{g as u};
