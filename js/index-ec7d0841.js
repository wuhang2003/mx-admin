import{d as h,r as S,h as a,J as w,l as s,k as i}from"./index-80ed2802.js";import{N as U}from"./Form-23f3ff51.js";import{N as c}from"./FormItem-4c246b3b.js";import{N as u}from"./Select-c0d094a9.js";import{N}from"./Switch-aa793632.js";import"./Tag-24d70ed0.js";const m="mx-admin:setup-api:url",p="mx-admin:setup-api:gateway",k=h({setup(){const t=S({apiUrl:localStorage.getItem("__api")||"",gatewayUrl:localStorage.getItem("__gateway")||"",persist:!1}),n=()=>{const e=new URL(location.href),{apiUrl:l,gatewayUrl:r,persist:y}=t;l&&e.searchParams.set("__api",l),r&&e.searchParams.set("__gateway",r),y&&(l&&localStorage.setItem("__api",l),r&&localStorage.setItem("__gateway",r)),e.pathname="/",e.hash="",localStorage.setItem(m,JSON.stringify([...new Set(o.concat(l))])),localStorage.setItem(p,JSON.stringify([...new Set(o.concat(r))])),location.href=e.toString()},d=()=>{localStorage.removeItem("__api"),localStorage.removeItem("__gateway"),location.href="/"},f=()=>{t.apiUrl="http://localhost:2333",t.gatewayUrl="http://localhost:2333"},o=JSON.safeParse(localStorage.getItem(m)||"[]"),g=JSON.safeParse(localStorage.getItem(p)||"[]");return()=>a("div",{class:"relative h-screen w-full flex items-center justify-center"},[a(w,{title:"设置 API",class:"modal-card sm m-auto form-card"},{default:()=>[a(U,{onSubmit:n},{default:()=>[a(c,{label:"API 地址"},{default:()=>[a(u,{options:o.map(e=>({key:e,value:e,label:e})),filterable:!0,tag:!0,clearable:!0,value:t.apiUrl,onUpdateValue:e=>{t.apiUrl=e}},null)]}),a(c,{label:"Gateway 地址"},{default:()=>[a(u,{tag:!0,options:g.map(e=>({key:e,value:e,label:e})),filterable:!0,clearable:!0,value:t.gatewayUrl,onUpdateValue:e=>{t.gatewayUrl=e}},null)]}),a(c,{label:"持久化",labelPlacement:"left"},{default:()=>[a(N,{value:t.persist,onUpdateValue:e=>{t.persist=e}},null)]}),a("div",{class:"text-center space-x-2"},[a(s,{onClick:f,round:!0},{default:()=>[i("本地调试")]}),a(s,{onClick:d,round:!0},{default:()=>[i("重置")]}),a(s,{onClick:n,round:!0,type:"primary"},{default:()=>[i("确定")]})])]})]})])}});export{k as default};
