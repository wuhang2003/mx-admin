import{H as j}from"./rounded-button-69ddbb6f.js";import{E as $}from"./toggle-3538a519.js";import{aC as C,x as g,au as D,K as P,R as k,aw as V}from"./app-55917f23.js";import{k as b,U as a,y,R as x,aO as E,br as q,F as I,B as G,n as S,by as T}from"./Button-d9ff6831.js";import{g as B,N as p,r as A,f as M}from"./use-store-ref-bbea8734.js";import{u as H}from"./use-parse-payload-f97ef781.js";import{i as K}from"./isString-e063d140.js";import{N as L}from"./Form-13db772c.js";import{N as i}from"./FormItem-27b0faf6.js";import{N as O}from"./DynamicTags-58aebdad.js";import"./use-react-f288247f.js";import"./use-editor-setting-4096eae5.js";import"./throttle-ad3cf4c2.js";import"./InputNumber-23a03588.js";import"./Remove-0330b434.js";import"./Add-f1fa47b3.js";import"./Switch-db6bd544.js";import"./_common-6222e43f.js";import"./preload-helper-f651ca80.js";import"./use-save-confirm-7644438d.js";import"./Spin-67ef750c.js";import"./Card-078f747d.js";import"./Select-3f013427.js";import"./light-4438dbc4.js";import"./Tag-9a8c2162.js";import"./_common-991711fd.js";import"./context-92b11acc.js";import"./light-90037cf1.js";import"./prop-8b8caa29.js";const R="https://api.github.com/",W=(s,u)=>fetch(`${R}repos/${s}/${u}`).then(r=>r.json()),_=(s,u)=>fetch(`${R}repos/${s}/${u}/readme`).then(r=>r.json()).catch(r=>null).then(r=>{if(r){const m=(()=>{const e=r.download_url.split("/"),l=e.pop(),c=e.pop();return`https://fastly.jsdelivr.net/gh/${s}/${u}@${c}/${l}`})();return fetch(m).then(e=>e.text())}return null}),z=b({props:{onData:{type:Function,required:!0},defaultValue:{type:String}},setup(s){const u=B(),r=()=>{const m=u.create({title:"从 Github 解析",content:()=>a(b({setup(){const l=y(s.defaultValue??""),c=y(!1),f=async()=>{c.value=!0;const n=l.value.replace(/\.git$/,"").replace(/^https?:\/\/github.com\//,""),[d,h]=n.split("/"),[w,v]=await Promise.all([W(d,h),_(d,h)]);s.onData(w,v),c.value=!1,requestAnimationFrame(()=>{m.destroy()})},t=y();return x(()=>{setTimeout(()=>{t.value.focus()},10)}),()=>a(I,null,[a(p,{ref:t,onKeydown:o=>{o.code==="Enter"&&f()},class:"my-4",value:l.value,placeholder:"在此输入项目地址",onUpdateValue:o=>void(l.value=o)},null),a("div",{class:"flex space-x-4 justify-end"},[a(E,{type:"primary",round:!0,onClick:f,loading:c.value},{default:()=>[q("获取")]})])])}}),null,null)})};return()=>a(j,{color:"#25292E",icon:a(C,null,null),name:"从 GitHub 获取",onClick:r},null)}}),Ie=b({setup(){const s=A(),u=M(),r=()=>({name:"",previewUrl:"",docUrl:"",projectUrl:"",images:[],description:"",avatar:"",text:"",id:void 0}),m=t=>H(e)(t),e=G(r()),l=S(()=>s.query.id);x(async()=>{const t=l.value;if(t&&typeof t=="string"){const n=(await g.api.projects(t).get({})).data;m(n)}});const c=async()=>{const t=()=>{try{if(!e.text||e.text.trim().length==0)throw"内容为空";return{...V(T(e),(o,n,d)=>(o[d]=typeof n>"u"?null:typeof n=="string"&&n.length==0?"":n,o)),text:e.text.trim()}}catch(o){throw message.error(o),o}};if(l.value){if(!K(l.value))return;const o=l.value;await g.api.projects(o).put({data:t()}),message.success("修改成功")}else await g.api.projects.post({data:t()}),message.success("发布成功");u.push({name:k.ListProject})},f=(t,o)=>{const{html_url:n,homepage:d,description:h}=t;Object.assign(e,{description:h,projectUrl:n,previewUrl:d,images:(v=>{const F=/(?<=!\[.*\]\()(.+)(?=\))/g,U=[];for(const N of v.matchAll(F))U.push(N[0]);return U})(o||""),name:t.name,text:o||""})};return()=>a(P,{actionsElement:a(I,null,[a(z,{onData:f,defaultValue:e.projectUrl},null),a(j,{variant:"primary",onClick:c,icon:a(D,null,null)},null)])},{default:()=>[a(L,{labelWidth:"7rem",labelPlacement:"left",labelAlign:"left"},{default:()=>[a(i,{label:"项目名称",required:!0},{default:()=>[a(p,{autofocus:!0,placeholder:"",value:e.name,onInput:t=>void(e.name=t)},null)]}),a(i,{label:"文档地址"},{default:()=>[a(p,{placeholder:"",value:e.docUrl,onInput:t=>void(e.docUrl=t)},null)]}),a(i,{label:"预览地址"},{default:()=>[a(p,{placeholder:"",value:e.previewUrl,onInput:t=>void(e.previewUrl=t)},null)]}),a(i,{label:"项目地址"},{default:()=>[a(p,{placeholder:"",value:e.projectUrl,onInput:t=>void(e.projectUrl=t)},null)]}),a(i,{label:"项目描述",required:!0},{default:()=>[a(p,{placeholder:"",value:e.description,onInput:t=>void(e.description=t)},null)]}),a(i,{label:"项目图标"},{default:()=>[a(p,{placeholder:"",value:e.avatar,onInput:t=>void(e.avatar=t)},null)]}),a(i,{label:"预览图片"},{default:()=>[a(O,{round:!0,value:e.images,onUpdateValue:t=>void(e.images=t)},null)]}),a(i,{label:"正文",required:!0},{default:()=>[a("div",{class:"w-full"},[a($,{unSaveConfirm:!1,class:"min-h-80 w-full h-[calc(100vh-40rem)]",loading:!!(l.value&&!e.id),onChange:t=>{e.text=t},text:e.text},null)])]})]})]})}});export{Ie as default};
