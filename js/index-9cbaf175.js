import{i as p}from"./isEmpty-b5929da9.js";import{d as y,s,w as i,h as n,t as v}from"./index-b7f3c7f1.js";import{N as c}from"./Select-aa01f3ad.js";import{N as f}from"./DynamicInput-9097df45.js";const I=y({props:{value:{type:Object,required:!0},onChange:{type:Function,required:!0},options:{type:Array,required:!1},plainKeyInput:{type:Boolean,required:!1,default:!1}},setup(r){const u=s([]),d=s(new Set),o=i(()=>r.value,e=>{if(!p(e)){const a=Object.entries(e).map(([l,t])=>(d.value.add(l),{key:l,value:t.toString()}));u.value=a,o()}},{deep:!0});return i(()=>u.value,e=>{const a=e.reduce((l,t)=>(t.key===""&&t.value===""||(l[t.key]=t.value.toString()),l),{});r.onChange(a)},{deep:!0}),i(()=>u.value,e=>{d.value.clear(),e.forEach(a=>{d.value.add(a.key)})},{deep:!0}),()=>n(f,{value:u.value,onUpdateValue:e=>{u.value=(()=>{const a=e.findIndex(l=>l===null);return a!==-1&&e.splice(a,1,{key:"",value:""}),e})()}},{default(e){return n("div",{class:"flex items-center w-full"},[r.plainKeyInput?n(v,{class:"mr-4",placeholder:"请输入",value:e.value.key,onUpdateValue:a=>{e.value.key=a}},null):n(c,{class:"mr-4",filterable:!0,tag:!0,placeholder:"请选择",value:e.value.key,onUpdateValue:a=>{e.value.key=a},options:r.options?.map(a=>({...a,disabled:d.value.has(a.value)}))},null),n(v,{value:e.value.value.toString(),onUpdateValue:a=>{e.value.value=a}},null)])}})}});export{I as K};
