import{d as O,v as S,b as k,s as y,r as P,w as U,dT as q,e as C,h as F,bi as T,ax as x}from"./index-2683cc36.js";import{N as B}from"./DataTable-630ff62b.js";const N={"table-row":"_table-row_1brqz_3"},D=N["table-row"],z=O({props:{data:{type:Object,required:!0},noPagination:{type:Boolean,default:!1},pager:{type:Object,required:!1},onUpdateCheckedRowKeys:{type:Function,default:new Function},onUpdateSorter:{type:Function,default:new Function},onFetchData:{type:Function,required:!1},columns:{type:Array,required:!0},nTableProps:{type:Object,default:()=>({})},maxWidth:{type:Number},loading:{type:Boolean,default:!1},checkedRowKey:{type:String,default:"id"}},setup(o){const h=S(),l=k(),i=y([]),n=P({sortBy:"",sortOrder:0}),r=y(!0),w=U(()=>o.data.value,d=>{r.value=!1,w()});q((d,c,t)=>{r.value=!0,t(),r.value=!1});const s=C(x);return()=>{const{data:d,noPagination:c=!1,pager:t,onUpdateCheckedRowKeys:g,onUpdateSorter:b,nTableProps:v,columns:p,onFetchData:f,checkedRowKey:m="id",maxWidth:R=1200}=o;return F(B,T({loading:o.loading??r.value,remote:!0,scrollX:Math.max(s.contentInsetWidth.value,R),pagination:c?void 0:t&&{page:t.value.currentPage,pageSize:t.value.size,pageCount:t.value.totalPage,showQuickJumper:!0,pageSlot:s.viewport.value.mobile?s.contentInsetWidth.value<400?2:3:void 0,onChange:async e=>{h.push({query:{...l.query,page:e},path:l.path})}},bordered:!1,data:d.value,rowClassName:()=>D,checkedRowKeys:i.value,rowKey:e=>e[m],onUpdateCheckedRowKeys:e=>{i.value=e,g?.(e)},onUpdateSorter:async e=>{if(!e)return;p.forEach(a=>{if("sortOrder"in a&&a.sortOrder!==void 0){if(!e){a.sortOrder=!1;return}a.key===e.columnKey?a.sortOrder=e.order:a.sortOrder=!1}});const{columnKey:K,order:u}=e;n.sortBy=u===!1?"":K.toString()||"",n.sortOrder=u?{descend:-1,ascend:1}[u]:1,b?.(n,e),f&&await f()},columns:p},v),null)}}});export{z as T,D as t};
