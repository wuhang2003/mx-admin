import{B as u,g as f,d as y,i as b,c as g,a as w,e as O,H as d,s as k,b as E}from"./class-d28502ac.js";import"./index-14aac0f5.js";import"./preview-70a0ea56.js";import"./marked.esm-25f6a955.js";import"./DatePicker-8916cbd3.js";import"./ChevronRight-cef3e001.js";import"./Select-771dd85f.js";import"./Tag-1c7336f2.js";import"./Forward-f71495a1.js";import"./Form-528f2ab3.js";import"./FormItem-6c243a70.js";import"./InputNumber-6dbe8a9e.js";import"./Remove-851bb307.js";import"./Add-08e0eca7.js";import"./ButtonGroup-d4dc31c3.js";import"./use-async-monaco-8fee3c88.js";import"./index-162a104c.js";import"./use-save-confirm-e3a50392.js";import"./Switch-1449532a.js";import"./DynamicInput-b007f831.js";import"./Image-e3160afa.js";import"./utils-015cb4c2.js";import"./Tooltip-4c155209.js";import"./rounded-button-3ab3f496.js";import"./toggle-dd3ce969.js";import"./use-react-76c3bc6b.js";import"./throttle-0acbba00.js";import"./vue.runtime.esm-bundler-3e1c180c.js";import"./js-yaml-e14800c0.js";import"./last-862de5a8.js";import"./confetti-fa4954ff.js";class L extends u{constructor({callbackSelector:r,cause:e,data:s,extraData:n,sender:a,urls:o}){super(e.shortMessage||"An error occurred while fetching for an offchain result.",{cause:e,metaMessages:[...e.metaMessages||[],e.metaMessages?.length?"":[],"Offchain Gateway Call:",o&&["  Gateway URL(s):",...o.map(c=>`    ${f(c)}`)],`  Sender: ${a}`,`  Data: ${s}`,`  Callback selector: ${r}`,`  Extra data: ${n}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class x extends u{constructor({result:r,url:e}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${f(e)}`,`Response: ${JSON.stringify(r)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class M extends u{constructor({sender:r,to:e}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${e}`,`OffchainLookup sender address: ${r}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}const se="0x556f1830",R={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function ne(p,{blockNumber:r,blockTag:e,data:s,to:n}){const{args:a}=y({data:s,abi:[R]}),[o,c,t,i,l]=a;try{if(!b(n,o))throw new M({sender:o,to:n});const m=await S({data:t,sender:o,urls:c}),{data:h}=await g(p,{blockNumber:r,blockTag:e,data:w([i,O([{type:"bytes"},{type:"bytes"}],[m,l])]),to:n});return h}catch(m){throw new L({callbackSelector:i,cause:m,data:s,extraData:l,sender:o,urls:c})}}async function S({data:p,sender:r,urls:e}){let s=new Error("An unknown error occurred.");for(let n=0;n<e.length;n++){const a=e[n],o=a.includes("{sender}")||a.includes("{data}")?"GET":"POST",c=o==="POST"?{data:p,sender:r}:void 0;try{const t=await fetch(a.replace("{sender}",r).replace("{data}",p),{body:JSON.stringify(c),method:o});let i;if(t.headers.get("Content-Type")?.startsWith("application/json")?i=(await t.json()).data:i=await t.text(),!t.ok){s=new d({body:c,details:k(i.error)||t.statusText,headers:t.headers,status:t.status,url:a});continue}if(!E(i)){s=new x({result:i,url:a});continue}return i}catch(t){s=new d({body:c,details:t.message,url:a})}}throw s}export{S as ccipFetch,ne as offchainLookup,R as offchainLookupAbiItem,se as offchainLookupSignature};
