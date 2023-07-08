import{d as c,o as y,c as k,a as w,u as $,b as F,w as L,g as D,h as t,F as _,R as d,A as O,C as E,r as R,I as h,k as f,B as S,l as b,m as I}from"./index-76074560.js";import{T as V}from"./title-link-9fe49f56.js";import{D as z}from"./delete-confirm-c61fdd16.js";import{T as P}from"./index-d233dd2c.js";import{E as B}from"./edit-column-b56e4863.js";import{R as T}from"./relative-time-37183d36.js";import{u as A}from"./use-table-7bae090b.js";import{H}from"./rounded-button-0617d406.js";import{N as K}from"./Ellipsis-42b6f992.js";import{N as U}from"./Popconfirm-d332a02c.js";import"./ExternalLink-00c258c8.js";import"./endpoint-38acc4fb.js";import"./DataTable-c4960f6a.js";import"./ChevronRight-ff348071.js";import"./Checkbox-01cc3b37.js";import"./Select-13c4085b.js";import"./Tag-6454e3d6.js";import"./Pagination-4689c64b.js";import"./prop-8b8caa29.js";import"./Forward-629d5a97.js";import"./Tooltip-1f6f1738.js";const q={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 384 512"},j=w("path",{d:"M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400L0 512z",fill:"currentColor"},null,-1),G=[j],J=c({name:"Bookmark",render:function(a,l){return y(),k("svg",q,G)}}),Q={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},W=w("path",{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",fill:"currentColor"},null,-1),X=[W],Y=c({name:"Heart",render:function(a,l){return y(),k("svg",Q,X)}}),Z={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},ee=w("g",{fill:"none"},[w("path",{d:"M2.854 2.146a.5.5 0 1 0-.708.708l3.5 3.498a8.097 8.097 0 0 0-3.366 5.046a.5.5 0 1 0 .979.204a7.09 7.09 0 0 1 3.108-4.528L7.95 8.656a3.5 3.5 0 1 0 4.884 4.884l4.313 4.314a.5.5 0 0 0 .708-.708l-15-15zm7.27 5.857l3.363 3.363a3.5 3.5 0 0 0-3.363-3.363zM7.53 5.41l.803.803A6.632 6.632 0 0 1 10 6c3.206 0 6.057 2.327 6.74 5.602a.5.5 0 1 0 .98-.204C16.943 7.673 13.693 5 10 5c-.855 0-1.687.143-2.469.41z",fill:"currentColor"})],-1),te=[ee],oe=c({name:"EyeOff20Filled",render:function(a,l){return y(),k("svg",Z,te)}}),C=r=>{const a=String(r).length;return a<4?r:a<7?`${(r/1e3).toFixed(1)}K`:a<10?`${(r/1e6).toFixed(1)}M`:`${(r/1e9).toFixed(1)}B`},Te=c({name:"NoteList",setup(){const{loading:r,checkedRowKeys:a,data:l,pager:x,sortProps:u,fetchDataFn:N}=A((s,e)=>async(n=v.query.page||1,o=20,g)=>{const p=await d.api.notes.get({params:{db_query:g,page:n,size:o,select:"title _id nid id created modified mood weather hide secret hasMemory coordinates location count meta",...u.sortBy?{sortBy:u.sortBy,sortOrder:u.sortOrder}:{}}});s.value=p.data,e.value=p.pagination}),m=$(),v=F(),i=N;L(()=>v.query.page,async s=>{await i(s)}),D(async()=>{await i()});const M=c({setup(){const s=R([{type:"selection",options:["none","all"]},{title:"序号",width:64,key:"nid"},{title:"标题",sortOrder:!1,sorter:"default",key:"title",width:280,filter:!0,filterOptions:[{label:"回忆项",value:"hasMemory"},{label:"隐藏项",value:"hide"}],render(e){const n=e.secret&&+new Date(e.secret)-+new Date>0;return t(V,{inPageTo:`/notes/edit?id=${e.id}`,title:e.title,externalLinkTo:`/notes/${e.nid}`,id:e.id,withToken:e.hide||n,xLog:e.meta?.xLog},{default(){return t(_,null,[e.hide||n?t(h,{color:"#34495e"},{default:()=>[t(oe,null,null)]}):null,e.hasMemory?t(h,{color:"#e74c3c"},{default:()=>[t(J,null,null)]}):null])}})}},{title:"心情",key:"mood",width:100,render(e,n){return t(B,{initialValue:l.value[n].mood??"",onSubmit:async o=>{await d.api.notes(e.id).put({data:{mood:o}}),m.success("修改成功"),l.value[n].mood=o},placeholder:"心情"},null)}},{title:"天气",key:"weather",width:100,render(e,n){return t(B,{initialValue:l.value[n].weather??"",onSubmit:async o=>{await d.api.notes(e.id).put({data:{weather:o}}),m.success("修改成功"),l.value[n].weather=o},placeholder:"天气"},null)}},{title:"地点",key:"location",width:200,render(e){const{coordinates:n,location:o}=e;return o?t(K,{class:"truncate max-w-[200px]"},{tooltip(){return t("div",{class:""},[t("p",null,[o]),t("p",null,[n?.longitude,f(", "),n?.latitude])])},default(){return o}}):null}},{title:()=>t(h,null,{default:()=>[t(S,null,null)]}),key:"count.read",width:50,ellipsis:{tooltip:!0},render(e){return C(e.count?.read||0)}},{title:()=>t(h,null,{default:()=>[t(Y,null,null)]}),width:50,ellipsis:{tooltip:!0},key:"count.like",render(e){return C(e.count?.like||0)}},{title:"创建于",key:"created",sortOrder:"descend",sorter:"default",width:200,render(e){return t(T,{time:e.created},null)}},{title:"修改于",key:"modified",sorter:"default",sortOrder:!1,width:200,render(e){return t(T,{time:e.modified},null)}},{title:"操作",key:"id",width:100,fixed:"right",render(e){return t(I,null,{default:()=>[t(U,{positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await d.api.notes(e.id).delete(),m.success("删除成功"),await i(x.value.currentPage)}},{trigger:()=>t(b,{text:!0,type:"error",size:"tiny"},{default:()=>[f("移除")]}),default:()=>t("span",{class:"max-w-48"},[f("确定要删除 "),e.title,f(" ?")])})]})}}]);return()=>t(P,{nTableProps:{async onUpdateFilters(e,n){const{title:o}=e;if(!o||o.length===0){await i();return}await i(1,void 0,o.reduce((g,p)=>({...g,[p]:!0}),{}))}},loading:r.value,columns:s,data:l,onFetchData:i,pager:x,onUpdateCheckedRowKeys:e=>{a.value=e},onUpdateSorter:async e=>{u.sortBy=e.sortBy,u.sortOrder=e.sortOrder}},null)}});return()=>t(E,null,{actions:()=>t(_,null,[t(z,{checkedRowKeys:a.value,onDelete:async()=>{const s=await Promise.allSettled(a.value.map(e=>d.api.notes(e).delete()));for(const e of s)e.status==="rejected"&&m.success(`删除失败，${e.reason.message}`);a.value.length=0,i()}},null),t(H,{to:"/notes/edit",icon:t(O,null,null)},null)]),default:()=>t(M,null,null)})}});export{Te as ManageNoteListView};
