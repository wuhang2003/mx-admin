import{s as a,r as f,dM as d}from"./index-c46c2349.js";const p=r=>{const t=a([]),e=a({}),c=f({sortBy:"",sortOrder:0}),n=a([]),s=a(!1);return{data:t,pager:e,sortProps:c,checkedRowKeys:n,loading:s,fetchDataFn:async(i,l,o)=>{s.value=!0,await r(t,e)(i,l,o?d.stringify(o):void 0),s.value=!1}}};export{p as u};
