import{H as N}from"./rounded-button-7a623405.js";import{d as x,s as o,w as y,g as b,R as i,h as t,N as T,J as p,l as k,k as d,K as C,aL as F,j as w,bq as U,av as B,F as E,ar as A,C as S}from"./index-804307be.js";import{T as I}from"./index-4415190c.js";import{a as M,b as P,N as j}from"./Upload-90e0249f.js";import{N as z,a as v}from"./Tabs-f62c6793.js";import{N as D}from"./ButtonGroup-8823d1a9.js";import{N as J}from"./Popconfirm-301c69e1.js";import"./DataTable-67f5f31f.js";import"./ChevronRight-8cf2cfda.js";import"./Checkbox-53683e49.js";import"./Select-d3aefacf.js";import"./Tag-e59efcdf.js";import"./Pagination-27728250.js";import"./prop-8b8caa29.js";import"./Forward-ba38e4aa.js";import"./Tooltip-d72ab002.js";import"./Add-e7916ada.js";import"./utils-5c23c3b3.js";import"./throttle-15c9b430.js";const re=x({setup(){const a=o("icon"),r=o([]);y(()=>a.value,()=>{m()}),b(()=>{m()});const s=o(!1),m=()=>{s.value=!0,i.api.files(a.value).get().then(({data:e})=>{r.value=e,s.value=!1})},n=o(!1),g=async e=>{if(a.value==="icon"){if(e.file.file?.type.startsWith("image"))return!0;message.error("只能上传图片文件，请重新上传")}return!1},h=({file:e,event:l})=>{const u=l?.target,{url:c,name:f}=JSON.parse(u.responseText);return e.name=f,e.url=c,r.value.unshift({url:c,name:f}),e};return()=>t(S,{actionsElement:t(E,null,[t(N,{variant:"info",onClick:()=>{n.value=!0},icon:t(A,null,null)},null)])},{default:()=>[t(z,{value:a.value,onUpdateValue:e=>{a.value=e}},{default:()=>[t(v,{tab:"图标",name:"icon"},null),t(v,{tab:"头像",name:"avatar"},null)]}),t(I,{loading:s.value,data:r,columns:[{key:"name",title:"文件名",width:300,ellipsis:{lineClamp:1,tooltip:!0}},{key:"url",title:"URL",render(e){return t(T,{placement:"bottom",class:"max-w-[400px]"},{trigger(){return t("a",{href:e.url,target:"_blank"},[e.url])},default(){return t(p,{bordered:!0},{default:()=>[t(M,{src:e.url},null)]})}})}},{key:"action",title:"操作",width:150,render(e){return t(D,null,{default:()=>[t(J,{onPositiveClick:()=>{i.api.files(a.value)(e.name).delete().then(()=>{message.success("删除成功"),r.value=r.value.filter(l=>l.name!==e.name)})}},{trigger(){return t(k,{text:!0,type:"error",tertiary:!0,size:"tiny"},{default:()=>[d("删除")]})},default(){return`确定要删除 ${e.name} 吗？`}})]})}}]},null),t(C,{closable:!0,closeOnEsc:!0,onClose:()=>{n.value=!1},show:n.value,onUpdateShow:e=>{n.value=e}},{default:()=>[t(p,{title:"文件上传",class:"modal-card sm flex justify-center",closable:!0,onClose:()=>{n.value=!1}},{default:()=>[t(P,{class:"flex flex-col items-center w-full",headers:{authorization:F()||""},action:`${i.endpoint}/files/upload?type=${a.value}`,"directory-dnd":!0,multiple:!0,onBeforeUpload:g,onFinish:h,onError:e=>{const l=e.event?.target;if(e.file.status="error",!l)return message.warning("网络异常"),e.file;const{message:u}=JSON.parse(l.responseText);return message.warning(u),e.file}},{default:()=>[t(j,{class:"flex flex-col items-center justify-center w-full m-auto py-28"},{default:()=>[t(w,{size:"48",depth:"3"},{default:()=>[t(U,null,null)]}),t(B,{class:"mt-2"},{default:()=>[d("点击或者拖动文件到该区域来上传")]})]})]})]})]})]})}});export{re as default};
