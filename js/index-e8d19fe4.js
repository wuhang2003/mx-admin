import{f as K,r as O,y as S,i as U,u as P}from"./use-store-ref-4d0ce661.js";import{a as q}from"./DataTable-141d81fb.js";import{k as C,y,B as F,au as B,U as T,ak as x}from"./Button-5ec267f1.js";const D={"table-row":"_table-row_1brqz_3"},N=D["table-row"],I=C({props:{data:{type:Object,required:!0},noPagination:{type:Boolean,default:!1},pager:{type:Object,required:!1},onUpdateCheckedRowKeys:{type:Function,default:new Function},onUpdateSorter:{type:Function,default:new Function},onFetchData:{type:Function,required:!1},columns:{type:Array,required:!0},nTableProps:{type:Object,default:()=>({})},maxWidth:{type:Number},loading:{type:Boolean,default:!1},checkedRowKey:{type:String,default:"id"}},setup(o){const h=K(),l=O(),i=y([]),n=F({sortBy:"",sortOrder:0}),r=y(!0),g=B(()=>o.data.value,u=>{r.value=!1,g()});S((u,c,t)=>{r.value=!0,t(),r.value=!1});const s=U(P);return()=>{const{data:u,noPagination:c=!1,pager:t,onUpdateCheckedRowKeys:w,onUpdateSorter:m,nTableProps:v,columns:p,onFetchData:f,checkedRowKey:b="id",maxWidth:R=1200}=o;return T(q,x({loading:o.loading??r.value,remote:!0,scrollX:Math.max(s.contentInsetWidth.value,R),pagination:c?void 0:t&&{page:t.value.currentPage,pageSize:t.value.size,pageCount:t.value.totalPage,showQuickJumper:!0,pageSlot:s.viewport.value.mobile?s.contentInsetWidth.value<400?2:3:void 0,onChange:async e=>{h.push({query:{...l.query,page:e},path:l.path})}},bordered:!1,data:u.value,rowClassName:()=>N,checkedRowKeys:i.value,rowKey:e=>e[b],onUpdateCheckedRowKeys:e=>{i.value=e,w?.(e)},onUpdateSorter:async e=>{if(!e)return;p.forEach(a=>{if("sortOrder"in a&&a.sortOrder!==void 0){if(!e){a.sortOrder=!1;return}a.key===e.columnKey?a.sortOrder=e.order:a.sortOrder=!1}});const{columnKey:k,order:d}=e;n.sortBy=d===!1?"":k.toString()||"",n.sortOrder=d?{descend:-1,ascend:1}[d]:1,m?.(n,e),f&&await f()},columns:p},v),null)}}});export{I as T,N as t};
