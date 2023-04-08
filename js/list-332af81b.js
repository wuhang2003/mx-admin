import{d as h,r as y,u as b,b as w,w as j,g as C,h as e,F as x,R as c,A as P,bC as k,an as D,l,bd as E,bD as F,m as R,k as u,p as S,bE as A,D as B,j as M,bF as T,C as U,L as z}from"./index-8cac42f8.js";import{D as I}from"./delete-confirm-1c4454cc.js";import{R as L}from"./relative-time-faf1427d.js";import{u as V}from"./use-table-b5c3009a.js";import{H as q}from"./rounded-button-584e5982.js";import{N as _}from"./Checkbox-a04b515f.js";import{N as H,a as K}from"./Pagination-70ead485.js";import{N as O,a as G}from"./ListItem-a9cfc6d2.js";import{N as J}from"./ButtonGroup-46f83f44.js";import{N as d}from"./Avatar-8a5e428e.js";import"./prop-8b8caa29.js";import"./Select-22e54f09.js";import"./Tag-bd6b4a7c.js";import"./Forward-b4c5fa78.js";import"./utils-34918e98.js";function Q(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!z(o)}const pe=h({setup(){const{data:o,pager:s,sortProps:W,fetchDataFn:f,loading:m}=V((a,t)=>async(N=i.query.page||1,v=30)=>{const p=await c.api.projects.get({params:{page:N,size:v}});a.value=p.data,t.value=p.pagination}),r=y(new Set),g=b(),i=w(),n=f;return j(()=>i.query.page,async a=>{await n(a)}),C(async()=>{await n()}),()=>e(U,null,{actions:()=>e(x,null,[e(I,{checkedRowKeys:r,onDelete:async()=>{await Promise.all(Array.from(r.values()).map(a=>c.api.projects(a).delete())),r.clear(),n()}},null),e(q,{to:"/projects/edit",icon:e(P,null,null)},null)]),default:()=>e(k,{show:m.value},{default:()=>[e(O,{bordered:!1,class:"min-h-[300px] bg-transparent"},{footer(){return e("div",{class:"flex justify-end"},[e(H,{itemCount:s.value.total,pageCount:s.value.totalPage,page:s.value.currentPage,pageSize:s.value.size,onUpdatePage:a=>{n(a)}},null)])},default(){return o.value.map(a=>e(G,{key:a.id},{prefix(){return e(_,{class:"mt-4",checked:r.has(a.id),onUpdateChecked:t=>{t?r.add(a.id):r.delete(a.id)}},null)},default(){return e(D,{description:a.description},{header(){return e("div",null,[e(l,E({ghost:!0,type:"primary",text:!0,class:"!font-medium"},a.projectUrl?{tag:"a",href:a.projectUrl,target:"_blank"}:{}),{default:()=>[a.name]})])},footer(){return e(F,null,{default:()=>[e(R,{class:"pl-[3.6rem] text-[var(--clear-color-pressed)] text-sm"},{default:()=>[e("span",null,[u("创建于 "),S(a.created)]),a.modified&&e("span",null,[u("更新于")," ",e(L,{time:a.modified},null)])]})]})},"header-extra":function(){return e(J,null,{default:()=>[e(l,{onClick:()=>{A.push({name:B.EditProject,query:{id:a.id}})}},{default:()=>[u("编辑")]}),e(K,{class:"!p-0",options:[{value:"del",label:"",render(){return e(l,{type:"error",bordered:!1,onClick:async()=>{await c.api.projects(a.id).delete(),g.success("删除成功"),await n(s.value.currentPage)}},{default:()=>[u("删除")]})}}]},{default:()=>[e(l,{class:"!px-2"},{default:()=>[e(M,null,{default:()=>[e(T,null,null)]})]})]})]})},avatar(){let t;return a.avatar?e(d,{class:"align-center",circle:!0,src:a.avatar,size:"large"},null):e(d,{circle:!0,size:"large",class:"align-center"},Q(t=a.name[0].toUpperCase())?t:{default:()=>[t]})}})}}))}})]})})}});export{pe as default};
