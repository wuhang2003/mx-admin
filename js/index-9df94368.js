import{d as h,r as S,h as a,J as w,l as s,k as i}from"./index-a5dd80c2.js";import{N as U}from"./Form-ab7268b7.js";import{N as c}from"./FormItem-24e41756.js";import{N as u}from"./Select-00aee6c5.js";import{N}from"./Switch-1453150d.js";import"./Tag-f04586d2.js";const m="mx-admin:setup-api:url",p="mx-admin:setup-api:gateway",k=h({setup(){const t=S({apiUrl:localStorage.getItem("__api")||"",gatewayUrl:localStorage.getItem("__gateway")||"",persist:!1}),n=()=>{const e=new URL(location.href),{apiUrl:l,gatewayUrl:r,persist:y}=t;l&&e.searchParams.set("__api",l),r&&e.searchParams.set("__gateway",r),y&&(l&&localStorage.setItem("__api",l),r&&localStorage.setItem("__gateway",r)),e.pathname="/",e.hash="",localStorage.setItem(m,JSON.stringify([...new Set(o.concat(l))])),localStorage.setItem(p,JSON.stringify([...new Set(o.concat(r))])),location.href=e.toString()},d=()=>{localStorage.removeItem("__api"),localStorage.removeItem("__gateway"),location.href="/"},f=()=>{t.apiUrl="http://localhost:2333",t.gatewayUrl="http://localhost:2333"},o=JSON.safeParse(localStorage.getItem(m)||"[]"),g=JSON.safeParse(localStorage.getItem(p)||"[]");return()=>a("div",{class:"relative h-screen w-full flex items-center justify-center"},[a(w,{title:"设置 API",class:"modal-card sm m-auto form-card"},{default:()=>[a(U,{onSubmit:n},{default:()=>[a(c,{label:"API 地址"},{default:()=>[a(u,{options:o.map(e=>({key:e,value:e,label:e})),filterable:!0,tag:!0,clearable:!0,value:t.apiUrl,onUpdateValue:e=>{t.apiUrl=e}},null)]}),a(c,{label:"Gateway 地址"},{default:()=>[a(u,{tag:!0,options:g.map(e=>({key:e,value:e,label:e})),filterable:!0,clearable:!0,value:t.gatewayUrl,onUpdateValue:e=>{t.gatewayUrl=e}},null)]}),a(c,{label:"持久化",labelPlacement:"left"},{default:()=>[a(N,{value:t.persist,onUpdateValue:e=>{t.persist=e}},null)]}),a("div",{class:"text-center space-x-2"},[a(s,{onClick:f,round:!0},{default:()=>[i("本地调试")]}),a(s,{onClick:d,round:!0},{default:()=>[i("重置")]}),a(s,{onClick:n,round:!0,type:"primary"},{default:()=>[i("确定")]})])]})]})])}});export{k as default};
