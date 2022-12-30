import{B as l,C as w,G as N,v as f}from"./app-0ff7b4dc.js";import"./guard-a067d9f6.js";import{l as E,b as g}from"./index-7c19d076.js";import{E as s}from"./types-a9f3cfbf.js";import{U as u,aO as h,bq as m}from"./Button-2747a3c5.js";import{a as d}from"./Spin-3ddc0370.js";import"./use-store-ref-0c1782ca.js";import"./preload-helper-f651ca80.js";import"./Card-b81187b1.js";class p{constructor(){this.initNotice()}initNotice(){return new Promise((i,t)=>{if(!("Notification"in window))t(new Error("浏览器不支持发送通知"));else if(Notification.permission!=="denied")Notification.requestPermission().then(o=>o==="granted"?i(!0):t(new Error("已拒绝通知")));else{if(Notification.permission==="denied")return t(new Error("已拒绝通知"));t(!0)}})}notice(i,t,o={}){return new Promise(e=>{this.initNotice().then(n=>{if(n&&!document.hasFocus()){const r=new Notification(i,{body:t,...o});e(r)}})})}}const a={get warning(){return window.notification.warning},get warn(){return window.notification.warning},get success(){return window.notification.success},get error(){return window.notification.error},get info(){return window.notification.info}};class T{get socket(){return this._socket}#t=l.title;#e=new p;isInit=!1;initIO(){if(this.isInit)return;this.destory();const i=w();i&&(this._socket=E(`${N}/admin`,{timeout:1e4,transports:["websocket"],forceNew:!0,query:{token:i.replace(/^bearer\s/,"")}}),this.socket.on("message",t=>{if(typeof t!="string")return this.handleEvent(t.type,t.data,t.code);const{data:o,type:e,code:n}=JSON.parse(t);this.handleEvent(e,o,n)}),this.socket.on("connect_error",()=>{}),this.socket.io.on("error",()=>{}),this.socket.io.on("reconnect",()=>{}),this.socket.io.on("reconnect_attempt",()=>{}),this.socket.io.on("reconnect_failed",()=>{}),this.socket.on("disconnect",()=>{let o=setInterval(()=>{this.socket.connected===!1?this.socket.io.connect():o=clearInterval(o)},2e3)}),this.isInit=!0)}handleEvent(i,t,o){switch(i){case s.GATEWAY_CONNECT:break;case s.GATEWAY_DISCONNECT:{a.warning(t);break}case s.AUTH_FAILED:{console.log("等待登录中..."),this.socket.close();break}case s.COMMENT_CREATE:{const e=`${t.author}: ${t.text}`,n=()=>{f.push({name:"comment"}),r.destroy()},r=a.success({title:"新的评论",content:e,action(){return u(d,{justify:"end"},{default:()=>[u(h,{onClick:n,type:"primary",round:!0,ghost:!0},{default:()=>[m("查看")]})]})}});this.#e.notice(`${this.#t} 收到新的评论`,e).then(c=>{c&&(c.onclick=()=>{document.hasFocus()?n():window.open(f.resolve({name:"comment"}).href)})});break}case s.ADMIN_NOTIFICATION:{const{type:e,message:n}=t;a[e]({content:n});break}case s.CONTENT_REFRESH:{a.warning({content:"数据库有变动，将在 1 秒后重载页面"}),setTimeout(()=>{location.reload()},1e3);break}case s.LINK_APPLY:{const e=t.name,n=()=>{f.push({name:"friends"}),r.destroy()},r=a.success({title:"新的友链申请",content:e,action(){return u(d,{justify:"end"},{default:()=>[u(h,{onClick:n,type:"primary",round:!0,ghost:!0},{default:()=>[m("查看")]})]})}});this.#e.notice(`${this.#t} 收到新的友链申请`,e).then(c=>{c&&(c.onclick=()=>{document.hasFocus()?n():window.open("/")})});break}}g.emit(i,t,o)}destory(){this.socket&&(this.socket.disconnect(),this.socket.off("message"),this.socket.offAny(),this._socket=null,this.isInit=!1)}}const I=new T;window.socket=I;export{I as socket};
