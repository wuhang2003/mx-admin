import{E as s}from"./ExternalLink-abae2733.js";import{b as d,I as f}from"./endpoint-89e2bbd9.js";import{d as c,e as m,ax as k,i,W as p,h as t,l as T,I as x,H as g}from"./index-b7f3c7f1.js";import{a as L}from"./DataTable-221790ec.js";const S=c({props:{inPageTo:{type:String,required:!0},title:{type:String,required:!0},externalLinkTo:{type:String,required:!1},id:{type:String,required:!1},withToken:{type:Boolean,required:!1}},setup(e,{slots:l}){const{viewport:a}=m(k),o=i(()=>a.value.widest||a.value.wider),n=i(()=>{if(!e.externalLinkTo)return null;try{return new URL(e.externalLinkTo,e.externalLinkTo.startsWith("/")?p:void 0).toString()}catch{return null}}),u=d(e.id,e.withToken);return()=>t(g,{to:e.inPageTo,class:"inline-flex items-center space-x-2"},{default:()=>[t(L,{lineClamp:2,tooltip:{width:500}},{default:()=>[e.title]}),l.default?.(),n.value&&t(T,{text:!0,tag:"a",class:"cursor-[alias]",href:n.value,target:"_blank",type:"primary",onClick:r=>r.stopPropagation()},{default:()=>[t(x,null,{default:()=>[t(s,null,null)]})]}),e.id&&o.value&&t(f,{path:u},null)]})}});export{S as T};
