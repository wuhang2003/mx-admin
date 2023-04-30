import{d as h,r as y,u as b,b as j,w,g as x,h as e,F as C,R as c,A as P,bJ as k,an as D,l,bj as E,bK as F,m as R,k as u,p as S,bL as A,D as B,j as M,bM as L,C as T,L as U}from"./index-80f33cae.js";import{D as z}from"./delete-confirm-1157d7f3.js";import{R as I}from"./relative-time-733ef72c.js";import{u as V}from"./use-table-340608ad.js";import{H as q}from"./rounded-button-f32d2fa6.js";import{N as K}from"./Checkbox-29d0e3d6.js";import{N as _,a as H}from"./Pagination-67ff9b21.js";import{N as O,a as G}from"./ListItem-e54cdddf.js";import{N as J}from"./ButtonGroup-d6c9928a.js";import{N as d}from"./Avatar-1c2aa679.js";import"./prop-8b8caa29.js";import"./Select-1f1e6182.js";import"./Tag-0900633e.js";import"./Forward-fd576f22.js";import"./utils-9d90ac1b.js";function Q(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!U(o)}const pe=h({setup(){const{data:o,pager:s,sortProps:W,fetchDataFn:f,loading:m}=V((a,t)=>async(N=i.query.page||1,v=30)=>{const p=await c.api.projects.get({params:{page:N,size:v}});a.value=p.data,t.value=p.pagination}),r=y(new Set),g=b(),i=j(),n=f;return w(()=>i.query.page,async a=>{await n(a)}),x(async()=>{await n()}),()=>e(T,null,{actions:()=>e(C,null,[e(z,{checkedRowKeys:r,onDelete:async()=>{await Promise.all(Array.from(r.values()).map(a=>c.api.projects(a).delete())),r.clear(),n()}},null),e(q,{to:"/projects/edit",icon:e(P,null,null)},null)]),default:()=>e(k,{show:m.value},{default:()=>[e(O,{bordered:!1,class:"min-h-[300px] bg-transparent"},{footer(){return e("div",{class:"flex justify-end"},[e(_,{itemCount:s.value.total,pageCount:s.value.totalPage,page:s.value.currentPage,pageSize:s.value.size,onUpdatePage:a=>{n(a)}},null)])},default(){return o.value.map(a=>e(G,{key:a.id},{prefix(){return e(K,{class:"mt-4",checked:r.has(a.id),onUpdateChecked:t=>{t?r.add(a.id):r.delete(a.id)}},null)},default(){return e(D,{description:a.description},{header(){return e("div",null,[e(l,E({ghost:!0,type:"primary",text:!0,class:"!font-medium"},a.projectUrl?{tag:"a",href:a.projectUrl,target:"_blank"}:{}),{default:()=>[a.name]})])},footer(){return e(F,null,{default:()=>[e(R,{class:"pl-[3.6rem] text-[var(--clear-color-pressed)] text-sm"},{default:()=>[e("span",null,[u("创建于 "),S(a.created)]),a.modified&&e("span",null,[u("更新于")," ",e(I,{time:a.modified},null)])]})]})},"header-extra":function(){return e(J,null,{default:()=>[e(l,{onClick:()=>{A.push({name:B.EditProject,query:{id:a.id}})}},{default:()=>[u("编辑")]}),e(H,{class:"!p-0",options:[{value:"del",label:"",render(){return e(l,{type:"error",bordered:!1,onClick:async()=>{await c.api.projects(a.id).delete(),g.success("删除成功"),await n(s.value.currentPage)}},{default:()=>[u("删除")]})}}]},{default:()=>[e(l,{class:"!px-2"},{default:()=>[e(M,null,{default:()=>[e(L,null,null)]})]})]})]})},avatar(){let t;return a.avatar?e(d,{class:"align-center",circle:!0,src:a.avatar,size:"large"},null):e(d,{circle:!0,size:"large",class:"align-center"},Q(t=a.name[0].toUpperCase())?t:{default:()=>[t]})}})}}))}})]})})}});export{pe as default};
