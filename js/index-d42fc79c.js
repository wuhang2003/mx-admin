import{T as S}from"./index-b37e8693.js";import{R as B}from"./relative-time-0ad8cce8.js";import{u as F}from"./use-table-09e3e9a6.js";import{d as c,f as T,v as x,ai as k,R as i,w as C,j as E,l as R,k as t,s as M,p as n,t as m,C as D,M as j}from"./index-3c95053e.js";import{S as A,b as O,c as q,d as P}from"./index-33f0dfbe.js";import{N as V}from"./Popconfirm-4e505b46.js";import{N as K}from"./Tag-e0bc3d96.js";import{N as L}from"./Switch-9ade454a.js";import"./DataTable-6a868113.js";import"./ChevronRight-32b86c47.js";import"./Checkbox-4c49605e.js";import"./Select-f4a51811.js";import"./Pagination-955024e6.js";import"./prop-8b8caa29.js";import"./Forward-6cab11cb.js";import"./Tooltip-6e37e091.js";const z=new Map([[A,"博文"],[O,"点滴"],[q,"速记"],[P,"说说"]]);function b(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!j(a)}const ie=c({setup(){const a=T(),r=x(!1);k(async()=>{const e=await i.api.subscribe.status.get().then(o=>o.enable);r.value=e});const s=async()=>{await i.api.options("featureList").patch({data:{emailSubscribe:!r.value}}),r.value=!r.value},{loading:f,checkedRowKeys:g,data:y,pager:l,fetchDataFn:p}=F((e,o)=>async(w=a.query.page||1,N=10)=>{const d=await i.api.subscribe.get({params:{page:w,size:N,sortBy:"created",sortOrder:"-1"}});e.value=d.data,o.value=d.pagination}),u=p;C(()=>a.query.page,async e=>{await u(e)}),E(async()=>{await p()});const h=R(()=>[{title:"邮箱",key:"email",ellipsis:{tooltip:!0},width:140},{title:"订阅内容",key:"subscribe",width:250,render(e){return t(U,{bit:e.subscribe},null)}},{title:"创建于",width:250,key:"created",sortOrder:"descend",render(e){return t(B,{time:e.created},null)}},{title:"操作",fixed:"right",width:40,key:"id",render(e){return t(m,null,{default:()=>[t(V,{positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await i.api.subscribe.unsubscribe.get({params:{email:e.email,cancelToken:e.cancelToken}}),message.success("删除成功"),await u(l.value.currentPage)}},{trigger:()=>t(M,{text:!0,type:"error",size:"tiny"},{default:()=>[n("移除")]}),default:()=>t("span",{class:"max-w-48"},[n("确定要删除 "),e.title,n("？")])})]})}}]),v=c(()=>()=>t("div",{class:"inline-flex items-center"},[t("span",null,[n("邮件订阅开启状态：")]),t(L,{value:r.value,onChange:s},null)]));return()=>t(D,{description:t(v,null,null)},{default:()=>[t(S,{data:y,loading:f.value,columns:h.value,onFetchData:u,pager:l,onUpdateCheckedRowKeys:e=>{g.value=e}},null)]})}}),U=c({props:{bit:{type:Number,required:!0}},render(){const a=[];for(const[r,s]of z.entries())r&this.bit&&a.push(t(K,{round:!0},b(s)?s:{default:()=>[s]}));return t(m,null,b(a)?a:{default:()=>[a]})}});export{U as SubscribeBit,ie as default};
