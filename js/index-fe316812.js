import{T as S}from"./index-93ac63db.js";import{R as x}from"./relative-time-b505e103.js";import{u as B}from"./use-table-8106cf9f.js";import{x as o,K as F}from"./app-b7431b11.js";import{r as T}from"./use-store-ref-095f705c.js";import{S as k,b as C,c as E,d as R}from"./index-33f0dfbe.js";import{k as c,y as q,aq as D,au as M,R as O,n as A,U as t,bq as j,aO as K,br as s}from"./Button-5ec267f1.js";import{N as P}from"./Tag-62076a6b.js";import{a as b}from"./Spin-2c3e5ca3.js";import{N as V}from"./Popconfirm-fe8b747a.js";import{N as L}from"./Switch-82196aed.js";import"./DataTable-e0c5d901.js";import"./ChevronRight-54213128.js";import"./Checkbox-746a5c9b.js";import"./light-cfc8873a.js";import"./light-04b46a26.js";import"./light-6b4d6176.js";import"./light-1d805342.js";import"./light-efffb436.js";import"./Card-73dd4072.js";import"./Select-410a3ac9.js";import"./Pagination-b2fb44af.js";import"./Forward-414cae36.js";import"./prop-8b8caa29.js";import"./Tooltip-354350ce.js";import"./preload-helper-f651ca80.js";import"./_common-991711fd.js";import"./light-013cc201.js";import"./_common-6222e43f.js";const U=new Map([[k,"博文"],[C,"点滴"],[E,"速记"],[R,"说说"]]);function d(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!j(a)}const he=c({setup(){const a=T(),r=q(!1);D(async()=>{const e=await o.api.subscribe.status.get().then(u=>u.enable);r.value=e});const i=async()=>{await o.api.options("featureList").patch({data:{emailSubscribe:!r.value}}),r.value=!r.value},{loading:f,checkedRowKeys:g,data:y,pager:l,fetchDataFn:p}=B((e,u)=>async(w=a.query.page||1,N=10)=>{const m=await o.api.subscribe.get({params:{page:w,size:N,sortBy:"created",sortOrder:"-1"}});e.value=m.data,u.value=m.pagination}),n=p;M(()=>a.query.page,async e=>{await n(e)}),O(async()=>{await p()});const h=A(()=>[{title:"邮箱",key:"email",ellipsis:{tooltip:!0},width:140},{title:"订阅内容",key:"subscribe",width:250,render(e){return t(z,{bit:e.subscribe},null)}},{title:"创建于",width:250,key:"created",sortOrder:"descend",render(e){return t(x,{time:e.created},null)}},{title:"操作",fixed:"right",width:40,key:"id",render(e){return t(b,null,{default:()=>[t(V,{positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await o.api.subscribe.unsubscribe.get({params:{email:e.email,cancelToken:e.cancelToken}}),message.success("删除成功"),await n(l.value.currentPage)}},{trigger:()=>t(K,{text:!0,type:"error",size:"tiny"},{default:()=>[s("移除")]}),default:()=>t("span",{class:"max-w-48"},[s("确定要删除 "),e.title,s("？")])})]})}}]),v=c(()=>()=>t("div",{class:"inline-flex items-center"},[t("span",null,[s("邮件订阅开启状态：")]),t(L,{value:r.value,onChange:i},null)]));return()=>t(F,{description:t(v,null,null)},{default:()=>[t(S,{data:y,loading:f.value,columns:h.value,onFetchData:n,pager:l,onUpdateCheckedRowKeys:e=>{g.value=e}},null)]})}}),z=c({props:{bit:{type:Number,required:!0}},render(){const a=[];for(const[r,i]of U.entries())r&this.bit&&a.push(t(P,{round:!0},d(i)?i:{default:()=>[i]}));return t(b,null,d(a)?a:{default:()=>[a]})}});export{z as SubscribeBit,he as default};
