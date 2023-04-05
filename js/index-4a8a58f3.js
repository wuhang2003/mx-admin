import{bT as ce,bU as de,bV as pe,bW as fe,d as w,s as v,aW as Z,i as x,aD as me,e as D,ax as j,r as S,w as k,h as e,m as I,av as T,F as N,aH as ve,bX as A,L as Q,bY as be,t as g,bI as ye,g as q,x as ge,al as ee,R as m,bZ as te,z as we,b_ as he,E as Ne,k as f,l as h,bo as F,au as ae,K as xe,J as ke,I as Se,A as Ie,p as Ce,b$ as Pe,v as le,bd as M,c0 as ne,D as Te,u as De,c1 as je,c2 as $,c3 as Oe,aq as Ae,b as Fe,C as Ee}from"./index-b7f3c7f1.js";import{R as K}from"./relative-time-ae898cc1.js";import{H as R}from"./rounded-button-f759fdc2.js";import{m as Ve}from"./marked.esm-cdc2cd67.js";import{c as re,d as U,N as Ue}from"./DatePicker-c31cc187.js";import{N as C}from"./Form-d7d00439.js";import{N as d}from"./FormItem-f26b812a.js";import{N as Le}from"./InputNumber-282e5429.js";import{N as se}from"./Switch-d69dbd3e.js";import{N as Be}from"./DynamicTags-76f8dfe8.js";import{_ as H}from"./CheckCircleOutlined-cd7da1bb.js";import{i as L}from"./isEmpty-b5929da9.js";import{b as qe}from"./_baseClone-883ca8ff.js";import{N as B}from"./Popconfirm-ef29ff56.js";import{N as Ke,a as _e}from"./ListItem-e7f5f878.js";import{N as Me}from"./ButtonGroup-9cb80a26.js";import{N as $e}from"./DataTable-221790ec.js";import{K as Re}from"./index-9cbaf175.js";import{U as He}from"./index-3c086f24.js";import{N as ze}from"./Upload-486d2132.js";import{N as Ge,a as E}from"./Tabs-232f53c7.js";import"./ChevronRight-fa1dec26.js";import"./Select-aa01f3ad.js";import"./Tag-1f78957d.js";import"./Forward-6f773280.js";import"./Remove-10ad4dd9.js";import"./Add-a1cb15bb.js";import"./prop-8b8caa29.js";import"./vue.runtime.esm-bundler-6a8e95e3.js";import"./Checkbox-b8c2ff0b.js";import"./Pagination-c74f3065.js";import"./Tooltip-73952149.js";import"./DynamicInput-9097df45.js";import"./utils-336ef3ed.js";import"./throttle-8d3499c9.js";function We(t){return ce(de(t).toLowerCase())}var Je=pe(function(t,r,n){return r=r.toLowerCase(),t+(n?We(r):r)});const Xe=Je;var Ye=1,Ze=4;function ue(t){return qe(t,Ye|Ze)}function z(t,r,n){return t==null?t:fe(t,r,n)}const G=w({props:{condition:{type:[Boolean,Function],required:!0}},setup(t,{slots:r}){const n=()=>{if(typeof t.condition=="function"?t.condition():t.condition)return r.default?.()};return()=>n()}});function V(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!Q(t)}const Qe="mt-6",et={class:Qe,labelPlacement:"left",labelAlign:"right",labelWidth:150,autocomplete:"do-not-autofill"},oe=Symbol("JSONSchemaFormInject"),tt=w({props:{schema:{type:Object,required:!0},onValueChange:{type:Function,required:!1},initialValue:{type:Object,required:!0},getKey:{type:Function,required:!1,default:t=>t}},setup(t){const r=v(t.initialValue);Z(()=>{t.onValueChange?.(r.value)},{flush:"post"});const n=x(()=>t.schema.definitions),c=x(()=>new Map(Object.entries(t.schema.definitions)));me(oe,{schema:t.schema,definitions:c,getKey:t.getKey});const s=x(()=>Object.keys(n.value)),o=v([s.value[0]]),a=D(j),i=S(et);return k(()=>a.viewport.value.mobile,l=>{l?(i.labelPlacement="top",i.labelAlign="left"):(i.labelPlacement="left",i.labelAlign="right")},{immediate:!0}),()=>{let l,u;const{schema:p}=t;return e(N,null,[e(re,{accordion:!0,defaultExpandedNames:o.value,displayDirective:"if"},V(l=s.value.map(b=>{const y=n.value[b];return y.title?e(U,{title:y.title,"data-schema":JSON.stringify(y)},{default:()=>[e(C,i,{default:()=>[e(ie,{dataKey:t.getKey(b),formData:r,schema:y},null)]})]}):null}))?l:{default:()=>[l]}),p.ps.length?e(I,{vertical:!0},V(u=p.ps.map(b=>e(T,{class:"ml-4 mt-8 text-xs inline-block",depth:3},V(b)?b:{default:()=>[b]})))?u:{default:()=>[u]}):null])}}}),ie=w({props:{schema:{type:Object,required:!0},formData:{type:Object,required:!0},dataKey:{type:String,required:!0}},setup(t){const{definitions:r,getKey:n}=ve(oe,{});return()=>{const{schema:c,formData:s,dataKey:o}=t;return c?e(N,null,[Object.keys(c.properties).map(a=>{const i=c.properties[a];if(i.$ref){const l=r.value.get(i.$ref.split("/").at(-1));return e(ie,{dataKey:`${n(o)}.${a}`,formData:s,schema:l},null)}return e(at,{value:A(s.value,`${n(o)}.${a}`,void 0),onUpdateValue:l=>{A(s.value,n(o))?z(s.value,`${n(o)}.${a}`,l):z(s.value,n(o),{...A(s.value,n(o),{}),[a]:l})},title:i.title,type:i.type,options:i?.["ui:options"],description:i.description},null)})]):null}}}),at=w({props:{type:{type:String,required:!0},title:{type:String,required:!0},description:{type:String},options:{type:Object,default:()=>({})},value:{type:Object,required:!0},onUpdateValue:{type:Function,required:!0}},setup(t){const r=v(t.value);Z(()=>{t.onUpdateValue(r.value)});const n=()=>{const{options:o}=t;switch(t.type){case"url":case"string":{const{type:a}=o;return e(g,{inputProps:{id:be()},value:r.value,onUpdateValue:i=>{r.value=i},type:a||"text",showPasswordToggle:!0,autosize:a=="textarea"?{maxRows:5,minRows:3}:void 0,clearable:!0},null)}case"array":return e(Be,{value:r.value,onUpdateValue:a=>{r.value=a}},null);case"boolean":return e(se,{value:r.value,onUpdateValue:a=>{r.value=a}},null);case"integer":return e(Le,{value:r.value,onUpdateValue:a=>{r.value=a}},null);default:return null}},c=D(j),s=x(()=>c.viewport.value.mobile?1:2);return()=>{const{title:o,options:a,description:i}=t,l=e(N,null,[e(d,{label:o},{default:()=>[i?e(I,{vertical:!0},{default:()=>[n(),e(T,{class:"text-xs",depth:3},{default:()=>[e("span",{innerHTML:Ve.parse(i)},null)]})]}):n()]})]);return a.halfGrid&&s.value===2?e("div",{class:"w-1/2 inline-block"},[l]):l}}}),lt="mt-6",nt={class:lt,labelPlacement:"left",labelAlign:"right",labelWidth:150,autocomplete:"chrome-off"},W={autosize:!0,clearable:!0,style:"min-width: 300px; max-width: 100%"},rt=w(()=>{const{setHeaderButtons:t}=ye();q(()=>{t(e(R,{disabled:!0,onClick:o,icon:e(H,null,null)},null))}),ge(()=>{t(null)});const r=v();ee(async()=>{r.value=await m.api.config.jsonschema.get({transform:!1}),await a()});let n={};const c=S({}),s=v({});k(()=>c,u=>{s.value=te(n,we(u))},{deep:!0}),k(()=>s.value,u=>{let p=!1;L(u)?p=!1:p=!0,t(e(R,{disabled:!p,icon:e(H,null,null),onClick:o},null))});async function o(){if(L(s.value))return;const u=Object.entries(s.value);for await(const[p,b]of u){const y=Object.fromEntries(Object.entries(b).map(([O,_])=>Array.isArray(_)?[O,c[p][O]]:[O,_]));await m.api.options(p).patch({data:y})}await a(),message.success("修改成功")}const a=async()=>{let u=await m.api.options.get();u=he(r.value.default,u),n=ue(u),Object.assign(c,u)},i=D(j),l=S(nt);return k(()=>i.viewport.value.mobile,u=>{u?(l.labelPlacement="top",l.labelAlign="left"):(l.labelPlacement="left",l.labelAlign="right")},{immediate:!0}),()=>e(N,null,[e("div",{class:"pt-4"},null),r.value&&e(tt,{initialValue:c,getKey:u=>u.split(".").map(p=>Xe(p)).join(".").replace("Dto",""),schema:r.value},null)])});function J(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!Q(t)}const st=w(()=>{const t=v([]),r=async()=>{const s=await m.api.user.session.get({});t.value=[...s.data]};q(()=>{r()});const n=async(s,o)=>{s?(await m.api.user.logout.post({}),ne(),window.location.reload()):(await m.api.user.session(o).delete({}),t.value=t.value.filter(a=>a.id!==o))},c=async()=>{await Promise.all(t.value.map(s=>{if(!s.current)return n(!1,s.id)})),await r()};return()=>{let s;return e(N,null,[e(Ne,{class:"flex items-center justify-between"},{default:()=>[e("span",{class:"ml-4"},[f("登录设备")]),e(B,{onPositiveClick:c},{trigger(){return e(h,{size:"small",text:!0,type:"error",disabled:t.value.length==1&&t.value[0].current},{default:()=>[f("踢掉全部")]})},default(){return"确定踢掉全部登录设备（除当前会话）？"}})]}),e(Ke,{bordered:!0},J(s=t.value.map(({id:o,ua:a,ip:i,date:l,current:u})=>e(_e,{key:o},{prefix(){return e("div",{class:"w-20 text-center"},[u?"当前":null])},suffix(){return e(Me,null,{default:()=>[e(B,{onPositiveClick:()=>n(!!u,o)},{trigger(){return e(h,{tertiary:!0,type:"error"},{default:()=>[u?"注销":"踢"]})},default(){return u?"登出？":"确定要踢出吗？"}})]})},default(){return e(I,{vertical:!0},{default:()=>[e(G,{condition:!!a},{default:()=>[e(F,null,{default:()=>[f("User Agent: "),a]})]}),e(G,{condition:!!i},{default:()=>[e(F,null,{default:()=>[f("IP:")," ",e(ae,{ip:i,triggerEl:e(h,{text:!0,size:"tiny",type:"primary"},J(i)?i:{default:()=>[i]})},null)]})]}),e(F,null,{default:()=>[u?"活跃时间":"登录时间",f(":")," ",e(K,{time:l},null)]})]})}})))?s:{default:()=>[s]}),e("div",{class:"pt-4"},null),e(re,{defaultExpandedNames:[""],displayDirective:"show"},{default:()=>[e(U,{name:"reset",title:"修改密码"},{default:()=>[e(ot,null,null)]}),e(U,{name:"token",title:"API Token"},{default:()=>[e(ut,null,null)]})]})])}}),ut=w(()=>{const t=v([]),r=()=>({name:"",expired:!1,expiredTime:new Date}),n=S(r()),c=async()=>{const{data:l}=await m.api.auth.token.get();t.value=l};ee(()=>{c()});const s=v(!1),o=async()=>{const l={name:n.name,expired:n.expired?n.expiredTime.toISOString():void 0},u=await m.api.auth.token.post({data:l});await navigator.clipboard.writeText(u.token),s.value=!1;const p=r();for(const y in p)n[y]=p[y];message.success(`生成成功，Token 已复制，${u.token}`),await c();const b=t.value.findIndex(y=>y.name===l.name);b!==-1&&(t.value[b].token=u.token)},a=async l=>{await m.api.auth.token.delete({params:{id:l}}),message.success("删除成功");const u=t.value.findIndex(p=>p.id===l);u!=-1&&t.value.splice(u,1)},i=D(j);return()=>e(Pe,{class:"!overflow-visible"},{default:()=>[e(xe,{transformOrigin:"center",show:s.value,onUpdateShow:l=>void(s.value=l)},{default:()=>[e(ke,{bordered:!1,title:"创建 Token",class:"max-w-full w-[500px]"},{default:()=>[e(C,null,{default:()=>[e(d,{label:"名称",required:!0},{default:()=>[e(g,{value:n.name,onInput:l=>void(n.name=l)},null)]}),e(d,{label:"是否过期"},{default:()=>[e(se,{value:n.expired,onUpdateValue:l=>void(n.expired=l)},null)]}),e(d,{label:"过期时间"},{default:()=>[e(Ue,{disabled:!n.expired,value:n.expiredTime,type:"datetime",onUpdateValue:l=>void(n.expiredTime=new Date(l))},null)]})]}),e(I,null,{default:()=>[e(h,{round:!0,onClick:()=>void(s.value=!1)},{default:()=>[f("取消")]}),e(h,{round:!0,type:"primary",onClick:o},{default:()=>[f("确定")]})]})]})]}),e(h,{class:"absolute right-0 top-[-3rem]",round:!0,type:"primary",onClick:()=>{s.value=!0}},{default:()=>[e(Se,null,{default:()=>[e(Ie,null,null)]}),e("span",{class:"ml-2"},[f("新增")])]}),e($e,{scrollX:Math.max(800,i.contentWidth.value-i.contentInsetWidth.value),remote:!0,bordered:!1,data:t.value,columns:[{key:"name",title:"名称"},{key:"token",title:"Token",render({token:l}){return l??"*".repeat(40)}},{title:"创建时间",key:"created",render({created:l}){return e(K,{time:l},null)}},{title:"过期时间",key:"expired",render({expired:l}){return Ce(l,"yyyy 年 M 月 d 日 HH:mm:ss")}},{title:"操作",key:"id",render({id:l,name:u}){return e(I,null,{default:()=>[e(B,{positiveText:"取消",negativeText:"删除",onNegativeClick:()=>{a(l)}},{trigger:()=>e(h,{text:!0,type:"error"},{default:()=>[f("删除")]}),default:()=>e("span",{class:"max-w-48"},[f('确定要删除 Token "'),u,f('"?')])})]})}}]},null)]})}),ot=w(()=>{const t=S({password:"",reenteredPassword:""}),r=v(),n=le(),c=async()=>{r.value&&r.value.validate(async o=>{o?console.log(o):(await m.api.master.patch({data:{password:t.password}}),message.success("更改成功"),ne(),n.push({name:Te.Login}))})};function s(o,a){return console.log(o),a===t.password}return()=>e(C,{class:"max-w-[300px]",ref:r,model:t,rules:{password:[{required:!0,message:"请输入密码"}],reenteredPassword:[{required:!0,message:"请再次输入密码",trigger:["input","blur"]},{validator:s,message:"两次密码输入不一致",trigger:["blur","password-input"]}]}},{default:()=>[e(d,{label:"新密码",required:!0,path:"password"},{default:()=>[e(g,M(W,{value:t.password,onInput:o=>void(t.password=o),type:"password"}),null)]}),e(d,{label:"重复密码",required:!0,path:"reenteredPassword"},{default:()=>[e(g,M(W,{value:t.reenteredPassword,onInput:o=>void(t.reenteredPassword=o),type:"password"}),null)]}),e("div",{class:"w-full text-right"},[e(h,{onClick:c,type:"primary",round:!0},{default:()=>[f("保存")]})])]})}),X={GitHub:"github",Weibo:"weibo",网易云:"netease",哔哩哔哩:"bilibili"},it="_avatar_7rrjr_3",Y={"tab-user":"_tab-user_7rrjr_1",avatar:it},ct=w(()=>{const t=v({});let r;async function n(){const a=await m.api.master.get();t.value=a,r={...a}}q(async()=>{await n()});const c=De(),s=x(()=>te(r,t.value)),o=async()=>{const a=ue(Ae(s));a.socialIds&&(a.socialIds=t.value.socialIds),await m.api.master.patch({data:a}),c.success("保存成功~"),await n()};return()=>e(N,null,[e(je,{cols:"1 400:1 600:2",class:Y["tab-user"],xGap:20,yGap:20},{default:()=>[e($,null,{default:()=>[e(C,{class:"flex flex-col justify-center items-center "},{default:()=>[e(d,null,{default:()=>[e("div",{class:Y.avatar},[e(He,{type:"avatar",onFinish:a=>{const{file:i,event:l}=a;try{const u=JSON.parse((l?.target).responseText);t.value.avatar=u.url}catch{}return i}},{default:()=>[e(ze,{class:"border-0 bg-transparent hover:border-0"},{default:()=>[e(Oe,{class:"flex",src:t.value.avatar,size:200},null)]})]})])]}),e(d,{label:"上次登录时间",class:"!mt-4"},{default:()=>[e("div",{class:"text-center w-full"},[e(T,null,{default:()=>[t.value.lastLoginTime?e(K,{time:t.value.lastLoginTime},null):"N/A"]})])]}),e(d,{label:"上次登录地址"},{default:()=>[e("div",{class:"text-center w-full"},[t.value.lastLoginIp?e(ae,{trigger:"hover",ip:t.value.lastLoginIp,triggerEl:e(T,{class:"cursor-pointer"},{default:()=>[t.value.lastLoginIp]})},null):"N/A"])]}),e(d,null,{default:()=>[e(h,{round:!0,class:"-mt-14",type:"primary",onClick:o,disabled:L(s.value)},{default:()=>[f("保存")]})]})]})]}),e($,null,{default:()=>[e(C,null,{default:()=>[e(d,{label:"主人名 (username)"},{default:()=>[e(g,{value:t.value.username,onInput:a=>{t.value.username=a?.trim()||""}},null)]}),e(d,{label:"主人昵称 (name)"},{default:()=>[e(g,{value:t.value.name,onInput:a=>{t.value.name=a?.trim()||""}},null)]}),e(d,{label:"主人邮箱 (mail)"},{default:()=>[e(g,{value:t.value.mail,onInput:a=>{t.value.mail=a}},null)]}),e(d,{label:"个人首页"},{default:()=>[e(g,{value:t.value.url,onInput:a=>{t.value.url=a}},null)]}),e(d,{label:"头像"},{default:()=>[e(g,{value:t.value.avatar,onInput:a=>{t.value.avatar=a}},null)]}),e(d,{label:"个人介绍"},{default:()=>[e(g,{type:"textarea",resizable:!1,value:t.value.introduce,onInput:a=>{t.value.introduce=a}},null)]}),e(d,{label:"社交平台 ID 录入"},{default:()=>[e(Re,{options:Object.keys(X).map(a=>({label:a,value:X[a]})),onChange:a=>{t.value.socialIds=a},value:t.value.socialIds||{}},null)]})]})]})]})])});var P=function(t){return t.User="user",t.System="system",t.Security="security",t}(P||{});const zt=w({setup(){const t=Fe(),r=le(),n=v(t.params.type);k(()=>t.params.type,s=>{s&&(n.value=s)});const c=v(null);return()=>e(Ee,{actionsElement:c.value},{default:()=>[e(Ge,{value:n.value,onUpdateValue:s=>{r.replace({...t,params:{...t.params,type:s}})}},{default:()=>[e(E,{tab:"用户",name:P.User},{default:()=>[e(ct,null,null)]}),e(E,{tab:"系统",name:P.System},{default:()=>[e(rt,null,null)]}),e(E,{tab:"安全",name:P.Security},{default:()=>[e(st,null,null)]})]})]})}});export{zt as default};
