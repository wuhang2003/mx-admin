import{q as h,x as i,J as v,K as B}from"./app-4e878528.js";import{T as w}from"./title-link-5670a46d.js";import{D as x}from"./delete-confirm-da178cf9.js";import{T as D}from"./index-e8d19fe4.js";import{R as m}from"./relative-time-e18259fe.js";import{u as O}from"./use-table-8630278f.js";import{r as P}from"./use-store-ref-4d0ce661.js";import{H as R}from"./rounded-button-526cbe3b.js";import{k as p,au as b,R as N,U as t,F,B as C,aO as L,br as n}from"./Button-5ec267f1.js";import{N as K}from"./Popconfirm-2fba7cb3.js";import{a as M}from"./Spin-2c3e5ca3.js";import"./preload-helper-f651ca80.js";import"./Card-73dd4072.js";import"./ExternalLink-8017d0fb.js";import"./endpoint-4707c7f8.js";import"./DataTable-141d81fb.js";import"./ChevronRight-54213128.js";import"./Checkbox-746a5c9b.js";import"./light-cfc8873a.js";import"./light-8c190bae.js";import"./light-1b9cf32a.js";import"./light-1d805342.js";import"./light-efffb436.js";import"./Select-410a3ac9.js";import"./Tag-62076a6b.js";import"./_common-991711fd.js";import"./Pagination-da024bd8.js";import"./Forward-414cae36.js";import"./prop-8b8caa29.js";import"./Tooltip-354350ce.js";import"./light-013cc201.js";const pe=p({name:"PageList",setup(){const{checkedRowKeys:s,data:c,pager:l,sortProps:a,fetchDataFn:f}=O((r,e)=>async(y=d.query.page||1,T=20)=>{const k=await i.api.pages.get({params:{page:y,size:T,select:"title subtitle _id id created modified slug",...a.sortBy?{sortBy:a.sortBy,sortOrder:a.sortOrder}:{}}});r.value=k.data}),u=h(),d=P(),o=f;b(()=>d.query.page,async r=>{await o(r)}),N(async()=>{await o()});const g=p({setup(){const r=C([{type:"selection",options:["none","all"]},{title:"标题",sortOrder:!1,sorter:"default",key:"title",width:300,render(e){return t(w,{inPageTo:`/pages/edit?id=${e.id}`,title:e.title,externalLinkTo:`/${e.slug}`,id:e.id},null)}},{title:"副标题",key:"subtitle"},{title:"路径",key:"slug",render(e){return`/${e.slug}`}},{title:"创建于",key:"created",sortOrder:"descend",sorter:"default",render(e){return t(m,{time:e.created},null)}},{title:"修改于",key:"modified",sorter:"default",sortOrder:!1,render(e){return t(m,{time:e.modified},null)}},{title:"操作",fixed:"right",key:"id",render(e){return t(M,null,{default:()=>[t(K,{positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await i.api.pages(e.id).delete(),u.success("删除成功"),await o(l.value.currentPage)}},{trigger:()=>t(L,{text:!0,type:"error",size:"tiny"},{default:()=>[n("移除")]}),default:()=>t("span",{class:"max-w-48"},[n("确定要删除 "),e.title,n(" ?")])})]})}}]);return()=>t(D,{noPagination:!0,columns:r,data:c,onFetchData:o,pager:l,onUpdateCheckedRowKeys:e=>{s.value=e},onUpdateSorter:async e=>{a.sortBy=e.sortBy,a.sortOrder=e.sortOrder}},null)}});return()=>t(B,null,{actions:()=>t(F,null,[t(x,{checkedRowKeys:s.value,onDelete:async()=>{const r=await Promise.allSettled(s.value.map(e=>i.api.pages(e).delete()));for(const e of r)e.status==="rejected"&&u.success(`删除失败，${e.reason.message}`);s.value.length=0,o()}},null),t(R,{to:"/pages/edit",icon:t(v,null,null)},null)]),default:()=>t(g,null,null)})}});export{pe as ManagePageListView};
