import{T as S}from"./index-cca5dafd.js";import{R as B}from"./relative-time-40d4f7b6.js";import{u as F}from"./use-table-0a4faa6d.js";import{d as c,b as T,s as x,al as k,R as i,w as C,g as E,i as R,h as t,l as D,k as u,m,C as M,L as A}from"./index-85889586.js";import{S as O,b as j,c as q,d as L}from"./index-0883cb41.js";import{N as P}from"./Popconfirm-851aecc8.js";import{N as V}from"./Tag-c94d3cf9.js";import{N as K}from"./Switch-aff33488.js";import"./DataTable-a8936fb3.js";import"./ChevronRight-9c7c66f3.js";import"./Checkbox-57192654.js";import"./Select-017984d3.js";import"./Pagination-a32d0ce0.js";import"./prop-8b8caa29.js";import"./Forward-c0fc548e.js";import"./Ellipsis-3e5ed891.js";import"./Tooltip-60d6807f.js";const z=new Map([[O,"博文"],[j,"手记"],[q,"速记"],[L,"说说"]]);function b(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!A(a)}const ue=c({setup(){const a=T(),r=x(!1);k(async()=>{const e=await i.api.subscribe.status.get().then(o=>o.enable);r.value=e});const s=async()=>{await i.api.options("featureList").patch({data:{emailSubscribe:!r.value}}),r.value=!r.value},{loading:f,checkedRowKeys:g,data:y,pager:l,fetchDataFn:p}=F((e,o)=>async(w=a.query.page||1,N=10)=>{const d=await i.api.subscribe.get({params:{page:w,size:N,sortBy:"created",sortOrder:"-1"}});e.value=d.data,o.value=d.pagination}),n=p;C(()=>a.query.page,async e=>{await n(e)}),E(async()=>{await p()});const h=R(()=>[{title:"邮箱",key:"email",ellipsis:{tooltip:!0},width:140},{title:"订阅内容",key:"subscribe",width:250,render(e){return t(U,{bit:e.subscribe},null)}},{title:"创建于",width:250,key:"created",sortOrder:"descend",render(e){return t(B,{time:e.created},null)}},{title:"操作",fixed:"right",width:40,key:"id",render(e){return t(m,null,{default:()=>[t(P,{positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await i.api.subscribe.unsubscribe.get({params:{email:e.email,cancelToken:e.cancelToken}}),message.success("删除成功"),await n(l.value.currentPage)}},{trigger:()=>t(D,{text:!0,type:"error",size:"tiny"},{default:()=>[u("移除")]}),default:()=>t("span",{class:"max-w-48"},[u("确定要删除 "),e.title,u("？")])})]})}}]),v=c(()=>()=>t("div",{class:"inline-flex items-center"},[t("span",null,[u("邮件订阅开启状态：")]),t(K,{value:r.value,onChange:s},null)]));return()=>t(M,{description:t(v,null,null)},{default:()=>[t(S,{data:y,loading:f.value,columns:h.value,onFetchData:n,pager:l,onUpdateCheckedRowKeys:e=>{g.value=e}},null)]})}}),U=c({props:{bit:{type:Number,required:!0}},render(){const a=[];for(const[r,s]of z.entries())r&this.bit&&a.push(t(V,{round:!0},b(s)?s:{default:()=>[s]}));return t(m,null,b(a)?a:{default:()=>[a]})}});export{U as SubscribeBit,ue as default};
