import{d as f,s as r,g as x,h as e,K as b,J as N,bK as y,k as c,l as p,R as m,F as k,eh as T,x as C,b as L,i as S,v as M,C as R}from"./index-67dc47c7.js";import{X as w}from"./index-0b3587c8.js";import{N as U,a as B}from"./ListItem-f36a2db5.js";import{N as D}from"./Select-2c33f597.js";import{c as i,b as v}from"./index-df55f4cf.js";import{E as h}from"./types-a9f3cfbf.js";import{u as E}from"./use-lifecycle-ae620b1e.js";import{N as F,a as g}from"./Tabs-2cbfb825.js";import"./Tag-e50b6029.js";import"./Add-d0a1d613.js";import"./throttle-ccee9fda.js";const V=f({setup(){const s=r([]),l=r(!1),u=async()=>{l.value=!0;const{data:t}=await m.api.health.log.list(a.value).get();s.value=t,l.value=!1};x(()=>{u()});const n=r(""),o=r(!1),a=r("native");return()=>e(k,null,[e(b,{transformOrigin:"center",show:o.value,onUpdateShow:t=>void(o.value=t)},{default:()=>[e(N,{title:"查看日志",class:"modal-card !w-[100rem] !bg-dark-400 !text-white !all:text-white ",bordered:!1,closable:!0,onClose:()=>{o.value=!1}},{default:()=>[e(O,{data:n.value},null)]})]}),e(y,{show:l.value},{default:()=>[e(U,{class:"min-h-[300px] bg-transparent"},{header(){return e(D,{class:"ml-auto w-32",value:a.value,onUpdateValue:t=>{a.value=t,u()},options:[{label:"PM2",value:"pm2"},{label:"系统记录",value:"native"}]},null)},default(){return s.value.map(t=>e(B,{key:t.filename},{default(){return e("div",{class:"flex flex-col"},[e("span",null,[t.filename]),e("span",{class:"text-gray-400 dark:text-gray-600 text-sm grid grid-cols-[5rem,auto]"},[e("span",null,[t.size]),e("span",null,[c("类型："),t.type])])])},suffix(){return e("div",{class:"flex space-x-2"},[e(p,{ghost:!0,type:"success",onClick:()=>{m.api.health.log(a.value).get({params:{filename:t.filename}}).then(d=>{n.value=d,o.value=!0})}},{default:()=>[c("查看")]}),e(p,{ghost:!0,type:"error",onClick:()=>{m.api.health.log(a.value).delete({params:{filename:t.filename}}).then(()=>{s.value.splice(s.value.findIndex(d=>d.filename===t.filename),1)})}},{default:()=>[c("删除")]})])}}))}})]})])}}),O=f({props:{data:{type:String,default:""}},setup(s){const l=r(!0);return x(()=>{setTimeout(()=>{l.value=!1},1e3)}),()=>e("div",{class:"h-[600px] max-h-[70vh] overflow-auto relative"},[l.value?e("div",{class:"w-full flex items-center justify-center h-full"},[e(y,{show:!0,strokeWidth:14},null)]):e(w,{class:"h-full w-full max-h-full",onReady:u=>{u.write(s.data)}},null)])}}),q=f({setup(){const s=(a=!0)=>{i.socket.emit("log",{prevLog:a})};let l;const u=[],n=a=>{l?(u.length>0&&o(l),l.write(a)):u.push(a)},o=a=>{for(;u.length;){const t=u.shift();a.write(t)}};return T(()=>{s(),v.on(h.STDOUT,n)}),E(()=>{const a=()=>{s(!1)};return i.socket.io.on("open",a),()=>{i.socket.io.off("open",a)}}),C(()=>{i.socket.emit("unlog"),v.off(h.STDOUT,n)}),()=>e(w,{darkMode:!0,onReady:a=>{l=a,o(l)}},null)}}),$=f({setup(){const s=L(),l=S(()=>s.query.tab?.toString()||"0"),u=M();return()=>e(R,null,{default:()=>[e(F,{size:"medium",value:l.value,onUpdateValue:n=>{u.replace({...s,query:{...s.query,tab:n}})}},{default:()=>[e(g,{tab:"日志",name:"0"},{default:()=>[e(V,null,null)]}),e(g,{tab:"实时",name:"1"},{default:()=>[e(q,null,null)]})]})]})}});export{$ as default};
