import{d as c,u as h,b as v,w,g as B,h as t,F as x,R as i,A as D,C as P,r as R,l as b,k as n,m as N}from"./index-8cac42f8.js";import{T as O}from"./title-link-aed550df.js";import{D as C}from"./delete-confirm-1c4454cc.js";import{T as F}from"./index-5485a9c8.js";import{R as m}from"./relative-time-faf1427d.js";import{u as L}from"./use-table-b5c3009a.js";import{H as A}from"./rounded-button-584e5982.js";import{N as M}from"./Popconfirm-c6f76c39.js";import"./ExternalLink-0a805c9c.js";import"./endpoint-1f8a4f18.js";import"./DataTable-6b898d98.js";import"./ChevronRight-2e67c6cc.js";import"./Checkbox-a04b515f.js";import"./Select-22e54f09.js";import"./Tag-bd6b4a7c.js";import"./Pagination-70ead485.js";import"./prop-8b8caa29.js";import"./Forward-b4c5fa78.js";import"./Tooltip-4e3cf23b.js";const ee=c({name:"PageList",setup(){const{checkedRowKeys:o,data:p,pager:l,sortProps:r,fetchDataFn:g}=L((a,e)=>async(y=d.query.page||1,T=20)=>{const k=await i.api.pages.get({params:{page:y,size:T,select:"title subtitle _id id created modified slug",...r.sortBy?{sortBy:r.sortBy,sortOrder:r.sortOrder}:{}}});a.value=k.data}),u=h(),d=v(),s=g;w(()=>d.query.page,async a=>{await s(a)}),B(async()=>{await s()});const f=c({setup(){const a=R([{type:"selection",options:["none","all"]},{title:"标题",sortOrder:!1,sorter:"default",key:"title",width:300,render(e){return t(O,{inPageTo:`/pages/edit?id=${e.id}`,title:e.title,externalLinkTo:`/${e.slug}`,id:e.id},null)}},{title:"副标题",key:"subtitle"},{title:"路径",key:"slug",render(e){return`/${e.slug}`}},{title:"创建于",key:"created",sortOrder:"descend",sorter:"default",render(e){return t(m,{time:e.created},null)}},{title:"修改于",key:"modified",sorter:"default",sortOrder:!1,render(e){return t(m,{time:e.modified},null)}},{title:"操作",fixed:"right",key:"id",render(e){return t(N,null,{default:()=>[t(M,{positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await i.api.pages(e.id).delete(),u.success("删除成功"),await s(l.value.currentPage)}},{trigger:()=>t(b,{text:!0,type:"error",size:"tiny"},{default:()=>[n("移除")]}),default:()=>t("span",{class:"max-w-48"},[n("确定要删除 "),e.title,n(" ?")])})]})}}]);return()=>t(F,{noPagination:!0,columns:a,data:p,onFetchData:s,pager:l,onUpdateCheckedRowKeys:e=>{o.value=e},onUpdateSorter:async e=>{r.sortBy=e.sortBy,r.sortOrder=e.sortOrder}},null)}});return()=>t(P,null,{actions:()=>t(x,null,[t(C,{checkedRowKeys:o.value,onDelete:async()=>{const a=await Promise.allSettled(o.value.map(e=>i.api.pages(e).delete()));for(const e of a)e.status==="rejected"&&u.success(`删除失败，${e.reason.message}`);o.value.length=0,s()}},null),t(A,{to:"/pages/edit",icon:t(D,null,null)},null)]),default:()=>t(f,null,null)})}});export{ee as ManagePageListView};
