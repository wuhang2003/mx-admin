import{H}from"./rounded-button-b3c86bd2.js";import{R as g,d as S,s as m,h as e,l as v,I as T,k as x,K as F,J as C,an as k,ao as w,ap as q,F as N,g as O,A as P,L as U,aq as J,r as _,w as j,t as y,j as $,ar as W,v as G,b as K,C as Q}from"./index-c46c2349.js";import{u as X}from"./use-table-64b6ae27.js";import{I as Y,b as Z}from"./endpoint-c92b65ee.js";import{U as D}from"./index-ec833ee1.js";import{c as ee}from"./use-memo-fetch-data-list-98d75fbc.js";import{S as te}from"./Search24Regular-51dbf90c.js";import{N as ae}from"./Upload-eeb8d793.js";import{N as E}from"./Avatar-bac2c0e8.js";import{d as le,N as re}from"./Select-a5c7028c.js";import{N as A,a as M}from"./ListItem-3318263b.js";import{T as B}from"./Trash-ef7e919e.js";import{N as R}from"./Pagination-b98fc1f8.js";import{N as V}from"./Popconfirm-9cc2cdaf.js";import{N as ne}from"./Form-01351a1d.js";import{N as b}from"./FormItem-365dd298.js";import{N as ue}from"./ButtonGroup-ef48199b.js";import"./Add-dec0b425.js";import"./utils-279fecac.js";import"./Tooltip-20ee4571.js";import"./Tag-7255e277.js";import"./prop-8b8caa29.js";import"./Forward-cb67db5e.js";const z=a=>{if(!a)return"";const t=a.split(" ")[0];return t.length>4?a[0]:t},se=ee(a=>g.api.notes.get({params:{page:a,size:50,select:"nid title _id id"}}));function oe(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!U(a)}const ie=S({props:{id:{type:String,required:!0}},setup(a){const t=m(!1),r=m(null),i=m([]),d=m(),p=m(!0),f=async()=>{t.value=!0;const u=await g.api.topics(a.id).get();r.value=u,await l(u.id)},l=async(u,n=1,s=5)=>{p.value=!0;const{data:o,pagination:h}=await g.api.notes.topics(u).get({params:{page:n,size:s}});return p.value=!1,i.value=o,d.value=h,{data:o,pagination:h}},c=async u=>{await g.api.notes(u).patch({data:{topicId:null}}),message.success("已移除文章的专栏引用");const n=i.value.findIndex(s=>s.id===u);-~n&&i.value.splice(n,1)};return()=>{let u;return e(N,null,[e(v,{size:"small",secondary:!0,onClick:f},{default:()=>[e(T,{class:"mr-1"},{default:()=>[e(te,null,null)]}),x("详情")]}),e(F,{show:t.value,closable:!0,onClose:()=>{t.value=!1},closeOnEsc:!0,onUpdateShow:n=>{t.value=n}},{default:()=>[r.value?e(C,{closable:!0,role:"dialog",class:"modal-card md",title:`专栏 - ${r.value.name}`,onClose:()=>{t.value=!1}},{default:()=>[e(k,null,{avatar(){return e(D,{class:"p0",type:"icon",onFinish:n=>{const s=JSON.parse((n.event?.target).responseText);return n.file.url=s.url,r.value&&g.api.topics(r.value.id).patch({data:{icon:s.url}}).then(()=>{r.value&&(r.value.icon=s.url)}),n.file},onError:n=>{try{const s=JSON.parse((n.event?.target).responseText);message.warning(s.message)}catch{}return n.file}},{default:()=>[e(ae,null,{default:()=>[e(E,{size:60,class:"rounded-xl bg-transparent",src:r.value?.icon||void 0},{default:()=>[r.value?.icon?void 0:z(r.value?.name)]})]})]})},header(){return e("b",null,[r.value?.name])},"header-extra":function(){return e("span",{class:"opacity-80"},[r.value?.slug])},description(){return e("p",{class:"opacity-90 clamp-2 break-all"},[r.value?.introduce])},default(){return e("p",null,[r.value?.description])}}),p.value&&i.value.length==0?e(w,{animated:!0,class:"mt-2 h-[350px]"},null):e("div",{class:"mt-4"},[e("p",{class:"flex justify-between items-center"},[e("strong",null,[x("包含的文章：")]),e(ce,{topicId:r.value.id,onSuccess:()=>{q(()=>f())}},null)]),i.value.length===0&&e("div",{class:"h-[300px] flex items-center justify-center"},[e(le,{description:"这里还没有任何内容"},null)]),e(A,{bordered:!0,class:"mt-2"},oe(u=i.value.map(n=>e(M,{key:n.id},{default(){return e("p",{class:"space-x-2 flex items-center"},[e("span",null,[n.title]),e(Y,{path:Z(n.id)},null)])},suffix(){return e(V,{onPositiveClick:()=>c(n.id)},{trigger(){return e(v,{circle:!0,tertiary:!0,type:"error"},{default:()=>[e(T,null,{default:()=>[e(B,null,null)]})]})},default(){return`是否移除此话题「${r.value?.name}」？`}})}})))?u:{default:()=>[u]}),e("div",{class:"flex justify-end"},[d.value&&e(R,{class:"mt-4",onUpdatePage:n=>{l(a.id,n)},page:d.value.currentPage,pageCount:d.value.totalPage},null)])])]}):e(C,{class:"modal-card md",role:"dialog",title:"专栏信息获取中"},{default:()=>[e("div",{class:"flex relative gap-2 "},[e(w,{animated:!0,circle:!0,width:60},null),e("div",{class:"flex-grow"},[e(w,{animated:!0,text:!0,repeat:3,class:"flex-grow"},null)])]),e(w,{animated:!0,repeat:2,class:"mt-2",text:!0},null)]})]})])}}}),ce=S({props:{topicId:{type:String,required:!0},onSuccess:{type:Function,required:!1}},setup(a){const t=m(!1),r=async()=>{const u=J(l);await Promise.all(u.map(n=>g.api.notes(n).patch({data:{topicId:a.topicId}}))),message.success("添加成功"),t.value=!1,a.onSuccess?.(u)},{refresh:i,fetchNext:d,datalist:p,loading:f}=se(),l=m([]),c=u=>{const n=u.currentTarget;n.scrollTop+n.offsetHeight+10>=n.scrollHeight&&d()};return O(()=>{p.value.length===0&&d()}),()=>e(N,null,[e(v,{secondary:!0,type:"success",circle:!0,onClick:()=>{t.value=!0}},{default:()=>[e(T,null,{default:()=>[e(P,null,null)]})]}),e(F,{closable:!0,closeOnEsc:!0,show:t.value,onUpdateShow:u=>{t.value=u}},{default:()=>[e(C,{title:"哪些文章需要添加到专栏？",class:"modal-card sm"},{footer(){return e("div",{class:"text-right"},[e(v,{round:!0,type:"success",onClick:()=>r()},{default:()=>[x("添加！")]})])},default(){return e(re,{maxTagCount:3,filterable:!0,clearable:!0,loading:f.value,multiple:!0,onClear:()=>{i()},value:l.value,onUpdateValue:u=>{l.value=u},resetMenuOnOptionsChange:!1,options:p.value.map(u=>({label:u.title,value:u.id,key:u.id})),onScroll:c},null)}})]})])}}),de=S({props:{show:{type:Boolean,required:!0},onClose:{type:Function,required:!0},id:{type:String,required:!1},onSubmit:{type:Function,required:!1}},setup(a){const t=_({}),r=m(!1),i=()=>{Object.keys(t).forEach(l=>{delete t[l]})};j(()=>a.id,l=>{l?(r.value=!0,g.api.topics(l).get().then(c=>{Object.assign(t,c),r.value=!1})):i()});const d=()=>{a.onClose()},p=()=>{f?.value?.validate(async c=>{c?.length||await l()});async function l(){let c;a.id?(c=await g.api.topics(a.id).put({data:t}),message.success("修改成功")):(c=await g.api.topics.post({data:t}),message.success("添加成功")),a.onSubmit?.(c),q(()=>{i()})}},f=m();return()=>e(N,null,[e(F,{show:a.show,onUpdateShow:d,closable:!0,onClose:d,transformOrigin:"center"},{default:()=>[e(C,{role:"dialog",title:"新建话题",closable:!0,onClose:d,class:"modal-card sm"},{default:()=>[e(ne,{labelPlacement:"top",ref:f,model:t,disabled:r.value},{default:()=>[e(b,{label:"名字",required:!0,rule:{max:50,required:!0,trigger:["blur","input"]},path:"name"},{default:()=>[e(y,{value:t.name,onUpdateValue:l=>{t.name=l}},null)]}),e(b,{label:"id",required:!0,rule:{required:!0,trigger:["blur","input"]},path:"slug"},{default:()=>[e(y,{value:t.slug,onUpdateValue:l=>{t.slug=l}},null)]}),e(b,{label:"简介",required:!0,rule:{max:100,required:!0,trigger:["blur","input"]},path:"introduce"},{default:()=>[e(y,{value:t.introduce,onUpdateValue:l=>{t.introduce=l}},null)]}),e(b,{label:"图标"},{default:()=>[e(y,{value:t.icon,onUpdateValue:l=>{t.icon=l}},{suffix(){return e(D,{class:"flex items-center",type:"icon",onFinish:l=>{const c=JSON.parse((l.event?.target).responseText);return l.file.url=c.url,t.icon=l.file.url,l.file}},{default:()=>[e(v,{text:!0},{default:()=>[e($,null,{default:()=>[e(W,null,null)]})]})]})}})]}),e(b,{label:"长描述",rule:{max:500,trigger:["blur","input"]},path:"description"},{default:()=>[e(y,{type:"textarea",autosize:{maxRows:5,minRows:2},value:t.description,onUpdateValue:l=>{t.description=l}},null)]}),e("div",{class:"flex justify-end gap-2"},[e(v,{round:!0,type:"primary",onClick:p},{default:()=>[x("提交")]})])]})]})]})])}});function pe(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!U(a)}const Ae=S({setup(){const a=G(),t=K();j(()=>t.query.page,s=>{r(s?+s:0)});const{fetchDataFn:r,data:i,pager:d}=X((s,o)=>async(h=parseInt(t.query.page)||1,L=20)=>{const I=await g.api.topics.get({page:h,size:L});return o.value=I.pagination,s.value=I.data,I});O(()=>r());const p=m(""),f=m(!1),l=()=>{f.value=!0,p.value=""},c=()=>{f.value=!1,p.value=""};return{pagination:d,topics:i,fetchTopic:r,handleAddTopic:l,editTopicId:p,showTopicModal:f,handleCloseModal:c,handleSubmit(s){c();const o=i.value.findIndex(h=>h.id===s.id);-~o?i.value[o]=s:i.value.push(s)},handleDelete:async s=>{await g.api.topics(s).delete(),r()},handleEdit:s=>{p.value=s,f.value=!0},route:t,router:a}},render(){const{pagination:a,topics:t,router:r,route:i,editTopicId:d,showTopicModal:p,handleAddTopic:f,handleCloseModal:l,handleSubmit:c,handleEdit:u,handleDelete:n}=this;return e(Q,null,{actions(){return e(N,null,[e(H,{icon:e(P,null,null),onClick:f,variant:"success"},null)])},default(){let s;return e(N,null,[e(A,{bordered:!0,class:"mb-4"},pe(s=t.map(o=>e(M,{key:o.id},{prefix(){return e(E,{"data-src":o.icon,class:`mt-2 ${o.icon&&"!bg-transparent"}`,circle:!0,size:50,src:o.icon||void 0},{default:()=>[o.icon?void 0:z(o.name)]})},suffix(){return e(ue,null,{default:()=>[e(v,{round:!0,onClick:()=>u(o.id)},{default:()=>[x("编辑")]}),e(V,{onPositiveClick:()=>n(o.id)},{default(){return`确定删除「${o.name}」？`},trigger(){return e(v,{circle:!0,tertiary:!0,type:"error"},{default:()=>[e(T,null,{default:()=>[e(B,null,null)]})]})}})]})},default(){return e(k,{title:o.name,description:o.introduce,titleExtra:o.slug},{default(){return o.description},footer(){return e(ie,{id:o.id},null)}})}})))?s:{default:()=>[s]}),a&&e("div",{class:"flex justify-end"},[e(R,{page:a.currentPage,onUpdatePage:o=>{r.replace({query:{...i.query,page:o},params:{...i.params}})},pageCount:a.totalPage,pageSize:a.size,showQuickJumper:!0},null)]),e(de,{onClose:l,show:!!(p||d),id:d,onSubmit:c},null)])}})}});export{Ae as default};
