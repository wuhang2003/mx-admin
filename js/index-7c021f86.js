import{i as p}from"./isEmpty-f4bc4ba3.js";import{k as y,y as o,au as d,U as n}from"./Button-5ec267f1.js";import{N as v}from"./use-store-ref-4d0ce661.js";import{N as f}from"./Select-410a3ac9.js";import{N as c}from"./DynamicInput-e9d0d56f.js";const I=y({props:{value:{type:Object,required:!0},onChange:{type:Function,required:!0},options:{type:Array,required:!1},plainKeyInput:{type:Boolean,required:!1,default:!1}},setup(r){const u=o([]),i=o(new Set),s=d(()=>r.value,e=>{if(!p(e)){const a=Object.entries(e).map(([l,t])=>(i.value.add(l),{key:l,value:t.toString()}));u.value=a,s()}},{deep:!0});return d(()=>u.value,e=>{const a=e.reduce((l,t)=>(t.key===""&&t.value===""||(l[t.key]=t.value.toString()),l),{});r.onChange(a)},{deep:!0}),d(()=>u.value,e=>{i.value.clear(),e.forEach(a=>{i.value.add(a.key)})},{deep:!0}),()=>n(c,{value:u.value,onUpdateValue:e=>{u.value=(()=>{const a=e.findIndex(l=>l===null);return a!==-1&&e.splice(a,1,{key:"",value:""}),e})()}},{default(e){return n("div",{class:"flex items-center w-full"},[r.plainKeyInput?n(v,{class:"mr-4",placeholder:"请输入",value:e.value.key,onUpdateValue:a=>{e.value.key=a}},null):n(f,{class:"mr-4",filterable:!0,tag:!0,placeholder:"请选择",value:e.value.key,onUpdateValue:a=>{e.value.key=a},options:r.options?.map(a=>({...a,disabled:i.value.has(a.value)}))},null),n(v,{value:e.value.value.toString(),onUpdateValue:a=>{e.value.value=a}},null)])}})}});export{I as K};
