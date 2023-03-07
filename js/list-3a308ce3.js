import{q as D,x as u,J as I,K as N,L as _,M as F,O as M,Q as R}from"./app-b7431b11.js";import{T as E}from"./title-link-ec10d889.js";import{D as L}from"./delete-confirm-f5a75970.js";import{T as j}from"./index-93ac63db.js";import{E as U}from"./edit-column-f1885c6a.js";import{R as P}from"./relative-time-b505e103.js";import{r as V,i as z,I as T}from"./use-store-ref-095f705c.js";import{u as A}from"./use-table-8106cf9f.js";import{u as H}from"./category-039dbc42.js";import{H as K}from"./rounded-button-ae3194ff.js";import{k as w,ag as S,ah as $,ai as q,au as J,R as Q,U as t,F as G,n as W,B as X,bs as Y,br as m,aO as Z}from"./Button-5ec267f1.js";import{N as ee}from"./Popconfirm-fe8b747a.js";import{a as te}from"./Spin-2c3e5ca3.js";import"./preload-helper-f651ca80.js";import"./Card-73dd4072.js";import"./ExternalLink-8017d0fb.js";import"./endpoint-24939798.js";import"./DataTable-e0c5d901.js";import"./ChevronRight-54213128.js";import"./Checkbox-746a5c9b.js";import"./light-cfc8873a.js";import"./light-04b46a26.js";import"./light-6b4d6176.js";import"./light-1d805342.js";import"./light-efffb436.js";import"./Select-410a3ac9.js";import"./Tag-62076a6b.js";import"./_common-991711fd.js";import"./Pagination-b2fb44af.js";import"./Forward-414cae36.js";import"./prop-8b8caa29.js";import"./Tooltip-354350ce.js";import"./light-013cc201.js";const ae={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},re=q("path",{d:"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24s24 10.745 24 24s-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098c.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469c8.681 25.895-.069 57.704-16.382 74.757c4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725c-15.957-7.099-36.821-15.887-52.651-16.178c-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521c39.614-39.144 56.648-80.587 89.117-113.111c14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z",fill:"currentColor"},null,-1),se=[re],oe=w({name:"ThumbsUp",render:function(n,c){return S(),$("svg",ae,se)}}),Ve=w({name:"PostList",setup(){const{loading:k,checkedRowKeys:n,data:c,pager:g,sortProps:i,fetchDataFn:b}=A((s,r)=>async(e=x.query.page||1,y=20)=>{const a=await u.api.posts.get({params:{page:e,size:y,select:"title _id id created modified slug categoryId copyright tags count pin",...i.sortBy?{sortBy:i.sortBy,sortOrder:i.sortOrder}:{}}});s.value=a.data,r.value=a.pagination}),f=D(),x=V(),o=b;J(()=>x.query.page,async s=>{await o(s)});const l=z(H);Q(async()=>{await o(),await l.fetch()});const B=w({setup(){const s=W(()=>l.data.value?.map(e=>({label:e.name,value:e.id}))||[]),r=X([{type:"selection",options:["none","all"]},{title:"标题",sortOrder:!1,sorter:"default",key:"title",width:200,ellipsis:!0,render(e){return t("div",{class:"flex items-center space-x-2"},[e.pin&&t(Y,null,{trigger(){return t(_,{class:"text-orange-400"},{default:()=>[t(F,null,null)]})},default(){return e.pin?t("span",null,[m("置顶于")," ",M(e.pin,"yyyy 年 M 月 d 日 HH:mm:ss")]):null}}),t(E,{id:e.id,title:e.title,inPageTo:`/posts/edit?id=${e.id}`,externalLinkTo:`/posts/${e.category.slug}/${e.slug}`},null)])}},{title:"分类",sortOrder:!1,sorter:"default",key:"category",width:80,ellipsis:!0,filterOptions:s,filter:!0,render(e){return l.map.value?t(U,{returnToConfrim:!1,initialValue:l.map.value.get(e.categoryId)?.name??"",onSubmit:async a=>{await u.api.posts(e.id).patch({data:{categoryId:a}}),f.success("修改成功~!"),c.value.find(h=>h.id===e.id).categoryId=a},type:"select",options:l.data.value?.map(a=>({label:a.name,value:a.id,key:a.id}))||[]},null):""}},{title:"标签",key:"tags",width:100,ellipsis:!0,render(e){return e.tags?.join("，")}},{title:()=>t(T,null,{default:()=>[t(R,null,null)]}),key:"count.read",width:50,render(e){return e.count?.read||0}},{title:()=>t(T,null,{default:()=>[t(oe,null,null)]}),width:50,key:"count.like",render(e){return e.count?.like||0}},{title:"创建于",width:100,key:"created",sortOrder:"descend",sorter:"default",render(e){return t(P,{time:e.created},null)}},{title:"修改于",key:"modified",sorter:"default",sortOrder:!1,width:100,render(e){return t(P,{time:e.modified},null)}},{title:"操作",fixed:"right",width:60,key:"id",render(e){return t(te,null,{default:()=>[t(ee,{positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await u.api.posts(e.id).delete(),f.success("删除成功"),await o(g.value.currentPage)}},{trigger:()=>t(Z,{text:!0,type:"error",size:"tiny"},{default:()=>[m("移除")]}),default:()=>t("span",{class:"max-w-48"},[m("确定要删除 "),e.title,m(" ?")])})]})}}]);return()=>t(j,{loading:k.value,columns:r,data:c,nTableProps:{onUpdateFilters:async e=>{if(e&&e.category&&Array.isArray(e.category)){if(!e.category.length){await o();return}const a=e.category.join(","),{entries:h}=await u.api.categories.get({params:{ids:a}}),O=Object.values(h).reduce((v,d)=>{const C=d.children?.map(p=>(Object.defineProperty(p,"categoryId",{value:d.id,enumerable:!0}),Object.defineProperty(p,"category",{get(){return p},enumerable:!1}),p));return[...v,...C]},[]).sort((v,d)=>+new Date(v.created)-+new Date(d.created));c.value=O,g.value={currentPage:1,total:1,size:0,hasNextPage:!1,hasPrevPage:!1,totalPage:1}}}},onFetchData:o,pager:g,onUpdateCheckedRowKeys:e=>{n.value=e},onUpdateSorter:async e=>{i.sortBy=e.sortBy,i.sortOrder=e.sortOrder}},null)}});return()=>t(N,null,{actions:()=>t(G,null,[t(L,{checkedRowKeys:n.value,onDelete:async()=>{const s=await Promise.allSettled(n.value.map(r=>u.api.posts(r).delete()));for(const r of s)r.status==="rejected"&&f.success(`删除失败，${r.reason.message}`);n.value.length=0,o()}},null),t(K,{to:"/posts/edit",icon:t(I,null,null)},null)]),default:()=>t(B,null,null)})}});export{Ve as ManagePostListView};
