import{H as A}from"./rounded-button-b9dcbed0.js";import{q as F,x as c,aj as D,J as j,K as q,g as M}from"./app-976c8860.js";import{t as O}from"./index-019f837c.js";import{i as V,m as x,k as H,N as C}from"./use-store-ref-4b184b85.js";import{u as U}from"./category-9804c8d8.js";import{N as L}from"./Tag-0091d0ba.js";import{N as B}from"./FormItemRow-edb51d02.js";import{k as E,B as w,y as g,R as P,at as I,U as e,br as i,aO as m,F as _,bq as $}from"./Button-b701b7aa.js";import{a as T}from"./DataTable-fbbadfbc.js";import{a as N}from"./Spin-6ba2d125.js";import{N as J}from"./Popconfirm-ef910421.js";import{b as K}from"./Card-6ffecc90.js";import{N as G}from"./Form-1e2d1f39.js";import"./preload-helper-f651ca80.js";import"./_common-991711fd.js";import"./FormItem-339a3c72.js";import"./context-079b71da.js";import"./light-b0b9390b.js";import"./ChevronRight-0f5b6e50.js";import"./Checkbox-68906a54.js";import"./light-8f5c5466.js";import"./light-8b77b0de.js";import"./light-8efb1dbb.js";import"./light-a088cd9f.js";import"./light-a589b0af.js";import"./Select-a2a95bdb.js";import"./Pagination-6e2c7787.js";import"./Forward-3a0b079d.js";import"./prop-8b8caa29.js";import"./Tooltip-b62453d8.js";import"./light-630c8175.js";function Q(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!$(r)}const Te=E(r=>{const a=V(U),d=w([]),s=g(!0),o=a.fetch,y=F();P(async()=>{s.value=!0,await o(),s.value=!1;const{data:u}=await c.api.categories.get({params:{type:"tag"}});d.push(...u)});const h=g(""),p=w([]);I(()=>h.value,async u=>{if(!u)return;const t=await c.api.categories(u).get({params:{tag:"true"}});p.length=0,p.push(...t.data)});const l=g(!1),S=()=>({name:"",slug:""}),v=g(S());return()=>{let u;return e(q,{actionsElement:e(_,null,[e(A,{variant:"success",icon:e(j,null,null),onClick:()=>{l.value=!0,v.value=S()}},null)])},{default:()=>[e(x,{prefix:"bar"},{default:()=>[i("分类")]}),e(R,{show:l,onSubmit:async t=>{const{name:n,slug:k}=t,b=typeof l.value=="string"?l.value:null;if(b){await c.api.categories(b).put({data:{name:n,slug:k,type:0}}),y.success("修改成功");const f=a.data.value.findIndex(z=>z.id==b);a.data.value[f]={...a.data.value[f],...t}}else{const f=await c.api.categories.post({data:{name:n,slug:k}});y.success("创建成功"),a.data.value.push(f.data)}},initialState:v.value},null),e(T,{rowClassName:()=>O,bordered:!1,data:a.data.value||[],remote:!0,loading:s.value,columns:[{title:"名称",key:"name"},{title:"数",key:"count"},{title:"路径",key:"slug",width:300},{width:300,title:"操作",fixed:"right",key:"id",render(t){return e(N,{size:12},{default:()=>[e(m,{size:"tiny",text:!0,type:"primary",onClick:n=>{v.value={name:t.name,slug:t.slug},l.value=t.id}},{default:()=>[i("编辑")]}),e(J,{positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await c.api.categories(t.id).delete(),y.success("删除成功"),await a.fetch(!0)}},{trigger:()=>e(m,{text:!0,type:"error",size:"tiny"},{default:()=>[i("移除")]}),default:()=>e("span",{class:"max-w-48"},[i("确定要删除 "),t.title,i(" ?")])})]})}}]},null),e(x,{prefix:"bar"},{default:()=>[i("标签")]}),e(N,{size:12},Q(u=d.map(t=>e(D,{value:t.count,key:t.name},{default:()=>[e(L,{class:"border-gray-200 border",round:!0,type:"success",checkable:!0,bordered:!0,checked:h.value==t.name,onUpdateChecked:n=>{n&&(h.value=t.name)}},{default:()=>[t.name]})]})))?u:{default:()=>[u]}),p.length!=0&&e(T,{remote:!0,class:"mt-4",data:p,columns:[{title:"标题",key:"title",render(t){return e(H,{to:`/posts/edit?id=${t.id}`},{default:()=>[e(m,{type:"primary",text:!0},{default:()=>[t.title]})]})}},{title:"分类",key:"category",render(t){return t.category.name}}]},null)]})}}),R=E(r=>{const a=w(r.initialState??{name:"",slug:""});I(()=>r.initialState,o=>{o&&(a.name=o.name,a.slug=o.slug)});const d=F(),s=()=>{if(!a.name||!a.slug){d.error("名字 和 路径 不能为空");return}r.onSubmit(a),r.show.value=!1};return()=>e(M,{transformOrigin:"center",show:!!r.show.value,onUpdateShow:o=>{r.show.value=o}},{default:()=>e(K,{style:"width: 500px;max-width: 90vw",headerStyle:{textAlign:"center"},title:r.initialState?"编辑":"新建"},{default:()=>[e(G,{onSubmit:s,model:a,rules:{name:{required:!0,trigger:["input","blur"]},slug:{required:!0,trigger:["input","blur"]}}},{default:()=>[e(B,{path:"name",label:"名字"},{default:()=>[e(C,{placeholder:"",onInput:o=>{a.name=o},value:a.name},null)]}),e(B,{path:"slug",label:"路径"},{default:()=>[e(C,{placeholder:"",onInput:o=>{a.slug=o},value:a.slug},null)]}),e("div",{class:"text-center"},[e(N,{size:12,align:"center",inline:!0},{default:()=>[e(m,{type:"success",onClick:s,round:!0},{default:()=>[i("确定")]}),e(m,{onClick:()=>r.show.value=!1,round:!0},{default:()=>[i("取消")]})]})])]})]})})});R.props=["initialState","onSubmit","show"];export{Te as CategoryView};
