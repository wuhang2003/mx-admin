import{H as b}from"./rounded-button-d3895220.js";import{M as y,T as w,P as C,S as I}from"./parse-content-f5579811.js";import{E as P}from"./toggle-af3ba665.js";import{d as R,b as x,r as N,i as S,g as T,R as n,s as E,u as M,v as B,h as a,W as D,F as u,T as U,I as H,C as W,D as k,z as F}from"./index-60eb200c.js";import{U as m}from"./underline-input-d28b2192.js";import{u as L}from"./use-parse-payload-243b7e89.js";import{i as V}from"./isString-fcedea15.js";import{N as $}from"./FormItem-59dac335.js";import{N as z}from"./InputNumber-5245b091.js";import"./marked.esm-cdc2cd67.js";import"./DatePicker-bcb59f6e.js";import"./ChevronRight-00b1efe6.js";import"./Select-a00cd34b.js";import"./Tag-dd916899.js";import"./Forward-2c4d202d.js";import"./Form-2ececeb1.js";import"./ButtonGroup-04e35e42.js";import"./use-async-monaco-2b714cef.js";import"./index-82ea8036.js";import"./use-save-confirm-942d4a7c.js";import"./Switch-a69e17cd.js";import"./DynamicInput-810fe744.js";import"./Add-3232301c.js";import"./Remove-1026f519.js";import"./vue.runtime.esm-bundler-ccbc3fc4.js";import"./js-yaml-e14800c0.js";import"./use-react-14ded14b.js";import"./throttle-c572267d.js";const vt=R(()=>{const p=x(),d=()=>({text:"",title:"",order:0,slug:"",subtitle:"",allowComment:!0,id:void 0,images:[],meta:void 0}),c=e=>L(t)(e),t=N(d()),l=S(()=>p.query.id);T(async()=>{const e=l.value;if(e&&typeof e=="string"){const i=(await n.api.pages(e).get({})).data;c(i)}});const s=E(!1),r=M(),g=B(),f=async()=>{const e=()=>{try{if(!t.title||t.title.trim().length==0)throw"标题为空";if(!t.slug)throw"路径为空";return{...F(t),title:t.title.trim(),slug:t.slug.trim()}}catch(o){throw r.error(o),o}};if(l.value){if(!V(l.value))return;const o=l.value;await n.api.pages(o).put({data:e()}),r.success("修改成功")}else await n.api.pages.post({data:e()}),r.success("发布成功");g.push({name:k.ListPage,hash:"|publish"})};return()=>a(W,{actionsElement:a(u,null,[a(C,{data:t,onHandleYamlParsedMeta:e=>{const{title:o,slug:i,subtitle:v,...h}=e;t.title=o??t.title,t.slug=i??t.slug,t.subtitle=v??t.subtitle,t.meta={...h}}},null),a(b,{icon:a(U,null,null),onClick:f},null)]),footerButtonElement:a(u,null,[a("button",{onClick:()=>{s.value=!0}},[a(H,null,{default:()=>[a(I,null,null)]})])])},{default:()=>[a(y,{class:"mt-3 relative z-10",label:"与你有个好心情~",value:t.title,onChange:e=>{t.title=e}},null),a("div",{class:"text-gray-700 pt-3"},[a(m,{value:t.subtitle,onChange:e=>void(t.subtitle=e)},null)]),a("div",{class:"text-gray-500 py-3"},[a("label",null,[`${D}/`]),a(m,{value:t.slug,onChange:e=>void(t.slug=e)},null)]),a(P,{loading:!!(l.value&&typeof t.id>"u"),onChange:e=>{t.text=e},text:t.text},null),a(w,{disabledItem:["date-picker"],onUpdateShow:e=>{s.value=e},data:t,show:s.value},{default:()=>[a($,{label:"页面顺序"},{default:()=>[a(z,{placeholder:"",value:t.order,onUpdateValue:e=>void(t.order=e??0)},null)]})]})]})});export{vt as default};
