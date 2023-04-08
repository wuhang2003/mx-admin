import{H as P}from"./rounded-button-584e5982.js";import{d as S,s as v,bM as J,h as e,L as K,t as F,l as h,k as s,N as Q,b as W,v as X,u as Y,w as V,al as Z,y as ee,D as ae,G as A,av as D,m as q,F as E,R as f,K as te,J as le,A as ue,bN as ne,C as re,z as se}from"./index-8cac42f8.js";import{T as ie}from"./index-5485a9c8.js";import{R as oe}from"./relative-time-faf1427d.js";import{u as de}from"./use-table-b5c3009a.js";import{o as ce}from"./omit-0f6747e6.js";import{N as I}from"./Avatar-8a5e428e.js";import{L as i,a as T}from"./index-33f0dfbe.js";import{N as y}from"./FormItem-e1946b6e.js";import{N as j}from"./Select-22e54f09.js";import{N as _}from"./Form-692cd73a.js";import{N as ve,a as C}from"./Tabs-177e2032.js";import{N as pe}from"./Popconfirm-c6f76c39.js";import"./DataTable-6b898d98.js";import"./ChevronRight-2e67c6cc.js";import"./Checkbox-a04b515f.js";import"./Pagination-70ead485.js";import"./prop-8b8caa29.js";import"./Forward-b4c5fa78.js";import"./Tooltip-4e3cf23b.js";import"./_baseClone-db44f97a.js";import"./last-862de5a8.js";import"./utils-34918e98.js";import"./Tag-bd6b4a7c.js";import"./Add-ffd30e78.js";import"./throttle-c9c08629.js";const U={Audit:"待审核",Pass:"通过",Outdate:"过时",Banned:"屏蔽",Reject:"拒绝"},z="https://fastly.jsdelivr.net/gh/mx-space/mx-admin@gh-pages/assets/fallback-2a34c29a.jpg";function L(l){return typeof l=="function"||Object.prototype.toString.call(l)==="[object Object]"&&!K(l)}const $=S(l=>{const p=v(),c=v(!1),r=J(p,o=>{o[0].isIntersecting&&(c.value=!0,r.stop())});return()=>{let o,n;return e("div",{ref:p},[l.avatar?c.value?e(I,{src:l.avatar,round:!0,onError:x=>{console.log(z),x.target.src=z}},null):e(I,{round:!0},L(o=l.name.charAt(0))?o:{default:()=>[o]}):e(I,{round:!0},L(n=l.name.charAt(0))?n:{default:()=>[n]})])}});$.props=["avatar","name"];const me=S({props:{onCallback:{type:Function,required:!0}},setup(l){const p=v(""),c=v(i.Pass),r=Object.entries(U).filter(([n])=>n!=="Audit").map(([n,x])=>({value:i[n],key:n,label:x})),o=()=>{l.onCallback(c.value,p.value)};return()=>e(_,{class:"mt-6"},{default:()=>[e(y,{label:"状态"},{default:()=>[e(j,{value:c.value,onUpdateValue:n=>c.value=n,options:r},null)]}),e(y,{label:"原因"},{default:()=>[e(F,{type:"textarea",value:p.value,onUpdateValue:n=>p.value=n,placeholder:"请输入原因",maxlength:200,autosize:{maxRows:4,minRows:2}},null)]}),e("div",{class:"flex justify-end"},[e(h,{round:!0,type:"primary",onClick:o},{default:()=>[s("发送")]})])]})}}),fe=S({props:{url:String,errorMessage:String,status:[String,Number]},setup(l){return()=>e("div",{class:"flex space-x-2 items-center"},[e("a",{target:"_blank",href:l.url,rel:"noreferrer"},[l.url]),typeof l.status<"u"&&(l.errorMessage?e(Q,null,{trigger(){return e("div",{class:"h-2 w-2 bg-red-400 rounded-full"},null)},default(){return l.errorMessage}}):e("div",{class:"h-2 w-2 bg-green-300 rounded-full"},null))])}}),_e=S({setup(){const l=W(),p=X(),c=v(l.query.state??i.Pass),{data:r,fetchDataFn:o,pager:n,loading:x}=de((a,u)=>async(d=l.query.page||1,g=50)=>{const N=l.query.state??i.Pass,O=await f.api.links.get({params:{page:d,size:g,state:N|0}});a.value=O.data,u.value=O.pagination}),b=Y(),w=()=>({avatar:"",name:"",type:T.Friend,url:"",id:null,description:"",state:i.Pass}),k=v(!1),t=v(w());V(()=>l.query.state,async a=>{await o()}),V(()=>l.query.page,async a=>{await o()},{immediate:!0});const m=v({}),B=async()=>{const a=await f.api.links.state.get();m.value=a};Z(()=>{B()});const H=async()=>{const a=t.value.id;if(a){const u=await f.api.links(a).put({data:ce(t.value,["id","created","hide"])}),d=r.value.findIndex(g=>g.id==a);u.state!=c.value?(r.value.splice(d,1),B()):r.value[d]={...r.value[d],...se(t.value)}}else{const{data:u}=await f.api.links.post({data:{...t.value}});r.value.unshift(u)}b.success("操作成功"),k.value=!1,t.value=w()},R=v(),G=async()=>{const a=b.loading("检查中",{duration:2e5});try{const u=await f.api.links.health.get({timeout:2e5});R.value=Object.entries(u).reduce((d,[g,N])=>({...d,[g.toLowerCase()]:N}),{}),b.success("检查完成")}catch(u){console.error(u)}finally{requestAnimationFrame(()=>{a.destroy()})}},M=ee();return()=>e(re,{actionsElement:e(E,null,[e(P,{icon:e(ue,null,null),variant:"primary",onClick:()=>{t.value=w(),k.value=!0}},null),e(P,{icon:e(ne,null,null),variant:"info",onClick:G,name:"检查友链可用性"},null)])},{default:()=>[e(ve,{class:"min-h-[30px]",size:"medium",value:c.value,onUpdateValue:a=>{c.value=a,p.replace({name:ae.Friend,query:{state:a}})}},{default:()=>[e(C,{name:i.Pass,tab:"朋友们"},null),e(C,{name:i.Audit,tab:()=>e(A,{value:m.value.audit,processing:!0},{default:()=>[e(D,null,{default:()=>[s("待审核")]})]})},null),e(C,{name:i.Outdate,tab:()=>e(A,{value:m.value.outdate,type:"info"},{default:()=>[e(D,null,{default:()=>[s("过时的")]})]})},null),e(C,{name:i.Reject,tab:()=>e(A,{value:m.value.reject,type:"warning"},{default:()=>[e(D,null,{default:()=>[s("已拒绝")]})]})},null),e(C,{name:i.Banned,tab:()=>e(A,{value:m.value.banned,type:"error"},{default:()=>[e(D,null,{default:()=>[s("封禁的")]})]})},null)]}),e(ie,{loading:x.value,data:r,nTableProps:{maxHeight:"calc(100vh - 22rem)"},columns:[{title:"头像",key:"avatar",width:80,render(a){return e($,{name:a.name,avatar:a.avatar},null)}},{title:"名称",key:"name",render(a){return e("a",{target:"_blank",href:a.url,rel:"noreferrer"},[a.name])}},{title:"描述",key:"description",width:250,ellipsis:{lineClamp:2,tooltip:!0}},{title:"网址",key:"url",render(a){const u=R.value?.[a.id];return e(fe,{url:a.url,errorMessage:u?.message,status:u?.status},null)}},{title:"类型",key:"type",width:80,render(a){return["朋友","收藏"][a.type|0]}},{title:"对方邮箱",key:"email",render(a){return e("a",{href:`mailto:${a.email}`},[a.email])}},{title:"结识时间",key:"created",width:80,render(a){return e(oe,{time:a.created},null)}},{width:150,title:"操作",fixed:"right",key:"action",render(a){return e(q,{wrap:!1},{default:()=>[a.state==i.Audit&&e(E,null,[e(h,{text:!0,size:"tiny",type:"success",onClick:async()=>{await f.api.links.audit(a.id).patch(),b.success(`通过了来自${a.name}的友链邀请`);const u=r.value.findIndex(d=>d.id==a.id);r.value.splice(u,1),m.value.audit--}},{default:()=>[s("通过")]}),e(h,{text:!0,size:"tiny",type:"info",onClick:async()=>{M.create({title:"发送友链结果",closeOnEsc:!0,closable:!0,content:()=>e(me,{onCallback:async(u,d)=>{await f.api.links.audit.reason(a.id).post({data:{state:u,reason:d}}),b.success(`已发送友链结果给「${a.name}」`);const g=r.value.findIndex(N=>N.id==a.id);r.value.splice(g,1),m.value.audit--,M.destroyAll()}},null)})}},{default:()=>[s("理由")]})]),e(h,{text:!0,size:"tiny",type:"info",onClick:u=>{k.value=!0,t.value={...a}}},{default:()=>[s("编辑")]}),e(pe,{positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await f.api.links(a.id).delete(),b.success("删除成功"),await o(n.value.currentPage),a.state==i.Audit&&m.value.audit--}},{trigger:()=>e(h,{text:!0,type:"error",size:"tiny"},{default:()=>[s("移除")]}),default:()=>e("span",{class:"max-w-48"},[s("确定要删除友链 "),a.name,s(" ?")])})]})}}],onFetchData:o,pager:n},null),e(te,{transformOrigin:"center",show:k.value,onUpdateShow:a=>void(k.value=a)},{default:()=>[e(le,{style:"width: 500px;max-width: 90vw",headerStyle:{textAlign:"center"},title:t.value.id?`编辑: ${t.value.name}`:"新增"},{default:()=>[e(_,null,{default:()=>[e(y,{label:"名字",required:!0},{default:()=>[e(F,{autofocus:!0,value:t.value.name,onInput:a=>void(t.value.name=a)},null)]}),e(y,{label:"头像"},{default:()=>[e(F,{autofocus:!0,value:t.value.avatar,onInput:a=>void(t.value.avatar=a)},null)]}),e(y,{label:"网址",required:!0},{default:()=>[e(F,{autofocus:!0,value:t.value.url,onInput:a=>void(t.value.url=a)},null)]}),e(y,{label:"描述"},{default:()=>[e(F,{autofocus:!0,value:t.value.description,onInput:a=>void(t.value.description=a)},null)]}),e(y,{label:"类型"},{default:()=>[e(j,{placeholder:"选择类型",options:[{label:"朋友",value:T.Friend},{label:"收藏",value:T.Collection}],value:t.value.type,onUpdateValue:a=>void(t.value.type=a|0)},null)]}),t.value.id&&e(y,{label:"状态"},{default:()=>[e(j,{placeholder:"选择状态",options:Object.entries(U).map(([a,u])=>({label:u,value:i[a]})),value:t.value.state,onUpdateValue:a=>void(t.value.state=a|0)},null)]})]}),e("div",{class:"text-right"},[e(q,{size:12,align:"center",inline:!0},{default:()=>[e(h,{type:"success",onClick:H,round:!0},{default:()=>[s("确定")]}),e(h,{onClick:()=>{k.value=!1,t.value=w()},round:!0},{default:()=>[s("取消")]})]})])]})]})]})}});export{_e as default};
