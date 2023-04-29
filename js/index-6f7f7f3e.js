import{d as f,s as r,g as x,h as e,K as b,J as N,bI as y,k as c,l as p,R as m,F as k,ef as T,x as C,b as L,i as S,v as M,C as R}from"./index-2683cc36.js";import{X as w}from"./index-d230d600.js";import{N as U,a as B}from"./ListItem-d9026c8b.js";import{N as D}from"./Select-ecaf717c.js";import{u as F}from"./use-react-bb6743d1.js";import{socket as i}from"./index-8f04c934.js";import{E as v}from"./types-a9f3cfbf.js";import{b as h}from"./index-3fb38004.js";import{N as V,a as g}from"./Tabs-3c8c80b4.js";import"./Tag-730ab9fc.js";import"./Add-a97444ff.js";import"./throttle-c6b3f453.js";const E=f({setup(){const s=r([]),l=r(!1),o=async()=>{l.value=!0;const{data:t}=await m.api.health.log.list(a.value).get();s.value=t,l.value=!1};x(()=>{o()});const n=r(""),u=r(!1),a=r("native");return()=>e(k,null,[e(b,{transformOrigin:"center",show:u.value,onUpdateShow:t=>void(u.value=t)},{default:()=>[e(N,{title:"查看日志",class:"modal-card !w-[100rem] !bg-dark-400 !text-white !all:text-white ",bordered:!1,closable:!0,onClose:()=>{u.value=!1}},{default:()=>[e(I,{data:n.value},null)]})]}),e(y,{show:l.value},{default:()=>[e(U,{class:"min-h-[300px] bg-transparent"},{header(){return e(D,{class:"ml-auto w-32",value:a.value,onUpdateValue:t=>{a.value=t,o()},options:[{label:"PM2",value:"pm2"},{label:"系统记录",value:"native"}]},null)},default(){return s.value.map(t=>e(B,{key:t.filename},{default(){return e("div",{class:"flex flex-col"},[e("span",null,[t.filename]),e("span",{class:"text-gray-400 dark:text-gray-600 text-sm grid grid-cols-[5rem,auto]"},[e("span",null,[t.size]),e("span",null,[c("类型："),t.type])])])},suffix(){return e("div",{class:"flex space-x-2"},[e(p,{ghost:!0,type:"success",onClick:()=>{m.api.health.log(a.value).get({params:{filename:t.filename}}).then(d=>{n.value=d,u.value=!0})}},{default:()=>[c("查看")]}),e(p,{ghost:!0,type:"error",onClick:()=>{m.api.health.log(a.value).delete({params:{filename:t.filename}}).then(()=>{s.value.splice(s.value.findIndex(d=>d.filename===t.filename),1)})}},{default:()=>[c("删除")]})])}}))}})]})])}}),I=f({props:{data:{type:String,default:""}},setup(s){const l=r(!0);return x(()=>{setTimeout(()=>{l.value=!1},1e3)}),()=>e("div",{class:"h-[600px] max-h-[70vh] overflow-auto relative"},[l.value?e("div",{class:"w-full flex items-center justify-center h-full"},[e(y,{show:!0,strokeWidth:14},null)]):e(w,{class:"h-full w-full max-h-full",onReady:o=>{o.write(s.data)}},null)])}}),O=f({setup(){const s=(a=!0)=>{i.socket.emit("log",{prevLog:a})};let l;const o=[],n=a=>{l?(o.length>0&&u(l),l.write(a)):o.push(a)},u=a=>{for(;o.length;){const t=o.shift();a.write(t)}};return T(()=>{s(),h.on(v.STDOUT,n)}),F(()=>{const a=()=>{s(!1)};return i.socket.io.on("open",a),()=>{i.socket.io.off("open",a)}}),C(()=>{i.socket.emit("unlog"),h.off(v.STDOUT,n)}),()=>e(w,{darkMode:!0,onReady:a=>{l=a,u(l)}},null)}}),G=f({setup(){const s=L(),l=S(()=>s.query.tab?.toString()||"0"),o=M();return()=>e(R,null,{default:()=>[e(V,{size:"medium",value:l.value,onUpdateValue:n=>{o.replace({...s,query:{...s.query,tab:n}})}},{default:()=>[e(g,{tab:"日志",name:"0"},{default:()=>[e(E,null,null)]}),e(g,{tab:"实时",name:"1"},{default:()=>[e(O,null,null)]})]})]})}});export{G as default};
