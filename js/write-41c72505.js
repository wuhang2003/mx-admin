import{H as w}from"./rounded-button-1d5720ce.js";import{M as y,T as b,P as C,H as E,S as I,E as P}from"./preview-1e85f065.js";import{E as x}from"./toggle-8057d7e0.js";import{d as R,b as D,r as M,i as N,g as S,R as n,s as T,u as B,v as H,w as U,h as a,W as k,F as u,T as F,I as W,C as L,D as V,z as $}from"./index-85889586.js";import{U as m}from"./underline-input-53d62a1f.js";import{u as z}from"./use-parse-payload-9f1e01c2.js";import{i as A}from"./isString-a3620497.js";import{N as q}from"./FormItem-e974ff62.js";import{N as K}from"./InputNumber-121c6ffd.js";import"./marked.esm-d3a6abf7.js";import"./DatePicker-2a3767bf.js";import"./ChevronRight-9c7c66f3.js";import"./Select-017984d3.js";import"./Tag-c94d3cf9.js";import"./Forward-c0fc548e.js";import"./Form-cfe354a4.js";import"./ButtonGroup-a7cb8811.js";import"./use-async-monaco-c23d23de.js";import"./index-95fe9eaf.js";import"./use-save-confirm-f6bdedab.js";import"./Switch-aff33488.js";import"./DynamicInput-833bd791.js";import"./Add-b97f7bb2.js";import"./Remove-7151b885.js";import"./Image-28f65651.js";import"./utils-f8454314.js";import"./Tooltip-60d6807f.js";import"./vue.runtime.esm-bundler-1827eb7f.js";import"./js-yaml-e14800c0.js";import"./use-lifecycle-5fb3398f.js";import"./throttle-73700e16.js";const Et=R(()=>{const p=D(),d=()=>({text:"",title:"",order:0,slug:"",subtitle:"",allowComment:!0,id:void 0,images:[],meta:void 0}),c=e=>z(t)(e),t=M(d()),s=N(()=>p.query.id);S(async()=>{const e=s.value;if(e&&typeof e=="string"){const i=(await n.api.pages(e).get({})).data;c(i)}});const l=T(!1),r=B(),g=H(),f=async()=>{const e=()=>{try{if(!t.title||t.title.trim().length==0)throw"标题为空";if(!t.slug)throw"路径为空";return{...$(t),title:t.title.trim(),slug:t.slug.trim()}}catch(o){throw r.error(o),o}};if(s.value){if(!A(s.value))return;const o=s.value;await n.api.pages(o).put({data:e()}),r.success("修改成功")}else await n.api.pages.post({data:e()}),r.success("发布成功");g.push({name:V.ListPage,hash:"|publish"})};return U(()=>t,()=>{window.dispatchEvent(new CustomEvent(P.EditDataUpdate))},{deep:!0}),()=>a(L,{headerClass:"pt-1",actionsElement:a(u,null,[a(C,{data:t,onHandleYamlParsedMeta:e=>{const{title:o,slug:i,subtitle:v,...h}=e;t.title=o??t.title,t.slug=i??t.slug,t.subtitle=v??t.subtitle,t.meta={...h}}},null),a(E,{getData:()=>({...t})},null),a(w,{icon:a(F,null,null),onClick:f},null)]),footerButtonElement:a(u,null,[a("button",{onClick:()=>{l.value=!0}},[a(W,null,{default:()=>[a(I,null,null)]})])])},{default:()=>[a(y,{class:"relative z-10 mt-3",label:"与你有个好心情~",value:t.title,onChange:e=>{t.title=e}},null),a("div",{class:"pt-3 text-gray-700 dark:text-gray-300"},[a(m,{value:t.subtitle,onChange:e=>void(t.subtitle=e)},null)]),a("div",{class:"py-3 text-gray-500"},[a("label",null,[`${k}/`]),a(m,{value:t.slug,onChange:e=>void(t.slug=e)},null)]),a(x,{loading:!!(s.value&&typeof t.id>"u"),onChange:e=>{t.text=e},text:t.text},null),a(b,{disabledItem:["date-picker"],onUpdateShow:e=>{l.value=e},data:t,show:l.value},{default:()=>[a(q,{label:"页面顺序"},{default:()=>[a(K,{placeholder:"",value:t.order,onUpdateValue:e=>void(t.order=e??0)},null)]})]})]})});export{Et as default};
