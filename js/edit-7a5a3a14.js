import{H as U}from"./rounded-button-0617d406.js";import{E as N}from"./toggle-c224355c.js";import{d as y,y as C,h as a,bO as D,s as g,g as x,t as p,l as P,k,F as I,b as V,v as E,r as q,i as G,R as b,bA as S,C as T,D as A,bC as B,z as M}from"./index-76074560.js";import{u as H}from"./use-parse-payload-662d330a.js";import{i as L}from"./isString-ffac7422.js";import{N as O}from"./Form-3165c662.js";import{N as i}from"./FormItem-5133757c.js";import{N as W}from"./DynamicTags-169d03d4.js";import"./use-react-8f9a061b.js";import"./use-save-confirm-efbddaad.js";import"./throttle-fb961687.js";import"./InputNumber-95870e50.js";import"./Remove-152091f1.js";import"./Add-e39c1c83.js";import"./Switch-3c1e4417.js";import"./Select-13c4085b.js";import"./Tag-6454e3d6.js";import"./prop-8b8caa29.js";const F="https://api.github.com/",_=(s,u)=>fetch(`${F}repos/${s}/${u}`).then(l=>l.json()),z=(s,u)=>fetch(`${F}repos/${s}/${u}/readme`).then(l=>l.json()).catch(l=>null).then(l=>{if(l){const m=(()=>{const e=l.download_url.split("/"),r=e.pop(),c=e.pop();return`https://fastly.jsdelivr.net/gh/${s}/${u}@${c}/${r}`})();return fetch(m).then(e=>e.text())}return null}),K=y({props:{onData:{type:Function,required:!0},defaultValue:{type:String}},setup(s){const u=C(),l=()=>{const m=u.create({title:"从 Github 解析",content:()=>a(y({setup(){const r=g(s.defaultValue??""),c=g(!1),f=async()=>{c.value=!0;const n=r.value.replace(/\.git$/,"").replace(/^https?:\/\/github.com\//,""),[d,h]=n.split("/"),[w,v]=await Promise.all([_(d,h),z(d,h)]);s.onData(w,v),c.value=!1,requestAnimationFrame(()=>{m.destroy()})},t=g();return x(()=>{setTimeout(()=>{t.value.focus()},10)}),()=>a(I,null,[a(p,{ref:t,onKeydown:o=>{o.code==="Enter"&&f()},class:"my-4",value:r.value,placeholder:"在此输入项目地址",onUpdateValue:o=>void(r.value=o)},null),a("div",{class:"flex space-x-4 justify-end"},[a(P,{type:"primary",round:!0,onClick:f,loading:c.value},{default:()=>[k("获取")]})])])}}),null,null)})};return()=>a(U,{color:"#25292E",icon:a(D,null,null),name:"从 GitHub 获取",onClick:l},null)}}),me=y({setup(){const s=V(),u=E(),l=()=>({name:"",previewUrl:"",docUrl:"",projectUrl:"",images:[],description:"",avatar:"",text:"",id:void 0}),m=t=>H(e)(t),e=q(l()),r=G(()=>s.query.id);x(async()=>{const t=r.value;if(t&&typeof t=="string"){const n=(await b.api.projects(t).get({})).data;m(n)}});const c=async()=>{const t=()=>{try{if(!e.text||e.text.trim().length==0)throw"内容为空";return{...B(M(e),(o,n,d)=>(o[d]=typeof n>"u"?null:typeof n=="string"&&n.length==0?"":n,o)),text:e.text.trim()}}catch(o){throw message.error(o),o}};if(r.value){if(!L(r.value))return;const o=r.value;await b.api.projects(o).put({data:t()}),message.success("修改成功")}else await b.api.projects.post({data:t()}),message.success("发布成功");u.push({name:A.ListProject})},f=(t,o)=>{const{html_url:n,homepage:d,description:h}=t;Object.assign(e,{description:h,projectUrl:n,previewUrl:d,images:(v=>{const R=/(?<=!\[.*\]\()(.+)(?=\))/g,j=[];for(const $ of v.matchAll(R))j.push($[0]);return j})(o||""),name:t.name,text:o||""})};return()=>a(T,{actionsElement:a(I,null,[a(K,{onData:f,defaultValue:e.projectUrl},null),a(U,{variant:"primary",onClick:c,icon:a(S,null,null)},null)])},{default:()=>[a(O,{labelWidth:"7rem",labelPlacement:"left",labelAlign:"left"},{default:()=>[a(i,{label:"项目名称",required:!0},{default:()=>[a(p,{autofocus:!0,placeholder:"",value:e.name,onInput:t=>void(e.name=t)},null)]}),a(i,{label:"文档地址"},{default:()=>[a(p,{placeholder:"",value:e.docUrl,onInput:t=>void(e.docUrl=t)},null)]}),a(i,{label:"预览地址"},{default:()=>[a(p,{placeholder:"",value:e.previewUrl,onInput:t=>void(e.previewUrl=t)},null)]}),a(i,{label:"项目地址"},{default:()=>[a(p,{placeholder:"",value:e.projectUrl,onInput:t=>void(e.projectUrl=t)},null)]}),a(i,{label:"项目描述",required:!0},{default:()=>[a(p,{placeholder:"",value:e.description,onInput:t=>void(e.description=t)},null)]}),a(i,{label:"项目图标"},{default:()=>[a(p,{placeholder:"",value:e.avatar,onInput:t=>void(e.avatar=t)},null)]}),a(i,{label:"预览图片"},{default:()=>[a(W,{round:!0,value:e.images,onUpdateValue:t=>void(e.images=t)},null)]}),a(i,{label:"正文",required:!0},{default:()=>[a("div",{class:"w-full"},[a(N,{unSaveConfirm:!1,class:"min-h-80 w-full h-[calc(100vh-40rem)]",loading:!!(r.value&&!e.id),onChange:t=>{e.text=t},text:e.text},null)])]})]})]})}});export{me as default};
