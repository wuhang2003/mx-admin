import{H as g}from"./rounded-button-b3c86bd2.js";import{d,o as h,c as f,a as u,al as z,h as t,bd as B,m as C,l as m,k as r,F,C as R,R as i,dr as x}from"./index-c46c2349.js";import{D}from"./delete-confirm-750a4544.js";import{T as E}from"./index-118ab728.js";import{u as V}from"./use-table-64b6ae27.js";import{N as y}from"./Popconfirm-9cc2cdaf.js";import"./DataTable-f1a241b1.js";import"./ChevronRight-bd593636.js";import"./Checkbox-518c5b62.js";import"./Select-a5c7028c.js";import"./Tag-7255e277.js";import"./Pagination-b98fc1f8.js";import"./prop-8b8caa29.js";import"./Forward-cb67db5e.js";import"./Tooltip-20ee4571.js";const A={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},N=u("path",{d:"M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8z",fill:"none"},null,-1),$=u("path",{d:"M292 64h-72a4 4 0 0 0-4 4v28h80V68a4 4 0 0 0-4-4z",fill:"none"},null,-1),M=u("path",{d:"M447.55 96H336V48a16 16 0 0 0-16-16H192a16 16 0 0 0-16 16v48H64.45L64 136h33l20.09 314A32 32 0 0 0 149 480h214a32 32 0 0 0 31.93-29.95L415 136h33zM176 416l-9-256h33l9 256zm96 0h-32V160h32zm24-320h-80V68a4 4 0 0 1 4-4h72a4 4 0 0 1 4 4zm40 320h-33l9-256h33z",fill:"currentColor"},null,-1),H=[N,$,M],I=d({name:"TrashSharp",render:function(a,c){return h(),f("svg",A,H)}}),K={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},L=u("path",{d:"M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.16 0-7.74 2.42-9.44 5.93c-.32.67.04 1.47.75 1.71c.59.2 1.23-.08 1.5-.64c1.3-2.66 4.03-4.5 7.19-4.5c1.95 0 3.73.72 5.12 1.88l-1.91 1.91c-.63.63-.19 1.71.7 1.71H21c.55 0 1-.45 1-1V9.41c0-.89-1.08-1.34-1.71-.71l-1.89 1.9z",fill:"currentColor"},null,-1),P=[L],S=d({name:"RedoRound",render:function(a,c){return h(),f("svg",K,P)}}),U={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},j=u("path",{d:"M12.5 8c-2.65 0-5.05.99-6.9 2.6L3.71 8.71C3.08 8.08 2 8.52 2 9.41V15c0 .55.45 1 1 1h5.59c.89 0 1.34-1.08.71-1.71l-1.91-1.91c1.39-1.16 3.16-1.88 5.12-1.88c3.16 0 5.89 1.84 7.19 4.5c.27.56.91.84 1.5.64c.71-.23 1.07-1.04.75-1.72C20.23 10.42 16.65 8 12.5 8z",fill:"currentColor"},null,-1),W=[j],q=d({name:"UndoRound",render:function(a,c){return h(),f("svg",U,W)}}),ce=d(()=>{const{checkedRowKeys:s,data:a,fetchDataFn:c,loading:k}=V(e=>async()=>{const o=(await i.api.backups.get()).data;o.sort((l,p)=>p.filename.localeCompare(l.filename)),e.value=o});z(()=>{c()});const v=async()=>{const e=message.info("备份中",{duration:1e9,closable:!0}),n=await i.api.backups.new.get({responseType:"blob",timeout:1e9});e.destroy(),message.success("备份完成"),x(n,"backup.zip")},b=async()=>{const e=document.createElement("input");e.type="file",e.style.cssText="position: absolute; opacity: 0; z-index: -9999;top: 0; left: 0",e.accept=".zip",document.body.append(e),e.click(),e.onchange=()=>{const n=e.files[0],o=new FormData;o.append("file",n),i.api.backups.rollback.post({data:o,timeout:1<<30}).then(()=>{message.success("恢复成功，页面将会重载"),setTimeout(()=>{location.reload()},1e3)})}},w=async e=>{let n="";if(Array.isArray(e)?n=e.join(","):n=e,await i.api.backups.delete({data:{files:n}}),message.success("删除成功"),Array.isArray(e))e.forEach(o=>{const l=a.value.findIndex(p=>p.filename===o);l!=-1&&a.value.splice(l,1)});else{const o=a.value.findIndex(l=>l.filename===e);o!=-1&&a.value.splice(o,1)}},_=async e=>{await i.api.backups.rollback(e).patch({}),message.info("回滚中",{closable:!0,duration:1e9})},T=async e=>{const n=message.info("下载中",{duration:1e9,closable:!0}),o=await i.api.backups(e).get({responseType:"blob",timeout:1e9});n.destroy(),message.success("下载完成"),x(o,`${e}.zip`)};return()=>t(R,{actionsElement:t(F,null,[t(g,{icon:t(q,null,null),name:"立即备份",variant:"primary",onClick:v},null),t(g,{icon:t(S,null,null),onClick:b,name:"上传恢复",variant:"info"},null),t(D,{checkedRowKeys:s.value,onDelete:async()=>{w(s.value)},customIcon:t(I,null,null),customButtonTip:"批量删除"},null)])},{default:()=>[t(E,B({data:a,fetchDataFn:c},{checkedRowKey:"filename",loading:k.value,nTableProps:{maxHeight:"calc(100vh - 17rem)"},onUpdateCheckedRowKeys:e=>{s.value=e},maxWidth:500,columns:[{type:"selection",options:["none","all"]},{title:"日期",key:"filename",width:300},{title:"大小",key:"size",width:200},{title:"操作",fixed:"right",width:200,key:"filename",render(e){const n=e.filename;return t(C,{inline:!0},{default:()=>[t(m,{text:!0,size:"tiny",type:"primary",onClick:()=>void T(n)},{default:()=>[r("下载")]}),t(y,{positiveText:"取消",negativeText:"回退",onNegativeClick:()=>{_(n)}},{trigger:()=>t(m,{text:!0,size:"tiny",type:"warning"},{default:()=>[r("回退")]}),default:()=>t("span",{class:"max-w-48"},[r("确定要回退？")])}),t(y,{positiveText:"取消",negativeText:"删除",onNegativeClick:()=>{w(n)}},{trigger:()=>t(m,{text:!0,size:"tiny",type:"error"},{default:()=>[r("移除")]}),default:()=>t("span",{class:"max-w-48"},[r("确定要删除？")])})]})}}],noPagination:!0}),null)]})});export{ce as default};
