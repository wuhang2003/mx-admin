import{E as s}from"./ExternalLink-ba140d4f.js";import{b as d,I as f}from"./endpoint-e830d229.js";import{d as c,h as k,ax as m,l,W as p,k as t,s as T,I as x,M as g}from"./index-b99e499e.js";import{a as L}from"./DataTable-5b13423f.js";const S=c({props:{inPageTo:{type:String,required:!0},title:{type:String,required:!0},externalLinkTo:{type:String,required:!1},id:{type:String,required:!1},withToken:{type:Boolean,required:!1}},setup(e,{slots:i}){const{viewport:a}=k(m),o=l(()=>a.value.widest||a.value.wider),n=l(()=>{if(!e.externalLinkTo)return null;try{return new URL(e.externalLinkTo,e.externalLinkTo.startsWith("/")?p:void 0).toString()}catch{return null}}),u=d(e.id,e.withToken);return()=>t(g,{to:e.inPageTo,class:"inline-flex items-center space-x-2"},{default:()=>[t(L,{lineClamp:2,tooltip:{width:500}},{default:()=>[e.title]}),i.default?.(),n.value&&t(T,{text:!0,tag:"a",class:"cursor-[alias]",href:n.value,target:"_blank",type:"primary",onClick:r=>r.stopPropagation()},{default:()=>[t(x,null,{default:()=>[t(s,null,null)]})]}),e.id&&o.value&&t(f,{path:u},null)]})}});export{S as T};
