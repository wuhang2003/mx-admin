import{H as i}from"./rounded-button-69ddbb6f.js";import{as as I,at as r,x as u,au as f,av as P,K as k,R as y,aw as N}from"./app-55917f23.js";import{u as C}from"./use-parse-payload-f97ef781.js";import{r as T,f as D,g as F,N as c}from"./use-store-ref-bbea8734.js";import{i as h}from"./isString-e063d140.js";import{k as H,y as q,aq as B,B as E,n as L,R as M,U as e,F as v,by as $}from"./Button-d9ff6831.js";import{N as z}from"./Form-13db772c.js";import{N as m}from"./FormItem-27b0faf6.js";import"./preload-helper-f651ca80.js";import"./Spin-67ef750c.js";import"./Card-078f747d.js";import"./context-92b11acc.js";import"./light-90037cf1.js";const Z=H({setup(){const g=T(),p=D(),x=()=>({text:"",author:"",source:""}),s=q({});B(()=>{I([r.原创,r.哲学,r.文学,r.诗词]).then(t=>{s.value={source:t.from,text:t.hitokoto,author:t.from_who||t.creator}})});const w=F(),b=async()=>{const t=async()=>{await u.api.says.post({data:s.value}),message.success("发布成功"),p.push({name:y.ListSay})};a.text||a.author||a.source?w.create({title:"警告",content:"发布一言会覆盖现有的内容，要继续吗",type:"warning",negativeText:"取消",positiveText:"确定",onPositiveClick(){t()}}):t()},R=t=>C(a)(t),a=E(x()),l=L(()=>g.query.id);M(async()=>{const t=l.value;if(t&&typeof t=="string"){const n=(await u.api.says(t).get({})).data;R(n)}});const d=async()=>{const t=()=>{try{if(!a.text||a.text.trim().length==0)throw"内容为空";return{...N($(a),(o,n,S)=>(o[S]=typeof n>"u"?null:typeof n=="string"&&n.length==0?"":n,o)),text:a.text.trim()}}catch(o){throw message.error(o),o}};if(l.value){if(!h(l.value))return;const o=l.value;await u.api.says(o).put({data:t()}),message.success("修改成功")}else await u.api.says.post({data:t()}),message.success("发布成功");p.push({name:y.ListSay})};return()=>e(k,{actionsElement:e(v,null,[h(l)?e(i,{name:"更新",variant:"info",onClick:d,icon:e(f,null,null)},null):e(v,null,[e(i,{name:"发布一言",variant:"info",onClick:b,icon:e(P,null,null)},null),e(i,{name:"发布自己说的",variant:"primary",onClick:d,icon:e(f,null,null)},null)])])},{default:()=>[e(z,null,{default:()=>[e(m,{label:"内容",required:!0,labelPlacement:"left",labelStyle:{width:"4rem"}},{default:()=>[e(c,{type:"textarea",autofocus:!0,autosize:{minRows:6,maxRows:8},placeholder:s.value.text,value:a.text,onInput:t=>void(a.text=t)},null)]}),e(m,{label:"作者",labelPlacement:"left",labelStyle:{width:"4rem"}},{default:()=>[e(c,{placeholder:s.value.author,value:a.author,onInput:t=>void(a.author=t)},null)]}),e(m,{label:"来源",labelPlacement:"left",labelStyle:{width:"4rem"}},{default:()=>[e(c,{placeholder:s.value.source,value:a.source,onInput:t=>void(a.source=t)},null)]})]})]})}});export{Z as default};
