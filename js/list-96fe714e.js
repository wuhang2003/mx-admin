import{d,u as x,y as k,b as D,w as R,g as T,h as t,F,R as r,A as C,C as N,r as B,H as p,l as m,k as i,m as S}from"./index-14aac0f5.js";import{D as b}from"./delete-confirm-a2f6348e.js";import{T as A}from"./index-99e112c7.js";import{R as L}from"./relative-time-04dc59e0.js";import{u as M}from"./use-table-b5cc4839.js";import{H}from"./rounded-button-3ab3f496.js";import{N as K}from"./Popconfirm-fcaea461.js";import"./DataTable-e8e80fbc.js";import"./ChevronRight-cef3e001.js";import"./Checkbox-00ea409d.js";import"./Select-771dd85f.js";import"./Tag-1c7336f2.js";import"./Pagination-cdfddd06.js";import"./prop-8b8caa29.js";import"./Forward-f71495a1.js";import"./Ellipsis-bf077de0.js";import"./Tooltip-4c155209.js";const te=d({name:"SayList",setup(P,V){const{checkedRowKeys:o,data:y,pager:n,loading:f,fetchDataFn:g}=M((a,e)=>async(v=l.query.page||1,w=30)=>{const c=await r.api.says.get({params:{page:v,size:w,select:"title text _id id created modified author source"}});a.value=c.data,e.value=c.pagination}),u=x();k();const l=D(),s=g;R(()=>l.query.page,async a=>{await s(a)}),T(async()=>{await s()});const h=d({setup(){const a=B([{type:"selection",options:["none","all"]},{title:"创建于",key:"created",width:100,render(e){return t(p,{to:`/says/edit?id=${e.id}`},{default:()=>[t(L,{time:e.created},null)]})}},{title:"内容",key:"text"},{title:"作者",key:"author"},{title:"来源",key:"source"},{title:"操作",fixed:"right",key:"id",width:130,render(e){return t(S,{wrap:!1},{default:()=>[t(p,{to:`/says/edit?id=${e.id}`},{default:()=>[t(m,{text:!0,type:"primary",size:"tiny"},{default:()=>[i("编辑")]})]}),t(K,{positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await r.api.says(e.id).delete(),u.success("删除成功"),await s(n.value.currentPage)}},{trigger:()=>t(m,{text:!0,type:"error",size:"tiny"},{default:()=>[i("移除")]}),default:()=>t("span",{class:"max-w-48"},[i("确定要删除“"),e.text,i("” ?")])})]})}}]);return()=>t(A,{loading:f.value,columns:a,data:y,onFetchData:s,pager:n,onUpdateCheckedRowKeys:e=>{o.value=e}},null)}});return()=>t(N,null,{actions:()=>t(F,null,[t(b,{checkedRowKeys:o.value,onDelete:async()=>{const a=await Promise.allSettled(o.value.map(e=>r.api.says(e).delete()));for(const e of a)e.status==="rejected"&&u.success(`删除失败，${e.reason.message}`);o.value.length=0,s()}},null),t(H,{to:"/says/edit",icon:t(C,null,null)},null)]),default:()=>t(h,null,null)})}});export{te as default};
