import{B as u,g as f,d as y,i as b,c as g,a as w,e as O,H as d,s as k,b as E}from"./class-642621ef.js";import"./index-cd812593.js";import"./preview-a6cdf49b.js";import"./marked.esm-d3a6abf7.js";import"./DatePicker-951026d9.js";import"./ChevronRight-71591814.js";import"./Select-5dce966b.js";import"./Tag-920f9c83.js";import"./Forward-6fc89dff.js";import"./Form-8f5690aa.js";import"./FormItem-3cac42a6.js";import"./InputNumber-cafda58d.js";import"./Remove-873c0e2d.js";import"./Add-32ea8ade.js";import"./ButtonGroup-f1747387.js";import"./use-async-monaco-4b582b29.js";import"./index-86946ea7.js";import"./use-save-confirm-59060e0a.js";import"./Switch-884b65e8.js";import"./DynamicInput-bcf31c28.js";import"./Image-a184b40d.js";import"./utils-6df4144d.js";import"./Tooltip-ea7808f3.js";import"./rounded-button-d2815255.js";import"./toggle-799f997d.js";import"./use-react-7ba26c0a.js";import"./throttle-4f9f5f96.js";import"./vue.runtime.esm-bundler-9568cbe5.js";import"./js-yaml-e14800c0.js";import"./last-862de5a8.js";import"./confetti-fa4954ff.js";class L extends u{constructor({callbackSelector:r,cause:e,data:s,extraData:n,sender:a,urls:o}){super(e.shortMessage||"An error occurred while fetching for an offchain result.",{cause:e,metaMessages:[...e.metaMessages||[],e.metaMessages?.length?"":[],"Offchain Gateway Call:",o&&["  Gateway URL(s):",...o.map(c=>`    ${f(c)}`)],`  Sender: ${a}`,`  Data: ${s}`,`  Callback selector: ${r}`,`  Extra data: ${n}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class x extends u{constructor({result:r,url:e}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${f(e)}`,`Response: ${JSON.stringify(r)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class M extends u{constructor({sender:r,to:e}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${e}`,`OffchainLookup sender address: ${r}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}const se="0x556f1830",R={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function ne(p,{blockNumber:r,blockTag:e,data:s,to:n}){const{args:a}=y({data:s,abi:[R]}),[o,c,t,i,l]=a;try{if(!b(n,o))throw new M({sender:o,to:n});const m=await S({data:t,sender:o,urls:c}),{data:h}=await g(p,{blockNumber:r,blockTag:e,data:w([i,O([{type:"bytes"},{type:"bytes"}],[m,l])]),to:n});return h}catch(m){throw new L({callbackSelector:i,cause:m,data:s,extraData:l,sender:o,urls:c})}}async function S({data:p,sender:r,urls:e}){let s=new Error("An unknown error occurred.");for(let n=0;n<e.length;n++){const a=e[n],o=a.includes("{sender}")||a.includes("{data}")?"GET":"POST",c=o==="POST"?{data:p,sender:r}:void 0;try{const t=await fetch(a.replace("{sender}",r).replace("{data}",p),{body:JSON.stringify(c),method:o});let i;if(t.headers.get("Content-Type")?.startsWith("application/json")?i=(await t.json()).data:i=await t.text(),!t.ok){s=new d({body:c,details:k(i.error)||t.statusText,headers:t.headers,status:t.status,url:a});continue}if(!E(i)){s=new x({result:i,url:a});continue}return i}catch(t){s=new d({body:c,details:t.message,url:a})}}throw s}export{S as ccipFetch,ne as offchainLookup,R as offchainLookupAbiItem,se as offchainLookupSignature};
