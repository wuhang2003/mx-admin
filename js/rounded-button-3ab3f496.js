import{d as l,h as e,H as r,N as i,I as u,l as c,L as d}from"./index-14aac0f5.js";function s(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!d(t)}const a={variant:{type:String,default:"primary"},color:{type:String},onClick:{type:Function},disabled:{type:Boolean}},b=l({props:a,setup(t,{slots:n}){return()=>e(c,{type:t.variant,color:t.color,circle:!0,onClick:t.onClick,disabled:t.disabled},s(n)?n:{default:()=>[n]})}}),y=l({props:{...a,to:{type:[Object,String]},name:{type:String},icon:{type:Object,required:!0}},setup(t){const n=()=>e(b,{variant:t.variant,class:"shadow",onClick:t.onClick,disabled:t.disabled,color:t.color},{default:()=>[e(u,{size:"16"},{default:()=>[t.icon]})]}),o=()=>t.name?e(i,{trigger:"hover",placement:"bottom"},{trigger(){return e(n,null,null)},default(){return t.name}}):e(n,null,null);return()=>t.to?e(r,{to:t.to},{default:()=>[e(o,null,null)]}):e(o,null,null)}});export{y as H};
