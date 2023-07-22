import{B as u,g as f,s as h,d as b,i as g,c as w,a as k,e as O,H as d,b as E}from"./class-f28e9c78.js";import"./index-2ccee8cf.js";import"./preview-f69aa2a8.js";import"./marked.esm-d3a6abf7.js";import"./DatePicker-2171ebfb.js";import"./ChevronRight-a9c5a0fa.js";import"./Select-adef139c.js";import"./Tag-3ea7bcb4.js";import"./Forward-e4e72ebd.js";import"./Form-3145483f.js";import"./FormItem-b7616bab.js";import"./InputNumber-f56abd2f.js";import"./Remove-fb4bd850.js";import"./Add-8a3f33c6.js";import"./ButtonGroup-0a88ebd3.js";import"./use-async-monaco-6b042d3a.js";import"./index-c9248add.js";import"./use-save-confirm-7c422a6c.js";import"./Switch-9278e6c9.js";import"./DynamicInput-1c3afd72.js";import"./Image-48455f56.js";import"./utils-8988053e.js";import"./Tooltip-d19aae9f.js";import"./rounded-button-4b52f7d9.js";import"./toggle-312e5752.js";import"./use-lifecycle-a6bfb3a0.js";import"./throttle-e41c481c.js";import"./vue.runtime.esm-bundler-129f81e9.js";import"./js-yaml-e14800c0.js";import"./last-862de5a8.js";import"./confetti-fa4954ff.js";class L extends u{constructor({callbackSelector:r,cause:e,data:s,extraData:n,sender:a,urls:o}){super(e.shortMessage||"An error occurred while fetching for an offchain result.",{cause:e,metaMessages:[...e.metaMessages||[],e.metaMessages?.length?"":[],"Offchain Gateway Call:",o&&["  Gateway URL(s):",...o.map(c=>`    ${f(c)}`)],`  Sender: ${a}`,`  Data: ${s}`,`  Callback selector: ${r}`,`  Extra data: ${n}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class x extends u{constructor({result:r,url:e}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${f(e)}`,`Response: ${h(r)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class M extends u{constructor({sender:r,to:e}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${e}`,`OffchainLookup sender address: ${r}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}const se="0x556f1830",R={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function ne(p,{blockNumber:r,blockTag:e,data:s,to:n}){const{args:a}=b({data:s,abi:[R]}),[o,c,t,i,l]=a;try{if(!g(n,o))throw new M({sender:o,to:n});const m=await $({data:t,sender:o,urls:c}),{data:y}=await w(p,{blockNumber:r,blockTag:e,data:k([i,O([{type:"bytes"},{type:"bytes"}],[m,l])]),to:n});return y}catch(m){throw new L({callbackSelector:i,cause:m,data:s,extraData:l,sender:o,urls:c})}}async function $({data:p,sender:r,urls:e}){let s=new Error("An unknown error occurred.");for(let n=0;n<e.length;n++){const a=e[n],o=a.includes("{sender}")||a.includes("{data}")?"GET":"POST",c=o==="POST"?{data:p,sender:r}:void 0;try{const t=await fetch(a.replace("{sender}",r).replace("{data}",p),{body:JSON.stringify(c),method:o});let i;if(t.headers.get("Content-Type")?.startsWith("application/json")?i=(await t.json()).data:i=await t.text(),!t.ok){s=new d({body:c,details:h(i.error)||t.statusText,headers:t.headers,status:t.status,url:a});continue}if(!E(i)){s=new x({result:i,url:a});continue}return i}catch(t){s=new d({body:c,details:t.message,url:a})}}throw s}export{$ as ccipFetch,ne as offchainLookup,R as offchainLookupAbiItem,se as offchainLookupSignature};
