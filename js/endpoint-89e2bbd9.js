import{d as a,h as r,l,aK as u,N as s,R as p,aL as i}from"./index-b7f3c7f1.js";const c=a({props:{url:{type:String,required:!0}},setup(e){return()=>r("iframe",{src:e.url,class:"max-w-full w-[60ch] h-[60vh]"},null)}}),g=a({props:{path:{type:String,required:!0}},setup(e){return()=>r(s,{placement:"right",class:"!p-0"},{default(){return r(c,{url:e.path},null)},trigger(){return r(l,{text:!0,type:"primary",tag:"a",target:"_blank",href:e.path,onClick:t=>{t.stopPropagation()}},{default:()=>[r(u,null,null)]})}})}}),h=(e,t)=>{const o=p.endpoint,n=new URL(o);return`${n.protocol}//${n.host}/render/markdown/${e}${t?`?token=${i()}`:""}`};export{g as I,h as b};
