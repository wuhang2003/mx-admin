import{H as y}from"./rounded-button-0617d406.js";import{M as b,T as w,P as C,H as I,S as P}from"./preview-5c9e51a1.js";import{E as x}from"./toggle-c224355c.js";import{d as R,b as N,r as S,i as T,g as B,R as n,s as D,u as E,v as H,h as a,W as M,F as u,T as U,I as k,C as W,D as F,z as L}from"./index-76074560.js";import{U as m}from"./underline-input-7bcffeb6.js";import{u as V}from"./use-parse-payload-662d330a.js";import{i as $}from"./isString-ffac7422.js";import{N as z}from"./FormItem-5133757c.js";import{N as q}from"./InputNumber-95870e50.js";import"./marked.esm-25f6a955.js";import"./DatePicker-50959caa.js";import"./ChevronRight-ff348071.js";import"./Select-13c4085b.js";import"./Tag-6454e3d6.js";import"./Forward-629d5a97.js";import"./Form-3165c662.js";import"./ButtonGroup-549e2ff9.js";import"./use-async-monaco-c3e79dff.js";import"./index-f5dc016a.js";import"./use-save-confirm-efbddaad.js";import"./Switch-3c1e4417.js";import"./DynamicInput-18d8d53f.js";import"./Add-e39c1c83.js";import"./Remove-152091f1.js";import"./Image-bb6811e6.js";import"./utils-200f1399.js";import"./Tooltip-1f6f1738.js";import"./vue.runtime.esm-bundler-c379f156.js";import"./js-yaml-e14800c0.js";import"./use-react-8f9a061b.js";import"./throttle-fb961687.js";const wt=R(()=>{const p=N(),d=()=>({text:"",title:"",order:0,slug:"",subtitle:"",allowComment:!0,id:void 0,images:[],meta:void 0}),c=e=>V(t)(e),t=S(d()),l=T(()=>p.query.id);B(async()=>{const e=l.value;if(e&&typeof e=="string"){const i=(await n.api.pages(e).get({})).data;c(i)}});const r=D(!1),s=E(),g=H(),f=async()=>{const e=()=>{try{if(!t.title||t.title.trim().length==0)throw"标题为空";if(!t.slug)throw"路径为空";return{...L(t),title:t.title.trim(),slug:t.slug.trim()}}catch(o){throw s.error(o),o}};if(l.value){if(!$(l.value))return;const o=l.value;await n.api.pages(o).put({data:e()}),s.success("修改成功")}else await n.api.pages.post({data:e()}),s.success("发布成功");g.push({name:F.ListPage,hash:"|publish"})};return()=>a(W,{headerClass:"pt-1",actionsElement:a(u,null,[a(C,{data:t,onHandleYamlParsedMeta:e=>{const{title:o,slug:i,subtitle:v,...h}=e;t.title=o??t.title,t.slug=i??t.slug,t.subtitle=v??t.subtitle,t.meta={...h}}},null),a(I,{getData:()=>({...t})},null),a(y,{icon:a(U,null,null),onClick:f},null)]),footerButtonElement:a(u,null,[a("button",{onClick:()=>{r.value=!0}},[a(k,null,{default:()=>[a(P,null,null)]})])])},{default:()=>[a(b,{class:"mt-3 relative z-10",label:"与你有个好心情~",value:t.title,onChange:e=>{t.title=e}},null),a("div",{class:"text-gray-700 dark:text-gray-300 pt-3"},[a(m,{value:t.subtitle,onChange:e=>void(t.subtitle=e)},null)]),a("div",{class:"text-gray-500 py-3"},[a("label",null,[`${M}/`]),a(m,{value:t.slug,onChange:e=>void(t.slug=e)},null)]),a(x,{loading:!!(l.value&&typeof t.id>"u"),onChange:e=>{t.text=e},text:t.text},null),a(w,{disabledItem:["date-picker"],onUpdateShow:e=>{r.value=e},data:t,show:r.value},{default:()=>[a(z,{label:"页面顺序"},{default:()=>[a(q,{placeholder:"",value:t.order,onUpdateValue:e=>void(t.order=e??0)},null)]})]})]})});export{wt as default};
