import{d as o,h as r,p as m,N as u,s as l,aw as a,g as s,x as v}from"./index-b7f3c7f1.js";const n=o({props:{time:{type:[String,Date],required:!0}},setup(e){const i=l(a(e.time));let t;return s(()=>{e.time&&(t=setInterval(()=>{i.value=a(e.time)},1e3))}),v(()=>{t&&(t=clearInterval(t))}),()=>i.value}}),f=o({props:{time:{type:[String,Date],required:!0},showPopoverInfoAbsoluteTime:{type:Boolean,default:!0}},setup(e){return()=>e.showPopoverInfoAbsoluteTime?r(u,{trigger:"hover"},{trigger(){return r("span",null,[r(n,{time:e.time},null)])},default(){return e.time?m(e.time,"yyyy 年 M 月 d 日 HH:mm:ss"):"此内容自发布以来没有被修改过"}}):r(n,{time:e.time},null)}});export{f as R};
