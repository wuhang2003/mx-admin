import{Y as u,x as l,H as s}from"./app-55917f23.js";import{k as a,U as e,aO as p,bs as i}from"./Button-d9ff6831.js";const c=a({props:{url:{type:String,required:!0}},setup(r){return()=>e("iframe",{src:r.url,class:"max-w-full w-[60ch] h-[60vh]"},null)}}),m=a({props:{path:{type:String,required:!0}},setup(r){return()=>e(i,{placement:"right",class:"!p-0"},{default(){return e(c,{url:r.path},null)},trigger(){return e(p,{text:!0,type:"primary",tag:"a",target:"_blank",href:r.path,onClick:t=>{t.stopPropagation()}},{default:()=>[e(u,null,null)]})}})}}),f=(r,t)=>{const o=l.endpoint,n=new URL(o);return`${n.protocol}//${n.host}/render/markdown/${r}${t?`?token=${s()}`:""}`};export{m as I,f as b};
