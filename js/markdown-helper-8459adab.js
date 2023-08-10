import{d as B,s as v,u as D,w as T,h as t,E as L,k as c,m as R,ai as U,l as x,aw as V,C as $,z as H,R as M,dz as I}from"./index-78dcda3c.js";import{l as O}from"./js-yaml-e14800c0.js";import{N as P}from"./Form-1c458c6f.js";import{N as F}from"./FormItem-5e66ef71.js";import{N as Y}from"./Select-156dc683.js";import{a as z}from"./Upload-423c0e45.js";import{N as _}from"./ButtonGroup-b31b93e5.js";import{N as y}from"./Switch-0301ac71.js";import"./Tag-bcb6f697.js";import"./Add-bccda1b1.js";import"./Image-4f5001c5.js";import"./utils-21998ac5.js";import"./Tooltip-fe6a3cad.js";class W{constructor(a){this.strList=a}parse(a){const l=a,r=/-{3,}\r?\n(.*?)-{3,}\r?\n*(.*)$/gms.exec(l);if(!r)return{text:l};const i=r.pop(),E=O(r[1]),o={},{categories:g,tags:w,date:m,updated:b,created:e,title:f}=E;return(m||e)&&(o.date=new Date(m||e).toISOString()),b&&(o.updated=new Date(b).toISOString()),o.categories=g,o.tags=w,o.title=f,Object.keys(o).forEach(u=>{typeof o[u]>"u"&&delete o[u]}),{meta:o,text:i}}start(){const a=this.strList,l=[];for(const r of a)l.push(this.parse(r));return l}}var k=function(n){return n.Post="post",n.Note="note",n}(k||{});const G=[{value:k.Post,label:"博文"},{label:"日记",value:k.Note}],se=B(()=>{const n=v(k.Post),a=v([]),l=v([]);function r(e){return new W(e).start().map((u,s)=>{const h=a.value[s].file.name.replace(/\.md$/,"");return u.meta?u.meta.slug=u.meta.slug??h:u.meta={title:h,slug:h},u.meta?.date||(u.meta.date=new Date().toISOString()),u})}const i=D();async function E(e){if(e?.preventDefault(),e?.stopPropagation(),!a.value.length)throw new ReferenceError("fileList is empty");const f=[];for await(const s of a.value){const d=await Promise.resolve(new Promise((h,N)=>{const p=s.file;if(!p){i.error("文件不存在"),N("File is empty");return}const C=p.name.split(".").pop();if(p.type&&p.type!=="text/markdown"||!["md","markdown"].includes(C)){i.error(`只能解析 markdown 文件，但是得到了 ${p.type}`),N(`File must be markdown. got type: ${p.type}, got ext: ${C}`);return}const A=new FileReader;A.onload=S=>{h(S.target?.result||"")},A.readAsText(p)}));console.log(d),f.push(d)}const u=r(f);i.success("解析完成，结果查看 console 哦"),l.value=u.map((s,d)=>({...s,filename:a.value[d].file?.name??""})),console.log(H(l))}async function o(e){if(e.stopPropagation(),e.preventDefault(),!l.value.length)return i.error("请先解析!!");await M.api.markdown.import.post({data:{type:n.value,data:l.value}}),i.success("上传成功！"),a.value=[]}const g=v(!0),w=v(!1),m=v(!1);async function b(){const e=await M.api.markdown.export.get({params:{slug:m.value,yaml:g.value,show_title:w.value},responseType:"blob"});I(e,"markdown.zip")}return T(()=>a.value,e=>{e.length==0?l.value=[]:E()}),()=>t($,null,{default:()=>[t(L,null,{default:()=>[c("从 Markdown 导入数据")]}),t(P,{labelAlign:"right",labelPlacement:"left",labelWidth:150,class:"max-w-[300px]"},{default:()=>[t(F,{label:"导入到:"},{default:()=>[t(Y,{options:G,value:n.value,onUpdateValue:e=>void(n.value=e)},null)]}),t(F,{label:"准备好了吗."},{default:()=>[t(R,{vertical:!0},{default:()=>[t(z,{multiple:!0,accept:".md,.markdown",onChange:U(e=>{a.value=e.fileList},250),onRemove:e=>{const u=e.file.name,s=l.value.findIndex(d=>d.filename===u);s!=-1&&l.value.splice(s,1)}},{default:()=>[t(_,null,{default:()=>[t(x,{round:!0},{default:()=>[c("先上传")]}),t(x,{onClick:E,disabled:!a.value.length},{default:()=>[c("再解析")]}),t(x,{onClick:o,round:!0,disabled:!l.value.length},{default:()=>[c("最后导入")]})]})]}),t(V,{depth:2,class:"!text-sm"},{default:()=>[c("只能上传 markdown 文件")]})]})]})]}),t(L,null,{default:()=>[c("导出数据到 Markdown (Hexo YAML Format)")]}),t(P,{labelAlign:"right",labelPlacement:"left",labelWidth:180,class:"max-w-[400px]"},{default:()=>[t(F,{label:"是否包括 yaml header"},{default:()=>[t(y,{value:g.value,onUpdateValue:e=>void(g.value=e)},null)]}),t(F,{label:"是否在第一行显示文章标题"},{default:()=>[t(y,{value:w.value,onUpdateValue:e=>void(w.value=e)},null)]}),t(F,{label:"根据 slug 生成文件名"},{default:()=>[t(y,{value:m.value,onUpdateValue:e=>void(m.value=e)},null)]}),t("div",{class:"text-right w-full"},[t(x,{type:"primary",onClick:b},{default:()=>[c("导出")]})])]})]})});export{se as default};
