import{H as g}from"./rounded-button-7a623405.js";import{d as m,y,u as h,dt as w,h as o,du as f}from"./index-804307be.js";const b=m({props:{checkedRowKeys:{type:Object},onDelete:{type:Function,required:!0},message:{type:String},customIcon:{type:Object},showSuccessMessage:{type:Boolean,default:!0},customSuccessMessage:{type:String},customButtonTip:{type:String}},setup(n){const c=y(),a=h();return()=>{const{customIcon:i,checkedRowKeys:s,onDelete:u,message:r,customSuccessMessage:l,showSuccessMessage:d,customButtonTip:p}=n,e=w(s)?s.value:s,t=e?Array.isArray(e)?e.length:e.size:0;return o(g,{variant:"error",disabled:e?t===0:!1,name:p??"删除多条",onClick:()=>{c.warning({title:"警告",content:r??`你确定要删除${t>1?"多条":"这条"}数据？`,positiveText:"はい",negativeText:"达咩",onPositiveClick:async()=>{await u(e),d&&a.success(l??"删除成功")}})},icon:i??o(f,null,null)},null)}}});export{b as D};
