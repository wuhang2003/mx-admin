import{B as u,g as f,s as h,d as b,i as g,c as w,a as k,e as O,H as d,b as E}from"./class-87b26567.js";import"./index-78dcda3c.js";import"./preview-d124aea3.js";import"./marked.esm-8714d5d4.js";import"./DatePicker-3fcfcd8c.js";import"./ChevronRight-c0863d3d.js";import"./Select-156dc683.js";import"./Tag-bcb6f697.js";import"./Forward-f01df756.js";import"./Form-1c458c6f.js";import"./FormItem-5e66ef71.js";import"./InputNumber-0bed1d89.js";import"./Remove-cd835f48.js";import"./Add-bccda1b1.js";import"./ButtonGroup-b31b93e5.js";import"./use-async-monaco-3a4f1ab5.js";import"./index-68ea555f.js";import"./use-save-confirm-23e00c88.js";import"./Switch-0301ac71.js";import"./DynamicInput-f6544583.js";import"./Image-4f5001c5.js";import"./utils-21998ac5.js";import"./Tooltip-fe6a3cad.js";import"./rounded-button-bac453cd.js";import"./toggle-2b5442cc.js";import"./use-lifecycle-fb314b2f.js";import"./throttle-ae553700.js";import"./vue.runtime.esm-bundler-6d882948.js";import"./js-yaml-e14800c0.js";import"./last-862de5a8.js";import"./confetti-fa4954ff.js";class L extends u{constructor({callbackSelector:r,cause:e,data:s,extraData:n,sender:a,urls:o}){super(e.shortMessage||"An error occurred while fetching for an offchain result.",{cause:e,metaMessages:[...e.metaMessages||[],e.metaMessages?.length?"":[],"Offchain Gateway Call:",o&&["  Gateway URL(s):",...o.map(c=>`    ${f(c)}`)],`  Sender: ${a}`,`  Data: ${s}`,`  Callback selector: ${r}`,`  Extra data: ${n}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class x extends u{constructor({result:r,url:e}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${f(e)}`,`Response: ${h(r)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class M extends u{constructor({sender:r,to:e}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${e}`,`OffchainLookup sender address: ${r}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}const se="0x556f1830",R={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function ne(p,{blockNumber:r,blockTag:e,data:s,to:n}){const{args:a}=b({data:s,abi:[R]}),[o,c,t,i,l]=a;try{if(!g(n,o))throw new M({sender:o,to:n});const m=await $({data:t,sender:o,urls:c}),{data:y}=await w(p,{blockNumber:r,blockTag:e,data:k([i,O([{type:"bytes"},{type:"bytes"}],[m,l])]),to:n});return y}catch(m){throw new L({callbackSelector:i,cause:m,data:s,extraData:l,sender:o,urls:c})}}async function $({data:p,sender:r,urls:e}){let s=new Error("An unknown error occurred.");for(let n=0;n<e.length;n++){const a=e[n],o=a.includes("{sender}")||a.includes("{data}")?"GET":"POST",c=o==="POST"?{data:p,sender:r}:void 0;try{const t=await fetch(a.replace("{sender}",r).replace("{data}",p),{body:JSON.stringify(c),method:o});let i;if(t.headers.get("Content-Type")?.startsWith("application/json")?i=(await t.json()).data:i=await t.text(),!t.ok){s=new d({body:c,details:h(i.error)||t.statusText,headers:t.headers,status:t.status,url:a});continue}if(!E(i)){s=new x({result:i,url:a});continue}return i}catch(t){s=new d({body:c,details:t.message,url:a})}}throw s}export{$ as ccipFetch,ne as offchainLookup,R as offchainLookupAbiItem,se as offchainLookupSignature};
