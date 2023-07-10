import{H as w}from"./rounded-button-d2815255.js";import{d as f,s as d,u as x,y as P,aN as A,ej as M,x as v,w as D,h as t,F,es as H,et as I,C as R,c6 as j,g as b,t as B,l as C,k as p,R as L,p as g,av as V,J as Y,L as O}from"./index-cd812593.js";import{X as U}from"./index-9b67e664.js";import{u as T}from"./use-react-7ba26c0a.js";import{l as _,b as c}from"./index-08a147b7.js";import{E as m}from"./types-a9f3cfbf.js";import{N as $}from"./Form-8f5690aa.js";import{N as q,a as G}from"./ListItem-ade9a4d7.js";function X(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!O(e)}const se=f({name:"PtyView",setup(){let e;const s=d(!1);let o;const l=a=>{e.write(a),e.focus()},r=x(),y=P(),n=_(`${M}/pty`,{timeout:1e4,transports:["websocket"],forceNew:!0,query:{token:A().replace(/^bearer\s/,"")}});n.on("message",({code:a,data:i,type:u})=>{c.emit(u,i,a)}),T(()=>{const a=()=>{e.writeln("PTY connection closed"),r.warning("连接已断开",{closable:!0})};return n.on("disconnect",a),()=>{n.off("disconnect",a)}}),v(()=>{n.offAny(),n.disconnect()}),T(()=>{const a=c.on(m.PTY_MESSAGE,(i,u)=>{if(u===1e4||u===10001){const E=y.create({title:"验证密码",closable:!0,content:()=>t(z,{onConfirm:S=>{E.destroy(),requestAnimationFrame(()=>{n.emit("pty",j(e?{cols:e.cols,rows:e.rows}:void 0,{password:S}))})}},null)})}r.info(i)});return()=>{a()}});const N=D(()=>s.value,a=>{a&&(N(),n.emit("pty",{cols:e.cols,rows:e.rows}),o=e.onData(i=>{n.emit("pty-input",i)}),c.on(m.PTY,l))});v(()=>{n.emit("pty-exit"),o?.dispose(),c.off(m.PTY,l)});const h=()=>{if(e&&e.reset(),n.connected===!1){n.io.connect(),setTimeout(()=>{n.connected?n.emit("pty",e?{cols:e.cols,rows:e.rows}:void 0):r.error("重连 Socket 失败")},1500);return}n.emit("pty-exit"),setTimeout(()=>{n.emit("pty",e?{cols:e.cols,rows:e.rows}:void 0)},50)},k=()=>{y.create({title:"连接状态",content:()=>t(J,null,null)})};return()=>t(R,{actionsElement:t(F,null,[t(w,{variant:"info",icon:t(H,null,null),name:"连接状态",onClick:k},null),t(w,{icon:t(I,null,null),name:"重新连接",onClick:h},null)])},{default:()=>[t(U,{class:"!max-h-[calc(100vh-10.5rem)]",darkMode:!0,terminalOptions:{disableStdin:!1},onReady:a=>{s.value=!0,e=a}},null)]})}}),z=f({props:{onConfirm:Function},setup(e){const s=d(""),o=r=>{r.preventDefault(),e.onConfirm?.(s.value)};b(()=>{requestAnimationFrame(()=>{l.value.focus()})});const l=d();return()=>t($,{onSubmit:o,class:"space-y-6 mt-6"},{default:()=>[t(B,{ref:l,showPasswordOn:"mousedown",type:"password",inputProps:{name:"note-password",autocapitalize:"off",autocomplete:"new-password"},value:s.value,placeholder:"请输入密码",onUpdateValue:r=>{s.value=r}},null),t("div",{class:"flex justify-center"},[t(C,{round:!0,type:"primary",onClick:o},{default:()=>[p("确认")]})])]})}}),J=f(()=>{const e=d([]);return b(async()=>{const s=await L.api.pty.record.get();e.value=s.data}),()=>{let s;return t(Y,{bordered:!1,class:"max-h-[70vh] overflow-auto"},{default:()=>[t(q,{bordered:!1,class:"bg-transparent"},X(s=e.value.map(o=>t(G,{key:o.startTime},{default:()=>[t("div",null,[p("开始于 "),g(o.startTime,"yyyy 年 M 月 d 日 HH:mm:ss")]),t("div",null,[p("IP:")," ",t(V,{trigger:"hover",ip:o.ip,triggerEl:t(C,{text:!0},{default:()=>[o.ip]})},null)]),t("div",null,[o.endTime?`结束于 ${g(o.endTime,"yyyy 年 M 月 d 日 HH:mm:ss")}`:"没有结束"]),t("div",null,[o.endTime&&`时长：${Math.abs(new Date(o.startTime).getTime()-new Date(o.endTime).getTime())/1e3|0}秒`])]})))?s:{default:()=>[s]})]})}});export{se as default};
