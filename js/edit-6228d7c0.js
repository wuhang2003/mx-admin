import{H as i}from"./rounded-button-b2a219c4.js";import{d as C,b as I,v as P,s as k,al as N,by as D,bz as r,y as T,r as F,i as H,g as z,R as u,h as t,t as c,F as f,bA as y,bB as B,C as E,D as h,bC as L,z as M}from"./index-8a35f31c.js";import{u as q}from"./use-parse-payload-f9900750.js";import{i as v}from"./isString-7383559d.js";import{N as A}from"./Form-b1a72a95.js";import{N as m}from"./FormItem-f7d52703.js";const K=C({setup(){const g=I(),d=P(),b=()=>({text:"",author:"",source:""}),n=k({});N(()=>{D([r.原创,r.哲学,r.文学,r.诗词]).then(e=>{n.value={source:e.from,text:e.hitokoto,author:e.from_who||e.creator}})});const x=T(),w=async()=>{const e=async()=>{await u.api.says.post({data:n.value}),message.success("发布成功"),d.push({name:h.ListSay})};a.text||a.author||a.source?x.create({title:"警告",content:"发布一言会覆盖现有的内容，要继续吗",type:"warning",negativeText:"取消",positiveText:"确定",onPositiveClick(){e()}}):e()},S=e=>q(a)(e),a=F(b()),l=H(()=>g.query.id);z(async()=>{const e=l.value;if(e&&typeof e=="string"){const s=(await u.api.says(e).get({})).data;S(s)}});const p=async()=>{const e=()=>{try{if(!a.text||a.text.trim().length==0)throw"内容为空";return{...L(M(a),(o,s,R)=>(o[R]=typeof s>"u"?null:typeof s=="string"&&s.length==0?"":s,o)),text:a.text.trim()}}catch(o){throw message.error(o),o}};if(l.value){if(!v(l.value))return;const o=l.value;await u.api.says(o).put({data:e()}),message.success("修改成功")}else await u.api.says.post({data:e()}),message.success("发布成功");d.push({name:h.ListSay})};return()=>t(E,{actionsElement:t(f,null,[v(l)?t(i,{name:"更新",variant:"info",onClick:p,icon:t(y,null,null)},null):t(f,null,[t(i,{name:"发布一言",variant:"info",onClick:w,icon:t(B,null,null)},null),t(i,{name:"发布自己说的",variant:"primary",onClick:p,icon:t(y,null,null)},null)])])},{default:()=>[t(A,null,{default:()=>[t(m,{label:"内容",required:!0,labelPlacement:"left",labelStyle:{width:"4rem"}},{default:()=>[t(c,{type:"textarea",autofocus:!0,autosize:{minRows:6,maxRows:8},placeholder:n.value.text,value:a.text,onInput:e=>void(a.text=e)},null)]}),t(m,{label:"作者",labelPlacement:"left",labelStyle:{width:"4rem"}},{default:()=>[t(c,{placeholder:n.value.author,value:a.author,onInput:e=>void(a.author=e)},null)]}),t(m,{label:"来源",labelPlacement:"left",labelStyle:{width:"4rem"}},{default:()=>[t(c,{placeholder:n.value.source,value:a.source,onInput:e=>void(a.source=e)},null)]})]})]})}});export{K as default};
