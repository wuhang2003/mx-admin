import{T as p}from"./index-4198606e.js";import{u as d}from"./use-table-cd77f262.js";import{d as f,g as h,h as r,cr as y,m as g,l as T,k as n,C as x,R as o,dT as k}from"./index-de880b68.js";import{N as C}from"./Popconfirm-68148b10.js";import"./DataTable-37b757f1.js";import"./ChevronRight-c1a13d6d.js";import"./Checkbox-56d171ac.js";import"./Select-869e5aed.js";import"./Tag-27f80eab.js";import"./Pagination-90ffca1a.js";import"./prop-8b8caa29.js";import"./Forward-feceacfb.js";import"./Ellipsis-267623b1.js";import"./Tooltip-aa7130af.js";const S=f({setup(){const{data:i,fetchDataFn:l,loading:u}=d(t=>async()=>{const a=await o.api.health.cron.get();t.value=Array.from(Object.values(a.data).map(e=>({...e,_name:e.name,name:k(e.name)})))});h(async()=>{await l()});const m=async(t,a)=>{await o.api.health.cron.run(t).post();let e=setTimeout(function c(){o.api.health.cron.task(t).get().then(s=>{s.status==="fulfill"?(message.success(`${a} 执行完成`),e=clearTimeout(e)):s.status==="reject"?(message.error(`${a} 执行失败，${s.message}`),e=clearTimeout(e)):e=setTimeout(c,1e3)})},1e3)};return()=>r(x,null,{default:()=>[r(p,{noPagination:!0,data:i,loading:u.value,nTableProps:{maxHeight:"calc(100vh - 17rem)"},maxWidth:500,columns:[{title:"任务",key:"name",ellipsis:{tooltip:!0},width:150},{title:"描述",key:"description",width:250,ellipsis:{tooltip:!0}},{title:"状态",key:"status"},{title:"下次执行",key:"",render(t){const a=t.nextDate;return a?y(new Date(a),"MM/dd/yyyy hh:mm:ss"):"N/A"}},{title:"操作",key:"",render(t){return r(g,null,{default:()=>[r(C,{onPositiveClick:()=>void m(t._name,t.name)},{trigger(){return r(T,{size:"tiny",text:!0,type:"success"},{default:()=>[n("执行")]})},default:()=>r("span",{class:"max-w-48"},[n("确定要执行？")])})]})}}]},null)]})}});export{S as default};
