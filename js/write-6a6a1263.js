import{H as y}from"./rounded-button-308fbee1.js";import{M as b,T as w,P as C,S as I}from"./parse-content-9edd44ab.js";import{E as P}from"./toggle-39aa65af.js";import{d as x,f as R,m as E,l as N,j as S,R as n,v as T,u as M,x as B,k as a,W as D,F as u,T as U,I as k,C as H,E as W,D as F}from"./index-3c95053e.js";import{U as m}from"./underline-input-f6f70093.js";import{u as L}from"./use-parse-payload-39d82cd6.js";import{i as V}from"./isString-0c89ce41.js";import{N as $}from"./FormItem-4a41af9c.js";import{N as j}from"./InputNumber-8dd0a70c.js";import"./marked.esm-75dc6516.js";import"./DatePicker-50faa177.js";import"./ChevronRight-32b86c47.js";import"./Select-f4a51811.js";import"./Tag-e0bc3d96.js";import"./Forward-6cab11cb.js";import"./Form-a73db28e.js";import"./ButtonGroup-d351298b.js";import"./use-async-monaco-91c11c5a.js";import"./index-6c84ec68.js";import"./index-1b8f17cb.js";import"./use-save-confirm-a2fbb639.js";import"./Switch-9ade454a.js";import"./DynamicInput-0c5f3a4d.js";import"./Add-06359a2d.js";import"./Remove-ad107eb7.js";import"./vue.runtime.esm-bundler-4118a185.js";import"./js-yaml-e14800c0.js";import"./use-react-aa36ef57.js";import"./throttle-d02e3100.js";const ht=x(()=>{const p=R(),d=()=>({text:"",title:"",order:0,slug:"",subtitle:"",allowComment:!0,id:void 0,images:[],meta:void 0}),c=e=>L(t)(e),t=E(d()),l=N(()=>p.query.id);S(async()=>{const e=l.value;if(e&&typeof e=="string"){const i=(await n.api.pages(e).get({})).data;c(i)}});const s=T(!1),r=M(),g=B(),f=async()=>{const e=()=>{try{if(!t.title||t.title.trim().length==0)throw"标题为空";if(!t.slug)throw"路径为空";return{...F(t),title:t.title.trim(),slug:t.slug.trim()}}catch(o){throw r.error(o),o}};if(l.value){if(!V(l.value))return;const o=l.value;await n.api.pages(o).put({data:e()}),r.success("修改成功")}else await n.api.pages.post({data:e()}),r.success("发布成功");g.push({name:W.ListPage,hash:"|publish"})};return()=>a(H,{actionsElement:a(u,null,[a(C,{data:t,onHandleYamlParsedMeta:e=>{const{title:o,slug:i,subtitle:v,...h}=e;t.title=o??t.title,t.slug=i??t.slug,t.subtitle=v??t.subtitle,t.meta={...h}}},null),a(y,{icon:a(U,null,null),onClick:f},null)]),footerButtonElement:a(u,null,[a("button",{onClick:()=>{s.value=!0}},[a(k,null,{default:()=>[a(I,null,null)]})])])},{default:()=>[a(b,{class:"mt-3 relative z-10",label:"与你有个好心情~",value:t.title,onChange:e=>{t.title=e}},null),a("div",{class:"text-gray-700 pt-3"},[a(m,{value:t.subtitle,onChange:e=>void(t.subtitle=e)},null)]),a("div",{class:"text-gray-500 py-3"},[a("label",null,[`${D}/`]),a(m,{value:t.slug,onChange:e=>void(t.slug=e)},null)]),a(P,{loading:!!(l.value&&typeof t.id>"u"),onChange:e=>{t.text=e},text:t.text},null),a(w,{disabledItem:["date-picker"],onUpdateShow:e=>{s.value=e},data:t,show:s.value},{default:()=>[a($,{label:"页面顺序"},{default:()=>[a(j,{placeholder:"",value:t.order,onUpdateValue:e=>void(t.order=e??0)},null)]})]})]})});export{ht as default};
