import{E as s}from"./ExternalLink-fbf702a3.js";import{b as d,I as f}from"./endpoint-ab7a1487.js";import{T as c}from"./app-976c8860.js";import{i as m,u as k,I as p,k as T}from"./use-store-ref-4b184b85.js";import{N as g}from"./DataTable-fbbadfbc.js";import{k as x,n as i,U as t,aO as L}from"./Button-b701b7aa.js";const q=x({props:{inPageTo:{type:String,required:!0},title:{type:String,required:!0},externalLinkTo:{type:String,required:!1},id:{type:String,required:!1},withToken:{type:Boolean,required:!1}},setup(e,{slots:l}){const{viewport:r}=m(k),o=i(()=>r.value.widest||r.value.wider),n=i(()=>{if(!e.externalLinkTo)return null;try{return new URL(e.externalLinkTo,e.externalLinkTo.startsWith("/")?c:void 0).toString()}catch{return null}}),u=d(e.id,e.withToken);return()=>t(T,{to:e.inPageTo,class:"inline-flex items-center space-x-2"},{default:()=>[t(g,{lineClamp:2,tooltip:{width:500}},{default:()=>[e.title]}),l.default?.(),n.value&&t(L,{text:!0,tag:"a",class:"cursor-[alias]",href:n.value,target:"_blank",type:"primary",onClick:a=>a.stopPropagation()},{default:()=>[t(p,null,{default:()=>[t(s,null,null)]})]}),e.id&&o.value&&t(f,{path:u},null)]})}});export{q as T};
