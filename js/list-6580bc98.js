import{d as h,r as y,u as b,b as w,w as j,g as k,h as e,F as x,R as c,A as C,bK as P,ao as D,l as n,bk as E,bL as F,m as R,k as u,p as S,bM as A,D as B,j as M,bN as L,C as T,L as U}from"./index-8a35f31c.js";import{D as z}from"./delete-confirm-b7d979a6.js";import{R as I}from"./relative-time-03078476.js";import{u as V}from"./use-table-c70f4df4.js";import{H as q}from"./rounded-button-b2a219c4.js";import{N as K}from"./Checkbox-e97b892f.js";import{N as _,a as H}from"./Pagination-c762f0b2.js";import{N as O,a as G}from"./ListItem-94e4f314.js";import{N as J}from"./ButtonGroup-7b535343.js";import{N as d}from"./Avatar-68addd10.js";import"./prop-8b8caa29.js";import"./Select-981246b1.js";import"./Tag-5ccff319.js";import"./Forward-82a9dd23.js";import"./utils-b0fff31e.js";function Q(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!U(o)}const pe=h({setup(){const{data:o,pager:s,sortProps:W,fetchDataFn:f,loading:m}=V((a,t)=>async(N=i.query.page||1,v=30)=>{const p=await c.api.projects.get({params:{page:N,size:v}});a.value=p.data,t.value=p.pagination}),r=y(new Set),g=b(),i=w(),l=f;return j(()=>i.query.page,async a=>{await l(a)}),k(async()=>{await l()}),()=>e(T,null,{actions:()=>e(x,null,[e(z,{checkedRowKeys:r,onDelete:async()=>{await Promise.all(Array.from(r.values()).map(a=>c.api.projects(a).delete())),r.clear(),l()}},null),e(q,{to:"/projects/edit",icon:e(C,null,null)},null)]),default:()=>e(P,{show:m.value},{default:()=>[e(O,{bordered:!1,class:"min-h-[300px] bg-transparent"},{footer(){return e("div",{class:"flex justify-end"},[e(_,{itemCount:s.value.total,pageCount:s.value.totalPage,page:s.value.currentPage,pageSize:s.value.size,onUpdatePage:a=>{l(a)}},null)])},default(){return o.value.map(a=>e(G,{key:a.id},{prefix(){return e(K,{class:"mt-4",checked:r.has(a.id),onUpdateChecked:t=>{t?r.add(a.id):r.delete(a.id)}},null)},default(){return e(D,{description:a.description},{header(){return e("div",null,[e(n,E({ghost:!0,type:"primary",text:!0,class:"!font-medium"},a.projectUrl?{tag:"a",href:a.projectUrl,target:"_blank"}:{}),{default:()=>[a.name]})])},footer(){return e(F,null,{default:()=>[e(R,{class:"pl-[3.6rem] text-[var(--clear-color-pressed)] text-sm"},{default:()=>[e("span",null,[u("创建于 "),S(a.created)]),a.modified&&e("span",null,[u("更新于")," ",e(I,{time:a.modified},null)])]})]})},"header-extra":function(){return e(J,null,{default:()=>[e(n,{onClick:()=>{A.push({name:B.EditProject,query:{id:a.id}})}},{default:()=>[u("编辑")]}),e(H,{class:"!p-0",options:[{value:"del",label:"",render(){return e(n,{type:"error",bordered:!1,onClick:async()=>{await c.api.projects(a.id).delete(),g.success("删除成功"),await l(s.value.currentPage)}},{default:()=>[u("删除")]})}}]},{default:()=>[e(n,{class:"!px-2"},{default:()=>[e(M,null,{default:()=>[e(L,null,null)]})]})]})]})},avatar(){let t;return a.avatar?e(d,{class:"align-center",circle:!0,src:a.avatar,size:"large"},null):e(d,{circle:!0,size:"large",class:"align-center"},Q(t=a.name[0].toUpperCase())?t:{default:()=>[t]})}})}}))}})]})})}});export{pe as default};
