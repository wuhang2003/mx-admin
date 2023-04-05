import{H as z}from"./rounded-button-e2e2c8ce.js";import{d as E,e as D,f as H,r as N,s as p,u as F,g as M,R as c,w as A,h as e,E as x,k as l,m as S,l as d,G as V,H as j,F as L,A as O,C as q,J as P,t as C,K as U,L as _}from"./index-f321115e.js";import{t as $}from"./index-b42791a0.js";import{N as G}from"./Tag-da0ff8cc.js";import{N as B}from"./FormItemRow-691bb13f.js";import{N as T}from"./DataTable-2b2a4ba1.js";import{N as J}from"./Popconfirm-193d4bfa.js";import{N as K}from"./Form-ebe5a6e4.js";import"./FormItem-ef02e652.js";import"./ChevronRight-51790b95.js";import"./Checkbox-3c15b74d.js";import"./Select-cd564923.js";import"./Pagination-1574f420.js";import"./prop-8b8caa29.js";import"./Forward-6c38d972.js";import"./Tooltip-70073f6f.js";function Q(u){return typeof u=="function"||Object.prototype.toString.call(u)==="[object Object]"&&!_(u)}const me=E(u=>{const a=D(H),m=N([]),n=p(!0),r=a.fetch,y=F();M(async()=>{n.value=!0,await r(),n.value=!1;const{data:s}=await c.api.categories.get({params:{type:"tag"}});m.push(...s)});const h=p(""),g=N([]);A(()=>h.value,async s=>{if(!s)return;const t=await c.api.categories(s).get({params:{tag:"true"}});g.length=0,g.push(...t.data)});const i=p(!1),b=()=>({name:"",slug:""}),v=p(b());return()=>{let s;return e(q,{actionsElement:e(L,null,[e(z,{variant:"success",icon:e(O,null,null),onClick:()=>{i.value=!0,v.value=b()}},null)])},{default:()=>[e(x,{prefix:"bar"},{default:()=>[l("分类")]}),e(I,{show:i,onSubmit:async t=>{const{name:o,slug:k}=t,w=typeof i.value=="string"?i.value:null;if(w){await c.api.categories(w).put({data:{name:o,slug:k,type:0}}),y.success("修改成功");const f=a.data.value.findIndex(R=>R.id==w);a.data.value[f]={...a.data.value[f],...t}}else{const f=await c.api.categories.post({data:{name:o,slug:k}});y.success("创建成功"),a.data.value.push(f.data)}},initialState:v.value},null),e(T,{rowClassName:()=>$,bordered:!1,data:a.data.value||[],remote:!0,loading:n.value,columns:[{title:"名称",key:"name"},{title:"数",key:"count"},{title:"路径",key:"slug",width:300},{width:300,title:"操作",fixed:"right",key:"id",render(t){return e(S,{size:12},{default:()=>[e(d,{size:"tiny",text:!0,type:"primary",onClick:o=>{v.value={name:t.name,slug:t.slug},i.value=t.id}},{default:()=>[l("编辑")]}),e(J,{positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await c.api.categories(t.id).delete(),y.success("删除成功"),await a.fetch(!0)}},{trigger:()=>e(d,{text:!0,type:"error",size:"tiny"},{default:()=>[l("移除")]}),default:()=>e("span",{class:"max-w-48"},[l("确定要删除 "),t.title,l(" ?")])})]})}}]},null),e(x,{prefix:"bar"},{default:()=>[l("标签")]}),e(S,{size:12},Q(s=m.map(t=>e(V,{value:t.count,key:t.name},{default:()=>[e(G,{class:"border-gray-200 border",round:!0,type:"success",checkable:!0,bordered:!0,checked:h.value==t.name,onUpdateChecked:o=>{o&&(h.value=t.name)}},{default:()=>[t.name]})]})))?s:{default:()=>[s]}),g.length!=0&&e(T,{remote:!0,class:"mt-4",data:g,columns:[{title:"标题",key:"title",render(t){return e(j,{to:`/posts/edit?id=${t.id}`},{default:()=>[e(d,{type:"primary",text:!0},{default:()=>[t.title]})]})}},{title:"分类",key:"category",render(t){return t.category.name}}]},null)]})}}),I=E(u=>{const a=N(u.initialState??{name:"",slug:""});A(()=>u.initialState,r=>{r&&(a.name=r.name,a.slug=r.slug)});const m=F(),n=()=>{if(!a.name||!a.slug){m.error("名字 和 路径 不能为空");return}u.onSubmit(a),u.show.value=!1};return()=>e(U,{transformOrigin:"center",show:!!u.show.value,onUpdateShow:r=>{u.show.value=r}},{default:()=>e(P,{style:"width: 500px;max-width: 90vw",headerStyle:{textAlign:"center"},title:u.initialState?"编辑":"新建"},{default:()=>[e(K,{onSubmit:n,model:a,rules:{name:{required:!0,trigger:["input","blur"]},slug:{required:!0,trigger:["input","blur"]}}},{default:()=>[e(B,{path:"name",label:"名字"},{default:()=>[e(C,{placeholder:"",onInput:r=>{a.name=r},value:a.name},null)]}),e(B,{path:"slug",label:"路径"},{default:()=>[e(C,{placeholder:"",onInput:r=>{a.slug=r},value:a.slug},null)]}),e("div",{class:"text-center"},[e(S,{size:12,align:"center",inline:!0},{default:()=>[e(d,{type:"success",onClick:n,round:!0},{default:()=>[l("确定")]}),e(d,{onClick:()=>u.show.value=!1,round:!0},{default:()=>[l("取消")]})]})])]})]})})});I.props=["initialState","onSubmit","show"];export{me as CategoryView};
