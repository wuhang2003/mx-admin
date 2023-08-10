import{H as R}from"./rounded-button-ab449e11.js";import{d as E,e as z,f as H,r as S,s as p,u as T,g as M,R as c,w as D,h as e,E as x,k as l,m as b,l as d,G as V,H as j,F as L,A as O,C as q,J as P,t as C,K as U,L as _}from"./index-67dc47c7.js";import{t as $}from"./index-d44d6bd3.js";import{N as G}from"./Tag-e50b6029.js";import{N as B}from"./FormItemRow-873fe155.js";import{N as F}from"./DataTable-a5125cd5.js";import{N as J}from"./Popconfirm-e1dd47fe.js";import{a as K}from"./FormItem-7254f57c.js";import"./ChevronRight-665fac08.js";import"./Checkbox-d809c0e5.js";import"./Select-2c33f597.js";import"./Pagination-42d721de.js";import"./prop-8b8caa29.js";import"./Forward-6b4d3991.js";import"./Ellipsis-7681cd3c.js";import"./Tooltip-6382741e.js";function Q(u){return typeof u=="function"||Object.prototype.toString.call(u)==="[object Object]"&&!_(u)}const me=E(u=>{const a=z(H),m=S([]),n=p(!0),r=a.fetch,y=T();M(async()=>{n.value=!0,await r(),n.value=!1;const{data:s}=await c.api.categories.get({params:{type:"tag"}});m.push(...s)});const h=p(""),g=S([]);D(()=>h.value,async s=>{if(!s)return;const t=await c.api.categories(s).get({params:{tag:"true"}});g.length=0,g.push(...t.data)});const i=p(!1),N=()=>({name:"",slug:""}),v=p(N());return()=>{let s;return e(q,{actionsElement:e(L,null,[e(R,{variant:"success",icon:e(O,null,null),onClick:()=>{i.value=!0,v.value=N()}},null)])},{default:()=>[e(x,{prefix:"bar"},{default:()=>[l("分类")]}),e(A,{show:i,onSubmit:async t=>{const{name:o,slug:k}=t,w=typeof i.value=="string"?i.value:null;if(w){await c.api.categories(w).put({data:{name:o,slug:k,type:0}}),y.success("修改成功");const f=a.data.value.findIndex(I=>I.id==w);a.data.value[f]={...a.data.value[f],...t}}else{const f=await c.api.categories.post({data:{name:o,slug:k}});y.success("创建成功"),a.data.value.push(f.data)}},initialState:v.value},null),e(F,{rowClassName:()=>$,bordered:!1,data:a.data.value||[],remote:!0,loading:n.value,columns:[{title:"名称",key:"name"},{title:"数",key:"count"},{title:"路径",key:"slug",width:300},{width:300,title:"操作",fixed:"right",key:"id",render(t){return e(b,{size:12},{default:()=>[e(d,{size:"tiny",text:!0,type:"primary",onClick:o=>{v.value={name:t.name,slug:t.slug},i.value=t.id}},{default:()=>[l("编辑")]}),e(J,{positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await c.api.categories(t.id).delete(),y.success("删除成功"),await a.fetch(!0)}},{trigger:()=>e(d,{text:!0,type:"error",size:"tiny"},{default:()=>[l("移除")]}),default:()=>e("span",{class:"max-w-48"},[l("确定要删除 "),t.title,l(" ?")])})]})}}]},null),e(x,{prefix:"bar"},{default:()=>[l("标签")]}),e(b,{size:12},Q(s=m.map(t=>e(V,{value:t.count,key:t.name},{default:()=>[e(G,{class:"border-gray-200 border",round:!0,type:"success",checkable:!0,bordered:!0,checked:h.value==t.name,onUpdateChecked:o=>{o&&(h.value=t.name)}},{default:()=>[t.name]})]})))?s:{default:()=>[s]}),g.length!=0&&e(F,{remote:!0,class:"mt-4",data:g,columns:[{title:"标题",key:"title",render(t){return e(j,{to:`/posts/edit?id=${t.id}`},{default:()=>[e(d,{type:"primary",text:!0},{default:()=>[t.title]})]})}},{title:"分类",key:"category",render(t){return t.category.name}}]},null)]})}}),A=E(u=>{const a=S(u.initialState??{name:"",slug:""});D(()=>u.initialState,r=>{r&&(a.name=r.name,a.slug=r.slug)});const m=T(),n=()=>{if(!a.name||!a.slug){m.error("名字 和 路径 不能为空");return}u.onSubmit(a),u.show.value=!1};return()=>e(U,{transformOrigin:"center",show:!!u.show.value,onUpdateShow:r=>{u.show.value=r}},{default:()=>e(P,{style:"width: 500px;max-width: 90vw",headerStyle:{textAlign:"center"},title:u.initialState?"编辑":"新建"},{default:()=>[e(K,{onSubmit:n,model:a,rules:{name:{required:!0,trigger:["input","blur"]},slug:{required:!0,trigger:["input","blur"]}}},{default:()=>[e(B,{path:"name",label:"名字"},{default:()=>[e(C,{placeholder:"",onInput:r=>{a.name=r},value:a.name},null)]}),e(B,{path:"slug",label:"路径"},{default:()=>[e(C,{placeholder:"",onInput:r=>{a.slug=r},value:a.slug},null)]}),e("div",{class:"text-center"},[e(b,{size:12,align:"center",inline:!0},{default:()=>[e(d,{type:"success",onClick:n,round:!0},{default:()=>[l("确定")]}),e(d,{onClick:()=>u.show.value=!1,round:!0},{default:()=>[l("取消")]})]})])]})]})})});A.props=["initialState","onSubmit","show"];export{me as CategoryView};
