import{X as l}from"./app-b7431b11.js";import{y as t,B as p}from"./Button-5ec267f1.js";const m=r=>{const s=t([]),e=t({}),c=p({sortBy:"",sortOrder:0}),n=t([]),a=t(!1);return{data:s,pager:e,sortProps:c,checkedRowKeys:n,loading:a,fetchDataFn:async(i,f,o)=>{a.value=!0,await r(s,e)(i,f,o?l.stringify(o):void 0),a.value=!1}}};export{m as u};
