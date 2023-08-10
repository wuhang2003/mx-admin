import{H as w}from"./rounded-button-6d996a7f.js";import{E as D}from"./toggle-ebbe296d.js";import{d as y,y as R,h as a,bO as $,s as g,g as j,t as p,l as N,k as P,F as U,b as k,v as V,r as B,i as q,R as b,bA as G,C as S,D as T,bC as A,z as H}from"./index-de880b68.js";import{u as M}from"./use-parse-payload-60fbe25d.js";import{i as L}from"./isString-7d7b76f1.js";import{N as O}from"./Form-8ac22b04.js";import{N as i}from"./FormItem-834a77b6.js";import{N as W}from"./DynamicTags-b68a3a8d.js";import"./use-lifecycle-68733d1f.js";import"./use-save-confirm-4c177e76.js";import"./throttle-4cca4ac7.js";import"./InputNumber-9e19c0f4.js";import"./Remove-e2b67a68.js";import"./Add-f63633f5.js";import"./Switch-a65c6a6e.js";import"./Select-869e5aed.js";import"./Tag-27f80eab.js";import"./prop-8b8caa29.js";const C="https://api.github.com/",_=(n,s)=>fetch(`${C}repos/${n}/${s}`).then(l=>l.json()),z=(n,s)=>fetch(`${C}repos/${n}/${s}/readme`).then(l=>l.json()).catch(l=>null).then(l=>{if(l){const m=(()=>{const e=l.download_url.split("/"),u=e.pop(),c=e.pop();return`https://fastly.jsdelivr.net/gh/${n}/${s}@${c}/${u}`})();return fetch(m).then(e=>e.text())}return null}),K=y({props:{onData:{type:Function,required:!0},defaultValue:{type:String}},setup(n){const s=R(),l=()=>{const m=s.create({title:"从 GitHub 解析",content:()=>a(y({setup(){const u=g(n.defaultValue??""),c=g(!1),f=async()=>{c.value=!0;const r=u.value.replace(/\.git$/,"").replace(/^https?:\/\/github.com\//,""),[d,h]=r.split("/"),[E,v]=await Promise.all([_(d,h),z(d,h)]);n.onData(E,v),c.value=!1,requestAnimationFrame(()=>{m.destroy()})},t=g();return j(()=>{setTimeout(()=>{t.value.focus()},10)}),()=>a(U,null,[a(p,{ref:t,onKeydown:o=>{o.code==="Enter"&&f()},class:"my-4",value:u.value,placeholder:"在此输入项目地址",onUpdateValue:o=>void(u.value=o)},null),a("div",{class:"flex space-x-4 justify-end"},[a(N,{type:"primary",round:!0,onClick:f,loading:c.value},{default:()=>[P("获取")]})])])}}),null,null)})};return()=>a(w,{color:"#25292E",icon:a($,null,null),name:"从 GitHub 获取",onClick:l},null)}}),me=y({setup(){const n=k(),s=V(),l=()=>({name:"",previewUrl:"",docUrl:"",projectUrl:"",images:[],description:"",avatar:"",text:"",id:void 0}),m=t=>M(e)(t),e=B(l()),u=q(()=>n.query.id);j(async()=>{const t=u.value;if(t&&typeof t=="string"){const r=(await b.api.projects(t).get({})).data;m(r)}});const c=async()=>{const t=()=>{try{if(!e.text||e.text.trim().length==0)throw"内容为空";return{...A(H(e),(o,r,d)=>(o[d]=typeof r>"u"?null:typeof r=="string"&&r.length==0?"":r,o)),text:e.text.trim()}}catch(o){throw message.error(o),o}};if(u.value){if(!L(u.value))return;const o=u.value;await b.api.projects(o).put({data:t()}),message.success("修改成功")}else await b.api.projects.post({data:t()}),message.success("发布成功");s.push({name:T.ListProject})},f=(t,o)=>{const{html_url:r,homepage:d,description:h}=t;Object.assign(e,{description:h,projectUrl:r,previewUrl:d,images:(v=>{const x=/(?<=!\[.*\]\()(.+)(?=\))/g,F=[];for(const I of v.matchAll(x))F.push(I[0]);return F})(o||""),name:t.name,text:o||""})};return()=>a(S,{actionsElement:a(U,null,[a(K,{onData:f,defaultValue:e.projectUrl},null),a(w,{variant:"primary",onClick:c,icon:a(G,null,null)},null)])},{default:()=>[a(O,{labelWidth:"7rem",labelPlacement:"left",labelAlign:"left"},{default:()=>[a(i,{label:"项目名称",required:!0},{default:()=>[a(p,{autofocus:!0,placeholder:"",value:e.name,onInput:t=>void(e.name=t)},null)]}),a(i,{label:"文档地址"},{default:()=>[a(p,{placeholder:"",value:e.docUrl,onInput:t=>void(e.docUrl=t)},null)]}),a(i,{label:"预览地址"},{default:()=>[a(p,{placeholder:"",value:e.previewUrl,onInput:t=>void(e.previewUrl=t)},null)]}),a(i,{label:"项目地址"},{default:()=>[a(p,{placeholder:"",value:e.projectUrl,onInput:t=>void(e.projectUrl=t)},null)]}),a(i,{label:"项目描述",required:!0},{default:()=>[a(p,{placeholder:"",value:e.description,onInput:t=>void(e.description=t)},null)]}),a(i,{label:"项目图标"},{default:()=>[a(p,{placeholder:"",value:e.avatar,onInput:t=>void(e.avatar=t)},null)]}),a(i,{label:"预览图片"},{default:()=>[a(W,{round:!0,value:e.images,onUpdateValue:t=>void(e.images=t)},null)]}),a(i,{label:"正文",required:!0},{default:()=>[a("div",{class:"w-full"},[a(D,{unSaveConfirm:!1,class:"min-h-80 w-full h-[calc(100vh-40rem)]",loading:!!(u.value&&!e.id),onChange:t=>{e.text=t},text:e.text},null)])]})]})]})}});export{me as default};
