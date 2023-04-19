import{d as B,s as v,u as D,w as T,h as t,E as C,k as p,m as R,ah as U,l as y,av as V,C as $,z as H,R as M,dr as I}from"./index-c46c2349.js";import{l as O}from"./js-yaml-e14800c0.js";import{N as P}from"./Form-01351a1d.js";import{N as b}from"./FormItem-365dd298.js";import{N as Y}from"./Select-a5c7028c.js";import{b as _}from"./Upload-eeb8d793.js";import{N as z}from"./ButtonGroup-ef48199b.js";import{N}from"./Switch-33704fe4.js";import"./Tag-7255e277.js";import"./Add-dec0b425.js";import"./utils-279fecac.js";import"./Tooltip-20ee4571.js";class W{constructor(a){this.strList=a}parse(a){const l=a,u=/-{3,}\n(.*?)-{3,}\n*(.*)$/gms.exec(l);if(!u)return{text:l};const i=u.pop(),x=O(u[1]),s={},{categories:g,tags:w,date:m,updated:k,created:e,title:f}=x;return(m||e)&&(s.date=new Date(m||e).toISOString()),k&&(s.updated=new Date(k).toISOString()),s.categories=g,s.tags=w,s.title=f,Object.keys(s).forEach(o=>{typeof s[o]>"u"&&delete s[o]}),{meta:s,text:i}}start(){const a=this.strList,l=[];for(const u of a)l.push(this.parse(u));return l}}var F=function(r){return r.Post="post",r.Note="note",r}(F||{});const G=[{value:F.Post,label:"博文"},{label:"日记",value:F.Note}],se=B(()=>{const r=v(F.Post),a=v([]),l=v([]);function u(e){return new W(e).start().map((o,n)=>{const h=a.value[n].file.name.replace(/\.md$/,"");return o.meta?o.meta.slug=o.meta.slug??h:o.meta={title:h,slug:h},o.meta?.date||(o.meta.date=new Date().toISOString()),o})}const i=D();async function x(e){if(e?.preventDefault(),e?.stopPropagation(),!a.value.length)throw new ReferenceError("fileList is empty");const f=[];for await(const n of a.value){const d=await Promise.resolve(new Promise((h,E)=>{const c=n.file;if(!c){i.error("文件不存在"),E("File is empty");return}const L=c.name.split(".").pop();if(c.type&&c.type!=="text/markdown"||!["md","markdown"].includes(L)){i.error(`只能解析 markdown 文件，但是得到了 ${c.type}`),E(`File must be markdown. got type: ${c.type}, got ext: ${L}`);return}const A=new FileReader;A.onload=S=>{h(S.target?.result||"")},A.readAsText(c)}));console.log(d),f.push(d)}const o=u(f);i.success("解析完成，结果查看 console 哦"),l.value=o.map((n,d)=>({...n,filename:a.value[d].file?.name??""})),console.log(H(l))}async function s(e){if(e.stopPropagation(),e.preventDefault(),!l.value.length)return i.error("请先解析!!");await M.api.markdown.import.post({data:{type:r.value,data:l.value}}),i.success("上传成功！"),a.value=[]}const g=v(!0),w=v(!1),m=v(!1);async function k(){const e=await M.api.markdown.export.get({params:{slug:m.value,yaml:g.value,show_title:w.value},responseType:"blob"});I(e,"markdown.zip")}return T(()=>a.value,e=>{e.length==0?l.value=[]:x()}),()=>t($,null,{default:()=>[t(C,null,{default:()=>[p("从 MarkDown 导入数据")]}),t(P,{labelAlign:"right",labelPlacement:"left",labelWidth:150,class:"max-w-[300px]"},{default:()=>[t(b,{label:"导入到:"},{default:()=>[t(Y,{options:G,value:r.value,onUpdateValue:e=>void(r.value=e)},null)]}),t(b,{label:"准备好了吗."},{default:()=>[t(R,{vertical:!0},{default:()=>[t(_,{multiple:!0,accept:".md,.markdown",onChange:U(e=>{a.value=e.fileList},250),onRemove:e=>{const o=e.file.name,n=l.value.findIndex(d=>d.filename===o);n!=-1&&l.value.splice(n,1)}},{default:()=>[t(z,null,{default:()=>[t(y,{round:!0},{default:()=>[p("先上传")]}),t(y,{onClick:x,disabled:!a.value.length},{default:()=>[p("再解析")]}),t(y,{onClick:s,round:!0,disabled:!l.value.length},{default:()=>[p("最后导入")]})]})]}),t(V,{depth:2,class:"!text-sm"},{default:()=>[p("只能上传 markdown 文件")]})]})]})]}),t(C,null,{default:()=>[p("导出数据到 Markdown (Hexo YAML Format)")]}),t(P,{labelAlign:"right",labelPlacement:"left",labelWidth:180,class:"max-w-[400px]"},{default:()=>[t(b,{label:"是否包括 yaml header"},{default:()=>[t(N,{value:g.value,onUpdateValue:e=>void(g.value=e)},null)]}),t(b,{label:"是否在第一行显示文章标题"},{default:()=>[t(N,{value:w.value,onUpdateValue:e=>void(w.value=e)},null)]}),t(b,{label:"根据 slug 生成文件名"},{default:()=>[t(N,{value:m.value,onUpdateValue:e=>void(m.value=e)},null)]}),t("div",{class:"text-right w-full"},[t(y,{type:"primary",onClick:k},{default:()=>[p("导出")]})])]})]})});export{se as default};
