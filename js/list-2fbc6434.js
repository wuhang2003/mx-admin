import{d as w,o as N,c as D,a as I,u as _,b as F,w as R,e as E,f as L,g as M,h as t,F as j,R as u,A,C as V,i as z,r as H,N as U,j as S,P as $,k as m,p as K,B as q,I as P,l as G,m as J}from"./index-d87a4bf9.js";import{T as Q}from"./title-link-e181ac77.js";import{D as W}from"./delete-confirm-30148fa4.js";import{T as X}from"./index-1b07e11e.js";import{E as Y}from"./edit-column-a1452327.js";import{R as T}from"./relative-time-722c1d56.js";import{u as Z}from"./use-table-f5df2893.js";import{H as ee}from"./rounded-button-767741ab.js";import{N as te}from"./Popconfirm-d0e75efe.js";import"./ExternalLink-b4755634.js";import"./endpoint-9e49af10.js";import"./Ellipsis-26111caf.js";import"./Tooltip-d3cd90cb.js";import"./DataTable-88b609e7.js";import"./ChevronRight-7b9b69e5.js";import"./Checkbox-83903492.js";import"./Select-2453092b.js";import"./Tag-24bc6bda.js";import"./Pagination-0e3807b2.js";import"./prop-8b8caa29.js";import"./Forward-bd627660.js";const ae={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},re=I("path",{d:"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24s24 10.745 24 24s-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098c.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469c8.681 25.895-.069 57.704-16.382 74.757c4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725c-15.957-7.099-36.821-15.887-52.651-16.178c-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521c39.614-39.144 56.648-80.587 89.117-113.111c14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z",fill:"currentColor"},null,-1),se=[re],ne=w({name:"ThumbsUp",render:function(o,c){return N(),D("svg",ae,se)}}),Ce=w({name:"PostList",setup(){const{loading:k,checkedRowKeys:o,data:c,pager:g,sortProps:l,fetchDataFn:b}=Z((s,r)=>async(e=x.query.page||1,f=20)=>{const a=await u.api.posts.get({params:{page:e,size:f,select:"title _id id created modified slug categoryId copyright tags count pin meta",...l.sortBy?{sortBy:l.sortBy,sortOrder:l.sortOrder}:{}}});s.value=a.data,r.value=a.pagination}),y=_(),x=F(),n=b;R(()=>x.query.page,async s=>{await n(s)});const i=E(L);M(async()=>{await n(),await i.fetch()});const B=w({setup(){const s=z(()=>i.data.value?.map(e=>({label:e.name,value:e.id}))||[]),r=H([{type:"selection",options:["none","all"]},{title:"标题",sortOrder:!1,sorter:"default",key:"title",width:200,ellipsis:!0,render(e){return t("div",{class:"flex items-center space-x-2"},[e.pin&&t(U,null,{trigger(){return t(S,{class:"text-orange-400"},{default:()=>[t($,null,null)]})},default(){return e.pin?t("span",null,[m("置顶于")," ",K(e.pin,"yyyy 年 M 月 d 日 HH:mm:ss")]):null}}),t(Q,{id:e.id,title:e.title,inPageTo:`/posts/edit?id=${e.id}`,externalLinkTo:`/posts/${e.category.slug}/${e.slug}`,xLog:e.meta?.xLog},null)])}},{title:"分类",sortOrder:!1,sorter:"default",key:"category",width:80,ellipsis:!0,filterOptions:s,filter:!0,render(e){return i.map.value?t(Y,{returnToConfrim:!1,initialValue:i.map.value.get(e.categoryId)?.name??"",onSubmit:async a=>{await u.api.posts(e.id).patch({data:{categoryId:a}}),y.success("修改成功~!"),c.value.find(h=>h.id===e.id).categoryId=a},type:"select",options:i.data.value?.map(a=>({label:a.name,value:a.id,key:a.id}))||[]},null):""}},{title:"标签",key:"tags",width:100,ellipsis:!0,render(e){return e.tags?.join("，")}},{title:()=>t(P,null,{default:()=>[t(q,null,null)]}),key:"count.read",width:50,render(e){return e.count?.read||0}},{title:()=>t(P,null,{default:()=>[t(ne,null,null)]}),width:50,key:"count.like",render(e){return e.count?.like||0}},{title:"创建于",width:100,key:"created",sortOrder:"descend",sorter:"default",render(e){return t(T,{time:e.created},null)}},{title:"修改于",key:"modified",sorter:"default",sortOrder:!1,width:100,render(e){return t(T,{time:e.modified},null)}},{title:"操作",fixed:"right",width:60,key:"id",render(e){return t(J,null,{default:()=>[t(te,{positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await u.api.posts(e.id).delete(),y.success("删除成功"),await n(g.value.currentPage)}},{trigger:()=>t(G,{text:!0,type:"error",size:"tiny"},{default:()=>[m("移除")]}),default:()=>t("span",{class:"max-w-48"},[m("确定要删除 "),e.title,m(" ?")])})]})}}]);return()=>t(X,{loading:k.value,columns:r,data:c,nTableProps:{onUpdateFilters:async e=>{if(e&&e.category&&Array.isArray(e.category)){if(!e.category.length){await n();return}const a=e.category.join(","),{entries:h}=await u.api.categories.get({params:{ids:a}}),O=Object.values(h).reduce((v,d)=>{const C=d.children?.map(p=>(Object.defineProperty(p,"categoryId",{value:d.id,enumerable:!0}),Object.defineProperty(p,"category",{get(){return p},enumerable:!1}),p));return[...v,...C]},[]).sort((v,d)=>+new Date(v.created)-+new Date(d.created));c.value=O,g.value={currentPage:1,total:1,size:0,hasNextPage:!1,hasPrevPage:!1,totalPage:1}}}},onFetchData:n,pager:g,onUpdateCheckedRowKeys:e=>{o.value=e},onUpdateSorter:async e=>{l.sortBy=e.sortBy,l.sortOrder=e.sortOrder}},null)}});return()=>t(V,null,{actions:()=>t(j,null,[t(W,{checkedRowKeys:o.value,onDelete:async()=>{const s=await Promise.allSettled(o.value.map(r=>u.api.posts(r).delete()));for(const r of s)r.status==="rejected"&&y.success(`删除失败，${r.reason.message}`);o.value.length=0,n()}},null),t(ee,{to:"/posts/edit",icon:t(A,null,null)},null)]),default:()=>t(B,null,null)})}});export{Ce as ManagePostListView};
