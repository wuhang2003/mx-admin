import{as as d,s as f,ap as h}from"./index-1b0d7aa2.js";const g=l=>d(()=>{const a=f([]),t=new Set;let s=0,r=!1;const i=f(!0),u=async(c=1)=>{i.value=!0;const{data:e,pagination:o}=await l(c);a.value.push(...e.filter(n=>!t.has(n.id))),i.value=!1,e.forEach(n=>t.add(n.id)),s=o.currentPage,o.hasNextPage||(r=!0)};return{loading:i,datalist:a,append(c){for(const e of c)t.has(e.id)||(t.add(e.id),a.value.push({...e}))},fetchNext:()=>{r||u(s+1)},refresh(){this.reset(),h(()=>{this.fetchNext()})},reset(){s=0,r=!1,a.value=[],t.clear()}}});export{g as c};
