import{d as K,v as S,b as k,s as y,r as P,w as U,dO as q,e as C,h as F,bd as x,ax as B}from"./index-80ed2802.js";import{N}from"./DataTable-95b30575.js";const T={"table-row":"_table-row_1brqz_3"},D=T["table-row"],z=K({props:{data:{type:Object,required:!0},noPagination:{type:Boolean,default:!1},pager:{type:Object,required:!1},onUpdateCheckedRowKeys:{type:Function,default:new Function},onUpdateSorter:{type:Function,default:new Function},onFetchData:{type:Function,required:!1},columns:{type:Array,required:!0},nTableProps:{type:Object,default:()=>({})},maxWidth:{type:Number},loading:{type:Boolean,default:!1},checkedRowKey:{type:String,default:"id"}},setup(o){const h=S(),l=k(),c=y([]),n=P({sortBy:"",sortOrder:0}),r=y(!0),w=U(()=>o.data.value,d=>{r.value=!1,w()});q((d,i,t)=>{r.value=!0,t(),r.value=!1});const s=C(B);return()=>{const{data:d,noPagination:i=!1,pager:t,onUpdateCheckedRowKeys:g,onUpdateSorter:b,nTableProps:v,columns:p,onFetchData:f,checkedRowKey:m="id",maxWidth:R=1200}=o;return F(N,x({loading:o.loading??r.value,remote:!0,scrollX:Math.max(s.contentInsetWidth.value,R),pagination:i?void 0:t&&{page:t.value.currentPage,pageSize:t.value.size,pageCount:t.value.totalPage,showQuickJumper:!0,pageSlot:s.viewport.value.mobile?s.contentInsetWidth.value<400?2:3:void 0,onChange:async e=>{h.push({query:{...l.query,page:e},path:l.path})}},bordered:!1,data:d.value,rowClassName:()=>D,checkedRowKeys:c.value,rowKey:e=>e[m],onUpdateCheckedRowKeys:e=>{c.value=e,g?.(e)},onUpdateSorter:async e=>{if(!e)return;p.forEach(a=>{if("sortOrder"in a&&a.sortOrder!==void 0){if(!e){a.sortOrder=!1;return}a.key===e.columnKey?a.sortOrder=e.order:a.sortOrder=!1}});const{columnKey:O,order:u}=e;n.sortBy=u===!1?"":O.toString()||"",n.sortOrder=u?{descend:-1,ascend:1}[u]:1,b?.(n,e),f&&await f()},columns:p},v),null)}}});export{z as T,D as t};
