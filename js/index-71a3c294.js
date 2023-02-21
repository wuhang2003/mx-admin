import{H as w}from"./rounded-button-526cbe3b.js";import{q as x,H as P,G as A,a$ as M,b0 as D,K as H,x as F,O as v,aq as I}from"./app-4e878528.js";import{X as q}from"./index-a6fb6cd2.js";import{u as b}from"./use-react-44edf12c.js";import{l as O,b as c}from"./index-3fb38004.js";import{E as p}from"./types-a9f3cfbf.js";import{k as f,y as m,ar as g,au as R,U as t,F as B,o as U,R as T,aO as C,br as d,bq as V}from"./Button-5ec267f1.js";import{g as Y,N as $}from"./use-store-ref-4d0ce661.js";import{N as j}from"./Form-4f2beb1e.js";import{N as L,a as _}from"./ListItem-5263dc28.js";import{b as G}from"./Card-73dd4072.js";import"./preload-helper-f651ca80.js";import"./Spin-2c3e5ca3.js";import"./context-2fd66e76.js";import"./light-50e066bd.js";import"./light-dfa006ca.js";function X(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!V(e)}const pe=f({name:"PtyView",setup(){let e;const s=m(!1);let o;const i=a=>{e.write(a),e.focus()},r=x(),y=Y(),n=O(`${A}/pty`,{timeout:1e4,transports:["websocket"],forceNew:!0,query:{token:P().replace(/^bearer\s/,"")}});n.on("message",({code:a,data:l,type:u})=>{c.emit(u,l,a)}),b(()=>{const a=()=>{e.writeln("PTY connection closed"),r.warning("连接已断开",{closable:!0})};return n.on("disconnect",a),()=>{n.off("disconnect",a)}}),g(()=>{n.offAny(),n.disconnect()}),b(()=>{const a=c.on(p.PTY_MESSAGE,(l,u)=>{if(u===1e4||u===10001){const E=y.create({title:"验证密码",closable:!0,content:()=>t(z,{onConfirm:S=>{E.destroy(),requestAnimationFrame(()=>{n.emit("pty",U(e?{cols:e.cols,rows:e.rows}:void 0,{password:S}))})}},null)})}r.info(l)});return()=>{a()}});const N=R(()=>s.value,a=>{a&&(N(),n.emit("pty",{cols:e.cols,rows:e.rows}),o=e.onData(l=>{n.emit("pty-input",l)}),c.on(p.PTY,i))});g(()=>{n.emit("pty-exit"),o?.dispose(),c.off(p.PTY,i)});const k=()=>{if(e&&e.reset(),n.connected===!1){n.io.connect(),setTimeout(()=>{n.connected?n.emit("pty",e?{cols:e.cols,rows:e.rows}:void 0):r.error("重连 Socket 失败")},1500);return}n.emit("pty-exit"),setTimeout(()=>{n.emit("pty",e?{cols:e.cols,rows:e.rows}:void 0)},50)},h=()=>{y.create({title:"连接状态",content:()=>t(K,null,null)})};return()=>t(H,{actionsElement:t(B,null,[t(w,{variant:"info",icon:t(M,null,null),name:"连接状态",onClick:h},null),t(w,{icon:t(D,null,null),name:"重新连接",onClick:k},null)])},{default:()=>[t(q,{class:"!max-h-[calc(100vh-10.5rem)]",darkMode:!0,terminalOptions:{disableStdin:!1},onReady:a=>{s.value=!0,e=a}},null)]})}}),z=f({props:{onConfirm:Function},setup(e){const s=m(""),o=r=>{r.preventDefault(),e.onConfirm?.(s.value)};T(()=>{requestAnimationFrame(()=>{i.value.focus()})});const i=m();return()=>t(j,{onSubmit:o,class:"space-y-6 mt-6"},{default:()=>[t($,{ref:i,showPasswordOn:"mousedown",type:"password",inputProps:{name:"note-password",autocapitalize:"off",autocomplete:"new-password"},value:s.value,placeholder:"请输入密码",onUpdateValue:r=>{s.value=r}},null),t("div",{class:"flex justify-center"},[t(C,{round:!0,type:"primary",onClick:o},{default:()=>[d("确认")]})])]})}}),K=f(()=>{const e=m([]);return T(async()=>{const s=await F.api.pty.record.get();e.value=s.data}),()=>{let s;return t(G,{bordered:!1,class:"max-h-[70vh] overflow-auto"},{default:()=>[t(L,{bordered:!1,class:"bg-transparent"},X(s=e.value.map(o=>t(_,{key:o.startTime},{default:()=>[t("div",null,[d("开始于 "),v(o.startTime,"yyyy 年 M 月 d 日 HH:mm:ss")]),t("div",null,[d("IP:")," ",t(I,{trigger:"hover",ip:o.ip,triggerEl:t(C,{text:!0},{default:()=>[o.ip]})},null)]),t("div",null,[o.endTime?`结束于 ${v(o.endTime,"yyyy 年 M 月 d 日 HH:mm:ss")}`:"没有结束"]),t("div",null,[o.endTime&&`时长：${Math.abs(new Date(o.startTime).getTime()-new Date(o.endTime).getTime())/1e3|0}秒`])]})))?s:{default:()=>[s]})]})}});export{pe as default};
