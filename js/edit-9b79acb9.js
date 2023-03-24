import{H as U}from"./rounded-button-308fbee1.js";import{E as N}from"./toggle-39aa65af.js";import{d as y,au as D,k as a,bF as C,v as g,j as x,z as p,s as P,p as k,F,f as E,x as V,m as q,l as G,R as b,br as S,C as T,E as A,bt as B,D as M}from"./index-3c95053e.js";import{u as H}from"./use-parse-payload-39d82cd6.js";import{i as L}from"./isString-0c89ce41.js";import{N as W}from"./Form-a73db28e.js";import{N as i}from"./FormItem-4a41af9c.js";import{N as _}from"./DynamicTags-b3f95c69.js";import"./use-react-aa36ef57.js";import"./use-save-confirm-a2fbb639.js";import"./throttle-d02e3100.js";import"./InputNumber-8dd0a70c.js";import"./Remove-ad107eb7.js";import"./Add-06359a2d.js";import"./Switch-9ade454a.js";import"./Select-f4a51811.js";import"./Tag-e0bc3d96.js";import"./prop-8b8caa29.js";const I="https://api.github.com/",z=(s,u)=>fetch(`${I}repos/${s}/${u}`).then(l=>l.json()),K=(s,u)=>fetch(`${I}repos/${s}/${u}/readme`).then(l=>l.json()).catch(l=>null).then(l=>{if(l){const m=(()=>{const e=l.download_url.split("/"),r=e.pop(),c=e.pop();return`https://fastly.jsdelivr.net/gh/${s}/${u}@${c}/${r}`})();return fetch(m).then(e=>e.text())}return null}),O=y({props:{onData:{type:Function,required:!0},defaultValue:{type:String}},setup(s){const u=D(),l=()=>{const m=u.create({title:"从 Github 解析",content:()=>a(y({setup(){const r=g(s.defaultValue??""),c=g(!1),f=async()=>{c.value=!0;const n=r.value.replace(/\.git$/,"").replace(/^https?:\/\/github.com\//,""),[d,h]=n.split("/"),[w,v]=await Promise.all([z(d,h),K(d,h)]);s.onData(w,v),c.value=!1,requestAnimationFrame(()=>{m.destroy()})},t=g();return x(()=>{setTimeout(()=>{t.value.focus()},10)}),()=>a(F,null,[a(p,{ref:t,onKeydown:o=>{o.code==="Enter"&&f()},class:"my-4",value:r.value,placeholder:"在此输入项目地址",onUpdateValue:o=>void(r.value=o)},null),a("div",{class:"flex space-x-4 justify-end"},[a(P,{type:"primary",round:!0,onClick:f,loading:c.value},{default:()=>[k("获取")]})])])}}),null,null)})};return()=>a(U,{color:"#25292E",icon:a(C,null,null),name:"从 GitHub 获取",onClick:l},null)}}),me=y({setup(){const s=E(),u=V(),l=()=>({name:"",previewUrl:"",docUrl:"",projectUrl:"",images:[],description:"",avatar:"",text:"",id:void 0}),m=t=>H(e)(t),e=q(l()),r=G(()=>s.query.id);x(async()=>{const t=r.value;if(t&&typeof t=="string"){const n=(await b.api.projects(t).get({})).data;m(n)}});const c=async()=>{const t=()=>{try{if(!e.text||e.text.trim().length==0)throw"内容为空";return{...B(M(e),(o,n,d)=>(o[d]=typeof n>"u"?null:typeof n=="string"&&n.length==0?"":n,o)),text:e.text.trim()}}catch(o){throw message.error(o),o}};if(r.value){if(!L(r.value))return;const o=r.value;await b.api.projects(o).put({data:t()}),message.success("修改成功")}else await b.api.projects.post({data:t()}),message.success("发布成功");u.push({name:A.ListProject})},f=(t,o)=>{const{html_url:n,homepage:d,description:h}=t;Object.assign(e,{description:h,projectUrl:n,previewUrl:d,images:(v=>{const R=/(?<=!\[.*\]\()(.+)(?=\))/g,j=[];for(const $ of v.matchAll(R))j.push($[0]);return j})(o||""),name:t.name,text:o||""})};return()=>a(T,{actionsElement:a(F,null,[a(O,{onData:f,defaultValue:e.projectUrl},null),a(U,{variant:"primary",onClick:c,icon:a(S,null,null)},null)])},{default:()=>[a(W,{labelWidth:"7rem",labelPlacement:"left",labelAlign:"left"},{default:()=>[a(i,{label:"项目名称",required:!0},{default:()=>[a(p,{autofocus:!0,placeholder:"",value:e.name,onInput:t=>void(e.name=t)},null)]}),a(i,{label:"文档地址"},{default:()=>[a(p,{placeholder:"",value:e.docUrl,onInput:t=>void(e.docUrl=t)},null)]}),a(i,{label:"预览地址"},{default:()=>[a(p,{placeholder:"",value:e.previewUrl,onInput:t=>void(e.previewUrl=t)},null)]}),a(i,{label:"项目地址"},{default:()=>[a(p,{placeholder:"",value:e.projectUrl,onInput:t=>void(e.projectUrl=t)},null)]}),a(i,{label:"项目描述",required:!0},{default:()=>[a(p,{placeholder:"",value:e.description,onInput:t=>void(e.description=t)},null)]}),a(i,{label:"项目图标"},{default:()=>[a(p,{placeholder:"",value:e.avatar,onInput:t=>void(e.avatar=t)},null)]}),a(i,{label:"预览图片"},{default:()=>[a(_,{round:!0,value:e.images,onUpdateValue:t=>void(e.images=t)},null)]}),a(i,{label:"正文",required:!0},{default:()=>[a("div",{class:"w-full"},[a(N,{unSaveConfirm:!1,class:"min-h-80 w-full h-[calc(100vh-40rem)]",loading:!!(r.value&&!e.id),onChange:t=>{e.text=t},text:e.text},null)])]})]})]})}});export{me as default};
