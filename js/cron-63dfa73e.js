import{T as p}from"./index-b6d15e09.js";import{u as d}from"./use-table-44715a9f.js";import{d as f,g as h,h as s,cp as y,m as g,l as T,k as n,C as x,R as r,dR as k}from"./index-2683cc36.js";import{N as C}from"./Popconfirm-971d62ac.js";import"./DataTable-630ff62b.js";import"./ChevronRight-0dd28722.js";import"./Checkbox-2d910bf1.js";import"./Select-ecaf717c.js";import"./Tag-730ab9fc.js";import"./Pagination-299b8f03.js";import"./prop-8b8caa29.js";import"./Forward-4805dd62.js";import"./Tooltip-9e07a88d.js";const E=f({setup(){const{data:i,fetchDataFn:l,loading:u}=d(t=>async()=>{const a=await r.api.health.cron.get();t.value=Array.from(Object.values(a.data).map(e=>({...e,_name:e.name,name:k(e.name)})))});h(async()=>{await l()});const m=async(t,a)=>{await r.api.health.cron.run(t).post();let e=setTimeout(function c(){r.api.health.cron.task(t).get().then(o=>{o.status==="fulfill"?(message.success(`${a} 执行完成`),e=clearTimeout(e)):o.status==="reject"?(message.error(`${a} 执行失败，${o.message}`),e=clearTimeout(e)):e=setTimeout(c,1e3)})},1e3)};return()=>s(x,null,{default:()=>[s(p,{noPagination:!0,data:i,loading:u.value,nTableProps:{maxHeight:"calc(100vh - 17rem)"},maxWidth:500,columns:[{title:"任务",key:"name",ellipsis:{tooltip:!0},width:150},{title:"描述",key:"description",width:250,ellipsis:{tooltip:!0}},{title:"状态",key:"status"},{title:"下次执行",key:"",render(t){const a=t.nextDate;return a?y(new Date(a),"MM/dd/yyyy hh:mm:ss"):"N/A"}},{title:"操作",key:"",render(t){return s(g,null,{default:()=>[s(C,{onPositiveClick:()=>void m(t._name,t.name)},{trigger(){return s(T,{size:"tiny",text:!0,type:"success"},{default:()=>[n("执行")]})},default:()=>s("span",{class:"max-w-48"},[n("确定要执行？")])})]})}}]},null)]})}});export{E as default};
