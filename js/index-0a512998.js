import{H as w}from"./rounded-button-b3c86bd2.js";import{d as f,s as d,u as x,y as P,aL as A,eb as M,x as v,w as D,h as t,F,ej as H,ek as I,C as L,b_ as R,g as b,t as j,l as C,k as p,R as B,p as g,au as V,J as Y,L as _}from"./index-c46c2349.js";import{X as O}from"./index-d7c668d9.js";import{u as T}from"./use-react-c8a20321.js";import{l as U,b as c}from"./index-3fb38004.js";import{E as m}from"./types-a9f3cfbf.js";import{N as $}from"./Form-01351a1d.js";import{N as q,a as G}from"./ListItem-3318263b.js";function X(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!_(e)}const se=f({name:"PtyView",setup(){let e;const s=d(!1);let o;const l=a=>{e.write(a),e.focus()},r=x(),y=P(),n=U(`${M}/pty`,{timeout:1e4,transports:["websocket"],forceNew:!0,query:{token:A().replace(/^bearer\s/,"")}});n.on("message",({code:a,data:i,type:u})=>{c.emit(u,i,a)}),T(()=>{const a=()=>{e.writeln("PTY connection closed"),r.warning("连接已断开",{closable:!0})};return n.on("disconnect",a),()=>{n.off("disconnect",a)}}),v(()=>{n.offAny(),n.disconnect()}),T(()=>{const a=c.on(m.PTY_MESSAGE,(i,u)=>{if(u===1e4||u===10001){const E=y.create({title:"验证密码",closable:!0,content:()=>t(z,{onConfirm:S=>{E.destroy(),requestAnimationFrame(()=>{n.emit("pty",R(e?{cols:e.cols,rows:e.rows}:void 0,{password:S}))})}},null)})}r.info(i)});return()=>{a()}});const k=D(()=>s.value,a=>{a&&(k(),n.emit("pty",{cols:e.cols,rows:e.rows}),o=e.onData(i=>{n.emit("pty-input",i)}),c.on(m.PTY,l))});v(()=>{n.emit("pty-exit"),o?.dispose(),c.off(m.PTY,l)});const h=()=>{if(e&&e.reset(),n.connected===!1){n.io.connect(),setTimeout(()=>{n.connected?n.emit("pty",e?{cols:e.cols,rows:e.rows}:void 0):r.error("重连 Socket 失败")},1500);return}n.emit("pty-exit"),setTimeout(()=>{n.emit("pty",e?{cols:e.cols,rows:e.rows}:void 0)},50)},N=()=>{y.create({title:"连接状态",content:()=>t(J,null,null)})};return()=>t(L,{actionsElement:t(F,null,[t(w,{variant:"info",icon:t(H,null,null),name:"连接状态",onClick:N},null),t(w,{icon:t(I,null,null),name:"重新连接",onClick:h},null)])},{default:()=>[t(O,{class:"!max-h-[calc(100vh-10.5rem)]",darkMode:!0,terminalOptions:{disableStdin:!1},onReady:a=>{s.value=!0,e=a}},null)]})}}),z=f({props:{onConfirm:Function},setup(e){const s=d(""),o=r=>{r.preventDefault(),e.onConfirm?.(s.value)};b(()=>{requestAnimationFrame(()=>{l.value.focus()})});const l=d();return()=>t($,{onSubmit:o,class:"space-y-6 mt-6"},{default:()=>[t(j,{ref:l,showPasswordOn:"mousedown",type:"password",inputProps:{name:"note-password",autocapitalize:"off",autocomplete:"new-password"},value:s.value,placeholder:"请输入密码",onUpdateValue:r=>{s.value=r}},null),t("div",{class:"flex justify-center"},[t(C,{round:!0,type:"primary",onClick:o},{default:()=>[p("确认")]})])]})}}),J=f(()=>{const e=d([]);return b(async()=>{const s=await B.api.pty.record.get();e.value=s.data}),()=>{let s;return t(Y,{bordered:!1,class:"max-h-[70vh] overflow-auto"},{default:()=>[t(q,{bordered:!1,class:"bg-transparent"},X(s=e.value.map(o=>t(G,{key:o.startTime},{default:()=>[t("div",null,[p("开始于 "),g(o.startTime,"yyyy 年 M 月 d 日 HH:mm:ss")]),t("div",null,[p("IP:")," ",t(V,{trigger:"hover",ip:o.ip,triggerEl:t(C,{text:!0},{default:()=>[o.ip]})},null)]),t("div",null,[o.endTime?`结束于 ${g(o.endTime,"yyyy 年 M 月 d 日 HH:mm:ss")}`:"没有结束"]),t("div",null,[o.endTime&&`时长：${Math.abs(new Date(o.startTime).getTime()-new Date(o.endTime).getTime())/1e3|0}秒`])]})))?s:{default:()=>[s]})]})}});export{se as default};
